const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('./models/User');

// replace "your-database-name" with the name of your database
mongoose.connect('mongodb://localhost:3000/artistloginDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to the artistloginDB database");
});

router.post('/register', async (req, res) => {
    try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
    email: req.body.email,
    password: hashedPassword,
    name: req.body.name,
    username: req.body.username
    });
    const savedUser = await user.save();
    res.send(savedUser);
    } catch (err) {
    res.status(400).send(err);
    }
    });
  
  module.exports = router;



