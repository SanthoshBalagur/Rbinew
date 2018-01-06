var mongoose = require('mongoose'),
{Schema} = require('mongoose')

var schema = new Schema({
ProductCombo: String,
Savories: String,
Cookies:String,
DryFruit:String,
Quantity:Number,
OrderNo:Number,
Date:String
})

module.exports = mongoose.model('receivedInternalDispatch',schema)