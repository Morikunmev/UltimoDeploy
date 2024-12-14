const path = require('path');

module.exports = {
  entry: './src/index.js',  // punto de entrada
  output: {
    path: path.resolve(__dirname, '../static/frontend'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};