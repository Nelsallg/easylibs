import ProgressForm from "./default-progress-form";
import { FieldSetGetterData, LazyOptions } from "./scripts/interfaces";
/**
 * LazyProgressForm est une classe qui étend ProgressForm pour gérer des formulaires à étapes
 * avec une progression paresseuse (lazy loading) des fieldsets.
 */
export default class LazyProgressForm extends ProgressForm {
    form: HTMLFormElement;
    url: string;
    parentTarget?: string;
    private isLazyRunCalled;
    /**
     * Constructeur de la classe LazyProgressForm.
     * @param {HTMLFormElement} form - L'élément de formulaire HTML.
     * @param {string} url - L'URL à laquelle les données du formulaire sont envoyées.
     * @param {string} [parentTarget] - Sélecteur pour le conteneur parent des fieldsets.
     */
    constructor(form: HTMLFormElement, url: string, parentTarget?: string);
    /**
     * Initialise la progression paresseuse des fieldsets.
     * @returns {LazyProgressForm} - Retourne l'instance de LazyProgressForm.
     */
    lazyRun(lazyOptions: LazyOptions): LazyProgressForm;
    /**
     * Gère la récupération et l'affichage du prochain fieldset.
     * @param {FieldSetGetterData} data - Les données nécessaires pour récupérer le prochain fieldset.
     */
    fetchNextFieldSet(data: FieldSetGetterData): void;
    /**
   * Récupère les données du formulaire pour le fieldset donné.
   * @param {HTMLFieldSetElement} template - Le fieldset à partir duquel extraire les données.
   * @param {string} [i] - L'indice du fieldset (facultatif).
   * @param {Record<string, any>} [extraData] - Données supplémentaires à ajouter au formulaire (facultatif).
   * @returns {FormData} - Les données du formulaire sous forme de FormData.
   */
    getFormData(template: HTMLFieldSetElement, i?: string, extraData?: Record<string, any>): FormData;
    /**
     * Insère le fieldset reçu dans le DOM et gère les événements.
     * @param {any} response - La réponse du serveur contenant le template du fieldset.
     * @param {number} i - L'indice du fieldset actuel.
     * @returns {Record<string,any>} - Contient les éléments du fieldset, les boutons prev/next et le bouton submit.
     */
    protected greftEvents(response: any, i: number): Record<string, any>;
    /**
     * Déplace la progression vers le fieldset suivant.
     * @param {number} i - L'indice du fieldset actuel.
     */
    private _next;
    /**
     * Déplace la progression vers le fieldset précédent.
     * @param {number} i - L'indice du fieldset actuel.
     * @param {HTMLElement} [prevButton] - Le bouton "prev" (facultatif).
     */
    private _prev;
    /**
     * Récupère les données de progression pour le fieldset actuel.
     * @param {number} i - L'indice du fieldset actuel.
     * @param {string} type - Le type de progression ("next" ou "prev").
     * @returns {Record<string,any>} - Les données de progression pour le fieldset.
     */
    private getProgressingData;
}
