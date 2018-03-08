var mongoose = require('mongoose')

var activityModel = function (activityName, pluginName) {
    var plugin = require('../../plugins/custom/' + pluginName);

    var activitySchema = require('../../schemas/activitySchema');
    activitySchema.plugin(plugin);

    return mongoose.model(activityName, activitySchema);
}

module.exports = activityModel