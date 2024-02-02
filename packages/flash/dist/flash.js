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
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
class FormatParamsToObject {
    constructor(options) {
        this.properties = {};
        this.properties = {};
        if (FormatParamsToObject.ACCEPTED_PARAMS.length > 0) {
            FormatParamsToObject.ACCEPTED_PARAMS.forEach(key => {
                if (options.hasOwnProperty(key)) {
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
    "container", "icon"
];
class Flash {
    /**
    * Adds a Flash message with the specified options.
    * @param options
    * @returns - The instance of the Flash class.
    */
    static add(options) {
        var _a;
        let properties = new FormatParamsToObject(options).getProperties();
        let flash = Flash.create(properties['duration'], properties['type']);
        Flash.OPTIONS = options;
        Flash.show({
            message: properties['message'],
            flashBox: flash,
            container: properties['container'],
            type: properties['type'],
            duration: properties['duration'],
            title: properties['title'],
            icon: properties['icon'],
            closeButton: (_a = properties['closeButton']) !== null && _a !== void 0 ? _a : false
        });
        return new this;
    }
    /**
     * Displays a Flash message with the specified options.
     * @param options - The Flash message options or the existing Flash element's selector.
     * @param container - The container in which to display the Flash message (optional).
     * @returns - The instance of the Flash class.
     */
    static show(options, container) {
        return __awaiter(this, void 0, void 0, function* () {
            let flashBox;
            let datas;
            switch (typeof options) {
                case 'string':
                    flashBox = document.querySelector(options);
                    break;
                default:
                    let __options = options;
                    datas = {
                        message: __options['message'],
                        container: __options['container'],
                        icon: __options['icon'],
                        duration: __options['duration'],
                        type: __options['type'],
                        flashBox: __options['flashBox'],
                        title: __options['title'],
                        closeButton: __options['closeButton']
                    };
                    Flash.OPTIONS = datas;
                    break;
            }
            if (flashBox instanceof HTMLElement) {
                const message = flashBox.innerText;
                const icon = Boolean(flashBox.getAttribute("icon"));
                const closeButton = Boolean(flashBox.getAttribute("closeButton"));
                Flash.OPTIONS = { message: message, icon: icon, closeButton: closeButton };
                const template = yield Flash.template();
                flashBox.append(...Array.from(template));
                let runner = new runner_1.default(flashBox, container);
                runner.open();
            }
            else if (datas) {
                const { container, flashBox } = datas;
                const _template = yield Flash.template();
                flashBox.append(...Array.from(_template));
                let runner = new runner_1.default(flashBox, container);
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
            const icon = svg ? `<h6>${svg.replace('"', "")}</h6>` : "";
            const title = (properties.title && "" !== properties.title) ? `<h6 class="flash-title">${properties.title}</h6>` : "";
            const button = (true === Boolean(properties.closeButton)) ? `<div><div class="flash-close-button"></div></div>` : "";
            const header = '' !== title || '' !== button ? `<span class="flash-header">${title}${button}</span>` : "";
            let _template;
            if (!template || Number.isInteger(template)) {
                switch (template) {
                    case 2:
                        _template = `${button}<span class="flash-content">
                ${icon}
                <h6 class="flash-message">${properties.message}</h6>
            </span>`;
                        break;
                    default:
                        _template = `${header}
                      <span class="flash-content">
                          ${icon}
                          <h6 class="text">${properties.message}</h6>
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
        const regexp = /{{(.*?)}}/g;
        template = template.replace(regexp, (match, key) => {
            return (key in options && options[key] !== undefined) ? options[key] : match;
        });
        try {
            return utils_1.default.textToHTMLElement(template, "div", true);
        }
        catch (e) {
            throw new Error("Impossible de parser le modèle de notification.");
        }
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
                    const svgUrl = `https://raw.githubusercontent.com/Nelsallg/easylibs/1.0.0/packages/flash/dist/assets/icons/${name}.svg`;
                    fetch(svgUrl)
                        .then((response) => response.text())
                        .then((SVG) => {
                        return SVG;
                    })
                        .catch((error) => {
                        console.error("Erreur lors du chargement du fichier SVG:", error);
                    });
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
            modal.removeAttribute('duration');
            modal.removeAttribute('icon');
            modal.removeAttribute('audio');
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
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _slicedToArray2(arr, i) { return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2(); }
function _nonIterableRest2() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen); }
function _arrayLikeToArray2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit2(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles2(arr) { if (Array.isArray(arr)) return arr; }
function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
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

    /******/
    var __webpack_modules__ = {};
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __nested_webpack_require_2769__(moduleId) {
      /******/ // Check if module is in cache
      /******/var cachedModule = __webpack_module_cache__[moduleId];
      /******/
      if (cachedModule !== undefined) {
        /******/return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = __webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      __webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_2769__);
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __nested_webpack_require_2769__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/define property getters */
    /******/
    (function () {
      /******/ // define getter functions for harmony exports
      /******/__nested_webpack_require_2769__.d = function (exports, definition) {
        /******/for (var key in definition) {
          /******/if (__nested_webpack_require_2769__.o(definition, key) && !__nested_webpack_require_2769__.o(exports, key)) {
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
    /******/ /* webpack/runtime/ensure chunk */
    /******/
    (function () {
      /******/__nested_webpack_require_2769__.f = {};
      /******/ // This file contains only the entry chunk.
      /******/ // The chunk loading function for additional chunks
      /******/
      __nested_webpack_require_2769__.e = function (chunkId) {
        /******/return Promise.all(Object.keys(__nested_webpack_require_2769__.f).reduce(function (promises, key) {
          /******/__nested_webpack_require_2769__.f[key](chunkId, promises);
          /******/
          return promises;
          /******/
        }, []));
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/get javascript chunk filename */
    /******/
    (function () {
      /******/ // This function allow to reference async chunks
      /******/__nested_webpack_require_2769__.u = function (chunkId) {
        /******/ // return url for filenames based on template
        /******/return "" + chunkId + ".js";
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/global */
    /******/
    (function () {
      /******/__nested_webpack_require_2769__.g = function () {
        /******/if ((typeof globalThis === "undefined" ? "undefined" : _typeof2(globalThis)) === 'object') return globalThis;
        /******/
        try {
          /******/return this || new Function('return this')();
          /******/
        } catch (e) {
          /******/if ((typeof window === "undefined" ? "undefined" : _typeof2(window)) === 'object') return window;
          /******/
        }
        /******/
      }();
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (function () {
      /******/__nested_webpack_require_2769__.o = function (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/load script */
    /******/
    (function () {
      /******/var inProgress = {};
      /******/
      var dataWebpackPrefix = "@easylibs/utils:";
      /******/ // loadScript function to load a script via script tag
      /******/
      __nested_webpack_require_2769__.l = function (url, done, key, chunkId) {
        /******/if (inProgress[url]) {
          inProgress[url].push(done);
          return;
        }
        /******/
        var script, needAttach;
        /******/
        if (key !== undefined) {
          /******/var scripts = document.getElementsByTagName("script");
          /******/
          for (var i = 0; i < scripts.length; i++) {
            /******/var s = scripts[i];
            /******/
            if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
              script = s;
              break;
            }
            /******/
          }
          /******/
        }
        /******/
        if (!script) {
          /******/needAttach = true;
          /******/
          script = document.createElement('script');
          /******/
          /******/
          script.charset = 'utf-8';
          /******/
          script.timeout = 120;
          /******/
          if (__nested_webpack_require_2769__.nc) {
            /******/script.setAttribute("nonce", __nested_webpack_require_2769__.nc);
            /******/
          }
          /******/
          script.setAttribute("data-webpack", dataWebpackPrefix + key);
          /******/
          /******/
          script.src = url;
          /******/
        }
        /******/
        inProgress[url] = [done];
        /******/
        var onScriptComplete = function onScriptComplete(prev, event) {
          /******/ // avoid mem leaks in IE.
          /******/script.onerror = script.onload = null;
          /******/
          clearTimeout(timeout);
          /******/
          var doneFns = inProgress[url];
          /******/
          delete inProgress[url];
          /******/
          script.parentNode && script.parentNode.removeChild(script);
          /******/
          doneFns && doneFns.forEach(function (fn) {
            return fn(event);
          });
          /******/
          if (prev) return prev(event);
          /******/
        };
        /******/
        var timeout = setTimeout(onScriptComplete.bind(null, undefined, {
          type: 'timeout',
          target: script
        }), 120000);
        /******/
        script.onerror = onScriptComplete.bind(null, script.onerror);
        /******/
        script.onload = onScriptComplete.bind(null, script.onload);
        /******/
        needAttach && document.head.appendChild(script);
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    (function () {
      /******/ // define __esModule on exports
      /******/__nested_webpack_require_2769__.r = function (exports) {
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
    /******/ /* webpack/runtime/publicPath */
    /******/
    (function () {
      /******/var scriptUrl;
      /******/
      if (__nested_webpack_require_2769__.g.importScripts) scriptUrl = __nested_webpack_require_2769__.g.location + "";
      /******/
      var document = __nested_webpack_require_2769__.g.document;
      /******/
      if (!scriptUrl && document) {
        /******/if (document.currentScript) /******/scriptUrl = document.currentScript.src;
        /******/
        if (!scriptUrl) {
          /******/var scripts = document.getElementsByTagName("script");
          /******/
          if (scripts.length) {
            /******/var i = scripts.length - 1;
            /******/
            while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
            /******/
          }
          /******/
        }
        /******/
      }
      /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
      /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
      /******/
      if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
      /******/
      scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
      /******/
      __nested_webpack_require_2769__.p = scriptUrl;
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/jsonp chunk loading */
    /******/
    (function () {
      /******/ // no baseURI
      /******/
      /******/ // object to store loaded and loading chunks
      /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
      /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      /******/var installedChunks = {
        /******/"utils": 0
        /******/
      };
      /******/
      /******/
      __nested_webpack_require_2769__.f.j = function (chunkId, promises) {
        /******/ // JSONP chunk loading for javascript
        /******/var installedChunkData = __nested_webpack_require_2769__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
        /******/
        if (installedChunkData !== 0) {
          // 0 means "already installed".
          /******/
          /******/ // a Promise means "currently loading".
          /******/
          if (installedChunkData) {
            /******/promises.push(installedChunkData[2]);
            /******/
          } else {
            /******/if (true) {
              // all chunks have JS
              /******/ // setup Promise in chunk cache
              /******/
              var promise = new Promise(function (resolve, reject) {
                return installedChunkData = installedChunks[chunkId] = [resolve, reject];
              });
              /******/
              promises.push(installedChunkData[2] = promise);
              /******/
              /******/ // start chunk loading
              /******/
              var url = __nested_webpack_require_2769__.p + __nested_webpack_require_2769__.u(chunkId);
              /******/ // create error before stack unwound to get useful stacktrace later
              /******/
              var error = new Error();
              /******/
              var loadingEnded = function loadingEnded(event) {
                /******/if (__nested_webpack_require_2769__.o(installedChunks, chunkId)) {
                  /******/installedChunkData = installedChunks[chunkId];
                  /******/
                  if (installedChunkData !== 0) installedChunks[chunkId] = undefined;
                  /******/
                  if (installedChunkData) {
                    /******/var errorType = event && (event.type === 'load' ? 'missing' : event.type);
                    /******/
                    var realSrc = event && event.target && event.target.src;
                    /******/
                    error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
                    /******/
                    error.name = 'ChunkLoadError';
                    /******/
                    error.type = errorType;
                    /******/
                    error.request = realSrc;
                    /******/
                    installedChunkData[1](error);
                    /******/
                  }
                  /******/
                }
                /******/
              };
              /******/
              __nested_webpack_require_2769__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
              /******/
            }
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
      /******/ // no prefetching
      /******/
      /******/ // no preloaded
      /******/
      /******/ // no HMR
      /******/
      /******/ // no HMR manifest
      /******/
      /******/ // no on chunks loaded
      /******/
      /******/ // install a JSONP callback for chunk loading
      /******/
      var webpackJsonpCallback = function webpackJsonpCallback(parentChunkLoadingFunction, data) {
        /******/var _data = _slicedToArray2(data, 3),
          chunkIds = _data[0],
          moreModules = _data[1],
          runtime = _data[2];
        /******/ // add "moreModules" to the modules object,
        /******/ // then flag all "chunkIds" as loaded and fire callback
        /******/
        var moduleId,
          chunkId,
          i = 0;
        /******/
        if (chunkIds.some(function (id) {
          return installedChunks[id] !== 0;
        })) {
          /******/for (moduleId in moreModules) {
            /******/if (__nested_webpack_require_2769__.o(moreModules, moduleId)) {
              /******/__nested_webpack_require_2769__.m[moduleId] = moreModules[moduleId];
              /******/
            }
            /******/
          }
          /******/
          if (runtime) var result = runtime(__nested_webpack_require_2769__);
          /******/
        }
        /******/
        if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
        /******/
        for (; i < chunkIds.length; i++) {
          /******/chunkId = chunkIds[i];
          /******/
          if (__nested_webpack_require_2769__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
            /******/installedChunks[chunkId][0]();
            /******/
          }
          /******/
          installedChunks[chunkId] = 0;
          /******/
        }
        /******/
        /******/
      };
      /******/
      /******/
      var chunkLoadingGlobal = self["webpackChunk_easylibs_utils"] = self["webpackChunk_easylibs_utils"] || [];
      /******/
      chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
      /******/
      chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
      /******/
    })();
    /******/
    /************************************************************************/
    var __nested_webpack_exports__ = {};
    /*!**********************!*\
      !*** ./src/utils.ts ***!
      \**********************/
    __nested_webpack_require_2769__.r(__nested_webpack_exports__);
    /* harmony export */
    __nested_webpack_require_2769__.d(__nested_webpack_exports__, {
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
          var audio = document.createElement('audio');
          if (classname != null) {
            audio.classList.add(classname);
          }
          var source = document.createElement('source');
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
          if (typeof element !== 'string') {
            return element;
          } else if (typeof element === 'string') {
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
            case 'email':
              return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
            case 'phone-number':
              return new RegExp(/^(0|\+[1-9][0-9]{0,2}) ?[0-9]+$/);
            case 'number':
              return new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/);
            case 'strong-password':
              return new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
            case 'url-protocol':
              return new RegExp(/^(https?:\/\/)$/, 'i');
            case 'url-domain':
              return new RegExp(/^((([a-zA-Z0-9]{1,})[.-]?)+[a-zA-Z]{2,})$/, 'i');
            case 'url-ip':
              return new RegExp(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, 'i');
            case 'url-port':
              return new RegExp(/^:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{0,3})$/, 'i');
            case 'url-path':
              return new RegExp(/^(\.\/)?[-a-zA-Z\d%_.~+\/]*$/, 'i');
            case 'url-query':
              return new RegExp(/^(\?[;&a-zA-Z\d%_.~+=-]*)$/, 'i');
            case 'url-fragment':
              return new RegExp(/^#[-a-zA-Z\d%_.~+/=?&;:!*'()]*$/, 'i');
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
         * Crée une couche superfielle au dessus d'un élément html afin d'empecher tout évènement. 
         * @param tag Le nom de la balise HTML à utiliser comme couche (par défaut : 'td', idéal pour les tableau html).
         * @param backgroundColor La couleur d'arrière-plan de la zone interdite (par défaut : '#FFFFFF').
         * @returns Un élément HTML représentant une zone interdite.
         */
      }, {
        key: "forbiddener",
        value: function forbiddener() {
          var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'td';
          var backgroundColor = arguments.length > 1 ? arguments[1] : undefined;
          var forbiddenTag = document.createElement(tag);
          forbiddenTag.setAttribute('class', 'forbidden');
          var style = {
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
          __nested_webpack_require_2769__.e( /*! import() */"node_modules_raw-loader_dist_cjs_js_src_assets_asterisk_svg").then(__nested_webpack_require_2769__.bind(__nested_webpack_require_2769__, /*! raw-loader!./assets/asterisk.svg */"../../node_modules/raw-loader/dist/cjs.js!./src/assets/asterisk.svg")).then(function (SVG) {
            var encodedSvg = SVG["default"];
            var svgString = decodeURIComponent(encodedSvg.split(',')[1]);
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
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