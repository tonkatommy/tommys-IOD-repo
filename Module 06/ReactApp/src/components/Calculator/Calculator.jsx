import { useState } from "react";
import { CalcInput } from "./CalcInput";
import { CalcOperator } from "./CalcOperator";

export const Calculator = (props) => {
  const [result, setResult] = useState(0);

  const calculateResult = (e) => {
    e.preventDefault();
    // Do calculations here?
    const num1 = e.target.num1.value;
    const num2 = e.target.num2.value;
    const operator = e.target.operator.value;

    switch (operator) {
      case "+":
        setResult(parseFloat(num1) + parseFloat(num2));
        break;

      case "-":
        setResult(num1 - num2);
        break;

      case "/":
        setResult(Math.round(num1 / num2));
        break;

      case "*":
        setResult(num1 * num2);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className="calcForm">
        <form onSubmit={calculateResult}>
          <CalcInput id={"num1"} text={"Number 1:"}></CalcInput>
          <CalcOperator></CalcOperator>
          <CalcInput id={"num2"} text={"Number 2:"}></CalcInput>
          <button onClick={() => calculateResult(num1, num2, operator)}>=</button>
        </form>
        <div>
          <label htmlFor="result">Result:</label>
          <input type="number" id="result" value={result} />
        </div>
      </div>
    </>
  );
};
