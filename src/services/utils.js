// functions to be used anywhere in the projct

//get month number
export function getMonthNumber(monthName) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return months.indexOf(monthName) + 1;
}
//format date
import moment from "moment";

export const formatDate = (date) => {
    return moment(date).format("Do MMMM YYYY");
};

//months
export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

//years
export const years = [2022, 2023, 2024];

