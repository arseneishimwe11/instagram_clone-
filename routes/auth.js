const express = require ("express")
const router = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/userSchema')
const jwt = require('jsonwebtoken')
const { jwtPrivateKey } = require('../config/default.json')
const checkLoggin = require('../middleware/checkLogging')


router.get('/protectUser',checkLoggin , (req,res) => {
  console.log("User protected!")
})

router.post('/signup', async (req, res) => {
   const { name, email, password } = req.body;
   if (!email || !password || !name) {
     return res.status(404).json({ error: "Please fill all the requirements" });
   }
 
   try {
     const savedUser = await User.findOne({ email: email });
     if (savedUser) {
       return res.status(200).json({ message: "User already exists!" });
     }
     const hashedPassword = await bcrypt.hash(password, 12);
     const user = new User({
       email,
       password: hashedPassword,
       name,
     });
     await user.save();
     return res.status(200).json({ message: "User saved successfully" });
   } catch (error) {
     console.log(error);
     return res.status(500).json({ error: "Server error" });
   }
 });
 
 router.post('/login', async (req, res) => {
   const { email, password } = req.body;
   if (!email || !password) {
     return res.status(404).json({ message: "Please add an email or password!" });
   }
   try {
     const loggedUser = await User.findOne({ email: email });
     if (!loggedUser) {
       return res.status(404).json({ message: "Invalid email or password" });
     }
     const passCompare = await bcrypt.compare(password, loggedUser.password);
     if (passCompare) {
      const token = jwt.sign({_id:loggedUser._id}, jwtPrivateKey)
       return res.json({ token });
     } else {
       return res.status(404).json({ error: "Invalid credentials" });
     }
   } catch (error) {
     console.log(error);
     return res.status(500).json({ error: "Server error" });
   }
 });
  
 module.exports = router;
 