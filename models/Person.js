// models/Person.js
const mongoose = require('mongoose');
const express = require('express'); // Add this line to import express

const personSchema = new mongoose.Schema({
  id: String,
});

const Person = mongoose.model('Person', personSchema);

// Move the route definition outside the Person model definition
const app = express();
app.post('/api/add-person', async (req, res) => {
  const { id } = req.body;

  try {
    // Use the Person model for handling person data
    await Person.create({ id });
    res.json({ success: true, message: 'Person added successfully' });
  } catch (error) {
    console.error('Error adding person:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

module.exports = Person;
