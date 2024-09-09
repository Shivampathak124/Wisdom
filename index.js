const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());

// Import routes
const jobRoutes = require("./routes/jobs");
const applicantRoutes = require("./routes/applicants");
const interviewRoutes = require("./routes/interviews");

// Use the routes
app.use("/jobs", jobRoutes);
app.use("/applicants", applicantRoutes);
app.use("/interviews", interviewRoutes);

// Connect to MongoDB
  
    mongoose
      .connect("mongodb://localhost:27017/wisdomData")
      .then(() => {
        console.log("MongoDB connected");
      })
      .catch((error) => {
        console.error("Error connecting to the database", error);
      });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
