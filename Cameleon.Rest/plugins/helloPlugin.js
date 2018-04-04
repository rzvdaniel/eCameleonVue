module.exports = function profilePlugin(schema, options) {
  schema.add({
    name: String,
    email: String,
    text: String
  })

  schema.pre('save', function (next) {
    next()
  })
}