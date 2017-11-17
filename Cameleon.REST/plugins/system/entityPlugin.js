module.exports = exports = function entityDetailsPlugin (schema, options) {
    schema.add({
      active : Boolean,
      lastModified : Date
    })
    
    schema.pre('save', function (next) {
      this.lastModified = new Date
      next()
    })
  }