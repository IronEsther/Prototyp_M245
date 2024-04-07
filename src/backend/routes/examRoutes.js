// backend/routes/examRoutes.js
const express = require('express');
const router = express.Router();
const Exam = require('../models/Exam');

router.get('/', async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const exam = new Exam({
    date: req.body.date,
    subject: req.body.subject,
    goal: req.body.goal,
  });
  try {
    const newExam = await exam.save();
    res.status(201).json(newExam);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
