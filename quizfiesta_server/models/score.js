// models/score.js
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  score: Number,
  category: String,
  username: String,
}, {
  collection: 'quiz_attempts' // Specify the collection name
});

const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
