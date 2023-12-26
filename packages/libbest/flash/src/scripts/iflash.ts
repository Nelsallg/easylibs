import { Flash } from "../index";
import { SVG } from "./icon";
import '../assets/index.scss';

export declare type FlashOptions = {
  message: string,
  type: string,
  flashbox?: HTMLElement,
  container?: HTMLElement,
  duration?: number | string,
  title?: string,
  icon?: string,
  closeButton?: string | boolean
};

export interface FlashInterface {
  addFlash(params:FlashOptions): Flash;
  // show(props:string|FlashOptions, container?: HTMLElement): Flash;
  flashHTMLModel(params:FlashOptions): flashHTMLModel | string;
}

export class flashHTMLModel {
  public static title: string | boolean;
  public static icon: string | boolean;
  public static message: string;
  public static type?: string;
  [x: string]: any;
  static closeButton: string | boolean = true;
  protected message:string;
  protected title:string|boolean;
  protected icon:string|boolean;
  protected type?:string;
  protected static hasHeader:boolean = true;
  protected static hasFlashIcon:boolean = false;
  
  constructor(message:string,title:string|boolean,icon:string|boolean,type?:string) {
    this.message = message;
    this.title = title;
    this.icon = icon;
    this.type = type;
  }

  public static parent(): string {
    let title = flashHTMLModel.setTitle(this.title);
    let icon = flashHTMLModel.setIcon(this.icon);
    let type = flashHTMLModel.setType(this.type);
    if((false === title || undefined === title) && false === flashHTMLModel.closeButton){
    flashHTMLModel.hasHeader = false;}
    if(undefined !== type || "" !== icon){
      flashHTMLModel.hasFlashIcon = true;}
    return `${flashHTMLModel.hasHeader?"<span class='flash-header'>":""}
                ${typeof title == "string"?"<h6>"+title+"</h6>":""}
                ${flashHTMLModel.closeButton?SVG('close-modal','iconPath'):""}
            ${flashHTMLModel.hasHeader?"</span>":""}
            <span class="flash-content">
                ${flashHTMLModel.hasFlashIcon?"<h6>"+icon+"</h6>":""}
                <h6 class="flash-message">
                    ${this.message}
                </h6>
            </span>`;
  }

  public getMessage(): string {
    return this.message;
  }

  public static setMessage(message?: string): string {
    if(undefined !== message){
      return this.message = message;
    }
    return flashHTMLModel.message;
  }


  public getType(): string {
    return this.type??"";
  }

  public static setType(type?: string): string|undefined {
    if(undefined !== type){
      return this.type = type;
    }
    return flashHTMLModel.type;
  }


  public getTitle(): string|boolean {
    return this.title??"";
  }

  protected static setTitle(title: string|boolean): string|boolean {
    if(undefined === title || true === title){
      return this.title = flashHTMLModel.type as string
    }
    if(typeof title == "string"){
      return this.title = title;
    }
    return "";
  }


  public getIcon(): string|boolean{
    return this.icon??"";
  }

  protected static setIcon(icon:string|boolean): string{
    if(true === icon && undefined === flashHTMLModel.type){
      return this.icon = SVG("success",'iconPath');
    }
    if(true === icon && undefined !== flashHTMLModel.type){
      return this.icon = SVG(flashHTMLModel.type,'iconPath');
    }
    if(typeof icon == "string"){
      return this.icon = SVG(icon,'iconPath');
    }
    return "";
  }
}
