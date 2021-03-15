# jscrypto
![Build](https://github.com/Hinaser/jscrypto/actions/workflows/test.yml/badge.svg?)

[crypto-js](https://github.com/brix/crypto-js) clone for modern javascript environments.

- Loadable from ES6/CommonJS/Typescript/Browser runtimes.
- Written in Typescript with many type declarations.
- Reduced bundle size when using webpack v4.  
  - When bundling only SHA256 module, the webpack-ed js file might be less than 6kb,  
    while bundled size with `crypto-js` might be larger than 100kb because webpack v4 cannot eliminate dead codes efficiently.
  - For webpack v5, bundle size with `crypto-js` can be greatly reduced by enhanced tree-shaking.
    However, sometimes library requiring `crypto-js` doesn't run in commonJS environments like AWS lambda,  
    or local node runtime environment for it fails to load crypto module from node environment.

## Install

```
npm install jscrypto
# or
yarn add jscrypto
```

## Usage
### CommonJS Environment (Node.js environment like node CLI, AWS Lambda, etc)
```js
// Load whole library modules.
const JsCrypto = require("jscrypto");
console.log(JsCrypto.SHA256.hash("test").toString());

// or load only necessary modules (Recommended for faster loading and reduced size)
const {SHA256} = require("jscrypto/SHA256");
console.log(SHA256.hash("test").toString());
```

### ES6 Environment (i.e. Creating app/library with webpack/react-scripts or some es6-compatible bundlers)
**Be sure to load the module from `jscrypto/es6`.**  
This can greatly reduce bundle size by bundlers tree-shaking ability. 
Don't forget to add `/es6` following `jscrypto`
```ecmascript 6
// Load whole library modules.
import JsCrypto from "jscrypto/es6"; // Heavy loading. Not recommended.
console.log(JsCrypto.SHA256.hash("test").toString());
...
import {SHA256} from "jscrypto/es6/SHA256"; // Recommended
console.log(SHA256.hash("test").toString());
```

**For webpack v5**  
Please add `{"crypto": "crypto"}` entry to `resolve.fallback` in `webpack.config.js` to suppress warning from webpack v5. 
```
module.exports = {
  ...
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {"crypto": "crypto"} // <- Please add this entry to your webpack.config.js
  },
  ...
}
```

### Typescript Environment
**Be sure to load the module from `jscrypto/es6`.**
```ecmascript 6
// Load whole library modules.
import * as JsCrypto from "jscrypto/es6"; // Heavy loading. Not recommended.
console.log(JsCrypto.SHA256.hash("test").toString());
...
import {SHA256} from "jscrypto/es6/SHA256"; // Recommended
console.log(SHA256.hash("test").toString());
```

**For webpack v5**  
Please add `{"crypto": false}` entry to `resolve.fallback` in `webpack.config.js` to suppress warning from webpack v5.
```
module.exports = {
  ...
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    fallback: {"crypto": "false"} // <- Please add this entry to your webpack.config.js
  },
  ...
}
```

### Browser
Copy js files/directories under `/dist` dir into somewhere browser can access.  
Then directly load js file into `<script>` tag.
```html
<script src="dist/index.js"></script> <!-- All modules are loaded into browser -->
<script src="dist/SHA256.js"></script><!-- Only SHA256 module is loaded into browser -->
<script type="text/javascript">
  // This will output: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
  console.log(JsCrypto.SHA256.hash("test").toString());
</script>
```

## API
`jscrypto` supports crypto modules as well as `cryptojs`.

### *Popular*
**Hash** [`MD5`](#md5), [`SHA1`](#sha1), [`SHA3`](#sha3), [`SHA224`](#sha224), [`SHA256`](#sha256), [`SHA384`](#sha384), [`SHA512`](#sha512), [`RIPEMD160`](#ripemd160),  
**Message/Key Hash** [`HMAC-MD5`](#HMAC-MD5), [`HMAC-SHA1`](#HMAC-SHA1), [`HMAC-SHA3`](#HMAC-SHA3), [`HMAC-SHA224`](#hmac-sha224), [`HMAC-SHA256`](#hmac-sha256), [`HMAC-SHA384`](#hmac-sha384), [`HMAC-SHA512`](#hmac-sha512)  
**Block Cipher** [`AES`](#aes), [`DES`](#des), [`DES3`](#des3)

### *Basic structure*
**Word** [`Word32Array`](#word32array), [`Word64Array`](#word64array)  
**Encoder** [`Base64`](#base64), [`Hex`](#hex), [`Latin1`](#latin1), [`Utf8`](#utf8), [`Utf16`](#utf16)  

### *Misc*
**Stream Cipher** [`Rabbits`](#rabbits), [`RC4`](#rC4), [`RC4Drop`](#rC4Drop)  
**Key Derive Function** [`OpenSSLKDF`](#openSSLKDF), [`EvpKDF`](#evpKDF), [`PBKDF2`](#pBKDF2)  
**Block Cipher mode** [`CBC`](#cBC), [`CFB`](#cFB), [`CTR`](#cTR), [`ECB`](#eCB), [`OFB`](#oFB)  
**Block Padding** [`AnsiX923`](#ansiX923), [`ISO10126`](#iSO10126), [`ISO97971`](#iSO97971), [`Noop`](#noop), [`Pkcs7`](#pkcs7), [`Zero`](#zero)  
**Formatter** [`OpenSSLFormatter`](#openSSLFormatter)

---

### Hash
<h4 id='md5'>MD5</h4>

```js
// MD.hash(string)
var hashedWord = JsCrypto.MD5.hash("abc"); // Return value of 'hash' is Word32Array
hashedWord.toString(); // "900150983cd24fb0d6963f7d28e17f72"
hashedWord.toString(JsCrypto.Hex); // "900150983cd24fb0d6963f7d28e17f72"
hashedWord.toString(JsCrypto.Base64); // "kAFQmDzST7DWlj99KOF/cg=="

// Binary words can be hashed as well.
var w = new JsCrypto.Word32Array([0x61626300], 3); // binary representation of "abc"
var hashedWord = JsCrypto.MD5.hash(w);
hashedWord.toString(); // "900150983cd24fb0d6963f7d28e17f72"

var w2 = new JsCrypto.Word32Array([0x61626364]); // binary representation of "abcd"
var hashedWord = JsCrypto.MD5.hash(w2);
hashedWord.toString(); // "e2fc714c4727ee9395f324cd2e7f331f"

// You can do gradual update
var md5 = new JsCrypto.MD5("");
md5.update("a");
md5.update("b");
md5.update("c");
var hashedWord = md5.finalize();
hashedWord.toString(); // The same as Jscrypto.MD5.hash("abc").toString(); "900150983cd24fb0d6963f7d28e17f72"
```

<h4 id='sha1'>SHA1</h4>

```js
// SHA1.hash(string)
var hashedWord = JsCrypto.SHA1.hash("abc"); // Return value of 'hash' is Word32Array
hashedWord.toString(); //  "a9993e364706816aba3e25717850c26c9cd0d89d"
hashedWord.toString(JsCrypto.Hex); // "a9993e364706816aba3e25717850c26c9cd0d89d"
hashedWord.toString(JsCrypto.Base64); // "qZk+NkcGgWq6PiVxeFDCbJzQ2J0="

// Binary words can be hashed as well as MD5. See MD5 example above.
// You can do gradual update as well as MD5. See MD5 example above.
```

<h4 id='sha3'>SHA3</h4>

```js
// SHA3.hash(string)
var hashedWord = JsCrypto.SHA3.hash("abc"); // Return value of 'hash' is Word32Array
hashedWord.toString(); //  "18587dc2ea10...7aa511a9d00bb96"
hashedWord.toString(JsCrypto.Hex); // "18587dc2ea10...7aa511a9d00bb96"
hashedWord.toString(JsCrypto.Base64); // "GFh9wuoQa5oVY...plsZ13qlEanQC7lg=="

// Binary words can be hashed as well as MD5. See MD5 example above.
// You can do gradual update as well as MD5. See MD5 example above.
```

<h4 id='sha224'>SHA224</h4>

```js
// SHA224.hash(string)
var hashedWord = JsCrypto.SHA224.hash("abc"); // Return value of 'hash' is Word32Array
hashedWord.toString(); //  "23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7"
hashedWord.toString(JsCrypto.Hex); // "23097d223405d8228642a477bda255b32aadbce4bda0b3f7e36c9da7"
hashedWord.toString(JsCrypto.Base64); // "Iwl9IjQF2CKGQqR3vaJVsyqtvOS9oLP342ydpw=="

// Binary words can be hashed as well as MD5. See MD5 example above.
// You can do gradual update as well as MD5. See MD5 example above.
```

<h4 id='sha256'>SHA256</h4>

```js
// SHA256.hash(string)
var hashedWord = JsCrypto.SHA256.hash("abc"); // Return value of 'hash' is Word32Array
hashedWord.toString(); //  "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
hashedWord.toString(JsCrypto.Hex); // "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
hashedWord.toString(JsCrypto.Base64); // "ungWv48Bz+pBQUDeXa4iI7ADYaOWF3qctBD/YfIAFa0="

// Binary words can be hashed as well as MD5. See MD5 example above.
// You can do gradual update as well as MD5. See MD5 example above.
```

<h4 id='sha384'>SHA384</h4>

```js
// SHA384.hash(string)
var hashedWord = JsCrypto.SHA384.hash("abc"); // Return value of 'hash' is Word32Array
hashedWord.toString(); //  "cb00753f45a35...2358baeca134c825a7"
hashedWord.toString(JsCrypto.Hex); // "cb00753f45a35...2358baeca134c825a7"
hashedWord.toString(JsCrypto.Base64); // "ywB1P0WjXou1oD1pm...croefMI1i67KE0yCWn"

// Binary words can be hashed as well as MD5. See MD5 example above.
// You can do gradual update as well as MD5. See MD5 example above.
```

<h4 id='sha512'>SHA512</h4>

```js
// SHA512.hash(string)
var hashedWord = JsCrypto.SHA512.hash("abc"); // Return value of 'hash' is Word32Array
hashedWord.toString(); //  "ddaf35a19361...2a9ac94fa54ca49f"
hashedWord.toString(JsCrypto.Hex); // "ddaf35a19361...2a9ac94fa54ca49f"
hashedWord.toString(JsCrypto.Base64); // "3a81oZNherrMQXNJ...2Q86A4qmslPpUyknw=="

// Binary words can be hashed as well as MD5. See MD5 example above.
// You can do gradual update as well as MD5. See MD5 example above.
```

<h4 id='ripemd160'>RIPEMD160</h4>

```js
// RIPEMD160.hash(string)
var hashedWord = JsCrypto.RIPEMD160.hash("abc"); // Return value of 'hash' is Word32Array
hashedWord.toString(); //  "8eb208f7e05d987a9b044a8e98c6b087f15a0bfc"
hashedWord.toString(JsCrypto.Hex); // "8eb208f7e05d987a9b044a8e98c6b087f15a0bfc"
hashedWord.toString(JsCrypto.Base64); // "jrII9+BdmHqbBEqOmMawh/FaC/w="

// Binary words can be hashed as well as MD5. See MD5 example above.
// You can do gradual update as well as MD5. See MD5 example above.
```

### Word
The basic instance holding binary value.
<h4 id='word32array'>Word32Array</h4>

```js
// Example of Word32Array constructor.
// Given 'new Word32Array(A, B)',  A: array of 32bit word, B: the number of significant bytes.
var abcdefgh = new JsCrypto.Word32Array([0x61626364, 0x65666768]); // Binary representation of "abcdefgh"
var abcdefg = new JsCrypto.Word32Array([0x61626364, 0x65666768], 7); // Binary representation of "abcdefg"
var abcdef = new JsCrypto.Word32Array([0x61626364, 0x65666768], 6); // Binary representation of "abcdef"
var abcd = new JsCrypto.Word32Array([0x61626364, 0x65666768], 4); // Binary representation of "abcd"
var abcd2 = new JsCrypto.Word32Array([0x61626364]); // This also represents "abcd"

// Example of stringify
var w = new JsCrypto.Word32Array([0x1234567, 0x89abcdef]);
// Word32Array.toString(encoder?: IEncoder)
w.toString(); // "0123456789abcdef"
w.toString(JsCrypto.Hex); // "0123456789abcdef"
w.toString(JsCrypto.Base64); // "ASNFZ4mrze8="

// Word32Array can be genereated from parser.
JsCrypto.Hex.parse("0123456789abcdef"); // The same as 'new Word32Array([0x01234567, 0x89abcdef])'
JsCrypto.Base64.parse("ASNFZ4mrze8="); // The same as 'new Word32Array([0x01234567, 0x89abcdef])'
JsCrypto.Utf8.parse("abcd"); // The same as 'new Word32Array([0x61626364])'
```

<h4 id='word64array'>Word64Array</h4>

```js
var w1 = new Word64Array([new Word64(0x00010203, 0x04050607)]);
w1.toString(); // "0001020304050607"
w1.nSigBytes; // 8

var w2 = w1.to32();
w2.toString(); // "0001020304050607"
w2.nSigBytes; // 8
```

### Encoder
<h4 id='base64'>Base64</h4>

```js
  var w = new JsCrypto.Word32Array([0x00000000]);
  
  // Base64.stringify
  JsCrypto.Base64.stringify(w); //  "AAAAAA=="

  // Base64.parse
  JsCrypto.Base64.parse("AAAAAA==").toString(); // "00000000"
```
