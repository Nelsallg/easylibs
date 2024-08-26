"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const css_style_1 = require("./scripts/css-style");
const focus_in_block_1 = require("./scripts/focus-in-block");
/**
 * ProgressForm represents a class for managing a progressive form.
 */
class ProgressForm {
    /**
     * @param enableDefaultCssStyle Determines whether the default CSS style should be enabled. Default is true.
     */
    constructor(form, enableDefaultCssStyle = true) {
        this.form = form;
        this.enableDefaultCssStyle = enableDefaultCssStyle;
        this.fieldsetLength = 0;
        this.progressingData = {};
        this.fieldSetElement = null;
    }
    /**
     * Retrieves and initializes all data and variables for running
     * @param progressOptions The parameters of the form.
     * @returns
     */
    init(progressOptions) {
        var _a;
        this.progressOptions = progressOptions;
        this.animation = progressOptions === null || progressOptions === void 0 ? void 0 : progressOptions.animation;
        this.hasValidHTMLStructure(this.form);
        const fieldSets = this.form.querySelectorAll('fieldset');
        this.setTranslateX(fieldSets[0], progressOptions);
        const progressElement = document.querySelector('[__progress__]');
        this.fieldsetMarginWidth = (_a = progressOptions === null || progressOptions === void 0 ? void 0 : progressOptions.fieldsetMargingWidth) !== null && _a !== void 0 ? _a : 60;
        let nextIndex = 1;
        let prevIndex = this.isLazyProgress ? this.lazyFieldsetLength : fieldSets.length;
        let prevTranslateX = 0;
        this.fieldsetLength = this.lastIndex = this.isLazyProgress ? this.lazyFieldsetLength : fieldSets.length;
        const { PROGRESS } = this;
        return {
            fieldSets, nextIndex,
            prevTranslateX, PROGRESS,
            prevIndex, progressElement
        };
    }
    /**
     * Executes the progressive form.
     * @param params The parameters of the form.
     * @param styleOptions Style options for the form, fieldsets and fieldsets parent elements.
    */
    run(progressOptions, styleOptions, preventProgress = false) {
        var _a;
        let { fieldSets, nextIndex, prevTranslateX, PROGRESS, prevIndex, progressElement } = this.init(progressOptions);
        if (fieldSets && !this.isLazyProgress && fieldSets.length > 1) {
            let translateX = this.translateX - this.fieldsetMarginWidth / this.fieldsetLength;
            const targetMarginWidth = (_a = progressOptions === null || progressOptions === void 0 ? void 0 : progressOptions.targetMarginWidth) !== null && _a !== void 0 ? _a : 0;
            fieldSets.forEach((fieldSet, i) => {
                const nextButton = fieldSet.querySelector("[__next__]");
                const prevButton = fieldSet.querySelector("[__prev__]");
                let nextTranslateX = (translateX * nextIndex) - targetMarginWidth;
                prevTranslateX = (translateX * nextIndex) + Math.abs(translateX * 2);
                const nextProgress = PROGRESS * (i + 2);
                const prevProgress = i > 1 ? PROGRESS * i : PROGRESS;
                this.fieldSetElement = fieldSet;
                fieldSet.classList.add(`fieldset${i}`);
                if (i === 0) {
                    const fields = fieldSet.querySelectorAll("input:not([type='hidden'],[readonly]), textarea");
                    if (fields && fields.length > 0)
                        fields[i].focus();
                    this.compartmentalizeFocusInFieldset(this.fieldSetElement);
                }
                this.progressingData[`fieldset${i}`] = {
                    '@i': i,
                    '@translateX': i === 0 ? 0 : (i === 1 ? translateX : nextTranslateX - translateX),
                    '@progress': PROGRESS * (i + 1),
                    '@target': this.fieldSetElement,
                    next: { i: nextIndex, button: nextButton, translateX: nextTranslateX, progress: nextProgress },
                    prev: { i: i - 1, button: prevButton, translateX: prevTranslateX, progress: prevProgress },
                };
                if (preventProgress === false || preventProgress === "prev")
                    this.next(nextIndex, nextTranslateX, nextButton, progressElement, nextProgress);
                nextIndex++;
                this.formatProgressingData(i);
                if (i === 0) {
                    (0, focus_in_block_1.getFocusableElements)(this.fieldSetElement);
                }
                if (preventProgress === false || preventProgress === "next")
                    this.prev(prevIndex, prevTranslateX, prevButton, progressElement, prevProgress);
                prevIndex--;
            });
        }
        if (progressElement) {
            progressElement.style.width = `${PROGRESS}%`;
        }
        if (this.enableDefaultCssStyle) {
            this.renderedStyle = (0, css_style_1.cssStyle)(this.form, fieldSets, this.translateX, this.fieldsetLength, this.fieldsetMarginWidth, styleOptions);
        }
    }
    /**
     * Handles the "next" button click event.
     * @param nextIndex The index of the next fieldset.
     * @param nextTranslateX The translateX value for the next fieldset.
     * @param nextButton The "next" button element.
     * @param progressElement The progress element.
     * @param nextProgress The progress for the next fieldset.
     */
    next(nextIndex, nextTranslateX, nextButton, progressElement, nextProgress) {
        const targets = this.fieldsetTargetArray;
        const handleNext = () => {
            const fieldSet = this.form.querySelector(`.fieldset${nextIndex - 1}`);
            const isValidFieldset = this.isValidFieldset(fieldSet);
            if (this.progressOptions && this.progressOptions.onPreNext)
                this.progressOptions.onPreNext(isValidFieldset);
            if (isValidFieldset) {
                this.fieldSetElement = document.querySelector(`.fieldset${nextIndex}`);
                if (this.fieldSetElement) {
                    this.compartmentalizeFocusInFieldset(this.fieldSetElement);
                    (0, focus_in_block_1.getFocusableElements)(this.fieldSetElement);
                }
                (0, css_style_1.anime)({
                    isAnimate: this.animation,
                    targets: targets,
                    translateX: nextTranslateX,
                    form: this.form
                });
                if (progressElement) {
                    progressElement.style.width = `${nextProgress !== null && nextProgress !== void 0 ? nextProgress : 0}%`;
                }
                if (this.progressOptions && this.progressOptions.onPostNext)
                    this.progressOptions.onPostNext();
            }
        };
        try {
            if (nextButton) {
                nextButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    handleNext();
                });
            }
            else {
                if (this.isLazyProgress) {
                    handleNext();
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * Handles the "previous" button click event.
     * @param prevIndex The index of the previous fieldset.
     * @param prevTranslateX The translateX value for the previous fieldset.
     * @param prevButton The "previous" button element.
     * @param progressElement The progress element.
     * @param prevProgress The progress for the previous fieldset.
    */
    prev(prevIndex, prevTranslateX, prevButton, progressElement, prevProgress) {
        const targets = this.fieldsetTargetArray;
        const handlePrev = () => {
            this.fieldSetElement = this.form.querySelector(`.fieldset${prevIndex}`);
            if (this.fieldSetElement) {
                this.compartmentalizeFocusInFieldset(this.fieldSetElement);
                (0, focus_in_block_1.getFocusableElements)(this.fieldSetElement);
            }
            (0, css_style_1.anime)({
                isAnimate: this.animation,
                targets: targets,
                translateX: prevTranslateX,
                form: this.form
            });
            if (progressElement) {
                progressElement.style.width = `${prevProgress !== null && prevProgress !== void 0 ? prevProgress : 0}%`;
            }
        };
        try {
            if (prevButton) {
                prevButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    handlePrev();
                });
            }
            else {
                if (this.isLazyProgress) {
                    handlePrev();
                }
            }
        }
        catch (error) {
            console.error(error);
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
    get RENDERED_STYLE() {
        return this.renderedStyle;
    }
    formatProgressingData(i) {
        if (this.progressingData && Object.entries(this.progressingData).length > 0) {
            if (i === 0)
                delete this.progressingData[`fieldset${i}`].prev;
            if (i === this.lastIndex - 1)
                delete this.progressingData[`fieldset${i}`].next;
        }
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
        const length = this.lazyFieldsetLength ? this.lazyFieldsetLength : this.fieldsetLength;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
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
    /**
     * Defines the movement of each fieldset.
     * @param params The parameters for setting translateX.
     * @param fieldSet The fieldset element.
    */
    setTranslateX(fieldSet, progressOptions) {
        if (!fieldSet)
            return;
        this.translateX = progressOptions && progressOptions.translateX ? progressOptions.translateX : -fieldSet.offsetWidth;
    }
}
exports.default = ProgressForm;
//# sourceMappingURL=default-progress-form.js.map