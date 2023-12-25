import {$$} from './dom.d'

export function checkbox(parentElement: string){
    const content = $$(parentElement);
    if (content) {
        if(content instanceof NodeList){
            content.forEach(el =>{ init(el as HTMLElement); })
        }else{
            init(content as HTMLElement);
        }
    }
}

function init(content:HTMLElement){
    const parentCheckbox = content.querySelector('.parent-checkbox') as HTMLInputElement;
    const childrenCheckboxes = content.querySelectorAll('.child-checkbox') as NodeListOf<HTMLInputElement>;
    let parentChecked = parentCheckbox.checked;

    function toggleChildrenCheckboxes(checked:boolean) {
        childrenCheckboxes.forEach((checkbox) => {
            checkbox.checked = checked;
        });
    }

    parentCheckbox.addEventListener('click', (e) => {
        parentChecked = parentCheckbox.checked;
        toggleChildrenCheckboxes(parentChecked);
    });

    childrenCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            if (!checkbox.checked && parentChecked) {
                parentCheckbox.checked = false;
                parentChecked = false;
            } else if (checkbox.checked && !parentChecked) {
                const allChildrenChecked = Array.from(childrenCheckboxes).every((c) => c.checked);
                if (allChildrenChecked) {
                    parentCheckbox.checked = true;
                    parentChecked = true;
                }
            }
        });
    });
}