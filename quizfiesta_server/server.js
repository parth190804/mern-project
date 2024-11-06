// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const regRoutes = require('./routes/registry');
const authRoutes=require('./routes/auth');
const bioRoutes = require('./routes/bio');
const createRoutes = require('./routes/quiz_create');
const scoreRoutes = require('./routes/test_score');
const fetchRoutes = require('./routes/fetch_score');
const personalQuizRoutes=require('./routes/quiz_search');
const quizquestionsRoutes=require('./routes/quiz_questions');
const personalscoreRoutes=require('./routes/test_score');
const app = express();
app.use(cors());
app.use(express.json()); // Use the built-in express.json() middleware for parsing JSON

const port = process.env.PORT || 5000;

// Connect to MongoDB using Mongoose
const mongoURI = "mongodb+srv://vivanjain:Souls8ul@cluster0.jjd5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  console.log('Hello');
});

// Use the '/api/auth' route for adding new user
app.post('/api/quiz_create/QuizForm', createRoutes);
app.use('/api/registry/register', regRoutes);
app.use('/api/auth/login', authRoutes);
app.use('/api/bio/login', bioRoutes);
app.use('/api/test_score/FinalScorePage', scoreRoutes);
app.use('/api/fetch_score/attempt', fetchRoutes);
app.use('/api/quiz_search/personal_quiz', personalQuizRoutes);
app.use('/api/quiz_questions/personal_quiz', quizquestionsRoutes);
app.use('/api/test_score/personal_quiz',personalscoreRoutes);


// Add a new route to save the final score in the 'quiz_attempts' collection


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
