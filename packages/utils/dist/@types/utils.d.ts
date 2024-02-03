declare type RegexType = "email" | "phone-number" | "number" | "strong-password" | "default-text" | "fr-text" | "en-text" | "tr-text" | "url-protocol" | "url-domain" | "url-ip" | "url-port" | "url-path" | "url-query" | "url-fragment";
export default class Utils {
    /**
     * Crée un élément audio avec la source audio spécifiée par le chemin audioPath.
     * @param audioPath Le chemin de la source audio.
     * @param classname La classe CSS à ajouter à l'élément audio (optionnel).
     * @returns L'élément audio créé.
     */
    static setAudio(audioPath: string, classname?: any): HTMLAudioElement;
    /**
     * Converts an HTML string into an HTML element or a collection of HTML elements.
     *
     * @param textHtml - The HTML string to convert.
     * @param targetName - The tag name of the target HTML element to create.
     * @param children - A boolean indicating whether to return all children of the target element.
     * @returns - Returns the first child of the target element if `children` is `false`, otherwise returns a collection of the element's children. Returns `null` if there are no children.
     *
     * This method creates a new HTML element of the type specified by `targetName`, sets its inner HTML to `textHtml`, and returns either the first child of this element or all its children as an HTMLCollection, depending on the value of `children`.
     * If the HTML content generates no children, the method returns `null`.
     */
    static textToHTMLElement(textHtml: string, targetName?: string, children?: boolean): Element | HTMLCollection | null;
    /**
     * retourne un élément du dom
     */
    static $$(element: any): any;
    /**
     * Cette fonction permet de convertir un objet NodeList en un tableau d'éléments HTML (HTMLElement)
     * et d'exécuter une fonction de rappel sur chaque élément du tableau.
     * @param nodeList Un objet NodeList ou un élément HTML.
     * Si c'est un NodeList, il sera converti en tableau d'éléments HTML.
     * @param callback Une fonction de rappel à exécuter sur chaque élément du tableau.
     * @returns
     */
    static processNodes(nodeList: any, callback?: (node: any, index?: number) => void): void;
    /**
     * Méthode qui renvoie une expression régulière en fonction du type demandé.
     * @param type Le type d'expression régulière demandé.
     * @returns L'expression régulière correspondante.
     */
    static getRegexp(type: RegexType): RegExp;
    /**
     * Crée une couche superfielle au dessus d'un élément html afin d'empecher tout évènement.
     * @param tag Le nom de la balise HTML à utiliser comme couche (par défaut : 'td', idéal pour les tableau html).
     * @param backgroundColor La couleur d'arrière-plan de la zone interdite (par défaut : '#FFFFFF').
     * @returns Un élément HTML représentant une zone interdite.
     */
    private static forbiddener;
    /**
     * Réduit une chaîne de texte.
     * @param text La chaîne de texte à réduire.
     * @param maxLength La longueur maximale de la chaîne résultante (par défaut : 14).
     * @returns La chaîne de texte réduite.
     */
    static truncateChars(text: string, maxLength?: number): string;
    /**
     * Changes the input text type to a number type and performs additional processing
     * based on the specified parameters.
     *
     * @param attr - The CSS selector for the input elements to be processed.
     * @param limit - (Optional) The maximum allowed value. If provided, input values exceeding this limit will be set to the limit.
     * @param priceType - (Optional) A boolean flag indicating whether the input represents a price. If true, the input is expected to be a number with an optional decimal part.
     * @param decimal - (Optional) The number of decimal places to round to. If provided, the input values will be rounded to the specified decimal places.
     */
    static changeInputTextTypeToNumberType(attr: string, limit?: number | null, priceType?: boolean, decimal?: number): void;
    /**
     * The function is used to disable specific elements (by default td tags) inside a table when a certain button is clicked.
     * It accepts several parameters: the tag to be disabled, the target element to be disabled, the trigger element (button),
     * and the background color for the forbidden tag.
     *
     * @param tag - The tag of the element to be disabled (default: "td").
     * @param target - The target element to be disabled (default: undefined).
     * @param trigger - The trigger element (button) to activate the function (default: undefined).
     * @param backgroundColor - The background color for the forbidden tag (default: undefined).
     */
    static disablor(tag?: string, target?: HTMLElement, trigger?: HTMLElement, backgroundColor?: string): void;
    /**
     * Adds an asterisk indicator to labels associated with required form fields.
     * The asterisk is inserted as an SVG element, and labels are selected based on the presence
     * of the 'required-field' attribute. The function utilizes the processNodes method
     * to iterate through the matched labels and append the asterisk.
     */
    static setAsteriskToRequiredField(): void;
    /**
     * This method checks if the object contains a key with the given substring.
     * @param object The object to be searched.
     * @param substring The substring to search for.
     * @param getKey An optional parameter to determine the type of return value.
     *               If true, the method will return the key as a string.
     *               If false or not provided, the method will return the value corresponding to the key.
     * @returns The value or key of the first matching property if found, otherwise false.
     */
    static hasKeyWithNameSubstring(object: any, substring: string, getKey?: boolean): any;
    /**
     * This method searches for an object's property by its key or short key.
     * @param object The object to be searched.
     * @param keyOrShortKey The key or short key to search for.
     * @param key An optional parameter to determine the type of return value.
     *            If true, the function will return the key as a string.
     *            If false or not provided, the function will return the value corresponding to the key.
     * @returns The value or key of the first matching property if found, otherwise false.
     */
    static findObjectDataByKeyName(object: any, keyOrShorKey: string, key?: boolean): boolean;
    static findChar(string: string, limit: number, returnBool?: boolean): string | boolean;
    static findComputedStyle(element: HTMLElement, property: string | Array<string>): string;
    /**
     * A function to escape special characters in a string using the DOM API.
     *
     * @param str - The input string to be escaped.
     * @returns - The escaped string with special characters replaced with their HTML entity equivalents.
     */
    static escape(str?: string): string;
    /**
     * This function takes an HTMLElement and a target string.
     * It returns the first Element with a matching target that is a sibling of the referent element or any of its previous siblings.
     * If no such element is found, it returns null.
     * @param referent - The starting point of the search.
     * @param target - The CSS selector used to find the desired element.
     * @returns The first Element with a matching target, or null if no such element is found.
     */
    static findHTMLElementBy(referent: HTMLElement, target: string): Element | null;
    /**
     * This function takes an object containing HTML attributes and returns a string representing the attributes.
     * If no attributes are provided, it returns an empty string.
     * @param attributes - An object containing HTML attributes.
     * @returns A string representing the attributes.
     */
    static formatHTMLAttributes(attributes: any): string;
}
export {};
