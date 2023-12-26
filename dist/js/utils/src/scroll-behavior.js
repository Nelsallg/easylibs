define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEndScrolling = exports.enableScrollBehavior = void 0;
    var initialMouseY = 0;
    var initialScrollTop = 0;
    var isRightClickPressed = false;
    /**
     * Gère l'événement de clic de souris enfoncé (mousedown) pour activer le défilement personnalisé.
     * Enregistre la position initiale de la souris et active
     * les écouteurs d'événements de mouvement de souris et de relâchement de clic.
     * @param event - L'événement de clic de souris enfoncé.
     */
    function handleMouseDown(event) {
        if (event.button === 2) {
            isRightClickPressed = true;
            initialMouseY = event.clientY;
            initialScrollTop = window.scrollY;
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }
    }
    /**
     * Gère l'événement de mouvement de souris (mousemove)
     * pour effectuer le défilement en fonction du mouvement de la souris.
     * @param event - L'événement de mouvement de souris.
     */
    function handleMouseMove(event) {
        if (isRightClickPressed) {
            var deltaY = event.clientY - initialMouseY;
            window.scrollTo(0, initialScrollTop - deltaY);
        }
    }
    /**
     * Gère l'événement de relâchement de clic de souris (mouseup) pour désactiver le défilement personnalisé.
     * Nettoie les écouteurs d'événements de mouvement de souris et de relâchement de clic.
     * @param event - L'événement de relâchement de clic de souris.
     */
    function handleMouseUp(event) {
        if (event.button === 2) {
            isRightClickPressed = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    }
    /**
     * Cette fonction gère les événements de défilement de la molette de la souris sur la page.
     * Lorsque l'utilisateur fait tourner la molette de la souris vers le haut ou vers le bas,
     * cette fonction permet de faire défiler la page dans la direction correspondante.
     * Cela offre une alternative pratique à la barre de défilement traditionnelle pour naviguer sur la page.
     * @param event
     */
    function handleWheel(event) {
        if (isRightClickPressed) {
            if (undefined != event) {
                if (event.deltaY > 0) {
                    window.scrollBy(0, 100);
                }
                else if (event.deltaY < 0) {
                    window.scrollBy(0, -100);
                }
            }
        }
    }
    /**
     * Cette fonction gère les événements de pression d'une touche du clavier.
     * Lorsque l'utilisateur enfonce la touche "ArrowDown" (flèche vers le bas),
     * cette fonction permet de faire défiler la page vers le bas.
     * Elle offre une méthode simple pour naviguer rapidement
     * à travers le contenu de la page en utilisant uniquement le clavier.
     * @param event
     */
    function handleKeyDown(event) {
        if (undefined != event) {
            if (isRightClickPressed && event.key === 'ArrowDown') {
                window.scrollBy(0, 100);
            }
        }
    }
    /**
     * Cette fonction active les fonctionnalités de défilement et de glissement sur la page.
     * Elle permet à l'utilisateur d'interagir avec la page en utilisant la souris,
     * la molette de la souris et le clavier pour faire défiler le contenu.
     * En appelant cette fonction,
     * l'utilisateur peut profiter d'une expérience de navigation plus interactive et personnalisée.
     */
    function enableScrollBehavior() {
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('wheel', handleWheel);
        window.addEventListener('keydown', handleKeyDown);
    }
    exports.enableScrollBehavior = enableScrollBehavior;
    function isEndScrolling(element, callback = (is, scroll) => { }, margin) {
        var _a;
        let marginX = 0;
        let marginY = 0;
        (margin) ? marginX = (_a = margin.x) !== null && _a !== void 0 ? _a : 0 : marginY = marginY !== null && marginY !== void 0 ? marginY : 0;
        element.addEventListener('scroll', function (e) {
            if (this.scrollTop > 0 && (this.scrollTop + this.clientHeight) + marginY >= this.scrollHeight) {
                return callback(true, "y");
            }
            if (this.scrollLeft > 0 && (this.scrollLeft + this.clientWidth) + marginX >= this.scrollWidth) {
                return callback(true, "x");
            }
        });
        return callback(false);
    }
    exports.isEndScrolling = isEndScrolling;
});
//# sourceMappingURL=scroll-behavior.js.map