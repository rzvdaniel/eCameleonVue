
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var querySchema = new Schema({
    createdDate: Date,
    updatedDate: Date
})

module.exports = querySchema