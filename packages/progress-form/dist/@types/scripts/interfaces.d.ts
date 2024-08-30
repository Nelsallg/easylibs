import { ProgressFormType } from "./types";
export declare interface StyleOptions {
    form?: {
        width?: string;
        height?: string;
        boxSizing?: string;
    };
    fieldsetParent?: {
        height?: string;
        overflow?: string;
        width?: string;
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
/**
 * Progressing interface
 */
export declare interface ProgressingInterface {
    [x: string]: any;
    '@i': number;
    '@translateX': number;
    '@progress': number;
    '@target': HTMLElement;
    next: {
        i: number;
        button: HTMLElement;
        translateX: number;
        progress: number;
    };
    prev: {
        i: number;
        button: HTMLElement;
        translateX: number;
        progress: number;
    };
}
export declare interface FetchFieldsetParams {
    index: string;
    spinner: any;
    extraData: any;
    nextButton: HTMLElement;
    nextButtonInner: string;
    callback: any;
    handleFetchSuccess: (response?: Record<string, any>, status?: number) => any;
    shouldRepost: boolean;
    submitAllData?: "atEnd" | "atEachStep";
    preventSubmit: boolean;
}
export declare interface FieldSetGetterData {
    template?: HTMLFieldSetElement;
    nextButton?: HTMLElement;
    spinner?: HTMLElement | string;
    shouldRepost?: boolean;
    preventSubmit?: boolean;
    submitAllData?: "atEnd" | "atEachStep";
    extraData?: Record<string, any>;
    callback?: (response: any, status: number, index: number, ...data: any[]) => any;
}
/**
   * @param {number} fieldsetLength - Le nombre de fieldsets à charger.
   * @param {ProgressFormType} [progressOptions] - Options pour la progression du formulaire.
   * @param {StyleOptions} [styleOptions] - Options de style pour le formulaire.
*/
export declare interface LazyOptions {
    fieldsetLength: number;
    progressOptions?: ProgressFormType;
    styleOptions?: StyleOptions;
}
