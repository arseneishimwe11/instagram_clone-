const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/userSchema')
const { jwtPrivateKey } = require('../config/default.json')

module.exports = (req, res, next) => {
  const { authorization } = req.headers ?? {}; 
  if (!authorization) {
    return res.status(401).json({ error: "You must first be logged in!" });
  }
  const token = authorization.replace("Bearer", "").trim();
  jwt.verify(token, jwtPrivateKey, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "You must be logged in!" });
    }

    const { _id } = payload;
    User.findById(_id).then((savedUser) => {
      req.user = savedUser;
      next();
    });
  });
}
