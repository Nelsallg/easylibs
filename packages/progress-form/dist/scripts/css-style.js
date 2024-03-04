"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssStyle = void 0;
function cssStyle(params, fieldSets, translateX, fieldsetLength, fieldsetMarginWidth, styleOptions) {
    try {
        const fieldSetParent = params.form.querySelector("[fieldset__parent]");
        const fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]");
        const fieldsetWidth = Math.abs(translateX);
        const fieldsetContainerWidth = fieldsetLength * fieldsetWidth + fieldsetMarginWidth;
        const defaultFieldSetParentStyle = {
            height: '100%',
            overflow: 'hidden',
            width: `${fieldsetWidth}px`
        };
        const defaultFormStyle = {
            width: `${fieldsetWidth}px`,
            height: '100%',
            boxSizing: 'border-box',
        };
        const defaultFieldsetContainerStyle = {
            width: `${fieldsetContainerWidth}px`,
            height: '100%',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'space-between',
        };
        const defaultFieldsetStyle = {
            width: `${fieldsetWidth}px`,
            transition: 'margin-left 0.4s ease-in-out',
            backgroundColor: '#FFFFFF',
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'column',
            padding: '30px',
            border: 'none',
            boxShadow: '0 0 5px rgba(255, 255, 255, 0.7137254902)',
            borderRadius: '3px',
        };
        // Fusionnez les styles par défaut avec les styles personnalisés
        const formStyle = Object.assign({}, defaultFormStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.form);
        const fieldSetParentStyle = Object.assign({}, defaultFieldSetParentStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetParent);
        const fieldsetContainerStyle = Object.assign({}, defaultFieldsetContainerStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldsetContainer);
        const fieldsetStyle = Object.assign({}, defaultFieldsetStyle, styleOptions === null || styleOptions === void 0 ? void 0 : styleOptions.fieldset);
        Object.assign(params.form.style, formStyle);
        Object.assign(fieldSetParent.style, fieldSetParentStyle);
        Object.assign(fieldsetContainer.style, fieldsetContainerStyle);
        fieldSets.forEach((fieldSet, index) => {
            Object.assign(fieldSet.style, fieldsetStyle);
            fieldSet.classList.add(`fieldset${index}`);
        });
    }
    catch (error) {
        console.error(error);
    }
}
exports.cssStyle = cssStyle;
//# sourceMappingURL=css-style.js.map