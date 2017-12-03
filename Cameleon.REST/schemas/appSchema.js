var mongoose = require('mongoose')
Schema = mongoose.Schema;

var appSchema = new Schema({
    name: { type: String },
    active: { type: Boolean, default: true }
});

module.exports = appSchema;