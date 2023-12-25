import { $$ } from "../functions/dom";
import { ModalComponent } from "./modal-component"
import { FlashInterface, FlashOptions } from "../interface/flash-interface";
import { FormatParamsToObject } from "../utils/format-params-to-object";

FormatParamsToObject.ACCEPTED_PARAMS = [
  "message","type","duration","title","closeButton",
  "container","icon","onClickClose","autoHide",
  "delayAutoHide","destroyOnHide","zIndex",
  "animationIn","animationOut",
];

export class Flash implements FlashInterface{
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
  addFlash<T extends FlashOptions>(params:T): Flash
  {
    let properties = new FormatParamsToObject(params).getProperties();
    let flash = Flash.create(properties['duration'],properties['type']);
    this.show({
      message: properties['message'],
      flashBox: flash,
      container: properties['container'],
      type: properties['type'],
      duration: properties['duration'],
      title: properties['title'],
      icon: properties['icon'],
      closeButton: properties['closeButton']??false,
    } as any);
    return this;
  }
  /**
   * Affiche un message Flash avec les options spécifiées.
   * @param params - Les options du message Flash ou le sélecteur de l'élément Flash existant.
   * @param container - Le conteneur dans lequel afficher le message Flash (facultatif).
   * @returns - L'instance de la classe Flash.
   */
  show<T extends FlashOptions>(params:string|T, container?:HTMLElement):Flash
  {
    
    let flashBox:any;
    let datas:any;
    switch (typeof params) {
      case 'string':
        flashBox = $$(params) as HTMLElement;
        break;
      default:
        let __params = params as any;
        datas = {
          message: __params['message'], 
          container: __params['container'],
          icon: __params['icon'],
          duration: __params['duration'],
          type: __params['type'],
          flashBox: __params['flashBox'],
          title: __params['title'],
          closeButton: __params['closeButton']
        };
        break;
    }
    
    if(flashBox && flashBox instanceof  HTMLElement){
      const message = flashBox.innerText;
      const icon = flashBox.getAttribute("icon") as string;
      const closeButton = flashBox.getAttribute("closeButton") as string;
      flashBox.innerHTML = this.flashHTMLModel({message:message,icon:icon,closeButton:closeButton});
      let modalComponent = new ModalComponent(flashBox, container);
      modalComponent.open();
    }else if(datas){
      const {message, icon, container, closeButton, flashBox, title, type} = datas;
      flashBox.innerHTML = this.flashHTMLModel({
        title:title,
        type:type,
        message:message,
        icon:icon,
        closeButton:closeButton
      });
      let modalComponent = new ModalComponent(flashBox,container);
      modalComponent.open();
    }
    
    return this;
  }
  /**
   * Retourne le modèle HTML pour le message Flash.
   * @param properties - Les propriétés du message Flash.
   * @returns - Le modèle HTML du message Flash.
   */
  public flashHTMLModel(properties:any):string
  {
  
    let button: string;
    (true === Boolean(properties.closeButton))?
    button = `<span class="flash-header"><div id="flash-close-button"></div></span>`:
    button = '';
  
    return `${button}
            <span class="flash-content">
              <svg><use xlink:href="/${properties.icon}"></use></svg>
              <h6 class="flash-message">
                ${properties.message}
              </h6>
            </span>`;
  }
  /**
   * Crée un élément Flash avec les options spécifiées.
   * @param duration - La durée d'affichage du message Flash (facultatif).
   * @param type - Le type de message Flash (facultatif).
   * @returns - L'élément Flash créé.
   * @private
   */
  private static create(duration?:number, type?:string):HTMLElement
  {
    let lastFlashBox = $$('.flash-box') as HTMLElement;
    if(lastFlashBox)
    {lastFlashBox.remove();}

    (undefined != type)?
    type = "flashtype-"+type:
    type = "";
    
    let flashBox = document.createElement('flash');
    flashBox.setAttribute('class',`flash-box ${type}`)
    if(undefined !== duration && duration > 0)
    {flashBox.setAttribute('duration', `${duration}`);}

    return flashBox;
  }
}