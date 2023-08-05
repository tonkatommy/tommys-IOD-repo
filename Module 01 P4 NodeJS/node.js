function subtract(num1, num2) {
  return num1 - num2;
}

function addition(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

console.log(subtract(5, 3));
console.log(addition(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));

function greetUser() {
  let user = prompt("Please enter your name: ");
  console.log("Hello " + user);
}

greetUser();
