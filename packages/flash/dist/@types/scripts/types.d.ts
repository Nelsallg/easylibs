export declare type FlashType = "success" | "danger" | "warning" | "info";
export declare type FlashPosition = "corner-top-left" | "top-center" | "corner-top-right" | "corner-bottom-left" | "bottom-center" | "corner-bottom-right" | "center";
export declare type FlashOptions = {
    message: string;
    type?: FlashType;
    flashBox?: HTMLElement;
    container?: HTMLElement;
    duration?: number | string;
    title?: string;
    icon?: boolean;
    closeButton?: boolean;
    tone?: boolean;
    position?: FlashPosition;
};
