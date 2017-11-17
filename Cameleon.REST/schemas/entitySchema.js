var mongoose = require('mongoose')
    Schema = mongoose.Schema;

var entitySchema = new Schema({
    name : String,
    address : String
});

module.exports = entitySchema;