import Flash from "../flash";
export declare type FlashOptions = {
    message: string;
    type: string;
    flashBox?: HTMLElement;
    container?: HTMLElement;
    duration?: number | string;
    title?: string;
    icon?: string;
    closeButton?: string | boolean;
};
export interface FlashInterface {
    addFlash(params: FlashOptions): Flash;
    flashHTMLModel(params: FlashOptions): flashHTMLModel | Node;
}
export declare class flashHTMLModel {
    static title: string | boolean;
    static icon: string | boolean;
    static message: string;
    static type?: string;
    [x: string]: any;
    static closeButton: string | boolean;
    protected message: string;
    protected title: string | boolean;
    protected icon: string | boolean;
    protected type?: string;
    protected static hasHeader: boolean;
    protected static hasFlashIcon: boolean;
    constructor(message: string, title: string | boolean, icon: string | boolean, type?: string);
    static parent(): string;
    getMessage(): string;
    static setMessage(message?: string): string;
    getType(): string;
    static setType(type?: string): string | undefined;
    getTitle(): string | boolean;
    protected static setTitle(title: string | boolean): string | boolean;
    getIcon(): string | boolean;
    protected static setIcon(icon: string | boolean): string;
}
