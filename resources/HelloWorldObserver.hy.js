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

// Distribution file for Syncher.js 
// version: 0.3.0
// Last build: Thu Jul 21 2016 15:31:32 GMT+0100 (WEST)

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Syncher=e()}}(function(){return function e(t,r,o){function n(s,c){if(!r[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return n(r?r:e)},l,l.exports,e,t,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)n(o[s]);return n}({1:[function(e,t,r){Object.observe&&!Array.observe&&function(e,t){"use strict";var r=e.getNotifier,o="performChange",n="_original",i="splice",s={push:function a(e){var t=arguments,s=a[n].apply(this,t);return r(this)[o](i,function(){return{index:s-t.length,addedCount:t.length,removed:[]}}),s},unshift:function u(e){var t=arguments,s=u[n].apply(this,t);return r(this)[o](i,function(){return{index:0,addedCount:t.length,removed:[]}}),s},pop:function l(){var e=this.length,t=l[n].call(this);return this.length!==e&&r(this)[o](i,function(){return{index:this.length,addedCount:0,removed:[t]}},this),t},shift:function f(){var e=this.length,t=f[n].call(this);return this.length!==e&&r(this)[o](i,function(){return{index:0,addedCount:0,removed:[t]}},this),t},splice:function d(e,t){var s=arguments,c=d[n].apply(this,s);return(c.length||s.length>2)&&r(this)[o](i,function(){return{index:e,addedCount:s.length-2,removed:c}},this),c}};for(var c in s)s[c][n]=t.prototype[c],t.prototype[c]=s[c];t.observe=function(t,r){return e.observe(t,r,["add","update","delete",i])},t.unobserve=e.unobserve}(Object,Array)},{}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":18}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":19}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":20}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0}},{"core-js/library/fn/object/get-own-property-descriptor":21}],6:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":22}],7:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":23}],8:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":24}],9:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":25}],10:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":26}],11:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol/iterator"),__esModule:!0}},{"core-js/library/fn/symbol/iterator":27}],12:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],13:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../core-js/object/define-property"),i=o(n);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i["default"])(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}()},{"../core-js/object/define-property":4}],14:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../core-js/object/get-prototype-of"),i=o(n),s=e("../core-js/object/get-own-property-descriptor"),c=o(s);r["default"]=function a(e,t,r){null===e&&(e=Function.prototype);var o=(0,c["default"])(e,t);if(void 0===o){var n=(0,i["default"])(e);return null===n?void 0:a(n,t,r)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(r)}},{"../core-js/object/get-own-property-descriptor":5,"../core-js/object/get-prototype-of":6}],15:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../core-js/object/set-prototype-of"),i=o(n),s=e("../core-js/object/create"),c=o(s),a=e("../helpers/typeof"),u=o(a);r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,u["default"])(t)));e.prototype=(0,c["default"])(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i["default"]?(0,i["default"])(e,t):e.__proto__=t)}},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":8,"../helpers/typeof":17}],16:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../helpers/typeof"),i=o(n);r["default"]=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,i["default"])(t))&&"function"!=typeof t?e:t}},{"../helpers/typeof":17}],17:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var n=e("../core-js/symbol/iterator"),i=o(n),s=e("../core-js/symbol"),c=o(s),a="function"==typeof c["default"]&&"symbol"==typeof i["default"]?function(e){return typeof e}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":typeof e};r["default"]="function"==typeof c["default"]&&"symbol"===a(i["default"])?function(e){return"undefined"==typeof e?"undefined":a(e)}:function(e){return e&&"function"==typeof c["default"]&&e.constructor===c["default"]?"symbol":"undefined"==typeof e?"undefined":a(e)}},{"../core-js/symbol":10,"../core-js/symbol/iterator":11}],18:[function(e,t,r){var o=e("../../modules/_core"),n=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(e){return n.stringify.apply(n,arguments)}},{"../../modules/_core":35}],19:[function(e,t,r){e("../../modules/es6.object.create");var o=e("../../modules/_core").Object;t.exports=function(e,t){return o.create(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.create":100}],20:[function(e,t,r){e("../../modules/es6.object.define-property");var o=e("../../modules/_core").Object;t.exports=function(e,t,r){return o.defineProperty(e,t,r)}},{"../../modules/_core":35,"../../modules/es6.object.define-property":101}],21:[function(e,t,r){e("../../modules/es6.object.get-own-property-descriptor");var o=e("../../modules/_core").Object;t.exports=function(e,t){return o.getOwnPropertyDescriptor(e,t)}},{"../../modules/_core":35,"../../modules/es6.object.get-own-property-descriptor":102}],22:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/_core").Object.getPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.get-prototype-of":103}],23:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/_core").Object.keys},{"../../modules/_core":35,"../../modules/es6.object.keys":104}],24:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/_core").Object.setPrototypeOf},{"../../modules/_core":35,"../../modules/es6.object.set-prototype-of":105}],25:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/_core").Promise},{"../modules/_core":35,"../modules/es6.object.to-string":106,"../modules/es6.promise":107,"../modules/es6.string.iterator":108,"../modules/web.dom.iterable":112}],26:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),e("../../modules/es7.symbol.async-iterator"),e("../../modules/es7.symbol.observable"),t.exports=e("../../modules/_core").Symbol},{"../../modules/_core":35,"../../modules/es6.object.to-string":106,"../../modules/es6.symbol":109,"../../modules/es7.symbol.async-iterator":110,"../../modules/es7.symbol.observable":111}],27:[function(e,t,r){e("../../modules/es6.string.iterator"),e("../../modules/web.dom.iterable"),t.exports=e("../../modules/_wks-ext").f("iterator")},{"../../modules/_wks-ext":96,"../../modules/es6.string.iterator":108,"../../modules/web.dom.iterable":112}],28:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],29:[function(e,t,r){t.exports=function(){}},{}],30:[function(e,t,r){t.exports=function(e,t,r,o){if(!(e instanceof t)||void 0!==o&&o in e)throw TypeError(r+": incorrect invocation!");return e}},{}],31:[function(e,t,r){var o=e("./_is-object");t.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},{"./_is-object":54}],32:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_to-length"),i=e("./_to-index");t.exports=function(e){return function(t,r,s){var c,a=o(t),u=n(a.length),l=i(s,u);if(e&&r!=r){for(;u>l;)if(c=a[l++],c!=c)return!0}else for(;u>l;l++)if((e||l in a)&&a[l]===r)return e||l||0;return!e&&-1}}},{"./_to-index":88,"./_to-iobject":90,"./_to-length":91}],33:[function(e,t,r){var o=e("./_cof"),n=e("./_wks")("toStringTag"),i="Arguments"==o(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(r){}};t.exports=function(e){var t,r,c;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),n))?r:i?o(t):"Object"==(c=o(t))&&"function"==typeof t.callee?"Arguments":c}},{"./_cof":34,"./_wks":97}],34:[function(e,t,r){var o={}.toString;t.exports=function(e){return o.call(e).slice(8,-1)}},{}],35:[function(e,t,r){var o=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},{}],36:[function(e,t,r){var o=e("./_a-function");t.exports=function(e,t,r){if(o(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,o){return e.call(t,r,o)};case 3:return function(r,o,n){return e.call(t,r,o,n)}}return function(){return e.apply(t,arguments)}}},{"./_a-function":28}],37:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],38:[function(e,t,r){t.exports=!e("./_fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./_fails":43}],39:[function(e,t,r){var o=e("./_is-object"),n=e("./_global").document,i=o(n)&&o(n.createElement);t.exports=function(e){return i?n.createElement(e):{}}},{"./_global":45,"./_is-object":54}],40:[function(e,t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},{}],41:[function(e,t,r){var o=e("./_object-keys"),n=e("./_object-gops"),i=e("./_object-pie");t.exports=function(e){var t=o(e),r=n.f;if(r)for(var s,c=r(e),a=i.f,u=0;c.length>u;)a.call(e,s=c[u++])&&t.push(s);return t}},{"./_object-gops":71,"./_object-keys":74,"./_object-pie":75}],42:[function(e,t,r){var o=e("./_global"),n=e("./_core"),i=e("./_ctx"),s=e("./_hide"),c="prototype",a=function(e,t,r){var u,l,f,d=e&a.F,_=e&a.G,p=e&a.S,b=e&a.P,h=e&a.B,y=e&a.W,v=_?n:n[t]||(n[t]={}),j=v[c],m=_?o:p?o[t]:(o[t]||{})[c];_&&(r=t);for(u in r)l=!d&&m&&void 0!==m[u],l&&u in v||(f=l?m[u]:r[u],v[u]=_&&"function"!=typeof m[u]?r[u]:h&&l?i(f,o):y&&m[u]==f?function(e){var t=function(t,r,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,o)}return e.apply(this,arguments)};return t[c]=e[c],t}(f):b&&"function"==typeof f?i(Function.call,f):f,b&&((v.virtual||(v.virtual={}))[u]=f,e&a.R&&j&&!j[u]&&s(j,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},{"./_core":35,"./_ctx":36,"./_global":45,"./_hide":47}],43:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],44:[function(e,t,r){var o=e("./_ctx"),n=e("./_iter-call"),i=e("./_is-array-iter"),s=e("./_an-object"),c=e("./_to-length"),a=e("./core.get-iterator-method"),u={},l={},r=t.exports=function(e,t,r,f,d){var _,p,b,h,y=d?function(){return e}:a(e),v=o(r,f,t?2:1),j=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(i(y)){for(_=c(e.length);_>j;j++)if(h=t?v(s(p=e[j])[0],p[1]):v(e[j]),h===u||h===l)return h}else for(b=y.call(e);!(p=b.next()).done;)if(h=n(b,v,p.value,t),h===u||h===l)return h};r.BREAK=u,r.RETURN=l},{"./_an-object":31,"./_ctx":36,"./_is-array-iter":52,"./_iter-call":55,"./_to-length":91,"./core.get-iterator-method":98}],45:[function(e,t,r){var o=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=o)},{}],46:[function(e,t,r){var o={}.hasOwnProperty;t.exports=function(e,t){return o.call(e,t)}},{}],47:[function(e,t,r){var o=e("./_object-dp"),n=e("./_property-desc");t.exports=e("./_descriptors")?function(e,t,r){return o.f(e,t,n(1,r))}:function(e,t,r){return e[t]=r,e}},{"./_descriptors":38,"./_object-dp":66,"./_property-desc":77}],48:[function(e,t,r){t.exports=e("./_global").document&&document.documentElement},{"./_global":45}],49:[function(e,t,r){t.exports=!e("./_descriptors")&&!e("./_fails")(function(){return 7!=Object.defineProperty(e("./_dom-create")("div"),"a",{get:function(){return 7}}).a})},{"./_descriptors":38,"./_dom-create":39,"./_fails":43}],50:[function(e,t,r){t.exports=function(e,t,r){var o=void 0===r;switch(t.length){case 0:return o?e():e.call(r);case 1:return o?e(t[0]):e.call(r,t[0]);case 2:return o?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return o?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return o?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],51:[function(e,t,r){var o=e("./_cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},{"./_cof":34}],52:[function(e,t,r){var o=e("./_iterators"),n=e("./_wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(o.Array===e||i[n]===e)}},{"./_iterators":60,"./_wks":97}],53:[function(e,t,r){var o=e("./_cof");t.exports=Array.isArray||function(e){return"Array"==o(e)}},{"./_cof":34}],54:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],55:[function(e,t,r){var o=e("./_an-object");t.exports=function(e,t,r,n){try{return n?t(o(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&o(s.call(e)),i}}},{"./_an-object":31}],56:[function(e,t,r){"use strict";var o=e("./_object-create"),n=e("./_property-desc"),i=e("./_set-to-string-tag"),s={};e("./_hide")(s,e("./_wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=o(s,{next:n(1,r)}),i(e,t+" Iterator")}},{"./_hide":47,"./_object-create":65,"./_property-desc":77,"./_set-to-string-tag":82,"./_wks":97}],57:[function(e,t,r){"use strict";var o=e("./_library"),n=e("./_export"),i=e("./_redefine"),s=e("./_hide"),c=e("./_has"),a=e("./_iterators"),u=e("./_iter-create"),l=e("./_set-to-string-tag"),f=e("./_object-gpo"),d=e("./_wks")("iterator"),_=!([].keys&&"next"in[].keys()),p="@@iterator",b="keys",h="values",y=function(){return this};t.exports=function(e,t,r,v,j,m,g){u(r,t,v);var w,O,k,x=function(e){if(!_&&e in R)return R[e];switch(e){case b:return function(){return new r(this,e)};case h:return function(){return new r(this,e)}}return function(){return new r(this,e)}},C=t+" Iterator",E=j==h,S=!1,R=e.prototype,T=R[d]||R[p]||j&&R[j],M=T||x(j),P=j?E?x("entries"):M:void 0,A="Array"==t?R.entries||T:T;if(A&&(k=f(A.call(new e)),k!==Object.prototype&&(l(k,C,!0),o||c(k,d)||s(k,d,y))),E&&T&&T.name!==h&&(S=!0,M=function(){return T.call(this)}),o&&!g||!_&&!S&&R[d]||s(R,d,M),a[t]=M,a[C]=y,j)if(w={values:E?M:x(h),keys:m?M:x(b),entries:P},g)for(O in w)O in R||i(R,O,w[O]);else n(n.P+n.F*(_||S),t,w);return w}},{"./_export":42,"./_has":46,"./_hide":47,"./_iter-create":56,"./_iterators":60,"./_library":62,"./_object-gpo":72,"./_redefine":79,"./_set-to-string-tag":82,"./_wks":97}],58:[function(e,t,r){var o=e("./_wks")("iterator"),n=!1;try{var i=[7][o]();i["return"]=function(){n=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!n)return!1;var r=!1;try{var i=[7],s=i[o]();s.next=function(){return{done:r=!0}},i[o]=function(){return s},e(i)}catch(c){}return r}},{"./_wks":97}],59:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],60:[function(e,t,r){t.exports={}},{}],61:[function(e,t,r){var o=e("./_object-keys"),n=e("./_to-iobject");t.exports=function(e,t){for(var r,i=n(e),s=o(i),c=s.length,a=0;c>a;)if(i[r=s[a++]]===t)return r}},{"./_object-keys":74,"./_to-iobject":90}],62:[function(e,t,r){t.exports=!0},{}],63:[function(e,t,r){var o=e("./_uid")("meta"),n=e("./_is-object"),i=e("./_has"),s=e("./_object-dp").f,c=0,a=Object.isExtensible||function(){return!0},u=!e("./_fails")(function(){return a(Object.preventExtensions({}))}),l=function(e){s(e,o,{value:{i:"O"+ ++c,w:{}}})},f=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,o)){if(!a(e))return"F";if(!t)return"E";l(e)}return e[o].i},d=function(e,t){if(!i(e,o)){if(!a(e))return!0;if(!t)return!1;l(e)}return e[o].w},_=function(e){return u&&p.NEED&&a(e)&&!i(e,o)&&l(e),e},p=t.exports={KEY:o,NEED:!1,fastKey:f,getWeak:d,onFreeze:_}},{"./_fails":43,"./_has":46,"./_is-object":54,"./_object-dp":66,"./_uid":94}],64:[function(e,t,r){var o=e("./_global"),n=e("./_task").set,i=o.MutationObserver||o.WebKitMutationObserver,s=o.process,c=o.Promise,a="process"==e("./_cof")(s);t.exports=function(){var e,t,r,u=function(){var o,n;for(a&&(o=s.domain)&&o.exit();e;){n=e.fn,e=e.next;try{n()}catch(i){throw e?r():t=void 0,i}}t=void 0,o&&o.enter()};if(a)r=function(){s.nextTick(u)};else if(i){var l=!0,f=document.createTextNode("");new i(u).observe(f,{characterData:!0}),r=function(){f.data=l=!l}}else if(c&&c.resolve){var d=c.resolve();r=function(){d.then(u)}}else r=function(){n.call(o,u)};return function(o){var n={fn:o,next:void 0};t&&(t.next=n),e||(e=n,r()),t=n}}},{"./_cof":34,"./_global":45,"./_task":87}],65:[function(e,t,r){var o=e("./_an-object"),n=e("./_object-dps"),i=e("./_enum-bug-keys"),s=e("./_shared-key")("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,r=e("./_dom-create")("iframe"),o=i.length,n=">";for(r.style.display="none",e("./_html").appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+n),t.close(),u=t.F;o--;)delete u[a][i[o]];return u()};t.exports=Object.create||function(e,t){var r;return null!==e?(c[a]=o(e),r=new c,c[a]=null,r[s]=e):r=u(),void 0===t?r:n(r,t)}},{"./_an-object":31,"./_dom-create":39,"./_enum-bug-keys":40,"./_html":48,"./_object-dps":67,"./_shared-key":83}],66:[function(e,t,r){var o=e("./_an-object"),n=e("./_ie8-dom-define"),i=e("./_to-primitive"),s=Object.defineProperty;r.f=e("./_descriptors")?Object.defineProperty:function(e,t,r){if(o(e),t=i(t,!0),o(r),n)try{return s(e,t,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},{"./_an-object":31,"./_descriptors":38,"./_ie8-dom-define":49,"./_to-primitive":93}],67:[function(e,t,r){var o=e("./_object-dp"),n=e("./_an-object"),i=e("./_object-keys");t.exports=e("./_descriptors")?Object.defineProperties:function(e,t){n(e);for(var r,s=i(t),c=s.length,a=0;c>a;)o.f(e,r=s[a++],t[r]);return e}},{"./_an-object":31,"./_descriptors":38,"./_object-dp":66,"./_object-keys":74}],68:[function(e,t,r){var o=e("./_object-pie"),n=e("./_property-desc"),i=e("./_to-iobject"),s=e("./_to-primitive"),c=e("./_has"),a=e("./_ie8-dom-define"),u=Object.getOwnPropertyDescriptor;r.f=e("./_descriptors")?u:function(e,t){if(e=i(e),t=s(t,!0),a)try{return u(e,t)}catch(r){}if(c(e,t))return n(!o.f.call(e,t),e[t])}},{"./_descriptors":38,"./_has":46,"./_ie8-dom-define":49,"./_object-pie":75,"./_property-desc":77,"./_to-iobject":90,"./_to-primitive":93}],69:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_object-gopn").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(e){try{return n(e)}catch(t){return s.slice()}};t.exports.f=function(e){return s&&"[object Window]"==i.call(e)?c(e):n(o(e))}},{"./_object-gopn":70,"./_to-iobject":90}],70:[function(e,t,r){var o=e("./_object-keys-internal"),n=e("./_enum-bug-keys").concat("length","prototype");r.f=Object.getOwnPropertyNames||function(e){return o(e,n)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],71:[function(e,t,r){r.f=Object.getOwnPropertySymbols},{}],72:[function(e,t,r){var o=e("./_has"),n=e("./_to-object"),i=e("./_shared-key")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(e){return e=n(e),o(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},{"./_has":46,"./_shared-key":83,"./_to-object":92}],73:[function(e,t,r){var o=e("./_has"),n=e("./_to-iobject"),i=e("./_array-includes")(!1),s=e("./_shared-key")("IE_PROTO");t.exports=function(e,t){var r,c=n(e),a=0,u=[];for(r in c)r!=s&&o(c,r)&&u.push(r);for(;t.length>a;)o(c,r=t[a++])&&(~i(u,r)||u.push(r));return u}},{"./_array-includes":32,"./_has":46,"./_shared-key":83,"./_to-iobject":90}],74:[function(e,t,r){var o=e("./_object-keys-internal"),n=e("./_enum-bug-keys");t.exports=Object.keys||function(e){return o(e,n)}},{"./_enum-bug-keys":40,"./_object-keys-internal":73}],75:[function(e,t,r){r.f={}.propertyIsEnumerable},{}],76:[function(e,t,r){var o=e("./_export"),n=e("./_core"),i=e("./_fails");t.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],s={};s[e]=t(r),o(o.S+o.F*i(function(){r(1)}),"Object",s)}},{"./_core":35,"./_export":42,"./_fails":43}],77:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],78:[function(e,t,r){var o=e("./_hide");t.exports=function(e,t,r){for(var n in t)r&&e[n]?e[n]=t[n]:o(e,n,t[n]);return e}},{"./_hide":47}],79:[function(e,t,r){t.exports=e("./_hide")},{"./_hide":47}],80:[function(e,t,r){var o=e("./_is-object"),n=e("./_an-object"),i=function(e,t){if(n(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./_ctx")(Function.call,e("./_object-gopd").f(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(n){r=!0}return function(e,t){return i(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:i}},{"./_an-object":31,"./_ctx":36,"./_is-object":54,"./_object-gopd":68}],81:[function(e,t,r){"use strict";var o=e("./_global"),n=e("./_core"),i=e("./_object-dp"),s=e("./_descriptors"),c=e("./_wks")("species");t.exports=function(e){var t="function"==typeof n[e]?n[e]:o[e];s&&t&&!t[c]&&i.f(t,c,{configurable:!0,get:function(){return this}})}},{"./_core":35,"./_descriptors":38,"./_global":45,"./_object-dp":66,"./_wks":97}],82:[function(e,t,r){var o=e("./_object-dp").f,n=e("./_has"),i=e("./_wks")("toStringTag");t.exports=function(e,t,r){e&&!n(e=r?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},{"./_has":46,"./_object-dp":66,"./_wks":97}],83:[function(e,t,r){var o=e("./_shared")("keys"),n=e("./_uid");t.exports=function(e){return o[e]||(o[e]=n(e))}},{"./_shared":84,"./_uid":94}],84:[function(e,t,r){var o=e("./_global"),n="__core-js_shared__",i=o[n]||(o[n]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./_global":45}],85:[function(e,t,r){var o=e("./_an-object"),n=e("./_a-function"),i=e("./_wks")("species");t.exports=function(e,t){var r,s=o(e).constructor;return void 0===s||void 0==(r=o(s)[i])?t:n(r)}},{"./_a-function":28,"./_an-object":31,"./_wks":97}],86:[function(e,t,r){var o=e("./_to-integer"),n=e("./_defined");t.exports=function(e){return function(t,r){var i,s,c=String(n(t)),a=o(r),u=c.length;return a<0||a>=u?e?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?e?c.charAt(a):i:e?c.slice(a,a+2):(i-55296<<10)+(s-56320)+65536)}}},{"./_defined":37,"./_to-integer":89}],87:[function(e,t,r){var o,n,i,s=e("./_ctx"),c=e("./_invoke"),a=e("./_html"),u=e("./_dom-create"),l=e("./_global"),f=l.process,d=l.setImmediate,_=l.clearImmediate,p=l.MessageChannel,b=0,h={},y="onreadystatechange",v=function(){var e=+this;if(h.hasOwnProperty(e)){var t=h[e];delete h[e],t()}},j=function(e){v.call(e.data)};d&&_||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return h[++b]=function(){c("function"==typeof e?e:Function(e),t)},o(b),b},_=function(e){delete h[e]},"process"==e("./_cof")(f)?o=function(e){f.nextTick(s(v,e,1))}:p?(n=new p,i=n.port2,n.port1.onmessage=j,o=s(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(o=function(e){l.postMessage(e+"","*")},l.addEventListener("message",j,!1)):o=y in u("script")?function(e){a.appendChild(u("script"))[y]=function(){a.removeChild(this),v.call(e)}}:function(e){setTimeout(s(v,e,1),0)}),t.exports={set:d,clear:_}},{"./_cof":34,"./_ctx":36,"./_dom-create":39,"./_global":45,"./_html":48,"./_invoke":50}],88:[function(e,t,r){var o=e("./_to-integer"),n=Math.max,i=Math.min;t.exports=function(e,t){return e=o(e),e<0?n(e+t,0):i(e,t)}},{"./_to-integer":89}],89:[function(e,t,r){var o=Math.ceil,n=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?n:o)(e)}},{}],90:[function(e,t,r){var o=e("./_iobject"),n=e("./_defined");t.exports=function(e){return o(n(e))}},{"./_defined":37,"./_iobject":51}],91:[function(e,t,r){var o=e("./_to-integer"),n=Math.min;t.exports=function(e){return e>0?n(o(e),9007199254740991):0}},{"./_to-integer":89}],92:[function(e,t,r){var o=e("./_defined");t.exports=function(e){return Object(o(e))}},{"./_defined":37}],93:[function(e,t,r){var o=e("./_is-object");t.exports=function(e,t){if(!o(e))return e;var r,n;if(t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;if("function"==typeof(r=e.valueOf)&&!o(n=r.call(e)))return n;if(!t&&"function"==typeof(r=e.toString)&&!o(n=r.call(e)))return n;throw TypeError("Can't convert object to primitive value")}},{"./_is-object":54}],94:[function(e,t,r){var o=0,n=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++o+n).toString(36))}},{}],95:[function(e,t,r){var o=e("./_global"),n=e("./_core"),i=e("./_library"),s=e("./_wks-ext"),c=e("./_object-dp").f;t.exports=function(e){var t=n.Symbol||(n.Symbol=i?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:s.f(e)})}},{"./_core":35,"./_global":45,"./_library":62,"./_object-dp":66,"./_wks-ext":96}],96:[function(e,t,r){r.f=e("./_wks")},{"./_wks":97}],97:[function(e,t,r){var o=e("./_shared")("wks"),n=e("./_uid"),i=e("./_global").Symbol,s="function"==typeof i,c=t.exports=function(e){return o[e]||(o[e]=s&&i[e]||(s?i:n)("Symbol."+e))};c.store=o},{"./_global":45,"./_shared":84,"./_uid":94}],98:[function(e,t,r){var o=e("./_classof"),n=e("./_wks")("iterator"),i=e("./_iterators");t.exports=e("./_core").getIteratorMethod=function(e){if(void 0!=e)return e[n]||e["@@iterator"]||i[o(e)]}},{"./_classof":33,"./_core":35,"./_iterators":60,"./_wks":97}],99:[function(e,t,r){"use strict";var o=e("./_add-to-unscopables"),n=e("./_iter-step"),i=e("./_iterators"),s=e("./_to-iobject");t.exports=e("./_iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,n(1)):"keys"==t?n(0,r):"values"==t?n(0,e[r]):n(0,[r,e[r]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},{"./_add-to-unscopables":29,"./_iter-define":57,"./_iter-step":59,"./_iterators":60,"./_to-iobject":90}],100:[function(e,t,r){var o=e("./_export");o(o.S,"Object",{create:e("./_object-create")})},{"./_export":42,"./_object-create":65}],101:[function(e,t,r){var o=e("./_export");o(o.S+o.F*!e("./_descriptors"),"Object",{defineProperty:e("./_object-dp").f})},{"./_descriptors":38,"./_export":42,"./_object-dp":66}],102:[function(e,t,r){var o=e("./_to-iobject"),n=e("./_object-gopd").f;e("./_object-sap")("getOwnPropertyDescriptor",function(){return function(e,t){return n(o(e),t)}})},{"./_object-gopd":68,"./_object-sap":76,"./_to-iobject":90}],103:[function(e,t,r){var o=e("./_to-object"),n=e("./_object-gpo");e("./_object-sap")("getPrototypeOf",function(){return function(e){return n(o(e))}})},{"./_object-gpo":72,"./_object-sap":76,"./_to-object":92}],104:[function(e,t,r){var o=e("./_to-object"),n=e("./_object-keys");e("./_object-sap")("keys",function(){return function(e){return n(o(e))}})},{"./_object-keys":74,"./_object-sap":76,"./_to-object":92}],105:[function(e,t,r){var o=e("./_export");o(o.S,"Object",{setPrototypeOf:e("./_set-proto").set})},{"./_export":42,"./_set-proto":80}],106:[function(e,t,r){},{}],107:[function(e,t,r){"use strict";var o,n,i,s=e("./_library"),c=e("./_global"),a=e("./_ctx"),u=e("./_classof"),l=e("./_export"),f=e("./_is-object"),d=(e("./_an-object"),e("./_a-function")),_=e("./_an-instance"),p=e("./_for-of"),b=(e("./_set-proto").set,e("./_species-constructor")),h=e("./_task").set,y=e("./_microtask")(),v="Promise",j=c.TypeError,m=c.process,g=c[v],m=c.process,w="process"==u(m),O=function(){},k=!!function(){try{var t=g.resolve(1),r=(t.constructor={})[e("./_wks")("species")]=function(e){e(O,O)};return(w||"function"==typeof PromiseRejectionEvent)&&t.then(O)instanceof r}catch(o){}}(),x=function(e,t){return e===t||e===g&&t===i},C=function(e){var t;return!(!f(e)||"function"!=typeof(t=e.then))&&t},E=function(e){return x(g,e)?new S(e):new n(e)},S=n=function(e){var t,r;this.promise=new e(function(e,o){if(void 0!==t||void 0!==r)throw j("Bad Promise constructor");t=e,r=o}),this.resolve=d(t),this.reject=d(r)},R=function(e){try{e()}catch(t){return{error:t}}},T=function(e,t){if(!e._n){e._n=!0;var r=e._c;y(function(){for(var o=e._v,n=1==e._s,i=0,s=function(t){var r,i,s=n?t.ok:t.fail,c=t.resolve,a=t.reject,u=t.domain;try{s?(n||(2==e._h&&A(e),e._h=1),s===!0?r=o:(u&&u.enter(),r=s(o),u&&u.exit()),r===t.promise?a(j("Promise-chain cycle")):(i=C(r))?i.call(r,c,a):c(r)):a(o)}catch(l){a(l)}};r.length>i;)s(r[i++]);e._c=[],e._n=!1,t&&!e._h&&M(e)})}},M=function(e){h.call(c,function(){var t,r,o,n=e._v;if(P(e)&&(t=R(function(){w?m.emit("unhandledRejection",n,e):(r=c.onunhandledrejection)?r({promise:e,reason:n}):(o=c.console)&&o.error&&o.error("Unhandled promise rejection",n)}),e._h=w||P(e)?2:1),e._a=void 0,t)throw t.error})},P=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,o=0;r.length>o;)if(t=r[o++],t.fail||!P(t.promise))return!1;return!0},A=function(e){h.call(c,function(){var t;w?m.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},D=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),T(t,!0))},N=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===e)throw j("Promise can't be resolved itself");(t=C(e))?y(function(){var o={_w:r,_d:!1};try{t.call(e,a(N,o,1),a(D,o,1))}catch(n){D.call(o,n)}}):(r._v=e,r._s=1,T(r,!1))}catch(o){D.call({_w:r,_d:!1},o)}}};k||(g=function(e){_(this,g,v,"_h"),d(e),o.call(this);try{e(a(N,this,1),a(D,this,1))}catch(t){D.call(this,t)}},o=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=e("./_redefine-all")(g.prototype,{then:function(e,t){var r=E(b(this,g));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=w?m.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&T(this,!1),r.promise},"catch":function(e){return this.then(void 0,e)}}),S=function(){var e=new o;this.promise=e,this.resolve=a(N,e,1),this.reject=a(D,e,1)}),l(l.G+l.W+l.F*!k,{Promise:g}),e("./_set-to-string-tag")(g,v),e("./_set-species")(v),i=e("./_core")[v],l(l.S+l.F*!k,v,{reject:function(e){var t=E(this),r=t.reject;return r(e),
t.promise}}),l(l.S+l.F*(s||!k),v,{resolve:function(e){if(e instanceof g&&x(e.constructor,this))return e;var t=E(this),r=t.resolve;return r(e),t.promise}}),l(l.S+l.F*!(k&&e("./_iter-detect")(function(e){g.all(e)["catch"](O)})),v,{all:function(e){var t=this,r=E(t),o=r.resolve,n=r.reject,i=R(function(){var r=[],i=0,s=1;p(e,!1,function(e){var c=i++,a=!1;r.push(void 0),s++,t.resolve(e).then(function(e){a||(a=!0,r[c]=e,--s||o(r))},n)}),--s||o(r)});return i&&n(i.error),r.promise},race:function(e){var t=this,r=E(t),o=r.reject,n=R(function(){p(e,!1,function(e){t.resolve(e).then(r.resolve,o)})});return n&&o(n.error),r.promise}})},{"./_a-function":28,"./_an-instance":30,"./_an-object":31,"./_classof":33,"./_core":35,"./_ctx":36,"./_export":42,"./_for-of":44,"./_global":45,"./_is-object":54,"./_iter-detect":58,"./_library":62,"./_microtask":64,"./_redefine-all":78,"./_set-proto":80,"./_set-species":81,"./_set-to-string-tag":82,"./_species-constructor":85,"./_task":87,"./_wks":97}],108:[function(e,t,r){"use strict";var o=e("./_string-at")(!0);e("./_iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=o(t,r),this._i+=e.length,{value:e,done:!1})})},{"./_iter-define":57,"./_string-at":86}],109:[function(e,t,r){"use strict";var o=e("./_global"),n=e("./_has"),i=e("./_descriptors"),s=e("./_export"),c=e("./_redefine"),a=e("./_meta").KEY,u=e("./_fails"),l=e("./_shared"),f=e("./_set-to-string-tag"),d=e("./_uid"),_=e("./_wks"),p=e("./_wks-ext"),b=e("./_wks-define"),h=e("./_keyof"),y=e("./_enum-keys"),v=e("./_is-array"),j=e("./_an-object"),m=e("./_to-iobject"),g=e("./_to-primitive"),w=e("./_property-desc"),O=e("./_object-create"),k=e("./_object-gopn-ext"),x=e("./_object-gopd"),C=e("./_object-dp"),E=e("./_object-keys"),S=x.f,R=C.f,T=k.f,M=o.Symbol,P=o.JSON,A=P&&P.stringify,D="prototype",N=_("_hidden"),L=_("toPrimitive"),F={}.propertyIsEnumerable,I=l("symbol-registry"),U=l("symbols"),z=l("op-symbols"),H=Object[D],V="function"==typeof M,B=o.QObject,J=!B||!B[D]||!B[D].findChild,W=i&&u(function(){return 7!=O(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a})?function(e,t,r){var o=S(H,t);o&&delete H[t],R(e,t,r),o&&e!==H&&R(H,t,o)}:R,Y=function(e){var t=U[e]=O(M[D]);return t._k=e,t},q=V&&"symbol"==typeof M.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof M},K=function(e,t,r){return e===H&&K(z,t,r),j(e),t=g(t,!0),j(r),n(U,t)?(r.enumerable?(n(e,N)&&e[N][t]&&(e[N][t]=!1),r=O(r,{enumerable:w(0,!1)})):(n(e,N)||R(e,N,w(1,{})),e[N][t]=!0),W(e,t,r)):R(e,t,r)},G=function(e,t){j(e);for(var r,o=y(t=m(t)),n=0,i=o.length;i>n;)K(e,r=o[n++],t[r]);return e},Z=function(e,t){return void 0===t?O(e):G(O(e),t)},X=function(e){var t=F.call(this,e=g(e,!0));return!(this===H&&n(U,e)&&!n(z,e))&&(!(t||!n(this,e)||!n(U,e)||n(this,N)&&this[N][e])||t)},$=function(e,t){if(e=m(e),t=g(t,!0),e!==H||!n(U,t)||n(z,t)){var r=S(e,t);return!r||!n(U,t)||n(e,N)&&e[N][t]||(r.enumerable=!0),r}},Q=function(e){for(var t,r=T(m(e)),o=[],i=0;r.length>i;)n(U,t=r[i++])||t==N||t==a||o.push(t);return o},ee=function(e){for(var t,r=e===H,o=T(r?z:m(e)),i=[],s=0;o.length>s;)!n(U,t=o[s++])||r&&!n(H,t)||i.push(U[t]);return i};V||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===H&&t.call(z,r),n(this,N)&&n(this[N],e)&&(this[N][e]=!1),W(this,e,w(1,r))};return i&&J&&W(H,e,{configurable:!0,set:t}),Y(e)},c(M[D],"toString",function(){return this._k}),x.f=$,C.f=K,e("./_object-gopn").f=k.f=Q,e("./_object-pie").f=X,e("./_object-gops").f=ee,i&&!e("./_library")&&c(H,"propertyIsEnumerable",X,!0),p.f=function(e){return Y(_(e))}),s(s.G+s.W+s.F*!V,{Symbol:M});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)_(te[re++]);for(var te=E(_.store),re=0;te.length>re;)b(te[re++]);s(s.S+s.F*!V,"Symbol",{"for":function(e){return n(I,e+="")?I[e]:I[e]=M(e)},keyFor:function(e){if(q(e))return h(I,e);throw TypeError(e+" is not a symbol!")},useSetter:function(){J=!0},useSimple:function(){J=!1}}),s(s.S+s.F*!V,"Object",{create:Z,defineProperty:K,defineProperties:G,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:ee}),P&&s(s.S+s.F*(!V||u(function(){var e=M();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!q(e)){for(var t,r,o=[e],n=1;arguments.length>n;)o.push(arguments[n++]);return t=o[1],"function"==typeof t&&(r=t),!r&&v(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!q(t))return t}),o[1]=t,A.apply(P,o)}}}),M[D][L]||e("./_hide")(M[D],L,M[D].valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},{"./_an-object":31,"./_descriptors":38,"./_enum-keys":41,"./_export":42,"./_fails":43,"./_global":45,"./_has":46,"./_hide":47,"./_is-array":53,"./_keyof":61,"./_library":62,"./_meta":63,"./_object-create":65,"./_object-dp":66,"./_object-gopd":68,"./_object-gopn":70,"./_object-gopn-ext":69,"./_object-gops":71,"./_object-keys":74,"./_object-pie":75,"./_property-desc":77,"./_redefine":79,"./_set-to-string-tag":82,"./_shared":84,"./_to-iobject":90,"./_to-primitive":93,"./_uid":94,"./_wks":97,"./_wks-define":95,"./_wks-ext":96}],110:[function(e,t,r){e("./_wks-define")("asyncIterator")},{"./_wks-define":95}],111:[function(e,t,r){e("./_wks-define")("observable")},{"./_wks-define":95}],112:[function(e,t,r){e("./es6.array.iterator");for(var o=e("./_global"),n=e("./_hide"),i=e("./_iterators"),s=e("./_wks")("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],a=0;a<5;a++){var u=c[a],l=o[u],f=l&&l.prototype;f&&!f[s]&&n(f,s,u),i[u]=i.Array}},{"./_global":45,"./_hide":47,"./_iterators":60,"./_wks":97,"./es6.array.iterator":99}],113:[function(e,t,r){Object.observe||function(e,t,r,o){"use strict";var n,i,s=["add","update","delete","reconfigure","setPrototype","preventExtensions"],c=t.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}(e.prototype.toString),a=t.prototype.indexOf?t.indexOf||function(e,r,o){return t.prototype.indexOf.call(e,r,o)}:function(e,t,r){for(var o=r||0;o<e.length;o++)if(e[o]===t)return o;return-1},u=r.Map!==o&&Map.prototype.forEach?function(){return new Map}:function(){var e=[],t=[];return{size:0,has:function(t){return a(e,t)>-1},get:function(r){return t[a(e,r)]},set:function(r,o){var n=a(e,r);n===-1?(e.push(r),t.push(o),this.size++):t[n]=o},"delete":function(r){var o=a(e,r);o>-1&&(e.splice(o,1),t.splice(o,1),this.size--)},forEach:function(r){for(var o=0;o<e.length;o++)r.call(arguments[1],t[o],e[o],this)}}},l=e.getOwnPropertyNames?function(){var t=e.getOwnPropertyNames;try{arguments.callee}catch(r){var o=(t(a).join(" ")+" ").replace(/prototype |length |name /g,"").slice(0,-1).split(" ");o.length&&(t=function(t){var r=e.getOwnPropertyNames(t);if("function"==typeof t)for(var n,i=0;i<o.length;)(n=a(r,o[i++]))>-1&&r.splice(n,1);return r})}return t}():function(t){var r,o,n=[];if("hasOwnProperty"in t)for(r in t)t.hasOwnProperty(r)&&n.push(r);else{o=e.hasOwnProperty;for(r in t)o.call(t,r)&&n.push(r)}return c(t)&&n.push("length"),n},f=e.getPrototypeOf,d=e.defineProperties&&e.getOwnPropertyDescriptor,_=r.requestAnimationFrame||r.webkitRequestAnimationFrame||function(){var e=+new Date,t=e;return function(r){return setTimeout(function(){r((t=+new Date)-e)},17)}}(),p=function(e,t,r){var o=n.get(e);o?(h(o,e),m(e,o,t,r)):(o=b(e),m(e,o,t,r),1===n.size&&_(y))},b=function(t,r){var o,i=l(t),s=[],c=0,r={handlers:u(),frozen:!!e.isFrozen&&e.isFrozen(t),extensible:!e.isExtensible||e.isExtensible(t),proto:f&&f(t),properties:i,values:s,notifier:j(t,r)};if(d)for(o=r.descriptors=[];c<i.length;)o[c]=d(t,i[c]),s[c]=t[i[c++]];else for(;c<i.length;)s[c]=t[i[c++]];return n.set(t,r),r},h=function(){var t=d?function(e,t,r,o,n){var i=t.properties[r],s=e[i],c=t.values[r],a=t.descriptors[r];"value"in n&&(c===s?0===c&&1/c!==1/s:c===c||s===s)&&(g(e,t,{name:i,type:"update",object:e,oldValue:c},o),t.values[r]=s),!a.configurable||n.configurable&&n.writable===a.writable&&n.enumerable===a.enumerable&&n.get===a.get&&n.set===a.set||(g(e,t,{name:i,type:"reconfigure",object:e,oldValue:c},o),t.descriptors[r]=n)}:function(e,t,r,o){var n=t.properties[r],i=e[n],s=t.values[r];(s===i?0===s&&1/s!==1/i:s===s||i===i)&&(g(e,t,{name:n,type:"update",object:e,oldValue:s},o),t.values[r]=i)},r=d?function(e,r,o,n,i){for(var s,c=r.length;o&&c--;)null!==r[c]&&(s=d(e,r[c]),o--,s?t(e,n,c,i,s):(g(e,n,{name:r[c],type:"delete",object:e,oldValue:n.values[c]},i),n.properties.splice(c,1),n.values.splice(c,1),n.descriptors.splice(c,1)))}:function(e,t,r,o,n){for(var i=t.length;r&&i--;)null!==t[i]&&(g(e,o,{name:t[i],type:"delete",object:e,oldValue:o.values[i]},n),o.properties.splice(i,1),o.values.splice(i,1),r--)};return function(o,n,i){if(o.handlers.size&&!o.frozen){var s,c,u,_,p,b,h,y,v=o.values,j=o.descriptors,m=0;if(o.extensible)if(s=o.properties.slice(),c=s.length,u=l(n),j){for(;m<u.length;)p=u[m++],_=a(s,p),y=d(n,p),_===-1?(g(n,o,{name:p,type:"add",object:n},i),o.properties.push(p),v.push(n[p]),j.push(y)):(s[_]=null,c--,t(n,o,_,i,y));r(n,s,c,o,i),e.isExtensible(n)||(o.extensible=!1,g(n,o,{type:"preventExtensions",object:n},i),o.frozen=e.isFrozen(n))}else{for(;m<u.length;)p=u[m++],_=a(s,p),b=n[p],_===-1?(g(n,o,{name:p,type:"add",object:n},i),o.properties.push(p),v.push(b)):(s[_]=null,c--,t(n,o,_,i));r(n,s,c,o,i)}else if(!o.frozen){for(;m<s.length;m++)p=s[m],t(n,o,m,i,d(n,p));e.isFrozen(n)&&(o.frozen=!0)}f&&(h=f(n),h!==o.proto&&(g(n,o,{type:"setPrototype",name:"__proto__",object:n,oldValue:o.proto}),o.proto=h))}}}(),y=function(){n.size&&(n.forEach(h),i.forEach(v),_(y))},v=function(e,t){var r=e.changeRecords;r.length&&(e.changeRecords=[],t(r))},j=function(e,t){return arguments.length<2&&(t=n.get(e)),t&&t.notifier||{notify:function(t){t.type;var r=n.get(e);if(r){var o,i={object:e};for(o in t)"object"!==o&&(i[o]=t[o]);g(e,r,i)}},performChange:function(t,r){if("string"!=typeof t)throw new TypeError("Invalid non-string changeType");if("function"!=typeof r)throw new TypeError("Cannot perform non-function");var i,s,c=n.get(e),a=arguments[2],u=a===o?r():r.call(a);if(c&&h(c,e,t),c&&u&&"object"==typeof u){s={object:e,type:t};for(i in u)"object"!==i&&"type"!==i&&(s[i]=u[i]);g(e,c,s)}}}},m=function(e,t,r,o){var n=i.get(r);n||i.set(r,n={observed:u(),changeRecords:[]}),n.observed.set(e,{acceptList:o.slice(),data:t}),t.handlers.set(r,n)},g=function(e,t,r,o){t.handlers.forEach(function(t){var n=t.observed.get(e).acceptList;("string"!=typeof o||a(n,o)===-1)&&a(n,r.type)>-1&&t.changeRecords.push(r)})};n=u(),i=u(),e.observe=function(t,r,n){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.observe cannot observe non-object");if("function"!=typeof r)throw new TypeError("Object.observe cannot deliver to non-function");if(e.isFrozen&&e.isFrozen(r))throw new TypeError("Object.observe cannot deliver to a frozen function object");if(n===o)n=s;else if(!n||"object"!=typeof n)throw new TypeError("Third argument to Object.observe must be an array of strings.");return p(t,r,n),t},e.unobserve=function(e,t){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object.unobserve cannot unobserve non-object");if("function"!=typeof t)throw new TypeError("Object.unobserve cannot deliver to non-function");var r,o=i.get(t);return o&&(r=o.observed.get(e))&&(o.observed.forEach(function(e,t){h(e.data,t)}),_(function(){v(o,t)}),1===o.observed.size&&o.observed.has(e)?i["delete"](t):o.observed["delete"](e),1===r.data.handlers.size?n["delete"](e):r.data.handlers["delete"](t)),e},e.getNotifier=function(t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.getNotifier cannot getNotifier non-object");return e.isFrozen&&e.isFrozen(t)?null:j(t)},e.deliverChangeRecords=function(e){if("function"!=typeof e)throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");var t=i.get(e);t&&(t.observed.forEach(function(e,t){h(e.data,t)}),v(t,e))}}(Object,Array,this)},{}],114:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.DataObjectObserver=r.DataObjectReporter=r.Syncher=void 0,e("object.observe"),e("array.observe");var n=e("./syncher/Syncher"),i=o(n),s=e("./syncher/DataObjectReporter"),c=o(s),a=e("./syncher/DataObjectObserver"),u=o(a);r.Syncher=i["default"],r.DataObjectReporter=c["default"],r.DataObjectObserver=u["default"]},{"./syncher/DataObjectObserver":117,"./syncher/DataObjectReporter":118,"./syncher/Syncher":121,"array.observe":1,"object.observe":113}],115:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/core-js/promise"),i=o(n),s=e("babel-runtime/core-js/object/keys"),c=o(s),a=e("babel-runtime/helpers/classCallCheck"),u=o(a),l=e("babel-runtime/helpers/createClass"),f=o(l),d=e("./SyncObject"),_=o(d),p=e("./DataObjectChild"),b=o(p),h=e("../utils/utils.js"),y=function(){function e(t,r,o,n,i,s){(0,u["default"])(this,e);var c=this;c._syncher=t,c._url=r,c._schema=o,c._status=n,c._syncObj=new _["default"](i),c._childrens=s,c._version=0,c._childId=0,c._childrenObjects={},c._childrenListeners=[],c._owner=t._owner,c._bus=t._bus}return(0,f["default"])(e,[{key:"_allocateListeners",value:function(){var e=this,t=this,r=t._url+"/children/";t._childrens&&t._childrens.forEach(function(o){var n=r+o,i=t._bus.addListener(n,function(r){if(r.from!==e._owner)switch(console.log("DataObject-Children-RCV: ",r),r.type){case"create":t._onChildCreate(r);break;case"delete":console.log(r);break;default:t._changeChildren(r)}});t._childrenListeners.push(i)})}},{key:"_releaseListeners",value:function(){var e=this;e._childrenListeners.forEach(function(e){e.remove()}),(0,c["default"])(e._childrenObjects).forEach(function(t){e._childrenObjects[t]._releaseListeners()})}},{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"addChild",value:function(e,t){var r=this;r._childId++;var o=r._owner+"#"+r._childId,n=r._url+"/children/"+e,s={type:"create",from:r._owner,to:n,body:{resource:o,value:t}};return new i["default"](function(e){var i=r._bus.postMessage(s);console.log("create-reporter-child( "+r._owner+" ): ",s);var c=new b["default"](r,o,t,r._owner,i);c.onChange(function(e){r._onChange(e,{path:n,childId:o})}),r._childrenObjects[o]=c,e(c)})}},{key:"onAddChild",value:function(e){this._onAddChildrenHandler=e}},{key:"_onChildCreate",value:function(e){var t=this,r=e.body.resource;console.log("create-observer-child( "+t._owner+" ): ",e);var o=new b["default"](t,r,e.body.value);t._childrenObjects[r]=o,setTimeout(function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,source:t._owner}})});var n={type:e.type,from:e.from,url:e.to,value:e.body.value,childId:r,identity:e.body.identity};t._onAddChildrenHandler&&(console.log("ADD-CHILDREN-EVENT: ",n),t._onAddChildrenHandler(n))}},{key:"_onChange",value:function(e,t){var r=this;if(r._version++,"on"===r._status){var o={type:"update",from:r._url,to:r._url+"/changes",body:{version:r._version,source:r._owner,attribute:e.field}};e.oType===d.ObjectType.OBJECT?e.cType!==d.ChangeType.REMOVE&&(o.body.value=e.data):(o.body.attributeType=e.oType,o.body.value=e.data,e.cType!==d.ChangeType.UPDATE&&(o.body.operation=e.cType)),t&&(o.to=t.path,o.body.resource=t.childId),r._bus.postMessage(o)}}},{key:"_changeObject",value:function(e,t){var r=this;if(r._version+1===t.body.version){r._version++;var o=t.body.attribute,n=(0,h.deepClone)(t.body.value),i=e.findBefore(o);if(t.body.attributeType===d.ObjectType.ARRAY)if(t.body.operation===d.ChangeType.ADD){var s=i.obj,c=i.last;Array.prototype.splice.apply(s,[c,0].concat(n))}else if(t.body.operation===d.ChangeType.REMOVE){var a=i.obj,u=i.last;a.splice(u,n)}else i.obj[i.last]=n;else t.body.value?i.obj[i.last]=n:delete i.obj[i.last]}else console.log("UNSYNCHRONIZED VERSION: (data => "+r._version+", msg => "+t.body.version+")")}},{key:"_changeChildren",value:function(e){var t=this;console.log("Change children: ",t._owner,e);var r=e.body.resource,o=t._childrenObjects[r];o?t._changeObject(o._syncObj,e):console.log("No children found for: ",r)}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"childrens",get:function(){return this._childrenObjects}}]),e}();r["default"]=y,t.exports=r["default"]},{"../utils/utils.js":122,"./DataObjectChild":116,"./SyncObject":120,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],116:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/helpers/classCallCheck"),i=o(n),s=e("babel-runtime/helpers/createClass"),c=o(s),a=e("./SyncObject"),u=o(a),l=function(){function e(t,r,o,n,s){(0,i["default"])(this,e);var c=this;c._parent=t,c._childId=r,c._owner=n,c._msgId=s,c._syncObj=new u["default"](o),c._bus=t._bus,c._allocateListeners()}return(0,c["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._owner&&(e._listener=e._bus.addListener(e._owner,function(t){"response"===t.type&&t.id===e._msgId&&(console.log("DataObjectChild.onResponse:",t),e._onResponse(t))}))}},{key:"_releaseListeners",value:function(){var e=this;e._listener&&e._listener.remove()}},{key:"delete",value:function(){var e=this;delete e._parent._children[e._childId],e._releaseListeners()}},{key:"onChange",value:function(e){this._syncObj.observe(function(t){e(t)})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.body.source,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(r)}},{key:"childId",get:function(){return this._childId}},{key:"data",get:function(){return this._syncObj.data}}]),e}();r["default"]=l,t.exports=r["default"]},{"./SyncObject":120,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],117:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/core-js/object/keys"),i=o(n),s=e("babel-runtime/core-js/object/get-prototype-of"),c=o(s),a=e("babel-runtime/helpers/classCallCheck"),u=o(a),l=e("babel-runtime/helpers/createClass"),f=o(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),_=o(d),p=e("babel-runtime/helpers/get"),b=o(p),h=e("babel-runtime/helpers/inherits"),y=o(h),v=e("./DataObject"),j=o(v),m=e("./DataObjectChild"),g=o(m),w={ANY:"any",START:"start",EXACT:"exact"},O=function(e){function t(e,r,o,n,s,a,l){(0,u["default"])(this,t);var f=(0,_["default"])(this,(0,c["default"])(t).call(this,e,r,o,n,s.data,a)),d=f;return d._version=l,d._filters={},d._syncObj.observe(function(e){d._onFilter(e)}),(0,i["default"])(s.childrens).forEach(function(e){var t=s.childrens[e];d._childrenObjects[e]=new g["default"](d,e,t)}),d._allocateListeners(),f}return(0,y["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._changeListener=e._bus.addListener(e._url+"/changes",function(t){"update"===t.type&&(console.log("DataObjectObserver-"+e._url+"-RCV: ",t),e._changeObject(e._syncObj,t))})}},{key:"_releaseListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._changeListener.remove()}},{key:"delete",value:function(){var e=this;e._releaseListeners(),delete e._syncher._observers[e._url]}},{key:"unsubscribe",value:function(){var e=this,t={type:"unsubscribe",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectObserver-UNSUBSCRIBE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._observers[e._url])})}},{key:"onChange",value:function(e,t){var r=e,o={type:w.EXACT,callback:t},n=e.indexOf("*");n===e.length-1&&(0===n?o.type=w.ANY:(o.type=w.START,r=e.substr(0,e.length-1))),this._filters[r]=o}},{key:"_onFilter",value:function(e){var t=this;(0,i["default"])(t._filters).forEach(function(r){var o=t._filters[r];o.type===w.ANY?o.callback(e):o.type===w.START?0===e.field.indexOf(r)&&o.callback(e):o.type===w.EXACT&&e.field===r&&o.callback(e)})}}]),t}(j["default"]);r["default"]=O,t.exports=r["default"]},{"./DataObject":115,"./DataObjectChild":116,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],118:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/core-js/object/keys"),i=o(n),s=e("babel-runtime/core-js/object/get-prototype-of"),c=o(s),a=e("babel-runtime/helpers/classCallCheck"),u=o(a),l=e("babel-runtime/helpers/createClass"),f=o(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),_=o(d),p=e("babel-runtime/helpers/get"),b=o(p),h=e("babel-runtime/helpers/inherits"),y=o(h),v=e("./DataObject"),j=o(v),m=e("../utils/utils.js"),g=function(e){function t(e,r,o,n,i,s){(0,u["default"])(this,t);var a=(0,_["default"])(this,(0,c["default"])(t).call(this,e,r,o,n,i,s)),l=a;return l._subscriptions={},l._syncObj.observe(function(e){console.log("DataObjectReporter-"+r+"-SEND: ",e),l._onChange(e)}),l._allocateListeners(),a}return(0,y["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._objectListener=e._bus.addListener(e._url,function(t){switch(console.log("DataObject-"+e._url+"-RCV: ",t),t.type){case"response":e._onResponse(t);break;case"read":e._onRead(t)}})}},{key:"_releaseListeners",value:function(){(0,b["default"])((0,c["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._objectListener.remove()}},{key:"inviteObservers",value:function(e){var t=this,r={type:"create",from:t._syncher._owner,to:t._syncher._subURL,body:{resource:t._url,schema:t._schema,value:t._syncObj.data,authorise:e}};t._bus.postMessage(r)}},{key:"delete",value:function(){var e=this,t={type:"delete",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectReporter-DELETE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._reporters[e._url])})}},{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"onRead",value:function(e){this._onReadHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,r=e.body.from,o={type:e.body.type,url:r,identity:e.body.identity,accept:function(){var o={url:r,status:"on"};t._subscriptions[r]=o;var n={};return(0,i["default"])(t._childrenObjects).forEach(function(e){var r=t._childrenObjects[e].data;n[e]=(0,m.deepClone)(r)}),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:{data:(0,m.deepClone)(t.data),childrens:n}}}),o},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:r}})}};t._onSubscriptionHandler&&(console.log("SUBSCRIPTION-EVENT: ",o),t._onSubscriptionHandler(o))}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.body.from,o=t._subscriptions[r];delete t._subscriptions[r];var n={type:e.body.type,url:r,object:o};t._onSubscriptionHandler&&(console.log("UN-SUBSCRIPTION-EVENT: ",n),t._onSubscriptionHandler(n))}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.from,code:e.body.code};t._onResponseHandler&&(console.log("RESPONSE-EVENT: ",r),t._onResponseHandler(r))}},{key:"_onRead",value:function(e){var t=this,r={type:e.type,url:e.from,accept:function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,value:(0,m.deepClone)(t.data)}})},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:401,desc:r}})}};t._onReadHandler&&(console.log("READ-EVENT: ",r),t._onReadHandler(r))}},{key:"subscriptions",get:function(){return this._subscriptions}}]),t}(j["default"]);r["default"]=g,t.exports=r["default"]},{"../utils/utils.js":122,"./DataObject":115,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/get":14,"babel-runtime/helpers/inherits":15,"babel-runtime/helpers/possibleConstructorReturn":16}],119:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/helpers/classCallCheck"),i=o(n),s=e("babel-runtime/helpers/createClass"),c=o(s),a=function(){function e(t,r,o,n){(0,i["default"])(this,e);var s=this;s._owner=t,s._url=r,s._bus=o,s._children=n,s._changes=[],s._allocateListeners()}return(0,c["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._listener=e._bus.addListener(e._url,function(t){console.log("DataProvisional-"+e._url+"-RCV: ",t),e._changes.push(t)})}},{key:"_releaseListeners",value:function(){var e=this;e._listener.remove()}},{key:"apply",value:function(e){var t=this;t._changes.forEach(function(t){e._changeObject(e._syncObj,t)})}},{key:"children",get:function(){return this._children}}]),e}();r["default"]=a,t.exports=r["default"]},{"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],120:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.ObjectType=r.ChangeType=void 0;var n=e("babel-runtime/core-js/object/keys"),i=o(n),s=e("babel-runtime/helpers/classCallCheck"),c=o(s),a=e("babel-runtime/helpers/createClass"),u=o(a),l=e("../utils/utils.js"),f=function(){function e(t){(0,c["default"])(this,e);var r=this;r._observers=[],r._filters={},t?r._data=(0,l.deepClone)(t):r._data={},r._internalObserve(new d,r._data)}return(0,u["default"])(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},r=e.split(".");return t.last=r.pop(),t.obj=this._findWithSplit(r),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array}},{key:"_internalObserve",value:function(e,t){var r=this;if(r._isObservable(t)){var o=function(t){r._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,o);for(var n in t)r._isObservable(t[n])&&r._internalObserve(e["new"](n),t[n])}else if(t.constructor===Array){Array.observe(t,o);for(var i in t)if(r._isObservable(t[i])){var s=e["new"](new _(t[i],i));r._internalObserve(s,t[i])}}}}},{key:"_onChanges",value:function(e,t){var r=this;for(var o in t){var n=t[o].object,i=void 0;if(n.constructor===Object&&(i=b.OBJECT),n.constructor===Array&&(i=b.ARRAY),"splice"===t[o].type)!function(){var s=t[o].index,c=e["new"](""+s),a=c.toString(),u=t[o].removed.length;if(0!==u){var f=t[o].removed;f.forEach(function(t,o){r._isObservable(t)&&e.removeIndex(s+o)}),r._fireEvent({cType:p.REMOVE,oType:i,field:a,data:u})}var d=t[o].addedCount;if(0!==d){var b=n.slice(s,s+d);b.forEach(function(t,o){if(r._isObservable(t)){var n=e["new"](new _(t,s+o));r._internalObserve(n,t)}}),r._fireEvent({cType:p.ADD,oType:i,field:a,data:(0,l.deepClone)(b)})}s!==n.length-1&&e.reIndexFrom(n)}();else{var s=e["new"](t[o].name),c=s.toString();if(c.indexOf("Symbol")!==-1)continue;var a=n[t[o].name];"update"===t[o].type&&this._fireEvent({cType:p.UPDATE,oType:i,field:c,data:(0,l.deepClone)(a)}),"add"===t[o].type&&(this._internalObserve(s,a),this._fireEvent({cType:p.ADD,oType:i,field:c,data:(0,l.deepClone)(a)})),"delete"===t[o].type&&this._fireEvent({cType:p.REMOVE,oType:i,field:c})}}}},{key:"data",get:function(){return this._data}}]),e}(),d=function(){function e(){(0,c["default"])(this,e),this._path=[],this._observables={}}return(0,u["default"])(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;(0,i["default"])(this._observables).forEach(function(r){var o=t._observables[r],n=e.indexOf(o.obj);o.idx!=n&&(o.idx=n,delete t._observables[r],t._observables[n]=o)})}},{key:"new",value:function(e){e.constructor==_&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,r){0===r?e=t.toString():e+="."+t.toString()}),e}}]),e}(),_=function(){function e(t,r){(0,c["default"])(this,e),this.obj=t,this.idx=r}return(0,u["default"])(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),p=r.ChangeType={UPDATE:"update",ADD:"add",REMOVE:"remove"},b=r.ObjectType={OBJECT:"object",ARRAY:"array"};r["default"]=f},{"../utils/utils.js":122,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],121:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var n=e("babel-runtime/core-js/promise"),i=o(n),s=e("babel-runtime/helpers/classCallCheck"),c=o(s),a=e("babel-runtime/helpers/createClass"),u=o(a),l=e("./DataObjectReporter"),f=o(l),d=e("./DataObjectObserver"),_=o(d),p=e("./DataProvisional"),b=o(p),h=function(){function e(t,r,o){(0,c["default"])(this,e);var n=this;n._owner=t,n._bus=r,n._subURL=o.runtimeURL+"/sm",n._reporters={},n._observers={},n._provisionals={},r.addListener(t,function(e){if(e.from!==t)switch(console.log("Syncher-RCV: ",e),e.type){case"forward":n._onForward(e);break;case"create":n._onRemoteCreate(e);break;case"delete":n._onRemoteDelete(e)}})}return(0,u["default"])(e,[{key:"create",value:function(e,t,r){var o=this;r.reporter=o._owner,r.schema=e;var n={type:"create",from:o._owner,to:o._subURL,body:{schema:e,value:r,authorise:t}};return new i["default"](function(t,i){o._bus.postMessage(n,function(n){if(console.log("create-response: ",n),200===n.body.code){var s=n.body.resource,c=new f["default"](o,s,e,"on",r,n.body.childrenResources);o._reporters[s]=c,t(c)}else i(n.body.desc)})})}},{key:"subscribe",value:function(e,t){var r=this,o={type:"subscribe",from:r._owner,to:r._subURL,body:{schema:e,resource:t}};return new i["default"](function(n,i){r._bus.postMessage(o,function(o){console.log("subscribe-response: ",o);var s=r._provisionals[t];if(delete r._provisionals[t],s&&s._releaseListeners(),o.body.code<200)s=new b["default"](r._owner,t,r._bus,o.body.childrenResources),r._provisionals[t]=s;else if(200===o.body.code){var c=new _["default"](r,t,e,"on",o.body.value,s.children,o.body.version);r._observers[t]=c,n(c),s.apply(c)}else i(o.body.desc)})})}},{key:"read",value:function(e){var t=this,r={type:"read",from:t._owner,to:e};return new i["default"](function(e,o){t._bus.postMessage(r,function(t){
console.log("read-response: ",t),200===t.body.code?e(t.body.value):o(t.body.desc)})})}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onForward",value:function(e){var t=this,r=t._reporters[e.body.to];r._onForward(e)}},{key:"_onRemoteCreate",value:function(e){var t=this,r=e.from.slice(0,-13),o={type:e.type,from:e.body.source,url:r,schema:e.body.schema,value:e.body.value,identity:e.body.identity,ack:function(r){var o=200;r&&(o=r),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:o}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",o),t._onNotificationHandler(o))}},{key:"_onRemoteDelete",value:function(e){var t=this,r=e.body.resource,o=t._observers[r];if(o){var n={type:e.type,url:r,identity:e.body.identity,ack:function(r){var n=200;r&&(n=r),200===n&&o["delete"](),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n,source:t._owner}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",n),t._onNotificationHandler(n))}else t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,source:t._owner}})}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();r["default"]=h,t.exports=r["default"]},{"./DataObjectObserver":117,"./DataObjectReporter":118,"./DataProvisional":119,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13}],122:[function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e){if(!e)throw Error("URL is needed to split");var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",o=e.replace(t,r).split(",");o[0]===e&&(o[0]="https",o[1]=e);var n={type:o[0],domain:o[1],identity:o[2]};return n}function i(e){var t=e.indexOf("@"),r={username:e.substring(0,t),domain:e.substring(t+1,e.length)};return r}function s(e){return!((0,p["default"])(e).length>0)}function c(e){if(e)return JSON.parse((0,d["default"])(e))}function a(e){var t=e.indexOf("@");return"user://"+e.substring(t+1,e.length)+"/"+e.substring(0,t)}function u(e){var t=n(e);return t.identity.replace("/","")+"@"+t.domain}function l(e){if("user://"===e.substring(0,7)){var t=n(e);if(t.domain&&t.identity)return e;throw"userURL with wrong format"}return a(e)}Object.defineProperty(r,"__esModule",{value:!0});var f=e("babel-runtime/core-js/json/stringify"),d=o(f),_=e("babel-runtime/core-js/object/keys"),p=o(_);r.divideURL=n,r.divideEmail=i,r.emptyObject=s,r.deepClone=c,r.getUserURLFromEmail=a,r.getUserEmailFromURL=u,r.convertToUserURL=l},{"babel-runtime/core-js/json/stringify":2,"babel-runtime/core-js/object/keys":7}]},{},[114])(114)});


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = activate;

var _Syncher = require('service-framework/dist/Syncher');

var _utils = require('../utils/utils');

var _EventEmitter2 = require('../utils/EventEmitter');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint undef: true */

/**
* Hello World Observer
* @author Paulo Chainho [paulo-g-chainho@telecom.pt]
* @version 0.1.0
*/

var HelloWorldObserver = function (_EventEmitter) {
  _inherits(HelloWorldObserver, _EventEmitter);

  /**
  * Create a new HelloWorldObserver
  * @param  {Syncher} syncher - Syncher provided from the runtime core
  */

  function HelloWorldObserver(hypertyURL, bus, configuration) {
    _classCallCheck(this, HelloWorldObserver);

    if (!hypertyURL) throw new Error('The hypertyURL is a needed parameter');
    if (!bus) throw new Error('The MiniBus is a needed parameter');
    if (!configuration) throw new Error('The configuration is a needed parameter');

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(HelloWorldObserver).call(this));

    var _this = _this2;
    var domain = (0, _utils.divideURL)(hypertyURL).domain;
    _this._domain = domain;

    _this._objectDescURL = 'hyperty-catalogue://catalogue.' + domain + '/.well-known/dataschema/HelloWorldDataSchema';

    var syncher = new _Syncher.Syncher(hypertyURL, bus, configuration);
    syncher.onNotification(function (event) {
      _this._onNotification(event);
    });

    _this._syncher = syncher;
    return _this2;
  }

  _createClass(HelloWorldObserver, [{
    key: '_onNotification',
    value: function _onNotification(event) {

      var _this = this;

      console.info('Event Received: ', event);

      _this.trigger('invitation', event.identity);

      // Acknowledge reporter about the Invitation was received
      event.ack();

      // Subscribe Hello World Object
      _this._syncher.subscribe(_this._objectDescURL, event.url).then(function (helloObjtObserver) {

        // Hello World Object was subscribed
        console.info(helloObjtObserver);

        // lets notify the App the subscription was accepted with the mnost updated version of Hello World Object

        _this.trigger('hello', helloObjtObserver.data);

        // lets now observe any changes done in Hello World Object

        helloObjtObserver.onChange('*', function (event) {

          // Hello World Object was changed
          console.info('message received:', event);

          // lets notify the App about the change
          _this.trigger('hello', helloObjtObserver.data);
        });
      }).catch(function (reason) {
        console.error(reason);
      });
    }
  }]);

  return HelloWorldObserver;
}(_EventEmitter3.default);

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'HelloWorldObserver',
    instance: new HelloWorldObserver(hypertyURL, bus, configuration)
  };
}
module.exports = exports['default'];

},{"../utils/EventEmitter":3,"../utils/utils":4,"service-framework/dist/Syncher":1}],3:[function(require,module,exports){
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

    /**
     * Initializes the EventEmitter
     */

    function EventEmitter() {
        _classCallCheck(this, EventEmitter);

        // set up listener holder
        this.__eventListeners = {};
    }

    /**
     * addEventListener listen for an eventType
     * @param  {string}         eventType - listening for this type of event
     * @param  {Function}       cb        - callback function will be executed when the event it is invoked
     */


    _createClass(EventEmitter, [{
        key: "addEventListener",
        value: function addEventListener(eventType, cb) {
            // add callback to the list of callbacks for this type
            // if the list doesn't exist yet, create it with the callback as member
            if (cb != undefined) {
                if (!this.__eventListeners[eventType]) this.__eventListeners[eventType] = [cb];else this.__eventListeners[eventType].push(cb);
            }
        }

        /**
         * Invoke the eventType
         * @param  {string} eventType - event will be invoked
         * @param  {object} params - parameters will be passed to the addEventListener
         */

    }, {
        key: "trigger",
        value: function trigger(eventType, params) {
            // check if there are callbacks for this type
            var callbacks = this.__eventListeners[eventType];
            if (callbacks) {
                callbacks.forEach(function (cb) {
                    // catch errors to make sure every callback is being called
                    try {
                        cb(params);
                    } catch (e) {
                        console.warn("calling listener " + cb.name + " for event type " + eventType + " with parameters '" + params + "' resulted in an error!", e);
                    }
                });
            }
        }
    }]);

    return EventEmitter;
}();

exports.default = EventEmitter;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
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
 * @param  {object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
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

},{}]},{},[2])(2)
});