const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth");
const { updateUserProfile, getUserProfile, updateProfilePicture, deleteProfile } = require("../controllers/User");

router.put("/update-profile", auth, updateUserProfile);
router.get("/get-profile", auth, getUserProfile);
router.put("/update-profile-picture", auth, updateProfilePicture);
router.delete("/delete-profile", auth, deleteProfile);

module.exports = router;
