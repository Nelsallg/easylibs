(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("iflash", [], factory);
	else if(typeof exports === 'object')
		exports["iflash"] = factory();
	else
		root["iflash"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/icon.ts":
/*!*****************************!*\
  !*** ./src/scripts/icon.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SVG = void 0;
/**
 * Renvoie une représentation SVG sous forme de chaîne de caractères.
 *
 * @param iconName - Le nom de l'icône à utiliser. Les noms valides sont : "success", "error", "warning", "info" et "close-modal".
 * @param iconPath - Le chemin vers le fichier SVG contenant les icônes.
 * @param attributes - Les attributs supplémentaires à ajouter à l'élément SVG (facultatif).
 * @returns La représentation SVG sous forme de chaîne de caractères.
 */
function SVG(iconName, iconPath, attributes) {
    let name = ["success", "error", "warning", "info", 'close-modal'];
    let content = "";
    if (undefined !== iconName && name.indexOf(iconName) >= 0) {
        content = `<svg ${attributes}><use xlink:href="${iconPath}#${iconName}" id="flash-close-button"></use></svg>`;
    }
    else {
        content = iconName;
    }
    return content;
}
exports.SVG = SVG;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./src/scripts/iflash.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.flashHTMLModel = void 0;
const icon_1 = __webpack_require__(/*! ./icon */ "./src/scripts/icon.ts");
class flashHTMLModel {
    constructor(message, title, icon, type) {
        this.message = message;
        this.title = title;
        this.icon = icon;
        this.type = type;
    }
    static parent() {
        let title = flashHTMLModel.setTitle(this.title);
        let icon = flashHTMLModel.setIcon(this.icon);
        let type = flashHTMLModel.setType(this.type);
        if ((false === title || undefined === title) && false === flashHTMLModel.closeButton) {
            flashHTMLModel.hasHeader = false;
        }
        if (undefined !== type || "" !== icon) {
            flashHTMLModel.hasFlashIcon = true;
        }
        return `${flashHTMLModel.hasHeader ? "<span class='flash-header'>" : ""}
                ${typeof title == "string" ? "<h6>" + title + "</h6>" : ""}
                ${flashHTMLModel.closeButton ? (0, icon_1.SVG)('close-modal', 'iconPath') : ""}
            ${flashHTMLModel.hasHeader ? "</span>" : ""}
            <span class="flash-content">
                ${flashHTMLModel.hasFlashIcon ? "<h6>" + icon + "</h6>" : ""}
                <h6 class="flash-message">
                    ${this.message}
                </h6>
            </span>`;
    }
    getMessage() {
        return this.message;
    }
    static setMessage(message) {
        if (undefined !== message) {
            return this.message = message;
        }
        return flashHTMLModel.message;
    }
    getType() {
        var _a;
        return (_a = this.type) !== null && _a !== void 0 ? _a : "";
    }
    static setType(type) {
        if (undefined !== type) {
            return this.type = type;
        }
        return flashHTMLModel.type;
    }
    getTitle() {
        var _a;
        return (_a = this.title) !== null && _a !== void 0 ? _a : "";
    }
    static setTitle(title) {
        if (undefined === title || true === title) {
            return this.title = flashHTMLModel.type;
        }
        if (typeof title == "string") {
            return this.title = title;
        }
        return "";
    }
    getIcon() {
        var _a;
        return (_a = this.icon) !== null && _a !== void 0 ? _a : "";
    }
    static setIcon(icon) {
        if (true === icon && undefined === flashHTMLModel.type) {
            return this.icon = (0, icon_1.SVG)("success", 'iconPath');
        }
        if (true === icon && undefined !== flashHTMLModel.type) {
            return this.icon = (0, icon_1.SVG)(flashHTMLModel.type, 'iconPath');
        }
        if (typeof icon == "string") {
            return this.icon = (0, icon_1.SVG)(icon, 'iconPath');
        }
        return "";
    }
}
exports.flashHTMLModel = flashHTMLModel;
flashHTMLModel.closeButton = true;
flashHTMLModel.hasHeader = true;
flashHTMLModel.hasFlashIcon = false;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=iflash.js.map