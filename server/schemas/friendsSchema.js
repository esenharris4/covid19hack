var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Friends = new Schema({
  name:  String, // String is shorthand for {type: String}
  age: Number,
  datelastseen: Date,
  socialscore: Number
});
