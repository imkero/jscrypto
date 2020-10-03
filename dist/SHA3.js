!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.JsCrypto=n():t.JsCrypto=n()}(this,(function(){return function(t){var n={};function r(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=t,r.c=n,r.d=function(t,n,i){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"u",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.u)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)r.d(i,e,function(n){return t[n]}.bind(null,e));return i},r.n=function(t){var n=t&&t.u?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=35)}({0:function(t,n,r){"use strict";r.d(n,"a",(function(){return o})),r.d(n,"b",(function(){return u}));var i=r(2),e=r(1),o=function(){function t(t,n){this.high=t,this.low=n}return t.prototype.clone=function(){return new t(this.high,this.low)},t}(),u=function(){function t(t,n){this.h=t||[],this.v="number"==typeof n?n:8*this.h.length}return Object.defineProperty(t.prototype,"nSigBytes",{get:function(){return this.v},set:function(t){this.v=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"words",{get:function(){return this.h},enumerable:!1,configurable:!0}),t.prototype.to32=function(){for(var t=[],n=0;n<this.h.length;n++){var r=this.h[n];t.push(r.high),t.push(r.low)}return new e.a(t,this.v)},t.prototype.toString=function(t){return t?t.stringify(this.to32()):i.a.stringify(this.to32())},t.prototype.clone=function(){for(var n=this.h.slice(),r=0;r<n.length;r++)n[r]=n[r].clone();return new t(n,this.v)},t}()},1:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var i=r(2),e=r(5),o=function(){function t(t,n){this.h=t||[],this.v="number"==typeof n?n:4*this.h.length}return Object.defineProperty(t.prototype,"nSigBytes",{get:function(){return this.v},set:function(t){this.v=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"words",{get:function(){return this.h},enumerable:!1,configurable:!0}),t.prototype.toString=function(t){return t?t.stringify(this):i.a.stringify(this)},t.prototype.concat=function(t){var n=t.words.slice(),r=t.nSigBytes;if(this.clamp(),this.v%4)for(var i=0;i<r;i++){var e=n[i>>>2]>>>24-i%4*8&255;this.h[this.v+i>>>2]|=e<<24-(this.v+i)%4*8}else for(i=0;i<r;i+=4)this.h[this.v+i>>>2]=n[i>>>2];return this.v+=r,this},t.prototype.clamp=function(){var t=this.v;this.h[t>>>2]&=4294967295<<32-t%4*8,this.h.length=Math.ceil(t/4)},t.prototype.clone=function(){return new t(this.h.slice(),this.v)},t.random=function(n){for(var r=[],i=0;i<n;i++)r.push(Object(e.a)());return new t(r,n)},t}()},2:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));var i=r(1),e={stringify:function(t){for(var n=t.nSigBytes,r=t.words,i=[],e=0;e<n;e++){var o=r[e>>>2]>>>24-e%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new i.a(r,n/2)}}},3:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));var i=r(1),e={stringify:function(t){for(var n=t.nSigBytes,r=t.words,i=[],e=0;e<n;e++){var o=r[e>>>2]>>>24-e%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new i.a(r,n)}}},35:function(t,n,r){"use strict";r.r(n),r.d(n,"SHA3",(function(){return v}));var i,e=r(0),o=r(6),u=r(1),f=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),c=[],s=[],a=[];!function(){for(var t=1,n=0,r=0;r<24;r++){c[t+5*n]=(r+1)*(r+2)/2%64;var i=(2*t+3*n)%5;t=n%5,n=i}for(var o=0;o<5;o++)for(var u=0;u<5;u++)s[o+5*u]=u+(2*o+3*u)%5*5;for(var f=1,h=0;h<24;h++){for(var v=0,b=0,w=0;w<7;w++){if(1&f){var l=(1<<w)-1;l<32?b^=1<<l:v^=1<<l-32}128&f?f=f<<1^113:f<<=1}a[h]=new e.a(v,b)}}();var h=[];!function(){for(var t=0;t<25;t++)h[t]=new e.a(0,0)}();var v=function(t){function n(n){var r=t.call(this,n)||this;if(r.j=32,r.g=[],r.O=512,r.S=n,n){if(void 0!==n.outputLength){if(![224,256,384,512].includes(n.outputLength))throw new Error("Unsupported output length.");r.O=n.outputLength}void 0!==n.state&&(r.g=n.state.map((function(t){return t.clone()})))}if(0===r.g.length)for(var i=0;i<25;i++)r.g[i]=new e.a(0,0);return r.j=(1600-2*r.O)/32,r}return f(n,t),n.prototype._=function(){this.g=[];for(var t=0;t<25;t++)this.g[t]=new e.a(0,0);this.j=(1600-2*this.O)/32},n.prototype.M=function(t,n){for(var r=this.g,i=this.j/2,e=0;e<i;e++){var o=t[n+2*e],u=t[n+2*e+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),u=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8),r[e].high^=u,r[e].low^=o}for(var f=0;f<24;f++){for(var v=0;v<5;v++){for(var b=0,w=0,l=0;l<5;l++){b^=(x=r[v+5*l]).high,w^=x.low}var d=h[v];d.high=b,d.low=w}for(v=0;v<5;v++){var p=h[(v+4)%5],y=h[(v+1)%5],m=y.high,j=y.low;for(b=p.high^(m<<1|j>>>31),w=p.low^(j<<1|m>>>31),l=0;l<5;l++){(x=r[v+5*l]).high^=b,x.low^=w}}for(var g=1;g<25;g++){b=void 0,w=void 0;var O=r[g].high,S=r[g].low,_=c[g];_<32?(b=O<<_|S>>>32-_,w=S<<_|O>>>32-_):(b=S<<_-32|O>>>64-_,w=O<<_-32|S>>>64-_);var M=h[s[g]];M.high=b,M.low=w}var E=h[0],U=r[0];E.high=U.high,E.low=U.low;for(v=0;v<5;v++)for(l=0;l<5;l++){var x=r[g=v+5*l],A=h[g],k=h[(v+1)%5+5*l],z=h[(v+2)%5+5*l];x.high=A.high^~k.high&z.high,x.low=A.low^~k.low&z.low}var B=r[0],C=a[f];B.high^=C.high,B.low^=C.low}},n.prototype.U=function(){var t=this.A,n=t.words,r=8*t.nSigBytes,i=32*this.blockSize;n[r>>>5]|=1<<24-r%32,n[(Math.ceil((r+1)/i)*i>>>5)-1]|=128,t.nSigBytes=4*n.length,this.k();for(var e=this.g,o=this.O/8,f=o/8,c=[],s=0;s<f;s++){var a=e[s],h=a.high,v=a.low;h=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8),v=16711935&(v<<8|v>>>24)|4278255360&(v<<24|v>>>8),c.push(v),c.push(h)}return new u.a(c,o)},n.prototype.clone=function(){return new n({outputLength:this.O,state:this.g,blockSize:this.j,data:this.A,nBytes:this.B})},n.hash=function(t,r){return new n(r).finalize(t)},n}(o.a)},4:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));var i=r(3),e={stringify:function(t){try{return decodeURIComponent(escape(i.a.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return i.a.parse(unescape(encodeURIComponent(t)))}}},5:function(t,n,r){"use strict";(function(t){r.d(n,"a",(function(){return i}));var i=function(){if("undefined"!=typeof window){var n=window.crypto||window.msCrypto;if(!n)throw new Error("Crypto module not found");return function(){return n.getRandomValues(new Uint32Array(1))[0]}}return void 0!==t&&t.crypto?function(){return t.crypto.randomBytes(4).readInt32LE()}:function(){return require("crypto").randomBytes(4).readInt32LE()}}()}).call(this,r(8))},6:function(t,n,r){"use strict";r.d(n,"a",(function(){return u}));var i,e=r(7),o=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),u=function(t){function n(n){var r=t.call(this,n)||this;return r.j=16,r.S=n,n&&"number"==typeof n.blockSize&&(r.j=n.blockSize),r.reset(n?n.data:void 0,n?n.nBytes:void 0),r}return o(n,t),Object.defineProperty(n.prototype,"blockSize",{get:function(){return this.j},enumerable:!1,configurable:!0}),n.prototype.reset=function(n,r){t.prototype.reset.call(this,n,r),this._()},n.prototype.update=function(t){return this.C(t),this.k(),this},n.prototype.finalize=function(t){return t&&this.C(t),this.U()},n.prototype._=function(){throw new Error("Not implemented")},n.prototype.U=function(){throw new Error("Not implemented")},n}(e.a)},7:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var i=r(1),e=r(4),o=function(){function t(t){this.I=0,this.j=0,this.S=t,this.A=t&&void 0!==t.data?t.data.clone():new i.a,this.B=t&&"number"==typeof t.nBytes?t.nBytes:0}return Object.defineProperty(t.prototype,"blockSize",{get:function(){return this.j},enumerable:!1,configurable:!0}),t.prototype.reset=function(t,n){this.A=void 0!==t?t.clone():new i.a,this.B="number"==typeof n?n:0},t.prototype.C=function(t){var n="string"==typeof t?e.a.parse(t):t;this.A.concat(n),this.B+=n.nSigBytes},t.prototype.k=function(t){var n,r=this.A.words,e=this.A.nSigBytes,o=this.j,u=e/(4*this.j),f=(u=t?Math.ceil(u):Math.max((0|u)-this.I,0))*o,c=Math.min(4*f,e);if(f){for(var s=0;s<f;s+=o)this.M(r,s);n=r.splice(0,f),this.A.nSigBytes-=c}return new i.a(n,c)},t.prototype.M=function(t,n){throw new Error("Not implemented")},t}()},8:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r}})}));