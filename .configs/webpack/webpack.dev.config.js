const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
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
          config: path.join(__dirname, "../.htmllintrc"), // path to custom config file
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
          configFile:  path.join(__dirname, "../.eslintrc.json") 
        }
      },
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: './.configs/.stylelintrc',
      context: 'src'
    }),
    new Dotenv({
      path: '../.env/.env.local', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false // load '.env.defaults' as the default values if empty.
    })
  ]
});
