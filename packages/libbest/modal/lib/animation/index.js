"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationHandler = void 0;
class AnimationHandler {
    static stopPropagation(e) {
        e.stopPropagation();
    }
    /**
   * Effectue une animation de commutation sur un élément HTML spécifié.
   * @param element - L'élément HTML sur lequel l'animation doit être appliquée.
   * @param fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa.
   * @param animation - Les informations sur le type et la position de l'animation (facultatif).
   */
    switchAnimation(element, fromInToOut, animation) {
        var _a, _b;
        if (animation !== undefined) {
            const animeType = (_a = animation.type) !== null && _a !== void 0 ? _a : "fade";
            const animePosition = (_b = animation.position) !== null && _b !== void 0 ? _b : "top";
            const { clearAfterApplying } = animation;
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
    /**
   * Effectue une animation d'entrée sur un élément HTML spécifié.
   * @param options.element - L'élément HTML sur lequel l'animation d'entrée doit être appliquée.
   * @param options.animation - Les informations sur le type et la position de l'animation (facultatif).
   * @param options.display - La valeur de la propriété CSS "display" à appliquer à l'élément après l'animation (facultatif).
   * @param options.fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa lors de l'utilisation de la fonction `switchAnimation`.
   */
    animeIn(options) {
        var _a, _b;
        const fromInToOut = (_a = options.fromInToOut) !== null && _a !== void 0 ? _a : true;
        const { animation } = options;
        const _element = options.element;
        const animateElement = _element instanceof HTMLElement ? undefined : _element === null || _element === void 0 ? void 0 : _element.animateElement;
        const element = _element instanceof HTMLElement ? _element : _element === null || _element === void 0 ? void 0 : _element.element;
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
    animeOut(options) {
        var _a;
        const { animation } = options;
        const _element = options.element;
        const animateElement = _element instanceof HTMLElement ? undefined : _element === null || _element === void 0 ? void 0 : _element.animateElement;
        const element = _element instanceof HTMLElement ? _element : _element === null || _element === void 0 ? void 0 : _element.element;
        const fromInToOut = (_a = options.fromInToOut) !== null && _a !== void 0 ? _a : false;
        const { display, delay, closeButton } = options;
        if (element && fromInToOut !== undefined) {
            if (display) {
                if (closeButton) {
                    closeButton.addEventListener("click", () => {
                        this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                        setTimeout(() => {
                            element.style.display = "none";
                        }, delay || 0);
                    });
                }
                this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                setTimeout(() => {
                    element.style.display = "none";
                }, delay || 0);
            }
            else {
                if (closeButton) {
                    closeButton.addEventListener("click", () => {
                        this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                        setTimeout(() => {
                            element.remove();
                        }, delay || 0);
                    });
                }
                this.switchAnimation(animateElement !== null && animateElement !== void 0 ? animateElement : element, fromInToOut, animation);
                setTimeout(() => {
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
    animeInOut(options) {
        var _a, _b;
        let modalIsOpen = false;
        const { element, openButton, closeButton, animation } = options;
        const display = (_a = options.display) !== null && _a !== void 0 ? _a : "block";
        const { dispatchCloseEvent } = options;
        const delay = (_b = options.delay) !== null && _b !== void 0 ? _b : 350;
        try {
            if (openButton) {
                openButton.addEventListener("click", () => {
                    if (!modalIsOpen) {
                        modalIsOpen = true;
                        this.animeIn({ element, animation, display });
                    }
                    else {
                        modalIsOpen = false;
                        this.animeOut({
                            element,
                            animation,
                            display,
                            delay,
                        });
                    }
                });
            }
            if (closeButton !== undefined && !modalIsOpen) {
                closeButton.addEventListener("click", () => {
                    modalIsOpen = false;
                    this.animeOut({
                        element,
                        animation,
                        display,
                        delay,
                    });
                });
                if (dispatchCloseEvent && dispatchCloseEvent.value === true) {
                    const dispElement = dispatchCloseEvent.key;
                    document.addEventListener("click", (event) => {
                        const eventTarget = event.target;
                        if (openButton &&
                            closeButton &&
                            !openButton.contains(eventTarget) &&
                            !closeButton.contains(eventTarget) &&
                            !dispElement.contains(eventTarget)) {
                            modalIsOpen = false;
                            this.animeOut({
                                element,
                                animation,
                                display,
                                delay,
                            });
                        }
                    });
                    dispElement.addEventListener("click", AnimationHandler.stopPropagation);
                }
                return;
            }
            if (closeButton === undefined && !modalIsOpen && dispatchCloseEvent) {
                if (dispatchCloseEvent.value === true) {
                    const animateElement = element instanceof HTMLElement ? undefined : element === null || element === void 0 ? void 0 : element.animateElement;
                    const _element = element instanceof HTMLElement ? element : element === null || element === void 0 ? void 0 : element.element;
                    document.addEventListener("click", (event) => {
                        const eventTarget = event.target;
                        if (openButton && _element && !openButton.contains(eventTarget) && !_element.contains(eventTarget)) {
                            modalIsOpen = false;
                            this.animeOut({
                                element,
                                animation,
                                display,
                                delay,
                            });
                        }
                    });
                    if (_element) {
                        _element.addEventListener("click", AnimationHandler.stopPropagation);
                    }
                }
                else {
                    const dispElement = dispatchCloseEvent.key;
                    document.addEventListener("click", (event) => {
                        const eventTarget = event.target;
                        if (openButton && !openButton.contains(eventTarget) && !dispElement.contains(eventTarget)) {
                            modalIsOpen = false;
                            this.animeOut({
                                element,
                                animation,
                                display,
                                delay,
                            });
                        }
                    });
                    dispElement.addEventListener("click", AnimationHandler.stopPropagation);
                }
            }
        }
        catch (error) {
            throw new Error("HTMLElement null or undefined.");
        }
    }
}
exports.AnimationHandler = AnimationHandler;
