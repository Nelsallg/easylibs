"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorType = void 0;
class ColorType {
    constructor(colorPicker) {
        this.colorPicker = colorPicker;
    }
    fetchColors(url) {
        document.addEventListener("DOMContentLoaded", () => __awaiter(this, void 0, void 0, function* () {
            const colorPicker = this.colorPicker instanceof HTMLInputElement ? this.colorPicker : document.getElementById(this.colorPicker);
            const datalist = document.createElement('datalist');
            datalist.id = "colorOptions";
            try {
                const response = yield fetch(url);
                const data = yield response.json();
                if (response) {
                    const colors = data.colors;
                    colors.forEach((color) => {
                        const option = document.createElement("option");
                        option.value = color;
                        datalist.appendChild(option);
                    });
                }
            }
            catch (error) {
                console.error("Erreur lors du chargement des couleurs :", error);
            }
            colorPicker.addEventListener("input", function () {
                console.log("Couleur sélectionnée :", colorPicker.value);
            });
        }));
    }
}
exports.ColorType = ColorType;
