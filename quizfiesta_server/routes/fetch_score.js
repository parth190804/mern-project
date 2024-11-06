const express = require('express');
const router = express.Router();
const Score = require('../models/score');

const fetch_score = async (req, res) => {
    const { username } = req.query;
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }
  
    try {
      const userScores = await Score.find({ username: username }).exec();
      res.json(userScores);
    } catch (err) {
      return res.status(500).json({ error: "Error fetching data" });
    }
  };

module.exports = fetch_score;