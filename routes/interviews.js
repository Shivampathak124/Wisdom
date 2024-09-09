const express = require("express");
const router = express.Router();
const Interview = require("../models/interveiw");
const { check, validationResult } = require("express-validator");

// POST /interviews - Schedule an interview
router.post(
  "/",
  [
    check("applicantId").notEmpty().withMessage("Applicant ID is required"),
    check("interviewDate").notEmpty().withMessage("Interview Date is required"),
    check("interviewerName")
      .notEmpty()
      .withMessage("Interviewer Name is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { applicantId, interviewDate, interviewerName } = req.body;
    try {
      const interview = new Interview({
        applicantId,
        interviewDate,
        interviewerName,
      });
      await interview.save();
      res.status(201).json(interview);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// GET /interviews?applicantId={applicantId} - Get all interviews for a specific applicant
router.get("/", async (req, res) => {
  const { applicantId } = req.query;
  try {
    const interviews = await Interview.find({ applicantId });
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
