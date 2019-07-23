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

  plugins: [
    new WebpackShellPlugin({
      onBuildExit: "mocha ./tests/compiled/test-bundle.js"
    })
  ]
};
