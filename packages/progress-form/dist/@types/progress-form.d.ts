declare type ProgressFormType = {
    form: HTMLFormElement;
    progress?: {
        progressElement?: HTMLElement;
    };
    translateX?: number;
    targetMarginWidth?: number;
    fieldsetMargingWidth?: number;
};
declare interface StyleOptions {
    form?: {
        width?: string;
        height?: string;
        boxSizing?: string;
    };
    fieldsetParent?: {
        height: string;
        overflow: string;
        width: string;
    };
    fieldsetContainer?: {
        width?: string;
        height?: string;
        overflow?: string;
        display?: string;
        justifyContent?: string;
        alignItems?: string;
    };
    fieldset?: {
        width?: string;
        transition?: string;
        backgroundColor?: string;
        justifyContent?: string;
        alignItems?: string;
        display?: string;
        flexDirection?: string;
        padding?: string;
        border?: string;
        boxShadow?: string;
        borderRadius?: string;
    };
}
export default class ProgressForm {
    private translateX;
    fieldsetLength: number;
    enableDefaultCssStyle: boolean;
    constructor(enableDefaultCssStyle?: boolean);
    run<T extends ProgressFormType>(params: T, styleOptions?: StyleOptions): void;
    private next;
    private prev;
    get progress(): number;
    private setFocusInFieldSet;
    private isValidFieldset;
    private get fieldsetTargetArray();
    private fieldsetAnimation;
    private cssStyle;
    private isValid;
}
export {};
