"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDataTransformer = void 0;
var FormDataTransformer = /** @class */ (function () {
    function FormDataTransformer(data) {
        this._data = data;
    }
    FormDataTransformer.prototype.transform = function () {
        var formData = new FormData();
        if (typeof this._data === "object") {
            var data = this._data;
            try {
                for (var key in this._data) {
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
    };
    FormDataTransformer.prototype.reverse = function () {
        var elementObject = {};
        if (this._data instanceof FormData) {
            try {
                var tempObject_1 = {};
                this._data.forEach(function (value, key) {
                    tempObject_1[key] = value;
                });
                elementObject = __assign({}, tempObject_1);
            }
            catch (error) {
                console.error("Erreur détectée: " + error);
            }
        }
        return elementObject;
    };
    FormDataTransformer.prototype.option = function (option) {
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
    };
    FormDataTransformer.prototype.auto = function () {
        if (this._data instanceof FormData) {
            return this.reverse();
        }
        else {
            return this.transform();
        }
    };
    return FormDataTransformer;
}());
exports.FormDataTransformer = FormDataTransformer;
//# sourceMappingURL=formdata-transformer.js.map