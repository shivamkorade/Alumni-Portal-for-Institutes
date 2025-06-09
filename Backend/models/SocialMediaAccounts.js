const mongoose = require("mongoose");

const socialMediaAccountsSchema = new mongoose.Schema({
  linkedIn: {
    type: String,
    required: true,
    trim: true,
  },
  facebook: {
    type: String,
    trim: true,
  },
  websites: {
    type: String,
    trim: true,
  },
  instagram: {
    type: String,
    trim: true
  },
});

const SocialMediaAccounts = mongoose.model(
  "SocialMediaAccounts",
  socialMediaAccountsSchema
);
module.exports = SocialMediaAccounts;
