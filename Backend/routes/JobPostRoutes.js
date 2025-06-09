const express = require("express");
const router = express.Router();

const {
  createJobPost,
  editJobPost,
  getAllJobPosts,
  deleteJobPost,
  deleteExpiredJobPost,
} = require("../controllers/JobPost");
const { auth, isAdminOrAlumini } = require("../middlewares/auth");

router.post("/create", auth, isAdminOrAlumini, createJobPost);
router.put("/edit", auth, isAdminOrAlumini, editJobPost);
router.get("/jobs", auth, getAllJobPosts);
router.delete("/delete/:jobPostId", auth, isAdminOrAlumini, deleteJobPost);
router.delete(
  "/delete-expired-job-posts",
  auth,
  isAdminOrAlumini,
  deleteExpiredJobPost
);

module.exports = router;
