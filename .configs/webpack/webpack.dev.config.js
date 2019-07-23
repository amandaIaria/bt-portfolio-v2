const merge = require('webpack-merge');
const path = require('path');
const webpackBaseConfig = require('./webpack.base.config.js');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  module: {
    rules: [
      {
        test: /(htm|html|xhtml|hbs|handlebars|php|ejs)$/,
        loader: 'htmllint-loader',
        exclude: /(node_modules)/,
        query: {
          config: path.join(__dirname, "../.configs/.htmllintrc"), // path to custom config file
          failOnError: false,
          failOnWarning: false,
        },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          configFile:  path.join(__dirname, "../.configs/.eslintrc.json") 
        }
      },
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: './.configs/.stylelintrc',
      context: 'src'
    })]
});
