const timeNow = moment();
const myBday = moment("02/10/1985", "DD/MM/YYYY");

// console.log(timeNow);
// console.log(myBday);

let tempDate = myBday;

const myYears = timeNow.diff(tempDate, "years");
tempDate.add(myYears, "years");
const myMonths = timeNow.diff(tempDate, "months");
tempDate.add(myMonths, "months");
const myDays = timeNow.diff(tempDate, "days");

document.querySelector(
  "#daysBetween"
).innerText = `Number of days: ${timeNow.diff(tempDate, "days")}`;

document.querySelector(
  "#yearsMonthsDays"
).innerText = `Number of Years: ${myYears} Months: ${myMonths} Days: ${myDays}`;

const date1 = moment("18/06/1987", "DD/MM/YYYY");
const date2 = moment("24/05/2047", "DD/MM/YYYY");

const diff1 = Math.abs(date1.diff(timeNow));
const diff2 = Math.abs(date2.diff(timeNow));

let closestDate;

if (diff1 < diff2) {
  closestDate = date1;
} else {
  closestDate = date2;
}

document.querySelector(
  "#closerDate"
).innerText = `Closest date to now is: ${closestDate.format("DD/MM/YYYY")}`;

const date3 = moment("14/8/2023", "DD/MM/YYYY");
const date4 = moment("12/8/2023", "DD/MM/YYYY");

closestDate = date3.isBefore(date4) ? date3 : date4;

document.querySelector(
  "#olderDate"
).innerText = `Oldest date is: ${closestDate.format("DD/MM/YYYY")}`;

const timeLondon = moment.tz("Europe/London");

document.querySelector(
  "#londonTime"
).innerText = `Time in London is: ${timeLondon.format(
  "dddd, MMMM Do YYYY, h:mm:ss a"
)}`;
