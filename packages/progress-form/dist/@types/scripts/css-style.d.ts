import { StyleOptions } from "./interfaces";
declare type animationType = {
    targets: (Element | string)[];
    translateX: number;
    form: HTMLFormElement;
    isAnimate?: boolean;
};
export declare function cssStyle(form: HTMLFormElement, fieldSets: NodeListOf<HTMLFieldSetElement>, translateX: number, fieldsetLength: number, fieldsetMarginWidth: number, styleOptions?: StyleOptions): {
    fieldSetParentStyle: {
        height: string;
        overflow: string;
        width: string;
    } & {
        height?: string;
        overflow?: string;
        width?: string;
    };
    fieldsetContainerStyle: {
        width: string;
        height: string;
        overflow: string;
        display: string;
        justifyContent: string;
    } & {
        width?: string;
        height?: string;
        overflow?: string;
        display?: string;
        justifyContent?: string;
        alignItems?: string;
    };
    formStyle: {
        width: string;
        height: string;
        boxSizing: string;
    } & {
        width?: string;
        height?: string;
        boxSizing?: string;
    };
    fieldsetStyle: {
        width: string;
        transition: string;
        backgroundColor: string;
        justifyContent: string;
        display: string;
        flexDirection: string;
        padding: string;
        border: string;
        boxShadow: string;
        borderRadius: string;
    } & {
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
};
export declare function anime(options: animationType): void;
export {};
