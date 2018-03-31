var mongoose = require('mongoose')
var Schema = mongoose.Schema

var entityModel = function (activitySchemaObject) {
    var plugin = require('../plugins/entityPlugin');
    var schema = require('../schemas/entitySchema');
    
    schema.add({
        activities: [new Schema(activitySchemaObject)]
    })

    schema.plugin(plugin);

    return mongoose.model('Entity', schema);
}

module.exports = entityModel
