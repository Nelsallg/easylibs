define(["require", "exports", "../../utils/src/dom", "./scripts/modal-component", "./scripts/template"], function (require, exports, dom_1, modal_component_1, template_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Flash = void 0;
    class FormatParamsToObject {
        constructor(params) {
            this.properties = {};
            this.properties = {};
            if (FormatParamsToObject.ACCEPTED_PARAMS.length > 0) {
                FormatParamsToObject.ACCEPTED_PARAMS.forEach(key => {
                    if (params.hasOwnProperty(key)) {
                        Object.assign(this.properties, { [key]: params[key] });
                    }
                });
            }
        }
        getProperties() {
            return this.properties;
        }
    }
    FormatParamsToObject.ACCEPTED_PARAMS = [];
    FormatParamsToObject.ACCEPTED_PARAMS = [
        "message", "type", "duration", "title", "closeButton",
        "container", "icon", "onClickClose", "autoHide",
        "delayAutoHide", "destroyOnHide", "zIndex",
        "animationIn", "animationOut",
    ];
    class Flash {
        /**
        * Ajoute un message Flash avec les options spécifiées.
        * @param params - Les options du message Flash sous form d'objet {cle : valeur}.
        * Les clés disponibles sont:
        *   * message
        *   * flashbox
        *   * type
        *   * duration
        *   * title
        *   * icon
        *   * closeButton
        * @returns - L'instance de la classe Flash.
        */
        addFlash(params) {
            var _a;
            let properties = new FormatParamsToObject(params).getProperties();
            let flash = Flash.create(properties['duration'], properties['type']);
            this.show({
                message: properties['message'],
                flashBox: flash,
                container: properties['container'],
                type: properties['type'],
                duration: properties['duration'],
                title: properties['title'],
                icon: properties['icon'],
                closeButton: (_a = properties['closeButton']) !== null && _a !== void 0 ? _a : false,
            });
            return this;
        }
        /**
         * Affiche un message Flash avec les options spécifiées.
         * @param params - Les options du message Flash ou le sélecteur de l'élément Flash existant.
         * @param container - Le conteneur dans lequel afficher le message Flash (facultatif).
         * @returns - L'instance de la classe Flash.
         */
        show(params, container) {
            let flashBox;
            let datas;
            switch (typeof params) {
                case 'string':
                    flashBox = (0, dom_1.$$)(params);
                    break;
                default:
                    let __params = params;
                    datas = {
                        message: __params['message'],
                        container: __params['container'],
                        icon: __params['icon'],
                        duration: __params['duration'],
                        type: __params['type'],
                        flashBox: __params['flashBox'],
                        title: __params['title'],
                        closeButton: __params['closeButton']
                    };
                    break;
            }
            if (flashBox && flashBox instanceof HTMLElement) {
                const message = flashBox.innerText;
                const icon = flashBox.getAttribute("icon");
                const closeButton = flashBox.getAttribute("closeButton");
                flashBox.innerHTML = this.flashHTMLModel({ message: message, icon: icon, closeButton: closeButton });
                let modalComponent = new modal_component_1.ModalComponent(flashBox, container);
                modalComponent.open();
            }
            else if (datas) {
                const { message, icon, container, closeButton, flashBox, title, type } = datas;
                flashBox.innerHTML = this.flashHTMLModel({
                    title: title,
                    type: type,
                    message: message,
                    icon: icon,
                    closeButton: closeButton
                });
                let modalComponent = new modal_component_1.ModalComponent(flashBox, container);
                modalComponent.open();
            }
            return this;
        }
        /**
         * Retourne le modèle HTML pour le message Flash.
         * @param properties - Les propriétés du message Flash.
         * @returns - Le modèle HTML du message Flash.
         */
        flashHTMLModel(properties, template) {
            return (0, template_1.flashTemplate)(properties, template);
        }
        /**
         * Crée un élément Flash avec les options spécifiées.
         * @param duration - La durée d'affichage du message Flash (facultatif).
         * @param type - Le type de message Flash (facultatif).
         * @returns - L'élément Flash créé.
         * @private
         */
        static create(duration, type) {
            let lastFlashBox = (0, dom_1.$$)('.flash-box');
            if (lastFlashBox) {
                lastFlashBox.remove();
            }
            (undefined != type) ?
                type = "flashtype-" + type :
                type = "";
            let flashBox = document.createElement('flash');
            flashBox.setAttribute('class', `flash-box ${type}`);
            if (undefined !== duration && duration > 0) {
                flashBox.setAttribute('duration', `${duration}`);
            }
            return flashBox;
        }
    }
    exports.Flash = Flash;
});
//# sourceMappingURL=index.js.map