!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.JsCrypto=n():t.JsCrypto=n()}(this,(function(){return(()=>{"use strict";var t={367:(t,n,r)=>{r.d(n,{Hmac:()=>e});var i=r(768),e=function(){function t(t,n){this.i=t,"string"==typeof n&&(n=i.d.parse(n));var r=t.blockSize,e=4*r;n.nSigBytes>e&&(n=t.finalize(n)),n.clamp();for(var o=this.u=n.clone(),u=this.h=n.clone(),f=o.words,s=u.words,c=0;c<r;c++)f[c]^=1549556828,s[c]^=909522486;u.nSigBytes=e,o.nSigBytes=e,this.reset()}return t.prototype.reset=function(){this.i.reset(),this.i.update(this.h)},t.prototype.update=function(t){return this.i.update(t),this},t.prototype.finalize=function(t){var n=this.i.finalize(t);return this.i.reset(),this.i.finalize(this.u.clone().concat(n))},t}()},561:(t,n,r)=>{r.d(n,{SHA256:()=>v});var i,e=r(868),o=r(354),u=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),f=[],s=[];function c(t){for(var n=Math.sqrt(t),r=2;r<=n;r++)if(!(t%r))return!1;return!0}function h(t){return 4294967296*(t-(0|t))|0}!function(){for(var t=2,n=0;n<64;)c(t)&&(n<8&&(f[n]=h(Math.pow(t,.5))),s[n]=h(Math.pow(t,1/3)),n++),t++}();var a=[],v=function(t){function n(n){var r=t.call(this,n)||this;return r.v=new o.e(f.slice(0)),r.j=n,n&&void 0!==n.hash&&(r.v=n.hash.clone()),r}return u(n,t),n.prototype.O=function(){this.v=new o.e(f.slice(0))},n.prototype.A=function(t,n){for(var r=this.v.words,i=r[0],e=r[1],o=r[2],u=r[3],f=r[4],c=r[5],h=r[6],v=r[7],w=0;w<64;w++){if(w<16)a[w]=0|t[n+w];else{var l=a[w-15],d=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,b=a[w-2],y=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;a[w]=d+a[w-7]+y+a[w-16]}var p=i&e^i&o^e&o,m=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),j=v+((f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25))+(f&c^~f&h)+s[w]+a[w];v=h,h=c,c=f,f=u+j|0,u=o,o=e,e=i,i=j+(m+p)|0}r[0]=r[0]+i|0,r[1]=r[1]+e|0,r[2]=r[2]+o|0,r[3]=r[3]+u|0,r[4]=r[4]+f|0,r[5]=r[5]+c|0,r[6]=r[6]+h|0,r[7]=r[7]+v|0},n.prototype.k=function(){var t=this.S.words,n=8*this.N,r=8*this.S.nSigBytes;return t[r>>>5]|=128<<24-r%32,t[14+(r+64>>>9<<4)]=Math.floor(n/4294967296),t[15+(r+64>>>9<<4)]=n,this.S.nSigBytes=4*t.length,this.U(),this.v},n.prototype.clone=function(){return new n({hash:this.v,blockSize:this.I,data:this.S,nBytes:this.N})},n.hash=function(t,r){return new n(r).finalize(t)},n}(e.P)},354:(t,n,r)=>{r.d(n,{e:()=>o});var i=r(720),e=r(54),o=function(){function t(t,n){if(Array.isArray(t)||!t)return this.F=Array.isArray(t)?t:[],void(this.H="number"==typeof n?n:4*this.F.length);var r;if(t instanceof ArrayBuffer)r=new Uint8Array(t);else{if(!(t instanceof Uint8Array||t instanceof Int8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array))throw new Error("Invalid argument");r=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}if(!r)return this.F=[],void(this.H=0);for(var i=r.byteLength,e=[],o=0;o<i;o++)e[o>>>2]|=r[o]<<24-o%4*8;this.F=e,this.H=i}return Object.defineProperty(t.prototype,"nSigBytes",{get:function(){return this.H},set:function(t){this.H=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"words",{get:function(){return this.F},enumerable:!1,configurable:!0}),t.prototype.toString=function(t){return t?t.stringify(this):i.p.stringify(this)},t.prototype.toUint8Array=function(){for(var t=this.F,n=this.H,r=new Uint8Array(n),i=0;i<n;i++)r[i]=t[i>>>2]>>>24-i%4*8&255;return r},t.prototype.concat=function(t){var n=t.words.slice(),r=t.nSigBytes;if(this.clamp(),this.H%4)for(var i=0;i<r;i++){var e=n[i>>>2]>>>24-i%4*8&255;this.F[this.H+i>>>2]|=e<<24-(this.H+i)%4*8}else for(i=0;i<r;i+=4)this.F[this.H+i>>>2]=n[i>>>2];return this.H+=r,this},t.prototype.clamp=function(){var t=this.H;this.F[t>>>2]&=4294967295<<32-t%4*8,this.F.length=Math.ceil(t/4)},t.prototype.clone=function(){return new t(this.F.slice(),this.H)},t.random=function(n){for(var r=[],i=0;i<n;i+=4)r.push((0,e.M)());return new t(r,n)},t}()},211:(t,n,r)=>{r.d(n,{C:()=>o});var i=r(354),e=r(768),o=function(){function t(t){this.B=0,this.I=0,this.j=t,this.S=t&&void 0!==t.data?t.data.clone():new i.e,this.N=t&&"number"==typeof t.nBytes?t.nBytes:0}return Object.defineProperty(t.prototype,"blockSize",{get:function(){return this.I},enumerable:!1,configurable:!0}),t.prototype.reset=function(t,n){this.S=void 0!==t?t.clone():new i.e,this.N="number"==typeof n?n:0},t.prototype.R=function(t){var n="string"==typeof t?e.d.parse(t):t;this.S.concat(n),this.N+=n.nSigBytes},t.prototype.U=function(t){var n,r=this.S.words,e=this.S.nSigBytes,o=this.I,u=e/(4*this.I),f=(u=t?Math.ceil(u):Math.max((0|u)-this.B,0))*o,s=Math.min(4*f,e);if(f){for(var c=0;c<f;c+=o)this.A(r,c);n=r.splice(0,f),this.S.nSigBytes-=s}return new i.e(n,s)},t.prototype.A=function(t,n){throw new Error("Not implemented")},t}()},868:(t,n,r)=>{r.d(n,{P:()=>u});var i,e=r(211),o=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),u=function(t){function n(n){var r=t.call(this,n)||this;return r.I=16,r.j=n,n&&"number"==typeof n.blockSize&&(r.I=n.blockSize),r.reset(n?n.data:void 0,n?n.nBytes:void 0),r}return o(n,t),Object.defineProperty(n.prototype,"blockSize",{get:function(){return this.I},enumerable:!1,configurable:!0}),n.prototype.reset=function(n,r){t.prototype.reset.call(this,n,r),this.O()},n.prototype.update=function(t){return this.R(t),this.U(),this},n.prototype.finalize=function(t){return t&&this.R(t),this.k()},n.prototype.O=function(){throw new Error("Not implemented")},n.prototype.k=function(){throw new Error("Not implemented")},n}(e.C)},787:(t,n,r)=>{r.d(n,{G:()=>c});var i,e=r(456),o=r(344),u=r(919),f=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),s=function(){return(s=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++)for(var e in n=arguments[r])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)},c=function(t){function n(n){var r=t.call(this,n)||this;return r.I=4,r.q=o.n,r.J=u.l,r.j=n,r.q=void 0!==n.mode?n.mode:r.q,r.J=void 0!==n.padding?n.padding:r.J,r.reset(null==n?void 0:n.data,null==n?void 0:n.nBytes),r}return f(n,t),Object.defineProperty(n.prototype,"mode",{get:function(){return this.K},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"padding",{get:function(){return this.J},enumerable:!1,configurable:!0}),n.prototype.reset=function(n,r){var i;t.prototype.reset.call(this,n,r),this.L===e.t.ENC_TRANSFORM_MODE?i=this.q.createEncryptor:(i=this.q.createDecryptor,this.B=1),this.q&&this.V===i?this.K=new this.q({cipher:this,iv:this.X&&this.X.words}):(this.K=i.call(this.q,{cipher:this,iv:this.X&&this.X.words}),this.V=i)},n.prototype.A=function(t,n){var r;null===(r=this.K)||void 0===r||r.processBlock(t,n)},n.prototype.k=function(){var t,n=this.J;return this.L===e.t.ENC_TRANSFORM_MODE?(n.pad(this.S,this.blockSize),t=this.U(!0)):(t=this.U(!0),n.unpad(t)),t},n.prototype.encryptBlock=function(t,n){throw new Error("Not implemented")},n.prototype.decryptBlock=function(t,n){throw new Error("Not implemented")},n.createEncryptor=function(t,r){return new n(s(s({},r=void 0===r?{}:r),{key:t,transformMode:e.t.ENC_TRANSFORM_MODE}))},n.createDecryptor=function(t,r){return new n(s(s({},r=void 0===r?{}:r),{key:t,transformMode:e.t.DEC_TRANSFORM_MODE}))},n}(e.t)},456:(t,n,r)=>{r.d(n,{t:()=>f});var i,e=r(211),o=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),u=function(){return(u=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++)for(var e in n=arguments[r])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)},f=function(t){function n(n){var r=t.call(this,n)||this;return r.L=1,r.j=n,r.Y=n.key,r.X=void 0!==n.iv?n.iv:r.X,r.L=void 0!==n.transformMode?n.transformMode:r.L,r}return o(n,t),Object.defineProperty(n.prototype,"iv",{get:function(){return this.X},enumerable:!1,configurable:!0}),n.prototype.reset=function(n,r){t.prototype.reset.call(this,n,r),this.O()},n.prototype.process=function(t){return this.R(t),this.U()},n.prototype.finalize=function(t){return t&&this.R(t),this.k()},n.prototype.O=function(){throw new Error("Not implemented")},n.prototype.A=function(t,n){throw new Error("Not implemented")},n.prototype.k=function(){throw new Error("Not implemented")},n.createEncryptor=function(t,r){return new n(u(u({},r=void 0===r?{}:r),{key:t,transformMode:n.ENC_TRANSFORM_MODE}))},n.createDecryptor=function(t,r){return new n(u(u({},r=void 0===r?{}:r),{key:t,transformMode:n.DEC_TRANSFORM_MODE}))},n.ENC_TRANSFORM_MODE=1,n.DEC_TRANSFORM_MODE=2,n.keySize=4,n.ivSize=4,n}(e.C)},505:(t,n,r)=>{r.d(n,{Q:()=>e});var i=r(232),e=function(){function t(t){this.formatter=i.w,t&&(this.cipherText=t.cipherText,this.key=t.key,this.iv=t.iv,this.salt=t.salt,this.Algorithm=t.Algorithm,this.mode=t.mode,this.padding=t.padding,this.blockSize=t.blockSize,this.formatter=t.formatter||i.w)}return t.prototype.toString=function(t){return(t||this.formatter).stringify(this)},t}()},693:(t,n,r)=>{r.d(n,{E:()=>s});var i=r(109),e=r(214),o=r(505),u=r(232),f=function(){return(f=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++)for(var e in n=arguments[r])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)},s={encrypt:function(t,n,r,u){var s=u?f({},u):{},c=u&&u.KDF?u.KDF:e.s,h={};u&&u.kdfHasher&&(h.kdfHasher=u.kdfHasher),u&&u.kdfIterations&&(h.kdfIterations=u.kdfIterations),u&&u.kdfModule&&(h.kdfModule=u.kdfModule);var a=c.execute(r,t.keySize,t.ivSize,s.kdfSalt,h);s.iv=a.iv;var v=i.D.encrypt(t,n,a.key,s);return new o.Q(f(f({},v),{key:a.key,iv:a.iv,salt:a.salt}))},decrypt:function(t,n,r,o){var s=o?f({},o):{},c=s.KDF?s.KDF:e.s,h=s.formatter?s.formatter:u.w,a=(0,i.W)(n,h),v={};o&&o.kdfHasher&&(v.kdfHasher=o.kdfHasher),o&&o.kdfIterations&&(v.kdfIterations=o.kdfIterations),o&&o.kdfModule&&(v.kdfModule=o.kdfModule);var w=c.execute(r,t.keySize,t.ivSize,a.salt,v);return s.iv=w.iv,i.D.decrypt(t,a,w.key,s)}}},109:(t,n,r)=>{r.d(n,{W:()=>o,D:()=>u});var i=r(232),e=r(505);function o(t,n){return"string"==typeof t?n.parse(t):t}var u={encrypt:function(t,n,r,o){var u=t.createEncryptor(r,o),f=u.finalize(n);return new e.Q({cipherText:f,key:r,iv:u.iv,Algorithm:t,mode:u.mode,padding:u.padding,blockSize:u.blockSize,formatter:(null==o?void 0:o.formatter)||i.w})},decrypt:function(t,n,r,e){var u=t.createDecryptor(r,e),f=o(n,(null==e?void 0:e.formatter)||i.w);return u.finalize(f.cipherText||"")}}},232:(t,n,r)=>{r.d(n,{w:()=>u});var i=r(505),e=r(354),o=r(773),u={stringify:function(t){var n=t.cipherText,r=t.salt;return n?r?new e.e([1398893684,1701076831]).concat(r).concat(n).toString(o.D):n.toString(o.D):""},parse:function(t){var n,r=o.D.parse(t),u=r.words;return 1398893684===u[0]&&1701076831===u[1]&&(n=new e.e(u.slice(2,4)),u.splice(0,4),r.nSigBytes-=16),new i.Q({cipherText:r,salt:n})}}},214:(t,n,r)=>{r.d(n,{s:()=>f});var i=r(354),e=r(505),o=r(8),u=function(){return(u=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++)for(var e in n=arguments[r])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)},f={execute:function(t,n,r,f,s){f||(f=i.e.random(8));var c=s&&s.kdfModule||o.E,h=s?{Hasher:s.kdfHasher,iterations:s.kdfIterations}:{},a=c.getKey(t,f,u(u({},h),{keySize:n+r})),v=new i.e(a.words.slice(n),4*r);return a.nSigBytes=4*n,new e.Q({key:a,iv:v,salt:f})}}},8:(t,n,r)=>{r.d(n,{E:()=>c});var i,e=r(561),o=r(367),u=r(354),f=r(541),s=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),c=function(t){function n(n){var r=t.call(this,n)||this;return r.Z=4,r.$=e.SHA256,r.tt=1e4,n&&(r.Z=void 0!==n.keySize?n.keySize:r.Z,r.$=void 0!==n.Hasher?n.Hasher:r.$,r.tt=void 0!==n.iterations?n.iterations:r.tt),r}return s(n,t),n.prototype.compute=function(t,n){for(var r=new o.Hmac(new this.$,t),i=new u.e,e=new u.e([1]),f=i.words,s=e.words,c=this.Z,h=this.tt;f.length<c;){var a=r.update(n).finalize(e);r.reset();for(var v=a.words,w=v.length,l=a,d=1;d<h;d++){l=r.finalize(l),r.reset();for(var b=l.words,y=0;y<w;y++)v[y]^=b[y]}i.concat(a),s[0]++}return i.nSigBytes=4*c,i},n.getKey=function(t,r,i){return new n(i).compute(t,r)},n}(f._)},541:(t,n,r)=>{r.d(n,{_:()=>i});var i=function(){function t(t){this.j=t}return t.prototype.compute=function(t,n){throw new Error("Not implemented")},t.getKey=function(t,n,r){throw new Error("Not implemented")},t}()},863:(t,n,r)=>{r.d(n,{T:()=>i});var i=function(){function t(t){this.j=t,this.nt=t.cipher,this.X=t.iv}return t.prototype.processBlock=function(t,n){},t.createEncryptor=function(t){throw new Error("Not implemented yet")},t.createDecryptor=function(t){throw new Error("Not implemented yet")},t}()},344:(t,n,r)=>{r.d(n,{n:()=>u});var i,e=r(863),o=(i=function(t,n){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}i(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),u=function(t){function n(n){var r=t.call(this,n)||this;return r.rt=[],r}return o(n,t),n.prototype.xorBlock=function(t,n,r){var i,e=this.X;e?(i=e,this.X=void 0):i=this.rt;for(var o=0;o<r;o++)t[n+o]^=i[o]},n.createEncryptor=function(t){return new n.Encryptor(t)},n.createDecryptor=function(t){return new n.Decryptor(t)},n.Encryptor=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype.processBlock=function(t,n){var r=this.nt,i=r.blockSize;this.xorBlock(t,n,i),r.encryptBlock(t,n),this.rt=t.slice(n,n+i)},n}(n),n.Decryptor=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return o(n,t),n.prototype.processBlock=function(t,n){var r=this.nt,i=r.blockSize,e=t.slice(n,n+i);r.decryptBlock(t,n),this.xorBlock(t,n,i),this.rt=e},n}(n),n}(e.T)},919:(t,n,r)=>{r.d(n,{l:()=>e});var i=r(354);var e={pad:function(t,n){for(var r=4*n,e=r-t.nSigBytes%r,o=e<<24|e<<16|e<<8|e,u=[],f=0;f<e;f+=4)u.push(o);var s=new i.e(u,e);t.concat(s)},unpad:function(t){var n=255&t.words[t.nSigBytes-1>>>2];t.nSigBytes-=n}}},773:(t,n,r)=>{r.d(n,{D:()=>f});for(var i=r(354),e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o=[],u=0;u<e.length;u++)o[e.charCodeAt(u)]=u;var f={stringify:function(t){var n=t.words,r=t.nSigBytes;t.clamp();for(var i=[],o=0;o<r;o+=3)for(var u=(n[o>>>2]>>>24-o%4*8&255)<<16|(n[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|n[o+2>>>2]>>>24-(o+2)%4*8&255,f=0;f<4&&o+.75*f<r;f++)i.push(e.charAt(u>>>6*(3-f)&63));var s=e.charAt(64);if(s)for(;i.length%4;)i.push(s);return i.join("")},parse:function(t){var n=t.length,r=e.charAt(64);if(r){var u=t.indexOf(r);-1!==u&&(n=u)}for(var f=[],s=0,c=0;c<n;c++)if(c%4){var h=o[t.charCodeAt(c-1)]<<c%4*2|o[t.charCodeAt(c)]>>>6-c%4*2;f[s>>>2]|=h<<24-s%4*8,s++}return new i.e(f,s)}}},720:(t,n,r)=>{r.d(n,{p:()=>e});var i=r(354),e={stringify:function(t){for(var n=t.nSigBytes,r=t.words,i=[],e=0;e<n;e++){var o=r[e>>>2]>>>24-e%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){var n=t.length;if(n%2!=0)throw new Error("Hex string count must be even");for(var r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new i.e(r,n/2)}}},702:(t,n,r)=>{r.d(n,{m:()=>e});var i=r(354),e={stringify:function(t){for(var n=t.nSigBytes,r=t.words,i=[],e=0;e<n;e++){var o=r[e>>>2]>>>24-e%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new i.e(r,n)}}},768:(t,n,r)=>{r.d(n,{d:()=>e});var i=r(702),e={stringify:function(t){try{return decodeURIComponent(escape(i.m.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return i.m.parse(unescape(encodeURIComponent(t)))}}},54:(t,n,r)=>{r.d(n,{M:()=>i});var i=function(){if("undefined"!=typeof window){var t=window.crypto||window.msCrypto;if(!t)throw new Error("Crypto module not found");return function(){return t.getRandomValues(new Uint32Array(1))[0]}}return void 0!==r.g&&r.g.crypto?function(){return r.g.crypto.randomBytes(4).readInt32LE()}:function(){var t="crypt";return t+=String.fromCharCode(111),require(t).randomBytes(4).readInt32LE()}}()}},n={};function r(i){var e=n[i];if(void 0!==e)return e.exports;var o=n[i]={exports:{}};return t[i](o,o.exports,r),o.exports}r.d=(t,n)=>{for(var i in n)r.o(n,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"it",{value:!0})};var i={};return(()=>{r.r(i),r.d(i,{DES:()=>l});var t,n=r(787),e=r(456),o=r(693),u=r(109),f=(t=function(n,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(n,r)},function(n,r){function i(){this.constructor=n}t(n,r),n.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}),s=function(){return(s=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++)for(var e in n=arguments[r])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)},c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],h=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],a=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],v=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],w=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],l=function(t){function n(n){var r=t.call(this,n)||this;return r.I=2,r.et=[],r.ot=[],r.ut=0,r.ft=0,r.j=n,r.O(),r}return f(n,t),n.prototype.O=function(){for(var t=this.Y.words,n=[],r=0;r<56;r++){var i=c[r]-1;n[r]=t[i>>>5]>>>31-i%32&1}for(var e=this.et=[],o=0;o<16;o++){var u=e[o]=[],f=a[o];for(r=0;r<24;r++)u[r/6|0]|=n[(h[r]-1+f)%28]<<31-r%6,u[4+(r/6|0)]|=n[28+(h[r+24]-1+f)%28]<<31-r%6;u[0]=u[0]<<1|u[0]>>>31;for(r=1;r<7;r++)u[r]=u[r]>>>4*(r-1)+3;u[7]=u[7]<<5|u[7]>>>27}this.ot=[];for(r=0;r<16;r++)this.ot[r]=e[15-r]},n.prototype.encryptBlock=function(t,n){this.st(t,n,this.et)},n.prototype.decryptBlock=function(t,n){this.st(t,n,this.ot)},n.prototype.st=function(t,n,r){this.ut=t[n],this.ft=t[n+1],this.ct(4,252645135),this.ct(16,65535),this.ht(2,858993459),this.ht(8,16711935),this.ct(1,1431655765);for(var i=0;i<16;i++){for(var e=r[i],o=this.ut,u=this.ft,f=0,s=0;s<8;s++){var c=(u^e[s])&w[s];f|=v[s][c>>>0]}this.ut=u,this.ft=o^f}var h=this.ut;this.ut=this.ft,this.ft=h,this.ct(1,1431655765),this.ht(8,16711935),this.ht(2,858993459),this.ct(16,65535),this.ct(4,252645135),t[n]=this.ut,t[n+1]=this.ft},n.prototype.ct=function(t,n){var r=(this.ut>>>t^this.ft)&n;this.ft^=r,this.ut^=r<<t},n.prototype.ht=function(t,n){var r=(this.ft>>>t^this.ut)&n;this.ut^=r,this.ft^=r<<t},n.createEncryptor=function(t,r){return new n(s(s({},r=void 0===r?{}:r),{key:t,transformMode:e.t.ENC_TRANSFORM_MODE}))},n.createDecryptor=function(t,r){return new n(s(s({},r=void 0===r?{}:r),{key:t,transformMode:e.t.DEC_TRANSFORM_MODE}))},n.encrypt=function(t,r,i){return"string"==typeof r?o.E.encrypt(n,t,r,i):u.D.encrypt(n,t,r,i)},n.decrypt=function(t,r,i){return"string"==typeof r?o.E.decrypt(n,t,r,i):u.D.decrypt(n,t,r,i)},n.keySize=2,n.ivSize=2,n}(n.G)})(),i})()}));