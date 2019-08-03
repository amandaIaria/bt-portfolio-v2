const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: [
     // '@babel/polyfill',
      path.join(__dirname, '../../src/assets/app.js'),
      path.join(__dirname, '../../src/assets/style/app.scss'),
    ],
    target: 'node',
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()], // Need this to avoid error when working with Express
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
            noquotes: true,
            name: '[name].[ext]',
            outputPath: 'assets/img/svg/'
          }
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/img/'
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules'],
                config: {
                  path: './.configs'  
                }
              }
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
        filename:  './assets/style/[name].bundle.[contenthash:8].css',  //argv.mode !== 'production' ? './assets/style/[name].bundle.css' : './assets/style/[name].bundle.[contenthash:8].css', 
        discardComments: {
          removeAll: true,
        },
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.$': 'jquery',
        'window.jQuery': 'jquery',
        Waves: 'node-waves',
        _: 'underscore',
        Promise: 'es6-promise',
      }),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: 'index.html',
        title: 'Setting up webpack 4',
        inject: true,
        excludeChunks: [ 'server' ],
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          interpolate: true,
        }
      })
    ]
};