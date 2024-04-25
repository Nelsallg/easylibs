"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.anime = exports.cssStyle = void 0;
function cssStyle(form, fieldSets, translateX, fieldsetLength, fieldsetMarginWidth, styleOptions) {
    try {
        const fieldSetParent = form.querySelector("[fieldset__parent]");
        const fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]");
        const fieldsetWidth = Math.abs(translateX);
        const fieldsetContainerWidth = fieldsetLength * fieldsetWidth + fieldsetMarginWidth;
        const defaultFieldSetParentStyle = {
            height: "100%",
            overflow: "hidden",
            width: `${fieldsetWidth}px`,
        };
        const defaultFormStyle = {
            width: `${fieldsetWidth}px`,
            height: "100%",
            boxSizing: "border-box",
        };
        const defaultFieldsetContainerStyle = {
            width: `${fieldsetContainerWidth}px`,
            height: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-between",
        };
        const defaultFieldsetStyle = {
            width: `${fieldsetWidth}px`,
            transition: "margin-left 0.4s ease-in-out",
            backgroundColor: "#FFFFFF",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            border: "none",
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.7137254902)",
            borderRadius: "3px",
        };
        // Fusionnez les styles par défaut avec les styles personnalisés
        const formStyle = Object.assign({}, defaultFormStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.form);
        const fieldSetParentStyle = Object.assign({}, defaultFieldSetParentStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetParent);
        const fieldsetContainerStyle = Object.assign({}, defaultFieldsetContainerStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetContainer);
        const fieldsetStyle = Object.assign({}, defaultFieldsetStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldset);
        Object.assign(form.style, formStyle);
        Object.assign(fieldSetParent.style, fieldSetParentStyle);
        Object.assign(fieldsetContainer.style, fieldsetContainerStyle);
        fieldSets.forEach((fieldSet, index) => {
            Object.assign(fieldSet.style, fieldsetStyle);
            fieldSet.classList.add(`fieldset${index}`);
        });
        return { fieldSetParentStyle, fieldsetContainerStyle, formStyle, fieldsetStyle };
    }
    catch (error) {
        console.error(error);
    }
}
exports.cssStyle = cssStyle;
const lastTranslateXMap = new Map();
function anime(options) {
    options.targets.forEach(target => {
        const element = typeof target === 'string' ? options.form.querySelector(target) : target;
        if (element) {
            const lastTranslateX = lastTranslateXMap.get(element) || 0;
            const translateX = options.translateX;
            const keyframes = [
                { transform: `translateX(${lastTranslateX}px)` },
                { transform: `translateX(${translateX}px)` }
            ];
            const _animateOptions = {
                duration: 1000,
                fill: 'forwards', // L'animation reste appliquée à la fin
                easing: 'cubic-bezier(1, 0, 0, 1)' // Approximation de l'effet d'assouplissement easeInOutExpo
            };
            const _unanimateOptions = {
                fill: 'forwards',
            };
            if (element.animate) {
                if (options.isAnimate != false)
                    element.animate(keyframes, _animateOptions);
                else {
                    element.animate(keyframes, _unanimateOptions);
                }
                lastTranslateXMap.set(element, translateX);
            }
        }
    });
}
exports.anime = anime;
//# sourceMappingURL=css-style.js.map