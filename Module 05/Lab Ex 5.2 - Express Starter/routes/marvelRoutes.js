const express = require("express");
const marvel = express.Router();

marvel.get("/spiderman", (req, res) => {
  res.send(
    '"No man can win every battle, but no man should fall without a struggle." - Peter Parker,  Spider-Man: Homecoming'
  );
});

marvel.get("/wolverine", (req, res) => {
  res.send("\"What they did to me, what I am, can't be undone.\" — 'The Wolverine' (2013) ");
});

module.exports = marvel;
