var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  followers: [String],
  following: [String]
});

var model = mongoose.model('User', userSchema);

module.exports = model;