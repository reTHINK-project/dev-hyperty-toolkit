!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define("activate",[],o):"object"==typeof exports?exports.activate=o():e.activate=o()}("undefined"!=typeof self?self:this,function(){return function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,o,t){return{name:"EdpIdpProxyProtoStub",instance:new f(e,o,t)}};var n=t(1),r=t(2),s=t(3);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,o){return!o||"object"!==i(o)&&"function"!=typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,o){return(u=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}var f=function(e){function o(e,t,s){return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),s.domain="edpdistribuicao.pt",s.idpUrl="domain-idp://edpdistribuicao.pt",s.idpProxy=n.a,s.idpInfo=r.d,s.apiInfo=r.d,s.authEndpoint=r.c,s.accessTokenInput=r.b,s.accessTokenEndpoint=r.c,s.accessTokenErrorMsg=r.a,c(this,a(o).call(this,e,t,s))}return function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&u(e,o)}(o,s["a"]),o}()},function(e,o,t){"use strict";t.d(o,"a",function(){return i});var n,r;location.protocol,location.hostname,""!==location.port&&location.port;function s(e,o){o=o.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\#&?]"+o+"=([^&#]*)").exec(e);return null!==t&&t[1]}var i={getAccessTokenAuthorisationEndpoint:function(e,o){return console.log("[Edp.IdpProxy.getAccessTokenAuthorisationEndpoint:config]",e),console.log("[Edp.IdpProxy.getAccessTokenAuthorisationEndpoint:resources]",o),r=e.authEndpoint,new Promise(function(e,t){e(r(o))},function(e){reject(e)})},getAccessToken:function(e,o,t){return console.log("[OIDC.getAccessToken:config]",e),console.log("[OIDC.getAccessToken:login]",t),e.accessTokenEndpoint,n=e.domain,new Promise(function(r,i){var c="true"===s(t,"isValid"),a="true"===s(t,"consent");if(a&c){var u=a,f=31536e5+Math.floor(Date.now()/1e3);r(function(e,o,t,r,s){var i={domain:n,resources:e,accessToken:o,expires:t,input:r};return s&&(i.refresh=s),i}(o,u,f,t))}else i(e.accessTokenErrorMsg(c,a))},function(e){reject(e)})}}},function(e,o,t){"use strict";t.d(o,"d",function(){return r}),o.c=function(e){return r.authorisationEndpoint+"client_id="+e+"&redirect_uri="+n},o.b=function(e){return{info:e}},o.a=function(e,o){return e?r.consentErroMsg:r.invalidCPEErroMsg};var n=location.protocol+"//"+location.hostname+(""!==location.port?":"+location.port:""),r={authorisationEndpoint:"https://fe-dot-online-dist-edp-pre.appspot.com/sharing-cities/login?",revokeEndpoint:"https://fe-dot-online-dist-edp-pre.appspot.com/sharing-cities/revoke?",domain:"edpdistribuicao.pt",invalidCPEErroMsg:"Lamentamos mas o CPE indicado não está localizado no Concelho de Lisboa",consentErroMsg:"Não deu consentimento para disponibilizar os seus dados de consumo de energia eléctrica"}},function(e,o,t){"use strict";function n(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r,s,i,c=function(){function e(){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("[AbstractIdpProxy] constructor")}return function(e,o,t){o&&n(e.prototype,o),t&&n(e,t)}(e,[{key:"_init",value:function(e,o,t){var n=this;n.runtimeProtoStubURL=e,n.messageBus=o,n.config=t,r=t.idpProxy,s=t.convertUserProfile,i=t.accessTokenInput,n.messageBus.addListener("*",function(e){e.to===t.idpUrl&&n.requestToIdp(e)}),n._sendStatus("created")}},{key:"requestToIdp",value:function(e){var o=this,t=e.body.params;switch(console.info("[AbstractIdpProxyProtoStub] receiving request: ",e),e.body.method){case"generateAssertion":r.generateAssertion(o.config,t.contents,t.origin,t.usernameHint).then(function(t){t.userProfile=s(t.userProfile),o.replyMessage(e,t)},function(t){o.replyMessage(e,t,401)});break;case"validateAssertion":r.validateAssertion(o.config,t.assertion,t.origin).then(function(t){o.replyMessage(e,t)},function(t){o.replyMessage(e,t)});break;case"refreshAssertion":r.refreshAssertion(t.identity).then(function(t){o.replyMessage(e,t)},function(t){o.replyMessage(e,t,value,401)});break;case"getAccessTokenAuthorisationEndpoint":r.getAccessTokenAuthorisationEndpoint(o.config,t.resources).then(function(t){o.replyMessage(e,t)},function(t){o.replyMessage(e,t,401)});break;case"getAccessToken":r.getAccessToken(o.config,t.resources,t.login).then(function(t){console.info("OIDC.getAccessToken result: ",t),t.input=i(t.input),o.replyMessage(e,t)},function(t){o.replyMessage(e,t,401)});break;case"refreshAccessToken":r.refreshAccessToken(o.config,t.token).then(function(t){console.info("OIDC.refreshAccessToken result: ",t),o.replyMessage(e,t)},function(t){o.replyMessage(e,t,401)});break;case"revokeAccessToken":r.revokeAccessToken(o.config,t.token).then(function(t){console.info("OIDC.revokeAccessToken result: ",t),o.replyMessage(e,t)},function(t){o.replyMessage(e,t,401)})}}},{key:"replyMessage",value:function(e,o){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,n={id:e.id,type:"response",to:e.from,from:e.to,body:{code:t}};t<300?n.body.value=o:n.body.description=o,console.log("[AbstractIdpProxyProtoStub.replyMessage] ",n),this.messageBus.postMessage(n)}},{key:"_sendStatus",value:function(e,o){console.log("[AbstractIdpProxyProtoStub.sendStatus] ",e),this._state=e;var t={type:"update",from:this.runtimeProtoStubURL,to:this.runtimeProtoStubURL+"/status",body:{value:e}};o&&(t.body.desc=o),this.messageBus.postMessage(t)}}]),e}();o.a=c}]).default});