var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = new Schema({
  name:  String, // String is shorthand for {type: String}
  age: Number,
  friendlist:  Array,
  socialscore: Number
});

module.exports = mongoose.model('User', User);
