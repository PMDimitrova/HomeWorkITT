let day = 12;
let month = 4;
let year = 2004;

let isTheYearLeap;

//check if the year is leap and set coefficient
if ((0 === year % 4) && (0 !== year % 100) || (0 === year % 400)) {
    isTheYearLeap = true;
} else {
    isTheYearLeap = false;
}

//I'll directly add an extra day to the day count if the year is leap
if (isTheYearLeap) {
    day += 1;
}

let result;

if (month === 1) {
    result = day;
} else if (month === 2) {
    result = day + 31;
} else if (month === 3) {
    result = day + 31 + 28;
} else if (month === 4) {
    result = day + 31 + 28 + 31;
} else if (month === 5) {
    result = day + 31 + 28 + 31 + 30;
} else if (month === 6) {
    result = day + 31 + 28 + 31 + 30 + 31;
} else if (month === 7) {
    result = day + 31 + 28 + 31 + 30 + 31 + 30;
} else if (month === 8) {
    result = day + 31 + 28 + 31 + 30 + 31 + 30 + 31;
} else if (month === 9) {
    result = day + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31;
} else if (month === 10) {
    result = day + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30;
} else if (month === 11) {
    result = day + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31;
} else if (month === 12) {
    result = day + 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30;
}

console.log("Day('s) passed from the beginning of the year: " + result);
