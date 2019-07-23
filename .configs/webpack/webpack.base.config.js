const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/assets/app.js'),
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          noquotes: true
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', 
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './.configs'  
              }
            },
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: [
          {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }],
      }
    ]
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
      '@style': path.resolve(__dirname, '../src/assets/style'),
      '@fonts': path.resolve(__dirname, '../src/assets/fonts'),
      '@img': path.resolve(__dirname, '../src/assets/img'),
      '@js': path.resolve(__dirname, '../src/assets/scripts'),
      '@': path.resolve(__dirname, '../src'),
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    extensions: ['.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/[name].bundle.[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      title: 'Setting up webpack 4',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        interpolate: true,
      },
      
    })
  ]
}