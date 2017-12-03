module.exports = exports = function entityDetailsPlugin (schema, options) {
    schema.add({
      address : String,
      picturePath : String,
      active : Boolean,
      lastModified : Date
    })
    
    schema.pre('save', function (next) {
      this.lastModified = new Date
      next()
    })
  }