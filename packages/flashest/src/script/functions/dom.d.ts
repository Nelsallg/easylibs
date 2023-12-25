/**
 * retourne un élément du dom
 */
export function $$(element:HTMLElement|HTMLCollection|string){
    if (element instanceof HTMLElement || element instanceof HTMLCollection) {
        return element;
    }else if(typeof element === 'string') {
        const collection = document.querySelectorAll(`${element}`);
        const el = document.querySelector(`${element}`);
        if (el === null && collection === null){
            return null;
        }
        else{
            if(collection.length>1){
                return collection;
            }
            return el; 
        }
    }else {throw new Error("Type of element is not supported");}
}