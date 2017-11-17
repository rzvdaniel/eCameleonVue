
var mongoose = require('mongoose')
Schema = mongoose.Schema;

var activitySchema = new Schema({
    template: String,
    entity_id: String
});

module.exports = activitySchema;