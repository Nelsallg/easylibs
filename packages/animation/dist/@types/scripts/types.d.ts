export declare type AnimeOptions = {
    duration?: number;
    openButton?: HTMLElement;
    element?: HTMLElement | {
        element: HTMLElement;
        animateElement: HTMLElement;
    };
    display?: string | null;
    animation?: {
        type: string;
        position: string;
        clearAfterApplying?: boolean;
    };
    closeButton?: HTMLElement;
    dispatchCloseEvent?: {
        key?: any;
        value: boolean;
    };
    delay?: number;
    fromInToOut?: boolean;
};
