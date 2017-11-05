var mongoose = require('mongoose')
Schema = mongoose.Schema;

var mongooseModel = {
    getUserDefined : function(name, schema, plugin) {
        return this.get(name, schema, plugin, 'user');
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
    }        
};

module.exports = mongooseModel;