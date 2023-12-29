export default class ScrollBehavior {
    private static initialMouseY;
    private static initialScrollTop;
    private static isRightClickPressed;
    /**
    * Cette fonction active les fonctionnalités de défilement et de glissement sur la page.
    * Elle permet à l'utilisateur d'interagir avec la page en utilisant la souris,
    * la molette de la souris et le clavier pour faire défiler le contenu.
    * En appelant cette fonction,
    * l'utilisateur peut profiter d'une expérience de navigation plus interactive et personnalisée.
    */
    static run(): void;
    static isEndScrolling(element: HTMLElement, callback?: Function, margin?: {
        x: number;
        y: number;
    }): boolean;
    /**
     * Gère l'événement de clic de souris enfoncé (mousedown) pour activer le défilement personnalisé.
     * Enregistre la position initiale de la souris et active
     * les écouteurs d'événements de mouvement de souris et de relâchement de clic.
     * @param event - L'événement de clic de souris enfoncé.
     */
    private static handleMouseDown;
    /**
     * Gère l'événement de mouvement de souris (mousemove)
     * pour effectuer le défilement en fonction du mouvement de la souris.
     * @param event - L'événement de mouvement de souris.
     */
    private static handleMouseMove;
    /**
     * Gère l'événement de relâchement de clic de souris (mouseup) pour désactiver le défilement personnalisé.
     * Nettoie les écouteurs d'événements de mouvement de souris et de relâchement de clic.
     * @param event - L'événement de relâchement de clic de souris.
     */
    private static handleMouseUp;
    /**
     * Cette fonction gère les événements de défilement de la molette de la souris sur la page.
     * Lorsque l'utilisateur fait tourner la molette de la souris vers le haut ou vers le bas,
     * cette fonction permet de faire défiler la page dans la direction correspondante.
     * Cela offre une alternative pratique à la barre de défilement traditionnelle pour naviguer sur la page.
     * @param event
     */
    private static handleWheel;
    /**
     * Cette fonction gère les événements de pression d'une touche du clavier.
     * Lorsque l'utilisateur enfonce la touche "ArrowDown" (flèche vers le bas),
     * cette fonction permet de faire défiler la page vers le bas.
     * Elle offre une méthode simple pour naviguer rapidement
     * à travers le contenu de la page en utilisant uniquement le clavier.
     * @param event
     */
    private static handleKeyDown;
}
