"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_style_1 = require("./scripts/css-style");
const focus_in_block_1 = require("./scripts/focus-in-block");
let fieldSetElement = null;
/**
 * ProgressForm represents a class for managing a progressive form.
 */
class ProgressForm {
    /**
     * @param enableDefaultCssStyle Determines whether the default CSS style should be enabled. Default is true.
     */
    constructor(enableDefaultCssStyle = true) {
        this.enableDefaultCssStyle = enableDefaultCssStyle;
        this.fieldsetLength = 0;
    }
    /**
     * Defines the movement of each fieldset.
     * @param params The parameters for setting translateX.
     * @param fieldSet The fieldset element.
    */
    setTranslateX(params, fieldSet) {
        if (!fieldSet)
            return;
        this.translateX = params.translateX ? params.translateX : -fieldSet.offsetWidth;
    }
    /**
     * Executes the progressive form.
     * @param params The parameters of the form.
     * @param styleOptions Style options for the form.
    */
    run(params, styleOptions, preventProgress = false) {
        var _a;
        this.params = params;
        this.hasValidHTMLStructure(params.form);
        const fieldSets = params.form.querySelectorAll('fieldset');
        this.setTranslateX(params, fieldSets[0]);
        const progressElement = document.querySelector('[__progress__]');
        this.fieldsetMarginWidth = (_a = params.fieldsetMargingWidth) !== null && _a !== void 0 ? _a : 60;
        let nextIndex = 1;
        let prevIndex = fieldSets.length;
        let prevTranslateX = 0;
        this.fieldsetLength = fieldSets.length;
        const { PROGRESS } = this;
        if (fieldSets && fieldSets.length > 1) {
            fieldSets.forEach((fieldSet, i) => {
                var _a;
                const nextButton = fieldSet.querySelector("[__next__]");
                const prevButton = fieldSet.querySelector("[__prev__]");
                let translateX = this.translateX - this.fieldsetMarginWidth / this.fieldsetLength;
                const targetMarginWidth = (_a = params.targetMarginWidth) !== null && _a !== void 0 ? _a : 0;
                let nextTranslateX = (translateX * nextIndex) - targetMarginWidth;
                prevTranslateX = (translateX * nextIndex) + Math.abs(translateX * 2);
                const nextProgress = PROGRESS * (i + 2);
                const prevProgress = i > 1 ? PROGRESS * i : PROGRESS;
                fieldSetElement = fieldSet;
                fieldSet.classList.add(`fieldset${i}`);
                if (i === 0) {
                    const fields = fieldSet.querySelectorAll("input:not([type='hidden'],[readonly]), textarea");
                    fields[i].focus();
                    this.compartmentalizeFocusInFieldset(fieldSetElement);
                }
                this.progressingData = { [`fieldset${i}`]: {
                        i,
                        target: progressElement,
                        next: { i: nextIndex, button: nextButton, translateX: nextTranslateX, progress: nextProgress },
                        prev: { i: prevIndex, button: prevButton, translateX: prevTranslateX, progress: prevProgress },
                    } };
                if (preventProgress === false || preventProgress === "prev")
                    this.next(nextButton, nextIndex, nextTranslateX, progressElement, nextProgress);
                nextIndex++;
                if (i === 0) {
                    (0, focus_in_block_1.getFocusableElements)(fieldSetElement);
                }
                if (preventProgress === false || preventProgress === "next")
                    this.prev(prevButton, prevIndex, prevTranslateX, progressElement, prevProgress);
                prevIndex--;
            });
        }
        if (progressElement) {
            progressElement.style.width = `${PROGRESS}%`;
        }
        if (this.enableDefaultCssStyle) {
            (0, css_style_1.cssStyle)(params, fieldSets, this.translateX, this.fieldsetLength, this.fieldsetMarginWidth, styleOptions);
        }
    }
    /**
     * Handles the "next" button click event.
     * @param nextButton The "next" button element.
     * @param nextIndex The index of the next fieldset.
     * @param nextTranslateX The translateX value for the next fieldset.
     * @param progressElement The progress element.
     * @param nextProgress The progress for the next fieldset.
     */
    next(nextButton, nextIndex, nextTranslateX, progressElement, nextProgress) {
        const targets = this.fieldsetTargetArray;
        if (nextButton) {
            nextButton.addEventListener("click", (e) => {
                e.preventDefault();
                const fieldSet = document.querySelector(`.fieldset${nextIndex - 1}`);
                const isValidFieldset = this.isValidFieldset(fieldSet);
                if (this.params.onPreNext)
                    this.params.onPreNext(isValidFieldset);
                if (isValidFieldset) {
                    fieldSetElement = document.querySelector(`.fieldset${nextIndex}`);
                    if (fieldSetElement) {
                        this.compartmentalizeFocusInFieldset(fieldSetElement);
                        (0, focus_in_block_1.getFocusableElements)(fieldSetElement);
                    }
                    (0, css_style_1.anime)({
                        targets: targets,
                        translateX: nextTranslateX
                    });
                    if (progressElement) {
                        progressElement.style.width = `${nextProgress !== null && nextProgress !== void 0 ? nextProgress : 0}%`;
                    }
                    if (this.params.onPostNext)
                        this.params.onPostNext();
                }
            });
        }
    }
    /**
     * Handles the "previous" button click event.
     * @param prevButton The "previous" button element.
     * @param prevIndex The index of the previous fieldset.
     * @param prevTranslateX The translateX value for the previous fieldset.
     * @param progressElement The progress element.
     * @param prevProgress The progress for the previous fieldset.
    */
    prev(prevButton, prevIndex, prevTranslateX, progressElement, prevProgress) {
        const targets = this.fieldsetTargetArray;
        if (prevButton) {
            prevButton.addEventListener("click", (e) => {
                e.preventDefault();
                fieldSetElement = document.querySelector(`.fieldset${prevIndex}`);
                if (fieldSetElement) {
                    this.compartmentalizeFocusInFieldset(fieldSetElement);
                    (0, focus_in_block_1.getFocusableElements)(fieldSetElement);
                }
                (0, css_style_1.anime)({
                    targets: targets,
                    translateX: prevTranslateX
                });
                if (progressElement) {
                    progressElement.style.width = `${prevProgress !== null && prevProgress !== void 0 ? prevProgress : 0}%`;
                }
            });
        }
    }
    /**
     * Calculates the progress percentage of the form.
     * @returns The progress percentage.
    */
    get PROGRESS() {
        return 100 / this.fieldsetLength;
    }
    /**
     * Retrieve progress data for each fieldset
     */
    get PROGRESSING_DATA() {
        return this.progressingData;
    }
    /**
     * Compartmentalizes focus within a fieldset.
     * @param fieldSet The fieldset to compartmentalize focus within.
    */
    compartmentalizeFocusInFieldset(fieldSet) {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && fieldSet !== null) {
                (0, focus_in_block_1.focusInBlock)(e, fieldSet);
            }
        });
    }
    /**
     * Checks if a fieldset is valid.
     * @param fieldSet The fieldset to validate.
     * @returns true if the fieldset is valid, otherwise false.
    */
    isValidFieldset(fieldSet) {
        if (fieldSet) {
            const fields = Array.from(fieldSet.querySelectorAll('input, select, textarea'));
            if (fields) {
                for (const field of fields) {
                    if (!field.checkValidity()) {
                        field.reportValidity();
                        return false;
                    }
                }
            }
        }
        return true;
    }
    /**
     * Generates an array of target selectors for fieldsets.
     * @returns An array of target selectors.
     */
    get fieldsetTargetArray() {
        let fieldsetTargetArray = [];
        if (this.fieldsetLength > 0) {
            for (let i = 0; i < this.fieldsetLength; i++) {
                fieldsetTargetArray.push(`.fieldset${i}`);
            }
        }
        return fieldsetTargetArray;
    }
    /**
     * Checks if the HTML structure of the form is valid.
     * @param form The form to validate.
     * @throws Error if the HTML structure is not valid.
     */
    hasValidHTMLStructure(form) {
        try {
            if (!form) {
                throw new Error("The form could not be retrieved");
            }
            const fieldSetParent = form.querySelector("[fieldset__parent]");
            if (!fieldSetParent) {
                throw new Error("The element with the attribute [fieldset__parent] not found in your form");
            }
            const fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]");
            if (!fieldsetContainer) {
                throw new Error("The element with the attribute [fieldset__container] not found in your fieldset__parent");
            }
            const fieldSets = fieldsetContainer.querySelectorAll('fieldset');
            if (!fieldSets) {
                throw new Error("Aucune section de formulaire trouvée.");
            }
            const next_buttons = form.querySelectorAll("[__next__]");
            const prev_buttons = form.querySelectorAll("[__prev__]");
            if (!next_buttons) {
                throw new Error('No "next" button found!');
            }
            if (!prev_buttons) {
                throw new Error("No 'previous' button found!");
            }
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = ProgressForm;
//# sourceMappingURL=progress-form.js.map