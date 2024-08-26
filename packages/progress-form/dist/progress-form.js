(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("progress-form", [], factory);
	else if(typeof exports === 'object')
		exports["progress-form"] = factory();
	else
		root["progress-form"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/default-progress-form.ts":
/*!**************************************!*\
  !*** ./src/default-progress-form.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressForm)
/* harmony export */ });
/* harmony import */ var _scripts_css_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/css-style */ "./src/scripts/css-style.ts");
/* harmony import */ var _scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/focus-in-block */ "./src/scripts/focus-in-block.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * ProgressForm represents a class for managing a progressive form.
 */
var ProgressForm = /*#__PURE__*/function () {
  /**
   * @param enableDefaultCssStyle Determines whether the default CSS style should be enabled. Default is true.
   */
  function ProgressForm(form) {
    var enableDefaultCssStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    _classCallCheck(this, ProgressForm);
    _defineProperty(this, "fieldsetLength", 0);
    _defineProperty(this, "progressingData", {});
    _defineProperty(this, "fieldSetElement", null);
    this.form = form;
    this.enableDefaultCssStyle = enableDefaultCssStyle;
  }
  /**
   * Retrieves and initializes all data and variables for running
   * @param progressOptions The parameters of the form.
   * @returns 
   */
  return _createClass(ProgressForm, [{
    key: "init",
    value: function init(progressOptions) {
      var _progressOptions$fiel;
      this.progressOptions = progressOptions;
      this.animation = progressOptions === null || progressOptions === void 0 ? void 0 : progressOptions.animation;
      this.hasValidHTMLStructure(this.form);
      var fieldSets = this.form.querySelectorAll('fieldset');
      this.setTranslateX(fieldSets[0], progressOptions);
      var progressElement = document.querySelector('[__progress__]');
      this.fieldsetMarginWidth = (_progressOptions$fiel = progressOptions === null || progressOptions === void 0 ? void 0 : progressOptions.fieldsetMargingWidth) !== null && _progressOptions$fiel !== void 0 ? _progressOptions$fiel : 60;
      var nextIndex = 1;
      var prevIndex = this.isLazyProgress ? this.lazyFieldsetLength : fieldSets.length;
      var prevTranslateX = 0;
      this.fieldsetLength = this.lastIndex = this.isLazyProgress ? this.lazyFieldsetLength : fieldSets.length;
      var PROGRESS = this.PROGRESS;
      return {
        fieldSets: fieldSets,
        nextIndex: nextIndex,
        prevTranslateX: prevTranslateX,
        PROGRESS: PROGRESS,
        prevIndex: prevIndex,
        progressElement: progressElement
      };
    }
    /**
     * Executes the progressive form.
     * @param params The parameters of the form.
     * @param styleOptions Style options for the form, fieldsets and fieldsets parent elements.
    */
  }, {
    key: "run",
    value: function run(progressOptions, styleOptions) {
      var _this = this;
      var preventProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$init = this.init(progressOptions),
        fieldSets = _this$init.fieldSets,
        nextIndex = _this$init.nextIndex,
        prevTranslateX = _this$init.prevTranslateX,
        PROGRESS = _this$init.PROGRESS,
        prevIndex = _this$init.prevIndex,
        progressElement = _this$init.progressElement;
      if (fieldSets && !this.isLazyProgress && fieldSets.length > 1) {
        var _progressOptions$targ;
        var translateX = this.translateX - this.fieldsetMarginWidth / this.fieldsetLength;
        var targetMarginWidth = (_progressOptions$targ = progressOptions === null || progressOptions === void 0 ? void 0 : progressOptions.targetMarginWidth) !== null && _progressOptions$targ !== void 0 ? _progressOptions$targ : 0;
        fieldSets.forEach(function (fieldSet, i) {
          var nextButton = fieldSet.querySelector("[__next__]");
          var prevButton = fieldSet.querySelector("[__prev__]");
          var nextTranslateX = translateX * nextIndex - targetMarginWidth;
          prevTranslateX = translateX * nextIndex + Math.abs(translateX * 2);
          var nextProgress = PROGRESS * (i + 2);
          var prevProgress = i > 1 ? PROGRESS * i : PROGRESS;
          _this.fieldSetElement = fieldSet;
          fieldSet.classList.add("fieldset".concat(i));
          if (i === 0) {
            var fields = fieldSet.querySelectorAll("input:not([type='hidden'],[readonly]), textarea");
            if (fields && fields.length > 0) fields[i].focus();
            _this.compartmentalizeFocusInFieldset(_this.fieldSetElement);
          }
          _this.progressingData["fieldset".concat(i)] = {
            '@i': i,
            '@translateX': i === 0 ? 0 : i === 1 ? translateX : nextTranslateX - translateX,
            '@progress': PROGRESS * (i + 1),
            '@target': _this.fieldSetElement,
            next: {
              i: nextIndex,
              button: nextButton,
              translateX: nextTranslateX,
              progress: nextProgress
            },
            prev: {
              i: i - 1,
              button: prevButton,
              translateX: prevTranslateX,
              progress: prevProgress
            }
          };
          if (preventProgress === false || preventProgress === "prev") _this.next(nextIndex, nextTranslateX, nextButton, progressElement, nextProgress);
          nextIndex++;
          _this.formatProgressingData(i);
          if (i === 0) {
            (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_1__.getFocusableElements)(_this.fieldSetElement);
          }
          if (preventProgress === false || preventProgress === "next") _this.prev(prevIndex, prevTranslateX, prevButton, progressElement, prevProgress);
          prevIndex--;
        });
      }
      if (progressElement) {
        progressElement.style.width = "".concat(PROGRESS, "%");
      }
      if (this.enableDefaultCssStyle) {
        this.renderedStyle = (0,_scripts_css_style__WEBPACK_IMPORTED_MODULE_0__.cssStyle)(this.form, fieldSets, this.translateX, this.fieldsetLength, this.fieldsetMarginWidth, styleOptions);
      }
    }
    /**
     * Handles the "next" button click event.
     * @param nextIndex The index of the next fieldset.
     * @param nextTranslateX The translateX value for the next fieldset.
     * @param nextButton The "next" button element.
     * @param progressElement The progress element.
     * @param nextProgress The progress for the next fieldset.
     */
  }, {
    key: "next",
    value: function next(nextIndex, nextTranslateX, nextButton, progressElement, nextProgress) {
      var _this2 = this;
      var targets = this.fieldsetTargetArray;
      var handleNext = function handleNext() {
        var fieldSet = _this2.form.querySelector(".fieldset".concat(nextIndex - 1));
        var isValidFieldset = _this2.isValidFieldset(fieldSet);
        if (_this2.progressOptions && _this2.progressOptions.onPreNext) _this2.progressOptions.onPreNext(isValidFieldset);
        if (isValidFieldset) {
          _this2.fieldSetElement = document.querySelector(".fieldset".concat(nextIndex));
          if (_this2.fieldSetElement) {
            _this2.compartmentalizeFocusInFieldset(_this2.fieldSetElement);
            (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_1__.getFocusableElements)(_this2.fieldSetElement);
          }
          (0,_scripts_css_style__WEBPACK_IMPORTED_MODULE_0__.anime)({
            isAnimate: _this2.animation,
            targets: targets,
            translateX: nextTranslateX,
            form: _this2.form
          });
          if (progressElement) {
            progressElement.style.width = "".concat(nextProgress !== null && nextProgress !== void 0 ? nextProgress : 0, "%");
          }
          if (_this2.progressOptions && _this2.progressOptions.onPostNext) _this2.progressOptions.onPostNext();
        }
      };
      try {
        if (nextButton) {
          nextButton.addEventListener("click", function (e) {
            e.preventDefault();
            handleNext();
          });
        } else {
          if (this.isLazyProgress) {
            handleNext();
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    /**
     * Handles the "previous" button click event.
     * @param prevIndex The index of the previous fieldset.
     * @param prevTranslateX The translateX value for the previous fieldset.
     * @param prevButton The "previous" button element.
     * @param progressElement The progress element.
     * @param prevProgress The progress for the previous fieldset.
    */
  }, {
    key: "prev",
    value: function prev(prevIndex, prevTranslateX, prevButton, progressElement, prevProgress) {
      var _this3 = this;
      var targets = this.fieldsetTargetArray;
      var handlePrev = function handlePrev() {
        _this3.fieldSetElement = _this3.form.querySelector(".fieldset".concat(prevIndex));
        if (_this3.fieldSetElement) {
          _this3.compartmentalizeFocusInFieldset(_this3.fieldSetElement);
          (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_1__.getFocusableElements)(_this3.fieldSetElement);
        }
        (0,_scripts_css_style__WEBPACK_IMPORTED_MODULE_0__.anime)({
          isAnimate: _this3.animation,
          targets: targets,
          translateX: prevTranslateX,
          form: _this3.form
        });
        if (progressElement) {
          progressElement.style.width = "".concat(prevProgress !== null && prevProgress !== void 0 ? prevProgress : 0, "%");
        }
      };
      try {
        if (prevButton) {
          prevButton.addEventListener("click", function (e) {
            e.preventDefault();
            handlePrev();
          });
        } else {
          if (this.isLazyProgress) {
            handlePrev();
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    /**
     * Calculates the progress percentage of the form.
     * @returns The progress percentage.
    */
  }, {
    key: "PROGRESS",
    get: function get() {
      return 100 / this.fieldsetLength;
    }
    /**
     * Retrieve progress data for each fieldset
     */
  }, {
    key: "PROGRESSING_DATA",
    get: function get() {
      return this.progressingData;
    }
  }, {
    key: "RENDERED_STYLE",
    get: function get() {
      return this.renderedStyle;
    }
  }, {
    key: "formatProgressingData",
    value: function formatProgressingData(i) {
      if (this.progressingData && Object.entries(this.progressingData).length > 0) {
        if (i === 0) delete this.progressingData["fieldset".concat(i)].prev;
        if (i === this.lastIndex - 1) delete this.progressingData["fieldset".concat(i)].next;
      }
    }
    /**
     * Compartmentalizes focus within a fieldset.
     * @param fieldSet The fieldset to compartmentalize focus within.
    */
  }, {
    key: "compartmentalizeFocusInFieldset",
    value: function compartmentalizeFocusInFieldset(fieldSet) {
      window.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' && fieldSet !== null) {
          (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_1__.focusInBlock)(e, fieldSet);
        }
      });
    }
    /**
     * Checks if a fieldset is valid.
     * @param fieldSet The fieldset to validate.
     * @returns true if the fieldset is valid, otherwise false.
    */
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
    /**
     * Generates an array of target selectors for fieldsets.
     * @returns An array of target selectors.
     */
  }, {
    key: "fieldsetTargetArray",
    get: function get() {
      var fieldsetTargetArray = [];
      var length = this.lazyFieldsetLength ? this.lazyFieldsetLength : this.fieldsetLength;
      if (length > 0) {
        for (var i = 0; i < length; i++) {
          fieldsetTargetArray.push(".fieldset".concat(i));
        }
      }
      return fieldsetTargetArray;
    }
    /**
     * Checks if the HTML structure of the form is valid.
     * @param form The form to validate.
     * @throws Error if the HTML structure is not valid.
     */
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
          throw new Error('No "next" button found!');
        }
        if (!prev_buttons) {
          throw new Error("No 'previous' button found!");
        }
      } catch (error) {
        throw error;
      }
    }
    /**
     * Defines the movement of each fieldset.
     * @param params The parameters for setting translateX.
     * @param fieldSet The fieldset element.
    */
  }, {
    key: "setTranslateX",
    value: function setTranslateX(fieldSet, progressOptions) {
      if (!fieldSet) return;
      this.translateX = progressOptions && progressOptions.translateX ? progressOptions.translateX : -fieldSet.offsetWidth;
    }
  }]);
}();


/***/ }),

/***/ "./src/lazy-progress-form.ts":
/*!***********************************!*\
  !*** ./src/lazy-progress-form.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LazyProgressForm)
/* harmony export */ });
/* harmony import */ var _easylibs_fetch_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @easylibs/fetch-request */ "../fetch-request/dist/fetch-request.js");
/* harmony import */ var _easylibs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js");
/* harmony import */ var _default_progress_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-progress-form */ "./src/default-progress-form.ts");
/* harmony import */ var _scripts_css_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/css-style */ "./src/scripts/css-style.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





/**
 * LazyProgressForm est une classe qui étend ProgressForm pour gérer des formulaires à étapes
 * avec une progression paresseuse (lazy loading) des fieldsets.
 */
var LazyProgressForm = /*#__PURE__*/function (_ProgressForm) {
  /**
   * Constructeur de la classe LazyProgressForm.
   * @param {HTMLFormElement} form - L'élément de formulaire HTML.
   * @param {string} url - L'URL à laquelle les données du formulaire sont envoyées.
   * @param {string} [parentTarget] - Sélecteur pour le conteneur parent des fieldsets.
   */
  function LazyProgressForm(form, url, parentTarget) {
    var _this;
    _classCallCheck(this, LazyProgressForm);
    _this = _callSuper(this, LazyProgressForm, [form]);
    _defineProperty(_this, "isLazyRunCalled", false);
    _this.form = form;
    _this.url = url;
    _this.parentTarget = parentTarget;
    return _this;
  }

  /**
   * Initialise la progression paresseuse des fieldsets.
   * @param {number} fieldsetLength - Le nombre de fieldsets à charger.
   * @param {ProgressFormType} [progressOptions] - Options pour la progression du formulaire.
   * @param {StyleOptions} [styleOptions] - Options de style pour le formulaire.
   * @returns {LazyProgressForm} - Retourne l'instance de LazyProgressForm.
   */
  _inherits(LazyProgressForm, _ProgressForm);
  return _createClass(LazyProgressForm, [{
    key: "lazyRun",
    value: function lazyRun(fieldsetLength, progressOptions, styleOptions) {
      var _progressOptions$targ;
      this.isLazyRunCalled = true;
      this.isLazyProgress = true;
      this.lazyFieldsetLength = fieldsetLength;
      var _this$init = this.init(progressOptions),
        fieldSets = _this$init.fieldSets,
        nextIndex = _this$init.nextIndex,
        prevTranslateX = _this$init.prevTranslateX,
        PROGRESS = _this$init.PROGRESS,
        progressElement = _this$init.progressElement;
      var translateX = this.translateX - this.fieldsetMarginWidth / this.fieldsetLength;
      var targetMarginWidth = progressOptions ? (_progressOptions$targ = progressOptions.targetMarginWidth) !== null && _progressOptions$targ !== void 0 ? _progressOptions$targ : 0 : 0;
      for (var i = 0; i < this.lazyFieldsetLength; i++) {
        var fieldSet = i === 0 ? document.querySelector("fieldset") : null;
        var nextButton = fieldSet === null || fieldSet === void 0 ? void 0 : fieldSet.querySelector("[__next__]");
        var nextTranslateX = translateX * nextIndex - targetMarginWidth;
        prevTranslateX = translateX * nextIndex + Math.abs(translateX * 2);
        var nextProgress = PROGRESS * (i + 2);
        var prevProgress = i > 1 ? PROGRESS * i : PROGRESS;
        this.fieldSetElement = fieldSet;
        if (fieldSet) {
          fieldSet.classList.add("fieldset0");
          fieldSet.focus();
          this.compartmentalizeFocusInFieldset(fieldSet);
          nextButton.setAttribute("data-next-index", "1");
        }
        this.progressingData["fieldset".concat(i)] = {
          "@i": i,
          "@translateX": i === 0 ? 0 : i === 1 ? translateX : nextTranslateX - translateX,
          "@progress": PROGRESS * (i + 1),
          "@target": this.fieldSetElement,
          next: {
            i: nextIndex,
            button: nextButton,
            translateX: nextTranslateX,
            progress: nextProgress
          },
          prev: {
            i: i - 1,
            button: null,
            translateX: prevTranslateX,
            progress: prevProgress
          }
        };
        nextIndex++;
        this.formatProgressingData(i);
      }
      if (progressElement) {
        progressElement.style.width = "".concat(PROGRESS, "%");
      }
      if (this.enableDefaultCssStyle) {
        this.renderedStyle = (0,_scripts_css_style__WEBPACK_IMPORTED_MODULE_3__.cssStyle)(this.form, fieldSets, this.translateX, this.fieldsetLength, this.fieldsetMarginWidth, styleOptions);
      }
      return this;
    }

    /**
     * Gère la récupération et l'affichage du prochain fieldset.
     * @param {FieldSetGetterData} data - Les données nécessaires pour récupérer le prochain fieldset.
     */
  }, {
    key: "fetchNextFieldSet",
    value: function fetchNextFieldSet(data) {
      var _this2 = this;
      if (!this.isLazyRunCalled) {
        throw new Error("You must call LazyProgressForm.lazyRun() before.");
      }
      var callback = data.callback,
        spinner = data.spinner,
        template = data.template,
        shouldFetch = data.shouldFetch;
      template = template ? template : this.form.querySelector("fieldset");
      var nextButton = template.querySelector("[__next__]");
      if (nextButton) {
        nextButton.addEventListener("click", function (e) {
          var _this2$form;
          e.preventDefault();
          var nextButtonInner = nextButton.innerHTML;
          var i = nextButton.dataset.nextIndex;
          var existingFieldset = (_this2$form = _this2.form) === null || _this2$form === void 0 ? void 0 : _this2$form.querySelector(".fieldset".concat(i));
          if (existingFieldset) {
            if (shouldFetch) {
              var _this2$form2;
              var previousFieldset = (_this2$form2 = _this2.form) === null || _this2$form2 === void 0 ? void 0 : _this2$form2.querySelector(".fieldset".concat(parseInt(i) - 1));
              if (previousFieldset) {
                new _easylibs_fetch_request__WEBPACK_IMPORTED_MODULE_0__["default"]({
                  uri: _this2.url,
                  data: _this2.getFormData(previousFieldset, _this2.form, i),
                  options: {
                    method: "POST",
                    responseDataType: "json"
                  },
                  callbacks: {
                    onPreFetch: function onPreFetch() {
                      if (spinner) {
                        nextButton.innerHTML = "";
                        if (typeof spinner === "string") {
                          nextButton.innerHTML = spinner;
                        } else {
                          nextButton.appendChild(spinner);
                        }
                      }
                      nextButton.setAttribute("disabled", "disabled");
                    },
                    onPostFetch: function onPostFetch(response, status) {
                      nextButton.innerHTML = nextButtonInner;
                      nextButton.removeAttribute("disabled");
                    },
                    onSuccess: function () {
                      var _onSuccess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) switch (_context.prev = _context.next) {
                            case 0:
                              _this2._next(parseInt(i));
                            case 1:
                            case "end":
                              return _context.stop();
                          }
                        }, _callee);
                      }));
                      function onSuccess(_x) {
                        return _onSuccess.apply(this, arguments);
                      }
                      return onSuccess;
                    }()
                  }
                });
              }
            } else {
              _this2._next(parseInt(i));
            }
            return;
          }
          new _easylibs_fetch_request__WEBPACK_IMPORTED_MODULE_0__["default"]({
            uri: _this2.url,
            data: _this2.getFormData(template, _this2.form, i),
            options: {
              method: "POST",
              responseDataType: "json"
            },
            callbacks: {
              onPreFetch: function onPreFetch() {
                if (spinner) {
                  nextButton.innerHTML = "";
                  if (typeof spinner === "string") {
                    nextButton.innerHTML = spinner;
                  } else {
                    nextButton.appendChild(spinner);
                  }
                }
                nextButton.setAttribute("disabled", "disabled");
              },
              onPostFetch: function onPostFetch(response, status) {
                nextButton.innerHTML = nextButtonInner;
                nextButton.removeAttribute("disabled");
              },
              onSuccess: function () {
                var _onSuccess2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(response) {
                  var elements, nextButton;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        elements = _this2.greftEvents(response, parseInt(i));
                        nextButton = elements.nextButton;
                        _this2.fetchNextFieldSet({
                          template: elements.fieldset,
                          nextButton: nextButton,
                          shouldFetch: data.shouldFetch
                        });
                        if (!nextButton) {
                          // On soumet le formulaire car on est à la fin de la progression
                          callback(elements.submitButton, elements.fieldset);
                        } else {
                          nextButton.setAttribute("data-next-index", String(parseInt(i) + 1));
                        }
                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                function onSuccess(_x2) {
                  return _onSuccess2.apply(this, arguments);
                }
                return onSuccess;
              }()
            }
          });
        });
      }
    }

    /**
     * Récupère les données du formulaire pour le fieldset donné.
     * @param {HTMLFieldSetElement} template - Le fieldset à partir duquel extraire les données.
     * @param {HTMLFormElement} [form] - L'élément de formulaire HTML (facultatif).
     * @param {string} [i] - L'indice du fieldset (facultatif).
     * @returns {FormData} - Les données du formulaire sous forme de FormData.
     */
  }, {
    key: "getFormData",
    value: function getFormData(template, form, i) {
      var formData = null;
      if (null === formData) {
        formData = new FormData();
        var fields = template.querySelectorAll("input,select,textarea");
        fields.forEach(function (field) {
          if (i) formData.set("nextIndex", i);
          formData.set(field.name, field.value);
        });
      }
      return formData;
    }

    /**
     * Insère le fieldset reçu dans le DOM et gère les événements.
     * @param {any} response - La réponse du serveur contenant le template du fieldset.
     * @param {number} i - L'indice du fieldset actuel.
     * @returns {Record<string,any>} - Contient les éléments du fieldset, les boutons prev/next et le bouton submit.
     */
  }, {
    key: "greftEvents",
    value: function greftEvents(response, i) {
      var fieldsetContainer = document.querySelector("".concat(this.parentTarget ? this.parentTarget + " " : "", "[fieldset__container]"));
      var fieldset = _easylibs_utils__WEBPACK_IMPORTED_MODULE_1__["default"].textToHTMLElement(response.template);
      var prevButton = fieldset.querySelector("[__prev__]");
      var nextButton = fieldset.querySelector("[__next__]");
      var submitButton = fieldset.querySelector("[__submit__]");
      Object.assign(fieldset.style, this.RENDERED_STYLE.fieldsetStyle);
      fieldsetContainer.appendChild(fieldset);
      this._prev(i, prevButton);
      this._next(i);
      return {
        nextButton: nextButton,
        prevButton: prevButton,
        fieldset: fieldset,
        submitButton: submitButton
      };
    }

    /**
     * Déplace la progression vers le fieldset suivant.
     * @param {number} i - L'indice du fieldset actuel.
     */
  }, {
    key: "_next",
    value: function _next(i) {
      var nextProgressingData = this.getProgressingData(i, "next");
      this.next(nextProgressingData.index, nextProgressingData.translate);
    }

    /**
     * Déplace la progression vers le fieldset précédent.
     * @param {number} i - L'indice du fieldset actuel.
     * @param {HTMLElement} [prevButton] - Le bouton "prev" (facultatif).
     */
  }, {
    key: "_prev",
    value: function _prev(i, prevButton) {
      var prevProgressingData = this.getProgressingData(i, "prev");
      this.prev(prevProgressingData.index, prevProgressingData.translate, prevButton);
    }

    /**
     * Récupère les données de progression pour le fieldset actuel.
     * @param {number} i - L'indice du fieldset actuel.
     * @param {string} type - Le type de progression ("next" ou "prev").
     * @returns {Record<string,any>} - Les données de progression pour le fieldset.
     */
  }, {
    key: "getProgressingData",
    value: function getProgressingData(i, type) {
      var PROGRESSING_DATA = this.PROGRESSING_DATA;
      var data = {
        next: {
          index: PROGRESSING_DATA["fieldset".concat(i)]["@i"],
          translate: PROGRESSING_DATA["fieldset".concat(i)]["@translateX"]
        },
        prev: {
          index: PROGRESSING_DATA["fieldset".concat(i)].prev.i,
          translate: PROGRESSING_DATA["fieldset".concat(i)].prev.translateX
        }
      };
      return data["".concat(type)];
    }
  }]);
}(_default_progress_form__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/scripts/css-style.ts":
/*!**********************************!*\
  !*** ./src/scripts/css-style.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   anime: () => (/* binding */ anime),
/* harmony export */   cssStyle: () => (/* binding */ cssStyle)
/* harmony export */ });
function cssStyle(form, fieldSets, translateX, fieldsetLength, fieldsetMarginWidth, styleOptions) {
  try {
    var fieldSetParent = form.querySelector("[fieldset__parent]");
    var fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]");
    var fieldsetWidth = Math.abs(translateX);
    var fieldsetContainerWidth = fieldsetLength * fieldsetWidth + fieldsetMarginWidth;
    var defaultFieldSetParentStyle = {
      height: "100%",
      overflow: "hidden",
      width: "".concat(fieldsetWidth, "px")
    };
    var defaultFormStyle = {
      width: "".concat(fieldsetWidth, "px"),
      height: "100%",
      boxSizing: "border-box"
    };
    var defaultFieldsetContainerStyle = {
      width: "".concat(fieldsetContainerWidth, "px"),
      height: "100%",
      overflow: "hidden",
      display: "flex",
      justifyContent: "space-between"
    };
    var defaultFieldsetStyle = {
      width: "".concat(fieldsetWidth, "px"),
      transition: "margin-left 0.4s ease-in-out",
      backgroundColor: "#FFFFFF",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
      padding: "30px",
      border: "none",
      boxShadow: "0 0 5px rgba(255, 255, 255, 0.7137254902)",
      borderRadius: "3px"
    };

    // Fusionnez les styles par défaut avec les styles personnalisés
    var formStyle = Object.assign({}, defaultFormStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.form);
    var fieldSetParentStyle = Object.assign({}, defaultFieldSetParentStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetParent);
    var fieldsetContainerStyle = Object.assign({}, defaultFieldsetContainerStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetContainer);
    var fieldsetStyle = Object.assign({}, defaultFieldsetStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldset);
    Object.assign(form.style, formStyle);
    Object.assign(fieldSetParent.style, fieldSetParentStyle);
    Object.assign(fieldsetContainer.style, fieldsetContainerStyle);
    fieldSets.forEach(function (fieldSet, index) {
      Object.assign(fieldSet.style, fieldsetStyle);
      fieldSet.classList.add("fieldset".concat(index));
    });
    return {
      fieldSetParentStyle: fieldSetParentStyle,
      fieldsetContainerStyle: fieldsetContainerStyle,
      formStyle: formStyle,
      fieldsetStyle: fieldsetStyle
    };
  } catch (error) {
    console.error(error);
  }
}
var lastTranslateXMap = new Map();
function anime(options) {
  options.targets.forEach(function (target) {
    var element = typeof target === 'string' ? options.form.querySelector(target) : target;
    if (element) {
      var lastTranslateX = lastTranslateXMap.get(element) || 0;
      var translateX = options.translateX;
      var keyframes = [{
        transform: "translateX(".concat(lastTranslateX, "px)")
      }, {
        transform: "translateX(".concat(translateX, "px)")
      }];
      var _animateOptions = {
        duration: 1000,
        fill: 'forwards',
        // L'animation reste appliquée à la fin
        easing: 'cubic-bezier(1, 0, 0, 1)' // Approximation de l'effet d'assouplissement easeInOutExpo
      };
      var _unanimateOptions = {
        fill: 'forwards'
      };
      if (element.animate) {
        if (options.isAnimate != false) element.animate(keyframes, _animateOptions);else {
          element.animate(keyframes, _unanimateOptions);
        }
        lastTranslateXMap.set(element, translateX);
      }
    }
  });
}

/***/ }),

/***/ "./src/scripts/focus-in-block.ts":
/*!***************************************!*\
  !*** ./src/scripts/focus-in-block.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

/***/ }),

/***/ "../fetch-request/dist/fetch-request.js":
/*!**********************************************!*\
  !*** ../fetch-request/dist/fetch-request.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/**
 * FetchRequest class designed to simplify the process of making HTTP requests within web applications.
 * It encapsulates functionality for sending requests and handling callbacks before and after the request.
 */
var FetchRequest = /*#__PURE__*/function () {
  /**
   * @param options Configuration for the fetch request.
   */
  function FetchRequest(options) {
    var _this = this;
    _classCallCheck(this, FetchRequest);
    this.options = options;
    this.count = 0;
    /**
     * Asynchronous method that handles the form submission process.
     * It optionally executes pre-fetch and post-fetch callbacks and makes the HTTP request.
     */
    this.submitForm = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
            _this.handleError(_context.t0, _this.status, 'Error executing query : ');
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 11]]);
    }));
    /**
     * Asynchronous method that performs the HTTP request using the Fetch API.
     * It constructs the request based on the provided options and handles the response.
     */
    this.run = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, _this$options, uri, data, _options, finalUri, method, fetchOptions;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            response = null;
            _context2.prev = 1;
            _this$options = _this.options, uri = _this$options.uri, data = _this$options.data, _options = _this$options.options;
            if (uri) {
              _context2.next = 5;
              break;
            }
            throw new Error("URI is required");
          case 5:
            _this.uri = uri;
            _this.data = data;
            finalUri = uri;
            method = (_options === null || _options === void 0 ? void 0 : _options.method) || 'GET';
            if (method === "GET" && data) {
              finalUri = _this.buildGetRequestUrl(uri, data);
            } else if (!["GET", "HEAD", "OPTIONS"].includes(method) && data) {
              _this.body = _this.prepareRequestBody(data);
            }
            fetchOptions = {
              method: method,
              headers: _options === null || _options === void 0 ? void 0 : _options.headers,
              body: _this.body,
              credentials: _options === null || _options === void 0 ? void 0 : _options.credentials,
              mode: _options === null || _options === void 0 ? void 0 : _options.mode,
              cache: _options === null || _options === void 0 ? void 0 : _options.cache,
              integrity: _options === null || _options === void 0 ? void 0 : _options.integrity
            };
            if (["GET", "HEAD", "OPTIONS"].includes(method)) {
              delete fetchOptions.body;
            }
            _context2.next = 14;
            return _this.lazyFatching(finalUri, fetchOptions);
          case 14:
            _context2.next = 19;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](1);
            _this.handleError(_context2.t0, response ? response.status : 0);
          case 19:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[1, 16]]);
    }));
    /**
     * Executes the pre-fetch callback, allowing for data modification before the request is sent.
     */
    this.preFetch = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var data;
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
            data = _context3.sent;
            if (data) {
              _this.options.data = data.hasOwnProperty('data') ? data.data : data;
            }
          case 5:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    /**
     * Executes the post-fetch callback, allowing for actions to be taken after the request has been processed.
     * @param response The response from the fetch request.
     * @param status The HTTP status code of the response.
     */
    this.postFetch = /*#__PURE__*/function () {
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
    }();
    this.attachSubmitterEvent();
  }
  /**
   * Attaches a click event listener to the submitter element that triggers the form submission.
   * If no submitter is provided, the form submission is triggered immediately.
   */
  return _createClass(FetchRequest, [{
    key: "attachSubmitterEvent",
    value: function attachSubmitterEvent() {
      this.options.submitter ? this.options.submitter.addEventListener('click', this.submitForm) : this.submitForm();
    }
  }, {
    key: "lazyFatching",
    value: function () {
      var _lazyFatching = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(uri, fetchOptions) {
        var _this2 = this;
        var options, timeOut, _response, response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (!this.options) {
                _context6.next = 14;
                break;
              }
              options = this.options.options;
              if (!(options && options.timeOut)) {
                _context6.next = 9;
                break;
              }
              timeOut = options.timeOut;
              _context6.next = 6;
              return fetch(uri, fetchOptions);
            case 6:
              _response = _context6.sent;
              setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                  while (1) switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return _this2.handleResult(_response, options);
                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }, _callee5);
              })), timeOut);
              return _context6.abrupt("return");
            case 9:
              _context6.next = 11;
              return fetch(uri, fetchOptions);
            case 11:
              response = _context6.sent;
              _context6.next = 14;
              return this.handleResult(response, options);
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function lazyFatching(_x3, _x4) {
        return _lazyFatching.apply(this, arguments);
      }
      return lazyFatching;
    }()
  }, {
    key: "handleResult",
    value: function () {
      var _handleResult = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(response, options) {
        var _this$options$callbac, _this$options$callbac2;
        var EXCLUDE_STATUS, responseDataType;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              this.status = response.status;
              EXCLUDE_STATUS = [204];
              if (!options) {
                _context7.next = 32;
                break;
              }
              responseDataType = options.responseDataType;
              if (!responseDataType) {
                _context7.next = 32;
                break;
              }
              if (this.status in EXCLUDE_STATUS) {
                _context7.next = 32;
                break;
              }
              _context7.prev = 6;
              if (!(responseDataType === "text")) {
                _context7.next = 13;
                break;
              }
              _context7.next = 10;
              return response.text();
            case 10:
              _context7.t0 = _context7.sent;
              _context7.next = 16;
              break;
            case 13:
              _context7.next = 15;
              return response.json();
            case 15:
              _context7.t0 = _context7.sent;
            case 16:
              this.response = _context7.t0;
              _context7.next = 32;
              break;
            case 19:
              _context7.prev = 19;
              _context7.t1 = _context7["catch"](6);
              _context7.prev = 21;
              _context7.next = 24;
              return response.json();
            case 24:
              this.response = _context7.sent;
              _context7.next = 32;
              break;
            case 27:
              _context7.prev = 27;
              _context7.t2 = _context7["catch"](21);
              _context7.next = 31;
              return response.text();
            case 31:
              this.response = _context7.sent;
            case 32:
              if ((_this$options$callbac = this.options.callbacks) !== null && _this$options$callbac !== void 0 && _this$options$callbac.onSuccess && response.ok) {
                this.options.callbacks.onSuccess(this.response);
              } else if ((_this$options$callbac2 = this.options.callbacks) !== null && _this$options$callbac2 !== void 0 && _this$options$callbac2.onError && !(this.status in EXCLUDE_STATUS) && !response.ok) {
                this.options.callbacks.onError(new Error(typeof this.response === "string" ? this.response : "Fetch Request Error"), response.status);
              }
            case 33:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[6, 19], [21, 27]]);
      }));
      function handleResult(_x5, _x6) {
        return _handleResult.apply(this, arguments);
      }
      return handleResult;
    }()
    /**
     * Repeats the execution of the current query
     * @experimental This method is experimental. Its API may change without notice
     * @param  data
     */
  }, {
    key: "recursion",
    value: (function () {
      var _recursion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (!this.options.iteration) {
                _context8.next = 6;
                break;
              }
              if (!(this.count < this.options.iteration)) {
                _context8.next = 6;
                break;
              }
              if (data) this.options.data = Object.assign(this.data, data);
              _context8.next = 5;
              return this.run();
            case 5:
              this.count++;
            case 6:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function recursion(_x7) {
        return _recursion.apply(this, arguments);
      }
      return recursion;
    }()
    /**
     * Constructs the URL for a GET request by appending query parameters.
     * @param uri The base URI for the request.
     * @param data The data to be sent as query parameters.
     * @returns The final URI with query parameters.
     */
    )
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
      } else if (_typeof(data) === 'object' && !Array.isArray(data)) {
        for (var _i = 0, _Object$entries = Object.entries(data); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            _key = _Object$entries$_i[0],
            _value = _Object$entries$_i[1];
          params.append(_key, _value);
        }
      } else if (Array.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          params.append("".concat(i), "".concat(data[i]));
        }
      } else {
        params.append("data", "".concat(data));
      }
      url.search = params.toString();
      return url.toString();
    }
    /**
     * Prepares the request body based on the specified data type.
     * @param data The data to be sent in the request body.
     * @returns The prepared request body.
     */
  }, {
    key: "prepareRequestBody",
    value: function prepareRequestBody(data) {
      var _this$options$options, _this$options$options2;
      if (((_this$options$options = this.options.options) === null || _this$options$options === void 0 ? void 0 : _this$options$options.requestDataConvert) === "form-data") {
        if (data instanceof FormData) return data;
        if (Array.isArray(data)) return this.convertArrayToFormData(data);
        if (typeof data === "number" || typeof data === "string" || typeof data === "boolean") return this.convertPrimaryDataToFormData(data);
        return this.convertObjectToFormData(data);
      } else if (((_this$options$options2 = this.options.options) === null || _this$options$options2 === void 0 ? void 0 : _this$options$options2.requestDataConvert) === "record") {
        if (Array.isArray(data)) return this.convertArrayToRecord(data);
        if (typeof data === "number" || typeof data === "string" || typeof data === "boolean") return this.convertPrimaryDataToRecord(data);
        return JSON.stringify(data);
      }
      return this.stringify(data);
    }
  }, {
    key: "stringify",
    value: function stringify(data) {
      for (var key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          if (_typeof(data[key]) === "object") {
            data[key] = JSON.stringify(data[key]);
          }
        }
      }
      return data;
    }
  }, {
    key: "convertArrayToFormData",
    value: function convertArrayToFormData(data) {
      var formData = new FormData();
      for (var i = 0; i < data.length; i++) {
        if (Array.isArray(data[i]) || _typeof(data[i]) === "object") formData.set("".concat(i), JSON.stringify(data[i]));else {
          formData.set("".concat(i), "".concat(data[i]));
        }
      }
      return formData;
    }
  }, {
    key: "convertArrayToRecord",
    value: function convertArrayToRecord(data) {
      var record = {};
      for (var i = 0; i < data.length; i++) {
        record[i] = data[i];
      }
      return JSON.stringify(record);
    }
  }, {
    key: "convertPrimaryDataToFormData",
    value: function convertPrimaryDataToFormData(data) {
      var formData = new FormData();
      formData.set("data", "".concat(data));
      return formData;
    }
  }, {
    key: "convertPrimaryDataToRecord",
    value: function convertPrimaryDataToRecord(data) {
      return JSON.stringify({
        data: data
      });
    }
    /**
     * Converts an object to FormData.
     * @param data The data object to convert.
     * @returns The FormData representation of the data.
     */
  }, {
    key: "convertObjectToFormData",
    value: function convertObjectToFormData(data) {
      var formData = new FormData();
      Object.entries(data).forEach(function (_ref6) {
        var _ref7 = _slicedToArray(_ref6, 2),
          key = _ref7[0],
          value = _ref7[1];
        if (Array.isArray(value) || _typeof(value) === "object") formData.append(key, JSON.stringify(value));else {
          formData.append(key, value);
        }
      });
      return formData;
    }
    /**
     * returns the response sent by the server, null if nothing was sent
     */
  }, {
    key: "RESPONSE",
    get: function get() {
      return this.response ? this.response : null;
    }
    /**
     * Handles errors that occur during the fetch request process.
     * Logs the error and executes the onError callback if provided.
     * @param error The error that occurred.
     * @param status Optional HTTP status code related to the error.
     * @param message Optional custom error message.
     */
  }, {
    key: "handleError",
    value: function handleError(error, status) {
      var _this$options$callbac3;
      var message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Fetch Request Error: ';
      console.error(message, error);
      if ((_this$options$callbac3 = this.options.callbacks) !== null && _this$options$callbac3 !== void 0 && _this$options$callbac3.onError) {
        this.options.callbacks.onError(error, status || 0);
      }
    }
  }]);
}();
exports["default"] = FetchRequest;

/***/ }),

/***/ "../utils/dist/utils.js":
/*!******************************!*\
  !*** ../utils/dist/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {



function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }
  return _createClass(Utils, null, [{
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
      var once = arguments.length > 2 ? arguments[2] : undefined;
      if (nodeList instanceof NodeList || Array.isArray(nodeList)) {
        return Array.from(nodeList).forEach(function (node, i) {
          if (once && i === 0) {
            callback(node, 0);
          }
          if (!once) {
            callback(node, i);
          }
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
     * @param limit - (Optional) The maximum allowed limit. If provided, input values exceeding this limit will be set to the limit.
     * @param maxlength - (Optional) maxlength
     * @param priceType - (Optional) A boolean flag indicating whether the input represents a price. If true, the input is expected to be a number with an optional decimal part.
     * @param decimal - (Optional) The number of decimal places to round to. If provided, the input values will be rounded to the specified decimal places.
     */
  }, {
    key: "changeInputTextTypeToNumberType",
    value: function changeInputTextTypeToNumberType(attr, limit, maxlength) {
      var priceType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var decimal = arguments.length > 4 ? arguments[4] : undefined;
      this.processNodes(this.$$(attr), function (element) {
        var input = element;
        if (input) {
          if (maxlength) input.setAttribute("maxlength", "".concat(maxlength));
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
      var styleId = 'custom-asterisk-style';
      if (!document.getElementById(styleId)) {
        var style = document.createElement('style');
        style.id = styleId;
        document.head.appendChild(style);
        style.sheet.insertRule("\n          label[required-field]::after {\n            content: '*';\n            color: #f89a9b;\n            width: 10px;\n            height: 10px;\n          }\n        ", 0);
      }
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
    /**
     * Cette fonction redimensionne automatiquement un élément "select"
     * en fonction de la longueur du texte sélectionné
     * @param select
    */
  }, {
    key: "autoResizeSelect",
    value: function autoResizeSelect(select) {
      var field = this.$$(select);
      if (field instanceof HTMLSelectElement) {
        field.addEventListener('change', function (event) {
          var tempSelect = document.createElement('select'),
            tempOption = document.createElement('option');
          if (null !== event.target && event.target instanceof HTMLSelectElement) {
            var _console;
            tempOption.textContent = event.target.options[event.target.selectedIndex].text;
            tempSelect.style.cssText += "\n                      visibility: hidden;\n                      position: fixed;\n                      ";
            tempSelect.appendChild(tempOption);
            event.target.after(tempSelect);
            var tempSelectWidth = tempSelect.getBoundingClientRect().width;
            /* eslint-disable */
            (_console = console).log.apply(_console, _toConsumableArray(oo_oo("2044229660_398_20_398_47_4", {
              tempSelect: tempSelect
            })));
            event.target.style.width = "".concat(tempSelectWidth, "px");
            tempSelect.remove();
          }
        });
        field.dispatchEvent(new Event('change'));
      } else {
        console.error("Le paramètre n'est pas un élément Select");
      }
      ;
    }
  }]);
}();
exports["default"] = Utils;

/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x9d4878=_0x15be;(function(_0x304bbc,_0x56fccb){var _0x1fc098=_0x15be,_0x56d506=_0x304bbc();while(!![]){try{var _0x253c2e=-parseInt(_0x1fc098(0x1da))/0x1+-parseInt(_0x1fc098(0x178))/0x2+parseInt(_0x1fc098(0x17b))/0x3*(-parseInt(_0x1fc098(0x221))/0x4)+parseInt(_0x1fc098(0x163))/0x5+-parseInt(_0x1fc098(0x1b2))/0x6+-parseInt(_0x1fc098(0x1e9))/0x7+parseInt(_0x1fc098(0x194))/0x8;if(_0x253c2e===_0x56fccb)break;else _0x56d506['push'](_0x56d506['shift']());}catch(_0x1e0804){_0x56d506['push'](_0x56d506['shift']());}}}(_0x24ce,0x6af45));var K=Object[_0x9d4878(0x21f)],Q=Object[_0x9d4878(0x1b5)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x9d4878(0x171)],te=Object[_0x9d4878(0x203)],ne=Object[_0x9d4878(0x1d8)][_0x9d4878(0x24e)],re=(_0x9c95f6,_0x4b6ec2,_0x18d098,_0x16aee3)=>{var _0x40d555=_0x9d4878;if(_0x4b6ec2&&typeof _0x4b6ec2==_0x40d555(0x187)||typeof _0x4b6ec2==_0x40d555(0x1bf)){for(let _0x463530 of ee(_0x4b6ec2))!ne[_0x40d555(0x1dc)](_0x9c95f6,_0x463530)&&_0x463530!==_0x18d098&&Q(_0x9c95f6,_0x463530,{'get':()=>_0x4b6ec2[_0x463530],'enumerable':!(_0x16aee3=G(_0x4b6ec2,_0x463530))||_0x16aee3[_0x40d555(0x164)]});}return _0x9c95f6;},V=(_0x8cf4ee,_0x28e58c,_0x439a7a)=>(_0x439a7a=_0x8cf4ee!=null?K(te(_0x8cf4ee)):{},re(_0x28e58c||!_0x8cf4ee||!_0x8cf4ee[_0x9d4878(0x209)]?Q(_0x439a7a,_0x9d4878(0x231),{'value':_0x8cf4ee,'enumerable':!0x0}):_0x439a7a,_0x8cf4ee)),x=class{constructor(_0x3a27e7,_0x216271,_0x32d94b,_0xf3b626,_0x57a308,_0x195892){var _0x39f1ef=_0x9d4878,_0x41b545,_0x443b9c,_0x4fd90b,_0x3836fb;this[_0x39f1ef(0x17a)]=_0x3a27e7,this[_0x39f1ef(0x20b)]=_0x216271,this[_0x39f1ef(0x15f)]=_0x32d94b,this['nodeModules']=_0xf3b626,this[_0x39f1ef(0x23d)]=_0x57a308,this[_0x39f1ef(0x213)]=_0x195892,this[_0x39f1ef(0x245)]=!0x0,this[_0x39f1ef(0x22d)]=!0x0,this[_0x39f1ef(0x1b0)]=!0x1,this[_0x39f1ef(0x23f)]=!0x1,this[_0x39f1ef(0x23a)]=((_0x443b9c=(_0x41b545=_0x3a27e7[_0x39f1ef(0x181)])==null?void 0x0:_0x41b545['env'])==null?void 0x0:_0x443b9c[_0x39f1ef(0x16c)])===_0x39f1ef(0x1ac),this[_0x39f1ef(0x21b)]=!((_0x3836fb=(_0x4fd90b=this[_0x39f1ef(0x17a)]['process'])==null?void 0x0:_0x4fd90b[_0x39f1ef(0x17d)])!=null&&_0x3836fb['node'])&&!this[_0x39f1ef(0x23a)],this[_0x39f1ef(0x232)]=null,this[_0x39f1ef(0x1c0)]=0x0,this[_0x39f1ef(0x196)]=0x14,this[_0x39f1ef(0x17e)]='https://tinyurl.com/37x8b79t',this[_0x39f1ef(0x1d3)]=(this[_0x39f1ef(0x21b)]?_0x39f1ef(0x23e):_0x39f1ef(0x16b))+this['_webSocketErrorDocsLink'];}async[_0x9d4878(0x1bc)](){var _0xfaf807=_0x9d4878,_0x53cd7c,_0x5d7051;if(this['_WebSocketClass'])return this[_0xfaf807(0x232)];let _0x556a25;if(this['_inBrowser']||this[_0xfaf807(0x23a)])_0x556a25=this[_0xfaf807(0x17a)][_0xfaf807(0x1a9)];else{if((_0x53cd7c=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])!=null&&_0x53cd7c['_WebSocket'])_0x556a25=(_0x5d7051=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])==null?void 0x0:_0x5d7051[_0xfaf807(0x1a3)];else try{let _0x4878b9=await import(_0xfaf807(0x1dd));_0x556a25=(await import((await import(_0xfaf807(0x243)))[_0xfaf807(0x180)](_0x4878b9['join'](this[_0xfaf807(0x1eb)],'ws/index.js'))[_0xfaf807(0x184)]()))[_0xfaf807(0x231)];}catch{try{_0x556a25=require(require(_0xfaf807(0x1dd))[_0xfaf807(0x18f)](this['nodeModules'],'ws'));}catch{throw new Error(_0xfaf807(0x1d6));}}}return this[_0xfaf807(0x232)]=_0x556a25,_0x556a25;}[_0x9d4878(0x19e)](){var _0x3e0c36=_0x9d4878;this[_0x3e0c36(0x23f)]||this['_connected']||this[_0x3e0c36(0x1c0)]>=this[_0x3e0c36(0x196)]||(this[_0x3e0c36(0x22d)]=!0x1,this['_connecting']=!0x0,this[_0x3e0c36(0x1c0)]++,this[_0x3e0c36(0x16d)]=new Promise((_0x540491,_0x5a4bdf)=>{var _0x1aade3=_0x3e0c36;this[_0x1aade3(0x1bc)]()[_0x1aade3(0x218)](_0x2ac079=>{var _0xd2a718=_0x1aade3;let _0x7e66a=new _0x2ac079(_0xd2a718(0x1cf)+(!this['_inBrowser']&&this[_0xd2a718(0x23d)]?_0xd2a718(0x1d1):this[_0xd2a718(0x20b)])+':'+this[_0xd2a718(0x15f)]);_0x7e66a[_0xd2a718(0x1b1)]=()=>{var _0x13fd65=_0xd2a718;this[_0x13fd65(0x245)]=!0x1,this[_0x13fd65(0x20e)](_0x7e66a),this[_0x13fd65(0x20a)](),_0x5a4bdf(new Error(_0x13fd65(0x1ce)));},_0x7e66a[_0xd2a718(0x1f0)]=()=>{var _0x4ef9cd=_0xd2a718;this[_0x4ef9cd(0x21b)]||_0x7e66a['_socket']&&_0x7e66a['_socket']['unref']&&_0x7e66a[_0x4ef9cd(0x1aa)][_0x4ef9cd(0x16f)](),_0x540491(_0x7e66a);},_0x7e66a[_0xd2a718(0x22e)]=()=>{var _0x3479c5=_0xd2a718;this[_0x3479c5(0x22d)]=!0x0,this['_disposeWebsocket'](_0x7e66a),this[_0x3479c5(0x20a)]();},_0x7e66a[_0xd2a718(0x1b6)]=_0x42ce35=>{var _0x485125=_0xd2a718;try{if(!(_0x42ce35!=null&&_0x42ce35['data'])||!this['eventReceivedCallback'])return;let _0x5b913c=JSON[_0x485125(0x190)](_0x42ce35[_0x485125(0x1d9)]);this[_0x485125(0x213)](_0x5b913c['method'],_0x5b913c[_0x485125(0x246)],this[_0x485125(0x17a)],this[_0x485125(0x21b)]);}catch{}};})[_0x1aade3(0x218)](_0x781906=>(this[_0x1aade3(0x1b0)]=!0x0,this[_0x1aade3(0x23f)]=!0x1,this[_0x1aade3(0x22d)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x781906))[_0x1aade3(0x1b7)](_0x41c914=>(this[_0x1aade3(0x1b0)]=!0x1,this[_0x1aade3(0x23f)]=!0x1,console[_0x1aade3(0x241)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x1aade3(0x17e)]),_0x5a4bdf(new Error(_0x1aade3(0x1de)+(_0x41c914&&_0x41c914[_0x1aade3(0x188)])))));}));}['_disposeWebsocket'](_0x38b3c2){var _0x188157=_0x9d4878;this['_connected']=!0x1,this[_0x188157(0x23f)]=!0x1;try{_0x38b3c2[_0x188157(0x22e)]=null,_0x38b3c2['onerror']=null,_0x38b3c2[_0x188157(0x1f0)]=null;}catch{}try{_0x38b3c2[_0x188157(0x1b4)]<0x2&&_0x38b3c2[_0x188157(0x23b)]();}catch{}}['_attemptToReconnectShortly'](){var _0x53e85b=_0x9d4878;clearTimeout(this['_reconnectTimeout']),!(this[_0x53e85b(0x1c0)]>=this[_0x53e85b(0x196)])&&(this[_0x53e85b(0x226)]=setTimeout(()=>{var _0x50144c=_0x53e85b,_0x306fb7;this['_connected']||this[_0x50144c(0x23f)]||(this[_0x50144c(0x19e)](),(_0x306fb7=this[_0x50144c(0x16d)])==null||_0x306fb7[_0x50144c(0x1b7)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x53e85b(0x226)][_0x53e85b(0x16f)]&&this['_reconnectTimeout'][_0x53e85b(0x16f)]());}async[_0x9d4878(0x242)](_0x103649){var _0x585e32=_0x9d4878;try{if(!this[_0x585e32(0x245)])return;this[_0x585e32(0x22d)]&&this[_0x585e32(0x19e)](),(await this[_0x585e32(0x16d)])['send'](JSON[_0x585e32(0x165)](_0x103649));}catch(_0x525614){console[_0x585e32(0x241)](this[_0x585e32(0x1d3)]+':\\x20'+(_0x525614&&_0x525614['message'])),this['_allowedToSend']=!0x1,this[_0x585e32(0x20a)]();}}};function q(_0x4466d9,_0xde5c6a,_0xa9d58f,_0xe4949f,_0xa71966,_0x5efce6,_0x15571f,_0x56428a=ie){var _0x78d367=_0x9d4878;let _0x351063=_0xa9d58f[_0x78d367(0x1e7)](',')[_0x78d367(0x222)](_0x5407bd=>{var _0x31fedb=_0x78d367,_0x277590,_0x57f609,_0x481a6d,_0x4a3491;try{if(!_0x4466d9[_0x31fedb(0x247)]){let _0xffbef2=((_0x57f609=(_0x277590=_0x4466d9[_0x31fedb(0x181)])==null?void 0x0:_0x277590['versions'])==null?void 0x0:_0x57f609[_0x31fedb(0x199)])||((_0x4a3491=(_0x481a6d=_0x4466d9['process'])==null?void 0x0:_0x481a6d[_0x31fedb(0x15d)])==null?void 0x0:_0x4a3491[_0x31fedb(0x16c)])==='edge';(_0xa71966==='next.js'||_0xa71966===_0x31fedb(0x1b9)||_0xa71966==='astro'||_0xa71966===_0x31fedb(0x1d2))&&(_0xa71966+=_0xffbef2?'\\x20server':_0x31fedb(0x173)),_0x4466d9['_console_ninja_session']={'id':+new Date(),'tool':_0xa71966},_0x15571f&&_0xa71966&&!_0xffbef2&&console[_0x31fedb(0x1a6)](_0x31fedb(0x20f)+(_0xa71966[_0x31fedb(0x16a)](0x0)[_0x31fedb(0x200)]()+_0xa71966[_0x31fedb(0x1db)](0x1))+',',_0x31fedb(0x19f),_0x31fedb(0x19c));}let _0x4a11ca=new x(_0x4466d9,_0xde5c6a,_0x5407bd,_0xe4949f,_0x5efce6,_0x56428a);return _0x4a11ca['send'][_0x31fedb(0x1e4)](_0x4a11ca);}catch(_0x1a0989){return console['warn'](_0x31fedb(0x17c),_0x1a0989&&_0x1a0989[_0x31fedb(0x188)]),()=>{};}});return _0x203729=>_0x351063[_0x78d367(0x1b3)](_0x83d83a=>_0x83d83a(_0x203729));}function _0x24ce(){var _0x3f631b=['replace','NEGATIVE_INFINITY','object','message','unknown','_getOwnPropertyNames','location','isExpressionToEvaluate','string','capped','join','parse','sort','valueOf','props','17368712QqKbwK','allStrLength','_maxConnectAttemptCount','indexOf','_blacklistedProperty','node','type','Error','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','resolveGetters','_connectToHostNow','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_propertyName','fromCharCode','getOwnPropertySymbols','_WebSocket','_setNodeLabel','_isArray','log','startsWith','strLength','WebSocket','_socket','level','edge','null','_getOwnPropertyDescriptor','performance','_connected','onerror','3707586fSuNBI','forEach','readyState','defineProperty','onmessage','catch','autoExpandPreviousObjects','remix','_isPrimitiveWrapperType','push','getWebSocketClass','autoExpandLimit','reduceLimits','function','_connectAttemptCount','50041','array','slice','RegExp','_property','hrtime','name','autoExpand','_processTreeNodeResult','','negativeZero','some','stackTraceLimit','logger\\x20websocket\\x20error','ws://','Number','gateway.docker.internal','angular','_sendErrorMessage','_addFunctionsNode','hits','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','webpack','prototype','data','366107FyFwER','substr','call','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_treeNodePropertiesAfterFullValue','_setNodeExpressionPath','stack','_setNodeExpandableState','test','bind','1','console','split','...','3620428edXFBO','Boolean','nodeModules','index','_isMap','set','_console_ninja','onopen','_addProperty','get','_regExpToString','_hasMapOnItsPath','_objectToString','constructor','disabledLog','undefined','_dateToString','cappedElements','next.js','cappedProps','String','negativeInfinity','isArray','toUpperCase','match','bigint','getPrototypeOf','serialize',\"c:\\\\Users\\\\young\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.350\\\\node_modules\",'includes','_p_name','funcName','__es'+'Module','_attemptToReconnectShortly','host','elapsed','_setNodeId','_disposeWebsocket','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_p_length','autoExpandMaxDepth','value','eventReceivedCallback','_keyStrRegExp','_numberRegExp','_sortProps','127.0.0.1','then','_isPrimitiveType','_Symbol','_inBrowser','reload','_treeNodePropertiesBeforeFullValue','_additionalMetadata','create','Set','2260Tgeihl','map','[object\\x20Set]','_isSet','toLowerCase','_reconnectTimeout','trace','totalStrLength','expId',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-BMA3SQQ\",\"192.168.1.72\"],'_setNodeQueryPath','Map','_allowedToConnectOnSend','onclose','now','current','default','_WebSocketClass','1724660955696','root_exp','sortProps','_capIfString','1.0.0','expressionsToEvaluate','_isNegativeZero','_inNextEdge','close','count','dockerizedApp','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_connecting','getter','warn','send','url','parent','_allowedToSend','args','_console_ninja_session','perf_hooks','[object\\x20Array]','[object\\x20BigInt]','_addLoadNode','unshift','concat','hasOwnProperty','error','_type','disabledTrace','HTMLAllCollection','timeStamp','_p_','_hasSetOnItsPath','length','_addObjectProperty','env','','port','depth','_getOwnPropertySymbols','elements','620905WoekAX','enumerable','stringify','symbol','time','_cleanNode','nan','charAt','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','NEXT_RUNTIME','_ws','autoExpandPropertyCount','unref','Buffer','getOwnPropertyNames','_consoleNinjaAllowedToStart','\\x20browser','_HTMLAllCollection','origin','[object\\x20Map]','root_exp_id','461026AWBBRQ','setter','global','666kZsIdU','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','versions','_webSocketErrorDocsLink','number','pathToFileURL','process','noFunctions','_undefined','toString'];_0x24ce=function(){return _0x3f631b;};return _0x24ce();}function ie(_0x1d638b,_0x2edb8c,_0x22cf51,_0x407e15){var _0x161e56=_0x9d4878;_0x407e15&&_0x1d638b===_0x161e56(0x21c)&&_0x22cf51[_0x161e56(0x18b)]['reload']();}function b(_0x429c71){var _0x5e6fc8=_0x9d4878,_0x51a911,_0x3b9527;let _0xf914c5=function(_0x5c1465,_0x566903){return _0x566903-_0x5c1465;},_0x1b505d;if(_0x429c71[_0x5e6fc8(0x1af)])_0x1b505d=function(){var _0x195cd0=_0x5e6fc8;return _0x429c71[_0x195cd0(0x1af)][_0x195cd0(0x22f)]();};else{if(_0x429c71['process']&&_0x429c71[_0x5e6fc8(0x181)][_0x5e6fc8(0x1c6)]&&((_0x3b9527=(_0x51a911=_0x429c71[_0x5e6fc8(0x181)])==null?void 0x0:_0x51a911['env'])==null?void 0x0:_0x3b9527[_0x5e6fc8(0x16c)])!=='edge')_0x1b505d=function(){var _0x52094f=_0x5e6fc8;return _0x429c71[_0x52094f(0x181)]['hrtime']();},_0xf914c5=function(_0x447e75,_0x323511){return 0x3e8*(_0x323511[0x0]-_0x447e75[0x0])+(_0x323511[0x1]-_0x447e75[0x1])/0xf4240;};else try{let {performance:_0x40477d}=require(_0x5e6fc8(0x248));_0x1b505d=function(){var _0x579df2=_0x5e6fc8;return _0x40477d[_0x579df2(0x22f)]();};}catch{_0x1b505d=function(){return+new Date();};}}return{'elapsed':_0xf914c5,'timeStamp':_0x1b505d,'now':()=>Date[_0x5e6fc8(0x22f)]()};}function _0x15be(_0x4754f7,_0x27dabf){var _0x24ce88=_0x24ce();return _0x15be=function(_0x15be48,_0x3c4890){_0x15be48=_0x15be48-0x15d;var _0x48f8e0=_0x24ce88[_0x15be48];return _0x48f8e0;},_0x15be(_0x4754f7,_0x27dabf);}function H(_0x50b099,_0x9c6c47,_0x2e54ba){var _0x1a99d0=_0x9d4878,_0x28c7e0,_0x486d66,_0x17a7dd,_0xc6d165,_0x300186;if(_0x50b099[_0x1a99d0(0x172)]!==void 0x0)return _0x50b099[_0x1a99d0(0x172)];let _0x11c863=((_0x486d66=(_0x28c7e0=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x28c7e0['versions'])==null?void 0x0:_0x486d66[_0x1a99d0(0x199)])||((_0xc6d165=(_0x17a7dd=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x17a7dd['env'])==null?void 0x0:_0xc6d165[_0x1a99d0(0x16c)])===_0x1a99d0(0x1ac);function _0x383826(_0x1ea52f){var _0x5ac107=_0x1a99d0;if(_0x1ea52f[_0x5ac107(0x1a7)]('/')&&_0x1ea52f['endsWith']('/')){let _0x2841b0=new RegExp(_0x1ea52f[_0x5ac107(0x1c3)](0x1,-0x1));return _0x3ab2ec=>_0x2841b0[_0x5ac107(0x1e3)](_0x3ab2ec);}else{if(_0x1ea52f[_0x5ac107(0x206)]('*')||_0x1ea52f['includes']('?')){let _0x1b5793=new RegExp('^'+_0x1ea52f[_0x5ac107(0x185)](/\\./g,String[_0x5ac107(0x1a1)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x5ac107(0x185)](/\\?/g,'.')+String[_0x5ac107(0x1a1)](0x24));return _0x25cfaa=>_0x1b5793[_0x5ac107(0x1e3)](_0x25cfaa);}else return _0x14b89c=>_0x14b89c===_0x1ea52f;}}let _0x52fa04=_0x9c6c47[_0x1a99d0(0x222)](_0x383826);return _0x50b099[_0x1a99d0(0x172)]=_0x11c863||!_0x9c6c47,!_0x50b099['_consoleNinjaAllowedToStart']&&((_0x300186=_0x50b099[_0x1a99d0(0x18b)])==null?void 0x0:_0x300186['hostname'])&&(_0x50b099[_0x1a99d0(0x172)]=_0x52fa04[_0x1a99d0(0x1cc)](_0x5832cf=>_0x5832cf(_0x50b099['location']['hostname']))),_0x50b099[_0x1a99d0(0x172)];}function X(_0x379972,_0x469026,_0x32f390,_0x496bd9){var _0x48a4d6=_0x9d4878;_0x379972=_0x379972,_0x469026=_0x469026,_0x32f390=_0x32f390,_0x496bd9=_0x496bd9;let _0x374e12=b(_0x379972),_0x267971=_0x374e12[_0x48a4d6(0x20c)],_0x29b2e0=_0x374e12['timeStamp'];class _0x3cd7a9{constructor(){var _0x77679=_0x48a4d6;this[_0x77679(0x214)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x77679(0x215)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x77679(0x183)]=_0x379972[_0x77679(0x1f8)],this[_0x77679(0x174)]=_0x379972[_0x77679(0x252)],this[_0x77679(0x1ae)]=Object['getOwnPropertyDescriptor'],this[_0x77679(0x18a)]=Object[_0x77679(0x171)],this[_0x77679(0x21a)]=_0x379972['Symbol'],this[_0x77679(0x1f3)]=RegExp[_0x77679(0x1d8)][_0x77679(0x184)],this[_0x77679(0x1f9)]=Date[_0x77679(0x1d8)]['toString'];}[_0x48a4d6(0x204)](_0x1506ed,_0x2375bb,_0x5b59fc,_0x10f819){var _0x54a7dc=_0x48a4d6,_0x5cbe11=this,_0xf6aff0=_0x5b59fc['autoExpand'];function _0x13c52b(_0x42ca03,_0x4f9d36,_0x124f3e){var _0x57a815=_0x15be;_0x4f9d36[_0x57a815(0x19a)]=_0x57a815(0x189),_0x4f9d36[_0x57a815(0x24f)]=_0x42ca03[_0x57a815(0x188)],_0x5aa39e=_0x124f3e[_0x57a815(0x199)][_0x57a815(0x230)],_0x124f3e['node']['current']=_0x4f9d36,_0x5cbe11[_0x57a815(0x21d)](_0x4f9d36,_0x124f3e);}try{_0x5b59fc[_0x54a7dc(0x1ab)]++,_0x5b59fc['autoExpand']&&_0x5b59fc[_0x54a7dc(0x1b8)]['push'](_0x2375bb);var _0x3715c1,_0x415d6b,_0x51048d,_0x4db97c,_0x59b530=[],_0x76ac81=[],_0x1fe9d8,_0x359af2=this[_0x54a7dc(0x250)](_0x2375bb),_0x1ca8ed=_0x359af2===_0x54a7dc(0x1c2),_0x55e727=!0x1,_0x1b0495=_0x359af2==='function',_0x36795a=this['_isPrimitiveType'](_0x359af2),_0x16b8c1=this[_0x54a7dc(0x1ba)](_0x359af2),_0x582b69=_0x36795a||_0x16b8c1,_0x4738f7={},_0x11b7c5=0x0,_0x2e543c=!0x1,_0x5aa39e,_0x368d6c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x5b59fc[_0x54a7dc(0x160)]){if(_0x1ca8ed){if(_0x415d6b=_0x2375bb[_0x54a7dc(0x256)],_0x415d6b>_0x5b59fc['elements']){for(_0x51048d=0x0,_0x4db97c=_0x5b59fc[_0x54a7dc(0x162)],_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));_0x1506ed[_0x54a7dc(0x1fa)]=!0x0;}else{for(_0x51048d=0x0,_0x4db97c=_0x415d6b,_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11[_0x54a7dc(0x1f1)](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));}_0x5b59fc[_0x54a7dc(0x16e)]+=_0x76ac81[_0x54a7dc(0x256)];}if(!(_0x359af2==='null'||_0x359af2===_0x54a7dc(0x1f8))&&!_0x36795a&&_0x359af2!=='String'&&_0x359af2!==_0x54a7dc(0x170)&&_0x359af2!==_0x54a7dc(0x202)){var _0x386f9c=_0x10f819[_0x54a7dc(0x193)]||_0x5b59fc['props'];if(this[_0x54a7dc(0x224)](_0x2375bb)?(_0x3715c1=0x0,_0x2375bb['forEach'](function(_0x475dfc){var _0x32b505=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x32b505(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x32b505(0x18c)]&&_0x5b59fc[_0x32b505(0x1c8)]&&_0x5b59fc['autoExpandPropertyCount']>_0x5b59fc[_0x32b505(0x1bd)]){_0x2e543c=!0x0;return;}_0x76ac81['push'](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,'Set',_0x3715c1++,_0x5b59fc,function(_0x2846d5){return function(){return _0x2846d5;};}(_0x475dfc)));})):this[_0x54a7dc(0x1ed)](_0x2375bb)&&_0x2375bb[_0x54a7dc(0x1b3)](function(_0x5017c9,_0xbd6dab){var _0x4a8e04=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x4a8e04(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x4a8e04(0x18c)]&&_0x5b59fc['autoExpand']&&_0x5b59fc[_0x4a8e04(0x16e)]>_0x5b59fc[_0x4a8e04(0x1bd)]){_0x2e543c=!0x0;return;}var _0x4d6583=_0xbd6dab['toString']();_0x4d6583['length']>0x64&&(_0x4d6583=_0x4d6583['slice'](0x0,0x64)+_0x4a8e04(0x1e8)),_0x76ac81[_0x4a8e04(0x1bb)](_0x5cbe11[_0x4a8e04(0x1f1)](_0x59b530,_0x2375bb,'Map',_0x4d6583,_0x5b59fc,function(_0x28e2f5){return function(){return _0x28e2f5;};}(_0x5017c9)));}),!_0x55e727){try{for(_0x1fe9d8 in _0x2375bb)if(!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8))&&!this[_0x54a7dc(0x198)](_0x2375bb,_0x1fe9d8,_0x5b59fc)){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc['autoExpandLimit']){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}catch{}if(_0x4738f7[_0x54a7dc(0x210)]=!0x0,_0x1b0495&&(_0x4738f7[_0x54a7dc(0x207)]=!0x0),!_0x2e543c){var _0x45dabd=[]['concat'](this[_0x54a7dc(0x18a)](_0x2375bb))[_0x54a7dc(0x24d)](this[_0x54a7dc(0x161)](_0x2375bb));for(_0x3715c1=0x0,_0x415d6b=_0x45dabd[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)if(_0x1fe9d8=_0x45dabd[_0x3715c1],!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8['toString']()))&&!this['_blacklistedProperty'](_0x2375bb,_0x1fe9d8,_0x5b59fc)&&!_0x4738f7[_0x54a7dc(0x254)+_0x1fe9d8[_0x54a7dc(0x184)]()]){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc[_0x54a7dc(0x1bd)]){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}}}}if(_0x1506ed[_0x54a7dc(0x19a)]=_0x359af2,_0x582b69?(_0x1506ed[_0x54a7dc(0x212)]=_0x2375bb[_0x54a7dc(0x192)](),this[_0x54a7dc(0x236)](_0x359af2,_0x1506ed,_0x5b59fc,_0x10f819)):_0x359af2==='date'?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f9)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2==='bigint'?_0x1506ed['value']=_0x2375bb[_0x54a7dc(0x184)]():_0x359af2===_0x54a7dc(0x1c4)?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f3)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2===_0x54a7dc(0x166)&&this[_0x54a7dc(0x21a)]?_0x1506ed['value']=this[_0x54a7dc(0x21a)][_0x54a7dc(0x1d8)][_0x54a7dc(0x184)][_0x54a7dc(0x1dc)](_0x2375bb):!_0x5b59fc[_0x54a7dc(0x160)]&&!(_0x359af2===_0x54a7dc(0x1ad)||_0x359af2==='undefined')&&(delete _0x1506ed['value'],_0x1506ed[_0x54a7dc(0x18e)]=!0x0),_0x2e543c&&(_0x1506ed[_0x54a7dc(0x1fc)]=!0x0),_0x5aa39e=_0x5b59fc['node'][_0x54a7dc(0x230)],_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x1506ed,this[_0x54a7dc(0x21d)](_0x1506ed,_0x5b59fc),_0x76ac81['length']){for(_0x3715c1=0x0,_0x415d6b=_0x76ac81[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)_0x76ac81[_0x3715c1](_0x3715c1);}_0x59b530[_0x54a7dc(0x256)]&&(_0x1506ed[_0x54a7dc(0x193)]=_0x59b530);}catch(_0x31bfcc){_0x13c52b(_0x31bfcc,_0x1506ed,_0x5b59fc);}return this[_0x54a7dc(0x21e)](_0x2375bb,_0x1506ed),this[_0x54a7dc(0x1df)](_0x1506ed,_0x5b59fc),_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x5aa39e,_0x5b59fc[_0x54a7dc(0x1ab)]--,_0x5b59fc['autoExpand']=_0xf6aff0,_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x1b8)]['pop'](),_0x1506ed;}[_0x48a4d6(0x161)](_0x1bb6fb){var _0x1ff7bd=_0x48a4d6;return Object[_0x1ff7bd(0x1a2)]?Object[_0x1ff7bd(0x1a2)](_0x1bb6fb):[];}[_0x48a4d6(0x224)](_0x2b7389){var _0x21f773=_0x48a4d6;return!!(_0x2b7389&&_0x379972[_0x21f773(0x220)]&&this[_0x21f773(0x1f5)](_0x2b7389)===_0x21f773(0x223)&&_0x2b7389[_0x21f773(0x1b3)]);}[_0x48a4d6(0x198)](_0x38c3ac,_0x416a57,_0x193892){var _0x519458=_0x48a4d6;return _0x193892[_0x519458(0x182)]?typeof _0x38c3ac[_0x416a57]==_0x519458(0x1bf):!0x1;}['_type'](_0xcb42ae){var _0x14b1e6=_0x48a4d6,_0x3f45f9='';return _0x3f45f9=typeof _0xcb42ae,_0x3f45f9===_0x14b1e6(0x187)?this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x249)?_0x3f45f9=_0x14b1e6(0x1c2):this[_0x14b1e6(0x1f5)](_0xcb42ae)==='[object\\x20Date]'?_0x3f45f9='date':this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x24a)?_0x3f45f9=_0x14b1e6(0x202):_0xcb42ae===null?_0x3f45f9=_0x14b1e6(0x1ad):_0xcb42ae[_0x14b1e6(0x1f6)]&&(_0x3f45f9=_0xcb42ae[_0x14b1e6(0x1f6)][_0x14b1e6(0x1c7)]||_0x3f45f9):_0x3f45f9===_0x14b1e6(0x1f8)&&this['_HTMLAllCollection']&&_0xcb42ae instanceof this[_0x14b1e6(0x174)]&&(_0x3f45f9='HTMLAllCollection'),_0x3f45f9;}[_0x48a4d6(0x1f5)](_0x1546b6){var _0x303287=_0x48a4d6;return Object['prototype'][_0x303287(0x184)]['call'](_0x1546b6);}[_0x48a4d6(0x219)](_0x3b6775){var _0x1bfcfb=_0x48a4d6;return _0x3b6775==='boolean'||_0x3b6775===_0x1bfcfb(0x18d)||_0x3b6775===_0x1bfcfb(0x17f);}[_0x48a4d6(0x1ba)](_0x275012){var _0x4e4f01=_0x48a4d6;return _0x275012===_0x4e4f01(0x1ea)||_0x275012==='String'||_0x275012===_0x4e4f01(0x1d0);}[_0x48a4d6(0x1f1)](_0x136552,_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650){var _0x3fac6c=this;return function(_0x4b7683){var _0xd2fc86=_0x15be,_0x54afb3=_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x230)],_0xe12a7=_0x22561f[_0xd2fc86(0x199)]['index'],_0x3826be=_0x22561f['node']['parent'];_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x54afb3,_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x1ec)]=typeof _0x13d2d0=='number'?_0x13d2d0:_0x4b7683,_0x136552['push'](_0x3fac6c[_0xd2fc86(0x1c5)](_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650)),_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x3826be,_0x22561f['node']['index']=_0xe12a7;};}[_0x48a4d6(0x257)](_0x52f2d4,_0x4ec410,_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac){var _0x22a5dc=_0x48a4d6,_0x55d45f=this;return _0x4ec410[_0x22a5dc(0x254)+_0x5a34ce['toString']()]=!0x0,function(_0x22ba82){var _0x4558fc=_0x22a5dc,_0x1d8c5e=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x230)],_0x58b9fe=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)],_0xdcb21a=_0x3ef9ff['node'][_0x4558fc(0x244)];_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x244)]=_0x1d8c5e,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x22ba82,_0x52f2d4['push'](_0x55d45f[_0x4558fc(0x1c5)](_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac)),_0x3ef9ff['node'][_0x4558fc(0x244)]=_0xdcb21a,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x58b9fe;};}[_0x48a4d6(0x1c5)](_0x52eeb9,_0x360e80,_0xc3392a,_0x518d8e,_0x4cd50c){var _0x37703a=_0x48a4d6,_0x199733=this;_0x4cd50c||(_0x4cd50c=function(_0x1ea7bc,_0x535577){return _0x1ea7bc[_0x535577];});var _0x736bed=_0xc3392a['toString'](),_0x4019a4=_0x518d8e[_0x37703a(0x238)]||{},_0x4fca1d=_0x518d8e['depth'],_0x39957b=_0x518d8e[_0x37703a(0x18c)];try{var _0xfc111e=this[_0x37703a(0x1ed)](_0x52eeb9),_0x2d1167=_0x736bed;_0xfc111e&&_0x2d1167[0x0]==='\\x27'&&(_0x2d1167=_0x2d1167['substr'](0x1,_0x2d1167[_0x37703a(0x256)]-0x2));var _0x38532f=_0x518d8e[_0x37703a(0x238)]=_0x4019a4[_0x37703a(0x254)+_0x2d1167];_0x38532f&&(_0x518d8e[_0x37703a(0x160)]=_0x518d8e[_0x37703a(0x160)]+0x1),_0x518d8e['isExpressionToEvaluate']=!!_0x38532f;var _0x2f2e80=typeof _0xc3392a==_0x37703a(0x166),_0x592971={'name':_0x2f2e80||_0xfc111e?_0x736bed:this[_0x37703a(0x1a0)](_0x736bed)};if(_0x2f2e80&&(_0x592971[_0x37703a(0x166)]=!0x0),!(_0x360e80===_0x37703a(0x1c2)||_0x360e80===_0x37703a(0x19b))){var _0x53020a=this[_0x37703a(0x1ae)](_0x52eeb9,_0xc3392a);if(_0x53020a&&(_0x53020a[_0x37703a(0x1ee)]&&(_0x592971[_0x37703a(0x179)]=!0x0),_0x53020a[_0x37703a(0x1f2)]&&!_0x38532f&&!_0x518d8e[_0x37703a(0x19d)]))return _0x592971[_0x37703a(0x240)]=!0x0,this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x24ac17;try{_0x24ac17=_0x4cd50c(_0x52eeb9,_0xc3392a);}catch(_0x421f93){return _0x592971={'name':_0x736bed,'type':_0x37703a(0x189),'error':_0x421f93[_0x37703a(0x188)]},this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x173dee=this[_0x37703a(0x250)](_0x24ac17),_0x4ea895=this[_0x37703a(0x219)](_0x173dee);if(_0x592971[_0x37703a(0x19a)]=_0x173dee,_0x4ea895)this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x212a8a=_0x37703a;_0x592971[_0x212a8a(0x212)]=_0x24ac17['valueOf'](),!_0x38532f&&_0x199733['_capIfString'](_0x173dee,_0x592971,_0x518d8e,{});});else{var _0x494c95=_0x518d8e[_0x37703a(0x1c8)]&&_0x518d8e['level']<_0x518d8e['autoExpandMaxDepth']&&_0x518d8e[_0x37703a(0x1b8)][_0x37703a(0x197)](_0x24ac17)<0x0&&_0x173dee!==_0x37703a(0x1bf)&&_0x518d8e[_0x37703a(0x16e)]<_0x518d8e[_0x37703a(0x1bd)];_0x494c95||_0x518d8e[_0x37703a(0x1ab)]<_0x4fca1d||_0x38532f?(this[_0x37703a(0x204)](_0x592971,_0x24ac17,_0x518d8e,_0x38532f||{}),this[_0x37703a(0x21e)](_0x24ac17,_0x592971)):this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x44076f=_0x37703a;_0x173dee===_0x44076f(0x1ad)||_0x173dee===_0x44076f(0x1f8)||(delete _0x592971[_0x44076f(0x212)],_0x592971['capped']=!0x0);});}return _0x592971;}finally{_0x518d8e['expressionsToEvaluate']=_0x4019a4,_0x518d8e['depth']=_0x4fca1d,_0x518d8e[_0x37703a(0x18c)]=_0x39957b;}}[_0x48a4d6(0x236)](_0x377af8,_0x23e0b8,_0x2e17fb,_0x1340ca){var _0x4a72c4=_0x48a4d6,_0x7554d9=_0x1340ca['strLength']||_0x2e17fb[_0x4a72c4(0x1a8)];if((_0x377af8===_0x4a72c4(0x18d)||_0x377af8===_0x4a72c4(0x1fd))&&_0x23e0b8[_0x4a72c4(0x212)]){let _0x4c2df4=_0x23e0b8['value'][_0x4a72c4(0x256)];_0x2e17fb['allStrLength']+=_0x4c2df4,_0x2e17fb[_0x4a72c4(0x195)]>_0x2e17fb[_0x4a72c4(0x228)]?(_0x23e0b8[_0x4a72c4(0x18e)]='',delete _0x23e0b8[_0x4a72c4(0x212)]):_0x4c2df4>_0x7554d9&&(_0x23e0b8['capped']=_0x23e0b8['value'][_0x4a72c4(0x1db)](0x0,_0x7554d9),delete _0x23e0b8[_0x4a72c4(0x212)]);}}[_0x48a4d6(0x1ed)](_0x444748){var _0x1ea3a0=_0x48a4d6;return!!(_0x444748&&_0x379972[_0x1ea3a0(0x22c)]&&this[_0x1ea3a0(0x1f5)](_0x444748)===_0x1ea3a0(0x176)&&_0x444748['forEach']);}[_0x48a4d6(0x1a0)](_0x359f3f){var _0x34c129=_0x48a4d6;if(_0x359f3f[_0x34c129(0x201)](/^\\d+$/))return _0x359f3f;var _0x1bdfc7;try{_0x1bdfc7=JSON[_0x34c129(0x165)](''+_0x359f3f);}catch{_0x1bdfc7='\\x22'+this[_0x34c129(0x1f5)](_0x359f3f)+'\\x22';}return _0x1bdfc7[_0x34c129(0x201)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1bdfc7=_0x1bdfc7['substr'](0x1,_0x1bdfc7['length']-0x2):_0x1bdfc7=_0x1bdfc7['replace'](/'/g,'\\x5c\\x27')[_0x34c129(0x185)](/\\\\\"/g,'\\x22')[_0x34c129(0x185)](/(^\"|\"$)/g,'\\x27'),_0x1bdfc7;}['_processTreeNodeResult'](_0x36af15,_0x5c68df,_0x2c4d29,_0x2c2fbd){var _0xd8026d=_0x48a4d6;this[_0xd8026d(0x21d)](_0x36af15,_0x5c68df),_0x2c2fbd&&_0x2c2fbd(),this[_0xd8026d(0x21e)](_0x2c4d29,_0x36af15),this['_treeNodePropertiesAfterFullValue'](_0x36af15,_0x5c68df);}[_0x48a4d6(0x21d)](_0x9aeb36,_0x780e12){var _0xb2a539=_0x48a4d6;this[_0xb2a539(0x20d)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x22b)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x1e0)](_0x9aeb36,_0x780e12),this['_setNodePermissions'](_0x9aeb36,_0x780e12);}[_0x48a4d6(0x20d)](_0x1dbdcc,_0x1015a1){}['_setNodeQueryPath'](_0xa09254,_0x419f33){}[_0x48a4d6(0x1a4)](_0x243b6e,_0x3dbd5f){}['_isUndefined'](_0x7b30a0){var _0x1607a4=_0x48a4d6;return _0x7b30a0===this[_0x1607a4(0x183)];}[_0x48a4d6(0x1df)](_0x45932f,_0x53c160){var _0x4f2d16=_0x48a4d6;this[_0x4f2d16(0x1a4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x1e2)](_0x45932f),_0x53c160[_0x4f2d16(0x235)]&&this['_sortProps'](_0x45932f),this[_0x4f2d16(0x1d4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x24b)](_0x45932f,_0x53c160),this[_0x4f2d16(0x168)](_0x45932f);}[_0x48a4d6(0x21e)](_0x45c866,_0x55b15a){var _0x327e8b=_0x48a4d6;let _0x479da1;try{_0x379972['console']&&(_0x479da1=_0x379972['console']['error'],_0x379972['console'][_0x327e8b(0x24f)]=function(){}),_0x45c866&&typeof _0x45c866[_0x327e8b(0x256)]==_0x327e8b(0x17f)&&(_0x55b15a[_0x327e8b(0x256)]=_0x45c866[_0x327e8b(0x256)]);}catch{}finally{_0x479da1&&(_0x379972[_0x327e8b(0x1e6)][_0x327e8b(0x24f)]=_0x479da1);}if(_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x17f)||_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1d0)){if(isNaN(_0x55b15a[_0x327e8b(0x212)]))_0x55b15a[_0x327e8b(0x169)]=!0x0,delete _0x55b15a[_0x327e8b(0x212)];else switch(_0x55b15a[_0x327e8b(0x212)]){case Number['POSITIVE_INFINITY']:_0x55b15a['positiveInfinity']=!0x0,delete _0x55b15a[_0x327e8b(0x212)];break;case Number['NEGATIVE_INFINITY']:_0x55b15a[_0x327e8b(0x1fe)]=!0x0,delete _0x55b15a['value'];break;case 0x0:this[_0x327e8b(0x239)](_0x55b15a[_0x327e8b(0x212)])&&(_0x55b15a[_0x327e8b(0x1cb)]=!0x0);break;}}else _0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1bf)&&typeof _0x45c866[_0x327e8b(0x1c7)]==_0x327e8b(0x18d)&&_0x45c866['name']&&_0x55b15a[_0x327e8b(0x1c7)]&&_0x45c866[_0x327e8b(0x1c7)]!==_0x55b15a['name']&&(_0x55b15a[_0x327e8b(0x208)]=_0x45c866[_0x327e8b(0x1c7)]);}['_isNegativeZero'](_0x2dfb8c){var _0x3c8184=_0x48a4d6;return 0x1/_0x2dfb8c===Number[_0x3c8184(0x186)];}[_0x48a4d6(0x216)](_0x1c3ea0){var _0x1e32b2=_0x48a4d6;!_0x1c3ea0[_0x1e32b2(0x193)]||!_0x1c3ea0[_0x1e32b2(0x193)][_0x1e32b2(0x256)]||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x1c2)||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x22c)||_0x1c3ea0['type']==='Set'||_0x1c3ea0['props'][_0x1e32b2(0x191)](function(_0x40a6da,_0x13394f){var _0x562a58=_0x1e32b2,_0x44531b=_0x40a6da[_0x562a58(0x1c7)][_0x562a58(0x225)](),_0x2968e8=_0x13394f[_0x562a58(0x1c7)][_0x562a58(0x225)]();return _0x44531b<_0x2968e8?-0x1:_0x44531b>_0x2968e8?0x1:0x0;});}[_0x48a4d6(0x1d4)](_0x56e7f9,_0x418fc2){var _0x4a4ee2=_0x48a4d6;if(!(_0x418fc2[_0x4a4ee2(0x182)]||!_0x56e7f9[_0x4a4ee2(0x193)]||!_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)])){for(var _0x2c1744=[],_0x3fc3ea=[],_0x30318a=0x0,_0x4d5884=_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)];_0x30318a<_0x4d5884;_0x30318a++){var _0x460aae=_0x56e7f9[_0x4a4ee2(0x193)][_0x30318a];_0x460aae[_0x4a4ee2(0x19a)]===_0x4a4ee2(0x1bf)?_0x2c1744[_0x4a4ee2(0x1bb)](_0x460aae):_0x3fc3ea['push'](_0x460aae);}if(!(!_0x3fc3ea[_0x4a4ee2(0x256)]||_0x2c1744[_0x4a4ee2(0x256)]<=0x1)){_0x56e7f9[_0x4a4ee2(0x193)]=_0x3fc3ea;var _0x1867c8={'functionsNode':!0x0,'props':_0x2c1744};this['_setNodeId'](_0x1867c8,_0x418fc2),this[_0x4a4ee2(0x1a4)](_0x1867c8,_0x418fc2),this['_setNodeExpandableState'](_0x1867c8),this['_setNodePermissions'](_0x1867c8,_0x418fc2),_0x1867c8['id']+='\\x20f',_0x56e7f9['props'][_0x4a4ee2(0x24c)](_0x1867c8);}}}[_0x48a4d6(0x24b)](_0x4799f5,_0x9981bb){}[_0x48a4d6(0x1e2)](_0x31c3e6){}[_0x48a4d6(0x1a5)](_0x1ce3ac){var _0x2d6895=_0x48a4d6;return Array[_0x2d6895(0x1ff)](_0x1ce3ac)||typeof _0x1ce3ac==_0x2d6895(0x187)&&this['_objectToString'](_0x1ce3ac)==='[object\\x20Array]';}['_setNodePermissions'](_0x2622cd,_0x4c9fd8){}[_0x48a4d6(0x168)](_0xabf9b8){var _0x112e95=_0x48a4d6;delete _0xabf9b8['_hasSymbolPropertyOnItsPath'],delete _0xabf9b8[_0x112e95(0x255)],delete _0xabf9b8[_0x112e95(0x1f4)];}[_0x48a4d6(0x1e0)](_0x269daa,_0xb12718){}}let _0x946099=new _0x3cd7a9(),_0x5a6b29={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5522e8={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x574fde(_0x14c2a1,_0x168ac9,_0x3d9728,_0x1e1214,_0x372384,_0x4e2435){var _0x4c01d0=_0x48a4d6;let _0x5a21b2,_0x3edba8;try{_0x3edba8=_0x29b2e0(),_0x5a21b2=_0x32f390[_0x168ac9],!_0x5a21b2||_0x3edba8-_0x5a21b2['ts']>0x1f4&&_0x5a21b2['count']&&_0x5a21b2[_0x4c01d0(0x167)]/_0x5a21b2[_0x4c01d0(0x23c)]<0x64?(_0x32f390[_0x168ac9]=_0x5a21b2={'count':0x0,'time':0x0,'ts':_0x3edba8},_0x32f390[_0x4c01d0(0x1d5)]={}):_0x3edba8-_0x32f390[_0x4c01d0(0x1d5)]['ts']>0x32&&_0x32f390[_0x4c01d0(0x1d5)]['count']&&_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]/_0x32f390['hits'][_0x4c01d0(0x23c)]<0x64&&(_0x32f390[_0x4c01d0(0x1d5)]={});let _0x3bc375=[],_0x33f013=_0x5a21b2[_0x4c01d0(0x1be)]||_0x32f390[_0x4c01d0(0x1d5)]['reduceLimits']?_0x5522e8:_0x5a6b29,_0x3bdc83=_0x54adde=>{var _0x209541=_0x4c01d0;let _0x5a4229={};return _0x5a4229[_0x209541(0x193)]=_0x54adde[_0x209541(0x193)],_0x5a4229['elements']=_0x54adde[_0x209541(0x162)],_0x5a4229['strLength']=_0x54adde[_0x209541(0x1a8)],_0x5a4229[_0x209541(0x228)]=_0x54adde[_0x209541(0x228)],_0x5a4229['autoExpandLimit']=_0x54adde['autoExpandLimit'],_0x5a4229[_0x209541(0x211)]=_0x54adde[_0x209541(0x211)],_0x5a4229['sortProps']=!0x1,_0x5a4229[_0x209541(0x182)]=!_0x469026,_0x5a4229[_0x209541(0x160)]=0x1,_0x5a4229[_0x209541(0x1ab)]=0x0,_0x5a4229[_0x209541(0x229)]=_0x209541(0x177),_0x5a4229['rootExpression']=_0x209541(0x234),_0x5a4229[_0x209541(0x1c8)]=!0x0,_0x5a4229['autoExpandPreviousObjects']=[],_0x5a4229[_0x209541(0x16e)]=0x0,_0x5a4229[_0x209541(0x19d)]=!0x0,_0x5a4229['allStrLength']=0x0,_0x5a4229[_0x209541(0x199)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5a4229;};for(var _0x17c8df=0x0;_0x17c8df<_0x372384[_0x4c01d0(0x256)];_0x17c8df++)_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'timeNode':_0x14c2a1==='time'||void 0x0},_0x372384[_0x17c8df],_0x3bdc83(_0x33f013),{}));if(_0x14c2a1==='trace'){let _0x25e4e2=Error[_0x4c01d0(0x1cd)];try{Error[_0x4c01d0(0x1cd)]=0x1/0x0,_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'stackNode':!0x0},new Error()[_0x4c01d0(0x1e1)],_0x3bdc83(_0x33f013),{'strLength':0x1/0x0}));}finally{Error[_0x4c01d0(0x1cd)]=_0x25e4e2;}}return{'method':_0x4c01d0(0x1a6),'version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':_0x3bc375,'id':_0x168ac9,'context':_0x4e2435}]};}catch(_0x3b9703){return{'method':'log','version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':[{'type':'unknown','error':_0x3b9703&&_0x3b9703['message']}],'id':_0x168ac9,'context':_0x4e2435}]};}finally{try{if(_0x5a21b2&&_0x3edba8){let _0x5d1e94=_0x29b2e0();_0x5a21b2['count']++,_0x5a21b2['time']+=_0x267971(_0x3edba8,_0x5d1e94),_0x5a21b2['ts']=_0x5d1e94,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]++,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]+=_0x267971(_0x3edba8,_0x5d1e94),_0x32f390['hits']['ts']=_0x5d1e94,(_0x5a21b2['count']>0x32||_0x5a21b2[_0x4c01d0(0x167)]>0x64)&&(_0x5a21b2[_0x4c01d0(0x1be)]=!0x0),(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]>0x3e8||_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]>0x12c)&&(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x1be)]=!0x0);}}catch{}}}return _0x574fde;}((_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5ee3c2,_0x122092,_0x1d7929,_0x43984e,_0x5a70b1,_0x5f4168)=>{var _0x8af81c=_0x9d4878;if(_0x64dc38[_0x8af81c(0x1ef)])return _0x64dc38[_0x8af81c(0x1ef)];if(!H(_0x64dc38,_0x1d7929,_0x4cf6e3))return _0x64dc38['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x64dc38[_0x8af81c(0x1ef)];let _0x2907ad=b(_0x64dc38),_0x10052f=_0x2907ad[_0x8af81c(0x20c)],_0x1e6da0=_0x2907ad[_0x8af81c(0x253)],_0x44a8b7=_0x2907ad[_0x8af81c(0x22f)],_0xdc9ed={'hits':{},'ts':{}},_0x5e3ee9=X(_0x64dc38,_0x43984e,_0xdc9ed,_0x5ee3c2),_0x5e4ade=_0x304e2f=>{_0xdc9ed['ts'][_0x304e2f]=_0x1e6da0();},_0x56ef43=(_0x1314e3,_0x88bf94)=>{var _0x45434e=_0x8af81c;let _0xa765d2=_0xdc9ed['ts'][_0x88bf94];if(delete _0xdc9ed['ts'][_0x88bf94],_0xa765d2){let _0xfb9508=_0x10052f(_0xa765d2,_0x1e6da0());_0x16af11(_0x5e3ee9(_0x45434e(0x167),_0x1314e3,_0x44a8b7(),_0x33a203,[_0xfb9508],_0x88bf94));}},_0x36769f=_0x421346=>{var _0xab90ed=_0x8af81c,_0xa6990e;return _0x4cf6e3===_0xab90ed(0x1fb)&&_0x64dc38[_0xab90ed(0x175)]&&((_0xa6990e=_0x421346==null?void 0x0:_0x421346[_0xab90ed(0x246)])==null?void 0x0:_0xa6990e['length'])&&(_0x421346[_0xab90ed(0x246)][0x0][_0xab90ed(0x175)]=_0x64dc38[_0xab90ed(0x175)]),_0x421346;};_0x64dc38[_0x8af81c(0x1ef)]={'consoleLog':(_0x29d71f,_0x3dec54)=>{var _0x2a382d=_0x8af81c;_0x64dc38[_0x2a382d(0x1e6)]['log'][_0x2a382d(0x1c7)]!==_0x2a382d(0x1f7)&&_0x16af11(_0x5e3ee9('log',_0x29d71f,_0x44a8b7(),_0x33a203,_0x3dec54));},'consoleTrace':(_0x26df15,_0x6fd449)=>{var _0x143c31=_0x8af81c;_0x64dc38['console']['log'][_0x143c31(0x1c7)]!==_0x143c31(0x251)&&_0x16af11(_0x36769f(_0x5e3ee9('trace',_0x26df15,_0x44a8b7(),_0x33a203,_0x6fd449)));},'consoleTime':_0x3a6211=>{_0x5e4ade(_0x3a6211);},'consoleTimeEnd':(_0x3cfb15,_0x1295a8)=>{_0x56ef43(_0x1295a8,_0x3cfb15);},'autoLog':(_0x50cf13,_0x1117fc)=>{var _0x5c1e1b=_0x8af81c;_0x16af11(_0x5e3ee9(_0x5c1e1b(0x1a6),_0x1117fc,_0x44a8b7(),_0x33a203,[_0x50cf13]));},'autoLogMany':(_0x18e694,_0x221fd9)=>{_0x16af11(_0x5e3ee9('log',_0x18e694,_0x44a8b7(),_0x33a203,_0x221fd9));},'autoTrace':(_0x1edc5d,_0x34e8cc)=>{var _0x23d3c0=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x23d3c0(0x227),_0x34e8cc,_0x44a8b7(),_0x33a203,[_0x1edc5d])));},'autoTraceMany':(_0x75d9b4,_0x6a58b2)=>{var _0x22e692=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x22e692(0x227),_0x75d9b4,_0x44a8b7(),_0x33a203,_0x6a58b2)));},'autoTime':(_0x4c1a9a,_0x49cdda,_0xcb7416)=>{_0x5e4ade(_0xcb7416);},'autoTimeEnd':(_0x513752,_0x2d9a88,_0x25f4ae)=>{_0x56ef43(_0x2d9a88,_0x25f4ae);},'coverage':_0x15bad9=>{_0x16af11({'method':'coverage','version':_0x5ee3c2,'args':[{'id':_0x15bad9}]});}};let _0x16af11=q(_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5a70b1,_0x5f4168),_0x33a203=_0x64dc38[_0x8af81c(0x247)];return _0x64dc38['_console_ninja'];})(globalThis,_0x9d4878(0x217),_0x9d4878(0x1c1),_0x9d4878(0x205),_0x9d4878(0x1d7),_0x9d4878(0x237),_0x9d4878(0x233),_0x9d4878(0x22a),_0x9d4878(0x15e),_0x9d4878(0x1ca),_0x9d4878(0x1e5));");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/progress-form.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyProgressForm: () => (/* reexport safe */ _lazy_progress_form__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   ProgressForm: () => (/* reexport safe */ _default_progress_form__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _default_progress_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-progress-form */ "./src/default-progress-form.ts");
/* harmony import */ var _lazy_progress_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy-progress-form */ "./src/lazy-progress-form.ts");



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=progress-form.js.map