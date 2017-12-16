module.exports = exports = function entityDetailsPlugin (schema, options) {
    schema.add({
    })
    
    schema.pre('save', function (next) {
      this.path = '#/apps/' + this.name
      this.lastModified = new Date
      next()
    })
  }