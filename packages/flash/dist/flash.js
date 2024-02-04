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

/***/ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash.scss":
/*!*************************************************************************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash.scss ***!
  \*************************************************************************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_flash_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./flash.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/assets/scss/flash.scss");

      
      
      
      
      
      
      
      
      

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
const runner_1 = __importDefault(__webpack_require__(/*! ./scripts/runner */ "./src/scripts/runner.ts"));
__webpack_require__(/*! ./assets/scss/flash.scss */ "./src/assets/scss/flash.scss");
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
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
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
const animation_1 = __importDefault(__webpack_require__(/*! @easylibs/animation */ "../animation/dist/animation.js"));
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
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && ( false ? 0 : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 0 : _typeof2(exports)) === 'object' && ( false ? 0 : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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