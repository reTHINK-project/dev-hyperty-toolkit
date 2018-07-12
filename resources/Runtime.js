// version: 0.12.0
// date: Tue Jul 10 2018 11:14:30 GMT+0100 (Western European Summer Time)
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


!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Runtime",[],t):"object"==typeof exports?exports.Runtime=t():e.Runtime=t()}("undefined"!=typeof self?self:this,function(){/******/
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
return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=213)}([/* 0 */
/***/
function(e,t,r){var n=r(4),i=r(27),o=r(18),s=r(19),a=r(28),u=function(e,t,r){var c,f,l,d,p=e&u.F,y=e&u.G,h=e&u.S,v=e&u.P,g=e&u.B,b=y?n:h?n[t]||(n[t]={}):(n[t]||{}).prototype,m=y?i:i[t]||(i[t]={}),_=m.prototype||(m.prototype={});y&&(r=t);for(c in r)
// contains in native
f=!p&&b&&void 0!==b[c],
// export native or passed
l=(f?b:r)[c],
// bind timers to global for call from export context
d=g&&f?a(l,n):v&&"function"==typeof l?a(Function.call,l):l,
// extend global
b&&s(b,c,l,e&u.U),
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
function(e,t,r){"use strict";t.__esModule=!0;var n=r(200),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i.default)(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}()},/* 3 */
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
function(e,t,r){var n,i;/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
!function(o,s){"use strict";n=s,void 0!==(i="function"==typeof n?n.call(t,r,t,e):n)&&(e.exports=i)}(0,function(){"use strict";
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
try{return void(window.localStorage[a]=n)}catch(e){}
// Use session cookie as fallback
try{window.document.cookie=encodeURIComponent(a)+"="+n+";"}catch(e){}}}function getPersistedLevel(){var e;if(typeof window!==t){try{e=window.localStorage[a]}catch(e){}
// Fallback to cookies if local storage gives us nothing
if(typeof e===t)try{var r=window.document.cookie,n=r.indexOf(encodeURIComponent(a)+"=");-1!==n&&(e=/^([^;]+)/.exec(r.slice(n))[1])}catch(e){}
// If the stored level is not valid, treat it as if nothing was stored.
return void 0===s.levels[e]&&(e=void 0),e}}var o,s=this,a="loglevel";e&&(a+=":"+e),/*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */
s.name=e,s.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},s.methodFactory=i||defaultMethodFactory,s.getLevel=function(){return o},s.setLevel=function(r,n){if("string"==typeof r&&void 0!==s.levels[r.toUpperCase()]&&(r=s.levels[r.toUpperCase()]),!("number"==typeof r&&r>=0&&r<=s.levels.SILENT))throw"log.setLevel() called with invalid level: "+r;if(o=r,!1!==n&&// defaults to true
persistLevelIfPossible(r),replaceLoggingMethods.call(s,r,e),typeof console===t&&r<s.levels.SILENT)return"No console available for logging"},s.setDefaultLevel=function(e){getPersistedLevel()||s.setLevel(e,!1)},s.enableAll=function(e){s.setLevel(s.levels.TRACE,e)},s.disableAll=function(e){s.setLevel(s.levels.SILENT,e)};
// Initialize with the right level
var u=getPersistedLevel();null==u&&(u=null==n?"WARN":n),s.setLevel(u,!1)}
// Slightly dubious tricks to cut down minimized file size
var e=function(){},t="undefined",r=["trace","debug","info","warn","error"],n=new Logger,i={};n.getLogger=function(e){if("string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=i[e];return t||(t=i[e]=new Logger(e,n.getLevel(),n.methodFactory)),t};
// Grab the current global log variable in case of overwrite
var o=typeof window!==t?window.log:void 0;return n.noConflict=function(){return typeof window!==t&&window.log===n&&(window.log=o),n},n.getLoggers=function(){return i},n})},/* 8 */
/***/
function(e,t,r){var n=r(80)("wks"),i=r(49),o=r(4).Symbol,s="function"==typeof o;(e.exports=function(e){return n[e]||(n[e]=s&&o[e]||(s?o:i)("Symbol."+e))}).store=n},/* 9 */
/***/
function(e,t,r){e.exports={default:r(417),__esModule:!0}},/* 10 */
/***/
function(e,t){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},/* 11 */
/***/
function(e,t,r){
// Thank's IE8 for his funny defineProperty
e.exports=!r(5)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 12 */
/***/
function(e,t,r){var n=r(3),i=r(148),o=r(31),s=Object.defineProperty;t.f=r(11)?Object.defineProperty:function(e,t,r){if(n(e),t=o(t,!0),n(r),i)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},/* 13 */
/***/
function(e,t,r){
// 7.1.15 ToLength
var n=r(33),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},/* 14 */
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
function divideURL(e){function recurse(e){var t=/([a-zA-Z-]*)(:\/\/(?:\.)?|:)([-a-zA-Z0-9@:%._+~#=]{2,256})([-a-zA-Z0-9@:%._+~#=\/]*)/gi;return e.replace(t,"$1,$3,$4").split(",")}var t=recurse(e);
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
function emptyObject(e){return!((0,s.default)(e).length>0)}function secondsSinceEpoch(){return Math.floor(Date.now()/1e3)}/**
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
function buildURL(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=e[t],a=void 0;if(!s.hasOwnProperty(r))throw Error("The configuration "+(0,i.default)(s,"",2)+" don't have the "+r+" resource you are looking for");var u=s[r];
// console.log(url);
return n?(a=u.prefix+e.domain+u.suffix+n,u.hasOwnProperty("fallback")&&o&&(a=u.fallback.indexOf("%domain%")?u.fallback.replace(/(%domain%)/g,e.domain)+n:u.fallback+n)):a=u.prefix+e.domain+u.suffix,a}/**
 * Generate a Global Unique ID
 *
 * @returns String;
 */
function generateGUID(){function s4(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return s4()+s4()+"-"+s4()+"-"+s4()+"-"+s4()+"-"+s4()+s4()+s4()}function getUserIdentityDomain(e){var t=divideURL(e),r=t.domain.split("."),n=r.length;return 1==n?r[n-1]:r[n-2]+"."+r[n-1]}/**
 * Check if URL is from a backend service
 * @param  {string} url     URL to be processed
 * @return {boolean}
 */
function isBackendServiceURL(e){var t=divideURL(e),r=t.domain.split("."),n=["domain","global","domain-idp"],i=["registry","msg-node"],o=void 0;return r.length>1&&(o=r.filter(function(e){return-1!==i.indexOf(e)})[0]),!(!o||-1===i.indexOf(o))||!!t.type&&-1!==n.indexOf(t.type)}function divideEmail(e){var t=e.indexOf("@");return{username:e.substring(0,t),domain:e.substring(t+1,e.length)}}function assign(e,t,r){e||(e={}),"string"==typeof t&&(t=parseAttributes(t));for(var n=t.length-1,i=0;i<n;++i){var o=t[i];o in e||(e[o]={}),e=e[o]}e[t[n]]=r}function splitObjectURL(e){var t=e.split("/"),r=t[0]+"//"+t[2]+"/"+t[3],n=t[5],i={url:r,resource:n};return i}function checkAttribute(e){var t=/((([a-zA-Z]+):\/\/([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})\/[a-zA-Z0-9.]+@[a-zA-Z0-9]+(-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,10}?\.[a-zA-Z]{2,10})(.+(?=.identity))?/gm,r=[],n=[];if(null==e.match(t))n=e.split(".");else{for(var i=void 0;null!==(i=t.exec(e));)
// This is necessary to avoid infinite loops with zero-width matches
i.index===t.lastIndex&&t.lastIndex++,
// The result can be accessed through the `m`-variable.
i.forEach(function(e,t){0===t&&r.push(e)});var o=void 0;r.forEach(function(t){o=e.replace(t,"*-*"),n=o.split(".").map(function(e){return"*-*"===e?t:e})})}return n}function parseAttributes(e){var t=/([0-9a-zA-Z][-\w]*):\/\//g;if(e.includes("://")){var r=e.split(t)[0],n=r.split("."),i=e.replace(r,"");if(e.includes("identity")){var o=i.split("identity.");i=o[0].slice(".",-1),o=o[1].split("."),n.push(i,"identity"),n=n.concat(o)}else n.push(i);return n.filter(Boolean)}return e.split(".")}function isEmpty(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return(0,i.default)(e)===(0,i.default)({})}function chatkeysToStringCloner(e){var t={},r=(0,s.default)(e);if(r)try{for(var n=0;n<r.length;n++){var i=r[n];t[i]={},t[i].sessionKey=e[i].sessionKey.toString(),t[i].isToEncrypt=e[i].isToEncrypt}}catch(e){}return t}function chatkeysToArrayCloner(e){var t={},r=(0,s.default)(e);if(r)try{for(var n=0;n<r.length;n++){var i=r[n];t[i]={};var o=JSON.parse("["+e[i].sessionKey+"]");t[i].sessionKey=new Uint8Array(o),t[i].isToEncrypt=e[i].isToEncrypt}}catch(e){}return t}function parseMessageURL(e){var t=e.split("/");return t.length<=6?t[0]+"//"+t[2]+"/"+t[3]:t[0]+"//"+t[2]+"/"+t[3]+"/"+t[4]}function availableSpace(e,t){var r=(e/t).toFixed(2);return{quota:t,usage:e,percent:Number(r)}}/**
* Encodes a JS object to base 64 encode
* @param   {Object}    value    byteArray value
* @return  {string}   encoded value
*/
function encode(e){try{var t=stringify(e);return btoa(t)}catch(e){throw e}}/**
  * Decode a base64 string to object
  * @param   {string_b64}    value    value encoded in base 64
  * @return  {Object} decodedValue
  */
function decode(e){try{return JSON.parse(atob(e))}catch(e){throw e}}/**
* Decode a base64 string to Uint8Array
* @param   {string_b64}    value    byteArray value
* @return  {Uint8Array}   encoded value
*/
function decodeToUint8Array(e){try{return new Uint8Array(decode(e))}catch(e){throw e}}/**
* Converts a JS object to string
* NOTE: Special conversion for Uint8Arrays
* @param   {Object}    value    byteArray value
* @return  {Uint8Array}   encoded value
*/
function stringify(e){try{return e.constructor===Uint8Array?"["+e.toString()+"]":(0,i.default)(e)}catch(e){throw e}}/**
* Converts a stringified object to object
* @param   {String}    value    byteArray value
* @return  {Object}   encoded value
*/
function parse(e){try{return JSON.parse(e)}catch(e){throw e}}/**
* Converts a stringified object to object
* @param   {String}    value    byteArray value
* @return  {Uint8Array}   encoded value
*/
function parseToUint8Array(e){try{return new Uint8Array(parse(e))}catch(e){throw e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(47),i=_interopRequireDefault(n),o=r(37),s=_interopRequireDefault(o);t.divideURL=divideURL,t.emptyObject=emptyObject,t.secondsSinceEpoch=secondsSinceEpoch,t.deepClone=deepClone,t.removePathFromURL=removePathFromURL,t.getUserURLFromEmail=getUserURLFromEmail,t.getUserEmailFromURL=getUserEmailFromURL,t.convertToUserURL=convertToUserURL,t.isDataObjectURL=isDataObjectURL,t.isLegacy=isLegacy,t.isURL=isURL,t.isUserURL=isUserURL,t.isHypertyURL=isHypertyURL,t.getConfigurationResources=getConfigurationResources,t.buildURL=buildURL,t.generateGUID=generateGUID,t.getUserIdentityDomain=getUserIdentityDomain,t.isBackendServiceURL=isBackendServiceURL,t.divideEmail=divideEmail,t.assign=assign,t.splitObjectURL=splitObjectURL,t.checkAttribute=checkAttribute,t.parseAttributes=parseAttributes,t.isEmpty=isEmpty,t.chatkeysToStringCloner=chatkeysToStringCloner,t.chatkeysToArrayCloner=chatkeysToArrayCloner,t.parseMessageURL=parseMessageURL,t.availableSpace=availableSpace,t.encode=encode,t.decode=decode,t.decodeToUint8Array=decodeToUint8Array,t.stringify=stringify,t.parse=parse,t.parseToUint8Array=parseToUint8Array},/* 15 */
/***/
function(e,t,r){
// 7.1.13 ToObject(argument)
var n=r(32);e.exports=function(e){return Object(n(e))}},/* 16 */
/***/
function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},/* 17 */
/***/
function(e,t){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},/* 18 */
/***/
function(e,t,r){var n=r(12),i=r(48);e.exports=r(11)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},/* 19 */
/***/
function(e,t,r){var n=r(4),i=r(18),o=r(23),s=r(49)("src"),a=Function.toString,u=(""+a).split("toString");r(27).inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,r,a){var c="function"==typeof r;c&&(o(r,"name")||i(r,"name",t)),e[t]!==r&&(c&&(o(r,s)||i(r,s,e[t]?""+e[t]:u.join(String(t)))),e===n?e[t]=r:a?e[t]?e[t]=r:i(e,t,r):(delete e[t],i(e,t,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||a.call(this)})},/* 20 */
/***/
function(e,t,r){var n=r(0),i=r(5),o=r(32),s=/"/g,a=function(e,t,r,n){var i=String(o(e)),a="<"+t;return""!==r&&(a+=" "+r+'="'+String(n).replace(s,"&quot;")+'"'),a+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(a),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},/* 21 */
/***/
function(e,t,r){var n=r(17),i=r(10),o=r(65),s=r(58),a=r(59),u=function(e,t,r){var c,f,l,d=e&u.F,p=e&u.G,y=e&u.S,h=e&u.P,v=e&u.B,g=e&u.W,b=p?i:i[t]||(i[t]={}),m=b.prototype,_=p?n:y?n[t]:(n[t]||{}).prototype;p&&(r=t);for(c in r)
// contains in native
(f=!d&&_&&void 0!==_[c])&&a(b,c)||(
// export native or passed
l=f?_[c]:r[c],
// prevent global pollution for namespaces
b[c]=p&&"function"!=typeof _[c]?r[c]:v&&f?o(l,n):g&&_[c]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):h&&"function"==typeof l?o(Function.call,l):l,
// export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
h&&((b.virtual||(b.virtual={}))[c]=l,
// export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
e&u.R&&m&&!m[c]&&s(m,c,l)))};
// type bitmap
u.F=1,// forced
u.G=2,// global
u.S=4,// static
u.P=8,// proto
u.B=16,// bind
u.W=32,// wrap
u.U=64,// safe
u.R=128,// real proto method for `library`
e.exports=u},/* 22 */
/***/
function(e,t,r){var n=r(136)("wks"),i=r(96),o=r(17).Symbol,s="function"==typeof o;(e.exports=function(e){return n[e]||(n[e]=s&&o[e]||(s?o:i)("Symbol."+e))}).store=n},/* 23 */
/***/
function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},/* 24 */
/***/
function(e,t,r){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var n=r(70),i=r(32);e.exports=function(e){return n(i(e))}},/* 25 */
/***/
function(e,t,r){var n=r(71),i=r(48),o=r(24),s=r(31),a=r(23),u=r(148),c=Object.getOwnPropertyDescriptor;t.f=r(11)?c:function(e,t){if(e=o(e),t=s(t,!0),u)try{return c(e,t)}catch(e){}if(a(e,t))return i(!n.f.call(e,t),e[t])}},/* 26 */
/***/
function(e,t,r){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var n=r(23),i=r(15),o=r(104)("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),n(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},/* 27 */
/***/
function(e,t){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},/* 28 */
/***/
function(e,t,r){
// optional / simple context binding
var n=r(16);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},/* 29 */
/***/
function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},/* 30 */
/***/
function(e,t,r){"use strict";var n=r(5);e.exports=function(e,t){return!!e&&n(function(){
// eslint-disable-next-line no-useless-call
t?e.call(null,function(){},1):e.call(null)})}},/* 31 */
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
var n=r(0),i=r(27),o=r(5);e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*o(function(){r(1)}),"Object",s)}},/* 35 */
/***/
function(e,t,r){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var n=r(28),i=r(70),o=r(15),s=r(13),a=r(121);e.exports=function(e,t){var r=1==e,u=2==e,c=3==e,f=4==e,l=6==e,d=5==e||l,p=t||a;return function(t,a,y){for(var h,v,g=o(t),b=i(g),m=n(a,y,3),_=s(b.length),R=0,w=r?p(t,_):u?p(t,0):void 0;_>R;R++)if((d||R in b)&&(h=b[R],v=m(h,R,g),e))if(r)w[R]=v;else if(v)switch(e){case 3:return!0;// some
case 5:return h;// find
case 6:return R;// findIndex
case 2:w.push(h)}else if(f)return!1;return l?-1:c||f?f:w}}},/* 36 */
/***/
function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},/* 37 */
/***/
function(e,t,r){e.exports={default:r(453),__esModule:!0}},/* 38 */
/***/
function(e,t,r){"use strict";if(r(11)){var n=r(43),i=r(4),o=r(5),s=r(0),a=r(91),u=r(127),c=r(28),f=r(55),l=r(48),d=r(18),p=r(57),y=r(33),h=r(13),v=r(174),g=r(51),b=r(31),m=r(23),_=r(72),R=r(6),w=r(15),S=r(118),P=r(52),O=r(26),M=r(53).f,k=r(120),L=r(49),x=r(8),E=r(35),A=r(81),U=r(88),D=r(123),I=r(63),j=r(85),T=r(54),C=r(122),F=r(164),N=r(12),q=r(25),H=N.f,B=q.f,K=i.RangeError,G=i.TypeError,V=i.Uint8Array,W=Array.prototype,Y=u.ArrayBuffer,z=u.DataView,J=E(0),$=E(2),Q=E(3),X=E(4),Z=E(5),ee=E(6),te=A(!0),re=A(!1),ne=D.values,ie=D.keys,oe=D.entries,se=W.lastIndexOf,ae=W.reduce,ue=W.reduceRight,ce=W.join,fe=W.sort,le=W.slice,de=W.toString,pe=W.toLocaleString,ye=x("iterator"),he=x("toStringTag"),ve=L("typed_constructor"),ge=L("def_constructor"),be=a.CONSTR,me=a.TYPED,_e=a.VIEW,Re=E(1,function(e,t){return Me(U(e,e[ge]),t)}),we=o(function(){
// eslint-disable-next-line no-undef
return 1===new V(new Uint16Array([1]).buffer)[0]}),Se=!!V&&!!V.prototype.set&&o(function(){new V(1).set({})}),Pe=function(e,t){var r=y(e);if(r<0||r%t)throw K("Wrong offset!");return r},Oe=function(e){if(R(e)&&me in e)return e;throw G(e+" is not a typed array!")},Me=function(e,t){if(!(R(e)&&ve in e))throw G("It is not a typed array constructor!");return new e(t)},ke=function(e,t){return Le(U(e,e[ge]),t)},Le=function(e,t){for(var r=0,n=t.length,i=Me(e,n);n>r;)i[r]=t[r++];return i},xe=function(e,t,r){H(e,t,{get:function(){return this._d[r]}})},Ee=function(e){var t,r,n,i,o,s,a=w(e),u=arguments.length,f=u>1?arguments[1]:void 0,l=void 0!==f,d=k(a);if(void 0!=d&&!S(d)){for(s=d.call(a),n=[],t=0;!(o=s.next()).done;t++)n.push(o.value);a=n}for(l&&u>2&&(f=c(f,arguments[2],2)),t=0,r=h(a.length),i=Me(this,r);r>t;t++)i[t]=l?f(a[t],t):a[t];return i},Ae=function(){for(var e=0,t=arguments.length,r=Me(this,t);t>e;)r[e]=arguments[e++];return r},Ue=!!V&&o(function(){pe.call(new V(1))}),De=function(){return pe.apply(Ue?le.call(Oe(this)):Oe(this),arguments)},Ie={copyWithin:function(e,t){return F.call(Oe(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return X(Oe(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){// eslint-disable-line no-unused-vars
return C.apply(Oe(this),arguments)},filter:function(e){return ke(this,$(Oe(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return Z(Oe(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return ee(Oe(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){J(Oe(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return re(Oe(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return te(Oe(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){// eslint-disable-line no-unused-vars
return ce.apply(Oe(this),arguments)},lastIndexOf:function(e){// eslint-disable-line no-unused-vars
return se.apply(Oe(this),arguments)},map:function(e){return Re(Oe(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){// eslint-disable-line no-unused-vars
return ae.apply(Oe(this),arguments)},reduceRight:function(e){// eslint-disable-line no-unused-vars
return ue.apply(Oe(this),arguments)},reverse:function(){for(var e,t=this,r=Oe(t).length,n=Math.floor(r/2),i=0;i<n;)e=t[i],t[i++]=t[--r],t[r]=e;return t},some:function(e){return Q(Oe(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return fe.call(Oe(this),e)},subarray:function(e,t){var r=Oe(this),n=r.length,i=g(e,n);return new(U(r,r[ge]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,h((void 0===t?n:g(t,n))-i))}},je=function(e,t){return ke(this,le.call(Oe(this),e,t))},Te=function(e){Oe(this);var t=Pe(arguments[1],1),r=this.length,n=w(e),i=h(n.length),o=0;if(i+t>r)throw K("Wrong length!");for(;o<i;)this[t+o]=n[o++]},Ce={entries:function(){return oe.call(Oe(this))},keys:function(){return ie.call(Oe(this))},values:function(){return ne.call(Oe(this))}},Fe=function(e,t){return R(e)&&e[me]&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},Ne=function(e,t){return Fe(e,t=b(t,!0))?l(2,e[t]):B(e,t)},qe=function(e,t,r){return!(Fe(e,t=b(t,!0))&&R(r)&&m(r,"value"))||m(r,"get")||m(r,"set")||r.configurable||m(r,"writable")&&!r.writable||m(r,"enumerable")&&!r.enumerable?H(e,t,r):(e[t]=r.value,e)};be||(q.f=Ne,N.f=qe),s(s.S+s.F*!be,"Object",{getOwnPropertyDescriptor:Ne,defineProperty:qe}),o(function(){de.call({})})&&(de=pe=function(){return ce.call(this)});var He=p({},Ie);p(He,Ce),d(He,ye,Ce.values),p(He,{slice:je,set:Te,constructor:function(){},toString:de,toLocaleString:De}),xe(He,"buffer","b"),xe(He,"byteOffset","o"),xe(He,"byteLength","l"),xe(He,"length","e"),H(He,he,{get:function(){return this[me]}}),
// eslint-disable-next-line max-statements
e.exports=function(e,t,r,u){u=!!u;var c=e+(u?"Clamped":"")+"Array",l="get"+e,p="set"+e,y=i[c],g=y||{},b=y&&O(y),m=!y||!a.ABV,w={},S=y&&y.prototype,k=function(e,r){var n=e._d;return n.v[l](r*t+n.o,we)},L=function(e,r,n){var i=e._d;u&&(n=(n=Math.round(n))<0?0:n>255?255:255&n),i.v[p](r*t+i.o,n,we)},x=function(e,t){H(e,t,{get:function(){return k(this,t)},set:function(e){return L(this,t,e)},enumerable:!0})};m?(y=r(function(e,r,n,i){f(e,y,c,"_d");var o,s,a,u,l=0,p=0;if(R(r)){if(!(r instanceof Y||"ArrayBuffer"==(u=_(r))||"SharedArrayBuffer"==u))return me in r?Le(y,r):Ee.call(y,r);o=r,p=Pe(n,t);var g=r.byteLength;if(void 0===i){if(g%t)throw K("Wrong length!");if((s=g-p)<0)throw K("Wrong length!")}else if((s=h(i)*t)+p>g)throw K("Wrong length!");a=s/t}else a=v(r),s=a*t,o=new Y(s);for(d(e,"_d",{b:o,o:p,l:s,e:a,v:new z(o)});l<a;)x(e,l++)}),S=y.prototype=P(He),d(S,"constructor",y)):o(function(){y(1)})&&o(function(){new y(-1)})&&j(function(e){new y,// eslint-disable-line no-new
new y(null),// eslint-disable-line no-new
new y(1.5),// eslint-disable-line no-new
new y(e)},!0)||(y=r(function(e,r,n,i){f(e,y,c);var o;
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
// `ws` module bug, temporarily remove validation length for Uint8Array
// https://github.com/websockets/ws/pull/645
return R(r)?r instanceof Y||"ArrayBuffer"==(o=_(r))||"SharedArrayBuffer"==o?void 0!==i?new g(r,Pe(n,t),i):void 0!==n?new g(r,Pe(n,t)):new g(r):me in r?Le(y,r):Ee.call(y,r):new g(v(r))}),J(b!==Function.prototype?M(g).concat(M(b)):M(g),function(e){e in y||d(y,e,g[e])}),y.prototype=S,n||(S.constructor=y));var E=S[ye],A=!!E&&("values"==E.name||void 0==E.name),U=Ce.values;d(y,ve,!0),d(S,me,c),d(S,_e,!0),d(S,ge,y),(u?new y(1)[he]==c:he in S)||H(S,he,{get:function(){return c}}),w[c]=y,s(s.G+s.W+s.F*(y!=g),w),s(s.S,c,{BYTES_PER_ELEMENT:t}),s(s.S+s.F*o(function(){g.of.call(y,1)}),c,{from:Ee,of:Ae}),"BYTES_PER_ELEMENT"in S||d(S,"BYTES_PER_ELEMENT",t),s(s.P,c,Ie),T(c),s(s.P+s.F*Se,c,{set:Te}),s(s.P+s.F*!A,c,Ce),n||S.toString==de||(S.toString=de),s(s.P+s.F*o(function(){new y(1).slice()}),c,{slice:je}),s(s.P+s.F*(o(function(){return[1,2].toLocaleString()!=new y([1,2]).toLocaleString()})||!o(function(){S.toLocaleString.call([1,2])})),c,{toLocaleString:De}),I[c]=A?E:U,n||A||d(S,ye,U)}}else e.exports=function(){}},/* 39 */
/***/
function(e,t,r){var n=r(169),i=r(0),o=r(80)("metadata"),s=o.store||(o.store=new(r(172))),a=function(e,t,r){var i=s.get(e);if(!i){if(!r)return;s.set(e,i=new n)}var o=i.get(t);if(!o){if(!r)return;i.set(t,o=new n)}return o},u=function(e,t,r){var n=a(t,r,!1);return void 0!==n&&n.has(e)},c=function(e,t,r){var n=a(t,r,!1);return void 0===n?void 0:n.get(e)},f=function(e,t,r,n){a(r,n,!0).set(e,t)},l=function(e,t){var r=a(e,t,!1),n=[];return r&&r.forEach(function(e,t){n.push(t)}),n},d=function(e){return void 0===e||"symbol"==typeof e?e:String(e)},p=function(e){i(i.S,"Reflect",e)};e.exports={store:s,map:a,has:u,get:c,set:f,keys:l,key:d,exp:p}},/* 40 */
/***/
function(e,t,r){var n=r(41),i=r(184),o=r(132),s=Object.defineProperty;t.f=r(45)?Object.defineProperty:function(e,t,r){if(n(e),t=o(t,!0),n(r),i)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},/* 41 */
/***/
function(e,t,r){var n=r(36);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},/* 42 */
/***/
function(e,t,r){var n=r(49)("meta"),i=r(6),o=r(23),s=r(12).f,a=0,u=Object.isExtensible||function(){return!0},c=!r(5)(function(){return u(Object.preventExtensions({}))}),f=function(e){s(e,n,{value:{i:"O"+ ++a,// object ID
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
f(e)}return e[n].w},p=function(e){return c&&y.NEED&&u(e)&&!o(e,n)&&f(e),e},y=e.exports={KEY:n,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},/* 43 */
/***/
function(e,t){e.exports=!1},/* 44 */
/***/
function(e,t,r){
// 22.1.3.31 Array.prototype[@@unscopables]
var n=r(8)("unscopables"),i=Array.prototype;void 0==i[n]&&r(18)(i,n,{}),e.exports=function(e){i[n][e]=!0}},/* 45 */
/***/
function(e,t,r){
// Thank's IE8 for his funny defineProperty
e.exports=!r(66)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},/* 46 */
/***/
function(e,t,r){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var n=r(187),i=r(130);e.exports=function(e){return n(i(e))}},/* 47 */
/***/
function(e,t,r){e.exports={default:r(466),__esModule:!0}},/* 48 */
/***/
function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},/* 49 */
/***/
function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},/* 50 */
/***/
function(e,t,r){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var n=r(150),i=r(105);e.exports=Object.keys||function(e){return n(e,i)}},/* 51 */
/***/
function(e,t,r){var n=r(33),i=Math.max,o=Math.min;e.exports=function(e,t){return e=n(e),e<0?i(e+t,0):o(e,t)}},/* 52 */
/***/
function(e,t,r){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var n=r(3),i=r(151),o=r(105),s=r(104)("IE_PROTO"),a=function(){},u=function(){
// Thrash, waste and sodomy: IE GC bug
var e,t=r(102)("iframe"),n=o.length;for(t.style.display="none",r(106).appendChild(t),t.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u.prototype[o[n]];return u()};e.exports=Object.create||function(e,t){var r;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==e?(a.prototype=n(e),r=new a,a.prototype=null,r[s]=e):r=u(),void 0===t?r:i(r,t)}},/* 53 */
/***/
function(e,t,r){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var n=r(150),i=r(105).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},/* 54 */
/***/
function(e,t,r){"use strict";var n=r(4),i=r(12),o=r(11),s=r(8)("species");e.exports=function(e){var t=n[e];o&&t&&!t[s]&&i.f(t,s,{configurable:!0,get:function(){return this}})}},/* 55 */
/***/
function(e,t){e.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},/* 56 */
/***/
function(e,t,r){var n=r(28),i=r(162),o=r(118),s=r(3),a=r(13),u=r(120),c={},f={},t=e.exports=function(e,t,r,l,d){var p,y,h,v,g=d?function(){return e}:u(e),b=n(r,l,t?2:1),m=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");
// fast case for arrays with default iterator
if(o(g)){for(p=a(e.length);p>m;m++)if((v=t?b(s(y=e[m])[0],y[1]):b(e[m]))===c||v===f)return v}else for(h=g.call(e);!(y=h.next()).done;)if((v=i(h,b,y.value,t))===c||v===f)return v};t.BREAK=c,t.RETURN=f},/* 57 */
/***/
function(e,t,r){var n=r(19);e.exports=function(e,t,r){for(var i in t)n(e,i,t[i],r);return e}},/* 58 */
/***/
function(e,t,r){var n=r(40),i=r(74);e.exports=r(45)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},/* 59 */
/***/
function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},/* 60 */
/***/
function(e,t,r){e.exports={default:r(456),__esModule:!0}},/* 61 */
/***/
function(e,t,r){var n=r(12).f,i=r(23),o=r(8)("toStringTag");e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},/* 62 */
/***/
function(e,t,r){var n=r(0),i=r(32),o=r(5),s=r(108),a="["+s+"]",u="​",c=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),l=function(e,t,r){var i={},a=o(function(){return!!s[e]()||u[e]()!=u}),c=i[e]=a?t(d):s[e];r&&(i[r]=c),n(n.P+n.F*a,"String",i)},d=l.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(f,"")),e};e.exports=l},/* 63 */
/***/
function(e,t){e.exports={}},/* 64 */
/***/
function(e,t,r){var n=r(6);e.exports=function(e,t){if(!n(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},/* 65 */
/***/
function(e,t,r){
// optional / simple context binding
var n=r(95);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},/* 66 */
/***/
function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},/* 67 */
/***/
function(e,t,r){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var n=r(186),i=r(137);e.exports=Object.keys||function(e){return n(e,i)}},/* 68 */
/***/
function(e,t,r){"use strict";t.__esModule=!0;var n=r(79),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,i.default)(t))&&"function"!=typeof t?e:t}},/* 69 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(458),i=_interopRequireDefault(n),o=r(203),s=_interopRequireDefault(o),a=r(79),u=_interopRequireDefault(a);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,u.default)(t)));e.prototype=(0,s.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}},/* 70 */
/***/
function(e,t,r){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var n=r(29);
// eslint-disable-next-line no-prototype-builtins
e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},/* 71 */
/***/
function(e,t){t.f={}.propertyIsEnumerable},/* 72 */
/***/
function(e,t,r){
// getting tag from 19.1.3.6 Object.prototype.toString()
var n=r(29),i=r(8)("toStringTag"),o="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),i))?r:o?n(t):"Object"==(a=n(t))&&"function"==typeof t.callee?"Arguments":a}},/* 73 */
/***/
function(e,t){e.exports=!0},/* 74 */
/***/
function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},/* 75 */
/***/
function(e,t){e.exports={}},/* 76 */
/***/
function(e,t){var r={}.toString;e.exports=function(e){return r.call(e).slice(8,-1)}},/* 77 */
/***/
function(e,t,r){
// 7.1.13 ToObject(argument)
var n=r(130);e.exports=function(e){return Object(n(e))}},/* 78 */
/***/
function(e,t){t.f={}.propertyIsEnumerable},/* 79 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(442),i=_interopRequireDefault(n),o=r(444),s=_interopRequireDefault(o),a="function"==typeof s.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};t.default="function"==typeof s.default&&"symbol"===a(i.default)?function(e){return void 0===e?"undefined":a(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":a(e)}},/* 80 */
/***/
function(e,t,r){var n=r(27),i=r(4),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(43)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},/* 81 */
/***/
function(e,t,r){
// false -> Array#indexOf
// true  -> Array#includes
var n=r(24),i=r(13),o=r(51);e.exports=function(e){return function(t,r,s){var a,u=n(t),c=i(u.length),f=o(s,c);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&r!=r){for(;c>f;)
// eslint-disable-next-line no-self-compare
if((a=u[f++])!=a)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},/* 82 */
/***/
function(e,t){t.f=Object.getOwnPropertySymbols},/* 83 */
/***/
function(e,t,r){
// 7.2.2 IsArray(argument)
var n=r(29);e.exports=Array.isArray||function(e){return"Array"==n(e)}},/* 84 */
/***/
function(e,t,r){
// 7.2.8 IsRegExp(argument)
var n=r(6),i=r(29),o=r(8)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},/* 85 */
/***/
function(e,t,r){var n=r(8)("iterator"),i=!1;try{var o=[7][n]();o.return=function(){i=!0},
// eslint-disable-next-line no-throw-literal
Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:r=!0}},o[n]=function(){return s},e(o)}catch(e){}return r}},/* 86 */
/***/
function(e,t,r){"use strict";
// 21.2.5.3 get RegExp.prototype.flags
var n=r(3);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},/* 87 */
/***/
function(e,t,r){"use strict";var n=r(18),i=r(19),o=r(5),s=r(32),a=r(8);e.exports=function(e,t,r){var u=a(e),c=r(s,u,""[e]),f=c[0],l=c[1];o(function(){var t={};return t[u]=function(){return 7},7!=""[e](t)})&&(i(String.prototype,e,f),n(RegExp.prototype,u,2==t?function(e,t){return l.call(e,this,t)}:function(e){return l.call(e,this)}))}},/* 88 */
/***/
function(e,t,r){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var n=r(3),i=r(16),o=r(8)("species");e.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[o])?t:i(r)}},/* 89 */
/***/
function(e,t,r){var n=r(4),i=n.navigator;e.exports=i&&i.userAgent||""},/* 90 */
/***/
function(e,t,r){"use strict";var n=r(4),i=r(0),o=r(19),s=r(57),a=r(42),u=r(56),c=r(55),f=r(6),l=r(5),d=r(85),p=r(61),y=r(109);e.exports=function(e,t,r,h,v,g){var b=n[e],m=b,_=v?"set":"add",R=m&&m.prototype,w={},S=function(e){var t=R[e];o(R,e,"delete"==e?function(e){return!(g&&!f(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!f(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!f(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,r){return t.call(this,0===e?0:e,r),this})};if("function"==typeof m&&(g||R.forEach&&!l(function(){(new m).entries().next()}))){var P=new m,O=P[_](g?{}:-0,1)!=P,M=l(function(){P.has(1)}),k=d(function(e){new m(e)}),L=!g&&l(function(){for(
// V8 ~ Chromium 42- fails only with 5+ elements
var e=new m,t=5;t--;)e[_](t,t);return!e.has(-0)});k||(m=t(function(t,r){c(t,m,e);var n=y(new b,t,m);return void 0!=r&&u(r,v,n[_],n),n}),m.prototype=R,R.constructor=m),(M||L)&&(S("delete"),S("has"),v&&S("get")),(L||O)&&S(_),
// weak collections should not contains .clear method
g&&R.clear&&delete R.clear}else
// create collection constructor
m=h.getConstructor(t,e,v,_),s(m.prototype,r),a.NEED=!0;return p(m,e),w[e]=m,i(i.G+i.W+i.F*(m!=b),w),g||h.setStrong(m,e,v),m}},/* 91 */
/***/
function(e,t,r){for(var n,i=r(4),o=r(18),s=r(49),a=s("typed_array"),u=s("view"),c=!(!i.ArrayBuffer||!i.DataView),f=c,l=0,d="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(n=i[d[l++]])?(o(n.prototype,a,!0),o(n.prototype,u,!0)):f=!1;e.exports={ABV:c,CONSTR:f,TYPED:a,VIEW:u}},/* 92 */
/***/
function(e,t,r){"use strict";
// Forced replacement prototype accessors methods
e.exports=r(43)||!r(5)(function(){var e=Math.random();
// In FF throws only define methods
// eslint-disable-next-line no-undef, no-useless-call
__defineSetter__.call(null,e,function(){}),delete r(4)[e]})},/* 93 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var n=r(0);e.exports=function(e){n(n.S,e,{of:function(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return new this(t)}})}},/* 94 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/proposal-setmap-offrom/
var n=r(0),i=r(16),o=r(28),s=r(56);e.exports=function(e){n(n.S,e,{from:function(e){var t,r,n,a,u=arguments[1];return i(this),t=void 0!==u,t&&i(u),void 0==e?new this:(r=[],t?(n=0,a=o(u,arguments[2],2),s(e,!1,function(e){r.push(a(e,n++))})):s(e,!1,r.push,r),new this(r))}})}},/* 95 */
/***/
function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},/* 96 */
/***/
function(e,t){var r=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++r+n).toString(36))}},/* 97 */
/***/
function(e,t,r){var n=r(40).f,i=r(59),o=r(22)("toStringTag");e.exports=function(e,t,r){e&&!i(e=r?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},/* 98 */
/***/
function(e,t,r){e.exports={default:r(436),__esModule:!0}},/* 99 */
/***/
function(e,t,r){
// most Object methods by ES6 should accept primitives
var n=r(21),i=r(10),o=r(66);e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],s={};s[e]=t(r),n(n.S+n.F*o(function(){r(1)}),"Object",s)}},/* 100 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(7),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=r(14),d=f.getLogger("address-allocation"),p=void 0,y=function(){/* private
  _url: URL
  _bus: MiniBus
  */
/**
   * Create an Address Allocation
   * @param  {URL.URL}      url - url from who is sending the message
   * @param  {MiniBus}      bus - MiniBus used for address allocation
   */
function AddressAllocation(e,t,r){if((0,s.default)(this,AddressAllocation),p)return p;this._url=e+"/address-allocation",this._bus=t,this._registry=r,p=this}return(0,u.default)(AddressAllocation,[{key:"create",/**
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
value:function(e,t,r,n,o){
// // console.log('typeof(reuseURL)', typeof(reuseURL), reuseURL);
//debugger;
// // console.log('typeof(reuseURL)', typeof(reuseURL), reuseURL);
//debugger;
return o?"boolean"==typeof o?o?this._reuseAllocatedAddress(e,t,r,n,o):this._allocateNewAddress(e,n,t):"string"==typeof o&&(0,l.isURL)(o)?new i.default(function(e,t){return e({newAddress:!1,address:[o]})}):void 0:(d.info("[AddressAllocation] - new address will be allocated"),this._allocateNewAddress(e,n,t))}},{key:"_reuseAllocatedAddress",value:function(e,t,r,n,o){var s=this;return new i.default(function(i,a){s._registry.checkRegisteredURLs(r,o).then(function(r){if(r){d.info("[AddressAllocation - "+n+"] - Reuse URL");i({newAddress:!1,address:r})}else"string"==typeof o?(d.info("[AddressAllocation - reuseURL] - Object "+o+" not found"),a("URL Not Found")):"boolean"==typeof o?s._allocateNewAddress(e,n,t).then(i).catch(a):a("URL Not Found")})})}},{key:"_allocateNewAddress",value:function(e,t,r){var n=this;return new i.default(function(i,o){var s={type:"create",from:n._url,to:"domain://msg-node."+e+"/address-allocation",body:{value:{number:r}}};"hyperty"!==t&&(s.body.scheme=t),d.info("[AddressAllocation - "+t+"] - Request new URL"),n._bus.postMessage(s,function(e){if(200===e.body.code){var t={newAddress:!0,address:e.body.value.allocated};i(t)}else o(e.body.desc)})})}},{key:"delete",value:function(e,t){var r=this;return new i.default(function(n,i){var o={type:"delete",from:r._url,to:"domain://msg-node."+e+"/address-allocation",body:{childrenResources:t}};r._bus.postMessage(o,function(e){200===e.body.code?n(e.body.code):i(e.body.desc)})})}},{key:"url",/**
     * get the URL value
     * @return {string} The url value;
     */
get:function(){return this._url}}],[{key:"instance",get:function(){if(!p)throw new Error("The address allocation was not instantiated");return p}}]),AddressAllocation}();t.default=y,e.exports=t.default},/* 101 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(7),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=r(14),d=r(491),p=_interopRequireDefault(d),y=f.getLogger("CryptoManager"),h=function(){/**
  * This is the constructor to initialise the CryptoManager, it does not require any input.
  * The init() must called in order to set mandatories attributes
  */
function CryptoManager(e){(0,s.default)(this,CryptoManager),this.storageManager=e,this.userDefaultKeyRef="userAsymmetricKey"}return(0,u.default)(CryptoManager,[{key:"init",value:function(e,t,r,n,i,o,s,a){var u=this;if(!e)throw new Error("[] runtimeURL is missing.");if(!r)throw new Error("storageManager is missing");if(!a)throw new Error("runtimeFactory is missing");u._runtimeURL=e,u._cryptoManagerURL=u._runtimeURL+"/cryptoManager",
//_this._myURL = _this._runtimeURL + '/crypto';
u.storageManager=r,u.dataObjectsStorage=n,u.runtimeCapabilities=t,u._runtimeFactory=a,u._domain=(0,l.divideURL)(u._runtimeURL).domain,u.crypto=new p.default(u._runtimeFactory),
// hashTable to store all the crypto information between two hyperties
u.chatKeys={},
// hashTable to store the symmetric keys to be used in the chat group
u.dataObjectSessionKeys={},
//failsafe to enable/disable all the criptographic functions
u.isToUseEncryption=!0,u._registry=i,u._coreDiscovery=o,u._idm=s}},{key:"loadSessionKeys",
// to be used to initialise IDM with SessionKeys used in previous session
value:function(){var e=this;return new i.default(function(t){e.storageManager.get("dataObjectSessionKeys").then(function(r){e.dataObjectSessionKeys=r||{},t()})})}},{key:"_isFromRemoteSM",value:function(e){return"runtime"===e.split("://")[0]&&e!==this._runtimeURL+"/sm"}},{key:"addCryptoGUIListeners",value:function(){
//TODO: Change the GUI invocation of this method
var e=this;e._messageBus.addListener(e._cryptoManagerURL,function(t){
//let returnedValue;
if("generateRSAKeyPair"===t.body.method)return void e._crypto.getMyPublicKey().then(function(r){var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){y.error("On addGUIListeners from if generateRSAKeyPair method postMessage error: "+e)}})})}},{key:"_isToEncrypt",value:function(e){var t=this;y.info("[CryptoManager.istoChyperModule]",e);var r="create"===e.type,n=e.from.includes("hyperty://"),i=e.to.includes("hyperty://"),o=(0,l.isDataObjectURL)(e.to),s=t.registry.getDataObjectReporter(e.to),a=!e.body.hasOwnProperty("mutual")||e.body.mutual;
//if is not to apply encryption, then returns resolve
return!!a&&((null===s||!(0,l.isLegacy)(s))&&(this.isToUseEncryption||"handshake"===e.type?"update"===e.type?(y.info("update:encryption disabled"),!1):!(0,l.isLegacy)(e.to)&&(r&&n&&i||r&&n&&o&&a||"handshake"===e.type||"update"===e.type&&a):(y.info("not handshake: encryption disabled"),!1)))}},{key:"_isToDecrypt",value:function(e){var t=this;return new i.default(function(r,n){if("subscribe"===e.type&t._isFromRemoteSM(e.from)){y.log("_doMutualAuthenticationPhase1");var i=t.registry.getDataObjectReporter(e.to);if(null!==i&&(0,l.isLegacy)(i))return r(!1);t._doMutualAuthenticationPhase1(e).then(function(){r(!1)},function(e){n(e)})}else e.hasOwnProperty("body")&&e.body.hasOwnProperty("value")&&"string"==typeof e.body.value?(y.log("_isToDecrypt:true"),r(!0)):(y.log("_isToDecrypt:false"),r(!1))}).catch(function(e){y.error("[CryptoManager._isToDecrypt]",e)})}},{key:"encryptMessage",value:function(e){
//log.info('encryptMessage:message', message);
var t=this;return y.log("encrypt message "),new i.default(function(r,n){var i="handshake"===e.type;
//if is not to apply encryption, then returns resolve
if(!t._isToEncrypt(e))
// log.log('decryption disabled');
return r(e);var o=(0,l.parseMessageURL)(e.to),s=(0,l.isDataObjectURL)(o),a=(0,l.isLegacy)(e.to),u="hyperty"===(0,l.divideURL)(e.from).type,c="hyperty"===(0,l.divideURL)(e.to).type;if("update"===e.type)return y.log("encrypt message: message type update"),r(e);if(a)r(e);else if(u&&c){var f=t._registry.getHypertyOwner(e.from);if(f){
// check if exists any keys between two users
var d=t.chatKeys[e.from+"<->"+e.to];if(d||(d=t._newChatCrypto(e,f),
//log.log('createChatKey encrypt', message.from + message.to);
t.chatKeys[e.from+"<->"+e.to]=d,e.body.handshakePhase="startHandShake"),d.authenticated&&!i){var p=t.crypto.generateIV();t.crypto.encryptAES(d.keys.hypertyFromSessionKey,(0,l.stringify)(e.body.value),p).then(function(n){var i=t._filterMessageToHash(e,(0,l.stringify)(e.body.value)+(0,l.stringify)(p),d.hypertyFrom.messageInfo);t.crypto.hashHMAC(d.keys.hypertyFromHashKey,i).then(function(t){
//log.log('result of hash ', hash);
var i={iv:(0,l.encode)(p),value:(0,l.encode)(n),hash:(0,l.encode)(t)};e.body.value=(0,l.encode)(i),r(e)})})}else i?r(e):t._doHandShakePhase(e,d).then(function(r){t.chatKeys[e.from+"<->"+e.to]=r.chatKeys,t._messageBus.postMessage(r.message),n("encrypt handshake protocol phase ")})}else n("In encryptMessage: Hyperty owner URL was not found")}else u&&s&&
//log.log('dataObject value to encrypt: ', message.body.value);
//log.log('IdentityModule - encrypt from hyperty to dataobject ', message);
t.storageManager.get("dataObjectSessionKeys").then(function(i){i=(0,l.chatkeysToArrayCloner)(i||{});var s=i?i[o]:null;t.dataObjectsStorage.getDataObject(o).then(function(i){
//if no key exists, create a new one if is the reporter of dataObject
if(!s&&i.reporter&&i.reporter===e.from){var a=t.crypto.generateRandom();t.dataObjectSessionKeys[o]={sessionKey:a,isToEncrypt:!0};var u=(0,l.chatkeysToStringCloner)(t.dataObjectSessionKeys);
//TODO: check if this does not need to be stored
t.storageManager.set("dataObjectSessionKeys",0,u).catch(function(e){n("On encryptMessage from method storageManager.set error: "+e)}),s=t.dataObjectSessionKeys[o]}
//check if there is already a session key for the chat room
if(s)
// and if is to apply encryption, encrypt the messages
if(s.isToEncrypt){var c=t.crypto.generateIV(),f=(0,l.stringify)(c),d=(0,l.stringify)(e.body.value);t.crypto.encryptAES(s.sessionKey,d,c).then(function(n){delete e.body.identity.assertion,//TODO: Check why assertion is comming on the message!
delete e.body.identity.expires;//TODO: Check why expires is comming on the message!
var i=t._filterMessageToHash(e,d+f);t.crypto.hashHMAC(s.sessionKey,i).then(function(t){
// log.log('hash ', hash);
var i={value:(0,l.encode)(n),iv:(0,l.encode)(c),hash:(0,l.encode)(t)};e.body.value=(0,l.stringify)(i),r(e)})})}else r(e);else n("Data object key could not be defined: Failed to decrypt message ")}).catch(function(e){n("On encryptMessage from method dataObjectsStorage.getDataObject error: "+e)})}).catch(function(e){n("On encryptMessage from method storageManager.get error: "+e)})})}},{key:"encryptDataObject",value:function(e,t){var r=this;return new i.default(function(n,i){y.info("dataObject value to encrypt: ",e);var o=(0,l.parseMessageURL)(t);r.storageManager.get("dataObjectSessionKeys").then(function(t){t=(0,l.chatkeysToArrayCloner)(t||{});var s=t?t[o]:null;
//check if there is already a session key for the chat room
if(!s)return i("No dataObjectKey for this dataObjectURL:",o);
// and if is to apply encryption, encrypt the messages
if(!s.isToEncrypt)return y.info("The dataObject is not encrypted"),n(e);var a=r.crypto.generateIV();r.crypto.encryptAES(s.sessionKey,(0,l.stringify)(e),a).then(function(e){var t={value:(0,l.encode)(e),iv:(0,l.encode)(a)};
//log.log('encrypted dataObject', newValue);
return n(t)}).catch(function(e){i("On encryptDataObject from method encryptAES error: "+e)})}).catch(function(e){i("On encryptDataObject from method storageManager.get error: "+e)})})}},{key:"decryptMessage",value:function(e){var t=this;
//  log.log('decryptMessage:message', message);
return new i.default(function(r,n){var i="handshake"===e.type;t._isToDecrypt(e).then(function(o){
//if is not to apply encryption, then returns resolve
if(!o)return r(e);var s=(0,l.parseMessageURL)(e.to),a=(0,l.isDataObjectURL)(s),u="hyperty"===(0,l.divideURL)(e.from).type,c="hyperty"===(0,l.divideURL)(e.to).type;if("update"===e.type)return r(e);
//is is hyperty to hyperty communication
if(u&&c){
// log.log('decrypt hyperty to hyperty');
var f=t._registry.getHypertyOwner(e.to);if(f){var d=t.chatKeys[e.to+"<->"+e.from];if(d||(d=t._newChatCrypto(e,f,"decrypt"),t.chatKeys[e.to+"<->"+e.from]=d),d.authenticated&&!i){var p=(0,l.decode)(e.body.value),h=(0,l.decodeToUint8Array)(p.iv),v=(0,l.decodeToUint8Array)(p.value),g=(0,l.decodeToUint8Array)(p.hash);t.crypto.decryptAES(d.keys.hypertyToSessionKey,v,h).then(function(n){
// log.log('decrypted value ', decryptedData);
e.body.value=n;var i=t._filterMessageToHash(e,n+h);t.crypto.verifyHMAC(d.keys.hypertyToHashKey,i,g).then(function(t){
//log.log('result of hash verification! ', result);
e.body.assertedIdentity=!0,r(e)})})}else i?t._doHandShakePhase(e,d).then(function(r){
//if it was started by doMutualAuthentication then ends the protocol
"handShakeEnd"===r||(t.chatKeys[e.to+"<->"+e.from]=r.chatKeys,t._messageBus.postMessage(r.message))}):n("wrong message do decrypt")}else n("error on decrypt message")}else u&&a?
// log.log('dataObject value to decrypt: ', message.body);
t.storageManager.get("dataObjectSessionKeys").then(function(i){i=(0,l.chatkeysToArrayCloner)(i||{});var o=i?i[s]:null;if(o)
//check if is to apply encryption
if(o.isToEncrypt){var a=(0,l.parse)(e.body.value),u=(0,l.decodeToUint8Array)(a.iv),c=(0,l.decodeToUint8Array)(a.value),f=(0,l.decodeToUint8Array)(a.hash);t.crypto.decryptAES(o.sessionKey,c,u).then(function(i){var s=(0,l.parse)(i);
// log.log('decrypted Value,', parsedValue);
e.body.value=s;var a=t._filterMessageToHash(e,(0,l.stringify)(s)+(0,l.stringify)(u));t.crypto.verifyHMAC(o.sessionKey,a,f).then(function(t){y.log("Received message HMAC result",t),e.body.assertedIdentity=!0,r(e)}).catch(function(e){n("Message HMAC is invalid: "+e)})})}else e.body.assertedIdentity=!0,r(e);else e.body.assertedIdentity=!0,r(e)}):n("wrong message to decrypt")})})}},{key:"decryptDataObject",value:function(e,t){var r=this;return new i.default(function(n,i){
//if is not to apply encryption, then returns resolve
if(!r.isToUseEncryption)
// log.log('decryption disabled');
return n(e);var o=(0,l.parseMessageURL)(t);
// log.log('dataObject value to decrypt: ', dataObject);
r.storageManager.get("dataObjectSessionKeys").then(function(t){t=(0,l.chatkeysToArrayCloner)(t);var s=t?t[o]:null;if(!s)return i("No dataObjectKey for this dataObjectURL:",o);
//check if is to apply encryption
if(!s.isToEncrypt)
// log.log('The dataObject is not encrypted');
return n(e);var a=(0,l.decodeToUint8Array)(e.iv),u=(0,l.decodeToUint8Array)(e.value);r.crypto.decryptAES(s.sessionKey,u,a).then(function(e){var t=(0,l.parse)(e),r={value:t,iv:(0,l.encode)(a)};
// log.log('decrypted dataObject,', newValue);
return n(r)}).catch(function(e){i("On decryptDataObject from method encryptAES error: "+e)})})})}},{key:"_doMutualAuthenticationPhase1",value:function(e){var t=this;return new i.default(function(r,n){var i=e.to.split("/");
//let subsIndex = to.indexOf('subscription');
//let isDataObjectSubscription = subsIndex !== -1;
i.pop();var o=i[0]+"//"+i[2]+"/"+i[3];t._doMutualAuthenticationPhase2(o,e.body.subscriber).then(function(){t._registry.registerSubscriber(o,e.body.subscriber),r()},function(e){n(e)})})}},{key:"_doMutualAuthenticationPhase2",value:function(e,t){y.info("doMutualAuthentication:sender ",e),y.info("doMutualAuthentication:receiver ",t);var r=this;return new i.default(function(n,i){var o=void 0,s=r._registry.getReporterURLSynchonous(e);s&&(o=e,e=s);var a={to:t,from:e,callback:void 0,body:{handshakePhase:"startHandShake",ignore:"ignoreMessage"}};if(!e||!t)return i("sender or receiver missing on doMutualAuthentication");var u=r.chatKeys[e+"<->"+t],c=r._registry.getHypertyOwner(e);if(c){if(!u){
// callback to resolve when finish the mutual authentication
var f=function(e){
// log.log('callback value:', value);
n(e)};a.callback=f,a.dataObjectURL=o,u=r._newChatCrypto(a,c),r.chatKeys[e+"<->"+t]=u}if(u.authenticated){var l={to:e,from:t};u.dataObjectURL=o,r._sendReporterSessionKey(l,u).then(function(e){r._messageBus.postMessage(e.message),n("exchange of chat sessionKey initiated")}).catch(function(e){i("On doMutualAuthentication from method _sendReporterSessionKey error: "+e)})}else r._doHandShakePhase(a,u)}else i("Mutual authentication error: Hyperty owner could not be resolved")})}},{key:"_sendReporterSessionKey",value:function(e,t){var r=this;return new i.default(function(n,i){var o=r.dataObjectSessionKeys[t.dataObjectURL],s=void 0,a=void 0,u=void 0,c=void 0,f={};
//if there is not yet a session Key, generates a new one
if(o)u=o.sessionKey;else{u=r.crypto.generateRandom(),r.dataObjectSessionKeys[t.dataObjectURL]={sessionKey:u,isToEncrypt:!0};var d=(0,l.chatkeysToStringCloner)(r.dataObjectSessionKeys);r.storageManager.set("dataObjectSessionKeys",0,d).catch(function(e){i("On _sendReporterSessionKey from method storageManager.set(dataObjectSessionKeys...) error: "+e)})}try{a=(0,l.encode)({value:(0,l.encode)(u),dataObjectURL:t.dataObjectURL})}catch(e){return i("On _sendReporterSessionKey from method storageManager.set error valueToEncrypt: "+e)}c=r.crypto.generateIV(),f.iv=(0,l.encode)(c),r.crypto.encryptAES(t.keys.hypertyFromSessionKey,a,c).then(function(n){s={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"reporterSessionKey",value:(0,l.encode)(n)}};var i=r._filterMessageToHash(s,a+c,t.hypertyFrom.messageInfo);return r.crypto.hashHMAC(t.keys.hypertyFromHashKey,i)}).then(function(e){var r=(0,l.encode)({value:s.body.value,hash:(0,l.encode)(e),iv:f.iv});s.body.value=r,n({message:s,chatKeys:t})}).catch(function(e){i("On _sendReporterSessionKey from chained promises encryptAES error: "+e)})})}},{key:"_resolveDomain",value:function(e){return e?"domain-idp://"+e:"domain-idp://google.com"}},{key:"_doHandShakePhase",value:function(e,t){
// log('_doHandShakePhase:dataObject', message);
//	log('_doHandShakePhase:chatKeys', chatKeys);
var r=this;return new i.default(function(n,i){var o=e.body.handshakePhase,s=void 0,a=void 0,u={},c=void 0,f=void 0;switch(y.info("handshake phase: ",o),o){case"startHandShake":t.keys.fromRandom=r.crypto.generateRandom();var d={type:"handshake",to:e.to,from:e.from,body:{handshakePhase:"senderHello",value:(0,l.encode)(t.keys.fromRandom)}};t.handshakeHistory.senderHello=r._filterMessageToHash(d,void 0,t.hypertyFrom.messageInfo),
// check if was the encrypt function or the mutual authentication that request the
// start of the handShakePhase.
t.initialMessage?n({message:d,chatKeys:t}):(r.chatKeys[e.from+"<->"+e.to]=t,r._messageBus.postMessage(d));break;case"senderHello":y.log("senderHello"),t.handshakeHistory.senderHello=r._filterMessageToHash(e),t.keys.fromRandom=(0,l.decodeToUint8Array)(e.body.value),t.keys.toRandom=r.crypto.generateRandom();var p={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"receiverHello",value:(0,l.encode)(t.keys.toRandom)}};t.handshakeHistory.receiverHello=r._filterMessageToHash(p,void 0,t.hypertyFrom.messageInfo),n({message:p,chatKeys:t});break;case"receiverHello":y.log("receiverHello"),r.getMyPrivateKey().then(function(n){return f=n,t.handshakeHistory.receiverHello=r._filterMessageToHash(e),r._idm.validateAssertion(e.body.identity.assertion,void 0,e.body.identity.idp.domain)}).then(function(n){
//TODO remove later this verification as soon as all the IdP proxy are updated in the example
var i="string"==typeof n.contents?n.contents:n.contents.nonce,o=(0,l.parseToUint8Array)(i),s=r.crypto.generatePMS(),a=e.body.value;t.hypertyTo.assertion=e.body.identity.assertion,t.hypertyTo.publicKey=o,t.hypertyTo.userID=e.body.identity.userProfile.userURL,t.keys.toRandom=(0,l.decodeToUint8Array)(a),t.keys.premasterKey=s;var u=r.crypto.concatPMSwithRandoms(s,t.keys.toRandom,t.keys.fromRandom);return r.crypto.generateMasterSecret(u,"messageHistoric"+t.keys.toRandom+t.keys.fromRandom)}).then(function(e){return t.keys.masterKey=e,r.crypto.generateKeys(e,"key expansion"+t.keys.toRandom+t.keys.fromRandom)}).then(function(n){t.keys.hypertyToSessionKey=new Uint8Array(n[0]),t.keys.hypertyFromSessionKey=new Uint8Array(n[1]),t.keys.hypertyToHashKey=new Uint8Array(n[2]),t.keys.hypertyFromHashKey=new Uint8Array(n[3]),s=r.crypto.generateIV(),u.iv=(0,l.encode)(s);var i={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"senderCertificate"}};
// hash the value and the iv
return c=r._filterMessageToHash(i,"ok"+s,t.hypertyFrom.messageInfo),r.crypto.hashHMAC(t.keys.hypertyFromHashKey,c)}).then(function(e){
//encrypt the data
return u.hash=(0,l.encode)(e),r.crypto.encryptAES(t.keys.hypertyFromSessionKey,"ok",s)}).then(function(e){return u.symetricEncryption=(0,l.encode)(e),r.crypto.encryptRSA(t.hypertyTo.publicKey,t.keys.premasterKey)}).then(function(n){u.assymetricEncryption=(0,l.encode)(n);var i={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"senderCertificate"}},o=r._filterMessageToHash(i,t.keys.premasterKey,t.hypertyFrom.messageInfo);return r.crypto.signRSA(f,(0,l.encode)(t.handshakeHistory)+(0,l.encode)(o))}).then(function(i){u.signature=(0,l.encode)(i);var o={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"senderCertificate",value:(0,l.encode)(u)}};t.handshakeHistory.senderCertificate=r._filterMessageToHash(o,"ok"+s,t.hypertyFrom.messageInfo),n({message:o,chatKeys:t})},function(e){return i(e)});break;case"senderCertificate":y.log("senderCertificate");var h=(0,l.decode)(e.body.value);r.getMyPrivateKey().then(function(t){return f=t,r._idm.validateAssertion(e.body.identity.assertion,void 0,e.body.identity.idp.domain)}).then(function(n){var i=(0,l.decodeToUint8Array)(h.assymetricEncryption),o="string"==typeof n.contents?n.contents:n.contents.nonce,s=(0,l.parseToUint8Array)(o);return t.hypertyTo.assertion=e.body.identity.assertion,t.hypertyTo.publicKey=s,t.hypertyTo.userID=e.body.identity.userProfile.userURL,r.crypto.decryptRSA(f,i)},function(e){
// log.log(error);
i("Error during authentication of identity: ",e.message)}).then(function(n){t.keys.premasterKey=new Uint8Array(n);var i=(0,l.decodeToUint8Array)(h.signature),o=r._filterMessageToHash(e,t.keys.premasterKey);return r.crypto.verifyRSA(t.hypertyTo.publicKey,(0,l.encode)(t.handshakeHistory)+(0,l.encode)(o),i)}).then(function(e){
//log.log('SenderCertificate - signature validation result ', signValidationResult);
var n=r.crypto.concatPMSwithRandoms(t.keys.premasterKey,t.keys.toRandom,t.keys.fromRandom);return r.crypto.generateMasterSecret(n,"messageHistoric"+t.keys.toRandom+t.keys.fromRandom)}).then(function(e){return t.keys.masterKey=e,r.crypto.generateKeys(e,"key expansion"+t.keys.toRandom+t.keys.fromRandom)}).then(function(e){t.keys.hypertyFromSessionKey=new Uint8Array(e[0]),t.keys.hypertyToSessionKey=new Uint8Array(e[1]),t.keys.hypertyFromHashKey=new Uint8Array(e[2]),t.keys.hypertyToHashKey=new Uint8Array(e[3]),s=(0,l.decodeToUint8Array)(h.iv);var n=(0,l.decodeToUint8Array)(h.symetricEncryption);return r.crypto.decryptAES(t.keys.hypertyToSessionKey,n,s)}).then(function(n){
// log.log('decryptedData', decryptedData);
t.handshakeHistory.senderCertificate=r._filterMessageToHash(e,n+s);var i=(0,l.decodeToUint8Array)(h.hash);return c=r._filterMessageToHash(e,n+s),r.crypto.verifyHMAC(t.keys.hypertyToHashKey,c,i)}).then(function(n){
// log.log('result of hash verification ', verifiedHash);
var i={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"receiverFinishedMessage"}};
//log.log('TIAGO: doHandShakePhase verifiedHash');
return s=r.crypto.generateIV(),u.iv=(0,l.encode)(s),c=r._filterMessageToHash(i,"ok!"+s,t.hypertyFrom.messageInfo),r.crypto.hashHMAC(t.keys.hypertyFromHashKey,c)}).then(function(e){return u.hash=(0,l.encode)(e),r.crypto.encryptAES(t.keys.hypertyFromSessionKey,"ok!",s)}).then(function(i){u.value=(0,l.encode)(i);var o={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"receiverFinishedMessage",value:(0,l.encode)(u)}};t.handshakeHistory.receiverFinishedMessage=r._filterMessageToHash(o,"ok!"+s,t.hypertyFrom.messageInfo),t.authenticated=!0,n({message:o,chatKeys:t})}).catch(function(e){i("On _doHandShakePhase from senderCertificate error: "+e)});break;case"receiverFinishedMessage":t.authenticated=!0,u=(0,l.decode)(e.body.value),s=(0,l.decodeToUint8Array)(u.iv);var v=(0,l.decodeToUint8Array)(u.value);a=(0,l.decodeToUint8Array)(u.hash),r.crypto.decryptAES(t.keys.hypertyToSessionKey,v,s).then(function(o){
// log.log('decryptedData', decryptedData);
t.handshakeHistory.receiverFinishedMessage=r._filterMessageToHash(e,o+s);var u=r._filterMessageToHash(e,o+s);r.crypto.verifyHMAC(t.keys.hypertyToHashKey,u,a).then(function(o){
// check if there was an initial message that was blocked and send it
if(t.initialMessage){var s={type:"create",to:e.from,from:e.to,body:{value:t.initialMessage.body.value}};n({message:s,chatKeys:t})}else r._sendReporterSessionKey(e,t).then(function(e){n(e)}).catch(function(e){i("On _doHandShakePhase from receiverFinishedMessage error: "+e)})})});break;case"reporterSessionKey":y.log("reporterSessionKey");var g=(0,l.decode)(e.body.value);a=(0,l.decodeToUint8Array)(g.hash),s=(0,l.decodeToUint8Array)(g.iv);var b=(0,l.decodeToUint8Array)(g.value),m=void 0,_=void 0,R=void 0,w=void 0;
//log.log('[IdentityModule reporterSessionKey] - decryptAES: ', chatKeys.keys.hypertyToSessionKey, encryptedValue, iv);
r.crypto.decryptAES(t.keys.hypertyToSessionKey,b,s).then(function(n){m=(0,l.decode)(n),_=(0,l.decodeToUint8Array)(m.value),R=m.dataObjectURL;var i=r._filterMessageToHash(e,n+s);return r.crypto.verifyHMAC(t.keys.hypertyToHashKey,i,a)}).then(function(e){
// log.log('hash successfully validated ', hashResult);
r.dataObjectSessionKeys[R]={sessionKey:_,isToEncrypt:!0};var n=(0,l.chatkeysToStringCloner)(r.dataObjectSessionKeys);return r.storageManager.set("dataObjectSessionKeys",0,n).catch(function(e){i("On _sendReporterSessionKey from method reporterSessionKey error: "+e)}),s=r.crypto.generateIV(),u.iv=(0,l.encode)(s),r.crypto.encryptAES(t.keys.hypertyFromSessionKey,"ok!!",s)}).then(function(n){w={type:"handshake",to:e.from,from:e.to,body:{handshakePhase:"receiverAcknowledge"}},u.value=(0,l.encode)(n);var i=r._filterMessageToHash(w,"ok!!"+s,t.hypertyFrom.messageInfo);return r.crypto.hashHMAC(t.keys.hypertyFromHashKey,i)}).then(function(e){var r=(0,l.encode)({value:u.value,hash:(0,l.encode)(e),iv:u.iv});w.body.value=r,n({message:w,chatKeys:t})}).catch(function(e){i("On _doHandShakePhase from reporterSessionKey error: "+e)});break;case"receiverAcknowledge":y.log("receiverAcknowledge");var S=(0,l.decode)(e.body.value),P=(0,l.decodeToUint8Array)(S.hash);s=(0,l.decodeToUint8Array)(S.iv);var O=(0,l.decodeToUint8Array)(S.value);r.crypto.decryptAES(t.keys.hypertyToSessionKey,O,s).then(function(n){var i=r._filterMessageToHash(e,n+s);return r.crypto.verifyHMAC(t.keys.hypertyToHashKey,i,P)}).then(function(e){
// log.log('hashResult ', hashResult);
var r=t.callback;r&&r("handShakeEnd"),n("handShakeEnd")}).catch(function(e){i("On _doHandShakePhase from receiverAcknowledge error: "+e)});break;default:i(e)}})}},{key:"_filterMessageToHash",value:function(e,t,r){return{type:e.type,from:e.from,to:e.to,body:{identity:r||e.body.identity,value:t||e.body.value,handshakePhase:e.body.handshakePhase}}}},{key:"_newChatCrypto",value:function(e,t,r){var n=this,i=r?e.to:e.from,o=r?e.from:e.to,s=n._idm.getIdentity(t);return{hypertyFrom:{hyperty:i,userID:s.userProfile.userURL,
//privateKey: "getMyPublicKey",
//publicKey: "getMyPrivateKey",
assertion:s.assertion,messageInfo:s},hypertyTo:{hyperty:o,userID:void 0,publicKey:void 0,assertion:void 0},keys:{hypertyToSessionKey:void 0,hypertyFromSessionKey:void 0,hypertyToHashKey:void 0,hypertyFromHashKey:void 0,toRandom:void 0,fromRandom:void 0,premasterKey:void 0,masterKey:void 0},handshakeHistory:{senderHello:void 0,receiverHello:void 0,senderCertificate:void 0,receiverFinishedMessage:void 0},initialMessage:e.body.ignore?void 0:e,callback:e.callback,authenticated:!1,dataObjectURL:e.dataObjectURL}}},{key:"getMyPublicKey",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.userDefaultKeyRef,t=this;return new i.default(function(r,n){t.storageManager.get(e).then(function(i){if(i)return r(i.public);t._generateAndStoreNewAsymetricKey(e).then(function(e){r(e.public)}).catch(function(e){y.error("[getMyPublicKey:_generateAndStoreNewAsymetricKey:err]: "+e.message),n(e)})}).catch(function(e){y.error("[getMyPublicKey:storageManager:err]: "+e.message),n(e)})})}},{key:"getMyPrivateKey",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.userDefaultKeyRef,t=this;return new i.default(function(r,n){t.storageManager.get(e).then(function(i){if(i)return r(i.private);t._generateAndStoreNewAsymetricKey(e).then(function(e){r(e.private)}).catch(function(e){y.error("[getMyPrivateKey:_generateAndStoreNewAsymetricKey:err]: "+e.message),n(e)})}).catch(function(e){y.error("[getMyPrivateKey:storageManager:err]: "+e.message),n(e)})})}},{key:"_generateAndStoreNewAsymetricKey",value:function(e){var t=this,r=void 0;return new i.default(function(n,i){t.crypto.generateRSAKeyPair().then(function(n){return y.log("_generateAndStoreNewAsymetricKey:userAsymmetricKeyGenerated",n),r=n,t.storageManager.set(e,0,n)}).then(function(e){y.log("_generateAndStoreNewAsymetricKey:userAsymmetricKeySuccess",e),n(r)}).catch(function(e){y.error("[_generateAndStoreNewAsymetricKey:err]: "+e.message),i(e)})})}},{key:"messageBus",get:function(){return this._messageBus},set:function(e){var t=this;t._messageBus=e,t.addCryptoGUIListeners()}},{key:"coreDiscovery",get:function(){return this._coreDiscovery},set:function(e){this._coreDiscovery=e}},{key:"registry",get:function(){return this._registry},set:function(e){this._registry=e}}]),CryptoManager}();/*
const nodeJSKeyPairPopulate = { public: [48, 130, 1, 34, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 3, 130, 1, 15, 0, 48, 130, 1, 10, 2, 130, 1, 1, 0, 228, 43, 101, 12, 121, 7, 157, 71, 81, 58, 219, 32, 10, 108, 193, 179, 212, 116, 255, 59, 217, 32, 161, 201, 53, 171, 226, 199, 137, 202, 171, 60, 82, 53, 125, 62, 177, 126, 165, 24, 141, 30, 15, 226, 59, 107, 34, 7, 13, 149, 112, 125, 10, 230, 191, 156, 164, 177, 10, 185, 13, 66, 3, 217, 166, 244, 90, 119, 111, 27, 145, 104, 71, 189, 166, 226, 255, 133, 83, 151, 231, 101, 151, 89, 22, 19, 65, 154, 10, 53, 208, 218, 252, 219, 37, 50, 212, 86, 145, 107, 132, 90, 233, 202, 227, 108, 114, 141, 29, 73, 187, 31, 13, 234, 0, 232, 24, 191, 35, 149, 179, 138, 214, 159, 245, 162, 148, 221, 118, 17, 105, 89, 151, 146, 209, 55, 236, 61, 143, 233, 228, 10, 115, 8, 81, 197, 45, 123, 187, 223, 176, 254, 165, 69, 143, 29, 100, 114, 17, 130, 226, 223, 33, 11, 240, 81, 61, 172, 191, 157, 246, 202, 87, 131, 221, 88, 48, 127, 159, 119, 160, 152, 117, 61, 253, 174, 65, 214, 203, 218, 63, 50, 78, 160, 181, 221, 211, 128, 70, 178, 191, 170, 0, 13, 122, 173, 12, 203, 252, 4, 184, 225, 252, 7, 62, 96, 116, 15, 216, 158, 55, 85, 48, 16, 9, 206, 119, 74, 112, 243, 136, 84, 184, 223, 254, 101, 91, 61, 10, 91, 85, 192, 147, 144, 57, 29, 66, 238, 199, 244, 193, 194, 150, 232, 200, 107, 2, 3, 1, 0, 1],
  private: [48, 130, 4, 191, 2, 1, 0, 48, 13, 6, 9, 42, 134, 72, 134, 247, 13, 1, 1, 1, 5, 0, 4, 130, 4, 169, 48, 130, 4, 165, 2, 1, 0, 2, 130, 1, 1, 0, 228, 43, 101, 12, 121, 7, 157, 71, 81, 58, 219, 32, 10, 108, 193, 179, 212, 116, 255, 59, 217, 32, 161, 201, 53, 171, 226, 199, 137, 202, 171, 60, 82, 53, 125, 62, 177, 126, 165, 24, 141, 30, 15, 226, 59, 107, 34, 7, 13, 149, 112, 125, 10, 230, 191, 156, 164, 177, 10, 185, 13, 66, 3, 217, 166, 244, 90, 119, 111, 27, 145, 104, 71, 189, 166, 226, 255, 133, 83, 151, 231, 101, 151, 89, 22, 19, 65, 154, 10, 53, 208, 218, 252, 219, 37, 50, 212, 86, 145, 107, 132, 90, 233, 202, 227, 108, 114, 141, 29, 73, 187, 31, 13, 234, 0, 232, 24, 191, 35, 149, 179, 138, 214, 159, 245, 162, 148, 221, 118, 17, 105, 89, 151, 146, 209, 55, 236, 61, 143, 233, 228, 10, 115, 8, 81, 197, 45, 123, 187, 223, 176, 254, 165, 69, 143, 29, 100, 114, 17, 130, 226, 223, 33, 11, 240, 81, 61, 172, 191, 157, 246, 202, 87, 131, 221, 88, 48, 127, 159, 119, 160, 152, 117, 61, 253, 174, 65, 214, 203, 218, 63, 50, 78, 160, 181, 221, 211, 128, 70, 178, 191, 170, 0, 13, 122, 173, 12, 203, 252, 4, 184, 225, 252, 7, 62, 96, 116, 15, 216, 158, 55, 85, 48, 16, 9, 206, 119, 74, 112, 243, 136, 84, 184, 223, 254, 101, 91, 61, 10, 91, 85, 192, 147, 144, 57, 29, 66, 238, 199, 244, 193, 194, 150, 232, 200, 107, 2, 3, 1, 0, 1, 2, 130, 1, 0, 103, 244, 137, 118, 116, 82, 14, 203, 102, 107, 253, 88, 12, 199, 222, 60, 243, 136, 86, 157, 74, 224, 190, 53, 113, 57, 157, 250, 49, 130, 96, 31, 252, 136, 152, 70, 143, 17, 215, 96, 103, 51, 18, 35, 141, 212, 210, 205, 9, 216, 83, 70, 245, 71, 138, 119, 112, 229, 164, 176, 9, 37, 81, 161, 193, 154, 68, 249, 115, 106, 201, 6, 12, 225, 144, 126, 141, 210, 141, 242, 128, 159, 221, 163, 222, 21, 233, 230, 167, 206, 59, 24, 250, 233, 81, 122, 102, 26, 6, 233, 72, 133, 47, 77, 155, 238, 86, 6, 139, 24, 131, 163, 179, 112, 48, 247, 142, 6, 207, 204, 173, 223, 140, 199, 150, 95, 123, 152, 202, 155, 131, 238, 62, 96, 133, 4, 217, 51, 121, 30, 38, 178, 189, 216, 44, 35, 241, 93, 7, 62, 90, 111, 216, 66, 209, 243, 128, 234, 141, 84, 135, 181, 13, 38, 220, 114, 245, 240, 178, 95, 220, 206, 11, 186, 234, 213, 66, 121, 83, 68, 89, 75, 46, 183, 145, 183, 147, 160, 215, 118, 198, 125, 181, 146, 30, 251, 58, 87, 47, 209, 237, 97, 24, 47, 179, 6, 110, 242, 99, 150, 226, 148, 198, 174, 146, 101, 213, 87, 178, 10, 223, 105, 18, 56, 53, 22, 212, 158, 170, 176, 51, 86, 145, 125, 124, 44, 9, 85, 19, 144, 246, 170, 78, 124, 30, 32, 12, 166, 174, 139, 77, 63, 173, 82, 10, 153, 2, 129, 129, 0, 248, 18, 143, 246, 137, 136, 145, 219, 178, 39, 27, 94, 64, 90, 47, 163, 114, 60, 63, 187, 131, 143, 244, 16, 42, 128, 231, 117, 92, 98, 219, 155, 62, 107, 252, 17, 245, 45, 160, 225, 103, 142, 72, 36, 193, 150, 235, 214, 175, 62, 212, 56, 45, 9, 0, 60, 114, 107, 134, 228, 204, 131, 131, 214, 94, 201, 148, 159, 99, 139, 181, 13, 119, 38, 30, 107, 166, 165, 203, 43, 34, 20, 207, 171, 32, 58, 167, 62, 196, 153, 103, 204, 213, 247, 48, 111, 227, 59, 95, 97, 194, 187, 53, 10, 247, 108, 58, 86, 28, 29, 113, 8, 110, 171, 220, 245, 11, 82, 233, 223, 91, 68, 166, 117, 174, 187, 62, 77, 2, 129, 129, 0, 235, 118, 2, 105, 239, 212, 30, 104, 157, 41, 109, 11, 248, 152, 22, 236, 97, 40, 153, 131, 228, 5, 86, 187, 113, 126, 144, 76, 141, 79, 110, 250, 146, 152, 49, 58, 156, 201, 176, 92, 189, 209, 30, 112, 108, 175, 204, 204, 247, 164, 46, 129, 239, 98, 127, 49, 145, 218, 63, 193, 124, 174, 18, 98, 201, 99, 154, 162, 138, 78, 159, 253, 3, 248, 3, 209, 36, 239, 193, 155, 193, 5, 19, 236, 37, 78, 118, 135, 250, 199, 7, 141, 248, 120, 36, 136, 93, 98, 174, 60, 18, 215, 93, 174, 107, 141, 116, 145, 167, 221, 210, 169, 247, 67, 254, 222, 161, 134, 63, 221, 90, 87, 42, 99, 227, 81, 173, 151, 2, 129, 129, 0, 133, 23, 168, 103, 83, 232, 146, 160, 181, 23, 40, 38, 204, 13, 214, 203, 49, 41, 195, 227, 189, 181, 8, 243, 119, 106, 75, 67, 250, 250, 10, 234, 98, 118, 26, 250, 35, 121, 132, 124, 10, 76, 26, 198, 165, 154, 108, 19, 117, 88, 23, 17, 192, 143, 184, 177, 181, 141, 157, 4, 185, 248, 193, 77, 204, 243, 7, 170, 240, 4, 111, 113, 183, 0, 27, 136, 20, 19, 149, 74, 33, 241, 218, 108, 236, 80, 171, 148, 16, 116, 97, 109, 83, 74, 88, 145, 94, 239, 102, 192, 19, 114, 207, 5, 128, 51, 111, 164, 237, 86, 154, 99, 52, 197, 62, 57, 182, 6, 152, 245, 61, 137, 58, 105, 159, 2, 84, 109, 2, 129, 129, 0, 226, 67, 111, 132, 95, 91, 101, 177, 63, 189, 44, 53, 193, 184, 92, 230, 223, 98, 133, 74, 209, 86, 52, 7, 65, 195, 206, 100, 81, 178, 144, 65, 167, 151, 42, 79, 89, 149, 18, 173, 188, 21, 244, 251, 49, 230, 41, 150, 153, 46, 35, 38, 231, 99, 174, 56, 115, 32, 215, 253, 85, 147, 108, 197, 147, 34, 236, 216, 222, 177, 57, 90, 136, 114, 207, 48, 46, 31, 90, 220, 18, 58, 143, 239, 111, 214, 27, 95, 6, 36, 53, 229, 62, 108, 45, 39, 1, 30, 47, 178, 56, 164, 206, 56, 42, 208, 46, 193, 61, 31, 147, 45, 147, 23, 187, 22, 50, 255, 111, 229, 132, 199, 152, 75, 142, 136, 209, 151, 2, 129, 129, 0, 165, 56, 232, 76, 55, 57, 240, 159, 92, 207, 220, 143, 130, 30, 57, 234, 251, 172, 171, 180, 54, 159, 229, 96, 246, 73, 112, 146, 75, 157, 242, 201, 161, 218, 37, 176, 35, 170, 50, 90, 148, 102, 191, 199, 239, 174, 78, 72, 67, 85, 199, 45, 149, 145, 132, 161, 212, 33, 157, 75, 216, 79, 39, 233, 18, 210, 255, 26, 72, 229, 239, 44, 12, 147, 158, 176, 192, 95, 126, 32, 175, 23, 226, 131, 139, 197, 175, 193, 62, 8, 151, 252, 68, 154, 94, 89, 189, 125, 90, 30, 36, 175, 73, 230, 194, 13, 233, 247, 123, 60, 241, 47, 171, 51, 189, 112, 111, 213, 141, 89, 70, 249, 236, 63, 236, 110, 115, 208]};
*/
t.default=new h,e.exports=t.default},/* 102 */
/***/
function(e,t,r){var n=r(6),i=r(4).document,o=n(i)&&n(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},/* 103 */
/***/
function(e,t,r){var n=r(4),i=r(27),o=r(43),s=r(149),a=r(12).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:s.f(e)})}},/* 104 */
/***/
function(e,t,r){var n=r(80)("keys"),i=r(49);e.exports=function(e){return n[e]||(n[e]=i(e))}},/* 105 */
/***/
function(e,t){
// IE 8- don't enum bug keys
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 106 */
/***/
function(e,t,r){var n=r(4).document;e.exports=n&&n.documentElement},/* 107 */
/***/
function(e,t,r){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var n=r(6),i=r(3),o=function(e,t){if(i(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?// eslint-disable-line
function(e,t,n){try{n=r(28)(Function.call,r(25).f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},/* 108 */
/***/
function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},/* 109 */
/***/
function(e,t,r){var n=r(6),i=r(107).set;e.exports=function(e,t,r){var o,s=t.constructor;return s!==r&&"function"==typeof s&&(o=s.prototype)!==r.prototype&&n(o)&&i&&i(e,o),e}},/* 110 */
/***/
function(e,t,r){"use strict";var n=r(33),i=r(32);e.exports=function(e){var t=String(i(this)),r="",o=n(e);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(r+=t);return r}},/* 111 */
/***/
function(e,t){
// 20.2.2.28 Math.sign(x)
e.exports=Math.sign||function(e){
// eslint-disable-next-line no-self-compare
return 0==(e=+e)||e!=e?e:e<0?-1:1}},/* 112 */
/***/
function(e,t){
// 20.2.2.14 Math.expm1(x)
var r=Math.expm1;e.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function(e){return 0==(e=+e)?e:e>-1e-6&&e<1e-6?e+e*e/2:Math.exp(e)-1}:r},/* 113 */
/***/
function(e,t,r){var n=r(33),i=r(32);
// true  -> String#at
// false -> String#codePointAt
e.exports=function(e){return function(t,r){var o,s,a=String(i(t)),u=n(r),c=a.length;return u<0||u>=c?e?"":void 0:(o=a.charCodeAt(u),o<55296||o>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?e?a.charAt(u):o:e?a.slice(u,u+2):s-56320+(o-55296<<10)+65536)}}},/* 114 */
/***/
function(e,t,r){"use strict";var n=r(43),i=r(0),o=r(19),s=r(18),a=r(63),u=r(115),c=r(61),f=r(26),l=r(8)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,r,y,h,v,g){u(r,t,y);var b,m,_,R=function(e){if(!d&&e in O)return O[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},w=t+" Iterator",S="values"==h,P=!1,O=e.prototype,M=O[l]||O["@@iterator"]||h&&O[h],k=M||R(h),L=h?S?R("entries"):k:void 0,x="Array"==t?O.entries||M:M;if(
// Fix native
x&&(_=f(x.call(new e)))!==Object.prototype&&_.next&&(
// Set @@toStringTag to native iterators
c(_,w,!0),
// fix for some old engines
n||"function"==typeof _[l]||s(_,l,p)),
// fix Array#{values, @@iterator}.name in V8 / FF
S&&M&&"values"!==M.name&&(P=!0,k=function(){return M.call(this)}),
// Define iterator
n&&!g||!d&&!P&&O[l]||s(O,l,k),
// Plug for library
a[t]=k,a[w]=p,h)if(b={values:S?k:R("values"),keys:v?k:R("keys"),entries:L},g)for(m in b)m in O||o(O,m,b[m]);else i(i.P+i.F*(d||P),t,b);return b}},/* 115 */
/***/
function(e,t,r){"use strict";var n=r(52),i=r(48),o=r(61),s={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
r(18)(s,r(8)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(s,{next:i(1,r)}),o(e,t+" Iterator")}},/* 116 */
/***/
function(e,t,r){
// helper for String#{startsWith, endsWith, includes}
var n=r(84),i=r(32);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},/* 117 */
/***/
function(e,t,r){var n=r(8)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(e){}}return!0}},/* 118 */
/***/
function(e,t,r){
// check on default Array iterator
var n=r(63),i=r(8)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||o[i]===e)}},/* 119 */
/***/
function(e,t,r){"use strict";var n=r(12),i=r(48);e.exports=function(e,t,r){t in e?n.f(e,t,i(0,r)):e[t]=r}},/* 120 */
/***/
function(e,t,r){var n=r(72),i=r(8)("iterator"),o=r(63);e.exports=r(27).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[n(e)]}},/* 121 */
/***/
function(e,t,r){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var n=r(306);e.exports=function(e,t){return new(n(e))(t)}},/* 122 */
/***/
function(e,t,r){"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var n=r(15),i=r(51),o=r(13);e.exports=function(e){for(var t=n(this),r=o(t.length),s=arguments.length,a=i(s>1?arguments[1]:void 0,r),u=s>2?arguments[2]:void 0,c=void 0===u?r:i(u,r);c>a;)t[a++]=e;return t}},/* 123 */
/***/
function(e,t,r){"use strict";var n=r(44),i=r(165),o=r(63),s=r(24);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
e.exports=r(114)(Array,"Array",function(e,t){this._t=s(e),// target
this._i=0,// next index
this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,r):"values"==t?i(0,e[r]):i(0,[r,e[r]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
o.Arguments=o.Array,n("keys"),n("values"),n("entries")},/* 124 */
/***/
function(e,t,r){var n,i,o,s=r(28),a=r(155),u=r(106),c=r(102),f=r(4),l=f.process,d=f.setImmediate,p=f.clearImmediate,y=f.MessageChannel,h=f.Dispatch,v=0,g={},b=function(){var e=+this;
// eslint-disable-next-line no-prototype-builtins
if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},m=function(e){b.call(e.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
d&&p||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return g[++v]=function(){
// eslint-disable-next-line no-new-func
a("function"==typeof e?e:Function(e),t)},n(v),v},p=function(e){delete g[e]},
// Node.js 0.8-
"process"==r(29)(l)?n=function(e){l.nextTick(s(b,e,1))}:h&&h.now?n=function(e){h.now(s(b,e,1))}:y?(i=new y,o=i.port2,i.port1.onmessage=m,n=s(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",m,!1)):n="onreadystatechange"in c("script")?function(e){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(s(b,e,1),0)}),e.exports={set:d,clear:p}},/* 125 */
/***/
function(e,t,r){var n=r(4),i=r(124).set,o=n.MutationObserver||n.WebKitMutationObserver,s=n.process,a=n.Promise,u="process"==r(29)(s);e.exports=function(){var e,t,r,c=function(){var n,i;for(u&&(n=s.domain)&&n.exit();e;){i=e.fn,e=e.next;try{i()}catch(n){throw e?r():t=void 0,n}}t=void 0,n&&n.enter()};
// Node.js
if(u)r=function(){s.nextTick(c)};else if(!o||n.navigator&&n.navigator.standalone)if(a&&a.resolve){
// Promise.resolve without an argument throws an error in LG WebOS 2
var f=a.resolve(void 0);r=function(){f.then(c)}}else r=function(){
// strange IE + webpack dev server bug - use .call(global)
i.call(n,c)};else{var l=!0,d=document.createTextNode("");new o(c).observe(d,{characterData:!0}),// eslint-disable-line no-new
r=function(){d.data=l=!l}}return function(n){var i={fn:n,next:void 0};t&&(t.next=i),e||(e=i,r()),t=i}}},/* 126 */
/***/
function(e,t,r){"use strict";function PromiseCapability(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=n(t),this.reject=n(r)}
// 25.4.1.5 NewPromiseCapability(C)
var n=r(16);e.exports.f=function(e){return new PromiseCapability(e)}},/* 127 */
/***/
function(e,t,r){"use strict";
// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(e,t,r){var n,i,o,s=new Array(r),a=8*r-t-1,u=(1<<a)-1,c=u>>1,f=23===t?k(2,-24)-k(2,-77):0,l=0,d=e<0||0===e&&1/e<0?1:0;for(e=M(e),
// eslint-disable-next-line no-self-compare
e!=e||e===P?(
// eslint-disable-next-line no-self-compare
i=e!=e?1:0,n=u):(n=L(x(e)/E),e*(o=k(2,-n))<1&&(n--,o*=2),e+=n+c>=1?f/o:f*k(2,1-c),e*o>=2&&(n++,o/=2),n+c>=u?(i=0,n=u):n+c>=1?(i=(e*o-1)*k(2,t),n+=c):(i=e*k(2,c-1)*k(2,t),n=0));t>=8;s[l++]=255&i,i/=256,t-=8);for(n=n<<t|i,a+=t;a>0;s[l++]=255&n,n/=256,a-=8);return s[--l]|=128*d,s}function unpackIEEE754(e,t,r){var n,i=8*r-t-1,o=(1<<i)-1,s=o>>1,a=i-7,u=r-1,c=e[u--],f=127&c;for(c>>=7;a>0;f=256*f+e[u],u--,a-=8);for(n=f&(1<<-a)-1,f>>=-a,a+=t;a>0;n=256*n+e[u],u--,a-=8);if(0===f)f=1-s;else{if(f===o)return n?NaN:c?-P:P;n+=k(2,t),f-=s}return(c?-1:1)*n*k(2,f-t)}function unpackI32(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function packI8(e){return[255&e]}function packI16(e){return[255&e,e>>8&255]}function packI32(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function packF64(e){return packIEEE754(e,52,8)}function packF32(e){return packIEEE754(e,23,4)}function addGetter(e,t,r){h(e[b],t,{get:function(){return this[r]}})}function get(e,t,r,n){var i=+r,o=p(i);if(o+t>e[U])throw S(m);var s=e[A]._b,a=o+e[D],u=s.slice(a,a+t);return n?u:u.reverse()}function set(e,t,r,n,i,o){var s=+r,a=p(s);if(a+t>e[U])throw S(m);for(var u=e[A]._b,c=a+e[D],f=n(+i),l=0;l<t;l++)u[c+l]=f[o?l:t-l-1]}var n=r(4),i=r(11),o=r(43),s=r(91),a=r(18),u=r(57),c=r(5),f=r(55),l=r(33),d=r(13),p=r(174),y=r(53).f,h=r(12).f,v=r(122),g=r(61),b="prototype",m="Wrong index!",_=n.ArrayBuffer,R=n.DataView,w=n.Math,S=n.RangeError,P=n.Infinity,O=_,M=w.abs,k=w.pow,L=w.floor,x=w.log,E=w.LN2,A=i?"_b":"buffer",U=i?"_l":"byteLength",D=i?"_o":"byteOffset";if(s.ABV){if(!c(function(){_(1)})||!c(function(){new _(-1)})||c(function(){// eslint-disable-line no-new
// eslint-disable-line no-new
// eslint-disable-line no-new
return new _,new _(1.5),new _(NaN),"ArrayBuffer"!=_.name})){_=function(e){return f(this,_),new O(p(e))};for(var I,j=_[b]=O[b],T=y(O),C=0;T.length>C;)(I=T[C++])in _||a(_,I,O[I]);o||(j.constructor=_)}
// iOS Safari 7.x bug
var F=new R(new _(2)),N=R[b].setInt8;F.setInt8(0,2147483648),F.setInt8(1,2147483649),!F.getInt8(0)&&F.getInt8(1)||u(R[b],{setInt8:function(e,t){N.call(this,e,t<<24>>24)},setUint8:function(e,t){N.call(this,e,t<<24>>24)}},!0)}else _=function(e){f(this,_,"ArrayBuffer");var t=p(e);this._b=v.call(new Array(t),0),this[U]=t},R=function(e,t,r){f(this,R,"DataView"),f(e,_,"DataView");var n=e[U],i=l(t);if(i<0||i>n)throw S("Wrong offset!");if(r=void 0===r?n-i:d(r),i+r>n)throw S("Wrong length!");this[A]=e,this[D]=i,this[U]=r},i&&(addGetter(_,"byteLength","_l"),addGetter(R,"buffer","_b"),addGetter(R,"byteLength","_l"),addGetter(R,"byteOffset","_o")),u(R[b],{getInt8:function(e){return get(this,1,e)[0]<<24>>24},getUint8:function(e){return get(this,1,e)[0]},getInt16:function(e){var t=get(this,2,e,arguments[1]);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=get(this,2,e,arguments[1]);return t[1]<<8|t[0]},getInt32:function(e){return unpackI32(get(this,4,e,arguments[1]))},getUint32:function(e){return unpackI32(get(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return unpackIEEE754(get(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return unpackIEEE754(get(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){set(this,1,e,packI8,t)},setUint8:function(e,t){set(this,1,e,packI8,t)},setInt16:function(e,t){set(this,2,e,packI16,t,arguments[2])},setUint16:function(e,t){set(this,2,e,packI16,t,arguments[2])},setInt32:function(e,t){set(this,4,e,packI32,t,arguments[2])},setUint32:function(e,t){set(this,4,e,packI32,t,arguments[2])},setFloat32:function(e,t){set(this,4,e,packF32,t,arguments[2])},setFloat64:function(e,t){set(this,8,e,packF64,t,arguments[2])}});g(_,"ArrayBuffer"),g(R,"DataView"),a(R[b],s.VIEW,!0),t.ArrayBuffer=_,t.DataView=R},/* 128 */
/***/
function(e,t,r){"use strict";var n=r(418)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
r(183)(String,"String",function(e){this._t=String(e),// target
this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},/* 129 */
/***/
function(e,t){
// 7.1.4 ToInteger
var r=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:r)(e)}},/* 130 */
/***/
function(e,t){
// 7.2.1 RequireObjectCoercible(argument)
e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},/* 131 */
/***/
function(e,t,r){var n=r(36),i=r(17).document,o=n(i)&&n(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},/* 132 */
/***/
function(e,t,r){
// 7.1.1 ToPrimitive(input [, PreferredType])
var n=r(36);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},/* 133 */
/***/
function(e,t,r){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var n=r(41),i=r(420),o=r(137),s=r(135)("IE_PROTO"),a=function(){},u=function(){
// Thrash, waste and sodomy: IE GC bug
var e,t=r(131)("iframe"),n=o.length;for(t.style.display="none",r(188).appendChild(t),t.src="javascript:",// eslint-disable-line no-script-url
// createDict = iframe.contentWindow.Object;
// html.removeChild(iframe);
e=t.contentWindow.document,e.open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;n--;)delete u.prototype[o[n]];return u()};e.exports=Object.create||function(e,t){var r;
// add "__proto__" for Object.getPrototypeOf polyfill
return null!==e?(a.prototype=n(e),r=new a,a.prototype=null,r[s]=e):r=u(),void 0===t?r:i(r,t)}},/* 134 */
/***/
function(e,t,r){
// 7.1.15 ToLength
var n=r(129),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},/* 135 */
/***/
function(e,t,r){var n=r(136)("keys"),i=r(96);e.exports=function(e){return n[e]||(n[e]=i(e))}},/* 136 */
/***/
function(e,t,r){var n=r(10),i=r(17),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:r(73)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},/* 137 */
/***/
function(e,t){
// IE 8- don't enum bug keys
e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},/* 138 */
/***/
function(e,t,r){"use strict";function PromiseCapability(e){var t,r;this.promise=new e(function(e,n){if(void 0!==t||void 0!==r)throw TypeError("Bad Promise constructor");t=e,r=n}),this.resolve=n(t),this.reject=n(r)}
// 25.4.1.5 NewPromiseCapability(C)
var n=r(95);e.exports.f=function(e){return new PromiseCapability(e)}},/* 139 */
/***/
function(e,t){t.f=Object.getOwnPropertySymbols},/* 140 */
/***/
function(e,t,r){t.f=r(22)},/* 141 */
/***/
function(e,t,r){var n=r(17),i=r(10),o=r(73),s=r(140),a=r(40).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:s.f(e)})}},/* 142 */
/***/
function(e,t,r){var n=r(78),i=r(74),o=r(46),s=r(132),a=r(59),u=r(184),c=Object.getOwnPropertyDescriptor;t.f=r(45)?c:function(e,t){if(e=o(e),t=s(t,!0),u)try{return c(e,t)}catch(e){}if(a(e,t))return i(!n.f.call(e,t),e[t])}},/* 143 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.runtimeUtils={runtimeDescriptor:{},runtimeCapabilities:{constraints:{}}}},/* 144 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.runtimeConfiguration={
// TODO this should be changed with the definition used for indexeddb
// look at: https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore
// Now we are using the definition for Dexie; (http://dexie.org/docs/Version/Version.stores())
storageSchemas:{capabilities:{capabilities:"key,version,value"},subscriptions:{subscriptions:"key,version,value"},runtime:{"runtime:URL":"key,version,value","p2pHandler:URL":"key,version,value"},registry:{"registry:DataObjectURLs":"key,version,value","registry:HypertyURLs":"key,version,value"},cryptoManager:{userAsymmetricKey:"key,version,value",dataObjectSessionKeys:"key,version,value"},identity:{accessTokens:"key,version,value",identities:"userURL, userProfile.email, userProfile.userURL, userProfile.name"},runtimeCatalogue:{runtimeCatalogue:"&cguid, accessControlPolicy, constraints, dataObjects, hypertyType, objectName, sourcePackage, version"},policy:{"rethink:activePolicy":"key,version,value","rethink:groups":"key,version,value","rethink:userPolicies":"key,version,value","rethink:spPolicies":"key,version,value"},syncherManager:{"syncherManager:ObjectURLs":"key,version,value"},hypertyResources:{hypertyResources:"&resourceURL, name, contentUrl, content, created, reporter, resourceType"}},runtimeURLS:{registry:{prefix:"hyperty-runtime://",suffix:"registry"},identityModule:{prefix:"hyperty-runtime://",suffix:"/idm"},runtimeUA:{prefix:"hyperty-runtime://",suffix:"/ua"},catalogue:{prefix:"hyperty-runtime://",suffix:"/catalogue"},graphConnector:{prefix:"hyperty-runtime://",suffix:"/graph"},syncManager:{prefix:"hyperty-runtime://",suffix:"/sm"}},catalogueURLs:{protocolstub:{prefix:"hyperty-catalogue://catalogue.",suffix:"/.well-known/protocolstub/",fallback:"hyperty-catalogue://catalogue.%domain%/.well-known/protocolstub/"},idpProxy:{prefix:"hyperty-catalogue://catalogue.",suffix:"/.well-known/idp-proxy/",fallback:"hyperty-catalogue://catalogue.%domain%/.well-known/idp-proxy/"}},msgNodeURL:{prefix:"domain://msg-node.",suffix:"",hypertyAddressAllocation:"/hyperty-address-allocation",objectAddressAllocation:"/object-address-allocation",subscriptionManagement:"/sm"},domainRegistryURL:{prefix:"domain://registry.",suffix:""},globalRegistryURL:"global://registry."}},/* 145 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=function(){function Operators(){(0,i.default)(this,Operators)}return(0,s.default)(Operators,[{key:"and",value:function(e){return e[0]&&e[1]}},{key:"between",value:function(e){var t=parseInt(e[0][0]),r=parseInt(e[0][1]),n=e[1];return r<t&&(n=n<t?n+=2400:n,r+=2400),n>t&&n<r}},{key:"equals",value:function(e){return"*"===String(e[0])||String(e[0])===String(e[1])}},{key:"greaterThan",value:function(e){return e[1]>e[0]}},{key:"in",value:function(e){return e[0].indexOf(e[1])>-1}},{key:"lessThan",value:function(e){return e[1]<e[0]}},{key:"not",value:function(e){return!e[0]}},{key:"or",value:function(e){return e[0]||e[1]}}]),Operators}();t.default=a,e.exports=t.default},/* 146 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=r(145),u=_interopRequireDefault(a),c=function(){/**
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
return(0,s.default)(Condition,[{key:"isApplicable",value:function(e,t){e[this.attribute]={message:t};var r=e[this.attribute],n=void 0;return"in"!==this.operator||Array.isArray(this.params)?this.operators[this.operator]([this.params,r]):(n=e.getGroup(this.params,t.to),this.operators[this.operator]([n,r]))}}]),Condition}();/**
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
t.default=c,e.exports=t.default},/* 147 */
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
e.exports=r},/* 148 */
/***/
function(e,t,r){e.exports=!r(11)&&!r(5)(function(){return 7!=Object.defineProperty(r(102)("div"),"a",{get:function(){return 7}}).a})},/* 149 */
/***/
function(e,t,r){t.f=r(8)},/* 150 */
/***/
function(e,t,r){var n=r(23),i=r(24),o=r(81)(!1),s=r(104)("IE_PROTO");e.exports=function(e,t){var r,a=i(e),u=0,c=[];for(r in a)r!=s&&n(a,r)&&c.push(r);
// Don't enum bug & hidden keys
for(;t.length>u;)n(a,r=t[u++])&&(~o(c,r)||c.push(r));return c}},/* 151 */
/***/
function(e,t,r){var n=r(12),i=r(3),o=r(50);e.exports=r(11)?Object.defineProperties:function(e,t){i(e);for(var r,s=o(t),a=s.length,u=0;a>u;)n.f(e,r=s[u++],t[r]);return e}},/* 152 */
/***/
function(e,t,r){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var n=r(24),i=r(53).f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return i(e)}catch(e){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?a(e):i(n(e))}},/* 153 */
/***/
function(e,t,r){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var n=r(50),i=r(82),o=r(71),s=r(15),a=r(70),u=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
e.exports=!u||r(5)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=u({},e)[r]||Object.keys(u({},t)).join("")!=n})?function(e,t){for(// eslint-disable-line no-unused-vars
var r=s(e),u=arguments.length,c=1,f=i.f,l=o.f;u>c;)for(var d,p=a(arguments[c++]),y=f?n(p).concat(f(p)):n(p),h=y.length,v=0;h>v;)l.call(p,d=y[v++])&&(r[d]=p[d]);return r}:u},/* 154 */
/***/
function(e,t,r){"use strict";var n=r(16),i=r(6),o=r(155),s=[].slice,a={},u=function(e,t,r){if(!(t in a)){for(var n=[],i=0;i<t;i++)n[i]="a["+i+"]";
// eslint-disable-next-line no-new-func
a[t]=Function("F,a","return new F("+n.join(",")+")")}return a[t](e,r)};e.exports=Function.bind||function(e){var t=n(this),r=s.call(arguments,1),a=function(){var n=r.concat(s.call(arguments));return this instanceof a?u(t,n.length,n):o(t,n,e)};return i(t.prototype)&&(a.prototype=t.prototype),a}},/* 155 */
/***/
function(e,t){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
e.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},/* 156 */
/***/
function(e,t,r){var n=r(4).parseInt,i=r(62).trim,o=r(108),s=/^[-+]?0[xX]/;e.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(e,t){var r=i(String(e),3);return n(r,t>>>0||(s.test(r)?16:10))}:n},/* 157 */
/***/
function(e,t,r){var n=r(4).parseFloat,i=r(62).trim;e.exports=1/n(r(108)+"-0")!=-1/0?function(e){var t=i(String(e),3),r=n(t);return 0===r&&"-"==t.charAt(0)?-0:r}:n},/* 158 */
/***/
function(e,t,r){var n=r(29);e.exports=function(e,t){if("number"!=typeof e&&"Number"!=n(e))throw TypeError(t);return+e}},/* 159 */
/***/
function(e,t,r){
// 20.1.2.3 Number.isInteger(number)
var n=r(6),i=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&i(e)===e}},/* 160 */
/***/
function(e,t){
// 20.2.2.20 Math.log1p(x)
e.exports=Math.log1p||function(e){return(e=+e)>-1e-8&&e<1e-8?e-e*e/2:Math.log(1+e)}},/* 161 */
/***/
function(e,t,r){
// 20.2.2.16 Math.fround(x)
var n=r(111),i=Math.pow,o=i(2,-52),s=i(2,-23),a=i(2,127)*(2-s),u=i(2,-126),c=function(e){return e+1/o-1/o};e.exports=Math.fround||function(e){var t,r,i=Math.abs(e),f=n(e);
// eslint-disable-next-line no-self-compare
return i<u?f*c(i/u/s)*u*s:(t=(1+s/o)*i,r=t-(t-i),r>a||r!=r?f*(1/0):f*r)}},/* 162 */
/***/
function(e,t,r){
// call something on iterator step with safe closing on error
var n=r(3);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(t){var o=e.return;throw void 0!==o&&n(o.call(e)),t}}},/* 163 */
/***/
function(e,t,r){var n=r(16),i=r(15),o=r(70),s=r(13);e.exports=function(e,t,r,a,u){n(t);var c=i(e),f=o(c),l=s(c.length),d=u?l-1:0,p=u?-1:1;if(r<2)for(;;){if(d in f){a=f[d],d+=p;break}if(d+=p,u?d<0:l<=d)throw TypeError("Reduce of empty array with no initial value")}for(;u?d>=0:l>d;d+=p)d in f&&(a=t(a,f[d],d,c));return a}},/* 164 */
/***/
function(e,t,r){"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var n=r(15),i=r(51),o=r(13);e.exports=[].copyWithin||function(e,t){var r=n(this),s=o(r.length),a=i(e,s),u=i(t,s),c=arguments.length>2?arguments[2]:void 0,f=Math.min((void 0===c?s:i(c,s))-u,s-a),l=1;for(u<a&&a<u+f&&(l=-1,u+=f-1,a+=f-1);f-- >0;)u in r?r[a]=r[u]:delete r[a],a+=l,u+=l;return r}},/* 165 */
/***/
function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},/* 166 */
/***/
function(e,t,r){
// 21.2.5.3 get RegExp.prototype.flags()
r(11)&&"g"!=/./g.flags&&r(12).f(RegExp.prototype,"flags",{configurable:!0,get:r(86)})},/* 167 */
/***/
function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},/* 168 */
/***/
function(e,t,r){var n=r(3),i=r(6),o=r(126);e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t;var r=o.f(e);return(0,r.resolve)(t),r.promise}},/* 169 */
/***/
function(e,t,r){"use strict";var n=r(170),i=r(64);
// 23.1 Map Objects
e.exports=r(90)("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.1.3.6 Map.prototype.get(key)
get:function(e){var t=n.getEntry(i(this,"Map"),e);return t&&t.v},
// 23.1.3.9 Map.prototype.set(key, value)
set:function(e,t){return n.def(i(this,"Map"),0===e?0:e,t)}},n,!0)},/* 170 */
/***/
function(e,t,r){"use strict";var n=r(12).f,i=r(52),o=r(57),s=r(28),a=r(55),u=r(56),c=r(114),f=r(165),l=r(54),d=r(11),p=r(42).fastKey,y=r(64),h=d?"_s":"size",v=function(e,t){
// fast case
var r,n=p(t);if("F"!==n)return e._i[n];
// frozen object case
for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,c){var f=e(function(e,n){a(e,f,t,"_i"),e._t=t,// collection type
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
forEach:function(e){y(this,t);for(var r,n=s(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)
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
l(t)}}},/* 171 */
/***/
function(e,t,r){"use strict";var n=r(170),i=r(64);
// 23.2 Set Objects
e.exports=r(90)("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.2.3.1 Set.prototype.add(value)
add:function(e){return n.def(i(this,"Set"),e=0===e?0:e,e)}},n)},/* 172 */
/***/
function(e,t,r){"use strict";var n,i=r(35)(0),o=r(19),s=r(42),a=r(153),u=r(173),c=r(6),f=r(5),l=r(64),d=s.getWeak,p=Object.isExtensible,y=u.ufstore,h={},v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},g={
// 23.3.3.3 WeakMap.prototype.get(key)
get:function(e){if(c(e)){var t=d(e);return!0===t?y(l(this,"WeakMap")).get(e):t?t[this._i]:void 0}},
// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function(e,t){return u.def(l(this,"WeakMap"),e,t)}},b=e.exports=r(90)("WeakMap",v,g,u,!0,!0);
// IE11 WeakMap frozen keys fix
f(function(){return 7!=(new b).set((Object.freeze||Object)(h),7).get(h)})&&(n=u.getConstructor(v,"WeakMap"),a(n.prototype,g),s.NEED=!0,i(["delete","has","get","set"],function(e){var t=b.prototype,r=t[e];o(t,e,function(t,i){
// store frozen objects on internal weakmap shim
if(c(t)&&!p(t)){this._f||(this._f=new n);var o=this._f[e](t,i);return"set"==e?this:o}return r.call(this,t,i)})}))},/* 173 */
/***/
function(e,t,r){"use strict";var n=r(57),i=r(42).getWeak,o=r(3),s=r(6),a=r(55),u=r(56),c=r(35),f=r(23),l=r(64),d=c(5),p=c(6),y=0,h=function(e){return e._l||(e._l=new v)},v=function(){this.a=[]},g=function(e,t){return d(e.a,function(e){return e[0]===t})};v.prototype={get:function(e){var t=g(this,e);if(t)return t[1]},has:function(e){return!!g(this,e)},set:function(e,t){var r=g(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,function(t){return t[0]===e});return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,o){var c=e(function(e,n){a(e,c,t,"_i"),e._t=t,// collection type
e._i=y++,// collection id
e._l=void 0,// leak store for uncaught frozen objects
void 0!=n&&u(n,r,e[o],e)});return n(c.prototype,{
// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
delete:function(e){if(!s(e))return!1;var r=i(e);return!0===r?h(l(this,t)).delete(e):r&&f(r,this._i)&&delete r[this._i]},
// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function(e){if(!s(e))return!1;var r=i(e);return!0===r?h(l(this,t)).has(e):r&&f(r,this._i)}}),c},def:function(e,t,r){var n=i(o(t),!0);return!0===n?h(e).set(t,r):n[e._i]=r,e},ufstore:h}},/* 174 */
/***/
function(e,t,r){
// https://tc39.github.io/ecma262/#sec-toindex
var n=r(33),i=r(13);e.exports=function(e){if(void 0===e)return 0;var t=n(e),r=i(t);if(t!==r)throw RangeError("Wrong length!");return r}},/* 175 */
/***/
function(e,t,r){
// all object keys, includes non-enumerable and symbols
var n=r(53),i=r(82),o=r(3),s=r(4).Reflect;e.exports=s&&s.ownKeys||function(e){var t=n.f(o(e)),r=i.f;return r?t.concat(r(e)):t}},/* 176 */
/***/
function(e,t,r){"use strict";function flattenIntoArray(e,t,r,u,c,f,l,d){for(var p,y,h=c,v=0,g=!!l&&s(l,d,3);v<u;){if(v in r){if(p=g?g(r[v],v,t):r[v],y=!1,i(p)&&(y=p[a],y=void 0!==y?!!y:n(p)),y&&f>0)h=flattenIntoArray(e,t,p,o(p.length),h,f-1)-1;else{if(h>=9007199254740991)throw TypeError();e[h]=p}h++}v++}return h}
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var n=r(83),i=r(6),o=r(13),s=r(28),a=r(8)("isConcatSpreadable");e.exports=flattenIntoArray},/* 177 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-string-pad-start-end
var n=r(13),i=r(110),o=r(32);e.exports=function(e,t,r,s){var a=String(o(e)),u=a.length,c=void 0===r?" ":String(r),f=n(t);if(f<=u||""==c)return a;var l=f-u,d=i.call(c,Math.ceil(l/c.length));return d.length>l&&(d=d.slice(0,l)),s?d+a:a+d}},/* 178 */
/***/
function(e,t,r){var n=r(50),i=r(24),o=r(71).f;e.exports=function(e){return function(t){for(var r,s=i(t),a=n(s),u=a.length,c=0,f=[];u>c;)o.call(s,r=a[c++])&&f.push(e?[r,s[r]]:s[r]);return f}}},/* 179 */
/***/
function(e,t,r){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=r(72),i=r(180);e.exports=function(e){return function(){if(n(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},/* 180 */
/***/
function(e,t,r){var n=r(56);e.exports=function(e,t){var r=[];return n(e,!1,r.push,r,t),r}},/* 181 */
/***/
function(e,t){
// https://rwaldron.github.io/proposal-math-extensions/
e.exports=Math.scale||function(e,t,r,n,i){return 0===arguments.length||e!=e||t!=t||r!=r||n!=n||i!=i?NaN:e===1/0||e===-1/0?e:(e-t)*(i-n)/(r-t)+n}},/* 182 */
/***/
function(e,t){},/* 183 */
/***/
function(e,t,r){"use strict";var n=r(73),i=r(21),o=r(185),s=r(58),a=r(75),u=r(419),c=r(97),f=r(189),l=r(22)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,r,y,h,v,g){u(r,t,y);var b,m,_,R=function(e){if(!d&&e in O)return O[e];switch(e){case"keys":case"values":return function(){return new r(this,e)}}return function(){return new r(this,e)}},w=t+" Iterator",S="values"==h,P=!1,O=e.prototype,M=O[l]||O["@@iterator"]||h&&O[h],k=M||R(h),L=h?S?R("entries"):k:void 0,x="Array"==t?O.entries||M:M;if(
// Fix native
x&&(_=f(x.call(new e)))!==Object.prototype&&_.next&&(
// Set @@toStringTag to native iterators
c(_,w,!0),
// fix for some old engines
n||"function"==typeof _[l]||s(_,l,p)),
// fix Array#{values, @@iterator}.name in V8 / FF
S&&M&&"values"!==M.name&&(P=!0,k=function(){return M.call(this)}),
// Define iterator
n&&!g||!d&&!P&&O[l]||s(O,l,k),
// Plug for library
a[t]=k,a[w]=p,h)if(b={values:S?k:R("values"),keys:v?k:R("keys"),entries:L},g)for(m in b)m in O||o(O,m,b[m]);else i(i.P+i.F*(d||P),t,b);return b}},/* 184 */
/***/
function(e,t,r){e.exports=!r(45)&&!r(66)(function(){return 7!=Object.defineProperty(r(131)("div"),"a",{get:function(){return 7}}).a})},/* 185 */
/***/
function(e,t,r){e.exports=r(58)},/* 186 */
/***/
function(e,t,r){var n=r(59),i=r(46),o=r(421)(!1),s=r(135)("IE_PROTO");e.exports=function(e,t){var r,a=i(e),u=0,c=[];for(r in a)r!=s&&n(a,r)&&c.push(r);
// Don't enum bug & hidden keys
for(;t.length>u;)n(a,r=t[u++])&&(~o(c,r)||c.push(r));return c}},/* 187 */
/***/
function(e,t,r){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var n=r(76);
// eslint-disable-next-line no-prototype-builtins
e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},/* 188 */
/***/
function(e,t,r){var n=r(17).document;e.exports=n&&n.documentElement},/* 189 */
/***/
function(e,t,r){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var n=r(59),i=r(77),o=r(135)("IE_PROTO"),s=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),n(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?s:null}},/* 190 */
/***/
function(e,t,r){r(423);for(var n=r(17),i=r(58),o=r(75),s=r(22)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),u=0;u<a.length;u++){var c=a[u],f=n[c],l=f&&f.prototype;l&&!l[s]&&i(l,s,c),o[c]=o.Array}},/* 191 */
/***/
function(e,t,r){
// getting tag from 19.1.3.6 Object.prototype.toString()
var n=r(76),i=r(22)("toStringTag"),o="Arguments"==n(function(){return arguments}()),s=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=s(t=Object(e),i))?r:o?n(t):"Object"==(a=n(t))&&"function"==typeof t.callee?"Arguments":a}},/* 192 */
/***/
function(e,t,r){
// call something on iterator step with safe closing on error
var n=r(41);e.exports=function(e,t,r,i){try{return i?t(n(r)[0],r[1]):t(r)}catch(t){var o=e.return;throw void 0!==o&&n(o.call(e)),t}}},/* 193 */
/***/
function(e,t,r){
// check on default Array iterator
var n=r(75),i=r(22)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||o[i]===e)}},/* 194 */
/***/
function(e,t,r){var n=r(191),i=r(22)("iterator"),o=r(75);e.exports=r(10).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[n(e)]}},/* 195 */
/***/
function(e,t,r){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var n=r(41),i=r(95),o=r(22)("species");e.exports=function(e,t){var r,s=n(e).constructor;return void 0===s||void 0==(r=n(s)[o])?t:i(r)}},/* 196 */
/***/
function(e,t,r){var n,i,o,s=r(65),a=r(429),u=r(188),c=r(131),f=r(17),l=f.process,d=f.setImmediate,p=f.clearImmediate,y=f.MessageChannel,h=f.Dispatch,v=0,g={},b=function(){var e=+this;
// eslint-disable-next-line no-prototype-builtins
if(g.hasOwnProperty(e)){var t=g[e];delete g[e],t()}},m=function(e){b.call(e.data)};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
d&&p||(d=function(e){for(var t=[],r=1;arguments.length>r;)t.push(arguments[r++]);return g[++v]=function(){
// eslint-disable-next-line no-new-func
a("function"==typeof e?e:Function(e),t)},n(v),v},p=function(e){delete g[e]},
// Node.js 0.8-
"process"==r(76)(l)?n=function(e){l.nextTick(s(b,e,1))}:h&&h.now?n=function(e){h.now(s(b,e,1))}:y?(i=new y,o=i.port2,i.port1.onmessage=m,n=s(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(n=function(e){f.postMessage(e+"","*")},f.addEventListener("message",m,!1)):n="onreadystatechange"in c("script")?function(e){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),b.call(e)}}:function(e){setTimeout(s(b,e,1),0)}),e.exports={set:d,clear:p}},/* 197 */
/***/
function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},/* 198 */
/***/
function(e,t,r){var n=r(41),i=r(36),o=r(138);e.exports=function(e,t){if(n(e),i(t)&&t.constructor===e)return t;var r=o.f(e);return(0,r.resolve)(t),r.promise}},/* 199 */
/***/
function(e,t,r){var n=r(22)("iterator"),i=!1;try{var o=[7][n]();o.return=function(){i=!0},
// eslint-disable-next-line no-throw-literal
Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var r=!1;try{var o=[7],s=o[n]();s.next=function(){return{done:r=!0}},o[n]=function(){return s},e(o)}catch(e){}return r}},/* 200 */
/***/
function(e,t,r){e.exports={default:r(439),__esModule:!0}},/* 201 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.log=void 0;var n=r(7),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=i.default.getLogger("address-allocation"),s=i.default.getLogger("Bus"),a=i.default.getLogger("MessageBus"),u=i.default.getLogger("CoreDiscovery"),c=i.default.getLogger("GraphConnector"),f=i.default.getLogger("HypertyResourcesStorage"),l=i.default.getLogger("IdentityModule"),d=i.default.getLogger("PEP"),p=i.default.getLogger("P2PConnectionResolve"),y=i.default.getLogger("Registry"),h=i.default.getLogger("RuntimeUA"),v=i.default.getLogger("Loader"),g=i.default.getLogger("Descriptors"),b=i.default.getLogger("DataObjectsStorage"),m=i.default.getLogger("Subscription"),_=i.default.getLogger("SubscriptionManager"),R=i.default.getLogger("ObserverObject"),w=i.default.getLogger("ReporterObject"),S=i.default.getLogger("SynSubscription"),P=i.default.getLogger("SyncherManager"),O=i.default.getLogger("IdentityManager"),M=i.default.getLogger("CryptoManager"),k=i.default.getLogger("Pipeline");t.log=i.default,/**
  0 actual logging methods, ordered and available as:

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
o.setLevel(3),
// Bus
s.setLevel(3),
// MessageBus
a.setLevel(0),
// CoreDiscovery
u.setLevel(5),
// GraphConnector
c.setLevel(5),
// HypertyResourcesStorage
f.setLevel(3),
// IdentityModule
l.setLevel(0),
// PEP
d.setLevel(3),
// P2PConnectionResolve
p.setLevel(3),
// Registry
y.setLevel(3),
// RuntimeUA
h.setLevel(3),
// Loader
v.setLevel(3),
// Descriptors
g.setLevel(3),
// DataObjectsStorage
b.setLevel(3),
// Subscription
m.setLevel(3),
// SubscriptionManager
_.setLevel(3),
// ObserverObject
R.setLevel(3),
// ReporterObject
w.setLevel(3),
// SynSubscription
S.setLevel(3),
// SyncherManager
P.setLevel(3),
// IdentityManager
O.setLevel(3),
// CryptoManager
M.setLevel(3),
// Pipeline
k.setLevel(3)},/* 202 */
/***/
function(e,t,r){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var n=r(186),i=r(137).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},/* 203 */
/***/
function(e,t,r){e.exports={default:r(462),__esModule:!0}},/* 204 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(7),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=f.getLogger("Bus"),d=function(){/* private
  _msgId: number;
  _subscriptions: <url: MsgListener[]>
   _responseTimeOut: number
  _responseCallbacks: <url+id: (msg) => void>
   */
function Bus(){(0,s.default)(this,Bus);var e=this;e._msgId=0,e._subscriptions={},e._responseTimeOut=15e3,//default to 3s
e._responseCallbacks={},e._registerExternalListener()}/**
  * Register listener to receive message when "msg.to === url".
  * Special url "*" for default listener is accepted to intercept all messages.
  * @param {URL} url Address to intercept, tha is in the message "to"
  * @param {Listener} listener listener
  * @return {MsgListener} instance of MsgListener
  */
return(0,u.default)(Bus,[{key:"addListener",value:function(e,t){var r=this,n=new p(r._subscriptions,e,t),i=r._subscriptions[e];return i||(i=[],r._subscriptions[e]=i),i.push(n),n}},{key:"addResponseListener",value:function(e,t,r){this._responseCallbacks[e+t]=r}},{key:"removeResponseListener",value:function(e,t){delete this._responseCallbacks[e+t]}},{key:"removeAllListenersOf",value:function(e){delete this._subscriptions[e]}},{key:"bind",value:function(e,t,r){var n=this,i=this;return{thisListener:i.addListener(e,function(e){r.postMessage(e)}),targetListener:r.addListener(t,function(e){i.postMessage(e)}),unbind:function(){n.thisListener.remove(),n.targetListener.remove()}}}},{key:"_publishOnDefault",value:function(e){
//is there any "*" (default) listeners?
var t=this._subscriptions["*"];t&&this._publishOn(t,e)}},{key:"_publishOn",value:function(e,t){e.forEach(function(e){e._callback(t)})}},{key:"_responseCallback",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=this;
//automatic management of response handlers
if(t){var i=e.from+e.id;n._responseCallbacks[i]=t,r&&setTimeout(function(){var t=n._responseCallbacks[i];if(delete n._responseCallbacks[i],t){t({id:e.id,type:"response",body:{code:408,desc:"Response timeout!",value:e}})}},n._responseTimeOut)}}},{key:"_onResponse",value:function(e){var t=this;if("response"===e.type){var r=e.to+e.id,n=t._responseCallbacks[r];if(e.body.code>=200&&
//if it's a provisional response, don't delete response listener
delete t._responseCallbacks[r],n)return n(e),!0}return!1}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?t._publishOn(r,e):t._publishOnDefault(e)}}},{key:"_genId",value:function(e){
//TODO: how do we manage message ID's? Should it be a global runtime counter, or per URL address?
//Global counter will not work, because there will be multiple MiniBus instances!
//Per URL, can be a lot of data to maintain!
//Maybe a counter per MiniBus instance. This is the assumed solution for now.
e.id&&0!==e.id||(this._msgId++,e.id=this._msgId)}},{key:"postMessage",value:function(e,t){}},{key:"postMessageWithRetries",value:function(e,t,r){var n=this,o=0,s=function(){return new i.default(function(t,i){n.postMessage(e,function(n){408===n.body.code||500===n.body.code?i():(l.info("[Bus.postMessageWithRetries] msg delivered: ",e),r(n),t())})})};!function tryAgain(){s().then(function(){},function(){if(l.warn("[Bus.postMessageWithRetries] Message Bounced (retry "+o+"): '",e),!(o++<t)){var r="[Error] Message Bounced (delivery attempts "+t+"): '";throw new Error(r+e)}tryAgain()})}()}},{key:"_onPostMessage",value:function(e){}},{key:"_registerExternalListener",value:function(){}}]),Bus}(),p=function(){/* private
  _subscriptions: <string: MsgListener[]>;
  _url: string;
  _callback: (msg) => void;
  */
function MsgListener(e,t,r){(0,s.default)(this,MsgListener);var n=this;n._subscriptions=e,n._url=t,n._callback=r}return(0,u.default)(MsgListener,[{key:"remove",/**
     * Remove this listener from the Bus
     */
value:function(){var e=this,t=e._subscriptions[e._url];if(t){var r=t.indexOf(e);t.splice(r,1),
//if there are no listeners, remove the subscription entirely.
0===t.length&&delete e._subscriptions[e._url]}}},{key:"url",get:function(){return this._url}}]),MsgListener}();t.default=d,e.exports=t.default},/* 205 */
/***/
function(e,t,r){
// version: 0.9.0
// date: Tue Jul 10 2018 10:48:18 GMT+0100 (Western European Summer Time)
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
!function(t,r){e.exports=r()}("undefined"!=typeof self&&self,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=199)}({0:function(e,t){var r=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},1:function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},10:function(e,t){var r={}.hasOwnProperty;e.exports=function(e,t){return r.call(e,t)}},11:function(e,t,r){var n=r(8),i=r(16);e.exports=r(4)?function(e,t,r){return n.f(e,t,i(1,r))}:function(e,t,r){return e[t]=r,e}},123:function(e,t){!function(){"use strict";function e(e,t,r,n,i,o){function s(e,n){if(s.delay=n,!s.pause&&u.changeset.length>0){if(!e){var i=u.changeset.filter(function(e){return!r||r.indexOf(e.type)>=0});i.length>0&&t(i)}u.changeset=[]}}var a,u=this;return s.pause=i,s.delay=o,u.get=function(e,t){return"__observer__"===t?u:"unobserve"===t?function(){return Object.unobserve(e),e}:"deliver"===t?s:e[t]},u.target=e,u.changeset=[],u.target.__observerCallbacks__||(Object.defineProperty(e,"__observerCallbacks__",{enumerable:!1,configurable:!0,writable:!1,value:[]}),Object.defineProperty(e,"__observers__",{enumerable:!1,configurable:!0,writable:!1,value:[]})),u.target.__observerCallbacks__.push(t),u.target.__observers__.push(this),a=new Proxy(e,u),s(!1,o),a}Object.observe||"function"!=typeof Proxy||(e.prototype.deliver=function(){return this.get(null,"deliver")},e.prototype.set=function(e,t,r){var n=e[t],i=void 0===n?"add":"update";if(e[t]=r,e.__observers__.indexOf(this)>=0&&(!this.acceptlist||this.acceptlist.indexOf(i)>=0)){var o={object:e,name:t,type:i},s=0===this.changeset.length,a=this.deliver();"update"===i&&(o.oldValue=n),this.changeset.push(o),s&&a(!1,"number"==typeof a.delay?a.delay:10)}return!0},e.prototype.deleteProperty=function(e,t){var r=e[t];if(delete e[t],e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("delete")>=0){var n={object:e,name:t,type:"delete",oldValue:r},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},e.prototype.defineProperty=function(e,t,r){if(Object.defineProperty(e,t,r),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("reconfigure")>=0){var n={object:e,name:t,type:"reconfigure"},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},e.prototype.setPrototypeOf=function(e,t){var r=Object.getPrototypeOf(e);if(Object.setPrototypeOf(e,t),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("setPrototype")>=0){var n={object:e,name:"__proto__",type:"setPrototype",oldValue:r},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},e.prototype.preventExtensions=function(e){if(Object.preventExtensions(e),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("preventExtensions")>=0){var t={object:e,type:"preventExtensions"},r=0===this.changeset.length,n=this.deliver();this.changeset.push(t),r&&n(!1,"number"==typeof n.delay?n.delay:10)}return!0},Object.observe=function(t,r,n,i,o,s){return new e(t,r,n,i,o,s)},Object.unobserve=function(e,t){if(e.__observerCallbacks__){if(!t)return e.__observerCallbacks__.splice(0,e.__observerCallbacks__.length),void e.__observers__.splice(0,e.__observers__.length);e.__observerCallbacks__.forEach(function(r,n){t===r&&(e.__observerCallbacks__.splice(n,1),delete e.__observers__[n].callback,e.__observers__.splice(n,1))})}},Array.observe=function(e,t,r,n,i,o){if(!(e instanceof Array||Array.isArray(e)))throw new TypeError("First argument to Array.observer is not an Array");r=r||["add","update","delete","splice"];var s=new Proxy(e,{get:function(t,n){return"unobserve"===n?function(e){return e?Object.unobserve(t,e):t.unobserve()}:"splice"===n?function(n,i){if("number"!=typeof n||"number"!=typeof i)throw new TypeError("First two arguments to Array splice are not number, number");var o=this.slice(n,n+i),s=arguments.length>1?arguments.length-2:0,u={object:e,type:"splice",index:n,removed:o,addedCount:s};if(t.splice.apply(t,arguments),r.indexOf("splice")>=0){n=0===a.__observer__.changeset.length;var c=a.__observer__.deliver();a.__observer__.changeset.push(u),n&&c(!1,"number"==typeof c.delay?c.delay:10)}}:"push"===n?function(e){return this.splice(this.length,0,e)}:"pop"===n?function(){return this.splice(this.length-1,1)}:"unshift"===n?function(e){return this.splice(0,0,e)}:"shift"===n?function(){return this.splice(0,1)}:t[n]}}),a=Object.observe(s,function(e){var n=e.filter(function(e){return"length"!==e.name&&"add"!==e.name&&(!r||r.indexOf(e.type)>=0)});n.length>0&&t(n)},r,n,i,o);return a},Array.unobserve=function(e,t){return e.unobserve(t)}),Object.deepObserve=function(e,t,r){function o(e,r){Object.keys(e).forEach(function(i){if(("object"===n(e[i])||"array"===n(e[i]))&&!e[i].hasOwnProperty("__observers__")){var o=r.slice(0);o.push(i),e[i]=Object.deepObserve(e[i],t,o)}})}var n=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};return o(e,r=r||[]),Object.observe(e,function(n){var i=[];n.forEach(function(e){var t=(r.length>0?r.join(".")+".":"")+e.name;"update"!==e.type&&"add"!==e.type||o(e.object,r),i.push({name:e.name,object:e.object,type:e.type,oldValue:e.oldValue,newValue:e.object[e.name],keypath:t}),function e(t,r,n,o,s){o instanceof Object?Object.keys(o).forEach(function(a){if(!n||n[a]!==o[a]){var u=n&&void 0!==n[a]?n[a]:void 0,c=void 0===u?"add":"update",f=s+"."+a;i.push({name:t,object:r,type:c,oldValue:u,newValue:o[a],keypath:f}),e(t,r,u,o[a],f)}}):n instanceof Object&&Object.keys(n).forEach(function(a){var u=null===o?"update":"delete",c=s+"."+a;i.push({name:t,object:r,type:u,oldValue:n[a],newValue:o,keypath:c}),e(t,r,n[a],void 0,c)})}(e.name,e.object,e.oldValue,e.object[e.name],t)}),t(i)})}}()},13:function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},14:function(e,t,r){var n=r(24);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,i){return e.call(t,r,n,i)}}return function(){return e.apply(t,arguments)}}},16:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},199:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WatchingYou=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(200));t.WatchingYou=n.default},200:function(t,r,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(n(3)),s=i(n(5));n(123);var a=function(){function e(){(0,o.default)(this,e),this._watching={},this._observers=[]}return(0,s.default)(e,[{key:"watch",value:function(e,t){var r=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return this._watching[e]=n?Object.deepObserve(t,function(t){t.every(function(t){r._fireEvent(e,t)})}):Object.observe(t,function(t){t.every(function(t){r._fireEvent(e,t)})}),this._watching[e]}},{key:"observe",value:function(e,t){this._observers.push({key:e,callback:t})}},{key:"_fireEvent",value:function(e,t){this._observers.filter(function(t){return t.key===e}).forEach(function(e){e.callback(t)})}}]),e}();r.default=a,t.exports=r.default},24:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},27:function(e,t,r){var n=r(7);e.exports=function(e,t){if(!n(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!n(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!n(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},28:function(e,t,r){var n=r(7),i=r(1).document,o=n(i)&&n(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},3:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},39:function(e,t,r){e.exports=!r(4)&&!r(13)(function(){return 7!=Object.defineProperty(r(28)("div"),"a",{get:function(){return 7}}).a})},4:function(e,t,r){e.exports=!r(13)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},5:function(t,r,n){"use strict";r.__esModule=!0;var i=function(e){return e&&e.__esModule?e:{default:e}}(n(59));r.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,i.default)(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()},59:function(e,t,r){e.exports={default:r(61),__esModule:!0}},6:function(e,t,r){var n=r(1),i=r(0),o=r(14),s=r(11),a=r(10),u=function(e,t,r){var c,f,l,d=e&u.F,p=e&u.G,y=e&u.S,h=e&u.P,v=e&u.B,g=e&u.W,b=p?i:i[t]||(i[t]={}),m=b.prototype,_=p?n:y?n[t]:(n[t]||{}).prototype;for(c in p&&(r=t),r)(f=!d&&_&&void 0!==_[c])&&a(b,c)||(l=f?_[c]:r[c],b[c]=p&&"function"!=typeof _[c]?r[c]:v&&f?o(l,n):g&&_[c]==l?function(e){var t=function(t,r,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,r)}return new e(t,r,n)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(l):h&&"function"==typeof l?o(Function.call,l):l,h&&((b.virtual||(b.virtual={}))[c]=l,e&u.R&&m&&!m[c]&&s(m,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},61:function(e,t,r){r(62);var n=r(0).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},62:function(e,t,r){var n=r(6);n(n.S+n.F*!r(4),"Object",{defineProperty:r(8).f})},7:function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},8:function(e,t,r){var n=r(9),i=r(39),o=r(27),s=Object.defineProperty;t.f=r(4)?Object.defineProperty:function(e,t,r){if(n(e),t=o(t,!0),n(r),i)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(e[t]=r.value),e}},9:function(e,t,r){var n=r(7);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}}})})},/* 206 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(37),i=_interopRequireDefault(n),o=r(472),s=_interopRequireDefault(o),a=r(9),u=_interopRequireDefault(a),c=r(98),f=_interopRequireDefault(c),l=r(1),d=_interopRequireDefault(l),p=r(2),y=_interopRequireDefault(p),h=r(7),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(h),g=r(14),b=r(205),m=v.getLogger("IdentityModule"),_=function(){function Identities(e,t){(0,d.default)(this,Identities);var r=this;r._watchingYou=new b.WatchingYou,r._storageManager=t,r._guid,r._type=e,r._identities={},r._accessTokens=r.watchingYou.watch("accessTokens",{},!0)}return(0,y.default)(Identities,[{key:"reset",value:function(){this._identities={},this.currentIdentity=void 0,this.defaultIdentity=void 0}},{key:"getIdentity",value:function(e){return(0,f.default)({},this._identities[e])}},{key:"loadIdentities",value:function(){var e=this;return new u.default(function(t){e._storageManager.get(null,null,"identities").then(function(r){m.info("[Identities.Load Identities] identities: ",r),r&&(e._identities=r,
// let's set as default identity the one that expires later
e.identifiers.forEach(function(t){var r=(0,g.secondsSinceEpoch)(),n=e._identities[t],i=n.expires;
//            if (!identity.hasOwnProperty('interworking')
//            || !identity.interworking) {
e.defaultIdentity=t,parseInt(i)>r&&(e.defaultIdentity.expires=parseInt(i),e.currentIdentity=t)})),t()})})}},{key:"loadAccessTokens",value:function(){var e=this;return new u.default(function(t){e._storageManager.get("accessTokens").then(function(r){r&&(e._accessTokens=r),t()})})}},{key:"addIdentity",value:function(e){var t=this,r=this;return new u.default(function(n,i){if(r._isValid(e)){var o=e.identifiers[0];(0,f.default)(t._identities[o],e),t._storeIdentity(e).then(function(){t._identities[o].status="created",n()})}else i("[Identities.addIdentity] invalid IdAssertion")})}},{key:"addAssertion",value:function(e){var t=this,r=this;return new u.default(function(n,i){if(r._isValid(e)){e.userProfile.guid=r._guid;var o=e.userProfile.userURL;r.identities[o]?r.identities[o]=e:r._identities[o]=e,r._store().then(function(){t._identities[o].status="created",0==r.defaultIdentity&&(r.defaultIdentity=o),n(e)})}else i("[Identities.addAssertion] invalid IdAssertion: ",e)})}},{key:"removeIdentity",value:function(e){var t=this;return new u.default(function(r,n){delete t.identities[e],t._store().then(function(){r()})})}},{key:"addAccessToken",value:function(e){var t=this;return m.info("[Identities.addAccessToken] ",e),new u.default(function(r,n){t._isValidAccessToken(e)?(
//        let newAccessToken = deepClone(accessToken);
t._accessTokens[e.domain]=e,t._storeAccessTokens().then(function(){t._accessTokens[e.domain].status="created",r(e)})):n("[Identities.addIdentity] invalid AccessToken: ",e)})}},{key:"setAccessTokenInProgress",value:function(e){this._accessTokens[e]?this._accessTokens[e].status="in-progress":this._accessTokens[e]={status:"in-progress"}}},{key:"getAccessToken",value:function(e,t){var r=this._accessTokens[e];return r?t.every(function(e){return-1!=r.resources.indexOf(e)})?this._accessTokens[e]:new Error("[Identities.getAccessToken] Not found for ",e):void 0}},{key:"updateAssertion",value:function(e){var t=this;return new u.default(function(r){var n=e.userProfile.userUrl;if(!t.identities[n])return reject("[Identities.updateAssertion] Identity not found for ",n);t.identities[n]=e,t._store().then(function(){r()})})}},{key:"addIdAssertion",value:function(e,t,r,n){var i=this,o=new R(t,r,n);i.idAssertionList.push(o)}},{key:"_isValid",value:function(e){if(!e.hasOwnProperty("assertion"))return!1;var t=e.assertion.split(".");
//verify if the token contains the 3 components, or just the assertion
try{t[1]?(0,g.decode)(t[1]):(0,g.decode)(e.assertion)}catch(e){return!1}return!0}},{key:"_isValidAccessToken",value:function(e){return!!e.hasOwnProperty("accessToken")&&(!!e.hasOwnProperty("domain")&&(!(!e.hasOwnProperty("resources")||!Array.isArray(e.resources))&&(!(!e.hasOwnProperty("expires")||!(0,s.default)(e.expires))&&!!e.hasOwnProperty("input"))))}},{key:"_store",value:function(){var e=this,t=this;return new u.default(function(r,n){var o=(0,i.default)(e._identities).map(function(r){return t._storageManager.set(r,0,e._identities[r],"identities")});u.default.all(o).then(function(){r()}).catch(function(e){n("On _sendReporterSessionKey from method storeIdentity error: "+e)})})}},{key:"_storeAccessTokens",value:function(){var e=this;return new u.default(function(t,r){var n=(0,g.deepClone)(e._accessTokens);e._storageManager.set("accessTokens",0,n).then(function(){t()}).catch(function(e){r("On _sendReporterSessionKey from method storeIdentity error: "+e)})})}},{key:"identities",get:function(){return this._identities}},{key:"accessTokens",get:function(){return this._accessTokens}},{key:"watchingYou",get:function(){return this._watchingYou}},{key:"guid",set:function(e){this._guid=e},get:function(){return this._guid}},{key:"defaultIdentity",set:function(e){if(!this.identities[e])throw new Error("[Identities.set defaultIdentity ] Error: identity does not exist here: ",e);this._defaultIdentity=e},get:function(){return!!this._defaultIdentity&&(0,f.default)({},this.identities[this._defaultIdentity])}},{key:"currentIdentity",set:function(e){if(!this.identities[e])throw e;this._currentIdentity=e},get:function(){return(0,f.default)({},this.identities[this._currentIdentity])}},{key:"identifiers",get:function(){return(0,i.default)(this._identities)}}]),Identities}(),R=function(){function IdAssertion(e,t,r){(0,d.default)(this,IdAssertion);var n=this;n._assertion=e,n._idp=t,n._userProfile=r}return(0,y.default)(IdAssertion,[{key:"assertion",get:function(){return this._assertion}},{key:"idp",get:function(){return this._idp}},{key:"userProfile",get:function(){return this._userProfile}}]),IdAssertion}();!function(){function IdValidation(e,t){(0,d.default)(this,IdValidation);var r=this;r.identity=e,r.contents=t}(0,y.default)(IdValidation,[{key:"validates",value:function(e,t){}}])}();t.default=_,e.exports=t.default},/* 207 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=function(){function AllowOverrides(){(0,i.default)(this,AllowOverrides)}return(0,s.default)(AllowOverrides,[{key:"combine",/**
    * Given an array of individual authorization decisions, prioritizes a positive one.
    * @param    {boolean[]}   decisions
    * @returns  {boolean}
    */
value:function(e){return-1!==e.indexOf(!0)||-1===e.indexOf(!1)&&"Not Applicable"}}]),AllowOverrides}();t.default=a,e.exports=t.default},/* 208 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=function(){function BlockOverrides(){(0,i.default)(this,BlockOverrides)}return(0,s.default)(BlockOverrides,[{key:"combine",/**
    * Given an array of individual authorisation decisions, prioritises a negative one.
    * @param    {boolean[]}   decisions
    * @returns  {boolean}
    */
value:function(e){return-1===e.indexOf(!1)&&(-1!==e.indexOf(!0)||"Not Applicable")}}]),BlockOverrides}();t.default=a,e.exports=t.default},/* 209 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=function(){function FirstApplicable(){(0,i.default)(this,FirstApplicable)}return(0,s.default)(FirstApplicable,[{key:"combine",/**
    * Given an array of individual authorisation decisions, returns the first one different from 'Not Applicable', either positive or negative.
    * @param    {boolean[]}     decisions
    * @returns  {boolean}
    */
value:function(e){for(var t in e)if("Not Applicable"!==e[t])return e[t];return"Not Applicable"}}]),FirstApplicable}();t.default=a,e.exports=t.default},/* 210 */
/***/
function(e,t,r){e.exports={default:r(501),__esModule:!0}},/* 211 */
/***/
function(e,t,r){e.exports={default:r(508),__esModule:!0}},/* 212 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=r(7),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),c=u.getLogger("SynSubscription"),f=function(){function Subscription(e,t,r,n,o){(0,i.default)(this,Subscription);var s=this,a=r+"/children/",u=r+"/changes";
//process delete message
s._deleteListener=e.addListener(u,function(n){if("delete"===n.type){c.log("Subscription-DELETE: ",n);
//FLOW-OUT: message sent to all subscribers
var i={type:"delete",from:n.from,to:t,body:{identity:n.body.identity,resource:r}};
//send delete to hyperty
e.postMessage(i,function(e){c.log("Subscription-DELETE-REPLY: ",e),200===e.body.code&&s._releaseListeners()})}}),
//add change publish address or forward
s._changeListener=o?e.addPublish(u):e.addForward(u,t),s._childrenListeners=[],c.log("[Subscription] - childID",n),n.forEach(function(r){var n=a+r;c.log("[Subscription] - childID",a,n,r);
//add children publish address
var i=e.addPublish(n);
//add self forward if an observer
if(s._childrenListeners.push(i),!o){var u=e.addForward(n,t);s._childrenListeners.push(u)}})}return(0,s.default)(Subscription,[{key:"_releaseListeners",value:function(){var e=this;e._deleteListener.remove(),e._changeListener.remove(),e._childrenListeners.forEach(function(e){e.remove()})}}]),Subscription}();t.default=f,e.exports=t.default},/* 213 */
/***/
function(e,t,r){r(214),e.exports=r(416)},/* 214 */
/***/
function(e,t,r){"use strict";/* WEBPACK VAR INJECTION */
(function(e){function define(e,r,n){e[r]||Object[t](e,r,{writable:!0,configurable:!0,value:n})}if(r(215),r(412),r(413),e._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");e._babelPolyfill=!0;var t="defineProperty";define(String.prototype,"padLeft","".padStart),define(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e){[][e]&&define(Array,e,Function.call.bind([][e]))})}).call(t,r(147))},/* 215 */
/***/
function(e,t,r){r(216),r(218),r(219),r(220),r(221),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(230),r(231),r(232),r(234),r(235),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(296),r(297),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(123),r(320),r(321),r(166),r(322),r(323),r(324),r(325),r(326),r(169),r(171),r(172),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(345),r(346),r(347),r(348),r(349),r(350),r(351),r(352),r(353),r(354),r(355),r(356),r(357),r(358),r(359),r(360),r(361),r(362),r(363),r(364),r(365),r(366),r(367),r(368),r(369),r(370),r(371),r(372),r(373),r(374),r(375),r(376),r(377),r(378),r(379),r(380),r(381),r(382),r(383),r(384),r(385),r(386),r(387),r(388),r(389),r(390),r(391),r(392),r(393),r(394),r(395),r(396),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),e.exports=r(27)},/* 216 */
/***/
function(e,t,r){"use strict";
// ECMAScript 6 symbols shim
var n=r(4),i=r(23),o=r(11),s=r(0),a=r(19),u=r(42).KEY,c=r(5),f=r(80),l=r(61),d=r(49),p=r(8),y=r(149),h=r(103),v=r(217),g=r(83),b=r(3),m=r(6),_=r(24),R=r(31),w=r(48),S=r(52),P=r(152),O=r(25),M=r(12),k=r(50),L=O.f,x=M.f,E=P.f,A=n.Symbol,U=n.JSON,D=U&&U.stringify,I=p("_hidden"),j=p("toPrimitive"),T={}.propertyIsEnumerable,C=f("symbol-registry"),F=f("symbols"),N=f("op-symbols"),q=Object.prototype,H="function"==typeof A,B=n.QObject,K=!B||!B.prototype||!B.prototype.findChild,G=o&&c(function(){return 7!=S(x({},"a",{get:function(){return x(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=L(q,t);n&&delete q[t],x(e,t,r),n&&e!==q&&x(q,t,n)}:x,V=function(e){var t=F[e]=S(A.prototype);return t._k=e,t},W=H&&"symbol"==typeof A.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof A},Y=function(e,t,r){return e===q&&Y(N,t,r),b(e),t=R(t,!0),b(r),i(F,t)?(r.enumerable?(i(e,I)&&e[I][t]&&(e[I][t]=!1),r=S(r,{enumerable:w(0,!1)})):(i(e,I)||x(e,I,w(1,{})),e[I][t]=!0),G(e,t,r)):x(e,t,r)},z=function(e,t){b(e);for(var r,n=v(t=_(t)),i=0,o=n.length;o>i;)Y(e,r=n[i++],t[r]);return e},J=function(e,t){return void 0===t?S(e):z(S(e),t)},$=function(e){var t=T.call(this,e=R(e,!0));return!(this===q&&i(F,e)&&!i(N,e))&&(!(t||!i(this,e)||!i(F,e)||i(this,I)&&this[I][e])||t)},Q=function(e,t){if(e=_(e),t=R(t,!0),e!==q||!i(F,t)||i(N,t)){var r=L(e,t);return!r||!i(F,t)||i(e,I)&&e[I][t]||(r.enumerable=!0),r}},X=function(e){for(var t,r=E(_(e)),n=[],o=0;r.length>o;)i(F,t=r[o++])||t==I||t==u||n.push(t);return n},Z=function(e){for(var t,r=e===q,n=E(r?N:_(e)),o=[],s=0;n.length>s;)!i(F,t=n[s++])||r&&!i(q,t)||o.push(F[t]);return o};
// 19.4.1.1 Symbol([description])
H||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===q&&t.call(N,r),i(this,I)&&i(this[I],e)&&(this[I][e]=!1),G(this,e,w(1,r))};return o&&K&&G(q,e,{configurable:!0,set:t}),V(e)},a(A.prototype,"toString",function(){return this._k}),O.f=Q,M.f=Y,r(53).f=P.f=X,r(71).f=$,r(82).f=Z,o&&!r(43)&&a(q,"propertyIsEnumerable",$,!0),y.f=function(e){return V(p(e))}),s(s.G+s.W+s.F*!H,{Symbol:A});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)p(ee[te++]);for(var re=k(p.store),ne=0;re.length>ne;)h(re[ne++]);s(s.S+s.F*!H,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(e){return i(C,e+="")?C[e]:C[e]=A(e)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var t in C)if(C[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),s(s.S+s.F*!H,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:J,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:Y,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:z,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:Q,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:X,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:Z}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
U&&s(s.S+s.F*(!H||c(function(){var e=A();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var t,r,n=[e],i=1;arguments.length>i;)n.push(arguments[i++]);if(r=t=n[1],(m(t)||void 0!==e)&&!W(e))// IE8 returns string on undefined
return g(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!W(t))return t}),n[1]=t,D.apply(U,n)}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
A.prototype[j]||r(18)(A.prototype,j,A.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
l(A,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
l(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
l(n.JSON,"JSON",!0)},/* 217 */
/***/
function(e,t,r){
// all enumerable object keys, includes symbols
var n=r(50),i=r(82),o=r(71);e.exports=function(e){var t=n(e),r=i.f;if(r)for(var s,a=r(e),u=o.f,c=0;a.length>c;)u.call(e,s=a[c++])&&t.push(s);return t}},/* 218 */
/***/
function(e,t,r){var n=r(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
n(n.S,"Object",{create:r(52)})},/* 219 */
/***/
function(e,t,r){var n=r(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
n(n.S+n.F*!r(11),"Object",{defineProperty:r(12).f})},/* 220 */
/***/
function(e,t,r){var n=r(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
n(n.S+n.F*!r(11),"Object",{defineProperties:r(151)})},/* 221 */
/***/
function(e,t,r){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var n=r(24),i=r(25).f;r(34)("getOwnPropertyDescriptor",function(){return function(e,t){return i(n(e),t)}})},/* 222 */
/***/
function(e,t,r){
// 19.1.2.9 Object.getPrototypeOf(O)
var n=r(15),i=r(26);r(34)("getPrototypeOf",function(){return function(e){return i(n(e))}})},/* 223 */
/***/
function(e,t,r){
// 19.1.2.14 Object.keys(O)
var n=r(15),i=r(50);r(34)("keys",function(){return function(e){return i(n(e))}})},/* 224 */
/***/
function(e,t,r){
// 19.1.2.7 Object.getOwnPropertyNames(O)
r(34)("getOwnPropertyNames",function(){return r(152).f})},/* 225 */
/***/
function(e,t,r){
// 19.1.2.5 Object.freeze(O)
var n=r(6),i=r(42).onFreeze;r(34)("freeze",function(e){return function(t){return e&&n(t)?e(i(t)):t}})},/* 226 */
/***/
function(e,t,r){
// 19.1.2.17 Object.seal(O)
var n=r(6),i=r(42).onFreeze;r(34)("seal",function(e){return function(t){return e&&n(t)?e(i(t)):t}})},/* 227 */
/***/
function(e,t,r){
// 19.1.2.15 Object.preventExtensions(O)
var n=r(6),i=r(42).onFreeze;r(34)("preventExtensions",function(e){return function(t){return e&&n(t)?e(i(t)):t}})},/* 228 */
/***/
function(e,t,r){
// 19.1.2.12 Object.isFrozen(O)
var n=r(6);r(34)("isFrozen",function(e){return function(t){return!n(t)||!!e&&e(t)}})},/* 229 */
/***/
function(e,t,r){
// 19.1.2.13 Object.isSealed(O)
var n=r(6);r(34)("isSealed",function(e){return function(t){return!n(t)||!!e&&e(t)}})},/* 230 */
/***/
function(e,t,r){
// 19.1.2.11 Object.isExtensible(O)
var n=r(6);r(34)("isExtensible",function(e){return function(t){return!!n(t)&&(!e||e(t))}})},/* 231 */
/***/
function(e,t,r){
// 19.1.3.1 Object.assign(target, source)
var n=r(0);n(n.S+n.F,"Object",{assign:r(153)})},/* 232 */
/***/
function(e,t,r){
// 19.1.3.10 Object.is(value1, value2)
var n=r(0);n(n.S,"Object",{is:r(233)})},/* 233 */
/***/
function(e,t){
// 7.2.9 SameValue(x, y)
e.exports=Object.is||function(e,t){
// eslint-disable-next-line no-self-compare
return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},/* 234 */
/***/
function(e,t,r){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var n=r(0);n(n.S,"Object",{setPrototypeOf:r(107).set})},/* 235 */
/***/
function(e,t,r){"use strict";
// 19.1.3.6 Object.prototype.toString()
var n=r(72),i={};i[r(8)("toStringTag")]="z",i+""!="[object z]"&&r(19)(Object.prototype,"toString",function(){return"[object "+n(this)+"]"},!0)},/* 236 */
/***/
function(e,t,r){
// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var n=r(0);n(n.P,"Function",{bind:r(154)})},/* 237 */
/***/
function(e,t,r){var n=r(12).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;
// 19.2.4.2 name
"name"in i||r(11)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},/* 238 */
/***/
function(e,t,r){"use strict";var n=r(6),i=r(26),o=r(8)("hasInstance"),s=Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
o in s||r(12).f(s,o,{value:function(e){if("function"!=typeof this||!n(e))return!1;if(!n(this.prototype))return e instanceof this;
// for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
for(;e=i(e);)if(this.prototype===e)return!0;return!1}})},/* 239 */
/***/
function(e,t,r){var n=r(0),i=r(156);
// 18.2.5 parseInt(string, radix)
n(n.G+n.F*(parseInt!=i),{parseInt:i})},/* 240 */
/***/
function(e,t,r){var n=r(0),i=r(157);
// 18.2.4 parseFloat(string)
n(n.G+n.F*(parseFloat!=i),{parseFloat:i})},/* 241 */
/***/
function(e,t,r){"use strict";var n=r(4),i=r(23),o=r(29),s=r(109),a=r(31),u=r(5),c=r(53).f,f=r(25).f,l=r(12).f,d=r(62).trim,p=n.Number,y=p,h=p.prototype,v="Number"==o(r(52)(h)),g="trim"in String.prototype,b=function(e){var t=a(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():d(t,3);var r,n,i,o=t.charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,i=49;break;// fast equal /^0b[01]+$/i
case 79:case 111:n=8,i=55;break;// fast equal /^0o[0-7]+$/i
default:return+t}for(var s,u=t.slice(2),c=0,f=u.length;c<f;c++)
// parseInt parses a string to a first unavailable symbol
// but ToNumber should return NaN if a string contains unavailable symbols
if((s=u.charCodeAt(c))<48||s>i)return NaN;return parseInt(u,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(v?u(function(){h.valueOf.call(r)}):"Number"!=o(r))?s(new y(b(t)),r,p):b(t)};for(var m,_=r(11)?c(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),R=0;_.length>R;R++)i(y,m=_[R])&&!i(p,m)&&l(p,m,f(y,m));p.prototype=h,h.constructor=p,r(19)(n,"Number",p)}},/* 242 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(33),o=r(158),s=r(110),a=1..toFixed,u=Math.floor,c=[0,0,0,0,0,0],f="Number.toFixed: incorrect invocation!",l=function(e,t){for(var r=-1,n=t;++r<6;)n+=e*c[r],c[r]=n%1e7,n=u(n/1e7)},d=function(e){for(var t=6,r=0;--t>=0;)r+=c[t],c[t]=u(r/e),r=r%e*1e7},p=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==c[e]){var r=String(c[e]);t=""===t?r:t+s.call("0",7-r.length)+r}return t},y=function(e,t,r){return 0===t?r:t%2==1?y(e,t-1,r*e):y(e*e,t/2,r)},h=function(e){for(var t=0,r=e;r>=4096;)t+=12,r/=4096;for(;r>=2;)t+=1,r/=2;return t};n(n.P+n.F*(!!a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(5)(function(){
// V8 ~ Android 4.3-
a.call({})})),"Number",{toFixed:function(e){var t,r,n,a,u=o(this,f),c=i(e),v="",g="0";if(c<0||c>20)throw RangeError(f);
// eslint-disable-next-line no-self-compare
if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(v="-",u=-u),u>1e-21)if(t=h(u*y(2,69,1))-69,r=t<0?u*y(2,-t,1):u/y(2,t,1),r*=4503599627370496,(t=52-t)>0){for(l(0,r),n=c;n>=7;)l(1e7,0),n-=7;for(l(y(10,n,1),0),n=t-1;n>=23;)d(1<<23),n-=23;d(1<<n),l(1,1),d(2),g=p()}else l(0,r),l(1<<-t,0),g=p()+s.call("0",c);return c>0?(a=g.length,g=v+(a<=c?"0."+s.call("0",c-a)+g:g.slice(0,a-c)+"."+g.slice(a-c))):g=v+g,g}})},/* 243 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(5),o=r(158),s=1..toPrecision;n(n.P+n.F*(i(function(){
// IE7-
return"1"!==s.call(1,void 0)})||!i(function(){
// V8 ~ Android 4.3-
s.call({})})),"Number",{toPrecision:function(e){var t=o(this,"Number#toPrecision: incorrect invocation!");return void 0===e?s.call(t):s.call(t,e)}})},/* 244 */
/***/
function(e,t,r){
// 20.1.2.1 Number.EPSILON
var n=r(0);n(n.S,"Number",{EPSILON:Math.pow(2,-52)})},/* 245 */
/***/
function(e,t,r){
// 20.1.2.2 Number.isFinite(number)
var n=r(0),i=r(4).isFinite;n(n.S,"Number",{isFinite:function(e){return"number"==typeof e&&i(e)}})},/* 246 */
/***/
function(e,t,r){
// 20.1.2.3 Number.isInteger(number)
var n=r(0);n(n.S,"Number",{isInteger:r(159)})},/* 247 */
/***/
function(e,t,r){
// 20.1.2.4 Number.isNaN(number)
var n=r(0);n(n.S,"Number",{isNaN:function(e){
// eslint-disable-next-line no-self-compare
return e!=e}})},/* 248 */
/***/
function(e,t,r){
// 20.1.2.5 Number.isSafeInteger(number)
var n=r(0),i=r(159),o=Math.abs;n(n.S,"Number",{isSafeInteger:function(e){return i(e)&&o(e)<=9007199254740991}})},/* 249 */
/***/
function(e,t,r){
// 20.1.2.6 Number.MAX_SAFE_INTEGER
var n=r(0);n(n.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},/* 250 */
/***/
function(e,t,r){
// 20.1.2.10 Number.MIN_SAFE_INTEGER
var n=r(0);n(n.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},/* 251 */
/***/
function(e,t,r){var n=r(0),i=r(157);
// 20.1.2.12 Number.parseFloat(string)
n(n.S+n.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},/* 252 */
/***/
function(e,t,r){var n=r(0),i=r(156);
// 20.1.2.13 Number.parseInt(string, radix)
n(n.S+n.F*(Number.parseInt!=i),"Number",{parseInt:i})},/* 253 */
/***/
function(e,t,r){
// 20.2.2.3 Math.acosh(x)
var n=r(0),i=r(160),o=Math.sqrt,s=Math.acosh;n(n.S+n.F*!(s&&710==Math.floor(s(Number.MAX_VALUE))&&s(1/0)==1/0),"Math",{acosh:function(e){return(e=+e)<1?NaN:e>94906265.62425156?Math.log(e)+Math.LN2:i(e-1+o(e-1)*o(e+1))}})},/* 254 */
/***/
function(e,t,r){function asinh(e){return isFinite(e=+e)&&0!=e?e<0?-asinh(-e):Math.log(e+Math.sqrt(e*e+1)):e}
// 20.2.2.5 Math.asinh(x)
var n=r(0),i=Math.asinh;
// Tor Browser bug: Math.asinh(0) -> -0
n(n.S+n.F*!(i&&1/i(0)>0),"Math",{asinh:asinh})},/* 255 */
/***/
function(e,t,r){
// 20.2.2.7 Math.atanh(x)
var n=r(0),i=Math.atanh;
// Tor Browser bug: Math.atanh(-0) -> 0
n(n.S+n.F*!(i&&1/i(-0)<0),"Math",{atanh:function(e){return 0==(e=+e)?e:Math.log((1+e)/(1-e))/2}})},/* 256 */
/***/
function(e,t,r){
// 20.2.2.9 Math.cbrt(x)
var n=r(0),i=r(111);n(n.S,"Math",{cbrt:function(e){return i(e=+e)*Math.pow(Math.abs(e),1/3)}})},/* 257 */
/***/
function(e,t,r){
// 20.2.2.11 Math.clz32(x)
var n=r(0);n(n.S,"Math",{clz32:function(e){return(e>>>=0)?31-Math.floor(Math.log(e+.5)*Math.LOG2E):32}})},/* 258 */
/***/
function(e,t,r){
// 20.2.2.12 Math.cosh(x)
var n=r(0),i=Math.exp;n(n.S,"Math",{cosh:function(e){return(i(e=+e)+i(-e))/2}})},/* 259 */
/***/
function(e,t,r){
// 20.2.2.14 Math.expm1(x)
var n=r(0),i=r(112);n(n.S+n.F*(i!=Math.expm1),"Math",{expm1:i})},/* 260 */
/***/
function(e,t,r){
// 20.2.2.16 Math.fround(x)
var n=r(0);n(n.S,"Math",{fround:r(161)})},/* 261 */
/***/
function(e,t,r){
// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var n=r(0),i=Math.abs;n(n.S,"Math",{hypot:function(e,t){for(// eslint-disable-line no-unused-vars
var r,n,o=0,s=0,a=arguments.length,u=0;s<a;)r=i(arguments[s++]),u<r?(n=u/r,o=o*n*n+1,u=r):r>0?(n=r/u,o+=n*n):o+=r;return u===1/0?1/0:u*Math.sqrt(o)}})},/* 262 */
/***/
function(e,t,r){
// 20.2.2.18 Math.imul(x, y)
var n=r(0),i=Math.imul;
// some WebKit versions fails with big numbers, some has wrong arity
n(n.S+n.F*r(5)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function(e,t){var r=+e,n=+t,i=65535&r,o=65535&n;return 0|i*o+((65535&r>>>16)*o+i*(65535&n>>>16)<<16>>>0)}})},/* 263 */
/***/
function(e,t,r){
// 20.2.2.21 Math.log10(x)
var n=r(0);n(n.S,"Math",{log10:function(e){return Math.log(e)*Math.LOG10E}})},/* 264 */
/***/
function(e,t,r){
// 20.2.2.20 Math.log1p(x)
var n=r(0);n(n.S,"Math",{log1p:r(160)})},/* 265 */
/***/
function(e,t,r){
// 20.2.2.22 Math.log2(x)
var n=r(0);n(n.S,"Math",{log2:function(e){return Math.log(e)/Math.LN2}})},/* 266 */
/***/
function(e,t,r){
// 20.2.2.28 Math.sign(x)
var n=r(0);n(n.S,"Math",{sign:r(111)})},/* 267 */
/***/
function(e,t,r){
// 20.2.2.30 Math.sinh(x)
var n=r(0),i=r(112),o=Math.exp;
// V8 near Chromium 38 has a problem with very small numbers
n(n.S+n.F*r(5)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(e){return Math.abs(e=+e)<1?(i(e)-i(-e))/2:(o(e-1)-o(-e-1))*(Math.E/2)}})},/* 268 */
/***/
function(e,t,r){
// 20.2.2.33 Math.tanh(x)
var n=r(0),i=r(112),o=Math.exp;n(n.S,"Math",{tanh:function(e){var t=i(e=+e),r=i(-e);return t==1/0?1:r==1/0?-1:(t-r)/(o(e)+o(-e))}})},/* 269 */
/***/
function(e,t,r){
// 20.2.2.34 Math.trunc(x)
var n=r(0);n(n.S,"Math",{trunc:function(e){return(e>0?Math.floor:Math.ceil)(e)}})},/* 270 */
/***/
function(e,t,r){var n=r(0),i=r(51),o=String.fromCharCode,s=String.fromCodePoint;
// length should be 1, old FF problem
n(n.S+n.F*(!!s&&1!=s.length),"String",{
// 21.1.2.2 String.fromCodePoint(...codePoints)
fromCodePoint:function(e){for(// eslint-disable-line no-unused-vars
var t,r=[],n=arguments.length,s=0;n>s;){if(t=+arguments[s++],i(t,1114111)!==t)throw RangeError(t+" is not a valid code point");r.push(t<65536?o(t):o(55296+((t-=65536)>>10),t%1024+56320))}return r.join("")}})},/* 271 */
/***/
function(e,t,r){var n=r(0),i=r(24),o=r(13);n(n.S,"String",{
// 21.1.2.4 String.raw(callSite, ...substitutions)
raw:function(e){for(var t=i(e.raw),r=o(t.length),n=arguments.length,s=[],a=0;r>a;)s.push(String(t[a++])),a<n&&s.push(String(arguments[a]));return s.join("")}})},/* 272 */
/***/
function(e,t,r){"use strict";
// 21.1.3.25 String.prototype.trim()
r(62)("trim",function(e){return function(){return e(this,3)}})},/* 273 */
/***/
function(e,t,r){"use strict";var n=r(113)(!0);
// 21.1.3.27 String.prototype[@@iterator]()
r(114)(String,"String",function(e){this._t=String(e),// target
this._i=0},function(){var e,t=this._t,r=this._i;return r>=t.length?{value:void 0,done:!0}:(e=n(t,r),this._i+=e.length,{value:e,done:!1})})},/* 274 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(113)(!1);n(n.P,"String",{
// 21.1.3.3 String.prototype.codePointAt(pos)
codePointAt:function(e){return i(this,e)}})},/* 275 */
/***/
function(e,t,r){"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
var n=r(0),i=r(13),o=r(116),s="".endsWith;n(n.P+n.F*r(117)("endsWith"),"String",{endsWith:function(e){var t=o(this,e,"endsWith"),r=arguments.length>1?arguments[1]:void 0,n=i(t.length),a=void 0===r?n:Math.min(i(r),n),u=String(e);return s?s.call(t,u,a):t.slice(a-u.length,a)===u}})},/* 276 */
/***/
function(e,t,r){"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)
var n=r(0),i=r(116);n(n.P+n.F*r(117)("includes"),"String",{includes:function(e){return!!~i(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},/* 277 */
/***/
function(e,t,r){var n=r(0);n(n.P,"String",{
// 21.1.3.13 String.prototype.repeat(count)
repeat:r(110)})},/* 278 */
/***/
function(e,t,r){"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
var n=r(0),i=r(13),o=r(116),s="".startsWith;n(n.P+n.F*r(117)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return s?s.call(t,n,r):t.slice(r,r+n.length)===n}})},/* 279 */
/***/
function(e,t,r){"use strict";
// B.2.3.2 String.prototype.anchor(name)
r(20)("anchor",function(e){return function(t){return e(this,"a","name",t)}})},/* 280 */
/***/
function(e,t,r){"use strict";
// B.2.3.3 String.prototype.big()
r(20)("big",function(e){return function(){return e(this,"big","","")}})},/* 281 */
/***/
function(e,t,r){"use strict";
// B.2.3.4 String.prototype.blink()
r(20)("blink",function(e){return function(){return e(this,"blink","","")}})},/* 282 */
/***/
function(e,t,r){"use strict";
// B.2.3.5 String.prototype.bold()
r(20)("bold",function(e){return function(){return e(this,"b","","")}})},/* 283 */
/***/
function(e,t,r){"use strict";
// B.2.3.6 String.prototype.fixed()
r(20)("fixed",function(e){return function(){return e(this,"tt","","")}})},/* 284 */
/***/
function(e,t,r){"use strict";
// B.2.3.7 String.prototype.fontcolor(color)
r(20)("fontcolor",function(e){return function(t){return e(this,"font","color",t)}})},/* 285 */
/***/
function(e,t,r){"use strict";
// B.2.3.8 String.prototype.fontsize(size)
r(20)("fontsize",function(e){return function(t){return e(this,"font","size",t)}})},/* 286 */
/***/
function(e,t,r){"use strict";
// B.2.3.9 String.prototype.italics()
r(20)("italics",function(e){return function(){return e(this,"i","","")}})},/* 287 */
/***/
function(e,t,r){"use strict";
// B.2.3.10 String.prototype.link(url)
r(20)("link",function(e){return function(t){return e(this,"a","href",t)}})},/* 288 */
/***/
function(e,t,r){"use strict";
// B.2.3.11 String.prototype.small()
r(20)("small",function(e){return function(){return e(this,"small","","")}})},/* 289 */
/***/
function(e,t,r){"use strict";
// B.2.3.12 String.prototype.strike()
r(20)("strike",function(e){return function(){return e(this,"strike","","")}})},/* 290 */
/***/
function(e,t,r){"use strict";
// B.2.3.13 String.prototype.sub()
r(20)("sub",function(e){return function(){return e(this,"sub","","")}})},/* 291 */
/***/
function(e,t,r){"use strict";
// B.2.3.14 String.prototype.sup()
r(20)("sup",function(e){return function(){return e(this,"sup","","")}})},/* 292 */
/***/
function(e,t,r){
// 20.3.3.1 / 15.9.4.4 Date.now()
var n=r(0);n(n.S,"Date",{now:function(){return(new Date).getTime()}})},/* 293 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(15),o=r(31);n(n.P+n.F*r(5)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{
// eslint-disable-next-line no-unused-vars
toJSON:function(e){var t=i(this),r=o(t);return"number"!=typeof r||isFinite(r)?t.toISOString():null}})},/* 294 */
/***/
function(e,t,r){
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var n=r(0),i=r(295);
// PhantomJS / old WebKit has a broken implementations
n(n.P+n.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},/* 295 */
/***/
function(e,t,r){"use strict";
// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var n=r(5),i=Date.prototype.getTime,o=Date.prototype.toISOString,s=function(e){return e>9?e:"0"+e};
// PhantomJS / old WebKit has a broken implementations
e.exports=n(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!n(function(){o.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+("00000"+Math.abs(t)).slice(n?-6:-4)+"-"+s(e.getUTCMonth()+1)+"-"+s(e.getUTCDate())+"T"+s(e.getUTCHours())+":"+s(e.getUTCMinutes())+":"+s(e.getUTCSeconds())+"."+(r>99?r:"0"+s(r))+"Z"}:o},/* 296 */
/***/
function(e,t,r){var n=Date.prototype,i=n.toString,o=n.getTime;new Date(NaN)+""!="Invalid Date"&&r(19)(n,"toString",function(){var e=o.call(this);
// eslint-disable-next-line no-self-compare
return e===e?i.call(this):"Invalid Date"})},/* 297 */
/***/
function(e,t,r){var n=r(8)("toPrimitive"),i=Date.prototype;n in i||r(18)(i,n,r(298))},/* 298 */
/***/
function(e,t,r){"use strict";var n=r(3),i=r(31);e.exports=function(e){if("string"!==e&&"number"!==e&&"default"!==e)throw TypeError("Incorrect hint");return i(n(this),"number"!=e)}},/* 299 */
/***/
function(e,t,r){
// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var n=r(0);n(n.S,"Array",{isArray:r(83)})},/* 300 */
/***/
function(e,t,r){"use strict";var n=r(28),i=r(0),o=r(15),s=r(162),a=r(118),u=r(13),c=r(119),f=r(120);i(i.S+i.F*!r(85)(function(e){Array.from(e)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(e){var t,r,i,l,d=o(e),p="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,v=void 0!==h,g=0,b=f(d);
// if object isn't iterable or it's array with default iterator - use simple case
if(v&&(h=n(h,y>2?arguments[2]:void 0,2)),void 0==b||p==Array&&a(b))for(t=u(d.length),r=new p(t);t>g;g++)c(r,g,v?h(d[g],g):d[g]);else for(l=b.call(d),r=new p;!(i=l.next()).done;g++)c(r,g,v?s(l,h,[i.value,g],!0):i.value);return r.length=g,r}})},/* 301 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(119);
// WebKit Array.of isn't generic
n(n.S+n.F*r(5)(function(){function F(){}return!(Array.of.call(F)instanceof F)}),"Array",{
// 22.1.2.3 Array.of( ...items)
of:function(){for(var e=0,t=arguments.length,r=new("function"==typeof this?this:Array)(t);t>e;)i(r,e,arguments[e++]);return r.length=t,r}})},/* 302 */
/***/
function(e,t,r){"use strict";
// 22.1.3.13 Array.prototype.join(separator)
var n=r(0),i=r(24),o=[].join;
// fallback for not array-like strings
n(n.P+n.F*(r(70)!=Object||!r(30)(o)),"Array",{join:function(e){return o.call(i(this),void 0===e?",":e)}})},/* 303 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(106),o=r(29),s=r(51),a=r(13),u=[].slice;
// fallback for not array-like ES3 strings and DOM objects
n(n.P+n.F*r(5)(function(){i&&u.call(i)}),"Array",{slice:function(e,t){var r=a(this.length),n=o(this);if(t=void 0===t?r:t,"Array"==n)return u.call(this,e,t);for(var i=s(e,r),c=s(t,r),f=a(c-i),l=new Array(f),d=0;d<f;d++)l[d]="String"==n?this.charAt(i+d):this[i+d];return l}})},/* 304 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(16),o=r(15),s=r(5),a=[].sort,u=[1,2,3];n(n.P+n.F*(s(function(){
// IE8-
u.sort(void 0)})||!s(function(){
// V8 bug
u.sort(null)})||!r(30)(a)),"Array",{
// 22.1.3.25 Array.prototype.sort(comparefn)
sort:function(e){return void 0===e?a.call(o(this)):a.call(o(this),i(e))}})},/* 305 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(0),o=r(30)([].forEach,!0);n(n.P+n.F*!o,"Array",{
// 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
forEach:function(e){return i(this,e,arguments[1])}})},/* 306 */
/***/
function(e,t,r){var n=r(6),i=r(83),o=r(8)("species");e.exports=function(e){var t;
// cross-realm fallback
return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),n(t)&&null===(t=t[o])&&(t=void 0)),void 0===t?Array:t}},/* 307 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(1);n(n.P+n.F*!r(30)([].map,!0),"Array",{
// 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
map:function(e){return i(this,e,arguments[1])}})},/* 308 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(2);n(n.P+n.F*!r(30)([].filter,!0),"Array",{
// 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
filter:function(e){return i(this,e,arguments[1])}})},/* 309 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(3);n(n.P+n.F*!r(30)([].some,!0),"Array",{
// 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
some:function(e){return i(this,e,arguments[1])}})},/* 310 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(35)(4);n(n.P+n.F*!r(30)([].every,!0),"Array",{
// 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
every:function(e){return i(this,e,arguments[1])}})},/* 311 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(163);n(n.P+n.F*!r(30)([].reduce,!0),"Array",{
// 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
reduce:function(e){return i(this,e,arguments.length,arguments[1],!1)}})},/* 312 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(163);n(n.P+n.F*!r(30)([].reduceRight,!0),"Array",{
// 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
reduceRight:function(e){return i(this,e,arguments.length,arguments[1],!0)}})},/* 313 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(81)(!1),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(s||!r(30)(o)),"Array",{
// 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
indexOf:function(e){return s?o.apply(this,arguments)||0:i(this,e,arguments[1])}})},/* 314 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(24),o=r(33),s=r(13),a=[].lastIndexOf,u=!!a&&1/[1].lastIndexOf(1,-0)<0;n(n.P+n.F*(u||!r(30)(a)),"Array",{
// 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
lastIndexOf:function(e){
// convert -0 to +0
if(u)return a.apply(this,arguments)||0;var t=i(this),r=s(t.length),n=r-1;for(arguments.length>1&&(n=Math.min(n,o(arguments[1]))),n<0&&(n=r+n);n>=0;n--)if(n in t&&t[n]===e)return n||0;return-1}})},/* 315 */
/***/
function(e,t,r){
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var n=r(0);n(n.P,"Array",{copyWithin:r(164)}),r(44)("copyWithin")},/* 316 */
/***/
function(e,t,r){
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var n=r(0);n(n.P,"Array",{fill:r(122)}),r(44)("fill")},/* 317 */
/***/
function(e,t,r){"use strict";
// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var n=r(0),i=r(35)(5),o=!0;
// Shouldn't skip holes
"find"in[]&&Array(1).find(function(){o=!1}),n(n.P+n.F*o,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(44)("find")},/* 318 */
/***/
function(e,t,r){"use strict";
// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var n=r(0),i=r(35)(6),o="findIndex",s=!0;
// Shouldn't skip holes
o in[]&&Array(1)[o](function(){s=!1}),n(n.P+n.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(44)(o)},/* 319 */
/***/
function(e,t,r){r(54)("Array")},/* 320 */
/***/
function(e,t,r){var n=r(4),i=r(109),o=r(12).f,s=r(53).f,a=r(84),u=r(86),c=n.RegExp,f=c,l=c.prototype,d=/a/g,p=/a/g,y=new c(d)!==d;if(r(11)&&(!y||r(5)(function(){
// RegExp constructor can alter flags and IsRegExp works correct with @@match
return p[r(8)("match")]=!1,c(d)!=d||c(p)==p||"/a/i"!=c(d,"i")}))){c=function(e,t){var r=this instanceof c,n=a(e),o=void 0===t;return!r&&n&&e.constructor===c&&o?e:i(y?new f(n&&!o?e.source:e,t):f((n=e instanceof c)?e.source:e,n&&o?u.call(e):t),r?this:l,c)};for(var h=s(f),v=0;h.length>v;)!function(e){e in c||o(c,e,{configurable:!0,get:function(){return f[e]},set:function(t){f[e]=t}})}(h[v++]);l.constructor=c,c.prototype=l,r(19)(n,"RegExp",c)}r(54)("RegExp")},/* 321 */
/***/
function(e,t,r){"use strict";r(166);var n=r(3),i=r(86),o=r(11),s=/./.toString,a=function(e){r(19)(RegExp.prototype,"toString",e,!0)};
// 21.2.5.14 RegExp.prototype.toString()
r(5)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?a(function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!o&&e instanceof RegExp?i.call(e):void 0)}):"toString"!=s.name&&a(function(){return s.call(this)})},/* 322 */
/***/
function(e,t,r){
// @@match logic
r(87)("match",1,function(e,t,r){
// 21.1.3.11 String.prototype.match(regexp)
return[function(r){"use strict";var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n):new RegExp(r)[t](String(n))},r]})},/* 323 */
/***/
function(e,t,r){
// @@replace logic
r(87)("replace",2,function(e,t,r){
// 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
return[function(n,i){"use strict";var o=e(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,o,i):r.call(String(o),n,i)},r]})},/* 324 */
/***/
function(e,t,r){
// @@search logic
r(87)("search",1,function(e,t,r){
// 21.1.3.15 String.prototype.search(regexp)
return[function(r){"use strict";var n=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,n):new RegExp(r)[t](String(n))},r]})},/* 325 */
/***/
function(e,t,r){
// @@split logic
r(87)("split",2,function(e,t,n){"use strict";var i=r(84),o=n,s=[].push,a="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[a]||2!="ab".split(/(?:ab)*/)[a]||4!=".".split(/(.?)(.?)/)[a]||".".split(/()()/)[a]>1||"".split(/.?/)[a]){var u=void 0===/()??/.exec("")[1];// nonparticipating capturing group
// based on es5-shim implementation, need to rework it
n=function(e,t){var r=String(this);if(void 0===e&&0===t)return[];
// If `separator` is not a regex, use native split
if(!i(e))return o.call(r,e,t);var n,c,f,l,d,p=[],y=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),h=0,v=void 0===t?4294967295:t>>>0,g=new RegExp(e.source,y+"g");for(
// Doesn't need flags gy, but they don't hurt
u||(n=new RegExp("^"+g.source+"$(?!\\s)",y));(c=g.exec(r))&&!((
// `separatorCopy.lastIndex` is not reliable cross-browser
f=c.index+c[0][a])>h&&(p.push(r.slice(h,c.index)),
// Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
// eslint-disable-next-line no-loop-func
!u&&c[a]>1&&c[0].replace(n,function(){for(d=1;d<arguments[a]-2;d++)void 0===arguments[d]&&(c[d]=void 0)}),c[a]>1&&c.index<r[a]&&s.apply(p,c.slice(1)),l=c[0][a],h=f,p[a]>=v));)g.lastIndex===c.index&&g.lastIndex++;return h===r[a]?!l&&g.test("")||p.push(""):p.push(r.slice(h)),p[a]>v?p.slice(0,v):p}}else"0".split(void 0,0)[a]&&(n=function(e,t){return void 0===e&&0===t?[]:o.call(this,e,t)});
// 21.1.3.17 String.prototype.split(separator, limit)
return[function(r,i){var o=e(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,o,i):n.call(String(o),r,i)},n]})},/* 326 */
/***/
function(e,t,r){"use strict";var n,i,o,s,a=r(43),u=r(4),c=r(28),f=r(72),l=r(0),d=r(6),p=r(16),y=r(55),h=r(56),v=r(88),g=r(124).set,b=r(125)(),m=r(126),_=r(167),R=r(89),w=r(168),S=u.TypeError,P=u.process,O=P&&P.versions,M=O&&O.v8||"",k=u.Promise,L="process"==f(P),x=function(){},E=i=m.f,A=!!function(){try{
// correct subclassing with @@species support
var e=k.resolve(1),t=(e.constructor={})[r(8)("species")]=function(e){e(x,x)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(L||"function"==typeof PromiseRejectionEvent)&&e.then(x)instanceof t&&0!==M.indexOf("6.6")&&-1===R.indexOf("Chrome/66")}catch(e){}}(),U=function(e){var t;return!(!d(e)||"function"!=typeof(t=e.then))&&t},D=function(e,t){if(!e._n){e._n=!0;var r=e._c;b(function(){for(var n=e._v,i=1==e._s,o=0;r.length>o;)!function(t){var r,o,s,a=i?t.ok:t.fail,u=t.resolve,c=t.reject,f=t.domain;try{a?(i||(2==e._h&&T(e),e._h=1),!0===a?r=n:(f&&f.enter(),r=a(n),// may throw
f&&(f.exit(),s=!0)),r===t.promise?c(S("Promise-chain cycle")):(o=U(r))?o.call(r,u,c):u(r)):c(n)}catch(e){f&&!s&&f.exit(),c(e)}}(r[o++]);// variable length - can't use forEach
e._c=[],e._n=!1,t&&!e._h&&I(e)})}},I=function(e){g.call(u,function(){var t,r,n,i=e._v,o=j(e);if(o&&(t=_(function(){L?P.emit("unhandledRejection",i,e):(r=u.onunhandledrejection)?r({promise:e,reason:i}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",i)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
e._h=L||j(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},j=function(e){return 1!==e._h&&0===(e._a||e._c).length},T=function(e){g.call(u,function(){var t;L?P.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},C=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,// unwrap
t._v=e,t._s=2,t._a||(t._a=t._c.slice()),D(t,!0))},F=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;// unwrap
try{if(r===e)throw S("Promise can't be resolved itself");(t=U(e))?b(function(){var n={_w:r,_d:!1};// wrap
try{t.call(e,c(F,n,1),c(C,n,1))}catch(e){C.call(n,e)}}):(r._v=e,r._s=1,D(r,!1))}catch(e){C.call({_w:r,_d:!1},e)}}};
// constructor polyfill
A||(
// 25.4.3.1 Promise(executor)
k=function(e){y(this,k,"Promise","_h"),p(e),n.call(this);try{e(c(F,this,1),c(C,this,1))}catch(e){C.call(this,e)}},
// eslint-disable-next-line no-unused-vars
n=function(e){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},n.prototype=r(57)(k.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(e,t){var r=E(v(this,k));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=L?P.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&D(this,!1),r.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new n;this.promise=e,this.resolve=c(F,e,1),this.reject=c(C,e,1)},m.f=E=function(e){return e===k||e===s?new o(e):i(e)}),l(l.G+l.W+l.F*!A,{Promise:k}),r(61)(k,"Promise"),r(54)("Promise"),s=r(27).Promise,
// statics
l(l.S+l.F*!A,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(e){var t=E(this);return(0,t.reject)(e),t.promise}}),l(l.S+l.F*(a||!A),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(e){return w(a&&this===s?k:this,e)}}),l(l.S+l.F*!(A&&r(85)(function(e){k.all(e).catch(x)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(e){var t=this,r=E(t),n=r.resolve,i=r.reject,o=_(function(){var r=[],o=0,s=1;h(e,!1,function(e){var a=o++,u=!1;r.push(void 0),s++,t.resolve(e).then(function(e){u||(u=!0,r[a]=e,--s||n(r))},i)}),--s||n(r)});return o.e&&i(o.v),r.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(e){var t=this,r=E(t),n=r.reject,i=_(function(){h(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return i.e&&n(i.v),r.promise}})},/* 327 */
/***/
function(e,t,r){"use strict";var n=r(173),i=r(64);
// 23.4 WeakSet Objects
r(90)("WeakSet",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{
// 23.4.3.1 WeakSet.prototype.add(value)
add:function(e){return n.def(i(this,"WeakSet"),e,!0)}},n,!1,!0)},/* 328 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(91),o=r(127),s=r(3),a=r(51),u=r(13),c=r(6),f=r(4).ArrayBuffer,l=r(88),d=o.ArrayBuffer,p=o.DataView,y=i.ABV&&f.isView,h=d.prototype.slice,v=i.VIEW;n(n.G+n.W+n.F*(f!==d),{ArrayBuffer:d}),n(n.S+n.F*!i.CONSTR,"ArrayBuffer",{
// 24.1.3.1 ArrayBuffer.isView(arg)
isView:function(e){return y&&y(e)||c(e)&&v in e}}),n(n.P+n.U+n.F*r(5)(function(){return!new d(2).slice(1,void 0).byteLength}),"ArrayBuffer",{
// 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
slice:function(e,t){if(void 0!==h&&void 0===t)return h.call(s(this),e);for(// FF fix
var r=s(this).byteLength,n=a(e,r),i=a(void 0===t?r:t,r),o=new(l(this,d))(u(i-n)),c=new p(this),f=new p(o),y=0;n<i;)f.setUint8(y++,c.getUint8(n++));return o}}),r(54)("ArrayBuffer")},/* 329 */
/***/
function(e,t,r){var n=r(0);n(n.G+n.W+n.F*!r(91).ABV,{DataView:r(127).DataView})},/* 330 */
/***/
function(e,t,r){r(38)("Int8",1,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 331 */
/***/
function(e,t,r){r(38)("Uint8",1,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 332 */
/***/
function(e,t,r){r(38)("Uint8",1,function(e){return function(t,r,n){return e(this,t,r,n)}},!0)},/* 333 */
/***/
function(e,t,r){r(38)("Int16",2,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 334 */
/***/
function(e,t,r){r(38)("Uint16",2,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 335 */
/***/
function(e,t,r){r(38)("Int32",4,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 336 */
/***/
function(e,t,r){r(38)("Uint32",4,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 337 */
/***/
function(e,t,r){r(38)("Float32",4,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 338 */
/***/
function(e,t,r){r(38)("Float64",8,function(e){return function(t,r,n){return e(this,t,r,n)}})},/* 339 */
/***/
function(e,t,r){
// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var n=r(0),i=r(16),o=r(3),s=(r(4).Reflect||{}).apply,a=Function.apply;
// MS Edge argumentsList argument is optional
n(n.S+n.F*!r(5)(function(){s(function(){})}),"Reflect",{apply:function(e,t,r){var n=i(e),u=o(r);return s?s(n,t,u):a.call(n,t,u)}})},/* 340 */
/***/
function(e,t,r){
// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var n=r(0),i=r(52),o=r(16),s=r(3),a=r(6),u=r(5),c=r(154),f=(r(4).Reflect||{}).construct,l=u(function(){function F(){}return!(f(function(){},[],F)instanceof F)}),d=!u(function(){f(function(){})});n(n.S+n.F*(l||d),"Reflect",{construct:function(e,t){o(e),s(t);var r=arguments.length<3?e:o(arguments[2]);if(d&&!l)return f(e,t,r);if(e==r){
// w/o altered newTarget, optimization for 0-4 arguments
switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}
// w/o altered newTarget, lot of arguments case
var n=[null];return n.push.apply(n,t),new(c.apply(e,n))}
// with altered newTarget, not support built-in constructors
var u=r.prototype,p=i(a(u)?u:Object.prototype),y=Function.apply.call(e,p,t);return a(y)?y:p}})},/* 341 */
/***/
function(e,t,r){
// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var n=r(12),i=r(0),o=r(3),s=r(31);
// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
i(i.S+i.F*r(5)(function(){
// eslint-disable-next-line no-undef
Reflect.defineProperty(n.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(e,t,r){o(e),t=s(t,!0),o(r);try{return n.f(e,t,r),!0}catch(e){return!1}}})},/* 342 */
/***/
function(e,t,r){
// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var n=r(0),i=r(25).f,o=r(3);n(n.S,"Reflect",{deleteProperty:function(e,t){var r=i(o(e),t);return!(r&&!r.configurable)&&delete e[t]}})},/* 343 */
/***/
function(e,t,r){"use strict";
// 26.1.5 Reflect.enumerate(target)
var n=r(0),i=r(3),o=function(e){this._t=i(e),// target
this._i=0;// next index
var t,r=this._k=[];for(t in e)r.push(t)};r(115)(o,"Object",function(){var e,t=this,r=t._k;do{if(t._i>=r.length)return{value:void 0,done:!0}}while(!((e=r[t._i++])in t._t));return{value:e,done:!1}}),n(n.S,"Reflect",{enumerate:function(e){return new o(e)}})},/* 344 */
/***/
function(e,t,r){function get(e,t){var r,s,c=arguments.length<3?e:arguments[2];return u(e)===c?e[t]:(r=n.f(e,t))?o(r,"value")?r.value:void 0!==r.get?r.get.call(c):void 0:a(s=i(e))?get(s,t,c):void 0}
// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var n=r(25),i=r(26),o=r(23),s=r(0),a=r(6),u=r(3);s(s.S,"Reflect",{get:get})},/* 345 */
/***/
function(e,t,r){
// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var n=r(25),i=r(0),o=r(3);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(e,t){return n.f(o(e),t)}})},/* 346 */
/***/
function(e,t,r){
// 26.1.8 Reflect.getPrototypeOf(target)
var n=r(0),i=r(26),o=r(3);n(n.S,"Reflect",{getPrototypeOf:function(e){return i(o(e))}})},/* 347 */
/***/
function(e,t,r){
// 26.1.9 Reflect.has(target, propertyKey)
var n=r(0);n(n.S,"Reflect",{has:function(e,t){return t in e}})},/* 348 */
/***/
function(e,t,r){
// 26.1.10 Reflect.isExtensible(target)
var n=r(0),i=r(3),o=Object.isExtensible;n(n.S,"Reflect",{isExtensible:function(e){return i(e),!o||o(e)}})},/* 349 */
/***/
function(e,t,r){
// 26.1.11 Reflect.ownKeys(target)
var n=r(0);n(n.S,"Reflect",{ownKeys:r(175)})},/* 350 */
/***/
function(e,t,r){
// 26.1.12 Reflect.preventExtensions(target)
var n=r(0),i=r(3),o=Object.preventExtensions;n(n.S,"Reflect",{preventExtensions:function(e){i(e);try{return o&&o(e),!0}catch(e){return!1}}})},/* 351 */
/***/
function(e,t,r){function set(e,t,r){var a,l,d=arguments.length<4?e:arguments[3],p=i.f(c(e),t);if(!p){if(f(l=o(e)))return set(l,t,r,d);p=u(0)}if(s(p,"value")){if(!1===p.writable||!f(d))return!1;if(a=i.f(d,t)){if(a.get||a.set||!1===a.writable)return!1;a.value=r,n.f(d,t,a)}else n.f(d,t,u(0,r));return!0}return void 0!==p.set&&(p.set.call(d,r),!0)}
// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var n=r(12),i=r(25),o=r(26),s=r(23),a=r(0),u=r(48),c=r(3),f=r(6);a(a.S,"Reflect",{set:set})},/* 352 */
/***/
function(e,t,r){
// 26.1.14 Reflect.setPrototypeOf(target, proto)
var n=r(0),i=r(107);i&&n(n.S,"Reflect",{setPrototypeOf:function(e,t){i.check(e,t);try{return i.set(e,t),!0}catch(e){return!1}}})},/* 353 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/Array.prototype.includes
var n=r(0),i=r(81)(!0);n(n.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r(44)("includes")},/* 354 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var n=r(0),i=r(176),o=r(15),s=r(13),a=r(16),u=r(121);n(n.P,"Array",{flatMap:function(e){var t,r,n=o(this);return a(e),t=s(n.length),r=u(n,0),i(r,n,n,t,0,1,e,arguments[1]),r}}),r(44)("flatMap")},/* 355 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var n=r(0),i=r(176),o=r(15),s=r(13),a=r(33),u=r(121);n(n.P,"Array",{flatten:function(){var e=arguments[0],t=o(this),r=s(t.length),n=u(t,0);return i(n,t,t,r,0,void 0===e?1:a(e)),n}}),r(44)("flatten")},/* 356 */
/***/
function(e,t,r){"use strict";
// https://github.com/mathiasbynens/String.prototype.at
var n=r(0),i=r(113)(!0);n(n.P,"String",{at:function(e){return i(this,e)}})},/* 357 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var n=r(0),i=r(177),o=r(89);
// https://github.com/zloirock/core-js/issues/280
n(n.P+n.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},/* 358 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-string-pad-start-end
var n=r(0),i=r(177),o=r(89);
// https://github.com/zloirock/core-js/issues/280
n(n.P+n.F*/Version\/10\.\d+(\.\d+)? Safari\//.test(o),"String",{padEnd:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},/* 359 */
/***/
function(e,t,r){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
r(62)("trimLeft",function(e){return function(){return e(this,1)}},"trimStart")},/* 360 */
/***/
function(e,t,r){"use strict";
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
r(62)("trimRight",function(e){return function(){return e(this,2)}},"trimEnd")},/* 361 */
/***/
function(e,t,r){"use strict";
// https://tc39.github.io/String.prototype.matchAll/
var n=r(0),i=r(32),o=r(13),s=r(84),a=r(86),u=RegExp.prototype,c=function(e,t){this._r=e,this._s=t};r(115)(c,"RegExp String",function(){var e=this._r.exec(this._s);return{value:e,done:null===e}}),n(n.P,"String",{matchAll:function(e){if(i(this),!s(e))throw TypeError(e+" is not a regexp!");var t=String(this),r="flags"in u?String(e.flags):a.call(e),n=new RegExp(e.source,~r.indexOf("g")?r:"g"+r);return n.lastIndex=o(e.lastIndex),new c(n,t)}})},/* 362 */
/***/
function(e,t,r){r(103)("asyncIterator")},/* 363 */
/***/
function(e,t,r){r(103)("observable")},/* 364 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-object-getownpropertydescriptors
var n=r(0),i=r(175),o=r(24),s=r(25),a=r(119);n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=o(e),u=s.f,c=i(n),f={},l=0;c.length>l;)void 0!==(r=u(n,t=c[l++]))&&a(f,t,r);return f}})},/* 365 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-object-values-entries
var n=r(0),i=r(178)(!1);n(n.S,"Object",{values:function(e){return i(e)}})},/* 366 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-object-values-entries
var n=r(0),i=r(178)(!0);n(n.S,"Object",{entries:function(e){return i(e)}})},/* 367 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(15),o=r(16),s=r(12);
// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
r(11)&&n(n.P+r(92),"Object",{__defineGetter__:function(e,t){s.f(i(this),e,{get:o(t),enumerable:!0,configurable:!0})}})},/* 368 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(15),o=r(16),s=r(12);
// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
r(11)&&n(n.P+r(92),"Object",{__defineSetter__:function(e,t){s.f(i(this),e,{set:o(t),enumerable:!0,configurable:!0})}})},/* 369 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(15),o=r(31),s=r(26),a=r(25).f;
// B.2.2.4 Object.prototype.__lookupGetter__(P)
r(11)&&n(n.P+r(92),"Object",{__lookupGetter__:function(e){var t,r=i(this),n=o(e,!0);do{if(t=a(r,n))return t.get}while(r=s(r))}})},/* 370 */
/***/
function(e,t,r){"use strict";var n=r(0),i=r(15),o=r(31),s=r(26),a=r(25).f;
// B.2.2.5 Object.prototype.__lookupSetter__(P)
r(11)&&n(n.P+r(92),"Object",{__lookupSetter__:function(e){var t,r=i(this),n=o(e,!0);do{if(t=a(r,n))return t.set}while(r=s(r))}})},/* 371 */
/***/
function(e,t,r){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=r(0);n(n.P+n.R,"Map",{toJSON:r(179)("Map")})},/* 372 */
/***/
function(e,t,r){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var n=r(0);n(n.P+n.R,"Set",{toJSON:r(179)("Set")})},/* 373 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
r(93)("Map")},/* 374 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
r(93)("Set")},/* 375 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
r(93)("WeakMap")},/* 376 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
r(93)("WeakSet")},/* 377 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
r(94)("Map")},/* 378 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
r(94)("Set")},/* 379 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
r(94)("WeakMap")},/* 380 */
/***/
function(e,t,r){
// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
r(94)("WeakSet")},/* 381 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-global
var n=r(0);n(n.G,{global:r(4)})},/* 382 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-global
var n=r(0);n(n.S,"System",{global:r(4)})},/* 383 */
/***/
function(e,t,r){
// https://github.com/ljharb/proposal-is-error
var n=r(0),i=r(29);n(n.S,"Error",{isError:function(e){return"Error"===i(e)}})},/* 384 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0);n(n.S,"Math",{clamp:function(e,t,r){return Math.min(r,Math.max(t,e))}})},/* 385 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0);n(n.S,"Math",{DEG_PER_RAD:Math.PI/180})},/* 386 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0),i=180/Math.PI;n(n.S,"Math",{degrees:function(e){return e*i}})},/* 387 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0),i=r(181),o=r(161);n(n.S,"Math",{fscale:function(e,t,r,n,s){return o(i(e,t,r,n,s))}})},/* 388 */
/***/
function(e,t,r){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=r(0);n(n.S,"Math",{iaddh:function(e,t,r,n){var i=e>>>0,o=t>>>0,s=r>>>0;return o+(n>>>0)+((i&s|(i|s)&~(i+s>>>0))>>>31)|0}})},/* 389 */
/***/
function(e,t,r){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=r(0);n(n.S,"Math",{isubh:function(e,t,r,n){var i=e>>>0,o=t>>>0,s=r>>>0;return o-(n>>>0)-((~i&s|~(i^s)&i-s>>>0)>>>31)|0}})},/* 390 */
/***/
function(e,t,r){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=r(0);n(n.S,"Math",{imulh:function(e,t){var r=+e,n=+t,i=65535&r,o=65535&n,s=r>>16,a=n>>16,u=(s*o>>>0)+(i*o>>>16);return s*a+(u>>16)+((i*a>>>0)+(65535&u)>>16)}})},/* 391 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0);n(n.S,"Math",{RAD_PER_DEG:180/Math.PI})},/* 392 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0),i=Math.PI/180;n(n.S,"Math",{radians:function(e){return e*i}})},/* 393 */
/***/
function(e,t,r){
// https://rwaldron.github.io/proposal-math-extensions/
var n=r(0);n(n.S,"Math",{scale:r(181)})},/* 394 */
/***/
function(e,t,r){
// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var n=r(0);n(n.S,"Math",{umulh:function(e,t){var r=+e,n=+t,i=65535&r,o=65535&n,s=r>>>16,a=n>>>16,u=(s*o>>>0)+(i*o>>>16);return s*a+(u>>>16)+((i*a>>>0)+(65535&u)>>>16)}})},/* 395 */
/***/
function(e,t,r){
// http://jfbastien.github.io/papers/Math.signbit.html
var n=r(0);n(n.S,"Math",{signbit:function(e){
// eslint-disable-next-line no-self-compare
return(e=+e)!=e?e:0==e?1/e==1/0:e>0}})},/* 396 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-promise-finally
var n=r(0),i=r(27),o=r(4),s=r(88),a=r(168);n(n.P+n.R,"Promise",{finally:function(e){var t=s(this,i.Promise||o.Promise),r="function"==typeof e;return this.then(r?function(r){return a(t,e()).then(function(){return r})}:e,r?function(r){return a(t,e()).then(function(){throw r})}:e)}})},/* 397 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-promise-try
var n=r(0),i=r(126),o=r(167);n(n.S,"Promise",{try:function(e){var t=i.f(this),r=o(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}})},/* 398 */
/***/
function(e,t,r){var n=r(39),i=r(3),o=n.key,s=n.set;n.exp({defineMetadata:function(e,t,r,n){s(e,t,i(r),o(n))}})},/* 399 */
/***/
function(e,t,r){var n=r(39),i=r(3),o=n.key,s=n.map,a=n.store;n.exp({deleteMetadata:function(e,t){var r=arguments.length<3?void 0:o(arguments[2]),n=s(i(t),r,!1);if(void 0===n||!n.delete(e))return!1;if(n.size)return!0;var u=a.get(t);return u.delete(r),!!u.size||a.delete(t)}})},/* 400 */
/***/
function(e,t,r){var n=r(39),i=r(3),o=r(26),s=n.has,a=n.get,u=n.key,c=function(e,t,r){if(s(e,t,r))return a(e,t,r);var n=o(t);return null!==n?c(e,n,r):void 0};n.exp({getMetadata:function(e,t){return c(e,i(t),arguments.length<3?void 0:u(arguments[2]))}})},/* 401 */
/***/
function(e,t,r){var n=r(171),i=r(180),o=r(39),s=r(3),a=r(26),u=o.keys,c=o.key,f=function(e,t){var r=u(e,t),o=a(e);if(null===o)return r;var s=f(o,t);return s.length?r.length?i(new n(r.concat(s))):s:r};o.exp({getMetadataKeys:function(e){return f(s(e),arguments.length<2?void 0:c(arguments[1]))}})},/* 402 */
/***/
function(e,t,r){var n=r(39),i=r(3),o=n.get,s=n.key;n.exp({getOwnMetadata:function(e,t){return o(e,i(t),arguments.length<3?void 0:s(arguments[2]))}})},/* 403 */
/***/
function(e,t,r){var n=r(39),i=r(3),o=n.keys,s=n.key;n.exp({getOwnMetadataKeys:function(e){return o(i(e),arguments.length<2?void 0:s(arguments[1]))}})},/* 404 */
/***/
function(e,t,r){var n=r(39),i=r(3),o=r(26),s=n.has,a=n.key,u=function(e,t,r){if(s(e,t,r))return!0;var n=o(t);return null!==n&&u(e,n,r)};n.exp({hasMetadata:function(e,t){return u(e,i(t),arguments.length<3?void 0:a(arguments[2]))}})},/* 405 */
/***/
function(e,t,r){var n=r(39),i=r(3),o=n.has,s=n.key;n.exp({hasOwnMetadata:function(e,t){return o(e,i(t),arguments.length<3?void 0:s(arguments[2]))}})},/* 406 */
/***/
function(e,t,r){var n=r(39),i=r(3),o=r(16),s=n.key,a=n.set;n.exp({metadata:function(e,t){return function(r,n){a(e,t,(void 0!==n?i:o)(r),s(n))}}})},/* 407 */
/***/
function(e,t,r){
// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var n=r(0),i=r(125)(),o=r(4).process,s="process"==r(29)(o);n(n.G,{asap:function(e){var t=s&&o.domain;i(t?t.bind(e):e)}})},/* 408 */
/***/
function(e,t,r){"use strict";
// https://github.com/zenparsing/es-observable
var n=r(0),i=r(4),o=r(27),s=r(125)(),a=r(8)("observable"),u=r(16),c=r(3),f=r(55),l=r(57),d=r(18),p=r(56),y=p.RETURN,h=function(e){return null==e?void 0:u(e)},v=function(e){var t=e._c;t&&(e._c=void 0,t())},g=function(e){return void 0===e._o},b=function(e){g(e)||(e._o=void 0,v(e))},m=function(e,t){c(e),this._c=void 0,this._o=e,e=new _(this);try{var r=t(e),n=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){n.unsubscribe()}:u(r),this._c=r)}catch(t){return void e.error(t)}g(this)&&v(this)};m.prototype=l({},{unsubscribe:function(){b(this)}});var _=function(e){this._s=e};_.prototype=l({},{next:function(e){var t=this._s;if(!g(t)){var r=t._o;try{var n=h(r.next);if(n)return n.call(r,e)}catch(e){try{b(t)}finally{throw e}}}},error:function(e){var t=this._s;if(g(t))throw e;var r=t._o;t._o=void 0;try{var n=h(r.error);if(!n)throw e;e=n.call(r,e)}catch(e){try{v(t)}finally{throw e}}return v(t),e},complete:function(e){var t=this._s;if(!g(t)){var r=t._o;t._o=void 0;try{var n=h(r.complete);e=n?n.call(r,e):void 0}catch(e){try{v(t)}finally{throw e}}return v(t),e}}});var R=function(e){f(this,R,"Observable","_f")._f=u(e)};l(R.prototype,{subscribe:function(e){return new m(e,this._f)},forEach:function(e){var t=this;return new(o.Promise||i.Promise)(function(r,n){u(e);var i=t.subscribe({next:function(t){try{return e(t)}catch(e){n(e),i.unsubscribe()}},error:n,complete:r})})}}),l(R,{from:function(e){var t="function"==typeof this?this:R,r=h(c(e)[a]);if(r){var n=c(r.call(e));return n.constructor===t?n:new t(function(e){return n.subscribe(e)})}return new t(function(t){var r=!1;return s(function(){if(!r){try{if(p(e,!1,function(e){if(t.next(e),r)return y})===y)return}catch(e){if(r)throw e;return void t.error(e)}t.complete()}}),function(){r=!0}})},of:function(){for(var e=0,t=arguments.length,r=new Array(t);e<t;)r[e]=arguments[e++];return new("function"==typeof this?this:R)(function(e){var t=!1;return s(function(){if(!t){for(var n=0;n<r.length;++n)if(e.next(r[n]),t)return;e.complete()}}),function(){t=!0}})}}),d(R.prototype,a,function(){return this}),n(n.G,{Observable:R}),r(54)("Observable")},/* 409 */
/***/
function(e,t,r){
// ie9- setTimeout & setInterval additional parameters fix
var n=r(4),i=r(0),o=r(89),s=[].slice,a=/MSIE .\./.test(o),u=function(e){return function(t,r){var n=arguments.length>2,i=!!n&&s.call(arguments,2);return e(n?function(){
// eslint-disable-next-line no-new-func
("function"==typeof t?t:Function(t)).apply(this,i)}:t,r)}};i(i.G+i.B+i.F*a,{setTimeout:u(n.setTimeout),setInterval:u(n.setInterval)})},/* 410 */
/***/
function(e,t,r){var n=r(0),i=r(124);n(n.G+n.B,{setImmediate:i.set,clearImmediate:i.clear})},/* 411 */
/***/
function(e,t,r){for(var n=r(123),i=r(50),o=r(19),s=r(4),a=r(18),u=r(63),c=r(8),f=c("iterator"),l=c("toStringTag"),d=u.Array,p={CSSRuleList:!0,// TODO: Not spec compliant, should be false.
CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,// TODO: Not spec compliant, should be false.
MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,// TODO: Not spec compliant, should be false.
TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=i(p),h=0;h<y.length;h++){var v,g=y[h],b=p[g],m=s[g],_=m&&m.prototype;if(_&&(_[f]||a(_,f,d),_[l]||a(_,l,g),u[g]=d,b))for(v in n)_[v]||o(_,v,n[v],!0)}},/* 412 */
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
var i=t&&t.prototype instanceof Generator?t:Generator,o=Object.create(i.prototype),s=new Context(n||[]);
// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
return o._invoke=makeInvokeMethod(e,r,s),o}
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
function defineIteratorMethods(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function AsyncIterator(e){function invoke(t,r,n,o){var s=tryCatch(e[t],e,r);if("throw"!==s.type){var a=s.arg,u=a.value;return u&&"object"==typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(e){invoke("next",e,n,o)},function(e){invoke("throw",e,n,o)}):Promise.resolve(u).then(function(e){
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
a.value=e,n(a)},o)}o(s.arg)}function enqueue(e,t){function callInvokeWithMethodAndArg(){return new Promise(function(r,n){invoke(e,t,r,n)})}
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
return doneResult()}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var a=maybeInvokeDelegate(s,r);if(a){if(a===h)continue;return a}}if("next"===r.method)
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
this.tryEntries=[{tryLoc:"root"}],e.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e){var t=e[s];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function next(){for(;++n<e.length;)if(i.call(e,n))return next.value=e[n],next.done=!1,next;return next.value=r,next.done=!0,next};return o.next=o}}
// Return an iterator with no values.
return{next:doneResult}}function doneResult(){return{value:r,done:!0}}var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},s=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"==typeof e,f=t.regeneratorRuntime;if(f)
// Don't bother evaluating the rest of this file if the runtime was
// already defined globally.
// If regeneratorRuntime is defined globally and we're in a module,
// make the exports object identical to regeneratorRuntime.
return void(c&&(e.exports=f));
// Define the runtime globally (as expected by generated code) as either
// module.exports (if we're in a module) or a new, empty object.
f=t.regeneratorRuntime=c?e.exports:{},f.wrap=wrap;var l="suspendedStart",d="suspendedYield",p="executing",y="completed",h={},v={};v[s]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(values([])));b&&b!==n&&i.call(b,s)&&(
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
f.awrap=function(e){return{__await:e}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[a]=function(){return this},f.AsyncIterator=AsyncIterator,
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
m[s]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(e){var t=[];for(var r in e)t.push(r);
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
return s.type="throw",s.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}if(this.done)throw e;for(var t=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],s=o.completion;if("root"===o.tryLoc)
// Exception thrown outside of any try block that could handle
// it, so set the completion value of the entire function to
// throw the exception.
return handle("end");if(o.tryLoc<=this.prev){var a=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(a&&u){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0);if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return handle(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return handle(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(
// Ignore the finally entry if control is not jumping to a
// location outside the try/catch block.
o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;resetTryEntry(r)}return i}}
// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){
// Deliberately forget the last sent value so that we don't
// accidentally pass it on to the delegate.
return this.delegate={iterator:values(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),h}}}(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
"object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(t,r(147))},/* 413 */
/***/
function(e,t,r){r(414),e.exports=r(27).RegExp.escape},/* 414 */
/***/
function(e,t,r){
// https://github.com/benjamingr/RexExp.escape
var n=r(0),i=r(415)(/[\\^$*+?.()|[\]{}]/g,"\\$&");n(n.S,"RegExp",{escape:function(e){return i(e)}})},/* 415 */
/***/
function(e,t){e.exports=function(e,t){var r=t===Object(t)?function(e){return t[e]}:t;return function(t){return String(t).replace(e,r)}}},/* 416 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(98),s=_interopRequireDefault(o),a=r(1),u=_interopRequireDefault(a),c=r(2),f=_interopRequireDefault(c),l=r(201),d=r(7),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(d),y=r(441),h=_interopRequireDefault(y),v=r(471),g=_interopRequireDefault(v),b=r(477),m=_interopRequireDefault(b),_=r(478),R=_interopRequireDefault(_),w=r(489),S=_interopRequireDefault(w),P=r(14),O=r(100),M=_interopRequireDefault(O),k=r(101),L=_interopRequireDefault(k),x=r(493),E=_interopRequireDefault(x),A=r(494),U=r(495),D=_interopRequireDefault(U),I=r(144),j=r(496),T=_interopRequireDefault(j),C=r(143),F=r(497),N=_interopRequireDefault(F),q=r(499),H=_interopRequireDefault(q),B=r(500),K=_interopRequireDefault(B),G=r(504),V=_interopRequireDefault(G),W=r(507),Y=_interopRequireDefault(W),z=r(518),J=_interopRequireDefault(z),$=r(520),Q=_interopRequireDefault($),X=p.getLogger("RuntimeUA"),Z=function(){/**
   * Create a new instance of Runtime User Agent
   * @param {descriptor} runtimeDescriptor - pass all the hyperty runtime descriptor
   * @param {runtimeFactory} runtimeFactory - Specific implementation for the environment where the core runtime will run;
   * @param {domain} domainURL - specify the domain base for the runtime;
   */
function RuntimeUA(e,t,r){if((0,u.default)(this,RuntimeUA),!e)throw new Error("The runtime descriptor is a needed parameter");if(!t)throw new Error("The sandbox factory is a needed parameter");if(!r)throw new Error("You need the domain of runtime");if(
// Configuration object with information related with servers
this.runtimeConfiguration=(0,s.default)({domain:r},I.runtimeConfiguration),this.runtimeFactory=t,this.log=X,this.logLevels=l.log,e.p2pHandlerStub&&"string"==typeof e.p2pHandlerStub&&e.p2pHandlerStub.includes("://")?this.p2p=!0:this.p2p=!1,C.runtimeUtils.runtimeDescriptor=e,this.runtimeUtils=C.runtimeUtils,this.storages={},"function"!=typeof t.createRuntimeCatalogue)throw new Error("Check your Runtime Factory because it needs the Runtime Catalogue implementation");if(this.runtimeCatalogue=t.createRuntimeCatalogue(),"function"!=typeof t.persistenceManager)throw new Error("Check your Runtime Factory because it needs the Persistence Manager implementation");if(this.persistenceManager=t.persistenceManager(),"function"!=typeof t.storageManager)throw new Error("Check your Runtime Factory because it needs the Storage Manager implementation");this.storages=(0,A.storage)(t),"function"==typeof t.runtimeCapabilities?this.runtimeCapabilities=t.runtimeCapabilities(this.storages.capabilities):X.info("Check your RuntimeFactory because it needs the Runtime Capabilities implementation")}/**
   * Intialize the installation of runtime
   *
   * @access public
   * @return {Promise<Boolean, Error>} this is Promise and if the installation process happened without any problems returns true otherwise the error.
   *
   * @memberOf RuntimeUA
   */
return(0,f.default)(RuntimeUA,[{key:"init",value:function(){var e=this;return new i.default(function(t,r){e.domain=e.runtimeConfiguration.domain;try{var n=e.runtimeCapabilities.getRuntimeCapabilities(),o=e.storages.runtime.get("runtime:URL"),a=e.storages.syncherManager.get("syncherManager:ObjectURLs"),u=e.storages.hypertyResources.get(),c=e.storages.runtime.get("p2pHandler:URL");i.default.all([o,n,a,u,c]).then(function(t){return e.runtimeURL=t[0]?t[0].runtimeURL:t[0],e.runtimeURL||(e.runtimeURL="runtime://"+e.domain+"/"+(0,P.generateGUID)(),e.storages.runtime.set("runtime:URL",1,{runtimeURL:e.runtimeURL})),e.capabilities=t[1],(0,s.default)(C.runtimeUtils.runtimeCapabilities.constraints,t[1]),e._dataObjectsStorage=new K.default(e.storages.syncherManager,t[2]||{}),e._hypertyResources=t[3]||{},e.p2pHandlerURL=t[4]?t[4].p2pHandlerURL:t[4],e.p2pHandlerURL||(e.p2pHandlerURL=e.runtimeURL+"/p2phandler/"+(0,P.generateGUID)(),X.info("[RuntimeUA - init] P2PHandlerURL: ",e.p2pHandlerURL),e.storages.runtime.set("p2pHandler:URL",1,{p2pHandlerURL:e.p2pHandlerURL})),e._loadComponents()}).then(function(t){return e._hypertyResourcesStorage=new V.default(e.runtimeURL,e.messageBus,e.storages.hypertyResources,e._hypertyResources),e.p2p?(X.info("[RuntimeUA - init] load p2pHandler: ",t),e._loadP2PHandler()):(X.info("[RuntimeUA - init] P2P not supported"),"P2P Not Supported")}).then(function(e){X.info("[runtime ua - init] - status: ",e),t(!0)},function(e){X.error("ERROR: ",e),t(!0)})}catch(e){r(e)}})}},{key:"_loadP2PHandler",value:function(){var e=this;return new i.default(function(t){var r=C.runtimeUtils.runtimeDescriptor,n=r.p2pHandlerStub,i={isHandlerStub:!0,runtimeURL:e.runtimeURL};X.log("[RuntimeUA loadP2PHandler] P2PStubHandler: ",n),e.loader.loadStub(n,i).then(function(r){var n=e.runtimeURL+"/ua",i={type:"subscribe",from:n,to:"domain://msg-node."+e.domain+"/sm",body:{subscribe:[r.url],source:e.runtimeURL}};e.messageBus.addListener(n,function(e){X.log("[runtime ua - listener] - receive msg: ",e)}),e.messageBus.postMessage(i,function(e){X.log("[runtime ua - postMessage] - reply: ",e)}),X.info("[runtime ua - p2p installation] - success: ",r),t(!0)}).catch(function(e){X.info("[runtime ua - p2p installation] - fail: ",e),t(!1)})})}},{key:"_loadComponents",value:function(){var e=this;return new i.default(function(t,r){try{
// Prepare the on instance to handle with the fallbacks and runtimeCatalogue;
e.descriptorInstance=new D.default(e.runtimeURL,e.runtimeCatalogue,e.runtimeConfiguration),
// Prepare the loader to load the hyperties, protostubs and idpproxy;
e.loader=new E.default(e.runtimeURL,e.runtimeConfiguration,e.descriptorInstance),
// Instantiate the identity Module
e.identityModule=new g.default(e.runtimeURL,e.runtimeCapabilities,e.storages.identity,e._dataObjectsStorage,L.default,e.runtimeCatalogue);
// Use the sandbox factory to create an AppSandbox;
// In the future can be decided by policyEngine if we need
// create a AppSandbox or not;
var n=e.runtimeFactory.createAppSandbox();
// Instantiate the Registry Module
e.registry=new h.default(e.runtimeURL,n,e.identityModule,e.runtimeCatalogue,e.runtimeCapabilities,e.storages.registry,e.p2pHandlerURL),
// Set the loader to load Hyperties, Stubs and IdpProxies
e.registry.loader=e.loader,
// Instantiate the Message Bus
e.messageBus=new S.default(e.registry),
// Prepare the address allocation instance;
e.addressAllocation=new M.default(e.runtimeURL,e.messageBus,e.registry),
// Instantiate the Policy Engine
e.policyEngine=new R.default(new Q.default(e.runtimeURL,e.identityModule,e.registry,e.storages.policy,e.runtimeCapabilities)),
// Instantiate Discovery
e.coreDiscovery=new H.default(e.runtimeURL,e.messageBus,e.graphConnector,e.runtimeFactory,e.registry),
// Instantiate the IdentityManager
e.identityManager=new m.default(e.identityModule),
// initialise the CryptoManager
L.default.init(e.runtimeURL,e.runtimeCapabilities,e.storages.cryptoManager,e._dataObjectsStorage,e.registry,e.coreDiscovery,e.identityModule,e.runtimeFactory),
// Instantiate the Graph Connector
e.graphConnector=new N.default(e.runtimeURL,e.messageBus,e.storageManager),e.handlers=new T.default(e.policyEngine,e.identityManager,L.default),e.messageBus.pipelineOut.handlers=[e.handlers.idmHandler,e.handlers.pepOutHandler,e.handlers.encryptHandler],e.messageBus.pipelineIn.handlers=[e.handlers.decryptHandler,e.handlers.pepInHandler],
// Add to App Sandbox the listener;
n.addListener("*",function(t){e.messageBus.postMessage(t)}),L.default.messageBus=e.messageBus,
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
e.syncherManager=new Y.default(e.runtimeURL,e.messageBus,e.registry,e.runtimeCatalogue,e.storages.syncherManager,null,e._dataObjectsStorage,e.identityModule),
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
e.subscriptionManager=new J.default(e.runtimeURL,e.messageBus,e.storages.subscriptions);
// this.subscriptionManager.init().then(()=>{
//   resolve(true);
// });
var o=[];o.push(e.subscriptionManager.init()),o.push(e.identityModule.init()),o.push(L.default.loadSessionKeys()),i.default.all(o).then(function(e){3===e.length?t(!0):r("[RuntimeUA._loadComponents] Error ] ",e)}).catch(function(e){throw Error(e)})}catch(e){r(e)}})}},{key:"loadHyperty",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments[2];if(!e)throw new Error("Hyperty descriptor url parameter is needed");return this.loader.loadHyperty(e,t,r)}},{key:"loadStub",value:function(e){if(!e)throw new Error("ProtoStub descriptor url parameter is needed");return this.loader.loadStub(e)}},{key:"loadIdpProxy",value:function(e){if(X.log("ipdProxyCatalogueURL",e),!e)throw new Error("The IDP Proxy URL is a needed parameter, could be a DOMAIN or a URL");return this.loader.loadIdpProxy(e)}},{key:"close",value:function(e){var t=this;return!0===e&&this.identityManager.reset(),X.info("Unregister all hyperties"),new i.default(function(e,r){t.registry.unregisterAllHyperties().then(function(t){X.info("All the hyperties are unregisted with Success:",t),e(!0)}).catch(function(e){X.error("Failed to unregister the hyperties",e),r(!1)})})}}]),RuntimeUA}();t.default=Z,e.exports=t.default},/* 417 */
/***/
function(e,t,r){r(182),r(128),r(190),r(426),r(434),r(435),e.exports=r(10).Promise},/* 418 */
/***/
function(e,t,r){var n=r(129),i=r(130);
// true  -> String#at
// false -> String#codePointAt
e.exports=function(e){return function(t,r){var o,s,a=String(i(t)),u=n(r),c=a.length;return u<0||u>=c?e?"":void 0:(o=a.charCodeAt(u),o<55296||o>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?e?a.charAt(u):o:e?a.slice(u,u+2):s-56320+(o-55296<<10)+65536)}}},/* 419 */
/***/
function(e,t,r){"use strict";var n=r(133),i=r(74),o=r(97),s={};
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
r(58)(s,r(22)("iterator"),function(){return this}),e.exports=function(e,t,r){e.prototype=n(s,{next:i(1,r)}),o(e,t+" Iterator")}},/* 420 */
/***/
function(e,t,r){var n=r(40),i=r(41),o=r(67);e.exports=r(45)?Object.defineProperties:function(e,t){i(e);for(var r,s=o(t),a=s.length,u=0;a>u;)n.f(e,r=s[u++],t[r]);return e}},/* 421 */
/***/
function(e,t,r){
// false -> Array#indexOf
// true  -> Array#includes
var n=r(46),i=r(134),o=r(422);e.exports=function(e){return function(t,r,s){var a,u=n(t),c=i(u.length),f=o(s,c);
// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare
if(e&&r!=r){for(;c>f;)
// eslint-disable-next-line no-self-compare
if((a=u[f++])!=a)return!0}else for(;c>f;f++)if((e||f in u)&&u[f]===r)return e||f||0;return!e&&-1}}},/* 422 */
/***/
function(e,t,r){var n=r(129),i=Math.max,o=Math.min;e.exports=function(e,t){return e=n(e),e<0?i(e+t,0):o(e,t)}},/* 423 */
/***/
function(e,t,r){"use strict";var n=r(424),i=r(425),o=r(75),s=r(46);
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
e.exports=r(183)(Array,"Array",function(e,t){this._t=s(e),// target
this._i=0,// next index
this._k=t},function(){var e=this._t,t=this._k,r=this._i++;return!e||r>=e.length?(this._t=void 0,i(1)):"keys"==t?i(0,r):"values"==t?i(0,e[r]):i(0,[r,e[r]])},"values"),
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
o.Arguments=o.Array,n("keys"),n("values"),n("entries")},/* 424 */
/***/
function(e,t){e.exports=function(){}},/* 425 */
/***/
function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},/* 426 */
/***/
function(e,t,r){"use strict";var n,i,o,s,a=r(73),u=r(17),c=r(65),f=r(191),l=r(21),d=r(36),p=r(95),y=r(427),h=r(428),v=r(195),g=r(196).set,b=r(430)(),m=r(138),_=r(197),R=r(431),w=r(198),S=u.TypeError,P=u.process,O=P&&P.versions,M=O&&O.v8||"",k=u.Promise,L="process"==f(P),x=function(){},E=i=m.f,A=!!function(){try{
// correct subclassing with @@species support
var e=k.resolve(1),t=(e.constructor={})[r(22)("species")]=function(e){e(x,x)};
// unhandled rejections tracking support, NodeJS Promise without it fails @@species test
return(L||"function"==typeof PromiseRejectionEvent)&&e.then(x)instanceof t&&0!==M.indexOf("6.6")&&-1===R.indexOf("Chrome/66")}catch(e){}}(),U=function(e){var t;return!(!d(e)||"function"!=typeof(t=e.then))&&t},D=function(e,t){if(!e._n){e._n=!0;var r=e._c;b(function(){for(var n=e._v,i=1==e._s,o=0;r.length>o;)!function(t){var r,o,s,a=i?t.ok:t.fail,u=t.resolve,c=t.reject,f=t.domain;try{a?(i||(2==e._h&&T(e),e._h=1),!0===a?r=n:(f&&f.enter(),r=a(n),// may throw
f&&(f.exit(),s=!0)),r===t.promise?c(S("Promise-chain cycle")):(o=U(r))?o.call(r,u,c):u(r)):c(n)}catch(e){f&&!s&&f.exit(),c(e)}}(r[o++]);// variable length - can't use forEach
e._c=[],e._n=!1,t&&!e._h&&I(e)})}},I=function(e){g.call(u,function(){var t,r,n,i=e._v,o=j(e);if(o&&(t=_(function(){L?P.emit("unhandledRejection",i,e):(r=u.onunhandledrejection)?r({promise:e,reason:i}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",i)}),
// Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
e._h=L||j(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},j=function(e){return 1!==e._h&&0===(e._a||e._c).length},T=function(e){g.call(u,function(){var t;L?P.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},C=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,// unwrap
t._v=e,t._s=2,t._a||(t._a=t._c.slice()),D(t,!0))},F=function(e){var t,r=this;if(!r._d){r._d=!0,r=r._w||r;// unwrap
try{if(r===e)throw S("Promise can't be resolved itself");(t=U(e))?b(function(){var n={_w:r,_d:!1};// wrap
try{t.call(e,c(F,n,1),c(C,n,1))}catch(e){C.call(n,e)}}):(r._v=e,r._s=1,D(r,!1))}catch(e){C.call({_w:r,_d:!1},e)}}};
// constructor polyfill
A||(
// 25.4.3.1 Promise(executor)
k=function(e){y(this,k,"Promise","_h"),p(e),n.call(this);try{e(c(F,this,1),c(C,this,1))}catch(e){C.call(this,e)}},
// eslint-disable-next-line no-unused-vars
n=function(e){this._c=[],// <- awaiting reactions
this._a=void 0,// <- checked in isUnhandled reactions
this._s=0,// <- state
this._d=!1,// <- done
this._v=void 0,// <- value
this._h=0,// <- rejection state, 0 - default, 1 - handled, 2 - unhandled
this._n=!1},n.prototype=r(432)(k.prototype,{
// 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
then:function(e,t){var r=E(v(this,k));return r.ok="function"!=typeof e||e,r.fail="function"==typeof t&&t,r.domain=L?P.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&D(this,!1),r.promise},
// 25.4.5.1 Promise.prototype.catch(onRejected)
catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new n;this.promise=e,this.resolve=c(F,e,1),this.reject=c(C,e,1)},m.f=E=function(e){return e===k||e===s?new o(e):i(e)}),l(l.G+l.W+l.F*!A,{Promise:k}),r(97)(k,"Promise"),r(433)("Promise"),s=r(10).Promise,
// statics
l(l.S+l.F*!A,"Promise",{
// 25.4.4.5 Promise.reject(r)
reject:function(e){var t=E(this);return(0,t.reject)(e),t.promise}}),l(l.S+l.F*(a||!A),"Promise",{
// 25.4.4.6 Promise.resolve(x)
resolve:function(e){return w(a&&this===s?k:this,e)}}),l(l.S+l.F*!(A&&r(199)(function(e){k.all(e).catch(x)})),"Promise",{
// 25.4.4.1 Promise.all(iterable)
all:function(e){var t=this,r=E(t),n=r.resolve,i=r.reject,o=_(function(){var r=[],o=0,s=1;h(e,!1,function(e){var a=o++,u=!1;r.push(void 0),s++,t.resolve(e).then(function(e){u||(u=!0,r[a]=e,--s||n(r))},i)}),--s||n(r)});return o.e&&i(o.v),r.promise},
// 25.4.4.4 Promise.race(iterable)
race:function(e){var t=this,r=E(t),n=r.reject,i=_(function(){h(e,!1,function(e){t.resolve(e).then(r.resolve,n)})});return i.e&&n(i.v),r.promise}})},/* 427 */
/***/
function(e,t){e.exports=function(e,t,r,n){if(!(e instanceof t)||void 0!==n&&n in e)throw TypeError(r+": incorrect invocation!");return e}},/* 428 */
/***/
function(e,t,r){var n=r(65),i=r(192),o=r(193),s=r(41),a=r(134),u=r(194),c={},f={},t=e.exports=function(e,t,r,l,d){var p,y,h,v,g=d?function(){return e}:u(e),b=n(r,l,t?2:1),m=0;if("function"!=typeof g)throw TypeError(e+" is not iterable!");
// fast case for arrays with default iterator
if(o(g)){for(p=a(e.length);p>m;m++)if((v=t?b(s(y=e[m])[0],y[1]):b(e[m]))===c||v===f)return v}else for(h=g.call(e);!(y=h.next()).done;)if((v=i(h,b,y.value,t))===c||v===f)return v};t.BREAK=c,t.RETURN=f},/* 429 */
/***/
function(e,t){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
e.exports=function(e,t,r){var n=void 0===r;switch(t.length){case 0:return n?e():e.call(r);case 1:return n?e(t[0]):e.call(r,t[0]);case 2:return n?e(t[0],t[1]):e.call(r,t[0],t[1]);case 3:return n?e(t[0],t[1],t[2]):e.call(r,t[0],t[1],t[2]);case 4:return n?e(t[0],t[1],t[2],t[3]):e.call(r,t[0],t[1],t[2],t[3])}return e.apply(r,t)}},/* 430 */
/***/
function(e,t,r){var n=r(17),i=r(196).set,o=n.MutationObserver||n.WebKitMutationObserver,s=n.process,a=n.Promise,u="process"==r(76)(s);e.exports=function(){var e,t,r,c=function(){var n,i;for(u&&(n=s.domain)&&n.exit();e;){i=e.fn,e=e.next;try{i()}catch(n){throw e?r():t=void 0,n}}t=void 0,n&&n.enter()};
// Node.js
if(u)r=function(){s.nextTick(c)};else if(!o||n.navigator&&n.navigator.standalone)if(a&&a.resolve){
// Promise.resolve without an argument throws an error in LG WebOS 2
var f=a.resolve(void 0);r=function(){f.then(c)}}else r=function(){
// strange IE + webpack dev server bug - use .call(global)
i.call(n,c)};else{var l=!0,d=document.createTextNode("");new o(c).observe(d,{characterData:!0}),// eslint-disable-line no-new
r=function(){d.data=l=!l}}return function(n){var i={fn:n,next:void 0};t&&(t.next=i),e||(e=i,r()),t=i}}},/* 431 */
/***/
function(e,t,r){var n=r(17),i=n.navigator;e.exports=i&&i.userAgent||""},/* 432 */
/***/
function(e,t,r){var n=r(58);e.exports=function(e,t,r){for(var i in t)r&&e[i]?e[i]=t[i]:n(e,i,t[i]);return e}},/* 433 */
/***/
function(e,t,r){"use strict";var n=r(17),i=r(10),o=r(40),s=r(45),a=r(22)("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:n[e];s&&t&&!t[a]&&o.f(t,a,{configurable:!0,get:function(){return this}})}},/* 434 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-promise-finally
var n=r(21),i=r(10),o=r(17),s=r(195),a=r(198);n(n.P+n.R,"Promise",{finally:function(e){var t=s(this,i.Promise||o.Promise),r="function"==typeof e;return this.then(r?function(r){return a(t,e()).then(function(){return r})}:e,r?function(r){return a(t,e()).then(function(){throw r})}:e)}})},/* 435 */
/***/
function(e,t,r){"use strict";
// https://github.com/tc39/proposal-promise-try
var n=r(21),i=r(138),o=r(197);n(n.S,"Promise",{try:function(e){var t=i.f(this),r=o(e);return(r.e?t.reject:t.resolve)(r.v),t.promise}})},/* 436 */
/***/
function(e,t,r){r(437),e.exports=r(10).Object.assign},/* 437 */
/***/
function(e,t,r){
// 19.1.3.1 Object.assign(target, source)
var n=r(21);n(n.S+n.F,"Object",{assign:r(438)})},/* 438 */
/***/
function(e,t,r){"use strict";
// 19.1.2.1 Object.assign(target, source, ...)
var n=r(67),i=r(139),o=r(78),s=r(77),a=r(187),u=Object.assign;
// should work with symbols and should have deterministic property order (V8 bug)
e.exports=!u||r(66)(function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach(function(e){t[e]=e}),7!=u({},e)[r]||Object.keys(u({},t)).join("")!=n})?function(e,t){for(// eslint-disable-line no-unused-vars
var r=s(e),u=arguments.length,c=1,f=i.f,l=o.f;u>c;)for(var d,p=a(arguments[c++]),y=f?n(p).concat(f(p)):n(p),h=y.length,v=0;h>v;)l.call(p,d=y[v++])&&(r[d]=p[d]);return r}:u},/* 439 */
/***/
function(e,t,r){r(440);var n=r(10).Object;e.exports=function(e,t,r){return n.defineProperty(e,t,r)}},/* 440 */
/***/
function(e,t,r){var n=r(21);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
n(n.S+n.F*!r(45),"Object",{defineProperty:r(40).f})},/* 441 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(79),i=_interopRequireDefault(n),o=r(37),s=_interopRequireDefault(o),a=r(9),u=_interopRequireDefault(a),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(7),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(p),h=r(143),v=r(455),g=r(100),b=_interopRequireDefault(g),m=r(467),_=_interopRequireDefault(m),R=r(469),w=_interopRequireDefault(R),S=r(14);r(470);var P=r(205),O=y.getLogger("Registry"),M={CREATED:"created",LIVE:"live",DEPLOYING:"deploying",DEPLOYED:"deployed",PROGRESS:"in-progress",DISCONNECTED:"disconnected",FAILED:"deployment-failed",DEAD:"dead"},k=function(){/**
  * To initialise the Runtime Registry with the RuntimeURL that will be the basis to derive the internal runtime addresses when allocating addresses to internal runtime component. In addition, the Registry domain back-end to be used to remotely register Runtime components, is also passed as input parameter.
  * @param  {MessageBus}          msgbus                msgbus
  * @param  {HypertyRuntimeURL}   runtimeURL            runtimeURL
  * @param  {AppSandbox}          appSandbox            appSandbox
  * @param  {runtimeCatalogue}    runtimeCatalogue      runtimeCatalogue
  * @param  {DomainURL}           remoteRegistry        remoteRegistry
  * @param  {storageManager}      storageManager
  */
function Registry(e,t,r,n,i,o,s,a){
// how some functions receive the parameters for example:
// new Registry('hyperty-runtime://sp1/123', appSandbox, idModule, remoteRegistry);
// registry.registerStub(sandbox, 'sp1');
// registry.registerHyperty(sandBox, 'hyperty-runtime://sp1/123');
// registry.resolve('hyperty-runtime://sp1/123');
if((0,f.default)(this,Registry),!e)throw new Error("runtimeURL is missing.");if(!o)throw new Error("storageManager is missing.");/*if (!remoteRegistry) throw new Error('remoteRegistry is missing');*/
var u=this;u.registryURL=e+"/registry/",u.appSandbox=t,u.runtimeURL=e,u.p2pHandlerURL=s,u.runtimeCatalogue=n,u.remoteRegistry=a,u.idModule=r,u.storageManager=o,u.runtimeCapabilities=i,u.identifier=(0,S.generateGUID)(),u.registrationRetries=5,// number of attempts to register Hyperties and DataObjects when errors occurs
// the expires in 3600, represents 1 hour
//the expires is in seconds, unit of measure received by the domain registry
u.expiresTime=3600,u.hypertiesListToRemove={},u.hypertiesList=[],u.remoteHypertyList=[],u.remoteDataObjectList=[],u.idpLegacyProxyList={},u.watchingYou=new P.WatchingYou,u.p2pHandlerStub={},u.p2pRequesterStub=u.watchingYou.watch("p2pRequesterStub",{},!0),u.p2pConnectionList=u.watchingYou.watch("p2pConnectionList",{},!0),u.p2pHandlerAssociation={},u.protostubsList=u.watchingYou.watch("protostubsList",{},!0),u.idpProxyList=u.watchingYou.watch("idpProxyList",{},!0),u.dataObjectList={},u.subscribedDataObjectList={},u.sandboxesList={sandbox:{},appSandbox:{}},u.pepList={},u.registries={},u._domain=(0,S.divideURL)(u.registryURL).domain,u.sandboxesList.appSandbox[e]=t;var c=new w.default(u);u._p2pConnectionResolve=c}return(0,d.default)(Registry,[{key:"_getIdentityAssociated",value:function(e,t){var r=this;for(var n in r.hypertiesList){var i=r.hypertiesList[n];if(i._hypertyURL===t)switch(e){case"username":return i._user.username;case"cn":return i._user.cn;case"locale":return i._user.locale;case"avatar":return i._user.avatar;case"userURL":return i._user.userURL;case".":return i._user;default:return""}}return""}},{key:"getAppSandbox",value:function(){return this.appSandbox}},{key:"getHypertyOwner",value:function(e){var t=this;for(var r in t.hypertiesList){var n=t.hypertiesList[r];if(n.hypertyURL===e)return n.user.userURL}}},{key:"getDataObjectReporter",value:function(e){var t=this,r=(0,S.removePathFromURL)(e);for(var n in t.dataObjectList){var i=t.dataObjectList[n];if(i.url===r)return i.reporter}return null}},{key:"getHypertyName",value:function(e){var t=this,r="hyperty"===(0,S.divideURL)(e).type,n=void 0,i=r?e:t.getReporterURLSynchonous(e);for(var o in t.hypertiesList){var s=t.hypertiesList[o];if(s.hypertyURL===i){n=s.objectName;break}}return n}},{key:"getReporterURL",value:function(e){var t=this;return new u.default(function(r,n){var i=t.dataObjectList[e];i?r(i.reporter):n("No reporter was found")})}},{key:"getReporterURLSynchonous",value:function(e){var t=this,r=t.dataObjectList[e];return r?r.reporter:void 0}},{key:"getDataObjectSubscriberHyperty",value:function(e){return this.subscribedDataObjectList[e]}},{key:"registerSubscribedDataObject",value:function(e,t){var r=this;void 0===r.subscribedDataObjectList[e]&&(r.subscribedDataObjectList[e]=t)}},{key:"getPreAuthSubscribers",value:function(e){var t=this,r=t.dataObjectList[e],n=[];return r&&(n=r.authorise),n}},{key:"unregisterAllHyperties",value:function(){var e=this,t=[];return new u.default(function(r,n){for(var i in e.hypertiesList){var o=e.hypertiesList[i],s=e.unregisterHypertyInstance(o.hypertyURL);t.push(s)}u.default.all(t).then(function(){r("successfully unregistered all hyperties")},function(e){n(e)})})}},{key:"unregisterHypertyInstance",value:function(e){
//TODO working but the user
var t=this,r={type:"execute",from:t.registryURL,to:e,body:{method:"close"}};
// Send message to hyperty to close
t._messageBus.postMessage(r,function(r){O.log("[Registry.unregisterHypertyInstance] Close Reply",r);var n={type:"update",from:t.registryURL,to:"domain://registry."+t._domain,body:{resource:"/hyperty/"+e,value:"disconnected",attribute:"status"}};t._messageBus.postMessage(n,function(e){O.log("[Registry] unregister hyperty Reply",e)})})}},{key:"unregisterDataObject",value:function(e){var t=this,r={type:"update",from:t.registryURL,to:"domain://registry."+t._domain,body:{resource:e,value:{status:"disconnected"}}};t._messageBus.postMessage(r,function(e){O.log("[Registry] unregister dataObject Reply",e)})}},{key:"deleteDataObjectInstance",value:function(e){var t=this,r={type:"delete",from:t.registryURL,to:"domain://registry."+t._domain,body:{value:{name:e}}};t._messageBus.postMessage(r,function(e){O.log("[Registry] unregister dataObject Reply",e)})}},{key:"updateHypertyInstance",value:function(e,t){var r=this,n={type:"UPDATE",from:r.registryURL,to:"domain://registry."+r._domain,body:{resource:e,value:t}};r._messageBus.post.postMessage(n,function(e){})}},{key:"registerSubscriber",value:function(e,t){var r=this,n=r.dataObjectList[e];n&&(n.subscribers||(n.subscribers=[]),n.subscribers.push(t),r.dataObjectList[e]=n)}},{key:"getDataObjectSubscribers",value:function(e){var t=this,r=t.dataObjectList[e];if(r)return r.subscribers;throw"No dataObject was found"}},{key:"registerDataObject",value:function(e){var t=this,r=(0,S.deepClone)(e);return new u.default(function(n,i){var o=[],a=r.url.split(":");o.push(a[0]),t.storageManager.get("registry:DataObjectURLs").then(function(a){a||(a={}),
//update the list with the new elements
a[e.name+e.schema+e.resources+e.reporter]=e.url;var u=void 0,c=void 0;0!==(0,s.default)(t.p2pHandlerStub).length&&(u=t.p2pHandlerStub[t.runtimeURL].url,c=h.runtimeUtils.runtimeDescriptor.p2pRequesterStub),r.startingTime=r.created,delete r.authorise,delete r.created,delete r.mutual,delete r.resume,r.expires||(r.expires=t.expiresTime),r.dataSchemes=o,u&&(r.p2pHandler=u,r.p2pRequester=c),t.isInterworkingProtoStub(r.reporter)&&(r.interworking=!0),r.status="live";var f=void 0;e.resume?(O.log("[Registry.registerDataObject] registering previously registered data object URL",r),f={type:"update",to:"domain://registry."+t.registryDomain,from:t.registryURL,body:{resource:r.url,value:{status:"live"}}}):(O.log("[Registry.registerDataObject] registering new data object URL",r),f={type:"create",from:t.registryURL,to:"domain://registry."+t.registryDomain,body:{value:r,policy:"policy"}}),t.dataObjectList[r.url]=e,
// step to obtain the list of all URL registered to updated with the new one.
t.storageManager.set("registry:DataObjectURLs",0,a).then(function(){try{t._messageBus.postMessageWithRetries(f,t._registrationRetries,function(e){
// log.log('[Registry.registerDataObject] ===> registerDataObject Reply: ', reply);
200===e.body.code?n(r):i("error on register DataObject")})}catch(e){O.error(e),i(e)}
//timer to keep the registration alive
// the time is defined by a little less than half of the expires time defined
setInterval(function(){var e={type:"update",from:t.registryURL,to:"domain://registry."+t.registryDomain,body:{resource:r.url,value:{status:"live"},method:"refresh"}};t._messageBus.postMessage(e,function(e){})},r.expires/1.1/2*1e3)}).catch(function(e){O.error("[Registry registerHyperty] Error: ",e),i(e)})})})}},{key:"_getResourcesAndSchemes",value:function(e){var t=this;return new u.default(function(r){var n=void 0;
// check if the hyperty resources is a vector or a string
// TODO delete later when catalogue is fixed
"string"==typeof e.hypertyType?(n=[],n.push(e.hypertyType)):n=e.hypertyType;var i=e.objectName,o=e.dataObjects,s=[];
//this will create a array with a Promise in each position
for(var a in o)s.push(t.runtimeCatalogue.getDataSchemaDescriptor(o[a]));
// as soon as the previous array is completed, this will wait for the resolve of all promises in the array
u.default.all(s).then(function(e){var t=[];for(var o in e){var s=e[o];t.push(s.sourcePackage.sourceCode.properties.scheme.constant)}
// log.log('[Registry] Hyperty Schemas', filteredDataSchemas);
// log.log('[Registry] Hyperty resources', resources);
r({resources:n,dataSchema:t,name:i})})})}},{key:"checkRegisteredURLs",value:function(e,t){var r=this;return new u.default(function(n){var i=e.reporter?"registry:DataObjectURLs":"registry:HypertyURLs";"string"==typeof t&&(i=t&&"hyperty"!==(0,S.divideURL)(t).type?"registry:DataObjectURLs":"registry:HypertyURLs"),
//debugger;
r.storageManager.get(i).then(function(o){if(o||(o={}),"string"==typeof t){O.info("[Registry - checkRegisteredURLs] - look for "+t+" on ",o);var a=(0,s.default)(o).map(function(e){var r=o[e].indexOf(t);return o[e][r]});return O.info("[Registry - checkRegisteredURLs] - found "+a.length+" results on ",a),n(1===a.length?a:void 0)}if("registry:HypertyURLs"!==i){var u=e.name+e.schema+e.resources+e.reporter;if(o[u]){
// log.log('[Registry] reusage of dataObject URL');
if("string"==typeof o[u]){var c=[];return c.push(o[u]),n(c)}return n(o[u])}
// log.log('[Registry] no dataObject URL was previously registered');
return n(void 0)}r._getResourcesAndSchemes(e).then(function(e){return n(o[e.resources+e.dataSchema+e.name]?o[e.resources+e.dataSchema+e.name]:void 0)})})})}},{key:"registerHyperty",value:function(e,t,r,n,i){var o=this,a=void 0;return new u.default(function(u,c){
//assuming descriptor come in this format, the service-provider-domain url is retrieved by a split instruction
//hyperty-catalogue://<service-provider-domain>/<catalogue-object-identifier>
var f=(0,S.divideURL)(t).domain;f.includes("catalogue")&&(f=f.replace("catalogue.","")),o.idModule.getIdentityAssertion(i).then(function(i){var l=i.userProfile,d=l.userURL;void 0===o._messageBus?c("[Registry registerHyperty] MessageBus is undefined"):
//call check if the protostub exist: to be removed
/*  _this.resolve(domainUrl).then(function(a) {
              // log.log('[Registry registerHyperty] stub to domain registry- ', a);*/
o.storageManager.get("registry:HypertyURLs").then(function(i){
// log.log('[Registry registerHyperty] storageManager] - ', urlsList);
o._getResourcesAndSchemes(r).then(function(p){a=p,i||(i={}),i[a.resources+a.dataSchema+a.name]=n.address,o.storageManager.set("registry:HypertyURLs",0,i).then(function(){o.registryDomain=f,
//check whether the received sanbox e ApplicationSandbox or a normal sandbox
"app"===e.type?o.sandboxesList.appSandbox[n.address[0]]=e:"normal"===e.type?o.sandboxesList.sandbox[n.address[0]]=e:c("Wrong SandboxType");var i=void 0,p=void 0;0!==(0,s.default)(o.p2pHandlerStub).length&&(i=o.p2pHandlerStub[o.runtimeURL].url,p=h.runtimeUtils.runtimeDescriptor.p2pRequesterStub);var y=o.runtimeURL,v=new _.default(o.identifier,o.registryURL,t,r,n.address[0],l,"guid",o.runtimeURL,"ctx",i,p,a.dataSchema,a.resources);o.hypertiesList.push(v);
//message to register the new hyperty, within the domain registry
var g=void 0,b=void 0,m=o.expiresTime;
// set a different expires value if configured in the Hyperty descriptor
r.configuration&&r.configuration.expires&&(m=r.configuration.expires),n.newAddress?(
// log.log('[Registry registerHyperty] registering new Hyperty URL', addressURL.address[0]);
g={user:d,descriptor:t,url:n.address[0],expires:m,resources:a.resources,dataSchemes:a.dataSchema,runtime:y,status:"live"},
// set a different expires if defined in the hyperty configuration
i&&(g.p2pHandler=i,g.p2pRequester=p),
// log.log('[Registry registerHyperty] registering new Hyperty at domain registry ', messageValue);
b={type:"create",from:o.registryURL,to:"domain://registry."+o.registryDomain,body:{value:g,policy:"policy"}}):(
// log.log('[Registry registerHyperty] registering previously registered Hyperty URL', addressURL.address[0]);
b={type:"update",to:"domain://registry."+o.registryDomain,from:o.registryURL,body:{resource:n.address[0],value:{status:"live",user:d}}},i&&(b.body.value.p2pHandler=i,b.body.value.p2pRequester=p));
// log.log('[Registry registerHyperty] Hyperty registration at domain registry  - ', message);
try{o._messageBus.postMessageWithRetries(b,o.registrationRetries,function(e){
// log.log('[Registry registerHyperty] Hyperty registration response: ', reply);
if(200===e.body.code){var r={url:n.address[0]};i&&(r.p2pHandler=i,r.p2pRequester=p),u(r)}else{if(404!==e.body.code)throw new Error("Failed to register an Hyperty: ",e);
// log.log('[Registry registerHyperty] The update was not possible. Registering new Hyperty at domain registry');
g={user:d,descriptor:t,url:n.address[0],expires:m,resources:a.resources,dataSchemes:a.dataSchema,runtime:y,status:"live"},i&&(g.p2pHandler=i,g.p2pRequester=p),b={type:"create",from:o.registryURL,to:"domain://registry."+o.registryDomain,body:{value:g,policy:"policy"}};try{o._messageBus.postMessageWithRetries(b,o.registrationRetries,function(e){
// log.log('[Registry registerHyperty] Hyperty registration update response: ', reply);
if(200!==e.body.code)throw new Error("Failed to register an Hyperty: "+e);var t={url:n.address[0]};i&&(t.p2pHandler=i,t.p2pRequester=p),u(t)})}catch(e){O.error(e),c(e)}}})}catch(e){O.error(e),c(e)}
//timer to keep the registration alive
// the time is defined by a little less than half of the expires time defined
setInterval(function(){var e={type:"update",from:o.registryURL,to:"domain://registry."+o.registryDomain,body:{resource:n.address[0],value:{status:"live"},method:"refresh"}};o._messageBus.postMessage(e,function(e){})},m/1.1/2*1e3)}).catch(function(e){
// log.log('[Registry registerHyperty] Error: ', reason);
c(e)})})})},function(e){c("[Registry registerHyperty] ",e)})})}},{key:"unregisterHyperty",value:function(e){var t=this;return new u.default(function(r,n){var i=!1,o=0;for(o=0;o<t.hypertiesList.length;o++){var s=t.hypertiesList[o];if(void 0!==s&&s.hypertyURL===e){i=!0;break}}!1===i?n("Hyperty not found"):(delete t.hypertiesList[o],r("Hyperty successfully deleted"))})}},{key:"discoverProtostub",value:function(e){if(!e)throw new Error("Parameter url needed");var t=this,r=(0,S.divideURL)(e),n=r.domain;if(t.protostubsList.hasOwnProperty(n)&&t.protostubsList[n].status===M.LIVE)return t.protostubsList[n];throw t.protostubsList[n]={status:M.DEPLOYING},new Error("[Registry - discoverProtoStub ] Message Node Protostub Not Found. Creating one")}},{key:"discoverP2PStub",value:function(e){var t=this;if(e){if(t.p2pRequesterStub.hasOwnProperty(e)&&t.p2pRequesterStub[e].status===M.LIVE)return t.p2pRequesterStub[e];throw t.p2pRequesterStub[e]={status:M.CREATED},new Error("[Registry - discoverP2PStub ] P2P Requester Stub Not Found. Creating one")}if(t.p2pHandlerStub.hasOwnProperty(t.runtimeURL))return t.p2pHandlerStub[t.runtimeURL];throw t.p2pHandlerStub[t.runtimeURL]={status:M.CREATED},new Error("[Registry - discoverP2PStub ] P2P Handler Stub Not Found.")}},{key:"registerStub",value:function(e,t,r,n,o){var s=this,a=o;return new u.default(function(u,c){var f=void 0;
//check if messageBus is registered in registry or not
void 0===s._messageBus&&c("MessageBus not found on registerStub"),O.info("[Registry - registerStub] - stubID ",t);/* if (!stubID.indexOf('msg-node.')) {
          stubID = stubID.substring(stubID.indexOf('.') + 1);
        }*/
var l=void 0;if(r)if(r.hasOwnProperty("isHandlerStub")&&r.isHandlerStub)f=s.p2pHandlerURL,s.p2pHandlerStub[t]={url:f,status:M.CREATED},s.p2pHandlerAssociation[s.runtimeURL]=[],s.sandboxesList.sandbox[f]=e,O.info("[Registry - registerStub - P2PHandlerStub] - ",t," - ",f),u(s.p2pHandlerStub[t]);else{l=r.p2pRequesterStub,f="runtime://"+(0,S.divideURL)(r.remoteRuntimeURL).domain+"/p2prequester/"+(0,S.generateGUID)(),O.info("[Registry - registerStub - P2PRequesterStub] - ",l," - ",f),
// to be clarified what is this p2pHandlerAssociation
s.p2pHandlerAssociation[s.runtimeURL].push(f),s.p2pRequesterStub[t]={url:f,status:M.CREATED},s.sandboxesList.sandbox[f]=e;
//Setup P2P Requester path into MN
var d={type:"subscribe",from:s.registryURL,to:"domain://msg-node."+s._domain+"/sm",body:{subscribe:[f],source:s.registryURL}};s._messageBus.postMessage(d,function(e){}),u(s.p2pRequesterStub[t])}else f="string"===!(void 0===o?"undefined":(0,i.default)(o))&&o.hasOwnProperty("_interworking")&&o._interworking?"runtime://"+t+"/protostub/scheme1":"runtime://"+t+"/protostub/"+(0,S.generateGUID)(),O.info("[Registry - registerStub - Normal Stub] - ",t),
// TODO: Optimize this
s.protostubsList[t]={url:f,status:M.DEPLOYING},n&&(s.protostubsList[t].descriptorURL=n),a&&a.interworking&&(s.protostubsList[t].interworking=a.interworking),s.sandboxesList.sandbox[f]=e,u(s.protostubsList[t]);
// resolve(runtimeProtoStubURL);
s._messageBus.addListener(f+"/status",function(e){s._onProtostubStatusEvent(e)})})}},{key:"_onProtostubStatusEvent",value:function(e){var t=this,r=e.from;if(!e.to.includes("/status"))return void O.error("[Registry onProtostubStatusEvent] Not Status Event: ",e);
// process status events from message node protostubs
if(r.includes("/protostub/"))
// TODO: uncomment below when protostubs are updated with new status value "live"
(0,s.default)(t.protostubsList).filter(function(e){return t.protostubsList[e].url===r}).map(function(r){t.protostubsList[r].status=e.body.value});else
// process status events from p2p connections
if(e.body.resource){var n=e.body.resource;if(t.p2pConnectionList[n])t.p2pConnectionList[n].status=e.body.value,t.p2pConnectionList[n].url=r;else{var i={status:e.body.value,url:r};t.p2pConnectionList[n]=i}
// log.log('[Registry - onProtostubStatusEvent] - P2PConnection status: ', _this.p2pConnectionList[remoteRuntimeURL]);
// Update P2P Requester protostub if it is coming from there
r.includes("/p2prequester/")?t.p2pRequesterStub[n].status=e.body.value:
// if from P2PHandler with status disconencted, lets remove from p2pConnectionList
"disconnected"===e.body.value&&delete t.p2pConnectionList[n]}else{if(r.includes("/p2prequester/"))
// It is an event from P2P Requester without mandatory "resource" field
return void O.error("[Registry onProtostubStatusEvent] resource missing: ",e);
// It is an event from P2P Handler
t.p2pHandlerStub[t.runtimeURL].status=e.body.value}}},{key:"unregisterStub",value:function(e){var t=this;return new u.default(function(r,n){t.protostubsList.hasOwnProperty(e)?(delete t.protostubsList[e],r("ProtostubURL removed")):n("Error on unregisterStub: Hyperty not found")})}},{key:"registerIdpProxy",value:function(e,t){var r=this;return new u.default(function(n,i){var o=void 0;
//check if messageBus is registered in registry or not
void 0===r._messageBus&&i("MessageBus not found on registerStub"),o="domain-idp://"+t+"/stub/"+(0,S.generateGUID)(),
// TODO: Optimize this
r.idpProxyList[t]={url:o,status:M.DEPLOYING},r.sandboxesList.sandbox[o]=e,
// sandbox.addListener('*', function(msg) {
//   _this._messageBus.postMessage(msg);
// });
n(o),r._messageBus.addListener(o+"/status",function(e){r._onIdpProxyStatusEvent(e)})})}},{key:"_onIdpProxyStatusEvent",value:function(e){var t=this,r=e.from;if(!e.to.includes("/status"))return void O.error("[Registry onIdpProxyStatusEvent] Not Status Event: ",e);(0,s.default)(t.idpProxyList).filter(function(e){return t.idpProxyList[e].url===r}).map(function(r){t.idpProxyList[r].status=e.body.value})}},{key:"discoverIdpProxy",value:function(e){if(!e)throw new Error("Parameter url needed");var t=this,r=(0,S.divideURL)(e),n=r.domain;if(t.idpProxyList.hasOwnProperty(n)&&t.idpProxyList[n].status===M.LIVE)return t.idpProxyList[n];throw t.idpProxyList[n]={status:M.PROGRESS},new Error("[Registry - discoverIdpProxy ] Idp Proxy Not Found. Creating one")}},{key:"registerPEP",value:function(e,t){var r=this;return new u.default(function(n){
//TODO check what parameter in the postMessage the pep is.
r.pepList[t]=e,n("PEP registered with success")})}},{key:"unregisterPEP",value:function(e){var t=this;return new u.default(function(r,n){void 0===t.pepList[e]?n("Pep Not found."):r("PEP successfully removed.")})}},{key:"getSandbox",value:function(e,t){if(!e)throw new Error("Parameter url needed");
// log.log('[Registry getSandbox] getSandbox for: ', url, ' and capabilities: ', constraints);
var r=this;return new u.default(function(n,i){var o=void 0;
//if no appSandbox was found, try to search in the normal sandboxes list
if(!(
//first try to find the url in the appSandbox list
o=r.sandboxesList.appSandbox[e])&&!(o=r.sandboxesList.sandbox[e])){var a=void 0;a=e.includes("://")?(0,S.divideURL)(e).domain:e;
// search in the sandboxes list for a entry containing the domain given
for(var u in r.sandboxesList.sandbox)
//todo: uncomment sandbox constraints match condition with runtime sharing
if(u.includes(a)&&r.sandboxesList.sandbox[u].matches(t)){var c=function(){var e=r.sandboxesList.sandbox[u];return(0,s.default)(t).filter(function(t){return"browser"===t&&e.type===v.SandboxType.NORMAL||"windowSanbox"===t&&e.type===v.SandboxType.WINDOW}).length>0&&(o=e),"break"}();if("break"===c)break}}o?n(o):i("no sandbox found for: "+e)})}},{key:"resolveNormalStub",value:function(e){
// log.log('resolveNormalStub ' + url);
var t=this;return new u.default(function(r,n){
//split the url to find the domainURL. deals with the url for example as:
//"hyperty-runtime://sp1/protostub/123",
var i=(0,S.divideURL)(e),o=i.domain,s=i.type;e.includes(t.runtimeURL)&&(O.error("[Registry - resolve] URL to be resolved should have listeners ",e),n("[Registry - resolve] URL to be resolved should have listeners ",e)),
// resolve the domain protostub in case of a message to global registry
e.includes("global://registry")?o=t._domain:o.indexOf("msg-node.")&&o.indexOf("registry.")||(o=o.substring(o.indexOf(".")+1)),t.isLegacy(e).then(function(i){
// if legacy it should resolve for <protocol>.<domain>
i&&"domain-idp"!==s&&(o=s+"."+(0,S.getUserIdentityDomain)(e)),O.info("[Registry.resolve] domainUrl:",o);var a=void 0;a="domain-idp"===s?!!t.idpProxyList.hasOwnProperty(o)&&t.idpProxyList[o]:!!t.protostubsList.hasOwnProperty(o)&&t.protostubsList[o],O.info("[Registry.resolve] registred:",a),
// TODO since the protostubs have other states this should be revised, because the status could change from DEPLOYED to LIVE
// TODO and this validation will trigger a new load of IDPProxy or Protostub;
a&&a.hasOwnProperty("status")&&(a.status===M.DEPLOYED||a.status===M.CREATED||a.status===M.LIVE||a.status===M.DISCONNECTED)?(O.info("[Registry.resolve] Resolved: ",a.url,a.status),r(a.url)):
//todo: use switch-case to support other types of stubs
"domain-idp"===s?(
// The IdP Proxy does not exist, let's prepare its deployment by watching its status
t.watchingYou.observe("idpProxyList",function(e){
// log.log('[Registry - resolveNormalStub] idpProxyList changed ' + _this.idpProxyList);
var n=e.keypath;n.includes("status")&&(n=n.replace(".status","")),n===o&&"status"===e.name&&e.newValue===M.CREATED&&
// log.log('[Registry - resolveNormalStub] idpProxyList is live ' + _this.idpProxyList[domainUrl]);
r(t.idpProxyList[o].url)}),a||(
// this process will load the idp proxy, because is not yet registered;
O.info("[Registry.resolveNormalStub] deploy new IDPProxy: ",o),t.loader.loadIdpProxy(o).then(function(){O.info("[Registry.resolveNormalStub] IdP Proxy deployed: ",t.idpProxyList[o])}).catch(function(e){O.error("[Registry.resolve] Error resolving Load IDPProxy: ",e),t.idpProxyList[o].status="deployment-failed",n(e)}))):(
// The protoStub does not exist, let's prepare its deployment by watching its status
t.watchingYou.observe("protostubsList",function(e){
// log.log('[Registry - resolveNormalStub] protostubsList changed ' + _this.protostubsList);
var n=e.keypath;n.includes("status")&&(n=n.replace(".status","")),n===o&&"status"===e.name&&e.newValue===M.CREATED&&
// log.log('[Registry - resolve] protostub is live ' + _this.protostubsList[domainUrl]);
r(t.protostubsList[o].url)}),a||(
// lets deploy the protostub
O.info("[Registry.resolve] trigger new ProtocolStub: ",o),t.loader.loadStub(o).then(function(){}).catch(function(e){O.error("[Registry.resolveNormalStub] Error resolving Load ProtocolStub: ",e),n(e)})))}).catch(function(e){O.error("[Registry.resolve] Error resolving islegacy: ",e),n(e)})})}},{key:"resolve",value:function(e){O.info("[Registry - Resolve] -  ",e);var t=this;return new u.default(function(r,n){var i=e.to?e.to:e,o=!(!e.body||!e.body.p2p)&&e.body.p2p;
// log.log('P2P: ', p2p, url);
// log.log('P2P - p2pHandlerStub: ', !_this.p2pHandlerStub[_this.runtimeURL], _this.p2pHandlerStub, _this.runtimeURL);
// log.log('P2P - isBackendServiceURL: ', isBackendServiceURL(url), isBackendServiceURL, url);
// log.log('P2P - includes runtimeURL: ', url.includes(_this.runtimeURL));
// log.log('P2P - includes p2phandler: ', url.includes('/p2phandler/'));
// log.log('P2P - includes p2prequester: ', url.includes('/p2prequester/'));
// Skip p2p procedure when not supported by the Runtime or for backend services
!t.p2pHandlerStub[t.runtimeURL]||(0,S.isBackendServiceURL)(i)||i.includes(t.runtimeURL)||i.includes("/p2phandler/")||i.includes("/p2prequester/")?(O.info("[Registry - resolve] - Resolve normal stub: ",t.p2pHandlerStub,t.runtimeURL,(0,S.isBackendServiceURL)(i),o,i),t.resolveNormalStub(i).then(function(e){r(e)})):(O.info("[Registry - resolve] - checkP2P: ",o,i,t._p2pConnectionResolve),t._p2pConnectionResolve.checkP2P(e).then(function(n){
// log.log('[Registry - resolve] found registered P2P: ', registeredP2P);
var s=t.p2pConnectionList[n.runtime];switch(s||(s=n,t.p2pConnectionList[n.runtime]=s),s.status){case M.LIVE:e.body.peer=n.runtime,r(s.url,e);break;case M.CREATED:// p2p connection setup is ongoing, use MN Stub
case M.PROGRESS:t.resolveNormalStub(i).then(function(e){r(e)});break;case M.DISCONNECTED:
// p2p connection stub was disconnected, let's ask to connect again
O.info("[Registry - Resolve] - p2pConnection is disconnected lets try to reconnect"),t._p2pConnectionResolve.reconnectP2PRequester(s).then(function(e){
// log.log('[Registry - Resolve] - was reconnected with p2pRequesterStubt: ', returnURL);
r(e)},function(e){O.info("[Registry - Resolve] - Reason: ",e),t.resolveNormalStub(i).then(function(e){r(e)})});break;default:O.info("[Registry - resolve] - P2P: ",o),o?t._setupP2PRequester(n).then(function(e){
// no p2p connection exists but the message sender is asking one. Lets try to setup one
r(e)},function(e){O.info("[Registry - Resolve] - Reason: ",e),t.resolveNormalStub(i).then(function(e){r(e)})}):
// no p2p connection exists and the message sender does not ask one. Lets use the MN Stub
t.resolveNormalStub(i).then(function(e){r(e)})}},function(e){O.info("[Registry - Resolve] - Reason: ",e),t.resolveNormalStub(i).then(function(e){r(e)})}))})}},{key:"_setupP2PRequester",value:function(e){var t=this;return O.log("[Registry._setupP2PConnection] loadStub with p2pRequester: ",e),new u.default(function(r,n){var i=e.runtime,o={remoteRuntimeURL:i,p2pHandler:e.p2pHandler,p2pRequesterStub:!0};
// lets prepare the p2pRequesterSTub deployment by setting an observer to its status changes
t.watchingYou.observe("p2pRequesterStub",function(e){O.log("[Registry._setupP2PConnection] p2pRequesterStubs changed "+t.p2pRequesterStub),e.keypath.split(".")[0]===i&&"status"===e.name&&e.newValue===M.LIVE&&(O.log("[Registry._setupP2PConnection] p2pRequester is live "+t.p2pRequesterStub[i]),r(t.p2pRequesterStub[i].url))}),
//  stub load
t.loader.loadStub(e.p2pRequester,o).then(function(){O.log("[Registry._setupP2PConnection] p2pRequester deployed: ",t.p2pRequesterStub[i])}).catch(function(e){n(e)})})}},{key:"isLegacy",value:function(e){var t=this;return new u.default(function(r,n){if(e===t._domain)return r(!1);O.log("[Registry] [Registry.Registry.isLegacy] ",e);
// TODO: to be defined in the runtime configuration
var i=["hyperty-runtime","domain","global","hyperty"],o=(0,S.divideURL)(e);if(-1!==i.indexOf(o.type)||o.domain===t._domain)return r(!1);
// process User URLs
if(e.split("@").length>1){var s=o.domain;
// log.log('[Registry] [Registry.Registry.isLegacy] domain: ', domain);
if(t.idpLegacyProxyList.hasOwnProperty(s)){var a=t.idpLegacyProxyList[s];return r(a.interworking?a.interworking:!1)}t._loader.descriptors.getIdpProxyDescriptor(s).then(function(e){
// log.log('[Registry] [Registry.Registry.isLegacy] Legacy stub descriptor: ', result);
e.interworking?(t.idpLegacyProxyList[s]=e,r(e.interworking)):r(!1)}).catch(function(e){O.warn("problem loading idp proxy descriptor for domain:",s," because ",e),n(e)})}else
// process protostub URLs
r(t.isInterworkingProtoStub(e))})}},{key:"isLocal",value:function(e){var t=["hyperty-runtime","runtime"],r=["hyperty"],n=e.split("://")[0];
// Process Runtime Core URLs.
// Messages originated from protostubs should also not include the runtimeURL in its URL.
if(-1!==t.indexOf(n))return e.includes(this.runtimeURL);
// Process Hyperty URLs
// Todo: hypertiesList should be an object not an array
if(-1!==r.indexOf(n)){for(var i in this.hypertiesList){if(this.hypertiesList[i].hypertyURL===e)return!0}return!1}
// Process Data Object URLs
e.includes("/subscription")&&(e=e.substring(0,e.indexOf("/subscription")));var o=this.dataObjectList[e];return!!o&&(!o.interworking||!o.interworking)}},{key:"isInterworkingProtoStub",value:function(e){var t=this;return"boolean"!=typeof e&&(!!e.includes("/protostub/")&&(0,s.default)(t.protostubsList).filter(function(r){return t.protostubsList[r].url===e}).map(function(e){return!!t.protostubsList[e].hasOwnProperty("interworking")&&t.protostubsList[e].interworking})[0])}},{key:"loader",set:function(e){this._loader=e},get:function(){return this._loader}},{key:"messageBus",get:function(){return this._messageBus},set:function(e){var t=this;t._messageBus=e,t._messageBus.addListener(t.registryURL,function(e){
// log.log('[Registry listener] ', msg);
(0,S.isHypertyURL)(e.from),e.body.hasOwnProperty("criteria");e.body.hasOwnProperty("resource")&&"."!==e.body.resource&&((0,S.isURL)(e.body.resource),(0,S.isUserURL)(e.body.resource),(0,S.isHypertyURL)(e.body.resource));e.type;if(e.body.hasOwnProperty("value")&&(e.body.value.hasOwnProperty("name"),e.body.value.hasOwnProperty("user")),"response"===e.type)return void O.error("[Register listener] skipping ",e);
// msg sent by identity manager library
var r=t._getIdentityAssociated(e.body.resource,e.body.criteria),n={id:e.id,type:"response",to:e.from,from:e.to,body:{resource:r}};n.body.code=r?200:404,t._messageBus.postMessage(n)});
// Install AddressAllocation
var r=b.default.instance;t.addressAllocation=r}}]),Registry}();t.default=k,e.exports=t.default},/* 442 */
/***/
function(e,t,r){e.exports={default:r(443),__esModule:!0}},/* 443 */
/***/
function(e,t,r){r(128),r(190),e.exports=r(140).f("iterator")},/* 444 */
/***/
function(e,t,r){e.exports={default:r(445),__esModule:!0}},/* 445 */
/***/
function(e,t,r){r(446),r(182),r(451),r(452),e.exports=r(10).Symbol},/* 446 */
/***/
function(e,t,r){"use strict";
// ECMAScript 6 symbols shim
var n=r(17),i=r(59),o=r(45),s=r(21),a=r(185),u=r(447).KEY,c=r(66),f=r(136),l=r(97),d=r(96),p=r(22),y=r(140),h=r(141),v=r(448),g=r(449),b=r(41),m=r(36),_=r(46),R=r(132),w=r(74),S=r(133),P=r(450),O=r(142),M=r(40),k=r(67),L=O.f,x=M.f,E=P.f,A=n.Symbol,U=n.JSON,D=U&&U.stringify,I=p("_hidden"),j=p("toPrimitive"),T={}.propertyIsEnumerable,C=f("symbol-registry"),F=f("symbols"),N=f("op-symbols"),q=Object.prototype,H="function"==typeof A,B=n.QObject,K=!B||!B.prototype||!B.prototype.findChild,G=o&&c(function(){return 7!=S(x({},"a",{get:function(){return x(this,"a",{value:7}).a}})).a})?function(e,t,r){var n=L(q,t);n&&delete q[t],x(e,t,r),n&&e!==q&&x(q,t,n)}:x,V=function(e){var t=F[e]=S(A.prototype);return t._k=e,t},W=H&&"symbol"==typeof A.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof A},Y=function(e,t,r){return e===q&&Y(N,t,r),b(e),t=R(t,!0),b(r),i(F,t)?(r.enumerable?(i(e,I)&&e[I][t]&&(e[I][t]=!1),r=S(r,{enumerable:w(0,!1)})):(i(e,I)||x(e,I,w(1,{})),e[I][t]=!0),G(e,t,r)):x(e,t,r)},z=function(e,t){b(e);for(var r,n=v(t=_(t)),i=0,o=n.length;o>i;)Y(e,r=n[i++],t[r]);return e},J=function(e,t){return void 0===t?S(e):z(S(e),t)},$=function(e){var t=T.call(this,e=R(e,!0));return!(this===q&&i(F,e)&&!i(N,e))&&(!(t||!i(this,e)||!i(F,e)||i(this,I)&&this[I][e])||t)},Q=function(e,t){if(e=_(e),t=R(t,!0),e!==q||!i(F,t)||i(N,t)){var r=L(e,t);return!r||!i(F,t)||i(e,I)&&e[I][t]||(r.enumerable=!0),r}},X=function(e){for(var t,r=E(_(e)),n=[],o=0;r.length>o;)i(F,t=r[o++])||t==I||t==u||n.push(t);return n},Z=function(e){for(var t,r=e===q,n=E(r?N:_(e)),o=[],s=0;n.length>s;)!i(F,t=n[s++])||r&&!i(q,t)||o.push(F[t]);return o};
// 19.4.1.1 Symbol([description])
H||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var e=d(arguments.length>0?arguments[0]:void 0),t=function(r){this===q&&t.call(N,r),i(this,I)&&i(this[I],e)&&(this[I][e]=!1),G(this,e,w(1,r))};return o&&K&&G(q,e,{configurable:!0,set:t}),V(e)},a(A.prototype,"toString",function(){return this._k}),O.f=Q,M.f=Y,r(202).f=P.f=X,r(78).f=$,r(139).f=Z,o&&!r(73)&&a(q,"propertyIsEnumerable",$,!0),y.f=function(e){return V(p(e))}),s(s.G+s.W+s.F*!H,{Symbol:A});for(var ee="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),te=0;ee.length>te;)p(ee[te++]);for(var re=k(p.store),ne=0;re.length>ne;)h(re[ne++]);s(s.S+s.F*!H,"Symbol",{
// 19.4.2.1 Symbol.for(key)
for:function(e){return i(C,e+="")?C[e]:C[e]=A(e)},
// 19.4.2.5 Symbol.keyFor(sym)
keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var t in C)if(C[t]===e)return t},useSetter:function(){K=!0},useSimple:function(){K=!1}}),s(s.S+s.F*!H,"Object",{
// 19.1.2.2 Object.create(O [, Properties])
create:J,
// 19.1.2.4 Object.defineProperty(O, P, Attributes)
defineProperty:Y,
// 19.1.2.3 Object.defineProperties(O, Properties)
defineProperties:z,
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
getOwnPropertyDescriptor:Q,
// 19.1.2.7 Object.getOwnPropertyNames(O)
getOwnPropertyNames:X,
// 19.1.2.8 Object.getOwnPropertySymbols(O)
getOwnPropertySymbols:Z}),
// 24.3.2 JSON.stringify(value [, replacer [, space]])
U&&s(s.S+s.F*(!H||c(function(){var e=A();
// MS Edge converts symbol values to JSON as {}
// WebKit converts symbol values to JSON as null
// V8 throws on boxed symbols
return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))})),"JSON",{stringify:function(e){for(var t,r,n=[e],i=1;arguments.length>i;)n.push(arguments[i++]);if(r=t=n[1],(m(t)||void 0!==e)&&!W(e))// IE8 returns string on undefined
return g(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!W(t))return t}),n[1]=t,D.apply(U,n)}}),
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
A.prototype[j]||r(58)(A.prototype,j,A.prototype.valueOf),
// 19.4.3.5 Symbol.prototype[@@toStringTag]
l(A,"Symbol"),
// 20.2.1.9 Math[@@toStringTag]
l(Math,"Math",!0),
// 24.3.3 JSON[@@toStringTag]
l(n.JSON,"JSON",!0)},/* 447 */
/***/
function(e,t,r){var n=r(96)("meta"),i=r(36),o=r(59),s=r(40).f,a=0,u=Object.isExtensible||function(){return!0},c=!r(66)(function(){return u(Object.preventExtensions({}))}),f=function(e){s(e,n,{value:{i:"O"+ ++a,// object ID
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
f(e)}return e[n].w},p=function(e){return c&&y.NEED&&u(e)&&!o(e,n)&&f(e),e},y=e.exports={KEY:n,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},/* 448 */
/***/
function(e,t,r){
// all enumerable object keys, includes symbols
var n=r(67),i=r(139),o=r(78);e.exports=function(e){var t=n(e),r=i.f;if(r)for(var s,a=r(e),u=o.f,c=0;a.length>c;)u.call(e,s=a[c++])&&t.push(s);return t}},/* 449 */
/***/
function(e,t,r){
// 7.2.2 IsArray(argument)
var n=r(76);e.exports=Array.isArray||function(e){return"Array"==n(e)}},/* 450 */
/***/
function(e,t,r){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var n=r(46),i=r(202).f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return i(e)}catch(e){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?a(e):i(n(e))}},/* 451 */
/***/
function(e,t,r){r(141)("asyncIterator")},/* 452 */
/***/
function(e,t,r){r(141)("observable")},/* 453 */
/***/
function(e,t,r){r(454),e.exports=r(10).Object.keys},/* 454 */
/***/
function(e,t,r){
// 19.1.2.14 Object.keys(O)
var n=r(77),i=r(67);r(99)("keys",function(){return function(e){return i(n(e))}})},/* 455 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SandboxType=void 0;var n=r(37),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(60),u=_interopRequireDefault(a),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(68),y=_interopRequireDefault(p),h=r(69),v=_interopRequireDefault(h),g=r(464),b=_interopRequireDefault(g),m=r(465),_=_interopRequireDefault(m),R=(t.SandboxType={APP:"app",NORMAL:"normal",WINDOW:"window"},function(e){function Sandbox(e){(0,f.default)(this,Sandbox);var t=(0,y.default)(this,(Sandbox.__proto__||(0,u.default)(Sandbox)).call(this)),r=t;return e&&(r.capabilities=e),t}/**
   * Deploy an instance of the component into the sandbox.
   * @param  {string} componentSourceCode Component source code (Hyperty, ProtoStub, etc)
   * @param  {URL} componentURL Hyperty, ProtoStub, or any other component address.
   * @param  {Config} configuration Config parameters of the component
   * @return {Promise<string>} return deployed if successful, or any other string with an error
   */
return(0,v.default)(Sandbox,e),(0,d.default)(Sandbox,[{key:"deployComponent",value:function(e,t,r){var n=this;
// let messageFactory = _this.messageFactory;
return new s.default(function(i,o){
//FLOW-OUT: deploy message for the internal SandboxRegistry -> _onDeploy
var s={type:"create",from:b.default.ExternalDeployAddress,to:b.default.InternalDeployAddress,body:{url:t,sourceCode:e,config:r}};
//send message into the sandbox internals and wait for reply
n.postMessage(s,function(e){200===e.body.code?
//is this response complaint with the spec?
i("deployed"):o(e.body.desc)})})}},{key:"removeComponent",value:function(e){var t=this;return new s.default(function(r,n){
//FLOW-OUT: un-deploy message for the internal SandboxRegistry -> _onRemove
var i={type:"delete",from:b.default.ExternalDeployAddress,to:b.default.InternalDeployAddress,body:{url:e}};
//send message into the sandbox internals and wait for reply
t.postMessage(i,function(e){200===e.body.code?
//is this response complaint with the spec?
r("undeployed"):n(e.body.desc)})})}},{key:"matches",value:function(e){var t=this,r=(0,i.default)(e).filter(function(r){return!(t.capabilities[r]&&t.capabilities[r]===e[r])});return 0===r.length||!e[r]}}]),Sandbox}(_.default));t.default=R},/* 456 */
/***/
function(e,t,r){r(457),e.exports=r(10).Object.getPrototypeOf},/* 457 */
/***/
function(e,t,r){
// 19.1.2.9 Object.getPrototypeOf(O)
var n=r(77),i=r(189);r(99)("getPrototypeOf",function(){return function(e){return i(n(e))}})},/* 458 */
/***/
function(e,t,r){e.exports={default:r(459),__esModule:!0}},/* 459 */
/***/
function(e,t,r){r(460),e.exports=r(10).Object.setPrototypeOf},/* 460 */
/***/
function(e,t,r){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var n=r(21);n(n.S,"Object",{setPrototypeOf:r(461).set})},/* 461 */
/***/
function(e,t,r){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var n=r(36),i=r(41),o=function(e,t){if(i(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?// eslint-disable-line
function(e,t,n){try{n=r(65)(Function.call,r(142).f(Object.prototype,"__proto__").set,2),n(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:n(e,r),e}}({},!1):void 0),check:o}},/* 462 */
/***/
function(e,t,r){r(463);var n=r(10).Object;e.exports=function(e,t){return n.create(e,t)}},/* 463 */
/***/
function(e,t,r){var n=r(21);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
n(n.S,"Object",{create:r(133)})},/* 464 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=function(){/* private
  _components: <url: instance>
  */
function SandboxRegistry(e){(0,i.default)(this,SandboxRegistry);var t=this;t._bus=e,t._components={},e.addListener(SandboxRegistry.InternalDeployAddress,function(e){
//console.log('SandboxRegistry-RCV: ', msg);
// let responseMsg = {
//   id: msg.id, type: 'response', from: SandboxRegistry.InternalDeployAddress, to: SandboxRegistry.ExternalDeployAddress
// };
switch(e.type){case"create":t._onDeploy(e);break;case"delete":t._onRemove(e)}})}return(0,s.default)(SandboxRegistry,[{key:"_responseMsg",value:function(e,t,r){var n={id:e.id,type:"response",from:SandboxRegistry.InternalDeployAddress,to:SandboxRegistry.ExternalDeployAddress},i={};
// return messageFactory.createResponse(msg, code, value);
return t&&(i.code=t),r&&(i.desc=r),n.body=i,n}},{key:"_onDeploy",value:function(e){var t=this,r=e.body.config,n=e.body.url,i=e.body.sourceCode,o=void 0,s=void 0;if(t._components.hasOwnProperty(n))o=500,s="Instance "+n+" already exist!";else try{t._components[n]=t._create(n,i,r),o=200}catch(e){o=500,s=e}var a=t._responseMsg(e,o,s);t._bus.postMessage(a)}},{key:"_onRemove",value:function(e){var t=this,r=e.body.url,n=void 0,i=void 0;t._components.hasOwnProperty(r)?(
//remove component from the pool and all listeners
delete t._components[r],t._bus.removeAllListenersOf(r),n=200):(n=500,i="Instance "+r+" doesn't exist!");var o=t._responseMsg(e,n,i);t._bus.postMessage(o)}},{key:"_create",value:function(e,t,r){}},{key:"components",get:function(){return this._components}}]),SandboxRegistry}();a.ExternalDeployAddress="hyperty-runtime://sandbox/external",a.InternalDeployAddress="hyperty-runtime://sandbox/internal",t.default=a,e.exports=t.default},/* 465 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(60),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(68),f=_interopRequireDefault(c),l=r(69),d=_interopRequireDefault(l),p=r(204),y=_interopRequireDefault(p),h=function(e){function MiniBus(){return(0,s.default)(this,MiniBus),(0,f.default)(this,(MiniBus.__proto__||(0,i.default)(MiniBus)).call(this))}/**
   * Post a message for routing. Message is routed directly to the external routing _onPostMessage.
   * @param  {Message} inMsg            JSON with mandatory Message structure {id, type, from, to}
   * @param  {Callback} responseCallback Optional callback if a response is expected from the request. A response will be always sent, even if it is a "Timeout".
   * @return {number}                  the Message id
   */
return(0,d.default)(MiniBus,e),(0,u.default)(MiniBus,[{key:"postMessage",value:function(e,t,r){var n=this;
//always send to external (to core MessageBus)
return n._genId(e),n._responseCallback(e,t,r),n._onPostMessage(e),e.id}},{key:"_onMessage",value:function(e){var t=this;if(!t._onResponse(e)){var r=t._subscriptions[e.to];r?(t._publishOn(r,e),e.to.startsWith("hyperty")||t._publishOnDefault(e)):t._publishOnDefault(e)}}}]),MiniBus}(y.default);/**
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
t.default=h,e.exports=t.default},/* 466 */
/***/
function(e,t,r){var n=r(10),i=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){// eslint-disable-line no-unused-vars
return i.stringify.apply(i,arguments)}},/* 467 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(60),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(68),f=_interopRequireDefault(c),l=r(69),d=_interopRequireDefault(l),p=r(468),y=_interopRequireDefault(p),h=function(e){function HypertyInstance(e,t,r,n,o,a,u,c,l,d,p,y,h,v,g){(0,s.default)(this,HypertyInstance);var b=(0,f.default)(this,(HypertyInstance.__proto__||(0,i.default)(HypertyInstance)).call(this,e,t,r,p,v,g)),m=b;return m._descriptor=n,m._hypertyURL=o,m._user=a,m._guid=u,m._runtime=c,m._context=l,m._p2pHandler=d,m._dataSchemes=y,m._resources=h,b}return(0,d.default)(HypertyInstance,e),(0,u.default)(HypertyInstance,[{key:"user",set:function(e){this.user=e},get:function(){return this._user}},{key:"hypertyURL",get:function(){return this._hypertyURL}},{key:"descriptor",get:function(){return this._descriptor}},{key:"objectName",get:function(){return this._descriptor._objectName}},{key:"p2pHandler",get:function(){return this._p2pHandler}},{key:"dataSchemes",get:function(){return this._dataSchemes}},{key:"resources",get:function(){return this._resources}},{key:"runtimeURL",get:function(){return this._runtime}}]),HypertyInstance}(y.default);/**
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
t.default=h,e.exports=t.default},/* 468 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=function(){function RegistryDataModel(e,t,r,n,o,s,a,u,c){(0,i.default)(this,RegistryDataModel);var f=this;f._id=e,f._url=t,f._descriptorURL=r,f._startingTime=o,f._lastModified=s,f._status=a,f._stubs=u,f._stubsConfiguration=c,f._p2pRequester=n}return(0,s.default)(RegistryDataModel,[{key:"id",get:function(){return this._id}},{key:"url",get:function(){return this._url}},{key:"descriptor",get:function(){return this._descriptorURL}},{key:"p2pRequester",get:function(){return this._p2pRequester}},{key:"lastModified",get:function(){return this._lastModified}}]),RegistryDataModel}();t.default=a,e.exports=t.default},/* 469 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(7),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=f.getLogger("P2PConnectionResolve"),d=function(){function P2PConnectionResolve(e){(0,s.default)(this,P2PConnectionResolve);var t=this;t._registry=e,t._remoteP2PEntities={}}/**
  * Verifies if remote Entity can be reached with a P2P Connection.
  * @param  {URL.URL}        info           object URL
  * @return {HypertyDataObjectInstance}  addressURL     return the Data Object instance registered URL, return undefined otherwise
  */
return(0,u.default)(P2PConnectionResolve,[{key:"checkP2P",value:function(e){if(!e.hasOwnProperty("to"))
// throw Error('The p2p verification was failed');
return i.default.reject("The p2p verification was failed");var t=e.to.split("://")[0],r=e.to.split("://")[1].split("/")[2],n=void 0;n=r?e.to.substring(0,e.to.indexOf("/"+r)):e.to;var o={};switch(e.body&&e.body.p2p&&(o.p2p=e.body.p2p),e.body&&e.body.p2pHandler&&e.body.p2pRequester&&(o.p2pHandler=e.body.p2pHandler,o.p2pRequester=e.body.p2pRequester,o.runtime=e.body.p2pHandler.split("/p2phandler/")[0]),t){case"runtime":return this.checkP2PRuntime(n,o);default:return this.checkP2PEntity(n,o)}}},{key:"checkP2PEntity",value:function(e,t){var r=this;return new i.default(function(n,i){var o=r._remoteP2PEntities[e];if(o)n(o);else if(t.runtime)n(t);else if(t.p2p){
// otherwise look on Domain Registry
l.log("[Registry - checkP2PEntity] - search in Domain Registry: ",e);var s={type:"read",from:r._registry.registryURL,to:"domain://registry."+r._registry._domain,body:{resource:e}};r._registry._messageBus.postMessage(s,function(e){if(l.log("[Registry - checkP2PEntity] Domain Registry reply",e),"value"in e.body){
//todo: store retrieved entity
var t=e.body.value;t.hasOwnProperty("p2pHandler")?n(t):i("[Registry checkP2PEntity] Hyperty found does not support P2P",e.body.value)}else i("[Registry checkP2PEntity] Hyperty with P2PHandler not found",e.body.code)})}else i("[Registry checkP2PEntity] No P2P Connection available for ",e)})}},{key:"checkP2PRuntime",value:function(e,t){var r=this,n={};
// look on locally stored p2p connections
return new i.default(function(i,o){r._registry.p2pConnectionList[e]?i({runtime:e}):t.runtime?(n=t,i(n)):o("[Registry.P2PConnectionResolve.checkP2PRuntime] No P2P Connection found to ",e)})}},{key:"checkP2PHyperty",value:function(e,t){var r=this;return new i.default(function(n,i){var o=void 0;
// look on locally stored hyperties
for(var s in r._registry.remoteHypertyList)
// todo: change to "hyperty.url" to be aligned with hyperty instance data model spec
if(o=r._registry.remoteHypertyList[s],l.log("[Registry - checkP2PHyperty] - for each Hyperty: ",o),o.hypertyID===e)return void(o.hasOwnProperty("p2pHandler")?n(o):i("[Registry checkP2PHyperty] Hyperty found does not support P2P",o));if(!o&&t.runtime)n(t);else if(!o&&t.p2p){
// otherwise look on Domain Registry
l.log("[Registry - checkP2PHyperty] - search in Domain Registry: ",o);var a={type:"read",from:r._registry.registryURL,to:"domain://registry."+r._registry._domain,body:{resource:e}};r._registry._messageBus.postMessage(a,function(e){if(l.log("[Registry - checkP2PHyperty] Domain Registry reply",e),"value"in e.body){
//todo: store retrieved hyperty
var t=e.body.value;r._registry.remoteHypertyList.push(t),t.hasOwnProperty("p2pHandler")?n(t):i("[Registry checkP2PHyperty] Hyperty found does not support P2P",e.body.value)}else i("[Registry checkP2PHyperty] Hyperty with P2PHandler not found",e.body.code)})}else i("[Registry checkP2PHyperty] No P2P Connection available for ",e)})}},{key:"checkP2PDataObject",value:function(e,t){var r=this;return new i.default(function(n,i){
// look on locally stored Remote Data Objects
var o=r._registry.remoteDataObjectList.filter(function(t){return r._registry.remoteDataObjectList[t].url===e});if(0!==o.length&&o[0].p2pRequester)n(o[0]);else if(0!==o.length)i("[Registry checkP2PDataObject] Data Object found does not support P2P",o[0]);else if(0===o.length&&t.runtime)n(t);else if(o.length&&t.p2p){
// otherwise look on Domain Registry
// look on Domain Registry
var s={type:"read",from:r._registry.registryURL,to:"domain://registry."+r._registry._domain,body:{resource:e}};r._registry._messageBus.postMessage(s,function(e){if(l.log("discover data object per url reply",e),"value"in e.body){
//todo: store retrieved hyperty
var t=e.body.value;r._registry.remoteDataObjectList.push(t),t.p2pRequester?n(t):i("[Registry checkP2PDataObject] Data Object found does not support P2P",e.body.value)}else i("[Registry checkP2PDataObject] not found",e.body.code)})}else i("[Registry checkP2PDataObject] no P2P Connection found")})}},{key:"addRemoteP2PEntity",value:function(e,t){this._remoteP2PEntities[e]=t}},{key:"removeRemoteP2PEntity",value:function(e){delete this._remoteP2PEntities[e]}},{key:"reconnectP2PRequester",value:function(e){var t=this;return l.log("[P2PConenctionResolve.reconnectP2PRequester] lets try to reconnect P2P Requester Stub: ",e),new i.default(function(r,n){var i=e.runtime,o={type:"execute",from:t._registry.registryURL,to:e.url,body:{method:"connect",params:[e.p2pHandler]}};
// lets prepare the p2pRequesterSTub reconnect by setting an observer to its status changes
t._registry.watchingYou.observe("p2pRequesterStub",function(e){if(l.log("[P2PConenctionResolve.reconnectP2PRequester] p2pRequesterStubs changed "+t._registry.p2pRequesterStub),e.keypath.split(".")[0]===i&&"status"===e.name)switch(e.newValue){case"live":l.log("[P2PConenctionResolve.reconnectP2PRequester] p2pRequester is live "+t._registry.p2pRequesterStub[i]),r(t._registry.p2pRequesterStub[i].url);break;case"failed":l.log("[P2PConenctionResolve.reconnectP2PRequester] p2pRequester reconnect failed "+t._registry.p2pRequesterStub[i]),n("P2P Requester reconnect failed")}}),
//  stub load
t._registry._messageBus.postMessage(o,function(e){l.log("[P2PConenctionResolve.reconnectP2PRequester] reconnect request reply",e)})})}}]),P2PConnectionResolve}();t.default=d,e.exports=t.default},/* 470 */
/***/
function(e,t){
//     proxy-observe v0.0.18
//     Copyright (c) 2015, 2016 Simon Y. Blackwell, AnyWhichWay
//     MIT License - http://opensource.org/licenses/mit-license.php
!function(){"use strict";function Observer(e,t,r,n,i,o){function deliver(e,n){if(deliver.delay=n,!deliver.pause&&a.changeset.length>0){if(!e){var i=a.changeset.filter(function(e){return!r||r.indexOf(e.type)>=0});i.length>0&&t(i)}a.changeset=[]}}var s,a=this;
// __observerCallbacks__ is used as an index to get at the proxy which is the observer, so we can unobserve
return deliver.pause=i,deliver.delay=o,a.get=function(e,t){return"__observer__"===t?a:"unobserve"===t?function(){return Object.unobserve(e),e}:"deliver"===t?deliver:e[t]},a.target=e,a.changeset=[],a.target.__observerCallbacks__||(Object.defineProperty(e,"__observerCallbacks__",{enumerable:!1,configurable:!0,writable:!1,value:[]}),Object.defineProperty(e,"__observers__",{enumerable:!1,configurable:!0,writable:!1,value:[]})),a.target.__observerCallbacks__.push(t),a.target.__observers__.push(this),s=new Proxy(e,a),deliver(!1,o),s}
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
var n=e[t],i=void 0===n?"add":"update";if(e[t]=r,e.__observers__.indexOf(this)>=0&&(!this.acceptlist||this.acceptlist.indexOf(i)>=0)){var o={object:e,name:t,type:i},s=0===this.changeset.length,a=this.deliver();"update"===i&&(o.oldValue=n),this.changeset.push(o),s&&a(!1,"number"==typeof a.delay?a.delay:10)}return!0},Observer.prototype.deleteProperty=function(e,t){var r=e[t];if(
//if(typeof(oldvalue)!=="undefined") {
delete e[t],e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("delete")>=0){var n={object:e,name:t,type:"delete",oldValue:r},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}
//}
return!0},Observer.prototype.defineProperty=function(e,t,r){if(Object.defineProperty(e,t,r),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("reconfigure")>=0){var n={object:e,name:t,type:"reconfigure"},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},Observer.prototype.setPrototypeOf=function(e,t){var r=Object.getPrototypeOf(e);if(Object.setPrototypeOf(e,t),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("setPrototype")>=0){var n={object:e,name:"__proto__",type:"setPrototype",oldValue:r},i=0===this.changeset.length,o=this.deliver();this.changeset.push(n),i&&o(!1,"number"==typeof o.delay?o.delay:10)}return!0},Observer.prototype.preventExtensions=function(e){if(Object.preventExtensions(e),e.__observers__.indexOf(this)>=0&&!this.acceptlist||this.acceptlist.indexOf("preventExtensions")>=0){var t={object:e,type:"preventExtensions"},r=0===this.changeset.length,n=this.deliver();this.changeset.push(t),r&&n(!1,"number"==typeof n.delay?n.delay:10)}return!0},Object.observe=function(e,t,r,n,i,o){return new Observer(e,t,r,n,i,o)},Object.unobserve=function(e,t){if(e.__observerCallbacks__){if(!t)return e.__observerCallbacks__.splice(0,e.__observerCallbacks__.length),void e.__observers__.splice(0,e.__observers__.length);e.__observerCallbacks__.forEach(function(r,n){t===r&&(e.__observerCallbacks__.splice(n,1),delete e.__observers__[n].callback,e.__observers__.splice(n,1))})}},Array.observe=function(e,t,r,n,i,o){if(!(e instanceof Array||Array.isArray(e)))throw new TypeError("First argument to Array.observer is not an Array");r=r||["add","update","delete","splice"];var s=new Proxy(e,{get:function(t,n){return"unobserve"===n?function(e){return e?Object.unobserve(t,e):t.unobserve()}:"splice"===n?function(n,i){if("number"!=typeof n||"number"!=typeof i)throw new TypeError("First two arguments to Array splice are not number, number");var o=this.slice(n,n+i),s=arguments.length>1?arguments.length-2:0,u={object:e,type:"splice",index:n,removed:o,addedCount:s};if(t.splice.apply(t,arguments),r.indexOf("splice")>=0){var n=0===a.__observer__.changeset.length,c=a.__observer__.deliver();a.__observer__.changeset.push(u),n&&c(!1,"number"==typeof c.delay?c.delay:10)}}:"push"===n?function(e){return this.splice(this.length,0,e)}:"pop"===n?function(){return this.splice(this.length-1,1)}:"unshift"===n?function(e){return this.splice(0,0,e)}:"shift"===n?function(){return this.splice(0,1)}:t[n]}}),a=Object.observe(s,function(e){var n=e.filter(function(e){return"length"!==e.name&&"add"!==e.name&&(!r||r.indexOf(e.type)>=0)});n.length>0&&t(n)},r,n,i,o);return a},Array.unobserve=function(e,t){return e.unobserve(t)}),Object.deepObserve=function(e,t,r){function reobserve(e,r){Object.keys(e).forEach(function(i){if(("object"===n(e[i])||"array"===n(e[i]))&&!e[i].hasOwnProperty("__observers__")){var o=r.slice(0);o.push(i),e[i]=Object.deepObserve(e[i],t,o)}})}r=r||[];var n=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()};return reobserve(e,r),Object.observe(e,function(e){function recurse(e,t,r,i,o){if(i instanceof Object){Object.keys(i).forEach(function(s){if(!r||r[s]!==i[s]){var a=r&&void 0!==r[s]?r[s]:void 0,u=void 0===a?"add":"update",c=o+"."+s;n.push({name:e,object:t,type:u,oldValue:a,newValue:i[s],keypath:c}),recurse(e,t,a,i[s],c)}})}else if(r instanceof Object){var s=Object.keys(r);s.forEach(function(s){var a=null===i?"update":"delete",u=o+"."+s;n.push({name:e,object:t,type:a,oldValue:r[s],newValue:i,keypath:u}),recurse(e,t,r[s],void 0,u)})}}var n=[];e.forEach(function(e){var t=(r.length>0?r.join(".")+".":"")+e.name;"update"!==e.type&&"add"!==e.type||reobserve(e.object,r),n.push({name:e.name,object:e.object,type:e.type,oldValue:e.oldValue,newValue:e.object[e.name],keypath:t}),recurse(e.name,e.object,e.oldValue,e.object[e.name],t)}),t(n)})}}()},/* 471 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(7),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=r(14),d=r(144),p=r(206),y=_interopRequireDefault(p),h=r(476),v=_interopRequireDefault(h),g=f.getLogger("IdentityModule"),b=function(){/**
  * This is the constructor to initialise the Identity Module it does not require any input.
  */
function IdentityModule(e,t,r,n,i,o){(0,s.default)(this,IdentityModule);var a=this;if(!e)throw new Error("runtimeURL is missing.");if(!r)throw new Error("storageManager is missing");if(!i)throw new Error("cryptoManager is missing");if(!o)throw new Error("runtimeCatalogue is missing");a._runtimeURL=e,a._runtimeCatalogue=o,a.dataObjectsStorage=n,a._idmURL=a._runtimeURL+"/idm",a._guiURL=a._runtimeURL+"/identity-gui",a.runtimeCapabilities=t,a._domain=(0,l.divideURL)(a._runtimeURL).domain,
//to store items with this format: {identity: identityURL, token: tokenID}
a._identities=new y.default("human",r),
// to be reviewed: watchingYou identitiesList or identities?
//    _this.identitiesList = _this.watchingYou.watch('identitiesList', {}, true);
a._crypto=i,/*    _this.emailsList = [];
    let newIdentity = new Identity('guid', 'HUMAN');
    _this.identity = newIdentity;
    _this.currentIdentity;
    _this.identities.defaultIdentity;*/
//stores the association of the dataObject and the Hyperty registered within
a.dataObjectsIdentity={},// is this needed?
a._listOfIdps=[],
// variable to know if the GUI is deployed to choose the identity. if the real GUI is not deployed, a fake gui is deployed instead.
a.guiDeployed=!1}
//******************* GET AND SET METHODS *******************
/**
  * return the messageBus in this Registry
  * @param {MessageBus}           messageBus
  */
return(0,u.default)(IdentityModule,[{key:"getIdentity",
//******************* IDENTITY RELEATED METHODS *******************
/**
    * gets all the information from a given userURL
    * @param  {String}  userURL     user url
    * @return {JSON}    identity    identity bundle from the userURL
    */
value:function(e){return this.identities.getIdentity(e)}},{key:"getIdentitiesToChoose",value:function(){var e=this;
//    let identities = _this.identities.identifiers;
// let idps = [
//   { domain: 'google.com', type: 'idToken'},
//   { domain: 'microsoft.com', type: 'idToken'},
//   { domain: 'orange.fr', type: 'idToken'},
//   { domain: 'slack.com', type: 'Legacy'}
// ];
// todo: retrieve available idps from runtime catalogue
// todo: enable oauth idps
// let idps = [
//   { domain: 'google.com', type: 'idToken' },
//   { domain: 'microsoft.com', type: 'idToken' },
//   { domain: 'facebook.com', type: 'idToken' },
//   { domain: 'slack.com', type: 'idToken' }
// ];
return new i.default(function(t){var r=d.runtimeConfiguration.catalogueURLs.idpProxy.prefix+e._domain+d.runtimeConfiguration.catalogueURLs.idpProxy.suffix;i.default.all([e.runtimeCapabilities.isAvailable("browser"),e.runtimeCapabilities.isAvailable("node")]).then(function(n){var i=n[0],o=n[1],s={constraints:{}};s.constraints.node=o,s.constraints.browser=i,e._runtimeCatalogue.getTypeList(r,s).then(function(r){var n=r.map(function(e){return{domain:e,type:"idToken"}});return g.info("[IdentityModule.getIdentityAssertion:getIdentitiesToChoose]",r,n),e._listOfIdps=n,t({defaultIdentity:e.identities.defaultIdentity,identities:e.identities.identities,idps:n})})})})}},{key:"init",value:function(){var e=this;return new i.default(function(t){e._identities.loadIdentities().then(function(){e._crypto.getMyPublicKey().then(function(r){e._crypto.crypto._sha256((0,l.stringify)(r)).then(function(r){var n="user-guid://"+r;e.identities.guid=n,e._identities.loadAccessTokens().then(function(){t()})}).catch(function(e){})})})})}},{key:"getIdentityAssertion",value:function(e){g.log("[IdentityModule.getIdentityAssertion:identityBundle]",e);var t=this;return new i.default(function(r,n){
//CHECK whether is browser environment or nodejs
//if it is browser, then create a fake identity
t.runtimeCapabilities.isAvailable("browser").then(function(i){if(g.log("runtime browser identity acquisition",i),i)
//todo: only idp should be mandatory when identityBundle exists
if(e&&e.hasOwnProperty("idp")){var o=e.idp,s=e.hasOwnProperty("origin")?e.origin:"origin",a=e.hasOwnProperty("idHint")?e.idHint:"";t.selectIdentityForHyperty(s,o,a).then(function(e){return g.log("[IdentityModule] Identity selected by hyperty."),r(e)},function(e){
// if it got an error then just select identity from GUI
// log.error('[IdentityModule] Could not select identity from hyperty.');
t.selectIdentityFromGUI().then(function(e){return g.log("[IdentityModule] Identity selected by hyperty."),r(e)},function(e){return n(e)})})}else{if(t.identities.defaultIdentity&&t.identities.defaultIdentity.expires>(0,l.secondsSinceEpoch)())return r(t.identities.defaultIdentity);t.selectIdentityFromGUI().then(function(e){/*
                  _this.identities.defaultIdentity = assertion.userProfile.userURL;
                  return resolve(assertion);
                }*/
return g.log("[IdentityModule] Identity selected from GUI."),t.identities.defaultIdentity=e.userProfile.userURL,r(e)},function(e){return n(e)})}}).catch(function(e){return g.error("Error on identity acquisition ",e),n(e)}),t.runtimeCapabilities.isAvailable("node").then(function(e){if(g.log("node identity acquisition",e),e){if(t.identities.currentIdentity)
//TODO verify whether the token is still valid or not.
// should be needed to make further requests, to obtain a valid token
return r(t.identities.currentIdentity);g.log("getIdentityAssertion for nodejs");var i={type:"idp",value:"nodejs-idp",code:200,auth:!1};t.callNodeJsGenerateMethods(i.value,"origin").then(function(e){r(e)},function(e){n(e)})}}).catch(function(e){g.error("Error on identity acquisition ",e),n(e)})})}},{key:"getUsersIDs",value:function(){/*  log.log('[getUsersIDs:emailFormat]', emailFormat);
        log.log('getUsersIDs:emailFormat', emailFormat);
        let _this = this;
        let users = [];*/
//if request comes with the emailFormat option, then convert url to email format
/*    let converter = (emailFormat) ? getUserEmailFromURL : (value) => { return value; };
       for (let index in _this.identities) {
        let identity = _this.identities[index];
        users.push(converter(identity.identity));
      }*/
return this.identities.identifiers}},{key:"deleteIdentity",value:function(e){return this.identities.removeIdentity(e)}},{key:"requestIdentityToGUI",value:function(e,t){g.log("[IdentityModule.requestIdentityToGUI:identities]",e),g.log("[IdentityModule.requestIdentityToGUI:idps]",t);var r=this;return new i.default(function(n,i){
//condition to check if the real GUI is deployed. If not, deploys a fake gui
if(!1===r.guiDeployed){var o=r._guiURL,s=new v.default(o,r._messageBus);r.guiFake=s,r.guiDeployed=!0}var a={type:"create",to:r._guiURL,from:r._idmURL,body:{value:{identities:e,idps:t}}},u=function(e){
// todo: to return the user URL and not the email or identifier
if(r._messageBus.removeResponseListener(r._idmURL,e.id),200===e.body.code){var t=e.body;g.log("selectedIdentity: ",t.value),n(t)}else i("error on requesting an identity to the GUI")};
//postMessage with callback but without timeout
try{r._messageBus.postMessage(a,u,!1)}catch(e){i("In method callIdentityModuleFunc error: "+e)}})}},{key:"callNodeJsGenerateMethods",value:function(e,t){g.log("[callNodeJsGenerateMethods:idp]",e),g.log("[callNodeJsGenerateMethods:origin]",t);var r=this;return new i.default(function(n,i){
//debugger;
var o=void 0;
//let keyPair = nodeJSKeyPairPopulate;
//generates the RSA key pair
r._crypto.getMyPublicKey().then(function(n){return g.log("[callNodeJsGenerateMethods:key]",n),o=(0,l.stringify)(n),g.log("[callNodeJsGenerateMethods] NO_URL"),r.generateAssertion(o,t,"url",e)}).then(function(e){e?n(e):i("Error on obtaining Identity")}).catch(function(e){g.log(e),i(e)})})}},{key:"callGenerateMethods",value:function(e,t){g.log("[callGenerateMethods:idp]",e),g.log("[callGenerateMethods:origin]",t);var r=this;return new i.default(function(n,i){var o=void 0;
//generates the RSA key pair
r._crypto.getMyPublicKey().then(function(n){
//        userkeyPair = keyPair;
return g.log("[callNodeJsGenerateMethods:key]",n),o=(0,l.stringify)(n),g.log("generateAssertion:no_hint"),r.generateAssertion(o,t,"",e)}).then(function(n){return r.myHint=n,g.log("generateAssertion:hint"),r.generateAssertion(o,t,n,e)}).then(function(e){e?n(e):i("Error on obtaining Identity")}).catch(function(e){g.error(e),i(e)})})}},{key:"loginSelectedIdentity",value:function(e,t,r,n){g.log("[loginSelectedIdentity:publicKey]",e),g.log("[loginSelectedIdentity:origin]",t),g.log("[loginSelectedIdentity:idp]",r),
//    log.log('[loginSelectedIdentity:keyPair]', keyPair);
g.log("[loginSelectedIdentity:loginUrl]",n);var o=this;return new i.default(function(i,s){g.log("[IdentityModule] openPopup"),o.callIdentityModuleFunc("openPopup",{urlreceived:n}).then(function(e){return e},function(e){return g.error("Error while logging in for the selected identity."),s(e)}).then(function(n){o.sendGenerateMessage(e,t,n,r).then(function(e){if(!e.hasOwnProperty("assertion"))return g.error("Error while logging in for the selected identity."),s("Could not generate a valid assertion for selected identity.");o.identities.addAssertion(e).then(function(e){i("Login was successfull")}).catch(function(e){s("Login has failed:"+e)})}).catch(function(e){s("On loginSelectedIdentity from method sendGenerateMessage error:  "+e)})})})}},{key:"selectIdentityForHyperty",value:function(e,t,r){g.log("[selectIdentityForHyperty:origin]",e),g.log("[selectIdentityForHyperty:idp]",t),g.log("[selectIdentityForHyperty:idHint]",r);var n=this;return new i.default(function(i,o){
//generates the RSA key pair
n._crypto.getMyPublicKey().then(function(s){var a=(0,l.stringify)(s);n.sendGenerateMessage(a,e,r,t).then(function(r){r.hasOwnProperty("assertion")?
// identity was logged in, just save it
n.identities.addAssertion(r).then(function(e){return i(r)},function(e){return o(e)}):r.hasOwnProperty("loginUrl")?
// identity was not logged in
n.loginSelectedIdentity(a,e,t,r.loginUrl).then(function(e){return i(e)},function(e){return o(e)}):(
// you should never get here, if you do then the IdP Proxy is not well implemented
// log.error('GenerateAssertion returned invalid response.');
g.log("Proceeding by logging in."),n.callGenerateMethods(t,e).then(function(e){return i(e)},function(e){return o(e)}))}).catch(function(e){o("On selectIdentityForHyperty from method sendGenerateMessage error:  "+e)})}).catch(function(e){o("On selectIdentityForHyperty from method generateRSAKeyPair error:  "+e)})})}},{key:"selectIdentityFromGUI",value:function(e){var t=this;g.log("[IdentityModule.selectIdentityFromGUI:origin]",e);var r=this;return new i.default(function(n,i){t.getIdentitiesToChoose().then(function(e){return r.requestIdentityToGUI(e.identities,e.idps)}).then(function(t){if("identity"===t.type)
//  let chosenID = getUserURLFromEmail(value.value);
// hack while the user url is not returned from requestIdentityToGUI;
/*          let chosenID = 'user://' + _this.identities.currentIdentity.idp.domain + '/' + value.value;
             _this.identities.defaultIdentity = _this.identities.currentIdentity;*/
// returns the identity info from the chosen id
//          if (_this.identities.currentIdentity) resolve(_this.identities.currentIdentity.assertion);
r.identities.identities[t.value]?n(r.identities.identities[t.value]):i("[IdentityModule.selectIdentityFromGUI] identity not found: ",t.value);else{if("idp"!==t.type)return i("error on GUI received message.");r.callGenerateMethods(t.value,e).then(function(e){return n(e)},function(e){return i(e)})}}).catch(function(e){i("On selectIdentityFromGUI from method requestIdentityToGUI error:  "+e)})})}},{key:"callIdentityModuleFunc",value:function(e,t){g.log("[callIdentityModuleFunc:methodName]",e),g.log("[callIdentityModuleFunc:parameters]",t);var r=this;return new i.default(function(n,i){var o={type:"execute",to:r._guiURL,from:r._idmURL,body:{resource:"identity",method:e,params:t}},s=function(e){r._messageBus.removeResponseListener(r._idmURL,e.id);var t=e.body.value;n(t)};try{r._messageBus.postMessage(o,s,!1)}catch(e){i("In method callIdentityModuleFunc error: "+e)}})}},{key:"getToken",value:function(e){var t=this,r=e.from,n=e.to;return e.hasOwnProperty("body")&&e.body.hasOwnProperty("source")&&(r=e.body.source),"forward"===e.type&&(r=e.body.from),e.hasOwnProperty("body")&&e.body.hasOwnProperty("subscriber")&&(r=e.body.subscriber),new i.default(function(i,o){g.log("[IdentityModule.getToken] for msg ",e),
//log.log('toUrl', toUrl);
t.registry.isLegacy(n).then(function(n){
// log.log('[Identity.IdentityModule.getToken] isLEGACY: ', result);
n?t._getAccessToken(e).then(function(e){g.log("[IdentityModule.getToken] access token ",e),i((0,l.deepClone)(e))}).catch(function(e){o("[IdentityModule.getToken] Access Token error "+e)}):t._getValidToken(r).then(function(e){i(e)}).catch(function(e){o("On getToken from method _getValidToken error: "+e)})}).catch(function(e){o("On getToken from method isLegacy error: "+e)})})}},{key:"getIdToken",value:function(e){g.info("getIdToken:hypertyURL ",e);var t=this;return new i.default(function(r,n){var i=e.split("://"),o=void 0;if("hyperty"===i[0]){if(o=t.registry.getHypertyOwner(e)){var s=t.identities.getIdentity(o);return s?r(s):n("[IdentityModule.getIdToken] Identity not found for: ",o)}return n("[IdentityModule.getIdToken] User not found for hyperty: ",o)}
// it is a Data Object URL
t._getHypertyFromDataObject(e).then(function(e){if(o=t.registry.getHypertyOwner(e)){var i=t.identities.getIdentity(o);return i?r(i):n("[IdentityModule.getIdToken] Identity not found for: ",o)}return n("[IdentityModule.getIdToken] User not found for hyperty: ",e)}).catch(function(e){g.error("[IdentityModule.getIdToken] Error: ",e),n(e)})})}},{key:"_getAccessToken",value:function(e){var t=this;return new i.default(function(r,n){var i=e.to,o=void 0;if(!e.hasOwnProperty("body"))return n("[IdentityModule._getAccessToken] missing mandatory msg body: ",e);if(!e.body.hasOwnProperty("value"))return n("[IdentityModule._getAccessToken] missing mandatory msg body value: ",e);if(!e.body.value.hasOwnProperty("resources"))return n("[IdentityModule._getAccessToken] missing mandatory msg body value resources: ",e);var s=(0,l.divideURL)(i).domain;i.includes("protostub")&&(s=s.replace(s.split(".")[0]+".",""));var a=e.body.value.resources;try{o=t.identities.getAccessToken(s,a)}catch(e){return n("[IdentityModule._getAccessToken] Access Token error "+err)}if(o){if("in-progress"===o.status)return r(t._inProgressAccessToken(s,a));var u=(0,l.secondsSinceEpoch)();return g.log("[Identity.IdentityModule.getAccessToken] found  Access Token ",o),r(u>=o.expires?t._getNewAccessToken(s,a):o)}t._getNewAccessToken(s,a).then(function(e){return g.log("[Identity.IdentityModule.getAccessToken] new Access Token ",e),r(e)}).catch(function(e){n("[IdentityModule._getAccessToken] on getNewAccessToken "+e)})})}},{key:"_inProgressAccessToken",value:function(e,t){var r=this;this.identities.watchingYou.observe("accessTokens",function(n){g.log("[IdentityModule._inProgressAccessToken] accessTokens changed "+r.identities.accessTokens);var i=n.keypath;if(i.includes("status")&&(i=i.replace(".status","")),i===e&&"status"===n.name&&"created"===n.newValue)
// log.log('[Identity.IdentityModule.getToken] token is created ' + _this.identitiesList[domain]);
return r.identities.getAccessToken(e,t)})}},{key:"_getNewAccessToken",value:function(e,t){var r=this;return new i.default(function(n,i){r.identities.setAccessTokenInProgress(e);var o={type:"execute",to:r._resolveDomain(e),from:r._idmURL,body:{method:"getAccessTokenAuthorisationEndpoint",params:t}};
//let's first get the authorisation URL from the Idp Proxy
r._messageBus.postMessage(o,function(e){if(e.body.code>299)return i("[IdentityModule._getNewAccessToken] Error on getAccessTokenAuthorisationEndpoint from IdP Proxy: ",e.body.desc);
// let's ask the user for authorisation
r.callIdentityModuleFunc("openPopup",{urlreceived:e.body.value}).then(function(e){g.log("[IdentityModule:callIdentityModuleFunc:openPopup] auhtorisation result: ",e),o.body.method="getAccessToken",o.body.params={resources:t,login:e},
//wihtout callback to avoid timeout errors?
// let's ask Access Token from the Idp Proxy
r._messageBus.postMessage(o,function(e){if(e.body.code>299)return i("[IdentityModule._getNewAccessToken] Error on getAccessToken from IdP Proxy: ",e.body.desc);r.identities.addAccessToken(e.body.value).then(function(t){return g.info("[IdentityModule._getNewAccessToken] resolving token: ",t),n(e.body.value)},function(e){i(e)})})},function(e){i(e)})})})}},{key:"sendRefreshMessage",value:function(e){var t=this;
//    let domain = _this._resolveDomain(oldIdentity.idp);
//    let message;
//    let assertion = _this.getIdentity(oldIdentity.userProfile.userURL);
return g.log("sendRefreshMessage:oldIdentity",e),new i.default(function(r,n){var i=t._resolveDomain(e.idp),o=void 0,s=t.getIdentity(e.userProfile.userURL);g.info("sendRefreshMessage:oldIdentity",e),o={type:"execute",to:i,from:t._idmURL,body:{resource:"identity",method:"refreshAssertion",params:{identity:s}}};try{t._messageBus.postMessage(o,function(e){var t=e.body.value;r(t)})}catch(e){n("In sendRefreshMessage on postMessage error: "+e)}})}},{key:"getAccessToken",value:function(e,t,r){g.log("[getAccessToken:idpDomain]",e);var n=this;return new i.default(function(i,o){var s=n._resolveDomain(e),a=void 0;a={type:"execute",to:s,from:n._idmURL,body:{resource:"identity",method:"getAccessToken",params:{resources:t,login:r}}};try{n._messageBus.postMessage(a,function(e){var t=e.body.value;i(t)})}catch(e){o("In sendRefreshMessage on postMessage error: "+e)}})}},{key:"getAccessTokenAuthorisationEndpoint",value:function(e,t){g.log("[getAccessTokenAuthorisationEndpoint:idpDomain]",t);var r=this;return new i.default(function(n,i){var o=r._resolveDomain(t),s=void 0;s={type:"execute",to:o,from:r._idmURL,body:{resource:"identity",method:"getAccessTokenAuthorisationEndpoint",params:{resources:e}}};try{r._messageBus.postMessage(s,function(e){var t=e.body.value;n(t)})}catch(e){i("In sendRefreshMessage on postMessage error: "+e)}})}},{key:"sendGenerateMessage",value:function(e,t,r,n){g.log("[sendGenerateMessage:contents]",e),g.log("[sendGenerateMessage:origin]",t),g.log("[sendGenerateMessage:usernameHint]",r),g.log("[sendGenerateMessage:idpDomain]",n),g.log("sendGenerateMessage_hint");var o=this;return new i.default(function(i,s){var a=o._resolveDomain(n),u=void 0;u={type:"execute",to:a,from:o._idmURL,body:{resource:"identity",method:"generateAssertion",params:{contents:e,origin:t,usernameHint:r}}};try{o._messageBus.postMessage(u,function(e){var t=e.body.value;i(t)})}catch(e){s("In sendRefreshMessage on postMessage error: "+e)}})}},{key:"generateAssertion",value:function(e,t,r,n){g.log("[generateAssertion:contents]",e),g.log("[generateAssertion:origin]",t),g.log("[generateAssertion:usernameHint]",r),
//    log.log('[generateAssertion:keyPair]', keyPair);
g.log("[generateAssertion:idpDomain]",n);var o=this;return new i.default(function(i,s){g.log("[IdentityModule:sendGenerateMessage:sendGenerateMessage]",r),o.sendGenerateMessage(e,t,r,n).then(function(e){e.loginUrl?o.callIdentityModuleFunc("openPopup",{urlreceived:e.loginUrl}).then(function(e){g.log("[IdentityModule:callIdentityModuleFunc:openPopup]",r),i(e)},function(e){s(e)}):e?o.identities.addAssertion(e).then(function(t){i(e)},function(e){s(e)}):s("error on obtaining identity information")}).catch(function(e){s("On generateAssertion from method sendGenerateMessage error: "+e)})})}},{key:"validateAssertion",value:function(e,t,r){g.log("[validateAssertion:assertion]",e),g.log("[validateAssertion:origin]",t),g.log("[validateAssertion:idpDomain]",r);var n=this,o=n._resolveDomain(r),s={type:"execute",to:o,from:n._idmURL,body:{resource:"identity",method:"validateAssertion",params:{assertion:e,origin:t}}};return new i.default(function(e,t){try{n._messageBus.postMessage(s,function(r){200===r.body.code?e(r.body.value):t("error",r.body.code)})}catch(e){t("On validateAssertion from method postMessage error: "+e)}})}},{key:"addGUIListeners",value:function(){var e=this;e._messageBus.addListener(e._idmURL,function(t){var r=t.body.method;g.log("[IdentityModule:addGUIListeners]",t,t.body,r);var n=void 0;if("deployGUI"===r)n=e.deployGUI();else{if("getIdentitiesToChoose"===r)return void e.getIdentitiesToChoose().then(function(r){
// if the function requested is not a promise
var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){g.error("On addGUIListeners from if storeIdentity method postMessage error: "+e)}});if("unregisterIdentity"===r){var i=t.body.params.email;n=e.unregisterIdentity(i)}else{if("getMyPublicKey"===r)
// because generateRSAKeyPair is a promise
// we have to send the message only after getting the key pair
return void e._crypto.getMyPublicKey().then(function(r){r=(0,l.stringify)(r);var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){g.error("On addGUIListeners from if generateRSAKeyPair method postMessage error: "+e)}});if("sendGenerateMessage"===r){var o=t.body.params.contents,s=t.body.params.origin,a=t.body.params.usernameHint,u=t.body.params.idpDomain;return void e.sendGenerateMessage(o,s,a,u).then(function(r){var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){g.error("On addGUIListeners from if sendGenerateMessage method postMessage error: "+e)}})}if("getAccessTokenAuthorisationEndpoint"===r){var c=t.body.params.scope,f=t.body.params.idpDomain;return void e.getAccessTokenAuthorisationEndpoint(c,f).then(function(r){var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){g.error("On addGUIListeners from if sendGenerateMessage method postMessage error: "+e)}})}if("addAccessToken"===r){var d=t.body.params;return void e.identities.addAccessToken(d).then(function(r){var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){g.error("On addGUIListeners from if storeIdentity method postMessage error: "+e)}})}if("getAccessToken"===r){var p=t.body.params.idpDomain,y=t.body.params.resources,h=t.body.params.login;return void e.getAccessToken(p,y,h).then(function(r){var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){g.error("On addGUIListeners from if sendGenerateMessage method postMessage error: "+e)}})}if("addAssertion"===r){var v=t.body.params;
//        let keyPair = msg.body.params.keyPair;
return void e.identities.addAssertion(v).then(function(r){var n={type:"execute",value:r,code:200},i={id:t.id,type:"response",to:t.from,from:t.to,body:n};try{e._messageBus.postMessage(i)}catch(e){g.error("On addGUIListeners from if storeIdentity method postMessage error: "+e)}})}}}/*else if (funcName === 'selectIdentityForHyperty') {
          let origin = msg.body.params.origin;
          let idp = msg.body.params.idp;
          let idHint = msg.body.params.idHint;
          _this.selectIdentityForHyperty(origin, idp, idHint);
          return;
          }*/
// if the function requested is not a promise
var b={type:"execute",value:n,code:200},m={id:t.id,type:"response",to:t.from,from:t.to,body:b};try{e._messageBus.postMessage(m)}catch(e){g.error("On addGUIListeners from if storeIdentity method postMessage error: "+e)}})}},{key:"deployGUI",value:function(){this.guiDeployed=!0}},{key:"_getValidToken",value:function(e){g.log("[IdentityModule._getValidToken]:hypertyURL",e);var t=this;return new i.default(function(r,n){t.getIdToken(e).then(function(e){g.log("[IdentityModule._getValidToken] retrieved IdAssertion",e);var i=(0,l.secondsSinceEpoch)();if(!e.hasOwnProperty("expires"))return r(e);var o=e.expires;/* if (completeId.hasOwnProperty('info')) {
            if (completeId.info.hasOwnProperty('expires')) {
              expirationDate = completeId.info.expires;
            } else if (completeId.info.hasOwnProperty('tokenIDJSON')) {
              expirationDate = completeId.info.tokenIDJSON.exp;
            } else {
              // throw 'The ID Token does not have an expiration time';
              log.info('The ID Token does not have an expiration time');
              resolve(assertion);
            }
          } else if (completeId.hasOwnProperty('infoToken') && completeId.infoToken.hasOwnProperty('exp')) {
            expirationDate = completeId.infoToken.exp;
          } else {
            // throw 'The ID Token does not have an expiration time';
            log.info('The ID Token does not have an expiration time');
            resolve(assertion);
          }*/
g.log("[Identity.IdentityModule.getValidToken] Token expires in",o),g.log("[Identity.IdentityModule.getValidToken] time now:",i),i>=o?e.hasOwnProperty("refresh")?t.sendRefreshMessage(e).then(function(e){t.identities.updateAssertion(e).then(function(){r(e)},function(e){g.error("[IdentityModule.getValidToken] error updating the assertion ",e),n(e)})},function(e){g.error("[IdentityModule.getValidToken] error refreshing the assertion ",e),n(e)}):
// no refresh token available, user has to authenticate again to get a new assertion
// generate new idToken
t.callGenerateMethods(e.idp.domain).then(function(e){r(e)}).catch(function(e){n("[IdentityModule.getValidToken] error when generating a new assertion "+e)}):r(e)}).catch(function(e){g.error("[IdentityModule.getValidToken] error on getIdToken",e),n(e)})})}},{key:"_getHypertyFromDataObject",value:function(e){g.info("_getHypertyFromDataObject:dataObjectURL",e);var t=this;return new i.default(function(r,n){var i=(0,l.divideURL)(e),o=i.domain,s=(0,l.parseMessageURL)(e),a=t.registry.getReporterURLSynchonous(s);if(g.info("_getHypertyFromDataObject:reporterURL",a),a)r(a);else{
// check if there is already an association from an hypertyURL to the dataObject
var u=t.dataObjectsIdentity[s];if(g.info("_getHypertyFromDataObject:storedReporterURL",u),u)r(u);else{
// check if there is any hyperty that subscribed the dataObjectURL
var c=t.registry.getDataObjectSubscriberHyperty(e);g.info("_getHypertyFromDataObject:subscriberHyperty",c),c?r(c):
// search in domain registry for the hyperty associated to the dataObject
// search in case is a subscriber who wants to know the reporter
// To be reviewed in order to avoid the discovery transaction
t._coreDiscovery.discoverDataObjectPerURL(s,o).then(function(e){g.info("_getHypertyFromDataObject:dataObject",e),t.dataObjectsIdentity[s]=e.reporter,g.info("_getHypertyFromDataObject:dataObject.reporter",e.reporter),r(e.reporter)},function(e){n(e)})}}})}},{key:"_resolveDomain",value:function(e){return e?"domain-idp://"+e:"domain-idp://google.com"}},{key:"messageBus",get:function(){return this._messageBus},set:function(e){var t=this;t._messageBus=e,t.addGUIListeners()}},{key:"coreDiscovery",get:function(){return this._coreDiscovery},set:function(e){this._coreDiscovery=e}},{key:"registry",get:function(){return this._registry},set:function(e){this._registry=e}},{key:"identities",get:function(){return this._identities},set:function(e){this._identities=e}},{key:"idps",get:function(){return this._listOfIdps}}]),IdentityModule}();t.default=b,e.exports=t.default},/* 472 */
/***/
function(e,t,r){e.exports={default:r(473),__esModule:!0}},/* 473 */
/***/
function(e,t,r){r(474),e.exports=r(10).Number.isInteger},/* 474 */
/***/
function(e,t,r){
// 20.1.2.3 Number.isInteger(number)
var n=r(21);n(n.S,"Number",{isInteger:r(475)})},/* 475 */
/***/
function(e,t,r){
// 20.1.2.3 Number.isInteger(number)
var n=r(36),i=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&i(e)===e}},/* 476 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=r(7),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(o),a=s.getLogger("IdentityModule"),u=function GuiFake(e,t){(0,i.default)(this,GuiFake),a.log("FakeGUI_deployed");var r=this;r._url=e,r._waitTime=1e4,r._messageBus=t,r._messageBus.addListener(r._url,function(e){if(e.hasOwnProperty("type")&&"create"===e.type&&e.body.hasOwnProperty("value")&&e.body.value.hasOwnProperty("identities")&&e.body.value.hasOwnProperty("idps")){var t=e.body.value.identities,n=e.body.value.idps,i=void 0;i=void 0!==t[0]?{type:"identity",value:t[0],code:200}:{type:"idp",value:n[1].domain,code:200};var o={id:e.id,type:"response",to:e.from,from:e.to,body:i};
// to test on the identity side the listener without the timeout
// can represent the time the user takes to choose and identity
"wait"===e.body.value?setTimeout(function(){r._messageBus.postMessage(o)},r._waitTime):r._messageBus.postMessage(o)}else a.log("Ignoring messages not intended to FakeGUI.",e)})};t.default=u,e.exports=t.default},/* 477 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(7),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=r(206),d=_interopRequireDefault(l),p=f.getLogger("IdentityManager"),y=function(){function IdentityManager(e){(0,s.default)(this,IdentityManager),this._idm=e}return(0,u.default)(IdentityManager,[{key:"reset",value:function(){
// this._idm.identities.reset();
this._idm.identities=new d.default(this._idm.identities._type,this._idm.identities._storageManager)}},{key:"_isToSetID",value:function(e){var t=["domain-idp","runtime","domain"],r=e.from;if(e.body&&e.body.hasOwnProperty("source")&&(r=e.body.source),e.body&&e.body.hasOwnProperty("subscriber")&&(r=e.body.subscriber),"forward"===e.type)return!1;
// Signalling Messages between P2P Stubs don't have Identities. FFS
if(r.includes("/p2prequester/")||r.includes("/p2phandler/"))return!1;var n=r.split("://"),i=n[0];return-1===t.indexOf(i)}},{key:"processMessage",value:function(e){var t=this;return p.log("[IdentityManager.processMessage] ",e),new i.default(function(r,n){
// skip messages that don't need identity tokens in the body
if(!t._isToSetID(e))return r(e);/*      let from = message.from;
        let sourceURL = undefined;
        if ( message.hasOwnProperty('body') && message.body.hasOwnProperty('source')) {
          from = message.body.source;
        }
         if (message.type === 'forward') {
          from = message.body.from;
        }
         if (message.hasOwnProperty('body') && message.body.hasOwnProperty('subscriber')) {
          from = message.body.subscriber;
        }*/
t._idm.getToken(e).then(function(t){e.hasOwnProperty("body")||(e.body={}),e.body.identity=t,r(e)}).catch(function(e){p.error(e),n(e)})})}}]),IdentityManager}();t.default=y,e.exports=t.default},/* 478 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(7),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=r(479),d=_interopRequireDefault(l),p=r(480),y=_interopRequireDefault(p),h=r(481),v=_interopRequireDefault(h),g=(r(14),f.getLogger("PEP"),function(){/**
  * Creates a Policy Enforcement Point (PEP) instance
  * @param    {Object}    context
  */
function PEP(e){(0,s.default)(this,PEP);var t=this;t.pdp=new y.default(e),t.actionsService=new d.default(e),t.context=e,e.pep=t,
//TODO should be added a trigger to verify when the loadConfigurations is successfully completed
e.loadConfigurations()}/**
  * return the messageBus in this Registry
  * @param {MessageBus}           messageBus
  */
return(0,u.default)(PEP,[{key:"addGUIListeners",value:function(){var e=this;e.context.messageBus.addListener(e.context.pepURL,function(t){var r=t.body.method,n=void 0;if("addToGroup"===r){var i=t.body.params.groupName,o=t.body.params.userEmail;n=e.context.addToGroup(i,o)}else if("createGroup"===r){var s=t.body.params.groupName;n=e.context.createGroup(s)}else if("addPolicy"===r){var a=t.body.params.source,u=t.body.params.key,c=t.body.params.policy,f=t.body.params.combiningAlgorithm;n=e.addPolicy(a,u,c,f)}else if("deleteGroup"===r){var l=t.body.params.groupName;n=e.context.deleteGroup(l)}else if("removePolicy"===r){var d=t.body.params.source,p=t.body.params.key;n=e.removePolicy(d,p)}else if("savePolicies"===r){var y=t.body.params.source;n=e.context.savePolicies(y)}else if("userPolicies"===r)n=e.context.userPolicies;else if("activeUserPolicy"===r){var h=t.body.params.userPolicy;h&&(e.context.activeUserPolicy=h),n=e.context.activeUserPolicy}else if("userPolicy"===r){var v=t.body.params.key;n=e.context.userPolicies[v]}else"saveActivePolicy"===r?n=e.context.saveActivePolicy():"getMyEmails"===r?n=e.context.getMyEmails():"getMyHyperties"===r?n=e.context.getMyHyperties():"groups"===r?n=e.context.groups:"getGroupsNames"===r&&(n=e.context.getGroupsNames());if("removeFromGroup"===r){var g=t.body.params.groupName,b=t.body.params.userEmail;n=e.context.removeFromGroup(g,b)}var m={type:"execute",value:n,code:200},_={id:t.id,type:"response",to:t.from,from:t.to,body:m};e.context.messageBus.postMessage(_)})}},{key:"addPolicy",value:function(e,t,r,n){if(!e)throw new Error("source is not defined");if(!t)throw new Error("key is not defined");switch(void 0===r?r=new v.default(t,[],[],n):r instanceof v.default||(r=new v.default(r.key,r.rules,r.actions,r.combiningAlgorithm)),e){case"SERVICE_PROVIDER":this.context.savePolicies(e,r,t);break;case"USER":this.context.userPolicies[t]=r,this.context.savePolicies(e);break;default:throw Error("Unknown policy source: "+e)}}},{key:"authorise",value:function(e,t){var r=this;
// log.log('[Policy.PEP Authorise] ', message);
// log.log(message);
if(!e)throw new Error("message is not defined");if(!e.from)throw new Error("message.from is not defined");if(!e.to)throw new Error("message.to is not defined");if(!e.type)throw new Error("message.type is not defined");return e.body=e.body||{},new i.default(function(n,i){e.body=e.body||{};var o=r,s=o.pdp.evaluatePolicies(e,t);"Not Applicable"===s&&(s=o.context.defaultBehaviour,e.body.auth=!1),o.actionsService.enforcePolicies(e,t).then(function(t){for(var r in t)if(e=t[r],s)e.body.auth=void 0===e.body.auth||e.body.auth,n(e);else{var o={body:{code:403,description:"Blocked by policy"},from:e.to,to:e.from,type:"response"};i(o)}},function(e){i(e)})})}},{key:"authoriseSync",value:function(e){var t=void 0;return e.body=e.body||{},t=this.pdp.evaluatePolicies(e,!0),"Not Applicable"===t&&(t=this.context.defaultBehaviour),t}},{key:"removePolicy",value:function(e,t){if(!e)throw new Error("source is not defined");if("*"!==e&&!t)throw new Error("key is not defined");switch(e){case"*":this.context.serviceProviderPolicy={},this.context.userPolicies={},this.context.activeUserPolicy=void 0,this.context.savePolicies("USER"),this.context.savePolicies("SERVICE_PROVIDER"),this.context.saveActivePolicy();break;case"SERVICE_PROVIDER":delete this.context.serviceProviderPolicy[t],this.context.savePolicies();break;case"USER":delete this.context.userPolicies[t],t===this.context.activeUserPolicy&&(this.context.activeUserPolicy=void 0,this.context.saveActivePolicy()),this.context.savePolicies("USER");break;default:throw Error("Unknown policy source: "+e)}}},{key:"messageBus",get:function(){return this.context.messageBus},set:function(e){var t=this;t.context.messageBus=e,t.addGUIListeners()}}]),PEP}());t.default=g,e.exports=t.default},/* 479 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=function(){function ActionsService(e){(0,s.default)(this,ActionsService),this.context=e}return(0,u.default)(ActionsService,[{key:"enforcePolicies",value:function(e,t){var r=this;return new i.default(function(n,i){var o=r.context.getPolicies(e,t);void 0!==o?void 0!==o.serviceProviderPolicy?o.serviceProviderPolicy.enforceActions(r.context,e).then(function(e){n(e)},function(e){i(e)}):void 0!==o.userPolicy?o.userPolicy.enforceActions(r.context,e).then(function(e){n(e)},function(e){i(e)}):n([e]):n([e])})}},{key:"forwardToID",value:function(e,t){var r=this;if(!r.context.runtimeRegistry)throw new Error("forward message to given ID is unsupported in this environment");return new i.default(function(n,i){if(r.context.runtimeRegistry.hypertiesList[0].hypertyURL===e.to){"runtime"!==e.to.split("://")[0]?r.context.runtimeRegistry.discoverHypertyPerUser(t).then(function(t){e.to=t.hypertyURL,e.body.via=void 0,n(e),r.context.runtimeRegistry._messageBus.postMessage(e)},function(e){i(e)}):n(e)}else n(e)})}},{key:"forwardToHyperty",value:function(e,t){var r=this;if(!r.context.runtimeRegistry)throw new Error("forward message to given ID is unsupported in this environment");return new i.default(function(n){if(r.context.runtimeRegistry.hypertiesList[0].hypertyURL===e.to){"runtime"!==e.to.split("://")[0]?(e.to=t,e.body.via=void 0,n(e),r.context.runtimeRegistry._messageBus.postMessage(e)):n(e)}else n(e)})}},{key:"sendAutomaticMessage",value:function(e,t){var r=this;return new i.default(function(n){var i={from:e.to,to:e.from,body:{value:t},type:e.type};n(e),r.context.runtimeRegistry._messageBus.postMessage(i)})}}]),ActionsService}();t.default=c,e.exports=t.default},/* 480 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=r(145),u=_interopRequireDefault(a),c=function(){function PDP(e){(0,i.default)(this,PDP),this.context=e,this.operators=new u.default}return(0,s.default)(PDP,[{key:"evaluatePolicies",value:function(e,t){var r=this.context.getPolicies(e,t),n="Not Applicable";if(void 0!==r&&((n=this.evaluatePolicy(e,r.serviceProviderPolicy,t))||"Not Applicable"===n)){var i=this.evaluatePolicy(e,r.userPolicy,t);"Not Applicable"!==i&&(n=i)}return n}},{key:"evaluatePolicy",value:function(e,t,r){var n="Not Applicable";return t&&(n=t.evaluateRules(this.context,e,r)),n}}]),PDP}();t.default=c,e.exports=t.default},/* 481 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(207),f=_interopRequireDefault(c),l=r(208),d=_interopRequireDefault(l),p=r(209),y=_interopRequireDefault(p),h=r(482),v=_interopRequireDefault(h),g=function(){function Policy(e,t,r,n){if((0,s.default)(this,Policy),!e)throw new Error("key is not defined");if(!r)throw new Error("actions are not defined");this.actions=r,this.key=e,this._setRules(t),this._setCombiningAlgorithm(n)}return(0,u.default)(Policy,[{key:"addAction",value:function(e,t){this.actions.push({method:e,param:t})}},{key:"createRule",value:function(e,t,r,n,i){void 0===i&&(i=this.getLastPriority()+1);var o=new v.default(e,t,r,n,i);this.rules.push(o)}},{key:"deleteRule",value:function(e){var t=this.rules.indexOf(e);this.rules.splice(t,1)}},{key:"enforceActions",value:function(e,t){var r=this;return new i.default(function(n,o){var s=[];if(0!==r.actions.length){for(var a in r.actions){var u=e.pep.actionsService[r.actions[a].method](t,r.actions[a].param);s.push(u)}i.default.all(s).then(function(e){n(e)},function(e){o(e)})}else n([t])})}},{key:"evaluateRules",value:function(e,t,r){var n=[];for(var i in this.rules)n.push(this.rules[i].evaluate(e,t,r));return this.combiningAlgorithm.combine(n)}},{key:"getLastPriority",value:function(){var e=[];if(0!==this.rules.length){for(var t in this.rules)e.push(this.rules[t].priority);return Math.max.apply(Math,e)}return-1}},{key:"getRuleByPriority",value:function(e){for(var t in this.rules)if(String(this.rules[t].priority)===String(e))return this.rules[t];throw Error("Rule with priority "+e+" does not exist!")}},{key:"_setCombiningAlgorithm",value:function(e){switch(e||(e="blockOverrides"),e){case"blockOverrides":this.combiningAlgorithm=new d.default;break;case"allowOverrides":this.combiningAlgorithm=new f.default;break;case"firstApplicable":this.combiningAlgorithm=new y.default;break;default:throw Error("Unknown algorithm: "+e)}}},{key:"_setRules",value:function(e){this.rules=[];for(var t in e){var r=e[t];void 0===r.priority&&(r.priority=this.getLastPriority()+1),r instanceof v.default||(r=new v.default(r.decision,r.condition,r.scope,r.target,r.priority)),this.rules.push(r)}}},{key:"sortRules",value:function(){return this.rules.sort(function(e,t){var r=e.priority,n=t.priority;return r<n?-1:r>n?1:0})}}]),Policy}();t.default=g,e.exports=t.default},/* 482 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=r(483),u=_interopRequireDefault(a),c=r(146),f=_interopRequireDefault(c),l=r(14),d=function(){function Rule(e,t,r,n,o){(0,i.default)(this,Rule),this.decision=e,this.setCondition(t),this.priority=o,this.scope=r,this.target=n}return(0,s.default)(Rule,[{key:"setCondition",value:function(e){if(e instanceof f.default||e instanceof u.default||e instanceof u.default)this.condition=e;else{switch(e.attribute){case"subscription":this.condition=new u.default(e.attribute,e.operator,e.params);break;case void 0:this.condition=new u.default(e);break;default:this.condition=new f.default(e.attribute,e.operator,e.params)}}}},{key:"evaluate",value:function(e,t,r){var n=r?t.to:t.from,i=void 0;switch(this.scope){case"global":break;case"hyperty":if((0,l.isDataObjectURL)(n)){var o=e.runtimeRegistry.getReporterURLSynchonous((0,l.removePathFromURL)(n));void 0!==o&&(i=e.runtimeRegistry.getHypertyName(o))}else"hyperty"===n.split("://")[0]&&(i=e.runtimeRegistry.getHypertyName((0,l.removePathFromURL)(n)));if(i===this.target)break;return"Not Applicable";case"identity":var s=void 0;if((0,l.isDataObjectURL)(n)){var a=e.runtimeRegistry.getReporterURLSynchonous((0,l.removePathFromURL)(n));s=e.runtimeRegistry.getHypertyOwner(a)}else"hyperty"===n.split("://")[0]&&(s=e.runtimeRegistry.getHypertyOwner((0,l.removePathFromURL)(n)));if(void 0!==s&&(s=(0,l.getUserEmailFromURL)(s)),s===this.target)break;return"Not Applicable"}return this.condition.isApplicable(e,t,this.scope,this.target)?this.decision:"Not Applicable"}}]),Rule}();t.default=d,e.exports=t.default},/* 483 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=r(146),u=_interopRequireDefault(a),c=r(145),f=_interopRequireDefault(c),l=r(484),d=_interopRequireDefault(l),p=function(){function AdvancedCondition(e){(0,i.default)(this,AdvancedCondition),this.operators=new f.default,void 0!==e.operators&&(e=e.condition),e=this.buildCondition(e),this.condition=e}return(0,s.default)(AdvancedCondition,[{key:"buildCondition",value:function(e){return Array.isArray(e[1])?e[1]=this.buildCondition(e[1]):"subscription"===e[1].attribute?e[1]=new d.default(e[1].attribute,e[1].operator,e[1].params):e[1]=new u.default(e[1].attribute,e[1].operator,e[1].params),void 0!==e[2]&&(Array.isArray(e[2])?e[2]=this.buildCondition(e[2]):"subscription"===e[2].attribute?e[2]=new d.default(e[2].attribute,e[2].operator,e[2].params):e[2]=new u.default(e[2].attribute,e[2].operator,e[2].params)),e}},{key:"isApplicable",value:function(e,t,r,n,i,o,s){for(i||(i=this.condition[0],o=this.condition[1],s=this.condition[2]);!(o instanceof u.default)&!(o instanceof d.default)&"boolean"!=typeof o;)o=this.isApplicable(e,t,r,n,o[0],o[1],o[2]);if(void 0!==s)for(;!(s instanceof u.default)&!(s instanceof d.default)&"boolean"!=typeof s;)s=this.isApplicable(e,t,r,n,s[0],s[1],s[2]);var a="boolean"==typeof o?o:o.isApplicable(e,t,r,n),c=void 0;return void 0!==s&&(c="boolean"==typeof s?s:s.isApplicable(e,t,r,n)),this.operators[i]([a,c])}}]),AdvancedCondition}();t.default=p,e.exports=t.default},/* 484 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(60),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(68),f=_interopRequireDefault(c),l=r(485),d=_interopRequireDefault(l),p=r(69),y=_interopRequireDefault(p),h=r(146),v=_interopRequireDefault(h),g=function(e){/**
  * Creates a new SubscriptionCondition.
  * @class
  * @param  {string}  attribute
  * @param  {string}  operator
  * @param  {*}       params
  */
function SubscriptionCondition(e,t,r){return(0,s.default)(this,SubscriptionCondition),(0,f.default)(this,(SubscriptionCondition.__proto__||(0,i.default)(SubscriptionCondition)).call(this,e,t,r))}/**
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
t.default=g,e.exports=t.default},/* 485 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=r(60),i=_interopRequireDefault(n),o=r(486),s=_interopRequireDefault(o);t.default=function get(e,t,r){null===e&&(e=Function.prototype);var n=(0,s.default)(e,t);if(void 0===n){var o=(0,i.default)(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(r)}},/* 486 */
/***/
function(e,t,r){e.exports={default:r(487),__esModule:!0}},/* 487 */
/***/
function(e,t,r){r(488);var n=r(10).Object;e.exports=function(e,t){return n.getOwnPropertyDescriptor(e,t)}},/* 488 */
/***/
function(e,t,r){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var n=r(46),i=r(142).f;r(99)("getOwnPropertyDescriptor",function(){return function(e,t){return i(n(e),t)}})},/* 489 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(47),i=_interopRequireDefault(n),o=r(60),s=_interopRequireDefault(o),a=r(1),u=_interopRequireDefault(a),c=r(2),f=_interopRequireDefault(c),l=r(68),d=_interopRequireDefault(l),p=r(69),y=_interopRequireDefault(p),h=r(7),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(h),g=r(204),b=_interopRequireDefault(g),m=r(490),_=_interopRequireDefault(m),R=v.getLogger("MessageBus"),w=function(e){/* private
  _registry: Registry
  _forwards: { <from-url>: { fl: MsgListener, sandboxToUrls: Map(Sandbox, [to-url]), urlToSandbox: { to-url: Sandbox } } }
   _pipeline: Pipeline
  */
//TODO: future optimization
//1. message batch processing with setInterval
//2. resolve default gateway/protostub with register.resolve
function MessageBus(e){(0,u.default)(this,MessageBus);var t=(0,d.default)(this,(MessageBus.__proto__||(0,s.default)(MessageBus)).call(this));return t._registry=e,t._forwards={},t._pipelineIn=new _.default(function(e){R.error("PIPELINE-ERROR: ",(0,i.default)(e))}),t._pipelineOut=new _.default(function(e){R.error("PIPELINE-ERROR: ",(0,i.default)(e))}),t}return(0,y.default)(MessageBus,e),(0,f.default)(MessageBus,[{key:"postMessage",/**
     * Post a message for routing. It will first search for a listener, if there is no one, it sends to a external routing using the _onPostMessage.
     * External routing use the registry.resolve(..) method to decide the destination sandbox.
     * @param  {Message} inMsg            JSON with mandatory Message structure {id, type, from, to}
     * @param  {Callback} responseCallback Optional callback if a response is expected from the request. A response will be always sent, even if it is a "Timeout".
     * @return {number}                  the Message id
     */
value:function(e,t,r){R.info("onPOSTMessage: ",e);var n=this,i=function(i){if(n._responseCallback(e,t,r),!n._onResponse(i)){var o=n._subscriptions[i.to];o?
//do not publish on default address, because of loopback cycle
n._publishOn(o,i):
//if there is no listener, send to external interface
n._onPostMessage(i)}};if(n._genId(e),n._isToProcess(e)){n._isIncomingMessage(e)?n._pipelineIn.process(e,i):n._pipelineOut.process(e,i)}else i(e);return e.id}},{key:"_isToProcess",value:function(e){var t=["domain","domain-idp","global","hyperty-runtime","runtime"],r=e.from.split("://"),n=r[0],i=e.to.split("://"),o=i[0],s=e.from,a=e.to;
// Signalling messages between P2P Stubs don't have to be verified. FFS
return e.body&&e.body.source&&(s=e.body.source),e.body&&e.body.subscriber&&(s=e.body.subscriber),-1===s.indexOf("/p2phandler/")&&-1===s.indexOf("/p2prequester/")&&-1===a.indexOf("/p2phandler/")&&-1===a.indexOf("/p2prequester/")&&((!this._registry.isLocal(s)||!this._registry.isLocal(e.to))&&(!(e.from===n||e.to===o||"read"===e.type||"response"===e.type||e.from.includes("hyperty://")&&"delete"===e.type)&&(-1===t.indexOf(n)||-1===t.indexOf(o))))}},{key:"_isIncomingMessage",value:function(e){var t=void 0;
//TODO: this subscriber validation should not exist, because is outdated
//TODO: the syncher and syncher manager not following the correct spec;
//TODO: this subscriber validation should not exist, because is outdated
//TODO: the syncher and syncher manager not following the correct spec;
return"forward"===e.type?(R.info("[MessageBus - isIncomingMessage] - message.type: ",e.type),t=e.body.from):e.hasOwnProperty("body")&&e.body.hasOwnProperty("source")&&e.body.source?(R.info("[MessageBus - isIncomingMessage] - message.body.source: ",e.body.source),t=e.body.source):e.hasOwnProperty("body")&&e.body.hasOwnProperty("subscriber")&&e.body.subscriber?(R.info("[MessageBus - isIncomingMessage] - message.body.subscriber: ",e.body.subscriber),t=e.body.subscriber):e.hasOwnProperty("body")&&e.body.hasOwnProperty("reporter")&&e.body.reporter?(R.info("[MessageBus - isIncomingMessage] - message.body.reporter: ",e.body.reporter),t=e.body.reporter):(R.info("[MessageBus - isIncomingMessage] - message.from ",e.from),t=e.from),R.info("[MessageBus - isIncomingMessage] - check if isLocal: ",t),!this._registry.isLocal(t)}},{key:"addPublish",value:function(e){var t=this,r=this,n=r._forwards[e];if(!n){n={counter:0,fl:r.addListener(e,function(t){R.info("MB-PUBLISH: ( "+e+" )"),r._onPostMessage(t)}),remove:function(){0===--t.counter&&(t.fl.remove(),delete r._forwards[e])}},r._forwards[e]=n}return n.counter++,n}},{key:"addForward",value:function(e,t){var r=this;return r.addListener(e,function(n){R.info("MB-FORWARD: ( "+e+" to "+t+" )"),r.forward(t,n)})}},{key:"forward",value:function(e,t){var r=this,n=r._subscriptions[e];n&&r._publishOn(n,t)}},{key:"_onPostMessage",value:function(e){var t=this;
//resolve external protostub...
t._registry.resolve(e).then(function(r,n){n?t.forward(r,n):t.forward(r,e)}).catch(function(e){R.error("RESOLVE-ERROR: ",e)})}},{key:"pipelineIn",get:function(){return this._pipelineIn}},{key:"pipelineOut",get:function(){return this._pipelineOut}}]),MessageBus}(b.default);t.default=w,e.exports=t.default},/* 490 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=r(7),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),c=(r(14),u.getLogger("Pipeline"),function(){/* public
    handlers: ((PipeContext) => void)[]
    onFail: (error) => void
  */
function Pipeline(e){(0,i.default)(this,Pipeline);var t=this;t.handlers=[],t.onFail=e}/**
   * Insert a message in the pipeline queue. All messages are wrapped with a PipeContext.
   * @param  {Message} msg       Message for the queue
   * @param  {Callback} onDeliver When message is finished processing from all handlers, it will be delivered in this callback.
   */
return(0,s.default)(Pipeline,[{key:"process",value:function(e,t){var r=this;if(r.handlers.length>0){var n=new l(r.handlers);n.next(new f(r,n,e,t))}else t(e)}}]),Pipeline}()),f=function(){/* private
    _inStop: boolean
     _pipeline: Pipeline
    _iter: Iterator
    _msg: Message
  */
function PipeContext(e,t,r,n){(0,i.default)(this,PipeContext);var o=this;o._inStop=!1,o._pipeline=e,o._iter=t,o._msg=r,o._onDeliver=n}return(0,s.default)(PipeContext,[{key:"next",/**
     * Proceed to the next interceptor handler, unless there was an error. If it's the last one, proceed to onDeliver handler.
     */
value:function(){var e=this;e._inStop||(e._iter.hasNext?e._iter.next(e):e._onDeliver(e._msg))}},{key:"deliver",value:function(){var e=this;e._inStop||(e._inStop=!0,e._onDeliver(e._msg))}},{key:"fail",value:function(e){var t=this;t._inStop||(t._inStop=!0,t._pipeline.onFail&&t._pipeline.onFail(e))}},{key:"pipeline",get:function(){return this._pipeline}},{key:"msg",get:function(){return this._msg},set:function(e){this._msg=e}}]),PipeContext}(),l=function(){/* private
    _index: number
    _array: []
  */
function Iterator(e){(0,i.default)(this,Iterator),this._index=-1,this._array=e}return(0,s.default)(Iterator,[{key:"hasNext",get:function(){return this._index<this._array.length-1}},{key:"next",get:function(){return this._index++,this._array[this._index]}}]),Iterator}();t.default=c,e.exports=t.default},/* 491 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(47),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(1),u=_interopRequireDefault(a),c=r(2),f=_interopRequireDefault(c),l=r(492),d=r(7),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(d),y=p.getLogger("CryptoManager"),h=function(){/**
  * Runtimefactory is passed in the costructor, because the nodeJS has a different crypto module
  * from the browser. RuntimeFactory provides a wrapper for the fuctions of nodeJS, so they can be
  * invoked browser like.
  */
function Crypto(e){(0,u.default)(this,Crypto);var t=this;"function"==typeof e.createWebcrypto?t._crypto=e.createWebcrypto():t._crypto=crypto}/**
  * Performs a RSA encryption
  * @param   {ArrayBuffer}    value    the public key
  * @param   {BufferSource}    value    data to be encryped
  * @return  {Uint8Array}   encrypted data
  */
return(0,f.default)(Crypto,[{key:"encryptRSA",value:function(e,t){y.log("encryptRSA:pubKey",e),y.log("encryptRSA:data",t);var r=this;return new s.default(function(n,i){r._importRSAencryptKey(new Uint8Array(e)).then(function(e){r._crypto.subtle.encrypt({name:"RSA-OAEP"},e,//from generateKey or importKey above
t).then(function(e){
//returns an ArrayBuffer containing the encrypted data
// log.log('crypto-encryptRSA', new Uint8Array(encrypted));
n(new Uint8Array(e))}).catch(function(e){
// log.log('crypto-encryptRSA', err);
i(e)})})})}},{key:"decryptRSA",value:function(e,t){y.log("decryptRSA:privKey",e),y.log("decryptRSA:data",t);var r=this;return new s.default(function(n,i){r._importRSAdecryptKey(e).then(function(e){r._crypto.subtle.decrypt({name:"RSA-OAEP"},e,//from generateKey or importKey above
t).then(function(e){var t=new Uint8Array(e);
// log.log('crypto-decryptRSA', decryptedData);
n(t)}).catch(function(e){
// log.log('crypto-decryptRSA', err);
i(e)})})})}},{key:"signRSA",value:function(e,t){var r=this;return new s.default(function(n,i){r._importRSAsignKey(e).then(function(e){r._crypto.subtle.sign({name:"RSASSA-PKCS1-v1_5"},e,//from generateKey or importKey above
(0,l.encodeUTF8)(t)).then(function(e){
//returns an ArrayBuffer containing the signature
// log.log('crypto-signRSA', new Uint8Array(signature));
n(new Uint8Array(e))}).catch(function(e){
// log.log('crypto-signRSA', err);
i(e)})})})}},{key:"verifyRSA",value:function(e,t,r){var n=this;return new s.default(function(i,o){n._importRSAverifyKey(e).then(function(e){n._crypto.subtle.verify({name:"RSASSA-PKCS1-v1_5"},e,//from generateKey or importKey above
r,//ArrayBuffer of the signature
(0,l.encodeUTF8)(t)).then(function(e){
//returns a boolean on whether the signature is true or not
// log.log('crypto-verifyRSA', isvalid);
i(e)}).catch(function(e){
// log.log('crypto-verifyRSA', err);
o(e)})})})}},{key:"encryptAES",value:function(e,t,r){y.log("encryptAES:key",e),y.log("encryptAES:data",t),y.log("encryptAES:iv",r);var n=this;return new s.default(function(i,o){n._importAESkey(e).then(function(e){n._crypto.subtle.encrypt({name:"AES-CBC",
//Don't re-use initialization vectors!
//Always generate a new iv every time your encrypt!
iv:r},e,//from generateKey or importKey above
(0,l.encodeUTF8)(t)).then(function(e){
//returns an ArrayBuffer containing the encrypted data
// log.log('crypto-encryptAES', new Uint8Array(encrypted));
i(new Uint8Array(e))}).catch(function(e){
// log.log('crypto-encryptAES', err);
o(e)})})})}},{key:"decryptAES",value:function(e,t,r){y.log("decryptAES:key",e),y.log("decryptAES:data",t),y.log("decryptAES:iv",r);var n=this;return new s.default(function(i,o){n._importAESkey(e).then(function(e){n._crypto.subtle.decrypt({name:"AES-CBC",iv:r},e,//from generateKey or importKey above
t).then(function(e){var t=(0,l.decodeUTF8)(new Uint8Array(e));y.log("crypto-decryptAES",t),i(t)}).catch(function(e){
// log.log('crypto-decryptAES', err);
o(e)})})})}},{key:"hashHMAC",value:function(e,t){y.log("hashHMAC:key",e),y.log("hashHMAC:data",t);var r=this;return new s.default(function(n,o){"string"!=typeof t&&(t=(0,i.default)(t),y.log("Converting hashHMAC inpured DATA"),y.log("HHashHMAC:",t)),r._importHMACkey(e).then(function(e){r._crypto.subtle.sign({name:"HMAC"},e,//from generateKey or importKey above
(0,l.encodeUTF8)(t)).then(function(e){y.log("HashHMAC signature:",new Uint8Array(e)),
// log.log('crypto-hashHMAC', signature);
//returns an ArrayBuffer containing the signature
n(new Uint8Array(e))}).catch(function(e){
// log.log('crypto-hashHMAC', err);
o(e)})})})}},{key:"verifyHMAC",value:function(e,t,r){y.log("verifyHMAC:key",e),y.log("verifyHMAC:data",t),y.log("verifyHMAC:signature",r);var n=this;return new s.default(function(o,s){n._importHMACkey(e).then(function(e){"string"!=typeof t&&(t=(0,i.default)(t),y.log("Converting verifyHMAC inputed DATA:",t)),n._crypto.subtle.verify({name:"HMAC"},e,//from generateKey or importKey above
r,//ArrayBuffer of the signature
(0,l.encodeUTF8)(t)).then(function(e){
//returns a boolean on whether the signature is true or not
// log.log('crypto-verifyHMAC', isvalid);
y.log("verifyHMAC result",e),e?o(e):s(e)}).catch(function(e){y.error("crypto-verifyHMAC",e),s(e)})})})}},{key:"generateRSAKeyPair",value:function(){var e=this,t={};return new s.default(function(r,n){e._crypto.subtle.generateKey({name:"RSA-PSS",modulusLength:2048,//can be 1024, 2048, or 4096
publicExponent:new Uint8Array([1,0,1]),hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["sign","verify"]).then(function(i){
//returns a keypair object
// log.log(key);
e._crypto.subtle.exportKey("spki",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
i.publicKey).then(function(r){
//returns the exported key data
//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
return t.public=new Uint8Array(r),e._crypto.subtle.exportKey("pkcs8",i.privateKey)}).then(function(e){t.private=new Uint8Array(e),
// log.log('crypto-generateRSAKeyPair', keyPair);
r(t)}).catch(function(e){y.error(e),n(e)})}).catch(function(e){y.error(e),n(e)})})}},{key:"generateIV",value:function(){var e=this,t=new Uint8Array(16);return e._crypto.getRandomValues(t),t}},{key:"generateRandom",value:function(){var e=this,t=new Uint8Array(32);e._crypto.getRandomValues(t);
// add in the first 4 bytes of the array the bytes extracted previously;
for(var r=Date.now(),n=(0,l.encodeUTF8)(r.toString()),i=n.slice(n.length-4,n.length),o=0;o<4;o++)t[o]=i[o];return t}},{key:"generatePMS",value:function(){var e=this,t=new Uint8Array(48);return e._crypto.getRandomValues(t),t}},{key:"generateMasterSecret",value:function(e,t){var r=this;return new s.default(function(n,i){var o=new Uint8Array(48),s=t;r._digest(e).then(function(e){r.hashHMAC(e,s).then(function(t){
//copy the first 32 bytes into the key
for(var n=0;n<32;n++)o[n]=t[n];return r.hashHMAC(e,s+t)}).then(function(e){
//copy the first 16 bytes to the key remaining 16 bytes
for(var t=0;t<16;t++)o[t+32]=e[t];
// log.log('crypto-generateMasterSecret', key);
n(o)}).catch(function(e){
// log.log('crypto-generateMasterSecret', err);
i(e)})})})}},{key:"generateKeys",value:function(e,t){var r=this;return new s.default(function(n,i){var o=[],s=t;
// iterate 4 times to obtain a 1024 key size
r.hashHMAC(e,s).then(function(t){return o.push(t),r.hashHMAC(e,s+t)}).then(function(t){return o.push(t),r.hashHMAC(e,s+t)}).then(function(t){return o.push(t),r.hashHMAC(e,s+t)}).then(function(e){o.push(e),
// log.log('crypto-generateKeys', key);
n(o)}).catch(function(e){
// log.log('crypto-generateKeys', err);
i(e)})})}},{key:"_importRSAsignKey",value:function(e){var t=this;return new s.default(function(r,n){t._crypto.subtle.importKey("pkcs8",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
e,{//these are the algorithm options
name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["sign"]).then(function(e){
//returns a publicKey (or privateKey if you are importing a private key)
// log.log('crypto-_importRSAsignKey', privateKey);
r(e)}).catch(function(e){y.error("crypto-_importRSAsignKey",e),n(e)})})}},{key:"_importRSAverifyKey",value:function(e){var t=this;return new s.default(function(r,n){t._crypto.subtle.importKey("spki",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
e,{//these are the algorithm options
name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["verify"]).then(function(e){
//returns a publicKey (or privateKey if you are importing a private key)
// log.log('crypto-_importRSAverifyKey', publicKey);
r(e)}).catch(function(e){y.error("crypto-_importRSAverifyKey",e),n(e)})})}},{key:"_importRSAencryptKey",value:function(e){var t=this;return new s.default(function(r,n){t._crypto.subtle.importKey("spki",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
e,{//these are the algorithm options
name:"RSA-OAEP",hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["encrypt"]).then(function(e){
//returns a publicKey (or privateKey if you are importing a private key)
// log.log('crypto-_importRSAencryptKey', publicKey);
r(e)}).catch(function(e){y.error("crypto-_importRSAencryptKey",e.name),n(e)})})}},{key:"_importRSAdecryptKey",value:function(e){var t=this;return new s.default(function(r,n){t._crypto.subtle.importKey("pkcs8",//can be 'jwk' (public or private), 'spki' (public only), or 'pkcs8' (private only)
e,{//these are the algorithm options
name:"RSA-OAEP",hash:{name:"SHA-256"}},!0,//whether the key is extractable (i.e. can be used in exportKey)
["decrypt"]).then(function(e){
//returns a publicKey (or privateKey if you are importing a private key)
// log.log('crypto-_importRSAdecryptKey', privateKey);
r(e)}).catch(function(e){y.error("crypto-_importRSAdecryptKey",e),n(e)})})}},{key:"concatPMSwithRandoms",value:function(e,t,r){
// add PremasterKey
for(var n=new Uint8Array(e.length+t.length+r.length),i=0;i<e.length;i++)n[i]=e[i];
//add to random
for(var o=0;o<t.length;o++)n[o+e.length]=e[o];
//add from random
for(var s=0;s<r.length;s++)n[s+e.length+t.length]=e[s];return n}},{key:"_generate256bitKey",value:function(){var e=this,t=new Uint8Array(32);return e._crypto.getRandomValues(t),t}},{key:"_importHMACkey",value:function(e){var t=this;return new s.default(function(r,n){t._digest(e).then(function(e){t._crypto.subtle.importKey("raw",//can be 'jwk' or 'raw'
e,{//this is the algorithm options
name:"HMAC",hash:{name:"SHA-256"},//can be 'SHA-1', 'SHA-256', 'SHA-384', or 'SHA-512'
length:256},!0,//whether the key is extractable (i.e. can be used in exportKey)
["sign","verify"]).then(function(e){
//returns the symmetric key
// log.log('crypto-_importHMACkey', key);
r(e)}).catch(function(e){n(e)})})})}},{key:"_digest",value:function(e){var t=this;return new s.default(function(r,n){t._crypto.subtle.digest({name:"SHA-256"},e).then(function(e){
//returns the hash as an ArrayBuffer
// log.log('crypto-digest', new Uint8Array(hash));
r(new Uint8Array(e))}).catch(function(e){y.error(e),n(e)})})}},{key:"_importAESkey",value:function(e){var t=this;return new s.default(function(r,n){t._crypto.subtle.importKey("raw",//can be 'jwk' or 'raw'
e,{//this is the algorithm options
name:"AES-CBC"},!0,//whether the key is extractable (i.e. can be used in exportKey)
["encrypt","decrypt"]).then(function(e){
//returns the symmetric key
// log.log('crypto-importAESkey', key);
r(e)}).catch(function(e){y.error("crypto-importAESkey",e),n(e)})})}},{key:"_sha256",value:function(e){var t=this,r=new TextEncoder("utf-8").encode(e);return t._crypto.subtle.digest("SHA-256",r).then(function(e){return t._hex(e)})}},{key:"_hex",value:function(e){for(var t=[],r=new DataView(e),n=0;n<r.byteLength;n+=4){
// Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
var i=r.getUint32(n),o=i.toString(16),s=("00000000"+o).slice(-"00000000".length);t.push(s)}
// Join all the hex strings into one
return t.join("")}}]),Crypto}();t.default=h,e.exports=t.default},/* 492 */
/***/
function(e,t,r){"use strict";
// Marshals a string to Uint8Array.
function encodeUTF8(e){for(var t=0,r=new Uint8Array(4*e.length),n=0;n!=e.length;n++){try{e.charCodeAt(n)}catch(e){return}var i=e.charCodeAt(n);if(i<128)r[t++]=i;else{if(i<2048)r[t++]=i>>6|192;else{if(i>55295&&i<56320){if(++n==e.length)throw"UTF-8 encode: incomplete surrogate pair";var o=e.charCodeAt(n);if(o<56320||o>57343)throw"UTF-8 encode: second char code 0x"+o.toString(16)+" at index "+n+" in surrogate pair out of range";i=65536+((1023&i)<<10)+(1023&o),r[t++]=i>>18|240,r[t++]=i>>12&63|128}else
// c <= 0xffff
r[t++]=i>>12|224;r[t++]=i>>6&63|128}r[t++]=63&i|128}}return r.subarray(0,t)}
// Unmarshals an Uint8Array to string.
function decodeUTF8(e){for(var t="",r=0;r<e.length;){var n=e[r++];if(n>127){if(n>191&&n<224){if(r>=e.length)throw"UTF-8 decode: incomplete 2-byte sequence";n=(31&n)<<6|63&e[r]}else if(n>223&&n<240){if(r+1>=e.length)throw"UTF-8 decode: incomplete 3-byte sequence";n=(15&n)<<12|(63&e[r])<<6|63&e[++r]}else{if(!(n>239&&n<248))throw"UTF-8 decode: unknown multibyte start 0x"+n.toString(16)+" at index "+(r-1);if(r+2>=e.length)throw"UTF-8 decode: incomplete 4-byte sequence";n=(7&n)<<18|(63&e[r])<<12|(63&e[++r])<<6|63&e[++r]}++r}if(n<=65535)t+=String.fromCharCode(n);else{if(!(n<=1114111))throw"UTF-8 decode: code point 0x"+n.toString(16)+" exceeds UTF-16 reach";n-=65536,t+=String.fromCharCode(n>>10|55296),t+=String.fromCharCode(1023&n|56320)}}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.encodeUTF8=encodeUTF8,t.decodeUTF8=decodeUTF8},/* 493 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(98),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(1),u=_interopRequireDefault(a),c=r(2),f=_interopRequireDefault(c),l=r(7),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=r(14),y=r(100),h=_interopRequireDefault(y),v=d.getLogger("loader"),g=function(){function Loader(e,t,r){if((0,u.default)(this,Loader),!t)throw Error("[Runtime.Loader] The descriptor need to know the runtime configuration");if(!r)throw Error("[Runtime.Loader] The descriptor need to know the runtime Descriptor instance");this.log=v,this.runtimeConfiguration=t,this.descriptors=r}/**
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
value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this,n=arguments[2];arguments[3];if(!this._readyToUse())return!1;if(!e)throw new Error("[Runtime.Loader] Hyperty descriptor url parameter is needed");return new s.default(function(o,s){var a=void 0,u=void 0,c=void 0,f=void 0,l=!1,d=function(e){v.info("[Runtime.Loader] Something failed on the deploy hyperty: ",e),s(e)},y=function(e){l=!0,s(e)};
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
var t={};return c&&c.hasOwnProperty("capabilities")&&(t=c.stubCapabilities),r._runtimeFactory.createSandbox(t).then(function(e){return e.addListener("*",function(e){r.messageBus.postMessage(e)}),e})},y).then(function(e){if(l)return!1;v.info("[Runtime.Loader] 5: return sandbox and register"),u=e;
//debugger;
return r._addressAllocation.create(r._registry._domain,1,c,"hyperty",t)},y).then(function(t){return!l&&(v.info("[Runtime.Loader] 6: return the addresses for the hyperty",t),r.registry.registerHyperty(u,e,c,t,n))},y).then(function(e){if(l)return!1;v.info("[Runtime.Loader] 7: registration result",e),
// we have completed step 16 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
a=e.url;
// Extend original hyperty configuration;
var t={};if(!(0,p.emptyObject)(c.configuration))try{t=(0,i.default)({},JSON.parse(c.configuration))}catch(e){t=c.configuration}t.runtimeURL=r._runtimeURL,e.p2pHandler&&(t.p2pHandler=e.p2pHandler,t.p2pRequester=e.p2pRequester);
// We will deploy the component - step 17 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
try{return u.deployComponent(f.sourceCode,a,t)}catch(e){v.info("[Runtime.Loader] Error on deploy component:",e),s(e)}},y).then(function(e){if(l)return!1;v.info("[Runtime.Loader] 8: Deploy component status for hyperty: ",e),
// we have completed step 19 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
// Add the message bus listener to the appSandbox or hypertSandbox;
r.messageBus.addListener(a,function(e){u.postMessage(e)});
// we have completed step 20 of https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
var t={runtimeHypertyURL:a,status:e};v.info("[Runtime.Loader] Hyperty: ",t),o(t),
// we have completed step 21 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-hyperty.md right now.
v.info("[Runtime.Loader] ------------------ END ------------------------")},y).catch(d)})}},{key:"loadStub",value:function(e,t){var r=this;if(!this._readyToUse())return!1;if(!e)throw new Error("[Runtime.Loader.loadStub]ProtoStub descriptor url parameter is needed");return new s.default(function(n,o){
// to analyse if domain for p2pHandlers should be something else and not the default domain itself
var s=(0,p.divideURL)(e).domain;s||(s=e);var a=void 0,u=void 0,c=void 0,f=void 0,l=!1,d=void 0,y=function(e){v.info("[Runtime.Loader.loadStub]Something failed on the deploy of protocolstub: ",e),o(e)},h=function(e){l=!0,o(e)},g=void 0,b={};v.info("[Runtime.Loader.loadStub] starting loading for ",e," with p2pconfig ",t),v.info("[Runtime.Loader.loadStub]Discover or Create a new ProtoStub for domain: ",s);
// step 2 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
try{if(t)if(t.hasOwnProperty("isHandlerStub")&&t.isHandlerStub)
// step 6 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
!0,d=r.runtimeURL,g=r.registry.discoverP2PStub();else{!0;var m=t.remoteRuntimeURL;d=m,
// step 4 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
// step 5 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
g=r.registry.discoverP2PStub(m)}else
// step 3 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
d=s,g=r.registry.discoverProtostub(s);
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
return!l&&(u&&u.constraints&&(b=u.constraints),v.info("[Runtime.Loader.loadStub]3. return the ProtoStub Source Code"),f=e,r.registry.getSandbox(s,b))}).then(function(e){
// step 15 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
return!l&&(v.info("[Runtime.Loader.loadStub]4. if the sandbox is registered then return the sandbox ",e),a=e,e)}).catch(function(e){
// step 13 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
return!l&&(v.info("[Runtime.Loader.loadStub]5. Sandbox was not found, creating a new one ",e),r._runtimeFactory.createSandbox(b).then(function(e){return e.addListener("*",function(e){r.messageBus.postMessage(e)}),e}))}).then(function(n){
// step 16 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
return!l&&(v.info("[Runtime.Loader.loadStub]6. return the sandbox instance and register",n,"to domain ",s),a=n,r.registry.registerStub(a,d,t,e,u))},h).then(function(e){if(l)return!1;
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
return v.info("[Runtime.Loader.loadStub] 8: adding sandbox listener to protostubURL : ",c),r.messageBus.addListener(c,function(e){a.postMessage(e)}),a.deployComponent(f.sourceCode,c,n)}catch(e){v.error("[Runtime.Loader.loadStub] Error on deploy component:",e),o(e)}},h).then(function(){if(l)return!1;
// step 28 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
var e=void 0;t?(v.log("[Runtime.Loader.loadStub] p2pConfig: ",t),t.hasOwnProperty("isHandlerStub")&&(e=r.registry.p2pHandlerStub[r._runtimeURL]),t.hasOwnProperty("p2pRequesterStub")&&(e=r.registry.p2pRequesterStub[t.remoteRuntimeURL])):e=r.registry.protostubsList[s],v.log("[Runtime.Loader.loadStub] Stub: ",e),n(e),v.info("[Runtime.Loader.loadStub]------------------- END ---------------------------\n")},h).catch(y)}})}},{key:"loadIdpProxy",value:function(e){var t=this;if(!this._readyToUse())return!1;if(!e)throw new Error("[Runtime.Loader] IdpProxy descriptor url parameter is needed");return new s.default(function(r,n){var o=(0,p.divideURL)(e).domain;o||(o=e);var s=void 0,a=void 0,u=void 0,c=void 0,f=!1,l=function(e){v.info("[Runtime.Loader] Something failed on the deploy of IdpProxy: ",e),n(e)},d=function(e){f=!0,n(e)};
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
a=e;var r=e.sourcePackageURL;return"/sourcePackage"===r?e.sourcePackage:t.runtimeCatalogue.getSourcePackageFromURL(r)},d).then(function(e){if(f)return!1;v.info("[Runtime.Loader] 3. return the IDPProxy source package"),
// we have completed step 7 https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
c=e;return!0},d).then(function(e){return!f&&t.registry.getSandbox(o)}).then(function(e){return!f&&(v.info("[Runtime.Loader] 4. if the sandbox is registered then return the sandbox",e),s=e,e)}).catch(function(e){if(f)return!1;v.info("[Runtime.Loader] 5. Sandbox was not found, creating a new one",e);var r={};return a&&a.hasOwnProperty("capabilities")&&(a=a.stubCapabilities),t._runtimeFactory.createSandbox(r).then(function(e){return e.addListener("*",function(e){t.messageBus.postMessage(e)}),e})}).then(function(e){return!f&&(v.info("[Runtime.Loader] 6. return the sandbox instance and register",e,"to domain ",o),s=e,t.registry.registerIdpProxy(e,o))},d).then(function(e){if(f)return!1;v.info("[Runtime.Loader] 7. Return the runtime Idp Proxy URL: ",e),
// we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
u=e;
// Extend original hyperty configuration;
var r={};if(!(0,p.emptyObject)(a.configuration))try{r=(0,i.default)({},JSON.parse(a.configuration))}catch(e){r=a.configuration}r.runtimeURL=t._runtimeURL;
// Deploy Component step xxx
try{
// we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
// Add the message bus listener
return t.messageBus.addListener(u,function(e){s.postMessage(e)}),s.deployComponent(c.sourceCode,e,r)}catch(e){v.info("[Runtime.Loader] Error on deploy component:",e),n(e)}},d).then(function(){if(f)return!1;
// we have completed step xxx https://github.com/reTHINK-project/core-framework/blob/master/docs/specs/runtime/dynamic-view/basics/deploy-protostub.md
// Load Stub function resolved with success;
// let idpProxy = {
//   runtimeIdpProxyURL: _runtimeIdpProxyURL,
//   status: deployComponentStatus
// };
//this.registry.idpProxyList[domain].status = 'deployed';
var e=t.registry.idpProxyList[o];v.log("[Runtime.Loader.loadIdpProxy] 8: loaded: ",e),r(e),v.info("[Runtime.Loader.loadIdpProxy] ------------------- END ---------------------------\n")},d).catch(l)}})}},{key:"_readyToUse",value:function(){if(!this._runtimeURL)throw new Error("[Runtime.Loader] The loader need the runtime url address");if(!this._messagesBus)throw new Error("[Runtime.Loader] The loader need the messageBus component");if(!this._registry)throw new Error("[Runtime.Loader] The loader need the registry component");if(!this._runtimeFactory)throw new Error("[Runtime.Loader] The loader need the runtime factory component");return!0}},{key:"runtimeURL",set:function(e){this._runtimeURL=e},get:function(){return this._runtimeURL}},{key:"registry",set:function(e){this._registry=e;
// Install AddressAllocation
var t=h.default.instance;this._addressAllocation=t,v.log("[Loader - AddressAllocation] - ",t)},get:function(){return this._registry}},{key:"messageBus",set:function(e){this._messagesBus=e},get:function(){return this._messagesBus}},{key:"runtimeFactory",set:function(e){this._runtimeFactory=e},get:function(){return this._runtimeFactory}}]),Loader}();t.default=g,e.exports=t.default},/* 494 */
/***/
function(e,t,r){"use strict";function storage(e){if(!e)throw new Error("The runtime factory is a needed parameter");return(0,i.default)(o.runtimeConfiguration.storageSchemas).forEach(function(t){s.hasOwnProperty(t)||(s[t]=e.storageManager(t,o.runtimeConfiguration.storageSchemas[t]))}),s}Object.defineProperty(t,"__esModule",{value:!0});var n=r(37),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.storage=storage;var o=r(144),s={}},/* 495 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(14),f=r(143),l=r(7),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=d.getLogger("Descriptors"),y=function(){function Descriptors(e,t,r){if((0,s.default)(this,Descriptors),!e)throw Error("The descriptor need to know the runtime url to be used");if(!t)throw Error("The descriptor needs the catalogue instance");if(!r)throw Error("The descriptor needs the runtime configuration");this.log=p,this.runtimeConfiguration=r,this.runtimeURL=e,this.catalogue=t,this.constraints=f.runtimeUtils.runtimeCapabilities}return(0,u.default)(Descriptors,[{key:"getHypertyDescriptor",value:function(e){return this.catalogue.getHypertyDescriptor(e,!0,this.constraints)}},{key:"getStubDescriptor",value:function(e){var t=this;return new i.default(function(r,n){var i=void 0,o=void 0,s=void 0,a=(0,c.divideURL)(t.runtimeURL),u=a.domain;if(e.includes("://")){var f=(0,c.divideURL)(e);i=f.domain;var l=f.identity;o=l?l.substring(l.lastIndexOf("/")+1):"default"}else o="default",i=e;if(s=(0,c.buildURL)(t.runtimeConfiguration,"catalogueURLs","protocolstub",o),i!==t.runtimeConfiguration.domain)if(e.indexOf("https")&&e.indexOf("hyperty-catalogue")){
// TODO: check how to load form different configuration domain
var d=(0,c.getConfigurationResources)(t.runtimeConfiguration,"catalogueURLs","protocolstub");s=d.prefix+i+d.suffix+o}else s=e;return p.log("Load ProtocolStub for domain, "+i+" : ",s),t.catalogue.getStubDescriptor(s,!0,t.constraints).then(function(e){r(e)}).catch(function(e){
// log.log('Error: ', error);
o=i,i=u;var r=(0,c.getConfigurationResources)(t.runtimeConfiguration,"catalogueURLs","protocolstub");
// log.log('Fallback -> Load Protocolstub for domain, ' + domain + ' : ', protostub);
return s=r.prefix+i+r.suffix+o,t.catalogue.getStubDescriptor(s,!0,t.constraints)}).then(function(e){r(e)}).catch(function(e){n(e)})})}},{key:"getIdpProxyDescriptor",value:function(e){var t=this;return new i.default(function(r,n){var i=void 0,o=void 0,s=(0,c.divideURL)(t.runtimeURL),a=s.domain,u=t.constraints;if(u.constraints.onlyAccessToken=!0,u.constraints.onlyIdAssertionValidation=!0,e.includes("://")){var f=(0,c.divideURL)(e);i=f.domain;var l=f.identity;o=l?l.substring(l.lastIndexOf("/")+1):"default"}else o="default",i=e;var d=(0,c.getConfigurationResources)(t.runtimeConfiguration,"catalogueURLs","idpProxy");
// log.log('Load Idp Proxy for domain, ' + domain + ' : ', idpProxyURL);
return e=d.prefix+i+d.suffix+o,t.catalogue.getIdpProxyDescriptor(e,!0,u).then(function(e){r(e)}).catch(function(){
// log.log('Load Idp Proxy for domain, ' + domain + ' : ', idpProxyURL);
return o=i,i=a,e=(0,c.buildURL)(t.runtimeConfiguration,"catalogueURLs","idpProxy",o),t.catalogue.getIdpProxyDescriptor(e,!0,u)}).then(function(e){r(e)}).catch(function(e){n(e)})})}}]),Descriptors}();t.default=y,e.exports=t.default},/* 496 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=(r(201),r(7)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),c=u.getLogger("RuntimeUA"),f=function(){function MsgBusHandlers(e,t,r){if((0,i.default)(this,MsgBusHandlers),!e)throw Error("[MsgBusHandlers] pep input paramenter is mandatory");if(!t)throw Error("[MsgBusHandlers] idm input paramente is mandatory");if(!r)throw Error("[MsgBusHandlers] crypto input paramente is mandatory");this.policyEngine=e,this.identityManager=t,this.cryptoManager=r}
// Policy based access control for incoming messages
return(0,s.default)(MsgBusHandlers,[{key:"pepInHandler",get:function(){var e=this;return function(t){e.policyEngine.authorise(t.msg,!0).then(function(e){t.msg=e,t.next()}).catch(function(e){c.error(e),t.fail(e)})}}},{key:"pepOutHandler",get:function(){var e=this;return function(t){e.policyEngine.authorise(t.msg,!1).then(function(e){t.msg=e,t.next()}).catch(function(e){c.error(e),t.fail(e)})}}},{key:"idmHandler",get:function(){var e=this;return function(t){e.identityManager.processMessage(t.msg).then(function(e){t.msg=e,t.next()}).catch(function(e){c.error(e),t.fail(e)})}}},{key:"encryptHandler",get:function(){var e=this;return function(t){e.cryptoManager.encryptMessage(t.msg).then(function(e){t.msg=e,t.next()}).catch(function(e){c.error(e),t.fail(e)})}}},{key:"decryptHandler",get:function(){var e=this;return function(t){e.cryptoManager.decryptMessage(t.msg).then(function(e){t.msg=e,t.next()}).catch(function(e){c.warn(e),t.fail(e)})}}}]),MsgBusHandlers}();t.default=f,e.exports=t.default},/* 497 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(498),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=i.default,// let GraphConnector;
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
e.exports=t.default},/* 498 */
/***/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=function(e){return e&&e.__esModule?e:{default:e}}(n),o=function GraphConnector(e,t,r){(0,i.default)(this,GraphConnector)};t.default=o,e.exports=t.default},/* 499 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(9),i=_interopRequireDefault(n),o=r(1),s=_interopRequireDefault(o),a=r(2),u=_interopRequireDefault(a),c=r(7),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(c),l=r(14),d=f.getLogger("CoreDiscovery"),p=function(){/**
  * To initialise the Discovery, which will provide the support for hyperties to
  * query users registered in outside the internal core.
  * @param  {MessageBus}          msgbus                msgbus
  * @param  {RuntimeURL}          runtimeURL            runtimeURL
  * @param  {graphConnector}    graphConnector
  */
function CoreDiscovery(e,t,r,n,i){if((0,s.default)(this,CoreDiscovery),!n)throw Error("The catalogue needs the runtimeFactory");var o=this;this._messageBus=t,o.graphConnector=r,o.httpRequest=n.createHttpRequest(),o.domain=(0,l.divideURL)(e).domain,o.discoveryURL=e+"/discovery/",o.registry=i,o.messageBus.addListener(o.discoveryURL,function(e){o.discoveryManager(e).then(function(t){
//FLOW-OUT: message response
o.messageBus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,value:t}})}).catch(function(t){var r=void 0,n=void 0;"GraphConnector"===t?(r="This search is not available at the moment. Try later.",n=500):(r="Not Found",n=404),
//FLOW-OUT: error message response
o.messageBus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:n,description:r}})})})}/**
   * Returns the MessageBus.
   */
return(0,u.default)(CoreDiscovery,[{key:"discoveryManager",/* function to decide what discovery method to call and later return the response msg  */
value:function(e){var t=this,r=((0,l.divideURL)(e.from).domain,e.body.resource.split("/").filter(Boolean)),n=[],o=[];switch(d.log("[CoreDiscovery.discoveryManager] received: ",e),e.body.criteria&&(e.body.criteria.resources&&(n=e.body.criteria.resources),e.body.criteria.dataSchemes&&(o=e.body.criteria.dataSchemes)),r[1]){case"user":return"hyperty"==r[0]?t.discoverHyperties(e.body.resource.split("user/")[1],o,n,e.body.criteria.domain):t.discoverDataObjects(e.body.resource.split("user/")[1],o,n,e.body.criteria.domain);case"url":return"hyperty"==r[0]?t.discoverHypertyPerURL(e.body.resource.split("url/")[1],e.body.criteria.domain):t.discoverDataObjectPerURL(e.body.resource.split("url/")[1],e.body.criteria.domain);case"name":return t.discoverDataObjectsPerName(e.body.resource.split("name/")[1],o,n,e.body.criteria.domain);case"reporter":return t.discoverDataObjectsPerReporter(e.body.resource.split("reporter/")[1],o,n,e.body.criteria.domain);case"guid":return void 0!==t.graphConnector&&null!==t.graphConnector?"hyperty"==r[0]?t.discoverHypertiesPerGUID(e.body.resource.split("user-guid://")[1],o,n):t.discoverDataObjectsPerGUID(e.body.resource.split("user-guid://")[1],o,n):i.default.reject("GraphConnector");case"userprofile":return void 0!==t.graphConnector&&null!==t.graphConnector?"hyperty"==r[0]?t.discoverHypertiesPerUserProfileData(e.body.resource.split("userprofile/")[1],o,n):t.discoverDataObjectsPerUserProfileData(e.body.resource.split("userprofile/")[1],o,n):i.default.reject("GraphConnector")}}},{key:"discoverHypertiesPerUserProfileData",value:function(e,t,r){var n=this;return new i.default(function(o,s){
//translate user identifier (e.g. email, name...) into the associated GUIDs
n.discoverGUIDPerUserIdentifier(e).then(function(e){var a=e.map(function(e){return new i.default(function(i,o){n.discoverHypertiesPerGUID(e,t,r).then(function(e){i(e)}).catch(function(e){i([])})})});i.default.all(a).then(function(e){var t=[].concat.apply([],e);if(0===t.length)return s("No hyperties were found");o(t)})}).catch(function(e){return s(e)})})}},{key:"discoverDataObjectsPerUserProfileData",value:function(e,t,r){var n=this;return new i.default(function(o,s){
//translate user identifier (e.g. email, name...) into the associated GUIDs
n.discoverGUIDPerUserIdentifier(e).then(function(e){var a=e.map(function(e){return new i.default(function(i,o){n.discoverDataObjectsPerGUID(e,t,r).then(function(e){i(e)}).catch(function(e){i([])})})});i.default.all(a).then(function(e){var t=[].concat.apply([],e);if(0===t.length)return s("No dataObjects were found");o(t)})}).catch(function(e){return s(e)})})}},{key:"discoverHypertiesPerGUID",value:function(e,t,r){var n=this;return new i.default(function(o,s){
//translate GUID into the user IDs to query the domain registry
n.discoverUserIdsPerGUID(e).then(function(e){
//translate user IDs into the associated hyperties registered in some domain
var a=e.map(function(e){return new i.default(function(i,o){n.discoverHyperties(e.uID,t,r,e.domain).then(function(e){i(e)}).catch(function(e){i([])})})});i.default.all(a).then(function(e){var t=[].concat.apply([],e);if(0===t.length)return s("No hyperties were found");
// log.log('Hyperties : ', hyperties);
o(t)})}).catch(function(e){return s(e)})})}},{key:"discoverDataObjectsPerGUID",value:function(e,t,r){var n=this;return new i.default(function(o,s){
//translate GUID into the user IDs to query the domain registry
n.discoverUserIdsPerGUID(e).then(function(e){
//translate user IDs into the associated dataObjects registered in some domain
var a=e.map(function(e){return new i.default(function(i,o){n.discoverDataObjects(e.uID,t,r,e.domain).then(function(e){i(e)}).catch(function(e){i([])})})});i.default.all(a).then(function(e){var t=[].concat.apply([],e);if(0===t.length)return s("No dataObjects were found");
// log.log('DataObjects : ', dataObjects);
o(t)})}).catch(function(e){return s(e)})})}},{key:"discoverHyperties",value:function(e,t,r,n){var o=this,s=void 0;s=n||o.domain;var a={type:"read",from:o.discoveryURL,to:"domain://registry."+s,body:{}};return e.indexOf("user://")>-1?a.body.resource=e:a.body.resource="/hyperty/idp-identifier/"+e,t.length>0&&(a.body.criteria||(a.body.criteria={}),a.body.criteria.dataSchemes=t),r.length>0&&(a.body.criteria||(a.body.criteria={}),a.body.criteria.resources=r),new i.default(function(e,t){
// log.log("[CoreDiscovery.discoverHyperties] sending msg ", msg);
o.messageBus.postMessage(a,function(r){
// log.log("[CoreDiscovery.discoverHyperties] rcved reply ", reply);
if(200!==r.body.code&&500!==r.body.code)return t("No Hyperty was found");var n=r.body.value,i=[];for(var o in n)i.push(n[o]);if(!(i.length>0))return t("No Hyperty was found");
// log.log("[CoreDiscovery.discoverHyperties] Hyperties Found: ", finalHyperties);
e(i)})})}},{key:"discoverDataObjects",value:function(e,t,r,n){var o=this,s=void 0,a=[];return s=n||o.domain,new i.default(function(n,u){
//translate user identifier (e.g. email, name...) into the associated hyperties
o.discoverHyperties(e,[],[],s).then(function(e){var c=[];for(var f in e)c.push(e[f]);//translate hyperties URLs into the associated dataObjects registered in some domain
var l=c.map(function(e){return new i.default(function(n,i){o.discoverDataObjectsPerReporter(e.hypertyID,t,r,s).then(function(e){n(e)}).catch(function(e){n([])})})});i.default.all(l).then(function(e){[].concat.apply([],e).forEach(function(e){a.push(e)});var t=[];for(var r in a)t.push(a[r]);if(0===t.length)return u("No dataObjects were found");
// log.log('DataObjects Found: ', finalDataObjects);
n(t)})}).catch(function(e){return u(e)})})}},{key:"discoverHypertyPerURL",value:function(e,t){var r=this,n=void 0;n=t||r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n,body:{resource:e}};return new i.default(function(e,t){r.messageBus.postMessage(o,function(r){if(200!==r.body.code&&500!==r.body.code)return t("No Hyperty was found");var n=r.body.value;if(!n)return t("No Hyperty was found");
// log.log('Hyperty found: ', hyperty);
e(n)})})}},{key:"discoverDataObjectPerURL",value:function(e,t){var r=this,n=void 0;n=t||r.domain;var o={type:"read",from:r.discoveryURL,to:"domain://registry."+n,body:{resource:e}};return new i.default(function(e,t){r.messageBus.postMessage(o,function(r){var n=r.body.value;if(!n)return t("DataObject not found");
// log.log('DataObject found: ', dataObject);
e(n)})})}},{key:"discoverDataObjectsPerName",value:function(e,t,r,n){var o=this,s=void 0;s=n||o.domain;var a={type:"read",from:o.discoveryURL,to:"domain://registry."+s,body:{resource:e}};return t.length>0&&(a.body.criteria||(a.body.criteria={}),a.body.criteria.dataSchemes=t),r.length>0&&(a.body.criteria||(a.body.criteria={}),a.body.criteria.resources=r),new i.default(function(e,t){o.messageBus.postMessage(a,function(r){var n=r.body.value,i=[];for(var o in n)i.push(n[o]);if(!(i.length>0))return t("No DataObject was found");
// log.log("DataObjects Found: ", finalDataObjects);
e(i)})})}},{key:"discoverDataObjectsPerReporter",value:function(e,t,r,n){var o=this,s=void 0;s=n||o.domain;var a={type:"read",from:o.discoveryURL,to:"domain://registry."+s,body:{resource:"/comm",criteria:{reporter:e}}};return t.length>0&&(a.body.criteria.dataSchemes=t),r.length>0&&(a.body.criteria.resources=r),new i.default(function(e,t){o.messageBus.postMessage(a,function(r){var n=r.body.value,i=[];for(var o in n)i.push(n[o]);if(!(i.length>0))return t("No DataObject was found");
// log.log("DataObjects Found: ", finalDataObjects);
e(i)})})}},{key:"discoverUserIdsPerGUID",value:function(e){var t=this;return new i.default(function(r,n){
// log.log("GO graphConnector:", guid);
t.graphConnector.queryGlobalRegistry(e).then(function(e){
// log.log('Information returned from Global Registry: ', graphConnectorContactData);
if("string"==typeof e||!e)return n("Unsuccessful discover userIDs by GUID");var t=e.userIDs;if(0===t.length)return n("UserIDs not available");r(t)}).catch(function(e){return n(e)})})}},{key:"discoverGUIDPerUserIdentifier",value:function(e){var t=this;return new i.default(function(r,n){t.httpRequest.get("https://rethink.tlabscloud.com/discovery/rest/discover/lookup?searchquery="+e).then(function(e){
// log.log('discover GUID by user identifier', json);
var t=JSON.parse(e),i=t.results.filter(function(e){return void 0!=e.rethinkID});if(0===i.length)return n("Unsuccessful discover GUID by user identifier");var o=i.map(function(e){return e.rethinkID});return r(o)}).catch(function(e){
// log.log("HTTP Request error: ", err);
return n(e)})})}},{key:"messageBus",get:function(){return this._messageBus},set:function(e){this._messageBus=e}}]),CoreDiscovery}();t.default=p,e.exports=t.default},/* 500 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(210),i=_interopRequireDefault(n),o=r(37),s=_interopRequireDefault(o),a=r(9),u=_interopRequireDefault(a),c=r(79),f=_interopRequireDefault(c),l=r(98),d=_interopRequireDefault(l),p=r(1),y=_interopRequireDefault(p),h=r(2),v=_interopRequireDefault(h),g=r(7),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(g),m=r(14),_=b.getLogger("DataObjectsStorage"),R=function(){function DataObjectsStorage(e,t){if((0,y.default)(this,DataObjectsStorage),!e)throw new Error("[Store Data Objects] - Needs the storageManager component");this._storageManager=e,this._storeDataObject=t,this._cache={}}/**
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
return t.hasOwnProperty(r)||(t[r]={}),t[r].hasOwnProperty(e.url)||(t[r][e.url]={},t[r][e.url].subscriptions=[],t[r][e.url].subscriberUsers=[],t[r][e.url].childrenObjects={},t[r][e.url].data={}),(0,d.default)(t[r][e.url],e),delete t[r][e.url].subscriberUser,delete t[r][e.url].subscriberHyperty,e.subscriberHyperty&&!e.isReporter&&this._updateToArray(t[r],e.url,"subscriptions",e.subscriberHyperty),e.subscriberUser&&t[r][e.url].subscriberUsers.indexOf(e.subscriberUser)&&this._updateToArray(t[r],e.url,"subscriberUsers",e.subscriberUser),this._storeDataObject=t,this._storageManager.set("syncherManager:ObjectURLs",1,t),t[r][e.url]}},{key:"saveData",value:function(e,t,r,n){var i=this._storeDataObject,o=this._getTypeOfObject(e);if(!i||!i[o]||!i[o][t])return void _.log("[StoreDataObjects - save data] - not saved");if(_.log("[StoreDataObjects - saveData] - ",e,o,t,r,n),i[o][t].hasOwnProperty("data")||(i[o][t].data={}),r){var s=void 0;s="object"===(void 0===n?"undefined":(0,f.default)(n))?(0,m.deepClone)(n):n,(0,m.assign)(i[o][t].data,r,s)}else i[o][t].data=(0,m.deepClone)(n)||{};return this._storeDataObject=i,this._storageManager.set("syncherManager:ObjectURLs",1,i),i[o][t]}},{key:"saveChildrens",value:function(e,t,r,n){var i=this._storeDataObject,o=this._getTypeOfObject(e);return i&&i[o]&&i[o][t]?(i[o][t].hasOwnProperty("childrens")||(i[o][t].childrenObjects={}),r?(0,m.assign)(i[o][t].childrenObjects,r,(0,m.deepClone)(n)):i[o][t].childrenObjects=(0,m.deepClone)(n)||{},this._storeDataObject=i,this._storageManager.set("syncherManager:ObjectURLs",1,i),i[o][t]):void _.log("[StoreDataObjects - save childrens] - not saved")}},{key:"update",value:function(e,t,r,n){var i=this._storeDataObject,o=this._getTypeOfObject(e);if(!i||!i[o]||!i[o][t])return void _.log("[StoreDataObjects - update] - not saved");if(_.log("[StoreDataObjects - update] - ",e,o,t,r,n),i[o]&&i[o][t]&&t&&r&&n){if("subscriptions"===r||"subscriberUsers"===r){var s=!0;"subscriptions"===r&&(s=!this._isOwner(i[o][t],n)),s&&this._updateToArray(i[o],t,r,n)}else i[o][t][r]=n;return this._storeDataObject=i,this._storageManager.set("syncherManager:ObjectURLs",1,i),i[o][t]}}},{key:"delete",value:function(e,t,r,n){var i=this._storeDataObject,o=this._getTypeOfObject(e);return i&&i[o]&&i[o][t]?i[o]&&i[o][t]&&t&&r&&n?("subscriptions"===r||"subscriberUsers"===r?this._removeFromArray(i[o],t,r,n):delete i[o][t][r],this._storeDataObject=i,this._storageManager.set("syncherManager:ObjectURLs",1,i),i[o][t]):void 0:void _.log("[StoreDataObjects - delete] - not saved")}},{key:"deleteResource",value:function(e){var t=this;return new u.default(function(r,n){if(e)return t.getAll().then(function(n){var i=(0,d.default)(n,t._storeDataObject||{});return i.hasOwnProperty("observers")&&i.observers.hasOwnProperty(e)?(delete i.observers[e],t._storageManager.set("syncherManager:ObjectURLs",1,i),t._storeDataObject=i,r(i.observers[e])):i.hasOwnProperty("reporters")&&i.reporters.hasOwnProperty(e)?(delete i.reporters[e],t._storageManager.set("syncherManager:ObjectURLs",1,i),t._storeDataObject=i,r(i.reporters[e])):void r("The "+e+" dosen\t exists, nothing was deleted")});n(new Error("[StoreDataObjects] - Can't delete this "+e))})}},{key:"getAll",value:function(){return this._storageManager.get("syncherManager:ObjectURLs")}},{key:"getDataObject",value:function(e){var t=this;return new u.default(function(r,n){t._storageManager.get("syncherManager:ObjectURLs").then(function(t){var i=t.hasOwnProperty("observers")?t.observers:{},o=t.hasOwnProperty("reporters")?t.reporters:{},a=(0,s.default)(o).find(function(t){return t===e}),u=(0,s.default)(i).find(function(t){return t===e}),c=void 0;return u&&(c=t.observers[u]),a&&(c=t.reporters[a]),_.info("[StoreDataObjects - getDataObject] - for observer: ",u),_.info("[StoreDataObjects - getDataObject] - for reporters: ",a),_.info("[StoreDataObjects - getDataObject] - resolve: ",c),c?r(c):n("No dataObject was found")})})}},{key:"getResourcesByCriteria",value:function(e,t){var r=this;return new u.default(function(n){var i=r._getTypeOfObject(t);r.getAll().then(function(t){if(!t)return _.log("[DataObjectsStorage.getResourcesByCriteria] don't have stored data objects"),n(null);if(e.body&&e.body.hasOwnProperty("resume")&&!e.body.resume)return n(null);
// check if the message have other criteria
// if not search for on the 'from' of the message.
var o=[],a=r._hasSubscription(t[i],e.from),u=r._searchOwner(t[i],e.from),c=r._checkProtostubResume(t,e);if(_.log("[StoredDataObjects - getResourcesByCriteria]:",t,e,a,u),!(e.hasOwnProperty("from")&&a||u||c))return n(null);var f=void 0;f=u?r._getResourcesByOwner(t[i],e.from):r._getResourcesBySubscription(t[i],e.from);var l=[];e.body&&e.body.identity&&(l=r._getResourcesByIdentity(t[i],e.body.identity));
//TODO: remove schema since metadata already includes the schema?
var d=[];e.body&&e.body.schema&&(d=r._getResourcesBySchema(t[i],e.body.schema));var p=[];if(e.body&&e.body.value){var y=e.body.value;delete y.data,p=r._getResourcesByMetadata(t[i],y)}var h=[];if(e.body&&e.body.value&&e.body.value.data&&(h=r._getResourcesByData(t[i],e.body.value.data)),
// you can pass as arrays as you want.. it will be merged in on place
// removed duplicates;
o=r._intersection(f,l,d,h,p),0==o.length&&c&&"observers"==i&&e.from.split("protostub").length>0){var v=t[i],g=(0,m.divideURL)(e.from).domain;(0,s.default)(v).filter(function(e){var t=v[e].subscriptions;t.forEach(function(t){(0,m.divideURL)(t).domain==g&&o.push(e)})})}var b={};o.forEach(function(e){var r=t[i][e];return b[e]=r,b}),_.log("[Store Data Objects] - ",b),n(b)})})}},{key:"_getResourcesByIdentity",value:function(e,t){return e?(0,s.default)(e).filter(function(r){return e[r].subscriberUsers.filter(function(e){return e===t}).length}):[]}},{key:"_getResourcesByOwner",value:function(e,t){return e?(0,s.default)(e).filter(function(r){return e[r].reporter===t}):[]}},{key:"_getResourcesBySubscription",value:function(e,t){return e?(0,s.default)(e).filter(function(r){return e[r].subscriptions.filter(function(e){return e===t}).length}):[]}},{key:"_getResourcesBySchema",value:function(e,t){return(0,s.default)(e).filter(function(r){var n=e[r];return(0,s.default)(n).filter(function(e){return"schema"===e&&n[e]===t}).length})}},{key:"_getResourcesByMetadata",value:function(e,t){return t?(0,s.default)(e).filter(function(r){var n=e[r];return(0,s.default)(n).filter(function(e){
// search on storeDataObjects for specific key provided from data;
return(0,s.default)(t).filter(function(r){return e===r&&n[e]===t[r]}).length}).length}):[]}},{key:"_getResourcesByData",value:function(e,t){return t?(0,s.default)(e).filter(function(r){var n=e[r].hasOwnProperty("data")?e[r].data:{};return(0,s.default)(n).filter(function(e){
// search on storeDataObjects for specific key provided from data;
return(0,s.default)(t).filter(function(r){return e===r&&n[e]===t[r]}).length}).length}):[]}},{key:"_hasSubscription",value:function(e,t){return!!e&&(0,s.default)(e).filter(function(r){return e[r].subscriptions.filter(function(e){return e===t}).length}).length>0}},{key:"_searchOwner",value:function(e,t){return!!e&&(0,s.default)(e).filter(function(r){return e[r].reporter===t}).length>0}},{key:"_checkProtostubResume",value:function(e,t){if(!e)return!1;if(t.hasOwnProperty("body")&&t.body.hasOwnProperty("value")&&t.body.value.hasOwnProperty("reporter")){var r=t.body.value.reporter;if(e.hasOwnProperty("reporters")){var n=e.reporters;return(0,s.default)(n).filter(function(e){return n[e].reporter===r}).length>0}return!1}if(e.hasOwnProperty("observers")){var i=e.observers,o=(0,m.divideURL)(t.from).domain;return(0,s.default)(i).filter(function(e){var t=i[e].subscriptions,r=!1;if(t.forEach(function(e){(0,m.divideURL)(e).domain==o&&(r=!0)}),r)return!0}).length>0}}},{key:"_isOwner",value:function(e,t){return!!e&&e.reporter===t}},{key:"_intersection",value:function(){var e=(0,i.default)(arguments),t=e.reduce(function(e,t){return e.concat(t)}).filter(function(e,t,r){return r.indexOf(e)===t});return _.log("DataObjectsStorage._intersection] Result an unique array of strings: ",t),t}},{key:"_updateToArray",value:function(e,t,r,n){_.log("[DataObjectsStorage] - _updateToArray: ",e,t,r,n),-1===e[t][r].indexOf(n)&&e[t][r].push(n)}},{key:"_removeFromArray",value:function(e,t,r,n){var i=e[t][r].indexOf(n);-1===i&&e[t][r].splice(i,1)}},{key:"_hasValue",value:function(e,t,r){return e.hasOwnProperty(t)&&e[t]===r}},{key:"_getTypeOfObject",value:function(e){return e?"reporters":"observers"}}]),DataObjectsStorage}();t.default=R,e.exports=t.default},/* 501 */
/***/
function(e,t,r){r(128),r(502),e.exports=r(10).Array.from},/* 502 */
/***/
function(e,t,r){"use strict";var n=r(65),i=r(21),o=r(77),s=r(192),a=r(193),u=r(134),c=r(503),f=r(194);i(i.S+i.F*!r(199)(function(e){Array.from(e)}),"Array",{
// 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
from:function(e){var t,r,i,l,d=o(e),p="function"==typeof this?this:Array,y=arguments.length,h=y>1?arguments[1]:void 0,v=void 0!==h,g=0,b=f(d);
// if object isn't iterable or it's array with default iterator - use simple case
if(v&&(h=n(h,y>2?arguments[2]:void 0,2)),void 0==b||p==Array&&a(b))for(t=u(d.length),r=new p(t);t>g;g++)c(r,g,v?h(d[g],g):d[g]);else for(l=b.call(d),r=new p;!(i=l.next()).done;g++)c(r,g,v?s(l,h,[i.value,g],!0):i.value);return r.length=g,r}})},/* 503 */
/***/
function(e,t,r){"use strict";var n=r(40),i=r(74);e.exports=function(e,t,r){t in e?n.f(e,t,i(0,r)):e[t]=r}},/* 504 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(37),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(1),u=_interopRequireDefault(a),c=r(2),f=_interopRequireDefault(c),l=r(7),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=r(14),y=r(505),h=_interopRequireDefault(y),v=d.getLogger("HypertyResourcesStorage"),g=function(){function HypertyResourcesStorage(e,t,r,n){if((0,u.default)(this,HypertyResourcesStorage),!r)throw new Error("[HypertyResourcesStorage constructor] mandatory storageManager parameter missing");if(!e)throw new Error("[HypertyResourcesStorage constructor] mandatory runtimeURL parameter missing");if(!t)throw new Error("[HypertyResourcesStorage constructor] mandatory bus parameter missing");var i=this;i._bus=t,i._storageLimit=.9,// the save storageLimit;
i._url=e+"/storage",i._storageManager=r,i.promiseQueue=new h.default,i._hypertyResources=n,t.addListener(i._url,function(e){switch(v.info("[HypertyResourcesStorage] Message RCV: ",e),e.type){case"create":i._onCreate(e);break;case"read":i._onRead(e);break;case"delete":i._onDelete(e)}})}/**
   * check the available storage quota
   *
   * @memberof HypertyResourcesStorage
   */
return(0,f.default)(HypertyResourcesStorage,[{key:"checkStorageQuota",value:function(){var e=this;return new s.default(function(t,r){if(e._availableQuota&&e._usage)return t((0,p.availableSpace)(e._usage,e._availableQuota));navigator&&navigator.storage.estimate().then(function(r){e._availableQuota=r.quota,e._usage=r.usage,t((0,p.availableSpace)(e._usage,e._availableQuota))}).catch(function(e){v.error("[HypertyResourcesStorage] CheckStorageQuota error: ",e),r(e)})})}},{key:"_onCreate",value:function(e){var t=this;if(!e.body||!e.body.value)throw new Error("[HypertyResourcesStorage._onCreate] mandatory message body value missing: ",e);var r=e.body.value,n=r.contentURL,i="";if(n){var o=n[0],s=o.substr(o.lastIndexOf("/")+1);i=t._url+"/"+s}else n=[],i=t._url+"/"+(0,p.generateGUID)();t._hypertyResources.hasOwnProperty(i)||(n.push(i),r.contentURL=n),this._hypertyResources[i]=r,this.promiseQueue.add(this._toSave(i,e,r))}},{key:"_toSave",value:function(e,t,r){var n=this;return new s.default(function(i,o){var s=function(r){var i={from:t.to,to:t.from,id:t.id,type:"response",body:{value:e,code:500,description:r}};return n._bus.postMessage(i),o(r)};n.checkStorageQuota().then(function(e){if(r.size>e.quota){var t="The storage do not have space to store that resource";throw s(t),Error(t)}var i=e.quota,o=e.usage+r.size;return!(e.percent>=n._storageLimit||o>i)||n._getOlderResources(r.size)}).then(function(){return n._storageManager.set(e,1,r)}).then(function(){var r={from:t.to,to:t.from,id:t.id,type:"response",body:{value:e,code:200}};return n._bus.postMessage(r),v.log("Success"),i()}).catch(s)})}},{key:"_getOlderResources",value:function(e){var t=this;return new s.default(function(r,n){t._storageManager.get().then(function(o){var a=(0,i.default)(o),u=0,c=a.sort(function(e,t){return o[e].created<o[t].created}).reduce(function(r,n){var i=t._hypertyResources[n];return v.log("[HypertyResourcesStorage] _getOlderResources: ",u,e,n,t._availableQuota),u<=e&&(u+=i.size,r.push(n)),r},[]),f=c.map(function(e){return t._storageManager.delete(e)});s.default.all(f).then(function(){r(!0)}).catch(function(e){n(e)})})})}},{key:"_onRead",value:function(e){var t=this;if(!e.body||!e.body.resource)throw new Error("[HypertyResourcesStorage._onRead] mandatory message body resource missing: ",e);var r=e.body.resource,n={from:e.to,to:e.from,id:e.id,type:"response",body:{}};
// let content = _this._hypertyResources[contentUrl];
v.info("[HypertyResourcesStorage._onRead] get resourceURL:",r),this._storageManager.get("resourceURL",r).then(function(e){v.info("[HypertyResourcesStorage._onRead] found content:",e),e?"file"===e.resourceType?t._onReadFile(n,e):(n.body.code=200,n.body.p2p=!0,n.body.value=e,t._bus.postMessage(n)):(n.body.code=404,n.body.desc="Content Not Found for "+r,t._bus.postMessage(n))})}},{key:"_onReadFile",value:function(e,t){var r=this,n=new FileReader;if(n.onload=function(n){v.info("[FileHypertyResource.init] file loaded ",n),e.body.code=200,e.body.p2p=!0,e.body.value=(0,p.deepClone)(t),e.body.value.content=n.target.result,r._bus.postMessage(e)},t.mimetype.includes("text/"))n.readAsText(t.content);else{var i=t.content,o=void 0;o=Array.isArray(i)?new Blob(i,{type:t.mimetype}):new Blob([i],{type:t.mimetype}),n.readAsArrayBuffer(o)}}},{key:"_onDelete",value:function(e){var t=this;if(!e.body)throw new Error("[HypertyResourcesStorage._onDelete] mandatory message body missing: ",e);if(e.body.resource)delete t._hypertyResources[e.body.resource];else{if(!e.body.resources)throw new Error("[HypertyResourcesStorage._onDelete] mandatory resource missing: ",e);e.body.resources.forEach(function(e){delete t._hypertyResources[e]})}t._storageManager.delete("resourceURL",e.body.resource).then(function(){var r={from:e.to,to:e.from,id:e.id,type:"response",body:{code:200}};t._bus.postMessage(r)}).catch(function(r){var n={from:e.to,to:e.from,id:e.id,type:"response",body:{code:400,description:r}};t._bus.postMessage(n)})}}]),HypertyResourcesStorage}();t.default=g,e.exports=t.default},/* 505 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(506),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(1),u=_interopRequireDefault(a),c=r(2),f=_interopRequireDefault(c),l=function(){
// TODO: Improve this Queuing
function PromiseQueue(e){(0,u.default)(this,PromiseQueue),this.flushing=!1,this.Promise=s.default,this.concurrency="number"!=typeof e?1:e,this.promises=[],this.queue=[],this.isProcessing=!1}return(0,f.default)(PromiseQueue,[{key:"done",value:function(e){this.callback=e}},{key:"add",value:function(e){var t=this;if(this.queue.push(e),!this.isProcessing)return this.queue.reduce(function(e,t){return e.then(function(e){return t.then(function(t){return[].concat((0,i.default)(e),[t])})})},s.default.resolve([])).then(function(e){
// Do something with all results
t.isProcessing=!1})}}]),PromiseQueue}();t.default=l,e.exports=t.default},/* 506 */
/***/
function(e,t,r){"use strict";t.__esModule=!0;var n=r(210),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return(0,i.default)(e)}},/* 507 */
/***/
function(e,t,r){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(211),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(37),u=_interopRequireDefault(a),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(7),y=_interopRequireWildcard(p),h=r(14),v=r(511),g=r(100),b=_interopRequireDefault(g),m=r(516),_=_interopRequireDefault(m),R=r(517),w=_interopRequireDefault(R),S=r(101),P=_interopRequireWildcard(S),O=y.getLogger("SyncherManager"),M=function(){/* private
  _url: URL
  _bus: MiniBus
  _registry: Registry
  _allocator: AddressAllocation
   _reporters: { ObjectURL: ReporterObject }
  _observers: { ObjectURL: ObserverObject }
  */
function SyncherManager(e,t,r,n,i,o,s,a){if((0,f.default)(this,SyncherManager),!e)throw new Error("[Syncher Manager] - needs the runtimeURL parameter");if(!t)throw new Error("[Syncher Manager] - needs the MessageBus instance");if(!r)throw new Error("[Syncher Manager] - needs the Registry instance");if(!n)throw new Error("[Syncher Manager] - needs the RuntimeCatalogue instance");if(!i)throw new Error("[Syncher Manager] - need the storageManager instance");var u=this;u._bus=t,u._registry=r,u._catalog=n,u._storageManager=i,u._identityModule=a,
//TODO: these should be saved in persistence engine?
u.runtimeURL=e,u._url=e+"/sm",u._objectURL=e+"/object-allocation",u._reporters={},u._observers={},u._dataObjectsStorage=s,
//TODO: this should not be hardcoded!
u._domain=(0,h.divideURL)(e).domain,u._allocator=o||b.default.instance,O.log("[SyncherManager - AddressAllocation] - ",u._allocator),t.addListener(u._url,function(e){switch(O.info("[SyncherManager] RCV: ",e),e.type){case"create":u._onCreate(e);break;case"delete":u._onDelete(e);break;case"subscribe":u._onLocalSubscribe(e);break;case"unsubscribe":u._onLocalUnSubscribe(e)}})}return(0,d.default)(SyncherManager,[{key:"_onCreate",
//FLOW-IN: message received from Syncher -> create
value:function(e){var t=this,r=e.from,n=e.to;
// check if message is to save new childrenObjects in the local storage
// TODO: check if message is to store new child in the local storage and call storeChild. How to distinguish from others?
//debugger;
e.body.attribute?this._storeChildrens(e):!e.body.hasOwnProperty("resume")||e.body.hasOwnProperty("resume")&&!e.body.resume?
// check if this is an invitation message
e.body.authorise?(this._authorise(e),O.info("[SyncherManager.onCreate - invite observers]",e)):(
// this is to create a new data object
O.info("[SyncherManager.onCreate - Create New Object]",e),this._newCreate(e)):
// If from the hyperty side, call the resumeReporter we will have resume = true'
// so we will create an resumed object and will try to resume the object previously saved;
this._dataObjectsStorage.getResourcesByCriteria(e,!0).then(function(o){if(O.info("[SyncherManager - Create Resumed] - ResourcesByCriteria | Message: ",e," result: ",o),o&&(0,u.default)(o).length>0){var a=[];(0,u.default)(o).forEach(function(r){a.push(t._resumeCreate(e,o[r]))}),s.default.all(a).then(function(o){O.log("[SyncherManager - Create Resumed]",o);
// TODO: shoud send the information if some object was fail;
var s=(0,i.default)(o).filter(function(e){return!1!==e});O.info("[SyncherManager.onCreate] returning resumed objects : ",s),
//FLOW-OUT: message response to Syncher -> create resume
t._bus.postMessage({id:e.id,type:"response",from:n,to:r,body:{code:200,value:s}})})}else{
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
r._catalog.getDataSchemaDescriptor(e.body.schema).then(function(o){var s=o.sourcePackage.sourceCode.properties,a=s.scheme?s.scheme.constant:"resource",u=s.children?s.children.constant:[];
// Do schema validation
// TODO: check if is need to handle with the result of validation
(0,v.schemaValidation)(a,o,e.body.value);var c={name:e.body.value.name,schema:e.body.value.schema,reporter:e.body.value.reporter,resources:e.body.value.resources},f=e.body.value.resource;
//debugger;
//request address allocation of a new object from the msg-node
//_this._allocator.create(domain, numOfAddress, objectInfo, scheme, reuseDataObject).then((allocated) => {
r._allocator.create(i,1,c,a,f).then(function(i){var o=(0,h.deepClone)(e.body.value);o.url=i.address[0],o.authorise=e.body.authorise,o.childrens=u,
//objectRegistration.expires = 30;//TODO: get it from data object configuration description when present
delete o.data,O.log("[SyncherManager._newCreate] ALLOCATOR CREATE:",i);var s=o.url+"/subscription";O.log("[SyncherManager._newCreate] Subscription URL",s),
//To register the dataObject in the runtimeRegistry
O.info("[SyncherManager._newCreate] Register Object: ",o),
//_this._registry.registerDataObject(msg.body.value.name, msg.body.value.schema, objURL, msg.body.value.reporter, msg.body.value.resources, allocated, msg.body.authorise).then((resolve) => {
r._registry.registerDataObject(o).then(function(i){O.log("[SyncherManager._newCreate] DataObject successfully registered",i);
//all OK -> create reporter and register listeners
var a=void 0;a=t._reporters[o.url]?t._reporters[o.url]:new _.default(r,n,o.url),O.log("[SyncherManager - new Create] - ",e);
// Store for each reporter hyperty the dataObject
var c=void 0;
// let interworking = false;
c=e.body.hasOwnProperty("identity")&&e.body.identity.userProfile&&e.body.identity.userProfile.userURL?e.body.identity.userProfile.userURL:r._registry.getHypertyOwner(e.from);
// should we use the msg.body.value instead?
var f=(0,h.deepClone)(o);f.subscriberUser=c,f.isReporter=!0,
// Store the dataObject information
//if (!interworking) {
r._dataObjectsStorage.set(f),e.body.hasOwnProperty("store")&&e.body.store&&(a.isToSaveData=!0,r._dataObjectsStorage.update(!0,o.url,"isToSaveData",!0),e.body.value.data&&r._dataObjectsStorage.saveData(!0,o.url,null,e.body.value.data)),
//}
// adding listeners to forward to reporter
a.forwardSubscribe([o.url,s]).then(function(){a.addChildrens(u).then(function(){r._reporters[o.url]=a;var t={id:e.id,type:"response",from:e.to,to:n,body:{code:200,resource:o.url,childrenResources:u}};
//FLOW-OUT: message response to Syncher -> create
r._bus.postMessage(t)})})},function(e){O.error(e)})})}).catch(function(t){
//FLOW-OUT: error message response to Syncher -> create
var i={id:e.id,type:"response",from:e.to,to:n,body:{code:500,desc:t}};r._bus.postMessage(i)})}},{key:"_resumeCreate",value:function(e,t){var r=this,n=this;return new s.default(function(i){var o=e.from,s=t.schema,a=t.url,u=t.data;O.log("[SyncherManager] - resume create",e,t),
//get schema from catalogue and parse -> (scheme, children)
n._catalog.getDataSchemaDescriptor(s).then(function(s){var c=s.sourcePackage.sourceCode.properties,f=c.scheme?c.scheme.constant:"resource",l=c.children?c.children.constant:[];O.log("[SyncherManager] - getDataSchemaDescriptor: ",s,l),
// Do schema validation
// TODO: check if is need to handle with the result of validation
(0,v.schemaValidation)(f,s,u);var d=(0,h.deepClone)(e.body.value);d.url=t.url,d.expires=t.expires,delete d.data;
//all OK -> create reporter and register listeners
var p=void 0;p=r._reporters[a]?r._reporters[a]:new _.default(n,o,a),p.isToSaveData=t.isToSaveData,p.forwardSubscribe([t.url]).then(function(){p.addChildrens(l).then(function(){return p.resumeSubscriptions(t.subscriptions),n._reporters[a]=p,O.info("[SyncherManager - resume create] - resolved resumed: ",t),n._decryptChildrens(t,l)}).then(function(e){
// log.log('result of previous promise');
i(e)}).catch(function(e){O.error("[SyncherManager - resume create] - fail on addChildrens: ",e),i(!1)})}),O.info("[SyncherManager._resumeCreate] Register Object: ",d),n._registry.registerDataObject(d).then(function(e){O.log("[SyncherManager._resumeCreate] DataObject registration successfully updated",e)})}).catch(function(e){O.error("[SyncherManager - resume create] - fail on getDataSchemaDescriptor: ",e),i(!1)})})}},{key:"_decryptChildrens",value:function(e,t){return new s.default(function(r){if(t){0===(0,u.default)(e.childrenObjects).length&&r(e),t.forEach(function(t){var n=e.childrenObjects[t];O.log("[SyncherManager._decryptChildrens] dataObjectChilds to decrypt ",n);var i=[];(0,u.default)(n).forEach(function(t){var r=n[t],o=t.split("#")[0];if("string"==typeof r.value){O.log("[SyncherManager._decryptChildrens] createdBy ",o," object: ",r.value);var s=P.default.decryptDataObject(JSON.parse(r.value),e.url);i.push(s)}}),s.default.all(i).then(function(n){O.log("[SyncherManager._decryptChildrens] returning decrypted ",n),n.forEach(function(r){var n=r.value.url;e.childrenObjects[t][n].value=r.value}),O.log("[SyncherManager._decryptChildrens] storedObject ",e),r(e)}).catch(function(e){O.warn("[SyncherManager._decryptChildrens] failed : ",e)})})}else r(e)})}},{key:"_authorise",value:function(e){var t=this;if(!e.body.resource)throw new Error("[SyncherManager._authorise] invitation request without data object url:",e);var r=e.body.resource+"/subscription",n=!!e.body.p2p&&e.body.p2p;O.log("[SyncherManager -  authorise] - ",e),e.body.authorise&&e.body.authorise.forEach(function(i){
//FLOW-OUT: send invites to list of remote Syncher -> _onRemoteCreate -> onNotification
t._bus.postMessage({type:"create",from:r,to:i,body:{p2p:n,identity:e.body.identity,source:e.from,value:e.body.value,schema:e.body.schema}},function(r){
// lets forward the invitation response
var n={from:e.to,to:e.from,id:e.id,type:r.type,body:r.body};t._bus.postMessage(n)})})}},{key:"_onDelete",value:function(e){var t=this,r=e.body.resource,n=t._reporters[r];n&&(
//TODO: is there any policy verification before delete?
n.delete(),this._dataObjectsStorage.deleteResource(r).then(function(n){O.log("[SyncherManager - onDelete] - deleteResource: ",n),t._registry.unregisterDataObject(r),
//TODO: unregister object?
t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200}})}))}},{key:"_onLocalSubscribe",value:function(e){var t=this;
//debugger;
this._dataObjectsStorage.getResourcesByCriteria(e,!1).then(function(r){if(O.info("[SyncherManager - Subscribe] - ResourcesByCriteria | Message: ",e," result: ",r),r&&(0,u.default)(r).length>0){var n=[];
// TODO: should reuse the storaged information
(0,u.default)(r).forEach(function(i){O.log("[SyncherManager - resume Subscribe] - reuse current object url: ",r[i]),n.push(t._resumeSubscription(e,r[i]))}),s.default.all(n).then(function(r){O.log("[SyncherManager - Observers Resumed]",r);
// TODO: shoud send the information if some object was fail;
var n=(0,i.default)(r).filter(function(e){return!1!==e});
//FLOW-OUT: message response to Syncher -> create
t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,value:n}})})}else if(e.body.schema&&e.body.resource)O.log("[SyncherManager.onLocalSubscribe - new Subscribe] - ",e.body.schema,e.body.resource),t._newSubscription(e);else{
//forward to hyperty:
var o={};o.id=e.id,o.from=e.to,o.to=e.from,o.type="response",o.body={code:404,desc:"No data objects observers to be resumed"},t._bus.postMessage(o)}})}},{key:"_newSubscription",value:function(e){var t=this,r=this,n=e.body.resource,i=e.from,o=(0,h.divideURL)(n).domain,s=n+"/subscription",a=n+"/children/";
//get schema from catalogue and parse -> (children)
r._catalog.getDataSchemaDescriptor(e.body.schema).then(function(u){var c=u.sourcePackage.sourceCode.properties,f=c.children?c.children.constant:[],l=[];l.push(n+"/changes"),f.forEach(function(e){return l.push(a+e)});
//children addresses
//FLOW-OUT: subscribe message to the msg-node, registering listeners on the broker
var d={type:"subscribe",from:r._url,to:"domain://msg-node."+o+"/sm",body:{identity:e.body.identity,resources:l,source:i}};
//subscribe in msg-node
r._bus.postMessage(d,function(o){if(O.log("node-subscribe-response(observer): ",o),200===o.body.code){
//FLOW-OUT: reply with provisional response
r._bus.postMessage({id:e.id,type:"response",from:e.to,to:i,body:{code:100,childrenResources:f,schema:e.body.schema,resource:e.body.resource}});
//FLOW-OUT: subscribe message to remote ReporterObject -> _onRemoteSubscribe
var a={type:"subscribe",from:r._url,to:s,body:{identity:d.body.identity,subscriber:i}};
//TODO: For Further Study
e.body.hasOwnProperty("mutual")&&(a.body.mutual=e.body.mutual),O.log("[SyncherManager._newSubscription]",a,e),
//subscribe to reporter SM
r._bus.postMessage(a,function(o){if(O.log("reporter-subscribe-response-new: ",o),200===o.body.code){O.log("[SyncherManager._newSubscription] - observers: ",r._observers,n,r._observers[n]);var s=r._observers[n];s||(s=new w.default(r,n,f),O.log("[SyncherManager._newSubscription] - observers: create new ObserverObject: ",s),r._observers[n]=s,
// register new hyperty subscription
s.addSubscription(i),
// add childrens and listeners to save data if necessary
s.addChildrens(f));var a=!1,u=void 0;e.body.hasOwnProperty("identity")&&e.body.identity.userProfile&&e.body.identity.userProfile.userURL?(u=e.body.identity.userProfile.userURL,u.includes("user://")||(a=!0)):(u=r._registry.getHypertyOwner(e.from))||(a=!0);var c=(0,h.deepClone)(o.body.value);
// let childrenObjects = metadata.childrenObjects || {};
delete c.data,delete c.childrenObjects,c.childrens=f,c.subscriberUser=u,c.isReporter=!1,c.subscriberHyperty=i,a||(
//_this._dataObjectsStorage.set(objURL, false, msg.body.schema, 'on', reply.body.owner, hypertyURL, childrens, userURL);
r._dataObjectsStorage.set(c),(c.hasOwnProperty("store")&&c.store||c.hasOwnProperty("isToSaveData")&&c.isToSaveData)&&(s.isToSaveData=!0,r._dataObjectsStorage.update(!1,n,"isToSaveData",!0),r._dataObjectsStorage.saveData(!1,n,null,o.body.value.data))),
//forward to hyperty:
o.id=e.id,o.from=r._url,o.to=i,o.body.schema=e.body.schema,o.body.resource=e.body.resource,
//TODO: For Further Study
e.body.hasOwnProperty("mutual")&&(o.body.mutual=e.body.mutual),O.log("[subscribe] - new subscription: ",e,o,s),t._bus.postMessage(o)}})}else
//listener rejected
r._bus.postMessage({id:e.id,type:"response",from:e.to,to:i,body:o.body})})})}},{key:"_resumeSubscription",value:function(e,t){var r=this;return new s.default(function(n){var i=t.url,o=t.schema,s=e.from,a=i+"/children/";O.log("[SyncherManager - ReuseSubscription] - objURL: ",i," - schema:",o),
//get schema from catalogue and parse -> (children)
// TODO: remove this since children resources should be available in the DataObjectsStorage
r._catalog.getDataSchemaDescriptor(o).then(function(n){var u=n.sourcePackage.sourceCode.properties,c=u.children?u.children.constant:[],f=[];f.push(i+"/changes"),c.forEach(function(e){return f.push(a+e)}),
//FLOW-OUT: reply with provisional response
r._bus.postMessage({id:e.id,type:"response",from:e.to,to:s,body:{code:100,childrenResources:c,schema:o,resource:i}});
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
return l||(l=new w.default(r,i,c),l.isToSaveData=t.isToSaveData,r._observers[i]=l),l.addSubscription(s),l.addChildrens(c),r._decryptChildrens(t,c)}).then(function(e){
// log.log('result of previous promise');
n(e)}).catch(function(e){O.error("[SyncherManager - resume subscription] - fail on getDataSchemaDescriptor: ",e),n(!1)})})}},{key:"_onLocalUnSubscribe",value:function(e){var t=this,r=(e.from,e.body.resource),n=t._observers[r];n&&(
//TODO: is there any policy verification before delete?
n.removeSubscription(e),
//TODO: destroy object in the registry?
t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200}}),this._dataObjectsStorage.deleteResource(r),
//TODO: remove Object if no more subscription?
delete t._observers[r])}},{key:"url",get:function(){return this._url}}]),SyncherManager}();t.default=M,e.exports=t.default},/* 508 */
/***/
function(e,t,r){r(509),e.exports=r(10).Object.values},/* 509 */
/***/
function(e,t,r){
// https://github.com/tc39/proposal-object-values-entries
var n=r(21),i=r(510)(!1);n(n.S,"Object",{values:function(e){return i(e)}})},/* 510 */
/***/
function(e,t,r){var n=r(67),i=r(46),o=r(78).f;e.exports=function(e){return function(t){for(var r,s=i(t),a=n(s),u=a.length,c=0,f=[];u>c;)o.call(s,r=a[c++])&&f.push(e?[r,s[r]]:s[r]);return f}}},/* 511 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function schemaValidation(e,t,r){try{var n=r,i=t.sourcePackage.sourceCode;
// add support for schema referencing itself
o.default.addSchema(i.id,i);
// validate
var s=o.default.validateMultiple(n,i);
// delete error stacks to improve logging
s.errors.forEach(function(e){delete e.stack}),!s.valid||s.missing.length}catch(e){}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(47);_interopRequireDefault(n);t.schemaValidation=schemaValidation;var i=r(512),o=_interopRequireDefault(i)},/* 512 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function notReallyPercentEncode(e){return encodeURI(e).replace(/%25[0-9][0-9]/g,function(e){return"%"+e.substring(3)})}function uriTemplateSubstitution(e){var t="";h[e.charAt(0)]&&(t=e.charAt(0),e=e.substring(1));var r="",n="",i=!0,o=!1,s=!1;"+"===t?i=!1:"."===t?(n=".",r="."):"/"===t?(n="/",r="/"):"#"===t?(n="#",i=!1):";"===t?(n=";",r=";",o=!0,s=!0):"?"===t?(n="?",r="&",o=!0):"&"===t&&(n="&",r="&",o=!0);for(var a=[],u=e.split(","),c=[],f={},l=0;l<u.length;l++){var p=u[l],g=null;if(-1!==p.indexOf(":")){var b=p.split(":");p=b[0],g=parseInt(b[1],10)}for(var m={};v[p.charAt(p.length-1)];)m[p.charAt(p.length-1)]=!0,p=p.substring(0,p.length-1);var _={truncate:g,name:p,suffices:m};c.push(_),f[p]=_,a.push(p)}var R=function(e){for(var t="",a=0,u=0;u<c.length;u++){var f=c[u],l=e(f.name);if(null===l||void 0===l||Array.isArray(l)&&0===l.length||"object"===(void 0===l?"undefined":(0,d.default)(l))&&0===(0,y.default)(l).length)a++;else if(t+=u===a?n:r||",",Array.isArray(l)){o&&(t+=f.name+"=");for(var p=0;p<l.length;p++)p>0&&(t+=f.suffices["*"]?r||",":",",f.suffices["*"]&&o&&(t+=f.name+"=")),t+=i?encodeURIComponent(l[p]).replace(/!/g,"%21"):notReallyPercentEncode(l[p])}else if("object"===(void 0===l?"undefined":(0,d.default)(l))){o&&!f.suffices["*"]&&(t+=f.name+"=");var h=!0;for(var v in l)h||(t+=f.suffices["*"]?r||",":","),h=!1,t+=i?encodeURIComponent(v).replace(/!/g,"%21"):notReallyPercentEncode(v),t+=f.suffices["*"]?"=":",",t+=i?encodeURIComponent(l[v]).replace(/!/g,"%21"):notReallyPercentEncode(l[v])}else o&&(t+=f.name,s&&""===l||(t+="=")),null!=f.truncate&&(l=l.substring(0,f.truncate)),t+=i?encodeURIComponent(l).replace(/!/g,"%21"):notReallyPercentEncode(l)}return t};return R.varNames=a,{prefix:n,substitution:R}}function UriTemplate(e){if(!(this instanceof UriTemplate))return new UriTemplate(e);for(var t=e.split("{"),r=[t.shift()],n=[],i=[],o=[];t.length>0;){var s=t.shift(),a=s.split("}")[0],u=s.substring(a.length+1),c=uriTemplateSubstitution(a);i.push(c.substitution),n.push(c.prefix),r.push(u),o=o.concat(c.substitution.varNames)}this.fill=function(e){for(var t=r[0],n=0;n<i.length;n++){t+=(0,i[n])(e),t+=r[n+1]}return t},this.varNames=o,this.template=e}function recursiveCompare(e,t){if(e===t)return!0;if(e&&t&&"object"===(void 0===e?"undefined":(0,d.default)(e))&&"object"===(void 0===t?"undefined":(0,d.default)(t))){if(Array.isArray(e)!==Array.isArray(t))return!1;if(Array.isArray(e)){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!recursiveCompare(e[r],t[r]))return!1}else{var n;for(n in e)if(void 0===t[n]&&void 0!==e[n])return!1;for(n in t)if(void 0===e[n]&&void 0!==t[n])return!1;for(n in e)if(!recursiveCompare(e[n],t[n]))return!1}return!0}return!1}
// parseURI() and resolveUrl() are from https://gist.github.com/1088850
//   -  released as public domain by author ("Yaffle") - see comments on gist
function parseURI(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
// authority = '//' + user + ':' + pass '@' + hostname + ':' port
return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function resolveUrl(e,t){
// RFC 3986
return t=parseURI(t||""),e=parseURI(e||""),t&&e?(t.protocol||e.protocol)+(t.protocol||t.authority?t.authority:e.authority)+function(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}(t.protocol||t.authority||"/"===t.pathname.charAt(0)?t.pathname:t.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+t.pathname:e.pathname)+(t.protocol||t.authority||t.pathname?t.search:t.search||e.search)+t.hash:null}function getDocumentUri(e){return e.split("#")[0]}function normSchema(e,t){if(e&&"object"===(void 0===e?"undefined":(0,d.default)(e)))if(void 0===t?t=e.id:"string"==typeof e.id&&(t=resolveUrl(t,e.id),e.id=t),Array.isArray(e))for(var r=0;r<e.length;r++)normSchema(e[r],t);else{"string"==typeof e.$ref&&(e.$ref=resolveUrl(t,e.$ref));for(var n in e)"enum"!==n&&normSchema(e[n],t)}}function defaultErrorReporter(e){e=e||"en";var t=P[e];return function(e){var r=t[e.code]||S[e.code];if("string"!=typeof r)return"Unknown error code "+e.code+": "+(0,i.default)(e.messageParams);var n=e.params;
// Adapted from Crockford's supplant()
return r.replace(/\{([^{}]*)\}/g,function(e,t){var r=n[t];return"string"==typeof r||"number"==typeof r?r:e})}}function ValidationError(e,t,r,n,i){if(Error.call(this),void 0===e)throw new Error("No error code supplied: "+n);this.message="",this.params=t,this.code=e,this.dataPath=r||"",this.schemaPath=n||"",this.subErrors=i||null;var o=new Error(this.message);if(this.stack=o.stack||o.stacktrace,!this.stack)try{throw o}catch(o){this.stack=o.stack||o.stacktrace}}function isTrustedUrl(e,t){if(t.substring(0,e.length)===e){var r=t.substring(e.length);if(t.length>0&&"/"===t.charAt(e.length-1)||"#"===r.charAt(0)||"?"===r.charAt(0))return!0}return!1}function createApi(e){var t,r,n=new g,i={setErrorReporter:function(e){return"string"==typeof e?this.language(e):(r=e,!0)},addFormat:function(){n.addFormat.apply(n,arguments)},language:function(e){return e?(P[e]||(e=e.split("-")[0]),!!P[e]&&(t=e,e)):t},addLanguage:function(e,t){var r;for(r in _)t[r]&&!t[_[r]]&&(t[_[r]]=t[r]);var n=e.split("-")[0];if(P[n]){P[e]=(0,f.default)(P[n]);for(r in t)void 0===P[n][r]&&(P[n][r]=t[r]),P[e][r]=t[r]}else
// use for base language if not yet defined
P[e]=t,P[n]=t;return this},freshApi:function(e){var t=createApi();return e&&t.language(e),t},validate:function(e,i,o,s){var a=defaultErrorReporter(t),u=r?function(e,t,n){return r(e,t,n)||a(e,t,n)}:a,c=new g(n,!1,u,o,s);"string"==typeof i&&(i={$ref:i}),c.addSchema("",i);var f=c.validateAll(e,i,null,null,"");return!f&&s&&(f=c.banUnknownProperties(e,i)),this.error=f,this.missing=c.missing,this.valid=null===f,this.valid},validateResult:function(){var e={};return this.validate.apply(e,arguments),e},validateMultiple:function(e,i,o,s){var a=defaultErrorReporter(t),u=r?function(e,t,n){return r(e,t,n)||a(e,t,n)}:a,c=new g(n,!0,u,o,s);"string"==typeof i&&(i={$ref:i}),c.addSchema("",i),c.validateAll(e,i,null,null,""),s&&c.banUnknownProperties(e,i);var f={};return f.errors=c.errors,f.missing=c.missing,f.valid=0===f.errors.length,f},addSchema:function(){return n.addSchema.apply(n,arguments)},getSchema:function(){return n.getSchema.apply(n,arguments)},getSchemaMap:function(){return n.getSchemaMap.apply(n,arguments)},getSchemaUris:function(){return n.getSchemaUris.apply(n,arguments)},getMissingUris:function(){return n.getMissingUris.apply(n,arguments)},dropSchemas:function(){n.dropSchemas.apply(n,arguments)},defineKeyword:function(){n.defineKeyword.apply(n,arguments)},defineError:function(e,t,r){if("string"!=typeof e||!/^[A-Z]+(_[A-Z]+)*$/.test(e))throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if("number"!=typeof t||t%1!=0||t<1e4)throw new Error("Code number must be an integer > 10000");if(void 0!==_[e])throw new Error("Error already defined: "+e+" as "+_[e]);if(void 0!==R[t])throw new Error("Error code already used: "+R[t]+" as "+t);_[e]=t,R[t]=e,S[e]=S[t]=r;for(var n in P){var i=P[n];i[e]&&(i[t]=i[t]||i[e])}},reset:function(){n.reset(),this.error=null,this.missing=[],this.valid=!0},missing:[],error:null,valid:!0,normSchema:normSchema,resolveUrl:resolveUrl,getDocumentUri:getDocumentUri,errorCodes:_};return i.language(e||"en"),i}Object.defineProperty(t,"__esModule",{value:!0});var n=r(47),i=_interopRequireDefault(n),o=r(200),s=_interopRequireDefault(o),a=r(513),u=_interopRequireDefault(a),c=r(203),f=_interopRequireDefault(c),l=r(79),d=_interopRequireDefault(l),p=r(37),y=_interopRequireDefault(p);/*
 Author: Geraint Luff and others
 Year: 2013

 This code is released into the "public domain" by its author(s).  Anybody may use, alter and distribute the code without restriction.  The author makes no guarantees, and takes no liability of any kind for use of this code.

 If you find a bug or make an improvement, it would be courteous to let the author know, but it is not compulsory.
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FObject%2Fkeys
y.default||(Object.keys=function(){var e=Object.prototype.hasOwnProperty,t=!{toString:null}.propertyIsEnumerable("toString"),r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],n=r.length;return function(i){if("object"!==(void 0===i?"undefined":(0,d.default)(i))&&"function"!=typeof i||null===i)throw new TypeError("Object.keys called on non-object");var o=[];for(var s in i)e.call(i,s)&&o.push(s);if(t)for(var a=0;a<n;a++)e.call(i,r[a])&&o.push(r[a]);return o}}()),
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
var h={"+":!0,"#":!0,".":!0,"/":!0,";":!0,"?":!0,"&":!0},v={"*":!0};UriTemplate.prototype={toString:function(){return this.template},fillFromObject:function(e){return this.fill(function(t){return e[t]})}};var g=function(e,t,r,n,i){if(this.missing=[],this.missingMap={},this.formatValidators=e?(0,f.default)(e.formatValidators):{},this.schemas=e?(0,f.default)(e.schemas):{},this.collectMultiple=t,this.errors=[],this.handleError=t?this.collectError:this.returnError,n&&(this.checkRecursive=!0,this.scanned=[],this.scannedFrozen=[],this.scannedFrozenSchemas=[],this.scannedFrozenValidationErrors=[],this.validatedSchemasKey="tv4_validation_id",this.validationErrorsKey="tv4_validation_errors_id"),i&&(this.trackUnknownProperties=!0,this.knownPropertyPaths={},this.unknownPropertyPaths={}),this.errorReporter=r||defaultErrorReporter("en"),"string"==typeof this.errorReporter)throw new Error("debug");if(this.definedKeywords={},e)for(var o in e.definedKeywords)this.definedKeywords[o]=e.definedKeywords[o].slice(0)};g.prototype.defineKeyword=function(e,t){this.definedKeywords[e]=this.definedKeywords[e]||[],this.definedKeywords[e].push(t)},g.prototype.createError=function(e,t,r,n,i,o,s){var a=new ValidationError(e,t,r,n,i);return a.message=this.errorReporter(a,o,s),a},g.prototype.returnError=function(e){return e},g.prototype.collectError=function(e){return e&&this.errors.push(e),null},g.prototype.prefixErrors=function(e,t,r){for(var n=e;n<this.errors.length;n++)this.errors[n]=this.errors[n].prefixWith(t,r);return this},g.prototype.banUnknownProperties=function(e,t){for(var r in this.unknownPropertyPaths){var n=this.createError(_.UNKNOWN_PROPERTY,{path:r},r,"",null,e,t),i=this.handleError(n);if(i)return i}return null},g.prototype.addFormat=function(e,t){if("object"===(void 0===e?"undefined":(0,d.default)(e))){for(var r in e)this.addFormat(r,e[r]);return this}this.formatValidators[e]=t},g.prototype.resolveRefs=function(e,t){if(void 0!==e.$ref){if(t=t||{},t[e.$ref])return this.createError(_.CIRCULAR_REFERENCE,{urls:(0,y.default)(t).join(", ")},"","",null,void 0,e);t[e.$ref]=!0,e=this.getSchema(e.$ref,t)}return e},g.prototype.getSchema=function(e,t){var r;if(void 0!==this.schemas[e])return r=this.schemas[e],this.resolveRefs(r,t);var n=e,i="";if(-1!==e.indexOf("#")&&(i=e.substring(e.indexOf("#")+1),n=e.substring(0,e.indexOf("#"))),"object"===(0,d.default)(this.schemas[n])){r=this.schemas[n];var o=decodeURIComponent(i);if(""===o)return this.resolveRefs(r,t);if("/"!==o.charAt(0))return;for(var s=o.split("/").slice(1),a=0;a<s.length;a++){var u=s[a].replace(/~1/g,"/").replace(/~0/g,"~");if(void 0===r[u]){r=void 0;break}r=r[u]}if(void 0!==r)return this.resolveRefs(r,t)}void 0===this.missing[n]&&(this.missing.push(n),this.missing[n]=n,this.missingMap[n]=n)},g.prototype.searchSchemas=function(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++)this.searchSchemas(e[r],t);else if(e&&"object"===(void 0===e?"undefined":(0,d.default)(e))){"string"==typeof e.id&&isTrustedUrl(t,e.id)&&void 0===this.schemas[e.id]&&(this.schemas[e.id]=e);for(var n in e)if("enum"!==n)if("object"===(0,d.default)(e[n]))this.searchSchemas(e[n],t);else if("$ref"===n){var i=getDocumentUri(e[n]);i&&void 0===this.schemas[i]&&void 0===this.missingMap[i]&&(this.missingMap[i]=i)}}},g.prototype.addSchema=function(e,t){
//overload
if("string"!=typeof e||void 0===t){if("object"!==(void 0===e?"undefined":(0,d.default)(e))||"string"!=typeof e.id)return;t=e,e=t.id}e===getDocumentUri(e)+"#"&&(
// Remove empty fragment
e=getDocumentUri(e)),this.schemas[e]=t,delete this.missingMap[e],normSchema(t,e),this.searchSchemas(t,e)},g.prototype.getSchemaMap=function(){var e={};for(var t in this.schemas)e[t]=this.schemas[t];return e},g.prototype.getSchemaUris=function(e){var t=[];for(var r in this.schemas)e&&!e.test(r)||t.push(r);return t},g.prototype.getMissingUris=function(e){var t=[];for(var r in this.missingMap)e&&!e.test(r)||t.push(r);return t},g.prototype.dropSchemas=function(){this.schemas={},this.reset()},g.prototype.reset=function(){this.missing=[],this.missingMap={},this.errors=[]},g.prototype.validateAll=function(e,t,r,n,i){var o;if(!(t=this.resolveRefs(t)))return null;if(t instanceof ValidationError)return this.errors.push(t),t;var a,c=this.errors.length,f=null,l=null;if(this.checkRecursive&&e&&"object"===(void 0===e?"undefined":(0,d.default)(e))){if(o=!this.scanned.length,e[this.validatedSchemasKey]){var p=e[this.validatedSchemasKey].indexOf(t);if(-1!==p)return this.errors=this.errors.concat(e[this.validationErrorsKey][p]),null}if((0,u.default)(e)&&-1!==(a=this.scannedFrozen.indexOf(e))){var y=this.scannedFrozenSchemas[a].indexOf(t);if(-1!==y)return this.errors=this.errors.concat(this.scannedFrozenValidationErrors[a][y]),null}if(this.scanned.push(e),(0,u.default)(e))-1===a&&(a=this.scannedFrozen.length,this.scannedFrozen.push(e),this.scannedFrozenSchemas.push([])),f=this.scannedFrozenSchemas[a].length,this.scannedFrozenSchemas[a][f]=t,this.scannedFrozenValidationErrors[a][f]=[];else{if(!e[this.validatedSchemasKey])try{(0,s.default)(e,this.validatedSchemasKey,{value:[],configurable:!0}),(0,s.default)(e,this.validationErrorsKey,{value:[],configurable:!0})}catch(t){
//IE 7/8 workaround
e[this.validatedSchemasKey]=[],e[this.validationErrorsKey]=[]}l=e[this.validatedSchemasKey].length,e[this.validatedSchemasKey][l]=t,e[this.validationErrorsKey][l]=[]}}var h=this.errors.length,v=this.validateBasic(e,t,i)||this.validateNumeric(e,t,i)||this.validateString(e,t,i)||this.validateArray(e,t,i)||this.validateObject(e,t,i)||this.validateCombinations(e,t,i)||this.validateHypermedia(e,t,i)||this.validateFormat(e,t,i)||this.validateDefinedKeywords(e,t,i)||null;if(o){for(;this.scanned.length;){delete this.scanned.pop()[this.validatedSchemasKey]}this.scannedFrozen=[],this.scannedFrozenSchemas=[]}if(v||h!==this.errors.length)for(;r&&r.length||n&&n.length;){var g=r&&r.length?""+r.pop():null,b=n&&n.length?""+n.pop():null;v&&(v=v.prefixWith(g,b)),this.prefixErrors(h,g,b)}return null!==f?this.scannedFrozenValidationErrors[a][f]=this.errors.slice(c):null!==l&&(e[this.validationErrorsKey][l]=this.errors.slice(c)),this.handleError(v)},g.prototype.validateFormat=function(e,t){if("string"!=typeof t.format||!this.formatValidators[t.format])return null;var r=this.formatValidators[t.format].call(null,e,t);return"string"==typeof r||"number"==typeof r?this.createError(_.FORMAT_CUSTOM,{message:r},"","/format",null,e,t):r&&"object"===(void 0===r?"undefined":(0,d.default)(r))?this.createError(_.FORMAT_CUSTOM,{message:r.message||"?"},r.dataPath||"",r.schemaPath||"/format",null,e,t):null},g.prototype.validateDefinedKeywords=function(e,t,r){for(var n in this.definedKeywords)if(void 0!==t[n])for(var i=this.definedKeywords[n],o=0;o<i.length;o++){var s=i[o],a=s(e,t[n],t,r);if("string"==typeof a||"number"==typeof a)return this.createError(_.KEYWORD_CUSTOM,{key:n,message:a},"","",null,e,t).prefixWith(null,n);if(a&&"object"===(void 0===a?"undefined":(0,d.default)(a))){var u=a.code;if("string"==typeof u){if(!_[u])throw new Error("Undefined error code (use defineError): "+u);u=_[u]}else"number"!=typeof u&&(u=_.KEYWORD_CUSTOM);var c="object"===(0,d.default)(a.message)?a.message:{key:n,message:a.message||"?"},f=a.schemaPath||"/"+n.replace(/~/g,"~0").replace(/\//g,"~1");return this.createError(u,c,a.dataPath||null,f,null,e,t)}}return null},g.prototype.validateBasic=function(e,t,r){var n;return(n=this.validateType(e,t,r))?n.prefixWith(null,"type"):(n=this.validateEnum(e,t,r))?n.prefixWith(null,"type"):null},g.prototype.validateType=function(e,t){if(void 0===t.type)return null;var r=void 0===e?"undefined":(0,d.default)(e);null===e?r="null":Array.isArray(e)&&(r="array");var n=t.type;Array.isArray(n)||(n=[n]);for(var i=0;i<n.length;i++){var o=n[i];if(o===r||"integer"===o&&"number"===r&&e%1==0)return null}return this.createError(_.INVALID_TYPE,{type:r,expected:n.join("/")},"","",null,e,t)},g.prototype.validateEnum=function(e,t){if(void 0===t.enum)return null;for(var r=0;r<t.enum.length;r++){if(recursiveCompare(e,t.enum[r]))return null}return this.createError(_.ENUM_MISMATCH,{value:"undefined"!=typeof JSON?(0,i.default)(e):e},"","",null,e,t)},g.prototype.validateNumeric=function(e,t,r){return this.validateMultipleOf(e,t,r)||this.validateMinMax(e,t,r)||this.validateNaN(e,t,r)||null};var b=Math.pow(2,-51),m=1-b;g.prototype.validateMultipleOf=function(e,t){var r=t.multipleOf||t.divisibleBy;if(void 0===r)return null;if("number"==typeof e){var n=e/r%1;if(n>=b&&n<m)return this.createError(_.NUMBER_MULTIPLE_OF,{value:e,multipleOf:r},"","",null,e,t)}return null},g.prototype.validateMinMax=function(e,t){if("number"!=typeof e)return null;if(void 0!==t.minimum){if(e<t.minimum)return this.createError(_.NUMBER_MINIMUM,{value:e,minimum:t.minimum},"","/minimum",null,e,t);if(t.exclusiveMinimum&&e===t.minimum)return this.createError(_.NUMBER_MINIMUM_EXCLUSIVE,{value:e,minimum:t.minimum},"","/exclusiveMinimum",null,e,t)}if(void 0!==t.maximum){if(e>t.maximum)return this.createError(_.NUMBER_MAXIMUM,{value:e,maximum:t.maximum},"","/maximum",null,e,t);if(t.exclusiveMaximum&&e===t.maximum)return this.createError(_.NUMBER_MAXIMUM_EXCLUSIVE,{value:e,maximum:t.maximum},"","/exclusiveMaximum",null,e,t)}return null},g.prototype.validateNaN=function(e,t){return"number"!=typeof e?null:!0===isNaN(e)||e===1/0||e===-1/0?this.createError(_.NUMBER_NOT_A_NUMBER,{value:e},"","/type",null,e,t):null},g.prototype.validateString=function(e,t,r){return this.validateStringLength(e,t,r)||this.validateStringPattern(e,t,r)||null},g.prototype.validateStringLength=function(e,t){return"string"!=typeof e?null:void 0!==t.minLength&&e.length<t.minLength?this.createError(_.STRING_LENGTH_SHORT,{length:e.length,minimum:t.minLength},"","/minLength",null,e,t):void 0!==t.maxLength&&e.length>t.maxLength?this.createError(_.STRING_LENGTH_LONG,{length:e.length,maximum:t.maxLength},"","/maxLength",null,e,t):null},g.prototype.validateStringPattern=function(e,t){if("string"!=typeof e||"string"!=typeof t.pattern&&!(t.pattern instanceof RegExp))return null;var r;if(t.pattern instanceof RegExp)r=t.pattern;else{var n,i="",o=t.pattern.match(/^\/(.+)\/([img]*)$/);o?(n=o[1],i=o[2]):n=t.pattern,r=new RegExp(n,i)}return r.test(e)?null:this.createError(_.STRING_PATTERN,{pattern:t.pattern},"","/pattern",null,e,t)},g.prototype.validateArray=function(e,t,r){return Array.isArray(e)?this.validateArrayLength(e,t,r)||this.validateArrayUniqueItems(e,t,r)||this.validateArrayItems(e,t,r)||null:null},g.prototype.validateArrayLength=function(e,t){var r;return void 0!==t.minItems&&e.length<t.minItems&&(r=this.createError(_.ARRAY_LENGTH_SHORT,{length:e.length,minimum:t.minItems},"","/minItems",null,e,t),this.handleError(r))?r:void 0!==t.maxItems&&e.length>t.maxItems&&(r=this.createError(_.ARRAY_LENGTH_LONG,{length:e.length,maximum:t.maxItems},"","/maxItems",null,e,t),this.handleError(r))?r:null},g.prototype.validateArrayUniqueItems=function(e,t){if(t.uniqueItems)for(var r=0;r<e.length;r++)for(var n=r+1;n<e.length;n++)if(recursiveCompare(e[r],e[n])){var i=this.createError(_.ARRAY_UNIQUE,{match1:r,match2:n},"","/uniqueItems",null,e,t);if(this.handleError(i))return i}return null},g.prototype.validateArrayItems=function(e,t,r){if(void 0===t.items)return null;var n,i;if(Array.isArray(t.items)){for(i=0;i<e.length;i++)if(i<t.items.length){if(n=this.validateAll(e[i],t.items[i],[i],["items",i],r+"/"+i))return n}else if(void 0!==t.additionalItems)if("boolean"==typeof t.additionalItems){if(!t.additionalItems&&(n=this.createError(_.ARRAY_ADDITIONAL_ITEMS,{},"/"+i,"/additionalItems",null,e,t),this.handleError(n)))return n}else if(n=this.validateAll(e[i],t.additionalItems,[i],["additionalItems"],r+"/"+i))return n}else for(i=0;i<e.length;i++)if(n=this.validateAll(e[i],t.items,[i],["items"],r+"/"+i))return n;return null},g.prototype.validateObject=function(e,t,r){return"object"!==(void 0===e?"undefined":(0,d.default)(e))||null===e||Array.isArray(e)?null:this.validateObjectMinMaxProperties(e,t,r)||this.validateObjectRequiredProperties(e,t,r)||this.validateObjectProperties(e,t,r)||this.validateObjectDependencies(e,t,r)||null},g.prototype.validateObjectMinMaxProperties=function(e,t){var r,n=(0,y.default)(e);return void 0!==t.minProperties&&n.length<t.minProperties&&(r=this.createError(_.OBJECT_PROPERTIES_MINIMUM,{propertyCount:n.length,minimum:t.minProperties},"","/minProperties",null,e,t),this.handleError(r))?r:void 0!==t.maxProperties&&n.length>t.maxProperties&&(r=this.createError(_.OBJECT_PROPERTIES_MAXIMUM,{propertyCount:n.length,maximum:t.maxProperties},"","/maxProperties",null,e,t),this.handleError(r))?r:null},g.prototype.validateObjectRequiredProperties=function(e,t){if(void 0!==t.required)for(var r=0;r<t.required.length;r++){var n=t.required[r];if(void 0===e[n]){var i=this.createError(_.OBJECT_REQUIRED,{key:n},"","/required/"+r,null,e,t);if(this.handleError(i))return i}}return null},g.prototype.validateObjectProperties=function(e,t,r){var n;for(var i in e){var o=r+"/"+i.replace(/~/g,"~0").replace(/\//g,"~1"),s=!1;if(void 0!==t.properties&&void 0!==t.properties[i]&&(s=!0,n=this.validateAll(e[i],t.properties[i],[i],["properties",i],o)))return n;if(void 0!==t.patternProperties)for(var a in t.patternProperties){var u=new RegExp(a);if(u.test(i)&&(s=!0,n=this.validateAll(e[i],t.patternProperties[a],[i],["patternProperties",a],o)))return n}if(s)this.trackUnknownProperties&&(this.knownPropertyPaths[o]=!0,delete this.unknownPropertyPaths[o]);else if(void 0!==t.additionalProperties){if(this.trackUnknownProperties&&(this.knownPropertyPaths[o]=!0,delete this.unknownPropertyPaths[o]),"boolean"==typeof t.additionalProperties){if(!t.additionalProperties&&(n=this.createError(_.OBJECT_ADDITIONAL_PROPERTIES,{key:i},"","/additionalProperties",null,e,t).prefixWith(i,null),this.handleError(n)))return n}else if(n=this.validateAll(e[i],t.additionalProperties,[i],["additionalProperties"],o))return n}else this.trackUnknownProperties&&!this.knownPropertyPaths[o]&&(this.unknownPropertyPaths[o]=!0)}return null},g.prototype.validateObjectDependencies=function(e,t,r){var n;if(void 0!==t.dependencies)for(var i in t.dependencies)if(void 0!==e[i]){var o=t.dependencies[i];if("string"==typeof o){if(void 0===e[o]&&(n=this.createError(_.OBJECT_DEPENDENCY_KEY,{key:i,missing:o},"","",null,e,t).prefixWith(null,i).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(Array.isArray(o))for(var s=0;s<o.length;s++){var a=o[s];if(void 0===e[a]&&(n=this.createError(_.OBJECT_DEPENDENCY_KEY,{key:i,missing:a},"","/"+s,null,e,t).prefixWith(null,i).prefixWith(null,"dependencies"),this.handleError(n)))return n}else if(n=this.validateAll(e,o,[],["dependencies",i],r))return n}return null},g.prototype.validateCombinations=function(e,t,r){return this.validateAllOf(e,t,r)||this.validateAnyOf(e,t,r)||this.validateOneOf(e,t,r)||this.validateNot(e,t,r)||null},g.prototype.validateAllOf=function(e,t,r){if(void 0===t.allOf)return null;for(var n,i=0;i<t.allOf.length;i++){var o=t.allOf[i];if(n=this.validateAll(e,o,[],["allOf",i],r))return n}return null},g.prototype.validateAnyOf=function(e,t,r){if(void 0===t.anyOf)return null;var n,i,o=[],s=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,i=this.knownPropertyPaths);for(var a=!0,u=0;u<t.anyOf.length;u++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var c=t.anyOf[u],f=this.errors.length,l=this.validateAll(e,c,[],["anyOf",u],r);if(null===l&&f===this.errors.length){if(this.errors=this.errors.slice(0,s),this.trackUnknownProperties){for(var d in this.knownPropertyPaths)i[d]=!0,delete n[d];for(var p in this.unknownPropertyPaths)i[p]||(n[p]=!0);
// We need to continue looping so we catch all the property definitions, but we don't want to return an error
a=!1;continue}return null}l&&o.push(l.prefixWith(null,""+u).prefixWith(null,"anyOf"))}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=i),a?(o=o.concat(this.errors.slice(s)),this.errors=this.errors.slice(0,s),this.createError(_.ANY_OF_MISSING,{},"","/anyOf",o,e,t)):void 0},g.prototype.validateOneOf=function(e,t,r){if(void 0===t.oneOf)return null;var n,i,o=null,s=[],a=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,i=this.knownPropertyPaths);for(var u=0;u<t.oneOf.length;u++){this.trackUnknownProperties&&(this.unknownPropertyPaths={},this.knownPropertyPaths={});var c=t.oneOf[u],f=this.errors.length,l=this.validateAll(e,c,[],["oneOf",u],r);if(null===l&&f===this.errors.length){if(null!==o)return this.errors=this.errors.slice(0,a),this.createError(_.ONE_OF_MULTIPLE,{index1:o,index2:u},"","/oneOf",null,e,t);if(o=u,this.trackUnknownProperties){for(var d in this.knownPropertyPaths)i[d]=!0,delete n[d];for(var p in this.unknownPropertyPaths)i[p]||(n[p]=!0)}}else l&&s.push(l)}return this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=i),null===o?(s=s.concat(this.errors.slice(a)),this.errors=this.errors.slice(0,a),this.createError(_.ONE_OF_MISSING,{},"","/oneOf",s,e,t)):(this.errors=this.errors.slice(0,a),null)},g.prototype.validateNot=function(e,t,r){if(void 0===t.not)return null;var n,i,o=this.errors.length;this.trackUnknownProperties&&(n=this.unknownPropertyPaths,i=this.knownPropertyPaths,this.unknownPropertyPaths={},this.knownPropertyPaths={});var s=this.validateAll(e,t.not,null,null,r),a=this.errors.slice(o);return this.errors=this.errors.slice(0,o),this.trackUnknownProperties&&(this.unknownPropertyPaths=n,this.knownPropertyPaths=i),null===s&&0===a.length?this.createError(_.NOT_PASSED,{},"","/not",null,e,t):null},g.prototype.validateHypermedia=function(e,t,r){if(!t.links)return null;for(var n,i=0;i<t.links.length;i++){var o=t.links[i];if("describedby"===o.rel){for(var s=new UriTemplate(o.href),a=!0,u=0;u<s.varNames.length;u++)if(!(s.varNames[u]in e)){a=!1;break}if(a){var c=s.fillFromObject(e),f={$ref:c};if(n=this.validateAll(e,f,[],["links",i],r))return n}}}};var _={INVALID_TYPE:0,ENUM_MISMATCH:1,ANY_OF_MISSING:10,ONE_OF_MISSING:11,ONE_OF_MULTIPLE:12,NOT_PASSED:13,
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
UNKNOWN_PROPERTY:"Unknown property (not in schema)"};ValidationError.prototype=(0,f.default)(Error.prototype),ValidationError.prototype.constructor=ValidationError,ValidationError.prototype.name="ValidationError",ValidationError.prototype.prefixWith=function(e,t){if(null!==e&&(e=e.replace(/~/g,"~0").replace(/\//g,"~1"),this.dataPath="/"+e+this.dataPath),null!==t&&(t=t.replace(/~/g,"~0").replace(/\//g,"~1"),this.schemaPath="/"+t+this.schemaPath),null!==this.subErrors)for(var r=0;r<this.subErrors.length;r++)this.subErrors[r].prefixWith(e,t);return this};var P={},O=createApi();O.addLanguage("en-gb",S),
//legacy property
O.tv4=O,
//return tv4;
t.default=O,
//}
e.exports=t.default},/* 513 */
/***/
function(e,t,r){e.exports={default:r(514),__esModule:!0}},/* 514 */
/***/
function(e,t,r){r(515),e.exports=r(10).Object.isFrozen},/* 515 */
/***/
function(e,t,r){
// 19.1.2.12 Object.isFrozen(O)
var n=r(36);r(99)("isFrozen",function(e){return function(t){return!n(t)||!!e&&e(t)}})},/* 516 */
/***/
function(e,t,r){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(47),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(37),u=_interopRequireDefault(a),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(7),y=_interopRequireWildcard(p),h=r(14),v=r(212),g=_interopRequireDefault(v),b=r(101),m=_interopRequireWildcard(b),_=y.getLogger("ReporterObject"),R=function(){function ReporterObject(e,t,r){(0,f.default)(this,ReporterObject);var n=this;n._parent=e,n._owner=t,n._url=r,n._bus=e._bus,n._domain=(0,h.divideURL)(r).domain,n._objSubscriptorURL=n._url+"/subscription",n._subscriptions={},n._childrens=[],n._childrenListeners=[],n._forwards={},n._isToSaveData=!1,n._allocateListeners()}return(0,d.default)(ReporterObject,[{key:"_allocateListeners",value:function(){var e=this,t=this;
//add subscription listener...
t._subscriptionListener=t._bus.addListener(t._objSubscriptorURL,function(e){switch(_.info("[SyncherManager.ReporterObject received ]",e),e.type){case"subscribe":t._onRemoteSubscribe(e);break;case"unsubscribe":t._onRemoteUnSubscribe(e);break;case"response":t._onRemoteResponse(e)}});var r=t._url+"/changes";t._changeListener=t._bus.addListener(r,function(n){_.info("[SyncherManager.ReporterObject ] SyncherManager-"+r+"-RCV: ",n),
//TODO: what todo here? Save changes?
e._isToSaveData&&n.body.attribute&&(_.log("[SyncherManager.ReporterObject ] SyncherManager - save data: ",n),t._parent._dataObjectsStorage.update(!0,t._url,"version",n.body.version),t._parent._dataObjectsStorage.update(!0,t._url,"lastModified",n.body.lastModified),t._parent._dataObjectsStorage.saveData(!0,t._url,n.body.attribute,n.body.value))})}},{key:"_releaseListeners",value:function(){var e=this;e._subscriptionListener.remove(),e._changeListener.remove(),e._childrenListeners.forEach(function(e){e.remove()}),(0,u.default)(e._forwards).forEach(function(t){e.forwardUnSubscribe(t)}),
//remove all subscriptions
(0,u.default)(e._subscriptions).forEach(function(t){e._subscriptions[t]._releaseListeners()})}},{key:"resumeSubscriptions",value:function(e){var t=this;e&&(0,u.default)(e).forEach(function(r){var n=e[r];_.log("[SyncherManager.ReporterObject] - resume subscriptions",t,n,t._childrens),t._subscriptions[n]||(t._subscriptions[n]=new g.default(t._bus,t._owner,t._url,t._childrens,!0))})}},{key:"forwardSubscribe",value:function(e){var t=this,r={type:"subscribe",from:t._parent._url,to:"domain://msg-node."+t._domain+"/sm",body:{resources:e,source:t._owner}};return new s.default(function(n,i){t._bus.postMessage(r,function(r){if(_.log("[SyncherManager.ReporterObject ]forward-subscribe-response(reporter): ",r),200===r.body.code){var o=t._bus.addForward(t._url,t._owner);t._forwards[e[0]]=o,n()}else i("Error on msg-node subscription: "+r.body.desc)})})}},{key:"forwardUnSubscribe",value:function(e){var t=this;t._forwards[e].remove(),delete t._forwards[e];
//FLOW-OUT: message sent to the msg-node SubscriptionManager component
var r={type:"unsubscribe",from:t._parent._url,to:"domain://msg-node."+t._domain+"/sm",body:{resources:[e],source:t._owner}};t._bus.postMessage(r)}},{key:"addChildrens",value:function(e){var t=this,r=this;return new s.default(function(n,o){if(0===e.length)return void n();var s=r._url+"/children/";_.log("[SyncherManager.ReporterObject - addChildrens] - childrens: ",e,s),e.forEach(function(e){r._childrens.push(e)});/*
        _this._childrens.forEach((child) => {
          let childId = childBaseURL + child;
           let selfForward = _this._bus.addForward(childId, owner);
          _this._childrenListeners.push(selfForward);
        });*/
var a=[];e.forEach(function(e){return a.push(s+e)});
//_this._storageSubscriptions[_this._objSubscriptorURL] = {url: _this._url, owner: _this._owner, childrens: _this._childrens};
//FLOW-OUT: message sent to the msg-node SubscriptionManager component
var u={type:"subscribe",from:r._parent._url,to:"domain://msg-node."+r._domain+"/sm",body:{resources:a,source:r._owner}};r._bus.postMessage(u,function(e){_.log("[SyncherManager.ReporterObject ]node-subscribe-response(reporter):",e),200===e.body.code?(
//add children listeners on local ...
a.forEach(function(e){var n=r._bus.addListener(e,function(e){if(
//TODO: what todo here? Save childrens?
_.log("[SyncherManager.ReporterObject received]",e),"create"===e.type&&e.to.includes("children")&&t._isToSaveData){
// if the value is not encrypted lets encrypt it
// todo: should be subject to some policy
var n=(0,h.splitObjectURL)(e.to),o=n.url;
//remove false when mutualAuthentication is enabled
"string"!=typeof e.body.value?(_.log("[SyncherManager.ReporterObject] encrypting received data ",e.body.value),m.default.encryptDataObject(e.body.value,o).then(function(t){_.log("[SyncherManager.ReporterObject] encrypted data ",t),r._storeChildObject(e,(0,i.default)(t))}).catch(function(t){_.warn("[SyncherManager._decryptChildrens] failed : ",t," Storing unencrypted"),r._storeChildObject(e,e.body.value)})):r._storeChildObject(e,e.body.value)}});r._childrenListeners.push(n);var o=r._bus.addForward(e,r._owner);r._childrenListeners.push(o)}),n()):o("Error on msg-node subscription: "+e.body.desc)})})}},{key:"_storeChildObject",value:function(e,t){var r=this,n=(0,h.splitObjectURL)(e.to),i=n.url,o=n.resource,s={identity:e.body.identity,value:t},a=e.body.resource,u=o;a&&(u+="."+a),
// this identity data is not needed to be stored
delete s.identity.assertion,delete s.identity.expires,r._parent._dataObjectsStorage.saveChildrens(!0,i,u,s)}},{key:"delete",value:function(){var e=this,t=(0,h.divideURL)(e._owner).domain;
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
e.body.hasOwnProperty("mutual")&&(n.body.mutual=e.body.mutual),t._bus.postMessage(n,function(n){_.log("[SyncherManager.ReporterObject ]forward-reply: ",n),200===n.body.code&&(t._subscriptions[r]||(_.log("[SyncherManager.ReporterObject] - _onRemoteSubscribe:",t._childrens),t._subscriptions[r]=new g.default(t._bus,t._owner,t._url,t._childrens,!0)));
//TODO: atualizar mutual no storage e tb na sessionKeys
// Store for each reporter hyperty the dataObject
var i=void 0;e.body.identity&&e.body.identity.userProfile.userURL&&(i=e.body.identity.userProfile.userURL,t._parent._dataObjectsStorage.update(!0,t._url,"subscriberUsers",i)),e.body.hasOwnProperty("mutual")&&
//          _this._parent._identityModule.updateIsToEncryptForDataObjectSessionKey(_this._url, msg.body.mutual).then(()=>{
t._parent._dataObjectsStorage.update(!0,t._url,"mutual",e.body.mutual),t._parent._dataObjectsStorage.update(!0,t._url,"subscriptions",r),n.body.owner=t._owner,
//FLOW-OUT: subscription response sent (forward from internal Hyperty)
t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:n.body})})}},{key:"_onRemoteUnSubscribe",value:function(e){var t=this,r=e.body.source,n=t._subscriptions[r];if(n){n._releaseListeners(),delete t._subscriptions[r];var i={type:"forward",from:t._url,to:t._owner,body:{type:e.type,from:r,to:t._url,identity:e.body.identity}};t._bus.postMessage(i)}}},{key:"isToSaveData",set:function(e){this._isToSaveData=e}}]),ReporterObject}();t.default=R,e.exports=t.default},/* 517 */
/***/
function(e,t,r){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(47),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(1),u=_interopRequireDefault(a),c=r(2),f=_interopRequireDefault(c),l=r(7),d=_interopRequireWildcard(l),p=r(14),y=r(212),h=_interopRequireDefault(y),v=r(101),g=_interopRequireWildcard(v),b=d.getLogger("ObserverObject"),m=function(){function ObserverObject(e,t,r){var n=this;(0,u.default)(this,ObserverObject);var i=this;i._parent=e,i._url=t,i._childrens=r,i._bus=e._bus,i._subscriptions={},i._storageSubscriptions={},i._childrenListeners=[],this._isToSaveData=!1;var o=i._url+"/changes";i._changeListener=i._bus.addListener(o,function(e){b.log("[SyncherManager.ObserverObject ] SyncherManager-"+o+"-RCV: ",e),
//TODO: what todo here? Save changes?
n._isToSaveData&&e.body.attribute&&(b.log("[SyncherManager.ObserverObject ] SyncherManager - save data: ",e),i._parent._dataObjectsStorage.update(!1,i._url,"version",e.body.version),i._parent._dataObjectsStorage.update(!1,i._url,"lastModified",e.body.lastModified),i._parent._dataObjectsStorage.saveData(!1,i._url,e.body.attribute,e.body.value))})}return(0,f.default)(ObserverObject,[{key:"_newSubscription",value:function(e){var t=this,r=t._subscriptions[e];b.log("[Observer Object - new subscription] - ",t._subscriptions,e,t._subscriptions.hasOwnProperty(e)),r||(t._subscriptions[e]=new h.default(t._bus,e,t._url,t._childrens,!1))}},{key:"addSubscription",value:function(e){this._newSubscription(e)}},{key:"addChildrens",value:function(e){var t=this,r=this;return new s.default(function(n){if(0===e.length)return n();var o=r._url+"/children/";b.log("[SyncherManager.ObserverObject - addChildrens] - childrens: ",e,o),e.forEach(function(e){var n=r._bus.addListener(o+e,function(e){if(
//TODO: what todo here? Save childrens?
b.log("[SyncherManager.ObserverObject received]",e),"create"===e.type&&e.to.includes("children")&&t._isToSaveData){var o=(0,p.splitObjectURL)(e.to),s=o.url;
//remove false when mutualAuthentication is enabled
"string"!=typeof e.body.value?(b.log("[SyncherManager.ObserverObject] encrypting received data ",e.body.value),g.default.encryptDataObject(e.body.value,s).then(function(t){b.log("[SyncherManager.ObserverObject] encrypted data ",t),r._storeChildObject(e,(0,i.default)(t))}).catch(function(t){b.warn("[SyncherManager.ObserverObject._encryptChild] failed, storing unencrypted ",t),r._storeChildObject(e,e.body.value)})):r._storeChildObject(e,e.body.value)}b.log("[SyncherManager.ObserverObject children Listeners]",r._childrenListeners,n),-1===r._childrenListeners.indexOf(n)&&r._childrenListeners.push(n)})})})}},{key:"_storeChildObject",value:function(e,t){var r=this,n=(0,p.splitObjectURL)(e.to),i=n.url,o=n.resource,s={identity:e.body.identity,value:t};
// this identity data is not needed to be stored
delete s.identity.assertion,delete s.identity.expires;var a=e.body.resource,u=o;a&&(u+="."+a),b.log("[SyncherManager.ObserverObject._storeChildObject] : ",i,u,s),r._parent._dataObjectsStorage.saveChildrens(!1,i,u,s)}},{key:"removeSubscription",value:function(e){var t=this,r=e.from,n=(0,p.divideURL)(r).domain,i=t._url+"/subscription",o=t._subscriptions[r];o&&(
//FLOW-OUT: message sent to remote ReporterObject -> _onRemoteUnSubscribe
t._bus.postMessage({type:"unsubscribe",from:t._parent._url,to:i,body:{source:r,identity:e.body.identity}}),
//TODO: should I wait for response before unsubscribe on msg-node
//FLOW-OUT: message sent to msg-node SubscriptionManager component
t._bus.postMessage({type:"unsubscribe",from:t._parent._url,to:"domain://msg-node."+n+"/sm",body:{resource:t._url,childrenResources:t._childrens}}),o._releaseListeners(),delete t._subscriptions[r])}},{key:"isToSaveData",set:function(e){this._isToSaveData=e}}]),ObserverObject}();t.default=m,e.exports=t.default},/* 518 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(211),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(1),u=_interopRequireDefault(a),c=r(2),f=_interopRequireDefault(c),l=r(7),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(l),p=r(14),y=r(519),h=_interopRequireDefault(y),v=d.getLogger("SubscriptionManager"),g=function(){function SubscriptionManager(e,t,r){if((0,u.default)(this,SubscriptionManager),!e)throw new Error("[SubscriptionManager] - needs the runtimeURL parameter");if(!t)throw new Error("[SubscriptionManager] - needs the MessageBus instance");var n=this;n._bus=t,n._storage=r,n._subscriptions={},n._subscriptionsStorage={},
//TODO: these should be saved in persistence engine?
n.runtimeURL=e,n._url=e+"/subscriptions",
//TODO: this should not be hardcoded!
n._domain=(0,p.divideURL)(e).domain,t.addListener(n._url,function(e){switch(v.info("[SubscriptionManager] RCV: ",e),e.type){case"subscribe":n._onSubscribe(e);break;case"unsubscribe":n._onUnSubscribe(e);break;case"read":n._onRead(e)}})}return(0,f.default)(SubscriptionManager,[{key:"init",value:function(){var e=this;return new s.default(function(t){e._storage.get("subscriptions").then(function(r){v.log("[SubscriptionManager.init] resume subscriptions: ",r),r&&(e._subscriptionsStorage=r,(0,i.default)(r).forEach(function(t){e._createSubscription(t.domain,t.resources,t.subscriber,t.identity)})),t()})})}},{key:"_onSubscribe",
//message received to set a routing path
value:function(e){var t=this,r=e.body.resources,n=e.from,i=(0,p.divideURL)(r[0]).domain,o=e.body.identity;t._createSubscription(i,r,n,o).then(function(s){
//forward to hyperty:
s.id=e.id,s.from=t._url,s.to=n,s.body=e.body,s.body.code=200,v.log("[SubscriptionManager] - craeteSubscription: ",e,s,n),t._bus.postMessage(s),t._subscriptionsStorage[n]?r.forEach(function(e){t._subscriptionsStorage[n].resources.includes(e)||t._subscriptionsStorage[n].resources.push(e)}):t._subscriptionsStorage[n]={domain:i,resources:r,subscriber:n,identity:o},t._storage.set("subscriptions",1,t._subscriptionsStorage)})}},{key:"_createSubscription",value:function(e,t,r,n){var i=this;
//debugger;
return new s.default(function(o){
//FLOW-OUT: subscribe message to the msg-node, registering listeners on the broker
var s={type:"subscribe",from:i._url,to:"domain://msg-node."+e+"/sm",body:{identity:n,resources:t,source:r}};
//subscribe in msg-node
i._bus.postMessage(s,function(e){v.log("[SubscriptionManager] node-subscribe-response: ",e);
//if (reply.body.code === 200) {//TODO: uncomment when  MN replies with correct response body code
//TODO: support multiple routes for multiple resources
var n=i._subscriptions[r];v.log("[SubscriptionManager] - ",i._subscriptions,t,i._subscriptions.hasOwnProperty(r)),n||(i._subscriptions[r]={}),t.forEach(function(e){i._subscriptions[r][e]=new h.default(i._bus,r,e)}),o(e)})})}},{key:"_onUnSubscribe",value:function(e){var t=this,r=e.from,n=e.body.resource;if(t._subscriptions[r]&&t._subscriptions[r][n]){var i=(0,p.divideURL)(n).domain,o=t._subscriptions[r][n];if(
//FLOW-OUT: message sent to msg-node SubscriptionManager component
t._bus.postMessage({type:"unsubscribe",from:t._url,to:"domain://msg-node."+i+"/sm",body:{resources:[n],source:r}}),o._releaseListeners(),delete t._subscriptions[r][n],t._subscriptionsStorage[r]){var s=t._subscriptionsStorage[r].resources.indexOf(n);-1!=s&&t._subscriptionsStorage[r].resources.splice(s,1),t._storage.set("subscriptions",1,t._subscriptionsStorage)}}t._bus.postMessage({id:e.id,type:"response",from:e.to,to:e.from,body:{code:200}})}},{key:"_onRead",value:function(e){var t=this,r=e.body.resource,n=void 0;v.log("[SubscriptionManager] - request to read Subscriptions: ",e),t._storage.get("subscriptions").then(function(i){if(i&&i[r]){var o=i[r].resources;n={id:e.id,type:"response",from:e.to,to:e.from,body:{code:200,value:o}}}else n={id:e.id,type:"response",from:e.to,to:e.from,body:{code:404,description:"Not Found"}};t._bus.postMessage(n)})}},{key:"url",get:function(){return this._url}}]),SubscriptionManager}();t.default=g,e.exports=t.default},/* 519 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=r(7),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(a),c=u.getLogger("Subscription"),f=function(){function Subscription(e,t,r){(0,i.default)(this,Subscription);var n=this;n._subscriber=t,n.resource=r,c.log("[SubscriptionManager.Subscription] new: ",t,r),
//add forward
n._listener=e.addForward(r,t)}return(0,s.default)(Subscription,[{key:"_releaseListeners",value:function(){this._listener.remove()}}]),Subscription}();t.default=f,e.exports=t.default},/* 520 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(47),i=_interopRequireDefault(n),o=r(9),s=_interopRequireDefault(o),a=r(60),u=_interopRequireDefault(a),c=r(1),f=_interopRequireDefault(c),l=r(2),d=_interopRequireDefault(l),p=r(68),y=_interopRequireDefault(p),h=r(69),v=_interopRequireDefault(h),g=r(7),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(g),m=r(207),_=_interopRequireDefault(m),R=r(208),w=_interopRequireDefault(R),S=r(14),P=r(209),O=_interopRequireDefault(P),M=r(521),k=_interopRequireDefault(M),L=(b.getLogger("PEP"),function(e){function RuntimeCoreCtx(e,t,r,n,i){(0,f.default)(this,RuntimeCoreCtx);var o=(0,y.default)(this,(RuntimeCoreCtx.__proto__||(0,u.default)(RuntimeCoreCtx)).call(this));return o._runtimeURL=e,o._pepURL=o._runtimeURL+"/pep",o._guiURL=o._runtimeURL+"/policy-gui",o.idModule=t,o.runtimeRegistry=r,o.activeUserPolicy=void 0,o.serviceProviderPolicy={},o.userPolicies={},o.storageManager=n,o.runtimeCapabilities=i,o}return(0,v.default)(RuntimeCoreCtx,e),(0,d.default)(RuntimeCoreCtx,[{key:"loadConfigurations",value:function(){var e=this;return new s.default(function(t,r){e.storageManager.get("rethink:activePolicy").then(function(t){return e.activeUserPolicy=t,e.storageManager.get("rethink:groups")}).then(function(t){var r=t;return e.groups=void 0===r?{}:r,e.storageManager.get("rethink:spPolicies")}).then(function(r){var n=r;e.serviceProviderPolicy=void 0===n?{}:n,e._loadUserPolicies().then(function(){t()})})})}},{key:"getPolicies",value:function(e,t){var r={};return void 0!==this.activeUserPolicy&&(r.userPolicy=this.userPolicies[this.activeUserPolicy]),r.serviceProviderPolicy=this.getServiceProviderPolicy(e,t),r}},{key:"_isValidUpdate",value:function(e){var t=this;return new s.default(function(r,n){e.from.split("://").length>1?t.idModule._getHypertyFromDataObject(e.from).then(function(t){t===e.body.source?r(e):n("The source of the message is not valid.")},function(e){n(e)}):r(e)})}},{key:"getMyEmails",value:function(){var e=this.idModule.getIdentities(),t=[];for(var r in e)t.push((0,S.getUserEmailFromURL)(e[r].identity));return t}},{key:"getMyHyperties",value:function(){var e=this.runtimeRegistry.hypertiesList,t=[];for(var r in e){var n=e[r].objectName;-1===t.indexOf(n)&&t.push(n)}return t}},{key:"getServiceProviderPolicy",value:function(e,t){var r=void 0;if(t){var n=this.runtimeRegistry.getHypertyName(e.to);r=this.serviceProviderPolicy[n]}else{var i=this.runtimeRegistry.getHypertyName(e.from);r=this.serviceProviderPolicy[i]}return r}},{key:"getURL",value:function(e){var t=e.split("/");return t[0]+"//"+t[2]+"/"+t[3]}},{key:"_loadUserPolicies",value:function(){var e=this,t=this;return new s.default(function(r,n){t.storageManager.get("rethink:userPolicies").then(function(t){var n=t;if(void 0!==n)for(var i in n)e.pep.addPolicy("USER",i,n[i]);r()})})}},{key:"_getLastComponentOfURL",value:function(e){var t=e.split("/");return t[t.length-1]}},{key:"_getPoliciesJSON",value:function(e){for(var t in e){var r=e[t].combiningAlgorithm;r instanceof w.default?e[t].combiningAlgorithm="blockOverrides":r instanceof _.default?e[t].combiningAlgorithm="allowOverrides":r instanceof O.default?e[t].combiningAlgorithm="firstApplicable":e[t].combiningAlgorithm=void 0}return e}},{key:"saveActivePolicy",value:function(){var e=this,t=this;return new s.default(function(r,n){t.storageManager.set("rethink:activePolicy",0,e.activeUserPolicy).then(function(){r()})})}},{key:"saveGroups",value:function(){var e=this,t=this;return new s.default(function(r,n){t.storageManager.set("rethink:groups",0,e.groups).then(function(){r()})})}},{key:"savePolicies",value:function(e,t,r){var n=void 0;switch(e){case"USER":n=(0,i.default)(this.userPolicies),n=this._getPoliciesJSON(JSON.parse(n)),this.storageManager.set("rethink:userPolicies",0,n);break;case"SERVICE_PROVIDER":void 0!==t&void 0!==r&&(this.serviceProviderPolicy[r]=t),n=(0,i.default)(this.serviceProviderPolicy),n=this._getPoliciesJSON(JSON.parse(n)),this.storageManager.set("rethink:spPolicies",0,n);break;default:throw Error("Unknown policy source: "+e)}}},{key:"getGroupsNames",value:function(){var e=this.groups,t=[];if(void 0!==e)for(var r in e)t.push(r);return t}},{key:"getGroup",value:function(e,t){var r=[];if("preauthorised"===e){var n=t.split("/");n.pop(),n=n[0]+"//"+n[2],r=this.runtimeRegistry.getPreAuthSubscribers(n)}else void 0!==this.groups[e]&&(r=this.groups[e]);return r}},{key:"createGroup",value:function(e){this.groups[e]=[],this.saveGroups()}},{key:"deleteGroup",value:function(e){delete this.groups[e],this.saveGroups()}},{key:"addToGroup",value:function(e,t){var r=this.groups;if(void 0===r[e])throw Error('Group "'+e+'" does not exist!');-1===r[e].indexOf(t)&&(r[e].push(t),this.saveGroups())}},{key:"removeFromGroup",value:function(e,t){var r=this.groups[e];r.splice(r.indexOf(t),1),this.saveGroups()}},{key:"pepURL",get:function(){return this._pepURL}},{key:"guiURL",get:function(){return this._guiURL}},{key:"runtimeURL",get:function(){return this._runtimeURL}},{key:"messageBus",get:function(){return this._messageBus},set:function(e){this._messageBus=e}},{key:"subscription",get:function(){return this._subscription},set:function(e){this._subscription=e.message.body.subscriber}}]),RuntimeCoreCtx}(k.default));t.default=L,e.exports=t.default},/* 521 */
/***/
function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),i=_interopRequireDefault(n),o=r(2),s=_interopRequireDefault(o),a=r(14),u=function(){function ReThinkCtx(){(0,i.default)(this,ReThinkCtx),this.defaultBehaviour=!0,this.groups={}}return(0,s.default)(ReThinkCtx,[{key:"scheme",get:function(){return this._scheme},set:function(e){var t=e.message.from;(0,a.isDataObjectURL)(t)?this._scheme=(0,a.divideURL)(t).type:this._scheme=void 0}},{key:"date",get:function(){return this._date},set:function(e){var t=new Date,r=String(t.getDate());1===r.length&&(r="0"+r);var n=String(t.getMonth()+1);1===n.length&&(n="0"+n),this._date=r+"/"+n+"/"+t.getFullYear()}},{key:"domain",get:function(){return this._domain},set:function(e){void 0!==e.message.body.identity&&(this._domain=(0,a.divideEmail)(e.message.body.identity.userProfile.username).domain)}},{key:"type",get:function(){return this._type},set:function(e){var t=e.message;void 0!==t.body.value&&(this._type=t.body.value.resourceType)}},{key:"source",get:function(){return this._source},set:function(e){void 0!==e.message.body.identity&&(this._source=e.message.body.identity.userProfile.username)}},{key:"time",get:function(){return this._time},set:function(e){e=new Date;var t=String(e.getMinutes());1===t.length&&(t="0"+t),this._time=parseInt(String(e.getHours())+t)}},{key:"weekday",get:function(){return this._weekday},set:function(e){this._weekday=String((new Date).getDay())}}]),ReThinkCtx}();t.default=u,e.exports=t.default}])});