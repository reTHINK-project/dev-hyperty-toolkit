!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("activate",[],t):"object"==typeof exports?exports.activate=t():e.activate=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){return{name:"MicrosoftProxyStub",instance:new a(e,t,n)}};var r={clientID:"000000004C18391F",redirectURI:location.origin,tokenEndpoint:"https://login.live.com/oauth20_authorize.srf?",type:"token",scope:"wl.signin,wl.basic",mode:"fragment"},i=function(e,t){return new Promise(function(t,n){var o=JSON.parse(atob(e));t({identity:o.email,contents:o.nonce})})},s=function(e,t,n){return new Promise(function(t,o){if(n){var i=n.split("/")[3].split("."),s=JSON.parse(atob(i[1]));t({assertion:i[1],idp:{domain:"microsoft.com",protocol:"OIDC"},infoToken:s})}else{o({name:"IdPLoginError",loginUrl:r.tokenEndpoint+"response_type="+r.type+"&client_id="+r.clientID+"&scope="+r.scope+"&nonce="+e+"&response_mode="+r.mode+"&redirect_uri="+r.redirectURI})}})},a=function(){function e(t,n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=this;r.runtimeProtoStubURL=t,r.messageBus=n,r.config=o,r.messageBus.addListener("*",function(e){"domain-idp://microsoft.com"===e.to&&r.requestToIdp(e)}),r._sendStatus("created")}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"requestToIdp",value:function(e){var t=this,n=e.body.params;switch(e.body.method){case"generateAssertion":s(n.contents,n.origin,n.usernameHint).then(function(n){t.replyMessage(e,n)},function(n){t.replyMessage(e,n)});break;case"validateAssertion":i(n.assertion,n.origin).then(function(n){t.replyMessage(e,n)},function(n){t.replyMessage(e,n)})}}},{key:"replyMessage",value:function(e,t){var n={id:e.id,type:"response",to:e.from,from:e.to,body:{code:200,value:t}};this.messageBus.postMessage(n)}},{key:"_sendStatus",value:function(e,t){console.log("[GoogleIdpProxy.sendStatus] ",e),this._state=e;var n={type:"update",from:this.runtimeProtoStubURL,to:this.runtimeProtoStubURL+"/status",body:{value:e}};t&&(n.body.desc=t),this.messageBus.postMessage(n)}}]),e}()}]).default});