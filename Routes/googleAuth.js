const express = require("express");
const passport = require("passport");
const AuthController = require("../Controllers/AuthController.js");
const GoogleAuthentication = require("../MiddleWares/registerWithPassport.js");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});
router.get("/login/success", (req, res) => {
  res.status(200).json({
    success: true,
    message: "success",
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login/failed",
    session: false,
  }),
  GoogleAuthentication.authenticateWithGoogle,
  AuthController.createAccessRefTokenAndSendResponse,
  GoogleAuthentication.registerWithGoogle,
  AuthController.createAccessRefTokenAndSendResponse
);

module.exports = router;
