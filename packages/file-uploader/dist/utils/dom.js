"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$$ = void 0;
/**
 * retourne un élément du dom
 */
function $$(element) {
    if (element instanceof HTMLElement || element instanceof HTMLCollection) {
        return element;
    }
    else if (typeof element === 'string') {
        const collection = document.querySelectorAll(`${element}`);
        const el = document.querySelector(`${element}`);
        if (collection !== null && collection.length > 1) {
            return collection;
        }
        if (el !== null) {
            return el;
        }
    }
    else {
        throw new Error("Type of element is not supported");
    }
}
exports.$$ = $$;
//# sourceMappingURL=dom.js.map