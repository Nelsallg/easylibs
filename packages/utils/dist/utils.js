(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("utils", [], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=utils.js.map