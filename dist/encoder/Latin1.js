!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.encoder=t():(n.JsCrypto=n.JsCrypto||{},n.JsCrypto.encoder=t())}(this,(function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"u",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.u)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)r.d(e,i,function(t){return n[t]}.bind(null,i));return e},r.n=function(n){var t=n&&n.u?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=6)}([function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var e=r(1),i=r(2),o=function(){function n(n,t){if(Array.isArray(n)||!n)return this.h=Array.isArray(n)?n:[],void(this.v="number"==typeof t?t:4*this.h.length);var r;if(n instanceof ArrayBuffer)r=new Uint8Array(n);else{if(!(n instanceof Uint8Array||n instanceof Int8Array||n instanceof Uint8ClampedArray||n instanceof Int16Array||n instanceof Uint16Array||n instanceof Int32Array||n instanceof Uint32Array||n instanceof Float32Array||n instanceof Float64Array))throw new Error("Invalid argument");r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}if(!r)return this.h=[],void(this.v=0);for(var e=r.byteLength,i=[],o=0;o<e;o++)i[o>>>2]|=r[o]<<24-o%4*8;this.h=i,this.v=e}return Object.defineProperty(n.prototype,"nSigBytes",{get:function(){return this.v},set:function(n){this.v=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"words",{get:function(){return this.h},enumerable:!1,configurable:!0}),n.prototype.toString=function(n){return n?n.stringify(this):e.a.stringify(this)},n.prototype.toUint8Array=function(){for(var n=this.h,t=this.v,r=new Uint8Array(t),e=0;e<t;e++)r[e]=n[e>>>2]>>>24-e%4*8&255;return r},n.prototype.concat=function(n){var t=n.words.slice(),r=n.nSigBytes;if(this.clamp(),this.v%4)for(var e=0;e<r;e++){var i=t[e>>>2]>>>24-e%4*8&255;this.h[this.v+e>>>2]|=i<<24-(this.v+e)%4*8}else for(e=0;e<r;e+=4)this.h[this.v+e>>>2]=t[e>>>2];return this.v+=r,this},n.prototype.clamp=function(){var n=this.v;this.h[n>>>2]&=4294967295<<32-n%4*8,this.h.length=Math.ceil(n/4)},n.prototype.clone=function(){return new n(this.h.slice(),this.v)},n.random=function(t){for(var r=[],e=0;e<t;e+=4)r.push(Object(i.a)());return new n(r,t)},n}()},function(n,t,r){"use strict";r.d(t,"a",(function(){return i}));var e=r(0),i={stringify:function(n){for(var t=n.nSigBytes,r=n.words,e=[],i=0;i<t;i++){var o=r[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(n){for(var t=n.length,r=[],i=0;i<t;i+=2)r[i>>>3]|=parseInt(n.substr(i,2),16)<<24-i%8*4;return new e.a(r,t/2)}}},function(n,t,r){"use strict";(function(n){r.d(t,"a",(function(){return e}));var e=function(){if("undefined"!=typeof window){var t=window.crypto||window.msCrypto;if(!t)throw new Error("Crypto module not found");return function(){return t.getRandomValues(new Uint32Array(1))[0]}}return void 0!==n&&n.crypto?function(){return n.crypto.randomBytes(4).readInt32LE()}:function(){return require("crypto").randomBytes(4).readInt32LE()}}()}).call(this,r(3))},function(n,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}n.exports=r},function(n,t,r){"use strict";r.d(t,"a",(function(){return i}));var e=r(0),i={stringify:function(n){for(var t=n.nSigBytes,r=n.words,e=[],i=0;i<t;i++){var o=r[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(n){for(var t=n.length,r=[],i=0;i<t;i++)r[i>>>2]|=(255&n.charCodeAt(i))<<24-i%4*8;return new e.a(r,t)}}},,function(n,t,r){"use strict";r.r(t);var e=r(4);r.d(t,"Latin1",(function(){return e.a}))}])}));