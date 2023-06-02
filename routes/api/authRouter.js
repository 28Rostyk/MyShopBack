const express = require("express");

const { validateBody } = require("../../utils");

const userValidation = require("../../schemas/userValidation");
const ctrl = require("../../controllers/auth");
const { authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../Helpers");

const router = express.Router();

router.post(
  "/register",
  validateBody(userValidation),
  ctrlWrapper(ctrl.register)
);

router.post("/login", validateBody(userValidation), ctrlWrapper(ctrl.login));

router.get("/user", ctrlWrapper(ctrl.findUser));

router.get("/current", authenticate, ctrlWrapper(ctrl.current));

router.post("/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch("/", authenticate, ctrlWrapper(ctrl.patchChanges));

router.get("/finduser", ctrlWrapper(ctrl.findUser));

module.exports = router;
