const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'resume_bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
          })
    ]
  };