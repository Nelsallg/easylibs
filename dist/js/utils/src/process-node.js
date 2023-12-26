define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.processNodes = void 0;
    /**
     * Cette fonction permet de convertir un objet NodeList en un tableau d'éléments HTML (HTMLElement)
     * et d'exécuter une fonction de rappel sur chaque élément du tableau.
     * @param nodeList Un objet NodeList ou un élément HTML.
     * Si c'est un NodeList, il sera converti en tableau d'éléments HTML.
     * @param callback Une fonction de rappel à exécuter sur chaque élément du tableau.
     * @returns
     */
    function processNodes(nodeList, callback = (node, index) => { }) {
        if (nodeList instanceof NodeList || Array.isArray(nodeList)) {
            return Array.from(nodeList).forEach((node, i) => {
                callback(node, i);
            });
        }
        if (null !== nodeList && undefined !== nodeList) {
            return callback(nodeList);
        }
    }
    exports.processNodes = processNodes;
});
//# sourceMappingURL=process-node.js.map