export declare type FlashOptions = {
    message: string;
    type?: 'success' | 'danger' | 'warning' | 'info';
    flashBox?: HTMLElement;
    container?: HTMLElement;
    duration?: number | string;
    title?: string;
    icon?: boolean;
    closeButton?: boolean;
};
