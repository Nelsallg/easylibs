declare type RunnerOptions = {
    modal?: HTMLElement;
    container?: HTMLElement;
    animation?: {
        type: string;
        position: string;
    };
    tone?: boolean;
};
export default class Runner {
    private modal;
    private tone;
    private volume;
    private duration;
    private titre?;
    private container?;
    private animation;
    private closeButton?;
    private openButton?;
    /**
     * Cette classe  encapsule la logique liée à la manipulation des modals,
     * y compris leur ouverture, leur fermeture, la gestion de l'audio, de la durée et de l'animation.
     * Elle fournit une interface simple pour interagir avec les modals
     * @param modal L'élément modal à manipuler.
     * @param container Le conteneur dans lequel insérer la modal (optionnel).
     * @param animation Les options d'animation de la modal (optionnel).
     */
    constructor(options: RunnerOptions);
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
    private autoClose;
    private animProps;
    /**
     * Méthode interne pour nettoyer les attributs de la modal.
     * @param modal L'élément modal à nettoyer.
     */
    private clearProperties;
}
export {};
