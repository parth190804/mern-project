// server/routes/registry.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user_model');

const register = async (req, res) => {
  console.log("Register");
  try {
    console.log(req.body);
    const { username, password,name,bio } = req.body;


    // Check if the username already exists
    const existingUser = await User.findOne( {username} );

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword,name,bio });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = register;
