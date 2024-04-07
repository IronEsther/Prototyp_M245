// backend/routes/classRoutes.js
const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

router.get('/', async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const classObj = new Class({
    className: req.body.className,
  });
  try {
    const newClass = await classObj.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
