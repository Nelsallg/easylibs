(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("styleTs", [], factory);
	else if(typeof exports === 'object')
		exports["styleTs"] = factory();
	else
		root["styleTs"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!******************************!*\
  !*** ./src/scripts/style.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cssStyle = void 0;
function cssStyle(type, style = { width: '400px', height: '100px', br: '3px', color: '#f8f9fa' }) {
    switch (type.toLowerCase()) {
        case 'info':
            return {
                backgroundColor: '#17a2b8',
                color: style.color,
                width: style.width,
                height: style.height,
                borderRadius: style.br
            };
        case 'warming':
            return {
                backgroundColor: '#ffc107',
                color: style.color,
                width: style.width,
                height: style.height,
                borderRadius: style.br
            };
        case 'success':
            return {
                backgroundColor: '#28a745',
                color: style.color,
                width: style.width,
                height: style.height,
                borderRadius: style.br
            };
        default:
            return {
                backgroundColor: '#dc3545',
                color: style.color,
                width: style.width,
                height: style.height,
                borderRadius: style.br
            };
    }
}
exports.cssStyle = cssStyle;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=styleTs.js.map