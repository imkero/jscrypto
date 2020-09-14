(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["HMACSHA256"] = factory();
	else
		root["JsCrypto"] = root["JsCrypto"] || {}, root["JsCrypto"]["HMACSHA256"] = factory();
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hmac-sha256.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/hmac-sha256.ts":
/*!****************************!*\
  !*** ./src/hmac-sha256.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HmacSHA256; });
/* harmony import */ var _hmac__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hmac */ "./src/hmac.ts");
/* harmony import */ var _sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha256 */ "./src/sha256.ts");


function HmacSHA256(message, key) {
    return new _hmac__WEBPACK_IMPORTED_MODULE_0__["default"](new _sha256__WEBPACK_IMPORTED_MODULE_1__["default"](), key).finalize(message);
}


/***/ }),

/***/ "./src/hmac.ts":
/*!*********************!*\
  !*** ./src/hmac.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HMAC; });
/* harmony import */ var _lib_encoder_utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/encoder/utf8 */ "./src/lib/encoder/utf8.ts");

class HMAC {
    constructor(hasher, key) {
        this._hasher = hasher;
        // Convert string to WordArray, else assume WordArray already
        if (typeof key == "string") {
            key = _lib_encoder_utf8__WEBPACK_IMPORTED_MODULE_0__["Utf8"].parse(key);
        }
        const hasherBlockSize = hasher.blockSize;
        const hasherBlockSizeBytes = hasherBlockSize * 4;
        // Allow arbitrary length keys
        if (key.length() > hasherBlockSizeBytes) {
            key = hasher.finalize(key);
        }
        // Clamp excess bits
        key.clamp();
        const oKey = this._oKey = key.clone();
        const iKey = this._iKey = key.clone();
        const oKeyWords = oKey.raw();
        const iKeyWords = iKey.raw();
        for (let i = 0; i < hasherBlockSize; i++) {
            oKeyWords[i] ^= 0x5c5c5c5c;
            iKeyWords[i] ^= 0x36363636;
        }
        iKey.setSignificantBytes(hasherBlockSizeBytes);
        oKey.setSignificantBytes(hasherBlockSizeBytes);
        // Set initial values
        this.reset();
    }
    /**
     * Resets this HMAC to its initial state.
     *
     * @example
     *   hmacHasher.reset();
     */
    reset() {
        this._hasher.reset();
        this._hasher.update(this._iKey);
    }
    /**
     * Updates this HMAC with a message.
     *
     * @param {IWord32Array|string} messageUpdate The message to append.
     * @return {HMAC} This HMAC instance.
     * @example
     *   hmacHasher.update('message');
     *   hmacHasher.update(wordArray);
     */
    update(messageUpdate) {
        this._hasher.update(messageUpdate);
        return this;
    }
    /**
     * Finalizes the HMAC computation.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param {IWord32Array|string} messageUpdate (Optional) A final message update.
     * @return {IWord32Array} The HMAC.
     * @example
     *   var hmac = hmacHasher.finalize();
     *   var hmac = hmacHasher.finalize('message');
     *   var hmac = hmacHasher.finalize(wordArray);
     */
    finalize(messageUpdate) {
        const innerHash = this._hasher.finalize(messageUpdate);
        this._hasher.reset();
        return this._hasher.finalize(this._oKey.clone().concat(innerHash));
    }
}


/***/ }),

/***/ "./src/lib/algorithm/bufferedBlockAlgorithm.ts":
/*!*****************************************************!*\
  !*** ./src/lib/algorithm/bufferedBlockAlgorithm.ts ***!
  \*****************************************************/
/*! exports provided: BufferedBlockAlgorithm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferedBlockAlgorithm", function() { return BufferedBlockAlgorithm; });
/* harmony import */ var _word32array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../word32array */ "./src/lib/word32array.ts");
/* harmony import */ var _encoder_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../encoder/utf8 */ "./src/lib/encoder/utf8.ts");


class BufferedBlockAlgorithm {
    constructor(data, nBytes) {
        this._minBufferSize = 0;
        this._blockSize = 0;
        this._data = typeof data !== "undefined" ? data.clone() : new _word32array__WEBPACK_IMPORTED_MODULE_0__["Word32Array"]();
        this._nBytes = typeof nBytes === "number" ? nBytes : 0;
    }
    /**
     * Resets this block algorithm's data buffer to its initial state.
     *
     * @example
     *   bufferedBlockAlgorithm.reset();
     */
    reset(data, nBytes) {
        this._data = typeof data !== "undefined" ? data.clone() : new _word32array__WEBPACK_IMPORTED_MODULE_0__["Word32Array"]();
        this._nBytes = typeof nBytes === "number" ? nBytes : 0;
    }
    /**
     * Adds new data to this block algorithm's buffer.
     *
     * @param {IWord32Array|string} data The data to append. Strings are converted to a WordArray using UTF-8.
     * @example
     *   bufferedBlockAlgorithm.append('data');
     *   bufferedBlockAlgorithm.append(wordArray);
     */
    append(data) {
        if (typeof data === "string") {
            data = _encoder_utf8__WEBPACK_IMPORTED_MODULE_1__["Utf8"].parse(data);
        }
        this._data.concat(data);
        this._nBytes += data.length();
    }
    /**
     * Processes available data blocks.
     * This method invokes doProcessBlock(offset), which must be implemented by a concrete subtype.
     *
     * @param {boolean?} doFlush Whether all blocks and partial blocks should be processed.
     * @return {IWord32Array} The processed data.
     * @example
     *   var processedData = bufferedBlockAlgorithm.process();
     *   var processedData = bufferedBlockAlgorithm.process(!!'flush');
     */
    process(doFlush) {
        let processedWords;
        const words = this._data.raw();
        const nSigBytes = this._data.length();
        const blockSize = this._blockSize;
        const blockSizeByte = this._blockSize * 4;
        let nBlocksReady = nSigBytes / blockSizeByte;
        if (doFlush) {
            // Round up to include partial blocks
            nBlocksReady = Math.ceil(nBlocksReady);
        }
        else {
            nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        }
        // Count words ready
        const nWordsReady = nBlocksReady * blockSize;
        // Count bytes ready
        const nBytesReady = Math.min(nWordsReady * 4, nSigBytes);
        // Process blocks
        if (nWordsReady) {
            for (let offset = 0; offset < nWordsReady; offset += blockSize) {
                // Perform concrete-algorithm logic
                this.doProcessBlock(words, offset);
            }
            // Remove processed words
            processedWords = words.splice(0, nWordsReady);
            this._data.setSignificantBytes(this._data.length() - nBytesReady);
        }
        // Return processed words
        return new _word32array__WEBPACK_IMPORTED_MODULE_0__["Word32Array"](processedWords, nBytesReady);
    }
}


/***/ }),

/***/ "./src/lib/algorithm/hasher.ts":
/*!*************************************!*\
  !*** ./src/lib/algorithm/hasher.ts ***!
  \*************************************/
/*! exports provided: Hasher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hasher", function() { return Hasher; });
/* harmony import */ var _bufferedBlockAlgorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bufferedBlockAlgorithm */ "./src/lib/algorithm/bufferedBlockAlgorithm.ts");

class Hasher extends _bufferedBlockAlgorithm__WEBPACK_IMPORTED_MODULE_0__["BufferedBlockAlgorithm"] {
    constructor(blockSize, data, nBytes) {
        super(data, nBytes);
        this._blockSize = 512 / 32;
        if (typeof blockSize === "number") {
            this._blockSize = blockSize;
        }
        this.reset(data, nBytes);
    }
    get blockSize() {
        return this._blockSize;
    }
    /**
     * Resets this hasher to its initial state.
     *
     * @example
     *   hasher.reset();
     */
    reset(data, nBytes) {
        // Reset data buffer
        super.reset.call(this, data, nBytes);
        // Perform concrete-hasher logic
        this.doReset();
    }
    /**
     * Updates this hasher with a message.
     *
     * @param {IWord32Array|string} messageUpdate The message to append.
     * @return {Hasher} This hasher.
     * @example
     *   hasher.update('message');
     *   hasher.update(wordArray);
     */
    update(messageUpdate) {
        this.append(messageUpdate);
        this.process();
        return this;
    }
    /**
     * Finalizes the hash computation.
     * Note that the finalize operation is effectively a destructive, read-once operation.
     *
     * @param {IWord32Array|string?} messageUpdate (Optional) A final message update.
     * @return {IWord32Array} The hash.
     * @example
     *   var hash = hasher.finalize();
     *   var hash = hasher.finalize('message');
     *   var hash = hasher.finalize(wordArray);
     */
    finalize(messageUpdate) {
        // Final message update
        if (messageUpdate) {
            this.append(messageUpdate);
        }
        // Perform concrete-hasher logic
        return this.doFinalize();
    }
}


/***/ }),

/***/ "./src/lib/encoder/hex.ts":
/*!********************************!*\
  !*** ./src/lib/encoder/hex.ts ***!
  \********************************/
/*! exports provided: Hex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hex", function() { return Hex; });
/* harmony import */ var _word32array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../word32array */ "./src/lib/word32array.ts");

const Hex = {
    /**
     * Converts a word array to a hex string.
     *
     * @param {number[]} words An array of 32-bit words.
     * @param {number} nSig Significant bytes
     * @return {string} The hex string.
     * @example
     *   var hexString = Hex.stringify([0x293892], 6);
     */
    stringify(words, nSig) {
        const hexChars = [];
        for (let i = 0; i < nSig; i++) {
            const byte = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            hexChars.push((byte >>> 4).toString(16));
            hexChars.push((byte & 0x0f).toString(16));
        }
        return hexChars.join("");
    },
    /**
     * Converts a hex string to a word array.
     *
     * @param {string} hexStr The hex string.
     * @return {IWord32Array} The word array.
     * @example
     *   var wordArray = Hex.parse(hexString);
     */
    parse(hexStr) {
        const Len = hexStr.length;
        const words = [];
        for (let i = 0; i < Len; i += 2) {
            words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
        }
        return new _word32array__WEBPACK_IMPORTED_MODULE_0__["Word32Array"](words, Len / 2);
    }
};


/***/ }),

/***/ "./src/lib/encoder/latin1.ts":
/*!***********************************!*\
  !*** ./src/lib/encoder/latin1.ts ***!
  \***********************************/
/*! exports provided: Latin1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Latin1", function() { return Latin1; });
/* harmony import */ var _word32array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../word32array */ "./src/lib/word32array.ts");

const Latin1 = {
    /**
     * Converts a word array to a Latin1 string.
     *
     * @param {number[]} words An array of 32-bit words.
     * @param {number} nSig Significant bytes
     * @return {string} The Latin1 string.
     * @example
     *   var latin1String = Latin1.stringify([0x293892], 6);
     */
    stringify(words, nSig) {
        const latin1Chars = [];
        for (let i = 0; i < nSig; i++) {
            const byte = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            latin1Chars.push(String.fromCharCode(byte));
        }
        return latin1Chars.join("");
    },
    /**
     * Converts a latin1 string to a word array.
     *
     * @param {string} latin1Str The latin1 string.
     * @return {IWord32Array} The word array.
     * @example
     *   var wordArray = Latin1.parse(latin1Str);
     */
    parse(latin1Str) {
        const Len = latin1Str.length;
        const words = [];
        for (let i = 0; i < Len; i++) {
            words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
        }
        return new _word32array__WEBPACK_IMPORTED_MODULE_0__["Word32Array"](words, Len);
    }
};


/***/ }),

/***/ "./src/lib/encoder/utf8.ts":
/*!*********************************!*\
  !*** ./src/lib/encoder/utf8.ts ***!
  \*********************************/
/*! exports provided: Utf8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utf8", function() { return Utf8; });
/* harmony import */ var _latin1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./latin1 */ "./src/lib/encoder/latin1.ts");

const Utf8 = {
    /**
     * Converts a word array to a UTF-8 string.
     *
     * @param {number[]} words An array of 32-bit words.
     * @param {number} nSig Significant bytes
     * @return {string} The UTF-8 string.
     * @example
     *   var utf8String = Utf8.stringify([0x293892], 6);
     */
    stringify(words, nSig) {
        try {
            return decodeURIComponent(escape(_latin1__WEBPACK_IMPORTED_MODULE_0__["Latin1"].stringify(words, nSig)));
        }
        catch (e) {
            throw new Error("Malformed UTF-8 data");
        }
    },
    /**
     * Converts a UTF-8 string to a word array.
     *
     * @param {string} utf8Str The UTF-8 string.
     * @return {IWord32Array} The word array.
     * @example
     *   var wordArray = Utf8.parse(utf8Str);
     */
    parse(utf8Str) {
        return _latin1__WEBPACK_IMPORTED_MODULE_0__["Latin1"].parse(unescape(encodeURIComponent(utf8Str)));
    }
};


/***/ }),

/***/ "./src/lib/random.ts":
/*!***************************!*\
  !*** ./src/lib/random.ts ***!
  \***************************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
function makeRandFunction() {
    const crypto = (() => {
        // Native crypto from window (Browser)
        if (typeof window !== "undefined") {
            const c = window.crypto || window.msCrypto;
            if (!c) {
                throw new Error("Crypto module not found");
            }
            return c;
        }
        else if (typeof global !== "undefined" && global.crypto) {
            return global.crypto;
        }
        throw new Error("Unable to find crypto module");
    })();
    if (typeof crypto.getRandomValues === "function") {
        return function rand() {
            return crypto.getRandomValues(new Uint32Array(1))[0];
        };
    }
    if (typeof crypto.randomBytes === "function") {
        return function rand() {
            return crypto.randomBytes(4).readInt32LE();
        };
    }
    throw new Error("Unable to find crypto module");
}
const random = makeRandFunction();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/lib/word32array.ts":
/*!********************************!*\
  !*** ./src/lib/word32array.ts ***!
  \********************************/
/*! exports provided: Word32Array */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word32Array", function() { return Word32Array; });
/* harmony import */ var _encoder_hex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encoder/hex */ "./src/lib/encoder/hex.ts");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random */ "./src/lib/random.ts");


/**
 * An array of 32bit words
 */
class Word32Array {
    /**
     * Initializes a newly created word array.
     *
     * @param {Array} words (Optional) An array of 32-bit words.
     * @param {number} nSignificantBytes (Optional) The number of significant bytes in the words.
     *
     * @example
     *   var wordArray = new WordArray();
     *   var wordArray = new WordArray([0x00010203, 0x04050607]);
     *   var wordArray = new WordArray([0x00010203, 0x04050607], 6);
     */
    constructor(words, nSignificantBytes) {
        this._words = words || [];
        this._nSignificantBytes = typeof nSignificantBytes === "number" ? nSignificantBytes : this._words.length * 4;
    }
    /**
     * Get raw reference of internal words.
     * Modification of this raw array will affect internal words.
     */
    raw() {
        return this._words;
    }
    /**
     * Return a copy of an array of 32-bit words.
     */
    slice() {
        return this._words.slice();
    }
    /**
     * Return significantBytes
     */
    length() {
        return this._nSignificantBytes;
    }
    /**
     * Set significant bytes
     * @param {number} n - significant bytes
     */
    setSignificantBytes(n) {
        this._nSignificantBytes = n;
    }
    /**
     * Converts this word array to a string.
     *
     * @param {IEncoder?} encoder The encoding strategy to use. Default: CryptoJS.enc.Hex
     * @return {string} The stringified word array.
     * @example
     *   var string = wordArray + '';
     *   var string = wordArray.toString();
     *   var string = wordArray.toString(CryptoJS.enc.Utf8);
     */
    toString(encoder) {
        if (!encoder) {
            return _encoder_hex__WEBPACK_IMPORTED_MODULE_0__["Hex"].stringify(this._words, this._nSignificantBytes);
        }
        return encoder.stringify(this._words, this._nSignificantBytes);
    }
    /**
     * Concatenates a word array to this word array.
     *
     * @param {IWord32Array} w The word array to append.
     * @return {IWord32Array} This word array.
     * @example
     *   wordArray1.concat(wordArray2);
     */
    concat(w) {
        const words = w.slice();
        const N = w.length();
        this.clamp();
        if (this._nSignificantBytes % 4) {
            // Copy one byte at a time
            for (let i = 0; i < N; i++) {
                const b = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                this._words[(this._nSignificantBytes + i) >>> 2] |= b << (24 - ((this._nSignificantBytes + i) % 4) * 8);
            }
        }
        else {
            // Copy one word at a time
            for (let i = 0; i < N; i += 4) {
                this._words[(this._nSignificantBytes + i) >>> 2] = words[i >>> 2];
            }
        }
        this._nSignificantBytes += N;
        // Chainable
        return this;
    }
    /**
     * Removes insignificant bits.
     *
     * @example
     *   wordArray.clamp();
     */
    clamp() {
        const n = this._nSignificantBytes;
        this._words[n >>> 2] &= 0xffffffff << (32 - (n % 4) * 8);
        this._words.length = Math.ceil(n / 4);
    }
    /**
     * Creates a copy of this word array.
     *
     * @return {IWord32Array} The clone.
     * @example
     *   var clone = wordArray.clone();
     */
    clone() {
        return new Word32Array(this._words.slice(), this._nSignificantBytes);
    }
    /**
     * Creates a word array filled with random bytes.
     *
     * @param {number} nBytes The number of random bytes to generate.
     * @return {IWord32Array} The random word array.
     * @static
     * @example
     *   var wordArray = CryptoJS.lib.WordArray.random(16);
     */
    static random(nBytes) {
        const words = [];
        for (let i = 0; i < nBytes; i++) {
            words.push(Object(_random__WEBPACK_IMPORTED_MODULE_1__["random"])());
        }
        return new Word32Array(words, nBytes);
    }
}


/***/ }),

/***/ "./src/sha256.ts":
/*!***********************!*\
  !*** ./src/sha256.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SHA256; });
/* harmony import */ var _lib_algorithm_hasher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/algorithm/hasher */ "./src/lib/algorithm/hasher.ts");
/* harmony import */ var _lib_word32array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/word32array */ "./src/lib/word32array.ts");


// Hash values
const H = [];
// Round constants
const K = [];
function isPrime(n) {
    const sqrtN = Math.sqrt(n);
    for (let factor = 2; factor <= sqrtN; factor++) {
        if (!(n % factor)) {
            return false;
        }
    }
    return true;
}
function getFractionalBits(n) {
    return ((n - (n | 0)) * 0x100000000) | 0;
}
(function computeRoundConstants() {
    let n = 2;
    let nPrime = 0;
    while (nPrime < 64) {
        if (isPrime(n)) {
            if (nPrime < 8) {
                H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
            }
            K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
            nPrime++;
        }
        n++;
    }
})();
// Reusable object
const W = [];
class SHA256 extends _lib_algorithm_hasher__WEBPACK_IMPORTED_MODULE_0__["Hasher"] {
    constructor(hash, blockSize, data, nBytes) {
        super(blockSize, data, nBytes);
        this._hash = new _lib_word32array__WEBPACK_IMPORTED_MODULE_1__["Word32Array"](H.slice(0));
        if (typeof hash !== "undefined") {
            this._hash = hash.clone();
        }
    }
    doReset() {
        this._hash = new _lib_word32array__WEBPACK_IMPORTED_MODULE_1__["Word32Array"](H.slice(0));
    }
    doProcessBlock(words, offset) {
        const _H = this._hash.raw();
        let a = _H[0];
        let b = _H[1];
        let c = _H[2];
        let d = _H[3];
        let e = _H[4];
        let f = _H[5];
        let g = _H[6];
        let h = _H[7];
        for (let i = 0; i < 64; i++) {
            if (i < 16) {
                W[i] = words[offset + i] | 0;
            }
            else {
                const gamma0x = W[i - 15];
                const gamma0 = ((gamma0x << 25) | (gamma0x >>> 7))
                    ^ ((gamma0x << 14) | (gamma0x >>> 18))
                    ^ (gamma0x >>> 3);
                const gamma1x = W[i - 2];
                const gamma1 = ((gamma1x << 15) | (gamma1x >>> 17))
                    ^ ((gamma1x << 13) | (gamma1x >>> 19))
                    ^ (gamma1x >>> 10);
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
            }
            const ch = (e & f) ^ (~e & g);
            const maj = (a & b) ^ (a & c) ^ (b & c);
            const sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
            const sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7) | (e >>> 25));
            const t1 = h + sigma1 + ch + K[i] + W[i];
            const t2 = sigma0 + maj;
            h = g;
            g = f;
            f = e;
            e = (d + t1) | 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) | 0;
        }
        // Intermediate hash value
        _H[0] = (_H[0] + a) | 0;
        _H[1] = (_H[1] + b) | 0;
        _H[2] = (_H[2] + c) | 0;
        _H[3] = (_H[3] + d) | 0;
        _H[4] = (_H[4] + e) | 0;
        _H[5] = (_H[5] + f) | 0;
        _H[6] = (_H[6] + g) | 0;
        _H[7] = (_H[7] + h) | 0;
    }
    doFinalize() {
        const words = this._data.raw();
        const nBitsTotal = this._nBytes * 8;
        const nBitsLeft = this._data.length() * 8;
        // Add padding
        words[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
        words[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
        words[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
        this._data.setSignificantBytes(words.length * 4);
        // Hash final blocks
        this.process();
        // Return final computed hash
        return this._hash;
    }
    clone() {
        return new SHA256(this._hash, this._blockSize, this._data, this._nBytes);
    }
    static hash(message) {
        return new SHA256().finalize(message);
    }
}


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=HMACSHA256.js.map