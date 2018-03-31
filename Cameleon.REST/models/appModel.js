var mongoose = require('mongoose')

var appModel = function () {
    var plugin = require('../plugins/appPlugin');

    var appSchema = require('../schemas/appSchema');
    appSchema.plugin(plugin);

    return mongoose.model('App', appSchema);
}

module.exports = appModel