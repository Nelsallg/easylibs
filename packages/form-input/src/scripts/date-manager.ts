/**
 * Manages date-related functionality, including calculating durations and handling date inputs.
 */
export default class DateManager {
  protected fullDate: number = 0;
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
  constructor(startDate: string | HTMLInputElement, endDate: string | HTMLInputElement, durationContainer?: HTMLElement, autoSetDuration: boolean = false) {
      this.startDate = startDate;
      this.endDate = endDate;
      this.durationContainer = durationContainer;
      this.autoSetDuration = autoSetDuration;
  }

  /**
   * Finds the duration between the start and end dates and updates the duration container if specified.
   */
  public findDurationBetweenToDate() {
      let start_date: Date | null = null;
      let fullDate: number = 0;

      if (this.startDate instanceof HTMLInputElement) {
          const { startDate } = this;
          startDate.addEventListener("input", () => {
              const { value } = startDate;
              start_date = new Date(value);

              if (this.endDate instanceof HTMLInputElement) {
                  this.endDate.min = start_date.toISOString().split("T")[0];
              }
          });
      }

      if (this.endDate instanceof HTMLInputElement) {
          const { endDate } = this;
          endDate.addEventListener("input", () => {
              let end_date = new Date(endDate.value);

              if (start_date && start_date < end_date) {
                  endDate.value = end_date.toISOString().split("T")[0];
                  this.fullDate = end_date.getTime() - start_date.getTime();

                  if (this.autoSetDuration && this.durationContainer) {
                      const text = this.fullDurationText;
                      const duration = this.durationContainer;

                      if (duration) {
                          this.setFullDurationText(duration, text);
                      }
                  }
              }
          });
      }
  }

  /**
   * Converts the full date difference to the number of days.
   * @returns {number} The number of days in the full date difference.
   */
  public convertFullDateToDays(): number {
      let one_day = 24 * 60 * 60 * 1000;
      let absValue = Math.abs(this.fullDate);
      return Math.floor(absValue / one_day);
  }

  /**
   * Converts the full date difference to the number of weeks and remaining days.
   * @param {number} [extDays] - Extra days to consider in the calculation.
   * @returns {Object} An object containing the number of weeks and remaining days.
   */
  public convertFullDateToWeeks(extDays?: number): { weeks: number; extDays?: number } {
      let totalDaysNumber = extDays;
      let weeksNumber: number = 0;

      if (this.fullDate) {
          totalDaysNumber = this.convertFullDateToDays();
      }

      if (totalDaysNumber) {
          weeksNumber = Math.floor(totalDaysNumber / 7);
          extDays = totalDaysNumber % 7;
      }

      return { weeks: weeksNumber, extDays: extDays };
  }

  /**
   * Converts the full date difference to the number of months, weeks, and remaining days.
   * @returns {Object} An object containing the number of days, weeks, and months.
   */
  public convertFullDateToMonths(): { days?: number; weeks?: number; months?: number } {
      let totalDaysNumber = this.convertFullDateToDays();
      let monthsNumber = Math.floor(totalDaysNumber / 30);
      let extDays = totalDaysNumber % 30;
      let totalweeks = this.convertFullDateToWeeks(extDays);

      let days: number | undefined = 0;
      let weeks: number | undefined = 0;
      let months: number | undefined = 0;

      if (totalDaysNumber < 30) {
          days = this.convertFullDateToWeeks(totalDaysNumber).extDays;
          weeks = this.convertFullDateToWeeks(totalDaysNumber).weeks;
      } else {
          days = totalweeks.extDays;
          weeks = totalweeks.weeks;
          months = monthsNumber;
      }

      return { days, weeks, months };
  }

  /**
   * Generates a text representation of the duration.
   * @param {number} [day] - Number of days.
   * @param {number} [week] - Number of weeks.
   * @param {number} [month] - Number of months.
   * @returns {Object} An object containing text representations for days, weeks, and months.
   */
  public durationText(day?: number, week?: number, month?: number): { dayText?: string; weekText?: string; monthText?: string } {
      let dayText: string = "";
      (day && day > 1) ? dayText = `${day} jours` : dayText = `${day} jour`;

      let weekText: string = "";
      (week && week > 1) ? weekText = `${week} semaines` : weekText = `${week} semaine`;

      let monthText: string = "";
      (month && month > 0) ? monthText = `${month} mois` : monthText = "";

      if (day === 0) {
          return { weekText, monthText };
      }
      if (week === 0) {
          return { dayText, monthText };
      }
      if (month === 0) {
          return { dayText, weekText };
      }

      return { dayText, weekText, monthText };
  }

  /**
   * Gets the full duration text based on the converted months, weeks, and days.
   * @returns {string} The full duration text.
   */
  public get fullDurationText(): string {
      let fullMonths = this.convertFullDateToMonths();
      const day = fullMonths.days;
      const week = fullMonths.weeks;
      const month = fullMonths.months;

      let durationText = this.durationText(day, week, month);
      console.log({ durationText, month });

      return ` ${durationText.monthText ?? ""} ${durationText.weekText ?? ""} ${durationText.dayText ?? ""}`;
  }

  /**
   * Sets the full duration text to the specified element.
   * @param {HTMLElement} element - The HTML element to set the duration text.
   * @param {string} text - The duration text to set.
   */
  public setFullDurationText(element: HTMLElement, text: string): void {
      if (element instanceof HTMLInputElement) {
          element.value = text;
      } else {
          element.innerHTML = text;
      }
  }
}
