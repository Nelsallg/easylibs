import { focusInBlock, getFocusableElements } from "./scripts/focus-in-block";

let fieldSetElement:HTMLElement|null = null;
declare type ProgressFormType = {
    form:HTMLFormElement,
    progress?:{
        progressElement?:HTMLElement,
    }
    translateX?:number,
    targetMarginWidth?:number,
    fieldsetMargingWidth?:number
}
declare interface StyleOptions {
    form?: {
        width?:string ,
        height?:string ,
        boxSizing?:string ,
    },
    fieldsetParent?:{
        height: string,
        overflow: string,
        width: string,
    },
    fieldsetContainer?: {
        width?:string ,
        height?:string ,
        overflow?:string ,
        display?:string ,
        justifyContent?:string ,
        alignItems?:string,
    },
    fieldset?: {
        width?:string ,
        transition?:string ,
        backgroundColor?:string ,
        justifyContent?:string ,
        alignItems?:string ,
        display?:string ,
        flexDirection?:string ,
        padding?:string ,
        border?:string ,
        boxShadow?:string ,
        borderRadius?:string ,
    },
}

export default class ProgressForm
{
    private translateX = -530;
    public fieldsetLength:number = 0;
    enableDefaultCssStyle: boolean;
    constructor(enableDefaultCssStyle:boolean = true){
        this.enableDefaultCssStyle  = enableDefaultCssStyle;
        this.translateX = this.translateX;
    }
    public run<T extends ProgressFormType>(params:T,styleOptions?: StyleOptions)
    {
        const fieldSets = params.form.querySelectorAll('fieldset');
        const progressElement = params.progress?.progressElement;
        let nextIndex = 1;
        let prevIndex = fieldSets.length;
        let prevTranslateX = 0;
        this.fieldsetLength = fieldSets.length;
        const {progress} = this;
        this.isValid(params.form);
        if(fieldSets && fieldSets.length > 1){
            fieldSets.forEach((fieldSet,i) => {
                const nextButton = fieldSet.querySelector("[next__btn]") as HTMLElement;
                const prevButton = fieldSet.querySelector("[prev__btn]") as HTMLElement;
                let translateX = params.translateX as number ?? this.translateX;
                const targetMarginWidth = params.targetMarginWidth ?? 0;
                let nextTranslateX = (translateX * nextIndex) - targetMarginWidth;
                prevTranslateX  = (translateX * nextIndex) + Math.abs(translateX * 2);
                const nextProgress = progress * (i + 2);
                const prevProgress = i > 1 ? progress * i : progress;
                fieldSetElement = fieldSet;
                fieldSet.classList.add(`fieldset${i}`);
                if(i === 0){
                    const fields = fieldSet.querySelectorAll("input:not([type='hidden'],[readonly]), textarea") as NodeListOf<HTMLInputElement>;
                    fields[i].focus();
                    this.setFocusInFieldSet(fieldSetElement);
                }
                this.next(nextButton, nextIndex, nextTranslateX, progressElement, nextProgress);
                nextIndex++;
                if(i === 0){getFocusableElements(fieldSetElement);}
                this.prev(prevButton, prevIndex, prevTranslateX, progressElement, prevProgress);
                prevIndex--;
                
            }); 
        }
        if(progressElement){progressElement.style.width = `${progress}%`;}
        if(this.enableDefaultCssStyle)
        {this.cssStyle(params,fieldSets,styleOptions)}

    }
    private next(nextButton: HTMLElement, nextIndex: number, nextTranslateX:number, progressElement?:HTMLElement,nextProgress?:number)
    {
        
        const targets = this.fieldsetTargetArray;
        if(nextButton){
            nextButton.addEventListener("click", (e)=>{
                e.preventDefault();
                const fieldSet = document.querySelector(`.fieldset${nextIndex - 1}`) as HTMLElement;
                const isValid = this.isValidFieldset(fieldSet);
                if(isValid){
                    fieldSetElement = document.querySelector(`.fieldset${nextIndex}`) as HTMLElement;
                    if(fieldSetElement)
                    {
                        this.setFocusInFieldSet(fieldSetElement);
                        getFocusableElements(fieldSetElement);
                    }
                    // anime({
                    //     targets: targets,
                    //     translateX: nextTranslateX,
                    //     easing: 'easeInOutExpo'
                    // });
                    
                    if(progressElement)
                    {progressElement.style.width = `${nextProgress??0}%`;}
                }
            });
        }
    }
    
    private prev(prevButton:HTMLElement, prevIndex:number, prevTranslateX:number ,progressElement?:HTMLElement, prevProgress?:number)
    {
        const targets = this.fieldsetTargetArray;
        if(prevButton){
            prevButton.addEventListener("click", (e)=>{
                e.preventDefault();
                fieldSetElement = document.querySelector(`.fieldset${prevIndex}`);
                if(fieldSetElement)
                {
                    this.setFocusInFieldSet(fieldSetElement);
                    getFocusableElements(fieldSetElement);
                }
                // anime({
                //     targets: targets,
                //     translateX: prevTranslateX,
                //     easing: 'easeInOutExpo'
                // });
                if(progressElement)
                {progressElement.style.width = `${prevProgress??0}%`;}
             });
        }
    }
    public get progress()
    {
        return 100 / this.fieldsetLength;
    }
    private setFocusInFieldSet(fieldSet:HTMLElement)
    {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && fieldSet !== null){
                focusInBlock(e, fieldSet);
            }
        })
    }
    private isValidFieldset(fieldSet: HTMLElement): boolean
    {
        if(fieldSet){
            const fields =  Array.from(fieldSet.querySelectorAll('input, select, textarea'));
            if(fields){
                for(const field of fields as HTMLInputElement[]){
                    if(!field.checkValidity()){
                        field.reportValidity();
                        return false;
                    }
                }
            }
        }
        return true;
    }
    private get fieldsetTargetArray(): string[]
    {
        let fieldsetTargetArray = []
        if(this.fieldsetLength > 0){
            for(let i = 0; i < this.fieldsetLength; i++) {
                fieldsetTargetArray.push(`.fieldset${i}`);
            }
        }
        return fieldsetTargetArray;
    }
    private fieldsetAnimation(targets: string[], translateX:number)
    {
        for (let i = 0; i < targets.length; i++) {
            const fieldset = document.querySelector(`${targets[i]}`) as HTMLFieldSetElement;
            fieldset.style.transform = `translateX(${translateX})`;
        }
    }
    private cssStyle<T extends ProgressFormType>(
        params:T,
        fieldSets:NodeListOf<HTMLFieldSetElement>,
        styleOptions?:StyleOptions)
    {
        const fieldSetParent = params.form.querySelector("[fieldset__parent]") as HTMLElement;
        try {
            if(!fieldSetParent){
                throw new Error("The element with the attribute [fieldset__parent] not found in your form");
            }
            const fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]") as HTMLElement;
            if(!fieldsetContainer){
                throw new Error("The element with the attribute [fieldset__container] not found in your fieldset__parent");
            }
            const defaultFieldSetParentStyle = {
                height: '100%',
                overflow: 'hidden',
                width: '530px'
            }
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
            const tempSelectWidth = fieldSets[0].getBoundingClientRect().width;
            const fieldsetMargingWidth = params.fieldsetMargingWidth || 60;
            const fieldSetWidth = fieldSets[0].offsetWidth;
            const fieldsetContainerWidth = this.fieldsetLength * fieldSetWidth + fieldsetMargingWidth;
            fieldsetContainer.style.width = `${fieldsetContainerWidth}px`;
        } catch (error) {
            console.error(error);
        }
    }
    private isValid(form:HTMLFormElement){
        try {
            if(!form){
                throw new Error('Le formulaire est invalide');
            }
            const next_buttons = form.querySelectorAll("[next__btn]");
            const prev_buttons = form.querySelector("[prev__btn]");
            const fieldSets = form.querySelectorAll('fieldset');
            if(!fieldSets){
                throw new Error("Aucune section de formulaire trouvée.");
            }
            if(!next_buttons){
                throw new Error('Aucun bouton "suivant" trouvé !');
            }
            if(!prev_buttons){
                throw new Error("Aucun bouton 'précédent' trouvé !");
            }
        } catch (error) {
            console.error(error);
        }
    }
}