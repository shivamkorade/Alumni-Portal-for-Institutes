const mongoose = require("mongoose");

const academicDetailsSchema = new mongoose.Schema({
  course: {
    type: String,
    enum: ["B.Tech", "M.Tech", "B.Pharm"],
    required: true,
  },
  stream: {
    type: String,
    enum: [
      "CSE",
      "ENTC",
      "Mechanical",
      "Civil",
      "Data Science",
    ],
    required: true,
  },
  yearOfAdmission: {
    type: Number,
    required: true,
  },
  yearOfPassing: {
    type: Number,
    required: true,
  },
});

const AcademicDetails = mongoose.model(
  "AcademicDetails",
  academicDetailsSchema
);
module.exports = AcademicDetails;
