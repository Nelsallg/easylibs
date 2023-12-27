export declare class FormDataTransformer {
    private _data;
    constructor(data: object | FormData);
    /**
     * Transforme les données en un objet FormData.
     * @returns L'objet FormData résultant.
     */
    transform(): FormData;
    /**
     * Revertit un objet FormData en objet JavaScript.
     * @returns L'objet JavaScript résultant.
     */
    reverse(): object;
    /**
     * Option de transformation spécifique.
     * @param option - L'option de transformation ('onlyobject', 'onlyformdata', 'auto').
     * @returns L'objet ou le FormData résultant en fonction de l'option spécifiée.
     */
    option(option: string): object;
    private auto;
}
