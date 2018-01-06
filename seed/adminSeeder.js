const User = require('../model/admin');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rbi');

User.create([
  {
    username: 'admin',
    password: 'admin',
  },
], () => {});

