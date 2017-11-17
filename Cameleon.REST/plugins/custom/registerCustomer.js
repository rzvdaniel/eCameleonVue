module.exports = exports = function registerCustomerPlugin (schema, options) {
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