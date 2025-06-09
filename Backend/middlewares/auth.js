const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
  try {
    // Get token
    const token =
      req.body.token ||
      req.cookies.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token is missing.",
      });
    }

    try {
      const decodedPayload = jwt.verify(token, process.env.JWT_SECRET);

      // Add decodedPayload to the req body
      req.user = decodedPayload;
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Invalid token.",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error while verifying the token.",
    });
  }
};

// isStudent middleware
exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Student") {
      return res.status(200).json({
        success: true,
        message: "This is protected router for students only.",
      });
    }
    next();
  } catch (error) {
    console.log("User role is not verified.");
    return res.status(400).json({
      success: false,
      message: "Error while verifying the account Type.",
    });
  }
};

// isAlumini middleware
exports.isAlumini = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Alumini") {
      return res.status(200).json({
        success: true,
        message: "This is protected router for Alumini only.",
      });
    }
    next();
  } catch (error) {
    console.log("User role is not verified.");
    return res.status(400).json({
      success: false,
      message: "Error while verifying the account Type.",
    });
  }
};

// isAdmin middleware
exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Admin") {
      console.error("This is protected route for Admin only.");
      return res.status(200).json({
        success: true,
        message: "This is protected router for Admin only.",
      });
    }
    next();
  } catch (error) {
    console.error("User role is not verified.");
    return res.status(400).json({
      success: false,
      message: "Error while verifying the account Type.",
    });
  }
};

exports.isAdminOrAlumini = async (req, res, next) => {
  try {
    if (
      req.user.accountType === "Admin" ||
      req.user.accountType === "Alumini"
    ) {
      next();
    } else {
      console.error("Only Admin or Alumini can post jobs.");
      return res.status(400).json({
        success: false,
        message: "Only Admin or Alumini can post jobs.",
      });
    }
  } catch (error) {
    console.error("User role is not verified.");
    return res.status(500).json({
      success: false,
      message: "Error occur while verifying the account Type.",
    });
  }
};
