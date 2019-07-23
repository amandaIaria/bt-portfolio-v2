const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  entry: path.join(__dirname, '../tests/tests.js'),
  output: {
    path: path.join(__dirname, '../tests/compiled'),
    filename: 'test-bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      '@js': path.resolve(__dirname, '../src/assets/scripts'),
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js'],
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildExit: "mocha ./tests/compiled/test-bundle.js"
    })
  ]
};
