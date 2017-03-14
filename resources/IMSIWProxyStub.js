(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = activate;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var domain = 'rethink-project.eu';

/**
 * Identity Provider Proxy Protocol Stub
 */

var IMSIWProxyStub = function () {

	/**
  * Constructor of the IdpProxy Stub
  * The constructor add a listener in the messageBus received and start a web worker with the received idpProxy
  *
  * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
  * @param  {Message.Message}                           busPostMessage     configuration
  * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
  */
	function IMSIWProxyStub(runtimeProtoStubURL, bus, config) {
		var _this = this;

		_classCallCheck(this, IMSIWProxyStub);

		this.runtimeProtoStubURL = runtimeProtoStubURL;
		this.messageBus = bus;
		this.config = config;

		this.messageBus.addListener('*', function (msg) {
			//TODO add the respective listener
			if (msg.to === 'domain-idp://' + domain) {
				_this.requestToIdp(msg);
			}
		});
	}

	/**
  * Function that see the intended method in the message received and call the respective function
  *
  * @param {message}  message received in the messageBus
  */


	_createClass(IMSIWProxyStub, [{
		key: 'requestToIdp',
		value: function requestToIdp(msg) {
			var _this2 = this;

			var params = msg.body.params;

			switch (msg.body.method) {
				case 'generateAssertion':
					this.generateAssertion(params.contents, params.origin, params.usernameHint).then(function (value) {
						return _this2.replyMessage(msg, value);
					}).catch(function (error) {
						return _this2.replyMessage(msg, error);
					});
					break;
				case 'validateAssertion':
					this.replyMessage(msg, { identity: 'identity@idp.com', contents: 'content' });
					break;
				default:
					break;
			}
		}
	}, {
		key: 'generateAssertion',
		value: function generateAssertion(contents, origin, hint) {
			var _this3 = this;

			console.log('contents->', contents);
			console.log('origin->', origin);
			console.log('hint->', hint);

			return new Promise(function (resolve, reject) {

				//the hint field contains the information obtained after the user authentication
				// if the hint content is not present, then rejects the value with the URL to open the page to authenticate the user
				if (!hint) {
					var requestUrl = 'https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&state=%2Fprofile&redirect_uri=' + location.protocol + '//' + location.hostname + '&response_type=token&client_id=808329566012-tqr8qoh111942gd2kg007t0s8f277roi.apps.googleusercontent.com';
					console.log('first url ', requestUrl, 'done');
					reject({ name: 'IdPLoginError', loginUrl: requestUrl });
				} else {
					(function () {
						var accessToken = _this3._urlParser(hint, 'access_token');
						fetch('https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + accessToken).then(function (res_user) {
							return res_user.json();
						}).then(function (body) {
							var infoToken = { picture: body.picture, email: body.email, family_name: body.family_name, given_name: body.given_name };
							var assertion = btoa(JSON.stringify({ tokenID: accessToken, email: body.email, id: body.id }));
							var toResolve = { assertion: assertion, idp: { domain: domain, protocol: 'OAuth 2.0' }, infoToken: infoToken, interworking: { access_token: accessToken, domain: domain } };
							console.log('RESOLVING THIS OBJECT', toResolve);
							resolve(toResolve);
						}).catch(reject);
					})();
				}
			});
		}
	}, {
		key: '_urlParser',
		value: function _urlParser(url, name) {
			name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
			var regexS = '[\\#&?]' + name + '=([^&#]*)';
			var regex = new RegExp(regexS);
			var results = regex.exec(url);
			if (results === null) return '';else return results[1];
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
			var message = { id: msg.id, type: 'response', to: msg.from, from: msg.to, body: { code: 200, value: value } };

			this.messageBus.postMessage(message);
		}
	}]);

	return IMSIWProxyStub;
}();

/**
 * To activate this protocol stub, using the same method for all protostub.
 * @param  {URL.RuntimeURL}                            runtimeProtoStubURL runtimeProtoSubURL
 * @param  {Message.Message}                           busPostMessage     configuration
 * @param  {ProtoStubDescriptor.ConfigurationDataList} configuration      configuration
 * @return {Object} Object with name and instance of ProtoStub
 */


function activate(url, bus, config) {
	return {
		name: 'IMSIWProxyStub',
		instance: new IMSIWProxyStub(url, bus, config)
	};
}
module.exports = exports['default'];

},{}]},{},[1])(1)
});