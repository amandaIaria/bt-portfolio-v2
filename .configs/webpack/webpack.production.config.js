const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
  output: {
		path: path.join(__dirname, '../../production'),
    filename: './assets/[name].bundle.[contenthash:8].js',
    // publicPath: '/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  }
})