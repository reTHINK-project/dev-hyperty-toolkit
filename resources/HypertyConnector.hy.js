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

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.HypertyDiscovery=e()}}(function(){return function e(t,r,n){function o(c,s){if(!r[c]){if(!t[c]){var u="function"==typeof require&&require;if(!s&&u)return u(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[c]={exports:{}};t[c][0].call(f.exports,function(e){var r=t[c][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[c].exports}for(var i="function"==typeof require&&require,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":9}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":10}],3:[function(e,t,r){t.exports=e("./classCallCheck.js")},{"./classCallCheck.js":4}],4:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],5:[function(e,t,r){t.exports=e("./createClass.js")},{"./createClass.js":6}],6:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("babel-runtime/core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"babel-runtime/core-js/object/define-property":1}],7:[function(e,t,r){t.exports=e("./interopRequireDefault.js")},{"./interopRequireDefault.js":8}],8:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e){return e&&e.__esModule?e:{"default":e}}},{}],9:[function(e,t,r){e("../../modules/es6.object.define-property");var n=e("../../modules/_core").Object;t.exports=function(e,t,r){return n.defineProperty(e,t,r)}},{"../../modules/_core":18,"../../modules/es6.object.define-property":73}],10:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":18,"../modules/es6.object.to-string":74,"../modules/es6.promise":75,"../modules/es6.string.iterator":76,"../modules/web.dom.iterable":77}],11:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],12:[function(e,t,r){t.exports=function(){}},{}],13:[function(e,t,r){t.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},{}],14:[function(e,t,r){var n=e("./_is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":35}],15:[function(e,t,r){var n=e("./_to-iobject"),o=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,c){var s,u=n(t),a=o(u.length),f=i(c,a);if(e&&r!=r){for(;a>f;)if(s=u[f++],s!=s)return!0}else for(;a>f;f++)if((e||f in u)&&u[f]===r)return e||f;return!e&&-1}}},{"./_to-index":63,"./_to-iobject":65,"./_to-length":66}],16:[function(e,t,r){var n=e("./_cof"),o=e("./_wks")("toStringTag"),i="Arguments"==n(function(){return arguments}()),c=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=c(t=Object(e),o))?r:i?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},{"./_cof":17,"./_wks":70}],17:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],18:[function(e,t,r){var n=t.exports={version:"2.2.1"};"number"==typeof __e&&(__e=n)},{}],19:[function(e,t,r){var n=e("./_a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":11}],20:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],21:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":25}],22:[function(e,t,r){var n=e("./_is-object"),o=e("./_global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./_global":27,"./_is-object":35}],23:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],24:[function(e,t,r){var n=e("./_global"),o=e("./_core"),i=e("./_ctx"),c=e("./_hide"),s="prototype",u=function(e,t,r){var a,f,_,l=e&u.F,p=e&u.G,d=e&u.S,v=e&u.P,h=e&u.B,y=e&u.W,b=p?o:o[t]||(o[t]={}),m=b[s],g=p?n:d?n[t]:(n[t]||{})[s];p&&(r=t);for(a in r)f=!l&&g&&void 0!==g[a],f&&a in b||(_=f?g[a]:r[a],b[a]=p&&"function"!=typeof g[a]?r[a]:h&&f?i(_,n):y&&g[a]==_?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t[s]=e[s],t}(_):v&&"function"==typeof _?i(Function.call,_):_,v&&((b.virtual||(b.virtual={}))[a]=_,e&u.R&&m&&!m[a]&&c(m,a,_)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},{"./_core":18,"./_ctx":19,"./_global":27,"./_hide":29}],25:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],26:[function(e,t,r){var n=e("./_ctx"),o=e("./_iter-call"),i=e("./_is-array-iter"),c=e("./_an-object"),s=e("./_to-length"),u=e("./core.get-iterator-method");t.exports=function(e,t,r,a,f){var _,l,p,d=f?function(){return e}:u(e),v=n(r,a,t?2:1),h=0;if("function"!=typeof d)throw TypeError(e+" is not iterable!");if(i(d))for(_=s(e.length);_>h;h++)t?v(c(l=e[h])[0],l[1]):v(e[h]);else for(p=d.call(e);!(l=p.next()).done;)o(p,v,l.value,t)}},{"./_an-object":14,"./_ctx":19,"./_is-array-iter":34,"./_iter-call":36,"./_to-length":66,"./core.get-iterator-method":71}],27:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],28:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],29:[function(e,t,r){var n=e("./_object-dp"),o=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return n.f(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":21,"./_object-dp":45,"./_property-desc":52}],30:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":27}],31:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":21,"./_dom-create":22,"./_fails":25}],32:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],33:[function(e,t,r){var n=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./_cof":17}],34:[function(e,t,r){var n=e("./_iterators"),o=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./_iterators":41,"./_wks":70}],35:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],36:[function(e,t,r){var n=e("./_an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var c=e["return"];throw void 0!==c&&n(c.call(e)),i}}},{"./_an-object":14}],37:[function(e,t,r){"use strict";var n=e("./_object-create"),o=e("./_property-desc"),i=e("./_set-to-string-tag"),c={};e("./_hide")(c,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n(c,{next:o(1,r)}),i(e,t+" Iterator")}},{"./_hide":29,"./_object-create":44,"./_property-desc":52,"./_set-to-string-tag":57,"./_wks":70}],38:[function(e,t,r){"use strict";var n=e("./_library"),o=e("./_export"),i=e("./_redefine"),c=e("./_hide"),s=e("./_has"),u=e("./_iterators"),a=e("./_iter-create"),f=e("./_set-to-string-tag"),_=e("./_object-gpo"),l=e("./_wks")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",h="values",y=function(){return this};t.exports=function(e,t,r,b,m,g,j){a(r,t,b);var x,w,k,O=function(e){if(!p&&e in E)return E[e];switch(e){case v:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},M=t+" Iterator",P=m==h,S=!1,E=e.prototype,T=E[l]||E[d]||m&&E[m],A=T||O(m),C=m?P?O("entries"):A:void 0,R="Array"==t?E.entries||T:T;if(R&&(k=_(R.call(new e)),k!==Object.prototype&&(f(k,M,!0),n||s(k,l)||c(k,l,y))),P&&T&&T.name!==h&&(S=!0,A=function(){return T.call(this)}),n&&!j||!p&&!S&&E[l]||c(E,l,A),u[t]=A,u[M]=y,m)if(x={values:P?A:O(h),keys:g?A:O(v),entries:C},j)for(w in x)w in E||i(E,w,x[w]);else o(o.P+o.F*(p||S),t,x);return x}},{"./_export":24,"./_has":28,"./_hide":29,"./_iter-create":37,"./_iterators":41,"./_library":42,"./_object-gpo":48,"./_redefine":54,"./_set-to-string-tag":57,"./_wks":70}],39:[function(e,t,r){var n=e("./_wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(c){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],c=i[n]();c.next=function(){r=!0},i[n]=function(){return c},e(i)}catch(s){}return r}},{"./_wks":70}],40:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],41:[function(e,t,r){t.exports={}},{}],42:[function(e,t,r){t.exports=!0},{}],43:[function(e,t,r){var n,o,i,c=e("./_global"),s=e("./_task").set,u=c.MutationObserver||c.WebKitMutationObserver,a=c.process,f=c.Promise,_="process"==e("./_cof")(a),l=function(){var e,t;for(_&&(e=a.domain)&&e.exit();n;)t=n.fn,t(),n=n.next;o=void 0,e&&e.enter()};if(_)i=function(){a.nextTick(l)};else if(u){var p=!0,d=document.createTextNode("");new u(l).observe(d,{characterData:!0}),i=function(){d.data=p=!p}}else i=f&&f.resolve?function(){f.resolve().then(l)}:function(){s.call(c,l)};t.exports=function(e){var t={fn:e,next:void 0};o&&(o.next=t),n||(n=t,i()),o=t}},{"./_cof":17,"./_global":27,"./_task":62}],44:[function(e,t,r){var n=e("./_an-object"),o=e("./_object-dps"),i=e("./_enum-bug-keys"),c=e("./_shared-key")("IE_PROTO"),s=function(){},u="prototype",a=function(){var t,r=e("./_dom-create")("iframe"),n=i.length,o=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),a=t.F;n--;)delete a[u][i[n]];return a()};t.exports=Object.create||function(e,t){var r;return null!==e?(s[u]=n(e),r=new s,s[u]=null,r[c]=e):r=a(),void 0===t?r:o(r,t)}},{"./_an-object":14,"./_dom-create":22,"./_enum-bug-keys":23,"./_html":30,"./_object-dps":46,"./_shared-key":58}],45:[function(e,t,r){var n=e("./_an-object"),o=e("./_ie8-dom-define"),i=e("./_to-primitive"),c=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(n(e),t=i(t,!0),n(r),o)try{return c(e,t,r)}catch(s){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":14,"./_descriptors":21,"./_ie8-dom-define":31,"./_to-primitive":68}],46:[function(e,t,r){var n=e("./_object-dp"),o=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){o(e);for(var r,c=i(t),s=c.length,u=0;s>u;)n.f(e,r=c[u++],t[r]);return e}},{"./_an-object":14,"./_descriptors":21,"./_object-dp":45,"./_object-keys":50}],47:[function(e,t,r){var n=e("./_object-pie"),o=e("./_property-desc"),i=e("./_to-iobject"),c=e("./_to-primitive"),s=e("./_has"),u=e("./_ie8-dom-define"),a=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?a:function(e,t){if(e=i(e),t=c(t,!0),u)try{return a(e,t)}catch(r){}return s(e,t)?o(!n.f.call(e,t),e[t]):void 0}},{"./_descriptors":21,"./_has":28,"./_ie8-dom-define":31,"./_object-pie":51,"./_property-desc":52,"./_to-iobject":65,"./_to-primitive":68}],48:[function(e,t,r){var n=e("./_has"),o=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=o(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?c:null}},{"./_has":28,"./_shared-key":58,"./_to-object":67}],49:[function(e,t,r){var n=e("./_has"),o=e("./_to-iobject"),i=e("./_array-includes")(!1),c=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,s=o(e),u=0,a=[];for(r in s)r!=c&&n(s,r)&&a.push(r);for(;t.length>u;)n(s,r=t[u++])&&(~i(a,r)||a.push(r));return a}},{"./_array-includes":15,"./_has":28,"./_shared-key":58,"./_to-iobject":65}],50:[function(e,t,r){var n=e("./_object-keys-internal"),o=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return n(e,o)}},{"./_enum-bug-keys":23,"./_object-keys-internal":49}],51:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],52:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],53:[function(e,t,r){var n=e("./_hide");t.exports=function(e,t,r){for(var o in t)r&&e[o]?e[o]=t[o]:n(e,o,t[o]);return e}},{"./_hide":29}],54:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":29}],55:[function(e,t,r){var n=e("./_is-object"),o=e("./_an-object"),i=function(e,t){if(o(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,n){try{n=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),n(t,[]),r=!(t instanceof Array)}catch(o){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:n(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":14,"./_ctx":19,"./_is-object":35,"./_object-gopd":47}],56:[function(e,t,r){"use strict";var n=e("./_global"),o=e("./_core"),i=e("./_object-dp"),c=e("./_descriptors"),s=e("./_wks")("species");t.exports=function(e){var t="function"==typeof o[e]?o[e]:n[e];c&&t&&!t[s]&&i.f(t,s,{configurable:!0,get:function(){return this}})}},{"./_core":18,"./_descriptors":21,"./_global":27,"./_object-dp":45,"./_wks":70}],57:[function(e,t,r){var n=e("./_object-dp").f,o=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./_has":28,"./_object-dp":45,"./_wks":70}],58:[function(e,t,r){var n=e("./_shared")("keys"),o=e("./_uid");t.exports=function(e){return n[e]||(n[e]=o(e))}},{"./_shared":59,"./_uid":69}],59:[function(e,t,r){var n=e("./_global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":27}],60:[function(e,t,r){var n=e("./_an-object"),o=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,c=n(e).constructor;return void 0===c||void 0==(r=n(c)[i])?t:o(r)}},{"./_a-function":11,"./_an-object":14,"./_wks":70}],61:[function(e,t,r){var n=e("./_to-integer"),o=e("./_defined");t.exports=function(e){return function(t,r){var i,c,s=String(o(t)),u=n(r),a=s.length;return 0>u||u>=a?e?"":void 0:(i=s.charCodeAt(u),55296>i||i>56319||u+1===a||(c=s.charCodeAt(u+1))<56320||c>57343?e?s.charAt(u):i:e?s.slice(u,u+2):(i-55296<<10)+(c-56320)+65536)}}},{"./_defined":20,"./_to-integer":64}],62:[function(e,t,r){var n,o,i,c=e("./_ctx"),s=e("./_invoke"),u=e("./_html"),a=e("./_dom-create"),f=e("./_global"),_=f.process,l=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=0,h={},y="onreadystatechange",b=function(){var e=+this;if(h.hasOwnProperty(e)){var t=h[e];delete h[e],t()}},m=function(e){b.call(e.data)};l&&p||(l=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return h[++v]=function(){s("function"==typeof e?e:Function(e),t)},n(v),v},p=function(e){delete h[e]},"process"==e("./_cof")(_)?n=function(e){_.nextTick(c(b,e,1))}:d?(o=new d,i=o.port2,o.port1.onmessage=m,n=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",m,!1)):n=y in a("script")?function(e){u.appendChild(a("script"))[y]=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(c(b,e,1),0)}),t.exports={set:l,clear:p}},{"./_cof":17,"./_ctx":19,"./_dom-create":22,"./_global":27,"./_html":30,"./_invoke":32}],63:[function(e,t,r){var n=e("./_to-integer"),o=Math.max,i=Math.min;t.exports=function(e,t){return e=n(e),0>e?o(e+t,0):i(e,t)}},{"./_to-integer":64}],64:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],65:[function(e,t,r){var n=e("./_iobject"),o=e("./_defined");t.exports=function(e){return n(o(e))}},{"./_defined":20,"./_iobject":33}],66:[function(e,t,r){var n=e("./_to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./_to-integer":64}],67:[function(e,t,r){var n=e("./_defined");t.exports=function(e){return Object(n(e))}},{"./_defined":20}],68:[function(e,t,r){var n=e("./_is-object");t.exports=function(e,t){if(!n(e))return e;var r,o;if(t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;if("function"==typeof(r=e.valueOf)&&!n(o=r.call(e)))return o;if(!t&&"function"==typeof(r=e.toString)&&!n(o=r.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":35}],69:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],70:[function(e,t,r){var n=e("./_shared")("wks"),o=e("./_uid"),i=e("./_global").Symbol,c="function"==typeof i;t.exports=function(e){return n[e]||(n[e]=c&&i[e]||(c?i:o)("Symbol."+e))}},{"./_global":27,"./_shared":59,"./_uid":69}],71:[function(e,t,r){var n=e("./_classof"),o=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||i[n(e)]:void 0}},{"./_classof":16,"./_core":18,"./_iterators":41,"./_wks":70}],72:[function(e,t,r){"use strict";var n=e("./_add-to-unscopables"),o=e("./_iter-step"),i=e("./_iterators"),c=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=c(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./_add-to-unscopables":12,"./_iter-define":38,"./_iter-step":40,"./_iterators":41,"./_to-iobject":65}],73:[function(e,t,r){var n=e("./_export");n(n.S+n.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":21,"./_export":24,"./_object-dp":45}],74:[function(e,t,r){},{}],75:[function(e,t,r){"use strict";var n,o,i,c=e("./_library"),s=e("./_global"),u=e("./_ctx"),a=e("./_classof"),f=e("./_export"),_=e("./_is-object"),l=(e("./_an-object"),e("./_a-function")),p=e("./_an-instance"),d=e("./_for-of"),v=(e("./_set-proto").set,e("./_species-constructor")),h=e("./_task").set,y=e("./_microtask"),b="Promise",m=s.TypeError,g=s.process,j=s[b],g=s.process,x="process"==a(g),w=function(){},k=!!function(){try{var t=j.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(w,w)};return(x||"function"==typeof PromiseRejectionEvent)&&t.then(w)instanceof r}catch(n){}}(),O=function(e,t){return e===t||e===j&&t===i},M=function(e){var t;return _(e)&&"function"==typeof(t=e.then)?t:!1},P=function(e){return O(j,e)?new S(e):new o(e)},S=o=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw m("Bad Promise constructor");t=e,r=n}),this.resolve=l(t),this.reject=l(r)},E=function(e){try{e()}catch(t){return{error:t}}},T=function(e,t){if(!e._n){e._n=!0;var r=e._c;y(function(){for(var n=e._v,o=1==e._s,i=0,c=function(t){var r,i,c=o?t.ok:t.fail,s=t.resolve,u=t.reject,a=t.domain;try{c?(o||(2==e._h&&R(e),e._h=1),c===!0?r=n:(a&&a.enter(),r=c(n),a&&a.exit()),r===t.promise?u(m("Promise-chain cycle")):(i=M(r))?i.call(r,s,u):s(r)):u(n)}catch(f){u(f)}};r.length>i;)c(r[i++]);e._c=[],e._n=!1,t&&!e._h&&A(e)})}},A=function(e){h.call(s,function(){var t,r,n,o=e._v;if(C(e)&&(t=E(function(){x?g.emit("unhandledRejection",o,e):(r=s.onunhandledrejection)?r({promise:e,reason:o}):(n=s.console)&&n.error&&n.error("Unhandled promise rejection",o)}),e._h=x||C(e)?2:1),e._a=void 0,t)throw t.error})},C=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if(t=r[n++],t.fail||!C(t.promise))return!1;return!0},R=function(e){h.call(s,function(){var t;x?g.emit("rejectionHandled",e):(t=s.onrejectionhandled)&&t({promise:e,reason:e._v})})},F=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),T(t,!0))},L=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw m("Promise can't be resolved itself");(t=M(e))?y(function(){var n={_w:r,_d:!1};try{t.call(e,u(L,n,1),u(F,n,1))}catch(o){F.call(n,o)}}):(r._v=e,r._s=1,T(r,!1))}catch(n){F.call({_w:r,_d:!1},n)}}};k||(j=function(e){p(this,j,b,"_h"),l(e),n.call(this);try{e(u(L,this,1),u(F,this,1))}catch(t){F.call(this,t)}},n=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=e("./_redefine-all")(j.prototype,{then:function(e,t){var r=P(v(this,j));return r.ok="function"==typeof e?e:!0,r.fail="function"==typeof t&&t,r.domain=x?g.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),S=function(){var e=new n;this.promise=e,this.resolve=u(L,e,1),this.reject=u(F,e,1)}),f(f.G+f.W+f.F*!k,{Promise:j}),e("./_set-to-string-tag")(j,b),e("./_set-species")(b),i=e("./_core")[b],f(f.S+f.F*!k,b,{reject:function(e){var t=P(this),r=t.reject;return r(e),t.promise}}),f(f.S+f.F*(c||!k),b,{resolve:function(e){if(e instanceof j&&O(e.constructor,this))return e;var t=P(this),r=t.resolve;return r(e),t.promise}}),f(f.S+f.F*!(k&&e("./_iter-detect")(function(e){j.all(e)["catch"](w)})),b,{all:function(e){var t=this,r=P(t),n=r.resolve,o=r.reject,i=E(function(){var r=[],i=0,c=1;d(e,!1,function(e){var s=i++,u=!1;r.push(void 0),c++,t.resolve(e).then(function(e){u||(u=!0,r[s]=e,--c||n(r))},o)}),--c||n(r)});return i&&o(i.error),r.promise},race:function(e){var t=this,r=P(t),n=r.reject,o=E(function(){d(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./_a-function":11,"./_an-instance":13,"./_an-object":14,"./_classof":16,"./_core":18,"./_ctx":19,"./_export":24,"./_for-of":26,"./_global":27,"./_is-object":35,"./_iter-detect":39,"./_library":42,"./_microtask":43,"./_redefine-all":53,"./_set-proto":55,"./_set-species":56,"./_set-to-string-tag":57,"./_species-constructor":60,"./_task":62,"./_wks":70}],76:[function(e,t,r){"use strict";var n=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":38,"./_string-at":61}],77:[function(e,t,r){e("./es6.array.iterator");for(var n=e("./_global"),o=e("./_hide"),i=e("./_iterators"),c=e("./_wks")("toStringTag"),s=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],u=0;5>u;u++){var a=s[u],f=n[a],_=f&&f.prototype;_&&!_[c]&&o(_,c,a),i[a]=i.Array}},{"./_global":27,"./_hide":29,"./_iterators":41,"./_wks":70,"./es6.array.iterator":72}],78:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var o=e("./hyperty-discovery/HypertyDiscovery"),i=n(o);r["default"]=i["default"],t.exports=r["default"]},{"./hyperty-discovery/HypertyDiscovery":79,"babel-runtime/helpers/interop-require-default":7}],79:[function(e,t,r){"use strict";var n=e("babel-runtime/helpers/create-class")["default"],o=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/promise")["default"];Object.defineProperty(r,"__esModule",{value:!0});var c=e("../utils/utils"),s=function(){function e(t,r){o(this,e);var n=this;n.messageBus=r,n.domain=(0,c.divideURL)(t).domain,n.discoveryURL=t}return n(e,[{key:"discoverHypertyPerUser",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),c={type:"READ",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:o}};return console.log("Message: ",c,n,o),new i(function(t,n){r.messageBus.postMessage(c,function(r){console.log("message reply",r);var o=void 0,i=void 0,c=void 0,s=r.body.value;for(o in s)if(void 0!==s[o].lastModified)if(void 0===i)i=new Date(s[o].lastModified),c=o;else{var u=new Date(s[o].lastModified);i.getTime()<u.getTime()&&(i=u,c=o)}console.log("Last Hyperty: ",c,i);var a=c;if(void 0===a)return n("User Hyperty not found");var f={id:e,descriptor:s[a].descriptor,hypertyURL:a};console.log("===> hypertyDiscovery messageBundle: ",f),t(f)})})}}]),e}();r["default"]=s,t.exports=r["default"]},{"../utils/utils":80,"babel-runtime/core-js/promise":2,"babel-runtime/helpers/class-call-check":3,"babel-runtime/helpers/create-class":5}],80:[function(e,t,r){"use strict";function n(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function o(e){return e?JSON.parse(JSON.stringify(e)):void 0}Object.defineProperty(r,"__esModule",{value:!0}),r.divideURL=n,r.deepClone=o},{}]},{},[78])(78)});
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

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Syncher=e()}}(function(){return function e(t,r,o){function n(s,c){if(!r[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return n(r?r:e)},l,l.exports,e,t,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":19}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":20}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0}},{"core-js/library/fn/object/get-own-property-descriptor":21}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":22}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":23}],6:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":24}],7:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":25}],8:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":26}],9:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":27}],10:[function(e,t,r){t.exports=e("./classCallCheck.js")},{"./classCallCheck.js":11}],11:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],12:[function(e,t,r){t.exports=e("./createClass.js")},{"./createClass.js":13}],13:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("babel-runtime/core-js/object/define-property"),i=o(n);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i["default"])(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}()},{"babel-runtime/core-js/object/define-property":2}],14:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("babel-runtime/core-js/object/get-prototype-of"),i=o(n),s=e("babel-runtime/core-js/object/get-own-property-descriptor"),c=o(s);r["default"]=function a(e,t,r){null===e&&(e=Function.prototype);var o=(0,c["default"])(e,t);if(void 0===o){var n=(0,i["default"])(e);return null===n?void 0:a(n,t,r)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(r)}},{"babel-runtime/core-js/object/get-own-property-descriptor":3,"babel-runtime/core-js/object/get-prototype-of":4}],15:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("babel-runtime/core-js/object/set-prototype-of"),i=o(n),s=e("babel-runtime/core-js/object/create"),c=o(s),a=e("babel-runtime/helpers/typeof"),u=o(a);r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,u["default"])(t)));e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i["default"]?(0,i["default"])(e,t):e.__proto__=t)}},{"babel-runtime/core-js/object/create":1,"babel-runtime/core-js/object/set-prototype-of":6,"babel-runtime/helpers/typeof":18}],16:[function(e,t,r){t.exports=e("./interopRequireDefault.js")},{"./interopRequireDefault.js":17}],17:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e){return e&&e.__esModule?e:{"default":e}}},{}],18:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("babel-runtime/core-js/symbol/iterator"),i=o(n),s=e("babel-runtime/core-js/symbol"),c=o(s),a="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(e){return typeof e}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":typeof e};r["default"]="function"==typeof c["default"]&&"symbol"===a(i["default"])?function(e){return"undefined"==typeof e?"undefined":a(e)}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":"undefined"==typeof e?"undefined":a(e)}},{"babel-runtime/core-js/symbol":8,"babel-runtime/core-js/symbol/iterator":9}],19:[function(e,t,r){e("../../modules/es6.object.create");var o=e("../../modules/_core").Object;t.exports=function(e,t){return o.create(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.create":98}],20:[function(e,t,r){e("../../modules/es6.object.define-property");var o=e("../../modules/_core").Object;t.exports=function(e,t,r){return o.defineProperty(e,t,r)}},{"../../modules/_core":35,"../../modules/es6.object.define-property":99}],21:[function(e,t,r){e("../../modules/es6.object.get-own-property-descriptor");var o=e("../../modules/_core").Object;t.exports=function(e,t){return o.getOwnPropertyDescriptor(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.get-own-property-descriptor":100}],22:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/_core").Object.getPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.get-prototype-of":101}],23:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":35,"../../modules/es6.object.keys":102}],24:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/_core").Object.setPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.set-prototype-of":103}],25:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":35,"../modules/es6.object.to-string":104,"../modules/es6.promise":105,"../modules/es6.string.iterator":106,"../modules/web.dom.iterable":108}],26:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),t.exports=e("../../modules/_core").Symbol},{"../../modules/_core":35,"../../modules/es6.object.to-string":104,"../../modules/es6.symbol":107}],27:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/_wks")("iterator")},{"../../modules/_wks":95,"../../modules/es6.string.iterator":106,"../../modules/web.dom.iterable":108}],28:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],29:[function(e,t,r){t.exports=function(){}},{}],30:[function(e,t,r){t.exports=function(e,t,r,o){if(!(e instanceof t)||void 0!==o&&o in e)throw TypeError(r+": incorrect invocation!");return e}},{}],31:[function(e,t,r){var o=e("./_is-object");t.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":54}],32:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var c,a=o(t),u=n(a.length),l=i(s,u);if(e&&r!=r){for(;u>l;)if(c=a[l++],c!=c)return!0}else for(;u>l;l++)if((e||l in a)&&a[l]===r)return e||l;return!e&&-1}}},{"./_to-index":88,"./_to-iobject":90,"./_to-length":91}],33:[function(e,t,r){var o=e("./_cof"),n=e("./_wks")("toStringTag"),i="Arguments"==o(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),n))?r:i?o(t):"Object"==(c=o(t))&&"function"==typeof t.callee?"Arguments":c}},{"./_cof":34,"./_wks":95}],34:[function(e,t,r){var o={}.toString;t.exports=function(e){return o.call(e).slice(8,-1)}},{}],35:[function(e,t,r){var o=t.exports={version:"2.2.1"};"number"==typeof __e&&(__e=o)},{}],36:[function(e,t,r){var o=e("./_a-function");t.exports=function(e,t,r){if(o(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,n){return e.call(t,r,o,n)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":28}],37:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],38:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":43}],39:[function(e,t,r){var o=e("./_is-object"),n=e("./_global").document,i=o(n)&&o(n.createElement);t.exports=function(e){return i?n.createElement(e):{}}},{"./_global":45,"./_is-object":54}],40:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],41:[function(e,t,r){var o=e("./_object-keys"),n=e("./_object-gops"),i=e("./_object-pie");t.exports=function(e){var t=o(e),r=n.f;if(r)for(var s,c=r(e),a=i.f,u=0;c.length>u;)a.call(e,s=c[u++])&&t.push(s);return t}},{"./_object-gops":71,"./_object-keys":74,"./_object-pie":75}],42:[function(e,t,r){var o=e("./_global"),n=e("./_core"),i=e("./_ctx"),s=e("./_hide"),c="prototype",a=function(e,t,r){var u,l,f,_=e&a.F,d=e&a.G,p=e&a.S,b=e&a.P,h=e&a.B,y=e&a.W,v=d?n:n[t]||(n[t]={}),j=v[c],m=d?o:p?o[t]:(o[t]||{})[c];d&&(r=t);for(u in r)l=!_&&m&&void 0!==m[u],l&&u in v||(f=l?m[u]:r[u],v[u]=d&&"function"!=typeof m[u]?r[u]:h&&l?i(f,o):y&&m[u]==f?function(e){var t=function(t,r,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,o)}return e.apply(this,arguments)};return t[c]=e[c],t}(f):b&&"function"==typeof f?i(Function.call,f):f,b&&((v.virtual||(v.virtual={}))[u]=f,e&a.R&&j&&!j[u]&&s(j,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},{"./_core":35,"./_ctx":36,"./_global":45,"./_hide":47}],43:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],44:[function(e,t,r){var o=e("./_ctx"),n=e("./_iter-call"),i=e("./_is-array-iter"),s=e("./_an-object"),c=e("./_to-length"),a=e("./core.get-iterator-method");t.exports=function(e,t,r,u,l){var f,_,d,p=l?function(){return e}:a(e),b=o(r,u,t?2:1),h=0;if("function"!=typeof p)throw TypeError(e+" is not iterable!");if(i(p))for(f=c(e.length);f>h;h++)t?b(s(_=e[h])[0],_[1]):b(e[h]);else for(d=p.call(e);!(_=d.next()).done;)n(d,b,_.value,t)}},{"./_an-object":31,"./_ctx":36,"./_is-array-iter":52,"./_iter-call":55,"./_to-length":91,"./core.get-iterator-method":96}],45:[function(e,t,r){var o=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},{}],46:[function(e,t,r){var o={}.hasOwnProperty;t.exports=function(e,t){return o.call(e,t)}},{}],47:[function(e,t,r){var o=e("./_object-dp"),n=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return o.f(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":38,"./_object-dp":66,"./_property-desc":77}],48:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":45}],49:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":38,"./_dom-create":39,"./_fails":43}],50:[function(e,t,r){t.exports=function(e,t,r){var o=void 0===r;switch(t.length){case 0:return o?e():e.call(r);case 1:return o?e(t[0]):e.call(r,t[0]);case 2:return o?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return o?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return o?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],51:[function(e,t,r){var o=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},{"./_cof":34}],52:[function(e,t,r){var o=e("./_iterators"),n=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(o.Array===e||i[n]===e)}},{"./_iterators":60,"./_wks":95}],53:[function(e,t,r){var o=e("./_cof");t.exports=Array.isArray||function(e){return"Array"==o(e)}},{"./_cof":34}],54:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],55:[function(e,t,r){var o=e("./_an-object");t.exports=function(e,t,r,n){try{return n?t(o(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&o(s.call(e)),i}}},{"./_an-object":31}],56:[function(e,t,r){"use strict";var o=e("./_object-create"),n=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=o(s,{next:n(1,r)}),i(e,t+" Iterator")}},{"./_hide":47,"./_object-create":65,"./_property-desc":77,"./_set-to-string-tag":82,"./_wks":95}],57:[function(e,t,r){"use strict";var o=e("./_library"),n=e("./_export"),i=e("./_redefine"),s=e("./_hide"),c=e("./_has"),a=e("./_iterators"),u=e("./_iter-create"),l=e("./_set-to-string-tag"),f=e("./_object-gpo"),_=e("./_wks")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",b="keys",h="values",y=function(){return this};t.exports=function(e,t,r,v,j,m,g){u(r,t,v);var O,k,w,x=function(e){if(!d&&e in C)return C[e];switch(e){case b:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},S=t+" Iterator",E=j==h,T=!1,C=e.prototype,P=C[_]||C[p]||j&&C[j],R=P||x(j),M=j?E?x("entries"):R:void 0,D="Array"==t?C.entries||P:P;if(D&&(w=f(D.call(new e)),w!==Object.prototype&&(l(w,S,!0),o||c(w,_)||s(w,_,y))),E&&P&&P.name!==h&&(T=!0,R=function(){return P.call(this)}),o&&!g||!d&&!T&&C[_]||s(C,_,R),a[t]=R,a[S]=y,j)if(O={values:E?R:x(h),keys:m?R:x(b),entries:M},g)for(k in O)k in C||i(C,k,O[k]);else n(n.P+n.F*(d||T),t,O);return O}},{"./_export":42,"./_has":46,"./_hide":47,"./_iter-create":56,"./_iterators":60,"./_library":62,"./_object-gpo":72,"./_redefine":79,"./_set-to-string-tag":82,"./_wks":95}],58:[function(e,t,r){var o=e("./_wks")("iterator"),n=!1;try{var i=[7][o]();i["return"]=function(){n=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!n)return!1;var r=!1;try{var i=[7],s=i[o]();s.next=function(){r=!0},i[o]=function(){return s},e(i)}catch(c){}return r}},{"./_wks":95}],59:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],60:[function(e,t,r){t.exports={}},{}],61:[function(e,t,r){var o=e("./_object-keys"),n=e("./_to-iobject");t.exports=function(e,t){for(var r,i=n(e),s=o(i),c=s.length,a=0;c>a;)if(i[r=s[a++]]===t)return r}},{"./_object-keys":74,"./_to-iobject":90}],62:[function(e,t,r){t.exports=!0},{}],63:[function(e,t,r){var o=e("./_uid")("meta"),n=e("./_is-object"),i=e("./_has"),s=e("./_object-dp").f,c=0,a=Object.isExtensible||function(){return!0},u=!e("./_fails")(function(){return a(Object.preventExtensions({}))}),l=function(e){s(e,o,{value:{i:"O"+ ++c,w:{}}})},f=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,o)){if(!a(e))return"F";if(!t)return"E";l(e)}return e[o].i},_=function(e,t){if(!i(e,o)){if(!a(e))return!0;if(!t)return!1;l(e)}return e[o].w},d=function(e){return u&&p.NEED&&a(e)&&!i(e,o)&&l(e),e},p=t.exports={KEY:o,NEED:!1,fastKey:f,getWeak:_,onFreeze:d}},{"./_fails":43,"./_has":46,"./_is-object":54,"./_object-dp":66,"./_uid":94}],64:[function(e,t,r){var o,n,i,s=e("./_global"),c=e("./_task").set,a=s.MutationObserver||s.WebKitMutationObserver,u=s.process,l=s.Promise,f="process"==e("./_cof")(u),_=function(){var e,t;for(f&&(e=u.domain)&&e.exit();o;)t=o.fn,t(),o=o.next;n=void 0,e&&e.enter()};if(f)i=function(){u.nextTick(_)};else if(a){var d=!0,p=document.createTextNode("");new a(_).observe(p,{characterData:!0}),i=function(){p.data=d=!d}}else i=l&&l.resolve?function(){l.resolve().then(_)}:function(){c.call(s,_)};t.exports=function(e){var t={fn:e,next:void 0};n&&(n.next=t),o||(o=t,i()),n=t}},{"./_cof":34,"./_global":45,"./_task":87}],65:[function(e,t,r){var o=e("./_an-object"),n=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,r=e("./_dom-create")("iframe"),o=i.length,n=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+n),t.close(),u=t.F;o--;)delete u[a][i[o]];return u()};t.exports=Object.create||function(e,t){var r;return null!==e?(c[a]=o(e),r=new c,c[a]=null,r[s]=e):r=u(),void 0===t?r:n(r,t)}},{"./_an-object":31,"./_dom-create":39,"./_enum-bug-keys":40,"./_html":48,"./_object-dps":67,"./_shared-key":83}],66:[function(e,t,r){var o=e("./_an-object"),n=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(o(e),t=i(t,!0),o(r),n)try{return s(e,t,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":31,"./_descriptors":38,"./_ie8-dom-define":49,"./_to-primitive":93}],67:[function(e,t,r){var o=e("./_object-dp"),n=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){n(e);for(var r,s=i(t),c=s.length,a=0;c>a;)o.f(e,r=s[a++],t[r]);return e}},{"./_an-object":31,"./_descriptors":38,"./_object-dp":66,"./_object-keys":74}],68:[function(e,t,r){var o=e("./_object-pie"),n=e("./_property-desc"),i=e("./_to-iobject"),s=e("./_to-primitive"),c=e("./_has"),a=e("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?u:function(e,t){if(e=i(e),t=s(t,!0),a)try{return u(e,t)}catch(r){}return c(e,t)?n(!o.f.call(e,t),e[t]):void 0}},{"./_descriptors":38,"./_has":46,"./_ie8-dom-define":49,"./_object-pie":75,"./_property-desc":77,"./_to-iobject":90,"./_to-primitive":93}],69:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_object-gopn").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return n(e)}catch(t){return s.slice()}};t.exports.f=function(e){return s&&"[object Window]"==i.call(e)?c(e):n(o(e))}},{"./_object-gopn":70,"./_to-iobject":90}],70:[function(e,t,r){var o=e("./_object-keys-internal"),n=e("./_enum-bug-keys").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return o(e,n)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],71:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],72:[function(e,t,r){var o=e("./_has"),n=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=n(e),o(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":46,"./_shared-key":83,"./_to-object":92}],73:[function(e,t,r){var o=e("./_has"),n=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,c=n(e),a=0,u=[];for(r in c)r!=s&&o(c,r)&&u.push(r);for(;t.length>a;)o(c,r=t[a++])&&(~i(u,r)||u.push(r));return u}},{"./_array-includes":32,"./_has":46,"./_shared-key":83,"./_to-iobject":90}],74:[function(e,t,r){var o=e("./_object-keys-internal"),n=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return o(e,n)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],75:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],76:[function(e,t,r){var o=e("./_export"),n=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],s={};s[e]=t(r),o(o.S+o.F*i(function(){r(1)}),"Object",s)}},{"./_core":35,"./_export":42,"./_fails":43}],77:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],78:[function(e,t,r){var o=e("./_hide");t.exports=function(e,t,r){for(var n in t)r&&e[n]?e[n]=t[n]:o(e,n,t[n]);return e}},{"./_hide":47}],79:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":47}],80:[function(e,t,r){var o=e("./_is-object"),n=e("./_an-object"),i=function(e,t){if(n(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":31,"./_ctx":36,"./_is-object":54,"./_object-gopd":68}],81:[function(e,t,r){"use strict";var o=e("./_global"),n=e("./_core"),i=e("./_object-dp"),s=e("./_descriptors"),c=e("./_wks")("species");t.exports=function(e){var t="function"==typeof n[e]?n[e]:o[e];s&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},{"./_core":35,"./_descriptors":38,"./_global":45,"./_object-dp":66,"./_wks":95}],82:[function(e,t,r){var o=e("./_object-dp").f,n=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!n(e=r?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},{"./_has":46,"./_object-dp":66,"./_wks":95}],83:[function(e,t,r){var o=e("./_shared")("keys"),n=e("./_uid");t.exports=function(e){return o[e]||(o[e]=n(e))}},{"./_shared":84,"./_uid":94}],84:[function(e,t,r){var o=e("./_global"),n="__core-js_shared__",i=o[n]||(o[n]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":45}],85:[function(e,t,r){var o=e("./_an-object"),n=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,s=o(e).constructor;return void 0===s||void 0==(r=o(s)[i])?t:n(r)}},{"./_a-function":28,"./_an-object":31,"./_wks":95}],86:[function(e,t,r){var o=e("./_to-integer"),n=e("./_defined");t.exports=function(e){return function(t,r){var i,s,c=String(n(t)),a=o(r),u=c.length;return 0>a||a>=u?e?"":void 0:(i=c.charCodeAt(a),55296>i||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?e?c.charAt(a):i:e?c.slice(a,a+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":37,"./_to-integer":89}],87:[function(e,t,r){var o,n,i,s=e("./_ctx"),c=e("./_invoke"),a=e("./_html"),u=e("./_dom-create"),l=e("./_global"),f=l.process,_=l.setImmediate,d=l.clearImmediate,p=l.MessageChannel,b=0,h={},y="onreadystatechange",v=function(){var e=+this;if(h.hasOwnProperty(e)){var t=h[e];delete h[e],t()}},j=function(e){v.call(e.data)};_&&d||(_=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return h[++b]=function(){c("function"==typeof e?e:Function(e),t)},o(b),b},d=function(e){delete h[e]},"process"==e("./_cof")(f)?o=function(e){f.nextTick(s(v,e,1))}:p?(n=new p,i=n.port2,n.port1.onmessage=j,o=s(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(o=function(e){l.postMessage(e+"","*")},l.addEventListener("message",j,!1)):o=y in u("script")?function(e){a.appendChild(u("script"))[y]=function(){a.removeChild(this),v.call(e)}}:function(e){setTimeout(s(v,e,1),0)}),t.exports={set:_,clear:d}},{"./_cof":34,"./_ctx":36,"./_dom-create":39,"./_global":45,"./_html":48,"./_invoke":50}],88:[function(e,t,r){var o=e("./_to-integer"),n=Math.max,i=Math.min;t.exports=function(e,t){return e=o(e),0>e?n(e+t,0):i(e,t)}},{"./_to-integer":89}],89:[function(e,t,r){var o=Math.ceil,n=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?n:o)(e)}},{}],90:[function(e,t,r){var o=e("./_iobject"),n=e("./_defined");t.exports=function(e){return o(n(e))}},{"./_defined":37,"./_iobject":51}],91:[function(e,t,r){var o=e("./_to-integer"),n=Math.min;t.exports=function(e){return e>0?n(o(e),9007199254740991):0}},{"./_to-integer":89}],92:[function(e,t,r){var o=e("./_defined");t.exports=function(e){return Object(o(e))}},{"./_defined":37}],93:[function(e,t,r){var o=e("./_is-object");t.exports=function(e,t){if(!o(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!o(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":54}],94:[function(e,t,r){var o=0,n=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++o+n).toString(36))}},{}],95:[function(e,t,r){var o=e("./_shared")("wks"),n=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i;t.exports=function(e){return o[e]||(o[e]=s&&i[e]||(s?i:n)("Symbol."+e))}},{"./_global":45,"./_shared":84,"./_uid":94}],96:[function(e,t,r){var o=e("./_classof"),n=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){return void 0!=e?e[n]||e["@@iterator"]||i[o(e)]:void 0}},{"./_classof":33,"./_core":35,"./_iterators":60,"./_wks":95}],97:[function(e,t,r){"use strict";var o=e("./_add-to-unscopables"),n=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,n(1)):"keys"==t?n(0,r):"values"==t?n(0,e[r]):n(0,[r,e[r]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},{"./_add-to-unscopables":29,"./_iter-define":57,"./_iter-step":59,"./_iterators":60,"./_to-iobject":90}],98:[function(e,t,r){var o=e("./_export");o(o.S,"Object",{create:e("./_object-create")})},{"./_export":42,"./_object-create":65}],99:[function(e,t,r){var o=e("./_export");o(o.S+o.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":38,"./_export":42,"./_object-dp":66}],100:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_object-gopd").f;e("./_object-sap")("getOwnPropertyDescriptor",function(){return function(e,t){return n(o(e),t)}})},{"./_object-gopd":68,"./_object-sap":76,"./_to-iobject":90}],101:[function(e,t,r){var o=e("./_to-object"),n=e("./_object-gpo");e("./_object-sap")("getPrototypeOf",function(){return function(e){return n(o(e))}})},{"./_object-gpo":72,"./_object-sap":76,"./_to-object":92}],102:[function(e,t,r){var o=e("./_to-object"),n=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return n(o(e))}})},{"./_object-keys":74,"./_object-sap":76,"./_to-object":92}],103:[function(e,t,r){var o=e("./_export");o(o.S,"Object",{setPrototypeOf:e("./_set-proto").set})},{"./_export":42,"./_set-proto":80}],104:[function(e,t,r){},{}],105:[function(e,t,r){"use strict";var o,n,i,s=e("./_library"),c=e("./_global"),a=e("./_ctx"),u=e("./_classof"),l=e("./_export"),f=e("./_is-object"),_=(e("./_an-object"),e("./_a-function")),d=e("./_an-instance"),p=e("./_for-of"),b=(e("./_set-proto").set,e("./_species-constructor")),h=e("./_task").set,y=e("./_microtask"),v="Promise",j=c.TypeError,m=c.process,g=c[v],m=c.process,O="process"==u(m),k=function(){},w=!!function(){try{var t=g.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(k,k)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof r}catch(o){}}(),x=function(e,t){return e===t||e===g&&t===i},S=function(e){var t;return f(e)&&"function"==typeof(t=e.then)?t:!1},E=function(e){return x(g,e)?new T(e):new n(e)},T=n=function(e){var t,r;this.promise=new e(function(e,o){if(void 0!==t||void 0!==r)throw j("Bad Promise constructor");t=e,r=o}),this.resolve=_(t),this.reject=_(r)},C=function(e){try{e()}catch(t){return{error:t}}},P=function(e,t){if(!e._n){e._n=!0;var r=e._c;y(function(){for(var o=e._v,n=1==e._s,i=0,s=function(t){var r,i,s=n?t.ok:t.fail,c=t.resolve,a=t.reject,u=t.domain;try{s?(n||(2==e._h&&D(e),e._h=1),s===!0?r=o:(u&&u.enter(),r=s(o),u&&u.exit()),r===t.promise?a(j("Promise-chain cycle")):(i=S(r))?i.call(r,c,a):c(r)):a(o)}catch(l){a(l)}};r.length>i;)s(r[i++]);e._c=[],e._n=!1,t&&!e._h&&R(e)})}},R=function(e){h.call(c,function(){var t,r,o,n=e._v;if(M(e)&&(t=C(function(){O?m.emit("unhandledRejection",n,e):(r=c.onunhandledrejection)?r({promise:e,reason:n}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",n)}),e._h=O||M(e)?2:1),e._a=void 0,t)throw t.error})},M=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,o=0;r.length>o;)if(t=r[o++],t.fail||!M(t.promise))return!1;return!0},D=function(e){h.call(c,function(){var t;O?m.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},A=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),P(t,!0))},L=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw j("Promise can't be resolved itself");(t=S(e))?y(function(){var o={_w:r,_d:!1};try{t.call(e,a(L,o,1),a(A,o,1))}catch(n){A.call(o,n)}}):(r._v=e,r._s=1,P(r,!1))}catch(o){A.call({_w:r,_d:!1},o)}}};w||(g=function(e){d(this,g,v,"_h"),_(e),o.call(this);try{e(a(L,this,1),a(A,this,1))}catch(t){A.call(this,t)}},o=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=e("./_redefine-all")(g.prototype,{then:function(e,t){var r=E(b(this,g));return r.ok="function"==typeof e?e:!0,r.fail="function"==typeof t&&t,r.domain=O?m.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&P(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),T=function(){var e=new o;this.promise=e,this.resolve=a(L,e,1),this.reject=a(A,e,1)}),l(l.G+l.W+l.F*!w,{Promise:g}),e("./_set-to-string-tag")(g,v),e("./_set-species")(v),i=e("./_core")[v],l(l.S+l.F*!w,v,{reject:function(e){var t=E(this),r=t.reject;return r(e),t.promise}}),l(l.S+l.F*(s||!w),v,{resolve:function(e){if(e instanceof g&&x(e.constructor,this))return e;var t=E(this),r=t.resolve;return r(e),t.promise}}),l(l.S+l.F*!(w&&e("./_iter-detect")(function(e){g.all(e)["catch"](k)})),v,{all:function(e){var t=this,r=E(t),o=r.resolve,n=r.reject,i=C(function(){var r=[],i=0,s=1;p(e,!1,function(e){var c=i++,a=!1;r.push(void 0),s++,t.resolve(e).then(function(e){a||(a=!0,r[c]=e,--s||o(r))},n)}),--s||o(r)});return i&&n(i.error),r.promise},race:function(e){var t=this,r=E(t),o=r.reject,n=C(function(){p(e,!1,function(e){t.resolve(e).then(r.resolve,o)})});return n&&o(n.error),r.promise}})},{"./_a-function":28,"./_an-instance":30,"./_an-object":31,"./_classof":33,"./_core":35,"./_ctx":36,"./_export":42,"./_for-of":44,"./_global":45,"./_is-object":54,"./_iter-detect":58,"./_library":62,"./_microtask":64,"./_redefine-all":78,"./_set-proto":80,"./_set-species":81,"./_set-to-string-tag":82,"./_species-constructor":85,"./_task":87,"./_wks":95}],106:[function(e,t,r){"use strict";var o=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=o(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":57,"./_string-at":86}],107:[function(e,t,r){"use strict";var o=e("./_global"),n=e("./_core"),i=e("./_has"),s=e("./_descriptors"),c=e("./_export"),a=e("./_redefine"),u=e("./_meta").KEY,l=e("./_fails"),f=e("./_shared"),_=e("./_set-to-string-tag"),d=e("./_uid"),p=e("./_wks"),b=e("./_keyof"),h=e("./_enum-keys"),y=e("./_is-array"),v=e("./_an-object"),j=e("./_to-iobject"),m=e("./_to-primitive"),g=e("./_property-desc"),O=e("./_object-create"),k=e("./_object-gopn-ext"),w=e("./_object-gopd"),x=e("./_object-dp"),S=w.f,E=x.f,T=k.f,C=o.Symbol,P=o.JSON,R=P&&P.stringify,M=!1,D="prototype",A=p("_hidden"),L=p("toPrimitive"),N={}.propertyIsEnumerable,I=f("symbol-registry"),F=f("symbols"),U=Object[D],H="function"==typeof C,q=o.QObject,V=s&&l(function(){
return 7!=O(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(e,t,r){var o=S(U,t);o&&delete U[t],E(e,t,r),o&&e!==U&&E(U,t,o)}:E,B=function(e){var t=F[e]=O(C[D]);return t._k=e,s&&M&&V(U,e,{configurable:!0,set:function(t){i(this,A)&&i(this[A],e)&&(this[A][e]=!1),V(this,e,g(1,t))}}),t},W=H&&"symbol"==typeof C.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof C},J=function(e,t,r){return v(e),t=m(t,!0),v(r),i(F,t)?(r.enumerable?(i(e,A)&&e[A][t]&&(e[A][t]=!1),r=O(r,{enumerable:g(0,!1)})):(i(e,A)||E(e,A,g(1,{})),e[A][t]=!0),V(e,t,r)):E(e,t,r)},Y=function(e,t){v(e);for(var r,o=h(t=j(t)),n=0,i=o.length;i>n;)J(e,r=o[n++],t[r]);return e},z=function(e,t){return void 0===t?O(e):Y(O(e),t)},G=function(e){var t=N.call(this,e=m(e,!0));return t||!i(this,e)||!i(F,e)||i(this,A)&&this[A][e]?t:!0},K=function(e,t){var r=S(e=j(e),t=m(t,!0));return!r||!i(F,t)||i(e,A)&&e[A][t]||(r.enumerable=!0),r},Z=function(e){for(var t,r=T(j(e)),o=[],n=0;r.length>n;)i(F,t=r[n++])||t==A||t==u||o.push(t);return o},X=function(e){for(var t,r=T(j(e)),o=[],n=0;r.length>n;)i(F,t=r[n++])&&o.push(F[t]);return o},$=function(e){if(void 0!==e&&!W(e)){for(var t,r,o=[e],n=1;arguments.length>n;)o.push(arguments[n++]);return t=o[1],"function"==typeof t&&(r=t),!r&&y(t)||(t=function(e,t){return r&&(t=r.call(this,e,t)),W(t)?void 0:t}),o[1]=t,R.apply(P,o)}},Q=l(function(){var e=C();return"[null]"!=R([e])||"{}"!=R({a:e})||"{}"!=R(Object(e))});H||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");return B(d(arguments.length>0?arguments[0]:void 0))},a(C[D],"toString",function(){return this._k}),w.f=K,x.f=J,e("./_object-gopn").f=k.f=Z,e("./_object-pie").f=G,e("./_object-gops").f=X,s&&!e("./_library")&&a(U,"propertyIsEnumerable",G,!0)),c(c.G+c.W+c.F*!H,{Symbol:C});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;){var re=ee[te++],oe=n.Symbol,ne=p(re);re in oe||E(oe,re,{value:H?ne:B(ne)})}q&&q[D]&&q[D].findChild||(M=!0),c(c.S+c.F*!H,"Symbol",{"for":function(e){return i(I,e+="")?I[e]:I[e]=C(e)},keyFor:function(e){if(W(e))return b(I,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){M=!0},useSimple:function(){M=!1}}),c(c.S+c.F*!H,"Object",{create:z,defineProperty:J,defineProperties:Y,getOwnPropertyDescriptor:K,getOwnPropertyNames:Z,getOwnPropertySymbols:X}),P&&c(c.S+c.F*(!H||Q),"JSON",{stringify:$}),C[D][L]||e("./_hide")(C[D],L,C[D].valueOf),_(C,"Symbol"),_(Math,"Math",!0),_(o.JSON,"JSON",!0)},{"./_an-object":31,"./_core":35,"./_descriptors":38,"./_enum-keys":41,"./_export":42,"./_fails":43,"./_global":45,"./_has":46,"./_hide":47,"./_is-array":53,"./_keyof":61,"./_library":62,"./_meta":63,"./_object-create":65,"./_object-dp":66,"./_object-gopd":68,"./_object-gopn":70,"./_object-gopn-ext":69,"./_object-gops":71,"./_object-pie":75,"./_property-desc":77,"./_redefine":79,"./_set-to-string-tag":82,"./_shared":84,"./_to-iobject":90,"./_to-primitive":93,"./_uid":94,"./_wks":95}],108:[function(e,t,r){e("./es6.array.iterator");for(var o=e("./_global"),n=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;5>a;a++){var u=c[a],l=o[u],f=l&&l.prototype;f&&!f[s]&&n(f,s,u),i[u]=i.Array}},{"./_global":45,"./_hide":47,"./_iterators":60,"./_wks":95,"./es6.array.iterator":97}],109:[function(e,t,r){"use strict";var o=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var n=e("./syncher/Syncher"),i=o(n),s=e("./syncher/DataObjectReporter"),c=o(s),a=e("./syncher/DataObjectObserver"),u=o(a);r.Syncher=i["default"],r.DataObjectReporter=c["default"],r.DataObjectObserver=u["default"]},{"./syncher/DataObjectObserver":112,"./syncher/DataObjectReporter":113,"./syncher/Syncher":116,"babel-runtime/helpers/interop-require-default":16}],110:[function(e,t,r){"use strict";var o=e("babel-runtime/helpers/create-class")["default"],n=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/object/keys")["default"],s=e("babel-runtime/core-js/promise")["default"],c=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var a=e("./SyncObject"),u=c(a),l=e("./DataObjectChild"),f=c(l),_=e("../utils/utils.js"),d=function(){function e(t,r,o,i,s,c){n(this,e);var a=this;a._syncher=t,a._url=r,a._schema=o,a._status=i,a._syncObj=new u["default"](s),a._childrens=c,a._version=0,a._childId=0,a._childrenObjects={},a._childrenListeners=[],a._owner=t._owner,a._bus=t._bus}return o(e,[{key:"_allocateListeners",value:function(){var e=this,t=this,r=t._url+"/children/";t._childrens&&t._childrens.forEach(function(o){var n=r+o,i=t._bus.addListener(n,function(r){if(r.from!==e._owner)switch(console.log("DataObject-Children-RCV: ",r),r.type){case"create":t._onChildrenCreate(r);break;case"delete":console.log(r);break;default:t._changeChildren(r)}});t._childrenListeners.push(i)})}},{key:"_releaseListeners",value:function(){var e=this;e._childrenListeners.forEach(function(e){e.remove()}),i(e._childrenObjects).forEach(function(t){e._childrenObjects[t]._releaseListeners()})}},{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"addChildren",value:function(e,t){var r=this;r._childId++;var o=r._owner+"#"+r._childId,n=r._url+"/children/"+e,i={type:"create",from:r._owner,to:n,body:{resource:o,value:t}};return new s(function(e){var s=r._bus.postMessage(i);console.log("create-reporter-child( "+r._owner+" ): ",i);var c=new f["default"](r,o,t,r._owner,s);c.onChange(function(e){r._onChange(e,{path:n,childId:o})}),r._childrenObjects[o]=c,e(c)})}},{key:"onAddChildren",value:function(e){this._onAddChildrenHandler=e}},{key:"_onChildrenCreate",value:function(e){var t=this,r=e.body.resource;console.log("create-observer-child( "+t._owner+" ): ",e);var o=new f["default"](t,r,e.body.value);t._childrenObjects[r]=o,setTimeout(function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,source:t._owner}})});var n={type:e.type,from:e.from,url:e.to,value:e.body.value,childId:r};t._onAddChildrenHandler&&(console.log("ADD-CHILDREN-EVENT: ",n),t._onAddChildrenHandler(n))}},{key:"_onChange",value:function(e,t){var r=this;if(r._version++,"on"===r._status){var o={type:"update",from:r._url,to:r._url+"/changes",body:{version:r._version,source:r._owner,attribute:e.field}};e.oType===a.ObjectType.OBJECT?e.cType!==a.ChangeType.REMOVE&&(o.body.value=e.data):(o.body.attributeType=e.oType,o.body.value=e.data,e.cType!==a.ChangeType.UPDATE&&(o.body.operation=e.cType)),t&&(o.to=t.path,o.body.resource=t.childId),r._bus.postMessage(o)}}},{key:"_changeObject",value:function(e,t){var r=this;if(r._version+1===t.body.version){r._version++;var o=t.body.attribute,n=(0,_.deepClone)(t.body.value),i=e.findBefore(o);if(t.body.attributeType===a.ObjectType.ARRAY)if(t.body.operation===a.ChangeType.ADD){var s=i.obj,c=i.last;Array.prototype.splice.apply(s,[c,0].concat(n))}else if(t.body.operation===a.ChangeType.REMOVE){var s=i.obj,c=i.last;s.splice(c,n)}else i.obj[i.last]=n;else t.body.value?i.obj[i.last]=n:delete i.obj[i.last]}else console.log("UNSYNCHRONIZED VERSION: (data => "+r._version+", msg => "+t.body.version+")")}},{key:"_changeChildren",value:function(e){var t=this;console.log("Change children: ",t._owner,e);var r=e.body.resource,o=t._childrenObjects[r];o?t._changeObject(o._syncObj,e):console.log("No children found for: ",r)}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"childrens",get:function(){return this._childrenObjects}}]),e}();r["default"]=d,t.exports=r["default"]},{"../utils/utils.js":117,"./DataObjectChild":111,"./SyncObject":115,"babel-runtime/core-js/object/keys":5,"babel-runtime/core-js/promise":7,"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":12,"babel-runtime/helpers/interop-require-default":16}],111:[function(e,t,r){"use strict";var o=e("babel-runtime/helpers/create-class")["default"],n=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var s=e("./SyncObject"),c=i(s),a=function(){function e(t,r,o,i,s){n(this,e);var a=this;a._parent=t,a._childId=r,a._owner=i,a._msgId=s,a._syncObj=new c["default"](o),a._bus=t._bus,a._allocateListeners()}return o(e,[{key:"_allocateListeners",value:function(){var e=this;e._owner&&(e._listener=e._bus.addListener(e._owner,function(t){"response"===t.type&&t.id===e._msgId&&(console.log("DataObjectChild.onResponse:",t),e._onResponse(t))}))}},{key:"_releaseListeners",value:function(){var e=this;e._listener&&e._listener.remove()}},{key:"delete",value:function(){var e=this;delete e._parent._children[e._childId],e._releaseListeners()}},{key:"onChange",value:function(e){this._syncObj.observe(function(t){e(t)})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.body.source,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(r)}},{key:"childId",get:function(){return this._childId}},{key:"data",get:function(){return this._syncObj.data}}]),e}();r["default"]=a,t.exports=r["default"]},{"./SyncObject":115,"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":12,"babel-runtime/helpers/interop-require-default":16}],112:[function(e,t,r){"use strict";var o=e("babel-runtime/helpers/get")["default"],n=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],c=e("babel-runtime/core-js/object/keys")["default"],a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./DataObject"),l=a(u),f=e("./DataObjectChild"),_=a(f),d={ANY:"any",START:"start",EXACT:"exact"},p=function(e){function t(e,r,n,i,a,u,l){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,n,i,a.data,u);var f=this;f._version=l,f._filters={},f._syncObj.observe(function(e){f._onFilter(e)}),c(a.childrens).forEach(function(e){var t=a.childrens[e];f._childrenObjects[e]=new _["default"](f,e,t)}),f._allocateListeners()}return n(t,e),i(t,[{key:"_allocateListeners",value:function(){o(Object.getPrototypeOf(t.prototype),"_allocateListeners",this).call(this);var e=this;e._changeListener=e._bus.addListener(e._url+"/changes",function(t){"update"===t.type&&(console.log("DataObjectObserver-"+e._url+"-RCV: ",t),e._changeObject(e._syncObj,t))})}},{key:"_releaseListeners",value:function(){o(Object.getPrototypeOf(t.prototype),"_releaseListeners",this).call(this);var e=this;e._changeListener.remove()}},{key:"delete",value:function(){var e=this;e._releaseListeners(),delete e._syncher._observers[e._url]}},{key:"unsubscribe",value:function(){var e=this,t={type:"unsubscribe",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectObserver-UNSUBSCRIBE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._observers[e._url])})}},{key:"onChange",value:function(e,t){var r=e,o={type:d.EXACT,callback:t},n=e.indexOf("*");n===e.length-1&&(0===n?o.type=d.ANY:(o.type=d.START,r=e.substr(0,e.length-1))),this._filters[r]=o}},{key:"_onFilter",value:function(e){var t=this;c(t._filters).forEach(function(r){var o=t._filters[r];o.type===d.ANY?o.callback(e):o.type===d.START?0===e.field.indexOf(r)&&o.callback(e):o.type===d.EXACT&&e.field===r&&o.callback(e)})}}]),t}(l["default"]);r["default"]=p,t.exports=r["default"]},{"./DataObject":110,"./DataObjectChild":111,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":12,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/interop-require-default":16}],113:[function(e,t,r){"use strict";var o=e("babel-runtime/helpers/get")["default"],n=e("babel-runtime/helpers/inherits")["default"],i=e("babel-runtime/helpers/create-class")["default"],s=e("babel-runtime/helpers/class-call-check")["default"],c=e("babel-runtime/core-js/object/keys")["default"],a=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var u=e("./DataObject"),l=a(u),f=e("../utils/utils.js"),_=function(e){function t(e,r,n,i,c,a){s(this,t),o(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,r,n,i,c,a);var u=this;u._subscriptions={},u._syncObj.observe(function(e){console.log("DataObjectReporter-"+r+"-SEND: ",e),u._onChange(e)}),u._allocateListeners()}return n(t,e),i(t,[{key:"_allocateListeners",value:function(){o(Object.getPrototypeOf(t.prototype),"_allocateListeners",this).call(this);var e=this;e._responseListener=e._bus.addListener(e._url,function(t){"response"===t.type&&e._onResponse(t)})}},{key:"_releaseListeners",value:function(){o(Object.getPrototypeOf(t.prototype),"_releaseListeners",this).call(this);var e=this;e._responseListener.remove()}},{key:"delete",value:function(){var e=this,t={type:"delete",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectReporter-DELETE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._reporters[e._url])})}},{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,r=e.body.from,o={type:e.body.type,url:r,accept:function(){var o={url:r,status:"on"};t._subscriptions[r]=o;var n={};return c(t._childrenObjects).forEach(function(e){var r=t._childrenObjects[e].data;n[e]=(0,f.deepClone)(r)}),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:{data:(0,f.deepClone)(t.data),childrens:n}}}),o},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:r}})}};t._onSubscriptionHandler&&(console.log("SUBSCRIPTION-EVENT: ",o),t._onSubscriptionHandler(o))}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.body.from,o=t._subscriptions[r];delete t._subscriptions[r];var n={type:e.body.type,url:r,object:o};t._onSubscriptionHandler&&(console.log("UN-SUBSCRIPTION-EVENT: ",n),t._onSubscriptionHandler(n))}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.from,code:e.body.code};t._onResponseHandler&&(console.log("RESPONSE-EVENT: ",r),t._onResponseHandler(r))}},{key:"subscriptions",get:function(){return this._subscriptions}}]),t}(l["default"]);r["default"]=_,t.exports=r["default"]},{"../utils/utils.js":117,"./DataObject":110,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":12,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/interop-require-default":16}],114:[function(e,t,r){"use strict";var o=e("babel-runtime/helpers/create-class")["default"],n=e("babel-runtime/helpers/class-call-check")["default"];Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(t,r,o,i){n(this,e);var s=this;s._owner=t,s._url=r,s._bus=o,s._children=i,s._changes=[],s._allocateListeners()}return o(e,[{key:"_allocateListeners",value:function(){var e=this;e._listener=e._bus.addListener(e._url,function(t){console.log("DataProvisional-"+e._url+"-RCV: ",t),e._changes.push(t)})}},{key:"_releaseListeners",value:function(){var e=this;e._listener.remove()}},{key:"apply",value:function(e){var t=this;t._changes.forEach(function(t){e._changeObject(e._syncObj,t)})}},{key:"children",get:function(){return this._children}}]),e}();r["default"]=i,t.exports=r["default"]},{"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":12}],115:[function(e,t,r){"use strict";var o=e("babel-runtime/helpers/create-class")["default"],n=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/object/keys")["default"];Object.defineProperty(r,"__esModule",{value:!0});var s=e("../utils/utils.js"),c=function(){function e(t){n(this,e);var r=this;r._observers=[],r._filters={},t?r._data=(0,s.deepClone)(t):r._data={},r._internalObserve(new a,r._data)}return o(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},r=e.split(".");return t.last=r.pop(),t.obj=this._findWithSplit(r),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array}},{key:"_internalObserve",value:function(e,t){var r=this;if(r._isObservable(t)){var o=function(t){r._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,o);for(var n in t)r._isObservable(t[n])&&r._internalObserve(e["new"](n),t[n])}else if(t.constructor===Array){Array.observe(t,o);for(var n in t)if(r._isObservable(t[n])){var i=e["new"](new u(t[n],n));r._internalObserve(i,t[n])}}}}},{key:"_onChanges",value:function(e,t){var r=this;for(var o in t){var n=t[o].object,i=void 0;if(n.constructor===Object&&(i=f.OBJECT),n.constructor===Array&&(i=f.ARRAY),"splice"===t[o].type)!function(){var c=t[o].index,a=e["new"](""+c),f=a.toString(),_=t[o].removed.length;if(0!==_){var d=t[o].removed;d.forEach(function(t,o){r._isObservable(t)&&e.removeIndex(c+o)}),r._fireEvent({cType:l.REMOVE,oType:i,field:f,data:_})}var p=t[o].addedCount;if(0!==p){var b=n.slice(c,c+p);b.forEach(function(t,o){if(r._isObservable(t)){var n=e["new"](new u(t,c+o));r._internalObserve(n,t)}}),r._fireEvent({cType:l.ADD,oType:i,field:f,data:(0,s.deepClone)(b)})}c!==n.length-1&&e.reIndexFrom(n)}();else{var c=e["new"](t[o].name),a=c.toString();if(-1!==a.indexOf("Symbol"))continue;var _=n[t[o].name];"update"===t[o].type&&this._fireEvent({cType:l.UPDATE,oType:i,field:a,data:(0,s.deepClone)(_)}),"add"===t[o].type&&(this._internalObserve(c,_),this._fireEvent({cType:l.ADD,oType:i,field:a,data:(0,s.deepClone)(_)})),"delete"===t[o].type&&this._fireEvent({cType:l.REMOVE,oType:i,field:a})}}}},{key:"data",get:function(){return this._data}}]),e}(),a=function(){function e(){n(this,e),this._path=[],this._observables={}}return o(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;i(this._observables).forEach(function(r){var o=t._observables[r],n=e.indexOf(o.obj);o.idx!=n&&(o.idx=n,delete t._observables[r],t._observables[n]=o)})}},{key:"new",value:function(e){e.constructor==u&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,r){0===r?e=t.toString():e+="."+t.toString()}),e}}]),e}(),u=function(){function e(t,r){n(this,e),this.obj=t,this.idx=r}return o(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),l={UPDATE:"update",ADD:"add",REMOVE:"remove"};r.ChangeType=l;var f={OBJECT:"object",ARRAY:"array"};r.ObjectType=f,r["default"]=c},{"../utils/utils.js":117,"babel-runtime/core-js/object/keys":5,"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":12}],116:[function(e,t,r){"use strict";var o=e("babel-runtime/helpers/create-class")["default"],n=e("babel-runtime/helpers/class-call-check")["default"],i=e("babel-runtime/core-js/promise")["default"],s=e("babel-runtime/helpers/interop-require-default")["default"];Object.defineProperty(r,"__esModule",{value:!0});var c=e("./DataObjectReporter"),a=s(c),u=e("./DataObjectObserver"),l=s(u),f=e("./DataProvisional"),_=s(f),d=function(){function e(t,r,o){n(this,e);var i=this;i._owner=t,i._bus=r,i._subURL=o.runtimeURL+"/sm",i._reporters={},i._observers={},i._provisionals={},r.addListener(t,function(e){if(e.from!==t)switch(console.log("Syncher-RCV: ",e),e.type){case"forward":i._onForward(e);break;case"create":i._onRemoteCreate(e);break;case"delete":i._onRemoteDelete(e)}})}return o(e,[{key:"create",value:function(e,t,r){var o=this,n={type:"create",from:o._owner,to:o._subURL,body:{schema:e,value:r,authorise:t}};return new i(function(t,i){o._bus.postMessage(n,function(n){if(console.log("create-response: ",n),200===n.body.code){var s=n.body.resource,c=new a["default"](o,s,e,"on",r,n.body.childrenResources);o._reporters[s]=c,t(c)}else i(n.body.desc)})})}},{key:"subscribe",value:function(e,t){var r=this,o={type:"subscribe",from:r._owner,to:r._subURL,body:{schema:e,resource:t}};return new i(function(n,i){r._bus.postMessage(o,function(o){console.log("subscribe-response: ",o);var s=r._provisionals[t];if(delete r._provisionals[t],s&&s._releaseListeners(),o.body.code<200)s=new _["default"](r._owner,t,r._bus,o.body.childrenResources),r._provisionals[t]=s;else if(200===o.body.code){var c=new l["default"](r,t,e,"on",o.body.value,s.children,o.body.version);r._observers[t]=c,n(c),s.apply(c)}else i(o.body.desc)})})}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onForward",value:function(e){var t=this,r=t._reporters[e.body.to];r._onForward(e)}},{key:"_onRemoteCreate",value:function(e){var t=this,r=e.from.slice(0,-13),o={type:e.type,from:e.body.source,url:r,schema:e.body.schema,value:e.body.value,identity:e.body.idToken,ack:function(r){var o=200;r&&(o=r),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:o}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",o),t._onNotificationHandler(o))}},{key:"_onRemoteDelete",value:function(e){var t=this,r=e.body.resource,o=t._observers[r];if(o){var n={type:e.type,url:r,identity:e.body.idToken,ack:function(r){var n=200;r&&(n=r),200===n&&o["delete"](),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n,source:t._owner}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",n),t._onNotificationHandler(n))}else t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,source:t._owner}})}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();r["default"]=d,t.exports=r["default"]},{"./DataObjectObserver":112,"./DataObjectReporter":113,"./DataProvisional":114,"babel-runtime/core-js/promise":7,"babel-runtime/helpers/class-call-check":10,"babel-runtime/helpers/create-class":12,"babel-runtime/helpers/interop-require-default":16}],117:[function(e,t,r){"use strict";function o(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",o=e.replace(t,r).split(",");o[0]===e&&(o[0]="https",o[1]=e);var n={type:o[0],domain:o[1],identity:o[2]};return n}function n(e){return e?JSON.parse(JSON.stringify(e)):void 0}Object.defineProperty(r,"__esModule",{value:!0}),r.divideURL=o,r.deepClone=n},{}]},{},[109])(109)});
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('webrtc-adapter-test');

var _EventEmitter2 = require('../utils/EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _peer = require('./peer');

var _peer2 = _interopRequireDefault(_peer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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

/* jshint undef: true */
/* globals RTCPeerConnection */
/* globals RTCSessionDescription */
/* globals RTCIceCandidate */

var ConnectionController = function (_EventEmitter) {
  _inherits(ConnectionController, _EventEmitter);

  function ConnectionController(syncher, domain, configuration) {
    _classCallCheck(this, ConnectionController);

    if (!syncher) throw new Error('The syncher is a needed parameter');
    if (!domain) throw new Error('The domain is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ConnectionController).call(this));

    var _this = _this2;

    _this.syncher = syncher;
    _this.mode = 'offer';

    _this._objectDescURL = 'hyperty-catalogue://' + domain + '/.well-known/dataschemas/FakeDataSchema';

    console.info(configuration);
    console.info(configuration);

    _this.mediaConstraints = configuration.mediaConstraints;
    _this.configuration = configuration.webrtc;

    // Prepare the PeerConnection
    var peerConnection = new RTCPeerConnection(_this.configuration);

    peerConnection.addEventListener('signalingstatechange', function (event) {

      console.info('signalingstatechange', event.currentTarget.signalingState);

      if (event.currentTarget.signalingState === 'have-local-offer') {
        _this.trigger('controller:state:change', _this.mode);
      }

      if (event.currentTarget.signalingState === 'have-remote-offer') {
        _this.mode = 'answer';
        _this.trigger('controller:state:change', _this.mode);
      }
    });

    peerConnection.addEventListener('iceconnectionstatechange', function (event) {
      console.info('iceconnectionstatechange', event.currentTarget.iceConnectionState);
      var data = _this._dataObjectReporter.data;
      if (data.hasOwnProperty('connection')) {
        data.connection.status = event.currentTarget.iceConnectionState;
      }
    });

    peerConnection.addEventListener('icecandidate', function (event) {

      if (!event.candidate) return;

      var icecandidate = {
        type: 'candidate',
        candidate: event.candidate.candidate,
        sdpMid: event.candidate.sdpMid,
        sdpMLineIndex: event.candidate.sdpMLineIndex
      };

      var data = _this._dataObjectReporter.data;

      if (_this.mode === 'offer') {
        data.connection.ownerPeer.iceCandidates.push(icecandidate);
      } else {
        data.peer.iceCandidates.push(icecandidate);
      }
    });

    // Add stream to PeerConnection
    peerConnection.addEventListener('addstream', function (event) {
      console.info('Add Stream: ', event);
      _this.trigger('stream:added', event);
    });

    _this.peerConnection = peerConnection;

    return _this2;
  }

  _createClass(ConnectionController, [{
    key: 'changePeerInformation',
    value: function changePeerInformation(dataObjectObserver) {
      var _this = this;
      var data = dataObjectObserver.data;
      var isOwner = data.hasOwnProperty('connection');

      var peerData = isOwner ? data.connection.ownerPeer : data.peer;

      console.info('Peer Data:', JSON.stringify(peerData));

      if (peerData.hasOwnProperty('connectionDescription')) {
        _this.processPeerInformation(peerData.connectionDescription);
      }

      if (peerData.hasOwnProperty('iceCandidates')) {
        peerData.iceCandidates.forEach(function (ice) {
          _this.processPeerInformation(ice);
        });
      }

      dataObjectObserver.onChange('*', function (event) {
        console.info('Observer on change message: ', event);
        _this.processPeerInformation(event.data);
      });
    }
  }, {
    key: 'processPeerInformation',
    value: function processPeerInformation(data) {
      var _this = this;

      console.info(JSON.stringify(data));

      if (data.type === 'offer' || data.type === 'answer') {
        console.info('Process Connection Description: ', data.sdp);
        _this.peerConnection.setRemoteDescription(new RTCSessionDescription(data), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
      }

      if (data.type === 'candidate') {
        console.info('Process Ice Candidate: ', data);
        _this.peerConnection.addIceCandidate(new RTCIceCandidate({ candidate: data.candidate }), _this.remoteDescriptionSuccess, _this.remoteDescriptionError);
      }
    }
  }, {
    key: 'remoteDescriptionSuccess',
    value: function remoteDescriptionSuccess() {
      console.info('remote success');
    }
  }, {
    key: 'remoteDescriptionError',
    value: function remoteDescriptionError(error) {
      console.error('error: ', error);
    }
  }, {
    key: 'createOffer',
    value: function createOffer() {
      var _this = this;

      _this.peerConnection.createOffer(function (description) {
        _this.onLocalSessionCreated(description);
      }, _this.infoError, _this.mediaConstraints);
    }
  }, {
    key: 'createAnswer',
    value: function createAnswer() {
      var _this = this;

      _this.peerConnection.createAnswer(function (description) {
        _this.onLocalSessionCreated(description);
      }, _this.infoError);
    }
  }, {
    key: 'onLocalSessionCreated',
    value: function onLocalSessionCreated(description) {

      var _this = this;

      _this.peerConnection.setLocalDescription(description, function () {

        var data = _this._dataObjectReporter.data;
        var sdpConnection = {
          sdp: description.sdp,
          type: description.type
        };

        if (_this.mode === 'offer') {
          data.connection.ownerPeer.connectionDescription = sdpConnection;
        } else {
          data.peer.connectionDescription = sdpConnection;
        }
      }, _this.infoError);
    }
  }, {
    key: 'infoError',
    value: function infoError(err) {
      console.error(err.toString(), err);
    }

    /**
     * Used to accept an incoming connection request.
     * @method accept
     * @return {Promise}
     */

  }, {
    key: 'accept',
    value: function accept(stream) {
      // TODO: Pass argument options as a stream, because is specific of implementation;

      var _this = this;
      var syncher = _this.syncher;

      console.log('Remote Peer Information: ', _this._remotePeerInformation);
      var remotePeer = _this._remotePeerInformation.from;

      return new Promise(function (resolve, reject) {

        try {

          console.info('------------------------ Syncher Create ---------------------- \n');
          syncher.create(_this._objectDescURL, [remotePeer], {}).then(function (dataObjectReporter) {
            console.info('2. Return the Data Object Reporter ', dataObjectReporter);

            _this.stream = stream;
            _this.dataObjectReporter = dataObjectReporter;
            resolve('accepted');
          }).catch(function (reason) {
            reject(reason);
          });
        } catch (e) {
          reject('error accepting connection');
        }
      });
    }

    /**
    * Used to decline an incoming connection request.
    * @method decline
    * @return {Promise}
    */

  }, {
    key: 'decline',
    value: function decline() {

      var _this = this;
      var syncher = _this.syncher;

      return new Promise(function (resolve, reject) {

        try {
          console.log('syncher: ', syncher);
          resolve('Declined');
        } catch (e) {
          reject(e);
        }
      });
    }

    /**
     * Used to close an existing connection instance.
     * @method disconnect
     * @return {Promise}
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {

      // TODO: optimize the disconnect function

      var _this = this;

      return new Promise(function (resolve, reject) {

        try {

          _this.peerConnection.close();

          resolve(true);
        } catch (e) {
          reject('error disconnecting connection');
        }
      });
    }

    /**
     * Used to add/invite new peers on an existing connection instance (for multiparty connections).
     * @method addPeer
     * @return {Promise}
     */

  }, {
    key: 'addPeer',
    value: function addPeer() {}

    /**
     * Used to remove a peer from an existing connection instance.
     * @method removePeer
     * @return {Promise}
     */

  }, {
    key: 'removePeer',
    value: function removePeer() {}

    // Peer Actions

  }, {
    key: 'disableMic',
    value: function disableMic() {
      var _this = this;

      return new Promise(function (resolve, reject) {

        try {
          var localStream = _this.peerConnection.getLocalStreams()[0];
          var audioTrack = localStream.getAudioTracks()[0];

          audioTrack.enabled = audioTrack.enabled ? false : true;
          resolve(audioTrack.enabled);
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'disableCam',
    value: function disableCam() {
      var _this = this;

      return new Promise(function (resolve, reject) {

        try {
          var localStream = _this.peerConnection.getLocalStreams()[0];
          var videoTrack = localStream.getVideoTracks()[0];

          videoTrack.enabled = videoTrack.enabled ? false : true;

          resolve(videoTrack.enabled);
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'mute',
    value: function mute() {

      var _this = this;

      return new Promise(function (resolve, reject) {

        try {
          var remoteStream = _this.peerConnection.getRemoteStreams()[0];
          var audioTrack = remoteStream.getAudioTracks()[0];

          audioTrack.enabled = audioTrack.enabled ? false : true;

          resolve(audioTrack.enabled);
        } catch (e) {
          reject(e);
        }
      });
    }
  }, {
    key: 'stream',
    set: function set(mediaStream) {
      if (!mediaStream) throw new Error('The mediaStream is a needed parameter');

      var _this = this;
      console.info('set stream: ', mediaStream);
      _this.peerConnection.addStream(mediaStream);
    }
  }, {
    key: 'getLocalStreams',
    get: function get() {
      var _this = this;
      return _this.peerConnection.getLocalStreams();
    }
  }, {
    key: 'getRemoteStreams',
    get: function get() {
      var _this = this;
      return _this.peerConnection.getRemoteStreams();
    }

    /**
     * Set Remote peer information, like Hyperty.
     * @param  {Object} remotePeerInformation information about the peer;
     */

  }, {
    key: 'remotePeerInformation',
    set: function set(remotePeerInformation) {
      var _this = this;
      _this._remotePeerInformation = remotePeerInformation;
    }

    /**
     * Get information relative to the Remote Peer;
     * @return {Object} remotePeerInformation;
     */
    ,
    get: function get() {
      var _this = this;
      return _this._remotePeerInformation;
    }

    /**
    * Set the dataObject in the controller
    * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
    */

  }, {
    key: 'dataObjectReporter',
    set: function set(dataObjectReporter) {
      if (!dataObjectReporter) throw new Error('The Data Object Reporter is a needed parameter');

      var _this = this;
      _this._dataObjectReporter = dataObjectReporter;

      var data = _this._dataObjectReporter.data;

      dataObjectReporter.onSubscription(function (event) {
        event.accept();
      });

      if (_this.mode === 'offer') {
        data.connection = _connection2.default;

        _this.createOffer();
      } else {
        data.peer = _peer2.default;

        _this.createAnswer();
      }

      console.debug(_this._dataObjectReporter);
    }

    /**
    * return the dataObject in the controller
    * @return {ConnectionDataObject} dataObject
    */
    ,
    get: function get() {
      var _this = this;
      return _this._dataObjectReporter;
    }

    /**
    * Set the dataObject in the controller
    * @param {ConnectionDataObject} dataObject - have all information about the syncher object;
    */

  }, {
    key: 'dataObjectObserver',
    set: function set(dataObjectObserver) {
      if (!dataObjectObserver) throw new Error('The Data Object Observer is a needed parameter');

      var _this = this;
      _this._dataObjectObserver = dataObjectObserver;
      _this.changePeerInformation(dataObjectObserver);
    }

    /**
    * return the dataObject in the controller
    * @return {ConnectionDataObject} dataObject
    */
    ,
    get: function get() {
      var _this = this;
      return _this._dataObjectObserver;
    }
  }]);

  return ConnectionController;
}(_EventEmitter3.default);

exports.default = ConnectionController;
module.exports = exports['default'];

},{"../utils/EventEmitter":8,"./connection":6,"./peer":7,"webrtc-adapter-test":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = activate;

var _HypertyDiscovery = require('service-framework/dist/HypertyDiscovery');

var _HypertyDiscovery2 = _interopRequireDefault(_HypertyDiscovery);

var _Syncher = require('service-framework/dist/Syncher');

var _EventEmitter2 = require('../utils/EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _utils = require('../utils/utils');

var _ConnectionController = require('./ConnectionController');

var _ConnectionController2 = _interopRequireDefault(_ConnectionController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
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

/* jshint undef: true */

// Service Framework


// Utils


// Internals


/**
* Hyperty Connector;
* @author Vitor Silva [vitor-t-silva@telecom.pt]
* @version 0.1.0
*/

var HypertyConnector = function (_EventEmitter) {
  _inherits(HypertyConnector, _EventEmitter);

  /**
  * Create a new Hyperty Connector
  * @param  {Syncher} syncher - Syncher provided from the runtime core
  */

  function HypertyConnector(hypertyURL, bus, configuration) {
    _classCallCheck(this, HypertyConnector);

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(HypertyConnector).call(this, hypertyURL, bus, configuration));

    var _this = _this2;
    _this._hypertyURL = hypertyURL;
    _this._bus = bus;
    _this._configuration = configuration;
    _this._domain = (0, _utils.divideURL)(hypertyURL).domain;

    _this._objectDescURL = 'hyperty-catalogue://' + _this._domain + '/.well-known/dataschemas/FakeDataSchema';

    _this._controllers = {};

    _this.hypertyDiscovery = new _HypertyDiscovery2.default(hypertyURL, bus);

    var syncher = new _Syncher.Syncher(hypertyURL, bus, configuration);
    syncher.onNotification(function (event) {
      _this._onNotification(event);
    });

    _this._syncher = syncher;
    return _this2;
  }

  _createClass(HypertyConnector, [{
    key: '_onNotification',
    value: function _onNotification(event) {

      var _this = this;

      console.info('------------ Acknowledges the Reporter ------------ \n');
      event.ack();
      console.info('------------------------ END ---------------------- \n');

      if (_this._controllers[event.from]) {
        _this._autoSubscribe(event);
      } else {
        _this._autoAccept(event);
      }
    }
  }, {
    key: '_autoSubscribe',
    value: function _autoSubscribe(event) {
      var _this = this;
      var syncher = _this._syncher;

      console.info('---------------- Syncher Auto Subscribe ---------------- \n');
      console.info('Subscribe URL Object ', event, syncher);
      syncher.subscribe(_this._objectDescURL, event.url).then(function (dataObjectObserver) {
        console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);
        console.log(_this._controllers);
        _this._controllers[event.from].dataObjectObserver = dataObjectObserver;
      }).catch(function (reason) {
        console.error(reason);
      });
    }
  }, {
    key: '_autoAccept',
    value: function _autoAccept(event) {
      var _this = this;
      var syncher = _this._syncher;

      console.info('----------- Syncher Subscribe (Auto Accept) ------------- \n');
      console.info('Subscribe URL Object ', event, syncher);
      syncher.subscribe(_this._objectDescURL, event.url).then(function (dataObjectObserver) {
        console.info('1. Return Subscribe Data Object Observer', dataObjectObserver);

        var connectionController = new _ConnectionController2.default(syncher, _this._domain, _this._configuration);
        connectionController.remotePeerInformation = event;
        connectionController.dataObjectObserver = dataObjectObserver;

        _this.trigger('connector:connected', connectionController);
        _this.trigger('have:notification', event);

        console.info('------------------------ END ---------------------- \n');
      }).catch(function (reason) {
        console.error(reason);
      });
    }

    /**
    * Establish connection with other client identifier
    * @param  {HypertyURL} HypertyURL - Define the identifier of the other component
    * @param  {Object} options - Object with options to improve the connect
    */

  }, {
    key: 'connect',
    value: function connect(hypertyURL, stream) {
      // TODO: Pass argument options as a stream, because is specific of implementation;
      // TODO: CHange the hypertyURL for a list of URLS
      var _this = this;
      var syncher = _this._syncher;

      return new Promise(function (resolve, reject) {

        var connectionController = void 0;
        console.info('------------------------ Syncher Create ---------------------- \n');
        syncher.create(_this._objectDescURL, [hypertyURL], {}).then(function (dataObjectReporter) {
          console.info('1. Return Create Data Object Reporter', dataObjectReporter);

          connectionController = new _ConnectionController2.default(syncher, _this._domain, _this._configuration);
          connectionController.stream = stream;
          connectionController.dataObjectReporter = dataObjectReporter;

          _this._controllers[hypertyURL] = connectionController;

          resolve(connectionController);
          console.info('--------------------------- END --------------------------- \n');
        }).catch(function (reason) {
          console.error(reason);
          reject(reason);
        });
      });
    }
  }]);

  return HypertyConnector;
}(_EventEmitter3.default);

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HypertyConnector',
    instance: new HypertyConnector(hypertyURL, bus, configuration)
  };
}
module.exports = exports['default'];

},{"../utils/EventEmitter":8,"../utils/utils":9,"./ConnectionController":4,"service-framework/dist/HypertyDiscovery":1,"service-framework/dist/Syncher":2}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
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

// dataObjectReporter.data = {
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

var connection = {
   status: "connected",
   owner: "hyperty://example.com/alicehy",
   peer: "connection://example.com/alice/bob27012016",
   ownerPeer: {
      connectionDescription: {},
      iceCandidates: []
   }
};

exports.default = connection;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var peer = {
  connectionDescription: {},
  iceCandidates: []
};

exports.default = peer;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/**
 * EventEmitter
 * All classes which extends this, can have addEventListener and trigger events;
 */

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
  }

  _createClass(EventEmitter, [{
    key: "addEventListener",


    /**
     * addEventListener listen for an eventType
     * @param  {string}         eventType - listening for this type of event
     * @param  {Function}       cb        - callback function will be executed when the event it is invoked
     */
    value: function addEventListener(eventType, cb) {
      var _this = this;
      _this[eventType] = cb;
    }

    /**
     * Invoke the eventType
     * @param  {string} eventType - event will be invoked
     * @param  {object} params - parameters will be passed to the addEventListener
     */

  }, {
    key: "trigger",
    value: function trigger(eventType, params) {
      var _this = this;

      if (_this[eventType]) {
        _this[eventType](params);
      }
    }
  }]);

  return EventEmitter;
}();

exports.default = EventEmitter;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divideURL = divideURL;
exports.deepClone = deepClone;
exports.getUserMedia = getUserMedia;
exports.serialize = serialize;
exports.getTemplate = getTemplate;
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

// jshint browser:true, jquery: true
// jshint varstmt: true
/* global Handlebars */

/**
 * Support module with some functions will be useful
 * @module utils
 */

/**
 * @typedef divideURL
 * @type Object
 * @property {string} type The type of URL
 * @property {string} domain The domain of URL
 * @property {string} identity The identity of URL
 */

/**
 * Divide an url in type, domain and identity
 * @param  {URL.URL} url - url address
 * @return {divideURL} the result of divideURL
 */
function divideURL(url) {

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

/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */
function deepClone(obj) {
  //TODO: simple but inefficient JSON deep clone...
  if (obj) return JSON.parse(JSON.stringify(obj));
}

/**
 * Get WebRTC API resources
 * @param  {Object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
 * @return {Promise}
 */
function getUserMedia(constraints) {

  return new Promise(function (resolve, reject) {

    navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
      resolve(mediaStream);
    }).catch(function (reason) {
      reject(reason);
    });
  });
}

function serialize() {

  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }

        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });

    return o;
  };

  $.fn.serializeObjectArray = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }

        o[this.name].push(this.value || '');
      } else {
        if (!o[this.name]) o[this.name] = [];
        o[this.name].push(this.value || '');
      }
    });

    return o;
  };
}

function getTemplate(path, script) {

  return new Promise(function (resolve, reject) {

    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
      Handlebars.templates = {};
    } else {
      resolve(Handlebars.templates[name]);
    }

    var templateFile = $.ajax({
      url: path + '.hbs',
      success: function success(data) {
        Handlebars.templates[name] = Handlebars.compile(data);
      },

      fail: function fail(reason) {
        return reason;
      }
    });

    var scriptFile = $.getScript(script);

    var requests = [];
    if (path) requests.push(templateFile);
    if (script) requests.push(scriptFile);

    Promise.all(requests).then(function (result) {
      resolve(Handlebars.templates[name]);
    }).catch(function (reason) {
      reject(reason);
    });
  });
}

},{}]},{},[5])(5)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvc2VydmljZS1mcmFtZXdvcmsvZGlzdC9IeXBlcnR5RGlzY292ZXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3luY2hlci5qcyIsIm5vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci10ZXN0L2FkYXB0ZXIuanMiLCJzcmNcXGh5cGVydHktY29ubmVjdG9yXFxDb25uZWN0aW9uQ29udHJvbGxlci5qcyIsInNyY1xcaHlwZXJ0eS1jb25uZWN0b3JcXEh5cGVydHlDb25uZWN0b3IuaHkuanMiLCJzcmNcXGh5cGVydHktY29ubmVjdG9yXFxjb25uZWN0aW9uLmpzIiwic3JjXFxoeXBlcnR5LWNvbm5lY3RvclxccGVlci5qcyIsInNyY1xcdXRpbHNcXEV2ZW50RW1pdHRlci5qcyIsInNyY1xcdXRpbHNcXHV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbnREQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU07OztBQUVKLFdBRkksb0JBRUosQ0FBWSxPQUFaLEVBQXFCLE1BQXJCLEVBQTZCLGFBQTdCLEVBQTRDOzBCQUZ4QyxzQkFFd0M7O0FBRTFDLFFBQUksQ0FBQyxPQUFELEVBQVUsTUFBTSxJQUFJLEtBQUosQ0FBVSxtQ0FBVixDQUFOLENBQWQ7QUFDQSxRQUFJLENBQUMsTUFBRCxFQUFTLE1BQU0sSUFBSSxLQUFKLENBQVUsa0NB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KGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG4vLyBEaXN0cmlidXRpb24gZmlsZSBmb3IgSHlwZXJ0eURpc2NvdmVyeS5qcyBcclxuLy8gdmVyc2lvbjogMC4xLjBcclxuXHJcbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIHQ7dD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsdC5IeXBlcnR5RGlzY292ZXJ5PWUoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIGUodCxyLG4pe2Z1bmN0aW9uIG8oYyxzKXtpZighcltjXSl7aWYoIXRbY10pe3ZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXMmJnUpcmV0dXJuIHUoYywhMCk7aWYoaSlyZXR1cm4gaShjLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2MrXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBmPXJbY109e2V4cG9ydHM6e319O3RbY11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIHI9dFtjXVsxXVtlXTtyZXR1cm4gbyhyP3I6ZSl9LGYsZi5leHBvcnRzLGUsdCxyLG4pfXJldHVybiByW2NdLmV4cG9ydHN9Zm9yKHZhciBpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsYz0wO2M8bi5sZW5ndGg7YysrKW8obltjXSk7cmV0dXJuIG99KHsxOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksX19lc01vZHVsZTohMH19LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCI6OX1dLDI6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSxfX2VzTW9kdWxlOiEwfX0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIjoxMH1dLDM6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZShcIi4vY2xhc3NDYWxsQ2hlY2suanNcIil9LHtcIi4vY2xhc3NDYWxsQ2hlY2suanNcIjo0fV0sNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuX19lc01vZHVsZT0hMCxyW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9fSx7fV0sNTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1lKFwiLi9jcmVhdGVDbGFzcy5qc1wiKX0se1wiLi9jcmVhdGVDbGFzcy5qc1wiOjZ9XSw2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fXIuX19lc01vZHVsZT0hMDt2YXIgbz1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksaT1uKG8pO3JbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXt2YXIgbj10W3JdO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSwoMCxpW1wiZGVmYXVsdFwiXSkoZSxuLmtleSxuKX19cmV0dXJuIGZ1bmN0aW9uKHQscixuKXtyZXR1cm4gciYmZSh0LnByb3RvdHlwZSxyKSxuJiZlKHQsbiksdH19KCl9LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCI6MX1dLDc6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZShcIi4vaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpfSx7XCIuL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiOjh9XSw4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ci5fX2VzTW9kdWxlPSEwLHJbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19fSx7fV0sOTpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5XCIpO3ZhciBuPWUoXCIuLi8uLi9tb2R1bGVzL19jb3JlXCIpLk9iamVjdDt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBuLmRlZmluZVByb3BlcnR5KGUsdCxyKX19LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjoxOCxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHlcIjo3M31dLDEwOltmdW5jdGlvbihlLHQscil7ZShcIi4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIiksZShcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiKSxlKFwiLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCIpLGUoXCIuLi9tb2R1bGVzL2VzNi5wcm9taXNlXCIpLHQuZXhwb3J0cz1lKFwiLi4vbW9kdWxlcy9fY29yZVwiKS5Qcm9taXNlfSx7XCIuLi9tb2R1bGVzL19jb3JlXCI6MTgsXCIuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nXCI6NzQsXCIuLi9tb2R1bGVzL2VzNi5wcm9taXNlXCI6NzUsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjo3NixcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjc3fV0sMTE6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBUeXBlRXJyb3IoZStcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIGV9fSx7fV0sMTI6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSx7fV0sMTM6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbil7aWYoIShlIGluc3RhbmNlb2YgdCl8fHZvaWQgMCE9PW4mJm4gaW4gZSl0aHJvdyBUeXBlRXJyb3IocitcIjogaW5jb3JyZWN0IGludm9jYXRpb24hXCIpO3JldHVybiBlfX0se31dLDE0OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2lzLW9iamVjdFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoIW4oZSkpdGhyb3cgVHlwZUVycm9yKGUrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIGV9fSx7XCIuL19pcy1vYmplY3RcIjozNX1dLDE1OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX3RvLWlvYmplY3RcIiksbz1lKFwiLi9fdG8tbGVuZ3RoXCIpLGk9ZShcIi4vX3RvLWluZGV4XCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxyLGMpe3ZhciBzLHU9bih0KSxhPW8odS5sZW5ndGgpLGY9aShjLGEpO2lmKGUmJnIhPXIpe2Zvcig7YT5mOylpZihzPXVbZisrXSxzIT1zKXJldHVybiEwfWVsc2UgZm9yKDthPmY7ZisrKWlmKChlfHxmIGluIHUpJiZ1W2ZdPT09cilyZXR1cm4gZXx8ZjtyZXR1cm4hZSYmLTF9fX0se1wiLi9fdG8taW5kZXhcIjo2MyxcIi4vX3RvLWlvYmplY3RcIjo2NSxcIi4vX3RvLWxlbmd0aFwiOjY2fV0sMTY6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fY29mXCIpLG89ZShcIi4vX3drc1wiKShcInRvU3RyaW5nVGFnXCIpLGk9XCJBcmd1bWVudHNcIj09bihmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpLGM9ZnVuY3Rpb24oZSx0KXt0cnl7cmV0dXJuIGVbdF19Y2F0Y2gocil7fX07dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0LHIscztyZXR1cm4gdm9pZCAwPT09ZT9cIlVuZGVmaW5lZFwiOm51bGw9PT1lP1wiTnVsbFwiOlwic3RyaW5nXCI9PXR5cGVvZihyPWModD1PYmplY3QoZSksbykpP3I6aT9uKHQpOlwiT2JqZWN0XCI9PShzPW4odCkpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNhbGxlZT9cIkFyZ3VtZW50c1wiOnN9fSx7XCIuL19jb2ZcIjoxNyxcIi4vX3drc1wiOjcwfV0sMTc6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG4uY2FsbChlKS5zbGljZSg4LC0xKX19LHt9XSwxODpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuMi4xXCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9bil9LHt9XSwxOTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19hLWZ1bmN0aW9uXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscil7aWYobihlKSx2b2lkIDA9PT10KXJldHVybiBlO3N3aXRjaChyKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBlLmNhbGwodCxyKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihyLG4pe3JldHVybiBlLmNhbGwodCxyLG4pfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHIsbixvKXtyZXR1cm4gZS5jYWxsKHQscixuLG8pfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0LGFyZ3VtZW50cyl9fX0se1wiLi9fYS1mdW5jdGlvblwiOjExfV0sMjA6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT1lKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIitlKTtyZXR1cm4gZX19LHt9XSwyMTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz0hZShcIi4vX2ZhaWxzXCIpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSx7XCIuL19mYWlsc1wiOjI1fV0sMjI6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9faXMtb2JqZWN0XCIpLG89ZShcIi4vX2dsb2JhbFwiKS5kb2N1bWVudCxpPW4obykmJm4oby5jcmVhdGVFbGVtZW50KTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGk/by5jcmVhdGVFbGVtZW50KGUpOnt9fX0se1wiLi9fZ2xvYmFsXCI6MjcsXCIuL19pcy1vYmplY3RcIjozNX1dLDIzOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPVwiY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mXCIuc3BsaXQoXCIsXCIpfSx7fV0sMjQ6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fZ2xvYmFsXCIpLG89ZShcIi4vX2NvcmVcIiksaT1lKFwiLi9fY3R4XCIpLGM9ZShcIi4vX2hpZGVcIikscz1cInByb3RvdHlwZVwiLHU9ZnVuY3Rpb24oZSx0LHIpe3ZhciBhLGYsXyxsPWUmdS5GLHA9ZSZ1LkcsZD1lJnUuUyx2PWUmdS5QLGg9ZSZ1LkIseT1lJnUuVyxiPXA/bzpvW3RdfHwob1t0XT17fSksbT1iW3NdLGc9cD9uOmQ/blt0XTooblt0XXx8e30pW3NdO3AmJihyPXQpO2ZvcihhIGluIHIpZj0hbCYmZyYmdm9pZCAwIT09Z1thXSxmJiZhIGluIGJ8fChfPWY/Z1thXTpyW2FdLGJbYV09cCYmXCJmdW5jdGlvblwiIT10eXBlb2YgZ1thXT9yW2FdOmgmJmY/aShfLG4pOnkmJmdbYV09PV8/ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24odCxyLG4pe2lmKHRoaXMgaW5zdGFuY2VvZiBlKXtzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuZXcgZTtjYXNlIDE6cmV0dXJuIG5ldyBlKHQpO2Nhc2UgMjpyZXR1cm4gbmV3IGUodCxyKX1yZXR1cm4gbmV3IGUodCxyLG4pfXJldHVybiBlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX07cmV0dXJuIHRbc109ZVtzXSx0fShfKTp2JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBfP2koRnVuY3Rpb24uY2FsbCxfKTpfLHYmJigoYi52aXJ0dWFsfHwoYi52aXJ0dWFsPXt9KSlbYV09XyxlJnUuUiYmbSYmIW1bYV0mJmMobSxhLF8pKSl9O3UuRj0xLHUuRz0yLHUuUz00LHUuUD04LHUuQj0xNix1Llc9MzIsdS5VPTY0LHUuUj0xMjgsdC5leHBvcnRzPXV9LHtcIi4vX2NvcmVcIjoxOCxcIi4vX2N0eFwiOjE5LFwiLi9fZ2xvYmFsXCI6MjcsXCIuL19oaWRlXCI6Mjl9XSwyNTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlKXt0cnl7cmV0dXJuISFlKCl9Y2F0Y2godCl7cmV0dXJuITB9fX0se31dLDI2OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2N0eFwiKSxvPWUoXCIuL19pdGVyLWNhbGxcIiksaT1lKFwiLi9faXMtYXJyYXktaXRlclwiKSxjPWUoXCIuL19hbi1vYmplY3RcIikscz1lKFwiLi9fdG8tbGVuZ3RoXCIpLHU9ZShcIi4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixhLGYpe3ZhciBfLGwscCxkPWY/ZnVuY3Rpb24oKXtyZXR1cm4gZX06dShlKSx2PW4ocixhLHQ/MjoxKSxoPTA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZCl0aHJvdyBUeXBlRXJyb3IoZStcIiBpcyBub3QgaXRlcmFibGUhXCIpO2lmKGkoZCkpZm9yKF89cyhlLmxlbmd0aCk7Xz5oO2grKyl0P3YoYyhsPWVbaF0pWzBdLGxbMV0pOnYoZVtoXSk7ZWxzZSBmb3IocD1kLmNhbGwoZSk7IShsPXAubmV4dCgpKS5kb25lOylvKHAsdixsLnZhbHVlLHQpfX0se1wiLi9fYW4tb2JqZWN0XCI6MTQsXCIuL19jdHhcIjoxOSxcIi4vX2lzLWFycmF5LWl0ZXJcIjozNCxcIi4vX2l0ZXItY2FsbFwiOjM2LFwiLi9fdG8tbGVuZ3RoXCI6NjYsXCIuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiOjcxfV0sMjc6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj10LmV4cG9ydHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93Lk1hdGg9PU1hdGg/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLk1hdGg9PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XCJudW1iZXJcIj09dHlwZW9mIF9fZyYmKF9fZz1uKX0se31dLDI4OltmdW5jdGlvbihlLHQscil7dmFyIG49e30uaGFzT3duUHJvcGVydHk7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4uY2FsbChlLHQpfX0se31dLDI5OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX29iamVjdC1kcFwiKSxvPWUoXCIuL19wcm9wZXJ0eS1kZXNjXCIpO3QuZXhwb3J0cz1lKFwiLi9fZGVzY3JpcHRvcnNcIik/ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBuLmYoZSx0LG8oMSxyKSl9OmZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gZVt0XT1yLGV9fSx7XCIuL19kZXNjcmlwdG9yc1wiOjIxLFwiLi9fb2JqZWN0LWRwXCI6NDUsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NTJ9XSwzMDpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1lKFwiLi9fZ2xvYmFsXCIpLmRvY3VtZW50JiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnR9LHtcIi4vX2dsb2JhbFwiOjI3fV0sMzE6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9IWUoXCIuL19kZXNjcmlwdG9yc1wiKSYmIWUoXCIuL19mYWlsc1wiKShmdW5jdGlvbigpe3JldHVybiA3IT1PYmplY3QuZGVmaW5lUHJvcGVydHkoZShcIi4vX2RvbS1jcmVhdGVcIikoXCJkaXZcIiksXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiA3fX0pLmF9KX0se1wiLi9fZGVzY3JpcHRvcnNcIjoyMSxcIi4vX2RvbS1jcmVhdGVcIjoyMixcIi4vX2ZhaWxzXCI6MjV9XSwzMjpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscil7dmFyIG49dm9pZCAwPT09cjtzd2l0Y2godC5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbj9lKCk6ZS5jYWxsKHIpO2Nhc2UgMTpyZXR1cm4gbj9lKHRbMF0pOmUuY2FsbChyLHRbMF0pO2Nhc2UgMjpyZXR1cm4gbj9lKHRbMF0sdFsxXSk6ZS5jYWxsKHIsdFswXSx0WzFdKTtjYXNlIDM6cmV0dXJuIG4/ZSh0WzBdLHRbMV0sdFsyXSk6ZS5jYWxsKHIsdFswXSx0WzFdLHRbMl0pO2Nhc2UgNDpyZXR1cm4gbj9lKHRbMF0sdFsxXSx0WzJdLHRbM10pOmUuY2FsbChyLHRbMF0sdFsxXSx0WzJdLHRbM10pfXJldHVybiBlLmFwcGx5KHIsdCl9fSx7fV0sMzM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fY29mXCIpO3QuZXhwb3J0cz1PYmplY3QoXCJ6XCIpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApP09iamVjdDpmdW5jdGlvbihlKXtyZXR1cm5cIlN0cmluZ1wiPT1uKGUpP2Uuc3BsaXQoXCJcIik6T2JqZWN0KGUpfX0se1wiLi9fY29mXCI6MTd9XSwzNDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19pdGVyYXRvcnNcIiksbz1lKFwiLi9fd2tzXCIpKFwiaXRlcmF0b3JcIiksaT1BcnJheS5wcm90b3R5cGU7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDAhPT1lJiYobi5BcnJheT09PWV8fGlbb109PT1lKX19LHtcIi4vX2l0ZXJhdG9yc1wiOjQxLFwiLi9fd2tzXCI6NzB9XSwzNTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZT9udWxsIT09ZTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlfX0se31dLDM2OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2FuLW9iamVjdFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbyl7dHJ5e3JldHVybiBvP3QobihyKVswXSxyWzFdKTp0KHIpfWNhdGNoKGkpe3ZhciBjPWVbXCJyZXR1cm5cIl07dGhyb3cgdm9pZCAwIT09YyYmbihjLmNhbGwoZSkpLGl9fX0se1wiLi9fYW4tb2JqZWN0XCI6MTR9XSwzNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL19vYmplY3QtY3JlYXRlXCIpLG89ZShcIi4vX3Byb3BlcnR5LWRlc2NcIiksaT1lKFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIiksYz17fTtlKFwiLi9faGlkZVwiKShjLGUoXCIuL193a3NcIikoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtlLnByb3RvdHlwZT1uKGMse25leHQ6bygxLHIpfSksaShlLHQrXCIgSXRlcmF0b3JcIil9fSx7XCIuL19oaWRlXCI6MjksXCIuL19vYmplY3QtY3JlYXRlXCI6NDQsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NTIsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjU3LFwiLi9fd2tzXCI6NzB9XSwzODpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL19saWJyYXJ5XCIpLG89ZShcIi4vX2V4cG9ydFwiKSxpPWUoXCIuL19yZWRlZmluZVwiKSxjPWUoXCIuL19oaWRlXCIpLHM9ZShcIi4vX2hhc1wiKSx1PWUoXCIuL19pdGVyYXRvcnNcIiksYT1lKFwiLi9faXRlci1jcmVhdGVcIiksZj1lKFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIiksXz1lKFwiLi9fb2JqZWN0LWdwb1wiKSxsPWUoXCIuL193a3NcIikoXCJpdGVyYXRvclwiKSxwPSEoW10ua2V5cyYmXCJuZXh0XCJpbltdLmtleXMoKSksZD1cIkBAaXRlcmF0b3JcIix2PVwia2V5c1wiLGg9XCJ2YWx1ZXNcIix5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixiLG0sZyxqKXthKHIsdCxiKTt2YXIgeCx3LGssTz1mdW5jdGlvbihlKXtpZighcCYmZSBpbiBFKXJldHVybiBFW2VdO3N3aXRjaChlKXtjYXNlIHY6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMsZSl9O2Nhc2UgaDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcyxlKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMsZSl9fSxNPXQrXCIgSXRlcmF0b3JcIixQPW09PWgsUz0hMSxFPWUucHJvdG90eXBlLFQ9RVtsXXx8RVtkXXx8bSYmRVttXSxBPVR8fE8obSksQz1tP1A/TyhcImVudHJpZXNcIik6QTp2b2lkIDAsUj1cIkFycmF5XCI9PXQ/RS5lbnRyaWVzfHxUOlQ7aWYoUiYmKGs9XyhSLmNhbGwobmV3IGUpKSxrIT09T2JqZWN0LnByb3RvdHlwZSYmKGYoayxNLCEwKSxufHxzKGssbCl8fGMoayxsLHkpKSksUCYmVCYmVC5uYW1lIT09aCYmKFM9ITAsQT1mdW5jdGlvbigpe3JldHVybiBULmNhbGwodGhpcyl9KSxuJiYhanx8IXAmJiFTJiZFW2xdfHxjKEUsbCxBKSx1W3RdPUEsdVtNXT15LG0paWYoeD17dmFsdWVzOlA/QTpPKGgpLGtleXM6Zz9BOk8odiksZW50cmllczpDfSxqKWZvcih3IGluIHgpdyBpbiBFfHxpKEUsdyx4W3ddKTtlbHNlIG8oby5QK28uRioocHx8UyksdCx4KTtyZXR1cm4geH19LHtcIi4vX2V4cG9ydFwiOjI0LFwiLi9faGFzXCI6MjgsXCIuL19oaWRlXCI6MjksXCIuL19pdGVyLWNyZWF0ZVwiOjM3LFwiLi9faXRlcmF0b3JzXCI6NDEsXCIuL19saWJyYXJ5XCI6NDIsXCIuL19vYmplY3QtZ3BvXCI6NDgsXCIuL19yZWRlZmluZVwiOjU0LFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIjo1NyxcIi4vX3drc1wiOjcwfV0sMzk6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fd2tzXCIpKFwiaXRlcmF0b3JcIiksbz0hMTt0cnl7dmFyIGk9WzddW25dKCk7aVtcInJldHVyblwiXT1mdW5jdGlvbigpe289ITB9LEFycmF5LmZyb20oaSxmdW5jdGlvbigpe3Rocm93IDJ9KX1jYXRjaChjKXt9dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7aWYoIXQmJiFvKXJldHVybiExO3ZhciByPSExO3RyeXt2YXIgaT1bN10sYz1pW25dKCk7Yy5uZXh0PWZ1bmN0aW9uKCl7cj0hMH0saVtuXT1mdW5jdGlvbigpe3JldHVybiBjfSxlKGkpfWNhdGNoKHMpe31yZXR1cm4gcn19LHtcIi4vX3drc1wiOjcwfV0sNDA6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm57dmFsdWU6dCxkb25lOiEhZX19fSx7fV0sNDE6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e319LHt9XSw0MjpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz0hMH0se31dLDQzOltmdW5jdGlvbihlLHQscil7dmFyIG4sbyxpLGM9ZShcIi4vX2dsb2JhbFwiKSxzPWUoXCIuL190YXNrXCIpLnNldCx1PWMuTXV0YXRpb25PYnNlcnZlcnx8Yy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyLGE9Yy5wcm9jZXNzLGY9Yy5Qcm9taXNlLF89XCJwcm9jZXNzXCI9PWUoXCIuL19jb2ZcIikoYSksbD1mdW5jdGlvbigpe3ZhciBlLHQ7Zm9yKF8mJihlPWEuZG9tYWluKSYmZS5leGl0KCk7bjspdD1uLmZuLHQoKSxuPW4ubmV4dDtvPXZvaWQgMCxlJiZlLmVudGVyKCl9O2lmKF8paT1mdW5jdGlvbigpe2EubmV4dFRpY2sobCl9O2Vsc2UgaWYodSl7dmFyIHA9ITAsZD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlwiKTtuZXcgdShsKS5vYnNlcnZlKGQse2NoYXJhY3RlckRhdGE6ITB9KSxpPWZ1bmN0aW9uKCl7ZC5kYXRhPXA9IXB9fWVsc2UgaT1mJiZmLnJlc29sdmU/ZnVuY3Rpb24oKXtmLnJlc29sdmUoKS50aGVuKGwpfTpmdW5jdGlvbigpe3MuY2FsbChjLGwpfTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9e2ZuOmUsbmV4dDp2b2lkIDB9O28mJihvLm5leHQ9dCksbnx8KG49dCxpKCkpLG89dH19LHtcIi4vX2NvZlwiOjE3LFwiLi9fZ2xvYmFsXCI6MjcsXCIuL190YXNrXCI6NjJ9XSw0NDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19hbi1vYmplY3RcIiksbz1lKFwiLi9fb2JqZWN0LWRwc1wiKSxpPWUoXCIuL19lbnVtLWJ1Zy1rZXlzXCIpLGM9ZShcIi4vX3NoYXJlZC1rZXlcIikoXCJJRV9QUk9UT1wiKSxzPWZ1bmN0aW9uKCl7fSx1PVwicHJvdG90eXBlXCIsYT1mdW5jdGlvbigpe3ZhciB0LHI9ZShcIi4vX2RvbS1jcmVhdGVcIikoXCJpZnJhbWVcIiksbj1pLmxlbmd0aCxvPVwiPlwiO2ZvcihyLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZShcIi4vX2h0bWxcIikuYXBwZW5kQ2hpbGQociksci5zcmM9XCJqYXZhc2NyaXB0OlwiLHQ9ci5jb250ZW50V2luZG93LmRvY3VtZW50LHQub3BlbigpLHQud3JpdGUoXCI8c2NyaXB0PmRvY3VtZW50LkY9T2JqZWN0PC9zY3JpcHRcIitvKSx0LmNsb3NlKCksYT10LkY7bi0tOylkZWxldGUgYVt1XVtpW25dXTtyZXR1cm4gYSgpfTt0LmV4cG9ydHM9T2JqZWN0LmNyZWF0ZXx8ZnVuY3Rpb24oZSx0KXt2YXIgcjtyZXR1cm4gbnVsbCE9PWU/KHNbdV09bihlKSxyPW5ldyBzLHNbdV09bnVsbCxyW2NdPWUpOnI9YSgpLHZvaWQgMD09PXQ/cjpvKHIsdCl9fSx7XCIuL19hbi1vYmplY3RcIjoxNCxcIi4vX2RvbS1jcmVhdGVcIjoyMixcIi4vX2VudW0tYnVnLWtleXNcIjoyMyxcIi4vX2h0bWxcIjozMCxcIi4vX29iamVjdC1kcHNcIjo0NixcIi4vX3NoYXJlZC1rZXlcIjo1OH1dLDQ1OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2FuLW9iamVjdFwiKSxvPWUoXCIuL19pZTgtZG9tLWRlZmluZVwiKSxpPWUoXCIuL190by1wcmltaXRpdmVcIiksYz1PYmplY3QuZGVmaW5lUHJvcGVydHk7ci5mPWUoXCIuL19kZXNjcmlwdG9yc1wiKT9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oZSx0LHIpe2lmKG4oZSksdD1pKHQsITApLG4ociksbyl0cnl7cmV0dXJuIGMoZSx0LHIpfWNhdGNoKHMpe31pZihcImdldFwiaW4gcnx8XCJzZXRcImluIHIpdGhyb3cgVHlwZUVycm9yKFwiQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhXCIpO3JldHVyblwidmFsdWVcImluIHImJihlW3RdPXIudmFsdWUpLGV9fSx7XCIuL19hbi1vYmplY3RcIjoxNCxcIi4vX2Rlc2NyaXB0b3JzXCI6MjEsXCIuL19pZTgtZG9tLWRlZmluZVwiOjMxLFwiLi9fdG8tcHJpbWl0aXZlXCI6Njh9XSw0NjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19vYmplY3QtZHBcIiksbz1lKFwiLi9fYW4tb2JqZWN0XCIpLGk9ZShcIi4vX29iamVjdC1rZXlzXCIpO3QuZXhwb3J0cz1lKFwiLi9fZGVzY3JpcHRvcnNcIik/T2JqZWN0LmRlZmluZVByb3BlcnRpZXM6ZnVuY3Rpb24oZSx0KXtvKGUpO2Zvcih2YXIgcixjPWkodCkscz1jLmxlbmd0aCx1PTA7cz51OyluLmYoZSxyPWNbdSsrXSx0W3JdKTtyZXR1cm4gZX19LHtcIi4vX2FuLW9iamVjdFwiOjE0LFwiLi9fZGVzY3JpcHRvcnNcIjoyMSxcIi4vX29iamVjdC1kcFwiOjQ1LFwiLi9fb2JqZWN0LWtleXNcIjo1MH1dLDQ3OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX29iamVjdC1waWVcIiksbz1lKFwiLi9fcHJvcGVydHktZGVzY1wiKSxpPWUoXCIuL190by1pb2JqZWN0XCIpLGM9ZShcIi4vX3RvLXByaW1pdGl2ZVwiKSxzPWUoXCIuL19oYXNcIiksdT1lKFwiLi9faWU4LWRvbS1kZWZpbmVcIiksYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3IuZj1lKFwiLi9fZGVzY3JpcHRvcnNcIik/YTpmdW5jdGlvbihlLHQpe2lmKGU9aShlKSx0PWModCwhMCksdSl0cnl7cmV0dXJuIGEoZSx0KX1jYXRjaChyKXt9cmV0dXJuIHMoZSx0KT9vKCFuLmYuY2FsbChlLHQpLGVbdF0pOnZvaWQgMH19LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MjEsXCIuL19oYXNcIjoyOCxcIi4vX2llOC1kb20tZGVmaW5lXCI6MzEsXCIuL19vYmplY3QtcGllXCI6NTEsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NTIsXCIuL190by1pb2JqZWN0XCI6NjUsXCIuL190by1wcmltaXRpdmVcIjo2OH1dLDQ4OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2hhc1wiKSxvPWUoXCIuL190by1vYmplY3RcIiksaT1lKFwiLi9fc2hhcmVkLWtleVwiKShcIklFX1BST1RPXCIpLGM9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbihlKXtyZXR1cm4gZT1vKGUpLG4oZSxpKT9lW2ldOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUuY29uc3RydWN0b3ImJmUgaW5zdGFuY2VvZiBlLmNvbnN0cnVjdG9yP2UuY29uc3RydWN0b3IucHJvdG90eXBlOmUgaW5zdGFuY2VvZiBPYmplY3Q/YzpudWxsfX0se1wiLi9faGFzXCI6MjgsXCIuL19zaGFyZWQta2V5XCI6NTgsXCIuL190by1vYmplY3RcIjo2N31dLDQ5OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2hhc1wiKSxvPWUoXCIuL190by1pb2JqZWN0XCIpLGk9ZShcIi4vX2FycmF5LWluY2x1ZGVzXCIpKCExKSxjPWUoXCIuL19zaGFyZWQta2V5XCIpKFwiSUVfUFJPVE9cIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIHIscz1vKGUpLHU9MCxhPVtdO2ZvcihyIGluIHMpciE9YyYmbihzLHIpJiZhLnB1c2gocik7Zm9yKDt0Lmxlbmd0aD51OyluKHMscj10W3UrK10pJiYofmkoYSxyKXx8YS5wdXNoKHIpKTtyZXR1cm4gYX19LHtcIi4vX2FycmF5LWluY2x1ZGVzXCI6MTUsXCIuL19oYXNcIjoyOCxcIi4vX3NoYXJlZC1rZXlcIjo1OCxcIi4vX3RvLWlvYmplY3RcIjo2NX1dLDUwOltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCIpLG89ZShcIi4vX2VudW0tYnVnLWtleXNcIik7dC5leHBvcnRzPU9iamVjdC5rZXlzfHxmdW5jdGlvbihlKXtyZXR1cm4gbihlLG8pfX0se1wiLi9fZW51bS1idWcta2V5c1wiOjIzLFwiLi9fb2JqZWN0LWtleXMtaW50ZXJuYWxcIjo0OX1dLDUxOltmdW5jdGlvbihlLHQscil7ci5mPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlfSx7fV0sNTI6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm57ZW51bWVyYWJsZTohKDEmZSksY29uZmlndXJhYmxlOiEoMiZlKSx3cml0YWJsZTohKDQmZSksdmFsdWU6dH19fSx7fV0sNTM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9faGlkZVwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe2Zvcih2YXIgbyBpbiB0KXImJmVbb10/ZVtvXT10W29dOm4oZSxvLHRbb10pO3JldHVybiBlfX0se1wiLi9faGlkZVwiOjI5fV0sNTQ6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZShcIi4vX2hpZGVcIil9LHtcIi4vX2hpZGVcIjoyOX1dLDU1OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2lzLW9iamVjdFwiKSxvPWUoXCIuL19hbi1vYmplY3RcIiksaT1mdW5jdGlvbihlLHQpe2lmKG8oZSksIW4odCkmJm51bGwhPT10KXRocm93IFR5cGVFcnJvcih0K1wiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKX07dC5leHBvcnRzPXtzZXQ6T2JqZWN0LnNldFByb3RvdHlwZU9mfHwoXCJfX3Byb3RvX19cImlue30/ZnVuY3Rpb24odCxyLG4pe3RyeXtuPWUoXCIuL19jdHhcIikoRnVuY3Rpb24uY2FsbCxlKFwiLi9fb2JqZWN0LWdvcGRcIikuZihPYmplY3QucHJvdG90eXBlLFwiX19wcm90b19fXCIpLnNldCwyKSxuKHQsW10pLHI9ISh0IGluc3RhbmNlb2YgQXJyYXkpfWNhdGNoKG8pe3I9ITB9cmV0dXJuIGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGkoZSx0KSxyP2UuX19wcm90b19fPXQ6bihlLHQpLGV9fSh7fSwhMSk6dm9pZCAwKSxjaGVjazppfX0se1wiLi9fYW4tb2JqZWN0XCI6MTQsXCIuL19jdHhcIjoxOSxcIi4vX2lzLW9iamVjdFwiOjM1LFwiLi9fb2JqZWN0LWdvcGRcIjo0N31dLDU2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vX2dsb2JhbFwiKSxvPWUoXCIuL19jb3JlXCIpLGk9ZShcIi4vX29iamVjdC1kcFwiKSxjPWUoXCIuL19kZXNjcmlwdG9yc1wiKSxzPWUoXCIuL193a3NcIikoXCJzcGVjaWVzXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvW2VdP29bZV06bltlXTtjJiZ0JiYhdFtzXSYmaS5mKHQscyx7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzfX0pfX0se1wiLi9fY29yZVwiOjE4LFwiLi9fZGVzY3JpcHRvcnNcIjoyMSxcIi4vX2dsb2JhbFwiOjI3LFwiLi9fb2JqZWN0LWRwXCI6NDUsXCIuL193a3NcIjo3MH1dLDU3OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX29iamVjdC1kcFwiKS5mLG89ZShcIi4vX2hhc1wiKSxpPWUoXCIuL193a3NcIikoXCJ0b1N0cmluZ1RhZ1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe2UmJiFvKGU9cj9lOmUucHJvdG90eXBlLGkpJiZuKGUsaSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOnR9KX19LHtcIi4vX2hhc1wiOjI4LFwiLi9fb2JqZWN0LWRwXCI6NDUsXCIuL193a3NcIjo3MH1dLDU4OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX3NoYXJlZFwiKShcImtleXNcIiksbz1lKFwiLi9fdWlkXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gbltlXXx8KG5bZV09byhlKSl9fSx7XCIuL19zaGFyZWRcIjo1OSxcIi4vX3VpZFwiOjY5fV0sNTk6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fZ2xvYmFsXCIpLG89XCJfX2NvcmUtanNfc2hhcmVkX19cIixpPW5bb118fChuW29dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGlbZV18fChpW2VdPXt9KX19LHtcIi4vX2dsb2JhbFwiOjI3fV0sNjA6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fYW4tb2JqZWN0XCIpLG89ZShcIi4vX2EtZnVuY3Rpb25cIiksaT1lKFwiLi9fd2tzXCIpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgcixjPW4oZSkuY29uc3RydWN0b3I7cmV0dXJuIHZvaWQgMD09PWN8fHZvaWQgMD09KHI9bihjKVtpXSk/dDpvKHIpfX0se1wiLi9fYS1mdW5jdGlvblwiOjExLFwiLi9fYW4tb2JqZWN0XCI6MTQsXCIuL193a3NcIjo3MH1dLDYxOltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX3RvLWludGVnZXJcIiksbz1lKFwiLi9fZGVmaW5lZFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQscil7dmFyIGksYyxzPVN0cmluZyhvKHQpKSx1PW4ociksYT1zLmxlbmd0aDtyZXR1cm4gMD51fHx1Pj1hP2U/XCJcIjp2b2lkIDA6KGk9cy5jaGFyQ29kZUF0KHUpLDU1Mjk2Pml8fGk+NTYzMTl8fHUrMT09PWF8fChjPXMuY2hhckNvZGVBdCh1KzEpKTw1NjMyMHx8Yz41NzM0Mz9lP3MuY2hhckF0KHUpOmk6ZT9zLnNsaWNlKHUsdSsyKTooaS01NTI5Njw8MTApKyhjLTU2MzIwKSs2NTUzNil9fX0se1wiLi9fZGVmaW5lZFwiOjIwLFwiLi9fdG8taW50ZWdlclwiOjY0fV0sNjI6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbixvLGksYz1lKFwiLi9fY3R4XCIpLHM9ZShcIi4vX2ludm9rZVwiKSx1PWUoXCIuL19odG1sXCIpLGE9ZShcIi4vX2RvbS1jcmVhdGVcIiksZj1lKFwiLi9fZ2xvYmFsXCIpLF89Zi5wcm9jZXNzLGw9Zi5zZXRJbW1lZGlhdGUscD1mLmNsZWFySW1tZWRpYXRlLGQ9Zi5NZXNzYWdlQ2hhbm5lbCx2PTAsaD17fSx5PVwib25yZWFkeXN0YXRlY2hhbmdlXCIsYj1mdW5jdGlvbigpe3ZhciBlPSt0aGlzO2lmKGguaGFzT3duUHJvcGVydHkoZSkpe3ZhciB0PWhbZV07ZGVsZXRlIGhbZV0sdCgpfX0sbT1mdW5jdGlvbihlKXtiLmNhbGwoZS5kYXRhKX07bCYmcHx8KGw9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLHI9MTthcmd1bWVudHMubGVuZ3RoPnI7KXQucHVzaChhcmd1bWVudHNbcisrXSk7cmV0dXJuIGhbKyt2XT1mdW5jdGlvbigpe3MoXCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOkZ1bmN0aW9uKGUpLHQpfSxuKHYpLHZ9LHA9ZnVuY3Rpb24oZSl7ZGVsZXRlIGhbZV19LFwicHJvY2Vzc1wiPT1lKFwiLi9fY29mXCIpKF8pP249ZnVuY3Rpb24oZSl7Xy5uZXh0VGljayhjKGIsZSwxKSl9OmQ/KG89bmV3IGQsaT1vLnBvcnQyLG8ucG9ydDEub25tZXNzYWdlPW0sbj1jKGkucG9zdE1lc3NhZ2UsaSwxKSk6Zi5hZGRFdmVudExpc3RlbmVyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwb3N0TWVzc2FnZSYmIWYuaW1wb3J0U2NyaXB0cz8obj1mdW5jdGlvbihlKXtmLnBvc3RNZXNzYWdlKGUrXCJcIixcIipcIil9LGYuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixtLCExKSk6bj15IGluIGEoXCJzY3JpcHRcIik/ZnVuY3Rpb24oZSl7dS5hcHBlbmRDaGlsZChhKFwic2NyaXB0XCIpKVt5XT1mdW5jdGlvbigpe3UucmVtb3ZlQ2hpbGQodGhpcyksYi5jYWxsKGUpfX06ZnVuY3Rpb24oZSl7c2V0VGltZW91dChjKGIsZSwxKSwwKX0pLHQuZXhwb3J0cz17c2V0OmwsY2xlYXI6cH19LHtcIi4vX2NvZlwiOjE3LFwiLi9fY3R4XCI6MTksXCIuL19kb20tY3JlYXRlXCI6MjIsXCIuL19nbG9iYWxcIjoyNyxcIi4vX2h0bWxcIjozMCxcIi4vX2ludm9rZVwiOjMyfV0sNjM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fdG8taW50ZWdlclwiKSxvPU1hdGgubWF4LGk9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9bihlKSwwPmU/byhlK3QsMCk6aShlLHQpfX0se1wiLi9fdG8taW50ZWdlclwiOjY0fV0sNjQ6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1NYXRoLmNlaWwsbz1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gaXNOYU4oZT0rZSk/MDooZT4wP286bikoZSl9fSx7fV0sNjU6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9faW9iamVjdFwiKSxvPWUoXCIuL19kZWZpbmVkXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gbihvKGUpKX19LHtcIi4vX2RlZmluZWRcIjoyMCxcIi4vX2lvYmplY3RcIjozM31dLDY2OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX3RvLWludGVnZXJcIiksbz1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU+MD9vKG4oZSksOTAwNzE5OTI1NDc0MDk5MSk6MH19LHtcIi4vX3RvLWludGVnZXJcIjo2NH1dLDY3OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2RlZmluZWRcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QobihlKSl9fSx7XCIuL19kZWZpbmVkXCI6MjB9XSw2ODpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19pcy1vYmplY3RcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7aWYoIW4oZSkpcmV0dXJuIGU7dmFyIHIsbztpZih0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZihyPWUudG9TdHJpbmcpJiYhbihvPXIuY2FsbChlKSkpcmV0dXJuIG87aWYoXCJmdW5jdGlvblwiPT10eXBlb2Yocj1lLnZhbHVlT2YpJiYhbihvPXIuY2FsbChlKSkpcmV0dXJuIG87aWYoIXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mKHI9ZS50b1N0cmluZykmJiFuKG89ci5jYWxsKGUpKSlyZXR1cm4gbzt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSx7XCIuL19pcy1vYmplY3RcIjozNX1dLDY5OltmdW5jdGlvbihlLHQscil7dmFyIG49MCxvPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT1lP1wiXCI6ZSxcIilfXCIsKCsrbitvKS50b1N0cmluZygzNikpfX0se31dLDcwOltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX3NoYXJlZFwiKShcIndrc1wiKSxvPWUoXCIuL191aWRcIiksaT1lKFwiLi9fZ2xvYmFsXCIpLlN5bWJvbCxjPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBuW2VdfHwobltlXT1jJiZpW2VdfHwoYz9pOm8pKFwiU3ltYm9sLlwiK2UpKX19LHtcIi4vX2dsb2JhbFwiOjI3LFwiLi9fc2hhcmVkXCI6NTksXCIuL191aWRcIjo2OX1dLDcxOltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2NsYXNzb2ZcIiksbz1lKFwiLi9fd2tzXCIpKFwiaXRlcmF0b3JcIiksaT1lKFwiLi9faXRlcmF0b3JzXCIpO3QuZXhwb3J0cz1lKFwiLi9fY29yZVwiKS5nZXRJdGVyYXRvck1ldGhvZD1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT1lP2Vbb118fGVbXCJAQGl0ZXJhdG9yXCJdfHxpW24oZSldOnZvaWQgMH19LHtcIi4vX2NsYXNzb2ZcIjoxNixcIi4vX2NvcmVcIjoxOCxcIi4vX2l0ZXJhdG9yc1wiOjQxLFwiLi9fd2tzXCI6NzB9XSw3MjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCIuL19hZGQtdG8tdW5zY29wYWJsZXNcIiksbz1lKFwiLi9faXRlci1zdGVwXCIpLGk9ZShcIi4vX2l0ZXJhdG9yc1wiKSxjPWUoXCIuL190by1pb2JqZWN0XCIpO3QuZXhwb3J0cz1lKFwiLi9faXRlci1kZWZpbmVcIikoQXJyYXksXCJBcnJheVwiLGZ1bmN0aW9uKGUsdCl7dGhpcy5fdD1jKGUpLHRoaXMuX2k9MCx0aGlzLl9rPXR9LGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fdCx0PXRoaXMuX2sscj10aGlzLl9pKys7cmV0dXJuIWV8fHI+PWUubGVuZ3RoPyh0aGlzLl90PXZvaWQgMCxvKDEpKTpcImtleXNcIj09dD9vKDAscik6XCJ2YWx1ZXNcIj09dD9vKDAsZVtyXSk6bygwLFtyLGVbcl1dKX0sXCJ2YWx1ZXNcIiksaS5Bcmd1bWVudHM9aS5BcnJheSxuKFwia2V5c1wiKSxuKFwidmFsdWVzXCIpLG4oXCJlbnRyaWVzXCIpfSx7XCIuL19hZGQtdG8tdW5zY29wYWJsZXNcIjoxMixcIi4vX2l0ZXItZGVmaW5lXCI6MzgsXCIuL19pdGVyLXN0ZXBcIjo0MCxcIi4vX2l0ZXJhdG9yc1wiOjQxLFwiLi9fdG8taW9iamVjdFwiOjY1fV0sNzM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fZXhwb3J0XCIpO24obi5TK24uRiohZShcIi4vX2Rlc2NyaXB0b3JzXCIpLFwiT2JqZWN0XCIse2RlZmluZVByb3BlcnR5OmUoXCIuL19vYmplY3QtZHBcIikuZn0pfSx7XCIuL19kZXNjcmlwdG9yc1wiOjIxLFwiLi9fZXhwb3J0XCI6MjQsXCIuL19vYmplY3QtZHBcIjo0NX1dLDc0OltmdW5jdGlvbihlLHQscil7fSx7fV0sNzU6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbixvLGksYz1lKFwiLi9fbGlicmFyeVwiKSxzPWUoXCIuL19nbG9iYWxcIiksdT1lKFwiLi9fY3R4XCIpLGE9ZShcIi4vX2NsYXNzb2ZcIiksZj1lKFwiLi9fZXhwb3J0XCIpLF89ZShcIi4vX2lzLW9iamVjdFwiKSxsPShlKFwiLi9fYW4tb2JqZWN0XCIpLGUoXCIuL19hLWZ1bmN0aW9uXCIpKSxwPWUoXCIuL19hbi1pbnN0YW5jZVwiKSxkPWUoXCIuL19mb3Itb2ZcIiksdj0oZShcIi4vX3NldC1wcm90b1wiKS5zZXQsZShcIi4vX3NwZWNpZXMtY29uc3RydWN0b3JcIikpLGg9ZShcIi4vX3Rhc2tcIikuc2V0LHk9ZShcIi4vX21pY3JvdGFza1wiKSxiPVwiUHJvbWlzZVwiLG09cy5UeXBlRXJyb3IsZz1zLnByb2Nlc3Msaj1zW2JdLGc9cy5wcm9jZXNzLHg9XCJwcm9jZXNzXCI9PWEoZyksdz1mdW5jdGlvbigpe30saz0hIWZ1bmN0aW9uKCl7dHJ5e3ZhciB0PWoucmVzb2x2ZSgxKSxyPSh0LmNvbnN0cnVjdG9yPXt9KVtlKFwiLi9fd2tzXCIpKFwic3BlY2llc1wiKV09ZnVuY3Rpb24oZSl7ZSh3LHcpfTtyZXR1cm4oeHx8XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50KSYmdC50aGVuKHcpaW5zdGFuY2VvZiByfWNhdGNoKG4pe319KCksTz1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dHx8ZT09PWomJnQ9PT1pfSxNPWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBfKGUpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZih0PWUudGhlbik/dDohMX0sUD1mdW5jdGlvbihlKXtyZXR1cm4gTyhqLGUpP25ldyBTKGUpOm5ldyBvKGUpfSxTPW89ZnVuY3Rpb24oZSl7dmFyIHQscjt0aGlzLnByb21pc2U9bmV3IGUoZnVuY3Rpb24oZSxuKXtpZih2b2lkIDAhPT10fHx2b2lkIDAhPT1yKXRocm93IG0oXCJCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvclwiKTt0PWUscj1ufSksdGhpcy5yZXNvbHZlPWwodCksdGhpcy5yZWplY3Q9bChyKX0sRT1mdW5jdGlvbihlKXt0cnl7ZSgpfWNhdGNoKHQpe3JldHVybntlcnJvcjp0fX19LFQ9ZnVuY3Rpb24oZSx0KXtpZighZS5fbil7ZS5fbj0hMDt2YXIgcj1lLl9jO3koZnVuY3Rpb24oKXtmb3IodmFyIG49ZS5fdixvPTE9PWUuX3MsaT0wLGM9ZnVuY3Rpb24odCl7dmFyIHIsaSxjPW8/dC5vazp0LmZhaWwscz10LnJlc29sdmUsdT10LnJlamVjdCxhPXQuZG9tYWluO3RyeXtjPyhvfHwoMj09ZS5faCYmUihlKSxlLl9oPTEpLGM9PT0hMD9yPW46KGEmJmEuZW50ZXIoKSxyPWMobiksYSYmYS5leGl0KCkpLHI9PT10LnByb21pc2U/dShtKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSk6KGk9TShyKSk/aS5jYWxsKHIscyx1KTpzKHIpKTp1KG4pfWNhdGNoKGYpe3UoZil9fTtyLmxlbmd0aD5pOyljKHJbaSsrXSk7ZS5fYz1bXSxlLl9uPSExLHQmJiFlLl9oJiZBKGUpfSl9fSxBPWZ1bmN0aW9uKGUpe2guY2FsbChzLGZ1bmN0aW9uKCl7dmFyIHQscixuLG89ZS5fdjtpZihDKGUpJiYodD1FKGZ1bmN0aW9uKCl7eD9nLmVtaXQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIixvLGUpOihyPXMub251bmhhbmRsZWRyZWplY3Rpb24pP3Ioe3Byb21pc2U6ZSxyZWFzb246b30pOihuPXMuY29uc29sZSkmJm4uZXJyb3ImJm4uZXJyb3IoXCJVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cIixvKX0pLGUuX2g9eHx8QyhlKT8yOjEpLGUuX2E9dm9pZCAwLHQpdGhyb3cgdC5lcnJvcn0pfSxDPWZ1bmN0aW9uKGUpe2lmKDE9PWUuX2gpcmV0dXJuITE7Zm9yKHZhciB0LHI9ZS5fYXx8ZS5fYyxuPTA7ci5sZW5ndGg+bjspaWYodD1yW24rK10sdC5mYWlsfHwhQyh0LnByb21pc2UpKXJldHVybiExO3JldHVybiEwfSxSPWZ1bmN0aW9uKGUpe2guY2FsbChzLGZ1bmN0aW9uKCl7dmFyIHQ7eD9nLmVtaXQoXCJyZWplY3Rpb25IYW5kbGVkXCIsZSk6KHQ9cy5vbnJlamVjdGlvbmhhbmRsZWQpJiZ0KHtwcm9taXNlOmUscmVhc29uOmUuX3Z9KX0pfSxGPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5fZHx8KHQuX2Q9ITAsdD10Ll93fHx0LHQuX3Y9ZSx0Ll9zPTIsdC5fYXx8KHQuX2E9dC5fYy5zbGljZSgpKSxUKHQsITApKX0sTD1mdW5jdGlvbihlKXt2YXIgdCxyPXRoaXM7aWYoIXIuX2Qpe3IuX2Q9ITAscj1yLl93fHxyO3RyeXtpZihyPT09ZSl0aHJvdyBtKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7KHQ9TShlKSk/eShmdW5jdGlvbigpe3ZhciBuPXtfdzpyLF9kOiExfTt0cnl7dC5jYWxsKGUsdShMLG4sMSksdShGLG4sMSkpfWNhdGNoKG8pe0YuY2FsbChuLG8pfX0pOihyLl92PWUsci5fcz0xLFQociwhMSkpfWNhdGNoKG4pe0YuY2FsbCh7X3c6cixfZDohMX0sbil9fX07a3x8KGo9ZnVuY3Rpb24oZSl7cCh0aGlzLGosYixcIl9oXCIpLGwoZSksbi5jYWxsKHRoaXMpO3RyeXtlKHUoTCx0aGlzLDEpLHUoRix0aGlzLDEpKX1jYXRjaCh0KXtGLmNhbGwodGhpcyx0KX19LG49ZnVuY3Rpb24oZSl7dGhpcy5fYz1bXSx0aGlzLl9hPXZvaWQgMCx0aGlzLl9zPTAsdGhpcy5fZD0hMSx0aGlzLl92PXZvaWQgMCx0aGlzLl9oPTAsdGhpcy5fbj0hMX0sbi5wcm90b3R5cGU9ZShcIi4vX3JlZGVmaW5lLWFsbFwiKShqLnByb3RvdHlwZSx7dGhlbjpmdW5jdGlvbihlLHQpe3ZhciByPVAodih0aGlzLGopKTtyZXR1cm4gci5vaz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6ITAsci5mYWlsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnQsci5kb21haW49eD9nLmRvbWFpbjp2b2lkIDAsdGhpcy5fYy5wdXNoKHIpLHRoaXMuX2EmJnRoaXMuX2EucHVzaChyKSx0aGlzLl9zJiZUKHRoaXMsITEpLHIucHJvbWlzZX0sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4odm9pZCAwLGUpfX0pLFM9ZnVuY3Rpb24oKXt2YXIgZT1uZXcgbjt0aGlzLnByb21pc2U9ZSx0aGlzLnJlc29sdmU9dShMLGUsMSksdGhpcy5yZWplY3Q9dShGLGUsMSl9KSxmKGYuRytmLlcrZi5GKiFrLHtQcm9taXNlOmp9KSxlKFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIikoaixiKSxlKFwiLi9fc2V0LXNwZWNpZXNcIikoYiksaT1lKFwiLi9fY29yZVwiKVtiXSxmKGYuUytmLkYqIWssYix7cmVqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0PVAodGhpcykscj10LnJlamVjdDtyZXR1cm4gcihlKSx0LnByb21pc2V9fSksZihmLlMrZi5GKihjfHwhayksYix7cmVzb2x2ZTpmdW5jdGlvbihlKXtpZihlIGluc3RhbmNlb2YgaiYmTyhlLmNvbnN0cnVjdG9yLHRoaXMpKXJldHVybiBlO3ZhciB0PVAodGhpcykscj10LnJlc29sdmU7cmV0dXJuIHIoZSksdC5wcm9taXNlfX0pLGYoZi5TK2YuRiohKGsmJmUoXCIuL19pdGVyLWRldGVjdFwiKShmdW5jdGlvbihlKXtqLmFsbChlKVtcImNhdGNoXCJdKHcpfSkpLGIse2FsbDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9UCh0KSxuPXIucmVzb2x2ZSxvPXIucmVqZWN0LGk9RShmdW5jdGlvbigpe3ZhciByPVtdLGk9MCxjPTE7ZChlLCExLGZ1bmN0aW9uKGUpe3ZhciBzPWkrKyx1PSExO3IucHVzaCh2b2lkIDApLGMrKyx0LnJlc29sdmUoZSkudGhlbihmdW5jdGlvbihlKXt1fHwodT0hMCxyW3NdPWUsLS1jfHxuKHIpKX0sbyl9KSwtLWN8fG4ocil9KTtyZXR1cm4gaSYmbyhpLmVycm9yKSxyLnByb21pc2V9LHJhY2U6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPVAodCksbj1yLnJlamVjdCxvPUUoZnVuY3Rpb24oKXtkKGUsITEsZnVuY3Rpb24oZSl7dC5yZXNvbHZlKGUpLnRoZW4oci5yZXNvbHZlLG4pfSl9KTtyZXR1cm4gbyYmbihvLmVycm9yKSxyLnByb21pc2V9fSl9LHtcIi4vX2EtZnVuY3Rpb25cIjoxMSxcIi4vX2FuLWluc3RhbmNlXCI6MTMsXCIuL19hbi1vYmplY3RcIjoxNCxcIi4vX2NsYXNzb2ZcIjoxNixcIi4vX2NvcmVcIjoxOCxcIi4vX2N0eFwiOjE5LFwiLi9fZXhwb3J0XCI6MjQsXCIuL19mb3Itb2ZcIjoyNixcIi4vX2dsb2JhbFwiOjI3LFwiLi9faXMtb2JqZWN0XCI6MzUsXCIuL19pdGVyLWRldGVjdFwiOjM5LFwiLi9fbGlicmFyeVwiOjQyLFwiLi9fbWljcm90YXNrXCI6NDMsXCIuL19yZWRlZmluZS1hbGxcIjo1MyxcIi4vX3NldC1wcm90b1wiOjU1LFwiLi9fc2V0LXNwZWNpZXNcIjo1NixcIi4vX3NldC10by1zdHJpbmctdGFnXCI6NTcsXCIuL19zcGVjaWVzLWNvbnN0cnVjdG9yXCI6NjAsXCIuL190YXNrXCI6NjIsXCIuL193a3NcIjo3MH1dLDc2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vX3N0cmluZy1hdFwiKSghMCk7ZShcIi4vX2l0ZXItZGVmaW5lXCIpKFN0cmluZyxcIlN0cmluZ1wiLGZ1bmN0aW9uKGUpe3RoaXMuX3Q9U3RyaW5nKGUpLHRoaXMuX2k9MH0sZnVuY3Rpb24oKXt2YXIgZSx0PXRoaXMuX3Qscj10aGlzLl9pO3JldHVybiByPj10Lmxlbmd0aD97dmFsdWU6dm9pZCAwLGRvbmU6ITB9OihlPW4odCxyKSx0aGlzLl9pKz1lLmxlbmd0aCx7dmFsdWU6ZSxkb25lOiExfSl9KX0se1wiLi9faXRlci1kZWZpbmVcIjozOCxcIi4vX3N0cmluZy1hdFwiOjYxfV0sNzc6W2Z1bmN0aW9uKGUsdCxyKXtlKFwiLi9lczYuYXJyYXkuaXRlcmF0b3JcIik7Zm9yKHZhciBuPWUoXCIuL19nbG9iYWxcIiksbz1lKFwiLi9faGlkZVwiKSxpPWUoXCIuL19pdGVyYXRvcnNcIiksYz1lKFwiLi9fd2tzXCIpKFwidG9TdHJpbmdUYWdcIikscz1bXCJOb2RlTGlzdFwiLFwiRE9NVG9rZW5MaXN0XCIsXCJNZWRpYUxpc3RcIixcIlN0eWxlU2hlZXRMaXN0XCIsXCJDU1NSdWxlTGlzdFwiXSx1PTA7NT51O3UrKyl7dmFyIGE9c1t1XSxmPW5bYV0sXz1mJiZmLnByb3RvdHlwZTtfJiYhX1tjXSYmbyhfLGMsYSksaVthXT1pLkFycmF5fX0se1wiLi9fZ2xvYmFsXCI6MjcsXCIuL19oaWRlXCI6MjksXCIuL19pdGVyYXRvcnNcIjo0MSxcIi4vX3drc1wiOjcwLFwiLi9lczYuYXJyYXkuaXRlcmF0b3JcIjo3Mn1dLDc4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG89ZShcIi4vaHlwZXJ0eS1kaXNjb3ZlcnkvSHlwZXJ0eURpc2NvdmVyeVwiKSxpPW4obyk7cltcImRlZmF1bHRcIl09aVtcImRlZmF1bHRcIl0sdC5leHBvcnRzPXJbXCJkZWZhdWx0XCJdfSx7XCIuL2h5cGVydHktZGlzY292ZXJ5L0h5cGVydHlEaXNjb3ZlcnlcIjo3OSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjd9XSw3OTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCIpW1wiZGVmYXVsdFwiXSxvPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiKVtcImRlZmF1bHRcIl0saT1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIilbXCJkZWZhdWx0XCJdO09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPWUoXCIuLi91dGlscy91dGlsc1wiKSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LHIpe28odGhpcyxlKTt2YXIgbj10aGlzO24ubWVzc2FnZUJ1cz1yLG4uZG9tYWluPSgwLGMuZGl2aWRlVVJMKSh0KS5kb21haW4sbi5kaXNjb3ZlcnlVUkw9dH1yZXR1cm4gbihlLFt7a2V5OlwiZGlzY292ZXJIeXBlcnR5UGVyVXNlclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcyxuPXZvaWQgMDtuPXQ/dDpyLmRvbWFpbjt2YXIgbz1cInVzZXI6Ly9cIitlLnN1YnN0cmluZyhlLmluZGV4T2YoXCJAXCIpKzEsZS5sZW5ndGgpK1wiL1wiK2Uuc3Vic3RyaW5nKDAsZS5pbmRleE9mKFwiQFwiKSksYz17dHlwZTpcIlJFQURcIixmcm9tOnIuZGlzY292ZXJ5VVJMLHRvOlwiZG9tYWluOi8vcmVnaXN0cnkuXCIrbitcIi9cIixib2R5OntyZXNvdXJjZTpvfX07cmV0dXJuIGNvbnNvbGUubG9nKFwiTWVzc2FnZTogXCIsYyxuLG8pLG5ldyBpKGZ1bmN0aW9uKHQsbil7ci5tZXNzYWdlQnVzLnBvc3RNZXNzYWdlKGMsZnVuY3Rpb24ocil7Y29uc29sZS5sb2coXCJtZXNzYWdlIHJlcGx5XCIscik7dmFyIG89dm9pZCAwLGk9dm9pZCAwLGM9dm9pZCAwLHM9ci5ib2R5LnZhbHVlO2ZvcihvIGluIHMpaWYodm9pZCAwIT09c1tvXS5sYXN0TW9kaWZpZWQpaWYodm9pZCAwPT09aSlpPW5ldyBEYXRlKHNbb10ubGFzdE1vZGlmaWVkKSxjPW87ZWxzZXt2YXIgdT1uZXcgRGF0ZShzW29dLmxhc3RNb2RpZmllZCk7aS5nZXRUaW1lKCk8dS5nZXRUaW1lKCkmJihpPXUsYz1vKX1jb25zb2xlLmxvZyhcIkxhc3QgSHlwZXJ0eTogXCIsYyxpKTt2YXIgYT1jO2lmKHZvaWQgMD09PWEpcmV0dXJuIG4oXCJVc2VyIEh5cGVydHkgbm90IGZvdW5kXCIpO3ZhciBmPXtpZDplLGRlc2NyaXB0b3I6c1thXS5kZXNjcmlwdG9yLGh5cGVydHlVUkw6YX07Y29uc29sZS5sb2coXCI9PT0+IGh5cGVydHlEaXNjb3ZlcnkgbWVzc2FnZUJ1bmRsZTogXCIsZiksdChmKX0pfSl9fV0pLGV9KCk7cltcImRlZmF1bHRcIl09cyx0LmV4cG9ydHM9cltcImRlZmF1bHRcIl19LHtcIi4uL3V0aWxzL3V0aWxzXCI6ODAsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiOjIsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiOjMsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCI6NX1dLDgwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXt2YXIgdD0vKFthLXpBLVotXSopOlxcL1xcLyg/OlxcLik/KFstYS16QS1aMC05QDolLl9cXCt+Iz1dezIsMjU2fSkoWy1hLXpBLVowLTlAOiUuX1xcK34jPVxcL10qKS9naSxyPVwiJDEsJDIsJDNcIixuPWUucmVwbGFjZSh0LHIpLnNwbGl0KFwiLFwiKTtuWzBdPT09ZSYmKG5bMF09XCJodHRwc1wiLG5bMV09ZSk7dmFyIG89e3R5cGU6blswXSxkb21haW46blsxXSxpZGVudGl0eTpuWzJdfTtyZXR1cm4gb31mdW5jdGlvbiBvKGUpe3JldHVybiBlP0pTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpOnZvaWQgMH1PYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxyLmRpdmlkZVVSTD1uLHIuZGVlcENsb25lPW99LHt9XX0se30sWzc4XSkoNzgpfSk7IiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuLy8gRGlzdHJpYnV0aW9uIGZpbGUgZm9yIFN5bmNoZXIuanMgXHJcbi8vIHZlcnNpb246IDAuMS4wXHJcblxyXG4hZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxlKTtlbHNle3ZhciB0O3Q9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLHQuU3luY2hlcj1lKCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiBlKHQscixvKXtmdW5jdGlvbiBuKHMsYyl7aWYoIXJbc10pe2lmKCF0W3NdKXt2YXIgYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFjJiZhKXJldHVybiBhKHMsITApO2lmKGkpcmV0dXJuIGkocywhMCk7dmFyIHU9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitzK1wiJ1wiKTt0aHJvdyB1LmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsdX12YXIgbD1yW3NdPXtleHBvcnRzOnt9fTt0W3NdWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciByPXRbc11bMV1bZV07cmV0dXJuIG4ocj9yOmUpfSxsLGwuZXhwb3J0cyxlLHQscixvKX1yZXR1cm4gcltzXS5leHBvcnRzfWZvcih2YXIgaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLHM9MDtzPG8ubGVuZ3RoO3MrKyluKG9bc10pO3JldHVybiBufSh7MTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiOjE5fV0sMjpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiOjIwfV0sMzpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiOjIxfV0sNDpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSxfX2VzTW9kdWxlOiEwfX0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCI6MjJ9XSw1OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIjoyM31dLDY6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksX19lc01vZHVsZTohMH19LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiOjI0fV0sNzpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiOjI1fV0sODpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksX19lc01vZHVsZTohMH19LHtcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIjoyNn1dLDk6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCI6Mjd9XSwxMDpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1lKFwiLi9jbGFzc0NhbGxDaGVjay5qc1wiKX0se1wiLi9jbGFzc0NhbGxDaGVjay5qc1wiOjExfV0sMTE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtyLl9fZXNNb2R1bGU9ITAscltcImRlZmF1bHRcIl09ZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfX0se31dLDEyOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWUoXCIuL2NyZWF0ZUNsYXNzLmpzXCIpfSx7XCIuL2NyZWF0ZUNsYXNzLmpzXCI6MTN9XSwxMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1yLl9fZXNNb2R1bGU9ITA7dmFyIG49ZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLGk9byhuKTtyW1wiZGVmYXVsdFwiXT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG89dFtyXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksKDAsaVtcImRlZmF1bHRcIl0pKGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LHIsbyl7cmV0dXJuIHImJmUodC5wcm90b3R5cGUsciksbyYmZSh0LG8pLHR9fSgpfSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiOjJ9XSwxNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1yLl9fZXNNb2R1bGU9ITA7dmFyIG49ZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSxpPW8obikscz1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksYz1vKHMpO3JbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uIGEoZSx0LHIpe251bGw9PT1lJiYoZT1GdW5jdGlvbi5wcm90b3R5cGUpO3ZhciBvPSgwLGNbXCJkZWZhdWx0XCJdKShlLHQpO2lmKHZvaWQgMD09PW8pe3ZhciBuPSgwLGlbXCJkZWZhdWx0XCJdKShlKTtyZXR1cm4gbnVsbD09PW4/dm9pZCAwOmEobix0LHIpfWlmKFwidmFsdWVcImluIG8pcmV0dXJuIG8udmFsdWU7dmFyIHM9by5nZXQ7aWYodm9pZCAwIT09cylyZXR1cm4gcy5jYWxsKHIpfX0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIjozLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCI6NH1dLDE1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fXIuX19lc01vZHVsZT0hMDt2YXIgbj1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLGk9byhuKSxzPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKSxjPW8ocyksYT1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKSx1PW8oYSk7cltcImRlZmF1bHRcIl09ZnVuY3Rpb24oZSx0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0JiZudWxsIT09dCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIisoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjooMCx1W1wiZGVmYXVsdFwiXSkodCkpKTtlLnByb3RvdHlwZT0oMCxjW1wiZGVmYXVsdFwiXSkodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihpW1wiZGVmYXVsdFwiXT8oMCxpW1wiZGVmYXVsdFwiXSkoZSx0KTplLl9fcHJvdG9fXz10KX19LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlXCI6MSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiOjYsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCI6MTh9XSwxNjpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1lKFwiLi9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIil9LHtcIi4vaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCI6MTd9XSwxNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3IuX19lc01vZHVsZT0hMCxyW1wiZGVmYXVsdFwiXT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fX0se31dLDE4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fXIuX19lc01vZHVsZT0hMDt2YXIgbj1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKSxpPW8obikscz1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbFwiKSxjPW8ocyksYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBjW1wiZGVmYXVsdFwiXSYmXCJzeW1ib2xcIj09dHlwZW9mIGlbXCJkZWZhdWx0XCJdP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGNbXCJkZWZhdWx0XCJdJiZlLmNvbnN0cnVjdG9yPT09Y1tcImRlZmF1bHRcIl0/XCJzeW1ib2xcIjp0eXBlb2YgZX07cltcImRlZmF1bHRcIl09XCJmdW5jdGlvblwiPT10eXBlb2YgY1tcImRlZmF1bHRcIl0mJlwic3ltYm9sXCI9PT1hKGlbXCJkZWZhdWx0XCJdKT9mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmEoZSl9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjW1wiZGVmYXVsdFwiXSYmZS5jb25zdHJ1Y3Rvcj09PWNbXCJkZWZhdWx0XCJdP1wic3ltYm9sXCI6XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjphKGUpfX0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbFwiOjgsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCI6OX1dLDE5OltmdW5jdGlvbihlLHQscil7ZShcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGVcIik7dmFyIG89ZShcIi4uLy4uL21vZHVsZXMvX2NvcmVcIikuT2JqZWN0O3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiBvLmNyZWF0ZShlLHQpfX0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjM1LFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZVwiOjk4fV0sMjA6W2Z1bmN0aW9uKGUsdCxyKXtlKFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eVwiKTt2YXIgbz1lKFwiLi4vLi4vbW9kdWxlcy9fY29yZVwiKS5PYmplY3Q7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gby5kZWZpbmVQcm9wZXJ0eShlLHQscil9fSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6MzUsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5XCI6OTl9XSwyMTpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO3ZhciBvPWUoXCIuLi8uLi9tb2R1bGVzL19jb3JlXCIpLk9iamVjdDt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gby5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KX19LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjozNSxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIjoxMDB9XSwyMjpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZlwiKSx0LmV4cG9ydHM9ZShcIi4uLy4uL21vZHVsZXMvX2NvcmVcIikuT2JqZWN0LmdldFByb3RvdHlwZU9mfSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6MzUsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZlwiOjEwMX1dLDIzOltmdW5jdGlvbihlLHQscil7ZShcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzXCIpLHQuZXhwb3J0cz1lKFwiLi4vLi4vbW9kdWxlcy9fY29yZVwiKS5PYmplY3Qua2V5c30se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjM1LFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXNcIjoxMDJ9XSwyNDpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZlwiKSx0LmV4cG9ydHM9ZShcIi4uLy4uL21vZHVsZXMvX2NvcmVcIikuT2JqZWN0LnNldFByb3RvdHlwZU9mfSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6MzUsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZlwiOjEwM31dLDI1OltmdW5jdGlvbihlLHQscil7ZShcIi4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIiksZShcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiKSxlKFwiLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCIpLGUoXCIuLi9tb2R1bGVzL2VzNi5wcm9taXNlXCIpLHQuZXhwb3J0cz1lKFwiLi4vbW9kdWxlcy9fY29yZVwiKS5Qcm9taXNlfSx7XCIuLi9tb2R1bGVzL19jb3JlXCI6MzUsXCIuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nXCI6MTA0LFwiLi4vbW9kdWxlcy9lczYucHJvbWlzZVwiOjEwNSxcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjEwNixcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiOjEwOH1dLDI2OltmdW5jdGlvbihlLHQscil7ZShcIi4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbFwiKSxlKFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiKSx0LmV4cG9ydHM9ZShcIi4uLy4uL21vZHVsZXMvX2NvcmVcIikuU3ltYm9sfSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6MzUsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nXCI6MTA0LFwiLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sXCI6MTA3fV0sMjc6W2Z1bmN0aW9uKGUsdCxyKXtlKFwiLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCIpLGUoXCIuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIiksdC5leHBvcnRzPWUoXCIuLi8uLi9tb2R1bGVzL193a3NcIikoXCJpdGVyYXRvclwiKX0se1wiLi4vLi4vbW9kdWxlcy9fd2tzXCI6OTUsXCIuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjoxMDYsXCIuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjoxMDh9XSwyODpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IFR5cGVFcnJvcihlK1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gZX19LHt9XSwyOTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbigpe319LHt9XSwzMDpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixvKXtpZighKGUgaW5zdGFuY2VvZiB0KXx8dm9pZCAwIT09byYmbyBpbiBlKXRocm93IFR5cGVFcnJvcihyK1wiOiBpbmNvcnJlY3QgaW52b2NhdGlvbiFcIik7cmV0dXJuIGV9fSx7fV0sMzE6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9faXMtb2JqZWN0XCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtpZighbyhlKSl0aHJvdyBUeXBlRXJyb3IoZStcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gZX19LHtcIi4vX2lzLW9iamVjdFwiOjU0fV0sMzI6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fdG8taW9iamVjdFwiKSxuPWUoXCIuL190by1sZW5ndGhcIiksaT1lKFwiLi9fdG8taW5kZXhcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0LHIscyl7dmFyIGMsYT1vKHQpLHU9bihhLmxlbmd0aCksbD1pKHMsdSk7aWYoZSYmciE9cil7Zm9yKDt1Pmw7KWlmKGM9YVtsKytdLGMhPWMpcmV0dXJuITB9ZWxzZSBmb3IoO3U+bDtsKyspaWYoKGV8fGwgaW4gYSkmJmFbbF09PT1yKXJldHVybiBlfHxsO3JldHVybiFlJiYtMX19fSx7XCIuL190by1pbmRleFwiOjg4LFwiLi9fdG8taW9iamVjdFwiOjkwLFwiLi9fdG8tbGVuZ3RoXCI6OTF9XSwzMzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19jb2ZcIiksbj1lKFwiLi9fd2tzXCIpKFwidG9TdHJpbmdUYWdcIiksaT1cIkFyZ3VtZW50c1wiPT1vKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSkscz1mdW5jdGlvbihlLHQpe3RyeXtyZXR1cm4gZVt0XX1jYXRjaChyKXt9fTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQscixjO3JldHVybiB2b2lkIDA9PT1lP1wiVW5kZWZpbmVkXCI6bnVsbD09PWU/XCJOdWxsXCI6XCJzdHJpbmdcIj09dHlwZW9mKHI9cyh0PU9iamVjdChlKSxuKSk/cjppP28odCk6XCJPYmplY3RcIj09KGM9byh0KSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY2FsbGVlP1wiQXJndW1lbnRzXCI6Y319LHtcIi4vX2NvZlwiOjM0LFwiLi9fd2tzXCI6OTV9XSwzNDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gby5jYWxsKGUpLnNsaWNlKDgsLTEpfX0se31dLDM1OltmdW5jdGlvbihlLHQscil7dmFyIG89dC5leHBvcnRzPXt2ZXJzaW9uOlwiMi4yLjFcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1vKX0se31dLDM2OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2EtZnVuY3Rpb25cIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtpZihvKGUpLHZvaWQgMD09PXQpcmV0dXJuIGU7c3dpdGNoKHIpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIGUuY2FsbCh0LHIpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHIsbyl7cmV0dXJuIGUuY2FsbCh0LHIsbyl9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24ocixvLG4pe3JldHVybiBlLmNhbGwodCxyLG8sbil9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHQsYXJndW1lbnRzKX19fSx7XCIuL19hLWZ1bmN0aW9uXCI6Mjh9XSwzNzpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlKXtpZih2b2lkIDA9PWUpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK2UpO3JldHVybiBlfX0se31dLDM4OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPSFlKFwiLi9fZmFpbHNcIikoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LHtcIi4vX2ZhaWxzXCI6NDN9XSwzOTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19pcy1vYmplY3RcIiksbj1lKFwiLi9fZ2xvYmFsXCIpLmRvY3VtZW50LGk9byhuKSYmbyhuLmNyZWF0ZUVsZW1lbnQpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gaT9uLmNyZWF0ZUVsZW1lbnQoZSk6e319fSx7XCIuL19nbG9iYWxcIjo0NSxcIi4vX2lzLW9iamVjdFwiOjU0fV0sNDA6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9XCJjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2ZcIi5zcGxpdChcIixcIil9LHt9XSw0MTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19vYmplY3Qta2V5c1wiKSxuPWUoXCIuL19vYmplY3QtZ29wc1wiKSxpPWUoXCIuL19vYmplY3QtcGllXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD1vKGUpLHI9bi5mO2lmKHIpZm9yKHZhciBzLGM9cihlKSxhPWkuZix1PTA7Yy5sZW5ndGg+dTspYS5jYWxsKGUscz1jW3UrK10pJiZ0LnB1c2gocyk7cmV0dXJuIHR9fSx7XCIuL19vYmplY3QtZ29wc1wiOjcxLFwiLi9fb2JqZWN0LWtleXNcIjo3NCxcIi4vX29iamVjdC1waWVcIjo3NX1dLDQyOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2dsb2JhbFwiKSxuPWUoXCIuL19jb3JlXCIpLGk9ZShcIi4vX2N0eFwiKSxzPWUoXCIuL19oaWRlXCIpLGM9XCJwcm90b3R5cGVcIixhPWZ1bmN0aW9uKGUsdCxyKXt2YXIgdSxsLGYsXz1lJmEuRixkPWUmYS5HLHA9ZSZhLlMsYj1lJmEuUCxoPWUmYS5CLHk9ZSZhLlcsdj1kP246blt0XXx8KG5bdF09e30pLGo9dltjXSxtPWQ/bzpwP29bdF06KG9bdF18fHt9KVtjXTtkJiYocj10KTtmb3IodSBpbiByKWw9IV8mJm0mJnZvaWQgMCE9PW1bdV0sbCYmdSBpbiB2fHwoZj1sP21bdV06clt1XSx2W3VdPWQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG1bdV0/clt1XTpoJiZsP2koZixvKTp5JiZtW3VdPT1mP2Z1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKHQscixvKXtpZih0aGlzIGluc3RhbmNlb2YgZSl7c3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe2Nhc2UgMDpyZXR1cm4gbmV3IGU7Y2FzZSAxOnJldHVybiBuZXcgZSh0KTtjYXNlIDI6cmV0dXJuIG5ldyBlKHQscil9cmV0dXJuIG5ldyBlKHQscixvKX1yZXR1cm4gZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O3JldHVybiB0W2NdPWVbY10sdH0oZik6YiYmXCJmdW5jdGlvblwiPT10eXBlb2YgZj9pKEZ1bmN0aW9uLmNhbGwsZik6ZixiJiYoKHYudmlydHVhbHx8KHYudmlydHVhbD17fSkpW3VdPWYsZSZhLlImJmomJiFqW3VdJiZzKGosdSxmKSkpfTthLkY9MSxhLkc9MixhLlM9NCxhLlA9OCxhLkI9MTYsYS5XPTMyLGEuVT02NCxhLlI9MTI4LHQuZXhwb3J0cz1hfSx7XCIuL19jb3JlXCI6MzUsXCIuL19jdHhcIjozNixcIi4vX2dsb2JhbFwiOjQ1LFwiLi9faGlkZVwiOjQ3fV0sNDM6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dHJ5e3JldHVybiEhZSgpfWNhdGNoKHQpe3JldHVybiEwfX19LHt9XSw0NDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19jdHhcIiksbj1lKFwiLi9faXRlci1jYWxsXCIpLGk9ZShcIi4vX2lzLWFycmF5LWl0ZXJcIikscz1lKFwiLi9fYW4tb2JqZWN0XCIpLGM9ZShcIi4vX3RvLWxlbmd0aFwiKSxhPWUoXCIuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsdSxsKXt2YXIgZixfLGQscD1sP2Z1bmN0aW9uKCl7cmV0dXJuIGV9OmEoZSksYj1vKHIsdSx0PzI6MSksaD0wO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHApdGhyb3cgVHlwZUVycm9yKGUrXCIgaXMgbm90IGl0ZXJhYmxlIVwiKTtpZihpKHApKWZvcihmPWMoZS5sZW5ndGgpO2Y+aDtoKyspdD9iKHMoXz1lW2hdKVswXSxfWzFdKTpiKGVbaF0pO2Vsc2UgZm9yKGQ9cC5jYWxsKGUpOyEoXz1kLm5leHQoKSkuZG9uZTspbihkLGIsXy52YWx1ZSx0KX19LHtcIi4vX2FuLW9iamVjdFwiOjMxLFwiLi9fY3R4XCI6MzYsXCIuL19pcy1hcnJheS1pdGVyXCI6NTIsXCIuL19pdGVyLWNhbGxcIjo1NSxcIi4vX3RvLWxlbmd0aFwiOjkxLFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIjo5Nn1dLDQ1OltmdW5jdGlvbihlLHQscil7dmFyIG89dC5leHBvcnRzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5NYXRoPT1NYXRoP3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5NYXRoPT1NYXRoP3NlbGY6RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1wibnVtYmVyXCI9PXR5cGVvZiBfX2cmJihfX2c9byl9LHt9XSw0NjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPXt9Lmhhc093blByb3BlcnR5O3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiBvLmNhbGwoZSx0KX19LHt9XSw0NzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19vYmplY3QtZHBcIiksbj1lKFwiLi9fcHJvcGVydHktZGVzY1wiKTt0LmV4cG9ydHM9ZShcIi4vX2Rlc2NyaXB0b3JzXCIpP2Z1bmN0aW9uKGUsdCxyKXtyZXR1cm4gby5mKGUsdCxuKDEscikpfTpmdW5jdGlvbihlLHQscil7cmV0dXJuIGVbdF09cixlfX0se1wiLi9fZGVzY3JpcHRvcnNcIjozOCxcIi4vX29iamVjdC1kcFwiOjY2LFwiLi9fcHJvcGVydHktZGVzY1wiOjc3fV0sNDg6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZShcIi4vX2dsb2JhbFwiKS5kb2N1bWVudCYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50fSx7XCIuL19nbG9iYWxcIjo0NX1dLDQ5OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPSFlKFwiLi9fZGVzY3JpcHRvcnNcIikmJiFlKFwiLi9fZmFpbHNcIikoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KGUoXCIuL19kb20tY3JlYXRlXCIpKFwiZGl2XCIpLFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MzgsXCIuL19kb20tY3JlYXRlXCI6MzksXCIuL19mYWlsc1wiOjQzfV0sNTA6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe3ZhciBvPXZvaWQgMD09PXI7c3dpdGNoKHQubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIG8/ZSgpOmUuY2FsbChyKTtjYXNlIDE6cmV0dXJuIG8/ZSh0WzBdKTplLmNhbGwocix0WzBdKTtjYXNlIDI6cmV0dXJuIG8/ZSh0WzBdLHRbMV0pOmUuY2FsbChyLHRbMF0sdFsxXSk7Y2FzZSAzOnJldHVybiBvP2UodFswXSx0WzFdLHRbMl0pOmUuY2FsbChyLHRbMF0sdFsxXSx0WzJdKTtjYXNlIDQ6cmV0dXJuIG8/ZSh0WzBdLHRbMV0sdFsyXSx0WzNdKTplLmNhbGwocix0WzBdLHRbMV0sdFsyXSx0WzNdKX1yZXR1cm4gZS5hcHBseShyLHQpfX0se31dLDUxOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2NvZlwiKTt0LmV4cG9ydHM9T2JqZWN0KFwielwiKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKT9PYmplY3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJTdHJpbmdcIj09byhlKT9lLnNwbGl0KFwiXCIpOk9iamVjdChlKX19LHtcIi4vX2NvZlwiOjM0fV0sNTI6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9faXRlcmF0b3JzXCIpLG49ZShcIi4vX3drc1wiKShcIml0ZXJhdG9yXCIpLGk9QXJyYXkucHJvdG90eXBlO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT09ZSYmKG8uQXJyYXk9PT1lfHxpW25dPT09ZSl9fSx7XCIuL19pdGVyYXRvcnNcIjo2MCxcIi4vX3drc1wiOjk1fV0sNTM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fY29mXCIpO3QuZXhwb3J0cz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbihlKXtyZXR1cm5cIkFycmF5XCI9PW8oZSl9fSx7XCIuL19jb2ZcIjozNH1dLDU0OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP251bGwhPT1lOlwiZnVuY3Rpb25cIj09dHlwZW9mIGV9fSx7fV0sNTU6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fYW4tb2JqZWN0XCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixuKXt0cnl7cmV0dXJuIG4/dChvKHIpWzBdLHJbMV0pOnQocil9Y2F0Y2goaSl7dmFyIHM9ZVtcInJldHVyblwiXTt0aHJvdyB2b2lkIDAhPT1zJiZvKHMuY2FsbChlKSksaX19fSx7XCIuL19hbi1vYmplY3RcIjozMX1dLDU2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcIi4vX29iamVjdC1jcmVhdGVcIiksbj1lKFwiLi9fcHJvcGVydHktZGVzY1wiKSxpPWUoXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiKSxzPXt9O2UoXCIuL19oaWRlXCIpKHMsZShcIi4vX3drc1wiKShcIml0ZXJhdG9yXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSx0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe2UucHJvdG90eXBlPW8ocyx7bmV4dDpuKDEscil9KSxpKGUsdCtcIiBJdGVyYXRvclwiKX19LHtcIi4vX2hpZGVcIjo0NyxcIi4vX29iamVjdC1jcmVhdGVcIjo2NSxcIi4vX3Byb3BlcnR5LWRlc2NcIjo3NyxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6ODIsXCIuL193a3NcIjo5NX1dLDU3OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcIi4vX2xpYnJhcnlcIiksbj1lKFwiLi9fZXhwb3J0XCIpLGk9ZShcIi4vX3JlZGVmaW5lXCIpLHM9ZShcIi4vX2hpZGVcIiksYz1lKFwiLi9faGFzXCIpLGE9ZShcIi4vX2l0ZXJhdG9yc1wiKSx1PWUoXCIuL19pdGVyLWNyZWF0ZVwiKSxsPWUoXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiKSxmPWUoXCIuL19vYmplY3QtZ3BvXCIpLF89ZShcIi4vX3drc1wiKShcIml0ZXJhdG9yXCIpLGQ9IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSxwPVwiQEBpdGVyYXRvclwiLGI9XCJrZXlzXCIsaD1cInZhbHVlc1wiLHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLHYsaixtLGcpe3Uocix0LHYpO3ZhciBPLGssdyx4PWZ1bmN0aW9uKGUpe2lmKCFkJiZlIGluIEMpcmV0dXJuIENbZV07c3dpdGNoKGUpe2Nhc2UgYjpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcyxlKX07Y2FzZSBoOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLGUpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcyxlKX19LFM9dCtcIiBJdGVyYXRvclwiLEU9aj09aCxUPSExLEM9ZS5wcm90b3R5cGUsUD1DW19dfHxDW3BdfHxqJiZDW2pdLFI9UHx8eChqKSxNPWo/RT94KFwiZW50cmllc1wiKTpSOnZvaWQgMCxEPVwiQXJyYXlcIj09dD9DLmVudHJpZXN8fFA6UDtpZihEJiYodz1mKEQuY2FsbChuZXcgZSkpLHchPT1PYmplY3QucHJvdG90eXBlJiYobCh3LFMsITApLG98fGModyxfKXx8cyh3LF8seSkpKSxFJiZQJiZQLm5hbWUhPT1oJiYoVD0hMCxSPWZ1bmN0aW9uKCl7cmV0dXJuIFAuY2FsbCh0aGlzKX0pLG8mJiFnfHwhZCYmIVQmJkNbX118fHMoQyxfLFIpLGFbdF09UixhW1NdPXksailpZihPPXt2YWx1ZXM6RT9SOngoaCksa2V5czptP1I6eChiKSxlbnRyaWVzOk19LGcpZm9yKGsgaW4gTylrIGluIEN8fGkoQyxrLE9ba10pO2Vsc2UgbihuLlArbi5GKihkfHxUKSx0LE8pO3JldHVybiBPfX0se1wiLi9fZXhwb3J0XCI6NDIsXCIuL19oYXNcIjo0NixcIi4vX2hpZGVcIjo0NyxcIi4vX2l0ZXItY3JlYXRlXCI6NTYsXCIuL19pdGVyYXRvcnNcIjo2MCxcIi4vX2xpYnJhcnlcIjo2MixcIi4vX29iamVjdC1ncG9cIjo3MixcIi4vX3JlZGVmaW5lXCI6NzksXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjgyLFwiLi9fd2tzXCI6OTV9XSw1ODpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL193a3NcIikoXCJpdGVyYXRvclwiKSxuPSExO3RyeXt2YXIgaT1bN11bb10oKTtpW1wicmV0dXJuXCJdPWZ1bmN0aW9uKCl7bj0hMH0sQXJyYXkuZnJvbShpLGZ1bmN0aW9uKCl7dGhyb3cgMn0pfWNhdGNoKHMpe310LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtpZighdCYmIW4pcmV0dXJuITE7dmFyIHI9ITE7dHJ5e3ZhciBpPVs3XSxzPWlbb10oKTtzLm5leHQ9ZnVuY3Rpb24oKXtyPSEwfSxpW29dPWZ1bmN0aW9uKCl7cmV0dXJuIHN9LGUoaSl9Y2F0Y2goYyl7fXJldHVybiByfX0se1wiLi9fd2tzXCI6OTV9XSw1OTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybnt2YWx1ZTp0LGRvbmU6ISFlfX19LHt9XSw2MDpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17fX0se31dLDYxOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX29iamVjdC1rZXlzXCIpLG49ZShcIi4vX3RvLWlvYmplY3RcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByLGk9bihlKSxzPW8oaSksYz1zLmxlbmd0aCxhPTA7Yz5hOylpZihpW3I9c1thKytdXT09PXQpcmV0dXJuIHJ9fSx7XCIuL19vYmplY3Qta2V5c1wiOjc0LFwiLi9fdG8taW9iamVjdFwiOjkwfV0sNjI6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ITB9LHt9XSw2MzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL191aWRcIikoXCJtZXRhXCIpLG49ZShcIi4vX2lzLW9iamVjdFwiKSxpPWUoXCIuL19oYXNcIikscz1lKFwiLi9fb2JqZWN0LWRwXCIpLmYsYz0wLGE9T2JqZWN0LmlzRXh0ZW5zaWJsZXx8ZnVuY3Rpb24oKXtyZXR1cm4hMH0sdT0hZShcIi4vX2ZhaWxzXCIpKGZ1bmN0aW9uKCl7cmV0dXJuIGEoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSl9KSxsPWZ1bmN0aW9uKGUpe3MoZSxvLHt2YWx1ZTp7aTpcIk9cIisgKytjLHc6e319fSl9LGY9ZnVuY3Rpb24oZSx0KXtpZighbihlKSlyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgZT9lOihcInN0cmluZ1wiPT10eXBlb2YgZT9cIlNcIjpcIlBcIikrZTtpZighaShlLG8pKXtpZighYShlKSlyZXR1cm5cIkZcIjtpZighdClyZXR1cm5cIkVcIjtsKGUpfXJldHVybiBlW29dLml9LF89ZnVuY3Rpb24oZSx0KXtpZighaShlLG8pKXtpZighYShlKSlyZXR1cm4hMDtpZighdClyZXR1cm4hMTtsKGUpfXJldHVybiBlW29dLnd9LGQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHUmJnAuTkVFRCYmYShlKSYmIWkoZSxvKSYmbChlKSxlfSxwPXQuZXhwb3J0cz17S0VZOm8sTkVFRDohMSxmYXN0S2V5OmYsZ2V0V2VhazpfLG9uRnJlZXplOmR9fSx7XCIuL19mYWlsc1wiOjQzLFwiLi9faGFzXCI6NDYsXCIuL19pcy1vYmplY3RcIjo1NCxcIi4vX29iamVjdC1kcFwiOjY2LFwiLi9fdWlkXCI6OTR9XSw2NDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvLG4saSxzPWUoXCIuL19nbG9iYWxcIiksYz1lKFwiLi9fdGFza1wiKS5zZXQsYT1zLk11dGF0aW9uT2JzZXJ2ZXJ8fHMuV2ViS2l0TXV0YXRpb25PYnNlcnZlcix1PXMucHJvY2VzcyxsPXMuUHJvbWlzZSxmPVwicHJvY2Vzc1wiPT1lKFwiLi9fY29mXCIpKHUpLF89ZnVuY3Rpb24oKXt2YXIgZSx0O2ZvcihmJiYoZT11LmRvbWFpbikmJmUuZXhpdCgpO287KXQ9by5mbix0KCksbz1vLm5leHQ7bj12b2lkIDAsZSYmZS5lbnRlcigpfTtpZihmKWk9ZnVuY3Rpb24oKXt1Lm5leHRUaWNrKF8pfTtlbHNlIGlmKGEpe3ZhciBkPSEwLHA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIik7bmV3IGEoXykub2JzZXJ2ZShwLHtjaGFyYWN0ZXJEYXRhOiEwfSksaT1mdW5jdGlvbigpe3AuZGF0YT1kPSFkfX1lbHNlIGk9bCYmbC5yZXNvbHZlP2Z1bmN0aW9uKCl7bC5yZXNvbHZlKCkudGhlbihfKX06ZnVuY3Rpb24oKXtjLmNhbGwocyxfKX07dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PXtmbjplLG5leHQ6dm9pZCAwfTtuJiYobi5uZXh0PXQpLG98fChvPXQsaSgpKSxuPXR9fSx7XCIuL19jb2ZcIjozNCxcIi4vX2dsb2JhbFwiOjQ1LFwiLi9fdGFza1wiOjg3fV0sNjU6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fYW4tb2JqZWN0XCIpLG49ZShcIi4vX29iamVjdC1kcHNcIiksaT1lKFwiLi9fZW51bS1idWcta2V5c1wiKSxzPWUoXCIuL19zaGFyZWQta2V5XCIpKFwiSUVfUFJPVE9cIiksYz1mdW5jdGlvbigpe30sYT1cInByb3RvdHlwZVwiLHU9ZnVuY3Rpb24oKXt2YXIgdCxyPWUoXCIuL19kb20tY3JlYXRlXCIpKFwiaWZyYW1lXCIpLG89aS5sZW5ndGgsbj1cIj5cIjtmb3Ioci5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGUoXCIuL19odG1sXCIpLmFwcGVuZENoaWxkKHIpLHIuc3JjPVwiamF2YXNjcmlwdDpcIix0PXIuY29udGVudFdpbmRvdy5kb2N1bWVudCx0Lm9wZW4oKSx0LndyaXRlKFwiPHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDwvc2NyaXB0XCIrbiksdC5jbG9zZSgpLHU9dC5GO28tLTspZGVsZXRlIHVbYV1baVtvXV07cmV0dXJuIHUoKX07dC5leHBvcnRzPU9iamVjdC5jcmVhdGV8fGZ1bmN0aW9uKGUsdCl7dmFyIHI7cmV0dXJuIG51bGwhPT1lPyhjW2FdPW8oZSkscj1uZXcgYyxjW2FdPW51bGwscltzXT1lKTpyPXUoKSx2b2lkIDA9PT10P3I6bihyLHQpfX0se1wiLi9fYW4tb2JqZWN0XCI6MzEsXCIuL19kb20tY3JlYXRlXCI6MzksXCIuL19lbnVtLWJ1Zy1rZXlzXCI6NDAsXCIuL19odG1sXCI6NDgsXCIuL19vYmplY3QtZHBzXCI6NjcsXCIuL19zaGFyZWQta2V5XCI6ODN9XSw2NjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19hbi1vYmplY3RcIiksbj1lKFwiLi9faWU4LWRvbS1kZWZpbmVcIiksaT1lKFwiLi9fdG8tcHJpbWl0aXZlXCIpLHM9T2JqZWN0LmRlZmluZVByb3BlcnR5O3IuZj1lKFwiLi9fZGVzY3JpcHRvcnNcIik/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGUsdCxyKXtpZihvKGUpLHQ9aSh0LCEwKSxvKHIpLG4pdHJ5e3JldHVybiBzKGUsdCxyKX1jYXRjaChjKXt9aWYoXCJnZXRcImluIHJ8fFwic2V0XCJpbiByKXRocm93IFR5cGVFcnJvcihcIkFjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIVwiKTtyZXR1cm5cInZhbHVlXCJpbiByJiYoZVt0XT1yLnZhbHVlKSxlfX0se1wiLi9fYW4tb2JqZWN0XCI6MzEsXCIuL19kZXNjcmlwdG9yc1wiOjM4LFwiLi9faWU4LWRvbS1kZWZpbmVcIjo0OSxcIi4vX3RvLXByaW1pdGl2ZVwiOjkzfV0sNjc6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fb2JqZWN0LWRwXCIpLG49ZShcIi4vX2FuLW9iamVjdFwiKSxpPWUoXCIuL19vYmplY3Qta2V5c1wiKTt0LmV4cG9ydHM9ZShcIi4vX2Rlc2NyaXB0b3JzXCIpP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzOmZ1bmN0aW9uKGUsdCl7bihlKTtmb3IodmFyIHIscz1pKHQpLGM9cy5sZW5ndGgsYT0wO2M+YTspby5mKGUscj1zW2ErK10sdFtyXSk7cmV0dXJuIGV9fSx7XCIuL19hbi1vYmplY3RcIjozMSxcIi4vX2Rlc2NyaXB0b3JzXCI6MzgsXCIuL19vYmplY3QtZHBcIjo2NixcIi4vX29iamVjdC1rZXlzXCI6NzR9XSw2ODpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19vYmplY3QtcGllXCIpLG49ZShcIi4vX3Byb3BlcnR5LWRlc2NcIiksaT1lKFwiLi9fdG8taW9iamVjdFwiKSxzPWUoXCIuL190by1wcmltaXRpdmVcIiksYz1lKFwiLi9faGFzXCIpLGE9ZShcIi4vX2llOC1kb20tZGVmaW5lXCIpLHU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtyLmY9ZShcIi4vX2Rlc2NyaXB0b3JzXCIpP3U6ZnVuY3Rpb24oZSx0KXtpZihlPWkoZSksdD1zKHQsITApLGEpdHJ5e3JldHVybiB1KGUsdCl9Y2F0Y2gocil7fXJldHVybiBjKGUsdCk/bighby5mLmNhbGwoZSx0KSxlW3RdKTp2b2lkIDB9fSx7XCIuL19kZXNjcmlwdG9yc1wiOjM4LFwiLi9faGFzXCI6NDYsXCIuL19pZTgtZG9tLWRlZmluZVwiOjQ5LFwiLi9fb2JqZWN0LXBpZVwiOjc1LFwiLi9fcHJvcGVydHktZGVzY1wiOjc3LFwiLi9fdG8taW9iamVjdFwiOjkwLFwiLi9fdG8tcHJpbWl0aXZlXCI6OTN9XSw2OTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL190by1pb2JqZWN0XCIpLG49ZShcIi4vX29iamVjdC1nb3BuXCIpLmYsaT17fS50b1N0cmluZyxzPVwib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdyYmT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM/T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KTpbXSxjPWZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4gbihlKX1jYXRjaCh0KXtyZXR1cm4gcy5zbGljZSgpfX07dC5leHBvcnRzLmY9ZnVuY3Rpb24oZSl7cmV0dXJuIHMmJlwiW29iamVjdCBXaW5kb3ddXCI9PWkuY2FsbChlKT9jKGUpOm4obyhlKSl9fSx7XCIuL19vYmplY3QtZ29wblwiOjcwLFwiLi9fdG8taW9iamVjdFwiOjkwfV0sNzA6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fb2JqZWN0LWtleXMtaW50ZXJuYWxcIiksbj1lKFwiLi9fZW51bS1idWcta2V5c1wiKS5jb25jYXQoXCJsZW5ndGhcIixcInByb3RvdHlwZVwiKTtyLmY9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXN8fGZ1bmN0aW9uKGUpe3JldHVybiBvKGUsbil9fSx7XCIuL19lbnVtLWJ1Zy1rZXlzXCI6NDAsXCIuL19vYmplY3Qta2V5cy1pbnRlcm5hbFwiOjczfV0sNzE6W2Z1bmN0aW9uKGUsdCxyKXtyLmY9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc30se31dLDcyOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2hhc1wiKSxuPWUoXCIuL190by1vYmplY3RcIiksaT1lKFwiLi9fc2hhcmVkLWtleVwiKShcIklFX1BST1RPXCIpLHM9T2JqZWN0LnByb3RvdHlwZTt0LmV4cG9ydHM9T2JqZWN0LmdldFByb3RvdHlwZU9mfHxmdW5jdGlvbihlKXtyZXR1cm4gZT1uKGUpLG8oZSxpKT9lW2ldOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUuY29uc3RydWN0b3ImJmUgaW5zdGFuY2VvZiBlLmNvbnN0cnVjdG9yP2UuY29uc3RydWN0b3IucHJvdG90eXBlOmUgaW5zdGFuY2VvZiBPYmplY3Q/czpudWxsfX0se1wiLi9faGFzXCI6NDYsXCIuL19zaGFyZWQta2V5XCI6ODMsXCIuL190by1vYmplY3RcIjo5Mn1dLDczOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2hhc1wiKSxuPWUoXCIuL190by1pb2JqZWN0XCIpLGk9ZShcIi4vX2FycmF5LWluY2x1ZGVzXCIpKCExKSxzPWUoXCIuL19zaGFyZWQta2V5XCIpKFwiSUVfUFJPVE9cIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIHIsYz1uKGUpLGE9MCx1PVtdO2ZvcihyIGluIGMpciE9cyYmbyhjLHIpJiZ1LnB1c2gocik7Zm9yKDt0Lmxlbmd0aD5hOylvKGMscj10W2ErK10pJiYofmkodSxyKXx8dS5wdXNoKHIpKTtyZXR1cm4gdX19LHtcIi4vX2FycmF5LWluY2x1ZGVzXCI6MzIsXCIuL19oYXNcIjo0NixcIi4vX3NoYXJlZC1rZXlcIjo4MyxcIi4vX3RvLWlvYmplY3RcIjo5MH1dLDc0OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCIpLG49ZShcIi4vX2VudW0tYnVnLWtleXNcIik7dC5leHBvcnRzPU9iamVjdC5rZXlzfHxmdW5jdGlvbihlKXtyZXR1cm4gbyhlLG4pfX0se1wiLi9fZW51bS1idWcta2V5c1wiOjQwLFwiLi9fb2JqZWN0LWtleXMtaW50ZXJuYWxcIjo3M31dLDc1OltmdW5jdGlvbihlLHQscil7ci5mPXt9LnByb3BlcnR5SXNFbnVtZXJhYmxlfSx7fV0sNzY6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fZXhwb3J0XCIpLG49ZShcIi4vX2NvcmVcIiksaT1lKFwiLi9fZmFpbHNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIHI9KG4uT2JqZWN0fHx7fSlbZV18fE9iamVjdFtlXSxzPXt9O3NbZV09dChyKSxvKG8uUytvLkYqaShmdW5jdGlvbigpe3IoMSl9KSxcIk9iamVjdFwiLHMpfX0se1wiLi9fY29yZVwiOjM1LFwiLi9fZXhwb3J0XCI6NDIsXCIuL19mYWlsc1wiOjQzfV0sNzc6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm57ZW51bWVyYWJsZTohKDEmZSksY29uZmlndXJhYmxlOiEoMiZlKSx3cml0YWJsZTohKDQmZSksdmFsdWU6dH19fSx7fV0sNzg6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9faGlkZVwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe2Zvcih2YXIgbiBpbiB0KXImJmVbbl0/ZVtuXT10W25dOm8oZSxuLHRbbl0pO3JldHVybiBlfX0se1wiLi9faGlkZVwiOjQ3fV0sNzk6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZShcIi4vX2hpZGVcIil9LHtcIi4vX2hpZGVcIjo0N31dLDgwOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2lzLW9iamVjdFwiKSxuPWUoXCIuL19hbi1vYmplY3RcIiksaT1mdW5jdGlvbihlLHQpe2lmKG4oZSksIW8odCkmJm51bGwhPT10KXRocm93IFR5cGVFcnJvcih0K1wiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKX07dC5leHBvcnRzPXtzZXQ6T2JqZWN0LnNldFByb3RvdHlwZU9mfHwoXCJfX3Byb3RvX19cImlue30/ZnVuY3Rpb24odCxyLG8pe3RyeXtvPWUoXCIuL19jdHhcIikoRnVuY3Rpb24uY2FsbCxlKFwiLi9fb2JqZWN0LWdvcGRcIikuZihPYmplY3QucHJvdG90eXBlLFwiX19wcm90b19fXCIpLnNldCwyKSxvKHQsW10pLHI9ISh0IGluc3RhbmNlb2YgQXJyYXkpfWNhdGNoKG4pe3I9ITB9cmV0dXJuIGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGkoZSx0KSxyP2UuX19wcm90b19fPXQ6byhlLHQpLGV9fSh7fSwhMSk6dm9pZCAwKSxjaGVjazppfX0se1wiLi9fYW4tb2JqZWN0XCI6MzEsXCIuL19jdHhcIjozNixcIi4vX2lzLW9iamVjdFwiOjU0LFwiLi9fb2JqZWN0LWdvcGRcIjo2OH1dLDgxOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcIi4vX2dsb2JhbFwiKSxuPWUoXCIuL19jb3JlXCIpLGk9ZShcIi4vX29iamVjdC1kcFwiKSxzPWUoXCIuL19kZXNjcmlwdG9yc1wiKSxjPWUoXCIuL193a3NcIikoXCJzcGVjaWVzXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuW2VdP25bZV06b1tlXTtzJiZ0JiYhdFtjXSYmaS5mKHQsYyx7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzfX0pfX0se1wiLi9fY29yZVwiOjM1LFwiLi9fZGVzY3JpcHRvcnNcIjozOCxcIi4vX2dsb2JhbFwiOjQ1LFwiLi9fb2JqZWN0LWRwXCI6NjYsXCIuL193a3NcIjo5NX1dLDgyOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX29iamVjdC1kcFwiKS5mLG49ZShcIi4vX2hhc1wiKSxpPWUoXCIuL193a3NcIikoXCJ0b1N0cmluZ1RhZ1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe2UmJiFuKGU9cj9lOmUucHJvdG90eXBlLGkpJiZvKGUsaSx7Y29uZmlndXJhYmxlOiEwLHZhbHVlOnR9KX19LHtcIi4vX2hhc1wiOjQ2LFwiLi9fb2JqZWN0LWRwXCI6NjYsXCIuL193a3NcIjo5NX1dLDgzOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX3NoYXJlZFwiKShcImtleXNcIiksbj1lKFwiLi9fdWlkXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gb1tlXXx8KG9bZV09bihlKSl9fSx7XCIuL19zaGFyZWRcIjo4NCxcIi4vX3VpZFwiOjk0fV0sODQ6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fZ2xvYmFsXCIpLG49XCJfX2NvcmUtanNfc2hhcmVkX19cIixpPW9bbl18fChvW25dPXt9KTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGlbZV18fChpW2VdPXt9KX19LHtcIi4vX2dsb2JhbFwiOjQ1fV0sODU6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fYW4tb2JqZWN0XCIpLG49ZShcIi4vX2EtZnVuY3Rpb25cIiksaT1lKFwiLi9fd2tzXCIpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgcixzPW8oZSkuY29uc3RydWN0b3I7cmV0dXJuIHZvaWQgMD09PXN8fHZvaWQgMD09KHI9byhzKVtpXSk/dDpuKHIpfX0se1wiLi9fYS1mdW5jdGlvblwiOjI4LFwiLi9fYW4tb2JqZWN0XCI6MzEsXCIuL193a3NcIjo5NX1dLDg2OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX3RvLWludGVnZXJcIiksbj1lKFwiLi9fZGVmaW5lZFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQscil7dmFyIGkscyxjPVN0cmluZyhuKHQpKSxhPW8ociksdT1jLmxlbmd0aDtyZXR1cm4gMD5hfHxhPj11P2U/XCJcIjp2b2lkIDA6KGk9Yy5jaGFyQ29kZUF0KGEpLDU1Mjk2Pml8fGk+NTYzMTl8fGErMT09PXV8fChzPWMuY2hhckNvZGVBdChhKzEpKTw1NjMyMHx8cz41NzM0Mz9lP2MuY2hhckF0KGEpOmk6ZT9jLnNsaWNlKGEsYSsyKTooaS01NTI5Njw8MTApKyhzLTU2MzIwKSs2NTUzNil9fX0se1wiLi9fZGVmaW5lZFwiOjM3LFwiLi9fdG8taW50ZWdlclwiOjg5fV0sODc6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbyxuLGkscz1lKFwiLi9fY3R4XCIpLGM9ZShcIi4vX2ludm9rZVwiKSxhPWUoXCIuL19odG1sXCIpLHU9ZShcIi4vX2RvbS1jcmVhdGVcIiksbD1lKFwiLi9fZ2xvYmFsXCIpLGY9bC5wcm9jZXNzLF89bC5zZXRJbW1lZGlhdGUsZD1sLmNsZWFySW1tZWRpYXRlLHA9bC5NZXNzYWdlQ2hhbm5lbCxiPTAsaD17fSx5PVwib25yZWFkeXN0YXRlY2hhbmdlXCIsdj1mdW5jdGlvbigpe3ZhciBlPSt0aGlzO2lmKGguaGFzT3duUHJvcGVydHkoZSkpe3ZhciB0PWhbZV07ZGVsZXRlIGhbZV0sdCgpfX0saj1mdW5jdGlvbihlKXt2LmNhbGwoZS5kYXRhKX07XyYmZHx8KF89ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PVtdLHI9MTthcmd1bWVudHMubGVuZ3RoPnI7KXQucHVzaChhcmd1bWVudHNbcisrXSk7cmV0dXJuIGhbKytiXT1mdW5jdGlvbigpe2MoXCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOkZ1bmN0aW9uKGUpLHQpfSxvKGIpLGJ9LGQ9ZnVuY3Rpb24oZSl7ZGVsZXRlIGhbZV19LFwicHJvY2Vzc1wiPT1lKFwiLi9fY29mXCIpKGYpP289ZnVuY3Rpb24oZSl7Zi5uZXh0VGljayhzKHYsZSwxKSl9OnA/KG49bmV3IHAsaT1uLnBvcnQyLG4ucG9ydDEub25tZXNzYWdlPWosbz1zKGkucG9zdE1lc3NhZ2UsaSwxKSk6bC5hZGRFdmVudExpc3RlbmVyJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBwb3N0TWVzc2FnZSYmIWwuaW1wb3J0U2NyaXB0cz8obz1mdW5jdGlvbihlKXtsLnBvc3RNZXNzYWdlKGUrXCJcIixcIipcIil9LGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixqLCExKSk6bz15IGluIHUoXCJzY3JpcHRcIik/ZnVuY3Rpb24oZSl7YS5hcHBlbmRDaGlsZCh1KFwic2NyaXB0XCIpKVt5XT1mdW5jdGlvbigpe2EucmVtb3ZlQ2hpbGQodGhpcyksdi5jYWxsKGUpfX06ZnVuY3Rpb24oZSl7c2V0VGltZW91dChzKHYsZSwxKSwwKX0pLHQuZXhwb3J0cz17c2V0Ol8sY2xlYXI6ZH19LHtcIi4vX2NvZlwiOjM0LFwiLi9fY3R4XCI6MzYsXCIuL19kb20tY3JlYXRlXCI6MzksXCIuL19nbG9iYWxcIjo0NSxcIi4vX2h0bWxcIjo0OCxcIi4vX2ludm9rZVwiOjUwfV0sODg6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fdG8taW50ZWdlclwiKSxuPU1hdGgubWF4LGk9TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9byhlKSwwPmU/bihlK3QsMCk6aShlLHQpfX0se1wiLi9fdG8taW50ZWdlclwiOjg5fV0sODk6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1NYXRoLmNlaWwsbj1NYXRoLmZsb29yO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gaXNOYU4oZT0rZSk/MDooZT4wP246bykoZSl9fSx7fV0sOTA6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9faW9iamVjdFwiKSxuPWUoXCIuL19kZWZpbmVkXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gbyhuKGUpKX19LHtcIi4vX2RlZmluZWRcIjozNyxcIi4vX2lvYmplY3RcIjo1MX1dLDkxOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX3RvLWludGVnZXJcIiksbj1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU+MD9uKG8oZSksOTAwNzE5OTI1NDc0MDk5MSk6MH19LHtcIi4vX3RvLWludGVnZXJcIjo4OX1dLDkyOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2RlZmluZWRcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QobyhlKSl9fSx7XCIuL19kZWZpbmVkXCI6Mzd9XSw5MzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19pcy1vYmplY3RcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7aWYoIW8oZSkpcmV0dXJuIGU7dmFyIHIsbjtpZih0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZihyPWUudG9TdHJpbmcpJiYhbyhuPXIuY2FsbChlKSkpcmV0dXJuIG47aWYoXCJmdW5jdGlvblwiPT10eXBlb2Yocj1lLnZhbHVlT2YpJiYhbyhuPXIuY2FsbChlKSkpcmV0dXJuIG47aWYoIXQmJlwiZnVuY3Rpb25cIj09dHlwZW9mKHI9ZS50b1N0cmluZykmJiFvKG49ci5jYWxsKGUpKSlyZXR1cm4gbjt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIil9fSx7XCIuL19pcy1vYmplY3RcIjo1NH1dLDk0OltmdW5jdGlvbihlLHQscil7dmFyIG89MCxuPU1hdGgucmFuZG9tKCk7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVyblwiU3ltYm9sKFwiLmNvbmNhdCh2b2lkIDA9PT1lP1wiXCI6ZSxcIilfXCIsKCsrbytuKS50b1N0cmluZygzNikpfX0se31dLDk1OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX3NoYXJlZFwiKShcIndrc1wiKSxuPWUoXCIuL191aWRcIiksaT1lKFwiLi9fZ2xvYmFsXCIpLlN5bWJvbCxzPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBvW2VdfHwob1tlXT1zJiZpW2VdfHwocz9pOm4pKFwiU3ltYm9sLlwiK2UpKX19LHtcIi4vX2dsb2JhbFwiOjQ1LFwiLi9fc2hhcmVkXCI6ODQsXCIuL191aWRcIjo5NH1dLDk2OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2NsYXNzb2ZcIiksbj1lKFwiLi9fd2tzXCIpKFwiaXRlcmF0b3JcIiksaT1lKFwiLi9faXRlcmF0b3JzXCIpO3QuZXhwb3J0cz1lKFwiLi9fY29yZVwiKS5nZXRJdGVyYXRvck1ldGhvZD1mdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwIT1lP2Vbbl18fGVbXCJAQGl0ZXJhdG9yXCJdfHxpW28oZSldOnZvaWQgMH19LHtcIi4vX2NsYXNzb2ZcIjozMyxcIi4vX2NvcmVcIjozNSxcIi4vX2l0ZXJhdG9yc1wiOjYwLFwiLi9fd2tzXCI6OTV9XSw5NzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL19hZGQtdG8tdW5zY29wYWJsZXNcIiksbj1lKFwiLi9faXRlci1zdGVwXCIpLGk9ZShcIi4vX2l0ZXJhdG9yc1wiKSxzPWUoXCIuL190by1pb2JqZWN0XCIpO3QuZXhwb3J0cz1lKFwiLi9faXRlci1kZWZpbmVcIikoQXJyYXksXCJBcnJheVwiLGZ1bmN0aW9uKGUsdCl7dGhpcy5fdD1zKGUpLHRoaXMuX2k9MCx0aGlzLl9rPXR9LGZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fdCx0PXRoaXMuX2sscj10aGlzLl9pKys7cmV0dXJuIWV8fHI+PWUubGVuZ3RoPyh0aGlzLl90PXZvaWQgMCxuKDEpKTpcImtleXNcIj09dD9uKDAscik6XCJ2YWx1ZXNcIj09dD9uKDAsZVtyXSk6bigwLFtyLGVbcl1dKX0sXCJ2YWx1ZXNcIiksaS5Bcmd1bWVudHM9aS5BcnJheSxvKFwia2V5c1wiKSxvKFwidmFsdWVzXCIpLG8oXCJlbnRyaWVzXCIpfSx7XCIuL19hZGQtdG8tdW5zY29wYWJsZXNcIjoyOSxcIi4vX2l0ZXItZGVmaW5lXCI6NTcsXCIuL19pdGVyLXN0ZXBcIjo1OSxcIi4vX2l0ZXJhdG9yc1wiOjYwLFwiLi9fdG8taW9iamVjdFwiOjkwfV0sOTg6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fZXhwb3J0XCIpO28oby5TLFwiT2JqZWN0XCIse2NyZWF0ZTplKFwiLi9fb2JqZWN0LWNyZWF0ZVwiKX0pfSx7XCIuL19leHBvcnRcIjo0MixcIi4vX29iamVjdC1jcmVhdGVcIjo2NX1dLDk5OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2V4cG9ydFwiKTtvKG8uUytvLkYqIWUoXCIuL19kZXNjcmlwdG9yc1wiKSxcIk9iamVjdFwiLHtkZWZpbmVQcm9wZXJ0eTplKFwiLi9fb2JqZWN0LWRwXCIpLmZ9KX0se1wiLi9fZGVzY3JpcHRvcnNcIjozOCxcIi4vX2V4cG9ydFwiOjQyLFwiLi9fb2JqZWN0LWRwXCI6NjZ9XSwxMDA6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fdG8taW9iamVjdFwiKSxuPWUoXCIuL19vYmplY3QtZ29wZFwiKS5mO2UoXCIuL19vYmplY3Qtc2FwXCIpKFwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yXCIsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXtyZXR1cm4gbihvKGUpLHQpfX0pfSx7XCIuL19vYmplY3QtZ29wZFwiOjY4LFwiLi9fb2JqZWN0LXNhcFwiOjc2LFwiLi9fdG8taW9iamVjdFwiOjkwfV0sMTAxOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX3RvLW9iamVjdFwiKSxuPWUoXCIuL19vYmplY3QtZ3BvXCIpO2UoXCIuL19vYmplY3Qtc2FwXCIpKFwiZ2V0UHJvdG90eXBlT2ZcIixmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbihvKGUpKX19KX0se1wiLi9fb2JqZWN0LWdwb1wiOjcyLFwiLi9fb2JqZWN0LXNhcFwiOjc2LFwiLi9fdG8tb2JqZWN0XCI6OTJ9XSwxMDI6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fdG8tb2JqZWN0XCIpLG49ZShcIi4vX29iamVjdC1rZXlzXCIpO2UoXCIuL19vYmplY3Qtc2FwXCIpKFwia2V5c1wiLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBuKG8oZSkpfX0pfSx7XCIuL19vYmplY3Qta2V5c1wiOjc0LFwiLi9fb2JqZWN0LXNhcFwiOjc2LFwiLi9fdG8tb2JqZWN0XCI6OTJ9XSwxMDM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fZXhwb3J0XCIpO28oby5TLFwiT2JqZWN0XCIse3NldFByb3RvdHlwZU9mOmUoXCIuL19zZXQtcHJvdG9cIikuc2V0fSl9LHtcIi4vX2V4cG9ydFwiOjQyLFwiLi9fc2V0LXByb3RvXCI6ODB9XSwxMDQ6W2Z1bmN0aW9uKGUsdCxyKXt9LHt9XSwxMDU6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbyxuLGkscz1lKFwiLi9fbGlicmFyeVwiKSxjPWUoXCIuL19nbG9iYWxcIiksYT1lKFwiLi9fY3R4XCIpLHU9ZShcIi4vX2NsYXNzb2ZcIiksbD1lKFwiLi9fZXhwb3J0XCIpLGY9ZShcIi4vX2lzLW9iamVjdFwiKSxfPShlKFwiLi9fYW4tb2JqZWN0XCIpLGUoXCIuL19hLWZ1bmN0aW9uXCIpKSxkPWUoXCIuL19hbi1pbnN0YW5jZVwiKSxwPWUoXCIuL19mb3Itb2ZcIiksYj0oZShcIi4vX3NldC1wcm90b1wiKS5zZXQsZShcIi4vX3NwZWNpZXMtY29uc3RydWN0b3JcIikpLGg9ZShcIi4vX3Rhc2tcIikuc2V0LHk9ZShcIi4vX21pY3JvdGFza1wiKSx2PVwiUHJvbWlzZVwiLGo9Yy5UeXBlRXJyb3IsbT1jLnByb2Nlc3MsZz1jW3ZdLG09Yy5wcm9jZXNzLE89XCJwcm9jZXNzXCI9PXUobSksaz1mdW5jdGlvbigpe30sdz0hIWZ1bmN0aW9uKCl7dHJ5e3ZhciB0PWcucmVzb2x2ZSgxKSxyPSh0LmNvbnN0cnVjdG9yPXt9KVtlKFwiLi9fd2tzXCIpKFwic3BlY2llc1wiKV09ZnVuY3Rpb24oZSl7ZShrLGspfTtyZXR1cm4oT3x8XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50KSYmdC50aGVuKGspaW5zdGFuY2VvZiByfWNhdGNoKG8pe319KCkseD1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dHx8ZT09PWcmJnQ9PT1pfSxTPWZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBmKGUpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZih0PWUudGhlbik/dDohMX0sRT1mdW5jdGlvbihlKXtyZXR1cm4geChnLGUpP25ldyBUKGUpOm5ldyBuKGUpfSxUPW49ZnVuY3Rpb24oZSl7dmFyIHQscjt0aGlzLnByb21pc2U9bmV3IGUoZnVuY3Rpb24oZSxvKXtpZih2b2lkIDAhPT10fHx2b2lkIDAhPT1yKXRocm93IGooXCJCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvclwiKTt0PWUscj1vfSksdGhpcy5yZXNvbHZlPV8odCksdGhpcy5yZWplY3Q9XyhyKX0sQz1mdW5jdGlvbihlKXt0cnl7ZSgpfWNhdGNoKHQpe3JldHVybntlcnJvcjp0fX19LFA9ZnVuY3Rpb24oZSx0KXtpZighZS5fbil7ZS5fbj0hMDt2YXIgcj1lLl9jO3koZnVuY3Rpb24oKXtmb3IodmFyIG89ZS5fdixuPTE9PWUuX3MsaT0wLHM9ZnVuY3Rpb24odCl7dmFyIHIsaSxzPW4/dC5vazp0LmZhaWwsYz10LnJlc29sdmUsYT10LnJlamVjdCx1PXQuZG9tYWluO3RyeXtzPyhufHwoMj09ZS5faCYmRChlKSxlLl9oPTEpLHM9PT0hMD9yPW86KHUmJnUuZW50ZXIoKSxyPXMobyksdSYmdS5leGl0KCkpLHI9PT10LnByb21pc2U/YShqKFwiUHJvbWlzZS1jaGFpbiBjeWNsZVwiKSk6KGk9UyhyKSk/aS5jYWxsKHIsYyxhKTpjKHIpKTphKG8pfWNhdGNoKGwpe2EobCl9fTtyLmxlbmd0aD5pOylzKHJbaSsrXSk7ZS5fYz1bXSxlLl9uPSExLHQmJiFlLl9oJiZSKGUpfSl9fSxSPWZ1bmN0aW9uKGUpe2guY2FsbChjLGZ1bmN0aW9uKCl7dmFyIHQscixvLG49ZS5fdjtpZihNKGUpJiYodD1DKGZ1bmN0aW9uKCl7Tz9tLmVtaXQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIixuLGUpOihyPWMub251bmhhbmRsZWRyZWplY3Rpb24pP3Ioe3Byb21pc2U6ZSxyZWFzb246bn0pOihvPWMuY29uc29sZSkmJm8uZXJyb3ImJm8uZXJyb3IoXCJVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cIixuKX0pLGUuX2g9T3x8TShlKT8yOjEpLGUuX2E9dm9pZCAwLHQpdGhyb3cgdC5lcnJvcn0pfSxNPWZ1bmN0aW9uKGUpe2lmKDE9PWUuX2gpcmV0dXJuITE7Zm9yKHZhciB0LHI9ZS5fYXx8ZS5fYyxvPTA7ci5sZW5ndGg+bzspaWYodD1yW28rK10sdC5mYWlsfHwhTSh0LnByb21pc2UpKXJldHVybiExO3JldHVybiEwfSxEPWZ1bmN0aW9uKGUpe2guY2FsbChjLGZ1bmN0aW9uKCl7dmFyIHQ7Tz9tLmVtaXQoXCJyZWplY3Rpb25IYW5kbGVkXCIsZSk6KHQ9Yy5vbnJlamVjdGlvbmhhbmRsZWQpJiZ0KHtwcm9taXNlOmUscmVhc29uOmUuX3Z9KX0pfSxBPWZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7dC5fZHx8KHQuX2Q9ITAsdD10Ll93fHx0LHQuX3Y9ZSx0Ll9zPTIsdC5fYXx8KHQuX2E9dC5fYy5zbGljZSgpKSxQKHQsITApKX0sTD1mdW5jdGlvbihlKXt2YXIgdCxyPXRoaXM7aWYoIXIuX2Qpe3IuX2Q9ITAscj1yLl93fHxyO3RyeXtpZihyPT09ZSl0aHJvdyBqKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7KHQ9UyhlKSk/eShmdW5jdGlvbigpe3ZhciBvPXtfdzpyLF9kOiExfTt0cnl7dC5jYWxsKGUsYShMLG8sMSksYShBLG8sMSkpfWNhdGNoKG4pe0EuY2FsbChvLG4pfX0pOihyLl92PWUsci5fcz0xLFAociwhMSkpfWNhdGNoKG8pe0EuY2FsbCh7X3c6cixfZDohMX0sbyl9fX07d3x8KGc9ZnVuY3Rpb24oZSl7ZCh0aGlzLGcsdixcIl9oXCIpLF8oZSksby5jYWxsKHRoaXMpO3RyeXtlKGEoTCx0aGlzLDEpLGEoQSx0aGlzLDEpKX1jYXRjaCh0KXtBLmNhbGwodGhpcyx0KX19LG89ZnVuY3Rpb24oZSl7dGhpcy5fYz1bXSx0aGlzLl9hPXZvaWQgMCx0aGlzLl9zPTAsdGhpcy5fZD0hMSx0aGlzLl92PXZvaWQgMCx0aGlzLl9oPTAsdGhpcy5fbj0hMX0sby5wcm90b3R5cGU9ZShcIi4vX3JlZGVmaW5lLWFsbFwiKShnLnByb3RvdHlwZSx7dGhlbjpmdW5jdGlvbihlLHQpe3ZhciByPUUoYih0aGlzLGcpKTtyZXR1cm4gci5vaz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6ITAsci5mYWlsPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQmJnQsci5kb21haW49Tz9tLmRvbWFpbjp2b2lkIDAsdGhpcy5fYy5wdXNoKHIpLHRoaXMuX2EmJnRoaXMuX2EucHVzaChyKSx0aGlzLl9zJiZQKHRoaXMsITEpLHIucHJvbWlzZX0sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnRoZW4odm9pZCAwLGUpfX0pLFQ9ZnVuY3Rpb24oKXt2YXIgZT1uZXcgbzt0aGlzLnByb21pc2U9ZSx0aGlzLnJlc29sdmU9YShMLGUsMSksdGhpcy5yZWplY3Q9YShBLGUsMSl9KSxsKGwuRytsLlcrbC5GKiF3LHtQcm9taXNlOmd9KSxlKFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIikoZyx2KSxlKFwiLi9fc2V0LXNwZWNpZXNcIikodiksaT1lKFwiLi9fY29yZVwiKVt2XSxsKGwuUytsLkYqIXcsdix7cmVqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0PUUodGhpcykscj10LnJlamVjdDtyZXR1cm4gcihlKSx0LnByb21pc2V9fSksbChsLlMrbC5GKihzfHwhdyksdix7cmVzb2x2ZTpmdW5jdGlvbihlKXtpZihlIGluc3RhbmNlb2YgZyYmeChlLmNvbnN0cnVjdG9yLHRoaXMpKXJldHVybiBlO3ZhciB0PUUodGhpcykscj10LnJlc29sdmU7cmV0dXJuIHIoZSksdC5wcm9taXNlfX0pLGwobC5TK2wuRiohKHcmJmUoXCIuL19pdGVyLWRldGVjdFwiKShmdW5jdGlvbihlKXtnLmFsbChlKVtcImNhdGNoXCJdKGspfSkpLHYse2FsbDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9RSh0KSxvPXIucmVzb2x2ZSxuPXIucmVqZWN0LGk9QyhmdW5jdGlvbigpe3ZhciByPVtdLGk9MCxzPTE7cChlLCExLGZ1bmN0aW9uKGUpe3ZhciBjPWkrKyxhPSExO3IucHVzaCh2b2lkIDApLHMrKyx0LnJlc29sdmUoZSkudGhlbihmdW5jdGlvbihlKXthfHwoYT0hMCxyW2NdPWUsLS1zfHxvKHIpKX0sbil9KSwtLXN8fG8ocil9KTtyZXR1cm4gaSYmbihpLmVycm9yKSxyLnByb21pc2V9LHJhY2U6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPUUodCksbz1yLnJlamVjdCxuPUMoZnVuY3Rpb24oKXtwKGUsITEsZnVuY3Rpb24oZSl7dC5yZXNvbHZlKGUpLnRoZW4oci5yZXNvbHZlLG8pfSl9KTtyZXR1cm4gbiYmbyhuLmVycm9yKSxyLnByb21pc2V9fSl9LHtcIi4vX2EtZnVuY3Rpb25cIjoyOCxcIi4vX2FuLWluc3RhbmNlXCI6MzAsXCIuL19hbi1vYmplY3RcIjozMSxcIi4vX2NsYXNzb2ZcIjozMyxcIi4vX2NvcmVcIjozNSxcIi4vX2N0eFwiOjM2LFwiLi9fZXhwb3J0XCI6NDIsXCIuL19mb3Itb2ZcIjo0NCxcIi4vX2dsb2JhbFwiOjQ1LFwiLi9faXMtb2JqZWN0XCI6NTQsXCIuL19pdGVyLWRldGVjdFwiOjU4LFwiLi9fbGlicmFyeVwiOjYyLFwiLi9fbWljcm90YXNrXCI6NjQsXCIuL19yZWRlZmluZS1hbGxcIjo3OCxcIi4vX3NldC1wcm90b1wiOjgwLFwiLi9fc2V0LXNwZWNpZXNcIjo4MSxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6ODIsXCIuL19zcGVjaWVzLWNvbnN0cnVjdG9yXCI6ODUsXCIuL190YXNrXCI6ODcsXCIuL193a3NcIjo5NX1dLDEwNjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL19zdHJpbmctYXRcIikoITApO2UoXCIuL19pdGVyLWRlZmluZVwiKShTdHJpbmcsXCJTdHJpbmdcIixmdW5jdGlvbihlKXt0aGlzLl90PVN0cmluZyhlKSx0aGlzLl9pPTB9LGZ1bmN0aW9uKCl7dmFyIGUsdD10aGlzLl90LHI9dGhpcy5faTtyZXR1cm4gcj49dC5sZW5ndGg/e3ZhbHVlOnZvaWQgMCxkb25lOiEwfTooZT1vKHQsciksdGhpcy5faSs9ZS5sZW5ndGgse3ZhbHVlOmUsZG9uZTohMX0pfSl9LHtcIi4vX2l0ZXItZGVmaW5lXCI6NTcsXCIuL19zdHJpbmctYXRcIjo4Nn1dLDEwNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL19nbG9iYWxcIiksbj1lKFwiLi9fY29yZVwiKSxpPWUoXCIuL19oYXNcIikscz1lKFwiLi9fZGVzY3JpcHRvcnNcIiksYz1lKFwiLi9fZXhwb3J0XCIpLGE9ZShcIi4vX3JlZGVmaW5lXCIpLHU9ZShcIi4vX21ldGFcIikuS0VZLGw9ZShcIi4vX2ZhaWxzXCIpLGY9ZShcIi4vX3NoYXJlZFwiKSxfPWUoXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiKSxkPWUoXCIuL191aWRcIikscD1lKFwiLi9fd2tzXCIpLGI9ZShcIi4vX2tleW9mXCIpLGg9ZShcIi4vX2VudW0ta2V5c1wiKSx5PWUoXCIuL19pcy1hcnJheVwiKSx2PWUoXCIuL19hbi1vYmplY3RcIiksaj1lKFwiLi9fdG8taW9iamVjdFwiKSxtPWUoXCIuL190by1wcmltaXRpdmVcIiksZz1lKFwiLi9fcHJvcGVydHktZGVzY1wiKSxPPWUoXCIuL19vYmplY3QtY3JlYXRlXCIpLGs9ZShcIi4vX29iamVjdC1nb3BuLWV4dFwiKSx3PWUoXCIuL19vYmplY3QtZ29wZFwiKSx4PWUoXCIuL19vYmplY3QtZHBcIiksUz13LmYsRT14LmYsVD1rLmYsQz1vLlN5bWJvbCxQPW8uSlNPTixSPVAmJlAuc3RyaW5naWZ5LE09ITEsRD1cInByb3RvdHlwZVwiLEE9cChcIl9oaWRkZW5cIiksTD1wKFwidG9QcmltaXRpdmVcIiksTj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxJPWYoXCJzeW1ib2wtcmVnaXN0cnlcIiksRj1mKFwic3ltYm9sc1wiKSxVPU9iamVjdFtEXSxIPVwiZnVuY3Rpb25cIj09dHlwZW9mIEMscT1vLlFPYmplY3QsVj1zJiZsKGZ1bmN0aW9uKCl7XHJcbnJldHVybiA3IT1PKEUoe30sXCJhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBFKHRoaXMsXCJhXCIse3ZhbHVlOjd9KS5hfX0pKS5hfSk/ZnVuY3Rpb24oZSx0LHIpe3ZhciBvPVMoVSx0KTtvJiZkZWxldGUgVVt0XSxFKGUsdCxyKSxvJiZlIT09VSYmRShVLHQsbyl9OkUsQj1mdW5jdGlvbihlKXt2YXIgdD1GW2VdPU8oQ1tEXSk7cmV0dXJuIHQuX2s9ZSxzJiZNJiZWKFUsZSx7Y29uZmlndXJhYmxlOiEwLHNldDpmdW5jdGlvbih0KXtpKHRoaXMsQSkmJmkodGhpc1tBXSxlKSYmKHRoaXNbQV1bZV09ITEpLFYodGhpcyxlLGcoMSx0KSl9fSksdH0sVz1IJiZcInN5bWJvbFwiPT10eXBlb2YgQy5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBDfSxKPWZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gdihlKSx0PW0odCwhMCksdihyKSxpKEYsdCk/KHIuZW51bWVyYWJsZT8oaShlLEEpJiZlW0FdW3RdJiYoZVtBXVt0XT0hMSkscj1PKHIse2VudW1lcmFibGU6ZygwLCExKX0pKTooaShlLEEpfHxFKGUsQSxnKDEse30pKSxlW0FdW3RdPSEwKSxWKGUsdCxyKSk6RShlLHQscil9LFk9ZnVuY3Rpb24oZSx0KXt2KGUpO2Zvcih2YXIgcixvPWgodD1qKHQpKSxuPTAsaT1vLmxlbmd0aDtpPm47KUooZSxyPW9bbisrXSx0W3JdKTtyZXR1cm4gZX0sej1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P08oZSk6WShPKGUpLHQpfSxHPWZ1bmN0aW9uKGUpe3ZhciB0PU4uY2FsbCh0aGlzLGU9bShlLCEwKSk7cmV0dXJuIHR8fCFpKHRoaXMsZSl8fCFpKEYsZSl8fGkodGhpcyxBKSYmdGhpc1tBXVtlXT90OiEwfSxLPWZ1bmN0aW9uKGUsdCl7dmFyIHI9UyhlPWooZSksdD1tKHQsITApKTtyZXR1cm4hcnx8IWkoRix0KXx8aShlLEEpJiZlW0FdW3RdfHwoci5lbnVtZXJhYmxlPSEwKSxyfSxaPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxyPVQoaihlKSksbz1bXSxuPTA7ci5sZW5ndGg+bjspaShGLHQ9cltuKytdKXx8dD09QXx8dD09dXx8by5wdXNoKHQpO3JldHVybiBvfSxYPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxyPVQoaihlKSksbz1bXSxuPTA7ci5sZW5ndGg+bjspaShGLHQ9cltuKytdKSYmby5wdXNoKEZbdF0pO3JldHVybiBvfSwkPWZ1bmN0aW9uKGUpe2lmKHZvaWQgMCE9PWUmJiFXKGUpKXtmb3IodmFyIHQscixvPVtlXSxuPTE7YXJndW1lbnRzLmxlbmd0aD5uOylvLnB1c2goYXJndW1lbnRzW24rK10pO3JldHVybiB0PW9bMV0sXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmKHI9dCksIXImJnkodCl8fCh0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHImJih0PXIuY2FsbCh0aGlzLGUsdCkpLFcodCk/dm9pZCAwOnR9KSxvWzFdPXQsUi5hcHBseShQLG8pfX0sUT1sKGZ1bmN0aW9uKCl7dmFyIGU9QygpO3JldHVyblwiW251bGxdXCIhPVIoW2VdKXx8XCJ7fVwiIT1SKHthOmV9KXx8XCJ7fVwiIT1SKE9iamVjdChlKSl9KTtIfHwoQz1mdW5jdGlvbigpe2lmKHRoaXMgaW5zdGFuY2VvZiBDKXRocm93IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciFcIik7cmV0dXJuIEIoZChhcmd1bWVudHMubGVuZ3RoPjA/YXJndW1lbnRzWzBdOnZvaWQgMCkpfSxhKENbRF0sXCJ0b1N0cmluZ1wiLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2t9KSx3LmY9Syx4LmY9SixlKFwiLi9fb2JqZWN0LWdvcG5cIikuZj1rLmY9WixlKFwiLi9fb2JqZWN0LXBpZVwiKS5mPUcsZShcIi4vX29iamVjdC1nb3BzXCIpLmY9WCxzJiYhZShcIi4vX2xpYnJhcnlcIikmJmEoVSxcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsRywhMCkpLGMoYy5HK2MuVytjLkYqIUgse1N5bWJvbDpDfSk7Zm9yKHZhciBlZT1cImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzXCIuc3BsaXQoXCIsXCIpLHRlPTA7ZWUubGVuZ3RoPnRlOyl7dmFyIHJlPWVlW3RlKytdLG9lPW4uU3ltYm9sLG5lPXAocmUpO3JlIGluIG9lfHxFKG9lLHJlLHt2YWx1ZTpIP25lOkIobmUpfSl9cSYmcVtEXSYmcVtEXS5maW5kQ2hpbGR8fChNPSEwKSxjKGMuUytjLkYqIUgsXCJTeW1ib2xcIix7XCJmb3JcIjpmdW5jdGlvbihlKXtyZXR1cm4gaShJLGUrPVwiXCIpP0lbZV06SVtlXT1DKGUpfSxrZXlGb3I6ZnVuY3Rpb24oZSl7aWYoVyhlKSlyZXR1cm4gYihJLGUpO3Rocm93IFR5cGVFcnJvcihlK1wiIGlzIG5vdCBhIHN5bWJvbCFcIil9LHVzZVNldHRlcjpmdW5jdGlvbigpe009ITB9LHVzZVNpbXBsZTpmdW5jdGlvbigpe009ITF9fSksYyhjLlMrYy5GKiFILFwiT2JqZWN0XCIse2NyZWF0ZTp6LGRlZmluZVByb3BlcnR5OkosZGVmaW5lUHJvcGVydGllczpZLGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpLLGdldE93blByb3BlcnR5TmFtZXM6WixnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6WH0pLFAmJmMoYy5TK2MuRiooIUh8fFEpLFwiSlNPTlwiLHtzdHJpbmdpZnk6JH0pLENbRF1bTF18fGUoXCIuL19oaWRlXCIpKENbRF0sTCxDW0RdLnZhbHVlT2YpLF8oQyxcIlN5bWJvbFwiKSxfKE1hdGgsXCJNYXRoXCIsITApLF8oby5KU09OLFwiSlNPTlwiLCEwKX0se1wiLi9fYW4tb2JqZWN0XCI6MzEsXCIuL19jb3JlXCI6MzUsXCIuL19kZXNjcmlwdG9yc1wiOjM4LFwiLi9fZW51bS1rZXlzXCI6NDEsXCIuL19leHBvcnRcIjo0MixcIi4vX2ZhaWxzXCI6NDMsXCIuL19nbG9iYWxcIjo0NSxcIi4vX2hhc1wiOjQ2LFwiLi9faGlkZVwiOjQ3LFwiLi9faXMtYXJyYXlcIjo1MyxcIi4vX2tleW9mXCI6NjEsXCIuL19saWJyYXJ5XCI6NjIsXCIuL19tZXRhXCI6NjMsXCIuL19vYmplY3QtY3JlYXRlXCI6NjUsXCIuL19vYmplY3QtZHBcIjo2NixcIi4vX29iamVjdC1nb3BkXCI6NjgsXCIuL19vYmplY3QtZ29wblwiOjcwLFwiLi9fb2JqZWN0LWdvcG4tZXh0XCI6NjksXCIuL19vYmplY3QtZ29wc1wiOjcxLFwiLi9fb2JqZWN0LXBpZVwiOjc1LFwiLi9fcHJvcGVydHktZGVzY1wiOjc3LFwiLi9fcmVkZWZpbmVcIjo3OSxcIi4vX3NldC10by1zdHJpbmctdGFnXCI6ODIsXCIuL19zaGFyZWRcIjo4NCxcIi4vX3RvLWlvYmplY3RcIjo5MCxcIi4vX3RvLXByaW1pdGl2ZVwiOjkzLFwiLi9fdWlkXCI6OTQsXCIuL193a3NcIjo5NX1dLDEwODpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuL2VzNi5hcnJheS5pdGVyYXRvclwiKTtmb3IodmFyIG89ZShcIi4vX2dsb2JhbFwiKSxuPWUoXCIuL19oaWRlXCIpLGk9ZShcIi4vX2l0ZXJhdG9yc1wiKSxzPWUoXCIuL193a3NcIikoXCJ0b1N0cmluZ1RhZ1wiKSxjPVtcIk5vZGVMaXN0XCIsXCJET01Ub2tlbkxpc3RcIixcIk1lZGlhTGlzdFwiLFwiU3R5bGVTaGVldExpc3RcIixcIkNTU1J1bGVMaXN0XCJdLGE9MDs1PmE7YSsrKXt2YXIgdT1jW2FdLGw9b1t1XSxmPWwmJmwucHJvdG90eXBlO2YmJiFmW3NdJiZuKGYscyx1KSxpW3VdPWkuQXJyYXl9fSx7XCIuL19nbG9iYWxcIjo0NSxcIi4vX2hpZGVcIjo0NyxcIi4vX2l0ZXJhdG9yc1wiOjYwLFwiLi9fd2tzXCI6OTUsXCIuL2VzNi5hcnJheS5pdGVyYXRvclwiOjk3fV0sMTA5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZShcIi4vc3luY2hlci9TeW5jaGVyXCIpLGk9byhuKSxzPWUoXCIuL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyXCIpLGM9byhzKSxhPWUoXCIuL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyXCIpLHU9byhhKTtyLlN5bmNoZXI9aVtcImRlZmF1bHRcIl0sci5EYXRhT2JqZWN0UmVwb3J0ZXI9Y1tcImRlZmF1bHRcIl0sci5EYXRhT2JqZWN0T2JzZXJ2ZXI9dVtcImRlZmF1bHRcIl19LHtcIi4vc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXJcIjoxMTIsXCIuL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyXCI6MTEzLFwiLi9zeW5jaGVyL1N5bmNoZXJcIjoxMTYsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNn1dLDExMDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCIpW1wiZGVmYXVsdFwiXSxuPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiKVtcImRlZmF1bHRcIl0saT1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCIpW1wiZGVmYXVsdFwiXSxzPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiKVtcImRlZmF1bHRcIl0sYz1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYT1lKFwiLi9TeW5jT2JqZWN0XCIpLHU9YyhhKSxsPWUoXCIuL0RhdGFPYmplY3RDaGlsZFwiKSxmPWMobCksXz1lKFwiLi4vdXRpbHMvdXRpbHMuanNcIiksZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyLG8saSxzLGMpe24odGhpcyxlKTt2YXIgYT10aGlzO2EuX3N5bmNoZXI9dCxhLl91cmw9cixhLl9zY2hlbWE9byxhLl9zdGF0dXM9aSxhLl9zeW5jT2JqPW5ldyB1W1wiZGVmYXVsdFwiXShzKSxhLl9jaGlsZHJlbnM9YyxhLl92ZXJzaW9uPTAsYS5fY2hpbGRJZD0wLGEuX2NoaWxkcmVuT2JqZWN0cz17fSxhLl9jaGlsZHJlbkxpc3RlbmVycz1bXSxhLl9vd25lcj10Ll9vd25lcixhLl9idXM9dC5fYnVzfXJldHVybiBvKGUsW3trZXk6XCJfYWxsb2NhdGVMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLHI9dC5fdXJsK1wiL2NoaWxkcmVuL1wiO3QuX2NoaWxkcmVucyYmdC5fY2hpbGRyZW5zLmZvckVhY2goZnVuY3Rpb24obyl7dmFyIG49citvLGk9dC5fYnVzLmFkZExpc3RlbmVyKG4sZnVuY3Rpb24ocil7aWYoci5mcm9tIT09ZS5fb3duZXIpc3dpdGNoKGNvbnNvbGUubG9nKFwiRGF0YU9iamVjdC1DaGlsZHJlbi1SQ1Y6IFwiLHIpLHIudHlwZSl7Y2FzZVwiY3JlYXRlXCI6dC5fb25DaGlsZHJlbkNyZWF0ZShyKTticmVhaztjYXNlXCJkZWxldGVcIjpjb25zb2xlLmxvZyhyKTticmVhaztkZWZhdWx0OnQuX2NoYW5nZUNoaWxkcmVuKHIpfX0pO3QuX2NoaWxkcmVuTGlzdGVuZXJzLnB1c2goaSl9KX19LHtrZXk6XCJfcmVsZWFzZUxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9jaGlsZHJlbkxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UucmVtb3ZlKCl9KSxpKGUuX2NoaWxkcmVuT2JqZWN0cykuZm9yRWFjaChmdW5jdGlvbih0KXtlLl9jaGlsZHJlbk9iamVjdHNbdF0uX3JlbGVhc2VMaXN0ZW5lcnMoKX0pfX0se2tleTpcInBhdXNlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aHJvd1wiTm90IGltcGxlbWVudGVkXCJ9fSx7a2V5OlwicmVzdW1lXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aHJvd1wiTm90IGltcGxlbWVudGVkXCJ9fSx7a2V5Olwic3RvcFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhyb3dcIk5vdCBpbXBsZW1lbnRlZFwifX0se2tleTpcImFkZENoaWxkcmVuXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzO3IuX2NoaWxkSWQrKzt2YXIgbz1yLl9vd25lcitcIiNcIityLl9jaGlsZElkLG49ci5fdXJsK1wiL2NoaWxkcmVuL1wiK2UsaT17dHlwZTpcImNyZWF0ZVwiLGZyb206ci5fb3duZXIsdG86bixib2R5OntyZXNvdXJjZTpvLHZhbHVlOnR9fTtyZXR1cm4gbmV3IHMoZnVuY3Rpb24oZSl7dmFyIHM9ci5fYnVzLnBvc3RNZXNzYWdlKGkpO2NvbnNvbGUubG9nKFwiY3JlYXRlLXJlcG9ydGVyLWNoaWxkKCBcIityLl9vd25lcitcIiApOiBcIixpKTt2YXIgYz1uZXcgZltcImRlZmF1bHRcIl0ocixvLHQsci5fb3duZXIscyk7Yy5vbkNoYW5nZShmdW5jdGlvbihlKXtyLl9vbkNoYW5nZShlLHtwYXRoOm4sY2hpbGRJZDpvfSl9KSxyLl9jaGlsZHJlbk9iamVjdHNbb109YyxlKGMpfSl9fSx7a2V5Olwib25BZGRDaGlsZHJlblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX29uQWRkQ2hpbGRyZW5IYW5kbGVyPWV9fSx7a2V5OlwiX29uQ2hpbGRyZW5DcmVhdGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9ZS5ib2R5LnJlc291cmNlO2NvbnNvbGUubG9nKFwiY3JlYXRlLW9ic2VydmVyLWNoaWxkKCBcIit0Ll9vd25lcitcIiApOiBcIixlKTt2YXIgbz1uZXcgZltcImRlZmF1bHRcIl0odCxyLGUuYm9keS52YWx1ZSk7dC5fY2hpbGRyZW5PYmplY3RzW3JdPW8sc2V0VGltZW91dChmdW5jdGlvbigpe3QuX2J1cy5wb3N0TWVzc2FnZSh7aWQ6ZS5pZCx0eXBlOlwicmVzcG9uc2VcIixmcm9tOmUudG8sdG86ZS5mcm9tLGJvZHk6e2NvZGU6MjAwLHNvdXJjZTp0Ll9vd25lcn19KX0pO3ZhciBuPXt0eXBlOmUudHlwZSxmcm9tOmUuZnJvbSx1cmw6ZS50byx2YWx1ZTplLmJvZHkudmFsdWUsY2hpbGRJZDpyfTt0Ll9vbkFkZENoaWxkcmVuSGFuZGxlciYmKGNvbnNvbGUubG9nKFwiQURELUNISUxEUkVOLUVWRU5UOiBcIixuKSx0Ll9vbkFkZENoaWxkcmVuSGFuZGxlcihuKSl9fSx7a2V5OlwiX29uQ2hhbmdlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzO2lmKHIuX3ZlcnNpb24rKyxcIm9uXCI9PT1yLl9zdGF0dXMpe3ZhciBvPXt0eXBlOlwidXBkYXRlXCIsZnJvbTpyLl91cmwsdG86ci5fdXJsK1wiL2NoYW5nZXNcIixib2R5Ont2ZXJzaW9uOnIuX3ZlcnNpb24sc291cmNlOnIuX293bmVyLGF0dHJpYnV0ZTplLmZpZWxkfX07ZS5vVHlwZT09PWEuT2JqZWN0VHlwZS5PQkpFQ1Q/ZS5jVHlwZSE9PWEuQ2hhbmdlVHlwZS5SRU1PVkUmJihvLmJvZHkudmFsdWU9ZS5kYXRhKTooby5ib2R5LmF0dHJpYnV0ZVR5cGU9ZS5vVHlwZSxvLmJvZHkudmFsdWU9ZS5kYXRhLGUuY1R5cGUhPT1hLkNoYW5nZVR5cGUuVVBEQVRFJiYoby5ib2R5Lm9wZXJhdGlvbj1lLmNUeXBlKSksdCYmKG8udG89dC5wYXRoLG8uYm9keS5yZXNvdXJjZT10LmNoaWxkSWQpLHIuX2J1cy5wb3N0TWVzc2FnZShvKX19fSx7a2V5OlwiX2NoYW5nZU9iamVjdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcztpZihyLl92ZXJzaW9uKzE9PT10LmJvZHkudmVyc2lvbil7ci5fdmVyc2lvbisrO3ZhciBvPXQuYm9keS5hdHRyaWJ1dGUsbj0oMCxfLmRlZXBDbG9uZSkodC5ib2R5LnZhbHVlKSxpPWUuZmluZEJlZm9yZShvKTtpZih0LmJvZHkuYXR0cmlidXRlVHlwZT09PWEuT2JqZWN0VHlwZS5BUlJBWSlpZih0LmJvZHkub3BlcmF0aW9uPT09YS5DaGFuZ2VUeXBlLkFERCl7dmFyIHM9aS5vYmosYz1pLmxhc3Q7QXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShzLFtjLDBdLmNvbmNhdChuKSl9ZWxzZSBpZih0LmJvZHkub3BlcmF0aW9uPT09YS5DaGFuZ2VUeXBlLlJFTU9WRSl7dmFyIHM9aS5vYmosYz1pLmxhc3Q7cy5zcGxpY2UoYyxuKX1lbHNlIGkub2JqW2kubGFzdF09bjtlbHNlIHQuYm9keS52YWx1ZT9pLm9ialtpLmxhc3RdPW46ZGVsZXRlIGkub2JqW2kubGFzdF19ZWxzZSBjb25zb2xlLmxvZyhcIlVOU1lOQ0hST05JWkVEIFZFUlNJT046IChkYXRhID0+IFwiK3IuX3ZlcnNpb24rXCIsIG1zZyA9PiBcIit0LmJvZHkudmVyc2lvbitcIilcIil9fSx7a2V5OlwiX2NoYW5nZUNoaWxkcmVuXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztjb25zb2xlLmxvZyhcIkNoYW5nZSBjaGlsZHJlbjogXCIsdC5fb3duZXIsZSk7dmFyIHI9ZS5ib2R5LnJlc291cmNlLG89dC5fY2hpbGRyZW5PYmplY3RzW3JdO28/dC5fY2hhbmdlT2JqZWN0KG8uX3N5bmNPYmosZSk6Y29uc29sZS5sb2coXCJObyBjaGlsZHJlbiBmb3VuZCBmb3I6IFwiLHIpfX0se2tleTpcInVybFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl91cmx9fSx7a2V5Olwic2NoZW1hXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3NjaGVtYX19LHtrZXk6XCJzdGF0dXNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc3RhdHVzfX0se2tleTpcImRhdGFcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc3luY09iai5kYXRhfX0se2tleTpcImNoaWxkcmVuc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9jaGlsZHJlbk9iamVjdHN9fV0pLGV9KCk7cltcImRlZmF1bHRcIl09ZCx0LmV4cG9ydHM9cltcImRlZmF1bHRcIl19LHtcIi4uL3V0aWxzL3V0aWxzLmpzXCI6MTE3LFwiLi9EYXRhT2JqZWN0Q2hpbGRcIjoxMTEsXCIuL1N5bmNPYmplY3RcIjoxMTUsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjo1LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIjo3LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2tcIjoxMCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIjoxMixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE2fV0sMTExOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIilbXCJkZWZhdWx0XCJdLG49ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCIpW1wiZGVmYXVsdFwiXSxpPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPWUoXCIuL1N5bmNPYmplY3RcIiksYz1pKHMpLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscixvLGkscyl7bih0aGlzLGUpO3ZhciBhPXRoaXM7YS5fcGFyZW50PXQsYS5fY2hpbGRJZD1yLGEuX293bmVyPWksYS5fbXNnSWQ9cyxhLl9zeW5jT2JqPW5ldyBjW1wiZGVmYXVsdFwiXShvKSxhLl9idXM9dC5fYnVzLGEuX2FsbG9jYXRlTGlzdGVuZXJzKCl9cmV0dXJuIG8oZSxbe2tleTpcIl9hbGxvY2F0ZUxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9vd25lciYmKGUuX2xpc3RlbmVyPWUuX2J1cy5hZGRMaXN0ZW5lcihlLl9vd25lcixmdW5jdGlvbih0KXtcInJlc3BvbnNlXCI9PT10LnR5cGUmJnQuaWQ9PT1lLl9tc2dJZCYmKGNvbnNvbGUubG9nKFwiRGF0YU9iamVjdENoaWxkLm9uUmVzcG9uc2U6XCIsdCksZS5fb25SZXNwb25zZSh0KSl9KSl9fSx7a2V5OlwiX3JlbGVhc2VMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fbGlzdGVuZXImJmUuX2xpc3RlbmVyLnJlbW92ZSgpfX0se2tleTpcImRlbGV0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztkZWxldGUgZS5fcGFyZW50Ll9jaGlsZHJlbltlLl9jaGlsZElkXSxlLl9yZWxlYXNlTGlzdGVuZXJzKCl9fSx7a2V5Olwib25DaGFuZ2VcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLl9zeW5jT2JqLm9ic2VydmUoZnVuY3Rpb24odCl7ZSh0KX0pfX0se2tleTpcIm9uUmVzcG9uc2VcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLl9vblJlc3BvbnNlSGFuZGxlcj1lfX0se2tleTpcIl9vblJlc3BvbnNlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXt0eXBlOmUudHlwZSx1cmw6ZS5ib2R5LnNvdXJjZSxjb2RlOmUuYm9keS5jb2RlfTt0Ll9vblJlc3BvbnNlSGFuZGxlciYmdC5fb25SZXNwb25zZUhhbmRsZXIocil9fSx7a2V5OlwiY2hpbGRJZFwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9jaGlsZElkfX0se2tleTpcImRhdGFcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc3luY09iai5kYXRhfX1dKSxlfSgpO3JbXCJkZWZhdWx0XCJdPWEsdC5leHBvcnRzPXJbXCJkZWZhdWx0XCJdfSx7XCIuL1N5bmNPYmplY3RcIjoxMTUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiOjEwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzc1wiOjEyLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCI6MTZ9XSwxMTI6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldFwiKVtcImRlZmF1bHRcIl0sbj1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpW1wiZGVmYXVsdFwiXSxpPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCIpW1wiZGVmYXVsdFwiXSxzPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiKVtcImRlZmF1bHRcIl0sYz1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCIpW1wiZGVmYXVsdFwiXSxhPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciB1PWUoXCIuL0RhdGFPYmplY3RcIiksbD1hKHUpLGY9ZShcIi4vRGF0YU9iamVjdENoaWxkXCIpLF89YShmKSxkPXtBTlk6XCJhbnlcIixTVEFSVDpcInN0YXJ0XCIsRVhBQ1Q6XCJleGFjdFwifSxwPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSxyLG4saSxhLHUsbCl7cyh0aGlzLHQpLG8oT2JqZWN0LmdldFByb3RvdHlwZU9mKHQucHJvdG90eXBlKSxcImNvbnN0cnVjdG9yXCIsdGhpcykuY2FsbCh0aGlzLGUscixuLGksYS5kYXRhLHUpO3ZhciBmPXRoaXM7Zi5fdmVyc2lvbj1sLGYuX2ZpbHRlcnM9e30sZi5fc3luY09iai5vYnNlcnZlKGZ1bmN0aW9uKGUpe2YuX29uRmlsdGVyKGUpfSksYyhhLmNoaWxkcmVucykuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1hLmNoaWxkcmVuc1tlXTtmLl9jaGlsZHJlbk9iamVjdHNbZV09bmV3IF9bXCJkZWZhdWx0XCJdKGYsZSx0KX0pLGYuX2FsbG9jYXRlTGlzdGVuZXJzKCl9cmV0dXJuIG4odCxlKSxpKHQsW3trZXk6XCJfYWxsb2NhdGVMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe28oT2JqZWN0LmdldFByb3RvdHlwZU9mKHQucHJvdG90eXBlKSxcIl9hbGxvY2F0ZUxpc3RlbmVyc1wiLHRoaXMpLmNhbGwodGhpcyk7dmFyIGU9dGhpcztlLl9jaGFuZ2VMaXN0ZW5lcj1lLl9idXMuYWRkTGlzdGVuZXIoZS5fdXJsK1wiL2NoYW5nZXNcIixmdW5jdGlvbih0KXtcInVwZGF0ZVwiPT09dC50eXBlJiYoY29uc29sZS5sb2coXCJEYXRhT2JqZWN0T2JzZXJ2ZXItXCIrZS5fdXJsK1wiLVJDVjogXCIsdCksZS5fY2hhbmdlT2JqZWN0KGUuX3N5bmNPYmosdCkpfSl9fSx7a2V5OlwiX3JlbGVhc2VMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe28oT2JqZWN0LmdldFByb3RvdHlwZU9mKHQucHJvdG90eXBlKSxcIl9yZWxlYXNlTGlzdGVuZXJzXCIsdGhpcykuY2FsbCh0aGlzKTt2YXIgZT10aGlzO2UuX2NoYW5nZUxpc3RlbmVyLnJlbW92ZSgpfX0se2tleTpcImRlbGV0ZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9yZWxlYXNlTGlzdGVuZXJzKCksZGVsZXRlIGUuX3N5bmNoZXIuX29ic2VydmVyc1tlLl91cmxdfX0se2tleTpcInVuc3Vic2NyaWJlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9e3R5cGU6XCJ1bnN1YnNjcmliZVwiLGZyb206ZS5fb3duZXIsdG86ZS5fc3luY2hlci5fc3ViVVJMLGJvZHk6e3Jlc291cmNlOmUuX3VybH19O2UuX2J1cy5wb3N0TWVzc2FnZSh0LGZ1bmN0aW9uKHQpe2NvbnNvbGUubG9nKFwiRGF0YU9iamVjdE9ic2VydmVyLVVOU1VCU0NSSUJFOiBcIix0KSwyMDA9PT10LmJvZHkuY29kZSYmKGUuX3JlbGVhc2VMaXN0ZW5lcnMoKSxkZWxldGUgZS5fc3luY2hlci5fb2JzZXJ2ZXJzW2UuX3VybF0pfSl9fSx7a2V5Olwib25DaGFuZ2VcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPWUsbz17dHlwZTpkLkVYQUNULGNhbGxiYWNrOnR9LG49ZS5pbmRleE9mKFwiKlwiKTtuPT09ZS5sZW5ndGgtMSYmKDA9PT1uP28udHlwZT1kLkFOWTooby50eXBlPWQuU1RBUlQscj1lLnN1YnN0cigwLGUubGVuZ3RoLTEpKSksdGhpcy5fZmlsdGVyc1tyXT1vfX0se2tleTpcIl9vbkZpbHRlclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7Yyh0Ll9maWx0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKHIpe3ZhciBvPXQuX2ZpbHRlcnNbcl07by50eXBlPT09ZC5BTlk/by5jYWxsYmFjayhlKTpvLnR5cGU9PT1kLlNUQVJUPzA9PT1lLmZpZWxkLmluZGV4T2YocikmJm8uY2FsbGJhY2soZSk6by50eXBlPT09ZC5FWEFDVCYmZS5maWVsZD09PXImJm8uY2FsbGJhY2soZSl9KX19XSksdH0obFtcImRlZmF1bHRcIl0pO3JbXCJkZWZhdWx0XCJdPXAsdC5leHBvcnRzPXJbXCJkZWZhdWx0XCJdfSx7XCIuL0RhdGFPYmplY3RcIjoxMTAsXCIuL0RhdGFPYmplY3RDaGlsZFwiOjExMSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiOjEwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzc1wiOjEyLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldFwiOjE0LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCI6MTUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNn1dLDExMzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0XCIpW1wiZGVmYXVsdFwiXSxuPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIilbXCJkZWZhdWx0XCJdLGk9ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIilbXCJkZWZhdWx0XCJdLHM9ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCIpW1wiZGVmYXVsdFwiXSxjPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIilbXCJkZWZhdWx0XCJdLGE9ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHU9ZShcIi4vRGF0YU9iamVjdFwiKSxsPWEodSksZj1lKFwiLi4vdXRpbHMvdXRpbHMuanNcIiksXz1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KGUscixuLGksYyxhKXtzKHRoaXMsdCksbyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFwiY29uc3RydWN0b3JcIix0aGlzKS5jYWxsKHRoaXMsZSxyLG4saSxjLGEpO3ZhciB1PXRoaXM7dS5fc3Vic2NyaXB0aW9ucz17fSx1Ll9zeW5jT2JqLm9ic2VydmUoZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coXCJEYXRhT2JqZWN0UmVwb3J0ZXItXCIrcitcIi1TRU5EOiBcIixlKSx1Ll9vbkNoYW5nZShlKX0pLHUuX2FsbG9jYXRlTGlzdGVuZXJzKCl9cmV0dXJuIG4odCxlKSxpKHQsW3trZXk6XCJfYWxsb2NhdGVMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe28oT2JqZWN0LmdldFByb3RvdHlwZU9mKHQucHJvdG90eXBlKSxcIl9hbGxvY2F0ZUxpc3RlbmVyc1wiLHRoaXMpLmNhbGwodGhpcyk7dmFyIGU9dGhpcztlLl9yZXNwb25zZUxpc3RlbmVyPWUuX2J1cy5hZGRMaXN0ZW5lcihlLl91cmwsZnVuY3Rpb24odCl7XCJyZXNwb25zZVwiPT09dC50eXBlJiZlLl9vblJlc3BvbnNlKHQpfSl9fSx7a2V5OlwiX3JlbGVhc2VMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe28oT2JqZWN0LmdldFByb3RvdHlwZU9mKHQucHJvdG90eXBlKSxcIl9yZWxlYXNlTGlzdGVuZXJzXCIsdGhpcykuY2FsbCh0aGlzKTt2YXIgZT10aGlzO2UuX3Jlc3BvbnNlTGlzdGVuZXIucmVtb3ZlKCl9fSx7a2V5OlwiZGVsZXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9e3R5cGU6XCJkZWxldGVcIixmcm9tOmUuX293bmVyLHRvOmUuX3N5bmNoZXIuX3N1YlVSTCxib2R5OntyZXNvdXJjZTplLl91cmx9fTtlLl9idXMucG9zdE1lc3NhZ2UodCxmdW5jdGlvbih0KXtjb25zb2xlLmxvZyhcIkRhdGFPYmplY3RSZXBvcnRlci1ERUxFVEU6IFwiLHQpLDIwMD09PXQuYm9keS5jb2RlJiYoZS5fcmVsZWFzZUxpc3RlbmVycygpLGRlbGV0ZSBlLl9zeW5jaGVyLl9yZXBvcnRlcnNbZS5fdXJsXSl9KX19LHtrZXk6XCJvblN1YnNjcmlwdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcj1lfX0se2tleTpcIm9uUmVzcG9uc2VcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLl9vblJlc3BvbnNlSGFuZGxlcj1lfX0se2tleTpcIl9vbkZvcndhcmRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3N3aXRjaChjb25zb2xlLmxvZyhcIkRhdGFPYmplY3RSZXBvcnRlci1SQ1Y6IFwiLGUpLGUuYm9keS50eXBlKXtjYXNlXCJzdWJzY3JpYmVcIjp0Ll9vblN1YnNjcmliZShlKTticmVhaztjYXNlXCJ1bnN1YnNjcmliZVwiOnQuX29uVW5TdWJzY3JpYmUoZSl9fX0se2tleTpcIl9vblN1YnNjcmliZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLmJvZHkuZnJvbSxvPXt0eXBlOmUuYm9keS50eXBlLHVybDpyLGFjY2VwdDpmdW5jdGlvbigpe3ZhciBvPXt1cmw6cixzdGF0dXM6XCJvblwifTt0Ll9zdWJzY3JpcHRpb25zW3JdPW87dmFyIG49e307cmV0dXJuIGModC5fY2hpbGRyZW5PYmplY3RzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciByPXQuX2NoaWxkcmVuT2JqZWN0c1tlXS5kYXRhO25bZV09KDAsZi5kZWVwQ2xvbmUpKHIpfSksdC5fYnVzLnBvc3RNZXNzYWdlKHtpZDplLmlkLHR5cGU6XCJyZXNwb25zZVwiLGZyb206ZS50byx0bzplLmZyb20sYm9keTp7Y29kZToyMDAsc2NoZW1hOnQuX3NjaGVtYSx2ZXJzaW9uOnQuX3ZlcnNpb24sdmFsdWU6e2RhdGE6KDAsZi5kZWVwQ2xvbmUpKHQuZGF0YSksY2hpbGRyZW5zOm59fX0pLG99LHJlamVjdDpmdW5jdGlvbihyKXt0Ll9idXMucG9zdE1lc3NhZ2Uoe2lkOmUuaWQsdHlwZTpcInJlc3BvbnNlXCIsZnJvbTplLnRvLHRvOmUuZnJvbSxib2R5Ontjb2RlOjQwMyxkZXNjOnJ9fSl9fTt0Ll9vblN1YnNjcmlwdGlvbkhhbmRsZXImJihjb25zb2xlLmxvZyhcIlNVQlNDUklQVElPTi1FVkVOVDogXCIsbyksdC5fb25TdWJzY3JpcHRpb25IYW5kbGVyKG8pKX19LHtrZXk6XCJfb25VblN1YnNjcmliZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLmJvZHkuZnJvbSxvPXQuX3N1YnNjcmlwdGlvbnNbcl07ZGVsZXRlIHQuX3N1YnNjcmlwdGlvbnNbcl07dmFyIG49e3R5cGU6ZS5ib2R5LnR5cGUsdXJsOnIsb2JqZWN0Om99O3QuX29uU3Vic2NyaXB0aW9uSGFuZGxlciYmKGNvbnNvbGUubG9nKFwiVU4tU1VCU0NSSVBUSU9OLUVWRU5UOiBcIixuKSx0Ll9vblN1YnNjcmlwdGlvbkhhbmRsZXIobikpfX0se2tleTpcIl9vblJlc3BvbnNlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXt0eXBlOmUudHlwZSx1cmw6ZS5mcm9tLGNvZGU6ZS5ib2R5LmNvZGV9O3QuX29uUmVzcG9uc2VIYW5kbGVyJiYoY29uc29sZS5sb2coXCJSRVNQT05TRS1FVkVOVDogXCIsciksdC5fb25SZXNwb25zZUhhbmRsZXIocikpfX0se2tleTpcInN1YnNjcmlwdGlvbnNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc3Vic2NyaXB0aW9uc319XSksdH0obFtcImRlZmF1bHRcIl0pO3JbXCJkZWZhdWx0XCJdPV8sdC5leHBvcnRzPXJbXCJkZWZhdWx0XCJdfSx7XCIuLi91dGlscy91dGlscy5qc1wiOjExNyxcIi4vRGF0YU9iamVjdFwiOjExMCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiOjEwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzc1wiOjEyLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldFwiOjE0LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCI6MTUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNn1dLDExNDpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCIpW1wiZGVmYXVsdFwiXSxuPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiKVtcImRlZmF1bHRcIl07T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscixvLGkpe24odGhpcyxlKTt2YXIgcz10aGlzO3MuX293bmVyPXQscy5fdXJsPXIscy5fYnVzPW8scy5fY2hpbGRyZW49aSxzLl9jaGFuZ2VzPVtdLHMuX2FsbG9jYXRlTGlzdGVuZXJzKCl9cmV0dXJuIG8oZSxbe2tleTpcIl9hbGxvY2F0ZUxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9saXN0ZW5lcj1lLl9idXMuYWRkTGlzdGVuZXIoZS5fdXJsLGZ1bmN0aW9uKHQpe2NvbnNvbGUubG9nKFwiRGF0YVByb3Zpc2lvbmFsLVwiK2UuX3VybCtcIi1SQ1Y6IFwiLHQpLGUuX2NoYW5nZXMucHVzaCh0KX0pfX0se2tleTpcIl9yZWxlYXNlTGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX2xpc3RlbmVyLnJlbW92ZSgpfX0se2tleTpcImFwcGx5XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0Ll9jaGFuZ2VzLmZvckVhY2goZnVuY3Rpb24odCl7ZS5fY2hhbmdlT2JqZWN0KGUuX3N5bmNPYmosdCl9KX19LHtrZXk6XCJjaGlsZHJlblwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9jaGlsZHJlbn19XSksZX0oKTtyW1wiZGVmYXVsdFwiXT1pLHQuZXhwb3J0cz1yW1wiZGVmYXVsdFwiXX0se1wiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2tcIjoxMCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIjoxMn1dLDExNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCIpW1wiZGVmYXVsdFwiXSxuPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiKVtcImRlZmF1bHRcIl0saT1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCIpW1wiZGVmYXVsdFwiXTtPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1lKFwiLi4vdXRpbHMvdXRpbHMuanNcIiksYz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7bih0aGlzLGUpO3ZhciByPXRoaXM7ci5fb2JzZXJ2ZXJzPVtdLHIuX2ZpbHRlcnM9e30sdD9yLl9kYXRhPSgwLHMuZGVlcENsb25lKSh0KTpyLl9kYXRhPXt9LHIuX2ludGVybmFsT2JzZXJ2ZShuZXcgYSxyLl9kYXRhKX1yZXR1cm4gbyhlLFt7a2V5Olwib2JzZXJ2ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX29ic2VydmVycy5wdXNoKGUpfX0se2tleTpcImZpbmRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnNwbGl0KFwiLlwiKTtyZXR1cm4gdGhpcy5fZmluZFdpdGhTcGxpdCh0KX19LHtrZXk6XCJmaW5kQmVmb3JlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e30scj1lLnNwbGl0KFwiLlwiKTtyZXR1cm4gdC5sYXN0PXIucG9wKCksdC5vYmo9dGhpcy5fZmluZFdpdGhTcGxpdChyKSx0fX0se2tleTpcIl9maW5kV2l0aFNwbGl0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5fZGF0YTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3Q9dFtlXX0pLHR9fSx7a2V5OlwiX2ZpcmVFdmVudFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX29ic2VydmVycy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QoZSl9KX19LHtrZXk6XCJfaXNPYnNlcnZhYmxlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuY29uc3RydWN0b3I9PT1PYmplY3R8fGUuY29uc3RydWN0b3I9PT1BcnJheX19LHtrZXk6XCJfaW50ZXJuYWxPYnNlcnZlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzO2lmKHIuX2lzT2JzZXJ2YWJsZSh0KSl7dmFyIG89ZnVuY3Rpb24odCl7ci5fb25DaGFuZ2VzKGUsdCl9O2lmKHQuY29uc3RydWN0b3I9PT1PYmplY3Qpe09iamVjdC5vYnNlcnZlKHQsbyk7Zm9yKHZhciBuIGluIHQpci5faXNPYnNlcnZhYmxlKHRbbl0pJiZyLl9pbnRlcm5hbE9ic2VydmUoZVtcIm5ld1wiXShuKSx0W25dKX1lbHNlIGlmKHQuY29uc3RydWN0b3I9PT1BcnJheSl7QXJyYXkub2JzZXJ2ZSh0LG8pO2Zvcih2YXIgbiBpbiB0KWlmKHIuX2lzT2JzZXJ2YWJsZSh0W25dKSl7dmFyIGk9ZVtcIm5ld1wiXShuZXcgdSh0W25dLG4pKTtyLl9pbnRlcm5hbE9ic2VydmUoaSx0W25dKX19fX19LHtrZXk6XCJfb25DaGFuZ2VzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzO2Zvcih2YXIgbyBpbiB0KXt2YXIgbj10W29dLm9iamVjdCxpPXZvaWQgMDtpZihuLmNvbnN0cnVjdG9yPT09T2JqZWN0JiYoaT1mLk9CSkVDVCksbi5jb25zdHJ1Y3Rvcj09PUFycmF5JiYoaT1mLkFSUkFZKSxcInNwbGljZVwiPT09dFtvXS50eXBlKSFmdW5jdGlvbigpe3ZhciBjPXRbb10uaW5kZXgsYT1lW1wibmV3XCJdKFwiXCIrYyksZj1hLnRvU3RyaW5nKCksXz10W29dLnJlbW92ZWQubGVuZ3RoO2lmKDAhPT1fKXt2YXIgZD10W29dLnJlbW92ZWQ7ZC5mb3JFYWNoKGZ1bmN0aW9uKHQsbyl7ci5faXNPYnNlcnZhYmxlKHQpJiZlLnJlbW92ZUluZGV4KGMrbyl9KSxyLl9maXJlRXZlbnQoe2NUeXBlOmwuUkVNT1ZFLG9UeXBlOmksZmllbGQ6ZixkYXRhOl99KX12YXIgcD10W29dLmFkZGVkQ291bnQ7aWYoMCE9PXApe3ZhciBiPW4uc2xpY2UoYyxjK3ApO2IuZm9yRWFjaChmdW5jdGlvbih0LG8pe2lmKHIuX2lzT2JzZXJ2YWJsZSh0KSl7dmFyIG49ZVtcIm5ld1wiXShuZXcgdSh0LGMrbykpO3IuX2ludGVybmFsT2JzZXJ2ZShuLHQpfX0pLHIuX2ZpcmVFdmVudCh7Y1R5cGU6bC5BREQsb1R5cGU6aSxmaWVsZDpmLGRhdGE6KDAscy5kZWVwQ2xvbmUpKGIpfSl9YyE9PW4ubGVuZ3RoLTEmJmUucmVJbmRleEZyb20obil9KCk7ZWxzZXt2YXIgYz1lW1wibmV3XCJdKHRbb10ubmFtZSksYT1jLnRvU3RyaW5nKCk7aWYoLTEhPT1hLmluZGV4T2YoXCJTeW1ib2xcIikpY29udGludWU7dmFyIF89blt0W29dLm5hbWVdO1widXBkYXRlXCI9PT10W29dLnR5cGUmJnRoaXMuX2ZpcmVFdmVudCh7Y1R5cGU6bC5VUERBVEUsb1R5cGU6aSxmaWVsZDphLGRhdGE6KDAscy5kZWVwQ2xvbmUpKF8pfSksXCJhZGRcIj09PXRbb10udHlwZSYmKHRoaXMuX2ludGVybmFsT2JzZXJ2ZShjLF8pLHRoaXMuX2ZpcmVFdmVudCh7Y1R5cGU6bC5BREQsb1R5cGU6aSxmaWVsZDphLGRhdGE6KDAscy5kZWVwQ2xvbmUpKF8pfSkpLFwiZGVsZXRlXCI9PT10W29dLnR5cGUmJnRoaXMuX2ZpcmVFdmVudCh7Y1R5cGU6bC5SRU1PVkUsb1R5cGU6aSxmaWVsZDphfSl9fX19LHtrZXk6XCJkYXRhXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGF9fV0pLGV9KCksYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtuKHRoaXMsZSksdGhpcy5fcGF0aD1bXSx0aGlzLl9vYnNlcnZhYmxlcz17fX1yZXR1cm4gbyhlLFt7a2V5OlwicmVtb3ZlSW5kZXhcIix2YWx1ZTpmdW5jdGlvbihlKXtkZWxldGUgdGhpcy5fb2JzZXJ2YWJsZXNbZV19fSx7a2V5OlwicmVJbmRleEZyb21cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2kodGhpcy5fb2JzZXJ2YWJsZXMpLmZvckVhY2goZnVuY3Rpb24ocil7dmFyIG89dC5fb2JzZXJ2YWJsZXNbcl0sbj1lLmluZGV4T2Yoby5vYmopO28uaWR4IT1uJiYoby5pZHg9bixkZWxldGUgdC5fb2JzZXJ2YWJsZXNbcl0sdC5fb2JzZXJ2YWJsZXNbbl09byl9KX19LHtrZXk6XCJuZXdcIix2YWx1ZTpmdW5jdGlvbihlKXtlLmNvbnN0cnVjdG9yPT11JiYodGhpcy5fb2JzZXJ2YWJsZXNbZS5pZHhdPWUpO3ZhciB0PXRoaXMuY2xvbmUoKTtyZXR1cm4gdC5fcGF0aC5wdXNoKGUpLHR9fSx7a2V5OlwiY2xvbmVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PW5ldyBlO3JldHVybiB0aGlzLl9wYXRoLmZvckVhY2goZnVuY3Rpb24oZSl7dC5fcGF0aC5wdXNoKGUpfSksdH19LHtrZXk6XCJ0b1N0cmluZ1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9XCJcIjtyZXR1cm4gdGhpcy5fcGF0aC5mb3JFYWNoKGZ1bmN0aW9uKHQscil7MD09PXI/ZT10LnRvU3RyaW5nKCk6ZSs9XCIuXCIrdC50b1N0cmluZygpfSksZX19XSksZX0oKSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LHIpe24odGhpcyxlKSx0aGlzLm9iaj10LHRoaXMuaWR4PXJ9cmV0dXJuIG8oZSxbe2tleTpcInRvU3RyaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pZHgudG9TdHJpbmcoKX19XSksZX0oKSxsPXtVUERBVEU6XCJ1cGRhdGVcIixBREQ6XCJhZGRcIixSRU1PVkU6XCJyZW1vdmVcIn07ci5DaGFuZ2VUeXBlPWw7dmFyIGY9e09CSkVDVDpcIm9iamVjdFwiLEFSUkFZOlwiYXJyYXlcIn07ci5PYmplY3RUeXBlPWYscltcImRlZmF1bHRcIl09Y30se1wiLi4vdXRpbHMvdXRpbHMuanNcIjoxMTcsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIjo1LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2tcIjoxMCxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIjoxMn1dLDExNjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCIpW1wiZGVmYXVsdFwiXSxuPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiKVtcImRlZmF1bHRcIl0saT1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2VcIilbXCJkZWZhdWx0XCJdLHM9ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9ZShcIi4vRGF0YU9iamVjdFJlcG9ydGVyXCIpLGE9cyhjKSx1PWUoXCIuL0RhdGFPYmplY3RPYnNlcnZlclwiKSxsPXModSksZj1lKFwiLi9EYXRhUHJvdmlzaW9uYWxcIiksXz1zKGYpLGQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscixvKXtuKHRoaXMsZSk7dmFyIGk9dGhpcztpLl9vd25lcj10LGkuX2J1cz1yLGkuX3N1YlVSTD1vLnJ1bnRpbWVVUkwrXCIvc21cIixpLl9yZXBvcnRlcnM9e30saS5fb2JzZXJ2ZXJzPXt9LGkuX3Byb3Zpc2lvbmFscz17fSxyLmFkZExpc3RlbmVyKHQsZnVuY3Rpb24oZSl7aWYoZS5mcm9tIT09dClzd2l0Y2goY29uc29sZS5sb2coXCJTeW5jaGVyLVJDVjogXCIsZSksZS50eXBlKXtjYXNlXCJmb3J3YXJkXCI6aS5fb25Gb3J3YXJkKGUpO2JyZWFrO2Nhc2VcImNyZWF0ZVwiOmkuX29uUmVtb3RlQ3JlYXRlKGUpO2JyZWFrO2Nhc2VcImRlbGV0ZVwiOmkuX29uUmVtb3RlRGVsZXRlKGUpfX0pfXJldHVybiBvKGUsW3trZXk6XCJjcmVhdGVcIix2YWx1ZTpmdW5jdGlvbihlLHQscil7dmFyIG89dGhpcyxuPXt0eXBlOlwiY3JlYXRlXCIsZnJvbTpvLl9vd25lcix0bzpvLl9zdWJVUkwsYm9keTp7c2NoZW1hOmUsdmFsdWU6cixhdXRob3Jpc2U6dH19O3JldHVybiBuZXcgaShmdW5jdGlvbih0LGkpe28uX2J1cy5wb3N0TWVzc2FnZShuLGZ1bmN0aW9uKG4pe2lmKGNvbnNvbGUubG9nKFwiY3JlYXRlLXJlc3BvbnNlOiBcIixuKSwyMDA9PT1uLmJvZHkuY29kZSl7dmFyIHM9bi5ib2R5LnJlc291cmNlLGM9bmV3IGFbXCJkZWZhdWx0XCJdKG8scyxlLFwib25cIixyLG4uYm9keS5jaGlsZHJlblJlc291cmNlcyk7by5fcmVwb3J0ZXJzW3NdPWMsdChjKX1lbHNlIGkobi5ib2R5LmRlc2MpfSl9KX19LHtrZXk6XCJzdWJzY3JpYmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXMsbz17dHlwZTpcInN1YnNjcmliZVwiLGZyb206ci5fb3duZXIsdG86ci5fc3ViVVJMLGJvZHk6e3NjaGVtYTplLHJlc291cmNlOnR9fTtyZXR1cm4gbmV3IGkoZnVuY3Rpb24obixpKXtyLl9idXMucG9zdE1lc3NhZ2UobyxmdW5jdGlvbihvKXtjb25zb2xlLmxvZyhcInN1YnNjcmliZS1yZXNwb25zZTogXCIsbyk7dmFyIHM9ci5fcHJvdmlzaW9uYWxzW3RdO2lmKGRlbGV0ZSByLl9wcm92aXNpb25hbHNbdF0scyYmcy5fcmVsZWFzZUxpc3RlbmVycygpLG8uYm9keS5jb2RlPDIwMClzPW5ldyBfW1wiZGVmYXVsdFwiXShyLl9vd25lcix0LHIuX2J1cyxvLmJvZHkuY2hpbGRyZW5SZXNvdXJjZXMpLHIuX3Byb3Zpc2lvbmFsc1t0XT1zO2Vsc2UgaWYoMjAwPT09by5ib2R5LmNvZGUpe3ZhciBjPW5ldyBsW1wiZGVmYXVsdFwiXShyLHQsZSxcIm9uXCIsby5ib2R5LnZhbHVlLHMuY2hpbGRyZW4sby5ib2R5LnZlcnNpb24pO3IuX29ic2VydmVyc1t0XT1jLG4oYykscy5hcHBseShjKX1lbHNlIGkoby5ib2R5LmRlc2MpfSl9KX19LHtrZXk6XCJvbk5vdGlmaWNhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlcj1lfX0se2tleTpcIl9vbkZvcndhcmRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9dC5fcmVwb3J0ZXJzW2UuYm9keS50b107ci5fb25Gb3J3YXJkKGUpfX0se2tleTpcIl9vblJlbW90ZUNyZWF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLmZyb20uc2xpY2UoMCwtMTMpLG89e3R5cGU6ZS50eXBlLGZyb206ZS5ib2R5LnNvdXJjZSx1cmw6cixzY2hlbWE6ZS5ib2R5LnNjaGVtYSx2YWx1ZTplLmJvZHkudmFsdWUsaWRlbnRpdHk6ZS5ib2R5LmlkVG9rZW4sYWNrOmZ1bmN0aW9uKHIpe3ZhciBvPTIwMDtyJiYobz1yKSx0Ll9idXMucG9zdE1lc3NhZ2Uoe2lkOmUuaWQsdHlwZTpcInJlc3BvbnNlXCIsZnJvbTplLnRvLHRvOmUuZnJvbSxib2R5Ontjb2RlOm99fSl9fTt0Ll9vbk5vdGlmaWNhdGlvbkhhbmRsZXImJihjb25zb2xlLmxvZyhcIk5PVElGSUNBVElPTi1FVkVOVDogXCIsbyksdC5fb25Ob3RpZmljYXRpb25IYW5kbGVyKG8pKX19LHtrZXk6XCJfb25SZW1vdGVEZWxldGVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9ZS5ib2R5LnJlc291cmNlLG89dC5fb2JzZXJ2ZXJzW3JdO2lmKG8pe3ZhciBuPXt0eXBlOmUudHlwZSx1cmw6cixpZGVudGl0eTplLmJvZHkuaWRUb2tlbixhY2s6ZnVuY3Rpb24ocil7dmFyIG49MjAwO3ImJihuPXIpLDIwMD09PW4mJm9bXCJkZWxldGVcIl0oKSx0Ll9idXMucG9zdE1lc3NhZ2Uoe2lkOmUuaWQsdHlwZTpcInJlc3BvbnNlXCIsZnJvbTplLnRvLHRvOmUuZnJvbSxib2R5Ontjb2RlOm4sc291cmNlOnQuX293bmVyfX0pfX07dC5fb25Ob3RpZmljYXRpb25IYW5kbGVyJiYoY29uc29sZS5sb2coXCJOT1RJRklDQVRJT04tRVZFTlQ6IFwiLG4pLHQuX29uTm90aWZpY2F0aW9uSGFuZGxlcihuKSl9ZWxzZSB0Ll9idXMucG9zdE1lc3NhZ2Uoe2lkOmUuaWQsdHlwZTpcInJlc3BvbnNlXCIsZnJvbTplLnRvLHRvOmUuZnJvbSxib2R5Ontjb2RlOjQwNCxzb3VyY2U6dC5fb3duZXJ9fSl9fSx7a2V5Olwib3duZXJcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb3duZXJ9fSx7a2V5OlwicmVwb3J0ZXJzXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3JlcG9ydGVyc319LHtrZXk6XCJvYnNlcnZlcnNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fb2JzZXJ2ZXJzfX1dKSxlfSgpO3JbXCJkZWZhdWx0XCJdPWQsdC5leHBvcnRzPXJbXCJkZWZhdWx0XCJdfSx7XCIuL0RhdGFPYmplY3RPYnNlcnZlclwiOjExMixcIi4vRGF0YU9iamVjdFJlcG9ydGVyXCI6MTEzLFwiLi9EYXRhUHJvdmlzaW9uYWxcIjoxMTQsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiOjcsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiOjEwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzc1wiOjEyLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCI6MTZ9XSwxMTc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3ZhciB0PS8oW2EtekEtWi1dKik6XFwvXFwvKD86XFwuKT8oWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XFwvXSopL2dpLHI9XCIkMSwkMiwkM1wiLG89ZS5yZXBsYWNlKHQscikuc3BsaXQoXCIsXCIpO29bMF09PT1lJiYob1swXT1cImh0dHBzXCIsb1sxXT1lKTt2YXIgbj17dHlwZTpvWzBdLGRvbWFpbjpvWzFdLGlkZW50aXR5Om9bMl19O3JldHVybiBufWZ1bmN0aW9uIG4oZSl7cmV0dXJuIGU/SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSk6dm9pZCAwfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuZGl2aWRlVVJMPW8sci5kZWVwQ2xvbmU9bn0se31dfSx7fSxbMTA5XSkoMTA5KX0pOyIsIi8qXG4gKiAgQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBXZWJSVEMgcHJvamVjdCBhdXRob3JzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhIEJTRC1zdHlsZSBsaWNlbnNlXG4gKiAgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBvZiB0aGUgc291cmNlXG4gKiAgdHJlZS5cbiAqL1xuXG4vKiBNb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZXNlIG9wdGlvbnMgYXQganNoaW50LmNvbS9kb2NzL29wdGlvbnMgKi9cbi8qIGpzaGludCBicm93c2VyOiB0cnVlLCBjYW1lbGNhc2U6IHRydWUsIGN1cmx5OiB0cnVlLCBkZXZlbDogdHJ1ZSxcbiAgIGVxZXFlcTogdHJ1ZSwgZm9yaW46IGZhbHNlLCBnbG9iYWxzdHJpY3Q6IHRydWUsIG5vZGU6IHRydWUsXG4gICBxdW90bWFyazogc2luZ2xlLCB1bmRlZjogdHJ1ZSwgdW51c2VkOiBzdHJpY3QgKi9cbi8qIGdsb2JhbCBtb3pSVENJY2VDYW5kaWRhdGUsIG1velJUQ1BlZXJDb25uZWN0aW9uLCBQcm9taXNlLFxubW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uLCB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbiwgTWVkaWFTdHJlYW1UcmFjayxcbk1lZGlhU3RyZWFtLCBSVENJY2VHYXRoZXJlciwgUlRDSWNlVHJhbnNwb3J0LCBSVENEdGxzVHJhbnNwb3J0LFxuUlRDUnRwU2VuZGVyLCBSVENSdHBSZWNlaXZlciovXG4vKiBleHBvcnRlZCB0cmFjZSxyZXF1ZXN0VXNlck1lZGlhICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGdldFVzZXJNZWRpYSA9IG51bGw7XG52YXIgYXR0YWNoTWVkaWFTdHJlYW0gPSBudWxsO1xudmFyIHJlYXR0YWNoTWVkaWFTdHJlYW0gPSBudWxsO1xudmFyIHdlYnJ0Y0RldGVjdGVkQnJvd3NlciA9IG51bGw7XG52YXIgd2VicnRjRGV0ZWN0ZWRWZXJzaW9uID0gbnVsbDtcbnZhciB3ZWJydGNNaW5pbXVtVmVyc2lvbiA9IG51bGw7XG52YXIgd2VicnRjVXRpbHMgPSB7XG4gIGxvZzogZnVuY3Rpb24oKSB7XG4gICAgLy8gc3VwcHJlc3MgY29uc29sZS5sb2cgb3V0cHV0IHdoZW4gYmVpbmcgaW5jbHVkZWQgYXMgYSBtb2R1bGUuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgfSxcbiAgZXh0cmFjdFZlcnNpb246IGZ1bmN0aW9uKHVhc3RyaW5nLCBleHByLCBwb3MpIHtcbiAgICB2YXIgbWF0Y2ggPSB1YXN0cmluZy5tYXRjaChleHByKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID49IHBvcyAmJiBwYXJzZUludChtYXRjaFtwb3NdLCAxMCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHRyYWNlKHRleHQpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGZvciBsb2dnaW5nLlxuICBpZiAodGV4dFt0ZXh0Lmxlbmd0aCAtIDFdID09PSAnXFxuJykge1xuICAgIHRleHQgPSB0ZXh0LnN1YnN0cmluZygwLCB0ZXh0Lmxlbmd0aCAtIDEpO1xuICB9XG4gIGlmICh3aW5kb3cucGVyZm9ybWFuY2UpIHtcbiAgICB2YXIgbm93ID0gKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSAvIDEwMDApLnRvRml4ZWQoMyk7XG4gICAgd2VicnRjVXRpbHMubG9nKG5vdyArICc6ICcgKyB0ZXh0KTtcbiAgfSBlbHNlIHtcbiAgICB3ZWJydGNVdGlscy5sb2codGV4dCk7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSB7XG4gIGlmICh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudCAmJlxuICAgICEoJ3NyY09iamVjdCcgaW4gd2luZG93LkhUTUxNZWRpYUVsZW1lbnQucHJvdG90eXBlKSkge1xuICAgIC8vIFNoaW0gdGhlIHNyY09iamVjdCBwcm9wZXJ0eSwgb25jZSwgd2hlbiBIVE1MTWVkaWFFbGVtZW50IGlzIGZvdW5kLlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsICdzcmNPYmplY3QnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBJZiBwcmVmaXhlZCBzcmNPYmplY3QgcHJvcGVydHkgZXhpc3RzLCByZXR1cm4gaXQuXG4gICAgICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNoaW1tZWQgcHJvcGVydHksIF9zcmNPYmplY3RcbiAgICAgICAgcmV0dXJuICdtb3pTcmNPYmplY3QnIGluIHRoaXMgPyB0aGlzLm1velNyY09iamVjdCA6IHRoaXMuX3NyY09iamVjdDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBpZiAoJ21velNyY09iamVjdCcgaW4gdGhpcykge1xuICAgICAgICAgIHRoaXMubW96U3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFVzZSBfc3JjT2JqZWN0IGFzIGEgcHJpdmF0ZSBwcm9wZXJ0eSBmb3IgdGhpcyBzaGltXG4gICAgICAgICAgdGhpcy5fc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgIC8vIFRPRE86IHJldm9rZU9iamVjdFVybCh0aGlzLnNyYykgd2hlbiAhc3RyZWFtIHRvIHJlbGVhc2UgcmVzb3VyY2VzP1xuICAgICAgICAgIHRoaXMuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgLy8gUHJveHkgZXhpc3RpbmcgZ2xvYmFsc1xuICBnZXRVc2VyTWVkaWEgPSB3aW5kb3cubmF2aWdhdG9yICYmIHdpbmRvdy5uYXZpZ2F0b3IuZ2V0VXNlck1lZGlhO1xufVxuXG4vLyBBdHRhY2ggYSBtZWRpYSBzdHJlYW0gdG8gYW4gZWxlbWVudC5cbmF0dGFjaE1lZGlhU3RyZWFtID0gZnVuY3Rpb24oZWxlbWVudCwgc3RyZWFtKSB7XG4gIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xufTtcblxucmVhdHRhY2hNZWRpYVN0cmVhbSA9IGZ1bmN0aW9uKHRvLCBmcm9tKSB7XG4gIHRvLnNyY09iamVjdCA9IGZyb20uc3JjT2JqZWN0O1xufTtcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cubmF2aWdhdG9yKSB7XG4gIHdlYnJ0Y1V0aWxzLmxvZygnVGhpcyBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgYSBicm93c2VyJyk7XG4gIHdlYnJ0Y0RldGVjdGVkQnJvd3NlciA9ICdub3QgYSBicm93c2VyJztcbn0gZWxzZSBpZiAobmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYSkge1xuICB3ZWJydGNVdGlscy5sb2coJ1RoaXMgYXBwZWFycyB0byBiZSBGaXJlZm94Jyk7XG5cbiAgd2VicnRjRGV0ZWN0ZWRCcm93c2VyID0gJ2ZpcmVmb3gnO1xuXG4gIC8vIHRoZSBkZXRlY3RlZCBmaXJlZm94IHZlcnNpb24uXG4gIHdlYnJ0Y0RldGVjdGVkVmVyc2lvbiA9IHdlYnJ0Y1V0aWxzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAvRmlyZWZveFxcLyhbMC05XSspXFwuLywgMSk7XG5cbiAgLy8gdGhlIG1pbmltdW0gZmlyZWZveCB2ZXJzaW9uIHN0aWxsIHN1cHBvcnRlZCBieSBhZGFwdGVyLlxuICB3ZWJydGNNaW5pbXVtVmVyc2lvbiA9IDMxO1xuXG4gIC8vIFNoaW0gZm9yIFJUQ1BlZXJDb25uZWN0aW9uIG9uIG9sZGVyIHZlcnNpb25zLlxuICBpZiAoIXdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbikge1xuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKSB7XG4gICAgICBpZiAod2VicnRjRGV0ZWN0ZWRWZXJzaW9uIDwgMzgpIHtcbiAgICAgICAgLy8gLnVybHMgaXMgbm90IHN1cHBvcnRlZCBpbiBGRiA8IDM4LlxuICAgICAgICAvLyBjcmVhdGUgUlRDSWNlU2VydmVycyB3aXRoIGEgc2luZ2xlIHVybC5cbiAgICAgICAgaWYgKHBjQ29uZmlnICYmIHBjQ29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgICAgICB2YXIgbmV3SWNlU2VydmVycyA9IFtdO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGNDb25maWcuaWNlU2VydmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHNlcnZlciA9IHBjQ29uZmlnLmljZVNlcnZlcnNbaV07XG4gICAgICAgICAgICBpZiAoc2VydmVyLmhhc093blByb3BlcnR5KCd1cmxzJykpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZXJ2ZXIudXJscy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBuZXdTZXJ2ZXIgPSB7XG4gICAgICAgICAgICAgICAgICB1cmw6IHNlcnZlci51cmxzW2pdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoc2VydmVyLnVybHNbal0uaW5kZXhPZigndHVybicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBuZXdTZXJ2ZXIudXNlcm5hbWUgPSBzZXJ2ZXIudXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICBuZXdTZXJ2ZXIuY3JlZGVudGlhbCA9IHNlcnZlci5jcmVkZW50aWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2gobmV3U2VydmVyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbmV3SWNlU2VydmVycy5wdXNoKHBjQ29uZmlnLmljZVNlcnZlcnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBwY0NvbmZpZy5pY2VTZXJ2ZXJzID0gbmV3SWNlU2VydmVycztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBtb3pSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cyk7IC8vIGpzY3M6aWdub3JlIHJlcXVpcmVDYXBpdGFsaXplZENvbnN0cnVjdG9yc1xuICAgIH07XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSA9IG1velJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcblxuICAgIC8vIHdyYXAgc3RhdGljIG1ldGhvZHMuIEN1cnJlbnRseSBqdXN0IGdlbmVyYXRlQ2VydGlmaWNhdGUuXG4gICAgaWYgKG1velJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbW96UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5hcHBseShudWxsLFxuICAgICAgICAgICAgICAgIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtb3pSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IG1velJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgICB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlID0gbW96UlRDSWNlQ2FuZGlkYXRlO1xuICB9XG5cbiAgLy8gZ2V0VXNlck1lZGlhIGNvbnN0cmFpbnRzIHNoaW0uXG4gIGdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICB2YXIgY29uc3RyYWludHNUb0ZGMzcgPSBmdW5jdGlvbihjKSB7XG4gICAgICBpZiAodHlwZW9mIGMgIT09ICdvYmplY3QnIHx8IGMucmVxdWlyZSkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH1cbiAgICAgIHZhciByZXF1aXJlID0gW107XG4gICAgICBPYmplY3Qua2V5cyhjKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAoa2V5ID09PSAncmVxdWlyZScgfHwga2V5ID09PSAnYWR2YW5jZWQnIHx8IGtleSA9PT0gJ21lZGlhU291cmNlJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgciA9IGNba2V5XSA9ICh0eXBlb2YgY1trZXldID09PSAnb2JqZWN0JykgP1xuICAgICAgICAgICAgY1trZXldIDoge2lkZWFsOiBjW2tleV19O1xuICAgICAgICBpZiAoci5taW4gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgci5tYXggIT09IHVuZGVmaW5lZCB8fCByLmV4YWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXF1aXJlLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoci5leGFjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByLmV4YWN0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgci5taW4gPSByLm1heCA9IHIuZXhhY3Q7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNba2V5XSA9IHIuZXhhY3Q7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRlbGV0ZSByLmV4YWN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyLmlkZWFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjLmFkdmFuY2VkID0gYy5hZHZhbmNlZCB8fCBbXTtcbiAgICAgICAgICB2YXIgb2MgPSB7fTtcbiAgICAgICAgICBpZiAodHlwZW9mIHIuaWRlYWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBvY1trZXldID0ge21pbjogci5pZGVhbCwgbWF4OiByLmlkZWFsfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2Nba2V5XSA9IHIuaWRlYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGMuYWR2YW5jZWQucHVzaChvYyk7XG4gICAgICAgICAgZGVsZXRlIHIuaWRlYWw7XG4gICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhyKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChyZXF1aXJlLmxlbmd0aCkge1xuICAgICAgICBjLnJlcXVpcmUgPSByZXF1aXJlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGM7XG4gICAgfTtcbiAgICBpZiAod2VicnRjRGV0ZWN0ZWRWZXJzaW9uIDwgMzgpIHtcbiAgICAgIHdlYnJ0Y1V0aWxzLmxvZygnc3BlYzogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgICBpZiAoY29uc3RyYWludHMuYXVkaW8pIHtcbiAgICAgICAgY29uc3RyYWludHMuYXVkaW8gPSBjb25zdHJhaW50c1RvRkYzNyhjb25zdHJhaW50cy5hdWRpbyk7XG4gICAgICB9XG4gICAgICBpZiAoY29uc3RyYWludHMudmlkZW8pIHtcbiAgICAgICAgY29uc3RyYWludHMudmlkZW8gPSBjb25zdHJhaW50c1RvRkYzNyhjb25zdHJhaW50cy52aWRlbyk7XG4gICAgICB9XG4gICAgICB3ZWJydGNVdGlscy5sb2coJ2ZmMzc6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIH1cbiAgICByZXR1cm4gbmF2aWdhdG9yLm1vekdldFVzZXJNZWRpYShjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKTtcbiAgfTtcblxuICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZ2V0VXNlck1lZGlhO1xuXG4gIC8vIFNoaW0gZm9yIG1lZGlhRGV2aWNlcyBvbiBvbGRlciB2ZXJzaW9ucy5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyA9IHtnZXRVc2VyTWVkaWE6IHJlcXVlc3RVc2VyTWVkaWEsXG4gICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigpIHsgfSxcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkgeyB9XG4gICAgfTtcbiAgfVxuICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgPVxuICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzIHx8IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICB2YXIgaW5mb3MgPSBbXG4gICAgICAgIHtraW5kOiAnYXVkaW9pbnB1dCcsIGRldmljZUlkOiAnZGVmYXVsdCcsIGxhYmVsOiAnJywgZ3JvdXBJZDogJyd9LFxuICAgICAgICB7a2luZDogJ3ZpZGVvaW5wdXQnLCBkZXZpY2VJZDogJ2RlZmF1bHQnLCBsYWJlbDogJycsIGdyb3VwSWQ6ICcnfVxuICAgICAgXTtcbiAgICAgIHJlc29sdmUoaW5mb3MpO1xuICAgIH0pO1xuICB9O1xuXG4gIGlmICh3ZWJydGNEZXRlY3RlZFZlcnNpb24gPCA0MSkge1xuICAgIC8vIFdvcmsgYXJvdW5kIGh0dHA6Ly9idWd6aWwubGEvMTE2OTY2NVxuICAgIHZhciBvcmdFbnVtZXJhdGVEZXZpY2VzID1cbiAgICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzLmJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gb3JnRW51bWVyYXRlRGV2aWNlcygpLnRoZW4odW5kZWZpbmVkLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLm5hbWUgPT09ICdOb3RGb3VuZEVycm9yJykge1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxufSBlbHNlIGlmIChuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhICYmIHdpbmRvdy53ZWJraXRSVENQZWVyQ29ubmVjdGlvbikge1xuICB3ZWJydGNVdGlscy5sb2coJ1RoaXMgYXBwZWFycyB0byBiZSBDaHJvbWUnKTtcblxuICB3ZWJydGNEZXRlY3RlZEJyb3dzZXIgPSAnY2hyb21lJztcblxuICAvLyB0aGUgZGV0ZWN0ZWQgY2hyb21lIHZlcnNpb24uXG4gIHdlYnJ0Y0RldGVjdGVkVmVyc2lvbiA9IHdlYnJ0Y1V0aWxzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAvQ2hyb20oZXxpdW0pXFwvKFswLTldKylcXC4vLCAyKTtcblxuICAvLyB0aGUgbWluaW11bSBjaHJvbWUgdmVyc2lvbiBzdGlsbCBzdXBwb3J0ZWQgYnkgYWRhcHRlci5cbiAgd2VicnRjTWluaW11bVZlcnNpb24gPSAzODtcblxuICAvLyBUaGUgUlRDUGVlckNvbm5lY3Rpb24gb2JqZWN0LlxuICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gPSBmdW5jdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cykge1xuICAgIC8vIFRyYW5zbGF0ZSBpY2VUcmFuc3BvcnRQb2xpY3kgdG8gaWNlVHJhbnNwb3J0cyxcbiAgICAvLyBzZWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC93ZWJydGMvaXNzdWVzL2RldGFpbD9pZD00ODY5XG4gICAgaWYgKHBjQ29uZmlnICYmIHBjQ29uZmlnLmljZVRyYW5zcG9ydFBvbGljeSkge1xuICAgICAgcGNDb25maWcuaWNlVHJhbnNwb3J0cyA9IHBjQ29uZmlnLmljZVRyYW5zcG9ydFBvbGljeTtcbiAgICB9XG5cbiAgICB2YXIgcGMgPSBuZXcgd2Via2l0UlRDUGVlckNvbm5lY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpOyAvLyBqc2NzOmlnbm9yZSByZXF1aXJlQ2FwaXRhbGl6ZWRDb25zdHJ1Y3RvcnNcbiAgICB2YXIgb3JpZ0dldFN0YXRzID0gcGMuZ2V0U3RhdHMuYmluZChwYyk7XG4gICAgcGMuZ2V0U3RhdHMgPSBmdW5jdGlvbihzZWxlY3Rvciwgc3VjY2Vzc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7IC8vIGpzaGludCBpZ25vcmU6IGxpbmVcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAvLyBJZiBzZWxlY3RvciBpcyBhIGZ1bmN0aW9uIHRoZW4gd2UgYXJlIGluIHRoZSBvbGQgc3R5bGUgc3RhdHMgc28ganVzdFxuICAgICAgLy8gcGFzcyBiYWNrIHRoZSBvcmlnaW5hbCBnZXRTdGF0cyBmb3JtYXQgdG8gYXZvaWQgYnJlYWtpbmcgb2xkIHVzZXJzLlxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIHR5cGVvZiBzZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzKHNlbGVjdG9yLCBzdWNjZXNzQ2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICB2YXIgZml4Q2hyb21lU3RhdHMgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB2YXIgc3RhbmRhcmRSZXBvcnQgPSB7fTtcbiAgICAgICAgdmFyIHJlcG9ydHMgPSByZXNwb25zZS5yZXN1bHQoKTtcbiAgICAgICAgcmVwb3J0cy5mb3JFYWNoKGZ1bmN0aW9uKHJlcG9ydCkge1xuICAgICAgICAgIHZhciBzdGFuZGFyZFN0YXRzID0ge1xuICAgICAgICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogcmVwb3J0LnRpbWVzdGFtcCxcbiAgICAgICAgICAgIHR5cGU6IHJlcG9ydC50eXBlXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXBvcnQubmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHN0YW5kYXJkU3RhdHNbbmFtZV0gPSByZXBvcnQuc3RhdChuYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzdGFuZGFyZFJlcG9ydFtzdGFuZGFyZFN0YXRzLmlkXSA9IHN0YW5kYXJkU3RhdHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdGFuZGFyZFJlcG9ydDtcbiAgICAgIH07XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID49IDIpIHtcbiAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFja1dyYXBwZXIgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGFyZ3NbMV0oZml4Q2hyb21lU3RhdHMocmVzcG9uc2UpKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3JpZ0dldFN0YXRzLmFwcGx5KHRoaXMsIFtzdWNjZXNzQ2FsbGJhY2tXcmFwcGVyLCBhcmd1bWVudHNbMF1dKTtcbiAgICAgIH1cblxuICAgICAgLy8gcHJvbWlzZS1zdXBwb3J0XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiBzZWxlY3RvciA9PT0gbnVsbCkge1xuICAgICAgICAgIG9yaWdHZXRTdGF0cy5hcHBseShzZWxmLCBbXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZS5hcHBseShudWxsLCBbZml4Q2hyb21lU3RhdHMocmVzcG9uc2UpXSk7XG4gICAgICAgICAgICAgIH0sIHJlamVjdF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9yaWdHZXRTdGF0cy5hcHBseShzZWxmLCBbcmVzb2x2ZSwgcmVqZWN0XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gcGM7XG4gIH07XG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUgPSB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gd3JhcCBzdGF0aWMgbWV0aG9kcy4gQ3VycmVudGx5IGp1c3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5cbiAgaWYgKHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLCAnZ2VuZXJhdGVDZXJ0aWZpY2F0ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGUuYXBwbHkobnVsbCxcbiAgICAgICAgICAgICAgYXJndW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gd2Via2l0UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gYWRkIHByb21pc2Ugc3VwcG9ydFxuICBbJ2NyZWF0ZU9mZmVyJywgJ2NyZWF0ZUFuc3dlciddLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdmFyIG5hdGl2ZU1ldGhvZCA9IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdO1xuICAgIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICB0eXBlb2YoYXJndW1lbnRzWzBdKSA9PT0gJ29iamVjdCcpKSB7XG4gICAgICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIG5hdGl2ZU1ldGhvZC5hcHBseShzZWxmLCBbcmVzb2x2ZSwgcmVqZWN0LCBvcHRzXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5hdGl2ZU1ldGhvZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIFsnc2V0TG9jYWxEZXNjcmlwdGlvbicsICdzZXRSZW1vdGVEZXNjcmlwdGlvbicsXG4gICAgICAnYWRkSWNlQ2FuZGlkYXRlJ10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgbmF0aXZlTWV0aG9kID0gd2Via2l0UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgd2Via2l0UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBuYXRpdmVNZXRob2QuYXBwbHkoc2VsZiwgW2FyZ3NbMF0sXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPj0gMikge1xuICAgICAgICAgICAgICAgIGFyZ3NbMV0uYXBwbHkobnVsbCwgW10pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgICAgIGFyZ3NbMl0uYXBwbHkobnVsbCwgW2Vycl0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcblxuICAvLyBnZXRVc2VyTWVkaWEgY29uc3RyYWludHMgc2hpbS5cbiAgdmFyIGNvbnN0cmFpbnRzVG9DaHJvbWUgPSBmdW5jdGlvbihjKSB7XG4gICAgaWYgKHR5cGVvZiBjICE9PSAnb2JqZWN0JyB8fCBjLm1hbmRhdG9yeSB8fCBjLm9wdGlvbmFsKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgdmFyIGNjID0ge307XG4gICAgT2JqZWN0LmtleXMoYykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZXF1aXJlJyB8fCBrZXkgPT09ICdhZHZhbmNlZCcgfHwga2V5ID09PSAnbWVkaWFTb3VyY2UnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByID0gKHR5cGVvZiBjW2tleV0gPT09ICdvYmplY3QnKSA/IGNba2V5XSA6IHtpZGVhbDogY1trZXldfTtcbiAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHIuZXhhY3QgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHIubWluID0gci5tYXggPSByLmV4YWN0O1xuICAgICAgfVxuICAgICAgdmFyIG9sZG5hbWUgPSBmdW5jdGlvbihwcmVmaXgsIG5hbWUpIHtcbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgIHJldHVybiBwcmVmaXggKyBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5hbWUgPT09ICdkZXZpY2VJZCcpID8gJ3NvdXJjZUlkJyA6IG5hbWU7XG4gICAgICB9O1xuICAgICAgaWYgKHIuaWRlYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYy5vcHRpb25hbCA9IGNjLm9wdGlvbmFsIHx8IFtdO1xuICAgICAgICB2YXIgb2MgPSB7fTtcbiAgICAgICAgaWYgKHR5cGVvZiByLmlkZWFsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG9jW29sZG5hbWUoJ21pbicsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgICBvYyA9IHt9O1xuICAgICAgICAgIG9jW29sZG5hbWUoJ21heCcsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY1tvbGRuYW1lKCcnLCBrZXkpXSA9IHIuaWRlYWw7XG4gICAgICAgICAgY2Mub3B0aW9uYWwucHVzaChvYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHIuZXhhY3QgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGNjLm1hbmRhdG9yeSA9IGNjLm1hbmRhdG9yeSB8fCB7fTtcbiAgICAgICAgY2MubWFuZGF0b3J5W29sZG5hbWUoJycsIGtleSldID0gci5leGFjdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFsnbWluJywgJ21heCddLmZvckVhY2goZnVuY3Rpb24obWl4KSB7XG4gICAgICAgICAgaWYgKHJbbWl4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjYy5tYW5kYXRvcnkgPSBjYy5tYW5kYXRvcnkgfHwge307XG4gICAgICAgICAgICBjYy5tYW5kYXRvcnlbb2xkbmFtZShtaXgsIGtleSldID0gclttaXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGMuYWR2YW5jZWQpIHtcbiAgICAgIGNjLm9wdGlvbmFsID0gKGNjLm9wdGlvbmFsIHx8IFtdKS5jb25jYXQoYy5hZHZhbmNlZCk7XG4gICAgfVxuICAgIHJldHVybiBjYztcbiAgfTtcblxuICBnZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKSB7XG4gICAgaWYgKGNvbnN0cmFpbnRzLmF1ZGlvKSB7XG4gICAgICBjb25zdHJhaW50cy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWUoY29uc3RyYWludHMuYXVkaW8pO1xuICAgIH1cbiAgICBpZiAoY29uc3RyYWludHMudmlkZW8pIHtcbiAgICAgIGNvbnN0cmFpbnRzLnZpZGVvID0gY29uc3RyYWludHNUb0Nocm9tZShjb25zdHJhaW50cy52aWRlbyk7XG4gICAgfVxuICAgIHdlYnJ0Y1V0aWxzLmxvZygnY2hyb21lOiAnICsgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICByZXR1cm4gbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYShjb25zdHJhaW50cywgb25TdWNjZXNzLCBvbkVycm9yKTtcbiAgfTtcbiAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IGdldFVzZXJNZWRpYTtcblxuICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzID0ge2dldFVzZXJNZWRpYTogcmVxdWVzdFVzZXJNZWRpYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmF0ZURldmljZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgdmFyIGtpbmRzID0ge2F1ZGlvOiAnYXVkaW9pbnB1dCcsIHZpZGVvOiAndmlkZW9pbnB1dCd9O1xuICAgICAgICByZXR1cm4gTWVkaWFTdHJlYW1UcmFjay5nZXRTb3VyY2VzKGZ1bmN0aW9uKGRldmljZXMpIHtcbiAgICAgICAgICByZXNvbHZlKGRldmljZXMubWFwKGZ1bmN0aW9uKGRldmljZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtsYWJlbDogZGV2aWNlLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBraW5kOiBraW5kc1tkZXZpY2Uua2luZF0sXG4gICAgICAgICAgICAgICAgICAgIGRldmljZUlkOiBkZXZpY2UuaWQsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6ICcnfTtcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfX07XG4gIH1cblxuICAvLyBBIHNoaW0gZm9yIGdldFVzZXJNZWRpYSBtZXRob2Qgb24gdGhlIG1lZGlhRGV2aWNlcyBvYmplY3QuXG4gIC8vIFRPRE8oS2FwdGVuSmFuc3NvbikgcmVtb3ZlIG9uY2UgaW1wbGVtZW50ZWQgaW4gQ2hyb21lIHN0YWJsZS5cbiAgaWYgKCFuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIEV2ZW4gdGhvdWdoIENocm9tZSA0NSBoYXMgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcyBhbmQgYSBnZXRVc2VyTWVkaWFcbiAgICAvLyBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgUHJvbWlzZSwgaXQgZG9lcyBub3QgYWNjZXB0IHNwZWMtc3R5bGVcbiAgICAvLyBjb25zdHJhaW50cy5cbiAgICB2YXIgb3JpZ0dldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhLlxuICAgICAgICBiaW5kKG5hdmlnYXRvci5tZWRpYURldmljZXMpO1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oYykge1xuICAgICAgd2VicnRjVXRpbHMubG9nKCdzcGVjOiAgICcgKyBKU09OLnN0cmluZ2lmeShjKSk7IC8vIHdoaXRlc3BhY2UgZm9yIGFsaWdubWVudFxuICAgICAgYy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9DaHJvbWUoYy5hdWRpbyk7XG4gICAgICBjLnZpZGVvID0gY29uc3RyYWludHNUb0Nocm9tZShjLnZpZGVvKTtcbiAgICAgIHdlYnJ0Y1V0aWxzLmxvZygnY2hyb21lOiAnICsgSlNPTi5zdHJpbmdpZnkoYykpO1xuICAgICAgcmV0dXJuIG9yaWdHZXRVc2VyTWVkaWEoYyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIER1bW15IGRldmljZWNoYW5nZSBldmVudCBtZXRob2RzLlxuICAvLyBUT0RPKEthcHRlbkphbnNzb24pIHJlbW92ZSBvbmNlIGltcGxlbWVudGVkIGluIENocm9tZSBzdGFibGUuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgd2VicnRjVXRpbHMubG9nKCdEdW1teSBtZWRpYURldmljZXMuYWRkRXZlbnRMaXN0ZW5lciBjYWxsZWQuJyk7XG4gICAgfTtcbiAgfVxuICBpZiAodHlwZW9mIG5hdmlnYXRvci5tZWRpYURldmljZXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHdlYnJ0Y1V0aWxzLmxvZygnRHVtbXkgbWVkaWFEZXZpY2VzLnJlbW92ZUV2ZW50TGlzdGVuZXIgY2FsbGVkLicpO1xuICAgIH07XG4gIH1cblxuICAvLyBBdHRhY2ggYSBtZWRpYSBzdHJlYW0gdG8gYW4gZWxlbWVudC5cbiAgYXR0YWNoTWVkaWFTdHJlYW0gPSBmdW5jdGlvbihlbGVtZW50LCBzdHJlYW0pIHtcbiAgICBpZiAod2VicnRjRGV0ZWN0ZWRWZXJzaW9uID49IDQzKSB7XG4gICAgICBlbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50LnNyYyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGVsZW1lbnQuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3ZWJydGNVdGlscy5sb2coJ0Vycm9yIGF0dGFjaGluZyBzdHJlYW0gdG8gZWxlbWVudC4nKTtcbiAgICB9XG4gIH07XG4gIHJlYXR0YWNoTWVkaWFTdHJlYW0gPSBmdW5jdGlvbih0bywgZnJvbSkge1xuICAgIGlmICh3ZWJydGNEZXRlY3RlZFZlcnNpb24gPj0gNDMpIHtcbiAgICAgIHRvLnNyY09iamVjdCA9IGZyb20uc3JjT2JqZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0by5zcmMgPSBmcm9tLnNyYztcbiAgICB9XG4gIH07XG5cbn0gZWxzZSBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKFxuICAgIC9FZGdlXFwvKFxcZCspLihcXGQrKSQvKSkge1xuICB3ZWJydGNVdGlscy5sb2coJ1RoaXMgYXBwZWFycyB0byBiZSBFZGdlJyk7XG4gIHdlYnJ0Y0RldGVjdGVkQnJvd3NlciA9ICdlZGdlJztcblxuICB3ZWJydGNEZXRlY3RlZFZlcnNpb24gPSB3ZWJydGNVdGlscy5leHRyYWN0VmVyc2lvbihuYXZpZ2F0b3IudXNlckFnZW50LFxuICAgICAgL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8sIDIpO1xuXG4gIC8vIFRoZSBtaW5pbXVtIHZlcnNpb24gc3RpbGwgc3VwcG9ydGVkIGJ5IGFkYXB0ZXIuXG4gIC8vIFRoaXMgaXMgdGhlIGJ1aWxkIG51bWJlciBmb3IgRWRnZS5cbiAgd2VicnRjTWluaW11bVZlcnNpb24gPSAxMDU0NztcblxuICBpZiAod2luZG93LlJUQ0ljZUdhdGhlcmVyKSB7XG4gICAgLy8gR2VuZXJhdGUgYW4gYWxwaGFudW1lcmljIGlkZW50aWZpZXIgZm9yIGNuYW1lIG9yIG1pZHMuXG4gICAgLy8gVE9ETzogdXNlIFVVSURzIGluc3RlYWQ/IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2plZC85ODI4ODNcbiAgICB2YXIgZ2VuZXJhdGVJZGVudGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDEwKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIFJUQ1AgQ05BTUUgdXNlZCBieSBhbGwgcGVlcmNvbm5lY3Rpb25zIGZyb20gdGhlIHNhbWUgSlMuXG4gICAgdmFyIGxvY2FsQ05hbWUgPSBnZW5lcmF0ZUlkZW50aWZpZXIoKTtcblxuICAgIC8vIFNEUCBoZWxwZXJzIC0gdG8gYmUgbW92ZWQgaW50byBzZXBhcmF0ZSBtb2R1bGUuXG4gICAgdmFyIFNEUFV0aWxzID0ge307XG5cbiAgICAvLyBTcGxpdHMgU0RQIGludG8gbGluZXMsIGRlYWxpbmcgd2l0aCBib3RoIENSTEYgYW5kIExGLlxuICAgIFNEUFV0aWxzLnNwbGl0TGluZXMgPSBmdW5jdGlvbihibG9iKSB7XG4gICAgICByZXR1cm4gYmxvYi50cmltKCkuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIHJldHVybiBsaW5lLnRyaW0oKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBTcGxpdHMgU0RQIGludG8gc2Vzc2lvbnBhcnQgYW5kIG1lZGlhc2VjdGlvbnMuIEVuc3VyZXMgQ1JMRi5cbiAgICBTRFBVdGlscy5zcGxpdFNlY3Rpb25zID0gZnVuY3Rpb24oYmxvYikge1xuICAgICAgdmFyIHBhcnRzID0gYmxvYi5zcGxpdCgnXFxyXFxubT0nKTtcbiAgICAgIHJldHVybiBwYXJ0cy5tYXAoZnVuY3Rpb24ocGFydCwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIChpbmRleCA+IDAgPyAnbT0nICsgcGFydCA6IHBhcnQpLnRyaW0oKSArICdcXHJcXG4nO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFJldHVybnMgbGluZXMgdGhhdCBzdGFydCB3aXRoIGEgY2VydGFpbiBwcmVmaXguXG4gICAgU0RQVXRpbHMubWF0Y2hQcmVmaXggPSBmdW5jdGlvbihibG9iLCBwcmVmaXgpIHtcbiAgICAgIHJldHVybiBTRFBVdGlscy5zcGxpdExpbmVzKGJsb2IpLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIHJldHVybiBsaW5lLmluZGV4T2YocHJlZml4KSA9PT0gMDtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZXMgYW4gSUNFIGNhbmRpZGF0ZSBsaW5lLiBTYW1wbGUgaW5wdXQ6XG4gICAgLy8gY2FuZGlkYXRlOjcwMjc4NjM1MCAyIHVkcCA0MTgxOTkwMiA4LjguOC44IDYwNzY5IHR5cCByZWxheSByYWRkciA4LjguOC44IHJwb3J0IDU1OTk2XCJcbiAgICBTRFBVdGlscy5wYXJzZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cztcbiAgICAgIC8vIFBhcnNlIGJvdGggdmFyaWFudHMuXG4gICAgICBpZiAobGluZS5pbmRleE9mKCdhPWNhbmRpZGF0ZTonKSA9PT0gMCkge1xuICAgICAgICBwYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKDEyKS5zcGxpdCgnICcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMgPSBsaW5lLnN1YnN0cmluZygxMCkuc3BsaXQoJyAnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNhbmRpZGF0ZSA9IHtcbiAgICAgICAgZm91bmRhdGlvbjogcGFydHNbMF0sXG4gICAgICAgIGNvbXBvbmVudDogcGFydHNbMV0sXG4gICAgICAgIHByb3RvY29sOiBwYXJ0c1syXS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICBwcmlvcml0eTogcGFyc2VJbnQocGFydHNbM10sIDEwKSxcbiAgICAgICAgaXA6IHBhcnRzWzRdLFxuICAgICAgICBwb3J0OiBwYXJzZUludChwYXJ0c1s1XSwgMTApLFxuICAgICAgICAvLyBza2lwIHBhcnRzWzZdID09ICd0eXAnXG4gICAgICAgIHR5cGU6IHBhcnRzWzddXG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBpID0gODsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHN3aXRjaCAocGFydHNbaV0pIHtcbiAgICAgICAgICBjYXNlICdyYWRkcic6XG4gICAgICAgICAgICBjYW5kaWRhdGUucmVsYXRlZEFkZHJlc3MgPSBwYXJ0c1tpICsgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdycG9ydCc6XG4gICAgICAgICAgICBjYW5kaWRhdGUucmVsYXRlZFBvcnQgPSBwYXJzZUludChwYXJ0c1tpICsgMV0sIDEwKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3RjcHR5cGUnOlxuICAgICAgICAgICAgY2FuZGlkYXRlLnRjcFR5cGUgPSBwYXJ0c1tpICsgMV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OiAvLyBVbmtub3duIGV4dGVuc2lvbnMgYXJlIHNpbGVudGx5IGlnbm9yZWQuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICB9O1xuXG4gICAgLy8gVHJhbnNsYXRlcyBhIGNhbmRpZGF0ZSBvYmplY3QgaW50byBTRFAgY2FuZGlkYXRlIGF0dHJpYnV0ZS5cbiAgICBTRFBVdGlscy53cml0ZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGNhbmRpZGF0ZSkge1xuICAgICAgdmFyIHNkcCA9IFtdO1xuICAgICAgc2RwLnB1c2goY2FuZGlkYXRlLmZvdW5kYXRpb24pO1xuICAgICAgc2RwLnB1c2goY2FuZGlkYXRlLmNvbXBvbmVudCk7XG4gICAgICBzZHAucHVzaChjYW5kaWRhdGUucHJvdG9jb2wudG9VcHBlckNhc2UoKSk7XG4gICAgICBzZHAucHVzaChjYW5kaWRhdGUucHJpb3JpdHkpO1xuICAgICAgc2RwLnB1c2goY2FuZGlkYXRlLmlwKTtcbiAgICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS5wb3J0KTtcblxuICAgICAgdmFyIHR5cGUgPSBjYW5kaWRhdGUudHlwZTtcbiAgICAgIHNkcC5wdXNoKCd0eXAnKTtcbiAgICAgIHNkcC5wdXNoKHR5cGUpO1xuICAgICAgaWYgKHR5cGUgIT09ICdob3N0JyAmJiBjYW5kaWRhdGUucmVsYXRlZEFkZHJlc3MgJiZcbiAgICAgICAgICBjYW5kaWRhdGUucmVsYXRlZFBvcnQpIHtcbiAgICAgICAgc2RwLnB1c2goJ3JhZGRyJyk7XG4gICAgICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyk7IC8vIHdhczogcmVsQWRkclxuICAgICAgICBzZHAucHVzaCgncnBvcnQnKTtcbiAgICAgICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRQb3J0KTsgLy8gd2FzOiByZWxQb3J0XG4gICAgICB9XG4gICAgICBpZiAoY2FuZGlkYXRlLnRjcFR5cGUgJiYgY2FuZGlkYXRlLnByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT09ICd0Y3AnKSB7XG4gICAgICAgIHNkcC5wdXNoKCd0Y3B0eXBlJyk7XG4gICAgICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS50Y3BUeXBlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnY2FuZGlkYXRlOicgKyBzZHAuam9pbignICcpO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZXMgYW4gcnRwbWFwIGxpbmUsIHJldHVybnMgUlRDUnRwQ29kZGVjUGFyYW1ldGVycy4gU2FtcGxlIGlucHV0OlxuICAgIC8vIGE9cnRwbWFwOjExMSBvcHVzLzQ4MDAwLzJcbiAgICBTRFBVdGlscy5wYXJzZVJ0cE1hcCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKDkpLnNwbGl0KCcgJyk7XG4gICAgICB2YXIgcGFyc2VkID0ge1xuICAgICAgICBwYXlsb2FkVHlwZTogcGFyc2VJbnQocGFydHMuc2hpZnQoKSwgMTApIC8vIHdhczogaWRcbiAgICAgIH07XG5cbiAgICAgIHBhcnRzID0gcGFydHNbMF0uc3BsaXQoJy8nKTtcblxuICAgICAgcGFyc2VkLm5hbWUgPSBwYXJ0c1swXTtcbiAgICAgIHBhcnNlZC5jbG9ja1JhdGUgPSBwYXJzZUludChwYXJ0c1sxXSwgMTApOyAvLyB3YXM6IGNsb2NrcmF0ZVxuICAgICAgcGFyc2VkLm51bUNoYW5uZWxzID0gcGFydHMubGVuZ3RoID09PSAzID8gcGFyc2VJbnQocGFydHNbMl0sIDEwKSA6IDE7IC8vIHdhczogY2hhbm5lbHNcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfTtcblxuICAgIC8vIEdlbmVyYXRlIGFuIGE9cnRwbWFwIGxpbmUgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3IgUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuICAgIFNEUFV0aWxzLndyaXRlUnRwTWFwID0gZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgIHZhciBwdCA9IGNvZGVjLnBheWxvYWRUeXBlO1xuICAgICAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnYT1ydHBtYXA6JyArIHB0ICsgJyAnICsgY29kZWMubmFtZSArICcvJyArIGNvZGVjLmNsb2NrUmF0ZSArXG4gICAgICAgICAgKGNvZGVjLm51bUNoYW5uZWxzICE9PSAxID8gJy8nICsgY29kZWMubnVtQ2hhbm5lbHMgOiAnJykgKyAnXFxyXFxuJztcbiAgICB9O1xuXG4gICAgLy8gUGFyc2VzIGFuIGZ0bXAgbGluZSwgcmV0dXJucyBkaWN0aW9uYXJ5LiBTYW1wbGUgaW5wdXQ6XG4gICAgLy8gYT1mbXRwOjk2IHZicj1vbjtjbmc9b25cbiAgICAvLyBBbHNvIGRlYWxzIHdpdGggdmJyPW9uOyBjbmc9b25cbiAgICBTRFBVdGlscy5wYXJzZUZtdHAgPSBmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFyc2VkID0ge307XG4gICAgICB2YXIga3Y7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cihsaW5lLmluZGV4T2YoJyAnKSArIDEpLnNwbGl0KCc7Jyk7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGt2ID0gcGFydHNbal0udHJpbSgpLnNwbGl0KCc9Jyk7XG4gICAgICAgIHBhcnNlZFtrdlswXS50cmltKCldID0ga3ZbMV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH07XG5cbiAgICAvLyBHZW5lcmF0ZXMgYW4gYT1mdG1wIGxpbmUgZnJvbSBSVENSdHBDb2RlY0NhcGFiaWxpdHkgb3IgUlRDUnRwQ29kZWNQYXJhbWV0ZXJzLlxuICAgIFNEUFV0aWxzLndyaXRlRnRtcCA9IGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICB2YXIgbGluZSA9ICcnO1xuICAgICAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gICAgICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwdCA9IGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICAgICAgfVxuICAgICAgaWYgKGNvZGVjLnBhcmFtZXRlcnMgJiYgY29kZWMucGFyYW1ldGVycy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICBPYmplY3Qua2V5cyhjb2RlYy5wYXJhbWV0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgICAgICAgcGFyYW1zLnB1c2gocGFyYW0gKyAnPScgKyBjb2RlYy5wYXJhbWV0ZXJzW3BhcmFtXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsaW5lICs9ICdhPWZtdHA6JyArIHB0ICsgJyAnICsgcGFyYW1zLmpvaW4oJzsnKSArICdcXHJcXG4nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlcyBhbiBydGNwLWZiIGxpbmUsIHJldHVybnMgUlRDUFJ0Y3BGZWVkYmFjayBvYmplY3QuIFNhbXBsZSBpbnB1dDpcbiAgICAvLyBhPXJ0Y3AtZmI6OTggbmFjayBycHNpXG4gICAgU0RQVXRpbHMucGFyc2VSdGNwRmIgPSBmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnN1YnN0cihsaW5lLmluZGV4T2YoJyAnKSArIDEpLnNwbGl0KCcgJyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBwYXJ0cy5zaGlmdCgpLFxuICAgICAgICBwYXJhbWV0ZXI6IHBhcnRzLmpvaW4oJyAnKVxuICAgICAgfTtcbiAgICB9O1xuICAgIC8vIEdlbmVyYXRlIGE9cnRjcC1mYiBsaW5lcyBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvciBSVENSdHBDb2RlY1BhcmFtZXRlcnMuXG4gICAgU0RQVXRpbHMud3JpdGVSdGNwRmIgPSBmdW5jdGlvbihjb2RlYykge1xuICAgICAgdmFyIGxpbmVzID0gJyc7XG4gICAgICB2YXIgcHQgPSBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgICAgIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHB0ID0gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gICAgICB9XG4gICAgICBpZiAoY29kZWMucnRjcEZlZWRiYWNrICYmIGNvZGVjLnJ0Y3BGZWVkYmFjay5sZW5ndGgpIHtcbiAgICAgICAgLy8gRklYTUU6IHNwZWNpYWwgaGFuZGxpbmcgZm9yIHRyci1pbnQ/XG4gICAgICAgIGNvZGVjLnJ0Y3BGZWVkYmFjay5mb3JFYWNoKGZ1bmN0aW9uKGZiKSB7XG4gICAgICAgICAgbGluZXMgKz0gJ2E9cnRjcC1mYjonICsgcHQgKyAnICcgKyBmYi50eXBlICsgJyAnICsgZmIucGFyYW1ldGVyICtcbiAgICAgICAgICAgICAgJ1xcclxcbic7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZXMgYW4gUkZDIDU1NzYgc3NyYyBtZWRpYSBhdHRyaWJ1dGUuIFNhbXBsZSBpbnB1dDpcbiAgICAvLyBhPXNzcmM6MzczNTkyODU1OSBjbmFtZTpzb21ldGhpbmdcbiAgICBTRFBVdGlscy5wYXJzZVNzcmNNZWRpYSA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBzcCA9IGxpbmUuaW5kZXhPZignICcpO1xuICAgICAgdmFyIHBhcnRzID0ge1xuICAgICAgICBzc3JjOiBsaW5lLnN1YnN0cig3LCBzcCAtIDcpLFxuICAgICAgfTtcbiAgICAgIHZhciBjb2xvbiA9IGxpbmUuaW5kZXhPZignOicsIHNwKTtcbiAgICAgIGlmIChjb2xvbiA+IC0xKSB7XG4gICAgICAgIHBhcnRzLmF0dHJpYnV0ZSA9IGxpbmUuc3Vic3RyKHNwICsgMSwgY29sb24gLSBzcCAtIDEpO1xuICAgICAgICBwYXJ0cy52YWx1ZSA9IGxpbmUuc3Vic3RyKGNvbG9uICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0cy5hdHRyaWJ1dGUgPSBsaW5lLnN1YnN0cihzcCArIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhcnRzO1xuICAgIH07XG5cbiAgICAvLyBFeHRyYWN0cyBEVExTIHBhcmFtZXRlcnMgZnJvbSBTRFAgbWVkaWEgc2VjdGlvbiBvciBzZXNzaW9ucGFydC5cbiAgICAvLyBGSVhNRTogZm9yIGNvbnNpc3RlbmN5IHdpdGggb3RoZXIgZnVuY3Rpb25zIHRoaXMgc2hvdWxkIG9ubHlcbiAgICAvLyAgIGdldCB0aGUgZmluZ2VycHJpbnQgbGluZSBhcyBpbnB1dC4gU2VlIGFsc28gZ2V0SWNlUGFyYW1ldGVycy5cbiAgICBTRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgICAgIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgICAgIGxpbmVzID0gbGluZXMuY29uY2F0KFNEUFV0aWxzLnNwbGl0TGluZXMoc2Vzc2lvbnBhcnQpKTsgLy8gU2VhcmNoIGluIHNlc3Npb24gcGFydCwgdG9vLlxuICAgICAgdmFyIGZwTGluZSA9IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIHJldHVybiBsaW5lLmluZGV4T2YoJ2E9ZmluZ2VycHJpbnQ6JykgPT09IDA7XG4gICAgICB9KVswXS5zdWJzdHIoMTQpO1xuICAgICAgLy8gTm90ZTogYT1zZXR1cCBsaW5lIGlzIGlnbm9yZWQgc2luY2Ugd2UgdXNlIHRoZSAnYXV0bycgcm9sZS5cbiAgICAgIHZhciBkdGxzUGFyYW1ldGVycyA9IHtcbiAgICAgICAgcm9sZTogJ2F1dG8nLFxuICAgICAgICBmaW5nZXJwcmludHM6IFt7XG4gICAgICAgICAgYWxnb3JpdGhtOiBmcExpbmUuc3BsaXQoJyAnKVswXSxcbiAgICAgICAgICB2YWx1ZTogZnBMaW5lLnNwbGl0KCcgJylbMV1cbiAgICAgICAgfV1cbiAgICAgIH07XG4gICAgICByZXR1cm4gZHRsc1BhcmFtZXRlcnM7XG4gICAgfTtcblxuICAgIC8vIFNlcmlhbGl6ZXMgRFRMUyBwYXJhbWV0ZXJzIHRvIFNEUC5cbiAgICBTRFBVdGlscy53cml0ZUR0bHNQYXJhbWV0ZXJzID0gZnVuY3Rpb24ocGFyYW1zLCBzZXR1cFR5cGUpIHtcbiAgICAgIHZhciBzZHAgPSAnYT1zZXR1cDonICsgc2V0dXBUeXBlICsgJ1xcclxcbic7XG4gICAgICBwYXJhbXMuZmluZ2VycHJpbnRzLmZvckVhY2goZnVuY3Rpb24oZnApIHtcbiAgICAgICAgc2RwICs9ICdhPWZpbmdlcnByaW50OicgKyBmcC5hbGdvcml0aG0gKyAnICcgKyBmcC52YWx1ZSArICdcXHJcXG4nO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH07XG4gICAgLy8gUGFyc2VzIElDRSBpbmZvcm1hdGlvbiBmcm9tIFNEUCBtZWRpYSBzZWN0aW9uIG9yIHNlc3Npb25wYXJ0LlxuICAgIC8vIEZJWE1FOiBmb3IgY29uc2lzdGVuY3kgd2l0aCBvdGhlciBmdW5jdGlvbnMgdGhpcyBzaG91bGQgb25seVxuICAgIC8vICAgZ2V0IHRoZSBpY2UtdWZyYWcgYW5kIGljZS1wd2QgbGluZXMgYXMgaW5wdXQuXG4gICAgU0RQVXRpbHMuZ2V0SWNlUGFyYW1ldGVycyA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgICAgIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgICAgIGxpbmVzID0gbGluZXMuY29uY2F0KFNEUFV0aWxzLnNwbGl0TGluZXMoc2Vzc2lvbnBhcnQpKTsgLy8gU2VhcmNoIGluIHNlc3Npb24gcGFydCwgdG9vLlxuICAgICAgdmFyIGljZVBhcmFtZXRlcnMgPSB7XG4gICAgICAgIHVzZXJuYW1lRnJhZ21lbnQ6IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIGxpbmUuaW5kZXhPZignYT1pY2UtdWZyYWc6JykgPT09IDA7XG4gICAgICAgIH0pWzBdLnN1YnN0cigxMiksXG4gICAgICAgIHBhc3N3b3JkOiBsaW5lcy5maWx0ZXIoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgIHJldHVybiBsaW5lLmluZGV4T2YoJ2E9aWNlLXB3ZDonKSA9PT0gMDtcbiAgICAgICAgfSlbMF0uc3Vic3RyKDEwKVxuICAgICAgfTtcbiAgICAgIHJldHVybiBpY2VQYXJhbWV0ZXJzO1xuICAgIH07XG5cbiAgICAvLyBTZXJpYWxpemVzIElDRSBwYXJhbWV0ZXJzIHRvIFNEUC5cbiAgICBTRFBVdGlscy53cml0ZUljZVBhcmFtZXRlcnMgPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgIHJldHVybiAnYT1pY2UtdWZyYWc6JyArIHBhcmFtcy51c2VybmFtZUZyYWdtZW50ICsgJ1xcclxcbicgK1xuICAgICAgICAgICdhPWljZS1wd2Q6JyArIHBhcmFtcy5wYXNzd29yZCArICdcXHJcXG4nO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZXMgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGFuZCByZXR1cm5zIFJUQ1J0cFBhcmFtZXRlcnMuXG4gICAgU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uKSB7XG4gICAgICB2YXIgZGVzY3JpcHRpb24gPSB7XG4gICAgICAgIGNvZGVjczogW10sXG4gICAgICAgIGhlYWRlckV4dGVuc2lvbnM6IFtdLFxuICAgICAgICBmZWNNZWNoYW5pc21zOiBbXSxcbiAgICAgICAgcnRjcDogW11cbiAgICAgIH07XG4gICAgICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gICAgICB2YXIgbWxpbmUgPSBsaW5lc1swXS5zcGxpdCgnICcpO1xuICAgICAgZm9yICh2YXIgaSA9IDM7IGkgPCBtbGluZS5sZW5ndGg7IGkrKykgeyAvLyBmaW5kIGFsbCBjb2RlY3MgZnJvbSBtbGluZVszLi5dXG4gICAgICAgIHZhciBwdCA9IG1saW5lW2ldO1xuICAgICAgICB2YXIgcnRwbWFwbGluZSA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICAgICAgbWVkaWFTZWN0aW9uLCAnYT1ydHBtYXA6JyArIHB0ICsgJyAnKVswXTtcbiAgICAgICAgaWYgKHJ0cG1hcGxpbmUpIHtcbiAgICAgICAgICB2YXIgY29kZWMgPSBTRFBVdGlscy5wYXJzZVJ0cE1hcChydHBtYXBsaW5lKTtcbiAgICAgICAgICB2YXIgZm10cHMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChcbiAgICAgICAgICAgICAgbWVkaWFTZWN0aW9uLCAnYT1mbXRwOicgKyBwdCArICcgJyk7XG4gICAgICAgICAgLy8gT25seSB0aGUgZmlyc3QgYT1mbXRwOjxwdD4gaXMgY29uc2lkZXJlZC5cbiAgICAgICAgICBjb2RlYy5wYXJhbWV0ZXJzID0gZm10cHMubGVuZ3RoID8gU0RQVXRpbHMucGFyc2VGbXRwKGZtdHBzWzBdKSA6IHt9O1xuICAgICAgICAgIGNvZGVjLnJ0Y3BGZWVkYmFjayA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICAgICAgICBtZWRpYVNlY3Rpb24sICdhPXJ0Y3AtZmI6JyArIHB0ICsgJyAnKVxuICAgICAgICAgICAgLm1hcChTRFBVdGlscy5wYXJzZVJ0Y3BGYik7XG4gICAgICAgICAgZGVzY3JpcHRpb24uY29kZWNzLnB1c2goY29kZWMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBGSVhNRTogcGFyc2UgaGVhZGVyRXh0ZW5zaW9ucywgZmVjTWVjaGFuaXNtcyBhbmQgcnRjcC5cbiAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9O1xuXG4gICAgLy8gR2VuZXJhdGVzIHBhcnRzIG9mIHRoZSBTRFAgbWVkaWEgc2VjdGlvbiBkZXNjcmliaW5nIHRoZSBjYXBhYmlsaXRpZXMgLyBwYXJhbWV0ZXJzLlxuICAgIFNEUFV0aWxzLndyaXRlUnRwRGVzY3JpcHRpb24gPSBmdW5jdGlvbihraW5kLCBjYXBzKSB7XG4gICAgICB2YXIgc2RwID0gJyc7XG5cbiAgICAgIC8vIEJ1aWxkIHRoZSBtbGluZS5cbiAgICAgIHNkcCArPSAnbT0nICsga2luZCArICcgJztcbiAgICAgIHNkcCArPSBjYXBzLmNvZGVjcy5sZW5ndGggPiAwID8gJzknIDogJzAnOyAvLyByZWplY3QgaWYgbm8gY29kZWNzLlxuICAgICAgc2RwICs9ICcgVURQL1RMUy9SVFAvU0FWUEYgJztcbiAgICAgIHNkcCArPSBjYXBzLmNvZGVjcy5tYXAoZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvZGVjLnBheWxvYWRUeXBlO1xuICAgICAgfSkuam9pbignICcpICsgJ1xcclxcbic7XG5cbiAgICAgIHNkcCArPSAnYz1JTiBJUDQgMC4wLjAuMFxcclxcbic7XG4gICAgICBzZHAgKz0gJ2E9cnRjcDo5IElOIElQNCAwLjAuMC4wXFxyXFxuJztcblxuICAgICAgLy8gQWRkIGE9cnRwbWFwIGxpbmVzIGZvciBlYWNoIGNvZGVjLiBBbHNvIGZtdHAgYW5kIHJ0Y3AtZmIuXG4gICAgICBjYXBzLmNvZGVjcy5mb3JFYWNoKGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZVJ0cE1hcChjb2RlYyk7XG4gICAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUZ0bXAoY29kZWMpO1xuICAgICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVSdGNwRmIoY29kZWMpO1xuICAgICAgfSk7XG4gICAgICAvLyBGSVhNRTogYWRkIGhlYWRlckV4dGVuc2lvbnMsIGZlY01lY2hhbmlzbcWfIGFuZCBydGNwLlxuICAgICAgc2RwICs9ICdhPXJ0Y3AtbXV4XFxyXFxuJztcbiAgICAgIHJldHVybiBzZHA7XG4gICAgfTtcblxuICAgIFNEUFV0aWxzLndyaXRlU2Vzc2lvbkJvaWxlcnBsYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBGSVhNRTogc2Vzcy1pZCBzaG91bGQgYmUgYW4gTlRQIHRpbWVzdGFtcC5cbiAgICAgIHJldHVybiAndj0wXFxyXFxuJyArXG4gICAgICAgICAgJ289dGhpc2lzYWRhcHRlcm9ydGMgODE2OTYzOTkxNTY0Njk0MzEzNyAyIElOIElQNCAxMjcuMC4wLjFcXHJcXG4nICtcbiAgICAgICAgICAncz0tXFxyXFxuJyArXG4gICAgICAgICAgJ3Q9MCAwXFxyXFxuJztcbiAgICB9O1xuXG4gICAgU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24gPSBmdW5jdGlvbih0cmFuc2NlaXZlciwgY2FwcywgdHlwZSwgc3RyZWFtKSB7XG4gICAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVSdHBEZXNjcmlwdGlvbih0cmFuc2NlaXZlci5raW5kLCBjYXBzKTtcblxuICAgICAgLy8gTWFwIElDRSBwYXJhbWV0ZXJzICh1ZnJhZywgcHdkKSB0byBTRFAuXG4gICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVJY2VQYXJhbWV0ZXJzKFxuICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLmdldExvY2FsUGFyYW1ldGVycygpKTtcblxuICAgICAgLy8gTWFwIERUTFMgcGFyYW1ldGVycyB0byBTRFAuXG4gICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVEdGxzUGFyYW1ldGVycyhcbiAgICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LmdldExvY2FsUGFyYW1ldGVycygpLFxuICAgICAgICAgIHR5cGUgPT09ICdvZmZlcicgPyAnYWN0cGFzcycgOiAnYWN0aXZlJyk7XG5cbiAgICAgIHNkcCArPSAnYT1taWQ6JyArIHRyYW5zY2VpdmVyLm1pZCArICdcXHJcXG4nO1xuXG4gICAgICBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyICYmIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgICAgIHNkcCArPSAnYT1zZW5kcmVjdlxcclxcbic7XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgICAgICBzZHAgKz0gJ2E9c2VuZG9ubHlcXHJcXG4nO1xuICAgICAgfSBlbHNlIGlmICh0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgICBzZHAgKz0gJ2E9cmVjdm9ubHlcXHJcXG4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2RwICs9ICdhPWluYWN0aXZlXFxyXFxuJztcbiAgICAgIH1cblxuICAgICAgLy8gRklYTUU6IGZvciBSVFggdGhlcmUgbWlnaHQgYmUgbXVsdGlwbGUgU1NSQ3MuIE5vdCBpbXBsZW1lbnRlZCBpbiBFZGdlIHlldC5cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAgICAgdmFyIG1zaWQgPSAnbXNpZDonICsgc3RyZWFtLmlkICsgJyAnICtcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci50cmFjay5pZCArICdcXHJcXG4nO1xuICAgICAgICBzZHAgKz0gJ2E9JyArIG1zaWQ7XG4gICAgICAgIHNkcCArPSAnYT1zc3JjOicgKyB0cmFuc2NlaXZlci5zZW5kU3NyYyArICcgJyArIG1zaWQ7XG4gICAgICB9XG4gICAgICAvLyBGSVhNRTogdGhpcyBzaG91bGQgYmUgd3JpdHRlbiBieSB3cml0ZVJ0cERlc2NyaXB0aW9uLlxuICAgICAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRTc3JjICsgJyBjbmFtZTonICtcbiAgICAgICAgICBsb2NhbENOYW1lICsgJ1xcclxcbic7XG4gICAgICByZXR1cm4gc2RwO1xuICAgIH07XG5cbiAgICAvLyBHZXRzIHRoZSBkaXJlY3Rpb24gZnJvbSB0aGUgbWVkaWFTZWN0aW9uIG9yIHRoZSBzZXNzaW9ucGFydC5cbiAgICBTRFBVdGlscy5nZXREaXJlY3Rpb24gPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNlc3Npb25wYXJ0KSB7XG4gICAgICAvLyBMb29rIGZvciBzZW5kcmVjdiwgc2VuZG9ubHksIHJlY3Zvbmx5LCBpbmFjdGl2ZSwgZGVmYXVsdCB0byBzZW5kcmVjdi5cbiAgICAgIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3dpdGNoIChsaW5lc1tpXSkge1xuICAgICAgICAgIGNhc2UgJ2E9c2VuZHJlY3YnOlxuICAgICAgICAgIGNhc2UgJ2E9c2VuZG9ubHknOlxuICAgICAgICAgIGNhc2UgJ2E9cmVjdm9ubHknOlxuICAgICAgICAgIGNhc2UgJ2E9aW5hY3RpdmUnOlxuICAgICAgICAgICAgcmV0dXJuIGxpbmVzW2ldLnN1YnN0cigyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHNlc3Npb25wYXJ0KSB7XG4gICAgICAgIHJldHVybiBTRFBVdGlscy5nZXREaXJlY3Rpb24oc2Vzc2lvbnBhcnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdzZW5kcmVjdic7XG4gICAgfTtcblxuICAgIC8vIE9SVEMgZGVmaW5lcyBhbiBSVENJY2VDYW5kaWRhdGUgb2JqZWN0IGJ1dCBubyBjb25zdHJ1Y3Rvci5cbiAgICAvLyBOb3QgaW1wbGVtZW50ZWQgaW4gRWRnZS5cbiAgICBpZiAoIXdpbmRvdy5SVENJY2VDYW5kaWRhdGUpIHtcbiAgICAgIHdpbmRvdy5SVENJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbihhcmdzKSB7XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgfTtcbiAgICB9XG4gICAgLy8gT1JUQyBkb2VzIG5vdCBoYXZlIGEgc2Vzc2lvbiBkZXNjcmlwdGlvbiBvYmplY3QgYnV0XG4gICAgLy8gb3RoZXIgYnJvd3NlcnMgKGkuZS4gQ2hyb21lKSB0aGF0IHdpbGwgc3VwcG9ydCBib3RoIFBDIGFuZCBPUlRDXG4gICAgLy8gaW4gdGhlIGZ1dHVyZSBtaWdodCBoYXZlIHRoaXMgZGVmaW5lZCBhbHJlYWR5LlxuICAgIGlmICghd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbikge1xuICAgICAgd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICB0aGlzLm9uaWNlY2FuZGlkYXRlID0gbnVsbDtcbiAgICAgIHRoaXMub25hZGRzdHJlYW0gPSBudWxsO1xuICAgICAgdGhpcy5vbnJlbW92ZXN0cmVhbSA9IG51bGw7XG4gICAgICB0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgdGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICB0aGlzLm9ubmVnb3RpYXRpb25uZWVkZWQgPSBudWxsO1xuICAgICAgdGhpcy5vbmRhdGFjaGFubmVsID0gbnVsbDtcblxuICAgICAgdGhpcy5sb2NhbFN0cmVhbXMgPSBbXTtcbiAgICAgIHRoaXMucmVtb3RlU3RyZWFtcyA9IFtdO1xuICAgICAgdGhpcy5nZXRMb2NhbFN0cmVhbXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYubG9jYWxTdHJlYW1zOyB9O1xuICAgICAgdGhpcy5nZXRSZW1vdGVTdHJlYW1zID0gZnVuY3Rpb24oKSB7IHJldHVybiBzZWxmLnJlbW90ZVN0cmVhbXM7IH07XG5cbiAgICAgIHRoaXMubG9jYWxEZXNjcmlwdGlvbiA9IG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oe1xuICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgc2RwOiAnJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uID0gbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICBzZHA6ICcnXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2lnbmFsaW5nU3RhdGUgPSAnc3RhYmxlJztcbiAgICAgIHRoaXMuaWNlQ29ubmVjdGlvblN0YXRlID0gJ25ldyc7XG5cbiAgICAgIHRoaXMuaWNlT3B0aW9ucyA9IHtcbiAgICAgICAgZ2F0aGVyUG9saWN5OiAnYWxsJyxcbiAgICAgICAgaWNlU2VydmVyczogW11cbiAgICAgIH07XG4gICAgICBpZiAoY29uZmlnICYmIGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgICAgc3dpdGNoIChjb25maWcuaWNlVHJhbnNwb3J0UG9saWN5KSB7XG4gICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICBjYXNlICdyZWxheSc6XG4gICAgICAgICAgICB0aGlzLmljZU9wdGlvbnMuZ2F0aGVyUG9saWN5ID0gY29uZmlnLmljZVRyYW5zcG9ydFBvbGljeTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgLy8gRklYTUU6IHJlbW92ZSBvbmNlIGltcGxlbWVudGF0aW9uIGFuZCBzcGVjIGhhdmUgYWRkZWQgdGhpcy5cbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ljZVRyYW5zcG9ydFBvbGljeSBcIm5vbmVcIiBub3Qgc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmljZVNlcnZlcnMpIHtcbiAgICAgICAgLy8gRWRnZSBkb2VzIG5vdCBsaWtlXG4gICAgICAgIC8vIDEpIHN0dW46XG4gICAgICAgIC8vIDIpIHR1cm46IHRoYXQgZG9lcyBub3QgaGF2ZSBhbGwgb2YgdHVybjpob3N0OnBvcnQ/dHJhbnNwb3J0PXVkcFxuICAgICAgICAvLyAzKSBhbiBhcnJheSBvZiB1cmxzXG4gICAgICAgIGNvbmZpZy5pY2VTZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24oc2VydmVyKSB7XG4gICAgICAgICAgaWYgKHNlcnZlci51cmxzKSB7XG4gICAgICAgICAgICB2YXIgdXJsO1xuICAgICAgICAgICAgaWYgKHR5cGVvZihzZXJ2ZXIudXJscykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHVybCA9IHNlcnZlci51cmxzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdXJsID0gc2VydmVyLnVybHNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXJsLmluZGV4T2YoJ3RyYW5zcG9ydD11ZHAnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgc2VsZi5pY2VTZXJ2ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBzZXJ2ZXIudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgY3JlZGVudGlhbDogc2VydmVyLmNyZWRlbnRpYWwsXG4gICAgICAgICAgICAgICAgdXJsczogdXJsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIHBlci10cmFjayBpY2VHYXRoZXJzLCBpY2VUcmFuc3BvcnRzLCBkdGxzVHJhbnNwb3J0cywgcnRwU2VuZGVycywgLi4uXG4gICAgICAvLyBldmVyeXRoaW5nIHRoYXQgaXMgbmVlZGVkIHRvIGRlc2NyaWJlIGEgU0RQIG0tbGluZS5cbiAgICAgIHRoaXMudHJhbnNjZWl2ZXJzID0gW107XG5cbiAgICAgIC8vIHNpbmNlIHRoZSBpY2VHYXRoZXJlciBpcyBjdXJyZW50bHkgY3JlYXRlZCBpbiBjcmVhdGVPZmZlciBidXQgd2VcbiAgICAgIC8vIG11c3Qgbm90IGVtaXQgY2FuZGlkYXRlcyB1bnRpbCBhZnRlciBzZXRMb2NhbERlc2NyaXB0aW9uIHdlIGJ1ZmZlclxuICAgICAgLy8gdGhlbSBpbiB0aGlzIGFycmF5LlxuICAgICAgdGhpcy5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyID0gW107XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIC8vIEZJWE1FOiBuZWVkIHRvIGFwcGx5IGljZSBjYW5kaWRhdGVzIGluIGEgd2F5IHdoaWNoIGlzIGFzeW5jIGJ1dCBpbi1vcmRlclxuICAgICAgdGhpcy5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyLmZvckVhY2goZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHNlbGYub25pY2VjYW5kaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICBzZWxmLm9uaWNlY2FuZGlkYXRlKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIgPSBbXTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5hZGRTdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIC8vIENsb25lIGlzIG5lY2Vzc2FyeSBmb3IgbG9jYWwgZGVtb3MgbW9zdGx5LCBhdHRhY2hpbmcgZGlyZWN0bHlcbiAgICAgIC8vIHRvIHR3byBkaWZmZXJlbnQgc2VuZGVycyBkb2VzIG5vdCB3b3JrIChidWlsZCAxMDU0NykuXG4gICAgICB0aGlzLmxvY2FsU3RyZWFtcy5wdXNoKHN0cmVhbS5jbG9uZSgpKTtcbiAgICAgIHRoaXMuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkKCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUucmVtb3ZlU3RyZWFtID0gZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICB2YXIgaWR4ID0gdGhpcy5sb2NhbFN0cmVhbXMuaW5kZXhPZihzdHJlYW0pO1xuICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB0aGlzLl9tYXliZUZpcmVOZWdvdGlhdGlvbk5lZWRlZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBEZXRlcm1pbmVzIHRoZSBpbnRlcnNlY3Rpb24gb2YgbG9jYWwgYW5kIHJlbW90ZSBjYXBhYmlsaXRpZXMuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzID1cbiAgICAgICAgZnVuY3Rpb24obG9jYWxDYXBhYmlsaXRpZXMsIHJlbW90ZUNhcGFiaWxpdGllcykge1xuICAgICAgdmFyIGNvbW1vbkNhcGFiaWxpdGllcyA9IHtcbiAgICAgICAgY29kZWNzOiBbXSxcbiAgICAgICAgaGVhZGVyRXh0ZW5zaW9uczogW10sXG4gICAgICAgIGZlY01lY2hhbmlzbXM6IFtdXG4gICAgICB9O1xuICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24obENvZGVjKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3RlQ2FwYWJpbGl0aWVzLmNvZGVjcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciByQ29kZWMgPSByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzW2ldO1xuICAgICAgICAgIGlmIChsQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpID09PSByQ29kZWMubmFtZS50b0xvd2VyQ2FzZSgpICYmXG4gICAgICAgICAgICAgIGxDb2RlYy5jbG9ja1JhdGUgPT09IHJDb2RlYy5jbG9ja1JhdGUgJiZcbiAgICAgICAgICAgICAgbENvZGVjLm51bUNoYW5uZWxzID09PSByQ29kZWMubnVtQ2hhbm5lbHMpIHtcbiAgICAgICAgICAgIC8vIHB1c2ggckNvZGVjIHNvIHdlIHJlcGx5IHdpdGggb2ZmZXJlciBwYXlsb2FkIHR5cGVcbiAgICAgICAgICAgIGNvbW1vbkNhcGFiaWxpdGllcy5jb2RlY3MucHVzaChyQ29kZWMpO1xuXG4gICAgICAgICAgICAvLyBGSVhNRTogYWxzbyBuZWVkIHRvIGRldGVybWluZSBpbnRlcnNlY3Rpb24gYmV0d2VlblxuICAgICAgICAgICAgLy8gLnJ0Y3BGZWVkYmFjayBhbmQgLnBhcmFtZXRlcnNcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbihsSGVhZGVyRXh0ZW5zaW9uKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVtb3RlQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgckhlYWRlckV4dGVuc2lvbiA9IHJlbW90ZUNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zW2ldO1xuICAgICAgICAgIGlmIChsSGVhZGVyRXh0ZW5zaW9uLnVyaSA9PT0gckhlYWRlckV4dGVuc2lvbi51cmkpIHtcbiAgICAgICAgICAgIGNvbW1vbkNhcGFiaWxpdGllcy5oZWFkZXJFeHRlbnNpb25zLnB1c2gockhlYWRlckV4dGVuc2lvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBGSVhNRTogZmVjTWVjaGFuaXNtc1xuICAgICAgcmV0dXJuIGNvbW1vbkNhcGFiaWxpdGllcztcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIElDRSBnYXRoZXJlciwgSUNFIHRyYW5zcG9ydCBhbmQgRFRMUyB0cmFuc3BvcnQuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fY3JlYXRlSWNlQW5kRHRsc1RyYW5zcG9ydHMgPVxuICAgICAgICBmdW5jdGlvbihtaWQsIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBpY2VHYXRoZXJlciA9IG5ldyBSVENJY2VHYXRoZXJlcihzZWxmLmljZU9wdGlvbnMpO1xuICAgICAgdmFyIGljZVRyYW5zcG9ydCA9IG5ldyBSVENJY2VUcmFuc3BvcnQoaWNlR2F0aGVyZXIpO1xuICAgICAgaWNlR2F0aGVyZXIub25sb2NhbGNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICB2YXIgZXZlbnQgPSB7fTtcbiAgICAgICAgZXZlbnQuY2FuZGlkYXRlID0ge3NkcE1pZDogbWlkLCBzZHBNTGluZUluZGV4OiBzZHBNTGluZUluZGV4fTtcblxuICAgICAgICB2YXIgY2FuZCA9IGV2dC5jYW5kaWRhdGU7XG4gICAgICAgIC8vIEVkZ2UgZW1pdHMgYW4gZW1wdHkgb2JqZWN0IGZvciBSVENJY2VDYW5kaWRhdGVDb21wbGV0ZeKApVxuICAgICAgICBpZiAoIWNhbmQgfHwgT2JqZWN0LmtleXMoY2FuZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gcG9seWZpbGwgc2luY2UgUlRDSWNlR2F0aGVyZXIuc3RhdGUgaXMgbm90IGltcGxlbWVudGVkIGluIEVkZ2UgMTA1NDcgeWV0LlxuICAgICAgICAgIGlmIChpY2VHYXRoZXJlci5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpY2VHYXRoZXJlci5zdGF0ZSA9ICdjb21wbGV0ZWQnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEVtaXQgYSBjYW5kaWRhdGUgd2l0aCB0eXBlIGVuZE9mQ2FuZGlkYXRlcyB0byBtYWtlIHRoZSBzYW1wbGVzIHdvcmsuXG4gICAgICAgICAgLy8gRWRnZSByZXF1aXJlcyBhZGRJY2VDYW5kaWRhdGUgd2l0aCB0aGlzIGVtcHR5IGNhbmRpZGF0ZSB0byBzdGFydCBjaGVja2luZy5cbiAgICAgICAgICAvLyBUaGUgcmVhbCBzb2x1dGlvbiBpcyB0byBzaWduYWwgZW5kLW9mLWNhbmRpZGF0ZXMgdG8gdGhlIG90aGVyIHNpZGUgd2hlblxuICAgICAgICAgIC8vIGdldHRpbmcgdGhlIG51bGwgY2FuZGlkYXRlIGJ1dCBzb21lIGFwcHMgKGxpa2UgdGhlIHNhbXBsZXMpIGRvbid0IGRvIHRoYXQuXG4gICAgICAgICAgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSA9XG4gICAgICAgICAgICAgICdjYW5kaWRhdGU6MSAxIHVkcCAxIDAuMC4wLjAgOSB0eXAgZW5kT2ZDYW5kaWRhdGVzJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBSVENJY2VDYW5kaWRhdGUgZG9lc24ndCBoYXZlIGEgY29tcG9uZW50LCBuZWVkcyB0byBiZSBhZGRlZFxuICAgICAgICAgIGNhbmQuY29tcG9uZW50ID0gaWNlVHJhbnNwb3J0LmNvbXBvbmVudCA9PT0gJ1JUQ1AnID8gMiA6IDE7XG4gICAgICAgICAgZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSA9IFNEUFV0aWxzLndyaXRlQ2FuZGlkYXRlKGNhbmQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbXBsZXRlID0gc2VsZi50cmFuc2NlaXZlcnMuZXZlcnkoZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIgJiZcbiAgICAgICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuc3RhdGUgPT09ICdjb21wbGV0ZWQnO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gRklYTUU6IHVwZGF0ZSAubG9jYWxEZXNjcmlwdGlvbiB3aXRoIGNhbmRpZGF0ZSBhbmQgKHBvdGVudGlhbGx5KSBlbmQtb2YtY2FuZGlkYXRlcy5cbiAgICAgICAgLy8gICAgIFRvIG1ha2UgdGhpcyBoYXJkZXIsIHRoZSBnYXRoZXJlciBtaWdodCBlbWl0IGNhbmRpZGF0ZXMgYmVmb3JlIGxvY2FsZGVzY3JpcHRpb25cbiAgICAgICAgLy8gICAgIGlzIHNldC4gVG8gbWFrZSB0aGluZ3Mgd29yc2UsIGdhdGhlci5nZXRMb2NhbENhbmRpZGF0ZXMgc3RpbGwgZXJyb3JzIGluXG4gICAgICAgIC8vICAgICBFZGdlIDEwNTQ3IHdoZW4gbm8gY2FuZGlkYXRlcyBoYXZlIGJlZW4gZ2F0aGVyZWQgeWV0LlxuXG4gICAgICAgIGlmIChzZWxmLm9uaWNlY2FuZGlkYXRlICE9PSBudWxsKSB7XG4gICAgICAgICAgLy8gRW1pdCBjYW5kaWRhdGUgaWYgbG9jYWxEZXNjcmlwdGlvbiBpcyBzZXQuXG4gICAgICAgICAgLy8gQWxzbyBlbWl0cyBudWxsIGNhbmRpZGF0ZSB3aGVuIGFsbCBnYXRoZXJlcnMgYXJlIGNvbXBsZXRlLlxuICAgICAgICAgIGlmIChzZWxmLmxvY2FsRGVzY3JpcHRpb24gJiYgc2VsZi5sb2NhbERlc2NyaXB0aW9uLnR5cGUgPT09ICcnKSB7XG4gICAgICAgICAgICBzZWxmLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIucHVzaChldmVudCk7XG4gICAgICAgICAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgc2VsZi5fbG9jYWxJY2VDYW5kaWRhdGVzQnVmZmVyLnB1c2goe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLm9uaWNlY2FuZGlkYXRlKGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgICBzZWxmLm9uaWNlY2FuZGlkYXRlKHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpY2VUcmFuc3BvcnQub25pY2VzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLl91cGRhdGVDb25uZWN0aW9uU3RhdGUoKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBkdGxzVHJhbnNwb3J0ID0gbmV3IFJUQ0R0bHNUcmFuc3BvcnQoaWNlVHJhbnNwb3J0KTtcbiAgICAgIGR0bHNUcmFuc3BvcnQub25kdGxzc3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgICB9O1xuICAgICAgZHRsc1RyYW5zcG9ydC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIG9uZXJyb3IgZG9lcyBub3Qgc2V0IHN0YXRlIHRvIGZhaWxlZCBieSBpdHNlbGYuXG4gICAgICAgIGR0bHNUcmFuc3BvcnQuc3RhdGUgPSAnZmFpbGVkJztcbiAgICAgICAgc2VsZi5fdXBkYXRlQ29ubmVjdGlvblN0YXRlKCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpY2VHYXRoZXJlcjogaWNlR2F0aGVyZXIsXG4gICAgICAgIGljZVRyYW5zcG9ydDogaWNlVHJhbnNwb3J0LFxuICAgICAgICBkdGxzVHJhbnNwb3J0OiBkdGxzVHJhbnNwb3J0XG4gICAgICB9O1xuICAgIH07XG5cbiAgICAvLyBTdGFydCB0aGUgUlRQIFNlbmRlciBhbmQgUmVjZWl2ZXIgZm9yIGEgdHJhbnNjZWl2ZXIuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdHJhbnNjZWl2ZSA9IGZ1bmN0aW9uKHRyYW5zY2VpdmVyLFxuICAgICAgICBzZW5kLCByZWN2KSB7XG4gICAgICB2YXIgcGFyYW1zID0gdGhpcy5fZ2V0Q29tbW9uQ2FwYWJpbGl0aWVzKHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG4gICAgICBpZiAoc2VuZCAmJiB0cmFuc2NlaXZlci5ydHBTZW5kZXIpIHtcbiAgICAgICAgcGFyYW1zLmVuY29kaW5ncyA9IFt7XG4gICAgICAgICAgc3NyYzogdHJhbnNjZWl2ZXIuc2VuZFNzcmNcbiAgICAgICAgfV07XG4gICAgICAgIHBhcmFtcy5ydGNwID0ge1xuICAgICAgICAgIGNuYW1lOiBsb2NhbENOYW1lLFxuICAgICAgICAgIHNzcmM6IHRyYW5zY2VpdmVyLnJlY3ZTc3JjXG4gICAgICAgIH07XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5zZW5kKHBhcmFtcyk7XG4gICAgICB9XG4gICAgICBpZiAocmVjdiAmJiB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcikge1xuICAgICAgICBwYXJhbXMuZW5jb2RpbmdzID0gW3tcbiAgICAgICAgICBzc3JjOiB0cmFuc2NlaXZlci5yZWN2U3NyY1xuICAgICAgICB9XTtcbiAgICAgICAgcGFyYW1zLnJ0Y3AgPSB7XG4gICAgICAgICAgY25hbWU6IHRyYW5zY2VpdmVyLmNuYW1lLFxuICAgICAgICAgIHNzcmM6IHRyYW5zY2VpdmVyLnNlbmRTc3JjXG4gICAgICAgIH07XG4gICAgICAgIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyLnJlY2VpdmUocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5zZXRMb2NhbERlc2NyaXB0aW9uID1cbiAgICAgICAgZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGVuZGluZ09mZmVyKSB7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50cmFuc2NlaXZlcnMgPSB0aGlzLl9wZW5kaW5nT2ZmZXI7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX3BlbmRpbmdPZmZlcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnYW5zd2VyJykge1xuICAgICAgICB2YXIgc2VjdGlvbnMgPSBTRFBVdGlscy5zcGxpdFNlY3Rpb25zKHNlbGYucmVtb3RlRGVzY3JpcHRpb24uc2RwKTtcbiAgICAgICAgdmFyIHNlc3Npb25wYXJ0ID0gc2VjdGlvbnMuc2hpZnQoKTtcbiAgICAgICAgc2VjdGlvbnMuZm9yRWFjaChmdW5jdGlvbihtZWRpYVNlY3Rpb24sIHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgICB2YXIgdHJhbnNjZWl2ZXIgPSBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XTtcbiAgICAgICAgICB2YXIgaWNlR2F0aGVyZXIgPSB0cmFuc2NlaXZlci5pY2VHYXRoZXJlcjtcbiAgICAgICAgICB2YXIgaWNlVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0O1xuICAgICAgICAgIHZhciBkdGxzVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydDtcbiAgICAgICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXMgPSB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcztcbiAgICAgICAgICB2YXIgcmVtb3RlQ2FwYWJpbGl0aWVzID0gdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzO1xuICAgICAgICAgIHZhciByZWplY3RlZCA9IG1lZGlhU2VjdGlvbi5zcGxpdCgnXFxuJywgMSlbMF1cbiAgICAgICAgICAgICAgLnNwbGl0KCcgJywgMilbMV0gPT09ICcwJztcblxuICAgICAgICAgIGlmICghcmVqZWN0ZWQpIHtcbiAgICAgICAgICAgIHZhciByZW1vdGVJY2VQYXJhbWV0ZXJzID0gU0RQVXRpbHMuZ2V0SWNlUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgICAgICAgc2Vzc2lvbnBhcnQpO1xuICAgICAgICAgICAgaWNlVHJhbnNwb3J0LnN0YXJ0KGljZUdhdGhlcmVyLCByZW1vdGVJY2VQYXJhbWV0ZXJzLCAnY29udHJvbGxlZCcpO1xuXG4gICAgICAgICAgICB2YXIgcmVtb3RlRHRsc1BhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXREdGxzUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgICAgIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgICAgIGR0bHNUcmFuc3BvcnQuc3RhcnQocmVtb3RlRHRsc1BhcmFtZXRlcnMpO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgaW50ZXJzZWN0aW9uIG9mIGNhcGFiaWxpdGllcy5cbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBzZWxmLl9nZXRDb21tb25DYXBhYmlsaXRpZXMobG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzKTtcblxuICAgICAgICAgICAgLy8gU3RhcnQgdGhlIFJUQ1J0cFNlbmRlci4gVGhlIFJUQ1J0cFJlY2VpdmVyIGZvciB0aGlzIHRyYW5zY2VpdmVyXG4gICAgICAgICAgICAvLyBoYXMgYWxyZWFkeSBiZWVuIHN0YXJ0ZWQgaW4gc2V0UmVtb3RlRGVzY3JpcHRpb24uXG4gICAgICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHRyYW5zY2VpdmVyLFxuICAgICAgICAgICAgICAgIHBhcmFtcy5jb2RlY3MubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICBmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2NhbERlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICBzd2l0Y2ggKGRlc2NyaXB0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnb2ZmZXInOlxuICAgICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdoYXZlLWxvY2FsLW9mZmVyJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Fuc3dlcic6XG4gICAgICAgICAgdGhpcy5fdXBkYXRlU2lnbmFsaW5nU3RhdGUoJ3N0YWJsZScpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Vuc3VwcG9ydGVkIHR5cGUgXCInICsgZGVzY3JpcHRpb24udHlwZSArICdcIicpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBhIHN1Y2Nlc3MgY2FsbGJhY2sgd2FzIHByb3ZpZGVkLCBlbWl0IElDRSBjYW5kaWRhdGVzIGFmdGVyIGl0IGhhcyBiZWVuXG4gICAgICAvLyBleGVjdXRlZC4gT3RoZXJ3aXNlLCBlbWl0IGNhbGxiYWNrIGFmdGVyIHRoZSBQcm9taXNlIGlzIHJlc29sdmVkLlxuICAgICAgdmFyIGhhc0NhbGxiYWNrID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiZcbiAgICAgICAgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgIGlmIChoYXNDYWxsYmFjaykge1xuICAgICAgICB2YXIgY2IgPSBhcmd1bWVudHNbMV07XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgc2VsZi5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcygpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICAgIHZhciBwID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICBwLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghaGFzQ2FsbGJhY2spIHtcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChzZWxmLl9lbWl0QnVmZmVyZWRDYW5kaWRhdGVzLmJpbmQoc2VsZiksIDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwO1xuICAgIH07XG5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldFJlbW90ZURlc2NyaXB0aW9uID1cbiAgICAgICAgZnVuY3Rpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzdHJlYW0gPSBuZXcgTWVkaWFTdHJlYW0oKTtcbiAgICAgIHZhciBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoZGVzY3JpcHRpb24uc2RwKTtcbiAgICAgIHZhciBzZXNzaW9ucGFydCA9IHNlY3Rpb25zLnNoaWZ0KCk7XG4gICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICB2YXIgbGluZXMgPSBTRFBVdGlscy5zcGxpdExpbmVzKG1lZGlhU2VjdGlvbik7XG4gICAgICAgIHZhciBtbGluZSA9IGxpbmVzWzBdLnN1YnN0cigyKS5zcGxpdCgnICcpO1xuICAgICAgICB2YXIga2luZCA9IG1saW5lWzBdO1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBtbGluZVsxXSA9PT0gJzAnO1xuICAgICAgICB2YXIgZGlyZWN0aW9uID0gU0RQVXRpbHMuZ2V0RGlyZWN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpO1xuXG4gICAgICAgIHZhciB0cmFuc2NlaXZlcjtcbiAgICAgICAgdmFyIGljZUdhdGhlcmVyO1xuICAgICAgICB2YXIgaWNlVHJhbnNwb3J0O1xuICAgICAgICB2YXIgZHRsc1RyYW5zcG9ydDtcbiAgICAgICAgdmFyIHJ0cFNlbmRlcjtcbiAgICAgICAgdmFyIHJ0cFJlY2VpdmVyO1xuICAgICAgICB2YXIgc2VuZFNzcmM7XG4gICAgICAgIHZhciByZWN2U3NyYztcbiAgICAgICAgdmFyIGxvY2FsQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgIC8vIEZJWE1FOiBlbnN1cmUgdGhlIG1lZGlhU2VjdGlvbiBoYXMgcnRjcC1tdXggc2V0LlxuICAgICAgICB2YXIgcmVtb3RlQ2FwYWJpbGl0aWVzID0gU0RQVXRpbHMucGFyc2VSdHBQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbik7XG4gICAgICAgIHZhciByZW1vdGVJY2VQYXJhbWV0ZXJzO1xuICAgICAgICB2YXIgcmVtb3RlRHRsc1BhcmFtZXRlcnM7XG4gICAgICAgIGlmICghcmVqZWN0ZWQpIHtcbiAgICAgICAgICByZW1vdGVJY2VQYXJhbWV0ZXJzID0gU0RQVXRpbHMuZ2V0SWNlUGFyYW1ldGVycyhtZWRpYVNlY3Rpb24sXG4gICAgICAgICAgICAgIHNlc3Npb25wYXJ0KTtcbiAgICAgICAgICByZW1vdGVEdGxzUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgICAgc2Vzc2lvbnBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaWQgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPW1pZDonKVswXS5zdWJzdHIoNik7XG5cbiAgICAgICAgdmFyIGNuYW1lO1xuICAgICAgICAvLyBHZXRzIHRoZSBmaXJzdCBTU1JDLiBOb3RlIHRoYXQgd2l0aCBSVFggdGhlcmUgbWlnaHQgYmUgbXVsdGlwbGUgU1NSQ3MuXG4gICAgICAgIHZhciByZW1vdGVTc3JjID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgobWVkaWFTZWN0aW9uLCAnYT1zc3JjOicpXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFNEUFV0aWxzLnBhcnNlU3NyY01lZGlhKGxpbmUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgICAgICAgIHJldHVybiBvYmouYXR0cmlidXRlID09PSAnY25hbWUnO1xuICAgICAgICAgICAgfSlbMF07XG4gICAgICAgIGlmIChyZW1vdGVTc3JjKSB7XG4gICAgICAgICAgcmVjdlNzcmMgPSBwYXJzZUludChyZW1vdGVTc3JjLnNzcmMsIDEwKTtcbiAgICAgICAgICBjbmFtZSA9IHJlbW90ZVNzcmMudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ29mZmVyJykge1xuICAgICAgICAgIHZhciB0cmFuc3BvcnRzID0gc2VsZi5fY3JlYXRlSWNlQW5kRHRsc1RyYW5zcG9ydHMobWlkLCBzZHBNTGluZUluZGV4KTtcblxuICAgICAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzID0gUlRDUnRwUmVjZWl2ZXIuZ2V0Q2FwYWJpbGl0aWVzKGtpbmQpO1xuICAgICAgICAgIHNlbmRTc3JjID0gKDIgKiBzZHBNTGluZUluZGV4ICsgMikgKiAxMDAxO1xuXG4gICAgICAgICAgcnRwUmVjZWl2ZXIgPSBuZXcgUlRDUnRwUmVjZWl2ZXIodHJhbnNwb3J0cy5kdGxzVHJhbnNwb3J0LCBraW5kKTtcblxuICAgICAgICAgIC8vIEZJWE1FOiBub3QgY29ycmVjdCB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBzdHJlYW1zIGJ1dCB0aGF0IGlzXG4gICAgICAgICAgLy8gbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgaW4gdGhpcyBzaGltLlxuICAgICAgICAgIHN0cmVhbS5hZGRUcmFjayhydHBSZWNlaXZlci50cmFjayk7XG5cbiAgICAgICAgICAvLyBGSVhNRTogbG9vayBhdCBkaXJlY3Rpb24uXG4gICAgICAgICAgaWYgKHNlbGYubG9jYWxTdHJlYW1zLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgc2VsZi5sb2NhbFN0cmVhbXNbMF0uZ2V0VHJhY2tzKCkubGVuZ3RoID49IHNkcE1MaW5lSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIEZJWE1FOiBhY3R1YWxseSBtb3JlIGNvbXBsaWNhdGVkLCBuZWVkcyB0byBtYXRjaCB0eXBlcyBldGNcbiAgICAgICAgICAgIHZhciBsb2NhbHRyYWNrID0gc2VsZi5sb2NhbFN0cmVhbXNbMF0uZ2V0VHJhY2tzKClbc2RwTUxpbmVJbmRleF07XG4gICAgICAgICAgICBydHBTZW5kZXIgPSBuZXcgUlRDUnRwU2VuZGVyKGxvY2FsdHJhY2ssIHRyYW5zcG9ydHMuZHRsc1RyYW5zcG9ydCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0gPSB7XG4gICAgICAgICAgICBpY2VHYXRoZXJlcjogdHJhbnNwb3J0cy5pY2VHYXRoZXJlcixcbiAgICAgICAgICAgIGljZVRyYW5zcG9ydDogdHJhbnNwb3J0cy5pY2VUcmFuc3BvcnQsXG4gICAgICAgICAgICBkdGxzVHJhbnNwb3J0OiB0cmFuc3BvcnRzLmR0bHNUcmFuc3BvcnQsXG4gICAgICAgICAgICBsb2NhbENhcGFiaWxpdGllczogbG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICByZW1vdGVDYXBhYmlsaXRpZXM6IHJlbW90ZUNhcGFiaWxpdGllcyxcbiAgICAgICAgICAgIHJ0cFNlbmRlcjogcnRwU2VuZGVyLFxuICAgICAgICAgICAgcnRwUmVjZWl2ZXI6IHJ0cFJlY2VpdmVyLFxuICAgICAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgICAgIG1pZDogbWlkLFxuICAgICAgICAgICAgY25hbWU6IGNuYW1lLFxuICAgICAgICAgICAgc2VuZFNzcmM6IHNlbmRTc3JjLFxuICAgICAgICAgICAgcmVjdlNzcmM6IHJlY3ZTc3JjXG4gICAgICAgICAgfTtcbiAgICAgICAgICAvLyBTdGFydCB0aGUgUlRDUnRwUmVjZWl2ZXIgbm93LiBUaGUgUlRQU2VuZGVyIGlzIHN0YXJ0ZWQgaW4gc2V0TG9jYWxEZXNjcmlwdGlvbi5cbiAgICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLFxuICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRpb24udHlwZSA9PT0gJ2Fuc3dlcicgJiYgIXJlamVjdGVkKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIgPSBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XTtcbiAgICAgICAgICBpY2VHYXRoZXJlciA9IHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyO1xuICAgICAgICAgIGljZVRyYW5zcG9ydCA9IHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydDtcbiAgICAgICAgICBkdGxzVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydDtcbiAgICAgICAgICBydHBTZW5kZXIgPSB0cmFuc2NlaXZlci5ydHBTZW5kZXI7XG4gICAgICAgICAgcnRwUmVjZWl2ZXIgPSB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICAgICAgICBzZW5kU3NyYyA9IHRyYW5zY2VpdmVyLnNlbmRTc3JjO1xuICAgICAgICAgIC8vcmVjdlNzcmMgPSB0cmFuc2NlaXZlci5yZWN2U3NyYztcbiAgICAgICAgICBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuXG4gICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0ucmVjdlNzcmMgPSByZWN2U3NyYztcbiAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5yZW1vdGVDYXBhYmlsaXRpZXMgPVxuICAgICAgICAgICAgICByZW1vdGVDYXBhYmlsaXRpZXM7XG4gICAgICAgICAgc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0uY25hbWUgPSBjbmFtZTtcblxuICAgICAgICAgIGljZVRyYW5zcG9ydC5zdGFydChpY2VHYXRoZXJlciwgcmVtb3RlSWNlUGFyYW1ldGVycywgJ2NvbnRyb2xsaW5nJyk7XG4gICAgICAgICAgZHRsc1RyYW5zcG9ydC5zdGFydChyZW1vdGVEdGxzUGFyYW1ldGVycyk7XG5cbiAgICAgICAgICBzZWxmLl90cmFuc2NlaXZlKHRyYW5zY2VpdmVyLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAncmVjdm9ubHknLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKTtcblxuICAgICAgICAgIGlmIChydHBSZWNlaXZlciAmJlxuICAgICAgICAgICAgICAoZGlyZWN0aW9uID09PSAnc2VuZHJlY3YnIHx8IGRpcmVjdGlvbiA9PT0gJ3NlbmRvbmx5JykpIHtcbiAgICAgICAgICAgIHN0cmVhbS5hZGRUcmFjayhydHBSZWNlaXZlci50cmFjayk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZJWE1FOiBhY3R1YWxseSB0aGUgcmVjZWl2ZXIgc2hvdWxkIGJlIGNyZWF0ZWQgbGF0ZXIuXG4gICAgICAgICAgICBkZWxldGUgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW1vdGVEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgc3dpdGNoIChkZXNjcmlwdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ29mZmVyJzpcbiAgICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnaGF2ZS1yZW1vdGUtb2ZmZXInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYW5zd2VyJzpcbiAgICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnc3RhYmxlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5zdXBwb3J0ZWQgdHlwZSBcIicgKyBkZXNjcmlwdGlvbi50eXBlICsgJ1wiJyk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHNlbGYub25hZGRzdHJlYW0gIT09IG51bGwgJiYgc3RyZWFtLmdldFRyYWNrcygpLmxlbmd0aCkge1xuICAgICAgICAgIHNlbGYucmVtb3RlU3RyZWFtcy5wdXNoKHN0cmVhbSk7XG4gICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZWxmLm9uYWRkc3RyZWFtKHtzdHJlYW06IHN0cmVhbX0pO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1sxXSwgMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgLyogbm90IHlldFxuICAgICAgICBpZiAodHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgICovXG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0KSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLnJ0cFNlbmRlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEZJWE1FOiBjbGVhbiB1cCB0cmFja3MsIGxvY2FsIHN0cmVhbXMsIHJlbW90ZSBzdHJlYW1zLCBldGNcbiAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdjbG9zZWQnKTtcbiAgICB9O1xuXG4gICAgLy8gVXBkYXRlIHRoZSBzaWduYWxpbmcgc3RhdGUuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdXBkYXRlU2lnbmFsaW5nU3RhdGUgPVxuICAgICAgICBmdW5jdGlvbihuZXdTdGF0ZSkge1xuICAgICAgdGhpcy5zaWduYWxpbmdTdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgaWYgKHRoaXMub25zaWduYWxpbmdzdGF0ZWNoYW5nZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdG8gZmlyZSB0aGUgbmVnb3RpYXRpb25uZWVkZWQgZXZlbnQuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQgPVxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgIC8vIEZpcmUgYXdheSAoZm9yIG5vdykuXG4gICAgICBpZiAodGhpcy5vbm5lZ290aWF0aW9ubmVlZGVkICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub25uZWdvdGlhdGlvbm5lZWRlZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBVcGRhdGUgdGhlIGNvbm5lY3Rpb24gc3RhdGUuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fdXBkYXRlQ29ubmVjdGlvblN0YXRlID1cbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgbmV3U3RhdGU7XG4gICAgICB2YXIgc3RhdGVzID0ge1xuICAgICAgICAnbmV3JzogMCxcbiAgICAgICAgY2xvc2VkOiAwLFxuICAgICAgICBjb25uZWN0aW5nOiAwLFxuICAgICAgICBjaGVja2luZzogMCxcbiAgICAgICAgY29ubmVjdGVkOiAwLFxuICAgICAgICBjb21wbGV0ZWQ6IDAsXG4gICAgICAgIGZhaWxlZDogMFxuICAgICAgfTtcbiAgICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgc3RhdGVzW3RyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdGF0ZV0rKztcbiAgICAgICAgc3RhdGVzW3RyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQuc3RhdGVdKys7XG4gICAgICB9KTtcbiAgICAgIC8vIElDRVRyYW5zcG9ydC5jb21wbGV0ZWQgYW5kIGNvbm5lY3RlZCBhcmUgdGhlIHNhbWUgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgIHN0YXRlcy5jb25uZWN0ZWQgKz0gc3RhdGVzLmNvbXBsZXRlZDtcblxuICAgICAgbmV3U3RhdGUgPSAnbmV3JztcbiAgICAgIGlmIChzdGF0ZXMuZmFpbGVkID4gMCkge1xuICAgICAgICBuZXdTdGF0ZSA9ICdmYWlsZWQnO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGluZyA+IDAgfHwgc3RhdGVzLmNoZWNraW5nID4gMCkge1xuICAgICAgICBuZXdTdGF0ZSA9ICdjb25uZWN0aW5nJztcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGVzLmRpc2Nvbm5lY3RlZCA+IDApIHtcbiAgICAgICAgbmV3U3RhdGUgPSAnZGlzY29ubmVjdGVkJztcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGVzLm5ldyA+IDApIHtcbiAgICAgICAgbmV3U3RhdGUgPSAnbmV3JztcbiAgICAgIH0gZWxzZSBpZiAoc3RhdGVzLmNvbm5lY3RpbmcgPiAwIHx8IHN0YXRlcy5jb21wbGV0ZWQgPiAwKSB7XG4gICAgICAgIG5ld1N0YXRlID0gJ2Nvbm5lY3RlZCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdTdGF0ZSAhPT0gc2VsZi5pY2VDb25uZWN0aW9uU3RhdGUpIHtcbiAgICAgICAgc2VsZi5pY2VDb25uZWN0aW9uU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgaWYgKHRoaXMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVPZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuX3BlbmRpbmdPZmZlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZU9mZmVyIGNhbGxlZCB3aGlsZSB0aGVyZSBpcyBhIHBlbmRpbmcgb2ZmZXIuJyk7XG4gICAgICB9XG4gICAgICB2YXIgb2ZmZXJPcHRpb25zO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMF07XG4gICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgb2ZmZXJPcHRpb25zID0gYXJndW1lbnRzWzJdO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHJhY2tzID0gW107XG4gICAgICB2YXIgbnVtQXVkaW9UcmFja3MgPSAwO1xuICAgICAgdmFyIG51bVZpZGVvVHJhY2tzID0gMDtcbiAgICAgIC8vIERlZmF1bHQgdG8gc2VuZHJlY3YuXG4gICAgICBpZiAodGhpcy5sb2NhbFN0cmVhbXMubGVuZ3RoKSB7XG4gICAgICAgIG51bUF1ZGlvVHJhY2tzID0gdGhpcy5sb2NhbFN0cmVhbXNbMF0uZ2V0QXVkaW9UcmFja3MoKS5sZW5ndGg7XG4gICAgICAgIG51bVZpZGVvVHJhY2tzID0gdGhpcy5sb2NhbFN0cmVhbXNbMF0uZ2V0VmlkZW9UcmFja3MoKS5sZW5ndGg7XG4gICAgICB9XG4gICAgICAvLyBEZXRlcm1pbmUgbnVtYmVyIG9mIGF1ZGlvIGFuZCB2aWRlbyB0cmFja3Mgd2UgbmVlZCB0byBzZW5kL3JlY3YuXG4gICAgICBpZiAob2ZmZXJPcHRpb25zKSB7XG4gICAgICAgIC8vIFJlamVjdCBDaHJvbWUgbGVnYWN5IGNvbnN0cmFpbnRzLlxuICAgICAgICBpZiAob2ZmZXJPcHRpb25zLm1hbmRhdG9yeSB8fCBvZmZlck9wdGlvbnMub3B0aW9uYWwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAnTGVnYWN5IG1hbmRhdG9yeS9vcHRpb25hbCBjb25zdHJhaW50cyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbnVtQXVkaW9UcmFja3MgPSBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVBdWRpbztcbiAgICAgICAgfVxuICAgICAgICBpZiAob2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlVmlkZW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzID0gb2ZmZXJPcHRpb25zLm9mZmVyVG9SZWNlaXZlVmlkZW87XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxvY2FsU3RyZWFtcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gUHVzaCBsb2NhbCBzdHJlYW1zLlxuICAgICAgICB0aGlzLmxvY2FsU3RyZWFtc1swXS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgdHJhY2tzLnB1c2goe1xuICAgICAgICAgICAga2luZDogdHJhY2sua2luZCxcbiAgICAgICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgICAgIHdhbnRSZWNlaXZlOiB0cmFjay5raW5kID09PSAnYXVkaW8nID9cbiAgICAgICAgICAgICAgICBudW1BdWRpb1RyYWNrcyA+IDAgOiBudW1WaWRlb1RyYWNrcyA+IDBcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodHJhY2sua2luZCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgbnVtQXVkaW9UcmFja3MtLTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRyYWNrLmtpbmQgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIG51bVZpZGVvVHJhY2tzLS07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIENyZWF0ZSBNLWxpbmVzIGZvciByZWN2b25seSBzdHJlYW1zLlxuICAgICAgd2hpbGUgKG51bUF1ZGlvVHJhY2tzID4gMCB8fCBudW1WaWRlb1RyYWNrcyA+IDApIHtcbiAgICAgICAgaWYgKG51bUF1ZGlvVHJhY2tzID4gMCkge1xuICAgICAgICAgIHRyYWNrcy5wdXNoKHtcbiAgICAgICAgICAgIGtpbmQ6ICdhdWRpbycsXG4gICAgICAgICAgICB3YW50UmVjZWl2ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG51bUF1ZGlvVHJhY2tzLS07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bVZpZGVvVHJhY2tzID4gMCkge1xuICAgICAgICAgIHRyYWNrcy5wdXNoKHtcbiAgICAgICAgICAgIGtpbmQ6ICd2aWRlbycsXG4gICAgICAgICAgICB3YW50UmVjZWl2ZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG51bVZpZGVvVHJhY2tzLS07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHNkcCA9IFNEUFV0aWxzLndyaXRlU2Vzc2lvbkJvaWxlcnBsYXRlKCk7XG4gICAgICB2YXIgdHJhbnNjZWl2ZXJzID0gW107XG4gICAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbihtbGluZSwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICAvLyBGb3IgZWFjaCB0cmFjaywgY3JlYXRlIGFuIGljZSBnYXRoZXJlciwgaWNlIHRyYW5zcG9ydCwgZHRscyB0cmFuc3BvcnQsXG4gICAgICAgIC8vIHBvdGVudGlhbGx5IHJ0cHNlbmRlciBhbmQgcnRwcmVjZWl2ZXIuXG4gICAgICAgIHZhciB0cmFjayA9IG1saW5lLnRyYWNrO1xuICAgICAgICB2YXIga2luZCA9IG1saW5lLmtpbmQ7XG4gICAgICAgIHZhciBtaWQgPSBnZW5lcmF0ZUlkZW50aWZpZXIoKTtcblxuICAgICAgICB2YXIgdHJhbnNwb3J0cyA9IHNlbGYuX2NyZWF0ZUljZUFuZER0bHNUcmFuc3BvcnRzKG1pZCwgc2RwTUxpbmVJbmRleCk7XG5cbiAgICAgICAgdmFyIGxvY2FsQ2FwYWJpbGl0aWVzID0gUlRDUnRwU2VuZGVyLmdldENhcGFiaWxpdGllcyhraW5kKTtcbiAgICAgICAgdmFyIHJ0cFNlbmRlcjtcbiAgICAgICAgdmFyIHJ0cFJlY2VpdmVyO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIGFuIHNzcmMgbm93LCB0byBiZSB1c2VkIGxhdGVyIGluIHJ0cFNlbmRlci5zZW5kXG4gICAgICAgIHZhciBzZW5kU3NyYyA9ICgyICogc2RwTUxpbmVJbmRleCArIDEpICogMTAwMTtcbiAgICAgICAgaWYgKHRyYWNrKSB7XG4gICAgICAgICAgcnRwU2VuZGVyID0gbmV3IFJUQ1J0cFNlbmRlcih0cmFjaywgdHJhbnNwb3J0cy5kdGxzVHJhbnNwb3J0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtbGluZS53YW50UmVjZWl2ZSkge1xuICAgICAgICAgIHJ0cFJlY2VpdmVyID0gbmV3IFJUQ1J0cFJlY2VpdmVyKHRyYW5zcG9ydHMuZHRsc1RyYW5zcG9ydCwga2luZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0gPSB7XG4gICAgICAgICAgaWNlR2F0aGVyZXI6IHRyYW5zcG9ydHMuaWNlR2F0aGVyZXIsXG4gICAgICAgICAgaWNlVHJhbnNwb3J0OiB0cmFuc3BvcnRzLmljZVRyYW5zcG9ydCxcbiAgICAgICAgICBkdGxzVHJhbnNwb3J0OiB0cmFuc3BvcnRzLmR0bHNUcmFuc3BvcnQsXG4gICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXM6IGxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllczogbnVsbCxcbiAgICAgICAgICBydHBTZW5kZXI6IHJ0cFNlbmRlcixcbiAgICAgICAgICBydHBSZWNlaXZlcjogcnRwUmVjZWl2ZXIsXG4gICAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgICBtaWQ6IG1pZCxcbiAgICAgICAgICBzZW5kU3NyYzogc2VuZFNzcmMsXG4gICAgICAgICAgcmVjdlNzcmM6IG51bGxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRyYW5zY2VpdmVyID0gdHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdO1xuICAgICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24odHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcywgJ29mZmVyJywgc2VsZi5sb2NhbFN0cmVhbXNbMF0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX3BlbmRpbmdPZmZlciA9IHRyYW5zY2VpdmVycztcbiAgICAgIHZhciBkZXNjID0gbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICAgIHR5cGU6ICdvZmZlcicsXG4gICAgICAgIHNkcDogc2RwXG4gICAgICB9KTtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzBdLCAwLCBkZXNjKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVzYyk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuY3JlYXRlQW5zd2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB2YXIgYW5zd2VyT3B0aW9ucztcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgYW5zd2VyT3B0aW9ucyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBhbnN3ZXJPcHRpb25zID0gYXJndW1lbnRzWzJdO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUoKTtcbiAgICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIGludGVyc2VjdGlvbiBvZiBjYXBhYmlsaXRpZXMuXG4gICAgICAgIHZhciBjb21tb25DYXBhYmlsaXRpZXMgPSBzZWxmLl9nZXRDb21tb25DYXBhYmlsaXRpZXMoXG4gICAgICAgICAgICB0cmFuc2NlaXZlci5sb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLnJlbW90ZUNhcGFiaWxpdGllcyk7XG5cbiAgICAgICAgc2RwICs9IFNEUFV0aWxzLndyaXRlTWVkaWFTZWN0aW9uKHRyYW5zY2VpdmVyLCBjb21tb25DYXBhYmlsaXRpZXMsXG4gICAgICAgICAgICAnYW5zd2VyJywgc2VsZi5sb2NhbFN0cmVhbXNbMF0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBkZXNjID0gbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICAgIHR5cGU6ICdhbnN3ZXInLFxuICAgICAgICBzZHA6IHNkcFxuICAgICAgfSk7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCAmJiB0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1swXSwgMCwgZGVzYyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRlc2MpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZEljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGNhbmRpZGF0ZSkge1xuICAgICAgdmFyIG1MaW5lSW5kZXggPSBjYW5kaWRhdGUuc2RwTUxpbmVJbmRleDtcbiAgICAgIGlmIChjYW5kaWRhdGUuc2RwTWlkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmFuc2NlaXZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAodGhpcy50cmFuc2NlaXZlcnNbaV0ubWlkID09PSBjYW5kaWRhdGUuc2RwTWlkKSB7XG4gICAgICAgICAgICBtTGluZUluZGV4ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHRyYW5zY2VpdmVyID0gdGhpcy50cmFuc2NlaXZlcnNbbUxpbmVJbmRleF07XG4gICAgICBpZiAodHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgdmFyIGNhbmQgPSBPYmplY3Qua2V5cyhjYW5kaWRhdGUuY2FuZGlkYXRlKS5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIFNEUFV0aWxzLnBhcnNlQ2FuZGlkYXRlKGNhbmRpZGF0ZS5jYW5kaWRhdGUpIDoge307XG4gICAgICAgIC8vIElnbm9yZSBDaHJvbWUncyBpbnZhbGlkIGNhbmRpZGF0ZXMgc2luY2UgRWRnZSBkb2VzIG5vdCBsaWtlIHRoZW0uXG4gICAgICAgIGlmIChjYW5kLnByb3RvY29sID09PSAndGNwJyAmJiBjYW5kLnBvcnQgPT09IDApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWdub3JlIFJUQ1AgY2FuZGlkYXRlcywgd2UgYXNzdW1lIFJUQ1AtTVVYLlxuICAgICAgICBpZiAoY2FuZC5jb21wb25lbnQgIT09ICcxJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBBIGRpcnR5IGhhY2sgdG8gbWFrZSBzYW1wbGVzIHdvcmsuXG4gICAgICAgIGlmIChjYW5kLnR5cGUgPT09ICdlbmRPZkNhbmRpZGF0ZXMnKSB7XG4gICAgICAgICAgY2FuZCA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5hZGRSZW1vdGVDYW5kaWRhdGUoY2FuZCk7XG4gICAgICB9XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMV0sIDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmdldFN0YXRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcbiAgICAgIHRoaXMudHJhbnNjZWl2ZXJzLmZvckVhY2goZnVuY3Rpb24odHJhbnNjZWl2ZXIpIHtcbiAgICAgICAgWydydHBTZW5kZXInLCAncnRwUmVjZWl2ZXInLCAnaWNlR2F0aGVyZXInLCAnaWNlVHJhbnNwb3J0JyxcbiAgICAgICAgICAgICdkdGxzVHJhbnNwb3J0J10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICBpZiAodHJhbnNjZWl2ZXJbbWV0aG9kXSkge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmFuc2NlaXZlclttZXRob2RdLmdldFN0YXRzKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHZhciBjYiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICBhcmd1bWVudHNbMV07XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IHt9O1xuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICByZXMuZm9yRWFjaChmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICByZXN1bHRzW2lkXSA9IHJlc3VsdFtpZF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNiLCAwLCByZXN1bHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59IGVsc2Uge1xuICB3ZWJydGNVdGlscy5sb2coJ0Jyb3dzZXIgZG9lcyBub3QgYXBwZWFyIHRvIGJlIFdlYlJUQy1jYXBhYmxlJyk7XG59XG5cbi8vIFBvbHlmaWxsIG9udHJhY2sgb24gYnJvd3NlcnMgdGhhdCBkb24ndCB5ZXQgaGF2ZSBpdFxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiAmJiAhKCdvbnRyYWNrJyBpblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUpKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLCAnb250cmFjaycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5fb250cmFjazsgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uKGYpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGlmICh0aGlzLl9vbnRyYWNrKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhY2snLCB0aGlzLl9vbnRyYWNrKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdhZGRzdHJlYW0nLCB0aGlzLl9vbnRyYWNrcG9seSk7XG4gICAgICB9XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYWNrJywgdGhpcy5fb250cmFjayA9IGYpO1xuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdhZGRzdHJlYW0nLCB0aGlzLl9vbnRyYWNrcG9seSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKHdlYnJ0Y0RldGVjdGVkQnJvd3NlciA9PT0gJ2Nocm9tZScpIHtcbiAgICAgICAgICAvLyBvbmFkZHN0cmVhbSBkb2VzIG5vdCBmaXJlIHdoZW4gYSB0cmFjayBpcyBhZGRlZCB0byBhbiBleGlzdGluZyBzdHJlYW0uXG4gICAgICAgICAgLy8gYnV0IHN0cmVhbS5vbmFkZHRyYWNrIGlzIGltcGxlbWVudGVkIHNvIHdlIHVzZSB0aOOBn3RcbiAgICAgICAgICBlLnN0cmVhbS5hZGRFdmVudExpc3RlbmVyKCdhZGR0cmFjaycsIGZ1bmN0aW9uKHRlKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgICBldmVudC50cmFjayA9IHRlLnRyYWNrO1xuICAgICAgICAgICAgZXZlbnQucmVjZWl2ZXIgPSB7dHJhY2s6IHRlLnRyYWNrfTtcbiAgICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgICAgc2VsZi5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHRyYWNrKSB7XG4gICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCd0cmFjaycpO1xuICAgICAgICAgIGV2ZW50LnRyYWNrID0gdHJhY2s7XG4gICAgICAgICAgZXZlbnQucmVjZWl2ZXIgPSB7dHJhY2s6IHRyYWNrfTtcbiAgICAgICAgICBldmVudC5zdHJlYW1zID0gW2Uuc3RyZWFtXTtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBSZXR1cm5zIHRoZSByZXN1bHQgb2YgZ2V0VXNlck1lZGlhIGFzIGEgUHJvbWlzZS5cbmZ1bmN0aW9uIHJlcXVlc3RVc2VyTWVkaWEoY29uc3RyYWludHMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGdldFVzZXJNZWRpYShjb25zdHJhaW50cywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgfSk7XG59XG5cbnZhciB3ZWJydGNUZXN0aW5nID0ge307XG50cnkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2VicnRjVGVzdGluZywgJ3ZlcnNpb24nLCB7XG4gICAgc2V0OiBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgICB3ZWJydGNEZXRlY3RlZFZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIH1cbiAgfSk7XG59IGNhdGNoIChlKSB7fVxuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgdmFyIFJUQ1BlZXJDb25uZWN0aW9uO1xuICB2YXIgUlRDSWNlQ2FuZGlkYXRlO1xuICB2YXIgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBSVENQZWVyQ29ubmVjdGlvbiA9IHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbjtcbiAgICBSVENJY2VDYW5kaWRhdGUgPSB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlO1xuICAgIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiA9IHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIH1cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgUlRDUGVlckNvbm5lY3Rpb246IFJUQ1BlZXJDb25uZWN0aW9uLFxuICAgIFJUQ0ljZUNhbmRpZGF0ZTogUlRDSWNlQ2FuZGlkYXRlLFxuICAgIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbjogUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLFxuICAgIGdldFVzZXJNZWRpYTogZ2V0VXNlck1lZGlhLFxuICAgIGF0dGFjaE1lZGlhU3RyZWFtOiBhdHRhY2hNZWRpYVN0cmVhbSxcbiAgICByZWF0dGFjaE1lZGlhU3RyZWFtOiByZWF0dGFjaE1lZGlhU3RyZWFtLFxuICAgIHdlYnJ0Y0RldGVjdGVkQnJvd3Nlcjogd2VicnRjRGV0ZWN0ZWRCcm93c2VyLFxuICAgIHdlYnJ0Y0RldGVjdGVkVmVyc2lvbjogd2VicnRjRGV0ZWN0ZWRWZXJzaW9uLFxuICAgIHdlYnJ0Y01pbmltdW1WZXJzaW9uOiB3ZWJydGNNaW5pbXVtVmVyc2lvbixcbiAgICB3ZWJydGNUZXN0aW5nOiB3ZWJydGNUZXN0aW5nLFxuICAgIHdlYnJ0Y1V0aWxzOiB3ZWJydGNVdGlsc1xuICAgIC8vcmVxdWVzdFVzZXJNZWRpYTogbm90IGV4cG9zZWQgb24gcHVycG9zZS5cbiAgICAvL3RyYWNlOiBub3QgZXhwb3NlZCBvbiBwdXJwb3NlLlxuICB9O1xufSBlbHNlIGlmICgodHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpICYmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nKSkge1xuICAvLyBFeHBvc2Ugb2JqZWN0cyBhbmQgZnVuY3Rpb25zIHdoZW4gUmVxdWlyZUpTIGlzIGRvaW5nIHRoZSBsb2FkaW5nLlxuICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBSVENQZWVyQ29ubmVjdGlvbjogd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLFxuICAgICAgUlRDSWNlQ2FuZGlkYXRlOiB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlLFxuICAgICAgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uOiB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uLFxuICAgICAgZ2V0VXNlck1lZGlhOiBnZXRVc2VyTWVkaWEsXG4gICAgICBhdHRhY2hNZWRpYVN0cmVhbTogYXR0YWNoTWVkaWFTdHJlYW0sXG4gICAgICByZWF0dGFjaE1lZGlhU3RyZWFtOiByZWF0dGFjaE1lZGlhU3RyZWFtLFxuICAgICAgd2VicnRjRGV0ZWN0ZWRCcm93c2VyOiB3ZWJydGNEZXRlY3RlZEJyb3dzZXIsXG4gICAgICB3ZWJydGNEZXRlY3RlZFZlcnNpb246IHdlYnJ0Y0RldGVjdGVkVmVyc2lvbixcbiAgICAgIHdlYnJ0Y01pbmltdW1WZXJzaW9uOiB3ZWJydGNNaW5pbXVtVmVyc2lvbixcbiAgICAgIHdlYnJ0Y1Rlc3Rpbmc6IHdlYnJ0Y1Rlc3RpbmcsXG4gICAgICB3ZWJydGNVdGlsczogd2VicnRjVXRpbHNcbiAgICAgIC8vcmVxdWVzdFVzZXJNZWRpYTogbm90IGV4cG9zZWQgb24gcHVycG9zZS5cbiAgICAgIC8vdHJhY2U6IG5vdCBleHBvc2VkIG9uIHB1cnBvc2UuXG4gICAgfTtcbiAgfSk7XG59XG4iLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG4vKiBqc2hpbnQgdW5kZWY6IHRydWUgKi9cclxuLyogZ2xvYmFscyBSVENQZWVyQ29ubmVjdGlvbiAqL1xyXG4vKiBnbG9iYWxzIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAqL1xyXG4vKiBnbG9iYWxzIFJUQ0ljZUNhbmRpZGF0ZSAqL1xyXG5cclxuaW1wb3J0ICd3ZWJydGMtYWRhcHRlci10ZXN0JztcclxuXHJcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vdXRpbHMvRXZlbnRFbWl0dGVyJztcclxuaW1wb3J0IGNvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcclxuaW1wb3J0IHBlZXIgZnJvbSAnLi9wZWVyJztcclxuXHJcbmNsYXNzIENvbm5lY3Rpb25Db250cm9sbGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioc3luY2hlciwgZG9tYWluLCBjb25maWd1cmF0aW9uKSB7XHJcblxyXG4gICAgaWYgKCFzeW5jaGVyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzeW5jaGVyIGlzIGEgbmVlZGVkIHBhcmFtZXRlcicpO1xyXG4gICAgaWYgKCFkb21haW4pIHRocm93IG5ldyBFcnJvcignVGhlIGRvbWFpbiBpcyBhIG5lZWRlZCBwYXJhbWV0ZXInKTtcclxuICAgIGlmICghY29uZmlndXJhdGlvbikgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29uZmlndXJhdGlvbiBpcyBhIG5lZWRlZCBwYXJhbWV0ZXInKTtcclxuXHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuc3luY2hlciA9IHN5bmNoZXI7XHJcbiAgICBfdGhpcy5tb2RlID0gJ29mZmVyJztcclxuXHJcbiAgICBfdGhpcy5fb2JqZWN0RGVzY1VSTCA9ICdoeXBlcnR5LWNhdGFsb2d1ZTovLycgKyBkb21haW4gKyAnLy53ZWxsLWtub3duL2RhdGFzY2hlbWFzL0Zha2VEYXRhU2NoZW1hJztcclxuXHJcblxyXG4gICAgY29uc29sZS5pbmZvKGNvbmZpZ3VyYXRpb24pO1xyXG4gICAgY29uc29sZS5pbmZvKGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIF90aGlzLm1lZGlhQ29uc3RyYWludHMgPSBjb25maWd1cmF0aW9uLm1lZGlhQ29uc3RyYWludHM7XHJcbiAgICBfdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbi53ZWJydGM7XHJcblxyXG4gICAgLy8gUHJlcGFyZSB0aGUgUGVlckNvbm5lY3Rpb25cclxuICAgIGxldCBwZWVyQ29ubmVjdGlvbiA9IG5ldyBSVENQZWVyQ29ubmVjdGlvbihfdGhpcy5jb25maWd1cmF0aW9uKTtcclxuXHJcbiAgICBwZWVyQ29ubmVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdzaWduYWxpbmdzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICBjb25zb2xlLmluZm8oJ3NpZ25hbGluZ3N0YXRlY2hhbmdlJywgZXZlbnQuY3VycmVudFRhcmdldC5zaWduYWxpbmdTdGF0ZSk7XHJcblxyXG4gICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5zaWduYWxpbmdTdGF0ZSA9PT0gJ2hhdmUtbG9jYWwtb2ZmZXInKSB7XHJcbiAgICAgICAgX3RoaXMudHJpZ2dlcignY29udHJvbGxlcjpzdGF0ZTpjaGFuZ2UnLCBfdGhpcy5tb2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuc2lnbmFsaW5nU3RhdGUgPT09ICdoYXZlLXJlbW90ZS1vZmZlcicpIHtcclxuICAgICAgICBfdGhpcy5tb2RlID0gJ2Fuc3dlcic7XHJcbiAgICAgICAgX3RoaXMudHJpZ2dlcignY29udHJvbGxlcjpzdGF0ZTpjaGFuZ2UnLCBfdGhpcy5tb2RlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHBlZXJDb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygnaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlJywgZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGUpO1xyXG4gICAgICBsZXQgZGF0YSA9IF90aGlzLl9kYXRhT2JqZWN0UmVwb3J0ZXIuZGF0YTtcclxuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Nvbm5lY3Rpb24nKSkge1xyXG4gICAgICAgIGRhdGEuY29ubmVjdGlvbi5zdGF0dXMgPSBldmVudC5jdXJyZW50VGFyZ2V0LmljZUNvbm5lY3Rpb25TdGF0ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcGVlckNvbm5lY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignaWNlY2FuZGlkYXRlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgIGlmICghZXZlbnQuY2FuZGlkYXRlKSByZXR1cm47XHJcblxyXG4gICAgICBsZXQgaWNlY2FuZGlkYXRlID0ge1xyXG4gICAgICAgIHR5cGU6ICdjYW5kaWRhdGUnLFxyXG4gICAgICAgIGNhbmRpZGF0ZTogZXZlbnQuY2FuZGlkYXRlLmNhbmRpZGF0ZSxcclxuICAgICAgICBzZHBNaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXHJcbiAgICAgICAgc2RwTUxpbmVJbmRleDogZXZlbnQuY2FuZGlkYXRlLnNkcE1MaW5lSW5kZXhcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCBkYXRhID0gX3RoaXMuX2RhdGFPYmplY3RSZXBvcnRlci5kYXRhO1xyXG5cclxuICAgICAgaWYgKF90aGlzLm1vZGUgPT09ICdvZmZlcicpIHtcclxuICAgICAgICBkYXRhLmNvbm5lY3Rpb24ub3duZXJQZWVyLmljZUNhbmRpZGF0ZXMucHVzaChpY2VjYW5kaWRhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGEucGVlci5pY2VDYW5kaWRhdGVzLnB1c2goaWNlY2FuZGlkYXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEFkZCBzdHJlYW0gdG8gUGVlckNvbm5lY3Rpb25cclxuICAgIHBlZXJDb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygnQWRkIFN0cmVhbTogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy50cmlnZ2VyKCdzdHJlYW06YWRkZWQnLCBldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfdGhpcy5wZWVyQ29ubmVjdGlvbiA9IHBlZXJDb25uZWN0aW9uO1xyXG5cclxuICB9XHJcblxyXG4gIHNldCBzdHJlYW0obWVkaWFTdHJlYW0pIHtcclxuICAgIGlmICghbWVkaWFTdHJlYW0pIHRocm93IG5ldyBFcnJvcignVGhlIG1lZGlhU3RyZWFtIGlzIGEgbmVlZGVkIHBhcmFtZXRlcicpO1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmluZm8oJ3NldCBzdHJlYW06ICcsIG1lZGlhU3RyZWFtKTtcclxuICAgIF90aGlzLnBlZXJDb25uZWN0aW9uLmFkZFN0cmVhbShtZWRpYVN0cmVhbSk7XHJcbiAgfVxyXG5cclxuICBnZXQgZ2V0TG9jYWxTdHJlYW1zKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBfdGhpcy5wZWVyQ29ubmVjdGlvbi5nZXRMb2NhbFN0cmVhbXMoKTtcclxuICB9XHJcblxyXG4gIGdldCBnZXRSZW1vdGVTdHJlYW1zKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHJldHVybiBfdGhpcy5wZWVyQ29ubmVjdGlvbi5nZXRSZW1vdGVTdHJlYW1zKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgUmVtb3RlIHBlZXIgaW5mb3JtYXRpb24sIGxpa2UgSHlwZXJ0eS5cclxuICAgKiBAcGFyYW0gIHtPYmplY3R9IHJlbW90ZVBlZXJJbmZvcm1hdGlvbiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGVlcjtcclxuICAgKi9cclxuICBzZXQgcmVtb3RlUGVlckluZm9ybWF0aW9uKHJlbW90ZVBlZXJJbmZvcm1hdGlvbikge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIF90aGlzLl9yZW1vdGVQZWVySW5mb3JtYXRpb24gPSByZW1vdGVQZWVySW5mb3JtYXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgaW5mb3JtYXRpb24gcmVsYXRpdmUgdG8gdGhlIFJlbW90ZSBQZWVyO1xyXG4gICAqIEByZXR1cm4ge09iamVjdH0gcmVtb3RlUGVlckluZm9ybWF0aW9uO1xyXG4gICAqL1xyXG4gIGdldCByZW1vdGVQZWVySW5mb3JtYXRpb24oKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIF90aGlzLl9yZW1vdGVQZWVySW5mb3JtYXRpb247XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFNldCB0aGUgZGF0YU9iamVjdCBpbiB0aGUgY29udHJvbGxlclxyXG4gICogQHBhcmFtIHtDb25uZWN0aW9uRGF0YU9iamVjdH0gZGF0YU9iamVjdCAtIGhhdmUgYWxsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzeW5jaGVyIG9iamVjdDtcclxuICAqL1xyXG4gIHNldCBkYXRhT2JqZWN0UmVwb3J0ZXIoZGF0YU9iamVjdFJlcG9ydGVyKSB7XHJcbiAgICBpZiAoIWRhdGFPYmplY3RSZXBvcnRlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgRGF0YSBPYmplY3QgUmVwb3J0ZXIgaXMgYSBuZWVkZWQgcGFyYW1ldGVyJyk7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIF90aGlzLl9kYXRhT2JqZWN0UmVwb3J0ZXIgPSBkYXRhT2JqZWN0UmVwb3J0ZXI7XHJcblxyXG4gICAgbGV0IGRhdGEgPSBfdGhpcy5fZGF0YU9iamVjdFJlcG9ydGVyLmRhdGE7XHJcblxyXG4gICAgZGF0YU9iamVjdFJlcG9ydGVyLm9uU3Vic2NyaXB0aW9uKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LmFjY2VwdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKF90aGlzLm1vZGUgPT09ICdvZmZlcicpIHtcclxuICAgICAgZGF0YS5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcclxuXHJcbiAgICAgIF90aGlzLmNyZWF0ZU9mZmVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkYXRhLnBlZXIgPSBwZWVyO1xyXG5cclxuICAgICAgX3RoaXMuY3JlYXRlQW5zd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5kZWJ1ZyhfdGhpcy5fZGF0YU9iamVjdFJlcG9ydGVyKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIHJldHVybiB0aGUgZGF0YU9iamVjdCBpbiB0aGUgY29udHJvbGxlclxyXG4gICogQHJldHVybiB7Q29ubmVjdGlvbkRhdGFPYmplY3R9IGRhdGFPYmplY3RcclxuICAqL1xyXG4gIGdldCBkYXRhT2JqZWN0UmVwb3J0ZXIoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIF90aGlzLl9kYXRhT2JqZWN0UmVwb3J0ZXI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFNldCB0aGUgZGF0YU9iamVjdCBpbiB0aGUgY29udHJvbGxlclxyXG4gICogQHBhcmFtIHtDb25uZWN0aW9uRGF0YU9iamVjdH0gZGF0YU9iamVjdCAtIGhhdmUgYWxsIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzeW5jaGVyIG9iamVjdDtcclxuICAqL1xyXG4gIHNldCBkYXRhT2JqZWN0T2JzZXJ2ZXIoZGF0YU9iamVjdE9ic2VydmVyKSB7XHJcbiAgICBpZiAoIWRhdGFPYmplY3RPYnNlcnZlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgRGF0YSBPYmplY3QgT2JzZXJ2ZXIgaXMgYSBuZWVkZWQgcGFyYW1ldGVyJyk7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIF90aGlzLl9kYXRhT2JqZWN0T2JzZXJ2ZXIgPSBkYXRhT2JqZWN0T2JzZXJ2ZXI7XHJcbiAgICBfdGhpcy5jaGFuZ2VQZWVySW5mb3JtYXRpb24oZGF0YU9iamVjdE9ic2VydmVyKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIHJldHVybiB0aGUgZGF0YU9iamVjdCBpbiB0aGUgY29udHJvbGxlclxyXG4gICogQHJldHVybiB7Q29ubmVjdGlvbkRhdGFPYmplY3R9IGRhdGFPYmplY3RcclxuICAqL1xyXG4gIGdldCBkYXRhT2JqZWN0T2JzZXJ2ZXIoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgcmV0dXJuIF90aGlzLl9kYXRhT2JqZWN0T2JzZXJ2ZXI7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQZWVySW5mb3JtYXRpb24oZGF0YU9iamVjdE9ic2VydmVyKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGRhdGEgPSBkYXRhT2JqZWN0T2JzZXJ2ZXIuZGF0YTtcclxuICAgIGxldCBpc093bmVyID0gZGF0YS5oYXNPd25Qcm9wZXJ0eSgnY29ubmVjdGlvbicpO1xyXG5cclxuICAgIGxldCBwZWVyRGF0YSA9IGlzT3duZXIgPyBkYXRhLmNvbm5lY3Rpb24ub3duZXJQZWVyIDogZGF0YS5wZWVyO1xyXG5cclxuICAgIGNvbnNvbGUuaW5mbygnUGVlciBEYXRhOicsIEpTT04uc3RyaW5naWZ5KHBlZXJEYXRhKSk7XHJcblxyXG4gICAgaWYgKHBlZXJEYXRhLmhhc093blByb3BlcnR5KCdjb25uZWN0aW9uRGVzY3JpcHRpb24nKSkge1xyXG4gICAgICBfdGhpcy5wcm9jZXNzUGVlckluZm9ybWF0aW9uKHBlZXJEYXRhLmNvbm5lY3Rpb25EZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlZXJEYXRhLmhhc093blByb3BlcnR5KCdpY2VDYW5kaWRhdGVzJykpIHtcclxuICAgICAgcGVlckRhdGEuaWNlQ2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uKGljZSkge1xyXG4gICAgICAgIF90aGlzLnByb2Nlc3NQZWVySW5mb3JtYXRpb24oaWNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YU9iamVjdE9ic2VydmVyLm9uQ2hhbmdlKCcqJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgY29uc29sZS5pbmZvKCdPYnNlcnZlciBvbiBjaGFuZ2UgbWVzc2FnZTogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5wcm9jZXNzUGVlckluZm9ybWF0aW9uKGV2ZW50LmRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1BlZXJJbmZvcm1hdGlvbihkYXRhKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGNvbnNvbGUuaW5mbyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcblxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ29mZmVyJyB8fCBkYXRhLnR5cGUgPT09ICdhbnN3ZXInKSB7XHJcbiAgICAgIGNvbnNvbGUuaW5mbygnUHJvY2VzcyBDb25uZWN0aW9uIERlc2NyaXB0aW9uOiAnLCBkYXRhLnNkcCk7XHJcbiAgICAgIF90aGlzLnBlZXJDb25uZWN0aW9uLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyBSVENTZXNzaW9uRGVzY3JpcHRpb24oZGF0YSksIF90aGlzLnJlbW90ZURlc2NyaXB0aW9uU3VjY2VzcywgX3RoaXMucmVtb3RlRGVzY3JpcHRpb25FcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2NhbmRpZGF0ZScpIHtcclxuICAgICAgY29uc29sZS5pbmZvKCdQcm9jZXNzIEljZSBDYW5kaWRhdGU6ICcsIGRhdGEpO1xyXG4gICAgICBfdGhpcy5wZWVyQ29ubmVjdGlvbi5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZSh7Y2FuZGlkYXRlOiBkYXRhLmNhbmRpZGF0ZX0pLCBfdGhpcy5yZW1vdGVEZXNjcmlwdGlvblN1Y2Nlc3MsIF90aGlzLnJlbW90ZURlc2NyaXB0aW9uRXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3RlRGVzY3JpcHRpb25TdWNjZXNzKCkge1xyXG4gICAgY29uc29sZS5pbmZvKCdyZW1vdGUgc3VjY2VzcycpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3RlRGVzY3JpcHRpb25FcnJvcihlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignZXJyb3I6ICcsIGVycm9yKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZU9mZmVyKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5wZWVyQ29ubmVjdGlvbi5jcmVhdGVPZmZlcihmdW5jdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICBfdGhpcy5vbkxvY2FsU2Vzc2lvbkNyZWF0ZWQoZGVzY3JpcHRpb24pO1xyXG4gICAgfSwgX3RoaXMuaW5mb0Vycm9yLCBfdGhpcy5tZWRpYUNvbnN0cmFpbnRzKTtcclxuXHJcbiAgfVxyXG5cclxuICBjcmVhdGVBbnN3ZXIoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLnBlZXJDb25uZWN0aW9uLmNyZWF0ZUFuc3dlcihmdW5jdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgICBfdGhpcy5vbkxvY2FsU2Vzc2lvbkNyZWF0ZWQoZGVzY3JpcHRpb24pO1xyXG4gICAgfSwgX3RoaXMuaW5mb0Vycm9yKTtcclxuICB9XHJcblxyXG4gIG9uTG9jYWxTZXNzaW9uQ3JlYXRlZChkZXNjcmlwdGlvbikge1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMucGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICBsZXQgZGF0YSA9IF90aGlzLl9kYXRhT2JqZWN0UmVwb3J0ZXIuZGF0YTtcclxuICAgICAgbGV0IHNkcENvbm5lY3Rpb24gPSB7XHJcbiAgICAgICAgc2RwOiBkZXNjcmlwdGlvbi5zZHAsXHJcbiAgICAgICAgdHlwZTogZGVzY3JpcHRpb24udHlwZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKF90aGlzLm1vZGUgPT09ICdvZmZlcicpIHtcclxuICAgICAgICBkYXRhLmNvbm5lY3Rpb24ub3duZXJQZWVyLmNvbm5lY3Rpb25EZXNjcmlwdGlvbiA9IHNkcENvbm5lY3Rpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0YS5wZWVyLmNvbm5lY3Rpb25EZXNjcmlwdGlvbiA9IHNkcENvbm5lY3Rpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LCBfdGhpcy5pbmZvRXJyb3IpO1xyXG5cclxuICB9XHJcblxyXG4gIGluZm9FcnJvcihlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyLnRvU3RyaW5nKCksIGVycik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIGFjY2VwdCBhbiBpbmNvbWluZyBjb25uZWN0aW9uIHJlcXVlc3QuXHJcbiAgICogQG1ldGhvZCBhY2NlcHRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAqL1xyXG4gIGFjY2VwdChzdHJlYW0pIHtcclxuICAgIC8vIFRPRE86IFBhc3MgYXJndW1lbnQgb3B0aW9ucyBhcyBhIHN0cmVhbSwgYmVjYXVzZSBpcyBzcGVjaWZpYyBvZiBpbXBsZW1lbnRhdGlvbjtcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IHN5bmNoZXIgPSBfdGhpcy5zeW5jaGVyO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgUGVlciBJbmZvcm1hdGlvbjogJywgX3RoaXMuX3JlbW90ZVBlZXJJbmZvcm1hdGlvbik7XHJcbiAgICBsZXQgcmVtb3RlUGVlciA9IF90aGlzLl9yZW1vdGVQZWVySW5mb3JtYXRpb24uZnJvbTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmluZm8oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBTeW5jaGVyIENyZWF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxcbicpO1xyXG4gICAgICAgIHN5bmNoZXIuY3JlYXRlKF90aGlzLl9vYmplY3REZXNjVVJMLCBbcmVtb3RlUGVlcl0sIHt9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGFPYmplY3RSZXBvcnRlcikge1xyXG4gICAgICAgICAgY29uc29sZS5pbmZvKCcyLiBSZXR1cm4gdGhlIERhdGEgT2JqZWN0IFJlcG9ydGVyICcsIGRhdGFPYmplY3RSZXBvcnRlcik7XHJcblxyXG4gICAgICAgICAgX3RoaXMuc3RyZWFtID0gc3RyZWFtO1xyXG4gICAgICAgICAgX3RoaXMuZGF0YU9iamVjdFJlcG9ydGVyID0gZGF0YU9iamVjdFJlcG9ydGVyO1xyXG4gICAgICAgICAgcmVzb2x2ZSgnYWNjZXB0ZWQnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgIHJlamVjdChyZWFzb24pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJlamVjdCgnZXJyb3IgYWNjZXB0aW5nIGNvbm5lY3Rpb24nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBVc2VkIHRvIGRlY2xpbmUgYW4gaW5jb21pbmcgY29ubmVjdGlvbiByZXF1ZXN0LlxyXG4gICogQG1ldGhvZCBkZWNsaW5lXHJcbiAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICovXHJcbiAgZGVjbGluZSgpIHtcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IHN5bmNoZXIgPSBfdGhpcy5zeW5jaGVyO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N5bmNoZXI6ICcsIHN5bmNoZXIpO1xyXG4gICAgICAgIHJlc29sdmUoJ0RlY2xpbmVkJyk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gY2xvc2UgYW4gZXhpc3RpbmcgY29ubmVjdGlvbiBpbnN0YW5jZS5cclxuICAgKiBAbWV0aG9kIGRpc2Nvbm5lY3RcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAqL1xyXG4gIGRpc2Nvbm5lY3QoKSB7XHJcblxyXG4gICAgLy8gVE9ETzogb3B0aW1pemUgdGhlIGRpc2Nvbm5lY3QgZnVuY3Rpb25cclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIF90aGlzLnBlZXJDb25uZWN0aW9uLmNsb3NlKCk7XHJcblxyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZWplY3QoJ2Vycm9yIGRpc2Nvbm5lY3RpbmcgY29ubmVjdGlvbicpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBhZGQvaW52aXRlIG5ldyBwZWVycyBvbiBhbiBleGlzdGluZyBjb25uZWN0aW9uIGluc3RhbmNlIChmb3IgbXVsdGlwYXJ0eSBjb25uZWN0aW9ucykuXHJcbiAgICogQG1ldGhvZCBhZGRQZWVyXHJcbiAgICogQHJldHVybiB7UHJvbWlzZX1cclxuICAgKi9cclxuICAgYWRkUGVlcigpIHtcclxuXHJcbiAgIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byByZW1vdmUgYSBwZWVyIGZyb20gYW4gZXhpc3RpbmcgY29ubmVjdGlvbiBpbnN0YW5jZS5cclxuICAgKiBAbWV0aG9kIHJlbW92ZVBlZXJcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxyXG4gICAqL1xyXG4gIHJlbW92ZVBlZXIoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gUGVlciBBY3Rpb25zXHJcbiAgZGlzYWJsZU1pYygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgbG9jYWxTdHJlYW0gPSBfdGhpcy5wZWVyQ29ubmVjdGlvbi5nZXRMb2NhbFN0cmVhbXMoKVswXTtcclxuICAgICAgICBsZXQgYXVkaW9UcmFjayA9IGxvY2FsU3RyZWFtLmdldEF1ZGlvVHJhY2tzKClbMF07XHJcblxyXG4gICAgICAgIGF1ZGlvVHJhY2suZW5hYmxlZCA9IGF1ZGlvVHJhY2suZW5hYmxlZCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICByZXNvbHZlKGF1ZGlvVHJhY2suZW5hYmxlZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBkaXNhYmxlQ2FtKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCBsb2NhbFN0cmVhbSA9IF90aGlzLnBlZXJDb25uZWN0aW9uLmdldExvY2FsU3RyZWFtcygpWzBdO1xyXG4gICAgICAgIGxldCB2aWRlb1RyYWNrID0gbG9jYWxTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXTtcclxuXHJcbiAgICAgICAgdmlkZW9UcmFjay5lbmFibGVkID0gdmlkZW9UcmFjay5lbmFibGVkID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICAgICAgICByZXNvbHZlKHZpZGVvVHJhY2suZW5hYmxlZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIG11dGUoKSB7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZW1vdGVTdHJlYW0gPSBfdGhpcy5wZWVyQ29ubmVjdGlvbi5nZXRSZW1vdGVTdHJlYW1zKClbMF07XHJcbiAgICAgICAgbGV0IGF1ZGlvVHJhY2sgPSByZW1vdGVTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXTtcclxuXHJcbiAgICAgICAgYXVkaW9UcmFjay5lbmFibGVkID0gYXVkaW9UcmFjay5lbmFibGVkID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICAgICAgICByZXNvbHZlKGF1ZGlvVHJhY2suZW5hYmxlZCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25uZWN0aW9uQ29udHJvbGxlcjtcclxuIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuLyoganNoaW50IHVuZGVmOiB0cnVlICovXHJcblxyXG4vLyBTZXJ2aWNlIEZyYW1ld29ya1xyXG5pbXBvcnQgSHlwZXJ0eURpc2NvdmVyeSBmcm9tICdzZXJ2aWNlLWZyYW1ld29yay9kaXN0L0h5cGVydHlEaXNjb3ZlcnknO1xyXG5pbXBvcnQge1N5bmNoZXJ9IGZyb20gJ3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3luY2hlcic7XHJcblxyXG4vLyBVdGlsc1xyXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL3V0aWxzL0V2ZW50RW1pdHRlcic7XHJcbmltcG9ydCB7ZGl2aWRlVVJMfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG4vLyBJbnRlcm5hbHNcclxuaW1wb3J0IENvbm5lY3Rpb25Db250cm9sbGVyIGZyb20gJy4vQ29ubmVjdGlvbkNvbnRyb2xsZXInO1xyXG5cclxuLyoqXHJcbiogSHlwZXJ0eSBDb25uZWN0b3I7XHJcbiogQGF1dGhvciBWaXRvciBTaWx2YSBbdml0b3ItdC1zaWx2YUB0ZWxlY29tLnB0XVxyXG4qIEB2ZXJzaW9uIDAuMS4wXHJcbiovXHJcbmNsYXNzIEh5cGVydHlDb25uZWN0b3IgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG5cclxuICAvKipcclxuICAqIENyZWF0ZSBhIG5ldyBIeXBlcnR5IENvbm5lY3RvclxyXG4gICogQHBhcmFtICB7U3luY2hlcn0gc3luY2hlciAtIFN5bmNoZXIgcHJvdmlkZWQgZnJvbSB0aGUgcnVudGltZSBjb3JlXHJcbiAgKi9cclxuICBjb25zdHJ1Y3RvcihoeXBlcnR5VVJMLCBidXMsIGNvbmZpZ3VyYXRpb24pIHtcclxuXHJcbiAgICBpZiAoIWh5cGVydHlVUkwpIHRocm93IG5ldyBFcnJvcignVGhlIGh5cGVydHlVUkwgaXMgYSBuZWVkZWQgcGFyYW1ldGVyJyk7XHJcbiAgICBpZiAoIWJ1cykgdGhyb3cgbmV3IEVycm9yKCdUaGUgTWluaUJ1cyBpcyBhIG5lZWRlZCBwYXJhbWV0ZXInKTtcclxuICAgIGlmICghY29uZmlndXJhdGlvbikgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29uZmlndXJhdGlvbiBpcyBhIG5lZWRlZCBwYXJhbWV0ZXInKTtcclxuXHJcbiAgICBzdXBlcihoeXBlcnR5VVJMLCBidXMsIGNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBfdGhpcy5faHlwZXJ0eVVSTCA9IGh5cGVydHlVUkw7XHJcbiAgICBfdGhpcy5fYnVzID0gYnVzO1xyXG4gICAgX3RoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xyXG4gICAgX3RoaXMuX2RvbWFpbiA9IGRpdmlkZVVSTChoeXBlcnR5VVJMKS5kb21haW47XHJcblxyXG4gICAgX3RoaXMuX29iamVjdERlc2NVUkwgPSAnaHlwZXJ0eS1jYXRhbG9ndWU6Ly8nICsgX3RoaXMuX2RvbWFpbiArICcvLndlbGwta25vd24vZGF0YXNjaGVtYXMvRmFrZURhdGFTY2hlbWEnO1xyXG5cclxuICAgIF90aGlzLl9jb250cm9sbGVycyA9IHt9O1xyXG5cclxuICAgIF90aGlzLmh5cGVydHlEaXNjb3ZlcnkgPSBuZXcgSHlwZXJ0eURpc2NvdmVyeShoeXBlcnR5VVJMLCBidXMpO1xyXG5cclxuICAgIGxldCBzeW5jaGVyID0gbmV3IFN5bmNoZXIoaHlwZXJ0eVVSTCwgYnVzLCBjb25maWd1cmF0aW9uKTtcclxuICAgIHN5bmNoZXIub25Ob3RpZmljYXRpb24oZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgX3RoaXMuX29uTm90aWZpY2F0aW9uKGV2ZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIF90aGlzLl9zeW5jaGVyID0gc3luY2hlcjtcclxuICB9XHJcblxyXG4gIF9vbk5vdGlmaWNhdGlvbihldmVudCkge1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgY29uc29sZS5pbmZvKCctLS0tLS0tLS0tLS0gQWNrbm93bGVkZ2VzIHRoZSBSZXBvcnRlciAtLS0tLS0tLS0tLS0gXFxuJyk7XHJcbiAgICBldmVudC5hY2soKTtcclxuICAgIGNvbnNvbGUuaW5mbygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxcbicpO1xyXG5cclxuICAgIGlmIChfdGhpcy5fY29udHJvbGxlcnNbZXZlbnQuZnJvbV0pIHtcclxuICAgICAgX3RoaXMuX2F1dG9TdWJzY3JpYmUoZXZlbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX3RoaXMuX2F1dG9BY2NlcHQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIF9hdXRvU3Vic2NyaWJlKGV2ZW50KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IHN5bmNoZXIgPSBfdGhpcy5fc3luY2hlcjtcclxuXHJcbiAgICBjb25zb2xlLmluZm8oJy0tLS0tLS0tLS0tLS0tLS0gU3luY2hlciBBdXRvIFN1YnNjcmliZSAtLS0tLS0tLS0tLS0tLS0tIFxcbicpO1xyXG4gICAgY29uc29sZS5pbmZvKCdTdWJzY3JpYmUgVVJMIE9iamVjdCAnLCBldmVudCwgc3luY2hlcik7XHJcbiAgICBzeW5jaGVyLnN1YnNjcmliZShfdGhpcy5fb2JqZWN0RGVzY1VSTCwgZXZlbnQudXJsKS50aGVuKGZ1bmN0aW9uKGRhdGFPYmplY3RPYnNlcnZlcikge1xyXG4gICAgICBjb25zb2xlLmluZm8oJzEuIFJldHVybiBTdWJzY3JpYmUgRGF0YSBPYmplY3QgT2JzZXJ2ZXInLCBkYXRhT2JqZWN0T2JzZXJ2ZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhfdGhpcy5fY29udHJvbGxlcnMpO1xyXG4gICAgICBfdGhpcy5fY29udHJvbGxlcnNbZXZlbnQuZnJvbV0uZGF0YU9iamVjdE9ic2VydmVyID0gZGF0YU9iamVjdE9ic2VydmVyO1xyXG5cclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKHJlYXNvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9hdXRvQWNjZXB0KGV2ZW50KSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IHN5bmNoZXIgPSBfdGhpcy5fc3luY2hlcjtcclxuXHJcbiAgICBjb25zb2xlLmluZm8oJy0tLS0tLS0tLS0tIFN5bmNoZXIgU3Vic2NyaWJlIChBdXRvIEFjY2VwdCkgLS0tLS0tLS0tLS0tLSBcXG4nKTtcclxuICAgIGNvbnNvbGUuaW5mbygnU3Vic2NyaWJlIFVSTCBPYmplY3QgJywgZXZlbnQsIHN5bmNoZXIpO1xyXG4gICAgc3luY2hlci5zdWJzY3JpYmUoX3RoaXMuX29iamVjdERlc2NVUkwsIGV2ZW50LnVybCkudGhlbihmdW5jdGlvbihkYXRhT2JqZWN0T2JzZXJ2ZXIpIHtcclxuICAgICAgY29uc29sZS5pbmZvKCcxLiBSZXR1cm4gU3Vic2NyaWJlIERhdGEgT2JqZWN0IE9ic2VydmVyJywgZGF0YU9iamVjdE9ic2VydmVyKTtcclxuXHJcbiAgICAgIGxldCBjb25uZWN0aW9uQ29udHJvbGxlciA9IG5ldyBDb25uZWN0aW9uQ29udHJvbGxlcihzeW5jaGVyLCBfdGhpcy5fZG9tYWluLCBfdGhpcy5fY29uZmlndXJhdGlvbik7XHJcbiAgICAgIGNvbm5lY3Rpb25Db250cm9sbGVyLnJlbW90ZVBlZXJJbmZvcm1hdGlvbiA9IGV2ZW50O1xyXG4gICAgICBjb25uZWN0aW9uQ29udHJvbGxlci5kYXRhT2JqZWN0T2JzZXJ2ZXIgPSBkYXRhT2JqZWN0T2JzZXJ2ZXI7XHJcblxyXG4gICAgICBfdGhpcy50cmlnZ2VyKCdjb25uZWN0b3I6Y29ubmVjdGVkJywgY29ubmVjdGlvbkNvbnRyb2xsZXIpO1xyXG4gICAgICBfdGhpcy50cmlnZ2VyKCdoYXZlOm5vdGlmaWNhdGlvbicsIGV2ZW50KTtcclxuXHJcbiAgICAgIGNvbnNvbGUuaW5mbygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxcbicpO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVhc29uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBFc3RhYmxpc2ggY29ubmVjdGlvbiB3aXRoIG90aGVyIGNsaWVudCBpZGVudGlmaWVyXHJcbiAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMfSBIeXBlcnR5VVJMIC0gRGVmaW5lIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBvdGhlciBjb21wb25lbnRcclxuICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgdG8gaW1wcm92ZSB0aGUgY29ubmVjdFxyXG4gICovXHJcbiAgY29ubmVjdChoeXBlcnR5VVJMLCBzdHJlYW0pIHtcclxuICAgIC8vIFRPRE86IFBhc3MgYXJndW1lbnQgb3B0aW9ucyBhcyBhIHN0cmVhbSwgYmVjYXVzZSBpcyBzcGVjaWZpYyBvZiBpbXBsZW1lbnRhdGlvbjtcclxuICAgIC8vIFRPRE86IENIYW5nZSB0aGUgaHlwZXJ0eVVSTCBmb3IgYSBsaXN0IG9mIFVSTFNcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgc3luY2hlciA9IF90aGlzLl9zeW5jaGVyO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICAgIGxldCBjb25uZWN0aW9uQ29udHJvbGxlcjtcclxuICAgICAgY29uc29sZS5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU3luY2hlciBDcmVhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcXG4nKTtcclxuICAgICAgc3luY2hlci5jcmVhdGUoX3RoaXMuX29iamVjdERlc2NVUkwsIFtoeXBlcnR5VVJMXSwge30pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGFPYmplY3RSZXBvcnRlcikge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnMS4gUmV0dXJuIENyZWF0ZSBEYXRhIE9iamVjdCBSZXBvcnRlcicsIGRhdGFPYmplY3RSZXBvcnRlcik7XHJcblxyXG4gICAgICAgIGNvbm5lY3Rpb25Db250cm9sbGVyID0gbmV3IENvbm5lY3Rpb25Db250cm9sbGVyKHN5bmNoZXIsIF90aGlzLl9kb21haW4sIF90aGlzLl9jb25maWd1cmF0aW9uKTtcclxuICAgICAgICBjb25uZWN0aW9uQ29udHJvbGxlci5zdHJlYW0gPSBzdHJlYW07XHJcbiAgICAgICAgY29ubmVjdGlvbkNvbnRyb2xsZXIuZGF0YU9iamVjdFJlcG9ydGVyID0gZGF0YU9iamVjdFJlcG9ydGVyO1xyXG5cclxuICAgICAgICBfdGhpcy5fY29udHJvbGxlcnNbaHlwZXJ0eVVSTF0gPSBjb25uZWN0aW9uQ29udHJvbGxlcjtcclxuXHJcbiAgICAgICAgcmVzb2x2ZShjb25uZWN0aW9uQ29udHJvbGxlcik7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcXG4nKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IocmVhc29uKTtcclxuICAgICAgICByZWplY3QocmVhc29uKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGUoaHlwZXJ0eVVSTCwgYnVzLCBjb25maWd1cmF0aW9uKSB7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnSHlwZXJ0eUNvbm5lY3RvcicsXHJcbiAgICBpbnN0YW5jZTogbmV3IEh5cGVydHlDb25uZWN0b3IoaHlwZXJ0eVVSTCwgYnVzLCBjb25maWd1cmF0aW9uKVxyXG4gIH07XHJcblxyXG59XHJcbiIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbi8vIGRhdGFPYmplY3RSZXBvcnRlci5kYXRhID0ge1xyXG4vLyAgICBzdGF0dXMgOiBcImNvbm5lY3RlZFwiLFxyXG4vLyAgICBvd25lciA6IFwiaHlwZXJ0eTovL2V4YW1wbGUuY29tL2FsaWNlaHlcIixcclxuLy8gICAgcGVlciA6IFwiY29ubmVjdGlvbjovL2V4YW1wbGUuY29tL2FsaWNlL2JvYjI3MDEyMDE2XCIsXHJcbi8vICAgIG93bmVyUGVlciA6IHtcclxuLy8gICAgICAgICAgY29ubmVjdGlvbkRlc2NyaXB0aW9uOiB7XHJcbi8vICAgICAgICAgICAgIHNkcDogJ3M0ZGZhZjFzYTNmMWFzZDVmNHNkYWZhJyxcclxuLy8gICAgICAgICAgICAgdHlwZTogJ29mZmVyJ1xyXG4vLyAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICBpY2VDYW5kaWRhdGVzOiBbe1xyXG4vLyAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXHJcbi8vICAgICAgICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUsXHJcbi8vICAgICAgICAgICAgICBzZHBNaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXHJcbi8vICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleFxyXG4vLyAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAge1xyXG4vLyAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXHJcbi8vICAgICAgICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUsXHJcbi8vICAgICAgICAgICAgICBzZHBNaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXHJcbi8vICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleFxyXG4vLyAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgLi4uLi5cclxuLy8gICAgICAgIF1cclxuLy8gICAgICB9XHJcbi8vICB9XHJcblxyXG5sZXQgY29ubmVjdGlvbiA9IHtcclxuICAgc3RhdHVzIDogXCJjb25uZWN0ZWRcIixcclxuICAgb3duZXIgOiBcImh5cGVydHk6Ly9leGFtcGxlLmNvbS9hbGljZWh5XCIsXHJcbiAgIHBlZXIgOiBcImNvbm5lY3Rpb246Ly9leGFtcGxlLmNvbS9hbGljZS9ib2IyNzAxMjAxNlwiLFxyXG4gICBvd25lclBlZXIgOiB7XHJcbiAgICAgY29ubmVjdGlvbkRlc2NyaXB0aW9uOiB7fSxcclxuICAgICBpY2VDYW5kaWRhdGVzOiBbXVxyXG4gICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0aW9uO1xyXG4iLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG5sZXQgcGVlciA9IHtcclxuICBjb25uZWN0aW9uRGVzY3JpcHRpb246IHt9LFxyXG4gIGljZUNhbmRpZGF0ZXM6IFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlZXI7XHJcbiIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbi8qKlxyXG4gKiBFdmVudEVtaXR0ZXJcclxuICogQWxsIGNsYXNzZXMgd2hpY2ggZXh0ZW5kcyB0aGlzLCBjYW4gaGF2ZSBhZGRFdmVudExpc3RlbmVyIGFuZCB0cmlnZ2VyIGV2ZW50cztcclxuICovXHJcbmNsYXNzIEV2ZW50RW1pdHRlciB7XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZEV2ZW50TGlzdGVuZXIgbGlzdGVuIGZvciBhbiBldmVudFR5cGVcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgZXZlbnRUeXBlIC0gbGlzdGVuaW5nIGZvciB0aGlzIHR5cGUgb2YgZXZlbnRcclxuICAgKiBAcGFyYW0gIHtGdW5jdGlvbn0gICAgICAgY2IgICAgICAgIC0gY2FsbGJhY2sgZnVuY3Rpb24gd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBldmVudCBpdCBpcyBpbnZva2VkXHJcbiAgICovXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNiKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgX3RoaXNbZXZlbnRUeXBlXSA9IGNiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW52b2tlIHRoZSBldmVudFR5cGVcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGV2ZW50VHlwZSAtIGV2ZW50IHdpbGwgYmUgaW52b2tlZFxyXG4gICAqIEBwYXJhbSAge29iamVjdH0gcGFyYW1zIC0gcGFyYW1ldGVycyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAqL1xyXG4gIHRyaWdnZXIoZXZlbnRUeXBlLCBwYXJhbXMpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgaWYgKF90aGlzW2V2ZW50VHlwZV0pIHtcclxuICAgICAgX3RoaXNbZXZlbnRUeXBlXShwYXJhbXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlcjtcclxuIiwiLyoqXHJcbiAqIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4gKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuICogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuICogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuICogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiAqIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICoqL1xyXG5cclxuLy8ganNoaW50IGJyb3dzZXI6dHJ1ZSwganF1ZXJ5OiB0cnVlXHJcbi8vIGpzaGludCB2YXJzdG10OiB0cnVlXHJcbi8qIGdsb2JhbCBIYW5kbGViYXJzICovXHJcblxyXG4vKipcclxuICogU3VwcG9ydCBtb2R1bGUgd2l0aCBzb21lIGZ1bmN0aW9ucyB3aWxsIGJlIHVzZWZ1bFxyXG4gKiBAbW9kdWxlIHV0aWxzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIGRpdmlkZVVSTFxyXG4gKiBAdHlwZSBPYmplY3RcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgb2YgVVJMXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBvZiBVUkxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGlkZW50aXR5IFRoZSBpZGVudGl0eSBvZiBVUkxcclxuICovXHJcblxyXG4vKipcclxuICogRGl2aWRlIGFuIHVybCBpbiB0eXBlLCBkb21haW4gYW5kIGlkZW50aXR5XHJcbiAqIEBwYXJhbSAge1VSTC5VUkx9IHVybCAtIHVybCBhZGRyZXNzXHJcbiAqIEByZXR1cm4ge2RpdmlkZVVSTH0gdGhlIHJlc3VsdCBvZiBkaXZpZGVVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVVUkwodXJsKSB7XHJcblxyXG4gIC8vIGxldCByZSA9IC8oW2EtekEtWi1dKik/OlxcL1xcLyg/OlxcLik/KFstYS16QS1aMC05QDolLl9cXCt+Iz1dezIsMjU2fVxcLlthLXpdezIsNn1cXGIpKihcXC9bXFwvXFxkXFx3XFwuLV0qKSooPzpbXFw/XSkqKC4rKSovZ2k7XHJcbiAgbGV0IHJlID0gLyhbYS16QS1aLV0qKTpcXC9cXC8oPzpcXC4pPyhbLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn0pKFstYS16QS1aMC05QDolLl9cXCt+Iz1cXC9dKikvZ2k7XHJcbiAgbGV0IHN1YnN0ID0gJyQxLCQyLCQzJztcclxuICBsZXQgcGFydHMgPSB1cmwucmVwbGFjZShyZSwgc3Vic3QpLnNwbGl0KCcsJyk7XHJcblxyXG4gIC8vIElmIHRoZSB1cmwgaGFzIG5vIHByb3RvY29sLCB0aGUgZGVmYXVsdCBwcm90b2NvbCBzZXQgaXMgaHR0cHNcclxuICBpZiAocGFydHNbMF0gPT09IHVybCkge1xyXG4gICAgcGFydHNbMF0gPSAnaHR0cHMnO1xyXG4gICAgcGFydHNbMV0gPSB1cmw7XHJcbiAgfVxyXG5cclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgdHlwZTogcGFydHNbMF0sXHJcbiAgICBkb21haW46IHBhcnRzWzFdLFxyXG4gICAgaWRlbnRpdHk6IHBhcnRzWzJdXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNYWtlIGEgQ09QWSBvZiB0aGUgb3JpZ2luYWwgZGF0YVxyXG4gKiBAcGFyYW0gIHtPYmplY3R9ICBvYmogLSBvYmplY3QgdG8gYmUgY2xvbmVkXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWVwQ2xvbmUob2JqKSB7XHJcbiAgLy9UT0RPOiBzaW1wbGUgYnV0IGluZWZmaWNpZW50IEpTT04gZGVlcCBjbG9uZS4uLlxyXG4gIGlmIChvYmopIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IFdlYlJUQyBBUEkgcmVzb3VyY2VzXHJcbiAqIEBwYXJhbSAge09iamVjdH0gICAgIG9wdGlvbnMgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluZm9ybWF0aW9uIHRoYXQgcmVzb3VyY2VzIHdpbGwgYmUgdXNlZCAoY2FtZXJhLCBtaWMsIHJlc29sdXRpb24sIGV0Yyk7XHJcbiAqIEByZXR1cm4ge1Byb21pc2V9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKSB7XHJcblxyXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuXHJcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24obWVkaWFTdHJlYW0pIHtcclxuICAgICAgICByZXNvbHZlKG1lZGlhU3RyZWFtKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgIHJlamVjdChyZWFzb24pO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZSgpIHtcclxuXHJcbiAgJC5mbi5zZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGxldCBvID0ge307XHJcbiAgICBsZXQgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcclxuICAgICQuZWFjaChhLCBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xyXG4gICAgICAgICAgb1t0aGlzLm5hbWVdID0gW29bdGhpcy5uYW1lXV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvW3RoaXMubmFtZV0ucHVzaCh0aGlzLnZhbHVlIHx8ICcnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbztcclxuICB9O1xyXG5cclxuICAkLmZuLnNlcmlhbGl6ZU9iamVjdEFycmF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgbyA9IHt9O1xyXG4gICAgbGV0IGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAkLmVhY2goYSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmIChvW3RoaXMubmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcclxuICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IFtvW3RoaXMubmFtZV1dO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSB8fCAnJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0pIG9bdGhpcy5uYW1lXSA9IFtdO1xyXG4gICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUgfHwgJycpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbztcclxuICB9O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlbXBsYXRlKHBhdGgsIHNjcmlwdCkge1xyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblxyXG4gICAgaWYgKEhhbmRsZWJhcnMudGVtcGxhdGVzID09PSB1bmRlZmluZWQgfHwgSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBIYW5kbGViYXJzLnRlbXBsYXRlcyA9IHt9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzb2x2ZShIYW5kbGViYXJzLnRlbXBsYXRlc1tuYW1lXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRlbXBsYXRlRmlsZSA9ICQuYWpheCh7XHJcbiAgICAgIHVybDogcGF0aCArICcuaGJzJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIEhhbmRsZWJhcnMudGVtcGxhdGVzW25hbWVdID0gSGFuZGxlYmFycy5jb21waWxlKGRhdGEpO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlYXNvbjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IHNjcmlwdEZpbGUgPSAkLmdldFNjcmlwdChzY3JpcHQpO1xyXG5cclxuICAgIGxldCByZXF1ZXN0cyA9IFtdO1xyXG4gICAgaWYgKHBhdGgpIHJlcXVlc3RzLnB1c2godGVtcGxhdGVGaWxlKTtcclxuICAgIGlmIChzY3JpcHQpIHJlcXVlc3RzLnB1c2goc2NyaXB0RmlsZSk7XHJcblxyXG4gICAgUHJvbWlzZS5hbGwocmVxdWVzdHMpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgIHJlc29sdmUoSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV0pO1xyXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgIHJlamVjdChyZWFzb24pO1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG59XHJcbiJdfQ==
