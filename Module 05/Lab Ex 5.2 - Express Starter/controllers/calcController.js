module.exports.get_add = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 + number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

module.exports.get_subtract = (req, res) => {
  // res.send("Subtract");
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 - number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

module.exports.get_divide = (req, res) => {
  // res.send("Divide");
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 / number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};

module.exports.get_multiply = (req, res) => {
  // res.send("Multiply");
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = number1 * number2;
  console.log(sum);
  res.status(200);
  res.json({ result: sum });
};
