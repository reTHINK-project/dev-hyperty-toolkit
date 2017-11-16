// version: 0.10.1
// date: Thu Nov 16 2017 15:27:09 GMT+0000 (WET)
// licence: 
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


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Runtime",[],t):"object"==typeof exports?exports.Runtime=t():e.Runtime=t()}(this,function(){/******/
return function(e){/******/
/******/
// The require function
/******/
function __webpack_require__(r){/******/
/******/
// Check if module is in cache
/******/
if(t[r])/******/
return t[r].exports;/******/
// Create a new module (and put it into the cache)
/******/
var n=t[r]={/******/
i:r,/******/
l:!1,/******/
exports:{}};/******/
/******/
// Return the exports of the module
/******/
/******/
/******/
// Execute the module function
/******/
/******/
/******/
// Flag the module as loaded
/******/
return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}// webpackBootstrap
/******/
// The module cache
/******/
var t={};/******/
/******/
// Load entry module and return exports
/******/
/******/
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
/******/
// expose the module cache
/******/
/******/
/******/
// define getter function for harmony exports
/******/
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){/******/
__webpack_require__.o(e,t)||/******/
Object.defineProperty(e,t,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:r})},__webpack_require__.n=function(e){/******/
var t=e&&e.__esModule?/******/
function(){return e.default}:/******/
function(){return e};/******/
/******/
return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=207)}([/* 0 */
/***/
function(e,t,r){var n=r(4),i=r(30),o=r(18),a=r(19),s=r(27),u=function(e,t,r){var c,f,l,d,p=e&u.F,y=e&u.G,h=e&u.S,v=e&u.P,g=e&u.B,b=y?n:h?n[t]||(n[t]={}):(n[t]||{}).prototype,m=y?i:i[t]||(i[t]={}),_=m.prototype||(m.prototype={});y&&(r=t);for(c in r)
// contains in native
f=!p&&b&&void 0!==b[c],
// export native or passed
l=(f?b:r)[c],
// bind timers to global for call from export context
d=g&&f?s(l,n):v&&"function"==typeof l?s(Function.call,l):l,
// extend global
b&&a(b,c,l,e&u.U),
// export
m[c]!=l&&o(m,c,d),v&&_[c]!=l&&(_[c]=l)};n.core=i,
// type bitmap
u.F=1,// forced
u.G=2,// global
u.S=4,// static
u.P=8,// proto
u.B=16,// bind
u.W=32,// wrap
u.U=64,// safe
u.R=128,// real proto method for `library`
e.exports=u},/* 1 */
/***/
function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},/* 2 */
/***/
function(e,t,r){"use strict";t.__esModule=!0;var n=r(197),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i.default)(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}()},/* 3 */
/***/
function(e,t,r){var n=r(6);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},/* 4 */
/***/
function(e,t){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},/* 5 */
/***/
function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},/* 6 */
/***/
function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},/* 7 */
/***/
function(e,t,r){var n=r(78)("wks"),i=r(47),o=r(4).Symbol,a="function"==typeof o;(e.exports=function(e){return n[e]||(n[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=n},/* 8 */
/***/
function(e,t,r){
// Thank's IE8 for his funny defineProperty
e.exports=!r(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 9 */
/***/
function(e,t,r){var n=r(3),i=r(145),o=r(31),a=Object.defineProperty;t.f=r(8)?Object.defineProperty:function(e,t,r){if(n(e),t=o(t,!0),n(r),i)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},/* 10 */
/***/
function(e,t,r){
// 7.1.15 ToLength
var n=r(33),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},/* 11 */
/***/
function(e,t,r){var n,i;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
!function(o,a){"use strict";n=a,void 0!==(i="function"==typeof n?n.call(t,r,t,e):n)&&(e.exports=i)}(0,function(){"use strict";
// Cross-browser bind equivalent that works at least back to IE6
function bindMethod(e,t){var r=e[t];if("function"==typeof r.bind)return r.bind(e);try{return Function.prototype.bind.call(r,e)}catch(t){
// Missing bind shim or IE8 + Modernizr, fallback to wrapping
return function(){return Function.prototype.apply.apply(r,[e,arguments])}}}
// Build the best logging method possible for this env
// Wherever possible we want to bind, not wrap, to preserve stack traces
function realMethod(r){return"debug"===r&&(r="log"),typeof console!==t&&(void 0!==console[r]?bindMethod(console,r):void 0!==console.log?bindMethod(console,"log"):e)}
// These private functions always need `this` to be set properly
function replaceLoggingMethods(t,n){/*jshint validthis:true */
for(var i=0;i<r.length;i++){var o=r[i];this[o]=i<t?e:this.methodFactory(o,t,n)}
// Define log.log as an alias for log.debug
this.log=this.debug}
// In old IE versions, the console isn't present until you first open it.
// We build realMethod() replacements here that regenerate logging methods
function enableLoggingWhenConsoleArrives(e,r,n){return function(){typeof console!==t&&(replaceLoggingMethods.call(this,r,n),this[e].apply(this,arguments))}}
// By default, we use closely bound real methods wherever possible, and
// otherwise we wait for a console to appear, and then try again.
function defaultMethodFactory(e,t,r){/*jshint validthis:true */
return realMethod(e)||enableLoggingWhenConsoleArrives.apply(this,arguments)}function Logger(e,n,i){function persistLevelIfPossible(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t){
// Use localStorage if available
try{return void(window.localStorage[s]=n)}catch(e){}
// Use session cookie as fallback
try{window.document.cookie=encodeURIComponent(s)+"="+n+";"}catch(e){}}}function getPersistedLevel(){var e;if(typeof window!==t){try{e=window.localStorage[s]}catch(e){}
// Fallback to cookies if local storage gives us nothing
if(typeof e===t)try{var r=window.document.cookie,n=r.indexOf(encodeURIComponent(s)+"=");-1!==n&&(e=/^([^;]+)/.exec(r.slice(n))[1])}catch(e){}
// If the stored level is not valid, treat it as if nothing was stored.
return void 0===a.levels[e]&&(e=void 0),e}}var o,a=this,s="loglevel";e&&(s+=":"+e),/*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */
a.name=e,a.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},a.methodFactory=i||defaultMethodFactory,a.getLevel=function(){return o},a.setLevel=function(r,n){if("string"==typeof r&&void 0!==a.levels[r.toUpperCase()]&&(r=a.levels[r.toUpperCase()]),!("number"==typeof r&&r>=0&&r<=a.levels.SILENT))throw"log.setLevel() called with invalid level: "+r;if(o=r,!1!==n&&// defaults to true
persistLevelIfPossible(r),replaceLoggingMethods.call(a,r,e),typeof console===t&&r<a.levels.SILENT)return"No console available for logging"},a.setDefaultLevel=function(e){getPersistedLevel()||a.setLevel(e,!1)},a.enableAll=function(e){a.setLevel(a.levels.TRACE,e)},a.disableAll=function(e){a.setLevel(a.levels.SILENT,e)};
// Initialize with the right level
var u=getPersistedLevel();null==u&&(u=null==n?"WARN":n),a.setLevel(u,!1)}
// Slightly dubious tricks to cut down minimized file size
var e=function(){},t="undefined",r=["trace","debug","info","warn","error"],n=new Logger,i={};n.getLogger=function(e){if("string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=i[e];return t||(t=i[e]=new Logger(e,n.getLevel(),n.methodFactory)),t};
// Grab the current global log variable in case of overwrite
var o=typeof window!==t?window.log:void 0;return n.noConflict=function(){return typeof window!==t&&window.log===n&&(window.log=o),n},n.getLoggers=function(){return i},n})},/* 12 */
/***/
function(e,t,r){e.exports={default:r(411),__esModule:!0}},/* 13 */
/***/
function(e,t){var r=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},/* 14 */
/***/
function(e,t,r){
// 7.1.13 ToObject(argument)
var n=r(32);e.exports=function(e){return Object(n(e))}},/* 15 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}/**
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
function divideURL(e){function recurse(e){var t=/([a-zA-Z-]*)(:\/\/(?:\.)?|:)([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;return e.replace(t,"$1,$3,$4").split(",")}var t=recurse(e);
// If the url has no scheme
if(t[0]===e&&!t[0].includes("@")){return{type:"",domain:e,identity:""}}
// check if the url has the scheme and includes an @
if(t[0]===e&&t[0].includes("@")){t=recurse((t[0]===e?"smtp":t[0])+"://"+t[0])}
// if the domain includes an @, divide it to domain and identity respectively
return t[1].includes("@")&&(t[2]=t[0]+"://"+t[1],t[1]=t[1].substr(t[1].indexOf("@")+1)),{type:t[0],domain:t[1],identity:t[2]}}/**
 * Check if an Object is empty
 * @param  {Object} object Object to be checked
 * @return {Boolean}       status of Object, empty or not (true|false);
 */
function emptyObject(e){return!((0,a.default)(e).length>0)}/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */
function deepClone(e){
//TODO: simple but inefficient JSON deep clone...
if(e)return JSON.parse((0,i.default)(e))}function removePathFromURL(e){var t=e.split("/");return t[0]+"//"+t[2]+"/"+t[3]}/**
 * Obtains the user URL that corresponds to a given email
 * @param  {string} userEmail The user email
 * @return {URL.URL} userURL The user URL
 */
function getUserURLFromEmail(e){var t=e.indexOf("@");return"user://"+e.substring(t+1,e.length)+"/"+e.substring(0,t)}/**
 * Obtains the user email that corresponds to a given URL
 * @param  {URL.URL} userURL The user URL
 * @return {string} userEmail The user email
 */
function getUserEmailFromURL(e){var t=divideURL(e);return t.identity.replace("/","")+"@"+t.domain}/**
 * Check if the user identifier is already in the URL format, if not, convert to URL format
 * @param  {string}   identifier  user identifier
 * @return {string}   userURL    the user URL
 */
function convertToUserURL(e){
// check if the identifier is already in the url format
if("user://"===e.substring(0,7)){var t=divideURL(e);
//check if the url is well formated
if(t.domain&&t.identity)return e;throw"userURL with wrong format"}return getUserURLFromEmail(e)}function isDataObjectURL(e){var t=["domain-idp","runtime","domain","hyperty"],r=e.split("://"),n=r[0];return-1===t.indexOf(n)}function isLegacy(e){return e.split("@").length>1}function isURL(e){return e.split("/").length>=3}function isUserURL(e){return"user"===divideURL(e).type}function isHypertyURL(e){return"hyperty"===divideURL(e).type}/**
 * get information relative each component configured on runtime configuration;
 * @param  {object} configuration object with all configuration
 * @param  {string} component     string with the component to get the configuration, like, runtimeURLS, catalogueURLs, msgNodeURL, domainRegistryURL;
 * @param  {string} resource      type of resource to get, like, catalogue, runtimeUA, protocolstub, idpProxy
 * @return {object}               return an object with all configurations;
 */
function getConfigurationResources(e,t,r){return e[t][r]}/**
 * Build a full url with the runtime configuration;
 * @param  {object} configuration object with all configuration
 * @param  {string} component     string with the component to get the configuration, like, runtimeURLS, catalogueURLs, msgNodeURL, domainRegistryURL;
 * @param  {string} resource      type of resource to get, like, catalogue, runtimeUA, protocolstub, idpProxy
 * @param  {string} type          resource to get, like a hyperty name or protocolstub name;
 * @param  {boolean} useFallback  if true the function will check if have a fallback url;
 * @return {string}               partial url to contact the resource;
 */
function buildURL(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=e[t],s=void 0;if(!a.hasOwnProperty(r))throw Error("The configuration "+(0,i.default)(a,"",2)+" don't have the "+r+" resource you are looking for");var u=a[r];
// console.log(url);
return n?(s=u.prefix+e.domain+u.suffix+n,u.hasOwnProperty("fallback")&&o&&(s=u.fallback.indexOf("%domain%")?u.fallback.replace(/(%domain%)/g,e.domain)+n:u.fallback+n)):s=u.prefix+e.domain+u.suffix,s}/**
 * Generate a Global Unique ID
 *
 * @returns String;
 */
function generateGUID(){function s4(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4()}function getUserIdentityDomain(e){var t=divideURL(e),r=t.domain.split("."),n=r.length;return 1==n?r[n-1]:r[n-2]+"."+r[n-1]}/**
 * Check if URL is from a backend service
 * @param  {string} url     URL to be processed
 * @return {boolean}
 */
function isBackendServiceURL(e){var t=divideURL(e),r=t.domain.split("."),n=["domain","global","domain-idp"],i=["registry","msg-node"],o=void 0;return r.length>1&&(o=r.filter(function(e){return-1!==i.indexOf(e)})[0]),!(!o||-1===i.indexOf(o))||!!t.type&&-1!==n.indexOf(t.type)}function divideEmail(e){var t=e.indexOf("@");return{username:e.substring(0,t),domain:e.substring(t+1,e.length)}}function assign(e,t,r){e||(e={}),"string"==typeof t&&(t=parseAttributes(t));for(var n=t.length-1,i=0;i<n;++i){var o=t[i];o in e||(e[o]={}),e=e[o]}e[t[n]]=r}function splitObjectURL(e){var t=e.split("/"),r=t[0]+"//"+t[2]+"/"+t[3],n=t[5],i={url:r,resource:n};return i}function checkAttribute(e){var t=/((([a-zA-Z]+):\/\/([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})\/[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,10}?\.[a-zA-Z]{2,10})(.+(?=.identity))?/gm,r=[],n=[];if(null==e.match(t))n=e.split(".");else{for(var i=void 0;null!==(i=t.exec(e));)
// This is necessary to avoid infinite loops with zero-width matches
i.index===t.lastIndex&&t.lastIndex++,
// The result can be accessed through the `m`-variable.
i.forEach(function(e,t){0===t&&r.push(e)});var o=void 0;r.forEach(function(t){o=e.replace(t,"*-*"),n=o.split(".").map(function(e){return"*-*"===e?t:e})})}return n}function parseAttributes(e){var t=/([0-9a-zA-Z][-\w]*):\/\//g;if(e.includes("://")){var r=e.split(t)[0],n=r.split("."),i=e.replace(r,"");if(e.includes("identity")){var o=i.split("identity.");i=o[0].slice(".",-1),o=o[1].split("."),n.push(i,"identity"),n=n.concat(o)}else n.push(i);return n.filter(Boolean)}return e.split(".")}function isEmpty(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return(0,i.default)(e)===(0,i.default)({})}Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),i=_interopRequireDefault(n),o=r(59),a=_interopRequireDefault(o);t.divideURL=divideURL,t.emptyObject=emptyObject,t.deepClone=deepClone,t.removePathFromURL=removePathFromURL,t.getUserURLFromEmail=getUserURLFromEmail,t.getUserEmailFromURL=getUserEmailFromURL,t.convertToUserURL=convertToUserURL,t.isDataObjectURL=isDataObjectURL,t.isLegacy=isLegacy,t.isURL=isURL,t.isUserURL=isUserURL,t.isHypertyURL=isHypertyURL,t.getConfigurationResources=getConfigurationResources,t.buildURL=buildURL,t.generateGUID=generateGUID,t.getUserIdentityDomain=getUserIdentityDomain,t.isBackendServiceURL=isBackendServiceURL,t.divideEmail=divideEmail,t.assign=assign,t.splitObjectURL=splitObjectURL,t.checkAttribute=checkAttribute,t.parseAttributes=parseAttributes,t.isEmpty=isEmpty},/* 16 */
/***/
function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},/* 17 */
/***/
function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},/* 18 */
/***/
function(e,t,r){var n=r(9),i=r(46);e.exports=r(8)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},/* 19 */
/***/
function(e,t,r){var n=r(4),i=r(18),o=r(17),a=r(47)("src"),s=Function.toString,u=(""+s).split("toString");r(30).inspectSource=function(e){return s.call(e)},(e.exports=function(e,t,r,s){var c="function"==typeof r;c&&(o(r,"name")||i(r,"name",t)),e[t]!==r&&(c&&(o(r,a)||i(r,a,e[t]?""+e[t]:u.join(String(t)))),e===n?e[t]=r:s?e[t]?e[t]=r:i(e,t,r):(delete e[t],i(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[a]||s.call(this)})},/* 20 */
/***/
function(e,t,r){var n=r(0),i=r(5),o=r(32),a=/"/g,s=function(e,t,r,n){var i=String(o(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(a,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},/* 21 */
/***/
function(e,t){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},/* 22 */
/***/
function(e,t,r){var n=r(134)("wks"),i=r(94),o=r(21).Symbol,a="function"==typeof o;(e.exports=function(e){return n[e]||(n[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=n},/* 23 */
/***/
function(e,t,r){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var n=r(70),i=r(32);e.exports=function(e){return n(i(e))}},/* 24 */
/***/
function(e,t,r){var n=r(71),i=r(46),o=r(23),a=r(31),s=r(17),u=r(145),c=Object.getOwnPropertyDescriptor;t.f=r(8)?c:function(e,t){if(e=o(e),t=a(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return i(!n.f.call(e,t),e[t])}},/* 25 */
/***/
function(e,t,r){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var n=r(17),i=r(14),o=r(102)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),n(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},/* 26 */
/***/
function(e,t,r){var n=r(21),i=r(13),o=r(65),a=r(57),s=function(e,t,r){var u,c,f,l=e&s.F,d=e&s.G,p=e&s.S,y=e&s.P,h=e&s.B,v=e&s.W,g=d?i:i[t]||(i[t]={}),b=g.prototype,m=d?n:p?n[t]:(n[t]||{}).prototype;d&&(r=t);for(u in r)
// contains in native
(c=!l&&m&&void 0!==m[u])&&u in g||(
// export native or passed
f=c?m[u]:r[u],
// prevent global pollution for namespaces
g[u]=d&&"function"!=typeof m[u]?r[u]:h&&c?o(f,n):v&&m[u]==f?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):y&&"function"==typeof f?o(Function.call,f):f,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
y&&((g.virtual||(g.virtual={}))[u]=f,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
e&s.R&&b&&!b[u]&&a(b,u,f)))};
// type bitmap
s.F=1,// forced
s.G=2,// global
s.S=4,// static
s.P=8,// proto
s.B=16,// bind
s.W=32,// wrap
s.U=64,// safe
s.R=128,// real proto method for `library`
e.exports=s},/* 27 */
/***/
function(e,t,r){
// optional / simple context binding
var n=r(16);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},/* 28 */
/***/
function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},/* 29 */
/***/
function(e,t,r){"use strict";var n=r(5);e.exports=function(e,t){return!!e&&n(function(){
// eslint-disable-next-line no-useless-call
t?e.call(null,function(){},1):e.call(null)})}},/* 30 */
/***/
function(e,t){var r=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},/* 31 */
/***/
function(e,t,r){
// 7.1.1 ToPrimitive(input [, PreferredType])
var n=r(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},/* 32 */
/***/
function(e,t){
// 7.2.1 RequireObjectCoercible(argument)
e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},/* 33 */
/***/
function(e,t){
// 7.1.4 ToInteger
var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},/* 34 */
/***/
function(e,t,r){
// most Object methods by ES6 should accept primitives
var n=r(0),i=r(30),o=r(5);e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*o(function(){r(1)}),"Object",a)}},/* 35 */
/***/
function(e,t,r){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var n=r(27),i=r(70),o=r(14),a=r(10),s=r(119);e.exports=function(e,t){var r=1==e,u=2==e,c=3==e,f=4==e,l=6==e,d=5==e||l,p=t||s;return function(t,s,y){for(var h,v,g=o(t),b=i(g),m=n(s,y,3),_=a(b.length),R=0,w=r?p(t,_):u?p(t,0):void 0;_>R;R++)if((d||R in b)&&(h=b[R],v=m(h,R,g),e))if(r)w[R]=v;else if(v)switch(e){case 3:return!0;// some
case 5:return h;// find
case 6:return R;// findIndex
case 2:w.push(h)}else if(f)return!1;return l?-1:c||f?f:w}}},/* 36 */
/***/
function(e,t,r){"use strict";if(r(8)){var n=r(48),i=r(4),o=r(5),a=r(0),s=r(88),u=r(125),c=r(27),f=r(54),l=r(46),d=r(18),p=r(56),y=r(33),h=r(10),v=r(171),g=r(50),b=r(31),m=r(17),_=r(72),R=r(6),w=r(14),S=r(116),O=r(51),P=r(25),k=r(52).f,M=r(118),L=r(47),x=r(7),E=r(35),D=r(79),U=r(86),A=r(121),j=r(63),I=r(83),C=r(53),T=r(120),N=r(161),F=r(9),q=r(24),H=F.f,B=q.f,G=i.RangeError,K=i.TypeError,V=i.Uint8Array,W=Array.prototype,Y=u.ArrayBuffer,J=u.DataView,z=E(0),$=E(2),X=E(3),Z=E(4),Q=E(5),ee=E(6),te=D(!0),re=D(!1),ne=A.values,ie=A.keys,oe=A.entries,ae=W.lastIndexOf,se=W.reduce,ue=W.reduceRight,ce=W.join,fe=W.sort,le=W.slice,de=W.toString,pe=W.toLocaleString,ye=x("iterator"),he=x("toStringTag"),ve=L("typed_constructor"),ge=L("def_constructor"),be=s.CONSTR,me=s.TYPED,_e=s.VIEW,Re=E(1,function(e,t){return ke(U(e,e[ge]),t)}),we=o(function(){
// eslint-disable-next-line no-undef
return 1===new V(new Uint16Array([1]).buffer)[0]}),Se=!!V&&!!V.prototype.set&&o(function(){new V(1).set({})}),Oe=function(e,t){var r=y(e);if(r<0||r%t)throw G("Wrong offset!");return r},Pe=function(e){if(R(e)&&me in e)return e;throw K(e+" is not a typed array!")},ke=function(e,t){if(!(R(e)&&ve in e))throw K("It is not a typed array constructor!");return new e(t)},Me=function(e,t){return Le(U(e,e[ge]),t)},Le=function(e,t){for(var r=0,n=t.length,i=ke(e,n);n>r;)i[r]=t[r++];return i},xe=function(e,t,r){H(e,t,{get:function(){return this._d[r]}})},Ee=function(e){var t,r,n,i,o,a,s=w(e),u=arguments.length,f=u>1?arguments[1]:void 0,l=void 0!==f,d=M(s);if(void 0!=d&&!S(d)){for(a=d.call(s),n=[],t=0;!(o=a.next()).done;t++)n.push(o.value);s=n}for(l&&u>2&&(f=c(f,arguments[2],2)),t=0,r=h(s.length),i=ke(this,r);r>t;t++)i[t]=l?f(s[t],t):s[t];return i},De=function(){for(var e=0,t=arguments.length,r=ke(this,t);t>e;)r[e]=arguments[e++];return r},Ue=!!V&&o(function(){pe.call(new V(1))}),Ae=function(){return pe.apply(Ue?le.call(Pe(this)):Pe(this),arguments)},je={copyWithin:function(e,t){return N.call(Pe(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return Z(Pe(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){// eslint-disable-line no-unused-vars
return T.apply(Pe(this),arguments)},filter:function(e){return Me(this,$(Pe(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return Q(Pe(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return ee(Pe(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){z(Pe(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return re(Pe(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return te(Pe(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){// eslint-disable-line no-unused-vars
return ce.apply(Pe(this),arguments)},lastIndexOf:function(e){// eslint-disable-line no-unused-vars
return ae.apply(Pe(this),arguments)},map:function(e){return Re(Pe(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){// eslint-disable-line no-unused-vars
return se.apply(Pe(this),arguments)},reduceRight:function(e){// eslint-disable-line no-unused-vars
return ue.apply(Pe(this),arguments)},reverse:function(){for(var e,t=this,r=Pe(t).length,n=Math.floor(r/2),i=0;i<n;)e=t[i],t[i++]=t[--r],t[r]=e;return t},some:function(e){return X(Pe(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return fe.call(Pe(this),e)},subarray:function(e,t){var r=Pe(this),n=r.length,i=g(e,n);return new(U(r,r[ge]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,h((void 0===t?n:g(t,n))-i))}},Ie=function(e,t){return Me(this,le.call(Pe(this),e,t))},Ce=function(e){Pe(this);var t=Oe(arguments[1],1),r=this.length,n=w(e),i=h(n.length),o=0;if(i+t>r)throw G("Wrong length!");for(;o<i;)this[t+o]=n[o++]},Te={entries:function(){return oe.call(Pe(this))},keys:function(){return ie.call(Pe(this))},values:function(){return ne.call(Pe(this))}},Ne=function(e,t){return R(e)&&e[me]&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},Fe=function(e,t){return Ne(e,t=b(t,!0))?l(2,e[t]):B(e,t)},qe=function(e,t,r){return!(Ne(e,t=b(t,!0))&&R(r)&&m(r,"value"))||m(r,"get")||m(r,"set")||r.configurable||m(r,"writable")&&!r.writable||m(r,"enumerable")&&!r.enumerable?H(e,t,r):(e[t]=r.value,e)};be||(q.f=Fe,F.f=qe),a(a.S+a.F*!be,"Object",{getOwnPropertyDescriptor:Fe,defineProperty:qe}),o(function(){de.call({})})&&(de=pe=function(){return ce.call(this)});var He=p({},je);p(He,Te),d(He,ye,Te.values),p(He,{slice:Ie,set:Ce,constructor:function(){},toString:de,toLocaleString:Ae}),xe(He,"buffer","b"),xe(He,"byteOffset","o"),xe(He,"byteLength","l"),xe(He,"length","e"),H(He,he,{get:function(){return this[me]}}),
// eslint-disable-next-line max-statements
e.exports=function(e,t,r,u){u=!!u;var c=e+(u?"Clamped":"")+"Array",l="get"+e,p="set"+e,y=i[c],g=y||{},b=y&&P(y),m=!y||!s.ABV,w={},S=y&&y.prototype,M=function(e,r){var n=e._d;return n.v[l](r*t+n.o,we)},L=function(e,r,n){var i=e._d;u&&(n=(n=Math.round(n))<0?0:n>255?255:255&n),i.v[p](r*t+i.o,n,we)},x=function(e,t){H(e,t,{get:function(){return M(this,t)},set:function(e){return L(this,t,e)},enumerable:!0})};m?(y=r(function(e,r,n,i){f(e,y,c,"_d");var o,a,s,u,l=0,p=0;if(R(r)){if(!(r instanceof Y||"ArrayBuffer"==(u=_(r))||"SharedArrayBuffer"==u))return me in r?Le(y,r):Ee.call(y,r);o=r,p=Oe(n,t);var g=r.byteLength;if(void 0===i){if(g%t)throw G("Wrong length!");if((a=g-p)<0)throw G("Wrong length!")}else if((a=h(i)*t)+p>g)throw G("Wrong length!");s=a/t}else s=v(r),a=s*t,o=new Y(a);for(d(e,"_d",{b:o,o:p,l:a,e:s,v:new J(o)});l<s;)x(e,l++)}),S=y.prototype=O(He),d(S,"constructor",y)):o(function(){y(1)})&&o(function(){new y(-1)})&&I(function(e){new y,// eslint-disable-line no-new
new y(null),// eslint-disable-line no-new
new y(1.5),// eslint-disable-line no-new
new y(e)},!0)||(y=r(function(e,r,n,i){f(e,y,c);var o;
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
return R(r)?r instanceof Y||"ArrayBuffer"==(o=_(r))||"SharedArrayBuffer"==o?void 0!==i?new g(r,Oe(n,t),i):void 0!==n?new g(r,Oe(n,t)):new g(r):me in r?Le(y,r):Ee.call(y,r):new g(v(r))}),z(b!==Function.prototype?k(g).concat(k(b)):k(g),function(e){e in y||d(y,e,g[e])}),y.prototype=S,n||(S.constructor=y));var E=S[ye],D=!!E&&("values"==E.name||void 0==E.name),U=Te.values;d(y,ve,!0),d(S,me,c),d(S,_e,!0),d(S,ge,y),(u?new y(1)[he]==c:he in S)||H(S,he,{get:function(){return c}}),w[c]=y,a(a.G+a.W+a.F*(y!=g),w),a(a.S,c,{BYTES_PER_ELEMENT:t}),a(a.S+a.F*o(function(){g.of.call(y,1)}),c,{from:Ee,of:De}),"BYTES_PER_ELEMENT"in S||d(S,"BYTES_PER_ELEMENT",t),a(a.P,c,je),C(c),a(a.P+a.F*Se,c,{set:Ce}),a(a.P+a.F*!D,c,Te),n||S.toString==de||(S.toString=de),a(a.P+a.F*o(function(){new y(1).slice()}),c,{slice:Ie}),a(a.P+a.F*(o(function(){return[1,2].toLocaleString()!=new y([1,2]).toLocaleString()})||!o(function(){S.toLocaleString.call([1,2])})),c,{toLocaleString:Ae}),j[c]=D?E:U,n||D||d(S,ye,U)}}else e.exports=function(){}},/* 37 */
/***/
function(e,t,r){var n=r(166),i=r(0),o=r(78)("metadata"),a=o.store||(o.store=new(r(169))),s=function(e,t,r){var i=a.get(e);if(!i){if(!r)return;a.set(e,i=new n)}var o=i.get(t);if(!o){if(!r)return;i.set(t,o=new n)}return o},u=function(e,t,r){var n=s(t,r,!1);return void 0!==n&&n.has(e)},c=function(e,t,r){var n=s(t,r,!1);return void 0===n?void 0:n.get(e)},f=function(e,t,r,n){s(r,n,!0).set(e,t)},l=function(e,t){var r=s(e,t,!1),n=[];return r&&r.forEach(function(e,t){n.push(t)}),n},d=function(e){return void 0===e||"symbol"==typeof e?e:String(e)},p=function(e){i(i.S,"Reflect",e)};e.exports={store:a,map:s,has:u,get:c,set:f,keys:l,key:d,exp:p}},/* 38 */
/***/
function(e,t,r){var n=r(39),i=r(181),o=r(130),a=Object.defineProperty;t.f=r(43)?Object.defineProperty:function(e,t,r){if(n(e),t=o(t,!0),n(r),i)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},/* 39 */
/***/
function(e,t,r){var n=r(42);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},/* 40 */
/***/
function(e,t,r){var n=r(47)("meta"),i=r(6),o=r(17),a=r(9).f,s=0,u=Object.isExtensible||function(){return!0},c=!r(5)(function(){return u(Object.preventExtensions({}))}),f=function(e){a(e,n,{value:{i:"O"+ ++s,// object ID
w:{}}})},l=function(e,t){
// return primitive with prefix
if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){
// can't set metadata to uncaught frozen object
if(!u(e))return"F";
// not necessary to add metadata
if(!t)return"E";
// add missing metadata
f(e)}return e[n].i},d=function(e,t){if(!o(e,n)){
// can't set metadata to uncaught frozen object
if(!u(e))return!0;
// not necessary to add metadata
if(!t)return!1;
// add missing metadata
f(e)}return e[n].w},p=function(e){return c&&y.NEED&&u(e)&&!o(e,n)&&f(e),e},y=e.exports={KEY:n,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},/* 41 */
/***/
function(e,t,r){
// 22.1.3.31 Array.prototype[@@unscopables]
var n=r(7)("unscopables"),i=Array.prototype;void 0==i[n]&&r(18)(i,n,{}),e.exports=function(e){i[n][e]=!0}},/* 42 */
/***/
function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},/* 43 */
/***/
function(e,t,r){
// Thank's IE8 for his funny defineProperty
e.exports=!r(66)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 44 */
/***/
function(e,t,r){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var n=r(184),i=r(128);e.exports=function(e){return n(i(e))}},/* 45 */
/***/
function(e,t,r){e.exports={default:r(460),__esModule:!0}},/* 46 */
/***/
function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},/* 47 */
/***/
function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},/* 48 */
/***/
function(e,t){e.exports=!1},/* 49 */
/***/
function(e,t,r){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var n=r(147),i=r(103);e.exports=Object.keys||function(e){return n(e,i)}},/* 50 */
/***/
function(e,t,r){var n=r(33),i=Math.max,o=Math.min;e.exports=function(e,t){return e=n(e),e<0?i(e+t,0):o(e,t)}},/* 51 */
/***/
function(e,t,r){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var n=r(3),i=r(148),o=r(103),a=r(102)("IE_PROTO"),s=function(){},u=function(){
// Thrash, waste and sodomy: IE GC bug
var e,t=r(100)("iframe"),n=o.length;for(t.style.display="none",r(104).appendChild(t),t.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u.prototype[o[n]];return u()};e.exports=Object.create||function(e,t){var r;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==e?(s.prototype=n(e),r=new s,s.prototype=null,r[a]=e):r=u(),void 0===t?r:i(r,t)}},/* 52 */
/***/
function(e,t,r){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var n=r(147),i=r(103).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},/* 53 */
/***/
function(e,t,r){"use strict";var n=r(4),i=r(9),o=r(8),a=r(7)("species");e.exports=function(e){var t=n[e];o&&t&&!t[a]&&i.f(t,a,{configurable:!0,get:function(){return this}})}},/* 54 */
/***/
function(e,t){e.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},/* 55 */
/***/
function(e,t,r){var n=r(27),i=r(159),o=r(116),a=r(3),s=r(10),u=r(118),c={},f={},t=e.exports=function(e,t,r,l,d){var p,y,h,v,g=d?function(){return e}:u(e),b=n(r,l,t?2:1),m=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");
// fast case for arrays with default iterator
if(o(g)){for(p=s(e.length);p>m;m++)if((v=t?b(a(y=e[m])[0],y[1]):b(e[m]))===c||v===f)return v}else for(h=g.call(e);!(y=h.next()).done;)if((v=i(h,b,y.value,t))===c||v===f)return v};t.BREAK=c,t.RETURN=f},/* 56 */
/***/
function(e,t,r){var n=r(19);e.exports=function(e,t,r){for(var i in t)n(e,i,t[i],r);return e}},/* 57 */
/***/
function(e,t,r){var n=r(38),i=r(73);e.exports=r(43)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},/* 58 */
/***/
function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},/* 59 */
/***/
function(e,t,r){e.exports={default:r(436),__esModule:!0}},/* 60 */
/***/
function(e,t,r){e.exports={default:r(439),__esModule:!0}},/* 61 */
/***/
function(e,t,r){var n=r(9).f,i=r(17),o=r(7)("toStringTag");e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},/* 62 */
/***/
function(e,t,r){var n=r(0),i=r(32),o=r(5),a=r(106),s="["+a+"]",u="​",c=RegExp("^"+s+s+"*"),f=RegExp(s+s+"*$"),l=function(e,t,r){var i={},s=o(function(){return!!a[e]()||u[e]()!=u}),c=i[e]=s?t(d):a[e];r&&(i[r]=c),n(n.P+n.F*s,"String",i)},d=l.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(f,"")),e};e.exports=l},/* 63 */
/***/
function(e,t){e.exports={}},/* 64 */
/***/
function(e,t,r){var n=r(6);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},/* 65 */
/***/
function(e,t,r){
// optional / simple context binding
var n=r(93);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},/* 66 */
/***/
function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},/* 67 */
/***/
function(e,t,r){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var n=r(183),i=r(135);e.exports=Object.keys||function(e){return n(e,i)}},/* 68 */
/***/
function(e,t,r){"use strict";t.__esModule=!0;var n=r(98),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,i.default)(t))&&"function"!=typeof t?e:t}},/* 69 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(452),i=_interopRequireDefault(n),o=r(199),a=_interopRequireDefault(o),s=r(98),u=_interopRequireDefault(s);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,u.default)(t)));e.prototype=(0,a.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}},/* 70 */
/***/
function(e,t,r){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var n=r(28);
// eslint-disable-next-line no-prototype-builtins
e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},/* 71 */
/***/
function(e,t){t.f={}.propertyIsEnumerable},/* 72 */
/***/
function(e,t,r){
// getting tag from 19.1.3.6 Object.prototype.toString()
var n=r(28),i=r(7)("toStringTag"),o="Arguments"==n(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=a(t=Object(e),i))?r:o?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},/* 73 */
/***/
function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},/* 74 */
/***/
function(e,t){e.exports={}},/* 75 */
/***/
function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},/* 76 */
/***/
function(e,t,r){
// 7.1.13 ToObject(argument)
var n=r(128);e.exports=function(e){return Object(n(e))}},/* 77 */
/***/
function(e,t){t.f={}.propertyIsEnumerable},/* 78 */
/***/
function(e,t,r){var n=r(4),i=n["__core-js_shared__"]||(n["__core-js_shared__"]={});e.exports=function(e){return i[e]||(i[e]={})}},/* 79 */
/***/
function(e,t,r){
// false -> Array#indexOf
// true  -> Array#includes
var n=r(23),i=r(10),o=r(50);e.exports=function(e){return function(t,r,a){var s,u=n(t),c=i(u.length),f=o(a,c);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&r!=r){for(;c>f;)
// eslint-disable-next-line no-self-compare
if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},/* 80 */
/***/
function(e,t){t.f=Object.getOwnPropertySymbols},/* 81 */
/***/
function(e,t,r){
// 7.2.2 IsArray(argument)
var n=r(28);e.exports=Array.isArray||function(e){return"Array"==n(e)}},/* 82 */
/***/
function(e,t,r){
// 7.2.8 IsRegExp(argument)
var n=r(6),i=r(28),o=r(7)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},/* 83 */
/***/
function(e,t,r){var n=r(7)("iterator"),i=!1;try{var o=[7][n]();o.return=function(){i=!0},
// eslint-disable-next-line no-throw-literal
Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var o=[7],a=o[n]();a.next=function(){return{done:r=!0}},o[n]=function(){return a},e(o)}catch(e){}return r}},/* 84 */
/***/
function(e,t,r){"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var n=r(3);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},/* 85 */
/***/
function(e,t,r){"use strict";var n=r(18),i=r(19),o=r(5),a=r(32),s=r(7);e.exports=function(e,t,r){var u=s(e),c=r(a,u,""[e]),f=c[0],l=c[1];o(function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})&&(i(String.prototype,e,f),n(RegExp.prototype,u,2==t?function(e,t){return l.call(e,this,t)}:function(e){return l.call(e,this)}))}},/* 86 */
/***/
function(e,t,r){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var n=r(3),i=r(16),o=r(7)("species");e.exports=function(e,t){var r,a=n(e).constructor;return void 0===a||void 0==(r=n(a)[o])?t:i(r)}},/* 87 */
/***/
function(e,t,r){"use strict";var n=r(4),i=r(0),o=r(19),a=r(56),s=r(40),u=r(55),c=r(54),f=r(6),l=r(5),d=r(83),p=r(61),y=r(107);e.exports=function(e,t,r,h,v,g){var b=n[e],m=b,_=v?"set":"add",R=m&&m.prototype,w={},S=function(e){var t=R[e];o(R,e,"delete"==e?function(e){return!(g&&!f(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!f(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!f(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,r){return t.call(this,0===e?0:e,r),this})};if("function"==typeof m&&(g||R.forEach&&!l(function(){(new m).entries().next()}))){var O=new m,P=O[_](g?{}:-0,1)!=O,k=l(function(){O.has(1)}),M=d(function(e){new m(e)}),L=!g&&l(function(){for(
// V8 ~ Chromium 42- fails only with 5+ elements
var e=new m,t=5;t--;)e[_](t,t);return!e.has(-0)});M||(m=t(function(t,r){c(t,m,e);var n=y(new b,t,m);return void 0!=r&&u(r,v,n[_],n),n}),m.prototype=R,R.constructor=m),(k||L)&&(S("delete"),S("has"),v&&S("get")),(L||P)&&S(_),
// weak collections should not contains .clear method
g&&R.clear&&delete R.clear}else
// create collection constructor
m=h.getConstructor(t,e,v,_),a(m.prototype,r),s.NEED=!0;return p(m,e),w[e]=m,i(i.G+i.W+i.F*(m!=b),w),g||h.setStrong(m,e,v),m}},/* 88 */
/***/
function(e,t,r){for(var n,i=r(4),o=r(18),a=r(47),s=a("typed_array"),u=a("view"),c=!(!i.ArrayBuffer||!i.DataView),f=c,l=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(n=i[d[l++]])?(o(n.prototype,s,!0),o(n.prototype,u,!0)):f=!1;e.exports={ABV:c,CONSTR:f,TYPED:s,VIEW:u}},/* 89 */
/***/
function(e,t,r){"use strict";
// Forced replacement prototype accessors methods
e.exports=r(48)||!r(5)(function(){var e=Math.random();
// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,e,function(){}),delete r(4)[e]})},/* 90 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var n=r(0);e.exports=function(e){n(n.S,e,{of:function(){for(var e=arguments.length,t=Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},/* 91 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var n=r(0),i=r(16),o=r(27),a=r(55);e.exports=function(e){n(n.S,e,{from:function(e){var t,r,n,s,u=arguments[1];return i(this),t=void 0!==u,t&&i(u),void 0==e?new this:(r=[],t?(n=0,s=o(u,arguments[2],2),a(e,!1,function(e){r.push(s(e,n++))})):a(e,!1,r.push,r),new this(r))}})}},/* 92 */
/***/
function(e,t){e.exports=!0},/* 93 */
/***/
function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},/* 94 */
/***/
function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},/* 95 */
/***/
function(e,t,r){var n=r(38).f,i=r(58),o=r(22)("toStringTag");e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},/* 96 */
/***/
function(e,t,r){e.exports={default:r(429),__esModule:!0}},/* 97 */
/***/
function(e,t,r){
// most Object methods by ES6 should accept primitives
var n=r(26),i=r(13),o=r(66);e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*o(function(){r(1)}),"Object",a)}},/* 98 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(441),i=_interopRequireDefault(n),o=r(443),a=_interopRequireDefault(o),s="function"==typeof a.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":typeof e};t.default="function"==typeof a.default&&"symbol"===s(i.default)?function(e){return void 0===e?"undefined":s(e)}:function(e){return e&&"function"==typeof a.default&&e.constructor===a.default&&e!==a.default.prototype?"symbol":void 0===e?"undefined":s(e)}},/* 99 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(11),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=r(15),d=f.getLogger("address-allocation"),p=void 0,y=function(){/* private
  _url: URL
  _bus: MiniBus
  */
/**
   * Create an Address Allocation
   * @param  {URL.URL}      url - url from who is sending the message
   * @param  {MiniBus}      bus - MiniBus used for address allocation
   */
function AddressAllocation(e,t,r){if((0,a.default)(this,AddressAllocation),p)return p;this._url=e+"/address-allocation",this._bus=t,this._registry=r,p=this}return(0,u.default)(AddressAllocation,[{key:"create",/**
     *
     * Ask for creation of a number of Hyperty addresses, to the domain message node.
     *
     * @param {Domain} domain - domain of the message node
     * @param {Number} number - number of address to be allocated
     * @param {Descriptor} info - descriptor to search for the hyperty (TODO:// this should be confirmed)
     * @see https://github.com/reTHINK-project/specs/blob/master/datamodel/core/hyperty-catalogue/readme.md#catalogue-data-model
     * @param {scheme} scheme - scheme of address to be created or reused, like: hyperty, comm, context, etc;
     * @param {boolean|URL.HypertyURL} reuseURL - reuseURL is used to reuse the hypertyURL previously registred;
     * @returns {Promise<Object, Error>} this is Promise and returns an object with the address information
     *
     * @memberOf AddressAllocation
     */
value:function(e,t,r,n,i){
// // console.log('typeof(reuseURL)', typeof(reuseURL), reuseURL);
// // console.log('typeof(reuseURL)', typeof(reuseURL), reuseURL);
return i?"boolean"==typeof i?i?this._reuseAllocatedAddress(e,t,r,n,i):this._allocateNewAddress(e,n,t):"string"==typeof i&&(0,l.isURL)(i)?this._reuseAllocatedAddress(e,t,r,n,i):void 0:(d.info("[AddressAllocation] - new address will be allocated"),this._allocateNewAddress(e,n,t))}},{key:"_reuseAllocatedAddress",value:function(e,t,r,n,o){var a=this;return new i.default(function(i,s){a._registry.checkRegisteredURLs(r,o).then(function(r){if(r){d.info("[AddressAllocation - "+n+"] - Reuse URL");i({newAddress:!1,address:r})}else"string"==typeof o?(d.info("[AddressAllocation - reuseURL] - Object "+o+" not found"),s("URL Not Found")):"boolean"==typeof o?a._allocateNewAddress(e,n,t).then(i).catch(s):s("URL Not Found")})})}},{key:"_allocateNewAddress",value:function(e,t,r){var n=this;return new i.default(function(i,o){var a={type:"create",from:n._url,to:"domain://msg-node."+e+"/address-allocation",body:{value:{number:r}}};"hyperty"!==t&&(a.body.scheme=t),d.info("[AddressAllocation - "+t+"] - Request new URL"),n._bus.postMessage(a,function(e){if(200===e.body.code){var t={newAddress:!0,address:e.body.value.allocated};i(t)}else o(e.body.desc)})})}},{key:"delete",value:function(e,t){var r=this;return new i.default(function(n,i){var o={type:"delete",from:r._url,to:"domain://msg-node."+e+"/address-allocation",body:{childrenResources:t}};r._bus.postMessage(o,function(e){200===e.body.code?n(e.body.code):i(e.body.desc)})})}},{key:"url",/**
     * get the URL value
     * @return {string} The url value;
     */
get:function(){return this._url}}],[{key:"instance",get:function(){if(!p)throw new Error("The address allocation was not instantiated");return p}}]),AddressAllocation}();t.default=y,e.exports=t.default},/* 100 */
/***/
function(e,t,r){var n=r(6),i=r(4).document,o=n(i)&&n(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},/* 101 */
/***/
function(e,t,r){var n=r(4),i=r(30),o=r(48),a=r(146),s=r(9).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},/* 102 */
/***/
function(e,t,r){var n=r(78)("keys"),i=r(47);e.exports=function(e){return n[e]||(n[e]=i(e))}},/* 103 */
/***/
function(e,t){
// IE 8- don't enum bug keys
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 104 */
/***/
function(e,t,r){var n=r(4).document;e.exports=n&&n.documentElement},/* 105 */
/***/
function(e,t,r){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var n=r(6),i=r(3),o=function(e,t){if(i(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?// eslint-disable-line
function(e,t,n){try{n=r(27)(Function.call,r(24).f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},/* 106 */
/***/
function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},/* 107 */
/***/
function(e,t,r){var n=r(6),i=r(105).set;e.exports=function(e,t,r){var o,a=t.constructor;return a!==r&&"function"==typeof a&&(o=a.prototype)!==r.prototype&&n(o)&&i&&i(e,o),e}},/* 108 */
/***/
function(e,t,r){"use strict";var n=r(33),i=r(32);e.exports=function(e){var t=String(i(this)),r="",o=n(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},/* 109 */
/***/
function(e,t){
// 20.2.2.28 Math.sign(x)
e.exports=Math.sign||function(e){
// eslint-disable-next-line no-self-compare
return 0==(e=+e)||e!=e?e:e<0?-1:1}},/* 110 */
/***/
function(e,t){
// 20.2.2.14 Math.expm1(x)
var r=Math.expm1;e.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function(e){return 0==(e=+e)?e:e>-1e-6&&e<1e-6?e+e*e/2:Math.exp(e)-1}:r},/* 111 */
/***/
function(e,t,r){var n=r(33),i=r(32);
// true  -> String#at
// false -> String#codePointAt
e.exports=function(e){return function(t,r){var o,a,s=String(i(t)),u=n(r),c=s.length;return u<0||u>=c?e?"":void 0:(o=s.charCodeAt(u),o<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):o:e?s.slice(u,u+2):a-56320+(o-55296<<10)+65536)}}},/* 112 */
/***/
function(e,t,r){"use strict";var n=r(48),i=r(0),o=r(19),a=r(18),s=r(17),u=r(63),c=r(113),f=r(61),l=r(25),d=r(7)("iterator"),p=!([].keys&&"next"in[].keys()),y=function(){return this};e.exports=function(e,t,r,h,v,g,b){c(r,t,h);var m,_,R,w=function(e){if(!p&&e in k)return k[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},S=t+" Iterator",O="values"==v,P=!1,k=e.prototype,M=k[d]||k["@@iterator"]||v&&k[v],L=M||w(v),x=v?O?w("entries"):L:void 0,E="Array"==t?k.entries||M:M;if(
// Fix native
E&&(R=l(E.call(new e)))!==Object.prototype&&R.next&&(
// Set @@toStringTag to native iterators
f(R,S,!0),
// fix for some old engines
n||s(R,d)||a(R,d,y)),
// fix Array#{values, @@iterator}.name in V8 / FF
O&&M&&"values"!==M.name&&(P=!0,L=function(){return M.call(this)}),
// Define iterator
n&&!b||!p&&!P&&k[d]||a(k,d,L),
// Plug for library
u[t]=L,u[S]=y,v)if(m={values:O?L:w("values"),keys:g?L:w("keys"),entries:x},b)for(_ in m)_ in k||o(k,_,m[_]);else i(i.P+i.F*(p||P),t,m);return m}},/* 113 */
/***/
function(e,t,r){"use strict";var n=r(51),i=r(46),o=r(61),a={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
r(18)(a,r(7)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(a,{next:i(1,r)}),o(e,t+" Iterator")}},/* 114 */
/***/
function(e,t,r){
// helper for String#{startsWith, endsWith, includes}
var n=r(82),i=r(32);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},/* 115 */
/***/
function(e,t,r){var n=r(7)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(e){}}return!0}},/* 116 */
/***/
function(e,t,r){
// check on default Array iterator
var n=r(63),i=r(7)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||o[i]===e)}},/* 117 */
/***/
function(e,t,r){"use strict";var n=r(9),i=r(46);e.exports=function(e,t,r){t in e?n.f(e,t,i(0,r)):e[t]=r}},/* 118 */
/***/
function(e,t,r){var n=r(72),i=r(7)("iterator"),o=r(63);e.exports=r(30).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[n(e)]}},/* 119 */
/***/
function(e,t,r){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var n=r(300);e.exports=function(e,t){return new(n(e))(t)}},/* 120 */
/***/
function(e,t,r){"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var n=r(14),i=r(50),o=r(10);e.exports=function(e){for(var t=n(this),r=o(t.length),a=arguments.length,s=i(a>1?arguments[1]:void 0,r),u=a>2?arguments[2]:void 0,c=void 0===u?r:i(u,r);c>s;)t[s++]=e;return t}},/* 121 */
/***/
function(e,t,r){"use strict";var n=r(41),i=r(162),o=r(63),a=r(23);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
e.exports=r(112)(Array,"Array",function(e,t){this._t=a(e),// target
this._i=0,// next index
this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,r):"values"==t?i(0,e[r]):i(0,[r,e[r]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
o.Arguments=o.Array,n("keys"),n("values"),n("entries")},/* 122 */
/***/
function(e,t,r){var n,i,o,a=r(27),s=r(152),u=r(104),c=r(100),f=r(4),l=f.process,d=f.setImmediate,p=f.clearImmediate,y=f.MessageChannel,h=f.Dispatch,v=0,g={},b=function(){var e=+this;
// eslint-disable-next-line no-prototype-builtins
if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},m=function(e){b.call(e.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
d&&p||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return g[++v]=function(){
// eslint-disable-next-line no-new-func
s("function"==typeof e?e:Function(e),t)},n(v),v},p=function(e){delete g[e]},
// Node.js 0.8-
"process"==r(28)(l)?n=function(e){l.nextTick(a(b,e,1))}:h&&h.now?n=function(e){h.now(a(b,e,1))}:y?(i=new y,o=i.port2,i.port1.onmessage=m,n=a(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",m,!1)):n="onreadystatechange"in c("script")?function(e){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(a(b,e,1),0)}),e.exports={set:d,clear:p}},/* 123 */
/***/
function(e,t,r){var n=r(4),i=r(122).set,o=n.MutationObserver||n.WebKitMutationObserver,a=n.process,s=n.Promise,u="process"==r(28)(a);e.exports=function(){var e,t,r,c=function(){var n,i;for(u&&(n=a.domain)&&n.exit();e;){i=e.fn,e=e.next;try{i()}catch(n){throw e?r():t=void 0,n}}t=void 0,n&&n.enter()};
// Node.js
if(u)r=function(){a.nextTick(c)};else if(o){var f=!0,l=document.createTextNode("");new o(c).observe(l,{characterData:!0}),// eslint-disable-line no-new
r=function(){l.data=f=!f}}else if(s&&s.resolve){var d=s.resolve();r=function(){d.then(c)}}else r=function(){
// strange IE + webpack dev server bug - use .call(global)
i.call(n,c)};return function(n){var i={fn:n,next:void 0};t&&(t.next=i),e||(e=i,r()),t=i}}},/* 124 */
/***/
function(e,t,r){"use strict";function PromiseCapability(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=n(t),this.reject=n(r)}
// 25.4.1.5 NewPromiseCapability(C)
var n=r(16);e.exports.f=function(e){return new PromiseCapability(e)}},/* 125 */
/***/
function(e,t,r){"use strict";
// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(e,t,r){var n,i,o,a=Array(r),s=8*r-t-1,u=(1<<s)-1,c=u>>1,f=23===t?M(2,-24)-M(2,-77):0,l=0,d=e<0||0===e&&1/e<0?1:0;for(e=k(e),
// eslint-disable-next-line no-self-compare
e!=e||e===O?(
// eslint-disable-next-line no-self-compare
i=e!=e?1:0,n=u):(n=L(x(e)/E),e*(o=M(2,-n))<1&&(n--,o*=2),e+=n+c>=1?f/o:f*M(2,1-c),e*o>=2&&(n++,o/=2),n+c>=u?(i=0,n=u):n+c>=1?(i=(e*o-1)*M(2,t),n+=c):(i=e*M(2,c-1)*M(2,t),n=0));t>=8;a[l++]=255&i,i/=256,t-=8);for(n=n<<t|i,s+=t;s>0;a[l++]=255&n,n/=256,s-=8);return a[--l]|=128*d,a}function unpackIEEE754(e,t,r){var n,i=8*r-t-1,o=(1<<i)-1,a=o>>1,s=i-7,u=r-1,c=e[u--],f=127&c;for(c>>=7;s>0;f=256*f+e[u],u--,s-=8);for(n=f&(1<<-s)-1,f>>=-s,s+=t;s>0;n=256*n+e[u],u--,s-=8);if(0===f)f=1-a;else{if(f===o)return n?NaN:c?-O:O;n+=M(2,t),f-=a}return(c?-1:1)*n*M(2,f-t)}function unpackI32(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function packI8(e){return[255&e]}function packI16(e){return[255&e,e>>8&255]}function packI32(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function packF64(e){return packIEEE754(e,52,8)}function packF32(e){return packIEEE754(e,23,4)}function addGetter(e,t,r){h(e[b],t,{get:function(){return this[r]}})}function get(e,t,r,n){var i=+r,o=p(i);if(o+t>e[U])throw S(m);var a=e[D]._b,s=o+e[A],u=a.slice(s,s+t);return n?u:u.reverse()}function set(e,t,r,n,i,o){var a=+r,s=p(a);if(s+t>e[U])throw S(m);for(var u=e[D]._b,c=s+e[A],f=n(+i),l=0;l<t;l++)u[c+l]=f[o?l:t-l-1]}var n=r(4),i=r(8),o=r(48),a=r(88),s=r(18),u=r(56),c=r(5),f=r(54),l=r(33),d=r(10),p=r(171),y=r(52).f,h=r(9).f,v=r(120),g=r(61),b="prototype",m="Wrong index!",_=n.ArrayBuffer,R=n.DataView,w=n.Math,S=n.RangeError,O=n.Infinity,P=_,k=w.abs,M=w.pow,L=w.floor,x=w.log,E=w.LN2,D=i?"_b":"buffer",U=i?"_l":"byteLength",A=i?"_o":"byteOffset";if(a.ABV){if(!c(function(){_(1)})||!c(function(){new _(-1)})||c(function(){// eslint-disable-line no-new
// eslint-disable-line no-new
// eslint-disable-line no-new
return new _,new _(1.5),new _(NaN),"ArrayBuffer"!=_.name})){_=function(e){return f(this,_),new P(p(e))};for(var j,I=_[b]=P[b],C=y(P),T=0;C.length>T;)(j=C[T++])in _||s(_,j,P[j]);o||(I.constructor=_)}
// iOS Safari 7.x bug
var N=new R(new _(2)),F=R[b].setInt8;N.setInt8(0,2147483648),N.setInt8(1,2147483649),!N.getInt8(0)&&N.getInt8(1)||u(R[b],{setInt8:function(e,t){F.call(this,e,t<<24>>24)},setUint8:function(e,t){F.call(this,e,t<<24>>24)}},!0)}else _=function(e){f(this,_,"ArrayBuffer");var t=p(e);this._b=v.call(Array(t),0),this[U]=t},R=function(e,t,r){f(this,R,"DataView"),f(e,_,"DataView");var n=e[U],i=l(t);if(i<0||i>n)throw S("Wrong offset!");if(r=void 0===r?n-i:d(r),i+r>n)throw S("Wrong length!");this[D]=e,this[A]=i,this[U]=r},i&&(addGetter(_,"byteLength","_l"),addGetter(R,"buffer","_b"),addGetter(R,"byteLength","_l"),addGetter(R,"byteOffset","_o")),u(R[b],{getInt8:function(e){return get(this,1,e)[0]<<24>>24},getUint8:function(e){return get(this,1,e)[0]},getInt16:function(e){var t=get(this,2,e,arguments[1]);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=get(this,2,e,arguments[1]);return t[1]<<8|t[0]},getInt32:function(e){return unpackI32(get(this,4,e,arguments[1]))},getUint32:function(e){return unpackI32(get(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return unpackIEEE754(get(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return unpackIEEE754(get(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){set(this,1,e,packI8,t)},setUint8:function(e,t){set(this,1,e,packI8,t)},setInt16:function(e,t){set(this,2,e,packI16,t,arguments[2])},setUint16:function(e,t){set(this,2,e,packI16,t,arguments[2])},setInt32:function(e,t){set(this,4,e,packI32,t,arguments[2])},setUint32:function(e,t){set(this,4,e,packI32,t,arguments[2])},setFloat32:function(e,t){set(this,4,e,packF32,t,arguments[2])},setFloat64:function(e,t){set(this,8,e,packF64,t,arguments[2])}});g(_,"ArrayBuffer"),g(R,"DataView"),s(R[b],a.VIEW,!0),t.ArrayBuffer=_,t.DataView=R},/* 126 */
/***/
function(e,t,r){"use strict";var n=r(412)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
r(180)(String,"String",function(e){this._t=String(e),// target
this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},/* 127 */
/***/
function(e,t){
// 7.1.4 ToInteger
var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},/* 128 */
/***/
function(e,t){
// 7.2.1 RequireObjectCoercible(argument)
e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},/* 129 */
/***/
function(e,t,r){var n=r(42),i=r(21).document,o=n(i)&&n(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},/* 130 */
/***/
function(e,t,r){
// 7.1.1 ToPrimitive(input [, PreferredType])
var n=r(42);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},/* 131 */
/***/
function(e,t,r){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var n=r(39),i=r(414),o=r(135),a=r(133)("IE_PROTO"),s=function(){},u=function(){
// Thrash, waste and sodomy: IE GC bug
var e,t=r(129)("iframe"),n=o.length;for(t.style.display="none",r(185).appendChild(t),t.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u.prototype[o[n]];return u()};e.exports=Object.create||function(e,t){var r;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==e?(s.prototype=n(e),r=new s,s.prototype=null,r[a]=e):r=u(),void 0===t?r:i(r,t)}},/* 132 */
/***/
function(e,t,r){
// 7.1.15 ToLength
var n=r(127),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},/* 133 */
/***/
function(e,t,r){var n=r(134)("keys"),i=r(94);e.exports=function(e){return n[e]||(n[e]=i(e))}},/* 134 */
/***/
function(e,t,r){var n=r(21),i=n["__core-js_shared__"]||(n["__core-js_shared__"]={});e.exports=function(e){return i[e]||(i[e]={})}},/* 135 */
/***/
function(e,t){
// IE 8- don't enum bug keys
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 136 */
/***/
function(e,t,r){"use strict";function PromiseCapability(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=n(t),this.reject=n(r)}
// 25.4.1.5 NewPromiseCapability(C)
var n=r(93);e.exports.f=function(e){return new PromiseCapability(e)}},/* 137 */
/***/
function(e,t){t.f=Object.getOwnPropertySymbols},/* 138 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.runtimeUtils={runtimeDescriptor:{},runtimeCapabilities:{constraints:{}}}},/* 139 */
/***/
function(e,t,r){t.f=r(22)},/* 140 */
/***/
function(e,t,r){var n=r(21),i=r(13),o=r(92),a=r(139),s=r(38).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||s(t,e,{value:a.f(e)})}},/* 141 */
/***/
function(e,t,r){var n=r(77),i=r(73),o=r(44),a=r(130),s=r(58),u=r(181),c=Object.getOwnPropertyDescriptor;t.f=r(43)?c:function(e,t){if(e=o(e),t=a(t,!0),u)try{return c(e,t)}catch(e){}if(s(e,t))return i(!n.f.call(e,t),e[t])}},/* 142 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=function(){function Operators(){(0,i.default)(this,Operators)}return(0,a.default)(Operators,[{key:"and",value:function(e){return e[0]&&e[1]}},{key:"between",value:function(e){var t=parseInt(e[0][0]),r=parseInt(e[0][1]),n=e[1];return r<t&&(n=n<t?n+=2400:n,r+=2400),n>t&&n<r}},{key:"equals",value:function(e){return"*"===String(e[0])||String(e[0])===String(e[1])}},{key:"greaterThan",value:function(e){return e[1]>e[0]}},{key:"in",value:function(e){return e[0].indexOf(e[1])>-1}},{key:"lessThan",value:function(e){return e[1]<e[0]}},{key:"not",value:function(e){return!e[0]}},{key:"or",value:function(e){return e[0]||e[1]}}]),Operators}();t.default=s,e.exports=t.default},/* 143 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=r(142),u=_interopRequireDefault(s),c=function(){/**
  * Creates a new Condition.
  * @class
  * @param  {string}  attribute
  * @param  {string}  operator
  * @param  {*}       params
  */
function Condition(e,t,r){(0,i.default)(this,Condition),this.attribute=e,this.operator=t,this.params=r,this.operators=new u.default}/**
  * Verifies if the condition is applicable to the message. First, the system value that corresponds to the attribute is retrieved; then, that value is compared with the parameter specified in the condition by executing the operator implementation. If the operator is 'in' and the name of a group is given, then the array holding the members of the group is retrieved before the comparison.
  * @param  {Object}    context   environment where the Policy Engine is being used
  * @param  {Object}    message
  */
return(0,a.default)(Condition,[{key:"isApplicable",value:function(e,t){e[this.attribute]={message:t};var r=e[this.attribute],n=void 0;return"in"!==this.operator||Array.isArray(this.params)?this.operators[this.operator]([this.params,r]):(n=e.getGroup(this.params,t.to),this.operators[this.operator]([n,r]))}}]),Condition}();/**
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
t.default=c,e.exports=t.default},/* 144 */
/***/
function(e,t){var r;
// This works in non-strict mode
r=function(){return this}();try{
// This works if eval is allowed (see CSP)
r=r||Function("return this")()||(0,eval)("this")}catch(e){
// This works if the window reference is available
"object"==typeof window&&(r=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=r},/* 145 */
/***/
function(e,t,r){e.exports=!r(8)&&!r(5)(function(){return 7!=Object.defineProperty(r(100)("div"),"a",{get:function(){return 7}}).a})},/* 146 */
/***/
function(e,t,r){t.f=r(7)},/* 147 */
/***/
function(e,t,r){var n=r(17),i=r(23),o=r(79)(!1),a=r(102)("IE_PROTO");e.exports=function(e,t){var r,s=i(e),u=0,c=[];for(r in s)r!=a&&n(s,r)&&c.push(r);
// Don't enum bug & hidden keys
for(;t.length>u;)n(s,r=t[u++])&&(~o(c,r)||c.push(r));return c}},/* 148 */
/***/
function(e,t,r){var n=r(9),i=r(3),o=r(49);e.exports=r(8)?Object.defineProperties:function(e,t){i(e);for(var r,a=o(t),s=a.length,u=0;s>u;)n.f(e,r=a[u++],t[r]);return e}},/* 149 */
/***/
function(e,t,r){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var n=r(23),i=r(52).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?s(e):i(n(e))}},/* 150 */
/***/
function(e,t,r){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var n=r(49),i=r(80),o=r(71),a=r(14),s=r(70),u=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
e.exports=!u||r(5)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=u({},e)[r]||Object.keys(u({},t)).join("")!=n})?function(e,t){for(// eslint-disable-line no-unused-vars
var r=a(e),u=arguments.length,c=1,f=i.f,l=o.f;u>c;)for(var d,p=s(arguments[c++]),y=f?n(p).concat(f(p)):n(p),h=y.length,v=0;h>v;)l.call(p,d=y[v++])&&(r[d]=p[d]);return r}:u},/* 151 */
/***/
function(e,t,r){"use strict";var n=r(16),i=r(6),o=r(152),a=[].slice,s={},u=function(e,t,r){if(!(t in s)){for(var n=[],i=0;i<t;i++)n[i]="a["+i+"]";
// eslint-disable-next-line no-new-func
s[t]=Function("F,a","return new F("+n.join(",")+")")}return s[t](e,r)};e.exports=Function.bind||function(e){var t=n(this),r=a.call(arguments,1),s=function(){var n=r.concat(a.call(arguments));return this instanceof s?u(t,n.length,n):o(t,n,e)};return i(t.prototype)&&(s.prototype=t.prototype),s}},/* 152 */
/***/
function(e,t){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
e.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},/* 153 */
/***/
function(e,t,r){var n=r(4).parseInt,i=r(62).trim,o=r(106),a=/^[-+]?0[xX]/;e.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(e,t){var r=i(String(e),3);return n(r,t>>>0||(a.test(r)?16:10))}:n},/* 154 */
/***/
function(e,t,r){var n=r(4).parseFloat,i=r(62).trim;e.exports=1/n(r(106)+"-0")!=-1/0?function(e){var t=i(String(e),3),r=n(t);return 0===r&&"-"==t.charAt(0)?-0:r}:n},/* 155 */
/***/
function(e,t,r){var n=r(28);e.exports=function(e,t){if("number"!=typeof e&&"Number"!=n(e))throw TypeError(t);return+e}},/* 156 */
/***/
function(e,t,r){
// 20.1.2.3 Number.isInteger(number)
var n=r(6),i=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&i(e)===e}},/* 157 */
/***/
function(e,t){
// 20.2.2.20 Math.log1p(x)
e.exports=Math.log1p||function(e){return(e=+e)>-1e-8&&e<1e-8?e-e*e/2:Math.log(1+e)}},/* 158 */
/***/
function(e,t,r){
// 20.2.2.16 Math.fround(x)
var n=r(109),i=Math.pow,o=i(2,-52),a=i(2,-23),s=i(2,127)*(2-a),u=i(2,-126),c=function(e){return e+1/o-1/o};e.exports=Math.fround||function(e){var t,r,i=Math.abs(e),f=n(e);
// eslint-disable-next-line no-self-compare
return i<u?f*c(i/u/a)*u*a:(t=(1+a/o)*i,r=t-(t-i),r>s||r!=r?f*(1/0):f*r)}},/* 159 */
/***/
function(e,t,r){
// call something on iterator step with safe closing on error
var n=r(3);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(t){var o=e.return;throw void 0!==o&&n(o.call(e)),t}}},/* 160 */
/***/
function(e,t,r){var n=r(16),i=r(14),o=r(70),a=r(10);e.exports=function(e,t,r,s,u){n(t);var c=i(e),f=o(c),l=a(c.length),d=u?l-1:0,p=u?-1:1;if(r<2)for(;;){if(d in f){s=f[d],d+=p;break}if(d+=p,u?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;u?d>=0:l>d;d+=p)d in f&&(s=t(s,f[d],d,c));return s}},/* 161 */
/***/
function(e,t,r){"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var n=r(14),i=r(50),o=r(10);e.exports=[].copyWithin||function(e,t){var r=n(this),a=o(r.length),s=i(e,a),u=i(t,a),c=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===c?a:i(c,a))-u,a-s),l=1;for(u<s&&s<u+f&&(l=-1,u+=f-1,s+=f-1);f-- >0;)u in r?r[s]=r[u]:delete r[s],s+=l,u+=l;return r}},/* 162 */
/***/
function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},/* 163 */
/***/
function(e,t,r){
// 21.2.5.3 get RegExp.prototype.flags()
r(8)&&"g"!=/./g.flags&&r(9).f(RegExp.prototype,"flags",{configurable:!0,get:r(84)})},/* 164 */
/***/
function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},/* 165 */
/***/
function(e,t,r){var n=r(3),i=r(6),o=r(124);e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t;var r=o.f(e);return(0,r.resolve)(t),r.promise}},/* 166 */
/***/
function(e,t,r){"use strict";var n=r(167),i=r(64);
// 23.1 Map Objects
e.exports=r(87)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.1.3.6 Map.prototype.get(key)
get:function(e){var t=n.getEntry(i(this,"Map"),e);return t&&t.v},
// 23.1.3.9 Map.prototype.set(key, value)
set:function(e,t){return n.def(i(this,"Map"),0===e?0:e,t)}},n,!0)},/* 167 */
/***/
function(e,t,r){"use strict";var n=r(9).f,i=r(51),o=r(56),a=r(27),s=r(54),u=r(55),c=r(112),f=r(162),l=r(53),d=r(8),p=r(40).fastKey,y=r(64),h=d?"_s":"size",v=function(e,t){
// fast case
var r,n=p(t);if("F"!==n)return e._i[n];
// frozen object case
for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,c){var f=e(function(e,n){s(e,f,t,"_i"),e._t=t,// collection type
e._i=i(null),// index
e._f=void 0,// first entry
e._l=void 0,// last entry
e[h]=0,// size
void 0!=n&&u(n,r,e[c],e)});return o(f.prototype,{
// 23.1.3.1 Map.prototype.clear()
// 23.2.3.2 Set.prototype.clear()
clear:function(){for(var e=y(this,t),r=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete r[n.i];e._f=e._l=void 0,e[h]=0},
// 23.1.3.3 Map.prototype.delete(key)
// 23.2.3.4 Set.prototype.delete(value)
delete:function(e){var r=y(this,t),n=v(r,e);if(n){var i=n.n,o=n.p;delete r._i[n.i],n.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==n&&(r._f=i),r._l==n&&(r._l=o),r[h]--}return!!n},
// 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
// 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
forEach:function(e){y(this,t);for(var r,n=a(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)
// revert to the last existing entry
for(n(r.v,r.k,this);r&&r.r;)r=r.p},
// 23.1.3.7 Map.prototype.has(key)
// 23.2.3.7 Set.prototype.has(value)
has:function(e){return!!v(y(this,t),e)}}),d&&n(f.prototype,"size",{get:function(){return y(this,t)[h]}}),f},def:function(e,t,r){var n,i,o=v(e,t);
// change existing entry
// add to index
return o?o.v=r:(e._l=o={i:i=p(t,!0),// <- index
k:t,// <- key
v:r,// <- value
p:n=e._l,// <- previous entry
n:void 0,// <- next entry
r:!1},e._f||(e._f=o),n&&(n.n=o),e[h]++,"F"!==i&&(e._i[i]=o)),e},getEntry:v,setStrong:function(e,t,r){
// add .keys, .values, .entries, [@@iterator]
// 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
c(e,t,function(e,r){this._t=y(e,t),// target
this._k=r,// kind
this._l=void 0},function(){
// revert to the last existing entry
for(var e=this,t=e._k,r=e._l;r&&r.r;)r=r.p;
// get next entry
// get next entry
// return step by kind
// or finish the iteration
return e._t&&(e._l=r=r?r.n:e._t._f)?"keys"==t?f(0,r.k):"values"==t?f(0,r.v):f(0,[r.k,r.v]):(e._t=void 0,f(1))},r?"entries":"values",!r,!0),
// add [@@species], 23.1.2.2, 23.2.2.2
l(t)}}},/* 168 */
/***/
function(e,t,r){"use strict";var n=r(167),i=r(64);
// 23.2 Set Objects
e.exports=r(87)("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.2.3.1 Set.prototype.add(value)
add:function(e){return n.def(i(this,"Set"),e=0===e?0:e,e)}},n)},/* 169 */
/***/
function(e,t,r){"use strict";var n,i=r(35)(0),o=r(19),a=r(40),s=r(150),u=r(170),c=r(6),f=r(5),l=r(64),d=a.getWeak,p=Object.isExtensible,y=u.ufstore,h={},v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},g={
// 23.3.3.3 WeakMap.prototype.get(key)
get:function(e){if(c(e)){var t=d(e);return!0===t?y(l(this,"WeakMap")).get(e):t?t[this._i]:void 0}},
// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function(e,t){return u.def(l(this,"WeakMap"),e,t)}},b=e.exports=r(87)("WeakMap",v,g,u,!0,!0);
// IE11 WeakMap frozen keys fix
f(function(){return 7!=(new b).set((Object.freeze||Object)(h),7).get(h)})&&(n=u.getConstructor(v,"WeakMap"),s(n.prototype,g),a.NEED=!0,i(["delete","has","get","set"],function(e){var t=b.prototype,r=t[e];o(t,e,function(t,i){
// store frozen objects on internal weakmap shim
if(c(t)&&!p(t)){this._f||(this._f=new n);var o=this._f[e](t,i);return"set"==e?this:o}return r.call(this,t,i)})}))},/* 170 */
/***/
function(e,t,r){"use strict";var n=r(56),i=r(40).getWeak,o=r(3),a=r(6),s=r(54),u=r(55),c=r(35),f=r(17),l=r(64),d=c(5),p=c(6),y=0,h=function(e){return e._l||(e._l=new v)},v=function(){this.a=[]},g=function(e,t){return d(e.a,function(e){return e[0]===t})};v.prototype={get:function(e){var t=g(this,e);if(t)return t[1]},has:function(e){return!!g(this,e)},set:function(e,t){var r=g(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,function(t){return t[0]===e});return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,o){var c=e(function(e,n){s(e,c,t,"_i"),e._t=t,// collection type
e._i=y++,// collection id
e._l=void 0,// leak store for uncaught frozen objects
void 0!=n&&u(n,r,e[o],e)});return n(c.prototype,{
// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
delete:function(e){if(!a(e))return!1;var r=i(e);return!0===r?h(l(this,t)).delete(e):r&&f(r,this._i)&&delete r[this._i]},
// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function(e){if(!a(e))return!1;var r=i(e);return!0===r?h(l(this,t)).has(e):r&&f(r,this._i)}}),c},def:function(e,t,r){var n=i(o(t),!0);return!0===n?h(e).set(t,r):n[e._i]=r,e},ufstore:h}},/* 171 */
/***/
function(e,t,r){
// https://tc39.github.io/ecma262/#sec-toindex
var n=r(33),i=r(10);e.exports=function(e){if(void 0===e)return 0;var t=n(e),r=i(t);if(t!==r)throw RangeError("Wrong length!");return r}},/* 172 */
/***/
function(e,t,r){
// all object keys, includes non-enumerable and symbols
var n=r(52),i=r(80),o=r(3),a=r(4).Reflect;e.exports=a&&a.ownKeys||function(e){var t=n.f(o(e)),r=i.f;return r?t.concat(r(e)):t}},/* 173 */
/***/
function(e,t,r){"use strict";function flattenIntoArray(e,t,r,u,c,f,l,d){for(var p,y,h=c,v=0,g=!!l&&a(l,d,3);v<u;){if(v in r){if(p=g?g(r[v],v,t):r[v],y=!1,i(p)&&(y=p[s],y=void 0!==y?!!y:n(p)),y&&f>0)h=flattenIntoArray(e,t,p,o(p.length),h,f-1)-1;else{if(h>=9007199254740991)throw TypeError();e[h]=p}h++}v++}return h}
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var n=r(81),i=r(6),o=r(10),a=r(27),s=r(7)("isConcatSpreadable");e.exports=flattenIntoArray},/* 174 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-string-pad-start-end
var n=r(10),i=r(108),o=r(32);e.exports=function(e,t,r,a){var s=String(o(e)),u=s.length,c=void 0===r?" ":String(r),f=n(t);if(f<=u||""==c)return s;var l=f-u,d=i.call(c,Math.ceil(l/c.length));return d.length>l&&(d=d.slice(0,l)),a?d+s:s+d}},/* 175 */
/***/
function(e,t,r){var n=r(49),i=r(23),o=r(71).f;e.exports=function(e){return function(t){for(var r,a=i(t),s=n(a),u=s.length,c=0,f=[];u>c;)o.call(a,r=s[c++])&&f.push(e?[r,a[r]]:a[r]);return f}}},/* 176 */
/***/
function(e,t,r){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=r(72),i=r(177);e.exports=function(e){return function(){if(n(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},/* 177 */
/***/
function(e,t,r){var n=r(55);e.exports=function(e,t){var r=[];return n(e,!1,r.push,r,t),r}},/* 178 */
/***/
function(e,t){
// https://rwaldron.github.io/proposal-math-extensions/
e.exports=Math.scale||function(e,t,r,n,i){return 0===arguments.length||e!=e||t!=t||r!=r||n!=n||i!=i?NaN:e===1/0||e===-1/0?e:(e-t)*(i-n)/(r-t)+n}},/* 179 */
/***/
function(e,t){},/* 180 */
/***/
function(e,t,r){"use strict";var n=r(92),i=r(26),o=r(182),a=r(57),s=r(58),u=r(74),c=r(413),f=r(95),l=r(186),d=r(22)("iterator"),p=!([].keys&&"next"in[].keys()),y=function(){return this};e.exports=function(e,t,r,h,v,g,b){c(r,t,h);var m,_,R,w=function(e){if(!p&&e in k)return k[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},S=t+" Iterator",O="values"==v,P=!1,k=e.prototype,M=k[d]||k["@@iterator"]||v&&k[v],L=M||w(v),x=v?O?w("entries"):L:void 0,E="Array"==t?k.entries||M:M;if(
// Fix native
E&&(R=l(E.call(new e)))!==Object.prototype&&R.next&&(
// Set @@toStringTag to native iterators
f(R,S,!0),
// fix for some old engines
n||s(R,d)||a(R,d,y)),
// fix Array#{values, @@iterator}.name in V8 / FF
O&&M&&"values"!==M.name&&(P=!0,L=function(){return M.call(this)}),
// Define iterator
n&&!b||!p&&!P&&k[d]||a(k,d,L),
// Plug for library
u[t]=L,u[S]=y,v)if(m={values:O?L:w("values"),keys:g?L:w("keys"),entries:x},b)for(_ in m)_ in k||o(k,_,m[_]);else i(i.P+i.F*(p||P),t,m);return m}},/* 181 */
/***/
function(e,t,r){e.exports=!r(43)&&!r(66)(function(){return 7!=Object.defineProperty(r(129)("div"),"a",{get:function(){return 7}}).a})},/* 182 */
/***/
function(e,t,r){e.exports=r(57)},/* 183 */
/***/
function(e,t,r){var n=r(58),i=r(44),o=r(415)(!1),a=r(133)("IE_PROTO");e.exports=function(e,t){var r,s=i(e),u=0,c=[];for(r in s)r!=a&&n(s,r)&&c.push(r);
// Don't enum bug & hidden keys
for(;t.length>u;)n(s,r=t[u++])&&(~o(c,r)||c.push(r));return c}},/* 184 */
/***/
function(e,t,r){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var n=r(75);
// eslint-disable-next-line no-prototype-builtins
e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},/* 185 */
/***/
function(e,t,r){var n=r(21).document;e.exports=n&&n.documentElement},/* 186 */
/***/
function(e,t,r){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var n=r(58),i=r(76),o=r(133)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),n(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},/* 187 */
/***/
function(e,t,r){r(417);for(var n=r(21),i=r(57),o=r(74),a=r(22)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<s.length;u++){var c=s[u],f=n[c],l=f&&f.prototype;l&&!l[a]&&i(l,a,c),o[c]=o.Array}},/* 188 */
/***/
function(e,t,r){
// getting tag from 19.1.3.6 Object.prototype.toString()
var n=r(75),i=r(22)("toStringTag"),o="Arguments"==n(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,r,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=a(t=Object(e),i))?r:o?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},/* 189 */
/***/
function(e,t,r){
// call something on iterator step with safe closing on error
var n=r(39);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(t){var o=e.return;throw void 0!==o&&n(o.call(e)),t}}},/* 190 */
/***/
function(e,t,r){
// check on default Array iterator
var n=r(74),i=r(22)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||o[i]===e)}},/* 191 */
/***/
function(e,t,r){var n=r(188),i=r(22)("iterator"),o=r(74);e.exports=r(13).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[n(e)]}},/* 192 */
/***/
function(e,t,r){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var n=r(39),i=r(93),o=r(22)("species");e.exports=function(e,t){var r,a=n(e).constructor;return void 0===a||void 0==(r=n(a)[o])?t:i(r)}},/* 193 */
/***/
function(e,t,r){var n,i,o,a=r(65),s=r(423),u=r(185),c=r(129),f=r(21),l=f.process,d=f.setImmediate,p=f.clearImmediate,y=f.MessageChannel,h=f.Dispatch,v=0,g={},b=function(){var e=+this;
// eslint-disable-next-line no-prototype-builtins
if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},m=function(e){b.call(e.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
d&&p||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return g[++v]=function(){
// eslint-disable-next-line no-new-func
s("function"==typeof e?e:Function(e),t)},n(v),v},p=function(e){delete g[e]},
// Node.js 0.8-
"process"==r(75)(l)?n=function(e){l.nextTick(a(b,e,1))}:h&&h.now?n=function(e){h.now(a(b,e,1))}:y?(i=new y,o=i.port2,i.port1.onmessage=m,n=a(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",m,!1)):n="onreadystatechange"in c("script")?function(e){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(a(b,e,1),0)}),e.exports={set:d,clear:p}},/* 194 */
/***/
function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},/* 195 */
/***/
function(e,t,r){var n=r(39),i=r(42),o=r(136);e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t;var r=o.f(e);return(0,r.resolve)(t),r.promise}},/* 196 */
/***/
function(e,t,r){var n=r(22)("iterator"),i=!1;try{var o=[7][n]();o.return=function(){i=!0},
// eslint-disable-next-line no-throw-literal
Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var o=[7],a=o[n]();a.next=function(){return{done:r=!0}},o[n]=function(){return a},e(o)}catch(e){}return r}},/* 197 */
/***/
function(e,t,r){e.exports={default:r(432),__esModule:!0}},/* 198 */
/***/
function(e,t,r){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var n=r(183),i=r(135).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},/* 199 */
/***/
function(e,t,r){e.exports={default:r(456),__esModule:!0}},/* 200 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(11),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=f.getLogger("Bus"),d=function(){/* private
  _msgId: number;
  _subscriptions: <url: MsgListener[]>
   _responseTimeOut: number
  _responseCallbacks: <url+id: (msg) => void>
   */
function Bus(){(0,a.default)(this,Bus);var e=this;e._msgId=0,e._subscriptions={},e._responseTimeOut=15e3,//default to 3s
e._responseCallbacks={},e._registerExternalListener()}/**
  * Register listener to receive message when "msg.to === url".
  * Special url "*" for default listener is accepted to intercept all messages.
  * @param {URL} url Address to intercept, tha is in the message "to"
  * @param {Listener} listener listener
  * @return {MsgListener} instance of MsgListener
  */
return(0,u.default)(Bus,[{key:"addListener",value:function(e,t){var r=this,n=new p(r._subscriptions,e,t),i=r._subscriptions[e];return i||(i=[],r._subscriptions[e]=i),i.push(n),n}},{key:"addResponseListener",value:function(e,t,r){this._responseCallbacks[e+t]=r}},{key:"removeResponseListener",value:function(e,t){delete this._responseCallbacks[e+t]}},{key:"removeAllListenersOf",value:function(e){delete this._subscriptions[e]}},{key:"bind",value:function(e,t,r){var n=this,i=this;return{thisListener:i.addListener(e,function(e){r.postMessage(e)}),targetListener:r.addListener(t,function(e){i.postMessage(e)}),unbind:function(){n.thisListener.remove(),n.targetListener.remove()}}}},{key:"_publishOnDefault",value:function(e){
//is there any "*" (default) listeners?
var t=this._subscriptions["*"];t&&this._publishOn(t,e)}},{key:"_publishOn",value:function(e,t){e.forEach(function(e){e._callback(t)})}},{key:"_responseCallback",value:function(e,t){var r=this;
//automatic management of response handlers
if(t){var n=e.from+e.id;r._responseCallbacks[n]=t,setTimeout(function(){var t=r._responseCallbacks[n];if(delete r._responseCallbacks[n],t){t({id:e.id,type:"response",body:{code:408,desc:"Response timeout!",value:e}})}},r._responseTimeOut)}}},{key:"_onResponse",value:function(e){var t=this;if("response"===e.type){var r=e.to+e.id,n=t._responseCallbacks[r];if(e.body.code>=200&&
//if it's a provisional response, don't delete response listener
delete t._responseCallbacks[r],n)return n(e),!0}return!1}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?t._publishOn(r,e):t._publishOnDefault(e)}}},{key:"_genId",value:function(e){
//TODO: how do we manage message ID's? Should it be a global runtime counter, or per URL address?
//Global counter will not work, because there will be multiple MiniBus instances!
//Per URL, can be a lot of data to maintain!
//Maybe a counter per MiniBus instance. This is the assumed solution for now.
e.id&&0!==e.id||(this._msgId++,e.id=this._msgId)}},{key:"postMessage",value:function(e,t){}},{key:"postMessageWithRetries",value:function(e,t,r){var n=this,o=0,a=function(){return new i.default(function(t,i){n.postMessage(e,function(n){408===n.body.code||500===n.body.code?i():(l.info("[Bus.postMessageWithRetries] msg delivered: ",e),r(n),t())})})};!function tryAgain(){a().then(function(){},function(){if(l.warn("[Bus.postMessageWithRetries] Message Bounced (retry "+o+"): '",e),!(o++<t)){var r="[Error] Message Bounced (delivery attempts "+t+"): '";throw new Error(r+e)}tryAgain()})}()}},{key:"_onPostMessage",value:function(e){}},{key:"_registerExternalListener",value:function(){}}]),Bus}(),p=function(){/* private
  _subscriptions: <string: MsgListener[]>;
  _url: string;
  _callback: (msg) => void;
  */
function MsgListener(e,t,r){(0,a.default)(this,MsgListener);var n=this;n._subscriptions=e,n._url=t,n._callback=r}return(0,u.default)(MsgListener,[{key:"remove",/**
     * Remove this listener from the Bus
     */
value:function(){var e=this,t=e._subscriptions[e._url];if(t){var r=t.indexOf(e);t.splice(r,1),
//if there are no listeners, remove the subscription entirely.
0===t.length&&delete e._subscriptions[e._url]}}},{key:"url",get:function(){return this._url}}]),MsgListener}();t.default=d,e.exports=t.default},/* 201 */
/***/
function(e,t,r){
// version: 0.7.2
// date: Thu Nov 16 2017 12:35:01 GMT+0000 (WET)
// licence: 
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
!function(t,r){e.exports=r()}(0,function(){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=182)}({0:function(e,t){var r=e.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},1:function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},10:function(e,t,r){var n=r(6),i=r(15);e.exports=r(3)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},117:function(e,t){!function(){"use strict";function Observer(e,t,r,n,i,o){function deliver(e,n){if(deliver.delay=n,!deliver.pause&&s.changeset.length>0){if(!e){var i=s.changeset.filter(function(e){return!r||r.indexOf(e.type)>=0});i.length>0&&t(i)}s.changeset=[]}}var a,s=this;return deliver.pause=i,deliver.delay=o,s.get=function(e,t){return"__observer__"===t?s:"unobserve"===t?function(){return Object.unobserve(e),e}:"deliver"===t?deliver:e[t]},s.target=e,s.changeset=[],s.target.__observerCallbacks__||(Object.defineProperty(e,"__observerCallbacks__",{enumerable:!1,configurable:!0,writable:!1,value:[]}),Object.defineProperty(e,"__observers__",{enumerable:!1,configurable:!0,writable:!1,value:[]})),s.target.__observerCallbacks__.push(t),s.target.__observers__.push(this),a=new Proxy(e,s),deliver(!1,o),a}Object.observe||"function"!=typeof Proxy||(Observer.prototype.deliver=function(){return this.get(null,"deliver")},Observer.prototype.set=function(e,t,r){var n=e[t],i=void 0===n?"add":"update";if(e[t]=r,e.__observers__.indexOf(this)>=0&&(!this.acceptlist||this.acceptlist.indexOf(i)>=0)){var o={object:e,name:t,type:i},a=0===this.changeset.length,s=this.deliver();"update"===i&&(o.oldValue=n),this.changeset.push(o),a&&s(!1,"number"==typeof s.delay?s.delay:10)}return!0},Observer.prototype.deleteProperty=function(e,t){var r=e[t];if(delete e[t],e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("delete")>=0){var n={object:e,name:t,type:"delete",oldValue:r},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},Observer.prototype.defineProperty=function(e,t,r){if(Object.defineProperty(e,t,r),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("reconfigure")>=0){var n={object:e,name:t,type:"reconfigure"},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},Observer.prototype.setPrototypeOf=function(e,t){var r=Object.getPrototypeOf(e);if(Object.setPrototypeOf(e,t),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("setPrototype")>=0){var n={object:e,name:"__proto__",type:"setPrototype",oldValue:r},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},Observer.prototype.preventExtensions=function(e){if(Object.preventExtensions(e),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("preventExtensions")>=0){var t={object:e,type:"preventExtensions"},r=0===this.changeset.length,n=this.deliver();this.changeset.push(t),r&&n(!1,"number"==typeof n.delay?n.delay:10)}return!0},Object.observe=function(e,t,r,n,i,o){return new Observer(e,t,r,n,i,o)},Object.unobserve=function(e,t){if(e.__observerCallbacks__){if(!t)return e.__observerCallbacks__.splice(0,e.__observerCallbacks__.length),void e.__observers__.splice(0,e.__observers__.length);e.__observerCallbacks__.forEach(function(r,n){t===r&&(e.__observerCallbacks__.splice(n,1),delete e.__observers__[n].callback,e.__observers__.splice(n,1))})}},Array.observe=function(e,t,r,n,i,o){if(!(e instanceof Array||Array.isArray(e)))throw new TypeError("First argument to Array.observer is not an Array");r=r||["add","update","delete","splice"];var a=new Proxy(e,{get:function(t,n){return"unobserve"===n?function(e){return e?Object.unobserve(t,e):t.unobserve()}:"splice"===n?function(n,i){if("number"!=typeof n||"number"!=typeof i)throw new TypeError("First two arguments to Array splice are not number, number");var o=this.slice(n,n+i),a=arguments.length>1?arguments.length-2:0,u={object:e,type:"splice",index:n,removed:o,addedCount:a};if(t.splice.apply(t,arguments),r.indexOf("splice")>=0){var n=0===s.__observer__.changeset.length,c=s.__observer__.deliver();s.__observer__.changeset.push(u),n&&c(!1,"number"==typeof c.delay?c.delay:10)}}:"push"===n?function(e){return this.splice(this.length,0,e)}:"pop"===n?function(){return this.splice(this.length-1,1)}:"unshift"===n?function(e){return this.splice(0,0,e)}:"shift"===n?function(){return this.splice(0,1)}:t[n]}}),s=Object.observe(a,function(e){var n=e.filter(function(e){return"length"!==e.name&&"add"!==e.name&&(!r||r.indexOf(e.type)>=0)});n.length>0&&t(n)},r,n,i,o);return s},Array.unobserve=function(e,t){return e.unobserve(t)}),Object.deepObserve=function(e,t,r){function reobserve(e,r){Object.keys(e).forEach(function(i){if(("object"===n(e[i])||"array"===n(e[i]))&&!e[i].hasOwnProperty("__observers__")){var o=r.slice(0);o.push(i),e[i]=Object.deepObserve(e[i],t,o)}})}r=r||[];var n=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};return reobserve(e,r),Object.observe(e,function(e){function recurse(e,t,r,i,o){if(i instanceof Object)Object.keys(i).forEach(function(a){if(!r||r[a]!==i[a]){var s=r&&void 0!==r[a]?r[a]:void 0,u=void 0===s?"add":"update",c=o+"."+a;n.push({name:e,object:t,type:u,oldValue:s,newValue:i[a],keypath:c}),recurse(e,t,s,i[a],c)}});else if(r instanceof Object){var a=Object.keys(r);a.forEach(function(a){var s=null===i?"update":"delete",u=o+"."+a;n.push({name:e,object:t,type:s,oldValue:r[a],newValue:i,keypath:u}),recurse(e,t,r[a],void 0,u)})}}var n=[];e.forEach(function(e){var t=(r.length>0?r.join(".")+".":"")+e.name;"update"!==e.type&&"add"!==e.type||reobserve(e.object,r),n.push({name:e.name,object:e.object,type:e.type,oldValue:e.oldValue,newValue:e.object[e.name],keypath:t}),recurse(e.name,e.object,e.oldValue,e.object[e.name],t)}),t(n)})}}()},12:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},14:function(e,t,r){var n=r(17);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},15:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},17:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},182:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WatchingYou=void 0;var n=r(183),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.WatchingYou=i.default},183:function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(5),i=_interopRequireDefault(n),o=r(9),a=_interopRequireDefault(o);r(117);var s=function(){function WatchingYou(){(0,i.default)(this,WatchingYou),this._watching={},this._observers=[]}return(0,a.default)(WatchingYou,[{key:"watch",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._watching[e]=n?Object.deepObserve(t,function(t){t.every(function(t){r._fireEvent(e,t)})}):Object.observe(t,function(t){t.every(function(t){r._fireEvent(e,t)})}),this._watching[e]}},{key:"observe",value:function(e,t){this._observers.push({key:e,callback:t})}},{key:"_fireEvent",value:function(e,t){this._observers.filter(function(t){return t.key===e}).forEach(function(e){e.callback(t)})}}]),WatchingYou}();t.default=s,e.exports=t.default},19:function(e,t,r){var n=r(8),i=r(1).document,o=n(i)&&n(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},20:function(e,t,r){var n=r(8);e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},3:function(e,t,r){e.exports=!r(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},34:function(e,t,r){e.exports=!r(3)&&!r(12)(function(){return 7!=Object.defineProperty(r(19)("div"),"a",{get:function(){return 7}}).a})},4:function(e,t,r){var n=r(1),i=r(0),o=r(14),a=r(10),s=function(e,t,r){var u,c,f,l=e&s.F,d=e&s.G,p=e&s.S,y=e&s.P,h=e&s.B,v=e&s.W,g=d?i:i[t]||(i[t]={}),b=g.prototype,m=d?n:p?n[t]:(n[t]||{}).prototype;d&&(r=t);for(u in r)(c=!l&&m&&void 0!==m[u])&&u in g||(f=c?m[u]:r[u],g[u]=d&&"function"!=typeof m[u]?r[u]:h&&c?o(f,n):v&&m[u]==f?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(f):y&&"function"==typeof f?o(Function.call,f):f,y&&((g.virtual||(g.virtual={}))[u]=f,e&s.R&&b&&!b[u]&&a(b,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},43:function(e,t,r){e.exports={default:r(44),__esModule:!0}},44:function(e,t,r){r(45);var n=r(0).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},45:function(e,t,r){var n=r(4);n(n.S+n.F*!r(3),"Object",{defineProperty:r(6).f})},5:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},6:function(e,t,r){var n=r(7),i=r(34),o=r(20),a=Object.defineProperty;t.f=r(3)?Object.defineProperty:function(e,t,r){if(n(e),t=o(t,!0),n(r),i)try{return a(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},7:function(e,t,r){var n=r(8);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},8:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},9:function(e,t,r){"use strict";t.__esModule=!0;var n=r(43),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i.default)(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}()}})})},/* 202 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=function(){function AllowOverrides(){(0,i.default)(this,AllowOverrides)}return(0,a.default)(AllowOverrides,[{key:"combine",/**
    * Given an array of individual authorization decisions, prioritizes a positive one.
    * @param    {boolean[]}   decisions
    * @returns  {boolean}
    */
value:function(e){return-1!==e.indexOf(!0)||-1===e.indexOf(!1)&&"Not Applicable"}}]),AllowOverrides}();t.default=s,e.exports=t.default},/* 203 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=function(){function BlockOverrides(){(0,i.default)(this,BlockOverrides)}return(0,a.default)(BlockOverrides,[{key:"combine",/**
    * Given an array of individual authorisation decisions, prioritises a negative one.
    * @param    {boolean[]}   decisions
    * @returns  {boolean}
    */
value:function(e){return-1===e.indexOf(!1)&&(-1!==e.indexOf(!0)||"Not Applicable")}}]),BlockOverrides}();t.default=s,e.exports=t.default},/* 204 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=function(){function FirstApplicable(){(0,i.default)(this,FirstApplicable)}return(0,a.default)(FirstApplicable,[{key:"combine",/**
    * Given an array of individual authorisation decisions, returns the first one different from 'Not Applicable', either positive or negative.
    * @param    {boolean[]}     decisions
    * @returns  {boolean}
    */
value:function(e){for(var t in e)if("Not Applicable"!==e[t])return e[t];return"Not Applicable"}}]),FirstApplicable}();t.default=s,e.exports=t.default},/* 205 */
/***/
function(e,t,r){e.exports={default:r(495),__esModule:!0}},/* 206 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=r(11),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s),c=u.getLogger("SynSubscription"),f=function(){function Subscription(e,t,r,n,o){(0,i.default)(this,Subscription);var a=this,s=r+"/children/",u=r+"/changes";
//process delete message
a._deleteListener=e.addListener(u,function(n){if("delete"===n.type){c.log("Subscription-DELETE: ",n);
//FLOW-OUT: message sent to all subscribers
var i={type:"delete",from:n.from,to:t,body:{identity:n.body.identity,resource:r}};
//send delete to hyperty
e.postMessage(i,function(e){c.log("Subscription-DELETE-REPLY: ",e),200===e.body.code&&a._releaseListeners()})}}),
//add change publish address or forward
a._changeListener=o?e.addPublish(u):e.addForward(u,t),a._childrenListeners=[],c.log("[Subscription] - childID",n),n.forEach(function(r){var n=s+r;c.log("[Subscription] - childID",s,n,r);
//add children publish address
var i=e.addPublish(n);
//add self forward if an observer
if(a._childrenListeners.push(i),!o){var u=e.addForward(n,t);a._childrenListeners.push(u)}})}return(0,a.default)(Subscription,[{key:"_releaseListeners",value:function(){var e=this;e._deleteListener.remove(),e._changeListener.remove(),e._childrenListeners.forEach(function(e){e.remove()})}}]),Subscription}();t.default=f,e.exports=t.default},/* 207 */
/***/
function(e,t,r){r(208),e.exports=r(410)},/* 208 */
/***/
function(e,t,r){"use strict";/* WEBPACK VAR INJECTION */
(function(e){function define(e,r,n){e[r]||Object[t](e,r,{writable:!0,configurable:!0,value:n})}if(r(209),r(406),r(407),e._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");e._babelPolyfill=!0;var t="defineProperty";define(String.prototype,"padLeft","".padStart),define(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e){[][e]&&define(Array,e,Function.call.bind([][e]))})}).call(t,r(144))},/* 209 */
/***/
function(e,t,r){r(210),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(226),r(228),r(229),r(230),r(231),r(232),r(233),r(234),r(235),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(290),r(291),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(121),r(314),r(315),r(163),r(316),r(317),r(318),r(319),r(320),r(166),r(168),r(169),r(321),r(322),r(323),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(345),r(346),r(347),r(348),r(349),r(350),r(351),r(352),r(353),r(354),r(355),r(356),r(357),r(358),r(359),r(360),r(361),r(362),r(363),r(364),r(365),r(366),r(367),r(368),r(369),r(370),r(371),r(372),r(373),r(374),r(375),r(376),r(377),r(378),r(379),r(380),r(381),r(382),r(383),r(384),r(385),r(386),r(387),r(388),r(389),r(390),r(391),r(392),r(393),r(394),r(395),r(396),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),e.exports=r(30)},/* 210 */
/***/
function(e,t,r){"use strict";
// ECMAScript 6 symbols shim
var n=r(4),i=r(17),o=r(8),a=r(0),s=r(19),u=r(40).KEY,c=r(5),f=r(78),l=r(61),d=r(47),p=r(7),y=r(146),h=r(101),v=r(211),g=r(81),b=r(3),m=r(23),_=r(31),R=r(46),w=r(51),S=r(149),O=r(24),P=r(9),k=r(49),M=O.f,L=P.f,x=S.f,E=n.Symbol,D=n.JSON,U=D&&D.stringify,A=p("_hidden"),j=p("toPrimitive"),I={}.propertyIsEnumerable,C=f("symbol-registry"),T=f("symbols"),N=f("op-symbols"),F=Object.prototype,q="function"==typeof E,H=n.QObject,B=!H||!H.prototype||!H.prototype.findChild,G=o&&c(function(){return 7!=w(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=M(F,t);n&&delete F[t],L(e,t,r),n&&e!==F&&L(F,t,n)}:L,K=function(e){var t=T[e]=w(E.prototype);return t._k=e,t},V=q&&"symbol"==typeof E.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof E},W=function(e,t,r){return e===F&&W(N,t,r),b(e),t=_(t,!0),b(r),i(T,t)?(r.enumerable?(i(e,A)&&e[A][t]&&(e[A][t]=!1),r=w(r,{enumerable:R(0,!1)})):(i(e,A)||L(e,A,R(1,{})),e[A][t]=!0),G(e,t,r)):L(e,t,r)},Y=function(e,t){b(e);for(var r,n=v(t=m(t)),i=0,o=n.length;o>i;)W(e,r=n[i++],t[r]);return e},J=function(e,t){return void 0===t?w(e):Y(w(e),t)},z=function(e){var t=I.call(this,e=_(e,!0));return!(this===F&&i(T,e)&&!i(N,e))&&(!(t||!i(this,e)||!i(T,e)||i(this,A)&&this[A][e])||t)},$=function(e,t){if(e=m(e),t=_(t,!0),e!==F||!i(T,t)||i(N,t)){var r=M(e,t);return!r||!i(T,t)||i(e,A)&&e[A][t]||(r.enumerable=!0),r}},X=function(e){for(var t,r=x(m(e)),n=[],o=0;r.length>o;)i(T,t=r[o++])||t==A||t==u||n.push(t);return n},Z=function(e){for(var t,r=e===F,n=x(r?N:m(e)),o=[],a=0;n.length>a;)!i(T,t=n[a++])||r&&!i(F,t)||o.push(T[t]);return o};
// 19.4.1.1 Symbol([description])
q||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===F&&t.call(N,r),i(this,A)&&i(this[A],e)&&(this[A][e]=!1),G(this,e,R(1,r))};return o&&B&&G(F,e,{configurable:!0,set:t}),K(e)},s(E.prototype,"toString",function(){return this._k}),O.f=$,P.f=W,r(52).f=S.f=X,r(71).f=z,r(80).f=Z,o&&!r(48)&&s(F,"propertyIsEnumerable",z,!0),y.f=function(e){return K(p(e))}),a(a.G+a.W+a.F*!q,{Symbol:E});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Q.length>ee;)p(Q[ee++]);for(var te=k(p.store),re=0;te.length>re;)h(te[re++]);a(a.S+a.F*!q,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(e){return i(C,e+="")?C[e]:C[e]=E(e)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in C)if(C[t]===e)return t},useSetter:function(){B=!0},useSimple:function(){B=!1}}),a(a.S+a.F*!q,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:J,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:W,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:Y,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:$,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:X,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:Z}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
D&&a(a.S+a.F*(!q||c(function(){var e=E();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=U([e])||"{}"!=U({a:e})||"{}"!=U(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!V(e)){for(// IE8 returns string on undefined
var t,r,n=[e],i=1;arguments.length>i;)n.push(arguments[i++]);return t=n[1],"function"==typeof t&&(r=t),!r&&g(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!V(t))return t}),n[1]=t,U.apply(D,n)}}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
E.prototype[j]||r(18)(E.prototype,j,E.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
l(E,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
l(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
l(n.JSON,"JSON",!0)},/* 211 */
/***/
function(e,t,r){
// all enumerable object keys, includes symbols
var n=r(49),i=r(80),o=r(71);e.exports=function(e){var t=n(e),r=i.f;if(r)for(var a,s=r(e),u=o.f,c=0;s.length>c;)u.call(e,a=s[c++])&&t.push(a);return t}},/* 212 */
/***/
function(e,t,r){var n=r(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
n(n.S,"Object",{create:r(51)})},/* 213 */
/***/
function(e,t,r){var n=r(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
n(n.S+n.F*!r(8),"Object",{defineProperty:r(9).f})},/* 214 */
/***/
function(e,t,r){var n=r(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
n(n.S+n.F*!r(8),"Object",{defineProperties:r(148)})},/* 215 */
/***/
function(e,t,r){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var n=r(23),i=r(24).f;r(34)("getOwnPropertyDescriptor",function(){return function(e,t){return i(n(e),t)}})},/* 216 */
/***/
function(e,t,r){
// 19.1.2.9 Object.getPrototypeOf(O)
var n=r(14),i=r(25);r(34)("getPrototypeOf",function(){return function(e){return i(n(e))}})},/* 217 */
/***/
function(e,t,r){
// 19.1.2.14 Object.keys(O)
var n=r(14),i=r(49);r(34)("keys",function(){return function(e){return i(n(e))}})},/* 218 */
/***/
function(e,t,r){
// 19.1.2.7 Object.getOwnPropertyNames(O)
r(34)("getOwnPropertyNames",function(){return r(149).f})},/* 219 */
/***/
function(e,t,r){
// 19.1.2.5 Object.freeze(O)
var n=r(6),i=r(40).onFreeze;r(34)("freeze",function(e){return function(t){return e&&n(t)?e(i(t)):t}})},/* 220 */
/***/
function(e,t,r){
// 19.1.2.17 Object.seal(O)
var n=r(6),i=r(40).onFreeze;r(34)("seal",function(e){return function(t){return e&&n(t)?e(i(t)):t}})},/* 221 */
/***/
function(e,t,r){
// 19.1.2.15 Object.preventExtensions(O)
var n=r(6),i=r(40).onFreeze;r(34)("preventExtensions",function(e){return function(t){return e&&n(t)?e(i(t)):t}})},/* 222 */
/***/
function(e,t,r){
// 19.1.2.12 Object.isFrozen(O)
var n=r(6);r(34)("isFrozen",function(e){return function(t){return!n(t)||!!e&&e(t)}})},/* 223 */
/***/
function(e,t,r){
// 19.1.2.13 Object.isSealed(O)
var n=r(6);r(34)("isSealed",function(e){return function(t){return!n(t)||!!e&&e(t)}})},/* 224 */
/***/
function(e,t,r){
// 19.1.2.11 Object.isExtensible(O)
var n=r(6);r(34)("isExtensible",function(e){return function(t){return!!n(t)&&(!e||e(t))}})},/* 225 */
/***/
function(e,t,r){
// 19.1.3.1 Object.assign(target, source)
var n=r(0);n(n.S+n.F,"Object",{assign:r(150)})},/* 226 */
/***/
function(e,t,r){
// 19.1.3.10 Object.is(value1, value2)
var n=r(0);n(n.S,"Object",{is:r(227)})},/* 227 */
/***/
function(e,t){
// 7.2.9 SameValue(x, y)
e.exports=Object.is||function(e,t){
// eslint-disable-next-line no-self-compare
return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},/* 228 */
/***/
function(e,t,r){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var n=r(0);n(n.S,"Object",{setPrototypeOf:r(105).set})},/* 229 */
/***/
function(e,t,r){"use strict";
// 19.1.3.6 Object.prototype.toString()
var n=r(72),i={};i[r(7)("toStringTag")]="z",i+""!="[object z]"&&r(19)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},/* 230 */
/***/
function(e,t,r){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var n=r(0);n(n.P,"Function",{bind:r(151)})},/* 231 */
/***/
function(e,t,r){var n=r(9).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;
// 19.2.4.2 name
"name"in i||r(8)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},/* 232 */
/***/
function(e,t,r){"use strict";var n=r(6),i=r(25),o=r(7)("hasInstance"),a=Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
o in a||r(9).f(a,o,{value:function(e){if("function"!=typeof this||!n(e))return!1;if(!n(this.prototype))return e instanceof this;
// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;e=i(e);)if(this.prototype===e)return!0;return!1}})},/* 233 */
/***/
function(e,t,r){var n=r(0),i=r(153);
// 18.2.5 parseInt(string, radix)
n(n.G+n.F*(parseInt!=i),{parseInt:i})},/* 234 */
/***/
function(e,t,r){var n=r(0),i=r(154);
// 18.2.4 parseFloat(string)
n(n.G+n.F*(parseFloat!=i),{parseFloat:i})},/* 235 */
/***/
function(e,t,r){"use strict";var n=r(4),i=r(17),o=r(28),a=r(107),s=r(31),u=r(5),c=r(52).f,f=r(24).f,l=r(9).f,d=r(62).trim,p=n.Number,y=p,h=p.prototype,v="Number"==o(r(51)(h)),g="trim"in String.prototype,b=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():d(t,3);var r,n,i,o=t.charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,i=49;break;// fast equal /^0b[01]+$/i
case 79:case 111:n=8,i=55;break;// fast equal /^0o[0-7]+$/i
default:return+t}for(var a,u=t.slice(2),c=0,f=u.length;c<f;c++)
// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((a=u.charCodeAt(c))<48||a>i)return NaN;return parseInt(u,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(v?u(function(){h.valueOf.call(r)}):"Number"!=o(r))?a(new y(b(t)),r,p):b(t)};for(var m,_=r(8)?c(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;_.length>R;R++)i(y,m=_[R])&&!i(p,m)&&l(p,m,f(y,m));p.prototype=h,h.constructor=p,r(19)(n,"Number",p)}},/* 236 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(33),o=r(155),a=r(108),s=1..toFixed,u=Math.floor,c=[0,0,0,0,0,0],f="Number.toFixed: incorrect invocation!",l=function(e,t){for(var r=-1,n=t;++r<6;)n+=e*c[r],c[r]=n%1e7,n=u(n/1e7)},d=function(e){for(var t=6,r=0;--t>=0;)r+=c[t],c[t]=u(r/e),r=r%e*1e7},p=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==c[e]){var r=String(c[e]);t=""===t?r:t+a.call("0",7-r.length)+r}return t},y=function(e,t,r){return 0===t?r:t%2==1?y(e,t-1,r*e):y(e*e,t/2,r)},h=function(e){for(var t=0,r=e;r>=4096;)t+=12,r/=4096;for(;r>=2;)t+=1,r/=2;return t};n(n.P+n.F*(!!s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(5)(function(){
// V8 ~ Android 4.3-
s.call({})})),"Number",{toFixed:function(e){var t,r,n,s,u=o(this,f),c=i(e),v="",g="0";if(c<0||c>20)throw RangeError(f);
// eslint-disable-next-line no-self-compare
if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(t=h(u*y(2,69,1))-69,r=t<0?u*y(2,-t,1):u/y(2,t,1),r*=4503599627370496,(t=52-t)>0){for(l(0,r),n=c;n>=7;)l(1e7,0),n-=7;for(l(y(10,n,1),0),n=t-1;n>=23;)d(1<<23),n-=23;d(1<<n),l(1,1),d(2),g=p()}else l(0,r),l(1<<-t,0),g=p()+a.call("0",c);return c>0?(s=g.length,g=v+(s<=c?"0."+a.call("0",c-s)+g:g.slice(0,s-c)+"."+g.slice(s-c))):g=v+g,g}})},/* 237 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(5),o=r(155),a=1..toPrecision;n(n.P+n.F*(i(function(){
// IE7-
return"1"!==a.call(1,void 0)})||!i(function(){
// V8 ~ Android 4.3-
a.call({})})),"Number",{toPrecision:function(e){var t=o(this,"Number#toPrecision: incorrect invocation!");return void 0===e?a.call(t):a.call(t,e)}})},/* 238 */
/***/
function(e,t,r){
// 20.1.2.1 Number.EPSILON
var n=r(0);n(n.S,"Number",{EPSILON:Math.pow(2,-52)})},/* 239 */
/***/
function(e,t,r){
// 20.1.2.2 Number.isFinite(number)
var n=r(0),i=r(4).isFinite;n(n.S,"Number",{isFinite:function(e){return"number"==typeof e&&i(e)}})},/* 240 */
/***/
function(e,t,r){
// 20.1.2.3 Number.isInteger(number)
var n=r(0);n(n.S,"Number",{isInteger:r(156)})},/* 241 */
/***/
function(e,t,r){
// 20.1.2.4 Number.isNaN(number)
var n=r(0);n(n.S,"Number",{isNaN:function(e){
// eslint-disable-next-line no-self-compare
return e!=e}})},/* 242 */
/***/
function(e,t,r){
// 20.1.2.5 Number.isSafeInteger(number)
var n=r(0),i=r(156),o=Math.abs;n(n.S,"Number",{isSafeInteger:function(e){return i(e)&&o(e)<=9007199254740991}})},/* 243 */
/***/
function(e,t,r){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var n=r(0);n(n.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},/* 244 */
/***/
function(e,t,r){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var n=r(0);n(n.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},/* 245 */
/***/
function(e,t,r){var n=r(0),i=r(154);
// 20.1.2.12 Number.parseFloat(string)
n(n.S+n.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},/* 246 */
/***/
function(e,t,r){var n=r(0),i=r(153);
// 20.1.2.13 Number.parseInt(string, radix)
n(n.S+n.F*(Number.parseInt!=i),"Number",{parseInt:i})},/* 247 */
/***/
function(e,t,r){
// 20.2.2.3 Math.acosh(x)
var n=r(0),i=r(157),o=Math.sqrt,a=Math.acosh;n(n.S+n.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(e){return(e=+e)<1?NaN:e>94906265.62425156?Math.log(e)+Math.LN2:i(e-1+o(e-1)*o(e+1))}})},/* 248 */
/***/
function(e,t,r){function asinh(e){return isFinite(e=+e)&&0!=e?e<0?-asinh(-e):Math.log(e+Math.sqrt(e*e+1)):e}
// 20.2.2.5 Math.asinh(x)
var n=r(0),i=Math.asinh;
// Tor Browser bug: Math.asinh(0) -> -0
n(n.S+n.F*!(i&&1/i(0)>0),"Math",{asinh:asinh})},/* 249 */
/***/
function(e,t,r){
// 20.2.2.7 Math.atanh(x)
var n=r(0),i=Math.atanh;
// Tor Browser bug: Math.atanh(-0) -> 0
n(n.S+n.F*!(i&&1/i(-0)<0),"Math",{atanh:function(e){return 0==(e=+e)?e:Math.log((1+e)/(1-e))/2}})},/* 250 */
/***/
function(e,t,r){
// 20.2.2.9 Math.cbrt(x)
var n=r(0),i=r(109);n(n.S,"Math",{cbrt:function(e){return i(e=+e)*Math.pow(Math.abs(e),1/3)}})},/* 251 */
/***/
function(e,t,r){
// 20.2.2.11 Math.clz32(x)
var n=r(0);n(n.S,"Math",{clz32:function(e){return(e>>>=0)?31-Math.floor(Math.log(e+.5)*Math.LOG2E):32}})},/* 252 */
/***/
function(e,t,r){
// 20.2.2.12 Math.cosh(x)
var n=r(0),i=Math.exp;n(n.S,"Math",{cosh:function(e){return(i(e=+e)+i(-e))/2}})},/* 253 */
/***/
function(e,t,r){
// 20.2.2.14 Math.expm1(x)
var n=r(0),i=r(110);n(n.S+n.F*(i!=Math.expm1),"Math",{expm1:i})},/* 254 */
/***/
function(e,t,r){
// 20.2.2.16 Math.fround(x)
var n=r(0);n(n.S,"Math",{fround:r(158)})},/* 255 */
/***/
function(e,t,r){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var n=r(0),i=Math.abs;n(n.S,"Math",{hypot:function(e,t){for(// eslint-disable-line no-unused-vars
var r,n,o=0,a=0,s=arguments.length,u=0;a<s;)r=i(arguments[a++]),u<r?(n=u/r,o=o*n*n+1,u=r):r>0?(n=r/u,o+=n*n):o+=r;return u===1/0?1/0:u*Math.sqrt(o)}})},/* 256 */
/***/
function(e,t,r){
// 20.2.2.18 Math.imul(x, y)
var n=r(0),i=Math.imul;
// some WebKit versions fails with big numbers, some has wrong arity
n(n.S+n.F*r(5)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function(e,t){var r=+e,n=+t,i=65535&r,o=65535&n;return 0|i*o+((65535&r>>>16)*o+i*(65535&n>>>16)<<16>>>0)}})},/* 257 */
/***/
function(e,t,r){
// 20.2.2.21 Math.log10(x)
var n=r(0);n(n.S,"Math",{log10:function(e){return Math.log(e)*Math.LOG10E}})},/* 258 */
/***/
function(e,t,r){
// 20.2.2.20 Math.log1p(x)
var n=r(0);n(n.S,"Math",{log1p:r(157)})},/* 259 */
/***/
function(e,t,r){
// 20.2.2.22 Math.log2(x)
var n=r(0);n(n.S,"Math",{log2:function(e){return Math.log(e)/Math.LN2}})},/* 260 */
/***/
function(e,t,r){
// 20.2.2.28 Math.sign(x)
var n=r(0);n(n.S,"Math",{sign:r(109)})},/* 261 */
/***/
function(e,t,r){
// 20.2.2.30 Math.sinh(x)
var n=r(0),i=r(110),o=Math.exp;
// V8 near Chromium 38 has a problem with very small numbers
n(n.S+n.F*r(5)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(e){return Math.abs(e=+e)<1?(i(e)-i(-e))/2:(o(e-1)-o(-e-1))*(Math.E/2)}})},/* 262 */
/***/
function(e,t,r){
// 20.2.2.33 Math.tanh(x)
var n=r(0),i=r(110),o=Math.exp;n(n.S,"Math",{tanh:function(e){var t=i(e=+e),r=i(-e);return t==1/0?1:r==1/0?-1:(t-r)/(o(e)+o(-e))}})},/* 263 */
/***/
function(e,t,r){
// 20.2.2.34 Math.trunc(x)
var n=r(0);n(n.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},/* 264 */
/***/
function(e,t,r){var n=r(0),i=r(50),o=String.fromCharCode,a=String.fromCodePoint;
// length should be 1, old FF problem
n(n.S+n.F*(!!a&&1!=a.length),"String",{
// 21.1.2.2 String.fromCodePoint(...codePoints)
fromCodePoint:function(e){for(// eslint-disable-line no-unused-vars
var t,r=[],n=arguments.length,a=0;n>a;){if(t=+arguments[a++],i(t,1114111)!==t)throw RangeError(t+" is not a valid code point");r.push(t<65536?o(t):o(55296+((t-=65536)>>10),t%1024+56320))}return r.join("")}})},/* 265 */
/***/
function(e,t,r){var n=r(0),i=r(23),o=r(10);n(n.S,"String",{
// 21.1.2.4 String.raw(callSite, ...substitutions)
raw:function(e){for(var t=i(e.raw),r=o(t.length),n=arguments.length,a=[],s=0;r>s;)a.push(String(t[s++])),s<n&&a.push(String(arguments[s]));return a.join("")}})},/* 266 */
/***/
function(e,t,r){"use strict";
// 21.1.3.25 String.prototype.trim()
r(62)("trim",function(e){return function(){return e(this,3)}})},/* 267 */
/***/
function(e,t,r){"use strict";var n=r(111)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
r(112)(String,"String",function(e){this._t=String(e),// target
this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},/* 268 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(111)(!1);n(n.P,"String",{
// 21.1.3.3 String.prototype.codePointAt(pos)
codePointAt:function(e){return i(this,e)}})},/* 269 */
/***/
function(e,t,r){"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
var n=r(0),i=r(10),o=r(114),a="".endsWith;n(n.P+n.F*r(115)("endsWith"),"String",{endsWith:function(e){var t=o(this,e,"endsWith"),r=arguments.length>1?arguments[1]:void 0,n=i(t.length),s=void 0===r?n:Math.min(i(r),n),u=String(e);return a?a.call(t,u,s):t.slice(s-u.length,s)===u}})},/* 270 */
/***/
function(e,t,r){"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
var n=r(0),i=r(114);n(n.P+n.F*r(115)("includes"),"String",{includes:function(e){return!!~i(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},/* 271 */
/***/
function(e,t,r){var n=r(0);n(n.P,"String",{
// 21.1.3.13 String.prototype.repeat(count)
repeat:r(108)})},/* 272 */
/***/
function(e,t,r){"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
var n=r(0),i=r(10),o=r(114),a="".startsWith;n(n.P+n.F*r(115)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return a?a.call(t,n,r):t.slice(r,r+n.length)===n}})},/* 273 */
/***/
function(e,t,r){"use strict";
// B.2.3.2 String.prototype.anchor(name)
r(20)("anchor",function(e){return function(t){return e(this,"a","name",t)}})},/* 274 */
/***/
function(e,t,r){"use strict";
// B.2.3.3 String.prototype.big()
r(20)("big",function(e){return function(){return e(this,"big","","")}})},/* 275 */
/***/
function(e,t,r){"use strict";
// B.2.3.4 String.prototype.blink()
r(20)("blink",function(e){return function(){return e(this,"blink","","")}})},/* 276 */
/***/
function(e,t,r){"use strict";
// B.2.3.5 String.prototype.bold()
r(20)("bold",function(e){return function(){return e(this,"b","","")}})},/* 277 */
/***/
function(e,t,r){"use strict";
// B.2.3.6 String.prototype.fixed()
r(20)("fixed",function(e){return function(){return e(this,"tt","","")}})},/* 278 */
/***/
function(e,t,r){"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
r(20)("fontcolor",function(e){return function(t){return e(this,"font","color",t)}})},/* 279 */
/***/
function(e,t,r){"use strict";
// B.2.3.8 String.prototype.fontsize(size)
r(20)("fontsize",function(e){return function(t){return e(this,"font","size",t)}})},/* 280 */
/***/
function(e,t,r){"use strict";
// B.2.3.9 String.prototype.italics()
r(20)("italics",function(e){return function(){return e(this,"i","","")}})},/* 281 */
/***/
function(e,t,r){"use strict";
// B.2.3.10 String.prototype.link(url)
r(20)("link",function(e){return function(t){return e(this,"a","href",t)}})},/* 282 */
/***/
function(e,t,r){"use strict";
// B.2.3.11 String.prototype.small()
r(20)("small",function(e){return function(){return e(this,"small","","")}})},/* 283 */
/***/
function(e,t,r){"use strict";
// B.2.3.12 String.prototype.strike()
r(20)("strike",function(e){return function(){return e(this,"strike","","")}})},/* 284 */
/***/
function(e,t,r){"use strict";
// B.2.3.13 String.prototype.sub()
r(20)("sub",function(e){return function(){return e(this,"sub","","")}})},/* 285 */
/***/
function(e,t,r){"use strict";
// B.2.3.14 String.prototype.sup()
r(20)("sup",function(e){return function(){return e(this,"sup","","")}})},/* 286 */
/***/
function(e,t,r){
// 20.3.3.1 / 15.9.4.4 Date.now()
var n=r(0);n(n.S,"Date",{now:function(){return(new Date).getTime()}})},/* 287 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(14),o=r(31);n(n.P+n.F*r(5)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{
// eslint-disable-next-line no-unused-vars
toJSON:function(e){var t=i(this),r=o(t);return"number"!=typeof r||isFinite(r)?t.toISOString():null}})},/* 288 */
/***/
function(e,t,r){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var n=r(0),i=r(289);
// PhantomJS / old WebKit has a broken implementations
n(n.P+n.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},/* 289 */
/***/
function(e,t,r){"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var n=r(5),i=Date.prototype.getTime,o=Date.prototype.toISOString,a=function(e){return e>9?e:"0"+e};
// PhantomJS / old WebKit has a broken implementations
e.exports=n(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!n(function(){o.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+("00000"+Math.abs(t)).slice(n?-6:-4)+"-"+a(e.getUTCMonth()+1)+"-"+a(e.getUTCDate())+"T"+a(e.getUTCHours())+":"+a(e.getUTCMinutes())+":"+a(e.getUTCSeconds())+"."+(r>99?r:"0"+a(r))+"Z"}:o},/* 290 */
/***/
function(e,t,r){var n=Date.prototype,i=n.toString,o=n.getTime;new Date(NaN)+""!="Invalid Date"&&r(19)(n,"toString",function(){var e=o.call(this);
// eslint-disable-next-line no-self-compare
return e===e?i.call(this):"Invalid Date"})},/* 291 */
/***/
function(e,t,r){var n=r(7)("toPrimitive"),i=Date.prototype;n in i||r(18)(i,n,r(292))},/* 292 */
/***/
function(e,t,r){"use strict";var n=r(3),i=r(31);e.exports=function(e){if("string"!==e&&"number"!==e&&"default"!==e)throw TypeError("Incorrect hint");return i(n(this),"number"!=e)}},/* 293 */
/***/
function(e,t,r){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var n=r(0);n(n.S,"Array",{isArray:r(81)})},/* 294 */
/***/
function(e,t,r){"use strict";var n=r(27),i=r(0),o=r(14),a=r(159),s=r(116),u=r(10),c=r(117),f=r(118);i(i.S+i.F*!r(83)(function(e){Array.from(e)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(e){var t,r,i,l,d=o(e),p="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,v=void 0!==h,g=0,b=f(d);
// if object isn't iterable or it's array with default iterator - use simple case
if(v&&(h=n(h,y>2?arguments[2]:void 0,2)),void 0==b||p==Array&&s(b))for(t=u(d.length),r=new p(t);t>g;g++)c(r,g,v?h(d[g],g):d[g]);else for(l=b.call(d),r=new p;!(i=l.next()).done;g++)c(r,g,v?a(l,h,[i.value,g],!0):i.value);return r.length=g,r}})},/* 295 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(117);
// WebKit Array.of isn't generic
n(n.S+n.F*r(5)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{
// 22.1.2.3 Array.of( ...items)
of:function(){for(var e=0,t=arguments.length,r=new("function"==typeof this?this:Array)(t);t>e;)i(r,e,arguments[e++]);return r.length=t,r}})},/* 296 */
/***/
function(e,t,r){"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var n=r(0),i=r(23),o=[].join;
// fallback for not array-like strings
n(n.P+n.F*(r(70)!=Object||!r(29)(o)),"Array",{join:function(e){return o.call(i(this),void 0===e?",":e)}})},/* 297 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(104),o=r(28),a=r(50),s=r(10),u=[].slice;
// fallback for not array-like ES3 strings and DOM objects
n(n.P+n.F*r(5)(function(){i&&u.call(i)}),"Array",{slice:function(e,t){var r=s(this.length),n=o(this);if(t=void 0===t?r:t,"Array"==n)return u.call(this,e,t);for(var i=a(e,r),c=a(t,r),f=s(c-i),l=Array(f),d=0;d<f;d++)l[d]="String"==n?this.charAt(i+d):this[i+d];return l}})},/* 298 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(16),o=r(14),a=r(5),s=[].sort,u=[1,2,3];n(n.P+n.F*(a(function(){
// IE8-
u.sort(void 0)})||!a(function(){
// V8 bug
u.sort(null)})||!r(29)(s)),"Array",{
// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function(e){return void 0===e?s.call(o(this)):s.call(o(this),i(e))}})},/* 299 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(0),o=r(29)([].forEach,!0);n(n.P+n.F*!o,"Array",{
// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function(e){return i(this,e,arguments[1])}})},/* 300 */
/***/
function(e,t,r){var n=r(6),i=r(81),o=r(7)("species");e.exports=function(e){var t;
// cross-realm fallback
return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),n(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},/* 301 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(1);n(n.P+n.F*!r(29)([].map,!0),"Array",{
// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function(e){return i(this,e,arguments[1])}})},/* 302 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(2);n(n.P+n.F*!r(29)([].filter,!0),"Array",{
// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function(e){return i(this,e,arguments[1])}})},/* 303 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(3);n(n.P+n.F*!r(29)([].some,!0),"Array",{
// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function(e){return i(this,e,arguments[1])}})},/* 304 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(4);n(n.P+n.F*!r(29)([].every,!0),"Array",{
// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function(e){return i(this,e,arguments[1])}})},/* 305 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(160);n(n.P+n.F*!r(29)([].reduce,!0),"Array",{
// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function(e){return i(this,e,arguments.length,arguments[1],!1)}})},/* 306 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(160);n(n.P+n.F*!r(29)([].reduceRight,!0),"Array",{
// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function(e){return i(this,e,arguments.length,arguments[1],!0)}})},/* 307 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(79)(!1),o=[].indexOf,a=!!o&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(a||!r(29)(o)),"Array",{
// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function(e){return a?o.apply(this,arguments)||0:i(this,e,arguments[1])}})},/* 308 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(23),o=r(33),a=r(10),s=[].lastIndexOf,u=!!s&&1/[1].lastIndexOf(1,-0)<0;n(n.P+n.F*(u||!r(29)(s)),"Array",{
// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function(e){
// convert -0 to +0
if(u)return s.apply(this,arguments)||0;var t=i(this),r=a(t.length),n=r-1;for(arguments.length>1&&(n=Math.min(n,o(arguments[1]))),n<0&&(n=r+n);n>=0;n--)if(n in t&&t[n]===e)return n||0;return-1}})},/* 309 */
/***/
function(e,t,r){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var n=r(0);n(n.P,"Array",{copyWithin:r(161)}),r(41)("copyWithin")},/* 310 */
/***/
function(e,t,r){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var n=r(0);n(n.P,"Array",{fill:r(120)}),r(41)("fill")},/* 311 */
/***/
function(e,t,r){"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var n=r(0),i=r(35)(5),o=!0;
// Shouldn't skip holes
"find"in[]&&Array(1).find(function(){o=!1}),n(n.P+n.F*o,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(41)("find")},/* 312 */
/***/
function(e,t,r){"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var n=r(0),i=r(35)(6),o="findIndex",a=!0;
// Shouldn't skip holes
o in[]&&Array(1)[o](function(){a=!1}),n(n.P+n.F*a,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(41)(o)},/* 313 */
/***/
function(e,t,r){r(53)("Array")},/* 314 */
/***/
function(e,t,r){var n=r(4),i=r(107),o=r(9).f,a=r(52).f,s=r(82),u=r(84),c=n.RegExp,f=c,l=c.prototype,d=/a/g,p=/a/g,y=new c(d)!==d;if(r(8)&&(!y||r(5)(function(){
// RegExp constructor can alter flags and IsRegExp works correct with @@match
return p[r(7)("match")]=!1,c(d)!=d||c(p)==p||"/a/i"!=c(d,"i")}))){c=function(e,t){var r=this instanceof c,n=s(e),o=void 0===t;return!r&&n&&e.constructor===c&&o?e:i(y?new f(n&&!o?e.source:e,t):f((n=e instanceof c)?e.source:e,n&&o?u.call(e):t),r?this:l,c)};for(var h=a(f),v=0;h.length>v;)!function(e){e in c||o(c,e,{configurable:!0,get:function(){return f[e]},set:function(t){f[e]=t}})}(h[v++]);l.constructor=c,c.prototype=l,r(19)(n,"RegExp",c)}r(53)("RegExp")},/* 315 */
/***/
function(e,t,r){"use strict";r(163);var n=r(3),i=r(84),o=r(8),a=/./.toString,s=function(e){r(19)(RegExp.prototype,"toString",e,!0)};
// 21.2.5.14 RegExp.prototype.toString()
r(5)(function(){return"/a/b"!=a.call({source:"a",flags:"b"})})?s(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?i.call(e):void 0)}):"toString"!=a.name&&s(function(){return a.call(this)})},/* 316 */
/***/
function(e,t,r){
// @@match logic
r(85)("match",1,function(e,t,r){
// 21.1.3.11 String.prototype.match(regexp)
return[function(r){"use strict";var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n):new RegExp(r)[t](String(n))},r]})},/* 317 */
/***/
function(e,t,r){
// @@replace logic
r(85)("replace",2,function(e,t,r){
// 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
return[function(n,i){"use strict";var o=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,o,i):r.call(String(o),n,i)},r]})},/* 318 */
/***/
function(e,t,r){
// @@search logic
r(85)("search",1,function(e,t,r){
// 21.1.3.15 String.prototype.search(regexp)
return[function(r){"use strict";var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n):new RegExp(r)[t](String(n))},r]})},/* 319 */
/***/
function(e,t,r){
// @@split logic
r(85)("split",2,function(e,t,n){"use strict";var i=r(82),o=n,a=[].push,s="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[s]||2!="ab".split(/(?:ab)*/)[s]||4!=".".split(/(.?)(.?)/)[s]||".".split(/()()/)[s]>1||"".split(/.?/)[s]){var u=void 0===/()??/.exec("")[1];// nonparticipating capturing group
// based on es5-shim implementation, need to rework it
n=function(e,t){var r=String(this);if(void 0===e&&0===t)return[];
// If `separator` is not a regex, use native split
if(!i(e))return o.call(r,e,t);var n,c,f,l,d,p=[],y=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,v=void 0===t?4294967295:t>>>0,g=new RegExp(e.source,y+"g");for(
// Doesn't need flags gy, but they don't hurt
u||(n=new RegExp("^"+g.source+"$(?!\\s)",y));(c=g.exec(r))&&!((
// `separatorCopy.lastIndex` is not reliable cross-browser
f=c.index+c[0][s])>h&&(p.push(r.slice(h,c.index)),
// Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
// eslint-disable-next-line no-loop-func
!u&&c[s]>1&&c[0].replace(n,function(){for(d=1;d<arguments[s]-2;d++)void 0===arguments[d]&&(c[d]=void 0)}),c[s]>1&&c.index<r[s]&&a.apply(p,c.slice(1)),l=c[0][s],h=f,p[s]>=v));)g.lastIndex===c.index&&g.lastIndex++;return h===r[s]?!l&&g.test("")||p.push(""):p.push(r.slice(h)),p[s]>v?p.slice(0,v):p}}else"0".split(void 0,0)[s]&&(n=function(e,t){return void 0===e&&0===t?[]:o.call(this,e,t)});
// 21.1.3.17 String.prototype.split(separator, limit)
return[function(r,i){var o=e(this),a=void 0==r?void 0:r[t];return void 0!==a?a.call(r,o,i):n.call(String(o),r,i)},n]})},/* 320 */
/***/
function(e,t,r){"use strict";var n,i,o,a,s=r(48),u=r(4),c=r(27),f=r(72),l=r(0),d=r(6),p=r(16),y=r(54),h=r(55),v=r(86),g=r(122).set,b=r(123)(),m=r(124),_=r(164),R=r(165),w=u.TypeError,S=u.process,O=u.Promise,P="process"==f(S),k=function(){},M=i=m.f,L=!!function(){try{
// correct subclassing with @@species support
var e=O.resolve(1),t=(e.constructor={})[r(7)("species")]=function(e){e(k,k)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(P||"function"==typeof PromiseRejectionEvent)&&e.then(k)instanceof t}catch(e){}}(),x=function(e){var t;return!(!d(e)||"function"!=typeof(t=e.then))&&t},E=function(e,t){if(!e._n){e._n=!0;var r=e._c;b(function(){for(var n=e._v,i=1==e._s,o=0;r.length>o;)!function(t){var r,o,a=i?t.ok:t.fail,s=t.resolve,u=t.reject,c=t.domain;try{a?(i||(2==e._h&&A(e),e._h=1),!0===a?r=n:(c&&c.enter(),r=a(n),c&&c.exit()),r===t.promise?u(w("Promise-chain cycle")):(o=x(r))?o.call(r,s,u):s(r)):u(n)}catch(e){u(e)}}(r[o++]);// variable length - can't use forEach
e._c=[],e._n=!1,t&&!e._h&&D(e)})}},D=function(e){g.call(u,function(){var t,r,n,i=e._v,o=U(e);if(o&&(t=_(function(){P?S.emit("unhandledRejection",i,e):(r=u.onunhandledrejection)?r({promise:e,reason:i}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",i)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
e._h=P||U(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},U=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if(t=r[n++],t.fail||!U(t.promise))return!1;return!0},A=function(e){g.call(u,function(){var t;P?S.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},j=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,// unwrap
t._v=e,t._s=2,t._a||(t._a=t._c.slice()),E(t,!0))},I=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;// unwrap
try{if(r===e)throw w("Promise can't be resolved itself");(t=x(e))?b(function(){var n={_w:r,_d:!1};// wrap
try{t.call(e,c(I,n,1),c(j,n,1))}catch(e){j.call(n,e)}}):(r._v=e,r._s=1,E(r,!1))}catch(e){j.call({_w:r,_d:!1},e)}}};
// constructor polyfill
L||(
// 25.4.3.1 Promise(executor)
O=function(e){y(this,O,"Promise","_h"),p(e),n.call(this);try{e(c(I,this,1),c(j,this,1))}catch(e){j.call(this,e)}},
// eslint-disable-next-line no-unused-vars
n=function(e){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},n.prototype=r(56)(O.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(e,t){var r=M(v(this,O));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=P?S.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&E(this,!1),r.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new n;this.promise=e,this.resolve=c(I,e,1),this.reject=c(j,e,1)},m.f=M=function(e){return e===O||e===a?new o(e):i(e)}),l(l.G+l.W+l.F*!L,{Promise:O}),r(61)(O,"Promise"),r(53)("Promise"),a=r(30).Promise,
// statics
l(l.S+l.F*!L,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(e){var t=M(this);return(0,t.reject)(e),t.promise}}),l(l.S+l.F*(s||!L),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(e){return R(s&&this===a?O:this,e)}}),l(l.S+l.F*!(L&&r(83)(function(e){O.all(e).catch(k)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(e){var t=this,r=M(t),n=r.resolve,i=r.reject,o=_(function(){var r=[],o=0,a=1;h(e,!1,function(e){var s=o++,u=!1;r.push(void 0),a++,t.resolve(e).then(function(e){u||(u=!0,r[s]=e,--a||n(r))},i)}),--a||n(r)});return o.e&&i(o.v),r.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(e){var t=this,r=M(t),n=r.reject,i=_(function(){h(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return i.e&&n(i.v),r.promise}})},/* 321 */
/***/
function(e,t,r){"use strict";var n=r(170),i=r(64);
// 23.4 WeakSet Objects
r(87)("WeakSet",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.4.3.1 WeakSet.prototype.add(value)
add:function(e){return n.def(i(this,"WeakSet"),e,!0)}},n,!1,!0)},/* 322 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(88),o=r(125),a=r(3),s=r(50),u=r(10),c=r(6),f=r(4).ArrayBuffer,l=r(86),d=o.ArrayBuffer,p=o.DataView,y=i.ABV&&f.isView,h=d.prototype.slice,v=i.VIEW;n(n.G+n.W+n.F*(f!==d),{ArrayBuffer:d}),n(n.S+n.F*!i.CONSTR,"ArrayBuffer",{
// 24.1.3.1 ArrayBuffer.isView(arg)
isView:function(e){return y&&y(e)||c(e)&&v in e}}),n(n.P+n.U+n.F*r(5)(function(){return!new d(2).slice(1,void 0).byteLength}),"ArrayBuffer",{
// 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
slice:function(e,t){if(void 0!==h&&void 0===t)return h.call(a(this),e);for(// FF fix
var r=a(this).byteLength,n=s(e,r),i=s(void 0===t?r:t,r),o=new(l(this,d))(u(i-n)),c=new p(this),f=new p(o),y=0;n<i;)f.setUint8(y++,c.getUint8(n++));return o}}),r(53)("ArrayBuffer")},/* 323 */
/***/
function(e,t,r){var n=r(0);n(n.G+n.W+n.F*!r(88).ABV,{DataView:r(125).DataView})},/* 324 */
/***/
function(e,t,r){r(36)("Int8",1,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 325 */
/***/
function(e,t,r){r(36)("Uint8",1,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 326 */
/***/
function(e,t,r){r(36)("Uint8",1,function(e){return function(t,r,n){return e(this,t,r,n)}},!0)},/* 327 */
/***/
function(e,t,r){r(36)("Int16",2,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 328 */
/***/
function(e,t,r){r(36)("Uint16",2,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 329 */
/***/
function(e,t,r){r(36)("Int32",4,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 330 */
/***/
function(e,t,r){r(36)("Uint32",4,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 331 */
/***/
function(e,t,r){r(36)("Float32",4,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 332 */
/***/
function(e,t,r){r(36)("Float64",8,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 333 */
/***/
function(e,t,r){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var n=r(0),i=r(16),o=r(3),a=(r(4).Reflect||{}).apply,s=Function.apply;
// MS Edge argumentsList argument is optional
n(n.S+n.F*!r(5)(function(){a(function(){})}),"Reflect",{apply:function(e,t,r){var n=i(e),u=o(r);return a?a(n,t,u):s.call(n,t,u)}})},/* 334 */
/***/
function(e,t,r){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var n=r(0),i=r(51),o=r(16),a=r(3),s=r(6),u=r(5),c=r(151),f=(r(4).Reflect||{}).construct,l=u(function(){function F(){}return!(f(function(){},[],F)instanceof F)}),d=!u(function(){f(function(){})});n(n.S+n.F*(l||d),"Reflect",{construct:function(e,t){o(e),a(t);var r=arguments.length<3?e:o(arguments[2]);if(d&&!l)return f(e,t,r);if(e==r){
// w/o altered newTarget, optimization for 0-4 arguments
switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}
// w/o altered newTarget, lot of arguments case
var n=[null];return n.push.apply(n,t),new(c.apply(e,n))}
// with altered newTarget, not support built-in constructors
var u=r.prototype,p=i(s(u)?u:Object.prototype),y=Function.apply.call(e,p,t);return s(y)?y:p}})},/* 335 */
/***/
function(e,t,r){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var n=r(9),i=r(0),o=r(3),a=r(31);
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
i(i.S+i.F*r(5)(function(){
// eslint-disable-next-line no-undef
Reflect.defineProperty(n.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(e,t,r){o(e),t=a(t,!0),o(r);try{return n.f(e,t,r),!0}catch(e){return!1}}})},/* 336 */
/***/
function(e,t,r){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var n=r(0),i=r(24).f,o=r(3);n(n.S,"Reflect",{deleteProperty:function(e,t){var r=i(o(e),t);return!(r&&!r.configurable)&&delete e[t]}})},/* 337 */
/***/
function(e,t,r){"use strict";
// 26.1.5 Reflect.enumerate(target)
var n=r(0),i=r(3),o=function(e){this._t=i(e),// target
this._i=0;// next index
var t,r=this._k=[];for(t in e)r.push(t)};r(113)(o,"Object",function(){var e,t=this,r=t._k;do{if(t._i>=r.length)return{value:void 0,done:!0}}while(!((e=r[t._i++])in t._t));return{value:e,done:!1}}),n(n.S,"Reflect",{enumerate:function(e){return new o(e)}})},/* 338 */
/***/
function(e,t,r){function get(e,t){var r,a,c=arguments.length<3?e:arguments[2];return u(e)===c?e[t]:(r=n.f(e,t))?o(r,"value")?r.value:void 0!==r.get?r.get.call(c):void 0:s(a=i(e))?get(a,t,c):void 0}
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var n=r(24),i=r(25),o=r(17),a=r(0),s=r(6),u=r(3);a(a.S,"Reflect",{get:get})},/* 339 */
/***/
function(e,t,r){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var n=r(24),i=r(0),o=r(3);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(e,t){return n.f(o(e),t)}})},/* 340 */
/***/
function(e,t,r){
// 26.1.8 Reflect.getPrototypeOf(target)
var n=r(0),i=r(25),o=r(3);n(n.S,"Reflect",{getPrototypeOf:function(e){return i(o(e))}})},/* 341 */
/***/
function(e,t,r){
// 26.1.9 Reflect.has(target, propertyKey)
var n=r(0);n(n.S,"Reflect",{has:function(e,t){return t in e}})},/* 342 */
/***/
function(e,t,r){
// 26.1.10 Reflect.isExtensible(target)
var n=r(0),i=r(3),o=Object.isExtensible;n(n.S,"Reflect",{isExtensible:function(e){return i(e),!o||o(e)}})},/* 343 */
/***/
function(e,t,r){
// 26.1.11 Reflect.ownKeys(target)
var n=r(0);n(n.S,"Reflect",{ownKeys:r(172)})},/* 344 */
/***/
function(e,t,r){
// 26.1.12 Reflect.preventExtensions(target)
var n=r(0),i=r(3),o=Object.preventExtensions;n(n.S,"Reflect",{preventExtensions:function(e){i(e);try{return o&&o(e),!0}catch(e){return!1}}})},/* 345 */
/***/
function(e,t,r){function set(e,t,r){var s,l,d=arguments.length<4?e:arguments[3],p=i.f(c(e),t);if(!p){if(f(l=o(e)))return set(l,t,r,d);p=u(0)}return a(p,"value")?!(!1===p.writable||!f(d))&&(s=i.f(d,t)||u(0),s.value=r,n.f(d,t,s),!0):void 0!==p.set&&(p.set.call(d,r),!0)}
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var n=r(9),i=r(24),o=r(25),a=r(17),s=r(0),u=r(46),c=r(3),f=r(6);s(s.S,"Reflect",{set:set})},/* 346 */
/***/
function(e,t,r){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var n=r(0),i=r(105);i&&n(n.S,"Reflect",{setPrototypeOf:function(e,t){i.check(e,t);try{return i.set(e,t),!0}catch(e){return!1}}})},/* 347 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/Array.prototype.includes
var n=r(0),i=r(79)(!0);n(n.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(41)("includes")},/* 348 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var n=r(0),i=r(173),o=r(14),a=r(10),s=r(16),u=r(119);n(n.P,"Array",{flatMap:function(e){var t,r,n=o(this);return s(e),t=a(n.length),r=u(n,0),i(r,n,n,t,0,1,e,arguments[1]),r}}),r(41)("flatMap")},/* 349 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var n=r(0),i=r(173),o=r(14),a=r(10),s=r(33),u=r(119);n(n.P,"Array",{flatten:function(){var e=arguments[0],t=o(this),r=a(t.length),n=u(t,0);return i(n,t,t,r,0,void 0===e?1:s(e)),n}}),r(41)("flatten")},/* 350 */
/***/
function(e,t,r){"use strict";
// https://github.com/mathiasbynens/String.prototype.at
var n=r(0),i=r(111)(!0);n(n.P,"String",{at:function(e){return i(this,e)}})},/* 351 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var n=r(0),i=r(174);n(n.P,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},/* 352 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var n=r(0),i=r(174);n(n.P,"String",{padEnd:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},/* 353 */
/***/
function(e,t,r){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
r(62)("trimLeft",function(e){return function(){return e(this,1)}},"trimStart")},/* 354 */
/***/
function(e,t,r){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
r(62)("trimRight",function(e){return function(){return e(this,2)}},"trimEnd")},/* 355 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/String.prototype.matchAll/
var n=r(0),i=r(32),o=r(10),a=r(82),s=r(84),u=RegExp.prototype,c=function(e,t){this._r=e,this._s=t};r(113)(c,"RegExp String",function(){var e=this._r.exec(this._s);return{value:e,done:null===e}}),n(n.P,"String",{matchAll:function(e){if(i(this),!a(e))throw TypeError(e+" is not a regexp!");var t=String(this),r="flags"in u?String(e.flags):s.call(e),n=new RegExp(e.source,~r.indexOf("g")?r:"g"+r);return n.lastIndex=o(e.lastIndex),new c(n,t)}})},/* 356 */
/***/
function(e,t,r){r(101)("asyncIterator")},/* 357 */
/***/
function(e,t,r){r(101)("observable")},/* 358 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var n=r(0),i=r(172),o=r(23),a=r(24),s=r(117);n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=o(e),u=a.f,c=i(n),f={},l=0;c.length>l;)void 0!==(r=u(n,t=c[l++]))&&s(f,t,r);return f}})},/* 359 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-object-values-entries
var n=r(0),i=r(175)(!1);n(n.S,"Object",{values:function(e){return i(e)}})},/* 360 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-object-values-entries
var n=r(0),i=r(175)(!0);n(n.S,"Object",{entries:function(e){return i(e)}})},/* 361 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(14),o=r(16),a=r(9);
// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
r(8)&&n(n.P+r(89),"Object",{__defineGetter__:function(e,t){a.f(i(this),e,{get:o(t),enumerable:!0,configurable:!0})}})},/* 362 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(14),o=r(16),a=r(9);
// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
r(8)&&n(n.P+r(89),"Object",{__defineSetter__:function(e,t){a.f(i(this),e,{set:o(t),enumerable:!0,configurable:!0})}})},/* 363 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(14),o=r(31),a=r(25),s=r(24).f;
// B.2.2.4 Object.prototype.__lookupGetter__(P)
r(8)&&n(n.P+r(89),"Object",{__lookupGetter__:function(e){var t,r=i(this),n=o(e,!0);do{if(t=s(r,n))return t.get}while(r=a(r))}})},/* 364 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(14),o=r(31),a=r(25),s=r(24).f;
// B.2.2.5 Object.prototype.__lookupSetter__(P)
r(8)&&n(n.P+r(89),"Object",{__lookupSetter__:function(e){var t,r=i(this),n=o(e,!0);do{if(t=s(r,n))return t.set}while(r=a(r))}})},/* 365 */
/***/
function(e,t,r){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=r(0);n(n.P+n.R,"Map",{toJSON:r(176)("Map")})},/* 366 */
/***/
function(e,t,r){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=r(0);n(n.P+n.R,"Set",{toJSON:r(176)("Set")})},/* 367 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
r(90)("Map")},/* 368 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
r(90)("Set")},/* 369 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
r(90)("WeakMap")},/* 370 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
r(90)("WeakSet")},/* 371 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
r(91)("Map")},/* 372 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
r(91)("Set")},/* 373 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
r(91)("WeakMap")},/* 374 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
r(91)("WeakSet")},/* 375 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-global
var n=r(0);n(n.G,{global:r(4)})},/* 376 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-global
var n=r(0);n(n.S,"System",{global:r(4)})},/* 377 */
/***/
function(e,t,r){
// https://github.com/ljharb/proposal-is-error
var n=r(0),i=r(28);n(n.S,"Error",{isError:function(e){return"Error"===i(e)}})},/* 378 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0);n(n.S,"Math",{clamp:function(e,t,r){return Math.min(r,Math.max(t,e))}})},/* 379 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0);n(n.S,"Math",{DEG_PER_RAD:Math.PI/180})},/* 380 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0),i=180/Math.PI;n(n.S,"Math",{degrees:function(e){return e*i}})},/* 381 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0),i=r(178),o=r(158);n(n.S,"Math",{fscale:function(e,t,r,n,a){return o(i(e,t,r,n,a))}})},/* 382 */
/***/
function(e,t,r){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=r(0);n(n.S,"Math",{iaddh:function(e,t,r,n){var i=e>>>0,o=t>>>0,a=r>>>0;return o+(n>>>0)+((i&a|(i|a)&~(i+a>>>0))>>>31)|0}})},/* 383 */
/***/
function(e,t,r){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=r(0);n(n.S,"Math",{isubh:function(e,t,r,n){var i=e>>>0,o=t>>>0,a=r>>>0;return o-(n>>>0)-((~i&a|~(i^a)&i-a>>>0)>>>31)|0}})},/* 384 */
/***/
function(e,t,r){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=r(0);n(n.S,"Math",{imulh:function(e,t){var r=+e,n=+t,i=65535&r,o=65535&n,a=r>>16,s=n>>16,u=(a*o>>>0)+(i*o>>>16);return a*s+(u>>16)+((i*s>>>0)+(65535&u)>>16)}})},/* 385 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0);n(n.S,"Math",{RAD_PER_DEG:180/Math.PI})},/* 386 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0),i=Math.PI/180;n(n.S,"Math",{radians:function(e){return e*i}})},/* 387 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0);n(n.S,"Math",{scale:r(178)})},/* 388 */
/***/
function(e,t,r){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=r(0);n(n.S,"Math",{umulh:function(e,t){var r=+e,n=+t,i=65535&r,o=65535&n,a=r>>>16,s=n>>>16,u=(a*o>>>0)+(i*o>>>16);return a*s+(u>>>16)+((i*s>>>0)+(65535&u)>>>16)}})},/* 389 */
/***/
function(e,t,r){
// http://jfbastien.github.io/papers/Math.signbit.html
var n=r(0);n(n.S,"Math",{signbit:function(e){
// eslint-disable-next-line no-self-compare
return(e=+e)!=e?e:0==e?1/e==1/0:e>0}})},/* 390 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-promise-finally
var n=r(0),i=r(30),o=r(4),a=r(86),s=r(165);n(n.P+n.R,"Promise",{finally:function(e){var t=a(this,i.Promise||o.Promise),r="function"==typeof e;return this.then(r?function(r){return s(t,e()).then(function(){return r})}:e,r?function(r){return s(t,e()).then(function(){throw r})}:e)}})},/* 391 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-promise-try
var n=r(0),i=r(124),o=r(164);n(n.S,"Promise",{try:function(e){var t=i.f(this),r=o(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}})},/* 392 */
/***/
function(e,t,r){var n=r(37),i=r(3),o=n.key,a=n.set;n.exp({defineMetadata:function(e,t,r,n){a(e,t,i(r),o(n))}})},/* 393 */
/***/
function(e,t,r){var n=r(37),i=r(3),o=n.key,a=n.map,s=n.store;n.exp({deleteMetadata:function(e,t){var r=arguments.length<3?void 0:o(arguments[2]),n=a(i(t),r,!1);if(void 0===n||!n.delete(e))return!1;if(n.size)return!0;var u=s.get(t);return u.delete(r),!!u.size||s.delete(t)}})},/* 394 */
/***/
function(e,t,r){var n=r(37),i=r(3),o=r(25),a=n.has,s=n.get,u=n.key,c=function(e,t,r){if(a(e,t,r))return s(e,t,r);var n=o(t);return null!==n?c(e,n,r):void 0};n.exp({getMetadata:function(e,t){return c(e,i(t),arguments.length<3?void 0:u(arguments[2]))}})},/* 395 */
/***/
function(e,t,r){var n=r(168),i=r(177),o=r(37),a=r(3),s=r(25),u=o.keys,c=o.key,f=function(e,t){var r=u(e,t),o=s(e);if(null===o)return r;var a=f(o,t);return a.length?r.length?i(new n(r.concat(a))):a:r};o.exp({getMetadataKeys:function(e){return f(a(e),arguments.length<2?void 0:c(arguments[1]))}})},/* 396 */
/***/
function(e,t,r){var n=r(37),i=r(3),o=n.get,a=n.key;n.exp({getOwnMetadata:function(e,t){return o(e,i(t),arguments.length<3?void 0:a(arguments[2]))}})},/* 397 */
/***/
function(e,t,r){var n=r(37),i=r(3),o=n.keys,a=n.key;n.exp({getOwnMetadataKeys:function(e){return o(i(e),arguments.length<2?void 0:a(arguments[1]))}})},/* 398 */
/***/
function(e,t,r){var n=r(37),i=r(3),o=r(25),a=n.has,s=n.key,u=function(e,t,r){if(a(e,t,r))return!0;var n=o(t);return null!==n&&u(e,n,r)};n.exp({hasMetadata:function(e,t){return u(e,i(t),arguments.length<3?void 0:s(arguments[2]))}})},/* 399 */
/***/
function(e,t,r){var n=r(37),i=r(3),o=n.has,a=n.key;n.exp({hasOwnMetadata:function(e,t){return o(e,i(t),arguments.length<3?void 0:a(arguments[2]))}})},/* 400 */
/***/
function(e,t,r){var n=r(37),i=r(3),o=r(16),a=n.key,s=n.set;n.exp({metadata:function(e,t){return function(r,n){s(e,t,(void 0!==n?i:o)(r),a(n))}}})},/* 401 */
/***/
function(e,t,r){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var n=r(0),i=r(123)(),o=r(4).process,a="process"==r(28)(o);n(n.G,{asap:function(e){var t=a&&o.domain;i(t?t.bind(e):e)}})},/* 402 */
/***/
function(e,t,r){"use strict";
// https://github.com/zenparsing/es-observable
var n=r(0),i=r(4),o=r(30),a=r(123)(),s=r(7)("observable"),u=r(16),c=r(3),f=r(54),l=r(56),d=r(18),p=r(55),y=p.RETURN,h=function(e){return null==e?void 0:u(e)},v=function(e){var t=e._c;t&&(e._c=void 0,t())},g=function(e){return void 0===e._o},b=function(e){g(e)||(e._o=void 0,v(e))},m=function(e,t){c(e),this._c=void 0,this._o=e,e=new _(this);try{var r=t(e),n=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){n.unsubscribe()}:u(r),this._c=r)}catch(t){return void e.error(t)}g(this)&&v(this)};m.prototype=l({},{unsubscribe:function(){b(this)}});var _=function(e){this._s=e};_.prototype=l({},{next:function(e){var t=this._s;if(!g(t)){var r=t._o;try{var n=h(r.next);if(n)return n.call(r,e)}catch(e){try{b(t)}finally{throw e}}}},error:function(e){var t=this._s;if(g(t))throw e;var r=t._o;t._o=void 0;try{var n=h(r.error);if(!n)throw e;e=n.call(r,e)}catch(e){try{v(t)}finally{throw e}}return v(t),e},complete:function(e){var t=this._s;if(!g(t)){var r=t._o;t._o=void 0;try{var n=h(r.complete);e=n?n.call(r,e):void 0}catch(e){try{v(t)}finally{throw e}}return v(t),e}}});var R=function(e){f(this,R,"Observable","_f")._f=u(e)};l(R.prototype,{subscribe:function(e){return new m(e,this._f)},forEach:function(e){var t=this;return new(o.Promise||i.Promise)(function(r,n){u(e);var i=t.subscribe({next:function(t){try{return e(t)}catch(e){n(e),i.unsubscribe()}},error:n,complete:r})})}}),l(R,{from:function(e){var t="function"==typeof this?this:R,r=h(c(e)[s]);if(r){var n=c(r.call(e));return n.constructor===t?n:new t(function(e){return n.subscribe(e)})}return new t(function(t){var r=!1;return a(function(){if(!r){try{if(p(e,!1,function(e){if(t.next(e),r)return y})===y)return}catch(e){if(r)throw e;return void t.error(e)}t.complete()}}),function(){r=!0}})},of:function(){for(var e=0,t=arguments.length,r=Array(t);e<t;)r[e]=arguments[e++];return new("function"==typeof this?this:R)(function(e){var t=!1;return a(function(){if(!t){for(var n=0;n<r.length;++n)if(e.next(r[n]),t)return;e.complete()}}),function(){t=!0}})}}),d(R.prototype,s,function(){return this}),n(n.G,{Observable:R}),r(53)("Observable")},/* 403 */
/***/
function(e,t,r){
// ie9- setTimeout & setInterval additional parameters fix
var n=r(4),i=r(0),o=n.navigator,a=[].slice,s=!!o&&/MSIE .\./.test(o.userAgent),u=function(e){return function(t,r){var n=arguments.length>2,i=!!n&&a.call(arguments,2);return e(n?function(){
// eslint-disable-next-line no-new-func
("function"==typeof t?t:Function(t)).apply(this,i)}:t,r)}};i(i.G+i.B+i.F*s,{setTimeout:u(n.setTimeout),setInterval:u(n.setInterval)})},/* 404 */
/***/
function(e,t,r){var n=r(0),i=r(122);n(n.G+n.B,{setImmediate:i.set,clearImmediate:i.clear})},/* 405 */
/***/
function(e,t,r){for(var n=r(121),i=r(49),o=r(19),a=r(4),s=r(18),u=r(63),c=r(7),f=c("iterator"),l=c("toStringTag"),d=u.Array,p={CSSRuleList:!0,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,// TODO: Not spec compliant, should be false.
MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,// TODO: Not spec compliant, should be false.
TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=i(p),h=0;h<y.length;h++){var v,g=y[h],b=p[g],m=a[g],_=m&&m.prototype;if(_&&(_[f]||s(_,f,d),_[l]||s(_,l,g),u[g]=d,b))for(v in n)_[v]||o(_,v,n[v],!0)}},/* 406 */
/***/
function(e,t,r){/* WEBPACK VAR INJECTION */
(function(t){/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */
!function(t){"use strict";function wrap(e,t,r,n){
// If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
var i=t&&t.prototype instanceof Generator?t:Generator,o=Object.create(i.prototype),a=new Context(n||[]);
// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
return o._invoke=makeInvokeMethod(e,r,a),o}
// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function tryCatch(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}
// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}
// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function defineIteratorMethods(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function AsyncIterator(e){function invoke(t,r,n,o){var a=tryCatch(e[t],e,r);if("throw"!==a.type){var s=a.arg,u=s.value;return u&&"object"==typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(e){invoke("next",e,n,o)},function(e){invoke("throw",e,n,o)}):Promise.resolve(u).then(function(e){
// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration. If the Promise is rejected, however, the
// result for this iteration will be rejected with the same
// reason. Note that rejections of yielded Promises are not
// thrown back into the generator function, as is the case
// when an awaited Promise is rejected. This difference in
// behavior between yield and await is important, because it
// allows the consumer to decide what to do with the yielded
// rejection (swallow it and continue, manually .throw it back
// into the generator, abandon iteration, whatever). With
// await, by contrast, there is no opportunity to examine the
// rejection reason outside the generator function, so the
// only option is to throw it from the await expression, and
// let the generator function handle the exception.
s.value=e,n(s)},o)}o(a.arg)}function enqueue(e,t){function callInvokeWithMethodAndArg(){return new Promise(function(r,n){invoke(e,t,r,n)})}
// If enqueue has been called before, then we want to wait until
// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
// Avoid propagating failures to Promises returned by later
// invocations of the iterator.
return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}"object"==typeof t.process&&t.process.domain&&(invoke=t.process.domain.bind(invoke));var r;
// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
this._invoke=enqueue}function makeInvokeMethod(e,t,r){var n=l;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===i)throw o;
// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return doneResult()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=maybeInvokeDelegate(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)
// Setting context._sent for legacy support of Babel's
// function.sent implementation.
r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=tryCatch(e,t,r);if("normal"===u.type){if(
// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
n=r.done?y:d,u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,
// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
r.method="throw",r.arg=u.arg)}}}
// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function maybeInvokeDelegate(e,t){var n=e.iterator[t.method];if(n===r){if(
// A .throw or .return when the delegate iterator has no .throw
// method always terminates the yield* loop.
t.delegate=null,"throw"===t.method){if(e.iterator.return&&(
// If the delegate iterator has a return method, give it a
// chance to clean up.
t.method="return",t.arg=r,maybeInvokeDelegate(e,t),"throw"===t.method))
// If maybeInvokeDelegate(context) changed context.method from
// "return" to "throw", let that override the TypeError below.
return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var i=tryCatch(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var o=i.arg;
// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
// Resume execution at the desired location (see delegateYield).
// If context.method was "throw" but the delegate handled the
// exception, let the outer generator proceed normally. If
// context.method was "next", forget context.arg since it has been
// "consumed" by the delegate iterator. If context.method was
// "return", allow the original .return call to continue in the
// outer generator.
// The delegate iterator is finished, so forget it and continue with
// the outer generator.
return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function pushTryEntry(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function resetTryEntry(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Context(e){
// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function next(){for(;++n<e.length;)if(i.call(e,n))return next.value=e[n],next.done=!1,next;return next.value=r,next.done=!0,next};return o.next=o}}
// Return an iterator with no values.
return{next:doneResult}}function doneResult(){return{value:r,done:!0}}var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"==typeof e,f=t.regeneratorRuntime;if(f)
// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
return void(c&&(e.exports=f));
// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
f=t.regeneratorRuntime=c?e.exports:{},f.wrap=wrap;var l="suspendedStart",d="suspendedYield",p="executing",y="completed",h={},v={};v[a]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(values([])));b&&b!==n&&i.call(b,a)&&(
// This environment has a native %IteratorPrototype%; use it instead
// of the polyfill.
v=b);var m=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(v);GeneratorFunction.prototype=m.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[u]=GeneratorFunction.displayName="GeneratorFunction",f.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;
// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
return!!t&&(t===GeneratorFunction||"GeneratorFunction"===(t.displayName||t.name))},f.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,GeneratorFunctionPrototype):(e.__proto__=GeneratorFunctionPrototype,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(m),e},
// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
f.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[s]=function(){return this},f.AsyncIterator=AsyncIterator,
// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
f.async=function(e,t,r,n){var i=new AsyncIterator(wrap(e,t,r,n));return f.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},
// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
defineIteratorMethods(m),m[u]="Generator",
// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(e){var t=[];for(var r in e)t.push(r);
// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return t.reverse(),function next(){for(;t.length;){var r=t.pop();if(r in e)return next.value=r,next.done=!1,next}
// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
return next.done=!0,next}},f.values=values,Context.prototype={constructor:Context,reset:function(e){if(this.prev=0,this.next=0,
// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(resetTryEntry),!e)for(var t in this)
// Not sure about the optimal order of these conditions:
"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function handle(n,i){
// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
return a.type="throw",a.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}if(this.done)throw e;for(var t=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)
// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return handle("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(
// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;resetTryEntry(r)}return i}}
// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){
// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
return this.delegate={iterator:values(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),h}}}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
"object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(t,r(144))},/* 407 */
/***/
function(e,t,r){r(408),e.exports=r(30).RegExp.escape},/* 408 */
/***/
function(e,t,r){
// https://github.com/benjamingr/RexExp.escape
var n=r(0),i=r(409)(/[\\^$*+?.()|[\]{}]/g,"\\$&");n(n.S,"RegExp",{escape:function(e){return i(e)}})},/* 409 */
/***/
function(e,t){e.exports=function(e,t){var r=t===Object(t)?function(e){return t[e]}:t;return function(t){return String(t).replace(e,r)}}},/* 410 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(96),a=_interopRequireDefault(o),s=r(1),u=_interopRequireDefault(s),c=r(2),f=_interopRequireDefault(c),l=r(434),d=r(11),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(d),y=r(435),h=_interopRequireDefault(y),v=r(465),g=_interopRequireDefault(v),b=r(469),m=_interopRequireDefault(b),_=r(480),R=_interopRequireDefault(_),w=r(15),S=r(99),O=_interopRequireDefault(S),P=r(482),k=_interopRequireDefault(P),M=r(483),L=_interopRequireDefault(M),x=r(484),E=r(138),D=r(485),U=_interopRequireDefault(D),A=r(487),j=_interopRequireDefault(A),I=r(488),C=_interopRequireDefault(I),T=r(493),N=_interopRequireDefault(T),F=r(494),q=_interopRequireDefault(F),H=r(505),B=_interopRequireDefault(H),G=r(507),K=_interopRequireDefault(G),V=p.getLogger("RuntimeUA"),W=function(){/**
   * Create a new instance of Runtime User Agent
   * @param {descriptor} runtimeDescriptor - pass all the hyperty runtime descriptor
   * @param {runtimeFactory} runtimeFactory - Specific implementation for the environment where the core runtime will run;
   * @param {domain} domainURL - specify the domain base for the runtime;
   */
function RuntimeUA(e,t,r){if((0,u.default)(this,RuntimeUA),!e)throw new Error("The runtime descriptor is a needed parameter");if(!t)throw new Error("The sandbox factory is a needed parameter");if(!r)throw new Error("You need the domain of runtime");if(
// Configuration object with information related with servers
this.runtimeConfiguration=(0,a.default)({domain:r},x.runtimeConfiguration),this.runtimeFactory=t,this.runtimeCatalogue=t.createRuntimeCatalogue(),this.log=V,this.logLevels=l.log,e.p2pHandlerStub&&"string"==typeof e.p2pHandlerStub&&e.p2pHandlerStub.includes("://")?this.p2p=!0:this.p2p=!1,E.runtimeUtils.runtimeDescriptor=e,this.runtimeUtils=E.runtimeUtils,"function"!=typeof t.createRuntimeCatalogue)throw new Error("Check your Runtime Factory because it needs the Runtime Catalogue implementation");if(this.persistenceManager=t.createRuntimeCatalogue(),"function"!=typeof t.persistenceManager)throw new Error("Check your Runtime Factory because it needs the Persistence Manager implementation");if(this.persistenceManager=t.persistenceManager(),"function"!=typeof t.storageManager)throw new Error("Check your Runtime Factory because it needs the Storage Manager implementation");this.storageManager=t.storageManager(),"function"==typeof t.runtimeCapabilities?this.runtimeCapabilities=t.runtimeCapabilities(this.storageManager):V.info("Check your RuntimeFactory because it needs the Runtime Capabilities implementation")}/**
   * Intialize the installation of runtime
   *
   * @access public
   * @return {Promise<Boolean, Error>} this is Promise and if the installation process happened without any problems returns true otherwise the error.
   *
   * @memberOf RuntimeUA
   */
return(0,f.default)(RuntimeUA,[{key:"init",value:function(){var e=this;return new i.default(function(t,r){e.domain=e.runtimeConfiguration.domain;try{var n=e.runtimeCapabilities.getRuntimeCapabilities(),o=e.storageManager.get("runtime:URL"),s=e.storageManager.get("syncherManager:ObjectURLs"),u=e.storageManager.get("hypertyResources"),c=e.storageManager.get("p2pHandler:URL");i.default.all([o,n,s,u,c]).then(function(t){return e.runtimeURL=t[0]?t[0].runtimeURL:t[0],e.runtimeURL||(e.runtimeURL="runtime://"+e.domain+"/"+(0,w.generateGUID)(),e.storageManager.set("runtime:URL",1,{runtimeURL:e.runtimeURL})),e.capabilities=t[1],(0,a.default)(E.runtimeUtils.runtimeCapabilities.constraints,t[1]),e._dataObjectsStorage=new C.default(e.storageManager,t[2]||{}),e._hypertyResources=t[3]||{},e.p2pHandlerURL=t[4]?t[4].p2pHandlerURL:t[4],e.p2pHandlerURL||(e.p2pHandlerURL=e.runtimeURL+"/p2phandler/"+(0,w.generateGUID)(),V.info("[RuntimeUA - init] P2PHandlerURL: ",e.p2pHandlerURL),e.storageManager.set("p2pHandler:URL",1,{p2pHandlerURL:e.p2pHandlerURL})),e._loadComponents()}).then(function(t){return e._hypertyResourcesStorage=new N.default(e.runtimeURL,e.messageBus,e.storageManager,e._hypertyResources),e.p2p?(V.info("[RuntimeUA - init] load p2pHandler: ",t),e._loadP2PHandler()):(V.info("[RuntimeUA - init] P2P not supported"),"P2P Not Supported")}).then(function(e){V.info("[runtime ua - init] - status: ",e),t(!0)},function(e){V.error("ERROR: ",e),t(!0)})}catch(e){r(e)}})}},{key:"_loadP2PHandler",value:function(){var e=this;return new i.default(function(t){var r=E.runtimeUtils.runtimeDescriptor,n=r.p2pHandlerStub,i={isHandlerStub:!0,runtimeURL:e.runtimeURL};V.log("[RuntimeUA loadP2PHandler] P2PStubHandler: ",n),e.loader.loadStub(n,i).then(function(r){var n=e.runtimeURL+"/ua",i={type:"subscribe",from:n,to:"domain://msg-node."+e.domain+"/sm",body:{subscribe:[r.url],source:e.runtimeURL}};e.messageBus.addListener(n,function(e){V.log("[runtime ua - listener] - receive msg: ",e)}),e.messageBus.postMessage(i,function(e){V.log("[runtime ua - postMessage] - reply: ",e)}),V.info("[runtime ua - p2p installation] - success: ",r),t(!0)}).catch(function(e){V.info("[runtime ua - p2p installation] - fail: ",e),t(!1)})})}},{key:"_loadComponents",value:function(){var e=this;return new i.default(function(t,r){try{
// Prepare the on instance to handle with the fallbacks and runtimeCatalogue;
e.descriptorInstance=new L.default(e.runtimeURL,e.runtimeCatalogue,e.runtimeConfiguration),
// Prepare the loader to load the hyperties, protostubs and idpproxy;
e.loader=new k.default(e.runtimeURL,e.runtimeConfiguration,e.descriptorInstance),
// Instantiate the identity Module
e.identityModule=new g.default(e.runtimeURL,e.runtimeCapabilities,e.storageManager,e._dataObjectsStorage);
// Use the sandbox factory to create an AppSandbox;
// In the future can be decided by policyEngine if we need
// create a AppSandbox or not;
var n=e.runtimeFactory.createAppSandbox();
// Instantiate the Registry Module
e.registry=new h.default(e.runtimeURL,n,e.identityModule,e.runtimeCatalogue,e.runtimeCapabilities,e.storageManager,e.p2pHandlerURL),
// Set the loader to load Hyperties, Stubs and IdpProxies
e.registry.loader=e.loader,
// Instantiate the Message Bus
e.messageBus=new R.default(e.registry),
// Prepare the address allocation instance;
e.addressAllocation=new O.default(e.runtimeURL,e.messageBus,e.registry),
// Instantiate the Policy Engine
e.policyEngine=new m.default(new K.default(e.runtimeURL,e.identityModule,e.registry,e.storageManager,e.runtimeCapabilities)),e.messageBus.pipeline.handlers=[
// Policy message authorise
function(t){e.policyEngine.authorise(t.msg).then(function(e){t.msg=e,t.next()}).catch(function(e){V.error(e),t.fail(e)})}],
// Instantiate the Graph Connector
e.graphConnector=new U.default(e.runtimeURL,e.messageBus,e.storageManager),
// Instantiate Discovery
e.coreDiscovery=new j.default(e.runtimeURL,e.messageBus,e.graphConnector,e.runtimeFactory,e.registry),
// Add to App Sandbox the listener;
n.addListener("*",function(t){e.messageBus.postMessage(t)}),
// Register messageBus on Registry
e.registry.messageBus=e.messageBus,
// Policy Engine
e.policyEngine.messageBus=e.messageBus,
// Register messageBus on IDM
e.identityModule.messageBus=e.messageBus,
// Register registry on IdentityModule
e.identityModule.registry=e.registry,
// Register coreDiscovery on IdentityModule
e.identityModule.coreDiscovery=e.coreDiscovery,
// Use sandbox factory to use specific methods
// and set the message bus to the factory
e.runtimeFactory.messageBus=e.messageBus,
// Instanciate the SyncherManager;
e.syncherManager=new q.default(e.runtimeURL,e.messageBus,e.registry,e.runtimeCatalogue,e.storageManager,null,e._dataObjectsStorage,e.identityModule),
// Set into loader the needed components;
e.loader.runtimeURL=e.runtimeURL,e.loader.messageBus=e.messageBus,e.loader.registry=e.registry,e.loader.runtimeCatalogue=e.runtimeCatalogue,e.loader.runtimeFactory=e.runtimeFactory,
//Instantiate Discovery Lib for notification testing
// this.discovery = new Discovery("hyperty://localhost/test", this.runtimeURL, this.messageBus);
// this.loadStub("localhost");
// setTimeout(() => {
//   this.discovery.discoverHypertiesDO("user://google.com/openidtest20@gmail.com")
//   .then(hyperties => {
//     hyperties.forEach(hyperty =>{
//       hyperty.onLive(() => log.log(`Notification from ${hyperty.data.hypertyID} changed to live`));
//       hyperty.onDisconnected(() => log.log(`Notification from ${hyperty.data.hypertyID} changed to disconnected`));
//     });
//   });
// }, 2000);
// Instanciate the SubscriptionManager;
e.subscriptionManager=new B.default(e.runtimeURL,e.messageBus,e.storageManager);
// this.subscriptionManager.init().then(()=>{
//   resolve(true);
// });
var o=[];o.push(e.subscriptionManager.init()),o.push(e.identityModule.loadIdentities()),o.push(e.identityModule.loadSessionKeys()),i.default.all(o).then(function(e){3===e.length?t(!0):r("[RuntimeUA._loadComponents] Error ] ",e)}).catch(function(e){throw Error(e)})}catch(e){r(e)}})}},{key:"loadHyperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments[2];if(!e)throw new Error("Hyperty descriptor url parameter is needed");return this.loader.loadHyperty(e,t,r)}},{key:"loadStub",value:function(e){if(!e)throw new Error("ProtoStub descriptor url parameter is needed");return this.loader.loadStub(e)}},{key:"loadIdpProxy",value:function(e){if(!e)throw new Error("The IDP Proxy URL is a needed parameter, could be a DOMAIN or a URL");return this.loader.loadIdpProxy(e)}},{key:"close",value:function(){var e=this;return V.info("Unregister all hyperties"),new i.default(function(t,r){e.registry.unregisterAllHyperties().then(function(e){V.info("All the hyperties are unregisted with Success:",e),t(!0)}).catch(function(e){V.error("Failed to unregister the hyperties",e),r(!1)})})}}]),RuntimeUA}();t.default=W,e.exports=t.default},/* 411 */
/***/
function(e,t,r){r(179),r(126),r(187),r(420),r(427),r(428),e.exports=r(13).Promise},/* 412 */
/***/
function(e,t,r){var n=r(127),i=r(128);
// true  -> String#at
// false -> String#codePointAt
e.exports=function(e){return function(t,r){var o,a,s=String(i(t)),u=n(r),c=s.length;return u<0||u>=c?e?"":void 0:(o=s.charCodeAt(u),o<55296||o>56319||u+1===c||(a=s.charCodeAt(u+1))<56320||a>57343?e?s.charAt(u):o:e?s.slice(u,u+2):a-56320+(o-55296<<10)+65536)}}},/* 413 */
/***/
function(e,t,r){"use strict";var n=r(131),i=r(73),o=r(95),a={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
r(57)(a,r(22)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(a,{next:i(1,r)}),o(e,t+" Iterator")}},/* 414 */
/***/
function(e,t,r){var n=r(38),i=r(39),o=r(67);e.exports=r(43)?Object.defineProperties:function(e,t){i(e);for(var r,a=o(t),s=a.length,u=0;s>u;)n.f(e,r=a[u++],t[r]);return e}},/* 415 */
/***/
function(e,t,r){
// false -> Array#indexOf
// true  -> Array#includes
var n=r(44),i=r(132),o=r(416);e.exports=function(e){return function(t,r,a){var s,u=n(t),c=i(u.length),f=o(a,c);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&r!=r){for(;c>f;)
// eslint-disable-next-line no-self-compare
if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},/* 416 */
/***/
function(e,t,r){var n=r(127),i=Math.max,o=Math.min;e.exports=function(e,t){return e=n(e),e<0?i(e+t,0):o(e,t)}},/* 417 */
/***/
function(e,t,r){"use strict";var n=r(418),i=r(419),o=r(74),a=r(44);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
e.exports=r(180)(Array,"Array",function(e,t){this._t=a(e),// target
this._i=0,// next index
this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,r):"values"==t?i(0,e[r]):i(0,[r,e[r]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
o.Arguments=o.Array,n("keys"),n("values"),n("entries")},/* 418 */
/***/
function(e,t){e.exports=function(){}},/* 419 */
/***/
function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},/* 420 */
/***/
function(e,t,r){"use strict";var n,i,o,a,s=r(92),u=r(21),c=r(65),f=r(188),l=r(26),d=r(42),p=r(93),y=r(421),h=r(422),v=r(192),g=r(193).set,b=r(424)(),m=r(136),_=r(194),R=r(195),w=u.TypeError,S=u.process,O=u.Promise,P="process"==f(S),k=function(){},M=i=m.f,L=!!function(){try{
// correct subclassing with @@species support
var e=O.resolve(1),t=(e.constructor={})[r(22)("species")]=function(e){e(k,k)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(P||"function"==typeof PromiseRejectionEvent)&&e.then(k)instanceof t}catch(e){}}(),x=function(e){var t;return!(!d(e)||"function"!=typeof(t=e.then))&&t},E=function(e,t){if(!e._n){e._n=!0;var r=e._c;b(function(){for(var n=e._v,i=1==e._s,o=0;r.length>o;)!function(t){var r,o,a=i?t.ok:t.fail,s=t.resolve,u=t.reject,c=t.domain;try{a?(i||(2==e._h&&A(e),e._h=1),!0===a?r=n:(c&&c.enter(),r=a(n),c&&c.exit()),r===t.promise?u(w("Promise-chain cycle")):(o=x(r))?o.call(r,s,u):s(r)):u(n)}catch(e){u(e)}}(r[o++]);// variable length - can't use forEach
e._c=[],e._n=!1,t&&!e._h&&D(e)})}},D=function(e){g.call(u,function(){var t,r,n,i=e._v,o=U(e);if(o&&(t=_(function(){P?S.emit("unhandledRejection",i,e):(r=u.onunhandledrejection)?r({promise:e,reason:i}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",i)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
e._h=P||U(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},U=function(e){if(1==e._h)return!1;for(var t,r=e._a||e._c,n=0;r.length>n;)if(t=r[n++],t.fail||!U(t.promise))return!1;return!0},A=function(e){g.call(u,function(){var t;P?S.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},j=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,// unwrap
t._v=e,t._s=2,t._a||(t._a=t._c.slice()),E(t,!0))},I=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;// unwrap
try{if(r===e)throw w("Promise can't be resolved itself");(t=x(e))?b(function(){var n={_w:r,_d:!1};// wrap
try{t.call(e,c(I,n,1),c(j,n,1))}catch(e){j.call(n,e)}}):(r._v=e,r._s=1,E(r,!1))}catch(e){j.call({_w:r,_d:!1},e)}}};
// constructor polyfill
L||(
// 25.4.3.1 Promise(executor)
O=function(e){y(this,O,"Promise","_h"),p(e),n.call(this);try{e(c(I,this,1),c(j,this,1))}catch(e){j.call(this,e)}},
// eslint-disable-next-line no-unused-vars
n=function(e){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},n.prototype=r(425)(O.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(e,t){var r=M(v(this,O));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=P?S.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&E(this,!1),r.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new n;this.promise=e,this.resolve=c(I,e,1),this.reject=c(j,e,1)},m.f=M=function(e){return e===O||e===a?new o(e):i(e)}),l(l.G+l.W+l.F*!L,{Promise:O}),r(95)(O,"Promise"),r(426)("Promise"),a=r(13).Promise,
// statics
l(l.S+l.F*!L,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(e){var t=M(this);return(0,t.reject)(e),t.promise}}),l(l.S+l.F*(s||!L),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(e){return R(s&&this===a?O:this,e)}}),l(l.S+l.F*!(L&&r(196)(function(e){O.all(e).catch(k)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(e){var t=this,r=M(t),n=r.resolve,i=r.reject,o=_(function(){var r=[],o=0,a=1;h(e,!1,function(e){var s=o++,u=!1;r.push(void 0),a++,t.resolve(e).then(function(e){u||(u=!0,r[s]=e,--a||n(r))},i)}),--a||n(r)});return o.e&&i(o.v),r.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(e){var t=this,r=M(t),n=r.reject,i=_(function(){h(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return i.e&&n(i.v),r.promise}})},/* 421 */
/***/
function(e,t){e.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},/* 422 */
/***/
function(e,t,r){var n=r(65),i=r(189),o=r(190),a=r(39),s=r(132),u=r(191),c={},f={},t=e.exports=function(e,t,r,l,d){var p,y,h,v,g=d?function(){return e}:u(e),b=n(r,l,t?2:1),m=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");
// fast case for arrays with default iterator
if(o(g)){for(p=s(e.length);p>m;m++)if((v=t?b(a(y=e[m])[0],y[1]):b(e[m]))===c||v===f)return v}else for(h=g.call(e);!(y=h.next()).done;)if((v=i(h,b,y.value,t))===c||v===f)return v};t.BREAK=c,t.RETURN=f},/* 423 */
/***/
function(e,t){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
e.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},/* 424 */
/***/
function(e,t,r){var n=r(21),i=r(193).set,o=n.MutationObserver||n.WebKitMutationObserver,a=n.process,s=n.Promise,u="process"==r(75)(a);e.exports=function(){var e,t,r,c=function(){var n,i;for(u&&(n=a.domain)&&n.exit();e;){i=e.fn,e=e.next;try{i()}catch(n){throw e?r():t=void 0,n}}t=void 0,n&&n.enter()};
// Node.js
if(u)r=function(){a.nextTick(c)};else if(o){var f=!0,l=document.createTextNode("");new o(c).observe(l,{characterData:!0}),// eslint-disable-line no-new
r=function(){l.data=f=!f}}else if(s&&s.resolve){var d=s.resolve();r=function(){d.then(c)}}else r=function(){
// strange IE + webpack dev server bug - use .call(global)
i.call(n,c)};return function(n){var i={fn:n,next:void 0};t&&(t.next=i),e||(e=i,r()),t=i}}},/* 425 */
/***/
function(e,t,r){var n=r(57);e.exports=function(e,t,r){for(var i in t)r&&e[i]?e[i]=t[i]:n(e,i,t[i]);return e}},/* 426 */
/***/
function(e,t,r){"use strict";var n=r(21),i=r(13),o=r(38),a=r(43),s=r(22)("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:n[e];a&&t&&!t[s]&&o.f(t,s,{configurable:!0,get:function(){return this}})}},/* 427 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-promise-finally
var n=r(26),i=r(13),o=r(21),a=r(192),s=r(195);n(n.P+n.R,"Promise",{finally:function(e){var t=a(this,i.Promise||o.Promise),r="function"==typeof e;return this.then(r?function(r){return s(t,e()).then(function(){return r})}:e,r?function(r){return s(t,e()).then(function(){throw r})}:e)}})},/* 428 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-promise-try
var n=r(26),i=r(136),o=r(194);n(n.S,"Promise",{try:function(e){var t=i.f(this),r=o(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}})},/* 429 */
/***/
function(e,t,r){r(430),e.exports=r(13).Object.assign},/* 430 */
/***/
function(e,t,r){
// 19.1.3.1 Object.assign(target, source)
var n=r(26);n(n.S+n.F,"Object",{assign:r(431)})},/* 431 */
/***/
function(e,t,r){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var n=r(67),i=r(137),o=r(77),a=r(76),s=r(184),u=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
e.exports=!u||r(66)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=u({},e)[r]||Object.keys(u({},t)).join("")!=n})?function(e,t){for(// eslint-disable-line no-unused-vars
var r=a(e),u=arguments.length,c=1,f=i.f,l=o.f;u>c;)for(var d,p=s(arguments[c++]),y=f?n(p).concat(f(p)):n(p),h=y.length,v=0;h>v;)l.call(p,d=y[v++])&&(r[d]=p[d]);return r}:u},/* 432 */
/***/
function(e,t,r){r(433);var n=r(13).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},/* 433 */
/***/
function(e,t,r){var n=r(26);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
n(n.S+n.F*!r(43),"Object",{defineProperty:r(38).f})},/* 434 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=void 0;var n=r(11),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=i.default.getLogger("address-allocation"),a=i.default.getLogger("Bus"),s=i.default.getLogger("MessageBus"),u=i.default.getLogger("CoreDiscovery"),c=i.default.getLogger("GraphConnector"),f=i.default.getLogger("HypertyResourcesStorage"),l=i.default.getLogger("IdentityModule"),d=i.default.getLogger("PEP"),p=i.default.getLogger("P2PConnectionResolve"),y=i.default.getLogger("Registry"),h=i.default.getLogger("RuntimeUA"),v=i.default.getLogger("Loader"),g=i.default.getLogger("Descriptors"),b=i.default.getLogger("DataObjectsStorage"),m=i.default.getLogger("Subscription"),_=i.default.getLogger("SubscriptionManager"),R=i.default.getLogger("ObserverObject"),w=i.default.getLogger("ReporterObject"),S=i.default.getLogger("SynSubscription"),O=i.default.getLogger("SyncherManager");t.log=i.default,/**
  5 actual logging methods, ordered and available as:

      0 - log.trace(msg)
      1 - log.debug(msg)
      2 - log.info(msg)
      3 - log.warn(msg)
      4 - log.error(msg)

  log.log(msg) is also available, as an alias for log.debug(msg), to improve compatibility with console, and make migration easier.

  Exact output formatting of these will depend on the console available in the current context of your application. For example, many environments will include a full stack trace with all trace() calls, and icons or similar to highlight other calls.

  These methods should never fail in any environment, even if no console object is currently available, and should always fall back to an available log method even if the specific method called (e.g. warn) isn't available.

  Be aware that all this means that these method won't necessarily always produce exactly the output you expect in every environment; loglevel only guarantees that these methods will never explode on you, and that it will call the most relevant method it can find, with your argument. Firefox is a notable example here: due to a current Firefox bug log.trace(msg) calls in Firefox will print only the stacktrace, and won't include any passed message arguments.

*/
// address-allocation
o.setLevel(5),
// Bus
a.setLevel(0),
// MessageBus
s.setLevel(0),
// CoreDiscovery
u.setLevel(5),
// GraphConnector
c.setLevel(5),
// HypertyResourcesStorage
f.setLevel(0),
// IdentityModule
l.setLevel(0),
// PEP
d.setLevel(5),
// P2PConnectionResolve
p.setLevel(0),
// Registry
y.setLevel(0),
// RuntimeUA
h.setLevel(0),
// Loader
v.setLevel(0),
// Descriptors
g.setLevel(0),
// DataObjectsStorage
b.setLevel(5),
// Subscription
m.setLevel(5),
// SubscriptionManager
_.setLevel(5),
// ObserverObject
R.setLevel(3),
// ReporterObject
w.setLevel(3),
// SynSubscription
S.setLevel(3),
// SyncherManager
O.setLevel(3)},/* 435 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(59),i=_interopRequireDefault(n),o=r(12),a=_interopRequireDefault(o),s=r(1),u=_interopRequireDefault(s),c=r(2),f=_interopRequireDefault(c),l=r(11),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=r(138),y=r(438),h=r(99),v=_interopRequireDefault(h),g=r(461),b=_interopRequireDefault(g),m=r(463),_=_interopRequireDefault(m),R=r(15);r(464);var w=r(201),S=d.getLogger("Registry"),O={CREATED:"created",LIVE:"live",DEPLOYING:"deploying",DEPLOYED:"deployed",PROGRESS:"in-progress",DISCONNECTED:"disconnected",FAILED:"deployment-failed",DEAD:"dead"},P=function(){/**
  * To initialise the Runtime Registry with the RuntimeURL that will be the basis to derive the internal runtime addresses when allocating addresses to internal runtime component. In addition, the Registry domain back-end to be used to remotely register Runtime components, is also passed as input parameter.
  * @param  {MessageBus}          msgbus                msgbus
  * @param  {HypertyRuntimeURL}   runtimeURL            runtimeURL
  * @param  {AppSandbox}          appSandbox            appSandbox
  * @param  {runtimeCatalogue}    runtimeCatalogue      runtimeCatalogue
  * @param  {DomainURL}           remoteRegistry        remoteRegistry
  * @param  {storageManager}      storageManager
  */
function Registry(e,t,r,n,i,o,a,s){
// how some functions receive the parameters for example:
// new Registry('hyperty-runtime://sp1/123', appSandbox, idModule, remoteRegistry);
// registry.registerStub(sandbox, 'sp1');
// registry.registerHyperty(sandBox, 'hyperty-runtime://sp1/123');
// registry.resolve('hyperty-runtime://sp1/123');
if((0,u.default)(this,Registry),!e)throw new Error("runtimeURL is missing.");if(!o)throw new Error("storageManager is missing.");/*if (!remoteRegistry) throw new Error('remoteRegistry is missing');*/
var c=this;c.registryURL=e+"/registry/",c.appSandbox=t,c.runtimeURL=e,c.p2pHandlerURL=a,c.runtimeCatalogue=n,c.remoteRegistry=s,c.idModule=r,c.storageManager=o,c.runtimeCapabilities=i,c.identifier=(0,R.generateGUID)(),c.registrationRetries=5,// number of attempts to register Hyperties and DataObjects when errors occurs
// the expires in 3600, represents 1 hour
//the expires is in seconds, unit of measure received by the domain registry
c.expiresTime=3600,c.hypertiesListToRemove={},c.hypertiesList=[],c.remoteHypertyList=[],c.remoteDataObjectList=[],c.idpLegacyProxyList={},c.watchingYou=new w.WatchingYou,c.p2pHandlerStub={},c.p2pRequesterStub=c.watchingYou.watch("p2pRequesterStub",{},!0),c.p2pConnectionList=c.watchingYou.watch("p2pConnectionList",{},!0),c.p2pHandlerAssociation={},c.protostubsList=c.watchingYou.watch("protostubsList",{},!0),c.idpProxyList=c.watchingYou.watch("idpProxyList",{},!0),c.dataObjectList={},c.subscribedDataObjectList={},c.sandboxesList={sandbox:{},appSandbox:{}},c.pepList={},c.registries={},c._domain=(0,R.divideURL)(c.registryURL).domain,c.sandboxesList.appSandbox[e]=t;var f=new _.default(c);c._p2pConnectionResolve=f}return(0,f.default)(Registry,[{key:"_getIdentityAssociated",value:function(e,t){var r=this;for(var n in r.hypertiesList){var i=r.hypertiesList[n];if(i._hypertyURL===t)switch(e){case"username":return i._user.username;case"cn":return i._user.cn;case"locale":return i._user.locale;case"avatar":return i._user.avatar;case"userURL":return i._user.userURL;case".":return i._user;default:return""}}return""}},{key:"getAppSandbox",value:function(){return this.appSandbox}},{key:"getHypertyOwner",value:function(e){var t=this,r=void 0;for(var n in t.hypertiesList){var i=t.hypertiesList[n];i.hypertyURL===e&&(r=i.user.userURL)}return r}},{key:"getHypertyName",value:function(e){var t=this,r="hyperty"===(0,R.divideURL)(e).type,n=void 0,i=r?e:t.getReporterURLSynchonous(e);for(var o in t.hypertiesList){var a=t.hypertiesList[o];if(a.hypertyURL===i){n=a.objectName;break}}return n}},{key:"getReporterURL",value:function(e){var t=this;return new a.default(function(r,n){var i=t.dataObjectList[e];i?r(i.reporter):n("No reporter was found")})}},{key:"getReporterURLSynchonous",value:function(e){var t=this,r=t.dataObjectList[e];return r?r.reporter:void 0}},{key:"getDataObjectSubscriberHyperty",value:function(e){return this.subscribedDataObjectList[e]}},{key:"registerSubscribedDataObject",value:function(e,t){var r=this;void 0===r.subscribedDataObjectList[e]&&(r.subscribedDataObjectList[e]=t)}},{key:"getPreAuthSubscribers",value:function(e){var t=this,r=t.dataObjectList[e],n=[];return r&&(n=r.authorise),n}},{key:"unregisterAllHyperties",value:function(){var e=this,t=[];return new a.default(function(r,n){for(var i in e.hypertiesList){var o=e.hypertiesList[i],s=e.unregisterHypertyInstance(o.hypertyURL);t.push(s)}a.default.all(t).then(function(){r("successfully unregistered all hyperties")},function(e){n(e)})})}},{key:"unregisterHypertyInstance",value:function(e){
//TODO working but the user
var t=this,r={type:"execute",from:t.registryURL,to:e,body:{method:"close"}};
// Send message to hyperty to close
t._messageBus.postMessage(r,function(r){S.log("[Registry.unregisterHypertyInstance] Close Reply",r);var n={type:"update",from:t.registryURL,to:"domain://registry."+t._domain,body:{resource:"/hyperty/"+e,value:"disconnected",attribute:"status"}};t._messageBus.postMessage(n,function(e){S.log("[Registry] unregister hyperty Reply",e)})})}},{key:"unregisterDataObject",value:function(e){var t=this,r={type:"update",from:t.registryURL,to:"domain://registry."+t._domain,body:{resource:e,value:{status:"disconnected"}}};t._messageBus.postMessage(r,function(e){S.log("[Registry] unregister dataObject Reply",e)})}},{key:"deleteDataObjectInstance",value:function(e){var t=this,r={type:"delete",from:t.registryURL,to:"domain://registry."+t._domain,body:{value:{name:e}}};t._messageBus.postMessage(r,function(e){S.log("[Registry] unregister dataObject Reply",e)})}},{key:"updateHypertyInstance",value:function(e,t){var r=this,n={type:"UPDATE",from:r.registryURL,to:"domain://registry."+r._domain,body:{resource:e,value:t}};r._messageBus.post.postMessage(n,function(e){})}},{key:"registerSubscriber",value:function(e,t){var r=this,n=r.dataObjectList[e];n&&(n.subscribers||(n.subscribers=[]),n.subscribers.push(t),r.dataObjectList[e]=n)}},{key:"getDataObjectSubscribers",value:function(e){var t=this,r=t.dataObjectList[e];if(r)return r.subscribers;throw"No dataObject was found"}},{key:"registerDataObject",value:function(e){var t=this,r=(0,R.deepClone)(e);return new a.default(function(n,o){var a=[],s=r.url.split(":");a.push(s[0]),t.storageManager.get("registry:DataObjectURLs").then(function(s){s||(s={}),
//update the list with the new elements
s[e.name+e.schema+e.resources+e.reporter]=e.url;var u=void 0,c=void 0;0!==(0,i.default)(t.p2pHandlerStub).length&&(u=t.p2pHandlerStub[t.runtimeURL].url,c=p.runtimeUtils.runtimeDescriptor.p2pRequesterStub),r.startingTime=r.created,delete r.authorise,delete r.created,delete r.mutual,delete r.resume,r.expires||(r.expires=t.expiresTime),r.dataSchemes=a,u&&(r.p2pHandler=u,r.p2pRequester=c),t.isInterworkingProtoStub(r.reporter)&&(r.interworking=!0),r.status="live";var f=void 0;e.resume?(S.log("[Registry.registerDataObject] registering previously registered data object URL",r),f={type:"update",to:"domain://registry."+t.registryDomain,from:t.registryURL,body:{resource:r.url,value:{status:"live"}}}):(S.log("[Registry.registerDataObject] registering new data object URL",r),f={type:"create",from:t.registryURL,to:"domain://registry."+t.registryDomain,body:{value:r,policy:"policy"}}),t.dataObjectList[r.url]=e,
// step to obtain the list of all URL registered to updated with the new one.
t.storageManager.set("registry:DataObjectURLs",0,s).then(function(){try{t._messageBus.postMessageWithRetries(f,t._registrationRetries,function(e){
// log.log('[Registry.registerDataObject] ===> registerDataObject Reply: ', reply);
200===e.body.code?n(r):o("error on register DataObject")})}catch(e){S.error(e),o(e)}
//timer to keep the registration alive
// the time is defined by a little less than half of the expires time defined
setInterval(function(){var e={type:"update",from:t.registryURL,to:"domain://registry."+t.registryDomain,body:{resource:r.url,value:{status:"live"},method:"refresh"}};t._messageBus.postMessage(e,function(e){})},r.expires/1.1/2*1e3)}).catch(function(e){S.error("[Registry registerHyperty] Error: ",e),o(e)})})})}},{key:"_getResourcesAndSchemes",value:function(e){var t=this;return new a.default(function(r){var n=void 0;
// check if the hyperty resources is a vector or a string
// TODO delete later when catalogue is fixed
"string"==typeof e.hypertyType?(n=[],n.push(e.hypertyType)):n=e.hypertyType;var i=e.objectName,o=e.dataObjects,s=[];
//this will create a array with a Promise in each position
for(var u in o)s.push(t.runtimeCatalogue.getDataSchemaDescriptor(o[u]));
// as soon as the previous array is completed, this will wait for the resolve of all promises in the array
a.default.all(s).then(function(e){var t=[];for(var o in e){var a=e[o];t.push(a.sourcePackage.sourceCode.properties.scheme.constant)}
// log.log('[Registry] Hyperty Schemas', filteredDataSchemas);
// log.log('[Registry] Hyperty resources', resources);
r({resources:n,dataSchema:t,name:i})})})}},{key:"checkRegisteredURLs",value:function(e,t){var r=this;return new a.default(function(n){var o=e.reporter?"registry:DataObjectURLs":"registry:HypertyURLs";"string"==typeof t&&(o=t&&"hyperty"!==(0,R.divideURL)(t).type?"registry:DataObjectURLs":"registry:HypertyURLs"),r.storageManager.get(o).then(function(a){if(a||(a={}),"string"==typeof t){S.info("[Registry - checkRegisteredURLs] - look for "+t+" on ",a);var s=(0,i.default)(a).map(function(e){var r=a[e].indexOf(t);return a[e][r]});return S.info("[Registry - checkRegisteredURLs] - found "+s.length+" results on ",s),n(1===s.length?s:void 0)}if("registry:HypertyURLs"!==o){var u=e.name+e.schema+e.resources+e.reporter;return n(a[u]?a[u]:void 0)}r._getResourcesAndSchemes(e).then(function(e){return n(a[e.resources+e.dataSchema+e.name]?a[e.resources+e.dataSchema+e.name]:void 0)})})})}},{key:"registerHyperty",value:function(e,t,r,n,o){var s=this,u=void 0;return new a.default(function(a,c){
//assuming descriptor come in this format, the service-provider-domain url is retrieved by a split instruction
//hyperty-catalogue://<service-provider-domain>/<catalogue-object-identifier>
var f=(0,R.divideURL)(t).domain;f.includes("catalogue")&&(f=f.replace("catalogue.","")),s.idModule.getIdentityAssertion(o).then(function(o){var l=o.userProfile,d=l.userURL;void 0===s._messageBus?c("[Registry registerHyperty] MessageBus is undefined"):
//call check if the protostub exist: to be removed
/*  _this.resolve(domainUrl).then(function(a) {
              // log.log('[Registry registerHyperty] stub to domain registry- ', a);*/
s.storageManager.get("registry:HypertyURLs").then(function(o){
// log.log('[Registry registerHyperty] storageManager] - ', urlsList);
s._getResourcesAndSchemes(r).then(function(y){u=y,o||(o={}),o[u.resources+u.dataSchema+u.name]=n.address,s.storageManager.set("registry:HypertyURLs",0,o).then(function(){s.registryDomain=f,
//check whether the received sanbox e ApplicationSandbox or a normal sandbox
"app"===e.type?s.sandboxesList.appSandbox[n.address[0]]=e:"normal"===e.type?s.sandboxesList.sandbox[n.address[0]]=e:c("Wrong SandboxType");var o=void 0,y=void 0;0!==(0,i.default)(s.p2pHandlerStub).length&&(o=s.p2pHandlerStub[s.runtimeURL].url,y=p.runtimeUtils.runtimeDescriptor.p2pRequesterStub);var h=s.runtimeURL,v=new b.default(s.identifier,s.registryURL,t,r,n.address[0],l,"guid",s.runtimeURL,"ctx",o,y,u.dataSchema,u.resources);s.hypertiesList.push(v);
//message to register the new hyperty, within the domain registry
var g=void 0,m=void 0,_=s.expiresTime;
// set a different expires value if configured in the Hyperty descriptor
r.configuration&&r.configuration.expires&&(_=r.configuration.expires),n.newAddress?(
// log.log('[Registry registerHyperty] registering new Hyperty URL', addressURL.address[0]);
g={user:d,descriptor:t,url:n.address[0],expires:_,resources:u.resources,dataSchemes:u.dataSchema,runtime:h,status:"live"},
// set a different expires if defined in the hyperty configuration
o&&(g.p2pHandler=o,g.p2pRequester=y),
// log.log('[Registry registerHyperty] registering new Hyperty at domain registry ', messageValue);
m={type:"create",from:s.registryURL,to:"domain://registry."+s.registryDomain,body:{value:g,policy:"policy"}}):(
// log.log('[Registry registerHyperty] registering previously registered Hyperty URL', addressURL.address[0]);
m={type:"update",to:"domain://registry."+s.registryDomain,from:s.registryURL,body:{resource:n.address[0],value:{status:"live",user:d}}},o&&(m.body.value.p2pHandler=o,m.body.value.p2pRequester=y));
// log.log('[Registry registerHyperty] Hyperty registration at domain registry  - ', message);
try{s._messageBus.postMessageWithRetries(m,s.registrationRetries,function(e){
// log.log('[Registry registerHyperty] Hyperty registration response: ', reply);
if(200===e.body.code){var r={url:n.address[0]};o&&(r.p2pHandler=o,r.p2pRequester=y),a(r)}else{if(404!==e.body.code)throw new Error("Failed to register an Hyperty: ",e);
// log.log('[Registry registerHyperty] The update was not possible. Registering new Hyperty at domain registry');
g={user:d,descriptor:t,url:n.address[0],expires:_,resources:u.resources,dataSchemes:u.dataSchema,runtime:h,status:"live"},o&&(g.p2pHandler=o,g.p2pRequester=y),m={type:"create",from:s.registryURL,to:"domain://registry."+s.registryDomain,body:{value:g,policy:"policy"}};try{s._messageBus.postMessageWithRetries(m,s.registrationRetries,function(e){
// log.log('[Registry registerHyperty] Hyperty registration update response: ', reply);
if(200!==e.body.code)throw new Error("Failed to register an Hyperty: "+e);var t={url:n.address[0]};o&&(t.p2pHandler=o,t.p2pRequester=y),a(t)})}catch(e){S.error(e),c(e)}}})}catch(e){S.error(e),c(e)}
//timer to keep the registration alive
// the time is defined by a little less than half of the expires time defined
setInterval(function(){var e={type:"update",from:s.registryURL,to:"domain://registry."+s.registryDomain,body:{resource:n.address[0],value:{status:"live"},method:"refresh"}};s._messageBus.postMessage(e,function(e){})},_/1.1/2*1e3)}).catch(function(e){
// log.log('[Registry registerHyperty] Error: ', reason);
c(e)})})})},function(e){c("[Registry registerHyperty] ",e)})})}},{key:"unregisterHyperty",value:function(e){var t=this;return new a.default(function(r,n){var i=!1,o=0;for(o=0;o<t.hypertiesList.length;o++){var a=t.hypertiesList[o];if(void 0!==a&&a.hypertyURL===e){i=!0;break}}!1===i?n("Hyperty not found"):(delete t.hypertiesList[o],r("Hyperty successfully deleted"))})}},{key:"discoverProtostub",value:function(e){if(!e)throw new Error("Parameter url needed");var t=this,r=(0,R.divideURL)(e),n=r.domain;if(t.protostubsList.hasOwnProperty(n)&&t.protostubsList[n].status===O.LIVE)return t.protostubsList[n];throw t.protostubsList[n]={status:O.DEPLOYING},new Error("[Registry - discoverProtoStub ] Message Node Protostub Not Found. Creating one")}},{key:"discoverP2PStub",value:function(e){var t=this;if(e){if(t.p2pRequesterStub.hasOwnProperty(e)&&t.p2pRequesterStub[e].status===O.LIVE)return t.p2pRequesterStub[e];throw t.p2pRequesterStub[e]={status:O.CREATED},new Error("[Registry - discoverP2PStub ] P2P Requester Stub Not Found. Creating one")}if(t.p2pHandlerStub.hasOwnProperty(t.runtimeURL))return t.p2pHandlerStub[t.runtimeURL];throw t.p2pHandlerStub[t.runtimeURL]={status:O.CREATED},new Error("[Registry - discoverP2PStub ] P2P Handler Stub Not Found.")}},{key:"registerStub",value:function(e,t,r,n,i){var o=this,s=i;return new a.default(function(i,a){var u=void 0;
//check if messageBus is registered in registry or not
void 0===o._messageBus&&a("MessageBus not found on registerStub"),S.info("[Registry - registerStub] - stubID ",t);/* if (!stubID.indexOf('msg-node.')) {
          stubID = stubID.substring(stubID.indexOf('.') + 1);
        }*/
var c=void 0;if(r)if(r.hasOwnProperty("isHandlerStub")&&r.isHandlerStub)u=o.p2pHandlerURL,o.p2pHandlerStub[t]={url:u,status:O.CREATED},o.p2pHandlerAssociation[o.runtimeURL]=[],o.sandboxesList.sandbox[u]=e,S.info("[Registry - registerStub - P2PHandlerStub] - ",t," - ",u),i(o.p2pHandlerStub[t]);else{c=r.p2pRequesterStub,u="runtime://"+(0,R.divideURL)(r.remoteRuntimeURL).domain+"/p2prequester/"+(0,R.generateGUID)(),S.info("[Registry - registerStub - P2PRequesterStub] - ",c," - ",u),
// to be clarified what is this p2pHandlerAssociation
o.p2pHandlerAssociation[o.runtimeURL].push(u),o.p2pRequesterStub[t]={url:u,status:O.CREATED},o.sandboxesList.sandbox[u]=e;
//Setup P2P Requester path into MN
var f={type:"subscribe",from:o.registryURL,to:"domain://msg-node."+o._domain+"/sm",body:{subscribe:[u],source:o.registryURL}};o._messageBus.postMessage(f,function(e){}),i(o.p2pRequesterStub[t])}else u="runtime://"+t+"/protostub/"+(0,R.generateGUID)(),S.info("[Registry - registerStub - Normal Stub] - ",t),
// TODO: Optimize this
o.protostubsList[t]={url:u,status:O.DEPLOYING},n&&(o.protostubsList[t].descriptorURL=n),s&&s.interworking&&(o.protostubsList[t].interworking=s.interworking),o.sandboxesList.sandbox[u]=e,i(o.protostubsList[t]);
// resolve(runtimeProtoStubURL);
o._messageBus.addListener(u+"/status",function(e){o._onProtostubStatusEvent(e)})})}},{key:"_onProtostubStatusEvent",value:function(e){var t=this,r=e.from;if(!e.to.includes("/status"))return void S.error("[Registry onProtostubStatusEvent] Not Status Event: ",e);
// process status events from message node protostubs
if(r.includes("/protostub/"))
// TODO: uncomment below when protostubs are updated with new status value "live"
(0,i.default)(t.protostubsList).filter(function(e){return t.protostubsList[e].url===r}).map(function(r){t.protostubsList[r].status=e.body.value});else
// process status events from p2p connections
if(e.body.resource){var n=e.body.resource;if(t.p2pConnectionList[n])t.p2pConnectionList[n].status=e.body.value,t.p2pConnectionList[n].url=r;else{var o={status:e.body.value,url:r};t.p2pConnectionList[n]=o}
// log.log('[Registry - onProtostubStatusEvent] - P2PConnection status: ', _this.p2pConnectionList[remoteRuntimeURL]);
// Update P2P Requester protostub if it is coming from there
r.includes("/p2prequester/")?t.p2pRequesterStub[n].status=e.body.value:
// if from P2PHandler with status disconencted, lets remove from p2pConnectionList
"disconnected"===e.body.value&&delete t.p2pConnectionList[n]}else{if(r.includes("/p2prequester/"))
// It is an event from P2P Requester without mandatory "resource" field
return void S.error("[Registry onProtostubStatusEvent] resource missing: ",e);
// It is an event from P2P Handler
t.p2pHandlerStub[t.runtimeURL].status=e.body.value}}},{key:"unregisterStub",value:function(e){var t=this;return new a.default(function(r,n){t.protostubsList.hasOwnProperty(e)?(delete t.protostubsList[e],r("ProtostubURL removed")):n("Error on unregisterStub: Hyperty not found")})}},{key:"registerIdpProxy",value:function(e,t){var r=this;return new a.default(function(n,i){var o=void 0;
//check if messageBus is registered in registry or not
void 0===r._messageBus&&i("MessageBus not found on registerStub"),o="domain-idp://"+t+"/stub/"+(0,R.generateGUID)(),
// TODO: Optimize this
r.idpProxyList[t]={url:o,status:O.DEPLOYING},r.sandboxesList.sandbox[o]=e,
// sandbox.addListener('*', function(msg) {
//   _this._messageBus.postMessage(msg);
// });
n(o),r._messageBus.addListener(o+"/status",function(e){r._onIdpProxyStatusEvent(e)})})}},{key:"_onIdpProxyStatusEvent",value:function(e){var t=this,r=e.from;if(!e.to.includes("/status"))return void S.error("[Registry onIdpProxyStatusEvent] Not Status Event: ",e);(0,i.default)(t.idpProxyList).filter(function(e){return t.idpProxyList[e].url===r}).map(function(r){t.idpProxyList[r].status=e.body.value})}},{key:"discoverIdpProxy",value:function(e){if(!e)throw new Error("Parameter url needed");var t=this,r=(0,R.divideURL)(e),n=r.domain;if(t.idpProxyList.hasOwnProperty(n)&&t.idpProxyList[n].status===O.LIVE)return t.idpProxyList[n];throw t.idpProxyList[n]={status:O.PROGRESS},new Error("[Registry - discoverIdpProxy ] Idp Proxy Not Found. Creating one")}},{key:"registerPEP",value:function(e,t){var r=this;return new a.default(function(n){
//TODO check what parameter in the postMessage the pep is.
r.pepList[t]=e,n("PEP registered with success")})}},{key:"unregisterPEP",value:function(e){var t=this;return new a.default(function(r,n){void 0===t.pepList[e]?n("Pep Not found."):r("PEP successfully removed.")})}},{key:"getSandbox",value:function(e,t){if(!e)throw new Error("Parameter url needed");
// log.log('[Registry getSandbox] getSandbox for: ', url, ' and capabilities: ', constraints);
var r=this;return new a.default(function(n,o){var a=void 0;
//if no appSandbox was found, try to search in the normal sandboxes list
if(!(
//first try to find the url in the appSandbox list
a=r.sandboxesList.appSandbox[e])&&!(a=r.sandboxesList.sandbox[e])){var s=void 0;s=e.includes("://")?(0,R.divideURL)(e).domain:e;
// search in the sandboxes list for a entry containing the domain given
for(var u in r.sandboxesList.sandbox)
//todo: uncomment sandbox constraints match condition with runtime sharing
if(u.includes(s)&&r.sandboxesList.sandbox[u].matches(t)){var c=function(){var e=r.sandboxesList.sandbox[u];return(0,i.default)(t).filter(function(t){return"browser"===t&&e.type===y.SandboxType.NORMAL||"windowSanbox"===t&&e.type===y.SandboxType.WINDOW}).length>0&&(a=e),"break"}();if("break"===c)break}}a?n(a):o("no sandbox found for: "+e)})}},{key:"resolveNormalStub",value:function(e){
// log.log('resolveNormalStub ' + url);
var t=this;return new a.default(function(r,n){
//split the url to find the domainURL. deals with the url for example as:
//"hyperty-runtime://sp1/protostub/123",
var i=(0,R.divideURL)(e),o=i.domain,a=i.type;e.includes(t.runtimeURL)&&(S.error("[Registry - resolve] URL to be resolved should have listeners ",e),n("[Registry - resolve] URL to be resolved should have listeners ",e)),
// resolve the domain protostub in case of a message to global registry
e.includes("global://registry")?o=t._domain:o.indexOf("msg-node.")&&o.indexOf("registry.")||(o=o.substring(o.indexOf(".")+1)),t.isLegacy(e).then(function(i){
// if legacy it should resolve for <protocol>.<domain>
i&&"domain-idp"!==a&&(o=a+"."+(0,R.getUserIdentityDomain)(e)),S.info("[Registry.resolve] domainUrl:",o);var s=void 0;s="domain-idp"===a?!!t.idpProxyList.hasOwnProperty(o)&&t.idpProxyList[o]:!!t.protostubsList.hasOwnProperty(o)&&t.protostubsList[o],S.info("[Registry.resolve] registred:",s),
// TODO since the protostubs have other states this should be revised, because the status could change from DEPLOYED to LIVE
// TODO and this validation will trigger a new load of IDPProxy or Protostub;
s&&s.hasOwnProperty("status")&&(s.status===O.DEPLOYED||s.status===O.CREATED||s.status===O.LIVE||s.status===O.DISCONNECTED)?(S.info("[Registry.resolve] Resolved: ",s.url,s.status),r(s.url)):
//todo: use switch-case to support other types of stubs
"domain-idp"===a?(
// The IdP Proxy does not exist, let's prepare its deployment by watching its status
t.watchingYou.observe("idpProxyList",function(e){
// log.log('[Registry - resolveNormalStub] idpProxyList changed ' + _this.idpProxyList);
var n=e.keypath;n.includes("status")&&(n=n.replace(".status","")),n===o&&"status"===e.name&&e.newValue===O.CREATED&&
// log.log('[Registry - resolveNormalStub] idpProxyList is live ' + _this.idpProxyList[domainUrl]);
r(t.idpProxyList[o].url)}),s||(
// this process will load the idp proxy, because is not yet registered;
S.info("[Registry.resolveNormalStub] deploy new IDPProxy: ",o),t.loader.loadIdpProxy(o).then(function(){S.info("[Registry.resolveNormalStub] IdP Proxy deployed: ",t.idpProxyList[o])}).catch(function(e){S.error("[Registry.resolve] Error resolving Load IDPProxy: ",e),t.idpProxyList[o].status="deployment-failed",n(e)}))):(
// The protoStub does not exist, let's prepare its deployment by watching its status
t.watchingYou.observe("protostubsList",function(e){
// log.log('[Registry - resolveNormalStub] protostubsList changed ' + _this.protostubsList);
var n=e.keypath;n.includes("status")&&(n=n.replace(".status","")),n===o&&"status"===e.name&&e.newValue===O.CREATED&&
// log.log('[Registry - resolve] protostub is live ' + _this.protostubsList[domainUrl]);
r(t.protostubsList[o].url)}),s||(
// lets deploy the protostub
S.info("[Registry.resolve] trigger new ProtocolStub: ",o),t.loader.loadStub(o).then(function(){}).catch(function(e){S.error("[Registry.resolveNormalStub] Error resolving Load ProtocolStub: ",e),n(e)})))}).catch(function(e){S.error("[Registry.resolve] Error resolving islegacy: ",e),n(e)})})}},{key:"resolve",value:function(e){S.info("[Registry - Resolve] -  ",e);var t=this;return new a.default(function(r,n){var i=e.to?e.to:e,o=!(!e.body||!e.body.p2p)&&e.body.p2p;
// log.log('P2P: ', p2p, url);
// log.log('P2P - p2pHandlerStub: ', !_this.p2pHandlerStub[_this.runtimeURL], _this.p2pHandlerStub, _this.runtimeURL);
// log.log('P2P - isBackendServiceURL: ', isBackendServiceURL(url), isBackendServiceURL, url);
// log.log('P2P - includes runtimeURL: ', url.includes(_this.runtimeURL));
// log.log('P2P - includes p2phandler: ', url.includes('/p2phandler/'));
// log.log('P2P - includes p2prequester: ', url.includes('/p2prequester/'));
// Skip p2p procedure when not supported by the Runtime or for backend services
!t.p2pHandlerStub[t.runtimeURL]||(0,R.isBackendServiceURL)(i)||i.includes(t.runtimeURL)||i.includes("/p2phandler/")||i.includes("/p2prequester/")?(S.info("[Registry - resolve] - Resolve normal stub: ",t.p2pHandlerStub,t.runtimeURL,(0,R.isBackendServiceURL)(i),o,i),t.resolveNormalStub(i).then(function(e){r(e)})):(S.info("[Registry - resolve] - checkP2P: ",o,i,t._p2pConnectionResolve),t._p2pConnectionResolve.checkP2P(e).then(function(n){
// log.log('[Registry - resolve] found registered P2P: ', registeredP2P);
var a=t.p2pConnectionList[n.runtime];switch(a||(a=n,t.p2pConnectionList[n.runtime]=a),a.status){case O.LIVE:e.body.peer=n.runtime,r(a.url,e);break;case O.CREATED:// p2p connection setup is ongoing, use MN Stub
case O.PROGRESS:t.resolveNormalStub(i).then(function(e){r(e)});break;case O.DISCONNECTED:
// p2p connection stub was disconnected, let's ask to connect again
S.info("[Registry - Resolve] - p2pConnection is disconnected lets try to reconnect"),t._p2pConnectionResolve.reconnectP2PRequester(a).then(function(e){
// log.log('[Registry - Resolve] - was reconnected with p2pRequesterStubt: ', returnURL);
r(e)},function(e){S.info("[Registry - Resolve] - Reason: ",e),t.resolveNormalStub(i).then(function(e){r(e)})});break;default:S.info("[Registry - resolve] - P2P: ",o),o?t._setupP2PRequester(n).then(function(e){
// no p2p connection exists but the message sender is asking one. Lets try to setup one
r(e)},function(e){S.info("[Registry - Resolve] - Reason: ",e),t.resolveNormalStub(i).then(function(e){r(e)})}):
// no p2p connection exists and the message sender does not ask one. Lets use the MN Stub
t.resolveNormalStub(i).then(function(e){r(e)})}},function(e){S.info("[Registry - Resolve] - Reason: ",e),t.resolveNormalStub(i).then(function(e){r(e)})}))})}},{key:"_setupP2PRequester",value:function(e){var t=this;return S.log("[Registry._setupP2PConnection] loadStub with p2pRequester: ",e),new a.default(function(r,n){var i=e.runtime,o={remoteRuntimeURL:i,p2pHandler:e.p2pHandler,p2pRequesterStub:!0};
// lets prepare the p2pRequesterSTub deployment by setting an observer to its status changes
t.watchingYou.observe("p2pRequesterStub",function(e){S.log("[Registry._setupP2PConnection] p2pRequesterStubs changed "+t.p2pRequesterStub),e.keypath.split(".")[0]===i&&"status"===e.name&&e.newValue===O.LIVE&&(S.log("[Registry._setupP2PConnection] p2pRequester is live "+t.p2pRequesterStub[i]),r(t.p2pRequesterStub[i].url))}),
//  stub load
t.loader.loadStub(e.p2pRequester,o).then(function(){S.log("[Registry._setupP2PConnection] p2pRequester deployed: ",t.p2pRequesterStub[i])}).catch(function(e){n(e)})})}},{key:"isLegacy",value:function(e){var t=this;return new a.default(function(r,n){if(e===t._domain)return r(!1);S.log("[Registry] [Registry.Registry.isLegacy] ",e);
// TODO: to be defined in the runtime configuration
var i=["hyperty-runtime","domain","global","hyperty"],o=(0,R.divideURL)(e);if(-1!==i.indexOf(o.type)||o.domain===t._domain)return r(!1);
// process User URLs
if(e.split("@").length>1){var a=o.domain;
// log.log('[Registry] [Registry.Registry.isLegacy] domain: ', domain);
if(t.idpLegacyProxyList.hasOwnProperty(a)){var s=t.idpLegacyProxyList[a];return r(s.interworking?s.interworking:!1)}t._loader.descriptors.getIdpProxyDescriptor(a).then(function(e){
// log.log('[Registry] [Registry.Registry.isLegacy] Legacy stub descriptor: ', result);
e.interworking?(t.idpLegacyProxyList[a]=e,r(e.interworking)):r(!1)}).catch(function(e){S.warn("problem loading idp proxy descriptor for domain:",a," because ",e),n(e)})}else
// process protostub URLs
r(t.isInterworkingProtoStub(e))})}},{key:"isLocal",value:function(e){var t=["hyperty-runtime","runtime"],r=["hyperty"],n=e.split("://")[0];
// Process Runtime Core URLs.
// Messages originated from protostubs should also not include the runtimeURL in its URL.
if(-1!==t.indexOf(n))return e.includes(this.runtimeURL);
// Process Hyperty URLs
// Todo: hypertiesList should be an object not an array
if(-1!==r.indexOf(n)){for(var i in this.hypertiesList){if(this.hypertiesList[i].hypertyURL===e)return!0}return!1}
// Process Data Object URLs
e.includes("/subscription")&&(e=e.substring(0,e.indexOf("/subscription")));var o=this.dataObjectList[e];return!!o&&(!o.interworking||!o.interworking)}},{key:"isInterworkingProtoStub",value:function(e){var t=this;return!!e.includes("/protostub/")&&(0,i.default)(t.protostubsList).filter(function(r){return t.protostubsList[r].url===e}).map(function(e){return!!t.protostubsList[e].hasOwnProperty("interworking")&&t.protostubsList[e].interworking})[0]}},{key:"loader",set:function(e){this._loader=e},get:function(){return this._loader}},{key:"messageBus",get:function(){return this._messageBus},set:function(e){var t=this;t._messageBus=e,t._messageBus.addListener(t.registryURL,function(e){
// log.log('[Registry listener] ', msg);
(0,R.isHypertyURL)(e.from),e.body.hasOwnProperty("criteria");e.body.hasOwnProperty("resource")&&"."!==e.body.resource&&((0,R.isURL)(e.body.resource),(0,R.isUserURL)(e.body.resource),(0,R.isHypertyURL)(e.body.resource));e.type;if(e.body.hasOwnProperty("value")&&(e.body.value.hasOwnProperty("name"),e.body.value.hasOwnProperty("user")),"response"===e.type)return void S.error("[Register listener] skipping ",e);
// msg sent by identity manager library
var r=t._getIdentityAssociated(e.body.resource,e.body.criteria),n={id:e.id,type:"response",to:e.from,from:e.to,body:{resource:r}};n.body.code=r?200:404,t._messageBus.postMessage(n)});
// Install AddressAllocation
var r=v.default.instance;t.addressAllocation=r}}]),Registry}();t.default=P,e.exports=t.default},/* 436 */
/***/
function(e,t,r){r(437),e.exports=r(13).Object.keys},/* 437 */
/***/
function(e,t,r){
// 19.1.2.14 Object.keys(O)
var n=r(76),i=r(67);r(97)("keys",function(){return function(e){return i(n(e))}})},/* 438 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SandboxType=void 0;var n=r(59),i=_interopRequireDefault(n),o=r(12),a=_interopRequireDefault(o),s=r(60),u=_interopRequireDefault(s),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(68),y=_interopRequireDefault(p),h=r(69),v=_interopRequireDefault(h),g=r(458),b=_interopRequireDefault(g),m=r(459),_=_interopRequireDefault(m),R=(t.SandboxType={APP:"app",NORMAL:"normal",WINDOW:"window"},function(e){function Sandbox(e){(0,f.default)(this,Sandbox);var t=(0,y.default)(this,(Sandbox.__proto__||(0,u.default)(Sandbox)).call(this)),r=t;return e&&(r.capabilities=e),t}/**
   * Deploy an instance of the component into the sandbox.
   * @param  {string} componentSourceCode Component source code (Hyperty, ProtoStub, etc)
   * @param  {URL} componentURL Hyperty, ProtoStub, or any other component address.
   * @param  {Config} configuration Config parameters of the component
   * @return {Promise<string>} return deployed if successful, or any other string with an error
   */
return(0,v.default)(Sandbox,e),(0,d.default)(Sandbox,[{key:"deployComponent",value:function(e,t,r){var n=this;
// let messageFactory = _this.messageFactory;
return new a.default(function(i,o){
//FLOW-OUT: deploy message for the internal SandboxRegistry -> _onDeploy
var a={type:"create",from:b.default.ExternalDeployAddress,to:b.default.InternalDeployAddress,body:{url:t,sourceCode:e,config:r}};
//send message into the sandbox internals and wait for reply
n.postMessage(a,function(e){200===e.body.code?
//is this response complaint with the spec?
i("deployed"):o(e.body.desc)})})}},{key:"removeComponent",value:function(e){var t=this;return new a.default(function(r,n){
//FLOW-OUT: un-deploy message for the internal SandboxRegistry -> _onRemove
var i={type:"delete",from:b.default.ExternalDeployAddress,to:b.default.InternalDeployAddress,body:{url:e}};
//send message into the sandbox internals and wait for reply
t.postMessage(i,function(e){200===e.body.code?
//is this response complaint with the spec?
r("undeployed"):n(e.body.desc)})})}},{key:"matches",value:function(e){var t=this,r=(0,i.default)(e).filter(function(r){return!(t.capabilities[r]&&t.capabilities[r]===e[r])});return 0===r.length||!e[r]}}]),Sandbox}(_.default));t.default=R},/* 439 */
/***/
function(e,t,r){r(440),e.exports=r(13).Object.getPrototypeOf},/* 440 */
/***/
function(e,t,r){
// 19.1.2.9 Object.getPrototypeOf(O)
var n=r(76),i=r(186);r(97)("getPrototypeOf",function(){return function(e){return i(n(e))}})},/* 441 */
/***/
function(e,t,r){e.exports={default:r(442),__esModule:!0}},/* 442 */
/***/
function(e,t,r){r(126),r(187),e.exports=r(139).f("iterator")},/* 443 */
/***/
function(e,t,r){e.exports={default:r(444),__esModule:!0}},/* 444 */
/***/
function(e,t,r){r(445),r(179),r(450),r(451),e.exports=r(13).Symbol},/* 445 */
/***/
function(e,t,r){"use strict";
// ECMAScript 6 symbols shim
var n=r(21),i=r(58),o=r(43),a=r(26),s=r(182),u=r(446).KEY,c=r(66),f=r(134),l=r(95),d=r(94),p=r(22),y=r(139),h=r(140),v=r(447),g=r(448),b=r(39),m=r(44),_=r(130),R=r(73),w=r(131),S=r(449),O=r(141),P=r(38),k=r(67),M=O.f,L=P.f,x=S.f,E=n.Symbol,D=n.JSON,U=D&&D.stringify,A=p("_hidden"),j=p("toPrimitive"),I={}.propertyIsEnumerable,C=f("symbol-registry"),T=f("symbols"),N=f("op-symbols"),F=Object.prototype,q="function"==typeof E,H=n.QObject,B=!H||!H.prototype||!H.prototype.findChild,G=o&&c(function(){return 7!=w(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=M(F,t);n&&delete F[t],L(e,t,r),n&&e!==F&&L(F,t,n)}:L,K=function(e){var t=T[e]=w(E.prototype);return t._k=e,t},V=q&&"symbol"==typeof E.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof E},W=function(e,t,r){return e===F&&W(N,t,r),b(e),t=_(t,!0),b(r),i(T,t)?(r.enumerable?(i(e,A)&&e[A][t]&&(e[A][t]=!1),r=w(r,{enumerable:R(0,!1)})):(i(e,A)||L(e,A,R(1,{})),e[A][t]=!0),G(e,t,r)):L(e,t,r)},Y=function(e,t){b(e);for(var r,n=v(t=m(t)),i=0,o=n.length;o>i;)W(e,r=n[i++],t[r]);return e},J=function(e,t){return void 0===t?w(e):Y(w(e),t)},z=function(e){var t=I.call(this,e=_(e,!0));return!(this===F&&i(T,e)&&!i(N,e))&&(!(t||!i(this,e)||!i(T,e)||i(this,A)&&this[A][e])||t)},$=function(e,t){if(e=m(e),t=_(t,!0),e!==F||!i(T,t)||i(N,t)){var r=M(e,t);return!r||!i(T,t)||i(e,A)&&e[A][t]||(r.enumerable=!0),r}},X=function(e){for(var t,r=x(m(e)),n=[],o=0;r.length>o;)i(T,t=r[o++])||t==A||t==u||n.push(t);return n},Z=function(e){for(var t,r=e===F,n=x(r?N:m(e)),o=[],a=0;n.length>a;)!i(T,t=n[a++])||r&&!i(F,t)||o.push(T[t]);return o};
// 19.4.1.1 Symbol([description])
q||(E=function(){if(this instanceof E)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===F&&t.call(N,r),i(this,A)&&i(this[A],e)&&(this[A][e]=!1),G(this,e,R(1,r))};return o&&B&&G(F,e,{configurable:!0,set:t}),K(e)},s(E.prototype,"toString",function(){return this._k}),O.f=$,P.f=W,r(198).f=S.f=X,r(77).f=z,r(137).f=Z,o&&!r(92)&&s(F,"propertyIsEnumerable",z,!0),y.f=function(e){return K(p(e))}),a(a.G+a.W+a.F*!q,{Symbol:E});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ee=0;Q.length>ee;)p(Q[ee++]);for(var te=k(p.store),re=0;te.length>re;)h(te[re++]);a(a.S+a.F*!q,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(e){return i(C,e+="")?C[e]:C[e]=E(e)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in C)if(C[t]===e)return t},useSetter:function(){B=!0},useSimple:function(){B=!1}}),a(a.S+a.F*!q,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:J,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:W,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:Y,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:$,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:X,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:Z}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
D&&a(a.S+a.F*(!q||c(function(){var e=E();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=U([e])||"{}"!=U({a:e})||"{}"!=U(Object(e))})),"JSON",{stringify:function(e){if(void 0!==e&&!V(e)){for(// IE8 returns string on undefined
var t,r,n=[e],i=1;arguments.length>i;)n.push(arguments[i++]);return t=n[1],"function"==typeof t&&(r=t),!r&&g(t)||(t=function(e,t){if(r&&(t=r.call(this,e,t)),!V(t))return t}),n[1]=t,U.apply(D,n)}}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
E.prototype[j]||r(57)(E.prototype,j,E.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
l(E,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
l(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
l(n.JSON,"JSON",!0)},/* 446 */
/***/
function(e,t,r){var n=r(94)("meta"),i=r(42),o=r(58),a=r(38).f,s=0,u=Object.isExtensible||function(){return!0},c=!r(66)(function(){return u(Object.preventExtensions({}))}),f=function(e){a(e,n,{value:{i:"O"+ ++s,// object ID
w:{}}})},l=function(e,t){
// return primitive with prefix
if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){
// can't set metadata to uncaught frozen object
if(!u(e))return"F";
// not necessary to add metadata
if(!t)return"E";
// add missing metadata
f(e)}return e[n].i},d=function(e,t){if(!o(e,n)){
// can't set metadata to uncaught frozen object
if(!u(e))return!0;
// not necessary to add metadata
if(!t)return!1;
// add missing metadata
f(e)}return e[n].w},p=function(e){return c&&y.NEED&&u(e)&&!o(e,n)&&f(e),e},y=e.exports={KEY:n,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},/* 447 */
/***/
function(e,t,r){
// all enumerable object keys, includes symbols
var n=r(67),i=r(137),o=r(77);e.exports=function(e){var t=n(e),r=i.f;if(r)for(var a,s=r(e),u=o.f,c=0;s.length>c;)u.call(e,a=s[c++])&&t.push(a);return t}},/* 448 */
/***/
function(e,t,r){
// 7.2.2 IsArray(argument)
var n=r(75);e.exports=Array.isArray||function(e){return"Array"==n(e)}},/* 449 */
/***/
function(e,t,r){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var n=r(44),i=r(198).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return i(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?s(e):i(n(e))}},/* 450 */
/***/
function(e,t,r){r(140)("asyncIterator")},/* 451 */
/***/
function(e,t,r){r(140)("observable")},/* 452 */
/***/
function(e,t,r){e.exports={default:r(453),__esModule:!0}},/* 453 */
/***/
function(e,t,r){r(454),e.exports=r(13).Object.setPrototypeOf},/* 454 */
/***/
function(e,t,r){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var n=r(26);n(n.S,"Object",{setPrototypeOf:r(455).set})},/* 455 */
/***/
function(e,t,r){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var n=r(42),i=r(39),o=function(e,t){if(i(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?// eslint-disable-line
function(e,t,n){try{n=r(65)(Function.call,r(141).f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},/* 456 */
/***/
function(e,t,r){r(457);var n=r(13).Object;e.exports=function(e,t){return n.create(e,t)}},/* 457 */
/***/
function(e,t,r){var n=r(26);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
n(n.S,"Object",{create:r(131)})},/* 458 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=function(){/* private
  _components: <url: instance>
  */
function SandboxRegistry(e){(0,i.default)(this,SandboxRegistry);var t=this;t._bus=e,t._components={},e.addListener(SandboxRegistry.InternalDeployAddress,function(e){
//console.log('SandboxRegistry-RCV: ', msg);
// let responseMsg = {
//   id: msg.id, type: 'response', from: SandboxRegistry.InternalDeployAddress, to: SandboxRegistry.ExternalDeployAddress
// };
switch(e.type){case"create":t._onDeploy(e);break;case"delete":t._onRemove(e)}})}return(0,a.default)(SandboxRegistry,[{key:"_responseMsg",value:function(e,t,r){var n={id:e.id,type:"response",from:SandboxRegistry.InternalDeployAddress,to:SandboxRegistry.ExternalDeployAddress},i={};
// return messageFactory.createResponse(msg, code, value);
return t&&(i.code=t),r&&(i.desc=r),n.body=i,n}},{key:"_onDeploy",value:function(e){var t=this,r=e.body.config,n=e.body.url,i=e.body.sourceCode,o=void 0,a=void 0;if(t._components.hasOwnProperty(n))o=500,a="Instance "+n+" already exist!";else try{t._components[n]=t._create(n,i,r),o=200}catch(e){o=500,a=e}var s=t._responseMsg(e,o,a);t._bus.postMessage(s)}},{key:"_onRemove",value:function(e){var t=this,r=e.body.url,n=void 0,i=void 0;t._components.hasOwnProperty(r)?(
//remove component from the pool and all listeners
delete t._components[r],t._bus.removeAllListenersOf(r),n=200):(n=500,i="Instance "+r+" doesn't exist!");var o=t._responseMsg(e,n,i);t._bus.postMessage(o)}},{key:"_create",value:function(e,t,r){}},{key:"components",get:function(){return this._components}}]),SandboxRegistry}();s.ExternalDeployAddress="hyperty-runtime://sandbox/external",s.InternalDeployAddress="hyperty-runtime://sandbox/internal",t.default=s,e.exports=t.default},/* 459 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(60),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(68),f=_interopRequireDefault(c),l=r(69),d=_interopRequireDefault(l),p=r(200),y=_interopRequireDefault(p),h=function(e){function MiniBus(){return(0,a.default)(this,MiniBus),(0,f.default)(this,(MiniBus.__proto__||(0,i.default)(MiniBus)).call(this))}/**
   * Post a message for routing. Message is routed directly to the external routing _onPostMessage.
   * @param  {Message} inMsg            JSON with mandatory Message structure {id, type, from, to}
   * @param  {Callback} responseCallback Optional callback if a response is expected from the request. A response will be always sent, even if it is a "Timeout".
   * @return {number}                  the Message id
   */
return(0,d.default)(MiniBus,e),(0,u.default)(MiniBus,[{key:"postMessage",value:function(e,t){var r=this;
//always send to external (to core MessageBus)
return r._genId(e),r._responseCallback(e,t),r._onPostMessage(e),e.id}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?(t._publishOn(r,e),e.to.startsWith("hyperty")||t._publishOnDefault(e)):t._publishOnDefault(e)}}}]),MiniBus}(y.default);/**
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
t.default=h,e.exports=t.default},/* 460 */
/***/
function(e,t,r){var n=r(13),i=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){// eslint-disable-line no-unused-vars
return i.stringify.apply(i,arguments)}},/* 461 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(60),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(68),f=_interopRequireDefault(c),l=r(69),d=_interopRequireDefault(l),p=r(462),y=_interopRequireDefault(p),h=function(e){function HypertyInstance(e,t,r,n,o,s,u,c,l,d,p,y,h,v,g){(0,a.default)(this,HypertyInstance);var b=(0,f.default)(this,(HypertyInstance.__proto__||(0,i.default)(HypertyInstance)).call(this,e,t,r,p,v,g)),m=b;return m._descriptor=n,m._hypertyURL=o,m._user=s,m._guid=u,m._runtime=c,m._context=l,m._p2pHandler=d,m._dataSchemes=y,m._resources=h,b}return(0,d.default)(HypertyInstance,e),(0,u.default)(HypertyInstance,[{key:"user",set:function(e){this.user=e},get:function(){return this._user}},{key:"hypertyURL",get:function(){return this._hypertyURL}},{key:"descriptor",get:function(){return this._descriptor}},{key:"objectName",get:function(){return this._descriptor._objectName}},{key:"p2pHandler",get:function(){return this._p2pHandler}},{key:"dataSchemes",get:function(){return this._dataSchemes}},{key:"resources",get:function(){return this._resources}},{key:"runtimeURL",get:function(){return this._runtime}}]),HypertyInstance}(y.default);/**
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
t.default=h,e.exports=t.default},/* 462 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=function(){function RegistryDataModel(e,t,r,n,o,a,s,u,c){(0,i.default)(this,RegistryDataModel);var f=this;f._id=e,f._url=t,f._descriptorURL=r,f._startingTime=o,f._lastModified=a,f._status=s,f._stubs=u,f._stubsConfiguration=c,f._p2pRequester=n}return(0,a.default)(RegistryDataModel,[{key:"id",get:function(){return this._id}},{key:"url",get:function(){return this._url}},{key:"descriptor",get:function(){return this._descriptorURL}},{key:"p2pRequester",get:function(){return this._p2pRequester}},{key:"lastModified",get:function(){return this._lastModified}}]),RegistryDataModel}();t.default=s,e.exports=t.default},/* 463 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(11),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=f.getLogger("P2PConnectionResolve"),d=function(){function P2PConnectionResolve(e){(0,a.default)(this,P2PConnectionResolve);var t=this;t._registry=e,t._remoteP2PEntities={}}/**
  * Verifies if remote Entity can be reached with a P2P Connection.
  * @param  {URL.URL}        info           object URL
  * @return {HypertyDataObjectInstance}  addressURL     return the Data Object instance registered URL, return undefined otherwise
  */
return(0,u.default)(P2PConnectionResolve,[{key:"checkP2P",value:function(e){if(!e.hasOwnProperty("to"))
// throw Error('The p2p verification was failed');
return i.default.reject("The p2p verification was failed");var t=e.to.split("://")[0],r=e.to.split("://")[1].split("/")[2],n=void 0;n=r?e.to.substring(0,e.to.indexOf("/"+r)):e.to;var o={};switch(e.body.p2p&&(o.p2p=e.body.p2p),e.body.p2pHandler&&e.body.p2pRequester&&(o.p2pHandler=e.body.p2pHandler,o.p2pRequester=e.body.p2pRequester,o.runtime=e.body.p2pHandler.split("/p2phandler/")[0]),t){case"runtime":return this.checkP2PRuntime(n,o);default:return this.checkP2PEntity(n,o)}}},{key:"checkP2PEntity",value:function(e,t){var r=this;return new i.default(function(n,i){var o=r._remoteP2PEntities[e];if(o)n(o);else if(t.runtime)n(t);else if(t.p2p){
// otherwise look on Domain Registry
l.log("[Registry - checkP2PEntity] - search in Domain Registry: ",e);var a={type:"read",from:r._registry.registryURL,to:"domain://registry."+r._registry._domain,body:{resource:e}};r._registry._messageBus.postMessage(a,function(e){if(l.log("[Registry - checkP2PEntity] Domain Registry reply",e),"value"in e.body){
//todo: store retrieved entity
var t=e.body.value;t.hasOwnProperty("p2pHandler")?n(t):i("[Registry checkP2PEntity] Hyperty found does not support P2P",e.body.value)}else i("[Registry checkP2PEntity] Hyperty with P2PHandler not found",e.body.code)})}else i("[Registry checkP2PEntity] No P2P Connection available for ",e)})}},{key:"checkP2PRuntime",value:function(e,t){var r=this,n={};
// look on locally stored p2p connections
return new i.default(function(i,o){r._registry.p2pConnectionList[e]?i({runtime:e}):t.runtime?(n=t,i(n)):o("[Registry.P2PConnectionResolve.checkP2PRuntime] No P2P Connection found to ",e)})}},{key:"checkP2PHyperty",value:function(e,t){var r=this;return new i.default(function(n,i){var o=void 0;
// look on locally stored hyperties
for(var a in r._registry.remoteHypertyList)
// todo: change to "hyperty.url" to be aligned with hyperty instance data model spec
if(o=r._registry.remoteHypertyList[a],l.log("[Registry - checkP2PHyperty] - for each Hyperty: ",o),o.hypertyID===e)return void(o.hasOwnProperty("p2pHandler")?n(o):i("[Registry checkP2PHyperty] Hyperty found does not support P2P",o));if(!o&&t.runtime)n(t);else if(!o&&t.p2p){
// otherwise look on Domain Registry
l.log("[Registry - checkP2PHyperty] - search in Domain Registry: ",o);var s={type:"read",from:r._registry.registryURL,to:"domain://registry."+r._registry._domain,body:{resource:e}};r._registry._messageBus.postMessage(s,function(e){if(l.log("[Registry - checkP2PHyperty] Domain Registry reply",e),"value"in e.body){
//todo: store retrieved hyperty
var t=e.body.value;r._registry.remoteHypertyList.push(t),t.hasOwnProperty("p2pHandler")?n(t):i("[Registry checkP2PHyperty] Hyperty found does not support P2P",e.body.value)}else i("[Registry checkP2PHyperty] Hyperty with P2PHandler not found",e.body.code)})}else i("[Registry checkP2PHyperty] No P2P Connection available for ",e)})}},{key:"checkP2PDataObject",value:function(e,t){var r=this;return new i.default(function(n,i){
// look on locally stored Remote Data Objects
var o=r._registry.remoteDataObjectList.filter(function(t){return r._registry.remoteDataObjectList[t].url===e});if(0!==o.length&&o[0].p2pRequester)n(o[0]);else if(0!==o.length)i("[Registry checkP2PDataObject] Data Object found does not support P2P",o[0]);else if(0===o.length&&t.runtime)n(t);else if(o.length&&t.p2p){
// otherwise look on Domain Registry
// look on Domain Registry
var a={type:"read",from:r._registry.registryURL,to:"domain://registry."+r._registry._domain,body:{resource:e}};r._registry._messageBus.postMessage(a,function(e){if(l.log("discover data object per url reply",e),"value"in e.body){
//todo: store retrieved hyperty
var t=e.body.value;r._registry.remoteDataObjectList.push(t),t.p2pRequester?n(t):i("[Registry checkP2PDataObject] Data Object found does not support P2P",e.body.value)}else i("[Registry checkP2PDataObject] not found",e.body.code)})}else i("[Registry checkP2PDataObject] no P2P Connection found")})}},{key:"addRemoteP2PEntity",value:function(e,t){this._remoteP2PEntities[e]=t}},{key:"removeRemoteP2PEntity",value:function(e){delete this._remoteP2PEntities[e]}},{key:"reconnectP2PRequester",value:function(e){var t=this;return l.log("[P2PConenctionResolve.reconnectP2PRequester] lets try to reconnect P2P Requester Stub: ",e),new i.default(function(r,n){var i=e.runtime,o={type:"execute",from:t._registry.registryURL,to:e.url,body:{method:"connect",params:[e.p2pHandler]}};
// lets prepare the p2pRequesterSTub reconnect by setting an observer to its status changes
t._registry.watchingYou.observe("p2pRequesterStub",function(e){if(l.log("[P2PConenctionResolve.reconnectP2PRequester] p2pRequesterStubs changed "+t._registry.p2pRequesterStub),e.keypath.split(".")[0]===i&&"status"===e.name)switch(e.newValue){case"live":l.log("[P2PConenctionResolve.reconnectP2PRequester] p2pRequester is live "+t._registry.p2pRequesterStub[i]),r(t._registry.p2pRequesterStub[i].url);break;case"failed":l.log("[P2PConenctionResolve.reconnectP2PRequester] p2pRequester reconnect failed "+t._registry.p2pRequesterStub[i]),n("P2P Requester reconnect failed")}}),
//  stub load
t._registry._messageBus.postMessage(o,function(e){l.log("[P2PConenctionResolve.reconnectP2PRequester] reconnect request reply",e)})})}}]),P2PConnectionResolve}();t.default=d,e.exports=t.default},/* 464 */
/***/
function(e,t){
//     proxy-observe v0.0.18
//     Copyright (c) 2015, 2016 Simon Y. Blackwell, AnyWhichWay
//     MIT License - http://opensource.org/licenses/mit-license.php
!function(){"use strict";function Observer(e,t,r,n,i,o){function deliver(e,n){if(deliver.delay=n,!deliver.pause&&s.changeset.length>0){if(!e){var i=s.changeset.filter(function(e){return!r||r.indexOf(e.type)>=0});i.length>0&&t(i)}s.changeset=[]}}var a,s=this;
// __observerCallbacks__ is used as an index to get at the proxy which is the observer, so we can unobserve
return deliver.pause=i,deliver.delay=o,s.get=function(e,t){return"__observer__"===t?s:"unobserve"===t?function(){return Object.unobserve(e),e}:"deliver"===t?deliver:e[t]},s.target=e,s.changeset=[],s.target.__observerCallbacks__||(Object.defineProperty(e,"__observerCallbacks__",{enumerable:!1,configurable:!0,writable:!1,value:[]}),Object.defineProperty(e,"__observers__",{enumerable:!1,configurable:!0,writable:!1,value:[]})),s.target.__observerCallbacks__.push(t),s.target.__observers__.push(this),a=new Proxy(e,s),deliver(!1,o),a}
// Creates and returns a Proxy wrapping a target so that all changes can be trapped and forwarded to
// a callback. The callback takes an array of changes just like the traditional original Chrome Object.observe
// {object:<object changed>,name:<field changed>,type:add|update|delete|reconfigure|preventExtensions|setPrototype,oldValue:<old value if update | delete>}
// The acceptlist can be add|update|delete|reconfigure|preventExtensions|setPrototype.
// v 0.0.10 to support pausing and restarting observation two additional constructor arguments are available to Object.observe:
// pausable - create the Observer so it can be paused
// pause - create observer in paused state
// if pausable is true then an additional method deliver(ignorePrevious) is available to start delivery
// to pause delivery set a property called pause on the function deliver to true
// pausable is optional to reduce the chance of shadowing a property or method on any existing code called deliver
Object.observe||"function"!=typeof Proxy||(Observer.prototype.deliver=function(){return this.get(null,"deliver")},Observer.prototype.set=function(e,t,r){// , receiver
var n=e[t],i=void 0===n?"add":"update";if(e[t]=r,e.__observers__.indexOf(this)>=0&&(!this.acceptlist||this.acceptlist.indexOf(i)>=0)){var o={object:e,name:t,type:i},a=0===this.changeset.length,s=this.deliver();"update"===i&&(o.oldValue=n),this.changeset.push(o),a&&s(!1,"number"==typeof s.delay?s.delay:10)}return!0},Observer.prototype.deleteProperty=function(e,t){var r=e[t];if(
//if(typeof(oldvalue)!=="undefined") {
delete e[t],e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("delete")>=0){var n={object:e,name:t,type:"delete",oldValue:r},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}
//}
return!0},Observer.prototype.defineProperty=function(e,t,r){if(Object.defineProperty(e,t,r),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("reconfigure")>=0){var n={object:e,name:t,type:"reconfigure"},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},Observer.prototype.setPrototypeOf=function(e,t){var r=Object.getPrototypeOf(e);if(Object.setPrototypeOf(e,t),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("setPrototype")>=0){var n={object:e,name:"__proto__",type:"setPrototype",oldValue:r},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},Observer.prototype.preventExtensions=function(e){if(Object.preventExtensions(e),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("preventExtensions")>=0){var t={object:e,type:"preventExtensions"},r=0===this.changeset.length,n=this.deliver();this.changeset.push(t),r&&n(!1,"number"==typeof n.delay?n.delay:10)}return!0},Object.observe=function(e,t,r,n,i,o){return new Observer(e,t,r,n,i,o)},Object.unobserve=function(e,t){if(e.__observerCallbacks__){if(!t)return e.__observerCallbacks__.splice(0,e.__observerCallbacks__.length),void e.__observers__.splice(0,e.__observers__.length);e.__observerCallbacks__.forEach(function(r,n){t===r&&(e.__observerCallbacks__.splice(n,1),delete e.__observers__[n].callback,e.__observers__.splice(n,1))})}},Array.observe=function(e,t,r,n,i,o){if(!(e instanceof Array||Array.isArray(e)))throw new TypeError("First argument to Array.observer is not an Array");r=r||["add","update","delete","splice"];var a=new Proxy(e,{get:function(t,n){return"unobserve"===n?function(e){return e?Object.unobserve(t,e):t.unobserve()}:"splice"===n?function(n,i){if("number"!=typeof n||"number"!=typeof i)throw new TypeError("First two arguments to Array splice are not number, number");var o=this.slice(n,n+i),a=arguments.length>1?arguments.length-2:0,u={object:e,type:"splice",index:n,removed:o,addedCount:a};if(t.splice.apply(t,arguments),r.indexOf("splice")>=0){var n=0===s.__observer__.changeset.length,c=s.__observer__.deliver();s.__observer__.changeset.push(u),n&&c(!1,"number"==typeof c.delay?c.delay:10)}}:"push"===n?function(e){return this.splice(this.length,0,e)}:"pop"===n?function(){return this.splice(this.length-1,1)}:"unshift"===n?function(e){return this.splice(0,0,e)}:"shift"===n?function(){return this.splice(0,1)}:t[n]}}),s=Object.observe(a,function(e){var n=e.filter(function(e){return"length"!==e.name&&"add"!==e.name&&(!r||r.indexOf(e.type)>=0)});n.length>0&&t(n)},r,n,i,o);return s},Array.unobserve=function(e,t){return e.unobserve(t)}),Object.deepObserve=function(e,t,r){function reobserve(e,r){Object.keys(e).forEach(function(i){if(("object"===n(e[i])||"array"===n(e[i]))&&!e[i].hasOwnProperty("__observers__")){var o=r.slice(0);o.push(i),e[i]=Object.deepObserve(e[i],t,o)}})}r=r||[];var n=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};return reobserve(e,r),Object.observe(e,function(e){function recurse(e,t,r,i,o){if(i instanceof Object){Object.keys(i).forEach(function(a){if(!r||r[a]!==i[a]){var s=r&&void 0!==r[a]?r[a]:void 0,u=void 0===s?"add":"update",c=o+"."+a;n.push({name:e,object:t,type:u,oldValue:s,newValue:i[a],keypath:c}),recurse(e,t,s,i[a],c)}})}else if(r instanceof Object){var a=Object.keys(r);a.forEach(function(a){var s=null===i?"update":"delete",u=o+"."+a;n.push({name:e,object:t,type:s,oldValue:r[a],newValue:i,keypath:u}),recurse(e,t,r[a],void 0,u)})}}var n=[];e.forEach(function(e){var t=(r.length>0?r.join(".")+".":"")+e.name;"update"!==e.type&&"add"!==e.type||reobserve(e.object,r),n.push({name:e.name,object:e.object,type:e.type,oldValue:e.oldValue,newValue:e.object[e.name],keypath:t}),recurse(e.name,e.object,e.oldValue,e.object[e.name],t)}),t(n)})}}()},/* 465 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),i=_interopRequireDefault(n),o=r(96),a=_interopRequireDefault(o),s=r(12),u=_interopRequireDefault(s),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(11),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(p),h=r(15),v=r(466),g=_interopRequireDefault(v),b=r(467),m=_interopRequireDefault(b),_=r(468),R=_interopRequireDefault(_),w=r(201),S=y.getLogger("IdentityModule"),O=function(){/**
  * This is the constructor to initialise the Identity Module it does not require any input.
  */
function IdentityModule(e,t,r,n){(0,f.default)(this,IdentityModule);var i=this;if(!e)throw new Error("runtimeURL is missing.");if(!r)throw new Error("storageManager is missing");i._runtimeURL=e,i.storageManager=r,i.dataObjectsStorage=n,i._idmURL=i._runtimeURL+"/idm",i._guiURL=i._runtimeURL+"/identity-gui",i.runtimeCapabilities=t,i._domain=(0,h.divideURL)(i._runtimeURL).domain,i.watchingYou=new w.WatchingYou,
//to store items with this format: {identity: identityURL, token: tokenID}
i.identities=[],i.identitiesList=i.watchingYou.watch("identitiesList",{},!0),i.emailsList=[];var o=new g.default("guid","HUMAN");i.identity=o,i.crypto=new m.default,i.currentIdentity,i.defaultIdentity,
//stores the association of the dataObject and the Hyperty registered within
i.dataObjectsIdentity={},
// hashTable to store all the crypto information between two hyperties
i.chatKeys={},
// hashTable to store the symmetric keys to be used in the chat group
i.dataObjectSessionKeys={},
//failsafe to enable/disable all the criptographic functions
i.isToUseEncryption=!0,
// variable to know if the GUI is deployed to choose the identity. if the real GUI is not deployed, a fake gui is deployed instead.
i.guiDeployed=!1}
//******************* GET AND SET METHODS *******************
/**
  * return the messageBus in this Registry
  * @param {MessageBus}           messageBus
  */
return(0,d.default)(IdentityModule,[{key:"getIdentity",
//******************* IDENTITY RELEATED METHODS *******************
/**
    * gets all the information from a given userURL
    * @param  {String}  userURL     user url
    * @return {JSON}    identity    identity bundle from the userURL
    */
value:function(e){var t=this;for(var r in t.identities){var n=t.identities[r];if(n.identity===e)return n}throw"identity not found"}},{key:"setCurrentIdentity",value:function(e){this.currentIdentity=e}},{key:"getIdentities",value:function(){return this.identities}},{key:"getIdentitiesToChoose",value:function(){return{identities:this.emailsList,idps:[{domain:"google.com",type:"idToken"},{domain:"microsoft.com",type:"idToken"},{domain:"slack.com",type:"Legacy"}]}}},{key:"getCurrentIdentity",value:function(){return this.currentIdentity}},{key:"loadIdentities",value:function(){var e=this;return new u.default(function(t){e.storageManager.get("idModule:identities").then(function(r){r&&(e.identities=r,r.forEach(function(t){var r=e._seconds_since_epoch(),n=0;t.info&&t.info.expires?n=t.info.expires:t.info&&t.info.tokenIDJSON&&t.info.tokenIDJSON.exp&&(n=t.info.tokenIDJSON.exp),t.hasOwnProperty("interworking")||t.interworking||(e.defaultIdentity=t.messageInfo,parseInt(n)>r&&(e.defaultIdentity.expires=parseInt(n),e.currentIdentity=e.defaultIdentity))})),t()})})}},{key:"loadSessionKeys",value:function(){var e=this;return new u.default(function(t){e.storageManager.get("dataObjectSessionKeys").then(function(r){e.dataObjectSessionKeys=r||{},t()})})}},{key:"getIdentityAssertion",value:function(e){var t=this;return new u.default(function(r,n){
//CHECK whether is browser environment or nodejs
//if it is browser, then create a fake identity
t.runtimeCapabilities.isAvailable("browser").then(function(i){if(S.log("runtime browser identity acquisition ",i),i)
//todo: only idp should be mandatory when identityBundle exists
if(e&&e.hasOwnProperty("idp")){var o=e.idp,a=e.hasOwnProperty("origin")?e.origin:"origin",s=e.hasOwnProperty("idHint")?e.idHint:"";t.selectIdentityForHyperty(a,o,s).then(function(e){return S.log("[IdentityModule] Identity selected by hyperty."),r(e)},function(e){
// if it got an error then just select identity from GUI
// log.error('[IdentityModule] Could not select identity from hyperty.');
t.selectIdentityFromGUI().then(function(e){return S.log("[IdentityModule] Identity selected by hyperty."),r(e)},function(e){return n(e)})})}else{if(t.defaultIdentity&&t.defaultIdentity.expires>t._seconds_since_epoch())return r(t.defaultIdentity);t.selectIdentityFromGUI().then(function(e){return S.log("[IdentityModule] Identity selected from GUI."),e.hasOwnProperty("messageInfo")?(t.defaultIdentity=e.messageInfo,r(e.messageInfo)):(t.defaultIdentity=e,r(e))},function(e){return n(e)})}}).catch(function(e){return S.error("Error on identity acquisition ",e),n(e)}),t.runtimeCapabilities.isAvailable("node").then(function(e){if(S.log("node identity acquisition ",e),e){if(void 0!==t.currentIdentity)
//TODO verify whether the token is still valid or not.
// should be needed to make further requests, to obtain a valid token
return r(t.currentIdentity);S.log("getIdentityAssertion for nodejs");
//let randomNumber = Math.floor((Math.random() * 10000) + 1);
var n={avatar:"https://lh3.googleusercontent.com/-WaCrjVMMV-Q/AAAAAAAAAAI/AAAAAAAAAAs/8OlVqCpSB9c/photo.jpg",cn:"test nodejs",username:"nodejs-conference@nodejs.com",userURL:"user://nodejs.com/nodejs-conference@nodejs.com"},i={assertion:"assertion",idp:"nodejs",identity:"user://nodejs.com/nodejs-conference@nodejs.com",messageInfo:{assertion:"assertion",idp:"nodejs",userProfile:n},userProfile:n};t.currentIdentity=i,t.identities.push(i),t.storageManager.set("idModule:identities",0,t.identities).then(function(){return r(i)})}}).catch(function(e){S.error("Error on identity acquisition ",e),n(e)})})}},{key:"getUsersIDs",value:function(e){var t=this,r=[],n=e?h.getUserEmailFromURL:function(e){return e};for(var i in t.identities){var o=t.identities[i];r.push(n(o.identity))}return r}},{key:"deleteIdentity",value:function(e){var t=this;
//let userURL = convertToUserURL(userID);
for(var r in t.identities)t.identities[r].identity===e&&t.identities.splice(r,1)}},{key:"unregisterIdentity",value:function(e){var t=this;for(var r in t.emailsList)t.emailsList[r]===e&&t.emailsList.splice(r,1)}},{key:"requestIdentityToGUI",value:function(e,t){var r=this;return new u.default(function(n,i){
//condition to check if the real GUI is deployed. If not, deploys a fake gui
if(!1===r.guiDeployed){var o=r._guiURL,a=new R.default(o,r._messageBus);r.guiFake=a,r.guiDeployed=!0}var s={type:"create",to:r._guiURL,from:r._idmURL,body:{value:{identities:e,idps:t}}},u=r._messageBus.postMessage(s);
//add listener without timout
try{r._messageBus.addResponseListener(r._idmURL,u,function(e){
// todo: to return the user URL and not the email or identifier
if(r._messageBus.removeResponseListener(r._idmURL,u),200===e.body.code){var t=e.body;S.log("selectedIdentity: ",t.value),n(t)}else i("error on requesting an identity to the GUI")})}catch(e){i("In method callIdentityModuleFunc error: "+e)}})}},{key:"callGenerateMethods",value:function(e,t){var r=this;return new u.default(function(n,i){var o=void 0,a=void 0;
//generates the RSA key pair
r.crypto.generateRSAKeyPair().then(function(n){return o=btoa(n.public),a=n,r.generateAssertion(o,t,"",a,e)}).then(function(n){return S.log([""]),r.myHint=n,r.generateAssertion(o,t,n,a,e)}).then(function(e){e?n(e):i("Error on obtaining Identity")}).catch(function(e){S.error(e),i(e)})})}},{key:"selectIdentityForHyperty",value:function(e,t,r){var n=this;return new u.default(function(i,o){
//generates the RSA key pair
n.crypto.generateRSAKeyPair().then(function(a){var s=btoa(a.public);n.sendGenerateMessage(s,e,r,t).then(function(r){r.hasOwnProperty("assertion")?
// identity was logged in, just save it
n.storeIdentity(r,a).then(function(e){return i(e)},function(e){return o(e)}):r.hasOwnProperty("loginUrl")?
// identity was not logged in
n.loginSelectedIdentity(s,e,t,a,r.loginUrl).then(function(e){return i(e)},function(e){return o(e)}):(
// you should never get here, if you do then the IdP Proxy is not well implemented
// log.error('GenerateAssertion returned invalid response.');
S.log("Proceeding by logging in."),n.generateSelectedIdentity(s,e,t,a).then(function(e){return i(e)},function(e){return o(e)}))}).catch(function(e){o("On selectIdentityForHyperty from method sendGenerateMessage error:  "+e)})}).catch(function(e){o("On selectIdentityForHyperty from method generateRSAKeyPair error:  "+e)})})}},{key:"selectIdentityFromGUI",value:function(e){var t=this;return new u.default(function(r,n){var i=t.getIdentitiesToChoose();t.requestIdentityToGUI(i.identities,i.idps).then(function(i){if("identity"===i.type){
//  let chosenID = getUserURLFromEmail(value.value);
// hack while the user url is not returned from requestIdentityToGUI;
var o="user://"+t.currentIdentity.idp+"/"+i.value;t.defaultIdentity=t.currentIdentity;
// returns the identity info from the chosen id
for(var a in t.identities)if(t.identities[a].identity===o)return r(t.identities[a].messageInfo);return n("no identity was found .")}if("idp"!==i.type)return n("error on GUI received message.");t.callGenerateMethods(i.value,e).then(function(e){return r(e)},function(e){return n(e)})}).catch(function(e){n("On selectIdentityFromGUI from method requestIdentityToGUI error:  "+e)})})}},{key:"storeIdentity",value:function(e,t){var r=this;return new u.default(function(n,i){if(!e.hasOwnProperty("assertion"))return i("StoreIdentity: input is not an identity assertion.");var o=e.assertion.split("."),s=void 0;
//verify if the token contains the 3 components, or just the assertion
try{s=o[1]?JSON.parse(atob(o[1])):JSON.parse(atob(e.assertion))}catch(e){return i("In storeIdentity, error parsing assertion: "+e)}var u=void 0;
//TODO remove the verification and remove the tokenIDJSON from the google idpProxy;
u=s.tokenIDJSON?s.tokenIDJSON:s,u.idp=e.idp;var c=u.email||u.sub,f="user://"+u.idp.domain+"/"+c;e.identity=f,r.identity.addIdentity(e);
// check if exists any infoToken in the result received
var l=e.infoToken?e.infoToken:{},d=u.name||c.substring(0,c.indexOf("@")),p={username:c,cn:d,avatar:l.picture,locale:l.locale,userURL:f},y=void 0;l.hasOwnProperty("exp")?y=l.exp:e.hasOwnProperty("info")&&e.info.hasOwnProperty("expires")&&(y=e.info.expires);
//creation of a new JSON with the identity to send via messages
var h={userProfile:p,idp:e.idp.domain,assertion:e.assertion,expires:y};e.messageInfo=h,e.keyPair=t,r.currentIdentity=h;
//verify if the id already exists. If already exists then do not add to the identities list;
//to be reviewed since the identity contains data like the asssrtion and ley pairs that may be different if generated twice
var v=!1,g=void 0;for(var b in r.identities)r.identities[b].identity===e.identity&&(v=!0,g=r.identities[b]);if(v){
// TODO: maybe overwrite the identity
g=(0,a.default)(g,e),n(g.messageInfo);var m=!1;
//check if the identity exists in emailList, if not add it
//This is useful if an identity was previously registered but was later unregistered
for(var _ in r.emailsList)if(r.emailsList[_]===c){m=!0;break}m||r.emailsList.push(c)}else r.emailsList.push(c),r.identities.push(e);r.storageManager.set("idModule:identities",0,r.identities).then(function(){r.identitiesList[u.idp.domain]&&(r.identitiesList[u.idp.domain].status="created"),n(h)})})}},{key:"loginSelectedIdentity",value:function(e,t,r,n,i){var o=this;return new u.default(function(a,s){o.callIdentityModuleFunc("openPopup",{urlreceived:i}).then(function(e){return e},function(e){return S.error("Error while logging in for the selected identity."),s(e)}).then(function(i){o.sendGenerateMessage(e,t,i,r).then(function(e){if(!e.hasOwnProperty("assertion"))return S.error("Error while logging in for the selected identity."),s("Could not generate a valid assertion for selected identity.");o.storeIdentity(e,n).then(function(e){a("Login was successfull")}).catch(function(e){s("Login has failed:"+e)})}).catch(function(e){s("On loginSelectedIdentity from method sendGenerateMessage error:  "+e)})})})}},{key:"generateSelectedIdentity",value:function(e,t,r,n){var i=this;return new u.default(function(o,a){i.generateAssertion(e,t,"",n,r).then(function(e){return e}).then(function(o){return i.generateAssertion(e,t,o,n,r)}).then(function(e){return e?o(e):a("Error on obtaining Identity")}).catch(function(e){return S.error(e),a(e)})})}},{key:"callIdentityModuleFunc",value:function(e,t){var r=this;return new u.default(function(n,i){var o={type:"execute",to:r._guiURL,from:r._idmURL,body:{resource:"identity",method:e,params:t}},a=r._messageBus.postMessage(o);
//add listener without timout
try{r._messageBus.addResponseListener(r._idmURL,a,function(e){r._messageBus.removeResponseListener(r._idmURL,a);var t=e.body.value;n(t)})}catch(e){i("In method callIdentityModuleFunc error: "+e)}})}},{key:"encryptMessage",value:function(e){S.info("encryptMessage:message",e);var t=this;return S.log("encrypt message "),new u.default(function(r,n){var o="handshake"===e.type;
//if is not to apply encryption, then returns resolve
if(!t.isToUseEncryption&&!o)return S.info("encryption disabled"),r(e);var a=t._parseMessageURL(e.to),s=(0,h.isDataObjectURL)(a),u=(0,h.isLegacy)(e.to),c="hyperty"===(0,h.divideURL)(e.from).type,f="hyperty"===(0,h.divideURL)(e.to).type;if("update"===e.type)return r(e);if(u)r(e);else if(c&&f){var l=t._registry.getHypertyOwner(e.from);if(l){
// check if exists any keys between two users
var d=t.chatKeys[e.from+"<->"+e.to];if(d||(d=t._newChatCrypto(e,l),S.log("createChatKey encrypt",e.from+e.to),t.chatKeys[e.from+"<->"+e.to]=d,e.body.handshakePhase="startHandShake"),d.authenticated&&!o){var p=t.crypto.generateIV();t.crypto.encryptAES(d.keys.hypertyFromSessionKey,e.body.value,p).then(function(n){var o=t._filterMessageToHash(e,e.body.value+p,d.hypertyFrom.messageInfo);t.crypto.hashHMAC(d.keys.hypertyFromHashKey,o).then(function(o){
// log.log('result of hash ', hash);
var a={iv:t.crypto.encode(p),value:t.crypto.encode(n),hash:t.crypto.encode(o)};e.body.value=(0,i.default)(a),r(e)})})}else o?r(e):t._doHandShakePhase(e,d).then(function(r){t.chatKeys[e.from+"<->"+e.to]=r.chatKeys,t._messageBus.postMessage(r.message),n("encrypt handshake protocol phase ")})}else n("In encryptMessage: Hyperty owner URL was not found")}else c&&s&&(S.log("dataObject value to encrypt: ",e.body.value),S.log("IdentityModule - encrypt from hyperty to dataobject ",e),t.storageManager.get("dataObjectSessionKeys").then(function(o){var s=o?o[a]:null;t.dataObjectsStorage.getDataObject(a).then(function(o){
//if no key exists, create a new one if is the reporter of dataObject
if(!s&&o.reporter&&o.reporter===e.from){var u=t.crypto.generateRandom();t.dataObjectSessionKeys[a]={sessionKey:u,isToEncrypt:!0},t.storageManager.set("dataObjectSessionKeys",0,t.dataObjectSessionKeys).catch(function(e){n("On encryptMessage from method storageManager.set error: "+e)}),s=t.dataObjectSessionKeys[a]}
//check if there is already a session key for the chat room
if(s)
// and if is to apply encryption, encrypt the messages
if(s.isToEncrypt){var c=t.crypto.generateIV();t.crypto.encryptAES(s.sessionKey,t.crypto.encode((0,i.default)(e.body.value)),c).then(function(n){var o=t._filterMessageToHash(e,e.body.value+c,s.sessionKey);t.crypto.hashHMAC(s.sessionKey,o).then(function(o){
// log.log('hash ', hash);
var a={value:t.crypto.encode(n),iv:t.crypto.encode(c),hash:t.crypto.encode(o)};e.body.value=(0,i.default)(a),r(e)})})}else r(e);else n("Data object key could not be defined: Failed to decrypt message ")}).catch(function(e){n("On encryptMessage from method dataObjectsStorage.getDataObject error: "+e)})}).catch(function(e){n("On encryptMessage from method storageManager.get error: "+e)}))})}},{key:"encryptDataObject",value:function(e,t){var r=this;return new u.default(function(n,o){S.info("dataObject value to encrypt: ",e);var a=r._parseMessageURL(t);r.storageManager.get("dataObjectSessionKeys").then(function(t){var s=t?t[a]:null;
//check if there is already a session key for the chat room
if(!s)return o("No dataObjectKey for this dataObjectURL:",a);
// and if is to apply encryption, encrypt the messages
if(!s.isToEncrypt)return S.info("The dataObject is not encrypted"),n(e);var u=r.crypto.generateIV();r.crypto.encryptAES(s.sessionKey,r.crypto.encode((0,i.default)(e)),u).then(function(e){var t={value:r.crypto.encode(e),iv:r.crypto.encode(u)};return S.log("encrypted dataObject",t),n(t)}).catch(function(e){o("On encryptDataObject from method encryptAES error: "+e)})}).catch(function(e){o("On encryptDataObject from method storageManager.get error: "+e)})})}},{key:"decryptMessage",value:function(e){var t=this;return S.info("decryptMessage:message",e),new u.default(function(r,n){var i="handshake"===e.type;
//if is not to apply encryption, then returns resolve
if(!t.isToUseEncryption&&!i)
// log.log('decryption disabled');
return r(e);var o=t._parseMessageURL(e.to),a=(0,h.isDataObjectURL)(o),s="hyperty"===(0,h.divideURL)(e.from).type,u="hyperty"===(0,h.divideURL)(e.to).type;if("update"===e.type)return r(e);
//is is hyperty to hyperty communication
if(s&&u){
// log.log('decrypt hyperty to hyperty');
var c=t._registry.getHypertyOwner(e.to);if(c){var f=t.chatKeys[e.to+"<->"+e.from];if(f||(f=t._newChatCrypto(e,c,"decrypt"),t.chatKeys[e.to+"<->"+e.from]=f),f.authenticated&&!i){var l=JSON.parse(e.body.value),d=t.crypto.decode(l.iv),p=t.crypto.decode(l.value),y=t.crypto.decode(l.hash);t.crypto.decryptAES(f.keys.hypertyToSessionKey,p,d).then(function(n){
// log.log('decrypted value ', decryptedData);
e.body.value=n;var i=t._filterMessageToHash(e,n+d);t.crypto.verifyHMAC(f.keys.hypertyToHashKey,i,y).then(function(t){
// log.log('result of hash verification! ', result);
e.body.assertedIdentity=!0,r(e)})})}else i?t._doHandShakePhase(e,f).then(function(r){
//if it was started by doMutualAuthentication then ends the protocol
"handShakeEnd"===r?n("decrypt handshake protocol phase "):(t.chatKeys[e.to+"<->"+e.from]=r.chatKeys,t._messageBus.postMessage(r.message),n("decrypt handshake protocol phase "))}):n("wrong message do decrypt")}else n("error on decrypt message")}else s&&a?
// log.log('dataObject value to decrypt: ', message.body);
t.storageManager.get("dataObjectSessionKeys").then(function(n){var i=n?n[o]:null;if(i)
//check if is to apply encryption
if(i.isToEncrypt){var a=void 0;try{a=JSON.parse(e.body.value)}catch(t){
// If the message is not authenticated or had mutual auth active should continue
a=e.body.value}if(!a.hasOwnProperty("iv")&&!a.hasOwnProperty("value")&&!a.hasOwnProperty("hash"))return e.body.assertedIdentity=!0,r(e);var s=t.crypto.decode(a.iv),u=t.crypto.decode(a.value),c=t.crypto.decode(a.hash);t.crypto.decryptAES(i.sessionKey,u,s).then(function(n){var o=JSON.parse(atob(n));
// log.log('decrypted Value,', parsedValue);
e.body.value=o;var a=t._filterMessageToHash(e,o+s);t.crypto.verifyHMAC(i.sessionKey,a,c).then(function(t){
// log.log('result of hash verification! ', result);
e.body.assertedIdentity=!0,r(e)})})}else e.body.assertedIdentity=!0,r(e);else e.body.assertedIdentity=!0,r(e)}):n("wrong message to decrypt")})}},{key:"decryptDataObject",value:function(e,t){var r=this;return new u.default(function(n,i){
//if is not to apply encryption, then returns resolve
if(!r.isToUseEncryption)
// log.log('decryption disabled');
return n(e);var o=r._parseMessageURL(t);
// log.log('dataObject value to decrypt: ', dataObject);
r.storageManager.get("dataObjectSessionKeys").then(function(t){var a=t?t[o]:null;if(!a)return i("No dataObjectKey for this dataObjectURL:",o);
//check if is to apply encryption
if(!a.isToEncrypt)
// log.log('The dataObject is not encrypted');
return n(e);var s=r.crypto.decode(e.iv),u=r.crypto.decode(e.value);r.crypto.decryptAES(a.sessionKey,u,s).then(function(e){var t=JSON.parse(atob(e)),i={value:t,iv:r.crypto.encode(s)};
// log.log('decrypted dataObject,', newValue);
return n(i)}).catch(function(e){i("On decryptDataObject from method encryptAES error: "+e)})})})}},{key:"doMutualAuthentication",value:function(e,t){S.info("doMutualAuthentication:sender ",e),S.info("doMutualAuthentication:receiver ",t);var r=this;return new u.default(function(n,i){var o=void 0,a=r.registry.getReporterURLSynchonous(e);a&&(o=e,e=a);var s={to:t,from:e,callback:void 0,body:{handshakePhase:"startHandShake",ignore:"ignoreMessage"}};if(!e||!t)return i("sender or receiver missing on doMutualAuthentication");var u=r.chatKeys[e+"<->"+t],c=r._registry.getHypertyOwner(e);if(c){if(!u){
// callback to resolve when finish the mutual authentication
var f=function(e){
// log.log('callback value:', value);
n(e)};s.callback=f,s.dataObjectURL=o,u=r._newChatCrypto(s,c),r.chatKeys[e+"<->"+t]=u}if(u.authenticated){var l={to:e,from:t};u.dataObjectURL=o,r._sendReporterSessionKey(l,u).then(function(e){r._messageBus.postMessage(e.message),n("exchange of chat sessionKey initiated")}).catch(function(e){i("On doMutualAuthentication from method _sendReporterSessionKey error: "+e)})}else r._doHandShakePhase(s,u)}else i("Mutual authentication error: Hyperty owner could not be resolved")})}},{key:"getToken",value:function(e,t){var r=this;return new u.default(function(n,i){
// log.log('[Identity.IdentityModule.getToken] from->', fromURL, '  to->', toUrl);
t?(S.log("toUrl",t),r.registry.isLegacy(t).then(function(o){
// log.log('[Identity.IdentityModule.getToken] isLEGACY: ', result);
if(o){
// TODO: check if in the future other legacy hyperties have expiration times
// if so the check should be made here (or in the getAccessToken function)
var a=r.getAccessToken(t);if(a)return n(a);var s=(0,h.getUserIdentityDomain)(t);
// check if process to get token has already started
r.identitiesList[s]&&"in-progress"===r.identitiesList[s].status?
// The process to get the token has already started, let's wait by watching its status
r.watchingYou.observe("identitiesList",function(e){
// log.log('[Identity.IdentityModule.getToken]  identitiesList changed ' + _this.identitiesList);
var i=e.keypath;if(i.includes("status")&&(i=i.replace(".status","")),i===s&&"status"===e.name&&"created"===e.newValue)
// log.log('[Identity.IdentityModule.getToken] token is created ' + _this.identitiesList[domain]);
return n(r.getAccessToken(t))}):(
//Token does not exist and the process to get has not started yet
r.identitiesList[s]={status:"in-progress"},
// log.log('[Identity.IdentityModule.getToken] for-> ', domain);
r.callGenerateMethods(s).then(function(e){
// log.log('[Identity.IdentityModule.getToken] CallGeneratemethods', value);
var o=r.getAccessToken(t);return o?n(o):i("No Access token found")},function(e){return S.error("[Identity.IdentityModule.getToken] error CallGeneratemethods"),i(e)}))}else r._getValidToken(e).then(function(e){n(e)}).catch(function(e){i("On getToken from method _getValidToken error: "+e)})}).catch(function(e){i("On getToken from method isLegacy error: "+e)})):r._getValidToken(e).then(function(e){n(e)})})}},{key:"getIdToken",value:function(e){S.info("getIdToken:hypertyURL ",e);var t=this;return new u.default(function(r,n){if("hyperty"!==e.split("://")[0])t._getHypertyFromDataObject(e).then(function(e){var i=t.registry.getHypertyOwner(e);if(!i)return n("no identity was found ");for(var o in t.identities){var a=t.identities[o];if(a.identity===i)return r(a.messageInfo)}}).catch(function(e){S.error("no identity was found: ",e),n(e)});else{var i=t.registry.getHypertyOwner(e);if(!i)return n("no identity was found.");for(var o in t.identities){var a=t.identities[o];if(a.identity===i)
// TODO check this getIdToken when we run on nodejs environment;
// TODO check this getIdToken when we run on nodejs environment;
//hack while idm is not reestuctured
return a.hasOwnProperty("messageInfo")?a.messageInfo.hasOwnProperty("assertion")?r(a.messageInfo):(a.messageInfo.assertion=a.assertion,r(a.messageInfo)):r(a)}}})}},{key:"getAccessToken",value:function(e){var t=this,r=(0,h.divideURL)(e).domain;e.includes("protostub")&&(r=r.replace(r.split(".")[0]+".",""));var n=void 0,i=void 0,o=t._seconds_since_epoch();for(var a in t.identities){var s=t.identities[a];if(s.hasOwnProperty("interworking")&&s.interworking.domain===r)
// check if there is expiration time
// check if there is expiration time
// else this access token has no expiration time
return s.hasOwnProperty("info")&&s.info.hasOwnProperty("expires")&&(i=s.info.expires,o>=i)?null:(s.hasOwnProperty("messageInfo")&&s.messageInfo.hasOwnProperty("userProfile")&&s.messageInfo.userProfile&&(n={userProfile:s.messageInfo.userProfile,access_token:s.interworking.access_token},s.hasOwnProperty("infoToken")&&s.infoToken.hasOwnProperty("id")&&(n.userProfile.id=s.infoToken.id)),n)}return null}},{key:"sendRefreshMessage",value:function(e){var t=this;return new u.default(function(r,n){var i=t._resolveDomain(e.idp),o=void 0,a=t.getIdentity(e.userProfile.userURL);S.info("sendRefreshMessage:oldIdentity",e),o={type:"execute",to:i,from:t._idmURL,body:{resource:"identity",method:"refreshAssertion",params:{identity:a}}};try{t._messageBus.postMessage(o,function(e){var t=e.body.value;r(t)})}catch(e){n("In sendRefreshMessage on postMessage error: "+e)}})}},{key:"sendGenerateMessage",value:function(e,t,r,n){var i=this;return new u.default(function(o,a){var s=i._resolveDomain(n),u=void 0;u={type:"execute",to:s,from:i._idmURL,body:{resource:"identity",method:"generateAssertion",params:{contents:e,origin:t,usernameHint:r}}};try{i._messageBus.postMessage(u,function(e){var t=e.body.value;o(t)})}catch(e){a("In sendRefreshMessage on postMessage error: "+e)}})}},{key:"generateAssertion",value:function(e,t,r,n,i){var o=this;
// log.log('generateAssertion');
return new u.default(function(a,s){o.sendGenerateMessage(e,t,r,i).then(function(e){e.loginUrl?o.callIdentityModuleFunc("openPopup",{urlreceived:e.loginUrl}).then(function(e){a(e)},function(e){s(e)}):e?o.storeIdentity(e,n).then(function(e){a(e)},function(e){s(e)}):s("error on obtaining identity information")}).catch(function(e){s("On generateAssertion from method sendGenerateMessage error: "+e)})})}},{key:"validateAssertion",value:function(e,t,r){var n=this,i=n._resolveDomain(r),o={type:"execute",to:i,from:n._idmURL,body:{resource:"identity",method:"validateAssertion",params:{assertion:e,origin:t}}};return new u.default(function(e,t){try{n._messageBus.postMessage(o,function(r){200===r.body.code?e(r.body.value):t("error",r.body.code)})}catch(e){t("On validateAssertion from method postMessage error: "+e)}})}},{key:"addGUIListeners",value:function(){var e=this;e._messageBus.addListener(e._idmURL,function(t){var r=t.body.method,n=void 0;if("deployGUI"===r)n=e.deployGUI();else if("getIdentitiesToChoose"===r)n=e.getIdentitiesToChoose();else if("unregisterIdentity"===r){var i=t.body.params.email;n=e.unregisterIdentity(i)}else{if("generateRSAKeyPair"===r)
// because generateRSAKeyPair is a promise
// we have to send the message only after getting the key pair
return void e.crypto.generateRSAKeyPair().then(function(r){var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){S.error("On addGUIListeners from if generateRSAKeyPair method postMessage error: "+e)}});if("sendGenerateMessage"===r){var o=t.body.params.contents,a=t.body.params.origin,s=t.body.params.usernameHint,u=t.body.params.idpDomain;return void e.sendGenerateMessage(o,a,s,u).then(function(r){var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){S.error("On addGUIListeners from if sendGenerateMessage method postMessage error: "+e)}})}if("storeIdentity"===r){var c=t.body.params.result,f=t.body.params.keyPair;return void e.storeIdentity(c,f).then(function(r){var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){S.error("On addGUIListeners from if storeIdentity method postMessage error: "+e)}})}}/*else if (funcName === 'selectIdentityForHyperty') {
          let origin = msg.body.params.origin;
          let idp = msg.body.params.idp;
          let idHint = msg.body.params.idHint;
          _this.selectIdentityForHyperty(origin, idp, idHint);
          return;
          }*/
// if the function requested is not a promise
var l={type:"execute",value:n,code:200},d={id:t.id,type:"response",to:t.from,from:t.to,body:l};try{e._messageBus.postMessage(d)}catch(e){S.error("On addGUIListeners from if storeIdentity method postMessage error: "+e)}})}},{key:"deployGUI",value:function(){this.guiDeployed=!0}},{key:"_getValidToken",value:function(e){S.info("_getValidToken:hypertyURL",e);var t=this;return new u.default(function(r,n){t.getIdToken(e).then(function(e){S.log("[Identity.IdentityModule.getValidToken] Token",e);var i=t._seconds_since_epoch(),o=t.getIdentity(e.userProfile.userURL),a=void 0;o.hasOwnProperty("info")?o.info.hasOwnProperty("expires")?a=o.info.expires:o.info.hasOwnProperty("tokenIDJSON")?a=o.info.tokenIDJSON.exp:(
// throw 'The ID Token does not have an expiration time';
S.info("The ID Token does not have an expiration time"),r(e)):o.hasOwnProperty("infoToken")&&o.infoToken.hasOwnProperty("exp")?a=o.infoToken.exp:(
// throw 'The ID Token does not have an expiration time';
S.info("The ID Token does not have an expiration time"),r(e)),
// log.log('[Identity.IdentityModule.getValidToken] Token expires in: ', expiration_date,  ' | time now: ', time_now);
i>=a?"google.com"===e.idp?t.sendRefreshMessage(e).then(function(e){t.deleteIdentity(o.identity),t.storeIdentity(e,o.keyPair).then(function(e){r(e)},function(e){S.error("[Identity.IdentityModule.getToken] error on getToken",e),n(e)})}):(
// microsoft.com
t.deleteIdentity(o.identity),
// generate new idToken
t.callGenerateMethods(e.idp).then(function(e){r(e)}).catch(function(e){n("On addGUIListeners from if storeIdentity method postMessage error: "+e)})):r(e)}).catch(function(e){S.error("[Identity.IdentityModule.getToken] error on getToken",e),n(e)})})}},{key:"_getHypertyFromDataObject",value:function(e){S.info("_getHypertyFromDataObject:dataObjectURL",e);var t=this;return new u.default(function(r,n){var i=(0,h.divideURL)(e),o=i.domain,a=t._parseMessageURL(e),s=t.registry.getReporterURLSynchonous(a);if(S.info("_getHypertyFromDataObject:reporterURL",s),s)r(s);else{
// check if there is already an association from an hypertyURL to the dataObject
var u=t.dataObjectsIdentity[a];if(S.info("_getHypertyFromDataObject:storedReporterURL",u),u)r(u);else{
// check if there is any hyperty that subscribed the dataObjectURL
var c=t.registry.getDataObjectSubscriberHyperty(e);S.info("_getHypertyFromDataObject:subscriberHyperty",c),c?r(c):
// search in domain registry for the hyperty associated to the dataObject
// search in case is a subscriber who wants to know the reporter
t._coreDiscovery.discoverDataObjectPerURL(a,o).then(function(e){S.info("_getHypertyFromDataObject:dataObject",e),t.dataObjectsIdentity[a]=e.reporter,S.info("_getHypertyFromDataObject:dataObject.reporter",e.reporter),r(e.reporter)},function(e){n(e)})}}})}},{key:"_sendReporterSessionKey",value:function(e,t){var r=this;return new u.default(function(n,o){var a=r.dataObjectSessionKeys[t.dataObjectURL],s=void 0,u=void 0,c=void 0,f=void 0,l={};
//if there is not yet a session Key, generates a new one
a?c=a.sessionKey:(c=r.crypto.generateRandom(),r.dataObjectSessionKeys[t.dataObjectURL]={sessionKey:c,isToEncrypt:!0},r.storageManager.set("dataObjectSessionKeys",0,r.dataObjectSessionKeys).catch(function(e){o("On _sendReporterSessionKey from method storageManager.set error: "+e)}));try{u=(0,i.default)({value:r.crypto.encode(c),dataObjectURL:t.dataObjectURL})}catch(e){return o("On _sendReporterSessionKey from method storageManager.set error: "+e)}f=r.crypto.generateIV(),l.iv=r.crypto.encode(f),r.crypto.encryptAES(t.keys.hypertyFromSessionKey,u,f).then(function(n){s={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"reporterSessionKey",value:r.crypto.encode(n)}};var i=r._filterMessageToHash(s,u+f,t.hypertyFrom.messageInfo);return r.crypto.hashHMAC(t.keys.hypertyFromHashKey,i)}).then(function(e){var o=btoa((0,i.default)({value:s.body.value,hash:r.crypto.encode(e),iv:l.iv}));s.body.value=o,n({message:s,chatKeys:t})}).catch(function(e){o("On _sendReporterSessionKey from chained promises encryptAES error: "+e)})})}},{key:"_resolveDomain",value:function(e){return e?"domain-idp://"+e:"domain-idp://google.com"}},{key:"_doHandShakePhase",value:function(e,t){var r=this;return new u.default(function(n,o){var a=e.body.handshakePhase,s=void 0,u=void 0,c={},f=void 0;switch(S.info("handshake phase: ",a),a){case"startHandShake":t.keys.fromRandom=r.crypto.generateRandom();var l={type:"handshake",to:e.to,from:e.from,body:{handshakePhase:"senderHello",value:r.crypto.encode(t.keys.fromRandom)}};t.handshakeHistory.senderHello=r._filterMessageToHash(l,void 0,t.hypertyFrom.messageInfo),
// check if was the encrypt function or the mutual authentication that request the
// start of the handShakePhase.
t.initialMessage?n({message:l,chatKeys:t}):(r.chatKeys[e.from+"<->"+e.to]=t,r._messageBus.postMessage(l));break;case"senderHello":S.log("senderHello"),t.handshakeHistory.senderHello=r._filterMessageToHash(e),t.keys.fromRandom=r.crypto.decode(e.body.value),t.keys.toRandom=r.crypto.generateRandom();var d={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"receiverHello",value:r.crypto.encode(t.keys.toRandom)}};t.handshakeHistory.receiverHello=r._filterMessageToHash(d,void 0,t.hypertyFrom.messageInfo),n({message:d,chatKeys:t});break;case"receiverHello":S.log("receiverHello"),t.handshakeHistory.receiverHello=r._filterMessageToHash(e),r.validateAssertion(e.body.identity.assertion,void 0,e.body.identity.idp).then(function(n){
//TODO remove later this verification as soon as all the IdP proxy are updated in the example
var i="string"==typeof n.contents?n.contents:n.contents.nonce,o=r.crypto.decode(i),a=r.crypto.generatePMS(),s=e.body.value;t.hypertyTo.assertion=e.body.identity.assertion,t.hypertyTo.publicKey=o,t.hypertyTo.userID=n.contents.email,t.keys.toRandom=r.crypto.decode(s),t.keys.premasterKey=a;var u=r.crypto.concatPMSwithRandoms(a,t.keys.toRandom,t.keys.fromRandom);return r.crypto.generateMasterSecret(u,"messageHistoric"+t.keys.toRandom+t.keys.fromRandom)}).then(function(e){return t.keys.masterKey=e,r.crypto.generateKeys(e,"key expansion"+t.keys.toRandom+t.keys.fromRandom)}).then(function(n){t.keys.hypertyToSessionKey=new Uint8Array(n[0]),t.keys.hypertyFromSessionKey=new Uint8Array(n[1]),t.keys.hypertyToHashKey=new Uint8Array(n[2]),t.keys.hypertyFromHashKey=new Uint8Array(n[3]),s=r.crypto.generateIV(),c.iv=r.crypto.encode(s);var i={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"senderCertificate"}};
// hash the value and the iv
return f=r._filterMessageToHash(i,"ok"+s,t.hypertyFrom.messageInfo),r.crypto.hashHMAC(t.keys.hypertyFromHashKey,f)}).then(function(e){
//encrypt the data
return c.hash=r.crypto.encode(e),r.crypto.encryptAES(t.keys.hypertyFromSessionKey,"ok",s)}).then(function(e){return c.symetricEncryption=r.crypto.encode(e),r.crypto.encryptRSA(t.hypertyTo.publicKey,t.keys.premasterKey)}).then(function(n){c.assymetricEncryption=r.crypto.encode(n);var o={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"senderCertificate"}},a=r._filterMessageToHash(o,t.keys.premasterKey,t.hypertyFrom.messageInfo);return r.crypto.signRSA(t.hypertyFrom.privateKey,(0,i.default)(t.handshakeHistory)+(0,i.default)(a))}).then(function(o){c.signature=r.crypto.encode(o);var a={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"senderCertificate",value:btoa((0,i.default)(c))}};t.handshakeHistory.senderCertificate=r._filterMessageToHash(a,"ok"+s,t.hypertyFrom.messageInfo),n({message:a,chatKeys:t})},function(e){return o(e)});break;case"senderCertificate":S.log("senderCertificate");var p=JSON.parse(atob(e.body.value));r.validateAssertion(e.body.identity.assertion,void 0,e.body.identity.idp).then(function(n){var i=r.crypto.decode(p.assymetricEncryption),o="string"==typeof n.contents?n.contents:n.contents.nonce,a=r.crypto.decode(o);return t.hypertyTo.assertion=e.body.identity.assertion,t.hypertyTo.publicKey=a,t.hypertyTo.userID=n.contents.email,r.crypto.decryptRSA(t.hypertyFrom.privateKey,i)},function(e){
// log.log(error);
o("Error during authentication of identity")}).then(function(n){t.keys.premasterKey=new Uint8Array(n);var o=r.crypto.decode(p.signature),a=r._filterMessageToHash(e,t.keys.premasterKey);return r.crypto.verifyRSA(t.hypertyTo.publicKey,(0,i.default)(t.handshakeHistory)+(0,i.default)(a),o)}).then(function(e){S.log("signature validation result ",e);var n=r.crypto.concatPMSwithRandoms(t.keys.premasterKey,t.keys.toRandom,t.keys.fromRandom);return r.crypto.generateMasterSecret(n,"messageHistoric"+t.keys.toRandom+t.keys.fromRandom)}).then(function(e){return t.keys.masterKey=e,r.crypto.generateKeys(e,"key expansion"+t.keys.toRandom+t.keys.fromRandom)}).then(function(e){t.keys.hypertyFromSessionKey=new Uint8Array(e[0]),t.keys.hypertyToSessionKey=new Uint8Array(e[1]),t.keys.hypertyFromHashKey=new Uint8Array(e[2]),t.keys.hypertyToHashKey=new Uint8Array(e[3]),s=r.crypto.decode(p.iv);var n=r.crypto.decode(p.symetricEncryption);return r.crypto.decryptAES(t.keys.hypertyToSessionKey,n,s)}).then(function(n){
// log.log('decryptedData', decryptedData);
t.handshakeHistory.senderCertificate=r._filterMessageToHash(e,n+s);var i=r.crypto.decode(p.hash);return f=r._filterMessageToHash(e,n+s),r.crypto.verifyHMAC(t.keys.hypertyToHashKey,f,i)}).then(function(n){
// log.log('result of hash verification ', verifiedHash);
var i={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"receiverFinishedMessage"}};return s=r.crypto.generateIV(),c.iv=r.crypto.encode(s),f=r._filterMessageToHash(i,"ok!"+s,t.hypertyFrom.messageInfo),r.crypto.hashHMAC(t.keys.hypertyFromHashKey,i)}).then(function(e){return c.hash=r.crypto.encode(e),r.crypto.encryptAES(t.keys.hypertyFromSessionKey,"ok!",s)}).then(function(o){c.value=r.crypto.encode(o);var a={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"receiverFinishedMessage",value:btoa((0,i.default)(c))}};t.handshakeHistory.receiverFinishedMessage=r._filterMessageToHash(a,"ok!"+s,t.hypertyFrom.messageInfo),t.authenticated=!0,n({message:a,chatKeys:t})}).catch(function(e){o("On _doHandShakePhase from senderCertificate error: "+e)});break;case"receiverFinishedMessage":
// log.log('receiverFinishedMessage');
t.authenticated=!0,c=JSON.parse(atob(e.body.value)),s=r.crypto.decode(c.iv);var y=r.crypto.decode(c.value);u=r.crypto.decode(c.hash),r.crypto.decryptAES(t.keys.hypertyToSessionKey,y,s).then(function(i){
// log.log('decryptedData', decryptedData);
t.handshakeHistory.receiverFinishedMessage=r._filterMessageToHash(e,i+s);var a=r._filterMessageToHash(e,y+s);r.crypto.verifyHMAC(t.keys.hypertyToHashKey,a,u).then(function(i){
// log.log('hash result', result);
// check if there was an initial message that was blocked and send it
if(t.initialMessage){var a={type:"create",to:e.from,from:e.to,body:{value:t.initialMessage.body.value}};n({message:a,chatKeys:t})}else r._sendReporterSessionKey(e,t).then(function(e){n(e)}).catch(function(e){o("On _doHandShakePhase from receiverFinishedMessage error: "+e)})})});break;case"reporterSessionKey":var h=JSON.parse(atob(e.body.value));u=r.crypto.decode(h.hash),s=r.crypto.decode(h.iv);var v=r.crypto.decode(h.value),g=void 0,b=void 0,m=void 0,_=void 0;S.log("[IdentityModule reporterSessionKey] - decryptAES: ",t.keys.hypertyToSessionKey,v,s),r.crypto.decryptAES(t.keys.hypertyToSessionKey,v,s).then(function(n){g=JSON.parse(n),b=r.crypto.decode(g.value),m=g.dataObjectURL;var i=r._filterMessageToHash(e,n+s);return r.crypto.verifyHMAC(t.keys.hypertyToHashKey,i,u)}).then(function(e){
// log.log('hash successfully validated ', hashResult);
return r.dataObjectSessionKeys[m]={sessionKey:b,isToEncrypt:!0},r.storageManager.set("dataObjectSessionKeys",0,r.dataObjectSessionKeys),s=r.crypto.generateIV(),c.iv=r.crypto.encode(s),r.crypto.encryptAES(t.keys.hypertyFromSessionKey,"ok!!",s)}).then(function(n){_={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"receiverAcknowledge"}},c.value=r.crypto.encode(n);var i=r._filterMessageToHash(_,"ok!!"+s,t.hypertyFrom.messageInfo);return r.crypto.hashHMAC(t.keys.hypertyFromHashKey,i)}).then(function(e){var o=btoa((0,i.default)({value:c.value,hash:r.crypto.encode(e),iv:c.iv}));_.body.value=o,n({message:_,chatKeys:t})}).catch(function(e){o("On _doHandShakePhase from receiverFinishedMessage error: "+e)});break;case"receiverAcknowledge":S.log("receiverAcknowledge");var R=JSON.parse(atob(e.body.value)),w=r.crypto.decode(R.hash);s=r.crypto.decode(R.iv);var O=r.crypto.decode(R.value);r.crypto.decryptAES(t.keys.hypertyToSessionKey,O,s).then(function(n){var i=r._filterMessageToHash(e,n+s);return r.crypto.verifyHMAC(t.keys.hypertyToHashKey,i,w)}).then(function(e){
// log.log('hashResult ', hashResult);
var r=t.callback;r&&r("handShakeEnd"),n("handShakeEnd")}).catch(function(e){o("On _doHandShakePhase from receiverAcknowledge error: "+e)});break;default:o(e)}})}},{key:"_filterMessageToHash",value:function(e,t,r){return{type:e.type,from:e.from,to:e.to,body:{identity:r||e.body.identity,value:t||e.body.value,handshakePhase:e.body.handshakePhase}}}},{key:"_newChatCrypto",value:function(e,t,r){var n=this,i=r?e.to:e.from,o=r?e.from:e.to,a=n.getIdentity(t);return{hypertyFrom:{hyperty:i,userID:a.messageInfo.userProfile.username,privateKey:a.keyPair.private,publicKey:a.keyPair.public,assertion:a.assertion,messageInfo:a.messageInfo},hypertyTo:{hyperty:o,userID:void 0,publicKey:void 0,assertion:void 0},keys:{hypertyToSessionKey:void 0,hypertyFromSessionKey:void 0,hypertyToHashKey:void 0,hypertyFromHashKey:void 0,toRandom:void 0,fromRandom:void 0,premasterKey:void 0,masterKey:void 0},handshakeHistory:{senderHello:void 0,receiverHello:void 0,senderCertificate:void 0,receiverFinishedMessage:void 0},initialMessage:e.body.ignore?void 0:e,callback:e.callback,authenticated:!1,dataObjectURL:e.dataObjectURL}}},{key:"_seconds_since_epoch",value:function(){return Math.floor(Date.now()/1e3)}},{key:"_parseMessageURL",value:function(e){var t=e.split("/");return t.length<=6?t[0]+"//"+t[2]+"/"+t[3]:t[0]+"//"+t[2]+"/"+t[3]+"/"+t[4]}},{key:"messageBus",get:function(){return this._messageBus},set:function(e){var t=this;t._messageBus=e,t.addGUIListeners()}},{key:"coreDiscovery",get:function(){return this._coreDiscovery},set:function(e){this._coreDiscovery=e}},{key:"registry",get:function(){return this._registry},set:function(e){this._registry=e}}]),IdentityModule}();t.default=O,e.exports=t.default},/* 466 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=function(){function Identity(e,t){(0,i.default)(this,Identity);var r=this;r.guid=e,r.type=t,r.identifiersList={}}return(0,a.default)(Identity,[{key:"addIdentity",value:function(e){var t=this,r={idAssertion:"",serviceAddress:"",authenticationData:"",authorisationData:"",userProfile:""};t.identifiersList[e]=r}},{key:"addIdAssertion",value:function(e,t,r,n){var i=this,o=new u(t,r,n);i.idAssertionList.push(o)}}]),Identity}(),u=function IdAssertion(e,t,r){(0,i.default)(this,IdAssertion);var n=this;n.assertion=e,n.idp=t,n.scope=r};!function(){function IdValidation(e,t){(0,i.default)(this,IdValidation);var r=this;r.identity=e,r.contents=t}(0,a.default)(IdValidation,[{key:"validates",value:function(e,t){}}])}();t.default=s,e.exports=t.default},/* 467 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=function(){function Crypto(){(0,a.default)(this,Crypto)}/**
  * encode a byteArray value in base 64 encode
  * @param   {byteArray}    value    byteArray value
  * @return  {string}   encoded value
  */
return(0,u.default)(Crypto,[{key:"encode",value:function(e){return btoa(e)}},{key:"decode",value:function(e){return new Uint8Array(JSON.parse("["+atob(e)+"]"))}},{key:"encryptRSA",value:function(e,t){var r=this;return new i.default(function(n,i){r._importRSAencryptKey(new Uint8Array(e)).then(function(e){crypto.subtle.encrypt({name:"RSA-OAEP"},e,//from generateKey or importKey above
t).then(function(e){
//returns an ArrayBuffer containing the encrypted data
// console.log('crypto-encryptRSA', new Uint8Array(encrypted));
n(new Uint8Array(e))}).catch(function(e){
// console.log('crypto-encryptRSA', err);
i(e)})})})}},{key:"decryptRSA",value:function(e,t){var r=this;return new i.default(function(n,i){r._importRSAdecryptKey(e).then(function(e){crypto.subtle.decrypt({name:"RSA-OAEP"},e,//from generateKey or importKey above
t).then(function(e){var t=new Uint8Array(e);
// console.log('crypto-decryptRSA', decryptedData);
n(t)}).catch(function(e){
// console.log('crypto-decryptRSA', err);
i(e)})})})}},{key:"signRSA",value:function(e,t){var r=this;return new i.default(function(n,i){r._importRSAsignKey(e).then(function(e){crypto.subtle.sign({name:"RSASSA-PKCS1-v1_5"},e,//from generateKey or importKey above
r._utf8Encode(t)).then(function(e){
//returns an ArrayBuffer containing the signature
// console.log('crypto-signRSA', new Uint8Array(signature));
n(new Uint8Array(e))}).catch(function(e){
// console.log('crypto-signRSA', err);
i(e)})})})}},{key:"verifyRSA",value:function(e,t,r){var n=this;return new i.default(function(i,o){n._importRSAverifyKey(e).then(function(e){crypto.subtle.verify({name:"RSASSA-PKCS1-v1_5"},e,//from generateKey or importKey above
r,//ArrayBuffer of the signature
n._utf8Encode(t)).then(function(e){
//returns a boolean on whether the signature is true or not
// console.log('crypto-verifyRSA', isvalid);
i(e)}).catch(function(e){
// console.log('crypto-verifyRSA', err);
o(e)})})})}},{key:"encryptAES",value:function(e,t,r){var n=this;return new i.default(function(i,o){n._importAESkey(e).then(function(e){crypto.subtle.encrypt({name:"AES-CBC",
//Don't re-use initialization vectors!
//Always generate a new iv every time your encrypt!
iv:r},e,//from generateKey or importKey above
n._utf8Encode(t)).then(function(e){
//returns an ArrayBuffer containing the encrypted data
// console.log('crypto-encryptAES', new Uint8Array(encrypted));
i(new Uint8Array(e))}).catch(function(e){
// console.log('crypto-encryptAES', err);
o(e)})})})}},{key:"decryptAES",value:function(e,t,r){var n=this;return new i.default(function(i,o){n._importAESkey(e).then(function(e){crypto.subtle.decrypt({name:"AES-CBC",iv:r},e,//from generateKey or importKey above
t).then(function(e){var t=n._utf8Decode(new Uint8Array(e));
// console.log('crypto-decryptAES', decodedData);
i(t)}).catch(function(e){
// console.log('crypto-decryptAES', err);
o(e)})})})}},{key:"hashHMAC",value:function(e,t){var r=this;return new i.default(function(n,i){r._importHMACkey(e).then(function(e){crypto.subtle.sign({name:"HMAC"},e,//from generateKey or importKey above
r._utf8Encode(t)).then(function(e){
// console.log('crypto-hashHMAC', signature);
//returns an ArrayBuffer containing the signature
n(new Uint8Array(e))}).catch(function(e){
// console.log('crypto-hashHMAC', err);
i(e)})})})}},{key:"verifyHMAC",value:function(e,t,r){var n=this;return new i.default(function(i,o){n._importHMACkey(e).then(function(e){crypto.subtle.verify({name:"HMAC"},e,//from generateKey or importKey above
r,//ArrayBuffer of the signature
n._utf8Encode(t)).then(function(e){
//returns a boolean on whether the signature is true or not
// console.log('crypto-verifyHMAC', isvalid);
e?i(e):o(e)}).catch(function(e){o(e)})})})}},{key:"generateRSAKeyPair",value:function(){var e={};return new i.default(function(t,r){crypto.subtle.generateKey({name:"RSA-PSS",modulusLength:2048,//can be 1024, 2048, or 4096
publicExponent:new Uint8Array([1,0,1]),hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["sign","verify"]).then(function(n){
//returns a keypair object
// console.log(key);
crypto.subtle.exportKey("spki",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
n.publicKey).then(function(t){
//returns the exported key data
//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
return e.public=new Uint8Array(t),crypto.subtle.exportKey("pkcs8",n.privateKey)}).then(function(r){e.private=new Uint8Array(r),
// console.log('crypto-generateRSAKeyPair', keyPair);
t(e)}).catch(function(e){r(e)})}).catch(function(e){r(e)})})}},{key:"generateIV",value:function(){var e=new Uint8Array(16);return crypto.getRandomValues(e),e}},{key:"generateRandom",value:function(){var e=this,t=new Uint8Array(32);crypto.getRandomValues(t);
// add in the first 4 bytes of the array the bytes extracted previously;
for(var r=Date.now(),n=e._utf8Encode(r),i=n.slice(n.length-4,n.length),o=0;o<4;o++)t[o]=i[o];return t}},{key:"generatePMS",value:function(){var e=new Uint8Array(48);return crypto.getRandomValues(e),e}},{key:"generateMasterSecret",value:function(e,t){var r=this;return new i.default(function(n,i){var o=new Uint8Array(48),a=t;r._digest(e).then(function(e){r.hashHMAC(e,a).then(function(t){
//copy the first 32 bytes into the key
for(var n=0;n<32;n++)o[n]=t[n];return r.hashHMAC(e,a+t)}).then(function(e){
//copy the first 16 bytes to the key remaining 16 bytes
for(var t=0;t<16;t++)o[t+32]=e[t];
// console.log('crypto-generateMasterSecret', key);
n(o)}).catch(function(e){
// console.log('crypto-generateMasterSecret', err);
i(e)})})})}},{key:"generateKeys",value:function(e,t){var r=this;return new i.default(function(n,i){var o=[],a=t;
// iterate 4 times to obtain a 1024 key size
r.hashHMAC(e,a).then(function(t){return o.push(t),r.hashHMAC(e,a+t)}).then(function(t){return o.push(t),r.hashHMAC(e,a+t)}).then(function(t){return o.push(t),r.hashHMAC(e,a+t)}).then(function(e){o.push(e),
// console.log('crypto-generateKeys', key);
n(o)}).catch(function(e){
// console.log('crypto-generateKeys', err);
i(e)})})}},{key:"_importRSAsignKey",value:function(e){return new i.default(function(t,r){crypto.subtle.importKey("pkcs8",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
e,{//these are the algorithm options
name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["sign"]).then(function(e){
//returns a publicKey (or privateKey if you are importing a private key)
// console.log('crypto-_importRSAsignKey', privateKey);
t(e)}).catch(function(e){r(e)})})}},{key:"_importRSAverifyKey",value:function(e){return new i.default(function(t,r){crypto.subtle.importKey("spki",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
e,{//these are the algorithm options
name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["verify"]).then(function(e){
//returns a publicKey (or privateKey if you are importing a private key)
// console.log('crypto-_importRSAverifyKey', publicKey);
t(e)}).catch(function(e){r(e)})})}},{key:"_importRSAencryptKey",value:function(e){return new i.default(function(t,r){crypto.subtle.importKey("spki",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
e,{//these are the algorithm options
name:"RSA-OAEP",hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["encrypt"]).then(function(e){
//returns a publicKey (or privateKey if you are importing a private key)
// console.log('crypto-_importRSAencryptKey', publicKey);
t(e)}).catch(function(e){r(e)})})}},{key:"_importRSAdecryptKey",value:function(e){return new i.default(function(t,r){crypto.subtle.importKey("pkcs8",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
e,{//these are the algorithm options
name:"RSA-OAEP",hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["decrypt"]).then(function(e){
//returns a publicKey (or privateKey if you are importing a private key)
// console.log('crypto-_importRSAdecryptKey', privateKey);
t(e)}).catch(function(e){r(e)})})}},{key:"concatPMSwithRandoms",value:function(e,t,r){
// add PremasterKey
for(var n=new Uint8Array(e.length+t.length+r.length),i=0;i<e.length;i++)n[i]=e[i];
//add to random
for(var o=0;o<t.length;o++)n[o+e.length]=e[o];
//add from random
for(var a=0;a<r.length;a++)n[a+e.length+t.length]=e[a];return n}},{key:"_generate256bitKey",value:function(){var e=new Uint8Array(32);return crypto.getRandomValues(e),e}},{key:"_importHMACkey",value:function(e){var t=this;return new i.default(function(r,n){t._digest(e).then(function(e){crypto.subtle.importKey("raw",//can be 'jwk' or 'raw'
e,{//this is the algorithm options
name:"HMAC",hash:{name:"SHA-256"},//can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'
length:256},!0,//whether the key is extractable (i.e. can be used in exportKey)
["sign","verify"]).then(function(e){
//returns the symmetric key
// console.log('crypto-_importHMACkey', key);
r(e)}).catch(function(e){n(e)})})})}},{key:"_digest",value:function(e){return new i.default(function(t,r){crypto.subtle.digest({name:"SHA-256"},e).then(function(e){
//returns the hash as an ArrayBuffer
// console.log('crypto-digest', new Uint8Array(hash));
t(new Uint8Array(e))}).catch(function(e){r(e)})})}},{key:"_importAESkey",value:function(e){return new i.default(function(t,r){crypto.subtle.importKey("raw",//can be 'jwk' or 'raw'
e,{//this is the algorithm options
name:"AES-CBC"},!0,//whether the key is extractable (i.e. can be used in exportKey)
["encrypt","decrypt"]).then(function(e){
//returns the symmetric key
// console.log('crypto-importAESkey', key);
t(e)}).catch(function(e){r(e)})})}},{key:"_utf8Encode",value:function(e){return new TextEncoder("utf-8").encode(e)}},{key:"_utf8Decode",value:function(e){return new TextDecoder("utf-8").decode(e)}}]),Crypto}();t.default=c,e.exports=t.default},/* 468 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function GuiFake(e,t){(0,i.default)(this,GuiFake);var r=this;r._url=e,r._waitTime=1e4,r._messageBus=t,r._messageBus.addListener(r._url,function(e){if(e.hasOwnProperty("type")&&"create"===e.type&&e.body.hasOwnProperty("value")&&e.body.value.hasOwnProperty("identities")&&e.body.value.hasOwnProperty("idps")){var t=e.body.value.identities,n=e.body.value.idps,i=void 0;i=void 0!==t[0]?{type:"identity",value:t[0],code:200}:{type:"idp",value:n[0].domain,code:200};var o={id:e.id,type:"response",to:e.from,from:e.to,body:i};
// to test on the identity side the listener without the timeout
// can represent the time the user takes to choose and identity
"wait"===e.body.value?setTimeout(function(){r._messageBus.postMessage(o)},r._waitTime):r._messageBus.postMessage(o)}})};t.default=o,e.exports=t.default},/* 469 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(11),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=r(470),d=_interopRequireDefault(l),p=r(471),y=_interopRequireDefault(p),h=r(472),v=_interopRequireDefault(h),g=r(15),b=f.getLogger("PEP"),m=function(){/**
  * Creates a Policy Enforcement Point (PEP) instance
  * @param    {Object}    context
  */
function PEP(e){(0,a.default)(this,PEP);var t=this;t.pdp=new y.default(e),t.actionsService=new d.default(e),t.context=e,e.pep=t,
//TODO should be added a trigger to verify when the loadConfigurations is successfully completed
e.loadConfigurations()}/**
  * return the messageBus in this Registry
  * @param {MessageBus}           messageBus
  */
return(0,u.default)(PEP,[{key:"addGUIListeners",value:function(){var e=this;e.context.messageBus.addListener(e.context.pepURL,function(t){var r=t.body.method,n=void 0;if("addToGroup"===r){var i=t.body.params.groupName,o=t.body.params.userEmail;n=e.context.addToGroup(i,o)}else if("createGroup"===r){var a=t.body.params.groupName;n=e.context.createGroup(a)}else if("addPolicy"===r){var s=t.body.params.source,u=t.body.params.key,c=t.body.params.policy,f=t.body.params.combiningAlgorithm;n=e.addPolicy(s,u,c,f)}else if("deleteGroup"===r){var l=t.body.params.groupName;n=e.context.deleteGroup(l)}else if("removePolicy"===r){var d=t.body.params.source,p=t.body.params.key;n=e.removePolicy(d,p)}else if("savePolicies"===r){var y=t.body.params.source;n=e.context.savePolicies(y)}else if("userPolicies"===r)n=e.context.userPolicies;else if("activeUserPolicy"===r){var h=t.body.params.userPolicy;h&&(e.context.activeUserPolicy=h),n=e.context.activeUserPolicy}else if("userPolicy"===r){var v=t.body.params.key;n=e.context.userPolicies[v]}else"saveActivePolicy"===r?n=e.context.saveActivePolicy():"getMyEmails"===r?n=e.context.getMyEmails():"getMyHyperties"===r?n=e.context.getMyHyperties():"groups"===r?n=e.context.groups:"getGroupsNames"===r&&(n=e.context.getGroupsNames());if("removeFromGroup"===r){var g=t.body.params.groupName,b=t.body.params.userEmail;n=e.context.removeFromGroup(g,b)}var m={type:"execute",value:n,code:200},_={id:t.id,type:"response",to:t.from,from:t.to,body:m};e.context.messageBus.postMessage(_)})}},{key:"addPolicy",value:function(e,t,r,n){if(!e)throw new Error("source is not defined");if(!t)throw new Error("key is not defined");switch(void 0===r?r=new v.default(t,[],[],n):r instanceof v.default||(r=new v.default(r.key,r.rules,r.actions,r.combiningAlgorithm)),e){case"SERVICE_PROVIDER":this.context.savePolicies(e,r,t);break;case"USER":this.context.userPolicies[t]=r,this.context.savePolicies(e);break;default:throw Error("Unknown policy source: "+e)}}},{key:"authorise",value:function(e){var t=this;
// log.log('[Policy.PEP Authorise] ', message);
// log.log(message);
if(!e)throw new Error("message is not defined");if(!e.from)throw new Error("message.from is not defined");if(!e.to)throw new Error("message.to is not defined");if(!e.type)throw new Error("message.type is not defined");return e.body=e.body||{},new i.default(function(r,n){e.body=e.body||{};var i=t,o=void 0;if(i._isToVerify(e)){var a=i._isIncomingMessage(e);i.context.prepareForEvaluation(e,a).then(function(e){o=i.pdp.evaluatePolicies(e,a),"Not Applicable"===o&&(o=i.context.defaultBehaviour,e.body.auth=!1),i.actionsService.enforcePolicies(e,a).then(function(t){for(var s in t)e=t[s],i.context.prepareToForward(e,a,o).then(function(e){if(o)/*  if (isIncoming && message.body.identity) {
                        delete message.body.identity.assertion;
                        delete message.body.identity.expires;
                      } */
e.body.auth=void 0===e.body.auth||e.body.auth,r(e);else{var t={body:{code:403,description:"Blocked by policy"},from:e.to,to:e.from,type:"response"};n(t)}},function(e){n(e)})},function(e){n(e)})},function(e){n(e)})}else if(o=i.context.defaultBehaviour)e.body.auth=!1,r(e);else{var s={body:{code:403,description:"Blocked by policy"},from:e.to,to:e.from,type:"response"};n(s)}})}},{key:"authoriseSync",value:function(e){var t=void 0;if(e.body=e.body||{},this._isToVerify(e)){var r=this._isIncomingMessage(e);return e=this.context.prepareForEvaluation(e,r),t=this.pdp.evaluatePolicies(e,r),"Not Applicable"===t&&(t=this.context.defaultBehaviour,e.body.auth=!1),this.actionsService.enforcePolicies(e,r),e=this.context.prepareToForward(e,r,t),!!t&&(e.body.auth=void 0===e.body.auth||e.body.auth,!0)}return!!(t=this.context.defaultBehaviour)&&(e.body.auth=!1,!0)}},{key:"_isIncomingMessage",value:function(e){var t=void 0;
//TODO: this subscriber validation should not exist, because is outdated
//TODO: the syncher and syncher manager not following the correct spec;
//TODO: this subscriber validation should not exist, because is outdated
//TODO: the syncher and syncher manager not following the correct spec;
return"forward"===e.type?(b.info("[PEP - isIncomingMessage] - message.type: ",e.type),t=e.body.from):e.body.hasOwnProperty("source")&&e.body.source?(b.info("[PEP - isIncomingMessage] - message.body.source: ",e.body.source),t=e.body.source):e.body.hasOwnProperty("subscriber")&&e.body.subscriber?(b.info("[PEP - isIncomingMessage] - message.body.subscriber: ",e.body.subscriber),t=e.body.subscriber):e.body.hasOwnProperty("reporter")&&e.body.reporter?(b.info("[PEP - isIncomingMessage] - message.body.reporter: ",e.body.reporter),t=e.body.reporter):(b.info("[PEP - isIncomingMessage] - message.from ",e.from),t=e.from),b.info("[PEP - isIncomingMessage] - check if isLocal: ",t),!this.context.isLocal(t)}},{key:"_isToVerify",value:function(e){var t=["domain","domain-idp","global","hyperty-runtime","runtime"],r=e.from.split("://"),n=r[0],i=e.to.split("://"),o=i[0],a=e.from,s=e.to;
// Signalling messages between P2P Stubs don't have to be verified. FFS
// hack to disable Identity verification for messages coming from legacy domains while solution is not implemented
return e.body&&e.body.source&&(a=e.body.source),e.body&&e.body.subscriber&&(a=e.body.subscriber),-1===a.indexOf("/p2phandler/")&&-1===a.indexOf("/p2prequester/")&&-1===s.indexOf("/p2phandler/")&&-1===s.indexOf("/p2prequester/")&&(!this.context.isInterworkingProtoStub(a)&&(!(e.from===n||e.to===o||"read"===e.type||"response"===e.type||(0,g.isHypertyURL)(e.from)&&"delete"===e.type)&&(-1===t.indexOf(n)||-1===t.indexOf(o))))}},{key:"removePolicy",value:function(e,t){if(!e)throw new Error("source is not defined");if("*"!==e&&!t)throw new Error("key is not defined");switch(e){case"*":this.context.serviceProviderPolicy={},this.context.userPolicies={},this.context.activeUserPolicy=void 0,this.context.savePolicies("USER"),this.context.savePolicies("SERVICE_PROVIDER"),this.context.saveActivePolicy();break;case"SERVICE_PROVIDER":delete this.context.serviceProviderPolicy[t],this.context.savePolicies();break;case"USER":delete this.context.userPolicies[t],t===this.context.activeUserPolicy&&(this.context.activeUserPolicy=void 0,this.context.saveActivePolicy()),this.context.savePolicies("USER");break;default:throw Error("Unknown policy source: "+e)}}},{key:"messageBus",get:function(){return this.context.messageBus},set:function(e){var t=this;t.context.messageBus=e,t.addGUIListeners()}}]),PEP}();t.default=m,e.exports=t.default},/* 470 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=function(){function ActionsService(e){(0,a.default)(this,ActionsService),this.context=e}return(0,u.default)(ActionsService,[{key:"enforcePolicies",value:function(e,t){var r=this;return new i.default(function(n,i){var o=r.context.getPolicies(e,t);void 0!==o?void 0!==o.serviceProviderPolicy?o.serviceProviderPolicy.enforceActions(r.context,e).then(function(e){n(e)},function(e){i(e)}):void 0!==o.userPolicy?o.userPolicy.enforceActions(r.context,e).then(function(e){n(e)},function(e){i(e)}):n([e]):n([e])})}},{key:"forwardToID",value:function(e,t){var r=this;if(!r.context.runtimeRegistry)throw new Error("forward message to given ID is unsupported in this environment");return new i.default(function(n,i){if(r.context.runtimeRegistry.hypertiesList[0].hypertyURL===e.to){"runtime"!==e.to.split("://")[0]?r.context.runtimeRegistry.discoverHypertyPerUser(t).then(function(t){e.to=t.hypertyURL,e.body.via=void 0,n(e),r.context.runtimeRegistry._messageBus.postMessage(e)},function(e){i(e)}):n(e)}else n(e)})}},{key:"forwardToHyperty",value:function(e,t){var r=this;if(!r.context.runtimeRegistry)throw new Error("forward message to given ID is unsupported in this environment");return new i.default(function(n){if(r.context.runtimeRegistry.hypertiesList[0].hypertyURL===e.to){"runtime"!==e.to.split("://")[0]?(e.to=t,e.body.via=void 0,n(e),r.context.runtimeRegistry._messageBus.postMessage(e)):n(e)}else n(e)})}},{key:"sendAutomaticMessage",value:function(e,t){var r=this;return new i.default(function(n){var i={from:e.to,to:e.from,body:{value:t},type:e.type};n(e),r.context.runtimeRegistry._messageBus.postMessage(i)})}}]),ActionsService}();t.default=c,e.exports=t.default},/* 471 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=r(142),u=_interopRequireDefault(s),c=function(){function PDP(e){(0,i.default)(this,PDP),this.context=e,this.operators=new u.default}return(0,a.default)(PDP,[{key:"evaluatePolicies",value:function(e,t){var r=this.context.getPolicies(e,t),n="Not Applicable";if(void 0!==r&&((n=this.evaluatePolicy(e,r.serviceProviderPolicy,t))||"Not Applicable"===n)){var i=this.evaluatePolicy(e,r.userPolicy,t);"Not Applicable"!==i&&(n=i)}return n}},{key:"evaluatePolicy",value:function(e,t,r){var n="Not Applicable";return t&&(n=t.evaluateRules(this.context,e,r)),n}}]),PDP}();t.default=c,e.exports=t.default},/* 472 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(202),f=_interopRequireDefault(c),l=r(203),d=_interopRequireDefault(l),p=r(204),y=_interopRequireDefault(p),h=r(473),v=_interopRequireDefault(h),g=function(){function Policy(e,t,r,n){if((0,a.default)(this,Policy),!e)throw new Error("key is not defined");if(!r)throw new Error("actions are not defined");this.actions=r,this.key=e,this._setRules(t),this._setCombiningAlgorithm(n)}return(0,u.default)(Policy,[{key:"addAction",value:function(e,t){this.actions.push({method:e,param:t})}},{key:"createRule",value:function(e,t,r,n,i){void 0===i&&(i=this.getLastPriority()+1);var o=new v.default(e,t,r,n,i);this.rules.push(o)}},{key:"deleteRule",value:function(e){var t=this.rules.indexOf(e);this.rules.splice(t,1)}},{key:"enforceActions",value:function(e,t){var r=this;return new i.default(function(n,o){var a=[];if(0!==r.actions.length){for(var s in r.actions){var u=e.pep.actionsService[r.actions[s].method](t,r.actions[s].param);a.push(u)}i.default.all(a).then(function(e){n(e)},function(e){o(e)})}else n([t])})}},{key:"evaluateRules",value:function(e,t,r){var n=[];for(var i in this.rules)n.push(this.rules[i].evaluate(e,t,r));return this.combiningAlgorithm.combine(n)}},{key:"getLastPriority",value:function(){var e=[];if(0!==this.rules.length){for(var t in this.rules)e.push(this.rules[t].priority);return Math.max.apply(Math,e)}return-1}},{key:"getRuleByPriority",value:function(e){for(var t in this.rules)if(String(this.rules[t].priority)===String(e))return this.rules[t];throw Error("Rule with priority "+e+" does not exist!")}},{key:"_setCombiningAlgorithm",value:function(e){switch(e||(e="blockOverrides"),e){case"blockOverrides":this.combiningAlgorithm=new d.default;break;case"allowOverrides":this.combiningAlgorithm=new f.default;break;case"firstApplicable":this.combiningAlgorithm=new y.default;break;default:throw Error("Unknown algorithm: "+e)}}},{key:"_setRules",value:function(e){this.rules=[];for(var t in e){var r=e[t];void 0===r.priority&&(r.priority=this.getLastPriority()+1),r instanceof v.default||(r=new v.default(r.decision,r.condition,r.scope,r.target,r.priority)),this.rules.push(r)}}},{key:"sortRules",value:function(){return this.rules.sort(function(e,t){var r=e.priority,n=t.priority;return r<n?-1:r>n?1:0})}}]),Policy}();t.default=g,e.exports=t.default},/* 473 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=r(474),u=_interopRequireDefault(s),c=r(143),f=_interopRequireDefault(c),l=r(15),d=function(){function Rule(e,t,r,n,o){(0,i.default)(this,Rule),this.decision=e,this.setCondition(t),this.priority=o,this.scope=r,this.target=n}return(0,a.default)(Rule,[{key:"setCondition",value:function(e){if(e instanceof f.default||e instanceof u.default||e instanceof u.default)this.condition=e;else{switch(e.attribute){case"subscription":this.condition=new u.default(e.attribute,e.operator,e.params);break;case void 0:this.condition=new u.default(e);break;default:this.condition=new f.default(e.attribute,e.operator,e.params)}}}},{key:"evaluate",value:function(e,t,r){var n=r?t.to:t.from,i=void 0;switch(this.scope){case"global":break;case"hyperty":if((0,l.isDataObjectURL)(n)){var o=e.runtimeRegistry.getReporterURLSynchonous((0,l.removePathFromURL)(n));void 0!==o&&(i=e.runtimeRegistry.getHypertyName(o))}else"hyperty"===n.split("://")[0]&&(i=e.runtimeRegistry.getHypertyName((0,l.removePathFromURL)(n)));if(i===this.target)break;return"Not Applicable";case"identity":var a=void 0;if((0,l.isDataObjectURL)(n)){var s=e.runtimeRegistry.getReporterURLSynchonous((0,l.removePathFromURL)(n));a=e.runtimeRegistry.getHypertyOwner(s)}else"hyperty"===n.split("://")[0]&&(a=e.runtimeRegistry.getHypertyOwner((0,l.removePathFromURL)(n)));if(void 0!==a&&(a=(0,l.getUserEmailFromURL)(a)),a===this.target)break;return"Not Applicable"}return this.condition.isApplicable(e,t,this.scope,this.target)?this.decision:"Not Applicable"}}]),Rule}();t.default=d,e.exports=t.default},/* 474 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=r(143),u=_interopRequireDefault(s),c=r(142),f=_interopRequireDefault(c),l=r(475),d=_interopRequireDefault(l),p=function(){function AdvancedCondition(e){(0,i.default)(this,AdvancedCondition),this.operators=new f.default,void 0!==e.operators&&(e=e.condition),e=this.buildCondition(e),this.condition=e}return(0,a.default)(AdvancedCondition,[{key:"buildCondition",value:function(e){return Array.isArray(e[1])?e[1]=this.buildCondition(e[1]):"subscription"===e[1].attribute?e[1]=new d.default(e[1].attribute,e[1].operator,e[1].params):e[1]=new u.default(e[1].attribute,e[1].operator,e[1].params),void 0!==e[2]&&(Array.isArray(e[2])?e[2]=this.buildCondition(e[2]):"subscription"===e[2].attribute?e[2]=new d.default(e[2].attribute,e[2].operator,e[2].params):e[2]=new u.default(e[2].attribute,e[2].operator,e[2].params)),e}},{key:"isApplicable",value:function(e,t,r,n,i,o,a){for(i||(i=this.condition[0],o=this.condition[1],a=this.condition[2]);!(o instanceof u.default)&!(o instanceof d.default)&"boolean"!=typeof o;)o=this.isApplicable(e,t,r,n,o[0],o[1],o[2]);if(void 0!==a)for(;!(a instanceof u.default)&!(a instanceof d.default)&"boolean"!=typeof a;)a=this.isApplicable(e,t,r,n,a[0],a[1],a[2]);var s="boolean"==typeof o?o:o.isApplicable(e,t,r,n),c=void 0;return void 0!==a&&(c="boolean"==typeof a?a:a.isApplicable(e,t,r,n)),this.operators[i]([s,c])}}]),AdvancedCondition}();t.default=p,e.exports=t.default},/* 475 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(60),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(68),f=_interopRequireDefault(c),l=r(476),d=_interopRequireDefault(l),p=r(69),y=_interopRequireDefault(p),h=r(143),v=_interopRequireDefault(h),g=function(e){/**
  * Creates a new SubscriptionCondition.
  * @class
  * @param  {string}  attribute
  * @param  {string}  operator
  * @param  {*}       params
  */
function SubscriptionCondition(e,t,r){return(0,a.default)(this,SubscriptionCondition),(0,f.default)(this,(SubscriptionCondition.__proto__||(0,i.default)(SubscriptionCondition)).call(this,e,t,r))}/**
  * Verifies if the subscription condition is applicable to the message. First, verifies if the message is of the subscription type; second, verifies if the message is from a remote runtime to guarantee that the subscription is being validated in the destination runtime; third, verifies if the subscription preference is met.
  * @param  {Object}    context   environment where the Policy Engine is being used
  * @param  {Object}    message
  */
return(0,y.default)(SubscriptionCondition,e),(0,u.default)(SubscriptionCondition,[{key:"isApplicable",value:function(e,t){return!!("subscribe"===t.type&e.isFromRemoteSM(t.from))&&(0,d.default)(SubscriptionCondition.prototype.__proto__||(0,i.default)(SubscriptionCondition.prototype),"isApplicable",this).call(this,e,t)}}]),SubscriptionCondition}(v.default);/**
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
t.default=g,e.exports=t.default},/* 476 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(60),i=_interopRequireDefault(n),o=r(477),a=_interopRequireDefault(o);t.default=function get(e,t,r){null===e&&(e=Function.prototype);var n=(0,a.default)(e,t);if(void 0===n){var o=(0,i.default)(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(r)}},/* 477 */
/***/
function(e,t,r){e.exports={default:r(478),__esModule:!0}},/* 478 */
/***/
function(e,t,r){r(479);var n=r(13).Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},/* 479 */
/***/
function(e,t,r){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var n=r(44),i=r(141).f;r(97)("getOwnPropertyDescriptor",function(){return function(e,t){return i(n(e),t)}})},/* 480 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),i=_interopRequireDefault(n),o=r(60),a=_interopRequireDefault(o),s=r(1),u=_interopRequireDefault(s),c=r(2),f=_interopRequireDefault(c),l=r(68),d=_interopRequireDefault(l),p=r(69),y=_interopRequireDefault(p),h=r(11),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(h),g=r(200),b=_interopRequireDefault(g),m=r(481),_=_interopRequireDefault(m),R=v.getLogger("MessageBus"),w=function(e){/* private
  _registry: Registry
  _forwards: { <from-url>: { fl: MsgListener, sandboxToUrls: Map(Sandbox, [to-url]), urlToSandbox: { to-url: Sandbox } } }
   _pipeline: Pipeline
  */
//TODO: future optimization
//1. message batch processing with setInterval
//2. resolve default gateway/protostub with register.resolve
function MessageBus(e){(0,u.default)(this,MessageBus);var t=(0,d.default)(this,(MessageBus.__proto__||(0,a.default)(MessageBus)).call(this));return t._registry=e,t._forwards={},t._pipeline=new _.default(function(e){R.error("PIPELINE-ERROR: ",(0,i.default)(e))}),t}return(0,y.default)(MessageBus,e),(0,f.default)(MessageBus,[{key:"postMessage",/**
     * Post a message for routing. It will first search for a listener, if there is no one, it sends to a external routing using the _onPostMessage.
     * External routing use the registry.resolve(..) method to decide the destination sandbox.
     * @param  {Message} inMsg            JSON with mandatory Message structure {id, type, from, to}
     * @param  {Callback} responseCallback Optional callback if a response is expected from the request. A response will be always sent, even if it is a "Timeout".
     * @return {number}                  the Message id
     */
value:function(e,t){R.info("onPOSTMessage: ",e);var r=this;return r._genId(e),r._pipeline.process(e,function(n){if(r._responseCallback(e,t),!r._onResponse(n)){var i=r._subscriptions[n.to];i?
//do not publish on default address, because of loopback cycle
r._publishOn(i,n):
//if there is no listener, send to external interface
r._onPostMessage(n)}}),e.id}},{key:"addPublish",value:function(e){var t=this,r=this,n=r._forwards[e];if(!n){n={counter:0,fl:r.addListener(e,function(t){R.info("MB-PUBLISH: ( "+e+" )"),r._onPostMessage(t)}),remove:function(){0===--t.counter&&(t.fl.remove(),delete r._forwards[e])}},r._forwards[e]=n}return n.counter++,n}},{key:"addForward",value:function(e,t){var r=this;return r.addListener(e,function(n){R.info("MB-FORWARD: ( "+e+" to "+t+" )"),r.forward(t,n)})}},{key:"forward",value:function(e,t){var r=this,n=r._subscriptions[e];n&&r._publishOn(n,t)}},{key:"_onPostMessage",value:function(e){var t=this;
//resolve external protostub...
t._registry.resolve(e).then(function(r,n){n?t.forward(r,n):t.forward(r,e)}).catch(function(e){R.error("RESOLVE-ERROR: ",e)})}},{key:"pipeline",get:function(){return this._pipeline}}]),MessageBus}(b.default);t.default=w,e.exports=t.default},/* 481 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=function(){/* public
    handlers: ((PipeContext) => void)[]
    onFail: (error) => void
  */
function Pipeline(e){(0,i.default)(this,Pipeline);var t=this;t.handlers=[],t.onFail=e}/**
   * Insert a message in the pipeline queue. All messages are wrapped with a PipeContext.
   * @param  {Message} msg       Message for the queue
   * @param  {Callback} onDeliver When message is finished processing from all handlers, it will be delivered in this callback.
   */
return(0,a.default)(Pipeline,[{key:"process",value:function(e,t){var r=this;if(r.handlers.length>0){var n=new c(r.handlers);n.next(new u(r,n,e,t))}else t(e)}}]),Pipeline}(),u=function(){/* private
    _inStop: boolean
     _pipeline: Pipeline
    _iter: Iterator
    _msg: Message
  */
function PipeContext(e,t,r,n){(0,i.default)(this,PipeContext);var o=this;o._inStop=!1,o._pipeline=e,o._iter=t,o._msg=r,o._onDeliver=n}return(0,a.default)(PipeContext,[{key:"next",/**
     * Proceed to the next interceptor handler, unless there was an error. If it's the last one, proceed to onDeliver handler.
     */
value:function(){var e=this;e._inStop||(e._iter.hasNext?e._iter.next(e):e._onDeliver(e._msg))}},{key:"deliver",value:function(){var e=this;e._inStop||(e._inStop=!0,e._onDeliver(e._msg))}},{key:"fail",value:function(e){var t=this;t._inStop||(t._inStop=!0,t._pipeline.onFail&&t._pipeline.onFail(e))}},{key:"pipeline",get:function(){return this._pipeline}},{key:"msg",get:function(){return this._msg},set:function(e){this._msg=e}}]),PipeContext}(),c=function(){/* private
    _index: number
    _array: []
  */
function Iterator(e){(0,i.default)(this,Iterator),this._index=-1,this._array=e}return(0,a.default)(Iterator,[{key:"hasNext",get:function(){return this._index<this._array.length-1}},{key:"next",get:function(){return this._index++,this._array[this._index]}}]),Iterator}();t.default=s,e.exports=t.default},/* 482 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(96),i=_interopRequireDefault(n),o=r(12),a=_interopRequireDefault(o),s=r(1),u=_interopRequireDefault(s),c=r(2),f=_interopRequireDefault(c),l=r(11),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=r(15),y=r(99),h=_interopRequireDefault(y),v=d.getLogger("loader"),g=function(){function Loader(e,t,r){if((0,u.default)(this,Loader),!t)throw Error("[Runtime.Loader] The descriptor need to know the runtime configuration");if(!r)throw Error("[Runtime.Loader] The descriptor need to know the runtime Descriptor instance");this.log=v,this.runtimeConfiguration=t,this.descriptors=r}/**
   * Set runtime url
   * @param  {string} value runtimeURL
   */
return(0,f.default)(Loader,[{key:"loadHyperty",/**
     * Deploy Hyperty from Catalogue URL
     *
     * @see https://github.com/reTHINK-project/specs/tree/master/datamodel/core/address
     *
     * @param {URL.HypertyCatalogueURL} hypertyCatalogueURL - The Catalogue URL used to identify descriptors in the Catalogue.
     * @param {boolean|URL.HypertyURL} [reuseURL=false] reuseURL - reuseURL is used to reuse the hypertyURL previously registred, by default the reuse is disabled;
     * @param {URL} appURL - the app url origin address;
     * @param {object} IdpConstraint - constraints to be used when selecting the identity to be associated with the Hyperty including origin, idp, and idHint.
     * @returns {Promise<Boolean, Error>} this is Promise and returns true if all components are loaded with success or an error if someone fails.
     *
     * @memberOf Loader
     */
value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this,n=arguments[2];arguments[3];if(!this._readyToUse())return!1;if(!e)throw new Error("[Runtime.Loader] Hyperty descriptor url parameter is needed");return new a.default(function(o,a){var s=void 0,u=void 0,c=void 0,f=void 0,l=!1,d=function(e){v.info("[Runtime.Loader] Something failed on the deploy hyperty: ",e),a(e)},y=function(e){l=!0,a(e)};
// Get Hyperty descriptor
// TODO: the request Module should be changed,
// because at this moment it is incompatible with nodejs;
// Probably we need to pass a factory like we do for sandboxes;
return v.info("[Runtime.Loader] ------------------ Hyperty ------------------------"),v.info("[Runtime.Loader] Get hyperty descriptor for :",e),r.descriptors.getHypertyDescriptor(e).then(function(e){
// at this point, we have completed "step 2 and 3" as shown in https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md
v.info("[Runtime.Loader] 1: return hyperty descriptor"),
// hyperty contains the full path of the catalogue URL, e.g.
// catalogue.rethink.eu/.well-known/..........
c=e;var t=e.sourcePackageURL;return"/sourcePackage"===t?e.sourcePackage:r.runtimeCatalogue.getSourcePackageFromURL(t)},y).then(function(e){if(l)return!1;v.info("[Runtime.Loader] 2: return hyperty source code"),
// at this point, we have completed "step 4 and 5" as shown in https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md
f=e;return!0},y).then(function(e){if(l)return!1;v.info("[Runtime.Loader] 3: return policy engine result"+e);
// this will return the sandbox or one promise to getSandbox;
return r.registry.getAppSandbox()},y).then(function(e){return!l&&(v.info("[Runtime.Loader] 4: return the sandbox",e),e)},function(e){if(l)return!1;v.info("[Runtime.Loader] 4.1: Try to register a new sandbox");
// check if the sandbox is registed for this hyperty descriptor url;
// Make Steps xxx --- xxx
// Instantiate the Sandbox
var t={};return c&&c.hasOwnProperty("capabilities")&&(t=c.stubCapabilities),r._runtimeFactory.createSandbox(t).then(function(e){return e.addListener("*",function(e){r.messageBus.postMessage(e)}),e})},y).then(function(e){if(l)return!1;v.info("[Runtime.Loader] 5: return sandbox and register"),u=e;return r._addressAllocation.create(r._registry._domain,1,c,"hyperty",t)},y).then(function(t){return!l&&(v.info("[Runtime.Loader] 6: return the addresses for the hyperty",t),r.registry.registerHyperty(u,e,c,t,n))},y).then(function(e){if(l)return!1;v.info("[Runtime.Loader] 7: registration result",e),
// we have completed step 16 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
s=e.url;
// Extend original hyperty configuration;
var t={};if(!(0,p.emptyObject)(c.configuration))try{t=(0,i.default)({},JSON.parse(c.configuration))}catch(e){t=c.configuration}t.runtimeURL=r._runtimeURL,e.p2pHandler&&(t.p2pHandler=e.p2pHandler,t.p2pRequester=e.p2pRequester);
// We will deploy the component - step 17 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
try{return u.deployComponent(f.sourceCode,s,t)}catch(e){v.info("[Runtime.Loader] Error on deploy component:",e),a(e)}},y).then(function(e){if(l)return!1;v.info("[Runtime.Loader] 8: Deploy component status for hyperty: ",e),
// we have completed step 19 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
// Add the message bus listener to the appSandbox or hypertSandbox;
r.messageBus.addListener(s,function(e){u.postMessage(e)});
// we have completed step 20 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
var t={runtimeHypertyURL:s,status:e};v.info("[Runtime.Loader] Hyperty: ",t),o(t),
// we have completed step 21 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
v.info("[Runtime.Loader] ------------------ END ------------------------")},y).catch(d)})}},{key:"loadStub",value:function(e,t){var r=this;if(!this._readyToUse())return!1;if(!e)throw new Error("[Runtime.Loader.loadStub]ProtoStub descriptor url parameter is needed");return new a.default(function(n,o){
// to analyse if domain for p2pHandlers should be something else and not the default domain itself
var a=(0,p.divideURL)(e).domain;a||(a=e);var s=void 0,u=void 0,c=void 0,f=void 0,l=!1,d=void 0,y=function(e){v.info("[Runtime.Loader.loadStub]Something failed on the deploy of protocolstub: ",e),o(e)},h=function(e){l=!0,o(e)},g=void 0,b={};v.info("[Runtime.Loader.loadStub] starting loading for ",e," with p2pconfig ",t),v.info("[Runtime.Loader.loadStub]Discover or Create a new ProtoStub for domain: ",a);
// step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
try{if(t)if(t.hasOwnProperty("isHandlerStub")&&t.isHandlerStub)
// step 6 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
!0,d=r.runtimeURL,g=r.registry.discoverP2PStub();else{!0;var m=t.remoteRuntimeURL;d=m,
// step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
// step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
g=r.registry.discoverP2PStub(m)}else
// step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
d=a,g=r.registry.discoverProtostub(a);
// Is registed?
v.info("[Runtime.Loader.loadStub]1. Proto Stub Discovered for ",e,": ",g),
// step 23 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
n(g),v.info(" [Runtime.Loader]------------------- END ---------------------------\n")}catch(g){
// is not registed?
v.info("[Runtime.Loader.loadStub]1. Proto Stub not found "+g),
// step 8 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
r.descriptors.getStubDescriptor(e).then(function(e){if(l)return!1;v.info("[Runtime.Loader.loadStub]2. return the ProtoStub descriptor"),
// step 9 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
u=e;var t=e.sourcePackageURL;return"/sourcePackage"===t?e.sourcePackage:r.runtimeCatalogue.getSourcePackageFromURL(t)},h).catch(y).then(function(e){
// According to debug, it seems RuntimeCatalogue does not support yet constraints. It appears empty!!!!
// step 11 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
return!l&&(u&&u.constraints&&(b=u.constraints),v.info("[Runtime.Loader.loadStub]3. return the ProtoStub Source Code"),f=e,r.registry.getSandbox(a,b))}).then(function(e){
// step 15 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
return!l&&(v.info("[Runtime.Loader.loadStub]4. if the sandbox is registered then return the sandbox ",e),s=e,e)}).catch(function(e){
// step 13 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
return!l&&(v.info("[Runtime.Loader.loadStub]5. Sandbox was not found, creating a new one ",e),r._runtimeFactory.createSandbox(b).then(function(e){return e.addListener("*",function(e){r.messageBus.postMessage(e)}),e}))}).then(function(n){
// step 16 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
return!l&&(v.info("[Runtime.Loader.loadStub]6. return the sandbox instance and register",n,"to domain ",a),s=n,r.registry.registerStub(s,d,t,e,u))},h).then(function(e){if(l)return!1;
// step 23 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
v.info("[Runtime.Loader.loadStub] 7. return the runtime protostub url: ",e),c=e.url;
// Extend original hyperty configuration;
var n={};if(!(0,p.emptyObject)(u.configuration))try{n=(0,i.default)({},JSON.parse(u.configuration))}catch(e){n=u.configuration}if(t)try{n=(0,i.default)(n,JSON.parse(t))}catch(e){n=(0,i.default)(n,t)}
// required for protostub session
n.runtimeURL=r._runtimeURL;
// step 24 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
try{
// step 26 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
// step 27 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
// Add the message bus listener
return v.info("[Runtime.Loader.loadStub] 8: adding sandbox listener to protostubURL : ",c),r.messageBus.addListener(c,function(e){s.postMessage(e)}),s.deployComponent(f.sourceCode,c,n)}catch(e){v.error("[Runtime.Loader.loadStub] Error on deploy component:",e),o(e)}},h).then(function(){if(l)return!1;
// step 28 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
var e=void 0;t?(v.log("[Runtime.Loader.loadStub] p2pConfig: ",t),t.hasOwnProperty("isHandlerStub")&&(e=r.registry.p2pHandlerStub[r._runtimeURL]),t.hasOwnProperty("p2pRequesterStub")&&(e=r.registry.p2pRequesterStub[t.remoteRuntimeURL])):e=r.registry.protostubsList[a],v.log("[Runtime.Loader.loadStub] Stub: ",e),n(e),v.info("[Runtime.Loader.loadStub]------------------- END ---------------------------\n")},h).catch(y)}})}},{key:"loadIdpProxy",value:function(e){var t=this;if(!this._readyToUse())return!1;if(!e)throw new Error("[Runtime.Loader] IdpProxy descriptor url parameter is needed");return new a.default(function(r,n){var o=(0,p.divideURL)(e).domain;o||(o=e);var a=void 0,s=void 0,u=void 0,c=void 0,f=!1,l=function(e){v.info("[Runtime.Loader] Something failed on the deploy of IdpProxy: ",e),n(e)},d=function(e){f=!0,n(e)};
// Discover IDPProxy
v.info("[Runtime.Loader] ------------------- IDP Proxy Deploy ---------------------------\n"),v.info("[Runtime.Loader] Discover or Create a new IdpProxy for domain/URL: ",o);try{var y=t.registry.discoverIdpProxy(o);
// Is registed?
v.info("[Runtime.Loader] 1. IDPProxy Discovered: ",y);
// we have completed step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
var h=t.registry.idpProxyList[o];v.log("Deployed: ",h),r(h),v.info("[Runtime.Loader] ------------------- END ---------------------------\n")}catch(y){
// is not registed?
v.info("[Runtime.Loader] 1. IdpProxy not found:",y),
// we have completed step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
// we need to get ProtoStub descriptor step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
t.descriptors.getIdpProxyDescriptor(e).then(function(e){v.info("[Runtime.Loader] 2. Return the IDPProxy descriptor"),
// we have completed step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
s=e;var r=e.sourcePackageURL;return"/sourcePackage"===r?e.sourcePackage:t.runtimeCatalogue.getSourcePackageFromURL(r)},d).then(function(e){if(f)return!1;v.info("[Runtime.Loader] 3. return the IDPProxy source package"),
// we have completed step 7 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
c=e;return!0},d).then(function(e){return!f&&t.registry.getSandbox(o)}).then(function(e){return!f&&(v.info("[Runtime.Loader] 4. if the sandbox is registered then return the sandbox",e),a=e,e)}).catch(function(e){if(f)return!1;v.info("[Runtime.Loader] 5. Sandbox was not found, creating a new one",e);var r={};return s&&s.hasOwnProperty("capabilities")&&(s=s.stubCapabilities),t._runtimeFactory.createSandbox(r).then(function(e){return e.addListener("*",function(e){t.messageBus.postMessage(e)}),e})}).then(function(e){return!f&&(v.info("[Runtime.Loader] 6. return the sandbox instance and register",e,"to domain ",o),a=e,t.registry.registerIdpProxy(e,o))},d).then(function(e){if(f)return!1;v.info("[Runtime.Loader] 7. Return the runtime Idp Proxy URL: ",e),
// we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
u=e;
// Extend original hyperty configuration;
var r={};if(!(0,p.emptyObject)(s.configuration))try{r=(0,i.default)({},JSON.parse(s.configuration))}catch(e){r=s.configuration}r.runtimeURL=t._runtimeURL;
// Deploy Component step xxx
try{
// we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
// Add the message bus listener
return t.messageBus.addListener(u,function(e){a.postMessage(e)}),a.deployComponent(c.sourceCode,e,r)}catch(e){v.info("[Runtime.Loader] Error on deploy component:",e),n(e)}},d).then(function(){if(f)return!1;
// we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
// Load Stub function resolved with success;
// let idpProxy = {
//   runtimeIdpProxyURL: _runtimeIdpProxyURL,
//   status: deployComponentStatus
// };
//this.registry.idpProxyList[domain].status = 'deployed';
var e=t.registry.idpProxyList[o];v.log("[Runtime.Loader.loadIdpProxy] 8: loaded: ",e),r(e),v.info("[Runtime.Loader.loadIdpProxy] ------------------- END ---------------------------\n")},d).catch(l)}})}},{key:"_readyToUse",value:function(){if(!this._runtimeURL)throw new Error("[Runtime.Loader] The loader need the runtime url address");if(!this._messagesBus)throw new Error("[Runtime.Loader] The loader need the messageBus component");if(!this._registry)throw new Error("[Runtime.Loader] The loader need the registry component");if(!this._runtimeFactory)throw new Error("[Runtime.Loader] The loader need the runtime factory component");return!0}},{key:"runtimeURL",set:function(e){this._runtimeURL=e},get:function(){return this._runtimeURL}},{key:"registry",set:function(e){this._registry=e;
// Install AddressAllocation
var t=h.default.instance;this._addressAllocation=t,v.log("[Loader - AddressAllocation] - ",t)},get:function(){return this._registry}},{key:"messageBus",set:function(e){this._messagesBus=e},get:function(){return this._messagesBus}},{key:"runtimeFactory",set:function(e){this._runtimeFactory=e},get:function(){return this._runtimeFactory}}]),Loader}();t.default=g,e.exports=t.default},/* 483 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(15),f=r(138),l=r(11),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=d.getLogger("Descriptors"),y=function(){function Descriptors(e,t,r){if((0,a.default)(this,Descriptors),!e)throw Error("The descriptor need to know the runtime url to be used");if(!t)throw Error("The descriptor needs the catalogue instance");if(!r)throw Error("The descriptor needs the runtime configuration");this.log=p,this.runtimeConfiguration=r,this.runtimeURL=e,this.catalogue=t,this.constraints=f.runtimeUtils.runtimeCapabilities}return(0,u.default)(Descriptors,[{key:"getHypertyDescriptor",value:function(e){return this.catalogue.getHypertyDescriptor(e,!0,this.constraints)}},{key:"getStubDescriptor",value:function(e){var t=this;return new i.default(function(r,n){var i=void 0,o=void 0,a=void 0,s=(0,c.divideURL)(t.runtimeURL),u=s.domain;if(e.includes("://")){var f=(0,c.divideURL)(e);i=f.domain;var l=f.identity;o=l?l.substring(l.lastIndexOf("/")+1):"default"}else o="default",i=e;if(a=(0,c.buildURL)(t.runtimeConfiguration,"catalogueURLs","protocolstub",o),i!==t.runtimeConfiguration.domain)if(e.indexOf("https")&&e.indexOf("hyperty-catalogue")){
// TODO: check how to load form different configuration domain
var d=(0,c.getConfigurationResources)(t.runtimeConfiguration,"catalogueURLs","protocolstub");a=d.prefix+i+d.suffix+o}else a=e;return p.log("Load ProtocolStub for domain, "+i+" : ",a),t.catalogue.getStubDescriptor(a,!0,t.constraints).then(function(e){r(e)}).catch(function(e){
// log.log('Error: ', error);
o=i,i=u;var r=(0,c.getConfigurationResources)(t.runtimeConfiguration,"catalogueURLs","protocolstub");
// log.log('Fallback -> Load Protocolstub for domain, ' + domain + ' : ', protostub);
return a=r.prefix+i+r.suffix+o,t.catalogue.getStubDescriptor(a,!0,t.constraints)}).then(function(e){r(e)}).catch(function(e){n(e)})})}},{key:"getIdpProxyDescriptor",value:function(e){var t=this;return new i.default(function(r,n){var i=void 0,o=void 0,a=(0,c.divideURL)(t.runtimeURL),s=a.domain;if(e.includes("://")){var u=(0,c.divideURL)(e);i=u.domain;var f=u.identity;o=f?f.substring(f.lastIndexOf("/")+1):"default"}else o="default",i=e;var l=(0,c.getConfigurationResources)(t.runtimeConfiguration,"catalogueURLs","idpProxy");
// log.log('Load Idp Proxy for domain, ' + domain + ' : ', idpProxyURL);
return e=l.prefix+i+l.suffix+o,t.catalogue.getIdpProxyDescriptor(e,!0,t.constraints).then(function(e){r(e)}).catch(function(){
// log.log('Load Idp Proxy for domain, ' + domain + ' : ', idpProxyURL);
return o=i,i=s,e=(0,c.buildURL)(t.runtimeConfiguration,"catalogueURLs","idpProxy",o),t.catalogue.getIdpProxyDescriptor(e,!0,t.constraints)}).then(function(e){r(e)}).catch(function(e){n(e)})})}}]),Descriptors}();t.default=y,e.exports=t.default},/* 484 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.runtimeConfiguration={runtimeURLS:{registry:{prefix:"hyperty-runtime://",suffix:"registry"},identityModule:{prefix:"hyperty-runtime://",suffix:"/idm"},runtimeUA:{prefix:"hyperty-runtime://",suffix:"/ua"},catalogue:{prefix:"hyperty-runtime://",suffix:"/catalogue"},graphConnector:{prefix:"hyperty-runtime://",suffix:"/graph"},syncManager:{prefix:"hyperty-runtime://",suffix:"/sm"}},catalogueURLs:{protocolstub:{prefix:"hyperty-catalogue://catalogue.",suffix:"/.well-known/protocolstub/",fallback:"hyperty-catalogue://catalogue.%domain%/.well-known/protocolstub/"},idpProxy:{prefix:"hyperty-catalogue://catalogue.",suffix:"/.well-known/idp-proxy/",fallback:"hyperty-catalogue://catalogue.%domain%/.well-known/idp-proxy/"}},msgNodeURL:{prefix:"domain://msg-node.",suffix:"",hypertyAddressAllocation:"/hyperty-address-allocation",objectAddressAllocation:"/object-address-allocation",subscriptionManagement:"/sm"},domainRegistryURL:{prefix:"domain://registry.",suffix:""},globalRegistryURL:"global://registry."}},/* 485 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(486),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default,// let GraphConnector;
// if (process.env.MODE !== 'light') {
//   GraphConnector = require('./GraphConnectorBase');
//   if (GraphConnector && GraphConnector.hasOwnProperty('default')) GraphConnector = GraphConnector.default;
// } else {
//   GraphConnector = require('./GraphConnectorLight');
//   if (GraphConnector &&  GraphConnector.hasOwnProperty('default')) GraphConnector = GraphConnector.default;
// }
/**
 * The GraphConnectorBase have some problems with the size;
 * @deprecated Due to some problems increase a lot the file size
 */
// import GraphConnector from './GraphConnectorBase';
/**
 *
 * @experimental used instead of GraphConnectorBase;
 */
e.exports=t.default},/* 486 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function GraphConnector(e,t,r){(0,i.default)(this,GraphConnector)};t.default=o,e.exports=t.default},/* 487 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(12),i=_interopRequireDefault(n),o=r(1),a=_interopRequireDefault(o),s=r(2),u=_interopRequireDefault(s),c=r(11),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=r(15),d=f.getLogger("CoreDiscovery"),p=function(){/**
  * To initialise the Discovery, which will provide the support for hyperties to
  * query users registered in outside the internal core.
  * @param  {MessageBus}          msgbus                msgbus
  * @param  {RuntimeURL}          runtimeURL            runtimeURL
  * @param  {graphConnector}    graphConnector
  */
function CoreDiscovery(e,t,r,n,i){if((0,a.default)(this,CoreDiscovery),!n)throw Error("The catalogue needs the runtimeFactory");var o=this;this._messageBus=t,o.graphConnector=r,o.httpRequest=n.createHttpRequest(),o.domain=(0,l.divideURL)(e).domain,o.discoveryURL=e+"/discovery/",o.registry=i,o.messageBus.addListener(o.discoveryURL,function(e){o.discoveryManager(e).then(function(t){
//FLOW-OUT: message response
o.messageBus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,value:t}})}).catch(function(t){var r=void 0,n=void 0;"GraphConnector"===t?(r="This search is not available at the moment. Try later.",n=500):(r="Not Found",n=404),
//FLOW-OUT: error message response
o.messageBus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n,description:r}})})})}/**
   * Returns the MessageBus.
   */
return(0,u.default)(CoreDiscovery,[{key:"discoveryManager",/* function to decide what discovery method to call and later return the response msg  */
value:function(e){var t=this,r=((0,l.divideURL)(e.from).domain,e.body.resource.split("/").filter(Boolean)),n=[],o=[];switch(d.log("[CoreDiscovery.discoveryManager] received: ",e),e.body.criteria&&(e.body.criteria.resources&&(n=e.body.criteria.resources),e.body.criteria.dataSchemes&&(o=e.body.criteria.dataSchemes)),r[1]){case"user":return"hyperty"==r[0]?t.discoverHyperties(e.body.resource.split("user/")[1],o,n,e.body.criteria.domain):t.discoverDataObjects(e.body.resource.split("user/")[1],o,n,e.body.criteria.domain);case"url":return"hyperty"==r[0]?t.discoverHypertyPerURL(e.body.resource.split("url/")[1],e.body.criteria.domain):t.discoverDataObjectPerURL(e.body.resource.split("url/")[1],e.body.criteria.domain);case"name":return t.discoverDataObjectsPerName(e.body.resource.split("name/")[1],o,n,e.body.criteria.domain);case"reporter":return t.discoverDataObjectsPerReporter(e.body.resource.split("reporter/")[1],o,n,e.body.criteria.domain);case"guid":return void 0!==t.graphConnector&&null!==t.graphConnector?"hyperty"==r[0]?t.discoverHypertiesPerGUID(e.body.resource.split("user-guid://")[1],o,n):t.discoverDataObjectsPerGUID(e.body.resource.split("user-guid://")[1],o,n):i.default.reject("GraphConnector");case"userprofile":return void 0!==t.graphConnector&&null!==t.graphConnector?"hyperty"==r[0]?t.discoverHypertiesPerUserProfileData(e.body.resource.split("userprofile/")[1],o,n):t.discoverDataObjectsPerUserProfileData(e.body.resource.split("userprofile/")[1],o,n):i.default.reject("GraphConnector")}}},{key:"discoverHypertiesPerUserProfileData",value:function(e,t,r){var n=this;return new i.default(function(o,a){
//translate user identifier (e.g. email, name...) into the associated GUIDs
n.discoverGUIDPerUserIdentifier(e).then(function(e){var s=e.map(function(e){return new i.default(function(i,o){n.discoverHypertiesPerGUID(e,t,r).then(function(e){i(e)}).catch(function(e){i([])})})});i.default.all(s).then(function(e){var t=[].concat.apply([],e);if(0===t.length)return a("No hyperties were found");o(t)})}).catch(function(e){return a(e)})})}},{key:"discoverDataObjectsPerUserProfileData",value:function(e,t,r){var n=this;return new i.default(function(o,a){
//translate user identifier (e.g. email, name...) into the associated GUIDs
n.discoverGUIDPerUserIdentifier(e).then(function(e){var s=e.map(function(e){return new i.default(function(i,o){n.discoverDataObjectsPerGUID(e,t,r).then(function(e){i(e)}).catch(function(e){i([])})})});i.default.all(s).then(function(e){var t=[].concat.apply([],e);if(0===t.length)return a("No dataObjects were found");o(t)})}).catch(function(e){return a(e)})})}},{key:"discoverHypertiesPerGUID",value:function(e,t,r){var n=this;return new i.default(function(o,a){
//translate GUID into the user IDs to query the domain registry
n.discoverUserIdsPerGUID(e).then(function(e){
//translate user IDs into the associated hyperties registered in some domain
var s=e.map(function(e){return new i.default(function(i,o){n.discoverHyperties(e.uID,t,r,e.domain).then(function(e){i(e)}).catch(function(e){i([])})})});i.default.all(s).then(function(e){var t=[].concat.apply([],e);if(0===t.length)return a("No hyperties were found");
// log.log('Hyperties : ', hyperties);
o(t)})}).catch(function(e){return a(e)})})}},{key:"discoverDataObjectsPerGUID",value:function(e,t,r){var n=this;return new i.default(function(o,a){
//translate GUID into the user IDs to query the domain registry
n.discoverUserIdsPerGUID(e).then(function(e){
//translate user IDs into the associated dataObjects registered in some domain
var s=e.map(function(e){return new i.default(function(i,o){n.discoverDataObjects(e.uID,t,r,e.domain).then(function(e){i(e)}).catch(function(e){i([])})})});i.default.all(s).then(function(e){var t=[].concat.apply([],e);if(0===t.length)return a("No dataObjects were found");
// log.log('DataObjects : ', dataObjects);
o(t)})}).catch(function(e){return a(e)})})}},{key:"discoverHyperties",value:function(e,t,r,n){var o=this,a=void 0;a=n||o.domain;var s={type:"read",from:o.discoveryURL,to:"domain://registry."+a,body:{}};return e.indexOf("user://")>-1?s.body.resource=e:s.body.resource="/hyperty/idp-identifier/"+e,t.length>0&&(s.body.criteria||(s.body.criteria={}),s.body.criteria.dataSchemes=t),r.length>0&&(s.body.criteria||(s.body.criteria={}),s.body.criteria.resources=r),new i.default(function(e,t){
// log.log("[CoreDiscovery.discoverHyperties] sending msg ", msg);
o.messageBus.postMessage(s,function(r){
// log.log("[CoreDiscovery.discoverHyperties] rcved reply ", reply);
if(200!==r.body.code&&500!==r.body.code)return t("No Hyperty was found");var n=r.body.value,i=[];for(var o in n)i.push(n[o]);if(!(i.length>0))return t("No Hyperty was found");
// log.log("[CoreDiscovery.discoverHyperties] Hyperties Found: ", finalHyperties);
e(i)})})}},{key:"discoverDataObjects",value:function(e,t,r,n){var o=this,a=void 0,s=[];return a=n||o.domain,new i.default(function(n,u){
//translate user identifier (e.g. email, name...) into the associated hyperties
o.discoverHyperties(e,[],[],a).then(function(e){var c=[];for(var f in e)c.push(e[f]);//translate hyperties URLs into the associated dataObjects registered in some domain
var l=c.map(function(e){return new i.default(function(n,i){o.discoverDataObjectsPerReporter(e.hypertyID,t,r,a).then(function(e){n(e)}).catch(function(e){n([])})})});i.default.all(l).then(function(e){[].concat.apply([],e).forEach(function(e){s.push(e)});var t=[];for(var r in s)t.push(s[r]);if(0===t.length)return u("No dataObjects were found");
// log.log('DataObjects Found: ', finalDataObjects);
n(t)})}).catch(function(e){return u(e)})})}},{key:"discoverHypertyPerURL",value:function(e,t){var r=this,n=void 0;n=t||r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n,body:{resource:e}};return new i.default(function(e,t){r.messageBus.postMessage(o,function(r){if(200!==r.body.code&&500!==r.body.code)return t("No Hyperty was found");var n=r.body.value;if(!n)return t("No Hyperty was found");
// log.log('Hyperty found: ', hyperty);
e(n)})})}},{key:"discoverDataObjectPerURL",value:function(e,t){var r=this,n=void 0;n=t||r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n,body:{resource:e}};return new i.default(function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.value;if(!n)return t("DataObject not found");
// log.log('DataObject found: ', dataObject);
e(n)})})}},{key:"discoverDataObjectsPerName",value:function(e,t,r,n){var o=this,a=void 0;a=n||o.domain;var s={type:"read",from:o.discoveryURL,to:"domain://registry."+a,body:{resource:e}};return t.length>0&&(s.body.criteria||(s.body.criteria={}),s.body.criteria.dataSchemes=t),r.length>0&&(s.body.criteria||(s.body.criteria={}),s.body.criteria.resources=r),new i.default(function(e,t){o.messageBus.postMessage(s,function(r){var n=r.body.value,i=[];for(var o in n)i.push(n[o]);if(!(i.length>0))return t("No DataObject was found");
// log.log("DataObjects Found: ", finalDataObjects);
e(i)})})}},{key:"discoverDataObjectsPerReporter",value:function(e,t,r,n){var o=this,a=void 0;a=n||o.domain;var s={type:"read",from:o.discoveryURL,to:"domain://registry."+a,body:{resource:"/comm",criteria:{reporter:e}}};return t.length>0&&(s.body.criteria.dataSchemes=t),r.length>0&&(s.body.criteria.resources=r),new i.default(function(e,t){o.messageBus.postMessage(s,function(r){var n=r.body.value,i=[];for(var o in n)i.push(n[o]);if(!(i.length>0))return t("No DataObject was found");
// log.log("DataObjects Found: ", finalDataObjects);
e(i)})})}},{key:"discoverUserIdsPerGUID",value:function(e){var t=this;return new i.default(function(r,n){
// log.log("GO graphConnector:", guid);
t.graphConnector.queryGlobalRegistry(e).then(function(e){
// log.log('Information returned from Global Registry: ', graphConnectorContactData);
if("string"==typeof e||!e)return n("Unsuccessful discover userIDs by GUID");var t=e.userIDs;if(0===t.length)return n("UserIDs not available");r(t)}).catch(function(e){return n(e)})})}},{key:"discoverGUIDPerUserIdentifier",value:function(e){var t=this;return new i.default(function(r,n){t.httpRequest.get("https://rethink.tlabscloud.com/discovery/rest/discover/lookup?searchquery="+e).then(function(e){
// log.log('discover GUID by user identifier', json);
var t=JSON.parse(e),i=t.results.filter(function(e){return void 0!=e.rethinkID});if(0===i.length)return n("Unsuccessful discover GUID by user identifier");var o=i.map(function(e){return e.rethinkID});return r(o)}).catch(function(e){
// log.log("HTTP Request error: ", err);
return n(e)})})}},{key:"messageBus",get:function(){return this._messageBus},set:function(e){this._messageBus=e}}]),CoreDiscovery}();t.default=p,e.exports=t.default},/* 488 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(489),i=_interopRequireDefault(n),o=r(59),a=_interopRequireDefault(o),s=r(12),u=_interopRequireDefault(s),c=r(98),f=_interopRequireDefault(c),l=r(96),d=_interopRequireDefault(l),p=r(1),y=_interopRequireDefault(p),h=r(2),v=_interopRequireDefault(h),g=r(11),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(g),m=r(15),_=b.getLogger("DataObjectsStorage"),R=function(){function DataObjectsStorage(e,t){if((0,y.default)(this,DataObjectsStorage),!e)throw new Error("[Store Data Objects] - Needs the storageManager component");this._storageManager=e,this._storeDataObject=t,this._cache={}}/**
   * @description should set the initial state of the dataObjectURL to be resumed if necessary;
   *
   * @param {DataObjectURL} url - dataObjectURL to be saved;
   * @param {Boolean} isReporter - the object to be saved is a reporter
   * @param {SchemaURL} schema - the schema url
   * @param {String} status - the status of current dataObject
   * @param {HypertyURL} reporter - the Reporter hypertyURL
   * @param {Array<HypertyURL>} subscription - list of subscriptions
   * @param {Array<DataObjectChild>} children - list of childs of dataObjectURL
   * @param {Array<String>} childrens - list of childrens, like, 'chatmessage';
   * @param {Array<UserURL} subscriberUser - list of subscribed users;
   */
return(0,v.default)(DataObjectsStorage,[{key:"set",value:function(e){var t=this._storeDataObject,r=this._getTypeOfObject(e.isReporter);// TODO:do we need this?
// TODO:do we need this?
/*if (schema) storeDataObject[type][metadata.url].schema = schema;
      if (status) storeDataObject[type][metadata.url].status = status;
      if (childrenResources) storeDataObject[type][metadata.url].childrenResources = childrenResources;*/
// TODO: do we need this?
//storeDataObject[type][metadata.url].owner = owner;
return t.hasOwnProperty(r)||(t[r]={}),t[r].hasOwnProperty(e.url)||(t[r][e.url]={},t[r][e.url].subscriptions=[],t[r][e.url].subscriberUsers=[],t[r][e.url].childrenObjects={},t[r][e.url].data={}),(0,d.default)(t[r][e.url],e),delete t[r][e.url].subscriberUser,delete t[r][e.url].subscriberHyperty,e.subscriberHyperty&&!e.isReporter&&this._updateToArray(t[r],e.url,"subscriptions",e.subscriberHyperty),e.subscriberUser&&t[r][e.url].subscriberUsers.indexOf(e.subscriberUser)&&this._updateToArray(t[r],e.url,"subscriberUsers",e.subscriberUser),this._storeDataObject=t,this._storageManager.set("syncherManager:ObjectURLs",1,t),t[r][e.url]}},{key:"saveData",value:function(e,t,r,n){var i=this._storeDataObject,o=this._getTypeOfObject(e);if(!i||!i[o]||!i[o][t])return void _.log("[StoreDataObjects - save data] - not saved");if(_.log("[StoreDataObjects - saveData] - ",e,o,t,r,n),i[o][t].hasOwnProperty("data")||(i[o][t].data={}),r){var a=void 0;a="object"===(void 0===n?"undefined":(0,f.default)(n))?(0,m.deepClone)(n):n,(0,m.assign)(i[o][t].data,r,a)}else i[o][t].data=(0,m.deepClone)(n)||{};return this._storeDataObject=i,this._storageManager.set("syncherManager:ObjectURLs",1,i),i[o][t]}},{key:"saveChildrens",value:function(e,t,r,n){var i=this._storeDataObject,o=this._getTypeOfObject(e);return i&&i[o]&&i[o][t]?(i[o][t].hasOwnProperty("childrens")||(i[o][t].childrenObjects={}),r?(0,m.assign)(i[o][t].childrenObjects,r,(0,m.deepClone)(n)):i[o][t].childrenObjects=(0,m.deepClone)(n)||{},this._storeDataObject=i,this._storageManager.set("syncherManager:ObjectURLs",1,i),i[o][t]):void _.log("[StoreDataObjects - save childrens] - not saved")}},{key:"update",value:function(e,t,r,n){var i=this._storeDataObject,o=this._getTypeOfObject(e);if(!i||!i[o]||!i[o][t])return void _.log("[StoreDataObjects - update] - not saved");if(_.log("[StoreDataObjects - update] - ",e,o,t,r,n),i[o]&&i[o][t]&&t&&r&&n){if("subscriptions"===r||"subscriberUsers"===r){var a=!0;"subscriptions"===r&&(a=!this._isOwner(i[o][t],n)),a&&this._updateToArray(i[o],t,r,n)}else i[o][t][r]=n;return this._storeDataObject=i,this._storageManager.set("syncherManager:ObjectURLs",1,i),i[o][t]}}},{key:"delete",value:function(e,t,r,n){var i=this._storeDataObject,o=this._getTypeOfObject(e);return i&&i[o]&&i[o][t]?i[o]&&i[o][t]&&t&&r&&n?("subscriptions"===r||"subscriberUsers"===r?this._removeFromArray(i[o],t,r,n):delete i[o][t][r],this._storeDataObject=i,this._storageManager.set("syncherManager:ObjectURLs",1,i),i[o][t]):void 0:void _.log("[StoreDataObjects - delete] - not saved")}},{key:"deleteResource",value:function(e){var t=this;return new u.default(function(r,n){if(e)return t.getAll().then(function(n){var i=(0,d.default)(n,t._storeDataObject||{});return i.hasOwnProperty("observers")&&i.observers.hasOwnProperty(e)?(delete i.observers[e],t._storageManager.set("syncherManager:ObjectURLs",1,i),t._storeDataObject=i,r(i.observers[e])):i.hasOwnProperty("reporters")&&i.reporters.hasOwnProperty(e)?(delete i.reporters[e],t._storageManager.set("syncherManager:ObjectURLs",1,i),t._storeDataObject=i,r(i.reporters[e])):void r("The "+e+" dosen\t exists, nothing was deleted")});n(new Error("[StoreDataObjects] - Can't delete this "+e))})}},{key:"getAll",value:function(){return this._storageManager.get("syncherManager:ObjectURLs")}},{key:"getDataObject",value:function(e){var t=this;return new u.default(function(r,n){t._storageManager.get("syncherManager:ObjectURLs").then(function(t){var i=t.hasOwnProperty("observers")?t.observers:{},o=t.hasOwnProperty("reporters")?t.reporters:{},s=(0,a.default)(o).find(function(t){return t===e}),u=(0,a.default)(i).find(function(t){return t===e}),c=void 0;return u&&(c=t.observers[u]),s&&(c=t.reporters[s]),_.info("[StoreDataObjects - getDataObject] - for observer: ",u),_.info("[StoreDataObjects - getDataObject] - for reporters: ",s),_.info("[StoreDataObjects - getDataObject] - resolve: ",c),c?r(c):n("No dataObject was found")})})}},{key:"getResourcesByCriteria",value:function(e,t){var r=this;return new u.default(function(n){var i=r._getTypeOfObject(t);r.getAll().then(function(t){if(!t)return _.log("[DataObjectsStorage.getResourcesByCriteria] don't have stored data objects"),n(null);if(e.body&&e.body.hasOwnProperty("resume")&&!e.body.resume)return n(null);
// check if the message have other criteria
// if not search for on the 'from' of the message.
var o=[],a=r._hasSubscription(t[i],e.from),s=r._searchOwner(t[i],e.from);if(_.log("[StoredDataObjects - getResourcesByCriteria]:",t,e,a,s),!(e.hasOwnProperty("from")&&a||s))return n(null);var u=void 0;u=s?r._getResourcesByOwner(t[i],e.from):r._getResourcesBySubscription(t[i],e.from);var c=[];e.body&&e.body.identity&&(c=r._getResourcesByIdentity(t[i],e.body.identity));
//TODO: remove schema since metadata already includes the schema?
var f=[];e.body&&e.body.schema&&(f=r._getResourcesBySchema(t[i],e.body.schema));var l=[];if(e.body&&e.body.value){var d=e.body.value;delete d.data,l=r._getResourcesByMetadata(t[i],d)}var p=[];e.body&&e.body.value&&e.body.value.data&&(p=r._getResourcesByData(t[i],e.body.value.data)),
// you can pass as arrays as you want.. it will be merged in on place
// removed duplicates;
o=r._intersection(u,c,f,p,l);var y={};o.forEach(function(e){var r=t[i][e];return y[e]=r,y}),_.log("[Store Data Objects] - ",y),n(y)})})}},{key:"_getResourcesByIdentity",value:function(e,t){return e?(0,a.default)(e).filter(function(r){return e[r].subscriberUsers.filter(function(e){return e===t}).length}):[]}},{key:"_getResourcesByOwner",value:function(e,t){return e?(0,a.default)(e).filter(function(r){return e[r].reporter===t}):[]}},{key:"_getResourcesBySubscription",value:function(e,t){return e?(0,a.default)(e).filter(function(r){return e[r].subscriptions.filter(function(e){return e===t}).length}):[]}},{key:"_getResourcesBySchema",value:function(e,t){return(0,a.default)(e).filter(function(r){var n=e[r];return(0,a.default)(n).filter(function(e){return"schema"===e&&n[e]===t}).length})}},{key:"_getResourcesByMetadata",value:function(e,t){return t?(0,a.default)(e).filter(function(r){var n=e[r];return(0,a.default)(n).filter(function(e){
// search on storeDataObjects for specific key provided from data;
return(0,a.default)(t).filter(function(r){return e===r&&n[e]===t[r]}).length}).length}):[]}},{key:"_getResourcesByData",value:function(e,t){return t?(0,a.default)(e).filter(function(r){var n=e[r].hasOwnProperty("data")?e[r].data:{};return(0,a.default)(n).filter(function(e){
// search on storeDataObjects for specific key provided from data;
return(0,a.default)(t).filter(function(r){return e===r&&n[e]===t[r]}).length}).length}):[]}},{key:"_hasSubscription",value:function(e,t){return!!e&&(0,a.default)(e).filter(function(r){return e[r].subscriptions.filter(function(e){return e===t}).length}).length>0}},{key:"_searchOwner",value:function(e,t){return!!e&&(0,a.default)(e).filter(function(r){return e[r].reporter===t}).length>0}},{key:"_isOwner",value:function(e,t){return!!e&&e.reporter===t}},{key:"_intersection",value:function(){var e=(0,i.default)(arguments),t=e.reduce(function(e,t){return e.concat(t)}).filter(function(e,t,r){return r.indexOf(e)===t});return _.log("DataObjectsStorage._intersection] Result an unique array of strings: ",t),t}},{key:"_updateToArray",value:function(e,t,r,n){_.log("[DataObjectsStorage] - _updateToArray: ",e,t,r,n),-1===e[t][r].indexOf(n)&&e[t][r].push(n)}},{key:"_removeFromArray",value:function(e,t,r,n){var i=e[t][r].indexOf(n);-1===i&&e[t][r].splice(i,1)}},{key:"_hasValue",value:function(e,t,r){return e.hasOwnProperty(t)&&e[t]===r}},{key:"_getTypeOfObject",value:function(e){return e?"reporters":"observers"}}]),DataObjectsStorage}();t.default=R,e.exports=t.default},/* 489 */
/***/
function(e,t,r){e.exports={default:r(490),__esModule:!0}},/* 490 */
/***/
function(e,t,r){r(126),r(491),e.exports=r(13).Array.from},/* 491 */
/***/
function(e,t,r){"use strict";var n=r(65),i=r(26),o=r(76),a=r(189),s=r(190),u=r(132),c=r(492),f=r(191);i(i.S+i.F*!r(196)(function(e){Array.from(e)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(e){var t,r,i,l,d=o(e),p="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,v=void 0!==h,g=0,b=f(d);
// if object isn't iterable or it's array with default iterator - use simple case
if(v&&(h=n(h,y>2?arguments[2]:void 0,2)),void 0==b||p==Array&&s(b))for(t=u(d.length),r=new p(t);t>g;g++)c(r,g,v?h(d[g],g):d[g]);else for(l=b.call(d),r=new p;!(i=l.next()).done;g++)c(r,g,v?a(l,h,[i.value,g],!0):i.value);return r.length=g,r}})},/* 492 */
/***/
function(e,t,r){"use strict";var n=r(38),i=r(73);e.exports=function(e,t,r){t in e?n.f(e,t,i(0,r)):e[t]=r}},/* 493 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=r(11),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s),c=r(15),f=u.getLogger("HypertyResourcesStorage"),l=function(){function HypertyResourcesStorage(e,t,r,n){if((0,i.default)(this,HypertyResourcesStorage),!r)throw new Error("[HypertyResourcesStorage constructor] mandatory storageManager parameter missing");if(!e)throw new Error("[HypertyResourcesStorage constructor] mandatory runtimeURL parameter missing");if(!t)throw new Error("[HypertyResourcesStorage constructor] mandatory bus parameter missing");var o=this;o._bus=t,o._url=e+"/storage",o._storageManager=r,o._hypertyResources=n,t.addListener(o._url,function(e){switch(f.info("[HypertyResourcesStorage] Message RCV: ",e),e.type){case"create":o._onCreate(e);break;case"read":o._onRead(e);break;case"delete":o._onDelete(e)}})}/**
   * @description should save an HypertyResource contained in the body of a create message request;
   *
   * @param {string} message - message containing the hyperty resource to be stored
   */
return(0,a.default)(HypertyResourcesStorage,[{key:"_onCreate",value:function(e){var t=this;if(!e.body||!e.body.value)throw new Error("[HypertyResourcesStorage._onCreate] mandatory message body value missing: ",e);var r=e.body.value,n=r.contentURL,i="";if(n){var o=n[0],a=o.substr(o.lastIndexOf("/")+1);i=t._url+"/"+a}else n=[],i=t._url+"/"+(0,c.generateGUID)();t._hypertyResources.hasOwnProperty(i)||(n.push(i),r.contentURL=n),t._hypertyResources[i]=r,t._storageManager.set("hypertyResources",1,t._hypertyResources).then(function(){var r={from:e.to,to:e.from,id:e.id,type:"response",body:{value:i,code:200}};t._bus.postMessage(r)})}},{key:"_onRead",value:function(e){var t=this;if(!e.body||!e.body.resource)throw new Error("[HypertyResourcesStorage._onRead] mandatory message body resource missing: ",e);var r=e.body.resource,n={from:e.to,to:e.from,id:e.id,type:"response",body:{}},i=t._hypertyResources[r];i?"file"===i.resourceType?t._onReadFile(n,i):(n.body.code=200,n.body.p2p=!0,n.body.value=i,t._bus.postMessage(n)):(n.body.code=404,n.body.desc="Content Not Found for "+r,t._bus.postMessage(n))}},{key:"_onReadFile",value:function(e,t){var r=this,n=new FileReader;if(n.onload=function(n){f.info("[FileHypertyResource.init] file loaded ",n),e.body.code=200,e.body.p2p=!0,e.body.value=(0,c.deepClone)(t),e.body.value.content=n.target.result,r._bus.postMessage(e)},t.mimetype.includes("text/"))n.readAsText(t.content);else{var i=t.content,o=void 0;o=Array.isArray(i)?new Blob(i,{type:t.mimetype}):new Blob([i],{type:t.mimetype}),n.readAsArrayBuffer(o)}}},{key:"_onDelete",value:function(e){var t=this;if(!e.body)throw new Error("[HypertyResourcesStorage._onDelete] mandatory message body missing: ",e);if(e.body.resource)delete t._hypertyResources[e.body.resource];else{if(!e.body.resources)throw new Error("[HypertyResourcesStorage._onDelete] mandatory resource missing: ",e);e.body.resources.forEach(function(e){delete t._hypertyResources[e]})}t._storageManager.set("hypertyResources",1,t._hypertyResources).then(function(){var r={from:e.to,to:e.from,id:e.id,type:"response",body:{code:200}};t._bus.postMessage(r)})}}]),HypertyResourcesStorage}();t.default=l,e.exports=t.default},/* 494 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(205),i=_interopRequireDefault(n),o=r(12),a=_interopRequireDefault(o),s=r(59),u=_interopRequireDefault(s),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(11),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(p),h=r(15),v=r(498),g=r(99),b=_interopRequireDefault(g),m=r(503),_=_interopRequireDefault(m),R=r(504),w=_interopRequireDefault(R),S=y.getLogger("SyncherManager"),O=function(){/* private
  _url: URL
  _bus: MiniBus
  _registry: Registry
  _allocator: AddressAllocation
   _reporters: { ObjectURL: ReporterObject }
  _observers: { ObjectURL: ObserverObject }
  */
function SyncherManager(e,t,r,n,i,o,a,s){if((0,f.default)(this,SyncherManager),!e)throw new Error("[Syncher Manager] - needs the runtimeURL parameter");if(!t)throw new Error("[Syncher Manager] - needs the MessageBus instance");if(!r)throw new Error("[Syncher Manager] - needs the Registry instance");if(!n)throw new Error("[Syncher Manager] - needs the RuntimeCatalogue instance");if(!i)throw new Error("[Syncher Manager] - need the storageManager instance");var u=this;u._bus=t,u._registry=r,u._catalog=n,u._storageManager=i,u._identityModule=s,
//TODO: these should be saved in persistence engine?
u.runtimeURL=e,u._url=e+"/sm",u._objectURL=e+"/object-allocation",u._reporters={},u._observers={},u._dataObjectsStorage=a,
//TODO: this should not be hardcoded!
u._domain=(0,h.divideURL)(e).domain,u._allocator=o||b.default.instance,S.log("[SyncherManager - AddressAllocation] - ",u._allocator),t.addListener(u._url,function(e){switch(S.info("[SyncherManager] RCV: ",e),e.type){case"create":u._onCreate(e);break;case"delete":u._onDelete(e);break;case"subscribe":u._onLocalSubscribe(e);break;case"unsubscribe":u._onLocalUnSubscribe(e)}})}return(0,d.default)(SyncherManager,[{key:"_onCreate",
//FLOW-IN: message received from Syncher -> create
value:function(e){var t=this,r=e.from,n=e.to;
// check if message is to save new childrenObjects in the local storage
// TODO: check if message is to store new child in the local storage and call storeChild. How to distinguish from others?
e.body.attribute?this._storeChildrens(e):!e.body.hasOwnProperty("resume")||e.body.hasOwnProperty("resume")&&!e.body.resume?
// check if this is an invitation message
e.body.authorise?(this._authorise(e),S.info("[SyncherManager.onCreate - invite observers]",e)):(
// this is to create a new data object
S.info("[SyncherManager.onCreate - Create New Object]",e),this._newCreate(e)):
// If from the hyperty side, call the resumeReporter we will have resume = true'
// so we will create an resumed object and will try to resume the object previously saved;
this._dataObjectsStorage.getResourcesByCriteria(e,!0).then(function(o){if(S.info("[SyncherManager - Create Resumed] - ResourcesByCriteria | Message: ",e," result: ",o),o&&(0,u.default)(o).length>0){var s=[];(0,u.default)(o).forEach(function(r){s.push(t._resumeCreate(e,o[r]))}),a.default.all(s).then(function(o){S.log("[SyncherManager - Create Resumed]",o);
// TODO: shoud send the information if some object was fail;
var a=(0,i.default)(o).filter(function(e){return!1!==e});S.info("[SyncherManager.onCreate] returning resumed objects : ",a),
//FLOW-OUT: message response to Syncher -> create resume
t._bus.postMessage({id:e.id,type:"response",from:n,to:r,body:{code:200,value:a}})})}else{
//forward to hyperty:
var c={};c.id=e.id,c.from=e.to,c.to=e.from,c.type="response",c.body={code:404,desc:"No data objects reporters to be resumed"},t._bus.postMessage(c)}})}},{key:"_storeChildrens",value:function(e){var t=this,r=e.body.resource,n=e.body.attribute;"childrenObjects"===n?t._dataObjectsStorage.saveChildrens(!1,r,void 0,e.body.value):t._dataObjectsStorage.saveChildrens(!0,r,n,e.body.value)}},{key:"_newCreate",value:function(e){var t=this,r=this,n=e.from,i=(0,h.divideURL)(e.from).domain;
// if reporter is in a Interworking Protostub the runtime domain backend services will be used
r._registry.isInterworkingProtoStub(e.from)&&(i=(0,h.divideURL)(r.runtimeURL).domain),
// Process invitation message to observers
/*if (msg.body.authorise) {
        _this._authorise(msg);
        return;
      }*/
//get schema from catalogue and parse -> (scheme, children)
r._catalog.getDataSchemaDescriptor(e.body.schema).then(function(o){var a=o.sourcePackage.sourceCode.properties,s=a.scheme?a.scheme.constant:"resource",u=a.children?a.children.constant:[];
// Do schema validation
// TODO: check if is need to handle with the result of validation
(0,v.schemaValidation)(s,o,e.body.value);var c={name:e.body.value.name,schema:e.body.value.schema,reporter:e.body.value.reporter,resources:e.body.value.resources},f=e.body.value.resource;
//request address allocation of a new object from the msg-node
r._allocator.create(i,1,c,s,f).then(function(i){var o=(0,h.deepClone)(e.body.value);o.url=i.address[0],o.authorise=e.body.authorise,o.childrens=u,
//objectRegistration.expires = 30;//TODO: get it from data object configuration description when present
delete o.data,S.log("[SyncherManager._newCreate] ALLOCATOR CREATE:",i);var a=o.url+"/subscription";S.log("[SyncherManager._newCreate] Subscription URL",a),
//To register the dataObject in the runtimeRegistry
S.info("[SyncherManager._newCreate] Register Object: ",o),
//_this._registry.registerDataObject(msg.body.value.name, msg.body.value.schema, objURL, msg.body.value.reporter, msg.body.value.resources, allocated, msg.body.authorise).then((resolve) => {
r._registry.registerDataObject(o).then(function(i){S.log("[SyncherManager._newCreate] DataObject successfully registered",i);
//all OK -> create reporter and register listeners
var s=void 0;s=t._reporters[o.url]?t._reporters[o.url]:new _.default(r,n,o.url),S.log("[SyncherManager - new Create] - ",e);
// Store for each reporter hyperty the dataObject
var c=void 0,f=!1;e.body.hasOwnProperty("identity")&&e.body.identity.userProfile&&e.body.identity.userProfile.userURL?(c=e.body.identity.userProfile.userURL,c.includes("user://")||(f=!0)):f=!0;
// should we use the msg.body.value instead?
var l=(0,h.deepClone)(o);l.subscriberUser=c,l.isReporter=!0,
// Store the dataObject information
f||(r._dataObjectsStorage.set(l),e.body.hasOwnProperty("store")&&e.body.store&&(s.isToSaveData=!0,r._dataObjectsStorage.update(!0,o.url,"isToSaveData",!0),e.body.value.data&&r._dataObjectsStorage.saveData(!0,o.url,null,e.body.value.data))),
// adding listeners to forward to reporter
s.forwardSubscribe([o.url,a]).then(function(){s.addChildrens(u).then(function(){r._reporters[o.url]=s;var t={id:e.id,type:"response",from:e.to,to:n,body:{code:200,resource:o.url,childrenResources:u}};
//FLOW-OUT: message response to Syncher -> create
r._bus.postMessage(t)})})},function(e){S.error(e)})})}).catch(function(t){
//FLOW-OUT: error message response to Syncher -> create
var i={id:e.id,type:"response",from:e.to,to:n,body:{code:500,desc:t}};r._bus.postMessage(i)})}},{key:"_resumeCreate",value:function(e,t){var r=this,n=this;return new a.default(function(i){var o=e.from,a=t.schema,s=t.url,u=t.data;S.log("[SyncherManager] - resume create",e,t),
//get schema from catalogue and parse -> (scheme, children)
n._catalog.getDataSchemaDescriptor(a).then(function(a){var c=a.sourcePackage.sourceCode.properties,f=c.scheme?c.scheme.constant:"resource",l=c.children?c.children.constant:[];S.log("[SyncherManager] - getDataSchemaDescriptor: ",a,l),
// Do schema validation
// TODO: check if is need to handle with the result of validation
(0,v.schemaValidation)(f,a,u);var d=(0,h.deepClone)(e.body.value);d.url=t.url,d.expires=t.expires,delete d.data;
//all OK -> create reporter and register listeners
var p=void 0;p=r._reporters[s]?r._reporters[s]:new _.default(n,o,s),p.isToSaveData=t.isToSaveData,p.forwardSubscribe([t.url]).then(function(){p.addChildrens(l).then(function(){return p.resumeSubscriptions(t.subscriptions),n._reporters[s]=p,S.info("[SyncherManager - resume create] - resolved resumed: ",t),n._decryptChildrens(t,l)}).then(function(e){
// log.log('result of previous promise');
i(e)}).catch(function(e){S.error("[SyncherManager - resume create] - fail on addChildrens: ",e),i(!1)})}),S.info("[SyncherManager._resumeCreate] Register Object: ",d),n._registry.registerDataObject(d).then(function(e){S.log("[SyncherManager._resumeCreate] DataObject registration successfully updated",e)})}).catch(function(e){S.error("[SyncherManager - resume create] - fail on getDataSchemaDescriptor: ",e),i(!1)})})}},{key:"_decryptChildrens",value:function(e,t){var r=this;return new a.default(function(n){if(t){0===(0,u.default)(e.childrenObjects).length&&n(e),t.forEach(function(t){var i=e.childrenObjects[t];S.log("[SyncherManager._decryptChildrens] dataObjectChilds to decrypt ",i);var o=[];(0,u.default)(i).forEach(function(t){var n=i[t],a=t.split("#")[0];if("string"==typeof n.value){S.log("[SyncherManager._decryptChildrens] createdBy ",a," object: ",n.value);var s=r._identityModule.decryptDataObject(JSON.parse(n.value),e.url);o.push(s)}}),a.default.all(o).then(function(r){S.log("[SyncherManager._decryptChildrens] returning decrypted ",r),r.forEach(function(r){var n=r.value.url;e.childrenObjects[t][n].value=r.value}),S.log("[SyncherManager._decryptChildrens] storedObject ",e),n(e)}).catch(function(e){S.warn("[SyncherManager._decryptChildrens] failed : ",e)})})}else n(e)})}},{key:"_authorise",value:function(e){var t=this;if(!e.body.resource)throw new Error("[SyncherManager._authorise] invitation request without data object url:",e);var r=e.body.resource+"/subscription",n=!!e.body.p2p&&e.body.p2p;S.log("[SyncherManager -  authorise] - ",e),e.body.authorise&&e.body.authorise.forEach(function(i){
//FLOW-OUT: send invites to list of remote Syncher -> _onRemoteCreate -> onNotification
t._bus.postMessage({type:"create",from:r,to:i,body:{p2p:n,identity:e.body.identity,source:e.from,value:e.body.value,schema:e.body.schema}},function(r){
// lets forward the invitation response
var n={from:e.to,to:e.from,id:e.id,type:r.type,body:r.body};t._bus.postMessage(n)})})}},{key:"_onDelete",value:function(e){var t=this,r=e.body.resource,n=t._reporters[r];n&&(
//TODO: is there any policy verification before delete?
n.delete(),this._dataObjectsStorage.deleteResource(r).then(function(n){S.log("[SyncherManager - onDelete] - deleteResource: ",n),t._registry.unregisterDataObject(r),
//TODO: unregister object?
t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200}})}))}},{key:"_onLocalSubscribe",value:function(e){var t=this;this._dataObjectsStorage.getResourcesByCriteria(e,!1).then(function(r){if(S.info("[SyncherManager - Subscribe] - ResourcesByCriteria | Message: ",e," result: ",r),r&&(0,u.default)(r).length>0){var n=[];
// TODO: should reuse the storaged information
(0,u.default)(r).forEach(function(i){S.log("[SyncherManager - resume Subscribe] - reuse current object url: ",r[i]),n.push(t._resumeSubscription(e,r[i]))}),a.default.all(n).then(function(r){S.log("[SyncherManager - Observers Resumed]",r);
// TODO: shoud send the information if some object was fail;
var n=(0,i.default)(r).filter(function(e){return!1!==e});
//FLOW-OUT: message response to Syncher -> create
t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,value:n}})})}else if(e.body.schema&&e.body.resource)S.log("[SyncherManager.onLocalSubscribe - new Subscribe] - ",e.body.schema,e.body.resource),t._newSubscription(e);else{
//forward to hyperty:
var o={};o.id=e.id,o.from=e.to,o.to=e.from,o.type="response",o.body={code:404,desc:"No data objects observers to be resumed"},t._bus.postMessage(o)}})}},{key:"_newSubscription",value:function(e){var t=this,r=this,n=e.body.resource,i=e.from,o=(0,h.divideURL)(n).domain,a=n+"/subscription",s=n+"/children/";
//get schema from catalogue and parse -> (children)
r._catalog.getDataSchemaDescriptor(e.body.schema).then(function(u){var c=u.sourcePackage.sourceCode.properties,f=c.children?c.children.constant:[],l=[];l.push(n+"/changes"),f.forEach(function(e){return l.push(s+e)});
//children addresses
//FLOW-OUT: subscribe message to the msg-node, registering listeners on the broker
var d={type:"subscribe",from:r._url,to:"domain://msg-node."+o+"/sm",body:{identity:e.body.identity,resources:l,source:i}};
//subscribe in msg-node
r._bus.postMessage(d,function(o){if(S.log("node-subscribe-response(observer): ",o),200===o.body.code){
//FLOW-OUT: reply with provisional response
r._bus.postMessage({id:e.id,type:"response",from:e.to,to:i,body:{code:100,childrenResources:f,schema:e.body.schema,resource:e.body.resource}});
//FLOW-OUT: subscribe message to remote ReporterObject -> _onRemoteSubscribe
var s={type:"subscribe",from:r._url,to:a,body:{identity:d.body.identity,subscriber:i}};
//TODO: For Further Study
e.body.hasOwnProperty("mutual")&&(s.body.mutual=e.body.mutual),S.log("[SyncherManager._newSubscription]",s,e),
//subscribe to reporter SM
r._bus.postMessage(s,function(o){if(S.log("reporter-subscribe-response-new: ",o),200===o.body.code){S.log("[SyncherManager._newSubscription] - observers: ",r._observers,n,r._observers[n]);var a=r._observers[n];a||(a=new w.default(r,n,f),S.log("[SyncherManager._newSubscription] - observers: create new ObserverObject: ",a),r._observers[n]=a,
// register new hyperty subscription
a.addSubscription(i),
// add childrens and listeners to save data if necessary
a.addChildrens(f));var s=!1,u=void 0;e.body.hasOwnProperty("identity")&&e.body.identity.userProfile&&e.body.identity.userProfile.userURL?(u=e.body.identity.userProfile.userURL,u.includes("user://")||(s=!0)):s=!0;var c=(0,h.deepClone)(o.body.value);
// let childrenObjects = metadata.childrenObjects || {};
delete c.data,delete c.childrenObjects,c.childrens=f,c.subscriberUser=u,c.isReporter=!1,c.subscriberHyperty=i,s||(
//_this._dataObjectsStorage.set(objURL, false, msg.body.schema, 'on', reply.body.owner, hypertyURL, childrens, userURL);
r._dataObjectsStorage.set(c),(c.hasOwnProperty("store")&&c.store||c.hasOwnProperty("isToSaveData")&&c.isToSaveData)&&(a.isToSaveData=!0,r._dataObjectsStorage.update(!1,n,"isToSaveData",!0),r._dataObjectsStorage.saveData(!1,n,null,o.body.value.data))),
//forward to hyperty:
o.id=e.id,o.from=r._url,o.to=i,o.body.schema=e.body.schema,o.body.resource=e.body.resource,
//TODO: For Further Study
e.body.hasOwnProperty("mutual")&&(o.body.mutual=e.body.mutual),S.log("[subscribe] - new subscription: ",e,o,a),t._bus.postMessage(o)}})}else
//listener rejected
r._bus.postMessage({id:e.id,type:"response",from:e.to,to:i,body:o.body})})})}},{key:"_resumeSubscription",value:function(e,t){var r=this;return new a.default(function(n){var i=t.url,o=t.schema,a=e.from,s=i+"/children/";S.log("[SyncherManager - ReuseSubscription] - objURL: ",i," - schema:",o),
//get schema from catalogue and parse -> (children)
// TODO: remove this since children resources should be available in the DataObjectsStorage
r._catalog.getDataSchemaDescriptor(o).then(function(n){var u=n.sourcePackage.sourceCode.properties,c=u.children?u.children.constant:[],f=[];f.push(i+"/changes"),c.forEach(function(e){return f.push(s+e)}),
//FLOW-OUT: reply with provisional response
r._bus.postMessage({id:e.id,type:"response",from:e.to,to:a,body:{code:100,childrenResources:c,schema:o,resource:i}});
//FLOW-OUT: subscribe message to remote ReporterObject -> _onRemoteSubscribe
/*let objSubscribeMsg = {
            type: 'subscribe', from: this._url, to: objURLSubscription,
            body: { subscriber: hypertyURL, identity: msg.body.identity }
          };
           //subscribe to reporter SM
          this._bus.postMessage(objSubscribeMsg, (reply) => {*/
var l=r._observers[i];
// Object.assign(storedObject.data, reply.body.value.data);
// Object.assign(storedObject.childrens, reply.body.value.childrens);
//log.log('[subscribe] - resume subscription: ', msg, reply, storedObject, observer);
//register new hyperty subscription
return l||(l=new w.default(r,i,c),l.isToSaveData=t.isToSaveData,r._observers[i]=l),l.addSubscription(a),l.addChildrens(c),r._decryptChildrens(t,c)}).then(function(e){
// log.log('result of previous promise');
n(e)}).catch(function(e){S.error("[SyncherManager - resume subscription] - fail on getDataSchemaDescriptor: ",e),n(!1)})})}},{key:"_onLocalUnSubscribe",value:function(e){var t=this,r=(e.from,e.body.resource),n=t._observers[r];n&&(
//TODO: is there any policy verification before delete?
n.removeSubscription(e),
//TODO: destroy object in the registry?
t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200}}),this._dataObjectsStorage.deleteResource(r),
//TODO: remove Object if no more subscription?
delete t._observers[r])}},{key:"url",get:function(){return this._url}}]),SyncherManager}();t.default=O,e.exports=t.default},/* 495 */
/***/
function(e,t,r){r(496),e.exports=r(13).Object.values},/* 496 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-object-values-entries
var n=r(26),i=r(497)(!1);n(n.S,"Object",{values:function(e){return i(e)}})},/* 497 */
/***/
function(e,t,r){var n=r(67),i=r(44),o=r(77).f;e.exports=function(e){return function(t){for(var r,a=i(t),s=n(a),u=s.length,c=0,f=[];u>c;)o.call(a,r=s[c++])&&f.push(e?[r,a[r]]:a[r]);return f}}},/* 498 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function schemaValidation(e,t,r){try{var n=r,i=t.sourcePackage.sourceCode;
// add support for schema referencing itself
o.default.addSchema(i.id,i);
// validate
var a=o.default.validateMultiple(n,i);
// delete error stacks to improve logging
a.errors.forEach(function(e){delete e.stack}),!a.valid||a.missing.length}catch(e){}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(45);_interopRequireDefault(n);t.schemaValidation=schemaValidation;var i=r(499),o=_interopRequireDefault(i)},/* 499 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function notReallyPercentEncode(e){return encodeURI(e).replace(/%25[0-9][0-9]/g,function(e){return"%"+e.substring(3)})}function uriTemplateSubstitution(e){var t="";h[e.charAt(0)]&&(t=e.charAt(0),e=e.substring(1));var r="",n="",i=!0,o=!1,a=!1;"+"===t?i=!1:"."===t?(n=".",r="."):"/"===t?(n="/",r="/"):"#"===t?(n="#",i=!1):";"===t?(n=";",r=";",o=!0,a=!0):"?"===t?(n="?",r="&",o=!0):"&"===t&&(n="&",r="&",o=!0);for(var s=[],u=e.split(","),c=[],f={},l=0;l<u.length;l++){var p=u[l],g=null;if(-1!==p.indexOf(":")){var b=p.split(":");p=b[0],g=parseInt(b[1],10)}for(var m={};v[p.charAt(p.length-1)];)m[p.charAt(p.length-1)]=!0,p=p.substring(0,p.length-1);var _={truncate:g,name:p,suffices:m};c.push(_),f[p]=_,s.push(p)}var R=function(e){for(var t="",s=0,u=0;u<c.length;u++){var f=c[u],l=e(f.name);if(null===l||void 0===l||Array.isArray(l)&&0===l.length||"object"===(void 0===l?"undefined":(0,d.default)(l))&&0===(0,y.default)(l).length)s++;else if(t+=u===s?n:r||",",Array.isArray(l)){o&&(t+=f.name+"=");for(var p=0;p<l.length;p++)p>0&&(t+=f.suffices["*"]?r||",":",",f.suffices["*"]&&o&&(t+=f.name+"=")),t+=i?encodeURIComponent(l[p]).replace(/!/g,"%21"):notReallyPercentEncode(l[p])}else if("object"===(void 0===l?"undefined":(0,d.default)(l))){o&&!f.suffices["*"]&&(t+=f.name+"=");var h=!0;for(var v in l)h||(t+=f.suffices["*"]?r||",":","),h=!1,t+=i?encodeURIComponent(v).replace(/!/g,"%21"):notReallyPercentEncode(v),t+=f.suffices["*"]?"=":",",t+=i?encodeURIComponent(l[v]).replace(/!/g,"%21"):notReallyPercentEncode(l[v])}else o&&(t+=f.name,a&&""===l||(t+="=")),null!=f.truncate&&(l=l.substring(0,f.truncate)),t+=i?encodeURIComponent(l).replace(/!/g,"%21"):notReallyPercentEncode(l)}return t};return R.varNames=s,{prefix:n,substitution:R}}function UriTemplate(e){if(!(this instanceof UriTemplate))return new UriTemplate(e);for(var t=e.split("{"),r=[t.shift()],n=[],i=[],o=[];t.length>0;){var a=t.shift(),s=a.split("}")[0],u=a.substring(s.length+1),c=uriTemplateSubstitution(s);i.push(c.substitution),n.push(c.prefix),r.push(u),o=o.concat(c.substitution.varNames)}this.fill=function(e){for(var t=r[0],n=0;n<i.length;n++){t+=(0,i[n])(e),t+=r[n+1]}return t},this.varNames=o,this.template=e}function recursiveCompare(e,t){if(e===t)return!0;if(e&&t&&"object"===(void 0===e?"undefined":(0,d.default)(e))&&"object"===(void 0===t?"undefined":(0,d.default)(t))){if(Array.isArray(e)!==Array.isArray(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!recursiveCompare(e[r],t[r]))return!1}else{var n;for(n in e)if(void 0===t[n]&&void 0!==e[n])return!1;for(n in t)if(void 0===e[n]&&void 0!==t[n])return!1;for(n in e)if(!recursiveCompare(e[n],t[n]))return!1}return!0}return!1}
// parseURI() and resolveUrl() are from https://gist.github.com/1088850
//   -  released as public domain by author ("Yaffle") - see comments on gist
function parseURI(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
// authority = '//' + user + ':' + pass '@' + hostname + ':' port
return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function resolveUrl(e,t){
// RFC 3986
return t=parseURI(t||""),e=parseURI(e||""),t&&e?(t.protocol||e.protocol)+(t.protocol||t.authority?t.authority:e.authority)+function(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}(t.protocol||t.authority||"/"===t.pathname.charAt(0)?t.pathname:t.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+t.pathname:e.pathname)+(t.protocol||t.authority||t.pathname?t.search:t.search||e.search)+t.hash:null}function getDocumentUri(e){return e.split("#")[0]}function normSchema(e,t){if(e&&"object"===(void 0===e?"undefined":(0,d.default)(e)))if(void 0===t?t=e.id:"string"==typeof e.id&&(t=resolveUrl(t,e.id),e.id=t),Array.isArray(e))for(var r=0;r<e.length;r++)normSchema(e[r],t);else{"string"==typeof e.$ref&&(e.$ref=resolveUrl(t,e.$ref));for(var n in e)"enum"!==n&&normSchema(e[n],t)}}function defaultErrorReporter(e){e=e||"en";var t=O[e];return function(e){var r=t[e.code]||S[e.code];if("string"!=typeof r)return"Unknown error code "+e.code+": "+(0,i.default)(e.messageParams);var n=e.params;
// Adapted from Crockford's supplant()
return r.replace(/\{([^{}]*)\}/g,function(e,t){var r=n[t];return"string"==typeof r||"number"==typeof r?r:e})}}function ValidationError(e,t,r,n,i){if(Error.call(this),void 0===e)throw new Error("No error code supplied: "+n);this.message="",this.params=t,this.code=e,this.dataPath=r||"",this.schemaPath=n||"",this.subErrors=i||null;var o=new Error(this.message);if(this.stack=o.stack||o.stacktrace,!this.stack)try{throw o}catch(o){this.stack=o.stack||o.stacktrace}}function isTrustedUrl(e,t){if(t.substring(0,e.length)===e){var r=t.substring(e.length);if(t.length>0&&"/"===t.charAt(e.length-1)||"#"===r.charAt(0)||"?"===r.charAt(0))return!0}return!1}function createApi(e){var t,r,n=new g,i={setErrorReporter:function(e){return"string"==typeof e?this.language(e):(r=e,!0)},addFormat:function(){n.addFormat.apply(n,arguments)},language:function(e){return e?(O[e]||(e=e.split("-")[0]),!!O[e]&&(t=e,e)):t},addLanguage:function(e,t){var r;for(r in _)t[r]&&!t[_[r]]&&(t[_[r]]=t[r]);var n=e.split("-")[0];if(O[n]){O[e]=(0,f.default)(O[n]);for(r in t)void 0===O[n][r]&&(O[n][r]=t[r]),O[e][r]=t[r]}else
// use for base language if not yet defined
O[e]=t,O[n]=t;return this},freshApi:function(e){var t=createApi();return e&&t.language(e),t},validate:function(e,i,o,a){var s=defaultErrorReporter(t),u=r?function(e,t,n){return r(e,t,n)||s(e,t,n)}:s,c=new g(n,!1,u,o,a);"string"==typeof i&&(i={$ref:i}),c.addSchema("",i);var f=c.validateAll(e,i,null,null,"");return!f&&a&&(f=c.banUnknownProperties(e,i)),this.error=f,this.missing=c.missing,this.valid=null===f,this.valid},validateResult:function(){var e={};return this.validate.apply(e,arguments),e},validateMultiple:function(e,i,o,a){var s=defaultErrorReporter(t),u=r?function(e,t,n){return r(e,t,n)||s(e,t,n)}:s,c=new g(n,!0,u,o,a);"string"==typeof i&&(i={$ref:i}),c.addSchema("",i),c.validateAll(e,i,null,null,""),a&&c.banUnknownProperties(e,i);var f={};return f.errors=c.errors,f.missing=c.missing,f.valid=0===f.errors.length,f},addSchema:function(){return n.addSchema.apply(n,arguments)},getSchema:function(){return n.getSchema.apply(n,arguments)},getSchemaMap:function(){return n.getSchemaMap.apply(n,arguments)},getSchemaUris:function(){return n.getSchemaUris.apply(n,arguments)},getMissingUris:function(){return n.getMissingUris.apply(n,arguments)},dropSchemas:function(){n.dropSchemas.apply(n,arguments)},defineKeyword:function(){n.defineKeyword.apply(n,arguments)},defineError:function(e,t,r){if("string"!=typeof e||!/^[A-Z]+(_[A-Z]+)*$/.test(e))throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof t||t%1!=0||t<1e4)throw new Error("Code number must be an integer > 10000");if(void 0!==_[e])throw new Error("Error already defined: "+e+" as "+_[e]);if(void 0!==R[t])throw new Error("Error code already used: "+R[t]+" as "+t);_[e]=t,R[t]=e,S[e]=S[t]=r;for(var n in O){var i=O[n];i[e]&&(i[t]=i[t]||i[e])}},reset:function(){n.reset(),this.error=null,this.missing=[],this.valid=!0},missing:[],error:null,valid:!0,normSchema:normSchema,resolveUrl:resolveUrl,getDocumentUri:getDocumentUri,errorCodes:_};return i.language(e||"en"),i}Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),i=_interopRequireDefault(n),o=r(197),a=_interopRequireDefault(o),s=r(500),u=_interopRequireDefault(s),c=r(199),f=_interopRequireDefault(c),l=r(98),d=_interopRequireDefault(l),p=r(59),y=_interopRequireDefault(p);/*
 Author: Geraint Luff and others
 Year: 2013

 This code is released into the "public domain" by its author(s).  Anybody may use, alter and distribute the code without restriction.  The author makes no guarantees, and takes no liability of any kind for use of this code.

 If you find a bug or make an improvement, it would be courteous to let the author know, but it is not compulsory.
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2Fkeys
y.default||(Object.keys=function(){var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=r.length;return function(i){if("object"!==(void 0===i?"undefined":(0,d.default)(i))&&"function"!=typeof i||null===i)throw new TypeError("Object.keys called on non-object");var o=[];for(var a in i)e.call(i,a)&&o.push(a);if(t)for(var s=0;s<n;s++)e.call(i,r[s])&&o.push(r[s]);return o}}()),
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
f.default||(Object.create=function(){function F(){}return function(e){if(1!==arguments.length)throw new Error("Object.create implementation only accepts one parameter.");return F.prototype=e,new F}}()),
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FisArray
Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FArray%2FindexOf
Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null===this)throw new TypeError;var t=Object(this),r=t.length>>>0;if(0===r)return-1;var n=0;if(arguments.length>1&&(n=Number(arguments[1]),n!==n?
// shortcut for verifying if it's NaN
n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),n>=r)return-1;for(var i=n>=0?n:Math.max(r-Math.abs(n),0);i<r;i++)if(i in t&&t[i]===e)return i;return-1}),
// Grungey Object.isFrozen hack
u.default||(Object.isFrozen=function(e){for(var t="tv4_test_frozen_key";e.hasOwnProperty(t);)t+=Math.random();try{return e[t]=!0,delete e[t],!1}catch(e){return!0}});
// Based on: https://github.com/geraintluff/uri-templates, but with all the de-substitution stuff removed
var h={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},v={"*":!0};UriTemplate.prototype={toString:function(){return this.template},fillFromObject:function(e){return this.fill(function(t){return e[t]})}};var g=function(e,t,r,n,i){if(this.missing=[],this.missingMap={},this.formatValidators=e?(0,f.default)(e.formatValidators):{},this.schemas=e?(0,f.default)(e.schemas):{},this.collectMultiple=t,this.errors=[],this.handleError=t?this.collectError:this.returnError,n&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),i&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorReporter=r||defaultErrorReporter("en"),"string"==typeof this.errorReporter)throw new Error("debug");if(this.definedKeywords={},e)for(var o in e.definedKeywords)this.definedKeywords[o]=e.definedKeywords[o].slice(0)};g.prototype.defineKeyword=function(e,t){this.definedKeywords[e]=this.definedKeywords[e]||[],this.definedKeywords[e].push(t)},g.prototype.createError=function(e,t,r,n,i,o,a){var s=new ValidationError(e,t,r,n,i);return s.message=this.errorReporter(s,o,a),s},g.prototype.returnError=function(e){return e},g.prototype.collectError=function(e){return e&&this.errors.push(e),null},g.prototype.prefixErrors=function(e,t,r){for(var n=e;n<this.errors.length;n++)this.errors[n]=this.errors[n].prefixWith(t,r);return this},g.prototype.banUnknownProperties=function(e,t){for(var r in this.unknownPropertyPaths){var n=this.createError(_.UNKNOWN_PROPERTY,{path:r},r,"",null,e,t),i=this.handleError(n);if(i)return i}return null},g.prototype.addFormat=function(e,t){if("object"===(void 0===e?"undefined":(0,d.default)(e))){for(var r in e)this.addFormat(r,e[r]);return this}this.formatValidators[e]=t},g.prototype.resolveRefs=function(e,t){if(void 0!==e.$ref){if(t=t||{},t[e.$ref])return this.createError(_.CIRCULAR_REFERENCE,{urls:(0,y.default)(t).join(", ")},"","",null,void 0,e);t[e.$ref]=!0,e=this.getSchema(e.$ref,t)}return e},g.prototype.getSchema=function(e,t){var r;if(void 0!==this.schemas[e])return r=this.schemas[e],this.resolveRefs(r,t);var n=e,i="";if(-1!==e.indexOf("#")&&(i=e.substring(e.indexOf("#")+1),n=e.substring(0,e.indexOf("#"))),"object"===(0,d.default)(this.schemas[n])){r=this.schemas[n];var o=decodeURIComponent(i);if(""===o)return this.resolveRefs(r,t);if("/"!==o.charAt(0))return;for(var a=o.split("/").slice(1),s=0;s<a.length;s++){var u=a[s].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===r[u]){r=void 0;break}r=r[u]}if(void 0!==r)return this.resolveRefs(r,t)}void 0===this.missing[n]&&(this.missing.push(n),this.missing[n]=n,this.missingMap[n]=n)},g.prototype.searchSchemas=function(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++)this.searchSchemas(e[r],t);else if(e&&"object"===(void 0===e?"undefined":(0,d.default)(e))){"string"==typeof e.id&&isTrustedUrl(t,e.id)&&void 0===this.schemas[e.id]&&(this.schemas[e.id]=e);for(var n in e)if("enum"!==n)if("object"===(0,d.default)(e[n]))this.searchSchemas(e[n],t);else if("$ref"===n){var i=getDocumentUri(e[n]);i&&void 0===this.schemas[i]&&void 0===this.missingMap[i]&&(this.missingMap[i]=i)}}},g.prototype.addSchema=function(e,t){
//overload
if("string"!=typeof e||void 0===t){if("object"!==(void 0===e?"undefined":(0,d.default)(e))||"string"!=typeof e.id)return;t=e,e=t.id}e===getDocumentUri(e)+"#"&&(
// Remove empty fragment
e=getDocumentUri(e)),this.schemas[e]=t,delete this.missingMap[e],normSchema(t,e),this.searchSchemas(t,e)},g.prototype.getSchemaMap=function(){var e={};for(var t in this.schemas)e[t]=this.schemas[t];return e},g.prototype.getSchemaUris=function(e){var t=[];for(var r in this.schemas)e&&!e.test(r)||t.push(r);return t},g.prototype.getMissingUris=function(e){var t=[];for(var r in this.missingMap)e&&!e.test(r)||t.push(r);return t},g.prototype.dropSchemas=function(){this.schemas={},this.reset()},g.prototype.reset=function(){this.missing=[],this.missingMap={},this.errors=[]},g.prototype.validateAll=function(e,t,r,n,i){var o;if(!(t=this.resolveRefs(t)))return null;if(t instanceof ValidationError)return this.errors.push(t),t;var s,c=this.errors.length,f=null,l=null;if(this.checkRecursive&&e&&"object"===(void 0===e?"undefined":(0,d.default)(e))){if(o=!this.scanned.length,e[this.validatedSchemasKey]){var p=e[this.validatedSchemasKey].indexOf(t);if(-1!==p)return this.errors=this.errors.concat(e[this.validationErrorsKey][p]),null}if((0,u.default)(e)&&-1!==(s=this.scannedFrozen.indexOf(e))){var y=this.scannedFrozenSchemas[s].indexOf(t);if(-1!==y)return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[s][y]),null}if(this.scanned.push(e),(0,u.default)(e))-1===s&&(s=this.scannedFrozen.length,this.scannedFrozen.push(e),this.scannedFrozenSchemas.push([])),f=this.scannedFrozenSchemas[s].length,this.scannedFrozenSchemas[s][f]=t,this.scannedFrozenValidationErrors[s][f]=[];else{if(!e[this.validatedSchemasKey])try{(0,a.default)(e,this.validatedSchemasKey,{value:[],configurable:!0}),(0,a.default)(e,this.validationErrorsKey,{value:[],configurable:!0})}catch(t){
//IE 7/8 workaround
e[this.validatedSchemasKey]=[],e[this.validationErrorsKey]=[]}l=e[this.validatedSchemasKey].length,e[this.validatedSchemasKey][l]=t,e[this.validationErrorsKey][l]=[]}}var h=this.errors.length,v=this.validateBasic(e,t,i)||this.validateNumeric(e,t,i)||this.validateString(e,t,i)||this.validateArray(e,t,i)||this.validateObject(e,t,i)||this.validateCombinations(e,t,i)||this.validateHypermedia(e,t,i)||this.validateFormat(e,t,i)||this.validateDefinedKeywords(e,t,i)||null;if(o){for(;this.scanned.length;){delete this.scanned.pop()[this.validatedSchemasKey]}this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(v||h!==this.errors.length)for(;r&&r.length||n&&n.length;){var g=r&&r.length?""+r.pop():null,b=n&&n.length?""+n.pop():null;v&&(v=v.prefixWith(g,b)),this.prefixErrors(h,g,b)}return null!==f?this.scannedFrozenValidationErrors[s][f]=this.errors.slice(c):null!==l&&(e[this.validationErrorsKey][l]=this.errors.slice(c)),this.handleError(v)},g.prototype.validateFormat=function(e,t){if("string"!=typeof t.format||!this.formatValidators[t.format])return null;var r=this.formatValidators[t.format].call(null,e,t);return"string"==typeof r||"number"==typeof r?this.createError(_.FORMAT_CUSTOM,{message:r},"","/format",null,e,t):r&&"object"===(void 0===r?"undefined":(0,d.default)(r))?this.createError(_.FORMAT_CUSTOM,{message:r.message||"?"},r.dataPath||"",r.schemaPath||"/format",null,e,t):null},g.prototype.validateDefinedKeywords=function(e,t,r){for(var n in this.definedKeywords)if(void 0!==t[n])for(var i=this.definedKeywords[n],o=0;o<i.length;o++){var a=i[o],s=a(e,t[n],t,r);if("string"==typeof s||"number"==typeof s)return this.createError(_.KEYWORD_CUSTOM,{key:n,message:s},"","",null,e,t).prefixWith(null,n);if(s&&"object"===(void 0===s?"undefined":(0,d.default)(s))){var u=s.code;if("string"==typeof u){if(!_[u])throw new Error("Undefined error code (use defineError): "+u);u=_[u]}else"number"!=typeof u&&(u=_.KEYWORD_CUSTOM);var c="object"===(0,d.default)(s.message)?s.message:{key:n,message:s.message||"?"},f=s.schemaPath||"/"+n.replace(/~/g,"~0").replace(/\//g,"~1");return this.createError(u,c,s.dataPath||null,f,null,e,t)}}return null},g.prototype.validateBasic=function(e,t,r){var n;return(n=this.validateType(e,t,r))?n.prefixWith(null,"type"):(n=this.validateEnum(e,t,r))?n.prefixWith(null,"type"):null},g.prototype.validateType=function(e,t){if(void 0===t.type)return null;var r=void 0===e?"undefined":(0,d.default)(e);null===e?r="null":Array.isArray(e)&&(r="array");var n=t.type;Array.isArray(n)||(n=[n]);for(var i=0;i<n.length;i++){var o=n[i];if(o===r||"integer"===o&&"number"===r&&e%1==0)return null}return this.createError(_.INVALID_TYPE,{type:r,expected:n.join("/")},"","",null,e,t)},g.prototype.validateEnum=function(e,t){if(void 0===t.enum)return null;for(var r=0;r<t.enum.length;r++){if(recursiveCompare(e,t.enum[r]))return null}return this.createError(_.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?(0,i.default)(e):e},"","",null,e,t)},g.prototype.validateNumeric=function(e,t,r){return this.validateMultipleOf(e,t,r)||this.validateMinMax(e,t,r)||this.validateNaN(e,t,r)||null};var b=Math.pow(2,-51),m=1-b;g.prototype.validateMultipleOf=function(e,t){var r=t.multipleOf||t.divisibleBy;if(void 0===r)return null;if("number"==typeof e){var n=e/r%1;if(n>=b&&n<m)return this.createError(_.NUMBER_MULTIPLE_OF,{value:e,multipleOf:r},"","",null,e,t)}return null},g.prototype.validateMinMax=function(e,t){if("number"!=typeof e)return null;if(void 0!==t.minimum){if(e<t.minimum)return this.createError(_.NUMBER_MINIMUM,{value:e,minimum:t.minimum},"","/minimum",null,e,t);if(t.exclusiveMinimum&&e===t.minimum)return this.createError(_.NUMBER_MINIMUM_EXCLUSIVE,{value:e,minimum:t.minimum},"","/exclusiveMinimum",null,e,t)}if(void 0!==t.maximum){if(e>t.maximum)return this.createError(_.NUMBER_MAXIMUM,{value:e,maximum:t.maximum},"","/maximum",null,e,t);if(t.exclusiveMaximum&&e===t.maximum)return this.createError(_.NUMBER_MAXIMUM_EXCLUSIVE,{value:e,maximum:t.maximum},"","/exclusiveMaximum",null,e,t)}return null},g.prototype.validateNaN=function(e,t){return"number"!=typeof e?null:!0===isNaN(e)||e===1/0||e===-1/0?this.createError(_.NUMBER_NOT_A_NUMBER,{value:e},"","/type",null,e,t):null},g.prototype.validateString=function(e,t,r){return this.validateStringLength(e,t,r)||this.validateStringPattern(e,t,r)||null},g.prototype.validateStringLength=function(e,t){return"string"!=typeof e?null:void 0!==t.minLength&&e.length<t.minLength?this.createError(_.STRING_LENGTH_SHORT,{length:e.length,minimum:t.minLength},"","/minLength",null,e,t):void 0!==t.maxLength&&e.length>t.maxLength?this.createError(_.STRING_LENGTH_LONG,{length:e.length,maximum:t.maxLength},"","/maxLength",null,e,t):null},g.prototype.validateStringPattern=function(e,t){if("string"!=typeof e||"string"!=typeof t.pattern&&!(t.pattern instanceof RegExp))return null;var r;if(t.pattern instanceof RegExp)r=t.pattern;else{var n,i="",o=t.pattern.match(/^\/(.+)\/([img]*)$/);o?(n=o[1],i=o[2]):n=t.pattern,r=new RegExp(n,i)}return r.test(e)?null:this.createError(_.STRING_PATTERN,{pattern:t.pattern},"","/pattern",null,e,t)},g.prototype.validateArray=function(e,t,r){return Array.isArray(e)?this.validateArrayLength(e,t,r)||this.validateArrayUniqueItems(e,t,r)||this.validateArrayItems(e,t,r)||null:null},g.prototype.validateArrayLength=function(e,t){var r;return void 0!==t.minItems&&e.length<t.minItems&&(r=this.createError(_.ARRAY_LENGTH_SHORT,{length:e.length,minimum:t.minItems},"","/minItems",null,e,t),this.handleError(r))?r:void 0!==t.maxItems&&e.length>t.maxItems&&(r=this.createError(_.ARRAY_LENGTH_LONG,{length:e.length,maximum:t.maxItems},"","/maxItems",null,e,t),this.handleError(r))?r:null},g.prototype.validateArrayUniqueItems=function(e,t){if(t.uniqueItems)for(var r=0;r<e.length;r++)for(var n=r+1;n<e.length;n++)if(recursiveCompare(e[r],e[n])){var i=this.createError(_.ARRAY_UNIQUE,{match1:r,match2:n},"","/uniqueItems",null,e,t);if(this.handleError(i))return i}return null},g.prototype.validateArrayItems=function(e,t,r){if(void 0===t.items)return null;var n,i;if(Array.isArray(t.items)){for(i=0;i<e.length;i++)if(i<t.items.length){if(n=this.validateAll(e[i],t.items[i],[i],["items",i],r+"/"+i))return n}else if(void 0!==t.additionalItems)if("boolean"==typeof t.additionalItems){if(!t.additionalItems&&(n=this.createError(_.ARRAY_ADDITIONAL_ITEMS,{},"/"+i,"/additionalItems",null,e,t),this.handleError(n)))return n}else if(n=this.validateAll(e[i],t.additionalItems,[i],["additionalItems"],r+"/"+i))return n}else for(i=0;i<e.length;i++)if(n=this.validateAll(e[i],t.items,[i],["items"],r+"/"+i))return n;return null},g.prototype.validateObject=function(e,t,r){return"object"!==(void 0===e?"undefined":(0,d.default)(e))||null===e||Array.isArray(e)?null:this.validateObjectMinMaxProperties(e,t,r)||this.validateObjectRequiredProperties(e,t,r)||this.validateObjectProperties(e,t,r)||this.validateObjectDependencies(e,t,r)||null},g.prototype.validateObjectMinMaxProperties=function(e,t){var r,n=(0,y.default)(e);return void 0!==t.minProperties&&n.length<t.minProperties&&(r=this.createError(_.OBJECT_PROPERTIES_MINIMUM,{propertyCount:n.length,minimum:t.minProperties},"","/minProperties",null,e,t),this.handleError(r))?r:void 0!==t.maxProperties&&n.length>t.maxProperties&&(r=this.createError(_.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:n.length,maximum:t.maxProperties},"","/maxProperties",null,e,t),this.handleError(r))?r:null},g.prototype.validateObjectRequiredProperties=function(e,t){if(void 0!==t.required)for(var r=0;r<t.required.length;r++){var n=t.required[r];if(void 0===e[n]){var i=this.createError(_.OBJECT_REQUIRED,{key:n},"","/required/"+r,null,e,t);if(this.handleError(i))return i}}return null},g.prototype.validateObjectProperties=function(e,t,r){var n;for(var i in e){var o=r+"/"+i.replace(/~/g,"~0").replace(/\//g,"~1"),a=!1;if(void 0!==t.properties&&void 0!==t.properties[i]&&(a=!0,n=this.validateAll(e[i],t.properties[i],[i],["properties",i],o)))return n;if(void 0!==t.patternProperties)for(var s in t.patternProperties){var u=new RegExp(s);if(u.test(i)&&(a=!0,n=this.validateAll(e[i],t.patternProperties[s],[i],["patternProperties",s],o)))return n}if(a)this.trackUnknownProperties&&(this.knownPropertyPaths[o]=!0,delete this.unknownPropertyPaths[o]);else if(void 0!==t.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[o]=!0,delete this.unknownPropertyPaths[o]),"boolean"==typeof t.additionalProperties){if(!t.additionalProperties&&(n=this.createError(_.OBJECT_ADDITIONAL_PROPERTIES,{key:i},"","/additionalProperties",null,e,t).prefixWith(i,null),this.handleError(n)))return n}else if(n=this.validateAll(e[i],t.additionalProperties,[i],["additionalProperties"],o))return n}else this.trackUnknownProperties&&!this.knownPropertyPaths[o]&&(this.unknownPropertyPaths[o]=!0)}return null},g.prototype.validateObjectDependencies=function(e,t,r){var n;if(void 0!==t.dependencies)for(var i in t.dependencies)if(void 0!==e[i]){var o=t.dependencies[i];if("string"==typeof o){if(void 0===e[o]&&(n=this.createError(_.OBJECT_DEPENDENCY_KEY,{key:i,missing:o},"","",null,e,t).prefixWith(null,i).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(Array.isArray(o))for(var a=0;a<o.length;a++){var s=o[a];if(void 0===e[s]&&(n=this.createError(_.OBJECT_DEPENDENCY_KEY,{key:i,missing:s},"","/"+a,null,e,t).prefixWith(null,i).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(n=this.validateAll(e,o,[],["dependencies",i],r))return n}return null},g.prototype.validateCombinations=function(e,t,r){return this.validateAllOf(e,t,r)||this.validateAnyOf(e,t,r)||this.validateOneOf(e,t,r)||this.validateNot(e,t,r)||null},g.prototype.validateAllOf=function(e,t,r){if(void 0===t.allOf)return null;for(var n,i=0;i<t.allOf.length;i++){var o=t.allOf[i];if(n=this.validateAll(e,o,[],["allOf",i],r))return n}return null},g.prototype.validateAnyOf=function(e,t,r){if(void 0===t.anyOf)return null;var n,i,o=[],a=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,i=this.knownPropertyPaths);for(var s=!0,u=0;u<t.anyOf.length;u++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var c=t.anyOf[u],f=this.errors.length,l=this.validateAll(e,c,[],["anyOf",u],r);if(null===l&&f===this.errors.length){if(this.errors=this.errors.slice(0,a),this.trackUnknownProperties){for(var d in this.knownPropertyPaths)i[d]=!0,delete n[d];for(var p in this.unknownPropertyPaths)i[p]||(n[p]=!0);
// We need to continue looping so we catch all the property definitions, but we don't want to return an error
s=!1;continue}return null}l&&o.push(l.prefixWith(null,""+u).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=i),s?(o=o.concat(this.errors.slice(a)),this.errors=this.errors.slice(0,a),this.createError(_.ANY_OF_MISSING,{},"","/anyOf",o,e,t)):void 0},g.prototype.validateOneOf=function(e,t,r){if(void 0===t.oneOf)return null;var n,i,o=null,a=[],s=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,i=this.knownPropertyPaths);for(var u=0;u<t.oneOf.length;u++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var c=t.oneOf[u],f=this.errors.length,l=this.validateAll(e,c,[],["oneOf",u],r);if(null===l&&f===this.errors.length){if(null!==o)return this.errors=this.errors.slice(0,s),this.createError(_.ONE_OF_MULTIPLE,{index1:o,index2:u},"","/oneOf",null,e,t);if(o=u,this.trackUnknownProperties){for(var d in this.knownPropertyPaths)i[d]=!0,delete n[d];for(var p in this.unknownPropertyPaths)i[p]||(n[p]=!0)}}else l&&a.push(l)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=i),null===o?(a=a.concat(this.errors.slice(s)),this.errors=this.errors.slice(0,s),this.createError(_.ONE_OF_MISSING,{},"","/oneOf",a,e,t)):(this.errors=this.errors.slice(0,s),null)},g.prototype.validateNot=function(e,t,r){if(void 0===t.not)return null;var n,i,o=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,i=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});var a=this.validateAll(e,t.not,null,null,r),s=this.errors.slice(o);return this.errors=this.errors.slice(0,o),this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=i),null===a&&0===s.length?this.createError(_.NOT_PASSED,{},"","/not",null,e,t):null},g.prototype.validateHypermedia=function(e,t,r){if(!t.links)return null;for(var n,i=0;i<t.links.length;i++){var o=t.links[i];if("describedby"===o.rel){for(var a=new UriTemplate(o.href),s=!0,u=0;u<a.varNames.length;u++)if(!(a.varNames[u]in e)){s=!1;break}if(s){var c=a.fillFromObject(e),f={$ref:c};if(n=this.validateAll(e,f,[],["links",i],r))return n}}}};var _={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,
// Numeric errors
NUMBER_MULTIPLE_OF:100,NUMBER_MINIMUM:101,NUMBER_MINIMUM_EXCLUSIVE:102,NUMBER_MAXIMUM:103,NUMBER_MAXIMUM_EXCLUSIVE:104,NUMBER_NOT_A_NUMBER:105,
// String errors
STRING_LENGTH_SHORT:200,STRING_LENGTH_LONG:201,STRING_PATTERN:202,
// Object errors
OBJECT_PROPERTIES_MINIMUM:300,OBJECT_PROPERTIES_MAXIMUM:301,OBJECT_REQUIRED:302,OBJECT_ADDITIONAL_PROPERTIES:303,OBJECT_DEPENDENCY_KEY:304,
// Array errors
ARRAY_LENGTH_SHORT:400,ARRAY_LENGTH_LONG:401,ARRAY_UNIQUE:402,ARRAY_ADDITIONAL_ITEMS:403,
// Custom/user-defined errors
FORMAT_CUSTOM:500,KEYWORD_CUSTOM:501,
// Schema structure
CIRCULAR_REFERENCE:600,
// Non-standard validation options
UNKNOWN_PROPERTY:1e3},R={};for(var w in _)R[_[w]]=w;var S={INVALID_TYPE:"Invalid type: {type} (expected {expected})",ENUM_MISMATCH:"No enum match for: {value}",ANY_OF_MISSING:'Data does not match any schemas from "anyOf"',ONE_OF_MISSING:'Data does not match any schemas from "oneOf"',ONE_OF_MULTIPLE:'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}',NOT_PASSED:'Data matches schema from "not"',
// Numeric errors
NUMBER_MULTIPLE_OF:"Value {value} is not a multiple of {multipleOf}",NUMBER_MINIMUM:"Value {value} is less than minimum {minimum}",NUMBER_MINIMUM_EXCLUSIVE:"Value {value} is equal to exclusive minimum {minimum}",NUMBER_MAXIMUM:"Value {value} is greater than maximum {maximum}",NUMBER_MAXIMUM_EXCLUSIVE:"Value {value} is equal to exclusive maximum {maximum}",NUMBER_NOT_A_NUMBER:"Value {value} is not a valid number",
// String errors
STRING_LENGTH_SHORT:"String is too short ({length} chars), minimum {minimum}",STRING_LENGTH_LONG:"String is too long ({length} chars), maximum {maximum}",STRING_PATTERN:"String does not match pattern: {pattern}",
// Object errors
OBJECT_PROPERTIES_MINIMUM:"Too few properties defined ({propertyCount}), minimum {minimum}",OBJECT_PROPERTIES_MAXIMUM:"Too many properties defined ({propertyCount}), maximum {maximum}",OBJECT_REQUIRED:"Missing required property: {key}",OBJECT_ADDITIONAL_PROPERTIES:"Additional properties not allowed",OBJECT_DEPENDENCY_KEY:"Dependency failed - key must exist: {missing} (due to key: {key})",
// Array errors
ARRAY_LENGTH_SHORT:"Array is too short ({length}), minimum {minimum}",ARRAY_LENGTH_LONG:"Array is too long ({length}), maximum {maximum}",ARRAY_UNIQUE:"Array items are not unique (indices {match1} and {match2})",ARRAY_ADDITIONAL_ITEMS:"Additional items not allowed",
// Format errors
FORMAT_CUSTOM:"Format validation failed ({message})",KEYWORD_CUSTOM:"Keyword failed: {key} ({message})",
// Schema structure
CIRCULAR_REFERENCE:"Circular $refs: {urls}",
// Non-standard validation options
UNKNOWN_PROPERTY:"Unknown property (not in schema)"};ValidationError.prototype=(0,f.default)(Error.prototype),ValidationError.prototype.constructor=ValidationError,ValidationError.prototype.name="ValidationError",ValidationError.prototype.prefixWith=function(e,t){if(null!==e&&(e=e.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+e+this.dataPath),null!==t&&(t=t.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+t+this.schemaPath),null!==this.subErrors)for(var r=0;r<this.subErrors.length;r++)this.subErrors[r].prefixWith(e,t);return this};var O={},P=createApi();P.addLanguage("en-gb",S),
//legacy property
P.tv4=P,
//return tv4;
t.default=P,
//}
e.exports=t.default},/* 500 */
/***/
function(e,t,r){e.exports={default:r(501),__esModule:!0}},/* 501 */
/***/
function(e,t,r){r(502),e.exports=r(13).Object.isFrozen},/* 502 */
/***/
function(e,t,r){
// 19.1.2.12 Object.isFrozen(O)
var n=r(42);r(97)("isFrozen",function(e){return function(t){return!n(t)||!!e&&e(t)}})},/* 503 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),i=_interopRequireDefault(n),o=r(12),a=_interopRequireDefault(o),s=r(59),u=_interopRequireDefault(s),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(11),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(p),h=r(15),v=r(206),g=_interopRequireDefault(v),b=y.getLogger("ReporterObject"),m=function(){function ReporterObject(e,t,r){(0,f.default)(this,ReporterObject);var n=this;n._parent=e,n._owner=t,n._url=r,n._bus=e._bus,n._domain=(0,h.divideURL)(r).domain,n._objSubscriptorURL=n._url+"/subscription",n._subscriptions={},n._childrens=[],n._childrenListeners=[],n._forwards={},n._isToSaveData=!1,n._allocateListeners()}return(0,d.default)(ReporterObject,[{key:"_allocateListeners",value:function(){var e=this,t=this;
//add subscription listener...
t._subscriptionListener=t._bus.addListener(t._objSubscriptorURL,function(e){switch(b.info("[SyncherManager.ReporterObject received ]",e),e.type){case"subscribe":t._onRemoteSubscribe(e);break;case"unsubscribe":t._onRemoteUnSubscribe(e);break;case"response":t._onRemoteResponse(e)}});var r=t._url+"/changes";t._changeListener=t._bus.addListener(r,function(n){b.info("[SyncherManager.ReporterObject ] SyncherManager-"+r+"-RCV: ",n),
//TODO: what todo here? Save changes?
e._isToSaveData&&n.body.attribute&&(b.log("[SyncherManager.ReporterObject ] SyncherManager - save data: ",n),t._parent._dataObjectsStorage.update(!0,t._url,"version",n.body.version),t._parent._dataObjectsStorage.update(!0,t._url,"lastModified",n.body.lastModified),t._parent._dataObjectsStorage.saveData(!0,t._url,n.body.attribute,n.body.value))})}},{key:"_releaseListeners",value:function(){var e=this;e._subscriptionListener.remove(),e._changeListener.remove(),e._childrenListeners.forEach(function(e){e.remove()}),(0,u.default)(e._forwards).forEach(function(t){e.forwardUnSubscribe(t)}),
//remove all subscriptions
(0,u.default)(e._subscriptions).forEach(function(t){e._subscriptions[t]._releaseListeners()})}},{key:"resumeSubscriptions",value:function(e){var t=this;e&&(0,u.default)(e).forEach(function(r){var n=e[r];b.log("[SyncherManager.ReporterObject] - resume subscriptions",t,n,t._childrens),t._subscriptions[n]||(t._subscriptions[n]=new g.default(t._bus,t._owner,t._url,t._childrens,!0))})}},{key:"forwardSubscribe",value:function(e){var t=this,r={type:"subscribe",from:t._parent._url,to:"domain://msg-node."+t._domain+"/sm",body:{resources:e,source:t._owner}};return new a.default(function(n,i){t._bus.postMessage(r,function(r){if(b.log("[SyncherManager.ReporterObject ]forward-subscribe-response(reporter): ",r),200===r.body.code){var o=t._bus.addForward(t._url,t._owner);t._forwards[e[0]]=o,n()}else i("Error on msg-node subscription: "+r.body.desc)})})}},{key:"forwardUnSubscribe",value:function(e){var t=this;t._forwards[e].remove(),delete t._forwards[e];
//FLOW-OUT: message sent to the msg-node SubscriptionManager component
var r={type:"unsubscribe",from:t._parent._url,to:"domain://msg-node."+t._domain+"/sm",body:{resources:[e],source:t._owner}};t._bus.postMessage(r)}},{key:"addChildrens",value:function(e){var t=this,r=this;return new a.default(function(n,o){if(0===e.length)return void n();var a=r._url+"/children/";b.log("[SyncherManager.ReporterObject - addChildrens] - childrens: ",e,a),e.forEach(function(e){r._childrens.push(e)});/*
        _this._childrens.forEach((child) => {
          let childId = childBaseURL + child;
           let selfForward = _this._bus.addForward(childId, owner);
          _this._childrenListeners.push(selfForward);
        });*/
var s=[];e.forEach(function(e){return s.push(a+e)});
//_this._storageSubscriptions[_this._objSubscriptorURL] = {url: _this._url, owner: _this._owner, childrens: _this._childrens};
//FLOW-OUT: message sent to the msg-node SubscriptionManager component
var u={type:"subscribe",from:r._parent._url,to:"domain://msg-node."+r._domain+"/sm",body:{resources:s,source:r._owner}};r._bus.postMessage(u,function(e){b.log("[SyncherManager.ReporterObject ]node-subscribe-response(reporter):",e),200===e.body.code?(
//add children listeners on local ...
s.forEach(function(e){var n=r._bus.addListener(e,function(e){if(
//TODO: what todo here? Save childrens?
b.log("[SyncherManager.ReporterObject received]",e),"create"===e.type&&e.to.includes("children")&&t._isToSaveData){
// if the value is not encrypted lets encrypt it
// todo: should be subject to some policy
var n=(0,h.splitObjectURL)(e.to),o=n.url;
//remove false when mutualAuthentication is enabled
"string"!=typeof e.body.value?(b.log("[SyncherManager.ReporterObject] encrypting received data ",e.body.value),r._parent._identityModule.encryptDataObject(e.body.value,o).then(function(t){b.log("[SyncherManager.ReporterObject] encrypted data ",t),r._storeChildObject(e,(0,i.default)(t))}).catch(function(t){b.warn("[SyncherManager._decryptChildrens] failed : ",t," Storing unencrypted"),r._storeChildObject(e,e.body.value)})):r._storeChildObject(e,e.body.value)}});r._childrenListeners.push(n);var o=r._bus.addForward(e,r._owner);r._childrenListeners.push(o)}),n()):o("Error on msg-node subscription: "+e.body.desc)})})}},{key:"_storeChildObject",value:function(e,t){var r=this,n=(0,h.splitObjectURL)(e.to),i=n.url,o=n.resource,a={identity:e.body.identity,value:t},s=e.body.resource,u=o;s&&(u+="."+s),
// this identity data is not needed to be stored
delete a.identity.assertion,delete a.identity.expires,r._parent._dataObjectsStorage.saveChildrens(!0,i,u,a)}},{key:"delete",value:function(){var e=this,t=(0,h.divideURL)(e._owner).domain;
//FLOW-OUT: message sent directly to all subscribers of the reporter
e._bus.postMessage({type:"delete",from:e._objSubscriptorURL,to:e._url+"/changes"}),
//FLOW-OUT: message sent to the msg-node ObjectAllocationManager component
e._bus.postMessage({type:"delete",from:e._parent._url,to:"domain://msg-node."+t+"/object-address-allocation",body:{resource:e._url,childrenResources:e._childrens}}),e._releaseListeners(),delete e._parent._reporters[e._url]}},{key:"_onRemoteResponse",value:function(e){var t=this;t._bus.postMessage({id:e.id,type:"response",from:e.to,to:t._url,body:{code:e.body.code,identity:e.body.identity,source:e.from}})}},{key:"_onRemoteSubscribe",value:function(e){var t=this,r=e.body.subscriber;
//validate if subscription already exists?
t._subscriptions[r]&&
// let errorMsg = {
//   id: msg.id, type: 'response', from: msg.to, to: hypertyURL,
//   body: { code: 500, desc: 'Subscription for (' + _this._url + ' : ' +  hypertyURL + ') already exists!' }
// };
//
// _this._bus.postMessage(errorMsg);
// return;
// new version because of reusage
t._subscriptions[r]._releaseListeners();
//ask to subscribe to Syncher? (depends on the operation mode)
//TODO: get mode from object!
var n={type:"forward",from:t._url,to:t._owner,body:{type:e.type,from:r,to:t._url,identity:e.body.identity}};
//TODO: For Further Study
e.body.hasOwnProperty("mutual")&&(n.body.mutual=e.body.mutual),t._bus.postMessage(n,function(n){b.log("[SyncherManager.ReporterObject ]forward-reply: ",n),200===n.body.code&&(t._subscriptions[r]||(b.log("[SyncherManager.ReporterObject] - _onRemoteSubscribe:",t._childrens),t._subscriptions[r]=new g.default(t._bus,t._owner,t._url,t._childrens,!0)));
//TODO: atualizar mutual no storage e tb na sessionKeys
// Store for each reporter hyperty the dataObject
var i=void 0;e.body.identity&&e.body.identity.userProfile.userURL&&(i=e.body.identity.userProfile.userURL,t._parent._dataObjectsStorage.update(!0,t._url,"subscriberUsers",i)),e.body.hasOwnProperty("mutual")&&
//          _this._parent._identityModule.updateIsToEncryptForDataObjectSessionKey(_this._url, msg.body.mutual).then(()=>{
t._parent._dataObjectsStorage.update(!0,t._url,"mutual",e.body.mutual),t._parent._dataObjectsStorage.update(!0,t._url,"subscriptions",r),n.body.owner=t._owner,
//FLOW-OUT: subscription response sent (forward from internal Hyperty)
t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:n.body})})}},{key:"_onRemoteUnSubscribe",value:function(e){var t=this,r=e.body.source,n=t._subscriptions[r];if(n){n._releaseListeners(),delete t._subscriptions[r];var i={type:"forward",from:t._url,to:t._owner,body:{type:e.type,from:r,to:t._url,identity:e.body.identity}};t._bus.postMessage(i)}}},{key:"isToSaveData",set:function(e){this._isToSaveData=e}}]),ReporterObject}();t.default=m,e.exports=t.default},/* 504 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),i=_interopRequireDefault(n),o=r(12),a=_interopRequireDefault(o),s=r(1),u=_interopRequireDefault(s),c=r(2),f=_interopRequireDefault(c),l=r(11),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=r(15),y=r(206),h=_interopRequireDefault(y),v=d.getLogger("ObserverObject"),g=function(){function ObserverObject(e,t,r){var n=this;(0,u.default)(this,ObserverObject);var i=this;i._parent=e,i._url=t,i._childrens=r,i._bus=e._bus,i._subscriptions={},i._storageSubscriptions={},i._childrenListeners=[],this._isToSaveData=!1;var o=i._url+"/changes";i._changeListener=i._bus.addListener(o,function(e){v.log("[SyncherManager.ObserverObject ] SyncherManager-"+o+"-RCV: ",e),
//TODO: what todo here? Save changes?
n._isToSaveData&&e.body.attribute&&(v.log("[SyncherManager.ObserverObject ] SyncherManager - save data: ",e),i._parent._dataObjectsStorage.update(!1,i._url,"version",e.body.version),i._parent._dataObjectsStorage.update(!1,i._url,"lastModified",e.body.lastModified),i._parent._dataObjectsStorage.saveData(!1,i._url,e.body.attribute,e.body.value))})}return(0,f.default)(ObserverObject,[{key:"_newSubscription",value:function(e){var t=this,r=t._subscriptions[e];v.log("[Observer Object - new subscription] - ",t._subscriptions,e,t._subscriptions.hasOwnProperty(e)),r||(t._subscriptions[e]=new h.default(t._bus,e,t._url,t._childrens,!1))}},{key:"addSubscription",value:function(e){this._newSubscription(e)}},{key:"addChildrens",value:function(e){var t=this,r=this;return new a.default(function(n){if(0===e.length)return n();var o=r._url+"/children/";v.log("[SyncherManager.ObserverObject - addChildrens] - childrens: ",e,o),e.forEach(function(e){var n=r._bus.addListener(o+e,function(e){if(
//TODO: what todo here? Save childrens?
v.log("[SyncherManager.ObserverObject received]",e),"create"===e.type&&e.to.includes("children")&&t._isToSaveData){var o=(0,p.splitObjectURL)(e.to),a=o.url;
//remove false when mutualAuthentication is enabled
"string"!=typeof e.body.value?(v.log("[SyncherManager.ObserverObject] encrypting received data ",e.body.value),r._parent._identityModule.encryptDataObject(e.body.value,a).then(function(t){v.log("[SyncherManager.ObserverObject] encrypted data ",t),r._storeChildObject(e,(0,i.default)(t))}).catch(function(t){v.warn("[SyncherManager.ObserverObject._encryptChild] failed, storing unencrypted ",t),r._storeChildObject(e,e.body.value)})):r._storeChildObject(e,e.body.value)}v.log("[SyncherManager.ObserverObject children Listeners]",r._childrenListeners,n),-1===r._childrenListeners.indexOf(n)&&r._childrenListeners.push(n)})})})}},{key:"_storeChildObject",value:function(e,t){var r=this,n=(0,p.splitObjectURL)(e.to),i=n.url,o=n.resource,a={identity:e.body.identity,value:t};
// this identity data is not needed to be stored
delete a.identity.assertion,delete a.identity.expires;var s=e.body.resource,u=o;s&&(u+="."+s),v.log("[SyncherManager.ObserverObject._storeChildObject] : ",i,u,a),r._parent._dataObjectsStorage.saveChildrens(!1,i,u,a)}},{key:"removeSubscription",value:function(e){var t=this,r=e.from,n=(0,p.divideURL)(r).domain,i=t._url+"/subscription",o=t._subscriptions[r];o&&(
//FLOW-OUT: message sent to remote ReporterObject -> _onRemoteUnSubscribe
t._bus.postMessage({type:"unsubscribe",from:t._parent._url,to:i,body:{source:r,identity:e.body.identity}}),
//TODO: should I wait for response before unsubscribe on msg-node
//FLOW-OUT: message sent to msg-node SubscriptionManager component
t._bus.postMessage({type:"unsubscribe",from:t._parent._url,to:"domain://msg-node."+n+"/sm",body:{resource:t._url,childrenResources:t._childrens}}),o._releaseListeners(),delete t._subscriptions[r])}},{key:"isToSaveData",set:function(e){this._isToSaveData=e}}]),ObserverObject}();t.default=g,e.exports=t.default},/* 505 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(205),i=_interopRequireDefault(n),o=r(12),a=_interopRequireDefault(o),s=r(1),u=_interopRequireDefault(s),c=r(2),f=_interopRequireDefault(c),l=r(11),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=r(15),y=r(506),h=_interopRequireDefault(y),v=d.getLogger("SubscriptionManager"),g=function(){function SubscriptionManager(e,t,r){if((0,u.default)(this,SubscriptionManager),!e)throw new Error("[SubscriptionManager] - needs the runtimeURL parameter");if(!t)throw new Error("[SubscriptionManager] - needs the MessageBus instance");var n=this;n._bus=t,n._storage=r,n._subscriptions={},n._subscriptionsStorage={},
//TODO: these should be saved in persistence engine?
n.runtimeURL=e,n._url=e+"/subscriptions",
//TODO: this should not be hardcoded!
n._domain=(0,p.divideURL)(e).domain,t.addListener(n._url,function(e){switch(v.info("[SubscriptionManager] RCV: ",e),e.type){case"subscribe":n._onSubscribe(e);break;case"unsubscribe":n._onUnSubscribe(e);break;case"read":n._onRead(e)}})}return(0,f.default)(SubscriptionManager,[{key:"init",value:function(){var e=this;return new a.default(function(t){e._storage.get("subscriptions").then(function(r){v.log("[SubscriptionManager.init] resume subscriptions: ",r),r&&(e._subscriptionsStorage=r,(0,i.default)(r).forEach(function(t){e._createSubscription(t.domain,t.resources,t.subscriber,t.identity)})),t()})})}},{key:"_onSubscribe",
//message received to set a routing path
value:function(e){var t=this,r=e.body.resources,n=e.from,i=(0,p.divideURL)(r[0]).domain,o=e.body.identity;t._createSubscription(i,r,n,o).then(function(a){
//forward to hyperty:
a.id=e.id,a.from=t._url,a.to=n,a.body=e.body,a.body.code=200,v.log("[SubscriptionManager] - craeteSubscription: ",e,a,n),t._bus.postMessage(a),t._subscriptionsStorage[n]?r.forEach(function(e){t._subscriptionsStorage[n].resources.includes(e)||t._subscriptionsStorage[n].resources.push(e)}):t._subscriptionsStorage[n]={domain:i,resources:r,subscriber:n,identity:o},t._storage.set("subscriptions",1,t._subscriptionsStorage)})}},{key:"_createSubscription",value:function(e,t,r,n){var i=this;return new a.default(function(o){
//FLOW-OUT: subscribe message to the msg-node, registering listeners on the broker
var a={type:"subscribe",from:i._url,to:"domain://msg-node."+e+"/sm",body:{identity:n,resources:t,source:r}};
//subscribe in msg-node
i._bus.postMessage(a,function(e){v.log("[SubscriptionManager] node-subscribe-response: ",e);
//if (reply.body.code === 200) {//TODO: uncomment when  MN replies with correct response body code
//TODO: support multiple routes for multiple resources
var n=i._subscriptions[r];v.log("[SubscriptionManager] - ",i._subscriptions,t,i._subscriptions.hasOwnProperty(r)),n||(i._subscriptions[r]={}),t.forEach(function(e){i._subscriptions[r][e]=new h.default(i._bus,r,e)}),o(e)})})}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.from,n=e.body.resource;if(t._subscriptions[r]&&t._subscriptions[r][n]){var i=(0,p.divideURL)(n).domain,o=t._subscriptions[r][n];if(
//FLOW-OUT: message sent to msg-node SubscriptionManager component
t._bus.postMessage({type:"unsubscribe",from:t._url,to:"domain://msg-node."+i+"/sm",body:{resources:[n],source:r}}),o._releaseListeners(),delete t._subscriptions[r][n],t._subscriptionsStorage[r]){var a=t._subscriptionsStorage[r].resources.indexOf(n);-1!=a&&t._subscriptionsStorage[r].resources.splice(a,1),t._storage.set("subscriptions",1,t._subscriptionsStorage)}}t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200}})}},{key:"_onRead",value:function(e){var t=this,r=e.body.resource,n=void 0;v.log("[SubscriptionManager] - request to read Subscriptions: ",e),t._storage.get("subscriptions").then(function(i){if(i&&i[r]){var o=i[r].resources;n={id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,value:o}}}else n={id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,description:"Not Found"}};t._bus.postMessage(n)})}},{key:"url",get:function(){return this._url}}]),SubscriptionManager}();t.default=g,e.exports=t.default},/* 506 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=r(11),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(s),c=u.getLogger("Subscription"),f=function(){function Subscription(e,t,r){(0,i.default)(this,Subscription);var n=this;n._subscriber=t,n.resource=r,c.log("[SubscriptionManager.Subscription] new: ",t,r),
//add forward
n._listener=e.addForward(r,t)}return(0,a.default)(Subscription,[{key:"_releaseListeners",value:function(){this._listener.remove()}}]),Subscription}();t.default=f,e.exports=t.default},/* 507 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(45),i=_interopRequireDefault(n),o=r(12),a=_interopRequireDefault(o),s=r(60),u=_interopRequireDefault(s),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(68),y=_interopRequireDefault(p),h=r(69),v=_interopRequireDefault(h),g=r(11),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(g),m=r(202),_=_interopRequireDefault(m),R=r(203),w=_interopRequireDefault(R),S=r(15),O=r(204),P=_interopRequireDefault(O),k=r(508),M=_interopRequireDefault(k),L=b.getLogger("PEP"),x=function(e){function RuntimeCoreCtx(e,t,r,n,i){(0,f.default)(this,RuntimeCoreCtx);var o=(0,y.default)(this,(RuntimeCoreCtx.__proto__||(0,u.default)(RuntimeCoreCtx)).call(this));return o._runtimeURL=e,o._pepURL=o._runtimeURL+"/pep",o._guiURL=o._runtimeURL+"/policy-gui",o.idModule=t,o.runtimeRegistry=r,o.activeUserPolicy=void 0,o.serviceProviderPolicy={},o.userPolicies={},o.storageManager=n,o.runtimeCapabilities=i,o}return(0,v.default)(RuntimeCoreCtx,e),(0,d.default)(RuntimeCoreCtx,[{key:"loadConfigurations",value:function(){var e=this;return new a.default(function(t,r){e.storageManager.get("rethink:activePolicy").then(function(t){return e.activeUserPolicy=t,e.storageManager.get("rethink:groups")}).then(function(t){var r=t;return e.groups=void 0===r?{}:r,e.storageManager.get("rethink:spPolicies")}).then(function(r){var n=r;e.serviceProviderPolicy=void 0===n?{}:n,e._loadUserPolicies().then(function(){t()})})})}},{key:"prepareForEvaluation",value:function(e,t){var r=this;return new a.default(function(n,i){var o=r;t?o._isToCypherModule(e)?o.idModule.decryptMessage(e).then(function(e){/*if (message.type === 'update') {
                _this._isValidUpdate(message).then(message => {*/
n(e)},function(e){i(e)}):n(e):
// log.log('[Policy.RuntimeCoreCtx prepareForEvaluation]', message);
o._isToSetID(e)?o._getIdentity(e).then(function(t){e.body.identity=t,n(e)},function(e){i(e)}):n(e)})}},{key:"getPolicies",value:function(e,t){var r={};return void 0!==this.activeUserPolicy&&(r.userPolicy=this.userPolicies[this.activeUserPolicy]),r.serviceProviderPolicy=this.getServiceProviderPolicy(e,t),r}},{key:"_isValidUpdate",value:function(e){var t=this;return new a.default(function(r,n){e.from.split("://").length>1?t.idModule._getHypertyFromDataObject(e.from).then(function(t){t===e.body.source?r(e):n("The source of the message is not valid.")},function(e){n(e)}):r(e)})}},{key:"prepareToForward",value:function(e,t,r){var n=this,i=this;return new a.default(function(r,o){
// log.log('[Policy.RuntimeCoreCtx.prepareToForward]', message);
// comment this to enable mutual authentication
//return resolve(message);
// TODO remove this validation. When the Nodejs auth was completed this should work like browser;
n.runtimeCapabilities.isAvailable("node").then(function(n){
// log.log('[RuntimeCoreCtx - isAvailable - node] - ', result);
if(n||e.body&&e.body.hasOwnProperty("mutual")&&!e.body.mutual)return r(e);if(t){"subscribe"===e.type&i.isFromRemoteSM(e.from)?
// TODO: should verify why the mutualAuthentication is not working
// TODO: this should uncommented
i.doMutualAuthentication(e).then(function(){r(e)},function(e){o(e)}):r(e)}else
// TODO: should verify why the mutualAuthentication is not working
// TODO: this should uncommented
i._isToCypherModule(e)?i.idModule.encryptMessage(e).then(function(e){r(e)},function(e){o(e)}):r(e)})})}},{key:"doMutualAuthentication",value:function(e){var t=this;return new a.default(function(r,n){var i=e.to.split("/");if(-1!==i.indexOf("subscription")&t.isFromRemoteSM(e.from)){i.pop();var o=i[0]+"//"+i[2]+"/"+i[3];t.idModule.doMutualAuthentication(o,e.body.subscriber).then(function(){t.runtimeRegistry.registerSubscriber(o,e.body.subscriber),r()},function(e){n(e)})}})}},{key:"getMyEmails",value:function(){var e=this.idModule.getIdentities(),t=[];for(var r in e)t.push((0,S.getUserEmailFromURL)(e[r].identity));return t}},{key:"getMyHyperties",value:function(){var e=this.runtimeRegistry.hypertiesList,t=[];for(var r in e){var n=e[r].objectName;-1===t.indexOf(n)&&t.push(n)}return t}},{key:"getServiceProviderPolicy",value:function(e,t){var r=void 0;if(t){var n=this.runtimeRegistry.getHypertyName(e.to);r=this.serviceProviderPolicy[n]}else{var i=this.runtimeRegistry.getHypertyName(e.from);r=this.serviceProviderPolicy[i]}return r}},{key:"isFromRemoteSM",value:function(e){return"runtime"===e.split("://")[0]&&e!==this.runtimeRegistry.runtimeURL+"/sm"}},{key:"isLocal",value:function(e){return this.runtimeRegistry.isLocal(e)}},{key:"isInterworkingProtoStub",value:function(e){return this.runtimeRegistry.isInterworkingProtoStub(e)}},{key:"_isToSetID",value:function(e){var t=["domain-idp","runtime","domain"],r=e.from.split("://"),n=r[0],i=(this.runtimeRegistry.isLocal(e.to),-1===t.indexOf(n)),o=e.from;
// Signalling Messages between P2P Stubs don't have Identities. FFS
// Signalling Messages between P2P Stubs don't have Identities. FFS
return e.body&&e.body.hasOwnProperty("source")&&(o=e.body.source),!o.includes("/p2prequester/")&&!o.includes("/p2phandler/")&&i}},{key:"getURL",value:function(e){var t=e.split("/");return t[0]+"//"+t[2]+"/"+t[3]}},{key:"_getIdentity",value:function(e){var t=e.from;return void 0!==e.body.source&&(t=e.body.source),"forward"===e.type&&(t=e.body.from),this.idModule.getToken(t,e.to)}},{key:"_isToCypherModule",value:function(e){L.log("[Policy.RuntimeCoreCtx.istoChyperModule]",e);var t="create"===e.type,r="hyperty"===(0,S.divideURL)(e.from).type,n="hyperty"===(0,S.divideURL)(e.to).type,i=(0,S.isDataObjectURL)(e.to),o=!e.body.hasOwnProperty("mutual")||e.body.mutual;return t&&r&&n||t&&r&&i&&o||"handshake"===e.type||"update"===e.type&&o}},{key:"_loadUserPolicies",value:function(){var e=this,t=this;return new a.default(function(r,n){t.storageManager.get("rethink:userPolicies").then(function(t){var n=t;if(void 0!==n)for(var i in n)e.pep.addPolicy("USER",i,n[i]);r()})})}},{key:"_getLastComponentOfURL",value:function(e){var t=e.split("/");return t[t.length-1]}},{key:"_getPoliciesJSON",value:function(e){for(var t in e){var r=e[t].combiningAlgorithm;r instanceof w.default?e[t].combiningAlgorithm="blockOverrides":r instanceof _.default?e[t].combiningAlgorithm="allowOverrides":r instanceof P.default?e[t].combiningAlgorithm="firstApplicable":e[t].combiningAlgorithm=void 0}return e}},{key:"saveActivePolicy",value:function(){var e=this,t=this;return new a.default(function(r,n){t.storageManager.set("rethink:activePolicy",0,e.activeUserPolicy).then(function(){r()})})}},{key:"saveGroups",value:function(){var e=this,t=this;return new a.default(function(r,n){t.storageManager.set("rethink:groups",0,e.groups).then(function(){r()})})}},{key:"savePolicies",value:function(e,t,r){var n=void 0;switch(e){case"USER":n=(0,i.default)(this.userPolicies),n=this._getPoliciesJSON(JSON.parse(n)),this.storageManager.set("rethink:userPolicies",0,n);break;case"SERVICE_PROVIDER":void 0!==t&void 0!==r&&(this.serviceProviderPolicy[r]=t),n=(0,i.default)(this.serviceProviderPolicy),n=this._getPoliciesJSON(JSON.parse(n)),this.storageManager.set("rethink:spPolicies",0,n);break;default:throw Error("Unknown policy source: "+e)}}},{key:"getGroupsNames",value:function(){var e=this.groups,t=[];if(void 0!==e)for(var r in e)t.push(r);return t}},{key:"getGroup",value:function(e,t){var r=[];if("preauthorised"===e){var n=t.split("/");n.pop(),n=n[0]+"//"+n[2],r=this.runtimeRegistry.getPreAuthSubscribers(n)}else void 0!==this.groups[e]&&(r=this.groups[e]);return r}},{key:"createGroup",value:function(e){this.groups[e]=[],this.saveGroups()}},{key:"deleteGroup",value:function(e){delete this.groups[e],this.saveGroups()}},{key:"addToGroup",value:function(e,t){var r=this.groups;if(void 0===r[e])throw Error('Group "'+e+'" does not exist!');-1===r[e].indexOf(t)&&(r[e].push(t),this.saveGroups())}},{key:"removeFromGroup",value:function(e,t){var r=this.groups[e];r.splice(r.indexOf(t),1),this.saveGroups()}},{key:"pepURL",get:function(){return this._pepURL}},{key:"guiURL",get:function(){return this._guiURL}},{key:"runtimeURL",get:function(){return this._runtimeURL}},{key:"messageBus",get:function(){return this._messageBus},set:function(e){this._messageBus=e}},{key:"subscription",get:function(){return this._subscription},set:function(e){this._subscription=e.message.body.subscriber}}]),RuntimeCoreCtx}(M.default);t.default=x,e.exports=t.default},/* 508 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),a=_interopRequireDefault(o),s=r(15),u=function(){function ReThinkCtx(){(0,i.default)(this,ReThinkCtx),this.defaultBehaviour=!0,this.groups={}}return(0,a.default)(ReThinkCtx,[{key:"scheme",get:function(){return this._scheme},set:function(e){var t=e.message.from;(0,s.isDataObjectURL)(t)?this._scheme=(0,s.divideURL)(t).type:this._scheme=void 0}},{key:"date",get:function(){return this._date},set:function(e){var t=new Date,r=String(t.getDate());1===r.length&&(r="0"+r);var n=String(t.getMonth()+1);1===n.length&&(n="0"+n),this._date=r+"/"+n+"/"+t.getFullYear()}},{key:"domain",get:function(){return this._domain},set:function(e){void 0!==e.message.body.identity&&(this._domain=(0,s.divideEmail)(e.message.body.identity.userProfile.username).domain)}},{key:"type",get:function(){return this._type},set:function(e){var t=e.message;void 0!==t.body.value&&(this._type=t.body.value.resourceType)}},{key:"source",get:function(){return this._source},set:function(e){void 0!==e.message.body.identity&&(this._source=e.message.body.identity.userProfile.username)}},{key:"time",get:function(){return this._time},set:function(e){e=new Date;var t=String(e.getMinutes());1===t.length&&(t="0"+t),this._time=parseInt(String(e.getHours())+t)}},{key:"weekday",get:function(){return this._weekday},set:function(e){this._weekday=String((new Date).getDay())}}]),ReThinkCtx}();t.default=u,e.exports=t.default}])});