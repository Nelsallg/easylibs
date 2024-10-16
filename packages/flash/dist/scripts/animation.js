"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animeInOut = exports.animeOut = exports.animeIn = void 0;
const stopPropagation = function (e) {
    e.stopPropagation();
};
/**
 * Effectue une animation de commutation sur un élément HTML spécifié.
 * @param element - L'élément HTML sur lequel l'animation doit être appliquée.
 * @param fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa.
 * @param animation - Les informations sur le type et la position de l'animation (facultatif).
 */
function switchAnimation(element, fromInToOut, animation) {
    if (animation) {
        const animeType = animation.type ?? "fade";
        const animePosition = animation.position ?? "top";
        const { clearAfterApplying } = animation;
        if (true === fromInToOut) {
            element.classList.remove(`${animeType}-out-${animePosition}`);
            element.classList.add(`${animeType}-in-${animePosition}`);
            if (true === clearAfterApplying) {
                setTimeout(() => {
                    element.classList.remove(`${animeType}-in-${animePosition}`);
                }, 1000);
            }
        }
        else {
            element.classList.remove(`${animeType}-in-${animePosition}`);
            element.classList.add(`${animeType}-out-${animePosition}`);
            if (true === clearAfterApplying) {
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
function animeIn(options) {
    const fromInToOut = options.fromInToOut ?? true;
    const { animation } = options;
    const _element = options.element;
    const animateElement = _element instanceof HTMLElement ? undefined : _element?.animateElement;
    const element = _element instanceof HTMLElement ? _element : _element?.element;
    if (element) {
        switchAnimation(animateElement ?? element, fromInToOut, animation);
        if (null !== options.display) {
            if (undefined !== options.display) {
                element.style.display = options.display;
            }
            else {
                element.style.display = "block";
            }
        }
    }
}
exports.animeIn = animeIn;
/**
 * Effectue une animation de sortie sur un élément HTML spécifié, puis le masque ou le supprime.
 * @param options.element - L'élément HTML sur lequel l'animation d'entrée ou de sortie doit être appliquée.
 * @param options.display - La valeur de la propriété CSS "display" à appliquer à l'élément lors de l'animation (facultatif).
 * @param options.animation - Les informations sur le type et la position de l'animation (facultatif).
 * @param options.delay - Le délai en millisecondes avant de masquer ou de supprimer l'élément (facultatif).
 * @param options.closeButton - Le bouton de fermeture lié à l'élément (facultatif).
 * @param options.fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa.
 */
function animeOut(options) {
    const { animation } = options;
    const _element = options.element;
    const animateElement = _element instanceof HTMLElement ? undefined : _element?.animateElement;
    const element = _element instanceof HTMLElement ? _element : _element?.element;
    const fromInToOut = options.fromInToOut ?? false;
    const { display, delay, closeButton } = options;
    if (element && undefined !== fromInToOut) {
        if (display) {
            if (closeButton) {
                closeButton.addEventListener("click", function () {
                    switchAnimation(animateElement ?? element, fromInToOut, animation);
                    setTimeout(() => {
                        element.style.display = "none";
                    }, delay || 0);
                    return;
                });
            }
            switchAnimation(animateElement ?? element, fromInToOut, animation);
            setTimeout(() => {
                element.style.display = "none";
            }, delay || 0);
        }
        else {
            if (closeButton) {
                closeButton.addEventListener("click", function () {
                    switchAnimation(animateElement ?? element, fromInToOut, animation);
                    setTimeout(() => {
                        element.remove();
                    }, delay || 0);
                    return;
                });
            }
            switchAnimation(animateElement ?? element, fromInToOut, animation);
            setTimeout(() => {
                element.remove();
            }, options.delay || 0);
        }
    }
}
exports.animeOut = animeOut;
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
function animeInOut(options) {
    let modalIsOpen = false;
    const { element, openButton, closeButton, animation } = options;
    const display = options.display ?? "block";
    const { dispatchCloseEvent } = options;
    const delay = options.delay ?? 350;
    try {
        if (openButton) {
            openButton.addEventListener("click", function () {
                if (false === modalIsOpen) {
                    modalIsOpen = true;
                    animeIn({ element: element, animation: animation, display: display });
                }
                else {
                    modalIsOpen = false;
                    animeOut({
                        element: element,
                        animation: animation,
                        display: display,
                        delay: delay,
                    });
                }
            });
        }
        if (undefined !== closeButton && !modalIsOpen) {
            closeButton.addEventListener("click", function () {
                modalIsOpen = false;
                animeOut({
                    element: element,
                    animation: animation,
                    display: display,
                    delay: delay,
                });
            });
            if (dispatchCloseEvent && dispatchCloseEvent.value === true) {
                const dispElement = dispatchCloseEvent.key;
                document.addEventListener("click", function (event) {
                    const eventTarget = event.target;
                    if (openButton &&
                        closeButton &&
                        !openButton.contains(eventTarget) &&
                        !closeButton.contains(eventTarget) &&
                        !dispElement.contains(eventTarget)) {
                        modalIsOpen = false;
                        animeOut({
                            element: element,
                            animation: animation,
                            display: display,
                            delay: delay,
                        });
                    }
                });
                dispElement.addEventListener("click", stopPropagation);
            }
            return;
        }
        if (undefined === closeButton && !modalIsOpen && dispatchCloseEvent) {
            if (undefined === dispatchCloseEvent.key &&
                true === dispatchCloseEvent.value) {
                const animateElement = element instanceof HTMLElement ? undefined : element?.animateElement;
                const _element = element instanceof HTMLElement ? element : element?.element;
                document.addEventListener("click", function (event) {
                    const eventTarget = event.target;
                    if (openButton &&
                        _element &&
                        !openButton.contains(eventTarget) &&
                        !_element.contains(eventTarget)) {
                        modalIsOpen = false;
                        animeOut({
                            element: element,
                            animation: animation,
                            display: display,
                            delay: delay,
                        });
                    }
                });
                if (_element) {
                    _element.addEventListener("click", stopPropagation);
                }
            }
            else {
                const dispElement = dispatchCloseEvent.key;
                document.addEventListener("click", function (event) {
                    const eventTarget = event.target;
                    if (openButton &&
                        !openButton.contains(eventTarget) &&
                        !dispElement.contains(eventTarget)) {
                        modalIsOpen = false;
                        animeOut({
                            element: element,
                            animation: animation,
                            display: display,
                            delay: delay,
                        });
                    }
                });
                dispElement.addEventListener("click", stopPropagation);
            }
        }
    }
    catch (error) {
        throw new Error("HTMLElement null or undefined.");
    }
}
exports.animeInOut = animeInOut;
//# sourceMappingURL=animation.js.map