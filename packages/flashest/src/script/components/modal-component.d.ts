import { setAudio } from "../functions/audio.d";
import { animeOut, animeIn } from "../modules/animation.d";

export class ModalComponent{
  protected modal: Element;
  protected audio: string | null;
  protected volume: number;
  protected timer: number;
  protected titre?: string;
  protected container?: HTMLElement;
  protected animation:{type:string,position:string};
  protected closeButton?:HTMLElement;
  protected openButton?:HTMLElement;

  constructor(modal: Element,container?: HTMLElement,animation={type:'fade',position:'top'}) {
    this.modal = modal;
    this.audio = modal.getAttribute('audio');
    this.volume = parseInt(modal.getAttribute('volume') || '1', 10);
    this.timer = parseInt(modal.getAttribute('timer')||"0", 10);
    modal.setAttribute('aria-hidden', 'true');
    this.container = container;
    this.animation = animation;
    this.closeButton;
    this.openButton;
    this.autoClose();
  }

  public close = (): void => {
    const modal = this.modal;
    modal.setAttribute('aria-hidden', 'true');
    animeOut(modal as HTMLElement,this.animation,undefined,350,this.closeButton);
  };

  public open(){
    if(this.audio) {
      const audio = setAudio(this.audio);
      audio.volume = this.volume;
      audio.play();
    }
    const modal = this.modal;
    animeIn(modal as HTMLElement,this.animation,'flex');
    const container = this.container;
   
    if(undefined !== container){
      container.insertBefore(modal, container.firstChild);
    }else{
      document.body.appendChild(modal);
    }
    
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-labelledby', 'flash');
    this.closeButton = modal.querySelector('#flash-close-button') as HTMLElement;
    this.closeButton?.addEventListener('click', this.close);
  }

  protected autoClose = (): void =>{
    if(this.timer > 0) {
      setTimeout(() => {
        this.close();
      }, this.timer);
    }
  }

}
