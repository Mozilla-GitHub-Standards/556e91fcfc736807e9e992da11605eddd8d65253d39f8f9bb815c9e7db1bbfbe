(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FxAccountClient"] = factory();
	else
		root["FxAccountClient"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {"use strict";var sjcl={cipher:{},hash:{},keyexchange:{},mode:{},misc:{},codec:{},exception:{corrupt:function(a){this.toString=function(){return"CORRUPT: "+this.message};this.message=a},invalid:function(a){this.toString=function(){return"INVALID: "+this.message};this.message=a},bug:function(a){this.toString=function(){return"BUG: "+this.message};this.message=a},notReady:function(a){this.toString=function(){return"NOT READY: "+this.message};this.message=a}}};
"undefined"!==typeof module&&module.exports&&(module.exports=sjcl);
sjcl.cipher.aes=function(a){this.b[0][0][0]||this.g();var b,c,d,e,g=this.b[0][4],f=this.b[1];b=a.length;var h=1;if(4!==b&&6!==b&&8!==b)throw new sjcl.exception.invalid("invalid aes key size");this.e=[d=a.slice(0),e=[]];for(a=b;a<4*b+28;a++){c=d[a-1];if(0===a%b||8===b&&4===a%b)c=g[c>>>24]<<24^g[c>>16&255]<<16^g[c>>8&255]<<8^g[c&255],0===a%b&&(c=c<<8^c>>>24^h<<24,h=h<<1^283*(h>>7));d[a]=d[a-b]^c}for(b=0;a;b++,a--)c=d[b&3?a:a-4],e[b]=4>=a||4>b?c:f[0][g[c>>>24]]^f[1][g[c>>16&255]]^f[2][g[c>>8&255]]^f[3][g[c&
255]]};
sjcl.cipher.aes.prototype={encrypt:function(a){return v(this,a,0)},decrypt:function(a){return v(this,a,1)},b:[[[],[],[],[],[]],[[],[],[],[],[]]],g:function(){var a=this.b[0],b=this.b[1],c=a[4],d=b[4],e,g,f,h=[],p=[],k,n,l,m;for(e=0;0x100>e;e++)p[(h[e]=e<<1^283*(e>>7))^e]=e;for(g=f=0;!c[g];g^=k||1,f=p[f]||1){l=f^f<<1^f<<2^f<<3^f<<4;l=l>>8^l&255^99;c[g]=l;d[l]=g;n=h[e=h[k=h[g]]];m=0x1010101*n^0x10001*e^0x101*k^0x1010100*g;n=0x101*h[l]^0x1010100*l;for(e=0;4>e;e++)a[e][g]=n=n<<24^n>>>8,b[e][l]=m=m<<24^m>>>8}for(e=
0;5>e;e++)a[e]=a[e].slice(0),b[e]=b[e].slice(0)}};
function v(a,b,c){if(4!==b.length)throw new sjcl.exception.invalid("invalid aes block size");var d=a.e[c],e=b[0]^d[0],g=b[c?3:1]^d[1],f=b[2]^d[2];b=b[c?1:3]^d[3];var h,p,k,n=d.length/4-2,l,m=4,s=[0,0,0,0];h=a.b[c];a=h[0];var q=h[1],r=h[2],t=h[3],u=h[4];for(l=0;l<n;l++)h=a[e>>>24]^q[g>>16&255]^r[f>>8&255]^t[b&255]^d[m],p=a[g>>>24]^q[f>>16&255]^r[b>>8&255]^t[e&255]^d[m+1],k=a[f>>>24]^q[b>>16&255]^r[e>>8&255]^t[g&255]^d[m+2],b=a[b>>>24]^q[e>>16&255]^r[g>>8&255]^t[f&255]^d[m+3],m+=4,e=h,g=p,f=k;for(l=
0;4>l;l++)s[c?3&-l:l]=u[e>>>24]<<24^u[g>>16&255]<<16^u[f>>8&255]<<8^u[b&255]^d[m++],h=e,e=g,g=f,f=b,b=h;return s}
sjcl.bitArray={bitSlice:function(a,b,c){a=sjcl.bitArray.l(a.slice(b/32),32-(b&31)).slice(1);return void 0===c?a:sjcl.bitArray.clamp(a,c-b)},extract:function(a,b,c){var d=Math.floor(-b-c&31);return((b+c-1^b)&-32?a[b/32|0]<<32-d^a[b/32+1|0]>>>d:a[b/32|0]>>>d)&(1<<c)-1},concat:function(a,b){if(0===a.length||0===b.length)return a.concat(b);var c=a[a.length-1],d=sjcl.bitArray.getPartial(c);return 32===d?a.concat(b):sjcl.bitArray.l(b,d,c|0,a.slice(0,a.length-1))},bitLength:function(a){var b=a.length;return 0===
b?0:32*(b-1)+sjcl.bitArray.getPartial(a[b-1])},clamp:function(a,b){if(32*a.length<b)return a;a=a.slice(0,Math.ceil(b/32));var c=a.length;b&=31;0<c&&b&&(a[c-1]=sjcl.bitArray.partial(b,a[c-1]&2147483648>>b-1,1));return a},partial:function(a,b,c){return 32===a?b:(c?b|0:b<<32-a)+0x10000000000*a},getPartial:function(a){return Math.round(a/0x10000000000)||32},equal:function(a,b){if(sjcl.bitArray.bitLength(a)!==sjcl.bitArray.bitLength(b))return!1;var c=0,d;for(d=0;d<a.length;d++)c|=a[d]^b[d];return 0===
c},l:function(a,b,c,d){var e;e=0;for(void 0===d&&(d=[]);32<=b;b-=32)d.push(c),c=0;if(0===b)return d.concat(a);for(e=0;e<a.length;e++)d.push(c|a[e]>>>b),c=a[e]<<32-b;e=a.length?a[a.length-1]:0;a=sjcl.bitArray.getPartial(e);d.push(sjcl.bitArray.partial(b+a&31,32<b+a?c:d.pop(),1));return d},n:function(a,b){return[a[0]^b[0],a[1]^b[1],a[2]^b[2],a[3]^b[3]]}};
sjcl.codec.utf8String={fromBits:function(a){var b="",c=sjcl.bitArray.bitLength(a),d,e;for(d=0;d<c/8;d++)0===(d&3)&&(e=a[d/4]),b+=String.fromCharCode(e>>>24),e<<=8;return decodeURIComponent(escape(b))},toBits:function(a){a=unescape(encodeURIComponent(a));var b=[],c,d=0;for(c=0;c<a.length;c++)d=d<<8|a.charCodeAt(c),3===(c&3)&&(b.push(d),d=0);c&3&&b.push(sjcl.bitArray.partial(8*(c&3),d));return b}};
sjcl.codec.hex={fromBits:function(a){var b="",c;for(c=0;c<a.length;c++)b+=((a[c]|0)+0xf00000000000).toString(16).substr(4);return b.substr(0,sjcl.bitArray.bitLength(a)/4)},toBits:function(a){var b,c=[],d;a=a.replace(/\s|0x/g,"");d=a.length;a+="00000000";for(b=0;b<a.length;b+=8)c.push(parseInt(a.substr(b,8),16)^0);return sjcl.bitArray.clamp(c,4*d)}};
sjcl.codec.base64={i:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits:function(a,b,c){var d="",e=0,g=sjcl.codec.base64.i,f=0,h=sjcl.bitArray.bitLength(a);c&&(g=g.substr(0,62)+"-_");for(c=0;6*d.length<h;)d+=g.charAt((f^a[c]>>>e)>>>26),6>e?(f=a[c]<<6-e,e+=26,c++):(f<<=6,e-=6);for(;d.length&3&&!b;)d+="=";return d},toBits:function(a,b){a=a.replace(/\s|=/g,"");var c=[],d,e=0,g=sjcl.codec.base64.i,f=0,h;b&&(g=g.substr(0,62)+"-_");for(d=0;d<a.length;d++){h=g.indexOf(a.charAt(d));
if(0>h)throw new sjcl.exception.invalid("this isn't base64!");26<e?(e-=26,c.push(f^h>>>e),f=h<<32-e):(e+=6,f^=h<<32-e)}e&56&&c.push(sjcl.bitArray.partial(e&56,f,1));return c}};sjcl.codec.base64url={fromBits:function(a){return sjcl.codec.base64.fromBits(a,1,1)},toBits:function(a){return sjcl.codec.base64.toBits(a,1)}};sjcl.hash.sha256=function(a){this.e[0]||this.g();a?(this.f=a.f.slice(0),this.d=a.d.slice(0),this.a=a.a):this.reset()};sjcl.hash.sha256.hash=function(a){return(new sjcl.hash.sha256).update(a).finalize()};
sjcl.hash.sha256.prototype={blockSize:512,reset:function(){this.f=this.k.slice(0);this.d=[];this.a=0;return this},update:function(a){"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));var b,c=this.d=sjcl.bitArray.concat(this.d,a);b=this.a;a=this.a=b+sjcl.bitArray.bitLength(a);for(b=512+b&-512;b<=a;b+=512)w(this,c.splice(0,16));return this},finalize:function(){var a,b=this.d,c=this.f,b=sjcl.bitArray.concat(b,[sjcl.bitArray.partial(1,1)]);for(a=b.length+2;a&15;a++)b.push(0);b.push(Math.floor(this.a/
4294967296));for(b.push(this.a|0);b.length;)w(this,b.splice(0,16));this.reset();return c},k:[],e:[],g:function(){function a(a){return 0x100000000*(a-Math.floor(a))|0}var b=0,c=2,d;a:for(;64>b;c++){for(d=2;d*d<=c;d++)if(0===c%d)continue a;8>b&&(this.k[b]=a(Math.pow(c,0.5)));this.e[b]=a(Math.pow(c,1/3));b++}}};
function w(a,b){var c,d,e,g=b.slice(0),f=a.f,h=a.e,p=f[0],k=f[1],n=f[2],l=f[3],m=f[4],s=f[5],q=f[6],r=f[7];for(c=0;64>c;c++)16>c?d=g[c]:(d=g[c+1&15],e=g[c+14&15],d=g[c&15]=(d>>>7^d>>>18^d>>>3^d<<25^d<<14)+(e>>>17^e>>>19^e>>>10^e<<15^e<<13)+g[c&15]+g[c+9&15]|0),d=d+r+(m>>>6^m>>>11^m>>>25^m<<26^m<<21^m<<7)+(q^m&(s^q))+h[c],r=q,q=s,s=m,m=l+d|0,l=n,n=k,k=p,p=d+(k&n^l&(k^n))+(k>>>2^k>>>13^k>>>22^k<<30^k<<19^k<<10)|0;f[0]=f[0]+p|0;f[1]=f[1]+k|0;f[2]=f[2]+n|0;f[3]=f[3]+l|0;f[4]=f[4]+m|0;f[5]=f[5]+s|0;f[6]=
f[6]+q|0;f[7]=f[7]+r|0}sjcl.misc.hmac=function(a,b){this.j=b=b||sjcl.hash.sha256;var c=[[],[]],d,e=b.prototype.blockSize/32;this.c=[new b,new b];a.length>e&&(a=b.hash(a));for(d=0;d<e;d++)c[0][d]=a[d]^909522486,c[1][d]=a[d]^1549556828;this.c[0].update(c[0]);this.c[1].update(c[1]);this.h=new b(this.c[0])};sjcl.misc.hmac.prototype.encrypt=sjcl.misc.hmac.prototype.mac=function(a){if(this.m)throw new sjcl.exception.invalid("encrypt on already updated hmac called!");this.update(a);return this.digest(a)};
sjcl.misc.hmac.prototype.reset=function(){this.h=new this.j(this.c[0]);this.m=!1};sjcl.misc.hmac.prototype.update=function(a){this.m=!0;this.h.update(a)};sjcl.misc.hmac.prototype.digest=function(){var a=this.h.finalize(),a=(new this.j(this.c[1])).update(a).finalize();this.reset();return a};
sjcl.misc.pbkdf2=function(a,b,c,d,e){c=c||1E3;if(0>d||0>c)throw sjcl.exception.invalid("invalid params to pbkdf2");"string"===typeof a&&(a=sjcl.codec.utf8String.toBits(a));"string"===typeof b&&(b=sjcl.codec.utf8String.toBits(b));e=e||sjcl.misc.hmac;a=new e(a);var g,f,h,p,k=[],n=sjcl.bitArray;for(p=1;32*k.length<(d||1);p++){e=g=a.encrypt(n.concat(b,[p]));for(f=1;f<c;f++){g=a.encrypt(g);for(h=0;h<g.length;h++)e[h]^=g[h]}k=k.concat(e)}d&&(k=n.clamp(k,d));return k};
  return sjcl; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (hawk, ERRORS) {
  'use strict';
  /* global XMLHttpRequest */

  /**
   * @class Request
   * @constructor
   * @param {String} baseUri Base URI
   * @param {Object} xhr XMLHttpRequest constructor
   * @param {Object} [options={}] Options
   *   @param {Number} [options.localtimeOffsetMsec]
   *   Local time offset with the remote auth server's clock
   */
  function Request (baseUri, xhr, options) {
    if (!options) {
      options = {};
    }
    this.baseUri = baseUri;
    this._localtimeOffsetMsec = options.localtimeOffsetMsec;
    this.xhr = xhr || XMLHttpRequest;
    this.timeout = options.timeout || 30 * 1000;
  }

  /**
   * @method send
   * @param {String} path Request path
   * @param {String} method HTTP Method
   * @param {Object} credentials HAWK Headers
   * @param {Object} jsonPayload JSON Payload
   * @param {Object} [options={}] Options
   *   @param {String} [options.retrying]
   *   Flag indicating if the request is a retry
   *   @param {Array} [options.headers]
   *   A set of extra headers to add to the request
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  Request.prototype.send = function request(path, method, credentials, jsonPayload, options) {
    /*eslint complexity: [2, 8] */
    var xhr = new this.xhr();
    var uri = this.baseUri + path;
    var payload = null;
    var self = this;
    options = options || {};

    if (jsonPayload) {
      payload = JSON.stringify(jsonPayload);
    }

    try {
      xhr.open(method, uri);
    } catch (e) {
      return Promise.reject({ error: 'Unknown error', message: e.toString(), errno: 999 });
    }

    return new Promise(function (resolve, reject) {
      xhr.timeout = self.timeout;

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          var result = xhr.responseText;
          try {
            result = JSON.parse(xhr.responseText);
          } catch (e) { }

          if (result.errno) {
            // Try to recover from a timeskew error and not already tried
            if (result.errno === ERRORS.INVALID_TIMESTAMP && !options.retrying) {
              var serverTime = result.serverTime;
              self._localtimeOffsetMsec = (serverTime * 1000) - new Date().getTime();

              // add to options that the request is retrying
              options.retrying = true;

              return self.send(path, method, credentials, jsonPayload, options)
                .then(resolve, reject);

            } else {
              return reject(result);
            }
          }

          if (typeof xhr.status === 'undefined' || xhr.status !== 200) {
            if (result.length === 0) {
              return reject({ error: 'Timeout error', errno: 999 });
            } else {
              return reject({ error: 'Unknown error', message: result, errno: 999, code: xhr.status });
            }
          }

          resolve(result);
        }
      };

      // calculate Hawk header if credentials are supplied
      if (credentials) {
        var hawkHeader = hawk.client.header(uri, method, {
                            credentials: credentials,
                            payload: payload,
                            contentType: 'application/json',
                            localtimeOffsetMsec: self._localtimeOffsetMsec || 0
                          });
        xhr.setRequestHeader('authorization', hawkHeader.field);
      }

      xhr.setRequestHeader('Content-Type', 'application/json');

      if (options && options.headers) {
        // set extra headers for this request
        for (var header in options.headers) {
          xhr.setRequestHeader(header, options.headers[header]);
        }
      }

      xhr.send(payload);
    });
  };

  return Request;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  return {
    INVALID_TIMESTAMP: 111,
    INCORRECT_EMAIL_CASE: 120
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (sjcl) {
  'use strict';

  /**
   * hkdf - The HMAC-based Key Derivation Function
   * based on https://github.com/mozilla/node-hkdf
   *
   * @class hkdf
   * @param {bitArray} ikm Initial keying material
   * @param {bitArray} info Key derivation data
   * @param {bitArray} salt Salt
   * @param {integer} length Length of the derived key in bytes
   * @return promise object- It will resolve with `output` data
   */
  function hkdf(ikm, info, salt, length) {

    var mac = new sjcl.misc.hmac(salt, sjcl.hash.sha256);
    mac.update(ikm);

    // compute the PRK
    var prk = mac.digest();

    // hash length is 32 because only sjcl.hash.sha256 is used at this moment
    var hashLength = 32;
    var num_blocks = Math.ceil(length / hashLength);
    var prev = sjcl.codec.hex.toBits('');
    var output = '';

    for (var i = 0; i < num_blocks; i++) {
      var hmac = new sjcl.misc.hmac(prk, sjcl.hash.sha256);

      var input = sjcl.bitArray.concat(
        sjcl.bitArray.concat(prev, info),
        sjcl.codec.utf8String.toBits((String.fromCharCode(i + 1)))
      );

      hmac.update(input);

      prev = hmac.digest();
      output += sjcl.codec.hex.fromBits(prev);
    }

    var truncated = sjcl.bitArray.clamp(sjcl.codec.hex.toBits(output), length * 8);

    return Promise.resolve(truncated);
  }

  return hkdf;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
  __webpack_require__(5),
  __webpack_require__(0),
  __webpack_require__(8),
  __webpack_require__(2),
  __webpack_require__(11),
  __webpack_require__(12),
  __webpack_require__(1)
], __WEBPACK_AMD_DEFINE_RESULT__ = (function (ES6Promise, sjcl, credentials, ERRORS, hawkCredentials, metricsContext, Request) {
  'use strict';

  // polyfill ES6 promises on browsers that do not support them.
  ES6Promise.polyfill();

  var VERSION = 'v1';
  var uriVersionRegExp = new RegExp('/' + VERSION + '$');
  var HKDF_SIZE = 2 * 32;

  function isUndefined(val) {
    return typeof val === 'undefined';
  }

  function isNull(val) {
    return val === null;
  }

  function isEmptyObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]' && ! Object.keys(val).length;
  }

  function isEmptyString(val) {
    return val === '';
  }

  function required(val, name) {
    if (isUndefined(val) ||
        isNull(val) ||
        isEmptyObject(val) ||
        isEmptyString(val)) {
      throw new Error('Missing ' + name);
    }
  }

  /**
   * @class FxAccountClient
   * @constructor
   * @param {String} uri Auth Server URI
   * @param {Object} config Configuration
   */
  function FxAccountClient(uri, config) {
    if (! uri && ! config) {
      throw new Error('Firefox Accounts auth server endpoint or configuration object required.');
    }

    if (typeof uri !== 'string') {
      config = uri || {};
      uri = config.uri;
    }

    if (typeof config === 'undefined') {
      config = {};
    }

    if (! uri) {
      throw new Error('FxA auth server uri not set.');
    }

    if (!uriVersionRegExp.test(uri)) {
      uri = uri + '/' + VERSION;
    }

    this.request = new Request(uri, config.xhr, { localtimeOffsetMsec: config.localtimeOffsetMsec });
  }

  FxAccountClient.VERSION = VERSION;

  /**
   * @method signUp
   * @param {String} email Email input
   * @param {String} password Password input
   * @param {Object} [options={}] Options
   *   @param {Boolean} [options.keys]
   *   If `true`, calls the API with `?keys=true` to get the keyFetchToken
   *   @param {String} [options.service]
   *   Opaque alphanumeric token to be included in verification links
   *   @param {String} [options.redirectTo]
   *   a URL that the client should be redirected to after handling the request
   *   @param {String} [options.preVerified]
   *   set email to be verified if possible
   *   @param {String} [options.resume]
   *   Opaque url-encoded string that will be included in the verification link
   *   as a querystring parameter, useful for continuing an OAuth flow for
   *   example.
   *   @param {String} [options.lang]
   *   set the language for the 'Accept-Language' header
   *   @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.signUp = function (email, password, options) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(email, 'email');
        required(password, 'password');

        return credentials.setup(email, password);
      })
      .then(
        function (result) {
          /*eslint complexity: [2, 13] */
          var endpoint = '/account/create';
          var data = {
            email: result.emailUTF8,
            authPW: sjcl.codec.hex.fromBits(result.authPW)
          };
          var requestOpts = {};

          if (options) {
            if (options.service) {
              data.service = options.service;
            }

            if (options.redirectTo) {
              data.redirectTo = options.redirectTo;
            }

            // preVerified is used for unit/functional testing
            if (options.preVerified) {
              data.preVerified = options.preVerified;
            }

            if (options.resume) {
              data.resume = options.resume;
            }

            if (options.keys) {
              endpoint += '?keys=true';
            }

            if (options.lang) {
              requestOpts.headers = {
                'Accept-Language': options.lang
              };
            }

            if (options.metricsContext) {
              data.metricsContext = metricsContext.marshall(options.metricsContext);
            }
          }

          return self.request.send(endpoint, 'POST', null, data, requestOpts)
            .then(
              function(accountData) {
                if (options && options.keys) {
                  accountData.unwrapBKey = sjcl.codec.hex.fromBits(result.unwrapBKey);
                }
                return accountData;
              }
            );
        }
      );
  };

  /**
   * @method signIn
   * @param {String} email Email input
   * @param {String} password Password input
   * @param {Object} [options={}] Options
   *   @param {Boolean} [options.keys]
   *   If `true`, calls the API with `?keys=true` to get the keyFetchToken
   *   @param {Boolean} [options.skipCaseError]
   *   If `true`, the request will skip the incorrect case error
   *   @param {String} [options.service]
   *   Service being signed into
   *   @param {String} [options.reason]
   *   Reason for sign in. Can be one of: `signin`, `password_check`,
   *   `password_change`, `password_reset`
   *   @param {String} [options.redirectTo]
   *   a URL that the client should be redirected to after handling the request
   *   @param {String} [options.resume]
   *   Opaque url-encoded string that will be included in the verification link
   *   as a querystring parameter, useful for continuing an OAuth flow for
   *   example.
   *   @param {String} [options.originalLoginEmail]
   *   If retrying after an "incorrect email case" error, this specifies
   *   the email address as originally entered by the user.
   *   @param {String} [options.verificationMethod]
   *   Request a specific verification method be used for verifying the session,
   *   e.g. 'email-2fa' or 'totp-2fa'.
   *   @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   *   @param {String} [options.unblockCode]
   *   Login unblock code.
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.signIn = function (email, password, options) {
    var self = this;
    options = options || {};

    return Promise.resolve()
      .then(function () {
        required(email, 'email');
        required(password, 'password');

        return credentials.setup(email, password);
      })
      .then(
        function (result) {
          var endpoint = '/account/login';

          if (options.keys) {
            endpoint += '?keys=true';
          }

          var data = {
            email: result.emailUTF8,
            authPW: sjcl.codec.hex.fromBits(result.authPW)
          };

          if (options.metricsContext) {
            data.metricsContext = metricsContext.marshall(options.metricsContext);
          }

          if (options.reason) {
            data.reason = options.reason;
          }

          if (options.redirectTo) {
            data.redirectTo = options.redirectTo;
          }

          if (options.resume) {
            data.resume = options.resume;
          }

          if (options.service) {
            data.service = options.service;
          }

          if (options.unblockCode) {
            data.unblockCode = options.unblockCode;
          }

          if (options.originalLoginEmail) {
            data.originalLoginEmail = options.originalLoginEmail;
          }

          if (options.verificationMethod) {
            data.verificationMethod = options.verificationMethod;
          }

          return self.request.send(endpoint, 'POST', null, data)
            .then(
              function(accountData) {
                if (options.keys) {
                  accountData.unwrapBKey = sjcl.codec.hex.fromBits(result.unwrapBKey);
                }
                return accountData;
              },
              function(error) {
                if (error && error.email && error.errno === ERRORS.INCORRECT_EMAIL_CASE && !options.skipCaseError) {
                  options.skipCaseError = true;
                  options.originalLoginEmail = email;

                  return self.signIn(error.email, password, options);
                } else {
                  throw error;
                }
              }
            );
        }
      );
  };

  /**
   * @method verifyCode
   * @param {String} uid Account ID
   * @param {String} code Verification code
   * @param {Object} [options={}] Options
   *   @param {String} [options.service]
   *   Service being signed into
   *   @param {String} [options.reminder]
   *   Reminder that was used to verify the account
   *   @param {String} [options.type]
   *   Type of code being verified, only supports `secondary` otherwise will verify account/sign-in
   *   @param {Boolean} [options.marketingOptIn]
   *   If `true`, notifies marketing of opt-in intent.
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.verifyCode = function(uid, code, options) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(uid, 'uid');
        required(code, 'verify code');

        var data = {
          uid: uid,
          code: code
        };

        if (options) {
          if (options.service) {
            data.service = options.service;
          }

          if (options.reminder) {
            data.reminder = options.reminder;
          }

          if (options.type) {
            data.type = options.type;
          }

          if (options.marketingOptIn) {
            data.marketingOptIn = true;
          }
        }

        return self.request.send('/recovery_email/verify_code', 'POST', null, data);
      });
  };

  FxAccountClient.prototype.verifyTokenCode = function(sessionToken, uid, code) {
    var self = this;

    required(uid, 'uid');
    required(code, 'verify token code');
    required(sessionToken, 'sessionToken');

    return Promise.resolve()
      .then(function () {
        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function (creds) {
        var data = {
          uid: uid,
          code: code
        };

        return self.request.send('/session/verify/token', 'POST', creds, data);
      });
  };

  /**
   * @method recoveryEmailStatus
   * @param {String} sessionToken sessionToken obtained from signIn
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.recoveryEmailStatus = function(sessionToken) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return self.request.send('/recovery_email/status', 'GET', creds);
      });
  };

  /**
   * Re-sends a verification code to the account's recovery email address.
   *
   * @method recoveryEmailResendCode
   * @param {String} sessionToken sessionToken obtained from signIn
   * @param {Object} [options={}] Options
   *   @param {String} [options.email]
   *   Code will be resent to this email, only used for secondary email codes
   *   @param {String} [options.service]
   *   Opaque alphanumeric token to be included in verification links
   *   @param {String} [options.redirectTo]
   *   a URL that the client should be redirected to after handling the request
   *   @param {String} [options.resume]
   *   Opaque url-encoded string that will be included in the verification link
   *   as a querystring parameter, useful for continuing an OAuth flow for
   *   example.
   *   @param {String} [options.type]
   *   Specifies the type of code to send, currently only supported type is
   *   `upgradeSession`.
   *   @param {String} [options.lang]
   *   set the language for the 'Accept-Language' header
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.recoveryEmailResendCode = function(sessionToken, options) {
    var self = this;
    var data = {};
    var requestOpts = {};

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        if (options) {
          if (options.email) {
            data.email = options.email;
          }

          if (options.service) {
            data.service = options.service;
          }

          if (options.redirectTo) {
            data.redirectTo = options.redirectTo;
          }

          if (options.resume) {
            data.resume = options.resume;
          }

          if (options.type) {
            data.type = options.type;
          }

          if (options.lang) {
            requestOpts.headers = {
              'Accept-Language': options.lang
            };
          }
        }

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return self.request.send('/recovery_email/resend_code', 'POST', creds, data, requestOpts);
      });
  };

  /**
   * Used to ask the server to send a recovery code.
   * The API returns passwordForgotToken to the client.
   *
   * @method passwordForgotSendCode
   * @param {String} email
   * @param {Object} [options={}] Options
   *   @param {String} [options.service]
   *   Opaque alphanumeric token to be included in verification links
   *   @param {String} [options.redirectTo]
   *   a URL that the client should be redirected to after handling the request
   *   @param {String} [options.resume]
   *   Opaque url-encoded string that will be included in the verification link
   *   as a querystring parameter, useful for continuing an OAuth flow for
   *   example.
   *   @param {String} [options.lang]
   *   set the language for the 'Accept-Language' header
   *   @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.passwordForgotSendCode = function(email, options) {
    var self = this;
    var data = {
      email: email
    };
    var requestOpts = {};

    return Promise.resolve()
      .then(function () {
        required(email, 'email');

        if (options) {
          if (options.service) {
            data.service = options.service;
          }

          if (options.redirectTo) {
            data.redirectTo = options.redirectTo;
          }

          if (options.resume) {
            data.resume = options.resume;
          }

          if (options.lang) {
            requestOpts.headers = {
              'Accept-Language': options.lang
            };
          }

          if (options.metricsContext) {
            data.metricsContext = metricsContext.marshall(options.metricsContext);
          }
        }

        return self.request.send('/password/forgot/send_code', 'POST', null, data, requestOpts);
      });
  };

  /**
   * Re-sends a verification code to the account's recovery email address.
   * HAWK-authenticated with the passwordForgotToken.
   *
   * @method passwordForgotResendCode
   * @param {String} email
   * @param {String} passwordForgotToken
   * @param {Object} [options={}] Options
   *   @param {String} [options.service]
   *   Opaque alphanumeric token to be included in verification links
   *   @param {String} [options.redirectTo]
   *   a URL that the client should be redirected to after handling the request
   *   @param {String} [options.resume]
   *   Opaque url-encoded string that will be included in the verification link
   *   as a querystring parameter, useful for continuing an OAuth flow for
   *   example.
   *   @param {String} [options.lang]
   *   set the language for the 'Accept-Language' header
   *   @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.passwordForgotResendCode = function(email, passwordForgotToken, options) {
    var self = this;
    var data = {
      email: email
    };
    var requestOpts = {};

    return Promise.resolve()
      .then(function () {
        required(email, 'email');
        required(passwordForgotToken, 'passwordForgotToken');

        if (options) {
          if (options.service) {
            data.service = options.service;
          }

          if (options.redirectTo) {
            data.redirectTo = options.redirectTo;
          }

          if (options.resume) {
            data.resume = options.resume;
          }

          if (options.lang) {
            requestOpts.headers = {
              'Accept-Language': options.lang
            };
          }

          if (options.metricsContext) {
            data.metricsContext = metricsContext.marshall(options.metricsContext);
          }
        }

        return hawkCredentials(passwordForgotToken, 'passwordForgotToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return self.request.send('/password/forgot/resend_code', 'POST', creds, data, requestOpts);
      });
  };

  /**
   * Submits the verification token to the server.
   * The API returns accountResetToken to the client.
   * HAWK-authenticated with the passwordForgotToken.
   *
   * @method passwordForgotVerifyCode
   * @param {String} code
   * @param {String} passwordForgotToken
   * @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.passwordForgotVerifyCode = function(code, passwordForgotToken, options) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(code, 'reset code');
        required(passwordForgotToken, 'passwordForgotToken');

        return hawkCredentials(passwordForgotToken, 'passwordForgotToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        var data = {
          code: code
        };

        if (options && options.metricsContext) {
          data.metricsContext = metricsContext.marshall(options.metricsContext);
        }

        return self.request.send('/password/forgot/verify_code', 'POST', creds, data);
      });
  };

  /**
   * Returns the status for the passwordForgotToken.
   * If the request returns a success response, the token has not yet been consumed.

   * @method passwordForgotStatus
   * @param {String} passwordForgotToken
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.passwordForgotStatus = function(passwordForgotToken) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(passwordForgotToken, 'passwordForgotToken');

        return hawkCredentials(passwordForgotToken, 'passwordForgotToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return self.request.send('/password/forgot/status', 'GET', creds);
      });
  };

  /**
   * The API returns reset result to the client.
   * HAWK-authenticated with accountResetToken
   *
   * @method accountReset
   * @param {String} email
   * @param {String} newPassword
   * @param {String} accountResetToken
   * @param {Object} [options={}] Options
   *   @param {Boolean} [options.keys]
   *   If `true`, a new `keyFetchToken` is provisioned. `options.sessionToken`
   *   is required if `options.keys` is true.
   *   @param {Boolean} [options.sessionToken]
   *   If `true`, a new `sessionToken` is provisioned.
   *   @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.accountReset = function(email, newPassword, accountResetToken, options) {
    var self = this;
    var data = {};
    var unwrapBKey;

    options = options || {};

    if (options.sessionToken) {
      data.sessionToken = options.sessionToken;
    }

    if (options.metricsContext) {
      data.metricsContext = metricsContext.marshall(options.metricsContext);
    }

    return Promise.resolve()
      .then(function () {
        required(email, 'email');
        required(newPassword, 'new password');
        required(accountResetToken, 'accountResetToken');

        if (options.keys) {
          required(options.sessionToken, 'sessionToken');
        }

        return credentials.setup(email, newPassword);
      })
      .then(
        function (result) {
          if (options.keys) {
            unwrapBKey = sjcl.codec.hex.fromBits(result.unwrapBKey);
          }

          data.authPW = sjcl.codec.hex.fromBits(result.authPW);

          return hawkCredentials(accountResetToken, 'accountResetToken',  HKDF_SIZE);
        }
      ).then(
        function (creds) {
          var queryParams = '';
          if (options.keys) {
            queryParams = '?keys=true';
          }

          var endpoint = '/account/reset' + queryParams;
          return self.request.send(endpoint, 'POST', creds, data)
            .then(
              function(accountData) {
                if (options.keys && accountData.keyFetchToken) {
                  accountData.unwrapBKey = unwrapBKey;
                }

                return accountData;
              }
            );
        }
      );
  };

  /**
   * Get the base16 bundle of encrypted kA|wrapKb.
   *
   * @method accountKeys
   * @param {String} keyFetchToken
   * @param {String} oldUnwrapBKey
   * @return {Promise} A promise that will be fulfilled with JSON of {kA, kB}  of the key bundle
   */
  FxAccountClient.prototype.accountKeys = function(keyFetchToken, oldUnwrapBKey) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(keyFetchToken, 'keyFetchToken');
        required(oldUnwrapBKey, 'oldUnwrapBKey');

        return hawkCredentials(keyFetchToken, 'keyFetchToken',  3 * 32);
      })
      .then(function(creds) {
        var bundleKey = sjcl.codec.hex.fromBits(creds.bundleKey);

        return self.request.send('/account/keys', 'GET', creds)
          .then(
            function(payload) {

              return credentials.unbundleKeyFetchResponse(bundleKey, payload.bundle);
            });
      })
      .then(function(keys) {
        return {
          kB: sjcl.codec.hex.fromBits(
            credentials.xor(
              sjcl.codec.hex.toBits(keys.wrapKB),
              sjcl.codec.hex.toBits(oldUnwrapBKey)
            )
          ),
          kA: keys.kA
        };
      });
  };

  /**
   * This deletes the account completely. All stored data is erased.
   *
   * @method accountDestroy
   * @param {String} email Email input
   * @param {String} password Password input
   * @param {Object} [options={}] Options
   *   @param {Boolean} [options.skipCaseError]
   *   If `true`, the request will skip the incorrect case error
   * @param {String} sessionToken User session token
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.accountDestroy = function (email, password, options, sessionToken) {
    var self = this;
    options = options || {};

    return Promise.resolve()
      .then(function () {
        required(email, 'email');
        required(password, 'password');

        var defers = [credentials.setup(email, password)];
        if (sessionToken) {
          defers.push(hawkCredentials(sessionToken, 'sessionToken', HKDF_SIZE));
        }

        return Promise.all(defers);
      })
      .then(
        function (results) {
          var auth = results[0];
          var creds = results[1];
          var data = {
            email: auth.emailUTF8,
            authPW: sjcl.codec.hex.fromBits(auth.authPW)
          };

          return self.request.send('/account/destroy', 'POST', creds, data)
            .then(
              function (response) {
                return response;
              },
              function (error) {
                // if incorrect email case error
                if (error && error.email && error.errno === ERRORS.INCORRECT_EMAIL_CASE && !options.skipCaseError) {
                  options.skipCaseError = true;

                  return self.accountDestroy(error.email, password, options, sessionToken);
                } else {
                  throw error;
                }
              }
            );
        }
      );
  };

  /**
   * Gets the status of an account by uid.
   *
   * @method accountStatus
   * @param {String} uid User account id
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.accountStatus = function(uid) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(uid, 'uid');

        return self.request.send('/account/status?uid=' + uid, 'GET');
      });
  };

  /**
   * Gets the status of an account by email.
   *
   * @method accountStatusByEmail
   * @param {String} email User account email
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.accountStatusByEmail = function(email) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(email, 'email');

        return self.request.send('/account/status', 'POST', null, {email: email});
      });
  };

  /**
   * Destroys this session, by invalidating the sessionToken.
   *
   * @method sessionDestroy
   * @param {String} sessionToken User session token
   * @param {Object} [options={}] Options
   *   @param {String} [options.customSessionToken] Override which session token to destroy for this same user
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.sessionDestroy = function(sessionToken, options) {
    var self = this;
    var data = {};
    options = options || {};

    if (options.customSessionToken) {
      data.customSessionToken = options.customSessionToken;
    }

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return self.request.send('/session/destroy', 'POST', creds, data);
      });
  };

  /**
   * Responds successfully if the session status is valid, requires the sessionToken.
   *
   * @method sessionStatus
   * @param {String} sessionToken User session token
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.sessionStatus = function(sessionToken) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return self.request.send('/session/status', 'GET', creds);
      });
  };

  /**
   * @method sessionReauth
   * @param {String} sessionToken sessionToken obtained from signIn
   * @param {String} email Email input
   * @param {String} password Password input
   * @param {Object} [options={}] Options
   *   @param {Boolean} [options.keys]
   *   If `true`, calls the API with `?keys=true` to get the keyFetchToken
   *   @param {Boolean} [options.skipCaseError]
   *   If `true`, the request will skip the incorrect case error
   *   @param {String} [options.service]
   *   Service being accessed that needs reauthentication
   *   @param {String} [options.reason]
   *   Reason for reauthentication. Can be one of: `signin`, `password_check`,
   *   `password_change`, `password_reset`
   *   @param {String} [options.redirectTo]
   *   a URL that the client should be redirected to after handling the request
   *   @param {String} [options.resume]
   *   Opaque url-encoded string that will be included in the verification link
   *   as a querystring parameter, useful for continuing an OAuth flow for
   *   example.
   *   @param {String} [options.originalLoginEmail]
   *   If retrying after an "incorrect email case" error, this specifies
   *   the email address as originally entered by the user.
   *   @param {String} [options.verificationMethod]
   *   Request a specific verification method be used for verifying the session,
   *   e.g. 'email-2fa' or 'totp-2fa'.
   *   @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   *   @param {String} [options.unblockCode]
   *   Login unblock code.
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.sessionReauth = function (sessionToken, email, password, options) {
    var self = this;
    options = options || {};

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(email, 'email');
        required(password, 'password');

        return credentials.setup(email, password);
      })
      .then(
        function (result) {
          var endpoint = '/session/reauth';

          if (options.keys) {
            endpoint += '?keys=true';
          }

          var data = {
            email: result.emailUTF8,
            authPW: sjcl.codec.hex.fromBits(result.authPW)
          };

          if (options.metricsContext) {
            data.metricsContext = metricsContext.marshall(options.metricsContext);
          }

          if (options.reason) {
            data.reason = options.reason;
          }

          if (options.redirectTo) {
            data.redirectTo = options.redirectTo;
          }

          if (options.resume) {
            data.resume = options.resume;
          }

          if (options.service) {
            data.service = options.service;
          }

          if (options.unblockCode) {
            data.unblockCode = options.unblockCode;
          }

          if (options.originalLoginEmail) {
            data.originalLoginEmail = options.originalLoginEmail;
          }

          if (options.verificationMethod) {
            data.verificationMethod = options.verificationMethod;
          }

          return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE)
            .then(function (creds) {
              return self.request.send(endpoint, 'POST', creds, data);
            })
            .then(
              function(accountData) {
                if (options.keys) {
                  accountData.unwrapBKey = sjcl.codec.hex.fromBits(result.unwrapBKey);
                }
                return accountData;
              },
              function(error) {
                if (error && error.email && error.errno === ERRORS.INCORRECT_EMAIL_CASE && !options.skipCaseError) {
                  options.skipCaseError = true;
                  options.originalLoginEmail = email;

                  return self.sessionReauth(sessionToken, error.email, password, options);
                } else {
                  throw error;
                }
              }
            );
        }
      );
  };

  /**
   * Sign a BrowserID public key
   *
   * @method certificateSign
   * @param {String} sessionToken User session token
   * @param {Object} publicKey The key to sign
   * @param {int} duration Time interval from now when the certificate will expire in milliseconds
   * @param {Object} [options={}] Options
   *   @param {String} [service=''] The requesting service, sent via the query string
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.certificateSign = function(sessionToken, publicKey, duration, options) {
    var self = this;
    var data = {
      publicKey: publicKey,
      duration: duration
    };

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(publicKey, 'publicKey');
        required(duration, 'duration');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        options = options || {};

        var queryString = '';
        if (options.service) {
          queryString = '?service=' + encodeURIComponent(options.service);
        }

        return self.request.send('/certificate/sign' + queryString, 'POST', creds, data);
      });
  };

  /**
   * Change the password from one known value to another.
   *
   * @method passwordChange
   * @param {String} email
   * @param {String} oldPassword
   * @param {String} newPassword
   * @param {Object} [options={}] Options
   *   @param {Boolean} [options.keys]
   *   If `true`, calls the API with `?keys=true` to get a new keyFetchToken
   *   @param {String} [options.sessionToken]
   *   If a `sessionToken` is passed, a new sessionToken will be returned
   *   with the same `verified` status as the existing sessionToken.
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.passwordChange = function(email, oldPassword, newPassword, options) {
    var self = this;
    options = options || {};

    return Promise.resolve()
      .then(function () {
        required(email, 'email');
        required(oldPassword, 'old password');
        required(newPassword, 'new password');

        return self._passwordChangeStart(email, oldPassword);
      })
      .then(function (credentials) {

        var oldCreds = credentials;
        var emailToHashWith = credentials.emailToHashWith || email;

        return self._passwordChangeKeys(oldCreds)
          .then(function (keys) {

            return self._passwordChangeFinish(emailToHashWith, newPassword, oldCreds, keys, options);
          });
      });

  };

  /**
   * First step to change the password.
   *
   * @method passwordChangeStart
   * @private
   * @param {String} email
   * @param {String} oldPassword
   * @param {Object} [options={}] Options
   *   @param {Boolean} [options.skipCaseError]
   *   If `true`, the request will skip the incorrect case error
   * @return {Promise} A promise that will be fulfilled with JSON of `xhr.responseText` and `oldUnwrapBKey`
   */
  FxAccountClient.prototype._passwordChangeStart = function(email, oldPassword, options) {
    var self = this;
    options = options || {};

    return Promise.resolve()
      .then(function () {
        required(email, 'email');
        required(oldPassword, 'old password');

        return credentials.setup(email, oldPassword);
      })
      .then(function (oldCreds) {
        var data = {
          email: oldCreds.emailUTF8,
          oldAuthPW: sjcl.codec.hex.fromBits(oldCreds.authPW)
        };

        return self.request.send('/password/change/start', 'POST', null, data)
          .then(
            function(passwordData) {
              passwordData.oldUnwrapBKey = sjcl.codec.hex.fromBits(oldCreds.unwrapBKey);

              // Similar to password reset, this keeps the contract that we always
              // hash passwords with the original account email.
              passwordData.emailToHashWith = email;
              return passwordData;
            },
            function(error) {
              // if incorrect email case error
              if (error && error.email && error.errno === ERRORS.INCORRECT_EMAIL_CASE && !options.skipCaseError) {
                options.skipCaseError = true;

                return self._passwordChangeStart(error.email, oldPassword, options);
              } else {
                throw error;
              }
            }
          );
      });
  };

  function checkCreds(creds) {
    required(creds, 'credentials');
    required(creds.oldUnwrapBKey, 'credentials.oldUnwrapBKey');
    required(creds.keyFetchToken, 'credentials.keyFetchToken');
    required(creds.passwordChangeToken, 'credentials.passwordChangeToken');
  }

  /**
   * Second step to change the password.
   *
   * @method _passwordChangeKeys
   * @private
   * @param {Object} oldCreds This object should consists of `oldUnwrapBKey`, `keyFetchToken` and `passwordChangeToken`.
   * @return {Promise} A promise that will be fulfilled with JSON of `xhr.responseText`
   */
  FxAccountClient.prototype._passwordChangeKeys = function(oldCreds) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        checkCreds(oldCreds);
      })
      .then(function () {
        return self.accountKeys(oldCreds.keyFetchToken, oldCreds.oldUnwrapBKey);
      });
  };

  /**
   * Third step to change the password.
   *
   * @method _passwordChangeFinish
   * @private
   * @param {String} email
   * @param {String} newPassword
   * @param {Object} oldCreds This object should consists of `oldUnwrapBKey`, `keyFetchToken` and `passwordChangeToken`.
   * @param {Object} keys This object should contain the unbundled keys
   * @param {Object} [options={}] Options
   *   @param {Boolean} [options.keys]
   *   If `true`, calls the API with `?keys=true` to get the keyFetchToken
   *   @param {String} [options.sessionToken]
   *   If a `sessionToken` is passed, a new sessionToken will be returned
   *   with the same `verified` status as the existing sessionToken.
   * @return {Promise} A promise that will be fulfilled with JSON of `xhr.responseText`
   */
  FxAccountClient.prototype._passwordChangeFinish = function(email, newPassword, oldCreds, keys, options) {
    options = options || {};
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(email, 'email');
        required(newPassword, 'new password');
        checkCreds(oldCreds);
        required(keys, 'keys');
        required(keys.kB, 'keys.kB');

        var defers = [];
        defers.push(credentials.setup(email, newPassword));
        defers.push(hawkCredentials(oldCreds.passwordChangeToken, 'passwordChangeToken',  HKDF_SIZE));

        if (options.sessionToken) {
          // Unbundle session data to get session id
          defers.push(hawkCredentials(options.sessionToken, 'sessionToken',  HKDF_SIZE));
        }

        return Promise.all(defers);
      })
      .then(function (results) {
        var newCreds = results[0];
        var hawkCreds = results[1];
        var sessionData = results[2];
        var newWrapKb = sjcl.codec.hex.fromBits(
          credentials.xor(
            sjcl.codec.hex.toBits(keys.kB),
            newCreds.unwrapBKey
          )
        );

        var queryParams = '';
        if (options.keys) {
          queryParams = '?keys=true';
        }

        var sessionTokenId;
        if (sessionData && sessionData.id) {
          sessionTokenId = sessionData.id;
        }

        return self.request.send('/password/change/finish' + queryParams, 'POST', hawkCreds, {
          wrapKb: newWrapKb,
          authPW: sjcl.codec.hex.fromBits(newCreds.authPW),
          sessionToken: sessionTokenId
        })
        .then(function (accountData) {
          if (options.keys && accountData.keyFetchToken) {
            accountData.unwrapBKey = sjcl.codec.hex.fromBits(newCreds.unwrapBKey);
          }
          return accountData;
        });
      });
  };

  /**
   * Get 32 bytes of random data. This should be combined with locally-sourced entropy when creating salts, etc.
   *
   * @method getRandomBytes
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.getRandomBytes = function() {

    return this.request.send('/get_random_bytes', 'POST');
  };

  /**
   * Add a new device
   *
   * @method deviceRegister
   * @param {String} sessionToken User session token
   * @param {String} deviceName Name of device
   * @param {String} deviceType Type of device (mobile|desktop)
   * @param {Object} [options={}] Options
   *   @param {string} [options.deviceCallback] Device's push endpoint.
   *   @param {string} [options.devicePublicKey] Public key used to encrypt push messages.
   *   @param {string} [options.deviceAuthKey] Authentication secret used to encrypt push messages.
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.deviceRegister = function (sessionToken, deviceName, deviceType, options) {
    var request = this.request;
    options = options || {};

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(deviceName, 'deviceName');
        required(deviceType, 'deviceType');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        var data = {
          name: deviceName,
          type: deviceType
        };

        if (options.deviceCallback) {
          data.pushCallback = options.deviceCallback;
        }

        if (options.devicePublicKey && options.deviceAuthKey) {
          data.pushPublicKey = options.devicePublicKey;
          data.pushAuthKey = options.deviceAuthKey;
        }

        return request.send('/account/device', 'POST', creds, data);
      });
  };

  /**
   * Update the name of an existing device
   *
   * @method deviceUpdate
   * @param {String} sessionToken User session token
   * @param {String} deviceId User-unique identifier of device
   * @param {String} deviceName Name of device
   * @param {Object} [options={}] Options
   *   @param {string} [options.deviceCallback] Device's push endpoint.
   *   @param {string} [options.devicePublicKey] Public key used to encrypt push messages.
   *   @param {string} [options.deviceAuthKey] Authentication secret used to encrypt push messages.
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.deviceUpdate = function (sessionToken, deviceId, deviceName, options) {
    var request = this.request;
    options = options || {};

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(deviceId, 'deviceId');
        required(deviceName, 'deviceName');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        var data = {
          id: deviceId,
          name: deviceName
        };

        if (options.deviceCallback) {
          data.pushCallback = options.deviceCallback;
        }

        if (options.devicePublicKey && options.deviceAuthKey) {
          data.pushPublicKey = options.devicePublicKey;
          data.pushAuthKey = options.deviceAuthKey;
        }

        return request.send('/account/device', 'POST', creds, data);
      });
  };

  /**
   * Unregister an existing device
   *
   * @method deviceDestroy
   * @param {String} sessionToken Session token obtained from signIn
   * @param {String} deviceId User-unique identifier of device
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.deviceDestroy = function (sessionToken, deviceId) {
    var request = this.request;

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(deviceId, 'deviceId');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        var data = {
          id: deviceId
        };

        return request.send('/account/device/destroy', 'POST', creds, data);
      });
  };

  /**
   * Get a list of all devices for a user
   *
   * @method deviceList
   * @param {String} sessionToken sessionToken obtained from signIn
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.deviceList = function (sessionToken) {
    var request = this.request;

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return request.send('/account/devices', 'GET', creds);
      });
  };

  /**
   * Get a list of user's sessions
   *
   * @method sessions
   * @param {String} sessionToken sessionToken obtained from signIn
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.sessions = function (sessionToken) {
    var request = this.request;

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return request.send('/account/sessions', 'GET', creds);
      });
  };

  /**
   * Send an unblock code
   *
   * @method sendUnblockCode
   * @param {String} email email where to send the login authorization code
   * @param {Object} [options={}] Options
   *   @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.sendUnblockCode = function (email, options) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(email, 'email');

        var data = {
          email: email
        };

        if (options && options.metricsContext) {
          data.metricsContext = metricsContext.marshall(options.metricsContext);
        }

        return self.request.send('/account/login/send_unblock_code', 'POST', null, data);
      });
  };

  /**
   * Reject a login unblock code. Code will be deleted from the server
   * and will not be able to be used again.
   *
   * @method rejectLoginAuthorizationCode
   * @param {String} uid Account ID
   * @param {String} unblockCode unblock code
   * @return {Promise} A promise that will be fulfilled with JSON `xhr.responseText` of the request
   */
  FxAccountClient.prototype.rejectUnblockCode = function (uid, unblockCode) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(uid, 'uid');
        required(unblockCode, 'unblockCode');

        var data = {
          uid: uid,
          unblockCode: unblockCode
        };

        return self.request.send('/account/login/reject_unblock_code', 'POST', null, data);
      });
  };

  /**
   * Send an sms.
   *
   * @method sendSms
   * @param {String} sessionToken SessionToken obtained from signIn
   * @param {String} phoneNumber Phone number sms will be sent to
   * @param {String} messageId Corresponding message id that will be sent
   * @param {Object} [options={}] Options
   *   @param {String} [options.lang] Language that sms will be sent in
   *   @param {Array} [options.features] Array of features to be enabled for the request
   *   @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   */
  FxAccountClient.prototype.sendSms = function (sessionToken, phoneNumber, messageId, options) {
    var request = this.request;

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(phoneNumber, 'phoneNumber');
        required(messageId, 'messageId');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        var data = {
          phoneNumber: phoneNumber,
          messageId: messageId
        };
        var requestOpts = {};

        if (options) {
          if (options.lang) {
            requestOpts.headers = {
              'Accept-Language': options.lang
            };
          }

          if (options.features) {
            data.features = options.features;
          }

          if (options.metricsContext) {
            data.metricsContext = metricsContext.marshall(options.metricsContext);
          }
        }

        return request.send('/sms', 'POST', creds, data, requestOpts);
      });
  };

  /**
   * Get SMS status for the current user.
   *
   * @method smsStatus
   * @param {String} sessionToken SessionToken obtained from signIn
   * @param {Object} [options={}] Options
   *   @param {String} [options.country] country Country to force for testing.
   */
  FxAccountClient.prototype.smsStatus = function (sessionToken, options) {
    var request = this.request;
    options = options || {};

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function (creds) {
        var url = '/sms/status';
        if (options.country) {
          url += '?country=' + encodeURIComponent(options.country);
        }
        return request.send(url, 'GET', creds);
      });
  };

  /**
   * Consume a signinCode.
   *
   * @method consumeSigninCode
   * @param {String} code The signinCode entered by the user
   * @param {String} flowId Identifier for the current event flow
   * @param {Number} flowBeginTime Timestamp for the flow.begin event
   * @param {String} [deviceId] Identifier for the current device
   */
  FxAccountClient.prototype.consumeSigninCode = function (code, flowId, flowBeginTime, deviceId) {
    var self = this;

    return Promise.resolve()
      .then(function () {
        required(code, 'code');
        required(flowId, 'flowId');
        required(flowBeginTime, 'flowBeginTime');

        return self.request.send('/signinCodes/consume', 'POST', null, {
          code: code,
          metricsContext: {
            deviceId: deviceId,
            flowId: flowId,
            flowBeginTime: flowBeginTime
          }
        });
      });
  };

  /**
   * Get the recovery emails associated with the signed in account.
   *
   * @method recoveryEmails
   * @param {String} sessionToken SessionToken obtained from signIn
   */
  FxAccountClient.prototype.recoveryEmails = function (sessionToken) {
    var request = this.request;

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return request.send('/recovery_emails', 'GET', creds);
      });
  };

  /**
   * Create a new recovery email for the signed in account.
   *
   * @method recoveryEmailCreate
   * @param {String} sessionToken SessionToken obtained from signIn
   * @param {String} email new email to be added
   */
  FxAccountClient.prototype.recoveryEmailCreate = function (sessionToken, email) {
    var request = this.request;

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(sessionToken, 'email');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        var data = {
          email: email
        };

        return request.send('/recovery_email', 'POST', creds, data);
      });
  };

  /**
   * Remove the recovery email for the signed in account.
   *
   * @method recoveryEmailDestroy
   * @param {String} sessionToken SessionToken obtained from signIn
   * @param {String} email email to be removed
   */
  FxAccountClient.prototype.recoveryEmailDestroy = function (sessionToken, email) {
    var request = this.request;

    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(sessionToken, 'email');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        var data = {
          email: email
        };

        return request.send('/recovery_email/destroy', 'POST', creds, data);
      });
  };

  /**
   * Changes user's primary email address.
   *
   * @method recoveryEmailSetPrimaryEmail
   * @param {String} sessionToken SessionToken obtained from signIn
   * @param {String} email Email that will be the new primary email for user
   */
  FxAccountClient.prototype.recoveryEmailSetPrimaryEmail = function (sessionToken, email) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        var data = {
          email: email
        };
        return request.send('/recovery_email/set_primary', 'POST', creds, data);
      });
  };

  /**
   * Creates a new TOTP token for the user associated with this session.
   *
   * @method createTotpToken
   * @param {String} sessionToken SessionToken obtained from signIn
   * @param {Object} [options.metricsContext={}] Metrics context metadata
   *   @param {String} options.metricsContext.deviceId identifier for the current device
   *   @param {String} options.metricsContext.flowId identifier for the current event flow
   *   @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *   @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *   @param {Number} options.metricsContext.utmContent content identifier
   *   @param {Number} options.metricsContext.utmMedium acquisition medium
   *   @param {Number} options.metricsContext.utmSource traffic source
   *   @param {Number} options.metricsContext.utmTerm search terms
   */
  FxAccountClient.prototype.createTotpToken = function (sessionToken, options) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken', HKDF_SIZE);
      })
      .then(function (creds) {
        var data = {};

        if (options && options.metricsContext) {
          data.metricsContext = metricsContext.marshall(options.metricsContext);
        }

        return request.send('/totp/create', 'POST', creds, data);
      });
  };

  /**
   * Deletes this user's TOTP token.
   *
   * @method deleteTotpToken
   * @param {String} sessionToken SessionToken obtained from signIn
   */
  FxAccountClient.prototype.deleteTotpToken = function (sessionToken) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return request.send('/totp/destroy', 'POST', creds, {});
      });
  };

  /**
   * Check to see if the current user has a TOTP token associated with
   * their account.
   *
   * @method checkTotpTokenExists
   * @param {String} sessionToken SessionToken obtained from signIn
   */
  FxAccountClient.prototype.checkTotpTokenExists = function (sessionToken) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken',  HKDF_SIZE);
      })
      .then(function(creds) {
        return request.send('/totp/exists', 'GET', creds);
      });
  };

  /**
   * Verify tokens if using a valid TOTP code.
   *
   * @method verifyTotpCode
   * @param {String} sessionToken SessionToken obtained from signIn
   * @param {String} code TOTP code to verif
   * @param {Object} [options.metricsContext={}] Metrics context metadata
   *   @param {String} options.metricsContext.deviceId identifier for the current device
   *   @param {String} options.metricsContext.flowId identifier for the current event flow
   *   @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *   @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *   @param {Number} options.metricsContext.utmContent content identifier
   *   @param {Number} options.metricsContext.utmMedium acquisition medium
   *   @param {Number} options.metricsContext.utmSource traffic source
   *   @param {Number} options.metricsContext.utmTerm search terms
   * @param {String} [options.service] Service being used
   */
  FxAccountClient.prototype.verifyTotpCode = function (sessionToken, code, options) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(code, 'code');

        return hawkCredentials(sessionToken, 'sessionToken', HKDF_SIZE);
      })
      .then(function (creds) {
        var data = {
          code: code
        };

        if (options && options.service) {
          data.service = options.service;
        }

        if (options && options.metricsContext) {
          data.metricsContext = metricsContext.marshall(options.metricsContext);
        }

        return request.send('/session/verify/totp', 'POST', creds, data);
      });
  };

  /**
   * Replace user's recovery codes.
   *
   * @method replaceRecoveryCodes
   * @param {String} sessionToken SessionToken obtained from signIn
   */
  FxAccountClient.prototype.replaceRecoveryCodes = function (sessionToken) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken', HKDF_SIZE);
      })
      .then(function (creds) {

        return request.send('/recoveryCodes', 'GET', creds);
      });
  };

  /**
   * Consume recovery code.
   *
   * @method consumeRecoveryCode
   * @param {String} sessionToken SessionToken obtained from signIn
   * @param {String} code recovery code
   * @param {Object} [options.metricsContext={}] Metrics context metadata
   *   @param {String} options.metricsContext.deviceId identifier for the current device
   *   @param {String} options.metricsContext.flowId identifier for the current event flow
   *   @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *   @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *   @param {Number} options.metricsContext.utmContent content identifier
   *   @param {Number} options.metricsContext.utmMedium acquisition medium
   *   @param {Number} options.metricsContext.utmSource traffic source
   *   @param {Number} options.metricsContext.utmTerm search terms
   */
  FxAccountClient.prototype.consumeRecoveryCode = function (sessionToken, code, options) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(code, 'code');

        return hawkCredentials(sessionToken, 'sessionToken', HKDF_SIZE);
      })
      .then(function (creds) {
        var data = {
          code: code
        };

        if (options && options.metricsContext) {
          data.metricsContext = metricsContext.marshall(options.metricsContext);
        }

        return request.send('/session/verify/recoveryCode', 'POST', creds, data);
      });
  };

  /**
   * Creates a new recovery key for the account. The recovery key contains encrypted
   * data the corresponds the the accounts current `kB`. This data can be used during
   * the password reset process to avoid regenerating the `kB`.
   *
   * @param sessionToken
   * @param recoveryKeyId The recoveryKeyId that can be used to retrieve saved bundle
   * @param bundle The encrypted recovery bundle to store
   * @returns {Promise} A promise that will be fulfilled with decoded recovery data (`kB`)
   */
  FxAccountClient.prototype.createRecoveryKey = function (sessionToken, recoveryKeyId, bundle) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');
        required(recoveryKeyId, 'recoveryKeyId');
        required(bundle, 'bundle');

        return hawkCredentials(sessionToken, 'sessionToken', HKDF_SIZE);
      })
      .then(function (creds) {
        var data = {
          recoveryKeyId: recoveryKeyId,
          recoveryData: bundle
        };

        return request.send('/recoveryKey', 'POST', creds, data);
      });
  };

  /**
   * Retrieves the encrypted recovery data that corresponds to the recovery key which
   * then gets decoded into the stored `kB`.
   *
   * @param accountResetToken
   * @param recoveryKeyId The recovery key id to retrieve encrypted bundle
   * @returns {Promise} A promise that will be fulfilled with decoded recovery data (`kB`)
   */
  FxAccountClient.prototype.getRecoveryKey = function (accountResetToken, recoveryKeyId) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(accountResetToken, 'accountResetToken');
        required(recoveryKeyId, 'recoveryKeyId');

        return hawkCredentials(accountResetToken, 'accountResetToken',  HKDF_SIZE);
      })
      .then(function (creds) {
        return request.send('/recoveryKey/' + recoveryKeyId, 'GET', creds);
      });
  };

  /**
   * Reset a user's account using keys (kB) derived from a recovery key. This
   * process can be used to maintain the account's original kB.
   *
   * @param accountResetToken The account reset token
   * @param email The current email of the account
   * @param newPassword The new password of the account
   * @param recoveryKeyId The recovery key id used for account recovery
   * @param keys Keys used to create the new wrapKb
   * @param {Object} [options={}] Options
   *   @param {Boolean} [options.keys]
   *   If `true`, a new `keyFetchToken` is provisioned. `options.sessionToken`
   *   is required if `options.keys` is true.
   *   @param {Boolean} [options.sessionToken]
   *   If `true`, a new `sessionToken` is provisioned.
   *   @param {Object} [options.metricsContext={}] Metrics context metadata
   *     @param {String} options.metricsContext.deviceId identifier for the current device
   *     @param {String} options.metricsContext.flowId identifier for the current event flow
   *     @param {Number} options.metricsContext.flowBeginTime flow.begin event time
   *     @param {Number} options.metricsContext.utmCampaign marketing campaign identifier
   *     @param {Number} options.metricsContext.utmContent content identifier
   *     @param {Number} options.metricsContext.utmMedium acquisition medium
   *     @param {Number} options.metricsContext.utmSource traffic source
   *     @param {Number} options.metricsContext.utmTerm search terms
   * @returns {Promise} A promise that will be fulfilled with updated account data
   */
  FxAccountClient.prototype.resetPasswordWithRecoveryKey = function (accountResetToken, email, newPassword, recoveryKeyId, keys, options) {
    options = options || {};
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(email, 'email');
        required(newPassword, 'new password');
        required(keys, 'keys');
        required(keys.kB, 'keys.kB');
        required(accountResetToken, 'accountResetToken');
        required(recoveryKeyId, 'recoveryKeyId');

        var defers = [];
        defers.push(credentials.setup(email, newPassword));
        defers.push(hawkCredentials(accountResetToken, 'accountResetToken', HKDF_SIZE));

        return Promise.all(defers);
      })
      .then(function (results) {
        var newCreds = results[0];
        var hawkCreds = results[1];
        var newWrapKb = sjcl.codec.hex.fromBits(
          credentials.xor(
            sjcl.codec.hex.toBits(keys.kB),
            newCreds.unwrapBKey
          )
        );

        var data = {
          wrapKb: newWrapKb,
          authPW: sjcl.codec.hex.fromBits(newCreds.authPW),
          recoveryKeyId: recoveryKeyId
        };

        if (options.sessionToken) {
          data.sessionToken = options.sessionToken;
        }

        if (options.keys) {
          required(options.sessionToken, 'sessionToken');
        }

        if (options.metricsContext) {
          data.metricsContext = metricsContext.marshall(options.metricsContext);
        }

        var queryParams = '';
        if (options.keys) {
          queryParams = '?keys=true';
        }

        return request.send('/account/reset' + queryParams, 'POST', hawkCreds, data)
          .then(function (accountData) {
            if (options.keys && accountData.keyFetchToken) {
              accountData.unwrapBKey = sjcl.codec.hex.fromBits(newCreds.unwrapBKey);
            }
            return accountData;
          });
      });
  };

  /**
   * Deletes the recovery key associated with this user.
   *
   * @param sessionToken
   */
  FxAccountClient.prototype.deleteRecoveryKey = function (sessionToken) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {
        required(sessionToken, 'sessionToken');

        return hawkCredentials(sessionToken, 'sessionToken', HKDF_SIZE);
      })
      .then(function (creds) {
        return request.send('/recoveryKey', 'DELETE', creds, {});
      });
  };

  /**
   * This checks to see if a recovery key exists for a user. This check
   * can be performed with either a sessionToken or an email.
   *
   * Typically, sessionToken is used when checking from within the `/settings`
   * view. If it exists, we can give the user an option to revoke the key.
   *
   * Checking with an email is typically performed during the password reset
   * flow. It is used to decide whether or not we can redirect a user to
   * the `Reset password with recovery key` page or regular password reset page.
   *
   * @param sessionToken
   * @param {String} email User's email
   * @returns {Promise} A promise that will be fulfilled with whether or not account has recovery ket
   */
  FxAccountClient.prototype.recoveryKeyExists = function (sessionToken, email) {
    var request = this.request;
    return Promise.resolve()
      .then(function () {

        if (sessionToken) {
          return hawkCredentials(sessionToken, 'sessionToken', HKDF_SIZE)
            .then(function (creds) {
              return request.send('/recoveryKey/exists', 'POST', creds, {});
            });
        }

        return request.send('/recoveryKey/exists', 'POST', null, {email: email});
      });
  };

  /**
   * Check for a required argument. Exposed for unit testing.
   *
   * @param {Value} val - value to check
   * @param {String} name - name of value
   * @throws {Error} if argument is falsey, or an empty object
   */
  FxAccountClient.prototype._required = required;

  return FxAccountClient;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ES6Promise = factory());
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(7);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === GET_THEN_ERROR) {
      reject(promise, GET_THEN_ERROR.error);
      GET_THEN_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      resolve(promise, value);
    } else if (failed) {
      reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator$1(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate(input);
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

Enumerator$1.prototype._enumerate = function (input) {
  for (var i = 0; this._state === PENDING && i < input.length; i++) {
    this._eachEntry(input[i], i);
  }
};

Enumerator$1.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$1 = c.resolve;

  if (resolve$$1 === resolve$1) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise$2) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$1) {
        return resolve$$1(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$1(entry), i);
  }
};

Enumerator$1.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator$1.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all$1(entries) {
  return new Enumerator$1(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race$1(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise$2(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise$2 ? initializePromise(this, resolver) : needsNew();
  }
}

Promise$2.all = all$1;
Promise$2.race = race$1;
Promise$2.resolve = resolve$1;
Promise$2.reject = reject$1;
Promise$2._setScheduler = setScheduler;
Promise$2._setAsap = setAsap;
Promise$2._asap = asap;

Promise$2.prototype = {
  constructor: Promise$2,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

/*global self*/
function polyfill$1() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise$2;
}

// Strange compat..
Promise$2.polyfill = polyfill$1;
Promise$2.Promise = Promise$2;

return Promise$2;

})));

//# sourceMappingURL=es6-promise.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(0), __webpack_require__(3), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (Request, sjcl, hkdf, pbkdf2) {
  'use strict';

  // Key wrapping and stretching configuration.
  var NAMESPACE = 'identity.mozilla.com/picl/v1/';
  var PBKDF2_ROUNDS = 1000;
  var STRETCHED_PASS_LENGTH_BYTES = 32 * 8;

  var HKDF_SALT = sjcl.codec.hex.toBits('00');
  var HKDF_LENGTH = 32;

  /**
   * Key Wrapping with a name
   *
   * @method kw
   * @static
   * @param {String} name The name of the salt
   * @return {bitArray} the salt combination with the namespace
   */
  function kw(name) {
    return sjcl.codec.utf8String.toBits(NAMESPACE + name);
  }

  /**
   * Key Wrapping with a name and an email
   *
   * @method kwe
   * @static
   * @param {String} name The name of the salt
   * @param {String} email The email of the user.
   * @return {bitArray} the salt combination with the namespace
   */
  function kwe(name, email) {
    return sjcl.codec.utf8String.toBits(NAMESPACE + name + ':' + email);
  }

  /**
   * @class credentials
   * @constructor
   */
  return {
    /**
     * Setup credentials
     *
     * @method setup
     * @param {String} emailInput
     * @param {String} passwordInput
     * @return {Promise} A promise that will be fulfilled with `result` of generated credentials
     */
    setup: function (emailInput, passwordInput) {
      var result = {};
      var email = kwe('quickStretch', emailInput);
      var password = sjcl.codec.utf8String.toBits(passwordInput);

      result.emailUTF8 = emailInput;
      result.passwordUTF8 = passwordInput;

      return pbkdf2.derive(password, email, PBKDF2_ROUNDS, STRETCHED_PASS_LENGTH_BYTES)
        .then(
        function (quickStretchedPW) {
          result.quickStretchedPW = quickStretchedPW;

          return hkdf(quickStretchedPW, kw('authPW'), HKDF_SALT, HKDF_LENGTH)
            .then(
            function (authPW) {
              result.authPW = authPW;

              return hkdf(quickStretchedPW, kw('unwrapBkey'), HKDF_SALT, HKDF_LENGTH);
            }
          );
        }
      )
        .then(
        function (unwrapBKey) {
          result.unwrapBKey = unwrapBKey;
          return result;
        }
      );
    },
    /**
     * Wrap
     *
     * @method wrap
     * @param {bitArray} bitArray1
     * @param {bitArray} bitArray2
     * @return {bitArray} wrap result of the two bitArrays
     */
    xor: function (bitArray1, bitArray2) {
      var result = [];

      for (var i = 0; i < bitArray1.length; i++) {
        result[i] = bitArray1[i] ^ bitArray2[i];
      }

      return result;
    },
    /**
     * Unbundle the WrapKB
     * @param {String} key Bundle Key in hex
     * @param {String} bundle Key bundle in hex
     * @returns {*}
     */
    unbundleKeyFetchResponse: function (key, bundle) {
      var self = this;
      var bitBundle = sjcl.codec.hex.toBits(bundle);

      return this.deriveBundleKeys(key, 'account/keys')
        .then(
          function (keys) {
            var ciphertext = sjcl.bitArray.bitSlice(bitBundle, 0, 8 * 64);
            var expectedHmac = sjcl.bitArray.bitSlice(bitBundle, 8 * -32);
            var hmac = new sjcl.misc.hmac(keys.hmacKey, sjcl.hash.sha256);
            hmac.update(ciphertext);

            if (!sjcl.bitArray.equal(hmac.digest(), expectedHmac)) {
              throw new Error('Bad HMac');
            }

            var keyAWrapB = self.xor(sjcl.bitArray.bitSlice(bitBundle, 0, 8 * 64), keys.xorKey);

            return {
              kA: sjcl.codec.hex.fromBits(sjcl.bitArray.bitSlice(keyAWrapB, 0, 8 * 32)),
              wrapKB: sjcl.codec.hex.fromBits(sjcl.bitArray.bitSlice(keyAWrapB, 8 * 32))
            };
          }
        );
    },
    /**
     * Derive the HMAC and XOR keys required to encrypt a given size of payload.
     * @param {String} key Hex Bundle Key
     * @param {String} keyInfo Bundle Key Info
     * @returns {Object} hmacKey, xorKey
     */
    deriveBundleKeys: function(key, keyInfo) {
      var bitKeyInfo = kw(keyInfo);
      var salt = sjcl.codec.hex.toBits('');
      key = sjcl.codec.hex.toBits(key);

      return hkdf(key, bitKeyInfo, salt, 3 * 32)
        .then(
          function (keyMaterial) {

            return {
              hmacKey: sjcl.bitArray.bitSlice(keyMaterial, 0, 8 * 32),
              xorKey: sjcl.bitArray.bitSlice(keyMaterial, 8 * 32)
            };
          }
        );
    }
  };

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (sjcl) {
  'use strict';

  /*
   HTTP Hawk Authentication Scheme
   Copyright (c) 2012-2013, Eran Hammer <eran@hueniverse.com>
   MIT Licensed
   */


  // Declare namespace

  var hawk = {};

  hawk.client = {

    // Generate an Authorization header for a given request

    /*
     uri: 'http://example.com/resource?a=b'
     method: HTTP verb (e.g. 'GET', 'POST')
     options: {

     // Required

     credentials: {
     id: 'dh37fgj492je',
     key: 'aoijedoaijsdlaksjdl',
     algorithm: 'sha256'                                 // 'sha1', 'sha256'
     },

     // Optional

     ext: 'application-specific',                        // Application specific data sent via the ext attribute
     timestamp: Date.now() / 1000,                       // A pre-calculated timestamp in seconds
     nonce: '2334f34f',                                  // A pre-generated nonce
     localtimeOffsetMsec: 400,                           // Time offset to sync with server time (ignored if timestamp provided)
     payload: '{"some":"payload"}',                      // UTF-8 encoded string for body hash generation (ignored if hash provided)
     contentType: 'application/json',                    // Payload content-type (ignored if hash provided)
     hash: 'U4MKKSmiVxk37JCCrAVIjV=',                    // Pre-calculated payload hash
     app: '24s23423f34dx',                               // Oz application id
     dlg: '234sz34tww3sd'                                // Oz delegated-by application id
     }
     */

    header: function (uri, method, options) {
      /*eslint complexity: [2, 21] */
      var result = {
        field: '',
        artifacts: {}
      };

      // Validate inputs

      if (!uri || (typeof uri !== 'string' && typeof uri !== 'object') ||
        !method || typeof method !== 'string' ||
        !options || typeof options !== 'object') {

        result.err = 'Invalid argument type';
        return result;
      }

      // Application time

      var timestamp = options.timestamp || Math.floor((hawk.utils.now() + (options.localtimeOffsetMsec || 0)) / 1000);

      // Validate credentials

      var credentials = options.credentials;
      if (!credentials ||
        !credentials.id ||
        !credentials.key ||
        !credentials.algorithm) {

        result.err = 'Invalid credential object';
        return result;
      }

      if (hawk.utils.baseIndexOf(hawk.crypto.algorithms, credentials.algorithm) === -1) {
        result.err = 'Unknown algorithm';
        return result;
      }

      // Parse URI

      if (typeof uri === 'string') {
        uri = hawk.utils.parseUri(uri);
      }

      // Calculate signature

      var artifacts = {
        ts: timestamp,
        nonce: options.nonce || hawk.utils.randomString(6),
        method: method,
        resource: uri.relative,
        host: uri.hostname,
        port: uri.port,
        hash: options.hash,
        ext: options.ext,
        app: options.app,
        dlg: options.dlg
      };

      result.artifacts = artifacts;

      // Calculate payload hash

      if (!artifacts.hash &&
        options.hasOwnProperty('payload')) {

        artifacts.hash = hawk.crypto.calculatePayloadHash(options.payload, credentials.algorithm, options.contentType);
      }

      var mac = hawk.crypto.calculateMac('header', credentials, artifacts);

      // Construct header

      var hasExt = artifacts.ext !== null && artifacts.ext !== undefined && artifacts.ext !== '';       // Other falsey values allowed
      var header = 'Hawk id="' + credentials.id +
        '", ts="' + artifacts.ts +
        '", nonce="' + artifacts.nonce +
        (artifacts.hash ? '", hash="' + artifacts.hash : '') +
        (hasExt ? '", ext="' + hawk.utils.escapeHeaderAttribute(artifacts.ext) : '') +
        '", mac="' + mac + '"';

      if (artifacts.app) {
        header += ', app="' + artifacts.app +
          (artifacts.dlg ? '", dlg="' + artifacts.dlg : '') + '"';
      }

      result.field = header;

      return result;
    },


    // Validate server response

    /*
     request:    object created via 'new XMLHttpRequest()' after response received
     artifacts:  object recieved from header().artifacts
     options: {
     payload:    optional payload received
     required:   specifies if a Server-Authorization header is required. Defaults to 'false'
     }
     */

    authenticate: function (request, credentials, artifacts, options) {

      options = options || {};

      if (request.getResponseHeader('www-authenticate')) {

        // Parse HTTP WWW-Authenticate header

        var attrsAuth = hawk.utils.parseAuthorizationHeader(request.getResponseHeader('www-authenticate'), ['ts', 'tsm', 'error']);
        if (!attrsAuth) {
          return false;
        }

        if (attrsAuth.ts) {
          var tsm = hawk.crypto.calculateTsMac(attrsAuth.ts, credentials);
          if (tsm !== attrsAuth.tsm) {
            return false;
          }

          hawk.utils.setNtpOffset(attrsAuth.ts - Math.floor((new Date()).getTime() / 1000));     // Keep offset at 1 second precision
        }
      }

      // Parse HTTP Server-Authorization header

      if (!request.getResponseHeader('server-authorization') &&
        !options.required) {

        return true;
      }

      var attributes = hawk.utils.parseAuthorizationHeader(request.getResponseHeader('server-authorization'), ['mac', 'ext', 'hash']);
      if (!attributes) {
        return false;
      }

      var modArtifacts = {
        ts: artifacts.ts,
        nonce: artifacts.nonce,
        method: artifacts.method,
        resource: artifacts.resource,
        host: artifacts.host,
        port: artifacts.port,
        hash: attributes.hash,
        ext: attributes.ext,
        app: artifacts.app,
        dlg: artifacts.dlg
      };

      var mac = hawk.crypto.calculateMac('response', credentials, modArtifacts);
      if (mac !== attributes.mac) {
        return false;
      }

      if (!options.hasOwnProperty('payload')) {
        return true;
      }

      if (!attributes.hash) {
        return false;
      }

      var calculatedHash = hawk.crypto.calculatePayloadHash(options.payload, credentials.algorithm, request.getResponseHeader('content-type'));
      return (calculatedHash === attributes.hash);
    },

    message: function (host, port, message, options) {

      // Validate inputs

      if (!host || typeof host !== 'string' ||
        !port || typeof port !== 'number' ||
        message === null || message === undefined || typeof message !== 'string' ||
        !options || typeof options !== 'object') {

        return null;
      }

      // Application time

      var timestamp = options.timestamp || Math.floor((hawk.utils.now() + (options.localtimeOffsetMsec || 0)) / 1000);

      // Validate credentials

      var credentials = options.credentials;
      if (!credentials ||
        !credentials.id ||
        !credentials.key ||
        !credentials.algorithm) {

        // Invalid credential object
        return null;
      }

      if (hawk.crypto.algorithms.indexOf(credentials.algorithm) === -1) {
        return null;
      }

      // Calculate signature

      var artifacts = {
        ts: timestamp,
        nonce: options.nonce || hawk.utils.randomString(6),
        host: host,
        port: port,
        hash: hawk.crypto.calculatePayloadHash(message, credentials.algorithm)
      };

      // Construct authorization

      var result = {
        id: credentials.id,
        ts: artifacts.ts,
        nonce: artifacts.nonce,
        hash: artifacts.hash,
        mac: hawk.crypto.calculateMac('message', credentials, artifacts)
      };

      return result;
    },

    authenticateTimestamp: function (message, credentials, updateClock) {           // updateClock defaults to true

      var tsm = hawk.crypto.calculateTsMac(message.ts, credentials);
      if (tsm !== message.tsm) {
        return false;
      }

      if (updateClock !== false) {
        hawk.utils.setNtpOffset(message.ts - Math.floor((new Date()).getTime() / 1000));    // Keep offset at 1 second precision
      }

      return true;
    }
  };


  hawk.crypto = {

    headerVersion: '1',

    algorithms: ['sha1', 'sha256'],

    calculateMac: function (type, credentials, options) {
      var normalized = hawk.crypto.generateNormalizedString(type, options);
      var hmac = new sjcl.misc.hmac(credentials.key, sjcl.hash.sha256);
      hmac.update(normalized);

      return sjcl.codec.base64.fromBits(hmac.digest());
    },

    generateNormalizedString: function (type, options) {

      var normalized = 'hawk.' + hawk.crypto.headerVersion + '.' + type + '\n' +
        options.ts + '\n' +
        options.nonce + '\n' +
        (options.method || '').toUpperCase() + '\n' +
        (options.resource || '') + '\n' +
        options.host.toLowerCase() + '\n' +
        options.port + '\n' +
        (options.hash || '') + '\n';

      if (options.ext) {
        normalized += options.ext.replace('\\', '\\\\').replace('\n', '\\n');
      }

      normalized += '\n';

      if (options.app) {
        normalized += options.app + '\n' +
          (options.dlg || '') + '\n';
      }

      return normalized;
    },

    calculatePayloadHash: function (payload, algorithm, contentType) {
      var hash = new sjcl.hash.sha256();
      hash.update('hawk.' + hawk.crypto.headerVersion + '.payload\n')
        .update(hawk.utils.parseContentType(contentType) + '\n')
        .update(payload || '')
        .update('\n');

      return sjcl.codec.base64.fromBits(hash.finalize());
    },

    calculateTsMac: function (ts, credentials) {
      var hmac = new sjcl.misc.hmac(credentials.key, sjcl.hash.sha256);
      hmac.update('hawk.' + hawk.crypto.headerVersion + '.ts\n' + ts + '\n');

      return sjcl.codec.base64.fromBits(hmac.digest());
    }
  };


  hawk.utils = {

    storage: {                                      // localStorage compatible interface
      _cache: {},
      setItem: function (key, value) {

        hawk.utils.storage._cache[key] = value;
      },
      getItem: function (key) {

        return hawk.utils.storage._cache[key];
      }
    },

    setStorage: function (storage) {

      var ntpOffset = hawk.utils.getNtpOffset() || 0;
      hawk.utils.storage = storage;
      hawk.utils.setNtpOffset(ntpOffset);
    },

    setNtpOffset: function (offset) {

      try {
        hawk.utils.storage.setItem('hawk_ntp_offset', offset);
      }
      catch (err) {
        console.error('[hawk] could not write to storage.');
        console.error(err);
      }
    },

    getNtpOffset: function () {

      return parseInt(hawk.utils.storage.getItem('hawk_ntp_offset') || '0', 10);
    },

    now: function () {

      return (new Date()).getTime() + hawk.utils.getNtpOffset();
    },

    escapeHeaderAttribute: function (attribute) {

      return attribute.replace(/\\/g, '\\\\').replace(/\"/g, '\\"');
    },

    parseContentType: function (header) {

      if (!header) {
        return '';
      }

      return header.split(';')[0].replace(/^\s+|\s+$/g, '').toLowerCase();
    },

    parseAuthorizationHeader: function (header, keys) {

      if (!header) {
        return null;
      }

      var headerParts = header.match(/^(\w+)(?:\s+(.*))?$/);       // Header: scheme[ something]
      if (!headerParts) {
        return null;
      }

      var scheme = headerParts[1];
      if (scheme.toLowerCase() !== 'hawk') {
        return null;
      }

      var attributesString = headerParts[2];
      if (!attributesString) {
        return null;
      }

      var attributes = {};
      var verify = attributesString.replace(/(\w+)="([^"\\]*)"\s*(?:,\s*|$)/g, function ($0, $1, $2) {

        // Check valid attribute names

        if (keys.indexOf($1) === -1) {
          return;
        }

        // Allowed attribute value characters: !#$%&'()*+,-./:;<=>?@[]^_`{|}~ and space, a-z, A-Z, 0-9

        if ($2.match(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~]+$/) === null) {
          return;
        }

        // Check for duplicates

        if (attributes.hasOwnProperty($1)) {
          return;
        }

        attributes[$1] = $2;
        return '';
      });

      if (verify !== '') {
        return null;
      }

      return attributes;
    },

    randomString: function (size) {

      var randomSource = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      var len = randomSource.length;

      var result = [];
      for (var i = 0; i < size; ++i) {
        result[i] = randomSource[Math.floor(Math.random() * len)];
      }

      return result.join('');
    },

    baseIndexOf: function(array, value, fromIndex) {
      var index = (fromIndex || 0) - 1,
        length = array ? array.length : 0;

      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    },

    parseUri: function (input) {

      // Based on: parseURI 1.2.2
      // http://blog.stevenlevithan.com/archives/parseuri
      // (c) Steven Levithan <stevenlevithan.com>
      // MIT License

      var keys = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'hostname', 'port', 'resource', 'relative', 'pathname', 'directory', 'file', 'query', 'fragment'];

      var uriRegex = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?(((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?)(?:#(.*))?)/;
      var uriByNumber = uriRegex.exec(input);
      var uri = {};

      var i = 15;
      while (i--) {
        uri[keys[i]] = uriByNumber[i] || '';
      }

      if (uri.port === null ||
        uri.port === '') {

        uri.port = (uri.protocol.toLowerCase() === 'http' ? '80' : (uri.protocol.toLowerCase() === 'https' ? '443' : ''));
      }

      return uri;
    }
  };


  return hawk;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (sjcl, P) {
  'use strict';

  /**
   * @class pbkdf2
   * @constructor
   */
  var pbkdf2 = {
    /**
     * @method derive
     * @param  {bitArray} input The password hex buffer.
     * @param  {bitArray} salt The salt string buffer.
     * @return {int} iterations the derived key bit array.
     */
    derive: function(input, salt, iterations, len) {
      var result = sjcl.misc.pbkdf2(input, salt, iterations, len, sjcl.misc.hmac);
      return Promise.resolve(result);
    }
  };

  return pbkdf2;

}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (sjcl, hkdf) {
  'use strict';

  var PREFIX_NAME = 'identity.mozilla.com/picl/v1/';
  var bitSlice = sjcl.bitArray.bitSlice;
  var salt = sjcl.codec.hex.toBits('');

  /**
   * @class hawkCredentials
   * @method deriveHawkCredentials
   * @param {String} tokenHex
   * @param {String} context
   * @param {int} size
   * @returns {Promise}
   */
  function deriveHawkCredentials(tokenHex, context, size) {
    var token = sjcl.codec.hex.toBits(tokenHex);
    var info = sjcl.codec.utf8String.toBits(PREFIX_NAME + context);

    return hkdf(token, info, salt, size || 3 * 32)
      .then(function(out) {
        var authKey = bitSlice(out, 8 * 32, 8 * 64);
        var bundleKey = bitSlice(out, 8 * 64);

        return {
          algorithm: 'sha256',
          id: sjcl.codec.hex.fromBits(bitSlice(out, 0, 8 * 32)),
          key: authKey,
          bundleKey: bundleKey
        };
      });
  }

  return deriveHawkCredentials;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This module does the handling for the metrics context
// activity event metadata.

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
  'use strict';

  return {
    marshall: function (data) {
      return {
        deviceId: data.deviceId,
        flowId: data.flowId,
        flowBeginTime: data.flowBeginTime,
        utmCampaign: data.utmCampaign,
        utmContent: data.utmContent,
        utmMedium: data.utmMedium,
        utmSource: data.utmSource,
        utmTerm: data.utmTerm
      };
    }
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ]);
});
//# sourceMappingURL=fxa-client.js.map