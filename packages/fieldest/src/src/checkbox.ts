import {$$} from './dom'
import { processNodes } from './convert-type';
/**
 * Initialise les fonctionnalités de la case à cocher dans un élément parent spécifié.
 * @param parentElement Sélecteur CSS de l'élément parent contenant les cases à cocher.
 */
export function checkbox(parentElement: string){
    const content = $$(parentElement);
    if(null !== content){
        processNodes(content,function(node){
            init(node);
        });
    }
}

function init(content:HTMLElement){
    const parentCheckbox = content.querySelector('.parent-checkbox') as HTMLInputElement;
    const childrenCheckboxes = content.querySelectorAll('.child-checkbox') as NodeListOf<HTMLInputElement>;
    let parentChecked = parentCheckbox.checked;
    /**
    * Bascule l'état de sélection des cases à cocher enfants.
    * @param checked État de sélection des cases à cocher.
    */
    const toggleChildrenCheckboxes = function (checked:boolean) {
        childrenCheckboxes.forEach((checkbox) => {
            checkbox.checked = checked;
        });
    }
    /**
    * Gestionnaire d'événement pour la case à cocher parent.
    * Met à jour l'état de sélection des cases à cocher enfants.
    * @param e Événement de clic.
    */
    parentCheckbox.addEventListener('click', (e) => {
        parentChecked = parentCheckbox.checked;
        toggleChildrenCheckboxes(parentChecked);
    });

    childrenCheckboxes.forEach((checkbox) => {
        /**
        * Gestionnaire d'événement pour les cases à cocher enfants.
        * Met à jour l'état de sélection de la case à cocher parent en fonction des cases à cocher enfants.
        */
        checkbox.addEventListener('click', () => {
            if(!checkbox.checked && parentChecked){
                parentCheckbox.checked = false;
                parentChecked = false;
            }else if(checkbox.checked && !parentChecked){
                const allChildrenChecked = Array.from(childrenCheckboxes).every((c) => c.checked);
                if(allChildrenChecked){
                    parentCheckbox.checked = true;
                    parentChecked = true;
                }
            }
        });
    });
}