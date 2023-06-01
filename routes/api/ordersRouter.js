const express = require("express");
const ordersRouter = express.Router();

const { authenticate } = require("../../middlewares");

const controllers = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");


ordersRouter.get("/", ctrlWrapper(controllers.getAllOrders));

// ordersRouter.get("/auth", authenticate, ctrlWrapper(controllers.getAllOrdersAuth));

ordersRouter.post("/", ctrlWrapper(controllers.addOrder));


module.exports = ordersRouter;
