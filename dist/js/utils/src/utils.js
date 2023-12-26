define(["require", "exports", "../customs/spin-loaders", "./process-node", "../../transformer/src", "./dom"], function (require, exports, spin_loaders_1, process_node_1, src_1, dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.autoUploadFile = exports.debounce = exports.formatHTMLAttributes = exports.findHTMLElementBy = exports.escape = exports.findComputedStyle = exports.findChar = exports.findObjectDataByKeyName = exports.hasKeyWithNameSubstring = exports.setAsteriskToRequiredField = exports.tripleDotSpinner = exports.desactivatorElement = exports.changeInputTextTypeToNumberType = exports.buttonLoader = exports.shortenedText = void 0;
    function shortenedText(text, maxLength = 14) {
        text = typeof text === "string" ? text.trim() : "";
        if (text.length > maxLength) {
            return `${text.substring(0, maxLength)}...`;
        }
        return text;
    }
    exports.shortenedText = shortenedText;
    function buttonLoader(attr, loaderHTML) {
        let loader = "";
        if (!loaderHTML) {
            loader =
                '<div class="loader_container"><div class="triple-dot-loader"></div></div>';
        }
        (0, process_node_1.processNodes)((0, dom_1.$$)(attr), function (button) {
            button.addEventListener("click", function () {
                const button_content = escape(button.innerHTML);
                button.innerHTML = loader;
                button.setAttribute("read-only", "true");
                const loader_container = button.querySelector(".loader_container");
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
    exports.buttonLoader = buttonLoader;
    function changeInputTextTypeToNumberType(attr, limit, priceType = false, decimal) {
        (0, process_node_1.processNodes)((0, dom_1.$$)(attr), function (element) {
            let input = element;
            if (input) {
                input.addEventListener("input", function () {
                    const regExp = priceType ? /^[0-9]+([.,][0-9]+)?$/ : /[^\d]/g;
                    if (decimal) {
                        const getValue = input.value.replace(regExp, "");
                        input.value = `${parseFloat(getValue).toFixed(decimal)}`;
                    }
                    else {
                        input.value = input.value.replace(regExp, "");
                    }
                    if (limit && parseInt(input.value) > limit) {
                        input.value = `${limit}`;
                    }
                });
            }
        });
    }
    exports.changeInputTextTypeToNumberType = changeInputTextTypeToNumberType;
    /**
     * Désactive un élément le temps d'une requete asynchrone.
     * @param tag Le nom du tag html qui sera utiliser pour créer
     * la couche qui couvrira l'élémént à désactiver.
     * @param deactivatable L'élément à désactiver
     * @param trigger Le déclancheur de la désactivation
     */
    function desactivatorElement(tag = "td", deactivatable, trigger, backgroundColor) {
        const buttons = document.querySelectorAll("[desactivator],[self-deactivatable]");
        try {
            if (!trigger && !buttons) {
                throw new Error("Aucun bouton avec l'attribut <desactivator> n'est détecté, vous pouvez le passer manuellement");
            }
            (0, process_node_1.processNodes)(buttons, (button) => {
                button.addEventListener("click", function () {
                    const self = button.hasAttribute("self-deactivatable");
                    let item = self
                        ? button
                        : button.closest("[deactivatable]");
                    if (!deactivatable && !item) {
                        throw new Error("Aucun élément à désactiver contenant l'attribut <deactivatable> n'est détecté, vous pouvez le passer manuellement");
                    }
                    if (item) {
                        item.style.position = "relative";
                        item.insertBefore((0, spin_loaders_1.forbiddener)(tag, backgroundColor), item.firstChild);
                        if (item instanceof HTMLButtonElement) {
                            item.setAttribute("disabled", "true");
                        }
                    }
                });
            });
        }
        catch (error) {
            console.error("Une erreur s'est produit: ", error);
        }
    }
    exports.desactivatorElement = desactivatorElement;
    function tripleDotSpinner(button, addClickEvent = false, readonly = false) {
        const _button = button instanceof HTMLElement
            ? button
            : document.querySelector(button);
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
    exports.tripleDotSpinner = tripleDotSpinner;
    function setAsteriskToRequiredField() {
        const asterisk = `<svg class="required-svg">
    <use xlink:href="/svg/form.svg#asterisk"></use>
  </svg>`;
        const labels = document.querySelectorAll("label[required-field]");
        if (labels) {
            (0, process_node_1.processNodes)(labels, (node) => {
                const rang = document.createRange();
                const fragment = rang.createContextualFragment(asterisk);
                node.appendChild(fragment);
            });
        }
    }
    exports.setAsteriskToRequiredField = setAsteriskToRequiredField;
    function hasKeyWithNameSubstring(object, substring, getKey) {
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
    exports.hasKeyWithNameSubstring = hasKeyWithNameSubstring;
    function findObjectDataByKeyName(object, keyOrShorKey, key) {
        Object.keys(object).forEach((key) => {
            if (key.includes(keyOrShorKey)) {
                return object[key];
            }
        });
        return false;
    }
    exports.findObjectDataByKeyName = findObjectDataByKeyName;
    function findChar(string, limit, returnBool = false) {
        for (let i = 0; i <= limit; i++) {
            const index = string.indexOf(i.toString());
            if (index !== -1) {
                return returnBool ? true : i.toString();
            }
        }
        return returnBool ? false : null;
    }
    exports.findChar = findChar;
    function findComputedStyle(element, property) {
        const styles = window.getComputedStyle(element);
        const propertiesObject = {};
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
        }
        catch (error) {
            console.error(error);
        }
    }
    exports.findComputedStyle = findComputedStyle;
    function escape(str) {
        if (!str) {
            return "";
        }
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }
    exports.escape = escape;
    function findHTMLElementBy(referent, target) {
        let currentElement = referent;
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
    exports.findHTMLElementBy = findHTMLElementBy;
    function formatHTMLAttributes(attributes) {
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
    exports.formatHTMLAttributes = formatHTMLAttributes;
    function debounce(func, waiting) {
        let timeout;
        return function () {
            const contexte = this;
            const args = arguments;
            console.log({ contexte, args });
            const ulterior = function () {
                timeout = null;
                func.apply(contexte, args);
            };
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(ulterior, waiting);
        };
    }
    exports.debounce = debounce;
    function autoUploadFile() {
        const transformer = new src_1.FileTransformer();
        const images = document.querySelectorAll("input[type='file']");
        (0, process_node_1.processNodes)(images, (image) => {
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
                    console.log(image.files);
                    image.removeAttribute('data-value');
                    const changeEvent = new Event('change');
                    image.dispatchEvent(changeEvent);
                }
            }
        });
    }
    exports.autoUploadFile = autoUploadFile;
});
//# sourceMappingURL=utils.js.map