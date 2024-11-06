const Quiz = require('../models/quizModel');

const quiz_search=async (req, res) => {
    const { code } = req.body;
    try {
        // Fetch the user's bio based on the username
        const code_1 = await Quiz.findOne({ code });
        if (!code_1) {
          console.log("Code exists calling from server");
          return res.status(200).json({ message: 'Code Found' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
    }
  module.exports = quiz_search;