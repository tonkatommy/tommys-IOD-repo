const express = require("express");
const calcRouter = express.Router();
const calcController = require("../controllers/calcController");

calcRouter.get("/add", calcController.get_add);

calcRouter.get("/subtract", calcController.get_subtract);

calcRouter.get("/divide", calcController.get_divide);

calcRouter.get("/multiply", calcController.get_multiply);

module.exports = calcRouter;
