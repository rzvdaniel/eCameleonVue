var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongooseModel = {
    getCustom : function(name, schema, plugin) {
        return this.get(name, schema, plugin, 'custom');
    },
    getSystem : function(name, schema, plugin) {
        return this.get(name, schema, plugin, 'system');
    },
    get : function(name, schema, plugin, pluginFolder) {
        if (plugin != undefined && plugin  != null) {
            var plugin = require('../plugins/' + pluginFolder + '/' + plugin);  
            schema.plugin(plugin);    
        }
        var model = mongoose.model(name, schema);
        return model;  
    },
    getSchema : function(schemaPath) {
        var schema = require('../schemas/' + schemaPath);  
        return schema;
    }      
}

module.exports = mongooseModel