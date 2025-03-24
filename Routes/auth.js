const express = require("express");

const AuthMiddleware = require("../MiddleWares/AuthMiddleWares.js");

const AuthController = require("../Controllers/AuthController.js");

const router = express.Router();

// auth routes
router.post("/register", AuthController.registerUser);

router.post(
  "/login",
  AuthMiddleware.loginUser,
  AuthController.createAccessRefTokenAndSendResponse
);
router.post(
  "/logout",
  AuthMiddleware.isAuthenticated,
  AuthController.logoutUser
);

// otp routes
router.post(
  "/verify-otp",
  AuthMiddleware.verifyOtp,
  AuthController.createAccessRefTokenAndSendResponse
);

router.post("/resend-otp", AuthController.sendRegistrationOTP);

// forget password routes
router.post(
  "/forget-password",
  AuthMiddleware.isAuthenticated,
  AuthController.forgetPassword
);

router.post("/reset-password/:token", AuthController.resetForgetPassword);

router.post(
  "/resend-forget-password-email/:token",
  AuthController.resendForgetPasswordEmail
);

//  get requests

router.get(
  "/login",
  AuthMiddleware.isAuthenticated,
  AuthController.ifLoggedRevokeAcccess
);
router.get(
  "/register",
  AuthMiddleware.isAuthenticated,
  AuthController.ifLoggedRevokeAcccess
);

module.exports = router;
