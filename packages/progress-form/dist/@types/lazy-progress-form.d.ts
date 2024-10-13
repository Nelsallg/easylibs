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
    private _buttonInner;
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
     * Processes an existing fieldset.
     * @param {FetchFieldsetParams} params - Parameters for fetching the fieldset.
     */
    private processExistingFieldset;
    /**
     * Posts fieldset data to the server.
     * @param {HTMLFieldSetElement} fieldset - The fieldset element to post.
     * @param {FetchFieldsetParams} params - Parameters for posting the fieldset data.
     */
    private postFieldsetData;
    /**
     * Prepares the next step in the form progression.
     * @param {any} elements - The elements involved in the next step.
     * @param {FetchFieldsetParams} params - Parameters for fetching the next fieldset.
     */
    private prepareNextStep;
    /**
   * Retrieves the form data for the given fieldset.
   * @param {HTMLFieldSetElement} template - The fieldset from which to extract the data.
   * @param {string} [i] - The index of the fieldset (optional).
   * @param {Record<string, any>} [extraData] - Additional data to add to the form (optional).
   * @returns {FormData} - The form data as a FormData object.
   */
    getFormData(template: HTMLFieldSetElement, i?: number, extraData?: Record<string, any>, form?: HTMLFormElement): FormData;
    /**
     * Insère le fieldset reçu dans le DOM et gère les événements.
     * @param {any} response - La réponse du serveur contenant le template du fieldset.
     * @param {number} i - L'indice du fieldset actuel.
     * @returns {Record<string,any> | null} - Contient les éléments du fieldset, les boutons prev/next et le bouton submit.
     */
    protected graftEvents(response: any, i: number): Record<string, any> | null;
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
    /**
     * Handles adding or removing a spinner element.
     * @param {HTMLElement} nextButton - The button triggering the spinner.
     * @param {HTMLElement} spinner - The spinner element.
     * @param {string} action - The action to perform ("add" or "remove").
     */
    private handleSpinner;
}
