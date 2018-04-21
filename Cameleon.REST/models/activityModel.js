var mongoose = require('mongoose')

var activityModel = function (appName) {
    let plugin = require('../plugins/' + appName + 'Plugin')
    let activitySchema = require('../schemas/activitySchema')

    activitySchema.plugin(plugin)

    return mongoose.model(appName, activitySchema)
}

module.exports = activityModel