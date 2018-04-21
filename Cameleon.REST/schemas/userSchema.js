var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    email: String,
    active: Boolean,
    created: Date,
    lastModified: Date
})

module.exports = userSchema