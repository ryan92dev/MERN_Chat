const registerController = require("./registerCtrl");
const loginController = require("./loginCtrl");
const refreshTokenController = require("./refreshTokenCtrl");
const logoutController = require("./logoutCtrl");
const logoutAllController = require("./logoutAllCtrl");

module.exports = {
  register: registerController,
  login: loginController,
  refreshToken: refreshTokenController,
  logout: logoutController,
  logoutAll: logoutAllController,
};
