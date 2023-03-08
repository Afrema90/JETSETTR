const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Jetsettr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("JETSETTR DATABASE CONNECTED"))
.catch((err) => console.log("CONNECTION ERROR", err.message));

module.exports = mongoose.connection;
