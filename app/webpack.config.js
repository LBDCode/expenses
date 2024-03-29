var BundleTracker  = require('webpack-bundle-tracker');


module.exports = {

  entry: './frontendapp/src/index.jsx',
  output: {
    filename: 'main.js',
    path: __dirname + '/frontendapp/static/frontend'
  },
  plugins: [
      new BundleTracker({path: __dirname, filename: 'webpack-stats.json'})
    ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }

};