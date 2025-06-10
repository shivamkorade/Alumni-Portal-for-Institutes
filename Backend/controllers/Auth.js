const OTP = require("../models/OTP");
const SocialMediaAccounts = require("../models/SocialMediaAccounts");
const AcademicDetails = require("../models/AcademicDetails");
const ContactDetails = require("../models/ContactDetails");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploder");
const otpGenerator = require("otp-generator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    const isUserPresent = await User.findOne({ email: email });

    if (isUserPresent) {
      return res.status(400).json({
        success: false,
        message: "User is already registered.",
      });
    }

    let otp = otpGenerator.generate(6, {
      lowerCaseAlphabets: false,
      upperCaseAlphabets: false,
      specialChars: false,
    });

    let result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialchars: false,
      });

      result = await OTP.findOne({ otp: otp });
    }

    const response = await OTP.create({
      email: email,
      otp: otp,
    });

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
      data: otp,
    });
  } catch (error) {
    console.error("Error in sening OTP.", error);
    return res.status(500).json({
      success: false,
      message: "Error while sending OTP.",
      error: error.message,
    });
  }
};

exports.signIn = async (req, res) => {
  try {
    const {
      email,
      password,
      confirmPassword,
      accountType,
      enrollmentNo,
      fullName,
      mothersName,
      spousesName,
      gender,
      dateOfBirth,
      course,
      stream,
      yearOfAdmission,
      yearOfPassing,
      mobileNo,
      alternateMobileNo,
      officialEmail,
      workingStatus,
      currentAddress,
      permanentAddress,
      country,
      state,
      city,
      linkedIn,
      facebook,
      instagram,
      websites,
      // otp,
    } = req.body;

    if (
      !email ||
      !password ||
      !confirmPassword ||
      !accountType ||
      !enrollmentNo ||
      !fullName ||
      !mothersName ||
      !gender ||
      !dateOfBirth ||
      !course ||
      !stream ||
      !yearOfAdmission ||
      !yearOfPassing ||
      !mobileNo ||
      !officialEmail ||
      !workingStatus ||
      !currentAddress ||
      !permanentAddress ||
      !country ||
      !state ||
      !city ||
      !linkedIn
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the details."
      });
    }

    const profilePicture = req.files?.profilePicture;

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm password does not match.",
      });
    }

    const isUserPresent = await User.findOne({ email: email });

    if (isUserPresent) {
      return res.status(400).json({
        success: false,
        message: "User already registered.",
      });
    }

    // Find the recent OTP for the particulate email
    // const recentOTP = await OTP.findOne({ email }).sort({
    //   createdAt: -1,
    // });

    // console.log("Array is ", recentOTP);

    // if (!recentOTP.otp) {
    //   return res.status(500).json({
    //     success: false,
    //     message: "OTP is not present.",
    //   });
    // }

    // Chekck OTP is valid or not
    // if (recentOTP.otp !== otp) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid OTP.",
    //   });
    // }

    let approved = "";
    accountType === "Admin" ? (approved = true) : (approved = false);

    // Create entry for the Academic Details fo the user
    const academicDetails = await AcademicDetails.create({
      course: course,
      stream: stream,
      yearOfAdmission: yearOfAdmission,
      yearOfPassing: yearOfPassing,
    });

    // Create entry for the Contact Details of the user
    const contactDetails = await ContactDetails.create({
      mobileNo: mobileNo,
      alternateMobileNo: alternateMobileNo,
      officialEmail: officialEmail,
      currentAddress: currentAddress,
      permanentAddress: permanentAddress,
      country: country,
      state: state,
      city: city,
    });

    // Create entry for the Social Media Accounts of the user
    const socialMediaAccounts = await SocialMediaAccounts.create({
      linkedIn: linkedIn,
      facebook: facebook,
      instagram: instagram,
      websites: websites,
    });

    // Upload user profile image
    const response = await uploadImageToCloudinary(
      profilePicture,
      process.env.FOLDER_NAME
    );

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create entry for the user
    const user = await User.create({
      email: email,
      password: hashedPassword,
      accountType: accountType,
      spousesName: spousesName,
      workingStatus: workingStatus,
      fullName: fullName,
      enrollmentNo: enrollmentNo,
      mothersName: mothersName,
      gender: gender,
      dateOfBirth: dateOfBirth,
      profilePicture: response?.secure_url,
      approved: approved,
      academicDetails: academicDetails._id,
      contactDetails: contactDetails._id,
      socialMediaAccounts: socialMediaAccounts._id,
    });

    return res.status(200).json({
      success: true,
      message: "User is registered successfully.",
      data: user,
    });
  } catch (error) {
    console.error("Error while registering user.", error);
    return res.status(500).json({
      success: false,
      message: "User cant not be registered.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check user is present and populate all referenced fields
    const userDetails = await User.findOne({ email: email })
      .populate('academicDetails')
      .populate('contactDetails')
      .populate('socialMediaAccounts')
      .populate('jobPost')
      .exec();

    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "Invalid user.",
      });
    }

    if (await bcrypt.compare(password, userDetails.password)) {
      // Create payload for the token
      const payload = {
        email: email,
        id: userDetails._id,
        accountType: userDetails.accountType,
      };

      // Create token
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      // Add token to userDetails
      userDetails.token = token;
      userDetails.password = undefined;

      // Create options for the cookie
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      // Prepare the response data with populated fields
      const responseData = {
        _id: userDetails._id,
        email: userDetails.email,
        accountType: userDetails.accountType,
        workingStatus: userDetails.workingStatus,
        fullName: userDetails.fullName,
        enrollmentNo: userDetails.enrollmentNo,
        mothersName: userDetails.mothersName,
        spousesName: userDetails.spousesName,
        gender: userDetails.gender,
        dateOfBirth: userDetails.dateOfBirth,
        profilePicture: userDetails.profilePicture,
        approved: userDetails.approved,
        token: token,
        academicDetails: userDetails.academicDetails || null,
        contactDetails: userDetails.contactDetails || null,
        socialMediaAccounts: userDetails.socialMediaAccounts || null,
        jobPost: userDetails.jobPost || [],
        createdAt: userDetails.createdAt,
        updatedAt: userDetails.updatedAt
      };

      return res.cookie("token", token, options).status(200).json({
        success: true,
        message: "User logged in successfully.",
        data: responseData,
        token: token,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Password is incorrect.",
      });
    }
  } catch (error) {
    console.error("Error while logging in:", error);
    return res.status(500).json({
      success: false,
      message: "Login failure! Please try again.",
    });
  }
};
