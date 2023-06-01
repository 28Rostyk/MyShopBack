const HttpError = require("../../Helpers/HttpError");
const { Coupons } = require("../../models");

const getAllCoupons = async (req, res) => {
  const data = await Coupons.find({}).sort();
  console.log(data);
  res.status(200).json({ data });
};

const addCoupon = async (req, res) => {
  const data = await Coupons.create({ ...req.body });
  if (!data) {
    throw HttpError(400);
  }
  res.status(201).json(data);
};

const deleteCoupon = async (req, res) => {
  const { id } = req.params;
  const data = await Coupons.findByIdAndDelete(id);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    message: `${data.name} deleted`,
  });
};

module.exports = {
  getAllCoupons,
  addCoupon,
  deleteCoupon,
};
