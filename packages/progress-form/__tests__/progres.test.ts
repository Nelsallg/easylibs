import FetchRequest from "@easylibs/fetch-request";
import Utils from "@easylibs/utils";
import { FieldSetGetterData, LazyOptions } from "../src/scripts/interfaces";
import ProgressForm from "../src/default-progress-form";

/**
 * LazyProgressForm est une classe qui étend ProgressForm pour gérer des formulaires à étapes
 * avec une progression paresseuse (lazy loading) des fieldsets.
 */
export default class LazyProgressForm extends ProgressForm {
  private isLazyRunCalled = false;

  /**
   * Constructeur de la classe LazyProgressForm.
   * @param {HTMLFormElement} form - L'élément de formulaire HTML.
   * @param {string} url - L'URL à laquelle les données du formulaire sont envoyées.
   * @param {string} [parentTarget] - Sélecteur pour le conteneur parent des fieldsets.
   */
  public constructor(
    public form: HTMLFormElement,
    public url: string,
    public parentTarget?: string
  ) {
    super(form);
  }

  /**
   * Initialise la progression paresseuse des fieldsets.
   * @param {LazyOptions} lazyOptions - Les options pour la progression paresseuse.
   * @returns {LazyProgressForm} - Retourne l'instance de LazyProgressForm.
   */
  public lazyRun(lazyOptions: LazyOptions): LazyProgressForm {
    this.isLazyRunCalled = true;
    this.isLazyProgress = true;
    let { fieldsetLength, progressOptions, styleOptions } = lazyOptions;

    this.lazyFieldsetLength = fieldsetLength;
    let { fieldSets, nextIndex, prevTranslateX, PROGRESS, progressElement } =
      this.init(progressOptions);
    let translateX =
      this.translateX - this.fieldsetMarginWidth / this.fieldsetLength;
    const targetMarginWidth = progressOptions
      ? progressOptions.targetMarginWidth ?? 0
      : 0;
    for (let i = 0; i < this.lazyFieldsetLength; i++) {
      const fieldSet = (
        i === 0 ? document.querySelector(`fieldset`) : null
      ) as HTMLElement;
      const nextButton = fieldSet?.querySelector("[__next__]") as HTMLElement;
      let nextTranslateX = translateX * nextIndex - targetMarginWidth;
      prevTranslateX = translateX * nextIndex + Math.abs(translateX * 2);
      const nextProgress = PROGRESS * (i + 2);
      const prevProgress = i > 1 ? PROGRESS * i : PROGRESS;
      this.fieldSetElement = fieldSet;
      if (fieldSet) {
        fieldSet.classList.add(`fieldset0`);
        fieldSet.focus();
        this.compartmentalizeFocusInFieldset(fieldSet);
        nextButton.setAttribute("data-next-index", "1");
      }
      this.progressingData[`fieldset${i}`] = {
        "@i": i,
        "@translateX":
          i === 0 ? 0 : i === 1 ? translateX : nextTranslateX - translateX,
        "@progress": PROGRESS * (i + 1),
        "@target": this.fieldSetElement,
        next: {
          i: nextIndex,
          button: nextButton,
          translateX: nextTranslateX,
          progress: nextProgress,
        },
        prev: {
          i: i - 1,
          button: null,
          translateX: prevTranslateX,
          progress: prevProgress,
        },
      };
      nextIndex++;
      this.formatProgressingData(i);
    }
    if (progressElement) {
      progressElement.style.width = `${PROGRESS}%`;
    }
    if (this.enableDefaultCssStyle) {
      this.renderedStyle = cssStyle(
        this.form,
        fieldSets,
        this.translateX,
        this.fieldsetLength,
        this.fieldsetMarginWidth,
        styleOptions
      );
    }
    return this;
  }

  /**
   * Gère la récupération et l'affichage du prochain fieldset.
   * @param {FieldSetGetterData} data - Les données nécessaires pour récupérer le prochain fieldset.
   */
  public fetchNextFieldSet(data: FieldSetGetterData) {
    if (!this.isLazyRunCalled) {
      throw new Error("You must call LazyProgressForm.lazyRun() before.");
    }

    let { callback, spinner, template, shouldFetch, extraData } = data;
    template = template! || this.form.querySelector("fieldset");
    const nextButton = template!.querySelector("[__next__]") as HTMLElement;

    if (!nextButton) return;

    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (!this.isValidFieldset(template!)) {
        return;
      }

      const nextButtonInner = nextButton.innerHTML;
      const i = nextButton.dataset.nextIndex!;
      let existingFieldset = this.form?.querySelector(
        `.fieldset${i}`
      ) as HTMLFieldSetElement;

      if (existingFieldset && shouldFetch) {
        this.handleFetchRequest(
          existingFieldset,
          nextButton,
          nextButtonInner,
          spinner!,
          i,
          extraData,
          callback
        );
      } else if (!existingFieldset) {
        this.handleFetchRequest(
          template,
          nextButton,
          nextButtonInner,
          spinner!,
          i,
          extraData,
          callback
        );
      } else {
        this._next(parseInt(i));
      }
    });
  }

  /**
   * Gère la requête de récupération du fieldset suivant.
   * @param {HTMLFieldSetElement} fieldset - Le fieldset actuel ou précédent.
   * @param {HTMLElement} nextButton - Le bouton "suivant" associé.
   * @param {string} nextButtonInner - Le contenu HTML initial du bouton "suivant".
   * @param {string | HTMLElement} spinner - Le spinner à afficher pendant le chargement.
   * @param {string} index - L'indice du fieldset à récupérer.
   * @param {any} extraData - Données supplémentaires à envoyer avec la requête.
   * @param {(response: any, status: number, index: number) => void} [callback] - Fonction de rappel à exécuter après la requête.
   */
  private handleFetchRequest(
    fieldset: HTMLFieldSetElement,
    nextButton: HTMLElement,
    nextButtonInner: string,
    spinner: string | HTMLElement,
    index: string,
    extraData: any,
    callback?: (response: any, status: number, index: number) => void
  ) {
    const previousFieldset = this.form?.querySelector(
      `.fieldset${parseInt(index) - 1}`
    ) as HTMLFieldSetElement;

    new FetchRequest({
      uri: this.url,
      data: this.getFormData(previousFieldset || fieldset, index, extraData),
      options: {
        method: "POST",
        responseDataType: "json",
      },
      callbacks: {
        onPreFetch: () => this.handlePreFetch(nextButton, spinner),
        onPostFetch: (response, status) =>
          this.handlePostFetch(
            nextButton,
            nextButtonInner,
            response,
            status!,
            index,
            callback
          ),
        onSuccess: async (response) => {
          this._next(parseInt(index));
          if (!nextButton && callback) {
            callback(response, 200, parseInt(index));
          }
        },
      },
    });
  }

  /**
   * Gère l'affichage du spinner et la désactivation du bouton avant la requête.
   * @param {HTMLElement} nextButton - Le bouton "suivant" associé.
   * @param {string | HTMLElement} [spinner] - Le spinner à afficher pendant le chargement.
   */
  private handlePreFetch(
    nextButton: HTMLElement,
    spinner?: string | HTMLElement
  ) {
    if (spinner) {
      nextButton.innerHTML = "";
      if (typeof spinner === "string") {
        nextButton.innerHTML = spinner;
      } else {
        nextButton.appendChild(spinner);
      }
    }
    nextButton.setAttribute("disabled", "disabled");
  }

  /**
   * Gère la réinitialisation du bouton et exécute le callback après la requête.
   * @param {HTMLElement} nextButton - Le bouton "suivant" associé.
   * @param {string} nextButtonInner - Le contenu HTML initial du bouton "suivant".
   * @param {any} response - La réponse de la requête.
   * @param {number} status - Le statut HTTP de la réponse.
   * @param {string} index - L'indice du fieldset actuel.
   * @param {(response: any, status: number, index: number) => void} [callback] - Fonction de rappel à exécuter après la requête.
   */
  private handlePostFetch(
    nextButton: HTMLElement,
    nextButtonInner: string,
    response: any,
    status: number,
    index: string,
    callback?: (response: any, status: number, index: number) => void
  ) {
    nextButton.innerHTML = nextButtonInner;
    nextButton.removeAttribute("disabled");
    if (callback) callback(response, status, parseInt(index));
  }

  /**
   * Récupère les données du formulaire pour le fieldset donné.
   * @param {HTMLFieldSetElement} template - Le fieldset à partir duquel extraire les données.
   * @param {string} [i] - L'indice du fieldset (facultatif).
   * @param {Record<string, any>} [extraData] - Données supplémentaires à ajouter au formulaire (facultatif).
   * @returns {FormData} - Les données du formulaire sous forme de FormData.
   */
  public getFormData(
    template: HTMLFieldSetElement,
    i?: string,
    extraData?: Record<string, any>
  ): FormData {
    let formData = new FormData();
    let fields = template.querySelectorAll(
      "input,select,textarea"
    ) as NodeListOf<HTMLInputElement>;
    fields.forEach((field) => {
      formData.set(field.name, field.value);
    });
    if (i) {
      formData.set("nextIndex", i);
    }
    if (extraData) {
      for (const [key, value] of Object.entries(extraData)) {
        formData.set(key, value);
      }
    }
    return formData;
  }

  /**
   * Insère le fieldset reçu dans le DOM et gère les événements.
   * @param {any} response - La réponse du serveur contenant le template du fieldset.
   * @param {number} i - L'indice du fieldset actuel.
   * @returns {Record<string, any>} - Contient les éléments du fieldset, les boutons prev/next et le bouton submit.
   */
  protected greftEvents(response: any, i: number): Record<string, any> {
    const fieldsetContainer = document.querySelector(
      `${this.parentTarget ? this.parentTarget + " " : ""}[fieldset__container]`
    ) as HTMLElement;
    const fieldset = Utils.textToHTMLElement(
      response.template
    ) as HTMLFieldSetElement;
    const prevButton = fieldset.querySelector("[__prev__]") as HTMLElement;
    const nextButton = fieldset.querySelector("[__next__]") as HTMLElement;
    const submitButton = fieldset.querySelector("[__submit__]") as HTMLElement;
    Object.assign(fieldset.style, this.RENDERED_STYLE.fieldsetStyle);
    fieldsetContainer.appendChild(fieldset);
    this._prev(i, prevButton);
    this._next(i);
    return { nextButton, prevButton, fieldset, submitButton };
  }

  /**
   * Déplace la progression vers le fieldset suivant.
   * @param {number} i - L'indice du fieldset actuel.
   */
  private _next(i: number) {
    const nextProgressingData = this.getProgressingData(i, "next");
    this.next(nextProgressingData.index, nextProgressingData.translate);
  }

  /**
   * Déplace la progression vers le fieldset précédent.
   * @param {number} i - L'indice du fieldset actuel.
   * @param {HTMLElement} [prevButton] - Le bouton "précédent" (facultatif).
   */
  private _prev(i: number, prevButton?: HTMLElement) {
    const prevProgressingData = this.getProgressingData(i, "prev");
    this.prev(
      prevProgressingData.index,
      prevProgressingData.translate,
      prevButton
    );
  }

  /**
   * Récupère les données de progression pour le fieldset actuel.
   * @param {number} i - L'indice du fieldset actuel.
   * @param {"next" | "prev"} type - Le type de progression ("next" ou "prev").
   * @returns {Record<string, any>} - Les données de progression pour le fieldset.
   */
  private getProgressingData(
    i: number,
    type: "next" | "prev"
  ): Record<string, any> {
    const PROGRESSING_DATA = this.PROGRESSING_DATA;
    const data = {
      next: {
        index: PROGRESSING_DATA[`fieldset${i}`]["@i"],
        translate: PROGRESSING_DATA[`fieldset${i}`]["@translateX"],
      },
      prev: {
        index: PROGRESSING_DATA[`fieldset${i}`].prev.i,
        translate: PROGRESSING_DATA[`fieldset${i}`].prev.translateX,
      },
    };
    return data[type];
  }
}
function cssStyle(form: HTMLFormElement, fieldSets: NodeListOf<HTMLFieldSetElement>, translateX: number, fieldsetLength: number, fieldsetMarginWidth: number, styleOptions: import("../src/scripts/interfaces").StyleOptions | undefined): import("../src/scripts/types").RenderedStyle {
  throw new Error("Function not implemented.");
}

