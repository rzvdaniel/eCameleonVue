var mongoose = require('mongoose')

var userModel = function () {
    var plugin = require('../plugins/userPlugin');

    var schema = require('../schemas/userSchema');
    schema.plugin(plugin);

    return mongoose.model('User', schema);
}

module.exports = userModel