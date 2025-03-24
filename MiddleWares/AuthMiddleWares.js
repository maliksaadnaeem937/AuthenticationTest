const isAuthenticated = require("../MiddleWares/authentication.js");
const verifyOtp = require("../MiddleWares/verifyotp.js");
const postLogin = require("../MiddleWares/postLogin.js");

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
