const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../../models");
const HttpError = require("../../Helpers/HttpError");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { password } = req.body;
  const user = await User.findOne({ password });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 1);

  const result = await User.create({
    ...req.body,
    password: hashPassword,
  });

  console.log(result);

  const payload = {
    id: result._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

  await User.findByIdAndUpdate(result._id, { token });

  res.status(201).json({
    user: {
      email: result.email,
      token,
    },
  });
};

module.exports = register;
