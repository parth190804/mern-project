const express = require('express');
const router = express.Router();
const Score = require('../models/score');

const test_score = async (req, res) =>{
    
        const { score ,category, username } = req.body;
        
        try {
          // Create a new Score document and save it to the 'quiz_attempts' collection
          const newScore = new Score({score ,category, username});
          await newScore.save();
          
          return res.status(201).json({ message: 'Score saved successfully' });
        } catch (error) {
          return res.status(500).json({ error: 'Error saving the score' });
        }
      
};

module.exports = test_score;
