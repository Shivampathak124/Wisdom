const express = require("express");
const router = express.Router();
const Job = require("../models/job");
const { check, validationResult } = require("express-validator");

// POST /jobs - Add a new job
router.post(
  "/",
  [
    check("title").notEmpty().withMessage("Title is required"),
    check("department").notEmpty().withMessage("Department is required"),
    check("description").notEmpty().withMessage("Description is required"),
  ],
  async (req, res) => {
     
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    const { title, department, description, openDate } = req.body;
    try {
      const job = new Job({ title, department, description, openDate });
      await job.save();
      res.status(201).json(job);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// GET /jobs - Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
