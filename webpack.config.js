const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  // entry: "./aula03/src/js/index.js",
  entry: path.resolve(__dirname, "aula03", "src", "js", "index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  plugins: [new HTMLWebpackPlugin()],
  module: {
    rules: 
    [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        exclude: "/node_modules",
      },
    ],
  },
}