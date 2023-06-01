const { Order } = require("../../models");
const HttpError  = require("../../Helpers/HttpError");

const addOrder = async (req, res) => {
  const {
    owner,
    customerName,
    customerLocation,
    shop,
    products,
    customerPhone,
    priceAll,
  } = req.body;

  const data = await Order.create({
    customerName,
    customerLocation,
    shop,
    products,
    customerPhone,
    priceAll,
    owner,
  });
  if (!data) {
    throw HttpError(400);
  }
  res.status(201).json(owner);
};

module.exports = addOrder;
