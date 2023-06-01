const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const { getShops } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(getShops));

module.exports = router;