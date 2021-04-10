const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index",

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    host : '127.0.0.1',
    contentBase: path.join(__dirname, "/dist"),
    compress: true,
    hot : true,
    inline: true,
    port: 9000,
    open : true
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
};