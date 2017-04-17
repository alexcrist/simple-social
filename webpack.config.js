var webpack = require('webpack');
var path = require('path');

var js = path.resolve(__dirname, 'app/public/js');
var entry = path.resolve(js, 'index.js');
var output = path.resolve(__dirname, 'app/public');

module.exports = {
  entry: entry,
  output: {
    path: output,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: js,
        loader: 'babel-loader'
      }
    ]
  }
};