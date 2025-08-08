const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  fullName: String,
  mobile: String,
  email: String,
  city: String,
  propertyType: String,
  budget: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("Submission", submissionSchema);
