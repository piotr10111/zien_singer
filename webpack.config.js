const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve('./')
},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader' ]
          })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "images/[name].[ext]"
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: "./src/images/favicon.png",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin(
      { filename: 'style.css' }
    ),
    new webpack.optimize.ModuleConcatenationPlugin()

  ],
  optimization: {
    minimize: true,
    minimizer: [ new UglifyJsPlugin({
      include: /\.min\.js$/
    }) ]
}
}