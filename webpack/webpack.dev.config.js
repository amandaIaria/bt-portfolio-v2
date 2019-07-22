const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  module: {
    rules: [
      {
        test: /(htm|html|xhtml|hbs|handlebars|php|ejs)$/,
        loader: 'htmllint-loader',
        exclude: /(node_modules)/,
        query: {
          config: '.htmllintrc', // path to custom config file
          failOnError: false,
          failOnWarning: false,
        },
      },
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src'
    })]
});
