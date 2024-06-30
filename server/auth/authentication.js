const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Model/user.model');
const upload = require('../Middleware/Multer');
const SECRET_KEY = 'supersecretkey123';


exports.signup = async (req, res) => {
    const { id, useremail, username, userpassword } = req.body;
  
    try {
      const userExists = await User.findOne({ useremail });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(userpassword, 10);
  
      
    
  
        const newUser = new User({
          id,
          username,
          useremail,
          userpassword: hashedPassword,
          profilePic: req.file ? req.file.path : null, 
        });
  
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };


exports.Login= async (req, res) => {
    const { useremail, userpassword } = req.body;

    try {
        const user = await User.findOne({ useremail });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(userpassword, user.userpassword);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }
        currentuserid=user.id
        const token = jwt.sign({ useremail}, SECRET_KEY);

        res.status(200).json({currentuserid, token });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};


