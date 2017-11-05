module.exports = exports = function registerUserPlugin (schema, options) {
  schema.add({
    firstName : String,
    lastName : String,
    dateOfBirth : Date,
    address : String,
    gender : String,
    createdDate : Date
  })
  
  schema.pre('save', function (next) {
    this.createdDate = new Date
    next()
  })  
}