// routes/index.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const axios = require('axios');

// Include your models
const Connection = require('../models/Connection');
const TextModel = require('../models/TextModel');
const Person = require('../models/Person');
const Friend = require('../models/Friend');

router.get('/', (req, res) => {
  res.send('Welcome to the Express backend!');
});

module.exports = router;