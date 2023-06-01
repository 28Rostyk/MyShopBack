const HttpError  = require("../../Helpers/HttpError");
const { Order } = require("../../models");

const getAllOrdersAuth = async (req, res) => {
  const { email } = req.user;

  const data = await Order.find({ owner: email });

  if (!data) {
    throw HttpError(404, "Your not have order");
  }

  res.status(200).json(data);
};

module.exports = getAllOrdersAuth;
