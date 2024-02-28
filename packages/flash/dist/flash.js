"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runner_1 = __importDefault(require("./scripts/runner"));
require("./assets/styles/flash.css");
const utils_1 = __importDefault(require("@easylibs/utils"));
class FormatParamsToObject {
    constructor(options) {
        this.properties = {};
        this.properties = {};
        if (FormatParamsToObject.ACCEPTED_PARAMS.length > 0) {
            FormatParamsToObject.ACCEPTED_PARAMS.forEach(key => {
                if (options && options.hasOwnProperty(key)) {
                    Object.assign(this.properties, { [key]: options[key] });
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
    "container", "icon", "tone"
];
class Flash {
    /**
    * Adds a Flash message with the specified options.
    * @param options
    * @returns - The instance of the Flash class.
    */
    static add(options, container) {
        let datas;
        switch (options) {
            case null:
            case undefined:
                const flashBox = document.querySelector("flash");
                try {
                    if (!flashBox) {
                        throw new Error('No <flash></flash> element found in your HTML file');
                    }
                    const message = utils_1.default.escape(flashBox.getAttribute("message"));
                    const icon = Boolean(flashBox.getAttribute("icon"));
                    const duration = parseInt(flashBox.getAttribute("duration"));
                    const type = flashBox.getAttribute("type");
                    const title = flashBox.getAttribute("title");
                    const closeButton = Boolean(flashBox.getAttribute("closeButton"));
                    const tone = Boolean(flashBox.getAttribute("tone"));
                    const template = flashBox.getAttribute("template");
                    Flash.TEMPLATE = isNaN(parseInt(String(template))) ? undefined : parseInt(template);
                    datas = { message, icon, duration, type, title, closeButton, tone };
                }
                catch (error) {
                    console.error(error);
                }
                break;
            default:
                datas = options;
                break;
        }
        let properties = new FormatParamsToObject(datas).getProperties();
        let flash = Flash.create(properties['duration'], properties['type']);
        Flash.OPTIONS = datas;
        Flash.OPTIONS.flashBox = flash;
        Flash.OPTIONS.container = container;
        Flash.run();
        return new this;
    }
    /**
     * Displays a Flash message with the specified options.
     * @param options - The Flash message options.
     * @param container - The container in which to display the Flash message (optional).
     * @returns - The instance of the Flash class.
     */
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            if (Flash.OPTIONS) {
                const { container, flashBox, tone } = Flash.OPTIONS;
                const _template = yield Flash.template();
                flashBox.append(...Array.from(_template));
                let runner = new runner_1.default({ modal: flashBox, container, tone });
                runner.open();
            }
            return new this;
        });
    }
    /**
     * Returns the HTML template for the Flash message.
     * @param properties - Flash message properties.
     * @returns - The HTML template for the Flash message.
     */
    static template() {
        return __awaiter(this, void 0, void 0, function* () {
            const template = Flash.TEMPLATE;
            const properties = Flash.OPTIONS;
            let svg;
            if (properties.icon && properties.type) {
                svg = yield Flash.svg(properties.type);
            }
            const icon = svg ? `<h6 class="flash-icon">${svg.replace('"', "")}</h6>` : "";
            const title = (properties.title && "" !== properties.title) ? `<p class="flash-title">${properties.title}</p>` : "";
            const button = (true === Boolean(properties.closeButton)) ? `<div aria-label="Close message" _close_></div>` : "";
            const header = '' !== title || '' !== button ? `<span class="flash-header">${title}${button}</span>` : "";
            let _template;
            if (!template || Number.isInteger(template)) {
                switch (template) {
                    case 2:
                        _template = `${button}<span class="flash-content">
                ${icon}
                <p class="flash-message">${properties.message}</p>
            </span>`;
                        break;
                    default:
                        _template = `${header}
                      <span class="flash-content">
                          ${icon}
                          <p class="text">${properties.message}</p>
                      </span>`;
                        break;
                }
            }
            else if (typeof template == "string") {
                return Flash.parseTemplate(template, properties);
            }
            return utils_1.default.textToHTMLElement(_template, "div", true);
        });
    }
    static parseTemplate(template, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const regexp = /{{(.*?)}}/g;
            let matches = template.matchAll(regexp);
            let promises = []; // Collecter les promesses
            let keys = [];
            for (let match of matches) {
                let key = match[1];
                if (key === "icon" && options[key] === true && 'type' in options) {
                    promises.push(Flash.svg(options['type']));
                    keys.push(match[0]); // Stocker la chaîne à remplacer
                }
            }
            let results = yield Promise.all(promises); // Attendre les résultats des promesses
            keys.forEach((key, index) => {
                template = template.replace(key, results[index]);
            });
            template = template.replace(regexp, (match, key) => {
                if (key in options && options[key] !== undefined) {
                    return options[key];
                }
                ;
                return match;
            });
            try {
                return utils_1.default.textToHTMLElement(template, "div", true);
            }
            catch (e) {
                throw new Error("Impossible de parser le modèle de notification.");
            }
        });
    }
    /**
     * Crée un élément Flash avec les options spécifiées.
     * @param duration - La durée d'affichage du message Flash (facultatif).
     * @param type - Le type de message Flash (facultatif).
     * @returns - L'élément Flash créé.
     * @private
     */
    static create(duration, type) {
        let lastFlashBox = document.querySelector('flash');
        let template = null;
        if (lastFlashBox) {
            lastFlashBox.remove();
        }
        (undefined != type) ?
            type = "flashtype-" + type :
            type = "";
        (Number.isInteger(this.TEMPLATE)) ?
            template = this.TEMPLATE :
            template = null;
        if (!this.TEMPLATE)
            template = 1;
        let flashBox = document.createElement('flash');
        flashBox.role = "alert";
        flashBox.setAttribute('class', `flash-box ${type}`);
        if (undefined !== duration && duration > 0) {
            flashBox.setAttribute('duration', `${duration}`);
        }
        if (template)
            flashBox.setAttribute('template', `${template}`);
        return flashBox;
    }
    /**
     * Returns an SVG representation as a string.
     *
     * @param name - The name of the icon to use.
     * @returns The SVG representation as a string.
     */
    static svg(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let names = ["success", "danger", "warning", "info"];
            if (undefined !== name && names.includes(name)) {
                try {
                    const flashIcon = sessionStorage.getItem(name);
                    if (flashIcon)
                        return flashIcon;
                    const svgUrl = `https://raw.githubusercontent.com/Nelsallg/easylibs/1.0.0/packages/flash/dist/assets/icons/${name}.svg`;
                    const response = yield fetch(svgUrl);
                    const data = yield response.text();
                    if (!response.ok) {
                        console.error("Erreur lors du chargement du fichier SVG:", data);
                    }
                    sessionStorage.setItem(name, data);
                    return data;
                }
                catch (e) {
                    console.error("Erreur lors de l'importation de l'icon", e);
                    return "";
                }
            }
            else {
                return name;
            }
        });
    }
}
exports.default = Flash;
//# sourceMappingURL=flash.js.map