(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("styles", [], factory);
	else if(typeof exports === 'object')
		exports["styles"] = factory();
	else
		root["styles"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash.scss":
/*!*************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: sticky;
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
  position: absolute;
  z-index: 10;
  top: 0;
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
  padding: 10px 30px;
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

[_close_] {
  width: 15px;
  height: 15px;
  margin: 0 5px;
  cursor: pointer;
}

[_close_]::before, [_close_]::after {
  position: absolute;
  content: "";
  width: 3px;
  height: 15px;
  background: #333;
  left: 7px;
  border-radius: 5px;
}

[_close_]::before {
  transform: rotate(45deg);
}

[_close_]::after {
  transform: rotate(315deg);
}`, "",{"version":3,"sources":["webpack://./src/assets/scss/animations.scss","webpack://./src/assets/scss/flash.scss"],"names":[],"mappings":"AAqaE;EACE,wEAAA;ACpaJ;;ADuaE;EACE;IACE,wBAAA;IACA,UAAA;ECpaJ;EDsaE;IACE,4BAAA;IACA,UAAA;ECpaJ;AACF;ADuYE;EACE,uEAAA;ACrYJ;;ADwYE;EACE;IACE,4BAAA;IACA,UAAA;ECrYJ;EDuYE;IACE,wBAAA;IACA,UAAA;ECrYJ;AACF;AAvBA;EACI,yBAAA;EACA,2BAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;EACA,yBAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,sCAAA;AAyBJ;AAxBI;EACE,eAAA;EACA,SAAA;EACA,gBAAA;AA0BN;AAxBI;EACG,QAAA;EACA,MAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,8BAAA;AA0BP;AAzBO;EACC,YAAA;EACA,kBAAA;AA2BR;AAvBI;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;EACA,kBAAA;AAyBR;AAxBQ;EACI,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;AA0BZ;AAxBQ;EACE,SAAA;AA0BV;AAxBQ;EACI,WAAA;EACA,aAAA;EACC,uBAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;EACA,SAAA;AA0Bb;AAxBS;EACG,gBAAA;EACA,SAAA;AA0BZ;;AAtBA;EACI,+BAAA;EACA,gCAAA;AAyBJ;AAxBI;EAAM,cAAA;AA2BV;;AAzBA;EACI,+BAAA;EACA,gCAAA;AA4BJ;AA3BI;EAAM,cAAA;AA8BV;;AA5BA;EACI,+BAAA;EACA,gCAAA;AA+BJ;AA9BI;EAAM,cAAA;AAiCV;;AA9BA;EACI,+BAAA;EACA,gCAAA;AAiCJ;AAhCI;EAAM,cAAA;AAmCV;;AA/BA;EACI,+EAAA;AAkCJ;;AAhCE;EACE;IACE,oCAAA;IACQ,4BAAA;IACR,UAAA;EAmCJ;EAjCE;IACE,gCAAA;IACQ,wBAAA;IACR,UAAA;EAmCJ;AACF;AAjCE;EACE,gFAAA;AAmCJ;;AAjCE;EACE;IACE,gCAAA;IACQ,wBAAA;IACR,UAAA;EAoCJ;EAlCE;IACE,mCAAA;IACQ,2BAAA;IACR,UAAA;EAoCJ;AACF;AAlCE;EACE,4EAAA;AAoCJ;;AAjCA;EACE;IACE,oCAAA;IACQ,4BAAA;IACR,UAAA;EAoCF;EAlCA;IACE,gCAAA;IACQ,wBAAA;IACR,UAAA;EAoCF;AACF;AAlCA;EACI,sEAAA;AAoCJ;;AAlCA;EACA;IACE,gCAAA;IACQ,wBAAA;IACR,UAAA;EAqCA;EAnCF;IACE,oCAAA;IACQ,4BAAA;IACR,UAAA;EAqCA;AACF;AA9BA;EACE,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,MAAA;EACA,YAAA;EACA,sCAAA;AAgCF;AA/BE;EACG,QAAA;EACA,MAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;AAiCL;AA/BE;EACE,iBAAA;AAiCJ;AA/BE;EACE,SAAA;AAiCJ;AA9BE;EACI,kBAAA;EACA,WAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;AAgCN;AA/BM;EACI,WAAA;EACA,YAAA;EACA,WAAA;EACA,cAAA;AAiCV;AA9BE;EACG,WAAA;EACA,aAAA;EACC,uBAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;AAgCN;AA9BE;EACI,gBAAA;EACA,gBAAA;AAgCN;;AA7BA;EACE,yBAAA;AAgCF;;AA9BA;EACE,yBAAA;AAiCF;;AA/BA;EACE,yBAAA;AAkCF;;AAhCA;EACE,yBAAA;AAmCF;;AAhCA;EACE,kBAAA;AAmCF;;AAjCA;EACE,kBAAA;EACA,QAAA;AAoCF;;AAlCA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,eAAA;AAqCF;;AAnCC;EACK,kBAAA;EACA,WAAA;EACA,UAAA;EACA,YAAA;EACA,gBAAA;EACA,SAAA;EACA,kBAAA;AAsCN;;AApCE;EACI,wBAAA;AAuCN;;AArCE;EACI,yBAAA;AAwCN","sourcesContent":["@mixin spinner(){\r\n    #spinner {\r\n        width: 11.2px;\r\n        height: 11.2px;\r\n        animation: spinner-o824ag 1s infinite linear;\r\n     }\r\n     \r\n     #spinner div {\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        background: #474bff;\r\n        border-radius: 50%;\r\n        animation: spinner-vse6n7 1.25s infinite ease;\r\n     }\r\n     \r\n     #spinner div:nth-child(1) {\r\n        --rotation: 90;\r\n     }\r\n     \r\n     #spinner div:nth-child(2) {\r\n        --rotation: 180;\r\n     }\r\n     \r\n     #spinner div:nth-child(3) {\r\n        --rotation: 270;\r\n     }\r\n     \r\n     #spinner div:nth-child(4) {\r\n        --rotation: 360;\r\n     }\r\n     \r\n     @keyframes spinner-vse6n7 {\r\n        0%, 100% {\r\n           transform: rotate(calc(var(--rotation) * 1deg)) translateY(0);\r\n        }\r\n     \r\n        50% {\r\n           transform: rotate(calc(var(--rotation) * 1deg)) translateY(300%);\r\n        }\r\n     }\r\n     \r\n     @keyframes spinner-o824ag {\r\n        to {\r\n           transform: rotate(360deg);\r\n        }\r\n     }\r\n}\r\n\r\n@mixin rotate-pinner-filled(){\r\n   .spinner {\r\n      position: relative;\r\n      width: 26px;\r\n      height: 26px;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      outline: none;\r\n   }\r\n   \r\n   .spinner::before,\r\n   .spinner::after {\r\n      border: 5.7px solid #F2F3F5;\r\n      border-radius: 50%;\r\n      position: absolute;\r\n      content: '';\r\n      display: block;\r\n   }\r\n   \r\n   .spinner::before {\r\n      width: 3.6px;\r\n      height: 3.6px;\r\n      border-bottom-color: transparent;\r\n      border-left-color: transparent;\r\n      animation: spinner-1o3y8q 0.75s infinite linear reverse;\r\n   }\r\n   \r\n   .spinner::after {\r\n      animation: spinner-1o3y8q 0.5s infinite linear;\r\n      height: 26px;\r\n      width: 26px;\r\n      border-right-color: transparent;\r\n      border-top-color: transparent;\r\n   }\r\n   \r\n   @keyframes spinner-1o3y8q {\r\n      to {\r\n         transform: rotate(360deg);\r\n      }\r\n   }\r\n}\r\n\r\n@mixin google_animation_type(){\r\n   .loader {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      height: 50px;\r\n      position: relative;\r\n    }\r\n    \r\n    .loader__band {\r\n      height: 100%;\r\n      width: 20px;\r\n      margin: 0 10px;\r\n      background-color: #4285f4;\r\n      animation: loader__band 1.5s infinite cubic-bezier(0.4, 0.0, 0.2, 1);\r\n    }\r\n    \r\n    .loader__band:nth-child(2) {\r\n      animation-delay: 0.2s;\r\n    }\r\n    \r\n    .loader__band:nth-child(3) {\r\n      animation-delay: 0.4s;\r\n    }\r\n    \r\n    @keyframes loader__band {\r\n      0% {\r\n        transform: scaleY(1);\r\n      }\r\n      50% {\r\n        transform: scaleY(0.3);\r\n      }\r\n      100% {\r\n        transform: scaleY(1);\r\n      }\r\n    }\r\n   //  <div class=\"loader\">\r\n   //                  <div class=\"loader__band\"></div>\r\n   //                  <div class=\"loader__band\"></div>\r\n   //                  <div class=\"loader__band\"></div>\r\n   //              </div>\r\n}\r\n\r\n@mixin progress_bar(){\r\n   .progress-bar {\r\n      width: 300px;\r\n      height: 20px;\r\n      border: 1px solid #ccc;\r\n      border-radius: 10px;\r\n    }\r\n    \r\n    .progress {\r\n      height: 100%;\r\n      background-color: #3498db;\r\n      border-radius: 10px;\r\n      animation: progress-bar 5s linear;\r\n    }\r\n    \r\n    @keyframes progress-bar {\r\n      0% {\r\n        width: 0%;\r\n      }\r\n      100% {\r\n        width: 100%;\r\n      }\r\n    }\r\n    \r\n}\r\n\r\n@mixin loading_bar($attr_class, $top){\r\n   .#{$attr_class} {\r\n      top:$top;\r\n      position: absolute;\r\n      overflow: hidden;\r\n      width: 100%;\r\n      height: 4px;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: default;\r\n      background-color: white;\r\n    }\r\n    \r\n    .#{$attr_class}::before {\r\n      width: 50%;\r\n      height: 4px;\r\n      content: \"\";\r\n      background-image: conic-gradient(#53538b, #5757b1);\r\n      box-shadow: 16px 14px 20px #000000Bc;\r\n      border-radius: 20px;\r\n      animation: loading-animation 2s linear infinite;\r\n    }\r\n    \r\n    @keyframes loading-animation {\r\n      0%{\r\n         transform: translateX(-200%);\r\n     }\r\n     100%{\r\n         transform: translateX(200%);\r\n     }\r\n    }  \r\n}\r\n$position:absolute;\r\n$left:10%;\r\n$top:7%;\r\n$height:130px;\r\n@mixin modale_type($modale_attr, $position, $left, $top, $width, $height){\r\n   .#{$modale_attr}{\r\n      @include mixin.positions($position, $left, $top, auto, auto);\r\n      @include mixin.text-select-remove();\r\n      @include mixin.proportions(400px, $height);\r\n      background-color: #FFFFFF;\r\n      border-left: 10px solid rgba(0, 128, 0, 0.400);\r\n      border-right: 10px solid rgba(0, 128, 0, 0.400);\r\n      text-align: center;\r\n      z-index: 10;\r\n      display: none;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column;\r\n      animation: modale .4s;\r\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.400);\r\n      transition: opacity 0.2s ease-in-out;\r\n      opacity: 1;\r\n    }\r\n    .#{$modale_attr}.pop_is_showed{\r\n      opacity: 1;\r\n    }\r\n    .#{$modale_attr}.pop_is_hidden{\r\n      animation-direction: reverse;\r\n      animation-iteration-count: infinite;\r\n    }\r\n    .#{$modale_attr} .alertTitle{\r\n      width: 100%;\r\n      top:0;\r\n      left:0;\r\n      height: 30px;\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n    }\r\n    .#{$modale_attr} .alertTitle h6{\r\n      font-size: 25px;\r\n      color:rgba(0, 128, 0, 0.400);\r\n      margin-left: 10px;\r\n    }\r\n    .#{$modale_attr} .alertTitle iconify-icon{\r\n      font-size: 25px;\r\n      color:rgba(0, 128, 0, 0.400);\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      cursor: pointer;\r\n    }\r\n    \r\n    .#{$modale_attr} .alertContent{\r\n      display: flex;\r\n      height: 100%;\r\n      justify-content: center;\r\n      align-items: center;\r\n      flex-direction: column-reverse;\r\n      margin-bottom: 10px;\r\n    }\r\n  \r\n    .#{$modale_attr} .text{\r\n      color: #555;\r\n      justify-content: center;\r\n      align-items: center;\r\n      display: flex;\r\n      font-size: 13px;\r\n      font-weight: 600;\r\n      width: 320px;\r\n    }\r\n\r\n  .#{$modale_attr} h6 iconify-icon{\r\n      font-size: 35px;\r\n      color:rgba(0, 128, 0, 0.400);\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n    }\r\n    @keyframes modale {\r\n      0% {\r\n          transform: translateY(-100%);\r\n      }\r\n      100% {\r\n          transform: translateY(0%);\r\n      }\r\n    }\r\n}\r\n\r\n\r\n\r\n@mixin scale-up-ver-center(){\r\n  .scale-up-ver-center {\r\n    -webkit-animation: scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n            animation: scale-up-ver-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n  }\r\n\r\n\r\n@-webkit-keyframes scale-up-ver-center {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n            transform: scaleY(0.4);\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n            transform: scaleY(1);\r\n  }\r\n}\r\n@keyframes scale-up-ver-center {\r\n  0% {\r\n    -webkit-transform: scaleY(0.4);\r\n            transform: scaleY(0.4);\r\n  }\r\n  100% {\r\n    -webkit-transform: scaleY(1);\r\n            transform: scaleY(1);\r\n  }\r\n}\r\n\r\n}\r\n\r\n@mixin scal-up-bottom(){\r\n  .scale-up-bottom {\r\n    -webkit-animation: scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n            animation: scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n  }\r\n@-webkit-keyframes scale-up-bottom {\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n  }\r\n}\r\n@keyframes scale-up-bottom {\r\n  0% {\r\n    -webkit-transform: scale(0.5);\r\n            transform: scale(0.5);\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    -webkit-transform-origin: 50% 100%;\r\n            transform-origin: 50% 100%;\r\n  }\r\n}\r\n\r\n}\r\n\r\n@mixin slide-fwd-top(){\r\n  .slide-fwd-top {\r\n    -webkit-animation: slide-fwd-top 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n            animation: slide-fwd-top 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n  }\r\n@-webkit-keyframes slide-fwd-top {\r\n  0% {\r\n    -webkit-transform: translateZ(0) translateY(0);\r\n            transform: translateZ(0) translateY(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(160px) translateY(-100px);\r\n            transform: translateZ(160px) translateY(-100px);\r\n  }\r\n}\r\n@keyframes slide-fwd-top {\r\n  0% {\r\n    -webkit-transform: translateZ(0) translateY(0);\r\n            transform: translateZ(0) translateY(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: translateZ(160px) translateY(-100px);\r\n            transform: translateZ(160px) translateY(-100px);\r\n  }\r\n}\r\n\r\n}\r\n\r\n@mixin fade-in(){\r\n  .fade-in {\r\n    -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n            animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\r\n  }\r\n@-webkit-keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fade-in {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n}\r\n\r\n\r\n@mixin slide-in-top($element,$time:0.5s,$top:-100%){\r\n  #{$element}.slide-in-top {\r\n    animation: slide-in-top $time cubic-bezier(0.550, 0.085, 0.680, 0.530) both;\r\n  }\r\n\r\n  @keyframes slide-in-top {\r\n    0% {\r\n      transform: translateY($top);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin slide-out-top($element,$time:0.5s,$top:-100%){\r\n  #{$element}.slide-out-top {\r\n    animation: slide-out-top $time cubic-bezier(0.550, 0.085, 0.680, 0.530) both;\r\n  }\r\n\r\n  @keyframes slide-out-top {\r\n    0% {\r\n      transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      transform: translateY($top);\r\n      opacity: 0;\r\n    }\r\n  }\r\n}\r\n\r\n@mixin fade-in-top($element, $time, $top){\r\n  .#{$element}.fade-in-top {\r\n      animation: fade-in-top $time cubic-bezier(0.390, 0.575, 0.565, 1.000) both running;\r\n  }\r\n\r\n@keyframes fade-in-top {\r\n  0% {\r\n    -webkit-transform: translateY($top);\r\n            transform: translateY($top);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n}\r\n\r\n\r\n@mixin fade-out-top($element, $time, $bottom){\r\n  .#{$element}.fade-out-top {\r\n      animation: fade-out-top $time cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n  }\r\n@keyframes fade-out-top {\r\n  0% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY($bottom);\r\n            transform: translateY($bottom);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n}\r\n\r\n\r\n@mixin pulsate-ping(){\r\n  .ping {\r\n    -webkit-animation: ping 0.8s ease-in-out infinite both;\r\n            animation: ping 0.8s ease-in-out infinite both;\r\n  }\r\n@-webkit-keyframes ping {\r\n  0% {\r\n    -webkit-transform: scale(0.2);\r\n            transform: scale(0.2);\r\n    opacity: 0.8;\r\n  }\r\n  80% {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(2.2);\r\n            transform: scale(2.2);\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes ping {\r\n  0% {\r\n    -webkit-transform: scale(0.2);\r\n            transform: scale(0.2);\r\n    opacity: 0.8;\r\n  }\r\n  80% {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(2.2);\r\n            transform: scale(2.2);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n}\r\n\r\n@mixin bzckground-scale(){\r\n  .bg-pan-bl {\r\n    -webkit-animation: bg-pan-bl 8s both;\r\n            animation: bg-pan-bl 8s both;\r\n  }\r\n@-webkit-keyframes bg-pan-bl {\r\n  0% {\r\n    background-position: 100% 0%;\r\n  }\r\n  100% {\r\n    background-position: 0% 100%;\r\n  }\r\n}\r\n@keyframes bg-pan-bl {\r\n  0% {\r\n    background-position: 100% 0%;\r\n  }\r\n  100% {\r\n    background-position: 0% 100%;\r\n  }\r\n}\r\n\r\n}","@use './animations';\r\n@include animations.slide-out-top('.flash-box', .4s, -200%);\r\n@include animations.slide-in-top('.flash-box', .4s, -200%);\r\n\r\n.flash-box[template=\"1\"]{\r\n    -webkit-user-select: none;\r\n    -webkit-touch-callout: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    background-color: #FFFFFF;\r\n    z-index: 1000;\r\n    border-radius: 5px;\r\n    padding:15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: sticky;\r\n    width: 300px;\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.400);\r\n    p{\r\n      font-size:20px;\r\n      margin: 0;\r\n      font-weight:600;\r\n    } \r\n    .flash-header{\r\n       right:0;\r\n       top:0;\r\n       margin: 5px 0;\r\n       height: 30px;\r\n       width: 100%;\r\n       position: absolute;\r\n       display: flex;\r\n       justify-content: space-between;\r\n       .flash-title{\r\n        height: 100%;\r\n        padding-left: 15px;\r\n       }\r\n    }\r\n\r\n    .flash-content{\r\n        position: relative;\r\n        width: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        text-align: center;\r\n        svg{\r\n            width: 45px;\r\n            height: 45px;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            margin: 15px 0;\r\n        }\r\n        .flash-icon{\r\n          margin:0;\r\n        }\r\n        .flash-message{\r\n            color: #444;\r\n            display: flex;\r\n             justify-content: center;\r\n             height: 100%;\r\n             flex-direction: column;\r\n             font-size:15px;\r\n             margin: 0;\r\n         }\r\n         .flash-message ul{\r\n            list-style: none;\r\n            margin: 0;\r\n         }\r\n    }\r\n}\r\n.flash-box[template=\"1\"].flashtype-success{\r\n    border-left: 10px solid #28a745;\r\n    border-right: 10px solid #28a745;\r\n    p,svg{color: #28a745;}\r\n}\r\n.flash-box[template=\"1\"].flashtype-info{\r\n    border-left: 10px solid #284B63;\r\n    border-right: 10px solid #284B63;\r\n    p,svg{color: #284B63;}\r\n}\r\n.flash-box[template=\"1\"].flashtype-warning{\r\n    border-left: 10px solid #FF4000;\r\n    border-right: 10px solid #FF4000;\r\n    p,svg{color: #FF4000;}\r\n}\r\n\r\n.flash-box[template=\"1\"].flashtype-danger{\r\n    border-left: 10px solid #dc3545;\r\n    border-right: 10px solid #dc3545;\r\n    p,svg{color: #dc3545;}\r\n}\r\n\r\n\r\n.flash-box.slide-in-top {\r\n    animation: slide-in-top .5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both running;\r\n  }\r\n  @keyframes slide-in-top {\r\n    0% {\r\n      -webkit-transform: translateY(-100%);\r\n              transform: translateY(-100%);\r\n      opacity: 0;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n  }\r\n  .flash-box.slide-out-top {\r\n    animation: slide-out-top .5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both running;\r\n  }\r\n  @keyframes slide-out-top {\r\n    0% {\r\n      -webkit-transform: translateY(0);\r\n              transform: translateY(0);\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      -webkit-transform: translateY(100%);\r\n              transform: translateY(100%);\r\n      opacity: 0;\r\n    }\r\n  }\r\n  .flash-box.fade-in-top {\r\n    animation: fade-in-top .5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both running;\r\n}\r\n\r\n@keyframes fade-in-top {\r\n  0% {\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n.flash-box.fade-out-top {\r\n    animation: fade-out-top .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\r\n}\r\n@keyframes fade-out-top {\r\n0% {\r\n  -webkit-transform: translateY(0);\r\n          transform: translateY(0);\r\n  opacity: 1;\r\n}\r\n100% {\r\n  -webkit-transform: translateY(-100%);\r\n          transform: translateY(-100%);\r\n  opacity: 0;\r\n}\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.flash-box[template=\"2\"]{\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  z-index: 10;\r\n  top: 0;\r\n  width: 100vw;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.400);\r\n  .flash-icon-parent{\r\n     right:0;\r\n     top:0;\r\n     margin: 5px 0 5px 0;\r\n     height: 20px;\r\n     width: 20px;\r\n     position: absolute;\r\n     cursor:pointer;\r\n  }\r\n  .flash-icon-parent{\r\n    margin-right: 5px;\r\n  }\r\n  .flash-icon{\r\n    margin: 0;\r\n  }\r\n  \r\n  .flash-content{\r\n      position: relative;\r\n      width: 100%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      padding: 10px 30px;\r\n      svg{\r\n          width: 20px;\r\n          height: 20px;\r\n          color: #FFF;\r\n          margin: 0 15px;\r\n      }\r\n  }\r\n  .flash-content .flash-message{\r\n     color: #FFF;\r\n     display: flex;\r\n      justify-content: center;\r\n      height: 100%;\r\n      flex-direction: column;\r\n      font-size:15px;\r\n      margin: 0;\r\n      font-weight:600;\r\n  }\r\n  .flash-content .flash-message ul{\r\n      list-style: none;\r\n      margin-bottom: 0;\r\n   }\r\n}\r\n.flash-box[template=\"2\"].flashtype-danger{\r\n  background-color: #dc3545;\r\n}\r\n.flash-box[template=\"2\"].flashtype-warning{\r\n  background-color: #FF4000;\r\n}\r\n.flash-box[template=\"2\"].flashtype-success{\r\n  background-color: #28a745; \r\n}\r\n.flash-box[template=\"2\"].flashtype-info{\r\n  background-color: #284B63; \r\n}\r\n\r\n.flash-box[template=\"1\"] [_close_]{\r\n  position:relative;\r\n}\r\n.flash-box[template=\"2\"] [_close_]{\r\n  position:absolute;\r\n  right: 0;\r\n}\r\n[_close_]{\r\n  width: 15px;\r\n  height: 15px;\r\n  margin: 0 5px;\r\n  cursor:pointer;\r\n}\r\n [_close_]::before, [_close_]::after {\r\n      position: absolute;\r\n      content: '';\r\n      width: 3px;\r\n      height: 15px;\r\n      background: #333;\r\n      left: 7px;\r\n      border-radius: 5px;\r\n  }\r\n  [_close_]::before{\r\n      transform: rotate(45deg);\r\n  }\r\n  [_close_]::after {\r\n      transform: rotate(315deg);\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {



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

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {



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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************!*\
  !*** ./src/assets/scss/flash.scss ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./flash.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=styles.js.map