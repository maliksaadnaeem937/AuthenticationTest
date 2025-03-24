const createSaveVerifiedUser = require("./createSaveUser.js");
const generateOTP = require("./generateOtp.js");
const sendOTPMail = require("./sendMail.js");
const sendForgetPasswordMail = require("./sendPasswodForgetMail.js");
const jwt=require("jsonwebtoken");


const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.JWT_REFRESH_TOKEN_TIME }
  );
};
const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.JWT_ACCESS_TOKEN_TIME }
  );
};


class AuthHelper {
  static createSaveVerifiedUser = createSaveVerifiedUser;
  static generateOTP = generateOTP;
  static generateAccessToken = generateAccessToken;
  static generateRefreshToken = generateRefreshToken;
  static sendOTPMail = sendOTPMail;
  static sendForgetPasswordMail = sendForgetPasswordMail;
}
module.exports = AuthHelper;
