export declare class SelectType {
    /**
     * Cette méthode redimensionne automatiquement un élément "select"
     * en fonction de la longueur du texte sélectionné
     * @param select
     */
    static autoResize(select: string | HTMLSelectElement): void;
    /**
     * Gestion du select avec les icônes
     * @param {string | HTMLSelectElement} select
     */
    static addIconToOptions(select: string | HTMLSelectElement): void;
}
