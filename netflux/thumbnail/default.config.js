const configModule = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
    {
      test: /\.css$/,
      loaders: [
        {
          loader: 'style-loader'
        }, 
        {
          loader: 'css-loader',
          options: {
            import: true
          }
        }],
    }
  ]
}

module.exports = configModule
 