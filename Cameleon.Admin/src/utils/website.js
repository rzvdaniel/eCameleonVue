export default {
  name: 'website',
  getUrl (relativePath) {
    return process.env.WEBSITE_ROOT + relativePath
  }
}
