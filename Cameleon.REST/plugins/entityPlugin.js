var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = function entityPlugin(schema, options) {

  schema.pre('save', function (next) {
    this.lastModified = new Date
    next()
  })
}