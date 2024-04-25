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


var fieldSetElement = null;
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
      var prevIndex = this.isLazyRun ? this.lazyFieldsetLength : fieldSets.length;
      var prevTranslateX = 0;
      this.fieldsetLength = this.lastIndex = this.isLazyRun ? this.lazyFieldsetLength : fieldSets.length;
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
      if (fieldSets && !this.isLazyRun && fieldSets.length > 1) {
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
          fieldSetElement = fieldSet;
          fieldSet.classList.add("fieldset".concat(i));
          if (i === 0) {
            var fields = fieldSet.querySelectorAll("input:not([type='hidden'],[readonly]), textarea");
            if (fields && fields.length > 0) fields[i].focus();
            _this.compartmentalizeFocusInFieldset(fieldSetElement);
          }
          _this.progressingData["fieldset".concat(i)] = {
            '@i': i,
            '@translateX': i === 0 ? 0 : i === 1 ? translateX : nextTranslateX - translateX,
            '@progress': PROGRESS * (i + 1),
            '@target': fieldSetElement,
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
            (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_1__.getFocusableElements)(fieldSetElement);
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
     * 
     * @param fieldsetLength 
     * @param params The parameters of the form.
     * @param styleOptions Style options for the form, fieldsets and fieldsets parent elements.
     */
  }, {
    key: "lazyRun",
    value: function lazyRun(fieldsetLength, progressOptions, styleOptions) {
      var _progressOptions$targ2;
      this.isLazyRun = true;
      this.lazyFieldsetLength = fieldsetLength;
      var _this$init2 = this.init(progressOptions),
        fieldSets = _this$init2.fieldSets,
        nextIndex = _this$init2.nextIndex,
        prevTranslateX = _this$init2.prevTranslateX,
        PROGRESS = _this$init2.PROGRESS,
        progressElement = _this$init2.progressElement;
      var translateX = this.translateX - this.fieldsetMarginWidth / this.fieldsetLength;
      var targetMarginWidth = progressOptions ? (_progressOptions$targ2 = progressOptions.targetMarginWidth) !== null && _progressOptions$targ2 !== void 0 ? _progressOptions$targ2 : 0 : 0;
      for (var i = 0; i < this.lazyFieldsetLength; i++) {
        var fieldSet = i === 0 ? document.querySelector("fieldset") : null;
        var nextButton = fieldSet === null || fieldSet === void 0 ? void 0 : fieldSet.querySelector("[__next__]");
        var nextTranslateX = translateX * nextIndex - targetMarginWidth;
        prevTranslateX = translateX * nextIndex + Math.abs(translateX * 2);
        var nextProgress = PROGRESS * (i + 2);
        var prevProgress = i > 1 ? PROGRESS * i : PROGRESS;
        fieldSetElement = fieldSet;
        if (fieldSet) {
          fieldSet.classList.add("fieldset0");
          fieldSet.focus();
          this.compartmentalizeFocusInFieldset(fieldSet);
        }
        this.progressingData["fieldset".concat(i)] = {
          '@i': i,
          '@translateX': i === 0 ? 0 : i === 1 ? translateX : nextTranslateX - translateX,
          '@progress': PROGRESS * (i + 1),
          '@target': fieldSetElement,
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
          fieldSetElement = document.querySelector(".fieldset".concat(nextIndex));
          if (fieldSetElement) {
            _this2.compartmentalizeFocusInFieldset(fieldSetElement);
            (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_1__.getFocusableElements)(fieldSetElement);
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
          if (this.isLazyRun) {
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
        fieldSetElement = _this3.form.querySelector(".fieldset".concat(prevIndex));
        if (fieldSetElement) {
          _this3.compartmentalizeFocusInFieldset(fieldSetElement);
          (0,_scripts_focus_in_block__WEBPACK_IMPORTED_MODULE_1__.getFocusableElements)(fieldSetElement);
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
          if (this.isLazyRun) {
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

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=progress-form.js.map