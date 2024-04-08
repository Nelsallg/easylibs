export declare type AnimeOptions = {
    duration?: number;
    openButton?: HTMLElement;
    element?: HTMLElement | {
        element: HTMLElement;
        animateElement: HTMLElement;
    };
    display?: string | null;
    animation?: {
        type: string;
        position: string;
        clearAfterApplying?: boolean;
    };
    closeButton?: HTMLElement;
    dispatchCloseEvent?: {
        key?: any;
        value: boolean;
    };
    delay?: number;
    fromInToOut?: boolean;
};
/**
 * Effectue une animation d'entrée sur un élément HTML spécifié.
 * @param options.element - L'élément HTML sur lequel l'animation d'entrée doit être appliquée.
 * @param options.animation - Les informations sur le type et la position de l'animation (facultatif).
 * @param options.display - La valeur de la propriété CSS "display" à appliquer à l'élément après l'animation (facultatif).
 * @param options.fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa lors de l'utilisation de la fonction `switchAnimation`.
 */
export declare function animeIn<T extends AnimeOptions>(options: T): void;
/**
 * Effectue une animation de sortie sur un élément HTML spécifié, puis le masque ou le supprime.
 * @param options.element - L'élément HTML sur lequel l'animation d'entrée ou de sortie doit être appliquée.
 * @param options.display - La valeur de la propriété CSS "display" à appliquer à l'élément lors de l'animation (facultatif).
 * @param options.animation - Les informations sur le type et la position de l'animation (facultatif).
 * @param options.delay - Le délai en millisecondes avant de masquer ou de supprimer l'élément (facultatif).
 * @param options.closeButton - Le bouton de fermeture lié à l'élément (facultatif).
 * @param options.fromInToOut - Détermine si l'animation va de l'état "in" (entrée) à l'état "out" (sortie) ou vice versa.
 */
export declare function animeOut<T extends AnimeOptions>(options: T): void;
/**
 * Effectue une animation d'entrée ou de sortie sur un élément HTML spécifié en réponse aux événements du bouton d'ouverture et de fermeture.
 * @param options.openButton - Le bouton d'ouverture lié à l'élément.
 * @param options.element - L'élément HTML sur lequel l'animation d'entrée ou de sortie doit être appliquée.
 * @param options.display - La valeur de la propriété CSS "display" à appliquer à l'élément lors de l'animation (facultatif).
 * @param options.animation - Les informations sur le type et la position de l'animation (facultatif).
 * @param options.closeButton - Le bouton de fermeture lié à l'élément (facultatif).
 * @param options.dispatchCloseEvent - L'événement de fermeture à dispatcher (facultatif).
 * @param options.dispatchCloseEvent.key - La clé de l'événement de fermeture.
 * @param options.dispatchCloseEvent.value - La valeur associée à l'événement de fermeture.
 * @param options.delay - Le délai en millisecondes avant de masquer ou de supprimer l'élément (facultatif).
 */
export declare function animeInOut<T extends AnimeOptions>(options: T): void;
