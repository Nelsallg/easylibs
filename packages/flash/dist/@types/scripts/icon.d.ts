/**
 * Renvoie une représentation SVG sous forme de chaîne de caractères.
 *
 * @param iconName - Le nom de l'icône à utiliser. Les noms valides sont : "success", "error", "warning", "info" et "close-modal".
 * @param iconPath - Le chemin vers le fichier SVG contenant les icônes.
 * @param attributes - Les attributs supplémentaires à ajouter à l'élément SVG (facultatif).
 * @returns La représentation SVG sous forme de chaîne de caractères.
 */
export declare function SVG(iconName?: string, iconPath?: string, attributes?: string): string;
