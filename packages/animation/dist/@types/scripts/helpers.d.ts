import { AnimeOptions, LoaderOptions } from "./types";
export declare function getElement(options: AnimeOptions): {
    element: HTMLElement;
    animateElement?: HTMLElement;
};
export declare function applyAnimation(element: HTMLElement, animateElement: HTMLElement | undefined, fromInToOut: boolean, options: AnimeOptions, animCSSProps?: LoaderOptions): void;
