module.exports = {
  entry: ['./src/assets/js/app.js'],
  output: {
    path: __dirname + '/assets/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx', 'babel'] }
    ]
  },
  plugins: []
}