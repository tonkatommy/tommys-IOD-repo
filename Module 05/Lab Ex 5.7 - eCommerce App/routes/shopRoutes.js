const express = require("express");
const shopRouter = express.Router();
const shopController = require("../controllers/shopController");

shopRouter.get("/products", shopController.get_products);
shopRouter.get("/categories", shopController.get_categories);

module.exports = shopRouter;
