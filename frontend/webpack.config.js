const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../static/frontend"),
    filename: "main.js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "../static/frontend"),
    },
    port: 3000,
    hot: true,
    proxy: {
      '/': 'http://localhost:8000',  // Cambiado para proxear todas las rutas
    },
    historyApiFallback: true,
    open: true,
  },
};