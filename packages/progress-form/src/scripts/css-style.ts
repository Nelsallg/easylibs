import { StyleOptions } from "./interfaces";
import { ProgressFormType } from "./types";

export function cssStyle<T extends ProgressFormType>(
        params:T,
        fieldSets:NodeListOf<HTMLFieldSetElement>,
        translateX:number,
        fieldsetLength:number,
        fieldsetMarginWidth:number,
        styleOptions?:StyleOptions)
    {
        try {
            const fieldSetParent = params.form.querySelector("[fieldset__parent]") as HTMLElement;
            const fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]") as HTMLElement;
            const fieldsetWidth = Math.abs(translateX);
            const fieldsetContainerWidth = fieldsetLength * fieldsetWidth + fieldsetMarginWidth;
            const defaultFieldSetParentStyle = {
                height: '100%',
                overflow: 'hidden',
                width: `${fieldsetWidth}px`
            }
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
            const formStyle = Object.assign({}, defaultFormStyle, styleOptions?.form);
            const fieldSetParentStyle = Object.assign({},defaultFieldSetParentStyle, styleOptions?.fieldsetParent)
            const fieldsetContainerStyle = Object.assign({},defaultFieldsetContainerStyle,styleOptions?.fieldsetContainer);
            const fieldsetStyle = Object.assign({}, defaultFieldsetStyle, styleOptions?.fieldset);
        
            Object.assign(params.form.style, formStyle);
            Object.assign(fieldSetParent.style, fieldSetParentStyle);
            Object.assign(fieldsetContainer.style, fieldsetContainerStyle);
            fieldSets.forEach((fieldSet, index) => {
                Object.assign(fieldSet.style, fieldsetStyle);
                fieldSet.classList.add(`fieldset${index}`);
            });
        } catch (error) {
            console.error(error);
        }
    }