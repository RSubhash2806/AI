const express = require("express");
const router = express.Router();
const Submission = require("../models/Submission");

router.post("/form", async (req, res) => {
  try {
    const newSubmission = new Submission(req.body);
    await newSubmission.save();
    res.status(201).json({ message: "Submission received!" });
  } catch (error) {
    res.status(500).json({ error: "Submission failed" });
  }
});

module.exports = router;
