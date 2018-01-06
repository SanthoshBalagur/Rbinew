const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
  username: String,
  password: String,
});

schema.methods.validPassword = function (pwd) {
  return (this.password === pwd);
};

module.exports = mongoose.model('Admin', schema);
