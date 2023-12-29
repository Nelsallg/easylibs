interface PaginatorOptions {
    parentElement: HTMLElement | string;
    skeletonLoading: string;
    callback: (response: any, element: HTMLElement) => void;
    csrfToken?: boolean;
    margin?: {
        x: number;
        y: number;
    };
}
export declare function paginator(options: PaginatorOptions): void;
export declare function cardProcess(): {
    element: HTMLDivElement;
    length?: undefined;
} | {
    element: Element;
    length: number;
};
export {};
