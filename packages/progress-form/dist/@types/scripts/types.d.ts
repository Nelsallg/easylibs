import { ProgressingInterface } from "./interfaces";
export declare type ProgressFormType = {
    progress?: {
        progressElement?: HTMLElement;
    };
    animation?: boolean;
    translateX?: number;
    targetMarginWidth?: number;
    fieldsetMargingWidth?: number;
    onPreNext?: (isValidFieldset?: boolean) => any;
    onPostNext?: () => any;
};
export declare type PreventType = "next" | "prev" | true | false;
export declare type ProgressingType = Record<string, ProgressingInterface>;
export declare type RenderedStyle = {
    fieldSetParentStyle: Record<string, any>;
    fieldsetContainerStyle: Record<string, any>;
    formStyle: Record<string, any>;
    fieldsetStyle: Record<string, any>;
};
