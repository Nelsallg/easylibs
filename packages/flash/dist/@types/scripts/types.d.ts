export declare type FlashType = "success" | "danger" | "warning" | "info";
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
};
