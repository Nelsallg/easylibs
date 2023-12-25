import { $$ } from "../functions/dom.d";
import { ModalComponent } from "../components/modal-component.d"
import { FlashInterface, flashHTMLModel } from "../interface/flash-interface.d";
import { FormatParamsToObject } from "../utils/format-params-to-object.d";

FormatParamsToObject.ACCEPTED_PARAMS = [
  "message","type","timer","title","closeButton",
  "container","icon","onClickClose","autoHide",
  "delayAutoHide","destroyOnHide","zIndex",
  "animationIn","animationOut",
];

export class Flash implements FlashInterface{
  
 
  addFlash(params:{}): Flash
  {
    
    let properties = new FormatParamsToObject(params).getProperties();
    let flash = Flash.create(properties['timer'],properties['type']);
 
    this.show({
      message: properties['message'],
      flashBox: flash,
      container: properties['container'],
      type: properties['type'],
      timer: properties['timer'],
      title: properties['title'],
      icon: properties['icon'],
      closeButton: properties['closeButton']??false,
    } as any);
    return this;
  }

 show(params:string|Array<any>, container?:HTMLElement):Flash
  {
    
    let flashBox;
    let datas;
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
          timer: __params['timer'],
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
      flashBox.innerHTML = this.flashHTMLModel({message:message,icon:icon,closeButton:closeButton}) ;
      let modalComponent = new ModalComponent(flashBox, container);
      modalComponent.open();
      return this;
    }
    if(datas){
      const message = datas.message;
      const icon = datas.icon;
      const container = datas.container;
      const closeButton = datas.closeButton;
      const flashBox = datas.flashBox;
      const title = datas.title;
      const type = datas.type;
      flashBox.innerHTML = this.flashHTMLModel({title:title,type:type,message:message,icon:icon,closeButton:closeButton});
      let modalComponent = new ModalComponent(flashBox,container);
      modalComponent.open();
    }
    return this;
  }

  
  public flashHTMLModel(props:{}):string
  {
  
    FormatParamsToObject.ACCEPTED_PARAMS = [
      "message","icon","type","closeButton","title",
    ]
    let properties = new FormatParamsToObject(props).getProperties();
    console.log(properties)
    flashHTMLModel.message = properties['message'];
    flashHTMLModel.type = properties['type'];
    flashHTMLModel.closeButton = properties['closeButton'];
    flashHTMLModel.title = properties['title'];
    flashHTMLModel.icon = properties['icon'];
    return flashHTMLModel.parent();
  }
      
  private static create(timer?:number, type?:string)
  {
    let lastFlashBox = $$('.flash') as HTMLElement;
    if(lastFlashBox)
    lastFlashBox.remove();

    (undefined != type)?
    type = "flashtype-"+type:
    type = "";
    
    let flashBox = document.createElement('flash');
    flashBox.setAttribute('class',`flash-box ${type}`)
    if(undefined !== timer && timer > 0)
    flashBox.setAttribute('timer', `${timer}`);

    return flashBox;
  }
}