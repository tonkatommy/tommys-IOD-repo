const express = require("express");
const calcRouter = express.Router();

calcRouter.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
});

calcRouter.get("/subtract", (req, res) => {
  res.send("Subtract");
});

calcRouter.get("/divide", (req, res) => {
  res.send("Divide");
});

calcRouter.get("/multiply", (req, res) => {
  res.send("Multiply");
});

module.exports = calcRouter;
