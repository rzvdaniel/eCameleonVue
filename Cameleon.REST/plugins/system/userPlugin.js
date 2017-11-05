module.exports = exports = function userDetailsPlugin (schema, options) {
  schema.add({ 
    dateOfBirth : Date,
    address : String,
    active : Boolean,
    lastModified : Date
  })
  
  schema.pre('save', function (next) {
    this.lastModified = new Date
    next()
  })
}