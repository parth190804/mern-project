const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user_model');

// Endpoint for user login
const auth= async (req, res) => {
  const { username, password ,name} = req.body;
 
  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentialsl' });
    }
    const cname = await User.findOne({ name });

    if (!cname) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If username and password are correct, return a success message
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = auth;
