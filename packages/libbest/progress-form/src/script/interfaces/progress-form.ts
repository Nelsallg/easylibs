declare type ProgressFormType = {
    form:HTMLFormElement,
    fieldsetContainer:HTMLElement,
    progress?:{
        progressElement?:HTMLElement,
    }
    translateX?:number,
    targetMarginWidth?:number,
    fieldsetMargingWidth?:number
}
interface StyleOptions {
    form?: {
        width?:string ,
        height?:string ,
        boxSizing?:string ,
    };
    fieldsetContainer?: {
        width?:string ,
        height?:string ,
        overflow?:string ,
        display?:string ,
        justifyContent?:string ,
        alignItems?:string,
    };
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
    };
}

/**
 * Interface pour la gestion du formulaire de progression.
 */
export interface IProgressForm {
    /**
     * Lance le formulaire de progression avec les paramètres fournis et les options de style personnalisées éventuelles.
     * @param params - Les paramètres pour le formulaire de progression.
     * @param styleOptions - (Optionnel) Les options de style personnalisées pour le formulaire.
     */
    run(params: ProgressFormType, styleOptions?: StyleOptions): void;

    /**
     * Calcule et retourne le pourcentage de progression basé sur le nombre de sections du formulaire.
     */
    get progress(): number;

    /**
     * Indique si les styles CSS par défaut doivent être activés pour le formulaire de progression.
     */
    enableDefaultCssStyle: boolean;
}
