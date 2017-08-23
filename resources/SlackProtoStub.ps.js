(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("activate", [], factory);
	else if(typeof exports === 'object')
		exports["activate"] = factory();
	else
		root["activate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 127);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = exec;

var _tinyJsonHttp = __webpack_require__(130);

var _tinyJsonHttp2 = _interopRequireDefault(_tinyJsonHttp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function exec(url, form, callback) {

  // stringify any objects under keys since form is posted as application/x-www-form-urlencoded
  Object.keys(form).forEach(function (key) {
    if (_typeof(form[key]) === 'object') {
      form[key] = JSON.stringify(form[key]);
    }
  });

  // always post
  _tinyJsonHttp2.default.post({
    url: 'https://slack.com/api/' + url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: form
  }, function _res(err, res) {
    // var rateLimit = 'You are sending too many requests. Please relax.'
    if (err) {
      // if request failed bubble the error
      callback(err);
    } else if (res.body && res.body.error) {
      callback(Error(res.body.error));
    } else {
      callback(null, res.body);
    }
  });
}
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validate;

var _api = __webpack_require__(152);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(method, params) {
  // get all the requried params for this method
  var required = _api2.default[method].filter(function (param) {
    return param.required === 'Required';
  });
  // collect any missing params
  var missing = required.filter(function (param) {
    return typeof params[param.name] === 'undefined';
  });
  // optimisitcally assume the best
  var err = false;
  // but have a plan for the worst
  if (missing.length) {
    var bullets = missing.map(function (param) {
      return '- ' + param.name + ' ... ' + param.description;
    });
    var msg = method + ' missing params:\n' + bullets.join('\n');
    err = Error(msg);
  }
  return err;
} //
// validate returns an error object if any required params are missing
//
// example usage:
// 
//   // token and id are required params
//   function apiCall(params, callback) { 
//     let err = validate('api.signature', params)
//     if (err) {
//       callback(err)
//     }
//     else {
//       // do api call
//     }
//   }
//
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(132)
var ieee754 = __webpack_require__(133)
var isArray = __webpack_require__(14)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var processNextTick = __webpack_require__(8);
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = __webpack_require__(7);
util.inherits = __webpack_require__(4);
/*</replacement>*/

var Readable = __webpack_require__(17);
var Writable = __webpack_require__(21);

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  processNextTick(cb, err);
};

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var ClientRequest = __webpack_require__(134)
var extend = __webpack_require__(144)
var statusCodes = __webpack_require__(145)
var url = __webpack_require__(11)

var http = exports

http.request = function (opts, cb) {
	if (typeof opts === 'string')
		opts = url.parse(opts)
	else
		opts = extend(opts)

	// Normally, the page is loaded from http or https, so not specifying a protocol
	// will result in a (valid) protocol-relative url. However, this won't work if
	// the protocol is something else, like 'file:'
	var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''

	var protocol = opts.protocol || defaultProtocol
	var host = opts.hostname || opts.host
	var port = opts.port
	var path = opts.path || '/'

	// Necessary for IPv6 addresses
	if (host && host.indexOf(':') !== -1)
		host = '[' + host + ']'

	// This may be a relative url. The browser should always be able to interpret it correctly.
	opts.url = (host ? (protocol + '//' + host) : '') + (port ? ':' + port : '') + path
	opts.method = (opts.method || 'GET').toUpperCase()
	opts.headers = opts.headers || {}

	// Also valid opts.auth, opts.mode

	var req = new ClientRequest(opts)
	if (cb)
		req.on('response', cb)
	return req
}

http.get = function get (opts, cb) {
	var req = http.request(opts, cb)
	req.end()
	return req
}

http.Agent = function () {}
http.Agent.defaultMaxSockets = 4

http.STATUS_CODES = statusCodes

http.METHODS = [
	'CHECKOUT',
	'CONNECT',
	'COPY',
	'DELETE',
	'GET',
	'HEAD',
	'LOCK',
	'M-SEARCH',
	'MERGE',
	'MKACTIVITY',
	'MKCOL',
	'MOVE',
	'NOTIFY',
	'OPTIONS',
	'PATCH',
	'POST',
	'PROPFIND',
	'PROPPATCH',
	'PURGE',
	'PUT',
	'REPORT',
	'SEARCH',
	'SUBSCRIBE',
	'TRACE',
	'UNLOCK',
	'UNSUBSCRIBE'
]
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(3)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(146);
var util = __webpack_require__(148);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(12);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(149);
exports.encode = exports.stringify = __webpack_require__(150);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtmstart;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function rtmstart(params, callback) {
  var ns = 'rtm.start';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.fetch = isFunction(global.fetch) && isFunction(global.ReadableStream)

exports.blobConstructor = false
try {
	new Blob([new ArrayBuffer(1)])
	exports.blobConstructor = true
} catch (e) {}

// The xhr request to example.com may violate some restrictive CSP configurations,
// so if we're running in a browser that supports `fetch`, avoid calling getXHR()
// and assume support for certain features below.
var xhr
function getXHR () {
	// Cache the xhr value
	if (xhr !== undefined) return xhr

	if (global.XMLHttpRequest) {
		xhr = new global.XMLHttpRequest()
		// If XDomainRequest is available (ie only, where xhr might not work
		// cross domain), use the page location. Otherwise use example.com
		// Note: this doesn't actually make an http request.
		try {
			xhr.open('GET', global.XDomainRequest ? '/' : 'https://example.com')
		} catch(e) {
			xhr = null
		}
	} else {
		// Service workers don't have XHR
		xhr = null
	}
	return xhr
}

function checkTypeSupport (type) {
	var xhr = getXHR()
	if (!xhr) return false
	try {
		xhr.responseType = type
		return xhr.responseType === type
	} catch (e) {}
	return false
}

// For some strange reason, Safari 7.0 reports typeof global.ArrayBuffer === 'object'.
// Safari 7.1 appears to have fixed this bug.
var haveArrayBuffer = typeof global.ArrayBuffer !== 'undefined'
var haveSlice = haveArrayBuffer && isFunction(global.ArrayBuffer.prototype.slice)

// If fetch is supported, then arraybuffer will be supported too. Skip calling
// checkTypeSupport(), since that calls getXHR().
exports.arraybuffer = exports.fetch || (haveArrayBuffer && checkTypeSupport('arraybuffer'))

// These next two tests unavoidably show warnings in Chrome. Since fetch will always
// be used if it's available, just return false for these to avoid the warnings.
exports.msstream = !exports.fetch && haveSlice && checkTypeSupport('ms-stream')
exports.mozchunkedarraybuffer = !exports.fetch && haveArrayBuffer &&
	checkTypeSupport('moz-chunked-arraybuffer')

// If fetch is supported, then overrideMimeType will be supported too. Skip calling
// getXHR().
exports.overrideMimeType = exports.fetch || (getXHR() ? isFunction(getXHR().overrideMimeType) : false)

exports.vbArray = isFunction(global.VBArray)

function isFunction (value) {
	return typeof value === 'function'
}

xhr = null // Help gc

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(21);
exports.Duplex = __webpack_require__(6);
exports.Transform = __webpack_require__(23);
exports.PassThrough = __webpack_require__(142);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var processNextTick = __webpack_require__(8);
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(14);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(18).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(19);
/*</replacement>*/

// TODO(bmeurer): Change this back to const once hole checks are
// properly optimized away early in Ignition+TurboFan.
/*<replacement>*/
var Buffer = __webpack_require__(10).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(7);
util.inherits = __webpack_require__(4);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(136);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(137);
var destroyImpl = __webpack_require__(20);
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(6);

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(22).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(6);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(22).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], self.emit.bind(self, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(5)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18).EventEmitter;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var processNextTick = __webpack_require__(8);
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      processNextTick(emitErrorNT, this, err);
    }
    return;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      processNextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var processNextTick = __webpack_require__(8);
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(7);
util.inherits = __webpack_require__(4);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(141)
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(19);
/*</replacement>*/

/*<replacement>*/
var Buffer = __webpack_require__(10).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*</replacement>*/

var destroyImpl = __webpack_require__(20);

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(6);

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(6);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = _isUint8Array(chunk) && !state.objectMode;

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    processNextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    processNextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      processNextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(138).setImmediate, __webpack_require__(2)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = __webpack_require__(3).Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(6);

/*<replacement>*/
var util = __webpack_require__(7);
util.inherits = __webpack_require__(4);
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return stream.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er, data) {
      done(stream, er, data);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data !== null && data !== undefined) stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var http = __webpack_require__(9);

var https = module.exports;

for (var key in http) {
    if (http.hasOwnProperty(key)) https[key] = http[key];
};

https.request = function (params, cb) {
    if (!params) params = {};
    params.scheme = 'https';
    params.protocol = 'https:';
    return http.request.call(this, params, cb);
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authtest;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function authtest(params, callback) {
  var ns = 'auth.test';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = botsinfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function botsinfo(params, callback) {
  var ns = 'bots.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsarchive;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsarchive(params, callback) {
  var ns = 'channels.archive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelscreate;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelscreate(params, callback) {
  var ns = 'channels.create';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelshistory;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelshistory(params, callback) {
  var ns = 'channels.history';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsinfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsinfo(params, callback) {
  var ns = 'channels.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsinvite;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsinvite(params, callback) {
  var ns = 'channels.invite';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsjoin;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsjoin(params, callback) {
  var ns = 'channels.join';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelskick;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelskick(params, callback) {
  var ns = 'channels.kick';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsleave;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsleave(params, callback) {
  var ns = 'channels.leave';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelslist(params, callback) {
  var ns = 'channels.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsmark;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsmark(params, callback) {
  var ns = 'channels.mark';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsrename;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsrename(params, callback) {
  var ns = 'channels.rename';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsreplies;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsreplies(params, callback) {
  var ns = 'channels.replies';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelssetPurpose;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelssetPurpose(params, callback) {
  var ns = 'channels.setPurpose';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelssetTopic;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelssetTopic(params, callback) {
  var ns = 'channels.setTopic';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = channelsunarchive;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function channelsunarchive(params, callback) {
  var ns = 'channels.unarchive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatdelete;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatdelete(params, callback) {
  var ns = 'chat.delete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatmeMessage;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatmeMessage(params, callback) {
  var ns = 'chat.meMessage';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatpostMessage;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatpostMessage(params, callback) {
  var ns = 'chat.postMessage';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatunfurl;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatunfurl(params, callback) {
  var ns = 'chat.unfurl';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chatupdate;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function chatupdate(params, callback) {
  var ns = 'chat.update';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndendDnd;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndendDnd(params, callback) {
  var ns = 'dnd.endDnd';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndendSnooze;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndendSnooze(params, callback) {
  var ns = 'dnd.endSnooze';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndinfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndinfo(params, callback) {
  var ns = 'dnd.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndsetSnooze;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndsetSnooze(params, callback) {
  var ns = 'dnd.setSnooze';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dndteamInfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function dndteamInfo(params, callback) {
  var ns = 'dnd.teamInfo';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = emojilist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function emojilist(params, callback) {
  var ns = 'emoji.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filescommentsadd;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filescommentsadd(params, callback) {
  var ns = 'files.comments.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filescommentsdelete;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filescommentsdelete(params, callback) {
  var ns = 'files.comments.delete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filescommentsedit;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filescommentsedit(params, callback) {
  var ns = 'files.comments.edit';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filesdelete;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filesdelete(params, callback) {
  var ns = 'files.delete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filesinfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filesinfo(params, callback) {
  var ns = 'files.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fileslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function fileslist(params, callback) {
  var ns = 'files.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filesrevokePublicURL;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filesrevokePublicURL(params, callback) {
  var ns = 'files.revokePublicURL';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filessharedPublicURL;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filessharedPublicURL(params, callback) {
  var ns = 'files.sharedPublicURL';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filesupload;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function filesupload(params, callback) {
  var ns = 'files.upload';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsarchive;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsarchive(params, callback) {
  var ns = 'groups.archive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsclose;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsclose(params, callback) {
  var ns = 'groups.close';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupscreate;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupscreate(params, callback) {
  var ns = 'groups.create';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupscreateChild;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupscreateChild(params, callback) {
  var ns = 'groups.createChild';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupshistory;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupshistory(params, callback) {
  var ns = 'groups.history';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsinfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsinfo(params, callback) {
  var ns = 'groups.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsinvite;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsinvite(params, callback) {
  var ns = 'groups.invite';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupskick;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupskick(params, callback) {
  var ns = 'groups.kick';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsleave;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsleave(params, callback) {
  var ns = 'groups.leave';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupslist(params, callback) {
  var ns = 'groups.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsmark;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsmark(params, callback) {
  var ns = 'groups.mark';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsopen;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsopen(params, callback) {
  var ns = 'groups.open';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsrename;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsrename(params, callback) {
  var ns = 'groups.rename';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupssetPurpose;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupssetPurpose(params, callback) {
  var ns = 'groups.setPurpose';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupssetTopic;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupssetTopic(params, callback) {
  var ns = 'groups.setTopic';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsunarchive;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsunarchive(params, callback) {
  var ns = 'groups.unarchive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imclose;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imclose(params, callback) {
  var ns = 'im.close';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imhistory;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imhistory(params, callback) {
  var ns = 'im.history';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imlist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imlist(params, callback) {
  var ns = 'im.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immark;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function immark(params, callback) {
  var ns = 'im.mark';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imopen;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imopen(params, callback) {
  var ns = 'im.open';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimclose;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimclose(params, callback) {
  var ns = 'mpim.close';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimhistory;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimhistory(params, callback) {
  var ns = 'mpim.history';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimlist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimlist(params, callback) {
  var ns = 'mpim.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimmark;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimmark(params, callback) {
  var ns = 'mpim.mark';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimopen;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimopen(params, callback) {
  var ns = 'mpim.open';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pinsadd;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function pinsadd(params, callback) {
  var ns = 'pins.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pinslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function pinslist(params, callback) {
  var ns = 'pins.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pinsremove;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function pinsremove(params, callback) {
  var ns = 'pins.remove';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactionsadd;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reactionsadd(params, callback) {
  var ns = 'reactions.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactionsget;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reactionsget(params, callback) {
  var ns = 'reactions.get';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactionslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reactionslist(params, callback) {
  var ns = 'reactions.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reactionsremove;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reactionsremove(params, callback) {
  var ns = 'reactions.remove';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remindersadd;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function remindersadd(params, callback) {
  var ns = 'reminders.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reminderscomplete;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reminderscomplete(params, callback) {
  var ns = 'reminders.complete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remindersdelete;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function remindersdelete(params, callback) {
  var ns = 'reminders.delete';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remindersinfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function remindersinfo(params, callback) {
  var ns = 'reminders.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reminderslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function reminderslist(params, callback) {
  var ns = 'reminders.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rtmconnect;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function rtmconnect(params, callback) {
  var ns = 'rtm.connect';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchall;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function searchall(params, callback) {
  var ns = 'search.all';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchfiles;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function searchfiles(params, callback) {
  var ns = 'search.files';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = searchmessages;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function searchmessages(params, callback) {
  var ns = 'search.messages';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = starsadd;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function starsadd(params, callback) {
  var ns = 'stars.add';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = starslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function starslist(params, callback) {
  var ns = 'stars.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = starsremove;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function starsremove(params, callback) {
  var ns = 'stars.remove';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teamaccessLogs;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teamaccessLogs(params, callback) {
  var ns = 'team.accessLogs';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teambillableInfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teambillableInfo(params, callback) {
  var ns = 'team.billableInfo';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teaminfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teaminfo(params, callback) {
  var ns = 'team.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teamintegrationLogs;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teamintegrationLogs(params, callback) {
  var ns = 'team.integrationLogs';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = teamprofileget;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function teamprofileget(params, callback) {
  var ns = 'team.profile.get';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupscreate;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupscreate(params, callback) {
  var ns = 'usergroups.create';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsdisable;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsdisable(params, callback) {
  var ns = 'usergroups.disable';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsenable;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsenable(params, callback) {
  var ns = 'usergroups.enable';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupslist(params, callback) {
  var ns = 'usergroups.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsupdate;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsupdate(params, callback) {
  var ns = 'usergroups.update';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsuserslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsuserslist(params, callback) {
  var ns = 'usergroups.users.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usergroupsusersupdate;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usergroupsusersupdate(params, callback) {
  var ns = 'usergroups.users.update';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersgetPresence;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersgetPresence(params, callback) {
  var ns = 'users.getPresence';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersidentity;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersidentity(params, callback) {
  var ns = 'users.identity';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersinfo;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersinfo(params, callback) {
  var ns = 'users.info';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userslist;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function userslist(params, callback) {
  var ns = 'users.list';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersprofileget;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersprofileget(params, callback) {
  var ns = 'users.profile.get';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersprofileset;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersprofileset(params, callback) {
  var ns = 'users.profile.set';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userssetActive;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function userssetActive(params, callback) {
  var ns = 'users.setActive';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userssetPresence;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function userssetPresence(params, callback) {
  var ns = 'users.setPresence';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = activate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slack__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_slack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_service_framework_dist_Syncher__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_service_framework_dist_Syncher___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_service_framework_dist_Syncher__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_service_framework_dist_IdentityFactory__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_service_framework_dist_IdentityFactory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_service_framework_dist_IdentityFactory__);




class SlackProtoStub {

  constructor(runtimeProtoStubURL, bus, config) {
    if (!runtimeProtoStubURL) throw new Error('The runtimeProtoStubURL is a needed parameter');
    if (!bus) throw new Error('The bus is a needed parameter');
    if (!config) throw new Error('The config is a needed parameter');

    console.log('[SlackProtostub] Constructor Loaded');

    let _this = this;

    this._subscribedList = [];
    this._messageHistoryControl = {};
    this._usersList = [];
    this._groupsList = [];
    this._channelsList = [];
    this._imsList = [];
    this._observer;
    this._id = 0;
    this._continuousOpen = true;
    this._token = '';

    this._runtimeProtoStubURL = runtimeProtoStubURL;
    this._bus = bus;
    this._config = config;

    this._runtimeSessionURL = config.runtimeURL;
    this._reOpen = false;
    this._slack = __WEBPACK_IMPORTED_MODULE_0_slack___default.a;
    console.log('[SlackProtostub] instantiate syncher with runtimeUrl', runtimeProtoStubURL);
    this._syncher = new __WEBPACK_IMPORTED_MODULE_1_service_framework_dist_Syncher__["Syncher"](runtimeProtoStubURL, bus, config);

    this._syncher.onNotification(event => {
      console.log('[SlackProtostub] On Syncher Notification', event);
    });

    bus.addListener('*', msg => {
      console.log('[SlackProtostub] new msg', msg);
      if (msg.body.hasOwnProperty('identity') && msg.body.identity.hasOwnProperty('access_token') && msg.body.identity.access_token) {

        let token = msg.body.identity.access_token;
        this._token = token;

        _this._open(token, () => {
          if (_this._filter(msg)) {

            console.log('[SlackProtostub] After Filter', msg);

            let schemaUrl = msg.body.schema;
            if (schemaUrl && msg.body.value.name) {

              let schemaSplitted = schemaUrl.split('/');

              if (schemaSplitted[schemaSplitted.length - 1] === 'Communication') {

                _this._getSlackInformation(msg.to).then(userInfo => {

                  console.log('Slack User information: ', userInfo);

                  // username, userURL, avatar, cn, locale, idp, assertion
                  let identity = new __WEBPACK_IMPORTED_MODULE_2_service_framework_dist_IdentityFactory___default.a(userInfo.name, 'slack://slack.com/' + userInfo.name + '@slack.com', userInfo.profile.image_192, userInfo.name, '', 'slack.com');

                  let subscriptionUrl = msg.from;

                  // for session resume
                  if (msg.body.resource) {
                    subscriptionUrl = msg.body.resource + '/subscription';
                  }

                  console.log('[SlackProtostub] subscribing object', subscriptionUrl);

                  _this._subscribe(schemaUrl, subscriptionUrl, identity).then(result => {
                    if (result) {
                      console.log('[SlackProtostub] subscribe result', result);

                      _this._token = token;

                      if (msg.body.identity.userProfile.id) {
                        _this._id = msg.body.identity.userProfile.id;
                      }

                      _this._channelStatusInfo(msg, userInfo.id, subscriptionUrl.substring(0, subscriptionUrl.lastIndexOf('/')));
                    }
                  });
                });
              }
            }
          }
        });
      }
    });

    _this._sendStatus('created');
  }

  get config() {
    return this._config;
  }

  get runtimeSession() {
    return this._runtimeSessionURL;
  }

  _getSlackInformation(to) {
    let _this = this;

    return new Promise((resolve, reject) => {

      let URLUsersList = 'https://slack.com/api/users.list?token=' + _this._token;
      let URLGroupsList = 'https://slack.com/api/groups.list?token=' + _this._token;
      let URLChannelsList = 'https://slack.com/api/channels.list?token=' + _this._token;
      let URLImsList = 'https://slack.com/api/im.list?token=' + _this._token;

      let UsersListPromise = _this._sendHTTPRequest('GET', URLUsersList);
      let GroupsListPromise = _this._sendHTTPRequest('GET', URLGroupsList);
      let ChannelsListPromise = _this._sendHTTPRequest('GET', URLChannelsList);
      let ImsListPromise = _this._sendHTTPRequest('GET', URLImsList);

      Promise.all([UsersListPromise, GroupsListPromise, ChannelsListPromise, ImsListPromise]).then(function (result) {
        _this._usersList = result[0].members;
        _this._groupsList = result[1].groups;
        _this._channelsList = result[2].channels;
        _this._imsList = result[3].ims;

        //get userID to invite
        let toSplitted = to.split('://')[1];
        let user = toSplitted.split('@')[0];
        let userInfo = _this._usersList.filter(function (value) {
          return value.name === user;
        })[0];

        resolve(userInfo);
      }, function (error) {
        console.error('[SlackProtostub] ', error);
        reject(error);
      });
    });
  }

  _channelStatusInfo(msg, userID, channelObjUrl) {
    let _this = this;
    let channelName = msg.body.value.name.split(' ').join('-');
    let channelExists = _this._channelsList.filter(function (value) {
      return value.name === channelName;
    })[0];

    // if channel exist, invite user, else channel need to be created and then invite user
    if (channelExists) {
      console.log('[SlackProtostub] channel exist', channelExists);

      let channelMembers = _this._channelsList.filter(function (value) {
        return value.name === channelName;
      })[0].members;
      let alreadyOnChannel = false;

      channelMembers.forEach(function (s) {
        if (s === userID) {
          alreadyOnChannel = true;
        }
      });
      console.log('[SlackProtostub] channel members', channelMembers, '   ->', alreadyOnChannel);

      let count = 0;
      let key = 0;
      _this._subscribedList.forEach(function (obj) {
        if (obj.urlDataObj === channelObjUrl) {
          key = count;
        }
        count++;
      });
      _this._subscribedList[key].channelID = channelExists.id;

      // if user isnt on Channel invite, else just set channelID
      if (!alreadyOnChannel) {
        _this._invite(userID, channelExists.id);
      }
    } else {
      _this._createChannel(channelName, channelObjUrl).then(function (result) {
        console.log('[SlackProtostub]  after create channel ', result);
        if (result) {
          _this._invite(userID, '', channelObjUrl);
        }
      });
    }
  }

  _filter(msg) {
    if (msg.body && msg.body.via === this._runtimeProtoStubURL) {
      return false;
    } else {
      return true;
    }
  }

  _open(token, callback) {
    let _this = this;

    if (!_this._session) {
      console.log('[SlackProtostub] creating Session for token:', token);
      _this._sendStatus('in-progress');
      _this._session = _this._slack.rtm.client();
      _this._session.createdTime = new Date().getTime() / 1000;
      _this._session.listen({ token });
      _this._session.message(message => {
        console.log('[SlackProtostub] new message on session', message);
        _this._handleNewMessage(message);
      });
      _this._sendStatus('live');
    } else {
      console.log('[SlackProtostub] session already exist');
    }
    setTimeout(() => {
      callback();
    });
  }

  _handleNewMessage(message) {
    let _this = this;
    let channelID = '';
    let observer;
    _this._subscribedList.forEach(function (obj) {
      if (obj.channelID === message.channel) {
        channelID = obj.channelID;
        observer = obj.observer;
      }
    });

    if (message.channel && message.ts > _this._session.createdTime) {
      if (message.channel === channelID && message.user !== _this._id || !message.hasOwnProperty('bot_id') && message.user === _this._id && message.channel === channelID) {

        _this._getUserInfo(message.user).then(identity => {
          let msg = {
            type: "chat",
            content: message.text };
          console.log('[SlackProtostub] msg to addChild', msg, '     identity:', identity);
          observer.addChild('resources', msg, identity);
        });
      }
    }
  }

  /*****************************************************************************************************
  * It retrieves information from a slack user and creates a reTHINK Identity object with it
  * @param {string} user - slack user id
  * @return {Promise<Object>} Returns a promise with an Identity object resolved
  *******************************************************************************************************/

  _getUserInfo(user) {
    let _this = this;

    return new Promise(function (resolve) {
      _this._slack.users.info({ token: _this._token, user: user }, (err, data) => {
        if (err) {
          console.error('[SlackProtostub] error', err);
        } else {

          console.log('[SlackProtostub getUserInfo] ', data);
          let identity = new __WEBPACK_IMPORTED_MODULE_2_service_framework_dist_IdentityFactory___default.a(data.user.name, 'slack://slack.com/' + data.user.name + '@slack.com', data.user.profile.image_192, data.user.name, '', 'slack.com');

          resolve(identity);
        }
      });
    });
  }

  _subscribe(schema, urlDataObj, identity) {
    let _this = this;

    return new Promise(function (resolve) {
      let isSubscribed = false;
      console.log('[SlackProtostub] Identity Subscribe ->', identity);
      _this._subscribedList.forEach(function (obj) {
        console.log('[SlackProtostub] Subscription List ->', obj);
        if (obj.urlDataObj === urlDataObj && obj.subscribed && obj.identity.userProfile.userURL === identity.userProfile.userURL) {
          isSubscribed = true;
        }
      });

      if (isSubscribed) {
        console.log('[SlackProtostub] Already Subscribed');
        return resolve(true);
      }

      let objectDescURL = schema;
      let dataObjectUrl = urlDataObj.substring(0, urlDataObj.lastIndexOf('/'));

      console.log('[SlackProtostub] new subscription for schema:', objectDescURL, ' and dataObject:', dataObjectUrl);

      return _this._syncher.subscribe(objectDescURL, dataObjectUrl, false, false, false, identity).then(observer => {

        let subscription = { urlDataObj: urlDataObj.substring(0, urlDataObj.lastIndexOf('/')), schema: schema, subscribed: true, identity: identity, observer: observer };

        _this._subscribedList.push(subscription);
        console.log('[SlackProtostub] subscribed', dataObjectUrl);
        console.log('[SlackProtostub] Observer', observer);
        observer.onAddChild(child => {
          console.info('[SlackProtostub] Observer - Add Child: ', child);
          console.info('[SlackProtostub] Observer - Message History Control ', _this._messageHistoryControl);

          //check if for each child message has been delivered, and control that for when we have more than one slack user subscribed
          let currentID = child.childId.split('#')[1];
          // check if this child already sent messages
          let channelObjUrl = child.url.substring(0, child.url.lastIndexOf('/children'));
          let channelID;

          _this._subscribedList.forEach(function (obj) {
            if (obj.urlDataObj === channelObjUrl) {
              channelID = obj.channelID;
            }
          });

          if (_this._messageHistoryControl.hasOwnProperty(channelObjUrl)) {

            // in that case check if the currentID its equal to oldID
            let oldID = _this._messageHistoryControl[channelObjUrl].id;
            if (_this._messageHistoryControl[channelObjUrl].id !== currentID) {
              _this._messageHistoryControl[channelObjUrl].id = currentID;
              _this._deliver(child, channelID);
            }
          } else {
            _this._messageHistoryControl[channelObjUrl] = { id: currentID };
            _this._deliver(child, channelID);
          }
        });

        observer.onChange('*', event => {
          console.log('[SlackProtostub] Observer - onChange: ', event);
        });
        resolve(true);
      }).catch(error => {
        console.error('[SlackProtostub] Subscribe', error);
        resolve(false);
      });
    });
  }

  _invite(idUser, idChannel = '', channelObjUrl) {
    let _this = this;

    if (idChannel == '') {
      _this._subscribedList.forEach(function (obj) {
        if (obj.urlDataObj === channelObjUrl) {
          idChannel = obj.channelID;
        }
      });
    }

    let toInvite = { token: _this._token, channel: idChannel, user: idUser };

    _this._slack.channels.invite(toInvite, (err, data) => {
      if (err) {
        console.error('[SlackProtostub] error', err);
      } else {

        console.log('[SlackProtostub] user invited with sucess', data);
      }
    });
  }

  _deliver(child, channelID) {
    let _this = this;

    if (channelID && child.value.content) {

      if (child.hasOwnProperty('identity') && child.identity.hasOwnProperty('userProfile') && child.identity.userProfile.hasOwnProperty('username') && child.identity.userProfile.username) {

        let text = '' + child.identity.userProfile.username + ': ' + child.value.content;
        let message = { as_user: true, token: _this._token, channel: channelID, text: text };
        console.log('[SlackProtostub] (PostMessage slack api) token(', _this._token, ')  channel(', channelID, ') text(', child.value.content, ')');

        _this._slack.chat.postMessage(message, function (err, data) {
          if (err) {
            console.error('[SlackProtostub] error', err);
          } else {
            console.log('[SlackProtostub] PostMessage with Sucess', data);
          }
        });
      }
    }
  }

  _createChannel(channelName, channelObjUrl) {
    let _this = this;

    return new Promise(function (resolve) {

      let toCreate = { token: _this._token, name: channelName };
      _this._slack.channels.create(toCreate, (err, data) => {
        if (err) {
          console.error('[SlackProtostub] ', err);
        } else {
          if (data.ok) {
            console.log('[SlackProtostub] Channel Created with Sucess ', data);
            let count = 0;
            let key = 0;
            _this._subscribedList.forEach(function (obj) {
              if (obj.urlDataObj === channelObjUrl) {
                key = count;
              }
              count++;
            });
            _this._subscribedList[key].channelID = data.channel.id;
            resolve(true);
          }
        }
      });
    });
  }

  _sendHTTPRequest(method, url) {
    return new Promise(function (resolve, reject) {
      let xhr = new XMLHttpRequest();
      if ('withCredentials' in xhr) {
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest !== 'undefined') {
        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        // Otherwise, CORS is not supported by the browser.
        xhr = null;
      }
      if (xhr) {
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              let info = JSON.parse(xhr.responseText);
              resolve(info);
            } else if (xhr.status === 400) {
              reject('There was an error processing the token');
            } else {
              reject('something else other than 200 was returned');
            }
          }
        };
        xhr.send();
      } else {
        reject('CORS not supported');
      }
    });
  }

  _sendStatus(value, reason) {
    let _this = this;

    console.log('[SlackProtostub status changed] to ', value);

    _this._state = value;

    let msg = {
      type: 'update',
      from: _this._runtimeProtoStubURL,
      to: _this._runtimeProtoStubURL + '/status',
      body: {
        value: value
      }
    };

    if (reason) {
      msg.body.desc = reason;
    }

    _this._bus.postMessage(msg);
  }
}

function activate(url, bus, config) {
  return {
    name: 'SlackProtoStub',
    instance: new SlackProtoStub(url, bus, config)
  };
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = __webpack_require__(129);

var _api2 = _interopRequireDefault(_api);

var _api3 = __webpack_require__(153);

var _api4 = _interopRequireDefault(_api3);

var _bots = __webpack_require__(159);

var _bots2 = _interopRequireDefault(_bots);

var _auth = __webpack_require__(25);

var _auth2 = _interopRequireDefault(_auth);

var _auth3 = __webpack_require__(160);

var _auth4 = _interopRequireDefault(_auth3);

var _channels = __webpack_require__(161);

var _channels2 = _interopRequireDefault(_channels);

var _chat = __webpack_require__(162);

var _chat2 = _interopRequireDefault(_chat);

var _dnd = __webpack_require__(163);

var _dnd2 = _interopRequireDefault(_dnd);

var _emoji = __webpack_require__(52);

var _emoji2 = _interopRequireDefault(_emoji);

var _files = __webpack_require__(164);

var _files2 = _interopRequireDefault(_files);

var _groups = __webpack_require__(165);

var _groups2 = _interopRequireDefault(_groups);

var _im = __webpack_require__(166);

var _im2 = _interopRequireDefault(_im);

var _mpim = __webpack_require__(167);

var _mpim2 = _interopRequireDefault(_mpim);

var _oauth = __webpack_require__(168);

var _oauth2 = _interopRequireDefault(_oauth);

var _reactions = __webpack_require__(169);

var _reactions2 = _interopRequireDefault(_reactions);

var _reminders = __webpack_require__(170);

var _reminders2 = _interopRequireDefault(_reminders);

var _pins = __webpack_require__(171);

var _pins2 = _interopRequireDefault(_pins);

var _rtm = __webpack_require__(172);

var _rtm2 = _interopRequireDefault(_rtm);

var _rtm3 = __webpack_require__(13);

var _rtm4 = _interopRequireDefault(_rtm3);

var _rtm5 = __webpack_require__(100);

var _rtm6 = _interopRequireDefault(_rtm5);

var _search = __webpack_require__(174);

var _search2 = _interopRequireDefault(_search);

var _stars = __webpack_require__(175);

var _stars2 = _interopRequireDefault(_stars);

var _team = __webpack_require__(176);

var _team2 = _interopRequireDefault(_team);

var _usergroups = __webpack_require__(177);

var _usergroups2 = _interopRequireDefault(_usergroups);

var _users = __webpack_require__(178);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  api: { test: _api2.default, client: _api4.default },
  auth: { test: _auth2.default, revoke: _auth4.default },
  bots: _bots2.default,
  channels: _channels2.default,
  chat: _chat2.default,
  dnd: _dnd2.default,
  emoji: { list: _emoji2.default },
  files: _files2.default,
  groups: _groups2.default,
  im: _im2.default,
  mpim: _mpim2.default,
  oauth: { access: _oauth2.default },
  reactions: _reactions2.default,
  reminders: _reminders2.default,
  pins: _pins2.default,
  rtm: { client: _rtm2.default, start: _rtm4.default, connect: _rtm6.default },
  search: _search2.default,
  stars: _stars2.default,
  team: _team2.default,
  usergroups: _usergroups2.default,
  users: _users2.default
};
module.exports = exports['default'];

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apitest;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function apitest(params, callback) {
  var ns = 'api.test';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var _read = __webpack_require__(131)
var _write = __webpack_require__(151)

module.exports = {
  get: _read,
  post: _write.bind({}, 'POST'),
  put: _write.bind({}, 'PUT'),
  del: _write.bind({}, 'DELETE'),
}


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var http = __webpack_require__(9)
var https = __webpack_require__(24)
var url = __webpack_require__(11)
var qs = __webpack_require__(12)

module.exports = function _read(options, callback) {

  // require options.url or fail noisily 
  if (!options.url) {
    throw Error('options.url required')
  }

  // parse out the options from options.url
  var opts = url.parse(options.url)

  // check for additional query params
  if (options.data) {
    var isSearch = !!opts.search
    options.url += (isSearch? '&' : '?') + qs.stringify(options.data)
    opts = url.parse(options.url)
  }

  var method = opts.protocol === 'https:'? https.get : http.get

  opts.rejectUnauthorized = false
  opts.headers = options.headers || {}
  opts.headers['User-Agent'] = opts.headers['User-Agent'] || 'tiny-http'
  opts.headers['Content-Type'] = opts.headers['Content-Type'] || 'application/json'
  
  // make a request
  var req = method(opts, function __res(res) {
   
    var raw = []

    var ok = res.statusCode >= 200 && res.statusCode < 300
    if (!ok) {
      callback(Error('GET failed with: ' + res.statusCode))
      res.resume()
      return
    }
 
    res.on('data', function __data(chunk) {
      raw.push(chunk)
    })

    res.on('end', function __end() {
      var err = null
      var result = null
      try {
        var isJSON = res.headers['content-type'].startsWith('application/json')
        var rawData = Buffer.concat(raw).toString()
        result = isJSON? JSON.parse(rawData) : rawData
      } 
      catch (e) {
        err = e
      }
      callback(err, {body:result, headers:res.headers})
    })
  })
  
  req.on('error', callback)
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 133 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, global, process) {var capability = __webpack_require__(15)
var inherits = __webpack_require__(4)
var response = __webpack_require__(135)
var stream = __webpack_require__(16)
var toArrayBuffer = __webpack_require__(143)

var IncomingMessage = response.IncomingMessage
var rStates = response.readyStates

function decideMode (preferBinary, useFetch) {
	if (capability.fetch && useFetch) {
		return 'fetch'
	} else if (capability.mozchunkedarraybuffer) {
		return 'moz-chunked-arraybuffer'
	} else if (capability.msstream) {
		return 'ms-stream'
	} else if (capability.arraybuffer && preferBinary) {
		return 'arraybuffer'
	} else if (capability.vbArray && preferBinary) {
		return 'text:vbarray'
	} else {
		return 'text'
	}
}

var ClientRequest = module.exports = function (opts) {
	var self = this
	stream.Writable.call(self)

	self._opts = opts
	self._body = []
	self._headers = {}
	if (opts.auth)
		self.setHeader('Authorization', 'Basic ' + new Buffer(opts.auth).toString('base64'))
	Object.keys(opts.headers).forEach(function (name) {
		self.setHeader(name, opts.headers[name])
	})

	var preferBinary
	var useFetch = true
	if (opts.mode === 'disable-fetch' || 'timeout' in opts) {
		// If the use of XHR should be preferred and includes preserving the 'content-type' header.
		// Force XHR to be used since the Fetch API does not yet support timeouts.
		useFetch = false
		preferBinary = true
	} else if (opts.mode === 'prefer-streaming') {
		// If streaming is a high priority but binary compatibility and
		// the accuracy of the 'content-type' header aren't
		preferBinary = false
	} else if (opts.mode === 'allow-wrong-content-type') {
		// If streaming is more important than preserving the 'content-type' header
		preferBinary = !capability.overrideMimeType
	} else if (!opts.mode || opts.mode === 'default' || opts.mode === 'prefer-fast') {
		// Use binary if text streaming may corrupt data or the content-type header, or for speed
		preferBinary = true
	} else {
		throw new Error('Invalid value for opts.mode')
	}
	self._mode = decideMode(preferBinary, useFetch)

	self.on('finish', function () {
		self._onFinish()
	})
}

inherits(ClientRequest, stream.Writable)

ClientRequest.prototype.setHeader = function (name, value) {
	var self = this
	var lowerName = name.toLowerCase()
	// This check is not necessary, but it prevents warnings from browsers about setting unsafe
	// headers. To be honest I'm not entirely sure hiding these warnings is a good thing, but
	// http-browserify did it, so I will too.
	if (unsafeHeaders.indexOf(lowerName) !== -1)
		return

	self._headers[lowerName] = {
		name: name,
		value: value
	}
}

ClientRequest.prototype.getHeader = function (name) {
	var header = this._headers[name.toLowerCase()]
	if (header)
		return header.value
	return null
}

ClientRequest.prototype.removeHeader = function (name) {
	var self = this
	delete self._headers[name.toLowerCase()]
}

ClientRequest.prototype._onFinish = function () {
	var self = this

	if (self._destroyed)
		return
	var opts = self._opts

	var headersObj = self._headers
	var body = null
	if (opts.method !== 'GET' && opts.method !== 'HEAD') {
		if (capability.blobConstructor) {
			body = new global.Blob(self._body.map(function (buffer) {
				return toArrayBuffer(buffer)
			}), {
				type: (headersObj['content-type'] || {}).value || ''
			})
		} else {
			// get utf8 string
			body = Buffer.concat(self._body).toString()
		}
	}

	// create flattened list of headers
	var headersList = []
	Object.keys(headersObj).forEach(function (keyName) {
		var name = headersObj[keyName].name
		var value = headersObj[keyName].value
		if (Array.isArray(value)) {
			value.forEach(function (v) {
				headersList.push([name, v])
			})
		} else {
			headersList.push([name, value])
		}
	})

	if (self._mode === 'fetch') {
		global.fetch(self._opts.url, {
			method: self._opts.method,
			headers: headersList,
			body: body || undefined,
			mode: 'cors',
			credentials: opts.withCredentials ? 'include' : 'same-origin'
		}).then(function (response) {
			self._fetchResponse = response
			self._connect()
		}, function (reason) {
			self.emit('error', reason)
		})
	} else {
		var xhr = self._xhr = new global.XMLHttpRequest()
		try {
			xhr.open(self._opts.method, self._opts.url, true)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}

		// Can't set responseType on really old browsers
		if ('responseType' in xhr)
			xhr.responseType = self._mode.split(':')[0]

		if ('withCredentials' in xhr)
			xhr.withCredentials = !!opts.withCredentials

		if (self._mode === 'text' && 'overrideMimeType' in xhr)
			xhr.overrideMimeType('text/plain; charset=x-user-defined')

		if ('timeout' in opts) {
			xhr.timeout = opts.timeout
			xhr.ontimeout = function () {
				self.emit('timeout')
			}
		}

		headersList.forEach(function (header) {
			xhr.setRequestHeader(header[0], header[1])
		})

		self._response = null
		xhr.onreadystatechange = function () {
			switch (xhr.readyState) {
				case rStates.LOADING:
				case rStates.DONE:
					self._onXHRProgress()
					break
			}
		}
		// Necessary for streaming in Firefox, since xhr.response is ONLY defined
		// in onprogress, not in onreadystatechange with xhr.readyState = 3
		if (self._mode === 'moz-chunked-arraybuffer') {
			xhr.onprogress = function () {
				self._onXHRProgress()
			}
		}

		xhr.onerror = function () {
			if (self._destroyed)
				return
			self.emit('error', new Error('XHR error'))
		}

		try {
			xhr.send(body)
		} catch (err) {
			process.nextTick(function () {
				self.emit('error', err)
			})
			return
		}
	}
}

/**
 * Checks if xhr.status is readable and non-zero, indicating no error.
 * Even though the spec says it should be available in readyState 3,
 * accessing it throws an exception in IE8
 */
function statusValid (xhr) {
	try {
		var status = xhr.status
		return (status !== null && status !== 0)
	} catch (e) {
		return false
	}
}

ClientRequest.prototype._onXHRProgress = function () {
	var self = this

	if (!statusValid(self._xhr) || self._destroyed)
		return

	if (!self._response)
		self._connect()

	self._response._onXHRProgress()
}

ClientRequest.prototype._connect = function () {
	var self = this

	if (self._destroyed)
		return

	self._response = new IncomingMessage(self._xhr, self._fetchResponse, self._mode)
	self._response.on('error', function(err) {
		self.emit('error', err)
	})

	self.emit('response', self._response)
}

ClientRequest.prototype._write = function (chunk, encoding, cb) {
	var self = this

	self._body.push(chunk)
	cb()
}

ClientRequest.prototype.abort = ClientRequest.prototype.destroy = function () {
	var self = this
	self._destroyed = true
	if (self._response)
		self._response._destroyed = true
	if (self._xhr)
		self._xhr.abort()
	// Currently, there isn't a way to truly abort a fetch.
	// If you like bikeshedding, see https://github.com/whatwg/fetch/issues/27
}

ClientRequest.prototype.end = function (data, encoding, cb) {
	var self = this
	if (typeof data === 'function') {
		cb = data
		data = undefined
	}

	stream.Writable.prototype.end.call(self, data, encoding, cb)
}

ClientRequest.prototype.flushHeaders = function () {}
ClientRequest.prototype.setTimeout = function () {}
ClientRequest.prototype.setNoDelay = function () {}
ClientRequest.prototype.setSocketKeepAlive = function () {}

// Taken from http://www.w3.org/TR/XMLHttpRequest/#the-setrequestheader%28%29-method
var unsafeHeaders = [
	'accept-charset',
	'accept-encoding',
	'access-control-request-headers',
	'access-control-request-method',
	'connection',
	'content-length',
	'cookie',
	'cookie2',
	'date',
	'dnt',
	'expect',
	'host',
	'keep-alive',
	'origin',
	'referer',
	'te',
	'trailer',
	'transfer-encoding',
	'upgrade',
	'user-agent',
	'via'
]

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer, __webpack_require__(2), __webpack_require__(5)))

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer, global) {var capability = __webpack_require__(15)
var inherits = __webpack_require__(4)
var stream = __webpack_require__(16)

var rStates = exports.readyStates = {
	UNSENT: 0,
	OPENED: 1,
	HEADERS_RECEIVED: 2,
	LOADING: 3,
	DONE: 4
}

var IncomingMessage = exports.IncomingMessage = function (xhr, response, mode) {
	var self = this
	stream.Readable.call(self)

	self._mode = mode
	self.headers = {}
	self.rawHeaders = []
	self.trailers = {}
	self.rawTrailers = []

	// Fake the 'close' event, but only once 'end' fires
	self.on('end', function () {
		// The nextTick is necessary to prevent the 'request' module from causing an infinite loop
		process.nextTick(function () {
			self.emit('close')
		})
	})

	if (mode === 'fetch') {
		self._fetchResponse = response

		self.url = response.url
		self.statusCode = response.status
		self.statusMessage = response.statusText
		
		response.headers.forEach(function(header, key){
			self.headers[key.toLowerCase()] = header
			self.rawHeaders.push(key, header)
		})


		// TODO: this doesn't respect backpressure. Once WritableStream is available, this can be fixed
		var reader = response.body.getReader()
		function read () {
			reader.read().then(function (result) {
				if (self._destroyed)
					return
				if (result.done) {
					self.push(null)
					return
				}
				self.push(new Buffer(result.value))
				read()
			}).catch(function(err) {
				self.emit('error', err)
			})
		}
		read()

	} else {
		self._xhr = xhr
		self._pos = 0

		self.url = xhr.responseURL
		self.statusCode = xhr.status
		self.statusMessage = xhr.statusText
		var headers = xhr.getAllResponseHeaders().split(/\r?\n/)
		headers.forEach(function (header) {
			var matches = header.match(/^([^:]+):\s*(.*)/)
			if (matches) {
				var key = matches[1].toLowerCase()
				if (key === 'set-cookie') {
					if (self.headers[key] === undefined) {
						self.headers[key] = []
					}
					self.headers[key].push(matches[2])
				} else if (self.headers[key] !== undefined) {
					self.headers[key] += ', ' + matches[2]
				} else {
					self.headers[key] = matches[2]
				}
				self.rawHeaders.push(matches[1], matches[2])
			}
		})

		self._charset = 'x-user-defined'
		if (!capability.overrideMimeType) {
			var mimeType = self.rawHeaders['mime-type']
			if (mimeType) {
				var charsetMatch = mimeType.match(/;\s*charset=([^;])(;|$)/)
				if (charsetMatch) {
					self._charset = charsetMatch[1].toLowerCase()
				}
			}
			if (!self._charset)
				self._charset = 'utf-8' // best guess
		}
	}
}

inherits(IncomingMessage, stream.Readable)

IncomingMessage.prototype._read = function () {}

IncomingMessage.prototype._onXHRProgress = function () {
	var self = this

	var xhr = self._xhr

	var response = null
	switch (self._mode) {
		case 'text:vbarray': // For IE9
			if (xhr.readyState !== rStates.DONE)
				break
			try {
				// This fails in IE8
				response = new global.VBArray(xhr.responseBody).toArray()
			} catch (e) {}
			if (response !== null) {
				self.push(new Buffer(response))
				break
			}
			// Falls through in IE8	
		case 'text':
			try { // This will fail when readyState = 3 in IE9. Switch mode and wait for readyState = 4
				response = xhr.responseText
			} catch (e) {
				self._mode = 'text:vbarray'
				break
			}
			if (response.length > self._pos) {
				var newData = response.substr(self._pos)
				if (self._charset === 'x-user-defined') {
					var buffer = new Buffer(newData.length)
					for (var i = 0; i < newData.length; i++)
						buffer[i] = newData.charCodeAt(i) & 0xff

					self.push(buffer)
				} else {
					self.push(newData, self._charset)
				}
				self._pos = response.length
			}
			break
		case 'arraybuffer':
			if (xhr.readyState !== rStates.DONE || !xhr.response)
				break
			response = xhr.response
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'moz-chunked-arraybuffer': // take whole
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING || !response)
				break
			self.push(new Buffer(new Uint8Array(response)))
			break
		case 'ms-stream':
			response = xhr.response
			if (xhr.readyState !== rStates.LOADING)
				break
			var reader = new global.MSStreamReader()
			reader.onprogress = function () {
				if (reader.result.byteLength > self._pos) {
					self.push(new Buffer(new Uint8Array(reader.result.slice(self._pos))))
					self._pos = reader.result.byteLength
				}
			}
			reader.onload = function () {
				self.push(null)
			}
			// reader.onerror = ??? // TODO: this
			reader.readAsArrayBuffer(response)
			break
	}

	// The ms-stream case handles end separately in reader.onload()
	if (self._xhr.readyState === rStates.DONE && self._mode !== 'ms-stream') {
		self.push(null)
	}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(3).Buffer, __webpack_require__(2)))

/***/ }),
/* 136 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(10).Buffer;
/*</replacement>*/

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(139);
var global = __webpack_require__(140);
exports.setImmediate = global.setImmediate;
exports.clearImmediate = global.clearImmediate;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(5)))

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(23);

/*<replacement>*/
var util = __webpack_require__(7);
util.inherits = __webpack_require__(4);
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var Buffer = __webpack_require__(3).Buffer

module.exports = function (buf) {
	// If the buffer is backed by a Uint8Array, a faster version will work
	if (buf instanceof Uint8Array) {
		// If the buffer isn't a subarray, return the underlying ArrayBuffer
		if (buf.byteOffset === 0 && buf.byteLength === buf.buffer.byteLength) {
			return buf.buffer
		} else if (typeof buf.buffer.slice === 'function') {
			// Otherwise we need to get a proper copy
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
		}
	}

	if (Buffer.isBuffer(buf)) {
		// This is the slow version that will work with any Buffer
		// implementation (even in old browsers)
		var arrayCopy = new Uint8Array(buf.length)
		var len = buf.length
		for (var i = 0; i < len; i++) {
			arrayCopy[i] = buf[i]
		}
		return arrayCopy.buffer
	} else {
		throw new Error('Argument must be a Buffer')
	}
}


/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = {
  "100": "Continue",
  "101": "Switching Protocols",
  "102": "Processing",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "207": "Multi-Status",
  "208": "Already Reported",
  "226": "IM Used",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "308": "Permanent Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "425": "Unordered Collection",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "451": "Unavailable For Legal Reasons",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Timeout",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required"
}


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(147)(module), __webpack_require__(2)))

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {var qs = __webpack_require__(12)
var http = __webpack_require__(9)
var https = __webpack_require__(24)
var url = __webpack_require__(11)

module.exports = function _write(httpMethod, options, callback) {

  // require options.url or fail noisily 
  if (!options.url) {
    throw Error('options.url required')
  }

  // parse out the options from options.url
  var opts = url.parse(options.url)
  var method = opts.protocol === 'https:'? https.request : http.request
  var defaultContentType = 'application/json; charset=utf-8'

  // put the params on the query as well as the body?
  if (httpMethod === 'DELETE' && options.data) {
    var isSearch = !!opts.search
    options.url += (isSearch? '&' : '?') + qs.stringify(options.data)
    opts = url.parse(options.url)
  }

  opts.method = httpMethod
  opts.rejectUnauthorized = false
  opts.headers = options.headers || {}
  opts.headers['User-Agent'] = opts.headers['User-Agent'] || 'tiny-http'
  opts.headers['Content-Type'] = opts.headers['Content-Type'] || defaultContentType
  var reqJSON = opts.headers['Content-Type'].startsWith('application/json')
  var postData = reqJSON? JSON.stringify(options.data || {}) : qs.stringify(options.data || {})

  // make a POST request
  var req = method(opts, function(res) {
   
    var raw = [] // keep our buffers here
    var ok = res.statusCode >= 200 && res.statusCode < 300

    if (!ok) {
      callback(Error(httpMethod + ' failed with: ' + res.statusCode))
      res.resume()
      return
    }
 
    res.on('data', function __data(chunk) { 
      raw.push(chunk) 
    })

    res.on('end', function __end() {
      var err = null
      var result = null
      try {
        var isJSON = res.headers['content-type'].startsWith('application/json')
        var rawData = Buffer.concat(raw).toString()
        result = isJSON? JSON.parse(rawData) : rawData
      } 
      catch (e) {
        err = e
      }
      callback(err, {body:result, headers:res.headers})
    })
  })

  req.on('error', callback)

  req.write(postData)
 
  req.end()
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = {"api.test":[{"name":"error","example":"my_error","required":"Optional","description":"Error response to return\n"},{"name":"foo","example":"bar","required":"Optional","description":"example property to return\n"}],"auth.revoke":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Optional","description":"Authentication token.\n"},{"name":"test","example":"true","required":"Optional","description":"Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.\n"}],"auth.test":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: identify\n"}],"bots.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:read\n"},{"name":"bot","example":"B12345678","required":"Optional","description":"Bot user to get info on\n"}],"channels.archive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to archive\n"}],"channels.create":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"name","example":"mychannel","required":"Required","description":"Name of channel to create\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"channels.history":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to fetch history for.\n"},{"name":"latest","example":"1234567890.123456","required":"Optional, default=now","description":"End of time range of messages to include in results.\n"},{"name":"oldest","example":"1234567890.123456","required":"Optional, default=0","description":"Start of time range of messages to include in results.\n"},{"name":"inclusive","example":"true","required":"Optional, default=0","description":"Include messages with latest or oldest timestamp in results.\n"},{"name":"count","example":"100","required":"Optional, default=100","description":"Number of messages to return, between 1 and 1000.\n"},{"name":"unreads","example":"true","required":"Optional, default=0","description":"Include unread_count_display in the output?\n"}],"channels.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:read\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to get info on\n"}],"channels.invite":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to invite user to.\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to invite to channel.\n"}],"channels.join":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"name","example":"C1234567890","required":"Required","description":"Name of channel to join\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"channels.kick":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to remove user from.\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to remove from channel.\n"}],"channels.leave":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to leave\n"}],"channels.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:read\n"},{"name":"exclude_archived","example":"true","required":"Optional, default=false","description":"Exclude archived channels from the list\n"},{"name":"exclude_members","example":"true","required":"Optional, default=false","description":"Exclude the members collection from each channel\n"}],"channels.mark":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to set reading cursor in.\n"},{"name":"ts","example":"1234567890.123456","required":"Required","description":"Timestamp of the most recently seen message.\n"}],"channels.rename":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to rename\n"},{"name":"name","example":" ","required":"Required","description":"New name for channel.\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"channels.replies":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to fetch thread from\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Required","description":"Unique identifier of a thread's parent message\n"}],"channels.setPurpose":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to set the purpose of\n"},{"name":"purpose","example":"My Purpose","required":"Required","description":"The new purpose\n"}],"channels.setTopic":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to set the topic of\n"},{"name":"topic","example":"My Topic","required":"Required","description":"The new topic\n"}],"channels.unarchive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: channels:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to unarchive\n"}],"chat.delete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: chat:write:bot or chat:write:user\n"},{"name":"ts","example":"1405894322.002768","required":"Required","description":"Timestamp of the message to be deleted.\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel containing the message to be deleted.\n"},{"name":"as_user","example":"true","required":"Optional","description":"Pass true to delete the message as the authed user. Bot users in this context are considered authed users.\n"}],"chat.meMessage":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: chat:write:user\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to send message to. Can be a public channel, private group or IM channel. Can be an encoded ID, or a name.\n"},{"name":"text","example":"Hello world","required":"Required","description":"Text of the message to send.\n"}],"chat.postMessage":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: chat:write:bot or chat:write:user\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel, private group, or IM channel to send message to. Can be an encoded ID, or a name. See below for more details.\n"},{"name":"text","example":"Hello world","required":"Required","description":"Text of the message to send. See below for an explanation of formatting. This field is usually required, unless you're providing only attachments instead.\n"},{"name":"parse","example":"full","required":"Optional","description":"Change how messages are treated. Defaults to none. See below.\n"},{"name":"link_names","example":"true","required":"Optional","description":"Find and link channel names and usernames.\n"},{"name":"attachments","example":"[{\"pretext\": \"pre-hello\", \"text\": \"text-world\"}]","required":"Optional","description":"Structured message attachments.\n"},{"name":"unfurl_links","example":"true","required":"Optional","description":"Pass true to enable unfurling of primarily text-based content.\n"},{"name":"unfurl_media","example":"false","required":"Optional","description":"Pass false to disable unfurling of media content.\n"},{"name":"username","example":"My Bot","required":"Optional","description":"Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n"},{"name":"as_user","example":"true","required":"Optional","description":"Pass true to post the message as the authed user, instead of as a bot. Defaults to false. See authorship below.\n"},{"name":"icon_url","example":"http://lorempixel.com/48/48","required":"Optional","description":"URL to an image to use as the icon for this message. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n"},{"name":"icon_emoji","example":":chart_with_upwards_trend:","required":"Optional","description":"Emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user set to false, otherwise ignored. See authorship below.\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Optional","description":"Provide another message's ts value to make this message a reply. Avoid using a reply's ts value; use its parent instead.\n"},{"name":"reply_broadcast","example":"true","required":"Optional","description":"Used in conjunction with thread_ts and indicates whether reply should be made visible to everyone in the channel or conversation. Defaults to false.\n"}],"chat.unfurl":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: links:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel ID of the message\n"},{"name":"ts","example":" ","required":"Required","description":"Timestamp of the message to add unfurl behavior to\n"},{"name":"unfurls","example":" ","required":"Required","description":"JSON mapping a set of URLs from the message to their unfurl attachments\n"},{"name":"user_auth_required","example":"true","required":"Optional, default=0","description":"Set to true or 1 to indicate the user must install your Slack app to trigger unfurls for this domain\n"}],"chat.update":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: chat:write:bot or chat:write:user\n"},{"name":"ts","example":"1405894322.002768","required":"Required","description":"Timestamp of the message to be updated.\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel containing the message to be updated.\n"},{"name":"text","example":"Hello world","required":"Required","description":"New text for the message, using the default formatting rules.\n"},{"name":"attachments","example":"[{\"pretext\": \"pre-hello\", \"text\": \"text-world\"}]","required":"Optional","description":"Structured message attachments.\n"},{"name":"parse","example":"none","required":"Optional","description":"Change how messages are treated. Defaults to client, unlike chat.postMessage. See below.\n"},{"name":"link_names","example":"true","required":"Optional","description":"Find and link channel names and usernames. Defaults to none. This parameter should be used in conjunction with parse. To set link_names to 1, specify a parse mode of full.\n"},{"name":"as_user","example":"true","required":"Optional","description":"Pass true to update the message as the authed user. Bot users in this context are considered authed users.\n"}],"dnd.endDnd":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:write\n"}],"dnd.endSnooze":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:write\n"}],"dnd.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:read\n"},{"name":"user","example":"U1234","required":"Optional","description":"User to fetch status for (defaults to current user)\n"}],"dnd.setSnooze":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:write\n"},{"name":"num_minutes","example":"60","required":"Required","description":"Number of minutes, from now, to snooze until.\n"}],"dnd.teamInfo":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: dnd:read\n"},{"name":"users","example":"U1234,U4567","required":"Optional","description":"Comma-separated list of users to fetch Do Not Disturb status for\n"}],"emoji.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: emoji:read\n"}],"files.comments.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234467890","required":"Required","description":"File to add a comment to.\n"},{"name":"comment","example":"Everyone should take a moment to read this file.","required":"Required","description":"Text of the comment to add.\n"}],"files.comments.delete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"File to delete a comment from.\n"},{"name":"id","example":"Fc1234567890","required":"Required","description":"The comment to delete.\n"}],"files.comments.edit":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"File containing the comment to edit.\n"},{"name":"id","example":"Fc1234567890","required":"Required","description":"The comment to edit.\n"},{"name":"comment","example":"Everyone should take a moment to read this file, seriously.","required":"Required","description":"Text of the comment to edit.\n"}],"files.delete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"ID of file to delete.\n"}],"files.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:read\n"},{"name":"file","example":"F2147483862","required":"Required","description":"Specify a file by providing its ID.\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"files.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:read\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"Filter files created by a single user.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Filter files appearing in a specific channel, indicated by its ID.\n"},{"name":"ts_from","example":"123456789","required":"Optional, default=0","description":"Filter files created after this timestamp (inclusive).\n"},{"name":"ts_to","example":"123456789","required":"Optional, default=now","description":"Filter files created before this timestamp (inclusive).\n"},{"name":"types","example":"images","required":"Optional, default=all","description":"Filter files by type:\n\n\nall - All files\nspaces - Posts\nsnippets - Snippets\nimages - Image files\ngdocs - Google docs\nzips - Zip files\npdfs - PDF files\n\n\nYou can pass multiple values in the types argument, like types=spaces,snippets.The default value is all, which does not filter the list.\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"files.revokePublicURL":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"File to revoke\n"}],"files.sharedPublicURL":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"F1234567890","required":"Required","description":"File to share\n"}],"files.upload":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: files:write:user\n"},{"name":"file","example":"...","required":"Optional","description":"File contents via multipart/form-data. If omitting this parameter, you must submit content.\n"},{"name":"content","example":"...","required":"Optional","description":"File contents via a POST variable. If omitting this parameter, you must provide a file.\n"},{"name":"filetype","example":"php","required":"Optional","description":"A file type identifier.\n"},{"name":"filename","example":"foo.txt","required":"Optional","description":"Filename of file.\n"},{"name":"title","example":"My File","required":"Optional","description":"Title of file.\n"},{"name":"initial_comment","example":"Best!","required":"Optional","description":"Initial comment to add to file.\n"},{"name":"channels","example":"C1234567890,C2345678901,C3456789012","required":"Optional","description":"Comma-separated list of channel names or IDs where the file will be shared.\n"}],"groups.archive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to archive\n"}],"groups.close":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to close.\n"}],"groups.create":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"name","example":" ","required":"Required","description":"Name of private channel to create\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"groups.createChild":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to clone and archive.\n"}],"groups.history":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:history\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to fetch history for.\n"},{"name":"latest","example":"1234567890.123456","required":"Optional, default=now","description":"End of time range of messages to include in results.\n"},{"name":"oldest","example":"1234567890.123456","required":"Optional, default=0","description":"Start of time range of messages to include in results.\n"},{"name":"inclusive","example":"true","required":"Optional, default=0","description":"Include messages with latest or oldest timestamp in results.\n"},{"name":"count","example":"100","required":"Optional, default=100","description":"Number of messages to return, between 1 and 1000.\n"},{"name":"unreads","example":"true","required":"Optional, default=0","description":"Include unread_count_display in the output?\n"}],"groups.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:read\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to get info on\n"}],"groups.invite":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to invite user to.\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to invite.\n"}],"groups.kick":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to remove user from.\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to remove from private channel.\n"}],"groups.leave":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to leave\n"}],"groups.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:read\n"},{"name":"exclude_archived","example":"true","required":"Optional, default=0","description":"Don't return archived private channels.\n"}],"groups.mark":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to set reading cursor in.\n"},{"name":"ts","example":"1234567890.123456","required":"Required","description":"Timestamp of the most recently seen message.\n"}],"groups.open":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to open.\n"}],"groups.rename":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to rename\n"},{"name":"name","example":" ","required":"Required","description":"New name for private channel.\n"},{"name":"validate","example":"true","required":"Optional","description":"Whether to return errors on invalid channel name instead of modifying it to meet the specified criteria.\n"}],"groups.replies":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Private channel to fetch thread from\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Required","description":"Unique identifier of a thread's parent message\n"}],"groups.setPurpose":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to set the purpose of\n"},{"name":"purpose","example":"My Purpose","required":"Required","description":"The new purpose\n"}],"groups.setTopic":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to set the topic of\n"},{"name":"topic","example":"My Topic","required":"Required","description":"The new topic\n"}],"groups.unarchive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: groups:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Private channel to unarchive\n"}],"im.close":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:write\n"},{"name":"channel","example":"D1234567890","required":"Required","description":"Direct message channel to close.\n"}],"im.history":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:history\n"},{"name":"channel","example":"D1234567890","required":"Required","description":"Direct message channel to fetch history for.\n"},{"name":"latest","example":"1234567890.123456","required":"Optional, default=now","description":"End of time range of messages to include in results.\n"},{"name":"oldest","example":"1234567890.123456","required":"Optional, default=0","description":"Start of time range of messages to include in results.\n"},{"name":"inclusive","example":"true","required":"Optional, default=0","description":"Include messages with latest or oldest timestamp in results.\n"},{"name":"count","example":"100","required":"Optional, default=100","description":"Number of messages to return, between 1 and 1000.\n"},{"name":"unreads","example":"true","required":"Optional, default=0","description":"Include unread_count_display in the output?\n"}],"im.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:read\n"}],"im.mark":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:write\n"},{"name":"channel","example":"D1234567890","required":"Required","description":"Direct message channel to set reading cursor in.\n"},{"name":"ts","example":"1234567890.123456","required":"Required","description":"Timestamp of the most recently seen message.\n"}],"im.open":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:write\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to open a direct message channel with.\n"},{"name":"return_im","example":"true","required":"Optional","description":"Boolean, indicates you want the full IM channel definition in the response.\n"}],"im.replies":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: im:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Direct message channel to fetch thread from\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Required","description":"Unique identifier of a thread's parent message\n"}],"mpim.close":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"MPIM to close.\n"}],"mpim.history":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:history\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"Multiparty direct message to fetch history for.\n"},{"name":"latest","example":"1234567890.123456","required":"Optional, default=now","description":"End of time range of messages to include in results.\n"},{"name":"oldest","example":"1234567890.123456","required":"Optional, default=0","description":"Start of time range of messages to include in results.\n"},{"name":"inclusive","example":"true","required":"Optional, default=0","description":"Include messages with latest or oldest timestamp in results.\n"},{"name":"count","example":"100","required":"Optional, default=100","description":"Number of messages to return, between 1 and 1000.\n"},{"name":"unreads","example":"true","required":"Optional, default=0","description":"Include unread_count_display in the output?\n"}],"mpim.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:read\n"}],"mpim.mark":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:write\n"},{"name":"channel","example":"G1234567890","required":"Required","description":"multiparty direct message channel to set reading cursor in.\n"},{"name":"ts","example":"1234567890.123456","required":"Required","description":"Timestamp of the most recently seen message.\n"}],"mpim.open":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:write\n"},{"name":"users","example":"U1234567890,U2345678901,U3456789012","required":"Required","description":"Comma separated lists of users.  The ordering of the users is preserved whenever a MPIM group is returned.\n"}],"mpim.replies":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: mpim:history\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Multiparty direct message channel to fetch thread from.\n"},{"name":"thread_ts","example":"1234567890.123456","required":"Required","description":"Unique identifier of a thread's parent message.\n"}],"oauth.access":[{"name":"client_id","example":"4b39e9-752c4","required":"Required","description":"Issued when you created your application.\n"},{"name":"client_secret","example":"33fea0113f5b1","required":"Required","description":"Issued when you created your application.\n"},{"name":"code","example":"ccdaa72ad","required":"Required","description":"The code param returned via the OAuth callback.\n"},{"name":"redirect_uri","example":"http://example.com","required":"Optional","description":"This must match the originally submitted URI (if one was sent).\n"}],"pins.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: pins:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to pin the item in.\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to pin.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to pin.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to pin.\n"}],"pins.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: pins:read\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel to get pinned items for.\n"}],"pins.remove":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: pins:write\n"},{"name":"channel","example":"C1234567890","required":"Required","description":"Channel where the item is pinned to.\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to un-pin.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to un-pin.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to un-pin.\n"}],"reactions.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reactions:write\n"},{"name":"name","example":"thumbsup","required":"Required","description":"Reaction (emoji) name.\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to add reaction to.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to add reaction to.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel where the message to add reaction to was posted.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to add reaction to.\n"}],"reactions.get":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reactions:read\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to get reactions for.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to get reactions for.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel where the message to get reactions for was posted.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to get reactions for.\n"},{"name":"full","example":"true","required":"Optional","description":"If true always return the complete reaction list.\n"}],"reactions.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reactions:read\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"Show reactions made by this user. Defaults to the authed user.\n"},{"name":"full","example":"true","required":"Optional","description":"If true always return the complete reaction list.\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"reactions.remove":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reactions:write\n"},{"name":"name","example":"thumbsup","required":"Required","description":"Reaction (emoji) name.\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to remove reaction from.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to remove reaction from.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel where the message to remove reaction from was posted.\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to remove reaction from.\n"}],"reminders.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:write\n"},{"name":"text","example":"eat a banana","required":"Required","description":"The content of the reminder\n"},{"name":"time","example":"1602288000","required":"Required","description":"When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. \"in 15 minutes,\" or \"every Thursday\")\n"},{"name":"user","example":"U18888888","required":"Optional","description":"The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.\n"}],"reminders.complete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:write\n"},{"name":"reminder","example":"Rm12345678","required":"Required","description":"The ID of the reminder to be marked as complete\n"}],"reminders.delete":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:write\n"},{"name":"reminder","example":"Rm12345678","required":"Required","description":"The ID of the reminder\n"}],"reminders.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:read\n"},{"name":"reminder","example":"Rm23456789","required":"Required","description":"The ID of the reminder\n"}],"reminders.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: reminders:read\n"}],"rtm.connect":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires token type: session or oauth or bot or app\nRequires scope: client\n"}],"rtm.start":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: client\n"},{"name":"simple_latest","example":"true","required":"Optional","description":"Return timestamp only for latest message object of each channel (improves performance).\n"},{"name":"no_unreads","example":"true","required":"Optional","description":"Skip unread counts for each channel (improves performance).\n"},{"name":"mpim_aware","example":"true","required":"Optional","description":"Returns MPIMs to the client in the API response.\n"},{"name":"no_latest","example":"1","required":"Optional, default=0","description":"Exclude latest timestamps for channels, groups, mpims, and ims. Automatically sets no_unreads to 1\n"}],"search.all":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: search:read\n"},{"name":"query","example":"pickleface","required":"Required","description":"Search query. May contains booleans, etc.\n"},{"name":"sort","example":"timestamp","required":"Optional, default=score","description":"Return matches sorted by either score or timestamp.\n"},{"name":"sort_dir","example":"asc","required":"Optional, default=desc","description":"Change sort direction to ascending (asc) or descending (desc).\n"},{"name":"highlight","example":"true","required":"Optional","description":"Pass a value of true to enable query highlight markers (see below).\n"},{"name":"count","example":"20","required":"Optional, default=20","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"search.files":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: search:read\n"},{"name":"query","example":"pickleface","required":"Required","description":"Search query. May contain booleans, etc.\n"},{"name":"sort","example":"timestamp","required":"Optional, default=score","description":"Return matches sorted by either score or timestamp.\n"},{"name":"sort_dir","example":"asc","required":"Optional, default=desc","description":"Change sort direction to ascending (asc) or descending (desc).\n"},{"name":"highlight","example":"true","required":"Optional","description":"Pass a value of true to enable query highlight markers (see below).\n"},{"name":"count","example":"20","required":"Optional, default=20","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"search.messages":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: search:read\n"},{"name":"query","example":"pickleface","required":"Required","description":"Search query. May contains booleans, etc.\n"},{"name":"sort","example":"timestamp","required":"Optional, default=score","description":"Return matches sorted by either score or timestamp.\n"},{"name":"sort_dir","example":"asc","required":"Optional, default=desc","description":"Change sort direction to ascending (asc) or descending (desc).\n"},{"name":"highlight","example":"true","required":"Optional","description":"Pass a value of true to enable query highlight markers (see below).\n"},{"name":"count","example":"20","required":"Optional, default=20","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"stars.add":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: stars:write\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to add star to.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to add star to.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel to add star to, or channel where the message to add star to was posted (used with timestamp).\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to add star to.\n"}],"stars.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: stars:read\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"stars.remove":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: stars:write\n"},{"name":"file","example":"F1234567890","required":"Optional","description":"File to remove star from.\n"},{"name":"file_comment","example":"Fc1234567890","required":"Optional","description":"File comment to remove star from.\n"},{"name":"channel","example":"C1234567890","required":"Optional","description":"Channel to remove star from, or channel where the message to remove star from was posted (used with timestamp).\n"},{"name":"timestamp","example":"1234567890.123456","required":"Optional","description":"Timestamp of the message to remove star from.\n"}],"team.accessLogs":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: admin\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"},{"name":"before","example":"1457989166","required":"Optional, default=now","description":"End of time range of logs to include in results (inclusive).\n"}],"team.billableInfo":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: admin\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"A user to retrieve the billable information for. Defaults to all users.\n"}],"team.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: team:read\n"}],"team.integrationLogs":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: admin\n"},{"name":"service_id","example":" ","required":"Optional","description":"Filter logs to this service. Defaults to all logs.\n"},{"name":"app_id","example":" ","required":"Optional","description":"Filter logs to this Slack app. Defaults to all logs.\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"Filter logs generated by this user’s actions. Defaults to all logs.\n"},{"name":"change_type","example":"added","required":"Optional","description":"Filter logs with this change type. Defaults to all logs.\n"},{"name":"count","example":"20","required":"Optional, default=100","description":"Number of items to return per page.\n"},{"name":"page","example":"2","required":"Optional, default=1","description":"Page number of results to return.\n"}],"team.profile.get":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:read\n"},{"name":"visibility","example":"all","required":"Optional","description":"Filter by visibility.\n"}],"usergroups.create":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"name","example":"My Test Team","required":"Required","description":"A name for the User Group. Must be unique among User Groups.\n"},{"name":"handle","example":"marketing","required":"Optional","description":"A mention handle. Must be unique among channels, users and User Groups.\n"},{"name":"description","example":" ","required":"Optional","description":"A short description of the User Group.\n"},{"name":"channels","example":"C1234567890,C2345678901,C3456789012","required":"Optional","description":"A comma separated string of encoded channel IDs for which the User Group uses as a default.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in each User Group.\n"}],"usergroups.disable":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to disable.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in the User Group.\n"}],"usergroups.enable":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to enable.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in the User Group.\n"}],"usergroups.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:read\n"},{"name":"include_disabled","example":"true","required":"Optional","description":"Include disabled User Groups.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in each User Group.\n"},{"name":"include_users","example":"true","required":"Optional","description":"Include the list of users for each User Group.\n"}],"usergroups.update":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to update.\n"},{"name":"name","example":"My Test Team","required":"Optional","description":"A name for the User Group. Must be unique among User Groups.\n"},{"name":"handle","example":"marketing","required":"Optional","description":"A mention handle. Must be unique among channels, users and User Groups.\n"},{"name":"description","example":" ","required":"Optional","description":"A short description of the User Group.\n"},{"name":"channels","example":"C1234567890,C2345678901,C3456789012","required":"Optional","description":"A comma separated string of encoded channel IDs for which the User Group uses as a default.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in the User Group.\n"}],"usergroups.users.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:read\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to update.\n"},{"name":"include_disabled","example":"true","required":"Optional","description":"Allow results that involve disabled User Groups.\n"}],"usergroups.users.update":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: usergroups:write\n"},{"name":"usergroup","example":"S0604QSJC","required":"Required","description":"The encoded ID of the User Group to update.\n"},{"name":"users","example":"U060R4BJ4,U060RNRCZ","required":"Required","description":"A comma separated string of encoded user IDs that represent the entire list of users for the User Group.\n"},{"name":"include_count","example":"true","required":"Optional","description":"Include the number of users in the User Group.\n"}],"users.deletePhoto":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:write\n"}],"users.getPresence":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:read\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to get presence info on. Defaults to the authed user.\n"}],"users.identity":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: identity.basic\n"}],"users.info":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:read\n"},{"name":"user","example":"U1234567890","required":"Required","description":"User to get info on\n"}],"users.list":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:read\n"},{"name":"presence","example":"true","required":"Optional","description":"Whether to include presence data in the output\n"}],"users.setActive":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:write\n"}],"users.setPhoto":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:write\n"},{"name":"image","example":"...","required":"Required","description":"File contents via multipart/form-data.\n"},{"name":"crop_x","example":"10","required":"Optional","description":"X coordinate of top-left corner of crop box\n"},{"name":"crop_y","example":"15","required":"Optional","description":"Y coordinate of top-left corner of crop box\n"},{"name":"crop_w","example":"100","required":"Optional","description":"Width/height of crop box (always square)\n"}],"users.setPresence":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users:write\n"},{"name":"presence","example":"away","required":"Required","description":"Either auto or away\n"}],"users.profile.get":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:read\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"User to retrieve profile info for\n"},{"name":"include_labels","example":"true","required":"Optional, default=false","description":"Include labels for each ID in custom profile fields\n"}],"users.profile.set":[{"name":"token","example":"xxxx-xxxxxxxxx-xxxx","required":"Required","description":"Authentication token.\nRequires scope: users.profile:write\n"},{"name":"user","example":"U1234567890","required":"Optional","description":"ID of user to change. This argument may only be specified by team admins on paid teams.\n"},{"name":"profile","example":"{ first_name: \"John\", ... }","required":"Optional","description":"Collection of key:value pairs presented as a URL-encoded JSON hash.\n"},{"name":"name","example":"first_name","required":"Optional","description":"Name of a single key to set. Usable only if profile is not passed.\n"},{"name":"value","example":"John","required":"Optional","description":"Value to set a single key to. Usable only if profile is not passed.\n"}]}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = client;

// generated by ./scripts/generate-stateful-client
function client(token) {
  var applied = {
    auth: {
      test: {}
    },
    bots: {
      info: {}
    },
    channels: {
      archive: {},
      create: {},
      history: {},
      info: {},
      invite: {},
      join: {},
      kick: {},
      leave: {},
      list: {},
      mark: {},
      rename: {},
      replies: {},
      setPurpose: {},
      setTopic: {},
      unarchive: {}
    },
    chat: {
      delete: {},
      meMessage: {},
      postMessage: {},
      unfurl: {},
      update: {}
    },
    dnd: {
      endDnd: {},
      endSnooze: {},
      info: {},
      setSnooze: {},
      teamInfo: {}
    },
    emoji: {
      list: {}
    },
    files: {
      comments: {
        add: {},
        delete: {},
        edit: {}
      },
      delete: {},
      info: {},
      list: {},
      revokePublicURL: {},
      sharedPublicURL: {},
      upload: {}
    },
    groups: {
      archive: {},
      close: {},
      create: {},
      createChild: {},
      history: {},
      info: {},
      invite: {},
      kick: {},
      leave: {},
      list: {},
      mark: {},
      open: {},
      rename: {},
      replies: {},
      setPurpose: {},
      setTopic: {},
      unarchive: {}
    },
    im: {
      close: {},
      history: {},
      list: {},
      mark: {},
      open: {},
      replies: {}
    },
    mpim: {
      close: {},
      history: {},
      list: {},
      mark: {},
      open: {},
      replies: {}
    },
    pins: {
      add: {},
      list: {},
      remove: {}
    },
    reactions: {
      add: {},
      get: {},
      list: {},
      remove: {}
    },
    reminders: {
      add: {},
      complete: {},
      delete: {},
      info: {},
      list: {}
    },
    rtm: {
      connect: {},
      start: {}
    },
    search: {
      all: {},
      files: {},
      messages: {}
    },
    stars: {
      add: {},
      list: {},
      remove: {}
    },
    team: {
      accessLogs: {},
      billableInfo: {},
      info: {},
      integrationLogs: {},
      profile: {
        get: {}
      }
    },
    usergroups: {
      create: {},
      disable: {},
      enable: {},
      list: {},
      update: {},
      users: {
        list: {},
        update: {}
      }
    },
    users: {
      deletePhoto: {},
      getPresence: {},
      identity: {},
      info: {},
      list: {},
      profile: {
        get: {},
        set: {}
      },
      setActive: {},
      setPhoto: {},
      setPresence: {}
    }
  };

  applied.auth.test = function (params, callback) {
    params.token = token;
    __webpack_require__(25).call({}, params, callback);
  };
  applied.bots.info = function (params, callback) {
    params.token = token;
    __webpack_require__(26).call({}, params, callback);
  };
  applied.channels.archive = function (params, callback) {
    params.token = token;
    __webpack_require__(27).call({}, params, callback);
  };
  applied.channels.create = function (params, callback) {
    params.token = token;
    __webpack_require__(28).call({}, params, callback);
  };
  applied.channels.history = function (params, callback) {
    params.token = token;
    __webpack_require__(29).call({}, params, callback);
  };
  applied.channels.info = function (params, callback) {
    params.token = token;
    __webpack_require__(30).call({}, params, callback);
  };
  applied.channels.invite = function (params, callback) {
    params.token = token;
    __webpack_require__(31).call({}, params, callback);
  };
  applied.channels.join = function (params, callback) {
    params.token = token;
    __webpack_require__(32).call({}, params, callback);
  };
  applied.channels.kick = function (params, callback) {
    params.token = token;
    __webpack_require__(33).call({}, params, callback);
  };
  applied.channels.leave = function (params, callback) {
    params.token = token;
    __webpack_require__(34).call({}, params, callback);
  };
  applied.channels.list = function (params, callback) {
    params.token = token;
    __webpack_require__(35).call({}, params, callback);
  };
  applied.channels.mark = function (params, callback) {
    params.token = token;
    __webpack_require__(36).call({}, params, callback);
  };
  applied.channels.rename = function (params, callback) {
    params.token = token;
    __webpack_require__(37).call({}, params, callback);
  };
  applied.channels.replies = function (params, callback) {
    params.token = token;
    __webpack_require__(38).call({}, params, callback);
  };
  applied.channels.setPurpose = function (params, callback) {
    params.token = token;
    __webpack_require__(39).call({}, params, callback);
  };
  applied.channels.setTopic = function (params, callback) {
    params.token = token;
    __webpack_require__(40).call({}, params, callback);
  };
  applied.channels.unarchive = function (params, callback) {
    params.token = token;
    __webpack_require__(41).call({}, params, callback);
  };
  applied.chat.delete = function (params, callback) {
    params.token = token;
    __webpack_require__(42).call({}, params, callback);
  };
  applied.chat.meMessage = function (params, callback) {
    params.token = token;
    __webpack_require__(43).call({}, params, callback);
  };
  applied.chat.postMessage = function (params, callback) {
    params.token = token;
    __webpack_require__(44).call({}, params, callback);
  };
  applied.chat.unfurl = function (params, callback) {
    params.token = token;
    __webpack_require__(45).call({}, params, callback);
  };
  applied.chat.update = function (params, callback) {
    params.token = token;
    __webpack_require__(46).call({}, params, callback);
  };
  applied.dnd.endDnd = function (params, callback) {
    params.token = token;
    __webpack_require__(47).call({}, params, callback);
  };
  applied.dnd.endSnooze = function (params, callback) {
    params.token = token;
    __webpack_require__(48).call({}, params, callback);
  };
  applied.dnd.info = function (params, callback) {
    params.token = token;
    __webpack_require__(49).call({}, params, callback);
  };
  applied.dnd.setSnooze = function (params, callback) {
    params.token = token;
    __webpack_require__(50).call({}, params, callback);
  };
  applied.dnd.teamInfo = function (params, callback) {
    params.token = token;
    __webpack_require__(51).call({}, params, callback);
  };
  applied.emoji.list = function (params, callback) {
    params.token = token;
    __webpack_require__(52).call({}, params, callback);
  };
  applied.files.comments.add = function (params, callback) {
    params.token = token;
    __webpack_require__(53).call({}, params, callback);
  };
  applied.files.comments.delete = function (params, callback) {
    params.token = token;
    __webpack_require__(54).call({}, params, callback);
  };
  applied.files.comments.edit = function (params, callback) {
    params.token = token;
    __webpack_require__(55).call({}, params, callback);
  };
  applied.files.delete = function (params, callback) {
    params.token = token;
    __webpack_require__(56).call({}, params, callback);
  };
  applied.files.info = function (params, callback) {
    params.token = token;
    __webpack_require__(57).call({}, params, callback);
  };
  applied.files.list = function (params, callback) {
    params.token = token;
    __webpack_require__(58).call({}, params, callback);
  };
  applied.files.revokePublicURL = function (params, callback) {
    params.token = token;
    __webpack_require__(59).call({}, params, callback);
  };
  applied.files.sharedPublicURL = function (params, callback) {
    params.token = token;
    __webpack_require__(60).call({}, params, callback);
  };
  applied.files.upload = function (params, callback) {
    params.token = token;
    __webpack_require__(61).call({}, params, callback);
  };
  applied.groups.archive = function (params, callback) {
    params.token = token;
    __webpack_require__(62).call({}, params, callback);
  };
  applied.groups.close = function (params, callback) {
    params.token = token;
    __webpack_require__(63).call({}, params, callback);
  };
  applied.groups.create = function (params, callback) {
    params.token = token;
    __webpack_require__(64).call({}, params, callback);
  };
  applied.groups.createChild = function (params, callback) {
    params.token = token;
    __webpack_require__(65).call({}, params, callback);
  };
  applied.groups.history = function (params, callback) {
    params.token = token;
    __webpack_require__(66).call({}, params, callback);
  };
  applied.groups.info = function (params, callback) {
    params.token = token;
    __webpack_require__(67).call({}, params, callback);
  };
  applied.groups.invite = function (params, callback) {
    params.token = token;
    __webpack_require__(68).call({}, params, callback);
  };
  applied.groups.kick = function (params, callback) {
    params.token = token;
    __webpack_require__(69).call({}, params, callback);
  };
  applied.groups.leave = function (params, callback) {
    params.token = token;
    __webpack_require__(70).call({}, params, callback);
  };
  applied.groups.list = function (params, callback) {
    params.token = token;
    __webpack_require__(71).call({}, params, callback);
  };
  applied.groups.mark = function (params, callback) {
    params.token = token;
    __webpack_require__(72).call({}, params, callback);
  };
  applied.groups.open = function (params, callback) {
    params.token = token;
    __webpack_require__(73).call({}, params, callback);
  };
  applied.groups.rename = function (params, callback) {
    params.token = token;
    __webpack_require__(74).call({}, params, callback);
  };
  applied.groups.replies = function (params, callback) {
    params.token = token;
    __webpack_require__(154).call({}, params, callback);
  };
  applied.groups.setPurpose = function (params, callback) {
    params.token = token;
    __webpack_require__(75).call({}, params, callback);
  };
  applied.groups.setTopic = function (params, callback) {
    params.token = token;
    __webpack_require__(76).call({}, params, callback);
  };
  applied.groups.unarchive = function (params, callback) {
    params.token = token;
    __webpack_require__(77).call({}, params, callback);
  };
  applied.im.close = function (params, callback) {
    params.token = token;
    __webpack_require__(78).call({}, params, callback);
  };
  applied.im.history = function (params, callback) {
    params.token = token;
    __webpack_require__(79).call({}, params, callback);
  };
  applied.im.list = function (params, callback) {
    params.token = token;
    __webpack_require__(80).call({}, params, callback);
  };
  applied.im.mark = function (params, callback) {
    params.token = token;
    __webpack_require__(81).call({}, params, callback);
  };
  applied.im.open = function (params, callback) {
    params.token = token;
    __webpack_require__(82).call({}, params, callback);
  };
  applied.im.replies = function (params, callback) {
    params.token = token;
    __webpack_require__(155).call({}, params, callback);
  };
  applied.mpim.close = function (params, callback) {
    params.token = token;
    __webpack_require__(83).call({}, params, callback);
  };
  applied.mpim.history = function (params, callback) {
    params.token = token;
    __webpack_require__(84).call({}, params, callback);
  };
  applied.mpim.list = function (params, callback) {
    params.token = token;
    __webpack_require__(85).call({}, params, callback);
  };
  applied.mpim.mark = function (params, callback) {
    params.token = token;
    __webpack_require__(86).call({}, params, callback);
  };
  applied.mpim.open = function (params, callback) {
    params.token = token;
    __webpack_require__(87).call({}, params, callback);
  };
  applied.mpim.replies = function (params, callback) {
    params.token = token;
    __webpack_require__(156).call({}, params, callback);
  };
  applied.pins.add = function (params, callback) {
    params.token = token;
    __webpack_require__(88).call({}, params, callback);
  };
  applied.pins.list = function (params, callback) {
    params.token = token;
    __webpack_require__(89).call({}, params, callback);
  };
  applied.pins.remove = function (params, callback) {
    params.token = token;
    __webpack_require__(90).call({}, params, callback);
  };
  applied.reactions.add = function (params, callback) {
    params.token = token;
    __webpack_require__(91).call({}, params, callback);
  };
  applied.reactions.get = function (params, callback) {
    params.token = token;
    __webpack_require__(92).call({}, params, callback);
  };
  applied.reactions.list = function (params, callback) {
    params.token = token;
    __webpack_require__(93).call({}, params, callback);
  };
  applied.reactions.remove = function (params, callback) {
    params.token = token;
    __webpack_require__(94).call({}, params, callback);
  };
  applied.reminders.add = function (params, callback) {
    params.token = token;
    __webpack_require__(95).call({}, params, callback);
  };
  applied.reminders.complete = function (params, callback) {
    params.token = token;
    __webpack_require__(96).call({}, params, callback);
  };
  applied.reminders.delete = function (params, callback) {
    params.token = token;
    __webpack_require__(97).call({}, params, callback);
  };
  applied.reminders.info = function (params, callback) {
    params.token = token;
    __webpack_require__(98).call({}, params, callback);
  };
  applied.reminders.list = function (params, callback) {
    params.token = token;
    __webpack_require__(99).call({}, params, callback);
  };
  applied.rtm.connect = function (params, callback) {
    params.token = token;
    __webpack_require__(100).call({}, params, callback);
  };
  applied.rtm.start = function (params, callback) {
    params.token = token;
    __webpack_require__(13).call({}, params, callback);
  };
  applied.search.all = function (params, callback) {
    params.token = token;
    __webpack_require__(101).call({}, params, callback);
  };
  applied.search.files = function (params, callback) {
    params.token = token;
    __webpack_require__(102).call({}, params, callback);
  };
  applied.search.messages = function (params, callback) {
    params.token = token;
    __webpack_require__(103).call({}, params, callback);
  };
  applied.stars.add = function (params, callback) {
    params.token = token;
    __webpack_require__(104).call({}, params, callback);
  };
  applied.stars.list = function (params, callback) {
    params.token = token;
    __webpack_require__(105).call({}, params, callback);
  };
  applied.stars.remove = function (params, callback) {
    params.token = token;
    __webpack_require__(106).call({}, params, callback);
  };
  applied.team.accessLogs = function (params, callback) {
    params.token = token;
    __webpack_require__(107).call({}, params, callback);
  };
  applied.team.billableInfo = function (params, callback) {
    params.token = token;
    __webpack_require__(108).call({}, params, callback);
  };
  applied.team.info = function (params, callback) {
    params.token = token;
    __webpack_require__(109).call({}, params, callback);
  };
  applied.team.integrationLogs = function (params, callback) {
    params.token = token;
    __webpack_require__(110).call({}, params, callback);
  };
  applied.team.profile.get = function (params, callback) {
    params.token = token;
    __webpack_require__(111).call({}, params, callback);
  };
  applied.usergroups.create = function (params, callback) {
    params.token = token;
    __webpack_require__(112).call({}, params, callback);
  };
  applied.usergroups.disable = function (params, callback) {
    params.token = token;
    __webpack_require__(113).call({}, params, callback);
  };
  applied.usergroups.enable = function (params, callback) {
    params.token = token;
    __webpack_require__(114).call({}, params, callback);
  };
  applied.usergroups.list = function (params, callback) {
    params.token = token;
    __webpack_require__(115).call({}, params, callback);
  };
  applied.usergroups.update = function (params, callback) {
    params.token = token;
    __webpack_require__(116).call({}, params, callback);
  };
  applied.usergroups.users.list = function (params, callback) {
    params.token = token;
    __webpack_require__(117).call({}, params, callback);
  };
  applied.usergroups.users.update = function (params, callback) {
    params.token = token;
    __webpack_require__(118).call({}, params, callback);
  };
  applied.users.deletePhoto = function (params, callback) {
    params.token = token;
    __webpack_require__(157).call({}, params, callback);
  };
  applied.users.getPresence = function (params, callback) {
    params.token = token;
    __webpack_require__(119).call({}, params, callback);
  };
  applied.users.identity = function (params, callback) {
    params.token = token;
    __webpack_require__(120).call({}, params, callback);
  };
  applied.users.info = function (params, callback) {
    params.token = token;
    __webpack_require__(121).call({}, params, callback);
  };
  applied.users.list = function (params, callback) {
    params.token = token;
    __webpack_require__(122).call({}, params, callback);
  };
  applied.users.profile.get = function (params, callback) {
    params.token = token;
    __webpack_require__(123).call({}, params, callback);
  };
  applied.users.profile.set = function (params, callback) {
    params.token = token;
    __webpack_require__(124).call({}, params, callback);
  };
  applied.users.setActive = function (params, callback) {
    params.token = token;
    __webpack_require__(125).call({}, params, callback);
  };
  applied.users.setPhoto = function (params, callback) {
    params.token = token;
    __webpack_require__(158).call({}, params, callback);
  };
  applied.users.setPresence = function (params, callback) {
    params.token = token;
    __webpack_require__(126).call({}, params, callback);
  };

  return applied;
}
module.exports = exports['default'];

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groupsreplies;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function groupsreplies(params, callback) {
  var ns = 'groups.replies';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imreplies;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function imreplies(params, callback) {
  var ns = 'im.replies';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mpimreplies;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function mpimreplies(params, callback) {
  var ns = 'mpim.replies';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = usersdeletePhoto;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function usersdeletePhoto(params, callback) {
  var ns = 'users.deletePhoto';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = userssetPhoto;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function userssetPhoto(params, callback) {
  var ns = 'users.setPhoto';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bots = __webpack_require__(26);

var _bots2 = _interopRequireDefault(_bots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  info: _bots2.default
};
module.exports = exports['default'];

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authrevoke;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function authrevoke(params, callback) {
  var ns = 'auth.revoke';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _channels = __webpack_require__(27);

var _channels2 = _interopRequireDefault(_channels);

var _channels3 = __webpack_require__(28);

var _channels4 = _interopRequireDefault(_channels3);

var _channels5 = __webpack_require__(29);

var _channels6 = _interopRequireDefault(_channels5);

var _channels7 = __webpack_require__(30);

var _channels8 = _interopRequireDefault(_channels7);

var _channels9 = __webpack_require__(31);

var _channels10 = _interopRequireDefault(_channels9);

var _channels11 = __webpack_require__(32);

var _channels12 = _interopRequireDefault(_channels11);

var _channels13 = __webpack_require__(33);

var _channels14 = _interopRequireDefault(_channels13);

var _channels15 = __webpack_require__(34);

var _channels16 = _interopRequireDefault(_channels15);

var _channels17 = __webpack_require__(35);

var _channels18 = _interopRequireDefault(_channels17);

var _channels19 = __webpack_require__(36);

var _channels20 = _interopRequireDefault(_channels19);

var _channels21 = __webpack_require__(37);

var _channels22 = _interopRequireDefault(_channels21);

var _channels23 = __webpack_require__(38);

var _channels24 = _interopRequireDefault(_channels23);

var _channels25 = __webpack_require__(39);

var _channels26 = _interopRequireDefault(_channels25);

var _channels27 = __webpack_require__(40);

var _channels28 = _interopRequireDefault(_channels27);

var _channels29 = __webpack_require__(41);

var _channels30 = _interopRequireDefault(_channels29);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  archive: _channels2.default,
  create: _channels4.default,
  history: _channels6.default,
  info: _channels8.default,
  invite: _channels10.default,
  join: _channels12.default,
  kick: _channels14.default,
  leave: _channels16.default,
  list: _channels18.default,
  mark: _channels20.default,
  rename: _channels22.default,
  replies: _channels24.default,
  setPurpose: _channels26.default,
  setTopic: _channels28.default,
  unarchive: _channels30.default
};
module.exports = exports['default'];

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chat = __webpack_require__(42);

var _chat2 = _interopRequireDefault(_chat);

var _chat3 = __webpack_require__(43);

var _chat4 = _interopRequireDefault(_chat3);

var _chat5 = __webpack_require__(44);

var _chat6 = _interopRequireDefault(_chat5);

var _chat7 = __webpack_require__(45);

var _chat8 = _interopRequireDefault(_chat7);

var _chat9 = __webpack_require__(46);

var _chat10 = _interopRequireDefault(_chat9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  delete: _chat2.default,
  meMessage: _chat4.default,
  postMessage: _chat6.default,
  unfurl: _chat8.default,
  update: _chat10.default
};
module.exports = exports['default'];

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dnd = __webpack_require__(49);

var _dnd2 = _interopRequireDefault(_dnd);

var _dnd3 = __webpack_require__(47);

var _dnd4 = _interopRequireDefault(_dnd3);

var _dnd5 = __webpack_require__(48);

var _dnd6 = _interopRequireDefault(_dnd5);

var _dnd7 = __webpack_require__(50);

var _dnd8 = _interopRequireDefault(_dnd7);

var _dnd9 = __webpack_require__(51);

var _dnd10 = _interopRequireDefault(_dnd9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  info: _dnd2.default, endDnd: _dnd4.default, endSnooze: _dnd6.default, setSnooze: _dnd8.default, teamInfo: _dnd10.default
};
module.exports = exports['default'];

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _files = __webpack_require__(56);

var _files2 = _interopRequireDefault(_files);

var _files3 = __webpack_require__(57);

var _files4 = _interopRequireDefault(_files3);

var _files5 = __webpack_require__(58);

var _files6 = _interopRequireDefault(_files5);

var _files7 = __webpack_require__(61);

var _files8 = _interopRequireDefault(_files7);

var _filesComments = __webpack_require__(53);

var _filesComments2 = _interopRequireDefault(_filesComments);

var _filesComments3 = __webpack_require__(54);

var _filesComments4 = _interopRequireDefault(_filesComments3);

var _filesComments5 = __webpack_require__(55);

var _filesComments6 = _interopRequireDefault(_filesComments5);

var _files9 = __webpack_require__(59);

var _files10 = _interopRequireDefault(_files9);

var _files11 = __webpack_require__(60);

var _files12 = _interopRequireDefault(_files11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  delete: _files2.default,
  info: _files4.default,
  list: _files6.default,
  upload: _files8.default,
  comments: {
    add: _filesComments2.default,
    delete: _filesComments4.default,
    edit: _filesComments6.default
  },
  revokePublicURL: _files10.default,
  sharedPublicURL: _files12.default
};
module.exports = exports['default'];

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _groups = __webpack_require__(62);

var _groups2 = _interopRequireDefault(_groups);

var _groups3 = __webpack_require__(63);

var _groups4 = _interopRequireDefault(_groups3);

var _groups5 = __webpack_require__(64);

var _groups6 = _interopRequireDefault(_groups5);

var _groups7 = __webpack_require__(65);

var _groups8 = _interopRequireDefault(_groups7);

var _groups9 = __webpack_require__(66);

var _groups10 = _interopRequireDefault(_groups9);

var _groups11 = __webpack_require__(67);

var _groups12 = _interopRequireDefault(_groups11);

var _groups13 = __webpack_require__(68);

var _groups14 = _interopRequireDefault(_groups13);

var _groups15 = __webpack_require__(69);

var _groups16 = _interopRequireDefault(_groups15);

var _groups17 = __webpack_require__(70);

var _groups18 = _interopRequireDefault(_groups17);

var _groups19 = __webpack_require__(71);

var _groups20 = _interopRequireDefault(_groups19);

var _groups21 = __webpack_require__(72);

var _groups22 = _interopRequireDefault(_groups21);

var _groups23 = __webpack_require__(73);

var _groups24 = _interopRequireDefault(_groups23);

var _groups25 = __webpack_require__(74);

var _groups26 = _interopRequireDefault(_groups25);

var _groups27 = __webpack_require__(75);

var _groups28 = _interopRequireDefault(_groups27);

var _groups29 = __webpack_require__(76);

var _groups30 = _interopRequireDefault(_groups29);

var _groups31 = __webpack_require__(77);

var _groups32 = _interopRequireDefault(_groups31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  archive: _groups2.default,
  close: _groups4.default,
  create: _groups6.default,
  createChild: _groups8.default,
  history: _groups10.default,
  info: _groups12.default,
  invite: _groups14.default,
  kick: _groups16.default,
  leave: _groups18.default,
  list: _groups20.default,
  mark: _groups22.default,
  open: _groups24.default,
  rename: _groups26.default,
  setPurpose: _groups28.default,
  setTopic: _groups30.default,
  unarchive: _groups32.default
};
module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _im = __webpack_require__(78);

var _im2 = _interopRequireDefault(_im);

var _im3 = __webpack_require__(79);

var _im4 = _interopRequireDefault(_im3);

var _im5 = __webpack_require__(80);

var _im6 = _interopRequireDefault(_im5);

var _im7 = __webpack_require__(81);

var _im8 = _interopRequireDefault(_im7);

var _im9 = __webpack_require__(82);

var _im10 = _interopRequireDefault(_im9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  close: _im2.default, history: _im4.default, list: _im6.default, mark: _im8.default, open: _im10.default
};
module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mpim = __webpack_require__(83);

var _mpim2 = _interopRequireDefault(_mpim);

var _mpim3 = __webpack_require__(84);

var _mpim4 = _interopRequireDefault(_mpim3);

var _mpim5 = __webpack_require__(85);

var _mpim6 = _interopRequireDefault(_mpim5);

var _mpim7 = __webpack_require__(86);

var _mpim8 = _interopRequireDefault(_mpim7);

var _mpim9 = __webpack_require__(87);

var _mpim10 = _interopRequireDefault(_mpim9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  close: _mpim2.default,
  history: _mpim4.default,
  list: _mpim6.default,
  mark: _mpim8.default,
  open: _mpim10.default
};
module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = oauthaccess;

var _exec = __webpack_require__(0);

var _exec2 = _interopRequireDefault(_exec);

var _validate = __webpack_require__(1);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this file was generated by ./scripts/generate-web-api
function oauthaccess(params, callback) {
  var ns = 'oauth.access';
  var err = (0, _validate2.default)(ns, params);
  if (err) {
    callback(err);
  } else {
    (0, _exec2.default)(ns, params, callback);
  }
}
module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactions = __webpack_require__(91);

var _reactions2 = _interopRequireDefault(_reactions);

var _reactions3 = __webpack_require__(92);

var _reactions4 = _interopRequireDefault(_reactions3);

var _reactions5 = __webpack_require__(93);

var _reactions6 = _interopRequireDefault(_reactions5);

var _reactions7 = __webpack_require__(94);

var _reactions8 = _interopRequireDefault(_reactions7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _reactions2.default, get: _reactions4.default, list: _reactions6.default, remove: _reactions8.default
};
module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reminders = __webpack_require__(95);

var _reminders2 = _interopRequireDefault(_reminders);

var _reminders3 = __webpack_require__(96);

var _reminders4 = _interopRequireDefault(_reminders3);

var _reminders5 = __webpack_require__(97);

var _reminders6 = _interopRequireDefault(_reminders5);

var _reminders7 = __webpack_require__(98);

var _reminders8 = _interopRequireDefault(_reminders7);

var _reminders9 = __webpack_require__(99);

var _reminders10 = _interopRequireDefault(_reminders9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _reminders2.default, complete: _reminders4.default, delete: _reminders6.default, info: _reminders8.default, list: _reminders10.default
};
module.exports = exports['default'];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pins = __webpack_require__(88);

var _pins2 = _interopRequireDefault(_pins);

var _pins3 = __webpack_require__(89);

var _pins4 = _interopRequireDefault(_pins3);

var _pins5 = __webpack_require__(90);

var _pins6 = _interopRequireDefault(_pins5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _pins2.default, list: _pins4.default, remove: _pins6.default
};
module.exports = exports['default'];

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = client;

var _rtm = __webpack_require__(13);

var _rtm2 = _interopRequireDefault(_rtm);

var _rtm3 = __webpack_require__(173);

var _rtm4 = _interopRequireDefault(_rtm3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// socket factory
function client() {

  // build a new bot every time
  var bot = {
    handlers: {
      started: []
    }
  };

  // add undocumented ping event
  _rtm4.default.push('pong');

  // generate event handler registration methods
  _rtm4.default.forEach(function (e) {
    bot.handlers[e] = [];
    bot[e] = function (handler) {
      bot.handlers[e].push(handler);
    };
  });

  bot.started = function (handler) {
    bot.handlers['started'].push(handler);
  };

  // kicks up a web socket connection
  bot.listen = function botListen(params, callback) {
    (0, _rtm2.default)(params, function (err, data) {
      if (err) {
        if (callback) callback(err);else throw err;
      } else {
        // grab a handle on the socket
        bot.ws = new WebSocket(data.url);
        // delegate everything
        bot.ws.onmessage = function message(e) {
          var json = JSON.parse(e.data);
          // Call all registered handlers for this event, if any
          if (bot.handlers[json.type]) bot.handlers[json.type].forEach(function (m) {
            return m.call({}, json);
          });
        };
        // call started callbacks
        bot.handlers['started'].forEach(function (m) {
          return m.call({}, data);
        });
        if (callback) callback(null, data);
      }
    });
  };

  // closes the socket
  bot.close = function botClose() {
    bot.ws.close();
  };

  //////////
  return bot;
}
module.exports = exports['default'];

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// generated using ./scripts/generate-all
var events = ['accounts_changed', 'bot_added', 'bot_changed', 'channel_archive', 'channel_created', 'channel_deleted', 'channel_history_changed', 'channel_joined', 'channel_left', 'channel_marked', 'channel_rename', 'channel_unarchive', 'commands_changed', 'dnd_updated', 'dnd_updated_user', 'email_domain_changed', 'emoji_changed', 'file_change', 'file_comment_added', 'file_comment_deleted', 'file_comment_edited', 'file_created', 'file_deleted', 'file_public', 'file_shared', 'file_unshared', 'goodbye', 'group_archive', 'group_close', 'group_history_changed', 'group_joined', 'group_left', 'group_marked', 'group_open', 'group_rename', 'group_unarchive', 'hello', 'im_close', 'im_created', 'im_history_changed', 'im_marked', 'im_open', 'link_shared', 'manual_presence_change', 'member_joined_channel', 'member_left_channel', 'message', 'message.channels', 'message.groups', 'message.im', 'message.mpim', 'pin_added', 'pin_removed', 'pong', 'pref_change', 'presence_change', 'reaction_added', 'reaction_removed', 'reconnect_url', 'star_added', 'star_removed', 'subteam_created', 'subteam_self_added', 'subteam_self_removed', 'subteam_updated', 'team_domain_change', 'team_join', 'team_migration_started', 'team_plan_change', 'team_pref_change', 'team_profile_change', 'team_profile_delete', 'team_profile_reorder', 'team_rename', 'url_verification', 'user_change', 'user_typing'];

exports.default = events;
module.exports = exports['default'];

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _search = __webpack_require__(101);

var _search2 = _interopRequireDefault(_search);

var _search3 = __webpack_require__(102);

var _search4 = _interopRequireDefault(_search3);

var _search5 = __webpack_require__(103);

var _search6 = _interopRequireDefault(_search5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  all: _search2.default, files: _search4.default, messages: _search6.default
};
module.exports = exports['default'];

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stars = __webpack_require__(104);

var _stars2 = _interopRequireDefault(_stars);

var _stars3 = __webpack_require__(105);

var _stars4 = _interopRequireDefault(_stars3);

var _stars5 = __webpack_require__(106);

var _stars6 = _interopRequireDefault(_stars5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: _stars2.default, list: _stars4.default, remove: _stars6.default
};
module.exports = exports['default'];

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _team = __webpack_require__(107);

var _team2 = _interopRequireDefault(_team);

var _team3 = __webpack_require__(108);

var _team4 = _interopRequireDefault(_team3);

var _team5 = __webpack_require__(109);

var _team6 = _interopRequireDefault(_team5);

var _team7 = __webpack_require__(110);

var _team8 = _interopRequireDefault(_team7);

var _teamProfile = __webpack_require__(111);

var _teamProfile2 = _interopRequireDefault(_teamProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  accessLogs: _team2.default,
  billableInfo: _team4.default,
  info: _team6.default,
  integrationLogs: _team8.default,
  profile: {
    get: _teamProfile2.default
  }
};
module.exports = exports['default'];

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _usergroups = __webpack_require__(112);

var _usergroups2 = _interopRequireDefault(_usergroups);

var _usergroups3 = __webpack_require__(113);

var _usergroups4 = _interopRequireDefault(_usergroups3);

var _usergroups5 = __webpack_require__(114);

var _usergroups6 = _interopRequireDefault(_usergroups5);

var _usergroups7 = __webpack_require__(115);

var _usergroups8 = _interopRequireDefault(_usergroups7);

var _usergroups9 = __webpack_require__(116);

var _usergroups10 = _interopRequireDefault(_usergroups9);

var _usergroupsUsers = __webpack_require__(117);

var _usergroupsUsers2 = _interopRequireDefault(_usergroupsUsers);

var _usergroupsUsers3 = __webpack_require__(118);

var _usergroupsUsers4 = _interopRequireDefault(_usergroupsUsers3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: _usergroups2.default,
  disable: _usergroups4.default,
  enable: _usergroups6.default,
  list: _usergroups8.default,
  update: _usergroups10.default,
  users: {
    list: _usergroupsUsers2.default,
    update: _usergroupsUsers4.default
  }
};
module.exports = exports['default'];

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _users = __webpack_require__(119);

var _users2 = _interopRequireDefault(_users);

var _usersProfile = __webpack_require__(123);

var _usersProfile2 = _interopRequireDefault(_usersProfile);

var _users3 = __webpack_require__(120);

var _users4 = _interopRequireDefault(_users3);

var _users5 = __webpack_require__(121);

var _users6 = _interopRequireDefault(_users5);

var _users7 = __webpack_require__(122);

var _users8 = _interopRequireDefault(_users7);

var _users9 = __webpack_require__(125);

var _users10 = _interopRequireDefault(_users9);

var _users11 = __webpack_require__(126);

var _users12 = _interopRequireDefault(_users11);

var _usersProfile3 = __webpack_require__(124);

var _usersProfile4 = _interopRequireDefault(_usersProfile3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getPresence: _users2.default,
  identity: _users4.default,
  info: _users6.default,
  list: _users8.default,
  profile: {
    get: _usersProfile2.default,
    set: _usersProfile4.default
  },
  setActive: _users10.default,
  setPresence: _users12.default
};
module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// version: 0.7.1
// date: Sat Jul 22 2017 20:17:49 GMT+0100 (GMT Daylight Time)
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


(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Syncher", [], factory);
	else if(typeof exports === 'object')
		exports["Syncher"] = factory();
	else
		root[""] = root[""] || {}, root[""]["Syncher"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(30)('wks')
  , uid        = __webpack_require__(23)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(25)
  , toPrimitive    = __webpack_require__(21)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(4)
  , createDesc = __webpack_require__(15);
module.exports = __webpack_require__(2) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(0)
  , ctx       = __webpack_require__(14)
  , hide      = __webpack_require__(7)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(33);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(56)
  , defined = __webpack_require__(24);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(19);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(44)
  , enumBugKeys = __webpack_require__(29);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(4).f
  , has = __webpack_require__(12)
  , TAG = __webpack_require__(3)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys')
  , uid    = __webpack_require__(23);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(24);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(76);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(75);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(60);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(65)
  , enumBugKeys = __webpack_require__(29)
  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(42).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', {defineProperty: __webpack_require__(4).f});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(26)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(46)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(16)
  , $iterCreate    = __webpack_require__(63)
  , setToStringTag = __webpack_require__(22)
  , getPrototypeOf = __webpack_require__(43)
  , ITERATOR       = __webpack_require__(3)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(12)
  , toObject    = __webpack_require__(32)
  , IE_PROTO    = __webpack_require__(27)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(12)
  , toIObject    = __webpack_require__(13)
  , arrayIndexOf = __webpack_require__(62)(false)
  , IE_PROTO     = __webpack_require__(27)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9)
  , core    = __webpack_require__(0)
  , fails   = __webpack_require__(11);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(0)
  , LIBRARY        = __webpack_require__(26)
  , wksExt         = __webpack_require__(49)
  , defineProperty = __webpack_require__(4).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(67)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(39)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(7)
  , Iterators     = __webpack_require__(16)
  , TO_STRING_TAG = __webpack_require__(3)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(0)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20)
  , TAG = __webpack_require__(3)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(41)
  , createDesc     = __webpack_require__(15)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(21)
  , has            = __webpack_require__(12)
  , IE8_DOM_DEFINE = __webpack_require__(25)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(2) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(78);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(77);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(13)
  , toLength  = __webpack_require__(47)
  , toIndex   = __webpack_require__(69);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(37)
  , descriptor     = __webpack_require__(15)
  , setToStringTag = __webpack_require__(22)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(3)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(4)
  , anObject = __webpack_require__(5)
  , getKeys  = __webpack_require__(18);

module.exports = __webpack_require__(2) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(44)
  , hiddenKeys = __webpack_require__(29).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , defined   = __webpack_require__(24);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(14)
  , invoke             = __webpack_require__(89)
  , html               = __webpack_require__(42)
  , cel                = __webpack_require__(17)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(20)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(61)
  , step             = __webpack_require__(64)
  , Iterators        = __webpack_require__(16)
  , toIObject        = __webpack_require__(13);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(39)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(40);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(59);

var _keys2 = _interopRequireDefault(_keys);

exports.divideURL = divideURL;
exports.divideEmail = divideEmail;
exports.emptyObject = emptyObject;
exports.deepClone = deepClone;
exports.getUserURLFromEmail = getUserURLFromEmail;
exports.getUserEmailFromURL = getUserEmailFromURL;
exports.convertToUserURL = convertToUserURL;
exports.checkAttribute = checkAttribute;
exports.parseAttributes = parseAttributes;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  if (!url) throw Error('URL is needed to split');

  function recurse(value) {
    var regex = /([a-zA-Z-]*)(:\/\/(?:\.)?|:)([-a-zA-Z0-9@:%._\+~#=]{2,256})([-a-zA-Z0-9@:%._\+~#=\/]*)/gi;
    var subst = '$1,$3,$4';
    var parts = value.replace(regex, subst).split(',');
    return parts;
  }

  var parts = recurse(url);

  // If the url has no scheme
  if (parts[0] === url && !parts[0].includes('@')) {

    var _result = {
      type: "",
      domain: url,
      identity: ""
    };

    console.error('[DivideURL] DivideURL don\'t support url without scheme. Please review your url address', url);

    return _result;
  }

  // check if the url has the scheme and includes an @
  if (parts[0] === url && parts[0].includes('@')) {
    var scheme = parts[0] === url ? 'smtp' : parts[0];
    parts = recurse(scheme + '://' + parts[0]);
  }

  // if the domain includes an @, divide it to domain and identity respectively
  if (parts[1].includes('@')) {
    parts[2] = parts[0] + '://' + parts[1];
    parts[1] = parts[1].substr(parts[1].indexOf('@') + 1);
  } /*else if (parts[2].includes('/')) {
    parts[2] = parts[2].substr(parts[2].lastIndexOf('/')+1);
    }*/

  var result = {
    type: parts[0],
    domain: parts[1],
    identity: parts[2]
  };

  return result;
}

function divideEmail(email) {
  var indexOfAt = email.indexOf('@');

  var result = {
    username: email.substring(0, indexOfAt),
    domain: email.substring(indexOfAt + 1, email.length)
  };

  return result;
}

/**
 * Check if an Object is empty
 * @param  {Object} object Object to be checked
 * @return {Boolean}       status of Object, empty or not (true|false);
 */
function emptyObject(object) {
  return (0, _keys2.default)(object).length > 0 ? false : true;
}

/**
 * Make a COPY of the original data
 * @param  {Object}  obj - object to be cloned
 * @return {Object}
 */
function deepClone(obj) {
  //TODO: simple but inefficient JSON deep clone...
  if (obj) return JSON.parse((0, _stringify2.default)(obj));
}

/**
 * Obtains the user URL that corresponds to a given email
 * @param  {string} userEmail The user email
 * @return {URL.URL} userURL The user URL
 */
function getUserURLFromEmail(userEmail) {
  var indexOfAt = userEmail.indexOf('@');
  return 'user://' + userEmail.substring(indexOfAt + 1, userEmail.length) + '/' + userEmail.substring(0, indexOfAt);
}

/**
 * Obtains the user email that corresponds to a given URL
 * @param  {URL.URL} userURL The user URL
 * @return {string} userEmail The user email
 */
function getUserEmailFromURL(userURL) {
  var url = divideURL(userURL);
  return url.identity.replace('/', '') + '@' + url.domain; // identity field has '/exampleID' instead of 'exampleID'
}

/**
 * Check if the user identifier is already in the URL format, if not, convert to URL format
 * @param  {string}   identifier  user identifier
 * @return {string}   userURL    the user URL
 */
function convertToUserURL(identifier) {

  // check if the identifier is already in the url format
  if (identifier.substring(0, 7) === 'user://') {
    var dividedURL = divideURL(identifier);

    //check if the url is well formated
    if (dividedURL.domain && dividedURL.identity) {
      return identifier;
    } else {
      throw 'userURL with wrong format';
    }

    //if not, convert the user email to URL format
  } else {
    return getUserURLFromEmail(identifier);
  }
}

function checkAttribute(path) {

  var regex = /((([a-zA-Z]+):\/\/([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})\/[a-zA-Z0-9\.]+@[a-zA-Z0-9]+(\-)?[a-zA-Z0-9]+(\.)?[a-zA-Z0-9]{2,10}?\.[a-zA-Z]{2,10})(.+(?=.identity))?/gm;

  var list = [];
  var final = [];
  var test = path.match(regex);

  if (test == null) {
    final = path.split('.');
  } else {
    var m = void 0;
    while ((m = regex.exec(path)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach(function (match, groupIndex) {
        if (groupIndex === 0) {
          list.push(match);
        }
      });
    }
    var result = void 0;
    list.forEach(function (url) {
      result = path.replace(url, '*+*');

      final = result.split('.').map(function (item) {
        if (item === '*+*') {
          return url;
        }
        return item;
      });
    });
  }

  console.log('[ServiceFramework.Utils.checkAttribute]', final);
  return final;
}

function parseAttributes(path) {
  var regex = /([0-9a-zA-Z][-\w]*):\/\//g;

  var string3 = 'identity';

  if (!path.includes('://')) {
    return path.split('.');
  } else {
    var string1 = path.split(regex)[0];

    var array1 = string1.split('.');

    var string2 = path.replace(string1, '');

    if (path.includes(string3)) {

      var array2 = string2.split(string3 + '.');

      console.log('array2 ' + array2);

      string2 = array2[0].slice('.', -1);

      array2 = array2[1].split('.');

      array1.push(string2, string3);

      array1 = array1.concat(array2);
    } else {
      array1.push(string2);
    }

    return array1.filter(Boolean);
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(23)('meta')
  , isObject = __webpack_require__(6)
  , has      = __webpack_require__(12)
  , setDesc  = __webpack_require__(4).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(11)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(55)
  , ITERATOR  = __webpack_require__(3)('iterator')
  , Iterators = __webpack_require__(16);
module.exports = __webpack_require__(0).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(79), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(101);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(103);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(54);
__webpack_require__(50);
__webpack_require__(51);
__webpack_require__(105);
module.exports = __webpack_require__(0).Promise;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(106);
__webpack_require__(54);
__webpack_require__(107);
__webpack_require__(108);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(51);
module.exports = __webpack_require__(49).f('iterator');

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18)
  , gOPS    = __webpack_require__(58)
  , pIE     = __webpack_require__(41);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(14)
  , call        = __webpack_require__(92)
  , isArrayIter = __webpack_require__(90)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(47)
  , getIterFn   = __webpack_require__(74)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(16)
  , ITERATOR   = __webpack_require__(3)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(3)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(18)
  , toIObject = __webpack_require__(13);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(68).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(20)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(13)
  , gOPN      = __webpack_require__(66).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(7);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(6)
  , anObject = __webpack_require__(5);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(14)(Function.call, __webpack_require__(57).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(0)
  , dP          = __webpack_require__(4)
  , DESCRIPTORS = __webpack_require__(2)
  , SPECIES     = __webpack_require__(3)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(19)
  , SPECIES   = __webpack_require__(3)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(37)});

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = __webpack_require__(32)
  , $getPrototypeOf = __webpack_require__(43);

__webpack_require__(45)('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32)
  , $keys    = __webpack_require__(18);

__webpack_require__(45)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(98).set});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(26)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(14)
  , classof            = __webpack_require__(55)
  , $export            = __webpack_require__(9)
  , isObject           = __webpack_require__(6)
  , aFunction          = __webpack_require__(19)
  , anInstance         = __webpack_require__(86)
  , forOf              = __webpack_require__(88)
  , speciesConstructor = __webpack_require__(100)
  , task               = __webpack_require__(68).set
  , microtask          = __webpack_require__(95)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(3)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(97)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(22)($Promise, PROMISE);
__webpack_require__(99)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(93)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(12)
  , DESCRIPTORS    = __webpack_require__(2)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(46)
  , META           = __webpack_require__(73).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(30)
  , setToStringTag = __webpack_require__(22)
  , uid            = __webpack_require__(23)
  , wks            = __webpack_require__(3)
  , wksExt         = __webpack_require__(49)
  , wksDefine      = __webpack_require__(48)
  , keyOf          = __webpack_require__(94)
  , enumKeys       = __webpack_require__(87)
  , isArray        = __webpack_require__(91)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(13)
  , toPrimitive    = __webpack_require__(21)
  , createDesc     = __webpack_require__(15)
  , _create        = __webpack_require__(37)
  , gOPNExt        = __webpack_require__(96)
  , $GOPD          = __webpack_require__(57)
  , $DP            = __webpack_require__(4)
  , $keys          = __webpack_require__(18)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(66).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(41).f  = $propertyIsEnumerable;
  __webpack_require__(58).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(26)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(159), __esModule: true };

/***/ }),
/* 119 */
/***/ (function(module, exports) {

//     proxy-observe v0.0.18
//     Copyright (c) 2015, 2016 Simon Y. Blackwell, AnyWhichWay
//     MIT License - http://opensource.org/licenses/mit-license.php
(function() {
	"use strict";
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
	if(!Object.observe && typeof(Proxy)==="function") {
		function Observer(target,callback,acceptlist,pausable,pause,delay) {
	    	var me = this, proxy;
	    	function deliver(ignorePrevious,delay) {
	    		deliver.delay = delay;
	    		if(!deliver.pause) {
	        		if(me.changeset.length>0) {
	        			if(!ignorePrevious) {
		    	    		var changes = me.changeset.filter(function(change) { return !acceptlist || acceptlist.indexOf(change.type)>=0; });
		        			if(changes.length>0) {
		        				callback(changes);
		        			}
	        			}
	        			me.changeset = [];
	        		}
	    		}
	    	}
	    	deliver.pause = pause;
	    	deliver.delay = delay;
		    me.get = function(target, property) {
		    	if(property==="__observer__") {
		    		return me;
		    	}
		    	if(property==="unobserve") {
		    		return function() {
		    			Object.unobserve(target);
		    			return target;
		    		};
		    	}
		    	if(property==="deliver") {
		    		return deliver;
		    	}
		    	return target[property];
		    }
	    	me.target = target;
	    	me.changeset = [];
	    	if(!me.target.__observerCallbacks__) {
	    		// __observerCallbacks__ is used as an index to get at the proxy which is the observer, so we can unobserve
	    		Object.defineProperty(target,"__observerCallbacks__",{enumerable:false,configurable:true,writable:false,value:[]});
	    		Object.defineProperty(target,"__observers__",{enumerable:false,configurable:true,writable:false,value:[]});
	    	}
	    	me.target.__observerCallbacks__.push(callback);
	    	me.target.__observers__.push(this);
	    	proxy = new Proxy(target,me);
	    	deliver(false,delay);
	    	return proxy;
	    }
		Observer.prototype.deliver = function() {
			return this.get(null,"deliver");
		}
	    Observer.prototype.set = function(target, property, value) { // , receiver
	    	var oldvalue = target[property];
	    	var type = (oldvalue===undefined ? "add" : "update");
	    	target[property] = value;
	    	if(target.__observers__.indexOf(this)>=0 && (!this.acceptlist || this.acceptlist.indexOf(type)>=0)) {
	        	var change = {object:target,name:property,type:type},
	        		start = this.changeset.length === 0,
	        		deliver = this.deliver();
	        	if(type==="update") {
	        		change.oldValue = oldvalue;
	        	}
	        	this.changeset.push(change);
	        	if(start) {
	        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	        	}
	    	}
	    	return true;
	    };
	    Observer.prototype.deleteProperty = function(target, property) {
	    	var oldvalue = target[property];
	    	//if(typeof(oldvalue)!=="undefined") {
		    	delete target[property];
		    	if(target.__observers__.indexOf(this)>=0 && !this.acceptlist || this.acceptlist.indexOf("delete")>=0) {
		        	var change = {object:target,name:property,type:"delete",oldValue:oldvalue},
		        		start = this.changeset.length === 0,
		        		deliver = this.deliver();
		        	this.changeset.push(change);
		        	if(start) {
		        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
		        	}
		    	}
	    	//}
	    	return true;
	    };
	    Observer.prototype.defineProperty = function(target, property, descriptor) {
	    	Object.defineProperty(target, property, descriptor);
	    	if(target.__observers__.indexOf(this)>=0 && !this.acceptlist || this.acceptlist.indexOf("reconfigure")>=0) {
	        	var change = {object:target,name:property,type:"reconfigure"},
        			start = this.changeset.length === 0,
        			deliver = this.deliver();
	        	this.changeset.push(change);
	        	if(start) {
	        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	        	}
	    	}
	    	return true;
	    };
	    Observer.prototype.setPrototypeOf = function(target, prototype) {
	    	var oldvalue = Object.getPrototypeOf(target);
	    	Object.setPrototypeOf(target, prototype);
	    	if(target.__observers__.indexOf(this)>=0 && !this.acceptlist || this.acceptlist.indexOf("setPrototype")>=0) {
	        	var change = {object:target,name:"__proto__",type:"setPrototype",oldValue:oldvalue},
    				start = this.changeset.length === 0,
    				deliver = this.deliver();
	        	this.changeset.push(change);
	        	if(start) {
	        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	        	}
	    	}
	    	return true;
	    };
	    Observer.prototype.preventExtensions = function(target) {
	        Object.preventExtensions(target);
	    	if(target.__observers__.indexOf(this)>=0 && !this.acceptlist || this.acceptlist.indexOf("preventExtensions")>=0) {
	        	var change = {object:target,type:"preventExtensions"},
					start = this.changeset.length === 0,
					deliver = this.deliver();
	        	this.changeset.push(change);
	        	if(start) {
	        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	        	}
	    	}
	    	return true;
	    };
	    Object.observe = function(object,callback,acceptlist,pausable,pause,delay) {
	    	return new Observer(object,callback,acceptlist,pausable,pause,delay);
	    };
	    Object.unobserve = function(object,callback) {
	    	if(object.__observerCallbacks__) {
	    		if(!callback) {
	    			object.__observerCallbacks__.splice(0,object.__observerCallbacks__.length);
	    			object.__observers__.splice(0,object.__observers__.length);
	    			return;
	    		}
	    		object.__observerCallbacks__.forEach(function(observercallback,i) {
	    			if(callback===observercallback) {
	    				object.__observerCallbacks__.splice(i,1);
	    				delete object.__observers__[i].callback;
	    				object.__observers__.splice(i,1);
	    			}
	    		});
	    	}
	    };
	    Array.observe = function(object,callback,acceptlist,pausable,pause,delay) {
	    	if(!(object instanceof Array) && !Array.isArray(object)) {
	    		throw new TypeError("First argument to Array.observer is not an Array");
	    	}
            	acceptlist = acceptlist || ["add", "update", "delete", "splice"];
	    	var arrayproxy = new Proxy(object,{get: function(target,property) {
	    		if(property==="unobserve") {
		    		return function(callback) {
		    			if(callback) {
		    				return Object.unobserve(target,callback);
		    			}
		    			return target.unobserve();
		    		};
		    	}
	    		if(property==="splice") {
	    			return function(start,end) {
	    				if(typeof(start)!=="number" || typeof(end)!=="number") {
	    					throw new TypeError("First two arguments to Array splice are not number, number");
	    				}
	    	    		var removed = this.slice(start,start+end),
	    	    			addedCount = (arguments.length > 1 ? arguments.length-2 : 0),
	    	    			change =  {object:object,type:"splice",index:start,removed:removed,addedCount:addedCount};
	    	    		target.splice.apply(target,arguments);
	    	    		if(acceptlist.indexOf("splice")>=0) {
	    	    			var start = proxy.__observer__.changeset.length === 0,
	    	        			deliver = proxy.__observer__.deliver();
	    	    			proxy.__observer__.changeset.push(change);
	    	    			if(start) {
	    		        		deliver(false,(typeof(deliver.delay)==="number" ? deliver.delay : 10));
	    		        	}
	    	    		}
	    	    	}
	    		}
	    		if(property==="push") {
	    			 return function(item) {
	    		    	return this.splice(this.length,0,item);
	    		    }
	    		}
	    		if(property==="pop") {
	    			 return function() {
	    		    	return this.splice(this.length-1,1);
	    		    }
	    		}
	    		if(property==="unshift") {
	    			 return function(item) {
    		    		return this.splice(0,0,item);
    		    	}
	    		}
	    		if(property==="shift") {
	    			return function() {
	    	    		return this.splice(0,1);
	    	    	}
	    		}
	    		return target[property];
	    	}});
	    	var proxy = Object.observe(arrayproxy,function(changeset) { 
	    		var changes = changeset.filter(function(change) { return change.name!=="length" && change.name!=="add" && (!acceptlist || acceptlist.indexOf(change.type)>=0); });
	    		if(changes.length>0) {
	    			callback(changes);
	    		}
	    	},acceptlist,pausable,pause,delay);
	    	return proxy;
	    };
	    Array.unobserve = function(object,callback) {
		  return object.unobserve(callback);
	    }
	}
	Object.deepObserve = function(object,callback,parts) {

		parts = (parts ? parts : []);

		var toTypeName = function(obj) {
			return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
		}

		function reobserve(value, parts) {
			var keys = Object.keys(value);
			keys.forEach(function(key) {
				if((toTypeName(value[key]) === 'object' || toTypeName(value[key]) === 'array') && !value[key].hasOwnProperty('__observers__')) {
					var newparts = parts.slice(0);
					newparts.push(key);
					value[key] = Object.deepObserve(value[key],callback,newparts);
				}
			});
		}

		reobserve(object, parts);

		var observed = Object.observe(object,function(changeset) {
			var changes = [];
			function recurse(name,rootObject,oldObject,newObject,path) {
				if(newObject instanceof Object) {
					var newkeys = Object.keys(newObject);
					newkeys.forEach(function(key) {
						if(!oldObject || (oldObject[key]!==newObject[key])) {
							var oldvalue = (oldObject && oldObject[key]!==undefined ? oldObject[key] : undefined),
								change = (oldvalue===undefined ? "add" : "update"),
								keypath = path + "." + key;

							changes.push({name:name,object:rootObject,type:change,oldValue:oldvalue,newValue:newObject[key],keypath:keypath});
							recurse(name,rootObject,oldvalue,newObject[key],keypath);
						}
					});
				} else if(oldObject instanceof Object) {
					var oldkeys = Object.keys(oldObject);
					oldkeys.forEach(function(key) {
						var change = (newObject===null ? "update" : "delete"),
							keypath = path + "." + key;
							
						changes.push({name:name,object:rootObject,type:change,oldValue:oldObject[key],newValue:newObject,keypath:keypath});
						recurse(name,rootObject,oldObject[key],undefined,keypath);
					});
				}
			}
			changeset.forEach(function(change) {
				var keypath = (parts.length>0 ? parts.join(".") + "." : "") + change.name;

				if (change.type === "update" || change.type === "add") { 
					reobserve(change.object, parts);
				}

				changes.push({name:change.name,object:change.object,type:change.type,oldValue:change.oldValue,newValue:change.object[change.name],keypath:keypath});
				recurse(change.name,change.object,change.oldValue,change.object[change.name],keypath);
			});
			callback(changes);
		});
		return observed;
	};
})();


/***/ }),
/* 120 */,
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(59);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(118);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(125);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _utils = __webpack_require__(71);

var _DataObject2 = __webpack_require__(123);

var _DataObject3 = _interopRequireDefault(_DataObject2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FilterType = { ANY: 'any', START: 'start', EXACT: 'exact' };

/**
 * The class returned from the Syncher subscribe call.
 * To be used as an observation point from a DataObjectReporter change.
 */

var DataObjectObserver = function (_DataObject) {
  (0, _inherits3.default)(DataObjectObserver, _DataObject);

  /* private
  _changeListener: MsgListener
    ----event handlers----
  _filters: {<filter>: {type: <start, exact>, callback: <function>} }
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.subscribe method
   */

  //TODO: For Further Study
  function DataObjectObserver(input) {
    (0, _classCallCheck3.default)(this, DataObjectObserver);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DataObjectObserver.__proto__ || (0, _getPrototypeOf2.default)(DataObjectObserver)).call(this, input));
    //todo: check why
    //input.initialData = input.initialData.data;

    var _this = _this2;

    _this._version = input.version;
    _this._filters = {};

    _this._syncObj.observe(function (event) {
      _this._onFilter(event);
    });

    _this._allocateListeners();
    return _this2;
  }

  /**
   * Sync Data Object Observer with last version of Data Object Reporter. Useful for Resumes
   */


  (0, _createClass3.default)(DataObjectObserver, [{
    key: 'sync',
    value: function sync() {

      var _this = this;
      console.info('[DataObjectObserver_sync] synchronising ');

      _this._syncher.read(_this._metadata.url).then(function (value) {
        console.info('[DataObjectObserver_sync] value to sync: ', value);

        (0, _assign2.default)(_this.data, (0, _utils.deepClone)(value.data));

        _this._version = value.version;

        _this._metadata.lastModified = value.lastModified;

        /*if (value.version != _this._version) {
          console.info('[DataObjectObserver_sync] updating existing data: ', _this.data);
            Object.assign(_this.data || {}, deepClone(value.data));
            _this._metadata = deepClone(value);
            delete _this._metadata.data;
            _this._version = value.version;
          } else {
          console.info('[DataObjectObserver_sync] existing data is updated: ', value);
        }*/
      }).catch(function (reason) {
        console.info('[DataObjectObserver_sync] sync failed: ', reason);
      });
    }
  }, {
    key: '_allocateListeners',
    value: function _allocateListeners() {
      (0, _get3.default)(DataObjectObserver.prototype.__proto__ || (0, _getPrototypeOf2.default)(DataObjectObserver.prototype), '_allocateListeners', this).call(this);
      var _this = this;

      _this._changeListener = _this._bus.addListener(_this._url + '/changes', function (msg) {
        if (msg.type === 'update') {
          console.log('DataObjectObserver-' + _this._url + '-RCV: ', msg);
          _this._changeObject(_this._syncObj, msg);
        }
      });
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      (0, _get3.default)(DataObjectObserver.prototype.__proto__ || (0, _getPrototypeOf2.default)(DataObjectObserver.prototype), '_releaseListeners', this).call(this);
      var _this = this;

      _this._changeListener.remove();
    }

    /**
     * Release and delete object data
     */

  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      _this.unsubscribe();
      _this._releaseListeners();
      delete _this._syncher._observers[_this._url];
    }

    /**
     * Release and delete object data
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {
      var _this = this;

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalUnSubscribe
      var unSubscribeMsg = {
        type: 'unsubscribe', from: _this._owner, to: _this._syncher._subURL,
        body: { resource: _this._url }
      };

      _this._bus.postMessage(unSubscribeMsg, function (reply) {
        console.log('DataObjectObserver-UNSUBSCRIBE: ', reply);
        if (reply.body.code === 200) {
          _this._releaseListeners();
          delete _this._syncher._observers[_this._url];
        }
      });
    }

    /**
     * Register the change listeners sent by the reporter
     * @param {string} filter - Filter that identifies the field (separated dot path). Accepts * at the end for a more unrestricted filtering.
     * @param {function(event: MsgEvent)} callback
     */

  }, {
    key: 'onChange',
    value: function onChange(filter, callback) {
      var key = filter;
      var filterObj = {
        type: FilterType.EXACT,
        callback: callback
      };

      var idx = filter.indexOf('*');
      if (idx === filter.length - 1) {
        if (idx === 0) {
          filterObj.type = FilterType.ANY;
        } else {
          filterObj.type = FilterType.START;
          key = filter.substr(0, filter.length - 1);
        }
      }

      this._filters[key] = filterObj;
    }
  }, {
    key: '_onFilter',
    value: function _onFilter(event) {
      var _this = this;

      (0, _keys2.default)(_this._filters).forEach(function (key) {
        var filter = _this._filters[key];
        if (filter.type === FilterType.ANY) {
          //match anything
          filter.callback(event);
        } else if (filter.type === FilterType.START) {
          //if starts with filter...
          if (event.field.indexOf(key) === 0) {
            filter.callback(event);
          }
        } else if (filter.type === FilterType.EXACT) {
          //exact match
          if (event.field === key) {
            filter.callback(event);
          }
        }
      });
    }
  }, {
    key: 'onDisconnected',
    value: function onDisconnected(callback) {
      var _this3 = this;

      return new _promise2.default(function (resolve, reject) {

        _this3._subscribeRegistration().then(function () {
          _this3._onDisconnected = callback;
          resolve();
        }).catch(function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: '_subscribeRegistration',
    value: function _subscribeRegistration() {
      var _this4 = this;

      var msg = {
        type: 'subscribe',
        from: this._owner,
        to: this._syncher._runtimeUrl + '/subscriptions',
        body: {
          resources: [this._url + '/registration']
        }
      };

      return new _promise2.default(function (resolve, reject) {

        _this4._bus.postMessage(msg, function (reply) {
          console.log('[DataObjectObserver._subscribeRegistration] ' + _this4._url + ' rcved reply ', reply);

          if (reply.body.code === 200) {
            _this4._generateListener(_this4._url + '/registration');
            resolve();
          } else {
            console.error('Error subscribing registration status for ', _this4._url);
            reject('Error subscribing registration status for ' + _this4._url);
          }
        });
      });
    }
  }, {
    key: '_generateListener',
    value: function _generateListener(notificationURL) {
      var _this = this;

      _this._bus.addListener(notificationURL, function (msg) {
        console.log('[DataObjectObserver.registrationNotification] ' + _this._url + ': ', msg);
        if (msg.body.value && msg.body.value === 'disconnected' && _this._onDisconnected) {
          console.log('[DataObjectObserver] ' + _this._url + ': was disconnected ', msg);
          _this._onDisconnected();
        }
      });
    }

    /**
     * Requests the reporter to execute a method on the data object
     * @param {string} method - Name of the function to be executed.
     * @param {array} params - array of parameters for the requested function
     * @return {promise}
     */

  }, {
    key: 'execute',
    value: function execute(method, params) {
      var _this5 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        var msg = {
          type: 'execute',
          from: _this5._owner,
          to: _this._url,
          body: {
            method: method,
            params: params
          }
        };

        _this._bus.postMessage(msg, function (reply) {
          console.log('[DataObjectObserver.execute] ' + _this._url + ' rcved reply ', reply);

          if (reply.body.code === 200) {
            resolve();
          } else {
            console.warning('[DataObjectObserver.execute] execution of method ' + method + ' was reject by reporter');
            reject('[DataObjectObserver.execute] execution of method ' + method + ' was reject by reporter');
          }
        });
      });
    }
  }]);
  return DataObjectObserver;
}(_DataObject3.default /* implements SyncStatus */);

exports.default = DataObjectObserver;
module.exports = exports['default'];

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(59);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(35);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__(125);

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__(34);

var _inherits3 = _interopRequireDefault(_inherits2);

var _DataObject2 = __webpack_require__(123);

var _DataObject3 = _interopRequireDefault(_DataObject2);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The class returned from the Syncher create call.
 * To be used as a reporter point, changes will be submited to DataObjectObserver instances.
 */
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

var DataObjectReporter = function (_DataObject) {
  (0, _inherits3.default)(DataObjectReporter, _DataObject);

  /* private
  _subscriptions: <hypertyUrl: { status: string } }>
    ----event handlers----
  _onSubscriptionHandler: (event) => void
  _onResponseHandler: (event) => void
  _onReadHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher.create method
   */

  //constructor(syncher, url, created, reporter, runtime, schema, name, initialStatus, initialData, childrens, mutual = true, resumed = false, description, tags, resources, observerStorage, publicObservation) {
  function DataObjectReporter(input) {
    (0, _classCallCheck3.default)(this, DataObjectReporter);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (DataObjectReporter.__proto__ || (0, _getPrototypeOf2.default)(DataObjectReporter)).call(this, input));

    var _this = _this2;

    _this._subscriptions = {};

    _this._syncObj.observe(function (event) {
      console.log('[Syncher.DataObjectReporter] ' + _this.url + ' publish change: ', event);
      _this._onChange(event);
    });

    _this._allocateListeners();

    _this._invitations = [];
    return _this2;
  }

  (0, _createClass3.default)(DataObjectReporter, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      (0, _get3.default)(DataObjectReporter.prototype.__proto__ || (0, _getPrototypeOf2.default)(DataObjectReporter.prototype), '_allocateListeners', this).call(this);
      var _this = this;

      _this._objectListener = _this._bus.addListener(_this._url, function (msg) {
        console.log('[Syncher.DataObjectReporter] listener ' + _this._url + ' Received: ', msg);
        switch (msg.type) {
          case 'response':
            _this._onResponse(msg);break;
          case 'read':
            _this._onRead(msg);break;
          case 'execute':
            _this._onExecute(msg);break;
        }
      });
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      (0, _get3.default)(DataObjectReporter.prototype.__proto__ || (0, _getPrototypeOf2.default)(DataObjectReporter.prototype), '_releaseListeners', this).call(this);
      var _this = this;

      _this._objectListener.remove();
    }

    /**
     * Send invitations (create messages) to hyperties, observers list.
     * @param  {HypertyURL[]} observers List of Hyperty URL's
     */

  }, {
    key: 'inviteObservers',
    value: function inviteObservers(observers) {
      var _this = this;

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
      // TODO: remove value and add resources? should similar to 1st create

      var toInvite = [];

      observers.forEach(function (observer) {
        if (!_this._invitations[observer]) {
          toInvite.push(observer);
          _this._invitations[observer] = observer;
        }
      });

      if (toInvite.length > 0) {
        console.log('[Syncher.DataObjectReporter] InviteObservers ', toInvite, _this._metadata);

        var inviteMsg = {
          type: 'create', from: _this._syncher._owner, to: _this._syncher._subURL,
          body: { resume: false, resource: _this._url, schema: _this._schema, value: _this._metadata, authorise: toInvite }
        };

        _this._bus.postMessage(inviteMsg);
      }
    }

    /**
     * Release and delete object data
     */

  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onDelete
      var deleteMsg = {
        type: 'delete', from: _this._owner, to: _this._syncher._subURL,
        body: { resource: _this._url }
      };

      _this._bus.postMessage(deleteMsg, function (reply) {
        console.log('DataObjectReporter-DELETE: ', reply);
        if (reply.body.code === 200) {
          _this._releaseListeners();
          delete _this._syncher._reporters[_this._url];

          //_this._syncObj.unobserve();
          _this._syncObj = {};
        }
      });
    }

    /**
     * Subscriptions requested and accepted to this reporter
     * @type {Object<HypertyURL, SyncSubscription>}
     */

  }, {
    key: 'onSubscription',


    /**
     * Setup the callback to process subscribe and unsubscribe notifications
     * @param {function(event: MsgEvent)} callback function to receive events
     */
    value: function onSubscription(callback) {
      this._onSubscriptionHandler = callback;
    }

    /**
     * Setup the callback to process response notifications of the create's
     * @param {function(event: MsgEvent)} callback function to receive events
     */

  }, {
    key: 'onResponse',
    value: function onResponse(callback) {
      this._onResponseHandler = callback;
    }

    /**
     * Setup the callback to process read notifications
     * @param {function(event: MsgEvent)} callback
     */

  }, {
    key: 'onRead',
    value: function onRead(callback) {
      this._onReadHandler = callback;
    }

    /**
     * Setup the callback to process execute notifications
     * @param {function(event: MsgEvent)} callback
     */

  }, {
    key: 'onExecute',
    value: function onExecute(callback) {
      this._onExecuteHandler = callback;
    }

    //FLOW-IN: message received from parent Syncher -> _onForward

  }, {
    key: '_onForward',
    value: function _onForward(msg) {
      var _this = this;

      console.log('DataObjectReporter-RCV: ', msg);
      switch (msg.body.type) {
        case 'subscribe':
          _this._onSubscribe(msg);break;
        case 'unsubscribe':
          _this._onUnSubscribe(msg);break;
      }
    }

    //FLOW-IN: message received from this -> _onForward: emitted by a remote Syncher -> subscribe

  }, {
    key: '_onSubscribe',
    value: function _onSubscribe(msg) {
      var _this3 = this;

      var _this = this;
      var hypertyUrl = msg.body.from;
      var dividedURL = (0, _utils.divideURL)(hypertyUrl);
      var domain = dividedURL.domain;

      console.log('[DataObjectReporter._onSubscribe]', msg, domain, dividedURL);

      var event = {
        type: msg.body.type,
        url: hypertyUrl,

        domain: domain,

        identity: msg.body.identity,

        accept: function accept() {
          //create new subscription
          var sub = { url: hypertyUrl, status: 'live' };
          _this._subscriptions[hypertyUrl] = sub;
          if (_this.metadata.subscriptions) {
            _this.metadata.subscriptions.push(sub.url);
          }

          var msgValue = _this._metadata;
          msgValue.data = (0, _utils.deepClone)(_this.data);
          msgValue.version = _this._version;

          //process and send childrens data
          // let childrenValues = {};
          //
          // if (_this._childrenObjects) {
          //   Object.keys(_this._childrenObjects).forEach((childrenId) => {
          //     let childrenData = _this._childrenObjects[childrenId];
          //     childrenValues[childrenId] = deepClone(childrenData);
          //   });
          //   msgValue.childrenObjects = childrenValues;
          // }

          var sendMsg = {
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 200, schema: _this._schema, value: msgValue }
          };

          //TODO: For Further Study
          if (msg.body.hasOwnProperty('mutualAuthentication') && !msg.body.mutualAuthentication) {
            sendMsg.body.mutualAuthentication = _this3._mutualAuthentication;
            _this3._mutualAuthentication = msg.body.mutualAuthentication;
          }

          //send ok response message
          _this._bus.postMessage(sendMsg);

          return sub;
        },

        reject: function reject(reason) {
          //send reject response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 403, desc: reason }
          });
        }
      };

      if (_this._onSubscriptionHandler) {
        console.log('SUBSCRIPTION-EVENT: ', event);
        _this._onSubscriptionHandler(event);
      }
    }

    //FLOW-IN: message received from this -> _onForward: emitted by a remote DataObjectObserver -> unsubscribe

  }, {
    key: '_onUnSubscribe',
    value: function _onUnSubscribe(msg) {
      var _this = this;
      var hypertyUrl = msg.body.from;
      var dividedURL = (0, _utils.divideURL)(hypertyUrl);
      var domain = dividedURL.domain;

      console.log('[DataObjectReporter._onUnSubscribe]', msg, domain, dividedURL);

      //let sub = _this._subscriptions[hypertyUrl];
      delete _this._subscriptions[hypertyUrl];
      delete _this._invitations[hypertyUrl];

      var event = {
        type: msg.body.type,
        url: hypertyUrl,
        domain: domain,
        identity: msg.body.identity
      };

      // TODO: check if the _onSubscriptionHandler it is the same of the subscriptions???
      if (_this._onSubscriptionHandler) {
        console.log('UN-SUBSCRIPTION-EVENT: ', event);
        _this._onSubscriptionHandler(event);
      }
    }

    //FLOW-IN: message received from ReporterURL address: emited by a remote Syncher -> _onRemoteCreate -> event.ack

  }, {
    key: '_onResponse',
    value: function _onResponse(msg) {
      var _this = this;

      var event = {
        type: msg.type,
        url: msg.from,
        code: msg.body.code
      };

      if (_this._onResponseHandler) {
        console.log('RESPONSE-EVENT: ', event);
        _this._onResponseHandler(event);
      }
    }

    //FLOW-IN: message received from ReporterURL address: emited by a remote Syncher -> read

  }, {
    key: '_onRead',
    value: function _onRead(msg) {
      var _this = this;
      var objectValue = (0, _utils.deepClone)(_this.metadata);
      objectValue.data = (0, _utils.deepClone)(_this.data);
      objectValue.version = _this._version;

      var response = {
        id: msg.id, type: 'response', from: msg.to, to: msg.from,
        body: { code: 200, value: objectValue }
      };

      var event = {
        type: msg.type,
        url: msg.from,

        accept: function accept() {
          _this._bus.postMessage(response);
        },

        reject: function reject(reason) {
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 401, desc: reason }
          });
        }
      };

      // if the requester is an authorised observer, the data object is responded otherwise an event is triggered
      var subscriptions = [];

      if (_this.metadata.subscriptions) {
        subscriptions = _this.metadata.subscriptions;
      } else if (_this._subscriptions) {
        subscriptions = (0, _keys2.default)(_this._subscriptions).map(function (key) {
          return _this._subscriptions[key].url;
        });
      }

      if (subscriptions.indexOf(msg.from) != -1) {
        _this._bus.postMessage(response);
      } else if (_this._onReadHandler) {
        console.log('READ-EVENT: ', event);
        _this._onReadHandler(event);
      }
    }

    // Execute request received

  }, {
    key: '_onExecute',
    value: function _onExecute(msg) {
      var _this = this;

      if (!msg.body.method) throw '[DataObjectReporter._onExecute] method missing ', msg;

      var response = {
        id: msg.id, type: 'response', from: msg.to, to: msg.from,
        body: { code: 200 }
      };

      var event = {
        type: msg.type,
        url: msg.from,
        method: msg.body.method,
        params: msg.body.params,

        accept: function accept() {
          _this._bus.postMessage(response);
        },

        reject: function reject(reason) {
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: 401, desc: reason }
          });
        }
      };

      if (_this._onExecuteHandler) {
        console.log('[DataObjectReporter] EXECUTE-EVENT: ', event);
        _this._onExecuteHandler(event);
      }
    }
  }, {
    key: 'subscriptions',
    get: function get() {
      return this._subscriptions;
    }
  }]);
  return DataObjectReporter;
}(_DataObject3.default /* implements SyncStatus */);

exports.default = DataObjectReporter;
module.exports = exports['default'];

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(59);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(118);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(124);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

var _DataObjectChild = __webpack_require__(149);

var _DataObjectChild2 = _interopRequireDefault(_DataObjectChild);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main extension class for observers and reporters, with common properties and methods.
 * Children management is common for observers and reporters.
 */
var DataObject = function () {
  /* private
  _version: number
    _owner: HypertyURL
  _url: ObjectURL
  _schema: Schema
  _bus: MiniBus
  _status: on | paused
  _syncObj: SyncData
    _children: { id: DataObjectChild }
  _childrenListeners: [MsgListener]
    ----event handlers----
  _onAddChildHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the Syncher create or subscribe method's
   */
  //constructor(syncher, url, created, reporter, runtime, schema, name, initialStatus, initialData, childrens, mutual = true, resumed = false, description, tags, resources, observerStorage, publicObservation) {
  function DataObject(input) {
    (0, _classCallCheck3.default)(this, DataObject);

    var _this = this;

    function throwMandatoryParmMissingError(par) {
      throw '[DataObject] ' + par + ' mandatory parameter is missing';
    }

    input.syncher ? _this._syncher = input.syncher : throwMandatoryParmMissingError('syncher');
    input.url ? _this._url = input.url : throwMandatoryParmMissingError('url');
    input.created ? _this._created = input.created : throwMandatoryParmMissingError('created');
    input.reporter ? _this._reporter = input.reporter : throwMandatoryParmMissingError('reporter');
    input.runtime ? _this._runtime = input.runtime : throwMandatoryParmMissingError('runtime');
    input.schema ? _this._schema = input.schema : throwMandatoryParmMissingError('schema');
    input.name ? _this._name = input.name : throwMandatoryParmMissingError('name');

    _this._status = input.status;

    if (input.data) {
      _this._syncObj = new _ProxyObject2.default(input.data);
    } else {
      _this._syncObj = new _ProxyObject2.default({});
    }
    _this._childrens = input.childrens;

    //TODO: For Further Study
    _this._mutualAuthentication = input.mutual;

    _this._version = 0;
    _this._childId = 0;
    _this._childrenListeners = [];

    _this._resumed = input.resume;

    if (input.resume) {
      _this._version = input.version;
    }

    _this._owner = input.syncher._owner;
    _this._bus = input.syncher._bus;

    if (input.description) _this._description = input.description;
    if (input.tags) _this._tags = input.tags;
    if (input.resources) _this._resources = input.resources;
    if (input.observerStorage) _this._observerStorage = input.observerStorage;
    if (input.publicObservation) _this._publicObservation = input.publicObservation;

    _this._metadata = (0, _assign2.default)(input);
    _this._metadata.lastModified = _this._metadata.created;

    delete _this._metadata.data;
    delete _this._metadata.syncher;
    delete _this._metadata.authorise;
  }

  (0, _createClass3.default)(DataObject, [{
    key: '_getLastChildId',
    value: function _getLastChildId() {
      var _this = this;

      var childIdInt = 0;
      var childIdString = _this._owner + '#' + childIdInt;

      (0, _keys2.default)(_this._childrens).filter(function (key) {
        if (_this._childrens[key].childId > childIdString) {
          childIdString = _this._childrens[key].childId;
        }
      });

      return childIdInt = Number(childIdString.split('#')[1]);
    }
  }, {
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this2 = this;

      var _this = this;

      var childBaseURL = _this._url + '/children/';
      console.log('[Data Object - AllocateListeners] - ', _this._childrens);
      if (_this._childrens) {
        _this._childrens.forEach(function (child) {
          var childURL = childBaseURL + child;
          var listener = _this._bus.addListener(childURL, function (msg) {
            //ignore msg sent by himself
            if (msg.from !== _this2._owner) {
              console.log('DataObject-Children-RCV: ', msg);
              switch (msg.type) {
                case 'create':
                  _this._onChildCreate(msg);break;
                case 'delete':
                  console.log(msg);break;
                default:
                  _this._changeChildren(msg);break;
              }
            }
          });

          _this._childrenListeners.push(listener);
        });
      }
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      _this._childrenListeners.forEach(function (listener) {
        listener.remove();
      });

      if (_this._childrenObjects) {
        (0, _keys2.default)(_this._childrenObjects).forEach(function (key) {
          _this._childrenObjects[key]._releaseListeners();
        });
      }
    }

    /**
     *
     */

  }, {
    key: 'resumeChildrens',
    value: function resumeChildrens(childrens) {
      var _this3 = this;

      var _this = this;

      var childIdString = this._owner + '#' + this._childId;

      if (childrens && !_this._childrenObjects) {
        _this._childrenObjects = {};
      }

      //setup childrens data from subscription
      (0, _keys2.default)(childrens).forEach(function (childrenResource) {
        var children = childrens[childrenResource];

        (0, _keys2.default)(children).forEach(function (childId) {
          var childInput = children[childId].value;
          console.log('[DataObject.resumeChildrens] new DataObjectChild: ', childrenResource, children, childInput);
          childInput.parentObject = _this;
          childInput.parent = _this._url;
          _this._childrenObjects[childId] = new _DataObjectChild2.default(childInput);
          _this._childrenObjects[childId].identity = children[childId].identity;

          if (childId > childIdString) {
            childIdString = childId;
          }

          console.log('[DataObjectReporter.resumeChildrens] - resumed: ', _this3._childrenObjects[childId]);
        });
      });

      this._childId = Number(childIdString.split('#')[1]);
    }

    /**
     * All Metadata about the Data Object
     * @type {Object} -
     */

  }, {
    key: 'pause',


    /**
     * @ignore
     */
    value: function pause() {
      //TODO: this feature needs more analise
      throw 'Not implemented';
    }

    /**
     * @ignore
     */

  }, {
    key: 'resume',
    value: function resume() {
      //TODO: this feature needs more analise
      throw 'Not implemented';
    }

    /**
     * @ignore
     */

  }, {
    key: 'stop',
    value: function stop() {
      //TODO: should remove the subscription and send message unsubscribe?
      throw 'Not implemented';
    }

    /**
     * Create and add a DataObjectChild to a children collection.
     * @param {String} children - Children name where the child is added.
     * @param {JSON} initialData - Initial data of the child
     * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
     * @param  {SyncChildMetadata} input - (optional) All additional metadata about the DataObjectChild.
     * @return {Promise<DataObjectChild>} - Return Promise to a new DataObjectChild.
     */

  }, {
    key: 'addChild',
    value: function addChild(children, initialData, identity, input) {
      var _this = this;

      //returns promise, in the future, the API may change to asynchronous call
      return new _promise2.default(function (resolve) {

        var childInput = (0, _assign2.default)({}, input);

        //create new child unique ID, based on hypertyURL
        _this._childId++;
        childInput.url = _this._owner + '#' + _this._childId;
        var msgChildPath = _this._url + '/children/' + children;

        childInput.parentObject = _this;
        childInput.data = initialData;
        childInput.reporter = _this._owner;
        childInput.created = new Date().toISOString();
        childInput.runtime = _this._runtime;
        childInput.schema = _this._schema;
        childInput.parent = _this.url;

        var newChild = new _DataObjectChild2.default(childInput);

        var bodyValue = newChild.metadata;
        bodyValue.data = initialData;

        //FLOW-OUT: this message will be sent directly to a resource child address: MessageBus
        var requestMsg = {
          type: 'create', from: _this._owner, to: msgChildPath,
          body: { resource: childInput.url, value: bodyValue }
        };

        if (identity) {
          newChild.identity = identity;
          requestMsg.body.identity = identity;
        }

        //TODO: For Further Study
        if (!_this._mutualAuthentication) requestMsg.body.mutualAuthentication = _this._mutualAuthentication;

        var msgId = _this._bus.postMessage(requestMsg);

        console.log('[DataObject.addChild] added ', newChild, msgId, bodyValue);

        newChild.onChange(function (event) {
          _this._onChange(event, { path: msgChildPath, childId: childInput.url });
        });

        if (!_this._childrenObjects) {
          _this._childrenObjects = {};
        }

        _this._childrenObjects[childInput.url] = newChild;

        resolve(newChild);
      });
    }

    /**
     * Setup the callback to process create and delete of childrens.
     * @param {function(event: MsgEvent)} callback
     */

  }, {
    key: 'onAddChild',
    value: function onAddChild(callback) {
      this._onAddChildrenHandler = callback;
    }

    //FLOW-IN: message received from a remote DataObject -> addChild

  }, {
    key: '_onChildCreate',
    value: function _onChildCreate(msg) {
      var _this = this;
      var childInput = (0, _utils.deepClone)(msg.body.value);
      childInput.parentObject = _this;

      console.log('[DataObject._onChildCreate] receivedBy ' + _this._owner + ' : ', msg);
      var newChild = new _DataObjectChild2.default(childInput);
      newChild.identity = msg.body.identity;

      if (!_this._childrenObjects) {
        _this._childrenObjects = {};
      }

      _this._childrenObjects[childInput.url] = newChild;

      //todo: remove response below
      setTimeout(function () {
        //FLOW-OUT: will flow to DataObjectChild -> _onResponse
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 200, source: _this._owner }
        });
      });

      var event = {
        type: msg.type,
        from: msg.from,
        url: msg.to,
        value: msg.body.value.data,
        childId: childInput.url,
        identity: msg.body.identity
      };

      if (_this._onAddChildrenHandler) {
        console.log('ADD-CHILDREN-EVENT: ', event);
        _this._onAddChildrenHandler(event);
      }
    }

    //send delta messages to subscriptions

  }, {
    key: '_onChange',
    value: function _onChange(event, childInfo) {
      var _this = this;

      _this._metadata.lastModified = new Date().toISOString();

      _this._version++;

      if (_this._status === 'live') {
        //FLOW-OUT: this message will be sent directly to a resource changes address: MessageBus
        var changeMsg = {
          type: 'update', from: _this._url, to: _this._url + '/changes',
          body: { version: _this._version, source: _this._owner, attribute: event.field, lastModified: _this._metadata.lastModified }
        };

        console.log('[DataObject - _onChange] - ', event, childInfo, changeMsg);

        if (event.oType === _ProxyObject.ObjectType.OBJECT) {
          if (event.cType !== _ProxyObject.ChangeType.REMOVE) {
            changeMsg.body.value = event.data;
          }
        } else {
          changeMsg.body.attributeType = event.oType;
          changeMsg.body.value = event.data;
          if (event.cType !== _ProxyObject.ChangeType.UPDATE) {
            changeMsg.body.operation = event.cType;
          }
        }

        //childInfo must have (path, childId)
        if (childInfo) {
          changeMsg.to = childInfo.path;
          changeMsg.body.resource = childInfo.childId;
        }

        //TODO: For Further Study
        if (!_this._mutualAuthentication) changeMsg.body.mutualAuthentication = _this._mutualAuthentication;

        _this._bus.postMessage(changeMsg);
      }
    }

    //FLOW-IN: delta message received from a remote DataObjectReporter or DataObjectChild when changing data

  }, {
    key: '_changeObject',
    value: function _changeObject(syncObj, msg) {
      var _this = this;

      //TODO: update version ?
      //how to handle an incorrect version ? Example: receive a version 3 when the observer is in version 1, where is the version 2 ?
      //will we need to confirm the reception ?
      if (_this._version + 1 <= msg.body.version) {
        _this._version = msg.body.version;
        var path = msg.body.attribute;
        var value = (0, _utils.deepClone)(msg.body.value);
        var findResult = syncObj.findBefore(path);

        if (msg.body.lastModified) {
          _this._metadata.lastModified = msg.body.lastModified;
        } else {
          _this._metadata.lastModified = new Date().toISOString();
        }

        if (msg.body.attributeType === _ProxyObject.ObjectType.ARRAY) {
          if (msg.body.operation === _ProxyObject.ChangeType.ADD) {
            var arr = findResult.obj;
            var index = findResult.last;
            Array.prototype.splice.apply(arr, [index, 0].concat(value));
          } else if (msg.body.operation === _ProxyObject.ChangeType.REMOVE) {
            var _arr = findResult.obj;
            var _index = findResult.last;
            _arr.splice(_index, value);
          } else {
            findResult.obj[findResult.last] = value; // UPDATE
          }
        } else {
          if (msg.body.value) {
            findResult.obj[findResult.last] = value; // UPDATE or ADD
          } else {
            delete findResult.obj[findResult.last]; // REMOVE
          }
        }
      } else {
        //TODO: how to handle unsynchronized versions?
        console.log('UNSYNCHRONIZED VERSION: (data => ' + _this._version + ', msg => ' + msg.body.version + ')');
      }
    }

    //FLOW-IN: message received from a remote DataObjectChild when changing data

  }, {
    key: '_changeChildren',
    value: function _changeChildren(msg) {
      var _this = this;
      console.log('Change children: ', _this._owner, msg);

      var childId = msg.body.resource;
      var children = _this._childrenObjects[childId];

      if (children) {
        _this._changeObject(children._syncObj, msg);
      } else {
        console.log('No children found for: ', childId);
      }
    }
  }, {
    key: 'metadata',
    get: function get() {
      return this._metadata;
    }

    /**
     * Object URL of reporter or observer
     * @type {ObjectURL}
     */

  }, {
    key: 'url',
    get: function get() {
      return this._url;
    }

    /**
     * Object schema URL (this field is not yet stable, and is subsject to change)
     * @type {SchemaURL}
     */

  }, {
    key: 'schema',
    get: function get() {
      return this._schema;
    }

    /**
     * Status of the reporter or observer connection (this field is not yet stable, and is subsject to change)
     * @type {Status} - Enum of: on | paused
     */

  }, {
    key: 'status',
    get: function get() {
      return this._status;
    }

    /**
     * Data structure to be synchronized.
     * @type {JSON} - JSON structure that should follow the defined schema, if any.
     */

  }, {
    key: 'data',
    get: function get() {
      return this._syncObj.data;
    }

    /**
     * All created children's since the subscription, doesn't contain all children's since reporter creation.
     * @type {Object<ChildId, DataObjectChild>}
     */

  }, {
    key: 'childrens',
    get: function get() {
      return this._childrenObjects;
    }
  }]);
  return DataObject;
}(); /**
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

exports.default = DataObject;
module.exports = exports['default'];

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectType = exports.ChangeType = undefined;

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(119);

var _utils = __webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objectType = { ARRAY: '[object Array]', OBJECT: '[object Object]' };

/**
 * @access private
 * Main class that maintains a JSON object, and observes changes in this object, recursively.
 * Internal objects and arrays are also observed.
 */

var SyncObject = function () {
  function SyncObject(initialData) {
    (0, _classCallCheck3.default)(this, SyncObject);

    var _this = this;

    _this._observers = [];
    _this._filters = {};

    this._data = initialData || {};

    this._internalObserve(this._data);
  }

  (0, _createClass3.default)(SyncObject, [{
    key: 'observe',
    value: function observe(callback) {
      this._observers.push(callback);
    }
  }, {
    key: 'find',
    value: function find(path) {
      var list = (0, _utils.parseAttributes)(path);

      return this._findWithSplit(list);
    }
  }, {
    key: 'findBefore',
    value: function findBefore(path) {
      var result = {};
      var list = (0, _utils.parseAttributes)(path);
      result.last = list.pop();
      result.obj = this._findWithSplit(list);

      return result;
    }
  }, {
    key: '_findWithSplit',
    value: function _findWithSplit(list) {
      var obj = this._data;
      list.forEach(function (value) {
        obj = obj[value];
      });

      return obj;
    }
  }, {
    key: '_internalObserve',
    value: function _internalObserve(object) {
      var _this2 = this;

      var handler = function handler(changeset) {

        changeset.every(function (change) {
          _this2._onChanges(change);
        });
      };

      this._data = Object.deepObserve(object, handler);
    }
  }, {
    key: '_fireEvent',
    value: function _fireEvent(event) {
      this._observers.forEach(function (callback) {
        callback(event);
      });
    }
  }, {
    key: '_onChanges',
    value: function _onChanges(change) {

      var obj = change.object;
      var objType = void 0;

      if (obj.constructor === Object) {
        objType = ObjectType.OBJECT;
      }

      if (obj.constructor === Array) {
        objType = ObjectType.ARRAY;
      }

      var fieldString = change.keypath;

      // console.log('Field:', fieldString);
      // console.log('type:', change.type);

      //let oldValue = change.oldValue;
      var newValue = obj[change.name];

      // console.info(change.type + ' | Field: ' + fieldString + ' | New Value:', JSON.stringify(newValue), fieldString.includes('length'));

      if (change.type === 'update' && !fieldString.includes('.length')) {
        this._fireEvent({
          cType: ChangeType.UPDATE,
          oType: objType,
          field: fieldString,
          data: newValue
        });
      }

      if (change.type === 'add') {
        this._fireEvent({
          cType: ChangeType.ADD,
          oType: objType,
          field: fieldString,
          data: newValue
        });
      }

      if (change.type === 'delete') {
        this._fireEvent({
          cType: ChangeType.REMOVE,
          oType: objType,
          field: fieldString
        });
      }
    }
  }, {
    key: 'data',
    get: function get() {
      return this._data;
    }
  }]);
  return SyncObject;
}();

var ChangeType = exports.ChangeType = { UPDATE: 'update', ADD: 'add', REMOVE: 'remove' };
var ObjectType = exports.ObjectType = { OBJECT: 'object', ARRAY: 'array' };
exports.default = SyncObject;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__(31);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__(154);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(72);

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__(118);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _utils = __webpack_require__(71);

var _DataObjectReporter = __webpack_require__(122);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(121);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

var _DataProvisional = __webpack_require__(150);

var _DataProvisional2 = _interopRequireDefault(_DataProvisional);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The main class for the syncher package.
* The Syncher is a singleton class per Hyperty/URL and it is the owner of all created Data Sync Objects according to the Reporter - Observer pattern.
* Main functionality is to create reporters and to subscribe to existing ones.
*/
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
var Syncher = function () {
  /* private
  _owner: URL
  _bus: MiniBus
    _subURL: URL
    _reporters: <url: DataObjectReporter>
  _observers: <url: DataObjectObserver>
  _provisionals: <url: DataProvisional>
    ----event handlers----
  _onNotificationHandler: (event) => void
  _onResume: (event) => void
  */

  /**
  * Constructor that should be used by the Hyperty owner
  * @param {HypertyURL} owner - Hyperty URL owner. An URL allocated by the runtime that uniquely identifies the Hyperty.
  * @param {MiniBus} bus - An instance of the MiniBus provided in the sandbox. When an object (Reporter or Observed) is created, the SyncherManager will add a listener in the MiniBus to receive/send Messages of that object.
  * @param {JSON} config - Configuration data. The only required field for now is the runtimeURL.
  */
  function Syncher(owner, bus, config) {
    (0, _classCallCheck3.default)(this, Syncher);

    var _this = this;

    _this._owner = owner;
    _this._bus = bus;

    _this._subURL = config.runtimeURL + '/sm';
    _this._runtimeUrl = config.runtimeURL;

    _this._reporters = {};
    _this._observers = {};
    _this._provisionals = {};

    bus.addListener(owner, function (msg) {
      //ignore msg sent by himself
      if (msg.from !== owner) {
        console.info('[Syncher] Syncher-RCV: ', msg, _this);
        switch (msg.type) {
          case 'forward':
            _this._onForward(msg);break;
          case 'create':
            _this._onRemoteCreate(msg);break;
          case 'delete':
            _this._onRemoteDelete(msg);break;
          case 'execute':
            _this._onExecute(msg);break;
        }
      }
    });
  }

  /**
  * The owner of the Syncher and all created reporters.
  * @type {HypertyURL}
  */


  (0, _createClass3.default)(Syncher, [{
    key: 'create',


    /**
    * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
    * @param  {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
    * @param  {HypertyURL[]} observers - List of hyperties that are pre-authorized for subscription
    * @param  {JSON} initialData - Initial data of the reporter
    * @param  {boolean} store - (Optional) if true, object will be stored by the runtime
    * @param  {boolean} p2p - (Optional) if true, data synchronisation stream will use p2p connection as much as possible
    * @param  {string} name - (Optional) the name of the dataobject
    * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
    * @param  {SyncMetadata} input - (optional) all metadata required to sunc the Data Object.
    * @return {Promise<DataObjectReporter>} Return Promise to a new Reporter. The reporter can be accepted or rejected by the PEP
    */
    value: function create(schema, observers, initialData) {
      var store = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var p2p = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var name = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'no name';
      var identity = arguments[6];
      var input = arguments[7];


      if (!schema) throw Error('[Syncher - Create] - You need specify the data object schema');
      if (!observers) throw Error('[Syncher - Create] -The observers should be defined');

      var _this = this;
      var createInput = (0, _assign2.default)({}, input);

      createInput.p2p = p2p;
      createInput.store = store;
      createInput.schema = schema;
      createInput.authorise = observers;
      initialData ? createInput.data = (0, _utils.deepClone)(initialData) : createInput.data = {};
      createInput.name = name.length === 0 ? 'no name' : name;
      createInput.reporter = _this._owner;
      createInput.resume = false;
      if (input) {
        createInput.mutual = input.mutual ? input.mutual : true;
        createInput.name = input.name ? input.name : createInput.name;
      } else {
        createInput.mutual = true;
      }

      if (identity) {
        createInput.identity = identity;
      }

      //Object.assign(createInput, {resume: false});

      console.log('[syncher - create] - create Reporter - createInput: ', createInput);

      return _this._create(createInput);
    }

    /**
    * Request a DataObjectReporter creation. The URL will be be requested by the allocation mechanism.
    * @param  {Object} criteria - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
    * @return {Promise<DataObjectReporter>[]} Return a promise with a list of DataObjectReporter to be resumed;
    */

  }, {
    key: 'resumeReporters',
    value: function resumeReporters(criteria) {
      var _this = this;
      console.log('[syncher - create] - resume Reporter - criteria: ', criteria);

      (0, _assign2.default)(criteria, { resume: true });

      return _this._resumeCreate(criteria);
    }

    /**
    * Request a subscription to an existent reporter object.
    * @param {SchemaURL} schema - Hyperty Catalogue URL address that can be used to retrieve the JSON-Schema describing the Data Object schema
    * @param {ObjectURL} objURL - Address of the existent reporter object to be observed
    * @param {Boolean} [store=false] - Save the subscription on the Syncher Manager for further resume (Default is false)
    * @param {Boolean} [p2p=false] - Info about if should use p2p connection (Default is false)
    * @param {Boolean} [mutual=true] - Info about if messages of this object should be encrypted (Default is true)
    * @param  {MessageBodyIdentity} identity - (optional) identity data to be added to identity the user reporter. To be used for legacy identities.
    * @return {Promise<DataObjectObserver>} Return Promise to a new observer. It's associated with the reporter.
    */

  }, {
    key: 'subscribe',
    value: function subscribe(schema, objURL) {
      var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var p2p = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var mutual = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var identity = arguments[5];

      var _this = this;
      var criteria = {};

      criteria.p2p = p2p;
      criteria.store = store;
      criteria.schema = schema;

      criteria.resource = objURL;
      if (identity) {
        criteria.identity = identity;
      }

      //TODO: For Further Study
      criteria.mutual = mutual;

      console.log('[syncher - subscribe] - subscribe criteria: ', criteria);

      (0, _assign2.default)(criteria, { resume: false });

      return _this._subscribe(criteria);
    }

    /**
    * Request a subscription to an existent reporter object.
    * @param {criteria} criteria - Information to discovery the observer object
    * @return {Promise<DataObjectObserver>} Return Promise to a new observer. It's associated with the reporter.
    */

  }, {
    key: 'resumeObservers',
    value: function resumeObservers(criteria) {
      var _this = this;
      var _criteria = criteria || {};

      (0, _assign2.default)(_criteria, { resume: true });

      return _this._resumeSubscribe(_criteria);
    }

    /**
    * Request a read action on the reporter object
    * @param {ObjectURL} objURL - URL of the reporter object to be read
    * @return {Promise<Object>} Return Promise to last available data of the reporter
    */

  }, {
    key: 'read',
    value: function read(objURL) {
      var _this = this;

      //FLOW-OUT: this message will be sent directly to reporter object (maybe there is no listener available, so it will be resolved with MessageBus -> resolve)
      //will reach the remote object in DataObjectReporter -> _onRead
      var readMsg = {
        type: 'read', from: _this._owner, to: objURL
      };

      return new _promise2.default(function (resolve, reject) {
        _this._bus.postMessage(readMsg, function (reply) {
          console.log('read-response: ', reply);
          if (reply.body.code === 200) {
            resolve(reply.body.value);
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }

    /**
    * Setup the callback to process create and delete events of remove Reporter objects.
    * This is releated to the messagens sent by create to the observers Hyperty array.
    * @param {function(event: MsgEvent)} callback
    */

  }, {
    key: 'onNotification',
    value: function onNotification(callback) {
      this._onNotificationHandler = callback;
    }

    /**
    * Setup the callback to process close events from the runtime.
    * @param {function(event: MsgEvent)} callback
    */

  }, {
    key: 'onClose',
    value: function onClose(callback) {
      this._onClose = callback;
    }
  }, {
    key: '_create',
    value: function _create(input) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        var reporterInput = (0, _assign2.default)({}, input);

        var resume = input.resume;

        reporterInput.created = new Date().toISOString();
        reporterInput.runtime = _this._runtimeUrl;

        var requestValue = (0, _utils.deepClone)(reporterInput);

        delete requestValue.p2p;
        delete requestValue.store;
        delete requestValue.observers;
        delete requestValue.identity;

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
        var requestMsg = {
          type: 'create', from: _this._owner, to: _this._subURL,
          body: { resume: resume, value: requestValue }
        };

        requestMsg.body.schema = reporterInput.schema;

        if (reporterInput.p2p) requestMsg.body.p2p = reporterInput.p2p;
        if (reporterInput.store) requestMsg.body.store = reporterInput.store;
        if (reporterInput.identity) requestMsg.body.identity = reporterInput.identity;

        console.log('[syncher._create]: ', reporterInput, requestMsg);

        //request create to the allocation system. Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('[syncher - create] - create-response: ', reply);
          if (reply.body.code === 200) {
            //reporter creation accepted
            reporterInput.url = reply.body.resource;

            reporterInput.status = 'live'; // pch: do we ned this?
            reporterInput.syncher = _this;
            reporterInput.childrens = reply.body.childrenResources;

            var newObj = _this._reporters[reporterInput.url];
            if (!newObj) {
              newObj = new _DataObjectReporter2.default(reporterInput);
              _this._reporters[reporterInput.url] = newObj;
              newObj.inviteObservers(input.authorise);
            }

            resolve(newObj);
          } else {
            //reporter creation rejected
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: '_resumeCreate',
    value: function _resumeCreate(criteria) {
      var _this2 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {
        var resume = criteria.resume;

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onCreate
        var requestMsg = {
          type: 'create', from: _this._owner, to: _this._subURL,
          body: { resume: resume }
        };

        console.log('[syncher - create]: ', criteria, requestMsg);

        if (criteria) {
          requestMsg.body.value = criteria;
          requestMsg.body.value.reporter = _this._owner;
        }

        if (criteria.p2p) requestMsg.body.p2p = criteria.p2p;
        if (criteria.store) requestMsg.body.store = criteria.store;
        if (criteria.observers) requestMsg.body.authorise = criteria.observers;
        if (criteria.identity) requestMsg.body.identity = criteria.identity;

        console.log('[syncher._resumeCreate] - resume message: ', requestMsg);

        //request create to the allocation system. Can be rejected by the PolicyEngine.
        _this._bus.postMessage(requestMsg, function (reply) {
          console.log('[syncher._resumeCreate] - create-resumed-response: ', reply);
          if (reply.body.code === 200) {

            var listOfReporters = reply.body.value;

            for (var index in listOfReporters) {

              var dataObject = listOfReporters[index];

              //reporter creation accepted

              dataObject.data = (0, _utils.deepClone)(dataObject.data) || {};

              if (dataObject.childrenObjects) {
                dataObject.childrenObjects = (0, _utils.deepClone)(dataObject.childrenObjects);
              }

              dataObject.mutual = false;
              dataObject.resume = true;
              dataObject.status = 'live'; // pch: do we ned this?
              dataObject.syncher = _this;

              console.log('[syncher._resumeCreate] - create-resumed-dataObjectReporter', dataObject);

              var newObj = new _DataObjectReporter2.default(dataObject);

              if (dataObject.childrenObjects) {
                newObj.resumeChildrens(dataObject.childrenObjects);
              }
              _this._reporters[dataObject.url] = newObj;
            }

            resolve(_this._reporters);
            if (_this2._onReportersResume) _this2._onReportersResume(_this2._reporters);
          } else if (reply.body.code === 404) {
            resolve({});
          } else {
            //reporter creation rejected
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: '_subscribe',
    value: function _subscribe(input) {
      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalSubscribe
        var subscribeMsg = {
          type: 'subscribe', from: _this._owner, to: _this._subURL,
          body: {}
        };

        // Hyperty request to be an Observer
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#hyperty-request-to-be-an-observer

        // Resume Subscriptions for the same Hyperty URL
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-the-same-hyperty-url

        // Resume Subscriptions for a certain user and data schema independently of the Hyperty URL.
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-a-certain-user-and-data-schema-independently-of-the-hyperty-url
        if (input) {
          if (input.hasOwnProperty('p2p')) subscribeMsg.body.p2p = input.p2p;
          if (input.hasOwnProperty('store')) subscribeMsg.body.store = input.store;
          if (input.hasOwnProperty('schema')) subscribeMsg.body.schema = input.schema;
          if (input.hasOwnProperty('identity')) subscribeMsg.body.identity = input.identity;
          if (input.hasOwnProperty('resource')) subscribeMsg.body.resource = input.resource;
        }

        subscribeMsg.body.resume = input.resume;

        //TODO: For Further Study
        if (input.hasOwnProperty('mutual')) subscribeMsg.body.mutualAuthentication = input.mutual;

        console.log('[syncher_subscribe] - subscribe message: ', input, subscribeMsg);

        //request subscription
        //Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
        //for more info see the DataProvisional class documentation.
        _this._bus.postMessage(subscribeMsg, function (reply) {
          console.log('[syncher] - subscribe-response: ', reply);

          var objURL = reply.body.resource;

          var newProvisional = _this._provisionals[objURL];
          delete _this._provisionals[objURL];
          if (newProvisional) newProvisional._releaseListeners();

          if (reply.body.code < 200) {
            console.log('[syncher] - new DataProvisional: ', reply.body.childrenResources, objURL);
            newProvisional = new _DataProvisional2.default(_this._owner, objURL, _this._bus, reply.body.childrenResources);
            _this._provisionals[objURL] = newProvisional;
          } else if (reply.body.code === 200) {
            console.log('[syncher] - new Data Object Observer: ', reply, _this._provisionals);

            var observerInput = reply.body.value;

            observerInput.syncher = _this;
            observerInput.p2p = input.p2p;
            observerInput.store = input.store;
            observerInput.identity = input.identity;
            observerInput.resume = false;

            // todo: For Further Study
            observerInput.mutual = input.mutual;

            //observerInput.children = newProvisional.children;

            //TODO: mutualAuthentication For Further Study
            var newObj = _this._observers[objURL];
            if (!newObj) {
              newObj = new _DataObjectObserver2.default(observerInput);
              _this._observers[objURL] = newObj;
            } else {
              newObj.sync();
            }

            console.log('[syncher] - new Data Object Observer already exist: ', newObj);

            resolve(newObj);

            if (newProvisional) {
              newProvisional.apply(newObj);
            }
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }
  }, {
    key: '_resumeSubscribe',
    value: function _resumeSubscribe(criteria) {
      var _this3 = this;

      var _this = this;

      return new _promise2.default(function (resolve, reject) {

        //FLOW-OUT: this message will be sent to the runtime instance of SyncherManager -> _onLocalSubscribe
        var subscribeMsg = {
          type: 'subscribe', from: _this._owner, to: _this._subURL,
          body: {}
        };

        // Hyperty request to be an Observer
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#hyperty-request-to-be-an-observer

        // Resume Subscriptions for the same Hyperty URL
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-the-same-hyperty-url

        // Resume Subscriptions for a certain user and data schema independently of the Hyperty URL.
        // https://github.com/reTHINK-project/specs/blob/master/messages/data-sync-messages.md#resume-subscriptions-for-a-certain-user-and-data-schema-independently-of-the-hyperty-url
        if (criteria) {
          if (criteria.hasOwnProperty('p2p')) subscribeMsg.body.p2p = criteria.p2p;
          if (criteria.hasOwnProperty('store')) subscribeMsg.body.store = criteria.store;
          if (criteria.hasOwnProperty('schema')) subscribeMsg.body.schema = criteria.schema;
          if (criteria.hasOwnProperty('identity')) subscribeMsg.body.identity = criteria.identity;
          if (criteria.hasOwnProperty('resource')) subscribeMsg.body.resource = criteria.url;
        }

        subscribeMsg.body.resume = criteria.resume;

        //TODO: For Further Study
        var mutualAuthentication = criteria.mutual;
        if (criteria.hasOwnProperty('mutual')) subscribeMsg.body.mutualAuthentication = mutualAuthentication;

        console.log('[syncher] - subscribe message: ', criteria, subscribeMsg);

        //request subscription
        //Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
        //for more info see the DataProvisional class documentation.
        _this._bus.postMessage(subscribeMsg, function (reply) {
          console.log('[syncher] - subscribe-resumed-response: ', reply);

          var objURL = reply.body.resource;

          var newProvisional = _this._provisionals[objURL];
          delete _this._provisionals[objURL];
          if (newProvisional) newProvisional._releaseListeners();

          if (reply.body.code < 200) {
            // todo: check if this is needed for the resume

            console.log('[syncher] - resume new DataProvisional: ', reply, objURL);
            newProvisional = new _DataProvisional2.default(_this._owner, objURL, _this._bus, reply.body.childrenResources);
            _this._provisionals[objURL] = newProvisional;
          } else if (reply.body.code === 200) {

            var listOfObservers = reply.body.value;

            for (var index in listOfObservers) {

              var dataObject = listOfObservers[index];
              console.log('[syncher] - Resume Object Observer: ', reply, dataObject, _this._provisionals);

              if (dataObject.childrenObjects) {
                dataObject.childrenObjects = (0, _utils.deepClone)(dataObject.childrenObjects);
              }

              dataObject.data = (0, _utils.deepClone)(dataObject.data) || {};
              dataObject.resume = true;
              dataObject.syncher = _this;

              //TODO: mutualAuthentication For Further Study
              console.log('[syncher._resumeSubscribe] - create new dataObject: ', dataObject);
              var newObj = new _DataObjectObserver2.default(dataObject);

              if (dataObject.childrenObjects) {
                newObj.resumeChildrens(dataObject.childrenObjects);
              }
              console.log('[syncher._resumeSubscribe] - new dataObject', newObj);
              _this._observers[newObj.url] = newObj;

              if (_this._provisionals[newObj.url]) {
                _this._provisionals[newObj.url].apply(newObj);
              }

              //lets sync with Reporter
              // it was commented to let hyperties decide when to sync
              //newObj.sync();
            }

            resolve(_this._observers);

            if (_this3._onObserversResume) _this3._onObserversResume(_this._observers);
          } else if (reply.body.code === 404) {
            resolve({});
          } else {
            reject(reply.body.desc);
          }
        });
      });
    }

    //FLOW-IN: message received from a local runtime ReporterObject -> _onRemoteSubscribe

  }, {
    key: '_onForward',
    value: function _onForward(msg) {
      var _this = this;

      var reporter = _this._reporters[msg.body.to];
      reporter._onForward(msg);
    }

    //FLOW-IN: message received from a remote Syncher -> create (this is actually an invitation to subscribe)

  }, {
    key: '_onRemoteCreate',
    value: function _onRemoteCreate(msg) {
      var _this = this;
      var resource = msg.from.slice(0, -13); //remove "/subscription" from the URL
      var dividedURL = (0, _utils.divideURL)(resource);
      var domain = dividedURL.domain;

      var event = {
        type: msg.type,
        from: msg.body.source,
        url: resource,
        domain: domain,
        schema: msg.body.schema,
        value: msg.body.value,
        identity: msg.body.identity,

        ack: function ack(type) {
          var lType = 200;
          if (type) {
            lType = type;
          }

          //send ack response message
          _this._bus.postMessage({
            id: msg.id, type: 'response', from: msg.to, to: msg.from,
            body: { code: lType }
          });
        }
      };

      if (_this._onNotificationHandler) {
        console.info('[Syncher] NOTIFICATION-EVENT: ', event);
        _this._onNotificationHandler(event);
      }
    }

    //FLOW-IN: message received from a remote DataObjectReporter -> delete

  }, {
    key: '_onRemoteDelete',
    value: function _onRemoteDelete(msg) {
      var _this = this;

      //remove "/subscription" from the URL
      var resource = msg.body.resource;

      var object = _this._observers[resource];

      var unsubscribe = {
        from: _this.owner,
        to: _this._subURL,
        id: msg.id,
        type: 'unsubscribe',
        body: { resource: msg.body.resource }
      };

      _this._bus.postMessage(unsubscribe);

      delete _this._observers[resource];

      if (object) {
        var event = {
          type: msg.type,
          url: resource,
          identity: msg.body.identity,

          ack: function ack(type) {
            var lType = 200;
            if (type) {
              lType = type;
            }

            //TODO: any other different options for the release process, like accept but nor release local?
            if (lType === 200) {
              object.delete();
            }

            //send ack response message
            _this._bus.postMessage({
              id: msg.id, type: 'response', from: msg.to, to: msg.from,
              body: { code: lType, source: _this._owner }
            });
          }
        };

        if (_this._onNotificationHandler) {
          console.log('NOTIFICATION-EVENT: ', event);
          _this._onNotificationHandler(event);
        }
      } else {
        _this._bus.postMessage({
          id: msg.id, type: 'response', from: msg.to, to: msg.from,
          body: { code: 404, source: _this._owner }
        });
      }
    }

    // close event received from runtime registry

  }, {
    key: '_onExecute',
    value: function _onExecute(msg) {
      var _this = this;

      var reply = {
        id: msg.id, type: 'response', from: msg.to, to: msg.from,
        body: { code: 200 }
      };

      if ((msg.from === _this._runtimeUrl + '/registry/' || msg.from === _this._runtimeUrl + '/registry') && msg.body && msg.body.method && msg.body.method === 'close' && _this._onClose) {
        var event = {
          type: 'close',

          ack: function ack(type) {
            if (type) {
              reply.body.code = type;
            }

            //send ack response message
            _this._bus.postMessage(reply);
          }
        };

        console.info('[Syncher] Close-EVENT: ', event);
        _this._onClose(event);
      } else {
        _this._bus.postMessage(reply);
      }
    }

    /**
    * Callback system to trigger the resumed reporters
    * @param  {Function} callback - function callback which will be invoked
    * @return {Object<URL, DataObjectReporter>} Return one object with all resumed reporters;
    */

  }, {
    key: 'onReportersResume',
    value: function onReportersResume(callback) {
      this._onReportersResume = callback;
    }

    /**
    * Callback system to trigger the resumed observers
    * @param  {Function} callback - function callback which will be invoked
    * @return {Object<URL, DataObjectObserver>} Return one object with all resumed observers;
    */

  }, {
    key: 'onObserversResume',
    value: function onObserversResume(callback) {
      this._onObserversResume = callback;
    }
  }, {
    key: 'owner',
    get: function get() {
      return this._owner;
    }

    /**
    * All owned reporters, the ones that were created by a create
    * @type {Object<URL, DataObjectReporter>}
    */

  }, {
    key: 'reporters',
    get: function get() {
      return this._reporters;
    }

    /**
    * All owned observers, the ones that were created by a local subscription
    * @type {Object<URL, DataObjectObserver>}
    */

  }, {
    key: 'observers',
    get: function get() {
      return this._observers;
    }
  }]);
  return Syncher;
}();

exports.default = Syncher;
module.exports = exports['default'];

/***/ }),
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataObjectObserver = exports.DataObjectReporter = exports.Syncher = undefined;

var _Syncher = __webpack_require__(133);

var _Syncher2 = _interopRequireDefault(_Syncher);

var _DataObjectReporter = __webpack_require__(122);

var _DataObjectReporter2 = _interopRequireDefault(_DataObjectReporter);

var _DataObjectObserver = __webpack_require__(121);

var _DataObjectObserver2 = _interopRequireDefault(_DataObjectObserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Syncher = _Syncher2.default;
exports.DataObjectReporter = _DataObjectReporter2.default;
exports.DataObjectObserver = _DataObjectObserver2.default;

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProxyObject = __webpack_require__(124);

var _ProxyObject2 = _interopRequireDefault(_ProxyObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { deepClone } from '../utils/utils.js';

/**
 * The class returned from the DataObject addChildren call or from onAddChildren if remotely created.
 */
var DataObjectChild /* implements SyncStatus */ = function () {
  /* private
    ----event handlers----
  _onResponseHandler: (event) => void
  */

  /**
   * @ignore
   * Should not be used directly by Hyperties. It's called by the DataObject.addChildren
   */
  function DataObjectChild(input) {
    (0, _classCallCheck3.default)(this, DataObjectChild);

    var _this = this;

    function throwMandatoryParmMissingError(par) {
      throw '[DataObjectChild] ' + par + ' mandatory parameter is missing';
    }

    input.parent ? _this._parent = input.parent : throwMandatoryParmMissingError('parent');
    input.url ? _this._url = input.url : throwMandatoryParmMissingError('url');
    input.created ? _this._created = input.created : throwMandatoryParmMissingError('created');
    input.reporter ? _this._reporter = input.reporter : throwMandatoryParmMissingError('reporter');
    input.runtime ? _this._runtime = input.runtime : throwMandatoryParmMissingError('runtime');
    input.schema ? _this._schema = input.schema : throwMandatoryParmMissingError('schema');
    input.parentObject ? _this._parentObject = input.parentObject : throwMandatoryParmMissingError('parentObject');

    if (input.name) _this._name = input.name;
    if (input.description) _this._description = input.description;
    if (input.tags) _this._tags = input.tags;
    if (input.resources) _this._resources = input.resources;
    if (input.observerStorage) _this._observerStorage = input.observerStorage;
    if (input.publicObservation) _this._publicObservation = input.publicObservation;

    if (input.data) {
      _this._syncObj = new _ProxyObject2.default(input.data);
    } else {
      _this._syncObj = new _ProxyObject2.default({});
    }

    console.log('[DataObjectChild -  Constructor] - ', _this._syncObj);

    _this._bus = _this._parentObject._bus;
    _this._owner = _this._parentObject._owner;

    _this._allocateListeners();

    _this._metadata = input;

    // delete _this._metadata.data;
    delete _this._metadata.parentObject;
  }

  (0, _createClass3.default)(DataObjectChild, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this = this;

      //this is only needed for children reporters
      if (_this._reporter === _this._owner) {
        _this._listener = _this._bus.addListener(_this._reporter, function (msg) {
          if (msg.type === 'response' && msg.id === _this._msgId) {
            console.log('DataObjectChild.onResponse:', msg);
            _this._onResponse(msg);
          }
        });
      }
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      if (_this._listener) {
        _this._listener.remove();
      }
    }

    /**
     * Release and delete object data
     */

  }, {
    key: 'delete',
    value: function _delete() {
      var _this = this;

      _this._releaseListeners();

      //TODO: send delete message ?
    }

    /**
     * All Metadata about the Child Data Object
     * @type {Object} -
     */

  }, {
    key: 'onChange',


    /**
     * Register the change listeners sent by the reporter child
     * @param {function(event: MsgEvent)} callback
     */
    value: function onChange(callback) {
      this._syncObj.observe(function (event) {
        console.log('[DataObjectChild - observer] - ', event);
        callback(event);
      });
    }

    /**
     * Setup the callback to process response notifications of the creates
     * @param {function(event: MsgEvent)} callback
     */

  }, {
    key: 'onResponse',
    value: function onResponse(callback) {
      this._onResponseHandler = callback;
    }

    //FLOW-IN: message received from a remote DataObject -> _onChildCreate

  }, {
    key: '_onResponse',
    value: function _onResponse(msg) {
      var _this = this;

      var event = {
        type: msg.type,
        url: msg.body.source,
        code: msg.body.code
      };

      if (_this._onResponseHandler) {
        _this._onResponseHandler(event);
      }
    }
  }, {
    key: 'metadata',
    get: function get() {
      return this._metadata;
    }

    /**
     * Children ID generated on addChildren. Unique identifier
     * @type {URL} - URL of the format <HypertyURL>#<numeric-sequence>
     */

  }, {
    key: 'childId',
    get: function get() {
      return this._childId;
    }

    /**
     * Data Structure to be synchronized.
     * @type {JSON} - JSON structure that should follow the defined schema, if any.
     */

  }, {
    key: 'data',
    get: function get() {
      return this._syncObj.data;
    }

    /**
     * Set for this dataObjectChild an identity
     * @method identity
     * @param  {Identity} identity identity from who created the message
     */

  }, {
    key: 'identity',
    set: function set(identity) {
      this._identity = identity;
    }

    /**
     * Get for this dataObjectChild an identity
     * @method identity
     * @return {Identity} identity from who created the message
     */
    ,
    get: function get() {
      return this._identity;
    }
  }]);
  return DataObjectChild;
}(); /**
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

exports.default = DataObjectChild;
module.exports = exports['default'];

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
 * @access private
 * This class is responsible for collecting delta changes in remote objects, before the response of subscription reach the observer.
 * It's used in Syncher -> subscribe. The flow is defined as:
 * 1. (observer) --subscribe--> (reporter)
 * 2. (observer) <--delta updates-- (reporter)
 * 3. (observer) <--subscribe response-- (reporter)
 * This means that there could be delta updates transferred before the subscription confirmation.
 * Since there is no DataObjectObserver before the ubscription confirmation, there should be some other object collecting the updates.
 * Provisional data is applied to the DataObjectObserver after confirmation. Or discarded if there is no confirmation.
 */
var DataProvisional = function () {
  /* private
  _childrenListeners: [MsgListener]
  _listener: MsgListener
    _changes: []
  */

  function DataProvisional(owner, url, bus, children) {
    (0, _classCallCheck3.default)(this, DataProvisional);

    var _this = this;

    _this._owner = owner;
    _this._url = url;
    _this._bus = bus;
    _this._children = children;

    _this._changes = [];
    _this._allocateListeners();
  }

  (0, _createClass3.default)(DataProvisional, [{
    key: '_allocateListeners',
    value: function _allocateListeners() {
      var _this = this;

      _this._listener = _this._bus.addListener(_this._url, function (msg) {
        console.log('DataProvisional-' + _this._url + '-RCV: ', msg);
        _this._changes.push(msg);
      });

      /*
      _this._childrenListeners = [];
      if (_this._children) {
        let childBaseURL = url + '/children/';
        _this._children.forEach((child) => {
          let childURL = childBaseURL + child;
          let listener = _this._bus.addListener(childURL, (msg) => {
            //ignore msg sent by himself
            if (msg.from !== owner) {
              console.log(msg);
            }
          });
            _this._childrenListeners.push(listener);
        });
      }*/
    }
  }, {
    key: '_releaseListeners',
    value: function _releaseListeners() {
      var _this = this;

      _this._listener.remove();

      /*_this._childrenListeners.forEach((listener) => {
        listener.remove();
      });*/
    }
  }, {
    key: 'apply',
    value: function apply(observer) {
      var _this = this;
      _this._changes.forEach(function (change) {
        observer._changeObject(observer._syncObj, change);
      });
    }
  }, {
    key: 'children',
    get: function get() {
      return this._children;
    }
  }]);
  return DataProvisional;
}();

exports.default = DataProvisional;
module.exports = exports['default'];

/***/ }),
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(161), __esModule: true };

/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165);
module.exports = __webpack_require__(0).Object.assign;

/***/ }),
/* 160 */,
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(167);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(18)
  , gOPS     = __webpack_require__(58)
  , pIE      = __webpack_require__(41)
  , toObject = __webpack_require__(32)
  , IObject  = __webpack_require__(56)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(162)});

/***/ }),
/* 166 */,
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__(13)
  , $getOwnPropertyDescriptor = __webpack_require__(57).f;

__webpack_require__(45)('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGMyNGI3MGExODNiN2I3MzQzNWUwP2MwOWQiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZiIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLWtleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vanNvbi9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3h5LW9ic2VydmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdE9ic2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL1Byb3h5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9TeW5jaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9TeW5jaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RDaGlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3luY2hlci9EYXRhUHJvdmlzaW9uYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8uL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiXSwibmFtZXMiOlsiZGl2aWRlVVJMIiwiZGl2aWRlRW1haWwiLCJlbXB0eU9iamVjdCIsImRlZXBDbG9uZSIsImdldFVzZXJVUkxGcm9tRW1haWwiLCJnZXRVc2VyRW1haWxGcm9tVVJMIiwiY29udmVydFRvVXNlclVSTCIsImNoZWNrQXR0cmlidXRlIiwicGFyc2VBdHRyaWJ1dGVzIiwidXJsIiwiRXJyb3IiLCJyZWN1cnNlIiwidmFsdWUiLCJyZWdleCIsInN1YnN0IiwicGFydHMiLCJyZXBsYWNlIiwic3BsaXQiLCJpbmNsdWRlcyIsInJlc3VsdCIsInR5cGUiLCJkb21haW4iLCJpZGVudGl0eSIsImNvbnNvbGUiLCJlcnJvciIsInNjaGVtZSIsInN1YnN0ciIsImluZGV4T2YiLCJlbWFpbCIsImluZGV4T2ZBdCIsInVzZXJuYW1lIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwib2JqZWN0Iiwib2JqIiwiSlNPTiIsInBhcnNlIiwidXNlckVtYWlsIiwidXNlclVSTCIsImlkZW50aWZpZXIiLCJkaXZpZGVkVVJMIiwicGF0aCIsImxpc3QiLCJmaW5hbCIsInRlc3QiLCJtYXRjaCIsIm0iLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJmb3JFYWNoIiwiZ3JvdXBJbmRleCIsInB1c2giLCJtYXAiLCJpdGVtIiwibG9nIiwic3RyaW5nMyIsInN0cmluZzEiLCJhcnJheTEiLCJzdHJpbmcyIiwiYXJyYXkyIiwic2xpY2UiLCJjb25jYXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiRmlsdGVyVHlwZSIsIkFOWSIsIlNUQVJUIiwiRVhBQ1QiLCJEYXRhT2JqZWN0T2JzZXJ2ZXIiLCJpbnB1dCIsIl90aGlzIiwiX3ZlcnNpb24iLCJ2ZXJzaW9uIiwiX2ZpbHRlcnMiLCJfc3luY09iaiIsIm9ic2VydmUiLCJldmVudCIsIl9vbkZpbHRlciIsIl9hbGxvY2F0ZUxpc3RlbmVycyIsImluZm8iLCJfc3luY2hlciIsInJlYWQiLCJfbWV0YWRhdGEiLCJ0aGVuIiwiZGF0YSIsImxhc3RNb2RpZmllZCIsImNhdGNoIiwicmVhc29uIiwiX2NoYW5nZUxpc3RlbmVyIiwiX2J1cyIsImFkZExpc3RlbmVyIiwiX3VybCIsIm1zZyIsIl9jaGFuZ2VPYmplY3QiLCJyZW1vdmUiLCJ1bnN1YnNjcmliZSIsIl9yZWxlYXNlTGlzdGVuZXJzIiwiX29ic2VydmVycyIsInVuU3Vic2NyaWJlTXNnIiwiZnJvbSIsIl9vd25lciIsInRvIiwiX3N1YlVSTCIsImJvZHkiLCJyZXNvdXJjZSIsInBvc3RNZXNzYWdlIiwicmVwbHkiLCJjb2RlIiwiY2FsbGJhY2siLCJrZXkiLCJmaWx0ZXJPYmoiLCJpZHgiLCJmaWVsZCIsInJlc29sdmUiLCJyZWplY3QiLCJfc3Vic2NyaWJlUmVnaXN0cmF0aW9uIiwiX29uRGlzY29ubmVjdGVkIiwiZXJyIiwiX3J1bnRpbWVVcmwiLCJyZXNvdXJjZXMiLCJfZ2VuZXJhdGVMaXN0ZW5lciIsIm5vdGlmaWNhdGlvblVSTCIsIm1ldGhvZCIsInBhcmFtcyIsIndhcm5pbmciLCJEYXRhT2JqZWN0UmVwb3J0ZXIiLCJfc3Vic2NyaXB0aW9ucyIsIl9vbkNoYW5nZSIsIl9pbnZpdGF0aW9ucyIsIl9vYmplY3RMaXN0ZW5lciIsIl9vblJlc3BvbnNlIiwiX29uUmVhZCIsIl9vbkV4ZWN1dGUiLCJvYnNlcnZlcnMiLCJ0b0ludml0ZSIsIm9ic2VydmVyIiwiaW52aXRlTXNnIiwicmVzdW1lIiwic2NoZW1hIiwiX3NjaGVtYSIsImF1dGhvcmlzZSIsImRlbGV0ZU1zZyIsIl9yZXBvcnRlcnMiLCJfb25TdWJzY3JpcHRpb25IYW5kbGVyIiwiX29uUmVzcG9uc2VIYW5kbGVyIiwiX29uUmVhZEhhbmRsZXIiLCJfb25FeGVjdXRlSGFuZGxlciIsIl9vblN1YnNjcmliZSIsIl9vblVuU3Vic2NyaWJlIiwiaHlwZXJ0eVVybCIsImFjY2VwdCIsInN1YiIsInN0YXR1cyIsIm1ldGFkYXRhIiwic3Vic2NyaXB0aW9ucyIsIm1zZ1ZhbHVlIiwic2VuZE1zZyIsImlkIiwiaGFzT3duUHJvcGVydHkiLCJtdXR1YWxBdXRoZW50aWNhdGlvbiIsIl9tdXR1YWxBdXRoZW50aWNhdGlvbiIsImRlc2MiLCJvYmplY3RWYWx1ZSIsInJlc3BvbnNlIiwiRGF0YU9iamVjdCIsInRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvciIsInBhciIsInN5bmNoZXIiLCJjcmVhdGVkIiwiX2NyZWF0ZWQiLCJyZXBvcnRlciIsIl9yZXBvcnRlciIsInJ1bnRpbWUiLCJfcnVudGltZSIsIm5hbWUiLCJfbmFtZSIsIl9zdGF0dXMiLCJfY2hpbGRyZW5zIiwiY2hpbGRyZW5zIiwibXV0dWFsIiwiX2NoaWxkSWQiLCJfY2hpbGRyZW5MaXN0ZW5lcnMiLCJfcmVzdW1lZCIsImRlc2NyaXB0aW9uIiwiX2Rlc2NyaXB0aW9uIiwidGFncyIsIl90YWdzIiwiX3Jlc291cmNlcyIsIm9ic2VydmVyU3RvcmFnZSIsIl9vYnNlcnZlclN0b3JhZ2UiLCJwdWJsaWNPYnNlcnZhdGlvbiIsIl9wdWJsaWNPYnNlcnZhdGlvbiIsImNoaWxkSWRJbnQiLCJjaGlsZElkU3RyaW5nIiwiY2hpbGRJZCIsIk51bWJlciIsImNoaWxkQmFzZVVSTCIsImNoaWxkIiwiY2hpbGRVUkwiLCJsaXN0ZW5lciIsIl9vbkNoaWxkQ3JlYXRlIiwiX2NoYW5nZUNoaWxkcmVuIiwiX2NoaWxkcmVuT2JqZWN0cyIsImNoaWxkcmVuUmVzb3VyY2UiLCJjaGlsZHJlbiIsImNoaWxkSW5wdXQiLCJwYXJlbnRPYmplY3QiLCJwYXJlbnQiLCJpbml0aWFsRGF0YSIsIm1zZ0NoaWxkUGF0aCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIm5ld0NoaWxkIiwiYm9keVZhbHVlIiwicmVxdWVzdE1zZyIsIm1zZ0lkIiwib25DaGFuZ2UiLCJfb25BZGRDaGlsZHJlbkhhbmRsZXIiLCJzZXRUaW1lb3V0Iiwic291cmNlIiwiY2hpbGRJbmZvIiwiY2hhbmdlTXNnIiwiYXR0cmlidXRlIiwib1R5cGUiLCJPQkpFQ1QiLCJjVHlwZSIsIlJFTU9WRSIsImF0dHJpYnV0ZVR5cGUiLCJVUERBVEUiLCJvcGVyYXRpb24iLCJzeW5jT2JqIiwiZmluZFJlc3VsdCIsImZpbmRCZWZvcmUiLCJBUlJBWSIsIkFERCIsImFyciIsImxhc3QiLCJBcnJheSIsInByb3RvdHlwZSIsInNwbGljZSIsImFwcGx5Iiwib2JqZWN0VHlwZSIsIlN5bmNPYmplY3QiLCJfZGF0YSIsIl9pbnRlcm5hbE9ic2VydmUiLCJfZmluZFdpdGhTcGxpdCIsInBvcCIsImhhbmRsZXIiLCJjaGFuZ2VzZXQiLCJldmVyeSIsImNoYW5nZSIsIl9vbkNoYW5nZXMiLCJPYmplY3QiLCJkZWVwT2JzZXJ2ZSIsIm9ialR5cGUiLCJjb25zdHJ1Y3RvciIsIk9iamVjdFR5cGUiLCJmaWVsZFN0cmluZyIsImtleXBhdGgiLCJuZXdWYWx1ZSIsIl9maXJlRXZlbnQiLCJDaGFuZ2VUeXBlIiwiU3luY2hlciIsIm93bmVyIiwiYnVzIiwiY29uZmlnIiwicnVudGltZVVSTCIsIl9wcm92aXNpb25hbHMiLCJfb25Gb3J3YXJkIiwiX29uUmVtb3RlQ3JlYXRlIiwiX29uUmVtb3RlRGVsZXRlIiwic3RvcmUiLCJwMnAiLCJjcmVhdGVJbnB1dCIsIl9jcmVhdGUiLCJjcml0ZXJpYSIsIl9yZXN1bWVDcmVhdGUiLCJvYmpVUkwiLCJfc3Vic2NyaWJlIiwiX2NyaXRlcmlhIiwiX3Jlc3VtZVN1YnNjcmliZSIsInJlYWRNc2ciLCJfb25Ob3RpZmljYXRpb25IYW5kbGVyIiwiX29uQ2xvc2UiLCJyZXBvcnRlcklucHV0IiwicmVxdWVzdFZhbHVlIiwiY2hpbGRyZW5SZXNvdXJjZXMiLCJuZXdPYmoiLCJpbnZpdGVPYnNlcnZlcnMiLCJsaXN0T2ZSZXBvcnRlcnMiLCJkYXRhT2JqZWN0IiwiY2hpbGRyZW5PYmplY3RzIiwicmVzdW1lQ2hpbGRyZW5zIiwiX29uUmVwb3J0ZXJzUmVzdW1lIiwic3Vic2NyaWJlTXNnIiwibmV3UHJvdmlzaW9uYWwiLCJvYnNlcnZlcklucHV0Iiwic3luYyIsImxpc3RPZk9ic2VydmVycyIsIl9vbk9ic2VydmVyc1Jlc3VtZSIsImFjayIsImxUeXBlIiwiZGVsZXRlIiwiRGF0YU9iamVjdENoaWxkIiwiX3BhcmVudCIsIl9wYXJlbnRPYmplY3QiLCJfbGlzdGVuZXIiLCJfbXNnSWQiLCJfaWRlbnRpdHkiLCJEYXRhUHJvdmlzaW9uYWwiLCJfY2hpbGRyZW4iLCJfY2hhbmdlcyJdLCJtYXBwaW5n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QU1xQixJQUEzQixHQUFrQyxRQUE5QyxFQUF3REMsR0FBeEQ7QUFDQXRCLGNBQU1pUCxRQUFOLENBQWVwUSxJQUFmLENBQW9CeUMsR0FBcEI7QUFDRCxPQUhpQixDQUFsQjs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JEOzs7d0NBRW1CO0FBQ2xCLFVBQUl0QixRQUFRLElBQVo7O0FBRUFBLFlBQU00TyxTQUFOLENBQWdCcE4sTUFBaEI7O0FBRUE7OztBQUdEOzs7MEJBSUt5QyxRLEVBQVU7QUFDZCxVQUFJakUsUUFBUSxJQUFaO0FBQ0FBLFlBQU1pUCxRQUFOLENBQWV0USxPQUFmLENBQXVCLFVBQUN5TSxNQUFELEVBQVk7QUFDakNuSCxpQkFBUzFDLGFBQVQsQ0FBdUIwQyxTQUFTN0QsUUFBaEMsRUFBMENnTCxNQUExQztBQUNELE9BRkQ7QUFHRDs7O3dCQVBjO0FBQUUsYUFBTyxLQUFLNEQsU0FBWjtBQUF3Qjs7Ozs7a0JBVTVCRCxlOzs7Ozs7Ozs7O0FDcEdmLGtCQUFrQix5RDs7Ozs7Ozs7OztBQ0FsQjtBQUNBLHNEOzs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVLEVBQUU7QUFDOUMsbUJBQW1CLHNDQUFzQztBQUN6RCxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxXOzs7Ozs7OztBQ2hDRDtBQUNBOztBQUVBLDBDQUEwQyxpQ0FBb0MsRTs7Ozs7OztBQ0g5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoiU3luY2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3luY2hlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlwiXSA9IHJvb3RbXCJcIl0gfHwge30sIHJvb3RbXCJcIl1bXCJTeW5jaGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjMjRiNzBhMTgzYjdiNzM0MzVlMCIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IDEwIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbnRlZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLW9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA2IDcgOCA5IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYgNyA4IDkiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDYiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcbi8qKlxyXG4gKiBTdXBwb3J0IG1vZHVsZSB3aXRoIHNvbWUgZnVuY3Rpb25zIHdpbGwgYmUgdXNlZnVsXHJcbiAqIEBtb2R1bGUgdXRpbHNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgZGl2aWRlVVJMXHJcbiAqIEB0eXBlIE9iamVjdFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHlwZSBUaGUgdHlwZSBvZiBVUkxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGRvbWFpbiBUaGUgZG9tYWluIG9mIFVSTFxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaWRlbnRpdHkgVGhlIGlkZW50aXR5IG9mIFVSTFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBEaXZpZGUgYW4gdXJsIGluIHR5cGUsIGRvbWFpbiBhbmQgaWRlbnRpdHlcclxuICogQHBhcmFtICB7VVJMLlVSTH0gdXJsIC0gdXJsIGFkZHJlc3NcclxuICogQHJldHVybiB7ZGl2aWRlVVJMfSB0aGUgcmVzdWx0IG9mIGRpdmlkZVVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZVVSTCh1cmwpIHtcclxuXHJcbiAgaWYgKCF1cmwpIHRocm93IEVycm9yKCdVUkwgaXMgbmVlZGVkIHRvIHNwbGl0Jyk7XHJcblxyXG5cdGZ1bmN0aW9uIHJlY3Vyc2UodmFsdWUpIHtcclxuXHRcdGNvbnN0IHJlZ2V4ID0gLyhbYS16QS1aLV0qKSg6XFwvXFwvKD86XFwuKT98OikoWy1hLXpBLVowLTlAOiUuX1xcK34jPV17MiwyNTZ9KShbLWEtekEtWjAtOUA6JS5fXFwrfiM9XFwvXSopL2dpO1xyXG4gICAgY29uc3Qgc3Vic3QgPSAnJDEsJDMsJDQnO1xyXG5cdCAgbGV0IHBhcnRzID0gdmFsdWUucmVwbGFjZShyZWdleCwgc3Vic3QpLnNwbGl0KCcsJyk7XHJcblx0XHRyZXR1cm4gcGFydHM7XHJcblx0fVxyXG5cclxuXHRsZXQgcGFydHMgPSByZWN1cnNlKHVybCk7XHJcblxyXG4gIC8vIElmIHRoZSB1cmwgaGFzIG5vIHNjaGVtZVxyXG4gIGlmIChwYXJ0c1swXSA9PT0gdXJsICYmICFwYXJ0c1swXS5pbmNsdWRlcygnQCcpKSB7XHJcblxyXG4gICAgbGV0IHJlc3VsdCA9IHtcclxuICAgICAgdHlwZTogXCJcIixcclxuICAgICAgZG9tYWluOiB1cmwsXHJcbiAgICAgIGlkZW50aXR5OiBcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoJ1tEaXZpZGVVUkxdIERpdmlkZVVSTCBkb25cXCd0IHN1cHBvcnQgdXJsIHdpdGhvdXQgc2NoZW1lLiBQbGVhc2UgcmV2aWV3IHlvdXIgdXJsIGFkZHJlc3MnLCB1cmwpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuXHQvLyBjaGVjayBpZiB0aGUgdXJsIGhhcyB0aGUgc2NoZW1lIGFuZCBpbmNsdWRlcyBhbiBAXHJcblx0aWYgKHBhcnRzWzBdID09PSB1cmwgJiYgcGFydHNbMF0uaW5jbHVkZXMoJ0AnKSkge1xyXG5cdFx0bGV0IHNjaGVtZSA9IHBhcnRzWzBdID09PSB1cmwgPyAnc210cCcgOiBwYXJ0c1swXTtcclxuXHRcdHBhcnRzID0gcmVjdXJzZShzY2hlbWUgKyAnOi8vJyArIHBhcnRzWzBdKTtcclxuXHR9XHJcblxyXG5cdC8vIGlmIHRoZSBkb21haW4gaW5jbHVkZXMgYW4gQCwgZGl2aWRlIGl0IHRvIGRvbWFpbiBhbmQgaWRlbnRpdHkgcmVzcGVjdGl2ZWx5XHJcblx0aWYgKHBhcnRzWzFdLmluY2x1ZGVzKCdAJykpIHtcclxuXHRcdHBhcnRzWzJdID0gcGFydHNbMF0gKyAnOi8vJyArIHBhcnRzWzFdO1xyXG5cdFx0cGFydHNbMV0gPSBwYXJ0c1sxXS5zdWJzdHIocGFydHNbMV0uaW5kZXhPZignQCcpICsgMSlcclxuICAgIH0gXHQvKmVsc2UgaWYgKHBhcnRzWzJdLmluY2x1ZGVzKCcvJykpIHtcclxuICAgIHBhcnRzWzJdID0gcGFydHNbMl0uc3Vic3RyKHBhcnRzWzJdLmxhc3RJbmRleE9mKCcvJykrMSk7XHJcbiAgfSovXHJcblxyXG4gIGxldCByZXN1bHQgPSB7XHJcbiAgICB0eXBlOiBwYXJ0c1swXSxcclxuICAgIGRvbWFpbjogcGFydHNbMV0sXHJcbiAgICBpZGVudGl0eTogcGFydHNbMl1cclxuICB9O1xyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlRW1haWwoZW1haWwpIHtcclxuICBsZXQgaW5kZXhPZkF0ID0gZW1haWwuaW5kZXhPZignQCcpO1xyXG5cclxuICBsZXQgcmVzdWx0ID0ge1xyXG4gICAgdXNlcm5hbWU6IGVtYWlsLnN1YnN0cmluZygwLCBpbmRleE9mQXQpLFxyXG4gICAgZG9tYWluOiBlbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgZW1haWwubGVuZ3RoKVxyXG4gIH07XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBhbiBPYmplY3QgaXMgZW1wdHlcclxuICogQHBhcmFtICB7T2JqZWN0fSBvYmplY3QgT2JqZWN0IHRvIGJlIGNoZWNrZWRcclxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICAgc3RhdHVzIG9mIE9iamVjdCwgZW1wdHkgb3Igbm90ICh0cnVlfGZhbHNlKTtcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eU9iamVjdChvYmplY3QpIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGggPiAwID8gZmFsc2UgOiB0cnVlO1xyXG59XHJcblxyXG4vKipcclxuICogTWFrZSBhIENPUFkgb2YgdGhlIG9yaWdpbmFsIGRhdGFcclxuICogQHBhcmFtICB7T2JqZWN0fSAgb2JqIC0gb2JqZWN0IHRvIGJlIGNsb25lZFxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVlcENsb25lKG9iaikge1xyXG4gIC8vVE9ETzogc2ltcGxlIGJ1dCBpbmVmZmljaWVudCBKU09OIGRlZXAgY2xvbmUuLi5cclxuICBpZiAob2JqKSByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE9idGFpbnMgdGhlIHVzZXIgVVJMIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBlbWFpbFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHVzZXJFbWFpbCBUaGUgdXNlciBlbWFpbFxyXG4gKiBAcmV0dXJuIHtVUkwuVVJMfSB1c2VyVVJMIFRoZSB1c2VyIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJVUkxGcm9tRW1haWwodXNlckVtYWlsKSB7XHJcbiAgbGV0IGluZGV4T2ZBdCA9IHVzZXJFbWFpbC5pbmRleE9mKCdAJyk7XHJcbiAgcmV0dXJuICd1c2VyOi8vJyArIHVzZXJFbWFpbC5zdWJzdHJpbmcoaW5kZXhPZkF0ICsgMSwgdXNlckVtYWlsLmxlbmd0aCkgKyAnLycgKyB1c2VyRW1haWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZBdCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBPYnRhaW5zIHRoZSB1c2VyIGVtYWlsIHRoYXQgY29ycmVzcG9uZHMgdG8gYSBnaXZlbiBVUkxcclxuICogQHBhcmFtICB7VVJMLlVSTH0gdXNlclVSTCBUaGUgdXNlciBVUkxcclxuICogQHJldHVybiB7c3RyaW5nfSB1c2VyRW1haWwgVGhlIHVzZXIgZW1haWxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyRW1haWxGcm9tVVJMKHVzZXJVUkwpIHtcclxuICBsZXQgdXJsID0gZGl2aWRlVVJMKHVzZXJVUkwpO1xyXG4gIHJldHVybiB1cmwuaWRlbnRpdHkucmVwbGFjZSgnLycsICcnKSArICdAJyArIHVybC5kb21haW47IC8vIGlkZW50aXR5IGZpZWxkIGhhcyAnL2V4YW1wbGVJRCcgaW5zdGVhZCBvZiAnZXhhbXBsZUlEJ1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoZSB1c2VyIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgVVJMIGZvcm1hdCwgaWYgbm90LCBjb252ZXJ0IHRvIFVSTCBmb3JtYXRcclxuICogQHBhcmFtICB7c3RyaW5nfSAgIGlkZW50aWZpZXIgIHVzZXIgaWRlbnRpZmllclxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9ICAgdXNlclVSTCAgICB0aGUgdXNlciBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9Vc2VyVVJMKGlkZW50aWZpZXIpIHtcclxuXHJcbiAgLy8gY2hlY2sgaWYgdGhlIGlkZW50aWZpZXIgaXMgYWxyZWFkeSBpbiB0aGUgdXJsIGZvcm1hdFxyXG4gIGlmIChpZGVudGlmaWVyLnN1YnN0cmluZygwLCA3KSA9PT0gJ3VzZXI6Ly8nKSB7XHJcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChpZGVudGlmaWVyKTtcclxuXHJcbiAgICAvL2NoZWNrIGlmIHRoZSB1cmwgaXMgd2VsbCBmb3JtYXRlZFxyXG4gICAgaWYgKGRpdmlkZWRVUkwuZG9tYWluICYmIGRpdmlkZWRVUkwuaWRlbnRpdHkpIHtcclxuICAgICAgcmV0dXJuIGlkZW50aWZpZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyAndXNlclVSTCB3aXRoIHdyb25nIGZvcm1hdCc7XHJcbiAgICB9XHJcblxyXG4gIC8vaWYgbm90LCBjb252ZXJ0IHRoZSB1c2VyIGVtYWlsIHRvIFVSTCBmb3JtYXRcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGdldFVzZXJVUkxGcm9tRW1haWwoaWRlbnRpZmllcik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tBdHRyaWJ1dGUocGF0aCkge1xyXG5cclxuICBsZXQgcmVnZXggPSAvKCgoW2EtekEtWl0rKTpcXC9cXC8oWzAtOWEtekEtWl1bLVxcd10qWzAtOWEtekEtWl1cXC4pK1thLXpBLVpdezIsOX0pXFwvW2EtekEtWjAtOVxcLl0rQFthLXpBLVowLTldKyhcXC0pP1thLXpBLVowLTldKyhcXC4pP1thLXpBLVowLTldezIsMTB9P1xcLlthLXpBLVpdezIsMTB9KSguKyg/PS5pZGVudGl0eSkpPy9nbTtcclxuXHJcbiAgbGV0IGxpc3QgPSBbXTtcclxuICBsZXQgZmluYWwgPSBbXTtcclxuICBsZXQgdGVzdCA9IHBhdGgubWF0Y2gocmVnZXgpO1xyXG5cclxuICBpZiAodGVzdCA9PSBudWxsKSB7XHJcbiAgICBmaW5hbCA9IHBhdGguc3BsaXQoJy4nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGV0IG07XHJcbiAgICB3aGlsZSAoKG0gPSByZWdleC5leGVjKHBhdGgpKSAhPT0gbnVsbCkge1xyXG4gICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSB0byBhdm9pZCBpbmZpbml0ZSBsb29wcyB3aXRoIHplcm8td2lkdGggbWF0Y2hlc1xyXG4gICAgICBpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XHJcbiAgICAgICAgcmVnZXgubGFzdEluZGV4Kys7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRoZSByZXN1bHQgY2FuIGJlIGFjY2Vzc2VkIHRocm91Z2ggdGhlIGBtYC12YXJpYWJsZS5cclxuICAgICAgbS5mb3JFYWNoKChtYXRjaCwgZ3JvdXBJbmRleCkgPT4ge1xyXG4gICAgICAgIGlmIChncm91cEluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICBsaXN0LnB1c2gobWF0Y2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgbGlzdC5mb3JFYWNoKCh1cmwpID0+IHtcclxuICAgICAgcmVzdWx0ID0gcGF0aC5yZXBsYWNlKHVybCwgJyorKicpO1xyXG5cclxuICAgICAgZmluYWwgPSByZXN1bHQuc3BsaXQoJy4nKS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbSA9PT0gJyorKicpIHsgcmV0dXJuIHVybDsgfVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKCdbU2VydmljZUZyYW1ld29yay5VdGlscy5jaGVja0F0dHJpYnV0ZV0nLCBmaW5hbCk7XHJcbiAgcmV0dXJuIGZpbmFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpIHtcclxuICBsZXQgcmVnZXggPSAvKFswLTlhLXpBLVpdWy1cXHddKik6XFwvXFwvL2c7XHJcblxyXG4gIGxldCBzdHJpbmczID0gJ2lkZW50aXR5JztcclxuXHJcbiAgaWYgKCFwYXRoLmluY2x1ZGVzKCc6Ly8nKSkge1xyXG4gICAgcmV0dXJuIChwYXRoLnNwbGl0KCcuJykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBsZXQgc3RyaW5nMSA9IHBhdGguc3BsaXQocmVnZXgpWzBdO1xyXG5cclxuICAgIGxldCBhcnJheTEgPSBzdHJpbmcxLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgbGV0IHN0cmluZzIgPSBwYXRoLnJlcGxhY2Uoc3RyaW5nMSwgJycpO1xyXG5cclxuICAgIGlmIChwYXRoLmluY2x1ZGVzKHN0cmluZzMpKSB7XHJcblxyXG4gICAgICBsZXQgYXJyYXkyID0gc3RyaW5nMi5zcGxpdChzdHJpbmczICsgJy4nKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdhcnJheTIgJyArIGFycmF5Mik7XHJcblxyXG4gICAgICBzdHJpbmcyID0gYXJyYXkyWzBdLnNsaWNlKCcuJywgLTEpO1xyXG5cclxuICAgICAgYXJyYXkyID0gYXJyYXkyWzFdLnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyLCBzdHJpbmczKTtcclxuXHJcbiAgICAgIGFycmF5MSA9IGFycmF5MS5jb25jYXQoYXJyYXkyKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcnJheTEucHVzaChzdHJpbmcyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChhcnJheTEuZmlsdGVyKEJvb2xlYW4pKTtcclxuXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Qua2V5cztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiA0IDUiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4taW5zdGFuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgNCA1IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSA0IDUiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGtleXMgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgNCA1IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDQgNSIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAgICAgcHJveHktb2JzZXJ2ZSB2MC4wLjE4XHJcbi8vICAgICBDb3B5cmlnaHQgKGMpIDIwMTUsIDIwMTYgU2ltb24gWS4gQmxhY2t3ZWxsLCBBbnlXaGljaFdheVxyXG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbihmdW5jdGlvbigpIHtcclxuXHRcInVzZSBzdHJpY3RcIjtcclxuXHQvLyBDcmVhdGVzIGFuZCByZXR1cm5zIGEgUHJveHkgd3JhcHBpbmcgYSB0YXJnZXQgc28gdGhhdCBhbGwgY2hhbmdlcyBjYW4gYmUgdHJhcHBlZCBhbmQgZm9yd2FyZGVkIHRvXHJcblx0Ly8gYSBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHRha2VzIGFuIGFycmF5IG9mIGNoYW5nZXMganVzdCBsaWtlIHRoZSB0cmFkaXRpb25hbCBvcmlnaW5hbCBDaHJvbWUgT2JqZWN0Lm9ic2VydmVcclxuXHQvLyB7b2JqZWN0OjxvYmplY3QgY2hhbmdlZD4sbmFtZTo8ZmllbGQgY2hhbmdlZD4sdHlwZTphZGR8dXBkYXRlfGRlbGV0ZXxyZWNvbmZpZ3VyZXxwcmV2ZW50RXh0ZW5zaW9uc3xzZXRQcm90b3R5cGUsb2xkVmFsdWU6PG9sZCB2YWx1ZSBpZiB1cGRhdGUgfCBkZWxldGU+fVxyXG5cdC8vIFRoZSBhY2NlcHRsaXN0IGNhbiBiZSBhZGR8dXBkYXRlfGRlbGV0ZXxyZWNvbmZpZ3VyZXxwcmV2ZW50RXh0ZW5zaW9uc3xzZXRQcm90b3R5cGUuXHJcblx0Ly8gdiAwLjAuMTAgdG8gc3VwcG9ydCBwYXVzaW5nIGFuZCByZXN0YXJ0aW5nIG9ic2VydmF0aW9uIHR3byBhZGRpdGlvbmFsIGNvbnN0cnVjdG9yIGFyZ3VtZW50cyBhcmUgYXZhaWxhYmxlIHRvIE9iamVjdC5vYnNlcnZlOlxyXG5cdC8vIHBhdXNhYmxlIC0gY3JlYXRlIHRoZSBPYnNlcnZlciBzbyBpdCBjYW4gYmUgcGF1c2VkXHJcblx0Ly8gcGF1c2UgLSBjcmVhdGUgb2JzZXJ2ZXIgaW4gcGF1c2VkIHN0YXRlXHJcblx0Ly8gaWYgcGF1c2FibGUgaXMgdHJ1ZSB0aGVuIGFuIGFkZGl0aW9uYWwgbWV0aG9kIGRlbGl2ZXIoaWdub3JlUHJldmlvdXMpIGlzIGF2YWlsYWJsZSB0byBzdGFydCBkZWxpdmVyeVxyXG5cdC8vIHRvIHBhdXNlIGRlbGl2ZXJ5IHNldCBhIHByb3BlcnR5IGNhbGxlZCBwYXVzZSBvbiB0aGUgZnVuY3Rpb24gZGVsaXZlciB0byB0cnVlXHJcblx0Ly8gcGF1c2FibGUgaXMgb3B0aW9uYWwgdG8gcmVkdWNlIHRoZSBjaGFuY2Ugb2Ygc2hhZG93aW5nIGEgcHJvcGVydHkgb3IgbWV0aG9kIG9uIGFueSBleGlzdGluZyBjb2RlIGNhbGxlZCBkZWxpdmVyXHJcblx0aWYoIU9iamVjdC5vYnNlcnZlICYmIHR5cGVvZihQcm94eSk9PT1cImZ1bmN0aW9uXCIpIHtcclxuXHRcdGZ1bmN0aW9uIE9ic2VydmVyKHRhcmdldCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XHJcblx0ICAgIFx0dmFyIG1lID0gdGhpcywgcHJveHk7XHJcblx0ICAgIFx0ZnVuY3Rpb24gZGVsaXZlcihpZ25vcmVQcmV2aW91cyxkZWxheSkge1xyXG5cdCAgICBcdFx0ZGVsaXZlci5kZWxheSA9IGRlbGF5O1xyXG5cdCAgICBcdFx0aWYoIWRlbGl2ZXIucGF1c2UpIHtcclxuXHQgICAgICAgIFx0XHRpZihtZS5jaGFuZ2VzZXQubGVuZ3RoPjApIHtcclxuXHQgICAgICAgIFx0XHRcdGlmKCFpZ25vcmVQcmV2aW91cykge1xyXG5cdFx0ICAgIFx0ICAgIFx0XHR2YXIgY2hhbmdlcyA9IG1lLmNoYW5nZXNldC5maWx0ZXIoZnVuY3Rpb24oY2hhbmdlKSB7IHJldHVybiAhYWNjZXB0bGlzdCB8fCBhY2NlcHRsaXN0LmluZGV4T2YoY2hhbmdlLnR5cGUpPj0wOyB9KTtcclxuXHRcdCAgICAgICAgXHRcdFx0aWYoY2hhbmdlcy5sZW5ndGg+MCkge1xyXG5cdFx0ICAgICAgICBcdFx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xyXG5cdFx0ICAgICAgICBcdFx0XHR9XHJcblx0ICAgICAgICBcdFx0XHR9XHJcblx0ICAgICAgICBcdFx0XHRtZS5jaGFuZ2VzZXQgPSBbXTtcclxuXHQgICAgICAgIFx0XHR9XHJcblx0ICAgIFx0XHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdGRlbGl2ZXIucGF1c2UgPSBwYXVzZTtcclxuXHQgICAgXHRkZWxpdmVyLmRlbGF5ID0gZGVsYXk7XHJcblx0XHQgICAgbWUuZ2V0ID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eSkge1xyXG5cdFx0ICAgIFx0aWYocHJvcGVydHk9PT1cIl9fb2JzZXJ2ZXJfX1wiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBtZTtcclxuXHRcdCAgICBcdH1cclxuXHRcdCAgICBcdGlmKHByb3BlcnR5PT09XCJ1bm9ic2VydmVcIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHQgICAgXHRcdFx0T2JqZWN0LnVub2JzZXJ2ZSh0YXJnZXQpO1xyXG5cdFx0ICAgIFx0XHRcdHJldHVybiB0YXJnZXQ7XHJcblx0XHQgICAgXHRcdH07XHJcblx0XHQgICAgXHR9XHJcblx0XHQgICAgXHRpZihwcm9wZXJ0eT09PVwiZGVsaXZlclwiKSB7XHJcblx0XHQgICAgXHRcdHJldHVybiBkZWxpdmVyO1xyXG5cdFx0ICAgIFx0fVxyXG5cdFx0ICAgIFx0cmV0dXJuIHRhcmdldFtwcm9wZXJ0eV07XHJcblx0XHQgICAgfVxyXG5cdCAgICBcdG1lLnRhcmdldCA9IHRhcmdldDtcclxuXHQgICAgXHRtZS5jaGFuZ2VzZXQgPSBbXTtcclxuXHQgICAgXHRpZighbWUudGFyZ2V0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXykge1xyXG5cdCAgICBcdFx0Ly8gX19vYnNlcnZlckNhbGxiYWNrc19fIGlzIHVzZWQgYXMgYW4gaW5kZXggdG8gZ2V0IGF0IHRoZSBwcm94eSB3aGljaCBpcyB0aGUgb2JzZXJ2ZXIsIHNvIHdlIGNhbiB1bm9ic2VydmVcclxuXHQgICAgXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsXCJfX29ic2VydmVyQ2FsbGJhY2tzX19cIix7ZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTpmYWxzZSx2YWx1ZTpbXX0pO1xyXG5cdCAgICBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxcIl9fb2JzZXJ2ZXJzX19cIix7ZW51bWVyYWJsZTpmYWxzZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTpmYWxzZSx2YWx1ZTpbXX0pO1xyXG5cdCAgICBcdH1cclxuXHQgICAgXHRtZS50YXJnZXQuX19vYnNlcnZlckNhbGxiYWNrc19fLnB1c2goY2FsbGJhY2spO1xyXG5cdCAgICBcdG1lLnRhcmdldC5fX29ic2VydmVyc19fLnB1c2godGhpcyk7XHJcblx0ICAgIFx0cHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LG1lKTtcclxuXHQgICAgXHRkZWxpdmVyKGZhbHNlLGRlbGF5KTtcclxuXHQgICAgXHRyZXR1cm4gcHJveHk7XHJcblx0ICAgIH1cclxuXHRcdE9ic2VydmVyLnByb3RvdHlwZS5kZWxpdmVyID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldChudWxsLFwiZGVsaXZlclwiKTtcclxuXHRcdH1cclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7IC8vICwgcmVjZWl2ZXJcclxuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSB0YXJnZXRbcHJvcGVydHldO1xyXG5cdCAgICBcdHZhciB0eXBlID0gKG9sZHZhbHVlPT09dW5kZWZpbmVkID8gXCJhZGRcIiA6IFwidXBkYXRlXCIpO1xyXG5cdCAgICBcdHRhcmdldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcclxuXHQgICAgXHRpZih0YXJnZXQuX19vYnNlcnZlcnNfXy5pbmRleE9mKHRoaXMpPj0wICYmICghdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKHR5cGUpPj0wKSkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpwcm9wZXJ0eSx0eXBlOnR5cGV9LFxyXG5cdCAgICAgICAgXHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0aWYodHlwZT09PVwidXBkYXRlXCIpIHtcclxuXHQgICAgICAgIFx0XHRjaGFuZ2Uub2xkVmFsdWUgPSBvbGR2YWx1ZTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYnNlcnZlci5wcm90b3R5cGUuZGVsZXRlUHJvcGVydHkgPSBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5KSB7XHJcblx0ICAgIFx0dmFyIG9sZHZhbHVlID0gdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHQgICAgXHQvL2lmKHR5cGVvZihvbGR2YWx1ZSkhPT1cInVuZGVmaW5lZFwiKSB7XHJcblx0XHQgICAgXHRkZWxldGUgdGFyZ2V0W3Byb3BlcnR5XTtcclxuXHRcdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcImRlbGV0ZVwiKT49MCkge1xyXG5cdFx0ICAgICAgICBcdHZhciBjaGFuZ2UgPSB7b2JqZWN0OnRhcmdldCxuYW1lOnByb3BlcnR5LHR5cGU6XCJkZWxldGVcIixvbGRWYWx1ZTpvbGR2YWx1ZX0sXHJcblx0XHQgICAgICAgIFx0XHRzdGFydCA9IHRoaXMuY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHRcdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0XHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHRcdCAgICAgICAgXHR9XHJcblx0XHQgICAgXHR9XHJcblx0ICAgIFx0Ly99XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5kZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHksIGRlc2NyaXB0b3IpIHtcclxuXHQgICAgXHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzY3JpcHRvcik7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwicmVjb25maWd1cmVcIik+PTApIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LG5hbWU6cHJvcGVydHksdHlwZTpcInJlY29uZmlndXJlXCJ9LFxyXG4gICAgICAgIFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG4gICAgICAgIFx0XHRcdGRlbGl2ZXIgPSB0aGlzLmRlbGl2ZXIoKTtcclxuXHQgICAgICAgIFx0dGhpcy5jaGFuZ2VzZXQucHVzaChjaGFuZ2UpO1xyXG5cdCAgICAgICAgXHRpZihzdGFydCkge1xyXG5cdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgICAgIFx0fVxyXG5cdCAgICBcdH1cclxuXHQgICAgXHRyZXR1cm4gdHJ1ZTtcclxuXHQgICAgfTtcclxuXHQgICAgT2JzZXJ2ZXIucHJvdG90eXBlLnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24odGFyZ2V0LCBwcm90b3R5cGUpIHtcclxuXHQgICAgXHR2YXIgb2xkdmFsdWUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KTtcclxuXHQgICAgXHRPYmplY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90b3R5cGUpO1xyXG5cdCAgICBcdGlmKHRhcmdldC5fX29ic2VydmVyc19fLmluZGV4T2YodGhpcyk+PTAgJiYgIXRoaXMuYWNjZXB0bGlzdCB8fCB0aGlzLmFjY2VwdGxpc3QuaW5kZXhPZihcInNldFByb3RvdHlwZVwiKT49MCkge1xyXG5cdCAgICAgICAgXHR2YXIgY2hhbmdlID0ge29iamVjdDp0YXJnZXQsbmFtZTpcIl9fcHJvdG9fX1wiLHR5cGU6XCJzZXRQcm90b3R5cGVcIixvbGRWYWx1ZTpvbGR2YWx1ZX0sXHJcbiAgICBcdFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG4gICAgXHRcdFx0XHRkZWxpdmVyID0gdGhpcy5kZWxpdmVyKCk7XHJcblx0ICAgICAgICBcdHRoaXMuY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgICAgIFx0aWYoc3RhcnQpIHtcclxuXHQgICAgICAgIFx0XHRkZWxpdmVyKGZhbHNlLCh0eXBlb2YoZGVsaXZlci5kZWxheSk9PT1cIm51bWJlclwiID8gZGVsaXZlci5kZWxheSA6IDEwKSk7XHJcblx0ICAgICAgICBcdH1cclxuXHQgICAgXHR9XHJcblx0ICAgIFx0cmV0dXJuIHRydWU7XHJcblx0ICAgIH07XHJcblx0ICAgIE9ic2VydmVyLnByb3RvdHlwZS5wcmV2ZW50RXh0ZW5zaW9ucyA9IGZ1bmN0aW9uKHRhcmdldCkge1xyXG5cdCAgICAgICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XHJcblx0ICAgIFx0aWYodGFyZ2V0Ll9fb2JzZXJ2ZXJzX18uaW5kZXhPZih0aGlzKT49MCAmJiAhdGhpcy5hY2NlcHRsaXN0IHx8IHRoaXMuYWNjZXB0bGlzdC5pbmRleE9mKFwicHJldmVudEV4dGVuc2lvbnNcIik+PTApIHtcclxuXHQgICAgICAgIFx0dmFyIGNoYW5nZSA9IHtvYmplY3Q6dGFyZ2V0LHR5cGU6XCJwcmV2ZW50RXh0ZW5zaW9uc1wifSxcclxuXHRcdFx0XHRcdHN0YXJ0ID0gdGhpcy5jaGFuZ2VzZXQubGVuZ3RoID09PSAwLFxyXG5cdFx0XHRcdFx0ZGVsaXZlciA9IHRoaXMuZGVsaXZlcigpO1xyXG5cdCAgICAgICAgXHR0aGlzLmNoYW5nZXNldC5wdXNoKGNoYW5nZSk7XHJcblx0ICAgICAgICBcdGlmKHN0YXJ0KSB7XHJcblx0ICAgICAgICBcdFx0ZGVsaXZlcihmYWxzZSwodHlwZW9mKGRlbGl2ZXIuZGVsYXkpPT09XCJudW1iZXJcIiA/IGRlbGl2ZXIuZGVsYXkgOiAxMCkpO1xyXG5cdCAgICAgICAgXHR9XHJcblx0ICAgIFx0fVxyXG5cdCAgICBcdHJldHVybiB0cnVlO1xyXG5cdCAgICB9O1xyXG5cdCAgICBPYmplY3Qub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XHJcblx0ICAgIFx0cmV0dXJuIG5ldyBPYnNlcnZlcihvYmplY3QsY2FsbGJhY2ssYWNjZXB0bGlzdCxwYXVzYWJsZSxwYXVzZSxkZWxheSk7XHJcblx0ICAgIH07XHJcblx0ICAgIE9iamVjdC51bm9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2spIHtcclxuXHQgICAgXHRpZihvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fKSB7XHJcblx0ICAgIFx0XHRpZighY2FsbGJhY2spIHtcclxuXHQgICAgXHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5zcGxpY2UoMCxvYmplY3QuX19vYnNlcnZlckNhbGxiYWNrc19fLmxlbmd0aCk7XHJcblx0ICAgIFx0XHRcdG9iamVjdC5fX29ic2VydmVyc19fLnNwbGljZSgwLG9iamVjdC5fX29ic2VydmVyc19fLmxlbmd0aCk7XHJcblx0ICAgIFx0XHRcdHJldHVybjtcclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdG9iamVjdC5fX29ic2VydmVyQ2FsbGJhY2tzX18uZm9yRWFjaChmdW5jdGlvbihvYnNlcnZlcmNhbGxiYWNrLGkpIHtcclxuXHQgICAgXHRcdFx0aWYoY2FsbGJhY2s9PT1vYnNlcnZlcmNhbGxiYWNrKSB7XHJcblx0ICAgIFx0XHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJDYWxsYmFja3NfXy5zcGxpY2UoaSwxKTtcclxuXHQgICAgXHRcdFx0XHRkZWxldGUgb2JqZWN0Ll9fb2JzZXJ2ZXJzX19baV0uY2FsbGJhY2s7XHJcblx0ICAgIFx0XHRcdFx0b2JqZWN0Ll9fb2JzZXJ2ZXJzX18uc3BsaWNlKGksMSk7XHJcblx0ICAgIFx0XHRcdH1cclxuXHQgICAgXHRcdH0pO1xyXG5cdCAgICBcdH1cclxuXHQgICAgfTtcclxuXHQgICAgQXJyYXkub2JzZXJ2ZSA9IGZ1bmN0aW9uKG9iamVjdCxjYWxsYmFjayxhY2NlcHRsaXN0LHBhdXNhYmxlLHBhdXNlLGRlbGF5KSB7XHJcblx0ICAgIFx0aWYoIShvYmplY3QgaW5zdGFuY2VvZiBBcnJheSkgJiYgIUFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xyXG5cdCAgICBcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihcIkZpcnN0IGFyZ3VtZW50IHRvIEFycmF5Lm9ic2VydmVyIGlzIG5vdCBhbiBBcnJheVwiKTtcclxuXHQgICAgXHR9XHJcbiAgICAgICAgICAgIFx0YWNjZXB0bGlzdCA9IGFjY2VwdGxpc3QgfHwgW1wiYWRkXCIsIFwidXBkYXRlXCIsIFwiZGVsZXRlXCIsIFwic3BsaWNlXCJdO1xyXG5cdCAgICBcdHZhciBhcnJheXByb3h5ID0gbmV3IFByb3h5KG9iamVjdCx7Z2V0OiBmdW5jdGlvbih0YXJnZXQscHJvcGVydHkpIHtcclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJ1bm9ic2VydmVcIikge1xyXG5cdFx0ICAgIFx0XHRyZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuXHRcdCAgICBcdFx0XHRpZihjYWxsYmFjaykge1xyXG5cdFx0ICAgIFx0XHRcdFx0cmV0dXJuIE9iamVjdC51bm9ic2VydmUodGFyZ2V0LGNhbGxiYWNrKTtcclxuXHRcdCAgICBcdFx0XHR9XHJcblx0XHQgICAgXHRcdFx0cmV0dXJuIHRhcmdldC51bm9ic2VydmUoKTtcclxuXHRcdCAgICBcdFx0fTtcclxuXHRcdCAgICBcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJzcGxpY2VcIikge1xyXG5cdCAgICBcdFx0XHRyZXR1cm4gZnVuY3Rpb24oc3RhcnQsZW5kKSB7XHJcblx0ICAgIFx0XHRcdFx0aWYodHlwZW9mKHN0YXJ0KSE9PVwibnVtYmVyXCIgfHwgdHlwZW9mKGVuZCkhPT1cIm51bWJlclwiKSB7XHJcblx0ICAgIFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgdHdvIGFyZ3VtZW50cyB0byBBcnJheSBzcGxpY2UgYXJlIG5vdCBudW1iZXIsIG51bWJlclwiKTtcclxuXHQgICAgXHRcdFx0XHR9XHJcblx0ICAgIFx0ICAgIFx0XHR2YXIgcmVtb3ZlZCA9IHRoaXMuc2xpY2Uoc3RhcnQsc3RhcnQrZW5kKSxcclxuXHQgICAgXHQgICAgXHRcdFx0YWRkZWRDb3VudCA9IChhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50cy5sZW5ndGgtMiA6IDApLFxyXG5cdCAgICBcdCAgICBcdFx0XHRjaGFuZ2UgPSAge29iamVjdDpvYmplY3QsdHlwZTpcInNwbGljZVwiLGluZGV4OnN0YXJ0LHJlbW92ZWQ6cmVtb3ZlZCxhZGRlZENvdW50OmFkZGVkQ291bnR9O1xyXG5cdCAgICBcdCAgICBcdFx0dGFyZ2V0LnNwbGljZS5hcHBseSh0YXJnZXQsYXJndW1lbnRzKTtcclxuXHQgICAgXHQgICAgXHRcdGlmKGFjY2VwdGxpc3QuaW5kZXhPZihcInNwbGljZVwiKT49MCkge1xyXG5cdCAgICBcdCAgICBcdFx0XHR2YXIgc3RhcnQgPSBwcm94eS5fX29ic2VydmVyX18uY2hhbmdlc2V0Lmxlbmd0aCA9PT0gMCxcclxuXHQgICAgXHQgICAgICAgIFx0XHRcdGRlbGl2ZXIgPSBwcm94eS5fX29ic2VydmVyX18uZGVsaXZlcigpO1xyXG5cdCAgICBcdCAgICBcdFx0XHRwcm94eS5fX29ic2VydmVyX18uY2hhbmdlc2V0LnB1c2goY2hhbmdlKTtcclxuXHQgICAgXHQgICAgXHRcdFx0aWYoc3RhcnQpIHtcclxuXHQgICAgXHRcdCAgICAgICAgXHRcdGRlbGl2ZXIoZmFsc2UsKHR5cGVvZihkZWxpdmVyLmRlbGF5KT09PVwibnVtYmVyXCIgPyBkZWxpdmVyLmRlbGF5IDogMTApKTtcclxuXHQgICAgXHRcdCAgICAgICAgXHR9XHJcblx0ICAgIFx0ICAgIFx0XHR9XHJcblx0ICAgIFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInB1c2hcIikge1xyXG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHQgICAgXHRcdCAgICBcdHJldHVybiB0aGlzLnNwbGljZSh0aGlzLmxlbmd0aCwwLGl0ZW0pO1xyXG5cdCAgICBcdFx0ICAgIH1cclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHRcdGlmKHByb3BlcnR5PT09XCJwb3BcIikge1xyXG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdCAgICBcdFx0ICAgIFx0cmV0dXJuIHRoaXMuc3BsaWNlKHRoaXMubGVuZ3RoLTEsMSk7XHJcblx0ICAgIFx0XHQgICAgfVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInVuc2hpZnRcIikge1xyXG5cdCAgICBcdFx0XHQgcmV0dXJuIGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgIFx0XHQgICAgXHRcdHJldHVybiB0aGlzLnNwbGljZSgwLDAsaXRlbSk7XHJcbiAgICBcdFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0aWYocHJvcGVydHk9PT1cInNoaWZ0XCIpIHtcclxuXHQgICAgXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xyXG5cdCAgICBcdCAgICBcdFx0cmV0dXJuIHRoaXMuc3BsaWNlKDAsMSk7XHJcblx0ICAgIFx0ICAgIFx0fVxyXG5cdCAgICBcdFx0fVxyXG5cdCAgICBcdFx0cmV0dXJuIHRhcmdldFtwcm9wZXJ0eV07XHJcblx0ICAgIFx0fX0pO1xyXG5cdCAgICBcdHZhciBwcm94eSA9IE9iamVjdC5vYnNlcnZlKGFycmF5cHJveHksZnVuY3Rpb24oY2hhbmdlc2V0KSB7IFxyXG5cdCAgICBcdFx0dmFyIGNoYW5nZXMgPSBjaGFuZ2VzZXQuZmlsdGVyKGZ1bmN0aW9uKGNoYW5nZSkgeyByZXR1cm4gY2hhbmdlLm5hbWUhPT1cImxlbmd0aFwiICYmIGNoYW5nZS5uYW1lIT09XCJhZGRcIiAmJiAoIWFjY2VwdGxpc3QgfHwgYWNjZXB0bGlzdC5pbmRleE9mKGNoYW5nZS50eXBlKT49MCk7IH0pO1xyXG5cdCAgICBcdFx0aWYoY2hhbmdlcy5sZW5ndGg+MCkge1xyXG5cdCAgICBcdFx0XHRjYWxsYmFjayhjaGFuZ2VzKTtcclxuXHQgICAgXHRcdH1cclxuXHQgICAgXHR9LGFjY2VwdGxpc3QscGF1c2FibGUscGF1c2UsZGVsYXkpO1xyXG5cdCAgICBcdHJldHVybiBwcm94eTtcclxuXHQgICAgfTtcclxuXHQgICAgQXJyYXkudW5vYnNlcnZlID0gZnVuY3Rpb24ob2JqZWN0LGNhbGxiYWNrKSB7XHJcblx0XHQgIHJldHVybiBvYmplY3QudW5vYnNlcnZlKGNhbGxiYWNrKTtcclxuXHQgICAgfVxyXG5cdH1cclxuXHRPYmplY3QuZGVlcE9ic2VydmUgPSBmdW5jdGlvbihvYmplY3QsY2FsbGJhY2sscGFydHMpIHtcclxuXHJcblx0XHRwYXJ0cyA9IChwYXJ0cyA/IHBhcnRzIDogW10pO1xyXG5cclxuXHRcdHZhciB0b1R5cGVOYW1lID0gZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiAoe30pLnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpBLVpdKykvKVsxXS50b0xvd2VyQ2FzZSgpXHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gcmVvYnNlcnZlKHZhbHVlLCBwYXJ0cykge1xyXG5cdFx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcclxuXHRcdFx0a2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0XHRcdGlmKCh0b1R5cGVOYW1lKHZhbHVlW2tleV0pID09PSAnb2JqZWN0JyB8fCB0b1R5cGVOYW1lKHZhbHVlW2tleV0pID09PSAnYXJyYXknKSAmJiAhdmFsdWVba2V5XS5oYXNPd25Qcm9wZXJ0eSgnX19vYnNlcnZlcnNfXycpKSB7XHJcblx0XHRcdFx0XHR2YXIgbmV3cGFydHMgPSBwYXJ0cy5zbGljZSgwKTtcclxuXHRcdFx0XHRcdG5ld3BhcnRzLnB1c2goa2V5KTtcclxuXHRcdFx0XHRcdHZhbHVlW2tleV0gPSBPYmplY3QuZGVlcE9ic2VydmUodmFsdWVba2V5XSxjYWxsYmFjayxuZXdwYXJ0cyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcblx0XHRyZW9ic2VydmUob2JqZWN0LCBwYXJ0cyk7XHJcblxyXG5cdFx0dmFyIG9ic2VydmVkID0gT2JqZWN0Lm9ic2VydmUob2JqZWN0LGZ1bmN0aW9uKGNoYW5nZXNldCkge1xyXG5cdFx0XHR2YXIgY2hhbmdlcyA9IFtdO1xyXG5cdFx0XHRmdW5jdGlvbiByZWN1cnNlKG5hbWUscm9vdE9iamVjdCxvbGRPYmplY3QsbmV3T2JqZWN0LHBhdGgpIHtcclxuXHRcdFx0XHRpZihuZXdPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRcdHZhciBuZXdrZXlzID0gT2JqZWN0LmtleXMobmV3T2JqZWN0KTtcclxuXHRcdFx0XHRcdG5ld2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHRcdFx0XHRcdFx0aWYoIW9sZE9iamVjdCB8fCAob2xkT2JqZWN0W2tleV0hPT1uZXdPYmplY3Rba2V5XSkpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgb2xkdmFsdWUgPSAob2xkT2JqZWN0ICYmIG9sZE9iamVjdFtrZXldIT09dW5kZWZpbmVkID8gb2xkT2JqZWN0W2tleV0gOiB1bmRlZmluZWQpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhbmdlID0gKG9sZHZhbHVlPT09dW5kZWZpbmVkID8gXCJhZGRcIiA6IFwidXBkYXRlXCIpLFxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5cGF0aCA9IHBhdGggKyBcIi5cIiArIGtleTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y2hhbmdlcy5wdXNoKHtuYW1lOm5hbWUsb2JqZWN0OnJvb3RPYmplY3QsdHlwZTpjaGFuZ2Usb2xkVmFsdWU6b2xkdmFsdWUsbmV3VmFsdWU6bmV3T2JqZWN0W2tleV0sa2V5cGF0aDprZXlwYXRofSk7XHJcblx0XHRcdFx0XHRcdFx0cmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkdmFsdWUsbmV3T2JqZWN0W2tleV0sa2V5cGF0aCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSBpZihvbGRPYmplY3QgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRcdHZhciBvbGRrZXlzID0gT2JqZWN0LmtleXMob2xkT2JqZWN0KTtcclxuXHRcdFx0XHRcdG9sZGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuXHRcdFx0XHRcdFx0dmFyIGNoYW5nZSA9IChuZXdPYmplY3Q9PT1udWxsID8gXCJ1cGRhdGVcIiA6IFwiZGVsZXRlXCIpLFxyXG5cdFx0XHRcdFx0XHRcdGtleXBhdGggPSBwYXRoICsgXCIuXCIgKyBrZXk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNoYW5nZXMucHVzaCh7bmFtZTpuYW1lLG9iamVjdDpyb290T2JqZWN0LHR5cGU6Y2hhbmdlLG9sZFZhbHVlOm9sZE9iamVjdFtrZXldLG5ld1ZhbHVlOm5ld09iamVjdCxrZXlwYXRoOmtleXBhdGh9KTtcclxuXHRcdFx0XHRcdFx0cmVjdXJzZShuYW1lLHJvb3RPYmplY3Qsb2xkT2JqZWN0W2tleV0sdW5kZWZpbmVkLGtleXBhdGgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGNoYW5nZXNldC5mb3JFYWNoKGZ1bmN0aW9uKGNoYW5nZSkge1xyXG5cdFx0XHRcdHZhciBrZXlwYXRoID0gKHBhcnRzLmxlbmd0aD4wID8gcGFydHMuam9pbihcIi5cIikgKyBcIi5cIiA6IFwiXCIpICsgY2hhbmdlLm5hbWU7XHJcblxyXG5cdFx0XHRcdGlmIChjaGFuZ2UudHlwZSA9PT0gXCJ1cGRhdGVcIiB8fCBjaGFuZ2UudHlwZSA9PT0gXCJhZGRcIikgeyBcclxuXHRcdFx0XHRcdHJlb2JzZXJ2ZShjaGFuZ2Uub2JqZWN0LCBwYXJ0cyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRjaGFuZ2VzLnB1c2goe25hbWU6Y2hhbmdlLm5hbWUsb2JqZWN0OmNoYW5nZS5vYmplY3QsdHlwZTpjaGFuZ2UudHlwZSxvbGRWYWx1ZTpjaGFuZ2Uub2xkVmFsdWUsbmV3VmFsdWU6Y2hhbmdlLm9iamVjdFtjaGFuZ2UubmFtZV0sa2V5cGF0aDprZXlwYXRofSk7XHJcblx0XHRcdFx0cmVjdXJzZShjaGFuZ2UubmFtZSxjaGFuZ2Uub2JqZWN0LGNoYW5nZS5vbGRWYWx1ZSxjaGFuZ2Uub2JqZWN0W2NoYW5nZS5uYW1lXSxrZXlwYXRoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdGNhbGxiYWNrKGNoYW5nZXMpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gb2JzZXJ2ZWQ7XHJcblx0fTtcclxufSkoKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3h5LW9ic2VydmUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgNyIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbmltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IERhdGFPYmplY3QgZnJvbSAnLi9EYXRhT2JqZWN0JztcclxuXHJcbmxldCBGaWx0ZXJUeXBlID0ge0FOWTogJ2FueScsIFNUQVJUOiAnc3RhcnQnLCBFWEFDVDogJ2V4YWN0J307XHJcblxyXG4vKipcclxuICogVGhlIGNsYXNzIHJldHVybmVkIGZyb20gdGhlIFN5bmNoZXIgc3Vic2NyaWJlIGNhbGwuXHJcbiAqIFRvIGJlIHVzZWQgYXMgYW4gb2JzZXJ2YXRpb24gcG9pbnQgZnJvbSBhIERhdGFPYmplY3RSZXBvcnRlciBjaGFuZ2UuXHJcbiAqL1xyXG5jbGFzcyBEYXRhT2JqZWN0T2JzZXJ2ZXIgZXh0ZW5kcyBEYXRhT2JqZWN0IC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XHJcbiAgLyogcHJpdmF0ZVxyXG4gIF9jaGFuZ2VMaXN0ZW5lcjogTXNnTGlzdGVuZXJcclxuXHJcbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxyXG4gIF9maWx0ZXJzOiB7PGZpbHRlcj46IHt0eXBlOiA8c3RhcnQsIGV4YWN0PiwgY2FsbGJhY2s6IDxmdW5jdGlvbj59IH1cclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuc3Vic2NyaWJlIG1ldGhvZFxyXG4gICAqL1xyXG5cclxuICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgY29uc3RydWN0b3IoaW5wdXQpIHtcclxuICAgIC8vdG9kbzogY2hlY2sgd2h5XHJcbiAgICAvL2lucHV0LmluaXRpYWxEYXRhID0gaW5wdXQuaW5pdGlhbERhdGEuZGF0YTtcclxuXHJcbiAgICBzdXBlcihpbnB1dCk7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fdmVyc2lvbiA9IGlucHV0LnZlcnNpb247XHJcbiAgICBfdGhpcy5fZmlsdGVycyA9IHt9O1xyXG5cclxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIF90aGlzLl9vbkZpbHRlcihldmVudCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTeW5jIERhdGEgT2JqZWN0IE9ic2VydmVyIHdpdGggbGFzdCB2ZXJzaW9uIG9mIERhdGEgT2JqZWN0IFJlcG9ydGVyLiBVc2VmdWwgZm9yIFJlc3VtZXNcclxuICAgKi9cclxuICBzeW5jKCkge1xyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gc3luY2hyb25pc2luZyAnKTtcclxuXHJcbiAgICBfdGhpcy5fc3luY2hlci5yZWFkKF90aGlzLl9tZXRhZGF0YS51cmwpLnRoZW4oKHZhbHVlKT0+e1xyXG4gICAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gdmFsdWUgdG8gc3luYzogJywgdmFsdWUpO1xyXG5cclxuICAgICAgT2JqZWN0LmFzc2lnbihfdGhpcy5kYXRhLCBkZWVwQ2xvbmUodmFsdWUuZGF0YSkpO1xyXG5cclxuICAgICAgX3RoaXMuX3ZlcnNpb24gPSB2YWx1ZS52ZXJzaW9uO1xyXG5cclxuICAgICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IHZhbHVlLmxhc3RNb2RpZmllZDtcclxuXHJcbiAgICAgIC8qaWYgKHZhbHVlLnZlcnNpb24gIT0gX3RoaXMuX3ZlcnNpb24pIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gdXBkYXRpbmcgZXhpc3RpbmcgZGF0YTogJywgX3RoaXMuZGF0YSk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oX3RoaXMuZGF0YSB8fCB7fSwgZGVlcENsb25lKHZhbHVlLmRhdGEpKTtcclxuXHJcbiAgICAgICAgX3RoaXMuX21ldGFkYXRhID0gZGVlcENsb25lKHZhbHVlKTtcclxuXHJcbiAgICAgICAgZGVsZXRlIF90aGlzLl9tZXRhZGF0YS5kYXRhO1xyXG5cclxuICAgICAgICBfdGhpcy5fdmVyc2lvbiA9IHZhbHVlLnZlcnNpb247XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnW0RhdGFPYmplY3RPYnNlcnZlcl9zeW5jXSBleGlzdGluZyBkYXRhIGlzIHVwZGF0ZWQ6ICcsIHZhbHVlKTtcclxuICAgICAgfSovXHJcblxyXG4gICAgfSkuY2F0Y2goKHJlYXNvbikgPT4ge1xyXG4gICAgICBjb25zb2xlLmluZm8oJ1tEYXRhT2JqZWN0T2JzZXJ2ZXJfc3luY10gc3luYyBmYWlsZWQ6ICcsIHJlYXNvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX2NoYW5nZUxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihfdGhpcy5fdXJsICsgJy9jaGFuZ2VzJywgKG1zZykgPT4ge1xyXG4gICAgICBpZiAobXNnLnR5cGUgPT09ICd1cGRhdGUnKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RPYnNlcnZlci0nICsgX3RoaXMuX3VybCArICctUkNWOiAnLCBtc2cpO1xyXG4gICAgICAgIF90aGlzLl9jaGFuZ2VPYmplY3QoX3RoaXMuX3N5bmNPYmosIG1zZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fY2hhbmdlTGlzdGVuZXIucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBkZWxldGUoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG4gICAgZGVsZXRlIF90aGlzLl9zeW5jaGVyLl9vYnNlcnZlcnNbX3RoaXMuX3VybF07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWxlYXNlIGFuZCBkZWxldGUgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICB1bnN1YnNjcmliZSgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25Mb2NhbFVuU3Vic2NyaWJlXHJcbiAgICBsZXQgdW5TdWJzY3JpYmVNc2cgPSB7XHJcbiAgICAgIHR5cGU6ICd1bnN1YnNjcmliZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXHJcbiAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IF90aGlzLl91cmwgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHVuU3Vic2NyaWJlTXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RPYnNlcnZlci1VTlNVQlNDUklCRTogJywgcmVwbHkpO1xyXG4gICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICBfdGhpcy5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fc3luY2hlci5fb2JzZXJ2ZXJzW190aGlzLl91cmxdO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIHRoZSBjaGFuZ2UgbGlzdGVuZXJzIHNlbnQgYnkgdGhlIHJlcG9ydGVyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbHRlciAtIEZpbHRlciB0aGF0IGlkZW50aWZpZXMgdGhlIGZpZWxkIChzZXBhcmF0ZWQgZG90IHBhdGgpLiBBY2NlcHRzICogYXQgdGhlIGVuZCBmb3IgYSBtb3JlIHVucmVzdHJpY3RlZCBmaWx0ZXJpbmcuXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqL1xyXG4gIG9uQ2hhbmdlKGZpbHRlciwgY2FsbGJhY2spIHtcclxuICAgIGxldCBrZXkgPSBmaWx0ZXI7XHJcbiAgICBsZXQgZmlsdGVyT2JqID0ge1xyXG4gICAgICB0eXBlOiBGaWx0ZXJUeXBlLkVYQUNULFxyXG4gICAgICBjYWxsYmFjazogY2FsbGJhY2tcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGlkeCA9IGZpbHRlci5pbmRleE9mKCcqJyk7XHJcbiAgICBpZiAoaWR4ID09PSBmaWx0ZXIubGVuZ3RoIC0gMSkge1xyXG4gICAgICBpZiAoaWR4ID09PSAwKSB7XHJcbiAgICAgICAgZmlsdGVyT2JqLnR5cGUgPSBGaWx0ZXJUeXBlLkFOWTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmaWx0ZXJPYmoudHlwZSA9IEZpbHRlclR5cGUuU1RBUlQ7XHJcbiAgICAgICAga2V5ID0gZmlsdGVyLnN1YnN0cigwLCBmaWx0ZXIubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9maWx0ZXJzW2tleV0gPSBmaWx0ZXJPYmo7XHJcbiAgfVxyXG5cclxuICBfb25GaWx0ZXIoZXZlbnQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoX3RoaXMuX2ZpbHRlcnMpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICBsZXQgZmlsdGVyID0gX3RoaXMuX2ZpbHRlcnNba2V5XTtcclxuICAgICAgaWYgKGZpbHRlci50eXBlID09PSBGaWx0ZXJUeXBlLkFOWSkge1xyXG4gICAgICAgIC8vbWF0Y2ggYW55dGhpbmdcclxuICAgICAgICBmaWx0ZXIuY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICB9IGVsc2UgaWYgKGZpbHRlci50eXBlID09PSBGaWx0ZXJUeXBlLlNUQVJUKSB7XHJcbiAgICAgICAgLy9pZiBzdGFydHMgd2l0aCBmaWx0ZXIuLi5cclxuICAgICAgICBpZiAoZXZlbnQuZmllbGQuaW5kZXhPZihrZXkpID09PSAwKSB7XHJcbiAgICAgICAgICBmaWx0ZXIuY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChmaWx0ZXIudHlwZSA9PT0gRmlsdGVyVHlwZS5FWEFDVCkge1xyXG4gICAgICAgIC8vZXhhY3QgbWF0Y2hcclxuICAgICAgICBpZiAoZXZlbnQuZmllbGQgPT09IGtleSkge1xyXG4gICAgICAgICAgZmlsdGVyLmNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25EaXNjb25uZWN0ZWQoY2FsbGJhY2spIHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgdGhpcy5fc3Vic2NyaWJlUmVnaXN0cmF0aW9uKClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX29uRGlzY29ubmVjdGVkID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc3Vic2NyaWJlUmVnaXN0cmF0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IG1zZyA9IHtcclxuICAgICAgdHlwZTogJ3N1YnNjcmliZScsXHJcbiAgICAgIGZyb206IHRoaXMuX293bmVyLFxyXG4gICAgICB0bzogdGhpcy5fc3luY2hlci5fcnVudGltZVVybCArICcvc3Vic2NyaXB0aW9ucycsXHJcbiAgICAgIGJvZHk6IHtcclxuICAgICAgICByZXNvdXJjZXM6IFt0aGlzLl91cmwgKyAnL3JlZ2lzdHJhdGlvbiddXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuX2J1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbRGF0YU9iamVjdE9ic2VydmVyLl9zdWJzY3JpYmVSZWdpc3RyYXRpb25dICR7dGhpcy5fdXJsfSByY3ZlZCByZXBseSBgLCByZXBseSk7XHJcblxyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgdGhpcy5fZ2VuZXJhdGVMaXN0ZW5lcih0aGlzLl91cmwgKyAnL3JlZ2lzdHJhdGlvbicpO1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJzY3JpYmluZyByZWdpc3RyYXRpb24gc3RhdHVzIGZvciAnLCB0aGlzLl91cmwpO1xyXG4gICAgICAgICAgcmVqZWN0KCdFcnJvciBzdWJzY3JpYmluZyByZWdpc3RyYXRpb24gc3RhdHVzIGZvciAnICsgdGhpcy5fdXJsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2VuZXJhdGVMaXN0ZW5lcihub3RpZmljYXRpb25VUkwpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihub3RpZmljYXRpb25VUkwsIChtc2cpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYFtEYXRhT2JqZWN0T2JzZXJ2ZXIucmVnaXN0cmF0aW9uTm90aWZpY2F0aW9uXSAke190aGlzLl91cmx9OiBgLCBtc2cpO1xyXG4gICAgICBpZiAobXNnLmJvZHkudmFsdWUgJiYgbXNnLmJvZHkudmFsdWUgPT09ICdkaXNjb25uZWN0ZWQnICYmIF90aGlzLl9vbkRpc2Nvbm5lY3RlZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbRGF0YU9iamVjdE9ic2VydmVyXSAke190aGlzLl91cmx9OiB3YXMgZGlzY29ubmVjdGVkIGAsIG1zZyk7XHJcbiAgICAgICAgX3RoaXMuX29uRGlzY29ubmVjdGVkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3RzIHRoZSByZXBvcnRlciB0byBleGVjdXRlIGEgbWV0aG9kIG9uIHRoZSBkYXRhIG9iamVjdFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgLSBOYW1lIG9mIHRoZSBmdW5jdGlvbiB0byBiZSBleGVjdXRlZC5cclxuICAgKiBAcGFyYW0ge2FycmF5fSBwYXJhbXMgLSBhcnJheSBvZiBwYXJhbWV0ZXJzIGZvciB0aGUgcmVxdWVzdGVkIGZ1bmN0aW9uXHJcbiAgICogQHJldHVybiB7cHJvbWlzZX1cclxuICAgKi9cclxuXHJcbiAgZXhlY3V0ZShtZXRob2QsIHBhcmFtcykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgY29uc3QgbXNnID0ge1xyXG4gICAgICAgIHR5cGU6ICdleGVjdXRlJyxcclxuICAgICAgICBmcm9tOiB0aGlzLl9vd25lcixcclxuICAgICAgICB0bzogX3RoaXMuX3VybCxcclxuICAgICAgICBib2R5OiB7XHJcbiAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShtc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBbRGF0YU9iamVjdE9ic2VydmVyLmV4ZWN1dGVdICR7X3RoaXMuX3VybH0gcmN2ZWQgcmVwbHkgYCwgcmVwbHkpO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuaW5nKGBbRGF0YU9iamVjdE9ic2VydmVyLmV4ZWN1dGVdIGV4ZWN1dGlvbiBvZiBtZXRob2QgJHttZXRob2R9IHdhcyByZWplY3QgYnkgcmVwb3J0ZXJgKTtcclxuICAgICAgICAgIHJlamVjdChgW0RhdGFPYmplY3RPYnNlcnZlci5leGVjdXRlXSBleGVjdXRpb24gb2YgbWV0aG9kICR7bWV0aG9kfSB3YXMgcmVqZWN0IGJ5IHJlcG9ydGVyYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdE9ic2VydmVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXIuanMiLCIvKipcclxuKiBDb3B5cmlnaHQgMjAxNiBQVCBJbm92YcOnw6NvIGUgU2lzdGVtYXMgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBJTkVTQy1JRFxyXG4qIENvcHlyaWdodCAyMDE2IFFVT0JJUyBORVRXT1JLUyBTTFxyXG4qIENvcHlyaWdodCAyMDE2IEZSQVVOSE9GRVItR0VTRUxMU0NIQUZUIFpVUiBGT0VSREVSVU5HIERFUiBBTkdFV0FORFRFTiBGT1JTQ0hVTkcgRS5WXHJcbiogQ29weXJpZ2h0IDIwMTYgT1JBTkdFIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgRGV1dHNjaGUgVGVsZWtvbSBBR1xyXG4qIENvcHlyaWdodCAyMDE2IEFwaXplZVxyXG4qIENvcHlyaWdodCAyMDE2IFRFQ0hOSVNDSEUgVU5JVkVSU0lUQVQgQkVSTElOXHJcbipcclxuKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4qIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuKlxyXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbipcclxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4qIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4qIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKiovXHJcblxyXG5pbXBvcnQgRGF0YU9iamVjdCBmcm9tICcuL0RhdGFPYmplY3QnO1xyXG5cclxuaW1wb3J0IHsgZGVlcENsb25lLCBkaXZpZGVVUkwgfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XHJcblxyXG4vKipcclxuICogVGhlIGNsYXNzIHJldHVybmVkIGZyb20gdGhlIFN5bmNoZXIgY3JlYXRlIGNhbGwuXHJcbiAqIFRvIGJlIHVzZWQgYXMgYSByZXBvcnRlciBwb2ludCwgY2hhbmdlcyB3aWxsIGJlIHN1Ym1pdGVkIHRvIERhdGFPYmplY3RPYnNlcnZlciBpbnN0YW5jZXMuXHJcbiAqL1xyXG5jbGFzcyBEYXRhT2JqZWN0UmVwb3J0ZXIgZXh0ZW5kcyBEYXRhT2JqZWN0IC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XHJcbiAgLyogcHJpdmF0ZVxyXG4gIF9zdWJzY3JpcHRpb25zOiA8aHlwZXJ0eVVybDogeyBzdGF0dXM6IHN0cmluZyB9IH0+XHJcblxyXG4gIC0tLS1ldmVudCBoYW5kbGVycy0tLS1cclxuICBfb25TdWJzY3JpcHRpb25IYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcclxuICBfb25SZXNwb25zZUhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxyXG4gIF9vblJlYWRIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIuY3JlYXRlIG1ldGhvZFxyXG4gICAqL1xyXG5cclxuICAgLy9jb25zdHJ1Y3RvcihzeW5jaGVyLCB1cmwsIGNyZWF0ZWQsIHJlcG9ydGVyLCBydW50aW1lLCBzY2hlbWEsIG5hbWUsIGluaXRpYWxTdGF0dXMsIGluaXRpYWxEYXRhLCBjaGlsZHJlbnMsIG11dHVhbCA9IHRydWUsIHJlc3VtZWQgPSBmYWxzZSwgZGVzY3JpcHRpb24sIHRhZ3MsIHJlc291cmNlcywgb2JzZXJ2ZXJTdG9yYWdlLCBwdWJsaWNPYnNlcnZhdGlvbikge1xyXG4gIGNvbnN0cnVjdG9yKGlucHV0KSB7XHJcblxyXG4gICAgc3VwZXIoaW5wdXQpO1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fc3Vic2NyaXB0aW9ucyA9IHt9O1xyXG5cclxuICAgIF90aGlzLl9zeW5jT2JqLm9ic2VydmUoKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdbU3luY2hlci5EYXRhT2JqZWN0UmVwb3J0ZXJdICcgKyBfdGhpcy51cmwgKyAnIHB1Ymxpc2ggY2hhbmdlOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vbkNoYW5nZShldmVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBfdGhpcy5faW52aXRhdGlvbnMgPSBbXTtcclxuICB9XHJcblxyXG4gIF9hbGxvY2F0ZUxpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLl9hbGxvY2F0ZUxpc3RlbmVycygpO1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fb2JqZWN0TGlzdGVuZXIgPSBfdGhpcy5fYnVzLmFkZExpc3RlbmVyKF90aGlzLl91cmwsIChtc2cpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1tTeW5jaGVyLkRhdGFPYmplY3RSZXBvcnRlcl0gbGlzdGVuZXIgJyArIF90aGlzLl91cmwgKyAnIFJlY2VpdmVkOiAnLCBtc2cpO1xyXG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAncmVzcG9uc2UnOiBfdGhpcy5fb25SZXNwb25zZShtc2cpOyBicmVhaztcclxuICAgICAgICBjYXNlICdyZWFkJzogX3RoaXMuX29uUmVhZChtc2cpOyBicmVhaztcclxuICAgICAgICBjYXNlICdleGVjdXRlJzogX3RoaXMuX29uRXhlY3V0ZShtc2cpOyBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9vYmplY3RMaXN0ZW5lci5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgaW52aXRhdGlvbnMgKGNyZWF0ZSBtZXNzYWdlcykgdG8gaHlwZXJ0aWVzLCBvYnNlcnZlcnMgbGlzdC5cclxuICAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyBMaXN0IG9mIEh5cGVydHkgVVJMJ3NcclxuICAgKi9cclxuICBpbnZpdGVPYnNlcnZlcnMob2JzZXJ2ZXJzKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuXHJcbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkNyZWF0ZVxyXG4gICAgLy8gVE9ETzogcmVtb3ZlIHZhbHVlIGFuZCBhZGQgcmVzb3VyY2VzPyBzaG91bGQgc2ltaWxhciB0byAxc3QgY3JlYXRlXHJcblxyXG4gICAgbGV0IHRvSW52aXRlID0gW107XHJcblxyXG4gICAgb2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKT0+IHtcclxuICAgICAgaWYgKCFfdGhpcy5faW52aXRhdGlvbnNbb2JzZXJ2ZXJdKSB7XHJcbiAgICAgICAgdG9JbnZpdGUucHVzaChvYnNlcnZlcik7XHJcbiAgICAgICAgX3RoaXMuX2ludml0YXRpb25zW29ic2VydmVyXSA9IG9ic2VydmVyO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodG9JbnZpdGUubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnW1N5bmNoZXIuRGF0YU9iamVjdFJlcG9ydGVyXSBJbnZpdGVPYnNlcnZlcnMgJywgdG9JbnZpdGUsIF90aGlzLl9tZXRhZGF0YSk7XHJcblxyXG4gICAgICBsZXQgaW52aXRlTXNnID0ge1xyXG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fc3luY2hlci5fb3duZXIsIHRvOiBfdGhpcy5fc3luY2hlci5fc3ViVVJMLFxyXG4gICAgICAgIGJvZHk6IHsgcmVzdW1lOiBmYWxzZSwgcmVzb3VyY2U6IF90aGlzLl91cmwsIHNjaGVtYTogX3RoaXMuX3NjaGVtYSwgdmFsdWU6IF90aGlzLl9tZXRhZGF0YSwgYXV0aG9yaXNlOiB0b0ludml0ZSB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGludml0ZU1zZyk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVsZWFzZSBhbmQgZGVsZXRlIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgZGVsZXRlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkRlbGV0ZVxyXG4gICAgbGV0IGRlbGV0ZU1zZyA9IHtcclxuICAgICAgdHlwZTogJ2RlbGV0ZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zeW5jaGVyLl9zdWJVUkwsXHJcbiAgICAgIGJvZHk6IHsgcmVzb3VyY2U6IF90aGlzLl91cmwgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKGRlbGV0ZU1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0UmVwb3J0ZXItREVMRVRFOiAnLCByZXBseSk7XHJcbiAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgIF90aGlzLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICAgICAgZGVsZXRlIF90aGlzLl9zeW5jaGVyLl9yZXBvcnRlcnNbX3RoaXMuX3VybF07XHJcblxyXG4gICAgICAgIC8vX3RoaXMuX3N5bmNPYmoudW5vYnNlcnZlKCk7XHJcbiAgICAgICAgX3RoaXMuX3N5bmNPYmogPSB7fTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpcHRpb25zIHJlcXVlc3RlZCBhbmQgYWNjZXB0ZWQgdG8gdGhpcyByZXBvcnRlclxyXG4gICAqIEB0eXBlIHtPYmplY3Q8SHlwZXJ0eVVSTCwgU3luY1N1YnNjcmlwdGlvbj59XHJcbiAgICovXHJcbiAgZ2V0IHN1YnNjcmlwdGlvbnMoKSB7IHJldHVybiB0aGlzLl9zdWJzY3JpcHRpb25zOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIHN1YnNjcmliZSBhbmQgdW5zdWJzY3JpYmUgbm90aWZpY2F0aW9uc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcclxuICAgKi9cclxuICBvblN1YnNjcmlwdGlvbihjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZXNwb25zZSBub3RpZmljYXRpb25zIG9mIHRoZSBjcmVhdGUnc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVjZWl2ZSBldmVudHNcclxuICAgKi9cclxuICBvblJlc3BvbnNlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vblJlc3BvbnNlSGFuZGxlciA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0dXAgdGhlIGNhbGxiYWNrIHRvIHByb2Nlc3MgcmVhZCBub3RpZmljYXRpb25zXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqL1xyXG5cclxuICBvblJlYWQoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uUmVhZEhhbmRsZXIgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIGV4ZWN1dGUgbm90aWZpY2F0aW9uc1xyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcclxuICAgKi9cclxuXHJcbiAgb25FeGVjdXRlKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vbkV4ZWN1dGVIYW5kbGVyID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBwYXJlbnQgU3luY2hlciAtPiBfb25Gb3J3YXJkXHJcbiAgX29uRm9yd2FyZChtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3RSZXBvcnRlci1SQ1Y6ICcsIG1zZyk7XHJcbiAgICBzd2l0Y2ggKG1zZy5ib2R5LnR5cGUpIHtcclxuICAgICAgY2FzZSAnc3Vic2NyaWJlJzogX3RoaXMuX29uU3Vic2NyaWJlKG1zZyk7IGJyZWFrO1xyXG4gICAgICBjYXNlICd1bnN1YnNjcmliZSc6IF90aGlzLl9vblVuU3Vic2NyaWJlKG1zZyk7IGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gdGhpcyAtPiBfb25Gb3J3YXJkOiBlbWl0dGVkIGJ5IGEgcmVtb3RlIFN5bmNoZXIgLT4gc3Vic2NyaWJlXHJcbiAgX29uU3Vic2NyaWJlKG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBoeXBlcnR5VXJsID0gbXNnLmJvZHkuZnJvbTtcclxuICAgIGxldCBkaXZpZGVkVVJMID0gZGl2aWRlVVJMKGh5cGVydHlVcmwpO1xyXG4gICAgbGV0IGRvbWFpbiA9IGRpdmlkZWRVUkwuZG9tYWluO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdFJlcG9ydGVyLl9vblN1YnNjcmliZV0nLCBtc2csIGRvbWFpbiwgZGl2aWRlZFVSTCk7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cuYm9keS50eXBlLFxyXG4gICAgICB1cmw6IGh5cGVydHlVcmwsXHJcblxyXG4gICAgICBkb21haW46IGRvbWFpbixcclxuXHJcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eSxcclxuXHJcbiAgICAgIGFjY2VwdDogKCkgPT4ge1xyXG4gICAgICAgIC8vY3JlYXRlIG5ldyBzdWJzY3JpcHRpb25cclxuICAgICAgICBsZXQgc3ViID0geyB1cmw6IGh5cGVydHlVcmwsIHN0YXR1czogJ2xpdmUnIH07XHJcbiAgICAgICAgX3RoaXMuX3N1YnNjcmlwdGlvbnNbaHlwZXJ0eVVybF0gPSBzdWI7XHJcbiAgICAgICAgaWYgKF90aGlzLm1ldGFkYXRhLnN1YnNjcmlwdGlvbnMpIHsgX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucy5wdXNoKHN1Yi51cmwpOyB9XHJcblxyXG4gICAgICAgIGxldCBtc2dWYWx1ZSA9IF90aGlzLl9tZXRhZGF0YTtcclxuICAgICAgICBtc2dWYWx1ZS5kYXRhID0gZGVlcENsb25lKF90aGlzLmRhdGEpO1xyXG4gICAgICAgIG1zZ1ZhbHVlLnZlcnNpb24gPSBfdGhpcy5fdmVyc2lvbjtcclxuXHJcbiAgICAgICAgLy9wcm9jZXNzIGFuZCBzZW5kIGNoaWxkcmVucyBkYXRhXHJcbiAgICAgICAgLy8gbGV0IGNoaWxkcmVuVmFsdWVzID0ge307XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBpZiAoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykge1xyXG4gICAgICAgIC8vICAgT2JqZWN0LmtleXMoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykuZm9yRWFjaCgoY2hpbGRyZW5JZCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBsZXQgY2hpbGRyZW5EYXRhID0gX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZHJlbklkXTtcclxuICAgICAgICAvLyAgICAgY2hpbGRyZW5WYWx1ZXNbY2hpbGRyZW5JZF0gPSBkZWVwQ2xvbmUoY2hpbGRyZW5EYXRhKTtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgIC8vICAgbXNnVmFsdWUuY2hpbGRyZW5PYmplY3RzID0gY2hpbGRyZW5WYWx1ZXM7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgc2VuZE1zZyA9IHtcclxuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHNjaGVtYTogX3RoaXMuX3NjaGVtYSwgdmFsdWU6IG1zZ1ZhbHVlIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgICAgaWYgKG1zZy5ib2R5Lmhhc093blByb3BlcnR5KCdtdXR1YWxBdXRoZW50aWNhdGlvbicpICYmICFtc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbikge1xyXG4gICAgICAgICAgc2VuZE1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XHJcbiAgICAgICAgICB0aGlzLl9tdXR1YWxBdXRoZW50aWNhdGlvbiA9IG1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9zZW5kIG9rIHJlc3BvbnNlIG1lc3NhZ2VcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHNlbmRNc2cpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3ViO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgcmVqZWN0OiAocmVhc29uKSA9PiB7XHJcbiAgICAgICAgLy9zZW5kIHJlamVjdCByZXNwb25zZSBtZXNzYWdlXHJcbiAgICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgICAgIGJvZHk6IHsgY29kZTogNDAzLCBkZXNjOiByZWFzb24gfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTVUJTQ1JJUFRJT04tRVZFTlQ6ICcsIGV2ZW50KTtcclxuICAgICAgX3RoaXMuX29uU3Vic2NyaXB0aW9uSGFuZGxlcihldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSB0aGlzIC0+IF9vbkZvcndhcmQ6IGVtaXR0ZWQgYnkgYSByZW1vdGUgRGF0YU9iamVjdE9ic2VydmVyIC0+IHVuc3Vic2NyaWJlXHJcbiAgX29uVW5TdWJzY3JpYmUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IGh5cGVydHlVcmwgPSBtc2cuYm9keS5mcm9tO1xyXG4gICAgbGV0IGRpdmlkZWRVUkwgPSBkaXZpZGVVUkwoaHlwZXJ0eVVybCk7XHJcbiAgICBsZXQgZG9tYWluID0gZGl2aWRlZFVSTC5kb21haW47XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0UmVwb3J0ZXIuX29uVW5TdWJzY3JpYmVdJywgbXNnLCBkb21haW4sIGRpdmlkZWRVUkwpO1xyXG5cclxuICAgIC8vbGV0IHN1YiA9IF90aGlzLl9zdWJzY3JpcHRpb25zW2h5cGVydHlVcmxdO1xyXG4gICAgZGVsZXRlIF90aGlzLl9zdWJzY3JpcHRpb25zW2h5cGVydHlVcmxdO1xyXG4gICAgZGVsZXRlIF90aGlzLl9pbnZpdGF0aW9uc1toeXBlcnR5VXJsXTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy5ib2R5LnR5cGUsXHJcbiAgICAgIHVybDogaHlwZXJ0eVVybCxcclxuICAgICAgZG9tYWluOiBkb21haW4sXHJcbiAgICAgIGlkZW50aXR5OiBtc2cuYm9keS5pZGVudGl0eVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUT0RPOiBjaGVjayBpZiB0aGUgX29uU3Vic2NyaXB0aW9uSGFuZGxlciBpdCBpcyB0aGUgc2FtZSBvZiB0aGUgc3Vic2NyaXB0aW9ucz8/P1xyXG4gICAgaWYgKF90aGlzLl9vblN1YnNjcmlwdGlvbkhhbmRsZXIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1VOLVNVQlNDUklQVElPTi1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25TdWJzY3JpcHRpb25IYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIFJlcG9ydGVyVVJMIGFkZHJlc3M6IGVtaXRlZCBieSBhIHJlbW90ZSBTeW5jaGVyIC0+IF9vblJlbW90ZUNyZWF0ZSAtPiBldmVudC5hY2tcclxuICBfb25SZXNwb25zZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgdXJsOiBtc2cuZnJvbSxcclxuICAgICAgY29kZTogbXNnLmJvZHkuY29kZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSRVNQT05TRS1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gUmVwb3J0ZXJVUkwgYWRkcmVzczogZW1pdGVkIGJ5IGEgcmVtb3RlIFN5bmNoZXIgLT4gcmVhZFxyXG4gIF9vblJlYWQobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IG9iamVjdFZhbHVlID0gZGVlcENsb25lKF90aGlzLm1ldGFkYXRhKTtcclxuICAgIG9iamVjdFZhbHVlLmRhdGEgPSBkZWVwQ2xvbmUoX3RoaXMuZGF0YSk7XHJcbiAgICBvYmplY3RWYWx1ZS52ZXJzaW9uID0gX3RoaXMuX3ZlcnNpb247XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlID0ge1xyXG4gICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHZhbHVlOiBvYmplY3RWYWx1ZSB9XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBldmVudCA9IHtcclxuICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgIHVybDogbXNnLmZyb20sXHJcblxyXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDQwMSwgZGVzYzogcmVhc29uIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdGVyIGlzIGFuIGF1dGhvcmlzZWQgb2JzZXJ2ZXIsIHRoZSBkYXRhIG9iamVjdCBpcyByZXNwb25kZWQgb3RoZXJ3aXNlIGFuIGV2ZW50IGlzIHRyaWdnZXJlZFxyXG4gICAgbGV0IHN1YnNjcmlwdGlvbnMgPSBbXTtcclxuXHJcbiAgICBpZiAoX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICBzdWJzY3JpcHRpb25zID0gX3RoaXMubWV0YWRhdGEuc3Vic2NyaXB0aW9ucztcclxuICAgIH0gZWxzZSBpZiAoX3RoaXMuX3N1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3Vic2NyaXB0aW9ucyA9IE9iamVjdC5rZXlzKF90aGlzLl9zdWJzY3JpcHRpb25zKS5tYXAoZnVuY3Rpb24oa2V5KSB7IHJldHVybiBfdGhpcy5fc3Vic2NyaXB0aW9uc1trZXldLnVybDsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN1YnNjcmlwdGlvbnMuaW5kZXhPZihtc2cuZnJvbSkgIT0gLTEpIHtcclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXNwb25zZSk7XHJcbiAgICB9IGVsc2UgaWYgKF90aGlzLl9vblJlYWRIYW5kbGVyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSRUFELUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vblJlYWRIYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEV4ZWN1dGUgcmVxdWVzdCByZWNlaXZlZFxyXG4gIF9vbkV4ZWN1dGUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGlmICghbXNnLmJvZHkubWV0aG9kKSB0aHJvdyAnW0RhdGFPYmplY3RSZXBvcnRlci5fb25FeGVjdXRlXSBtZXRob2QgbWlzc2luZyAnLCBtc2c7XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlID0ge1xyXG4gICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgYm9keTogeyBjb2RlOiAyMDAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICB1cmw6IG1zZy5mcm9tLFxyXG4gICAgICBtZXRob2Q6IG1zZy5ib2R5Lm1ldGhvZCxcclxuICAgICAgcGFyYW1zOiBtc2cuYm9keS5wYXJhbXMsXHJcblxyXG4gICAgICBhY2NlcHQ6ICgpID0+IHtcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHJlamVjdDogKHJlYXNvbikgPT4ge1xyXG4gICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgICBib2R5OiB7IGNvZGU6IDQwMSwgZGVzYzogcmVhc29uIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoX3RoaXMuX29uRXhlY3V0ZUhhbmRsZXIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0UmVwb3J0ZXJdIEVYRUNVVEUtRVZFTlQ6ICcsIGV2ZW50KTtcclxuICAgICAgX3RoaXMuX29uRXhlY3V0ZUhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFPYmplY3RSZXBvcnRlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdFJlcG9ydGVyLmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuaW1wb3J0IFN5bmNPYmplY3QsIHtDaGFuZ2VUeXBlLCBPYmplY3RUeXBlfSBmcm9tICcuL1Byb3h5T2JqZWN0JztcclxuaW1wb3J0IERhdGFPYmplY3RDaGlsZCBmcm9tICcuL0RhdGFPYmplY3RDaGlsZCc7XHJcbmltcG9ydCB7ZGVlcENsb25lfSBmcm9tICcuLi91dGlscy91dGlscy5qcyc7XHJcblxyXG4vKipcclxuICogTWFpbiBleHRlbnNpb24gY2xhc3MgZm9yIG9ic2VydmVycyBhbmQgcmVwb3J0ZXJzLCB3aXRoIGNvbW1vbiBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzLlxyXG4gKiBDaGlsZHJlbiBtYW5hZ2VtZW50IGlzIGNvbW1vbiBmb3Igb2JzZXJ2ZXJzIGFuZCByZXBvcnRlcnMuXHJcbiAqL1xyXG5jbGFzcyBEYXRhT2JqZWN0IHtcclxuICAvKiBwcml2YXRlXHJcbiAgX3ZlcnNpb246IG51bWJlclxyXG5cclxuICBfb3duZXI6IEh5cGVydHlVUkxcclxuICBfdXJsOiBPYmplY3RVUkxcclxuICBfc2NoZW1hOiBTY2hlbWFcclxuICBfYnVzOiBNaW5pQnVzXHJcbiAgX3N0YXR1czogb24gfCBwYXVzZWRcclxuICBfc3luY09iajogU3luY0RhdGFcclxuXHJcbiAgX2NoaWxkcmVuOiB7IGlkOiBEYXRhT2JqZWN0Q2hpbGQgfVxyXG4gIF9jaGlsZHJlbkxpc3RlbmVyczogW01zZ0xpc3RlbmVyXVxyXG5cclxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXHJcbiAgX29uQWRkQ2hpbGRIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIFN5bmNoZXIgY3JlYXRlIG9yIHN1YnNjcmliZSBtZXRob2Qnc1xyXG4gICAqL1xyXG4gIC8vY29uc3RydWN0b3Ioc3luY2hlciwgdXJsLCBjcmVhdGVkLCByZXBvcnRlciwgcnVudGltZSwgc2NoZW1hLCBuYW1lLCBpbml0aWFsU3RhdHVzLCBpbml0aWFsRGF0YSwgY2hpbGRyZW5zLCBtdXR1YWwgPSB0cnVlLCByZXN1bWVkID0gZmFsc2UsIGRlc2NyaXB0aW9uLCB0YWdzLCByZXNvdXJjZXMsIG9ic2VydmVyU3RvcmFnZSwgcHVibGljT2JzZXJ2YXRpb24pIHtcclxuICBjb25zdHJ1Y3RvcihpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBmdW5jdGlvbiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IocGFyKSB7XHJcbiAgICAgIHRocm93ICdbRGF0YU9iamVjdF0gJyArIHBhciArICcgbWFuZGF0b3J5IHBhcmFtZXRlciBpcyBtaXNzaW5nJztcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5zeW5jaGVyID8gX3RoaXMuX3N5bmNoZXIgPSBpbnB1dC5zeW5jaGVyIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdzeW5jaGVyJyk7XHJcbiAgICBpbnB1dC51cmwgPyAgX3RoaXMuX3VybCA9IGlucHV0LnVybCA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigndXJsJyk7XHJcbiAgICBpbnB1dC5jcmVhdGVkID8gX3RoaXMuX2NyZWF0ZWQgPSBpbnB1dC5jcmVhdGVkIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdjcmVhdGVkJyk7XHJcbiAgICBpbnB1dC5yZXBvcnRlciA/IF90aGlzLl9yZXBvcnRlciA9IGlucHV0LnJlcG9ydGVyIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdyZXBvcnRlcicpO1xyXG4gICAgaW5wdXQucnVudGltZSA/IF90aGlzLl9ydW50aW1lID0gaW5wdXQucnVudGltZSA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcigncnVudGltZScpO1xyXG4gICAgaW5wdXQuc2NoZW1hID8gX3RoaXMuX3NjaGVtYSA9IGlucHV0LnNjaGVtYSA6IHRocm93TWFuZGF0b3J5UGFybU1pc3NpbmdFcnJvcignc2NoZW1hJyk7XHJcbiAgICBpbnB1dC5uYW1lID8gX3RoaXMuX25hbWUgPSBpbnB1dC5uYW1lIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCduYW1lJyk7XHJcblxyXG5cclxuICAgIF90aGlzLl9zdGF0dXMgPSBpbnB1dC5zdGF0dXM7XHJcblxyXG4gICAgaWYgKGlucHV0LmRhdGEpIHtcclxuICAgICAgX3RoaXMuX3N5bmNPYmogPSBuZXcgU3luY09iamVjdChpbnB1dC5kYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIF90aGlzLl9zeW5jT2JqID0gbmV3IFN5bmNPYmplY3Qoe30pO1xyXG4gICAgfVxyXG4gICAgX3RoaXMuX2NoaWxkcmVucyA9IGlucHV0LmNoaWxkcmVucztcclxuXHJcbiAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24gPSBpbnB1dC5tdXR1YWw7XHJcblxyXG4gICAgX3RoaXMuX3ZlcnNpb24gPSAwO1xyXG4gICAgX3RoaXMuX2NoaWxkSWQgPSAwO1xyXG4gICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzID0gW107XHJcblxyXG4gICAgX3RoaXMuX3Jlc3VtZWQgPSBpbnB1dC5yZXN1bWU7XHJcblxyXG4gICAgaWYgKGlucHV0LnJlc3VtZSkgeyBfdGhpcy5fdmVyc2lvbiA9IGlucHV0LnZlcnNpb247IH1cclxuXHJcbiAgICBfdGhpcy5fb3duZXIgPSBpbnB1dC5zeW5jaGVyLl9vd25lcjtcclxuICAgIF90aGlzLl9idXMgPSBpbnB1dC5zeW5jaGVyLl9idXM7XHJcblxyXG4gICAgaWYgKGlucHV0LmRlc2NyaXB0aW9uKSBfdGhpcy5fZGVzY3JpcHRpb24gPSBpbnB1dC5kZXNjcmlwdGlvbjtcclxuICAgIGlmIChpbnB1dC50YWdzKSBfdGhpcy5fdGFncyA9IGlucHV0LnRhZ3M7XHJcbiAgICBpZiAoaW5wdXQucmVzb3VyY2VzKSBfdGhpcy5fcmVzb3VyY2VzID0gaW5wdXQucmVzb3VyY2VzO1xyXG4gICAgaWYgKGlucHV0Lm9ic2VydmVyU3RvcmFnZSkgX3RoaXMuX29ic2VydmVyU3RvcmFnZSA9IGlucHV0Lm9ic2VydmVyU3RvcmFnZTtcclxuICAgIGlmIChpbnB1dC5wdWJsaWNPYnNlcnZhdGlvbikgX3RoaXMuX3B1YmxpY09ic2VydmF0aW9uID0gaW5wdXQucHVibGljT2JzZXJ2YXRpb247XHJcblxyXG4gICAgX3RoaXMuX21ldGFkYXRhID0gT2JqZWN0LmFzc2lnbihpbnB1dCk7XHJcbiAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gX3RoaXMuX21ldGFkYXRhLmNyZWF0ZWQ7XHJcblxyXG4gICAgZGVsZXRlIF90aGlzLl9tZXRhZGF0YS5kYXRhO1xyXG4gICAgZGVsZXRlIF90aGlzLl9tZXRhZGF0YS5zeW5jaGVyO1xyXG4gICAgZGVsZXRlIF90aGlzLl9tZXRhZGF0YS5hdXRob3Jpc2U7XHJcblxyXG4gIH1cclxuXHJcbiAgX2dldExhc3RDaGlsZElkKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBsZXQgY2hpbGRJZEludCA9IDA7XHJcbiAgICBsZXQgY2hpbGRJZFN0cmluZyA9IF90aGlzLl9vd25lciArICcjJyArIGNoaWxkSWRJbnQ7XHJcblxyXG5cclxuICAgIE9iamVjdC5rZXlzKF90aGlzLl9jaGlsZHJlbnMpLmZpbHRlcigoa2V5KSA9PiB7XHJcbiAgICAgIGlmIChfdGhpcy5fY2hpbGRyZW5zW2tleV0uY2hpbGRJZCA+IGNoaWxkSWRTdHJpbmcpIHtcclxuICAgICAgICBjaGlsZElkU3RyaW5nID0gX3RoaXMuX2NoaWxkcmVuc1trZXldLmNoaWxkSWQ7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjaGlsZElkSW50ID0gTnVtYmVyKGNoaWxkSWRTdHJpbmcuc3BsaXQoJyMnKVsxXSk7XHJcbiAgfVxyXG5cclxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBjaGlsZEJhc2VVUkwgPSBfdGhpcy5fdXJsICsgJy9jaGlsZHJlbi8nO1xyXG4gICAgY29uc29sZS5sb2coJ1tEYXRhIE9iamVjdCAtIEFsbG9jYXRlTGlzdGVuZXJzXSAtICcsIF90aGlzLl9jaGlsZHJlbnMpO1xyXG4gICAgaWYgKF90aGlzLl9jaGlsZHJlbnMpIHtcclxuICAgICAgX3RoaXMuX2NoaWxkcmVucy5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgIGxldCBjaGlsZFVSTCA9IGNoaWxkQmFzZVVSTCArIGNoaWxkO1xyXG4gICAgICAgIGxldCBsaXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoY2hpbGRVUkwsIChtc2cpID0+IHtcclxuICAgICAgICAgIC8vaWdub3JlIG1zZyBzZW50IGJ5IGhpbXNlbGZcclxuICAgICAgICAgIGlmIChtc2cuZnJvbSAhPT0gdGhpcy5fb3duZXIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0RhdGFPYmplY3QtQ2hpbGRyZW4tUkNWOiAnLCBtc2cpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSAnY3JlYXRlJzogX3RoaXMuX29uQ2hpbGRDcmVhdGUobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzogY29uc29sZS5sb2cobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgZGVmYXVsdDogX3RoaXMuX2NoYW5nZUNoaWxkcmVuKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbkxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKF90aGlzLl9jaGlsZHJlbk9iamVjdHMpIHtcclxuICAgICAgT2JqZWN0LmtleXMoX3RoaXMuX2NoaWxkcmVuT2JqZWN0cykuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1trZXldLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICByZXN1bWVDaGlsZHJlbnMoY2hpbGRyZW5zKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBjaGlsZElkU3RyaW5nID0gdGhpcy5fb3duZXIgKyAnIycgKyB0aGlzLl9jaGlsZElkO1xyXG5cclxuICAgIGlmIChjaGlsZHJlbnMgJiYgIV90aGlzLl9jaGlsZHJlbk9iamVjdHMpIHtcclxuICAgICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0cyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0dXAgY2hpbGRyZW5zIGRhdGEgZnJvbSBzdWJzY3JpcHRpb25cclxuICAgIE9iamVjdC5rZXlzKGNoaWxkcmVucykuZm9yRWFjaCgoY2hpbGRyZW5SZXNvdXJjZSkgPT4ge1xyXG4gICAgICBsZXQgY2hpbGRyZW4gPSBjaGlsZHJlbnNbY2hpbGRyZW5SZXNvdXJjZV07XHJcblxyXG4gICAgICBPYmplY3Qua2V5cyhjaGlsZHJlbikuZm9yRWFjaCgoY2hpbGRJZCkgPT4ge1xyXG4gICAgICAgIGxldCBjaGlsZElucHV0ID0gY2hpbGRyZW5bY2hpbGRJZF0udmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0LnJlc3VtZUNoaWxkcmVuc10gbmV3IERhdGFPYmplY3RDaGlsZDogJywgY2hpbGRyZW5SZXNvdXJjZSwgY2hpbGRyZW4sIGNoaWxkSW5wdXQpO1xyXG4gICAgICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XHJcbiAgICAgICAgY2hpbGRJbnB1dC5wYXJlbnQgPSBfdGhpcy5fdXJsO1xyXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0gPSBuZXcgRGF0YU9iamVjdENoaWxkKGNoaWxkSW5wdXQpO1xyXG4gICAgICAgIF90aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0uaWRlbnRpdHkgPSBjaGlsZHJlbltjaGlsZElkXS5pZGVudGl0eTtcclxuXHJcbiAgICAgICAgaWYgKGNoaWxkSWQgPiBjaGlsZElkU3RyaW5nKSB7XHJcbiAgICAgICAgICBjaGlsZElkU3RyaW5nID0gY2hpbGRJZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdFJlcG9ydGVyLnJlc3VtZUNoaWxkcmVuc10gLSByZXN1bWVkOiAnLCB0aGlzLl9jaGlsZHJlbk9iamVjdHNbY2hpbGRJZF0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NoaWxkSWQgPSBOdW1iZXIoY2hpbGRJZFN0cmluZy5zcGxpdCgnIycpWzFdKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbCBNZXRhZGF0YSBhYm91dCB0aGUgRGF0YSBPYmplY3RcclxuICAgKiBAdHlwZSB7T2JqZWN0fSAtXHJcbiAgICovXHJcblxyXG4gIGdldCBtZXRhZGF0YSgpIHsgcmV0dXJuIHRoaXMuX21ldGFkYXRhOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9iamVjdCBVUkwgb2YgcmVwb3J0ZXIgb3Igb2JzZXJ2ZXJcclxuICAgKiBAdHlwZSB7T2JqZWN0VVJMfVxyXG4gICAqL1xyXG4gIGdldCB1cmwoKSB7IHJldHVybiB0aGlzLl91cmw7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogT2JqZWN0IHNjaGVtYSBVUkwgKHRoaXMgZmllbGQgaXMgbm90IHlldCBzdGFibGUsIGFuZCBpcyBzdWJzamVjdCB0byBjaGFuZ2UpXHJcbiAgICogQHR5cGUge1NjaGVtYVVSTH1cclxuICAgKi9cclxuICBnZXQgc2NoZW1hKCkgeyByZXR1cm4gdGhpcy5fc2NoZW1hOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXR1cyBvZiB0aGUgcmVwb3J0ZXIgb3Igb2JzZXJ2ZXIgY29ubmVjdGlvbiAodGhpcyBmaWVsZCBpcyBub3QgeWV0IHN0YWJsZSwgYW5kIGlzIHN1YnNqZWN0IHRvIGNoYW5nZSlcclxuICAgKiBAdHlwZSB7U3RhdHVzfSAtIEVudW0gb2Y6IG9uIHwgcGF1c2VkXHJcbiAgICovXHJcbiAgZ2V0IHN0YXR1cygpIHsgcmV0dXJuIHRoaXMuX3N0YXR1czsgfVxyXG5cclxuICAvKipcclxuICAgKiBEYXRhIHN0cnVjdHVyZSB0byBiZSBzeW5jaHJvbml6ZWQuXHJcbiAgICogQHR5cGUge0pTT059IC0gSlNPTiBzdHJ1Y3R1cmUgdGhhdCBzaG91bGQgZm9sbG93IHRoZSBkZWZpbmVkIHNjaGVtYSwgaWYgYW55LlxyXG4gICAqL1xyXG4gIGdldCBkYXRhKCkgeyByZXR1cm4gdGhpcy5fc3luY09iai5kYXRhOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbCBjcmVhdGVkIGNoaWxkcmVuJ3Mgc2luY2UgdGhlIHN1YnNjcmlwdGlvbiwgZG9lc24ndCBjb250YWluIGFsbCBjaGlsZHJlbidzIHNpbmNlIHJlcG9ydGVyIGNyZWF0aW9uLlxyXG4gICAqIEB0eXBlIHtPYmplY3Q8Q2hpbGRJZCwgRGF0YU9iamVjdENoaWxkPn1cclxuICAgKi9cclxuICBnZXQgY2hpbGRyZW5zKCkgeyByZXR1cm4gdGhpcy5fY2hpbGRyZW5PYmplY3RzOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBwYXVzZSgpIHtcclxuICAgIC8vVE9ETzogdGhpcyBmZWF0dXJlIG5lZWRzIG1vcmUgYW5hbGlzZVxyXG4gICAgdGhyb3cgJ05vdCBpbXBsZW1lbnRlZCc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICovXHJcbiAgcmVzdW1lKCkge1xyXG4gICAgLy9UT0RPOiB0aGlzIGZlYXR1cmUgbmVlZHMgbW9yZSBhbmFsaXNlXHJcbiAgICB0aHJvdyAnTm90IGltcGxlbWVudGVkJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBpZ25vcmVcclxuICAgKi9cclxuICBzdG9wKCkge1xyXG4gICAgLy9UT0RPOiBzaG91bGQgcmVtb3ZlIHRoZSBzdWJzY3JpcHRpb24gYW5kIHNlbmQgbWVzc2FnZSB1bnN1YnNjcmliZT9cclxuICAgIHRocm93ICdOb3QgaW1wbGVtZW50ZWQnO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuZCBhZGQgYSBEYXRhT2JqZWN0Q2hpbGQgdG8gYSBjaGlsZHJlbiBjb2xsZWN0aW9uLlxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjaGlsZHJlbiAtIENoaWxkcmVuIG5hbWUgd2hlcmUgdGhlIGNoaWxkIGlzIGFkZGVkLlxyXG4gICAqIEBwYXJhbSB7SlNPTn0gaW5pdGlhbERhdGEgLSBJbml0aWFsIGRhdGEgb2YgdGhlIGNoaWxkXHJcbiAgICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxyXG4gICAqIEBwYXJhbSAge1N5bmNDaGlsZE1ldGFkYXRhfSBpbnB1dCAtIChvcHRpb25hbCkgQWxsIGFkZGl0aW9uYWwgbWV0YWRhdGEgYWJvdXQgdGhlIERhdGFPYmplY3RDaGlsZC5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RDaGlsZD59IC0gUmV0dXJuIFByb21pc2UgdG8gYSBuZXcgRGF0YU9iamVjdENoaWxkLlxyXG4gICAqL1xyXG5cclxuICBhZGRDaGlsZChjaGlsZHJlbiwgaW5pdGlhbERhdGEsIGlkZW50aXR5LCBpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvL3JldHVybnMgcHJvbWlzZSwgaW4gdGhlIGZ1dHVyZSwgdGhlIEFQSSBtYXkgY2hhbmdlIHRvIGFzeW5jaHJvbm91cyBjYWxsXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuXHJcbiAgICAgIGxldCBjaGlsZElucHV0ICA9IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KTtcclxuXHJcbiAgICAgIC8vY3JlYXRlIG5ldyBjaGlsZCB1bmlxdWUgSUQsIGJhc2VkIG9uIGh5cGVydHlVUkxcclxuICAgICAgX3RoaXMuX2NoaWxkSWQrKztcclxuICAgICAgY2hpbGRJbnB1dC51cmwgPSBfdGhpcy5fb3duZXIgKyAnIycgKyBfdGhpcy5fY2hpbGRJZDtcclxuICAgICAgbGV0IG1zZ0NoaWxkUGF0aCA9IF90aGlzLl91cmwgKyAnL2NoaWxkcmVuLycgKyBjaGlsZHJlbjtcclxuXHJcbiAgICAgIGNoaWxkSW5wdXQucGFyZW50T2JqZWN0ID0gX3RoaXM7XHJcbiAgICAgIGNoaWxkSW5wdXQuZGF0YSA9IGluaXRpYWxEYXRhO1xyXG4gICAgICBjaGlsZElucHV0LnJlcG9ydGVyID0gX3RoaXMuX293bmVyO1xyXG4gICAgICBjaGlsZElucHV0LmNyZWF0ZWQgPSAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgIGNoaWxkSW5wdXQucnVudGltZSA9IF90aGlzLl9ydW50aW1lO1xyXG4gICAgICBjaGlsZElucHV0LnNjaGVtYSA9IF90aGlzLl9zY2hlbWE7XHJcbiAgICAgIGNoaWxkSW5wdXQucGFyZW50ID0gX3RoaXMudXJsO1xyXG5cclxuICAgICAgbGV0IG5ld0NoaWxkID0gbmV3IERhdGFPYmplY3RDaGlsZChjaGlsZElucHV0KTtcclxuXHJcbiAgICAgIGxldCBib2R5VmFsdWUgPSBuZXdDaGlsZC5tZXRhZGF0YTtcclxuICAgICAgYm9keVZhbHVlLmRhdGEgPSBpbml0aWFsRGF0YTtcclxuXHJcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgZGlyZWN0bHkgdG8gYSByZXNvdXJjZSBjaGlsZCBhZGRyZXNzOiBNZXNzYWdlQnVzXHJcbiAgICAgIGxldCByZXF1ZXN0TXNnID0ge1xyXG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBtc2dDaGlsZFBhdGgsXHJcbiAgICAgICAgYm9keTogeyByZXNvdXJjZTogY2hpbGRJbnB1dC51cmwsIHZhbHVlOiBib2R5VmFsdWUgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKGlkZW50aXR5KSAgICAgIHtcclxuICAgICAgICBuZXdDaGlsZC5pZGVudGl0eSA9IGlkZW50aXR5O1xyXG4gICAgICAgIHJlcXVlc3RNc2cuYm9keS5pZGVudGl0eSA9IGlkZW50aXR5O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvL1RPRE86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgIGlmICghX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uKSByZXF1ZXN0TXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb247XHJcblxyXG4gICAgICBsZXQgbXNnSWQgPSBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2cpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0LmFkZENoaWxkXSBhZGRlZCAnLCBuZXdDaGlsZCwgbXNnSWQsIGJvZHlWYWx1ZSk7XHJcblxyXG4gICAgICBuZXdDaGlsZC5vbkNoYW5nZSgoZXZlbnQpID0+IHtcclxuICAgICAgICBfdGhpcy5fb25DaGFuZ2UoZXZlbnQsIHsgcGF0aDogbXNnQ2hpbGRQYXRoLCBjaGlsZElkOiBjaGlsZElucHV0LnVybCB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIV90aGlzLl9jaGlsZHJlbk9iamVjdHMpIHsgX3RoaXMuX2NoaWxkcmVuT2JqZWN0cyA9IHt9OyB9XHJcblxyXG4gICAgICBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSW5wdXQudXJsXSA9IG5ld0NoaWxkO1xyXG5cclxuICAgICAgcmVzb2x2ZShuZXdDaGlsZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHVwIHRoZSBjYWxsYmFjayB0byBwcm9jZXNzIGNyZWF0ZSBhbmQgZGVsZXRlIG9mIGNoaWxkcmVucy5cclxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKGV2ZW50OiBNc2dFdmVudCl9IGNhbGxiYWNrXHJcbiAgICovXHJcbiAgb25BZGRDaGlsZChjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3QgLT4gYWRkQ2hpbGRcclxuICBfb25DaGlsZENyZWF0ZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgY2hpbGRJbnB1dCA9IGRlZXBDbG9uZShtc2cuYm9keS52YWx1ZSk7XHJcbiAgICBjaGlsZElucHV0LnBhcmVudE9iamVjdCA9IF90aGlzO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdC5fb25DaGlsZENyZWF0ZV0gcmVjZWl2ZWRCeSAnICsgX3RoaXMuX293bmVyICsgJyA6ICcsIG1zZyk7XHJcbiAgICBsZXQgbmV3Q2hpbGQgPSBuZXcgRGF0YU9iamVjdENoaWxkKGNoaWxkSW5wdXQpO1xyXG4gICAgbmV3Q2hpbGQuaWRlbnRpdHkgPSBtc2cuYm9keS5pZGVudGl0eTtcclxuXHJcbiAgICBpZiAoIV90aGlzLl9jaGlsZHJlbk9iamVjdHMpIHsgX3RoaXMuX2NoaWxkcmVuT2JqZWN0cyA9IHt9OyB9XHJcblxyXG4gICAgX3RoaXMuX2NoaWxkcmVuT2JqZWN0c1tjaGlsZElucHV0LnVybF0gPSBuZXdDaGlsZDtcclxuXHJcbiAgICAvL3RvZG86IHJlbW92ZSByZXNwb25zZSBiZWxvd1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vRkxPVy1PVVQ6IHdpbGwgZmxvdyB0byBEYXRhT2JqZWN0Q2hpbGQgLT4gX29uUmVzcG9uc2VcclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgYm9keTogeyBjb2RlOiAyMDAsIHNvdXJjZTogX3RoaXMuX293bmVyIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgIHR5cGU6IG1zZy50eXBlLFxyXG4gICAgICBmcm9tOiBtc2cuZnJvbSxcclxuICAgICAgdXJsOiBtc2cudG8sXHJcbiAgICAgIHZhbHVlOiBtc2cuYm9keS52YWx1ZS5kYXRhLFxyXG4gICAgICBjaGlsZElkOiBjaGlsZElucHV0LnVybCxcclxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0FERC1DSElMRFJFTi1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICBfdGhpcy5fb25BZGRDaGlsZHJlbkhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9zZW5kIGRlbHRhIG1lc3NhZ2VzIHRvIHN1YnNjcmlwdGlvbnNcclxuICBfb25DaGFuZ2UoZXZlbnQsIGNoaWxkSW5mbykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xyXG5cclxuICAgIF90aGlzLl92ZXJzaW9uKys7XHJcblxyXG4gICAgaWYgKF90aGlzLl9zdGF0dXMgPT09ICdsaXZlJykge1xyXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGRpcmVjdGx5IHRvIGEgcmVzb3VyY2UgY2hhbmdlcyBhZGRyZXNzOiBNZXNzYWdlQnVzXHJcbiAgICAgIGxldCBjaGFuZ2VNc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ3VwZGF0ZScsIGZyb206IF90aGlzLl91cmwsIHRvOiBfdGhpcy5fdXJsICsgJy9jaGFuZ2VzJyxcclxuICAgICAgICBib2R5OiB7IHZlcnNpb246IF90aGlzLl92ZXJzaW9uLCBzb3VyY2U6IF90aGlzLl9vd25lciwgYXR0cmlidXRlOiBldmVudC5maWVsZCwgbGFzdE1vZGlmaWVkOiBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdbRGF0YU9iamVjdCAtIF9vbkNoYW5nZV0gLSAnLCBldmVudCwgY2hpbGRJbmZvLCBjaGFuZ2VNc2cpO1xyXG5cclxuICAgICAgaWYgKGV2ZW50Lm9UeXBlID09PSBPYmplY3RUeXBlLk9CSkVDVCkge1xyXG4gICAgICAgIGlmIChldmVudC5jVHlwZSAhPT0gQ2hhbmdlVHlwZS5SRU1PVkUpIHtcclxuICAgICAgICAgIGNoYW5nZU1zZy5ib2R5LnZhbHVlID0gZXZlbnQuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hhbmdlTXNnLmJvZHkuYXR0cmlidXRlVHlwZSA9IGV2ZW50Lm9UeXBlO1xyXG4gICAgICAgIGNoYW5nZU1zZy5ib2R5LnZhbHVlID0gZXZlbnQuZGF0YTtcclxuICAgICAgICBpZiAoZXZlbnQuY1R5cGUgIT09IENoYW5nZVR5cGUuVVBEQVRFKSB7XHJcbiAgICAgICAgICBjaGFuZ2VNc2cuYm9keS5vcGVyYXRpb24gPSBldmVudC5jVHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vY2hpbGRJbmZvIG11c3QgaGF2ZSAocGF0aCwgY2hpbGRJZClcclxuICAgICAgaWYgKGNoaWxkSW5mbykge1xyXG4gICAgICAgIGNoYW5nZU1zZy50byA9IGNoaWxkSW5mby5wYXRoO1xyXG4gICAgICAgIGNoYW5nZU1zZy5ib2R5LnJlc291cmNlID0gY2hpbGRJbmZvLmNoaWxkSWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgaWYgKCFfdGhpcy5fbXV0dWFsQXV0aGVudGljYXRpb24pIGNoYW5nZU1zZy5ib2R5Lm11dHVhbEF1dGhlbnRpY2F0aW9uID0gX3RoaXMuX211dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG5cclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShjaGFuZ2VNc2cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBkZWx0YSBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdFJlcG9ydGVyIG9yIERhdGFPYmplY3RDaGlsZCB3aGVuIGNoYW5naW5nIGRhdGFcclxuICBfY2hhbmdlT2JqZWN0KHN5bmNPYmosIG1zZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvL1RPRE86IHVwZGF0ZSB2ZXJzaW9uID9cclxuICAgIC8vaG93IHRvIGhhbmRsZSBhbiBpbmNvcnJlY3QgdmVyc2lvbiA/IEV4YW1wbGU6IHJlY2VpdmUgYSB2ZXJzaW9uIDMgd2hlbiB0aGUgb2JzZXJ2ZXIgaXMgaW4gdmVyc2lvbiAxLCB3aGVyZSBpcyB0aGUgdmVyc2lvbiAyID9cclxuICAgIC8vd2lsbCB3ZSBuZWVkIHRvIGNvbmZpcm0gdGhlIHJlY2VwdGlvbiA/XHJcbiAgICBpZiAoX3RoaXMuX3ZlcnNpb24gKyAxIDw9IG1zZy5ib2R5LnZlcnNpb24pIHtcclxuICAgICAgX3RoaXMuX3ZlcnNpb24gPSBtc2cuYm9keS52ZXJzaW9uO1xyXG4gICAgICBsZXQgcGF0aCA9IG1zZy5ib2R5LmF0dHJpYnV0ZTtcclxuICAgICAgbGV0IHZhbHVlID0gZGVlcENsb25lKG1zZy5ib2R5LnZhbHVlKTtcclxuICAgICAgbGV0IGZpbmRSZXN1bHQgPSBzeW5jT2JqLmZpbmRCZWZvcmUocGF0aCk7XHJcblxyXG4gICAgICBpZiAobXNnLmJvZHkubGFzdE1vZGlmaWVkKSB7XHJcbiAgICAgICAgX3RoaXMuX21ldGFkYXRhLmxhc3RNb2RpZmllZCA9IG1zZy5ib2R5Lmxhc3RNb2RpZmllZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBfdGhpcy5fbWV0YWRhdGEubGFzdE1vZGlmaWVkID0gKG5ldyBEYXRlKS50b0lTT1N0cmluZygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAobXNnLmJvZHkuYXR0cmlidXRlVHlwZSA9PT0gT2JqZWN0VHlwZS5BUlJBWSkge1xyXG4gICAgICAgIGlmIChtc2cuYm9keS5vcGVyYXRpb24gPT09IENoYW5nZVR5cGUuQUREKSB7XHJcbiAgICAgICAgICBsZXQgYXJyID0gZmluZFJlc3VsdC5vYmo7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kUmVzdWx0Lmxhc3Q7XHJcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFyciwgW2luZGV4LCAwXS5jb25jYXQodmFsdWUpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1zZy5ib2R5Lm9wZXJhdGlvbiA9PT0gQ2hhbmdlVHlwZS5SRU1PVkUpIHtcclxuICAgICAgICAgIGxldCBhcnIgPSBmaW5kUmVzdWx0Lm9iajtcclxuICAgICAgICAgIGxldCBpbmRleCA9IGZpbmRSZXN1bHQubGFzdDtcclxuICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmluZFJlc3VsdC5vYmpbZmluZFJlc3VsdC5sYXN0XSA9IHZhbHVlOyAvLyBVUERBVEVcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG1zZy5ib2R5LnZhbHVlKSB7XHJcbiAgICAgICAgICBmaW5kUmVzdWx0Lm9ialtmaW5kUmVzdWx0Lmxhc3RdID0gdmFsdWU7IC8vIFVQREFURSBvciBBRERcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGVsZXRlIGZpbmRSZXN1bHQub2JqW2ZpbmRSZXN1bHQubGFzdF07IC8vIFJFTU9WRVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9UT0RPOiBob3cgdG8gaGFuZGxlIHVuc3luY2hyb25pemVkIHZlcnNpb25zP1xyXG4gICAgICBjb25zb2xlLmxvZygnVU5TWU5DSFJPTklaRUQgVkVSU0lPTjogKGRhdGEgPT4gJyArIF90aGlzLl92ZXJzaW9uICsgJywgbXNnID0+ICcgKyBtc2cuYm9keS52ZXJzaW9uICsgJyknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vRkxPVy1JTjogbWVzc2FnZSByZWNlaXZlZCBmcm9tIGEgcmVtb3RlIERhdGFPYmplY3RDaGlsZCB3aGVuIGNoYW5naW5nIGRhdGFcclxuICBfY2hhbmdlQ2hpbGRyZW4obXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgY29uc29sZS5sb2coJ0NoYW5nZSBjaGlsZHJlbjogJywgX3RoaXMuX293bmVyLCBtc2cpO1xyXG5cclxuICAgIGxldCBjaGlsZElkID0gbXNnLmJvZHkucmVzb3VyY2U7XHJcbiAgICBsZXQgY2hpbGRyZW4gPSBfdGhpcy5fY2hpbGRyZW5PYmplY3RzW2NoaWxkSWRdO1xyXG5cclxuICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICBfdGhpcy5fY2hhbmdlT2JqZWN0KGNoaWxkcmVuLl9zeW5jT2JqLCBtc2cpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ05vIGNoaWxkcmVuIGZvdW5kIGZvcjogJywgY2hpbGRJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YU9iamVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YU9iamVjdC5qcyIsImltcG9ydCAncHJveHktb2JzZXJ2ZSc7XHJcbmltcG9ydCB7cGFyc2VBdHRyaWJ1dGVzfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5jb25zdCBvYmplY3RUeXBlID0ge0FSUkFZOiAnW29iamVjdCBBcnJheV0nLCBPQkpFQ1Q6ICdbb2JqZWN0IE9iamVjdF0nIH07XHJcblxyXG4vKipcclxuICogQGFjY2VzcyBwcml2YXRlXHJcbiAqIE1haW4gY2xhc3MgdGhhdCBtYWludGFpbnMgYSBKU09OIG9iamVjdCwgYW5kIG9ic2VydmVzIGNoYW5nZXMgaW4gdGhpcyBvYmplY3QsIHJlY3Vyc2l2ZWx5LlxyXG4gKiBJbnRlcm5hbCBvYmplY3RzIGFuZCBhcnJheXMgYXJlIGFsc28gb2JzZXJ2ZWQuXHJcbiAqL1xyXG5jbGFzcyBTeW5jT2JqZWN0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5pdGlhbERhdGEpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX29ic2VydmVycyA9IFtdO1xyXG4gICAgX3RoaXMuX2ZpbHRlcnMgPSB7fTtcclxuXHJcbiAgICB0aGlzLl9kYXRhID0gaW5pdGlhbERhdGEgfHwge307XHJcblxyXG4gICAgdGhpcy5faW50ZXJuYWxPYnNlcnZlKHRoaXMuX2RhdGEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9kYXRhOyB9XHJcblxyXG4gIG9ic2VydmUoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29ic2VydmVycy5wdXNoKGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGZpbmQocGF0aCkge1xyXG4gICAgbGV0IGxpc3QgPSBwYXJzZUF0dHJpYnV0ZXMocGF0aCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRXaXRoU3BsaXQobGlzdCk7XHJcbiAgfVxyXG5cclxuICBmaW5kQmVmb3JlKHBhdGgpIHtcclxuICAgIGxldCByZXN1bHQgPSB7fTtcclxuICAgIGxldCBsaXN0ID0gcGFyc2VBdHRyaWJ1dGVzKHBhdGgpO1xyXG4gICAgcmVzdWx0Lmxhc3QgPSBsaXN0LnBvcCgpO1xyXG4gICAgcmVzdWx0Lm9iaiA9IHRoaXMuX2ZpbmRXaXRoU3BsaXQobGlzdCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIF9maW5kV2l0aFNwbGl0KGxpc3QpIHtcclxuICAgIGxldCBvYmogPSB0aGlzLl9kYXRhO1xyXG4gICAgbGlzdC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICBvYmogPSBvYmpbdmFsdWVdO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIF9pbnRlcm5hbE9ic2VydmUob2JqZWN0KSB7XHJcblxyXG4gICAgbGV0IGhhbmRsZXIgPSAoY2hhbmdlc2V0KSA9PiB7XHJcblxyXG4gICAgICBjaGFuZ2VzZXQuZXZlcnkoKGNoYW5nZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlcyhjaGFuZ2UpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX2RhdGEgPSBPYmplY3QuZGVlcE9ic2VydmUob2JqZWN0LCBoYW5kbGVyKTtcclxuXHJcbiAgfVxyXG5cclxuICBfZmlyZUV2ZW50KGV2ZW50KSB7XHJcbiAgICB0aGlzLl9vYnNlcnZlcnMuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2VzKGNoYW5nZSkge1xyXG5cclxuICAgIGxldCBvYmogPSBjaGFuZ2Uub2JqZWN0O1xyXG4gICAgbGV0IG9ialR5cGU7XHJcblxyXG4gICAgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XHJcbiAgICAgIG9ialR5cGUgPSBPYmplY3RUeXBlLk9CSkVDVDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xyXG4gICAgICBvYmpUeXBlID0gT2JqZWN0VHlwZS5BUlJBWTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmllbGRTdHJpbmcgPSBjaGFuZ2Uua2V5cGF0aDtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnRmllbGQ6JywgZmllbGRTdHJpbmcpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3R5cGU6JywgY2hhbmdlLnR5cGUpO1xyXG5cclxuICAgIC8vbGV0IG9sZFZhbHVlID0gY2hhbmdlLm9sZFZhbHVlO1xyXG4gICAgbGV0IG5ld1ZhbHVlID0gb2JqW2NoYW5nZS5uYW1lXTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmluZm8oY2hhbmdlLnR5cGUgKyAnIHwgRmllbGQ6ICcgKyBmaWVsZFN0cmluZyArICcgfCBOZXcgVmFsdWU6JywgSlNPTi5zdHJpbmdpZnkobmV3VmFsdWUpLCBmaWVsZFN0cmluZy5pbmNsdWRlcygnbGVuZ3RoJykpO1xyXG5cclxuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ3VwZGF0ZScgJiYgIWZpZWxkU3RyaW5nLmluY2x1ZGVzKCcubGVuZ3RoJykpIHtcclxuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcclxuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5VUERBVEUsXHJcbiAgICAgICAgb1R5cGU6IG9ialR5cGUsXHJcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxyXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2FkZCcpIHtcclxuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcclxuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5BREQsXHJcbiAgICAgICAgb1R5cGU6IG9ialR5cGUsXHJcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nLFxyXG4gICAgICAgIGRhdGE6IG5ld1ZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ2RlbGV0ZScpIHtcclxuICAgICAgdGhpcy5fZmlyZUV2ZW50KHtcclxuICAgICAgICBjVHlwZTogQ2hhbmdlVHlwZS5SRU1PVkUsXHJcbiAgICAgICAgb1R5cGU6IG9ialR5cGUsXHJcbiAgICAgICAgZmllbGQ6IGZpZWxkU3RyaW5nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgQ2hhbmdlVHlwZSA9IHtVUERBVEU6ICd1cGRhdGUnLCBBREQ6ICdhZGQnLCBSRU1PVkU6ICdyZW1vdmUnfTtcclxuZXhwb3J0IGxldCBPYmplY3RUeXBlID0ge09CSkVDVDogJ29iamVjdCcsIEFSUkFZOiAnYXJyYXknfTtcclxuZXhwb3J0IGRlZmF1bHQgU3luY09iamVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvUHJveHlPYmplY3QuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByb3RvdHlwZU9mKTtcblxudmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX2dldE93blByb3BlcnR5RGVzY3JpcHRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiBnZXQob2JqZWN0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICB2YXIgZGVzYyA9ICgwLCBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yMi5kZWZhdWx0KShvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuaW1wb3J0IHsgZGVlcENsb25lLCBkaXZpZGVVUkwgfSBmcm9tICcuLi91dGlscy91dGlscyc7XHJcblxyXG5pbXBvcnQgRGF0YU9iamVjdFJlcG9ydGVyIGZyb20gJy4vRGF0YU9iamVjdFJlcG9ydGVyJztcclxuaW1wb3J0IERhdGFPYmplY3RPYnNlcnZlciBmcm9tICcuL0RhdGFPYmplY3RPYnNlcnZlcic7XHJcbmltcG9ydCBEYXRhUHJvdmlzaW9uYWwgZnJvbSAnLi9EYXRhUHJvdmlzaW9uYWwnO1xyXG5cclxuLyoqXHJcbiogVGhlIG1haW4gY2xhc3MgZm9yIHRoZSBzeW5jaGVyIHBhY2thZ2UuXHJcbiogVGhlIFN5bmNoZXIgaXMgYSBzaW5nbGV0b24gY2xhc3MgcGVyIEh5cGVydHkvVVJMIGFuZCBpdCBpcyB0aGUgb3duZXIgb2YgYWxsIGNyZWF0ZWQgRGF0YSBTeW5jIE9iamVjdHMgYWNjb3JkaW5nIHRvIHRoZSBSZXBvcnRlciAtIE9ic2VydmVyIHBhdHRlcm4uXHJcbiogTWFpbiBmdW5jdGlvbmFsaXR5IGlzIHRvIGNyZWF0ZSByZXBvcnRlcnMgYW5kIHRvIHN1YnNjcmliZSB0byBleGlzdGluZyBvbmVzLlxyXG4qL1xyXG5jbGFzcyBTeW5jaGVyIHtcclxuICAvKiBwcml2YXRlXHJcbiAgX293bmVyOiBVUkxcclxuICBfYnVzOiBNaW5pQnVzXHJcblxyXG4gIF9zdWJVUkw6IFVSTFxyXG5cclxuICBfcmVwb3J0ZXJzOiA8dXJsOiBEYXRhT2JqZWN0UmVwb3J0ZXI+XHJcbiAgX29ic2VydmVyczogPHVybDogRGF0YU9iamVjdE9ic2VydmVyPlxyXG4gIF9wcm92aXNpb25hbHM6IDx1cmw6IERhdGFQcm92aXNpb25hbD5cclxuXHJcbiAgLS0tLWV2ZW50IGhhbmRsZXJzLS0tLVxyXG4gIF9vbk5vdGlmaWNhdGlvbkhhbmRsZXI6IChldmVudCkgPT4gdm9pZFxyXG4gIF9vblJlc3VtZTogKGV2ZW50KSA9PiB2b2lkXHJcbiAgKi9cclxuXHJcbiAgLyoqXHJcbiAgKiBDb25zdHJ1Y3RvciB0aGF0IHNob3VsZCBiZSB1c2VkIGJ5IHRoZSBIeXBlcnR5IG93bmVyXHJcbiAgKiBAcGFyYW0ge0h5cGVydHlVUkx9IG93bmVyIC0gSHlwZXJ0eSBVUkwgb3duZXIuIEFuIFVSTCBhbGxvY2F0ZWQgYnkgdGhlIHJ1bnRpbWUgdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoZSBIeXBlcnR5LlxyXG4gICogQHBhcmFtIHtNaW5pQnVzfSBidXMgLSBBbiBpbnN0YW5jZSBvZiB0aGUgTWluaUJ1cyBwcm92aWRlZCBpbiB0aGUgc2FuZGJveC4gV2hlbiBhbiBvYmplY3QgKFJlcG9ydGVyIG9yIE9ic2VydmVkKSBpcyBjcmVhdGVkLCB0aGUgU3luY2hlck1hbmFnZXIgd2lsbCBhZGQgYSBsaXN0ZW5lciBpbiB0aGUgTWluaUJ1cyB0byByZWNlaXZlL3NlbmQgTWVzc2FnZXMgb2YgdGhhdCBvYmplY3QuXHJcbiAgKiBAcGFyYW0ge0pTT059IGNvbmZpZyAtIENvbmZpZ3VyYXRpb24gZGF0YS4gVGhlIG9ubHkgcmVxdWlyZWQgZmllbGQgZm9yIG5vdyBpcyB0aGUgcnVudGltZVVSTC5cclxuICAqL1xyXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBidXMsIGNvbmZpZykge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBfdGhpcy5fb3duZXIgPSBvd25lcjtcclxuICAgIF90aGlzLl9idXMgPSBidXM7XHJcblxyXG4gICAgX3RoaXMuX3N1YlVSTCA9IGNvbmZpZy5ydW50aW1lVVJMICsgJy9zbSc7XHJcbiAgICBfdGhpcy5fcnVudGltZVVybCA9IGNvbmZpZy5ydW50aW1lVVJMO1xyXG5cclxuICAgIF90aGlzLl9yZXBvcnRlcnMgPSB7fTtcclxuICAgIF90aGlzLl9vYnNlcnZlcnMgPSB7fTtcclxuICAgIF90aGlzLl9wcm92aXNpb25hbHMgPSB7fTtcclxuXHJcbiAgICBidXMuYWRkTGlzdGVuZXIob3duZXIsIChtc2cpID0+IHtcclxuICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxyXG4gICAgICBpZiAobXNnLmZyb20gIT09IG93bmVyKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdbU3luY2hlcl0gU3luY2hlci1SQ1Y6ICcsIG1zZywgX3RoaXMpO1xyXG4gICAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ2ZvcndhcmQnOiBfdGhpcy5fb25Gb3J3YXJkKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnY3JlYXRlJzogX3RoaXMuX29uUmVtb3RlQ3JlYXRlKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZGVsZXRlJzogX3RoaXMuX29uUmVtb3RlRGVsZXRlKG1zZyk7IGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnZXhlY3V0ZSc6IF90aGlzLl9vbkV4ZWN1dGUobXNnKTsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogVGhlIG93bmVyIG9mIHRoZSBTeW5jaGVyIGFuZCBhbGwgY3JlYXRlZCByZXBvcnRlcnMuXHJcbiAgKiBAdHlwZSB7SHlwZXJ0eVVSTH1cclxuICAqL1xyXG4gIGdldCBvd25lcigpIHsgcmV0dXJuIHRoaXMuX293bmVyOyB9XHJcblxyXG4gIC8qKlxyXG4gICogQWxsIG93bmVkIHJlcG9ydGVycywgdGhlIG9uZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgYSBjcmVhdGVcclxuICAqIEB0eXBlIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fVxyXG4gICovXHJcbiAgZ2V0IHJlcG9ydGVycygpIHsgcmV0dXJuIHRoaXMuX3JlcG9ydGVyczsgfVxyXG5cclxuICAvKipcclxuICAqIEFsbCBvd25lZCBvYnNlcnZlcnMsIHRoZSBvbmVzIHRoYXQgd2VyZSBjcmVhdGVkIGJ5IGEgbG9jYWwgc3Vic2NyaXB0aW9uXHJcbiAgKiBAdHlwZSB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn1cclxuICAqL1xyXG4gIGdldCBvYnNlcnZlcnMoKSB7IHJldHVybiB0aGlzLl9vYnNlcnZlcnM7IH1cclxuXHJcbiAgLyoqXHJcbiAgKiBSZXF1ZXN0IGEgRGF0YU9iamVjdFJlcG9ydGVyIGNyZWF0aW9uLiBUaGUgVVJMIHdpbGwgYmUgYmUgcmVxdWVzdGVkIGJ5IHRoZSBhbGxvY2F0aW9uIG1lY2hhbmlzbS5cclxuICAqIEBwYXJhbSAge1NjaGVtYVVSTH0gc2NoZW1hIC0gSHlwZXJ0eSBDYXRhbG9ndWUgVVJMIGFkZHJlc3MgdGhhdCBjYW4gYmUgdXNlZCB0byByZXRyaWV2ZSB0aGUgSlNPTi1TY2hlbWEgZGVzY3JpYmluZyB0aGUgRGF0YSBPYmplY3Qgc2NoZW1hXHJcbiAgKiBAcGFyYW0gIHtIeXBlcnR5VVJMW119IG9ic2VydmVycyAtIExpc3Qgb2YgaHlwZXJ0aWVzIHRoYXQgYXJlIHByZS1hdXRob3JpemVkIGZvciBzdWJzY3JpcHRpb25cclxuICAqIEBwYXJhbSAge0pTT059IGluaXRpYWxEYXRhIC0gSW5pdGlhbCBkYXRhIG9mIHRoZSByZXBvcnRlclxyXG4gICogQHBhcmFtICB7Ym9vbGVhbn0gc3RvcmUgLSAoT3B0aW9uYWwpIGlmIHRydWUsIG9iamVjdCB3aWxsIGJlIHN0b3JlZCBieSB0aGUgcnVudGltZVxyXG4gICogQHBhcmFtICB7Ym9vbGVhbn0gcDJwIC0gKE9wdGlvbmFsKSBpZiB0cnVlLCBkYXRhIHN5bmNocm9uaXNhdGlvbiBzdHJlYW0gd2lsbCB1c2UgcDJwIGNvbm5lY3Rpb24gYXMgbXVjaCBhcyBwb3NzaWJsZVxyXG4gICogQHBhcmFtICB7c3RyaW5nfSBuYW1lIC0gKE9wdGlvbmFsKSB0aGUgbmFtZSBvZiB0aGUgZGF0YW9iamVjdFxyXG4gICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxyXG4gICogQHBhcmFtICB7U3luY01ldGFkYXRhfSBpbnB1dCAtIChvcHRpb25hbCkgYWxsIG1ldGFkYXRhIHJlcXVpcmVkIHRvIHN1bmMgdGhlIERhdGEgT2JqZWN0LlxyXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0UmVwb3J0ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBSZXBvcnRlci4gVGhlIHJlcG9ydGVyIGNhbiBiZSBhY2NlcHRlZCBvciByZWplY3RlZCBieSB0aGUgUEVQXHJcbiAgKi9cclxuICBjcmVhdGUoc2NoZW1hLCBvYnNlcnZlcnMsIGluaXRpYWxEYXRhLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSwgbmFtZSA9ICdubyBuYW1lJywgaWRlbnRpdHksIGlucHV0KSB7XHJcblxyXG4gICAgaWYgKCFzY2hlbWEpIHRocm93IEVycm9yKCdbU3luY2hlciAtIENyZWF0ZV0gLSBZb3UgbmVlZCBzcGVjaWZ5IHRoZSBkYXRhIG9iamVjdCBzY2hlbWEnKTtcclxuICAgIGlmICghb2JzZXJ2ZXJzKSB0aHJvdyBFcnJvcignW1N5bmNoZXIgLSBDcmVhdGVdIC1UaGUgb2JzZXJ2ZXJzIHNob3VsZCBiZSBkZWZpbmVkJyk7XHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGxldCBjcmVhdGVJbnB1dCAgPSBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCk7XHJcblxyXG4gICAgY3JlYXRlSW5wdXQucDJwID0gcDJwO1xyXG4gICAgY3JlYXRlSW5wdXQuc3RvcmUgPSBzdG9yZTtcclxuICAgIGNyZWF0ZUlucHV0LnNjaGVtYSA9IHNjaGVtYTtcclxuICAgIGNyZWF0ZUlucHV0LmF1dGhvcmlzZSA9IG9ic2VydmVycztcclxuICAgIChpbml0aWFsRGF0YSkgPyBjcmVhdGVJbnB1dC5kYXRhID0gZGVlcENsb25lKGluaXRpYWxEYXRhKSA6IGNyZWF0ZUlucHV0LmRhdGEgPSB7fTtcclxuICAgIGNyZWF0ZUlucHV0Lm5hbWUgPSBuYW1lLmxlbmd0aCA9PT0gMCA/ICdubyBuYW1lJyA6IG5hbWU7XHJcbiAgICBjcmVhdGVJbnB1dC5yZXBvcnRlciA9IF90aGlzLl9vd25lcjtcclxuICAgIGNyZWF0ZUlucHV0LnJlc3VtZSA9IGZhbHNlO1xyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgIGNyZWF0ZUlucHV0Lm11dHVhbCA9IGlucHV0Lm11dHVhbCA/IGlucHV0Lm11dHVhbCA6IHRydWU7XHJcbiAgICAgIGNyZWF0ZUlucHV0Lm5hbWUgPSBpbnB1dC5uYW1lID8gaW5wdXQubmFtZSA6IGNyZWF0ZUlucHV0Lm5hbWU7XHJcbiAgICB9IGVsc2UgeyBjcmVhdGVJbnB1dC5tdXR1YWwgPSB0cnVlOyB9XHJcblxyXG4gICAgaWYgKGlkZW50aXR5KSAgICAgIHsgY3JlYXRlSW5wdXQuaWRlbnRpdHkgPSBpZGVudGl0eTsgfVxyXG5cclxuICAgIC8vT2JqZWN0LmFzc2lnbihjcmVhdGVJbnB1dCwge3Jlc3VtZTogZmFsc2V9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gY3JlYXRlIFJlcG9ydGVyIC0gY3JlYXRlSW5wdXQ6ICcsIGNyZWF0ZUlucHV0KTtcclxuXHJcbiAgICByZXR1cm4gX3RoaXMuX2NyZWF0ZShjcmVhdGVJbnB1dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJlcXVlc3QgYSBEYXRhT2JqZWN0UmVwb3J0ZXIgY3JlYXRpb24uIFRoZSBVUkwgd2lsbCBiZSBiZSByZXF1ZXN0ZWQgYnkgdGhlIGFsbG9jYXRpb24gbWVjaGFuaXNtLlxyXG4gICogQHBhcmFtICB7T2JqZWN0fSBjcml0ZXJpYSAtIChvcHRpb25hbCkgaWRlbnRpdHkgZGF0YSB0byBiZSBhZGRlZCB0byBpZGVudGl0eSB0aGUgdXNlciByZXBvcnRlci4gVG8gYmUgdXNlZCBmb3IgbGVnYWN5IGlkZW50aXRpZXMuXHJcbiAgKiBAcmV0dXJuIHtQcm9taXNlPERhdGFPYmplY3RSZXBvcnRlcj5bXX0gUmV0dXJuIGEgcHJvbWlzZSB3aXRoIGEgbGlzdCBvZiBEYXRhT2JqZWN0UmVwb3J0ZXIgdG8gYmUgcmVzdW1lZDtcclxuICAqL1xyXG4gIHJlc3VtZVJlcG9ydGVycyhjcml0ZXJpYSkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIGNvbnNvbGUubG9nKCdbc3luY2hlciAtIGNyZWF0ZV0gLSByZXN1bWUgUmVwb3J0ZXIgLSBjcml0ZXJpYTogJywgY3JpdGVyaWEpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oY3JpdGVyaWEsIHtyZXN1bWU6IHRydWV9KTtcclxuXHJcbiAgICByZXR1cm4gX3RoaXMuX3Jlc3VtZUNyZWF0ZShjcml0ZXJpYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJlcXVlc3QgYSBzdWJzY3JpcHRpb24gdG8gYW4gZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0LlxyXG4gICogQHBhcmFtIHtTY2hlbWFVUkx9IHNjaGVtYSAtIEh5cGVydHkgQ2F0YWxvZ3VlIFVSTCBhZGRyZXNzIHRoYXQgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUgdGhlIEpTT04tU2NoZW1hIGRlc2NyaWJpbmcgdGhlIERhdGEgT2JqZWN0IHNjaGVtYVxyXG4gICogQHBhcmFtIHtPYmplY3RVUkx9IG9ialVSTCAtIEFkZHJlc3Mgb2YgdGhlIGV4aXN0ZW50IHJlcG9ydGVyIG9iamVjdCB0byBiZSBvYnNlcnZlZFxyXG4gICogQHBhcmFtIHtCb29sZWFufSBbc3RvcmU9ZmFsc2VdIC0gU2F2ZSB0aGUgc3Vic2NyaXB0aW9uIG9uIHRoZSBTeW5jaGVyIE1hbmFnZXIgZm9yIGZ1cnRoZXIgcmVzdW1lIChEZWZhdWx0IGlzIGZhbHNlKVxyXG4gICogQHBhcmFtIHtCb29sZWFufSBbcDJwPWZhbHNlXSAtIEluZm8gYWJvdXQgaWYgc2hvdWxkIHVzZSBwMnAgY29ubmVjdGlvbiAoRGVmYXVsdCBpcyBmYWxzZSlcclxuICAqIEBwYXJhbSB7Qm9vbGVhbn0gW211dHVhbD10cnVlXSAtIEluZm8gYWJvdXQgaWYgbWVzc2FnZXMgb2YgdGhpcyBvYmplY3Qgc2hvdWxkIGJlIGVuY3J5cHRlZCAoRGVmYXVsdCBpcyB0cnVlKVxyXG4gICogQHBhcmFtICB7TWVzc2FnZUJvZHlJZGVudGl0eX0gaWRlbnRpdHkgLSAob3B0aW9uYWwpIGlkZW50aXR5IGRhdGEgdG8gYmUgYWRkZWQgdG8gaWRlbnRpdHkgdGhlIHVzZXIgcmVwb3J0ZXIuIFRvIGJlIHVzZWQgZm9yIGxlZ2FjeSBpZGVudGl0aWVzLlxyXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0T2JzZXJ2ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBvYnNlcnZlci4gSXQncyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcG9ydGVyLlxyXG4gICovXHJcbiAgc3Vic2NyaWJlKHNjaGVtYSwgb2JqVVJMLCBzdG9yZSA9IGZhbHNlLCBwMnAgPSBmYWxzZSwgbXV0dWFsID0gdHJ1ZSwgaWRlbnRpdHkpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgY3JpdGVyaWEgPSB7fTtcclxuXHJcbiAgICBjcml0ZXJpYS5wMnAgPSBwMnA7XHJcbiAgICBjcml0ZXJpYS5zdG9yZSA9IHN0b3JlO1xyXG4gICAgY3JpdGVyaWEuc2NoZW1hID0gc2NoZW1hO1xyXG5cclxuICAgIGNyaXRlcmlhLnJlc291cmNlID0gb2JqVVJMO1xyXG4gICAgaWYgKGlkZW50aXR5KSAgICAgIHsgY3JpdGVyaWEuaWRlbnRpdHkgPSBpZGVudGl0eTsgfVxyXG5cclxuICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgIGNyaXRlcmlhLm11dHVhbCA9IG11dHVhbDtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBzdWJzY3JpYmVdIC0gc3Vic2NyaWJlIGNyaXRlcmlhOiAnLCBjcml0ZXJpYSk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbihjcml0ZXJpYSwge3Jlc3VtZTogZmFsc2V9KTtcclxuXHJcbiAgICByZXR1cm4gX3RoaXMuX3N1YnNjcmliZShjcml0ZXJpYSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIFJlcXVlc3QgYSBzdWJzY3JpcHRpb24gdG8gYW4gZXhpc3RlbnQgcmVwb3J0ZXIgb2JqZWN0LlxyXG4gICogQHBhcmFtIHtjcml0ZXJpYX0gY3JpdGVyaWEgLSBJbmZvcm1hdGlvbiB0byBkaXNjb3ZlcnkgdGhlIG9ic2VydmVyIG9iamVjdFxyXG4gICogQHJldHVybiB7UHJvbWlzZTxEYXRhT2JqZWN0T2JzZXJ2ZXI+fSBSZXR1cm4gUHJvbWlzZSB0byBhIG5ldyBvYnNlcnZlci4gSXQncyBhc3NvY2lhdGVkIHdpdGggdGhlIHJlcG9ydGVyLlxyXG4gICovXHJcbiAgcmVzdW1lT2JzZXJ2ZXJzKGNyaXRlcmlhKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IF9jcml0ZXJpYSA9IGNyaXRlcmlhIHx8IHt9O1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24oX2NyaXRlcmlhLCB7cmVzdW1lOiB0cnVlfSk7XHJcblxyXG4gICAgcmV0dXJuIF90aGlzLl9yZXN1bWVTdWJzY3JpYmUoX2NyaXRlcmlhKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogUmVxdWVzdCBhIHJlYWQgYWN0aW9uIG9uIHRoZSByZXBvcnRlciBvYmplY3RcclxuICAqIEBwYXJhbSB7T2JqZWN0VVJMfSBvYmpVUkwgLSBVUkwgb2YgdGhlIHJlcG9ydGVyIG9iamVjdCB0byBiZSByZWFkXHJcbiAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59IFJldHVybiBQcm9taXNlIHRvIGxhc3QgYXZhaWxhYmxlIGRhdGEgb2YgdGhlIHJlcG9ydGVyXHJcbiAgKi9cclxuICByZWFkKG9ialVSTCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IGRpcmVjdGx5IHRvIHJlcG9ydGVyIG9iamVjdCAobWF5YmUgdGhlcmUgaXMgbm8gbGlzdGVuZXIgYXZhaWxhYmxlLCBzbyBpdCB3aWxsIGJlIHJlc29sdmVkIHdpdGggTWVzc2FnZUJ1cyAtPiByZXNvbHZlKVxyXG4gICAgLy93aWxsIHJlYWNoIHRoZSByZW1vdGUgb2JqZWN0IGluIERhdGFPYmplY3RSZXBvcnRlciAtPiBfb25SZWFkXHJcbiAgICBsZXQgcmVhZE1zZyA9IHtcclxuICAgICAgdHlwZTogJ3JlYWQnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBvYmpVUkxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZWFkTXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygncmVhZC1yZXNwb25zZTogJywgcmVwbHkpO1xyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXBseS5ib2R5LnZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBjcmVhdGUgYW5kIGRlbGV0ZSBldmVudHMgb2YgcmVtb3ZlIFJlcG9ydGVyIG9iamVjdHMuXHJcbiAgKiBUaGlzIGlzIHJlbGVhdGVkIHRvIHRoZSBtZXNzYWdlbnMgc2VudCBieSBjcmVhdGUgdG8gdGhlIG9ic2VydmVycyBIeXBlcnR5IGFycmF5LlxyXG4gICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICovXHJcbiAgb25Ob3RpZmljYXRpb24oY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uTm90aWZpY2F0aW9uSGFuZGxlciA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyBjbG9zZSBldmVudHMgZnJvbSB0aGUgcnVudGltZS5cclxuICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcclxuICAqL1xyXG4gIG9uQ2xvc2UoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uQ2xvc2UgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIF9jcmVhdGUoaW5wdXQpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHJcbiAgICAgIGxldCByZXBvcnRlcklucHV0ICA9IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KTtcclxuXHJcbiAgICAgIGxldCByZXN1bWUgPSBpbnB1dC5yZXN1bWU7XHJcblxyXG4gICAgICByZXBvcnRlcklucHV0LmNyZWF0ZWQgPSAobmV3IERhdGUpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICAgIHJlcG9ydGVySW5wdXQucnVudGltZSA9IF90aGlzLl9ydW50aW1lVXJsO1xyXG5cclxuICAgICAgbGV0IHJlcXVlc3RWYWx1ZSA9IGRlZXBDbG9uZShyZXBvcnRlcklucHV0KTtcclxuXHJcbiAgICAgIGRlbGV0ZSByZXF1ZXN0VmFsdWUucDJwO1xyXG4gICAgICBkZWxldGUgcmVxdWVzdFZhbHVlLnN0b3JlO1xyXG4gICAgICBkZWxldGUgcmVxdWVzdFZhbHVlLm9ic2VydmVycztcclxuICAgICAgZGVsZXRlIHJlcXVlc3RWYWx1ZS5pZGVudGl0eTtcclxuXHJcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uQ3JlYXRlXHJcbiAgICAgIGxldCByZXF1ZXN0TXNnID0ge1xyXG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxyXG4gICAgICAgIGJvZHk6IHsgcmVzdW1lOiByZXN1bWUsIHZhbHVlOiByZXF1ZXN0VmFsdWUgIH1cclxuICAgICAgfTtcclxuXHJcblxyXG4gICAgICByZXF1ZXN0TXNnLmJvZHkuc2NoZW1hID0gcmVwb3J0ZXJJbnB1dC5zY2hlbWE7XHJcblxyXG4gICAgICBpZiAocmVwb3J0ZXJJbnB1dC5wMnApIHJlcXVlc3RNc2cuYm9keS5wMnAgPSByZXBvcnRlcklucHV0LnAycDtcclxuICAgICAgaWYgKHJlcG9ydGVySW5wdXQuc3RvcmUpIHJlcXVlc3RNc2cuYm9keS5zdG9yZSA9IHJlcG9ydGVySW5wdXQuc3RvcmU7XHJcbiAgICAgIGlmIChyZXBvcnRlcklucHV0LmlkZW50aXR5KSByZXF1ZXN0TXNnLmJvZHkuaWRlbnRpdHkgPSByZXBvcnRlcklucHV0LmlkZW50aXR5O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9jcmVhdGVdOiAnLCByZXBvcnRlcklucHV0LCByZXF1ZXN0TXNnKTtcclxuXHJcbiAgICAgIC8vcmVxdWVzdCBjcmVhdGUgdG8gdGhlIGFsbG9jYXRpb24gc3lzdGVtLiBDYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIFBvbGljeUVuZ2luZS5cclxuICAgICAgX3RoaXMuX2J1cy5wb3N0TWVzc2FnZShyZXF1ZXN0TXNnLCAocmVwbHkpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIgLSBjcmVhdGVdIC0gY3JlYXRlLXJlc3BvbnNlOiAnLCByZXBseSk7XHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIGFjY2VwdGVkXHJcbiAgICAgICAgICByZXBvcnRlcklucHV0LnVybCA9IHJlcGx5LmJvZHkucmVzb3VyY2U7XHJcblxyXG4gICAgICAgICAgcmVwb3J0ZXJJbnB1dC5zdGF0dXMgPSAnbGl2ZSc7Ly8gcGNoOiBkbyB3ZSBuZWQgdGhpcz9cclxuICAgICAgICAgIHJlcG9ydGVySW5wdXQuc3luY2hlciA9IF90aGlzO1xyXG4gICAgICAgICAgcmVwb3J0ZXJJbnB1dC5jaGlsZHJlbnMgPSByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzO1xyXG5cclxuICAgICAgICAgIGxldCBuZXdPYmogPSBfdGhpcy5fcmVwb3J0ZXJzW3JlcG9ydGVySW5wdXQudXJsXTtcclxuICAgICAgICAgIGlmICghbmV3T2JqKSB7XHJcbiAgICAgICAgICAgIG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0UmVwb3J0ZXIocmVwb3J0ZXJJbnB1dCk7XHJcbiAgICAgICAgICAgIF90aGlzLl9yZXBvcnRlcnNbcmVwb3J0ZXJJbnB1dC51cmxdID0gbmV3T2JqO1xyXG4gICAgICAgICAgICBuZXdPYmouaW52aXRlT2JzZXJ2ZXJzKGlucHV0LmF1dGhvcmlzZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmVzb2x2ZShuZXdPYmopO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9yZXBvcnRlciBjcmVhdGlvbiByZWplY3RlZFxyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIF9yZXN1bWVDcmVhdGUoY3JpdGVyaWEpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgbGV0IHJlc3VtZSA9IGNyaXRlcmlhLnJlc3VtZTtcclxuXHJcbiAgICAgIC8vRkxPVy1PVVQ6IHRoaXMgbWVzc2FnZSB3aWxsIGJlIHNlbnQgdG8gdGhlIHJ1bnRpbWUgaW5zdGFuY2Ugb2YgU3luY2hlck1hbmFnZXIgLT4gX29uQ3JlYXRlXHJcbiAgICAgIGxldCByZXF1ZXN0TXNnID0ge1xyXG4gICAgICAgIHR5cGU6ICdjcmVhdGUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxyXG4gICAgICAgIGJvZHk6IHsgcmVzdW1lOiByZXN1bWUgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyIC0gY3JlYXRlXTogJywgY3JpdGVyaWEsIHJlcXVlc3RNc2cpO1xyXG5cclxuICAgICAgaWYgKGNyaXRlcmlhKSB7XHJcbiAgICAgICAgcmVxdWVzdE1zZy5ib2R5LnZhbHVlID0gY3JpdGVyaWE7XHJcbiAgICAgICAgcmVxdWVzdE1zZy5ib2R5LnZhbHVlLnJlcG9ydGVyID0gX3RoaXMuX293bmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY3JpdGVyaWEucDJwKSByZXF1ZXN0TXNnLmJvZHkucDJwID0gY3JpdGVyaWEucDJwO1xyXG4gICAgICBpZiAoY3JpdGVyaWEuc3RvcmUpIHJlcXVlc3RNc2cuYm9keS5zdG9yZSA9IGNyaXRlcmlhLnN0b3JlO1xyXG4gICAgICBpZiAoY3JpdGVyaWEub2JzZXJ2ZXJzKSByZXF1ZXN0TXNnLmJvZHkuYXV0aG9yaXNlID0gY3JpdGVyaWEub2JzZXJ2ZXJzO1xyXG4gICAgICBpZiAoY3JpdGVyaWEuaWRlbnRpdHkpIHJlcXVlc3RNc2cuYm9keS5pZGVudGl0eSA9IGNyaXRlcmlhLmlkZW50aXR5O1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVDcmVhdGVdIC0gcmVzdW1lIG1lc3NhZ2U6ICcsIHJlcXVlc3RNc2cpO1xyXG5cclxuICAgICAgLy9yZXF1ZXN0IGNyZWF0ZSB0byB0aGUgYWxsb2NhdGlvbiBzeXN0ZW0uIENhbiBiZSByZWplY3RlZCBieSB0aGUgUG9saWN5RW5naW5lLlxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcXVlc3RNc2csIChyZXBseSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlci5fcmVzdW1lQ3JlYXRlXSAtIGNyZWF0ZS1yZXN1bWVkLXJlc3BvbnNlOiAnLCByZXBseSk7XHJcbiAgICAgICAgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgbGV0IGxpc3RPZlJlcG9ydGVycyA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gbGlzdE9mUmVwb3J0ZXJzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YU9iamVjdCA9IGxpc3RPZlJlcG9ydGVyc1tpbmRleF07XHJcblxyXG4gICAgICAgICAgICAvL3JlcG9ydGVyIGNyZWF0aW9uIGFjY2VwdGVkXHJcblxyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LmRhdGEgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5kYXRhKSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cykgeyBkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyA9IGRlZXBDbG9uZShkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyk7IH1cclxuXHJcbiAgICAgICAgICAgIGRhdGFPYmplY3QubXV0dWFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRhdGFPYmplY3QucmVzdW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGF0YU9iamVjdC5zdGF0dXMgPSAnbGl2ZSc7Ly8gcGNoOiBkbyB3ZSBuZWQgdGhpcz9cclxuICAgICAgICAgICAgZGF0YU9iamVjdC5zeW5jaGVyID0gX3RoaXM7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXIuX3Jlc3VtZUNyZWF0ZV0gLSBjcmVhdGUtcmVzdW1lZC1kYXRhT2JqZWN0UmVwb3J0ZXInLCBkYXRhT2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdPYmogPSBuZXcgRGF0YU9iamVjdFJlcG9ydGVyKGRhdGFPYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFPYmplY3QuY2hpbGRyZW5PYmplY3RzKSB7IG5ld09iai5yZXN1bWVDaGlsZHJlbnMoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XHJcbiAgICAgICAgICAgIF90aGlzLl9yZXBvcnRlcnNbZGF0YU9iamVjdC51cmxdID0gbmV3T2JqO1xyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXNvbHZlKF90aGlzLl9yZXBvcnRlcnMpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuX29uUmVwb3J0ZXJzUmVzdW1lKSB0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSh0aGlzLl9yZXBvcnRlcnMpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gNDA0KSB7XHJcbiAgICAgICAgICByZXNvbHZlKHt9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy9yZXBvcnRlciBjcmVhdGlvbiByZWplY3RlZFxyXG4gICAgICAgICAgcmVqZWN0KHJlcGx5LmJvZHkuZGVzYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3N1YnNjcmliZShpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cclxuICAgICAgLy9GTE9XLU9VVDogdGhpcyBtZXNzYWdlIHdpbGwgYmUgc2VudCB0byB0aGUgcnVudGltZSBpbnN0YW5jZSBvZiBTeW5jaGVyTWFuYWdlciAtPiBfb25Mb2NhbFN1YnNjcmliZVxyXG4gICAgICBsZXQgc3Vic2NyaWJlTXNnID0ge1xyXG4gICAgICAgIHR5cGU6ICdzdWJzY3JpYmUnLCBmcm9tOiBfdGhpcy5fb3duZXIsIHRvOiBfdGhpcy5fc3ViVVJMLFxyXG4gICAgICAgIGJvZHk6IHt9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBIeXBlcnR5IHJlcXVlc3QgdG8gYmUgYW4gT2JzZXJ2ZXJcclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjaHlwZXJ0eS1yZXF1ZXN0LXRvLWJlLWFuLW9ic2VydmVyXHJcblxyXG4gICAgICAvLyBSZXN1bWUgU3Vic2NyaXB0aW9ucyBmb3IgdGhlIHNhbWUgSHlwZXJ0eSBVUkxcclxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlVEhJTkstcHJvamVjdC9zcGVjcy9ibG9iL21hc3Rlci9tZXNzYWdlcy9kYXRhLXN5bmMtbWVzc2FnZXMubWQjcmVzdW1lLXN1YnNjcmlwdGlvbnMtZm9yLXRoZS1zYW1lLWh5cGVydHktdXJsXHJcblxyXG4gICAgICAvLyBSZXN1bWUgU3Vic2NyaXB0aW9ucyBmb3IgYSBjZXJ0YWluIHVzZXIgYW5kIGRhdGEgc2NoZW1hIGluZGVwZW5kZW50bHkgb2YgdGhlIEh5cGVydHkgVVJMLlxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItYS1jZXJ0YWluLXVzZXItYW5kLWRhdGEtc2NoZW1hLWluZGVwZW5kZW50bHktb2YtdGhlLWh5cGVydHktdXJsXHJcbiAgICAgIGlmIChpbnB1dCkge1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgncDJwJykpIHN1YnNjcmliZU1zZy5ib2R5LnAycCA9IGlucHV0LnAycDtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3N0b3JlJykpIHN1YnNjcmliZU1zZy5ib2R5LnN0b3JlID0gaW5wdXQuc3RvcmU7XHJcbiAgICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdzY2hlbWEnKSkgc3Vic2NyaWJlTXNnLmJvZHkuc2NoZW1hID0gaW5wdXQuc2NoZW1hO1xyXG4gICAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eSgnaWRlbnRpdHknKSkgc3Vic2NyaWJlTXNnLmJvZHkuaWRlbnRpdHkgPSBpbnB1dC5pZGVudGl0eTtcclxuICAgICAgICBpZiAoaW5wdXQuaGFzT3duUHJvcGVydHkoJ3Jlc291cmNlJykpIHN1YnNjcmliZU1zZy5ib2R5LnJlc291cmNlID0gaW5wdXQucmVzb3VyY2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1YnNjcmliZU1zZy5ib2R5LnJlc3VtZSA9IGlucHV0LnJlc3VtZTtcclxuXHJcbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgaWYgKGlucHV0Lmhhc093blByb3BlcnR5KCdtdXR1YWwnKSkgc3Vic2NyaWJlTXNnLmJvZHkubXV0dWFsQXV0aGVudGljYXRpb24gPSBpbnB1dC5tdXR1YWw7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJfc3Vic2NyaWJlXSAtIHN1YnNjcmliZSBtZXNzYWdlOiAnLCBpbnB1dCwgc3Vic2NyaWJlTXNnKTtcclxuXHJcbiAgICAgIC8vcmVxdWVzdCBzdWJzY3JpcHRpb25cclxuICAgICAgLy9Qcm92aXNpb25hbCBkYXRhIGlzIGFwcGxpZWQgdG8gdGhlIERhdGFPYmplY3RPYnNlcnZlciBhZnRlciBjb25maXJtYXRpb24uIE9yIGRpc2NhcmRlZCBpZiB0aGVyZSBpcyBubyBjb25maXJtYXRpb24uXHJcbiAgICAgIC8vZm9yIG1vcmUgaW5mbyBzZWUgdGhlIERhdGFQcm92aXNpb25hbCBjbGFzcyBkb2N1bWVudGF0aW9uLlxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZS1yZXNwb25zZTogJywgcmVwbHkpO1xyXG5cclxuICAgICAgICBsZXQgb2JqVVJMID0gcmVwbHkuYm9keS5yZXNvdXJjZTtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Byb3Zpc2lvbmFsID0gX3RoaXMuX3Byb3Zpc2lvbmFsc1tvYmpVUkxdO1xyXG4gICAgICAgIGRlbGV0ZSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XHJcbiAgICAgICAgaWYgKG5ld1Byb3Zpc2lvbmFsKSBuZXdQcm92aXNpb25hbC5fcmVsZWFzZUxpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAocmVwbHkuYm9keS5jb2RlIDwgMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGFQcm92aXNpb25hbDogJywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcywgb2JqVVJMKTtcclxuICAgICAgICAgIG5ld1Byb3Zpc2lvbmFsID0gbmV3IERhdGFQcm92aXNpb25hbChfdGhpcy5fb3duZXIsIG9ialVSTCwgX3RoaXMuX2J1cywgcmVwbHkuYm9keS5jaGlsZHJlblJlc291cmNlcyk7XHJcbiAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF0gPSBuZXdQcm92aXNpb25hbDtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGEgT2JqZWN0IE9ic2VydmVyOiAnLCByZXBseSwgX3RoaXMuX3Byb3Zpc2lvbmFscyk7XHJcblxyXG4gICAgICAgICAgbGV0IG9ic2VydmVySW5wdXQgPSByZXBseS5ib2R5LnZhbHVlO1xyXG5cclxuICAgICAgICAgIG9ic2VydmVySW5wdXQuc3luY2hlciA9IF90aGlzO1xyXG4gICAgICAgICAgb2JzZXJ2ZXJJbnB1dC5wMnAgPSBpbnB1dC5wMnA7XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnN0b3JlID0gaW5wdXQuc3RvcmU7XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LmlkZW50aXR5ID0gaW5wdXQuaWRlbnRpdHk7XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0LnJlc3VtZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgIC8vIHRvZG86IEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgICAgICBvYnNlcnZlcklucHV0Lm11dHVhbCA9IGlucHV0Lm11dHVhbDtcclxuXHJcbiAgICAgICAgICAvL29ic2VydmVySW5wdXQuY2hpbGRyZW4gPSBuZXdQcm92aXNpb25hbC5jaGlsZHJlbjtcclxuXHJcbiAgICAgICAgICAvL1RPRE86IG11dHVhbEF1dGhlbnRpY2F0aW9uIEZvciBGdXJ0aGVyIFN0dWR5XHJcbiAgICAgICAgICBsZXQgbmV3T2JqID0gX3RoaXMuX29ic2VydmVyc1tvYmpVUkxdO1xyXG4gICAgICAgICAgaWYgKCFuZXdPYmopIHtcclxuICAgICAgICAgICAgbmV3T2JqID0gbmV3IERhdGFPYmplY3RPYnNlcnZlcihvYnNlcnZlcklucHV0KTtcclxuICAgICAgICAgICAgX3RoaXMuX29ic2VydmVyc1tvYmpVUkxdID0gbmV3T2JqO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3T2JqLnN5bmMoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gbmV3IERhdGEgT2JqZWN0IE9ic2VydmVyIGFscmVhZHkgZXhpc3Q6ICcsIG5ld09iaik7XHJcblxyXG4gICAgICAgICAgcmVzb2x2ZShuZXdPYmopO1xyXG5cclxuICAgICAgICAgIGlmIChuZXdQcm92aXNpb25hbCkgeyBuZXdQcm92aXNpb25hbC5hcHBseShuZXdPYmopOyB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3QocmVwbHkuYm9keS5kZXNjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfcmVzdW1lU3Vic2NyaWJlKGNyaXRlcmlhKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAvL0ZMT1ctT1VUOiB0aGlzIG1lc3NhZ2Ugd2lsbCBiZSBzZW50IHRvIHRoZSBydW50aW1lIGluc3RhbmNlIG9mIFN5bmNoZXJNYW5hZ2VyIC0+IF9vbkxvY2FsU3Vic2NyaWJlXHJcbiAgICAgIGxldCBzdWJzY3JpYmVNc2cgPSB7XHJcbiAgICAgICAgdHlwZTogJ3N1YnNjcmliZScsIGZyb206IF90aGlzLl9vd25lciwgdG86IF90aGlzLl9zdWJVUkwsXHJcbiAgICAgICAgYm9keToge31cclxuICAgICAgfTtcclxuXHJcbiAgICAgIC8vIEh5cGVydHkgcmVxdWVzdCB0byBiZSBhbiBPYnNlcnZlclxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNoeXBlcnR5LXJlcXVlc3QtdG8tYmUtYW4tb2JzZXJ2ZXJcclxuXHJcbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciB0aGUgc2FtZSBIeXBlcnR5IFVSTFxyXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVUSElOSy1wcm9qZWN0L3NwZWNzL2Jsb2IvbWFzdGVyL21lc3NhZ2VzL2RhdGEtc3luYy1tZXNzYWdlcy5tZCNyZXN1bWUtc3Vic2NyaXB0aW9ucy1mb3ItdGhlLXNhbWUtaHlwZXJ0eS11cmxcclxuXHJcbiAgICAgIC8vIFJlc3VtZSBTdWJzY3JpcHRpb25zIGZvciBhIGNlcnRhaW4gdXNlciBhbmQgZGF0YSBzY2hlbWEgaW5kZXBlbmRlbnRseSBvZiB0aGUgSHlwZXJ0eSBVUkwuXHJcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZVRISU5LLXByb2plY3Qvc3BlY3MvYmxvYi9tYXN0ZXIvbWVzc2FnZXMvZGF0YS1zeW5jLW1lc3NhZ2VzLm1kI3Jlc3VtZS1zdWJzY3JpcHRpb25zLWZvci1hLWNlcnRhaW4tdXNlci1hbmQtZGF0YS1zY2hlbWEtaW5kZXBlbmRlbnRseS1vZi10aGUtaHlwZXJ0eS11cmxcclxuICAgICAgaWYgKGNyaXRlcmlhKSB7XHJcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdwMnAnKSkgc3Vic2NyaWJlTXNnLmJvZHkucDJwID0gY3JpdGVyaWEucDJwO1xyXG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgnc3RvcmUnKSkgc3Vic2NyaWJlTXNnLmJvZHkuc3RvcmUgPSBjcml0ZXJpYS5zdG9yZTtcclxuICAgICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ3NjaGVtYScpKSBzdWJzY3JpYmVNc2cuYm9keS5zY2hlbWEgPSBjcml0ZXJpYS5zY2hlbWE7XHJcbiAgICAgICAgaWYgKGNyaXRlcmlhLmhhc093blByb3BlcnR5KCdpZGVudGl0eScpKSBzdWJzY3JpYmVNc2cuYm9keS5pZGVudGl0eSA9IGNyaXRlcmlhLmlkZW50aXR5O1xyXG4gICAgICAgIGlmIChjcml0ZXJpYS5oYXNPd25Qcm9wZXJ0eSgncmVzb3VyY2UnKSkgc3Vic2NyaWJlTXNnLmJvZHkucmVzb3VyY2UgPSBjcml0ZXJpYS51cmw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN1YnNjcmliZU1zZy5ib2R5LnJlc3VtZSA9IGNyaXRlcmlhLnJlc3VtZTtcclxuXHJcbiAgICAgIC8vVE9ETzogRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgbGV0IG11dHVhbEF1dGhlbnRpY2F0aW9uID0gY3JpdGVyaWEubXV0dWFsO1xyXG4gICAgICBpZiAoY3JpdGVyaWEuaGFzT3duUHJvcGVydHkoJ211dHVhbCcpKSBzdWJzY3JpYmVNc2cuYm9keS5tdXR1YWxBdXRoZW50aWNhdGlvbiA9IG11dHVhbEF1dGhlbnRpY2F0aW9uO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZSBtZXNzYWdlOiAnLCBjcml0ZXJpYSwgc3Vic2NyaWJlTXNnKTtcclxuXHJcbiAgICAgIC8vcmVxdWVzdCBzdWJzY3JpcHRpb25cclxuICAgICAgLy9Qcm92aXNpb25hbCBkYXRhIGlzIGFwcGxpZWQgdG8gdGhlIERhdGFPYmplY3RPYnNlcnZlciBhZnRlciBjb25maXJtYXRpb24uIE9yIGRpc2NhcmRlZCBpZiB0aGVyZSBpcyBubyBjb25maXJtYXRpb24uXHJcbiAgICAgIC8vZm9yIG1vcmUgaW5mbyBzZWUgdGhlIERhdGFQcm92aXNpb25hbCBjbGFzcyBkb2N1bWVudGF0aW9uLlxyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHN1YnNjcmliZU1zZywgKHJlcGx5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyXSAtIHN1YnNjcmliZS1yZXN1bWVkLXJlc3BvbnNlOiAnLCByZXBseSk7XHJcblxyXG4gICAgICAgIGxldCBvYmpVUkwgPSByZXBseS5ib2R5LnJlc291cmNlO1xyXG5cclxuICAgICAgICBsZXQgbmV3UHJvdmlzaW9uYWwgPSBfdGhpcy5fcHJvdmlzaW9uYWxzW29ialVSTF07XHJcbiAgICAgICAgZGVsZXRlIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXTtcclxuICAgICAgICBpZiAobmV3UHJvdmlzaW9uYWwpIG5ld1Byb3Zpc2lvbmFsLl9yZWxlYXNlTGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIGlmIChyZXBseS5ib2R5LmNvZGUgPCAyMDApIHsgLy8gdG9kbzogY2hlY2sgaWYgdGhpcyBpcyBuZWVkZWQgZm9yIHRoZSByZXN1bWVcclxuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnW3N5bmNoZXJdIC0gcmVzdW1lIG5ldyBEYXRhUHJvdmlzaW9uYWw6ICcsIHJlcGx5LCBvYmpVUkwpO1xyXG4gICAgICAgICAgbmV3UHJvdmlzaW9uYWwgPSBuZXcgRGF0YVByb3Zpc2lvbmFsKF90aGlzLl9vd25lciwgb2JqVVJMLCBfdGhpcy5fYnVzLCByZXBseS5ib2R5LmNoaWxkcmVuUmVzb3VyY2VzKTtcclxuICAgICAgICAgIF90aGlzLl9wcm92aXNpb25hbHNbb2JqVVJMXSA9IG5ld1Byb3Zpc2lvbmFsO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5LmJvZHkuY29kZSA9PT0gMjAwKSB7XHJcblxyXG4gICAgICAgICAgbGV0IGxpc3RPZk9ic2VydmVycyA9IHJlcGx5LmJvZHkudmFsdWU7XHJcblxyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gbGlzdE9mT2JzZXJ2ZXJzKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YU9iamVjdCA9IGxpc3RPZk9ic2VydmVyc1tpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbc3luY2hlcl0gLSBSZXN1bWUgT2JqZWN0IE9ic2VydmVyOiAnLCByZXBseSwgZGF0YU9iamVjdCwgX3RoaXMuX3Byb3Zpc2lvbmFscyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpOyB9XHJcblxyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LmRhdGEgPSBkZWVwQ2xvbmUoZGF0YU9iamVjdC5kYXRhKSB8fCB7fTtcclxuICAgICAgICAgICAgZGF0YU9iamVjdC5yZXN1bWUgPSB0cnVlO1xyXG4gICAgICAgICAgICBkYXRhT2JqZWN0LnN5bmNoZXIgPSBfdGhpcztcclxuXHJcbiAgICAgICAgICAgIC8vVE9ETzogbXV0dWFsQXV0aGVudGljYXRpb24gRm9yIEZ1cnRoZXIgU3R1ZHlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVTdWJzY3JpYmVdIC0gY3JlYXRlIG5ldyBkYXRhT2JqZWN0OiAnLCBkYXRhT2JqZWN0KTtcclxuICAgICAgICAgICAgbGV0IG5ld09iaiA9IG5ldyBEYXRhT2JqZWN0T2JzZXJ2ZXIoZGF0YU9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YU9iamVjdC5jaGlsZHJlbk9iamVjdHMpIHsgbmV3T2JqLnJlc3VtZUNoaWxkcmVucyhkYXRhT2JqZWN0LmNoaWxkcmVuT2JqZWN0cyk7IH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tzeW5jaGVyLl9yZXN1bWVTdWJzY3JpYmVdIC0gbmV3IGRhdGFPYmplY3QnLCBuZXdPYmopO1xyXG4gICAgICAgICAgICBfdGhpcy5fb2JzZXJ2ZXJzW25ld09iai51cmxdID0gbmV3T2JqO1xyXG5cclxuICAgICAgICAgICAgaWYgKF90aGlzLl9wcm92aXNpb25hbHNbbmV3T2JqLnVybF0pIHtcclxuICAgICAgICAgICAgICBfdGhpcy5fcHJvdmlzaW9uYWxzW25ld09iai51cmxdLmFwcGx5KG5ld09iaik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vbGV0cyBzeW5jIHdpdGggUmVwb3J0ZXJcclxuICAgICAgICAgICAgLy8gaXQgd2FzIGNvbW1lbnRlZCB0byBsZXQgaHlwZXJ0aWVzIGRlY2lkZSB3aGVuIHRvIHN5bmNcclxuICAgICAgICAgICAgLy9uZXdPYmouc3luYygpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJlc29sdmUoX3RoaXMuX29ic2VydmVycyk7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuX29uT2JzZXJ2ZXJzUmVzdW1lKSB0aGlzLl9vbk9ic2VydmVyc1Jlc3VtZShfdGhpcy5fb2JzZXJ2ZXJzKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseS5ib2R5LmNvZGUgPT09IDQwNCkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7fSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChyZXBseS5ib2R5LmRlc2MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIGxvY2FsIHJ1bnRpbWUgUmVwb3J0ZXJPYmplY3QgLT4gX29uUmVtb3RlU3Vic2NyaWJlXHJcbiAgX29uRm9yd2FyZChtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgbGV0IHJlcG9ydGVyID0gX3RoaXMuX3JlcG9ydGVyc1ttc2cuYm9keS50b107XHJcbiAgICByZXBvcnRlci5fb25Gb3J3YXJkKG1zZyk7XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBTeW5jaGVyIC0+IGNyZWF0ZSAodGhpcyBpcyBhY3R1YWxseSBhbiBpbnZpdGF0aW9uIHRvIHN1YnNjcmliZSlcclxuICBfb25SZW1vdGVDcmVhdGUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgbGV0IHJlc291cmNlID0gbXNnLmZyb20uc2xpY2UoMCwgLTEzKTsgLy9yZW1vdmUgXCIvc3Vic2NyaXB0aW9uXCIgZnJvbSB0aGUgVVJMXHJcbiAgICBsZXQgZGl2aWRlZFVSTCA9IGRpdmlkZVVSTChyZXNvdXJjZSk7XHJcbiAgICBsZXQgZG9tYWluID0gZGl2aWRlZFVSTC5kb21haW47XHJcblxyXG4gICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICB0eXBlOiBtc2cudHlwZSxcclxuICAgICAgZnJvbTogbXNnLmJvZHkuc291cmNlLFxyXG4gICAgICB1cmw6IHJlc291cmNlLFxyXG4gICAgICBkb21haW46IGRvbWFpbixcclxuICAgICAgc2NoZW1hOiBtc2cuYm9keS5zY2hlbWEsXHJcbiAgICAgIHZhbHVlOiBtc2cuYm9keS52YWx1ZSxcclxuICAgICAgaWRlbnRpdHk6IG1zZy5ib2R5LmlkZW50aXR5LFxyXG5cclxuICAgICAgYWNrOiAodHlwZSkgPT4ge1xyXG4gICAgICAgIGxldCBsVHlwZSA9IDIwMDtcclxuICAgICAgICBpZiAodHlwZSkge1xyXG4gICAgICAgICAgbFR5cGUgPSB0eXBlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAvL3NlbmQgYWNrIHJlc3BvbnNlIG1lc3NhZ2VcclxuICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgIGlkOiBtc2cuaWQsIHR5cGU6ICdyZXNwb25zZScsIGZyb206IG1zZy50bywgdG86IG1zZy5mcm9tLFxyXG4gICAgICAgICAgYm9keTogeyBjb2RlOiBsVHlwZSB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIpIHtcclxuICAgICAgY29uc29sZS5pbmZvKCdbU3luY2hlcl0gTk9USUZJQ0FUSU9OLUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIoZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9GTE9XLUlOOiBtZXNzYWdlIHJlY2VpdmVkIGZyb20gYSByZW1vdGUgRGF0YU9iamVjdFJlcG9ydGVyIC0+IGRlbGV0ZVxyXG4gIF9vblJlbW90ZURlbGV0ZShtc2cpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAvL3JlbW92ZSBcIi9zdWJzY3JpcHRpb25cIiBmcm9tIHRoZSBVUkxcclxuICAgIGxldCByZXNvdXJjZSA9IG1zZy5ib2R5LnJlc291cmNlO1xyXG5cclxuICAgIGxldCBvYmplY3QgPSBfdGhpcy5fb2JzZXJ2ZXJzW3Jlc291cmNlXTtcclxuXHJcbiAgICBsZXQgdW5zdWJzY3JpYmUgPSB7XHJcbiAgICAgIGZyb206IF90aGlzLm93bmVyLFxyXG4gICAgICB0bzogX3RoaXMuX3N1YlVSTCxcclxuICAgICAgaWQ6IG1zZy5pZCxcclxuICAgICAgdHlwZTogJ3Vuc3Vic2NyaWJlJyxcclxuICAgICAgYm9keTogeyByZXNvdXJjZTogbXNnLmJvZHkucmVzb3VyY2UgfVxyXG4gICAgfTtcclxuXHJcbiAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHVuc3Vic2NyaWJlKTtcclxuXHJcbiAgICBkZWxldGUgX3RoaXMuX29ic2VydmVyc1tyZXNvdXJjZV07XHJcblxyXG4gICAgaWYgKG9iamVjdCkge1xyXG4gICAgICBsZXQgZXZlbnQgPSB7XHJcbiAgICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgICAgdXJsOiByZXNvdXJjZSxcclxuICAgICAgICBpZGVudGl0eTogbXNnLmJvZHkuaWRlbnRpdHksXHJcblxyXG4gICAgICAgIGFjazogKHR5cGUpID0+IHtcclxuICAgICAgICAgIGxldCBsVHlwZSA9IDIwMDtcclxuICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGxUeXBlID0gdHlwZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vVE9ETzogYW55IG90aGVyIGRpZmZlcmVudCBvcHRpb25zIGZvciB0aGUgcmVsZWFzZSBwcm9jZXNzLCBsaWtlIGFjY2VwdCBidXQgbm9yIHJlbGVhc2UgbG9jYWw/XHJcbiAgICAgICAgICBpZiAobFR5cGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBvYmplY3QuZGVsZXRlKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy9zZW5kIGFjayByZXNwb25zZSBtZXNzYWdlXHJcbiAgICAgICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgICAgICAgIGJvZHk6IHsgY29kZTogbFR5cGUsIHNvdXJjZTogX3RoaXMuX293bmVyIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChfdGhpcy5fb25Ob3RpZmljYXRpb25IYW5kbGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05PVElGSUNBVElPTi1FVkVOVDogJywgZXZlbnQpO1xyXG4gICAgICAgIF90aGlzLl9vbk5vdGlmaWNhdGlvbkhhbmRsZXIoZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICBpZDogbXNnLmlkLCB0eXBlOiAncmVzcG9uc2UnLCBmcm9tOiBtc2cudG8sIHRvOiBtc2cuZnJvbSxcclxuICAgICAgICBib2R5OiB7IGNvZGU6IDQwNCwgc291cmNlOiBfdGhpcy5fb3duZXIgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGNsb3NlIGV2ZW50IHJlY2VpdmVkIGZyb20gcnVudGltZSByZWdpc3RyeVxyXG4gIF9vbkV4ZWN1dGUobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCByZXBseSA9IHtcclxuICAgICAgaWQ6IG1zZy5pZCwgdHlwZTogJ3Jlc3BvbnNlJywgZnJvbTogbXNnLnRvLCB0bzogbXNnLmZyb20sXHJcbiAgICAgIGJvZHk6IHsgY29kZTogMjAwIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKChtc2cuZnJvbSA9PT0gX3RoaXMuX3J1bnRpbWVVcmwgKyAnL3JlZ2lzdHJ5LycgfHwgbXNnLmZyb20gPT09IF90aGlzLl9ydW50aW1lVXJsICsgJy9yZWdpc3RyeScpICYmIG1zZy5ib2R5ICYmIG1zZy5ib2R5Lm1ldGhvZCAmJiBtc2cuYm9keS5tZXRob2QgPT09ICdjbG9zZScgJiYgX3RoaXMuX29uQ2xvc2UpIHtcclxuICAgICAgbGV0IGV2ZW50ID0ge1xyXG4gICAgICAgIHR5cGU6ICdjbG9zZScsXHJcblxyXG4gICAgICAgIGFjazogKHR5cGUpID0+IHtcclxuICAgICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIHJlcGx5LmJvZHkuY29kZSA9IHR5cGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAvL3NlbmQgYWNrIHJlc3BvbnNlIG1lc3NhZ2VcclxuICAgICAgICAgIF90aGlzLl9idXMucG9zdE1lc3NhZ2UocmVwbHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnNvbGUuaW5mbygnW1N5bmNoZXJdIENsb3NlLUVWRU5UOiAnLCBldmVudCk7XHJcbiAgICAgIF90aGlzLl9vbkNsb3NlKGV2ZW50KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBfdGhpcy5fYnVzLnBvc3RNZXNzYWdlKHJlcGx5KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENhbGxiYWNrIHN5c3RlbSB0byB0cmlnZ2VyIHRoZSByZXN1bWVkIHJlcG9ydGVyc1xyXG4gICogQHBhcmFtICB7RnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gY2FsbGJhY2sgd2hpY2ggd2lsbCBiZSBpbnZva2VkXHJcbiAgKiBAcmV0dXJuIHtPYmplY3Q8VVJMLCBEYXRhT2JqZWN0UmVwb3J0ZXI+fSBSZXR1cm4gb25lIG9iamVjdCB3aXRoIGFsbCByZXN1bWVkIHJlcG9ydGVycztcclxuICAqL1xyXG4gIG9uUmVwb3J0ZXJzUmVzdW1lKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9vblJlcG9ydGVyc1Jlc3VtZSA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsYmFjayBzeXN0ZW0gdG8gdHJpZ2dlciB0aGUgcmVzdW1lZCBvYnNlcnZlcnNcclxuICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIGNhbGxiYWNrIHdoaWNoIHdpbGwgYmUgaW52b2tlZFxyXG4gICogQHJldHVybiB7T2JqZWN0PFVSTCwgRGF0YU9iamVjdE9ic2VydmVyPn0gUmV0dXJuIG9uZSBvYmplY3Qgd2l0aCBhbGwgcmVzdW1lZCBvYnNlcnZlcnM7XHJcbiAgKi9cclxuICBvbk9ic2VydmVyc1Jlc3VtZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fb25PYnNlcnZlcnNSZXN1bWUgPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeW5jaGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3luY2hlci9TeW5jaGVyLmpzIiwiaW1wb3J0IFN5bmNoZXIgZnJvbSAnLi9zeW5jaGVyL1N5bmNoZXInO1xyXG5pbXBvcnQgRGF0YU9iamVjdFJlcG9ydGVyIGZyb20gJy4vc3luY2hlci9EYXRhT2JqZWN0UmVwb3J0ZXInO1xyXG5pbXBvcnQgRGF0YU9iamVjdE9ic2VydmVyIGZyb20gJy4vc3luY2hlci9EYXRhT2JqZWN0T2JzZXJ2ZXInO1xyXG5cclxuZXhwb3J0IHtTeW5jaGVyLCBEYXRhT2JqZWN0UmVwb3J0ZXIsIERhdGFPYmplY3RPYnNlcnZlcn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TeW5jaGVyLmpzIiwiLyoqXHJcbiogQ29weXJpZ2h0IDIwMTYgUFQgSW5vdmHDp8OjbyBlIFNpc3RlbWFzIFNBXHJcbiogQ29weXJpZ2h0IDIwMTYgSU5FU0MtSURcclxuKiBDb3B5cmlnaHQgMjAxNiBRVU9CSVMgTkVUV09SS1MgU0xcclxuKiBDb3B5cmlnaHQgMjAxNiBGUkFVTkhPRkVSLUdFU0VMTFNDSEFGVCBaVVIgRk9FUkRFUlVORyBERVIgQU5HRVdBTkRURU4gRk9SU0NIVU5HIEUuVlxyXG4qIENvcHlyaWdodCAyMDE2IE9SQU5HRSBTQVxyXG4qIENvcHlyaWdodCAyMDE2IERldXRzY2hlIFRlbGVrb20gQUdcclxuKiBDb3B5cmlnaHQgMjAxNiBBcGl6ZWVcclxuKiBDb3B5cmlnaHQgMjAxNiBURUNITklTQ0hFIFVOSVZFUlNJVEFUIEJFUkxJTlxyXG4qXHJcbiogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbipcclxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4qXHJcbiogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4qIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqL1xyXG5cclxuaW1wb3J0IFN5bmNPYmplY3QgZnJvbSAnLi9Qcm94eU9iamVjdCc7XHJcblxyXG4vL2ltcG9ydCB7IGRlZXBDbG9uZSB9IGZyb20gJy4uL3V0aWxzL3V0aWxzLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgY2xhc3MgcmV0dXJuZWQgZnJvbSB0aGUgRGF0YU9iamVjdCBhZGRDaGlsZHJlbiBjYWxsIG9yIGZyb20gb25BZGRDaGlsZHJlbiBpZiByZW1vdGVseSBjcmVhdGVkLlxyXG4gKi9cclxuY2xhc3MgRGF0YU9iamVjdENoaWxkIC8qIGltcGxlbWVudHMgU3luY1N0YXR1cyAqLyB7XHJcbiAgLyogcHJpdmF0ZVxyXG5cclxuICAtLS0tZXZlbnQgaGFuZGxlcnMtLS0tXHJcbiAgX29uUmVzcG9uc2VIYW5kbGVyOiAoZXZlbnQpID0+IHZvaWRcclxuICAqL1xyXG5cclxuICAvKipcclxuICAgKiBAaWdub3JlXHJcbiAgICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IGJ5IEh5cGVydGllcy4gSXQncyBjYWxsZWQgYnkgdGhlIERhdGFPYmplY3QuYWRkQ2hpbGRyZW5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihpbnB1dCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcbiAgICBmdW5jdGlvbiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IocGFyKSB7XHJcbiAgICAgIHRocm93ICdbRGF0YU9iamVjdENoaWxkXSAnICsgcGFyICsgJyBtYW5kYXRvcnkgcGFyYW1ldGVyIGlzIG1pc3NpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LnBhcmVudCA/ICBfdGhpcy5fcGFyZW50ID0gaW5wdXQucGFyZW50IDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdwYXJlbnQnKTtcclxuICAgIGlucHV0LnVybCA/ICBfdGhpcy5fdXJsID0gaW5wdXQudXJsIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCd1cmwnKTtcclxuICAgIGlucHV0LmNyZWF0ZWQgPyBfdGhpcy5fY3JlYXRlZCA9IGlucHV0LmNyZWF0ZWQgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ2NyZWF0ZWQnKTtcclxuICAgIGlucHV0LnJlcG9ydGVyID8gX3RoaXMuX3JlcG9ydGVyID0gaW5wdXQucmVwb3J0ZXIgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3JlcG9ydGVyJyk7XHJcbiAgICBpbnB1dC5ydW50aW1lID8gX3RoaXMuX3J1bnRpbWUgPSBpbnB1dC5ydW50aW1lIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdydW50aW1lJyk7XHJcbiAgICBpbnB1dC5zY2hlbWEgPyBfdGhpcy5fc2NoZW1hID0gaW5wdXQuc2NoZW1hIDogdGhyb3dNYW5kYXRvcnlQYXJtTWlzc2luZ0Vycm9yKCdzY2hlbWEnKTtcclxuICAgIGlucHV0LnBhcmVudE9iamVjdCA/IF90aGlzLl9wYXJlbnRPYmplY3QgPSBpbnB1dC5wYXJlbnRPYmplY3QgOiB0aHJvd01hbmRhdG9yeVBhcm1NaXNzaW5nRXJyb3IoJ3BhcmVudE9iamVjdCcpO1xyXG5cclxuICAgIGlmIChpbnB1dC5uYW1lKSBfdGhpcy5fbmFtZSA9IGlucHV0Lm5hbWU7XHJcbiAgICBpZiAoaW5wdXQuZGVzY3JpcHRpb24pIF90aGlzLl9kZXNjcmlwdGlvbiA9IGlucHV0LmRlc2NyaXB0aW9uO1xyXG4gICAgaWYgKGlucHV0LnRhZ3MpIF90aGlzLl90YWdzID0gaW5wdXQudGFncztcclxuICAgIGlmIChpbnB1dC5yZXNvdXJjZXMpIF90aGlzLl9yZXNvdXJjZXMgPSBpbnB1dC5yZXNvdXJjZXM7XHJcbiAgICBpZiAoaW5wdXQub2JzZXJ2ZXJTdG9yYWdlKSBfdGhpcy5fb2JzZXJ2ZXJTdG9yYWdlID0gaW5wdXQub2JzZXJ2ZXJTdG9yYWdlO1xyXG4gICAgaWYgKGlucHV0LnB1YmxpY09ic2VydmF0aW9uKSBfdGhpcy5fcHVibGljT2JzZXJ2YXRpb24gPSBpbnB1dC5wdWJsaWNPYnNlcnZhdGlvbjtcclxuXHJcbiAgICBpZiAoaW5wdXQuZGF0YSkge1xyXG4gICAgICBfdGhpcy5fc3luY09iaiA9IG5ldyBTeW5jT2JqZWN0KGlucHV0LmRhdGEpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgX3RoaXMuX3N5bmNPYmogPSBuZXcgU3luY09iamVjdCh7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1tEYXRhT2JqZWN0Q2hpbGQgLSAgQ29uc3RydWN0b3JdIC0gJywgX3RoaXMuX3N5bmNPYmopO1xyXG5cclxuICAgIF90aGlzLl9idXMgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9idXM7XHJcbiAgICBfdGhpcy5fb3duZXIgPSBfdGhpcy5fcGFyZW50T2JqZWN0Ll9vd25lcjtcclxuXHJcbiAgICBfdGhpcy5fYWxsb2NhdGVMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICBfdGhpcy5fbWV0YWRhdGEgPSBpbnB1dDtcclxuXHJcbiAgICAvLyBkZWxldGUgX3RoaXMuX21ldGFkYXRhLmRhdGE7XHJcbiAgICBkZWxldGUgX3RoaXMuX21ldGFkYXRhLnBhcmVudE9iamVjdDtcclxuXHJcbiAgfVxyXG5cclxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIC8vdGhpcyBpcyBvbmx5IG5lZWRlZCBmb3IgY2hpbGRyZW4gcmVwb3J0ZXJzXHJcbiAgICBpZiAoX3RoaXMuX3JlcG9ydGVyID09PSBfdGhpcy5fb3duZXIpIHtcclxuICAgICAgX3RoaXMuX2xpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihfdGhpcy5fcmVwb3J0ZXIsIChtc2cpID0+IHtcclxuICAgICAgICBpZiAobXNnLnR5cGUgPT09ICdyZXNwb25zZScgJiYgbXNnLmlkID09PSBfdGhpcy5fbXNnSWQpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRhT2JqZWN0Q2hpbGQub25SZXNwb25zZTonLCBtc2cpO1xyXG4gICAgICAgICAgX3RoaXMuX29uUmVzcG9uc2UobXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3JlbGVhc2VMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGlmIChfdGhpcy5fbGlzdGVuZXIpIHtcclxuICAgICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVsZWFzZSBhbmQgZGVsZXRlIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgZGVsZXRlKCkge1xyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuXHJcblxyXG4gICAgX3RoaXMuX3JlbGVhc2VMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAvL1RPRE86IHNlbmQgZGVsZXRlIG1lc3NhZ2UgP1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsIE1ldGFkYXRhIGFib3V0IHRoZSBDaGlsZCBEYXRhIE9iamVjdFxyXG4gICAqIEB0eXBlIHtPYmplY3R9IC1cclxuICAgKi9cclxuICBnZXQgbWV0YWRhdGEoKSB7IHJldHVybiB0aGlzLl9tZXRhZGF0YTsgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGlsZHJlbiBJRCBnZW5lcmF0ZWQgb24gYWRkQ2hpbGRyZW4uIFVuaXF1ZSBpZGVudGlmaWVyXHJcbiAgICogQHR5cGUge1VSTH0gLSBVUkwgb2YgdGhlIGZvcm1hdCA8SHlwZXJ0eVVSTD4jPG51bWVyaWMtc2VxdWVuY2U+XHJcbiAgICovXHJcbiAgZ2V0IGNoaWxkSWQoKSB7IHJldHVybiB0aGlzLl9jaGlsZElkOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgU3RydWN0dXJlIHRvIGJlIHN5bmNocm9uaXplZC5cclxuICAgKiBAdHlwZSB7SlNPTn0gLSBKU09OIHN0cnVjdHVyZSB0aGF0IHNob3VsZCBmb2xsb3cgdGhlIGRlZmluZWQgc2NoZW1hLCBpZiBhbnkuXHJcbiAgICovXHJcbiAgZ2V0IGRhdGEoKSB7IHJldHVybiB0aGlzLl9zeW5jT2JqLmRhdGE7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGZvciB0aGlzIGRhdGFPYmplY3RDaGlsZCBhbiBpZGVudGl0eVxyXG4gICAqIEBtZXRob2QgaWRlbnRpdHlcclxuICAgKiBAcGFyYW0gIHtJZGVudGl0eX0gaWRlbnRpdHkgaWRlbnRpdHkgZnJvbSB3aG8gY3JlYXRlZCB0aGUgbWVzc2FnZVxyXG4gICAqL1xyXG4gIHNldCBpZGVudGl0eShpZGVudGl0eSkgeyB0aGlzLl9pZGVudGl0eSA9IGlkZW50aXR5OyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBmb3IgdGhpcyBkYXRhT2JqZWN0Q2hpbGQgYW4gaWRlbnRpdHlcclxuICAgKiBAbWV0aG9kIGlkZW50aXR5XHJcbiAgICogQHJldHVybiB7SWRlbnRpdHl9IGlkZW50aXR5IGZyb20gd2hvIGNyZWF0ZWQgdGhlIG1lc3NhZ2VcclxuICAgKi9cclxuICBnZXQgaWRlbnRpdHkoKSB7IHJldHVybiB0aGlzLl9pZGVudGl0eTsgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciB0aGUgY2hhbmdlIGxpc3RlbmVycyBzZW50IGJ5IHRoZSByZXBvcnRlciBjaGlsZFxyXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oZXZlbnQ6IE1zZ0V2ZW50KX0gY2FsbGJhY2tcclxuICAgKi9cclxuICBvbkNoYW5nZShjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fc3luY09iai5vYnNlcnZlKChldmVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnW0RhdGFPYmplY3RDaGlsZCAtIG9ic2VydmVyXSAtICcsIGV2ZW50KTtcclxuICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCB0aGUgY2FsbGJhY2sgdG8gcHJvY2VzcyByZXNwb25zZSBub3RpZmljYXRpb25zIG9mIHRoZSBjcmVhdGVzXHJcbiAgICogQHBhcmFtIHtmdW5jdGlvbihldmVudDogTXNnRXZlbnQpfSBjYWxsYmFja1xyXG4gICAqL1xyXG4gIG9uUmVzcG9uc2UoY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX29uUmVzcG9uc2VIYW5kbGVyID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvL0ZMT1ctSU46IG1lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBhIHJlbW90ZSBEYXRhT2JqZWN0IC0+IF9vbkNoaWxkQ3JlYXRlXHJcbiAgX29uUmVzcG9uc2UobXNnKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIGxldCBldmVudCA9IHtcclxuICAgICAgdHlwZTogbXNnLnR5cGUsXHJcbiAgICAgIHVybDogbXNnLmJvZHkuc291cmNlLFxyXG4gICAgICBjb2RlOiBtc2cuYm9keS5jb2RlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChfdGhpcy5fb25SZXNwb25zZUhhbmRsZXIpIHtcclxuICAgICAgX3RoaXMuX29uUmVzcG9uc2VIYW5kbGVyKGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXRhT2JqZWN0Q2hpbGQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zeW5jaGVyL0RhdGFPYmplY3RDaGlsZC5qcyIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDE2IFBUIElub3Zhw6fDo28gZSBTaXN0ZW1hcyBTQVxyXG4qIENvcHlyaWdodCAyMDE2IElORVNDLUlEXHJcbiogQ29weXJpZ2h0IDIwMTYgUVVPQklTIE5FVFdPUktTIFNMXHJcbiogQ29weXJpZ2h0IDIwMTYgRlJBVU5IT0ZFUi1HRVNFTExTQ0hBRlQgWlVSIEZPRVJERVJVTkcgREVSIEFOR0VXQU5EVEVOIEZPUlNDSFVORyBFLlZcclxuKiBDb3B5cmlnaHQgMjAxNiBPUkFOR0UgU0FcclxuKiBDb3B5cmlnaHQgMjAxNiBEZXV0c2NoZSBUZWxla29tIEFHXHJcbiogQ29weXJpZ2h0IDIwMTYgQXBpemVlXHJcbiogQ29weXJpZ2h0IDIwMTYgVEVDSE5JU0NIRSBVTklWRVJTSVRBVCBCRVJMSU5cclxuKlxyXG4qIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4qIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4qXHJcbiogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuKlxyXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4qIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKi9cclxuXHJcbi8qKlxyXG4gKiBAYWNjZXNzIHByaXZhdGVcclxuICogVGhpcyBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgY29sbGVjdGluZyBkZWx0YSBjaGFuZ2VzIGluIHJlbW90ZSBvYmplY3RzLCBiZWZvcmUgdGhlIHJlc3BvbnNlIG9mIHN1YnNjcmlwdGlvbiByZWFjaCB0aGUgb2JzZXJ2ZXIuXHJcbiAqIEl0J3MgdXNlZCBpbiBTeW5jaGVyIC0+IHN1YnNjcmliZS4gVGhlIGZsb3cgaXMgZGVmaW5lZCBhczpcclxuICogMS4gKG9ic2VydmVyKSAtLXN1YnNjcmliZS0tPiAocmVwb3J0ZXIpXHJcbiAqIDIuIChvYnNlcnZlcikgPC0tZGVsdGEgdXBkYXRlcy0tIChyZXBvcnRlcilcclxuICogMy4gKG9ic2VydmVyKSA8LS1zdWJzY3JpYmUgcmVzcG9uc2UtLSAocmVwb3J0ZXIpXHJcbiAqIFRoaXMgbWVhbnMgdGhhdCB0aGVyZSBjb3VsZCBiZSBkZWx0YSB1cGRhdGVzIHRyYW5zZmVycmVkIGJlZm9yZSB0aGUgc3Vic2NyaXB0aW9uIGNvbmZpcm1hdGlvbi5cclxuICogU2luY2UgdGhlcmUgaXMgbm8gRGF0YU9iamVjdE9ic2VydmVyIGJlZm9yZSB0aGUgdWJzY3JpcHRpb24gY29uZmlybWF0aW9uLCB0aGVyZSBzaG91bGQgYmUgc29tZSBvdGhlciBvYmplY3QgY29sbGVjdGluZyB0aGUgdXBkYXRlcy5cclxuICogUHJvdmlzaW9uYWwgZGF0YSBpcyBhcHBsaWVkIHRvIHRoZSBEYXRhT2JqZWN0T2JzZXJ2ZXIgYWZ0ZXIgY29uZmlybWF0aW9uLiBPciBkaXNjYXJkZWQgaWYgdGhlcmUgaXMgbm8gY29uZmlybWF0aW9uLlxyXG4gKi9cclxuY2xhc3MgRGF0YVByb3Zpc2lvbmFsIHtcclxuICAvKiBwcml2YXRlXHJcbiAgX2NoaWxkcmVuTGlzdGVuZXJzOiBbTXNnTGlzdGVuZXJdXHJcbiAgX2xpc3RlbmVyOiBNc2dMaXN0ZW5lclxyXG5cclxuICBfY2hhbmdlczogW11cclxuICAqL1xyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lciwgdXJsLCBidXMsIGNoaWxkcmVuKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9vd25lciA9IG93bmVyO1xyXG4gICAgX3RoaXMuX3VybCA9IHVybDtcclxuICAgIF90aGlzLl9idXMgPSBidXM7XHJcbiAgICBfdGhpcy5fY2hpbGRyZW4gPSBjaGlsZHJlbjtcclxuXHJcbiAgICBfdGhpcy5fY2hhbmdlcyA9IFtdO1xyXG4gICAgX3RoaXMuX2FsbG9jYXRlTGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBfYWxsb2NhdGVMaXN0ZW5lcnMoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgIF90aGlzLl9saXN0ZW5lciA9IF90aGlzLl9idXMuYWRkTGlzdGVuZXIoX3RoaXMuX3VybCwgKG1zZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRGF0YVByb3Zpc2lvbmFsLScgKyBfdGhpcy5fdXJsICsgJy1SQ1Y6ICcsIG1zZyk7XHJcbiAgICAgIF90aGlzLl9jaGFuZ2VzLnB1c2gobXNnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qXHJcbiAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMgPSBbXTtcclxuICAgIGlmIChfdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgbGV0IGNoaWxkQmFzZVVSTCA9IHVybCArICcvY2hpbGRyZW4vJztcclxuICAgICAgX3RoaXMuX2NoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgbGV0IGNoaWxkVVJMID0gY2hpbGRCYXNlVVJMICsgY2hpbGQ7XHJcbiAgICAgICAgbGV0IGxpc3RlbmVyID0gX3RoaXMuX2J1cy5hZGRMaXN0ZW5lcihjaGlsZFVSTCwgKG1zZykgPT4ge1xyXG4gICAgICAgICAgLy9pZ25vcmUgbXNnIHNlbnQgYnkgaGltc2VsZlxyXG4gICAgICAgICAgaWYgKG1zZy5mcm9tICE9PSBvd25lcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfdGhpcy5fY2hpbGRyZW5MaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSovXHJcbiAgfVxyXG5cclxuICBfcmVsZWFzZUxpc3RlbmVycygpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgX3RoaXMuX2xpc3RlbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgIC8qX3RoaXMuX2NoaWxkcmVuTGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgIGxpc3RlbmVyLnJlbW92ZSgpO1xyXG4gICAgfSk7Ki9cclxuICB9XHJcblxyXG4gIGdldCBjaGlsZHJlbigpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuOyB9XHJcblxyXG4gIGFwcGx5KG9ic2VydmVyKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgX3RoaXMuX2NoYW5nZXMuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XHJcbiAgICAgIG9ic2VydmVyLl9jaGFuZ2VPYmplY3Qob2JzZXJ2ZXIuX3N5bmNPYmosIGNoYW5nZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFQcm92aXNpb25hbDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N5bmNoZXIvRGF0YVByb3Zpc2lvbmFsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAxNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// version: 0.7.1
// date: Sat Jul 22 2017 20:17:49 GMT+0100 (GMT Daylight Time)
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


(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("IdentityFactory", [], factory);
	else if(typeof exports === 'object')
		exports["IdentityFactory"] = factory();
	else
		root[""] = root[""] || {}, root[""]["IdentityFactory"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 137);
/******/ })
/************************************************************************/
/******/ ({

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* The UserProfile according to User Identity Data Model
*/

var UserProfile = function UserProfile(username, userURL, avatar, cn, locale) {
  (0, _classCallCheck3.default)(this, UserProfile);


  if (username) {
    this.username = username;
  }
  if (avatar) {
    this.avatar = avatar;
  }
  if (cn) {
    this.cn = cn;
  }
  if (locale) {
    this.locale = locale;
  }
  if (userURL) {
    this.userURL = userURL;
  }
};

exports.default = UserProfile;
module.exports = exports["default"];

/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(8);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _UserProfile = __webpack_require__(120);

var _UserProfile2 = _interopRequireDefault(_UserProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageBodyIdentity = function MessageBodyIdentity(username, userURL, avatar, cn, locale, idp, assertion) {
    (0, _classCallCheck3.default)(this, MessageBodyIdentity);


    if (!idp) throw new Error('IDP should be a parameter');
    if (!username) throw new Error('username should be a parameter');

    this.idp = idp;

    if (assertion) {
        this.assertion = assertion;
    }
    this.userProfile = new _UserProfile2.default(username, userURL, avatar, cn, locale);
}; /**
   * The Identity info to be added to Message.Body.Identity
   */

exports.default = MessageBodyIdentity;
module.exports = exports['default'];

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfile = undefined;

var _UserProfile = __webpack_require__(120);

var _UserProfile2 = _interopRequireDefault(_UserProfile);

var _MessageBodyIdentity = __webpack_require__(129);

var _MessageBodyIdentity2 = _interopRequireDefault(_MessageBodyIdentity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.UserProfile = _UserProfile2.default;
exports.default = _MessageBodyIdentity2.default;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqKioqKioqKioiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGMyNGI3MGExODNiN2I3MzQzNWUwP2MwOWQqKioqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lkZW50aXR5L1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pZGVudGl0eS9NZXNzYWdlQm9keUlkZW50aXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9JZGVudGl0eUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanM/MjFhZioqKioqKioqKiJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInVzZXJuYW1lIiwidXNlclVSTCIsImF2YXRhciIsImNuIiwibG9jYWxlIiwiTWVzc2FnZUJvZHlJZGVudGl0eSIsImlkcCIsImFzc2VydGlvbiIsIkVycm9yIiwidXNlclByb2ZpbGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7O0lBS01BLFcsR0FFSixxQkFBWUMsUUFBWixFQUFzQkMsT0FBdEIsRUFBK0JDLE1BQS9CLEVBQXVDQyxFQUF2QyxFQUEyQ0MsTUFBM0MsRUFBbUQ7QUFBQTs7O0FBRWpELE1BQUlKLFFBQUosRUFBYztBQUFFLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQTJCO0FBQzNDLE1BQUlFLE1BQUosRUFBWTtBQUFFLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUF1QjtBQUNyQyxNQUFJQyxFQUFKLEVBQVE7QUFBRSxTQUFLQSxFQUFMLEdBQVVBLEVBQVY7QUFBZTtBQUN6QixNQUFJQyxNQUFKLEVBQVk7QUFBRSxTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFBdUI7QUFDckMsTUFBSUgsT0FBSixFQUFhO0FBQUUsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQXlCO0FBRXpDLEM7O2tCQUdZRixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGY7Ozs7OztJQUVNTSxtQixHQUVKLDZCQUFZTCxRQUFaLEVBQXNCQyxPQUF0QixFQUErQkMsTUFBL0IsRUFBdUNDLEVBQXZDLEVBQTJDQyxNQUEzQyxFQUFtREUsR0FBbkQsRUFBd0RDLFNBQXhELEVBQW1FO0FBQUE7OztBQUVqRSxRQUFJLENBQUNELEdBQUwsRUFBVSxNQUFNLElBQUlFLEtBQUosQ0FBVSwyQkFBVixDQUFOO0FBQ1YsUUFBSSxDQUFDUixRQUFMLEVBQWUsTUFBTSxJQUFJUSxLQUFKLENBQVUsZ0NBQVYsQ0FBTjs7QUFFZixTQUFLRixHQUFMLEdBQVdBLEdBQVg7O0FBRUEsUUFBSUMsU0FBSixFQUFvQjtBQUFFLGFBQUtBLFNBQUwsR0FBaUJBLFNBQWpCO0FBQTZCO0FBQ25ELFNBQUtFLFdBQUwsR0FBbUIsMEJBQWdCVCxRQUFoQixFQUEwQkMsT0FBMUIsRUFBbUNDLE1BQW5DLEVBQTJDQyxFQUEzQyxFQUErQ0MsTUFBL0MsQ0FBbkI7QUFFRCxDLEVBbEJIOzs7O2tCQXVCZUMsbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmY7Ozs7QUFDQTs7Ozs7O1FBRVNOLFc7Ozs7Ozs7OztBQ0hUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJJZGVudGl0eUZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIklkZW50aXR5RmFjdG9yeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJJZGVudGl0eUZhY3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiXCJdID0gcm9vdFtcIlwiXSB8fCB7fSwgcm9vdFtcIlwiXVtcIklkZW50aXR5RmFjdG9yeVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzI0YjcwYTE4M2I3YjczNDM1ZTAiLCIvKipcclxuKiBUaGUgVXNlclByb2ZpbGUgYWNjb3JkaW5nIHRvIFVzZXIgSWRlbnRpdHkgRGF0YSBNb2RlbFxyXG4qL1xyXG5cclxuXHJcbmNsYXNzIFVzZXJQcm9maWxlIHtcclxuXHJcbiAgY29uc3RydWN0b3IodXNlcm5hbWUsIHVzZXJVUkwsIGF2YXRhciwgY24sIGxvY2FsZSkge1xyXG5cclxuICAgIGlmICh1c2VybmFtZSkgeyB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7IH1cclxuICAgIGlmIChhdmF0YXIpIHsgdGhpcy5hdmF0YXIgPSBhdmF0YXI7IH1cclxuICAgIGlmIChjbikgeyB0aGlzLmNuID0gY247IH1cclxuICAgIGlmIChsb2NhbGUpIHsgdGhpcy5sb2NhbGUgPSBsb2NhbGU7IH1cclxuICAgIGlmICh1c2VyVVJMKSB7IHRoaXMudXNlclVSTCA9IHVzZXJVUkw7IH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lkZW50aXR5L1VzZXJQcm9maWxlLmpzIiwiLyoqXHJcbiogVGhlIElkZW50aXR5IGluZm8gdG8gYmUgYWRkZWQgdG8gTWVzc2FnZS5Cb2R5LklkZW50aXR5XHJcbiovXHJcblxyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi9Vc2VyUHJvZmlsZSc7XHJcblxyXG5jbGFzcyBNZXNzYWdlQm9keUlkZW50aXR5IHtcclxuXHJcbiAgY29uc3RydWN0b3IodXNlcm5hbWUsIHVzZXJVUkwsIGF2YXRhciwgY24sIGxvY2FsZSwgaWRwLCBhc3NlcnRpb24pIHtcclxuXHJcbiAgICBpZiAoIWlkcCkgdGhyb3cgbmV3IEVycm9yKCdJRFAgc2hvdWxkIGJlIGEgcGFyYW1ldGVyJyk7XHJcbiAgICBpZiAoIXVzZXJuYW1lKSB0aHJvdyBuZXcgRXJyb3IoJ3VzZXJuYW1lIHNob3VsZCBiZSBhIHBhcmFtZXRlcicpO1xyXG5cclxuICAgIHRoaXMuaWRwID0gaWRwO1xyXG5cclxuICAgIGlmIChhc3NlcnRpb24pICAgICAgeyB0aGlzLmFzc2VydGlvbiA9IGFzc2VydGlvbjsgfVxyXG4gICAgdGhpcy51c2VyUHJvZmlsZSA9IG5ldyBVc2VyUHJvZmlsZSh1c2VybmFtZSwgdXNlclVSTCwgYXZhdGFyLCBjbiwgbG9jYWxlKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VCb2R5SWRlbnRpdHk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pZGVudGl0eS9NZXNzYWdlQm9keUlkZW50aXR5LmpzIiwiaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4vaWRlbnRpdHkvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgTWVzc2FnZUJvZHlJZGVudGl0eSBmcm9tICcuL2lkZW50aXR5L01lc3NhZ2VCb2R5SWRlbnRpdHknO1xyXG5cclxuZXhwb3J0IHsgVXNlclByb2ZpbGUgfTtcclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUJvZHlJZGVudGl0eTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0lkZW50aXR5RmFjdG9yeS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNiA3IDggOSAxMCJdLCJzb3VyY2VSb290IjoiIn0=

/***/ })
/******/ ])["default"];
});