// console.log("Lab Ex 3.3 Step 1. Output: ");
// // 1. makeCounter below is a decorator function which creates and returns a function that
// //    increments a counter.
// // a) Create a second counter counter2 using the makeCounter function and test to see if
// //    it remains independent to counter1
// // b) Modify makeCounter so that it takes an argument startFrom specifying where the
// //    counter starts from (instead of always starting from 0)
// // c) Modify makeCounter to take another argument incrementBy, which specifies how
// //    much each call to counter() should increase the counter value by.
// function makeCounter(startFrom, incBy) {
//   let currentCount = startFrom - incBy;
//   return function () {
//     // currentCount = currentCount + incBy;
//     // console.log(currentCount);
//     return (currentCount += incBy);
//   };
// }
// let counter1 = makeCounter(3, 4);
// console.log("Counter1: " + counter1());
// console.log("Counter1: " + counter1());
// let counter2 = makeCounter(10, 20);
// console.log("Counter2: " + counter2());
// console.log("Counter2: " + counter2());
// console.log("Counter2: " + counter2());
// console.log("Counter2: " + counter2());
// console.log("Counter2: " + counter2());
// console.log("Counter1: " + counter1());

// console.log("\nLab Ex 3.3 Step 2. Output: ");

// *******************************************************************************************
// // 2. The following delayMsg function is intended to be used to delay printing a message until
// //    some time has passed.
// // a) What order will the four tests below print in? Why?
// // b) Rewrite delayMsg as an arrow function
// // c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// // d) Use clearTimeout to prevent the fifth test from printing at all.
// const delayMsg = (msg) =>
//   console.log(`This message will be printed after a delay: ${msg}`);
// setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
// setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
// setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
// delayMsg("#4: Not delayed at all");
// let fithTest = setTimeout(delayMsg, 10000, "#5: Delayed by 10000ms");
// clearTimeout(fithTest);

// console.log("\nLab Ex 3.3 Step 3. Output: ");

// *******************************************************************************************
// // 3. 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed,
// //    similar requests until there's a brief pause, then only executing the most recent of those
// //    requests. See https://www.techtarget.com/whatis/definition/debouncing
// //    It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server
// //    requests being initiated if a user clicks repeatedly on a button.
// //    Using the following code to test and start with:
// // a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// //    suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// //    pause, the most recent call to func should be executed and any others ignored.
// // b) Extend the debounce decorator function to take a second argument ms, which defines the
// //    length of the period of inactivity instead of hardcoding to 1000ms
// // c) Extend debounce to allow the original debounced function printMe to take an argument
// //    msg which is included in the console.log statement.
// function printMe() {
//   console.log("Printing Debounced Message including: " + arguments[0]);
// }
// //create this debounce function for a)

// const debounce = (origFunc, delay) => {
//   let timerId;
//   return (...args) => {
//     // const context = this;
//     clearTimeout(timerId);
//     timerId = setTimeout(() => origFunc.apply(this, args), delay);
//   };
// };

// printMe = debounce(printMe, 1000);

// // fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// // 1000ms of no calls
// setTimeout(printMe, 100, "1st debounce message");
// setTimeout(printMe, 200, "2nd debounce message");
// setTimeout(printMe, 300, "3rd debounce message");

// *******************************************************************************************
// console.log("\nLab Ex 3.3 Step 4. Output: ");
// // 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the
// //    sequence is the sum of the previous 2.
// //    e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// // a) Write a function printFibonacci() using setInterval that outputs a number in
// //    the Fibonacci sequence every second.
// // b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// //    calls to do the same thing
// // c) Extend one of the above functions to accept a limit argument, which tells it how many
// //    numbers to print before stopping.

// const printFib = (numLimit) => {
//   let num1 = 0;
//   let num2 = 1;
//   let numNext;
//   let numCount = 0;

//   let calc = setInterval(() => {
//     console.log(num1);
//     numNext = num1 + num2;
//     num1 = num2;
//     num2 = numNext;
//     numCount++;
//     if (numCount == numLimit) {
//       clearInterval(calc);
//     }
//   }, 1000);
// };

// printFib(5);

// const printFibTimeOuts = () => {};

// *******************************************************************************************
// // 5. The following car object has several properties and a method which uses them to print a
// //    description. When calling the function normally this works as expected, but using it from
// //    within setTimeout fails. Why?
// //  It loses 'this' context.
// console.log("\nLab Ex 3.3 Step 5. Output: ");
// let car = {
//   make: "Porsche",
//   model: "911",
//   year: 1964,
//   description() {
//     console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//   },
// };
// car.description(); //works
// setTimeout(car.description, 200); //fails
// // a) Fix the setTimeout call by wrapping the call to car.description() inside a
// //    function
// setTimeout(() => car.description(), 600); //works
// // b) Change the year for the car by creating a clone of the original and overriding it
// let car2 = { ...car, year: 2012 };

// setTimeout(() => car2.description(), 1000); //works

// // c) Does the delayed description() call use the original values or the new values from
// //    b)? Why?
// //      No it does not, it has made a clone referring to a different space in memory of the object.
// // d) Use bind to fix the description method so that it can be called from within
// //    setTimeout without a wrapper function
// const boundCar = car.description.bind(car);
// setTimeout(boundCar, 1400);

// // e) Change another property of the car by creating a clone and overriding it, and test that
// //    setTimeout still uses the bound value from d)
// let car3 = { ...car, year: 3232 };
// setTimeout(boundCar, 1800);

// *******************************************************************************************
// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can
//    be used to delay the call to that function by ms milliseconds.
// function multiply(a, b, c, d) {
//   console.log(a * b * c * d);
// }

// Function.prototype.delay = function (ms) {
//   const context = this;
//   return function () {
//     setTimeout(
//       (args, fn) => {
//         context.apply(fn, args);
//       },
//       ms,
//       arguments,
//       context
//     );
//   };
// };

// multiply.delay(1000)(5, 5, 2, 10); // prints 25 after 500 milliseconds
// a) Use the example multiply function below to test it with, as above, and assume that all
//    delayed functions will take two parameters
// b) Use apply to improve your solution so that delayed functions can take any number of
//    parameters
// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
//    delay prototype function still works.

// *******************************************************************************************
// 7. In JavaScript, the toString method is used to convert an object to a string representation.
//    By default, when an object is converted to a String, it returns a string that looks something
//    like [object Object].
//    However, we can define our own toString methods for custom objects to provide a more
//    meaningful string representation.

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// // a) Define a custom toString method for the Person object that will format and print
// //    their details

// Person.prototype.toString = function () {
//   const { name, age, gender } = this;
//   return `${name}, ${age}, ${gender}`;
// };

// const person1 = new Person("James Brown", 73, "male");
// console.log("person1: " + person1); //prints person1: [object Object]

// // b) Test your method by creating 2 different people using the below constructor function
// //    and printing them

// const person2 = new Person("Tommy Goodman", 37, "Male");
// console.log("person2: " + person2); //prints person1: [object Object]

// const person3 = new Person("Diana Prince", 26, "male");
// console.log("person3: " + person3); //prints person1: [object Object]

// // c) Create a new constructor function Student that uses call to inherit from Person and
// //    add an extra property cohort

// function Student(name, age, gender, cohort) {
//   Person.call(this, age, name, gender);
//   this.cohort = cohort;
// }

// // d) Add a custom toString for Student objects that formats and prints their details. Test
// //    with 2 students.

// Student.prototype.toString = function () {
//   const { name, age, gender, cohort } = this;
//   return `${name}, ${age}, ${gender}, ${cohort}`;
// };

// const student1 = new Student(
//   "Ottilie Piddock",
//   30,
//   "Female",
//   "Canadian Sudanese College"
// );
// console.log("Student1: " + student1); //prints person1: [object Object]
// const student2 = new Student(
//   "Alexa Adamsson",
//   43,
//   "Female",
//   "Institute of Teachers Education"
// );
// console.log("Student2: " + student2); //prints person1: [object Object]
// const student3 = new Student(
//   "Baxie Lane",
//   22,
//   "Male",
//   "Northwestern University"
// );
// console.log("Student3: " + student3); //prints person1: [object Object]
// const student4 = new Student(
//   "Brittaney Swindlehurst",
//   32,
//   "Female",
//   "Kitasato University"
// );
// console.log("Student4: " + student4); //prints person1: [object Object]

// *******************************************************************************************
// 8. The following DigitalClock class uses an interval to print the time every second once
//    started, until stopped.
// class DigitalClock {
//   constructor(prefix) {
//     this.prefix = prefix;
//   }
//   display() {
//     let date = new Date();
//     //create 3 variables in one go using array destructuring
//     let [hours, mins, secs] = [
//       date.getHours(),
//       date.getMinutes(),
//       date.getSeconds(),
//     ];
//     if (hours < 10) hours = "0" + hours;
//     if (mins < 10) mins = "0" + mins;
//     if (secs < 10) secs = "0" + secs;
//     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//   }
//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), 1000);
//   }
// }
// const myClock = new DigitalClock("my clock:");
// // myClock.start();

// // a) Create a new class PrecisionClock that inherits from DigitalClock and adds the
// //    parameter precision – the number of ms between 'ticks'. This precision parameter
// //    should default to 1 second if not supplied.

// class PrecisionClock extends DigitalClock {
//   constructor(prefix, precision = 1000) {
//     super(prefix);
//     this.precision = precision;
//   }
//   start() {
//     this.display();
//     this.timer = setInterval(() => this.display(), this.precision);
//   }
// }

// const myPreciseClock = new PrecisionClock("My Precise Clock: ", 500);
// // myPreciseClock.start();

// // b) Create a new class AlarmClock that inherits from DigitalClock and adds the
// //    parameter wakeupTime in the format hh:mm. When the clock reaches this time, it
// //    should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should
// //    default to 07:00 if not supplied.

// class AlarmClock extends DigitalClock {
//   constructor(prefix, wakeUpTime = "07:00") {
//     super(prefix);
//     this.wakeUpTime = wakeUpTime;
//   }
//   display() {
//     let date = new Date();
//     //create 3 variables in one go using array destructuring
//     let [hours, mins, secs] = [
//       date.getHours(),
//       date.getMinutes(),
//       date.getSeconds(),
//     ];
//     if (hours < 10) hours = "0" + hours;
//     if (mins < 10) mins = "0" + mins;
//     if (secs < 10) secs = "0" + secs;

//     console.log(`${this.prefix} ${hours}:${mins}:${secs}`);

//     if (`${hours}:${mins}` === this.wakeUpTime) {
//       this.wakeUp();
//     }
//   }
//   wakeUp() {
//     console.log(`WAKE UP TIME!!!`);
//     this.stop();
//   }
// }

// const myAlarmClock = new AlarmClock("My Alarm Clock: ", "13:50");
// myAlarmClock.start();

// *******************************************************************************************
// 9. We can delay execution of a function using setTimeout, where we need to provide both
//    the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a
//    random amount of time (between 1 and 20 seconds) and returns a promise we can use
//    via .then(), as in the starter code below
// b) If the random delay is even, consider this a successful delay and resolve the promise,
//    and if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value
// function randomDelay() {
//   const randTime = Math.floor(Math.random() * 20000);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (randTime % 2 === 0) {
//         resolve(randTime);
//       } else {
//         reject(randTime);
//       }
//     }, randTime);
//   });
// }
// randomDelay()
//   .then((num) =>
//     console.log(
//       `There appears to have been a delay of ${num / 1000} seconds.. PASSED!`
//     )
//   )
//   .catch((num) =>
//     console.log(
//       `There appears to have been a delay of ${num / 1000} seconds.. FAILED!`
//     )
//   );

// *******************************************************************************************
// 10.Fetch is a browser-based function to send a request and receive a response from a server,
//    which uses promises to handle the asynchronous response.
//    The below fetchURLData uses fetch to check the response for a successful status
//    code, and returns a promise containing the JSON sent by the remote server if successful
//    or an error if it failed. (To run this code in a node.js environment, follow the instructions in
//    the comments before the function.)
// a) Write a new version of this function using async/await
// b) Test both functions with valid and invalid URLs
// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
//    using Promise.all to combine the results.

//    run 'npm init' and accept all the defaults
//    run 'npm install node-fetch'
//    add this line to package.json after line 5: "type": "module",

import fetch from "node-fetch";
globalThis.fetch = fetch;

function fetchURLData(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
