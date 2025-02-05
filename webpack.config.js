// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    port: 8082,
    static: {
      directory: path.join(__dirname, 'src'), // Serve static files from src
    },
    watchFiles: ['./src/index.html'],
    open: true, // Opens the browser automatically
    hot: true, // Enable hot reloading
  },
};
