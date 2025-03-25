const isAuthenticated = require("./authentication.js");
const verifyOtp = require("./verifyotp.js");
const postLogin = require("./postLogin.js");

class AuthMiddleware {
  static isAuthenticated = isAuthenticated;
  static verifyOtp = verifyOtp;
  static loginUser = postLogin;
}

module.exports = {
  isAuthenticated,
  verifyOtp,
  loginUser: postLogin,
};
