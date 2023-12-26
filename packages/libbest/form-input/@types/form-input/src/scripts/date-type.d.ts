export declare class DateType {
    protected fullDate: number;
    startDate: string | HTMLInputElement;
    endDate: string | HTMLInputElement;
    durationContainer: HTMLElement | undefined;
    autoSetDuration: boolean;
    constructor(startDate: string | HTMLInputElement, endDate: string | HTMLInputElement, durationContainer?: HTMLElement, autoSetDuration?: boolean);
    findDurationBetweenToDate(): void;
    convertFullDateToDays(): number;
    convertFullDateToWeeks(extDays?: number): {
        weeks: number;
        extDays: number;
    };
    convertFullDateToMonths(): {
        days: number;
        weeks: number;
        months: number;
    };
    durationText(day?: number, week?: number, month?: number): {
        weekText: string;
        monthText: string;
        dayText?: undefined;
    } | {
        dayText: string;
        monthText: string;
        weekText?: undefined;
    } | {
        dayText: string;
        weekText: string;
        monthText?: undefined;
    } | {
        dayText: string;
        weekText: string;
        monthText: string;
    };
    get fullDurationText(): string;
    setFullDurationText(element: HTMLElement, text: string): void;
}
