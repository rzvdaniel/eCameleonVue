var mongoose = require('mongoose')
Schema = mongoose.Schema;

var templateSchema = new Schema({
    name: { type: String },
    active: { type: Boolean, default: true }
});

module.exports = templateSchema;