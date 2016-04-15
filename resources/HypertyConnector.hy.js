(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
// version: 0.1.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.HypertyDiscovery=e()}}(function(){return function e(t,r,n){function o(c,s){if(!r[c]){if(!t[c]){var u="function"==typeof require&&require;if(!s&&u)return u(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[c]={exports:{}};t[c][0].call(f.exports,function(e){var r=t[c][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[c].exports}for(var i="function"==typeof require&&require,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":9}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":10}],3:[function(e,t,r){t.exports=e("./classCallCheck.js")},{"./classCallCheck.js":4}],4:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],5:[function(e,t,r){t.exports=e("./createClass.js")},{"./createClass.js":6}],6:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"babel-runtime/core-js/object/define-property":1}],7:[function(e,t,r){t.exports=e("./interopRequireDefault.js")},{"./interopRequireDefault.js":8}],8:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e){return e&&e.__esModule?e:{"default":e}}},{}],9:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":18,"../../modules/es6.object.define-property":73}],10:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":18,"../modules/es6.object.to-string":74,"../modules/es6.promise":75,"../modules/es6.string.iterator":76,"../modules/web.dom.iterable":77}],11:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],12:[function(e,t,r){t.exports=function(){}},{}],13:[function(e,t,r){t.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},{}],14:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":35}],15:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,c){var s,u=n(t),a=o(u.length),f=i(c,a);if(e&&r!=r){for(;a>f;)if(s=u[f++],s!=s)return!0}else for(;a>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},{"./_to-index":63,"./_to-iobject":65,"./_to-length":66}],16:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=c(t=Object(e),o))?r:i?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},{"./_cof":17,"./_wks":70}],17:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],18:[function(e,t,r){var n=t.exports={version:"2.2.2"};"number"==typeof __e&&(__e=n)},{}],19:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":11}],20:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],21:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":25}],22:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":27,"./_is-object":35}],23:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],24:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),c=e("./_hide"),s="prototype",u=function(e,t,r){var a,f,_,l=e&u.F,p=e&u.G,d=e&u.S,v=e&u.P,h=e&u.B,y=e&u.W,b=p?o:o[t]||(o[t]={}),m=b[s],g=p?n:d?n[t]:(n[t]||{})[s];p&&(r=t);for(a in r)f=!l&&g&&void 0!==g[a],f&&a in b||(_=f?g[a]:r[a],b[a]=p&&"function"!=typeof g[a]?r[a]:h&&f?i(_,n):y&&g[a]==_?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[s]=e[s],t}(_):v&&"function"==typeof _?i(Function.call,_):_,v&&((b.virtual||(b.virtual={}))[a]=_,e&u.R&&m&&!m[a]&&c(m,a,_)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},{"./_core":18,"./_ctx":19,"./_global":27,"./_hide":29}],25:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],26:[function(e,t,r){var n=e("./_ctx"),o=e("./_iter-call"),i=e("./_is-array-iter"),c=e("./_an-object"),s=e("./_to-length"),u=e("./core.get-iterator-method");t.exports=function(e,t,r,a,f){var _,l,p,d=f?function(){return e}:u(e),v=n(r,a,t?2:1),h=0;if("function"!=typeof d)throw TypeError(e+" is not iterable!");if(i(d))for(_=s(e.length);_>h;h++)t?v(c(l=e[h])[0],l[1]):v(e[h]);else for(p=d.call(e);!(l=p.next()).done;)o(p,v,l.value,t)}},{"./_an-object":14,"./_ctx":19,"./_is-array-iter":34,"./_iter-call":36,"./_to-length":66,"./core.get-iterator-method":71}],27:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],28:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],29:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":21,"./_object-dp":45,"./_property-desc":52}],30:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":27}],31:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":21,"./_dom-create":22,"./_fails":25}],32:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],33:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":17}],34:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":41,"./_wks":70}],35:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],36:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var c=e["return"];throw void 0!==c&&n(c.call(e)),i}}},{"./_an-object":14}],37:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),c={};e("./_hide")(c,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(c,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":29,"./_object-create":44,"./_property-desc":52,"./_set-to-string-tag":57,"./_wks":70}],38:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),c=e("./_hide"),s=e("./_has"),u=e("./_iterators"),a=e("./_iter-create"),f=e("./_set-to-string-tag"),_=e("./_object-gpo"),l=e("./_wks")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",h="values",y=function(){return this};t.exports=function(e,t,r,b,m,g,j){a(r,t,b);var x,w,k,O=function(e){if(!p&&e in E)return E[e];switch(e){case v:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},M=t+" Iterator",P=m==h,S=!1,E=e.prototype,T=E[l]||E[d]||m&&E[m],A=T||O(m),C=m?P?O("entries"):A:void 0,L="Array"==t?E.entries||T:T;if(L&&(k=_(L.call(new e)),k!==Object.prototype&&(f(k,M,!0),n||s(k,l)||c(k,l,y))),P&&T&&T.name!==h&&(S=!0,A=function(){return T.call(this)}),n&&!j||!p&&!S&&E[l]||c(E,l,A),u[t]=A,u[M]=y,m)if(x={values:P?A:O(h),keys:g?A:O(v),entries:C},j)for(w in x)w in E||i(E,w,x[w]);else o(o.P+o.F*(p||S),t,x);return x}},{"./_export":24,"./_has":28,"./_hide":29,"./_iter-create":37,"./_iterators":41,"./_library":42,"./_object-gpo":48,"./_redefine":54,"./_set-to-string-tag":57,"./_wks":70}],39:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],c=i[n]();c.next=function(){return{done:r=!0}},i[n]=function(){return c},e(i)}catch(s){}return r}},{"./_wks":70}],40:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],41:[function(e,t,r){t.exports={}},{}],42:[function(e,t,r){t.exports=!0},{}],43:[function(e,t,r){var n,o,i,c=e("./_global"),s=e("./_task").set,u=c.MutationObserver||c.WebKitMutationObserver,a=c.process,f=c.Promise,_="process"==e("./_cof")(a),l=function(){var e,t;for(_&&(e=a.domain)&&e.exit();n;)t=n.fn,t(),n=n.next;o=void 0,e&&e.enter()};if(_)i=function(){a.nextTick(l)};else if(u){var p=!0,d=document.createTextNode("");new u(l).observe(d,{characterData:!0}),i=function(){d.data=p=!p}}else i=f&&f.resolve?function(){f.resolve().then(l)}:function(){s.call(c,l)};t.exports=function(e){var t={fn:e,next:void 0};o&&(o.next=t),n||(n=t,i()),o=t}},{"./_cof":17,"./_global":27,"./_task":62}],44:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),c=e("./_shared-key")("IE_PROTO"),s=function(){},u="prototype",a=function(){var t,r=e("./_dom-create")("iframe"),n=i.length,o=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),a=t.F;n--;)delete a[u][i[n]];return a()};t.exports=Object.create||function(e,t){var r;return null!==e?(s[u]=n(e),r=new s,s[u]=null,r[c]=e):r=a(),void 0===t?r:o(r,t)}},{"./_an-object":14,"./_dom-create":22,"./_enum-bug-keys":23,"./_html":30,"./_object-dps":46,"./_shared-key":58}],45:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),c=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return c(e,t,r)}catch(s){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":14,"./_descriptors":21,"./_ie8-dom-define":31,"./_to-primitive":68}],46:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,c=i(t),s=c.length,u=0;s>u;)n.f(e,r=c[u++],t[r]);return e}},{"./_an-object":14,"./_descriptors":21,"./_object-dp":45,"./_object-keys":50}],47:[function(e,t,r){var n=e("./_object-pie"),o=e("./_property-desc"),i=e("./_to-iobject"),c=e("./_to-primitive"),s=e("./_has"),u=e("./_ie8-dom-define"),a=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?a:function(e,t){if(e=i(e),t=c(t,!0),u)try{return a(e,t)}catch(r){}return s(e,t)?o(!n.f.call(e,t),e[t]):void 0}},{"./_descriptors":21,"./_has":28,"./_ie8-dom-define":31,"./_object-pie":51,"./_property-desc":52,"./_to-iobject":65,"./_to-primitive":68}],48:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},{"./_has":28,"./_shared-key":58,"./_to-object":67}],49:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),c=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,s=o(e),u=0,a=[];for(r in s)r!=c&&n(s,r)&&a.push(r);for(;t.length>u;)n(s,r=t[u++])&&(~i(a,r)||a.push(r));return a}},{"./_array-includes":15,"./_has":28,"./_shared-key":58,"./_to-iobject":65}],50:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":23,"./_object-keys-internal":49}],51:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],52:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],53:[function(e,t,r){var n=e("./_hide");t.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},{"./_hide":29}],54:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":29}],55:[function(e,t,r){var n=e("./_is-object"),o=e("./_an-object"),i=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,n){try{n=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),n(t,[]),r=!(t instanceof Array)}catch(o){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:n(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":14,"./_ctx":19,"./_is-object":35,"./_object-gopd":47}],56:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_object-dp"),c=e("./_descriptors"),s=e("./_wks")("species");t.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];c&&t&&!t[s]&&i.f(t,s,{configurable:!0,get:function(){return this}})}},{"./_core":18,"./_descriptors":21,"./_global":27,"./_object-dp":45,"./_wks":70}],57:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":28,"./_object-dp":45,"./_wks":70}],58:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":59,"./_uid":69}],59:[function(e,t,r){var n=e("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":27}],60:[function(e,t,r){var n=e("./_an-object"),o=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,c=n(e).constructor;return void 0===c||void 0==(r=n(c)[i])?t:o(r)}},{"./_a-function":11,"./_an-object":14,"./_wks":70}],61:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,c,s=String(o(t)),u=n(r),a=s.length;return 0>u||u>=a?e?"":void 0:(i=s.charCodeAt(u),55296>i||i>56319||u+1===a||(c=s.charCodeAt(u+1))<56320||c>57343?e?s.charAt(u):i:e?s.slice(u,u+2):(i-55296<<10)+(c-56320)+65536)}}},{"./_defined":20,"./_to-integer":64}],62:[function(e,t,r){var n,o,i,c=e("./_ctx"),s=e("./_invoke"),u=e("./_html"),a=e("./_dom-create"),f=e("./_global"),_=f.process,l=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=0,h={},y="onreadystatechange",b=function(){var e=+this;if(h.hasOwnProperty(e)){var t=h[e];delete h[e],t()}},m=function(e){b.call(e.data)};l&&p||(l=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return h[++v]=function(){s("function"==typeof e?e:Function(e),t)},n(v),v},p=function(e){delete h[e]},"process"==e("./_cof")(_)?n=function(e){_.nextTick(c(b,e,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=m,n=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",m,!1)):n=y in a("script")?function(e){u.appendChild(a("script"))[y]=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(c(b,e,1),0)}),t.exports={set:l,clear:p}},{"./_cof":17,"./_ctx":19,"./_dom-create":22,"./_global":27,"./_html":30,"./_invoke":32}],63:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return e=n(e),0>e?o(e+t,0):i(e,t)}},{"./_to-integer":64}],64:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],65:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":20,"./_iobject":33}],66:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":64}],67:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":20}],68:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":35}],69:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],70:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,c="function"==typeof i;t.exports=function(e){return n[e]||(n[e]=c&&i[e]||(c?i:o)("Symbol."+e))}},{"./_global":27,"./_shared":59,"./_uid":69}],71:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||i[n(e)]:void 0}},{"./_classof":16,"./_core":18,"./_iterators":41,"./_wks":70}],72:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),c=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=c(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":12,"./_iter-define":38,"./_iter-step":40,"./_iterators":41,"./_to-iobject":65}],73:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":21,"./_export":24,"./_object-dp":45}],74:[function(e,t,r){},{}],75:[function(e,t,r){"use strict";var n,o,i,c=e("./_library"),s=e("./_global"),u=e("./_ctx"),a=e("./_classof"),f=e("./_export"),_=e("./_is-object"),l=(e("./_an-object"),e("./_a-function")),p=e("./_an-instance"),d=e("./_for-of"),v=(e("./_set-proto").set,e("./_species-constructor")),h=e("./_task").set,y=e("./_microtask"),b="Promise",m=s.TypeError,g=s.process,j=s[b],g=s.process,x="process"==a(g),w=function(){},k=!!function(){try{var t=j.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(w,w)};return(x||"function"==typeof PromiseRejectionEvent)&&t.then(w)instanceof r}catch(n){}}(),O=function(e,t){return e===t||e===j&&t===i},M=function(e){var t;return _(e)&&"function"==typeof(t=e.then)?t:!1},P=function(e){return O(j,e)?new S(e):new o(e)},S=o=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw m("Bad Promise constructor");t=e,r=n}),this.resolve=l(t),this.reject=l(r)},E=function(e){try{e()}catch(t){return{error:t}}},T=function(e,t){if(!e._n){e._n=!0;var r=e._c;y(function(){for(var n=e._v,o=1==e._s,i=0,c=function(t){var r,i,c=o?t.ok:t.fail,s=t.resolve,u=t.reject,a=t.domain;try{c?(o||(2==e._h&&L(e),e._h=1),c===!0?r=n:(a&&a.enter(),r=c(n),a&&a.exit()),r===t.promise?u(m("Promise-chain cycle")):(i=M(r))?i.call(r,s,u):s(r)):u(n)}catch(f){u(f)}};r.length>i;)c(r[i++]);e._c=[],e._n=!1,t&&!e._h&&A(e)})}},A=function(e){h.call(s,function(){var t,r,n,o=e._v;if(C(e)&&(t=E(function(){x?g.emit("unhandledRejection",o,e):(r=s.onunhandledrejection)?r({promise:e,reason:o}):(n=s.console)&&n.error&&n.error("Unhandled promise rejection",o)}),e._h=x||C(e)?2:1),e._a=void 0,t)throw t.error})},C=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if(t=r[n++],t.fail||!C(t.promise))return!1;return!0},L=function(e){h.call(s,function(){var t;x?g.emit("rejectionHandled",e):(t=s.onrejectionhandled)&&t({promise:e,reason:e._v})})},R=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),T(t,!0))},D=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw m("Promise can't be resolved itself");(t=M(e))?y(function(){var n={_w:r,_d:!1};try{t.call(e,u(D,n,1),u(R,n,1))}catch(o){R.call(n,o)}}):(r._v=e,r._s=1,T(r,!1))}catch(n){R.call({_w:r,_d:!1},n)}}};k||(j=function(e){p(this,j,b,"_h"),l(e),n.call(this);try{e(u(D,this,1),u(R,this,1))}catch(t){R.call(this,t)}},n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=e("./_redefine-all")(j.prototype,{then:function(e,t){var r=P(v(this,j));return r.ok="function"==typeof e?e:!0,r.fail="function"==typeof t&&t,r.domain=x?g.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),S=function(){var e=new n;this.promise=e,this.resolve=u(D,e,1),this.reject=u(R,e,1)}),f(f.G+f.W+f.F*!k,{Promise:j}),e("./_set-to-string-tag")(j,b),e("./_set-species")(b),i=e("./_core")[b],f(f.S+f.F*!k,b,{reject:function(e){var t=P(this),r=t.reject;return r(e),t.promise}}),f(f.S+f.F*(c||!k),b,{resolve:function(e){if(e instanceof j&&O(e.constructor,this))return e;var t=P(this),r=t.resolve;return r(e),t.promise}}),f(f.S+f.F*!(k&&e("./_iter-detect")(function(e){j.all(e)["catch"](w)})),b,{all:function(e){var t=this,r=P(t),n=r.resolve,o=r.reject,i=E(function(){var r=[],i=0,c=1;d(e,!1,function(e){var s=i++,u=!1;r.push(void 0),c++,t.resolve(e).then(function(e){u||(u=!0,r[s]=e,--c||n(r))},o)}),--c||n(r)});return i&&o(i.error),r.promise},race:function(e){var t=this,r=P(t),n=r.reject,o=E(function(){d(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":11,"./_an-instance":13,"./_an-object":14,"./_classof":16,"./_core":18,"./_ctx":19,"./_export":24,"./_for-of":26,"./_global":27,"./_is-object":35,"./_iter-detect":39,"./_library":42,"./_microtask":43,"./_redefine-all":53,"./_set-proto":55,"./_set-species":56,"./_set-to-string-tag":57,"./_species-constructor":60,"./_task":62,"./_wks":70}],76:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":38,"./_string-at":61}],77:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),c=e("./_wks")("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;5>u;u++){var a=s[u],f=n[a],_=f&&f.prototype;_&&!_[c]&&o(_,c,a),i[a]=i.Array}},{"./_global":27,"./_hide":29,"./_iterators":41,"./_wks":70,"./es6.array.iterator":72}],78:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var o=e("./hyperty-discovery/HypertyDiscovery"),i=n(o);r["default"]=i["default"],t.exports=r["default"]},{"./hyperty-discovery/HypertyDiscovery":79,"babel-runtime/helpers/interop-require-default":7}],79:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/promise")["default"];Object.defineProperty(r,"__esModule",{value:!0});var c=e("../utils/utils"),s=function(){function e(t,r){o(this,e);var n=this;n.messageBus=r,n.domain=(0,c.divideURL)(t).domain,n.discoveryURL=t}return n(e,[{key:"discoverDataObjectPerName",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:"dataObject://"+e}};return new i(function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.value.url;n?e(n):t("DataObject name does not exist")})})}},{key:"discoverHypertyPerUser",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),c={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:o}};return console.log("Message: ",c,n,o),new i(function(t,n){r.messageBus.postMessage(c,function(r){console.log("message reply",r);var o=void 0,i=void 0,c=void 0,s=r.body.value;for(o in s)if(void 0!==s[o].lastModified)if(void 0===i)i=new Date(s[o].lastModified),c=o;else{var u=new Date(s[o].lastModified);i.getTime()<u.getTime()&&(i=u,c=o)}console.log("Last Hyperty: ",c,i);var a=c;if(void 0===a)return n("User Hyperty not found");var f={id:e,descriptor:s[a].descriptor,hypertyURL:a};console.log("===> hypertyDiscovery messageBundle: ",f),t(f)})})}}]),e}();r["default"]=s,t.exports=r["default"]},{"../utils/utils":80,"babel-runtime/core-js/promise":2,"babel-runtime/helpers/class-call-check":3,"babel-runtime/helpers/create-class":5}],80:[function(e,t,r){"use strict";function n(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function o(e){return e?JSON.parse(JSON.stringify(e)):void 0}Object.defineProperty(r,"__esModule",{value:!0}),r.divideURL=n,r.deepClone=o},{}]},{},[78])(78)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
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
// version: 0.1.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Syncher=e()}}(function(){return function e(t,r,n){function o(s,c){if(!r[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){Object.observe&&!Array.observe&&function(e,t){"use strict";var r=e.getNotifier,n="performChange",o="_original",i="splice",s={push:function a(e){var t=arguments,s=a[o].apply(this,t);return r(this)[n](i,function(){return{index:s-t.length,addedCount:t.length,removed:[]}}),s},unshift:function u(e){var t=arguments,s=u[o].apply(this,t);return r(this)[n](i,function(){return{index:0,addedCount:t.length,removed:[]}}),s},pop:function l(){var e=this.length,t=l[o].call(this);return this.length!==e&&r(this)[n](i,function(){return{index:this.length,addedCount:0,removed:[t]}},this),t},shift:function f(){var e=this.length,t=f[o].call(this);return this.length!==e&&r(this)[n](i,function(){return{index:0,addedCount:0,removed:[t]}},this),t},splice:function p(e,t){var s=arguments,c=p[o].apply(this,s);return(c.length||s.length>2)&&r(this)[n](i,function(){return{index:e,addedCount:s.length-2,removed:c}},this),c}};for(var c in s)s[c][o]=t.prototype[c],t.prototype[c]=s[c];t.observe=function(t,r){return e.observe(t,r,["add","update","delete",i])},t.unobserve=e.unobserve}(Object,Array)},{}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":20}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":21}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0}},{"core-js/library/fn/object/get-own-property-descriptor":22}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":23}],6:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":24}],7:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":25}],8:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":26}],9:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":27}],10:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":28}],11:[function(e,t,r){t.exports=e("./classCallCheck.js")},{"./classCallCheck.js":12}],12:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],13:[function(e,t,r){t.exports=e("./createClass.js")},{"./createClass.js":14}],14:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"babel-runtime/core-js/object/define-property":3}],15:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/object/get-prototype-of"),i=n(o),s=e("babel-runtime/core-js/object/get-own-property-descriptor"),c=n(s);r["default"]=function a(e,t,r){null===e&&(e=Function.prototype);var n=(0,c["default"])(e,t);if(void 0===n){var o=(0,i["default"])(e);return null===o?void 0:a(o,t,r)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(r)}},{"babel-runtime/core-js/object/get-own-property-descriptor":4,"babel-runtime/core-js/object/get-prototype-of":5}],16:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/object/set-prototype-of"),i=n(o),s=e("babel-runtime/core-js/object/create"),c=n(s),a=e("babel-runtime/helpers/typeof"),u=n(a);r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,u["default"])(t)));e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i["default"]?(0,i["default"])(e,t):e.__proto__=t)}},{"babel-runtime/core-js/object/create":2,"babel-runtime/core-js/object/set-prototype-of":7,"babel-runtime/helpers/typeof":19}],17:[function(e,t,r){t.exports=e("./interopRequireDefault.js")},{"./interopRequireDefault.js":18}],18:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e){return e&&e.__esModule?e:{"default":e}}},{}],19:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/symbol/iterator"),i=n(o),s=e("babel-runtime/core-js/symbol"),c=n(s),a="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(e){return typeof e}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":typeof e};r["default"]="function"==typeof c["default"]&&"symbol"===a(i["default"])?function(e){return"undefined"==typeof e?"undefined":a(e)}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":"undefined"==typeof e?"undefined":a(e)}},{"babel-runtime/core-js/symbol":9,"babel-runtime/core-js/symbol/iterator":10}],20:[function(e,t,r){e("../../modules/es6.object.create");var n=e("../../modules/_core").Object;t.exports=function(e,t){return n.create(e,t)}},{"../../modules/_core":36,"../../modules/es6.object.create":99}],21:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":36,"../../modules/es6.object.define-property":100}],22:[function(e,t,r){e("../../modules/es6.object.get-own-property-descriptor");var n=e("../../modules/_core").Object;t.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},{"../../modules/_core":36,"../../modules/es6.object.get-own-property-descriptor":101}],23:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/_core").Object.getPrototypeOf},{"../../modules/_core":36,"../../modules/es6.object.get-prototype-of":102}],24:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":36,"../../modules/es6.object.keys":103}],25:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/_core").Object.setPrototypeOf},{"../../modules/_core":36,"../../modules/es6.object.set-prototype-of":104}],26:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":36,"../modules/es6.object.to-string":105,"../modules/es6.promise":106,"../modules/es6.string.iterator":107,"../modules/web.dom.iterable":109}],27:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),t.exports=e("../../modules/_core").Symbol},{"../../modules/_core":36,"../../modules/es6.object.to-string":105,"../../modules/es6.symbol":108}],28:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/_wks")("iterator")},{"../../modules/_wks":96,"../../modules/es6.string.iterator":107,"../../modules/web.dom.iterable":109}],29:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],30:[function(e,t,r){t.exports=function(){}},{}],31:[function(e,t,r){t.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},{}],32:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":55}],33:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var c,a=n(t),u=o(a.length),l=i(s,u);if(e&&r!=r){for(;u>l;)if(c=a[l++],c!=c)return!0}else for(;u>l;l++)if((e||l in a)&&a[l]===r)return e||l||0;return!e&&-1}}},{"./_to-index":89,"./_to-iobject":91,"./_to-length":92}],34:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),o))?r:i?n(t):"Object"==(c=n(t))&&"function"==typeof t.callee?"Arguments":c}},{"./_cof":35,"./_wks":96}],35:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],36:[function(e,t,r){var n=t.exports={version:"2.2.2"};"number"==typeof __e&&(__e=n)},{}],37:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":29}],38:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],39:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":44}],40:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":46,"./_is-object":55}],41:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],42:[function(e,t,r){var n=e("./_object-keys"),o=e("./_object-gops"),i=e("./_object-pie");t.exports=function(e){var t=n(e),r=o.f;if(r)for(var s,c=r(e),a=i.f,u=0;c.length>u;)a.call(e,s=c[u++])&&t.push(s);return t}},{"./_object-gops":72,"./_object-keys":75,"./_object-pie":76}],43:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),s=e("./_hide"),c="prototype",a=function(e,t,r){var u,l,f,p=e&a.F,d=e&a.G,b=e&a.S,_=e&a.P,h=e&a.B,y=e&a.W,v=d?o:o[t]||(o[t]={}),j=v[c],m=d?n:b?n[t]:(n[t]||{})[c];d&&(r=t);for(u in r)l=!p&&m&&void 0!==m[u],l&&u in v||(f=l?m[u]:r[u],v[u]=d&&"function"!=typeof m[u]?r[u]:h&&l?i(f,n):y&&m[u]==f?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[c]=e[c],t}(f):_&&"function"==typeof f?i(Function.call,f):f,_&&((v.virtual||(v.virtual={}))[u]=f,e&a.R&&j&&!j[u]&&s(j,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},{"./_core":36,"./_ctx":37,"./_global":46,"./_hide":48}],44:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],45:[function(e,t,r){var n=e("./_ctx"),o=e("./_iter-call"),i=e("./_is-array-iter"),s=e("./_an-object"),c=e("./_to-length"),a=e("./core.get-iterator-method");t.exports=function(e,t,r,u,l){var f,p,d,b=l?function(){return e}:a(e),_=n(r,u,t?2:1),h=0;if("function"!=typeof b)throw TypeError(e+" is not iterable!");if(i(b))for(f=c(e.length);f>h;h++)t?_(s(p=e[h])[0],p[1]):_(e[h]);else for(d=b.call(e);!(p=d.next()).done;)o(d,_,p.value,t)}},{"./_an-object":32,"./_ctx":37,"./_is-array-iter":53,"./_iter-call":56,"./_to-length":92,"./core.get-iterator-method":97}],46:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],47:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],48:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":39,"./_object-dp":67,"./_property-desc":78}],49:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":46}],50:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":39,"./_dom-create":40,"./_fails":44}],51:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],52:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":35}],53:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":61,"./_wks":96}],54:[function(e,t,r){var n=e("./_cof");t.exports=Array.isArray||function(e){return"Array"==n(e)}},{"./_cof":35}],55:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],56:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&n(s.call(e)),i}}},{"./_an-object":32}],57:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(s,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":48,"./_object-create":66,"./_property-desc":78,"./_set-to-string-tag":83,"./_wks":96}],58:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),s=e("./_hide"),c=e("./_has"),a=e("./_iterators"),u=e("./_iter-create"),l=e("./_set-to-string-tag"),f=e("./_object-gpo"),p=e("./_wks")("iterator"),d=!([].keys&&"next"in[].keys()),b="@@iterator",_="keys",h="values",y=function(){return this};t.exports=function(e,t,r,v,j,m,g){u(r,t,v);var O,w,k,x=function(e){if(!d&&e in C)return C[e];switch(e){case _:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},E=t+" Iterator",S=j==h,T=!1,C=e.prototype,P=C[p]||C[b]||j&&C[j],R=P||x(j),M=j?S?x("entries"):R:void 0,N="Array"==t?C.entries||P:P;if(N&&(k=f(N.call(new e)),k!==Object.prototype&&(l(k,E,!0),n||c(k,p)||s(k,p,y))),S&&P&&P.name!==h&&(T=!0,R=function(){return P.call(this)}),n&&!g||!d&&!T&&C[p]||s(C,p,R),a[t]=R,a[E]=y,j)if(O={values:S?R:x(h),keys:m?R:x(_),entries:M},g)for(w in O)w in C||i(C,w,O[w]);else o(o.P+o.F*(d||T),t,O);return O}},{"./_export":43,"./_has":47,"./_hide":48,"./_iter-create":57,"./_iterators":61,"./_library":63,"./_object-gpo":73,"./_redefine":80,"./_set-to-string-tag":83,"./_wks":96}],59:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){return{done:r=!0}},i[n]=function(){return s},e(i)}catch(c){}return r}},{"./_wks":96}],60:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],61:[function(e,t,r){t.exports={}},{}],62:[function(e,t,r){var n=e("./_object-keys"),o=e("./_to-iobject");t.exports=function(e,t){for(var r,i=o(e),s=n(i),c=s.length,a=0;c>a;)if(i[r=s[a++]]===t)return r}},{"./_object-keys":75,"./_to-iobject":91}],63:[function(e,t,r){t.exports=!0},{}],64:[function(e,t,r){var n=e("./_uid")("meta"),o=e("./_is-object"),i=e("./_has"),s=e("./_object-dp").f,c=0,a=Object.isExtensible||function(){return!0},u=!e("./_fails")(function(){return a(Object.preventExtensions({}))}),l=function(e){s(e,n,{value:{i:"O"+ ++c,w:{}}})},f=function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!a(e))return"F";if(!t)return"E";l(e)}return e[n].i},p=function(e,t){if(!i(e,n)){if(!a(e))return!0;if(!t)return!1;l(e)}return e[n].w},d=function(e){return u&&b.NEED&&a(e)&&!i(e,n)&&l(e),e},b=t.exports={KEY:n,NEED:!1,fastKey:f,getWeak:p,onFreeze:d}},{"./_fails":44,"./_has":47,"./_is-object":55,"./_object-dp":67,"./_uid":95}],65:[function(e,t,r){var n,o,i,s=e("./_global"),c=e("./_task").set,a=s.MutationObserver||s.WebKitMutationObserver,u=s.process,l=s.Promise,f="process"==e("./_cof")(u),p=function(){var e,t;for(f&&(e=u.domain)&&e.exit();n;)t=n.fn,t(),n=n.next;o=void 0,e&&e.enter()};if(f)i=function(){u.nextTick(p)};else if(a){var d=!0,b=document.createTextNode("");new a(p).observe(b,{characterData:!0}),i=function(){b.data=d=!d}}else i=l&&l.resolve?function(){l.resolve().then(p)}:function(){c.call(s,p)};t.exports=function(e){var t={fn:e,next:void 0};o&&(o.next=t),n||(n=t,i()),o=t}},{"./_cof":35,"./_global":46,"./_task":88}],66:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,r=e("./_dom-create")("iframe"),n=i.length,o=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),u=t.F;n--;)delete u[a][i[n]];return u()};t.exports=Object.create||function(e,t){var r;return null!==e?(c[a]=n(e),r=new c,c[a]=null,r[s]=e):r=u(),void 0===t?r:o(r,t)}},{"./_an-object":32,"./_dom-create":40,"./_enum-bug-keys":41,"./_html":49,"./_object-dps":68,"./_shared-key":84}],67:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return s(e,t,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":32,"./_descriptors":39,"./_ie8-dom-define":50,"./_to-primitive":94}],68:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,s=i(t),c=s.length,a=0;c>a;)n.f(e,r=s[a++],t[r]);return e}},{"./_an-object":32,"./_descriptors":39,"./_object-dp":67,"./_object-keys":75}],69:[function(e,t,r){var n=e("./_object-pie"),o=e("./_property-desc"),i=e("./_to-iobject"),s=e("./_to-primitive"),c=e("./_has"),a=e("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?u:function(e,t){if(e=i(e),t=s(t,!0),a)try{return u(e,t)}catch(r){}return c(e,t)?o(!n.f.call(e,t),e[t]):void 0}},{"./_descriptors":39,"./_has":47,"./_ie8-dom-define":50,"./_object-pie":76,"./_property-desc":78,"./_to-iobject":91,"./_to-primitive":94}],70:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_object-gopn").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return o(e)}catch(t){return s.slice()}};t.exports.f=function(e){return s&&"[object Window]"==i.call(e)?c(e):o(n(e))}},{"./_object-gopn":71,"./_to-iobject":91}],71:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},{"./_enum-bug-keys":41,"./_object-keys-internal":74}],72:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],73:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":47,"./_shared-key":84,"./_to-object":93}],74:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,c=o(e),a=0,u=[];for(r in c)r!=s&&n(c,r)&&u.push(r);for(;t.length>a;)n(c,r=t[a++])&&(~i(u,r)||u.push(r));return u}},{"./_array-includes":33,"./_has":47,"./_shared-key":84,"./_to-iobject":91}],75:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":41,"./_object-keys-internal":74}],76:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],77:[function(e,t,r){var n=e("./_export"),o=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",s)}},{"./_core":36,"./_export":43,"./_fails":44}],78:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],79:[function(e,t,r){var n=e("./_hide");t.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},{"./_hide":48}],80:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":48}],81:[function(e,t,r){var n=e("./_is-object"),o=e("./_an-object"),i=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,n){try{n=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),n(t,[]),r=!(t instanceof Array)}catch(o){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:n(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":32,"./_ctx":37,"./_is-object":55,"./_object-gopd":69}],82:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_object-dp"),s=e("./_descriptors"),c=e("./_wks")("species");t.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];s&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},{"./_core":36,"./_descriptors":39,"./_global":46,"./_object-dp":67,"./_wks":96}],83:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":47,"./_object-dp":67,"./_wks":96}],84:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":85,"./_uid":95}],85:[function(e,t,r){var n=e("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":46}],86:[function(e,t,r){var n=e("./_an-object"),o=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[i])?t:o(r)}},{"./_a-function":29,"./_an-object":32,"./_wks":96}],87:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,s,c=String(o(t)),a=n(r),u=c.length;return 0>a||a>=u?e?"":void 0:(i=c.charCodeAt(a),55296>i||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?e?c.charAt(a):i:e?c.slice(a,a+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":38,"./_to-integer":90}],88:[function(e,t,r){var n,o,i,s=e("./_ctx"),c=e("./_invoke"),a=e("./_html"),u=e("./_dom-create"),l=e("./_global"),f=l.process,p=l.setImmediate,d=l.clearImmediate,b=l.MessageChannel,_=0,h={},y="onreadystatechange",v=function(){var e=+this;if(h.hasOwnProperty(e)){var t=h[e];delete h[e],t()}},j=function(e){v.call(e.data)};p&&d||(p=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return h[++_]=function(){c("function"==typeof e?e:Function(e),t)},n(_),_},d=function(e){delete h[e]},"process"==e("./_cof")(f)?n=function(e){f.nextTick(s(v,e,1))}:b?(o=new b,i=o.port2,o.port1.onmessage=j,n=s(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(n=function(e){l.postMessage(e+"","*")},l.addEventListener("message",j,!1)):n=y in u("script")?function(e){a.appendChild(u("script"))[y]=function(){a.removeChild(this),v.call(e)}}:function(e){setTimeout(s(v,e,1),0)}),t.exports={set:p,clear:d}},{"./_cof":35,"./_ctx":37,"./_dom-create":40,"./_global":46,"./_html":49,"./_invoke":51}],89:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return e=n(e),0>e?o(e+t,0):i(e,t)}},{"./_to-integer":90}],90:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],91:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":38,"./_iobject":52}],92:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":90}],93:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":38}],94:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":55}],95:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],96:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i;t.exports=function(e){return n[e]||(n[e]=s&&i[e]||(s?i:o)("Symbol."+e))}},{"./_global":46,"./_shared":85,"./_uid":95}],97:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||i[n(e)]:void 0}},{"./_classof":34,"./_core":36,"./_iterators":61,"./_wks":96}],98:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":30,"./_iter-define":58,"./_iter-step":60,"./_iterators":61,"./_to-iobject":91}],99:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{create:e("./_object-create")})},{"./_export":43,"./_object-create":66}],100:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":39,"./_export":43,"./_object-dp":67}],101:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_object-gopd").f;e("./_object-sap")("getOwnPropertyDescriptor",function(){return function(e,t){return o(n(e),t)}})},{"./_object-gopd":69,"./_object-sap":77,"./_to-iobject":91}],102:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-gpo");e("./_object-sap")("getPrototypeOf",function(){return function(e){return o(n(e))}})},{"./_object-gpo":73,"./_object-sap":77,"./_to-object":93}],103:[function(e,t,r){var n=e("./_to-object"),o=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return o(n(e))}})},{"./_object-keys":75,"./_object-sap":77,"./_to-object":93}],104:[function(e,t,r){var n=e("./_export");n(n.S,"Object",{setPrototypeOf:e("./_set-proto").set})},{"./_export":43,"./_set-proto":81}],105:[function(e,t,r){},{}],106:[function(e,t,r){"use strict";var n,o,i,s=e("./_library"),c=e("./_global"),a=e("./_ctx"),u=e("./_classof"),l=e("./_export"),f=e("./_is-object"),p=(e("./_an-object"),e("./_a-function")),d=e("./_an-instance"),b=e("./_for-of"),_=(e("./_set-proto").set,e("./_species-constructor")),h=e("./_task").set,y=e("./_microtask"),v="Promise",j=c.TypeError,m=c.process,g=c[v],m=c.process,O="process"==u(m),w=function(){},k=!!function(){try{var t=g.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(w,w)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(w)instanceof r}catch(n){}}(),x=function(e,t){return e===t||e===g&&t===i},E=function(e){var t;return f(e)&&"function"==typeof(t=e.then)?t:!1},S=function(e){return x(g,e)?new T(e):new o(e)},T=o=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw j("Bad Promise constructor");t=e,r=n}),this.resolve=p(t),this.reject=p(r)},C=function(e){try{e()}catch(t){return{error:t}}},P=function(e,t){if(!e._n){e._n=!0;var r=e._c;y(function(){for(var n=e._v,o=1==e._s,i=0,s=function(t){var r,i,s=o?t.ok:t.fail,c=t.resolve,a=t.reject,u=t.domain;try{s?(o||(2==e._h&&N(e),e._h=1),s===!0?r=n:(u&&u.enter(),r=s(n),u&&u.exit()),r===t.promise?a(j("Promise-chain cycle")):(i=E(r))?i.call(r,c,a):c(r)):a(n)}catch(l){a(l)}};r.length>i;)s(r[i++]);e._c=[],e._n=!1,t&&!e._h&&R(e)})}},R=function(e){h.call(c,function(){var t,r,n,o=e._v;if(M(e)&&(t=C(function(){O?m.emit("unhandledRejection",o,e):(r=c.onunhandledrejection)?r({promise:e,reason:o}):(n=c.console)&&n.error&&n.error("Unhandled promise rejection",o)}),e._h=O||M(e)?2:1),e._a=void 0,t)throw t.error})},M=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if(t=r[n++],t.fail||!M(t.promise))return!1;return!0},N=function(e){h.call(c,function(){var t;O?m.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},D=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),P(t,!0))},A=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw j("Promise can't be resolved itself");(t=E(e))?y(function(){var n={_w:r,_d:!1};try{t.call(e,a(A,n,1),a(D,n,1))}catch(o){D.call(n,o)}}):(r._v=e,r._s=1,P(r,!1))}catch(n){D.call({_w:r,_d:!1},n)}}};k||(g=function(e){d(this,g,v,"_h"),p(e),n.call(this);try{e(a(A,this,1),a(D,this,1))}catch(t){D.call(this,t)}},n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=e("./_redefine-all")(g.prototype,{then:function(e,t){var r=S(_(this,g));return r.ok="function"==typeof e?e:!0,r.fail="function"==typeof t&&t,r.domain=O?m.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&P(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),T=function(){var e=new n;this.promise=e,this.resolve=a(A,e,1),this.reject=a(D,e,1)}),l(l.G+l.W+l.F*!k,{Promise:g}),e("./_set-to-string-tag")(g,v),e("./_set-species")(v),i=e("./_core")[v],l(l.S+l.F*!k,v,{reject:function(e){var t=S(this),r=t.reject;return r(e),t.promise}}),l(l.S+l.F*(s||!k),v,{resolve:function(e){if(e instanceof g&&x(e.constructor,this))return e;var t=S(this),r=t.resolve;return r(e),t.promise}}),l(l.S+l.F*!(k&&e("./_iter-detect")(function(e){g.all(e)["catch"](w)})),v,{all:function(e){var t=this,r=S(t),n=r.resolve,o=r.reject,i=C(function(){var r=[],i=0,s=1;b(e,!1,function(e){var c=i++,a=!1;r.push(void 0),s++,t.resolve(e).then(function(e){a||(a=!0,r[c]=e,--s||n(r))},o)}),--s||n(r)});return i&&o(i.error),r.promise},race:function(e){var t=this,r=S(t),n=r.reject,o=C(function(){b(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":29,"./_an-instance":31,"./_an-object":32,"./_classof":34,"./_core":36,"./_ctx":37,"./_export":43,"./_for-of":45,"./_global":46,"./_is-object":55,"./_iter-detect":59,"./_library":63,"./_microtask":65,"./_redefine-all":79,"./_set-proto":81,
"./_set-species":82,"./_set-to-string-tag":83,"./_species-constructor":86,"./_task":88,"./_wks":96}],107:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":58,"./_string-at":87}],108:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_has"),s=e("./_descriptors"),c=e("./_export"),a=e("./_redefine"),u=e("./_meta").KEY,l=e("./_fails"),f=e("./_shared"),p=e("./_set-to-string-tag"),d=e("./_uid"),b=e("./_wks"),_=e("./_keyof"),h=e("./_enum-keys"),y=e("./_is-array"),v=e("./_an-object"),j=e("./_to-iobject"),m=e("./_to-primitive"),g=e("./_property-desc"),O=e("./_object-create"),w=e("./_object-gopn-ext"),k=e("./_object-gopd"),x=e("./_object-dp"),E=k.f,S=x.f,T=w.f,C=n.Symbol,P=n.JSON,R=P&&P.stringify,M=!1,N="prototype",D=b("_hidden"),A=b("toPrimitive"),L={}.propertyIsEnumerable,F=f("symbol-registry"),I=f("symbols"),V=Object[N],z="function"==typeof C,U=n.QObject,H=s&&l(function(){return 7!=O(S({},"a",{get:function(){return S(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=E(V,t);n&&delete V[t],S(e,t,r),n&&e!==V&&S(V,t,n)}:S,q=function(e){var t=I[e]=O(C[N]);return t._k=e,s&&M&&H(V,e,{configurable:!0,set:function(t){i(this,D)&&i(this[D],e)&&(this[D][e]=!1),H(this,e,g(1,t))}}),t},B=z&&"symbol"==typeof C.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof C},W=function(e,t,r){return v(e),t=m(t,!0),v(r),i(I,t)?(r.enumerable?(i(e,D)&&e[D][t]&&(e[D][t]=!1),r=O(r,{enumerable:g(0,!1)})):(i(e,D)||S(e,D,g(1,{})),e[D][t]=!0),H(e,t,r)):S(e,t,r)},J=function(e,t){v(e);for(var r,n=h(t=j(t)),o=0,i=n.length;i>o;)W(e,r=n[o++],t[r]);return e},Y=function(e,t){return void 0===t?O(e):J(O(e),t)},K=function(e){var t=L.call(this,e=m(e,!0));return t||!i(this,e)||!i(I,e)||i(this,D)&&this[D][e]?t:!0},G=function(e,t){var r=E(e=j(e),t=m(t,!0));return!r||!i(I,t)||i(e,D)&&e[D][t]||(r.enumerable=!0),r},Z=function(e){for(var t,r=T(j(e)),n=[],o=0;r.length>o;)i(I,t=r[o++])||t==D||t==u||n.push(t);return n},X=function(e){for(var t,r=T(j(e)),n=[],o=0;r.length>o;)i(I,t=r[o++])&&n.push(I[t]);return n},$=function(e){if(void 0!==e&&!B(e)){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);return t=n[1],"function"==typeof t&&(r=t),!r&&y(t)||(t=function(e,t){return r&&(t=r.call(this,e,t)),B(t)?void 0:t}),n[1]=t,R.apply(P,n)}},Q=l(function(){var e=C();return"[null]"!=R([e])||"{}"!=R({a:e})||"{}"!=R(Object(e))});z||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");return q(d(arguments.length>0?arguments[0]:void 0))},a(C[N],"toString",function(){return this._k}),k.f=G,x.f=W,e("./_object-gopn").f=w.f=Z,e("./_object-pie").f=K,e("./_object-gops").f=X,s&&!e("./_library")&&a(V,"propertyIsEnumerable",K,!0)),c(c.G+c.W+c.F*!z,{Symbol:C});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;){var re=ee[te++],ne=o.Symbol,oe=b(re);re in ne||S(ne,re,{value:z?oe:q(oe)})}U&&U[N]&&U[N].findChild||(M=!0),c(c.S+c.F*!z,"Symbol",{"for":function(e){return i(F,e+="")?F[e]:F[e]=C(e)},keyFor:function(e){if(B(e))return _(F,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){M=!0},useSimple:function(){M=!1}}),c(c.S+c.F*!z,"Object",{create:Y,defineProperty:W,defineProperties:J,getOwnPropertyDescriptor:G,getOwnPropertyNames:Z,getOwnPropertySymbols:X}),P&&c(c.S+c.F*(!z||Q),"JSON",{stringify:$}),C[N][A]||e("./_hide")(C[N],A,C[N].valueOf),p(C,"Symbol"),p(Math,"Math",!0),p(n.JSON,"JSON",!0)},{"./_an-object":32,"./_core":36,"./_descriptors":39,"./_enum-keys":42,"./_export":43,"./_fails":44,"./_global":46,"./_has":47,"./_hide":48,"./_is-array":54,"./_keyof":62,"./_library":63,"./_meta":64,"./_object-create":66,"./_object-dp":67,"./_object-gopd":69,"./_object-gopn":71,"./_object-gopn-ext":70,"./_object-gops":72,"./_object-pie":76,"./_property-desc":78,"./_redefine":80,"./_set-to-string-tag":83,"./_shared":85,"./_to-iobject":91,"./_to-primitive":94,"./_uid":95,"./_wks":96}],109:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;5>a;a++){var u=c[a],l=n[u],f=l&&l.prototype;f&&!f[s]&&o(f,s,u),i[u]=i.Array}},{"./_global":46,"./_hide":48,"./_iterators":61,"./_wks":96,"./es6.array.iterator":98}],110:[function(e,t,r){window.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||function(e){function t(e){this.g=[],this.k=e}function r(e){!function r(){var n=e.takeRecords();n.length&&e.k(n,e),e.f=setTimeout(r,t._period)}()}function n(t){var r,n={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(r in t)n[r]!==e&&t[r]!==e&&(n[r]=t[r]);return n}function o(e,t){var r=c(e,t);return function(n){var o,a=n.length;t.a&&r.a&&i(n,e,r.a,t.d),(t.b||t.e)&&(o=s(n,e,r,t)),(o||n.length!==a)&&(r=c(e,t))}}function i(t,r,o,i){for(var s,c,a={},u=r.attributes,l=u.length;l--;)s=u[l],c=s.name,i&&i[c]===e||(s.value!==o[c]&&t.push(n({type:"attributes",target:r,attributeName:c,oldValue:o[c],attributeNamespace:s.namespaceURI})),a[c]=!0);for(c in o)a[c]||t.push(n({target:r,type:"attributes",attributeName:c,oldValue:o[c]}))}function s(t,r,o,s){function c(e,r,o,c,a){var l=e.length-1;a=-~((l-a)/2);for(var f,p,d;d=e.pop();)f=o[d.h],p=c[d.i],s.b&&a&&Math.abs(d.h-d.i)>=l&&(t.push(n({type:"childList",target:r,addedNodes:[f],removedNodes:[f],nextSibling:f.nextSibling,previousSibling:f.previousSibling})),a--),s.a&&p.a&&i(t,f,p.a,s.d),s.c&&3===f.nodeType&&f.nodeValue!==p.c&&t.push(n({type:"characterData",target:f})),s.e&&u(f,p)}function u(r,o){for(var p,d,b,_,h,y=r.childNodes,v=o.b,j=y.length,m=v?v.length:0,g=0,O=0,w=0;j>O||m>w;)_=y[O],h=(b=v[w])&&b.j,_===h?(s.a&&b.a&&i(t,_,b.a,s.d),s.c&&b.c!==e&&_.nodeValue!==b.c&&t.push(n({type:"characterData",target:_})),d&&c(d,r,y,v,g),s.e&&(_.childNodes.length||b.b&&b.b.length)&&u(_,b),O++,w++):(l=!0,p||(p={},d=[]),_&&(p[b=a(_)]||(p[b]=!0,-1===(b=f(v,_,w,"j"))?s.b&&(t.push(n({type:"childList",target:r,addedNodes:[_],nextSibling:_.nextSibling,previousSibling:_.previousSibling})),g++):d.push({h:O,i:b})),O++),h&&h!==y[O]&&(p[b=a(h)]||(p[b]=!0,-1===(b=f(y,h,O))?s.b&&(t.push(n({type:"childList",target:o.j,removedNodes:[h],nextSibling:v[w+1],previousSibling:v[w-1]})),g--):d.push({h:b,i:w})),w++));d&&c(d,r,y,v,g)}var l;return u(r,o),l}function c(e,t){var r=!0;return function n(e){var o={j:e};return!t.c||3!==e.nodeType&&8!==e.nodeType?(t.a&&r&&1===e.nodeType&&(o.a=l(e.attributes,function(e,r){return t.d&&!t.d[r.name]||(e[r.name]=r.value),e})),r&&(t.b||t.c||t.a&&t.e)&&(o.b=u(e.childNodes,n)),r=t.e):o.c=e.nodeValue,o}(e)}function a(e){try{return e.id||(e.mo_id=e.mo_id||p++)}catch(t){try{return e.nodeValue}catch(r){return p++}}}function u(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n,e);return r}function l(e,t){for(var r={},n=0;n<e.length;n++)r=t(r,e[n],n,e);return r}function f(e,t,r,n){for(;r<e.length;r++)if((n?e[r][n]:e[r])===t)return r;return-1}t._period=30,t.prototype={observe:function(e,t){for(var n={a:!!(t.attributes||t.attributeFilter||t.attributeOldValue),b:!!t.childList,e:!!t.subtree,c:!(!t.characterData&&!t.characterDataOldValue)},i=this.g,s=0;s<i.length;s++)i[s].m===e&&i.splice(s,1);t.attributeFilter&&(n.d=l(t.attributeFilter,function(e,t){return e[t]=!0,e})),i.push({m:e,l:o(e,n)}),this.f||r(this)},takeRecords:function(){for(var e=[],t=this.g,r=0;r<t.length;r++)t[r].l(e);return e},disconnect:function(){this.g=[],clearTimeout(this.f),this.f=null}};var p=1;return t}(void 0)},{}],111:[function(e,t,r){Object.observe||function(e,t,r,n){"use strict";var o,i,s=["add","update","delete","reconfigure","setPrototype","preventExtensions"],c=t.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}(e.prototype.toString),a=t.prototype.indexOf?t.indexOf||function(e,r,n){return t.prototype.indexOf.call(e,r,n)}:function(e,t,r){for(var n=r||0;n<e.length;n++)if(e[n]===t)return n;return-1},u=r.Map!==n&&Map.prototype.forEach?function(){return new Map}:function(){var e=[],t=[];return{size:0,has:function(t){return a(e,t)>-1},get:function(r){return t[a(e,r)]},set:function(r,n){var o=a(e,r);-1===o?(e.push(r),t.push(n),this.size++):t[o]=n},"delete":function(r){var n=a(e,r);n>-1&&(e.splice(n,1),t.splice(n,1),this.size--)},forEach:function(r){for(var n=0;n<e.length;n++)r.call(arguments[1],t[n],e[n],this)}}},l=e.getOwnPropertyNames?function(){var t=e.getOwnPropertyNames;try{arguments.callee}catch(r){var n=(t(a).join(" ")+" ").replace(/prototype |length |name /g,"").slice(0,-1).split(" ");n.length&&(t=function(t){var r=e.getOwnPropertyNames(t);if("function"==typeof t)for(var o,i=0;i<n.length;)(o=a(r,n[i++]))>-1&&r.splice(o,1);return r})}return t}():function(t){var r,n,o=[];if("hasOwnProperty"in t)for(r in t)t.hasOwnProperty(r)&&o.push(r);else{n=e.hasOwnProperty;for(r in t)n.call(t,r)&&o.push(r)}return c(t)&&o.push("length"),o},f=e.getPrototypeOf,p=e.defineProperties&&e.getOwnPropertyDescriptor,d=r.requestAnimationFrame||r.webkitRequestAnimationFrame||function(){var e=+new Date,t=e;return function(r){return setTimeout(function(){r((t=+new Date)-e)},17)}}(),b=function(e,t,r){var n=o.get(e);n?(h(n,e),m(e,n,t,r)):(n=_(e),m(e,n,t,r),1===o.size&&d(y))},_=function(t,r){var n,i=l(t),s=[],c=0,r={handlers:u(),frozen:e.isFrozen?e.isFrozen(t):!1,extensible:e.isExtensible?e.isExtensible(t):!0,proto:f&&f(t),properties:i,values:s,notifier:j(t,r)};if(p)for(n=r.descriptors=[];c<i.length;)n[c]=p(t,i[c]),s[c]=t[i[c++]];else for(;c<i.length;)s[c]=t[i[c++]];return o.set(t,r),r},h=function(){var t=p?function(e,t,r,n,o){var i=t.properties[r],s=e[i],c=t.values[r],a=t.descriptors[r];"value"in o&&(c===s?0===c&&1/c!==1/s:c===c||s===s)&&(g(e,t,{name:i,type:"update",object:e,oldValue:c},n),t.values[r]=s),!a.configurable||o.configurable&&o.writable===a.writable&&o.enumerable===a.enumerable&&o.get===a.get&&o.set===a.set||(g(e,t,{name:i,type:"reconfigure",object:e,oldValue:c},n),t.descriptors[r]=o)}:function(e,t,r,n){var o=t.properties[r],i=e[o],s=t.values[r];(s===i?0===s&&1/s!==1/i:s===s||i===i)&&(g(e,t,{name:o,type:"update",object:e,oldValue:s},n),t.values[r]=i)},r=p?function(e,r,n,o,i){for(var s,c=r.length;n&&c--;)null!==r[c]&&(s=p(e,r[c]),n--,s?t(e,o,c,i,s):(g(e,o,{name:r[c],type:"delete",object:e,oldValue:o.values[c]},i),o.properties.splice(c,1),o.values.splice(c,1),o.descriptors.splice(c,1)))}:function(e,t,r,n,o){for(var i=t.length;r&&i--;)null!==t[i]&&(g(e,n,{name:t[i],type:"delete",object:e,oldValue:n.values[i]},o),n.properties.splice(i,1),n.values.splice(i,1),r--)};return function(n,o,i){if(n.handlers.size&&!n.frozen){var s,c,u,d,b,_,h,y,v=n.values,j=n.descriptors,m=0;if(n.extensible)if(s=n.properties.slice(),c=s.length,u=l(o),j){for(;m<u.length;)b=u[m++],d=a(s,b),y=p(o,b),-1===d?(g(o,n,{name:b,type:"add",object:o},i),n.properties.push(b),v.push(o[b]),j.push(y)):(s[d]=null,c--,t(o,n,d,i,y));r(o,s,c,n,i),e.isExtensible(o)||(n.extensible=!1,g(o,n,{type:"preventExtensions",object:o},i),n.frozen=e.isFrozen(o))}else{for(;m<u.length;)b=u[m++],d=a(s,b),_=o[b],-1===d?(g(o,n,{name:b,type:"add",object:o},i),n.properties.push(b),v.push(_)):(s[d]=null,c--,t(o,n,d,i));r(o,s,c,n,i)}else if(!n.frozen){for(;m<s.length;m++)b=s[m],t(o,n,m,i,p(o,b));e.isFrozen(o)&&(n.frozen=!0)}f&&(h=f(o),h!==n.proto&&(g(o,n,{type:"setPrototype",name:"__proto__",object:o,oldValue:n.proto}),n.proto=h))}}}(),y=function(){o.size&&(o.forEach(h),i.forEach(v),d(y))},v=function(e,t){var r=e.changeRecords;r.length&&(e.changeRecords=[],t(r))},j=function(e,t){return arguments.length<2&&(t=o.get(e)),t&&t.notifier||{notify:function(t){t.type;var r=o.get(e);if(r){var n,i={object:e};for(n in t)"object"!==n&&(i[n]=t[n]);g(e,r,i)}},performChange:function(t,r){if("string"!=typeof t)throw new TypeError("Invalid non-string changeType");if("function"!=typeof r)throw new TypeError("Cannot perform non-function");var i,s,c=o.get(e),a=arguments[2],u=a===n?r():r.call(a);if(c&&h(c,e,t),c&&u&&"object"==typeof u){s={object:e,type:t};for(i in u)"object"!==i&&"type"!==i&&(s[i]=u[i]);g(e,c,s)}}}},m=function(e,t,r,n){var o=i.get(r);o||i.set(r,o={observed:u(),changeRecords:[]}),o.observed.set(e,{acceptList:n.slice(),data:t}),t.handlers.set(r,o)},g=function(e,t,r,n){t.handlers.forEach(function(t){var o=t.observed.get(e).acceptList;("string"!=typeof n||-1===a(o,n))&&a(o,r.type)>-1&&t.changeRecords.push(r)})};o=u(),i=u(),e.observe=function(t,r,o){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.observe cannot observe non-object");if("function"!=typeof r)throw new TypeError("Object.observe cannot deliver to non-function");if(e.isFrozen&&e.isFrozen(r))throw new TypeError("Object.observe cannot deliver to a frozen function object");if(o===n)o=s;else if(!o||"object"!=typeof o)throw new TypeError("Third argument to Object.observe must be an array of strings.");return b(t,r,o),t},e.unobserve=function(e,t){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object.unobserve cannot unobserve non-object");if("function"!=typeof t)throw new TypeError("Object.unobserve cannot deliver to non-function");var r,n=i.get(t);return n&&(r=n.observed.get(e))&&(n.observed.forEach(function(e,t){h(e.data,t)}),d(function(){v(n,t)}),1===n.observed.size&&n.observed.has(e)?i["delete"](t):n.observed["delete"](e),1===r.data.handlers.size?o["delete"](e):r.data.handlers["delete"](t)),e},e.getNotifier=function(t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.getNotifier cannot getNotifier non-object");return e.isFrozen&&e.isFrozen(t)?null:j(t)},e.deliverChangeRecords=function(e){if("function"!=typeof e)throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");var t=i.get(e);t&&(t.observed.forEach(function(e,t){h(e.data,t)}),v(t,e))}}(Object,Array,this)},{}],112:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0}),e("mutationobserver-shim"),e("object.observe"),e("array.observe");var o=e("./syncher/Syncher"),i=n(o),s=e("./syncher/DataObjectReporter"),c=n(s),a=e("./syncher/DataObjectObserver"),u=n(a);r.Syncher=i["default"],r.DataObjectReporter=c["default"],r.DataObjectObserver=u["default"]},{"./syncher/DataObjectObserver":115,"./syncher/DataObjectReporter":116,"./syncher/Syncher":119,"array.observe":1,"babel-runtime/helpers/interop-require-default":17,"mutationobserver-shim":110,"object.observe":111}],113:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/object/keys")["default"],s=e("babel-runtime/core-js/promise")["default"],c=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var a=e("./SyncObject"),u=c(a),l=e("./DataObjectChild"),f=c(l),p=e("../utils/utils.js"),d=function(){function e(t,r,n,i,s,c){o(this,e);var a=this;a._syncher=t,a._url=r,a._schema=n,a._status=i,a._syncObj=new u["default"](s),a._childrens=c,a._version=0,a._childId=0,a._childrenObjects={},a._childrenListeners=[],a._owner=t._owner,a._bus=t._bus}return n(e,[{key:"_allocateListeners",value:function(){var e=this,t=this,r=t._url+"/children/";t._childrens&&t._childrens.forEach(function(n){var o=r+n,i=t._bus.addListener(o,function(r){if(r.from!==e._owner)switch(console.log("DataObject-Children-RCV: ",r),r.type){case"create":t._onChildrenCreate(r);break;case"delete":console.log(r);break;default:t._changeChildren(r)}});t._childrenListeners.push(i)})}},{key:"_releaseListeners",value:function(){var e=this;e._childrenListeners.forEach(function(e){e.remove()}),i(e._childrenObjects).forEach(function(t){e._childrenObjects[t]._releaseListeners()})}},{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"addChildren",value:function(e,t){var r=this;r._childId++;var n=r._owner+"#"+r._childId,o=r._url+"/children/"+e,i={type:"create",from:r._owner,to:o,body:{resource:n,value:t}};return new s(function(e){var s=r._bus.postMessage(i);console.log("create-reporter-child( "+r._owner+" ): ",i);var c=new f["default"](r,n,t,r._owner,s);c.onChange(function(e){r._onChange(e,{path:o,childId:n})}),r._childrenObjects[n]=c,e(c)})}},{key:"onAddChildren",value:function(e){this._onAddChildrenHandler=e}},{key:"_onChildrenCreate",value:function(e){var t=this,r=e.body.resource;console.log("create-observer-child( "+t._owner+" ): ",e);var n=new f["default"](t,r,e.body.value);t._childrenObjects[r]=n,setTimeout(function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,source:t._owner}})});var o={type:e.type,from:e.from,url:e.to,value:e.body.value,childId:r};t._onAddChildrenHandler&&(console.log("ADD-CHILDREN-EVENT: ",o),t._onAddChildrenHandler(o))}},{key:"_onChange",value:function(e,t){var r=this;if(r._version++,"on"===r._status){var n={type:"update",from:r._url,to:r._url+"/changes",body:{version:r._version,source:r._owner,attribute:e.field}};e.oType===a.ObjectType.OBJECT?e.cType!==a.ChangeType.REMOVE&&(n.body.value=e.data):(n.body.attributeType=e.oType,n.body.value=e.data,e.cType!==a.ChangeType.UPDATE&&(n.body.operation=e.cType)),t&&(n.to=t.path,n.body.resource=t.childId),r._bus.postMessage(n)}}},{key:"_changeObject",value:function(e,t){var r=this;if(r._version+1===t.body.version){r._version++;var n=t.body.attribute,o=(0,p.deepClone)(t.body.value),i=e.findBefore(n);if(t.body.attributeType===a.ObjectType.ARRAY)if(t.body.operation===a.ChangeType.ADD){var s=i.obj,c=i.last;Array.prototype.splice.apply(s,[c,0].concat(o))}else if(t.body.operation===a.ChangeType.REMOVE){var s=i.obj,c=i.last;s.splice(c,o)}else i.obj[i.last]=o;else t.body.value?i.obj[i.last]=o:delete i.obj[i.last]}else console.log("UNSYNCHRONIZED VERSION: (data => "+r._version+", msg => "+t.body.version+")")}},{key:"_changeChildren",value:function(e){var t=this;console.log("Change children: ",t._owner,e);var r=e.body.resource,n=t._childrenObjects[r];n?t._changeObject(n._syncObj,e):console.log("No children found for: ",r)}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"childrens",get:function(){return this._childrenObjects}}]),e}();r["default"]=d,t.exports=r["default"]},{"../utils/utils.js":120,"./DataObjectChild":114,"./SyncObject":118,"babel-runtime/core-js/object/keys":6,"babel-runtime/core-js/promise":8,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/interop-require-default":17}],114:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var s=e("./SyncObject"),c=i(s),a=function(){function e(t,r,n,i,s){o(this,e);var a=this;a._parent=t,a._childId=r,a._owner=i,a._msgId=s,a._syncObj=new c["default"](n),a._bus=t._bus,a._allocateListeners()}return n(e,[{key:"_allocateListeners",value:function(){var e=this;e._owner&&(e._listener=e._bus.addListener(e._owner,function(t){"response"===t.type&&t.id===e._msgId&&(console.log("DataObjectChild.onResponse:",t),e._onResponse(t))}))}},{key:"_releaseListeners",value:function(){var e=this;e._listener&&e._listener.remove()}},{key:"delete",value:function(){var e=this;delete e._parent._children[e._childId],e._releaseListeners()}},{key:"onChange",value:function(e){this._syncObj.observe(function(t){e(t)})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.body.source,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(r)}},{key:"childId",get:function(){return this._childId}},{key:"data",get:function(){return this._syncObj.data}}]),e}();r["default"]=a,t.exports=r["default"]},{"./SyncObject":118,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/interop-require-default":17}],115:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],c=e("babel-runtime/core-js/object/keys")["default"],a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./DataObject"),l=a(u),f=e("./DataObjectChild"),p=a(f),d={ANY:"any",START:"start",EXACT:"exact"},b=function(e){function t(e,r,o,i,a,u,l){s(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,i,a.data,u);var f=this;f._version=l,f._filters={},f._syncObj.observe(function(e){f._onFilter(e)}),c(a.childrens).forEach(function(e){var t=a.childrens[e];f._childrenObjects[e]=new p["default"](f,e,t)}),f._allocateListeners()}return o(t,e),i(t,[{key:"_allocateListeners",value:function(){n(Object.getPrototypeOf(t.prototype),"_allocateListeners",this).call(this);var e=this;e._changeListener=e._bus.addListener(e._url+"/changes",function(t){"update"===t.type&&(console.log("DataObjectObserver-"+e._url+"-RCV: ",t),e._changeObject(e._syncObj,t))})}},{key:"_releaseListeners",value:function(){n(Object.getPrototypeOf(t.prototype),"_releaseListeners",this).call(this);var e=this;e._changeListener.remove()}},{key:"delete",value:function(){var e=this;e._releaseListeners(),delete e._syncher._observers[e._url]}},{key:"unsubscribe",value:function(){var e=this,t={type:"unsubscribe",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectObserver-UNSUBSCRIBE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._observers[e._url])})}},{key:"onChange",value:function(e,t){var r=e,n={type:d.EXACT,callback:t},o=e.indexOf("*");o===e.length-1&&(0===o?n.type=d.ANY:(n.type=d.START,r=e.substr(0,e.length-1))),this._filters[r]=n}},{key:"_onFilter",value:function(e){var t=this;c(t._filters).forEach(function(r){var n=t._filters[r];n.type===d.ANY?n.callback(e):n.type===d.START?0===e.field.indexOf(r)&&n.callback(e):n.type===d.EXACT&&e.field===r&&n.callback(e)})}}]),t}(l["default"]);r["default"]=b,t.exports=r["default"]},{"./DataObject":113,"./DataObjectChild":114,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],116:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/get")["default"],o=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],c=e("babel-runtime/core-js/object/keys")["default"],a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./DataObject"),l=a(u),f=e("../utils/utils.js"),p=function(e){function t(e,r,o,i,c,a){s(this,t),n(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,o,i,c,a);var u=this;u._subscriptions={},u._syncObj.observe(function(e){console.log("DataObjectReporter-"+r+"-SEND: ",e),u._onChange(e)}),u._allocateListeners()}return o(t,e),i(t,[{key:"_allocateListeners",value:function(){n(Object.getPrototypeOf(t.prototype),"_allocateListeners",this).call(this);var e=this;e._responseListener=e._bus.addListener(e._url,function(t){"response"===t.type&&e._onResponse(t)})}},{key:"_releaseListeners",value:function(){n(Object.getPrototypeOf(t.prototype),"_releaseListeners",this).call(this);var e=this;e._responseListener.remove()}},{key:"delete",value:function(){var e=this,t={type:"delete",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectReporter-DELETE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._reporters[e._url])})}},{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,r=e.body.from,n={type:e.body.type,url:r,accept:function(){var n={url:r,status:"on"};t._subscriptions[r]=n;var o={};return c(t._childrenObjects).forEach(function(e){var r=t._childrenObjects[e].data;o[e]=(0,f.deepClone)(r)}),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:{data:(0,f.deepClone)(t.data),childrens:o}}}),n},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:r}})}};t._onSubscriptionHandler&&(console.log("SUBSCRIPTION-EVENT: ",n),t._onSubscriptionHandler(n))}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.body.from,n=t._subscriptions[r];delete t._subscriptions[r];var o={type:e.body.type,url:r,object:n};t._onSubscriptionHandler&&(console.log("UN-SUBSCRIPTION-EVENT: ",o),t._onSubscriptionHandler(o))}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.from,code:e.body.code};t._onResponseHandler&&(console.log("RESPONSE-EVENT: ",r),t._onResponseHandler(r))}},{key:"subscriptions",get:function(){return this._subscriptions}}]),t}(l["default"]);r["default"]=p,t.exports=r["default"]},{"../utils/utils.js":120,"./DataObject":113,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/get":15,"babel-runtime/helpers/inherits":16,"babel-runtime/helpers/interop-require-default":17}],117:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(t,r,n,i){o(this,e);var s=this;s._owner=t,s._url=r,s._bus=n,s._children=i,s._changes=[],s._allocateListeners()}return n(e,[{key:"_allocateListeners",value:function(){var e=this;e._listener=e._bus.addListener(e._url,function(t){console.log("DataProvisional-"+e._url+"-RCV: ",t),e._changes.push(t)})}},{key:"_releaseListeners",value:function(){var e=this;e._listener.remove()}},{key:"apply",value:function(e){var t=this;t._changes.forEach(function(t){e._changeObject(e._syncObj,t)})}},{key:"children",get:function(){return this._children}}]),e}();r["default"]=i,t.exports=r["default"]},{"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13}],118:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/object/keys")["default"];Object.defineProperty(r,"__esModule",{value:!0});var s=e("../utils/utils.js"),c=function(){function e(t){o(this,e);var r=this;r._observers=[],r._filters={},t?r._data=(0,s.deepClone)(t):r._data={},r._internalObserve(new a,r._data)}return n(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},r=e.split(".");return t.last=r.pop(),t.obj=this._findWithSplit(r),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array}},{key:"_internalObserve",value:function(e,t){var r=this;if(r._isObservable(t)){var n=function(t){r._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,n);for(var o in t)r._isObservable(t[o])&&r._internalObserve(e["new"](o),t[o])}else if(t.constructor===Array){Array.observe(t,n);for(var o in t)if(r._isObservable(t[o])){var i=e["new"](new u(t[o],o));r._internalObserve(i,t[o])}}}}},{key:"_onChanges",value:function(e,t){var r=this;for(var n in t){var o=t[n].object,i=void 0;if(o.constructor===Object&&(i=f.OBJECT),o.constructor===Array&&(i=f.ARRAY),"splice"===t[n].type)!function(){var c=t[n].index,a=e["new"](""+c),f=a.toString(),p=t[n].removed.length;if(0!==p){var d=t[n].removed;d.forEach(function(t,n){r._isObservable(t)&&e.removeIndex(c+n)}),r._fireEvent({cType:l.REMOVE,oType:i,field:f,data:p})}var b=t[n].addedCount;if(0!==b){var _=o.slice(c,c+b);_.forEach(function(t,n){if(r._isObservable(t)){var o=e["new"](new u(t,c+n));r._internalObserve(o,t)}}),r._fireEvent({cType:l.ADD,oType:i,field:f,data:(0,s.deepClone)(_)})}c!==o.length-1&&e.reIndexFrom(o)}();else{var c=e["new"](t[n].name),a=c.toString();if(-1!==a.indexOf("Symbol"))continue;var p=o[t[n].name];"update"===t[n].type&&this._fireEvent({cType:l.UPDATE,oType:i,field:a,data:(0,s.deepClone)(p)}),"add"===t[n].type&&(this._internalObserve(c,p),this._fireEvent({cType:l.ADD,oType:i,field:a,data:(0,s.deepClone)(p)})),"delete"===t[n].type&&this._fireEvent({cType:l.REMOVE,oType:i,field:a})}}}},{key:"data",get:function(){return this._data}}]),e}(),a=function(){function e(){o(this,e),this._path=[],this._observables={}}return n(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;i(this._observables).forEach(function(r){var n=t._observables[r],o=e.indexOf(n.obj);n.idx!=o&&(n.idx=o,delete t._observables[r],t._observables[o]=n)})}},{key:"new",value:function(e){e.constructor==u&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,r){0===r?e=t.toString():e+="."+t.toString()}),e}}]),e}(),u=function(){function e(t,r){o(this,e),this.obj=t,this.idx=r}return n(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),l={UPDATE:"update",ADD:"add",REMOVE:"remove"};r.ChangeType=l;var f={OBJECT:"object",ARRAY:"array"};r.ObjectType=f,r["default"]=c},{"../utils/utils.js":120,"babel-runtime/core-js/object/keys":6,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13}],119:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/promise")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var c=e("./DataObjectReporter"),a=s(c),u=e("./DataObjectObserver"),l=s(u),f=e("./DataProvisional"),p=s(f),d=function(){function e(t,r,n){o(this,e);var i=this;i._owner=t,i._bus=r,i._subURL=n.runtimeURL+"/sm",i._reporters={},i._observers={},i._provisionals={},r.addListener(t,function(e){if(e.from!==t)switch(console.log("Syncher-RCV: ",e),e.type){case"forward":i._onForward(e);break;case"create":i._onRemoteCreate(e);break;case"delete":i._onRemoteDelete(e)}})}return n(e,[{key:"create",value:function(e,t,r){var n=this,o={type:"create",from:n._owner,to:n._subURL,body:{schema:e,value:r,authorise:t}};return new i(function(t,i){n._bus.postMessage(o,function(o){if(console.log("create-response: ",o),200===o.body.code){var s=o.body.resource,c=new a["default"](n,s,e,"on",r,o.body.childrenResources);n._reporters[s]=c,t(c)}else i(o.body.desc)})})}},{key:"subscribe",value:function(e,t){var r=this,n={type:"subscribe",
from:r._owner,to:r._subURL,body:{schema:e,resource:t}};return new i(function(o,i){r._bus.postMessage(n,function(n){console.log("subscribe-response: ",n);var s=r._provisionals[t];if(delete r._provisionals[t],s&&s._releaseListeners(),n.body.code<200)s=new p["default"](r._owner,t,r._bus,n.body.childrenResources),r._provisionals[t]=s;else if(200===n.body.code){var c=new l["default"](r,t,e,"on",n.body.value,s.children,n.body.version);r._observers[t]=c,o(c),s.apply(c)}else i(n.body.desc)})})}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onForward",value:function(e){var t=this,r=t._reporters[e.body.to];r._onForward(e)}},{key:"_onRemoteCreate",value:function(e){var t=this,r=e.from.slice(0,-13),n={type:e.type,from:e.body.source,url:r,schema:e.body.schema,value:e.body.value,identity:e.body.idToken,ack:function(r){var n=200;r&&(n=r),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",n),t._onNotificationHandler(n))}},{key:"_onRemoteDelete",value:function(e){var t=this,r=e.body.resource,n=t._observers[r];if(n){var o={type:e.type,url:r,identity:e.body.idToken,ack:function(r){var o=200;r&&(o=r),200===o&&n["delete"](),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:o,source:t._owner}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",o),t._onNotificationHandler(o))}else t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,source:t._owner}})}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();r["default"]=d,t.exports=r["default"]},{"./DataObjectObserver":115,"./DataObjectReporter":116,"./DataProvisional":117,"babel-runtime/core-js/promise":8,"babel-runtime/helpers/class-call-check":11,"babel-runtime/helpers/create-class":13,"babel-runtime/helpers/interop-require-default":17}],120:[function(e,t,r){"use strict";function n(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function o(e){return e?JSON.parse(JSON.stringify(e)):void 0}Object.defineProperty(r,"__esModule",{value:!0}),r.divideURL=n,r.deepClone=o},{}]},{},[112])(112)});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"../utils/EventEmitter":8,"./connection":6,"./peer":7,"webrtc-adapter-test":3}],5:[function(require,module,exports){
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

},{"../utils/EventEmitter":8,"../utils/utils":9,"./ConnectionController":4,"service-framework/dist/HypertyDiscovery":1,"service-framework/dist/Syncher":2}],6:[function(require,module,exports){
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
var connection={status:"connected",owner:"hyperty://example.com/alicehy",peer:"connection://example.com/alice/bob27012016",ownerPeer:{connectionDescription:{},iceCandidates:[]}};exports.default=connection;module.exports=exports['default'];

},{}],7:[function(require,module,exports){
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
**/var peer={connectionDescription:{},iceCandidates:[]};exports.default=peer;module.exports=exports['default'];

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}]},{},[5])(5)
});