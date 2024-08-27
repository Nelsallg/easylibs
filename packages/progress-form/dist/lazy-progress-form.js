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
const fetch_request_1 = __importDefault(require("@easylibs/fetch-request"));
const utils_1 = __importDefault(require("@easylibs/utils"));
const default_progress_form_1 = __importDefault(require("./default-progress-form"));
const css_style_1 = require("./scripts/css-style");
/**
 * LazyProgressForm est une classe qui étend ProgressForm pour gérer des formulaires à étapes
 * avec une progression paresseuse (lazy loading) des fieldsets.
 */
class LazyProgressForm extends default_progress_form_1.default {
    /**
     * Constructeur de la classe LazyProgressForm.
     * @param {HTMLFormElement} form - L'élément de formulaire HTML.
     * @param {string} url - L'URL à laquelle les données du formulaire sont envoyées.
     * @param {string} [parentTarget] - Sélecteur pour le conteneur parent des fieldsets.
     */
    constructor(form, url, parentTarget) {
        super(form);
        this.form = form;
        this.url = url;
        this.parentTarget = parentTarget;
        this.isLazyRunCalled = false;
    }
    /**
     * Initialise la progression paresseuse des fieldsets.
     * @returns {LazyProgressForm} - Retourne l'instance de LazyProgressForm.
     */
    lazyRun(lazyOptions) {
        var _a;
        this.isLazyRunCalled = true;
        this.isLazyProgress = true;
        let { fieldsetLength, progressOptions, styleOptions } = lazyOptions;
        this.lazyFieldsetLength = fieldsetLength;
        let { fieldSets, nextIndex, prevTranslateX, PROGRESS, progressElement } = this.init(progressOptions);
        let translateX = this.translateX - this.fieldsetMarginWidth / this.fieldsetLength;
        const targetMarginWidth = progressOptions
            ? (_a = progressOptions.targetMarginWidth) !== null && _a !== void 0 ? _a : 0
            : 0;
        for (let i = 0; i < this.lazyFieldsetLength; i++) {
            const fieldSet = (i === 0 ? document.querySelector(`fieldset`) : null);
            const nextButton = fieldSet === null || fieldSet === void 0 ? void 0 : fieldSet.querySelector("[__next__]");
            let nextTranslateX = translateX * nextIndex - targetMarginWidth;
            prevTranslateX = translateX * nextIndex + Math.abs(translateX * 2);
            const nextProgress = PROGRESS * (i + 2);
            const prevProgress = i > 1 ? PROGRESS * i : PROGRESS;
            this.fieldSetElement = fieldSet;
            if (fieldSet) {
                fieldSet.classList.add(`fieldset0`);
                fieldSet.focus();
                this.compartmentalizeFocusInFieldset(fieldSet);
                nextButton.setAttribute("data-next-index", "1");
            }
            this.progressingData[`fieldset${i}`] = {
                "@i": i,
                "@translateX": i === 0 ? 0 : i === 1 ? translateX : nextTranslateX - translateX,
                "@progress": PROGRESS * (i + 1),
                "@target": this.fieldSetElement,
                next: { i: nextIndex, button: nextButton, translateX: nextTranslateX, progress: nextProgress },
                prev: { i: i - 1, button: null, translateX: prevTranslateX, progress: prevProgress },
            };
            nextIndex++;
            this.formatProgressingData(i);
        }
        if (progressElement) {
            progressElement.style.width = `${PROGRESS}%`;
        }
        if (this.enableDefaultCssStyle) {
            this.renderedStyle = (0, css_style_1.cssStyle)(this.form, fieldSets, this.translateX, this.fieldsetLength, this.fieldsetMarginWidth, styleOptions);
        }
        return this;
    }
    /**
     * Gère la récupération et l'affichage du prochain fieldset.
     * @param {FieldSetGetterData} data - Les données nécessaires pour récupérer le prochain fieldset.
     */
    fetchNextFieldSet(data) {
        if (!this.isLazyRunCalled) {
            throw new Error("You must call LazyProgressForm.lazyRun() before.");
        }
        let { callback, spinner, template, shouldFetch, extraData } = data;
        template = template ? template : this.form.querySelector("fieldset");
        const nextButton = template.querySelector("[__next__]");
        if (nextButton) {
            nextButton.addEventListener("click", (e) => {
                var _a, _b;
                e.preventDefault();
                if (!this.isValidFieldset(template)) {
                    return;
                }
                const nextButtonInner = nextButton.innerHTML;
                const i = nextButton.dataset.nextIndex;
                let existingFieldset = (_a = this.form) === null || _a === void 0 ? void 0 : _a.querySelector(`.fieldset${i}`);
                if (existingFieldset) {
                    if (shouldFetch) {
                        const previousFieldset = (_b = this.form) === null || _b === void 0 ? void 0 : _b.querySelector(`.fieldset${parseInt(i) - 1}`);
                        if (previousFieldset) {
                            new fetch_request_1.default({
                                uri: this.url,
                                data: this.getFormData(previousFieldset, i, extraData),
                                options: {
                                    method: "POST",
                                    responseDataType: "json",
                                },
                                callbacks: {
                                    onPreFetch() {
                                        if (nextButton) {
                                            if (spinner) {
                                                nextButton.innerHTML = "";
                                                if (typeof spinner === "string") {
                                                    nextButton.innerHTML = spinner;
                                                }
                                                else {
                                                    nextButton.appendChild(spinner);
                                                }
                                            }
                                            nextButton.setAttribute("disabled", "disabled");
                                        }
                                    },
                                    onPostFetch(response, status) {
                                        if (nextButton) {
                                            nextButton.innerHTML = nextButtonInner;
                                            nextButton.removeAttribute("disabled");
                                        }
                                        if (callback)
                                            callback(response, status, parseInt(i));
                                    },
                                    onSuccess: (response) => __awaiter(this, void 0, void 0, function* () {
                                        this._next(parseInt(i));
                                        if (!nextButton) {
                                            if (callback)
                                                callback(response, 200, parseInt(i));
                                        }
                                    }),
                                },
                            });
                        }
                    }
                    else {
                        this._next(parseInt(i));
                    }
                    return;
                }
                new fetch_request_1.default({
                    uri: this.url,
                    data: this.getFormData(template, i, extraData),
                    options: {
                        method: "POST",
                        responseDataType: "json",
                    },
                    callbacks: {
                        onPreFetch() {
                            if (spinner) {
                                if (nextButton) {
                                    nextButton.innerHTML = "";
                                    if (typeof spinner === "string") {
                                        nextButton.innerHTML = spinner;
                                    }
                                    else {
                                        nextButton.appendChild(spinner);
                                    }
                                }
                                nextButton.setAttribute("disabled", "disabled");
                            }
                        },
                        onPostFetch(response, status) {
                            nextButton.innerHTML = nextButtonInner;
                            nextButton.removeAttribute("disabled");
                            if (callback)
                                callback(response, status, parseInt(i));
                        },
                        onSuccess: (response) => __awaiter(this, void 0, void 0, function* () {
                            const elements = this.graftEvents(response, parseInt(i));
                            const nextButton = elements.nextButton;
                            this.fetchNextFieldSet({
                                template: elements.fieldset,
                                spinner,
                                nextButton,
                                shouldFetch: data.shouldFetch,
                                extraData,
                                callback(response, status, index, ...data) { callback(response, status, index); },
                            });
                            if (!nextButton) {
                                // On soumet le formulaire car on est à la fin de la progression
                                const { submitButton } = elements;
                                submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", (e) => {
                                    e.preventDefault();
                                    submitButton.innerHTML = nextButtonInner;
                                    submitButton.setAttribute("disabled", "disabled");
                                });
                                if (callback)
                                    callback(response, 200, parseInt(i), elements.submitButton, elements.fieldset);
                            }
                            else {
                                nextButton.setAttribute("data-next-index", String(parseInt(i) + 1));
                            }
                        }),
                    },
                });
            });
        }
    }
    /**
   * Récupère les données du formulaire pour le fieldset donné.
   * @param {HTMLFieldSetElement} template - Le fieldset à partir duquel extraire les données.
   * @param {string} [i] - L'indice du fieldset (facultatif).
   * @param {Record<string, any>} [extraData] - Données supplémentaires à ajouter au formulaire (facultatif).
   * @returns {FormData} - Les données du formulaire sous forme de FormData.
   */
    getFormData(template, i, extraData) {
        let formData = new FormData();
        let fields = template.querySelectorAll("input,select,textarea");
        fields.forEach((field) => {
            formData.set(field.name, field.value);
        });
        if (i) {
            formData.set("nextIndex", i);
        }
        if (extraData) {
            for (const [key, value] of Object.entries(extraData)) {
                formData.set(key, value);
            }
        }
        return formData;
    }
    /**
     * Insère le fieldset reçu dans le DOM et gère les événements.
     * @param {any} response - La réponse du serveur contenant le template du fieldset.
     * @param {number} i - L'indice du fieldset actuel.
     * @returns {Record<string,any>} - Contient les éléments du fieldset, les boutons prev/next et le bouton submit.
     */
    graftEvents(response, i) {
        const fieldsetContainer = document.querySelector(`${this.parentTarget ? this.parentTarget + " " : ""}[fieldset__container]`);
        const fieldset = utils_1.default.textToHTMLElement(response.template);
        const prevButton = fieldset.querySelector("[__prev__]");
        const nextButton = fieldset.querySelector("[__next__]");
        const submitButton = fieldset.querySelector("[__submit__]");
        Object.assign(fieldset.style, this.RENDERED_STYLE.fieldsetStyle);
        fieldsetContainer.appendChild(fieldset);
        this._prev(i, prevButton);
        this._next(i);
        return { nextButton, prevButton, fieldset, submitButton };
    }
    /**
     * Déplace la progression vers le fieldset suivant.
     * @param {number} i - L'indice du fieldset actuel.
     */
    _next(i) {
        const nextProgressingData = this.getProgressingData(i, "next");
        this.next(nextProgressingData.index, nextProgressingData.translate);
    }
    /**
     * Déplace la progression vers le fieldset précédent.
     * @param {number} i - L'indice du fieldset actuel.
     * @param {HTMLElement} [prevButton] - Le bouton "prev" (facultatif).
     */
    _prev(i, prevButton) {
        const prevProgressingData = this.getProgressingData(i, "prev");
        this.prev(prevProgressingData.index, prevProgressingData.translate, prevButton);
    }
    /**
     * Récupère les données de progression pour le fieldset actuel.
     * @param {number} i - L'indice du fieldset actuel.
     * @param {string} type - Le type de progression ("next" ou "prev").
     * @returns {Record<string,any>} - Les données de progression pour le fieldset.
     */
    getProgressingData(i, type) {
        const PROGRESSING_DATA = this.PROGRESSING_DATA;
        const data = {
            next: {
                index: PROGRESSING_DATA[`fieldset${i}`]["@i"],
                translate: PROGRESSING_DATA[`fieldset${i}`]["@translateX"],
            },
            prev: {
                index: PROGRESSING_DATA[`fieldset${i}`].prev.i,
                translate: PROGRESSING_DATA[`fieldset${i}`].prev.translateX,
            },
        };
        return data[`${type}`];
    }
}
exports.default = LazyProgressForm;
//# sourceMappingURL=lazy-progress-form.js.map