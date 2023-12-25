// import DOMPurify from 'dompurify';
import { animeInOut } from "../components/animations/animation";
import { processNodes } from "../functions/convert-type";

export class FormModal{
    private openingButton?: HTMLElement;
    private modal?: HTMLElement;
    private closingButton?: HTMLElement;
    private modalIdentifier?: string;
    
    public init(){
        const modals = document.querySelectorAll('[data-modal^="modal-bg"]');
        processNodes(modals, (modal:HTMLElement) => {
            this.modal = modal;
            this.modalIdentifier =  modal.getAttribute('data-modal')?.split('-')[2];
            try {
                if(!this.modalIdentifier || "" === this.modalIdentifier){
                    throw new Error('Modal identifier not found');
                }
                this.checkExistingData(this.modalIdentifier);
                this.openingButton = document.querySelector(`[modal-openbtn-${this.modalIdentifier}]`) as HTMLElement;
                if(!this.openingButton){
                    throw new Error(`Open button for modal with identifier @${this.modalIdentifier} not found`);
                }
                this.closingButton = document.querySelector(`[modal-closebtn-${this.modalIdentifier}]`) as HTMLElement;
                if(!this.closingButton){
                    throw new Error(`Close button for modal with identifier @${this.modalIdentifier} not found`);
                }
            } catch (error) {
                console.error(error);
            }
        })
        return this;
    }
    public setAnimation(animation?:{type:string,position:string},display:string = "flex",animateElement?:HTMLElement){
        if (animation && this.modal && this.closingButton && this.openingButton) {
        animeInOut({
            openButton: this.openingButton,
            element: animateElement ? {element:this.modal,animateElement}:this.modal,
            display,
            animation,
            closeButton: this.closingButton,
        });
        }

        return this;
    }
    private checkExistingData(identifier:string)
    {
        const modals = document.querySelectorAll(`[data-modal="modal-bg-${identifier}"]`);
        const openButtons = document.querySelectorAll(`[modal-openbtn-${identifier}]`);
        const closeButtons = document.querySelectorAll(`[modal-openbtn-${identifier}]`);
        try {
            if(modals && modals.length > 1){
                throw new Error(`More than one modal with identifier name @${identifier} detected`);
            }
            if(openButtons && openButtons.length > 1){
                throw new Error(`More than one opening button with identifier name @${identifier} detected`);
            }
            if(closeButtons && closeButtons.length > 1){
                throw new Error(`More than one closing button with identifier name @${identifier} detected`);
            }
        } catch (error) {
            console.error(error);
        }
    }
}
