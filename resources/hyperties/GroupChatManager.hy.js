!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("activate",[],r):"object"==typeof exports?exports.activate=r():e.activate=r()}("undefined"!=typeof self?self:this,function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1);function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,r,t){r&&a(e.prototype,r),t&&a(e,t)}(e,[{key:"_start",value:function(e,r,t,n){var a=this;a._factory=n,a._syncher=n.createSyncher(e,r,t),a._manager=n.createChatManager(e,r,t,a._syncher),a.discovery=a._manager.discovery,a.identityManager=a._manager.identityManager,a.search=a._manager.search,a._domain=a._manager._domain,a._myUrl=e,a.hypertyURL=e,a._runtimeURL=t.runtimeURL,a._bus=r,a._backup=!!t.hasOwnProperty("backup")&&t.backup,a._heartbeat=t.hasOwnProperty("heartbeat")?t.heartbeat:void 0,a._syncher.onNotification(function(e){console.log("[GroupChatManager] onNotification:",e),a.processNotification(e)}),a._resumeReporters(),a._resumeObservers()}},{key:"register",value:function(e,r,t){var n={userProfile:{guid:t.guid,userURL:t.userURL,info:{code:r}}},a={type:"forward",to:e,from:this.hypertyURL,identity:n,body:{type:"create",from:this.hypertyURL,identity:n}};this._bus.postMessage(a)}},{key:"_getRegisteredUser",value:function(){var e=this;return new Promise(function(r,t){e._manager.currentIdentity?r(e._manager.currentIdentity):e._manager.identityManager.discoverUserRegistered().then(function(e){console.log("[GroupChatManager] GET MY IDENTITY:",e),r(e)}).catch(function(e){console.error("[GroupChatManager] ERROR:",e),t(e)})})}},{key:"_resumeReporters",value:function(){var e=this,r=this;r._syncher.resumeReporters({store:!0}).then(function(t){var n=Object.keys(t);n.length>0&&r._getRegisteredUser().then(function(a){n.forEach(function(n){console.log("[GroupChatManager.resumeReporter]: ",n);var o=r._factory.createChatController(r._syncher,r.discovery,r._domain,r.search,a,r._manager);o.dataObjectReporter=t[n],e._manager._reportersControllers[n]=o,r._resumeInterworking(o.dataObjectReporter),console.log("[GroupChatManager] chatController invitationsHandler: ",o.invitationsHandler),o.invitationsHandler.resumeDiscoveries(r._manager.discovery,o.dataObjectReporter)}),r._onResumeReporter&&r._onResumeReporter(e._manager._reportersControllers)})}).catch(function(e){console.info("[GroupChatManager.resumeReporters] :",e)})}},{key:"_resumeObservers",value:function(){var e=this,r=this;r._syncher.resumeObservers({store:!0}).then(function(t){console.log("[GroupChatManager] resuming observers : ",t,r,r._onResume);var n=Object.keys(t);n.length>0&&r._getRegisteredUser().then(function(a){n.forEach(function(n){console.log("[GroupChatManager].syncher.resumeObserver: ",n);var o=t[n],i=r._factory.createChatController(r._syncher,r._manager.discovery,r._domain,r.search,a,r._manager);i.dataObjectObserver=o,e._manager._observersControllers[n]=i;var s=r._factory.createRegistrationStatus(o.url,r._runtimeURL,r._myUrl,r._bus);!function e(r,t,n){var a=n;r.sync().then(function(n){n||a.onLive(t,function(){a.unsubscribeLive(t),e(r,t,a)})})}(o,r._myUrl,s)}),r._onResumeObserver&&r._onResumeObserver(e._manager._observersControllers)})}).catch(function(e){console.info("[GroupChatManager] Resume Observer | ",e)})}},{key:"_resumeInterworking",value:function(e){var r=this;if(e.data.participants){var t=e.data.participants,n=e.url,a=e.schema;console.log("[GroupChatManager._resumeInterworking for] ",t),Object.keys(t).forEach(function(o){var i=t[o].identity.userProfile.userURL.split("://");if("user"!==i[0]){console.log("[GroupChatManager._resumeInterworking for] ",o),i=i[0]+"://"+i[1].split("/")[1];var s={type:"create",from:r._myUrl,to:i,body:{resource:n,schema:a,value:e.metadata}};r._bus.postMessage(s,function(){})}})}}},{key:"create",value:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.backup=this._backup,t.heartbeat=this._heartbeat,console.log("[GroupChatManager.create] extra: ",t),this._manager.create(e,r,t)}},{key:"onInvitation",value:function(e){return this._manager.onInvitation(e)}},{key:"onResumeReporter",value:function(e){this._onResumeReporter=e}},{key:"onResumeObserver",value:function(e){this._onResumeObserver=e}},{key:"join",value:function(e){return this._manager.join(e)}},{key:"myIdentity",value:function(e){return console.log("[GroupChatManager.myIdentity] ",e),this._manager.myIdentity(e)}},{key:"processNotification",value:function(e){return this._manager.processNotification(e)}},{key:"onInvitation",value:function(e){return this._manager.onInvitation(e)}},{key:"name",get:function(){return n.a.name}},{key:"descriptor",get:function(){return console.log("[Connector.getDescriptor]"),n.a}},{key:"runtimeHypertyURL",get:function(){return this.hypertyURL}}]),e}();r.default=o},function(e,r,t){"use strict";t.d(r,"a",function(){return n});var n={name:"GroupChatManager",language:"javascript",signature:"",configuration:{},hypertyType:["chat"],constraints:{browser:!0},dataObjects:["https://catalogue.%domain%/.well-known/dataschema/Communication"]}}]).default});