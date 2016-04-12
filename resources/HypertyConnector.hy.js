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
exports.getConfig = getConfig;
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
 * Get the configuration from an json file;
 * @param  {JSONObject} jsonFile
 * @return {object}
 */
function getConfig(JSONObject) {
  console.log('development');
  return JSONObject['development'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvc2VydmljZS1mcmFtZXdvcmsvZGlzdC9IeXBlcnR5RGlzY292ZXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NlcnZpY2UtZnJhbWV3b3JrL2Rpc3QvU3luY2hlci5qcyIsIm5vZGVfbW9kdWxlcy93ZWJydGMtYWRhcHRlci10ZXN0L2FkYXB0ZXIuanMiLCJzcmMvaHlwZXJ0eS1jb25uZWN0b3IvQ29ubmVjdGlvbkNvbnRyb2xsZXIuanMiLCJzcmMvaHlwZXJ0eS1jb25uZWN0b3IvSHlwZXJ0eUNvbm5lY3Rvci5oeS5qcyIsInNyYy9oeXBlcnR5LWNvbm5lY3Rvci9jb25uZWN0aW9uLmpzIiwic3JjL2h5cGVydHktY29ubmVjdG9yL3BlZXIuanMiLCJzcmMvdXRpbHMvRXZlbnRFbWl0dGVyLmpzIiwic3JjL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QztHQUExQixDQUFuQixDQUZ3QztDQUFuQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8vIERpc3RyaWJ1dGlvbiBmaWxlIGZvciBIeXBlcnR5RGlzY292ZXJ5LmpzIFxuLy8gdmVyc2lvbjogMC4xLjBcblxuIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgdDt0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyx0Lkh5cGVydHlEaXNjb3Zlcnk9ZSgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZSh0LHIsbil7ZnVuY3Rpb24gbyhjLHMpe2lmKCFyW2NdKXtpZighdFtjXSl7dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighcyYmdSlyZXR1cm4gdShjLCEwKTtpZihpKXJldHVybiBpKGMsITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrYytcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIGY9cltjXT17ZXhwb3J0czp7fX07dFtjXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgcj10W2NdWzFdW2VdO3JldHVybiBvKHI/cjplKX0sZixmLmV4cG9ydHMsZSx0LHIsbil9cmV0dXJuIHJbY10uZXhwb3J0c31mb3IodmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxjPTA7YzxuLmxlbmd0aDtjKyspbyhuW2NdKTtyZXR1cm4gb30oezE6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSxfX2VzTW9kdWxlOiEwfX0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIjo5fV0sMjpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiOjEwfV0sMzpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1lKFwiLi9jbGFzc0NhbGxDaGVjay5qc1wiKX0se1wiLi9jbGFzc0NhbGxDaGVjay5qc1wiOjR9XSw0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ci5fX2VzTW9kdWxlPSEwLHJbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX19LHt9XSw1OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWUoXCIuL2NyZWF0ZUNsYXNzLmpzXCIpfSx7XCIuL2NyZWF0ZUNsYXNzLmpzXCI6Nn1dLDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ci5fX2VzTW9kdWxlPSEwO3ZhciBvPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSxpPW4obyk7cltcImRlZmF1bHRcIl09ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBuPXRbcl07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLCgwLGlbXCJkZWZhdWx0XCJdKShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxyLG4pe3JldHVybiByJiZlKHQucHJvdG90eXBlLHIpLG4mJmUodCxuKSx0fX0oKX0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIjoxfV0sNzpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1lKFwiLi9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanNcIil9LHtcIi4vaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCI6OH1dLDg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtyLl9fZXNNb2R1bGU9ITAscltcImRlZmF1bHRcIl09ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX19LHt9XSw5OltmdW5jdGlvbihlLHQscil7ZShcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHlcIik7dmFyIG49ZShcIi4uLy4uL21vZHVsZXMvX2NvcmVcIikuT2JqZWN0O3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscil7cmV0dXJuIG4uZGVmaW5lUHJvcGVydHkoZSx0LHIpfX0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjE4LFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eVwiOjczfV0sMTA6W2Z1bmN0aW9uKGUsdCxyKXtlKFwiLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiKSxlKFwiLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCIpLGUoXCIuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIiksZShcIi4uL21vZHVsZXMvZXM2LnByb21pc2VcIiksdC5leHBvcnRzPWUoXCIuLi9tb2R1bGVzL19jb3JlXCIpLlByb21pc2V9LHtcIi4uL21vZHVsZXMvX2NvcmVcIjoxOCxcIi4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIjo3NCxcIi4uL21vZHVsZXMvZXM2LnByb21pc2VcIjo3NSxcIi4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiOjc2LFwiLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6Nzd9XSwxMTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IFR5cGVFcnJvcihlK1wiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gZX19LHt9XSwxMjpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbigpe319LHt9XSwxMzpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixuKXtpZighKGUgaW5zdGFuY2VvZiB0KXx8dm9pZCAwIT09biYmbiBpbiBlKXRocm93IFR5cGVFcnJvcihyK1wiOiBpbmNvcnJlY3QgaW52b2NhdGlvbiFcIik7cmV0dXJuIGV9fSx7fV0sMTQ6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9faXMtb2JqZWN0XCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtpZighbihlKSl0aHJvdyBUeXBlRXJyb3IoZStcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gZX19LHtcIi4vX2lzLW9iamVjdFwiOjM1fV0sMTU6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fdG8taW9iamVjdFwiKSxvPWUoXCIuL190by1sZW5ndGhcIiksaT1lKFwiLi9fdG8taW5kZXhcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0LHIsYyl7dmFyIHMsdT1uKHQpLGE9byh1Lmxlbmd0aCksZj1pKGMsYSk7aWYoZSYmciE9cil7Zm9yKDthPmY7KWlmKHM9dVtmKytdLHMhPXMpcmV0dXJuITB9ZWxzZSBmb3IoO2E+ZjtmKyspaWYoKGV8fGYgaW4gdSkmJnVbZl09PT1yKXJldHVybiBlfHxmO3JldHVybiFlJiYtMX19fSx7XCIuL190by1pbmRleFwiOjYzLFwiLi9fdG8taW9iamVjdFwiOjY1LFwiLi9fdG8tbGVuZ3RoXCI6NjZ9XSwxNjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19jb2ZcIiksbz1lKFwiLi9fd2tzXCIpKFwidG9TdHJpbmdUYWdcIiksaT1cIkFyZ3VtZW50c1wiPT1uKGZ1bmN0aW9uKCl7cmV0dXJuIGFyZ3VtZW50c30oKSksYz1mdW5jdGlvbihlLHQpe3RyeXtyZXR1cm4gZVt0XX1jYXRjaChyKXt9fTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQscixzO3JldHVybiB2b2lkIDA9PT1lP1wiVW5kZWZpbmVkXCI6bnVsbD09PWU/XCJOdWxsXCI6XCJzdHJpbmdcIj09dHlwZW9mKHI9Yyh0PU9iamVjdChlKSxvKSk/cjppP24odCk6XCJPYmplY3RcIj09KHM9bih0KSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY2FsbGVlP1wiQXJndW1lbnRzXCI6c319LHtcIi4vX2NvZlwiOjE3LFwiLi9fd2tzXCI6NzB9XSwxNzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXt9LnRvU3RyaW5nO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gbi5jYWxsKGUpLnNsaWNlKDgsLTEpfX0se31dLDE4OltmdW5jdGlvbihlLHQscil7dmFyIG49dC5leHBvcnRzPXt2ZXJzaW9uOlwiMi4yLjFcIn07XCJudW1iZXJcIj09dHlwZW9mIF9fZSYmKF9fZT1uKX0se31dLDE5OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2EtZnVuY3Rpb25cIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtpZihuKGUpLHZvaWQgMD09PXQpcmV0dXJuIGU7c3dpdGNoKHIpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIGUuY2FsbCh0LHIpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKHIsbil7cmV0dXJuIGUuY2FsbCh0LHIsbil9O2Nhc2UgMzpyZXR1cm4gZnVuY3Rpb24ocixuLG8pe3JldHVybiBlLmNhbGwodCxyLG4sbyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHQsYXJndW1lbnRzKX19fSx7XCIuL19hLWZ1bmN0aW9uXCI6MTF9XSwyMDpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlKXtpZih2b2lkIDA9PWUpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiK2UpO3JldHVybiBlfX0se31dLDIxOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPSFlKFwiLi9fZmFpbHNcIikoZnVuY3Rpb24oKXtyZXR1cm4gNyE9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gN319KS5hfSl9LHtcIi4vX2ZhaWxzXCI6MjV9XSwyMjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19pcy1vYmplY3RcIiksbz1lKFwiLi9fZ2xvYmFsXCIpLmRvY3VtZW50LGk9bihvKSYmbihvLmNyZWF0ZUVsZW1lbnQpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gaT9vLmNyZWF0ZUVsZW1lbnQoZSk6e319fSx7XCIuL19nbG9iYWxcIjoyNyxcIi4vX2lzLW9iamVjdFwiOjM1fV0sMjM6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9XCJjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2ZcIi5zcGxpdChcIixcIil9LHt9XSwyNDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19nbG9iYWxcIiksbz1lKFwiLi9fY29yZVwiKSxpPWUoXCIuL19jdHhcIiksYz1lKFwiLi9faGlkZVwiKSxzPVwicHJvdG90eXBlXCIsdT1mdW5jdGlvbihlLHQscil7dmFyIGEsZixfLGw9ZSZ1LkYscD1lJnUuRyxkPWUmdS5TLHY9ZSZ1LlAsaD1lJnUuQix5PWUmdS5XLGI9cD9vOm9bdF18fChvW3RdPXt9KSxtPWJbc10sZz1wP246ZD9uW3RdOihuW3RdfHx7fSlbc107cCYmKHI9dCk7Zm9yKGEgaW4gcilmPSFsJiZnJiZ2b2lkIDAhPT1nW2FdLGYmJmEgaW4gYnx8KF89Zj9nW2FdOnJbYV0sYlthXT1wJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBnW2FdP3JbYV06aCYmZj9pKF8sbik6eSYmZ1thXT09Xz9mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbih0LHIsbil7aWYodGhpcyBpbnN0YW5jZW9mIGUpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIG5ldyBlO2Nhc2UgMTpyZXR1cm4gbmV3IGUodCk7Y2FzZSAyOnJldHVybiBuZXcgZSh0LHIpfXJldHVybiBuZXcgZSh0LHIsbil9cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtyZXR1cm4gdFtzXT1lW3NdLHR9KF8pOnYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIF8/aShGdW5jdGlvbi5jYWxsLF8pOl8sdiYmKChiLnZpcnR1YWx8fChiLnZpcnR1YWw9e30pKVthXT1fLGUmdS5SJiZtJiYhbVthXSYmYyhtLGEsXykpKX07dS5GPTEsdS5HPTIsdS5TPTQsdS5QPTgsdS5CPTE2LHUuVz0zMix1LlU9NjQsdS5SPTEyOCx0LmV4cG9ydHM9dX0se1wiLi9fY29yZVwiOjE4LFwiLi9fY3R4XCI6MTksXCIuL19nbG9iYWxcIjoyNyxcIi4vX2hpZGVcIjoyOX1dLDI1OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4hIWUoKX1jYXRjaCh0KXtyZXR1cm4hMH19fSx7fV0sMjY6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fY3R4XCIpLG89ZShcIi4vX2l0ZXItY2FsbFwiKSxpPWUoXCIuL19pcy1hcnJheS1pdGVyXCIpLGM9ZShcIi4vX2FuLW9iamVjdFwiKSxzPWUoXCIuL190by1sZW5ndGhcIiksdT1lKFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLGEsZil7dmFyIF8sbCxwLGQ9Zj9mdW5jdGlvbigpe3JldHVybiBlfTp1KGUpLHY9bihyLGEsdD8yOjEpLGg9MDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBkKXRocm93IFR5cGVFcnJvcihlK1wiIGlzIG5vdCBpdGVyYWJsZSFcIik7aWYoaShkKSlmb3IoXz1zKGUubGVuZ3RoKTtfPmg7aCsrKXQ/dihjKGw9ZVtoXSlbMF0sbFsxXSk6dihlW2hdKTtlbHNlIGZvcihwPWQuY2FsbChlKTshKGw9cC5uZXh0KCkpLmRvbmU7KW8ocCx2LGwudmFsdWUsdCl9fSx7XCIuL19hbi1vYmplY3RcIjoxNCxcIi4vX2N0eFwiOjE5LFwiLi9faXMtYXJyYXktaXRlclwiOjM0LFwiLi9faXRlci1jYWxsXCI6MzYsXCIuL190by1sZW5ndGhcIjo2NixcIi4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kXCI6NzF9XSwyNzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPW4pfSx7fV0sMjg6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj17fS5oYXNPd25Qcm9wZXJ0eTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbi5jYWxsKGUsdCl9fSx7fV0sMjk6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fb2JqZWN0LWRwXCIpLG89ZShcIi4vX3Byb3BlcnR5LWRlc2NcIik7dC5leHBvcnRzPWUoXCIuL19kZXNjcmlwdG9yc1wiKT9mdW5jdGlvbihlLHQscil7cmV0dXJuIG4uZihlLHQsbygxLHIpKX06ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBlW3RdPXIsZX19LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MjEsXCIuL19vYmplY3QtZHBcIjo0NSxcIi4vX3Byb3BlcnR5LWRlc2NcIjo1Mn1dLDMwOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWUoXCIuL19nbG9iYWxcIikuZG9jdW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudH0se1wiLi9fZ2xvYmFsXCI6Mjd9XSwzMTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz0hZShcIi4vX2Rlc2NyaXB0b3JzXCIpJiYhZShcIi4vX2ZhaWxzXCIpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlKFwiLi9fZG9tLWNyZWF0ZVwiKShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSx7XCIuL19kZXNjcmlwdG9yc1wiOjIxLFwiLi9fZG9tLWNyZWF0ZVwiOjIyLFwiLi9fZmFpbHNcIjoyNX1dLDMyOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj12b2lkIDA9PT1yO3N3aXRjaCh0Lmxlbmd0aCl7Y2FzZSAwOnJldHVybiBuP2UoKTplLmNhbGwocik7Y2FzZSAxOnJldHVybiBuP2UodFswXSk6ZS5jYWxsKHIsdFswXSk7Y2FzZSAyOnJldHVybiBuP2UodFswXSx0WzFdKTplLmNhbGwocix0WzBdLHRbMV0pO2Nhc2UgMzpyZXR1cm4gbj9lKHRbMF0sdFsxXSx0WzJdKTplLmNhbGwocix0WzBdLHRbMV0sdFsyXSk7Y2FzZSA0OnJldHVybiBuP2UodFswXSx0WzFdLHRbMl0sdFszXSk6ZS5jYWxsKHIsdFswXSx0WzFdLHRbMl0sdFszXSl9cmV0dXJuIGUuYXBwbHkocix0KX19LHt9XSwzMzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19jb2ZcIik7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKGUpe3JldHVyblwiU3RyaW5nXCI9PW4oZSk/ZS5zcGxpdChcIlwiKTpPYmplY3QoZSl9fSx7XCIuL19jb2ZcIjoxN31dLDM0OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2l0ZXJhdG9yc1wiKSxvPWUoXCIuL193a3NcIikoXCJpdGVyYXRvclwiKSxpPUFycmF5LnByb3RvdHlwZTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMCE9PWUmJihuLkFycmF5PT09ZXx8aVtvXT09PWUpfX0se1wiLi9faXRlcmF0b3JzXCI6NDEsXCIuL193a3NcIjo3MH1dLDM1OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBlP251bGwhPT1lOlwiZnVuY3Rpb25cIj09dHlwZW9mIGV9fSx7fV0sMzY6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fYW4tb2JqZWN0XCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscixvKXt0cnl7cmV0dXJuIG8/dChuKHIpWzBdLHJbMV0pOnQocil9Y2F0Y2goaSl7dmFyIGM9ZVtcInJldHVyblwiXTt0aHJvdyB2b2lkIDAhPT1jJiZuKGMuY2FsbChlKSksaX19fSx7XCIuL19hbi1vYmplY3RcIjoxNH1dLDM3OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vX29iamVjdC1jcmVhdGVcIiksbz1lKFwiLi9fcHJvcGVydHktZGVzY1wiKSxpPWUoXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiKSxjPXt9O2UoXCIuL19oaWRlXCIpKGMsZShcIi4vX3drc1wiKShcIml0ZXJhdG9yXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSx0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIpe2UucHJvdG90eXBlPW4oYyx7bmV4dDpvKDEscil9KSxpKGUsdCtcIiBJdGVyYXRvclwiKX19LHtcIi4vX2hpZGVcIjoyOSxcIi4vX29iamVjdC1jcmVhdGVcIjo0NCxcIi4vX3Byb3BlcnR5LWRlc2NcIjo1MixcIi4vX3NldC10by1zdHJpbmctdGFnXCI6NTcsXCIuL193a3NcIjo3MH1dLDM4OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vX2xpYnJhcnlcIiksbz1lKFwiLi9fZXhwb3J0XCIpLGk9ZShcIi4vX3JlZGVmaW5lXCIpLGM9ZShcIi4vX2hpZGVcIikscz1lKFwiLi9faGFzXCIpLHU9ZShcIi4vX2l0ZXJhdG9yc1wiKSxhPWUoXCIuL19pdGVyLWNyZWF0ZVwiKSxmPWUoXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiKSxfPWUoXCIuL19vYmplY3QtZ3BvXCIpLGw9ZShcIi4vX3drc1wiKShcIml0ZXJhdG9yXCIpLHA9IShbXS5rZXlzJiZcIm5leHRcImluW10ua2V5cygpKSxkPVwiQEBpdGVyYXRvclwiLHY9XCJrZXlzXCIsaD1cInZhbHVlc1wiLHk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLGIsbSxnLGope2Eocix0LGIpO3ZhciB4LHcsayxPPWZ1bmN0aW9uKGUpe2lmKCFwJiZlIGluIEUpcmV0dXJuIEVbZV07c3dpdGNoKGUpe2Nhc2UgdjpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcyxlKX07Y2FzZSBoOnJldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgcih0aGlzLGUpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcyxlKX19LE09dCtcIiBJdGVyYXRvclwiLFA9bT09aCxTPSExLEU9ZS5wcm90b3R5cGUsVD1FW2xdfHxFW2RdfHxtJiZFW21dLEE9VHx8TyhtKSxDPW0/UD9PKFwiZW50cmllc1wiKTpBOnZvaWQgMCxSPVwiQXJyYXlcIj09dD9FLmVudHJpZXN8fFQ6VDtpZihSJiYoaz1fKFIuY2FsbChuZXcgZSkpLGshPT1PYmplY3QucHJvdG90eXBlJiYoZihrLE0sITApLG58fHMoayxsKXx8YyhrLGwseSkpKSxQJiZUJiZULm5hbWUhPT1oJiYoUz0hMCxBPWZ1bmN0aW9uKCl7cmV0dXJuIFQuY2FsbCh0aGlzKX0pLG4mJiFqfHwhcCYmIVMmJkVbbF18fGMoRSxsLEEpLHVbdF09QSx1W01dPXksbSlpZih4PXt2YWx1ZXM6UD9BOk8oaCksa2V5czpnP0E6Tyh2KSxlbnRyaWVzOkN9LGopZm9yKHcgaW4geCl3IGluIEV8fGkoRSx3LHhbd10pO2Vsc2UgbyhvLlArby5GKihwfHxTKSx0LHgpO3JldHVybiB4fX0se1wiLi9fZXhwb3J0XCI6MjQsXCIuL19oYXNcIjoyOCxcIi4vX2hpZGVcIjoyOSxcIi4vX2l0ZXItY3JlYXRlXCI6MzcsXCIuL19pdGVyYXRvcnNcIjo0MSxcIi4vX2xpYnJhcnlcIjo0MixcIi4vX29iamVjdC1ncG9cIjo0OCxcIi4vX3JlZGVmaW5lXCI6NTQsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjU3LFwiLi9fd2tzXCI6NzB9XSwzOTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL193a3NcIikoXCJpdGVyYXRvclwiKSxvPSExO3RyeXt2YXIgaT1bN11bbl0oKTtpW1wicmV0dXJuXCJdPWZ1bmN0aW9uKCl7bz0hMH0sQXJyYXkuZnJvbShpLGZ1bmN0aW9uKCl7dGhyb3cgMn0pfWNhdGNoKGMpe310LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtpZighdCYmIW8pcmV0dXJuITE7dmFyIHI9ITE7dHJ5e3ZhciBpPVs3XSxjPWlbbl0oKTtjLm5leHQ9ZnVuY3Rpb24oKXtyPSEwfSxpW25dPWZ1bmN0aW9uKCl7cmV0dXJuIGN9LGUoaSl9Y2F0Y2gocyl7fXJldHVybiByfX0se1wiLi9fd2tzXCI6NzB9XSw0MDpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybnt2YWx1ZTp0LGRvbmU6ISFlfX19LHt9XSw0MTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17fX0se31dLDQyOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPSEwfSx7fV0sNDM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbixvLGksYz1lKFwiLi9fZ2xvYmFsXCIpLHM9ZShcIi4vX3Rhc2tcIikuc2V0LHU9Yy5NdXRhdGlvbk9ic2VydmVyfHxjLldlYktpdE11dGF0aW9uT2JzZXJ2ZXIsYT1jLnByb2Nlc3MsZj1jLlByb21pc2UsXz1cInByb2Nlc3NcIj09ZShcIi4vX2NvZlwiKShhKSxsPWZ1bmN0aW9uKCl7dmFyIGUsdDtmb3IoXyYmKGU9YS5kb21haW4pJiZlLmV4aXQoKTtuOyl0PW4uZm4sdCgpLG49bi5uZXh0O289dm9pZCAwLGUmJmUuZW50ZXIoKX07aWYoXylpPWZ1bmN0aW9uKCl7YS5uZXh0VGljayhsKX07ZWxzZSBpZih1KXt2YXIgcD0hMCxkPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO25ldyB1KGwpLm9ic2VydmUoZCx7Y2hhcmFjdGVyRGF0YTohMH0pLGk9ZnVuY3Rpb24oKXtkLmRhdGE9cD0hcH19ZWxzZSBpPWYmJmYucmVzb2x2ZT9mdW5jdGlvbigpe2YucmVzb2x2ZSgpLnRoZW4obCl9OmZ1bmN0aW9uKCl7cy5jYWxsKGMsbCl9O3QuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD17Zm46ZSxuZXh0OnZvaWQgMH07byYmKG8ubmV4dD10KSxufHwobj10LGkoKSksbz10fX0se1wiLi9fY29mXCI6MTcsXCIuL19nbG9iYWxcIjoyNyxcIi4vX3Rhc2tcIjo2Mn1dLDQ0OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2FuLW9iamVjdFwiKSxvPWUoXCIuL19vYmplY3QtZHBzXCIpLGk9ZShcIi4vX2VudW0tYnVnLWtleXNcIiksYz1lKFwiLi9fc2hhcmVkLWtleVwiKShcIklFX1BST1RPXCIpLHM9ZnVuY3Rpb24oKXt9LHU9XCJwcm90b3R5cGVcIixhPWZ1bmN0aW9uKCl7dmFyIHQscj1lKFwiLi9fZG9tLWNyZWF0ZVwiKShcImlmcmFtZVwiKSxuPWkubGVuZ3RoLG89XCI+XCI7Zm9yKHIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixlKFwiLi9faHRtbFwiKS5hcHBlbmRDaGlsZChyKSxyLnNyYz1cImphdmFzY3JpcHQ6XCIsdD1yLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQsdC5vcGVuKCksdC53cml0ZShcIjxzY3JpcHQ+ZG9jdW1lbnQuRj1PYmplY3Q8L3NjcmlwdFwiK28pLHQuY2xvc2UoKSxhPXQuRjtuLS07KWRlbGV0ZSBhW3VdW2lbbl1dO3JldHVybiBhKCl9O3QuZXhwb3J0cz1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbihlLHQpe3ZhciByO3JldHVybiBudWxsIT09ZT8oc1t1XT1uKGUpLHI9bmV3IHMsc1t1XT1udWxsLHJbY109ZSk6cj1hKCksdm9pZCAwPT09dD9yOm8ocix0KX19LHtcIi4vX2FuLW9iamVjdFwiOjE0LFwiLi9fZG9tLWNyZWF0ZVwiOjIyLFwiLi9fZW51bS1idWcta2V5c1wiOjIzLFwiLi9faHRtbFwiOjMwLFwiLi9fb2JqZWN0LWRwc1wiOjQ2LFwiLi9fc2hhcmVkLWtleVwiOjU4fV0sNDU6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fYW4tb2JqZWN0XCIpLG89ZShcIi4vX2llOC1kb20tZGVmaW5lXCIpLGk9ZShcIi4vX3RvLXByaW1pdGl2ZVwiKSxjPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTtyLmY9ZShcIi4vX2Rlc2NyaXB0b3JzXCIpP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihlLHQscil7aWYobihlKSx0PWkodCwhMCksbihyKSxvKXRyeXtyZXR1cm4gYyhlLHQscil9Y2F0Y2gocyl7fWlmKFwiZ2V0XCJpbiByfHxcInNldFwiaW4gcil0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCFcIik7cmV0dXJuXCJ2YWx1ZVwiaW4gciYmKGVbdF09ci52YWx1ZSksZX19LHtcIi4vX2FuLW9iamVjdFwiOjE0LFwiLi9fZGVzY3JpcHRvcnNcIjoyMSxcIi4vX2llOC1kb20tZGVmaW5lXCI6MzEsXCIuL190by1wcmltaXRpdmVcIjo2OH1dLDQ2OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX29iamVjdC1kcFwiKSxvPWUoXCIuL19hbi1vYmplY3RcIiksaT1lKFwiLi9fb2JqZWN0LWtleXNcIik7dC5leHBvcnRzPWUoXCIuL19kZXNjcmlwdG9yc1wiKT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbihlLHQpe28oZSk7Zm9yKHZhciByLGM9aSh0KSxzPWMubGVuZ3RoLHU9MDtzPnU7KW4uZihlLHI9Y1t1KytdLHRbcl0pO3JldHVybiBlfX0se1wiLi9fYW4tb2JqZWN0XCI6MTQsXCIuL19kZXNjcmlwdG9yc1wiOjIxLFwiLi9fb2JqZWN0LWRwXCI6NDUsXCIuL19vYmplY3Qta2V5c1wiOjUwfV0sNDc6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fb2JqZWN0LXBpZVwiKSxvPWUoXCIuL19wcm9wZXJ0eS1kZXNjXCIpLGk9ZShcIi4vX3RvLWlvYmplY3RcIiksYz1lKFwiLi9fdG8tcHJpbWl0aXZlXCIpLHM9ZShcIi4vX2hhc1wiKSx1PWUoXCIuL19pZTgtZG9tLWRlZmluZVwiKSxhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7ci5mPWUoXCIuL19kZXNjcmlwdG9yc1wiKT9hOmZ1bmN0aW9uKGUsdCl7aWYoZT1pKGUpLHQ9Yyh0LCEwKSx1KXRyeXtyZXR1cm4gYShlLHQpfWNhdGNoKHIpe31yZXR1cm4gcyhlLHQpP28oIW4uZi5jYWxsKGUsdCksZVt0XSk6dm9pZCAwfX0se1wiLi9fZGVzY3JpcHRvcnNcIjoyMSxcIi4vX2hhc1wiOjI4LFwiLi9faWU4LWRvbS1kZWZpbmVcIjozMSxcIi4vX29iamVjdC1waWVcIjo1MSxcIi4vX3Byb3BlcnR5LWRlc2NcIjo1MixcIi4vX3RvLWlvYmplY3RcIjo2NSxcIi4vX3RvLXByaW1pdGl2ZVwiOjY4fV0sNDg6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9faGFzXCIpLG89ZShcIi4vX3RvLW9iamVjdFwiKSxpPWUoXCIuL19zaGFyZWQta2V5XCIpKFwiSUVfUFJPVE9cIiksYz1PYmplY3QucHJvdG90eXBlO3QuZXhwb3J0cz1PYmplY3QuZ2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKGUpe3JldHVybiBlPW8oZSksbihlLGkpP2VbaV06XCJmdW5jdGlvblwiPT10eXBlb2YgZS5jb25zdHJ1Y3RvciYmZSBpbnN0YW5jZW9mIGUuY29uc3RydWN0b3I/ZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU6ZSBpbnN0YW5jZW9mIE9iamVjdD9jOm51bGx9fSx7XCIuL19oYXNcIjoyOCxcIi4vX3NoYXJlZC1rZXlcIjo1OCxcIi4vX3RvLW9iamVjdFwiOjY3fV0sNDk6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9faGFzXCIpLG89ZShcIi4vX3RvLWlvYmplY3RcIiksaT1lKFwiLi9fYXJyYXktaW5jbHVkZXNcIikoITEpLGM9ZShcIi4vX3NoYXJlZC1rZXlcIikoXCJJRV9QUk9UT1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgcixzPW8oZSksdT0wLGE9W107Zm9yKHIgaW4gcylyIT1jJiZuKHMscikmJmEucHVzaChyKTtmb3IoO3QubGVuZ3RoPnU7KW4ocyxyPXRbdSsrXSkmJih+aShhLHIpfHxhLnB1c2gocikpO3JldHVybiBhfX0se1wiLi9fYXJyYXktaW5jbHVkZXNcIjoxNSxcIi4vX2hhc1wiOjI4LFwiLi9fc2hhcmVkLWtleVwiOjU4LFwiLi9fdG8taW9iamVjdFwiOjY1fV0sNTA6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fb2JqZWN0LWtleXMtaW50ZXJuYWxcIiksbz1lKFwiLi9fZW51bS1idWcta2V5c1wiKTt0LmV4cG9ydHM9T2JqZWN0LmtleXN8fGZ1bmN0aW9uKGUpe3JldHVybiBuKGUsbyl9fSx7XCIuL19lbnVtLWJ1Zy1rZXlzXCI6MjMsXCIuL19vYmplY3Qta2V5cy1pbnRlcm5hbFwiOjQ5fV0sNTE6W2Z1bmN0aW9uKGUsdCxyKXtyLmY9e30ucHJvcGVydHlJc0VudW1lcmFibGV9LHt9XSw1MjpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybntlbnVtZXJhYmxlOiEoMSZlKSxjb25maWd1cmFibGU6ISgyJmUpLHdyaXRhYmxlOiEoNCZlKSx2YWx1ZTp0fX19LHt9XSw1MzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19oaWRlXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscil7Zm9yKHZhciBvIGluIHQpciYmZVtvXT9lW29dPXRbb106bihlLG8sdFtvXSk7cmV0dXJuIGV9fSx7XCIuL19oaWRlXCI6Mjl9XSw1NDpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1lKFwiLi9faGlkZVwiKX0se1wiLi9faGlkZVwiOjI5fV0sNTU6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9faXMtb2JqZWN0XCIpLG89ZShcIi4vX2FuLW9iamVjdFwiKSxpPWZ1bmN0aW9uKGUsdCl7aWYobyhlKSwhbih0KSYmbnVsbCE9PXQpdGhyb3cgVHlwZUVycm9yKHQrXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpfTt0LmV4cG9ydHM9e3NldDpPYmplY3Quc2V0UHJvdG90eXBlT2Z8fChcIl9fcHJvdG9fX1wiaW57fT9mdW5jdGlvbih0LHIsbil7dHJ5e249ZShcIi4vX2N0eFwiKShGdW5jdGlvbi5jYWxsLGUoXCIuL19vYmplY3QtZ29wZFwiKS5mKE9iamVjdC5wcm90b3R5cGUsXCJfX3Byb3RvX19cIikuc2V0LDIpLG4odCxbXSkscj0hKHQgaW5zdGFuY2VvZiBBcnJheSl9Y2F0Y2gobyl7cj0hMH1yZXR1cm4gZnVuY3Rpb24oZSx0KXtyZXR1cm4gaShlLHQpLHI/ZS5fX3Byb3RvX189dDpuKGUsdCksZX19KHt9LCExKTp2b2lkIDApLGNoZWNrOml9fSx7XCIuL19hbi1vYmplY3RcIjoxNCxcIi4vX2N0eFwiOjE5LFwiLi9faXMtb2JqZWN0XCI6MzUsXCIuL19vYmplY3QtZ29wZFwiOjQ3fV0sNTY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9fZ2xvYmFsXCIpLG89ZShcIi4vX2NvcmVcIiksaT1lKFwiLi9fb2JqZWN0LWRwXCIpLGM9ZShcIi4vX2Rlc2NyaXB0b3JzXCIpLHM9ZShcIi4vX3drc1wiKShcInNwZWNpZXNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIG9bZV0/b1tlXTpuW2VdO2MmJnQmJiF0W3NdJiZpLmYodCxzLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9fSl9fSx7XCIuL19jb3JlXCI6MTgsXCIuL19kZXNjcmlwdG9yc1wiOjIxLFwiLi9fZ2xvYmFsXCI6MjcsXCIuL19vYmplY3QtZHBcIjo0NSxcIi4vX3drc1wiOjcwfV0sNTc6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fb2JqZWN0LWRwXCIpLmYsbz1lKFwiLi9faGFzXCIpLGk9ZShcIi4vX3drc1wiKShcInRvU3RyaW5nVGFnXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscil7ZSYmIW8oZT1yP2U6ZS5wcm90b3R5cGUsaSkmJm4oZSxpLHtjb25maWd1cmFibGU6ITAsdmFsdWU6dH0pfX0se1wiLi9faGFzXCI6MjgsXCIuL19vYmplY3QtZHBcIjo0NSxcIi4vX3drc1wiOjcwfV0sNTg6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fc2hhcmVkXCIpKFwia2V5c1wiKSxvPWUoXCIuL191aWRcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBuW2VdfHwobltlXT1vKGUpKX19LHtcIi4vX3NoYXJlZFwiOjU5LFwiLi9fdWlkXCI6Njl9XSw1OTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19nbG9iYWxcIiksbz1cIl9fY29yZS1qc19zaGFyZWRfX1wiLGk9bltvXXx8KG5bb109e30pO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gaVtlXXx8KGlbZV09e30pfX0se1wiLi9fZ2xvYmFsXCI6Mjd9XSw2MDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19hbi1vYmplY3RcIiksbz1lKFwiLi9fYS1mdW5jdGlvblwiKSxpPWUoXCIuL193a3NcIikoXCJzcGVjaWVzXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciByLGM9bihlKS5jb25zdHJ1Y3RvcjtyZXR1cm4gdm9pZCAwPT09Y3x8dm9pZCAwPT0ocj1uKGMpW2ldKT90Om8ocil9fSx7XCIuL19hLWZ1bmN0aW9uXCI6MTEsXCIuL19hbi1vYmplY3RcIjoxNCxcIi4vX3drc1wiOjcwfV0sNjE6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fdG8taW50ZWdlclwiKSxvPWUoXCIuL19kZWZpbmVkXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxyKXt2YXIgaSxjLHM9U3RyaW5nKG8odCkpLHU9bihyKSxhPXMubGVuZ3RoO3JldHVybiAwPnV8fHU+PWE/ZT9cIlwiOnZvaWQgMDooaT1zLmNoYXJDb2RlQXQodSksNTUyOTY+aXx8aT41NjMxOXx8dSsxPT09YXx8KGM9cy5jaGFyQ29kZUF0KHUrMSkpPDU2MzIwfHxjPjU3MzQzP2U/cy5jaGFyQXQodSk6aTplP3Muc2xpY2UodSx1KzIpOihpLTU1Mjk2PDwxMCkrKGMtNTYzMjApKzY1NTM2KX19fSx7XCIuL19kZWZpbmVkXCI6MjAsXCIuL190by1pbnRlZ2VyXCI6NjR9XSw2MjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuLG8saSxjPWUoXCIuL19jdHhcIikscz1lKFwiLi9faW52b2tlXCIpLHU9ZShcIi4vX2h0bWxcIiksYT1lKFwiLi9fZG9tLWNyZWF0ZVwiKSxmPWUoXCIuL19nbG9iYWxcIiksXz1mLnByb2Nlc3MsbD1mLnNldEltbWVkaWF0ZSxwPWYuY2xlYXJJbW1lZGlhdGUsZD1mLk1lc3NhZ2VDaGFubmVsLHY9MCxoPXt9LHk9XCJvbnJlYWR5c3RhdGVjaGFuZ2VcIixiPWZ1bmN0aW9uKCl7dmFyIGU9K3RoaXM7aWYoaC5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIHQ9aFtlXTtkZWxldGUgaFtlXSx0KCl9fSxtPWZ1bmN0aW9uKGUpe2IuY2FsbChlLmRhdGEpfTtsJiZwfHwobD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9W10scj0xO2FyZ3VtZW50cy5sZW5ndGg+cjspdC5wdXNoKGFyZ3VtZW50c1tyKytdKTtyZXR1cm4gaFsrK3ZdPWZ1bmN0aW9uKCl7cyhcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2U6RnVuY3Rpb24oZSksdCl9LG4odiksdn0scD1mdW5jdGlvbihlKXtkZWxldGUgaFtlXX0sXCJwcm9jZXNzXCI9PWUoXCIuL19jb2ZcIikoXyk/bj1mdW5jdGlvbihlKXtfLm5leHRUaWNrKGMoYixlLDEpKX06ZD8obz1uZXcgZCxpPW8ucG9ydDIsby5wb3J0MS5vbm1lc3NhZ2U9bSxuPWMoaS5wb3N0TWVzc2FnZSxpLDEpKTpmLmFkZEV2ZW50TGlzdGVuZXImJlwiZnVuY3Rpb25cIj09dHlwZW9mIHBvc3RNZXNzYWdlJiYhZi5pbXBvcnRTY3JpcHRzPyhuPWZ1bmN0aW9uKGUpe2YucG9zdE1lc3NhZ2UoZStcIlwiLFwiKlwiKX0sZi5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLG0sITEpKTpuPXkgaW4gYShcInNjcmlwdFwiKT9mdW5jdGlvbihlKXt1LmFwcGVuZENoaWxkKGEoXCJzY3JpcHRcIikpW3ldPWZ1bmN0aW9uKCl7dS5yZW1vdmVDaGlsZCh0aGlzKSxiLmNhbGwoZSl9fTpmdW5jdGlvbihlKXtzZXRUaW1lb3V0KGMoYixlLDEpLDApfSksdC5leHBvcnRzPXtzZXQ6bCxjbGVhcjpwfX0se1wiLi9fY29mXCI6MTcsXCIuL19jdHhcIjoxOSxcIi4vX2RvbS1jcmVhdGVcIjoyMixcIi4vX2dsb2JhbFwiOjI3LFwiLi9faHRtbFwiOjMwLFwiLi9faW52b2tlXCI6MzJ9XSw2MzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL190by1pbnRlZ2VyXCIpLG89TWF0aC5tYXgsaT1NYXRoLm1pbjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1uKGUpLDA+ZT9vKGUrdCwwKTppKGUsdCl9fSx7XCIuL190by1pbnRlZ2VyXCI6NjR9XSw2NDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPU1hdGguY2VpbCxvPU1hdGguZmxvb3I7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBpc05hTihlPStlKT8wOihlPjA/bzpuKShlKX19LHt9XSw2NTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19pb2JqZWN0XCIpLG89ZShcIi4vX2RlZmluZWRcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBuKG8oZSkpfX0se1wiLi9fZGVmaW5lZFwiOjIwLFwiLi9faW9iamVjdFwiOjMzfV0sNjY6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fdG8taW50ZWdlclwiKSxvPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZT4wP28obihlKSw5MDA3MTk5MjU0NzQwOTkxKTowfX0se1wiLi9fdG8taW50ZWdlclwiOjY0fV0sNjc6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fZGVmaW5lZFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdChuKGUpKX19LHtcIi4vX2RlZmluZWRcIjoyMH1dLDY4OltmdW5jdGlvbihlLHQscil7dmFyIG49ZShcIi4vX2lzLW9iamVjdFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtpZighbihlKSlyZXR1cm4gZTt2YXIgcixvO2lmKHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mKHI9ZS50b1N0cmluZykmJiFuKG89ci5jYWxsKGUpKSlyZXR1cm4gbztpZihcImZ1bmN0aW9uXCI9PXR5cGVvZihyPWUudmFsdWVPZikmJiFuKG89ci5jYWxsKGUpKSlyZXR1cm4gbztpZighdCYmXCJmdW5jdGlvblwiPT10eXBlb2Yocj1lLnRvU3RyaW5nKSYmIW4obz1yLmNhbGwoZSkpKXJldHVybiBvO3Rocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKX19LHtcIi4vX2lzLW9iamVjdFwiOjM1fV0sNjk6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj0wLG89TWF0aC5yYW5kb20oKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuXCJTeW1ib2woXCIuY29uY2F0KHZvaWQgMD09PWU/XCJcIjplLFwiKV9cIiwoKytuK28pLnRvU3RyaW5nKDM2KSl9fSx7fV0sNzA6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fc2hhcmVkXCIpKFwid2tzXCIpLG89ZShcIi4vX3VpZFwiKSxpPWUoXCIuL19nbG9iYWxcIikuU3ltYm9sLGM9XCJmdW5jdGlvblwiPT10eXBlb2YgaTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG5bZV18fChuW2VdPWMmJmlbZV18fChjP2k6bykoXCJTeW1ib2wuXCIrZSkpfX0se1wiLi9fZ2xvYmFsXCI6MjcsXCIuL19zaGFyZWRcIjo1OSxcIi4vX3VpZFwiOjY5fV0sNzE6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbj1lKFwiLi9fY2xhc3NvZlwiKSxvPWUoXCIuL193a3NcIikoXCJpdGVyYXRvclwiKSxpPWUoXCIuL19pdGVyYXRvcnNcIik7dC5leHBvcnRzPWUoXCIuL19jb3JlXCIpLmdldEl0ZXJhdG9yTWV0aG9kPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDAhPWU/ZVtvXXx8ZVtcIkBAaXRlcmF0b3JcIl18fGlbbihlKV06dm9pZCAwfX0se1wiLi9fY2xhc3NvZlwiOjE2LFwiLi9fY29yZVwiOjE4LFwiLi9faXRlcmF0b3JzXCI6NDEsXCIuL193a3NcIjo3MH1dLDcyOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcIi4vX2FkZC10by11bnNjb3BhYmxlc1wiKSxvPWUoXCIuL19pdGVyLXN0ZXBcIiksaT1lKFwiLi9faXRlcmF0b3JzXCIpLGM9ZShcIi4vX3RvLWlvYmplY3RcIik7dC5leHBvcnRzPWUoXCIuL19pdGVyLWRlZmluZVwiKShBcnJheSxcIkFycmF5XCIsZnVuY3Rpb24oZSx0KXt0aGlzLl90PWMoZSksdGhpcy5faT0wLHRoaXMuX2s9dH0sZnVuY3Rpb24oKXt2YXIgZT10aGlzLl90LHQ9dGhpcy5fayxyPXRoaXMuX2krKztyZXR1cm4hZXx8cj49ZS5sZW5ndGg/KHRoaXMuX3Q9dm9pZCAwLG8oMSkpOlwia2V5c1wiPT10P28oMCxyKTpcInZhbHVlc1wiPT10P28oMCxlW3JdKTpvKDAsW3IsZVtyXV0pfSxcInZhbHVlc1wiKSxpLkFyZ3VtZW50cz1pLkFycmF5LG4oXCJrZXlzXCIpLG4oXCJ2YWx1ZXNcIiksbihcImVudHJpZXNcIil9LHtcIi4vX2FkZC10by11bnNjb3BhYmxlc1wiOjEyLFwiLi9faXRlci1kZWZpbmVcIjozOCxcIi4vX2l0ZXItc3RlcFwiOjQwLFwiLi9faXRlcmF0b3JzXCI6NDEsXCIuL190by1pb2JqZWN0XCI6NjV9XSw3MzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUoXCIuL19leHBvcnRcIik7bihuLlMrbi5GKiFlKFwiLi9fZGVzY3JpcHRvcnNcIiksXCJPYmplY3RcIix7ZGVmaW5lUHJvcGVydHk6ZShcIi4vX29iamVjdC1kcFwiKS5mfSl9LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MjEsXCIuL19leHBvcnRcIjoyNCxcIi4vX29iamVjdC1kcFwiOjQ1fV0sNzQ6W2Z1bmN0aW9uKGUsdCxyKXt9LHt9XSw3NTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBuLG8saSxjPWUoXCIuL19saWJyYXJ5XCIpLHM9ZShcIi4vX2dsb2JhbFwiKSx1PWUoXCIuL19jdHhcIiksYT1lKFwiLi9fY2xhc3NvZlwiKSxmPWUoXCIuL19leHBvcnRcIiksXz1lKFwiLi9faXMtb2JqZWN0XCIpLGw9KGUoXCIuL19hbi1vYmplY3RcIiksZShcIi4vX2EtZnVuY3Rpb25cIikpLHA9ZShcIi4vX2FuLWluc3RhbmNlXCIpLGQ9ZShcIi4vX2Zvci1vZlwiKSx2PShlKFwiLi9fc2V0LXByb3RvXCIpLnNldCxlKFwiLi9fc3BlY2llcy1jb25zdHJ1Y3RvclwiKSksaD1lKFwiLi9fdGFza1wiKS5zZXQseT1lKFwiLi9fbWljcm90YXNrXCIpLGI9XCJQcm9taXNlXCIsbT1zLlR5cGVFcnJvcixnPXMucHJvY2VzcyxqPXNbYl0sZz1zLnByb2Nlc3MseD1cInByb2Nlc3NcIj09YShnKSx3PWZ1bmN0aW9uKCl7fSxrPSEhZnVuY3Rpb24oKXt0cnl7dmFyIHQ9ai5yZXNvbHZlKDEpLHI9KHQuY29uc3RydWN0b3I9e30pW2UoXCIuL193a3NcIikoXCJzcGVjaWVzXCIpXT1mdW5jdGlvbihlKXtlKHcsdyl9O3JldHVybih4fHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQpJiZ0LnRoZW4odylpbnN0YW5jZW9mIHJ9Y2F0Y2gobil7fX0oKSxPPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU9PT10fHxlPT09aiYmdD09PWl9LE09ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIF8oZSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mKHQ9ZS50aGVuKT90OiExfSxQPWZ1bmN0aW9uKGUpe3JldHVybiBPKGosZSk/bmV3IFMoZSk6bmV3IG8oZSl9LFM9bz1mdW5jdGlvbihlKXt2YXIgdCxyO3RoaXMucHJvbWlzZT1uZXcgZShmdW5jdGlvbihlLG4pe2lmKHZvaWQgMCE9PXR8fHZvaWQgMCE9PXIpdGhyb3cgbShcIkJhZCBQcm9taXNlIGNvbnN0cnVjdG9yXCIpO3Q9ZSxyPW59KSx0aGlzLnJlc29sdmU9bCh0KSx0aGlzLnJlamVjdD1sKHIpfSxFPWZ1bmN0aW9uKGUpe3RyeXtlKCl9Y2F0Y2godCl7cmV0dXJue2Vycm9yOnR9fX0sVD1mdW5jdGlvbihlLHQpe2lmKCFlLl9uKXtlLl9uPSEwO3ZhciByPWUuX2M7eShmdW5jdGlvbigpe2Zvcih2YXIgbj1lLl92LG89MT09ZS5fcyxpPTAsYz1mdW5jdGlvbih0KXt2YXIgcixpLGM9bz90Lm9rOnQuZmFpbCxzPXQucmVzb2x2ZSx1PXQucmVqZWN0LGE9dC5kb21haW47dHJ5e2M/KG98fCgyPT1lLl9oJiZSKGUpLGUuX2g9MSksYz09PSEwP3I9bjooYSYmYS5lbnRlcigpLHI9YyhuKSxhJiZhLmV4aXQoKSkscj09PXQucHJvbWlzZT91KG0oXCJQcm9taXNlLWNoYWluIGN5Y2xlXCIpKTooaT1NKHIpKT9pLmNhbGwocixzLHUpOnMocikpOnUobil9Y2F0Y2goZil7dShmKX19O3IubGVuZ3RoPmk7KWMocltpKytdKTtlLl9jPVtdLGUuX249ITEsdCYmIWUuX2gmJkEoZSl9KX19LEE9ZnVuY3Rpb24oZSl7aC5jYWxsKHMsZnVuY3Rpb24oKXt2YXIgdCxyLG4sbz1lLl92O2lmKEMoZSkmJih0PUUoZnVuY3Rpb24oKXt4P2cuZW1pdChcInVuaGFuZGxlZFJlamVjdGlvblwiLG8sZSk6KHI9cy5vbnVuaGFuZGxlZHJlamVjdGlvbik/cih7cHJvbWlzZTplLHJlYXNvbjpvfSk6KG49cy5jb25zb2xlKSYmbi5lcnJvciYmbi5lcnJvcihcIlVuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvblwiLG8pfSksZS5faD14fHxDKGUpPzI6MSksZS5fYT12b2lkIDAsdCl0aHJvdyB0LmVycm9yfSl9LEM9ZnVuY3Rpb24oZSl7aWYoMT09ZS5faClyZXR1cm4hMTtmb3IodmFyIHQscj1lLl9hfHxlLl9jLG49MDtyLmxlbmd0aD5uOylpZih0PXJbbisrXSx0LmZhaWx8fCFDKHQucHJvbWlzZSkpcmV0dXJuITE7cmV0dXJuITB9LFI9ZnVuY3Rpb24oZSl7aC5jYWxsKHMsZnVuY3Rpb24oKXt2YXIgdDt4P2cuZW1pdChcInJlamVjdGlvbkhhbmRsZWRcIixlKToodD1zLm9ucmVqZWN0aW9uaGFuZGxlZCkmJnQoe3Byb21pc2U6ZSxyZWFzb246ZS5fdn0pfSl9LEY9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpczt0Ll9kfHwodC5fZD0hMCx0PXQuX3d8fHQsdC5fdj1lLHQuX3M9Mix0Ll9hfHwodC5fYT10Ll9jLnNsaWNlKCkpLFQodCwhMCkpfSxMPWZ1bmN0aW9uKGUpe3ZhciB0LHI9dGhpcztpZighci5fZCl7ci5fZD0hMCxyPXIuX3d8fHI7dHJ5e2lmKHI9PT1lKXRocm93IG0oXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTsodD1NKGUpKT95KGZ1bmN0aW9uKCl7dmFyIG49e193OnIsX2Q6ITF9O3RyeXt0LmNhbGwoZSx1KEwsbiwxKSx1KEYsbiwxKSl9Y2F0Y2gobyl7Ri5jYWxsKG4sbyl9fSk6KHIuX3Y9ZSxyLl9zPTEsVChyLCExKSl9Y2F0Y2gobil7Ri5jYWxsKHtfdzpyLF9kOiExfSxuKX19fTtrfHwoaj1mdW5jdGlvbihlKXtwKHRoaXMsaixiLFwiX2hcIiksbChlKSxuLmNhbGwodGhpcyk7dHJ5e2UodShMLHRoaXMsMSksdShGLHRoaXMsMSkpfWNhdGNoKHQpe0YuY2FsbCh0aGlzLHQpfX0sbj1mdW5jdGlvbihlKXt0aGlzLl9jPVtdLHRoaXMuX2E9dm9pZCAwLHRoaXMuX3M9MCx0aGlzLl9kPSExLHRoaXMuX3Y9dm9pZCAwLHRoaXMuX2g9MCx0aGlzLl9uPSExfSxuLnByb3RvdHlwZT1lKFwiLi9fcmVkZWZpbmUtYWxsXCIpKGoucHJvdG90eXBlLHt0aGVuOmZ1bmN0aW9uKGUsdCl7dmFyIHI9UCh2KHRoaXMsaikpO3JldHVybiByLm9rPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTohMCxyLmZhaWw9XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdCxyLmRvbWFpbj14P2cuZG9tYWluOnZvaWQgMCx0aGlzLl9jLnB1c2gociksdGhpcy5fYSYmdGhpcy5fYS5wdXNoKHIpLHRoaXMuX3MmJlQodGhpcywhMSksci5wcm9taXNlfSxcImNhdGNoXCI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsZSl9fSksUz1mdW5jdGlvbigpe3ZhciBlPW5ldyBuO3RoaXMucHJvbWlzZT1lLHRoaXMucmVzb2x2ZT11KEwsZSwxKSx0aGlzLnJlamVjdD11KEYsZSwxKX0pLGYoZi5HK2YuVytmLkYqIWsse1Byb21pc2U6an0pLGUoXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiKShqLGIpLGUoXCIuL19zZXQtc3BlY2llc1wiKShiKSxpPWUoXCIuL19jb3JlXCIpW2JdLGYoZi5TK2YuRiohayxiLHtyZWplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9UCh0aGlzKSxyPXQucmVqZWN0O3JldHVybiByKGUpLHQucHJvbWlzZX19KSxmKGYuUytmLkYqKGN8fCFrKSxiLHtyZXNvbHZlOmZ1bmN0aW9uKGUpe2lmKGUgaW5zdGFuY2VvZiBqJiZPKGUuY29uc3RydWN0b3IsdGhpcykpcmV0dXJuIGU7dmFyIHQ9UCh0aGlzKSxyPXQucmVzb2x2ZTtyZXR1cm4gcihlKSx0LnByb21pc2V9fSksZihmLlMrZi5GKiEoayYmZShcIi4vX2l0ZXItZGV0ZWN0XCIpKGZ1bmN0aW9uKGUpe2ouYWxsKGUpW1wiY2F0Y2hcIl0odyl9KSksYix7YWxsOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1QKHQpLG49ci5yZXNvbHZlLG89ci5yZWplY3QsaT1FKGZ1bmN0aW9uKCl7dmFyIHI9W10saT0wLGM9MTtkKGUsITEsZnVuY3Rpb24oZSl7dmFyIHM9aSsrLHU9ITE7ci5wdXNoKHZvaWQgMCksYysrLHQucmVzb2x2ZShlKS50aGVuKGZ1bmN0aW9uKGUpe3V8fCh1PSEwLHJbc109ZSwtLWN8fG4ocikpfSxvKX0pLC0tY3x8bihyKX0pO3JldHVybiBpJiZvKGkuZXJyb3IpLHIucHJvbWlzZX0scmFjZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9UCh0KSxuPXIucmVqZWN0LG89RShmdW5jdGlvbigpe2QoZSwhMSxmdW5jdGlvbihlKXt0LnJlc29sdmUoZSkudGhlbihyLnJlc29sdmUsbil9KX0pO3JldHVybiBvJiZuKG8uZXJyb3IpLHIucHJvbWlzZX19KX0se1wiLi9fYS1mdW5jdGlvblwiOjExLFwiLi9fYW4taW5zdGFuY2VcIjoxMyxcIi4vX2FuLW9iamVjdFwiOjE0LFwiLi9fY2xhc3NvZlwiOjE2LFwiLi9fY29yZVwiOjE4LFwiLi9fY3R4XCI6MTksXCIuL19leHBvcnRcIjoyNCxcIi4vX2Zvci1vZlwiOjI2LFwiLi9fZ2xvYmFsXCI6MjcsXCIuL19pcy1vYmplY3RcIjozNSxcIi4vX2l0ZXItZGV0ZWN0XCI6MzksXCIuL19saWJyYXJ5XCI6NDIsXCIuL19taWNyb3Rhc2tcIjo0MyxcIi4vX3JlZGVmaW5lLWFsbFwiOjUzLFwiLi9fc2V0LXByb3RvXCI6NTUsXCIuL19zZXQtc3BlY2llc1wiOjU2LFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIjo1NyxcIi4vX3NwZWNpZXMtY29uc3RydWN0b3JcIjo2MCxcIi4vX3Rhc2tcIjo2MixcIi4vX3drc1wiOjcwfV0sNzY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiLi9fc3RyaW5nLWF0XCIpKCEwKTtlKFwiLi9faXRlci1kZWZpbmVcIikoU3RyaW5nLFwiU3RyaW5nXCIsZnVuY3Rpb24oZSl7dGhpcy5fdD1TdHJpbmcoZSksdGhpcy5faT0wfSxmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcy5fdCxyPXRoaXMuX2k7cmV0dXJuIHI+PXQubGVuZ3RoP3t2YWx1ZTp2b2lkIDAsZG9uZTohMH06KGU9bih0LHIpLHRoaXMuX2krPWUubGVuZ3RoLHt2YWx1ZTplLGRvbmU6ITF9KX0pfSx7XCIuL19pdGVyLWRlZmluZVwiOjM4LFwiLi9fc3RyaW5nLWF0XCI6NjF9XSw3NzpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuL2VzNi5hcnJheS5pdGVyYXRvclwiKTtmb3IodmFyIG49ZShcIi4vX2dsb2JhbFwiKSxvPWUoXCIuL19oaWRlXCIpLGk9ZShcIi4vX2l0ZXJhdG9yc1wiKSxjPWUoXCIuL193a3NcIikoXCJ0b1N0cmluZ1RhZ1wiKSxzPVtcIk5vZGVMaXN0XCIsXCJET01Ub2tlbkxpc3RcIixcIk1lZGlhTGlzdFwiLFwiU3R5bGVTaGVldExpc3RcIixcIkNTU1J1bGVMaXN0XCJdLHU9MDs1PnU7dSsrKXt2YXIgYT1zW3VdLGY9blthXSxfPWYmJmYucHJvdG90eXBlO18mJiFfW2NdJiZvKF8sYyxhKSxpW2FdPWkuQXJyYXl9fSx7XCIuL19nbG9iYWxcIjoyNyxcIi4vX2hpZGVcIjoyOSxcIi4vX2l0ZXJhdG9yc1wiOjQxLFwiLi9fd2tzXCI6NzAsXCIuL2VzNi5hcnJheS5pdGVyYXRvclwiOjcyfV0sNzg6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbj1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbz1lKFwiLi9oeXBlcnR5LWRpc2NvdmVyeS9IeXBlcnR5RGlzY292ZXJ5XCIpLGk9bihvKTtyW1wiZGVmYXVsdFwiXT1pW1wiZGVmYXVsdFwiXSx0LmV4cG9ydHM9cltcImRlZmF1bHRcIl19LHtcIi4vaHlwZXJ0eS1kaXNjb3ZlcnkvSHlwZXJ0eURpc2NvdmVyeVwiOjc5LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCI6N31dLDc5OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIilbXCJkZWZhdWx0XCJdLG89ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCIpW1wiZGVmYXVsdFwiXSxpPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiKVtcImRlZmF1bHRcIl07T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9ZShcIi4uL3V0aWxzL3V0aWxzXCIpLHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscil7byh0aGlzLGUpO3ZhciBuPXRoaXM7bi5tZXNzYWdlQnVzPXIsbi5kb21haW49KDAsYy5kaXZpZGVVUkwpKHQpLmRvbWFpbixuLmRpc2NvdmVyeVVSTD10fXJldHVybiBuKGUsW3trZXk6XCJkaXNjb3Zlckh5cGVydHlQZXJVc2VyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzLG49dm9pZCAwO249dD90OnIuZG9tYWluO3ZhciBvPVwidXNlcjovL1wiK2Uuc3Vic3RyaW5nKGUuaW5kZXhPZihcIkBcIikrMSxlLmxlbmd0aCkrXCIvXCIrZS5zdWJzdHJpbmcoMCxlLmluZGV4T2YoXCJAXCIpKSxjPXt0eXBlOlwiUkVBRFwiLGZyb206ci5kaXNjb3ZlcnlVUkwsdG86XCJkb21haW46Ly9yZWdpc3RyeS5cIituK1wiL1wiLGJvZHk6e3Jlc291cmNlOm99fTtyZXR1cm4gY29uc29sZS5sb2coXCJNZXNzYWdlOiBcIixjLG4sbyksbmV3IGkoZnVuY3Rpb24odCxuKXtyLm1lc3NhZ2VCdXMucG9zdE1lc3NhZ2UoYyxmdW5jdGlvbihyKXtjb25zb2xlLmxvZyhcIm1lc3NhZ2UgcmVwbHlcIixyKTt2YXIgbz12b2lkIDAsaT12b2lkIDAsYz12b2lkIDAscz1yLmJvZHkudmFsdWU7Zm9yKG8gaW4gcylpZih2b2lkIDAhPT1zW29dLmxhc3RNb2RpZmllZClpZih2b2lkIDA9PT1pKWk9bmV3IERhdGUoc1tvXS5sYXN0TW9kaWZpZWQpLGM9bztlbHNle3ZhciB1PW5ldyBEYXRlKHNbb10ubGFzdE1vZGlmaWVkKTtpLmdldFRpbWUoKTx1LmdldFRpbWUoKSYmKGk9dSxjPW8pfWNvbnNvbGUubG9nKFwiTGFzdCBIeXBlcnR5OiBcIixjLGkpO3ZhciBhPWM7aWYodm9pZCAwPT09YSlyZXR1cm4gbihcIlVzZXIgSHlwZXJ0eSBub3QgZm91bmRcIik7dmFyIGY9e2lkOmUsZGVzY3JpcHRvcjpzW2FdLmRlc2NyaXB0b3IsaHlwZXJ0eVVSTDphfTtjb25zb2xlLmxvZyhcIj09PT4gaHlwZXJ0eURpc2NvdmVyeSBtZXNzYWdlQnVuZGxlOiBcIixmKSx0KGYpfSl9KX19XSksZX0oKTtyW1wiZGVmYXVsdFwiXT1zLHQuZXhwb3J0cz1yW1wiZGVmYXVsdFwiXX0se1wiLi4vdXRpbHMvdXRpbHNcIjo4MCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCI6MixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCI6MyxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIjo1fV0sODA6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3ZhciB0PS8oW2EtekEtWi1dKik6XFwvXFwvKD86XFwuKT8oWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XFwvXSopL2dpLHI9XCIkMSwkMiwkM1wiLG49ZS5yZXBsYWNlKHQscikuc3BsaXQoXCIsXCIpO25bMF09PT1lJiYoblswXT1cImh0dHBzXCIsblsxXT1lKTt2YXIgbz17dHlwZTpuWzBdLGRvbWFpbjpuWzFdLGlkZW50aXR5Om5bMl19O3JldHVybiBvfWZ1bmN0aW9uIG8oZSl7cmV0dXJuIGU/SlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlKSk6dm9pZCAwfU9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHIuZGl2aWRlVVJMPW4sci5kZWVwQ2xvbmU9b30se31dfSx7fSxbNzhdKSg3OCl9KTsiLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8vIERpc3RyaWJ1dGlvbiBmaWxlIGZvciBTeW5jaGVyLmpzIFxuLy8gdmVyc2lvbjogMC4xLjBcblxuIWZ1bmN0aW9uKGUpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPWUoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sZSk7ZWxzZXt2YXIgdDt0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyx0LlN5bmNoZXI9ZSgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gZSh0LHIsbyl7ZnVuY3Rpb24gbihzLGMpe2lmKCFyW3NdKXtpZighdFtzXSl7dmFyIGE9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighYyYmYSlyZXR1cm4gYShzLCEwKTtpZihpKXJldHVybiBpKHMsITApO3ZhciB1PW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrcytcIidcIik7dGhyb3cgdS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLHV9dmFyIGw9cltzXT17ZXhwb3J0czp7fX07dFtzXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgcj10W3NdWzFdW2VdO3JldHVybiBuKHI/cjplKX0sbCxsLmV4cG9ydHMsZSx0LHIsbyl9cmV0dXJuIHJbc10uZXhwb3J0c31mb3IodmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxzPTA7czxvLmxlbmd0aDtzKyspbihvW3NdKTtyZXR1cm4gbn0oezE6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSxfX2VzTW9kdWxlOiEwfX0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIjoxOX1dLDI6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSxfX2VzTW9kdWxlOiEwfX0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIjoyMH1dLDM6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKSxfX2VzTW9kdWxlOiEwfX0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIjoyMX1dLDQ6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksX19lc01vZHVsZTohMH19LHtcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiOjIyfV0sNTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz17XCJkZWZhdWx0XCI6ZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSxfX2VzTW9kdWxlOiEwfX0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCI6MjN9XSw2OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIjoyNH1dLDc6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKSxfX2VzTW9kdWxlOiEwfX0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIjoyNX1dLDg6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e1wiZGVmYXVsdFwiOmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLF9fZXNNb2R1bGU6ITB9fSx7XCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCI6MjZ9XSw5OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPXtcImRlZmF1bHRcIjplKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSxfX2VzTW9kdWxlOiEwfX0se1wiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiOjI3fV0sMTA6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZShcIi4vY2xhc3NDYWxsQ2hlY2suanNcIil9LHtcIi4vY2xhc3NDYWxsQ2hlY2suanNcIjoxMX1dLDExOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7ci5fX2VzTW9kdWxlPSEwLHJbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX19LHt9XSwxMjpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1lKFwiLi9jcmVhdGVDbGFzcy5qc1wiKX0se1wiLi9jcmVhdGVDbGFzcy5qc1wiOjEzfV0sMTM6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ci5fX2VzTW9kdWxlPSEwO3ZhciBuPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSxpPW8obik7cltcImRlZmF1bHRcIl09ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBvPXRbcl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLCgwLGlbXCJkZWZhdWx0XCJdKShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxyLG8pe3JldHVybiByJiZlKHQucHJvdG90eXBlLHIpLG8mJmUodCxvKSx0fX0oKX0se1wiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIjoyfV0sMTQ6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7XCJkZWZhdWx0XCI6ZX19ci5fX2VzTW9kdWxlPSEwO3ZhciBuPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksaT1vKG4pLHM9ZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLGM9byhzKTtyW1wiZGVmYXVsdFwiXT1mdW5jdGlvbiBhKGUsdCxyKXtudWxsPT09ZSYmKGU9RnVuY3Rpb24ucHJvdG90eXBlKTt2YXIgbz0oMCxjW1wiZGVmYXVsdFwiXSkoZSx0KTtpZih2b2lkIDA9PT1vKXt2YXIgbj0oMCxpW1wiZGVmYXVsdFwiXSkoZSk7cmV0dXJuIG51bGw9PT1uP3ZvaWQgMDphKG4sdCxyKX1pZihcInZhbHVlXCJpbiBvKXJldHVybiBvLnZhbHVlO3ZhciBzPW8uZ2V0O2lmKHZvaWQgMCE9PXMpcmV0dXJuIHMuY2FsbChyKX19LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCI6MyxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiOjR9XSwxNTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1yLl9fZXNNb2R1bGU9ITA7dmFyIG49ZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSxpPW8obikscz1lKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGVcIiksYz1vKHMpLGE9ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIiksdT1vKGEpO3JbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6KDAsdVtcImRlZmF1bHRcIl0pKHQpKSk7ZS5wcm90b3R5cGU9KDAsY1tcImRlZmF1bHRcIl0pKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoaVtcImRlZmF1bHRcIl0/KDAsaVtcImRlZmF1bHRcIl0pKGUsdCk6ZS5fX3Byb3RvX189dCl9fSx7XCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiOjEsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIjo2LFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiOjE4fV0sMTY6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZShcIi4vaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzXCIpfSx7XCIuL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qc1wiOjE3fV0sMTc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtyLl9fZXNNb2R1bGU9ITAscltcImRlZmF1bHRcIl09ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX19LHt9XSwxODpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1yLl9fZXNNb2R1bGU9ITA7dmFyIG49ZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIiksaT1vKG4pLHM9ZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2xcIiksYz1vKHMpLGE9XCJmdW5jdGlvblwiPT10eXBlb2YgY1tcImRlZmF1bHRcIl0mJlwic3ltYm9sXCI9PXR5cGVvZiBpW1wiZGVmYXVsdFwiXT9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjW1wiZGVmYXVsdFwiXSYmZS5jb25zdHJ1Y3Rvcj09PWNbXCJkZWZhdWx0XCJdP1wic3ltYm9sXCI6dHlwZW9mIGV9O3JbXCJkZWZhdWx0XCJdPVwiZnVuY3Rpb25cIj09dHlwZW9mIGNbXCJkZWZhdWx0XCJdJiZcInN5bWJvbFwiPT09YShpW1wiZGVmYXVsdFwiXSk/ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjphKGUpfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgY1tcImRlZmF1bHRcIl0mJmUuY29uc3RydWN0b3I9PT1jW1wiZGVmYXVsdFwiXT9cInN5bWJvbFwiOlwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YShlKX19LHtcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2xcIjo4LFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiOjl9XSwxOTpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlXCIpO3ZhciBvPWUoXCIuLi8uLi9tb2R1bGVzL19jb3JlXCIpLk9iamVjdDt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gby5jcmVhdGUoZSx0KX19LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjozNSxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGVcIjo5OH1dLDIwOltmdW5jdGlvbihlLHQscil7ZShcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHlcIik7dmFyIG89ZShcIi4uLy4uL21vZHVsZXMvX2NvcmVcIikuT2JqZWN0O3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscil7cmV0dXJuIG8uZGVmaW5lUHJvcGVydHkoZSx0LHIpfX0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjM1LFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eVwiOjk5fV0sMjE6W2Z1bmN0aW9uKGUsdCxyKXtlKFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTt2YXIgbz1lKFwiLi4vLi4vbW9kdWxlcy9fY29yZVwiKS5PYmplY3Q7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG8uZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCl9fSx7XCIuLi8uLi9tb2R1bGVzL19jb3JlXCI6MzUsXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCI6MTAwfV0sMjI6W2Z1bmN0aW9uKGUsdCxyKXtlKFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2ZcIiksdC5leHBvcnRzPWUoXCIuLi8uLi9tb2R1bGVzL19jb3JlXCIpLk9iamVjdC5nZXRQcm90b3R5cGVPZn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjM1LFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2ZcIjoxMDF9XSwyMzpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5c1wiKSx0LmV4cG9ydHM9ZShcIi4uLy4uL21vZHVsZXMvX2NvcmVcIikuT2JqZWN0LmtleXN9LHtcIi4uLy4uL21vZHVsZXMvX2NvcmVcIjozNSxcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzXCI6MTAyfV0sMjQ6W2Z1bmN0aW9uKGUsdCxyKXtlKFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2ZcIiksdC5leHBvcnRzPWUoXCIuLi8uLi9tb2R1bGVzL19jb3JlXCIpLk9iamVjdC5zZXRQcm90b3R5cGVPZn0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjM1LFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2ZcIjoxMDN9XSwyNTpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nXCIpLGUoXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIiksZShcIi4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZVwiKSxlKFwiLi4vbW9kdWxlcy9lczYucHJvbWlzZVwiKSx0LmV4cG9ydHM9ZShcIi4uL21vZHVsZXMvX2NvcmVcIikuUHJvbWlzZX0se1wiLi4vbW9kdWxlcy9fY29yZVwiOjM1LFwiLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjEwNCxcIi4uL21vZHVsZXMvZXM2LnByb21pc2VcIjoxMDUsXCIuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3JcIjoxMDYsXCIuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGVcIjoxMDh9XSwyNjpbZnVuY3Rpb24oZSx0LHIpe2UoXCIuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2xcIiksZShcIi4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmdcIiksdC5leHBvcnRzPWUoXCIuLi8uLi9tb2R1bGVzL19jb3JlXCIpLlN5bWJvbH0se1wiLi4vLi4vbW9kdWxlcy9fY29yZVwiOjM1LFwiLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZ1wiOjEwNCxcIi4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbFwiOjEwN31dLDI3OltmdW5jdGlvbihlLHQscil7ZShcIi4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvclwiKSxlKFwiLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCIpLHQuZXhwb3J0cz1lKFwiLi4vLi4vbW9kdWxlcy9fd2tzXCIpKFwiaXRlcmF0b3JcIil9LHtcIi4uLy4uL21vZHVsZXMvX3drc1wiOjk1LFwiLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yXCI6MTA2LFwiLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlXCI6MTA4fV0sMjg6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBUeXBlRXJyb3IoZStcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIGV9fSx7fV0sMjk6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oKXt9fSx7fV0sMzA6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbyl7aWYoIShlIGluc3RhbmNlb2YgdCl8fHZvaWQgMCE9PW8mJm8gaW4gZSl0aHJvdyBUeXBlRXJyb3IocitcIjogaW5jb3JyZWN0IGludm9jYXRpb24hXCIpO3JldHVybiBlfX0se31dLDMxOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2lzLW9iamVjdFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYoIW8oZSkpdGhyb3cgVHlwZUVycm9yKGUrXCIgaXMgbm90IGFuIG9iamVjdCFcIik7cmV0dXJuIGV9fSx7XCIuL19pcy1vYmplY3RcIjo1NH1dLDMyOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX3RvLWlvYmplY3RcIiksbj1lKFwiLi9fdG8tbGVuZ3RoXCIpLGk9ZShcIi4vX3RvLWluZGV4XCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxyLHMpe3ZhciBjLGE9byh0KSx1PW4oYS5sZW5ndGgpLGw9aShzLHUpO2lmKGUmJnIhPXIpe2Zvcig7dT5sOylpZihjPWFbbCsrXSxjIT1jKXJldHVybiEwfWVsc2UgZm9yKDt1Pmw7bCsrKWlmKChlfHxsIGluIGEpJiZhW2xdPT09cilyZXR1cm4gZXx8bDtyZXR1cm4hZSYmLTF9fX0se1wiLi9fdG8taW5kZXhcIjo4OCxcIi4vX3RvLWlvYmplY3RcIjo5MCxcIi4vX3RvLWxlbmd0aFwiOjkxfV0sMzM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fY29mXCIpLG49ZShcIi4vX3drc1wiKShcInRvU3RyaW5nVGFnXCIpLGk9XCJBcmd1bWVudHNcIj09byhmdW5jdGlvbigpe3JldHVybiBhcmd1bWVudHN9KCkpLHM9ZnVuY3Rpb24oZSx0KXt0cnl7cmV0dXJuIGVbdF19Y2F0Y2gocil7fX07dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0LHIsYztyZXR1cm4gdm9pZCAwPT09ZT9cIlVuZGVmaW5lZFwiOm51bGw9PT1lP1wiTnVsbFwiOlwic3RyaW5nXCI9PXR5cGVvZihyPXModD1PYmplY3QoZSksbikpP3I6aT9vKHQpOlwiT2JqZWN0XCI9PShjPW8odCkpJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNhbGxlZT9cIkFyZ3VtZW50c1wiOmN9fSx7XCIuL19jb2ZcIjozNCxcIi4vX3drc1wiOjk1fV0sMzQ6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz17fS50b1N0cmluZzt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG8uY2FsbChlKS5zbGljZSg4LC0xKX19LHt9XSwzNTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPXQuZXhwb3J0cz17dmVyc2lvbjpcIjIuMi4xXCJ9O1wibnVtYmVyXCI9PXR5cGVvZiBfX2UmJihfX2U9byl9LHt9XSwzNjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19hLWZ1bmN0aW9uXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscil7aWYobyhlKSx2b2lkIDA9PT10KXJldHVybiBlO3N3aXRjaChyKXtjYXNlIDE6cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBlLmNhbGwodCxyKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihyLG8pe3JldHVybiBlLmNhbGwodCxyLG8pfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKHIsbyxuKXtyZXR1cm4gZS5jYWxsKHQscixvLG4pfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0LGFyZ3VtZW50cyl9fX0se1wiLi9fYS1mdW5jdGlvblwiOjI4fV0sMzc6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7aWYodm9pZCAwPT1lKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIitlKTtyZXR1cm4gZX19LHt9XSwzODpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz0hZShcIi4vX2ZhaWxzXCIpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSx7XCIuL19mYWlsc1wiOjQzfV0sMzk6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9faXMtb2JqZWN0XCIpLG49ZShcIi4vX2dsb2JhbFwiKS5kb2N1bWVudCxpPW8obikmJm8obi5jcmVhdGVFbGVtZW50KTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGk/bi5jcmVhdGVFbGVtZW50KGUpOnt9fX0se1wiLi9fZ2xvYmFsXCI6NDUsXCIuL19pcy1vYmplY3RcIjo1NH1dLDQwOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPVwiY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mXCIuc3BsaXQoXCIsXCIpfSx7fV0sNDE6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fb2JqZWN0LWtleXNcIiksbj1lKFwiLi9fb2JqZWN0LWdvcHNcIiksaT1lKFwiLi9fb2JqZWN0LXBpZVwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9byhlKSxyPW4uZjtpZihyKWZvcih2YXIgcyxjPXIoZSksYT1pLmYsdT0wO2MubGVuZ3RoPnU7KWEuY2FsbChlLHM9Y1t1KytdKSYmdC5wdXNoKHMpO3JldHVybiB0fX0se1wiLi9fb2JqZWN0LWdvcHNcIjo3MSxcIi4vX29iamVjdC1rZXlzXCI6NzQsXCIuL19vYmplY3QtcGllXCI6NzV9XSw0MjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19nbG9iYWxcIiksbj1lKFwiLi9fY29yZVwiKSxpPWUoXCIuL19jdHhcIikscz1lKFwiLi9faGlkZVwiKSxjPVwicHJvdG90eXBlXCIsYT1mdW5jdGlvbihlLHQscil7dmFyIHUsbCxmLF89ZSZhLkYsZD1lJmEuRyxwPWUmYS5TLGI9ZSZhLlAsaD1lJmEuQix5PWUmYS5XLHY9ZD9uOm5bdF18fChuW3RdPXt9KSxqPXZbY10sbT1kP286cD9vW3RdOihvW3RdfHx7fSlbY107ZCYmKHI9dCk7Zm9yKHUgaW4gcilsPSFfJiZtJiZ2b2lkIDAhPT1tW3VdLGwmJnUgaW4gdnx8KGY9bD9tW3VdOnJbdV0sdlt1XT1kJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBtW3VdP3JbdV06aCYmbD9pKGYsbyk6eSYmbVt1XT09Zj9mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbih0LHIsbyl7aWYodGhpcyBpbnN0YW5jZW9mIGUpe3N3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtjYXNlIDA6cmV0dXJuIG5ldyBlO2Nhc2UgMTpyZXR1cm4gbmV3IGUodCk7Y2FzZSAyOnJldHVybiBuZXcgZSh0LHIpfXJldHVybiBuZXcgZSh0LHIsbyl9cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfTtyZXR1cm4gdFtjXT1lW2NdLHR9KGYpOmImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGY/aShGdW5jdGlvbi5jYWxsLGYpOmYsYiYmKCh2LnZpcnR1YWx8fCh2LnZpcnR1YWw9e30pKVt1XT1mLGUmYS5SJiZqJiYhalt1XSYmcyhqLHUsZikpKX07YS5GPTEsYS5HPTIsYS5TPTQsYS5QPTgsYS5CPTE2LGEuVz0zMixhLlU9NjQsYS5SPTEyOCx0LmV4cG9ydHM9YX0se1wiLi9fY29yZVwiOjM1LFwiLi9fY3R4XCI6MzYsXCIuL19nbG9iYWxcIjo0NSxcIi4vX2hpZGVcIjo0N31dLDQzOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3RyeXtyZXR1cm4hIWUoKX1jYXRjaCh0KXtyZXR1cm4hMH19fSx7fV0sNDQ6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fY3R4XCIpLG49ZShcIi4vX2l0ZXItY2FsbFwiKSxpPWUoXCIuL19pcy1hcnJheS1pdGVyXCIpLHM9ZShcIi4vX2FuLW9iamVjdFwiKSxjPWUoXCIuL190by1sZW5ndGhcIiksYT1lKFwiLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2RcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyLHUsbCl7dmFyIGYsXyxkLHA9bD9mdW5jdGlvbigpe3JldHVybiBlfTphKGUpLGI9byhyLHUsdD8yOjEpLGg9MDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBwKXRocm93IFR5cGVFcnJvcihlK1wiIGlzIG5vdCBpdGVyYWJsZSFcIik7aWYoaShwKSlmb3IoZj1jKGUubGVuZ3RoKTtmPmg7aCsrKXQ/YihzKF89ZVtoXSlbMF0sX1sxXSk6YihlW2hdKTtlbHNlIGZvcihkPXAuY2FsbChlKTshKF89ZC5uZXh0KCkpLmRvbmU7KW4oZCxiLF8udmFsdWUsdCl9fSx7XCIuL19hbi1vYmplY3RcIjozMSxcIi4vX2N0eFwiOjM2LFwiLi9faXMtYXJyYXktaXRlclwiOjUyLFwiLi9faXRlci1jYWxsXCI6NTUsXCIuL190by1sZW5ndGhcIjo5MSxcIi4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kXCI6OTZ9XSw0NTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPXQuZXhwb3J0cz1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cuTWF0aD09TWF0aD93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGYmJnNlbGYuTWF0aD09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcIm51bWJlclwiPT10eXBlb2YgX19nJiYoX19nPW8pfSx7fV0sNDY6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz17fS5oYXNPd25Qcm9wZXJ0eTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gby5jYWxsKGUsdCl9fSx7fV0sNDc6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fb2JqZWN0LWRwXCIpLG49ZShcIi4vX3Byb3BlcnR5LWRlc2NcIik7dC5leHBvcnRzPWUoXCIuL19kZXNjcmlwdG9yc1wiKT9mdW5jdGlvbihlLHQscil7cmV0dXJuIG8uZihlLHQsbigxLHIpKX06ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBlW3RdPXIsZX19LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MzgsXCIuL19vYmplY3QtZHBcIjo2NixcIi4vX3Byb3BlcnR5LWRlc2NcIjo3N31dLDQ4OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWUoXCIuL19nbG9iYWxcIikuZG9jdW1lbnQmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudH0se1wiLi9fZ2xvYmFsXCI6NDV9XSw0OTpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz0hZShcIi4vX2Rlc2NyaXB0b3JzXCIpJiYhZShcIi4vX2ZhaWxzXCIpKGZ1bmN0aW9uKCl7cmV0dXJuIDchPU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlKFwiLi9fZG9tLWNyZWF0ZVwiKShcImRpdlwiKSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDd9fSkuYX0pfSx7XCIuL19kZXNjcmlwdG9yc1wiOjM4LFwiLi9fZG9tLWNyZWF0ZVwiOjM5LFwiLi9fZmFpbHNcIjo0M31dLDUwOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbz12b2lkIDA9PT1yO3N3aXRjaCh0Lmxlbmd0aCl7Y2FzZSAwOnJldHVybiBvP2UoKTplLmNhbGwocik7Y2FzZSAxOnJldHVybiBvP2UodFswXSk6ZS5jYWxsKHIsdFswXSk7Y2FzZSAyOnJldHVybiBvP2UodFswXSx0WzFdKTplLmNhbGwocix0WzBdLHRbMV0pO2Nhc2UgMzpyZXR1cm4gbz9lKHRbMF0sdFsxXSx0WzJdKTplLmNhbGwocix0WzBdLHRbMV0sdFsyXSk7Y2FzZSA0OnJldHVybiBvP2UodFswXSx0WzFdLHRbMl0sdFszXSk6ZS5jYWxsKHIsdFswXSx0WzFdLHRbMl0sdFszXSl9cmV0dXJuIGUuYXBwbHkocix0KX19LHt9XSw1MTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19jb2ZcIik7dC5leHBvcnRzPU9iamVjdChcInpcIikucHJvcGVydHlJc0VudW1lcmFibGUoMCk/T2JqZWN0OmZ1bmN0aW9uKGUpe3JldHVyblwiU3RyaW5nXCI9PW8oZSk/ZS5zcGxpdChcIlwiKTpPYmplY3QoZSl9fSx7XCIuL19jb2ZcIjozNH1dLDUyOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2l0ZXJhdG9yc1wiKSxuPWUoXCIuL193a3NcIikoXCJpdGVyYXRvclwiKSxpPUFycmF5LnByb3RvdHlwZTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMCE9PWUmJihvLkFycmF5PT09ZXx8aVtuXT09PWUpfX0se1wiLi9faXRlcmF0b3JzXCI6NjAsXCIuL193a3NcIjo5NX1dLDUzOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2NvZlwiKTt0LmV4cG9ydHM9QXJyYXkuaXNBcnJheXx8ZnVuY3Rpb24oZSl7cmV0dXJuXCJBcnJheVwiPT1vKGUpfX0se1wiLi9fY29mXCI6MzR9XSw1NDpbZnVuY3Rpb24oZSx0LHIpe3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZT9udWxsIT09ZTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlfX0se31dLDU1OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2FuLW9iamVjdFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0LHIsbil7dHJ5e3JldHVybiBuP3QobyhyKVswXSxyWzFdKTp0KHIpfWNhdGNoKGkpe3ZhciBzPWVbXCJyZXR1cm5cIl07dGhyb3cgdm9pZCAwIT09cyYmbyhzLmNhbGwoZSkpLGl9fX0se1wiLi9fYW4tb2JqZWN0XCI6MzF9XSw1NjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL19vYmplY3QtY3JlYXRlXCIpLG49ZShcIi4vX3Byb3BlcnR5LWRlc2NcIiksaT1lKFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIikscz17fTtlKFwiLi9faGlkZVwiKShzLGUoXCIuL193a3NcIikoXCJpdGVyYXRvclwiKSxmdW5jdGlvbigpe3JldHVybiB0aGlzfSksdC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtlLnByb3RvdHlwZT1vKHMse25leHQ6bigxLHIpfSksaShlLHQrXCIgSXRlcmF0b3JcIil9fSx7XCIuL19oaWRlXCI6NDcsXCIuL19vYmplY3QtY3JlYXRlXCI6NjUsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NzcsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjgyLFwiLi9fd2tzXCI6OTV9XSw1NzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL19saWJyYXJ5XCIpLG49ZShcIi4vX2V4cG9ydFwiKSxpPWUoXCIuL19yZWRlZmluZVwiKSxzPWUoXCIuL19oaWRlXCIpLGM9ZShcIi4vX2hhc1wiKSxhPWUoXCIuL19pdGVyYXRvcnNcIiksdT1lKFwiLi9faXRlci1jcmVhdGVcIiksbD1lKFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIiksZj1lKFwiLi9fb2JqZWN0LWdwb1wiKSxfPWUoXCIuL193a3NcIikoXCJpdGVyYXRvclwiKSxkPSEoW10ua2V5cyYmXCJuZXh0XCJpbltdLmtleXMoKSkscD1cIkBAaXRlcmF0b3JcIixiPVwia2V5c1wiLGg9XCJ2YWx1ZXNcIix5PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3QuZXhwb3J0cz1mdW5jdGlvbihlLHQscix2LGosbSxnKXt1KHIsdCx2KTt2YXIgTyxrLHcseD1mdW5jdGlvbihlKXtpZighZCYmZSBpbiBDKXJldHVybiBDW2VdO3N3aXRjaChlKXtjYXNlIGI6cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMsZSl9O2Nhc2UgaDpyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gbmV3IHIodGhpcyxlKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyByKHRoaXMsZSl9fSxTPXQrXCIgSXRlcmF0b3JcIixFPWo9PWgsVD0hMSxDPWUucHJvdG90eXBlLFA9Q1tfXXx8Q1twXXx8aiYmQ1tqXSxSPVB8fHgoaiksTT1qP0U/eChcImVudHJpZXNcIik6Ujp2b2lkIDAsRD1cIkFycmF5XCI9PXQ/Qy5lbnRyaWVzfHxQOlA7aWYoRCYmKHc9ZihELmNhbGwobmV3IGUpKSx3IT09T2JqZWN0LnByb3RvdHlwZSYmKGwodyxTLCEwKSxvfHxjKHcsXyl8fHModyxfLHkpKSksRSYmUCYmUC5uYW1lIT09aCYmKFQ9ITAsUj1mdW5jdGlvbigpe3JldHVybiBQLmNhbGwodGhpcyl9KSxvJiYhZ3x8IWQmJiFUJiZDW19dfHxzKEMsXyxSKSxhW3RdPVIsYVtTXT15LGopaWYoTz17dmFsdWVzOkU/Ujp4KGgpLGtleXM6bT9SOngoYiksZW50cmllczpNfSxnKWZvcihrIGluIE8payBpbiBDfHxpKEMsayxPW2tdKTtlbHNlIG4obi5QK24uRiooZHx8VCksdCxPKTtyZXR1cm4gT319LHtcIi4vX2V4cG9ydFwiOjQyLFwiLi9faGFzXCI6NDYsXCIuL19oaWRlXCI6NDcsXCIuL19pdGVyLWNyZWF0ZVwiOjU2LFwiLi9faXRlcmF0b3JzXCI6NjAsXCIuL19saWJyYXJ5XCI6NjIsXCIuL19vYmplY3QtZ3BvXCI6NzIsXCIuL19yZWRlZmluZVwiOjc5LFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIjo4MixcIi4vX3drc1wiOjk1fV0sNTg6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fd2tzXCIpKFwiaXRlcmF0b3JcIiksbj0hMTt0cnl7dmFyIGk9WzddW29dKCk7aVtcInJldHVyblwiXT1mdW5jdGlvbigpe249ITB9LEFycmF5LmZyb20oaSxmdW5jdGlvbigpe3Rocm93IDJ9KX1jYXRjaChzKXt9dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7aWYoIXQmJiFuKXJldHVybiExO3ZhciByPSExO3RyeXt2YXIgaT1bN10scz1pW29dKCk7cy5uZXh0PWZ1bmN0aW9uKCl7cj0hMH0saVtvXT1mdW5jdGlvbigpe3JldHVybiBzfSxlKGkpfWNhdGNoKGMpe31yZXR1cm4gcn19LHtcIi4vX3drc1wiOjk1fV0sNTk6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm57dmFsdWU6dCxkb25lOiEhZX19fSx7fV0sNjA6W2Z1bmN0aW9uKGUsdCxyKXt0LmV4cG9ydHM9e319LHt9XSw2MTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19vYmplY3Qta2V5c1wiKSxuPWUoXCIuL190by1pb2JqZWN0XCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgcixpPW4oZSkscz1vKGkpLGM9cy5sZW5ndGgsYT0wO2M+YTspaWYoaVtyPXNbYSsrXV09PT10KXJldHVybiByfX0se1wiLi9fb2JqZWN0LWtleXNcIjo3NCxcIi4vX3RvLWlvYmplY3RcIjo5MH1dLDYyOltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPSEwfSx7fV0sNjM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fdWlkXCIpKFwibWV0YVwiKSxuPWUoXCIuL19pcy1vYmplY3RcIiksaT1lKFwiLi9faGFzXCIpLHM9ZShcIi4vX29iamVjdC1kcFwiKS5mLGM9MCxhPU9iamVjdC5pc0V4dGVuc2libGV8fGZ1bmN0aW9uKCl7cmV0dXJuITB9LHU9IWUoXCIuL19mYWlsc1wiKShmdW5jdGlvbigpe3JldHVybiBhKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpfSksbD1mdW5jdGlvbihlKXtzKGUsbyx7dmFsdWU6e2k6XCJPXCIrICsrYyx3Ont9fX0pfSxmPWZ1bmN0aW9uKGUsdCl7aWYoIW4oZSkpcmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGU/ZTooXCJzdHJpbmdcIj09dHlwZW9mIGU/XCJTXCI6XCJQXCIpK2U7aWYoIWkoZSxvKSl7aWYoIWEoZSkpcmV0dXJuXCJGXCI7aWYoIXQpcmV0dXJuXCJFXCI7bChlKX1yZXR1cm4gZVtvXS5pfSxfPWZ1bmN0aW9uKGUsdCl7aWYoIWkoZSxvKSl7aWYoIWEoZSkpcmV0dXJuITA7aWYoIXQpcmV0dXJuITE7bChlKX1yZXR1cm4gZVtvXS53fSxkPWZ1bmN0aW9uKGUpe3JldHVybiB1JiZwLk5FRUQmJmEoZSkmJiFpKGUsbykmJmwoZSksZX0scD10LmV4cG9ydHM9e0tFWTpvLE5FRUQ6ITEsZmFzdEtleTpmLGdldFdlYWs6XyxvbkZyZWV6ZTpkfX0se1wiLi9fZmFpbHNcIjo0MyxcIi4vX2hhc1wiOjQ2LFwiLi9faXMtb2JqZWN0XCI6NTQsXCIuL19vYmplY3QtZHBcIjo2NixcIi4vX3VpZFwiOjk0fV0sNjQ6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbyxuLGkscz1lKFwiLi9fZ2xvYmFsXCIpLGM9ZShcIi4vX3Rhc2tcIikuc2V0LGE9cy5NdXRhdGlvbk9ic2VydmVyfHxzLldlYktpdE11dGF0aW9uT2JzZXJ2ZXIsdT1zLnByb2Nlc3MsbD1zLlByb21pc2UsZj1cInByb2Nlc3NcIj09ZShcIi4vX2NvZlwiKSh1KSxfPWZ1bmN0aW9uKCl7dmFyIGUsdDtmb3IoZiYmKGU9dS5kb21haW4pJiZlLmV4aXQoKTtvOyl0PW8uZm4sdCgpLG89by5uZXh0O249dm9pZCAwLGUmJmUuZW50ZXIoKX07aWYoZilpPWZ1bmN0aW9uKCl7dS5uZXh0VGljayhfKX07ZWxzZSBpZihhKXt2YXIgZD0hMCxwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO25ldyBhKF8pLm9ic2VydmUocCx7Y2hhcmFjdGVyRGF0YTohMH0pLGk9ZnVuY3Rpb24oKXtwLmRhdGE9ZD0hZH19ZWxzZSBpPWwmJmwucmVzb2x2ZT9mdW5jdGlvbigpe2wucmVzb2x2ZSgpLnRoZW4oXyl9OmZ1bmN0aW9uKCl7Yy5jYWxsKHMsXyl9O3QuZXhwb3J0cz1mdW5jdGlvbihlKXt2YXIgdD17Zm46ZSxuZXh0OnZvaWQgMH07biYmKG4ubmV4dD10KSxvfHwobz10LGkoKSksbj10fX0se1wiLi9fY29mXCI6MzQsXCIuL19nbG9iYWxcIjo0NSxcIi4vX3Rhc2tcIjo4N31dLDY1OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2FuLW9iamVjdFwiKSxuPWUoXCIuL19vYmplY3QtZHBzXCIpLGk9ZShcIi4vX2VudW0tYnVnLWtleXNcIikscz1lKFwiLi9fc2hhcmVkLWtleVwiKShcIklFX1BST1RPXCIpLGM9ZnVuY3Rpb24oKXt9LGE9XCJwcm90b3R5cGVcIix1PWZ1bmN0aW9uKCl7dmFyIHQscj1lKFwiLi9fZG9tLWNyZWF0ZVwiKShcImlmcmFtZVwiKSxvPWkubGVuZ3RoLG49XCI+XCI7Zm9yKHIuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixlKFwiLi9faHRtbFwiKS5hcHBlbmRDaGlsZChyKSxyLnNyYz1cImphdmFzY3JpcHQ6XCIsdD1yLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQsdC5vcGVuKCksdC53cml0ZShcIjxzY3JpcHQ+ZG9jdW1lbnQuRj1PYmplY3Q8L3NjcmlwdFwiK24pLHQuY2xvc2UoKSx1PXQuRjtvLS07KWRlbGV0ZSB1W2FdW2lbb11dO3JldHVybiB1KCl9O3QuZXhwb3J0cz1PYmplY3QuY3JlYXRlfHxmdW5jdGlvbihlLHQpe3ZhciByO3JldHVybiBudWxsIT09ZT8oY1thXT1vKGUpLHI9bmV3IGMsY1thXT1udWxsLHJbc109ZSk6cj11KCksdm9pZCAwPT09dD9yOm4ocix0KX19LHtcIi4vX2FuLW9iamVjdFwiOjMxLFwiLi9fZG9tLWNyZWF0ZVwiOjM5LFwiLi9fZW51bS1idWcta2V5c1wiOjQwLFwiLi9faHRtbFwiOjQ4LFwiLi9fb2JqZWN0LWRwc1wiOjY3LFwiLi9fc2hhcmVkLWtleVwiOjgzfV0sNjY6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fYW4tb2JqZWN0XCIpLG49ZShcIi4vX2llOC1kb20tZGVmaW5lXCIpLGk9ZShcIi4vX3RvLXByaW1pdGl2ZVwiKSxzPU9iamVjdC5kZWZpbmVQcm9wZXJ0eTtyLmY9ZShcIi4vX2Rlc2NyaXB0b3JzXCIpP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihlLHQscil7aWYobyhlKSx0PWkodCwhMCksbyhyKSxuKXRyeXtyZXR1cm4gcyhlLHQscil9Y2F0Y2goYyl7fWlmKFwiZ2V0XCJpbiByfHxcInNldFwiaW4gcil0aHJvdyBUeXBlRXJyb3IoXCJBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCFcIik7cmV0dXJuXCJ2YWx1ZVwiaW4gciYmKGVbdF09ci52YWx1ZSksZX19LHtcIi4vX2FuLW9iamVjdFwiOjMxLFwiLi9fZGVzY3JpcHRvcnNcIjozOCxcIi4vX2llOC1kb20tZGVmaW5lXCI6NDksXCIuL190by1wcmltaXRpdmVcIjo5M31dLDY3OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX29iamVjdC1kcFwiKSxuPWUoXCIuL19hbi1vYmplY3RcIiksaT1lKFwiLi9fb2JqZWN0LWtleXNcIik7dC5leHBvcnRzPWUoXCIuL19kZXNjcmlwdG9yc1wiKT9PYmplY3QuZGVmaW5lUHJvcGVydGllczpmdW5jdGlvbihlLHQpe24oZSk7Zm9yKHZhciByLHM9aSh0KSxjPXMubGVuZ3RoLGE9MDtjPmE7KW8uZihlLHI9c1thKytdLHRbcl0pO3JldHVybiBlfX0se1wiLi9fYW4tb2JqZWN0XCI6MzEsXCIuL19kZXNjcmlwdG9yc1wiOjM4LFwiLi9fb2JqZWN0LWRwXCI6NjYsXCIuL19vYmplY3Qta2V5c1wiOjc0fV0sNjg6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fb2JqZWN0LXBpZVwiKSxuPWUoXCIuL19wcm9wZXJ0eS1kZXNjXCIpLGk9ZShcIi4vX3RvLWlvYmplY3RcIikscz1lKFwiLi9fdG8tcHJpbWl0aXZlXCIpLGM9ZShcIi4vX2hhc1wiKSxhPWUoXCIuL19pZTgtZG9tLWRlZmluZVwiKSx1PU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7ci5mPWUoXCIuL19kZXNjcmlwdG9yc1wiKT91OmZ1bmN0aW9uKGUsdCl7aWYoZT1pKGUpLHQ9cyh0LCEwKSxhKXRyeXtyZXR1cm4gdShlLHQpfWNhdGNoKHIpe31yZXR1cm4gYyhlLHQpP24oIW8uZi5jYWxsKGUsdCksZVt0XSk6dm9pZCAwfX0se1wiLi9fZGVzY3JpcHRvcnNcIjozOCxcIi4vX2hhc1wiOjQ2LFwiLi9faWU4LWRvbS1kZWZpbmVcIjo0OSxcIi4vX29iamVjdC1waWVcIjo3NSxcIi4vX3Byb3BlcnR5LWRlc2NcIjo3NyxcIi4vX3RvLWlvYmplY3RcIjo5MCxcIi4vX3RvLXByaW1pdGl2ZVwiOjkzfV0sNjk6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9fdG8taW9iamVjdFwiKSxuPWUoXCIuL19vYmplY3QtZ29wblwiKS5mLGk9e30udG9TdHJpbmcscz1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzP09iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdyk6W10sYz1mdW5jdGlvbihlKXt0cnl7cmV0dXJuIG4oZSl9Y2F0Y2godCl7cmV0dXJuIHMuc2xpY2UoKX19O3QuZXhwb3J0cy5mPWZ1bmN0aW9uKGUpe3JldHVybiBzJiZcIltvYmplY3QgV2luZG93XVwiPT1pLmNhbGwoZSk/YyhlKTpuKG8oZSkpfX0se1wiLi9fb2JqZWN0LWdvcG5cIjo3MCxcIi4vX3RvLWlvYmplY3RcIjo5MH1dLDcwOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCIpLG49ZShcIi4vX2VudW0tYnVnLWtleXNcIikuY29uY2F0KFwibGVuZ3RoXCIsXCJwcm90b3R5cGVcIik7ci5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzfHxmdW5jdGlvbihlKXtyZXR1cm4gbyhlLG4pfX0se1wiLi9fZW51bS1idWcta2V5c1wiOjQwLFwiLi9fb2JqZWN0LWtleXMtaW50ZXJuYWxcIjo3M31dLDcxOltmdW5jdGlvbihlLHQscil7ci5mPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHN9LHt9XSw3MjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19oYXNcIiksbj1lKFwiLi9fdG8tb2JqZWN0XCIpLGk9ZShcIi4vX3NoYXJlZC1rZXlcIikoXCJJRV9QUk9UT1wiKSxzPU9iamVjdC5wcm90b3R5cGU7dC5leHBvcnRzPU9iamVjdC5nZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24oZSl7cmV0dXJuIGU9bihlKSxvKGUsaSk/ZVtpXTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmNvbnN0cnVjdG9yJiZlIGluc3RhbmNlb2YgZS5jb25zdHJ1Y3Rvcj9lLmNvbnN0cnVjdG9yLnByb3RvdHlwZTplIGluc3RhbmNlb2YgT2JqZWN0P3M6bnVsbH19LHtcIi4vX2hhc1wiOjQ2LFwiLi9fc2hhcmVkLWtleVwiOjgzLFwiLi9fdG8tb2JqZWN0XCI6OTJ9XSw3MzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19oYXNcIiksbj1lKFwiLi9fdG8taW9iamVjdFwiKSxpPWUoXCIuL19hcnJheS1pbmNsdWRlc1wiKSghMSkscz1lKFwiLi9fc2hhcmVkLWtleVwiKShcIklFX1BST1RPXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciByLGM9bihlKSxhPTAsdT1bXTtmb3IociBpbiBjKXIhPXMmJm8oYyxyKSYmdS5wdXNoKHIpO2Zvcig7dC5sZW5ndGg+YTspbyhjLHI9dFthKytdKSYmKH5pKHUscil8fHUucHVzaChyKSk7cmV0dXJuIHV9fSx7XCIuL19hcnJheS1pbmNsdWRlc1wiOjMyLFwiLi9faGFzXCI6NDYsXCIuL19zaGFyZWQta2V5XCI6ODMsXCIuL190by1pb2JqZWN0XCI6OTB9XSw3NDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19vYmplY3Qta2V5cy1pbnRlcm5hbFwiKSxuPWUoXCIuL19lbnVtLWJ1Zy1rZXlzXCIpO3QuZXhwb3J0cz1PYmplY3Qua2V5c3x8ZnVuY3Rpb24oZSl7cmV0dXJuIG8oZSxuKX19LHtcIi4vX2VudW0tYnVnLWtleXNcIjo0MCxcIi4vX29iamVjdC1rZXlzLWludGVybmFsXCI6NzN9XSw3NTpbZnVuY3Rpb24oZSx0LHIpe3IuZj17fS5wcm9wZXJ0eUlzRW51bWVyYWJsZX0se31dLDc2OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2V4cG9ydFwiKSxuPWUoXCIuL19jb3JlXCIpLGk9ZShcIi4vX2ZhaWxzXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciByPShuLk9iamVjdHx8e30pW2VdfHxPYmplY3RbZV0scz17fTtzW2VdPXQociksbyhvLlMrby5GKmkoZnVuY3Rpb24oKXtyKDEpfSksXCJPYmplY3RcIixzKX19LHtcIi4vX2NvcmVcIjozNSxcIi4vX2V4cG9ydFwiOjQyLFwiLi9fZmFpbHNcIjo0M31dLDc3OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7cmV0dXJue2VudW1lcmFibGU6ISgxJmUpLGNvbmZpZ3VyYWJsZTohKDImZSksd3JpdGFibGU6ISg0JmUpLHZhbHVlOnR9fX0se31dLDc4OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2hpZGVcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtmb3IodmFyIG4gaW4gdClyJiZlW25dP2Vbbl09dFtuXTpvKGUsbix0W25dKTtyZXR1cm4gZX19LHtcIi4vX2hpZGVcIjo0N31dLDc5OltmdW5jdGlvbihlLHQscil7dC5leHBvcnRzPWUoXCIuL19oaWRlXCIpfSx7XCIuL19oaWRlXCI6NDd9XSw4MDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19pcy1vYmplY3RcIiksbj1lKFwiLi9fYW4tb2JqZWN0XCIpLGk9ZnVuY3Rpb24oZSx0KXtpZihuKGUpLCFvKHQpJiZudWxsIT09dCl0aHJvdyBUeXBlRXJyb3IodCtcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIil9O3QuZXhwb3J0cz17c2V0Ok9iamVjdC5zZXRQcm90b3R5cGVPZnx8KFwiX19wcm90b19fXCJpbnt9P2Z1bmN0aW9uKHQscixvKXt0cnl7bz1lKFwiLi9fY3R4XCIpKEZ1bmN0aW9uLmNhbGwsZShcIi4vX29iamVjdC1nb3BkXCIpLmYoT2JqZWN0LnByb3RvdHlwZSxcIl9fcHJvdG9fX1wiKS5zZXQsMiksbyh0LFtdKSxyPSEodCBpbnN0YW5jZW9mIEFycmF5KX1jYXRjaChuKXtyPSEwfXJldHVybiBmdW5jdGlvbihlLHQpe3JldHVybiBpKGUsdCkscj9lLl9fcHJvdG9fXz10Om8oZSx0KSxlfX0oe30sITEpOnZvaWQgMCksY2hlY2s6aX19LHtcIi4vX2FuLW9iamVjdFwiOjMxLFwiLi9fY3R4XCI6MzYsXCIuL19pcy1vYmplY3RcIjo1NCxcIi4vX29iamVjdC1nb3BkXCI6Njh9XSw4MTpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCIuL19nbG9iYWxcIiksbj1lKFwiLi9fY29yZVwiKSxpPWUoXCIuL19vYmplY3QtZHBcIikscz1lKFwiLi9fZGVzY3JpcHRvcnNcIiksYz1lKFwiLi9fd2tzXCIpKFwic3BlY2llc1wiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgbltlXT9uW2VdOm9bZV07cyYmdCYmIXRbY10mJmkuZih0LGMse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc319KX19LHtcIi4vX2NvcmVcIjozNSxcIi4vX2Rlc2NyaXB0b3JzXCI6MzgsXCIuL19nbG9iYWxcIjo0NSxcIi4vX29iamVjdC1kcFwiOjY2LFwiLi9fd2tzXCI6OTV9XSw4MjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19vYmplY3QtZHBcIikuZixuPWUoXCIuL19oYXNcIiksaT1lKFwiLi9fd2tzXCIpKFwidG9TdHJpbmdUYWdcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCxyKXtlJiYhbihlPXI/ZTplLnByb3RvdHlwZSxpKSYmbyhlLGkse2NvbmZpZ3VyYWJsZTohMCx2YWx1ZTp0fSl9fSx7XCIuL19oYXNcIjo0NixcIi4vX29iamVjdC1kcFwiOjY2LFwiLi9fd2tzXCI6OTV9XSw4MzpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19zaGFyZWRcIikoXCJrZXlzXCIpLG49ZShcIi4vX3VpZFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG9bZV18fChvW2VdPW4oZSkpfX0se1wiLi9fc2hhcmVkXCI6ODQsXCIuL191aWRcIjo5NH1dLDg0OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2dsb2JhbFwiKSxuPVwiX19jb3JlLWpzX3NoYXJlZF9fXCIsaT1vW25dfHwob1tuXT17fSk7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBpW2VdfHwoaVtlXT17fSl9fSx7XCIuL19nbG9iYWxcIjo0NX1dLDg1OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2FuLW9iamVjdFwiKSxuPWUoXCIuL19hLWZ1bmN0aW9uXCIpLGk9ZShcIi4vX3drc1wiKShcInNwZWNpZXNcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIHIscz1vKGUpLmNvbnN0cnVjdG9yO3JldHVybiB2b2lkIDA9PT1zfHx2b2lkIDA9PShyPW8ocylbaV0pP3Q6bihyKX19LHtcIi4vX2EtZnVuY3Rpb25cIjoyOCxcIi4vX2FuLW9iamVjdFwiOjMxLFwiLi9fd2tzXCI6OTV9XSw4NjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL190by1pbnRlZ2VyXCIpLG49ZShcIi4vX2RlZmluZWRcIik7dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0LHIpe3ZhciBpLHMsYz1TdHJpbmcobih0KSksYT1vKHIpLHU9Yy5sZW5ndGg7cmV0dXJuIDA+YXx8YT49dT9lP1wiXCI6dm9pZCAwOihpPWMuY2hhckNvZGVBdChhKSw1NTI5Nj5pfHxpPjU2MzE5fHxhKzE9PT11fHwocz1jLmNoYXJDb2RlQXQoYSsxKSk8NTYzMjB8fHM+NTczNDM/ZT9jLmNoYXJBdChhKTppOmU/Yy5zbGljZShhLGErMik6KGktNTUyOTY8PDEwKSsocy01NjMyMCkrNjU1MzYpfX19LHtcIi4vX2RlZmluZWRcIjozNyxcIi4vX3RvLWludGVnZXJcIjo4OX1dLDg3OltmdW5jdGlvbihlLHQscil7dmFyIG8sbixpLHM9ZShcIi4vX2N0eFwiKSxjPWUoXCIuL19pbnZva2VcIiksYT1lKFwiLi9faHRtbFwiKSx1PWUoXCIuL19kb20tY3JlYXRlXCIpLGw9ZShcIi4vX2dsb2JhbFwiKSxmPWwucHJvY2VzcyxfPWwuc2V0SW1tZWRpYXRlLGQ9bC5jbGVhckltbWVkaWF0ZSxwPWwuTWVzc2FnZUNoYW5uZWwsYj0wLGg9e30seT1cIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLHY9ZnVuY3Rpb24oKXt2YXIgZT0rdGhpcztpZihoLmhhc093blByb3BlcnR5KGUpKXt2YXIgdD1oW2VdO2RlbGV0ZSBoW2VdLHQoKX19LGo9ZnVuY3Rpb24oZSl7di5jYWxsKGUuZGF0YSl9O18mJmR8fChfPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxyPTE7YXJndW1lbnRzLmxlbmd0aD5yOyl0LnB1c2goYXJndW1lbnRzW3IrK10pO3JldHVybiBoWysrYl09ZnVuY3Rpb24oKXtjKFwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZTpGdW5jdGlvbihlKSx0KX0sbyhiKSxifSxkPWZ1bmN0aW9uKGUpe2RlbGV0ZSBoW2VdfSxcInByb2Nlc3NcIj09ZShcIi4vX2NvZlwiKShmKT9vPWZ1bmN0aW9uKGUpe2YubmV4dFRpY2socyh2LGUsMSkpfTpwPyhuPW5ldyBwLGk9bi5wb3J0MixuLnBvcnQxLm9ubWVzc2FnZT1qLG89cyhpLnBvc3RNZXNzYWdlLGksMSkpOmwuYWRkRXZlbnRMaXN0ZW5lciYmXCJmdW5jdGlvblwiPT10eXBlb2YgcG9zdE1lc3NhZ2UmJiFsLmltcG9ydFNjcmlwdHM/KG89ZnVuY3Rpb24oZSl7bC5wb3N0TWVzc2FnZShlK1wiXCIsXCIqXCIpfSxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsaiwhMSkpOm89eSBpbiB1KFwic2NyaXB0XCIpP2Z1bmN0aW9uKGUpe2EuYXBwZW5kQ2hpbGQodShcInNjcmlwdFwiKSlbeV09ZnVuY3Rpb24oKXthLnJlbW92ZUNoaWxkKHRoaXMpLHYuY2FsbChlKX19OmZ1bmN0aW9uKGUpe3NldFRpbWVvdXQocyh2LGUsMSksMCl9KSx0LmV4cG9ydHM9e3NldDpfLGNsZWFyOmR9fSx7XCIuL19jb2ZcIjozNCxcIi4vX2N0eFwiOjM2LFwiLi9fZG9tLWNyZWF0ZVwiOjM5LFwiLi9fZ2xvYmFsXCI6NDUsXCIuL19odG1sXCI6NDgsXCIuL19pbnZva2VcIjo1MH1dLDg4OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX3RvLWludGVnZXJcIiksbj1NYXRoLm1heCxpPU1hdGgubWluO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiBlPW8oZSksMD5lP24oZSt0LDApOmkoZSx0KX19LHtcIi4vX3RvLWludGVnZXJcIjo4OX1dLDg5OltmdW5jdGlvbihlLHQscil7dmFyIG89TWF0aC5jZWlsLG49TWF0aC5mbG9vcjt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGlzTmFOKGU9K2UpPzA6KGU+MD9uOm8pKGUpfX0se31dLDkwOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2lvYmplY3RcIiksbj1lKFwiLi9fZGVmaW5lZFwiKTt0LmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIG8obihlKSl9fSx7XCIuL19kZWZpbmVkXCI6MzcsXCIuL19pb2JqZWN0XCI6NTF9XSw5MTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL190by1pbnRlZ2VyXCIpLG49TWF0aC5taW47dC5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBlPjA/bihvKGUpLDkwMDcxOTkyNTQ3NDA5OTEpOjB9fSx7XCIuL190by1pbnRlZ2VyXCI6ODl9XSw5MjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19kZWZpbmVkXCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0KG8oZSkpfX0se1wiLi9fZGVmaW5lZFwiOjM3fV0sOTM6W2Z1bmN0aW9uKGUsdCxyKXt2YXIgbz1lKFwiLi9faXMtb2JqZWN0XCIpO3QuZXhwb3J0cz1mdW5jdGlvbihlLHQpe2lmKCFvKGUpKXJldHVybiBlO3ZhciByLG47aWYodCYmXCJmdW5jdGlvblwiPT10eXBlb2Yocj1lLnRvU3RyaW5nKSYmIW8obj1yLmNhbGwoZSkpKXJldHVybiBuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mKHI9ZS52YWx1ZU9mKSYmIW8obj1yLmNhbGwoZSkpKXJldHVybiBuO2lmKCF0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZihyPWUudG9TdHJpbmcpJiYhbyhuPXIuY2FsbChlKSkpcmV0dXJuIG47dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpfX0se1wiLi9faXMtb2JqZWN0XCI6NTR9XSw5NDpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPTAsbj1NYXRoLnJhbmRvbSgpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm5cIlN5bWJvbChcIi5jb25jYXQodm9pZCAwPT09ZT9cIlwiOmUsXCIpX1wiLCgrK28rbikudG9TdHJpbmcoMzYpKX19LHt9XSw5NTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19zaGFyZWRcIikoXCJ3a3NcIiksbj1lKFwiLi9fdWlkXCIpLGk9ZShcIi4vX2dsb2JhbFwiKS5TeW1ib2wscz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpO3QuZXhwb3J0cz1mdW5jdGlvbihlKXtyZXR1cm4gb1tlXXx8KG9bZV09cyYmaVtlXXx8KHM/aTpuKShcIlN5bWJvbC5cIitlKSl9fSx7XCIuL19nbG9iYWxcIjo0NSxcIi4vX3NoYXJlZFwiOjg0LFwiLi9fdWlkXCI6OTR9XSw5NjpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19jbGFzc29mXCIpLG49ZShcIi4vX3drc1wiKShcIml0ZXJhdG9yXCIpLGk9ZShcIi4vX2l0ZXJhdG9yc1wiKTt0LmV4cG9ydHM9ZShcIi4vX2NvcmVcIikuZ2V0SXRlcmF0b3JNZXRob2Q9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMCE9ZT9lW25dfHxlW1wiQEBpdGVyYXRvclwiXXx8aVtvKGUpXTp2b2lkIDB9fSx7XCIuL19jbGFzc29mXCI6MzMsXCIuL19jb3JlXCI6MzUsXCIuL19pdGVyYXRvcnNcIjo2MCxcIi4vX3drc1wiOjk1fV0sOTc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1lKFwiLi9fYWRkLXRvLXVuc2NvcGFibGVzXCIpLG49ZShcIi4vX2l0ZXItc3RlcFwiKSxpPWUoXCIuL19pdGVyYXRvcnNcIikscz1lKFwiLi9fdG8taW9iamVjdFwiKTt0LmV4cG9ydHM9ZShcIi4vX2l0ZXItZGVmaW5lXCIpKEFycmF5LFwiQXJyYXlcIixmdW5jdGlvbihlLHQpe3RoaXMuX3Q9cyhlKSx0aGlzLl9pPTAsdGhpcy5faz10fSxmdW5jdGlvbigpe3ZhciBlPXRoaXMuX3QsdD10aGlzLl9rLHI9dGhpcy5faSsrO3JldHVybiFlfHxyPj1lLmxlbmd0aD8odGhpcy5fdD12b2lkIDAsbigxKSk6XCJrZXlzXCI9PXQ/bigwLHIpOlwidmFsdWVzXCI9PXQ/bigwLGVbcl0pOm4oMCxbcixlW3JdXSl9LFwidmFsdWVzXCIpLGkuQXJndW1lbnRzPWkuQXJyYXksbyhcImtleXNcIiksbyhcInZhbHVlc1wiKSxvKFwiZW50cmllc1wiKX0se1wiLi9fYWRkLXRvLXVuc2NvcGFibGVzXCI6MjksXCIuL19pdGVyLWRlZmluZVwiOjU3LFwiLi9faXRlci1zdGVwXCI6NTksXCIuL19pdGVyYXRvcnNcIjo2MCxcIi4vX3RvLWlvYmplY3RcIjo5MH1dLDk4OltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2V4cG9ydFwiKTtvKG8uUyxcIk9iamVjdFwiLHtjcmVhdGU6ZShcIi4vX29iamVjdC1jcmVhdGVcIil9KX0se1wiLi9fZXhwb3J0XCI6NDIsXCIuL19vYmplY3QtY3JlYXRlXCI6NjV9XSw5OTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL19leHBvcnRcIik7byhvLlMrby5GKiFlKFwiLi9fZGVzY3JpcHRvcnNcIiksXCJPYmplY3RcIix7ZGVmaW5lUHJvcGVydHk6ZShcIi4vX29iamVjdC1kcFwiKS5mfSl9LHtcIi4vX2Rlc2NyaXB0b3JzXCI6MzgsXCIuL19leHBvcnRcIjo0MixcIi4vX29iamVjdC1kcFwiOjY2fV0sMTAwOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX3RvLWlvYmplY3RcIiksbj1lKFwiLi9fb2JqZWN0LWdvcGRcIikuZjtlKFwiLi9fb2JqZWN0LXNhcFwiKShcImdldE93blByb3BlcnR5RGVzY3JpcHRvclwiLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4obyhlKSx0KX19KX0se1wiLi9fb2JqZWN0LWdvcGRcIjo2OCxcIi4vX29iamVjdC1zYXBcIjo3NixcIi4vX3RvLWlvYmplY3RcIjo5MH1dLDEwMTpbZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUoXCIuL190by1vYmplY3RcIiksbj1lKFwiLi9fb2JqZWN0LWdwb1wiKTtlKFwiLi9fb2JqZWN0LXNhcFwiKShcImdldFByb3RvdHlwZU9mXCIsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIG4obyhlKSl9fSl9LHtcIi4vX29iamVjdC1ncG9cIjo3MixcIi4vX29iamVjdC1zYXBcIjo3NixcIi4vX3RvLW9iamVjdFwiOjkyfV0sMTAyOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX3RvLW9iamVjdFwiKSxuPWUoXCIuL19vYmplY3Qta2V5c1wiKTtlKFwiLi9fb2JqZWN0LXNhcFwiKShcImtleXNcIixmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gbihvKGUpKX19KX0se1wiLi9fb2JqZWN0LWtleXNcIjo3NCxcIi4vX29iamVjdC1zYXBcIjo3NixcIi4vX3RvLW9iamVjdFwiOjkyfV0sMTAzOltmdW5jdGlvbihlLHQscil7dmFyIG89ZShcIi4vX2V4cG9ydFwiKTtvKG8uUyxcIk9iamVjdFwiLHtzZXRQcm90b3R5cGVPZjplKFwiLi9fc2V0LXByb3RvXCIpLnNldH0pfSx7XCIuL19leHBvcnRcIjo0MixcIi4vX3NldC1wcm90b1wiOjgwfV0sMTA0OltmdW5jdGlvbihlLHQscil7fSx7fV0sMTA1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG8sbixpLHM9ZShcIi4vX2xpYnJhcnlcIiksYz1lKFwiLi9fZ2xvYmFsXCIpLGE9ZShcIi4vX2N0eFwiKSx1PWUoXCIuL19jbGFzc29mXCIpLGw9ZShcIi4vX2V4cG9ydFwiKSxmPWUoXCIuL19pcy1vYmplY3RcIiksXz0oZShcIi4vX2FuLW9iamVjdFwiKSxlKFwiLi9fYS1mdW5jdGlvblwiKSksZD1lKFwiLi9fYW4taW5zdGFuY2VcIikscD1lKFwiLi9fZm9yLW9mXCIpLGI9KGUoXCIuL19zZXQtcHJvdG9cIikuc2V0LGUoXCIuL19zcGVjaWVzLWNvbnN0cnVjdG9yXCIpKSxoPWUoXCIuL190YXNrXCIpLnNldCx5PWUoXCIuL19taWNyb3Rhc2tcIiksdj1cIlByb21pc2VcIixqPWMuVHlwZUVycm9yLG09Yy5wcm9jZXNzLGc9Y1t2XSxtPWMucHJvY2VzcyxPPVwicHJvY2Vzc1wiPT11KG0pLGs9ZnVuY3Rpb24oKXt9LHc9ISFmdW5jdGlvbigpe3RyeXt2YXIgdD1nLnJlc29sdmUoMSkscj0odC5jb25zdHJ1Y3Rvcj17fSlbZShcIi4vX3drc1wiKShcInNwZWNpZXNcIildPWZ1bmN0aW9uKGUpe2UoayxrKX07cmV0dXJuKE98fFwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCkmJnQudGhlbihrKWluc3RhbmNlb2Ygcn1jYXRjaChvKXt9fSgpLHg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXR8fGU9PT1nJiZ0PT09aX0sUz1mdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gZihlKSYmXCJmdW5jdGlvblwiPT10eXBlb2YodD1lLnRoZW4pP3Q6ITF9LEU9ZnVuY3Rpb24oZSl7cmV0dXJuIHgoZyxlKT9uZXcgVChlKTpuZXcgbihlKX0sVD1uPWZ1bmN0aW9uKGUpe3ZhciB0LHI7dGhpcy5wcm9taXNlPW5ldyBlKGZ1bmN0aW9uKGUsbyl7aWYodm9pZCAwIT09dHx8dm9pZCAwIT09cil0aHJvdyBqKFwiQmFkIFByb21pc2UgY29uc3RydWN0b3JcIik7dD1lLHI9b30pLHRoaXMucmVzb2x2ZT1fKHQpLHRoaXMucmVqZWN0PV8ocil9LEM9ZnVuY3Rpb24oZSl7dHJ5e2UoKX1jYXRjaCh0KXtyZXR1cm57ZXJyb3I6dH19fSxQPWZ1bmN0aW9uKGUsdCl7aWYoIWUuX24pe2UuX249ITA7dmFyIHI9ZS5fYzt5KGZ1bmN0aW9uKCl7Zm9yKHZhciBvPWUuX3Ysbj0xPT1lLl9zLGk9MCxzPWZ1bmN0aW9uKHQpe3ZhciByLGkscz1uP3Qub2s6dC5mYWlsLGM9dC5yZXNvbHZlLGE9dC5yZWplY3QsdT10LmRvbWFpbjt0cnl7cz8obnx8KDI9PWUuX2gmJkQoZSksZS5faD0xKSxzPT09ITA/cj1vOih1JiZ1LmVudGVyKCkscj1zKG8pLHUmJnUuZXhpdCgpKSxyPT09dC5wcm9taXNlP2EoaihcIlByb21pc2UtY2hhaW4gY3ljbGVcIikpOihpPVMocikpP2kuY2FsbChyLGMsYSk6YyhyKSk6YShvKX1jYXRjaChsKXthKGwpfX07ci5sZW5ndGg+aTspcyhyW2krK10pO2UuX2M9W10sZS5fbj0hMSx0JiYhZS5faCYmUihlKX0pfX0sUj1mdW5jdGlvbihlKXtoLmNhbGwoYyxmdW5jdGlvbigpe3ZhciB0LHIsbyxuPWUuX3Y7aWYoTShlKSYmKHQ9QyhmdW5jdGlvbigpe08/bS5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsbixlKToocj1jLm9udW5oYW5kbGVkcmVqZWN0aW9uKT9yKHtwcm9taXNlOmUscmVhc29uOm59KToobz1jLmNvbnNvbGUpJiZvLmVycm9yJiZvLmVycm9yKFwiVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXCIsbil9KSxlLl9oPU98fE0oZSk/MjoxKSxlLl9hPXZvaWQgMCx0KXRocm93IHQuZXJyb3J9KX0sTT1mdW5jdGlvbihlKXtpZigxPT1lLl9oKXJldHVybiExO2Zvcih2YXIgdCxyPWUuX2F8fGUuX2Msbz0wO3IubGVuZ3RoPm87KWlmKHQ9cltvKytdLHQuZmFpbHx8IU0odC5wcm9taXNlKSlyZXR1cm4hMTtyZXR1cm4hMH0sRD1mdW5jdGlvbihlKXtoLmNhbGwoYyxmdW5jdGlvbigpe3ZhciB0O08/bS5lbWl0KFwicmVqZWN0aW9uSGFuZGxlZFwiLGUpOih0PWMub25yZWplY3Rpb25oYW5kbGVkKSYmdCh7cHJvbWlzZTplLHJlYXNvbjplLl92fSl9KX0sQT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3QuX2R8fCh0Ll9kPSEwLHQ9dC5fd3x8dCx0Ll92PWUsdC5fcz0yLHQuX2F8fCh0Ll9hPXQuX2Muc2xpY2UoKSksUCh0LCEwKSl9LEw9ZnVuY3Rpb24oZSl7dmFyIHQscj10aGlzO2lmKCFyLl9kKXtyLl9kPSEwLHI9ci5fd3x8cjt0cnl7aWYocj09PWUpdGhyb3cgaihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpOyh0PVMoZSkpP3koZnVuY3Rpb24oKXt2YXIgbz17X3c6cixfZDohMX07dHJ5e3QuY2FsbChlLGEoTCxvLDEpLGEoQSxvLDEpKX1jYXRjaChuKXtBLmNhbGwobyxuKX19KTooci5fdj1lLHIuX3M9MSxQKHIsITEpKX1jYXRjaChvKXtBLmNhbGwoe193OnIsX2Q6ITF9LG8pfX19O3d8fChnPWZ1bmN0aW9uKGUpe2QodGhpcyxnLHYsXCJfaFwiKSxfKGUpLG8uY2FsbCh0aGlzKTt0cnl7ZShhKEwsdGhpcywxKSxhKEEsdGhpcywxKSl9Y2F0Y2godCl7QS5jYWxsKHRoaXMsdCl9fSxvPWZ1bmN0aW9uKGUpe3RoaXMuX2M9W10sdGhpcy5fYT12b2lkIDAsdGhpcy5fcz0wLHRoaXMuX2Q9ITEsdGhpcy5fdj12b2lkIDAsdGhpcy5faD0wLHRoaXMuX249ITF9LG8ucHJvdG90eXBlPWUoXCIuL19yZWRlZmluZS1hbGxcIikoZy5wcm90b3R5cGUse3RoZW46ZnVuY3Rpb24oZSx0KXt2YXIgcj1FKGIodGhpcyxnKSk7cmV0dXJuIHIub2s9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lOiEwLHIuZmFpbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0LHIuZG9tYWluPU8/bS5kb21haW46dm9pZCAwLHRoaXMuX2MucHVzaChyKSx0aGlzLl9hJiZ0aGlzLl9hLnB1c2gociksdGhpcy5fcyYmUCh0aGlzLCExKSxyLnByb21pc2V9LFwiY2F0Y2hcIjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy50aGVuKHZvaWQgMCxlKX19KSxUPWZ1bmN0aW9uKCl7dmFyIGU9bmV3IG87dGhpcy5wcm9taXNlPWUsdGhpcy5yZXNvbHZlPWEoTCxlLDEpLHRoaXMucmVqZWN0PWEoQSxlLDEpfSksbChsLkcrbC5XK2wuRiohdyx7UHJvbWlzZTpnfSksZShcIi4vX3NldC10by1zdHJpbmctdGFnXCIpKGcsdiksZShcIi4vX3NldC1zcGVjaWVzXCIpKHYpLGk9ZShcIi4vX2NvcmVcIilbdl0sbChsLlMrbC5GKiF3LHYse3JlamVjdDpmdW5jdGlvbihlKXt2YXIgdD1FKHRoaXMpLHI9dC5yZWplY3Q7cmV0dXJuIHIoZSksdC5wcm9taXNlfX0pLGwobC5TK2wuRiooc3x8IXcpLHYse3Jlc29sdmU6ZnVuY3Rpb24oZSl7aWYoZSBpbnN0YW5jZW9mIGcmJngoZS5jb25zdHJ1Y3Rvcix0aGlzKSlyZXR1cm4gZTt2YXIgdD1FKHRoaXMpLHI9dC5yZXNvbHZlO3JldHVybiByKGUpLHQucHJvbWlzZX19KSxsKGwuUytsLkYqISh3JiZlKFwiLi9faXRlci1kZXRlY3RcIikoZnVuY3Rpb24oZSl7Zy5hbGwoZSlbXCJjYXRjaFwiXShrKX0pKSx2LHthbGw6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPUUodCksbz1yLnJlc29sdmUsbj1yLnJlamVjdCxpPUMoZnVuY3Rpb24oKXt2YXIgcj1bXSxpPTAscz0xO3AoZSwhMSxmdW5jdGlvbihlKXt2YXIgYz1pKyssYT0hMTtyLnB1c2godm9pZCAwKSxzKyssdC5yZXNvbHZlKGUpLnRoZW4oZnVuY3Rpb24oZSl7YXx8KGE9ITAscltjXT1lLC0tc3x8byhyKSl9LG4pfSksLS1zfHxvKHIpfSk7cmV0dXJuIGkmJm4oaS5lcnJvciksci5wcm9taXNlfSxyYWNlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1FKHQpLG89ci5yZWplY3Qsbj1DKGZ1bmN0aW9uKCl7cChlLCExLGZ1bmN0aW9uKGUpe3QucmVzb2x2ZShlKS50aGVuKHIucmVzb2x2ZSxvKX0pfSk7cmV0dXJuIG4mJm8obi5lcnJvciksci5wcm9taXNlfX0pfSx7XCIuL19hLWZ1bmN0aW9uXCI6MjgsXCIuL19hbi1pbnN0YW5jZVwiOjMwLFwiLi9fYW4tb2JqZWN0XCI6MzEsXCIuL19jbGFzc29mXCI6MzMsXCIuL19jb3JlXCI6MzUsXCIuL19jdHhcIjozNixcIi4vX2V4cG9ydFwiOjQyLFwiLi9fZm9yLW9mXCI6NDQsXCIuL19nbG9iYWxcIjo0NSxcIi4vX2lzLW9iamVjdFwiOjU0LFwiLi9faXRlci1kZXRlY3RcIjo1OCxcIi4vX2xpYnJhcnlcIjo2MixcIi4vX21pY3JvdGFza1wiOjY0LFwiLi9fcmVkZWZpbmUtYWxsXCI6NzgsXCIuL19zZXQtcHJvdG9cIjo4MCxcIi4vX3NldC1zcGVjaWVzXCI6ODEsXCIuL19zZXQtdG8tc3RyaW5nLXRhZ1wiOjgyLFwiLi9fc3BlY2llcy1jb25zdHJ1Y3RvclwiOjg1LFwiLi9fdGFza1wiOjg3LFwiLi9fd2tzXCI6OTV9XSwxMDY6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1lKFwiLi9fc3RyaW5nLWF0XCIpKCEwKTtlKFwiLi9faXRlci1kZWZpbmVcIikoU3RyaW5nLFwiU3RyaW5nXCIsZnVuY3Rpb24oZSl7dGhpcy5fdD1TdHJpbmcoZSksdGhpcy5faT0wfSxmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcy5fdCxyPXRoaXMuX2k7cmV0dXJuIHI+PXQubGVuZ3RoP3t2YWx1ZTp2b2lkIDAsZG9uZTohMH06KGU9byh0LHIpLHRoaXMuX2krPWUubGVuZ3RoLHt2YWx1ZTplLGRvbmU6ITF9KX0pfSx7XCIuL19pdGVyLWRlZmluZVwiOjU3LFwiLi9fc3RyaW5nLWF0XCI6ODZ9XSwxMDc6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1lKFwiLi9fZ2xvYmFsXCIpLG49ZShcIi4vX2NvcmVcIiksaT1lKFwiLi9faGFzXCIpLHM9ZShcIi4vX2Rlc2NyaXB0b3JzXCIpLGM9ZShcIi4vX2V4cG9ydFwiKSxhPWUoXCIuL19yZWRlZmluZVwiKSx1PWUoXCIuL19tZXRhXCIpLktFWSxsPWUoXCIuL19mYWlsc1wiKSxmPWUoXCIuL19zaGFyZWRcIiksXz1lKFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIiksZD1lKFwiLi9fdWlkXCIpLHA9ZShcIi4vX3drc1wiKSxiPWUoXCIuL19rZXlvZlwiKSxoPWUoXCIuL19lbnVtLWtleXNcIikseT1lKFwiLi9faXMtYXJyYXlcIiksdj1lKFwiLi9fYW4tb2JqZWN0XCIpLGo9ZShcIi4vX3RvLWlvYmplY3RcIiksbT1lKFwiLi9fdG8tcHJpbWl0aXZlXCIpLGc9ZShcIi4vX3Byb3BlcnR5LWRlc2NcIiksTz1lKFwiLi9fb2JqZWN0LWNyZWF0ZVwiKSxrPWUoXCIuL19vYmplY3QtZ29wbi1leHRcIiksdz1lKFwiLi9fb2JqZWN0LWdvcGRcIikseD1lKFwiLi9fb2JqZWN0LWRwXCIpLFM9dy5mLEU9eC5mLFQ9ay5mLEM9by5TeW1ib2wsUD1vLkpTT04sUj1QJiZQLnN0cmluZ2lmeSxNPSExLEQ9XCJwcm90b3R5cGVcIixBPXAoXCJfaGlkZGVuXCIpLEw9cChcInRvUHJpbWl0aXZlXCIpLE49e30ucHJvcGVydHlJc0VudW1lcmFibGUsST1mKFwic3ltYm9sLXJlZ2lzdHJ5XCIpLEY9ZihcInN5bWJvbHNcIiksVT1PYmplY3RbRF0sSD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBDLHE9by5RT2JqZWN0LFY9cyYmbChmdW5jdGlvbigpe1xucmV0dXJuIDchPU8oRSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIEUodGhpcyxcImFcIix7dmFsdWU6N30pLmF9fSkpLmF9KT9mdW5jdGlvbihlLHQscil7dmFyIG89UyhVLHQpO28mJmRlbGV0ZSBVW3RdLEUoZSx0LHIpLG8mJmUhPT1VJiZFKFUsdCxvKX06RSxCPWZ1bmN0aW9uKGUpe3ZhciB0PUZbZV09TyhDW0RdKTtyZXR1cm4gdC5faz1lLHMmJk0mJlYoVSxlLHtjb25maWd1cmFibGU6ITAsc2V0OmZ1bmN0aW9uKHQpe2kodGhpcyxBKSYmaSh0aGlzW0FdLGUpJiYodGhpc1tBXVtlXT0hMSksVih0aGlzLGUsZygxLHQpKX19KSx0fSxXPUgmJlwic3ltYm9sXCI9PXR5cGVvZiBDLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIEN9LEo9ZnVuY3Rpb24oZSx0LHIpe3JldHVybiB2KGUpLHQ9bSh0LCEwKSx2KHIpLGkoRix0KT8oci5lbnVtZXJhYmxlPyhpKGUsQSkmJmVbQV1bdF0mJihlW0FdW3RdPSExKSxyPU8ocix7ZW51bWVyYWJsZTpnKDAsITEpfSkpOihpKGUsQSl8fEUoZSxBLGcoMSx7fSkpLGVbQV1bdF09ITApLFYoZSx0LHIpKTpFKGUsdCxyKX0sWT1mdW5jdGlvbihlLHQpe3YoZSk7Zm9yKHZhciByLG89aCh0PWoodCkpLG49MCxpPW8ubGVuZ3RoO2k+bjspSihlLHI9b1tuKytdLHRbcl0pO3JldHVybiBlfSx6PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/TyhlKTpZKE8oZSksdCl9LEc9ZnVuY3Rpb24oZSl7dmFyIHQ9Ti5jYWxsKHRoaXMsZT1tKGUsITApKTtyZXR1cm4gdHx8IWkodGhpcyxlKXx8IWkoRixlKXx8aSh0aGlzLEEpJiZ0aGlzW0FdW2VdP3Q6ITB9LEs9ZnVuY3Rpb24oZSx0KXt2YXIgcj1TKGU9aihlKSx0PW0odCwhMCkpO3JldHVybiFyfHwhaShGLHQpfHxpKGUsQSkmJmVbQV1bdF18fChyLmVudW1lcmFibGU9ITApLHJ9LFo9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LHI9VChqKGUpKSxvPVtdLG49MDtyLmxlbmd0aD5uOylpKEYsdD1yW24rK10pfHx0PT1BfHx0PT11fHxvLnB1c2godCk7cmV0dXJuIG99LFg9ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LHI9VChqKGUpKSxvPVtdLG49MDtyLmxlbmd0aD5uOylpKEYsdD1yW24rK10pJiZvLnB1c2goRlt0XSk7cmV0dXJuIG99LCQ9ZnVuY3Rpb24oZSl7aWYodm9pZCAwIT09ZSYmIVcoZSkpe2Zvcih2YXIgdCxyLG89W2VdLG49MTthcmd1bWVudHMubGVuZ3RoPm47KW8ucHVzaChhcmd1bWVudHNbbisrXSk7cmV0dXJuIHQ9b1sxXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiYocj10KSwhciYmeSh0KXx8KHQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gciYmKHQ9ci5jYWxsKHRoaXMsZSx0KSksVyh0KT92b2lkIDA6dH0pLG9bMV09dCxSLmFwcGx5KFAsbyl9fSxRPWwoZnVuY3Rpb24oKXt2YXIgZT1DKCk7cmV0dXJuXCJbbnVsbF1cIiE9UihbZV0pfHxcInt9XCIhPVIoe2E6ZX0pfHxcInt9XCIhPVIoT2JqZWN0KGUpKX0pO0h8fChDPWZ1bmN0aW9uKCl7aWYodGhpcyBpbnN0YW5jZW9mIEMpdGhyb3cgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIVwiKTtyZXR1cm4gQihkKGFyZ3VtZW50cy5sZW5ndGg+MD9hcmd1bWVudHNbMF06dm9pZCAwKSl9LGEoQ1tEXSxcInRvU3RyaW5nXCIsZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fa30pLHcuZj1LLHguZj1KLGUoXCIuL19vYmplY3QtZ29wblwiKS5mPWsuZj1aLGUoXCIuL19vYmplY3QtcGllXCIpLmY9RyxlKFwiLi9fb2JqZWN0LWdvcHNcIikuZj1YLHMmJiFlKFwiLi9fbGlicmFyeVwiKSYmYShVLFwicHJvcGVydHlJc0VudW1lcmFibGVcIixHLCEwKSksYyhjLkcrYy5XK2MuRiohSCx7U3ltYm9sOkN9KTtmb3IodmFyIGVlPVwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXNcIi5zcGxpdChcIixcIiksdGU9MDtlZS5sZW5ndGg+dGU7KXt2YXIgcmU9ZWVbdGUrK10sb2U9bi5TeW1ib2wsbmU9cChyZSk7cmUgaW4gb2V8fEUob2UscmUse3ZhbHVlOkg/bmU6QihuZSl9KX1xJiZxW0RdJiZxW0RdLmZpbmRDaGlsZHx8KE09ITApLGMoYy5TK2MuRiohSCxcIlN5bWJvbFwiLHtcImZvclwiOmZ1bmN0aW9uKGUpe3JldHVybiBpKEksZSs9XCJcIik/SVtlXTpJW2VdPUMoZSl9LGtleUZvcjpmdW5jdGlvbihlKXtpZihXKGUpKXJldHVybiBiKEksZSk7dGhyb3cgVHlwZUVycm9yKGUrXCIgaXMgbm90IGEgc3ltYm9sIVwiKX0sdXNlU2V0dGVyOmZ1bmN0aW9uKCl7TT0hMH0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7TT0hMX19KSxjKGMuUytjLkYqIUgsXCJPYmplY3RcIix7Y3JlYXRlOnosZGVmaW5lUHJvcGVydHk6SixkZWZpbmVQcm9wZXJ0aWVzOlksZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOkssZ2V0T3duUHJvcGVydHlOYW1lczpaLGdldE93blByb3BlcnR5U3ltYm9sczpYfSksUCYmYyhjLlMrYy5GKighSHx8USksXCJKU09OXCIse3N0cmluZ2lmeTokfSksQ1tEXVtMXXx8ZShcIi4vX2hpZGVcIikoQ1tEXSxMLENbRF0udmFsdWVPZiksXyhDLFwiU3ltYm9sXCIpLF8oTWF0aCxcIk1hdGhcIiwhMCksXyhvLkpTT04sXCJKU09OXCIsITApfSx7XCIuL19hbi1vYmplY3RcIjozMSxcIi4vX2NvcmVcIjozNSxcIi4vX2Rlc2NyaXB0b3JzXCI6MzgsXCIuL19lbnVtLWtleXNcIjo0MSxcIi4vX2V4cG9ydFwiOjQyLFwiLi9fZmFpbHNcIjo0MyxcIi4vX2dsb2JhbFwiOjQ1LFwiLi9faGFzXCI6NDYsXCIuL19oaWRlXCI6NDcsXCIuL19pcy1hcnJheVwiOjUzLFwiLi9fa2V5b2ZcIjo2MSxcIi4vX2xpYnJhcnlcIjo2MixcIi4vX21ldGFcIjo2MyxcIi4vX29iamVjdC1jcmVhdGVcIjo2NSxcIi4vX29iamVjdC1kcFwiOjY2LFwiLi9fb2JqZWN0LWdvcGRcIjo2OCxcIi4vX29iamVjdC1nb3BuXCI6NzAsXCIuL19vYmplY3QtZ29wbi1leHRcIjo2OSxcIi4vX29iamVjdC1nb3BzXCI6NzEsXCIuL19vYmplY3QtcGllXCI6NzUsXCIuL19wcm9wZXJ0eS1kZXNjXCI6NzcsXCIuL19yZWRlZmluZVwiOjc5LFwiLi9fc2V0LXRvLXN0cmluZy10YWdcIjo4MixcIi4vX3NoYXJlZFwiOjg0LFwiLi9fdG8taW9iamVjdFwiOjkwLFwiLi9fdG8tcHJpbWl0aXZlXCI6OTMsXCIuL191aWRcIjo5NCxcIi4vX3drc1wiOjk1fV0sMTA4OltmdW5jdGlvbihlLHQscil7ZShcIi4vZXM2LmFycmF5Lml0ZXJhdG9yXCIpO2Zvcih2YXIgbz1lKFwiLi9fZ2xvYmFsXCIpLG49ZShcIi4vX2hpZGVcIiksaT1lKFwiLi9faXRlcmF0b3JzXCIpLHM9ZShcIi4vX3drc1wiKShcInRvU3RyaW5nVGFnXCIpLGM9W1wiTm9kZUxpc3RcIixcIkRPTVRva2VuTGlzdFwiLFwiTWVkaWFMaXN0XCIsXCJTdHlsZVNoZWV0TGlzdFwiLFwiQ1NTUnVsZUxpc3RcIl0sYT0wOzU+YTthKyspe3ZhciB1PWNbYV0sbD1vW3VdLGY9bCYmbC5wcm90b3R5cGU7ZiYmIWZbc10mJm4oZixzLHUpLGlbdV09aS5BcnJheX19LHtcIi4vX2dsb2JhbFwiOjQ1LFwiLi9faGlkZVwiOjQ3LFwiLi9faXRlcmF0b3JzXCI6NjAsXCIuL193a3NcIjo5NSxcIi4vZXM2LmFycmF5Lml0ZXJhdG9yXCI6OTd9XSwxMDk6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1lKFwiLi9zeW5jaGVyL1N5bmNoZXJcIiksaT1vKG4pLHM9ZShcIi4vc3luY2hlci9EYXRhT2JqZWN0UmVwb3J0ZXJcIiksYz1vKHMpLGE9ZShcIi4vc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXJcIiksdT1vKGEpO3IuU3luY2hlcj1pW1wiZGVmYXVsdFwiXSxyLkRhdGFPYmplY3RSZXBvcnRlcj1jW1wiZGVmYXVsdFwiXSxyLkRhdGFPYmplY3RPYnNlcnZlcj11W1wiZGVmYXVsdFwiXX0se1wiLi9zeW5jaGVyL0RhdGFPYmplY3RPYnNlcnZlclwiOjExMixcIi4vc3luY2hlci9EYXRhT2JqZWN0UmVwb3J0ZXJcIjoxMTMsXCIuL3N5bmNoZXIvU3luY2hlclwiOjExNixcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE2fV0sMTEwOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIilbXCJkZWZhdWx0XCJdLG49ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCIpW1wiZGVmYXVsdFwiXSxpPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIilbXCJkZWZhdWx0XCJdLHM9ZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIpW1wiZGVmYXVsdFwiXSxjPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIilbXCJkZWZhdWx0XCJdO09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBhPWUoXCIuL1N5bmNPYmplY3RcIiksdT1jKGEpLGw9ZShcIi4vRGF0YU9iamVjdENoaWxkXCIpLGY9YyhsKSxfPWUoXCIuLi91dGlscy91dGlscy5qc1wiKSxkPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LHIsbyxpLHMsYyl7bih0aGlzLGUpO3ZhciBhPXRoaXM7YS5fc3luY2hlcj10LGEuX3VybD1yLGEuX3NjaGVtYT1vLGEuX3N0YXR1cz1pLGEuX3N5bmNPYmo9bmV3IHVbXCJkZWZhdWx0XCJdKHMpLGEuX2NoaWxkcmVucz1jLGEuX3ZlcnNpb249MCxhLl9jaGlsZElkPTAsYS5fY2hpbGRyZW5PYmplY3RzPXt9LGEuX2NoaWxkcmVuTGlzdGVuZXJzPVtdLGEuX293bmVyPXQuX293bmVyLGEuX2J1cz10Ll9idXN9cmV0dXJuIG8oZSxbe2tleTpcIl9hbGxvY2F0ZUxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMscj10Ll91cmwrXCIvY2hpbGRyZW4vXCI7dC5fY2hpbGRyZW5zJiZ0Ll9jaGlsZHJlbnMuZm9yRWFjaChmdW5jdGlvbihvKXt2YXIgbj1yK28saT10Ll9idXMuYWRkTGlzdGVuZXIobixmdW5jdGlvbihyKXtpZihyLmZyb20hPT1lLl9vd25lcilzd2l0Y2goY29uc29sZS5sb2coXCJEYXRhT2JqZWN0LUNoaWxkcmVuLVJDVjogXCIsciksci50eXBlKXtjYXNlXCJjcmVhdGVcIjp0Ll9vbkNoaWxkcmVuQ3JlYXRlKHIpO2JyZWFrO2Nhc2VcImRlbGV0ZVwiOmNvbnNvbGUubG9nKHIpO2JyZWFrO2RlZmF1bHQ6dC5fY2hhbmdlQ2hpbGRyZW4ocil9fSk7dC5fY2hpbGRyZW5MaXN0ZW5lcnMucHVzaChpKX0pfX0se2tleTpcIl9yZWxlYXNlTGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX2NoaWxkcmVuTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5yZW1vdmUoKX0pLGkoZS5fY2hpbGRyZW5PYmplY3RzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2UuX2NoaWxkcmVuT2JqZWN0c1t0XS5fcmVsZWFzZUxpc3RlbmVycygpfSl9fSx7a2V5OlwicGF1c2VcIix2YWx1ZTpmdW5jdGlvbigpe3Rocm93XCJOb3QgaW1wbGVtZW50ZWRcIn19LHtrZXk6XCJyZXN1bWVcIix2YWx1ZTpmdW5jdGlvbigpe3Rocm93XCJOb3QgaW1wbGVtZW50ZWRcIn19LHtrZXk6XCJzdG9wXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aHJvd1wiTm90IGltcGxlbWVudGVkXCJ9fSx7a2V5OlwiYWRkQ2hpbGRyZW5cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7ci5fY2hpbGRJZCsrO3ZhciBvPXIuX293bmVyK1wiI1wiK3IuX2NoaWxkSWQsbj1yLl91cmwrXCIvY2hpbGRyZW4vXCIrZSxpPXt0eXBlOlwiY3JlYXRlXCIsZnJvbTpyLl9vd25lcix0bzpuLGJvZHk6e3Jlc291cmNlOm8sdmFsdWU6dH19O3JldHVybiBuZXcgcyhmdW5jdGlvbihlKXt2YXIgcz1yLl9idXMucG9zdE1lc3NhZ2UoaSk7Y29uc29sZS5sb2coXCJjcmVhdGUtcmVwb3J0ZXItY2hpbGQoIFwiK3IuX293bmVyK1wiICk6IFwiLGkpO3ZhciBjPW5ldyBmW1wiZGVmYXVsdFwiXShyLG8sdCxyLl9vd25lcixzKTtjLm9uQ2hhbmdlKGZ1bmN0aW9uKGUpe3IuX29uQ2hhbmdlKGUse3BhdGg6bixjaGlsZElkOm99KX0pLHIuX2NoaWxkcmVuT2JqZWN0c1tvXT1jLGUoYyl9KX19LHtrZXk6XCJvbkFkZENoaWxkcmVuXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXI9ZX19LHtrZXk6XCJfb25DaGlsZHJlbkNyZWF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLmJvZHkucmVzb3VyY2U7Y29uc29sZS5sb2coXCJjcmVhdGUtb2JzZXJ2ZXItY2hpbGQoIFwiK3QuX293bmVyK1wiICk6IFwiLGUpO3ZhciBvPW5ldyBmW1wiZGVmYXVsdFwiXSh0LHIsZS5ib2R5LnZhbHVlKTt0Ll9jaGlsZHJlbk9iamVjdHNbcl09byxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5fYnVzLnBvc3RNZXNzYWdlKHtpZDplLmlkLHR5cGU6XCJyZXNwb25zZVwiLGZyb206ZS50byx0bzplLmZyb20sYm9keTp7Y29kZToyMDAsc291cmNlOnQuX293bmVyfX0pfSk7dmFyIG49e3R5cGU6ZS50eXBlLGZyb206ZS5mcm9tLHVybDplLnRvLHZhbHVlOmUuYm9keS52YWx1ZSxjaGlsZElkOnJ9O3QuX29uQWRkQ2hpbGRyZW5IYW5kbGVyJiYoY29uc29sZS5sb2coXCJBREQtQ0hJTERSRU4tRVZFTlQ6IFwiLG4pLHQuX29uQWRkQ2hpbGRyZW5IYW5kbGVyKG4pKX19LHtrZXk6XCJfb25DaGFuZ2VcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7aWYoci5fdmVyc2lvbisrLFwib25cIj09PXIuX3N0YXR1cyl7dmFyIG89e3R5cGU6XCJ1cGRhdGVcIixmcm9tOnIuX3VybCx0bzpyLl91cmwrXCIvY2hhbmdlc1wiLGJvZHk6e3ZlcnNpb246ci5fdmVyc2lvbixzb3VyY2U6ci5fb3duZXIsYXR0cmlidXRlOmUuZmllbGR9fTtlLm9UeXBlPT09YS5PYmplY3RUeXBlLk9CSkVDVD9lLmNUeXBlIT09YS5DaGFuZ2VUeXBlLlJFTU9WRSYmKG8uYm9keS52YWx1ZT1lLmRhdGEpOihvLmJvZHkuYXR0cmlidXRlVHlwZT1lLm9UeXBlLG8uYm9keS52YWx1ZT1lLmRhdGEsZS5jVHlwZSE9PWEuQ2hhbmdlVHlwZS5VUERBVEUmJihvLmJvZHkub3BlcmF0aW9uPWUuY1R5cGUpKSx0JiYoby50bz10LnBhdGgsby5ib2R5LnJlc291cmNlPXQuY2hpbGRJZCksci5fYnVzLnBvc3RNZXNzYWdlKG8pfX19LHtrZXk6XCJfY2hhbmdlT2JqZWN0XCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzO2lmKHIuX3ZlcnNpb24rMT09PXQuYm9keS52ZXJzaW9uKXtyLl92ZXJzaW9uKys7dmFyIG89dC5ib2R5LmF0dHJpYnV0ZSxuPSgwLF8uZGVlcENsb25lKSh0LmJvZHkudmFsdWUpLGk9ZS5maW5kQmVmb3JlKG8pO2lmKHQuYm9keS5hdHRyaWJ1dGVUeXBlPT09YS5PYmplY3RUeXBlLkFSUkFZKWlmKHQuYm9keS5vcGVyYXRpb249PT1hLkNoYW5nZVR5cGUuQUREKXt2YXIgcz1pLm9iaixjPWkubGFzdDtBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHMsW2MsMF0uY29uY2F0KG4pKX1lbHNlIGlmKHQuYm9keS5vcGVyYXRpb249PT1hLkNoYW5nZVR5cGUuUkVNT1ZFKXt2YXIgcz1pLm9iaixjPWkubGFzdDtzLnNwbGljZShjLG4pfWVsc2UgaS5vYmpbaS5sYXN0XT1uO2Vsc2UgdC5ib2R5LnZhbHVlP2kub2JqW2kubGFzdF09bjpkZWxldGUgaS5vYmpbaS5sYXN0XX1lbHNlIGNvbnNvbGUubG9nKFwiVU5TWU5DSFJPTklaRUQgVkVSU0lPTjogKGRhdGEgPT4gXCIrci5fdmVyc2lvbitcIiwgbXNnID0+IFwiK3QuYm9keS52ZXJzaW9uK1wiKVwiKX19LHtrZXk6XCJfY2hhbmdlQ2hpbGRyZW5cIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO2NvbnNvbGUubG9nKFwiQ2hhbmdlIGNoaWxkcmVuOiBcIix0Ll9vd25lcixlKTt2YXIgcj1lLmJvZHkucmVzb3VyY2Usbz10Ll9jaGlsZHJlbk9iamVjdHNbcl07bz90Ll9jaGFuZ2VPYmplY3Qoby5fc3luY09iaixlKTpjb25zb2xlLmxvZyhcIk5vIGNoaWxkcmVuIGZvdW5kIGZvcjogXCIscil9fSx7a2V5OlwidXJsXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3VybH19LHtrZXk6XCJzY2hlbWFcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fc2NoZW1hfX0se2tleTpcInN0YXR1c1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9zdGF0dXN9fSx7a2V5OlwiZGF0YVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9zeW5jT2JqLmRhdGF9fSx7a2V5OlwiY2hpbGRyZW5zXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2NoaWxkcmVuT2JqZWN0c319XSksZX0oKTtyW1wiZGVmYXVsdFwiXT1kLHQuZXhwb3J0cz1yW1wiZGVmYXVsdFwiXX0se1wiLi4vdXRpbHMvdXRpbHMuanNcIjoxMTcsXCIuL0RhdGFPYmplY3RDaGlsZFwiOjExMSxcIi4vU3luY09iamVjdFwiOjExNSxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjUsXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiOjcsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiOjEwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzc1wiOjEyLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCI6MTZ9XSwxMTE6W2Z1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt2YXIgbz1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzc1wiKVtcImRlZmF1bHRcIl0sbj1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2tcIilbXCJkZWZhdWx0XCJdLGk9ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9ZShcIi4vU3luY09iamVjdFwiKSxjPWkocyksYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyLG8saSxzKXtuKHRoaXMsZSk7dmFyIGE9dGhpczthLl9wYXJlbnQ9dCxhLl9jaGlsZElkPXIsYS5fb3duZXI9aSxhLl9tc2dJZD1zLGEuX3N5bmNPYmo9bmV3IGNbXCJkZWZhdWx0XCJdKG8pLGEuX2J1cz10Ll9idXMsYS5fYWxsb2NhdGVMaXN0ZW5lcnMoKX1yZXR1cm4gbyhlLFt7a2V5OlwiX2FsbG9jYXRlTGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX293bmVyJiYoZS5fbGlzdGVuZXI9ZS5fYnVzLmFkZExpc3RlbmVyKGUuX293bmVyLGZ1bmN0aW9uKHQpe1wicmVzcG9uc2VcIj09PXQudHlwZSYmdC5pZD09PWUuX21zZ0lkJiYoY29uc29sZS5sb2coXCJEYXRhT2JqZWN0Q2hpbGQub25SZXNwb25zZTpcIix0KSxlLl9vblJlc3BvbnNlKHQpKX0pKX19LHtrZXk6XCJfcmVsZWFzZUxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9saXN0ZW5lciYmZS5fbGlzdGVuZXIucmVtb3ZlKCl9fSx7a2V5OlwiZGVsZXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2RlbGV0ZSBlLl9wYXJlbnQuX2NoaWxkcmVuW2UuX2NoaWxkSWRdLGUuX3JlbGVhc2VMaXN0ZW5lcnMoKX19LHtrZXk6XCJvbkNoYW5nZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX3N5bmNPYmoub2JzZXJ2ZShmdW5jdGlvbih0KXtlKHQpfSl9fSx7a2V5Olwib25SZXNwb25zZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyPWV9fSx7a2V5OlwiX29uUmVzcG9uc2VcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9e3R5cGU6ZS50eXBlLHVybDplLmJvZHkuc291cmNlLGNvZGU6ZS5ib2R5LmNvZGV9O3QuX29uUmVzcG9uc2VIYW5kbGVyJiZ0Ll9vblJlc3BvbnNlSGFuZGxlcihyKX19LHtrZXk6XCJjaGlsZElkXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2NoaWxkSWR9fSx7a2V5OlwiZGF0YVwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9zeW5jT2JqLmRhdGF9fV0pLGV9KCk7cltcImRlZmF1bHRcIl09YSx0LmV4cG9ydHM9cltcImRlZmF1bHRcIl19LHtcIi4vU3luY09iamVjdFwiOjExNSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCI6MTAsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCI6MTIsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNn1dLDExMjpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3ZhciBvPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0XCIpW1wiZGVmYXVsdFwiXSxuPWUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIilbXCJkZWZhdWx0XCJdLGk9ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIilbXCJkZWZhdWx0XCJdLHM9ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCIpW1wiZGVmYXVsdFwiXSxjPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIilbXCJkZWZhdWx0XCJdLGE9ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiKVtcImRlZmF1bHRcIl07T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHU9ZShcIi4vRGF0YU9iamVjdFwiKSxsPWEodSksZj1lKFwiLi9EYXRhT2JqZWN0Q2hpbGRcIiksXz1hKGYpLGQ9e0FOWTpcImFueVwiLFNUQVJUOlwic3RhcnRcIixFWEFDVDpcImV4YWN0XCJ9LHA9ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChlLHIsbixpLGEsdSxsKXtzKHRoaXMsdCksbyhPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFwiY29uc3RydWN0b3JcIix0aGlzKS5jYWxsKHRoaXMsZSxyLG4saSxhLmRhdGEsdSk7dmFyIGY9dGhpcztmLl92ZXJzaW9uPWwsZi5fZmlsdGVycz17fSxmLl9zeW5jT2JqLm9ic2VydmUoZnVuY3Rpb24oZSl7Zi5fb25GaWx0ZXIoZSl9KSxjKGEuY2hpbGRyZW5zKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWEuY2hpbGRyZW5zW2VdO2YuX2NoaWxkcmVuT2JqZWN0c1tlXT1uZXcgX1tcImRlZmF1bHRcIl0oZixlLHQpfSksZi5fYWxsb2NhdGVMaXN0ZW5lcnMoKX1yZXR1cm4gbih0LGUpLGkodCxbe2tleTpcIl9hbGxvY2F0ZUxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7byhPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFwiX2FsbG9jYXRlTGlzdGVuZXJzXCIsdGhpcykuY2FsbCh0aGlzKTt2YXIgZT10aGlzO2UuX2NoYW5nZUxpc3RlbmVyPWUuX2J1cy5hZGRMaXN0ZW5lcihlLl91cmwrXCIvY2hhbmdlc1wiLGZ1bmN0aW9uKHQpe1widXBkYXRlXCI9PT10LnR5cGUmJihjb25zb2xlLmxvZyhcIkRhdGFPYmplY3RPYnNlcnZlci1cIitlLl91cmwrXCItUkNWOiBcIix0KSxlLl9jaGFuZ2VPYmplY3QoZS5fc3luY09iaix0KSl9KX19LHtrZXk6XCJfcmVsZWFzZUxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7byhPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFwiX3JlbGVhc2VMaXN0ZW5lcnNcIix0aGlzKS5jYWxsKHRoaXMpO3ZhciBlPXRoaXM7ZS5fY2hhbmdlTGlzdGVuZXIucmVtb3ZlKCl9fSx7a2V5OlwiZGVsZXRlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX3JlbGVhc2VMaXN0ZW5lcnMoKSxkZWxldGUgZS5fc3luY2hlci5fb2JzZXJ2ZXJzW2UuX3VybF19fSx7a2V5OlwidW5zdWJzY3JpYmVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD17dHlwZTpcInVuc3Vic2NyaWJlXCIsZnJvbTplLl9vd25lcix0bzplLl9zeW5jaGVyLl9zdWJVUkwsYm9keTp7cmVzb3VyY2U6ZS5fdXJsfX07ZS5fYnVzLnBvc3RNZXNzYWdlKHQsZnVuY3Rpb24odCl7Y29uc29sZS5sb2coXCJEYXRhT2JqZWN0T2JzZXJ2ZXItVU5TVUJTQ1JJQkU6IFwiLHQpLDIwMD09PXQuYm9keS5jb2RlJiYoZS5fcmVsZWFzZUxpc3RlbmVycygpLGRlbGV0ZSBlLl9zeW5jaGVyLl9vYnNlcnZlcnNbZS5fdXJsXSl9KX19LHtrZXk6XCJvbkNoYW5nZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9ZSxvPXt0eXBlOmQuRVhBQ1QsY2FsbGJhY2s6dH0sbj1lLmluZGV4T2YoXCIqXCIpO249PT1lLmxlbmd0aC0xJiYoMD09PW4/by50eXBlPWQuQU5ZOihvLnR5cGU9ZC5TVEFSVCxyPWUuc3Vic3RyKDAsZS5sZW5ndGgtMSkpKSx0aGlzLl9maWx0ZXJzW3JdPW99fSx7a2V5OlwiX29uRmlsdGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcztjKHQuX2ZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24ocil7dmFyIG89dC5fZmlsdGVyc1tyXTtvLnR5cGU9PT1kLkFOWT9vLmNhbGxiYWNrKGUpOm8udHlwZT09PWQuU1RBUlQ/MD09PWUuZmllbGQuaW5kZXhPZihyKSYmby5jYWxsYmFjayhlKTpvLnR5cGU9PT1kLkVYQUNUJiZlLmZpZWxkPT09ciYmby5jYWxsYmFjayhlKX0pfX1dKSx0fShsW1wiZGVmYXVsdFwiXSk7cltcImRlZmF1bHRcIl09cCx0LmV4cG9ydHM9cltcImRlZmF1bHRcIl19LHtcIi4vRGF0YU9iamVjdFwiOjExMCxcIi4vRGF0YU9iamVjdENoaWxkXCI6MTExLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCI6NSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCI6MTAsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCI6MTIsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0XCI6MTQsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIjoxNSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE2fV0sMTEzOltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9nZXRcIilbXCJkZWZhdWx0XCJdLG49ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKVtcImRlZmF1bHRcIl0saT1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzc1wiKVtcImRlZmF1bHRcIl0scz1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzLWNhbGwtY2hlY2tcIilbXCJkZWZhdWx0XCJdLGM9ZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiKVtcImRlZmF1bHRcIl0sYT1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgdT1lKFwiLi9EYXRhT2JqZWN0XCIpLGw9YSh1KSxmPWUoXCIuLi91dGlscy91dGlscy5qc1wiKSxfPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoZSxyLG4saSxjLGEpe3ModGhpcyx0KSxvKE9iamVjdC5nZXRQcm90b3R5cGVPZih0LnByb3RvdHlwZSksXCJjb25zdHJ1Y3RvclwiLHRoaXMpLmNhbGwodGhpcyxlLHIsbixpLGMsYSk7dmFyIHU9dGhpczt1Ll9zdWJzY3JpcHRpb25zPXt9LHUuX3N5bmNPYmoub2JzZXJ2ZShmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhcIkRhdGFPYmplY3RSZXBvcnRlci1cIityK1wiLVNFTkQ6IFwiLGUpLHUuX29uQ2hhbmdlKGUpfSksdS5fYWxsb2NhdGVMaXN0ZW5lcnMoKX1yZXR1cm4gbih0LGUpLGkodCxbe2tleTpcIl9hbGxvY2F0ZUxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7byhPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFwiX2FsbG9jYXRlTGlzdGVuZXJzXCIsdGhpcykuY2FsbCh0aGlzKTt2YXIgZT10aGlzO2UuX3Jlc3BvbnNlTGlzdGVuZXI9ZS5fYnVzLmFkZExpc3RlbmVyKGUuX3VybCxmdW5jdGlvbih0KXtcInJlc3BvbnNlXCI9PT10LnR5cGUmJmUuX29uUmVzcG9uc2UodCl9KX19LHtrZXk6XCJfcmVsZWFzZUxpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7byhPYmplY3QuZ2V0UHJvdG90eXBlT2YodC5wcm90b3R5cGUpLFwiX3JlbGVhc2VMaXN0ZW5lcnNcIix0aGlzKS5jYWxsKHRoaXMpO3ZhciBlPXRoaXM7ZS5fcmVzcG9uc2VMaXN0ZW5lci5yZW1vdmUoKX19LHtrZXk6XCJkZWxldGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD17dHlwZTpcImRlbGV0ZVwiLGZyb206ZS5fb3duZXIsdG86ZS5fc3luY2hlci5fc3ViVVJMLGJvZHk6e3Jlc291cmNlOmUuX3VybH19O2UuX2J1cy5wb3N0TWVzc2FnZSh0LGZ1bmN0aW9uKHQpe2NvbnNvbGUubG9nKFwiRGF0YU9iamVjdFJlcG9ydGVyLURFTEVURTogXCIsdCksMjAwPT09dC5ib2R5LmNvZGUmJihlLl9yZWxlYXNlTGlzdGVuZXJzKCksZGVsZXRlIGUuX3N5bmNoZXIuX3JlcG9ydGVyc1tlLl91cmxdKX0pfX0se2tleTpcIm9uU3Vic2NyaXB0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyPWV9fSx7a2V5Olwib25SZXNwb25zZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyPWV9fSx7a2V5OlwiX29uRm9yd2FyZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7c3dpdGNoKGNvbnNvbGUubG9nKFwiRGF0YU9iamVjdFJlcG9ydGVyLVJDVjogXCIsZSksZS5ib2R5LnR5cGUpe2Nhc2VcInN1YnNjcmliZVwiOnQuX29uU3Vic2NyaWJlKGUpO2JyZWFrO2Nhc2VcInVuc3Vic2NyaWJlXCI6dC5fb25VblN1YnNjcmliZShlKX19fSx7a2V5OlwiX29uU3Vic2NyaWJlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPWUuYm9keS5mcm9tLG89e3R5cGU6ZS5ib2R5LnR5cGUsdXJsOnIsYWNjZXB0OmZ1bmN0aW9uKCl7dmFyIG89e3VybDpyLHN0YXR1czpcIm9uXCJ9O3QuX3N1YnNjcmlwdGlvbnNbcl09bzt2YXIgbj17fTtyZXR1cm4gYyh0Ll9jaGlsZHJlbk9iamVjdHMpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHI9dC5fY2hpbGRyZW5PYmplY3RzW2VdLmRhdGE7bltlXT0oMCxmLmRlZXBDbG9uZSkocil9KSx0Ll9idXMucG9zdE1lc3NhZ2Uoe2lkOmUuaWQsdHlwZTpcInJlc3BvbnNlXCIsZnJvbTplLnRvLHRvOmUuZnJvbSxib2R5Ontjb2RlOjIwMCxzY2hlbWE6dC5fc2NoZW1hLHZlcnNpb246dC5fdmVyc2lvbix2YWx1ZTp7ZGF0YTooMCxmLmRlZXBDbG9uZSkodC5kYXRhKSxjaGlsZHJlbnM6bn19fSksb30scmVqZWN0OmZ1bmN0aW9uKHIpe3QuX2J1cy5wb3N0TWVzc2FnZSh7aWQ6ZS5pZCx0eXBlOlwicmVzcG9uc2VcIixmcm9tOmUudG8sdG86ZS5mcm9tLGJvZHk6e2NvZGU6NDAzLGRlc2M6cn19KX19O3QuX29uU3Vic2NyaXB0aW9uSGFuZGxlciYmKGNvbnNvbGUubG9nKFwiU1VCU0NSSVBUSU9OLUVWRU5UOiBcIixvKSx0Ll9vblN1YnNjcmlwdGlvbkhhbmRsZXIobykpfX0se2tleTpcIl9vblVuU3Vic2NyaWJlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPWUuYm9keS5mcm9tLG89dC5fc3Vic2NyaXB0aW9uc1tyXTtkZWxldGUgdC5fc3Vic2NyaXB0aW9uc1tyXTt2YXIgbj17dHlwZTplLmJvZHkudHlwZSx1cmw6cixvYmplY3Q6b307dC5fb25TdWJzY3JpcHRpb25IYW5kbGVyJiYoY29uc29sZS5sb2coXCJVTi1TVUJTQ1JJUFRJT04tRVZFTlQ6IFwiLG4pLHQuX29uU3Vic2NyaXB0aW9uSGFuZGxlcihuKSl9fSx7a2V5OlwiX29uUmVzcG9uc2VcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9e3R5cGU6ZS50eXBlLHVybDplLmZyb20sY29kZTplLmJvZHkuY29kZX07dC5fb25SZXNwb25zZUhhbmRsZXImJihjb25zb2xlLmxvZyhcIlJFU1BPTlNFLUVWRU5UOiBcIixyKSx0Ll9vblJlc3BvbnNlSGFuZGxlcihyKSl9fSx7a2V5Olwic3Vic2NyaXB0aW9uc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zfX1dKSx0fShsW1wiZGVmYXVsdFwiXSk7cltcImRlZmF1bHRcIl09Xyx0LmV4cG9ydHM9cltcImRlZmF1bHRcIl19LHtcIi4uL3V0aWxzL3V0aWxzLmpzXCI6MTE3LFwiLi9EYXRhT2JqZWN0XCI6MTEwLFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCI6NSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCI6MTAsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCI6MTIsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0XCI6MTQsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIjoxNSxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbnRlcm9wLXJlcXVpcmUtZGVmYXVsdFwiOjE2fV0sMTE0OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIilbXCJkZWZhdWx0XCJdLG49ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCIpW1wiZGVmYXVsdFwiXTtPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyLG8saSl7bih0aGlzLGUpO3ZhciBzPXRoaXM7cy5fb3duZXI9dCxzLl91cmw9cixzLl9idXM9byxzLl9jaGlsZHJlbj1pLHMuX2NoYW5nZXM9W10scy5fYWxsb2NhdGVMaXN0ZW5lcnMoKX1yZXR1cm4gbyhlLFt7a2V5OlwiX2FsbG9jYXRlTGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UuX2xpc3RlbmVyPWUuX2J1cy5hZGRMaXN0ZW5lcihlLl91cmwsZnVuY3Rpb24odCl7Y29uc29sZS5sb2coXCJEYXRhUHJvdmlzaW9uYWwtXCIrZS5fdXJsK1wiLVJDVjogXCIsdCksZS5fY2hhbmdlcy5wdXNoKHQpfSl9fSx7a2V5OlwiX3JlbGVhc2VMaXN0ZW5lcnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fbGlzdGVuZXIucmVtb3ZlKCl9fSx7a2V5OlwiYXBwbHlcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzO3QuX2NoYW5nZXMuZm9yRWFjaChmdW5jdGlvbih0KXtlLl9jaGFuZ2VPYmplY3QoZS5fc3luY09iaix0KX0pfX0se2tleTpcImNoaWxkcmVuXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2NoaWxkcmVufX1dKSxlfSgpO3JbXCJkZWZhdWx0XCJdPWksdC5leHBvcnRzPXJbXCJkZWZhdWx0XCJdfSx7XCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiOjEwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzc1wiOjEyfV0sMTE1OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIilbXCJkZWZhdWx0XCJdLG49ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCIpW1wiZGVmYXVsdFwiXSxpPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2tleXNcIilbXCJkZWZhdWx0XCJdO09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPWUoXCIuLi91dGlscy91dGlscy5qc1wiKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtuKHRoaXMsZSk7dmFyIHI9dGhpcztyLl9vYnNlcnZlcnM9W10sci5fZmlsdGVycz17fSx0P3IuX2RhdGE9KDAscy5kZWVwQ2xvbmUpKHQpOnIuX2RhdGE9e30sci5faW50ZXJuYWxPYnNlcnZlKG5ldyBhLHIuX2RhdGEpfXJldHVybiBvKGUsW3trZXk6XCJvYnNlcnZlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fb2JzZXJ2ZXJzLnB1c2goZSl9fSx7a2V5OlwiZmluZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCIuXCIpO3JldHVybiB0aGlzLl9maW5kV2l0aFNwbGl0KHQpfX0se2tleTpcImZpbmRCZWZvcmVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD17fSxyPWUuc3BsaXQoXCIuXCIpO3JldHVybiB0Lmxhc3Q9ci5wb3AoKSx0Lm9iaj10aGlzLl9maW5kV2l0aFNwbGl0KHIpLHR9fSx7a2V5OlwiX2ZpbmRXaXRoU3BsaXRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLl9kYXRhO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSl7dD10W2VdfSksdH19LHtrZXk6XCJfZmlyZUV2ZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fb2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24odCl7dChlKX0pfX0se2tleTpcIl9pc09ic2VydmFibGVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5jb25zdHJ1Y3Rvcj09PU9iamVjdHx8ZS5jb25zdHJ1Y3Rvcj09PUFycmF5fX0se2tleTpcIl9pbnRlcm5hbE9ic2VydmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7aWYoci5faXNPYnNlcnZhYmxlKHQpKXt2YXIgbz1mdW5jdGlvbih0KXtyLl9vbkNoYW5nZXMoZSx0KX07aWYodC5jb25zdHJ1Y3Rvcj09PU9iamVjdCl7T2JqZWN0Lm9ic2VydmUodCxvKTtmb3IodmFyIG4gaW4gdClyLl9pc09ic2VydmFibGUodFtuXSkmJnIuX2ludGVybmFsT2JzZXJ2ZShlW1wibmV3XCJdKG4pLHRbbl0pfWVsc2UgaWYodC5jb25zdHJ1Y3Rvcj09PUFycmF5KXtBcnJheS5vYnNlcnZlKHQsbyk7Zm9yKHZhciBuIGluIHQpaWYoci5faXNPYnNlcnZhYmxlKHRbbl0pKXt2YXIgaT1lW1wibmV3XCJdKG5ldyB1KHRbbl0sbikpO3IuX2ludGVybmFsT2JzZXJ2ZShpLHRbbl0pfX19fX0se2tleTpcIl9vbkNoYW5nZXNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7Zm9yKHZhciBvIGluIHQpe3ZhciBuPXRbb10ub2JqZWN0LGk9dm9pZCAwO2lmKG4uY29uc3RydWN0b3I9PT1PYmplY3QmJihpPWYuT0JKRUNUKSxuLmNvbnN0cnVjdG9yPT09QXJyYXkmJihpPWYuQVJSQVkpLFwic3BsaWNlXCI9PT10W29dLnR5cGUpIWZ1bmN0aW9uKCl7dmFyIGM9dFtvXS5pbmRleCxhPWVbXCJuZXdcIl0oXCJcIitjKSxmPWEudG9TdHJpbmcoKSxfPXRbb10ucmVtb3ZlZC5sZW5ndGg7aWYoMCE9PV8pe3ZhciBkPXRbb10ucmVtb3ZlZDtkLmZvckVhY2goZnVuY3Rpb24odCxvKXtyLl9pc09ic2VydmFibGUodCkmJmUucmVtb3ZlSW5kZXgoYytvKX0pLHIuX2ZpcmVFdmVudCh7Y1R5cGU6bC5SRU1PVkUsb1R5cGU6aSxmaWVsZDpmLGRhdGE6X30pfXZhciBwPXRbb10uYWRkZWRDb3VudDtpZigwIT09cCl7dmFyIGI9bi5zbGljZShjLGMrcCk7Yi5mb3JFYWNoKGZ1bmN0aW9uKHQsbyl7aWYoci5faXNPYnNlcnZhYmxlKHQpKXt2YXIgbj1lW1wibmV3XCJdKG5ldyB1KHQsYytvKSk7ci5faW50ZXJuYWxPYnNlcnZlKG4sdCl9fSksci5fZmlyZUV2ZW50KHtjVHlwZTpsLkFERCxvVHlwZTppLGZpZWxkOmYsZGF0YTooMCxzLmRlZXBDbG9uZSkoYil9KX1jIT09bi5sZW5ndGgtMSYmZS5yZUluZGV4RnJvbShuKX0oKTtlbHNle3ZhciBjPWVbXCJuZXdcIl0odFtvXS5uYW1lKSxhPWMudG9TdHJpbmcoKTtpZigtMSE9PWEuaW5kZXhPZihcIlN5bWJvbFwiKSljb250aW51ZTt2YXIgXz1uW3Rbb10ubmFtZV07XCJ1cGRhdGVcIj09PXRbb10udHlwZSYmdGhpcy5fZmlyZUV2ZW50KHtjVHlwZTpsLlVQREFURSxvVHlwZTppLGZpZWxkOmEsZGF0YTooMCxzLmRlZXBDbG9uZSkoXyl9KSxcImFkZFwiPT09dFtvXS50eXBlJiYodGhpcy5faW50ZXJuYWxPYnNlcnZlKGMsXyksdGhpcy5fZmlyZUV2ZW50KHtjVHlwZTpsLkFERCxvVHlwZTppLGZpZWxkOmEsZGF0YTooMCxzLmRlZXBDbG9uZSkoXyl9KSksXCJkZWxldGVcIj09PXRbb10udHlwZSYmdGhpcy5fZmlyZUV2ZW50KHtjVHlwZTpsLlJFTU9WRSxvVHlwZTppLGZpZWxkOmF9KX19fX0se2tleTpcImRhdGFcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZGF0YX19XSksZX0oKSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe24odGhpcyxlKSx0aGlzLl9wYXRoPVtdLHRoaXMuX29ic2VydmFibGVzPXt9fXJldHVybiBvKGUsW3trZXk6XCJyZW1vdmVJbmRleFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2RlbGV0ZSB0aGlzLl9vYnNlcnZhYmxlc1tlXX19LHtrZXk6XCJyZUluZGV4RnJvbVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXM7aSh0aGlzLl9vYnNlcnZhYmxlcykuZm9yRWFjaChmdW5jdGlvbihyKXt2YXIgbz10Ll9vYnNlcnZhYmxlc1tyXSxuPWUuaW5kZXhPZihvLm9iaik7by5pZHghPW4mJihvLmlkeD1uLGRlbGV0ZSB0Ll9vYnNlcnZhYmxlc1tyXSx0Ll9vYnNlcnZhYmxlc1tuXT1vKX0pfX0se2tleTpcIm5ld1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2UuY29uc3RydWN0b3I9PXUmJih0aGlzLl9vYnNlcnZhYmxlc1tlLmlkeF09ZSk7dmFyIHQ9dGhpcy5jbG9uZSgpO3JldHVybiB0Ll9wYXRoLnB1c2goZSksdH19LHtrZXk6XCJjbG9uZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9bmV3IGU7cmV0dXJuIHRoaXMuX3BhdGguZm9yRWFjaChmdW5jdGlvbihlKXt0Ll9wYXRoLnB1c2goZSl9KSx0fX0se2tleTpcInRvU3RyaW5nXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1cIlwiO3JldHVybiB0aGlzLl9wYXRoLmZvckVhY2goZnVuY3Rpb24odCxyKXswPT09cj9lPXQudG9TdHJpbmcoKTplKz1cIi5cIit0LnRvU3RyaW5nKCl9KSxlfX1dKSxlfSgpLHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscil7bih0aGlzLGUpLHRoaXMub2JqPXQsdGhpcy5pZHg9cn1yZXR1cm4gbyhlLFt7a2V5OlwidG9TdHJpbmdcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlkeC50b1N0cmluZygpfX1dKSxlfSgpLGw9e1VQREFURTpcInVwZGF0ZVwiLEFERDpcImFkZFwiLFJFTU9WRTpcInJlbW92ZVwifTtyLkNoYW5nZVR5cGU9bDt2YXIgZj17T0JKRUNUOlwib2JqZWN0XCIsQVJSQVk6XCJhcnJheVwifTtyLk9iamVjdFR5cGU9ZixyW1wiZGVmYXVsdFwiXT1jfSx7XCIuLi91dGlscy91dGlscy5qc1wiOjExNyxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiOjUsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVja1wiOjEwLFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZS1jbGFzc1wiOjEyfV0sMTE2OltmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dmFyIG89ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3NcIilbXCJkZWZhdWx0XCJdLG49ZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCIpW1wiZGVmYXVsdFwiXSxpPWUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZVwiKVtcImRlZmF1bHRcIl0scz1lKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0XCIpW1wiZGVmYXVsdFwiXTtPYmplY3QuZGVmaW5lUHJvcGVydHkocixcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgYz1lKFwiLi9EYXRhT2JqZWN0UmVwb3J0ZXJcIiksYT1zKGMpLHU9ZShcIi4vRGF0YU9iamVjdE9ic2VydmVyXCIpLGw9cyh1KSxmPWUoXCIuL0RhdGFQcm92aXNpb25hbFwiKSxfPXMoZiksZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyLG8pe24odGhpcyxlKTt2YXIgaT10aGlzO2kuX293bmVyPXQsaS5fYnVzPXIsaS5fc3ViVVJMPW8ucnVudGltZVVSTCtcIi9zbVwiLGkuX3JlcG9ydGVycz17fSxpLl9vYnNlcnZlcnM9e30saS5fcHJvdmlzaW9uYWxzPXt9LHIuYWRkTGlzdGVuZXIodCxmdW5jdGlvbihlKXtpZihlLmZyb20hPT10KXN3aXRjaChjb25zb2xlLmxvZyhcIlN5bmNoZXItUkNWOiBcIixlKSxlLnR5cGUpe2Nhc2VcImZvcndhcmRcIjppLl9vbkZvcndhcmQoZSk7YnJlYWs7Y2FzZVwiY3JlYXRlXCI6aS5fb25SZW1vdGVDcmVhdGUoZSk7YnJlYWs7Y2FzZVwiZGVsZXRlXCI6aS5fb25SZW1vdGVEZWxldGUoZSl9fSl9cmV0dXJuIG8oZSxbe2tleTpcImNyZWF0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxyKXt2YXIgbz10aGlzLG49e3R5cGU6XCJjcmVhdGVcIixmcm9tOm8uX293bmVyLHRvOm8uX3N1YlVSTCxib2R5OntzY2hlbWE6ZSx2YWx1ZTpyLGF1dGhvcmlzZTp0fX07cmV0dXJuIG5ldyBpKGZ1bmN0aW9uKHQsaSl7by5fYnVzLnBvc3RNZXNzYWdlKG4sZnVuY3Rpb24obil7aWYoY29uc29sZS5sb2coXCJjcmVhdGUtcmVzcG9uc2U6IFwiLG4pLDIwMD09PW4uYm9keS5jb2RlKXt2YXIgcz1uLmJvZHkucmVzb3VyY2UsYz1uZXcgYVtcImRlZmF1bHRcIl0obyxzLGUsXCJvblwiLHIsbi5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzKTtvLl9yZXBvcnRlcnNbc109Yyx0KGMpfWVsc2UgaShuLmJvZHkuZGVzYyl9KX0pfX0se2tleTpcInN1YnNjcmliZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcyxvPXt0eXBlOlwic3Vic2NyaWJlXCIsZnJvbTpyLl9vd25lcix0bzpyLl9zdWJVUkwsYm9keTp7c2NoZW1hOmUscmVzb3VyY2U6dH19O3JldHVybiBuZXcgaShmdW5jdGlvbihuLGkpe3IuX2J1cy5wb3N0TWVzc2FnZShvLGZ1bmN0aW9uKG8pe2NvbnNvbGUubG9nKFwic3Vic2NyaWJlLXJlc3BvbnNlOiBcIixvKTt2YXIgcz1yLl9wcm92aXNpb25hbHNbdF07aWYoZGVsZXRlIHIuX3Byb3Zpc2lvbmFsc1t0XSxzJiZzLl9yZWxlYXNlTGlzdGVuZXJzKCksby5ib2R5LmNvZGU8MjAwKXM9bmV3IF9bXCJkZWZhdWx0XCJdKHIuX293bmVyLHQsci5fYnVzLG8uYm9keS5jaGlsZHJlblJlc291cmNlcyksci5fcHJvdmlzaW9uYWxzW3RdPXM7ZWxzZSBpZigyMDA9PT1vLmJvZHkuY29kZSl7dmFyIGM9bmV3IGxbXCJkZWZhdWx0XCJdKHIsdCxlLFwib25cIixvLmJvZHkudmFsdWUscy5jaGlsZHJlbixvLmJvZHkudmVyc2lvbik7ci5fb2JzZXJ2ZXJzW3RdPWMsbihjKSxzLmFwcGx5KGMpfWVsc2UgaShvLmJvZHkuZGVzYyl9KX0pfX0se2tleTpcIm9uTm90aWZpY2F0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyPWV9fSx7a2V5OlwiX29uRm9yd2FyZFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj10Ll9yZXBvcnRlcnNbZS5ib2R5LnRvXTtyLl9vbkZvcndhcmQoZSl9fSx7a2V5OlwiX29uUmVtb3RlQ3JlYXRlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPWUuZnJvbS5zbGljZSgwLC0xMyksbz17dHlwZTplLnR5cGUsZnJvbTplLmJvZHkuc291cmNlLHVybDpyLHNjaGVtYTplLmJvZHkuc2NoZW1hLHZhbHVlOmUuYm9keS52YWx1ZSxpZGVudGl0eTplLmJvZHkuaWRUb2tlbixhY2s6ZnVuY3Rpb24ocil7dmFyIG89MjAwO3ImJihvPXIpLHQuX2J1cy5wb3N0TWVzc2FnZSh7aWQ6ZS5pZCx0eXBlOlwicmVzcG9uc2VcIixmcm9tOmUudG8sdG86ZS5mcm9tLGJvZHk6e2NvZGU6b319KX19O3QuX29uTm90aWZpY2F0aW9uSGFuZGxlciYmKGNvbnNvbGUubG9nKFwiTk9USUZJQ0FUSU9OLUVWRU5UOiBcIixvKSx0Ll9vbk5vdGlmaWNhdGlvbkhhbmRsZXIobykpfX0se2tleTpcIl9vblJlbW90ZURlbGV0ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLmJvZHkucmVzb3VyY2Usbz10Ll9vYnNlcnZlcnNbcl07aWYobyl7dmFyIG49e3R5cGU6ZS50eXBlLHVybDpyLGlkZW50aXR5OmUuYm9keS5pZFRva2VuLGFjazpmdW5jdGlvbihyKXt2YXIgbj0yMDA7ciYmKG49ciksMjAwPT09biYmb1tcImRlbGV0ZVwiXSgpLHQuX2J1cy5wb3N0TWVzc2FnZSh7aWQ6ZS5pZCx0eXBlOlwicmVzcG9uc2VcIixmcm9tOmUudG8sdG86ZS5mcm9tLGJvZHk6e2NvZGU6bixzb3VyY2U6dC5fb3duZXJ9fSl9fTt0Ll9vbk5vdGlmaWNhdGlvbkhhbmRsZXImJihjb25zb2xlLmxvZyhcIk5PVElGSUNBVElPTi1FVkVOVDogXCIsbiksdC5fb25Ob3RpZmljYXRpb25IYW5kbGVyKG4pKX1lbHNlIHQuX2J1cy5wb3N0TWVzc2FnZSh7aWQ6ZS5pZCx0eXBlOlwicmVzcG9uc2VcIixmcm9tOmUudG8sdG86ZS5mcm9tLGJvZHk6e2NvZGU6NDA0LHNvdXJjZTp0Ll9vd25lcn19KX19LHtrZXk6XCJvd25lclwiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9vd25lcn19LHtrZXk6XCJyZXBvcnRlcnNcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcmVwb3J0ZXJzfX0se2tleTpcIm9ic2VydmVyc1wiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9vYnNlcnZlcnN9fV0pLGV9KCk7cltcImRlZmF1bHRcIl09ZCx0LmV4cG9ydHM9cltcImRlZmF1bHRcIl19LHtcIi4vRGF0YU9iamVjdE9ic2VydmVyXCI6MTEyLFwiLi9EYXRhT2JqZWN0UmVwb3J0ZXJcIjoxMTMsXCIuL0RhdGFQcm92aXNpb25hbFwiOjExNCxcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCI6NyxcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrXCI6MTAsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzXCI6MTIsXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW50ZXJvcC1yZXF1aXJlLWRlZmF1bHRcIjoxNn1dLDExNzpbZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7dmFyIHQ9LyhbYS16QS1aLV0qKTpcXC9cXC8oPzpcXC4pPyhbLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn0pKFstYS16QS1aMC05QDolLl9cXCt+Iz1cXC9dKikvZ2kscj1cIiQxLCQyLCQzXCIsbz1lLnJlcGxhY2UodCxyKS5zcGxpdChcIixcIik7b1swXT09PWUmJihvWzBdPVwiaHR0cHNcIixvWzFdPWUpO3ZhciBuPXt0eXBlOm9bMF0sZG9tYWluOm9bMV0saWRlbnRpdHk6b1syXX07cmV0dXJuIG59ZnVuY3Rpb24gbihlKXtyZXR1cm4gZT9KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGUpKTp2b2lkIDB9T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci5kaXZpZGVVUkw9byxyLmRlZXBDbG9uZT1ufSx7fV19LHt9LFsxMDldKSgxMDkpfSk7IiwiLypcbiAqICBDb3B5cmlnaHQgKGMpIDIwMTYgVGhlIFdlYlJUQyBwcm9qZWN0IGF1dGhvcnMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGEgQlNELXN0eWxlIGxpY2Vuc2VcbiAqICB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IG9mIHRoZSBzb3VyY2VcbiAqICB0cmVlLlxuICovXG5cbi8qIE1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlc2Ugb3B0aW9ucyBhdCBqc2hpbnQuY29tL2RvY3Mvb3B0aW9ucyAqL1xuLyoganNoaW50IGJyb3dzZXI6IHRydWUsIGNhbWVsY2FzZTogdHJ1ZSwgY3VybHk6IHRydWUsIGRldmVsOiB0cnVlLFxuICAgZXFlcWVxOiB0cnVlLCBmb3JpbjogZmFsc2UsIGdsb2JhbHN0cmljdDogdHJ1ZSwgbm9kZTogdHJ1ZSxcbiAgIHF1b3RtYXJrOiBzaW5nbGUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHN0cmljdCAqL1xuLyogZ2xvYmFsIG1velJUQ0ljZUNhbmRpZGF0ZSwgbW96UlRDUGVlckNvbm5lY3Rpb24sIFByb21pc2UsXG5tb3pSVENTZXNzaW9uRGVzY3JpcHRpb24sIHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLCBNZWRpYVN0cmVhbVRyYWNrLFxuTWVkaWFTdHJlYW0sIFJUQ0ljZUdhdGhlcmVyLCBSVENJY2VUcmFuc3BvcnQsIFJUQ0R0bHNUcmFuc3BvcnQsXG5SVENSdHBTZW5kZXIsIFJUQ1J0cFJlY2VpdmVyKi9cbi8qIGV4cG9ydGVkIHRyYWNlLHJlcXVlc3RVc2VyTWVkaWEgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0VXNlck1lZGlhID0gbnVsbDtcbnZhciBhdHRhY2hNZWRpYVN0cmVhbSA9IG51bGw7XG52YXIgcmVhdHRhY2hNZWRpYVN0cmVhbSA9IG51bGw7XG52YXIgd2VicnRjRGV0ZWN0ZWRCcm93c2VyID0gbnVsbDtcbnZhciB3ZWJydGNEZXRlY3RlZFZlcnNpb24gPSBudWxsO1xudmFyIHdlYnJ0Y01pbmltdW1WZXJzaW9uID0gbnVsbDtcbnZhciB3ZWJydGNVdGlscyA9IHtcbiAgbG9nOiBmdW5jdGlvbigpIHtcbiAgICAvLyBzdXBwcmVzcyBjb25zb2xlLmxvZyBvdXRwdXQgd2hlbiBiZWluZyBpbmNsdWRlZCBhcyBhIG1vZHVsZS5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICB9LFxuICBleHRyYWN0VmVyc2lvbjogZnVuY3Rpb24odWFzdHJpbmcsIGV4cHIsIHBvcykge1xuICAgIHZhciBtYXRjaCA9IHVhc3RyaW5nLm1hdGNoKGV4cHIpO1xuICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPj0gcG9zICYmIHBhcnNlSW50KG1hdGNoW3Bvc10sIDEwKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gdHJhY2UodGV4dCkge1xuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgZm9yIGxvZ2dpbmcuXG4gIGlmICh0ZXh0W3RleHQubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XG4gICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoIC0gMSk7XG4gIH1cbiAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgIHZhciBub3cgPSAod2luZG93LnBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMCkudG9GaXhlZCgzKTtcbiAgICB3ZWJydGNVdGlscy5sb2cobm93ICsgJzogJyArIHRleHQpO1xuICB9IGVsc2Uge1xuICAgIHdlYnJ0Y1V0aWxzLmxvZyh0ZXh0KTtcbiAgfVxufVxuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHtcbiAgaWYgKHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50ICYmXG4gICAgISgnc3JjT2JqZWN0JyBpbiB3aW5kb3cuSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUpKSB7XG4gICAgLy8gU2hpbSB0aGUgc3JjT2JqZWN0IHByb3BlcnR5LCBvbmNlLCB3aGVuIEhUTUxNZWRpYUVsZW1lbnQgaXMgZm91bmQuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5IVE1MTWVkaWFFbGVtZW50LnByb3RvdHlwZSwgJ3NyY09iamVjdCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIElmIHByZWZpeGVkIHNyY09iamVjdCBwcm9wZXJ0eSBleGlzdHMsIHJldHVybiBpdC5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hpbW1lZCBwcm9wZXJ0eSwgX3NyY09iamVjdFxuICAgICAgICByZXR1cm4gJ21velNyY09iamVjdCcgaW4gdGhpcyA/IHRoaXMubW96U3JjT2JqZWN0IDogdGhpcy5fc3JjT2JqZWN0O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgIGlmICgnbW96U3JjT2JqZWN0JyBpbiB0aGlzKSB7XG4gICAgICAgICAgdGhpcy5tb3pTcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVXNlIF9zcmNPYmplY3QgYXMgYSBwcml2YXRlIHByb3BlcnR5IGZvciB0aGlzIHNoaW1cbiAgICAgICAgICB0aGlzLl9zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgICAgLy8gVE9ETzogcmV2b2tlT2JqZWN0VXJsKHRoaXMuc3JjKSB3aGVuICFzdHJlYW0gdG8gcmVsZWFzZSByZXNvdXJjZXM/XG4gICAgICAgICAgdGhpcy5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvLyBQcm94eSBleGlzdGluZyBnbG9iYWxzXG4gIGdldFVzZXJNZWRpYSA9IHdpbmRvdy5uYXZpZ2F0b3IgJiYgd2luZG93Lm5hdmlnYXRvci5nZXRVc2VyTWVkaWE7XG59XG5cbi8vIEF0dGFjaCBhIG1lZGlhIHN0cmVhbSB0byBhbiBlbGVtZW50LlxuYXR0YWNoTWVkaWFTdHJlYW0gPSBmdW5jdGlvbihlbGVtZW50LCBzdHJlYW0pIHtcbiAgZWxlbWVudC5zcmNPYmplY3QgPSBzdHJlYW07XG59O1xuXG5yZWF0dGFjaE1lZGlhU3RyZWFtID0gZnVuY3Rpb24odG8sIGZyb20pIHtcbiAgdG8uc3JjT2JqZWN0ID0gZnJvbS5zcmNPYmplY3Q7XG59O1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXdpbmRvdy5uYXZpZ2F0b3IpIHtcbiAgd2VicnRjVXRpbHMubG9nKCdUaGlzIGRvZXMgbm90IGFwcGVhciB0byBiZSBhIGJyb3dzZXInKTtcbiAgd2VicnRjRGV0ZWN0ZWRCcm93c2VyID0gJ25vdCBhIGJyb3dzZXInO1xufSBlbHNlIGlmIChuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKSB7XG4gIHdlYnJ0Y1V0aWxzLmxvZygnVGhpcyBhcHBlYXJzIHRvIGJlIEZpcmVmb3gnKTtcblxuICB3ZWJydGNEZXRlY3RlZEJyb3dzZXIgPSAnZmlyZWZveCc7XG5cbiAgLy8gdGhlIGRldGVjdGVkIGZpcmVmb3ggdmVyc2lvbi5cbiAgd2VicnRjRGV0ZWN0ZWRWZXJzaW9uID0gd2VicnRjVXRpbHMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgIC9GaXJlZm94XFwvKFswLTldKylcXC4vLCAxKTtcblxuICAvLyB0aGUgbWluaW11bSBmaXJlZm94IHZlcnNpb24gc3RpbGwgc3VwcG9ydGVkIGJ5IGFkYXB0ZXIuXG4gIHdlYnJ0Y01pbmltdW1WZXJzaW9uID0gMzE7XG5cbiAgLy8gU2hpbSBmb3IgUlRDUGVlckNvbm5lY3Rpb24gb24gb2xkZXIgdmVyc2lvbnMuXG4gIGlmICghd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24ocGNDb25maWcsIHBjQ29uc3RyYWludHMpIHtcbiAgICAgIGlmICh3ZWJydGNEZXRlY3RlZFZlcnNpb24gPCAzOCkge1xuICAgICAgICAvLyAudXJscyBpcyBub3Qgc3VwcG9ydGVkIGluIEZGIDwgMzguXG4gICAgICAgIC8vIGNyZWF0ZSBSVENJY2VTZXJ2ZXJzIHdpdGggYSBzaW5nbGUgdXJsLlxuICAgICAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlU2VydmVycykge1xuICAgICAgICAgIHZhciBuZXdJY2VTZXJ2ZXJzID0gW107XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwY0NvbmZpZy5pY2VTZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2VydmVyID0gcGNDb25maWcuaWNlU2VydmVyc1tpXTtcbiAgICAgICAgICAgIGlmIChzZXJ2ZXIuaGFzT3duUHJvcGVydHkoJ3VybHMnKSkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHNlcnZlci51cmxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1NlcnZlciA9IHtcbiAgICAgICAgICAgICAgICAgIHVybDogc2VydmVyLnVybHNbal1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChzZXJ2ZXIudXJsc1tqXS5pbmRleE9mKCd0dXJuJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIG5ld1NlcnZlci51c2VybmFtZSA9IHNlcnZlci51c2VybmFtZTtcbiAgICAgICAgICAgICAgICAgIG5ld1NlcnZlci5jcmVkZW50aWFsID0gc2VydmVyLmNyZWRlbnRpYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld0ljZVNlcnZlcnMucHVzaChuZXdTZXJ2ZXIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBuZXdJY2VTZXJ2ZXJzLnB1c2gocGNDb25maWcuaWNlU2VydmVyc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHBjQ29uZmlnLmljZVNlcnZlcnMgPSBuZXdJY2VTZXJ2ZXJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IG1velJUQ1BlZXJDb25uZWN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKTsgLy8ganNjczppZ25vcmUgcmVxdWlyZUNhcGl0YWxpemVkQ29uc3RydWN0b3JzXG4gICAgfTtcbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlID0gbW96UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlO1xuXG4gICAgLy8gd3JhcCBzdGF0aWMgbWV0aG9kcy4gQ3VycmVudGx5IGp1c3QgZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5cbiAgICBpZiAobW96UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZSkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiwgJ2dlbmVyYXRlQ2VydGlmaWNhdGUnLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBtb3pSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlLmFwcGx5KG51bGwsXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1velJUQ1BlZXJDb25uZWN0aW9uLmdlbmVyYXRlQ2VydGlmaWNhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gbW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uO1xuICAgIHdpbmRvdy5SVENJY2VDYW5kaWRhdGUgPSBtb3pSVENJY2VDYW5kaWRhdGU7XG4gIH1cblxuICAvLyBnZXRVc2VyTWVkaWEgY29uc3RyYWludHMgc2hpbS5cbiAgZ2V0VXNlck1lZGlhID0gZnVuY3Rpb24oY29uc3RyYWludHMsIG9uU3VjY2Vzcywgb25FcnJvcikge1xuICAgIHZhciBjb25zdHJhaW50c1RvRkYzNyA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgIGlmICh0eXBlb2YgYyAhPT0gJ29iamVjdCcgfHwgYy5yZXF1aXJlKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfVxuICAgICAgdmFyIHJlcXVpcmUgPSBbXTtcbiAgICAgIE9iamVjdC5rZXlzKGMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdyZXF1aXJlJyB8fCBrZXkgPT09ICdhZHZhbmNlZCcgfHwga2V5ID09PSAnbWVkaWFTb3VyY2UnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciByID0gY1trZXldID0gKHR5cGVvZiBjW2tleV0gPT09ICdvYmplY3QnKSA/XG4gICAgICAgICAgICBjW2tleV0gOiB7aWRlYWw6IGNba2V5XX07XG4gICAgICAgIGlmIChyLm1pbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICByLm1heCAhPT0gdW5kZWZpbmVkIHx8IHIuZXhhY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJlcXVpcmUucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyLmV4YWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHIuZXhhY3QgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByLm1pbiA9IHIubWF4ID0gci5leGFjdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY1trZXldID0gci5leGFjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZGVsZXRlIHIuZXhhY3Q7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHIuaWRlYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGMuYWR2YW5jZWQgPSBjLmFkdmFuY2VkIHx8IFtdO1xuICAgICAgICAgIHZhciBvYyA9IHt9O1xuICAgICAgICAgIGlmICh0eXBlb2Ygci5pZGVhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIG9jW2tleV0gPSB7bWluOiByLmlkZWFsLCBtYXg6IHIuaWRlYWx9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvY1trZXldID0gci5pZGVhbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYy5hZHZhbmNlZC5wdXNoKG9jKTtcbiAgICAgICAgICBkZWxldGUgci5pZGVhbDtcbiAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKHIpLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVsZXRlIGNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcXVpcmUubGVuZ3RoKSB7XG4gICAgICAgIGMucmVxdWlyZSA9IHJlcXVpcmU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgICB9O1xuICAgIGlmICh3ZWJydGNEZXRlY3RlZFZlcnNpb24gPCAzOCkge1xuICAgICAgd2VicnRjVXRpbHMubG9nKCdzcGVjOiAnICsgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICAgIGlmIChjb25zdHJhaW50cy5hdWRpbykge1xuICAgICAgICBjb25zdHJhaW50cy5hdWRpbyA9IGNvbnN0cmFpbnRzVG9GRjM3KGNvbnN0cmFpbnRzLmF1ZGlvKTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25zdHJhaW50cy52aWRlbykge1xuICAgICAgICBjb25zdHJhaW50cy52aWRlbyA9IGNvbnN0cmFpbnRzVG9GRjM3KGNvbnN0cmFpbnRzLnZpZGVvKTtcbiAgICAgIH1cbiAgICAgIHdlYnJ0Y1V0aWxzLmxvZygnZmYzNzogJyArIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgfVxuICAgIHJldHVybiBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9O1xuXG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBnZXRVc2VyTWVkaWE7XG5cbiAgLy8gU2hpbSBmb3IgbWVkaWFEZXZpY2VzIG9uIG9sZGVyIHZlcnNpb25zLlxuICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMpIHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzID0ge2dldFVzZXJNZWRpYTogcmVxdWVzdFVzZXJNZWRpYSxcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkgeyB9LFxuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oKSB7IH1cbiAgICB9O1xuICB9XG4gIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcyA9XG4gICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgIHZhciBpbmZvcyA9IFtcbiAgICAgICAge2tpbmQ6ICdhdWRpb2lucHV0JywgZGV2aWNlSWQ6ICdkZWZhdWx0JywgbGFiZWw6ICcnLCBncm91cElkOiAnJ30sXG4gICAgICAgIHtraW5kOiAndmlkZW9pbnB1dCcsIGRldmljZUlkOiAnZGVmYXVsdCcsIGxhYmVsOiAnJywgZ3JvdXBJZDogJyd9XG4gICAgICBdO1xuICAgICAgcmVzb2x2ZShpbmZvcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKHdlYnJ0Y0RldGVjdGVkVmVyc2lvbiA8IDQxKSB7XG4gICAgLy8gV29yayBhcm91bmQgaHR0cDovL2J1Z3ppbC5sYS8xMTY5NjY1XG4gICAgdmFyIG9yZ0VudW1lcmF0ZURldmljZXMgPVxuICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMuYmluZChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzKTtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvcmdFbnVtZXJhdGVEZXZpY2VzKCkudGhlbih1bmRlZmluZWQsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InKSB7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG59IGVsc2UgaWYgKG5hdmlnYXRvci53ZWJraXRHZXRVc2VyTWVkaWEgJiYgd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uKSB7XG4gIHdlYnJ0Y1V0aWxzLmxvZygnVGhpcyBhcHBlYXJzIHRvIGJlIENocm9tZScpO1xuXG4gIHdlYnJ0Y0RldGVjdGVkQnJvd3NlciA9ICdjaHJvbWUnO1xuXG4gIC8vIHRoZSBkZXRlY3RlZCBjaHJvbWUgdmVyc2lvbi5cbiAgd2VicnRjRGV0ZWN0ZWRWZXJzaW9uID0gd2VicnRjVXRpbHMuZXh0cmFjdFZlcnNpb24obmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgIC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8sIDIpO1xuXG4gIC8vIHRoZSBtaW5pbXVtIGNocm9tZSB2ZXJzaW9uIHN0aWxsIHN1cHBvcnRlZCBieSBhZGFwdGVyLlxuICB3ZWJydGNNaW5pbXVtVmVyc2lvbiA9IDM4O1xuXG4gIC8vIFRoZSBSVENQZWVyQ29ubmVjdGlvbiBvYmplY3QuXG4gIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbiA9IGZ1bmN0aW9uKHBjQ29uZmlnLCBwY0NvbnN0cmFpbnRzKSB7XG4gICAgLy8gVHJhbnNsYXRlIGljZVRyYW5zcG9ydFBvbGljeSB0byBpY2VUcmFuc3BvcnRzLFxuICAgIC8vIHNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3dlYnJ0Yy9pc3N1ZXMvZGV0YWlsP2lkPTQ4NjlcbiAgICBpZiAocGNDb25maWcgJiYgcGNDb25maWcuaWNlVHJhbnNwb3J0UG9saWN5KSB7XG4gICAgICBwY0NvbmZpZy5pY2VUcmFuc3BvcnRzID0gcGNDb25maWcuaWNlVHJhbnNwb3J0UG9saWN5O1xuICAgIH1cblxuICAgIHZhciBwYyA9IG5ldyB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbihwY0NvbmZpZywgcGNDb25zdHJhaW50cyk7IC8vIGpzY3M6aWdub3JlIHJlcXVpcmVDYXBpdGFsaXplZENvbnN0cnVjdG9yc1xuICAgIHZhciBvcmlnR2V0U3RhdHMgPSBwYy5nZXRTdGF0cy5iaW5kKHBjKTtcbiAgICBwYy5nZXRTdGF0cyA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHsgLy8ganNoaW50IGlnbm9yZTogbGluZVxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgIC8vIElmIHNlbGVjdG9yIGlzIGEgZnVuY3Rpb24gdGhlbiB3ZSBhcmUgaW4gdGhlIG9sZCBzdHlsZSBzdGF0cyBzbyBqdXN0XG4gICAgICAvLyBwYXNzIGJhY2sgdGhlIG9yaWdpbmFsIGdldFN0YXRzIGZvcm1hdCB0byBhdm9pZCBicmVha2luZyBvbGQgdXNlcnMuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIHNlbGVjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBvcmlnR2V0U3RhdHMoc2VsZWN0b3IsIHN1Y2Nlc3NDYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmaXhDaHJvbWVTdGF0cyA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciBzdGFuZGFyZFJlcG9ydCA9IHt9O1xuICAgICAgICB2YXIgcmVwb3J0cyA9IHJlc3BvbnNlLnJlc3VsdCgpO1xuICAgICAgICByZXBvcnRzLmZvckVhY2goZnVuY3Rpb24ocmVwb3J0KSB7XG4gICAgICAgICAgdmFyIHN0YW5kYXJkU3RhdHMgPSB7XG4gICAgICAgICAgICBpZDogcmVwb3J0LmlkLFxuICAgICAgICAgICAgdGltZXN0YW1wOiByZXBvcnQudGltZXN0YW1wLFxuICAgICAgICAgICAgdHlwZTogcmVwb3J0LnR5cGVcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlcG9ydC5uYW1lcygpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgc3RhbmRhcmRTdGF0c1tuYW1lXSA9IHJlcG9ydC5zdGF0KG5hbWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHN0YW5kYXJkUmVwb3J0W3N0YW5kYXJkU3RhdHMuaWRdID0gc3RhbmRhcmRTdGF0cztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0YW5kYXJkUmVwb3J0O1xuICAgICAgfTtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMikge1xuICAgICAgICB2YXIgc3VjY2Vzc0NhbGxiYWNrV3JhcHBlciA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgYXJnc1sxXShmaXhDaHJvbWVTdGF0cyhyZXNwb25zZSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBvcmlnR2V0U3RhdHMuYXBwbHkodGhpcywgW3N1Y2Nlc3NDYWxsYmFja1dyYXBwZXIsIGFyZ3VtZW50c1swXV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBwcm9taXNlLXN1cHBvcnRcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHNlbGVjdG9yID09PSBudWxsKSB7XG4gICAgICAgICAgb3JpZ0dldFN0YXRzLmFwcGx5KHNlbGYsIFtcbiAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLmFwcGx5KG51bGwsIFtmaXhDaHJvbWVTdGF0cyhyZXNwb25zZSldKTtcbiAgICAgICAgICAgICAgfSwgcmVqZWN0XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3JpZ0dldFN0YXRzLmFwcGx5KHNlbGYsIFtyZXNvbHZlLCByZWplY3RdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBwYztcbiAgfTtcbiAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSA9IHdlYmtpdFJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZTtcblxuICAvLyB3cmFwIHN0YXRpYyBtZXRob2RzLiBDdXJyZW50bHkganVzdCBnZW5lcmF0ZUNlcnRpZmljYXRlLlxuICBpZiAod2Via2l0UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sICdnZW5lcmF0ZUNlcnRpZmljYXRlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gd2Via2l0UlRDUGVlckNvbm5lY3Rpb24uZ2VuZXJhdGVDZXJ0aWZpY2F0ZS5hcHBseShudWxsLFxuICAgICAgICAgICAgICBhcmd1bWVudHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5nZW5lcmF0ZUNlcnRpZmljYXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBhZGQgcHJvbWlzZSBzdXBwb3J0XG4gIFsnY3JlYXRlT2ZmZXInLCAnY3JlYXRlQW5zd2VyJ10uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgbmF0aXZlTWV0aG9kID0gd2Via2l0UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF07XG4gICAgd2Via2l0UlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgIHR5cGVvZihhcmd1bWVudHNbMF0pID09PSAnb2JqZWN0JykpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgbmF0aXZlTWV0aG9kLmFwcGx5KHNlbGYsIFtyZXNvbHZlLCByZWplY3QsIG9wdHNdKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmF0aXZlTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgWydzZXRMb2NhbERlc2NyaXB0aW9uJywgJ3NldFJlbW90ZURlc2NyaXB0aW9uJyxcbiAgICAgICdhZGRJY2VDYW5kaWRhdGUnXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHZhciBuYXRpdmVNZXRob2QgPSB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXTtcbiAgICB3ZWJraXRSVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG5hdGl2ZU1ldGhvZC5hcHBseShzZWxmLCBbYXJnc1swXSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgYXJnc1sxXS5hcHBseShudWxsLCBbXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgYXJnc1syXS5hcHBseShudWxsLCBbZXJyXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIC8vIGdldFVzZXJNZWRpYSBjb25zdHJhaW50cyBzaGltLlxuICB2YXIgY29uc3RyYWludHNUb0Nocm9tZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAodHlwZW9mIGMgIT09ICdvYmplY3QnIHx8IGMubWFuZGF0b3J5IHx8IGMub3B0aW9uYWwpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICB2YXIgY2MgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhjKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlcXVpcmUnIHx8IGtleSA9PT0gJ2FkdmFuY2VkJyB8fCBrZXkgPT09ICdtZWRpYVNvdXJjZScpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHIgPSAodHlwZW9mIGNba2V5XSA9PT0gJ29iamVjdCcpID8gY1trZXldIDoge2lkZWFsOiBjW2tleV19O1xuICAgICAgaWYgKHIuZXhhY3QgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygci5leGFjdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgci5taW4gPSByLm1heCA9IHIuZXhhY3Q7XG4gICAgICB9XG4gICAgICB2YXIgb2xkbmFtZSA9IGZ1bmN0aW9uKHByZWZpeCwgbmFtZSkge1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgcmV0dXJuIHByZWZpeCArIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmFtZSA9PT0gJ2RldmljZUlkJykgPyAnc291cmNlSWQnIDogbmFtZTtcbiAgICAgIH07XG4gICAgICBpZiAoci5pZGVhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNjLm9wdGlvbmFsID0gY2Mub3B0aW9uYWwgfHwgW107XG4gICAgICAgIHZhciBvYyA9IHt9O1xuICAgICAgICBpZiAodHlwZW9mIHIuaWRlYWwgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgb2Nbb2xkbmFtZSgnbWluJywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICAgIG9jID0ge307XG4gICAgICAgICAgb2Nbb2xkbmFtZSgnbWF4Jywga2V5KV0gPSByLmlkZWFsO1xuICAgICAgICAgIGNjLm9wdGlvbmFsLnB1c2gob2MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9jW29sZG5hbWUoJycsIGtleSldID0gci5pZGVhbDtcbiAgICAgICAgICBjYy5vcHRpb25hbC5wdXNoKG9jKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHIuZXhhY3QgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygci5leGFjdCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgY2MubWFuZGF0b3J5ID0gY2MubWFuZGF0b3J5IHx8IHt9O1xuICAgICAgICBjYy5tYW5kYXRvcnlbb2xkbmFtZSgnJywga2V5KV0gPSByLmV4YWN0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgWydtaW4nLCAnbWF4J10uZm9yRWFjaChmdW5jdGlvbihtaXgpIHtcbiAgICAgICAgICBpZiAoclttaXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeSA9IGNjLm1hbmRhdG9yeSB8fCB7fTtcbiAgICAgICAgICAgIGNjLm1hbmRhdG9yeVtvbGRuYW1lKG1peCwga2V5KV0gPSByW21peF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYy5hZHZhbmNlZCkge1xuICAgICAgY2Mub3B0aW9uYWwgPSAoY2Mub3B0aW9uYWwgfHwgW10pLmNvbmNhdChjLmFkdmFuY2VkKTtcbiAgICB9XG4gICAgcmV0dXJuIGNjO1xuICB9O1xuXG4gIGdldFVzZXJNZWRpYSA9IGZ1bmN0aW9uKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpIHtcbiAgICBpZiAoY29uc3RyYWludHMuYXVkaW8pIHtcbiAgICAgIGNvbnN0cmFpbnRzLmF1ZGlvID0gY29uc3RyYWludHNUb0Nocm9tZShjb25zdHJhaW50cy5hdWRpbyk7XG4gICAgfVxuICAgIGlmIChjb25zdHJhaW50cy52aWRlbykge1xuICAgICAgY29uc3RyYWludHMudmlkZW8gPSBjb25zdHJhaW50c1RvQ2hyb21lKGNvbnN0cmFpbnRzLnZpZGVvKTtcbiAgICB9XG4gICAgd2VicnRjVXRpbHMubG9nKCdjaHJvbWU6ICcgKyBKU09OLnN0cmluZ2lmeShjb25zdHJhaW50cykpO1xuICAgIHJldHVybiBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzLCBvblN1Y2Nlc3MsIG9uRXJyb3IpO1xuICB9O1xuICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gZ2V0VXNlck1lZGlhO1xuXG4gIGlmICghbmF2aWdhdG9yLm1lZGlhRGV2aWNlcykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMgPSB7Z2V0VXNlck1lZGlhOiByZXF1ZXN0VXNlck1lZGlhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYXRlRGV2aWNlczogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICB2YXIga2luZHMgPSB7YXVkaW86ICdhdWRpb2lucHV0JywgdmlkZW86ICd2aWRlb2lucHV0J307XG4gICAgICAgIHJldHVybiBNZWRpYVN0cmVhbVRyYWNrLmdldFNvdXJjZXMoZnVuY3Rpb24oZGV2aWNlcykge1xuICAgICAgICAgIHJlc29sdmUoZGV2aWNlcy5tYXAoZnVuY3Rpb24oZGV2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4ge2xhYmVsOiBkZXZpY2UubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6IGtpbmRzW2RldmljZS5raW5kXSxcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlSWQ6IGRldmljZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogJyd9O1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9fTtcbiAgfVxuXG4gIC8vIEEgc2hpbSBmb3IgZ2V0VXNlck1lZGlhIG1ldGhvZCBvbiB0aGUgbWVkaWFEZXZpY2VzIG9iamVjdC5cbiAgLy8gVE9ETyhLYXB0ZW5KYW5zc29uKSByZW1vdmUgb25jZSBpbXBsZW1lbnRlZCBpbiBDaHJvbWUgc3RhYmxlLlxuICBpZiAoIW5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjb25zdHJhaW50cykge1xuICAgICAgcmV0dXJuIHJlcXVlc3RVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gRXZlbiB0aG91Z2ggQ2hyb21lIDQ1IGhhcyBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzIGFuZCBhIGdldFVzZXJNZWRpYVxuICAgIC8vIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBQcm9taXNlLCBpdCBkb2VzIG5vdCBhY2NlcHQgc3BlYy1zdHlsZVxuICAgIC8vIGNvbnN0cmFpbnRzLlxuICAgIHZhciBvcmlnR2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEuXG4gICAgICAgIGJpbmQobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyk7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgPSBmdW5jdGlvbihjKSB7XG4gICAgICB3ZWJydGNVdGlscy5sb2coJ3NwZWM6ICAgJyArIEpTT04uc3RyaW5naWZ5KGMpKTsgLy8gd2hpdGVzcGFjZSBmb3IgYWxpZ25tZW50XG4gICAgICBjLmF1ZGlvID0gY29uc3RyYWludHNUb0Nocm9tZShjLmF1ZGlvKTtcbiAgICAgIGMudmlkZW8gPSBjb25zdHJhaW50c1RvQ2hyb21lKGMudmlkZW8pO1xuICAgICAgd2VicnRjVXRpbHMubG9nKCdjaHJvbWU6ICcgKyBKU09OLnN0cmluZ2lmeShjKSk7XG4gICAgICByZXR1cm4gb3JpZ0dldFVzZXJNZWRpYShjKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gRHVtbXkgZGV2aWNlY2hhbmdlIGV2ZW50IG1ldGhvZHMuXG4gIC8vIFRPRE8oS2FwdGVuSmFuc3NvbikgcmVtb3ZlIG9uY2UgaW1wbGVtZW50ZWQgaW4gQ2hyb21lIHN0YWJsZS5cbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmFkZEV2ZW50TGlzdGVuZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB3ZWJydGNVdGlscy5sb2coJ0R1bW15IG1lZGlhRGV2aWNlcy5hZGRFdmVudExpc3RlbmVyIGNhbGxlZC4nKTtcbiAgICB9O1xuICB9XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5yZW1vdmVFdmVudExpc3RlbmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgd2VicnRjVXRpbHMubG9nKCdEdW1teSBtZWRpYURldmljZXMucmVtb3ZlRXZlbnRMaXN0ZW5lciBjYWxsZWQuJyk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIEF0dGFjaCBhIG1lZGlhIHN0cmVhbSB0byBhbiBlbGVtZW50LlxuICBhdHRhY2hNZWRpYVN0cmVhbSA9IGZ1bmN0aW9uKGVsZW1lbnQsIHN0cmVhbSkge1xuICAgIGlmICh3ZWJydGNEZXRlY3RlZFZlcnNpb24gPj0gNDMpIHtcbiAgICAgIGVsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQuc3JjICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZWxlbWVudC5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdlYnJ0Y1V0aWxzLmxvZygnRXJyb3IgYXR0YWNoaW5nIHN0cmVhbSB0byBlbGVtZW50LicpO1xuICAgIH1cbiAgfTtcbiAgcmVhdHRhY2hNZWRpYVN0cmVhbSA9IGZ1bmN0aW9uKHRvLCBmcm9tKSB7XG4gICAgaWYgKHdlYnJ0Y0RldGVjdGVkVmVyc2lvbiA+PSA0Mykge1xuICAgICAgdG8uc3JjT2JqZWN0ID0gZnJvbS5zcmNPYmplY3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvLnNyYyA9IGZyb20uc3JjO1xuICAgIH1cbiAgfTtcblxufSBlbHNlIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXG4gICAgL0VkZ2VcXC8oXFxkKykuKFxcZCspJC8pKSB7XG4gIHdlYnJ0Y1V0aWxzLmxvZygnVGhpcyBhcHBlYXJzIHRvIGJlIEVkZ2UnKTtcbiAgd2VicnRjRGV0ZWN0ZWRCcm93c2VyID0gJ2VkZ2UnO1xuXG4gIHdlYnJ0Y0RldGVjdGVkVmVyc2lvbiA9IHdlYnJ0Y1V0aWxzLmV4dHJhY3RWZXJzaW9uKG5hdmlnYXRvci51c2VyQWdlbnQsXG4gICAgICAvRWRnZVxcLyhcXGQrKS4oXFxkKykkLywgMik7XG5cbiAgLy8gVGhlIG1pbmltdW0gdmVyc2lvbiBzdGlsbCBzdXBwb3J0ZWQgYnkgYWRhcHRlci5cbiAgLy8gVGhpcyBpcyB0aGUgYnVpbGQgbnVtYmVyIGZvciBFZGdlLlxuICB3ZWJydGNNaW5pbXVtVmVyc2lvbiA9IDEwNTQ3O1xuXG4gIGlmICh3aW5kb3cuUlRDSWNlR2F0aGVyZXIpIHtcbiAgICAvLyBHZW5lcmF0ZSBhbiBhbHBoYW51bWVyaWMgaWRlbnRpZmllciBmb3IgY25hbWUgb3IgbWlkcy5cbiAgICAvLyBUT0RPOiB1c2UgVVVJRHMgaW5zdGVhZD8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamVkLzk4Mjg4M1xuICAgIHZhciBnZW5lcmF0ZUlkZW50aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTApO1xuICAgIH07XG5cbiAgICAvLyBUaGUgUlRDUCBDTkFNRSB1c2VkIGJ5IGFsbCBwZWVyY29ubmVjdGlvbnMgZnJvbSB0aGUgc2FtZSBKUy5cbiAgICB2YXIgbG9jYWxDTmFtZSA9IGdlbmVyYXRlSWRlbnRpZmllcigpO1xuXG4gICAgLy8gU0RQIGhlbHBlcnMgLSB0byBiZSBtb3ZlZCBpbnRvIHNlcGFyYXRlIG1vZHVsZS5cbiAgICB2YXIgU0RQVXRpbHMgPSB7fTtcblxuICAgIC8vIFNwbGl0cyBTRFAgaW50byBsaW5lcywgZGVhbGluZyB3aXRoIGJvdGggQ1JMRiBhbmQgTEYuXG4gICAgU0RQVXRpbHMuc3BsaXRMaW5lcyA9IGZ1bmN0aW9uKGJsb2IpIHtcbiAgICAgIHJldHVybiBibG9iLnRyaW0oKS5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgcmV0dXJuIGxpbmUudHJpbSgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFNwbGl0cyBTRFAgaW50byBzZXNzaW9ucGFydCBhbmQgbWVkaWFzZWN0aW9ucy4gRW5zdXJlcyBDUkxGLlxuICAgIFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMgPSBmdW5jdGlvbihibG9iKSB7XG4gICAgICB2YXIgcGFydHMgPSBibG9iLnNwbGl0KCdcXHJcXG5tPScpO1xuICAgICAgcmV0dXJuIHBhcnRzLm1hcChmdW5jdGlvbihwYXJ0LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gKGluZGV4ID4gMCA/ICdtPScgKyBwYXJ0IDogcGFydCkudHJpbSgpICsgJ1xcclxcbic7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gUmV0dXJucyBsaW5lcyB0aGF0IHN0YXJ0IHdpdGggYSBjZXJ0YWluIHByZWZpeC5cbiAgICBTRFBVdGlscy5tYXRjaFByZWZpeCA9IGZ1bmN0aW9uKGJsb2IsIHByZWZpeCkge1xuICAgICAgcmV0dXJuIFNEUFV0aWxzLnNwbGl0TGluZXMoYmxvYikuZmlsdGVyKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgcmV0dXJuIGxpbmUuaW5kZXhPZihwcmVmaXgpID09PSAwO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlcyBhbiBJQ0UgY2FuZGlkYXRlIGxpbmUuIFNhbXBsZSBpbnB1dDpcbiAgICAvLyBjYW5kaWRhdGU6NzAyNzg2MzUwIDIgdWRwIDQxODE5OTAyIDguOC44LjggNjA3NjkgdHlwIHJlbGF5IHJhZGRyIDguOC44LjggcnBvcnQgNTU5OTZcIlxuICAgIFNEUFV0aWxzLnBhcnNlQ2FuZGlkYXRlID0gZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzO1xuICAgICAgLy8gUGFyc2UgYm90aCB2YXJpYW50cy5cbiAgICAgIGlmIChsaW5lLmluZGV4T2YoJ2E9Y2FuZGlkYXRlOicpID09PSAwKSB7XG4gICAgICAgIHBhcnRzID0gbGluZS5zdWJzdHJpbmcoMTIpLnNwbGl0KCcgJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJ0cyA9IGxpbmUuc3Vic3RyaW5nKDEwKS5zcGxpdCgnICcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FuZGlkYXRlID0ge1xuICAgICAgICBmb3VuZGF0aW9uOiBwYXJ0c1swXSxcbiAgICAgICAgY29tcG9uZW50OiBwYXJ0c1sxXSxcbiAgICAgICAgcHJvdG9jb2w6IHBhcnRzWzJdLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIHByaW9yaXR5OiBwYXJzZUludChwYXJ0c1szXSwgMTApLFxuICAgICAgICBpcDogcGFydHNbNF0sXG4gICAgICAgIHBvcnQ6IHBhcnNlSW50KHBhcnRzWzVdLCAxMCksXG4gICAgICAgIC8vIHNraXAgcGFydHNbNl0gPT0gJ3R5cCdcbiAgICAgICAgdHlwZTogcGFydHNbN11cbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSA4OyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgc3dpdGNoIChwYXJ0c1tpXSkge1xuICAgICAgICAgIGNhc2UgJ3JhZGRyJzpcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3Jwb3J0JzpcbiAgICAgICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCA9IHBhcnNlSW50KHBhcnRzW2kgKyAxXSwgMTApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndGNwdHlwZSc6XG4gICAgICAgICAgICBjYW5kaWRhdGUudGNwVHlwZSA9IHBhcnRzW2kgKyAxXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6IC8vIFVua25vd24gZXh0ZW5zaW9ucyBhcmUgc2lsZW50bHkgaWdub3JlZC5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FuZGlkYXRlO1xuICAgIH07XG5cbiAgICAvLyBUcmFuc2xhdGVzIGEgY2FuZGlkYXRlIG9iamVjdCBpbnRvIFNEUCBjYW5kaWRhdGUgYXR0cmlidXRlLlxuICAgIFNEUFV0aWxzLndyaXRlQ2FuZGlkYXRlID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gICAgICB2YXIgc2RwID0gW107XG4gICAgICBzZHAucHVzaChjYW5kaWRhdGUuZm91bmRhdGlvbik7XG4gICAgICBzZHAucHVzaChjYW5kaWRhdGUuY29tcG9uZW50KTtcbiAgICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS5wcm90b2NvbC50b1VwcGVyQ2FzZSgpKTtcbiAgICAgIHNkcC5wdXNoKGNhbmRpZGF0ZS5wcmlvcml0eSk7XG4gICAgICBzZHAucHVzaChjYW5kaWRhdGUuaXApO1xuICAgICAgc2RwLnB1c2goY2FuZGlkYXRlLnBvcnQpO1xuXG4gICAgICB2YXIgdHlwZSA9IGNhbmRpZGF0ZS50eXBlO1xuICAgICAgc2RwLnB1c2goJ3R5cCcpO1xuICAgICAgc2RwLnB1c2godHlwZSk7XG4gICAgICBpZiAodHlwZSAhPT0gJ2hvc3QnICYmIGNhbmRpZGF0ZS5yZWxhdGVkQWRkcmVzcyAmJlxuICAgICAgICAgIGNhbmRpZGF0ZS5yZWxhdGVkUG9ydCkge1xuICAgICAgICBzZHAucHVzaCgncmFkZHInKTtcbiAgICAgICAgc2RwLnB1c2goY2FuZGlkYXRlLnJlbGF0ZWRBZGRyZXNzKTsgLy8gd2FzOiByZWxBZGRyXG4gICAgICAgIHNkcC5wdXNoKCdycG9ydCcpO1xuICAgICAgICBzZHAucHVzaChjYW5kaWRhdGUucmVsYXRlZFBvcnQpOyAvLyB3YXM6IHJlbFBvcnRcbiAgICAgIH1cbiAgICAgIGlmIChjYW5kaWRhdGUudGNwVHlwZSAmJiBjYW5kaWRhdGUucHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PT0gJ3RjcCcpIHtcbiAgICAgICAgc2RwLnB1c2goJ3RjcHR5cGUnKTtcbiAgICAgICAgc2RwLnB1c2goY2FuZGlkYXRlLnRjcFR5cGUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdjYW5kaWRhdGU6JyArIHNkcC5qb2luKCcgJyk7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlcyBhbiBydHBtYXAgbGluZSwgcmV0dXJucyBSVENSdHBDb2RkZWNQYXJhbWV0ZXJzLiBTYW1wbGUgaW5wdXQ6XG4gICAgLy8gYT1ydHBtYXA6MTExIG9wdXMvNDgwMDAvMlxuICAgIFNEUFV0aWxzLnBhcnNlUnRwTWFwID0gZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zdWJzdHIoOSkuc3BsaXQoJyAnKTtcbiAgICAgIHZhciBwYXJzZWQgPSB7XG4gICAgICAgIHBheWxvYWRUeXBlOiBwYXJzZUludChwYXJ0cy5zaGlmdCgpLCAxMCkgLy8gd2FzOiBpZFxuICAgICAgfTtcblxuICAgICAgcGFydHMgPSBwYXJ0c1swXS5zcGxpdCgnLycpO1xuXG4gICAgICBwYXJzZWQubmFtZSA9IHBhcnRzWzBdO1xuICAgICAgcGFyc2VkLmNsb2NrUmF0ZSA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7IC8vIHdhczogY2xvY2tyYXRlXG4gICAgICBwYXJzZWQubnVtQ2hhbm5lbHMgPSBwYXJ0cy5sZW5ndGggPT09IDMgPyBwYXJzZUludChwYXJ0c1syXSwgMTApIDogMTsgLy8gd2FzOiBjaGFubmVsc1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9O1xuXG4gICAgLy8gR2VuZXJhdGUgYW4gYT1ydHBtYXAgbGluZSBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvciBSVENSdHBDb2RlY1BhcmFtZXRlcnMuXG4gICAgU0RQVXRpbHMud3JpdGVSdHBNYXAgPSBmdW5jdGlvbihjb2RlYykge1xuICAgICAgdmFyIHB0ID0gY29kZWMucGF5bG9hZFR5cGU7XG4gICAgICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwdCA9IGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdhPXJ0cG1hcDonICsgcHQgKyAnICcgKyBjb2RlYy5uYW1lICsgJy8nICsgY29kZWMuY2xvY2tSYXRlICtcbiAgICAgICAgICAoY29kZWMubnVtQ2hhbm5lbHMgIT09IDEgPyAnLycgKyBjb2RlYy5udW1DaGFubmVscyA6ICcnKSArICdcXHJcXG4nO1xuICAgIH07XG5cbiAgICAvLyBQYXJzZXMgYW4gZnRtcCBsaW5lLCByZXR1cm5zIGRpY3Rpb25hcnkuIFNhbXBsZSBpbnB1dDpcbiAgICAvLyBhPWZtdHA6OTYgdmJyPW9uO2NuZz1vblxuICAgIC8vIEFsc28gZGVhbHMgd2l0aCB2YnI9b247IGNuZz1vblxuICAgIFNEUFV0aWxzLnBhcnNlRm10cCA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJzZWQgPSB7fTtcbiAgICAgIHZhciBrdjtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKGxpbmUuaW5kZXhPZignICcpICsgMSkuc3BsaXQoJzsnKTtcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAga3YgPSBwYXJ0c1tqXS50cmltKCkuc3BsaXQoJz0nKTtcbiAgICAgICAgcGFyc2VkW2t2WzBdLnRyaW0oKV0gPSBrdlsxXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfTtcblxuICAgIC8vIEdlbmVyYXRlcyBhbiBhPWZ0bXAgbGluZSBmcm9tIFJUQ1J0cENvZGVjQ2FwYWJpbGl0eSBvciBSVENSdHBDb2RlY1BhcmFtZXRlcnMuXG4gICAgU0RQVXRpbHMud3JpdGVGdG1wID0gZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgIHZhciBsaW5lID0gJyc7XG4gICAgICB2YXIgcHQgPSBjb2RlYy5wYXlsb2FkVHlwZTtcbiAgICAgIGlmIChjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHB0ID0gY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGU7XG4gICAgICB9XG4gICAgICBpZiAoY29kZWMucGFyYW1ldGVycyAmJiBjb2RlYy5wYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgICB2YXIgcGFyYW1zID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKGNvZGVjLnBhcmFtZXRlcnMpLmZvckVhY2goZnVuY3Rpb24ocGFyYW0pIHtcbiAgICAgICAgICBwYXJhbXMucHVzaChwYXJhbSArICc9JyArIGNvZGVjLnBhcmFtZXRlcnNbcGFyYW1dKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxpbmUgKz0gJ2E9Zm10cDonICsgcHQgKyAnICcgKyBwYXJhbXMuam9pbignOycpICsgJ1xcclxcbic7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluZTtcbiAgICB9O1xuXG4gICAgLy8gUGFyc2VzIGFuIHJ0Y3AtZmIgbGluZSwgcmV0dXJucyBSVENQUnRjcEZlZWRiYWNrIG9iamVjdC4gU2FtcGxlIGlucHV0OlxuICAgIC8vIGE9cnRjcC1mYjo5OCBuYWNrIHJwc2lcbiAgICBTRFBVdGlscy5wYXJzZVJ0Y3BGYiA9IGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3Vic3RyKGxpbmUuaW5kZXhPZignICcpICsgMSkuc3BsaXQoJyAnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHBhcnRzLnNoaWZ0KCksXG4gICAgICAgIHBhcmFtZXRlcjogcGFydHMuam9pbignICcpXG4gICAgICB9O1xuICAgIH07XG4gICAgLy8gR2VuZXJhdGUgYT1ydGNwLWZiIGxpbmVzIGZyb20gUlRDUnRwQ29kZWNDYXBhYmlsaXR5IG9yIFJUQ1J0cENvZGVjUGFyYW1ldGVycy5cbiAgICBTRFBVdGlscy53cml0ZVJ0Y3BGYiA9IGZ1bmN0aW9uKGNvZGVjKSB7XG4gICAgICB2YXIgbGluZXMgPSAnJztcbiAgICAgIHZhciBwdCA9IGNvZGVjLnBheWxvYWRUeXBlO1xuICAgICAgaWYgKGNvZGVjLnByZWZlcnJlZFBheWxvYWRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHQgPSBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb2RlYy5ydGNwRmVlZGJhY2sgJiYgY29kZWMucnRjcEZlZWRiYWNrLmxlbmd0aCkge1xuICAgICAgICAvLyBGSVhNRTogc3BlY2lhbCBoYW5kbGluZyBmb3IgdHJyLWludD9cbiAgICAgICAgY29kZWMucnRjcEZlZWRiYWNrLmZvckVhY2goZnVuY3Rpb24oZmIpIHtcbiAgICAgICAgICBsaW5lcyArPSAnYT1ydGNwLWZiOicgKyBwdCArICcgJyArIGZiLnR5cGUgKyAnICcgKyBmYi5wYXJhbWV0ZXIgK1xuICAgICAgICAgICAgICAnXFxyXFxuJztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbGluZXM7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlcyBhbiBSRkMgNTU3NiBzc3JjIG1lZGlhIGF0dHJpYnV0ZS4gU2FtcGxlIGlucHV0OlxuICAgIC8vIGE9c3NyYzozNzM1OTI4NTU5IGNuYW1lOnNvbWV0aGluZ1xuICAgIFNEUFV0aWxzLnBhcnNlU3NyY01lZGlhID0gZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHNwID0gbGluZS5pbmRleE9mKCcgJyk7XG4gICAgICB2YXIgcGFydHMgPSB7XG4gICAgICAgIHNzcmM6IGxpbmUuc3Vic3RyKDcsIHNwIC0gNyksXG4gICAgICB9O1xuICAgICAgdmFyIGNvbG9uID0gbGluZS5pbmRleE9mKCc6Jywgc3ApO1xuICAgICAgaWYgKGNvbG9uID4gLTEpIHtcbiAgICAgICAgcGFydHMuYXR0cmlidXRlID0gbGluZS5zdWJzdHIoc3AgKyAxLCBjb2xvbiAtIHNwIC0gMSk7XG4gICAgICAgIHBhcnRzLnZhbHVlID0gbGluZS5zdWJzdHIoY29sb24gKyAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnRzLmF0dHJpYnV0ZSA9IGxpbmUuc3Vic3RyKHNwICsgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGFydHM7XG4gICAgfTtcblxuICAgIC8vIEV4dHJhY3RzIERUTFMgcGFyYW1ldGVycyBmcm9tIFNEUCBtZWRpYSBzZWN0aW9uIG9yIHNlc3Npb25wYXJ0LlxuICAgIC8vIEZJWE1FOiBmb3IgY29uc2lzdGVuY3kgd2l0aCBvdGhlciBmdW5jdGlvbnMgdGhpcyBzaG91bGQgb25seVxuICAgIC8vICAgZ2V0IHRoZSBmaW5nZXJwcmludCBsaW5lIGFzIGlucHV0LiBTZWUgYWxzbyBnZXRJY2VQYXJhbWV0ZXJzLlxuICAgIFNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCkge1xuICAgICAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICAgICAgbGluZXMgPSBsaW5lcy5jb25jYXQoU0RQVXRpbHMuc3BsaXRMaW5lcyhzZXNzaW9ucGFydCkpOyAvLyBTZWFyY2ggaW4gc2Vzc2lvbiBwYXJ0LCB0b28uXG4gICAgICB2YXIgZnBMaW5lID0gbGluZXMuZmlsdGVyKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgcmV0dXJuIGxpbmUuaW5kZXhPZignYT1maW5nZXJwcmludDonKSA9PT0gMDtcbiAgICAgIH0pWzBdLnN1YnN0cigxNCk7XG4gICAgICAvLyBOb3RlOiBhPXNldHVwIGxpbmUgaXMgaWdub3JlZCBzaW5jZSB3ZSB1c2UgdGhlICdhdXRvJyByb2xlLlxuICAgICAgdmFyIGR0bHNQYXJhbWV0ZXJzID0ge1xuICAgICAgICByb2xlOiAnYXV0bycsXG4gICAgICAgIGZpbmdlcnByaW50czogW3tcbiAgICAgICAgICBhbGdvcml0aG06IGZwTGluZS5zcGxpdCgnICcpWzBdLFxuICAgICAgICAgIHZhbHVlOiBmcExpbmUuc3BsaXQoJyAnKVsxXVxuICAgICAgICB9XVxuICAgICAgfTtcbiAgICAgIHJldHVybiBkdGxzUGFyYW1ldGVycztcbiAgICB9O1xuXG4gICAgLy8gU2VyaWFsaXplcyBEVExTIHBhcmFtZXRlcnMgdG8gU0RQLlxuICAgIFNEUFV0aWxzLndyaXRlRHRsc1BhcmFtZXRlcnMgPSBmdW5jdGlvbihwYXJhbXMsIHNldHVwVHlwZSkge1xuICAgICAgdmFyIHNkcCA9ICdhPXNldHVwOicgKyBzZXR1cFR5cGUgKyAnXFxyXFxuJztcbiAgICAgIHBhcmFtcy5maW5nZXJwcmludHMuZm9yRWFjaChmdW5jdGlvbihmcCkge1xuICAgICAgICBzZHAgKz0gJ2E9ZmluZ2VycHJpbnQ6JyArIGZwLmFsZ29yaXRobSArICcgJyArIGZwLnZhbHVlICsgJ1xcclxcbic7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBzZHA7XG4gICAgfTtcbiAgICAvLyBQYXJzZXMgSUNFIGluZm9ybWF0aW9uIGZyb20gU0RQIG1lZGlhIHNlY3Rpb24gb3Igc2Vzc2lvbnBhcnQuXG4gICAgLy8gRklYTUU6IGZvciBjb25zaXN0ZW5jeSB3aXRoIG90aGVyIGZ1bmN0aW9ucyB0aGlzIHNob3VsZCBvbmx5XG4gICAgLy8gICBnZXQgdGhlIGljZS11ZnJhZyBhbmQgaWNlLXB3ZCBsaW5lcyBhcyBpbnB1dC5cbiAgICBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzID0gZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCkge1xuICAgICAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICAgICAgbGluZXMgPSBsaW5lcy5jb25jYXQoU0RQVXRpbHMuc3BsaXRMaW5lcyhzZXNzaW9ucGFydCkpOyAvLyBTZWFyY2ggaW4gc2Vzc2lvbiBwYXJ0LCB0b28uXG4gICAgICB2YXIgaWNlUGFyYW1ldGVycyA9IHtcbiAgICAgICAgdXNlcm5hbWVGcmFnbWVudDogbGluZXMuZmlsdGVyKGZ1bmN0aW9uKGxpbmUpIHtcbiAgICAgICAgICByZXR1cm4gbGluZS5pbmRleE9mKCdhPWljZS11ZnJhZzonKSA9PT0gMDtcbiAgICAgICAgfSlbMF0uc3Vic3RyKDEyKSxcbiAgICAgICAgcGFzc3dvcmQ6IGxpbmVzLmZpbHRlcihmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIGxpbmUuaW5kZXhPZignYT1pY2UtcHdkOicpID09PSAwO1xuICAgICAgICB9KVswXS5zdWJzdHIoMTApXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGljZVBhcmFtZXRlcnM7XG4gICAgfTtcblxuICAgIC8vIFNlcmlhbGl6ZXMgSUNFIHBhcmFtZXRlcnMgdG8gU0RQLlxuICAgIFNEUFV0aWxzLndyaXRlSWNlUGFyYW1ldGVycyA9IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgcmV0dXJuICdhPWljZS11ZnJhZzonICsgcGFyYW1zLnVzZXJuYW1lRnJhZ21lbnQgKyAnXFxyXFxuJyArXG4gICAgICAgICAgJ2E9aWNlLXB3ZDonICsgcGFyYW1zLnBhc3N3b3JkICsgJ1xcclxcbic7XG4gICAgfTtcblxuICAgIC8vIFBhcnNlcyB0aGUgU0RQIG1lZGlhIHNlY3Rpb24gYW5kIHJldHVybnMgUlRDUnRwUGFyYW1ldGVycy5cbiAgICBTRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMgPSBmdW5jdGlvbihtZWRpYVNlY3Rpb24pIHtcbiAgICAgIHZhciBkZXNjcmlwdGlvbiA9IHtcbiAgICAgICAgY29kZWNzOiBbXSxcbiAgICAgICAgaGVhZGVyRXh0ZW5zaW9uczogW10sXG4gICAgICAgIGZlY01lY2hhbmlzbXM6IFtdLFxuICAgICAgICBydGNwOiBbXVxuICAgICAgfTtcbiAgICAgIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgICAgIHZhciBtbGluZSA9IGxpbmVzWzBdLnNwbGl0KCcgJyk7XG4gICAgICBmb3IgKHZhciBpID0gMzsgaSA8IG1saW5lLmxlbmd0aDsgaSsrKSB7IC8vIGZpbmQgYWxsIGNvZGVjcyBmcm9tIG1saW5lWzMuLl1cbiAgICAgICAgdmFyIHB0ID0gbWxpbmVbaV07XG4gICAgICAgIHZhciBydHBtYXBsaW5lID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoXG4gICAgICAgICAgICBtZWRpYVNlY3Rpb24sICdhPXJ0cG1hcDonICsgcHQgKyAnICcpWzBdO1xuICAgICAgICBpZiAocnRwbWFwbGluZSkge1xuICAgICAgICAgIHZhciBjb2RlYyA9IFNEUFV0aWxzLnBhcnNlUnRwTWFwKHJ0cG1hcGxpbmUpO1xuICAgICAgICAgIHZhciBmbXRwcyA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KFxuICAgICAgICAgICAgICBtZWRpYVNlY3Rpb24sICdhPWZtdHA6JyArIHB0ICsgJyAnKTtcbiAgICAgICAgICAvLyBPbmx5IHRoZSBmaXJzdCBhPWZtdHA6PHB0PiBpcyBjb25zaWRlcmVkLlxuICAgICAgICAgIGNvZGVjLnBhcmFtZXRlcnMgPSBmbXRwcy5sZW5ndGggPyBTRFBVdGlscy5wYXJzZUZtdHAoZm10cHNbMF0pIDoge307XG4gICAgICAgICAgY29kZWMucnRjcEZlZWRiYWNrID0gU0RQVXRpbHMubWF0Y2hQcmVmaXgoXG4gICAgICAgICAgICAgIG1lZGlhU2VjdGlvbiwgJ2E9cnRjcC1mYjonICsgcHQgKyAnICcpXG4gICAgICAgICAgICAubWFwKFNEUFV0aWxzLnBhcnNlUnRjcEZiKTtcbiAgICAgICAgICBkZXNjcmlwdGlvbi5jb2RlY3MucHVzaChjb2RlYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIEZJWE1FOiBwYXJzZSBoZWFkZXJFeHRlbnNpb25zLCBmZWNNZWNoYW5pc21zIGFuZCBydGNwLlxuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH07XG5cbiAgICAvLyBHZW5lcmF0ZXMgcGFydHMgb2YgdGhlIFNEUCBtZWRpYSBzZWN0aW9uIGRlc2NyaWJpbmcgdGhlIGNhcGFiaWxpdGllcyAvIHBhcmFtZXRlcnMuXG4gICAgU0RQVXRpbHMud3JpdGVSdHBEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKGtpbmQsIGNhcHMpIHtcbiAgICAgIHZhciBzZHAgPSAnJztcblxuICAgICAgLy8gQnVpbGQgdGhlIG1saW5lLlxuICAgICAgc2RwICs9ICdtPScgKyBraW5kICsgJyAnO1xuICAgICAgc2RwICs9IGNhcHMuY29kZWNzLmxlbmd0aCA+IDAgPyAnOScgOiAnMCc7IC8vIHJlamVjdCBpZiBubyBjb2RlY3MuXG4gICAgICBzZHAgKz0gJyBVRFAvVExTL1JUUC9TQVZQRiAnO1xuICAgICAgc2RwICs9IGNhcHMuY29kZWNzLm1hcChmdW5jdGlvbihjb2RlYykge1xuICAgICAgICBpZiAoY29kZWMucHJlZmVycmVkUGF5bG9hZFR5cGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBjb2RlYy5wcmVmZXJyZWRQYXlsb2FkVHlwZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29kZWMucGF5bG9hZFR5cGU7XG4gICAgICB9KS5qb2luKCcgJykgKyAnXFxyXFxuJztcblxuICAgICAgc2RwICs9ICdjPUlOIElQNCAwLjAuMC4wXFxyXFxuJztcbiAgICAgIHNkcCArPSAnYT1ydGNwOjkgSU4gSVA0IDAuMC4wLjBcXHJcXG4nO1xuXG4gICAgICAvLyBBZGQgYT1ydHBtYXAgbGluZXMgZm9yIGVhY2ggY29kZWMuIEFsc28gZm10cCBhbmQgcnRjcC1mYi5cbiAgICAgIGNhcHMuY29kZWNzLmZvckVhY2goZnVuY3Rpb24oY29kZWMpIHtcbiAgICAgICAgc2RwICs9IFNEUFV0aWxzLndyaXRlUnRwTWFwKGNvZGVjKTtcbiAgICAgICAgc2RwICs9IFNEUFV0aWxzLndyaXRlRnRtcChjb2RlYyk7XG4gICAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZVJ0Y3BGYihjb2RlYyk7XG4gICAgICB9KTtcbiAgICAgIC8vIEZJWE1FOiBhZGQgaGVhZGVyRXh0ZW5zaW9ucywgZmVjTWVjaGFuaXNtxZ8gYW5kIHJ0Y3AuXG4gICAgICBzZHAgKz0gJ2E9cnRjcC1tdXhcXHJcXG4nO1xuICAgICAgcmV0dXJuIHNkcDtcbiAgICB9O1xuXG4gICAgU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIEZJWE1FOiBzZXNzLWlkIHNob3VsZCBiZSBhbiBOVFAgdGltZXN0YW1wLlxuICAgICAgcmV0dXJuICd2PTBcXHJcXG4nICtcbiAgICAgICAgICAnbz10aGlzaXNhZGFwdGVyb3J0YyA4MTY5NjM5OTE1NjQ2OTQzMTM3IDIgSU4gSVA0IDEyNy4wLjAuMVxcclxcbicgK1xuICAgICAgICAgICdzPS1cXHJcXG4nICtcbiAgICAgICAgICAndD0wIDBcXHJcXG4nO1xuICAgIH07XG5cbiAgICBTRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbiA9IGZ1bmN0aW9uKHRyYW5zY2VpdmVyLCBjYXBzLCB0eXBlLCBzdHJlYW0pIHtcbiAgICAgIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVJ0cERlc2NyaXB0aW9uKHRyYW5zY2VpdmVyLmtpbmQsIGNhcHMpO1xuXG4gICAgICAvLyBNYXAgSUNFIHBhcmFtZXRlcnMgKHVmcmFnLCBwd2QpIHRvIFNEUC5cbiAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUljZVBhcmFtZXRlcnMoXG4gICAgICAgICAgdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXIuZ2V0TG9jYWxQYXJhbWV0ZXJzKCkpO1xuXG4gICAgICAvLyBNYXAgRFRMUyBwYXJhbWV0ZXJzIHRvIFNEUC5cbiAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZUR0bHNQYXJhbWV0ZXJzKFxuICAgICAgICAgIHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQuZ2V0TG9jYWxQYXJhbWV0ZXJzKCksXG4gICAgICAgICAgdHlwZSA9PT0gJ29mZmVyJyA/ICdhY3RwYXNzJyA6ICdhY3RpdmUnKTtcblxuICAgICAgc2RwICs9ICdhPW1pZDonICsgdHJhbnNjZWl2ZXIubWlkICsgJ1xcclxcbic7XG5cbiAgICAgIGlmICh0cmFuc2NlaXZlci5ydHBTZW5kZXIgJiYgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIpIHtcbiAgICAgICAgc2RwICs9ICdhPXNlbmRyZWN2XFxyXFxuJztcbiAgICAgIH0gZWxzZSBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgICAgIHNkcCArPSAnYT1zZW5kb25seVxcclxcbic7XG4gICAgICB9IGVsc2UgaWYgKHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgICAgIHNkcCArPSAnYT1yZWN2b25seVxcclxcbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZHAgKz0gJ2E9aW5hY3RpdmVcXHJcXG4nO1xuICAgICAgfVxuXG4gICAgICAvLyBGSVhNRTogZm9yIFJUWCB0aGVyZSBtaWdodCBiZSBtdWx0aXBsZSBTU1JDcy4gTm90IGltcGxlbWVudGVkIGluIEVkZ2UgeWV0LlxuICAgICAgaWYgKHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgICAgICB2YXIgbXNpZCA9ICdtc2lkOicgKyBzdHJlYW0uaWQgKyAnICcgK1xuICAgICAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnRyYWNrLmlkICsgJ1xcclxcbic7XG4gICAgICAgIHNkcCArPSAnYT0nICsgbXNpZDtcbiAgICAgICAgc2RwICs9ICdhPXNzcmM6JyArIHRyYW5zY2VpdmVyLnNlbmRTc3JjICsgJyAnICsgbXNpZDtcbiAgICAgIH1cbiAgICAgIC8vIEZJWE1FOiB0aGlzIHNob3VsZCBiZSB3cml0dGVuIGJ5IHdyaXRlUnRwRGVzY3JpcHRpb24uXG4gICAgICBzZHAgKz0gJ2E9c3NyYzonICsgdHJhbnNjZWl2ZXIuc2VuZFNzcmMgKyAnIGNuYW1lOicgK1xuICAgICAgICAgIGxvY2FsQ05hbWUgKyAnXFxyXFxuJztcbiAgICAgIHJldHVybiBzZHA7XG4gICAgfTtcblxuICAgIC8vIEdldHMgdGhlIGRpcmVjdGlvbiBmcm9tIHRoZSBtZWRpYVNlY3Rpb24gb3IgdGhlIHNlc3Npb25wYXJ0LlxuICAgIFNEUFV0aWxzLmdldERpcmVjdGlvbiA9IGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2Vzc2lvbnBhcnQpIHtcbiAgICAgIC8vIExvb2sgZm9yIHNlbmRyZWN2LCBzZW5kb25seSwgcmVjdm9ubHksIGluYWN0aXZlLCBkZWZhdWx0IHRvIHNlbmRyZWN2LlxuICAgICAgdmFyIGxpbmVzID0gU0RQVXRpbHMuc3BsaXRMaW5lcyhtZWRpYVNlY3Rpb24pO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGxpbmVzW2ldKSB7XG4gICAgICAgICAgY2FzZSAnYT1zZW5kcmVjdic6XG4gICAgICAgICAgY2FzZSAnYT1zZW5kb25seSc6XG4gICAgICAgICAgY2FzZSAnYT1yZWN2b25seSc6XG4gICAgICAgICAgY2FzZSAnYT1pbmFjdGl2ZSc6XG4gICAgICAgICAgICByZXR1cm4gbGluZXNbaV0uc3Vic3RyKDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc2Vzc2lvbnBhcnQpIHtcbiAgICAgICAgcmV0dXJuIFNEUFV0aWxzLmdldERpcmVjdGlvbihzZXNzaW9ucGFydCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3NlbmRyZWN2JztcbiAgICB9O1xuXG4gICAgLy8gT1JUQyBkZWZpbmVzIGFuIFJUQ0ljZUNhbmRpZGF0ZSBvYmplY3QgYnV0IG5vIGNvbnN0cnVjdG9yLlxuICAgIC8vIE5vdCBpbXBsZW1lbnRlZCBpbiBFZGdlLlxuICAgIGlmICghd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSkge1xuICAgICAgd2luZG93LlJUQ0ljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICB9O1xuICAgIH1cbiAgICAvLyBPUlRDIGRvZXMgbm90IGhhdmUgYSBzZXNzaW9uIGRlc2NyaXB0aW9uIG9iamVjdCBidXRcbiAgICAvLyBvdGhlciBicm93c2VycyAoaS5lLiBDaHJvbWUpIHRoYXQgd2lsbCBzdXBwb3J0IGJvdGggUEMgYW5kIE9SVENcbiAgICAvLyBpbiB0aGUgZnV0dXJlIG1pZ2h0IGhhdmUgdGhpcyBkZWZpbmVkIGFscmVhZHkuXG4gICAgaWYgKCF3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKSB7XG4gICAgICB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICByZXR1cm4gYXJncztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHRoaXMub25pY2VjYW5kaWRhdGUgPSBudWxsO1xuICAgICAgdGhpcy5vbmFkZHN0cmVhbSA9IG51bGw7XG4gICAgICB0aGlzLm9ucmVtb3Zlc3RyZWFtID0gbnVsbDtcbiAgICAgIHRoaXMub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICB0aGlzLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgIHRoaXMub25uZWdvdGlhdGlvbm5lZWRlZCA9IG51bGw7XG4gICAgICB0aGlzLm9uZGF0YWNoYW5uZWwgPSBudWxsO1xuXG4gICAgICB0aGlzLmxvY2FsU3RyZWFtcyA9IFtdO1xuICAgICAgdGhpcy5yZW1vdGVTdHJlYW1zID0gW107XG4gICAgICB0aGlzLmdldExvY2FsU3RyZWFtcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5sb2NhbFN0cmVhbXM7IH07XG4gICAgICB0aGlzLmdldFJlbW90ZVN0cmVhbXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNlbGYucmVtb3RlU3RyZWFtczsgfTtcblxuICAgICAgdGhpcy5sb2NhbERlc2NyaXB0aW9uID0gbmV3IFJUQ1Nlc3Npb25EZXNjcmlwdGlvbih7XG4gICAgICAgIHR5cGU6ICcnLFxuICAgICAgICBzZHA6ICcnXG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVtb3RlRGVzY3JpcHRpb24gPSBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHtcbiAgICAgICAgdHlwZTogJycsXG4gICAgICAgIHNkcDogJydcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zaWduYWxpbmdTdGF0ZSA9ICdzdGFibGUnO1xuICAgICAgdGhpcy5pY2VDb25uZWN0aW9uU3RhdGUgPSAnbmV3JztcblxuICAgICAgdGhpcy5pY2VPcHRpb25zID0ge1xuICAgICAgICBnYXRoZXJQb2xpY3k6ICdhbGwnLFxuICAgICAgICBpY2VTZXJ2ZXJzOiBbXVxuICAgICAgfTtcbiAgICAgIGlmIChjb25maWcgJiYgY29uZmlnLmljZVRyYW5zcG9ydFBvbGljeSkge1xuICAgICAgICBzd2l0Y2ggKGNvbmZpZy5pY2VUcmFuc3BvcnRQb2xpY3kpIHtcbiAgICAgICAgICBjYXNlICdhbGwnOlxuICAgICAgICAgIGNhc2UgJ3JlbGF5JzpcbiAgICAgICAgICAgIHRoaXMuaWNlT3B0aW9ucy5nYXRoZXJQb2xpY3kgPSBjb25maWcuaWNlVHJhbnNwb3J0UG9saWN5O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbm9uZSc6XG4gICAgICAgICAgICAvLyBGSVhNRTogcmVtb3ZlIG9uY2UgaW1wbGVtZW50YXRpb24gYW5kIHNwZWMgaGF2ZSBhZGRlZCB0aGlzLlxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaWNlVHJhbnNwb3J0UG9saWN5IFwibm9uZVwiIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZyAmJiBjb25maWcuaWNlU2VydmVycykge1xuICAgICAgICAvLyBFZGdlIGRvZXMgbm90IGxpa2VcbiAgICAgICAgLy8gMSkgc3R1bjpcbiAgICAgICAgLy8gMikgdHVybjogdGhhdCBkb2VzIG5vdCBoYXZlIGFsbCBvZiB0dXJuOmhvc3Q6cG9ydD90cmFuc3BvcnQ9dWRwXG4gICAgICAgIC8vIDMpIGFuIGFycmF5IG9mIHVybHNcbiAgICAgICAgY29uZmlnLmljZVNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbihzZXJ2ZXIpIHtcbiAgICAgICAgICBpZiAoc2VydmVyLnVybHMpIHtcbiAgICAgICAgICAgIHZhciB1cmw7XG4gICAgICAgICAgICBpZiAodHlwZW9mKHNlcnZlci51cmxzKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgdXJsID0gc2VydmVyLnVybHM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB1cmwgPSBzZXJ2ZXIudXJsc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1cmwuaW5kZXhPZigndHJhbnNwb3J0PXVkcCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICBzZWxmLmljZVNlcnZlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHNlcnZlci51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBjcmVkZW50aWFsOiBzZXJ2ZXIuY3JlZGVudGlhbCxcbiAgICAgICAgICAgICAgICB1cmxzOiB1cmxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gcGVyLXRyYWNrIGljZUdhdGhlcnMsIGljZVRyYW5zcG9ydHMsIGR0bHNUcmFuc3BvcnRzLCBydHBTZW5kZXJzLCAuLi5cbiAgICAgIC8vIGV2ZXJ5dGhpbmcgdGhhdCBpcyBuZWVkZWQgdG8gZGVzY3JpYmUgYSBTRFAgbS1saW5lLlxuICAgICAgdGhpcy50cmFuc2NlaXZlcnMgPSBbXTtcblxuICAgICAgLy8gc2luY2UgdGhlIGljZUdhdGhlcmVyIGlzIGN1cnJlbnRseSBjcmVhdGVkIGluIGNyZWF0ZU9mZmVyIGJ1dCB3ZVxuICAgICAgLy8gbXVzdCBub3QgZW1pdCBjYW5kaWRhdGVzIHVudGlsIGFmdGVyIHNldExvY2FsRGVzY3JpcHRpb24gd2UgYnVmZmVyXG4gICAgICAvLyB0aGVtIGluIHRoaXMgYXJyYXkuXG4gICAgICB0aGlzLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIgPSBbXTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5fZW1pdEJ1ZmZlcmVkQ2FuZGlkYXRlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgLy8gRklYTUU6IG5lZWQgdG8gYXBwbHkgaWNlIGNhbmRpZGF0ZXMgaW4gYSB3YXkgd2hpY2ggaXMgYXN5bmMgYnV0IGluLW9yZGVyXG4gICAgICB0aGlzLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIuZm9yRWFjaChmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoc2VsZi5vbmljZWNhbmRpZGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlciA9IFtdO1xuICAgIH07XG5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmFkZFN0cmVhbSA9IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgLy8gQ2xvbmUgaXMgbmVjZXNzYXJ5IGZvciBsb2NhbCBkZW1vcyBtb3N0bHksIGF0dGFjaGluZyBkaXJlY3RseVxuICAgICAgLy8gdG8gdHdvIGRpZmZlcmVudCBzZW5kZXJzIGRvZXMgbm90IHdvcmsgKGJ1aWxkIDEwNTQ3KS5cbiAgICAgIHRoaXMubG9jYWxTdHJlYW1zLnB1c2goc3RyZWFtLmNsb25lKCkpO1xuICAgICAgdGhpcy5fbWF5YmVGaXJlTmVnb3RpYXRpb25OZWVkZWQoKTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5yZW1vdmVTdHJlYW0gPSBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgIHZhciBpZHggPSB0aGlzLmxvY2FsU3RyZWFtcy5pbmRleE9mKHN0cmVhbSk7XG4gICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0cmVhbXMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIHRoaXMuX21heWJlRmlyZU5lZ290aWF0aW9uTmVlZGVkKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIERldGVybWluZXMgdGhlIGludGVyc2VjdGlvbiBvZiBsb2NhbCBhbmQgcmVtb3RlIGNhcGFiaWxpdGllcy5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9nZXRDb21tb25DYXBhYmlsaXRpZXMgPVxuICAgICAgICBmdW5jdGlvbihsb2NhbENhcGFiaWxpdGllcywgcmVtb3RlQ2FwYWJpbGl0aWVzKSB7XG4gICAgICB2YXIgY29tbW9uQ2FwYWJpbGl0aWVzID0ge1xuICAgICAgICBjb2RlY3M6IFtdLFxuICAgICAgICBoZWFkZXJFeHRlbnNpb25zOiBbXSxcbiAgICAgICAgZmVjTWVjaGFuaXNtczogW11cbiAgICAgIH07XG4gICAgICBsb2NhbENhcGFiaWxpdGllcy5jb2RlY3MuZm9yRWFjaChmdW5jdGlvbihsQ29kZWMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVDYXBhYmlsaXRpZXMuY29kZWNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHJDb2RlYyA9IHJlbW90ZUNhcGFiaWxpdGllcy5jb2RlY3NbaV07XG4gICAgICAgICAgaWYgKGxDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IHJDb2RlYy5uYW1lLnRvTG93ZXJDYXNlKCkgJiZcbiAgICAgICAgICAgICAgbENvZGVjLmNsb2NrUmF0ZSA9PT0gckNvZGVjLmNsb2NrUmF0ZSAmJlxuICAgICAgICAgICAgICBsQ29kZWMubnVtQ2hhbm5lbHMgPT09IHJDb2RlYy5udW1DaGFubmVscykge1xuICAgICAgICAgICAgLy8gcHVzaCByQ29kZWMgc28gd2UgcmVwbHkgd2l0aCBvZmZlcmVyIHBheWxvYWQgdHlwZVxuICAgICAgICAgICAgY29tbW9uQ2FwYWJpbGl0aWVzLmNvZGVjcy5wdXNoKHJDb2RlYyk7XG5cbiAgICAgICAgICAgIC8vIEZJWE1FOiBhbHNvIG5lZWQgdG8gZGV0ZXJtaW5lIGludGVyc2VjdGlvbiBiZXR3ZWVuXG4gICAgICAgICAgICAvLyAucnRjcEZlZWRiYWNrIGFuZCAucGFyYW1ldGVyc1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbG9jYWxDYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGxIZWFkZXJFeHRlbnNpb24pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdGVDYXBhYmlsaXRpZXMuaGVhZGVyRXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBySGVhZGVyRXh0ZW5zaW9uID0gcmVtb3RlQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnNbaV07XG4gICAgICAgICAgaWYgKGxIZWFkZXJFeHRlbnNpb24udXJpID09PSBySGVhZGVyRXh0ZW5zaW9uLnVyaSkge1xuICAgICAgICAgICAgY29tbW9uQ2FwYWJpbGl0aWVzLmhlYWRlckV4dGVuc2lvbnMucHVzaChySGVhZGVyRXh0ZW5zaW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEZJWE1FOiBmZWNNZWNoYW5pc21zXG4gICAgICByZXR1cm4gY29tbW9uQ2FwYWJpbGl0aWVzO1xuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgSUNFIGdhdGhlcmVyLCBJQ0UgdHJhbnNwb3J0IGFuZCBEVExTIHRyYW5zcG9ydC5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9jcmVhdGVJY2VBbmREdGxzVHJhbnNwb3J0cyA9XG4gICAgICAgIGZ1bmN0aW9uKG1pZCwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGljZUdhdGhlcmVyID0gbmV3IFJUQ0ljZUdhdGhlcmVyKHNlbGYuaWNlT3B0aW9ucyk7XG4gICAgICB2YXIgaWNlVHJhbnNwb3J0ID0gbmV3IFJUQ0ljZVRyYW5zcG9ydChpY2VHYXRoZXJlcik7XG4gICAgICBpY2VHYXRoZXJlci5vbmxvY2FsY2FuZGlkYXRlID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIHZhciBldmVudCA9IHt9O1xuICAgICAgICBldmVudC5jYW5kaWRhdGUgPSB7c2RwTWlkOiBtaWQsIHNkcE1MaW5lSW5kZXg6IHNkcE1MaW5lSW5kZXh9O1xuXG4gICAgICAgIHZhciBjYW5kID0gZXZ0LmNhbmRpZGF0ZTtcbiAgICAgICAgLy8gRWRnZSBlbWl0cyBhbiBlbXB0eSBvYmplY3QgZm9yIFJUQ0ljZUNhbmRpZGF0ZUNvbXBsZXRl4oClXG4gICAgICAgIGlmICghY2FuZCB8fCBPYmplY3Qua2V5cyhjYW5kKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAvLyBwb2x5ZmlsbCBzaW5jZSBSVENJY2VHYXRoZXJlci5zdGF0ZSBpcyBub3QgaW1wbGVtZW50ZWQgaW4gRWRnZSAxMDU0NyB5ZXQuXG4gICAgICAgICAgaWYgKGljZUdhdGhlcmVyLnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGljZUdhdGhlcmVyLnN0YXRlID0gJ2NvbXBsZXRlZCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRW1pdCBhIGNhbmRpZGF0ZSB3aXRoIHR5cGUgZW5kT2ZDYW5kaWRhdGVzIHRvIG1ha2UgdGhlIHNhbXBsZXMgd29yay5cbiAgICAgICAgICAvLyBFZGdlIHJlcXVpcmVzIGFkZEljZUNhbmRpZGF0ZSB3aXRoIHRoaXMgZW1wdHkgY2FuZGlkYXRlIHRvIHN0YXJ0IGNoZWNraW5nLlxuICAgICAgICAgIC8vIFRoZSByZWFsIHNvbHV0aW9uIGlzIHRvIHNpZ25hbCBlbmQtb2YtY2FuZGlkYXRlcyB0byB0aGUgb3RoZXIgc2lkZSB3aGVuXG4gICAgICAgICAgLy8gZ2V0dGluZyB0aGUgbnVsbCBjYW5kaWRhdGUgYnV0IHNvbWUgYXBwcyAobGlrZSB0aGUgc2FtcGxlcykgZG9uJ3QgZG8gdGhhdC5cbiAgICAgICAgICBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlID1cbiAgICAgICAgICAgICAgJ2NhbmRpZGF0ZToxIDEgdWRwIDEgMC4wLjAuMCA5IHR5cCBlbmRPZkNhbmRpZGF0ZXMnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJUQ0ljZUNhbmRpZGF0ZSBkb2Vzbid0IGhhdmUgYSBjb21wb25lbnQsIG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICAgICAgY2FuZC5jb21wb25lbnQgPSBpY2VUcmFuc3BvcnQuY29tcG9uZW50ID09PSAnUlRDUCcgPyAyIDogMTtcbiAgICAgICAgICBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlID0gU0RQVXRpbHMud3JpdGVDYW5kaWRhdGUoY2FuZCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29tcGxldGUgPSBzZWxmLnRyYW5zY2VpdmVycy5ldmVyeShmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICAgIHJldHVybiB0cmFuc2NlaXZlci5pY2VHYXRoZXJlciAmJlxuICAgICAgICAgICAgICB0cmFuc2NlaXZlci5pY2VHYXRoZXJlci5zdGF0ZSA9PT0gJ2NvbXBsZXRlZCc7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBGSVhNRTogdXBkYXRlIC5sb2NhbERlc2NyaXB0aW9uIHdpdGggY2FuZGlkYXRlIGFuZCAocG90ZW50aWFsbHkpIGVuZC1vZi1jYW5kaWRhdGVzLlxuICAgICAgICAvLyAgICAgVG8gbWFrZSB0aGlzIGhhcmRlciwgdGhlIGdhdGhlcmVyIG1pZ2h0IGVtaXQgY2FuZGlkYXRlcyBiZWZvcmUgbG9jYWxkZXNjcmlwdGlvblxuICAgICAgICAvLyAgICAgaXMgc2V0LiBUbyBtYWtlIHRoaW5ncyB3b3JzZSwgZ2F0aGVyLmdldExvY2FsQ2FuZGlkYXRlcyBzdGlsbCBlcnJvcnMgaW5cbiAgICAgICAgLy8gICAgIEVkZ2UgMTA1NDcgd2hlbiBubyBjYW5kaWRhdGVzIGhhdmUgYmVlbiBnYXRoZXJlZCB5ZXQuXG5cbiAgICAgICAgaWYgKHNlbGYub25pY2VjYW5kaWRhdGUgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBFbWl0IGNhbmRpZGF0ZSBpZiBsb2NhbERlc2NyaXB0aW9uIGlzIHNldC5cbiAgICAgICAgICAvLyBBbHNvIGVtaXRzIG51bGwgY2FuZGlkYXRlIHdoZW4gYWxsIGdhdGhlcmVycyBhcmUgY29tcGxldGUuXG4gICAgICAgICAgaWYgKHNlbGYubG9jYWxEZXNjcmlwdGlvbiAmJiBzZWxmLmxvY2FsRGVzY3JpcHRpb24udHlwZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHNlbGYuX2xvY2FsSWNlQ2FuZGlkYXRlc0J1ZmZlci5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgICBzZWxmLl9sb2NhbEljZUNhbmRpZGF0ZXNCdWZmZXIucHVzaCh7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgIHNlbGYub25pY2VjYW5kaWRhdGUoe30pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGljZVRyYW5zcG9ydC5vbmljZXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuX3VwZGF0ZUNvbm5lY3Rpb25TdGF0ZSgpO1xuICAgICAgfTtcblxuICAgICAgdmFyIGR0bHNUcmFuc3BvcnQgPSBuZXcgUlRDRHRsc1RyYW5zcG9ydChpY2VUcmFuc3BvcnQpO1xuICAgICAgZHRsc1RyYW5zcG9ydC5vbmR0bHNzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLl91cGRhdGVDb25uZWN0aW9uU3RhdGUoKTtcbiAgICAgIH07XG4gICAgICBkdGxzVHJhbnNwb3J0Lm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gb25lcnJvciBkb2VzIG5vdCBzZXQgc3RhdGUgdG8gZmFpbGVkIGJ5IGl0c2VsZi5cbiAgICAgICAgZHRsc1RyYW5zcG9ydC5zdGF0ZSA9ICdmYWlsZWQnO1xuICAgICAgICBzZWxmLl91cGRhdGVDb25uZWN0aW9uU3RhdGUoKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGljZUdhdGhlcmVyOiBpY2VHYXRoZXJlcixcbiAgICAgICAgaWNlVHJhbnNwb3J0OiBpY2VUcmFuc3BvcnQsXG4gICAgICAgIGR0bHNUcmFuc3BvcnQ6IGR0bHNUcmFuc3BvcnRcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IHRoZSBSVFAgU2VuZGVyIGFuZCBSZWNlaXZlciBmb3IgYSB0cmFuc2NlaXZlci5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl90cmFuc2NlaXZlID0gZnVuY3Rpb24odHJhbnNjZWl2ZXIsXG4gICAgICAgIHNlbmQsIHJlY3YpIHtcbiAgICAgIHZhciBwYXJhbXMgPSB0aGlzLl9nZXRDb21tb25DYXBhYmlsaXRpZXModHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzKTtcbiAgICAgIGlmIChzZW5kICYmIHRyYW5zY2VpdmVyLnJ0cFNlbmRlcikge1xuICAgICAgICBwYXJhbXMuZW5jb2RpbmdzID0gW3tcbiAgICAgICAgICBzc3JjOiB0cmFuc2NlaXZlci5zZW5kU3NyY1xuICAgICAgICB9XTtcbiAgICAgICAgcGFyYW1zLnJ0Y3AgPSB7XG4gICAgICAgICAgY25hbWU6IGxvY2FsQ05hbWUsXG4gICAgICAgICAgc3NyYzogdHJhbnNjZWl2ZXIucmVjdlNzcmNcbiAgICAgICAgfTtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnNlbmQocGFyYW1zKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZWN2ICYmIHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyKSB7XG4gICAgICAgIHBhcmFtcy5lbmNvZGluZ3MgPSBbe1xuICAgICAgICAgIHNzcmM6IHRyYW5zY2VpdmVyLnJlY3ZTc3JjXG4gICAgICAgIH1dO1xuICAgICAgICBwYXJhbXMucnRjcCA9IHtcbiAgICAgICAgICBjbmFtZTogdHJhbnNjZWl2ZXIuY25hbWUsXG4gICAgICAgICAgc3NyYzogdHJhbnNjZWl2ZXIuc2VuZFNzcmNcbiAgICAgICAgfTtcbiAgICAgICAgdHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIucmVjZWl2ZShwYXJhbXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLnNldExvY2FsRGVzY3JpcHRpb24gPVxuICAgICAgICBmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdvZmZlcicpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wZW5kaW5nT2ZmZXIpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRyYW5zY2VpdmVycyA9IHRoaXMuX3BlbmRpbmdPZmZlcjtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fcGVuZGluZ09mZmVyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uLnR5cGUgPT09ICdhbnN3ZXInKSB7XG4gICAgICAgIHZhciBzZWN0aW9ucyA9IFNEUFV0aWxzLnNwbGl0U2VjdGlvbnMoc2VsZi5yZW1vdGVEZXNjcmlwdGlvbi5zZHApO1xuICAgICAgICB2YXIgc2Vzc2lvbnBhcnQgPSBzZWN0aW9ucy5zaGlmdCgpO1xuICAgICAgICBzZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKG1lZGlhU2VjdGlvbiwgc2RwTUxpbmVJbmRleCkge1xuICAgICAgICAgIHZhciB0cmFuc2NlaXZlciA9IHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdO1xuICAgICAgICAgIHZhciBpY2VHYXRoZXJlciA9IHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyO1xuICAgICAgICAgIHZhciBpY2VUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5pY2VUcmFuc3BvcnQ7XG4gICAgICAgICAgdmFyIGR0bHNUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0O1xuICAgICAgICAgIHZhciBsb2NhbENhcGFiaWxpdGllcyA9IHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzO1xuICAgICAgICAgIHZhciByZW1vdGVDYXBhYmlsaXRpZXMgPSB0cmFuc2NlaXZlci5yZW1vdGVDYXBhYmlsaXRpZXM7XG4gICAgICAgICAgdmFyIHJlamVjdGVkID0gbWVkaWFTZWN0aW9uLnNwbGl0KCdcXG4nLCAxKVswXVxuICAgICAgICAgICAgICAuc3BsaXQoJyAnLCAyKVsxXSA9PT0gJzAnO1xuXG4gICAgICAgICAgaWYgKCFyZWplY3RlZCkge1xuICAgICAgICAgICAgdmFyIHJlbW90ZUljZVBhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgICAgICBzZXNzaW9ucGFydCk7XG4gICAgICAgICAgICBpY2VUcmFuc3BvcnQuc3RhcnQoaWNlR2F0aGVyZXIsIHJlbW90ZUljZVBhcmFtZXRlcnMsICdjb250cm9sbGVkJyk7XG5cbiAgICAgICAgICAgIHZhciByZW1vdGVEdGxzUGFyYW1ldGVycyA9IFNEUFV0aWxzLmdldER0bHNQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgICAgc2Vzc2lvbnBhcnQpO1xuICAgICAgICAgICAgZHRsc1RyYW5zcG9ydC5zdGFydChyZW1vdGVEdGxzUGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBpbnRlcnNlY3Rpb24gb2YgY2FwYWJpbGl0aWVzLlxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHNlbGYuX2dldENvbW1vbkNhcGFiaWxpdGllcyhsb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgICAgICAgICByZW1vdGVDYXBhYmlsaXRpZXMpO1xuXG4gICAgICAgICAgICAvLyBTdGFydCB0aGUgUlRDUnRwU2VuZGVyLiBUaGUgUlRDUnRwUmVjZWl2ZXIgZm9yIHRoaXMgdHJhbnNjZWl2ZXJcbiAgICAgICAgICAgIC8vIGhhcyBhbHJlYWR5IGJlZW4gc3RhcnRlZCBpbiBzZXRSZW1vdGVEZXNjcmlwdGlvbi5cbiAgICAgICAgICAgIHNlbGYuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICAgICAgcGFyYW1zLmNvZGVjcy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgIGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxvY2FsRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHN3aXRjaCAoZGVzY3JpcHRpb24udHlwZSkge1xuICAgICAgICBjYXNlICdvZmZlcic6XG4gICAgICAgICAgdGhpcy5fdXBkYXRlU2lnbmFsaW5nU3RhdGUoJ2hhdmUtbG9jYWwtb2ZmZXInKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYW5zd2VyJzpcbiAgICAgICAgICB0aGlzLl91cGRhdGVTaWduYWxpbmdTdGF0ZSgnc3RhYmxlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndW5zdXBwb3J0ZWQgdHlwZSBcIicgKyBkZXNjcmlwdGlvbi50eXBlICsgJ1wiJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGEgc3VjY2VzcyBjYWxsYmFjayB3YXMgcHJvdmlkZWQsIGVtaXQgSUNFIGNhbmRpZGF0ZXMgYWZ0ZXIgaXQgaGFzIGJlZW5cbiAgICAgIC8vIGV4ZWN1dGVkLiBPdGhlcndpc2UsIGVtaXQgY2FsbGJhY2sgYWZ0ZXIgdGhlIFByb21pc2UgaXMgcmVzb2x2ZWQuXG4gICAgICB2YXIgaGFzQ2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJlxuICAgICAgICB0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnZnVuY3Rpb24nO1xuICAgICAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgICAgIHZhciBjYiA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2IoKTtcbiAgICAgICAgICBzZWxmLl9lbWl0QnVmZmVyZWRDYW5kaWRhdGVzKCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgICAgdmFyIHAgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIHAudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCFoYXNDYWxsYmFjaykge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KHNlbGYuX2VtaXRCdWZmZXJlZENhbmRpZGF0ZXMuYmluZChzZWxmKSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHA7XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuc2V0UmVtb3RlRGVzY3JpcHRpb24gPVxuICAgICAgICBmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHN0cmVhbSA9IG5ldyBNZWRpYVN0cmVhbSgpO1xuICAgICAgdmFyIHNlY3Rpb25zID0gU0RQVXRpbHMuc3BsaXRTZWN0aW9ucyhkZXNjcmlwdGlvbi5zZHApO1xuICAgICAgdmFyIHNlc3Npb25wYXJ0ID0gc2VjdGlvbnMuc2hpZnQoKTtcbiAgICAgIHNlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24obWVkaWFTZWN0aW9uLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAgIHZhciBsaW5lcyA9IFNEUFV0aWxzLnNwbGl0TGluZXMobWVkaWFTZWN0aW9uKTtcbiAgICAgICAgdmFyIG1saW5lID0gbGluZXNbMF0uc3Vic3RyKDIpLnNwbGl0KCcgJyk7XG4gICAgICAgIHZhciBraW5kID0gbWxpbmVbMF07XG4gICAgICAgIHZhciByZWplY3RlZCA9IG1saW5lWzFdID09PSAnMCc7XG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBTRFBVdGlscy5nZXREaXJlY3Rpb24obWVkaWFTZWN0aW9uLCBzZXNzaW9ucGFydCk7XG5cbiAgICAgICAgdmFyIHRyYW5zY2VpdmVyO1xuICAgICAgICB2YXIgaWNlR2F0aGVyZXI7XG4gICAgICAgIHZhciBpY2VUcmFuc3BvcnQ7XG4gICAgICAgIHZhciBkdGxzVHJhbnNwb3J0O1xuICAgICAgICB2YXIgcnRwU2VuZGVyO1xuICAgICAgICB2YXIgcnRwUmVjZWl2ZXI7XG4gICAgICAgIHZhciBzZW5kU3NyYztcbiAgICAgICAgdmFyIHJlY3ZTc3JjO1xuICAgICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXM7XG5cbiAgICAgICAgLy8gRklYTUU6IGVuc3VyZSB0aGUgbWVkaWFTZWN0aW9uIGhhcyBydGNwLW11eCBzZXQuXG4gICAgICAgIHZhciByZW1vdGVDYXBhYmlsaXRpZXMgPSBTRFBVdGlscy5wYXJzZVJ0cFBhcmFtZXRlcnMobWVkaWFTZWN0aW9uKTtcbiAgICAgICAgdmFyIHJlbW90ZUljZVBhcmFtZXRlcnM7XG4gICAgICAgIHZhciByZW1vdGVEdGxzUGFyYW1ldGVycztcbiAgICAgICAgaWYgKCFyZWplY3RlZCkge1xuICAgICAgICAgIHJlbW90ZUljZVBhcmFtZXRlcnMgPSBTRFBVdGlscy5nZXRJY2VQYXJhbWV0ZXJzKG1lZGlhU2VjdGlvbixcbiAgICAgICAgICAgICAgc2Vzc2lvbnBhcnQpO1xuICAgICAgICAgIHJlbW90ZUR0bHNQYXJhbWV0ZXJzID0gU0RQVXRpbHMuZ2V0RHRsc1BhcmFtZXRlcnMobWVkaWFTZWN0aW9uLFxuICAgICAgICAgICAgICBzZXNzaW9ucGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pZCA9IFNEUFV0aWxzLm1hdGNoUHJlZml4KG1lZGlhU2VjdGlvbiwgJ2E9bWlkOicpWzBdLnN1YnN0cig2KTtcblxuICAgICAgICB2YXIgY25hbWU7XG4gICAgICAgIC8vIEdldHMgdGhlIGZpcnN0IFNTUkMuIE5vdGUgdGhhdCB3aXRoIFJUWCB0aGVyZSBtaWdodCBiZSBtdWx0aXBsZSBTU1JDcy5cbiAgICAgICAgdmFyIHJlbW90ZVNzcmMgPSBTRFBVdGlscy5tYXRjaFByZWZpeChtZWRpYVNlY3Rpb24sICdhPXNzcmM6JylcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgICByZXR1cm4gU0RQVXRpbHMucGFyc2VTc3JjTWVkaWEobGluZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbihvYmopIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9iai5hdHRyaWJ1dGUgPT09ICdjbmFtZSc7XG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgaWYgKHJlbW90ZVNzcmMpIHtcbiAgICAgICAgICByZWN2U3NyYyA9IHBhcnNlSW50KHJlbW90ZVNzcmMuc3NyYywgMTApO1xuICAgICAgICAgIGNuYW1lID0gcmVtb3RlU3NyYy52YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInKSB7XG4gICAgICAgICAgdmFyIHRyYW5zcG9ydHMgPSBzZWxmLl9jcmVhdGVJY2VBbmREdGxzVHJhbnNwb3J0cyhtaWQsIHNkcE1MaW5lSW5kZXgpO1xuXG4gICAgICAgICAgbG9jYWxDYXBhYmlsaXRpZXMgPSBSVENSdHBSZWNlaXZlci5nZXRDYXBhYmlsaXRpZXMoa2luZCk7XG4gICAgICAgICAgc2VuZFNzcmMgPSAoMiAqIHNkcE1MaW5lSW5kZXggKyAyKSAqIDEwMDE7XG5cbiAgICAgICAgICBydHBSZWNlaXZlciA9IG5ldyBSVENSdHBSZWNlaXZlcih0cmFuc3BvcnRzLmR0bHNUcmFuc3BvcnQsIGtpbmQpO1xuXG4gICAgICAgICAgLy8gRklYTUU6IG5vdCBjb3JyZWN0IHdoZW4gdGhlcmUgYXJlIG11bHRpcGxlIHN0cmVhbXMgYnV0IHRoYXQgaXNcbiAgICAgICAgICAvLyBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBpbiB0aGlzIHNoaW0uXG4gICAgICAgICAgc3RyZWFtLmFkZFRyYWNrKHJ0cFJlY2VpdmVyLnRyYWNrKTtcblxuICAgICAgICAgIC8vIEZJWE1FOiBsb29rIGF0IGRpcmVjdGlvbi5cbiAgICAgICAgICBpZiAoc2VsZi5sb2NhbFN0cmVhbXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICBzZWxmLmxvY2FsU3RyZWFtc1swXS5nZXRUcmFja3MoKS5sZW5ndGggPj0gc2RwTUxpbmVJbmRleCkge1xuICAgICAgICAgICAgLy8gRklYTUU6IGFjdHVhbGx5IG1vcmUgY29tcGxpY2F0ZWQsIG5lZWRzIHRvIG1hdGNoIHR5cGVzIGV0Y1xuICAgICAgICAgICAgdmFyIGxvY2FsdHJhY2sgPSBzZWxmLmxvY2FsU3RyZWFtc1swXS5nZXRUcmFja3MoKVtzZHBNTGluZUluZGV4XTtcbiAgICAgICAgICAgIHJ0cFNlbmRlciA9IG5ldyBSVENSdHBTZW5kZXIobG9jYWx0cmFjaywgdHJhbnNwb3J0cy5kdGxzVHJhbnNwb3J0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSA9IHtcbiAgICAgICAgICAgIGljZUdhdGhlcmVyOiB0cmFuc3BvcnRzLmljZUdhdGhlcmVyLFxuICAgICAgICAgICAgaWNlVHJhbnNwb3J0OiB0cmFuc3BvcnRzLmljZVRyYW5zcG9ydCxcbiAgICAgICAgICAgIGR0bHNUcmFuc3BvcnQ6IHRyYW5zcG9ydHMuZHRsc1RyYW5zcG9ydCxcbiAgICAgICAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzOiBsb2NhbENhcGFiaWxpdGllcyxcbiAgICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllczogcmVtb3RlQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgcnRwU2VuZGVyOiBydHBTZW5kZXIsXG4gICAgICAgICAgICBydHBSZWNlaXZlcjogcnRwUmVjZWl2ZXIsXG4gICAgICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICAgICAgbWlkOiBtaWQsXG4gICAgICAgICAgICBjbmFtZTogY25hbWUsXG4gICAgICAgICAgICBzZW5kU3NyYzogc2VuZFNzcmMsXG4gICAgICAgICAgICByZWN2U3NyYzogcmVjdlNzcmNcbiAgICAgICAgICB9O1xuICAgICAgICAgIC8vIFN0YXJ0IHRoZSBSVENSdHBSZWNlaXZlciBub3cuIFRoZSBSVFBTZW5kZXIgaXMgc3RhcnRlZCBpbiBzZXRMb2NhbERlc2NyaXB0aW9uLlxuICAgICAgICAgIHNlbGYuX3RyYW5zY2VpdmUoc2VsZi50cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF0sXG4gICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKTtcbiAgICAgICAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbi50eXBlID09PSAnYW5zd2VyJyAmJiAhcmVqZWN0ZWQpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlciA9IHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdO1xuICAgICAgICAgIGljZUdhdGhlcmVyID0gdHJhbnNjZWl2ZXIuaWNlR2F0aGVyZXI7XG4gICAgICAgICAgaWNlVHJhbnNwb3J0ID0gdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0O1xuICAgICAgICAgIGR0bHNUcmFuc3BvcnQgPSB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0O1xuICAgICAgICAgIHJ0cFNlbmRlciA9IHRyYW5zY2VpdmVyLnJ0cFNlbmRlcjtcbiAgICAgICAgICBydHBSZWNlaXZlciA9IHRyYW5zY2VpdmVyLnJ0cFJlY2VpdmVyO1xuICAgICAgICAgIHNlbmRTc3JjID0gdHJhbnNjZWl2ZXIuc2VuZFNzcmM7XG4gICAgICAgICAgLy9yZWN2U3NyYyA9IHRyYW5zY2VpdmVyLnJlY3ZTc3JjO1xuICAgICAgICAgIGxvY2FsQ2FwYWJpbGl0aWVzID0gdHJhbnNjZWl2ZXIubG9jYWxDYXBhYmlsaXRpZXM7XG5cbiAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5yZWN2U3NyYyA9IHJlY3ZTc3JjO1xuICAgICAgICAgIHNlbGYudHJhbnNjZWl2ZXJzW3NkcE1MaW5lSW5kZXhdLnJlbW90ZUNhcGFiaWxpdGllcyA9XG4gICAgICAgICAgICAgIHJlbW90ZUNhcGFiaWxpdGllcztcbiAgICAgICAgICBzZWxmLnRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XS5jbmFtZSA9IGNuYW1lO1xuXG4gICAgICAgICAgaWNlVHJhbnNwb3J0LnN0YXJ0KGljZUdhdGhlcmVyLCByZW1vdGVJY2VQYXJhbWV0ZXJzLCAnY29udHJvbGxpbmcnKTtcbiAgICAgICAgICBkdGxzVHJhbnNwb3J0LnN0YXJ0KHJlbW90ZUR0bHNQYXJhbWV0ZXJzKTtcblxuICAgICAgICAgIHNlbGYuX3RyYW5zY2VpdmUodHJhbnNjZWl2ZXIsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ3NlbmRyZWN2JyB8fCBkaXJlY3Rpb24gPT09ICdyZWN2b25seScsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gJ3NlbmRyZWN2JyB8fCBkaXJlY3Rpb24gPT09ICdzZW5kb25seScpO1xuXG4gICAgICAgICAgaWYgKHJ0cFJlY2VpdmVyICYmXG4gICAgICAgICAgICAgIChkaXJlY3Rpb24gPT09ICdzZW5kcmVjdicgfHwgZGlyZWN0aW9uID09PSAnc2VuZG9ubHknKSkge1xuICAgICAgICAgICAgc3RyZWFtLmFkZFRyYWNrKHJ0cFJlY2VpdmVyLnRyYWNrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRklYTUU6IGFjdHVhbGx5IHRoZSByZWNlaXZlciBzaG91bGQgYmUgY3JlYXRlZCBsYXRlci5cbiAgICAgICAgICAgIGRlbGV0ZSB0cmFuc2NlaXZlci5ydHBSZWNlaXZlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbW90ZURlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICBzd2l0Y2ggKGRlc2NyaXB0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnb2ZmZXInOlxuICAgICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdoYXZlLXJlbW90ZS1vZmZlcicpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhbnN3ZXInOlxuICAgICAgICAgIHRoaXMuX3VwZGF0ZVNpZ25hbGluZ1N0YXRlKCdzdGFibGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd1bnN1cHBvcnRlZCB0eXBlIFwiJyArIGRlc2NyaXB0aW9uLnR5cGUgKyAnXCInKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoc2VsZi5vbmFkZHN0cmVhbSAhPT0gbnVsbCAmJiBzdHJlYW0uZ2V0VHJhY2tzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZi5yZW1vdGVTdHJlYW1zLnB1c2goc3RyZWFtKTtcbiAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYub25hZGRzdHJlYW0oe3N0cmVhbTogc3RyZWFtfSk7XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIHR5cGVvZiBhcmd1bWVudHNbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzFdLCAwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICAvKiBub3QgeWV0XG4gICAgICAgIGlmICh0cmFuc2NlaXZlci5pY2VHYXRoZXJlcikge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLmljZUdhdGhlcmVyLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydCkge1xuICAgICAgICAgIHRyYW5zY2VpdmVyLmljZVRyYW5zcG9ydC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYW5zY2VpdmVyLmR0bHNUcmFuc3BvcnQpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5kdGxzVHJhbnNwb3J0LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNjZWl2ZXIucnRwU2VuZGVyKSB7XG4gICAgICAgICAgdHJhbnNjZWl2ZXIucnRwU2VuZGVyLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNjZWl2ZXIucnRwUmVjZWl2ZXIpIHtcbiAgICAgICAgICB0cmFuc2NlaXZlci5ydHBSZWNlaXZlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gRklYTUU6IGNsZWFuIHVwIHRyYWNrcywgbG9jYWwgc3RyZWFtcywgcmVtb3RlIHN0cmVhbXMsIGV0Y1xuICAgICAgdGhpcy5fdXBkYXRlU2lnbmFsaW5nU3RhdGUoJ2Nsb3NlZCcpO1xuICAgIH07XG5cbiAgICAvLyBVcGRhdGUgdGhlIHNpZ25hbGluZyBzdGF0ZS5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVTaWduYWxpbmdTdGF0ZSA9XG4gICAgICAgIGZ1bmN0aW9uKG5ld1N0YXRlKSB7XG4gICAgICB0aGlzLnNpZ25hbGluZ1N0YXRlID0gbmV3U3RhdGU7XG4gICAgICBpZiAodGhpcy5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMub25zaWduYWxpbmdzdGF0ZWNoYW5nZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0byBmaXJlIHRoZSBuZWdvdGlhdGlvbm5lZWRlZCBldmVudC5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl9tYXliZUZpcmVOZWdvdGlhdGlvbk5lZWRlZCA9XG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gRmlyZSBhd2F5IChmb3Igbm93KS5cbiAgICAgIGlmICh0aGlzLm9ubmVnb3RpYXRpb25uZWVkZWQgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5vbm5lZ290aWF0aW9ubmVlZGVkKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY29ubmVjdGlvbiBzdGF0ZS5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLl91cGRhdGVDb25uZWN0aW9uU3RhdGUgPVxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBuZXdTdGF0ZTtcbiAgICAgIHZhciBzdGF0ZXMgPSB7XG4gICAgICAgICduZXcnOiAwLFxuICAgICAgICBjbG9zZWQ6IDAsXG4gICAgICAgIGNvbm5lY3Rpbmc6IDAsXG4gICAgICAgIGNoZWNraW5nOiAwLFxuICAgICAgICBjb25uZWN0ZWQ6IDAsXG4gICAgICAgIGNvbXBsZXRlZDogMCxcbiAgICAgICAgZmFpbGVkOiAwXG4gICAgICB9O1xuICAgICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICBzdGF0ZXNbdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LnN0YXRlXSsrO1xuICAgICAgICBzdGF0ZXNbdHJhbnNjZWl2ZXIuZHRsc1RyYW5zcG9ydC5zdGF0ZV0rKztcbiAgICAgIH0pO1xuICAgICAgLy8gSUNFVHJhbnNwb3J0LmNvbXBsZXRlZCBhbmQgY29ubmVjdGVkIGFyZSB0aGUgc2FtZSBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgc3RhdGVzLmNvbm5lY3RlZCArPSBzdGF0ZXMuY29tcGxldGVkO1xuXG4gICAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgICAgaWYgKHN0YXRlcy5mYWlsZWQgPiAwKSB7XG4gICAgICAgIG5ld1N0YXRlID0gJ2ZhaWxlZCc7XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlcy5jb25uZWN0aW5nID4gMCB8fCBzdGF0ZXMuY2hlY2tpbmcgPiAwKSB7XG4gICAgICAgIG5ld1N0YXRlID0gJ2Nvbm5lY3RpbmcnO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZXMuZGlzY29ubmVjdGVkID4gMCkge1xuICAgICAgICBuZXdTdGF0ZSA9ICdkaXNjb25uZWN0ZWQnO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZXMubmV3ID4gMCkge1xuICAgICAgICBuZXdTdGF0ZSA9ICduZXcnO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZXMuY29ubmVjdGluZyA+IDAgfHwgc3RhdGVzLmNvbXBsZXRlZCA+IDApIHtcbiAgICAgICAgbmV3U3RhdGUgPSAnY29ubmVjdGVkJztcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1N0YXRlICE9PSBzZWxmLmljZUNvbm5lY3Rpb25TdGF0ZSkge1xuICAgICAgICBzZWxmLmljZUNvbm5lY3Rpb25TdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICBpZiAodGhpcy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMub25pY2Vjb25uZWN0aW9uc3RhdGVjaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24ucHJvdG90eXBlLmNyZWF0ZU9mZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBpZiAodGhpcy5fcGVuZGluZ09mZmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlT2ZmZXIgY2FsbGVkIHdoaWxlIHRoZXJlIGlzIGEgcGVuZGluZyBvZmZlci4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBvZmZlck9wdGlvbnM7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9mZmVyT3B0aW9ucyA9IGFyZ3VtZW50c1swXTtcbiAgICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBvZmZlck9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFja3MgPSBbXTtcbiAgICAgIHZhciBudW1BdWRpb1RyYWNrcyA9IDA7XG4gICAgICB2YXIgbnVtVmlkZW9UcmFja3MgPSAwO1xuICAgICAgLy8gRGVmYXVsdCB0byBzZW5kcmVjdi5cbiAgICAgIGlmICh0aGlzLmxvY2FsU3RyZWFtcy5sZW5ndGgpIHtcbiAgICAgICAgbnVtQXVkaW9UcmFja3MgPSB0aGlzLmxvY2FsU3RyZWFtc1swXS5nZXRBdWRpb1RyYWNrcygpLmxlbmd0aDtcbiAgICAgICAgbnVtVmlkZW9UcmFja3MgPSB0aGlzLmxvY2FsU3RyZWFtc1swXS5nZXRWaWRlb1RyYWNrcygpLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIC8vIERldGVybWluZSBudW1iZXIgb2YgYXVkaW8gYW5kIHZpZGVvIHRyYWNrcyB3ZSBuZWVkIHRvIHNlbmQvcmVjdi5cbiAgICAgIGlmIChvZmZlck9wdGlvbnMpIHtcbiAgICAgICAgLy8gUmVqZWN0IENocm9tZSBsZWdhY3kgY29uc3RyYWludHMuXG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMubWFuZGF0b3J5IHx8IG9mZmVyT3B0aW9ucy5vcHRpb25hbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgICdMZWdhY3kgbWFuZGF0b3J5L29wdGlvbmFsIGNvbnN0cmFpbnRzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZUF1ZGlvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBudW1BdWRpb1RyYWNrcyA9IG9mZmVyT3B0aW9ucy5vZmZlclRvUmVjZWl2ZUF1ZGlvO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbnVtVmlkZW9UcmFja3MgPSBvZmZlck9wdGlvbnMub2ZmZXJUb1JlY2VpdmVWaWRlbztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubG9jYWxTdHJlYW1zLmxlbmd0aCkge1xuICAgICAgICAvLyBQdXNoIGxvY2FsIHN0cmVhbXMuXG4gICAgICAgIHRoaXMubG9jYWxTdHJlYW1zWzBdLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICB0cmFja3MucHVzaCh7XG4gICAgICAgICAgICBraW5kOiB0cmFjay5raW5kLFxuICAgICAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgICAgICAgd2FudFJlY2VpdmU6IHRyYWNrLmtpbmQgPT09ICdhdWRpbycgP1xuICAgICAgICAgICAgICAgIG51bUF1ZGlvVHJhY2tzID4gMCA6IG51bVZpZGVvVHJhY2tzID4gMFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICh0cmFjay5raW5kID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICBudW1BdWRpb1RyYWNrcy0tO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHJhY2sua2luZCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgbnVtVmlkZW9UcmFja3MtLTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gQ3JlYXRlIE0tbGluZXMgZm9yIHJlY3Zvbmx5IHN0cmVhbXMuXG4gICAgICB3aGlsZSAobnVtQXVkaW9UcmFja3MgPiAwIHx8IG51bVZpZGVvVHJhY2tzID4gMCkge1xuICAgICAgICBpZiAobnVtQXVkaW9UcmFja3MgPiAwKSB7XG4gICAgICAgICAgdHJhY2tzLnB1c2goe1xuICAgICAgICAgICAga2luZDogJ2F1ZGlvJyxcbiAgICAgICAgICAgIHdhbnRSZWNlaXZlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbnVtQXVkaW9UcmFja3MtLTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtVmlkZW9UcmFja3MgPiAwKSB7XG4gICAgICAgICAgdHJhY2tzLnB1c2goe1xuICAgICAgICAgICAga2luZDogJ3ZpZGVvJyxcbiAgICAgICAgICAgIHdhbnRSZWNlaXZlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbnVtVmlkZW9UcmFja3MtLTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgc2RwID0gU0RQVXRpbHMud3JpdGVTZXNzaW9uQm9pbGVycGxhdGUoKTtcbiAgICAgIHZhciB0cmFuc2NlaXZlcnMgPSBbXTtcbiAgICAgIHRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKG1saW5lLCBzZHBNTGluZUluZGV4KSB7XG4gICAgICAgIC8vIEZvciBlYWNoIHRyYWNrLCBjcmVhdGUgYW4gaWNlIGdhdGhlcmVyLCBpY2UgdHJhbnNwb3J0LCBkdGxzIHRyYW5zcG9ydCxcbiAgICAgICAgLy8gcG90ZW50aWFsbHkgcnRwc2VuZGVyIGFuZCBydHByZWNlaXZlci5cbiAgICAgICAgdmFyIHRyYWNrID0gbWxpbmUudHJhY2s7XG4gICAgICAgIHZhciBraW5kID0gbWxpbmUua2luZDtcbiAgICAgICAgdmFyIG1pZCA9IGdlbmVyYXRlSWRlbnRpZmllcigpO1xuXG4gICAgICAgIHZhciB0cmFuc3BvcnRzID0gc2VsZi5fY3JlYXRlSWNlQW5kRHRsc1RyYW5zcG9ydHMobWlkLCBzZHBNTGluZUluZGV4KTtcblxuICAgICAgICB2YXIgbG9jYWxDYXBhYmlsaXRpZXMgPSBSVENSdHBTZW5kZXIuZ2V0Q2FwYWJpbGl0aWVzKGtpbmQpO1xuICAgICAgICB2YXIgcnRwU2VuZGVyO1xuICAgICAgICB2YXIgcnRwUmVjZWl2ZXI7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgYW4gc3NyYyBub3csIHRvIGJlIHVzZWQgbGF0ZXIgaW4gcnRwU2VuZGVyLnNlbmRcbiAgICAgICAgdmFyIHNlbmRTc3JjID0gKDIgKiBzZHBNTGluZUluZGV4ICsgMSkgKiAxMDAxO1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICBydHBTZW5kZXIgPSBuZXcgUlRDUnRwU2VuZGVyKHRyYWNrLCB0cmFuc3BvcnRzLmR0bHNUcmFuc3BvcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1saW5lLndhbnRSZWNlaXZlKSB7XG4gICAgICAgICAgcnRwUmVjZWl2ZXIgPSBuZXcgUlRDUnRwUmVjZWl2ZXIodHJhbnNwb3J0cy5kdGxzVHJhbnNwb3J0LCBraW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zY2VpdmVyc1tzZHBNTGluZUluZGV4XSA9IHtcbiAgICAgICAgICBpY2VHYXRoZXJlcjogdHJhbnNwb3J0cy5pY2VHYXRoZXJlcixcbiAgICAgICAgICBpY2VUcmFuc3BvcnQ6IHRyYW5zcG9ydHMuaWNlVHJhbnNwb3J0LFxuICAgICAgICAgIGR0bHNUcmFuc3BvcnQ6IHRyYW5zcG9ydHMuZHRsc1RyYW5zcG9ydCxcbiAgICAgICAgICBsb2NhbENhcGFiaWxpdGllczogbG9jYWxDYXBhYmlsaXRpZXMsXG4gICAgICAgICAgcmVtb3RlQ2FwYWJpbGl0aWVzOiBudWxsLFxuICAgICAgICAgIHJ0cFNlbmRlcjogcnRwU2VuZGVyLFxuICAgICAgICAgIHJ0cFJlY2VpdmVyOiBydHBSZWNlaXZlcixcbiAgICAgICAgICBraW5kOiBraW5kLFxuICAgICAgICAgIG1pZDogbWlkLFxuICAgICAgICAgIHNlbmRTc3JjOiBzZW5kU3NyYyxcbiAgICAgICAgICByZWN2U3NyYzogbnVsbFxuICAgICAgICB9O1xuICAgICAgICB2YXIgdHJhbnNjZWl2ZXIgPSB0cmFuc2NlaXZlcnNbc2RwTUxpbmVJbmRleF07XG4gICAgICAgIHNkcCArPSBTRFBVdGlscy53cml0ZU1lZGlhU2VjdGlvbih0cmFuc2NlaXZlcixcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLCAnb2ZmZXInLCBzZWxmLmxvY2FsU3RyZWFtc1swXSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fcGVuZGluZ09mZmVyID0gdHJhbnNjZWl2ZXJzO1xuICAgICAgdmFyIGRlc2MgPSBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHtcbiAgICAgICAgdHlwZTogJ29mZmVyJyxcbiAgICAgICAgc2RwOiBzZHBcbiAgICAgIH0pO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChhcmd1bWVudHNbMF0sIDAsIGRlc2MpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZXNjKTtcbiAgICB9O1xuXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZS5jcmVhdGVBbnN3ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhbnN3ZXJPcHRpb25zO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhbnN3ZXJPcHRpb25zID0gYXJndW1lbnRzWzBdO1xuICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGFuc3dlck9wdGlvbnMgPSBhcmd1bWVudHNbMl07XG4gICAgICB9XG5cbiAgICAgIHZhciBzZHAgPSBTRFBVdGlscy53cml0ZVNlc3Npb25Cb2lsZXJwbGF0ZSgpO1xuICAgICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICAvLyBDYWxjdWxhdGUgaW50ZXJzZWN0aW9uIG9mIGNhcGFiaWxpdGllcy5cbiAgICAgICAgdmFyIGNvbW1vbkNhcGFiaWxpdGllcyA9IHNlbGYuX2dldENvbW1vbkNhcGFiaWxpdGllcyhcbiAgICAgICAgICAgIHRyYW5zY2VpdmVyLmxvY2FsQ2FwYWJpbGl0aWVzLFxuICAgICAgICAgICAgdHJhbnNjZWl2ZXIucmVtb3RlQ2FwYWJpbGl0aWVzKTtcblxuICAgICAgICBzZHAgKz0gU0RQVXRpbHMud3JpdGVNZWRpYVNlY3Rpb24odHJhbnNjZWl2ZXIsIGNvbW1vbkNhcGFiaWxpdGllcyxcbiAgICAgICAgICAgICdhbnN3ZXInLCBzZWxmLmxvY2FsU3RyZWFtc1swXSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGRlc2MgPSBuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKHtcbiAgICAgICAgdHlwZTogJ2Fuc3dlcicsXG4gICAgICAgIHNkcDogc2RwXG4gICAgICB9KTtcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoYXJndW1lbnRzWzBdLCAwLCBkZXNjKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZGVzYyk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gICAgICB2YXIgbUxpbmVJbmRleCA9IGNhbmRpZGF0ZS5zZHBNTGluZUluZGV4O1xuICAgICAgaWYgKGNhbmRpZGF0ZS5zZHBNaWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRyYW5zY2VpdmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICh0aGlzLnRyYW5zY2VpdmVyc1tpXS5taWQgPT09IGNhbmRpZGF0ZS5zZHBNaWQpIHtcbiAgICAgICAgICAgIG1MaW5lSW5kZXggPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgdHJhbnNjZWl2ZXIgPSB0aGlzLnRyYW5zY2VpdmVyc1ttTGluZUluZGV4XTtcbiAgICAgIGlmICh0cmFuc2NlaXZlcikge1xuICAgICAgICB2YXIgY2FuZCA9IE9iamVjdC5rZXlzKGNhbmRpZGF0ZS5jYW5kaWRhdGUpLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgU0RQVXRpbHMucGFyc2VDYW5kaWRhdGUoY2FuZGlkYXRlLmNhbmRpZGF0ZSkgOiB7fTtcbiAgICAgICAgLy8gSWdub3JlIENocm9tZSdzIGludmFsaWQgY2FuZGlkYXRlcyBzaW5jZSBFZGdlIGRvZXMgbm90IGxpa2UgdGhlbS5cbiAgICAgICAgaWYgKGNhbmQucHJvdG9jb2wgPT09ICd0Y3AnICYmIGNhbmQucG9ydCA9PT0gMCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZ25vcmUgUlRDUCBjYW5kaWRhdGVzLCB3ZSBhc3N1bWUgUlRDUC1NVVguXG4gICAgICAgIGlmIChjYW5kLmNvbXBvbmVudCAhPT0gJzEnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEEgZGlydHkgaGFjayB0byBtYWtlIHNhbXBsZXMgd29yay5cbiAgICAgICAgaWYgKGNhbmQudHlwZSA9PT0gJ2VuZE9mQ2FuZGlkYXRlcycpIHtcbiAgICAgICAgICBjYW5kID0ge307XG4gICAgICAgIH1cbiAgICAgICAgdHJhbnNjZWl2ZXIuaWNlVHJhbnNwb3J0LmFkZFJlbW90ZUNhbmRpZGF0ZShjYW5kKTtcbiAgICAgIH1cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgYXJndW1lbnRzWzFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGFyZ3VtZW50c1sxXSwgMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUuZ2V0U3RhdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgdGhpcy50cmFuc2NlaXZlcnMuZm9yRWFjaChmdW5jdGlvbih0cmFuc2NlaXZlcikge1xuICAgICAgICBbJ3J0cFNlbmRlcicsICdydHBSZWNlaXZlcicsICdpY2VHYXRoZXJlcicsICdpY2VUcmFuc3BvcnQnLFxuICAgICAgICAgICAgJ2R0bHNUcmFuc3BvcnQnXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgIGlmICh0cmFuc2NlaXZlclttZXRob2RdKSB7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRyYW5zY2VpdmVyW21ldGhvZF0uZ2V0U3RhdHMoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGNiID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICAgIGFyZ3VtZW50c1sxXTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgIHZhciByZXN1bHRzID0ge307XG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHJlcy5mb3JFYWNoKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocmVzdWx0KS5mb3JFYWNoKGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAgIHJlc3VsdHNbaWRdID0gcmVzdWx0W2lkXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2IsIDAsIHJlc3VsdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cbn0gZWxzZSB7XG4gIHdlYnJ0Y1V0aWxzLmxvZygnQnJvd3NlciBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgV2ViUlRDLWNhcGFibGUnKTtcbn1cblxuLy8gUG9seWZpbGwgb250cmFjayBvbiBicm93c2VycyB0aGF0IGRvbid0IHlldCBoYXZlIGl0XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uICYmICEoJ29udHJhY2snIGluXG4gICAgd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uLnByb3RvdHlwZSkpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5SVENQZWVyQ29ubmVjdGlvbi5wcm90b3R5cGUsICdvbnRyYWNrJywge1xuICAgIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLl9vbnRyYWNrOyB9LFxuICAgIHNldDogZnVuY3Rpb24oZikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgaWYgKHRoaXMuX29udHJhY2spIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFjaycsIHRoaXMuX29udHJhY2spO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndHJhY2snLCB0aGlzLl9vbnRyYWNrID0gZik7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIHRoaXMuX29udHJhY2twb2x5ID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAod2VicnRjRGV0ZWN0ZWRCcm93c2VyID09PSAnY2hyb21lJykge1xuICAgICAgICAgIC8vIG9uYWRkc3RyZWFtIGRvZXMgbm90IGZpcmUgd2hlbiBhIHRyYWNrIGlzIGFkZGVkIHRvIGFuIGV4aXN0aW5nIHN0cmVhbS5cbiAgICAgICAgICAvLyBidXQgc3RyZWFtLm9uYWRkdHJhY2sgaXMgaW1wbGVtZW50ZWQgc28gd2UgdXNlIHRo44GfdFxuICAgICAgICAgIGUuc3RyZWFtLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHRyYWNrJywgZnVuY3Rpb24odGUpIHtcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudCgndHJhY2snKTtcbiAgICAgICAgICAgIGV2ZW50LnRyYWNrID0gdGUudHJhY2s7XG4gICAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHt0cmFjazogdGUudHJhY2t9O1xuICAgICAgICAgICAgZXZlbnQuc3RyZWFtcyA9IFtlLnN0cmVhbV07XG4gICAgICAgICAgICBzZWxmLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGUuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24odHJhY2spIHtcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ3RyYWNrJyk7XG4gICAgICAgICAgZXZlbnQudHJhY2sgPSB0cmFjaztcbiAgICAgICAgICBldmVudC5yZWNlaXZlciA9IHt0cmFjazogdHJhY2t9O1xuICAgICAgICAgIGV2ZW50LnN0cmVhbXMgPSBbZS5zdHJlYW1dO1xuICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIFJldHVybnMgdGhlIHJlc3VsdCBvZiBnZXRVc2VyTWVkaWEgYXMgYSBQcm9taXNlLlxuZnVuY3Rpb24gcmVxdWVzdFVzZXJNZWRpYShjb25zdHJhaW50cykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzLCByZXNvbHZlLCByZWplY3QpO1xuICB9KTtcbn1cblxudmFyIHdlYnJ0Y1Rlc3RpbmcgPSB7fTtcbnRyeSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3ZWJydGNUZXN0aW5nLCAndmVyc2lvbicsIHtcbiAgICBzZXQ6IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICAgIHdlYnJ0Y0RldGVjdGVkVmVyc2lvbiA9IHZlcnNpb247XG4gICAgfVxuICB9KTtcbn0gY2F0Y2ggKGUpIHt9XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICB2YXIgUlRDUGVlckNvbm5lY3Rpb247XG4gIHZhciBSVENJY2VDYW5kaWRhdGU7XG4gIHZhciBSVENTZXNzaW9uRGVzY3JpcHRpb247XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIFJUQ1BlZXJDb25uZWN0aW9uID0gd2luZG93LlJUQ1BlZXJDb25uZWN0aW9uO1xuICAgIFJUQ0ljZUNhbmRpZGF0ZSA9IHdpbmRvdy5SVENJY2VDYW5kaWRhdGU7XG4gICAgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uID0gd2luZG93LlJUQ1Nlc3Npb25EZXNjcmlwdGlvbjtcbiAgfVxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBSVENQZWVyQ29ubmVjdGlvbjogUlRDUGVlckNvbm5lY3Rpb24sXG4gICAgUlRDSWNlQ2FuZGlkYXRlOiBSVENJY2VDYW5kaWRhdGUsXG4gICAgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uOiBSVENTZXNzaW9uRGVzY3JpcHRpb24sXG4gICAgZ2V0VXNlck1lZGlhOiBnZXRVc2VyTWVkaWEsXG4gICAgYXR0YWNoTWVkaWFTdHJlYW06IGF0dGFjaE1lZGlhU3RyZWFtLFxuICAgIHJlYXR0YWNoTWVkaWFTdHJlYW06IHJlYXR0YWNoTWVkaWFTdHJlYW0sXG4gICAgd2VicnRjRGV0ZWN0ZWRCcm93c2VyOiB3ZWJydGNEZXRlY3RlZEJyb3dzZXIsXG4gICAgd2VicnRjRGV0ZWN0ZWRWZXJzaW9uOiB3ZWJydGNEZXRlY3RlZFZlcnNpb24sXG4gICAgd2VicnRjTWluaW11bVZlcnNpb246IHdlYnJ0Y01pbmltdW1WZXJzaW9uLFxuICAgIHdlYnJ0Y1Rlc3Rpbmc6IHdlYnJ0Y1Rlc3RpbmcsXG4gICAgd2VicnRjVXRpbHM6IHdlYnJ0Y1V0aWxzXG4gICAgLy9yZXF1ZXN0VXNlck1lZGlhOiBub3QgZXhwb3NlZCBvbiBwdXJwb3NlLlxuICAgIC8vdHJhY2U6IG5vdCBleHBvc2VkIG9uIHB1cnBvc2UuXG4gIH07XG59IGVsc2UgaWYgKCh0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykgJiYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicpKSB7XG4gIC8vIEV4cG9zZSBvYmplY3RzIGFuZCBmdW5jdGlvbnMgd2hlbiBSZXF1aXJlSlMgaXMgZG9pbmcgdGhlIGxvYWRpbmcuXG4gIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFJUQ1BlZXJDb25uZWN0aW9uOiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24sXG4gICAgICBSVENJY2VDYW5kaWRhdGU6IHdpbmRvdy5SVENJY2VDYW5kaWRhdGUsXG4gICAgICBSVENTZXNzaW9uRGVzY3JpcHRpb246IHdpbmRvdy5SVENTZXNzaW9uRGVzY3JpcHRpb24sXG4gICAgICBnZXRVc2VyTWVkaWE6IGdldFVzZXJNZWRpYSxcbiAgICAgIGF0dGFjaE1lZGlhU3RyZWFtOiBhdHRhY2hNZWRpYVN0cmVhbSxcbiAgICAgIHJlYXR0YWNoTWVkaWFTdHJlYW06IHJlYXR0YWNoTWVkaWFTdHJlYW0sXG4gICAgICB3ZWJydGNEZXRlY3RlZEJyb3dzZXI6IHdlYnJ0Y0RldGVjdGVkQnJvd3NlcixcbiAgICAgIHdlYnJ0Y0RldGVjdGVkVmVyc2lvbjogd2VicnRjRGV0ZWN0ZWRWZXJzaW9uLFxuICAgICAgd2VicnRjTWluaW11bVZlcnNpb246IHdlYnJ0Y01pbmltdW1WZXJzaW9uLFxuICAgICAgd2VicnRjVGVzdGluZzogd2VicnRjVGVzdGluZyxcbiAgICAgIHdlYnJ0Y1V0aWxzOiB3ZWJydGNVdGlsc1xuICAgICAgLy9yZXF1ZXN0VXNlck1lZGlhOiBub3QgZXhwb3NlZCBvbiBwdXJwb3NlLlxuICAgICAgLy90cmFjZTogbm90IGV4cG9zZWQgb24gcHVycG9zZS5cbiAgICB9O1xuICB9KTtcbn1cbiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLyoganNoaW50IHVuZGVmOiB0cnVlICovXG4vKiBnbG9iYWxzIFJUQ1BlZXJDb25uZWN0aW9uICovXG4vKiBnbG9iYWxzIFJUQ1Nlc3Npb25EZXNjcmlwdGlvbiAqL1xuLyogZ2xvYmFscyBSVENJY2VDYW5kaWRhdGUgKi9cblxuaW1wb3J0ICd3ZWJydGMtYWRhcHRlci10ZXN0JztcblxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi91dGlscy9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IGNvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCBwZWVyIGZyb20gJy4vcGVlcic7XG5cbmNsYXNzIENvbm5lY3Rpb25Db250cm9sbGVyIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuICBjb25zdHJ1Y3RvcihzeW5jaGVyLCBkb21haW4sIGNvbmZpZ3VyYXRpb24pIHtcblxuICAgIGlmICghc3luY2hlcikgdGhyb3cgbmV3IEVycm9yKCdUaGUgc3luY2hlciBpcyBhIG5lZWRlZCBwYXJhbWV0ZXInKTtcbiAgICBpZiAoIWRvbWFpbikgdGhyb3cgbmV3IEVycm9yKCdUaGUgZG9tYWluIGlzIGEgbmVlZGVkIHBhcmFtZXRlcicpO1xuICAgIGlmICghY29uZmlndXJhdGlvbikgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29uZmlndXJhdGlvbiBpcyBhIG5lZWRlZCBwYXJhbWV0ZXInKTtcblxuICAgIHN1cGVyKCk7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMuc3luY2hlciA9IHN5bmNoZXI7XG4gICAgX3RoaXMubW9kZSA9ICdvZmZlcic7XG5cbiAgICBfdGhpcy5fb2JqZWN0RGVzY1VSTCA9ICdoeXBlcnR5LWNhdGFsb2d1ZTovLycgKyBkb21haW4gKyAnLy53ZWxsLWtub3duL2RhdGFzY2hlbWFzL0Zha2VEYXRhU2NoZW1hJztcblxuXG4gICAgY29uc29sZS5pbmZvKGNvbmZpZ3VyYXRpb24pO1xuICAgIGNvbnNvbGUuaW5mbyhjb25maWd1cmF0aW9uKTtcblxuICAgIF90aGlzLm1lZGlhQ29uc3RyYWludHMgPSBjb25maWd1cmF0aW9uLm1lZGlhQ29uc3RyYWludHM7XG4gICAgX3RoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb24ud2VicnRjO1xuXG4gICAgLy8gUHJlcGFyZSB0aGUgUGVlckNvbm5lY3Rpb25cbiAgICBsZXQgcGVlckNvbm5lY3Rpb24gPSBuZXcgUlRDUGVlckNvbm5lY3Rpb24oX3RoaXMuY29uZmlndXJhdGlvbik7XG5cbiAgICBwZWVyQ29ubmVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdzaWduYWxpbmdzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgIGNvbnNvbGUuaW5mbygnc2lnbmFsaW5nc3RhdGVjaGFuZ2UnLCBldmVudC5jdXJyZW50VGFyZ2V0LnNpZ25hbGluZ1N0YXRlKTtcblxuICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuc2lnbmFsaW5nU3RhdGUgPT09ICdoYXZlLWxvY2FsLW9mZmVyJykge1xuICAgICAgICBfdGhpcy50cmlnZ2VyKCdjb250cm9sbGVyOnN0YXRlOmNoYW5nZScsIF90aGlzLm1vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5zaWduYWxpbmdTdGF0ZSA9PT0gJ2hhdmUtcmVtb3RlLW9mZmVyJykge1xuICAgICAgICBfdGhpcy5tb2RlID0gJ2Fuc3dlcic7XG4gICAgICAgIF90aGlzLnRyaWdnZXIoJ2NvbnRyb2xsZXI6c3RhdGU6Y2hhbmdlJywgX3RoaXMubW9kZSk7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICAgIHBlZXJDb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmluZm8oJ2ljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZScsIGV2ZW50LmN1cnJlbnRUYXJnZXQuaWNlQ29ubmVjdGlvblN0YXRlKTtcbiAgICAgIGxldCBkYXRhID0gX3RoaXMuX2RhdGFPYmplY3RSZXBvcnRlci5kYXRhO1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2Nvbm5lY3Rpb24nKSkge1xuICAgICAgICBkYXRhLmNvbm5lY3Rpb24uc3RhdHVzID0gZXZlbnQuY3VycmVudFRhcmdldC5pY2VDb25uZWN0aW9uU3RhdGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwZWVyQ29ubmVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdpY2VjYW5kaWRhdGUnLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICBpZiAoIWV2ZW50LmNhbmRpZGF0ZSkgcmV0dXJuO1xuXG4gICAgICBsZXQgaWNlY2FuZGlkYXRlID0ge1xuICAgICAgICB0eXBlOiAnY2FuZGlkYXRlJyxcbiAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxuICAgICAgICBzZHBNaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWQsXG4gICAgICAgIHNkcE1MaW5lSW5kZXg6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4XG4gICAgICB9O1xuXG4gICAgICBsZXQgZGF0YSA9IF90aGlzLl9kYXRhT2JqZWN0UmVwb3J0ZXIuZGF0YTtcblxuICAgICAgaWYgKF90aGlzLm1vZGUgPT09ICdvZmZlcicpIHtcbiAgICAgICAgZGF0YS5jb25uZWN0aW9uLm93bmVyUGVlci5pY2VDYW5kaWRhdGVzLnB1c2goaWNlY2FuZGlkYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGEucGVlci5pY2VDYW5kaWRhdGVzLnB1c2goaWNlY2FuZGlkYXRlKTtcbiAgICAgIH1cblxuICAgIH0pO1xuXG4gICAgLy8gQWRkIHN0cmVhbSB0byBQZWVyQ29ubmVjdGlvblxuICAgIHBlZXJDb25uZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZHN0cmVhbScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmluZm8oJ0FkZCBTdHJlYW06ICcsIGV2ZW50KTtcbiAgICAgIF90aGlzLnRyaWdnZXIoJ3N0cmVhbTphZGRlZCcsIGV2ZW50KTtcbiAgICB9KTtcblxuICAgIF90aGlzLnBlZXJDb25uZWN0aW9uID0gcGVlckNvbm5lY3Rpb247XG5cbiAgfVxuXG4gIHNldCBzdHJlYW0obWVkaWFTdHJlYW0pIHtcbiAgICBpZiAoIW1lZGlhU3RyZWFtKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBtZWRpYVN0cmVhbSBpcyBhIG5lZWRlZCBwYXJhbWV0ZXInKTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgY29uc29sZS5pbmZvKCdzZXQgc3RyZWFtOiAnLCBtZWRpYVN0cmVhbSk7XG4gICAgX3RoaXMucGVlckNvbm5lY3Rpb24uYWRkU3RyZWFtKG1lZGlhU3RyZWFtKTtcbiAgfVxuXG4gIGdldCBnZXRMb2NhbFN0cmVhbXMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gX3RoaXMucGVlckNvbm5lY3Rpb24uZ2V0TG9jYWxTdHJlYW1zKCk7XG4gIH1cblxuICBnZXQgZ2V0UmVtb3RlU3RyZWFtcygpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBfdGhpcy5wZWVyQ29ubmVjdGlvbi5nZXRSZW1vdGVTdHJlYW1zKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IFJlbW90ZSBwZWVyIGluZm9ybWF0aW9uLCBsaWtlIEh5cGVydHkuXG4gICAqIEBwYXJhbSAge09iamVjdH0gcmVtb3RlUGVlckluZm9ybWF0aW9uIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwZWVyO1xuICAgKi9cbiAgc2V0IHJlbW90ZVBlZXJJbmZvcm1hdGlvbihyZW1vdGVQZWVySW5mb3JtYXRpb24pIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIF90aGlzLl9yZW1vdGVQZWVySW5mb3JtYXRpb24gPSByZW1vdGVQZWVySW5mb3JtYXRpb247XG4gIH1cblxuICAvKipcbiAgICogR2V0IGluZm9ybWF0aW9uIHJlbGF0aXZlIHRvIHRoZSBSZW1vdGUgUGVlcjtcbiAgICogQHJldHVybiB7T2JqZWN0fSByZW1vdGVQZWVySW5mb3JtYXRpb247XG4gICAqL1xuICBnZXQgcmVtb3RlUGVlckluZm9ybWF0aW9uKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIF90aGlzLl9yZW1vdGVQZWVySW5mb3JtYXRpb247XG4gIH1cblxuICAvKipcbiAgKiBTZXQgdGhlIGRhdGFPYmplY3QgaW4gdGhlIGNvbnRyb2xsZXJcbiAgKiBAcGFyYW0ge0Nvbm5lY3Rpb25EYXRhT2JqZWN0fSBkYXRhT2JqZWN0IC0gaGF2ZSBhbGwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN5bmNoZXIgb2JqZWN0O1xuICAqL1xuICBzZXQgZGF0YU9iamVjdFJlcG9ydGVyKGRhdGFPYmplY3RSZXBvcnRlcikge1xuICAgIGlmICghZGF0YU9iamVjdFJlcG9ydGVyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBEYXRhIE9iamVjdCBSZXBvcnRlciBpcyBhIG5lZWRlZCBwYXJhbWV0ZXInKTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgX3RoaXMuX2RhdGFPYmplY3RSZXBvcnRlciA9IGRhdGFPYmplY3RSZXBvcnRlcjtcblxuICAgIGxldCBkYXRhID0gX3RoaXMuX2RhdGFPYmplY3RSZXBvcnRlci5kYXRhO1xuXG4gICAgZGF0YU9iamVjdFJlcG9ydGVyLm9uU3Vic2NyaXB0aW9uKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5hY2NlcHQoKTtcbiAgICB9KTtcblxuICAgIGlmIChfdGhpcy5tb2RlID09PSAnb2ZmZXInKSB7XG4gICAgICBkYXRhLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuXG4gICAgICBfdGhpcy5jcmVhdGVPZmZlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhLnBlZXIgPSBwZWVyO1xuXG4gICAgICBfdGhpcy5jcmVhdGVBbnN3ZXIoKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmRlYnVnKF90aGlzLl9kYXRhT2JqZWN0UmVwb3J0ZXIpO1xuXG4gIH1cblxuICAvKipcbiAgKiByZXR1cm4gdGhlIGRhdGFPYmplY3QgaW4gdGhlIGNvbnRyb2xsZXJcbiAgKiBAcmV0dXJuIHtDb25uZWN0aW9uRGF0YU9iamVjdH0gZGF0YU9iamVjdFxuICAqL1xuICBnZXQgZGF0YU9iamVjdFJlcG9ydGVyKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgcmV0dXJuIF90aGlzLl9kYXRhT2JqZWN0UmVwb3J0ZXI7XG4gIH1cblxuICAvKipcbiAgKiBTZXQgdGhlIGRhdGFPYmplY3QgaW4gdGhlIGNvbnRyb2xsZXJcbiAgKiBAcGFyYW0ge0Nvbm5lY3Rpb25EYXRhT2JqZWN0fSBkYXRhT2JqZWN0IC0gaGF2ZSBhbGwgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN5bmNoZXIgb2JqZWN0O1xuICAqL1xuICBzZXQgZGF0YU9iamVjdE9ic2VydmVyKGRhdGFPYmplY3RPYnNlcnZlcikge1xuICAgIGlmICghZGF0YU9iamVjdE9ic2VydmVyKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBEYXRhIE9iamVjdCBPYnNlcnZlciBpcyBhIG5lZWRlZCBwYXJhbWV0ZXInKTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgX3RoaXMuX2RhdGFPYmplY3RPYnNlcnZlciA9IGRhdGFPYmplY3RPYnNlcnZlcjtcbiAgICBfdGhpcy5jaGFuZ2VQZWVySW5mb3JtYXRpb24oZGF0YU9iamVjdE9ic2VydmVyKTtcblxuICB9XG5cbiAgLyoqXG4gICogcmV0dXJuIHRoZSBkYXRhT2JqZWN0IGluIHRoZSBjb250cm9sbGVyXG4gICogQHJldHVybiB7Q29ubmVjdGlvbkRhdGFPYmplY3R9IGRhdGFPYmplY3RcbiAgKi9cbiAgZ2V0IGRhdGFPYmplY3RPYnNlcnZlcigpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHJldHVybiBfdGhpcy5fZGF0YU9iamVjdE9ic2VydmVyO1xuICB9XG5cbiAgY2hhbmdlUGVlckluZm9ybWF0aW9uKGRhdGFPYmplY3RPYnNlcnZlcikge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IGRhdGEgPSBkYXRhT2JqZWN0T2JzZXJ2ZXIuZGF0YTtcbiAgICBsZXQgaXNPd25lciA9IGRhdGEuaGFzT3duUHJvcGVydHkoJ2Nvbm5lY3Rpb24nKTtcblxuICAgIGxldCBwZWVyRGF0YSA9IGlzT3duZXIgPyBkYXRhLmNvbm5lY3Rpb24ub3duZXJQZWVyIDogZGF0YS5wZWVyO1xuXG4gICAgY29uc29sZS5pbmZvKCdQZWVyIERhdGE6JywgSlNPTi5zdHJpbmdpZnkocGVlckRhdGEpKTtcblxuICAgIGlmIChwZWVyRGF0YS5oYXNPd25Qcm9wZXJ0eSgnY29ubmVjdGlvbkRlc2NyaXB0aW9uJykpIHtcbiAgICAgIF90aGlzLnByb2Nlc3NQZWVySW5mb3JtYXRpb24ocGVlckRhdGEuY29ubmVjdGlvbkRlc2NyaXB0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAocGVlckRhdGEuaGFzT3duUHJvcGVydHkoJ2ljZUNhbmRpZGF0ZXMnKSkge1xuICAgICAgcGVlckRhdGEuaWNlQ2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uKGljZSkge1xuICAgICAgICBfdGhpcy5wcm9jZXNzUGVlckluZm9ybWF0aW9uKGljZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkYXRhT2JqZWN0T2JzZXJ2ZXIub25DaGFuZ2UoJyonLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgY29uc29sZS5pbmZvKCdPYnNlcnZlciBvbiBjaGFuZ2UgbWVzc2FnZTogJywgZXZlbnQpO1xuICAgICAgX3RoaXMucHJvY2Vzc1BlZXJJbmZvcm1hdGlvbihldmVudC5kYXRhKTtcbiAgICB9KTtcblxuICB9XG5cbiAgcHJvY2Vzc1BlZXJJbmZvcm1hdGlvbihkYXRhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGNvbnNvbGUuaW5mbyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cbiAgICBpZiAoZGF0YS50eXBlID09PSAnb2ZmZXInIHx8IGRhdGEudHlwZSA9PT0gJ2Fuc3dlcicpIHtcbiAgICAgIGNvbnNvbGUuaW5mbygnUHJvY2VzcyBDb25uZWN0aW9uIERlc2NyaXB0aW9uOiAnLCBkYXRhLnNkcCk7XG4gICAgICBfdGhpcy5wZWVyQ29ubmVjdGlvbi5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKGRhdGEpLCBfdGhpcy5yZW1vdGVEZXNjcmlwdGlvblN1Y2Nlc3MsIF90aGlzLnJlbW90ZURlc2NyaXB0aW9uRXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdjYW5kaWRhdGUnKSB7XG4gICAgICBjb25zb2xlLmluZm8oJ1Byb2Nlc3MgSWNlIENhbmRpZGF0ZTogJywgZGF0YSk7XG4gICAgICBfdGhpcy5wZWVyQ29ubmVjdGlvbi5hZGRJY2VDYW5kaWRhdGUobmV3IFJUQ0ljZUNhbmRpZGF0ZSh7Y2FuZGlkYXRlOiBkYXRhLmNhbmRpZGF0ZX0pLCBfdGhpcy5yZW1vdGVEZXNjcmlwdGlvblN1Y2Nlc3MsIF90aGlzLnJlbW90ZURlc2NyaXB0aW9uRXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW90ZURlc2NyaXB0aW9uU3VjY2VzcygpIHtcbiAgICBjb25zb2xlLmluZm8oJ3JlbW90ZSBzdWNjZXNzJyk7XG4gIH1cblxuICByZW1vdGVEZXNjcmlwdGlvbkVycm9yKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3I6ICcsIGVycm9yKTtcbiAgfVxuXG4gIGNyZWF0ZU9mZmVyKCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG5cbiAgICBfdGhpcy5wZWVyQ29ubmVjdGlvbi5jcmVhdGVPZmZlcihmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgX3RoaXMub25Mb2NhbFNlc3Npb25DcmVhdGVkKGRlc2NyaXB0aW9uKTtcbiAgICB9LCBfdGhpcy5pbmZvRXJyb3IsIF90aGlzLm1lZGlhQ29uc3RyYWludHMpO1xuXG4gIH1cblxuICBjcmVhdGVBbnN3ZXIoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIF90aGlzLnBlZXJDb25uZWN0aW9uLmNyZWF0ZUFuc3dlcihmdW5jdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgX3RoaXMub25Mb2NhbFNlc3Npb25DcmVhdGVkKGRlc2NyaXB0aW9uKTtcbiAgICB9LCBfdGhpcy5pbmZvRXJyb3IpO1xuICB9XG5cbiAgb25Mb2NhbFNlc3Npb25DcmVhdGVkKGRlc2NyaXB0aW9uKSB7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgX3RoaXMucGVlckNvbm5lY3Rpb24uc2V0TG9jYWxEZXNjcmlwdGlvbihkZXNjcmlwdGlvbiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgIGxldCBkYXRhID0gX3RoaXMuX2RhdGFPYmplY3RSZXBvcnRlci5kYXRhO1xuICAgICAgbGV0IHNkcENvbm5lY3Rpb24gPSB7XG4gICAgICAgIHNkcDogZGVzY3JpcHRpb24uc2RwLFxuICAgICAgICB0eXBlOiBkZXNjcmlwdGlvbi50eXBlXG4gICAgICB9O1xuXG4gICAgICBpZiAoX3RoaXMubW9kZSA9PT0gJ29mZmVyJykge1xuICAgICAgICBkYXRhLmNvbm5lY3Rpb24ub3duZXJQZWVyLmNvbm5lY3Rpb25EZXNjcmlwdGlvbiA9IHNkcENvbm5lY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhLnBlZXIuY29ubmVjdGlvbkRlc2NyaXB0aW9uID0gc2RwQ29ubmVjdGlvbjtcbiAgICAgIH1cblxuICAgIH0sIF90aGlzLmluZm9FcnJvcik7XG5cbiAgfVxuXG4gIGluZm9FcnJvcihlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVyci50b1N0cmluZygpLCBlcnIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gYWNjZXB0IGFuIGluY29taW5nIGNvbm5lY3Rpb24gcmVxdWVzdC5cbiAgICogQG1ldGhvZCBhY2NlcHRcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIGFjY2VwdChzdHJlYW0pIHtcbiAgICAvLyBUT0RPOiBQYXNzIGFyZ3VtZW50IG9wdGlvbnMgYXMgYSBzdHJlYW0sIGJlY2F1c2UgaXMgc3BlY2lmaWMgb2YgaW1wbGVtZW50YXRpb247XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBzeW5jaGVyID0gX3RoaXMuc3luY2hlcjtcblxuICAgIGNvbnNvbGUubG9nKCdSZW1vdGUgUGVlciBJbmZvcm1hdGlvbjogJywgX3RoaXMuX3JlbW90ZVBlZXJJbmZvcm1hdGlvbik7XG4gICAgbGV0IHJlbW90ZVBlZXIgPSBfdGhpcy5fcmVtb3RlUGVlckluZm9ybWF0aW9uLmZyb207XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgIHRyeSB7XG5cbiAgICAgICAgY29uc29sZS5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gU3luY2hlciBDcmVhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBcXG4nKTtcbiAgICAgICAgc3luY2hlci5jcmVhdGUoX3RoaXMuX29iamVjdERlc2NVUkwsIFtyZW1vdGVQZWVyXSwge30pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGFPYmplY3RSZXBvcnRlcikge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbygnMi4gUmV0dXJuIHRoZSBEYXRhIE9iamVjdCBSZXBvcnRlciAnLCBkYXRhT2JqZWN0UmVwb3J0ZXIpO1xuXG4gICAgICAgICAgX3RoaXMuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICAgIF90aGlzLmRhdGFPYmplY3RSZXBvcnRlciA9IGRhdGFPYmplY3RSZXBvcnRlcjtcbiAgICAgICAgICByZXNvbHZlKCdhY2NlcHRlZCcpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgcmVqZWN0KHJlYXNvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdCgnZXJyb3IgYWNjZXB0aW5nIGNvbm5lY3Rpb24nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICogVXNlZCB0byBkZWNsaW5lIGFuIGluY29taW5nIGNvbm5lY3Rpb24gcmVxdWVzdC5cbiAgKiBAbWV0aG9kIGRlY2xpbmVcbiAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAqL1xuICBkZWNsaW5lKCkge1xuXG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgc3luY2hlciA9IF90aGlzLnN5bmNoZXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzeW5jaGVyOiAnLCBzeW5jaGVyKTtcbiAgICAgICAgcmVzb2x2ZSgnRGVjbGluZWQnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBjbG9zZSBhbiBleGlzdGluZyBjb25uZWN0aW9uIGluc3RhbmNlLlxuICAgKiBAbWV0aG9kIGRpc2Nvbm5lY3RcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gIGRpc2Nvbm5lY3QoKSB7XG5cbiAgICAvLyBUT0RPOiBvcHRpbWl6ZSB0aGUgZGlzY29ubmVjdCBmdW5jdGlvblxuXG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgdHJ5IHtcblxuICAgICAgICBfdGhpcy5wZWVyQ29ubmVjdGlvbi5jbG9zZSgpO1xuXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdCgnZXJyb3IgZGlzY29ubmVjdGluZyBjb25uZWN0aW9uJyk7XG4gICAgICB9XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gYWRkL2ludml0ZSBuZXcgcGVlcnMgb24gYW4gZXhpc3RpbmcgY29ubmVjdGlvbiBpbnN0YW5jZSAoZm9yIG11bHRpcGFydHkgY29ubmVjdGlvbnMpLlxuICAgKiBAbWV0aG9kIGFkZFBlZXJcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICovXG4gICBhZGRQZWVyKCkge1xuXG4gICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gcmVtb3ZlIGEgcGVlciBmcm9tIGFuIGV4aXN0aW5nIGNvbm5lY3Rpb24gaW5zdGFuY2UuXG4gICAqIEBtZXRob2QgcmVtb3ZlUGVlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKi9cbiAgcmVtb3ZlUGVlcigpIHtcblxuICB9XG5cbiAgLy8gUGVlciBBY3Rpb25zXG4gIGRpc2FibGVNaWMoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGxvY2FsU3RyZWFtID0gX3RoaXMucGVlckNvbm5lY3Rpb24uZ2V0TG9jYWxTdHJlYW1zKClbMF07XG4gICAgICAgIGxldCBhdWRpb1RyYWNrID0gbG9jYWxTdHJlYW0uZ2V0QXVkaW9UcmFja3MoKVswXTtcblxuICAgICAgICBhdWRpb1RyYWNrLmVuYWJsZWQgPSBhdWRpb1RyYWNrLmVuYWJsZWQgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIHJlc29sdmUoYXVkaW9UcmFjay5lbmFibGVkKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgfVxuXG4gIGRpc2FibGVDYW0oKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IGxvY2FsU3RyZWFtID0gX3RoaXMucGVlckNvbm5lY3Rpb24uZ2V0TG9jYWxTdHJlYW1zKClbMF07XG4gICAgICAgIGxldCB2aWRlb1RyYWNrID0gbG9jYWxTdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVswXTtcblxuICAgICAgICB2aWRlb1RyYWNrLmVuYWJsZWQgPSB2aWRlb1RyYWNrLmVuYWJsZWQgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgcmVzb2x2ZSh2aWRlb1RyYWNrLmVuYWJsZWQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIG11dGUoKSB7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVtb3RlU3RyZWFtID0gX3RoaXMucGVlckNvbm5lY3Rpb24uZ2V0UmVtb3RlU3RyZWFtcygpWzBdO1xuICAgICAgICBsZXQgYXVkaW9UcmFjayA9IHJlbW90ZVN0cmVhbS5nZXRBdWRpb1RyYWNrcygpWzBdO1xuXG4gICAgICAgIGF1ZGlvVHJhY2suZW5hYmxlZCA9IGF1ZGlvVHJhY2suZW5hYmxlZCA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICByZXNvbHZlKGF1ZGlvVHJhY2suZW5hYmxlZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdGlvbkNvbnRyb2xsZXI7XG4iLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbi8qIGpzaGludCB1bmRlZjogdHJ1ZSAqL1xuXG4vLyBTZXJ2aWNlIEZyYW1ld29ya1xuaW1wb3J0IEh5cGVydHlEaXNjb3ZlcnkgZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9IeXBlcnR5RGlzY292ZXJ5JztcbmltcG9ydCB7U3luY2hlcn0gZnJvbSAnc2VydmljZS1mcmFtZXdvcmsvZGlzdC9TeW5jaGVyJztcblxuLy8gVXRpbHNcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vdXRpbHMvRXZlbnRFbWl0dGVyJztcbmltcG9ydCB7ZGl2aWRlVVJMfSBmcm9tICcuLi91dGlscy91dGlscyc7XG5cbi8vIEludGVybmFsc1xuaW1wb3J0IENvbm5lY3Rpb25Db250cm9sbGVyIGZyb20gJy4vQ29ubmVjdGlvbkNvbnRyb2xsZXInO1xuXG4vKipcbiogSHlwZXJ0eSBDb25uZWN0b3I7XG4qIEBhdXRob3IgVml0b3IgU2lsdmEgW3ZpdG9yLXQtc2lsdmFAdGVsZWNvbS5wdF1cbiogQHZlcnNpb24gMC4xLjBcbiovXG5jbGFzcyBIeXBlcnR5Q29ubmVjdG9yIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblxuICAvKipcbiAgKiBDcmVhdGUgYSBuZXcgSHlwZXJ0eSBDb25uZWN0b3JcbiAgKiBAcGFyYW0gIHtTeW5jaGVyfSBzeW5jaGVyIC0gU3luY2hlciBwcm92aWRlZCBmcm9tIHRoZSBydW50aW1lIGNvcmVcbiAgKi9cbiAgY29uc3RydWN0b3IoaHlwZXJ0eVVSTCwgYnVzLCBjb25maWd1cmF0aW9uKSB7XG5cbiAgICBpZiAoIWh5cGVydHlVUkwpIHRocm93IG5ldyBFcnJvcignVGhlIGh5cGVydHlVUkwgaXMgYSBuZWVkZWQgcGFyYW1ldGVyJyk7XG4gICAgaWYgKCFidXMpIHRocm93IG5ldyBFcnJvcignVGhlIE1pbmlCdXMgaXMgYSBuZWVkZWQgcGFyYW1ldGVyJyk7XG4gICAgaWYgKCFjb25maWd1cmF0aW9uKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb25maWd1cmF0aW9uIGlzIGEgbmVlZGVkIHBhcmFtZXRlcicpO1xuXG4gICAgc3VwZXIoaHlwZXJ0eVVSTCwgYnVzLCBjb25maWd1cmF0aW9uKTtcblxuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgX3RoaXMuX2h5cGVydHlVUkwgPSBoeXBlcnR5VVJMO1xuICAgIF90aGlzLl9idXMgPSBidXM7XG4gICAgX3RoaXMuX2NvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgIF90aGlzLl9kb21haW4gPSBkaXZpZGVVUkwoaHlwZXJ0eVVSTCkuZG9tYWluO1xuXG4gICAgX3RoaXMuX29iamVjdERlc2NVUkwgPSAnaHlwZXJ0eS1jYXRhbG9ndWU6Ly8nICsgX3RoaXMuX2RvbWFpbiArICcvLndlbGwta25vd24vZGF0YXNjaGVtYXMvRmFrZURhdGFTY2hlbWEnO1xuXG4gICAgX3RoaXMuX2NvbnRyb2xsZXJzID0ge307XG5cbiAgICBfdGhpcy5oeXBlcnR5RGlzY292ZXJ5ID0gbmV3IEh5cGVydHlEaXNjb3ZlcnkoaHlwZXJ0eVVSTCwgYnVzKTtcblxuICAgIGxldCBzeW5jaGVyID0gbmV3IFN5bmNoZXIoaHlwZXJ0eVVSTCwgYnVzLCBjb25maWd1cmF0aW9uKTtcbiAgICBzeW5jaGVyLm9uTm90aWZpY2F0aW9uKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBfdGhpcy5fb25Ob3RpZmljYXRpb24oZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgX3RoaXMuX3N5bmNoZXIgPSBzeW5jaGVyO1xuICB9XG5cbiAgX29uTm90aWZpY2F0aW9uKGV2ZW50KSB7XG5cbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuXG4gICAgY29uc29sZS5pbmZvKCctLS0tLS0tLS0tLS0gQWNrbm93bGVkZ2VzIHRoZSBSZXBvcnRlciAtLS0tLS0tLS0tLS0gXFxuJyk7XG4gICAgZXZlbnQuYWNrKCk7XG4gICAgY29uc29sZS5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXFxuJyk7XG5cbiAgICBpZiAoX3RoaXMuX2NvbnRyb2xsZXJzW2V2ZW50LmZyb21dKSB7XG4gICAgICBfdGhpcy5fYXV0b1N1YnNjcmliZShldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF90aGlzLl9hdXRvQWNjZXB0KGV2ZW50KTtcbiAgICB9XG5cbiAgfVxuXG4gIF9hdXRvU3Vic2NyaWJlKGV2ZW50KSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgc3luY2hlciA9IF90aGlzLl9zeW5jaGVyO1xuXG4gICAgY29uc29sZS5pbmZvKCctLS0tLS0tLS0tLS0tLS0tIFN5bmNoZXIgQXV0byBTdWJzY3JpYmUgLS0tLS0tLS0tLS0tLS0tLSBcXG4nKTtcbiAgICBjb25zb2xlLmluZm8oJ1N1YnNjcmliZSBVUkwgT2JqZWN0ICcsIGV2ZW50LCBzeW5jaGVyKTtcbiAgICBzeW5jaGVyLnN1YnNjcmliZShfdGhpcy5fb2JqZWN0RGVzY1VSTCwgZXZlbnQudXJsKS50aGVuKGZ1bmN0aW9uKGRhdGFPYmplY3RPYnNlcnZlcikge1xuICAgICAgY29uc29sZS5pbmZvKCcxLiBSZXR1cm4gU3Vic2NyaWJlIERhdGEgT2JqZWN0IE9ic2VydmVyJywgZGF0YU9iamVjdE9ic2VydmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKF90aGlzLl9jb250cm9sbGVycyk7XG4gICAgICBfdGhpcy5fY29udHJvbGxlcnNbZXZlbnQuZnJvbV0uZGF0YU9iamVjdE9ic2VydmVyID0gZGF0YU9iamVjdE9ic2VydmVyO1xuXG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHJlYXNvbik7XG4gICAgfSk7XG4gIH1cblxuICBfYXV0b0FjY2VwdChldmVudCkge1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHN5bmNoZXIgPSBfdGhpcy5fc3luY2hlcjtcblxuICAgIGNvbnNvbGUuaW5mbygnLS0tLS0tLS0tLS0gU3luY2hlciBTdWJzY3JpYmUgKEF1dG8gQWNjZXB0KSAtLS0tLS0tLS0tLS0tIFxcbicpO1xuICAgIGNvbnNvbGUuaW5mbygnU3Vic2NyaWJlIFVSTCBPYmplY3QgJywgZXZlbnQsIHN5bmNoZXIpO1xuICAgIHN5bmNoZXIuc3Vic2NyaWJlKF90aGlzLl9vYmplY3REZXNjVVJMLCBldmVudC51cmwpLnRoZW4oZnVuY3Rpb24oZGF0YU9iamVjdE9ic2VydmVyKSB7XG4gICAgICBjb25zb2xlLmluZm8oJzEuIFJldHVybiBTdWJzY3JpYmUgRGF0YSBPYmplY3QgT2JzZXJ2ZXInLCBkYXRhT2JqZWN0T2JzZXJ2ZXIpO1xuXG4gICAgICBsZXQgY29ubmVjdGlvbkNvbnRyb2xsZXIgPSBuZXcgQ29ubmVjdGlvbkNvbnRyb2xsZXIoc3luY2hlciwgX3RoaXMuX2RvbWFpbiwgX3RoaXMuX2NvbmZpZ3VyYXRpb24pO1xuICAgICAgY29ubmVjdGlvbkNvbnRyb2xsZXIucmVtb3RlUGVlckluZm9ybWF0aW9uID0gZXZlbnQ7XG4gICAgICBjb25uZWN0aW9uQ29udHJvbGxlci5kYXRhT2JqZWN0T2JzZXJ2ZXIgPSBkYXRhT2JqZWN0T2JzZXJ2ZXI7XG5cbiAgICAgIF90aGlzLnRyaWdnZXIoJ2Nvbm5lY3Rvcjpjb25uZWN0ZWQnLCBjb25uZWN0aW9uQ29udHJvbGxlcik7XG4gICAgICBfdGhpcy50cmlnZ2VyKCdoYXZlOm5vdGlmaWNhdGlvbicsIGV2ZW50KTtcblxuICAgICAgY29uc29sZS5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRU5EIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXFxuJyk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICBjb25zb2xlLmVycm9yKHJlYXNvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgKiBFc3RhYmxpc2ggY29ubmVjdGlvbiB3aXRoIG90aGVyIGNsaWVudCBpZGVudGlmaWVyXG4gICogQHBhcmFtICB7SHlwZXJ0eVVSTH0gSHlwZXJ0eVVSTCAtIERlZmluZSB0aGUgaWRlbnRpZmllciBvZiB0aGUgb3RoZXIgY29tcG9uZW50XG4gICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIC0gT2JqZWN0IHdpdGggb3B0aW9ucyB0byBpbXByb3ZlIHRoZSBjb25uZWN0XG4gICovXG4gIGNvbm5lY3QoaHlwZXJ0eVVSTCwgc3RyZWFtKSB7XG4gICAgLy8gVE9ETzogUGFzcyBhcmd1bWVudCBvcHRpb25zIGFzIGEgc3RyZWFtLCBiZWNhdXNlIGlzIHNwZWNpZmljIG9mIGltcGxlbWVudGF0aW9uO1xuICAgIC8vIFRPRE86IENIYW5nZSB0aGUgaHlwZXJ0eVVSTCBmb3IgYSBsaXN0IG9mIFVSTFNcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIGxldCBzeW5jaGVyID0gX3RoaXMuX3N5bmNoZXI7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgIGxldCBjb25uZWN0aW9uQ29udHJvbGxlcjtcbiAgICAgIGNvbnNvbGUuaW5mbygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFN5bmNoZXIgQ3JlYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXFxuJyk7XG4gICAgICBzeW5jaGVyLmNyZWF0ZShfdGhpcy5fb2JqZWN0RGVzY1VSTCwgW2h5cGVydHlVUkxdLCB7fSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKGRhdGFPYmplY3RSZXBvcnRlcikge1xuICAgICAgICBjb25zb2xlLmluZm8oJzEuIFJldHVybiBDcmVhdGUgRGF0YSBPYmplY3QgUmVwb3J0ZXInLCBkYXRhT2JqZWN0UmVwb3J0ZXIpO1xuXG4gICAgICAgIGNvbm5lY3Rpb25Db250cm9sbGVyID0gbmV3IENvbm5lY3Rpb25Db250cm9sbGVyKHN5bmNoZXIsIF90aGlzLl9kb21haW4sIF90aGlzLl9jb25maWd1cmF0aW9uKTtcbiAgICAgICAgY29ubmVjdGlvbkNvbnRyb2xsZXIuc3RyZWFtID0gc3RyZWFtO1xuICAgICAgICBjb25uZWN0aW9uQ29udHJvbGxlci5kYXRhT2JqZWN0UmVwb3J0ZXIgPSBkYXRhT2JqZWN0UmVwb3J0ZXI7XG5cbiAgICAgICAgX3RoaXMuX2NvbnRyb2xsZXJzW2h5cGVydHlVUkxdID0gY29ubmVjdGlvbkNvbnRyb2xsZXI7XG5cbiAgICAgICAgcmVzb2x2ZShjb25uZWN0aW9uQ29udHJvbGxlcik7XG4gICAgICAgIGNvbnNvbGUuaW5mbygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEVORCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXFxuJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKHJlYXNvbik7XG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG5cbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlKGh5cGVydHlVUkwsIGJ1cywgY29uZmlndXJhdGlvbikge1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0h5cGVydHlDb25uZWN0b3InLFxuICAgIGluc3RhbmNlOiBuZXcgSHlwZXJ0eUNvbm5lY3RvcihoeXBlcnR5VVJMLCBidXMsIGNvbmZpZ3VyYXRpb24pXG4gIH07XG5cbn1cbiIsIi8qKlxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxuKlxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qKi9cblxuLy8gZGF0YU9iamVjdFJlcG9ydGVyLmRhdGEgPSB7XG4vLyAgICBzdGF0dXMgOiBcImNvbm5lY3RlZFwiLFxuLy8gICAgb3duZXIgOiBcImh5cGVydHk6Ly9leGFtcGxlLmNvbS9hbGljZWh5XCIsXG4vLyAgICBwZWVyIDogXCJjb25uZWN0aW9uOi8vZXhhbXBsZS5jb20vYWxpY2UvYm9iMjcwMTIwMTZcIixcbi8vICAgIG93bmVyUGVlciA6IHtcbi8vICAgICAgICAgIGNvbm5lY3Rpb25EZXNjcmlwdGlvbjoge1xuLy8gICAgICAgICAgICAgc2RwOiAnczRkZmFmMXNhM2YxYXNkNWY0c2RhZmEnLFxuLy8gICAgICAgICAgICAgdHlwZTogJ29mZmVyJ1xuLy8gICAgICAgICAgfSxcbi8vICAgICAgICAgIGljZUNhbmRpZGF0ZXM6IFt7XG4vLyAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXG4vLyAgICAgICAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxuLy8gICAgICAgICAgICAgIHNkcE1pZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcbi8vICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleFxuLy8gICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgdHlwZTogJ2NhbmRpZGF0ZScsXG4vLyAgICAgICAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxuLy8gICAgICAgICAgICAgIHNkcE1pZDogZXZlbnQuY2FuZGlkYXRlLnNkcE1pZCxcbi8vICAgICAgICAgICAgICBzZHBNTGluZUluZGV4OiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleFxuLy8gICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAuLi4uLlxuLy8gICAgICAgIF1cbi8vICAgICAgfVxuLy8gIH1cblxubGV0IGNvbm5lY3Rpb24gPSB7XG4gICBzdGF0dXMgOiBcImNvbm5lY3RlZFwiLFxuICAgb3duZXIgOiBcImh5cGVydHk6Ly9leGFtcGxlLmNvbS9hbGljZWh5XCIsXG4gICBwZWVyIDogXCJjb25uZWN0aW9uOi8vZXhhbXBsZS5jb20vYWxpY2UvYm9iMjcwMTIwMTZcIixcbiAgIG93bmVyUGVlciA6IHtcbiAgICAgY29ubmVjdGlvbkRlc2NyaXB0aW9uOiB7fSxcbiAgICAgaWNlQ2FuZGlkYXRlczogW11cbiAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Rpb247XG4iLCIvKipcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbipcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbipcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbipcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKiovXG5cbmxldCBwZWVyID0ge1xuICBjb25uZWN0aW9uRGVzY3JpcHRpb246IHt9LFxuICBpY2VDYW5kaWRhdGVzOiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBwZWVyO1xuIiwiLyoqXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXG4qXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqL1xuXG4vKipcbiAqIEV2ZW50RW1pdHRlclxuICogQWxsIGNsYXNzZXMgd2hpY2ggZXh0ZW5kcyB0aGlzLCBjYW4gaGF2ZSBhZGRFdmVudExpc3RlbmVyIGFuZCB0cmlnZ2VyIGV2ZW50cztcbiAqL1xuY2xhc3MgRXZlbnRFbWl0dGVyIHtcblxuICAvKipcbiAgICogYWRkRXZlbnRMaXN0ZW5lciBsaXN0ZW4gZm9yIGFuIGV2ZW50VHlwZVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9ICAgICAgICAgZXZlbnRUeXBlIC0gbGlzdGVuaW5nIGZvciB0aGlzIHR5cGUgb2YgZXZlbnRcbiAgICogQHBhcmFtICB7RnVuY3Rpb259ICAgICAgIGNiICAgICAgICAtIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgZXZlbnQgaXQgaXMgaW52b2tlZFxuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNiKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBfdGhpc1tldmVudFR5cGVdID0gY2I7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIHRoZSBldmVudFR5cGVcbiAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudFR5cGUgLSBldmVudCB3aWxsIGJlIGludm9rZWRcbiAgICogQHBhcmFtICB7b2JqZWN0fSBwYXJhbXMgLSBwYXJhbWV0ZXJzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBhZGRFdmVudExpc3RlbmVyXG4gICAqL1xuICB0cmlnZ2VyKGV2ZW50VHlwZSwgcGFyYW1zKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcblxuICAgIGlmIChfdGhpc1tldmVudFR5cGVdKSB7XG4gICAgICBfdGhpc1tldmVudFR5cGVdKHBhcmFtcyk7XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcbiAqIENvcHlyaWdodCAyMDE2IElORVNDLUlEXG4gKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcbiAqIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXG4gKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcbiAqIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcbiAqIENvcHlyaWdodCAyMDE2IEFwaXplZVxuICogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICoqL1xuXG4vLyBqc2hpbnQgYnJvd3Nlcjp0cnVlLCBqcXVlcnk6IHRydWVcbi8vIGpzaGludCB2YXJzdG10OiB0cnVlXG4vKiBnbG9iYWwgSGFuZGxlYmFycyAqL1xuXG4vKipcbiAqIFN1cHBvcnQgbW9kdWxlIHdpdGggc29tZSBmdW5jdGlvbnMgd2lsbCBiZSB1c2VmdWxcbiAqIEBtb2R1bGUgdXRpbHNcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIGRpdmlkZVVSTFxuICogQHR5cGUgT2JqZWN0XG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBvZiBVUkxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpZGVudGl0eSBUaGUgaWRlbnRpdHkgb2YgVVJMXG4gKi9cblxuLyoqXG4gKiBEaXZpZGUgYW4gdXJsIGluIHR5cGUsIGRvbWFpbiBhbmQgaWRlbnRpdHlcbiAqIEBwYXJhbSAge1VSTC5VUkx9IHVybCAtIHVybCBhZGRyZXNzXG4gKiBAcmV0dXJuIHtkaXZpZGVVUkx9IHRoZSByZXN1bHQgb2YgZGl2aWRlVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXZpZGVVUkwodXJsKSB7XG5cbiAgLy8gbGV0IHJlID0gLyhbYS16QS1aLV0qKT86XFwvXFwvKD86XFwuKT8oWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9XFwuW2Etel17Miw2fVxcYikqKFxcL1tcXC9cXGRcXHdcXC4tXSopKig/OltcXD9dKSooLispKi9naTtcbiAgbGV0IHJlID0gLyhbYS16QS1aLV0qKTpcXC9cXC8oPzpcXC4pPyhbLWEtekEtWjAtOUA6JS5fXFwrfiM9XXsyLDI1Nn0pKFstYS16QS1aMC05QDolLl9cXCt+Iz1cXC9dKikvZ2k7XG4gIGxldCBzdWJzdCA9ICckMSwkMiwkMyc7XG4gIGxldCBwYXJ0cyA9IHVybC5yZXBsYWNlKHJlLCBzdWJzdCkuc3BsaXQoJywnKTtcblxuICAvLyBJZiB0aGUgdXJsIGhhcyBubyBwcm90b2NvbCwgdGhlIGRlZmF1bHQgcHJvdG9jb2wgc2V0IGlzIGh0dHBzXG4gIGlmIChwYXJ0c1swXSA9PT0gdXJsKSB7XG4gICAgcGFydHNbMF0gPSAnaHR0cHMnO1xuICAgIHBhcnRzWzFdID0gdXJsO1xuICB9XG5cbiAgbGV0IHJlc3VsdCA9IHtcbiAgICB0eXBlOiBwYXJ0c1swXSxcbiAgICBkb21haW46IHBhcnRzWzFdLFxuICAgIGlkZW50aXR5OiBwYXJ0c1syXVxuICB9O1xuXG4gIHJldHVybiByZXN1bHQ7XG5cbn1cblxuLyoqXG4gKiBNYWtlIGEgQ09QWSBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xuICAvL1RPRE86IHNpbXBsZSBidXQgaW5lZmZpY2llbnQgSlNPTiBkZWVwIGNsb25lLi4uXG4gIGlmIChvYmopIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY29uZmlndXJhdGlvbiBmcm9tIGFuIGpzb24gZmlsZTtcbiAqIEBwYXJhbSAge0pTT05PYmplY3R9IGpzb25GaWxlXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWcoSlNPTk9iamVjdCkge1xuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5lbnZpcm9ubWVudCk7XG4gIHJldHVybiBKU09OT2JqZWN0W3Byb2Nlc3MuZW52LmVudmlyb25tZW50XTtcbn1cblxuLyoqXG4gKiBHZXQgV2ViUlRDIEFQSSByZXNvdXJjZXNcbiAqIEBwYXJhbSAge09iamVjdH0gICAgIG9wdGlvbnMgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGluZm9ybWF0aW9uIHRoYXQgcmVzb3VyY2VzIHdpbGwgYmUgdXNlZCAoY2FtZXJhLCBtaWMsIHJlc29sdXRpb24sIGV0Yyk7XG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKSB7XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpXG4gICAgICAudGhlbihmdW5jdGlvbihtZWRpYVN0cmVhbSkge1xuICAgICAgICByZXNvbHZlKG1lZGlhU3RyZWFtKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIHJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKCkge1xuXG4gICQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IG8gPSB7fTtcbiAgICBsZXQgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAkLmVhY2goYSwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAob1t0aGlzLm5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xuICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IFtvW3RoaXMubmFtZV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSB8fCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgJC5mbi5zZXJpYWxpemVPYmplY3RBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBvID0ge307XG4gICAgbGV0IGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgJC5lYWNoKGEsIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcbiAgICAgICAgICBvW3RoaXMubmFtZV0gPSBbb1t0aGlzLm5hbWVdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUgfHwgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0pIG9bdGhpcy5uYW1lXSA9IFtdO1xuICAgICAgICBvW3RoaXMubmFtZV0ucHVzaCh0aGlzLnZhbHVlIHx8ICcnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBvO1xuICB9O1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZW1wbGF0ZShwYXRoLCBzY3JpcHQpIHtcblxuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICBpZiAoSGFuZGxlYmFycy50ZW1wbGF0ZXMgPT09IHVuZGVmaW5lZCB8fCBIYW5kbGViYXJzLnRlbXBsYXRlc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBIYW5kbGViYXJzLnRlbXBsYXRlcyA9IHt9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKEhhbmRsZWJhcnMudGVtcGxhdGVzW25hbWVdKTtcbiAgICB9XG5cbiAgICBsZXQgdGVtcGxhdGVGaWxlID0gJC5hamF4KHtcbiAgICAgIHVybDogcGF0aCArICcuaGJzJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgSGFuZGxlYmFycy50ZW1wbGF0ZXNbbmFtZV0gPSBIYW5kbGViYXJzLmNvbXBpbGUoZGF0YSk7XG4gICAgICB9LFxuXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgcmV0dXJuIHJlYXNvbjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBzY3JpcHRGaWxlID0gJC5nZXRTY3JpcHQoc2NyaXB0KTtcblxuICAgIGxldCByZXF1ZXN0cyA9IFtdO1xuICAgIGlmIChwYXRoKSByZXF1ZXN0cy5wdXNoKHRlbXBsYXRlRmlsZSk7XG4gICAgaWYgKHNjcmlwdCkgcmVxdWVzdHMucHVzaChzY3JpcHRGaWxlKTtcblxuICAgIFByb21pc2UuYWxsKHJlcXVlc3RzKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgcmVzb2x2ZShIYW5kbGViYXJzLnRlbXBsYXRlc1tuYW1lXSk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICByZWplY3QocmVhc29uKTtcbiAgICB9KTtcblxuICB9KTtcbn1cbiJdfQ==
