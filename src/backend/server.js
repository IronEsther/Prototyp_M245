const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const examRoutes = require('./routes/examRoutes'); // Pfad anpassen
const classRoutes = require('./routes/classRoutes'); // Pfad anpassen

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/examplanner', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.use('/exams', examRoutes);
app.use('/classes', classRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
