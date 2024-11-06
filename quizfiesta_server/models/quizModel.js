// quizModel.js

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  options: [String], // An array of strings for options
  correctAnswer: {
    type: String,
    required: true,
  },
});

const quizSchema = new mongoose.Schema({
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  questions: [questionSchema], // Use the questionSchema for each question
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
