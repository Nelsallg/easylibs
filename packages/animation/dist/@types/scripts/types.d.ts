export declare type AnimeOptions = {
    duration?: number;
    openButton?: HTMLElement;
    element?: HTMLElement | {
        element: HTMLElement;
        animateElement: HTMLElement;
    };
    display?: string | null;
    closeButton?: HTMLElement;
    dispatchCloseEvent?: {
        key?: any;
        value: boolean;
    };
    delay?: number;
    fromInToOut?: boolean;
};
export declare type LoaderOptions = {
    animationType: string;
    animationPosition: "top" | "right" | "bottom" | "left" | "corner-left-top" | "corner-right-top" | "corner-right-bottom" | "corner-left-bottom" | string;
    animationEnter?: "in" | "out" | string;
    animCSSProps?: Record<string, any>;
};
