import { AnimeOptions } from "./scripts/types";
/**
 * Provides animation functionalities for HTML elements.
 */
export default class Animation {
    /**
     * Stops the propagation of the given event.
     * @param e The event to stop propagation for.
     */
    private static stopPropagation;
    /**
     * Performs an entrance animation on the specified HTML element.
     * @param options Configuration options for the animation.
     */
    animeIn(options: AnimeOptions): void;
    /**
     * Performs an exit animation on the specified HTML element, then hides or removes it.
     * @param options Configuration options for the animation.
     */
    animeOut(options: AnimeOptions): void;
    /**
     * Performs either an entrance or exit animation on the specified HTML element in response to open and close button events.
     * @param options Configuration options for the animation, including elements and buttons involved.
     */
    animeInOut(options: AnimeOptions): void;
}
