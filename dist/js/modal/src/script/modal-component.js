define(["require", "exports", "../functions/audio", "./animations/animation"], function (require, exports, audio_1, animation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModalComponent = void 0;
    class ModalComponent {
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
                const modal = this.modal;
                modal.setAttribute('aria-hidden', 'true');
                (0, animation_1.animeOut)({
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
                const audio = (0, audio_1.setAudio)(this.audio);
                audio.volume = this.volume;
                audio.play();
            }
            const modal = this.modal;
            (0, animation_1.animeIn)({ element: modal, animation: this.animation, display: 'flex' });
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
            this.closeButton = modal.querySelector('#flash-close-button');
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
    exports.ModalComponent = ModalComponent;
});
//# sourceMappingURL=modal-component.js.map