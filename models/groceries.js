var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var groceriesSchema = new Schema({
  name: String,
  qty: Number
});

var Groceries = mongoose.model('Groceries', groceriesSchema);

module.exports = Groceries;
