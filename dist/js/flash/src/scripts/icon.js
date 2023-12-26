define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SVG = void 0;
    /**
     * Renvoie une représentation SVG sous forme de chaîne de caractères.
     *
     * @param iconName - Le nom de l'icône à utiliser. Les noms valides sont : "success", "error", "warning", "info" et "close-modal".
     * @param iconPath - Le chemin vers le fichier SVG contenant les icônes.
     * @param attributes - Les attributs supplémentaires à ajouter à l'élément SVG (facultatif).
     * @returns La représentation SVG sous forme de chaîne de caractères.
     */
    function SVG(iconName, iconPath, attributes) {
        let name = ["success", "error", "warning", "info", 'close-modal'];
        let content = "";
        if (undefined !== iconName && name.indexOf(iconName) >= 0) {
            content = `<svg ${attributes}><use xlink:href="${iconPath}#${iconName}" id="flash-close-button"></use></svg>`;
        }
        else {
            content = iconName;
        }
        return content;
    }
    exports.SVG = SVG;
});
//# sourceMappingURL=icon.js.map