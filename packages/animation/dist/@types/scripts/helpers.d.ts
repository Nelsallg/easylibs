import { AnimeOptions } from "./types";
export declare function getElement(options: AnimeOptions): {
    element: HTMLElement;
    animateElement?: HTMLElement;
};
export declare function applyAnimation(element: HTMLElement, animateElement: HTMLElement | undefined, animation: {
    type: string;
    position: string;
    clearAfterApplying?: boolean;
}, fromInToOut: boolean, options: AnimeOptions): void;
