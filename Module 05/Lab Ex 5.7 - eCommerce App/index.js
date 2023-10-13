const express = require("express");
// Import all calculator routes
const shopRoutes = require("./routes/shopRoutes");
const app = express();
const port = 3000; // Set the port number

const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Map all calculator routes
app.use("/shop", shopRoutes);

// Map public folder
app.use("/", express.static("public"));

// Make app listen on port set above
app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});
