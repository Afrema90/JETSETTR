const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/Jetsettr', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("JETSETTR DATABASE CONNECTED"))
.catch((err) => console.log("CONNECTION ERROR", err.message));

module.exports = mongoose.connection;
