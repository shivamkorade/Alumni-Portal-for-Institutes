const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("Database connected successfully."))
    .catch((error) => {
      console.log("Database connection error.");
      console.error(error);
      process.exit(1);
    });
};
