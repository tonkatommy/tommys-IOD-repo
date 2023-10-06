const express = require("express");
// Import all marvel routes
const marvelRoutes = require("./routes/marvelRoutes");
// Import all calculator routes
const calcRoutes = require("./routes/calcRoutes");
const app = express();
const port = 3000;

// Map all marvel routes
app.use("/marvel", marvelRoutes);
// Map all calculator routes
app.use("/calc", calcRoutes);

// Map public folder
app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
