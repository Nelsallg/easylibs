"use strict";
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
                next: {
                    i: nextIndex,
                    button: nextButton,
                    translateX: nextTranslateX,
                    progress: nextProgress,
                },
                prev: {
                    i: i - 1,
                    button: null,
                    translateX: prevTranslateX,
                    progress: prevProgress,
                },
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
        let { callbacks, spinner, template, shouldRepost, extraData, preventSubmit, submitAllData, } = data;
        template = template !== null && template !== void 0 ? template : this.form.querySelector("fieldset");
        const nextButton = template.querySelector("[__next__]");
        if (nextButton) {
            nextButton.addEventListener("click", (e) => {
                var _a;
                e.preventDefault();
                if (!this.isValidFieldset(template)) {
                    return;
                }
                this._buttonInner = nextButton.innerHTML;
                const index = parseInt(nextButton.dataset.nextIndex);
                let existingFieldset = (_a = this.form) === null || _a === void 0 ? void 0 : _a.querySelector(`.fieldset${index}`);
                const fetchParams = {
                    index,
                    spinner,
                    extraData,
                    nextButton,
                    nextButtonInner: this._buttonInner,
                    callbacks: {
                        onPreFetch: (data) => (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onPreFetch) ? callbacks.onPreFetch(data, index) : undefined,
                        onPostFetch: (response, status) => {
                            this.handleSpinner(nextButton, spinner, "remove");
                            const elements = this.graftEvents(response, index);
                            console.log(elements);
                            this.prepareNextStep(elements, Object.assign(Object.assign({}, fetchParams), { shouldRepost,
                                submitAllData,
                                preventSubmit }));
                        },
                        onError: (error, status) => (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onError) ? callbacks === null || callbacks === void 0 ? void 0 : callbacks.onError(error, status, index) : undefined,
                        onSuccess: (response, index, ...data) => (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onSuccess) ? callbacks === null || callbacks === void 0 ? void 0 : callbacks.onSuccess(response, index, ...data) : undefined,
                    },
                    shouldRepost,
                    submitAllData,
                    preventSubmit,
                };
                if (existingFieldset) {
                    this.processExistingFieldset(fetchParams);
                }
                else {
                    this.postFieldsetData(template, fetchParams);
                }
            });
        }
    }
    /**
     * Processes an existing fieldset.
     * @param {FetchFieldsetParams} params - Parameters for fetching the fieldset.
     */
    processExistingFieldset(params) {
        var _a;
        if (params.shouldRepost) {
            const previousFieldset = (_a = this.form) === null || _a === void 0 ? void 0 : _a.querySelector(`.fieldset${params.index - 1}`);
            if (previousFieldset) {
                this.postFieldsetData(previousFieldset, params);
            }
        }
        else {
            this._next(params.index);
        }
    }
    /**
     * Posts fieldset data to the server.
     * @param {HTMLFieldSetElement} fieldset - The fieldset element to post.
     * @param {FetchFieldsetParams} params - Parameters for posting the fieldset data.
     */
    postFieldsetData(fieldset, params) {
        const form = params.submitAllData && params.submitAllData === "atEachStep"
            ? this.form
            : undefined;
        new fetch_request_1.default({
            uri: this.url,
            data: this.getFormData(fieldset, params.index, params.extraData, form),
            options: {
                method: "POST",
                responseDataType: "json",
            },
            callbacks: {
                onPreFetch: (data) => {
                    var _a, _b;
                    this.handleSpinner(params.nextButton, params.spinner, "add");
                    return ((_a = params.callbacks) === null || _a === void 0 ? void 0 : _a.onPreFetch) ? (_b = params.callbacks) === null || _b === void 0 ? void 0 : _b.onPreFetch(data, params.index) : undefined;
                },
                onPostFetch: (response, status) => { var _a, _b; return ((_a = params.callbacks) === null || _a === void 0 ? void 0 : _a.onPostFetch) ? (_b = params.callbacks) === null || _b === void 0 ? void 0 : _b.onPostFetch(response, status, params.index) : undefined; },
                onError: (error, status) => { var _a, _b; return ((_a = params.callbacks) === null || _a === void 0 ? void 0 : _a.onError) ? (_b = params.callbacks) === null || _b === void 0 ? void 0 : _b.onError(error, status, params.index) : undefined; },
                onSuccess: (response) => { var _a, _b; return ((_a = params.callbacks) === null || _a === void 0 ? void 0 : _a.onSuccess) ? (_b = params.callbacks) === null || _b === void 0 ? void 0 : _b.onSuccess(response, params.index) : undefined; },
            },
        });
    }
    /**
     * Prepares the next step in the form progression.
     * @param {any} elements - The elements involved in the next step.
     * @param {FetchFieldsetParams} params - Parameters for fetching the next fieldset.
     */
    prepareNextStep(elements, params) {
        if (!elements)
            return;
        const nextButton = elements.nextButton;
        if (!nextButton) {
            if (params.preventSubmit) {
                const { submitButton } = elements;
                submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener("click", (e) => {
                    this.handleSpinner(submitButton, params.spinner, "add");
                    const form = params.submitAllData && params.submitAllData === "atEachStep"
                        ? this.form
                        : undefined;
                    const formData = form || (params.submitAllData && params.submitAllData === "atEnd")
                        ? new FormData(this.form)
                        : this.getFormData(elements.fieldset, undefined, params.extraData);
                    new fetch_request_1.default({
                        uri: this.url,
                        data: formData,
                        options: {
                            method: "POST",
                            responseDataType: "json",
                        },
                        callbacks: params.callbacks,
                    });
                });
            }
        }
        else {
            nextButton.setAttribute("data-next-index", String(params.index + 1));
            this.fetchNextFieldSet(Object.assign({ template: elements.fieldset }, params));
        }
    }
    /**
     * Récupère les données du formulaire pour le fieldset donné.
     * @param {HTMLFieldSetElement} template - Le fieldset à partir duquel extraire les données.
     * @param {string} [i] - L'indice du fieldset (facultatif).
     * @param {Record<string, any>} [extraData] - Données supplémentaires à ajouter au formulaire (facultatif).
     * @returns {FormData} - Les données du formulaire sous forme de FormData.
     */
    getFormData(template, i, extraData, form) {
        let formData = form ? new FormData(form) : new FormData();
        let fields = template.querySelectorAll("input, select, textarea");
        if (!form) {
            let radioGroups = {};
            fields.forEach((field) => {
                if (field.type === "radio") {
                    if (!radioGroups[field.name]) {
                        radioGroups[field.name] = false;
                    }
                    if (field.checked) {
                        formData.set(field.name, field.value);
                        radioGroups[field.name] = true;
                    }
                }
                else if (field.type === "checkbox" && field.checked) {
                    formData.set(field.name, field.value);
                }
                else if (field.type === "file" &&
                    field.files &&
                    field.files.length > 0) {
                    // Ajouter tous les fichiers sélectionnés au FormData
                    Array.from(field.files).forEach((file) => {
                        formData.append(field.name, file);
                    });
                }
                else if (field.type !== "checkbox" && field.type !== "file") {
                    formData.set(field.name, field.value);
                }
            });
            // S'assurer que tous les groupes radio ont une valeur, même si aucun n'est sélectionné
            fields.forEach((field) => {
                if (field.type === "radio" && !radioGroups[field.name]) {
                    formData.set(field.name, "");
                    radioGroups[field.name] = true;
                }
            });
        }
        if (i) {
            formData.set("nextIndex", i.toString());
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
     * @returns {Record<string,any> | null} - Contient les éléments du fieldset, les boutons prev/next et le bouton submit.
     */
    graftEvents(response, i) {
        const fieldsetContainer = document.querySelector(`${this.parentTarget ? this.parentTarget + " " : ""}[fieldset__container]`);
        const fieldset = utils_1.default.textToHTMLElement(response.template);
        if (!fieldset) {
            return null;
        }
        const prevButton = fieldset.querySelector("[__prev__]");
        const nextButton = fieldset.querySelector("[__next__]");
        const submitButton = fieldset.querySelector("[__submit__]");
        const existingFieldset = document.querySelector(`.fieldset${i}`);
        if (!existingFieldset)
            fieldsetContainer.appendChild(fieldset);
        Object.assign(fieldset.style, this.RENDERED_STYLE.fieldsetStyle);
        this._prev(i, prevButton);
        if (this.fieldsetLength !== i)
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
    /**
     * Handles adding or removing a spinner element.
     * @param {HTMLElement} nextButton - The button triggering the spinner.
     * @param {HTMLElement} spinner - The spinner element.
     * @param {string} action - The action to perform ("add" or "remove").
     */
    handleSpinner(button, spinner, action) {
        button.innerHTML = "";
        if (action === "add") {
            if (typeof spinner === "string") {
                button.innerHTML = spinner;
            }
            else {
                button.appendChild(spinner);
            }
            button.setAttribute("disabled", "disabled");
        }
        if (action === "remove") {
            button.innerHTML = this._buttonInner;
            button.removeAttribute("disabled");
        }
    }
}
exports.default = LazyProgressForm;
//# sourceMappingURL=lazy-progress-form.js.map