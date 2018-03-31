module.exports = function profilePlugin(schema, options) {
  schema.add({
    name: String,
    address: String,
    city: String,
    country: String
  })

  schema.pre('save', function (next) {
    next()
  })
}