import { ProgressingInterface } from "./interfaces";
export declare type ProgressFormType = {
    form: HTMLFormElement;
    progress?: {
        progressElement?: HTMLElement;
    };
    translateX?: number;
    targetMarginWidth?: number;
    fieldsetMargingWidth?: number;
    onPreNext?: (isValidFieldset?: boolean) => any;
    onPostNext?: () => any;
};
export declare type PreventType = "next" | "prev" | true | false;
export declare type ProgressingType = Record<string, ProgressingInterface>;
