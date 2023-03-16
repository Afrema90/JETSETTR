const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("JETSETTR DATABASE CONNECTED"))
.catch((err) => console.log("CONNECTION ERROR", err.message));

module.exports = mongoose.connection;
