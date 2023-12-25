import { $$ } from "./dom.d";
/**
 * auto-redimention de l'élément select en fonction de la taille de l'option
 * @param {string|HTMLSelectElement} select
 */
export function selectAutoResize(select:string|HTMLSelectElement)
{   
    let field = $$(select);
    if(field instanceof HTMLSelectElement){
        field.addEventListener('change', (event) => {
            let tempSelect = document.createElement('select'),
                tempOption = document.createElement('option');
            
            if(null !== event.target && event.target instanceof HTMLSelectElement){
                tempOption.textContent = event.target.options[event.target.selectedIndex].text;
                tempSelect.style.cssText += `
                    visibility: hidden;
                    position: fixed;
                    `;
                tempSelect.appendChild(tempOption);
                event.target.after(tempSelect);
                
                const tempSelectWidth = tempSelect.getBoundingClientRect().width;
                event.target.style.width = `${tempSelectWidth}px`;
                tempSelect.remove();
            }
        });
        field.dispatchEvent(new Event('change'));
    }else{
        console.error("Le paramètre n'est pas un élément Select") 
    };
}


/**
 * 
 * gestion du select avec les icons
 * @param {string|HTMLSelectElement} select 
 */
export function selectAddIcon(select: string | HTMLSelectElement){
    let input = $$(select);
    if(input instanceof HTMLSelectElement){
        input.addEventListener('change', function () {
            if(null !== input && input instanceof HTMLSelectElement){
                let optionValue = this.options[input.selectedIndex].value;
                let icon = document.body.querySelector(`[data-option="${optionValue}"]`);
                if(icon){
                    let parent = icon.parentNode as ParentNode;
                    let icons = parent.children;
                    for(let i = 0; i < icons.length; i++){
                        icons[i].setAttribute('style','display:none;');
                    }
                    icon.setAttribute('style','display:flex;');
                }
            }
        })
    }else{console.log("le parametre est invalide")}
    
}


// function optionsValueManag(select){
//     let optionContent = select.options[select.selectedIndex].childNodes[0].textContent;
//     let new_content = optionContent.split('#')[0];
//     return select.options[select.selectedIndex].innerHtml = new_content;
// }