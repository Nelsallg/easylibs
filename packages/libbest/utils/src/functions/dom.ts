/**
 * retourne un élément du dom
 */
export function $$(element:Element|HTMLCollection|string){
    if (element instanceof HTMLElement || element instanceof HTMLCollection) {
        return element;
    }else if(typeof element === 'string') {
        const collection = document.querySelectorAll(`${element}`);
        const el = document.querySelector(`${element}`);
        if (collection !== null && collection.length>1) {
              return collection;
        }
        if(el !== null){
            return el; 
        }
    }else {throw new Error("Type of element is not supported");}
}
