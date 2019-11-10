const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // make browser understand es6
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // put css inside main html
          { loader: 'css-loader' } // enable import inside css file
        ]
      }
    ]
  }
};
