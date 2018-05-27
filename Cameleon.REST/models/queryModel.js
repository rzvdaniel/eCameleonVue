var mongoose = require('mongoose')

var queryModel = function (appName) {
    let plugin = require('../plugins/' + appName + 'Plugin')
    let querySchema = require('../schemas/querySchema')
    querySchema.plugin(plugin)
    return mongoose.model(appName, querySchema)
}

module.exports = queryModel