// Run this file in the terminal
// Right-click the file and click "Open in Intergrated Terminal"
// to open in the current working folder.
// Run this code:
// node labEx3.1.js

// 1. What are the results of these expressions?
// (answer first, then use console.log() to check)

// My thoughts:
// "" + 1 + 0; // String: "10"
// "" - 1 + 0; // Number: -1 (-operator always converts strings to numbers)
// true + false; // Number: 1 (converts to numbers)
// !true; // Boolean: false
// 6 / "3"; // Number: 2 (converts string to number when after number)
// "2" * "3"; // Number: 6 (*operator always converts strings to numbers)
// 4 + 5 + "px"; // String: "9px" (adds numbers first then concatenates)
// "$" + 4 + 5; // String: "$45" (string first so numbers are converted to strings)
// "4" - 2; // Number: 2 (-operator always converts strings to numbers)
// "4px" - 2; // NaN: (-operator can't convert "4px" to a number)
// " -9 " + 5; // String: " -9 5" (number -> string, concatenate)
// " -9 " - 5; // Number: -14 (string -> number, subtraction)
// null + 1; // Number: 1
// undefined + 1; // NaN
// undefined == null; // true
// undefined === null; // false
// " \t \n" - 2; // NaN

// Colsole output:
console.log("Lab Ex 3.1 Step 1. Output:");
console.log("" + 1 + 0); // String: "10"
console.log("" - 1 + 0); // Number: -1
console.log(true + false); // Number: 1
console.log(!true); // Boolean: false
console.log(6 / "3"); // Number: 2
console.log("2" * "3"); // Number: 6
console.log(4 + 5 + "px"); // String: "9px"
console.log("$" + 4 + 5); // String: "$45"
console.log("4" - 2); // Number: 2
console.log("4px" - 2); // NaN
console.log(" -9 " + 5); // String: " -9 5"
console.log(" -9 " - 5); // Number: -14
console.log(null + 1); // Number: 1
console.log(undefined + 1); // NaN
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(" \t \n" - 2); // Number: -2

// The only one I missed was the last one. This uses a \t (tab) and \n (newline)
// I assumed they could not be evaluated as numbers. However, they are evaluated
// as zero in this case.

// **********************************************************

// 2. Which of the below are not giving the right answer?
// Why are they not correct?
// How can we fix them?
//
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;

console.log("\nLab Ex 3.1 Step 2. Output:");
console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);
// let lessThan2 = thirty < four; does not work due to comparing strings
// The string "30" evaluates less than the string "4"
// If it were to compare numbers then it would evaluate correctly

// **********************************************************

// 3. Which of the following console.log messages will print? Why?
console.log("\nLab Ex 3.1 Step 3. Output:");
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true"); // Yes - a valid string is a truthy value
if (null) console.log("null is true");
if (-1) console.log("negative is true"); // Yes - numbers are truthy values +ve & -ve
if (1) console.log("positive is true"); // Yes - numbers are truthy values +ve & -ve

// **********************************************************

// 4. Rewrite this if using the ternary/conditional operator '?'.
// Test it with different values for a and b.
// What does the ‘+=’ do?
let a = 20,
  b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

console.log("\nLab Ex 3.1 Step 4. Output:");
console.log(`Output using if: ${result}`);

a = 1;
b = 4;
result = `${a} + ${b} is `;
result += a + b < 10 ? "less than 10" : "greater than 10";
console.log(`Output using ternary: ${result}`);

// **********************************************************

// 5. Rewrite the following function using:
// a) function expression syntax, and
// b) arrow function syntax.
// Test each version to make sure they work the same.
function getGreeting(name) {
  return "Hello " + name + "!";
}

console.log("\nLab Ex 3.1 Step 5. Output:");
console.log("Output Example: " + getGreeting("Tommy"));

// Using function expression
const greeter = function (name) {
  return "Hello " + name + "!";
};

console.log("Output Function Expression: " + greeter("Tommy"));

// Using arrow functions
const greetMe = (name) => "Hello " + name + "!";
console.log("Output Arrow Function: " + greetMe("Tommy"));

// Each version of the function works the same way.

// **********************************************************

// 6.
// a) Complete the inigo object by adding a lastName property and including
//    it in the greeting.

// b) Complete getCatchPhrase so that if the person argument has 6 fingers,
//    it instead prints his famous catch phrase to the console. HINT: see
//    https://www.imdb.com/title/tt0093779/characters/nm0001597.

// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) => {
    if (person.numFingers == 6) {
      return "You killed my father. Prepare to die.";
    } else {
      return "Nice to meet you.";
    }
  },
};

console.log("\nLab Ex 3.1 Step 6. Output:");
inigo.greeting(westley);
inigo.greeting(rugen);

// **********************************************************

// 7. The following object represents a basketball game and keeps track of the score as the
//    game progresses.
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of
//    the example code works
// b) Add a new method to print the full time final score
// c) Add a new object property to keep track of the number of fouls and a method to
//    increment it, similar but separate to the score. Include the foul count in the half time and
//    full time console messages
// d) Test your object by chaining all the method calls together in different combinations.
const basketballGame = {
  score: 0,
  fouls: 0,
  foul() {
    this.fouls++;
    console.log(
      `Oh No! Foul! \t\t\t\t\t Score: ${this.score} Fouls: ${this.fouls}`
    );
    return this;
  },
  freeThrow() {
    this.score++;
    console.log(
      `Won a free throw! \t Points: 1 \t\t Score: ${this.score} Fouls: ${this.fouls}`
    );
    return this;
  },
  basket() {
    this.score += 2;
    console.log(
      `Scored a Basket! \t Points: 2 \t\t Score: ${this.score} Fouls: ${this.fouls}`
    );
    return this;
  },
  threePointer() {
    this.score += 3;
    console.log(
      `Lobbed a 3 pointer! \t Points: 3 \t\t Score: ${this.score} Fouls: ${this.fouls}`
    );
    return this;
  },
  halfTime() {
    console.log(
      `***** HALF-TIME ***** \t\t\t\t SCORE: ${this.score} FOULS: ${this.fouls}`
    );
    return this;
  },
  fullTime() {
    console.log(
      `***** FULL-TIME ***** \t\t\t\t SCORE: ${this.score} FOULS: ${this.fouls}`
    );
    return this;
  },
};
//modify each of the above object methods to enable function chaining as below:

console.log("\nLab Ex 3.1 Step 7. Output:");

basketballGame
  .basket()
  .freeThrow()
  .foul()
  .freeThrow()
  .basket()
  .foul()
  .threePointer()
  .halfTime()
  .basket()
  .freeThrow()
  .foul()
  .basket()
  .basket()
  .threePointer()
  .foul()
  .threePointer()
  .freeThrow()
  .fullTime();

// **********************************************************

// 8. The object below represents a single city.
// a) Write a function that takes an object as an argument and uses a for...in loop to access
//    and print to the console each of those object properties and their values. Test it using
//    the sydney object below.
// b) Create a new object for a different city with different properties and call your function
//    again with the new object.
const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const auckland = {
  name: "Auckland",
  population: 1_657_000,
  state: "New Zealand",
  founded: "26 November 1842",
  timezone: "Pacific/Auckland",
};

console.log("\nLab Ex 3.1 Step 8. Output:");

function printCity(city) {
  for (const [key, value] of Object.entries(city)) {
    console.log(`Key: ${key}\t\tValue: ${value}`);
  }
}

console.log("First City: Sydney");
printCity(sydney);
console.log("First City: Auckland");
printCity(auckland);

// **********************************************************

// 9. Use the following variables to understand how JavaScript stores objects by reference.
// a) Create a new moreSports variable equal to teamSports and add some new sport
//    values to it (using push and unshift)
// b) Create a new dog2 variable equal to dog1 and give it a new value
// c) Create a new cat2 variable equal to cat1 and change its name property
// d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
//    changed? Why?
// e) Change the way the moreSports and cat2 variables are created to ensure the
//    originals remain independent
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };

console.log("\nLab Ex 3.1 Step 9. Output:");
console.log(`teamSports before: ${teamSports}`);

let moreSports = teamSports;

console.log(`moreSports before: ${moreSports}`);

moreSports.push("Snowboarding");
console.log(`moreSports after pushing: ${moreSports}`);
console.log(`teamSports after pushing: ${teamSports}`);

moreSports.unshift("Motor Sports");
console.log(`moreSports after unshift: ${moreSports}`);
console.log(`teamSports after unshift: ${teamSports}`);

console.log(`dog1 original value: ${dog1}`);

console.log("dog2 created: dog2 = dog1;");
let dog2 = dog1;

console.log(`dog2 original value: ${dog2}`);
dog2 = "Buster";

console.log(`dog2 changed: dog2 = "Buster";`);
console.log(`dog2 changed value: ${dog2}`);
console.log(`dog1 original? value: ${dog1}`);

console.log("cat1 original value:");
for (const [key, value] of Object.entries(cat1)) {
  console.log(`Key: ${key}\t\tValue: ${value}`);
}

console.log("cat2 created: cat2 = cat1;");
let cat2 = cat1;

console.log(`cat2 original value:`);
for (const [key, value] of Object.entries(cat2)) {
  console.log(`Key: ${key}\t\tValue: ${value}`);
}

console.log(`cat2 name changed: cat2.name = "Scratchy";`);
cat2.name = "Scratchy";

console.log(`cat2 changed value:`);
for (const [key, value] of Object.entries(cat2)) {
  console.log(`Key: ${key}\t\tValue: ${value}`);
}

console.log("cat1 after value:");
for (const [key, value] of Object.entries(cat1)) {
  console.log(`Key: ${key}\t\tValue: ${value}`);
}

// **********************************************************

// 10. The following constructor function creates a new Person object with the given name and
//     age values.
// a) Create a new person using the constructor function and store it in a variable
// b) Create a second person using different name and age values and store it in a separate
//    variable
// c) Print out the properties of each person object to the console
// d) Rewrite the constructor function as a class called PersonClass and use it to create a
//    third person using different name and age values. Print it to the console as well.
// e) Add a canDrive method to both the constructor function and the class that returns true
//    if the person is old enough to drive.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
  this.canDrive = age > 14;
}

let Sammy = new Person("Sammy", 32);
let Jonny = new Person("Jonny", 12);

console.log("\nLab Ex 3.1 Step 9. Output:");
console.log("1st Person Object:");
for (const [key, value] of Object.entries(Sammy)) {
  console.log(`Key: ${key}\t\tValue: ${value}`);
}
console.log("2nd Person Object:");
for (const [key, value] of Object.entries(Jonny)) {
  console.log(`Key: ${key}\t\tValue: ${value}`);
}

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = age > 14;
  }
}

let Molly = new PersonClass("Molly", 23);

console.log("3rd Person (PersonClass) Object:");
for (const [key, value] of Object.entries(Molly)) {
  console.log(`Key: ${key}\t\tValue: ${value}`);
}
