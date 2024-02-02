export declare type ProgressFormType = {
    form:HTMLFormElement,
    progress?:{
        progressElement?:HTMLElement,
    }
    translateX?:number,
    targetMarginWidth?:number,
    fieldsetMargingWidth?:number,
    onPreNext?:(isValidFieldset?:boolean)=>any,
    onPostNext?:()=>any
}