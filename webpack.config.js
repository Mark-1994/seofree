module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './src'
  },
  module: {
    rules: [
      {
        test: '/\.css$/i',
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
