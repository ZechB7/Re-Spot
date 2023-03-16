const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(

  process.env.MONGODB_URI || 'mongodb+srv://root:M03211990n@cluster0.ztyyztn.mongodb.net/reSpot',

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
