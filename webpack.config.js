const path = require('path');

module.exports = {
  entry: './client.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './')
  },
};