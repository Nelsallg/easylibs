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

/***/ "./src/scripts/focus-in-block.ts":
/*!***************************************!*\
  !*** ./src/scripts/focus-in-block.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFocusableElements = exports.focusInBlock = void 0;
/**
 * Gère le focus clavier sur les éléments d'un bloc HTML spécifié.
 * @param key - L'événement clavier qui a déclenché la fonction.
 * @param block - L'élément HTML qui représente le bloc sur lequel on souhaite gérer le focus.
 */
function focusInBlock(key, block) {
    key.preventDefault();
    const focusables = getFocusableElements(block);
    let index = focusables.findIndex(f => f === block.querySelector(':focus'));
    (key.shiftKey === true) ? index-- : index++;
    if (index >= focusables.length) {
        index = 0;
    }
    if (index < 0) {
        index = focusables.length - 1;
    }
    const FIELD = focusables[index];
    FIELD.focus();
}
exports.focusInBlock = focusInBlock;
/**
 * Récupère tous les éléments focusables dans un bloc HTML spécifié.
 * @param block - L'élément HTML qui représente le bloc contenant les éléments focusables.
 * @returns Un tableau d'éléments focusables présents dans le bloc.
 */
function getFocusableElements(block) {
    let focusableSelector = "button, select, input, a, textarea";
    return Array.from(block.querySelectorAll(focusableSelector));
}
exports.getFocusableElements = getFocusableElements;


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
/*!******************************!*\
  !*** ./src/progress-form.ts ***!
  \******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const focus_in_block_1 = __webpack_require__(/*! ./scripts/focus-in-block */ "./src/scripts/focus-in-block.ts");
let fieldSetElement = null;
class ProgressForm {
    constructor(enableDefaultCssStyle = true) {
        this.translateX = -530;
        this.fieldsetLength = 0;
        this.enableDefaultCssStyle = enableDefaultCssStyle;
        this.translateX = this.translateX;
    }
    run(params, styleOptions) {
        var _a;
        const fieldSets = params.form.querySelectorAll('fieldset');
        const progressElement = (_a = params.progress) === null || _a === void 0 ? void 0 : _a.progressElement;
        let nextIndex = 1;
        let prevIndex = fieldSets.length;
        let prevTranslateX = 0;
        this.fieldsetLength = fieldSets.length;
        const { progress } = this;
        this.isValid(params.form);
        if (fieldSets && fieldSets.length > 1) {
            fieldSets.forEach((fieldSet, i) => {
                var _a, _b;
                const nextButton = fieldSet.querySelector("[next__btn]");
                const prevButton = fieldSet.querySelector("[prev__btn]");
                let translateX = (_a = params.translateX) !== null && _a !== void 0 ? _a : this.translateX;
                const targetMarginWidth = (_b = params.targetMarginWidth) !== null && _b !== void 0 ? _b : 0;
                let nextTranslateX = (translateX * nextIndex) - targetMarginWidth;
                prevTranslateX = (translateX * nextIndex) + Math.abs(translateX * 2);
                const nextProgress = progress * (i + 2);
                const prevProgress = i > 1 ? progress * i : progress;
                fieldSetElement = fieldSet;
                fieldSet.classList.add(`fieldset${i}`);
                if (i === 0) {
                    const fields = fieldSet.querySelectorAll("input:not([type='hidden'],[readonly]), textarea");
                    fields[i].focus();
                    this.setFocusInFieldSet(fieldSetElement);
                }
                this.next(nextButton, nextIndex, nextTranslateX, progressElement, nextProgress);
                nextIndex++;
                if (i === 0) {
                    (0, focus_in_block_1.getFocusableElements)(fieldSetElement);
                }
                this.prev(prevButton, prevIndex, prevTranslateX, progressElement, prevProgress);
                prevIndex--;
            });
        }
        if (progressElement) {
            progressElement.style.width = `${progress}%`;
        }
        if (this.enableDefaultCssStyle) {
            this.cssStyle(params, fieldSets, styleOptions);
        }
    }
    next(nextButton, nextIndex, nextTranslateX, progressElement, nextProgress) {
        const targets = this.fieldsetTargetArray;
        if (nextButton) {
            nextButton.addEventListener("click", (e) => {
                e.preventDefault();
                const fieldSet = document.querySelector(`.fieldset${nextIndex - 1}`);
                const isValid = this.isValidFieldset(fieldSet);
                if (isValid) {
                    fieldSetElement = document.querySelector(`.fieldset${nextIndex}`);
                    if (fieldSetElement) {
                        this.setFocusInFieldSet(fieldSetElement);
                        (0, focus_in_block_1.getFocusableElements)(fieldSetElement);
                    }
                    // anime({
                    //     targets: targets,
                    //     translateX: nextTranslateX,
                    //     easing: 'easeInOutExpo'
                    // });
                    if (progressElement) {
                        progressElement.style.width = `${nextProgress !== null && nextProgress !== void 0 ? nextProgress : 0}%`;
                    }
                }
            });
        }
    }
    prev(prevButton, prevIndex, prevTranslateX, progressElement, prevProgress) {
        const targets = this.fieldsetTargetArray;
        if (prevButton) {
            prevButton.addEventListener("click", (e) => {
                e.preventDefault();
                fieldSetElement = document.querySelector(`.fieldset${prevIndex}`);
                if (fieldSetElement) {
                    this.setFocusInFieldSet(fieldSetElement);
                    (0, focus_in_block_1.getFocusableElements)(fieldSetElement);
                }
                // anime({
                //     targets: targets,
                //     translateX: prevTranslateX,
                //     easing: 'easeInOutExpo'
                // });
                if (progressElement) {
                    progressElement.style.width = `${prevProgress !== null && prevProgress !== void 0 ? prevProgress : 0}%`;
                }
            });
        }
    }
    get progress() {
        return 100 / this.fieldsetLength;
    }
    setFocusInFieldSet(fieldSet) {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && fieldSet !== null) {
                (0, focus_in_block_1.focusInBlock)(e, fieldSet);
            }
        });
    }
    isValidFieldset(fieldSet) {
        if (fieldSet) {
            const fields = Array.from(fieldSet.querySelectorAll('input, select, textarea'));
            if (fields) {
                for (const field of fields) {
                    if (!field.checkValidity()) {
                        field.reportValidity();
                        return false;
                    }
                }
            }
        }
        return true;
    }
    get fieldsetTargetArray() {
        let fieldsetTargetArray = [];
        if (this.fieldsetLength > 0) {
            for (let i = 0; i < this.fieldsetLength; i++) {
                fieldsetTargetArray.push(`.fieldset${i}`);
            }
        }
        return fieldsetTargetArray;
    }
    fieldsetAnimation(targets, translateX) {
        for (let i = 0; i < targets.length; i++) {
            const fieldset = document.querySelector(`${targets[i]}`);
            fieldset.style.transform = `translateX(${translateX})`;
        }
    }
    cssStyle(params, fieldSets, styleOptions) {
        const fieldSetParent = params.form.querySelector("[fieldset__parent]");
        try {
            if (!fieldSetParent) {
                throw new Error("The element with the attribute [fieldset__parent] not found in your form");
            }
            const fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]");
            if (!fieldsetContainer) {
                throw new Error("The element with the attribute [fieldset__container] not found in your fieldset__parent");
            }
            const defaultFieldSetParentStyle = {
                height: '100%',
                overflow: 'hidden',
                width: '530px'
            };
            const defaultFormStyle = {
                width: '545px',
                height: '100%',
                boxSizing: 'border-box',
            };
            const defaultFieldsetContainerStyle = {
                width: `1800px`,
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'space-between',
            };
            const defaultFieldsetStyle = {
                width: ' 25%',
                transition: 'margin-left 0.4s ease-in-out',
                backgroundColor: '#FFFFFF',
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                padding: '30px',
                border: 'none',
                boxShadow: '0 0 5px rgba(255, 255, 255, 0.7137254902)',
                borderRadius: '3px',
            };
            // Fusionnez les styles par défaut avec les styles personnalisés
            const formStyle = Object.assign({}, defaultFormStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.form);
            const fieldSetParentStyle = Object.assign({}, defaultFieldSetParentStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetParent);
            const fieldsetContainerStyle = Object.assign({}, defaultFieldsetContainerStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetContainer);
            const fieldsetStyle = Object.assign({}, defaultFieldsetStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldset);
            Object.assign(params.form.style, formStyle);
            Object.assign(fieldSetParent.style, fieldSetParentStyle);
            Object.assign(fieldsetContainer.style, fieldsetContainerStyle);
            fieldSets.forEach((fieldSet, index) => {
                Object.assign(fieldSet.style, fieldsetStyle);
                fieldSet.classList.add(`fieldset${index}`);
            });
            const tempSelectWidth = fieldSets[0].getBoundingClientRect().width;
            const fieldsetMargingWidth = params.fieldsetMargingWidth || 60;
            const fieldSetWidth = fieldSets[0].offsetWidth;
            const fieldsetContainerWidth = this.fieldsetLength * fieldSetWidth + fieldsetMargingWidth;
            fieldsetContainer.style.width = `${fieldsetContainerWidth}px`;
        }
        catch (error) {
            console.error(error);
        }
    }
    isValid(form) {
        try {
            if (!form) {
                throw new Error('Le formulaire est invalide');
            }
            const next_buttons = form.querySelectorAll("[next__btn]");
            const prev_buttons = form.querySelector("[prev__btn]");
            const fieldSets = form.querySelectorAll('fieldset');
            if (!fieldSets) {
                throw new Error("Aucune section de formulaire trouvée.");
            }
            if (!next_buttons) {
                throw new Error('Aucun bouton "suivant" trouvé !');
            }
            if (!prev_buttons) {
                throw new Error("Aucun bouton 'précédent' trouvé !");
            }
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports["default"] = ProgressForm;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=progress-form.js.map