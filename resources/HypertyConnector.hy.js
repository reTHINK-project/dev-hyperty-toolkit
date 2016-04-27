(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

/* More information about these options at jshint.com/docs/options */
/* jshint browser: true, camelcase: true, curly: true, devel: true,
   eqeqeq: true, forin: false, globalstrict: true, node: true,
   quotmark: single, undef: true, unused: strict */
/* global mozRTCIceCandidate, mozRTCPeerConnection, Promise,
mozRTCSessionDescription, webkitRTCPeerConnection, MediaStreamTrack,
MediaStream, RTCIceGatherer, RTCIceTransport, RTCDtlsTransport,
RTCRtpSender, RTCRtpReceiver*/
/* exported trace,requestUserMedia */

'use strict';

var getUserMedia = null;
var attachMediaStream = null;
var reattachMediaStream = null;
var webrtcDetectedBrowser = null;
var webrtcDetectedVersion = null;
var webrtcMinimumVersion = null;
var webrtcUtils = {
  log: function() {
    // suppress console.log output when being included as a module.
    if (typeof module !== 'undefined' ||
        typeof require === 'function' && typeof define === 'function') {
      return;
    }
    console.log.apply(console, arguments);
  },
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
  }
};

function trace(text) {
  // This function is used for logging.
  if (text[text.length - 1] === '\n') {
    text = text.substring(0, text.length - 1);
  }
  if (window.performance) {
    var now = (window.performance.now() / 1000).toFixed(3);
    webrtcUtils.log(now + ': ' + text);
  } else {
    webrtcUtils.log(text);
  }
}

if (typeof window === 'object') {
  if (window.HTMLMediaElement &&
    !('srcObject' in window.HTMLMediaElement.prototype)) {
    // Shim the srcObject property, once, when HTMLMediaElement is found.
    Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
      get: function() {
        // If prefixed srcObject property exists, return it.
        // Otherwise use the shimmed property, _srcObject
        return 'mozSrcObject' in this ? this.mozSrcObject : this._srcObject;
      },
      set: function(stream) {
        if ('mozSrcObject' in this) {
          this.mozSrcObject = stream;
        } else {
          // Use _srcObject as a private property for this shim
          this._srcObject = stream;
          // TODO: revokeObjectUrl(this.src) when !stream to release resources?
          this.src = URL.createObjectURL(stream);
        }
      }
    });
  }
  // Proxy existing globals
  getUserMedia = window.navigator && window.navigator.getUserMedia;
}

// Attach a media stream to an element.
attachMediaStream = function(element, stream) {
  element.srcObject = stream;
};

reattachMediaStream = function(to, from) {
  to.srcObject = from.srcObject;
};

if (typeof window === 'undefined' || !window.navigator) {
  webrtcUtils.log('This does not appear to be a browser');
  webrtcDetectedBrowser = 'not a browser';
} else if (navigator.mozGetUserMedia) {
  webrtcUtils.log('This appears to be Firefox');

  webrtcDetectedBrowser = 'firefox';

  // the detected firefox version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Firefox\/([0-9]+)\./, 1);

  // the minimum firefox version still supported by adapter.
  webrtcMinimumVersion = 31;

  // Shim for RTCPeerConnection on older versions.
  if (!window.RTCPeerConnection) {
    window.RTCPeerConnection = function(pcConfig, pcConstraints) {
      if (webrtcDetectedVersion < 38) {
        // .urls is not supported in FF < 38.
        // create RTCIceServers with a single url.
        if (pcConfig && pcConfig.iceServers) {
          var newIceServers = [];
          for (var i = 0; i < pcConfig.iceServers.length; i++) {
            var server = pcConfig.iceServers[i];
            if (server.hasOwnProperty('urls')) {
              for (var j = 0; j < server.urls.length; j++) {
                var newServer = {
                  url: server.urls[j]
                };
                if (server.urls[j].indexOf('turn') === 0) {
                  newServer.username = server.username;
                  newServer.credential = server.credential;
                }
                newIceServers.push(newServer);
              }
            } else {
              newIceServers.push(pcConfig.iceServers[i]);
            }
          }
          pcConfig.iceServers = newIceServers;
        }
      }
      return new mozRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
    };
    window.RTCPeerConnection.prototype = mozRTCPeerConnection.prototype;

    // wrap static methods. Currently just generateCertificate.
    if (mozRTCPeerConnection.generateCertificate) {
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function() {
          if (arguments.length) {
            return mozRTCPeerConnection.generateCertificate.apply(null,
                arguments);
          } else {
            return mozRTCPeerConnection.generateCertificate;
          }
        }
      });
    }

    window.RTCSessionDescription = mozRTCSessionDescription;
    window.RTCIceCandidate = mozRTCIceCandidate;
  }

  // getUserMedia constraints shim.
  getUserMedia = function(constraints, onSuccess, onError) {
    var constraintsToFF37 = function(c) {
      if (typeof c !== 'object' || c.require) {
        return c;
      }
      var require = [];
      Object.keys(c).forEach(function(key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = c[key] = (typeof c[key] === 'object') ?
            c[key] : {ideal: c[key]};
        if (r.min !== undefined ||
            r.max !== undefined || r.exact !== undefined) {
          require.push(key);
        }
        if (r.exact !== undefined) {
          if (typeof r.exact === 'number') {
            r.min = r.max = r.exact;
          } else {
            c[key] = r.exact;
          }
          delete r.exact;
        }
        if (r.ideal !== undefined) {
          c.advanced = c.advanced || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[key] = {min: r.ideal, max: r.ideal};
          } else {
            oc[key] = r.ideal;
          }
          c.advanced.push(oc);
          delete r.ideal;
          if (!Object.keys(r).length) {
            delete c[key];
          }
        }
      });
      if (require.length) {
        c.require = require;
      }
      return c;
    };
    if (webrtcDetectedVersion < 38) {
      webrtcUtils.log('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37(constraints.video);
      }
      webrtcUtils.log('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, onError);
  };

  navigator.getUserMedia = getUserMedia;

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
      addEventListener: function() { },
      removeEventListener: function() { }
    };
  }
  navigator.mediaDevices.enumerateDevices =
      navigator.mediaDevices.enumerateDevices || function() {
    return new Promise(function(resolve) {
      var infos = [
        {kind: 'audioinput', deviceId: 'default', label: '', groupId: ''},
        {kind: 'videoinput', deviceId: 'default', label: '', groupId: ''}
      ];
      resolve(infos);
    });
  };

  if (webrtcDetectedVersion < 41) {
    // Work around http://bugzil.la/1169665
    var orgEnumerateDevices =
        navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
    navigator.mediaDevices.enumerateDevices = function() {
      return orgEnumerateDevices().then(undefined, function(e) {
        if (e.name === 'NotFoundError') {
          return [];
        }
        throw e;
      });
    };
  }
} else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
  webrtcUtils.log('This appears to be Chrome');

  webrtcDetectedBrowser = 'chrome';

  // the detected chrome version.
  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Chrom(e|ium)\/([0-9]+)\./, 2);

  // the minimum chrome version still supported by adapter.
  webrtcMinimumVersion = 38;

  // The RTCPeerConnection object.
  window.RTCPeerConnection = function(pcConfig, pcConstraints) {
    // Translate iceTransportPolicy to iceTransports,
    // see https://code.google.com/p/webrtc/issues/detail?id=4869
    if (pcConfig && pcConfig.iceTransportPolicy) {
      pcConfig.iceTransports = pcConfig.iceTransportPolicy;
    }

    var pc = new webkitRTCPeerConnection(pcConfig, pcConstraints); // jscs:ignore requireCapitalizedConstructors
    var origGetStats = pc.getStats.bind(pc);
    pc.getStats = function(selector, successCallback, errorCallback) { // jshint ignore: line
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats(selector, successCallback);
      }

      var fixChromeStats = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper = function(response) {
          args[1](fixChromeStats(response));
        };

        return origGetStats.apply(this, [successCallbackWrapper, arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        if (args.length === 1 && selector === null) {
          origGetStats.apply(self, [
              function(response) {
                resolve.apply(null, [fixChromeStats(response)]);
              }, reject]);
        } else {
          origGetStats.apply(self, [resolve, reject]);
        }
      });
    };

    return pc;
  };
  window.RTCPeerConnection.prototype = webkitRTCPeerConnection.prototype;

  // wrap static methods. Currently just generateCertificate.
  if (webkitRTCPeerConnection.generateCertificate) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function() {
        if (arguments.length) {
          return webkitRTCPeerConnection.generateCertificate.apply(null,
              arguments);
        } else {
          return webkitRTCPeerConnection.generateCertificate;
        }
      }
    });
  }

  // add promise support
  ['createOffer', 'createAnswer'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var self = this;
      if (arguments.length < 1 || (arguments.length === 1 &&
          typeof(arguments[0]) === 'object')) {
        var opts = arguments.length === 1 ? arguments[0] : undefined;
        return new Promise(function(resolve, reject) {
          nativeMethod.apply(self, [resolve, reject, opts]);
        });
      } else {
        return nativeMethod.apply(this, arguments);
      }
    };
  });

  ['setLocalDescription', 'setRemoteDescription',
      'addIceCandidate'].forEach(function(method) {
    var nativeMethod = webkitRTCPeerConnection.prototype[method];
    webkitRTCPeerConnection.prototype[method] = function() {
      var args = arguments;
      var self = this;
      return new Promise(function(resolve, reject) {
        nativeMethod.apply(self, [args[0],
            function() {
              resolve();
              if (args.length >= 2) {
                args[1].apply(null, []);
              }
            },
            function(err) {
              reject(err);
              if (args.length >= 3) {
                args[2].apply(null, [err]);
              }
            }]
          );
      });
    };
  });

  // getUserMedia constraints shim.
  var constraintsToChrome = function(c) {
    if (typeof c !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function(key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  getUserMedia = function(constraints, onSuccess, onError) {
    if (constraints.audio) {
      constraints.audio = constraintsToChrome(constraints.audio);
    }
    if (constraints.video) {
      constraints.video = constraintsToChrome(constraints.video);
    }
    webrtcUtils.log('chrome: ' + JSON.stringify(constraints));
    return navigator.webkitGetUserMedia(constraints, onSuccess, onError);
  };
  navigator.getUserMedia = getUserMedia;

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: requestUserMedia,
                              enumerateDevices: function() {
      return new Promise(function(resolve) {
        var kinds = {audio: 'audioinput', video: 'videoinput'};
        return MediaStreamTrack.getSources(function(devices) {
          resolve(devices.map(function(device) {
            return {label: device.label,
                    kind: kinds[device.kind],
                    deviceId: device.id,
                    groupId: ''};
          }));
        });
      });
    }};
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return requestUserMedia(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      webrtcUtils.log('spec:   ' + JSON.stringify(c)); // whitespace for alignment
      c.audio = constraintsToChrome(c.audio);
      c.video = constraintsToChrome(c.video);
      webrtcUtils.log('chrome: ' + JSON.stringify(c));
      return origGetUserMedia(c);
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      webrtcUtils.log('Dummy mediaDevices.removeEventListener called.');
    };
  }

  // Attach a media stream to an element.
  attachMediaStream = function(element, stream) {
    if (webrtcDetectedVersion >= 43) {
      element.srcObject = stream;
    } else if (typeof element.src !== 'undefined') {
      element.src = URL.createObjectURL(stream);
    } else {
      webrtcUtils.log('Error attaching stream to element.');
    }
  };
  reattachMediaStream = function(to, from) {
    if (webrtcDetectedVersion >= 43) {
      to.srcObject = from.srcObject;
    } else {
      to.src = from.src;
    }
  };

} else if (navigator.mediaDevices && navigator.userAgent.match(
    /Edge\/(\d+).(\d+)$/)) {
  webrtcUtils.log('This appears to be Edge');
  webrtcDetectedBrowser = 'edge';

  webrtcDetectedVersion = webrtcUtils.extractVersion(navigator.userAgent,
      /Edge\/(\d+).(\d+)$/, 2);

  // The minimum version still supported by adapter.
  // This is the build number for Edge.
  webrtcMinimumVersion = 10547;

  if (window.RTCIceGatherer) {
    // Generate an alphanumeric identifier for cname or mids.
    // TODO: use UUIDs instead? https://gist.github.com/jed/982883
    var generateIdentifier = function() {
      return Math.random().toString(36).substr(2, 10);
    };

    // The RTCP CNAME used by all peerconnections from the same JS.
    var localCName = generateIdentifier();

    // SDP helpers - to be moved into separate module.
    var SDPUtils = {};

    // Splits SDP into lines, dealing with both CRLF and LF.
    SDPUtils.splitLines = function(blob) {
      return blob.trim().split('\n').map(function(line) {
        return line.trim();
      });
    };

    // Splits SDP into sessionpart and mediasections. Ensures CRLF.
    SDPUtils.splitSections = function(blob) {
      var parts = blob.split('\r\nm=');
      return parts.map(function(part, index) {
        return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
      });
    };

    // Returns lines that start with a certain prefix.
    SDPUtils.matchPrefix = function(blob, prefix) {
      return SDPUtils.splitLines(blob).filter(function(line) {
        return line.indexOf(prefix) === 0;
      });
    };

    // Parses an ICE candidate line. Sample input:
    // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8 rport 55996"
    SDPUtils.parseCandidate = function(line) {
      var parts;
      // Parse both variants.
      if (line.indexOf('a=candidate:') === 0) {
        parts = line.substring(12).split(' ');
      } else {
        parts = line.substring(10).split(' ');
      }

      var candidate = {
        foundation: parts[0],
        component: parts[1],
        protocol: parts[2].toLowerCase(),
        priority: parseInt(parts[3], 10),
        ip: parts[4],
        port: parseInt(parts[5], 10),
        // skip parts[6] == 'typ'
        type: parts[7]
      };

      for (var i = 8; i < parts.length; i += 2) {
        switch (parts[i]) {
          case 'raddr':
            candidate.relatedAddress = parts[i + 1];
            break;
          case 'rport':
            candidate.relatedPort = parseInt(parts[i + 1], 10);
            break;
          case 'tcptype':
            candidate.tcpType = parts[i + 1];
            break;
          default: // Unknown extensions are silently ignored.
            break;
        }
      }
      return candidate;
    };

    // Translates a candidate object into SDP candidate attribute.
    SDPUtils.writeCandidate = function(candidate) {
      var sdp = [];
      sdp.push(candidate.foundation);
      sdp.push(candidate.component);
      sdp.push(candidate.protocol.toUpperCase());
      sdp.push(candidate.priority);
      sdp.push(candidate.ip);
      sdp.push(candidate.port);

      var type = candidate.type;
      sdp.push('typ');
      sdp.push(type);
      if (type !== 'host' && candidate.relatedAddress &&
          candidate.relatedPort) {
        sdp.push('raddr');
        sdp.push(candidate.relatedAddress); // was: relAddr
        sdp.push('rport');
        sdp.push(candidate.relatedPort); // was: relPort
      }
      if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
        sdp.push('tcptype');
        sdp.push(candidate.tcpType);
      }
      return 'candidate:' + sdp.join(' ');
    };

    // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
    // a=rtpmap:111 opus/48000/2
    SDPUtils.parseRtpMap = function(line) {
      var parts = line.substr(9).split(' ');
      var parsed = {
        payloadType: parseInt(parts.shift(), 10) // was: id
      };

      parts = parts[0].split('/');

      parsed.name = parts[0];
      parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
      parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1; // was: channels
      return parsed;
    };

    // Generate an a=rtpmap line from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeRtpMap = function(codec) {
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
          (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
    };

    // Parses an ftmp line, returns dictionary. Sample input:
    // a=fmtp:96 vbr=on;cng=on
    // Also deals with vbr=on; cng=on
    SDPUtils.parseFmtp = function(line) {
      var parsed = {};
      var kv;
      var parts = line.substr(line.indexOf(' ') + 1).split(';');
      for (var j = 0; j < parts.length; j++) {
        kv = parts[j].trim().split('=');
        parsed[kv[0].trim()] = kv[1];
      }
      return parsed;
    };

    // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeFtmp = function(codec) {
      var line = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.parameters && codec.parameters.length) {
        var params = [];
        Object.keys(codec.parameters).forEach(function(param) {
          params.push(param + '=' + codec.parameters[param]);
        });
        line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
      }
      return line;
    };

    // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
    // a=rtcp-fb:98 nack rpsi
    SDPUtils.parseRtcpFb = function(line) {
      var parts = line.substr(line.indexOf(' ') + 1).split(' ');
      return {
        type: parts.shift(),
        parameter: parts.join(' ')
      };
    };
    // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
    SDPUtils.writeRtcpFb = function(codec) {
      var lines = '';
      var pt = codec.payloadType;
      if (codec.preferredPayloadType !== undefined) {
        pt = codec.preferredPayloadType;
      }
      if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
        // FIXME: special handling for trr-int?
        codec.rtcpFeedback.forEach(function(fb) {
          lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + ' ' + fb.parameter +
              '\r\n';
        });
      }
      return lines;
    };

    // Parses an RFC 5576 ssrc media attribute. Sample input:
    // a=ssrc:3735928559 cname:something
    SDPUtils.parseSsrcMedia = function(line) {
      var sp = line.indexOf(' ');
      var parts = {
        ssrc: line.substr(7, sp - 7),
      };
      var colon = line.indexOf(':', sp);
      if (colon > -1) {
        parts.attribute = line.substr(sp + 1, colon - sp - 1);
        parts.value = line.substr(colon + 1);
      } else {
        parts.attribute = line.substr(sp + 1);
      }
      return parts;
    };

    // Extracts DTLS parameters from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the fingerprint line as input. See also getIceParameters.
    SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      lines = lines.concat(SDPUtils.splitLines(sessionpart)); // Search in session part, too.
      var fpLine = lines.filter(function(line) {
        return line.indexOf('a=fingerprint:') === 0;
      })[0].substr(14);
      // Note: a=setup line is ignored since we use the 'auto' role.
      var dtlsParameters = {
        role: 'auto',
        fingerprints: [{
          algorithm: fpLine.split(' ')[0],
          value: fpLine.split(' ')[1]
        }]
      };
      return dtlsParameters;
    };

    // Serializes DTLS parameters to SDP.
    SDPUtils.writeDtlsParameters = function(params, setupType) {
      var sdp = 'a=setup:' + setupType + '\r\n';
      params.fingerprints.forEach(function(fp) {
        sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
      });
      return sdp;
    };
    // Parses ICE information from SDP media section or sessionpart.
    // FIXME: for consistency with other functions this should only
    //   get the ice-ufrag and ice-pwd lines as input.
    SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
      var lines = SDPUtils.splitLines(mediaSection);
      lines = lines.concat(SDPUtils.splitLines(sessionpart)); // Search in session part, too.
      var iceParameters = {
        usernameFragment: lines.filter(function(line) {
          return line.indexOf('a=ice-ufrag:') === 0;
        })[0].substr(12),
        password: lines.filter(function(line) {
          return line.indexOf('a=ice-pwd:') === 0;
        })[0].substr(10)
      };
      return iceParameters;
    };

    // Serializes ICE parameters to SDP.
    SDPUtils.writeIceParameters = function(params) {
      return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
          'a=ice-pwd:' + params.password + '\r\n';
    };

    // Parses the SDP media section and returns RTCRtpParameters.
    SDPUtils.parseRtpParameters = function(mediaSection) {
      var description = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: [],
        rtcp: []
      };
      var lines = SDPUtils.splitLines(mediaSection);
      var mline = lines[0].split(' ');
      for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
        var pt = mline[i];
        var rtpmapline = SDPUtils.matchPrefix(
            mediaSection, 'a=rtpmap:' + pt + ' ')[0];
        if (rtpmapline) {
          var codec = SDPUtils.parseRtpMap(rtpmapline);
          var fmtps = SDPUtils.matchPrefix(
              mediaSection, 'a=fmtp:' + pt + ' ');
          // Only the first a=fmtp:<pt> is considered.
          codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
          codec.rtcpFeedback = SDPUtils.matchPrefix(
              mediaSection, 'a=rtcp-fb:' + pt + ' ')
            .map(SDPUtils.parseRtcpFb);
          description.codecs.push(codec);
        }
      }
      // FIXME: parse headerExtensions, fecMechanisms and rtcp.
      return description;
    };

    // Generates parts of the SDP media section describing the capabilities / parameters.
    SDPUtils.writeRtpDescription = function(kind, caps) {
      var sdp = '';

      // Build the mline.
      sdp += 'm=' + kind + ' ';
      sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
      sdp += ' UDP/TLS/RTP/SAVPF ';
      sdp += caps.codecs.map(function(codec) {
        if (codec.preferredPayloadType !== undefined) {
          return codec.preferredPayloadType;
        }
        return codec.payloadType;
      }).join(' ') + '\r\n';

      sdp += 'c=IN IP4 0.0.0.0\r\n';
      sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

      // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
      caps.codecs.forEach(function(codec) {
        sdp += SDPUtils.writeRtpMap(codec);
        sdp += SDPUtils.writeFtmp(codec);
        sdp += SDPUtils.writeRtcpFb(codec);
      });
      // FIXME: add headerExtensions, fecMechanismş and rtcp.
      sdp += 'a=rtcp-mux\r\n';
      return sdp;
    };

    SDPUtils.writeSessionBoilerplate = function() {
      // FIXME: sess-id should be an NTP timestamp.
      return 'v=0\r\n' +
          'o=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\n' +
          's=-\r\n' +
          't=0 0\r\n';
    };

    SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
      var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

      // Map ICE parameters (ufrag, pwd) to SDP.
      sdp += SDPUtils.writeIceParameters(
          transceiver.iceGatherer.getLocalParameters());

      // Map DTLS parameters to SDP.
      sdp += SDPUtils.writeDtlsParameters(
          transceiver.dtlsTransport.getLocalParameters(),
          type === 'offer' ? 'actpass' : 'active');

      sdp += 'a=mid:' + transceiver.mid + '\r\n';

      if (transceiver.rtpSender && transceiver.rtpReceiver) {
        sdp += 'a=sendrecv\r\n';
      } else if (transceiver.rtpSender) {
        sdp += 'a=sendonly\r\n';
      } else if (transceiver.rtpReceiver) {
        sdp += 'a=recvonly\r\n';
      } else {
        sdp += 'a=inactive\r\n';
      }

      // FIXME: for RTX there might be multiple SSRCs. Not implemented in Edge yet.
      if (transceiver.rtpSender) {
        var msid = 'msid:' + stream.id + ' ' +
            transceiver.rtpSender.track.id + '\r\n';
        sdp += 'a=' + msid;
        sdp += 'a=ssrc:' + transceiver.sendSsrc + ' ' + msid;
      }
      // FIXME: this should be written by writeRtpDescription.
      sdp += 'a=ssrc:' + transceiver.sendSsrc + ' cname:' +
          localCName + '\r\n';
      return sdp;
    };

    // Gets the direction from the mediaSection or the sessionpart.
    SDPUtils.getDirection = function(mediaSection, sessionpart) {
      // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
      var lines = SDPUtils.splitLines(mediaSection);
      for (var i = 0; i < lines.length; i++) {
        switch (lines[i]) {
          case 'a=sendrecv':
          case 'a=sendonly':
          case 'a=recvonly':
          case 'a=inactive':
            return lines[i].substr(2);
        }
      }
      if (sessionpart) {
        return SDPUtils.getDirection(sessionpart);
      }
      return 'sendrecv';
    };

    // ORTC defines an RTCIceCandidate object but no constructor.
    // Not implemented in Edge.
    if (!window.RTCIceCandidate) {
      window.RTCIceCandidate = function(args) {
        return args;
      };
    }
    // ORTC does not have a session description object but
    // other browsers (i.e. Chrome) that will support both PC and ORTC
    // in the future might have this defined already.
    if (!window.RTCSessionDescription) {
      window.RTCSessionDescription = function(args) {
        return args;
      };
    }

    window.RTCPeerConnection = function(config) {
      var self = this;

      this.onicecandidate = null;
      this.onaddstream = null;
      this.onremovestream = null;
      this.onsignalingstatechange = null;
      this.oniceconnectionstatechange = null;
      this.onnegotiationneeded = null;
      this.ondatachannel = null;

      this.localStreams = [];
      this.remoteStreams = [];
      this.getLocalStreams = function() { return self.localStreams; };
      this.getRemoteStreams = function() { return self.remoteStreams; };

      this.localDescription = new RTCSessionDescription({
        type: '',
        sdp: ''
      });
      this.remoteDescription = new RTCSessionDescription({
        type: '',
        sdp: ''
      });
      this.signalingState = 'stable';
      this.iceConnectionState = 'new';

      this.iceOptions = {
        gatherPolicy: 'all',
        iceServers: []
      };
      if (config && config.iceTransportPolicy) {
        switch (config.iceTransportPolicy) {
          case 'all':
          case 'relay':
            this.iceOptions.gatherPolicy = config.iceTransportPolicy;
            break;
          case 'none':
            // FIXME: remove once implementation and spec have added this.
            throw new TypeError('iceTransportPolicy "none" not supported');
        }
      }
      if (config && config.iceServers) {
        // Edge does not like
        // 1) stun:
        // 2) turn: that does not have all of turn:host:port?transport=udp
        // 3) an array of urls
        config.iceServers.forEach(function(server) {
          if (server.urls) {
            var url;
            if (typeof(server.urls) === 'string') {
              url = server.urls;
            } else {
              url = server.urls[0];
            }
            if (url.indexOf('transport=udp') !== -1) {
              self.iceServers.push({
                username: server.username,
                credential: server.credential,
                urls: url
              });
            }
          }
        });
      }

      // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
      // everything that is needed to describe a SDP m-line.
      this.transceivers = [];

      // since the iceGatherer is currently created in createOffer but we
      // must not emit candidates until after setLocalDescription we buffer
      // them in this array.
      this._localIceCandidatesBuffer = [];
    };

    window.RTCPeerConnection.prototype._emitBufferedCandidates = function() {
      var self = this;
      // FIXME: need to apply ice candidates in a way which is async but in-order
      this._localIceCandidatesBuffer.forEach(function(event) {
        if (self.onicecandidate !== null) {
          self.onicecandidate(event);
        }
      });
      this._localIceCandidatesBuffer = [];
    };

    window.RTCPeerConnection.prototype.addStream = function(stream) {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      this.localStreams.push(stream.clone());
      this._maybeFireNegotiationNeeded();
    };

    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var idx = this.localStreams.indexOf(stream);
      if (idx > -1) {
        this.localStreams.splice(idx, 1);
        this._maybeFireNegotiationNeeded();
      }
    };

    // Determines the intersection of local and remote capabilities.
    window.RTCPeerConnection.prototype._getCommonCapabilities =
        function(localCapabilities, remoteCapabilities) {
      var commonCapabilities = {
        codecs: [],
        headerExtensions: [],
        fecMechanisms: []
      };
      localCapabilities.codecs.forEach(function(lCodec) {
        for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
          var rCodec = remoteCapabilities.codecs[i];
          if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
              lCodec.clockRate === rCodec.clockRate &&
              lCodec.numChannels === rCodec.numChannels) {
            // push rCodec so we reply with offerer payload type
            commonCapabilities.codecs.push(rCodec);

            // FIXME: also need to determine intersection between
            // .rtcpFeedback and .parameters
            break;
          }
        }
      });

      localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
        for (var i = 0; i < remoteCapabilities.headerExtensions.length; i++) {
          var rHeaderExtension = remoteCapabilities.headerExtensions[i];
          if (lHeaderExtension.uri === rHeaderExtension.uri) {
            commonCapabilities.headerExtensions.push(rHeaderExtension);
            break;
          }
        }
      });

      // FIXME: fecMechanisms
      return commonCapabilities;
    };

    // Create ICE gatherer, ICE transport and DTLS transport.
    window.RTCPeerConnection.prototype._createIceAndDtlsTransports =
        function(mid, sdpMLineIndex) {
      var self = this;
      var iceGatherer = new RTCIceGatherer(self.iceOptions);
      var iceTransport = new RTCIceTransport(iceGatherer);
      iceGatherer.onlocalcandidate = function(evt) {
        var event = {};
        event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

        var cand = evt.candidate;
        // Edge emits an empty object for RTCIceCandidateComplete‥
        if (!cand || Object.keys(cand).length === 0) {
          // polyfill since RTCIceGatherer.state is not implemented in Edge 10547 yet.
          if (iceGatherer.state === undefined) {
            iceGatherer.state = 'completed';
          }

          // Emit a candidate with type endOfCandidates to make the samples work.
          // Edge requires addIceCandidate with this empty candidate to start checking.
          // The real solution is to signal end-of-candidates to the other side when
          // getting the null candidate but some apps (like the samples) don't do that.
          event.candidate.candidate =
              'candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates';
        } else {
          // RTCIceCandidate doesn't have a component, needs to be added
          cand.component = iceTransport.component === 'RTCP' ? 2 : 1;
          event.candidate.candidate = SDPUtils.writeCandidate(cand);
        }

        var complete = self.transceivers.every(function(transceiver) {
          return transceiver.iceGatherer &&
              transceiver.iceGatherer.state === 'completed';
        });
        // FIXME: update .localDescription with candidate and (potentially) end-of-candidates.
        //     To make this harder, the gatherer might emit candidates before localdescription
        //     is set. To make things worse, gather.getLocalCandidates still errors in
        //     Edge 10547 when no candidates have been gathered yet.

        if (self.onicecandidate !== null) {
          // Emit candidate if localDescription is set.
          // Also emits null candidate when all gatherers are complete.
          if (self.localDescription && self.localDescription.type === '') {
            self._localIceCandidatesBuffer.push(event);
            if (complete) {
              self._localIceCandidatesBuffer.push({});
            }
          } else {
            self.onicecandidate(event);
            if (complete) {
              self.onicecandidate({});
            }
          }
        }
      };
      iceTransport.onicestatechange = function() {
        self._updateConnectionState();
      };

      var dtlsTransport = new RTCDtlsTransport(iceTransport);
      dtlsTransport.ondtlsstatechange = function() {
        self._updateConnectionState();
      };
      dtlsTransport.onerror = function() {
        // onerror does not set state to failed by itself.
        dtlsTransport.state = 'failed';
        self._updateConnectionState();
      };

      return {
        iceGatherer: iceGatherer,
        iceTransport: iceTransport,
        dtlsTransport: dtlsTransport
      };
    };

    // Start the RTP Sender and Receiver for a transceiver.
    window.RTCPeerConnection.prototype._transceive = function(transceiver,
        send, recv) {
      var params = this._getCommonCapabilities(transceiver.localCapabilities,
          transceiver.remoteCapabilities);
      if (send && transceiver.rtpSender) {
        params.encodings = [{
          ssrc: transceiver.sendSsrc
        }];
        params.rtcp = {
          cname: localCName,
          ssrc: transceiver.recvSsrc
        };
        transceiver.rtpSender.send(params);
      }
      if (recv && transceiver.rtpReceiver) {
        params.encodings = [{
          ssrc: transceiver.recvSsrc
        }];
        params.rtcp = {
          cname: transceiver.cname,
          ssrc: transceiver.sendSsrc
        };
        transceiver.rtpReceiver.receive(params);
      }
    };

    window.RTCPeerConnection.prototype.setLocalDescription =
        function(description) {
      var self = this;
      if (description.type === 'offer') {
        if (!this._pendingOffer) {
        } else {
          this.transceivers = this._pendingOffer;
          delete this._pendingOffer;
        }
      } else if (description.type === 'answer') {
        var sections = SDPUtils.splitSections(self.remoteDescription.sdp);
        var sessionpart = sections.shift();
        sections.forEach(function(mediaSection, sdpMLineIndex) {
          var transceiver = self.transceivers[sdpMLineIndex];
          var iceGatherer = transceiver.iceGatherer;
          var iceTransport = transceiver.iceTransport;
          var dtlsTransport = transceiver.dtlsTransport;
          var localCapabilities = transceiver.localCapabilities;
          var remoteCapabilities = transceiver.remoteCapabilities;
          var rejected = mediaSection.split('\n', 1)[0]
              .split(' ', 2)[1] === '0';

          if (!rejected) {
            var remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
                sessionpart);
            iceTransport.start(iceGatherer, remoteIceParameters, 'controlled');

            var remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
              sessionpart);
            dtlsTransport.start(remoteDtlsParameters);

            // Calculate intersection of capabilities.
            var params = self._getCommonCapabilities(localCapabilities,
                remoteCapabilities);

            // Start the RTCRtpSender. The RTCRtpReceiver for this transceiver
            // has already been started in setRemoteDescription.
            self._transceive(transceiver,
                params.codecs.length > 0,
                false);
          }
        });
      }

      this.localDescription = description;
      switch (description.type) {
        case 'offer':
          this._updateSignalingState('have-local-offer');
          break;
        case 'answer':
          this._updateSignalingState('stable');
          break;
        default:
          throw new TypeError('unsupported type "' + description.type + '"');
      }

      // If a success callback was provided, emit ICE candidates after it has been
      // executed. Otherwise, emit callback after the Promise is resolved.
      var hasCallback = arguments.length > 1 &&
        typeof arguments[1] === 'function';
      if (hasCallback) {
        var cb = arguments[1];
        window.setTimeout(function() {
          cb();
          self._emitBufferedCandidates();
        }, 0);
      }
      var p = Promise.resolve();
      p.then(function() {
        if (!hasCallback) {
          window.setTimeout(self._emitBufferedCandidates.bind(self), 0);
        }
      });
      return p;
    };

    window.RTCPeerConnection.prototype.setRemoteDescription =
        function(description) {
      var self = this;
      var stream = new MediaStream();
      var sections = SDPUtils.splitSections(description.sdp);
      var sessionpart = sections.shift();
      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var lines = SDPUtils.splitLines(mediaSection);
        var mline = lines[0].substr(2).split(' ');
        var kind = mline[0];
        var rejected = mline[1] === '0';
        var direction = SDPUtils.getDirection(mediaSection, sessionpart);

        var transceiver;
        var iceGatherer;
        var iceTransport;
        var dtlsTransport;
        var rtpSender;
        var rtpReceiver;
        var sendSsrc;
        var recvSsrc;
        var localCapabilities;

        // FIXME: ensure the mediaSection has rtcp-mux set.
        var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
        var remoteIceParameters;
        var remoteDtlsParameters;
        if (!rejected) {
          remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
              sessionpart);
          remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
              sessionpart);
        }
        var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0].substr(6);

        var cname;
        // Gets the first SSRC. Note that with RTX there might be multiple SSRCs.
        var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
            .map(function(line) {
              return SDPUtils.parseSsrcMedia(line);
            })
            .filter(function(obj) {
              return obj.attribute === 'cname';
            })[0];
        if (remoteSsrc) {
          recvSsrc = parseInt(remoteSsrc.ssrc, 10);
          cname = remoteSsrc.value;
        }

        if (description.type === 'offer') {
          var transports = self._createIceAndDtlsTransports(mid, sdpMLineIndex);

          localCapabilities = RTCRtpReceiver.getCapabilities(kind);
          sendSsrc = (2 * sdpMLineIndex + 2) * 1001;

          rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);

          // FIXME: not correct when there are multiple streams but that is
          // not currently supported in this shim.
          stream.addTrack(rtpReceiver.track);

          // FIXME: look at direction.
          if (self.localStreams.length > 0 &&
              self.localStreams[0].getTracks().length >= sdpMLineIndex) {
            // FIXME: actually more complicated, needs to match types etc
            var localtrack = self.localStreams[0].getTracks()[sdpMLineIndex];
            rtpSender = new RTCRtpSender(localtrack, transports.dtlsTransport);
          }

          self.transceivers[sdpMLineIndex] = {
            iceGatherer: transports.iceGatherer,
            iceTransport: transports.iceTransport,
            dtlsTransport: transports.dtlsTransport,
            localCapabilities: localCapabilities,
            remoteCapabilities: remoteCapabilities,
            rtpSender: rtpSender,
            rtpReceiver: rtpReceiver,
            kind: kind,
            mid: mid,
            cname: cname,
            sendSsrc: sendSsrc,
            recvSsrc: recvSsrc
          };
          // Start the RTCRtpReceiver now. The RTPSender is started in setLocalDescription.
          self._transceive(self.transceivers[sdpMLineIndex],
              false,
              direction === 'sendrecv' || direction === 'sendonly');
        } else if (description.type === 'answer' && !rejected) {
          transceiver = self.transceivers[sdpMLineIndex];
          iceGatherer = transceiver.iceGatherer;
          iceTransport = transceiver.iceTransport;
          dtlsTransport = transceiver.dtlsTransport;
          rtpSender = transceiver.rtpSender;
          rtpReceiver = transceiver.rtpReceiver;
          sendSsrc = transceiver.sendSsrc;
          //recvSsrc = transceiver.recvSsrc;
          localCapabilities = transceiver.localCapabilities;

          self.transceivers[sdpMLineIndex].recvSsrc = recvSsrc;
          self.transceivers[sdpMLineIndex].remoteCapabilities =
              remoteCapabilities;
          self.transceivers[sdpMLineIndex].cname = cname;

          iceTransport.start(iceGatherer, remoteIceParameters, 'controlling');
          dtlsTransport.start(remoteDtlsParameters);

          self._transceive(transceiver,
              direction === 'sendrecv' || direction === 'recvonly',
              direction === 'sendrecv' || direction === 'sendonly');

          if (rtpReceiver &&
              (direction === 'sendrecv' || direction === 'sendonly')) {
            stream.addTrack(rtpReceiver.track);
          } else {
            // FIXME: actually the receiver should be created later.
            delete transceiver.rtpReceiver;
          }
        }
      });

      this.remoteDescription = description;
      switch (description.type) {
        case 'offer':
          this._updateSignalingState('have-remote-offer');
          break;
        case 'answer':
          this._updateSignalingState('stable');
          break;
        default:
          throw new TypeError('unsupported type "' + description.type + '"');
      }
      window.setTimeout(function() {
        if (self.onaddstream !== null && stream.getTracks().length) {
          self.remoteStreams.push(stream);
          window.setTimeout(function() {
            self.onaddstream({stream: stream});
          }, 0);
        }
      }, 0);
      if (arguments.length > 1 && typeof arguments[1] === 'function') {
        window.setTimeout(arguments[1], 0);
      }
      return Promise.resolve();
    };

    window.RTCPeerConnection.prototype.close = function() {
      this.transceivers.forEach(function(transceiver) {
        /* not yet
        if (transceiver.iceGatherer) {
          transceiver.iceGatherer.close();
        }
        */
        if (transceiver.iceTransport) {
          transceiver.iceTransport.stop();
        }
        if (transceiver.dtlsTransport) {
          transceiver.dtlsTransport.stop();
        }
        if (transceiver.rtpSender) {
          transceiver.rtpSender.stop();
        }
        if (transceiver.rtpReceiver) {
          transceiver.rtpReceiver.stop();
        }
      });
      // FIXME: clean up tracks, local streams, remote streams, etc
      this._updateSignalingState('closed');
    };

    // Update the signaling state.
    window.RTCPeerConnection.prototype._updateSignalingState =
        function(newState) {
      this.signalingState = newState;
      if (this.onsignalingstatechange !== null) {
        this.onsignalingstatechange();
      }
    };

    // Determine whether to fire the negotiationneeded event.
    window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded =
        function() {
      // Fire away (for now).
      if (this.onnegotiationneeded !== null) {
        this.onnegotiationneeded();
      }
    };

    // Update the connection state.
    window.RTCPeerConnection.prototype._updateConnectionState =
        function() {
      var self = this;
      var newState;
      var states = {
        'new': 0,
        closed: 0,
        connecting: 0,
        checking: 0,
        connected: 0,
        completed: 0,
        failed: 0
      };
      this.transceivers.forEach(function(transceiver) {
        states[transceiver.iceTransport.state]++;
        states[transceiver.dtlsTransport.state]++;
      });
      // ICETransport.completed and connected are the same for this purpose.
      states.connected += states.completed;

      newState = 'new';
      if (states.failed > 0) {
        newState = 'failed';
      } else if (states.connecting > 0 || states.checking > 0) {
        newState = 'connecting';
      } else if (states.disconnected > 0) {
        newState = 'disconnected';
      } else if (states.new > 0) {
        newState = 'new';
      } else if (states.connecting > 0 || states.completed > 0) {
        newState = 'connected';
      }

      if (newState !== self.iceConnectionState) {
        self.iceConnectionState = newState;
        if (this.oniceconnectionstatechange !== null) {
          this.oniceconnectionstatechange();
        }
      }
    };

    window.RTCPeerConnection.prototype.createOffer = function() {
      var self = this;
      if (this._pendingOffer) {
        throw new Error('createOffer called while there is a pending offer.');
      }
      var offerOptions;
      if (arguments.length === 1 && typeof arguments[0] !== 'function') {
        offerOptions = arguments[0];
      } else if (arguments.length === 3) {
        offerOptions = arguments[2];
      }

      var tracks = [];
      var numAudioTracks = 0;
      var numVideoTracks = 0;
      // Default to sendrecv.
      if (this.localStreams.length) {
        numAudioTracks = this.localStreams[0].getAudioTracks().length;
        numVideoTracks = this.localStreams[0].getVideoTracks().length;
      }
      // Determine number of audio and video tracks we need to send/recv.
      if (offerOptions) {
        // Reject Chrome legacy constraints.
        if (offerOptions.mandatory || offerOptions.optional) {
          throw new TypeError(
              'Legacy mandatory/optional constraints not supported.');
        }
        if (offerOptions.offerToReceiveAudio !== undefined) {
          numAudioTracks = offerOptions.offerToReceiveAudio;
        }
        if (offerOptions.offerToReceiveVideo !== undefined) {
          numVideoTracks = offerOptions.offerToReceiveVideo;
        }
      }
      if (this.localStreams.length) {
        // Push local streams.
        this.localStreams[0].getTracks().forEach(function(track) {
          tracks.push({
            kind: track.kind,
            track: track,
            wantReceive: track.kind === 'audio' ?
                numAudioTracks > 0 : numVideoTracks > 0
          });
          if (track.kind === 'audio') {
            numAudioTracks--;
          } else if (track.kind === 'video') {
            numVideoTracks--;
          }
        });
      }
      // Create M-lines for recvonly streams.
      while (numAudioTracks > 0 || numVideoTracks > 0) {
        if (numAudioTracks > 0) {
          tracks.push({
            kind: 'audio',
            wantReceive: true
          });
          numAudioTracks--;
        }
        if (numVideoTracks > 0) {
          tracks.push({
            kind: 'video',
            wantReceive: true
          });
          numVideoTracks--;
        }
      }

      var sdp = SDPUtils.writeSessionBoilerplate();
      var transceivers = [];
      tracks.forEach(function(mline, sdpMLineIndex) {
        // For each track, create an ice gatherer, ice transport, dtls transport,
        // potentially rtpsender and rtpreceiver.
        var track = mline.track;
        var kind = mline.kind;
        var mid = generateIdentifier();

        var transports = self._createIceAndDtlsTransports(mid, sdpMLineIndex);

        var localCapabilities = RTCRtpSender.getCapabilities(kind);
        var rtpSender;
        var rtpReceiver;

        // generate an ssrc now, to be used later in rtpSender.send
        var sendSsrc = (2 * sdpMLineIndex + 1) * 1001;
        if (track) {
          rtpSender = new RTCRtpSender(track, transports.dtlsTransport);
        }

        if (mline.wantReceive) {
          rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);
        }

        transceivers[sdpMLineIndex] = {
          iceGatherer: transports.iceGatherer,
          iceTransport: transports.iceTransport,
          dtlsTransport: transports.dtlsTransport,
          localCapabilities: localCapabilities,
          remoteCapabilities: null,
          rtpSender: rtpSender,
          rtpReceiver: rtpReceiver,
          kind: kind,
          mid: mid,
          sendSsrc: sendSsrc,
          recvSsrc: null
        };
        var transceiver = transceivers[sdpMLineIndex];
        sdp += SDPUtils.writeMediaSection(transceiver,
            transceiver.localCapabilities, 'offer', self.localStreams[0]);
      });

      this._pendingOffer = transceivers;
      var desc = new RTCSessionDescription({
        type: 'offer',
        sdp: sdp
      });
      if (arguments.length && typeof arguments[0] === 'function') {
        window.setTimeout(arguments[0], 0, desc);
      }
      return Promise.resolve(desc);
    };

    window.RTCPeerConnection.prototype.createAnswer = function() {
      var self = this;
      var answerOptions;
      if (arguments.length === 1 && typeof arguments[0] !== 'function') {
        answerOptions = arguments[0];
      } else if (arguments.length === 3) {
        answerOptions = arguments[2];
      }

      var sdp = SDPUtils.writeSessionBoilerplate();
      this.transceivers.forEach(function(transceiver) {
        // Calculate intersection of capabilities.
        var commonCapabilities = self._getCommonCapabilities(
            transceiver.localCapabilities,
            transceiver.remoteCapabilities);

        sdp += SDPUtils.writeMediaSection(transceiver, commonCapabilities,
            'answer', self.localStreams[0]);
      });

      var desc = new RTCSessionDescription({
        type: 'answer',
        sdp: sdp
      });
      if (arguments.length && typeof arguments[0] === 'function') {
        window.setTimeout(arguments[0], 0, desc);
      }
      return Promise.resolve(desc);
    };

    window.RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
      var mLineIndex = candidate.sdpMLineIndex;
      if (candidate.sdpMid) {
        for (var i = 0; i < this.transceivers.length; i++) {
          if (this.transceivers[i].mid === candidate.sdpMid) {
            mLineIndex = i;
            break;
          }
        }
      }
      var transceiver = this.transceivers[mLineIndex];
      if (transceiver) {
        var cand = Object.keys(candidate.candidate).length > 0 ?
            SDPUtils.parseCandidate(candidate.candidate) : {};
        // Ignore Chrome's invalid candidates since Edge does not like them.
        if (cand.protocol === 'tcp' && cand.port === 0) {
          return;
        }
        // Ignore RTCP candidates, we assume RTCP-MUX.
        if (cand.component !== '1') {
          return;
        }
        // A dirty hack to make samples work.
        if (cand.type === 'endOfCandidates') {
          cand = {};
        }
        transceiver.iceTransport.addRemoteCandidate(cand);
      }
      if (arguments.length > 1 && typeof arguments[1] === 'function') {
        window.setTimeout(arguments[1], 0);
      }
      return Promise.resolve();
    };

    window.RTCPeerConnection.prototype.getStats = function() {
      var promises = [];
      this.transceivers.forEach(function(transceiver) {
        ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
            'dtlsTransport'].forEach(function(method) {
          if (transceiver[method]) {
            promises.push(transceiver[method].getStats());
          }
        });
      });
      var cb = arguments.length > 1 && typeof arguments[1] === 'function' &&
          arguments[1];
      return new Promise(function(resolve) {
        var results = {};
        Promise.all(promises).then(function(res) {
          res.forEach(function(result) {
            Object.keys(result).forEach(function(id) {
              results[id] = result[id];
            });
          });
          if (cb) {
            window.setTimeout(cb, 0, results);
          }
          resolve(results);
        });
      });
    };
  }
} else {
  webrtcUtils.log('Browser does not appear to be WebRTC-capable');
}

// Polyfill ontrack on browsers that don't yet have it
if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
    window.RTCPeerConnection.prototype)) {
  Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
    get: function() { return this._ontrack; },
    set: function(f) {
      var self = this;
      if (this._ontrack) {
        this.removeEventListener('track', this._ontrack);
        this.removeEventListener('addstream', this._ontrackpoly);
      }
      this.addEventListener('track', this._ontrack = f);
      this.addEventListener('addstream', this._ontrackpoly = function(e) {
        if (webrtcDetectedBrowser === 'chrome') {
          // onaddstream does not fire when a track is added to an existing stream.
          // but stream.onaddtrack is implemented so we use thたt
          e.stream.addEventListener('addtrack', function(te) {
            var event = new Event('track');
            event.track = te.track;
            event.receiver = {track: te.track};
            event.streams = [e.stream];
            self.dispatchEvent(event);
          });
        }
        e.stream.getTracks().forEach(function(track) {
          var event = new Event('track');
          event.track = track;
          event.receiver = {track: track};
          event.streams = [e.stream];
          this.dispatchEvent(event);
        }.bind(this));
      }.bind(this));
    }
  });
}

// Returns the result of getUserMedia as a Promise.
function requestUserMedia(constraints) {
  return new Promise(function(resolve, reject) {
    getUserMedia(constraints, resolve, reject);
  });
}

var webrtcTesting = {};
try {
  Object.defineProperty(webrtcTesting, 'version', {
    set: function(version) {
      webrtcDetectedVersion = version;
    }
  });
} catch (e) {}

if (typeof module !== 'undefined') {
  var RTCPeerConnection;
  var RTCIceCandidate;
  var RTCSessionDescription;
  if (typeof window !== 'undefined') {
    RTCPeerConnection = window.RTCPeerConnection;
    RTCIceCandidate = window.RTCIceCandidate;
    RTCSessionDescription = window.RTCSessionDescription;
  }
  module.exports = {
    RTCPeerConnection: RTCPeerConnection,
    RTCIceCandidate: RTCIceCandidate,
    RTCSessionDescription: RTCSessionDescription,
    getUserMedia: getUserMedia,
    attachMediaStream: attachMediaStream,
    reattachMediaStream: reattachMediaStream,
    webrtcDetectedBrowser: webrtcDetectedBrowser,
    webrtcDetectedVersion: webrtcDetectedVersion,
    webrtcMinimumVersion: webrtcMinimumVersion,
    webrtcTesting: webrtcTesting,
    webrtcUtils: webrtcUtils
    //requestUserMedia: not exposed on purpose.
    //trace: not exposed on purpose.
  };
} else if ((typeof require === 'function') && (typeof define === 'function')) {
  // Expose objects and functions when RequireJS is doing the loading.
  define([], function() {
    return {
      RTCPeerConnection: window.RTCPeerConnection,
      RTCIceCandidate: window.RTCIceCandidate,
      RTCSessionDescription: window.RTCSessionDescription,
      getUserMedia: getUserMedia,
      attachMediaStream: attachMediaStream,
      reattachMediaStream: reattachMediaStream,
      webrtcDetectedBrowser: webrtcDetectedBrowser,
      webrtcDetectedVersion: webrtcDetectedVersion,
      webrtcMinimumVersion: webrtcMinimumVersion,
      webrtcTesting: webrtcTesting,
      webrtcUtils: webrtcUtils
      //requestUserMedia: not exposed on purpose.
      //trace: not exposed on purpose.
    };
  });
}

},{}],2:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();require('webrtc-adapter-test');var _EventEmitter2=require('../utils/EventEmitter');var _EventEmitter3=_interopRequireDefault(_EventEmitter2);var _connection=require('./connection');var _connection2=_interopRequireDefault(_connection);var _peer=require('./peer');var _peer2=_interopRequireDefault(_peer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/ /* jshint undef: true */ /* globals RTCPeerConnection */ /* globals RTCSessionDescription */ /* globals RTCIceCandidate */var ConnectionController=function(_EventEmitter){_inherits(ConnectionController,_EventEmitter);function ConnectionController(syncher,domain,configuration){_classCallCheck(this,ConnectionController);if(!syncher)throw new Error('The syncher is a needed parameter');if(!domain)throw new Error('The domain is a needed parameter');if(!configuration)throw new Error('The configuration is a needed parameter');var _this2=_possibleConstructorReturn(this,Object.getPrototypeOf(ConnectionController).call(this));var _this=_this2;_this.syncher=syncher;_this.mode='offer';_this._objectDescURL='hyperty-catalogue://'+domain+'/.well-known/dataschemas/FakeDataSchema';console.info(configuration);console.info(configuration);_this.mediaConstraints=configuration.mediaConstraints;_this.configuration=configuration.webrtc; // Prepare the PeerConnection
var peerConnection=new RTCPeerConnection(_this.configuration);peerConnection.addEventListener('signalingstatechange',function(event){console.info('signalingstatechange',event.currentTarget.signalingState);if(event.currentTarget.signalingState==='have-local-offer'){_this.trigger('controller:state:change',_this.mode);}if(event.currentTarget.signalingState==='have-remote-offer'){_this.mode='answer';_this.trigger('controller:state:change',_this.mode);}});peerConnection.addEventListener('iceconnectionstatechange',function(event){console.info('iceconnectionstatechange',event.currentTarget.iceConnectionState);var data=_this._dataObjectReporter.data;if(data.hasOwnProperty('connection')){data.connection.status=event.currentTarget.iceConnectionState;}});peerConnection.addEventListener('icecandidate',function(event){if(!event.candidate)return;var icecandidate={type:'candidate',candidate:event.candidate.candidate,sdpMid:event.candidate.sdpMid,sdpMLineIndex:event.candidate.sdpMLineIndex};var data=_this._dataObjectReporter.data;if(_this.mode==='offer'){data.connection.ownerPeer.iceCandidates.push(icecandidate);}else {data.peer.iceCandidates.push(icecandidate);}}); // Add stream to PeerConnection
peerConnection.addEventListener('addstream',function(event){console.info('Add Stream: ',event);_this.trigger('stream:added',event);});_this.peerConnection=peerConnection;return _this2;}_createClass(ConnectionController,[{key:'changePeerInformation',value:function changePeerInformation(dataObjectObserver){var _this=this;var data=dataObjectObserver.data;var isOwner=data.hasOwnProperty('connection');var peerData=isOwner?data.connection.ownerPeer:data.peer;console.info('Peer Data:',JSON.stringify(peerData));if(peerData.hasOwnProperty('connectionDescription')){_this.processPeerInformation(peerData.connectionDescription);}if(peerData.hasOwnProperty('iceCandidates')){peerData.iceCandidates.forEach(function(ice){_this.processPeerInformation(ice);});}dataObjectObserver.onChange('*',function(event){console.info('Observer on change message: ',event);_this.processPeerInformation(event.data);});}},{key:'processPeerInformation',value:function processPeerInformation(data){var _this=this;console.info(JSON.stringify(data));if(data.type==='offer'||data.type==='answer'){console.info('Process Connection Description: ',data.sdp);_this.peerConnection.setRemoteDescription(new RTCSessionDescription(data),_this.remoteDescriptionSuccess,_this.remoteDescriptionError);}if(data.type==='candidate'){console.info('Process Ice Candidate: ',data);_this.peerConnection.addIceCandidate(new RTCIceCandidate({candidate:data.candidate}),_this.remoteDescriptionSuccess,_this.remoteDescriptionError);}}},{key:'remoteDescriptionSuccess',value:function remoteDescriptionSuccess(){console.info('remote success');}},{key:'remoteDescriptionError',value:function remoteDescriptionError(error){console.error('error: ',error);}},{key:'createOffer',value:function createOffer(){var _this=this;_this.peerConnection.createOffer(function(description){_this.onLocalSessionCreated(description);},_this.infoError,_this.mediaConstraints);}},{key:'createAnswer',value:function createAnswer(){var _this=this;_this.peerConnection.createAnswer(function(description){_this.onLocalSessionCreated(description);},_this.infoError);}},{key:'onLocalSessionCreated',value:function onLocalSessionCreated(description){var _this=this;_this.peerConnection.setLocalDescription(description,function(){var data=_this._dataObjectReporter.data;var sdpConnection={sdp:description.sdp,type:description.type};if(_this.mode==='offer'){data.connection.ownerPeer.connectionDescription=sdpConnection;}else {data.peer.connectionDescription=sdpConnection;}},_this.infoError);}},{key:'infoError',value:function infoError(err){console.error(err.toString(),err);} /**
   * Used to accept an incoming connection request.
   * @method accept
   * @return {Promise}
   */},{key:'accept',value:function accept(stream){ // TODO: Pass argument options as a stream, because is specific of implementation;
var _this=this;var syncher=_this.syncher;console.log('Remote Peer Information: ',_this._remotePeerInformation);var remotePeer=_this._remotePeerInformation.from;return new Promise(function(resolve,reject){try{console.info('------------------------ Syncher Create ---------------------- \n');syncher.create(_this._objectDescURL,[remotePeer],{}).then(function(dataObjectReporter){console.info('2. Return the Data Object Reporter ',dataObjectReporter);_this.stream=stream;_this.dataObjectReporter=dataObjectReporter;resolve('accepted');}).catch(function(reason){reject(reason);});}catch(e){reject('error accepting connection');}});} /**
  * Used to decline an incoming connection request.
  * @method decline
  * @return {Promise}
  */},{key:'decline',value:function decline(){var _this=this;var syncher=_this.syncher;return new Promise(function(resolve,reject){try{console.log('syncher: ',syncher);resolve('Declined');}catch(e){reject(e);}});} /**
   * Used to close an existing connection instance.
   * @method disconnect
   * @return {Promise}
   */},{key:'disconnect',value:function disconnect(){ // TODO: optimize the disconnect function
var _this=this;return new Promise(function(resolve,reject){try{_this.peerConnection.close();resolve(true);}catch(e){reject('error disconnecting connection');}});} /**
   * Used to add/invite new peers on an existing connection instance (for multiparty connections).
   * @method addPeer
   * @return {Promise}
   */},{key:'addPeer',value:function addPeer(){} /**
   * Used to remove a peer from an existing connection instance.
   * @method removePeer
   * @return {Promise}
   */},{key:'removePeer',value:function removePeer(){} // Peer Actions
},{key:'disableMic',value:function disableMic(){var _this=this;return new Promise(function(resolve,reject){try{var localStream=_this.peerConnection.getLocalStreams()[0];var audioTrack=localStream.getAudioTracks()[0];audioTrack.enabled=audioTrack.enabled?false:true;resolve(audioTrack.enabled);}catch(e){reject(e);}});}},{key:'disableCam',value:function disableCam(){var _this=this;return new Promise(function(resolve,reject){try{var localStream=_this.peerConnection.getLocalStreams()[0];var videoTrack=localStream.getVideoTracks()[0];videoTrack.enabled=videoTrack.enabled?false:true;resolve(videoTrack.enabled);}catch(e){reject(e);}});}},{key:'mute',value:function mute(){var _this=this;return new Promise(function(resolve,reject){try{var remoteStream=_this.peerConnection.getRemoteStreams()[0];var audioTrack=remoteStream.getAudioTracks()[0];audioTrack.enabled=audioTrack.enabled?false:true;resolve(audioTrack.enabled);}catch(e){reject(e);}});}},{key:'stream',set:function set(mediaStream){if(!mediaStream)throw new Error('The mediaStream is a needed parameter');var _this=this;console.info('set stream: ',mediaStream);_this.peerConnection.addStream(mediaStream);}},{key:'getLocalStreams',get:function get(){var _this=this;return _this.peerConnection.getLocalStreams();}},{key:'getRemoteStreams',get:function get(){var _this=this;return _this.peerConnection.getRemoteStreams();} /**
   * Set Remote peer information, like Hyperty.
   * @param  {Object} remotePeerInformation information about the peer;
   */},{key:'remotePeerInformation',set:function set(remotePeerInformation){var _this=this;_this._remotePeerInformation=remotePeerInformation;} /**
   * Get information relative to the Remote Peer;
   * @return {Object} remotePeerInformation;
   */,get:function get(){var _this=this;return _this._remotePeerInformation;} /**
  * Set the dataObject in the controller
  * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
  */},{key:'dataObjectReporter',set:function set(dataObjectReporter){if(!dataObjectReporter)throw new Error('The Data Object Reporter is a needed parameter');var _this=this;_this._dataObjectReporter=dataObjectReporter;var data=_this._dataObjectReporter.data;dataObjectReporter.onSubscription(function(event){event.accept();});if(_this.mode==='offer'){data.connection=_connection2.default;_this.createOffer();}else {data.peer=_peer2.default;_this.createAnswer();}console.debug(_this._dataObjectReporter);} /**
  * return the dataObject in the controller
  * @return {ConnectionDataObject} dataObject
  */,get:function get(){var _this=this;return _this._dataObjectReporter;} /**
  * Set the dataObject in the controller
  * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
  */},{key:'dataObjectObserver',set:function set(dataObjectObserver){if(!dataObjectObserver)throw new Error('The Data Object Observer is a needed parameter');var _this=this;_this._dataObjectObserver=dataObjectObserver;_this.changePeerInformation(dataObjectObserver);} /**
  * return the dataObject in the controller
  * @return {ConnectionDataObject} dataObject
  */,get:function get(){var _this=this;return _this._dataObjectObserver;}}]);return ConnectionController;}(_EventEmitter3.default);exports.default=ConnectionController;module.exports=exports['default'];

},{"../utils/EventEmitter":6,"./connection":4,"./peer":5,"webrtc-adapter-test":1}],3:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=activate;var _HypertyDiscovery=require('service-framework/dist/HypertyDiscovery');var _HypertyDiscovery2=_interopRequireDefault(_HypertyDiscovery);var _Syncher=require('service-framework/dist/Syncher');var _EventEmitter2=require('../utils/EventEmitter');var _EventEmitter3=_interopRequireDefault(_EventEmitter2);var _utils=require('../utils/utils');var _ConnectionController=require('./ConnectionController');var _ConnectionController2=_interopRequireDefault(_ConnectionController);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;} /**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/ /* jshint undef: true */ // Service Framework
// Utils
// Internals
/**
* Hyperty Connector;
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/var HypertyConnector=function(_EventEmitter){_inherits(HypertyConnector,_EventEmitter); /**
  * Create a new Hyperty Connector
  * @param  {Syncher} syncher - Syncher provided from the runtime core
  */function HypertyConnector(hypertyURL,bus,configuration){_classCallCheck(this,HypertyConnector);if(!hypertyURL)throw new Error('The hypertyURL is a needed parameter');if(!bus)throw new Error('The MiniBus is a needed parameter');if(!configuration)throw new Error('The configuration is a needed parameter');var _this2=_possibleConstructorReturn(this,Object.getPrototypeOf(HypertyConnector).call(this,hypertyURL,bus,configuration));var _this=_this2;_this._hypertyURL=hypertyURL;_this._bus=bus;_this._configuration=configuration;_this._domain=(0,_utils.divideURL)(hypertyURL).domain;_this._objectDescURL='hyperty-catalogue://'+_this._domain+'/.well-known/dataschemas/FakeDataSchema';_this._controllers={};_this.hypertyDiscovery=new _HypertyDiscovery2.default(hypertyURL,bus);var syncher=new _Syncher.Syncher(hypertyURL,bus,configuration);syncher.onNotification(function(event){_this._onNotification(event);});_this._syncher=syncher;return _this2;}_createClass(HypertyConnector,[{key:'_onNotification',value:function _onNotification(event){var _this=this;console.info('------------ Acknowledges the Reporter ------------ \n');event.ack();console.info('------------------------ END ---------------------- \n');if(_this._controllers[event.from]){_this._autoSubscribe(event);}else {_this._autoAccept(event);}}},{key:'_autoSubscribe',value:function _autoSubscribe(event){var _this=this;var syncher=_this._syncher;console.info('---------------- Syncher Auto Subscribe ---------------- \n');console.info('Subscribe URL Object ',event,syncher);syncher.subscribe(_this._objectDescURL,event.url).then(function(dataObjectObserver){console.info('1. Return Subscribe Data Object Observer',dataObjectObserver);console.log(_this._controllers);_this._controllers[event.from].dataObjectObserver=dataObjectObserver;}).catch(function(reason){console.error(reason);});}},{key:'_autoAccept',value:function _autoAccept(event){var _this=this;var syncher=_this._syncher;console.info('----------- Syncher Subscribe (Auto Accept) ------------- \n');console.info('Subscribe URL Object ',event,syncher);syncher.subscribe(_this._objectDescURL,event.url).then(function(dataObjectObserver){console.info('1. Return Subscribe Data Object Observer',dataObjectObserver);var connectionController=new _ConnectionController2.default(syncher,_this._domain,_this._configuration);connectionController.remotePeerInformation=event;connectionController.dataObjectObserver=dataObjectObserver;_this.trigger('connector:connected',connectionController);_this.trigger('have:notification',event);console.info('------------------------ END ---------------------- \n');}).catch(function(reason){console.error(reason);});} /**
  * Establish connection with other client identifier
  * @param  {HypertyURL} HypertyURL - Define the identifier of the other component
  * @param  {Object} options - Object with options to improve the connect
  */},{key:'connect',value:function connect(hypertyURL,stream){ // TODO: Pass argument options as a stream, because is specific of implementation;
// TODO: CHange the hypertyURL for a list of URLS
var _this=this;var syncher=_this._syncher;return new Promise(function(resolve,reject){var connectionController=void 0;console.info('------------------------ Syncher Create ---------------------- \n');syncher.create(_this._objectDescURL,[hypertyURL],{}).then(function(dataObjectReporter){console.info('1. Return Create Data Object Reporter',dataObjectReporter);connectionController=new _ConnectionController2.default(syncher,_this._domain,_this._configuration);connectionController.stream=stream;connectionController.dataObjectReporter=dataObjectReporter;_this._controllers[hypertyURL]=connectionController;resolve(connectionController);console.info('--------------------------- END --------------------------- \n');}).catch(function(reason){console.error(reason);reject(reason);});});}}]);return HypertyConnector;}(_EventEmitter3.default);function activate(hypertyURL,bus,configuration){return {name:'HypertyConnector',instance:new HypertyConnector(hypertyURL,bus,configuration)};}module.exports=exports['default'];

},{"../utils/EventEmitter":6,"../utils/utils":7,"./ConnectionController":2,"service-framework/dist/HypertyDiscovery":8,"service-framework/dist/Syncher":9}],4:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true}); /**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/ // dataObjectReporter.data = {
//    status : "connected",
//    owner : "hyperty://example.com/alicehy",
//    peer : "connection://example.com/alice/bob27012016",
//    ownerPeer : {
//          connectionDescription: {
//             sdp: 's4dfaf1sa3f1asd5f4sdafa',
//             type: 'offer'
//          },
//          iceCandidates: [{
//              type: 'candidate',
//              candidate: event.candidate.candidate,
//              sdpMid: event.candidate.sdpMid,
//              sdpMLineIndex: event.candidate.sdpMLineIndex
//            },
//            {
//              type: 'candidate',
//              candidate: event.candidate.candidate,
//              sdpMid: event.candidate.sdpMid,
//              sdpMLineIndex: event.candidate.sdpMLineIndex
//            },
//            .....
//        ]
//      }
//  }
var connection={name:'',status:"connected",owner:"hyperty://example.com/alicehy",peer:"connection://example.com/alice/bob27012016",ownerPeer:{connectionDescription:{},iceCandidates:[]}};exports.default=connection;module.exports=exports['default'];

},{}],5:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true}); /**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/var peer={name:'',connectionDescription:{},iceCandidates:[]};exports.default=peer;module.exports=exports['default'];

},{}],6:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}} /**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/ /**
 * EventEmitter
 * All classes which extends this, can have addEventListener and trigger events;
 */var EventEmitter=function(){function EventEmitter(){_classCallCheck(this,EventEmitter);}_createClass(EventEmitter,[{key:"addEventListener", /**
   * addEventListener listen for an eventType
   * @param  {string}         eventType - listening for this type of event
   * @param  {Function}       cb        - callback function will be executed when the event it is invoked
   */value:function addEventListener(eventType,cb){var _this=this;_this[eventType]=cb;} /**
   * Invoke the eventType
   * @param  {string} eventType - event will be invoked
   * @param  {object} params - parameters will be passed to the addEventListener
   */},{key:"trigger",value:function trigger(eventType,params){var _this=this;if(_this[eventType]){_this[eventType](params);}}}]);return EventEmitter;}();exports.default=EventEmitter;module.exports=exports['default'];

},{}],7:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.divideURL=divideURL;exports.deepClone=deepClone;exports.getConfig=getConfig;exports.getUserMedia=getUserMedia;exports.serialize=serialize;exports.getTemplate=getTemplate; /**
 * Copyright 2016 PT Inovação e Sistemas SA
 * Copyright 2016 INESC-ID
 * Copyright 2016 QUOBIS NETWORKS SL
 * Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
 * Copyright 2016 ORANGE SA
 * Copyright 2016 Deutsche Telekom AG
 * Copyright 2016 Apizee
 * Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/ // jshint browser:true, jquery: true
// jshint varstmt: true
/* global Handlebars */ /**
 * Support module with some functions will be useful
 * @module utils
 */ /**
 * @typedef divideURL
 * @type Object
 * @property {string} type The type of URL
 * @property {string} domain The domain of URL
 * @property {string} identity The identity of URL
 */ /**
 * Divide an url in type, domain and identity
 * @param  {URL.URL} url - url address
 * @return {divideURL} the result of divideURL
 */function divideURL(url){ // let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
var re=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;var subst='$1,$2,$3';var parts=url.replace(re,subst).split(','); // If the url has no protocol, the default protocol set is https
if(parts[0]===url){parts[0]='https';parts[1]=url;}var result={type:parts[0],domain:parts[1],identity:parts[2]};return result;} /**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */function deepClone(obj){ //TODO: simple but inefficient JSON deep clone...
if(obj)return JSON.parse(JSON.stringify(obj));} /**
 * Get the configuration from an json file;
 * @param  {JSONObject} jsonFile
 * @return {object}
 */function getConfig(JSONObject){console.log('development');return JSONObject['development'];} /**
 * Get WebRTC API resources
 * @param  {Object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
 * @return {Promise}
 */function getUserMedia(constraints){return new Promise(function(resolve,reject){navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){resolve(mediaStream);}).catch(function(reason){reject(reason);});});}function serialize(){$.fn.serializeObject=function(){var o={};var a=this.serializeArray();$.each(a,function(){if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}o[this.name].push(this.value||'');}else {o[this.name]=this.value||'';}});return o;};$.fn.serializeObjectArray=function(){var o={};var a=this.serializeArray();$.each(a,function(){if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}o[this.name].push(this.value||'');}else {if(!o[this.name])o[this.name]=[];o[this.name].push(this.value||'');}});return o;};}function getTemplate(path,script){return new Promise(function(resolve,reject){if(Handlebars.templates===undefined||Handlebars.templates[name]===undefined){Handlebars.templates={};}else {resolve(Handlebars.templates[name]);}var templateFile=$.ajax({url:path+'.hbs',success:function success(data){Handlebars.templates[name]=Handlebars.compile(data);},fail:function fail(reason){return reason;}});var scriptFile=$.getScript(script);var requests=[];if(path)requests.push(templateFile);if(script)requests.push(scriptFile);Promise.all(requests).then(function(result){resolve(Handlebars.templates[name]);}).catch(function(reason){reject(reason);});});}

},{}],8:[function(require,module,exports){
(function (global){
/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

// Distribution file for HypertyDiscovery.js 
// version: 0.2.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.HypertyDiscovery=e()}}(function(){return function e(r,t,o){function n(s,u){if(!t[s]){if(!r[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(i)return i(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var f=t[s]={exports:{}};r[s][0].call(f.exports,function(e){var t=r[s][1][e];return n(t?t:e)},f,f.exports,e,r,t,o)}return t[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,r,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=e("./hyperty-discovery/HypertyDiscovery"),i=o(n);t["default"]=i["default"],r.exports=t["default"]},{"./hyperty-discovery/HypertyDiscovery":2}],2:[function(e,r,t){"use strict";function o(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(r,t,o){return t&&e(r.prototype,t),o&&e(r,o),r}}(),i=e("../utils/utils"),s=function(){function e(r,t){o(this,e);var n=this;n.messageBus=t,n.domain=(0,i.divideURL)(r).domain,n.discoveryURL=r}return n(e,[{key:"discoverDataObjectPerName",value:function(e,r){var t=this,o=void 0;o=r?r:t.domain;var n={type:"read",from:t.discoveryURL,to:"domain://registry."+o+"/",body:{resource:"dataObject://"+e}};return new Promise(function(e,r){t.messageBus.postMessage(n,function(t){var o=t.body.value.url;o?e(o):r("DataObject name does not exist")})})}},{key:"discoverHypertyPerUser",value:function(e,r){var t=this,o=void 0;o=r?r:t.domain;var n="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),i={type:"read",from:t.discoveryURL,to:"domain://registry."+o+"/",body:{resource:n}};return console.log("Message: ",i,o,n),new Promise(function(r,o){t.messageBus.postMessage(i,function(t){console.log("message reply",t);var n=void 0,i=void 0,s=void 0,u=t.body.value;for(n in u)if(void 0!==u[n].lastModified)if(void 0===i)i=new Date(u[n].lastModified),s=n;else{var a=new Date(u[n].lastModified);i.getTime()<a.getTime()&&(i=a,s=n)}console.log("Last Hyperty: ",s,i);var d=s;if(void 0===d)return o("User Hyperty not found");var f={id:e,descriptor:u[d].descriptor,hypertyURL:d};console.log("===> hypertyDiscovery messageBundle: ",f),r(f)})})}}]),e}();t["default"]=s,r.exports=t["default"]},{"../utils/utils":3}],3:[function(e,r,t){"use strict";function o(e){var r=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,t="$1,$2,$3",o=e.replace(r,t).split(",");o[0]===e&&(o[0]="https",o[1]=e);var n={type:o[0],domain:o[1],identity:o[2]};return n}function n(e){return e?JSON.parse(JSON.stringify(e)):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.divideURL=o,t.deepClone=n},{}]},{},[1])(1)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
(function (global){
/**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

// Distribution file for Syncher.js 
// version: 0.2.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Syncher=e()}}(function(){return function e(t,n,r){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){Object.observe&&!Array.observe&&function(e,t){"use strict";var n=e.getNotifier,r="performChange",o="_original",i="splice",s={push:function u(e){var t=arguments,s=u[o].apply(this,t);return n(this)[r](i,function(){return{index:s-t.length,addedCount:t.length,removed:[]}}),s},unshift:function c(e){var t=arguments,s=c[o].apply(this,t);return n(this)[r](i,function(){return{index:0,addedCount:t.length,removed:[]}}),s},pop:function l(){var e=this.length,t=l[o].call(this);return this.length!==e&&n(this)[r](i,function(){return{index:this.length,addedCount:0,removed:[t]}},this),t},shift:function f(){var e=this.length,t=f[o].call(this);return this.length!==e&&n(this)[r](i,function(){return{index:0,addedCount:0,removed:[t]}},this),t},splice:function d(e,t){var s=arguments,a=d[o].apply(this,s);return(a.length||s.length>2)&&n(this)[r](i,function(){return{index:e,addedCount:s.length-2,removed:a}},this),a}};for(var a in s)s[a][o]=t.prototype[a],t.prototype[a]=s[a];t.observe=function(t,n){return e.observe(t,n,["add","update","delete",i])},t.unobserve=e.unobserve}(Object,Array)},{}],2:[function(e,t,n){window.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||function(e){function t(e){this.g=[],this.k=e}function n(e){!function n(){var r=e.takeRecords();r.length&&e.k(r,e),e.f=setTimeout(n,t._period)}()}function r(t){var n,r={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(n in t)r[n]!==e&&t[n]!==e&&(r[n]=t[n]);return r}function o(e,t){var n=a(e,t);return function(r){var o,u=r.length;t.a&&n.a&&i(r,e,n.a,t.d),(t.b||t.e)&&(o=s(r,e,n,t)),(o||r.length!==u)&&(n=a(e,t))}}function i(t,n,o,i){for(var s,a,u={},c=n.attributes,l=c.length;l--;)s=c[l],a=s.name,i&&i[a]===e||(s.value!==o[a]&&t.push(r({type:"attributes",target:n,attributeName:a,oldValue:o[a],attributeNamespace:s.namespaceURI})),u[a]=!0);for(a in o)u[a]||t.push(r({target:n,type:"attributes",attributeName:a,oldValue:o[a]}))}function s(t,n,o,s){function a(e,n,o,a,u){var l=e.length-1;u=-~((l-u)/2);for(var f,d,p;p=e.pop();)f=o[p.h],d=a[p.i],s.b&&u&&Math.abs(p.h-p.i)>=l&&(t.push(r({type:"childList",target:n,addedNodes:[f],removedNodes:[f],nextSibling:f.nextSibling,previousSibling:f.previousSibling})),u--),s.a&&d.a&&i(t,f,d.a,s.d),s.c&&3===f.nodeType&&f.nodeValue!==d.c&&t.push(r({type:"characterData",target:f})),s.e&&c(f,d)}function c(n,o){for(var d,p,b,h,v,y=n.childNodes,_=o.b,g=y.length,O=_?_.length:0,j=0,m=0,w=0;g>m||O>w;)h=y[m],v=(b=_[w])&&b.j,h===v?(s.a&&b.a&&i(t,h,b.a,s.d),s.c&&b.c!==e&&h.nodeValue!==b.c&&t.push(r({type:"characterData",target:h})),p&&a(p,n,y,_,j),s.e&&(h.childNodes.length||b.b&&b.b.length)&&c(h,b),m++,w++):(l=!0,d||(d={},p=[]),h&&(d[b=u(h)]||(d[b]=!0,-1===(b=f(_,h,w,"j"))?s.b&&(t.push(r({type:"childList",target:n,addedNodes:[h],nextSibling:h.nextSibling,previousSibling:h.previousSibling})),j++):p.push({h:m,i:b})),m++),v&&v!==y[m]&&(d[b=u(v)]||(d[b]=!0,-1===(b=f(y,v,m))?s.b&&(t.push(r({type:"childList",target:o.j,removedNodes:[v],nextSibling:_[w+1],previousSibling:_[w-1]})),j--):p.push({h:b,i:w})),w++));p&&a(p,n,y,_,j)}var l;return c(n,o),l}function a(e,t){var n=!0;return function r(e){var o={j:e};return!t.c||3!==e.nodeType&&8!==e.nodeType?(t.a&&n&&1===e.nodeType&&(o.a=l(e.attributes,function(e,n){return t.d&&!t.d[n.name]||(e[n.name]=n.value),e})),n&&(t.b||t.c||t.a&&t.e)&&(o.b=c(e.childNodes,r)),n=t.e):o.c=e.nodeValue,o}(e)}function u(e){try{return e.id||(e.mo_id=e.mo_id||d++)}catch(t){try{return e.nodeValue}catch(n){return d++}}}function c(e,t){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r],r,e);return n}function l(e,t){for(var n={},r=0;r<e.length;r++)n=t(n,e[r],r,e);return n}function f(e,t,n,r){for(;n<e.length;n++)if((r?e[n][r]:e[n])===t)return n;return-1}t._period=30,t.prototype={observe:function(e,t){for(var r={a:!!(t.attributes||t.attributeFilter||t.attributeOldValue),b:!!t.childList,e:!!t.subtree,c:!(!t.characterData&&!t.characterDataOldValue)},i=this.g,s=0;s<i.length;s++)i[s].m===e&&i.splice(s,1);t.attributeFilter&&(r.d=l(t.attributeFilter,function(e,t){return e[t]=!0,e})),i.push({m:e,l:o(e,r)}),this.f||n(this)},takeRecords:function(){for(var e=[],t=this.g,n=0;n<t.length;n++)t[n].l(e);return e},disconnect:function(){this.g=[],clearTimeout(this.f),this.f=null}};var d=1;return t}(void 0)},{}],3:[function(e,t,n){Object.observe||function(e,t,n,r){"use strict";var o,i,s=["add","update","delete","reconfigure","setPrototype","preventExtensions"],a=t.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}(e.prototype.toString),u=t.prototype.indexOf?t.indexOf||function(e,n,r){return t.prototype.indexOf.call(e,n,r)}:function(e,t,n){for(var r=n||0;r<e.length;r++)if(e[r]===t)return r;return-1},c=n.Map!==r&&Map.prototype.forEach?function(){return new Map}:function(){var e=[],t=[];return{size:0,has:function(t){return u(e,t)>-1},get:function(n){return t[u(e,n)]},set:function(n,r){var o=u(e,n);-1===o?(e.push(n),t.push(r),this.size++):t[o]=r},"delete":function(n){var r=u(e,n);r>-1&&(e.splice(r,1),t.splice(r,1),this.size--)},forEach:function(n){for(var r=0;r<e.length;r++)n.call(arguments[1],t[r],e[r],this)}}},l=e.getOwnPropertyNames?function(){var t=e.getOwnPropertyNames;try{arguments.callee}catch(n){var r=(t(u).join(" ")+" ").replace(/prototype |length |name /g,"").slice(0,-1).split(" ");r.length&&(t=function(t){var n=e.getOwnPropertyNames(t);if("function"==typeof t)for(var o,i=0;i<r.length;)(o=u(n,r[i++]))>-1&&n.splice(o,1);return n})}return t}():function(t){var n,r,o=[];if("hasOwnProperty"in t)for(n in t)t.hasOwnProperty(n)&&o.push(n);else{r=e.hasOwnProperty;for(n in t)r.call(t,n)&&o.push(n)}return a(t)&&o.push("length"),o},f=e.getPrototypeOf,d=e.defineProperties&&e.getOwnPropertyDescriptor,p=n.requestAnimationFrame||n.webkitRequestAnimationFrame||function(){var e=+new Date,t=e;return function(n){return setTimeout(function(){n((t=+new Date)-e)},17)}}(),b=function(e,t,n){var r=o.get(e);r?(v(r,e),O(e,r,t,n)):(r=h(e),O(e,r,t,n),1===o.size&&p(y))},h=function(t,n){var r,i=l(t),s=[],a=0,n={handlers:c(),frozen:e.isFrozen?e.isFrozen(t):!1,extensible:e.isExtensible?e.isExtensible(t):!0,proto:f&&f(t),properties:i,values:s,notifier:g(t,n)};if(d)for(r=n.descriptors=[];a<i.length;)r[a]=d(t,i[a]),s[a]=t[i[a++]];else for(;a<i.length;)s[a]=t[i[a++]];return o.set(t,n),n},v=function(){var t=d?function(e,t,n,r,o){var i=t.properties[n],s=e[i],a=t.values[n],u=t.descriptors[n];"value"in o&&(a===s?0===a&&1/a!==1/s:a===a||s===s)&&(j(e,t,{name:i,type:"update",object:e,oldValue:a},r),t.values[n]=s),!u.configurable||o.configurable&&o.writable===u.writable&&o.enumerable===u.enumerable&&o.get===u.get&&o.set===u.set||(j(e,t,{name:i,type:"reconfigure",object:e,oldValue:a},r),t.descriptors[n]=o)}:function(e,t,n,r){var o=t.properties[n],i=e[o],s=t.values[n];(s===i?0===s&&1/s!==1/i:s===s||i===i)&&(j(e,t,{name:o,type:"update",object:e,oldValue:s},r),t.values[n]=i)},n=d?function(e,n,r,o,i){for(var s,a=n.length;r&&a--;)null!==n[a]&&(s=d(e,n[a]),r--,s?t(e,o,a,i,s):(j(e,o,{name:n[a],type:"delete",object:e,oldValue:o.values[a]},i),o.properties.splice(a,1),o.values.splice(a,1),o.descriptors.splice(a,1)))}:function(e,t,n,r,o){for(var i=t.length;n&&i--;)null!==t[i]&&(j(e,r,{name:t[i],type:"delete",object:e,oldValue:r.values[i]},o),r.properties.splice(i,1),r.values.splice(i,1),n--)};return function(r,o,i){if(r.handlers.size&&!r.frozen){var s,a,c,p,b,h,v,y,_=r.values,g=r.descriptors,O=0;if(r.extensible)if(s=r.properties.slice(),a=s.length,c=l(o),g){for(;O<c.length;)b=c[O++],p=u(s,b),y=d(o,b),-1===p?(j(o,r,{name:b,type:"add",object:o},i),r.properties.push(b),_.push(o[b]),g.push(y)):(s[p]=null,a--,t(o,r,p,i,y));n(o,s,a,r,i),e.isExtensible(o)||(r.extensible=!1,j(o,r,{type:"preventExtensions",object:o},i),r.frozen=e.isFrozen(o))}else{for(;O<c.length;)b=c[O++],p=u(s,b),h=o[b],-1===p?(j(o,r,{name:b,type:"add",object:o},i),r.properties.push(b),_.push(h)):(s[p]=null,a--,t(o,r,p,i));n(o,s,a,r,i)}else if(!r.frozen){for(;O<s.length;O++)b=s[O],t(o,r,O,i,d(o,b));e.isFrozen(o)&&(r.frozen=!0)}f&&(v=f(o),v!==r.proto&&(j(o,r,{type:"setPrototype",name:"__proto__",object:o,oldValue:r.proto}),r.proto=v))}}}(),y=function(){o.size&&(o.forEach(v),i.forEach(_),p(y))},_=function(e,t){var n=e.changeRecords;n.length&&(e.changeRecords=[],t(n))},g=function(e,t){return arguments.length<2&&(t=o.get(e)),t&&t.notifier||{notify:function(t){t.type;var n=o.get(e);if(n){var r,i={object:e};for(r in t)"object"!==r&&(i[r]=t[r]);j(e,n,i)}},performChange:function(t,n){if("string"!=typeof t)throw new TypeError("Invalid non-string changeType");if("function"!=typeof n)throw new TypeError("Cannot perform non-function");var i,s,a=o.get(e),u=arguments[2],c=u===r?n():n.call(u);if(a&&v(a,e,t),a&&c&&"object"==typeof c){s={object:e,type:t};for(i in c)"object"!==i&&"type"!==i&&(s[i]=c[i]);j(e,a,s)}}}},O=function(e,t,n,r){var o=i.get(n);o||i.set(n,o={observed:c(),changeRecords:[]}),o.observed.set(e,{acceptList:r.slice(),data:t}),t.handlers.set(n,o)},j=function(e,t,n,r){t.handlers.forEach(function(t){var o=t.observed.get(e).acceptList;("string"!=typeof r||-1===u(o,r))&&u(o,n.type)>-1&&t.changeRecords.push(n)})};o=c(),i=c(),e.observe=function(t,n,o){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.observe cannot observe non-object");if("function"!=typeof n)throw new TypeError("Object.observe cannot deliver to non-function");if(e.isFrozen&&e.isFrozen(n))throw new TypeError("Object.observe cannot deliver to a frozen function object");if(o===r)o=s;else if(!o||"object"!=typeof o)throw new TypeError("Third argument to Object.observe must be an array of strings.");return b(t,n,o),t},e.unobserve=function(e,t){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object.unobserve cannot unobserve non-object");if("function"!=typeof t)throw new TypeError("Object.unobserve cannot deliver to non-function");var n,r=i.get(t);return r&&(n=r.observed.get(e))&&(r.observed.forEach(function(e,t){v(e.data,t)}),p(function(){_(r,t)}),1===r.observed.size&&r.observed.has(e)?i["delete"](t):r.observed["delete"](e),1===n.data.handlers.size?o["delete"](e):n.data.handlers["delete"](t)),e},e.getNotifier=function(t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.getNotifier cannot getNotifier non-object");return e.isFrozen&&e.isFrozen(t)?null:g(t)},e.deliverChangeRecords=function(e){if("function"!=typeof e)throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");var t=i.get(e);t&&(t.observed.forEach(function(e,t){v(e.data,t)}),_(t,e))}}(Object,Array,this)},{}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.DataObjectObserver=n.DataObjectReporter=n.Syncher=void 0,e("mutationobserver-shim"),e("object.observe"),e("array.observe");var o=e("./syncher/Syncher"),i=r(o),s=e("./syncher/DataObjectReporter"),a=r(s),u=e("./syncher/DataObjectObserver"),c=r(u);n.Syncher=i["default"],n.DataObjectReporter=a["default"],n.DataObjectObserver=c["default"]},{"./syncher/DataObjectObserver":7,"./syncher/DataObjectReporter":8,"./syncher/Syncher":11,"array.observe":1,"mutationobserver-shim":2,"object.observe":3}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("./SyncObject"),a=r(s),u=e("./DataObjectChild"),c=r(u),l=e("../utils/utils.js"),f=function(){function e(t,n,r,i,s,u){o(this,e);var c=this;c._syncher=t,c._url=n,c._schema=r,c._status=i,c._syncObj=new a["default"](s),c._childrens=u,c._version=0,c._childId=0,c._childrenObjects={},c._childrenListeners=[],c._owner=t._owner,c._bus=t._bus}return i(e,[{key:"_allocateListeners",value:function(){var e=this,t=this,n=t._url+"/children/";t._childrens&&t._childrens.forEach(function(r){var o=n+r,i=t._bus.addListener(o,function(n){if(n.from!==e._owner)switch(console.log("DataObject-Children-RCV: ",n),n.type){case"create":t._onChildrenCreate(n);break;case"delete":console.log(n);break;default:t._changeChildren(n)}});t._childrenListeners.push(i)})}},{key:"_releaseListeners",value:function(){var e=this;e._childrenListeners.forEach(function(e){e.remove()}),Object.keys(e._childrenObjects).forEach(function(t){e._childrenObjects[t]._releaseListeners()})}},{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"addChildren",value:function(e,t){var n=this;n._childId++;var r=n._owner+"#"+n._childId,o=n._url+"/children/"+e,i={type:"create",from:n._owner,to:o,body:{resource:r,value:t}};return new Promise(function(e){var s=n._bus.postMessage(i);console.log("create-reporter-child( "+n._owner+" ): ",i);var a=new c["default"](n,r,t,n._owner,s);a.onChange(function(e){n._onChange(e,{path:o,childId:r})}),n._childrenObjects[r]=a,e(a)})}},{key:"onAddChildren",value:function(e){this._onAddChildrenHandler=e}},{key:"_onChildrenCreate",value:function(e){var t=this,n=e.body.resource;console.log("create-observer-child( "+t._owner+" ): ",e);var r=new c["default"](t,n,e.body.value);t._childrenObjects[n]=r,setTimeout(function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,source:t._owner}})});var o={type:e.type,from:e.from,url:e.to,value:e.body.value,childId:n,identity:e.body.idToken};t._onAddChildrenHandler&&(console.log("ADD-CHILDREN-EVENT: ",o),t._onAddChildrenHandler(o))}},{key:"_onChange",value:function(e,t){var n=this;if(n._version++,"on"===n._status){var r={type:"update",from:n._url,to:n._url+"/changes",body:{version:n._version,source:n._owner,attribute:e.field}};e.oType===s.ObjectType.OBJECT?e.cType!==s.ChangeType.REMOVE&&(r.body.value=e.data):(r.body.attributeType=e.oType,r.body.value=e.data,e.cType!==s.ChangeType.UPDATE&&(r.body.operation=e.cType)),t&&(r.to=t.path,r.body.resource=t.childId),n._bus.postMessage(r)}}},{key:"_changeObject",value:function(e,t){var n=this;if(n._version+1===t.body.version){n._version++;var r=t.body.attribute,o=(0,l.deepClone)(t.body.value),i=e.findBefore(r);if(t.body.attributeType===s.ObjectType.ARRAY)if(t.body.operation===s.ChangeType.ADD){var a=i.obj,u=i.last;Array.prototype.splice.apply(a,[u,0].concat(o))}else if(t.body.operation===s.ChangeType.REMOVE){var c=i.obj,f=i.last;c.splice(f,o)}else i.obj[i.last]=o;else t.body.value?i.obj[i.last]=o:delete i.obj[i.last]}else console.log("UNSYNCHRONIZED VERSION: (data => "+n._version+", msg => "+t.body.version+")")}},{key:"_changeChildren",value:function(e){var t=this;console.log("Change children: ",t._owner,e);var n=e.body.resource,r=t._childrenObjects[n];r?t._changeObject(r._syncObj,e):console.log("No children found for: ",n)}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"childrens",get:function(){return this._childrenObjects}}]),e}();n["default"]=f,t.exports=n["default"]},{"../utils/utils.js":12,"./DataObjectChild":6,"./SyncObject":10}],6:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("./SyncObject"),a=r(s),u=function(){function e(t,n,r,i,s){o(this,e);var u=this;u._parent=t,u._childId=n,u._owner=i,u._msgId=s,u._syncObj=new a["default"](r),u._bus=t._bus,u._allocateListeners()}return i(e,[{key:"_allocateListeners",value:function(){var e=this;e._owner&&(e._listener=e._bus.addListener(e._owner,function(t){"response"===t.type&&t.id===e._msgId&&(console.log("DataObjectChild.onResponse:",t),e._onResponse(t))}))}},{key:"_releaseListeners",value:function(){var e=this;e._listener&&e._listener.remove()}},{key:"delete",value:function(){var e=this;delete e._parent._children[e._childId],e._releaseListeners()}},{key:"onChange",value:function(e){this._syncObj.observe(function(t){e(t)})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onResponse",value:function(e){var t=this,n={type:e.type,url:e.body.source,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(n)}},{key:"childId",get:function(){return this._childId}},{key:"data",get:function(){return this._syncObj.data}}]),e}();n["default"]=u,t.exports=n["default"]},{"./SyncObject":10}],7:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function h(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:h(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=e("./DataObject"),l=r(c),f=e("./DataObjectChild"),d=r(f),p={ANY:"any",START:"start",EXACT:"exact"},b=function(e){function t(e,n,r,s,a,u,c){o(this,t);var l=i(this,Object.getPrototypeOf(t).call(this,e,n,r,s,a.data,u)),f=l;return f._version=c,f._filters={},f._syncObj.observe(function(e){f._onFilter(e)}),Object.keys(a.childrens).forEach(function(e){var t=a.childrens[e];f._childrenObjects[e]=new d["default"](f,e,t)}),f._allocateListeners(),l}return s(t,e),a(t,[{key:"_allocateListeners",value:function(){u(Object.getPrototypeOf(t.prototype),"_allocateListeners",this).call(this);var e=this;e._changeListener=e._bus.addListener(e._url+"/changes",function(t){"update"===t.type&&(console.log("DataObjectObserver-"+e._url+"-RCV: ",t),e._changeObject(e._syncObj,t))})}},{key:"_releaseListeners",value:function(){u(Object.getPrototypeOf(t.prototype),"_releaseListeners",this).call(this);var e=this;e._changeListener.remove()}},{key:"delete",value:function(){var e=this;e._releaseListeners(),delete e._syncher._observers[e._url]}},{key:"unsubscribe",value:function(){var e=this,t={type:"unsubscribe",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectObserver-UNSUBSCRIBE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._observers[e._url])})}},{key:"onChange",value:function(e,t){var n=e,r={type:p.EXACT,callback:t},o=e.indexOf("*");o===e.length-1&&(0===o?r.type=p.ANY:(r.type=p.START,n=e.substr(0,e.length-1))),this._filters[n]=r}},{key:"_onFilter",value:function(e){var t=this;Object.keys(t._filters).forEach(function(n){var r=t._filters[n];r.type===p.ANY?r.callback(e):r.type===p.START?0===e.field.indexOf(n)&&r.callback(e):r.type===p.EXACT&&e.field===n&&r.callback(e)})}}]),t}(l["default"]);n["default"]=b,t.exports=n["default"]},{"./DataObject":5,"./DataObjectChild":6}],8:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function p(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:p(o,t,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=e("./DataObject"),l=r(c),f=e("../utils/utils.js"),d=function(e){function t(e,n,r,s,a,u){o(this,t);var c=i(this,Object.getPrototypeOf(t).call(this,e,n,r,s,a,u)),l=c;return l._subscriptions={},l._syncObj.observe(function(e){console.log("DataObjectReporter-"+n+"-SEND: ",e),l._onChange(e)}),l._allocateListeners(),c}return s(t,e),a(t,[{key:"_allocateListeners",value:function(){u(Object.getPrototypeOf(t.prototype),"_allocateListeners",this).call(this);var e=this;e._responseListener=e._bus.addListener(e._url,function(t){"response"===t.type&&e._onResponse(t)})}},{key:"_releaseListeners",value:function(){u(Object.getPrototypeOf(t.prototype),"_releaseListeners",this).call(this);var e=this;e._responseListener.remove()}},{key:"inviteObservers",value:function(e){var t=this,n={type:"create",from:t._syncher._owner,to:t._syncher._subURL,body:{resource:t._url,schema:t._schema,value:t._syncObj.data,authorise:e}};t._bus.postMessage(n)}},{key:"delete",value:function(){var e=this,t={type:"delete",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectReporter-DELETE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._reporters[e._url])})}},{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,n=e.body.from,r={type:e.body.type,url:n,accept:function(){var r={url:n,status:"on"};t._subscriptions[n]=r;var o={};return Object.keys(t._childrenObjects).forEach(function(e){var n=t._childrenObjects[e].data;o[e]=(0,f.deepClone)(n)}),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:{data:(0,f.deepClone)(t.data),childrens:o}}}),r},reject:function(n){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:n}})}};t._onSubscriptionHandler&&(console.log("SUBSCRIPTION-EVENT: ",r),t._onSubscriptionHandler(r))}},{key:"_onUnSubscribe",value:function(e){var t=this,n=e.body.from,r=t._subscriptions[n];delete t._subscriptions[n];var o={type:e.body.type,url:n,object:r};t._onSubscriptionHandler&&(console.log("UN-SUBSCRIPTION-EVENT: ",o),t._onSubscriptionHandler(o))}},{key:"_onResponse",value:function(e){var t=this,n={type:e.type,url:e.from,code:e.body.code};t._onResponseHandler&&(console.log("RESPONSE-EVENT: ",n),t._onResponseHandler(n))}},{key:"subscriptions",get:function(){return this._subscriptions}}]),t}(l["default"]);n["default"]=d,t.exports=n["default"]},{"../utils/utils.js":12,"./DataObject":5}],9:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,n,o,i){r(this,e);var s=this;s._owner=t,s._url=n,s._bus=o,s._children=i,s._changes=[],s._allocateListeners()}return o(e,[{key:"_allocateListeners",value:function(){var e=this;e._listener=e._bus.addListener(e._url,function(t){console.log("DataProvisional-"+e._url+"-RCV: ",t),e._changes.push(t)})}},{key:"_releaseListeners",value:function(){var e=this;e._listener.remove()}},{key:"apply",value:function(e){var t=this;t._changes.forEach(function(t){e._changeObject(e._syncObj,t)})}},{key:"children",get:function(){return this._children}}]),e}();n["default"]=i,t.exports=n["default"]},{}],10:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.ObjectType=n.ChangeType=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=e("../utils/utils.js"),s=function(){function e(t){r(this,e);var n=this;n._observers=[],n._filters={},t?n._data=(0,i.deepClone)(t):n._data={},n._internalObserve(new a,n._data)}return o(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},n=e.split(".");return t.last=n.pop(),t.obj=this._findWithSplit(n),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array}},{key:"_internalObserve",value:function(e,t){var n=this;if(n._isObservable(t)){var r=function(t){n._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,r);for(var o in t)n._isObservable(t[o])&&n._internalObserve(e["new"](o),t[o])}else if(t.constructor===Array){Array.observe(t,r);for(var i in t)if(n._isObservable(t[i])){var s=e["new"](new u(t[i],i));n._internalObserve(s,t[i])}}}}},{key:"_onChanges",value:function(e,t){var n=this;for(var r in t){var o=t[r].object,s=void 0;if(o.constructor===Object&&(s=l.OBJECT),o.constructor===Array&&(s=l.ARRAY),"splice"===t[r].type)!function(){var a=t[r].index,l=e["new"](""+a),f=l.toString(),d=t[r].removed.length;if(0!==d){var p=t[r].removed;p.forEach(function(t,r){n._isObservable(t)&&e.removeIndex(a+r)}),n._fireEvent({cType:c.REMOVE,oType:s,field:f,data:d})}var b=t[r].addedCount;if(0!==b){var h=o.slice(a,a+b);h.forEach(function(t,r){if(n._isObservable(t)){var o=e["new"](new u(t,a+r));n._internalObserve(o,t)}}),n._fireEvent({cType:c.ADD,oType:s,field:f,data:(0,i.deepClone)(h)})}a!==o.length-1&&e.reIndexFrom(o)}();else{var a=e["new"](t[r].name),f=a.toString();if(-1!==f.indexOf("Symbol"))continue;var d=o[t[r].name];"update"===t[r].type&&this._fireEvent({cType:c.UPDATE,oType:s,field:f,data:(0,i.deepClone)(d)}),"add"===t[r].type&&(this._internalObserve(a,d),this._fireEvent({cType:c.ADD,oType:s,field:f,data:(0,i.deepClone)(d)})),"delete"===t[r].type&&this._fireEvent({cType:c.REMOVE,oType:s,field:f})}}}},{key:"data",get:function(){return this._data}}]),e}(),a=function(){function e(){r(this,e),this._path=[],this._observables={}}return o(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;Object.keys(this._observables).forEach(function(n){var r=t._observables[n],o=e.indexOf(r.obj);r.idx!=o&&(r.idx=o,delete t._observables[n],t._observables[o]=r)})}},{key:"new",value:function(e){e.constructor==u&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,n){0===n?e=t.toString():e+="."+t.toString()}),e}}]),e}(),u=function(){function e(t,n){r(this,e),this.obj=t,this.idx=n}return o(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),c=n.ChangeType={UPDATE:"update",ADD:"add",REMOVE:"remove"},l=n.ObjectType={OBJECT:"object",ARRAY:"array"};n["default"]=s},{"../utils/utils.js":12}],11:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=e("./DataObjectReporter"),a=r(s),u=e("./DataObjectObserver"),c=r(u),l=e("./DataProvisional"),f=r(l),d=function(){function e(t,n,r){o(this,e);var i=this;i._owner=t,i._bus=n,i._subURL=r.runtimeURL+"/sm",i._reporters={},i._observers={},i._provisionals={},n.addListener(t,function(e){if(e.from!==t)switch(console.log("Syncher-RCV: ",e),e.type){case"forward":i._onForward(e);break;case"create":i._onRemoteCreate(e);break;case"delete":i._onRemoteDelete(e)}})}return i(e,[{key:"create",value:function(e,t,n){var r=this,o={type:"create",from:r._owner,to:r._subURL,body:{schema:e,value:n,authorise:t}};return new Promise(function(t,i){r._bus.postMessage(o,function(o){if(console.log("create-response: ",o),200===o.body.code){var s=o.body.resource,u=new a["default"](r,s,e,"on",n,o.body.childrenResources);r._reporters[s]=u,t(u)}else i(o.body.desc)})})}},{key:"subscribe",value:function(e,t){var n=this,r={type:"subscribe",from:n._owner,to:n._subURL,body:{schema:e,resource:t}};return new Promise(function(o,i){n._bus.postMessage(r,function(r){console.log("subscribe-response: ",r);var s=n._provisionals[t];if(delete n._provisionals[t],s&&s._releaseListeners(),r.body.code<200)s=new f["default"](n._owner,t,n._bus,r.body.childrenResources),n._provisionals[t]=s;else if(200===r.body.code){var a=new c["default"](n,t,e,"on",r.body.value,s.children,r.body.version);n._observers[t]=a,o(a),s.apply(a)}else i(r.body.desc)})})}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onForward",value:function(e){var t=this,n=t._reporters[e.body.to];n._onForward(e)}},{key:"_onRemoteCreate",value:function(e){var t=this,n=e.from.slice(0,-13),r={type:e.type,from:e.body.source,url:n,schema:e.body.schema,value:e.body.value,identity:e.body.idToken,ack:function(n){var r=200;n&&(r=n),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:r}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",r),
t._onNotificationHandler(r))}},{key:"_onRemoteDelete",value:function(e){var t=this,n=e.body.resource,r=t._observers[n];if(r){var o={type:e.type,url:n,identity:e.body.idToken,ack:function(n){var o=200;n&&(o=n),200===o&&r["delete"](),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:o,source:t._owner}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",o),t._onNotificationHandler(o))}else t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,source:t._owner}})}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();n["default"]=d,t.exports=n["default"]},{"./DataObjectObserver":7,"./DataObjectReporter":8,"./DataProvisional":9}],12:[function(e,t,n){"use strict";function r(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,n="$1,$2,$3",r=e.replace(t,n).split(",");r[0]===e&&(r[0]="https",r[1]=e);var o={type:r[0],domain:r[1],identity:r[2]};return o}function o(e){return e?JSON.parse(JSON.stringify(e)):void 0}Object.defineProperty(n,"__esModule",{value:!0}),n.divideURL=r,n.deepClone=o},{}]},{},[4])(4)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[3])(3)
});