var mongoose = require('mongoose'),
	{Schema} = require('mongoose')
	
var schema = new Schema({
	ProductName: String,
  Quantity: Number
})

module.exports = mongoose.model('inventory',schema)