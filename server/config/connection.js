const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
<<<<<<< HEAD
  process.env.MONGODB_URI || 'mongodb+srv://root:Ruby10879@cluster0.a6mxemc.mongodb.net/programming-thoughts',
=======

  process.env.MONGODB_URI || '',

>>>>>>> 23475c383a82d915dad623c71b8c1853fc012915
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
