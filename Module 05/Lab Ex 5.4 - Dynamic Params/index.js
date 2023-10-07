const express = require("express");
// Import all marvel routes
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

// parse requests of content-type - application/json
app.use(express.json());

// Map all marvel routes
app.use("/user", userRoutes);

// Map public folder
// app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
