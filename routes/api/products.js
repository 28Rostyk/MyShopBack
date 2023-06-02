const express = require("express");
const { getProducts } = require("../../controllers");
const { ctrlWrapper } = require("../../Helpers");

const router = express.Router();

router.post("/", ctrlWrapper(getProducts));

module.exports = router;
