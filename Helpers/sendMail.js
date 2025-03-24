const nodemailer = require("nodemailer");
const MyError = require("../MiddleWares/Error.js");
const transporter = require("./transporter.js");
const AuthHelper = require("../Helpers/AuthHelper.js");

const sendEmail = async (to) => {
  const otp = AuthHelper.generateOTP();
  try {
    const info = await transporter.sendMail({
      from: `"Saad Web" <${process.env.EMAIL_USER}>`, // Sender
      to, // Recipient
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
      html: `<h3>Your OTP code is: <b>${otp}</b></h3><p>This code is valid for 5 minutes.</p>`,
    });

    console.log("Email sent:", info.messageId);
    return otp;
  } catch (error) {
    throw new MyError(500, "Email Sending Failed!");
  }
};

// Export the function
module.exports = sendEmail;
