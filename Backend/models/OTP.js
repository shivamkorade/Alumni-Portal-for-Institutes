const mongoose = require("mongoose");
const { mailSender } = require("../utils/mailSender");

const OTPSchema = new mongoose.Schema({
  personalEmail: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 5,
  },
});

const sendVerificationEmail = async (personalEmail, otp) => {
  try {
    const mailResponse = await mailSender(
      personalEmail,
      "Verification Email !",
      otp
    );

    console.log("Email sent successfully.", mailResponse.response);
  } catch (error) {
    console.error("Error occured while sending verification email.", error);
    throw error;
  }
};

OTPSchema.pre("save", async function (next) {
  console.log("New document saved to database.");

  // When new document is created then only send the email
  if (this.isNew) {
    await sendVerificationEmail(this.personalEmail, this.otp);
  }

  next();
});

const OTP = mongoose.model("OTP", OTPSchema);
module.exports = OTP;
