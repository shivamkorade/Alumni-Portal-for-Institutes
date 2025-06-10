const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    accountType: {
      type: String,
      required: true,
      enum: ["Student", "Alumini", "Admin"],
    },
    workingStatus: {
      type: String,
      required: true,
      enum: ["Employed", "Higher Studies", "Self Employed"],
    },
    fullName: {
      type: String,
      required: true,
    },
    enrollmentNo: {
      type: Number,
      required: true,
      trim: true,
    },
    mothersName: {
      type: String,
      required: true,
      trim: true,
    },
    spousesName: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
    approved: {
      type: Boolean,
      required: true,
      default: false,
    },
    token: {
      type: String,
    },
    resetPasswordExpires: {
			type: Date,
		},
    academicDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AcademicDetails",
      required: true,
    },
    contactDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ContactDetails",
      required: true,
    },
    socialMediaAccounts: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SocialMediaAccounts",
      required: true,
    },
    jobPost: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobPost",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
