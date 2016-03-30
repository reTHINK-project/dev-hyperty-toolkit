(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.activate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = activate;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hello = function Hello() {
  _classCallCheck(this, Hello);

  var className = Hello.name;
  var text = document.createElement('span');
  var textnode = document.createTextNode('text added from the constructor of ' + className);
  text.appendChild(textnode);
  document.getElementsByTagName('body')[0].appendChild(text);
};

function activate(hypertyURL, bus, configuration) {

  return {
    name: 'Hello',
    instance: new Hello(hypertyURL, bus, configuration)
  };
}
module.exports = exports['default'];

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVsbG8vSGVsbG8uaHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNZd0I7Ozs7SUFabEIsUUFFSixTQUZJLEtBRUosR0FBYzt3QkFGVixPQUVVOztBQUNaLE1BQUksWUFBWSxNQUFNLElBQU4sQ0FESjtBQUVaLE1BQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUCxDQUZRO0FBR1osTUFBSSxXQUFXLFNBQVMsY0FBVCxDQUF3Qix3Q0FBd0MsU0FBeEMsQ0FBbkMsQ0FIUTtBQUlaLE9BQUssV0FBTCxDQUFpQixRQUFqQixFQUpZO0FBS1osV0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxFQUF5QyxXQUF6QyxDQUFxRCxJQUFyRCxFQUxZO0NBQWQ7O0FBVWEsU0FBUyxRQUFULENBQWtCLFVBQWxCLEVBQThCLEdBQTlCLEVBQW1DLGFBQW5DLEVBQWtEOztBQUUvRCxTQUFPO0FBQ0wsVUFBTSxPQUFOO0FBQ0EsY0FBVSxJQUFJLEtBQUosQ0FBVSxVQUFWLEVBQXNCLEdBQXRCLEVBQTJCLGFBQTNCLENBQVY7R0FGRixDQUYrRDtDQUFsRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBIZWxsbyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IEhlbGxvLm5hbWU7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGV0IHRleHRub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3RleHQgYWRkZWQgZnJvbSB0aGUgY29uc3RydWN0b3Igb2YgJyArIGNsYXNzTmFtZSk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZCh0ZXh0bm9kZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjdGl2YXRlKGh5cGVydHlVUkwsIGJ1cywgY29uZmlndXJhdGlvbikge1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0hlbGxvJyxcbiAgICBpbnN0YW5jZTogbmV3IEhlbGxvKGh5cGVydHlVUkwsIGJ1cywgY29uZmlndXJhdGlvbilcbiAgfTtcblxufVxuIl19
