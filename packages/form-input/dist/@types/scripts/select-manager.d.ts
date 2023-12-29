/**
 * Manages functionality related to HTML select elements.
 */
export default class SelectManager {
    /**
     * Automatically resizes a "select" element based on the length of the selected text.
     * @param {string | HTMLSelectElement} select - The selector or HTMLSelectElement to be auto-resized.
     */
    static autoResize(select: string | HTMLSelectElement): void;
    /**
     * Adds icons to options in a select element and handles icon visibility on change.
     * @param {string | HTMLSelectElement} select - The selector or HTMLSelectElement for which to add icons to options.
     */
    static addIconToOptions(select: string | HTMLSelectElement): void;
}
