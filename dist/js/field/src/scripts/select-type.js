define(["require", "exports", "../../../utils/src/dom"], function (require, exports, dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addIconToSelect = exports.autoResizeSelect = void 0;
    /**
     * Cette fonction redimensionne automatiquement un élément "select"
     * en fonction de la longueur du texte sélectionné
     * @param select
     */
    function autoResizeSelect(select) {
        let field = (0, dom_1.$$)(select);
        if (field instanceof HTMLSelectElement) {
            field.addEventListener('change', (event) => {
                let tempSelect = document.createElement('select'), tempOption = document.createElement('option');
                if (null !== event.target && event.target instanceof HTMLSelectElement) {
                    tempOption.textContent = event.target.options[event.target.selectedIndex].text;
                    tempSelect.style.cssText += `
                    visibility: hidden;
                    position: fixed;
                    `;
                    tempSelect.appendChild(tempOption);
                    event.target.after(tempSelect);
                    const tempSelectWidth = tempSelect.getBoundingClientRect().width;
                    console.log({ tempSelect });
                    event.target.style.width = `${tempSelectWidth}px`;
                    tempSelect.remove();
                }
            });
            field.dispatchEvent(new Event('change'));
        }
        else {
            console.error("Le paramètre n'est pas un élément Select");
        }
        ;
    }
    exports.autoResizeSelect = autoResizeSelect;
    /**
     *
     * gestion du select avec les icons
     * @param {string|HTMLSelectElement} select
     */
    function addIconToSelect(select) {
        let input = (0, dom_1.$$)(select);
        if (input instanceof HTMLSelectElement) {
            input.addEventListener('change', function () {
                if (null !== input && input instanceof HTMLSelectElement) {
                    let optionValue = this.options[input.selectedIndex].value;
                    let icon = document.body.querySelector(`[data-option="${optionValue}"]`);
                    if (icon) {
                        let parent = icon.parentNode;
                        let icons = parent.children;
                        for (let i = 0; i < icons.length; i++) {
                            icons[i].setAttribute('style', 'display:none;');
                        }
                        icon.setAttribute('style', 'display:flex;');
                    }
                }
            });
        }
        else {
            console.log("le parametre est invalide");
        }
    }
    exports.addIconToSelect = addIconToSelect;
});
// function optionsValueManag(select){
//     let optionContent = select.options[select.selectedIndex].childNodes[0].textContent;
//     let new_content = optionContent.split('#')[0];
//     return select.options[select.selectedIndex].innerHtml = new_content;
// }
//# sourceMappingURL=select-type.js.map