import { FlashOptions } from "./scripts/types";
export default class Flash {
    private static OPTIONS;
    static TEMPLATE: string | number;
    /**
    * Adds a Flash message with the specified options.
    * @param options
    * @returns - The instance of the Flash class.
    */
    static add(options: FlashOptions): Flash;
    /**
     * Displays a Flash message with the specified options.
     * @param options - The Flash message options or the existing Flash element's selector.
     * @param container - The container in which to display the Flash message (optional).
     * @returns - The instance of the Flash class.
     */
    private static show;
    /**
     * Returns the HTML template for the Flash message.
     * @param properties - Flash message properties.
     * @returns - The HTML template for the Flash message.
     */
    private static template;
    private static parseTemplate;
    /**
     * Crée un élément Flash avec les options spécifiées.
     * @param duration - La durée d'affichage du message Flash (facultatif).
     * @param type - Le type de message Flash (facultatif).
     * @returns - L'élément Flash créé.
     * @private
     */
    private static create;
    /**
     * Returns an SVG representation as a string.
     *
     * @param name - The name of the icon to use.
     * @returns The SVG representation as a string.
     */
    private static svg;
}
