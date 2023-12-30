(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("flash", [], factory);
	else if(typeof exports === 'object')
		exports["flash"] = factory();
	else
		root["flash"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash-style.scss":
/*!*******************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash-style.scss ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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

/***/ "./src/assets/scss/flash-style.scss":
/*!******************************************!*\
  !*** ./src/assets/scss/flash-style.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./flash-style.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash-style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
const flash_runner_1 = __importDefault(__webpack_require__(/*! ./scripts/flash-runner */ "./src/scripts/flash-runner.ts"));
__webpack_require__(/*! ./assets/scss/flash-style.scss */ "./src/assets/scss/flash-style.scss");
class FormatParamsToObject {
    constructor(params) {
        this.properties = {};
        this.properties = {};
        if (FormatParamsToObject.ACCEPTED_PARAMS.length > 0) {
            FormatParamsToObject.ACCEPTED_PARAMS.forEach(key => {
                if (params.hasOwnProperty(key)) {
                    Object.assign(this.properties, { [key]: params[key] });
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
    "container", "icon", "onClickClose", "autoHide",
    "delayAutoHide", "destroyOnHide", "zIndex",
    "animationIn", "animationOut",
];
class Flash {
    /**
    * Ajoute un message Flash avec les options spécifiées.
    * @param params - Les options du message Flash sous form d'objet {cle : valeur}.
    * Les clés disponibles sont:
    *   * message
    *   * flashbox
    *   * type
    *   * duration
    *   * title
    *   * icon
    *   * closeButton
    * @returns - L'instance de la classe Flash.
    */
    addFlash(params) {
        var _a;
        let properties = new FormatParamsToObject(params).getProperties();
        let flash = Flash.create(properties['duration'], properties['type']);
        this.show({
            message: properties['message'],
            flashBox: flash,
            container: properties['container'],
            type: properties['type'],
            duration: properties['duration'],
            title: properties['title'],
            icon: properties['icon'],
            closeButton: (_a = properties['closeButton']) !== null && _a !== void 0 ? _a : false,
        });
        return this;
    }
    /**
     * Affiche un message Flash avec les options spécifiées.
     * @param params - Les options du message Flash ou le sélecteur de l'élément Flash existant.
     * @param container - Le conteneur dans lequel afficher le message Flash (facultatif).
     * @returns - L'instance de la classe Flash.
     */
    show(params, container) {
        let flashBox;
        let datas;
        switch (typeof params) {
            case 'string':
                flashBox = utils_1.default.$$(params);
                break;
            default:
                let __params = params;
                datas = {
                    message: __params['message'],
                    container: __params['container'],
                    icon: __params['icon'],
                    duration: __params['duration'],
                    type: __params['type'],
                    flashBox: __params['flashBox'],
                    title: __params['title'],
                    closeButton: __params['closeButton']
                };
                break;
        }
        if (flashBox && flashBox instanceof HTMLElement) {
            const message = flashBox.innerText;
            const icon = flashBox.getAttribute("icon");
            const closeButton = flashBox.getAttribute("closeButton");
            const template = this.flashHTMLModel({ message: message, icon: icon, closeButton: closeButton });
            flashBox.appendChild(template);
            let flashRunner = new flash_runner_1.default(flashBox, container);
            flashRunner.open();
        }
        else if (datas) {
            const { message, icon, container, closeButton, flashBox, title, type } = datas;
            flashBox.innerHTML = this.flashHTMLModel({
                title: title,
                type: type,
                message: message,
                icon: icon,
                closeButton: closeButton
            });
            let flashRunner = new flash_runner_1.default(flashBox, container);
            flashRunner.open();
        }
        return this;
    }
    /**
     * Retourne le modèle HTML pour le message Flash.
     * @param properties - Les propriétés du message Flash.
     * @returns - Le modèle HTML du message Flash.
     */
    flashHTMLModel(properties, template) {
        let setIcon;
        let button;
        let _template;
        switch (template) {
            case 1:
                (true === Boolean(properties.closeButton)) ?
                    button = `<svg close-modal><use xlink:href='/svg/alert.svg#close-modal'></use></svg>` :
                    button = '';
                ('null' != properties.icon) ?
                    setIcon = `<h6><svg><use xlink:href='/svg/alert.svg#${properties.icon}'></use></svg></h6>` :
                    setIcon = '';
                _template = `<span class="alert-header">
                        <h6>${properties.title}</h6>
                        ${button}
                    </span>
                    <span class="alert-content">
                        ${setIcon}
                        <h6 class="text">${properties.message}</h6>
                    </span>`;
            default:
                (true === Boolean(properties.closeButton)) ?
                    button = `<span class="flash-header"><div id="flash-close-button"></div></span>` :
                    button = '';
                _template = `${button}
                    <span class="flash-content">
                    <svg><use xlink:href="/${properties.icon}"></use></svg>
                    <h6 class="flash-message">
                        ${properties.message}
                    </h6>
                    </span>`;
        }
        return utils_1.default.textToHTMLElement(_template);
    }
    /**
     * Crée un élément Flash avec les options spécifiées.
     * @param duration - La durée d'affichage du message Flash (facultatif).
     * @param type - Le type de message Flash (facultatif).
     * @returns - L'élément Flash créé.
     * @private
     */
    static create(duration, type) {
        let lastFlashBox = utils_1.default.$$('.flash-box');
        if (lastFlashBox) {
            lastFlashBox.remove();
        }
        (undefined != type) ?
            type = "flashtype-" + type :
            type = "";
        let flashBox = document.createElement('flash');
        flashBox.setAttribute('class', `flash-box ${type}`);
        if (undefined !== duration && duration > 0) {
            flashBox.setAttribute('duration', `${duration}`);
        }
        return flashBox;
    }
}
exports["default"] = Flash;


/***/ }),

/***/ "./src/scripts/flash-runner.ts":
/*!*************************************!*\
  !*** ./src/scripts/flash-runner.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
const animation_1 = __importDefault(__webpack_require__(/*! @easylibs/animation */ "../animation/dist/animation.js"));
class FlashRunner {
    /**
     * Cette classe  encapsule la logique liée à la manipulation des modals,
     * y compris leur ouverture, leur fermeture, la gestion de l'audio, de la durée et de l'animation.
     * Elle fournit une interface simple pour interagir avec les modals
     * @param modal L'élément modal à manipuler.
     * @param container Le conteneur dans lequel insérer la modal (optionnel).
     * @param animation Les options d'animation de la modal (optionnel).
     */
    constructor(modal, container, animation = { type: 'fade', position: 'top' }) {
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
        this.modal = modal;
        this.audio = modal.getAttribute('audio');
        this.volume = parseInt(modal.getAttribute('volume') || '1', 10);
        this.duration = parseInt(modal.getAttribute('duration') || "0", 10);
        modal.setAttribute('aria-hidden', 'true');
        this.container = container;
        this.animation = animation;
        this.closeButton;
        this.openButton;
        this.autoClose();
    }
    /**
     * Méthode pour ouvrir la modal.
     */
    open() {
        var _a;
        if (this.audio) {
            const audio = utils_1.default.setAudio(this.audio);
            audio.volume = this.volume;
            audio.play();
        }
        const animation = new animation_1.default();
        const modal = this.modal;
        animation.animeIn({ element: modal, animation: this.animation, display: 'flex' });
        const container = this.container;
        if (undefined !== container) {
            container.insertBefore(modal, container.firstChild);
            this.clearProperties(this.modal);
        }
        else {
            document.body.insertBefore(modal, document.body.firstChild);
            this.clearProperties(this.modal);
        }
        modal.setAttribute('aria-hidden', 'false');
        modal.setAttribute('aria-labelledby', 'flash');
        this.closeButton = modal.querySelector('#flash-close-button');
        (_a = this.closeButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.close);
    }
    /**
     * Méthode interne pour nettoyer les attributs de la modal.
     * @param modal L'élément modal à nettoyer.
     */
    clearProperties(modal) {
        document.addEventListener('DOMContentLoaded', function () {
            modal.removeAttribute('duration');
            modal.removeAttribute('icon');
            modal.removeAttribute('audio');
            modal.removeAttribute('volume');
            modal.removeAttribute('container');
            modal.removeAttribute('closeButton');
        });
    }
}
exports["default"] = FlashRunner;


/***/ }),

/***/ "../animation/dist/animation.js":
/*!**************************************!*\
  !*** ../animation/dist/animation.js ***!
  \**************************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(self, () => {
  return /******/(() => {
    // webpackBootstrap
    /******/
    "use strict";

    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
    (() => {
      var exports = __nested_webpack_exports__;
      /*!**************************!*\
        !*** ./src/animation.ts ***!
        \**************************/

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      class Animation {
        static stopPropagation(e) {
          e.stopPropagation();
        }
        /**
        * Effectue une animation de commutation sur un élément HTML spécifié.
        * @param element - L'élément HTML sur lequel l'animation doit être appliquée.
        * @param fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa.
        * @param animation - Les informations sur le type et la position de l'animation (facultatif).
        */
        switchAnimation(element, fromInToOut, animation) {
          var _a, _b;
          if (animation !== undefined) {
            const animeType = (_a = animation.type) !== null && _a !== void 0 ? _a : "fade";
            const animePosition = (_b = animation.position) !== null && _b !== void 0 ? _b : "top";
            const {
              clearAfterApplying
            } = animation;
            if (fromInToOut) {
              element.classList.remove(`${animeType}-out-${animePosition}`);
              element.classList.add(`${animeType}-in-${animePosition}`);
              if (clearAfterApplying && clearAfterApplying === true) {
                setTimeout(() => {
                  element.classList.remove(`${animeType}-in-${animePosition}`);
                }, 1000);
              }
            } else {
              element.classList.remove(`${animeType}-in-${animePosition}`);
              element.classList.add(`${animeType}-out-${animePosition}`);
              if (clearAfterApplying && clearAfterApplying === true) {
                setTimeout(() => {
                  element.classList.remove(`${animeType}-out-${animePosition}`);
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
        animeIn(options) {
          var _a, _b;
          const fromInToOut = (_a = options.fromInToOut) !== null && _a !== void 0 ? _a : true;
          const {
            animation
          } = options;
          const _element = options.element;
          const animateElement = _element instanceof HTMLElement ? undefined : _element === null || _element === void 0 ? void 0 : _element.animateElement;
          const element = _element instanceof HTMLElement ? _element : _element === null || _element === void 0 ? void 0 : _element.element;
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
        animeOut(options) {
          var _a;
          const {
            animation
          } = options;
          const _element = options.element;
          const animateElement = _element instanceof HTMLElement ? undefined : _element === null || _element === void 0 ? void 0 : _element.animateElement;
          const element = _element instanceof HTMLElement ? _element : _element === null || _element === void 0 ? void 0 : _element.element;
          const fromInToOut = (_a = options.fromInToOut) !== null && _a !== void 0 ? _a : false;
          const {
            display,
            delay,
            closeButton
          } = options;
          if (element && fromInToOut !== undefined) {
            if (display) {
              if (closeButton) {
                closeButton.addEventListener("click", () => {
                  this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                  setTimeout(() => {
                    element.style.display = "none";
                  }, delay || 0);
                });
              }
              this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
              setTimeout(() => {
                element.style.display = "none";
              }, delay || 0);
            } else {
              if (closeButton) {
                closeButton.addEventListener("click", () => {
                  this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                  setTimeout(() => {
                    element.remove();
                  }, delay || 0);
                });
              }
              this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
              setTimeout(() => {
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
        animeInOut(options) {
          var _a, _b;
          let modalIsOpen = false;
          const {
            element,
            openButton,
            closeButton,
            animation
          } = options;
          const display = (_a = options.display) !== null && _a !== void 0 ? _a : "block";
          const {
            dispatchCloseEvent
          } = options;
          const delay = (_b = options.delay) !== null && _b !== void 0 ? _b : 350;
          try {
            if (openButton) {
              openButton.addEventListener("click", () => {
                if (!modalIsOpen) {
                  modalIsOpen = true;
                  this.animeIn({
                    element,
                    animation,
                    display
                  });
                } else {
                  modalIsOpen = false;
                  this.animeOut({
                    element,
                    animation,
                    display,
                    delay
                  });
                }
              });
            }
            if (closeButton !== undefined && !modalIsOpen) {
              closeButton.addEventListener("click", () => {
                modalIsOpen = false;
                this.animeOut({
                  element,
                  animation,
                  display,
                  delay
                });
              });
              if (dispatchCloseEvent && dispatchCloseEvent.value === true) {
                const dispElement = dispatchCloseEvent.key;
                document.addEventListener("click", event => {
                  const eventTarget = event.target;
                  if (openButton && closeButton && !openButton.contains(eventTarget) && !closeButton.contains(eventTarget) && !dispElement.contains(eventTarget)) {
                    modalIsOpen = false;
                    this.animeOut({
                      element,
                      animation,
                      display,
                      delay
                    });
                  }
                });
                dispElement.addEventListener("click", Animation.stopPropagation);
              }
              return;
            }
            if (closeButton === undefined && !modalIsOpen && dispatchCloseEvent) {
              if (dispatchCloseEvent.value === true) {
                const animateElement = element instanceof HTMLElement ? undefined : element === null || element === void 0 ? void 0 : element.animateElement;
                const _element = element instanceof HTMLElement ? element : element === null || element === void 0 ? void 0 : element.element;
                document.addEventListener("click", event => {
                  const eventTarget = event.target;
                  if (openButton && _element && !openButton.contains(eventTarget) && !_element.contains(eventTarget)) {
                    modalIsOpen = false;
                    this.animeOut({
                      element,
                      animation,
                      display,
                      delay
                    });
                  }
                });
                if (_element) {
                  _element.addEventListener("click", Animation.stopPropagation);
                }
              } else {
                const dispElement = dispatchCloseEvent.key;
                document.addEventListener("click", event => {
                  const eventTarget = event.target;
                  if (openButton && !openButton.contains(eventTarget) && !dispElement.contains(eventTarget)) {
                    modalIsOpen = false;
                    this.animeOut({
                      element,
                      animation,
                      display,
                      delay
                    });
                  }
                });
                dispElement.addEventListener("click", Animation.stopPropagation);
              }
            }
          } catch (error) {
            throw new Error("HTMLElement null or undefined.");
          }
        }
      }
      exports["default"] = Animation;
    })();

    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

/***/ }),

/***/ "../utils/dist/utils.js":
/*!******************************!*\
  !*** ../utils/dist/utils.js ***!
  \******************************/
/***/ ((module) => {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(self, () => {
  return /******/(() => {
    // webpackBootstrap
    /******/
    "use strict";

    var __nested_webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
    (() => {
      var exports = __nested_webpack_exports__;
      /*!**********************!*\
        !*** ./src/utils.ts ***!
        \**********************/

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      class Utils {
        /**
         * Crée un élément audio avec la source audio spécifiée par le chemin audioPath.
         * @param audioPath Le chemin de la source audio.
         * @param classname La classe CSS à ajouter à l'élément audio (optionnel).
         * @returns L'élément audio créé.
         */
        static setAudio(audioPath, classname = null) {
          const audio = document.createElement('audio');
          if (classname != null) {
            audio.classList.add(classname);
          }
          const source = document.createElement('source');
          source.src = this.resolvePath(audioPath);
          source.type = "audio/mpeg";
          audio.appendChild(source);
          return audio;
        }
        static textToHTMLElement(textHtml, targetName = "div", children = false) {
          const target = document.createElement(`${targetName}`);
          target.innerHTML = textHtml;
          if (true === children) {
            return target.children;
          }
          return target.firstElementChild;
        }
        /**
         * retourne un élément du dom
         */
        static $$(element) {
          if (element instanceof HTMLElement || element instanceof HTMLCollection) {
            return element;
          } else if (typeof element === 'string') {
            const collection = document.querySelectorAll(`${element}`);
            const el = document.querySelector(`${element}`);
            if (collection !== null && collection.length > 1) {
              return collection;
            }
            if (el !== null) {
              return el;
            }
          } else {
            throw new Error("Type of element is not supported");
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
        static processNodes(nodeList, callback = (node, index) => {}) {
          if (nodeList instanceof NodeList || Array.isArray(nodeList)) {
            return Array.from(nodeList).forEach((node, i) => {
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
        static getRegexp(type) {
          switch (type) {
            case 'email':
              return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
            case 'phone-number':
              return new RegExp(/^(0|\\+[1-9]{1,3})[0-9 ]+$/);
            case 'number':
              return new RegExp(/^[0-9]+$/);
            case 'strong-password':
              return new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
            case 'url':
              return new RegExp(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/);
            case 'default-text':
              return new RegExp(/^[a-zA-Z -'áàâäãåçéèêëğíìîïıñóòôöõúùûüşýÿæœÁÀÂÄÃÅÇÉÈÊËĞÍÌÎÏIÑÓÒÔÖÕÚÙÛÜŞÝŸÆŒ]+$/);
            case 'fr-text':
              return new RegExp(/^[A-Za-z' - àâçéèêëûæœÀÂÉÈÊËÆŒ]+$/);
            case 'en-text':
              return new RegExp(/^[a-zA-Z '-]{1,40}$/);
            case 'tr-text':
              return new RegExp(/^[A-Za-z çğıöüşæœÇĞIÖÜŞ]+$/);
            default:
              throw new Error('Type d\'expression régulière non pris en charge.');
          }
        }
        /**
         * Résout le chemin d'une ressource en fonction de l'environnement d'exécution.
         * @param path Le chemin de la ressource.
         * @returns Le chemin résolu de la ressource.
         */
        static resolvePath(path) {
          const PROJECT_NAME = window.location.pathname.split("/")[1];
          const ORIGIN = window.location.origin;
          const PORT = window.location.port;
          const HOST = window.location.host;
          let _stylesheetsoutdir_;
          if (HOST == "localhost") {
            return _stylesheetsoutdir_ = ORIGIN + `/${PROJECT_NAME}/${path}`;
          } else if (HOST !== "localhost" && PORT !== "") {
            return _stylesheetsoutdir_ = ORIGIN + `/${path}`;
          } else {
            return _stylesheetsoutdir_ = ORIGIN + `/${path}`;
          }
        }
        /**
         * Crée une couche superfielle au dessus d'un élément html afin d'empecher tout évènement.
         * @param tag Le nom de la balise HTML à utiliser comme couche (par défaut : 'td', idéal pour les tableau html).
         * @param backgroundColor La couleur d'arrière-plan de la zone interdite (par défaut : '#FFFFFF').
         * @returns Un élément HTML représentant une zone interdite.
         */
        static forbiddener(tag = 'td', backgroundColor) {
          let forbiddenTag = document.createElement(tag);
          forbiddenTag.setAttribute('class', 'forbidden');
          const style = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: '.7',
            zIndex: '10',
            backgroundColor: backgroundColor ? backgroundColor : '#FFFFFF'
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
        static reduceText(text, maxLength = 14) {
          text = typeof text === "string" ? text.trim() : "";
          if (text.length > maxLength) {
            return `${text.substring(0, maxLength)}...`;
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
        static changeInputTextTypeToNumberType(attr, limit, priceType = false, decimal) {
          this.processNodes(this.$$(attr), function (element) {
            let input = element;
            if (input) {
              input.addEventListener("input", function () {
                const regExp = priceType ? /^[0-9]+([.,][0-9]+)?$/ : /[^\d]/g;
                if (decimal) {
                  const getValue = input.value.replace(regExp, "");
                  input.value = `${parseFloat(getValue).toFixed(decimal)}`;
                } else {
                  input.value = input.value.replace(regExp, "");
                }
                if (limit && parseInt(input.value) > limit) {
                  input.value = `${limit}`;
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
        static disablor(tag = "td", target, trigger, backgroundColor) {
          const buttons = document.querySelectorAll("[disablor],[self-disablor]");
          try {
            if (!trigger && !buttons) {
              throw new Error("Aucun bouton avec l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
            }
            this.processNodes(buttons, button => {
              button.addEventListener("click", () => {
                const self = button.hasAttribute("self-disablor");
                let item = self ? button : button.closest("[disablor]");
                if (!target && !item) {
                  throw new Error("Aucun élément à désactiver contenant l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
                }
                if (item) {
                  item.style.position = "relative";
                  item.insertBefore(this.forbiddener(tag, backgroundColor), item.firstChild);
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
        static setAsteriskToRequiredField() {
          const asterisk = `<svg class="required-svg">
        <use xlink:href="../asset/icon.svg#asterisk"></use>
        </svg>`;
          const labels = document.querySelectorAll("label[required-field]");
          if (labels) {
            this.processNodes(labels, node => {
              const rang = document.createRange();
              const fragment = rang.createContextualFragment(asterisk);
              node.appendChild(fragment);
            });
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
        static hasKeyWithNameSubstring(object, substring, getKey) {
          for (let key in object) {
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
        static findObjectDataByKeyName(object, keyOrShorKey, key) {
          Object.keys(object).forEach(key => {
            if (key.includes(keyOrShorKey)) {
              return object[key];
            }
          });
          return false;
        }
        static findChar(string, limit, returnBool = false) {
          for (let i = 0; i <= limit; i++) {
            const index = string.indexOf(i.toString());
            if (index !== -1) {
              return returnBool ? true : i.toString();
            }
          }
          return returnBool ? false : null;
        }
        static findComputedStyle(element, property) {
          const styles = window.getComputedStyle(element);
          const propertiesObject = {};
          try {
            if (!element) {
              throw new Error("Element not found");
            }
            if (!property) {
              throw new Error("Property is required");
            }
            if (Array.isArray(property) && property.length > 0) {
              property.forEach(props => {
                propertiesObject[`${props}`] = styles.getPropertyValue(`${props}`);
              });
              return propertiesObject;
            }
            if (typeof property === "string") {
              return styles.getPropertyValue(`${property}`);
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
        static escape(str) {
          if (!str) {
            return "";
          }
          const div = document.createElement("div");
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
        static findHTMLElementBy(referent, target) {
          let currentElement = referent;
          if (currentElement) {
            while (currentElement = currentElement.previousElementSibling) {
              const charCounterSpan = currentElement.querySelector(target);
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
        static formatHTMLAttributes(attributes) {
          let attrs = "";
          if (attributes) {
            for (const [key, value] of Object.entries(attributes)) {
              if (key) {
                attrs += `${key}='${value}'`;
              }
            }
          }
          return attrs.trim();
        }
      }
      exports["default"] = Utils;
    })();

    /******/
    return __nested_webpack_exports__;
    /******/
  })();
});

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/flash.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=flash.js.map