const current = require("./current");
const findUser = require("./findUser");
const login = require("./login");
const logout = require("./logout");
const patchChanges = require("./patchChanges");
const register = require("./register");

module.exports = {
  register,
  login,
  current,
  logout,
  patchChanges,
  findUser,
};
