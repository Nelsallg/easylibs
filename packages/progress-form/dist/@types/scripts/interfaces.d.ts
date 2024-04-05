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
    i: number;
    target: HTMLElement;
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
