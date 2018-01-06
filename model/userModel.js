var mongoose = require('mongoose'),
Schema = require('mongoose').Schema

var schema = new Schema({
username : String,
password : String
})

schema.methods.validPassword = function( pwd ) {
return ( this.password === pwd );
};

module.exports = mongoose.model('User',schema)