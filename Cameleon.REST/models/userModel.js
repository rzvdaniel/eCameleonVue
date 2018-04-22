var mongoose = require('mongoose')

var userModel = function () {
  var schema = require('../schemas/userSchema')
  var plugin = require('../plugins/userPlugin')

  schema.plugin(plugin);

  return mongoose.model('User', schema);
}

module.exports = userModel