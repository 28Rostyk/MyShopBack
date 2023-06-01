const Joi = require("joi");

const userValidation = Joi.object({
  password: Joi.string(),
  email: Joi.string().email().required(),
});

module.exports = userValidation;