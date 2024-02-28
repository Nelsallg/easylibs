(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("easylibs", [], factory);
	else if(typeof exports === 'object')
		exports["easylibs"] = factory();
	else
		root["easylibs"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/easylibs.ts":
/*!*************************!*\
  !*** ./src/easylibs.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Easylibs = void 0;
const fetch_request_1 = __importDefault(__webpack_require__(/*! @easylibs/fetch-request */ "./node_modules/@easylibs/fetch-request/dist/fetch-request.js"));
const progress_form_1 = __importDefault(__webpack_require__(/*! @easylibs/progress-form */ "./node_modules/@easylibs/progress-form/dist/progress-form.js"));
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "./node_modules/@easylibs/utils/dist/utils.js"));
const flash_1 = __importDefault(__webpack_require__(/*! @easylibs/flash */ "./node_modules/@easylibs/flash/dist/flash.js"));
var Easylibs;
(function (Easylibs) {
    /**
     * This class is a utility class designed to make it easier to send Fetch requests in a web application.
     * It offers a simple interface for making HTTP requests
     * and manage actions before and after sending the request.
     */
    class FetchRequest extends fetch_request_1.default {
        constructor(options) {
            super(options);
        }
    }
    Easylibs.FetchRequest = FetchRequest;
    /**
     * ProgressForm represents a class for managing a progressive form.
     */
    class ProgressForm extends progress_form_1.default {
        constructor(enableDefaultCssStyle) {
            super(enableDefaultCssStyle);
        }
    }
    Easylibs.ProgressForm = ProgressForm;
    class Utils extends utils_1.default {
        constructor() {
            super();
        }
    }
    Easylibs.Utils = Utils;
    class Flash extends flash_1.default {
        constructor() {
            super();
        }
    }
    Easylibs.Flash = Flash;
})(Easylibs || (exports.Easylibs = Easylibs = {}));
;


/***/ }),

/***/ "./node_modules/@easylibs/fetch-request/dist/fetch-request.js":
/*!********************************************************************!*\
  !*** ./node_modules/@easylibs/fetch-request/dist/fetch-request.js ***!
  \********************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nested_webpack_require_498__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_498__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_498__.o(definition, key) && !__nested_webpack_require_498__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_498__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_498__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/fetch-request.ts ***!
  \******************************/
__nested_webpack_require_498__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_498__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchRequest)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
  * This class is a utility class designed to make it easier to send Fetch requests in a web application.
  * It offers a simple interface for making HTTP requests
  * and manage actions before and after sending the request.
  */
var FetchRequest = /*#__PURE__*/function () {
  function FetchRequest(_options) {
    var _this = this;
    _classCallCheck(this, FetchRequest);
    _defineProperty(this, "submitForm", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (!(_this.options.callbacks && _this.options.callbacks.onPreFetch)) {
              _context.next = 4;
              break;
            }
            _context.next = 4;
            return _this.preFetch();
          case 4:
            _context.next = 6;
            return _this.run();
          case 6:
            if (!(_this.options.callbacks && _this.options.callbacks.onPostFetch)) {
              _context.next = 9;
              break;
            }
            _context.next = 9;
            return _this.postFetch(_this.response, _this.status);
          case 9:
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            _this.handleError(_context.t0, undefined, 'Error executing query : ');
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    })));
    _defineProperty(this, "run", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, _this$options$callbac, _this$options, uri, _data, options, finalUri, body, method, fetchOptions, responseType;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            response = null;
            _context2.prev = 1;
            _this$options = _this.options, uri = _this$options.uri, _data = _this$options.data, options = _this$options.options;
            if (uri) {
              _context2.next = 5;
              break;
            }
            throw new Error("URI is required");
          case 5:
            finalUri = uri;
            body = null;
            method = (options === null || options === void 0 ? void 0 : options.method) || 'GET';
            if (method === "GET" && _data) {
              finalUri = _this.buildGetRequestUrl(uri, _data);
            } else if (method !== "GET" && method !== "HEAD" && method !== "OPTIONS" && _data) {
              body = _this.prepareRequestBody(_data);
            }
            fetchOptions = {
              method: method,
              headers: options === null || options === void 0 ? void 0 : options.headers,
              body: body,
              credentials: options === null || options === void 0 ? void 0 : options.credentials,
              mode: options === null || options === void 0 ? void 0 : options.mode,
              cache: options === null || options === void 0 ? void 0 : options.cache,
              integrity: options === null || options === void 0 ? void 0 : options.integrity
            };
            if (method === "GET" || method === "HEAD" || method === "OPTIONS") {
              delete fetchOptions.body;
            }
            _context2.next = 13;
            return fetch(finalUri, fetchOptions);
          case 13:
            response = _context2.sent;
            _this.status = response.status;
            if (!options) {
              _context2.next = 28;
              break;
            }
            responseType = options.responseType;
            if (!responseType) {
              _context2.next = 28;
              break;
            }
            if (!(responseType === "text")) {
              _context2.next = 24;
              break;
            }
            _context2.next = 21;
            return response.text();
          case 21:
            _context2.t0 = _context2.sent;
            _context2.next = 27;
            break;
          case 24:
            _context2.next = 26;
            return response.json();
          case 26:
            _context2.t0 = _context2.sent;
          case 27:
            _this.response = _context2.t0;
          case 28:
            if ((_this$options$callbac = _this.options.callbacks) !== null && _this$options$callbac !== void 0 && _this$options$callbac.onSuccess && response.ok) {
              _this.options.callbacks.onSuccess(_this.response);
            }
            _context2.next = 34;
            break;
          case 31:
            _context2.prev = 31;
            _context2.t1 = _context2["catch"](1);
            _this.handleError(_context2.t1, response ? response.status : 0);
          case 34:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 31]]);
    })));
    _defineProperty(this, "preFetch", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _data2;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(typeof _this.options.callbacks.onPreFetch === 'function')) {
              _context3.next = 5;
              break;
            }
            _context3.next = 3;
            return _this.options.callbacks.onPreFetch(_this.options.data);
          case 3:
            _data2 = _context3.sent;
            if (_data2) {
              _this.options.data = _data2.hasOwnProperty('data') ? _data2.data : _data2;
            }
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })));
    _defineProperty(this, "postFetch", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(response, status) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (_this.options.submitter instanceof HTMLButtonElement) {
                _this.options.submitter.removeAttribute('disabled');
              }
              return _context4.abrupt("return", _this.options.callbacks.onPostFetch ? _this.options.callbacks.onPostFetch(response, status) : undefined);
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x, _x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    this.options = _options;
    this.attachSubmitterEvent();
  }
  _createClass(FetchRequest, [{
    key: "attachSubmitterEvent",
    value: function attachSubmitterEvent() {
      this.options.submitter ? this.options.submitter.addEventListener('click', this.submitForm) : this.submitForm();
    }
  }, {
    key: "buildGetRequestUrl",
    value: function buildGetRequestUrl(uri, data) {
      var url = new URL(uri, window.location.origin);
      var params = new URLSearchParams();
      if (data instanceof FormData) {
        var _iterator = _createForOfIteratorHelper(data.entries()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];
            if (typeof value === 'string') {
              params.append(key, value);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            _key = _Object$entries$_i[0],
            _value = _Object$entries$_i[1];
          params.append(_key, _value);
        }
      }
      url.search = params.toString();
      return url.toString();
    }
  }, {
    key: "prepareRequestBody",
    value: function prepareRequestBody(data) {
      var _this$options$options, _this$options$options2;
      if (((_this$options$options = this.options.options) === null || _this$options$options === void 0 ? void 0 : _this$options$options.acceptDataFormat) === "form-data" && !(data instanceof FormData)) {
        return this.convertObjectToFormData(data);
      } else if (((_this$options$options2 = this.options.options) === null || _this$options$options2 === void 0 ? void 0 : _this$options$options2.acceptDataFormat) === "classic-object") {
        return JSON.stringify(data);
      }
      return data;
    }
  }, {
    key: "convertObjectToFormData",
    value: function convertObjectToFormData(data) {
      var formData = new FormData();
      Object.entries(data).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          key = _ref6[0],
          value = _ref6[1];
        return formData.append(key, value);
      });
      return formData;
    }
  }, {
    key: "handleError",
    value: function handleError(error, status) {
      var _this$options$callbac2;
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Fetch Request Error: ';
      console.error(message, error);
      if ((_this$options$callbac2 = this.options.callbacks) !== null && _this$options$callbac2 !== void 0 && _this$options$callbac2.onError) {
        this.options.callbacks.onError(error, status || 0);
      }
    }
  }]);
  return FetchRequest;
}();

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=fetch-request.js.map

/***/ }),

/***/ "./node_modules/@easylibs/flash/dist/flash.js":
/*!****************************************************!*\
  !*** ./node_modules/@easylibs/flash/dist/flash.js ***!
  \****************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash.scss":
/*!*************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __nested_webpack_exports__, __nested_webpack_require_985__) => {

"use strict";
__nested_webpack_require_985__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_985__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_985__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_985__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_985__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_985__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.flash-box.slide-out-top {
  animation: slide-out-top 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@keyframes slide-out-top {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-200%);
    opacity: 0;
  }
}
.flash-box.slide-in-top {
  animation: slide-in-top 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-200%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.flash-box[template="1"] {
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #FFFFFF;
  z-index: 1000;
  border-radius: 5px;
  margin: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}
.flash-box[template="1"] p {
  font-size: 20px;
  margin: 0;
  font-weight: 600;
}
.flash-box[template="1"] .flash-header {
  right: 0;
  top: 0;
  margin: 5px 0;
  height: 30px;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
}
.flash-box[template="1"] .flash-header .flash-title {
  height: 100%;
  padding-left: 15px;
}
.flash-box[template="1"] .flash-content {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
}
.flash-box[template="1"] .flash-content svg {
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
}
.flash-box[template="1"] .flash-content .flash-icon {
  margin: 0;
}
.flash-box[template="1"] .flash-content .flash-message {
  color: #444;
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  font-size: 15px;
  margin: 0;
}
.flash-box[template="1"] .flash-content .flash-message ul {
  list-style: none;
  margin: 0;
}

.flash-box[template="1"].flashtype-success {
  border-left: 10px solid #28a745;
  border-right: 10px solid #28a745;
}
.flash-box[template="1"].flashtype-success p, .flash-box[template="1"].flashtype-success svg {
  color: #28a745;
}

.flash-box[template="1"].flashtype-info {
  border-left: 10px solid #284B63;
  border-right: 10px solid #284B63;
}
.flash-box[template="1"].flashtype-info p, .flash-box[template="1"].flashtype-info svg {
  color: #284B63;
}

.flash-box[template="1"].flashtype-warning {
  border-left: 10px solid #FF4000;
  border-right: 10px solid #FF4000;
}
.flash-box[template="1"].flashtype-warning p, .flash-box[template="1"].flashtype-warning svg {
  color: #FF4000;
}

.flash-box[template="1"].flashtype-danger {
  border-left: 10px solid #dc3545;
  border-right: 10px solid #dc3545;
}
.flash-box[template="1"].flashtype-danger p, .flash-box[template="1"].flashtype-danger svg {
  color: #dc3545;
}

.flash-box.slide-in-top {
  animation: slide-in-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both running;
}

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
.flash-box.slide-out-top {
  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both running;
}

@keyframes slide-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(100%);
    transform: translateY(100%);
    opacity: 0;
  }
}
.flash-box.fade-in-top {
  animation: fade-in-top 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both running;
}

@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
.flash-box.fade-out-top {
  animation: fade-out-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes fade-out-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: 0;
  }
}
.flash-box[template="2"] {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  margin: 0;
  width: 100vw;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}
.flash-box[template="2"] .flash-icon-parent {
  right: 0;
  top: 0;
  margin: 5px 0 5px 0;
  height: 20px;
  width: 20px;
  position: absolute;
  cursor: pointer;
}
.flash-box[template="2"] .flash-icon-parent {
  margin-right: 5px;
}
.flash-box[template="2"] .flash-icon {
  margin: 0;
}
.flash-box[template="2"] .flash-content {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.flash-box[template="2"] .flash-content svg {
  width: 20px;
  height: 20px;
  color: #FFF;
  margin: 0 15px;
}
.flash-box[template="2"] .flash-content .flash-message {
  color: #FFF;
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  font-size: 15px;
  margin: 0;
  font-weight: 600;
}
.flash-box[template="2"] .flash-content .flash-message ul {
  list-style: none;
  margin-bottom: 0;
}

.flash-box[template="2"].flashtype-danger {
  background-color: #dc3545;
}

.flash-box[template="2"].flashtype-warning {
  background-color: #FF4000;
}

.flash-box[template="2"].flashtype-success {
  background-color: #28a745;
}

.flash-box[template="2"].flashtype-info {
  background-color: #284B63;
}

.flash-box[template="1"] [_close_] {
  position: relative;
}

.flash-box[template="2"] [_close_] {
  position: absolute;
  right: 0;
}

.flash-box[template="2"] [_close_],
.flash-box[template="1"] [_close_] {
  width: 15px;
  height: 15px;
  margin: 0 5px;
  cursor: pointer;
}

.flash-box[template="2"] [_close_]::before, .flash-box[template="1"] [_close_]::before,
.flash-box[template="2"] [_close_]::after, .flash-box[template="1"] [_close_]::after {
  position: absolute;
  content: "";
  width: 3px;
  height: 15px;
  background: #333;
  left: 7px;
  border-radius: 5px;
}

.flash-box[template="2"] [_close_]::before,
.flash-box[template="1"] [_close_]::before {
  transform: rotate(45deg);
}

.flash-box[template="2"] [_close_]::after,
.flash-box[template="1"] [_close_]::after {
  transform: rotate(315deg);
}`, "",{"version":3,"sources":["webpack://./src/assets/scss/animations.scss","webpack://./src/assets/scss/flash.scss"],"names":[],"mappings":"AAqaE;EACE,wEAAA;ACpaJ;;ADuaE;EACE;IACE,wBAAA;IACA,UAAA;ECpaJ;EDsaE;IACE,4BAAA;IACA,UAAA;ECpaJ;AACF;ADuYE;EACE,uEAAA;ACrYJ;;ADwYE;EACE;IACE,4BAAA;IACA,UAAA;ECrYJ;EDuYE;IACE,wBAAA;IACA,UAAA;ECrYJ;AACF;AAvBA;EACI,yBAAA;EACA,2BAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;EACA,yBAAA;EACA,aAAA;EACA,kBAAA;EACA,SAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,eAAA;EACA,YAAA;EACA,sCAAA;AAyBJ;AAxBI;EACE,eAAA;EACA,SAAA;EACA,gBAAA;AA0BN;AAxBI;EACG,QAAA;EACA,MAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AA0BP;AAzBO;EACC,YAAA;EACA,kBAAA;AA2BR;AAvBI;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;AAyBR;AAxBQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;AA0BZ;AAxBQ;EACE,SAAA;AA0BV;AAxBQ;EACI,WAAA;EACA,aAAA;EACC,uBAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;EACA,SAAA;AA0Bb;AAxBS;EACG,gBAAA;EACA,SAAA;AA0BZ;;AAtBA;EACI,+BAAA;EACA,gCAAA;AAyBJ;AAxBI;EAAM,cAAA;AA2BV;;AAzBA;EACI,+BAAA;EACA,gCAAA;AA4BJ;AA3BI;EAAM,cAAA;AA8BV;;AA5BA;EACI,+BAAA;EACA,gCAAA;AA+BJ;AA9BI;EAAM,cAAA;AAiCV;;AA9BA;EACI,+BAAA;EACA,gCAAA;AAiCJ;AAhCI;EAAM,cAAA;AAmCV;;AA/BA;EACI,+EAAA;AAkCJ;;AAhCE;EACE;IACE,oCAAA;IACQ,4BAAA;IACR,UAAA;EAmCJ;EAjCE;IACE,gCAAA;IACQ,wBAAA;IACR,UAAA;EAmCJ;AACF;AAjCE;EACE,gFAAA;AAmCJ;;AAjCE;EACE;IACE,gCAAA;IACQ,wBAAA;IACR,UAAA;EAoCJ;EAlCE;IACE,mCAAA;IACQ,2BAAA;IACR,UAAA;EAoCJ;AACF;AAlCE;EACE,4EAAA;AAoCJ;;AAjCA;EACE;IACE,oCAAA;IACQ,4BAAA;IACR,UAAA;EAoCF;EAlCA;IACE,gCAAA;IACQ,wBAAA;IACR,UAAA;EAoCF;AACF;AAlCA;EACI,sEAAA;AAoCJ;;AAlCA;EACA;IACE,gCAAA;IACQ,wBAAA;IACR,UAAA;EAqCA;EAnCF;IACE,oCAAA;IACQ,4BAAA;IACR,UAAA;EAqCA;AACF;AA9BA;EACE,aAAA;EACA,sBAAA;EACA,eAAA;EACA,aAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,YAAA;EACA,sCAAA;AAgCF;AA/BE;EACG,QAAA;EACA,MAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;AAiCL;AA/BE;EACE,iBAAA;AAiCJ;AA/BE;EACE,SAAA;AAiCJ;AA9BE;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAgCN;AA/BM;EACI,WAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;AAiCV;AA9BE;EACG,WAAA;EACA,aAAA;EACC,uBAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;AAgCN;AA9BE;EACI,gBAAA;EACA,gBAAA;AAgCN;;AA7BA;EACE,yBAAA;AAgCF;;AA9BA;EACE,yBAAA;AAiCF;;AA/BA;EACE,yBAAA;AAkCF;;AAhCA;EACE,yBAAA;AAmCF;;AAhCA;EACE,kBAAA;AAmCF;;AAjCA;EACE,kBAAA;EACA,QAAA;AAoCF;;AAlCA;;EAEE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;AAqCF;;AAnCA;;EAEM,kBAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;AAsCN;;AApCE;;EAEI,wBAAA;AAuCN;;AArCE;;EAEI,yBAAA;AAwCN","sourcesContent":["@mixin spinner(){\r\n    #spinner {\r\n        width: 11.2px;\r\n        height: 11.2px;\r\n        animation: spinner-o824ag 1s infinite linear;\r\n     }\r\n     \r\n     #spinner div {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        background: #474bff;\r\n        border-radius: 50%;\r\n        animation: spinner-vse6n7 1.25s infinite ease;\r\n     }\r\n     \r\n     #spinner div:nth-child(1) {\r\n        --rotation: 90;\r\n     }\r\n     \r\n     #spinner div:nth-child(2) {\r\n        --rotation: 180;\r\n     }\r\n     \r\n     #spinner div:nth-child(3) {\r\n        --rotation: 270;\r\n     }\r\n     \r\n     #spinner div:nth-child(4) {\r\n        --rotation: 360;\r\n     }\r\n     \r\n     @keyframes spinner-vse6n7 {\r\n        0%, 100% {\r\n           transform: rotate(calc(var(--rotation) * 1deg)) translateY(0);\r\n        }\r\n     \r\n        50% {\r\n           transform: rotate(calc(var(--rotation) * 1deg)) translateY(300%);\r\n        }\r\n     }\r\n     \r\n     @keyframes spinner-o824ag {\r\n        to {\r\n           transform: rotate(360deg);\r\n        }\r\n     }\r\n}\r\n\r\n@mixin rotate-pinner-filled(){\r\n   .spinner {\r\n      position: relative;\r\n      width: 26px;\r\n      height: 26px;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      outline: none;\r\n   }\r\n   \r\n   .spinner::before,\r\n   .spinner::after {\r\n      border: 5.7px solid #F2F3F5;\r\n      border-radius: 50%;\r\n      position: absolute;\r\n      content: '';\r\n      display: block;\r\n   }\r\n   \r\n   .spinner::before {\r\n      width: 3.6px;\r\n      height: 3.6px;\r\n      border-bottom-color: transparent;\r\n      border-left-color: transparent;\r\n      animation: spinner-1o3y8q 0.75s infinite linear reverse;\r\n   }\r\n   \r\n   .spinner::after {\r\n      animation: spinner-1o3y8q 0.5s infinite linear;\r\n      height: 26px;\r\n      width: 26px;\r\n      border-right-color: transparent;\r\n      border-top-color: transparent;\r\n   }\r\n   \r\n   @keyframes spinner-1o3y8q {\r\n      to {\r\n         transform: rotate(360deg);\r\n      }\r\n   }\r\n}\r\n\r\n@mixin google_animation_type(){\r\n   .loader {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      height: 50px;\r\n      position: relative;\r\n    }\r\n    \r\n    .loader__band {\r\n      height: 100%;\r\n      width: 20px;\r\n      margin: 0 10px;\r\n      background-color: #4285f4;\r\n      animation: loader__band 1.5s infinite cubic-bezier(0.4, 0.0, 0.2, 1);\r\n    }\r\n    \r\n    .loader__band:nth-child(2) {\r\n      animation-delay: 0.2s;\r\n    }\r\n    \r\n    .loader__band:nth-child(3) {\r\n      animation-delay: 0.4s;\r\n    }\r\n    \r\n    @keyframes loader__band {\r\n      0% {\r\n        transform: scaleY(1);\r\n      }\r\n      50% {\r\n        transform: scaleY(0.3);\r\n      }\r\n      100% {\r\n        transform: scaleY(1);\r\n      }\r\n    }\r\n   //  <div class=\"loader\">\r\n   //                  <div class=\"loader__band\"></div>\r\n   //                  <div class=\"loader__band\"></div>\r\n   //                  <div class=\"loader__band\"></div>\r\n   //              </div>\r\n}\r\n\r\n@mixin progress_bar(){\r\n   .progress-bar {\r\n      width: 300px;\r\n      height: 20px;\r\n      border: 1px solid #ccc;\r\n      border-radius: 10px;\r\n    }\r\n    \r\n    .progress {\r\n      height: 100%;\r\n      background-color: #3498db;\r\n      border-radius: 10px;\r\n      animation: progress-bar 5s linear;\r\n    }\r\n    \r\n    @keyframes progress-bar {\r\n      0% {\r\n        width: 0%;\r\n      }\r\n      100% {\r\n        width: 100%;\r\n      }\r\n    }\r\n    \r\n}\r\n\r\n@mixin loading_bar($attr_class, $top){\r\n   .#{$attr_class} {\r\n      top:$top;\r\n      position: absolute;\r\n      overflow: hidden;\r\n      width: 100%;\r\n      height: 4px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: default;\r\n      background-color: white;\r\n    }\r\n    \r\n    .#{$attr_class}::before {\r\n      width: 50%;\r\n      height: 4px;\r\n      content: \"\";\r\n      background-image: conic-gradient(#53538b, #5757b1);\r\n      box-shadow: 16px 14px 20px #000000Bc;\r\n      border-radius: 20px;\r\n      animation: loading-animation 2s linear infinite;\r\n    }\r\n    \r\n    @keyframes loading-animation {\r\n      0%{\r\n         transform: translateX(-200%);\r\n     }\r\n     100%{\r\n         transform: translateX(200%);\r\n     }\r\n    }  \r\n}\r\n$position:absolute;\r\n$left:10%;\r\n$top:7%;\r\n$height:130px;\r\n@mixin modale_type($modale_attr, $position, $left, $top, $width, $height){\r\n   .#{$modale_attr}{\r\n      @include mixin.positions($position, $left, $top, auto, auto);\r\n      @include mixin.text-select-remove();\r\n      @include mixin.proportions(400px, $height);\r\n      background-color: #FFFFFF;\r\n      border-left: 10px solid rgba(0, 128, 0, 0.400);\r\n      border-right: 10px solid rgba(0, 128, 0, 0.400);\r\n      text-align: center;\r\n      z-index: 10;\r\n      display: none;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column;\r\n      animation: modale .4s;\r\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.400);\r\n      transition: opacity 0.2s ease-in-out;\r\n      opacity: 1;\r\n    }\r\n    .#{$modale_attr}.pop_is_showed{\r\n      opacity: 1;\r\n    }\r\n    .#{$modale_attr}.pop_is_hidden{\r\n      animation-direction: reverse;\r\n      animation-iteration-count: infinite;\r\n    }\r\n    .#{$modale_attr} .alertTitle{\r\n      width: 100%;\r\n      top:0;\r\n      left:0;\r\n      height: 30px;\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n    }\r\n    .#{$modale_attr} .alertTitle h6{\r\n      font-size: 25px;\r\n      color:rgba(0, 128, 0, 0.400);\r\n      margin-left: 10px;\r\n    }\r\n    .#{$modale_attr} .alertTitle iconify-icon{\r\n      font-size: 25px;\r\n      color:rgba(0, 128, 0, 0.400);\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      cursor: pointer;\r\n    }\r\n    \r\n    .#{$modale_attr} .alertContent{\r\n      display: flex;\r\n      height: 100%;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column-reverse;\r\n      margin-bottom: 10px;\r\n    }\r\n  \r\n    .#{$modale_attr} .text{\r\n      color: #555;\r\n      justify-content: center;\r\n      align-items: center;\r\n      display: flex;\r\n      font-size: 13px;\r\n      font-weight: 600;\r\n      width: 320px;\r\n    }\r\n\r\n  .#{$modale_attr} h6 iconify-icon{\r\n      font-size: 35px;\r\n      color:rgba(0, 128, 0, 0.400);\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n    }\r\n    @keyframes modale {\r\n      0% {\r\n          transform: translateY(-100%);\r\n      }\r\n      100% {\r\n          transform: translateY(0%);\r\n      }\r\n    }\r\n}\r\n\r\n\r\n\r\n@mixin scale-up-ver-center(){\r\n  .scale-up-ver-center {\r\n    -webkit-animation: scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n            animation: scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n  }\r\n\r\n\r\n@-webkit-keyframes scale-up-ver-center {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n            transform: scaleY(0.4);\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n            transform: scaleY(1);\r\n  }\r\n}\r\n@keyframes scale-up-ver-center {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n            transform: scaleY(0.4);\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n            transform: scaleY(1);\r\n  }\r\n}\r\n\r\n}\r\n\r\n@mixin scal-up-bottom(){\r\n  .scale-up-bottom {\r\n    -webkit-animation: scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n            animation: scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n  }\r\n@-webkit-keyframes scale-up-bottom {\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n  }\r\n}\r\n@keyframes scale-up-bottom {\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n  }\r\n}\r\n\r\n}\r\n\r\n@mixin slide-fwd-top(){\r\n  .slide-fwd-top {\r\n    -webkit-animation: slide-fwd-top 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n            animation: slide-fwd-top 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n  }\r\n@-webkit-keyframes slide-fwd-top {\r\n  0% {\r\n    -webkit-transform: translateZ(0) translateY(0);\r\n            transform: translateZ(0) translateY(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(160px) translateY(-100px);\r\n            transform: translateZ(160px) translateY(-100px);\r\n  }\r\n}\r\n@keyframes slide-fwd-top {\r\n  0% {\r\n    -webkit-transform: translateZ(0) translateY(0);\r\n            transform: translateZ(0) translateY(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(160px) translateY(-100px);\r\n            transform: translateZ(160px) translateY(-100px);\r\n  }\r\n}\r\n\r\n}\r\n\r\n@mixin fade-in(){\r\n  .fade-in {\r\n    -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n            animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n  }\r\n@-webkit-keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n}\r\n\r\n\r\n@mixin slide-in-top($element,$time:0.5s,$top:-100%){\r\n  #{$element}.slide-in-top {\r\n    animation: slide-in-top $time cubic-bezier(0.550, 0.085, 0.680, 0.530) both;\r\n  }\r\n\r\n  @keyframes slide-in-top {\r\n    0% {\r\n      transform: translateY($top);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin slide-out-top($element,$time:0.5s,$top:-100%){\r\n  #{$element}.slide-out-top {\r\n    animation: slide-out-top $time cubic-bezier(0.550, 0.085, 0.680, 0.530) both;\r\n  }\r\n\r\n  @keyframes slide-out-top {\r\n    0% {\r\n      transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      transform: translateY($top);\r\n      opacity: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin fade-in-top($element, $time, $top){\r\n  .#{$element}.fade-in-top {\r\n      animation: fade-in-top $time cubic-bezier(0.390, 0.575, 0.565, 1.000) both running;\r\n  }\r\n\r\n@keyframes fade-in-top {\r\n  0% {\r\n    -webkit-transform: translateY($top);\r\n            transform: translateY($top);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n}\r\n\r\n\r\n@mixin fade-out-top($element, $time, $bottom){\r\n  .#{$element}.fade-out-top {\r\n      animation: fade-out-top $time cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n  }\r\n@keyframes fade-out-top {\r\n  0% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY($bottom);\r\n            transform: translateY($bottom);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n}\r\n\r\n\r\n@mixin pulsate-ping(){\r\n  .ping {\r\n    -webkit-animation: ping 0.8s ease-in-out infinite both;\r\n            animation: ping 0.8s ease-in-out infinite both;\r\n  }\r\n@-webkit-keyframes ping {\r\n  0% {\r\n    -webkit-transform: scale(0.2);\r\n            transform: scale(0.2);\r\n    opacity: 0.8;\r\n  }\r\n  80% {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(2.2);\r\n            transform: scale(2.2);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes ping {\r\n  0% {\r\n    -webkit-transform: scale(0.2);\r\n            transform: scale(0.2);\r\n    opacity: 0.8;\r\n  }\r\n  80% {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(2.2);\r\n            transform: scale(2.2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n}\r\n\r\n@mixin bzckground-scale(){\r\n  .bg-pan-bl {\r\n    -webkit-animation: bg-pan-bl 8s both;\r\n            animation: bg-pan-bl 8s both;\r\n  }\r\n@-webkit-keyframes bg-pan-bl {\r\n  0% {\r\n    background-position: 100% 0%;\r\n  }\r\n  100% {\r\n    background-position: 0% 100%;\r\n  }\r\n}\r\n@keyframes bg-pan-bl {\r\n  0% {\r\n    background-position: 100% 0%;\r\n  }\r\n  100% {\r\n    background-position: 0% 100%;\r\n  }\r\n}\r\n\r\n}","@use './animations';\r\n@include animations.slide-out-top('.flash-box', .4s, -200%);\r\n@include animations.slide-in-top('.flash-box', .4s, -200%);\r\n\r\n.flash-box[template=\"1\"]{\r\n    -webkit-user-select: none;\r\n    -webkit-touch-callout: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    background-color: #FFFFFF;\r\n    z-index: 1000;\r\n    border-radius: 5px;\r\n    margin: 0;\r\n    padding:15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: fixed;\r\n    width: 300px;\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.400);\r\n    p{\r\n      font-size:20px;\r\n      margin: 0;\r\n      font-weight:600;\r\n    } \r\n    .flash-header{\r\n       right:0;\r\n       top:0;\r\n       margin: 5px 0;\r\n       height: 30px;\r\n       width: 100%;\r\n       position: absolute;\r\n       display: flex;\r\n       justify-content: space-between;\r\n       .flash-title{\r\n        height: 100%;\r\n        padding-left: 15px;\r\n       }\r\n    }\r\n\r\n    .flash-content{\r\n        position: relative;\r\n        width: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        text-align: center;\r\n        margin-top: 20px;\r\n        svg{\r\n            width: 45px;\r\n            height: 45px;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            margin: 15px 0;\r\n        }\r\n        .flash-icon{\r\n          margin:0;\r\n        }\r\n        .flash-message{\r\n            color: #444;\r\n            display: flex;\r\n             justify-content: center;\r\n             height: 100%;\r\n             flex-direction: column;\r\n             font-size:15px;\r\n             margin: 0;\r\n         }\r\n         .flash-message ul{\r\n            list-style: none;\r\n            margin: 0;\r\n         }\r\n    }\r\n}\r\n.flash-box[template=\"1\"].flashtype-success{\r\n    border-left: 10px solid #28a745;\r\n    border-right: 10px solid #28a745;\r\n    p,svg{color: #28a745;}\r\n}\r\n.flash-box[template=\"1\"].flashtype-info{\r\n    border-left: 10px solid #284B63;\r\n    border-right: 10px solid #284B63;\r\n    p,svg{color: #284B63;}\r\n}\r\n.flash-box[template=\"1\"].flashtype-warning{\r\n    border-left: 10px solid #FF4000;\r\n    border-right: 10px solid #FF4000;\r\n    p,svg{color: #FF4000;}\r\n}\r\n\r\n.flash-box[template=\"1\"].flashtype-danger{\r\n    border-left: 10px solid #dc3545;\r\n    border-right: 10px solid #dc3545;\r\n    p,svg{color: #dc3545;}\r\n}\r\n\r\n\r\n.flash-box.slide-in-top {\r\n    animation: slide-in-top .5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both running;\r\n  }\r\n  @keyframes slide-in-top {\r\n    0% {\r\n      -webkit-transform: translateY(-100%);\r\n              transform: translateY(-100%);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .flash-box.slide-out-top {\r\n    animation: slide-out-top .5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both running;\r\n  }\r\n  @keyframes slide-out-top {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(100%);\r\n              transform: translateY(100%);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  .flash-box.fade-in-top {\r\n    animation: fade-in-top .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both running;\r\n}\r\n\r\n@keyframes fade-in-top {\r\n  0% {\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n.flash-box.fade-out-top {\r\n    animation: fade-out-top .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n@keyframes fade-out-top {\r\n0% {\r\n  -webkit-transform: translateY(0);\r\n          transform: translateY(0);\r\n  opacity: 1;\r\n}\r\n100% {\r\n  -webkit-transform: translateY(-100%);\r\n          transform: translateY(-100%);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.flash-box[template=\"2\"]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: fixed;\r\n  z-index: 1000;\r\n  top: 0;\r\n  left: 0;\r\n  margin: 0;\r\n  width: 100vw;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.400);\r\n  .flash-icon-parent{\r\n     right:0;\r\n     top:0;\r\n     margin: 5px 0 5px 0;\r\n     height: 20px;\r\n     width: 20px;\r\n     position: absolute;\r\n     cursor:pointer;\r\n  }\r\n  .flash-icon-parent{\r\n    margin-right: 5px;\r\n  }\r\n  .flash-icon{\r\n    margin: 0;\r\n  }\r\n  \r\n  .flash-content{\r\n      position: relative;\r\n      width: 100%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      svg{\r\n          width: 20px;\r\n          height: 20px;\r\n          color: #FFF;\r\n          margin: 0 15px;\r\n      }\r\n  }\r\n  .flash-content .flash-message{\r\n     color: #FFF;\r\n     display: flex;\r\n      justify-content: center;\r\n      height: 100%;\r\n      flex-direction: column;\r\n      font-size:15px;\r\n      margin: 0;\r\n      font-weight:600;\r\n  }\r\n  .flash-content .flash-message ul{\r\n      list-style: none;\r\n      margin-bottom: 0;\r\n   }\r\n}\r\n.flash-box[template=\"2\"].flashtype-danger{\r\n  background-color: #dc3545;\r\n}\r\n.flash-box[template=\"2\"].flashtype-warning{\r\n  background-color: #FF4000;\r\n}\r\n.flash-box[template=\"2\"].flashtype-success{\r\n  background-color: #28a745; \r\n}\r\n.flash-box[template=\"2\"].flashtype-info{\r\n  background-color: #284B63; \r\n}\r\n\r\n.flash-box[template=\"1\"] [_close_]{\r\n  position:relative;\r\n}\r\n.flash-box[template=\"2\"] [_close_]{\r\n  position:absolute;\r\n  right: 0;\r\n}\r\n.flash-box[template=\"2\"] [_close_], \r\n.flash-box[template=\"1\"] [_close_]{\r\n  width: 15px;\r\n  height: 15px;\r\n  margin: 0 5px;\r\n  cursor:pointer;\r\n}\r\n.flash-box[template=\"2\"] [_close_]::before, .flash-box[template=\"1\"] [_close_]::before, \r\n.flash-box[template=\"2\"] [_close_]::after, .flash-box[template=\"1\"] [_close_]::after {\r\n      position: absolute;\r\n      content: '';\r\n      width: 3px;\r\n      height: 15px;\r\n      background: #333;\r\n      left: 7px;\r\n      border-radius: 5px;\r\n  }\r\n  .flash-box[template=\"2\"] [_close_]::before, \r\n  .flash-box[template=\"1\"] [_close_]::before{\r\n      transform: rotate(45deg);\r\n  }\r\n  .flash-box[template=\"2\"] [_close_]::after, \r\n  .flash-box[template=\"1\"] [_close_]::after {\r\n      transform: rotate(315deg);\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/scss/flash.scss":
/*!************************************!*\
  !*** ./src/assets/scss/flash.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_35329__) => {

"use strict";
__nested_webpack_require_35329__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_35329__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_35329__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_35329__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_35329__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__nested_webpack_require_35329__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_35329__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__nested_webpack_require_35329__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_35329__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__nested_webpack_require_35329__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_35329__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__nested_webpack_require_35329__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_35329__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__nested_webpack_require_35329__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__ = __nested_webpack_require_35329__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./flash.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __nested_webpack_require_46046__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =   true ? __nested_webpack_require_46046__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/flash.ts":
/*!**********************!*\
  !*** ./src/flash.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_49093__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const runner_1 = __importDefault(__nested_webpack_require_49093__(/*! ./scripts/runner */ "./src/scripts/runner.ts"));
__nested_webpack_require_49093__(/*! ./assets/scss/flash.scss */ "./src/assets/scss/flash.scss");
const utils_1 = __importDefault(__nested_webpack_require_49093__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
class FormatParamsToObject {
    constructor(options) {
        this.properties = {};
        this.properties = {};
        if (FormatParamsToObject.ACCEPTED_PARAMS.length > 0) {
            FormatParamsToObject.ACCEPTED_PARAMS.forEach(key => {
                if (options && options.hasOwnProperty(key)) {
                    Object.assign(this.properties, { [key]: options[key] });
                }
            });
        }
    }
    getProperties() {
        return this.properties;
    }
}
FormatParamsToObject.ACCEPTED_PARAMS = [];
FormatParamsToObject.ACCEPTED_PARAMS = [
    "message", "type", "duration", "title", "closeButton",
    "container", "icon", "tone"
];
class Flash {
    /**
    * Adds a Flash message with the specified options.
    * @param options
    * @returns - The instance of the Flash class.
    */
    static add(options, container) {
        let datas;
        switch (options) {
            case null:
            case undefined:
                const flashBox = document.querySelector("flash");
                try {
                    if (!flashBox) {
                        throw new Error('No <flash></flash> element found in your HTML file');
                    }
                    const message = utils_1.default.escape(flashBox.getAttribute("message"));
                    const icon = Boolean(flashBox.getAttribute("icon"));
                    const duration = parseInt(flashBox.getAttribute("duration"));
                    const type = flashBox.getAttribute("type");
                    const title = flashBox.getAttribute("title");
                    const closeButton = Boolean(flashBox.getAttribute("closeButton"));
                    const tone = Boolean(flashBox.getAttribute("tone"));
                    const template = flashBox.getAttribute("template");
                    Flash.TEMPLATE = isNaN(parseInt(String(template))) ? undefined : parseInt(template);
                    datas = { message, icon, duration, type, title, closeButton, tone };
                }
                catch (error) {
                    console.error(error);
                }
                break;
            default:
                datas = options;
                break;
        }
        let properties = new FormatParamsToObject(datas).getProperties();
        let flash = Flash.create(properties['duration'], properties['type']);
        Flash.OPTIONS = datas;
        Flash.OPTIONS.flashBox = flash;
        Flash.OPTIONS.container = container;
        Flash.run();
        return new this;
    }
    /**
     * Displays a Flash message with the specified options.
     * @param options - The Flash message options.
     * @param container - The container in which to display the Flash message (optional).
     * @returns - The instance of the Flash class.
     */
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (Flash.OPTIONS) {
                const { container, flashBox, tone } = Flash.OPTIONS;
                const _template = yield Flash.template();
                flashBox.append(...Array.from(_template));
                let runner = new runner_1.default({ modal: flashBox, container, tone });
                runner.open();
            }
            return new this;
        });
    }
    /**
     * Returns the HTML template for the Flash message.
     * @param properties - Flash message properties.
     * @returns - The HTML template for the Flash message.
     */
    static template() {
        return __awaiter(this, void 0, void 0, function* () {
            const template = Flash.TEMPLATE;
            const properties = Flash.OPTIONS;
            let svg;
            if (properties.icon && properties.type) {
                svg = yield Flash.svg(properties.type);
            }
            const icon = svg ? `<h6 class="flash-icon">${svg.replace('"', "")}</h6>` : "";
            const title = (properties.title && "" !== properties.title) ? `<p class="flash-title">${properties.title}</p>` : "";
            const button = (true === Boolean(properties.closeButton)) ? `<div aria-label="Close message" _close_></div>` : "";
            const header = '' !== title || '' !== button ? `<span class="flash-header">${title}${button}</span>` : "";
            let _template;
            if (!template || Number.isInteger(template)) {
                switch (template) {
                    case 2:
                        _template = `${button}<span class="flash-content">
                ${icon}
                <p class="flash-message">${properties.message}</p>
            </span>`;
                        break;
                    default:
                        _template = `${header}
                      <span class="flash-content">
                          ${icon}
                          <p class="text">${properties.message}</p>
                      </span>`;
                        break;
                }
            }
            else if (typeof template == "string") {
                return Flash.parseTemplate(template, properties);
            }
            return utils_1.default.textToHTMLElement(_template, "div", true);
        });
    }
    static parseTemplate(template, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const regexp = /{{(.*?)}}/g;
            let matches = template.matchAll(regexp);
            let promises = []; // Collecter les promesses
            let keys = [];
            for (let match of matches) {
                let key = match[1];
                if (key === "icon" && options[key] === true && 'type' in options) {
                    promises.push(Flash.svg(options['type']));
                    keys.push(match[0]); // Stocker la chaîne à remplacer
                }
            }
            let results = yield Promise.all(promises); // Attendre les résultats des promesses
            keys.forEach((key, index) => {
                template = template.replace(key, results[index]);
            });
            template = template.replace(regexp, (match, key) => {
                if (key in options && options[key] !== undefined) {
                    return options[key];
                }
                ;
                return match;
            });
            try {
                return utils_1.default.textToHTMLElement(template, "div", true);
            }
            catch (e) {
                throw new Error("Impossible de parser le modèle de notification.");
            }
        });
    }
    /**
     * Crée un élément Flash avec les options spécifiées.
     * @param duration - La durée d'affichage du message Flash (facultatif).
     * @param type - Le type de message Flash (facultatif).
     * @returns - L'élément Flash créé.
     * @private
     */
    static create(duration, type) {
        let lastFlashBox = document.querySelector('flash');
        let template = null;
        if (lastFlashBox) {
            lastFlashBox.remove();
        }
        (undefined != type) ?
            type = "flashtype-" + type :
            type = "";
        (Number.isInteger(this.TEMPLATE)) ?
            template = this.TEMPLATE :
            template = null;
        if (!this.TEMPLATE)
            template = 1;
        let flashBox = document.createElement('flash');
        flashBox.role = "alert";
        flashBox.setAttribute('class', `flash-box ${type}`);
        if (undefined !== duration && duration > 0) {
            flashBox.setAttribute('duration', `${duration}`);
        }
        if (template)
            flashBox.setAttribute('template', `${template}`);
        return flashBox;
    }
    /**
     * Returns an SVG representation as a string.
     *
     * @param name - The name of the icon to use.
     * @returns The SVG representation as a string.
     */
    static svg(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let names = ["success", "danger", "warning", "info"];
            if (undefined !== name && names.includes(name)) {
                try {
                    const flashIcon = sessionStorage.getItem(name);
                    if (flashIcon)
                        return flashIcon;
                    const svgUrl = `https://raw.githubusercontent.com/Nelsallg/easylibs/1.0.0/packages/flash/dist/assets/icons/${name}.svg`;
                    const response = yield fetch(svgUrl);
                    const data = yield response.text();
                    if (!response.ok) {
                        console.error("Erreur lors du chargement du fichier SVG:", data);
                    }
                    sessionStorage.setItem(name, data);
                    return data;
                }
                catch (e) {
                    console.error("Erreur lors de l'importation de l'icon", e);
                    return "";
                }
            }
            else {
                return name;
            }
        });
    }
}
exports["default"] = Flash;


/***/ }),

/***/ "./src/scripts/runner.ts":
/*!*******************************!*\
  !*** ./src/scripts/runner.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __nested_webpack_require_59529__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __importDefault(__nested_webpack_require_59529__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
const animation_1 = __importDefault(__nested_webpack_require_59529__(/*! @easylibs/animation */ "../animation/dist/animation.js"));
class Runner {
    /**
     * Cette classe  encapsule la logique liée à la manipulation des modals,
     * y compris leur ouverture, leur fermeture, la gestion de l'audio, de la durée et de l'animation.
     * Elle fournit une interface simple pour interagir avec les modals
     * @param modal L'élément modal à manipuler.
     * @param container Le conteneur dans lequel insérer la modal (optionnel).
     * @param animation Les options d'animation de la modal (optionnel).
     */
    constructor(options) {
        /**
         * Méthode pour fermer la modal.
         */
        this.close = () => {
            const animation = new animation_1.default();
            const modal = this.modal;
            modal.setAttribute('aria-hidden', 'true');
            animation.animeOut({
                element: modal,
                animation: this.animation,
                display: undefined,
                delay: 350,
                closeButton: this.closeButton
            });
        };
        /**
         * Méthode pour gérer la fermeture automatique de la modal.
         */
        this.autoClose = () => {
            if (this.duration > 0) {
                setTimeout(() => {
                    this.close();
                }, this.duration);
            }
        };
        this.modal = options.modal;
        this.tone = options.tone ? null : null;
        this.volume = parseInt(this.modal.getAttribute('volume') || '1', 10);
        this.duration = parseInt(this.modal.getAttribute('duration') || "0", 10);
        this.modal.setAttribute('aria-hidden', 'true');
        this.container = options.container;
        this.animation = options.animation ? options.animation : { type: 'fade', position: 'top' };
        this.closeButton;
        this.openButton;
        this.autoClose();
    }
    /**
     * Méthode pour ouvrir la modal.
     */
    open() {
        var _a;
        if (this.tone) {
            const toneUrl = "https://raw.githubusercontent.com/Nelsallg/easylibs/1.0.0/packages/flash/dist/assets/tone.ogg";
            const tone = utils_1.default.setAudio(toneUrl);
            tone.volume = this.volume;
            tone.play();
        }
        const animation = new animation_1.default();
        const modal = this.modal;
        animation.animeIn({ element: modal, animation: this.animation, display: 'flex' });
        const container = this.container;
        const existingFlash = document.querySelector('flash');
        if (existingFlash)
            document.body.removeChild(existingFlash);
        if (undefined !== container) {
            container.insertBefore(modal, container.firstChild);
            this.clearProperties(this.modal);
        }
        else {
            document.body.insertBefore(modal, document.body.firstChild);
            this.clearProperties(this.modal);
        }
        modal.setAttribute('aria-hidden', 'false');
        this.closeButton = modal.querySelector('.flash-close-button');
        if (!this.closeButton) {
            this.closeButton = modal.querySelector('[_close_]');
        }
        (_a = this.closeButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.close);
    }
    /**
     * Méthode interne pour nettoyer les attributs de la modal.
     * @param modal L'élément modal à nettoyer.
     */
    clearProperties(modal) {
        document.addEventListener('DOMContentLoaded', function () {
            modal.removeAttribute('message');
            modal.removeAttribute('duration');
            modal.removeAttribute('icon');
            modal.removeAttribute('tone');
            modal.removeAttribute('volume');
            modal.removeAttribute('container');
            modal.removeAttribute('closeButton');
        });
    }
}
exports["default"] = Runner;


/***/ }),

/***/ "../animation/dist/animation.js":
/*!**************************************!*\
  !*** ../animation/dist/animation.js ***!
  \**************************************/
/***/ ((module, exports, __nested_webpack_require_63999__) => {

/* module decorator */ module = __nested_webpack_require_63999__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function webpackUniversalModuleDefinition(root, factory) {
  if ((  false ? 0 : _typeof(exports)) === 'object' && (  false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(self, function () {
  return /******/function () {
    // webpackBootstrap
    /******/
    "use strict";

    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
    (function () {
      var exports = __nested_webpack_exports__;
      /*!**************************!*\
        !*** ./src/animation.ts ***!
        \**************************/

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var Animation = /*#__PURE__*/function () {
        function Animation() {
          _classCallCheck(this, Animation);
        }
        _createClass(Animation, [{
          key: "switchAnimation",
          value:
          /**
          * Effectue une animation de commutation sur un élément HTML spécifié.
          * @param element - L'élément HTML sur lequel l'animation doit être appliquée.
          * @param fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa.
          * @param animation - Les informations sur le type et la position de l'animation (facultatif).
          */
          function switchAnimation(element, fromInToOut, animation) {
            var _a, _b;
            if (animation !== undefined) {
              var animeType = (_a = animation.type) !== null && _a !== void 0 ? _a : "fade";
              var animePosition = (_b = animation.position) !== null && _b !== void 0 ? _b : "top";
              var clearAfterApplying = animation.clearAfterApplying;
              if (fromInToOut) {
                element.classList.remove("".concat(animeType, "-out-").concat(animePosition));
                element.classList.add("".concat(animeType, "-in-").concat(animePosition));
                if (clearAfterApplying && clearAfterApplying === true) {
                  setTimeout(function () {
                    element.classList.remove("".concat(animeType, "-in-").concat(animePosition));
                  }, 1000);
                }
              } else {
                element.classList.remove("".concat(animeType, "-in-").concat(animePosition));
                element.classList.add("".concat(animeType, "-out-").concat(animePosition));
                if (clearAfterApplying && clearAfterApplying === true) {
                  setTimeout(function () {
                    element.classList.remove("".concat(animeType, "-out-").concat(animePosition));
                  }, 1000);
                }
              }
            }
          }
          /**
          * Effectue une animation d'entrée sur un élément HTML spécifié.
          * @param options.element - L'élément HTML sur lequel l'animation d'entrée doit être appliquée.
          * @param options.animation - Les informations sur le type et la position de l'animation (facultatif).
          * @param options.display - La valeur de la propriété CSS "display" à appliquer à l'élément après l'animation (facultatif).
          * @param options.fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa lors de l'utilisation de la fonction `switchAnimation`.
          */
        }, {
          key: "animeIn",
          value: function animeIn(options) {
            var _a, _b;
            var fromInToOut = (_a = options.fromInToOut) !== null && _a !== void 0 ? _a : true;
            var animation = options.animation;
            var _element = options.element;
            var animateElement = _element instanceof HTMLElement ? undefined : _element === null || _element === void 0 ? void 0 : _element.animateElement;
            var element = _element instanceof HTMLElement ? _element : _element === null || _element === void 0 ? void 0 : _element.element;
            if (element) {
              this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
              if (options.display !== null) {
                element.style.display = (_b = options.display) !== null && _b !== void 0 ? _b : "block";
              }
            }
          }
          /**
          * Effectue une animation de sortie sur un élément HTML spécifié, puis le masque ou le supprime.
          * @param options.element - L'élément HTML sur lequel l'animation d'entrée ou de sortie doit être appliquée.
          * @param options.display - La valeur de la propriété CSS "display" à appliquer à l'élément lors de l'animation (facultatif).
          * @param options.animation - Les informations sur le type et la position de l'animation (facultatif).
          * @param options.delay - Le délai en millisecondes avant de masquer ou de supprimer l'élément (facultatif).
          * @param options.closeButton - Le bouton de fermeture lié à l'élément (facultatif).
          * @param options.fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa.
          */
        }, {
          key: "animeOut",
          value: function animeOut(options) {
            var _this = this;
            var _a;
            var animation = options.animation;
            var _element = options.element;
            var animateElement = _element instanceof HTMLElement ? undefined : _element === null || _element === void 0 ? void 0 : _element.animateElement;
            var element = _element instanceof HTMLElement ? _element : _element === null || _element === void 0 ? void 0 : _element.element;
            var fromInToOut = (_a = options.fromInToOut) !== null && _a !== void 0 ? _a : false;
            var display = options.display,
              delay = options.delay,
              closeButton = options.closeButton;
            if (element && fromInToOut !== undefined) {
              if (display) {
                if (closeButton) {
                  closeButton.addEventListener("click", function () {
                    _this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                    setTimeout(function () {
                      element.style.display = "none";
                    }, delay || 0);
                  });
                }
                this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                setTimeout(function () {
                  element.style.display = "none";
                }, delay || 0);
              } else {
                if (closeButton) {
                  closeButton.addEventListener("click", function () {
                    _this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                    setTimeout(function () {
                      element.remove();
                    }, delay || 0);
                  });
                }
                this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                setTimeout(function () {
                  element.remove();
                }, options.delay || 0);
              }
            }
          }
          /**
          * Effectue une animation d'entrée ou de sortie sur un élément HTML spécifié en réponse aux événements du bouton d'ouverture et de fermeture.
          * @param options.openButton - Le bouton d'ouverture lié à l'élément.
          * @param options.element - L'élément HTML sur lequel l'animation d'entrée ou de sortie doit être appliquée.
          * @param options.display - La valeur de la propriété CSS "display" à appliquer à l'élément lors de l'animation (facultatif).
          * @param options.animation - Les informations sur le type et la position de l'animation (facultatif).
          * @param options.closeButton - Le bouton de fermeture lié à l'élément (facultatif).
          * @param options.dispatchCloseEvent - L'événement de fermeture à dispatcher (facultatif).
          * @param options.dispatchCloseEvent.key - La clé de l'événement de fermeture.
          * @param options.dispatchCloseEvent.value - La valeur associée à l'événement de fermeture.
          * @param options.delay - Le délai en millisecondes avant de masquer ou de supprimer l'élément (facultatif).
          */
        }, {
          key: "animeInOut",
          value: function animeInOut(options) {
            var _this2 = this;
            var _a, _b;
            var modalIsOpen = false;
            var element = options.element,
              openButton = options.openButton,
              closeButton = options.closeButton,
              animation = options.animation;
            var display = (_a = options.display) !== null && _a !== void 0 ? _a : "block";
            var dispatchCloseEvent = options.dispatchCloseEvent;
            var delay = (_b = options.delay) !== null && _b !== void 0 ? _b : 350;
            try {
              if (openButton) {
                openButton.addEventListener("click", function () {
                  if (!modalIsOpen) {
                    modalIsOpen = true;
                    _this2.animeIn({
                      element: element,
                      animation: animation,
                      display: display
                    });
                  } else {
                    modalIsOpen = false;
                    _this2.animeOut({
                      element: element,
                      animation: animation,
                      display: display,
                      delay: delay
                    });
                  }
                });
              }
              if (closeButton !== undefined && !modalIsOpen) {
                closeButton.addEventListener("click", function () {
                  modalIsOpen = false;
                  _this2.animeOut({
                    element: element,
                    animation: animation,
                    display: display,
                    delay: delay
                  });
                });
                if (dispatchCloseEvent && dispatchCloseEvent.value === true) {
                  var dispElement = dispatchCloseEvent.key;
                  document.addEventListener("click", function (event) {
                    var eventTarget = event.target;
                    if (openButton && closeButton && !openButton.contains(eventTarget) && !closeButton.contains(eventTarget) && !dispElement.contains(eventTarget)) {
                      modalIsOpen = false;
                      _this2.animeOut({
                        element: element,
                        animation: animation,
                        display: display,
                        delay: delay
                      });
                    }
                  });
                  dispElement.addEventListener("click", Animation.stopPropagation);
                }
                return;
              }
              if (closeButton === undefined && !modalIsOpen && dispatchCloseEvent) {
                if (dispatchCloseEvent.value === true) {
                  var animateElement = element instanceof HTMLElement ? undefined : element === null || element === void 0 ? void 0 : element.animateElement;
                  var _element = element instanceof HTMLElement ? element : element === null || element === void 0 ? void 0 : element.element;
                  document.addEventListener("click", function (event) {
                    var eventTarget = event.target;
                    if (openButton && _element && !openButton.contains(eventTarget) && !_element.contains(eventTarget)) {
                      modalIsOpen = false;
                      _this2.animeOut({
                        element: element,
                        animation: animation,
                        display: display,
                        delay: delay
                      });
                    }
                  });
                  if (_element) {
                    _element.addEventListener("click", Animation.stopPropagation);
                  }
                } else {
                  var _dispElement = dispatchCloseEvent.key;
                  document.addEventListener("click", function (event) {
                    var eventTarget = event.target;
                    if (openButton && !openButton.contains(eventTarget) && !_dispElement.contains(eventTarget)) {
                      modalIsOpen = false;
                      _this2.animeOut({
                        element: element,
                        animation: animation,
                        display: display,
                        delay: delay
                      });
                    }
                  });
                  _dispElement.addEventListener("click", Animation.stopPropagation);
                }
              }
            } catch (error) {
              throw new Error("HTMLElement null or undefined.");
            }
          }
        }], [{
          key: "stopPropagation",
          value: function stopPropagation(e) {
            e.stopPropagation();
          }
        }]);
        return Animation;
      }();
      exports["default"] = Animation;
    })();

    /******/
    return __nested_webpack_exports__;
    /******/
  }();
});

/***/ }),

/***/ "../utils/dist/utils.js":
/*!******************************!*\
  !*** ../utils/dist/utils.js ***!
  \******************************/
/***/ ((module, exports, __nested_webpack_require_79860__) => {

/* module decorator */ module = __nested_webpack_require_79860__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
(function webpackUniversalModuleDefinition(root, factory) {
  if ((  false ? 0 : _typeof2(exports)) === 'object' && (  false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(self, function () {
  return /******/function () {
    // webpackBootstrap
    /******/
    "use strict";

    /******/ // The require scope
    /******/
    var __nested_webpack_require_975__ = {};
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/
    (function () {
      /******/ // define getter functions for harmony exports
      /******/__nested_webpack_require_975__.d = function (exports, definition) {
        /******/for (var key in definition) {
          /******/if (__nested_webpack_require_975__.o(definition, key) && !__nested_webpack_require_975__.o(exports, key)) {
            /******/Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key]
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (function () {
      /******/__nested_webpack_require_975__.o = function (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    (function () {
      /******/ // define __esModule on exports
      /******/__nested_webpack_require_975__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
    })();
    /******/
    /************************************************************************/
    var __nested_webpack_exports__ = {};
    /*!**********************!*\
      !*** ./src/utils.ts ***!
      \**********************/
    __nested_webpack_require_975__.r(__nested_webpack_exports__);
    /* harmony export */
    __nested_webpack_require_975__.d(__nested_webpack_exports__, {
      /* harmony export */"default": function _default() {
        return /* binding */Utils;
      }
      /* harmony export */
    });
    function _typeof(o) {
      "@babel/helpers - typeof";

      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
        return typeof o;
      } : function (o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, _typeof(o);
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _iterableToArrayLimit(r, l) {
      var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
      if (null != t) {
        var e,
          n,
          i,
          u,
          a = [],
          f = !0,
          o = !1;
        try {
          if (i = (t = t.call(r)).next, 0 === l) {
            if (Object(t) !== t) return;
            f = !1;
          } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
          o = !0, n = r;
        } finally {
          try {
            if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
          } finally {
            if (o) throw n;
          }
        }
        return a;
      }
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _toPropertyKey(t) {
      var i = _toPrimitive(t, "string");
      return "symbol" == _typeof(i) ? i : String(i);
    }
    function _toPrimitive(t, r) {
      if ("object" != _typeof(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === r ? String : Number)(t);
    }
    var Utils = /*#__PURE__*/function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }
      _createClass(Utils, null, [{
        key: "setAudio",
        value:
        /**
         * Crée un élément audio avec la source audio spécifiée par le chemin audioPath.
         * @param audioPath Le chemin de la source audio.
         * @param classname La classe CSS à ajouter à l'élément audio (optionnel).
         * @returns L'élément audio créé.
         */
        function setAudio(audioPath) {
          var classname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var audio = document.createElement("audio");
          if (classname != null) {
            audio.classList.add(classname);
          }
          var source = document.createElement("source");
          source.src = audioPath;
          source.type = "audio/mpeg";
          audio.appendChild(source);
          return audio;
        }
        /**
         * Converts an HTML string into an HTML element or a collection of HTML elements.
         *
         * @param textHtml - The HTML string to convert.
         * @param targetName - The tag name of the target HTML element to create.
         * @param children - A boolean indicating whether to return all children of the target element.
         * @returns - Returns the first child of the target element if `children` is `false`, otherwise returns a collection of the element's children. Returns `null` if there are no children.
         *
         * This method creates a new HTML element of the type specified by `targetName`, sets its inner HTML to `textHtml`, and returns either the first child of this element or all its children as an HTMLCollection, depending on the value of `children`.
         * If the HTML content generates no children, the method returns `null`.
         */
      }, {
        key: "textToHTMLElement",
        value: function textToHTMLElement(textHtml) {
          var targetName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
          var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var target = document.createElement("".concat(targetName));
          target.innerHTML = textHtml;
          if (true === children) {
            return target.children;
          }
          return target.firstElementChild;
        }
        /**
         * retourne un élément du dom
         */
      }, {
        key: "$$",
        value: function $$(element) {
          if (typeof element !== "string") {
            return element;
          } else if (typeof element === "string") {
            var collection = document.querySelectorAll("".concat(element));
            var el = document.querySelector("".concat(element));
            if (collection !== null && collection.length > 1) {
              return collection;
            }
            if (el !== null) {
              return el;
            }
          }
        }
        /**
         * Cette fonction permet de convertir un objet NodeList en un tableau d'éléments HTML (HTMLElement)
         * et d'exécuter une fonction de rappel sur chaque élément du tableau.
         * @param nodeList Un objet NodeList ou un élément HTML.
         * Si c'est un NodeList, il sera converti en tableau d'éléments HTML.
         * @param callback Une fonction de rappel à exécuter sur chaque élément du tableau.
         * @returns
         */
      }, {
        key: "processNodes",
        value: function processNodes(nodeList) {
          var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (node, index) {};
          if (nodeList instanceof NodeList || Array.isArray(nodeList)) {
            return Array.from(nodeList).forEach(function (node, i) {
              callback(node, i);
            });
          }
          if (null !== nodeList && undefined !== nodeList) {
            return callback(nodeList);
          }
        }
        /**
         * Méthode qui renvoie une expression régulière en fonction du type demandé.
         * @param type Le type d'expression régulière demandé.
         * @returns L'expression régulière correspondante.
         */
      }, {
        key: "getRegexp",
        value: function getRegexp(type) {
          switch (type) {
            case "email":
              return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
            case "phone-number":
              return new RegExp(/^(0|\+[1-9][0-9]{0,2}) ?[0-9]+$/);
            case "number":
              return new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/);
            case "strong-password":
              return new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
            case "url-protocol":
              return new RegExp(/^(https?:\/\/)$/, "i");
            case "url-domain":
              return new RegExp(/^((([a-zA-Z0-9]{1,})[.-]?)+[a-zA-Z]{2,})$/, "i");
            case "url-ip":
              return new RegExp(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, "i");
            case "url-port":
              return new RegExp(/^:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{0,3})$/, "i");
            case "url-path":
              return new RegExp(/^(\.\/)?[-a-zA-Z\d%_.~+\/]*$/, "i");
            case "url-query":
              return new RegExp(/^(\?[;&a-zA-Z\d%_.~+=-]*)$/, "i");
            case "url-fragment":
              return new RegExp(/^#[-a-zA-Z\d%_.~+/=?&;:!*'()]*$/, "i");
            case "default-text":
              return new RegExp(/^[a-zA-Z -'áàâäãåçéèêëğíìîïıñóòôöõúùûüşýÿæœÁÀÂÄÃÅÇÉÈÊËĞÍÌÎÏIÑÓÒÔÖÕÚÙÛÜŞÝŸÆŒ]+$/);
            case "fr-text":
              return new RegExp(/^[A-Za-z' - àâçéèêëûæœÀÂÉÈÊËÆŒ]+$/);
            case "en-text":
              return new RegExp(/^[a-zA-Z '-]{1,40}$/);
            case "tr-text":
              return new RegExp(/^[A-Za-z çğıöüşæœÇĞIÖÜŞ]+$/);
            default:
              throw new Error("Type d'expression régulière non pris en charge.");
          }
        }
        /**
         * Crée une couche superfielle au dessus d'un élément html afin d'empecher tout évènement.
         * @param tag Le nom de la balise HTML à utiliser comme couche (par défaut : 'td', idéal pour les tableau html).
         * @param backgroundColor La couleur d'arrière-plan de la zone interdite (par défaut : '#FFFFFF').
         * @returns Un élément HTML représentant une zone interdite.
         */
      }, {
        key: "forbiddener",
        value: function forbiddener() {
          var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "td";
          var backgroundColor = arguments.length > 1 ? arguments[1] : undefined;
          var forbiddenTag = document.createElement(tag);
          forbiddenTag.setAttribute("class", "forbidden");
          var style = {
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: ".7",
            zIndex: "10",
            backgroundColor: backgroundColor ? backgroundColor : "#FFFFFF"
          };
          Object.assign(forbiddenTag.style, style);
          return forbiddenTag;
        }
        /**
         * Réduit une chaîne de texte.
         * @param text La chaîne de texte à réduire.
         * @param maxLength La longueur maximale de la chaîne résultante (par défaut : 14).
         * @returns La chaîne de texte réduite.
         */
      }, {
        key: "truncateChars",
        value: function truncateChars(text) {
          var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 14;
          text = typeof text === "string" ? text.trim() : "";
          if (text.length > maxLength) {
            return "".concat(text.substring(0, maxLength), "...");
          }
          return text;
        }
        /**
         * Changes the input text type to a number type and performs additional processing
         * based on the specified parameters.
         *
         * @param attr - The CSS selector for the input elements to be processed.
         * @param limit - (Optional) The maximum allowed value. If provided, input values exceeding this limit will be set to the limit.
         * @param priceType - (Optional) A boolean flag indicating whether the input represents a price. If true, the input is expected to be a number with an optional decimal part.
         * @param decimal - (Optional) The number of decimal places to round to. If provided, the input values will be rounded to the specified decimal places.
         */
      }, {
        key: "changeInputTextTypeToNumberType",
        value: function changeInputTextTypeToNumberType(attr, limit) {
          var priceType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var decimal = arguments.length > 3 ? arguments[3] : undefined;
          this.processNodes(this.$$(attr), function (element) {
            var input = element;
            if (input) {
              input.addEventListener("input", function () {
                var regExp = priceType ? /^[0-9]+([.,][0-9]+)?$/ : /[^\d]/g;
                if (decimal) {
                  var getValue = input.value.replace(regExp, "");
                  input.value = "".concat(parseFloat(getValue).toFixed(decimal));
                } else {
                  input.value = input.value.replace(regExp, "");
                }
                if (limit && parseInt(input.value) > limit) {
                  input.value = "".concat(limit);
                }
              });
            }
          });
        }
        /**
         * The function is used to disable specific elements (by default td tags) inside a table when a certain button is clicked.
         * It accepts several parameters: the tag to be disabled, the target element to be disabled, the trigger element (button),
         * and the background color for the forbidden tag.
         *
         * @param tag - The tag of the element to be disabled (default: "td").
         * @param target - The target element to be disabled (default: undefined).
         * @param trigger - The trigger element (button) to activate the function (default: undefined).
         * @param backgroundColor - The background color for the forbidden tag (default: undefined).
         */
      }, {
        key: "disablor",
        value: function disablor() {
          var _this = this;
          var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "td";
          var target = arguments.length > 1 ? arguments[1] : undefined;
          var trigger = arguments.length > 2 ? arguments[2] : undefined;
          var backgroundColor = arguments.length > 3 ? arguments[3] : undefined;
          var buttons = document.querySelectorAll("[disablor],[self-disablor]");
          try {
            if (!trigger && !buttons) {
              throw new Error("Aucun bouton avec l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
            }
            this.processNodes(buttons, function (button) {
              button.addEventListener("click", function () {
                var self = button.hasAttribute("self-disablor");
                var item = self ? button : button.closest("[disablor]");
                if (!target && !item) {
                  throw new Error("Aucun élément à désactiver contenant l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
                }
                if (item) {
                  item.style.position = "relative";
                  item.insertBefore(_this.forbiddener(tag, backgroundColor), item.firstChild);
                  if (item instanceof HTMLButtonElement) {
                    item.setAttribute("disabled", "true");
                  }
                }
              });
            });
          } catch (error) {
            console.error("Une erreur s'est produit: ", error);
          }
        }
        /**
         * Adds an asterisk indicator to labels associated with required form fields.
         * The asterisk is inserted as an SVG element, and labels are selected based on the presence
         * of the 'required-field' attribute. The function utilizes the processNodes method
         * to iterate through the matched labels and append the asterisk.
         */
      }, {
        key: "setAsteriskToRequiredField",
        value: function setAsteriskToRequiredField() {
          var _this2 = this;
          var svgUrl = "https://raw.githubusercontent.com/Nelsallg/easylibs/1.0.0/packages/utils/dist/assets/asterisk.svg";
          fetch(svgUrl).then(function (response) {
            return response.text();
          }).then(function (svgString) {
            var asterisk = _this2.textToHTMLElement(svgString);
            var labels = document.querySelectorAll("label[required-field]");
            asterisk.style.color = "#f89a9b";
            asterisk.style.width = "10px";
            asterisk.style.height = "10px";
            if (labels) {
              _this2.processNodes(labels, function (label) {
                var clonedAsterisk = asterisk.cloneNode(true);
                label.appendChild(clonedAsterisk);
              });
            }
          })["catch"](function (error) {
            console.error("Erreur lors du chargement du fichier SVG:", error);
          });
        }

        /**
         * This method checks if the object contains a key with the given substring.
         * @param object The object to be searched.
         * @param substring The substring to search for.
         * @param getKey An optional parameter to determine the type of return value.
         *               If true, the method will return the key as a string.
         *               If false or not provided, the method will return the value corresponding to the key.
         * @returns The value or key of the first matching property if found, otherwise false.
         */
      }, {
        key: "hasKeyWithNameSubstring",
        value: function hasKeyWithNameSubstring(object, substring, getKey) {
          for (var key in object) {
            if (key.includes(substring)) {
              if (undefined === getKey || false === getKey) {
                return object[key];
              }
              if (true === getKey) {
                return key;
              }
            }
          }
          return false;
        }
        /**
         * This method searches for an object's property by its key or short key.
         * @param object The object to be searched.
         * @param keyOrShortKey The key or short key to search for.
         * @param key An optional parameter to determine the type of return value.
         *            If true, the function will return the key as a string.
         *            If false or not provided, the function will return the value corresponding to the key.
         * @returns The value or key of the first matching property if found, otherwise false.
         */
      }, {
        key: "findObjectDataByKeyName",
        value: function findObjectDataByKeyName(object, keyOrShorKey, key) {
          Object.keys(object).forEach(function (key) {
            if (key.includes(keyOrShorKey)) {
              return object[key];
            }
          });
          return false;
        }
      }, {
        key: "findChar",
        value: function findChar(string, limit) {
          var returnBool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          for (var i = 0; i <= limit; i++) {
            var index = string.indexOf(i.toString());
            if (index !== -1) {
              return returnBool ? true : i.toString();
            }
          }
          return returnBool ? false : null;
        }
      }, {
        key: "findComputedStyle",
        value: function findComputedStyle(element, property) {
          var styles = window.getComputedStyle(element);
          var propertiesObject = {};
          try {
            if (!element) {
              throw new Error("Element not found");
            }
            if (!property) {
              throw new Error("Property is required");
            }
            if (Array.isArray(property) && property.length > 0) {
              property.forEach(function (props) {
                propertiesObject["".concat(props)] = styles.getPropertyValue("".concat(props));
              });
              return propertiesObject;
            }
            if (typeof property === "string") {
              return styles.getPropertyValue("".concat(property));
            }
          } catch (error) {
            console.error(error);
          }
        }
        /**
         * A function to escape special characters in a string using the DOM API.
         *
         * @param str - The input string to be escaped.
         * @returns - The escaped string with special characters replaced with their HTML entity equivalents.
         */
      }, {
        key: "escape",
        value: function escape(str) {
          if (!str) {
            return "";
          }
          var div = document.createElement("div");
          div.appendChild(document.createTextNode(str));
          return div.innerHTML;
        }
        /**
         * This function takes an HTMLElement and a target string.
         * It returns the first Element with a matching target that is a sibling of the referent element or any of its previous siblings.
         * If no such element is found, it returns null.
         * @param referent - The starting point of the search.
         * @param target - The CSS selector used to find the desired element.
         * @returns The first Element with a matching target, or null if no such element is found.
         */
      }, {
        key: "findHTMLElementBy",
        value: function findHTMLElementBy(referent, target) {
          var currentElement = referent;
          if (currentElement) {
            while (currentElement = currentElement.previousElementSibling) {
              var charCounterSpan = currentElement.querySelector(target);
              if (charCounterSpan) {
                return charCounterSpan;
              }
            }
          }
          return null;
        }
        /**
         * This function takes an object containing HTML attributes and returns a string representing the attributes.
         * If no attributes are provided, it returns an empty string.
         * @param attributes - An object containing HTML attributes.
         * @returns A string representing the attributes.
         */
      }, {
        key: "formatHTMLAttributes",
        value: function formatHTMLAttributes(attributes) {
          var attrs = "";
          if (attributes) {
            for (var _i = 0, _Object$entries = Object.entries(attributes); _i < _Object$entries.length; _i++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];
              if (key) {
                attrs += "".concat(key, "='").concat(value, "'");
              }
            }
          }
          return attrs.trim();
        }
      }]);
      return Utils;
    }();

    /******/
    return __nested_webpack_exports__;
    /******/
  }();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_106909__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_106909__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_106909__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_106909__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_106909__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_106909__.o(definition, key) && !__nested_webpack_require_106909__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_106909__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_106909__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__nested_webpack_require_106909__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__nested_webpack_require_106909__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_106909__("./src/flash.ts");
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=flash.js.map

/***/ }),

/***/ "./node_modules/@easylibs/progress-form/dist/progress-form.js":
/*!********************************************************************!*\
  !*** ./node_modules/@easylibs/progress-form/dist/progress-form.js ***!
  \********************************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/animejs/lib/anime.es.js":
/*!**************************************************!*\
  !*** ../../node_modules/animejs/lib/anime.es.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_766__) => {

__nested_webpack_require_766__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_766__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*
 * anime.js v3.2.2
 * (c) 2023 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

// Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};

var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};

var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d'];

// Caching

var cache = {
  CSS: {},
  springs: {}
};

// Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function (a) { return Array.isArray(a); },
  obj: function (a) { return stringContains(Object.prototype.toString.call(a), 'Object'); },
  pth: function (a) { return is.obj(a) && a.hasOwnProperty('totalLength'); },
  svg: function (a) { return a instanceof SVGElement; },
  inp: function (a) { return a instanceof HTMLInputElement; },
  dom: function (a) { return a.nodeType || is.svg(a); },
  str: function (a) { return typeof a === 'string'; },
  fnc: function (a) { return typeof a === 'function'; },
  und: function (a) { return typeof a === 'undefined'; },
  nil: function (a) { return is.und(a) || a === null; },
  hex: function (a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a); },
  rgb: function (a) { return /^rgb/.test(a); },
  hsl: function (a) { return /^hsl/.test(a); },
  col: function (a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)); },
  key: function (a) { return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes'; },
};

// Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) { return parseFloat(p); }) : [];
}

// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js

function spring(string, duration) {

  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity =  minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? (duration * t) / 1000 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) { return t; }
    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];
    if (cached) { return cached; }
    var frame = 1/6;
    var elapsed = 0;
    var rest = 0;
    while(true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) { break; }
      } else {
        rest = 0;
      }
    }
    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;

}

// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function

function steps(steps) {
  if ( steps === void 0 ) steps = 10;

  return function (t) { return Math.ceil((minMax(t, 0.000001, 1)) * steps) * (1 / steps); };
}

// BezierEasing https://github.com/gre/bezier-easing

var bezier = (function () {

  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 }
  function B(aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 }
  function C(aA1)      { return 3.0 * aA1 }

  function calcBezier(aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT }
  function getSlope(aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0.0) { aB = currentT; } else { aA = currentT; }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) { return aGuessT; }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {

    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) { return; }
    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {

      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;

      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }

    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) { return x; }
      if (x === 0 || x === 1) { return x; }
      return calcBezier(getTForX(x), mY1, mY2);
    }

  }

  return bezier;

})();

var penner = (function () {

  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)

  var eases = { linear: function () { return function (t) { return t; }; } };

  var functionEasings = {
    Sine: function () { return function (t) { return 1 - Math.cos(t * Math.PI / 2); }; },
    Expo: function () { return function (t) { return t ? Math.pow(2, 10 * t - 10) : 0; }; },
    Circ: function () { return function (t) { return 1 - Math.sqrt(1 - t * t); }; },
    Back: function () { return function (t) { return t * t * (3 * t - 2); }; },
    Bounce: function () { return function (t) {
      var pow2, b = 4;
      while (t < (( pow2 = Math.pow(2, --b)) - 1) / 11) {}
      return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow(( pow2 * 3 - 2 ) / 22 - t, 2)
    }; },
    Elastic: function (amplitude, period) {
      if ( amplitude === void 0 ) amplitude = 1;
      if ( period === void 0 ) period = .5;

      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return (t === 0 || t === 1) ? t : 
          -a * Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2) * Math.asin(1 / a))) * (Math.PI * 2)) / p);
      }
    }
  };

  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint'];

  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () { return function (t) { return Math.pow(t, i + 2); }; };
  });

  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;
    eases['easeOut' + name] = function (a, b) { return function (t) { return 1 - easeIn(a, b)(1 - t); }; };
    eases['easeInOut' + name] = function (a, b) { return function (t) { return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 
      1 - easeIn(a, b)(t * -2 + 2) / 2; }; };
    eases['easeOutIn' + name] = function (a, b) { return function (t) { return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : 
      (easeIn(a, b)(t * 2 - 1) + 1) / 2; }; };
  });

  return eases;

})();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) { return easing; }
  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case 'spring' : return spring(easing, duration);
    case 'cubicBezier' : return applyArguments(bezier, args);
    case 'steps' : return applyArguments(steps, args);
    default : return applyArguments(ease, args);
  }
}

// Strings

function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch(e) {
    return;
  }
}

// Arrays

function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) { return a.concat(is.arr(b) ? flattenArray(b) : b); }, []);
}

function toArray(o) {
  if (is.arr(o)) { return o; }
  if (is.str(o)) { o = selectString(o) || o; }
  if (o instanceof NodeList || o instanceof HTMLCollection) { return [].slice.call(o); }
  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) { return a === val; });
}

// Objects

function cloneObject(o) {
  var clone = {};
  for (var p in o) { clone[p] = o[p]; }
  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) { o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p]; }
  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) { o[p] = is.und(o1[p]) ? o2[p] : o1[p]; }
  return o;
}

// Colors

function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? ("rgba(" + (rgb[1]) + ",1)") : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; } );
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return ("rgba(" + r + "," + g + "," + b + ",1)");
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p, q, t) {
    if (t < 0) { t += 1; }
    if (t > 1) { t -= 1; }
    if (t < 1/6) { return p + (q - p) * 6 * t; }
    if (t < 1/2) { return q; }
    if (t < 2/3) { return p + (q - p) * (2/3 - t) * 6; }
    return p;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return ("rgba(" + (r * 255) + "," + (g * 255) + "," + (b * 255) + "," + a + ")");
}

function colorToRgb(val) {
  if (is.rgb(val)) { return rgbToRgba(val); }
  if (is.hex(val)) { return hexToRgba(val); }
  if (is.hsl(val)) { return hslToRgba(val); }
}

// Units

function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) { return split[1]; }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') { return 'px'; }
  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) { return 'deg'; }
}

// Values

function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) { return val; }
  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) { return value; }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) { return cached; }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = (el.parentNode && (el.parentNode !== document)) ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || (is.svg(el) && el[prop]))) { return 'attribute'; }
  if (is.dom(el) && arrayContains(validTransforms, prop)) { return 'transform'; }
  if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) { return 'css'; }
  if (el[prop] != null) { return 'object'; }
}

function getElementTransforms(el) {
  if (!is.dom(el)) { return; }
  var str = el.style.transform || '';
  var reg  = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m; while (m = reg.exec(str)) { transforms.set(m[1], m[2]); }
  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform': return getTransformValue(target, propName, animatable, unit);
    case 'css': return getCSSValue(target, propName, unit);
    case 'attribute': return getAttribute(target, propName);
    default: return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) { return to; }
  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));
  switch (operator[0][0]) {
    case '+': return x + y + u;
    case '-': return x - y + u;
    case '*': return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) { return colorToRgb(val); }
  if (/\s/g.test(val)) { return val; }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) { return unitLess + unit; }
  return unitLess;
}

// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return (getAttribute(el, 'width') * 2) + (getAttribute(el, 'height') * 2);
}

function getLineLength(el) {
  return getDistance(
    {x: getAttribute(el, 'x1'), y: getAttribute(el, 'y1')}, 
    {x: getAttribute(el, 'x2'), y: getAttribute(el, 'y2')}
  );
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i = 0 ; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) { totalLength += getDistance(previousPos, currentPos); }
    previousPos = currentPos;
  }
  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}

// Path animation

function getTotalLength(el) {
  if (el.getTotalLength) { return el.getTotalLength(); }
  switch(el.tagName.toLowerCase()) {
    case 'circle': return getCircleLength(el);
    case 'rect': return getRectLength(el);
    case 'line': return getLineLength(el);
    case 'polyline': return getPolylineLength(el);
    case 'polygon': return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
}

// Motion path

function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) { break; }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  }
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function(property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    }
  }
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if ( offset === void 0 ) offset = 0;

    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case 'x': return (p.x - svg.x) * scaleX;
    case 'y': return (p.y - svg.y) * scaleY;
    case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}

// Decompose value

function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var value = validateValue((is.pth(val) ? val.totalLength : val), unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: (is.str(val) || unit) ? value.split(rgx) : []
  }
}

// Animatables

function parseTargets(targets) {
  var targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
  return filterArray(targetsArray, function (item, pos, self) { return self.indexOf(item) === pos; });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}

// Properties

function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  // Override duration if easing is a spring
  if (/^spring/.test(settings.easing)) { settings.duration = spring(settings.easing); }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = (l === 2 && !is.obj(prop[0]));
    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) { settings.duration = tweenSettings.duration / l; }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {value: prop};
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = (is.obj(v) && !is.pth(v)) ? v : {value: v};
    // Default delay value should only be applied to the first tween
    if (is.und(obj.delay)) { obj.delay = !i ? tweenSettings.delay : 0; }
    // Default endDelay value should only be applied to the last tween
    if (is.und(obj.endDelay)) { obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0; }
    return obj;
  }).map(function (k) { return mergeObjects(k, settings); });
}


function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) { return Object.keys(key); })), function (p) { return is.key(p); })
  .reduce(function (a,b) { if (a.indexOf(b) < 0) { a.push(b); } return a; }, []);
  var properties = {};
  var loop = function ( i ) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) { newKey.value = key[p]; }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) loop( i );
  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) { params = mergeObjects(flattenKeyframes(keyframes), params); }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}

// Tweens

function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function (v) { return getFunctionValue(v, animatable); });
      if (value.length === 1) { value = value[0]; }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) { to = previousValue; }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) { tween.round = 1; }
    previousTween = tween;
    return tween;
  });
}

// Tween progress

var setProgressValue = {
  css: function (t, p, v) { return t.style[p] = v; },
  attribute: function (t, p, v) { return t.setAttribute(p, v); },
  object: function (t, p, v) { return t[p] = v; },
  transform: function (t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) { str += prop + "(" + value + ") "; });
      t.style.transform = str;
    }
  }
};

// Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}

// Animations

function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    }
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) { return !is.und(a); });
}

// Create Instance

function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function (anim) { return anim.timelineOffset ? anim.timelineOffset : 0; };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration; })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.delay; })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) { return getTlOffset(anim) + anim.duration - anim.endDelay; })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}

// Core

var activeInstances = [];

var engine = (function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }
  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;
    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];
      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }
    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) { return; }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else { // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(
        function (instance) { return instance ._onDocumentVisibility(); }
      );
      engine();
    }
  }
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
})();

function isDocumentHidden() {
  return !!document && document.hidden;
}

// Public Instance

function anime(params) {
  if ( params === void 0 ) params = {};


  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) { return resolve = _resolve; });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }
    instance.reversed = !instance.reversed;
    children.forEach(function (child) { return child.reversed = instance.reversed; });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) { child.seek(time - child.timelineOffset); }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) { seekChild(time, children[i]); }
    } else {
      for (var i$1 = childrenLength; i$1--;) { seekChild(time, children[i$1]); }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      // Only check for keyframes if there is more than one tween
      if (tweenLength) { tween = filterArray(tweens, function (t) { return (insTime < t.end); })[0] || tween; }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = (void 0);
      for (var n = 0; n < toNumbersLength; n++) {
        var value = (void 0);
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + (eased * (toNumber - fromNumber));
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      // Manual Array.reduce for better performances
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) { instance[cb](instance); }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax((insTime / insDuration) * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) { syncInstanceChildren(insTime); }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if ((insTime >= insEndDelay && instance.currentTime !== insDuration) || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }
      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) { setCallback('update'); }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');
          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;
        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i = childrenLength; i--;) { instance.children[i].reset(); }
    if (instance.reversed && instance.loop !== true || (direction === 'alternate' && instance.loop === 1)) { instance.remaining++; }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };

  // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
  instance._onDocumentVisibility = resetTime;

  // Set Value helper

  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function(t) {
    now = t;
    if (!startTime) { startTime = now; }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };

  instance.play = function() {
    if (!instance.paused) { return; }
    if (instance.completed) { instance.reset(); }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function() {
    instance.reset();
    instance.play();
  };

  instance.remove = function(targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) { instance.play(); }

  return instance;

}

// Remove targets from animation

function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) { children.splice(c, 1); }
  }
  if (!animations.length && !children.length) { instance.pause(); }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
}

// Stagger helpers

function stagger(val, params) {
  if ( params === void 0 ) params = {};

  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) { fromIndex = 0; }
    if (fromCenter) { fromIndex = (t - 1) / 2; }
    if (fromLast) { fromIndex = t - 1; }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex%grid[0] : (grid[0]-1)/2;
          var fromY = !fromCenter ? Math.floor(fromIndex/grid[0]) : (grid[1]-1)/2;
          var toX = index%grid[0];
          var toY = Math.floor(index/grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === 'x') { value = -distanceX; }
          if (axis === 'y') { value = -distanceY; }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) { values = values.map(function (val) { return easing(val / maxValue) * maxValue; }); }
      if (direction === 'reverse') { values = values.map(function (val) { return axis ? (val < 0) ? val * -1 : -val : Math.abs(maxValue - val); }); }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + (spacing * (Math.round(values[i] * 100) / 100)) + unit;
  }
}

// Timeline

function timeline(params) {
  if ( params === void 0 ) params = {};

  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) { activeInstances.splice(tlIndex, 1); }
    function passThrough(ins) { ins.passThrough = true; }
    for (var i = 0; i < children.length; i++) { passThrough(children[i]); }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) { tl.play(); }
    return tl;
  };
  return tl;
}

anime.version = '3.2.1';
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (anime);


/***/ }),

/***/ "./src/scripts/css-style.ts":
/*!**********************************!*\
  !*** ./src/scripts/css-style.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_43393__) => {

__nested_webpack_require_43393__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_43393__.d(__nested_webpack_exports__, {
/* harmony export */   cssStyle: () => (/* binding */ cssStyle)
/* harmony export */ });
function cssStyle(params, fieldSets, translateX, fieldsetLength, fieldsetMarginWidth, styleOptions) {
  try {
    var fieldSetParent = params.form.querySelector("[fieldset__parent]");
    var fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]");
    var fieldsetWidth = Math.abs(translateX);
    var fieldsetContainerWidth = fieldsetLength * fieldsetWidth + fieldsetMarginWidth;
    var defaultFieldSetParentStyle = {
      height: '100%',
      overflow: 'hidden',
      width: "".concat(fieldsetWidth, "px")
    };
    var defaultFormStyle = {
      width: "".concat(fieldsetWidth, "px"),
      height: '100%',
      boxSizing: 'border-box'
    };
    var defaultFieldsetContainerStyle = {
      width: "".concat(fieldsetContainerWidth, "px"),
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-between'
    };
    var defaultFieldsetStyle = {
      width: "".concat(fieldsetWidth, "px"),
      transition: 'margin-left 0.4s ease-in-out',
      backgroundColor: '#FFFFFF',
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'column',
      padding: '30px',
      border: 'none',
      boxShadow: '0 0 5px rgba(255, 255, 255, 0.7137254902)',
      borderRadius: '3px'
    };

    // Fusionnez les styles par défaut avec les styles personnalisés
    var formStyle = Object.assign({}, defaultFormStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.form);
    var fieldSetParentStyle = Object.assign({}, defaultFieldSetParentStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetParent);
    var fieldsetContainerStyle = Object.assign({}, defaultFieldsetContainerStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetContainer);
    var fieldsetStyle = Object.assign({}, defaultFieldsetStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldset);
    Object.assign(params.form.style, formStyle);
    Object.assign(fieldSetParent.style, fieldSetParentStyle);
    Object.assign(fieldsetContainer.style, fieldsetContainerStyle);
    fieldSets.forEach(function (fieldSet, index) {
      Object.assign(fieldSet.style, fieldsetStyle);
      fieldSet.classList.add("fieldset".concat(index));
    });
  } catch (error) {
    console.error(error);
  }
}

/***/ }),

/***/ "./src/scripts/focus-in-block.ts":
/*!***************************************!*\
  !*** ./src/scripts/focus-in-block.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_46231__) => {

__nested_webpack_require_46231__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_46231__.d(__nested_webpack_exports__, {
/* harmony export */   focusInBlock: () => (/* binding */ focusInBlock),
/* harmony export */   getFocusableElements: () => (/* binding */ getFocusableElements)
/* harmony export */ });
/**
 * Gère le focus clavier sur les éléments d'un bloc HTML spécifié.
 * @param key - L'événement clavier qui a déclenché la fonction.
 * @param block - L'élément HTML qui représente le bloc sur lequel on souhaite gérer le focus.
 */
function focusInBlock(key, block) {
  key.preventDefault();
  var focusables = getFocusableElements(block);
  var index = focusables.findIndex(function (f) {
    return f === block.querySelector(':focus');
  });
  key.shiftKey === true ? index-- : index++;
  if (index >= focusables.length) {
    index = 0;
  }
  if (index < 0) {
    index = focusables.length - 1;
  }
  var FIELD = focusables[index];
  FIELD.focus();
}
/**
 * Récupère tous les éléments focusables dans un bloc HTML spécifié.
 * @param block - L'élément HTML qui représente le bloc contenant les éléments focusables.
 * @returns Un tableau d'éléments focusables présents dans le bloc.
 */
function getFocusableElements(block) {
  var focusableSelector = "button, select, input, a, textarea";
  return Array.from(block.querySelectorAll(focusableSelector));
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_47854__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_47854__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_47854__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_47854__.o(definition, key) && !__nested_webpack_require_47854__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_47854__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_47854__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/progress-form.ts ***!
  \******************************/
__nested_webpack_require_47854__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_47854__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressForm)
/* harmony export */ });
/* harmony import */ var _scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_47854__(/*! ./scripts/focus-in-block */ "./src/scripts/focus-in-block.ts");
/* harmony import */ var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_47854__(/*! animejs/lib/anime.es.js */ "../../node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _scripts_css_style__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_47854__(/*! ./scripts/css-style */ "./src/scripts/css-style.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var fieldSetElement = null;
var ProgressForm = /*#__PURE__*/function () {
  function ProgressForm() {
    var enableDefaultCssStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, ProgressForm);
    _defineProperty(this, "fieldsetLength", 0);
    this.enableDefaultCssStyle = enableDefaultCssStyle;
  }
  _createClass(ProgressForm, [{
    key: "setTranslateX",
    value: function setTranslateX(params, fieldSet) {
      if (!fieldSet) return;
      this.translateX = params.translateX ? params.translateX : -fieldSet.offsetWidth;
    }
  }, {
    key: "run",
    value: function run(params, styleOptions) {
      var _params$fieldsetMargi,
        _this = this;
      this.hasValidHTMLStructure(params.form);
      var fieldSets = params.form.querySelectorAll('fieldset');
      this.setTranslateX(params, fieldSets[0]);
      var progressElement = document.querySelector('[__progress__]');
      this.fieldsetMarginWidth = (_params$fieldsetMargi = params.fieldsetMargingWidth) !== null && _params$fieldsetMargi !== void 0 ? _params$fieldsetMargi : 60;
      var nextIndex = 1;
      var prevIndex = fieldSets.length;
      var prevTranslateX = 0;
      this.fieldsetLength = fieldSets.length;
      var progress = this.progress;
      if (fieldSets && fieldSets.length > 1) {
        fieldSets.forEach(function (fieldSet, i) {
          var _params$targetMarginW;
          var nextButton = fieldSet.querySelector("[__next__]");
          var prevButton = fieldSet.querySelector("[__prev__]");
          var translateX = _this.translateX - _this.fieldsetMarginWidth / _this.fieldsetLength;
          var targetMarginWidth = (_params$targetMarginW = params.targetMarginWidth) !== null && _params$targetMarginW !== void 0 ? _params$targetMarginW : 0;
          var nextTranslateX = translateX * nextIndex - targetMarginWidth;
          prevTranslateX = translateX * nextIndex + Math.abs(translateX * 2);
          var nextProgress = progress * (i + 2);
          var prevProgress = i > 1 ? progress * i : progress;
          fieldSetElement = fieldSet;
          fieldSet.classList.add("fieldset".concat(i));
          if (i === 0) {
            var fields = fieldSet.querySelectorAll("input:not([type='hidden'],[readonly]), textarea");
            fields[i].focus();
            _this.compartmentalizeFocusInFieldset(fieldSetElement);
          }
          _this.next(nextButton, nextIndex, nextTranslateX, progressElement, nextProgress);
          nextIndex++;
          if (i === 0) {
            (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements)(fieldSetElement);
          }
          _this.prev(prevButton, prevIndex, prevTranslateX, progressElement, prevProgress);
          prevIndex--;
        });
      }
      if (progressElement) {
        progressElement.style.width = "".concat(progress, "%");
      }
      if (this.enableDefaultCssStyle) {
        (0,_scripts_css_style__WEBPACK_IMPORTED_MODULE_2__.cssStyle)(params, fieldSets, this.translateX, this.fieldsetLength, this.fieldsetMarginWidth, styleOptions);
      }
    }
  }, {
    key: "next",
    value: function next(nextButton, nextIndex, nextTranslateX, progressElement, nextProgress) {
      var _this2 = this;
      var targets = this.fieldsetTargetArray;
      if (nextButton) {
        nextButton.addEventListener("click", function (e) {
          e.preventDefault();
          var fieldSet = document.querySelector(".fieldset".concat(nextIndex - 1));
          var hasValidHTMLStructure = _this2.isValidFieldset(fieldSet);
          if (hasValidHTMLStructure) {
            fieldSetElement = document.querySelector(".fieldset".concat(nextIndex));
            if (fieldSetElement) {
              _this2.compartmentalizeFocusInFieldset(fieldSetElement);
              (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements)(fieldSetElement);
            }
            (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
              targets: targets,
              translateX: nextTranslateX,
              easing: 'easeInOutExpo'
            });
            if (progressElement) {
              progressElement.style.width = "".concat(nextProgress !== null && nextProgress !== void 0 ? nextProgress : 0, "%");
            }
          }
        });
      }
    }
  }, {
    key: "prev",
    value: function prev(prevButton, prevIndex, prevTranslateX, progressElement, prevProgress) {
      var _this3 = this;
      var targets = this.fieldsetTargetArray;
      if (prevButton) {
        prevButton.addEventListener("click", function (e) {
          e.preventDefault();
          fieldSetElement = document.querySelector(".fieldset".concat(prevIndex));
          if (fieldSetElement) {
            _this3.compartmentalizeFocusInFieldset(fieldSetElement);
            (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_0__.getFocusableElements)(fieldSetElement);
          }
          (0,animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
            targets: targets,
            translateX: prevTranslateX,
            easing: 'easeInOutExpo'
          });
          if (progressElement) {
            progressElement.style.width = "".concat(prevProgress !== null && prevProgress !== void 0 ? prevProgress : 0, "%");
          }
        });
      }
    }
  }, {
    key: "progress",
    get: function get() {
      return 100 / this.fieldsetLength;
    }
  }, {
    key: "compartmentalizeFocusInFieldset",
    value: function compartmentalizeFocusInFieldset(fieldSet) {
      window.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' && fieldSet !== null) {
          (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_0__.focusInBlock)(e, fieldSet);
        }
      });
    }
  }, {
    key: "isValidFieldset",
    value: function isValidFieldset(fieldSet) {
      if (fieldSet) {
        var fields = Array.from(fieldSet.querySelectorAll('input, select, textarea'));
        if (fields) {
          for (var _i = 0, _arr = fields; _i < _arr.length; _i++) {
            var field = _arr[_i];
            if (!field.checkValidity()) {
              field.reportValidity();
              return false;
            }
          }
        }
      }
      return true;
    }
  }, {
    key: "fieldsetTargetArray",
    get: function get() {
      var fieldsetTargetArray = [];
      if (this.fieldsetLength > 0) {
        for (var i = 0; i < this.fieldsetLength; i++) {
          fieldsetTargetArray.push(".fieldset".concat(i));
        }
      }
      return fieldsetTargetArray;
    }
  }, {
    key: "hasValidHTMLStructure",
    value: function hasValidHTMLStructure(form) {
      try {
        if (!form) {
          throw new Error("The form could not be retrieved");
        }
        var fieldSetParent = form.querySelector("[fieldset__parent]");
        if (!fieldSetParent) {
          throw new Error("The element with the attribute [fieldset__parent] not found in your form");
        }
        var fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]");
        if (!fieldsetContainer) {
          throw new Error("The element with the attribute [fieldset__container] not found in your fieldset__parent");
        }
        var fieldSets = fieldsetContainer.querySelectorAll('fieldset');
        if (!fieldSets) {
          throw new Error("Aucune section de formulaire trouvée.");
        }
        var next_buttons = form.querySelectorAll("[__next__]");
        var prev_buttons = form.querySelectorAll("[__prev__]");
        if (!next_buttons) {
          throw new Error('Aucun bouton "suivant" trouvé !');
        }
        if (!prev_buttons) {
          throw new Error("Aucun bouton 'précédent' trouvé !");
        }
      } catch (error) {
        throw error;
      }
    }
  }]);
  return ProgressForm;
}();

})();

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=progress-form.js.map

/***/ }),

/***/ "./node_modules/@easylibs/utils/dist/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/@easylibs/utils/dist/utils.js ***!
  \****************************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __nested_webpack_require_474__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_474__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_474__.o(definition, key) && !__nested_webpack_require_474__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_474__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_474__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
__nested_webpack_require_474__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_474__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }
  _createClass(Utils, null, [{
    key: "setAudio",
    value:
    /**
     * Crée un élément audio avec la source audio spécifiée par le chemin audioPath.
     * @param audioPath Le chemin de la source audio.
     * @param classname La classe CSS à ajouter à l'élément audio (optionnel).
     * @returns L'élément audio créé.
     */
    function setAudio(audioPath) {
      var classname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var audio = document.createElement("audio");
      if (classname != null) {
        audio.classList.add(classname);
      }
      var source = document.createElement("source");
      source.src = audioPath;
      source.type = "audio/mpeg";
      audio.appendChild(source);
      return audio;
    }
    /**
     * Converts an HTML string into an HTML element or a collection of HTML elements.
     *
     * @param textHtml - The HTML string to convert.
     * @param targetName - The tag name of the target HTML element to create.
     * @param children - A boolean indicating whether to return all children of the target element.
     * @returns - Returns the first child of the target element if `children` is `false`, otherwise returns a collection of the element's children. Returns `null` if there are no children.
     *
     * This method creates a new HTML element of the type specified by `targetName`, sets its inner HTML to `textHtml`, and returns either the first child of this element or all its children as an HTMLCollection, depending on the value of `children`.
     * If the HTML content generates no children, the method returns `null`.
     */
  }, {
    key: "textToHTMLElement",
    value: function textToHTMLElement(textHtml) {
      var targetName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
      var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var target = document.createElement("".concat(targetName));
      target.innerHTML = textHtml;
      if (true === children) {
        return target.children;
      }
      return target.firstElementChild;
    }
    /**
     * retourne un élément du dom
     */
  }, {
    key: "$$",
    value: function $$(element) {
      if (typeof element !== "string") {
        return element;
      } else if (typeof element === "string") {
        var collection = document.querySelectorAll("".concat(element));
        var el = document.querySelector("".concat(element));
        if (collection !== null && collection.length > 1) {
          return collection;
        }
        if (el !== null) {
          return el;
        }
      }
    }
    /**
     * Cette fonction permet de convertir un objet NodeList en un tableau d'éléments HTML (HTMLElement)
     * et d'exécuter une fonction de rappel sur chaque élément du tableau.
     * @param nodeList Un objet NodeList ou un élément HTML.
     * Si c'est un NodeList, il sera converti en tableau d'éléments HTML.
     * @param callback Une fonction de rappel à exécuter sur chaque élément du tableau.
     * @returns
     */
  }, {
    key: "processNodes",
    value: function processNodes(nodeList) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (node, index) {};
      if (nodeList instanceof NodeList || Array.isArray(nodeList)) {
        return Array.from(nodeList).forEach(function (node, i) {
          callback(node, i);
        });
      }
      if (null !== nodeList && undefined !== nodeList) {
        return callback(nodeList);
      }
    }
    /**
     * Méthode qui renvoie une expression régulière en fonction du type demandé.
     * @param type Le type d'expression régulière demandé.
     * @returns L'expression régulière correspondante.
     */
  }, {
    key: "getRegexp",
    value: function getRegexp(type) {
      switch (type) {
        case "email":
          return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
        case "phone-number":
          return new RegExp(/^(0|\+[1-9][0-9]{0,2}) ?[0-9]+$/);
        case "number":
          return new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/);
        case "strong-password":
          return new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
        case "url-protocol":
          return new RegExp(/^(https?:\/\/)$/, "i");
        case "url-domain":
          return new RegExp(/^((([a-zA-Z0-9]{1,})[.-]?)+[a-zA-Z]{2,})$/, "i");
        case "url-ip":
          return new RegExp(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, "i");
        case "url-port":
          return new RegExp(/^:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{0,3})$/, "i");
        case "url-path":
          return new RegExp(/^(\.\/)?[-a-zA-Z\d%_.~+\/]*$/, "i");
        case "url-query":
          return new RegExp(/^(\?[;&a-zA-Z\d%_.~+=-]*)$/, "i");
        case "url-fragment":
          return new RegExp(/^#[-a-zA-Z\d%_.~+/=?&;:!*'()]*$/, "i");
        case "default-text":
          return new RegExp(/^[a-zA-Z -'áàâäãåçéèêëğíìîïıñóòôöõúùûüşýÿæœÁÀÂÄÃÅÇÉÈÊËĞÍÌÎÏIÑÓÒÔÖÕÚÙÛÜŞÝŸÆŒ]+$/);
        case "fr-text":
          return new RegExp(/^[A-Za-z' - àâçéèêëûæœÀÂÉÈÊËÆŒ]+$/);
        case "en-text":
          return new RegExp(/^[a-zA-Z '-]{1,40}$/);
        case "tr-text":
          return new RegExp(/^[A-Za-z çğıöüşæœÇĞIÖÜŞ]+$/);
        default:
          throw new Error("Type d'expression régulière non pris en charge.");
      }
    }
    /**
     * Crée une couche superfielle au dessus d'un élément html afin d'empecher tout évènement.
     * @param tag Le nom de la balise HTML à utiliser comme couche (par défaut : 'td', idéal pour les tableau html).
     * @param backgroundColor La couleur d'arrière-plan de la zone interdite (par défaut : '#FFFFFF').
     * @returns Un élément HTML représentant une zone interdite.
     */
  }, {
    key: "forbiddener",
    value: function forbiddener() {
      var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "td";
      var backgroundColor = arguments.length > 1 ? arguments[1] : undefined;
      var forbiddenTag = document.createElement(tag);
      forbiddenTag.setAttribute("class", "forbidden");
      var style = {
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: ".7",
        zIndex: "10",
        backgroundColor: backgroundColor ? backgroundColor : "#FFFFFF"
      };
      Object.assign(forbiddenTag.style, style);
      return forbiddenTag;
    }
    /**
     * Réduit une chaîne de texte.
     * @param text La chaîne de texte à réduire.
     * @param maxLength La longueur maximale de la chaîne résultante (par défaut : 14).
     * @returns La chaîne de texte réduite.
     */
  }, {
    key: "truncateChars",
    value: function truncateChars(text) {
      var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 14;
      text = typeof text === "string" ? text.trim() : "";
      if (text.length > maxLength) {
        return "".concat(text.substring(0, maxLength), "...");
      }
      return text;
    }
    /**
     * Changes the input text type to a number type and performs additional processing
     * based on the specified parameters.
     *
     * @param attr - The CSS selector for the input elements to be processed.
     * @param limit - (Optional) The maximum allowed value. If provided, input values exceeding this limit will be set to the limit.
     * @param priceType - (Optional) A boolean flag indicating whether the input represents a price. If true, the input is expected to be a number with an optional decimal part.
     * @param decimal - (Optional) The number of decimal places to round to. If provided, the input values will be rounded to the specified decimal places.
     */
  }, {
    key: "changeInputTextTypeToNumberType",
    value: function changeInputTextTypeToNumberType(attr, limit) {
      var priceType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var decimal = arguments.length > 3 ? arguments[3] : undefined;
      this.processNodes(this.$$(attr), function (element) {
        var input = element;
        if (input) {
          input.addEventListener("input", function () {
            var regExp = priceType ? /^[0-9]+([.,][0-9]+)?$/ : /[^\d]/g;
            if (decimal) {
              var getValue = input.value.replace(regExp, "");
              input.value = "".concat(parseFloat(getValue).toFixed(decimal));
            } else {
              input.value = input.value.replace(regExp, "");
            }
            if (limit && parseInt(input.value) > limit) {
              input.value = "".concat(limit);
            }
          });
        }
      });
    }
    /**
     * The function is used to disable specific elements (by default td tags) inside a table when a certain button is clicked.
     * It accepts several parameters: the tag to be disabled, the target element to be disabled, the trigger element (button),
     * and the background color for the forbidden tag.
     *
     * @param tag - The tag of the element to be disabled (default: "td").
     * @param target - The target element to be disabled (default: undefined).
     * @param trigger - The trigger element (button) to activate the function (default: undefined).
     * @param backgroundColor - The background color for the forbidden tag (default: undefined).
     */
  }, {
    key: "disablor",
    value: function disablor() {
      var _this = this;
      var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "td";
      var target = arguments.length > 1 ? arguments[1] : undefined;
      var trigger = arguments.length > 2 ? arguments[2] : undefined;
      var backgroundColor = arguments.length > 3 ? arguments[3] : undefined;
      var buttons = document.querySelectorAll("[disablor],[self-disablor]");
      try {
        if (!trigger && !buttons) {
          throw new Error("Aucun bouton avec l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
        }
        this.processNodes(buttons, function (button) {
          button.addEventListener("click", function () {
            var self = button.hasAttribute("self-disablor");
            var item = self ? button : button.closest("[disablor]");
            if (!target && !item) {
              throw new Error("Aucun élément à désactiver contenant l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
            }
            if (item) {
              item.style.position = "relative";
              item.insertBefore(_this.forbiddener(tag, backgroundColor), item.firstChild);
              if (item instanceof HTMLButtonElement) {
                item.setAttribute("disabled", "true");
              }
            }
          });
        });
      } catch (error) {
        console.error("Une erreur s'est produit: ", error);
      }
    }
    /**
     * Adds an asterisk indicator to labels associated with required form fields.
     * The asterisk is inserted as an SVG element, and labels are selected based on the presence
     * of the 'required-field' attribute. The function utilizes the processNodes method
     * to iterate through the matched labels and append the asterisk.
     */
  }, {
    key: "setAsteriskToRequiredField",
    value: function setAsteriskToRequiredField() {
      var _this2 = this;
      var setIcon = function setIcon(svgString) {
        var asterisk = _this2.textToHTMLElement(svgString);
        var labels = document.querySelectorAll("label[required-field]");
        asterisk.style.color = "#f89a9b";
        asterisk.style.width = "10px";
        asterisk.style.height = "10px";
        if (labels) {
          _this2.processNodes(labels, function (label) {
            var clonedAsterisk = asterisk.cloneNode(true);
            label.appendChild(clonedAsterisk);
          });
        }
      };
      var cacheIcon = sessionStorage.getItem("asterisk");
      if (cacheIcon) return setIcon(cacheIcon);
      var svgUrl = "https://raw.githubusercontent.com/Nelsallg/easylibs/1.0.0/packages/utils/dist/assets/asterisk.svg";
      fetch(svgUrl).then(function (response) {
        return response.text();
      }).then(function (svgString) {
        setIcon(svgString);
        sessionStorage.setItem("asterisk", svgString);
      })["catch"](function (error) {
        console.error("Erreur lors du chargement du fichier SVG:", error);
      });
    }

    /**
     * This method checks if the object contains a key with the given substring.
     * @param object The object to be searched.
     * @param substring The substring to search for.
     * @param getKey An optional parameter to determine the type of return value.
     *               If true, the method will return the key as a string.
     *               If false or not provided, the method will return the value corresponding to the key.
     * @returns The value or key of the first matching property if found, otherwise false.
     */
  }, {
    key: "hasKeyWithNameSubstring",
    value: function hasKeyWithNameSubstring(object, substring, getKey) {
      for (var key in object) {
        if (key.includes(substring)) {
          if (undefined === getKey || false === getKey) {
            return object[key];
          }
          if (true === getKey) {
            return key;
          }
        }
      }
      return false;
    }
    /**
     * This method searches for an object's property by its key or short key.
     * @param object The object to be searched.
     * @param keyOrShortKey The key or short key to search for.
     * @param key An optional parameter to determine the type of return value.
     *            If true, the function will return the key as a string.
     *            If false or not provided, the function will return the value corresponding to the key.
     * @returns The value or key of the first matching property if found, otherwise false.
     */
  }, {
    key: "findObjectDataByKeyName",
    value: function findObjectDataByKeyName(object, keyOrShorKey, key) {
      Object.keys(object).forEach(function (key) {
        if (key.includes(keyOrShorKey)) {
          return object[key];
        }
      });
      return false;
    }
    /**
    * Finds the first occurrence of a character in the given string up to the specified limit.
    * 
    * @param string - The string to search.
    * @param limit - The limit up to which to search for the character.
    * @param returnBool - Optional. If true, returns a boolean indicating whether the character was found. If false or not provided, returns the character found or null if not found.
    * @returns  Returns the character found, a boolean indicating whether the character was found (if `returnBool` is true), or null if the character was not found.
    */
  }, {
    key: "findChar",
    value: function findChar(string, limit) {
      var returnBool = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      for (var i = 0; i <= limit; i++) {
        var index = string.indexOf(i.toString());
        if (index !== -1) {
          return returnBool ? true : i.toString();
        }
      }
      return returnBool ? false : null;
    }
  }, {
    key: "findComputedStyle",
    value: function findComputedStyle(element, property) {
      var styles = window.getComputedStyle(element);
      var propertiesObject = {};
      try {
        if (!element) {
          throw new Error("Element not found");
        }
        if (!property) {
          throw new Error("Property is required");
        }
        if (Array.isArray(property) && property.length > 0) {
          property.forEach(function (props) {
            propertiesObject["".concat(props)] = styles.getPropertyValue("".concat(props));
          });
          return propertiesObject;
        }
        if (typeof property === "string") {
          return styles.getPropertyValue("".concat(property));
        }
      } catch (error) {
        console.error(error);
      }
    }
    /**
     * A function to escape special characters in a string using the DOM API.
     *
     * @param str - The input string to be escaped.
     * @returns - The escaped string with special characters replaced with their HTML entity equivalents.
     */
  }, {
    key: "escape",
    value: function escape(str) {
      if (!str) {
        return "";
      }
      var div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }
    /**
     * This function takes an HTMLElement and a target string.
     * It returns the first Element with a matching target that is a sibling of the referent element or any of its previous siblings.
     * If no such element is found, it returns null.
     * @param referent - The starting point of the search.
     * @param target - The CSS selector used to find the desired element.
     * @returns The first Element with a matching target, or null if no such element is found.
     */
  }, {
    key: "findHTMLElementBy",
    value: function findHTMLElementBy(referent, target) {
      var currentElement = referent;
      if (currentElement) {
        while (currentElement = currentElement.previousElementSibling) {
          var charCounterSpan = currentElement.querySelector(target);
          if (charCounterSpan) {
            return charCounterSpan;
          }
        }
      }
      return null;
    }
    /**
     * This function takes an object containing HTML attributes and returns a string representing the attributes.
     * If no attributes are provided, it returns an empty string.
     * @param attributes - An object containing HTML attributes.
     * @returns A string representing the attributes.
     */
  }, {
    key: "formatHTMLAttributes",
    value: function formatHTMLAttributes(attributes) {
      var attrs = "";
      if (attributes) {
        for (var _i = 0, _Object$entries = Object.entries(attributes); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
          if (key) {
            attrs += "".concat(key, "='").concat(value, "'");
          }
        }
      }
      return attrs.trim();
    }
  }]);
  return Utils;
}();

/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=utils.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/easylibs.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=easylibs.js.map