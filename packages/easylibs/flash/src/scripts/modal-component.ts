import { setAudio } from "../../../utils/src/functions/audio";
import { animeOut, animeIn } from "../../../animation/src";

export class ModalComponent{
  protected modal: Element;
  protected audio: string | null;
  protected volume: number;
  protected duration: number;
  protected titre?: string;
  protected container?: HTMLElement;
  protected animation:{type:string,position:string};
  protected closeButton?:HTMLElement;
  protected openButton?:HTMLElement;
  /**
   * Cette classe  encapsule la logique liée à la manipulation des modals, 
   * y compris leur ouverture, leur fermeture, la gestion de l'audio, de la durée et de l'animation. 
   * Elle fournit une interface simple pour interagir avec les modals
   * @param modal L'élément modal à manipuler.
   * @param container Le conteneur dans lequel insérer la modal (optionnel).
   * @param animation Les options d'animation de la modal (optionnel).
   */
  constructor(modal: Element,container?: HTMLElement,animation={type:'fade',position:'top'}) {
    this.modal = modal;
    this.audio = modal.getAttribute('audio');
    this.volume = parseInt(modal.getAttribute('volume') || '1', 10);
    this.duration = parseInt(modal.getAttribute('duration')||"0", 10);
    modal.setAttribute('aria-hidden', 'true');
    this.container = container;
    this.animation = animation;
    this.closeButton;
    this.openButton;
    this.autoClose();
  }
  /**
   * Méthode pour fermer la modal.
   */
  public close = (): void => {
    const modal = this.modal;
    modal.setAttribute('aria-hidden', 'true');
    animeOut({
      element:modal as HTMLElement,
      animation:this.animation,
      display:undefined,
      delay:350,
      closeButton:this.closeButton
    });
  };
  /**
   * Méthode pour ouvrir la modal.
   */
  public open(){
    if(this.audio) {
      const audio = setAudio(this.audio);
      audio.volume = this.volume;
      audio.play();
    }
    const modal = this.modal;
    animeIn({element:modal as HTMLElement,animation:this.animation,display:'flex'});
    const container = this.container;
   
    if(undefined !== container){
      container.insertBefore(modal, container.firstChild);
      this.clearProperties(this.modal);
    }else{
      document.body.insertBefore(modal, document.body.firstChild);
      this.clearProperties(this.modal);
    }
    
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-labelledby', 'flash');
    this.closeButton = modal.querySelector('#flash-close-button') as HTMLElement;
    this.closeButton?.addEventListener('click', this.close);
  }
  /**
   * Méthode pour gérer la fermeture automatique de la modal.
   */
  protected autoClose = (): void =>{
    if(this.duration > 0) {
      setTimeout(() => {
        this.close();
      }, this.duration);
    }
  }
  /**
   * Méthode interne pour nettoyer les attributs de la modal.
   * @param modal L'élément modal à nettoyer.
   */
  protected clearProperties(modal:Element){
    document.addEventListener('DOMContentLoaded', function() {
      modal.removeAttribute('duration');
      modal.removeAttribute('icon');
      modal.removeAttribute('audio');
      modal.removeAttribute('volume');
      modal.removeAttribute('container');
      modal.removeAttribute('closeButton');
    });
  }
}
