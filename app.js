const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(cors());

// Serve React static files
app.use(express.static(path.join(__dirname, 'build')));

app.use(express.urlencoded({ extended: true }));

const mongoURI = 'mongodb://localhost:27017/Assignment';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// const Connection = require('./models/Connection');
// const TextModel = require('./models/TextModel')
// const Person = require('./models/Person')
// const Friend = require('./models/Friend')


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);


// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

// Handle form submissions
app.post('/api/submit', upload.single('photo'), (req, res) => {
  const { id, friendId, password } = req.body;
  const photoPath = req.file ? req.file.path : null;
  console.log('Received data:', { id, friendId, password, photoPath });


  // Process the data as needed, e.g., store in a database

  res.json({ success: true, message: 'Data received successfully' });
});

// Serve React app for any other route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pwa/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
