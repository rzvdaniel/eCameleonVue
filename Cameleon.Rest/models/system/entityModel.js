var mongoose = require('mongoose')

var entityModel = function () {
    var plugin = require('../../plugins/system/entityPlugin');

    var schema = require('../../schemas/entitySchema');
    schema.plugin(plugin);

    return mongoose.model('Entity', schema);
}

module.exports = entityModel