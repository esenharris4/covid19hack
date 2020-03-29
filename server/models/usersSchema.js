var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Users = new Schema({
  name:  String, // String is shorthand for {type: String}
  age: Number,
  friendList:  Array,
  socialScore: Number
});
