var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "animejs", "./functions/focus-in-block"], function (require, exports, animejs_1, focus_in_block_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgressForm = void 0;
    animejs_1 = __importDefault(animejs_1);
    let fieldSetElement = null;
    class ProgressForm {
        constructor(enableDefaultCssStyle = true) {
            this.element = null;
            this.targetWidth = -625;
            this.fieldsetLength = 0;
            this.enableDefaultCssStyle = enableDefaultCssStyle;
        }
        run(params, styleOptions) {
            var _a;
            const fieldSets = params.form.querySelectorAll('fieldset');
            const progressElement = (_a = params.progress) === null || _a === void 0 ? void 0 : _a.progressElement;
            let nextIndex = 1;
            let prevIndex = fieldSets.length;
            let prevTranslateX = 0;
            this.fieldsetLength = fieldSets.length;
            const { progress } = this;
            if (fieldSets && fieldSets.length > 1) {
                fieldSets.forEach((fieldSet, i) => {
                    var _a;
                    const nextButton = fieldSet.querySelector(".next-btn");
                    const prevButton = fieldSet.querySelector('.prev-btn');
                    let translateX = params.translateX;
                    const targetMarginWidth = (_a = params.targetMarginWidth) !== null && _a !== void 0 ? _a : 0;
                    let nextTranslateX = (translateX * nextIndex) - targetMarginWidth;
                    prevTranslateX = (translateX * nextIndex) + Math.abs(translateX * 2);
                    const nextProgress = progress * (i + 2);
                    const prevProgress = i > 1 ? progress * i : progress;
                    fieldSetElement = fieldSet;
                    fieldSet.classList.add(`fieldset${i}`);
                    if (i === 0) {
                        const fields = fieldSet.querySelectorAll('input, select, textarea');
                        fields[i].focus();
                        this.setFocusInFieldsest(fieldSetElement);
                    }
                    this.next(nextButton, nextIndex, nextTranslateX, progressElement, nextProgress);
                    nextIndex++;
                    if (i === 0) {
                        (0, focus_in_block_1.getFocusableElements)(fieldSetElement);
                    }
                    this.prev(prevButton, prevIndex, prevTranslateX, progressElement, prevProgress);
                    prevIndex--;
                });
            }
            if (progressElement) {
                progressElement.style.width = `${progress}%`;
            }
            if (this.enableDefaultCssStyle) {
                this.cssStyle(params, fieldSets, styleOptions);
            }
        }
        next(nextButton, nextIndex, nextTranslateX, progressElement, nextProgress) {
            const targets = this.fieldsetTargetArray;
            if (nextButton) {
                nextButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    const fieldSet = document.querySelector(`.fieldset${nextIndex - 1}`);
                    const isValid = this.isValidFieldset(fieldSet);
                    if (isValid) {
                        fieldSetElement = document.querySelector(`.fieldset${nextIndex}`);
                        if (fieldSetElement) {
                            this.setFocusInFieldsest(fieldSetElement);
                            (0, focus_in_block_1.getFocusableElements)(fieldSetElement);
                        }
                        (0, animejs_1.default)({
                            targets: targets,
                            translateX: nextTranslateX,
                            easing: 'easeInOutExpo'
                        });
                        if (progressElement) {
                            progressElement.style.width = `${nextProgress !== null && nextProgress !== void 0 ? nextProgress : 0}%`;
                        }
                    }
                });
            }
        }
        prev(prevButton, prevIndex, prevTranslateX, progressElement, prevProgress) {
            const targets = this.fieldsetTargetArray;
            if (prevButton) {
                prevButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    fieldSetElement = document.querySelector(`.fieldset${prevIndex}`);
                    if (fieldSetElement) {
                        this.setFocusInFieldsest(fieldSetElement);
                        (0, focus_in_block_1.getFocusableElements)(fieldSetElement);
                    }
                    (0, animejs_1.default)({
                        targets: targets,
                        translateX: prevTranslateX,
                        easing: 'easeInOutExpo'
                    });
                    if (progressElement) {
                        progressElement.style.width = `${prevProgress !== null && prevProgress !== void 0 ? prevProgress : 0}%`;
                    }
                });
            }
        }
        get progress() {
            return 100 / this.fieldsetLength;
        }
        setFocusInFieldsest(fieldSet) {
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Tab' && fieldSet !== null) {
                    (0, focus_in_block_1.focusInBlock)(e, fieldSet);
                }
            }, { once: true });
        }
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
        get fieldsetTargetArray() {
            let fieldsetTargetArray = [];
            if (this.fieldsetLength > 0) {
                for (let i = 0; i < this.fieldsetLength; i++) {
                    fieldsetTargetArray.push(`.fieldset${i}`);
                }
            }
            return fieldsetTargetArray;
        }
        fieldsetAnimation(targets, translateX) {
            for (let i = 0; i < targets.length; i++) {
                const fieldset = document.querySelector(`${targets[i]}`);
                fieldset.style.transform = `translateX(${translateX})`;
            }
        }
        cssStyle(params, fieldSets, styleOptions) {
            const defaultFormStyle = {
                width: '545px',
                height: '100%',
                boxSizing: 'border-box',
            };
            const defaultFieldsetContainerStyle = {
                width: `1800px`,
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'space-between',
            };
            const defaultFieldsetStyle = {
                width: ' 25%',
                transition: 'margin-left 0.4s ease-in-out',
                backgroundColor: '#FFFFFF',
                justifyContent: 'space-between',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                padding: '30px',
                border: 'none',
                boxShadow: '0 0 5px rgba(255, 255, 255, 0.7137254902)',
                borderRadius: '3px',
            };
            // Fusionnez les styles par défaut avec les styles personnalisés
            const formStyle = Object.assign({}, defaultFormStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.form);
            const fieldsetContainerStyle = Object.assign({}, defaultFieldsetContainerStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetContainer);
            const fieldsetStyle = Object.assign({}, defaultFieldsetStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldset);
            Object.assign(params.form.style, formStyle);
            Object.assign(params.fieldsetContainer.style, fieldsetContainerStyle);
            fieldSets.forEach((fieldSet, index) => {
                Object.assign(fieldSet.style, fieldsetStyle);
                fieldSet.classList.add(`fieldset${index}`);
            });
            const tempSelectWidth = fieldSets[0].getBoundingClientRect().width;
            const fieldsetMargingWidth = params.fieldsetMargingWidth || 60;
            const fieldSetWidth = fieldSets[0].offsetWidth;
            const fieldsetContainerWidth = this.fieldsetLength * fieldSetWidth + fieldsetMargingWidth;
            params.fieldsetContainer.style.width = `${fieldsetContainerWidth}px`;
        }
    }
    exports.ProgressForm = ProgressForm;
});
//# sourceMappingURL=main.js.map