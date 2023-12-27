export declare function shortenedText(text: string, maxLength?: number): string;
export declare function buttonLoader(attr: string, loaderHTML?: string): void;
export declare function changeInputTextTypeToNumberType(attr: string, limit?: number | null, priceType?: boolean, decimal?: number): void;
/**
 * Désactive un élément le temps d'une requete asynchrone.
 * @param tag Le nom du tag html qui sera utiliser pour créer
 * la couche qui couvrira l'élémént à désactiver.
 * @param deactivatable L'élément à désactiver
 * @param trigger Le déclancheur de la désactivation
 */
export declare function desactivatorElement(tag?: string, deactivatable?: HTMLElement, trigger?: HTMLElement, backgroundColor?: string): void;
export declare function tripleDotSpinner(button: string | HTMLElement, addClickEvent?: boolean, readonly?: boolean): void;
export declare function setAsteriskToRequiredField(): void;
export declare function hasKeyWithNameSubstring(object: any, substring: string, getKey?: boolean): any;
export declare function findObjectDataByKeyName(object: any, keyOrShorKey: string, key?: boolean): boolean;
export declare function findChar(string: string, limit: number, returnBool?: boolean): string | boolean;
export declare function findComputedStyle(element: HTMLElement, property: string | Array<string>): any;
export declare function escape(str?: string): string;
export declare function findHTMLElementBy(referent: HTMLElement, target: string): Element | null;
export declare function formatHTMLAttributes(attributes: any): string;
export declare function debounce(func: Function, waiting: number): (this: HTMLElement) => void;
export declare function autoUploadFile(): void;
