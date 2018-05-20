
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var activitySchema = new Schema({
    createdDate: Date,
    updatedDate: Date
})

module.exports = activitySchema