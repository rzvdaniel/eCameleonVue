module.exports = exports = function registerCompanyPlugin (schema, options) {
    schema.add({
      name : String,
      address : String,
      city : String,
      country : String,    
      createdDate : Date
    })
    
    schema.pre('save', function (next) {
      this.createdDate = new Date
      next()
    })  
  }