const express = require("express");
const couponsRouter = express.Router();

const controllers = require("../../controllers");

const ctrlWrapper = require("../../Helpers/ctrlWrapper");

couponsRouter.get("/", ctrlWrapper(controllers.getAllCoupons));

couponsRouter.post("/", ctrlWrapper(controllers.addCoupon));

couponsRouter.delete("/:id", ctrlWrapper(controllers.deleteCoupon));

module.exports = couponsRouter;
