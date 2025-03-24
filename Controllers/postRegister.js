const MyError = require("../MiddleWares/Error.js");
const User = require("../Classes/user.js");
const { sendOTPMail } = require("../Helpers/AuthHelper.js");

const postRegister = async (req, res, next) => {
  try {
    const user = new User();
    const { firstName, lastName, email, password } = req.body;
    user.setFirstName(firstName);
    user.setLastName(lastName);
    await user.setEmail(email);
    await user.setPassword(password);
    const otpCode = await sendOTPMail(email);
    user.setOtpCode(otpCode);
    await user.save();

    return res.status(200).json({
      timestamp: Date.now(),
      message: "email sent successfully!",
      status: 200,
    });
  } catch (e) {
    return MyError.errorMiddleWare(e, res);
  }
};
module.exports = postRegister;
