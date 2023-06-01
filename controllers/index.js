const {
  current,
  login,
  logout,
  patchChanges,
  register,
  findUser,
} = require("./auth");
const { getAllCoupons, addCoupon, deleteCoupon } = require("./coupons");
const getShops = require("./shops");
const { getAllOrders, addOrder, getAllOrdersAuth } = require("./orders");
const getProducts = require("./products");

module.exports = {
  current,
  login,
  logout,
  patchChanges,
  register,
  getAllCoupons,
  addCoupon,
  deleteCoupon,
  getShops,
  getAllOrders,
  addOrder,
  getAllOrdersAuth,
  getProducts,
  findUser,
};
