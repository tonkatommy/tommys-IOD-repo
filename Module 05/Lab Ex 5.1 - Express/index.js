const express = require("express");
const app = express();
const app2 = express();
const port = 3000;
const port2 = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

app2.get("/", (req, res) => {
  res.send("Hello World 2!");
});

app2.listen(port2, () => {
  console.log(`Example app listening
at http://localhost:${port2}`);
});
