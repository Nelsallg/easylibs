"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("@easylibs/utils"));
const animation_1 = __importDefault(require("@easylibs/animation"));
class Runner {
    /**
     * Cette classe  encapsule la logique liée à la manipulation des modals,
     * y compris leur ouverture, leur fermeture, la gestion de l'audio, de la durée et de l'animation.
     * Elle fournit une interface simple pour interagir avec les modals
     * @param modal L'élément modal à manipuler.
     * @param container Le conteneur dans lequel insérer la modal (optionnel).
     * @param animation Les options d'animation de la modal (optionnel).
     */
    constructor(options) {
        /**
         * Méthode pour fermer la modal.
         */
        this.close = () => {
            const animation = new animation_1.default();
            const modal = this.modal;
            modal.setAttribute('aria-hidden', 'true');
            animation.animeOut({
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
        this.modal = options.modal;
        this.tone = options.tone ? null : null;
        this.volume = parseInt(this.modal.getAttribute('volume') || '1', 10);
        this.duration = parseInt(this.modal.getAttribute('duration') || "0", 10);
        this.modal.setAttribute('aria-hidden', 'true');
        this.container = options.container;
        this.animation = options.animation ? options.animation : { type: 'fade', position: 'top' };
        this.closeButton;
        this.openButton;
        this.autoClose();
    }
    /**
     * Méthode pour ouvrir la modal.
     */
    open() {
        var _a;
        if (this.tone) {
            const toneUrl = "https://raw.githubusercontent.com/Nelsallg/easylibs/1.0.0/packages/flash/dist/assets/tone.ogg";
            const tone = utils_1.default.setAudio(toneUrl);
            tone.volume = this.volume;
            tone.play();
        }
        const animation = new animation_1.default();
        const modal = this.modal;
        animation.animeIn({ element: modal, animation: this.animation, display: 'flex' });
        const container = this.container;
        const existingFlash = document.querySelector('flash');
        if (existingFlash)
            document.body.removeChild(existingFlash);
        if (undefined !== container) {
            container.insertBefore(modal, container.firstChild);
            this.clearProperties(this.modal);
        }
        else {
            document.body.insertBefore(modal, document.body.firstChild);
            this.clearProperties(this.modal);
        }
        modal.setAttribute('aria-hidden', 'false');
        this.closeButton = modal.querySelector('.flash-close-button');
        if (!this.closeButton) {
            this.closeButton = modal.querySelector('[_close_]');
        }
        (_a = this.closeButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.close);
    }
    /**
     * Méthode interne pour nettoyer les attributs de la modal.
     * @param modal L'élément modal à nettoyer.
     */
    clearProperties(modal) {
        document.addEventListener('DOMContentLoaded', function () {
            modal.removeAttribute('message');
            modal.removeAttribute('duration');
            modal.removeAttribute('icon');
            modal.removeAttribute('tone');
            modal.removeAttribute('volume');
            modal.removeAttribute('container');
            modal.removeAttribute('closeButton');
        });
    }
}
exports.default = Runner;
//# sourceMappingURL=runner.js.map