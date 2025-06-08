const mongoose = require("mongoose");

const contactDetailsSchema = new mongoose.Schema({
  mobileNo: {
    type: Number,
    required: true,
    trim: true,
  },
  alternateMobileNo: {
    type: Number,
    trim: true,
  },
  officialEmail: {
    type: String,
    required: true,
    trim: true,
  },
  currentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
});

const ContactDetails = mongoose.model("ContactDetails", contactDetailsSchema);
module.exports = ContactDetails;
