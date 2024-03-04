"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utils {
    /**
     * Crée un élément audio avec la source audio spécifiée par le chemin audioPath.
     * @param audioPath Le chemin de la source audio.
     * @param classname La classe CSS à ajouter à l'élément audio (optionnel).
     * @returns L'élément audio créé.
     */
    static setAudio(audioPath, classname = null) {
        const audio = document.createElement("audio");
        if (classname != null) {
            audio.classList.add(classname);
        }
        const source = document.createElement("source");
        source.src = audioPath;
        source.type = "audio/mpeg";
        audio.appendChild(source);
        return audio;
    }
    /**
     * Converts an HTML string into an HTML element or a collection of HTML elements.
     *
     * @param textHtml - The HTML string to convert.
     * @param targetName - The tag name of the target HTML element to create.
     * @param children - A boolean indicating whether to return all children of the target element.
     * @returns - Returns the first child of the target element if `children` is `false`, otherwise returns a collection of the element's children. Returns `null` if there are no children.
     *
     * This method creates a new HTML element of the type specified by `targetName`, sets its inner HTML to `textHtml`, and returns either the first child of this element or all its children as an HTMLCollection, depending on the value of `children`.
     * If the HTML content generates no children, the method returns `null`.
     */
    static textToHTMLElement(textHtml, targetName = "div", children = false) {
        const target = document.createElement(`${targetName}`);
        target.innerHTML = textHtml;
        if (true === children) {
            return target.children;
        }
        return target.firstElementChild;
    }
    /**
     * retourne un élément du dom
     */
    static $$(element) {
        if (typeof element !== "string") {
            return element;
        }
        else if (typeof element === "string") {
            const collection = document.querySelectorAll(`${element}`);
            const el = document.querySelector(`${element}`);
            if (collection !== null && collection.length > 1) {
                return collection;
            }
            if (el !== null) {
                return el;
            }
        }
    }
    /**
     * Cette fonction permet de convertir un objet NodeList en un tableau d'éléments HTML (HTMLElement)
     * et d'exécuter une fonction de rappel sur chaque élément du tableau.
     * @param nodeList Un objet NodeList ou un élément HTML.
     * Si c'est un NodeList, il sera converti en tableau d'éléments HTML.
     * @param callback Une fonction de rappel à exécuter sur chaque élément du tableau.
     * @returns
     */
    static processNodes(nodeList, callback = (node, index) => { }) {
        if (nodeList instanceof NodeList || Array.isArray(nodeList)) {
            return Array.from(nodeList).forEach((node, i) => {
                callback(node, i);
            });
        }
        if (null !== nodeList && undefined !== nodeList) {
            return callback(nodeList);
        }
    }
    /**
     * Méthode qui renvoie une expression régulière en fonction du type demandé.
     * @param type Le type d'expression régulière demandé.
     * @returns L'expression régulière correspondante.
     */
    static getRegexp(type) {
        switch (type) {
            case "email":
                return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
            case "phone-number":
                return new RegExp(/^(0|\+[1-9][0-9]{0,2}) ?[0-9]+$/);
            case "number":
                return new RegExp(/^[-+]?[0-9]*\.?[0-9]+$/);
            case "strong-password":
                return new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
            case "url-protocol":
                return new RegExp(/^(https?:\/\/)$/, "i");
            case "url-domain":
                return new RegExp(/^((([a-zA-Z0-9]{1,})[.-]?)+[a-zA-Z]{2,})$/, "i");
            case "url-ip":
                return new RegExp(/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, "i");
            case "url-port":
                return new RegExp(/^:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{0,3})$/, "i");
            case "url-path":
                return new RegExp(/^(\.\/)?[-a-zA-Z\d%_.~+\/]*$/, "i");
            case "url-query":
                return new RegExp(/^(\?[;&a-zA-Z\d%_.~+=-]*)$/, "i");
            case "url-fragment":
                return new RegExp(/^#[-a-zA-Z\d%_.~+/=?&;:!*'()]*$/, "i");
            case "default-text":
                return new RegExp(/^[a-zA-Z -'áàâäãåçéèêëğíìîïıñóòôöõúùûüşýÿæœÁÀÂÄÃÅÇÉÈÊËĞÍÌÎÏIÑÓÒÔÖÕÚÙÛÜŞÝŸÆŒ]+$/);
            case "fr-text":
                return new RegExp(/^[A-Za-z' - àâçéèêëûæœÀÂÉÈÊËÆŒ]+$/);
            case "en-text":
                return new RegExp(/^[a-zA-Z '-]{1,40}$/);
            case "tr-text":
                return new RegExp(/^[A-Za-z çğıöüşæœÇĞIÖÜŞ]+$/);
            default:
                throw new Error("Type d'expression régulière non pris en charge.");
        }
    }
    /**
     * Crée une couche superfielle au dessus d'un élément html afin d'empecher tout évènement.
     * @param tag Le nom de la balise HTML à utiliser comme couche (par défaut : 'td', idéal pour les tableau html).
     * @param backgroundColor La couleur d'arrière-plan de la zone interdite (par défaut : '#FFFFFF').
     * @returns Un élément HTML représentant une zone interdite.
     */
    static forbiddener(tag = "td", backgroundColor) {
        let forbiddenTag = document.createElement(tag);
        forbiddenTag.setAttribute("class", "forbidden");
        const style = {
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: ".7",
            zIndex: "10",
            backgroundColor: backgroundColor ? backgroundColor : "#FFFFFF",
        };
        Object.assign(forbiddenTag.style, style);
        return forbiddenTag;
    }
    /**
     * Réduit une chaîne de texte.
     * @param text La chaîne de texte à réduire.
     * @param maxLength La longueur maximale de la chaîne résultante (par défaut : 14).
     * @returns La chaîne de texte réduite.
     */
    static truncateChars(text, maxLength = 14) {
        text = typeof text === "string" ? text.trim() : "";
        if (text.length > maxLength) {
            return `${text.substring(0, maxLength)}...`;
        }
        return text;
    }
    /**
     * Changes the input text type to a number type and performs additional processing
     * based on the specified parameters.
     *
     * @param attr - The CSS selector for the input elements to be processed.
     * @param limit - (Optional) The maximum allowed value. If provided, input values exceeding this limit will be set to the limit.
     * @param priceType - (Optional) A boolean flag indicating whether the input represents a price. If true, the input is expected to be a number with an optional decimal part.
     * @param decimal - (Optional) The number of decimal places to round to. If provided, the input values will be rounded to the specified decimal places.
     */
    static changeInputTextTypeToNumberType(attr, limit, priceType = false, decimal) {
        this.processNodes(this.$$(attr), function (element) {
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
    /**
     * The function is used to disable specific elements (by default td tags) inside a table when a certain button is clicked.
     * It accepts several parameters: the tag to be disabled, the target element to be disabled, the trigger element (button),
     * and the background color for the forbidden tag.
     *
     * @param tag - The tag of the element to be disabled (default: "td").
     * @param target - The target element to be disabled (default: undefined).
     * @param trigger - The trigger element (button) to activate the function (default: undefined).
     * @param backgroundColor - The background color for the forbidden tag (default: undefined).
     */
    static disablor(tag = "td", target, trigger, backgroundColor) {
        const buttons = document.querySelectorAll("[disablor],[self-disablor]");
        try {
            if (!trigger && !buttons) {
                throw new Error("Aucun bouton avec l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
            }
            this.processNodes(buttons, (button) => {
                button.addEventListener("click", () => {
                    const self = button.hasAttribute("self-disablor");
                    let item = self
                        ? button
                        : button.closest("[disablor]");
                    if (!target && !item) {
                        throw new Error("Aucun élément à désactiver contenant l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement");
                    }
                    if (item) {
                        item.style.position = "relative";
                        item.insertBefore(this.forbiddener(tag, backgroundColor), item.firstChild);
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
    /**
     * Adds an asterisk indicator to labels associated with required form fields.
     * The asterisk is inserted as an SVG element, and labels are selected based on the presence
     * of the 'required-field' attribute. The function utilizes the processNodes method
     * to iterate through the matched labels and append the asterisk.
     */
    static setAsteriskToRequiredField() {
        const styleId = 'custom-asterisk-style';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            document.head.appendChild(style);
            style.sheet.insertRule(`
          label[required-field]::after {
            content: '*';
            color: #f89a9b;
            width: 10px;
            height: 10px;
          }
        `, 0);
        }
        const labels = document.querySelectorAll("label[required-field]");
        labels.forEach((label) => {
            label.style.display = "flex";
            label.style.alignItems = "center";
        });
    }
    /**
     * This method checks if the object contains a key with the given substring.
     * @param object The object to be searched.
     * @param substring The substring to search for.
     * @param getKey An optional parameter to determine the type of return value.
     *               If true, the method will return the key as a string.
     *               If false or not provided, the method will return the value corresponding to the key.
     * @returns The value or key of the first matching property if found, otherwise false.
     */
    static hasKeyWithNameSubstring(object, substring, getKey) {
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
    /**
     * This method searches for an object's property by its key or short key.
     * @param object The object to be searched.
     * @param keyOrShortKey The key or short key to search for.
     * @param key An optional parameter to determine the type of return value.
     *            If true, the function will return the key as a string.
     *            If false or not provided, the function will return the value corresponding to the key.
     * @returns The value or key of the first matching property if found, otherwise false.
     */
    static findObjectDataByKeyName(object, keyOrShorKey, key) {
        Object.keys(object).forEach((key) => {
            if (key.includes(keyOrShorKey)) {
                return object[key];
            }
        });
        return false;
    }
    /**
   * Finds the first occurrence of a character in the given string up to the specified limit.
   *
   * @param string - The string to search.
   * @param limit - The limit up to which to search for the character.
   * @param returnBool - Optional. If true, returns a boolean indicating whether the character was found. If false or not provided, returns the character found or null if not found.
   * @returns  Returns the character found, a boolean indicating whether the character was found (if `returnBool` is true), or null if the character was not found.
   */
    static findChar(string, limit, returnBool = false) {
        for (let i = 0; i <= limit; i++) {
            const index = string.indexOf(i.toString());
            if (index !== -1) {
                return returnBool ? true : i.toString();
            }
        }
        return returnBool ? false : null;
    }
    static findComputedStyle(element, property) {
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
    /**
     * A function to escape special characters in a string using the DOM API.
     *
     * @param str - The input string to be escaped.
     * @returns - The escaped string with special characters replaced with their HTML entity equivalents.
     */
    static escape(str) {
        if (!str) {
            return "";
        }
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }
    /**
     * This function takes an HTMLElement and a target string.
     * It returns the first Element with a matching target that is a sibling of the referent element or any of its previous siblings.
     * If no such element is found, it returns null.
     * @param referent - The starting point of the search.
     * @param target - The CSS selector used to find the desired element.
     * @returns The first Element with a matching target, or null if no such element is found.
     */
    static findHTMLElementBy(referent, target) {
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
    /**
     * This function takes an object containing HTML attributes and returns a string representing the attributes.
     * If no attributes are provided, it returns an empty string.
     * @param attributes - An object containing HTML attributes.
     * @returns A string representing the attributes.
     */
    static formatHTMLAttributes(attributes) {
        let attrs = "";
        if (attributes) {
            for (const [key, value] of Object.entries(attributes)) {
                if (key) {
                    attrs += `${key}='${value}'`;
                }
            }
        }
        return attrs.trim();
    }
    /**
     * Cette fonction redimensionne automatiquement un élément "select"
     * en fonction de la longueur du texte sélectionné
     * @param select
    */
    static autoResizeSelect(select) {
        let field = this.$$(select);
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
}
exports.default = Utils;
//# sourceMappingURL=utils.js.map