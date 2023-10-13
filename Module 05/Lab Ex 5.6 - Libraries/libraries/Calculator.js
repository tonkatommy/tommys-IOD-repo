class Calculator {
  constructor() {
    this.id = Math.random() * 10000;
  }

  #log = (result) => {
    console.log(`[Calculator :${this.id}]:${result}`);
  };

  add(num1, num2) {
    const result = num1 + num2;
    this.#log(result);
    return result;
  }

  subtract(num1, num2) {
    const result = num1 - num2;
    this.#log(result);
    return result;
  }

  divide(num1, num2) {
    const result = num1 / num2;
    this.#log(result);
    return result;
  }

  multiply(num1, num2) {
    const result = num1 * num2;
    this.#log(result);
    return result;
  }
}

module.exports = Calculator;
