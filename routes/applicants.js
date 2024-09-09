const express = require("express");
const router = express.Router();
const Applicant = require("../models/applicannt")
const { check, validationResult } = require("express-validator");

// POST /applicants - Add a new applicant
router.post(
  "/",
  [
    check("jobId").notEmpty().withMessage("Job ID is required"),
    check("name").notEmpty().withMessage("Applicant name is required"),
    check("email").isEmail().withMessage("Valid email is required"),
    check("resumeLink").notEmpty().withMessage("Resume link is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { jobId, name, email, resumeLink, status } = req.body;
    try {
      const applicant = new Applicant({
        jobId,
        name,
        email,
        resumeLink,
        status,
      });
      await applicant.save();
      res.status(201).json(applicant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// GET /applicants?jobId={jobId} - Get all applicants for a specific job
router.get("/", async (req, res) => {
  const { jobId } = req.query;
  try {
    const applicants = await Applicant.find({ jobId });
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
