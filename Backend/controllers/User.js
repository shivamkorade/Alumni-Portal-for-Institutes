const User = require("../models/User");
const AcademicDetails = require("../models/AcademicDetails");
const ContactDetails = require("../models/ContactDetails");
const SocialMediaAccounts = require("../models/SocialMediaAccounts");
const { uploadImageToCloudinary } = require("../utils/imageUploder");
const JobPost = require("../models/JobPost");
require("dotenv").config();

exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      firstName,
      lastName,
      personalEmail,
      mothersName,
      fathersName,
      gender,
      dateOfBirth,
      academicDetails,
      contactDetails,
      socialMediaAccounts,
    } = req.body;

    // Find User
    const user = await User.findById(userId);

    if (!user) {
      console.error("User not found.");
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    user.personalEmail = personalEmail || user.personalEmail;
    user.mothersName = mothersName || user.mothersName;
    user.fathersName = fathersName || user.fathersName;
    user.gender = gender || user.gender;
    user.dateOfBirth = dateOfBirth || user.dateOfBirth;

    // Update academidDetails
    if (academicDetails) {
      await AcademicDetails.findByIdAndUpdate(
        user.academicDetails,
        {
          $set: academicDetails,
        },
        { new: true }
      );
    }

    if (contactDetails) {
      await ContactDetails.findByIdAndUpdate(
        user.contactDetails,
        {
          $set: contactDetails,
        },
        { new: true }
      );
    }

    if (socialMediaAccounts) {
      await SocialMediaAccounts.findByIdAndUpdate(
        user.socialMediaAccounts,
        {
          $set: socialMediaAccounts,
        },
        { new: true }
      );
    }

    // Save updated user data
    await user.save();

    console.log("User data updated successfully.", user);
    return res.status(200).json({
      success: true,
      message: "User data updated successfully.",
      data: user,
    });
  } catch (error) {
    console.error("Error while updating User Profile.", error);
    return res.status(500).json({
      success: false,
      message: "Error while updating User Profile.",
    });
  }
};

exports.getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const userDetails = await User.findById(userId)
      .populate("academicDetails")
      .populate("contactDetails")
      .populate("socialMediaAccounts")
      .exec();

    if (!userDetails) {
      console.error("User not found.");
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    console.log("User details found successfully.", userDetails);
    return res.status(200).json({
      success: true,
      message: "User details found successfully.",
      data: userDetails,
    });
  } catch (error) {
    console.error("Error while fetching User data.", error);
    return res.status(500).json({
      success: false,
      message: "Error while fetching User data.",
    });
  }
};

exports.updateProfilePicture = async (req, res) => {
  try {
    const userId = req.user.id;

    const profileImage = req.files.profileImage;

    const user = await User.findById(userId);

    if (!user) {
      console.error("User not found.");
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    if (!profileImage) {
      console.error("Please upload profile picture.");
      return res.status(400).json({
        success: false,
        message: "Please upload profile picture.",
      });
    }

    // Upload profileImage to cloudinary
    const response = await uploadImageToCloudinary(
      profileImage,
      process.env.FOLDER_NAME
    );

    if (!response) {
      console.error("Error in uploading profile picture.");
      return res.status(500).json({
        success: false,
        message: "Error in uploading profile picture.",
      });
    }

    user.profileImage = response.secure_url || user.profileImage;

    // Save user
    await user.save();

    console.log("Profile picture updated successfully.", response.secure_url);
    return res.status(200).json({
      success: true,
      message: "Profile picture updated successfully.",
      data: user,
    });
  } catch (error) {
    console.error("Error in updating profile picture.", error);
    return res.status(500).json({
      success: false,
      message: "Error in updating profile picture.",
    });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      console.error("User not found.");
      return res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    await AcademicDetails.findByIdAndDelete(user.academicDetails);

    await ContactDetails.findByIdAndDelete(user.contactDetails);

    await SocialMediaAccounts.findByIdAndDelete(user.socialMediaAccounts);

    // Delete All JobPosts releated to that User
    const jobPosts = await JobPost.find({ user: user._id });

    for (const jobPost of jobPosts) {
      await JobPost.findByIdAndDelete(jobPost._id);
    }

    // Delete User
    await User.findByIdAndDelete(userId);

    console.log("User deleted successfully.");
    return res.status(200).json({
      success: true,
      message: "User deleted successfully.",
    });
  } catch (error) {
    console.error("Error in Profile deletion.", error);
    return res.status(500).json({
      success: false,
      message: "Error in profile deletion.",
    });
  }
};
