define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DateType = void 0;
    class DateType {
        constructor(startDate, endDate, durationContainer, autoSetDuration = false) {
            this.fullDate = 0;
            this.startDate = startDate;
            this.endDate = endDate;
            this.durationContainer = durationContainer;
            this.autoSetDuration = autoSetDuration;
        }
        findDurationBetweenToDate() {
            let start_date = null;
            let fullDate = 0;
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
                        if (true === this.autoSetDuration && this.durationContainer) {
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
        convertFullDateToDays() {
            let one_day = 24 * 60 * 60 * 1000;
            let absValue = Math.abs(this.fullDate);
            return Math.floor(absValue / one_day);
        }
        ;
        convertFullDateToWeeks(extDays) {
            let totalDaysNumber = extDays;
            let weeksNumber = 0;
            if (this.fullDate) {
                totalDaysNumber = this.convertFullDateToDays();
            }
            if (totalDaysNumber) {
                weeksNumber = Math.floor(totalDaysNumber / 7);
                extDays = totalDaysNumber % 7;
            }
            return { weeks: weeksNumber, extDays: extDays };
        }
        convertFullDateToMonths() {
            let totalDaysNumber = this.convertFullDateToDays();
            let monthsNumber = Math.floor(totalDaysNumber / 30);
            let extDays = totalDaysNumber % 30;
            let totalweeks = this.convertFullDateToWeeks(extDays);
            let days = 0;
            let weeks = 0;
            let months = 0;
            if (totalDaysNumber < 30) {
                days = this.convertFullDateToWeeks(totalDaysNumber).extDays;
                weeks = this.convertFullDateToWeeks(totalDaysNumber).weeks;
            }
            else {
                days = totalweeks.extDays;
                weeks = totalweeks.weeks;
                months = monthsNumber;
            }
            return { days, weeks, months };
        }
        durationText(day, week, month) {
            let dayText = "";
            (day && day > 1) ? dayText = `${day} jours` : dayText = `${day} jour`;
            let weekText = "";
            (week && week > 1) ? weekText = `${week} semaines` : weekText = `${week} semaine`;
            let monthText = "";
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
        get fullDurationText() {
            var _a, _b, _c;
            let fulleMonth = this.convertFullDateToMonths();
            const day = fulleMonth.days;
            const week = fulleMonth.weeks;
            const month = fulleMonth.months;
            let durationText = this.durationText(day, week, month);
            console.log({ durationText, month });
            return ` ${(_a = durationText.monthText) !== null && _a !== void 0 ? _a : ""} ${(_b = durationText.weekText) !== null && _b !== void 0 ? _b : ""} ${(_c = durationText.dayText) !== null && _c !== void 0 ? _c : ""}`;
        }
        setFullDurationText(element, text) {
            if (element instanceof HTMLInputElement) {
                element.value = text;
            }
            else {
                element.innerHTML = text;
            }
        }
    }
    exports.DateType = DateType;
});
//# sourceMappingURL=date-type.js.map