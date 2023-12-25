import { animeIn } from "../components/animations/animation";
import { textHtmlToNode } from "./convert-type";
import { enableScrollBehavior } from "./scroll-behavior";
let dragged:HTMLElement;
let isDragging:boolean;
let draggableParent:HTMLElement;
let afterElement: HTMLElement|null;
let placeholder:HTMLElement|null;
let slip:string;
let outerDragged:boolean = false;
let startY:number;
let currentY:number;
let dragEvent;
let dropEvent;
declare type Draggable = HTMLElement;
declare type DraggedElement = HTMLElement;
declare type EnteredDraggable = HTMLElement;
declare type LeftDraggable = HTMLElement;
declare type Mixed = Element | Error | null | undefined;
declare type DragAnimation = {
  // enter?: (draggedEl:DraggedElement, enteredEl:EnteredDraggable) => void|Promise<void>;
  animate:boolean,
  type?:string,
  position?:string

}
/**
 * Cette fonction est appelée pour initialiser le processus de glisser-déposer. 
 * Elle sélectionne tous les éléments ayant la classe "draggable" 
 * et ajoute des écouteurs d'événements pour les différentes actions liées au glisser-déposer, 
 * telles que "drag", "dragover", "dragenter", "dragleave" et "dragend".
 */
export function droppingStart():void
{
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(() => {
      document.addEventListener('drag', drag, false);
      document.addEventListener('dragover', dragOver, false);
      document.addEventListener('dragenter', dragEnter, false);
      document.addEventListener('dragleave', dragLeave, false);
      document.addEventListener('dragend', dragEnd, false);
    });

}
/**
 * Cette fonction est appelée lorsqu'un élément est en cours de déplacement. 
 * Elle récupère l'élément HTML déplacé à partir de l'événement de glissement.
 */
function drag(event: DragEvent):void
{
  dragged = event.target as HTMLElement;
}
/**
 * Cette fonction est appelée au début du glisser-déposer. 
 * Elle est déclenchée lorsque l'utilisateur commence à déplacer un élément. 
 * Elle met à jour l'élément déplacé avec une opacité réduite et ajoute une classe "dragging" 
 * pour appliquer des styles visuels. 
 * De plus, elle active le comportement de défilement à l'aide de la fonction
 * enableScrollBehavior(), puis retourne l'élément déplacé.
 */
export function dragStart(event: DragEvent):DraggedElement|undefined|null
{
  if(event){
    dragged = event.target as HTMLElement;
    startY = event.clientY;
    if(dragged.classList.contains('undraggable')){
      return null;
    }
    dragEvent = event;
    dragged.style.opacity = '.4';
    dragged.classList.add('dragging');
    enableScrollBehavior();
    isDragging = true;
    return dragged;
  }
  
}
/**
 * Cette fonction est appelée lorsqu'un élément déplacé survole un autre élément. 
 * Elle est utilisée pour gérer les actions lors du survol, 
 * telles que la modification de l'effet de largage et l'indication visuelle de la zone de largage.
 * @param event 
 */
function dragOver(event:DragEvent):void
{
  let element: HTMLElement = event.target as HTMLElement;
  currentY = event.clientY
  // console.log({currentY})
  event.preventDefault();
  if(event.dataTransfer){
    event.dataTransfer.dropEffect = 'move';
    let parent = element.closest('.dropzone')
    let undroppable = element.closest('.undroppable');
    if(!parent){
      event.dataTransfer.dropEffect = 'none';
    }else if(undroppable){
      event.dataTransfer.dropEffect = 'none';
    }else{
      event.dataTransfer.dropEffect = 'copy';
    }
  }
  
  if(draggableParent && draggableParent.classList.contains("draggable")){
    const element = draggableParent.closest(".dropzone") as HTMLElement;
    if(isDragging){
      afterElement = getDragAfterElement(element, event.clientY) as HTMLElement;
      slip = draggingSlip();
      if(afterElement){
        // if("bottom" === slip){
        //   if(!placeholder){
        //     placeholder = draggablePlaceholder(undefined, "slide") as HTMLElement;
        //     element.insertBefore(placeholder, afterElement);
        //   }
        // }
        // if("top" === slip){
        //   if(!placeholder){
        //     placeholder = draggablePlaceholder(undefined, "slide") as HTMLElement;
        //     element.insertBefore(placeholder, afterElement);
        //   }
        // }
        if("top" === slip){
          animeIn({element:dragged,animation:{type:"slide",position:"bottom",clearAfterApplying:true},display:null});
          element.insertBefore(dragged, afterElement);
        }
        if("bottom" === slip){
          animeIn({element:dragged,animation:{type:"slide",position:"top",clearAfterApplying:true},display:null});
          element.insertBefore(dragged, afterElement?.nextElementSibling as Node);
        }
      }
    }
  }
}
/**
 * Cette fonction est appelée lorsqu'un élément déplacé entre en contact avec un autre élément. 
 * Elle est utilisée pour modifier l'apparence visuelle de l'élément cible, 
 * en modifiant sa couleur de fond par exemple.
 */
function dragEnter(event:DragEvent):EnteredDraggable
{
  let element: HTMLElement = event.target as HTMLElement;
  draggableParent = element.parentElement as HTMLElement;
  if(element.classList.contains("dropzone")) {
    element.style.background = "rgba(0, 0, 0, 0.5)";//#8b5cf6
  }
  //  if(draggableParent && draggableParent.classList.contains("draggable") && dragged !== draggableParent){
  //   const currentElement = document.querySelector('.draggable-skeleton') as HTMLElement;
  //   if(!currentElement){
  //     const placeholder = draggablePlaceholder() as HTMLElement;
  //     const parentElement = draggableParent.closest('.dropzone') as HTMLElement;
  //     parentElement.insertBefore(placeholder, draggableParent.nextSibling);
  //   }
  // }
  return element;
}
/**
 * Cette fonction est appelée lorsque l'élément déplacé quitte un élément avec lequel il était en contact. 
 * Elle est utilisée pour réinitialiser l'apparence visuelle de l'élément cible, 
 * en supprimant par exemple la couleur de fond qui avait été ajoutée dans dragEnter().
 */
function dragLeave(event: DragEvent):LeftDraggable
{
  let element: HTMLElement = event.target as HTMLElement;
  draggableParent = element.parentElement as HTMLElement;
  if(element.classList.contains("dropzone") || element.classList.contains("draggable")){
    element.style.background = "";
    if(placeholder){
      element.removeChild(placeholder);
      placeholder = null;
    }
    // if(draggableParent && draggableParent.classList.contains("draggable")){
    //   const currentElement = document.querySelector('.draggable-skeleton') as HTMLElement;
    //   if(currentElement){
    //     currentElement.remove()
    //   }
    // }
  }
  return element;
}
/**
 * Cette fonction est appelée lorsque le glisser-déposer est terminé, 
 * c'est-à-dire lorsque l'élément déplacé est lâché. 
 * Elle rétablit l'opacité normale de l'élément déplacé et supprime la classe "dragging" 
 * pour annuler les styles visuels appliqués.
 */
function dragEnd(event: Event):Draggable
{
  let draggable: HTMLElement = event.target as HTMLElement;
  draggable.style.opacity = "";
  draggable.classList.remove('dragging');
  isDragging = false;
  if (placeholder && (draggableParent && draggableParent.classList.contains("draggable"))) {
        const element = draggableParent.closest(".dropzone") as HTMLElement;
        element.insertBefore(draggableParent, placeholder);
        element.removeChild(placeholder);
        placeholder = null;
  }
  return draggable;
}
/**
 *Cette fonction est appelée lorsque l'élément déplacé est lâché dans une zone de largage valide. 
 Elle est responsable de la gestion de l'action de largage, 
 en effectuant les modifications nécessaires sur l'arbre DOM. 
 Par exemple, elle met à jour le style de la zone de largage, 
 supprime l'élément déplacé de son ancien emplacement et l'ajoute à la zone de largage appropriée. 
 Enfin, elle retourne l'élément parent de la zone de largage ou une erreur si une erreur se produit pendant le processus de largage.
 */
export function drop<T extends DragAnimation>(event: DragEvent, animation?:T):Mixed
{
  if(event){
    event.preventDefault();
    let dropzone: HTMLElement = event.target  as HTMLElement;
    dropEvent = event;
    if(dropzone.classList.contains('undroppable')){
      return null;
    }
    try{
      if(dropzone.classList.contains("dropzone")) {
        dropzone.style.background = "";
        if (null != dragged.parentNode) {
          dragged.parentNode.removeChild(dragged);
        }
        if(dropzone.localName == "td"){
          let tr = dropzone.parentElement;
          if(null != tr){
            let dropzoneParent = tr.parentElement;
            if (null != dropzoneParent) {
              dropzoneParent.appendChild(dragged);
            }
            tr.remove();
            return dropzoneParent;
          }
        }
      }else if(!dropzone.classList.contains("dropzone")){
        return dropzone.closest('.dropzone');
      }
    }catch(error){
      if (typeof error === 'string') {
        return new Error(error);
      }
    }
  }
}


function hundleDraggedPosition(dropzone:Element){
  const siblingElements = Array.from(dropzone!.children);
  const dropIndex = siblingElements.indexOf(dropzone);
  console.log({dropIndex,siblingElements,dropzone})
  if (dropIndex !== -1) {
    let insertIndex = dropIndex;
    
    // Find the index of the element before the dropzone
    for (let i = dropIndex - 1; i >= 0; i--) {
      if (!siblingElements[i].classList.contains("undroppable")) {
        insertIndex = i + 1; // Insert after the element before the dropzone
        break;
      }
    }
    
    siblingElements.splice(insertIndex, 0, dragged);
    const dropzoneParent = dropzone.parentElement!;
    dropzoneParent.innerHTML = ''; // Clear dropzone
    siblingElements.forEach(sibling => dropzoneParent.appendChild(sibling));
    
    return dropzoneParent;
  }
}

export function draggablePlaceholder(skeleton?:string|Element, animationType?:string){
  if(!skeleton){
    skeleton = document.createElement('tr');
    const td = document.createElement('td');
    const div = document.createElement('div');
    skeleton.className="draggable-skeleton";
    td.colSpan = 12;
    div.className = "rotating-border";
    td.appendChild(div)
    skeleton.appendChild(td);
    if(animationType){
      setAnimation(skeleton, animationType)
    }
    return skeleton;
  }
  if(typeof skeleton === "string"){
    return textHtmlToNode(skeleton);
  }
}

function setAnimation(element:Element, animationType?:string){
  let fromInToOut = true;
  const type = animationType??"slide";
  if("top" === draggingSlip()){
    fromInToOut = false;
  }else if("bottom" === draggingSlip()){
    fromInToOut = true;
  }
  animeIn({element:element as HTMLElement,animation:{type,position:"top",clearAfterApplying:true},display:null,fromInToOut});
}

export function draggingSlip(): string
{
  if(currentY < startY){
    return "top";
  }else if(currentY > startY){
    return "bottom";
  }
  return "";
}

function getDragAfterElement(container:HTMLElement, y:number) {
  const draggableElements = Array.from(container.querySelectorAll('.draggable:not(.dragging)'));

  let closestElement = null;
  let minOffset = Number.POSITIVE_INFINITY;
 
  
  for (const child of draggableElements) {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > -box.height / 2 && offset < minOffset) {
      minOffset = offset;
      closestElement = child;
    }
  }
  return closestElement;
}