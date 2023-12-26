import { FlashInterface, FlashOptions } from "./scripts/iflash";
export declare class Flash implements FlashInterface {
    /**
    * Ajoute un message Flash avec les options spécifiées.
    * @param params - Les options du message Flash sous form d'objet {cle : valeur}.
    * Les clés disponibles sont:
    *   * message
    *   * flashbox
    *   * type
    *   * duration
    *   * title
    *   * icon
    *   * closeButton
    * @returns - L'instance de la classe Flash.
    */
    addFlash<T extends FlashOptions>(params: T): Flash;
    /**
     * Affiche un message Flash avec les options spécifiées.
     * @param params - Les options du message Flash ou le sélecteur de l'élément Flash existant.
     * @param container - Le conteneur dans lequel afficher le message Flash (facultatif).
     * @returns - L'instance de la classe Flash.
     */
    private show;
    /**
     * Retourne le modèle HTML pour le message Flash.
     * @param properties - Les propriétés du message Flash.
     * @returns - Le modèle HTML du message Flash.
     */
    flashHTMLModel(properties: any, template?: number): string;
    /**
     * Crée un élément Flash avec les options spécifiées.
     * @param duration - La durée d'affichage du message Flash (facultatif).
     * @param type - Le type de message Flash (facultatif).
     * @returns - L'élément Flash créé.
     * @private
     */
    private static create;
}
