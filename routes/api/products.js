const express = require("express");
const { getProducts } = require("../../controllers");
const { ctrlWrapper } = require("../../helpers");

const router = express.Router();

router.post("/", ctrlWrapper(getProducts));


module.exports = router;
