const express = require("express");
const app = express();

const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Load environment variables
require("dotenv").config();

const { dbConnect } = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");

// Import Routes
const userRoutes = require("./routes/UserRoutes");
const eventRoutes = require("./routes/EventRoutes");
const jobPostRoutes = require("./routes/JobPostRoutes");
const profileRoutes = require("./routes/ProfileRoutes");

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Database connection
dbConnect();

// Cloudinary connection
cloudinaryConnect();

const PORT = process.env.PORT || 4000;

// Mount routes
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/event", eventRoutes);
app.use("/api/v1/job", jobPostRoutes);
app.use("/api/v1/profile", profileRoutes);

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "App is running successfully.",
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port no. ${PORT}.`);
});
