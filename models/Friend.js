// models/Friend.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const friendSchema = new mongoose.Schema({
  id: String,
  friendList: [String],
});

// Use multer as needed, make sure to configure it properly
const storage = multer.diskStorage({
  // ... multer storage configuration
});

const upload = multer({ storage });

// Create an express app
const app = express();

// Define the route for uploading photos
app.post('/api/upload-photo', upload.single('photo'), async (req, res) => {
  // Your logic for handling photo upload
});

// Define the Friend model
const Friend = mongoose.model('Friend', friendSchema);

// Export the Friend model
module.exports = Friend;
