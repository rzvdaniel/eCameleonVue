var mongoose = require('mongoose')
var Schema = mongoose.Schema

var entitySchema = new Schema({
    name: String,
    active : Boolean,
    lastModified : Date
});

module.exports = entitySchema;