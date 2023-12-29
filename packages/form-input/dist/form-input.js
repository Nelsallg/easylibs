(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("form-input", [], factory);
	else if(typeof exports === 'object')
		exports["form-input"] = factory();
	else
		root["form-input"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form-input.ts":
/*!***************************!*\
  !*** ./src/form-input.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FormInput = void 0;
const checkbox_manager_1 = __importDefault(__webpack_require__(/*! ./scripts/checkbox-manager */ "./src/scripts/checkbox-manager.ts"));
const color_manager_1 = __importDefault(__webpack_require__(/*! ./scripts/color-manager */ "./src/scripts/color-manager.ts"));
const date_manager_1 = __importDefault(__webpack_require__(/*! ./scripts/date-manager */ "./src/scripts/date-manager.ts"));
const password_manager_1 = __importDefault(__webpack_require__(/*! ./scripts/password-manager */ "./src/scripts/password-manager.ts"));
const select_manager_1 = __importDefault(__webpack_require__(/*! ./scripts/select-manager */ "./src/scripts/select-manager.ts"));
var FormInput;
(function (FormInput) {
    class CheckboxType extends checkbox_manager_1.default {
    }
    FormInput.CheckboxType = CheckboxType;
    class ColorType extends color_manager_1.default {
    }
    FormInput.ColorType = ColorType;
    class PasswordType extends password_manager_1.default {
    }
    FormInput.PasswordType = PasswordType;
    class SelectType extends select_manager_1.default {
    }
    FormInput.SelectType = SelectType;
    class DateType extends date_manager_1.default {
    }
    FormInput.DateType = DateType;
})(FormInput || (exports.FormInput = FormInput = {}));


/***/ }),

/***/ "./src/scripts/checkbox-manager.ts":
/*!*****************************************!*\
  !*** ./src/scripts/checkbox-manager.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
class CheckboxManager {
    constructor(parentElement) {
        this.parentElement = parentElement;
    }
    /**
     * Initializes the checkbox functionality in the specified parent element.
     */
    initializeCheckbox() {
        const content = utils_1.default.$$(this.parentElement);
        if (content !== null) {
            utils_1.default.processNodes(content, (node) => {
                this.init(node);
            });
        }
    }
    init(content) {
        const parentCheckbox = content.querySelector('.parent-checkbox');
        const childrenCheckboxes = content.querySelectorAll('.child-checkbox');
        let parentChecked = parentCheckbox.checked;
        /**
         * Toggles the selection state of child checkboxes.
         * @param checked Selection state of checkboxes.
         */
        const toggleChildrenCheckboxes = (checked) => {
            childrenCheckboxes.forEach((checkbox) => {
                checkbox.checked = checked;
            });
        };
        /**
         * Event handler for the parent checkbox.
         * Updates the selection state of child checkboxes.
         * @param e Click event.
         */
        parentCheckbox.addEventListener('click', (e) => {
            parentChecked = parentCheckbox.checked;
            toggleChildrenCheckboxes(parentChecked);
        });
        childrenCheckboxes.forEach((checkbox) => {
            /**
             * Event handler for child checkboxes.
             * Updates the selection state of the parent checkbox based on child checkboxes.
             */
            checkbox.addEventListener('click', () => {
                if (!checkbox.checked && parentChecked) {
                    parentCheckbox.checked = false;
                    parentChecked = false;
                }
                else if (checkbox.checked && !parentChecked) {
                    const allChildrenChecked = Array.from(childrenCheckboxes).every((c) => c.checked);
                    if (allChildrenChecked) {
                        parentCheckbox.checked = true;
                        parentChecked = true;
                    }
                }
            });
        });
    }
}
exports["default"] = CheckboxManager;


/***/ }),

/***/ "./src/scripts/color-manager.ts":
/*!**************************************!*\
  !*** ./src/scripts/color-manager.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
class ColorManager {
    constructor(colorPicker) {
        this.colorPicker = colorPicker;
    }
    fetchColors(url) {
        document.addEventListener("DOMContentLoaded", () => __awaiter(this, void 0, void 0, function* () {
            const colorPicker = this.colorPicker instanceof HTMLInputElement ? this.colorPicker : document.getElementById(this.colorPicker);
            const datalist = document.createElement('datalist');
            datalist.id = "colorOptions";
            try {
                const response = yield fetch(url);
                const data = yield response.json();
                if (response) {
                    const colors = data.colors;
                    colors.forEach((color) => {
                        const option = document.createElement("option");
                        option.value = color;
                        datalist.appendChild(option);
                    });
                }
            }
            catch (error) {
                console.error("Erreur lors du chargement des couleurs :", error);
            }
            colorPicker.addEventListener("input", function () {
                console.log("Couleur sélectionnée :", colorPicker.value);
            });
        }));
    }
}
exports["default"] = ColorManager;


/***/ }),

/***/ "./src/scripts/date-manager.ts":
/*!*************************************!*\
  !*** ./src/scripts/date-manager.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class DateManager {
    constructor(startDate, endDate, durationContainer, autoSetDuration = false) {
        this.fullDate = 0;
        this.startDate = startDate;
        this.endDate = endDate;
        this.durationContainer = durationContainer;
        this.autoSetDuration = autoSetDuration;
    }
    findDurationBetweenToDate() {
        let start_date = null;
        let fullDate = 0;
        if (this.startDate instanceof HTMLInputElement) {
            const { startDate } = this;
            startDate.addEventListener("input", () => {
                const { value } = startDate;
                start_date = new Date(value);
                if (this.endDate instanceof HTMLInputElement) {
                    this.endDate.min = start_date.toISOString().split("T")[0];
                }
            });
        }
        if (this.endDate instanceof HTMLInputElement) {
            const { endDate } = this;
            endDate.addEventListener("input", () => {
                let end_date = new Date(endDate.value);
                if (start_date && start_date < end_date) {
                    endDate.value = end_date.toISOString().split("T")[0];
                    this.fullDate = end_date.getTime() - start_date.getTime();
                    if (true === this.autoSetDuration && this.durationContainer) {
                        const text = this.fullDurationText;
                        const duration = this.durationContainer;
                        if (duration) {
                            this.setFullDurationText(duration, text);
                        }
                    }
                }
            });
        }
    }
    convertFullDateToDays() {
        let one_day = 24 * 60 * 60 * 1000;
        let absValue = Math.abs(this.fullDate);
        return Math.floor(absValue / one_day);
    }
    ;
    convertFullDateToWeeks(extDays) {
        let totalDaysNumber = extDays;
        let weeksNumber = 0;
        if (this.fullDate) {
            totalDaysNumber = this.convertFullDateToDays();
        }
        if (totalDaysNumber) {
            weeksNumber = Math.floor(totalDaysNumber / 7);
            extDays = totalDaysNumber % 7;
        }
        return { weeks: weeksNumber, extDays: extDays };
    }
    convertFullDateToMonths() {
        let totalDaysNumber = this.convertFullDateToDays();
        let monthsNumber = Math.floor(totalDaysNumber / 30);
        let extDays = totalDaysNumber % 30;
        let totalweeks = this.convertFullDateToWeeks(extDays);
        let days = 0;
        let weeks = 0;
        let months = 0;
        if (totalDaysNumber < 30) {
            days = this.convertFullDateToWeeks(totalDaysNumber).extDays;
            weeks = this.convertFullDateToWeeks(totalDaysNumber).weeks;
        }
        else {
            days = totalweeks.extDays;
            weeks = totalweeks.weeks;
            months = monthsNumber;
        }
        return { days, weeks, months };
    }
    durationText(day, week, month) {
        let dayText = "";
        (day && day > 1) ? dayText = `${day} jours` : dayText = `${day} jour`;
        let weekText = "";
        (week && week > 1) ? weekText = `${week} semaines` : weekText = `${week} semaine`;
        let monthText = "";
        (month && month > 0) ? monthText = `${month} mois` : monthText = "";
        if (day === 0) {
            return { weekText, monthText };
        }
        if (week === 0) {
            return { dayText, monthText };
        }
        if (month === 0) {
            return { dayText, weekText };
        }
        return { dayText, weekText, monthText };
    }
    get fullDurationText() {
        var _a, _b, _c;
        let fulleMonth = this.convertFullDateToMonths();
        const day = fulleMonth.days;
        const week = fulleMonth.weeks;
        const month = fulleMonth.months;
        let durationText = this.durationText(day, week, month);
        console.log({ durationText, month });
        return ` ${(_a = durationText.monthText) !== null && _a !== void 0 ? _a : ""} ${(_b = durationText.weekText) !== null && _b !== void 0 ? _b : ""} ${(_c = durationText.dayText) !== null && _c !== void 0 ? _c : ""}`;
    }
    setFullDurationText(element, text) {
        if (element instanceof HTMLInputElement) {
            element.value = text;
        }
        else {
            element.innerHTML = text;
        }
    }
}
exports["default"] = DateManager;


/***/ }),

/***/ "./src/scripts/password-manager.ts":
/*!*****************************************!*\
  !*** ./src/scripts/password-manager.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
class PasswordManager {
    passwordVisibility() {
        return PasswordVisibility;
    }
}
exports["default"] = PasswordManager;
class PasswordVisibility {
    constructor(iconPath, showIconsToClick = false) {
        this.active = () => {
            const fieldContainer = document.querySelectorAll("password");
            utils_1.default.processNodes(fieldContainer, (container) => {
                container.setAttribute('pws-target', '');
                const field = container.querySelector("input[type='password']");
                const html = this.html();
                container.appendChild(html);
                const iconHide = container.querySelector(".hide-eye");
                const iconShow = container.querySelector(".show-eye");
                const fieldBorderRadius = utils_1.default.findComputedStyle(field, "border-radius");
                if ("" !== fieldBorderRadius) {
                    container.style.borderTopRightRadius = fieldBorderRadius;
                    container.style.borderBottomRightRadius = fieldBorderRadius;
                }
                if (this.showIconsToClick) {
                    field.addEventListener("click", () => {
                        html.style.display = 'flex';
                    });
                }
                else {
                    html.style.display = 'flex';
                }
                iconShow.addEventListener('click', () => {
                    if (field.type === 'password') {
                        field.type = "text";
                        field.style.paddingRight = "35px";
                        iconShow.style.display = 'none';
                        iconHide.style.display = 'flex';
                    }
                });
                iconHide.addEventListener('click', () => {
                    if (field.type === 'text') {
                        field.type = "password";
                        iconShow.style.display = 'flex';
                        iconHide.style.display = 'none';
                    }
                });
            });
        };
        this.iconPath = iconPath;
        this.showIconsToClick = showIconsToClick;
    }
    html() {
        const html = `<div class='eyes-icon'>
            <svg class="hide-eye" style='display:none;'><use xlink:href="/${this.iconPath.hide}"></use></svg>
            <svg class="show-eye"><use xlink:href="/${this.iconPath.show}"></use></svg>
        </div>`;
        const htmlstyle = {
            display: 'none',
            position: 'absolute',
            top: '0',
            right: '0',
            height: '100%',
            width: '35px',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d5e3ec'
        };
        let node = utils_1.default.textToHTMLElement(html, "div");
        Object.assign(node.style, htmlstyle);
        return this.iconStyle(node);
    }
    iconStyle(html) {
        let svg = html.querySelectorAll('svg');
        html.innerHTML = "";
        utils_1.default.processNodes(svg, (iconSvg) => {
            const style = {
                color: '#999',
                cursor: 'pointer',
                width: '1.5rem',
                height: '1.5rem',
            };
            Object.assign(iconSvg.style, style);
            html.appendChild(iconSvg);
        });
        return html;
    }
}


/***/ }),

/***/ "./src/scripts/select-manager.ts":
/*!***************************************!*\
  !*** ./src/scripts/select-manager.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __importDefault(__webpack_require__(/*! @easylibs/utils */ "../utils/dist/utils.js"));
class SelectManager {
    /**
     * Cette méthode redimensionne automatiquement un élément "select"
     * en fonction de la longueur du texte sélectionné
     * @param select
     */
    static autoResize(select) {
        let field = utils_1.default.$$(select);
        if (field instanceof HTMLSelectElement) {
            field.addEventListener('change', (event) => {
                let tempSelect = document.createElement('select'), tempOption = document.createElement('option');
                if (null !== event.target && event.target instanceof HTMLSelectElement) {
                    tempOption.textContent = event.target.options[event.target.selectedIndex].text;
                    tempSelect.style.cssText += `
                    visibility: hidden;
                    position: fixed;
                    `;
                    tempSelect.appendChild(tempOption);
                    event.target.after(tempSelect);
                    const tempSelectWidth = tempSelect.getBoundingClientRect().width;
                    console.log({ tempSelect });
                    event.target.style.width = `${tempSelectWidth}px`;
                    tempSelect.remove();
                }
            });
            field.dispatchEvent(new Event('change'));
        }
        else {
            console.error("Le paramètre n'est pas un élément Select");
        }
    }
    /**
     * Gestion du select avec les icônes
     * @param {string | HTMLSelectElement} select
     */
    static addIconToOptions(select) {
        let input = utils_1.default.$$(select);
        if (input instanceof HTMLSelectElement) {
            input.addEventListener('change', function () {
                if (null !== input && input instanceof HTMLSelectElement) {
                    let optionValue = this.options[input.selectedIndex].value;
                    let icon = document.body.querySelector(`[data-option="${optionValue}"]`);
                    if (icon) {
                        let parent = icon.parentNode;
                        let icons = parent.children;
                        for (let i = 0; i < icons.length; i++) {
                            icons[i].setAttribute('style', 'display:none;');
                        }
                        icon.setAttribute('style', 'display:flex;');
                    }
                }
            });
        }
        else {
            console.log("Le paramètre est invalide");
        }
    }
}
exports["default"] = SelectManager;


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/form-input.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=form-input.js.map