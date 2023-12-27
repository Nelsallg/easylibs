import { StyleOptions } from "./script/style-options";
declare type ProgressFormType = {
    form: HTMLFormElement;
    fieldsetContainer: HTMLElement;
    progress?: {
        progressElement?: HTMLElement;
    };
    translateX?: number;
    targetMarginWidth?: number;
    fieldsetMargingWidth?: number;
};
export declare class ProgressForm {
    protected element: HTMLElement | null;
    protected targetWidth: number;
    fieldsetLength: number;
    enableDefaultCssStyle: boolean;
    constructor(enableDefaultCssStyle?: boolean);
    run<T extends ProgressFormType>(params: T, styleOptions?: StyleOptions): void;
    protected next(nextButton: HTMLElement, nextIndex: number, nextTranslateX: number, progressElement?: HTMLElement, nextProgress?: number): void;
    protected prev(prevButton: HTMLElement, prevIndex: number, prevTranslateX: number, progressElement?: HTMLElement, prevProgress?: number): void;
    get progress(): number;
    private setFocusInFieldsest;
    protected isValidFieldset(fieldSet: HTMLElement): boolean;
    protected get fieldsetTargetArray(): string[];
    protected fieldsetAnimation(targets: string[], translateX: number): void;
    protected cssStyle<T extends ProgressFormType>(params: T, fieldSets: NodeListOf<HTMLFieldSetElement>, styleOptions?: StyleOptions): void;
}
export {};
