(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = activate;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var identities = {};
var nIdentity = 0;

var googleInfo = {
  clientSecret: 'Xx4rKucb5ZYTaXlcZX9HLfZW',
  clientID: '808329566012-tqr8qoh111942gd2kg007t0s8f277roi.apps.googleusercontent.com',
  redirectURI: location.origin,
  issuer: 'https://accounts.google.com',
  tokenEndpoint: 'https://www.googleapis.com/oauth2/v4/token?',
  jwksUri: 'https://www.googleapis.com/oauth2/v3/certs?',
  authorisationEndpoint: 'https://accounts.google.com/o/oauth2/auth?',
  userinfo: 'https://www.googleapis.com/oauth2/v3/userinfo?access_token=',
  tokenInfo: 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=',
  accessType: 'offline',
  type: 'code token id_token',
  scope: 'openid%20email%20profile',
  state: 'state'
};

//function to parse the query string in the given URL to obatin certain values
function urlParser(url, name) {
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  var regexS = '[\\#&?]' + name + '=([^&#]*)';
  var regex = new RegExp(regexS);
  var results = regex.exec(url);
  if (results === null) return '';else return results[1];
}

function sendHTTPRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ('withCredentials' in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != 'undefined') {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // Otherwise, CORS is not supported by the browser.
    xhr = null;
  }
  return new Promise(function (resolve, reject) {
    if (xhr) {
      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var info = JSON.parse(xhr.responseText);
            resolve(info);
          } else if (xhr.status === 400) {
            reject('There was an error processing the token');
          } else {
            reject('something else other than 200 was returned');
          }
        }
      };
      xhr.send();
    } else {
      reject('CORS not supported');
    }
  });
}

/**
* Function to exchange the code received to the id Token, access token and a refresh token
*
*/
var exchangeCode = function exchangeCode(code) {
  var i = googleInfo;

  var URL = i.tokenEndpoint + 'code=' + code + '&client_id=' + i.clientID + '&client_secret=' + i.clientSecret + '&redirect_uri=' + i.redirectURI + '&grant_type=authorization_code';

  //let URL = = i.tokenEndpoint + 'client_id=' + i.clientID + '&client_secret=' + i.clientSecret + '&refresh_token=' + code + '&grant_type=refresh_token';

  return new Promise(function (resolve, reject) {
    sendHTTPRequest('POST', URL).then(function (info) {
      resolve(info);
    }, function (error) {
      reject(error);
    });
  });
};

/**
* Identity Provider Proxy
*/
var IdpProxy = {

  /**
  * Function to validate an identity Assertion received
  * TODO add details of the implementation, and improve the implementation
  *
  * @param  {assertion}    Identity Assertion to be validated
  * @param  {origin}       Origin parameter that identifies the origin of the RTCPeerConnection
  * @return {Promise}      Returns a promise with the identity assertion validation result
  */
  validateAssertion: function validateAssertion(assertion, origin) {
    return new Promise(function (resolve, reject) {
      var i = googleInfo;

      var decodedContent = atob(assertion);
      var content = JSON.parse(decodedContent);
      sendHTTPRequest('GET', i.tokenInfo + content.tokenID).then(function (result) {

        if (JSON.stringify(result) === JSON.stringify(content.tokenIDJSON)) {
          resolve({ identity: content.tokenIDJSON.email, contents: content.tokenIDJSON });
        } else {
          reject('invalid');
        }
      }, function (err) {

        reject(err);
      });
    });
  },

  /**
  * Function to generate an identity Assertion
  * TODO add details of the implementation, and improve implementation
  *
  * @param  {contents} The contents includes information about the identity received
  * @param  {origin} Origin parameter that identifies the origin of the RTCPeerConnection
  * @param  {usernameHint} optional usernameHint parameter
  * @return {Promise} returns a promise with an identity assertion
  */
  generateAssertion: function generateAssertion(contents, origin, hint) {
    var i = googleInfo;

    //start the login phase
    //TODO later should be defined a better approach
    return new Promise(function (resolve, reject) {
      if (!contents) {
        /*try {
          if (window) {
            resolve('url');
          }
        } catch (error) {*/

        var requestUrl = i.authorisationEndpoint + 'scope=' + i.scope + '&client_id=' + i.clientID + '&redirect_uri=' + i.redirectURI + '&response_type=' + i.type + '&state=' + i.state + '&access_type=' + i.accessType;

        reject({ name: 'IdPLoginError', loginUrl: requestUrl });

        //  }
      } else {
          // the request have already been made, so idpPRoxy will exchange the tokens along to the idp, to obtain the information necessary
          var accessToken = urlParser(contents, 'access_token');
          var idToken = urlParser(contents, 'id_token');
          var code = urlParser(contents, 'code');

          exchangeCode(code).then(function (value) {

            //obtain information about the user
            var infoTokenURL = i.userinfo + value.access_token;
            sendHTTPRequest('GET', infoTokenURL).then(function (infoToken) {

              var identityBundle = { accessToken: value.access_token, idToken: value.id_token, refreshToken: value.refresh_token, tokenType: value.token_type, infoToken: infoToken };

              var idTokenURL = i.tokenInfo + value.id_token;

              //obtain information about the user idToken
              sendHTTPRequest('GET', idTokenURL).then(function (idToken) {

                identityBundle.tokenIDJSON = idToken;
                identityBundle.expires = idToken.exp;
                identityBundle.email = idToken.email;

                var assertion = btoa(JSON.stringify({ tokenID: value.id_token, tokenIDJSON: idToken }));
                var idpBundle = { domain: 'google.com', protocol: 'OIDC' };

                //TODO delete later the field infoToken, and delete the need in the example
                var returnValue = { assertion: assertion, idp: idpBundle, info: identityBundle, infoToken: infoToken };

                identities[nIdentity] = returnValue;
                ++nIdentity;

                resolve(returnValue);
              }, function (e) {

                reject(e);
              });
            }, function (error) {

              reject(error);
            });
          }, function (err) {

            reject(err);
          });
        }
    });
  }
};

/**
* Identity Provider Proxy Protocol Stub
*/

var IdpProxyProtoStub = (function () {

  /**
  * Constructor of the IdpProxy Stub
  * The constructor add a listener in the messageBus received and start a web worker with the idpProxy received
  *
  * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
  * @param  {Message.Message}                           busPostMessage     configuration
  * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
  */

  function IdpProxyProtoStub(runtimeProtoStubURL, bus, config) {
    _classCallCheck(this, IdpProxyProtoStub);

    var _this = this;
    _this.runtimeProtoStubURL = runtimeProtoStubURL;
    _this.messageBus = bus;
    _this.config = config;

    _this.messageBus.addListener('*', function (msg) {
      if (msg.to === 'domain://google.com') {

        _this.requestToIdp(msg);
      }
    });
  }

  // export default IdpProxyProtoStub;

  /**
   * To activate this protocol stub, using the same method for all protostub.
   * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
   * @param  {Message.Message}                           busPostMessage     configuration
   * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
   * @return {Object} Object with name and instance of ProtoStub
   */

  /**
  * Function that see the intended method in the message received and call the respective function
  *
  * @param {message}  message received in the messageBus
  */

  _createClass(IdpProxyProtoStub, [{
    key: 'requestToIdp',
    value: function requestToIdp(msg) {
      var _this = this;
      var params = msg.body.params;

      switch (msg.body.method) {
        case 'generateAssertion':
          IdpProxy.generateAssertion(params.contents, params.origin, params.usernameHint).then(function (value) {
            _this.replyMessage(msg, value);
          }, function (error) {
            _this.replyMessage(msg, error);
          });
          break;
        case 'validateAssertion':
          IdpProxy.validateAssertion(params.assertion, params.origin).then(function (value) {
            _this.replyMessage(msg, value);
          }, function (error) {
            _this.replyMessage(msg, error);
          });
          break;
        default:
          break;
      }
    }

    /**
    * This function receives a message and a value. It replies the value to the sender of the message received
    *
    * @param  {message}   message received
    * @param  {value}     value to include in the new message to send
    */
  }, {
    key: 'replyMessage',
    value: function replyMessage(msg, value) {
      var _this = this;

      var message = { id: msg.id, type: 'response', to: msg.from, from: msg.to,
        body: { code: 200, value: value } };

      _this.messageBus.postMessage(message);
    }
  }]);

  return IdpProxyProtoStub;
})();

function activate(url, bus, config) {
  return {
    name: 'IdpProxyProtoStub',
    instance: new IdpProxyProtoStub(url, bus, config)
  };
}

module.exports = exports['default'];

},{}]},{},[1])(1)
});