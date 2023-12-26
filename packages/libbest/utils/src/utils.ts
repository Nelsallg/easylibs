import { forbiddener } from "../customs/spin-loaders";
import { processNodes } from "./process-node";
import { FileTransformer } from "../../transformer/src";
import { $$ } from "./dom";

export function shortenedText(text: string, maxLength: number = 14): string {
  text = typeof text === "string" ? text.trim() : "";
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
}
export function buttonLoader(attr: string, loaderHTML?: string) {
  let loader = "";
  if (!loaderHTML) {
    loader =
      '<div class="loader_container"><div class="triple-dot-loader"></div></div>';
  }
  processNodes($$(attr), function (button: HTMLElement) {
    button.addEventListener("click", function () {
      const button_content = escape(button.innerHTML);
      button.innerHTML = loader;
      button.setAttribute("read-only", "true");
      const loader_container = button.querySelector(
        ".loader_container"
      ) as HTMLElement;
      loader_container.style.height = "100%";
      loader_container.style.width = "100%";
      loader_container.style.display = "flex";
      loader_container.style.justifyContent = "center";
      loader_container.style.alignItems = "center";
      document.addEventListener("turbo:loaded", function () {
        if (button) {
          button.innerHTML = button_content;
          button.style.opacity = "1";
          button.removeAttribute("read-only");
        }
      });
    });
  });
}
export function changeInputTextTypeToNumberType(
  attr: string,
  limit?: number | null,
  priceType: boolean = false,
  decimal?: number
) {
  processNodes($$(attr), function (element) {
    let input = element as HTMLInputElement;
    if (input) {
      input.addEventListener("input", function () {
        const regExp = priceType ? /^[0-9]+([.,][0-9]+)?$/ : /[^\d]/g;
        if (decimal) {
          const getValue = input.value.replace(regExp, "");
          input.value = `${parseFloat(getValue).toFixed(decimal)}`;
        } else {
          input.value = input.value.replace(regExp, "");
        }
        if (limit && parseInt(input.value) > limit) {
          input.value = `${limit}`;
        }
      });
    }
  });
}
/**
 * Désactive un élément le temps d'une requete asynchrone.
 * @param tag Le nom du tag html qui sera utiliser pour créer
 * la couche qui couvrira l'élémént à désactiver.
 * @param deactivatable L'élément à désactiver
 * @param trigger Le déclancheur de la désactivation
 */
export function desactivatorElement(
  tag = "td",
  deactivatable?: HTMLElement,
  trigger?: HTMLElement,
  backgroundColor?: string
) {
  const buttons = document.querySelectorAll(
    "[desactivator],[self-deactivatable]"
  );
  try {
    if (!trigger && !buttons) {
      throw new Error(
        "Aucun bouton avec l'attribut <desactivator> n'est détecté, vous pouvez le passer manuellement"
      );
    }
    processNodes(buttons, (button: HTMLElement) => {
      button.addEventListener("click", function () {
        const self = button.hasAttribute("self-deactivatable");
        let item = self
          ? button
          : (button.closest("[deactivatable]") as HTMLElement);

        if (!deactivatable && !item) {
          throw new Error(
            "Aucun élément à désactiver contenant l'attribut <deactivatable> n'est détecté, vous pouvez le passer manuellement"
          );
        }
        if (item) {
          item.style.position = "relative";
          item.insertBefore(forbiddener(tag, backgroundColor), item.firstChild);
          if (item instanceof HTMLButtonElement) {
            item.setAttribute("disabled", "true");
          }
        }
      });
    });
  } catch (error) {
    console.error("Une erreur s'est produit: ", error);
  }
}

export function tripleDotSpinner(
  button: string | HTMLElement,
  addClickEvent: boolean = false,
  readonly: boolean = false
) {
  const _button =
    button instanceof HTMLElement
      ? button
      : (document.querySelector(button) as HTMLButtonElement);
  const isReadonly = () => {
    if (readonly) {
      _button.style.opacity = ".5";
      _button.setAttribute("read-only", "");
      _button.style.cursor = "not-allowed";
    }
  };
  if (_button) {
    if (true === addClickEvent) {
      return _button.addEventListener("click", function () {
        isReadonly();
        _button.classList.add("disabled");
        _button.innerHTML = `<div class="triple-dot-loader"></div>`;
      });
    }
    isReadonly();
    _button.classList.add("disabled");
    _button.innerHTML = `<div class="triple-dot-loader"></div>`;
  }
}

export function setAsteriskToRequiredField() {
  const asterisk = `<svg class="required-svg">
    <use xlink:href="/svg/form.svg#asterisk"></use>
  </svg>`;
  const labels = document.querySelectorAll("label[required-field]");
  if (labels) {
    processNodes(labels, (node: HTMLLabelElement) => {
      const rang = document.createRange();
      const fragment = rang.createContextualFragment(asterisk);
      node.appendChild(fragment);
    });
  }
}

export function hasKeyWithNameSubstring(
  object: any,
  substring: string,
  getKey?: boolean
) {
  for (let key in object) {
    if (key.includes(substring)) {
      if (undefined === getKey || false === getKey) {
        return object[key];
      }
      if (true === getKey) {
        return key;
      }
    }
  }
  return false;
}

export function findObjectDataByKeyName(
  object: any,
  keyOrShorKey: string,
  key?: boolean
) {
  Object.keys(object).forEach((key) => {
    if (key.includes(keyOrShorKey)) {
      return object[key];
    }
  });

  return false;
}

export function findChar(string: string, limit: number, returnBool:boolean = false) {
  for (let i = 0; i <= limit; i++) {
    const index = string.indexOf(i.toString());
    if (index !== -1) {
      return returnBool ? true : i.toString();
    }
  }
  return returnBool ? false : null;
}

export function findComputedStyle(
  element: HTMLElement,
  property: string | Array<string>
) {
  const styles = window.getComputedStyle(element);
  const propertiesObject: any = {};
  try {
    if (!element) {
      throw new Error("Element not found");
    }
    if (!property) {
      throw new Error("Property is required");
    }
    if (Array.isArray(property) && property.length > 0) {
      property.forEach((props) => {
        propertiesObject[`${props}`] = styles.getPropertyValue(`${props}`);
      });
      return propertiesObject;
    }
    if (typeof property === "string") {
      return styles.getPropertyValue(`${property}`);
    }
  } catch (error) {
    console.error(error);
  }
}
export function escape(str?: string): string {
  if (!str) {
    return "";
  }
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
export function findHTMLElementBy(
  referent: HTMLElement,
  target: string
): Element | null {
  let currentElement = referent as Element | null;
  if (currentElement) {
    while ((currentElement = currentElement.previousElementSibling)) {
      const charCounterSpan = currentElement.querySelector(target);
      if (charCounterSpan) {
        return charCounterSpan;
      }
    }
  }
  return null;
}
export function formatHTMLAttributes(attributes: any) {
  let attrs = "";
  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      if (key) {
        attrs += `${key}='${value}'`;
      }
    }
  }
  return attrs;
}
export function debounce(func:Function, waiting:number) {
  let timeout: string | number | NodeJS.Timeout | null;
  return function (this:HTMLElement) {
    const contexte = this;
    const args = arguments;
    console.log({contexte,args})
    const ulterior = function () {
      timeout = null;
      func.apply(contexte, args);
    };
    if(timeout)
    {clearTimeout(timeout);}
    timeout = setTimeout(ulterior, waiting);
  };
}
export function autoUploadFile() {
  const transformer = new FileTransformer();
  const images = document.querySelectorAll("input[type='file']") as NodeListOf<HTMLInputElement>;
  processNodes(images, (image: HTMLInputElement) => {
    const value = image.dataset.value;
    if (value && value !== "") {
      const file = transformer.fromBase64String(value, null, null, false);
      if (file) {
        const newFileList = new DataTransfer();
        newFileList.items.add(file);
        Object.defineProperty(image, 'files', {
          value: newFileList.files,
          writable: false,
        });
        console.log(image.files)
        image.removeAttribute('data-value');
        const changeEvent = new Event('change');
        image.dispatchEvent(changeEvent);
      }
    }
  });
}
