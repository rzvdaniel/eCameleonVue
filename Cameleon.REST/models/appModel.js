var mongoose = require('mongoose')

var appModel = function (appName, pluginName, schemaName) {
    var plugin = require('../plugins/' + pluginName)
    var appSchema = require('../schemas/' + schemaName)
    appSchema.plugin(plugin)

    return mongoose.model(appName, appSchema);
}

module.exports = appModel