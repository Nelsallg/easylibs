/**
 * Manages the color-related functionality, including fetching colors from a URL and handling color selection events.
 */
export default class ColorManager {
    /**
     * The selector or HTMLInputElement representing the color picker.
     * @protected
     * @type {string | HTMLInputElement}
     */
    protected colorPicker: string | HTMLInputElement;
    /**
     * Constructs a new ColorManager instance.
     * @param {string | HTMLInputElement} colorPicker - The selector or HTMLInputElement representing the color picker.
     */
    constructor(colorPicker: string | HTMLInputElement);
    /**
     * Fetches colors from the specified URL and populates the color picker's datalist.
     * Also logs the selected color when an input event occurs.
     * @param {string} url - The URL from which to fetch color data.
     */
    fetchColors(url: string): void;
}
