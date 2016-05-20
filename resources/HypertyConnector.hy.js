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
// version: 0.2.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.HypertyDiscovery=e()}}(function(){return function e(t,r,n){function o(s,c){if(!r[s]){if(!t[s]){var u="function"==typeof require&&require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[s]={exports:{}};t[s][0].call(f.exports,function(e){var r=t[s][1][e];return o(r?r:e)},f,f.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":6}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":7}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":8}],4:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],5:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":2}],6:[function(e,t,r){var n=e("../../modules/$.core");t.exports=function(e){return(n.JSON&&n.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},{"../../modules/$.core":14}],7:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t,r){return n.setDesc(e,t,r)}},{"../../modules/$":36}],8:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/$.core").Promise},{"../modules/$.core":14,"../modules/es6.object.to-string":58,"../modules/es6.promise":59,"../modules/es6.string.iterator":60,"../modules/web.dom.iterable":61}],9:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],10:[function(e,t,r){t.exports=function(){}},{}],11:[function(e,t,r){var n=e("./$.is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./$.is-object":29}],12:[function(e,t,r){var n=e("./$.cof"),o=e("./$.wks")("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=(t=Object(e))[o])?r:i?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},{"./$.cof":13,"./$.wks":55}],13:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],14:[function(e,t,r){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},{}],15:[function(e,t,r){var n=e("./$.a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./$.a-function":9}],16:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],17:[function(e,t,r){t.exports=!e("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./$.fails":20}],18:[function(e,t,r){var n=e("./$.is-object"),o=e("./$.global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./$.global":22,"./$.is-object":29}],19:[function(e,t,r){var n=e("./$.global"),o=e("./$.core"),i=e("./$.ctx"),s="prototype",c=function(e,t,r){var u,a,f,l=e&c.F,d=e&c.G,p=e&c.S,$=e&c.P,v=e&c.B,y=e&c.W,h=d?o:o[t]||(o[t]={}),g=d?n:p?n[t]:(n[t]||{})[s];d&&(r=t);for(u in r)a=!l&&g&&u in g,a&&u in h||(f=a?g[u]:r[u],h[u]=d&&"function"!=typeof g[u]?r[u]:v&&a?i(f,n):y&&g[u]==f?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[s]=e[s],t}(f):$&&"function"==typeof f?i(Function.call,f):f,$&&((h[s]||(h[s]={}))[u]=f))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,t.exports=c},{"./$.core":14,"./$.ctx":15,"./$.global":22}],20:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],21:[function(e,t,r){var n=e("./$.ctx"),o=e("./$.iter-call"),i=e("./$.is-array-iter"),s=e("./$.an-object"),c=e("./$.to-length"),u=e("./core.get-iterator-method");t.exports=function(e,t,r,a){var f,l,d,p=u(e),$=n(r,a,t?2:1),v=0;if("function"!=typeof p)throw TypeError(e+" is not iterable!");if(i(p))for(f=c(e.length);f>v;v++)t?$(s(l=e[v])[0],l[1]):$(e[v]);else for(d=p.call(e);!(l=d.next()).done;)o(d,$,l.value,t)}},{"./$.an-object":11,"./$.ctx":15,"./$.is-array-iter":28,"./$.iter-call":30,"./$.to-length":53,"./core.get-iterator-method":56}],22:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],23:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],24:[function(e,t,r){var n=e("./$"),o=e("./$.property-desc");t.exports=e("./$.descriptors")?function(e,t,r){return n.setDesc(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./$":36,"./$.descriptors":17,"./$.property-desc":39}],25:[function(e,t,r){t.exports=e("./$.global").document&&document.documentElement},{"./$.global":22}],26:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],27:[function(e,t,r){var n=e("./$.cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./$.cof":13}],28:[function(e,t,r){var n=e("./$.iterators"),o=e("./$.wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./$.iterators":35,"./$.wks":55}],29:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],30:[function(e,t,r){var n=e("./$.an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&n(s.call(e)),i}}},{"./$.an-object":11}],31:[function(e,t,r){"use strict";var n=e("./$"),o=e("./$.property-desc"),i=e("./$.set-to-string-tag"),s={};e("./$.hide")(s,e("./$.wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n.create(s,{next:o(1,r)}),i(e,t+" Iterator")}},{"./$":36,"./$.hide":24,"./$.property-desc":39,"./$.set-to-string-tag":45,"./$.wks":55}],32:[function(e,t,r){"use strict";var n=e("./$.library"),o=e("./$.export"),i=e("./$.redefine"),s=e("./$.hide"),c=e("./$.has"),u=e("./$.iterators"),a=e("./$.iter-create"),f=e("./$.set-to-string-tag"),l=e("./$").getProto,d=e("./$.wks")("iterator"),p=!([].keys&&"next"in[].keys()),$="@@iterator",v="keys",y="values",h=function(){return this};t.exports=function(e,t,r,g,b,m,x){a(r,t,g);var w,j,_=function(e){if(!p&&e in P)return P[e];switch(e){case v:return function(){return new r(this,e)};case y:return function(){return new r(this,e)}}return function(){return new r(this,e)}},k=t+" Iterator",O=b==y,M=!1,P=e.prototype,S=P[d]||P[$]||b&&P[b],D=S||_(b);if(S){var E=l(D.call(new e));f(E,k,!0),!n&&c(P,$)&&s(E,d,h),O&&S.name!==y&&(M=!0,D=function(){return S.call(this)})}if(n&&!x||!p&&!M&&P[d]||s(P,d,D),u[t]=D,u[k]=h,b)if(w={values:O?D:_(y),keys:m?D:_(v),entries:O?_("entries"):D},x)for(j in w)j in P||i(P,j,w[j]);else o(o.P+o.F*(p||M),t,w);return w}},{"./$":36,"./$.export":19,"./$.has":23,"./$.hide":24,"./$.iter-create":31,"./$.iterators":35,"./$.library":37,"./$.redefine":41,"./$.set-to-string-tag":45,"./$.wks":55}],33:[function(e,t,r){var n=e("./$.wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){r=!0},i[n]=function(){return s},e(i)}catch(c){}return r}},{"./$.wks":55}],34:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],35:[function(e,t,r){t.exports={}},{}],36:[function(e,t,r){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},{}],37:[function(e,t,r){t.exports=!0},{}],38:[function(e,t,r){var n,o,i,s=e("./$.global"),c=e("./$.task").set,u=s.MutationObserver||s.WebKitMutationObserver,a=s.process,f=s.Promise,l="process"==e("./$.cof")(a),d=function(){var e,t,r;for(l&&(e=a.domain)&&(a.domain=null,e.exit());n;)t=n.domain,r=n.fn,t&&t.enter(),r(),t&&t.exit(),n=n.next;o=void 0,e&&e.enter()};if(l)i=function(){a.nextTick(d)};else if(u){var p=1,$=document.createTextNode("");new u(d).observe($,{characterData:!0}),i=function(){$.data=p=-p}}else i=f&&f.resolve?function(){f.resolve().then(d)}:function(){c.call(s,d)};t.exports=function(e){var t={fn:e,next:void 0,domain:l&&a.domain};o&&(o.next=t),n||(n=t,i()),o=t}},{"./$.cof":13,"./$.global":22,"./$.task":50}],39:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],40:[function(e,t,r){var n=e("./$.redefine");t.exports=function(e,t){for(var r in t)n(e,r,t[r]);return e}},{"./$.redefine":41}],41:[function(e,t,r){t.exports=e("./$.hide")},{"./$.hide":24}],42:[function(e,t,r){t.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},{}],43:[function(e,t,r){var n=e("./$").getDesc,o=e("./$.is-object"),i=e("./$.an-object"),s=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./$.ctx")(Function.call,n(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(i){r=!0}return function(e,t){return s(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:s}},{"./$":36,"./$.an-object":11,"./$.ctx":15,"./$.is-object":29}],44:[function(e,t,r){"use strict";var n=e("./$.core"),o=e("./$"),i=e("./$.descriptors"),s=e("./$.wks")("species");t.exports=function(e){var t=n[e];i&&t&&!t[s]&&o.setDesc(t,s,{configurable:!0,get:function(){return this}})}},{"./$":36,"./$.core":14,"./$.descriptors":17,"./$.wks":55}],45:[function(e,t,r){var n=e("./$").setDesc,o=e("./$.has"),i=e("./$.wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./$":36,"./$.has":23,"./$.wks":55}],46:[function(e,t,r){var n=e("./$.global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./$.global":22}],47:[function(e,t,r){var n=e("./$.an-object"),o=e("./$.a-function"),i=e("./$.wks")("species");t.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[i])?t:o(r)}},{"./$.a-function":9,"./$.an-object":11,"./$.wks":55}],48:[function(e,t,r){t.exports=function(e,t,r){if(!(e instanceof t))throw TypeError(r+": use the 'new' operator!");return e}},{}],49:[function(e,t,r){var n=e("./$.to-integer"),o=e("./$.defined");t.exports=function(e){return function(t,r){var i,s,c=String(o(t)),u=n(r),a=c.length;return 0>u||u>=a?e?"":void 0:(i=c.charCodeAt(u),55296>i||i>56319||u+1===a||(s=c.charCodeAt(u+1))<56320||s>57343?e?c.charAt(u):i:e?c.slice(u,u+2):(i-55296<<10)+(s-56320)+65536)}}},{"./$.defined":16,"./$.to-integer":51}],50:[function(e,t,r){var n,o,i,s=e("./$.ctx"),c=e("./$.invoke"),u=e("./$.html"),a=e("./$.dom-create"),f=e("./$.global"),l=f.process,d=f.setImmediate,p=f.clearImmediate,$=f.MessageChannel,v=0,y={},h="onreadystatechange",g=function(){var e=+this;if(y.hasOwnProperty(e)){var t=y[e];delete y[e],t()}},b=function(e){g.call(e.data)};d&&p||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return y[++v]=function(){c("function"==typeof e?e:Function(e),t)},n(v),v},p=function(e){delete y[e]},"process"==e("./$.cof")(l)?n=function(e){l.nextTick(s(g,e,1))}:$?(o=new $,i=o.port2,o.port1.onmessage=b,n=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",b,!1)):n=h in a("script")?function(e){u.appendChild(a("script"))[h]=function(){u.removeChild(this),g.call(e)}}:function(e){setTimeout(s(g,e,1),0)}),t.exports={set:d,clear:p}},{"./$.cof":13,"./$.ctx":15,"./$.dom-create":18,"./$.global":22,"./$.html":25,"./$.invoke":26}],51:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],52:[function(e,t,r){var n=e("./$.iobject"),o=e("./$.defined");t.exports=function(e){return n(o(e))}},{"./$.defined":16,"./$.iobject":27}],53:[function(e,t,r){var n=e("./$.to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./$.to-integer":51}],54:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],55:[function(e,t,r){var n=e("./$.shared")("wks"),o=e("./$.uid"),i=e("./$.global").Symbol;t.exports=function(e){return n[e]||(n[e]=i&&i[e]||(i||o)("Symbol."+e))}},{"./$.global":22,"./$.shared":46,"./$.uid":54}],56:[function(e,t,r){var n=e("./$.classof"),o=e("./$.wks")("iterator"),i=e("./$.iterators");t.exports=e("./$.core").getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||i[n(e)]:void 0}},{"./$.classof":12,"./$.core":14,"./$.iterators":35,"./$.wks":55}],57:[function(e,t,r){"use strict";var n=e("./$.add-to-unscopables"),o=e("./$.iter-step"),i=e("./$.iterators"),s=e("./$.to-iobject");t.exports=e("./$.iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./$.add-to-unscopables":10,"./$.iter-define":32,"./$.iter-step":34,"./$.iterators":35,"./$.to-iobject":52}],58:[function(e,t,r){},{}],59:[function(e,t,r){"use strict";var n,o=e("./$"),i=e("./$.library"),s=e("./$.global"),c=e("./$.ctx"),u=e("./$.classof"),a=e("./$.export"),f=e("./$.is-object"),l=e("./$.an-object"),d=e("./$.a-function"),p=e("./$.strict-new"),$=e("./$.for-of"),v=e("./$.set-proto").set,y=e("./$.same-value"),h=e("./$.wks")("species"),g=e("./$.species-constructor"),b=e("./$.microtask"),m="Promise",x=s.process,w="process"==u(x),j=s[m],_=function(e){var t=new j(function(){});return e&&(t.constructor=Object),j.resolve(t)===t},k=function(){function t(e){var r=new j(e);return v(r,t.prototype),r}var r=!1;try{if(r=j&&j.resolve&&_(),v(t,j),t.prototype=o.create(j.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(r=!1),r&&e("./$.descriptors")){var n=!1;j.resolve(o.setDesc({},"then",{get:function(){n=!0}})),r=n}}catch(i){r=!1}return r}(),O=function(e,t){return i&&e===j&&t===n?!0:y(e,t)},M=function(e){var t=l(e)[h];return void 0!=t?t:e},P=function(e){var t;return f(e)&&"function"==typeof(t=e.then)?t:!1},S=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=d(t),this.reject=d(r)},D=function(e){try{e()}catch(t){return{error:t}}},E=function(e,t){if(!e.n){e.n=!0;var r=e.c;b(function(){for(var n=e.v,o=1==e.s,i=0,c=function(t){var r,i,s=o?t.ok:t.fail,c=t.resolve,u=t.reject;try{s?(o||(e.h=!0),r=s===!0?n:s(n),r===t.promise?u(TypeError("Promise-chain cycle")):(i=P(r))?i.call(r,c,u):c(r)):u(n)}catch(a){u(a)}};r.length>i;)c(r[i++]);r.length=0,e.n=!1,t&&setTimeout(function(){var t,r,o=e.p;T(o)&&(w?x.emit("unhandledRejection",n,o):(t=s.onunhandledrejection)?t({promise:o,reason:n}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",n)),e.a=void 0},1)})}},T=function(e){var t,r=e._d,n=r.a||r.c,o=0;if(r.h)return!1;for(;n.length>o;)if(t=n[o++],t.fail||!T(t.promise))return!1;return!0},A=function(e){var t=this;t.d||(t.d=!0,t=t.r||t,t.v=e,t.s=2,t.a=t.c.slice(),E(t,!0))},U=function(e){var t,r=this;if(!r.d){r.d=!0,r=r.r||r;try{if(r.p===e)throw TypeError("Promise can't be resolved itself");(t=P(e))?b(function(){var n={r:r,d:!1};try{t.call(e,c(U,n,1),c(A,n,1))}catch(o){A.call(n,o)}}):(r.v=e,r.s=1,E(r,!1))}catch(n){A.call({r:r,d:!1},n)}}};k||(j=function(e){d(e);var t=this._d={p:p(this,j,m),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{e(c(U,t,1),c(A,t,1))}catch(r){A.call(t,r)}},e("./$.redefine-all")(j.prototype,{then:function(e,t){var r=new S(g(this,j)),n=r.promise,o=this._d;return r.ok="function"==typeof e?e:!0,r.fail="function"==typeof t&&t,o.c.push(r),o.a&&o.a.push(r),o.s&&E(o,!1),n},"catch":function(e){return this.then(void 0,e)}})),a(a.G+a.W+a.F*!k,{Promise:j}),e("./$.set-to-string-tag")(j,m),e("./$.set-species")(m),n=e("./$.core")[m],a(a.S+a.F*!k,m,{reject:function(e){var t=new S(this),r=t.reject;return r(e),t.promise}}),a(a.S+a.F*(!k||_(!0)),m,{resolve:function(e){if(e instanceof j&&O(e.constructor,this))return e;var t=new S(this),r=t.resolve;return r(e),t.promise}}),a(a.S+a.F*!(k&&e("./$.iter-detect")(function(e){j.all(e)["catch"](function(){})})),m,{all:function(e){var t=M(this),r=new S(t),n=r.resolve,i=r.reject,s=[],c=D(function(){$(e,!1,s.push,s);var r=s.length,c=Array(r);r?o.each.call(s,function(e,o){var s=!1;t.resolve(e).then(function(e){s||(s=!0,c[o]=e,--r||n(c))},i)}):n(c)});return c&&i(c.error),r.promise},race:function(e){var t=M(this),r=new S(t),n=r.reject,o=D(function(){$(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./$":36,"./$.a-function":9,"./$.an-object":11,"./$.classof":12,"./$.core":14,"./$.ctx":15,"./$.descriptors":17,"./$.export":19,"./$.for-of":21,"./$.global":22,"./$.is-object":29,"./$.iter-detect":33,"./$.library":37,"./$.microtask":38,"./$.redefine-all":40,"./$.same-value":42,"./$.set-proto":43,"./$.set-species":44,"./$.set-to-string-tag":45,"./$.species-constructor":47,"./$.strict-new":48,"./$.wks":55}],60:[function(e,t,r){"use strict";var n=e("./$.string-at")(!0);e("./$.iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./$.iter-define":32,"./$.string-at":49}],61:[function(e,t,r){e("./es6.array.iterator");var n=e("./$.iterators");n.NodeList=n.HTMLCollection=n.Array},{"./$.iterators":35,"./es6.array.iterator":57}],62:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("./hyperty-discovery/HypertyDiscovery"),i=n(o);r["default"]=i["default"],t.exports=r["default"]},{"./hyperty-discovery/HypertyDiscovery":63}],63:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),c=n(s),u=e("babel-runtime/helpers/createClass"),a=n(u),f=e("../utils/utils"),l=function(){function e(t,r){(0,c["default"])(this,e);var n=this;n.messageBus=r,n.domain=(0,f.divideURL)(t).domain,n.discoveryURL=t}return(0,a["default"])(e,[{key:"discoverDataObjectPerName",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:"dataObject://"+e}};return new i["default"](function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.value.url;n?e(n):t("DataObject name does not exist")})})}},{key:"discoverHypertyPerUser",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),s={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:o}};return console.log("Message: ",s,n,o),new i["default"](function(t,n){r.messageBus.postMessage(s,function(r){console.log("message reply",r);var o=void 0,i=void 0,s=void 0,c=r.body.value;for(o in c)if(void 0!==c[o].lastModified)if(void 0===i)i=new Date(c[o].lastModified),s=o;else{var u=new Date(c[o].lastModified);i.getTime()<u.getTime()&&(i=u,s=o)}console.log("Last Hyperty: ",s,i);var a=s;if(void 0===a)return n("User Hyperty not found");var f={id:e,descriptor:c[a].descriptor,hypertyURL:a};console.log("===> hypertyDiscovery messageBundle: ",f),t(f)})})}},{key:"discoverHypertiesPerUser",value:function(e,t){var r=this,n=void 0;n=t?t:r.domain;var o="user://"+e.substring(e.indexOf("@")+1,e.length)+"/"+e.substring(0,e.indexOf("@")),s={type:"read",from:r.discoveryURL,to:"domain://registry."+n+"/",body:{resource:o}};return console.log("Message discoverHypertiesPerUser: ",s,n,o),new i["default"](function(e,t){r.messageBus.postMessage(s,function(r){console.log("discoverHypertiesPerUser reply",r);var n=r.body.value;return n?void e(n):t("User Hyperty not found")})})}}]),e}();r["default"]=l,t.exports=r["default"]},{"../utils/utils":64,"babel-runtime/core-js/promise":3,"babel-runtime/helpers/classCallCheck":4,"babel-runtime/helpers/createClass":5}],64:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function i(e){return e?JSON.parse((0,c["default"])(e)):void 0}Object.defineProperty(r,"__esModule",{value:!0});var s=e("babel-runtime/core-js/json/stringify"),c=n(s);r.divideURL=o,r.deepClone=i},{"babel-runtime/core-js/json/stringify":1}]},{},[62])(62)});
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
// version: 0.2.0

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Syncher=e()}}(function(){return function e(t,r,n){function o(s,a){if(!r[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=r[s]={exports:{}};t[s][0].call(l.exports,function(e){var r=t[s][1][e];return o(r?r:e)},l,l.exports,e,t,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,r){Object.observe&&!Array.observe&&function(e,t){"use strict";var r=e.getNotifier,n="performChange",o="_original",i="splice",s={push:function c(e){var t=arguments,s=c[o].apply(this,t);return r(this)[n](i,function(){return{index:s-t.length,addedCount:t.length,removed:[]}}),s},unshift:function u(e){var t=arguments,s=u[o].apply(this,t);return r(this)[n](i,function(){return{index:0,addedCount:t.length,removed:[]}}),s},pop:function l(){var e=this.length,t=l[o].call(this);return this.length!==e&&r(this)[n](i,function(){return{index:this.length,addedCount:0,removed:[t]}},this),t},shift:function f(){var e=this.length,t=f[o].call(this);return this.length!==e&&r(this)[n](i,function(){return{index:0,addedCount:0,removed:[t]}},this),t},splice:function d(e,t){var s=arguments,a=d[o].apply(this,s);return(a.length||s.length>2)&&r(this)[n](i,function(){return{index:e,addedCount:s.length-2,removed:a}},this),a}};for(var a in s)s[a][o]=t.prototype[a],t.prototype[a]=s[a];t.observe=function(t,r){return e.observe(t,r,["add","update","delete",i])},t.unobserve=e.unobserve}(Object,Array)},{}],2:[function(e,t,r){t.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":17}],3:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/create"),__esModule:!0}},{"core-js/library/fn/object/create":18}],4:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/define-property"),__esModule:!0}},{"core-js/library/fn/object/define-property":19}],5:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-own-property-descriptor"),__esModule:!0}},{"core-js/library/fn/object/get-own-property-descriptor":20}],6:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/get-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/get-prototype-of":21}],7:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/keys"),__esModule:!0}},{"core-js/library/fn/object/keys":22}],8:[function(e,t,r){t.exports={"default":e("core-js/library/fn/object/set-prototype-of"),__esModule:!0}},{"core-js/library/fn/object/set-prototype-of":23}],9:[function(e,t,r){t.exports={"default":e("core-js/library/fn/promise"),__esModule:!0}},{"core-js/library/fn/promise":24}],10:[function(e,t,r){t.exports={"default":e("core-js/library/fn/symbol"),__esModule:!0}},{"core-js/library/fn/symbol":25}],11:[function(e,t,r){"use strict";r.__esModule=!0,r["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},{}],12:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../core-js/object/define-property"),i=n(o);r["default"]=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i["default"])(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},{"../core-js/object/define-property":4}],13:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/object/get-own-property-descriptor")["default"];r["default"]=function(e,t,r){for(var o=!0;o;){var i=e,s=t,a=r;o=!1,null===i&&(i=Function.prototype);var c=n(i,s);if(void 0!==c){if("value"in c)return c.value;var u=c.get;if(void 0===u)return;return u.call(a)}var l=Object.getPrototypeOf(i);if(null===l)return;e=l,t=s,r=a,o=!0,c=l=void 0}},r.__esModule=!0},{"babel-runtime/core-js/object/get-own-property-descriptor":5}],14:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/object/create")["default"],o=e("babel-runtime/core-js/object/set-prototype-of")["default"];r["default"]=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=n(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(o?o(e,t):e.__proto__=t)},r.__esModule=!0},{"babel-runtime/core-js/object/create":3,"babel-runtime/core-js/object/set-prototype-of":8}],15:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}r.__esModule=!0;var o=e("../helpers/typeof"),i=n(o);r["default"]=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,i["default"])(t))&&"function"!=typeof t?e:t}},{"../helpers/typeof":16}],16:[function(e,t,r){"use strict";var n=e("babel-runtime/core-js/symbol")["default"];r["default"]=function(e){return e&&e.constructor===n?"symbol":typeof e},r.__esModule=!0},{"babel-runtime/core-js/symbol":10}],17:[function(e,t,r){var n=e("../../modules/$.core");t.exports=function(e){return(n.JSON&&n.JSON.stringify||JSON.stringify).apply(JSON,arguments)}},{"../../modules/$.core":31}],18:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t){return n.create(e,t)}},{"../../modules/$":56}],19:[function(e,t,r){var n=e("../../modules/$");t.exports=function(e,t,r){return n.setDesc(e,t,r)}},{"../../modules/$":56}],20:[function(e,t,r){var n=e("../../modules/$");e("../../modules/es6.object.get-own-property-descriptor"),t.exports=function(e,t){return n.getDesc(e,t)}},{"../../modules/$":56,"../../modules/es6.object.get-own-property-descriptor":81}],21:[function(e,t,r){e("../../modules/es6.object.get-prototype-of"),t.exports=e("../../modules/$.core").Object.getPrototypeOf},{"../../modules/$.core":31,"../../modules/es6.object.get-prototype-of":82}],22:[function(e,t,r){e("../../modules/es6.object.keys"),t.exports=e("../../modules/$.core").Object.keys},{"../../modules/$.core":31,"../../modules/es6.object.keys":83}],23:[function(e,t,r){e("../../modules/es6.object.set-prototype-of"),t.exports=e("../../modules/$.core").Object.setPrototypeOf},{"../../modules/$.core":31,"../../modules/es6.object.set-prototype-of":84}],24:[function(e,t,r){e("../modules/es6.object.to-string"),e("../modules/es6.string.iterator"),e("../modules/web.dom.iterable"),e("../modules/es6.promise"),t.exports=e("../modules/$.core").Promise},{"../modules/$.core":31,"../modules/es6.object.to-string":85,"../modules/es6.promise":86,"../modules/es6.string.iterator":87,"../modules/web.dom.iterable":89}],25:[function(e,t,r){e("../../modules/es6.symbol"),e("../../modules/es6.object.to-string"),t.exports=e("../../modules/$.core").Symbol},{"../../modules/$.core":31,"../../modules/es6.object.to-string":85,"../../modules/es6.symbol":88}],26:[function(e,t,r){t.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},{}],27:[function(e,t,r){t.exports=function(){}},{}],28:[function(e,t,r){var n=e("./$.is-object");t.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},{"./$.is-object":49}],29:[function(e,t,r){var n=e("./$.cof"),o=e("./$.wks")("toStringTag"),i="Arguments"==n(function(){return arguments}());t.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=(t=Object(e))[o])?r:i?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},{"./$.cof":30,"./$.wks":78}],30:[function(e,t,r){var n={}.toString;t.exports=function(e){return n.call(e).slice(8,-1)}},{}],31:[function(e,t,r){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},{}],32:[function(e,t,r){var n=e("./$.a-function");t.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},{"./$.a-function":26}],33:[function(e,t,r){t.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},{}],34:[function(e,t,r){t.exports=!e("./$.fails")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},{"./$.fails":38}],35:[function(e,t,r){var n=e("./$.is-object"),o=e("./$.global").document,i=n(o)&&n(o.createElement);t.exports=function(e){return i?o.createElement(e):{}}},{"./$.global":41,"./$.is-object":49}],36:[function(e,t,r){var n=e("./$");t.exports=function(e){var t=n.getKeys(e),r=n.getSymbols;if(r)for(var o,i=r(e),s=n.isEnum,a=0;i.length>a;)s.call(e,o=i[a++])&&t.push(o);return t}},{"./$":56}],37:[function(e,t,r){var n=e("./$.global"),o=e("./$.core"),i=e("./$.ctx"),s="prototype",a=function(e,t,r){var c,u,l,f=e&a.F,d=e&a.G,p=e&a.S,b=e&a.P,h=e&a.B,v=e&a.W,y=d?o:o[t]||(o[t]={}),_=d?n:p?n[t]:(n[t]||{})[s];d&&(r=t);for(c in r)u=!f&&_&&c in _,u&&c in y||(l=u?_[c]:r[c],y[c]=d&&"function"!=typeof _[c]?r[c]:h&&u?i(l,n):v&&_[c]==l?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t[s]=e[s],t}(l):b&&"function"==typeof l?i(Function.call,l):l,b&&((y[s]||(y[s]={}))[c]=l))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,t.exports=a},{"./$.core":31,"./$.ctx":32,"./$.global":41}],38:[function(e,t,r){t.exports=function(e){try{return!!e()}catch(t){return!0}}},{}],39:[function(e,t,r){var n=e("./$.ctx"),o=e("./$.iter-call"),i=e("./$.is-array-iter"),s=e("./$.an-object"),a=e("./$.to-length"),c=e("./core.get-iterator-method");t.exports=function(e,t,r,u){var l,f,d,p=c(e),b=n(r,u,t?2:1),h=0;if("function"!=typeof p)throw TypeError(e+" is not iterable!");if(i(p))for(l=a(e.length);l>h;h++)t?b(s(f=e[h])[0],f[1]):b(e[h]);else for(d=p.call(e);!(f=d.next()).done;)o(d,b,f.value,t)}},{"./$.an-object":28,"./$.ctx":32,"./$.is-array-iter":47,"./$.iter-call":50,"./$.to-length":75,"./core.get-iterator-method":79}],40:[function(e,t,r){var n=e("./$.to-iobject"),o=e("./$").getNames,i={}.toString,s="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return o(e)}catch(t){return s.slice()}};t.exports.get=function(e){return s&&"[object Window]"==i.call(e)?a(e):o(n(e))}},{"./$":56,"./$.to-iobject":74}],41:[function(e,t,r){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},{}],42:[function(e,t,r){var n={}.hasOwnProperty;t.exports=function(e,t){return n.call(e,t)}},{}],43:[function(e,t,r){var n=e("./$"),o=e("./$.property-desc");t.exports=e("./$.descriptors")?function(e,t,r){return n.setDesc(e,t,o(1,r))}:function(e,t,r){return e[t]=r,e}},{"./$":56,"./$.descriptors":34,"./$.property-desc":61}],44:[function(e,t,r){t.exports=e("./$.global").document&&document.documentElement},{"./$.global":41}],45:[function(e,t,r){t.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},{}],46:[function(e,t,r){var n=e("./$.cof");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},{"./$.cof":30}],47:[function(e,t,r){var n=e("./$.iterators"),o=e("./$.wks")("iterator"),i=Array.prototype;t.exports=function(e){return void 0!==e&&(n.Array===e||i[o]===e)}},{"./$.iterators":55,"./$.wks":78}],48:[function(e,t,r){var n=e("./$.cof");t.exports=Array.isArray||function(e){return"Array"==n(e)}},{"./$.cof":30}],49:[function(e,t,r){t.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},{}],50:[function(e,t,r){var n=e("./$.an-object");t.exports=function(e,t,r,o){try{return o?t(n(r)[0],r[1]):t(r)}catch(i){var s=e["return"];throw void 0!==s&&n(s.call(e)),i}}},{"./$.an-object":28}],51:[function(e,t,r){"use strict";var n=e("./$"),o=e("./$.property-desc"),i=e("./$.set-to-string-tag"),s={};e("./$.hide")(s,e("./$.wks")("iterator"),function(){return this}),t.exports=function(e,t,r){e.prototype=n.create(s,{next:o(1,r)}),i(e,t+" Iterator")}},{"./$":56,"./$.hide":43,"./$.property-desc":61,"./$.set-to-string-tag":67,"./$.wks":78}],52:[function(e,t,r){"use strict";var n=e("./$.library"),o=e("./$.export"),i=e("./$.redefine"),s=e("./$.hide"),a=e("./$.has"),c=e("./$.iterators"),u=e("./$.iter-create"),l=e("./$.set-to-string-tag"),f=e("./$").getProto,d=e("./$.wks")("iterator"),p=!([].keys&&"next"in[].keys()),b="@@iterator",h="keys",v="values",y=function(){return this};t.exports=function(e,t,r,_,g,m,j){u(r,t,_);var $,O,w=function(e){if(!p&&e in E)return E[e];switch(e){case h:return function(){return new r(this,e)};case v:return function(){return new r(this,e)}}return function(){return new r(this,e)}},k=t+" Iterator",x=g==v,C=!1,E=e.prototype,S=E[d]||E[b]||g&&E[g],T=S||w(g);if(S){var M=f(T.call(new e));l(M,k,!0),!n&&a(E,b)&&s(M,d,y),x&&S.name!==v&&(C=!0,T=function(){return S.call(this)})}if(n&&!j||!p&&!C&&E[d]||s(E,d,T),c[t]=T,c[k]=y,g)if($={values:x?T:w(v),keys:m?T:w(h),entries:x?w("entries"):T},j)for(O in $)O in E||i(E,O,$[O]);else o(o.P+o.F*(p||C),t,$);return $}},{"./$":56,"./$.export":37,"./$.has":42,"./$.hide":43,"./$.iter-create":51,"./$.iterators":55,"./$.library":58,"./$.redefine":63,"./$.set-to-string-tag":67,"./$.wks":78}],53:[function(e,t,r){var n=e("./$.wks")("iterator"),o=!1;try{var i=[7][n]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(s){}t.exports=function(e,t){if(!t&&!o)return!1;var r=!1;try{var i=[7],s=i[n]();s.next=function(){r=!0},i[n]=function(){return s},e(i)}catch(a){}return r}},{"./$.wks":78}],54:[function(e,t,r){t.exports=function(e,t){return{value:t,done:!!e}}},{}],55:[function(e,t,r){t.exports={}},{}],56:[function(e,t,r){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},{}],57:[function(e,t,r){var n=e("./$"),o=e("./$.to-iobject");t.exports=function(e,t){for(var r,i=o(e),s=n.getKeys(i),a=s.length,c=0;a>c;)if(i[r=s[c++]]===t)return r}},{"./$":56,"./$.to-iobject":74}],58:[function(e,t,r){t.exports=!0},{}],59:[function(e,t,r){var n,o,i,s=e("./$.global"),a=e("./$.task").set,c=s.MutationObserver||s.WebKitMutationObserver,u=s.process,l=s.Promise,f="process"==e("./$.cof")(u),d=function(){var e,t,r;for(f&&(e=u.domain)&&(u.domain=null,e.exit());n;)t=n.domain,r=n.fn,t&&t.enter(),r(),t&&t.exit(),n=n.next;o=void 0,e&&e.enter()};if(f)i=function(){u.nextTick(d)};else if(c){var p=1,b=document.createTextNode("");new c(d).observe(b,{characterData:!0}),i=function(){b.data=p=-p}}else i=l&&l.resolve?function(){l.resolve().then(d)}:function(){a.call(s,d)};t.exports=function(e){var t={fn:e,next:void 0,domain:f&&u.domain};o&&(o.next=t),n||(n=t,i()),o=t}},{"./$.cof":30,"./$.global":41,"./$.task":72}],60:[function(e,t,r){var n=e("./$.export"),o=e("./$.core"),i=e("./$.fails");t.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*i(function(){r(1)}),"Object",s)}},{"./$.core":31,"./$.export":37,"./$.fails":38}],61:[function(e,t,r){t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},{}],62:[function(e,t,r){var n=e("./$.redefine");t.exports=function(e,t){for(var r in t)n(e,r,t[r]);return e}},{"./$.redefine":63}],63:[function(e,t,r){t.exports=e("./$.hide")},{"./$.hide":43}],64:[function(e,t,r){t.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},{}],65:[function(e,t,r){var n=e("./$").getDesc,o=e("./$.is-object"),i=e("./$.an-object"),s=function(e,t){if(i(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,r,o){try{o=e("./$.ctx")(Function.call,n(Object.prototype,"__proto__").set,2),o(t,[]),r=!(t instanceof Array)}catch(i){r=!0}return function(e,t){return s(e,t),r?e.__proto__=t:o(e,t),e}}({},!1):void 0),check:s}},{"./$":56,"./$.an-object":28,"./$.ctx":32,"./$.is-object":49}],66:[function(e,t,r){"use strict";var n=e("./$.core"),o=e("./$"),i=e("./$.descriptors"),s=e("./$.wks")("species");t.exports=function(e){var t=n[e];i&&t&&!t[s]&&o.setDesc(t,s,{configurable:!0,get:function(){return this}})}},{"./$":56,"./$.core":31,"./$.descriptors":34,"./$.wks":78}],67:[function(e,t,r){var n=e("./$").setDesc,o=e("./$.has"),i=e("./$.wks")("toStringTag");t.exports=function(e,t,r){e&&!o(e=r?e:e.prototype,i)&&n(e,i,{configurable:!0,value:t})}},{"./$":56,"./$.has":42,"./$.wks":78}],68:[function(e,t,r){var n=e("./$.global"),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(e){return i[e]||(i[e]={})}},{"./$.global":41}],69:[function(e,t,r){var n=e("./$.an-object"),o=e("./$.a-function"),i=e("./$.wks")("species");t.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[i])?t:o(r)}},{"./$.a-function":26,"./$.an-object":28,"./$.wks":78}],70:[function(e,t,r){t.exports=function(e,t,r){if(!(e instanceof t))throw TypeError(r+": use the 'new' operator!");return e}},{}],71:[function(e,t,r){var n=e("./$.to-integer"),o=e("./$.defined");t.exports=function(e){return function(t,r){var i,s,a=String(o(t)),c=n(r),u=a.length;return 0>c||c>=u?e?"":void 0:(i=a.charCodeAt(c),55296>i||i>56319||c+1===u||(s=a.charCodeAt(c+1))<56320||s>57343?e?a.charAt(c):i:e?a.slice(c,c+2):(i-55296<<10)+(s-56320)+65536)}}},{"./$.defined":33,"./$.to-integer":73}],72:[function(e,t,r){var n,o,i,s=e("./$.ctx"),a=e("./$.invoke"),c=e("./$.html"),u=e("./$.dom-create"),l=e("./$.global"),f=l.process,d=l.setImmediate,p=l.clearImmediate,b=l.MessageChannel,h=0,v={},y="onreadystatechange",_=function(){var e=+this;if(v.hasOwnProperty(e)){var t=v[e];delete v[e],t()}},g=function(e){_.call(e.data)};d&&p||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return v[++h]=function(){a("function"==typeof e?e:Function(e),t)},n(h),h},p=function(e){delete v[e]},"process"==e("./$.cof")(f)?n=function(e){f.nextTick(s(_,e,1))}:b?(o=new b,i=o.port2,o.port1.onmessage=g,n=s(i.postMessage,i,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(n=function(e){l.postMessage(e+"","*")},l.addEventListener("message",g,!1)):n=y in u("script")?function(e){c.appendChild(u("script"))[y]=function(){c.removeChild(this),_.call(e)}}:function(e){setTimeout(s(_,e,1),0)}),t.exports={set:d,clear:p}},{"./$.cof":30,"./$.ctx":32,"./$.dom-create":35,"./$.global":41,"./$.html":44,"./$.invoke":45}],73:[function(e,t,r){var n=Math.ceil,o=Math.floor;t.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},{}],74:[function(e,t,r){var n=e("./$.iobject"),o=e("./$.defined");t.exports=function(e){return n(o(e))}},{"./$.defined":33,"./$.iobject":46}],75:[function(e,t,r){var n=e("./$.to-integer"),o=Math.min;t.exports=function(e){return e>0?o(n(e),9007199254740991):0}},{"./$.to-integer":73}],76:[function(e,t,r){var n=e("./$.defined");t.exports=function(e){return Object(n(e))}},{"./$.defined":33}],77:[function(e,t,r){var n=0,o=Math.random();t.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},{}],78:[function(e,t,r){var n=e("./$.shared")("wks"),o=e("./$.uid"),i=e("./$.global").Symbol;t.exports=function(e){return n[e]||(n[e]=i&&i[e]||(i||o)("Symbol."+e))}},{"./$.global":41,"./$.shared":68,"./$.uid":77}],79:[function(e,t,r){var n=e("./$.classof"),o=e("./$.wks")("iterator"),i=e("./$.iterators");t.exports=e("./$.core").getIteratorMethod=function(e){return void 0!=e?e[o]||e["@@iterator"]||i[n(e)]:void 0}},{"./$.classof":29,"./$.core":31,"./$.iterators":55,"./$.wks":78}],80:[function(e,t,r){"use strict";var n=e("./$.add-to-unscopables"),o=e("./$.iter-step"),i=e("./$.iterators"),s=e("./$.to-iobject");t.exports=e("./$.iter-define")(Array,"Array",function(e,t){this._t=s(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,o(1)):"keys"==t?o(0,r):"values"==t?o(0,e[r]):o(0,[r,e[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},{"./$.add-to-unscopables":27,"./$.iter-define":52,"./$.iter-step":54,"./$.iterators":55,"./$.to-iobject":74}],81:[function(e,t,r){var n=e("./$.to-iobject");e("./$.object-sap")("getOwnPropertyDescriptor",function(e){return function(t,r){return e(n(t),r)}})},{"./$.object-sap":60,"./$.to-iobject":74}],82:[function(e,t,r){var n=e("./$.to-object");e("./$.object-sap")("getPrototypeOf",function(e){return function(t){return e(n(t))}})},{"./$.object-sap":60,"./$.to-object":76}],83:[function(e,t,r){var n=e("./$.to-object");e("./$.object-sap")("keys",function(e){return function(t){return e(n(t))}})},{"./$.object-sap":60,"./$.to-object":76}],84:[function(e,t,r){var n=e("./$.export");n(n.S,"Object",{setPrototypeOf:e("./$.set-proto").set})},{"./$.export":37,"./$.set-proto":65}],85:[function(e,t,r){},{}],86:[function(e,t,r){"use strict";var n,o=e("./$"),i=e("./$.library"),s=e("./$.global"),a=e("./$.ctx"),c=e("./$.classof"),u=e("./$.export"),l=e("./$.is-object"),f=e("./$.an-object"),d=e("./$.a-function"),p=e("./$.strict-new"),b=e("./$.for-of"),h=e("./$.set-proto").set,v=e("./$.same-value"),y=e("./$.wks")("species"),_=e("./$.species-constructor"),g=e("./$.microtask"),m="Promise",j=s.process,$="process"==c(j),O=s[m],w=function(e){var t=new O(function(){});return e&&(t.constructor=Object),O.resolve(t)===t},k=function(){function t(e){var r=new O(e);return h(r,t.prototype),r}var r=!1;try{if(r=O&&O.resolve&&w(),h(t,O),t.prototype=o.create(O.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(r=!1),r&&e("./$.descriptors")){var n=!1;O.resolve(o.setDesc({},"then",{get:function(){n=!0}})),r=n}}catch(i){r=!1}return r}(),x=function(e,t){return i&&e===O&&t===n?!0:v(e,t)},C=function(e){var t=f(e)[y];return void 0!=t?t:e},E=function(e){var t;return l(e)&&"function"==typeof(t=e.then)?t:!1},S=function(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=d(t),this.reject=d(r)},T=function(e){try{e()}catch(t){return{error:t}}},M=function(e,t){if(!e.n){e.n=!0;var r=e.c;g(function(){for(var n=e.v,o=1==e.s,i=0,a=function(t){var r,i,s=o?t.ok:t.fail,a=t.resolve,c=t.reject;try{s?(o||(e.h=!0),r=s===!0?n:s(n),r===t.promise?c(TypeError("Promise-chain cycle")):(i=E(r))?i.call(r,a,c):a(r)):c(n)}catch(u){c(u)}};r.length>i;)a(r[i++]);r.length=0,e.n=!1,t&&setTimeout(function(){var t,r,o=e.p;N(o)&&($?j.emit("unhandledRejection",n,o):(t=s.onunhandledrejection)?t({promise:o,reason:n}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",n)),e.a=void 0},1)})}},N=function(e){var t,r=e._d,n=r.a||r.c,o=0;if(r.h)return!1;for(;n.length>o;)if(t=n[o++],t.fail||!N(t.promise))return!1;return!0},R=function(e){var t=this;t.d||(t.d=!0,t=t.r||t,t.v=e,t.s=2,t.a=t.c.slice(),M(t,!0))},D=function(e){var t,r=this;if(!r.d){r.d=!0,r=r.r||r;try{if(r.p===e)throw TypeError("Promise can't be resolved itself");(t=E(e))?g(function(){var n={r:r,d:!1};try{t.call(e,a(D,n,1),a(R,n,1))}catch(o){R.call(n,o)}}):(r.v=e,r.s=1,M(r,!1))}catch(n){R.call({r:r,d:!1},n)}}};k||(O=function(e){d(e);var t=this._d={p:p(this,O,m),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{e(a(D,t,1),a(R,t,1))}catch(r){R.call(t,r)}},e("./$.redefine-all")(O.prototype,{then:function(e,t){var r=new S(_(this,O)),n=r.promise,o=this._d;return r.ok="function"==typeof e?e:!0,r.fail="function"==typeof t&&t,o.c.push(r),o.a&&o.a.push(r),o.s&&M(o,!1),n},"catch":function(e){return this.then(void 0,e)}})),u(u.G+u.W+u.F*!k,{Promise:O}),e("./$.set-to-string-tag")(O,m),e("./$.set-species")(m),n=e("./$.core")[m],u(u.S+u.F*!k,m,{reject:function(e){var t=new S(this),r=t.reject;return r(e),t.promise}}),u(u.S+u.F*(!k||w(!0)),m,{resolve:function(e){if(e instanceof O&&x(e.constructor,this))return e;var t=new S(this),r=t.resolve;return r(e),t.promise}}),u(u.S+u.F*!(k&&e("./$.iter-detect")(function(e){O.all(e)["catch"](function(){})})),m,{all:function(e){var t=C(this),r=new S(t),n=r.resolve,i=r.reject,s=[],a=T(function(){b(e,!1,s.push,s);var r=s.length,a=Array(r);r?o.each.call(s,function(e,o){var s=!1;t.resolve(e).then(function(e){s||(s=!0,a[o]=e,--r||n(a))},i)}):n(a)});return a&&i(a.error),r.promise},race:function(e){var t=C(this),r=new S(t),n=r.reject,o=T(function(){b(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return o&&n(o.error),r.promise}})},{"./$":56,"./$.a-function":26,"./$.an-object":28,"./$.classof":29,"./$.core":31,"./$.ctx":32,"./$.descriptors":34,"./$.export":37,"./$.for-of":39,"./$.global":41,"./$.is-object":49,"./$.iter-detect":53,"./$.library":58,"./$.microtask":59,"./$.redefine-all":62,"./$.same-value":64,"./$.set-proto":65,"./$.set-species":66,"./$.set-to-string-tag":67,"./$.species-constructor":69,"./$.strict-new":70,"./$.wks":78}],87:[function(e,t,r){"use strict";var n=e("./$.string-at")(!0);e("./$.iter-define")(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},{"./$.iter-define":52,"./$.string-at":71}],88:[function(e,t,r){"use strict";var n=e("./$"),o=e("./$.global"),i=e("./$.has"),s=e("./$.descriptors"),a=e("./$.export"),c=e("./$.redefine"),u=e("./$.fails"),l=e("./$.shared"),f=e("./$.set-to-string-tag"),d=e("./$.uid"),p=e("./$.wks"),b=e("./$.keyof"),h=e("./$.get-names"),v=e("./$.enum-keys"),y=e("./$.is-array"),_=e("./$.an-object"),g=e("./$.to-iobject"),m=e("./$.property-desc"),j=n.getDesc,$=n.setDesc,O=n.create,w=h.get,k=o.Symbol,x=o.JSON,C=x&&x.stringify,E=!1,S=p("_hidden"),T=n.isEnum,M=l("symbol-registry"),N=l("symbols"),R="function"==typeof k,D=Object.prototype,P=s&&u(function(){return 7!=O($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=j(D,t);n&&delete D[t],$(e,t,r),n&&e!==D&&$(D,t,n)}:$,A=function(e){var t=N[e]=O(k.prototype);return t._k=e,s&&E&&P(D,e,{configurable:!0,set:function(t){i(this,S)&&i(this[S],e)&&(this[S][e]=!1),P(this,e,m(1,t))}}),t},L=function(e){return"symbol"==typeof e},I=function(e,t,r){return r&&i(N,t)?(r.enumerable?(i(e,S)&&e[S][t]&&(e[S][t]=!1),r=O(r,{enumerable:m(0,!1)})):(i(e,S)||$(e,S,m(1,{})),e[S][t]=!0),P(e,t,r)):$(e,t,r)},F=function(e,t){_(e);for(var r,n=v(t=g(t)),o=0,i=n.length;i>o;)I(e,r=n[o++],t[r]);return e},V=function(e,t){return void 0===t?O(e):F(O(e),t)},z=function(e){var t=T.call(this,e);return t||!i(this,e)||!i(N,e)||i(this,S)&&this[S][e]?t:!0},U=function(e,t){var r=j(e=g(e),t);return!r||!i(N,t)||i(e,S)&&e[S][t]||(r.enumerable=!0),r},H=function(e){for(var t,r=w(g(e)),n=[],o=0;r.length>o;)i(N,t=r[o++])||t==S||n.push(t);return n},B=function(e){for(var t,r=w(g(e)),n=[],o=0;r.length>o;)i(N,t=r[o++])&&n.push(N[t]);return n},J=function(e){if(void 0!==e&&!L(e)){for(var t,r,n=[e],o=1,i=arguments;i.length>o;)n.push(i[o++]);return t=n[1],"function"==typeof t&&(r=t),!r&&y(t)||(t=function(e,t){return r&&(t=r.call(this,e,t)),L(t)?void 0:t}),n[1]=t,C.apply(x,n)}},W=u(function(){var e=k();return"[null]"!=C([e])||"{}"!=C({a:e})||"{}"!=C(Object(e))});R||(k=function(){if(L(this))throw TypeError("Symbol is not a constructor");return A(d(arguments.length>0?arguments[0]:void 0))},c(k.prototype,"toString",function(){return this._k}),L=function(e){return e instanceof k},n.create=V,n.isEnum=z,n.getDesc=U,n.setDesc=I,n.setDescs=F,n.getNames=h.get=H,n.getSymbols=B,s&&!e("./$.library")&&c(D,"propertyIsEnumerable",z,!0));var Y={"for":function(e){return i(M,e+="")?M[e]:M[e]=k(e)},keyFor:function(e){return b(M,e)},useSetter:function(){E=!0},useSimple:function(){E=!1}};n.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(e){var t=p(e);Y[e]=R?t:A(t)}),E=!0,a(a.G+a.W,{Symbol:k}),a(a.S,"Symbol",Y),a(a.S+a.F*!R,"Object",{create:V,defineProperty:I,defineProperties:F,getOwnPropertyDescriptor:U,getOwnPropertyNames:H,getOwnPropertySymbols:B}),x&&a(a.S+a.F*(!R||W),"JSON",{stringify:J}),f(k,"Symbol"),f(Math,"Math",!0),f(o.JSON,"JSON",!0)},{"./$":56,"./$.an-object":28,"./$.descriptors":34,"./$.enum-keys":36,"./$.export":37,"./$.fails":38,"./$.get-names":40,"./$.global":41,"./$.has":42,"./$.is-array":48,"./$.keyof":57,"./$.library":58,"./$.property-desc":61,"./$.redefine":63,"./$.set-to-string-tag":67,"./$.shared":68,"./$.to-iobject":74,"./$.uid":77,"./$.wks":78}],89:[function(e,t,r){e("./es6.array.iterator");var n=e("./$.iterators");n.NodeList=n.HTMLCollection=n.Array},{"./$.iterators":55,"./es6.array.iterator":80}],90:[function(e,t,r){window.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||function(e){function t(e){this.g=[],this.k=e}function r(e){!function r(){var n=e.takeRecords();n.length&&e.k(n,e),e.f=setTimeout(r,t._period)}()}function n(t){var r,n={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};for(r in t)n[r]!==e&&t[r]!==e&&(n[r]=t[r]);return n}function o(e,t){var r=a(e,t);return function(n){var o,c=n.length;t.a&&r.a&&i(n,e,r.a,t.d),(t.b||t.e)&&(o=s(n,e,r,t)),(o||n.length!==c)&&(r=a(e,t))}}function i(t,r,o,i){for(var s,a,c={},u=r.attributes,l=u.length;l--;)s=u[l],a=s.name,i&&i[a]===e||(s.value!==o[a]&&t.push(n({type:"attributes",target:r,attributeName:a,oldValue:o[a],attributeNamespace:s.namespaceURI})),c[a]=!0);for(a in o)c[a]||t.push(n({target:r,type:"attributes",attributeName:a,oldValue:o[a]}))}function s(t,r,o,s){function a(e,r,o,a,c){var l=e.length-1;c=-~((l-c)/2);for(var f,d,p;p=e.pop();)f=o[p.h],d=a[p.i],s.b&&c&&Math.abs(p.h-p.i)>=l&&(t.push(n({type:"childList",target:r,addedNodes:[f],removedNodes:[f],nextSibling:f.nextSibling,previousSibling:f.previousSibling})),c--),s.a&&d.a&&i(t,f,d.a,s.d),s.c&&3===f.nodeType&&f.nodeValue!==d.c&&t.push(n({type:"characterData",target:f})),s.e&&u(f,d)}function u(r,o){for(var d,p,b,h,v,y=r.childNodes,_=o.b,g=y.length,m=_?_.length:0,j=0,$=0,O=0;g>$||m>O;)h=y[$],v=(b=_[O])&&b.j,h===v?(s.a&&b.a&&i(t,h,b.a,s.d),s.c&&b.c!==e&&h.nodeValue!==b.c&&t.push(n({type:"characterData",target:h})),p&&a(p,r,y,_,j),s.e&&(h.childNodes.length||b.b&&b.b.length)&&u(h,b),$++,O++):(l=!0,d||(d={},p=[]),h&&(d[b=c(h)]||(d[b]=!0,-1===(b=f(_,h,O,"j"))?s.b&&(t.push(n({type:"childList",target:r,addedNodes:[h],nextSibling:h.nextSibling,previousSibling:h.previousSibling})),j++):p.push({h:$,i:b})),$++),v&&v!==y[$]&&(d[b=c(v)]||(d[b]=!0,-1===(b=f(y,v,$))?s.b&&(t.push(n({type:"childList",target:o.j,removedNodes:[v],nextSibling:_[O+1],previousSibling:_[O-1]})),j--):p.push({h:b,i:O})),O++));p&&a(p,r,y,_,j)}var l;return u(r,o),l}function a(e,t){var r=!0;return function n(e){var o={j:e};return!t.c||3!==e.nodeType&&8!==e.nodeType?(t.a&&r&&1===e.nodeType&&(o.a=l(e.attributes,function(e,r){return t.d&&!t.d[r.name]||(e[r.name]=r.value),e})),r&&(t.b||t.c||t.a&&t.e)&&(o.b=u(e.childNodes,n)),r=t.e):o.c=e.nodeValue,o}(e)}function c(e){try{return e.id||(e.mo_id=e.mo_id||d++)}catch(t){try{return e.nodeValue}catch(r){return d++}}}function u(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n,e);return r}function l(e,t){for(var r={},n=0;n<e.length;n++)r=t(r,e[n],n,e);return r}function f(e,t,r,n){for(;r<e.length;r++)if((n?e[r][n]:e[r])===t)return r;return-1}t._period=30,t.prototype={observe:function(e,t){for(var n={a:!!(t.attributes||t.attributeFilter||t.attributeOldValue),b:!!t.childList,e:!!t.subtree,c:!(!t.characterData&&!t.characterDataOldValue)},i=this.g,s=0;s<i.length;s++)i[s].m===e&&i.splice(s,1);t.attributeFilter&&(n.d=l(t.attributeFilter,function(e,t){
return e[t]=!0,e})),i.push({m:e,l:o(e,n)}),this.f||r(this)},takeRecords:function(){for(var e=[],t=this.g,r=0;r<t.length;r++)t[r].l(e);return e},disconnect:function(){this.g=[],clearTimeout(this.f),this.f=null}};var d=1;return t}(void 0)},{}],91:[function(e,t,r){Object.observe||function(e,t,r,n){"use strict";var o,i,s=["add","update","delete","reconfigure","setPrototype","preventExtensions"],a=t.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}(e.prototype.toString),c=t.prototype.indexOf?t.indexOf||function(e,r,n){return t.prototype.indexOf.call(e,r,n)}:function(e,t,r){for(var n=r||0;n<e.length;n++)if(e[n]===t)return n;return-1},u=r.Map!==n&&Map.prototype.forEach?function(){return new Map}:function(){var e=[],t=[];return{size:0,has:function(t){return c(e,t)>-1},get:function(r){return t[c(e,r)]},set:function(r,n){var o=c(e,r);-1===o?(e.push(r),t.push(n),this.size++):t[o]=n},"delete":function(r){var n=c(e,r);n>-1&&(e.splice(n,1),t.splice(n,1),this.size--)},forEach:function(r){for(var n=0;n<e.length;n++)r.call(arguments[1],t[n],e[n],this)}}},l=e.getOwnPropertyNames?function(){var t=e.getOwnPropertyNames;try{arguments.callee}catch(r){var n=(t(c).join(" ")+" ").replace(/prototype |length |name /g,"").slice(0,-1).split(" ");n.length&&(t=function(t){var r=e.getOwnPropertyNames(t);if("function"==typeof t)for(var o,i=0;i<n.length;)(o=c(r,n[i++]))>-1&&r.splice(o,1);return r})}return t}():function(t){var r,n,o=[];if("hasOwnProperty"in t)for(r in t)t.hasOwnProperty(r)&&o.push(r);else{n=e.hasOwnProperty;for(r in t)n.call(t,r)&&o.push(r)}return a(t)&&o.push("length"),o},f=e.getPrototypeOf,d=e.defineProperties&&e.getOwnPropertyDescriptor,p=r.requestAnimationFrame||r.webkitRequestAnimationFrame||function(){var e=+new Date,t=e;return function(r){return setTimeout(function(){r((t=+new Date)-e)},17)}}(),b=function(e,t,r){var n=o.get(e);n?(v(n,e),m(e,n,t,r)):(n=h(e),m(e,n,t,r),1===o.size&&p(y))},h=function(t,r){var n,i=l(t),s=[],a=0,r={handlers:u(),frozen:e.isFrozen?e.isFrozen(t):!1,extensible:e.isExtensible?e.isExtensible(t):!0,proto:f&&f(t),properties:i,values:s,notifier:g(t,r)};if(d)for(n=r.descriptors=[];a<i.length;)n[a]=d(t,i[a]),s[a]=t[i[a++]];else for(;a<i.length;)s[a]=t[i[a++]];return o.set(t,r),r},v=function(){var t=d?function(e,t,r,n,o){var i=t.properties[r],s=e[i],a=t.values[r],c=t.descriptors[r];"value"in o&&(a===s?0===a&&1/a!==1/s:a===a||s===s)&&(j(e,t,{name:i,type:"update",object:e,oldValue:a},n),t.values[r]=s),!c.configurable||o.configurable&&o.writable===c.writable&&o.enumerable===c.enumerable&&o.get===c.get&&o.set===c.set||(j(e,t,{name:i,type:"reconfigure",object:e,oldValue:a},n),t.descriptors[r]=o)}:function(e,t,r,n){var o=t.properties[r],i=e[o],s=t.values[r];(s===i?0===s&&1/s!==1/i:s===s||i===i)&&(j(e,t,{name:o,type:"update",object:e,oldValue:s},n),t.values[r]=i)},r=d?function(e,r,n,o,i){for(var s,a=r.length;n&&a--;)null!==r[a]&&(s=d(e,r[a]),n--,s?t(e,o,a,i,s):(j(e,o,{name:r[a],type:"delete",object:e,oldValue:o.values[a]},i),o.properties.splice(a,1),o.values.splice(a,1),o.descriptors.splice(a,1)))}:function(e,t,r,n,o){for(var i=t.length;r&&i--;)null!==t[i]&&(j(e,n,{name:t[i],type:"delete",object:e,oldValue:n.values[i]},o),n.properties.splice(i,1),n.values.splice(i,1),r--)};return function(n,o,i){if(n.handlers.size&&!n.frozen){var s,a,u,p,b,h,v,y,_=n.values,g=n.descriptors,m=0;if(n.extensible)if(s=n.properties.slice(),a=s.length,u=l(o),g){for(;m<u.length;)b=u[m++],p=c(s,b),y=d(o,b),-1===p?(j(o,n,{name:b,type:"add",object:o},i),n.properties.push(b),_.push(o[b]),g.push(y)):(s[p]=null,a--,t(o,n,p,i,y));r(o,s,a,n,i),e.isExtensible(o)||(n.extensible=!1,j(o,n,{type:"preventExtensions",object:o},i),n.frozen=e.isFrozen(o))}else{for(;m<u.length;)b=u[m++],p=c(s,b),h=o[b],-1===p?(j(o,n,{name:b,type:"add",object:o},i),n.properties.push(b),_.push(h)):(s[p]=null,a--,t(o,n,p,i));r(o,s,a,n,i)}else if(!n.frozen){for(;m<s.length;m++)b=s[m],t(o,n,m,i,d(o,b));e.isFrozen(o)&&(n.frozen=!0)}f&&(v=f(o),v!==n.proto&&(j(o,n,{type:"setPrototype",name:"__proto__",object:o,oldValue:n.proto}),n.proto=v))}}}(),y=function(){o.size&&(o.forEach(v),i.forEach(_),p(y))},_=function(e,t){var r=e.changeRecords;r.length&&(e.changeRecords=[],t(r))},g=function(e,t){return arguments.length<2&&(t=o.get(e)),t&&t.notifier||{notify:function(t){t.type;var r=o.get(e);if(r){var n,i={object:e};for(n in t)"object"!==n&&(i[n]=t[n]);j(e,r,i)}},performChange:function(t,r){if("string"!=typeof t)throw new TypeError("Invalid non-string changeType");if("function"!=typeof r)throw new TypeError("Cannot perform non-function");var i,s,a=o.get(e),c=arguments[2],u=c===n?r():r.call(c);if(a&&v(a,e,t),a&&u&&"object"==typeof u){s={object:e,type:t};for(i in u)"object"!==i&&"type"!==i&&(s[i]=u[i]);j(e,a,s)}}}},m=function(e,t,r,n){var o=i.get(r);o||i.set(r,o={observed:u(),changeRecords:[]}),o.observed.set(e,{acceptList:n.slice(),data:t}),t.handlers.set(r,o)},j=function(e,t,r,n){t.handlers.forEach(function(t){var o=t.observed.get(e).acceptList;("string"!=typeof n||-1===c(o,n))&&c(o,r.type)>-1&&t.changeRecords.push(r)})};o=u(),i=u(),e.observe=function(t,r,o){if(!t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.observe cannot observe non-object");if("function"!=typeof r)throw new TypeError("Object.observe cannot deliver to non-function");if(e.isFrozen&&e.isFrozen(r))throw new TypeError("Object.observe cannot deliver to a frozen function object");if(o===n)o=s;else if(!o||"object"!=typeof o)throw new TypeError("Third argument to Object.observe must be an array of strings.");return b(t,r,o),t},e.unobserve=function(e,t){if(null===e||"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object.unobserve cannot unobserve non-object");if("function"!=typeof t)throw new TypeError("Object.unobserve cannot deliver to non-function");var r,n=i.get(t);return n&&(r=n.observed.get(e))&&(n.observed.forEach(function(e,t){v(e.data,t)}),p(function(){_(n,t)}),1===n.observed.size&&n.observed.has(e)?i["delete"](t):n.observed["delete"](e),1===r.data.handlers.size?o["delete"](e):r.data.handlers["delete"](t)),e},e.getNotifier=function(t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object.getNotifier cannot getNotifier non-object");return e.isFrozen&&e.isFrozen(t)?null:g(t)},e.deliverChangeRecords=function(e){if("function"!=typeof e)throw new TypeError("Object.deliverChangeRecords cannot deliver to non-function");var t=i.get(e);t&&(t.observed.forEach(function(e,t){v(e.data,t)}),_(t,e))}}(Object,Array,this)},{}],92:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.DataObjectObserver=r.DataObjectReporter=r.Syncher=void 0,e("mutationobserver-shim"),e("object.observe"),e("array.observe");var o=e("./syncher/Syncher"),i=n(o),s=e("./syncher/DataObjectReporter"),a=n(s),c=e("./syncher/DataObjectObserver"),u=n(c);r.Syncher=i["default"],r.DataObjectReporter=a["default"],r.DataObjectObserver=u["default"]},{"./syncher/DataObjectObserver":95,"./syncher/DataObjectReporter":96,"./syncher/Syncher":99,"array.observe":1,"mutationobserver-shim":90,"object.observe":91}],93:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/core-js/object/keys"),a=n(s),c=e("babel-runtime/helpers/classCallCheck"),u=n(c),l=e("babel-runtime/helpers/createClass"),f=n(l),d=e("./SyncObject"),p=n(d),b=e("./DataObjectChild"),h=n(b),v=e("../utils/utils.js"),y=function(){function e(t,r,n,o,i,s){(0,u["default"])(this,e);var a=this;a._syncher=t,a._url=r,a._schema=n,a._status=o,a._syncObj=new p["default"](i),a._childrens=s,a._version=0,a._childId=0,a._childrenObjects={},a._childrenListeners=[],a._owner=t._owner,a._bus=t._bus}return(0,f["default"])(e,[{key:"_allocateListeners",value:function(){var e=this,t=this,r=t._url+"/children/";t._childrens&&t._childrens.forEach(function(n){var o=r+n,i=t._bus.addListener(o,function(r){if(r.from!==e._owner)switch(console.log("DataObject-Children-RCV: ",r),r.type){case"create":t._onChildCreate(r);break;case"delete":console.log(r);break;default:t._changeChildren(r)}});t._childrenListeners.push(i)})}},{key:"_releaseListeners",value:function(){var e=this;e._childrenListeners.forEach(function(e){e.remove()}),(0,a["default"])(e._childrenObjects).forEach(function(t){e._childrenObjects[t]._releaseListeners()})}},{key:"pause",value:function(){throw"Not implemented"}},{key:"resume",value:function(){throw"Not implemented"}},{key:"stop",value:function(){throw"Not implemented"}},{key:"addChild",value:function(e,t){var r=this;r._childId++;var n=r._owner+"#"+r._childId,o=r._url+"/children/"+e,s={type:"create",from:r._owner,to:o,body:{resource:n,value:t}};return new i["default"](function(e){var i=r._bus.postMessage(s);console.log("create-reporter-child( "+r._owner+" ): ",s);var a=new h["default"](r,n,t,r._owner,i);a.onChange(function(e){r._onChange(e,{path:o,childId:n})}),r._childrenObjects[n]=a,e(a)})}},{key:"onAddChild",value:function(e){this._onAddChildrenHandler=e}},{key:"_onChildCreate",value:function(e){var t=this,r=e.body.resource;console.log("create-observer-child( "+t._owner+" ): ",e);var n=new h["default"](t,r,e.body.value);t._childrenObjects[r]=n,setTimeout(function(){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,source:t._owner}})});var o={type:e.type,from:e.from,url:e.to,value:e.body.value,childId:r,identity:e.body.identity};t._onAddChildrenHandler&&(console.log("ADD-CHILDREN-EVENT: ",o),t._onAddChildrenHandler(o))}},{key:"_onChange",value:function(e,t){var r=this;if(r._version++,"on"===r._status){var n={type:"update",from:r._url,to:r._url+"/changes",body:{version:r._version,source:r._owner,attribute:e.field}};e.oType===d.ObjectType.OBJECT?e.cType!==d.ChangeType.REMOVE&&(n.body.value=e.data):(n.body.attributeType=e.oType,n.body.value=e.data,e.cType!==d.ChangeType.UPDATE&&(n.body.operation=e.cType)),t&&(n.to=t.path,n.body.resource=t.childId),r._bus.postMessage(n)}}},{key:"_changeObject",value:function(e,t){var r=this;if(r._version+1===t.body.version){r._version++;var n=t.body.attribute,o=(0,v.deepClone)(t.body.value),i=e.findBefore(n);if(t.body.attributeType===d.ObjectType.ARRAY)if(t.body.operation===d.ChangeType.ADD){var s=i.obj,a=i.last;Array.prototype.splice.apply(s,[a,0].concat(o))}else if(t.body.operation===d.ChangeType.REMOVE){var c=i.obj,u=i.last;c.splice(u,o)}else i.obj[i.last]=o;else t.body.value?i.obj[i.last]=o:delete i.obj[i.last]}else console.log("UNSYNCHRONIZED VERSION: (data => "+r._version+", msg => "+t.body.version+")")}},{key:"_changeChildren",value:function(e){var t=this;console.log("Change children: ",t._owner,e);var r=e.body.resource,n=t._childrenObjects[r];n?t._changeObject(n._syncObj,e):console.log("No children found for: ",r)}},{key:"url",get:function(){return this._url}},{key:"schema",get:function(){return this._schema}},{key:"status",get:function(){return this._status}},{key:"data",get:function(){return this._syncObj.data}},{key:"childrens",get:function(){return this._childrenObjects}}]),e}();r["default"]=y,t.exports=r["default"]},{"../utils/utils.js":100,"./DataObjectChild":94,"./SyncObject":98,"babel-runtime/core-js/object/keys":7,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],94:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),i=n(o),s=e("babel-runtime/helpers/createClass"),a=n(s),c=e("./SyncObject"),u=n(c),l=function(){function e(t,r,n,o,s){(0,i["default"])(this,e);var a=this;a._parent=t,a._childId=r,a._owner=o,a._msgId=s,a._syncObj=new u["default"](n),a._bus=t._bus,a._allocateListeners()}return(0,a["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._owner&&(e._listener=e._bus.addListener(e._owner,function(t){"response"===t.type&&t.id===e._msgId&&(console.log("DataObjectChild.onResponse:",t),e._onResponse(t))}))}},{key:"_releaseListeners",value:function(){var e=this;e._listener&&e._listener.remove()}},{key:"delete",value:function(){var e=this;delete e._parent._children[e._childId],e._releaseListeners()}},{key:"onChange",value:function(e){this._syncObj.observe(function(t){e(t)})}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.body.source,code:e.body.code};t._onResponseHandler&&t._onResponseHandler(r)}},{key:"childId",get:function(){return this._childId}},{key:"data",get:function(){return this._syncObj.data}}]),e}();r["default"]=l,t.exports=r["default"]},{"./SyncObject":98,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],95:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/object/keys"),i=n(o),s=e("babel-runtime/core-js/object/get-prototype-of"),a=n(s),c=e("babel-runtime/helpers/classCallCheck"),u=n(c),l=e("babel-runtime/helpers/createClass"),f=n(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),p=n(d),b=e("babel-runtime/helpers/get"),h=n(b),v=e("babel-runtime/helpers/inherits"),y=n(v),_=e("./DataObject"),g=n(_),m=e("./DataObjectChild"),j=n(m),$={ANY:"any",START:"start",EXACT:"exact"},O=function(e){function t(e,r,n,o,s,c,l){(0,u["default"])(this,t);var f=(0,p["default"])(this,(0,a["default"])(t).call(this,e,r,n,o,s.data,c)),d=f;return d._version=l,d._filters={},d._syncObj.observe(function(e){d._onFilter(e)}),(0,i["default"])(s.childrens).forEach(function(e){var t=s.childrens[e];d._childrenObjects[e]=new j["default"](d,e,t)}),d._allocateListeners(),f}return(0,y["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,h["default"])((0,a["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._changeListener=e._bus.addListener(e._url+"/changes",function(t){"update"===t.type&&(console.log("DataObjectObserver-"+e._url+"-RCV: ",t),e._changeObject(e._syncObj,t))})}},{key:"_releaseListeners",value:function(){(0,h["default"])((0,a["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._changeListener.remove()}},{key:"delete",value:function(){var e=this;e._releaseListeners(),delete e._syncher._observers[e._url]}},{key:"unsubscribe",value:function(){var e=this,t={type:"unsubscribe",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectObserver-UNSUBSCRIBE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._observers[e._url])})}},{key:"onChange",value:function(e,t){var r=e,n={type:$.EXACT,callback:t},o=e.indexOf("*");o===e.length-1&&(0===o?n.type=$.ANY:(n.type=$.START,r=e.substr(0,e.length-1))),this._filters[r]=n}},{key:"_onFilter",value:function(e){var t=this;(0,i["default"])(t._filters).forEach(function(r){var n=t._filters[r];n.type===$.ANY?n.callback(e):n.type===$.START?0===e.field.indexOf(r)&&n.callback(e):n.type===$.EXACT&&e.field===r&&n.callback(e)})}}]),t}(g["default"]);r["default"]=O,t.exports=r["default"]},{"./DataObject":93,"./DataObjectChild":94,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/get":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],96:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/object/keys"),i=n(o),s=e("babel-runtime/core-js/object/get-prototype-of"),a=n(s),c=e("babel-runtime/helpers/classCallCheck"),u=n(c),l=e("babel-runtime/helpers/createClass"),f=n(l),d=e("babel-runtime/helpers/possibleConstructorReturn"),p=n(d),b=e("babel-runtime/helpers/get"),h=n(b),v=e("babel-runtime/helpers/inherits"),y=n(v),_=e("./DataObject"),g=n(_),m=e("../utils/utils.js"),j=function(e){function t(e,r,n,o,i,s){(0,u["default"])(this,t);var c=(0,p["default"])(this,(0,a["default"])(t).call(this,e,r,n,o,i,s)),l=c;return l._subscriptions={},l._syncObj.observe(function(e){console.log("DataObjectReporter-"+r+"-SEND: ",e),l._onChange(e)}),l._allocateListeners(),c}return(0,y["default"])(t,e),(0,f["default"])(t,[{key:"_allocateListeners",value:function(){(0,h["default"])((0,a["default"])(t.prototype),"_allocateListeners",this).call(this);var e=this;e._responseListener=e._bus.addListener(e._url,function(t){"response"===t.type&&e._onResponse(t)})}},{key:"_releaseListeners",value:function(){(0,h["default"])((0,a["default"])(t.prototype),"_releaseListeners",this).call(this);var e=this;e._responseListener.remove()}},{key:"inviteObservers",value:function(e){var t=this,r={type:"create",from:t._syncher._owner,to:t._syncher._subURL,body:{resource:t._url,schema:t._schema,value:t._syncObj.data,authorise:e}};t._bus.postMessage(r)}},{key:"delete",value:function(){var e=this,t={type:"delete",from:e._owner,to:e._syncher._subURL,body:{resource:e._url}};e._bus.postMessage(t,function(t){console.log("DataObjectReporter-DELETE: ",t),200===t.body.code&&(e._releaseListeners(),delete e._syncher._reporters[e._url])})}},{key:"onSubscription",value:function(e){this._onSubscriptionHandler=e}},{key:"onResponse",value:function(e){this._onResponseHandler=e}},{key:"_onForward",value:function(e){var t=this;switch(console.log("DataObjectReporter-RCV: ",e),e.body.type){case"subscribe":t._onSubscribe(e);break;case"unsubscribe":t._onUnSubscribe(e)}}},{key:"_onSubscribe",value:function(e){var t=this,r=e.body.from,n={type:e.body.type,url:r,accept:function(){var n={url:r,status:"on"};t._subscriptions[r]=n;var o={};return(0,i["default"])(t._childrenObjects).forEach(function(e){var r=t._childrenObjects[e].data;o[e]=(0,m.deepClone)(r)}),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,schema:t._schema,version:t._version,value:{data:(0,m.deepClone)(t.data),childrens:o}}}),n},reject:function(r){t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:403,desc:r}})}};t._onSubscriptionHandler&&(console.log("SUBSCRIPTION-EVENT: ",n),t._onSubscriptionHandler(n))}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.body.from,n=t._subscriptions[r];delete t._subscriptions[r];var o={type:e.body.type,url:r,object:n};t._onSubscriptionHandler&&(console.log("UN-SUBSCRIPTION-EVENT: ",o),t._onSubscriptionHandler(o))}},{key:"_onResponse",value:function(e){var t=this,r={type:e.type,url:e.from,code:e.body.code};t._onResponseHandler&&(console.log("RESPONSE-EVENT: ",r),t._onResponseHandler(r))}},{key:"subscriptions",get:function(){return this._subscriptions}}]),t}(g["default"]);r["default"]=j,t.exports=r["default"]},{"../utils/utils.js":100,"./DataObject":93,"babel-runtime/core-js/object/get-prototype-of":6,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12,"babel-runtime/helpers/get":13,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],97:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/helpers/classCallCheck"),i=n(o),s=e("babel-runtime/helpers/createClass"),a=n(s),c=function(){function e(t,r,n,o){(0,i["default"])(this,e);var s=this;s._owner=t,s._url=r,s._bus=n,s._children=o,s._changes=[],s._allocateListeners()}return(0,a["default"])(e,[{key:"_allocateListeners",value:function(){var e=this;e._listener=e._bus.addListener(e._url,function(t){console.log("DataProvisional-"+e._url+"-RCV: ",t),e._changes.push(t)})}},{key:"_releaseListeners",value:function(){var e=this;e._listener.remove()}},{key:"apply",value:function(e){var t=this;t._changes.forEach(function(t){e._changeObject(e._syncObj,t)})}},{key:"children",get:function(){return this._children}}]),e}();r["default"]=c,t.exports=r["default"]},{"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],98:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0}),r.ObjectType=r.ChangeType=void 0;var o=e("babel-runtime/core-js/object/keys"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),a=n(s),c=e("babel-runtime/helpers/createClass"),u=n(c),l=e("../utils/utils.js"),f=function(){function e(t){(0,a["default"])(this,e);var r=this;r._observers=[],r._filters={},t?r._data=(0,l.deepClone)(t):r._data={},r._internalObserve(new d,r._data)}return(0,u["default"])(e,[{key:"observe",value:function(e){this._observers.push(e)}},{key:"find",value:function(e){var t=e.split(".");return this._findWithSplit(t)}},{key:"findBefore",value:function(e){var t={},r=e.split(".");return t.last=r.pop(),t.obj=this._findWithSplit(r),t}},{key:"_findWithSplit",value:function(e){var t=this._data;return e.forEach(function(e){t=t[e]}),t}},{key:"_fireEvent",value:function(e){this._observers.forEach(function(t){t(e)})}},{key:"_isObservable",value:function(e){return e.constructor===Object||e.constructor===Array}},{key:"_internalObserve",value:function(e,t){var r=this;if(r._isObservable(t)){var n=function(t){r._onChanges(e,t)};if(t.constructor===Object){Object.observe(t,n);for(var o in t)r._isObservable(t[o])&&r._internalObserve(e["new"](o),t[o])}else if(t.constructor===Array){Array.observe(t,n);for(var i in t)if(r._isObservable(t[i])){var s=e["new"](new p(t[i],i));r._internalObserve(s,t[i])}}}}},{key:"_onChanges",value:function(e,t){var r=this;for(var n in t){var o=t[n].object,i=void 0;if(o.constructor===Object&&(i=h.OBJECT),o.constructor===Array&&(i=h.ARRAY),"splice"===t[n].type)!function(){var s=t[n].index,a=e["new"](""+s),c=a.toString(),u=t[n].removed.length;if(0!==u){var f=t[n].removed;f.forEach(function(t,n){r._isObservable(t)&&e.removeIndex(s+n)}),r._fireEvent({cType:b.REMOVE,oType:i,field:c,data:u})}var d=t[n].addedCount;if(0!==d){var h=o.slice(s,s+d);h.forEach(function(t,n){if(r._isObservable(t)){var o=e["new"](new p(t,s+n));r._internalObserve(o,t)}}),r._fireEvent({cType:b.ADD,oType:i,field:c,data:(0,l.deepClone)(h)})}s!==o.length-1&&e.reIndexFrom(o)}();else{var s=e["new"](t[n].name),a=s.toString();if(-1!==a.indexOf("Symbol"))continue;var c=o[t[n].name];"update"===t[n].type&&this._fireEvent({cType:b.UPDATE,oType:i,field:a,data:(0,l.deepClone)(c)}),"add"===t[n].type&&(this._internalObserve(s,c),this._fireEvent({cType:b.ADD,oType:i,field:a,data:(0,l.deepClone)(c)})),"delete"===t[n].type&&this._fireEvent({cType:b.REMOVE,oType:i,field:a})}}}},{key:"data",get:function(){return this._data}}]),e}(),d=function(){function e(){(0,a["default"])(this,e),this._path=[],this._observables={}}return(0,u["default"])(e,[{key:"removeIndex",value:function(e){delete this._observables[e]}},{key:"reIndexFrom",value:function(e){var t=this;(0,i["default"])(this._observables).forEach(function(r){var n=t._observables[r],o=e.indexOf(n.obj);n.idx!=o&&(n.idx=o,delete t._observables[r],t._observables[o]=n)})}},{key:"new",value:function(e){e.constructor==p&&(this._observables[e.idx]=e);var t=this.clone();return t._path.push(e),t}},{key:"clone",value:function(){var t=new e;return this._path.forEach(function(e){t._path.push(e)}),t}},{key:"toString",value:function(){var e="";return this._path.forEach(function(t,r){0===r?e=t.toString():e+="."+t.toString()}),e}}]),e}(),p=function(){function e(t,r){(0,a["default"])(this,e),this.obj=t,this.idx=r}return(0,u["default"])(e,[{key:"toString",value:function(){return this.idx.toString()}}]),e}(),b=r.ChangeType={UPDATE:"update",ADD:"add",REMOVE:"remove"},h=r.ObjectType={OBJECT:"object",ARRAY:"array"};r["default"]=f},{"../utils/utils.js":100,"babel-runtime/core-js/object/keys":7,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],99:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var o=e("babel-runtime/core-js/promise"),i=n(o),s=e("babel-runtime/helpers/classCallCheck"),a=n(s),c=e("babel-runtime/helpers/createClass"),u=n(c),l=e("./DataObjectReporter"),f=n(l),d=e("./DataObjectObserver"),p=n(d),b=e("./DataProvisional"),h=n(b),v=function(){function e(t,r,n){(0,a["default"])(this,e);var o=this;o._owner=t,o._bus=r,o._subURL=n.runtimeURL+"/sm",o._reporters={},o._observers={},o._provisionals={},r.addListener(t,function(e){if(e.from!==t)switch(console.log("Syncher-RCV: ",e),e.type){case"forward":o._onForward(e);break;case"create":o._onRemoteCreate(e);break;case"delete":o._onRemoteDelete(e)}})}return(0,u["default"])(e,[{key:"create",value:function(e,t,r){var n=this;r.reporter=n._owner,r.schema=e;var o={type:"create",from:n._owner,to:n._subURL,body:{schema:e,value:r,authorise:t}};return new i["default"](function(t,i){n._bus.postMessage(o,function(o){if(console.log("create-response: ",o),200===o.body.code){var s=o.body.resource,a=new f["default"](n,s,e,"on",r,o.body.childrenResources);n._reporters[s]=a,t(a)}else i(o.body.desc)})})}},{key:"subscribe",value:function(e,t){var r=this,n={type:"subscribe",from:r._owner,to:r._subURL,body:{schema:e,resource:t}};return new i["default"](function(o,i){r._bus.postMessage(n,function(n){console.log("subscribe-response: ",n);var s=r._provisionals[t];if(delete r._provisionals[t],s&&s._releaseListeners(),n.body.code<200)s=new h["default"](r._owner,t,r._bus,n.body.childrenResources),r._provisionals[t]=s;else if(200===n.body.code){var a=new p["default"](r,t,e,"on",n.body.value,s.children,n.body.version);r._observers[t]=a,o(a),s.apply(a)}else i(n.body.desc)})})}},{key:"onNotification",value:function(e){this._onNotificationHandler=e}},{key:"_onForward",value:function(e){var t=this,r=t._reporters[e.body.to];r._onForward(e)}},{key:"_onRemoteCreate",value:function(e){var t=this,r=e.from.slice(0,-13),n={type:e.type,from:e.body.source,url:r,schema:e.body.schema,value:e.body.value,identity:e.body.identity,ack:function(r){var n=200;r&&(n=r),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",n),t._onNotificationHandler(n))}},{key:"_onRemoteDelete",value:function(e){var t=this,r=e.body.resource,n=t._observers[r];if(n){var o={type:e.type,url:r,identity:e.body.identity,ack:function(r){var o=200;r&&(o=r),200===o&&n["delete"](),t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:o,source:t._owner}})}};t._onNotificationHandler&&(console.log("NOTIFICATION-EVENT: ",o),t._onNotificationHandler(o))}else t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,source:t._owner}})}},{key:"owner",get:function(){return this._owner}},{key:"reporters",get:function(){return this._reporters}},{key:"observers",get:function(){return this._observers}}]),e}();r["default"]=v,t.exports=r["default"]},{"./DataObjectObserver":95,"./DataObjectReporter":96,"./DataProvisional":97,"babel-runtime/core-js/promise":9,"babel-runtime/helpers/classCallCheck":11,"babel-runtime/helpers/createClass":12}],100:[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=/([a-zA-Z-]*):\/\/(?:\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi,r="$1,$2,$3",n=e.replace(t,r).split(",");n[0]===e&&(n[0]="https",n[1]=e);var o={type:n[0],domain:n[1],identity:n[2]};return o}function i(e){return e?JSON.parse((0,a["default"])(e)):void 0}Object.defineProperty(r,"__esModule",{value:!0});var s=e("babel-runtime/core-js/json/stringify"),a=n(s);r.divideURL=o,r.deepClone=i},{"babel-runtime/core-js/json/stringify":2}]},{},[92])(92)});
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
**/ /* jshint undef: true */ /* globals RTCPeerConnection */ /* globals RTCSessionDescription */ /* globals RTCIceCandidate */var ConnectionController=function(_EventEmitter){_inherits(ConnectionController,_EventEmitter);function ConnectionController(syncher,domain,configuration){_classCallCheck(this,ConnectionController);if(!syncher)throw new Error('The syncher is a needed parameter');if(!domain)throw new Error('The domain is a needed parameter');if(!configuration)throw new Error('The configuration is a needed parameter');var _this2=_possibleConstructorReturn(this,Object.getPrototypeOf(ConnectionController).call(this));var _this=_this2;_this.syncher=syncher;_this.mode='offer';_this._objectDescURL='hyperty-catalogue://catalogue.'+_this._domain+'/.well-known/dataschema/Connection';console.info(configuration);console.info(configuration);_this.mediaConstraints=configuration.mediaConstraints;_this.configuration=configuration.webrtc; // Prepare the PeerConnection
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
  */function HypertyConnector(hypertyURL,bus,configuration){_classCallCheck(this,HypertyConnector);if(!hypertyURL)throw new Error('The hypertyURL is a needed parameter');if(!bus)throw new Error('The MiniBus is a needed parameter');if(!configuration)throw new Error('The configuration is a needed parameter');var _this2=_possibleConstructorReturn(this,Object.getPrototypeOf(HypertyConnector).call(this,hypertyURL,bus,configuration));var _this=_this2;_this._hypertyURL=hypertyURL;_this._bus=bus;_this._configuration=configuration;_this._domain=(0,_utils.divideURL)(hypertyURL).domain;_this._objectDescURL='hyperty-catalogue://catalogue.'+_this._domain+'/.well-known/dataschema/Communication';_this._controllers={};_this.hypertyDiscovery=new _HypertyDiscovery2.default(hypertyURL,bus);var syncher=new _Syncher.Syncher(hypertyURL,bus,configuration);syncher.onNotification(function(event){_this._onNotification(event);});_this._syncher=syncher;return _this2;}_createClass(HypertyConnector,[{key:'_onNotification',value:function _onNotification(event){var _this=this;console.info('------------ Acknowledges the Reporter ------------ \n');event.ack();console.info('------------------------ END ---------------------- \n');if(_this._controllers[event.from]){_this._autoSubscribe(event);}else {_this._autoAccept(event);}}},{key:'_autoSubscribe',value:function _autoSubscribe(event){var _this=this;var syncher=_this._syncher;console.info('---------------- Syncher Auto Subscribe ---------------- \n');console.info('Subscribe URL Object ',event,syncher);syncher.subscribe(_this._objectDescURL,event.url).then(function(dataObjectObserver){console.info('1. Return Subscribe Data Object Observer',dataObjectObserver);console.log(_this._controllers);_this._controllers[event.from].dataObjectObserver=dataObjectObserver;}).catch(function(reason){console.error(reason);});}},{key:'_autoAccept',value:function _autoAccept(event){var _this=this;var syncher=_this._syncher;console.info('----------- Syncher Subscribe (Auto Accept) ------------- \n');console.info('Subscribe URL Object ',event,syncher);syncher.subscribe(_this._objectDescURL,event.url).then(function(dataObjectObserver){console.info('1. Return Subscribe Data Object Observer',dataObjectObserver);var connectionController=new _ConnectionController2.default(syncher,_this._domain,_this._configuration);connectionController.remotePeerInformation=event;connectionController.dataObjectObserver=dataObjectObserver;_this.trigger('connector:connected',connectionController);_this.trigger('have:notification',event);console.info('------------------------ END ---------------------- \n');}).catch(function(reason){console.error(reason);});} /**
  * Establish connection with other client identifier
  * @param  {HypertyURL} HypertyURL - Define the identifier of the other component
  * @param  {Object} options - Object with options to improve the connect
  */},{key:'connect',value:function connect(hypertyURL,stream){ // TODO: Pass argument options as a stream, because is specific of implementation;
// TODO: CHange the hypertyURL for a list of URLS
var _this=this;var syncher=_this._syncher;return new Promise(function(resolve,reject){var connectionController=void 0;console.info('------------------------ Syncher Create ---------------------- \n');syncher.create(_this._objectDescURL,[hypertyURL],{}).then(function(dataObjectReporter){console.info('1. Return Create Data Object Reporter',dataObjectReporter);connectionController=new _ConnectionController2.default(syncher,_this._domain,_this._configuration);connectionController.stream=stream;connectionController.dataObjectReporter=dataObjectReporter;_this._controllers[hypertyURL]=connectionController;resolve(connectionController);console.info('--------------------------- END --------------------------- \n');}).catch(function(reason){console.error(reason);reject(reason);});});}}]);return HypertyConnector;}(_EventEmitter3.default);function activate(hypertyURL,bus,configuration){return {name:'HypertyConnector',instance:new HypertyConnector(hypertyURL,bus,configuration)};}module.exports=exports['default'];

},{"../utils/EventEmitter":8,"../utils/utils":9,"./ConnectionController":4,"service-framework/dist/HypertyDiscovery":1,"service-framework/dist/Syncher":2}],6:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true}); /**
* Copyright 2016 PT Inovação e Sistemas SA
* Copyright 2016 INESC-ID
* Copyright 2016 QUOBIS NETWORKS SL
* Copyright 2016 FRAUNHOFER-GESELLSCHAFT ZUR FOERDERUNG DER ANGEWANDTEN FORSCHUNG E.V
* Copyright 2016 ORANGE SA
* Copyright 2016 Deutsche Telekom AG
* Copyright 2016 Apizee
* Copyright 2016 TECHNISCHE UNIVERSITAT BERLIN
*
* Licensed under the Apache License, Version 2.0 (the ''License");
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
var connection={name:'',status:'',owner:'',peer:'',ownerPeer:{connectionDescription:{},iceCandidates:[]}};exports.default=connection;module.exports=exports['default'];

},{}],7:[function(require,module,exports){
'use strict';Object.defineProperty(exports,"__esModule",{value:true}); /**
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
**/var peer={name:'',connectionDescription:{},iceCandidates:[]};exports.default=peer;module.exports=exports['default'];

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
 */function getConfig(JSONObject){console.log('production');return JSONObject['production'];} /**
 * Get WebRTC API resources
 * @param  {Object}     options Object containing the information that resources will be used (camera, mic, resolution, etc);
 * @return {Promise}
 */function getUserMedia(constraints){return new Promise(function(resolve,reject){navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){resolve(mediaStream);}).catch(function(reason){reject(reason);});});}function serialize(){$.fn.serializeObject=function(){var o={};var a=this.serializeArray();$.each(a,function(){if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}o[this.name].push(this.value||'');}else {o[this.name]=this.value||'';}});return o;};$.fn.serializeObjectArray=function(){var o={};var a=this.serializeArray();$.each(a,function(){if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}o[this.name].push(this.value||'');}else {if(!o[this.name])o[this.name]=[];o[this.name].push(this.value||'');}});return o;};}function getTemplate(path,script){return new Promise(function(resolve,reject){if(Handlebars.templates===undefined||Handlebars.templates[name]===undefined){Handlebars.templates={};}else {resolve(Handlebars.templates[name]);}var templateFile=$.ajax({url:path+'.hbs',success:function success(data){Handlebars.templates[name]=Handlebars.compile(data);},fail:function fail(reason){return reason;}});var scriptFile=$.getScript(script);var requests=[];if(path)requests.push(templateFile);if(script)requests.push(scriptFile);Promise.all(requests).then(function(result){resolve(Handlebars.templates[name]);}).catch(function(reason){reject(reason);});});}

},{}]},{},[5])(5)
});