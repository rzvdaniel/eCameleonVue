var mongoose = require('mongoose')
Schema = mongoose.Schema;

var appSchema = new Schema({
    name: { type: String, required: true },
    title: { type: String, required: true },
    path: { type: String },
    image: { type: String },    
    active: { type: Boolean, default: true }
});

module.exports = appSchema;