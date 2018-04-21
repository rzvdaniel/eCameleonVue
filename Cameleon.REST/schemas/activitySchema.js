
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var activitySchema = new Schema({
    createdDate: Date,
    lastModified: Date
})

module.exports = activitySchema