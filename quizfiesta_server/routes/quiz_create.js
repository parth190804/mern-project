const Quiz = require('../models/quizModel');

const quiz_create=async (req, res) => {
    console.log('Hello!!');
    try {
      console.log(req.body.code);
      const { code, questions } = req.body;
      const quiz = new Quiz(JSON.parse(JSON.stringify({code,questions})));
      await quiz.save();
  
      res.json({ message: 'Quiz created successfully' });
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };

module.exports = quiz_create;