"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataTransformer = void 0;
class FormDataTransformer {
    constructor(data) {
        this._data = data;
    }
    /**
     * Transforme les données en un objet FormData.
     * @returns L'objet FormData résultant.
     */
    transform() {
        const formData = new FormData();
        if (typeof this._data === "object") {
            let data = this._data;
            try {
                for (const key in this._data) {
                    if (this._data.hasOwnProperty(key)) {
                        formData.append(key, data[key]);
                    }
                }
            }
            catch (error) {
                console.error("Erreur détectée: " + error);
            }
        }
        return formData;
    }
    /**
     * Revertit un objet FormData en objet JavaScript.
     * @returns L'objet JavaScript résultant.
     */
    reverse() {
        let elementObject = {};
        if (this._data instanceof FormData) {
            try {
                const tempObject = {};
                this._data.forEach((value, key) => {
                    tempObject[key] = value;
                });
                elementObject = Object.assign({}, tempObject);
            }
            catch (error) {
                console.error("Erreur détectée: " + error);
            }
        }
        return elementObject;
    }
    /**
     * Option de transformation spécifique.
     * @param option - L'option de transformation ('onlyobject', 'onlyformdata', 'auto').
     * @returns L'objet ou le FormData résultant en fonction de l'option spécifiée.
     */
    option(option) {
        if (option === "onlyobject") {
            if (this._data instanceof FormData) {
                return this.reverse();
            }
            return this._data;
        }
        if (option === "onlyformdata") {
            if (this._data instanceof FormData) {
                return this._data;
            }
            return this.transform();
        }
        if (option === "auto") {
            return this.auto();
        }
    }
    auto() {
        if (this._data instanceof FormData) {
            return this.reverse();
        }
        else {
            return this.transform();
        }
    }
}
exports.FormDataTransformer = FormDataTransformer;
