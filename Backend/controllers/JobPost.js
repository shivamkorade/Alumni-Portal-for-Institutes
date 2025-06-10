const JobPost = require("../models/JobPost");
const { findByIdAndUpdate } = require("../models/OTP");
const User = require("../models/User");

exports.createJobPost = async (req, res) => {
  try {
    const {
      role,
      company,
      description,
      duration,
      link,
      salary,
      deadline,
      experience,
    } = req.body;

    const userId = req.user.id;

    // Validation
    if (
      !userId ||
      !role ||
      !company ||
      !description ||
      !duration ||
      !link ||
      !salary ||
      !deadline ||
      !experience
    ) {
      console.error("All fileds are required.");
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check user is present or not particular userId
    const user = await User.findById(userId);

    if (!user) {
      console.error("Invalid userId.");
      return res.status(400).json({
        success: false,
        message: "Invalid userId.",
      });
    }

    // Create Job post
    const jobPost = await JobPost.create({
      user: userId,
      role: role,
      company: company,
      description: description,
      duration: duration,
      link: link,
      salary: salary,
      deadline: deadline,
      experience: experience,
    });

    // Insert this job post in the user collection
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          jobPost: jobPost._id,
        },
      },
      { new: true }
    )
      .populate("jobPost")
      .exec();

    console.log("Updated user.", updatedUser);
    return res.status(200).json({
      success: true,
      message: "Job post created successfully.",
      data: jobPost,
    });
  } catch (error) {
    console.error("Error while creating Job post.", error);
    return res.status(500).json({
      success: false,
      message: "Error while creating Job post.",
    });
  }
};

exports.editJobPost = async (req, res) => {
  try {
    const {
      jobPostId,
      role,
      company,
      description,
      duration,
      link,
      salary,
      deadline,
      experience,
    } = req.body;

    const userId = req.user.id;

    if (
      !jobPostId ||
      !role ||
      !company ||
      !description ||
      !duration ||
      !link ||
      !deadline ||
      !salary ||
      !experience
    ) {
      console.error("All fileds are required.");
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Check user is present or not for particular userId
    const user = await User.findById(userId);

    if (!user) {
      console.error("Invalid userId.");
      return res.status(400).json({
        success: false,
        message: "Invalid userId.",
      });
    }

    // Check jobPost is present for the particulate jobPostId
    const jobPost = await JobPost.findById(jobPostId);

    if (!jobPost) {
      console.error("Invalid jobPostId.");
      return res.status(400).json({
        success: false,
        message: "Invalid jobPostId.",
      });
    }
    // Edit the jobPost
    const updatedJobPost = await JobPost.findByIdAndUpdate(
      jobPostId,
      {
        user: userId,
        role: role,
        company: company,
        description: description,
        duration: duration,
        link: link,
        deadline: deadline,
        salary: salary,
        experience: experience,
      },
      { new: true }
    );

    console.log("Job post updated successfully.", updatedJobPost);
    return res.status(200).json({
      success: true,
      message: "Job post updated successfully.",
      data: updatedJobPost,
    });
  } catch (error) {
    console.error("Error while editing Job Post.", error);
    return res.status(500).json({
      success: false,
      message: "Error while editing Job Post.",
    });
  }
};

exports.getAllJobPosts = async (req, res) => {
  try {
    const currentDate = new Date();

    const allJobPost = await JobPost.find({
      deadline: {
        $gte: currentDate,
      },
    }).populate("user");

    console.log("The active Job Posts are: ", allJobPost);
    return res.status(200).json({
      success: true,
      message: "All Job Posts fetched successfully.",
      data: allJobPost,
    });
  } catch (error) {
    console.error("Error in fetching all Job Post.", error);
    return res.status(500).json({
      success: false,
      message: "Error in fetching all Job Post.",
    });
  }
};

exports.deleteJobPost = async (req, res) => {
  try {
    const { jobPostId } = req.params;

    if (!jobPostId) {
      console.error("JobPost Id is required.");
      return res.status(400).json({
        success: false,
        message: "JobPost Id is required.",
      });
    }

    // Check Job Post is present for particular jobPostId or not
    const jobPost = await JobPost.findById(jobPostId);

    if (!jobPost) {
      console.error("JobPost not found.");
      return res.status(400).json({
        success: false,
        message: "JobPost not found.",
      });
    }

    // Delete Job Post
    await JobPost.findByIdAndDelete(jobPostId);

    // Remove Job Post reference from the User document
    await User.findByIdAndUpdate(
      jobPost.user,
      {
        $pull: {
          jobPost: jobPostId,
        },
      },
      { new: true }
    );

    console.log("JobPost deleted successfully.");
    return res.status(200).json({
      success: true,
      message: "JobPost deleted successfully.",
    });
  } catch (error) {
    console.error("Error in deleting Job Post.", error);
    return res.status(500).json({
      success: false,
      message: "Error in deleting Job Post.",
    });
  }
};

exports.deleteExpiredJobPost = async (req, res) => {
  try {
    const currentDate = new Date();

    const expiredJobPost = await JobPost.find({
      deadline: { $lt: currentDate },
    });

    if (expiredJobPost.length === 0) {
      console.log("No expired JobPost found.");
      return res.status(200).json({
        success: true,
        message: "No expired JobPost found.",
      });
    }

    for (const jobPost of expiredJobPost) {
      await JobPost.findByIdAndDelete(jobPost._id);

      // Remove the JobPost from the User Document
      await User.findByIdAndUpdate(
        jobPost.user,
        {
          $pull: {
            jobPost: jobPost._id,
          },
        },
        { new: true }
      );

      console.log(
        `Expired JobPost with Id ${jobPost._id} deleted successfully.`
      );
    }

    return res.status(200).json({
      success: true,
      message: "All expired JobPost deleted successfully.",
    });
  } catch (error) {
    console.error("Error in deleting expired JobPost.", error);
    return res.status(500).json({
      success: false,
      message: "Error in delting expired JobPost.",
    });
  }
};
