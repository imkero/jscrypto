!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.JsCrypto=t():n.JsCrypto=t()}(this,(function(){return function(n){var t={};function r(i){if(t[i])return t[i].exports;var e=t[i]={i:i,l:!1,exports:{}};return n[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=t,r.d=function(n,t,i){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"u",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.u)return n;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)r.d(i,e,function(t){return n[t]}.bind(null,e));return i},r.n=function(n){var t=n&&n.u?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="",r(r.s=16)}([,function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(2),e=r(7),o=function(){function n(n,t){if(Array.isArray(n)||!n)return this.h=n||[],void(this.v="number"==typeof t?t:4*this.h.length);var r;if(n instanceof ArrayBuffer?r=new Uint8Array(n):(n instanceof Int8Array||n instanceof Uint8ClampedArray||n instanceof Int16Array||n instanceof Uint16Array||n instanceof Int32Array||n instanceof Uint32Array||n instanceof Float32Array||n instanceof Float64Array)&&(r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength)),!r)return this.h=[],void(this.v=0);for(var i=r.byteLength,e=[],o=0;o<i;o++)e[o>>>2]|=r[o]<<24-o%4*8;this.h=e,this.v=i}return Object.defineProperty(n.prototype,"nSigBytes",{get:function(){return this.v},set:function(n){this.v=n},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"words",{get:function(){return this.h},enumerable:!1,configurable:!0}),n.prototype.toString=function(n){return n?n.stringify(this):i.a.stringify(this)},n.prototype.concat=function(n){var t=n.words.slice(),r=n.nSigBytes;if(this.clamp(),this.v%4)for(var i=0;i<r;i++){var e=t[i>>>2]>>>24-i%4*8&255;this.h[this.v+i>>>2]|=e<<24-(this.v+i)%4*8}else for(i=0;i<r;i+=4)this.h[this.v+i>>>2]=t[i>>>2];return this.v+=r,this},n.prototype.clamp=function(){var n=this.v;this.h[n>>>2]&=4294967295<<32-n%4*8,this.h.length=Math.ceil(n/4)},n.prototype.clone=function(){return new n(this.h.slice(),this.v)},n.random=function(t){for(var r=[],i=0;i<t;i+=4)r.push(Object(e.a)());return new n(r,t)},n}()},function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var i=r(1),e={stringify:function(n){for(var t=n.nSigBytes,r=n.words,i=[],e=0;e<t;e++){var o=r[e>>>2]>>>24-e%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(n){for(var t=n.length,r=[],e=0;e<t;e+=2)r[e>>>3]|=parseInt(n.substr(e,2),16)<<24-e%8*4;return new i.a(r,t/2)}}},function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var i=r(1),e={stringify:function(n){for(var t=n.nSigBytes,r=n.words,i=[],e=0;e<t;e++){var o=r[e>>>2]>>>24-e%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(n){for(var t=n.length,r=[],e=0;e<t;e++)r[e>>>2]|=(255&n.charCodeAt(e))<<24-e%4*8;return new i.a(r,t)}}},function(n,t,r){"use strict";r.d(t,"a",(function(){return e}));var i=r(3),e={stringify:function(n){try{return decodeURIComponent(escape(i.a.stringify(n)))}catch(n){throw new Error("Malformed UTF-8 data")}},parse:function(n){return i.a.parse(unescape(encodeURIComponent(n)))}}},,function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(1),e=r(4),o=function(){function n(n){this.j=0,this.O=0,this.g=n,this.A=n&&void 0!==n.data?n.data.clone():new i.a,this.M=n&&"number"==typeof n.nBytes?n.nBytes:0}return Object.defineProperty(n.prototype,"blockSize",{get:function(){return this.O},enumerable:!1,configurable:!0}),n.prototype.reset=function(n,t){this.A=void 0!==n?n.clone():new i.a,this.M="number"==typeof t?t:0},n.prototype._=function(n){var t="string"==typeof n?e.a.parse(n):n;this.A.concat(t),this.M+=t.nSigBytes},n.prototype.U=function(n){var t,r=this.A.words,e=this.A.nSigBytes,o=this.O,u=e/(4*this.O),f=(u=n?Math.ceil(u):Math.max((0|u)-this.j,0))*o,c=Math.min(4*f,e);if(f){for(var a=0;a<f;a+=o)this.S(r,a);t=r.splice(0,f),this.A.nSigBytes-=c}return new i.a(t,c)},n.prototype.S=function(n,t){throw new Error("Not implemented")},n}()},function(n,t,r){"use strict";(function(n){r.d(t,"a",(function(){return i}));var i=function(){if("undefined"!=typeof window){var t=window.crypto||window.msCrypto;if(!t)throw new Error("Crypto module not found");return function(){return t.getRandomValues(new Uint32Array(1))[0]}}return void 0!==n&&n.crypto?function(){return n.crypto.randomBytes(4).readInt32LE()}:function(){return require("crypto").randomBytes(4).readInt32LE()}}()}).call(this,r(13))},function(n,t,r){"use strict";r.d(t,"a",(function(){return u}));var i,e=r(6),o=(i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])})(n,t)},function(n,t){function r(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),u=function(n){function t(t){var r=n.call(this,t)||this;return r.O=16,r.g=t,t&&"number"==typeof t.blockSize&&(r.O=t.blockSize),r.reset(t?t.data:void 0,t?t.nBytes:void 0),r}return o(t,n),Object.defineProperty(t.prototype,"blockSize",{get:function(){return this.O},enumerable:!1,configurable:!0}),t.prototype.reset=function(t,r){n.prototype.reset.call(this,t,r),this.I()},t.prototype.update=function(n){return this._(n),this.U(),this},t.prototype.finalize=function(n){return n&&this._(n),this.C()},t.prototype.I=function(){throw new Error("Not implemented")},t.prototype.C=function(){throw new Error("Not implemented")},t}(e.a)},,,,,function(n,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}n.exports=r},,,function(n,t,r){"use strict";r.r(t),r.d(t,"MD5",(function(){return v}));var i,e=r(1),o=r(8),u=(i=function(n,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])})(n,t)},function(n,t){function r(){this.constructor=n}i(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),f=[];function c(n,t,r,i,e,o,u){var f=n+(t&r|~t&i)+e+u;return(f<<o|f>>>32-o)+t}function a(n,t,r,i,e,o,u){var f=n+(t&i|r&~i)+e+u;return(f<<o|f>>>32-o)+t}function s(n,t,r,i,e,o,u){var f=n+(t^r^i)+e+u;return(f<<o|f>>>32-o)+t}function h(n,t,r,i,e,o,u){var f=n+(r^(t|~i))+e+u;return(f<<o|f>>>32-o)+t}!function(){for(var n=0;n<64;n++)f[n]=4294967296*Math.abs(Math.sin(n+1))|0}();var v=function(n){function t(t){var r=n.call(this,t)||this;return r.F=new e.a([1732584193,4023233417,2562383102,271733878]),t&&void 0!==t.hash&&(r.F=t.hash.clone()),r}return u(t,n),t.prototype.I=function(){this.F=new e.a([1732584193,4023233417,2562383102,271733878])},t.prototype.S=function(n,t){for(var r=0;r<16;r++){var i=t+r,e=n[i];n[i]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8)}var o=this.F.words,u=n[t],v=n[t+1],b=n[t+2],l=n[t+3],y=n[t+4],d=n[t+5],w=n[t+6],p=n[t+7],m=n[t+8],j=n[t+9],O=n[t+10],g=n[t+11],A=n[t+12],M=n[t+13],_=n[t+14],U=n[t+15],S=o[0],I=o[1],E=o[2],x=o[3];S=c(S,I,E,x,u,7,f[0]),x=c(x,S,I,E,v,12,f[1]),E=c(E,x,S,I,b,17,f[2]),I=c(I,E,x,S,l,22,f[3]),S=c(S,I,E,x,y,7,f[4]),x=c(x,S,I,E,d,12,f[5]),E=c(E,x,S,I,w,17,f[6]),I=c(I,E,x,S,p,22,f[7]),S=c(S,I,E,x,m,7,f[8]),x=c(x,S,I,E,j,12,f[9]),E=c(E,x,S,I,O,17,f[10]),I=c(I,E,x,S,g,22,f[11]),S=c(S,I,E,x,A,7,f[12]),x=c(x,S,I,E,M,12,f[13]),E=c(E,x,S,I,_,17,f[14]),S=a(S,I=c(I,E,x,S,U,22,f[15]),E,x,v,5,f[16]),x=a(x,S,I,E,w,9,f[17]),E=a(E,x,S,I,g,14,f[18]),I=a(I,E,x,S,u,20,f[19]),S=a(S,I,E,x,d,5,f[20]),x=a(x,S,I,E,O,9,f[21]),E=a(E,x,S,I,U,14,f[22]),I=a(I,E,x,S,y,20,f[23]),S=a(S,I,E,x,j,5,f[24]),x=a(x,S,I,E,_,9,f[25]),E=a(E,x,S,I,l,14,f[26]),I=a(I,E,x,S,m,20,f[27]),S=a(S,I,E,x,M,5,f[28]),x=a(x,S,I,E,b,9,f[29]),E=a(E,x,S,I,p,14,f[30]),S=s(S,I=a(I,E,x,S,A,20,f[31]),E,x,d,4,f[32]),x=s(x,S,I,E,m,11,f[33]),E=s(E,x,S,I,g,16,f[34]),I=s(I,E,x,S,_,23,f[35]),S=s(S,I,E,x,v,4,f[36]),x=s(x,S,I,E,y,11,f[37]),E=s(E,x,S,I,p,16,f[38]),I=s(I,E,x,S,O,23,f[39]),S=s(S,I,E,x,M,4,f[40]),x=s(x,S,I,E,u,11,f[41]),E=s(E,x,S,I,l,16,f[42]),I=s(I,E,x,S,w,23,f[43]),S=s(S,I,E,x,j,4,f[44]),x=s(x,S,I,E,A,11,f[45]),E=s(E,x,S,I,U,16,f[46]),S=h(S,I=s(I,E,x,S,b,23,f[47]),E,x,u,6,f[48]),x=h(x,S,I,E,p,10,f[49]),E=h(E,x,S,I,_,15,f[50]),I=h(I,E,x,S,d,21,f[51]),S=h(S,I,E,x,A,6,f[52]),x=h(x,S,I,E,l,10,f[53]),E=h(E,x,S,I,O,15,f[54]),I=h(I,E,x,S,v,21,f[55]),S=h(S,I,E,x,m,6,f[56]),x=h(x,S,I,E,U,10,f[57]),E=h(E,x,S,I,w,15,f[58]),I=h(I,E,x,S,M,21,f[59]),S=h(S,I,E,x,y,6,f[60]),x=h(x,S,I,E,g,10,f[61]),E=h(E,x,S,I,b,15,f[62]),I=h(I,E,x,S,j,21,f[63]),o[0]=o[0]+S|0,o[1]=o[1]+I|0,o[2]=o[2]+E|0,o[3]=o[3]+x|0},t.prototype.C=function(){var n=this.A,t=n.words,r=8*this.M,i=8*n.nSigBytes;t[i>>>5]|=128<<24-i%32;var e=Math.floor(r/4294967296),o=r;t[15+(i+64>>>9<<4)]=16711935&(e<<8|e>>>24)|4278255360&(e<<24|e>>>8),t[14+(i+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),n.nSigBytes=4*(t.length+1),this.U();for(var u=this.F,f=u.words,c=0;c<4;c++){var a=f[c];f[c]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}return u},t.prototype.clone=function(){return new t({hash:this.F,blockSize:this.O,data:this.A,nBytes:this.M})},t.hash=function(n){return(new t).finalize(n)},t}(o.a)}])}));