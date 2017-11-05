
var mongoose = require('mongoose')
Schema = mongoose.Schema;

var activitySchema = new Schema({
    template: String 
});

module.exports = activitySchema;