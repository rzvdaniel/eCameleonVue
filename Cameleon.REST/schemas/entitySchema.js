var mongoose = require('mongoose')
var Schema = mongoose.Schema

var entitySchema = new Schema({
    name: String,
    address: String
});

module.exports = entitySchema;