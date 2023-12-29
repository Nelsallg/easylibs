import Utils from "@easylibs/utils";

export default class SelectManager {
  /**
   * Cette méthode redimensionne automatiquement un élément "select"
   * en fonction de la longueur du texte sélectionné
   * @param select
   */
  static autoResize(select: string | HTMLSelectElement): void {
    let field = Utils.$$(select);
    if (field instanceof HTMLSelectElement) {
      field.addEventListener('change', (event) => {
        let tempSelect = document.createElement('select'),
          tempOption = document.createElement('option');

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
    } else {
      console.error("Le paramètre n'est pas un élément Select");
    }
  }

  /**
   * Gestion du select avec les icônes
   * @param {string | HTMLSelectElement} select
   */
  static addIconToOptions(select: string | HTMLSelectElement): void {
    let input = Utils.$$(select);
    if (input instanceof HTMLSelectElement) {
      input.addEventListener('change', function () {
        if (null !== input && input instanceof HTMLSelectElement) {
          let optionValue = this.options[input.selectedIndex].value;
          let icon = document.body.querySelector(`[data-option="${optionValue}"]`);
          if (icon) {
            let parent = icon.parentNode as ParentNode;
            let icons = parent.children;
            for (let i = 0; i < icons.length; i++) {
              icons[i].setAttribute('style', 'display:none;');
            }
            icon.setAttribute('style', 'display:flex;');
          }
        }
      });
    } else {
      console.log("Le paramètre est invalide");
    }
  }
}

