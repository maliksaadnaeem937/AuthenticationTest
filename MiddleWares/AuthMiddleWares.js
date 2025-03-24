const isAuthenticated = require("../MiddleWares/authentication.js");
const verifyOtp = require("../MiddleWares/verifyotp.js");
const postRegister = require("../MiddleWares/postRegister.js");
const postLogin = require("../MiddleWares/postLogin.js");
const sendOTP = require("../Controllers/sendOTP.js");

class AuthMiddleware {
  static isAuthenticated = isAuthenticated;
  static verifyOtp = verifyOtp;
  static registerUser = postRegister;
  static loginUser = postLogin;
  static sendOTP = sendOTP;
}

module.exports = AuthMiddleware;
