// backend/models/Exam.js
const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  goal: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Exam', examSchema);
