let firstNum = "";
let secondNum = "";
let operator = "";
// let numbers;
let currentDisplay = "";
const numberRegEx = /^\d{1}|[.]/;

// get all .btn elements in an array
const buttons = document.querySelectorAll(".btn");

// add an event listener to each button .btn
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(button.textContent);
    calculate(button.textContent);
  });
});

const calculate = (input) => {
  // check if input is number
  if (numberRegEx.exec(input)) {
    // if number add to display and store
    if (currentDisplay === "0") {
      currentDisplay = input;
    } else {
      currentDisplay += input;
    }
  } else if (input === "Ac") {
    // ALL CLEAR clear the display
    currentDisplay = "0";
  } else if (input === "C") {
    // Remove last digit
    currentDisplay = currentDisplay.substring(0, currentDisplay.length - 1);
  } else {
    if (operator === "") {
      console.log("first num");
      operator = input;
      firstNum = currentDisplay;
      currentDisplay = firstNum + " " + input + " ";
    } else {
      if (input === "=") {
        // calculate result
        secondNum = currentDisplay.substring(currentDisplay.lastIndexOf(" "));

        switch (operator) {
          case "/": {
            fetch(`/calc/divide?num1=${firstNum}&num2=${secondNum}`)
              .then((data) => {
                return data.json();
              })
              .then((json) => {
                updateDisplay(json.result);
              });
            break;
          }
          case "*": {
            fetch(`/calc/multiply?num1=${firstNum}&num2=${secondNum}`)
              .then((data) => {
                return data.json();
              })
              .then((json) => {
                updateDisplay(json.result);
              });
            break;
          }

          case "+": {
            fetch(`/calc/add?num1=${firstNum}&num2=${secondNum}`)
              .then((data) => {
                return data.json();
              })
              .then((json) => {
                updateDisplay(json.result);
              });
            break;
          }

          case "-": {
            fetch(`/calc/subtract?num1=${firstNum}&num2=${secondNum}`)
              .then((data) => {
                return data.json();
              })
              .then((json) => {
                updateDisplay(json.result);
              });
            break;
          }

          default: {
            break;
          }
        }
        operator = "";
        firstNum = "";
        secondNum = "";
      }
    }
  }
  updateDisplay(currentDisplay);
};

const updateDisplay = (text) => {
  document.querySelector(".calc-display").innerHTML = text;
};
