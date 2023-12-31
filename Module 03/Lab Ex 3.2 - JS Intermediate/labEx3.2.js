// 1. Create a function that takes a string as a parameter and returns the string with the first
//    character of each word changed into a capital letter, as in the example below. Test it with
//    different strings.

function ucFirstLetters(inputText) {
  inputText = inputText.toLowerCase(); // lowercase to normalise
  inputText = inputText.split(" "); // convert to array of words
  //
  for (let i = 0; i < inputText.length; i++) {
    inputText[i] = inputText[i].charAt(0).toUpperCase() + inputText[i].slice(1);
  }
  return inputText.join(" ");
}

console.log("\nLab Ex 3.2 Step 1. Output:");
console.log(
  `Input text: "los angeles" \t\tOutput: ${ucFirstLetters("los angeles")}`
); //Los Angeles
console.log(
  `Input text: "I'm a little tea pot" \tOutput: ${ucFirstLetters(
    "I'm a little tea pot"
  )}`
);
console.log(
  `Input text: "sHorT aNd stOUt" \t\tOutput: ${ucFirstLetters(
    "sHorT aNd stOUt"
  )}`
);

// **********************************************************

// 2. Create a function truncate(str, max) that truncates a given string of text if its total
//    length is greater than the max length. It should return either the truncated text, with an
//    ellipsis (...) added to the end if it was too long, or the original text otherwise.
// b) Write another variant of the truncate function that uses a conditional operator.

function truncate(str, max) {
  if (str.length > max) {
    return str.substring(0, max - 3) + "..."; // -3 to account for "..."
  } else {
    return str;
  }
}

console.log("\nLab Ex 3.2 Step 2. Output:");
console.log(`Input: "This text will be truncated if it is too long" Max: 25`);
console.log(
  `Output: ${truncate("This text will be truncated if it is too long", 25)}`
);
console.log(`Input: "This text will be truncated if it is too long" Max: 3`);
console.log(
  `Output: ${truncate("This text will be truncated if it is too long", 3)}`
);
console.log(`Input: "This text will be truncated if it is too long" Max: 60`);
console.log(
  `Output: ${truncate("This text will be truncated if it is too long", 60)}`
);
console.log(`Input: "This text will be truncated if it is too long" Max: 30`);
console.log(
  `Output: ${truncate("This text will be truncated if it is too long", 30)}`
);
// // This text will be truncat...

// **********************************************************

// 3. Use the following animals array for the below tasks. Test each one by printing the result to
//    the console. Review the following link for tips:

//    https://developer.mozilla.org/en-
//    US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
//    middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
//    containing all the animals that begin with the beginsWith string. Try to make it work
//    regardless of upper/lower case.
const animals = ["Tiger", "Giraffe"];
console.log("\nLab Ex 3.2 Step 3. Output:");
console.log("Original Array: " + animals);
animals.push("Dog", "Leopard");
console.log("After .push: " + animals);
animals.unshift("Cat", "Lynx");
console.log("After .unshift: " + animals);

const replaceMiddleAnimal = (newValue) => {
  animals[animals.length / 2] = newValue; // Won't work with all array lengths
};

replaceMiddleAnimal("Zebra");

console.log("After replaceMiddleAnimal: " + animals);
const foundAnimals = [];
const findAnimals = (beginsWith) => {
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].substring(0, 1).toLowerCase() == beginsWith.toLowerCase()) {
      foundAnimals.push(animals[i]);
    }
  }
};

findAnimals("L");
console.log("foundAnimals Array: " + foundAnimals);

// **********************************************************

// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
//    'margin-left' into camel-cased 'marginLeft'.
//    The function should remove all dashes, and uppercase the first letter of each word after a
//    dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.

console.log("\nLab Ex 3.2 Step 4. Output:");

// Most efficient way to produce camelCase:
// const camelCase = (cssProp) => {
//   return cssProp.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
// };

// Spliting the text into an array, then creating a newWord by concatenating
// each element starting at index 1
// const camelCase = (cssProp) => {
//   let splitText = cssProp.split("-");
//   let newWord = splitText[0];
//   for (let i = 1; i < splitText.length; i++) {
//     newWord =
//       newWord + splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1);
//   }
//   return newWord;
// };

// Using a for loop to iterate over each char in the string
const camelCase = (cssProp) => {
  let newWord = "";
  for (let i = 0; i < cssProp.length; i++) {
    if (cssProp[i] == "-") {
      newWord = newWord + cssProp[i + 1].toUpperCase();
      i++;
    } else {
      newWord += cssProp[i];
    }
  }
  return newWord;
};

console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display
console.log(camelCase("display-top-nav-collapse")); // display

// **********************************************************

// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the
//    following:
console.log("\nLab Ex 3.2 Step 5. Output:");
let twentyCents = 0.2;
let tenCents = 0.1;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
//    0.2 + 0.1 = 0.30000000000000004
//    We can sometimes avoid this using the toFixed function to force the number of decimal
//    places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen); //why is this not working?
// a) Explain why the above code returns the wrong answer

//    The .toFixed() function returns a string value. "+" operator in this instance will
//    concatenate the 2 strings rather than add the 2 numbers.

// b) Create a function currencyAddition(float1, float2) which safely adds the two
//    decimal numbers float1 and float2 and returns the correct float result.
const currencyAddition = (float1, float2) => {
  return Number.parseFloat(float1 + float2).toFixed(2);
};

// c) Create a function currencyOperation(float1, float2, operation) which
//    safely performs the given operation (either +, -, / or *) on the two numbers and returns
//    the correct float result. https://developer.mozilla.org/en-
//    US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
function currencyOperation(float1, float2, operation, numDecimals) {
  let floatResult;
  switch (operation) {
    case "+": {
      floatResult = float1 + float2;
      break;
    }
    case "-": {
      floatResult = float1 - float2;
      break;
    }
    case "*": {
      floatResult = float1 * float2;
      break;
    }
    case "/": {
      floatResult = float1 / float2;
      break;
    }
  }
  return Number.parseFloat(floatResult).toFixed(numDecimals);
}

// d) (Extension) Extend the above function to include a fourth argument numDecimals
//    which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:
console.log(0.3 == currencyAddition(0.1, 0.2)); // true
console.log(0.3 == currencyOperation(0.1, 0.2, "+", 2)); // true
console.log(currencyOperation(11.3, 4.9, "/", 6));

// **********************************************************

// 6. Create a function unique(duplicatesArray) which takes an array parameter that may
//    include duplicates. Your function should return an array containing only the unique values
//    from duplicatesArray.
//    Test with the following arrays and create another one of your own.
console.log("\nLab Ex 3.2 Step 6. Output:");
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

function unique(dupesArray) {
  return dupesArray.filter(
    (value, index, arry) => arry.indexOf(value) === index
  );
}

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

// **********************************************************

// 7. Use the following array of book objects to practice the array functions for map, find and
//    filter. Test each of your answers to the below tasks.
console.log("\nLab Ex 3.2 Step 7. Output:");
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
// a) Write a function getBookTitle(bookId) that uses the find function to return the
//    title of the book object with the matching id.
const getBookTitle = (bookId) => {
  return books.find(({ id }) => id === bookId).title;
};
console.log("a): " + getBookTitle(2));

// b) Write a function getOldBooks() that uses the filter function to return all book
//    objects written before 1950.
const getOldBooks = () => {
  return books.filter((book) => book.year < 1950);
};
console.log("b): array of objects: ");
console.log(getOldBooks());

// c) Write a function addGenre() that uses the map function to add a new genre property
//    to all of the above books, with the value ‘classic’.
const addGenre = () => {
  books.map((book) => (book.genre = "classic"));
};
addGenre();
console.log("c): books after calling addGenre(): ");
console.log(books);

// d) (Extension) Write a function getTitles(authorInitial) that uses map and
//    filter together to return an array of book titles for books written by authors whose
//    names start with authorInitial.
const getTitles = (authInit) => {
  return books.filter((book) => book.author.charAt(0) == authInit);
};
console.log('d): getTitles("F"): ');
console.log(getTitles("F"));

// e) (Extension) Write a function latestBook() that uses find and forEach to get the
//    book with the most recent publication date.
const latestBook = () => {
  let youngestBook = 0;
  books.forEach((book) => {
    if (book.year > youngestBook) {
      youngestBook = book.year;
    }
  });
  return books.find((book) => book.year == youngestBook);
};
console.log("e): lastestBook():");
console.log(latestBook());

// **********************************************************

// 8. The following code creates a new Map object for storing names beginning with A, B, or C
//    with their phone numbers.
console.log("\nLab Ex 3.2 Step 8. Output:");
const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");
console.log("Original Map:");
console.log(phoneBookABC);
// a) Create a new phoneBookDEF Map to store names beginning with D, E or F
const phoneBookDEF = new Map(); //an empty map to begin with
// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
phoneBookDEF.set("Dan", "021586958");
phoneBookDEF.set("Erik", "022654789");
phoneBookDEF.set("Frank", "0275849565");
console.log("a) & b): new Map() phoneBookDEF:");
console.log(phoneBookDEF);
// c) Update the phone number for Caroline
phoneBookABC.set("Caroline", "0201234567");
console.log("c): changed Caroline's number:");
console.log(phoneBookABC);
// d) Write a function printPhoneBook(contacts) that prints the names and phone
//    numbers in the given Map
const printPhoneBook = (contacts) => {
  console.log("\n*** Phone Book Entries ***\n");
  let i = 1;
  contacts.forEach((value, key, map) => {
    console.log(i + " " + key + " " + value);
    i++;
  });
  console.log("\n");
};
console.log("d): Print Phone Book:");
printPhoneBook(phoneBookABC);
// e) Combine the contents of the two individual Maps into a single phoneBook Map
const masterPhBk = new Map([...phoneBookABC, ...phoneBookDEF]);
// f) Print out the full list of names in the combined phone book
console.log("e) & f): Combine & Print Phone Book:");
printPhoneBook(masterPhBk);

// **********************************************************

// 9. Given the below salaries object, perform the following tasks.
let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};
console.log("\nLab Ex 3.2 Step 9. Output:");
// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
const sumSalaries = (salaries) => {
  return Object.values(salaries).reduce((total, salary) => total + salary, 0);
};
console.log("a): Total of all salaries: ");
console.log("Total: $" + sumSalaries(salaries));

// console.log(salaries);

// b) Write a function topEarner(salaries) that calculates and returns the name of the person
//    earning the highest salary
const topEarner = (salaries) => {
  let topPay = Object.values(salaries).reduce((total, salary) => {
    if (salary > total) {
      return total + (salary - total);
    } else {
      return total;
    }
  }, 0);
  return Object.keys(salaries).find((salary) => salaries[salary] == topPay);
};
console.log("b): Top Earner:");
console.log(topEarner(salaries));

// **********************************************************

// 10. The following code uses the Date object to print the current time and the number of hours
//     that have passed today so far. Extend the code to do the following:
console.log("\nLab Ex 3.2 Step 10. Output:");
const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");
// a) Print the total number of minutes that have passed so far today
console.log("a): minutes:");
console.log(
  today.getMinutes() +
    today.getHours() * 60 +
    " minutes have passed so far today"
);
// b) Print the total number of seconds that have passed so far today
console.log("b): seconds:");
console.log(
  today.getMinutes() * 60 +
    today.getHours() * 60 * 60 +
    today.getSeconds() +
    " seconds have passed so far today"
);
// c) Calculate and print your age as: 'I am x years, y months and z days old'
console.log("c): age, months, days, years:");
// Create a new Date object for my DOB:
const myDOB = new Date(1985, 9, 2);
// console.log(myDOB.toString());

// save todays values in variables
let ty = today.getFullYear();
let tm = today.getMonth() + 1; // month is zero indexed
let td = today.getDate();
// save myDOB values in variables
let by = myDOB.getFullYear();
let bm = myDOB.getMonth() + 1;
let bd = myDOB.getDate();
// declare result variables
let myYears;
let myMonths;
let myDays;

// logic to calculate days
if (td < bd) {
  myDays = td - bd + 30;
  tm--;
} else {
  myDays = td - bd;
}
// myDays = Math.round((today - myDOB) / (1000 * 3600 * 24)); // 1 day = (1000 * 60 * 60 * 24)

// logic to calculate months
if (tm < bm) {
  myMonths = tm - bm + 12;
  ty--;
} else {
  myMonths = tm - bm;
}
// myMonths = Math.round((today - myDOB) / ((1000 * 3600 * 24 * 365) / 12)); // 1 month = (1000 * 60 * 60 * 24 * 365) / 12

// years
myYears = ty - by;
// myYears = Math.floor((today - myDOB) / (1000 * 3600 * 24 * 365)); // 1 year = (1000 * 60 * 60 * 24 * 365)

console.log(`I'm ${myYears} years, ${myMonths} months and ${myDays} days old`);
// d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
//    of days in between the two given dates.
console.log("d): days between 23/5/2020 - 7/3/2023:");

const daysBetween = (date1, date2) => {
  return (date2 - date1) / (1000 * 3600 * 24); // 1 day = (1000 * 60 * 60 * 24)
};

const date1 = new Date(2020, 4, 23);
const date2 = new Date(2023, 2, 7);
console.log(Math.round(daysBetween(date1, date2)));

console.log("d): days between 23/5/2020 - 24/5/2020:");
console.log(
  Math.round(daysBetween(new Date(2020, 4, 23), new Date(2020, 4, 24)))
);

console.log("d): days between 23/5/2020 - 24/2/2020:");
console.log(
  Math.round(daysBetween(new Date(2020, 4, 23), new Date(2020, 1, 24)))
);
