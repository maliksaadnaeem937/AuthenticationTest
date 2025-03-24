const MyError = require("./Error.js");
const { VerifiedUserModel } = require("../Models/user.js");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const bcrypt = require("bcryptjs");
const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await VerifiedUserModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.security.passwordHash))) {
      req.verifiedUser=user;
      return next();
    } else {
      throw new MyError(400, "Invalid Credentials!");
    }
  } catch (e) {
    return MyError.errorMiddleWare(e, res);
  }
};
module.exports = postLogin;
