var path = require('path');

module.exports = {
  module: {
    loaders: [{
      loader: 'babel-loader',
    }]
  },
  entry: './step-4/src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/')
  }
}
