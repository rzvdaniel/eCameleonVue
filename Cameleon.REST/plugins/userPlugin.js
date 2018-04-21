module.exports = function userDetailsPlugin(schema, options) {
  schema.add({
    fullName: String,
    email: String,
    active: Boolean
  })

  schema.pre('save', function (next) {
    this.lastModified = new Date
    next()
  })
}