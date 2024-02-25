// functions to be used anywhere in the projct

// function to determine the number of days in the month to be used in the expenses.vue file when plotting the graph
export function getDaysInMonth(year, month) {
    // Validate input arguments:
    if (typeof year !== "number" || typeof month !== "number") {
        throw new TypeError("Year and month must be numbers.");
    }
    if (month < 1 || month > 12) {
        throw new RangeError("Month must be between 1 and 12.");
    }

    // Handle February (leap year case):
    if (month === 2) {
        return isLeapYear(year) ? 29 : 28;
    }

    // Other months have a fixed number of days:
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
}

// Helper function to check if a year is a leap year:
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Example usage:
const daysInFebruary2024 = getDaysInMonth(2024, 2); // Result: 29
const daysInAugust2023 = getDaysInMonth(2023, 8); // Result: 31