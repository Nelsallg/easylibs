declare type RegexType = 'email' | 'phone-number' | 'number' | 'strong-password' | 'url' | 'default-text' | 'fr-text' | 'en-text' | 'tr-text';
export default class Utils{
    /**
     * Crée un élément audio avec la source audio spécifiée par le chemin audioPath.
     * @param audioPath Le chemin de la source audio.
     * @param classname La classe CSS à ajouter à l'élément audio (optionnel).
     * @returns L'élément audio créé.
     */
    public static setAudio(audioPath:string, classname=null) {
        const audio = document.createElement('audio');
        if(classname != null){audio.classList.add(classname);}
        const source = document.createElement('source');
        source.src = this.resolvePath(audioPath);
        source.type = "audio/mpeg";
        audio.appendChild(source);
        return audio;
    }
    public static textToHTMLElement(textHtml:string, targetName="div", children:boolean = false):Element|HTMLCollection|null
    {
        const target = document.createElement(`${targetName}`);
        target.innerHTML = textHtml;
        if(true === children){return target.children;}
        return target.firstElementChild
    }
    /**
     * retourne un élément du dom
     */
    public static $$(element:any){
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
    /**
     * Cette fonction permet de convertir un objet NodeList en un tableau d'éléments HTML (HTMLElement)
     * et d'exécuter une fonction de rappel sur chaque élément du tableau.
     * @param nodeList Un objet NodeList ou un élément HTML. 
     * Si c'est un NodeList, il sera converti en tableau d'éléments HTML.
     * @param callback Une fonction de rappel à exécuter sur chaque élément du tableau.
     * @returns 
     */
    public static processNodes(nodeList: any, callback = (node: any, index?:number) => {}){
        if(nodeList instanceof NodeList || Array.isArray(nodeList)) {
        return Array.from(nodeList).forEach((node,i) => {
            callback(node,i);
        });
        }
        if(null !== nodeList && undefined !== nodeList)
        {return callback(nodeList);}
    }
    

    /**
     * Méthode qui renvoie une expression régulière en fonction du type demandé.
     * @param type Le type d'expression régulière demandé.
     * @returns L'expression régulière correspondante.
     */
    public static getRegexp(type: RegexType): RegExp {
        switch (type) {
            case 'email':
              return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
            case 'phone-number':
              return new RegExp(/^(0|\\+[1-9]{1,3})[0-9 ]+$/);
            case 'number':
              return new RegExp(/^[0-9]+$/);
            case 'strong-password':
              return new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
            case 'url':
              // return new RegExp(/^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/);
              return new RegExp('^(https?:\\/\\/)?'+ // protocole
                        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domaine
                        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port et chemin
                        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            case 'default-text':
              return new RegExp(/^[a-zA-Z -'áàâäãåçéèêëğíìîïıñóòôöõúùûüşýÿæœÁÀÂÄÃÅÇÉÈÊËĞÍÌÎÏIÑÓÒÔÖÕÚÙÛÜŞÝŸÆŒ]+$/);
            case 'fr-text':
              return new RegExp(/^[A-Za-z' - àâçéèêëûæœÀÂÉÈÊËÆŒ]+$/);
            case 'en-text':
              return  new RegExp(/^[a-zA-Z '-]{1,40}$/);
            case 'tr-text':
              return new RegExp(/^[A-Za-z çğıöüşæœÇĞIÖÜŞ]+$/);
            default:
              throw new Error('Type d\'expression régulière non pris en charge.');
        }
    }
    /**
     * Résout le chemin d'une ressource en fonction de l'environnement d'exécution.
     * @param path Le chemin de la ressource.
     * @returns Le chemin résolu de la ressource.
     */
    public static resolvePath(path:string){
        const PROJECT_NAME = window.location.pathname.split("/")[1];
        const ORIGIN = window.location.origin;
        const PORT = window.location.port;
        const HOST = window.location.host;
        let _stylesheetsoutdir_;

        if (HOST == "localhost") {
            return _stylesheetsoutdir_ = ORIGIN + `/${PROJECT_NAME}/${path}`;
        } else if (HOST !== "localhost" && PORT !== "") {
            return _stylesheetsoutdir_ = ORIGIN + `/${path}`;
        } else {
            return _stylesheetsoutdir_ = ORIGIN + `/${path}`;
        }
    }
    /**
     * Crée une couche superfielle au dessus d'un élément html afin d'empecher tout évènement. 
     * @param tag Le nom de la balise HTML à utiliser comme couche (par défaut : 'td', idéal pour les tableau html).
     * @param backgroundColor La couleur d'arrière-plan de la zone interdite (par défaut : '#FFFFFF').
     * @returns Un élément HTML représentant une zone interdite.
     */
    private static forbiddener(tag:string='td', backgroundColor?:string){
        let forbiddenTag = document.createElement(tag)
        forbiddenTag.setAttribute('class','forbidden')
        const style = {
            position:'absolute',
            width: '100%',
            height:'100%',
            opacity: '.7',
            zIndex: '10',
            backgroundColor: backgroundColor ? backgroundColor : '#FFFFFF',
        }
        Object.assign(forbiddenTag.style, style)
        return forbiddenTag as HTMLElement;
    }
    /**
     * Réduit une chaîne de texte.
     * @param text La chaîne de texte à réduire.
     * @param maxLength La longueur maximale de la chaîne résultante (par défaut : 14).
     * @returns La chaîne de texte réduite.
     */
    public static reduceText(text: string, maxLength: number = 14): string {
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
    public static changeInputTextTypeToNumberType(attr: string,limit?: number | null,priceType: boolean = false,decimal?: number) {
        this.processNodes(this.$$(attr), function (element) {
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
     * The function is used to disable specific elements (by default td tags) inside a table when a certain button is clicked.
     * It accepts several parameters: the tag to be disabled, the target element to be disabled, the trigger element (button),
     * and the background color for the forbidden tag.
     * 
     * @param tag - The tag of the element to be disabled (default: "td").
     * @param target - The target element to be disabled (default: undefined).
     * @param trigger - The trigger element (button) to activate the function (default: undefined).
     * @param backgroundColor - The background color for the forbidden tag (default: undefined).
     */
    public static disablor(tag = "td",target?: HTMLElement,trigger?: HTMLElement,backgroundColor?: string) {
        const buttons = document.querySelectorAll(
        "[disablor],[self-disablor]"
        );
        try {
        if (!trigger && !buttons) {
            throw new Error(
            "Aucun bouton avec l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement"
            );
        }
        this.processNodes(buttons, (button: HTMLElement) => {
            button.addEventListener("click", () => {
            const self = button.hasAttribute("self-disablor");
            let item = self ? button : (button.closest("[disablor]") as HTMLElement);
    
            if (!target && !item) {
                throw new Error(
                "Aucun élément à désactiver contenant l'attribut <disablor> n'est détecté, vous pouvez le passer manuellement"
                );
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
        } catch (error) {
            console.error("Une erreur s'est produit: ", error);
        }
    }
    /**
     * Adds an asterisk indicator to labels associated with required form fields.
     * The asterisk is inserted as an SVG element, and labels are selected based on the presence
     * of the 'required-field' attribute. The function utilizes the processNodes method
     * to iterate through the matched labels and append the asterisk.
     */
    public static setAsteriskToRequiredField() {
        const asterisk = `<svg class="required-svg">
        <use xlink:href="../asset/icon.svg#asterisk"></use>
        </svg>`;
        const labels = document.querySelectorAll("label[required-field]");
        if (labels) {
            this.processNodes(labels, (node: HTMLLabelElement) => {
                const rang = document.createRange();
                const fragment = rang.createContextualFragment(asterisk);
                node.appendChild(fragment);
            });
        }
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
    public static hasKeyWithNameSubstring(object: any,substring: string,getKey?: boolean) {
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
    public static findObjectDataByKeyName(object: any,keyOrShorKey: string,key?: boolean) {
        Object.keys(object).forEach((key) => {
          if (key.includes(keyOrShorKey)) {
            return object[key];
          }
        });
        return false;
    }

    public static findChar(string: string, limit: number, returnBool:boolean = false) {
        for (let i = 0; i <= limit; i++) {
          const index = string.indexOf(i.toString());
          if (index !== -1) {
            return returnBool ? true : i.toString();
          }
        }
        return returnBool ? false : null;
      }
      
    public static findComputedStyle(
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
    /**
     * A function to escape special characters in a string using the DOM API.
     * 
     * @param str - The input string to be escaped.
     * @returns - The escaped string with special characters replaced with their HTML entity equivalents.
     */
    public static escape(str?: string): string {
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
    public static findHTMLElementBy(referent: HTMLElement,target: string): Element | null {
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
    /**
     * This function takes an object containing HTML attributes and returns a string representing the attributes.
     * If no attributes are provided, it returns an empty string.
     * @param attributes - An object containing HTML attributes.
     * @returns A string representing the attributes.
     */
    public static formatHTMLAttributes(attributes: any) {
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
      
  
}