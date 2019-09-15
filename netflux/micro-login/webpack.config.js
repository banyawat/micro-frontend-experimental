// Imports: Dependencies
const path = require('path');
// require("@babel/register");
// Webpack Configuration
const config = {
  
  // Entry
  // Use default
  // entry: './client/src/index.jsx',
  // Output
  // Use default
  // output: {
  //   path: path.resolve(__dirname, 'PATH TO SEND BUNDLED/TRANSPILED CODE'),
  //   filename: 'bundle.js',
  // },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS Files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  // Plugins
  plugins: [],
  // OPTIONAL
  // Reload On File Change
  // watch: true,
  // Development Tools (Map Errors To Source File)
  // devtool 'source-map',
};
// Exports
module.exports = config;