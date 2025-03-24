
const MyError = require("./Error.js");
const AuthHelper=require("../Helpers/AuthHelper.js");


const generateTokenResponse = async (req, res, next) => {
  try {
    const { verifiedUser } = req;
    if (!verifiedUser) {
      return next();
    }
    const accessToken = AuthHelper.generateAccessToken({
      id: verifiedUser.id,
      email: verifiedUser.email,
      role: verifiedUser.role,
    });

    const refreshToken = AuthHelper.generateRefreshToken({
      id: verifiedUser.id,
      email: verifiedUser.email,
      role: verifiedUser.role,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).json({
      success: true,
      message: "Login Successful!",
      user: {
        id: verifiedUser.id,
        email: verifiedUser.email,
        role: verifiedUser.role,
      },
    });
  } catch (e) {
    return MyError.errorMiddleWare(e, res);
  }
};

module.exports =  generateTokenResponse ;
