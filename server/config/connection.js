const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(

  process.env.MONGODB_URI || 'mongodb+srv://root:Ruby10879@cluster0.a6mxemc.mongodb.net/reSpot',

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
