const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'source-map', // mapei nossos arquivos js, exatamente com eles são (ajuda no debug)
  entry: './src/index.js', // Arquivo principal que vai gerar o bundler
  output: {
    // Arquivo final do bundler
    path: path.resolve(__dirname, 'dist'), //dir
    filename: 'bundler.js'// arquivo
  },
  module: {
    // transpilação
    rules: [
      {
        test: /\.(js|jsx)$/, // arquivos que seram transpilados
        exclude: /node_modules/, // pasta excluida da transpilação
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  // arquivo final para execução, criado junto do bundle
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}

