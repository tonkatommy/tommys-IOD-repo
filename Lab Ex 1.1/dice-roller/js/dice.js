function roll() {
  var randomNumber = getNumber();
  return randomNumber;
}

//Prints dice roll to the page

function printNumber(number) {
  var diceDiv = document.getElementById("dice");
  diceDiv.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function () {
  var result = roll();
  printNumber(result);
  test();
};

function getNumber() {
  var sides = parseInt(document.getElementById("sides").value);
  var num = Math.floor(Math.random() * sides) + 1;
  return num;
}

function test() {
  console.log(getNumber());
}
