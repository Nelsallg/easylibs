export declare class ModalComponent {
    protected modal: Element;
    protected audio: string | null;
    protected volume: number;
    protected duration: number;
    protected titre?: string;
    protected container?: HTMLElement;
    protected animation: {
        type: string;
        position: string;
    };
    protected closeButton?: HTMLElement;
    protected openButton?: HTMLElement;
    /**
     * Cette classe  encapsule la logique liée à la manipulation des modals,
     * y compris leur ouverture, leur fermeture, la gestion de l'audio, de la durée et de l'animation.
     * Elle fournit une interface simple pour interagir avec les modals
     * @param modal L'élément modal à manipuler.
     * @param container Le conteneur dans lequel insérer la modal (optionnel).
     * @param animation Les options d'animation de la modal (optionnel).
     */
    constructor(modal: Element, container?: HTMLElement, animation?: {
        type: string;
        position: string;
    });
    /**
     * Méthode pour fermer la modal.
     */
    close: () => void;
    /**
     * Méthode pour ouvrir la modal.
     */
    open(): void;
    /**
     * Méthode pour gérer la fermeture automatique de la modal.
     */
    protected autoClose: () => void;
    /**
     * Méthode interne pour nettoyer les attributs de la modal.
     * @param modal L'élément modal à nettoyer.
     */
    protected clearProperties(modal: Element): void;
}
