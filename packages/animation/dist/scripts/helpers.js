"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyAnimation = exports.getElement = void 0;
const loader_1 = require("./loader");
/**
   * Effectue une animation de commutation sur un élément HTML spécifié.
   * @param element - L'élément HTML sur lequel l'animation doit être appliquée.
   * @param fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa.
   * @param animation - Les informations sur le type et la position de l'animation (facultatif).
   */
function switchAnimation(element, fromInToOut, animCSSProps, clearAfterApplying) {
    var _a, _b;
    if (animCSSProps) {
        const animeType = (_a = animCSSProps.animationType) !== null && _a !== void 0 ? _a : "fade";
        const animePosition = (_b = animCSSProps.animationPosition) !== null && _b !== void 0 ? _b : "top";
        (0, loader_1.loadCSSAnimation)(animCSSProps); // Charge les animations CSS si ce n'est pas déjà fait.
        if (fromInToOut) {
            element.classList.remove(`${animeType}-out-${animePosition}`);
            element.classList.add(`${animeType}-in-${animePosition}`);
            if (clearAfterApplying && clearAfterApplying === true) {
                setTimeout(() => {
                    element.classList.remove(`${animeType}-in-${animePosition}`);
                }, 1000);
            }
        }
        else {
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
function getElement(options) {
    const _element = options.element;
    return {
        element: _element instanceof HTMLElement ? _element : _element === null || _element === void 0 ? void 0 : _element.element,
        animateElement: _element instanceof HTMLElement ? undefined : _element === null || _element === void 0 ? void 0 : _element.animateElement,
    };
}
exports.getElement = getElement;
function applyAnimation(element, animateElement, fromInToOut, options, animCSSProps) {
    switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animCSSProps);
    if (options.display !== null) {
        setTimeout(() => {
            var _a;
            element.style.display = (_a = options.display) !== null && _a !== void 0 ? _a : "none";
        }, options.delay || 0);
    }
    else {
        setTimeout(() => {
            element.remove();
        }, options.delay || 0);
    }
}
exports.applyAnimation = applyAnimation;
//# sourceMappingURL=helpers.js.map