# Date and Color Picker Typescript Classes

This repository contains two Typescript classes that provide functionality for working with dates and colors.

## DateType Class

The `DateType` class provides methods for working with dates and durations. It can be used to find the duration between two dates, convert durations to different units (days, weeks, months), and format durations as text.

### Constructor

The `DateType` class constructor takes three parameters:

* `startDate`: The start date of the duration. This can be a string or an HTMLInputElement.
* `endDate`: The end date of the duration. This can be a string or an HTMLInputElement.
* `durationContainer`: An optional HTMLElement that will be used to display the duration.
* `autoSetDuration`: An optional boolean value that specifies whether the duration should be automatically set when the start and end dates are changed.

### Methods

The `DateType` class has several methods that can be used to work with dates and durations.

* `findDurationBetweenToDate()`: This method finds the duration between the start and end dates and stores it in the `fullDate` property. If the start date is after the end date, the end date will be set to the start date.
* `convertFullDateToDays()`: This method converts the `fullDate` property to days.
* `convertFullDateToWeeks()`: This method converts the `fullDate` property to weeks and days.
* `convertFullDateToMonths()`: This method converts the `fullDate` property to months, weeks, and days.
* `durationText()`: This method formats the duration as text. It takes three optional parameters: `day`, `week`, and `month`. If a parameter is not specified, it will be omitted from the formatted text.
* `getFullDurationText()`: This method returns the formatted duration text.
* `setFullDurationText()`: This method sets the text of the `durationContainer` element to the formatted duration text.

### Example

The following code shows how to use the `DateType` class to find the duration between two dates and display it in an HTML element:

```typescript
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');
const durationContainer = document.getElementById('duration');

const dateType = new DateType(startDate, endDate, durationContainer, true);

date
