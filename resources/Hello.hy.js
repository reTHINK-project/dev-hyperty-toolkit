(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = activate;

var _utils = require('../utils/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hello = function Hello() {
  _classCallCheck(this, Hello);

  console.log('testes');
  console.log((0, _utils.teste)());
};

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'Hello',
    instance: new Hello(hypertyURL, bus, configuration)
  };
}
module.exports = exports['default'];

},{"../utils/utils":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.teste = teste;
function teste() {
  return 'testes';
}

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVsbG8vSGVsbG8uaHkuanMiLCJzcmMvdXRpbHMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNXd0I7O0FBWHhCOzs7O0lBRU0sUUFFSixTQUZJLEtBRUosR0FBYzt3QkFGVixPQUVVOztBQUNaLFVBQVEsR0FBUixDQUFZLFFBQVosRUFEWTtBQUVaLFVBQVEsR0FBUixDQUFZLG1CQUFaLEVBRlk7Q0FBZDs7QUFPYSxTQUFTLFFBQVQsQ0FBa0IsVUFBbEIsRUFBOEIsR0FBOUIsRUFBbUMsYUFBbkMsRUFBa0Q7O0FBRS9ELFNBQU87QUFDTCxVQUFNLE9BQU47QUFDQSxjQUFVLElBQUksS0FBSixDQUFVLFVBQVYsRUFBc0IsR0FBdEIsRUFBMkIsYUFBM0IsQ0FBVjtHQUZGLENBRitEO0NBQWxEOzs7Ozs7Ozs7UUNYQztBQUFULFNBQVMsS0FBVCxHQUFpQjtBQUN0QixTQUFPLFFBQVAsQ0FEc0I7Q0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHt0ZXN0ZX0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuXG5jbGFzcyBIZWxsbyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3RlcycpO1xuICAgIGNvbnNvbGUubG9nKHRlc3RlKCkpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aXZhdGUoaHlwZXJ0eVVSTCwgYnVzLCBjb25maWd1cmF0aW9uKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnSGVsbG8nLFxuICAgIGluc3RhbmNlOiBuZXcgSGVsbG8oaHlwZXJ0eVVSTCwgYnVzLCBjb25maWd1cmF0aW9uKVxuICB9O1xuXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdGVzdGUoKSB7XG4gIHJldHVybiAndGVzdGVzJztcbn1cbiJdfQ==
