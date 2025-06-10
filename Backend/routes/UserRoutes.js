const express = require("express");
const router = express.Router();

const { sendOTP, signIn, login } = require("../controllers/Auth");

const { resetPasswordToken, resetPassword} = require("../controllers/ResetPassword");

router.post("/sign-in", signIn);
router.post("/login", login);
router.post("/sendotp", sendOTP);

router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);

module.exports = router;
