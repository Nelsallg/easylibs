import { IFormDataTransformer } from "../../main";
export declare class FormDataTransformer implements IFormDataTransformer {
    private _data;
    constructor(data: object | FormData);
    transform(): FormData;
    reverse(): object;
    option(option: string): object;
    protected auto(): object;
}
