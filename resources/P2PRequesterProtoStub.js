(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 /* eslint-env node */
'use strict';

// SDP helpers.
var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function() {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function(blob) {
  return blob.trim().split('\n').map(function(line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function(blob) {
  var parts = blob.split('\nm=');
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
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
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
  // was: channels
  parsed.numChannels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function(codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
      (codec.numChannels !== 1 ? '/' + codec.numChannels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function(line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function(headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
       ' ' + headerExtension.uri + '\r\n';
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
SDPUtils.writeFmtp = function(codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
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
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
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
    ssrc: parseInt(line.substr(7, sp - 7), 10)
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
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
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
  // Search in session part, too.
  lines = lines.concat(SDPUtils.splitLines(sessionpart));
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
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default: // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
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
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  sdp += 'a=rtcp-mux\r\n';

  caps.headerExtensions.forEach(function(extension) {
    sdp += SDPUtils.writeExtmap(extension);
  });
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
  .map(function(line) {
    return SDPUtils.parseSsrcMedia(line);
  })
  .filter(function(parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
  .map(function(line) {
    var parts = line.split(' ');
    parts.shift();
    return parts.map(function(part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function(codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10),
        rtx: {
          payloadType: codec.payloadType,
          ssrc: secondarySsrc
        }
      };
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: secondarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(5), 10);
    }
    encodingParameters.forEach(function(params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
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
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' ' + msid;
  }
  // FIXME: this should be written by writeRtpDescription.
  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
      ' cname:' + SDPUtils.localCName + '\r\n';
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
      default:
        // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

// Expose public methods.
module.exports = SDPUtils;

},{}],2:[function(require,module,exports){
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
// version: 0.5.1
// Last build: Mon Nov 14 2016 12:30:17 GMT+0000 (WET)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Syncher=e()}}(function(){return function e(t,r,o){function n(s,c){if(!r[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return n(r?r:e)},l,l.exports,e,t,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,r){Object.observe&&!Array.observe&&function(e,t){"use strict";var r=e.getNotifier,o="performChange",n="_original",i="splice",s={push:function a(e){var t=arguments,s=a[n].apply(this,t);return r(this)[o](i,function(){return{index:s-t.length,addedCount:t.length,removed:[]}}),s},unshift:function u(e){var t=arguments,s=u[n].apply(this,t);return r(this)[o](i,function(){return{index:0,addedCount:t.length,removed:[]}}),s},pop:function l(){var e=this.length,t=l[n].call(this);return this.length!==e&&r(this)[o](i,function(){return{index:this.length,addedCount:0,removed:[t]}},this),t},shift:function f(){var e=this.length,t=f[n].call(this);return this.length!==e&&r(this)[o](i,function(){return{index:0,addedCount:0,removed:[t]}},this),t},splice:function d(e,t){var s=arguments,c=d[n].apply(this,s);return(c.length||s.length>2)&&r(this)[o](i,function(){return{index:e,addedCount:s.length-2,removed:c}},this),c}};for(var c in s)s[c][n]=t.prototype[c],t.prototype[c]=s[c];t.observe=function(t,r){return e.observe(t,r,["add","update","delete",i])},t.unobserve=e.unobserve}(Object,Array)},{}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":18}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":19}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":20}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0}},{"core-js/library/fn/object/get-own-property-descriptor":21}],6:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":22}],7:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":23}],8:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":24}],9:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":25}],10:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":26}],11:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":27}],12:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],13:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../core-js/object/define-property"),i=o(n);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i["default"])(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}()},{"../core-js/object/define-property":4}],14:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../core-js/object/get-prototype-of"),i=o(n),s=e("../core-js/object/get-own-property-descriptor"),c=o(s);r["default"]=function a(e,t,r){null===e&&(e=Function.prototype);var o=(0,c["default"])(e,t);if(void 0===o){var n=(0,i["default"])(e);return null===n?void 0:a(n,t,r)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(r)}},{"../core-js/object/get-own-property-descriptor":5,"../core-js/object/get-prototype-of":6}],15:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../core-js/object/set-prototype-of"),i=o(n),s=e("../core-js/object/create"),c=o(s),a=e("../helpers/typeof"),u=o(a);r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,u["default"])(t)));e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i["default"]?(0,i["default"])(e,t):e.__proto__=t)}},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":8,"../helpers/typeof":17}],16:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../helpers/typeof"),i=o(n);r["default"]=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,i["default"])(t))&&"function"!=typeof t?e:t}},{"../helpers/typeof":17}],17:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../core-js/symbol/iterator"),i=o(n),s=e("../core-js/symbol"),c=o(s),a="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(e){return typeof e}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]&&e!==c["default"].prototype?"symbol":typeof e};r["default"]="function"==typeof c["default"]&&"symbol"===a(i["default"])?function(e){return"undefined"==typeof e?"undefined":a(e)}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]&&e!==c["default"].prototype?"symbol":"undefined"==typeof e?"undefined":a(e)}},{"../core-js/symbol":10,"../core-js/symbol/iterator":11}],18:[function(e,t,r){var o=e("../../modules/_core"),n=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(e){return n.stringify.apply(n,arguments)}},{"../../modules/_core":35}],19:[function(e,t,r){e("../../modules/es6.object.create");var o=e("../../modules/_core").Object;t.exports=function(e,t){return o.create(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.create":100}],20:[function(e,t,r){e("../../modules/es6.object.define-property");var o=e("../../modules/_core").Object;t.exports=function(e,t,r){return o.defineProperty(e,t,r)}},{"../../modules/_core":35,"../../modules/es6.object.define-property":101}],21:[function(e,t,r){e("../../modules/es6.object.get-own-property-descriptor");var o=e("../../modules/_core").Object;t.exports=function(e,t){return o.getOwnPropertyDescriptor(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.get-own-property-descriptor":102}],22:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/_core").Object.getPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.get-prototype-of":103}],23:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":35,"../../modules/es6.object.keys":104}],24:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/_core").Object.setPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.set-prototype-of":105}],25:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":35,"../modules/es6.object.to-string":106,"../modules/es6.promise":107,"../modules/es6.string.iterator":108,"../modules/web.dom.iterable":112}],26:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),e("../../modules/es7.symbol.async-iterator"),e("../../modules/es7.symbol.observable"),t.exports=e("../../modules/_core").Symbol},{"../../modules/_core":35,"../../modules/es6.object.to-string":106,"../../modules/es6.symbol":109,"../../modules/es7.symbol.async-iterator":110,"../../modules/es7.symbol.observable":111}],27:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/_wks-ext").f("iterator")},{"../../modules/_wks-ext":96,"../../modules/es6.string.iterator":108,"../../modules/web.dom.iterable":112}],28:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],29:[function(e,t,r){t.exports=function(){}},{}],30:[function(e,t,r){t.exports=function(e,t,r,o){if(!(e instanceof t)||void 0!==o&&o in e)throw TypeError(r+": incorrect invocation!");return e}},{}],31:[function(e,t,r){var o=e("./_is-object");t.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":54}],32:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var c,a=o(t),u=n(a.length),l=i(s,u);if(e&&r!=r){for(;u>l;)if(c=a[l++],c!=c)return!0}else for(;u>l;l++)if((e||l in a)&&a[l]===r)return e||l||0;return!e&&-1}}},{"./_to-index":88,"./_to-iobject":90,"./_to-length":91}],33:[function(e,t,r){var o=e("./_cof"),n=e("./_wks")("toStringTag"),i="Arguments"==o(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),n))?r:i?o(t):"Object"==(c=o(t))&&"function"==typeof t.callee?"Arguments":c}},{"./_cof":34,"./_wks":97}],34:[function(e,t,r){var o={}.toString;t.exports=function(e){return o.call(e).slice(8,-1)}},{}],35:[function(e,t,r){var o=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},{}],36:[function(e,t,r){var o=e("./_a-function");t.exports=function(e,t,r){if(o(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,n){return e.call(t,r,o,n)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":28}],37:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],38:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":43}],39:[function(e,t,r){var o=e("./_is-object"),n=e("./_global").document,i=o(n)&&o(n.createElement);t.exports=function(e){return i?n.createElement(e):{}}},{"./_global":45,"./_is-object":54}],40:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],41:[function(e,t,r){var o=e("./_object-keys"),n=e("./_object-gops"),i=e("./_object-pie");t.exports=function(e){var t=o(e),r=n.f;if(r)for(var s,c=r(e),a=i.f,u=0;c.length>u;)a.call(e,s=c[u++])&&t.push(s);return t}},{"./_object-gops":71,"./_object-keys":74,"./_object-pie":75}],42:[function(e,t,r){var o=e("./_global"),n=e("./_core"),i=e("./_ctx"),s=e("./_hide"),c="prototype",a=function(e,t,r){var u,l,f,d=e&a.F,_=e&a.G,p=e&a.S,b=e&a.P,y=e&a.B,h=e&a.W,v=_?n:n[t]||(n[t]={}),j=v[c],m=_?o:p?o[t]:(o[t]||{})[c];_&&(r=t);for(u in r)l=!d&&m&&void 0!==m[u],l&&u in v||(f=l?m[u]:r[u],v[u]=_&&"function"!=typeof m[u]?r[u]:y&&l?i(f,o):h&&m[u]==f?function(e){var t=function(t,r,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,o)}return e.apply(this,arguments)};return t[c]=e[c],t}(f):b&&"function"==typeof f?i(Function.call,f):f,b&&((v.virtual||(v.virtual={}))[u]=f,e&a.R&&j&&!j[u]&&s(j,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},{"./_core":35,"./_ctx":36,"./_global":45,"./_hide":47}],43:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],44:[function(e,t,r){var o=e("./_ctx"),n=e("./_iter-call"),i=e("./_is-array-iter"),s=e("./_an-object"),c=e("./_to-length"),a=e("./core.get-iterator-method"),u={},l={},r=t.exports=function(e,t,r,f,d){var _,p,b,y,h=d?function(){return e}:a(e),v=o(r,f,t?2:1),j=0;if("function"!=typeof h)throw TypeError(e+" is not iterable!");if(i(h)){for(_=c(e.length);_>j;j++)if(y=t?v(s(p=e[j])[0],p[1]):v(e[j]),y===u||y===l)return y}else for(b=h.call(e);!(p=b.next()).done;)if(y=n(b,v,p.value,t),y===u||y===l)return y};r.BREAK=u,r.RETURN=l},{"./_an-object":31,"./_ctx":36,"./_is-array-iter":52,"./_iter-call":55,"./_to-length":91,"./core.get-iterator-method":98}],45:[function(e,t,r){var o=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},{}],46:[function(e,t,r){var o={}.hasOwnProperty;t.exports=function(e,t){return o.call(e,t)}},{}],47:[function(e,t,r){var o=e("./_object-dp"),n=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return o.f(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":38,"./_object-dp":66,"./_property-desc":77}],48:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":45}],49:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":38,"./_dom-create":39,"./_fails":43}],50:[function(e,t,r){t.exports=function(e,t,r){var o=void 0===r;switch(t.length){case 0:return o?e():e.call(r);case 1:return o?e(t[0]):e.call(r,t[0]);case 2:return o?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return o?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return o?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],51:[function(e,t,r){var o=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},{"./_cof":34}],52:[function(e,t,r){var o=e("./_iterators"),n=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(o.Array===e||i[n]===e)}},{"./_iterators":60,"./_wks":97}],53:[function(e,t,r){var o=e("./_cof");t.exports=Array.isArray||function(e){return"Array"==o(e)}},{"./_cof":34}],54:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],55:[function(e,t,r){var o=e("./_an-object");t.exports=function(e,t,r,n){try{return n?t(o(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&o(s.call(e)),i}}},{"./_an-object":31}],56:[function(e,t,r){"use strict";var o=e("./_object-create"),n=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=o(s,{next:n(1,r)}),i(e,t+" Iterator")}},{"./_hide":47,"./_object-create":65,"./_property-desc":77,"./_set-to-string-tag":82,"./_wks":97}],57:[function(e,t,r){"use strict";var o=e("./_library"),n=e("./_export"),i=e("./_redefine"),s=e("./_hide"),c=e("./_has"),a=e("./_iterators"),u=e("./_iter-create"),l=e("./_set-to-string-tag"),f=e("./_object-gpo"),d=e("./_wks")("iterator"),_=!([].keys&&"next"in[].keys()),p="@@iterator",b="keys",y="values",h=function(){return this};t.exports=function(e,t,r,v,j,m,g){u(r,t,v);var w,O,k,x=function(e){if(!_&&e in R)return R[e];switch(e){case b:return function(){return new r(this,e)};case y:return function(){return new r(this,e)}}return function(){return new r(this,e)}},C=t+" Iterator",E=j==y,S=!1,R=e.prototype,T=R[d]||R[p]||j&&R[j],M=T||x(j),P=j?E?x("entries"):M:void 0,A="Array"==t?R.entries||T:T;if(A&&(k=f(A.call(new e)),k!==Object.prototype&&(l(k,C,!0),o||c(k,d)||s(k,d,h))),E&&T&&T.name!==y&&(S=!0,M=function(){return T.call(this)}),o&&!g||!_&&!S&&R[d]||s(R,d,M),a[t]=M,a[C]=h,j)if(w={values:E?M:x(y),keys:m?M:x(b),entries:P},g)for(O in w)O in R||i(R,O,w[O]);else n(n.P+n.F*(_||S),t,w);return w}},{"./_export":42,"./_has":46,"./_hide":47,"./_iter-create":56,"./_iterators":60,"./_library":62,"./_object-gpo":72,"./_redefine":79,"./_set-to-string-tag":82,"./_wks":97}],58:[function(e,t,r){var o=e("./_wks")("iterator"),n=!1;try{var i=[7][o]();i["return"]=function(){n=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!n)return!1;var r=!1;try{var i=[7],s=i[o]();s.next=function(){return{done:r=!0}},i[o]=function(){return s},e(i)}catch(c){}return r}},{"./_wks":97}],59:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],60:[function(e,t,r){t.exports={}},{}],61:[function(e,t,r){var o=e("./_object-keys"),n=e("./_to-iobject");t.exports=function(e,t){for(var r,i=n(e),s=o(i),c=s.length,a=0;c>a;)if(i[r=s[a++]]===t)return r}},{"./_object-keys":74,"./_to-iobject":90}],62:[function(e,t,r){t.exports=!0},{}],63:[function(e,t,r){var o=e("./_uid")("meta"),n=e("./_is-object"),i=e("./_has"),s=e("./_object-dp").f,c=0,a=Object.isExtensible||function(){return!0},u=!e("./_fails")(function(){return a(Object.preventExtensions({}))}),l=function(e){s(e,o,{value:{i:"O"+ ++c,w:{}}})},f=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,o)){if(!a(e))return"F";if(!t)return"E";l(e)}return e[o].i},d=function(e,t){if(!i(e,o)){if(!a(e))return!0;if(!t)return!1;l(e)}return e[o].w},_=function(e){return u&&p.NEED&&a(e)&&!i(e,o)&&l(e),e},p=t.exports={KEY:o,NEED:!1,fastKey:f,getWeak:d,onFreeze:_}},{"./_fails":43,"./_has":46,"./_is-object":54,"./_object-dp":66,"./_uid":94}],64:[function(e,t,r){var o=e("./_global"),n=e("./_task").set,i=o.MutationObserver||o.WebKitMutationObserver,s=o.process,c=o.Promise,a="process"==e("./_cof")(s);t.exports=function(){var e,t,r,u=function(){var o,n;for(a&&(o=s.domain)&&o.exit();e;){n=e.fn,e=e.next;try{n()}catch(i){throw e?r():t=void 0,i}}t=void 0,o&&o.enter()};if(a)r=function(){s.nextTick(u)};else if(i){var l=!0,f=document.createTextNode("");new i(u).observe(f,{characterData:!0}),r=function(){f.data=l=!l}}else if(c&&c.resolve){var d=c.resolve();r=function(){d.then(u)}}else r=function(){n.call(o,u)};return function(o){var n={fn:o,next:void 0};t&&(t.next=n),e||(e=n,r()),t=n}}},{"./_cof":34,"./_global":45,"./_task":87}],65:[function(e,t,r){var o=e("./_an-object"),n=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,r=e("./_dom-create")("iframe"),o=i.length,n="<",s=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write(n+"script"+s+"document.F=Object"+n+"/script"+s),t.close(),u=t.F;o--;)delete u[a][i[o]];return u()};t.exports=Object.create||function(e,t){var r;return null!==e?(c[a]=o(e),r=new c,c[a]=null,r[s]=e):r=u(),void 0===t?r:n(r,t)}},{"./_an-object":31,"./_dom-create":39,"./_enum-bug-keys":40,"./_html":48,"./_object-dps":67,"./_shared-key":83}],66:[function(e,t,r){var o=e("./_an-object"),n=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(o(e),t=i(t,!0),o(r),n)try{return s(e,t,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":31,"./_descriptors":38,"./_ie8-dom-define":49,"./_to-primitive":93}],67:[function(e,t,r){var o=e("./_object-dp"),n=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){n(e);for(var r,s=i(t),c=s.length,a=0;c>a;)o.f(e,r=s[a++],t[r]);return e}},{"./_an-object":31,"./_descriptors":38,"./_object-dp":66,"./_object-keys":74}],68:[function(e,t,r){var o=e("./_object-pie"),n=e("./_property-desc"),i=e("./_to-iobject"),s=e("./_to-primitive"),c=e("./_has"),a=e("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?u:function(e,t){if(e=i(e),t=s(t,!0),a)try{return u(e,t)}catch(r){}if(c(e,t))return n(!o.f.call(e,t),e[t])}},{"./_descriptors":38,"./_has":46,"./_ie8-dom-define":49,"./_object-pie":75,"./_property-desc":77,"./_to-iobject":90,"./_to-primitive":93}],69:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_object-gopn").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return n(e)}catch(t){return s.slice()}};t.exports.f=function(e){return s&&"[object Window]"==i.call(e)?c(e):n(o(e))}},{"./_object-gopn":70,"./_to-iobject":90}],70:[function(e,t,r){var o=e("./_object-keys-internal"),n=e("./_enum-bug-keys").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return o(e,n)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],71:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],72:[function(e,t,r){var o=e("./_has"),n=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=n(e),o(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":46,"./_shared-key":83,"./_to-object":92}],73:[function(e,t,r){var o=e("./_has"),n=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,c=n(e),a=0,u=[];for(r in c)r!=s&&o(c,r)&&u.push(r);for(;t.length>a;)o(c,r=t[a++])&&(~i(u,r)||u.push(r));return u}},{"./_array-includes":32,"./_has":46,"./_shared-key":83,"./_to-iobject":90}],74:[function(e,t,r){var o=e("./_object-keys-internal"),n=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return o(e,n)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],75:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],76:[function(e,t,r){var o=e("./_export"),n=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],s={};s[e]=t(r),o(o.S+o.F*i(function(){r(1)}),"Object",s)}},{"./_core":35,"./_export":42,"./_fails":43}],77:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],78:[function(e,t,r){var o=e("./_hide");t.exports=function(e,t,r){for(var n in t)r&&e[n]?e[n]=t[n]:o(e,n,t[n]);return e}},{"./_hide":47}],79:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":47}],80:[function(e,t,r){var o=e("./_is-object"),n=e("./_an-object"),i=function(e,t){if(n(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":31,"./_ctx":36,"./_is-object":54,"./_object-gopd":68}],81:[function(e,t,r){"use strict";var o=e("./_global"),n=e("./_core"),i=e("./_object-dp"),s=e("./_descriptors"),c=e("./_wks")("species");t.exports=function(e){var t="function"==typeof n[e]?n[e]:o[e];s&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},{"./_core":35,"./_descriptors":38,"./_global":45,"./_object-dp":66,"./_wks":97}],82:[function(e,t,r){var o=e("./_object-dp").f,n=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!n(e=r?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},{"./_has":46,"./_object-dp":66,"./_wks":97}],83:[function(e,t,r){var o=e("./_shared")("keys"),n=e("./_uid");t.exports=function(e){return o[e]||(o[e]=n(e))}},{"./_shared":84,"./_uid":94}],84:[function(e,t,r){var o=e("./_global"),n="__core-js_shared__",i=o[n]||(o[n]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":45}],85:[function(e,t,r){var o=e("./_an-object"),n=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,s=o(e).constructor;return void 0===s||void 0==(r=o(s)[i])?t:n(r)}},{"./_a-function":28,"./_an-object":31,"./_wks":97}],86:[function(e,t,r){var o=e("./_to-integer"),n=e("./_defined");t.exports=function(e){return function(t,r){var i,s,c=String(n(t)),a=o(r),u=c.length;return a<0||a>=u?e?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?e?c.charAt(a):i:e?c.slice(a,a+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":37,"./_to-integer":89}],87:[function(e,t,r){var o,n,i,s=e("./_ctx"),c=e("./_invoke"),a=e("./_html"),u=e("./_dom-create"),l=e("./_global"),f=l.process,d=l.setImmediate,_=l.clearImmediate,p=l.MessageChannel,b=0,y={},h="onreadystatechange",v=function(){var e=+this;if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},j=function(e){v.call(e.data)};d&&_||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return y[++b]=function(){c("function"==typeof e?e:Function(e),t)},o(b),b},_=function(e){delete y[e]},"process"==e("./_cof")(f)?o=function(e){f.nextTick(s(v,e,1))}:p?(n=new p,i=n.port2,n.port1.onmessage=j,o=s(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(o=function(e){l.postMessage(e+"","*")},l.addEventListener("message",j,!1)):o=h in u("script")?function(e){a.appendChild(u("script"))[h]=function(){a.removeChild(this),v.call(e)}}:function(e){setTimeout(s(v,e,1),0)}),t.exports={set:d,clear:_}},{"./_cof":34,"./_ctx":36,"./_dom-create":39,"./_global":45,"./_html":48,"./_invoke":50}],88:[function(e,t,r){var o=e("./_to-integer"),n=Math.max,i=Math.min;t.exports=function(e,t){return e=o(e),e<0?n(e+t,0):i(e,t)}},{"./_to-integer":89}],89:[function(e,t,r){var o=Math.ceil,n=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?n:o)(e)}},{}],90:[function(e,t,r){var o=e("./_iobject"),n=e("./_defined");t.exports=function(e){return o(n(e))}},{"./_defined":37,"./_iobject":51}],91:[function(e,t,r){var o=e("./_to-integer"),n=Math.min;t.exports=function(e){return e>0?n(o(e),9007199254740991):0}},{"./_to-integer":89}],92:[function(e,t,r){var o=e("./_defined");t.exports=function(e){return Object(o(e))}},{"./_defined":37}],93:[function(e,t,r){var o=e("./_is-object");t.exports=function(e,t){if(!o(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!o(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":54}],94:[function(e,t,r){var o=0,n=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++o+n).toString(36))}},{}],95:[function(e,t,r){var o=e("./_global"),n=e("./_core"),i=e("./_library"),s=e("./_wks-ext"),c=e("./_object-dp").f;t.exports=function(e){var t=n.Symbol||(n.Symbol=i?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:s.f(e)})}},{"./_core":35,"./_global":45,"./_library":62,"./_object-dp":66,"./_wks-ext":96}],96:[function(e,t,r){r.f=e("./_wks")},{"./_wks":97}],97:[function(e,t,r){var o=e("./_shared")("wks"),n=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i,c=t.exports=function(e){return o[e]||(o[e]=s&&i[e]||(s?i:n)("Symbol."+e))};c.store=o},{"./_global":45,"./_shared":84,"./_uid":94}],98:[function(e,t,r){var o=e("./_classof"),n=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){if(void 0!=e)return e[n]||e["@@iterator"]||i[o(e)]}},{"./_classof":33,"./_core":35,"./_iterators":60,"./_wks":97}],99:[function(e,t,r){"use strict";var o=e("./_add-to-unscopables"),n=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,n(1)):"keys"==t?n(0,r):"values"==t?n(0,e[r]):n(0,[r,e[r]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},{"./_add-to-unscopables":29,"./_iter-define":57,"./_iter-step":59,"./_iterators":60,"./_to-iobject":90}],100:[function(e,t,r){var o=e("./_export");o(o.S,"Object",{create:e("./_object-create")})},{"./_export":42,"./_object-create":65}],101:[function(e,t,r){var o=e("./_export");o(o.S+o.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":38,"./_export":42,"./_object-dp":66}],102:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_object-gopd").f;e("./_object-sap")("getOwnPropertyDescriptor",function(){return function(e,t){return n(o(e),t)}})},{"./_object-gopd":68,"./_object-sap":76,"./_to-iobject":90}],103:[function(e,t,r){var o=e("./_to-object"),n=e("./_object-gpo");e("./_object-sap")("getPrototypeOf",function(){return function(e){return n(o(e))}})},{"./_object-gpo":72,"./_object-sap":76,"./_to-object":92}],104:[function(e,t,r){var o=e("./_to-object"),n=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return n(o(e))}})},{"./_object-keys":74,"./_object-sap":76,"./_to-object":92}],105:[function(e,t,r){var o=e("./_export");o(o.S,"Object",{setPrototypeOf:e("./_set-proto").set})},{"./_export":42,"./_set-proto":80}],106:[function(e,t,r){},{}],107:[function(e,t,r){"use strict";var o,n,i,s=e("./_library"),c=e("./_global"),a=e("./_ctx"),u=e("./_classof"),l=e("./_export"),f=e("./_is-object"),d=e("./_a-function"),_=e("./_an-instance"),p=e("./_for-of"),b=e("./_species-constructor"),y=e("./_task").set,h=e("./_microtask")(),v="Promise",j=c.TypeError,m=c.process,g=c[v],m=c.process,w="process"==u(m),O=function(){},k=!!function(){try{var t=g.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(O,O)};return(w||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof r}catch(o){}}(),x=function(e,t){return e===t||e===g&&t===i},C=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},E=function(e){return x(g,e)?new S(e):new n(e)},S=n=function(e){var t,r;this.promise=new e(function(e,o){if(void 0!==t||void 0!==r)throw j("Bad Promise constructor");t=e,r=o}),this.resolve=d(t),this.reject=d(r)},R=function(e){try{e()}catch(t){return{error:t}}},T=function(e,t){if(!e._n){e._n=!0;var r=e._c;h(function(){for(var o=e._v,n=1==e._s,i=0,s=function(t){var r,i,s=n?t.ok:t.fail,c=t.resolve,a=t.reject,u=t.domain;try{s?(n||(2==e._h&&A(e),e._h=1),s===!0?r=o:(u&&u.enter(),r=s(o),u&&u.exit()),r===t.promise?a(j("Promise-chain cycle")):(i=C(r))?i.call(r,c,a):c(r)):a(o)}catch(l){a(l)}};r.length>i;)s(r[i++]);e._c=[],e._n=!1,t&&!e._h&&M(e)})}},M=function(e){y.call(c,function(){var t,r,o,n=e._v;if(P(e)&&(t=R(function(){w?m.emit("unhandledRejection",n,e):(r=c.onunhandledrejection)?r({promise:e,reason:n}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",n)}),e._h=w||P(e)?2:1),e._a=void 0,t)throw t.error})},P=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,o=0;r.length>o;)if(t=r[o++],t.fail||!P(t.promise))return!1;return!0},A=function(e){y.call(c,function(){var t;w?m.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},D=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),T(t,!0))},N=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw j("Promise can't be resolved itself");(t=C(e))?h(function(){var o={_w:r,_d:!1};try{t.call(e,a(N,o,1),a(D,o,1))}catch(n){D.call(o,n)}}):(r._v=e,r._s=1,T(r,!1))}catch(o){D.call({_w:r,_d:!1},o)}}};k||(g=function(e){_(this,g,v,"_h"),d(e),o.call(this);try{e(a(N,this,1),a(D,this,1))}catch(t){D.call(this,t)}},o=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=e("./_redefine-all")(g.prototype,{then:function(e,t){var r=E(b(this,g));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=w?m.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),S=function(){var e=new o;this.promise=e,this.resolve=a(N,e,1),this.reject=a(D,e,1)}),l(l.G+l.W+l.F*!k,{Promise:g}),e("./_set-to-string-tag")(g,v),e("./_set-species")(v),i=e("./_core")[v],l(l.S+l.F*!k,v,{reject:function(e){var t=E(this),r=t.reject;
return r(e),t.promise}}),l(l.S+l.F*(s||!k),v,{resolve:function(e){if(e instanceof g&&x(e.constructor,this))return e;var t=E(this),r=t.resolve;return r(e),t.promise}}),l(l.S+l.F*!(k&&e("./_iter-detect")(function(e){g.all(e)["catch"](O)})),v,{all:function(e){var t=this,r=E(t),o=r.resolve,n=r.reject,i=R(function(){var r=[],i=0,s=1;p(e,!1,function(e){var c=i++,a=!1;r.push(void 0),s++,t.resolve(e).then(function(e){a||(a=!0,r[c]=e,--s||o(r))},n)}),--s||o(r)});return i&&n(i.error),r.promise},race:function(e){var t=this,r=E(t),o=r.reject,n=R(function(){p(e,!1,function(e){t.resolve(e).then(r.resolve,o)})});return n&&o(n.error),r.promise}})},{"./_a-function":28,"./_an-instance":30,"./_classof":33,"./_core":35,"./_ctx":36,"./_export":42,"./_for-of":44,"./_global":45,"./_is-object":54,"./_iter-detect":58,"./_library":62,"./_microtask":64,"./_redefine-all":78,"./_set-species":81,"./_set-to-string-tag":82,"./_species-constructor":85,"./_task":87,"./_wks":97}],108:[function(e,t,r){"use strict";var o=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=o(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":57,"./_string-at":86}],109:[function(e,t,r){"use strict";var o=e("./_global"),n=e("./_has"),i=e("./_descriptors"),s=e("./_export"),c=e("./_redefine"),a=e("./_meta").KEY,u=e("./_fails"),l=e("./_shared"),f=e("./_set-to-string-tag"),d=e("./_uid"),_=e("./_wks"),p=e("./_wks-ext"),b=e("./_wks-define"),y=e("./_keyof"),h=e("./_enum-keys"),v=e("./_is-array"),j=e("./_an-object"),m=e("./_to-iobject"),g=e("./_to-primitive"),w=e("./_property-desc"),O=e("./_object-create"),k=e("./_object-gopn-ext"),x=e("./_object-gopd"),C=e("./_object-dp"),E=e("./_object-keys"),S=x.f,R=C.f,T=k.f,M=o.Symbol,P=o.JSON,A=P&&P.stringify,D="prototype",N=_("_hidden"),L=_("toPrimitive"),F={}.propertyIsEnumerable,I=l("symbol-registry"),U=l("symbols"),z=l("op-symbols"),H=Object[D],V="function"==typeof M,B=o.QObject,J=!B||!B[D]||!B[D].findChild,W=i&&u(function(){return 7!=O(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(e,t,r){var o=S(H,t);o&&delete H[t],R(e,t,r),o&&e!==H&&R(H,t,o)}:R,Y=function(e){var t=U[e]=O(M[D]);return t._k=e,t},q=V&&"symbol"==typeof M.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof M},K=function(e,t,r){return e===H&&K(z,t,r),j(e),t=g(t,!0),j(r),n(U,t)?(r.enumerable?(n(e,N)&&e[N][t]&&(e[N][t]=!1),r=O(r,{enumerable:w(0,!1)})):(n(e,N)||R(e,N,w(1,{})),e[N][t]=!0),W(e,t,r)):R(e,t,r)},G=function(e,t){j(e);for(var r,o=h(t=m(t)),n=0,i=o.length;i>n;)K(e,r=o[n++],t[r]);return e},Z=function(e,t){return void 0===t?O(e):G(O(e),t)},X=function(e){var t=F.call(this,e=g(e,!0));return!(this===H&&n(U,e)&&!n(z,e))&&(!(t||!n(this,e)||!n(U,e)||n(this,N)&&this[N][e])||t)},$=function(e,t){if(e=m(e),t=g(t,!0),e!==H||!n(U,t)||n(z,t)){var r=S(e,t);return!r||!n(U,t)||n(e,N)&&e[N][t]||(r.enumerable=!0),r}},Q=function(e){for(var t,r=T(m(e)),o=[],i=0;r.length>i;)n(U,t=r[i++])||t==N||t==a||o.push(t);return o},ee=function(e){for(var t,r=e===H,o=T(r?z:m(e)),i=[],s=0;o.length>s;)!n(U,t=o[s++])||r&&!n(H,t)||i.push(U[t]);return i};V||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===H&&t.call(z,r),n(this,N)&&n(this[N],e)&&(this[N][e]=!1),W(this,e,w(1,r))};return i&&J&&W(H,e,{configurable:!0,set:t}),Y(e)},c(M[D],"toString",function(){return this._k}),x.f=$,C.f=K,e("./_object-gopn").f=k.f=Q,e("./_object-pie").f=X,e("./_object-gops").f=ee,i&&!e("./_library")&&c(H,"propertyIsEnumerable",X,!0),p.f=function(e){return Y(_(e))}),s(s.G+s.W+s.F*!V,{Symbol:M});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)_(te[re++]);for(var te=E(_.store),re=0;te.length>re;)b(te[re++]);s(s.S+s.F*!V,"Symbol",{"for":function(e){return n(I,e+="")?I[e]:I[e]=M(e)},keyFor:function(e){if(q(e))return y(I,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){J=!0},useSimple:function(){J=!1}}),s(s.S+s.F*!V,"Object",{create:Z,defineProperty:K,defineProperties:G,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:ee}),P&&s(s.S+s.F*(!V||u(function(){var e=M();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!q(e)){for(var t,r,o=[e],n=1;arguments.length>n;)o.push(arguments[n++]);return t=o[1],"function"==typeof t&&(r=t),!r&&v(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!q(t))return t}),o[1]=t,A.apply(P,o)}}}),M[D][L]||e("./_hide")(M[D],L,M[D].valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},{"./_an-object":31,"./_descriptors":38,"./_enum-keys":41,"./_export":42,"./_fails":43,"./_global":45,"./_has":46,"./_hide":47,"./_is-array":53,"./_keyof":61,"./_library":62,"./_meta":63,"./_object-create":65,"./_object-dp":66,"./_object-gopd":68,"./_object-gopn":70,"./_object-gopn-ext":69,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_property-desc":77,"./_redefine":79,"./_set-to-string-tag":82,"./_shared":84,"./_to-iobject":90,"./_to-primitive":93,"./_uid":94,"./_wks":97,"./_wks-define":95,"./_wks-ext":96}],110:[function(e,t,r){e("./_wks-define")("asyncIterator")},{"./_wks-define":95}],111:[function(e,t,r){e("./_wks-define")("observable")},{"./_wks-define":95}],112:[function(e,t,r){e("./es6.array.iterator");for(var o=e("./_global"),n=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var u=c[a],l=o[u],f=l&&l.prototype;f&&!f[s]&&n(f,s,u),i[u]=i.Array}},{"./_global":45,"./_hide":47,"./_iterators":60,"./_wks":97,"./es6.array.iterator":99}],113:[function(e,t,r){Object.observe||function(e,t,r,o){"use strict";var n,i,s=["add","update","delete","reconfigure","setPrototype","preventExtensions"],c=t.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}(e.prototype.toString),a=t.prototype.indexOf?t.indexOf||function(e,r,o){return t.prototype.indexOf.call(e,r,o)}:function(e,t,r){for(var o=r||0;o<e.length;o++)if(e[o]===t)return o;return-1},u=r.Map!==o&&Map.prototype.forEach?function(){return new Map}:function(){var e=[],t=[];return{size:0,has:function(t){return a(e,t)>-1},get:function(r){return t[a(e,r)]},set:function(r,o){var n=a(e,r);n===-1?(e.push(r),t.push(o),this.size++):t[n]=o},"delete":function(r){var o=a(e,r);o>-1&&(e.splice(o,1),t.splice(o,1),this.size--)},forEach:function(r){for(var o=0;o<e.length;o++)r.call(arguments[1],t[o],e[o],this)}}},l=e.getOwnPropertyNames?function(){var t=e.getOwnPropertyNames;try{arguments.callee}catch(r){var o=(t(a).join(" ")+" ").replace(/prototype |length |name /g,"").slice(0,-1).split(" ");o.length&&(t=function(t){var r=e.getOwnPropertyNames(t);if("function"==typeof t)for(var n,i=0;i<o.length;)(n=a(r,o[i++]))>-1&&r.splice(n,1);return r})}return t}():function(t){var r,o,n=[];if("hasOwnProperty"in t)for(r in t)t.hasOwnProperty(r)&&n.push(r);else{o=e.hasOwnProperty;for(r in t)o.call(t,r)&&n.push(r)}return c(t)&&n.push("length"),n},f=e.getPrototypeOf,d=e.defineProperties&&e.getOwnPropertyDescriptor,_=r.requestAnimationFrame||r.webkitRequestAnimationFrame||function(){var e=+new Date,t=e;return function(r){return setTimeout(function(){r((t=+new Date)-e)},17)}}(),p=function(e,t,r){var o=n.get(e);o?(y(o,e),m(e,o,t,r)):(o=b(e),m(e,o,t,r),1===n.size&&_(h))},b=function(t,r){var o,i=l(t),s=[],c=0,r={handlers:u(),frozen:!!e.isFrozen&&e.isFrozen(t),extensible:!e.isExtensible||e.isExtensible(t),proto:f&&f(t),properties:i,values:s,notifier:j(t,r)};if(d)for(o=r.descriptors=[];c<i.length;)o[c]=d(t,i[c]),s[c]=t[i[c++]];else for(;c<i.length;)s[c]=t[i[c++]];return n.set(t,r),r},y=function(){var t=d?function(e,t,r,o,n){var i=t.properties[r],s=e[i],c=t.values[r],a=t.descriptors[r];"value"in n&&(c===s?0===c&&1/c!==1/s:c===c||s===s)&&(g(e,t,{name:i,type:"update",object:e,oldValue:c},o),t.values[r]=s),!a.configurable||n.configurable&&n.writable===a.writable&&n.enumerable===a.enumerable&&n.get===a.get&&n.set===a.set||(g(e,t,{name:i,type:"reconfigure",object:e,oldValue:c},o),t.descriptors[r]=n)}:function(e,t,r,o){var n=t.properties[r],i=e[n],s=t.values[r];(s===i?0===s&&1/s!==1/i:s===s||i===i)&&(g(e,t,{name:n,type:"update",object:e,oldValue:s},o),t.values[r]=i)},r=d?function(e,r,o,n,i){for(var s,c=r.length;o&&c--;)null!==r[c]&&(s=d(e,r[c]),o--,s?t(e,n,c,i,s):(g(e,n,{name:r[c],type:"delete",object:e,oldValue:n.values[c]},i),n.properties.splice(c,1),n.values.splice(c,1),n.descriptors.splice(c,1)))}:function(e,t,r,o,n){for(var i=t.length;r&&i--;)null!==t[i]&&(g(e,o,{name:t[i],type:"delete",object:e,oldValue:o.values[i]},n),o.properties.splice(i,1),o.values.splice(i,1),r--)};return function(o,n,i){if(o.handlers.size&&!o.frozen){var s,c,u,_,p,b,y,h,v=o.values,j=o.descriptors,m=0;if(o.extensible)if(s=o.properties.slice(),c=s.length,u=l(n),j){for(;m<u.length;)p=u[m++],_=a(s,p),h=d(n,p),_===-1?(g(n,o,{name:p,type:"add",object:n},i),o.properties.push(p),v.push(n[p]),j.push(h)):(s[_]=null,c--,t(n,o,_,i,h));r(n,s,c,o,i),e.isExtensible(n)||(o.extensible=!1,g(n,o,{type:"preventExtensions",object:n},i),o.frozen=e.isFrozen(n))}else{for(;m<u.length;)p=u[m++],_=a(s,p),b=n[p],_===-1?(g(n,o,{name:p,type:"add",object:n},i),o.properties.push(p),v.push(b)):(s[_]=null,c--,t(n,o,_,i));r(n,s,c,o,i)}else if(!o.frozen){for(;m<s.length;m++)p=s[m],t(n,o,m,i,d(n,p));e.isFrozen(n)&&(o.frozen=!0)}f&&(y=f(n),y!==o.proto&&(g(n,o,{type:"setPrototype",name:"__proto__",object:n,oldValue:o.proto}),o.proto=y))}}}(),h=function(){n.size&&(n.forEach(y),i.forEach(v),_(h))},v=function(e,t){var r=e.changeRecords;r.length&&(e.changeRecords=[],t(r))},j=function(e,t){return arguments.length<2&&(t=n.get(e)),t&&t.notifier||{notify:function(t){t.type;var r=n.get(e);if(r){var o,i={object:e};for(o in t)"object"!==o&&(i[o]=t[o]);g(e,r,i)}},performChange:function(t,r){if("string"!=typeof t)throw new TypeError("Invalid non-string changeType");if("function"!=typeof r)throw new TypeError("Cannot perform non-function");var i,s,c=n.get(e),a=arguments[2],u=a===o?r():r.call(a);if(c&&y(c,e,t),c&&u&&"object"==typeof u){s={object:e,type:t};for(i in u)"object"!==i&&"type"!==i&&(s[i]=u[i]);g(e,c,s)}}}},m=function(e,t,r,o){var n=i.get(r);n||i.set(r,n={observed:u(),changeRecords:[]}),n.observed.set(e,{acceptList:o.slice(),data:t}),t.handlers.set(r,n)},g=function(e,t,r,o){t.handlers.forEach(function(t){var n=t.observed.get(e).acceptList;("string"!=typeof o||a(n,o)===-1)&&a(n,r.type)>-1&&t.changeRecords.push(r)})};n=u(),i=u(),e.observe=function(t,r,n){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.observe cannot observe non-object");if("function"!=typeof r)throw new TypeError("Object.observe cannot deliver to non-function");if(e.isFrozen&&e.isFrozen(r))throw new TypeError("Object.observe cannot deliver to a frozen function object");if(n===o)n=s;else if(!n||"object"!=typeof n)throw new TypeError("Third argument to Object.observe must be an array of strings.");return p(t,r,n),t},e.unobserve=function(e,t){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object.unobserve cannot unobserve non-object");if("function"!=typeof t)throw new TypeError("Object.unobserve cannot deliver to non-function");var r,o=i.get(t);return o&&(r=o.observed.get(e))&&(o.observed.forEach(function(e,t){y(e.data,t)}),_(function(){v(o,t)}),1===o.observed.size&&o.observed.has(e)?i["delete"](t):o.observed["delete"](e),1===r.data.handlers.size?n["delete"](e):r.data.handlers["delete"](t)),e},e.getNotifier=function(t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.getNotifier cannot getNotifier non-object");return e.isFrozen&&e.isFrozen(t)?null:j(t)},e.deliverChangeRecords=function(e){if("function"!=typeof e)throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");var t=i.get(e);t&&(t.observed.forEach(function(e,t){y(e.data,t)}),v(t,e))}}(Object,Array,this)},{}],114:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.DataObjectObserver=r.DataObjectReporter=r.Syncher=void 0,e("object.observe"),e("array.observe");var n=e("./syncher/Syncher"),i=o(n),s=e("./syncher/DataObjectReporter"),c=o(s),a=e("./syncher/DataObjectObserver"),u=o(a);r.Syncher=i["default"],r.DataObjectReporter=c["default"],r.DataObjectObserver=u["default"]},{"./syncher/DataObjectObserver":117,"./syncher/DataObjectReporter":118,"./syncher/Syncher":121,"array.observe":1,"object.observe":113}],115:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/core-js/promise"),i=o(n),s=e("babel-runtime/core-js/object/keys"),c=o(s),a=e("babel-runtime/helpers/classCallCheck"),u=o(a),l=e("babel-runtime/helpers/createClass"),f=o(l),d=e("./SyncObject"),_=o(d),p=e("./DataObjectChild"),b=o(p),y=e("../utils/utils.js"),h=function(){function e(t,r,o,n,i,s){(0,u["default"])(this,e);var c=this;c._syncher=t,c._url=r,c._schema=o,c._status=n,c._syncObj=new _["default"](i),c._childrens=s,c._version=0,c._childId=0,c._childrenObjects={},c._childrenListeners=[],c._owner=t._owner,c._bus=t._bus}return(0,f["default"])(e,[{key:"_allocateListeners",value:function(){var e=this,t=this,r=t._url+"/children/";t._childrens&&t._childrens.forEach(function(o){var n=r+o,i=t._bus.addListener(n,function(r){if(r.from!==e._owner)switch(console.log("DataObject-Children-RCV: ",r),r.type){case"create":t._onChildCreate(r);break;case"delete":console.log(r);break;default:t._changeChildren(r)}});t._childrenListeners.push(i)})}},{key:"_releaseListeners",value:function(){var e=this;e._childrenListeners.forEach(function(e){e.remove()}),(0,c["default"])(e._childrenObjects).forEach(function(t){e._childrenObjects[t]._releaseListeners()})}},{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"addChild",value:function(e,t){var r=this;r._childId++;var o=r._owner+"#"+r._childId,n=r._url+"/children/"+e,s={type:"create",from:r._owner,to:n,body:{resource:o,value:t}};return new i["default"](function(e){var i=r._bus.postMessage(s);console.log("create-reporter-child( "+r._owner+" ): ",s);var c=new b["default"](r,o,t,r._owner,i);c.onChange(function(e){r._onChange(e,{path:n,childId:o})}),r._childrenObjects[o]=c,e(c)})}},{key:"onAddChild",value:function(e){this._onAddChildrenHandler=e}},{key:"_onChildCreate",value:function(e){var t=this,r=e.body.resource;console.log("create-observer-child( "+t._owner+" ): ",e);var o=new b["default"](t,r,e.body.value);t._childrenObjects[r]=o,setTimeout(function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,source:t._owner}})});var n={type:e.type,from:e.from,url:e.to,value:e.body.value,childId:r,identity:e.body.identity};t._onAddChildrenHandler&&(console.log("ADD-CHILDREN-EVENT: ",n),t._onAddChildrenHandler(n))}},{key:"_onChange",value:function(e,t){var r=this;if(r._version++,"on"===r._status){var o={type:"update",from:r._url,to:r._url+"/changes",body:{version:r._version,source:r._owner,attribute:e.field}};e.oType===d.ObjectType.OBJECT?e.cType!==d.ChangeType.REMOVE&&(o.body.value=e.data):(o.body.attributeType=e.oType,o.body.value=e.data,e.cType!==d.ChangeType.UPDATE&&(o.body.operation=e.cType)),t&&(o.to=t.path,o.body.resource=t.childId),r._bus.postMessage(o)}}},{key:"_changeObject",value:function(e,t){var r=this;if(r._version+1===t.body.version){r._version++;var o=t.body.attribute,n=(0,y.deepClone)(t.body.value),i=e.findBefore(o);if(t.body.attributeType===d.ObjectType.ARRAY)if(t.body.operation===d.ChangeType.ADD){var s=i.obj,c=i.last;Array.prototype.splice.apply(s,[c,0].concat(n))}else if(t.body.operation===d.ChangeType.REMOVE){var a=i.obj,u=i.last;a.splice(u,n)}else i.obj[i.last]=n;else t.body.value?i.obj[i.last]=n:delete i.obj[i.last]}else console.log("UNSYNCHRONIZED VERSION: (data => "+r._version+", msg => "+t.body.version+")")}},{key:"_changeChildren",value:function(e){var t=this;console.log("Change children: ",t._owner,e);var r=e.body.resource,o=t._childrenObjects[r];o?t._changeObject(o._syncObj,e):console.log("No children found for: ",r)}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"childrens",get:function(){return this._childrenObjects}}]),e}();r["default"]=h,t.exports=r["default"]},{"../utils/utils.js":122,"./DataObjectChild":116,"./SyncObject":120,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],116:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/helpers/classCallCheck"),i=o(n),s=e("babel-runtime/helpers/createClass"),c=o(s),a=e("./SyncObject"),u=o(a),l=function(){function e(t,r,o,n,s){(0,i["default"])(this,e);var c=this;c._parent=t,c._childId=r,c._owner=n,c._msgId=s,c._syncObj=new u["default"](o),c._bus=t._bus,c._allocateListeners()}return(0,c["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._owner&&(e._listener=e._bus.addListener(e._owner,function(t){"response"===t.type&&t.id===e._msgId&&(console.log("DataObjectChild.onResponse:",t),e._onResponse(t))}))}},{key:"_releaseListeners",value:function(){var e=this;e._listener&&e._listener.remove()}},{key:"delete",value:function(){var e=this;delete e._parent._children[e._childId],e._releaseListeners()}},{key:"onChange",value:function(e){this._syncObj.observe(function(t){e(t)})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.body.source,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(r)}},{key:"childId",get:function(){return this._childId}},{key:"data",get:function(){return this._syncObj.data}}]),e}();r["default"]=l,t.exports=r["default"]},{"./SyncObject":120,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],117:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/core-js/object/keys"),i=o(n),s=e("babel-runtime/core-js/object/get-prototype-of"),c=o(s),a=e("babel-runtime/helpers/classCallCheck"),u=o(a),l=e("babel-runtime/helpers/createClass"),f=o(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),_=o(d),p=e("babel-runtime/helpers/get"),b=o(p),y=e("babel-runtime/helpers/inherits"),h=o(y),v=e("./DataObject"),j=o(v),m=e("./DataObjectChild"),g=o(m),w={ANY:"any",START:"start",EXACT:"exact"},O=function(e){function t(e,r,o,n,s,a,l){(0,u["default"])(this,t);var f=(0,_["default"])(this,(t.__proto__||(0,c["default"])(t)).call(this,e,r,o,n,s.data,a)),d=f;return d._version=l,d._filters={},d._syncObj.observe(function(e){d._onFilter(e)}),(0,i["default"])(s.childrens).forEach(function(e){var t=s.childrens[e];d._childrenObjects[e]=new g["default"](d,e,t)}),d._allocateListeners(),f}return(0,h["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,b["default"])(t.prototype.__proto__||(0,c["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._changeListener=e._bus.addListener(e._url+"/changes",function(t){"update"===t.type&&(console.log("DataObjectObserver-"+e._url+"-RCV: ",t),e._changeObject(e._syncObj,t))})}},{key:"_releaseListeners",value:function(){(0,b["default"])(t.prototype.__proto__||(0,c["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._changeListener.remove()}},{key:"delete",value:function(){var e=this;e._releaseListeners(),delete e._syncher._observers[e._url]}},{key:"unsubscribe",value:function(){var e=this,t={type:"unsubscribe",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectObserver-UNSUBSCRIBE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._observers[e._url])})}},{key:"onChange",value:function(e,t){var r=e,o={type:w.EXACT,callback:t},n=e.indexOf("*");n===e.length-1&&(0===n?o.type=w.ANY:(o.type=w.START,r=e.substr(0,e.length-1))),this._filters[r]=o}},{key:"_onFilter",value:function(e){var t=this;(0,i["default"])(t._filters).forEach(function(r){var o=t._filters[r];o.type===w.ANY?o.callback(e):o.type===w.START?0===e.field.indexOf(r)&&o.callback(e):o.type===w.EXACT&&e.field===r&&o.callback(e)})}}]),t}(j["default"]);r["default"]=O,t.exports=r["default"]},{"./DataObject":115,"./DataObjectChild":116,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],118:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/core-js/object/keys"),i=o(n),s=e("babel-runtime/core-js/object/get-prototype-of"),c=o(s),a=e("babel-runtime/helpers/classCallCheck"),u=o(a),l=e("babel-runtime/helpers/createClass"),f=o(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),_=o(d),p=e("babel-runtime/helpers/get"),b=o(p),y=e("babel-runtime/helpers/inherits"),h=o(y),v=e("./DataObject"),j=o(v),m=e("../utils/utils.js"),g=function(e){function t(e,r,o,n,i,s){(0,u["default"])(this,t);var a=(0,_["default"])(this,(t.__proto__||(0,c["default"])(t)).call(this,e,r,o,n,i,s)),l=a;return l._subscriptions={},l._syncObj.observe(function(e){console.log("DataObjectReporter-"+r+"-SEND: ",e),l._onChange(e)}),l._allocateListeners(),a}return(0,h["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,b["default"])(t.prototype.__proto__||(0,c["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._objectListener=e._bus.addListener(e._url,function(t){switch(console.log("DataObject-"+e._url+"-RCV: ",t),t.type){case"response":e._onResponse(t);break;case"read":e._onRead(t)}})}},{key:"_releaseListeners",value:function(){(0,b["default"])(t.prototype.__proto__||(0,c["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._objectListener.remove()}},{key:"inviteObservers",value:function(e){var t=this,r={type:"create",from:t._syncher._owner,to:t._syncher._subURL,body:{resource:t._url,schema:t._schema,value:t._syncObj.data,authorise:e}};t._bus.postMessage(r)}},{key:"delete",value:function(){var e=this,t={type:"delete",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectReporter-DELETE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._reporters[e._url])})}},{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"onRead",value:function(e){this._onReadHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,r=e.body.from,o={type:e.body.type,url:r,identity:e.body.identity,accept:function(){var o={url:r,status:"on"};t._subscriptions[r]=o;var n={};return(0,i["default"])(t._childrenObjects).forEach(function(e){var r=t._childrenObjects[e].data;n[e]=(0,m.deepClone)(r)}),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:{data:(0,m.deepClone)(t.data),childrens:n}}}),o},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:r}})}};t._onSubscriptionHandler&&(console.log("SUBSCRIPTION-EVENT: ",o),t._onSubscriptionHandler(o))}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.body.from,o=t._subscriptions[r];delete t._subscriptions[r];var n={type:e.body.type,url:r,object:o};t._onSubscriptionHandler&&(console.log("UN-SUBSCRIPTION-EVENT: ",n),t._onSubscriptionHandler(n))}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.from,code:e.body.code};t._onResponseHandler&&(console.log("RESPONSE-EVENT: ",r),t._onResponseHandler(r))}},{key:"_onRead",value:function(e){var t=this,r={type:e.type,url:e.from,accept:function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,value:(0,m.deepClone)(t.data)}})},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:401,desc:r}})}};t._onReadHandler&&(console.log("READ-EVENT: ",r),t._onReadHandler(r))}},{key:"subscriptions",get:function(){return this._subscriptions}}]),t}(j["default"]);r["default"]=g,t.exports=r["default"]},{"../utils/utils.js":122,"./DataObject":115,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],119:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/helpers/classCallCheck"),i=o(n),s=e("babel-runtime/helpers/createClass"),c=o(s),a=function(){function e(t,r,o,n){(0,i["default"])(this,e);var s=this;s._owner=t,s._url=r,s._bus=o,s._children=n,s._changes=[],s._allocateListeners()}return(0,c["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._listener=e._bus.addListener(e._url,function(t){console.log("DataProvisional-"+e._url+"-RCV: ",t),e._changes.push(t)})}},{key:"_releaseListeners",value:function(){var e=this;e._listener.remove()}},{key:"apply",value:function(e){var t=this;t._changes.forEach(function(t){e._changeObject(e._syncObj,t)})}},{key:"children",get:function(){return this._children}}]),e}();r["default"]=a,t.exports=r["default"]},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],120:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.ObjectType=r.ChangeType=void 0;var n=e("babel-runtime/core-js/object/keys"),i=o(n),s=e("babel-runtime/helpers/classCallCheck"),c=o(s),a=e("babel-runtime/helpers/createClass"),u=o(a),l=e("../utils/utils.js"),f=function(){function e(t){(0,c["default"])(this,e);var r=this;r._observers=[],r._filters={},t?r._data=(0,l.deepClone)(t):r._data={},r._internalObserve(new d,r._data)}return(0,u["default"])(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},r=e.split(".");return t.last=r.pop(),t.obj=this._findWithSplit(r),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array}},{key:"_internalObserve",value:function(e,t){var r=this;if(r._isObservable(t)){var o=function(t){r._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,o);for(var n in t)r._isObservable(t[n])&&r._internalObserve(e["new"](n),t[n])}else if(t.constructor===Array){Array.observe(t,o);for(var i in t)if(r._isObservable(t[i])){var s=e["new"](new _(t[i],i));r._internalObserve(s,t[i])}}}}},{key:"_onChanges",value:function(e,t){var r=this;for(var o in t){var n=t[o].object,i=void 0;if(n.constructor===Object&&(i=b.OBJECT),n.constructor===Array&&(i=b.ARRAY),"splice"===t[o].type)!function(){var s=t[o].index,c=e["new"](""+s),a=c.toString(),u=t[o].removed.length;if(0!==u){var f=t[o].removed;f.forEach(function(t,o){r._isObservable(t)&&e.removeIndex(s+o)}),r._fireEvent({cType:p.REMOVE,oType:i,field:a,data:u})}var d=t[o].addedCount;if(0!==d){var b=n.slice(s,s+d);b.forEach(function(t,o){if(r._isObservable(t)){var n=e["new"](new _(t,s+o));r._internalObserve(n,t)}}),r._fireEvent({cType:p.ADD,oType:i,field:a,data:(0,l.deepClone)(b)})}s!==n.length-1&&e.reIndexFrom(n)}();else{var s=e["new"](t[o].name),c=s.toString();if(c.indexOf("Symbol")!==-1)continue;var a=n[t[o].name];"update"===t[o].type&&this._fireEvent({cType:p.UPDATE,oType:i,field:c,data:(0,l.deepClone)(a)}),"add"===t[o].type&&(this._internalObserve(s,a),this._fireEvent({cType:p.ADD,oType:i,field:c,data:(0,l.deepClone)(a)})),"delete"===t[o].type&&this._fireEvent({cType:p.REMOVE,oType:i,field:c})}}}},{key:"data",get:function(){return this._data}}]),e}(),d=function(){function e(){(0,c["default"])(this,e),this._path=[],this._observables={}}return(0,u["default"])(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;(0,i["default"])(this._observables).forEach(function(r){var o=t._observables[r],n=e.indexOf(o.obj);o.idx!=n&&(o.idx=n,delete t._observables[r],t._observables[n]=o)})}},{key:"new",value:function(e){e.constructor==_&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,r){0===r?e=t.toString():e+="."+t.toString()}),e}}]),e}(),_=function(){function e(t,r){(0,c["default"])(this,e),this.obj=t,this.idx=r}return(0,u["default"])(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),p=r.ChangeType={UPDATE:"update",ADD:"add",REMOVE:"remove"},b=r.ObjectType={OBJECT:"object",ARRAY:"array"};r["default"]=f},{"../utils/utils.js":122,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],121:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/core-js/promise"),i=o(n),s=e("babel-runtime/helpers/classCallCheck"),c=o(s),a=e("babel-runtime/helpers/createClass"),u=o(a),l=e("./DataObjectReporter"),f=o(l),d=e("./DataObjectObserver"),_=o(d),p=e("./DataProvisional"),b=o(p),y=function(){function e(t,r,o){(0,c["default"])(this,e);var n=this;n._owner=t,n._bus=r,n._subURL=o.runtimeURL+"/sm",n._reporters={},n._observers={},n._provisionals={},r.addListener(t,function(e){if(e.from!==t)switch(console.log("Syncher-RCV: ",e),e.type){case"forward":n._onForward(e);break;case"create":n._onRemoteCreate(e);break;case"delete":n._onRemoteDelete(e)}})}return(0,u["default"])(e,[{key:"create",value:function(e,t,r){var o=this;r.reporter=o._owner,r.schema=e;var n={type:"create",from:o._owner,to:o._subURL,body:{schema:e,value:r,authorise:t}};return new i["default"](function(t,i){o._bus.postMessage(n,function(n){if(console.log("create-response: ",n),200===n.body.code){var s=n.body.resource,c=new f["default"](o,s,e,"on",r,n.body.childrenResources);o._reporters[s]=c,t(c)}else i(n.body.desc)})})}},{key:"subscribe",value:function(e,t){var r=this,o={type:"subscribe",from:r._owner,to:r._subURL,body:{schema:e,resource:t}};return new i["default"](function(n,i){r._bus.postMessage(o,function(o){console.log("subscribe-response: ",o);var s=r._provisionals[t];if(delete r._provisionals[t],s&&s._releaseListeners(),o.body.code<200)s=new b["default"](r._owner,t,r._bus,o.body.childrenResources),r._provisionals[t]=s;else if(200===o.body.code){var c=new _["default"](r,t,e,"on",o.body.value,s.children,o.body.version);r._observers[t]=c,n(c),s.apply(c)}else i(o.body.desc)})})}},{key:"read",value:function(e){var t=this,r={
type:"read",from:t._owner,to:e};return new i["default"](function(e,o){t._bus.postMessage(r,function(t){console.log("read-response: ",t),200===t.body.code?e(t.body.value):o(t.body.desc)})})}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onForward",value:function(e){var t=this,r=t._reporters[e.body.to];r._onForward(e)}},{key:"_onRemoteCreate",value:function(e){var t=this,r=e.from.slice(0,-13),o={type:e.type,from:e.body.source,url:r,schema:e.body.schema,value:e.body.value,identity:e.body.identity,ack:function(r){var o=200;r&&(o=r),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:o}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",o),t._onNotificationHandler(o))}},{key:"_onRemoteDelete",value:function(e){var t=this,r=e.body.resource,o=t._observers[r];if(o){var n={type:e.type,url:r,identity:e.body.identity,ack:function(r){var n=200;r&&(n=r),200===n&&o["delete"](),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n,source:t._owner}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",n),t._onNotificationHandler(n))}else t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,source:t._owner}})}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();r["default"]=y,t.exports=r["default"]},{"./DataObjectObserver":117,"./DataObjectReporter":118,"./DataProvisional":119,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],122:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e){if(!e)throw Error("URL is needed to split");var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",o=e.replace(t,r).split(",");o[0]===e&&(o[0]="https",o[1]=e);var n={type:o[0],domain:o[1],identity:o[2]};return n}function i(e){var t=e.indexOf("@"),r={username:e.substring(0,t),domain:e.substring(t+1,e.length)};return r}function s(e){return!((0,p["default"])(e).length>0)}function c(e){if(e)return JSON.parse((0,d["default"])(e))}function a(e){var t=e.indexOf("@");return"user://"+e.substring(t+1,e.length)+"/"+e.substring(0,t)}function u(e){var t=n(e);return t.identity.replace("/","")+"@"+t.domain}function l(e){if("user://"===e.substring(0,7)){var t=n(e);if(t.domain&&t.identity)return e;throw"userURL with wrong format"}return a(e)}Object.defineProperty(r,"__esModule",{value:!0});var f=e("babel-runtime/core-js/json/stringify"),d=o(f),_=e("babel-runtime/core-js/object/keys"),p=o(_);r.divideURL=n,r.divideEmail=i,r.emptyObject=s,r.deepClone=c,r.getUserURLFromEmail=a,r.getUserEmailFromURL=u,r.convertToUserURL=l},{"babel-runtime/core-js/json/stringify":2,"babel-runtime/core-js/object/keys":7}]},{},[114])(114)});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */

'use strict';

// Shimming starts here.
(function() {
  // Utils.
  var utils = require('./utils');
  var logging = utils.log;
  var browserDetails = utils.browserDetails;
  // Export to the adapter global object visible in the browser.
  module.exports.browserDetails = browserDetails;
  module.exports.extractVersion = utils.extractVersion;
  module.exports.disableLog = utils.disableLog;

  // Uncomment the line below if you want logging to occur, including logging
  // for the switch statement below. Can also be turned on in the browser via
  // adapter.disableLog(false), but then logging from the switch statement below
  // will not appear.
  // require('./utils').disableLog(false);

  // Browser shims.
  var chromeShim = require('./chrome/chrome_shim') || null;
  var edgeShim = require('./edge/edge_shim') || null;
  var firefoxShim = require('./firefox/firefox_shim') || null;
  var safariShim = require('./safari/safari_shim') || null;

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'opera': // fallthrough as it uses chrome shims
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection) {
        logging('Chrome shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = chromeShim;

      chromeShim.shimGetUserMedia();
      chromeShim.shimMediaStream();
      chromeShim.shimSourceObject();
      utils.shimCreateObjectURL();
      chromeShim.shimPeerConnection();
      chromeShim.shimOnTrack();
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection) {
        logging('Firefox shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = firefoxShim;

      firefoxShim.shimGetUserMedia();
      utils.shimCreateObjectURL();
      firefoxShim.shimSourceObject();
      firefoxShim.shimPeerConnection();
      firefoxShim.shimOnTrack();
      break;
    case 'edge':
      if (!edgeShim || !edgeShim.shimPeerConnection) {
        logging('MS edge shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming edge.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = edgeShim;

      edgeShim.shimGetUserMedia();
      utils.shimCreateObjectURL();
      edgeShim.shimPeerConnection();
      break;
    case 'safari':
      if (!safariShim) {
        logging('Safari shim is not included in this adapter release.');
        return;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      module.exports.browserShim = safariShim;

      safariShim.shimGetUserMedia();
      break;
    default:
      logging('Unsupported browser!');
  }
})();

},{"./chrome/chrome_shim":4,"./edge/edge_shim":6,"./firefox/firefox_shim":8,"./safari/safari_shim":10,"./utils":11}],4:[function(require,module,exports){

/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';
var logging = require('../utils.js').log;
var browserDetails = require('../utils.js').browserDetails;

var chromeShim = {
  shimMediaStream: function() {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  },

  shimOnTrack: function() {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          var self = this;
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function(e) {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', function(te) {
              var event = new Event('track');
              event.track = te.track;
              event.receiver = {track: te.track};
              event.streams = [e.stream];
              self.dispatchEvent(event);
            });
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
  },

  shimSourceObject: function() {
    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this._srcObject;
          },
          set: function(stream) {
            var self = this;
            // Use _srcObject as a private property for this shim
            this._srcObject = stream;
            if (this.src) {
              URL.revokeObjectURL(this.src);
            }

            if (!stream) {
              this.src = '';
              return;
            }
            this.src = URL.createObjectURL(stream);
            // We need to recreate the blob url when a track is added or
            // removed. Doing it manually since we want to avoid a recursion.
            stream.addEventListener('addtrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
            stream.addEventListener('removetrack', function() {
              if (self.src) {
                URL.revokeObjectURL(self.src);
              }
              self.src = URL.createObjectURL(stream);
            });
          }
        });
      }
    }
  },

  shimPeerConnection: function() {
    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        // Translate iceTransportPolicy to iceTransports,
        // see https://code.google.com/p/webrtc/issues/detail?id=4869
        // this was fixed in M56 along with unprefixing RTCPeerConnection.
        logging('PeerConnection');
        if (pcConfig && pcConfig.iceTransportPolicy) {
          pcConfig.iceTransports = pcConfig.iceTransportPolicy;
        }

        return new webkitRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = webkitRTCPeerConnection.prototype;
      // wrap static methods. Currently just generateCertificate.
      if (webkitRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return webkitRTCPeerConnection.generateCertificate;
          }
        });
      }
    }

    var origGetStats = RTCPeerConnection.prototype.getStats;
    RTCPeerConnection.prototype.getStats = function(selector,
        successCallback, errorCallback) {
      var self = this;
      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats.apply(this, arguments);
      }

      // When spec-style getStats is supported, return those.
      if (origGetStats.length === 0) {
        return origGetStats.apply(this, arguments);
      }

      var fixChromeStats_ = function(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function(report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: {
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            }[report.type] || report.type
          };
          report.names().forEach(function(name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      // shim getStats with maplike support
      var makeMapStats = function(stats) {
        return new Map(Object.keys(stats).map(function(key) {
          return[key, stats[key]];
        }));
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper_ = function(response) {
          args[1](makeMapStats(fixChromeStats_(response)));
        };

        return origGetStats.apply(this, [successCallbackWrapper_,
            arguments[0]]);
      }

      // promise-support
      return new Promise(function(resolve, reject) {
        origGetStats.apply(self, [
          function(response) {
            resolve(makeMapStats(fixChromeStats_(response)));
          }, reject]);
      }).then(successCallback, errorCallback);
    };

    // add promise support -- natively available in Chrome 51
    if (browserDetails.version < 51) {
      ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
          .forEach(function(method) {
            var nativeMethod = RTCPeerConnection.prototype[method];
            RTCPeerConnection.prototype[method] = function() {
              var args = arguments;
              var self = this;
              var promise = new Promise(function(resolve, reject) {
                nativeMethod.apply(self, [args[0], resolve, reject]);
              });
              if (args.length < 2) {
                return promise;
              }
              return promise.then(function() {
                args[1].apply(null, []);
              },
              function(err) {
                if (args.length >= 3) {
                  args[2].apply(null, [err]);
                }
              });
            };
          });
    }

    // promise support for createOffer and createAnswer. Available (without
    // bugs) since M52: crbug/619289
    if (browserDetails.version < 52) {
      ['createOffer', 'createAnswer'].forEach(function(method) {
        var nativeMethod = RTCPeerConnection.prototype[method];
        RTCPeerConnection.prototype[method] = function() {
          var self = this;
          if (arguments.length < 1 || (arguments.length === 1 &&
              typeof arguments[0] === 'object')) {
            var opts = arguments.length === 1 ? arguments[0] : undefined;
            return new Promise(function(resolve, reject) {
              nativeMethod.apply(self, [resolve, reject, opts]);
            });
          }
          return nativeMethod.apply(this, arguments);
        };
      });
    }

    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                RTCIceCandidate : RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        RTCPeerConnection.prototype.addIceCandidate;
    RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }
};


// Expose public methods.
module.exports = {
  shimMediaStream: chromeShim.shimMediaStream,
  shimOnTrack: chromeShim.shimOnTrack,
  shimSourceObject: chromeShim.shimSourceObject,
  shimPeerConnection: chromeShim.shimPeerConnection,
  shimGetUserMedia: require('./getusermedia')
};

},{"../utils.js":11,"./getusermedia":5}],5:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';
var logging = require('../utils.js').log;

// Expose public methods.
module.exports = function() {
  var constraintsToChrome_ = function(c) {
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
      var oldname_ = function(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return (name === 'deviceId') ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function(mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function(constraints, func) {
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && constraints.audio) {
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && typeof constraints.video === 'object') {
      // Shim facingMode for mobile, where it defaults to "user".
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'object') ? face : {ideal: face});

      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
                    face.ideal === 'user' || face.ideal === 'environment')) &&
          !(navigator.mediaDevices.getSupportedConstraints &&
            navigator.mediaDevices.getSupportedConstraints().facingMode)) {
        delete constraints.video.facingMode;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          // Look for "back" in label, or use last cam (typically back cam).
          return navigator.mediaDevices.enumerateDevices()
          .then(function(devices) {
            devices = devices.filter(function(d) {
              return d.kind === 'videoinput';
            });
            var back = devices.find(function(d) {
              return d.label.toLowerCase().indexOf('back') !== -1;
            }) || (devices.length && devices[devices.length - 1]);
            if (back) {
              constraints.video.deviceId = face.exact ? {exact: back.deviceId} :
                                                        {ideal: back.deviceId};
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function(e) {
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        ConstraintNotSatisfiedError: 'OverconstrainedError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraintName,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function(c) {
      navigator.webkitGetUserMedia(c, onSuccess, function(e) {
        onError(shimError_(e));
      });
    });
  };

  navigator.getUserMedia = getUserMedia_;

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      navigator.getUserMedia(constraints, resolve, reject);
    });
  };

  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {
      getUserMedia: getUserMediaPromise_,
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
      }
    };
  }

  // A shim for getUserMedia method on the mediaDevices object.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      return getUserMediaPromise_(constraints);
    };
  } else {
    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(cs) {
      return shimConstraints_(cs, function(c) {
        return origGetUserMedia(c).then(function(stream) {
          if (c.audio && !stream.getAudioTracks().length ||
              c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function(track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function(e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }

  // Dummy devicechange event methods.
  // TODO(KaptenJansson) remove once implemented in Chrome stable.
  if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
    navigator.mediaDevices.addEventListener = function() {
      logging('Dummy mediaDevices.addEventListener called.');
    };
  }
  if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
    navigator.mediaDevices.removeEventListener = function() {
      logging('Dummy mediaDevices.removeEventListener called.');
    };
  }
};

},{"../utils.js":11}],6:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var SDPUtils = require('sdp');
var browserDetails = require('../utils').browserDetails;

var edgeShim = {
  shimPeerConnection: function() {
    if (window.RTCIceGatherer) {
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
      // this adds an additional event listener to MediaStrackTrack that signals
      // when a tracks enabled property was changed.
      var origMSTEnabled = Object.getOwnPropertyDescriptor(
          MediaStreamTrack.prototype, 'enabled');
      Object.defineProperty(MediaStreamTrack.prototype, 'enabled', {
        set: function(value) {
          origMSTEnabled.set.call(this, value);
          var ev = new Event('enabled');
          ev.enabled = value;
          this.dispatchEvent(ev);
        }
      });
    }

    window.RTCPeerConnection = function(config) {
      var self = this;

      var _eventTarget = document.createDocumentFragment();
      ['addEventListener', 'removeEventListener', 'dispatchEvent']
          .forEach(function(method) {
            self[method] = _eventTarget[method].bind(_eventTarget);
          });

      this.onicecandidate = null;
      this.onaddstream = null;
      this.ontrack = null;
      this.onremovestream = null;
      this.onsignalingstatechange = null;
      this.oniceconnectionstatechange = null;
      this.onnegotiationneeded = null;
      this.ondatachannel = null;

      this.localStreams = [];
      this.remoteStreams = [];
      this.getLocalStreams = function() {
        return self.localStreams;
      };
      this.getRemoteStreams = function() {
        return self.remoteStreams;
      };

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
      this.iceGatheringState = 'new';

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
          default:
            // don't set iceTransportPolicy.
            break;
        }
      }
      this.usingBundle = config && config.bundlePolicy === 'max-bundle';

      if (config && config.iceServers) {
        // Edge does not like
        // 1) stun:
        // 2) turn: that does not have all of turn:host:port?transport=udp
        // 3) turn: with ipv6 addresses
        var iceServers = JSON.parse(JSON.stringify(config.iceServers));
        this.iceOptions.iceServers = iceServers.filter(function(server) {
          if (server && server.urls) {
            var urls = server.urls;
            if (typeof urls === 'string') {
              urls = [urls];
            }
            urls = urls.filter(function(url) {
              return (url.indexOf('turn:') === 0 &&
                  url.indexOf('transport=udp') !== -1 &&
                  url.indexOf('turn:[') === -1) ||
                  (url.indexOf('stun:') === 0 &&
                    browserDetails.version >= 14393);
            })[0];
            return !!urls;
          }
          return false;
        });
      }
      this._config = config;

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
      var sections = SDPUtils.splitSections(self.localDescription.sdp);
      // FIXME: need to apply ice candidates in a way which is async but
      // in-order
      this._localIceCandidatesBuffer.forEach(function(event) {
        var end = !event.candidate || Object.keys(event.candidate).length === 0;
        if (end) {
          for (var j = 1; j < sections.length; j++) {
            if (sections[j].indexOf('\r\na=end-of-candidates\r\n') === -1) {
              sections[j] += 'a=end-of-candidates\r\n';
            }
          }
        } else {
          sections[event.candidate.sdpMLineIndex + 1] +=
              'a=' + event.candidate.candidate + '\r\n';
        }
        self.localDescription.sdp = sections.join('');
        self.dispatchEvent(event);
        if (self.onicecandidate !== null) {
          self.onicecandidate(event);
        }
        if (!event.candidate && self.iceGatheringState !== 'complete') {
          var complete = self.transceivers.every(function(transceiver) {
            return transceiver.iceGatherer &&
                transceiver.iceGatherer.state === 'completed';
          });
          if (complete) {
            self.iceGatheringState = 'complete';
          }
        }
      });
      this._localIceCandidatesBuffer = [];
    };

    window.RTCPeerConnection.prototype.getConfiguration = function() {
      return this._config;
    };

    window.RTCPeerConnection.prototype.addStream = function(stream) {
      // Clone is necessary for local demos mostly, attaching directly
      // to two different senders does not work (build 10547).
      var clonedStream = stream.clone();
      stream.getTracks().forEach(function(track, idx) {
        var clonedTrack = clonedStream.getTracks()[idx];
        track.addEventListener('enabled', function(event) {
          clonedTrack.enabled = event.enabled;
        });
      });
      this.localStreams.push(clonedStream);
      this._maybeFireNegotiationNeeded();
    };

    window.RTCPeerConnection.prototype.removeStream = function(stream) {
      var idx = this.localStreams.indexOf(stream);
      if (idx > -1) {
        this.localStreams.splice(idx, 1);
        this._maybeFireNegotiationNeeded();
      }
    };

    window.RTCPeerConnection.prototype.getSenders = function() {
      return this.transceivers.filter(function(transceiver) {
        return !!transceiver.rtpSender;
      })
      .map(function(transceiver) {
        return transceiver.rtpSender;
      });
    };

    window.RTCPeerConnection.prototype.getReceivers = function() {
      return this.transceivers.filter(function(transceiver) {
        return !!transceiver.rtpReceiver;
      })
      .map(function(transceiver) {
        return transceiver.rtpReceiver;
      });
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
                  lCodec.clockRate === rCodec.clockRate) {
                // number of channels is the highest common number of channels
                rCodec.numChannels = Math.min(lCodec.numChannels,
                    rCodec.numChannels);
                // push rCodec so we reply with offerer payload type
                commonCapabilities.codecs.push(rCodec);

                // determine common feedback mechanisms
                rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
                  for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
                    if (lCodec.rtcpFeedback[j].type === fb.type &&
                        lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                      return true;
                    }
                  }
                  return false;
                });
                // FIXME: also need to determine .parameters
                //  see https://github.com/openpeer/ortc/issues/569
                break;
              }
            }
          });

          localCapabilities.headerExtensions
              .forEach(function(lHeaderExtension) {
                for (var i = 0; i < remoteCapabilities.headerExtensions.length;
                     i++) {
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
            var event = new Event('icecandidate');
            event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

            var cand = evt.candidate;
            var end = !cand || Object.keys(cand).length === 0;
            // Edge emits an empty object for RTCIceCandidateComplete‥
            if (end) {
              // polyfill since RTCIceGatherer.state is not implemented in
              // Edge 10547 yet.
              if (iceGatherer.state === undefined) {
                iceGatherer.state = 'completed';
              }
            } else {
              // RTCIceCandidate doesn't have a component, needs to be added
              cand.component = iceTransport.component === 'RTCP' ? 2 : 1;
              event.candidate.candidate = SDPUtils.writeCandidate(cand);
            }

            // update local description.
            var sections = SDPUtils.splitSections(self.localDescription.sdp);
            if (!end) {
              sections[event.candidate.sdpMLineIndex + 1] +=
                  'a=' + event.candidate.candidate + '\r\n';
            } else {
              sections[event.candidate.sdpMLineIndex + 1] +=
                  'a=end-of-candidates\r\n';
            }
            self.localDescription.sdp = sections.join('');
            var transceivers = self._pendingOffer ? self._pendingOffer :
                self.transceivers;
            var complete = transceivers.every(function(transceiver) {
              return transceiver.iceGatherer &&
                  transceiver.iceGatherer.state === 'completed';
            });

            // Emit candidate if localDescription is set.
            // Also emits null candidate when all gatherers are complete.
            switch (self.iceGatheringState) {
              case 'new':
                if (!end) {
                  self._localIceCandidatesBuffer.push(event);
                }
                if (end && complete) {
                  self._localIceCandidatesBuffer.push(
                      new Event('icecandidate'));
                }
                break;
              case 'gathering':
                self._emitBufferedCandidates();
                if (!end) {
                  self.dispatchEvent(event);
                  if (self.onicecandidate !== null) {
                    self.onicecandidate(event);
                  }
                }
                if (complete) {
                  self.dispatchEvent(new Event('icecandidate'));
                  if (self.onicecandidate !== null) {
                    self.onicecandidate(new Event('icecandidate'));
                  }
                  self.iceGatheringState = 'complete';
                }
                break;
              case 'complete':
                // should not happen... currently!
                break;
              default: // no-op.
                break;
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
        params.encodings = transceiver.sendEncodingParameters;
        params.rtcp = {
          cname: SDPUtils.localCName
        };
        if (transceiver.recvEncodingParameters.length) {
          params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
        }
        transceiver.rtpSender.send(params);
      }
      if (recv && transceiver.rtpReceiver) {
        // remove RTX field in Edge 14942
        if (transceiver.kind === 'video'
            && transceiver.recvEncodingParameters) {
          transceiver.recvEncodingParameters.forEach(function(p) {
            delete p.rtx;
          });
        }
        params.encodings = transceiver.recvEncodingParameters;
        params.rtcp = {
          cname: transceiver.cname
        };
        if (transceiver.sendEncodingParameters.length) {
          params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
        }
        transceiver.rtpReceiver.receive(params);
      }
    };

    window.RTCPeerConnection.prototype.setLocalDescription =
        function(description) {
          var self = this;
          var sections;
          var sessionpart;
          if (description.type === 'offer') {
            // FIXME: What was the purpose of this empty if statement?
            // if (!this._pendingOffer) {
            // } else {
            if (this._pendingOffer) {
              // VERY limited support for SDP munging. Limited to:
              // * changing the order of codecs
              sections = SDPUtils.splitSections(description.sdp);
              sessionpart = sections.shift();
              sections.forEach(function(mediaSection, sdpMLineIndex) {
                var caps = SDPUtils.parseRtpParameters(mediaSection);
                self._pendingOffer[sdpMLineIndex].localCapabilities = caps;
              });
              this.transceivers = this._pendingOffer;
              delete this._pendingOffer;
            }
          } else if (description.type === 'answer') {
            sections = SDPUtils.splitSections(self.remoteDescription.sdp);
            sessionpart = sections.shift();
            var isIceLite = SDPUtils.matchPrefix(sessionpart,
                'a=ice-lite').length > 0;
            sections.forEach(function(mediaSection, sdpMLineIndex) {
              var transceiver = self.transceivers[sdpMLineIndex];
              var iceGatherer = transceiver.iceGatherer;
              var iceTransport = transceiver.iceTransport;
              var dtlsTransport = transceiver.dtlsTransport;
              var localCapabilities = transceiver.localCapabilities;
              var remoteCapabilities = transceiver.remoteCapabilities;

              var rejected = mediaSection.split('\n', 1)[0]
                  .split(' ', 2)[1] === '0';

              if (!rejected && !transceiver.isDatachannel) {
                var remoteIceParameters = SDPUtils.getIceParameters(
                    mediaSection, sessionpart);
                var remoteDtlsParameters = SDPUtils.getDtlsParameters(
                    mediaSection, sessionpart);
                if (isIceLite) {
                  remoteDtlsParameters.role = 'server';
                }

                if (!self.usingBundle || sdpMLineIndex === 0) {
                  iceTransport.start(iceGatherer, remoteIceParameters,
                      isIceLite ? 'controlling' : 'controlled');
                  dtlsTransport.start(remoteDtlsParameters);
                }

                // Calculate intersection of capabilities.
                var params = self._getCommonCapabilities(localCapabilities,
                    remoteCapabilities);

                // Start the RTCRtpSender. The RTCRtpReceiver for this
                // transceiver has already been started in setRemoteDescription.
                self._transceive(transceiver,
                    params.codecs.length > 0,
                    false);
              }
            });
          }

          this.localDescription = {
            type: description.type,
            sdp: description.sdp
          };
          switch (description.type) {
            case 'offer':
              this._updateSignalingState('have-local-offer');
              break;
            case 'answer':
              this._updateSignalingState('stable');
              break;
            default:
              throw new TypeError('unsupported type "' + description.type +
                  '"');
          }

          // If a success callback was provided, emit ICE candidates after it
          // has been executed. Otherwise, emit callback after the Promise is
          // resolved.
          var hasCallback = arguments.length > 1 &&
            typeof arguments[1] === 'function';
          if (hasCallback) {
            var cb = arguments[1];
            window.setTimeout(function() {
              cb();
              if (self.iceGatheringState === 'new') {
                self.iceGatheringState = 'gathering';
              }
              self._emitBufferedCandidates();
            }, 0);
          }
          var p = Promise.resolve();
          p.then(function() {
            if (!hasCallback) {
              if (self.iceGatheringState === 'new') {
                self.iceGatheringState = 'gathering';
              }
              // Usually candidates will be emitted earlier.
              window.setTimeout(self._emitBufferedCandidates.bind(self), 500);
            }
          });
          return p;
        };

    window.RTCPeerConnection.prototype.setRemoteDescription =
        function(description) {
          var self = this;
          var stream = new MediaStream();
          var receiverList = [];
          var sections = SDPUtils.splitSections(description.sdp);
          var sessionpart = sections.shift();
          var isIceLite = SDPUtils.matchPrefix(sessionpart,
              'a=ice-lite').length > 0;
          this.usingBundle = SDPUtils.matchPrefix(sessionpart,
              'a=group:BUNDLE ').length > 0;
          sections.forEach(function(mediaSection, sdpMLineIndex) {
            var lines = SDPUtils.splitLines(mediaSection);
            var mline = lines[0].substr(2).split(' ');
            var kind = mline[0];
            var rejected = mline[1] === '0';
            var direction = SDPUtils.getDirection(mediaSection, sessionpart);

            var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:');
            if (mid.length) {
              mid = mid[0].substr(6);
            } else {
              mid = SDPUtils.generateIdentifier();
            }

            // Reject datachannels which are not implemented yet.
            if (kind === 'application' && mline[2] === 'DTLS/SCTP') {
              self.transceivers[sdpMLineIndex] = {
                mid: mid,
                isDatachannel: true
              };
              return;
            }

            var transceiver;
            var iceGatherer;
            var iceTransport;
            var dtlsTransport;
            var rtpSender;
            var rtpReceiver;
            var sendEncodingParameters;
            var recvEncodingParameters;
            var localCapabilities;

            var track;
            // FIXME: ensure the mediaSection has rtcp-mux set.
            var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
            var remoteIceParameters;
            var remoteDtlsParameters;
            if (!rejected) {
              remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
                  sessionpart);
              remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
                  sessionpart);
              remoteDtlsParameters.role = 'client';
            }
            recvEncodingParameters =
                SDPUtils.parseRtpEncodingParameters(mediaSection);

            var cname;
            // Gets the first SSRC. Note that with RTX there might be multiple
            // SSRCs.
            var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
                .map(function(line) {
                  return SDPUtils.parseSsrcMedia(line);
                })
                .filter(function(obj) {
                  return obj.attribute === 'cname';
                })[0];
            if (remoteSsrc) {
              cname = remoteSsrc.value;
            }

            var isComplete = SDPUtils.matchPrefix(mediaSection,
                'a=end-of-candidates', sessionpart).length > 0;
            var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
                .map(function(cand) {
                  return SDPUtils.parseCandidate(cand);
                })
                .filter(function(cand) {
                  return cand.component === '1';
                });
            if (description.type === 'offer' && !rejected) {
              var transports = self.usingBundle && sdpMLineIndex > 0 ? {
                iceGatherer: self.transceivers[0].iceGatherer,
                iceTransport: self.transceivers[0].iceTransport,
                dtlsTransport: self.transceivers[0].dtlsTransport
              } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);

              if (isComplete && (!self.usingBundle || sdpMLineIndex === 0)) {
                transports.iceTransport.setRemoteCandidates(cands);
              }

              localCapabilities = RTCRtpReceiver.getCapabilities(kind);

              // filter RTX until additional stuff needed for RTX is implemented
              // in adapter.js
              localCapabilities.codecs = localCapabilities.codecs.filter(
                  function(codec) {
                    return codec.name !== 'rtx';
                  });

              sendEncodingParameters = [{
                ssrc: (2 * sdpMLineIndex + 2) * 1001
              }];

              rtpReceiver = new RTCRtpReceiver(transports.dtlsTransport, kind);

              track = rtpReceiver.track;
              receiverList.push([track, rtpReceiver]);
              // FIXME: not correct when there are multiple streams but that is
              // not currently supported in this shim.
              stream.addTrack(track);

              // FIXME: look at direction.
              if (self.localStreams.length > 0 &&
                  self.localStreams[0].getTracks().length >= sdpMLineIndex) {
                var localTrack;
                if (kind === 'audio') {
                  localTrack = self.localStreams[0].getAudioTracks()[0];
                } else if (kind === 'video') {
                  localTrack = self.localStreams[0].getVideoTracks()[0];
                }
                if (localTrack) {
                  rtpSender = new RTCRtpSender(localTrack,
                      transports.dtlsTransport);
                }
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
                sendEncodingParameters: sendEncodingParameters,
                recvEncodingParameters: recvEncodingParameters
              };
              // Start the RTCRtpReceiver now. The RTPSender is started in
              // setLocalDescription.
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
              sendEncodingParameters = transceiver.sendEncodingParameters;
              localCapabilities = transceiver.localCapabilities;

              self.transceivers[sdpMLineIndex].recvEncodingParameters =
                  recvEncodingParameters;
              self.transceivers[sdpMLineIndex].remoteCapabilities =
                  remoteCapabilities;
              self.transceivers[sdpMLineIndex].cname = cname;

              if ((isIceLite || isComplete) && cands.length) {
                iceTransport.setRemoteCandidates(cands);
              }
              if (!self.usingBundle || sdpMLineIndex === 0) {
                iceTransport.start(iceGatherer, remoteIceParameters,
                    'controlling');
                dtlsTransport.start(remoteDtlsParameters);
              }

              self._transceive(transceiver,
                  direction === 'sendrecv' || direction === 'recvonly',
                  direction === 'sendrecv' || direction === 'sendonly');

              if (rtpReceiver &&
                  (direction === 'sendrecv' || direction === 'sendonly')) {
                track = rtpReceiver.track;
                receiverList.push([track, rtpReceiver]);
                stream.addTrack(track);
              } else {
                // FIXME: actually the receiver should be created later.
                delete transceiver.rtpReceiver;
              }
            }
          });

          this.remoteDescription = {
            type: description.type,
            sdp: description.sdp
          };
          switch (description.type) {
            case 'offer':
              this._updateSignalingState('have-remote-offer');
              break;
            case 'answer':
              this._updateSignalingState('stable');
              break;
            default:
              throw new TypeError('unsupported type "' + description.type +
                  '"');
          }
          if (stream.getTracks().length) {
            self.remoteStreams.push(stream);
            window.setTimeout(function() {
              var event = new Event('addstream');
              event.stream = stream;
              self.dispatchEvent(event);
              if (self.onaddstream !== null) {
                window.setTimeout(function() {
                  self.onaddstream(event);
                }, 0);
              }

              receiverList.forEach(function(item) {
                var track = item[0];
                var receiver = item[1];
                var trackEvent = new Event('track');
                trackEvent.track = track;
                trackEvent.receiver = receiver;
                trackEvent.streams = [stream];
                self.dispatchEvent(trackEvent);
                if (self.ontrack !== null) {
                  window.setTimeout(function() {
                    self.ontrack(trackEvent);
                  }, 0);
                }
              });
            }, 0);
          }
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
          var event = new Event('signalingstatechange');
          this.dispatchEvent(event);
          if (this.onsignalingstatechange !== null) {
            this.onsignalingstatechange(event);
          }
        };

    // Determine whether to fire the negotiationneeded event.
    window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded =
        function() {
          // Fire away (for now).
          var event = new Event('negotiationneeded');
          this.dispatchEvent(event);
          if (this.onnegotiationneeded !== null) {
            this.onnegotiationneeded(event);
          }
        };

    // Update the connection state.
    window.RTCPeerConnection.prototype._updateConnectionState = function() {
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
      } else if (states.connected > 0 || states.completed > 0) {
        newState = 'connected';
      }

      if (newState !== self.iceConnectionState) {
        self.iceConnectionState = newState;
        var event = new Event('iceconnectionstatechange');
        this.dispatchEvent(event);
        if (this.oniceconnectionstatechange !== null) {
          this.oniceconnectionstatechange(event);
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
        // For each track, create an ice gatherer, ice transport,
        // dtls transport, potentially rtpsender and rtpreceiver.
        var track = mline.track;
        var kind = mline.kind;
        var mid = SDPUtils.generateIdentifier();

        var transports = self.usingBundle && sdpMLineIndex > 0 ? {
          iceGatherer: transceivers[0].iceGatherer,
          iceTransport: transceivers[0].iceTransport,
          dtlsTransport: transceivers[0].dtlsTransport
        } : self._createIceAndDtlsTransports(mid, sdpMLineIndex);

        var localCapabilities = RTCRtpSender.getCapabilities(kind);
        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        localCapabilities.codecs = localCapabilities.codecs.filter(
            function(codec) {
              return codec.name !== 'rtx';
            });
        localCapabilities.codecs.forEach(function(codec) {
          // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
          // by adding level-asymmetry-allowed=1
          if (codec.name === 'H264' &&
              codec.parameters['level-asymmetry-allowed'] === undefined) {
            codec.parameters['level-asymmetry-allowed'] = '1';
          }
        });

        var rtpSender;
        var rtpReceiver;

        // generate an ssrc now, to be used later in rtpSender.send
        var sendEncodingParameters = [{
          ssrc: (2 * sdpMLineIndex + 1) * 1001
        }];
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
          sendEncodingParameters: sendEncodingParameters,
          recvEncodingParameters: null
        };
      });
      if (this.usingBundle) {
        sdp += 'a=group:BUNDLE ' + transceivers.map(function(t) {
          return t.mid;
        }).join(' ') + '\r\n';
      }
      tracks.forEach(function(mline, sdpMLineIndex) {
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

      var sdp = SDPUtils.writeSessionBoilerplate();
      if (this.usingBundle) {
        sdp += 'a=group:BUNDLE ' + this.transceivers.map(function(t) {
          return t.mid;
        }).join(' ') + '\r\n';
      }
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.isDatachannel) {
          sdp += 'm=application 0 DTLS/SCTP 5000\r\n' +
              'c=IN IP4 0.0.0.0\r\n' +
              'a=mid:' + transceiver.mid + '\r\n';
          return;
        }
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
      if (!candidate) {
        for (var j = 0; j < this.transceivers.length; j++) {
          this.transceivers[j].iceTransport.addRemoteCandidate({});
          if (this.usingBundle) {
            return;
          }
        }
      } else {
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
          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
            return;
          }
          // Ignore RTCP candidates, we assume RTCP-MUX.
          if (cand.component !== '1') {
            return;
          }
          transceiver.iceTransport.addRemoteCandidate(cand);

          // update the remoteDescription.
          var sections = SDPUtils.splitSections(this.remoteDescription.sdp);
          sections[mLineIndex + 1] += (cand.type ? candidate.candidate.trim()
              : 'a=end-of-candidates') + '\r\n';
          this.remoteDescription.sdp = sections.join('');
        }
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
      var fixStatsType = function(stat) {
        stat.type = {
          inboundrtp: 'inbound-rtp',
          outboundrtp: 'outbound-rtp',
          candidatepair: 'candidate-pair',
          localcandidate: 'local-candidate',
          remotecandidate: 'remote-candidate'
        }[stat.type] || stat.type;
        return stat;
      };
      return new Promise(function(resolve) {
        // shim getStats with maplike support
        var results = new Map();
        Promise.all(promises).then(function(res) {
          res.forEach(function(result) {
            Object.keys(result).forEach(function(id) {
              result[id].type = fixStatsType(result[id]);
              results.set(id, result[id]);
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
};

// Expose public methods.
module.exports = {
  shimPeerConnection: edgeShim.shimPeerConnection,
  shimGetUserMedia: require('./getusermedia')
};

},{"../utils":11,"./getusermedia":7,"sdp":1}],7:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

// Expose public methods.
module.exports = function() {
  var shimError_ = function(e) {
    return {
      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
      message: e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name;
      }
    };
  };

  // getUserMedia error shim.
  var origGetUserMedia = navigator.mediaDevices.getUserMedia.
      bind(navigator.mediaDevices);
  navigator.mediaDevices.getUserMedia = function(c) {
    return origGetUserMedia(c).catch(function(e) {
      return Promise.reject(shimError_(e));
    });
  };
};

},{}],8:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var browserDetails = require('../utils').browserDetails;

var firefoxShim = {
  shimOnTrack: function() {
    if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
        window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function() {
          return this._ontrack;
        },
        set: function(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
            this.removeEventListener('addstream', this._ontrackpoly);
          }
          this.addEventListener('track', this._ontrack = f);
          this.addEventListener('addstream', this._ontrackpoly = function(e) {
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
  },

  shimSourceObject: function() {
    // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
    if (typeof window === 'object') {
      if (window.HTMLMediaElement &&
        !('srcObject' in window.HTMLMediaElement.prototype)) {
        // Shim the srcObject property, once, when HTMLMediaElement is found.
        Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
          get: function() {
            return this.mozSrcObject;
          },
          set: function(stream) {
            this.mozSrcObject = stream;
          }
        });
      }
    }
  },

  shimPeerConnection: function() {
    if (typeof window !== 'object' || !(window.RTCPeerConnection ||
        window.mozRTCPeerConnection)) {
      return; // probably media.peerconnection.enabled=false in about:config
    }
    // The RTCPeerConnection object.
    if (!window.RTCPeerConnection) {
      window.RTCPeerConnection = function(pcConfig, pcConstraints) {
        if (browserDetails.version < 38) {
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
        return new mozRTCPeerConnection(pcConfig, pcConstraints);
      };
      window.RTCPeerConnection.prototype = mozRTCPeerConnection.prototype;

      // wrap static methods. Currently just generateCertificate.
      if (mozRTCPeerConnection.generateCertificate) {
        Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
          get: function() {
            return mozRTCPeerConnection.generateCertificate;
          }
        });
      }

      window.RTCSessionDescription = mozRTCSessionDescription;
      window.RTCIceCandidate = mozRTCIceCandidate;
    }

    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
        .forEach(function(method) {
          var nativeMethod = RTCPeerConnection.prototype[method];
          RTCPeerConnection.prototype[method] = function() {
            arguments[0] = new ((method === 'addIceCandidate') ?
                RTCIceCandidate : RTCSessionDescription)(arguments[0]);
            return nativeMethod.apply(this, arguments);
          };
        });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate =
        RTCPeerConnection.prototype.addIceCandidate;
    RTCPeerConnection.prototype.addIceCandidate = function() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };

    // shim getStats with maplike support
    var makeMapStats = function(stats) {
      var map = new Map();
      Object.keys(stats).forEach(function(key) {
        map.set(key, stats[key]);
        map[key] = stats[key];
      });
      return map;
    };

    var modernStatsTypes = {
      inboundrtp: 'inbound-rtp',
      outboundrtp: 'outbound-rtp',
      candidatepair: 'candidate-pair',
      localcandidate: 'local-candidate',
      remotecandidate: 'remote-candidate'
    };

    var nativeGetStats = RTCPeerConnection.prototype.getStats;
    RTCPeerConnection.prototype.getStats = function(selector, onSucc, onErr) {
      return nativeGetStats.apply(this, [selector || null])
        .then(function(stats) {
          if (browserDetails.version < 48) {
            stats = makeMapStats(stats);
          }
          if (browserDetails.version < 53 && !onSucc) {
            // Shim only promise getStats with spec-hyphens in type names
            // Leave callback version alone; misc old uses of forEach before Map
            stats.forEach(function(stat) {
              stat.type = modernStatsTypes[stat.type] || stat.type;
            });
          }
          return stats;
        })
        .then(onSucc, onErr);
    };
  }
};

// Expose public methods.
module.exports = {
  shimOnTrack: firefoxShim.shimOnTrack,
  shimSourceObject: firefoxShim.shimSourceObject,
  shimPeerConnection: firefoxShim.shimPeerConnection,
  shimGetUserMedia: require('./getusermedia')
};

},{"../utils":11,"./getusermedia":9}],9:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var logging = require('../utils').log;
var browserDetails = require('../utils').browserDetails;

// Expose public methods.
module.exports = function() {
  var shimError_ = function(e) {
    return {
      name: {
        SecurityError: 'NotAllowedError',
        PermissionDeniedError: 'NotAllowedError'
      }[e.name] || e.name,
      message: {
        'The operation is insecure.': 'The request is not allowed by the ' +
        'user agent or the platform in the current context.'
      }[e.message] || e.message,
      constraint: e.constraint,
      toString: function() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  // getUserMedia constraints shim.
  var getUserMedia_ = function(constraints, onSuccess, onError) {
    var constraintsToFF37_ = function(c) {
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
            r. min = r.max = r.exact;
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
    constraints = JSON.parse(JSON.stringify(constraints));
    if (browserDetails.version < 38) {
      logging('spec: ' + JSON.stringify(constraints));
      if (constraints.audio) {
        constraints.audio = constraintsToFF37_(constraints.audio);
      }
      if (constraints.video) {
        constraints.video = constraintsToFF37_(constraints.video);
      }
      logging('ff37: ' + JSON.stringify(constraints));
    }
    return navigator.mozGetUserMedia(constraints, onSuccess, function(e) {
      onError(shimError_(e));
    });
  };

  // Returns the result of getUserMedia as a Promise.
  var getUserMediaPromise_ = function(constraints) {
    return new Promise(function(resolve, reject) {
      getUserMedia_(constraints, resolve, reject);
    });
  };

  // Shim for mediaDevices on older versions.
  if (!navigator.mediaDevices) {
    navigator.mediaDevices = {getUserMedia: getUserMediaPromise_,
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

  if (browserDetails.version < 41) {
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
  if (browserDetails.version < 49) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.
        bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function(c) {
      return origGetUserMedia(c).then(function(stream) {
        // Work around https://bugzil.la/802326
        if (c.audio && !stream.getAudioTracks().length ||
            c.video && !stream.getVideoTracks().length) {
          stream.getTracks().forEach(function(track) {
            track.stop();
          });
          throw new DOMException('The object can not be found here.',
                                 'NotFoundError');
        }
        return stream;
      }, function(e) {
        return Promise.reject(shimError_(e));
      });
    };
  }
  navigator.getUserMedia = function(constraints, onSuccess, onError) {
    if (browserDetails.version < 44) {
      return getUserMedia_(constraints, onSuccess, onError);
    }
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    console.warn('navigator.getUserMedia has been replaced by ' +
                 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };
};

},{"../utils":11}],10:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
'use strict';
var safariShim = {
  // TODO: DrAlex, should be here, double check against LayoutTests
  // shimOnTrack: function() { },

  // TODO: once the back-end for the mac port is done, add.
  // TODO: check for webkitGTK+
  // shimPeerConnection: function() { },

  shimGetUserMedia: function() {
    navigator.getUserMedia = navigator.webkitGetUserMedia;
  }
};

// Expose public methods.
module.exports = {
  shimGetUserMedia: safariShim.shimGetUserMedia
  // TODO
  // shimOnTrack: safariShim.shimOnTrack,
  // shimPeerConnection: safariShim.shimPeerConnection
};

},{}],11:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
 /* eslint-env node */
'use strict';

var logDisabled_ = true;

// Utility methods.
var utils = {
  disableLog: function(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + typeof bool +
          '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return (bool) ? 'adapter.js logging disabled' :
        'adapter.js logging enabled';
  },

  log: function() {
    if (typeof window === 'object') {
      if (logDisabled_) {
        return;
      }
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log.apply(console, arguments);
      }
    }
  },

  /**
   * Extract browser version out of the provided user agent string.
   *
   * @param {!string} uastring userAgent string.
   * @param {!string} expr Regular expression used as match criteria.
   * @param {!number} pos position in the version string to be returned.
   * @return {!number} browser version.
   */
  extractVersion: function(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
  },

  /**
   * Browser detector.
   *
   * @return {object} result containing browser and version
   *     properties.
   */
  detectBrowser: function() {
    // Returned result object.
    var result = {};
    result.browser = null;
    result.version = null;

    // Fail early if it's not a browser
    if (typeof window === 'undefined' || !window.navigator) {
      result.browser = 'Not a browser.';
      return result;
    }

    // Firefox.
    if (navigator.mozGetUserMedia) {
      result.browser = 'firefox';
      result.version = this.extractVersion(navigator.userAgent,
          /Firefox\/([0-9]+)\./, 1);

    // all webkit-based browsers
    } else if (navigator.webkitGetUserMedia) {
      // Chrome, Chromium, Webview, Opera, all use the chrome shim for now
      if (window.webkitRTCPeerConnection) {
        result.browser = 'chrome';
        result.version = this.extractVersion(navigator.userAgent,
          /Chrom(e|ium)\/([0-9]+)\./, 2);

      // Safari or unknown webkit-based
      // for the time being Safari has support for MediaStreams but not webRTC
      } else {
        // Safari UA substrings of interest for reference:
        // - webkit version:           AppleWebKit/602.1.25 (also used in Op,Cr)
        // - safari UI version:        Version/9.0.3 (unique to Safari)
        // - safari UI webkit version: Safari/601.4.4 (also used in Op,Cr)
        //
        // if the webkit version and safari UI webkit versions are equals,
        // ... this is a stable version.
        //
        // only the internal webkit version is important today to know if
        // media streams are supported
        //
        if (navigator.userAgent.match(/Version\/(\d+).(\d+)/)) {
          result.browser = 'safari';
          result.version = this.extractVersion(navigator.userAgent,
            /AppleWebKit\/([0-9]+)\./, 1);

        // unknown webkit-based browser
        } else {
          result.browser = 'Unsupported webkit-based browser ' +
              'with GUM support but no WebRTC support.';
          return result;
        }
      }

    // Edge.
    } else if (navigator.mediaDevices &&
        navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
      result.browser = 'edge';
      result.version = this.extractVersion(navigator.userAgent,
          /Edge\/(\d+).(\d+)$/, 2);

    // Default fallthrough: not supported.
    } else {
      result.browser = 'Not a supported browser.';
      return result;
    }

    return result;
  },

  shimCreateObjectURL: function() {
    var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
    var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
    var streams = new Map(), newId = 0;

    URL.createObjectURL = function(stream) {
      if ('getTracks' in stream) {
        var url = 'polyblob:' + (++newId);
        streams.set(url, stream);
        console.log('URL.createObjectURL(stream) is deprecated! ' +
                    'Use elem.srcObject = stream instead!');
        return url;
      }
      return nativeCreateObjectURL(stream);
    };
    URL.revokeObjectURL = function(url) {
      nativeRevokeObjectURL(url);
      streams.delete(url);
    };

    var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype,
                                              'src');
    Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
      get: function() {
        return dsc.get.apply(this);
      },
      set: function(url) {
        this.srcObject = streams.get(url) || null;
        return dsc.set.apply(this, [url]);
      }
    });
  }
};

// Export.
module.exports = {
  log: utils.log,
  disableLog: utils.disableLog,
  browserDetails: utils.detectBrowser(),
  extractVersion: utils.extractVersion,
  shimCreateObjectURL: utils.shimCreateObjectURL
};

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
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

require('webrtc-adapter');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
  The ConnectionController has a generic design so that it can be used in both stubs.
  It manages a single DataChannel, it is not requesting access to media input, i.e.
  does not have audio/video streams.
**/
var ConnectionController = function () {
  function ConnectionController(myUrl, syncher, configuration, caller) {
    _classCallCheck(this, ConnectionController);

    if (!myUrl) throw new Error('The own url (myUrl) is a needed parameter');
    if (!syncher) throw new Error('The syncher is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    this._domain = this._divideURL(myUrl)["domain"];
    this._objectDescURL = 'hyperty-catalogue://catalogue.' + this._domain + '/.well-known/dataschema/Connection';

    this._myUrl = myUrl;
    this._syncher = syncher;
    this._configuration = configuration;
    this._caller = caller;
    this._dataObjectObserver;
    this._dataObjectReporter;
    this._peerUrl;
    this._dataChannel;
    this._onStatusUpdate;

    this._peerConnection = this._createPeerConnection();
  }

  //create a peer connection with its event handlers


  _createClass(ConnectionController, [{
    key: '_createPeerConnection',
    value: function _createPeerConnection() {
      var _this = this;

      var pc = this._peerConnection;
      if (!pc) {
        pc = new RTCPeerConnection(this._configuration);
        console.log("[P2P-ConnectionController]: created PeerConnection");

        // add handler for datachannel creation from peer side
        pc.ondatachannel = function (event) {
          console.log("[P2P-ConnectionController]: ondatachannel -> remote side has created a datachannel");
          _this._dataChannel = event.channel;
          _this._addDataChannelListeners();
        };

        // event handler for local ice candidates
        pc.onicecandidate = function (e) {
          console.log("[P2P-ConnectionController]: icecandidateevent occured: ", e);
          if (!e.candidate) return;
          var icecandidate = {
            type: 'candidate',
            candidate: e.candidate.candidate,
            sdpMid: e.candidate.sdpMid,
            sdpMLineIndex: e.candidate.sdpMLineIndex
          };
          // send candidate to remote peer by pushing it to the reporter object
          _this._dataObjectReporter.data.iceCandidates.push(icecandidate);
        };
      }
      return pc;
    }

    /**
    React to the given invitation event by subscribing to the provided invitationEvent.url.
    **/

  }, {
    key: 'observe',
    value: function observe(invitationEvent) {
      var _this2 = this;

      this._peerUrl = invitationEvent.from;

      return new Promise(function (resolve, reject) {

        _this2._syncher.subscribe(_this2._objectDescURL, invitationEvent.url).then(function (dataObjectObserver) {
          console.info('+[P2PHandlerStub] got Data Object Observer', dataObjectObserver);
          _this2._setupObserver(dataObjectObserver);
          resolve();
        }).catch(function (reason) {
          console.error(reason);
          reject();
        });
      });
    }

    /**
    Creates a syncher object and invite the given peerUrl to subscribe for it.
    Also creates the local offer, performs setLocalDescription and publishes the offer via the reporter object.
    **/

  }, {
    key: 'report',
    value: function report(peerUrl, ownRuntimeUrl) {
      var _this3 = this;

      if (!this._peerUrl) this._peerUrl = peerUrl;
      return new Promise(function (resolve, reject) {

        //  if we are the caller (i.e. no reporter object present yet, initalize the creation of the DataChannel)
        if (_this3._caller) {
          console.log("[P2P-ConnectionController]: we are in caller role --> createDataChannel ...");
          _this3._dataChannel = _this3._peerConnection.createDataChannel("P2PChannel", { reliable: false });
          console.log("P2P: datachannel object", _this3._dataChannel);
          _this3._addDataChannelListeners();
        }

        // initial data for reporter sync object
        var dataObject = {
          name: "P2PConnection",
          status: "",
          owner: _this3._myUrl,
          runtimeURL: ownRuntimeUrl, // put the own runtimeURL to the dataObject (as discussed with Paulo)
          connectionDescription: {},
          iceCandidates: []
        };
        // ensure this the objReporter object is created before we create the offer
        _this3._syncher.create(_this3._objectDescURL, [_this3._peerUrl], dataObject).then(function (objReporter) {
          console.info('[P2P-ConnectionController] Created WebRTC Object Reporter', objReporter);

          _this3._dataObjectReporter = objReporter;
          _this3._dataObjectReporter.onSubscription(function (event) {
            event.accept(); // all subscription requested are accepted
          });

          var constraints = {
            offerToReceiveAudio: false,
            offerToReceiveVideo: false
          };
          // either invoke createOffer or createAnswer, depending on the roles
          var sdpPromise = _this3._caller ? _this3._peerConnection.createOffer(constraints) : _this3._peerConnection.createAnswer();
          sdpPromise.then(function (sdp) {
            console.log("[P2P-ConnectionController] SDP created", sdp);
            _this3._peerConnection.setLocalDescription(new RTCSessionDescription(sdp), function () {
              console.info('[P2P-ConnectionController] localDescription set successfully');
              _this3._dataObjectReporter.data.connectionDescription = sdp;
              resolve();
            }).catch(function (e) {
              reject("setting of localDescription failed: ", e);
            });
          }).catch(function (reason) {
            console.error(reason);
            reject(reason);
          });
        });
      });
    }
  }, {
    key: 'onMessage',
    value: function onMessage(callback) {
      // add the message callback
      this._onDataChannelMessage = callback;
    }
  }, {
    key: 'onStatusUpdate',
    value: function onStatusUpdate(callback) {
      // add a connection status update callback
      this._onStatusUpdate = callback;
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage(m) {
      console.log("[P2P-ConnectionController] --> outgoing msg: ", m);
      this._dataChannel.send(m);
    }
  }, {
    key: 'cleanup',
    value: function cleanup() {
      delete this._dataObjectReporter;
      delete this._dataObjectObserver;
      if (this._dataChannel) this._dataChannel.close();
      if (this._peerConnection) this._peerConnection.close();
      this._dataChannel = null;
      this._peerConnection = null;
    }
  }, {
    key: '_addDataChannelListeners',
    value: function _addDataChannelListeners() {
      var _this4 = this;

      this._dataChannel.onopen = function () {
        _this4._onDataChannelOpen();
      };
      this._dataChannel.onerror = function (e) {
        _this4._onDataChannelError(e);
      };
      this._dataChannel.onmessage = function (m) {
        console.log("[P2P-ConnectionController] <-- incoming msg: ", m);
        if (_this4._onDataChannelMessage) _this4._onDataChannelMessage(m);
      };
      this._dataChannel.onclose = function () {
        _this4._onDataChannelClose();
      };
    }
  }, {
    key: '_setupObserver',
    value: function _setupObserver(dataObjectObserver) {
      var _this5 = this;

      this._dataObjectObserver = dataObjectObserver;

      var peerData = this._dataObjectObserver.data;
      console.info("[P2P-ConnectionController]: _setupObserver Peer Data:", peerData);

      if (peerData.hasOwnProperty('connectionDescription')) {
        this._processPeerInformation(peerData.connectionDescription);
      }

      if (peerData.hasOwnProperty('iceCandidates')) {
        peerData.iceCandidates.forEach(function (ice) {
          console.log("[P2P-ConnectionController]: handleObserverObject for ice", ice);
          _this5._processPeerInformation(ice);
        });
      }

      // setup listener for future changes on the observed data object
      dataObjectObserver.onChange('*', function (event) {
        console.debug('[P2P-ConnectionController]: Observer on change message: ', event);
        // we need to process the answer from event.data and the candidates which might trickle
        // from event.data[0]
        if (event.data[0]) {
          // [0] this does the trick when ice candidates are trickling ;)
          console.log('>>event.data[0]', event.data[0]);
          _this5._processPeerInformation(event.data[0]);
        } else {
          console.log('[P2P-ConnectionController]: >>event', event);
          _this5._processPeerInformation(event.data);
        }
      });
    }
  }, {
    key: '_processPeerInformation',
    value: function _processPeerInformation(data) {
      console.info("[P2P-ConnectionController]: processPeerInformation: ", JSON.stringify(data));
      if (!this._peerConnection) {
        console.info("[P2P-ConnectionController]: processPeerInformation: no PeerConnection existing --> maybe in disconnecting process. --> ignoring this update");
        return;
      }

      if (data.type === 'offer' || data.type === 'answer') {
        console.info('[P2P-ConnectionController]: Process Connection Description: ', data);
        this._peerConnection.setRemoteDescription(new RTCSessionDescription(data)).then(function () {
          console.log("[P2P-ConnectionController]: remote success");
        }).catch(function (e) {
          console.log("[P2P-ConnectionController]: remote error: ", e);
        });
      }

      if (data.candidate) {
        console.info('Process Ice Candidate: ', data);
        this._peerConnection.addIceCandidate(new RTCIceCandidate({
          candidate: data.candidate
        }));
      }
    }
  }, {
    key: '_onDataChannelOpen',
    value: function _onDataChannelOpen() {
      console.log('[P2P-ConnectionController] DataChannel opened');
      if (this._onStatusUpdate) this._onStatusUpdate("live");
    }
  }, {
    key: '_onDataChannelError',
    value: function _onDataChannelError(e) {
      console.log('[P2P-ConnectionController] DataChannel error: ', e);
      if (this._onStatusUpdate) this._onStatusUpdate("disconnected", "" + e);
    }
  }, {
    key: '_onDataChannelClose',
    value: function _onDataChannelClose() {
      console.log('[P2P-ConnectionController] DataChannel closed: ');
      if (this._onStatusUpdate) this._onStatusUpdate("disconnected", "closed");
    }

    /**
     * Divide an url in type, domain and identity
     * @param  {URL.URL} url - url address
     * @return {divideURL} the result of divideURL
     */

  }, {
    key: '_divideURL',
    value: function _divideURL(url) {

      // let re = /([a-zA-Z-]*)?:\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/gi;
      var re = /([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
      var subst = '$1,$2,$3';
      var parts = url.replace(re, subst).split(',');

      // If the url has no protocol, the default protocol set is https
      if (parts[0] === url) {
        parts[0] = 'https';
        parts[1] = url;
      }

      var result = {
        type: parts[0],
        domain: parts[1],
        identity: parts[2]
      };

      return result;
    }
  }]);

  return ConnectionController;
}();

exports.default = ConnectionController;
module.exports = exports['default'];

},{"webrtc-adapter":3}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
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

exports.default = activate;

var _Syncher = require('service-framework/dist/Syncher');

var _ConnectionController = require('./ConnectionController');

var _ConnectionController2 = _interopRequireDefault(_ConnectionController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: integrate the status eventing

/**
 * ProtoStub Interface
 */
var P2PRequesterStub = function () {

  /**
   * Initialise the protocol stub including as input parameters its allocated
   * component runtime url, the runtime BUS postMessage function to be invoked
   * on messages received by the protocol stub and required configuration retrieved from protocolStub descriptor.
   * @param  {URL.runtimeProtoStubURL}                   runtimeProtoStubURL runtimeProtoSubURL
   * @param  {Message.Message}                           busPostMessage     configuration
   * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
   */
  function P2PRequesterStub(runtimeProtoStubURL, miniBus, configuration) {
    var _this = this;

    _classCallCheck(this, P2PRequesterStub);

    if (!runtimeProtoStubURL) throw new Error('The runtimeProtoStubURL is a required parameter');
    if (!miniBus) throw new Error('The bus is a required parameter');
    if (!configuration) throw new Error('The configuration is a required parameter');
    // if (!configuration.p2pHandler) throw new Error('The p2pHandler is a required attribute in the configuration parameter');

    this._runtimeProtoStubURL = runtimeProtoStubURL;
    this._runtimeURL = configuration.runtimeURL;
    this._configuration = configuration;
    this._bus = miniBus;
    this._bus.addListener('*', function (msg) {
      _this._sendChannelMsg(msg);
    });

    this._syncher = new _Syncher.Syncher(runtimeProtoStubURL, miniBus, configuration);
    this._connectionController = new _ConnectionController2.default(this._runtimeProtoStubURL, this._syncher, this._configuration, true);
    this._connectionController.onStatusUpdate(function (status, reason) {
      _this._sendStatus(status, reason);
    });

    this._syncher.onNotification(function (event) {
      console.log('+[P2PRequesterStub] On Syncher Notification: ', event);
      event.ack(200);

      switch (event.type) {

        case 'create':
          // incoming observe invitation from peer
          if (_this._connectionController) {
            _this._connectionController.observe(event).then(function () {
              console.log("+[P2PRequesterStub] observer created ");
            });
          }
          break;

        case 'delete':
          // TODO: question regarding code in Connector: --> there it deletes all controllers --> why?
          console.log("+[P2PRequesterStub] deleting connection handler for " + event.from);

          disconnect();
          break;

        default:
      }
    });

    // the target handler stub url must be present in the configuration as "p2pHandler" attribute
    if (this._configuration.p2pHandler) this.connect(this._configuration.p2pHandler);
  }

  _createClass(P2PRequesterStub, [{
    key: 'connect',
    value: function connect(handlerURL) {
      var _this2 = this;

      this._connectionController.report(handlerURL, this._runtimeURL).then(function () {
        _this2._connectionController.onMessage(function (m) {
          _this2._deliver(m);
        });
        console.log("+[P2PRequesterStub] setup reporter object successfully");
      });
    }

    /**
     * To disconnect the protocol stub.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      if (this._connectionController) {
        this._connectionController.cleanup();
        this._connectionController = null;
      }
    }
  }, {
    key: '_sendChannelMsg',
    value: function _sendChannelMsg(msg) {
      if (this._filter(msg)) {
        if (this._connectionController) {
          this._connectionController.sendMessage(JSON.stringify(msg));
        }
      }
    }
  }, {
    key: '_sendStatus',
    value: function _sendStatus(value, reason) {
      var msg = {
        type: 'update',
        from: this._runtimeProtoStubURL,
        to: this._runtimeProtoStubURL + '/status',
        body: {
          value: value
        }
      };
      if (reason) {
        msg.body.desc = reason;
      }
      this._bus.postMessage(msg);
    }

    /**
     * Filter method that should be used for every messages in direction: Protostub -> MessageNode
     * @param  {Message} msg Original message from the MessageBus
     * @return {boolean} true if it's to be deliver in the MessageNode
     */

  }, {
    key: '_filter',
    value: function _filter(msg) {
      if (msg.body && msg.body.via === this._runtimeProtoStubURL) return false;
      return true;
    }

    /**
     * Method that should be used to deliver the message in direction: Protostub -> MessageBus (core)
     * @param  {Message} msg Original message from the MessageNode
     */

  }, {
    key: '_deliver',
    value: function _deliver(msg) {
      if (!msg.body) msg.body = {};

      msg.body.via = this._runtimeProtoStubURL;
      this._bus.postMessage(msg);
    }
  }]);

  return P2PRequesterStub;
}();

function activate(url, bus, config) {
  return {
    name: 'P2PRequesterStub',
    instance: new P2PRequesterStub(url, bus, config)
  };
}
module.exports = exports['default'];

},{"./ConnectionController":12,"service-framework/dist/Syncher":2}]},{},[13])(13)
});