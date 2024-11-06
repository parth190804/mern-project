const express = require('express');
const router = express.Router();

// Import your User model
const User = require('../models/user_model');

// Create a route to get user bio based on username
const bio= async (req, res) => {
  // Retrieve the username from the session (assuming it was set there)
  const username = req.query.lusername;

  try {
    // Fetch the user's bio based on the username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user's bio
    res.status(200).json({ bio: user.bio });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = bio;
