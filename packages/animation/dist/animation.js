"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./scripts/helpers");
/**
 * Provides animation functionalities for HTML elements.
 */
class Animation {
    /**
     * Stops the propagation of the given event.
     * @param e The event to stop propagation for.
     */
    static stopPropagation(e) {
        e.stopPropagation();
    }
    /**
     * Performs an entrance animation on the specified HTML element.
     * @param options Configuration options for the animation.
     */
    animeIn(options) {
        const { element, animateElement } = (0, helpers_1.getElement)(options);
        const fromInToOut = true;
        (0, helpers_1.applyAnimation)(element, animateElement, options.animation, fromInToOut, options);
    }
    /**
     * Performs an exit animation on the specified HTML element, then hides or removes it.
     * @param options Configuration options for the animation.
     */
    animeOut(options) {
        const { element, animateElement } = (0, helpers_1.getElement)(options);
        const fromInToOut = false;
        (0, helpers_1.applyAnimation)(element, animateElement, options.animation, fromInToOut, options);
    }
    /**
     * Performs either an entrance or exit animation on the specified HTML element in response to open and close button events.
     * @param options Configuration options for the animation, including elements and buttons involved.
     */
    animeInOut(options) {
        var _a, _b;
        let modalIsOpen = false;
        const toggleModal = () => {
            if (!modalIsOpen) {
                this.animeIn(options);
            }
            else {
                this.animeOut(options);
            }
            modalIsOpen = !modalIsOpen;
        };
        (_a = options.openButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", toggleModal);
        (_b = options.closeButton) === null || _b === void 0 ? void 0 : _b.addEventListener("click", toggleModal);
    }
}
exports.default = Animation;
//# sourceMappingURL=animation.js.map