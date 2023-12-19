// models/TextModel.js
const mongoose = require('mongoose');
const express = require('express'); // Add this line to import express

const textSchema = new mongoose.Schema({
  text: String,
});

const TextModel = mongoose.model('TextModel', textSchema);

// Move the route definition outside the TextModel definition
const app = express();
app.post('/api/insert-text', async (req, res) => {
  const { text } = req.body;

  try {
    // Use the TextModel for handling the text data
    await TextModel.create({ text });
    res.json({ success: true, message: 'Text inserted successfully' });
  } catch (error) {
    console.error('Error inserting text:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = TextModel;
