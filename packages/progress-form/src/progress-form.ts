import anime from 'animejs/lib/anime.es.js';
import { cssStyle } from "./scripts/css-style";
import { focusInBlock, getFocusableElements } from "./scripts/focus-in-block";
import { StyleOptions } from "./scripts/interfaces";
import { ProgressFormType } from "./scripts/types";

let fieldSetElement:HTMLElement|null = null;
export default class ProgressForm
{
    private translateX:number;
    private fieldsetLength:number = 0;
    private enableDefaultCssStyle: boolean;
    private fieldsetMarginWidth: number;
    private params: ProgressFormType;
    constructor(enableDefaultCssStyle:boolean = true){
        this.enableDefaultCssStyle  = enableDefaultCssStyle;
    }
    private setTranslateX(params: ProgressFormType,fieldSet:HTMLElement){
        if(!fieldSet) return ;
        this.translateX = params.translateX ? params.translateX : - fieldSet.offsetWidth;
    }
    public run<T extends ProgressFormType>(params:T,styleOptions?: StyleOptions)
    {
        this.params = params;
        this.hasValidHTMLStructure(params.form);
        const fieldSets = params.form.querySelectorAll('fieldset');
        this.setTranslateX(params, fieldSets[0]);
        const progressElement = document.querySelector('[__progress__]') as HTMLElement;
        this.fieldsetMarginWidth = params.fieldsetMargingWidth ?? 60;
        let nextIndex = 1;
        let prevIndex = fieldSets.length;
        let prevTranslateX = 0;
        this.fieldsetLength = fieldSets.length;
        const {progress} = this;
        if(fieldSets && fieldSets.length > 1){
            fieldSets.forEach((fieldSet,i) => {
                const nextButton = fieldSet.querySelector("[__next__]") as HTMLElement;
                const prevButton = fieldSet.querySelector("[__prev__]") as HTMLElement;
                let translateX = this.translateX - this.fieldsetMarginWidth / this.fieldsetLength;
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
                    this.compartmentalizeFocusInFieldset(fieldSetElement);
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
        {cssStyle(params,fieldSets,this.translateX,this.fieldsetLength, this.fieldsetMarginWidth,styleOptions)}
    }
    private next(nextButton: HTMLElement, nextIndex: number, nextTranslateX:number, progressElement?:HTMLElement,nextProgress?:number)
    {
        const targets = this.fieldsetTargetArray;
        if(nextButton){
            nextButton.addEventListener("click", (e)=>{
                e.preventDefault();
                const fieldSet = document.querySelector(`.fieldset${nextIndex - 1}`) as HTMLElement;
                const isValidFieldset = this.isValidFieldset(fieldSet);
                if(this.params.onPreNext) this.params.onPreNext(isValidFieldset);
                if(isValidFieldset){
                    fieldSetElement = document.querySelector(`.fieldset${nextIndex}`) as HTMLElement;
                    if(fieldSetElement)
                    {
                        this.compartmentalizeFocusInFieldset(fieldSetElement);
                        getFocusableElements(fieldSetElement);
                    }
                    anime({
                        targets: targets,
                        translateX: nextTranslateX,
                        easing: 'easeInOutExpo'
                    });
                    if(progressElement)
                    {progressElement.style.width = `${nextProgress??0}%`;}
                    if(this.params.onPostNext) this.params.onPostNext();
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
                    this.compartmentalizeFocusInFieldset(fieldSetElement);
                    getFocusableElements(fieldSetElement);
                }
                anime({
                    targets: targets,
                    translateX: prevTranslateX,
                    easing: 'easeInOutExpo'
                });
                if(progressElement)
                {progressElement.style.width = `${prevProgress??0}%`;}
             });
        }
    }
    public get progress()
    {
        return 100 / this.fieldsetLength;
    }
    private compartmentalizeFocusInFieldset(fieldSet:HTMLElement)
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
    private hasValidHTMLStructure(form:HTMLFormElement){
        try {
            if(!form){
                throw new Error("The form could not be retrieved");
            }
            const fieldSetParent = form.querySelector("[fieldset__parent]") as HTMLElement;
            if(!fieldSetParent){
                throw new Error("The element with the attribute [fieldset__parent] not found in your form");
            }
            const fieldsetContainer = fieldSetParent.querySelector("[fieldset__container]") as HTMLElement;
            if(!fieldsetContainer){
                throw new Error("The element with the attribute [fieldset__container] not found in your fieldset__parent");
            }
            const fieldSets = fieldsetContainer.querySelectorAll('fieldset');
            if(!fieldSets){
                throw new Error("Aucune section de formulaire trouvée.");
            }
            const next_buttons = form.querySelectorAll("[__next__]");
            const prev_buttons = form.querySelectorAll("[__prev__]");
            if(!next_buttons){
                throw new Error('No "next" button found!');
            }
            if(!prev_buttons){
                throw new Error("No 'previous' button found!");
            }
        } catch (error) {
            throw error;
        }
    }
}
