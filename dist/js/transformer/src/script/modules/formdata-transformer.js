define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FormDataTransformer = void 0;
    class FormDataTransformer {
        constructor(data) {
            this._data = data;
        }
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
});
//# sourceMappingURL=formdata-transformer.js.map