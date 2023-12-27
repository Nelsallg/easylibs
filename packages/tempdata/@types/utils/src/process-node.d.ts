/**
 * Cette fonction permet de convertir un objet NodeList en un tableau d'éléments HTML (HTMLElement)
 * et d'exécuter une fonction de rappel sur chaque élément du tableau.
 * @param nodeList Un objet NodeList ou un élément HTML.
 * Si c'est un NodeList, il sera converti en tableau d'éléments HTML.
 * @param callback Une fonction de rappel à exécuter sur chaque élément du tableau.
 * @returns
 */
export declare function processNodes(nodeList: any, callback?: (node: any, index?: number) => void): void;
