const entryPlus = require('webpack-entry-plus');
const glob = require('glob');

const entryFiles = [
  {
    entryFiles: glob.sync('./src/apps/**/*.ts', './src/apps/**/*.html'),
    outputName(item) {
      return item.replace('src/', '');
    },
  }
]

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.html$/,
          loader: "vue-template-loader",
          exclude: /index.html/
        }
      ]
    },
    entry: entryPlus(entryFiles),
    output: {
      filename: '[name].js'   
    },
  }
}