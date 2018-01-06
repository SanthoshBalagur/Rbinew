const User = require('../model/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rbi');

User.create([
  {
    username: 'ashu',
    password: 'ashu',
  },
], () => {});

