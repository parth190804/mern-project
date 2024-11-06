const Quiz = require('../models/quizModel');

const quiz_questions=async (req, res) => {
    const quizCode = req.query.code;

  try {
    // Find the quiz based on the provided code
    const quiz = await Quiz.findOne({ code: quizCode });

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    // Return the questions for the found quiz
    res.json(quiz.questions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  };

  module.exports =quiz_questions;