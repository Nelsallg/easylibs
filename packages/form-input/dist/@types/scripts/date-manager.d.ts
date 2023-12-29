/**
 * Manages date-related functionality, including calculating durations and handling date inputs.
 */
export default class DateManager {
    protected fullDate: number;
    startDate: string | HTMLInputElement;
    endDate: string | HTMLInputElement;
    durationContainer: HTMLElement | undefined;
    autoSetDuration: boolean;
    /**
     * Constructs a new DateManager instance.
     * @param {string | HTMLInputElement} startDate - The start date input or selector.
     * @param {string | HTMLInputElement} endDate - The end date input or selector.
     * @param {HTMLElement} [durationContainer] - The container to display the duration.
     * @param {boolean} [autoSetDuration=false] - Indicates whether to automatically set the duration text.
     */
    constructor(startDate: string | HTMLInputElement, endDate: string | HTMLInputElement, durationContainer?: HTMLElement, autoSetDuration?: boolean);
    /**
     * Finds the duration between the start and end dates and updates the duration container if specified.
     */
    findDurationBetweenToDate(): void;
    /**
     * Converts the full date difference to the number of days.
     * @returns {number} The number of days in the full date difference.
     */
    convertFullDateToDays(): number;
    /**
     * Converts the full date difference to the number of weeks and remaining days.
     * @param {number} [extDays] - Extra days to consider in the calculation.
     * @returns {Object} An object containing the number of weeks and remaining days.
     */
    convertFullDateToWeeks(extDays?: number): {
        weeks: number;
        extDays?: number;
    };
    /**
     * Converts the full date difference to the number of months, weeks, and remaining days.
     * @returns {Object} An object containing the number of days, weeks, and months.
     */
    convertFullDateToMonths(): {
        days?: number;
        weeks?: number;
        months?: number;
    };
    /**
     * Generates a text representation of the duration.
     * @param {number} [day] - Number of days.
     * @param {number} [week] - Number of weeks.
     * @param {number} [month] - Number of months.
     * @returns {Object} An object containing text representations for days, weeks, and months.
     */
    durationText(day?: number, week?: number, month?: number): {
        dayText?: string;
        weekText?: string;
        monthText?: string;
    };
    /**
     * Gets the full duration text based on the converted months, weeks, and days.
     * @returns {string} The full duration text.
     */
    get fullDurationText(): string;
    /**
     * Sets the full duration text to the specified element.
     * @param {HTMLElement} element - The HTML element to set the duration text.
     * @param {string} text - The duration text to set.
     */
    setFullDurationText(element: HTMLElement, text: string): void;
}
