const mongoose = require('mongoose');
const connectionSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
});

const Connection = mongoose.model('Connection', connectionSchema);


module.exports = (app) => {
  app.use((req, res, next) => {
    // Your middleware logic here

    Connection.create({}, (err) => {
      if (err) {
        console.error('Error logging connection:', err);
      }
    });
    next();
  });

  return mongoose.model('Connection', connectionSchema);
};


