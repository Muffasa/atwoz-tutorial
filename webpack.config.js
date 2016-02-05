var webpack = require('webpack');

module.exports = {  
  cache: false,
  entry: {
      'vendor': './src/vendor.ts', // load dependencies
      'app': './src/app/app.ts' // root component
  },
  output: {
        path: __dirname + '/build',
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js',
        pathinfo: true
  },
  // Turn on sourcmaps 
  devtool: 'source-map',
  resolve: {
    extensions: ['','.ts', '.js']
  },
  module: {
    loaders: [
      {
                test: /\.ts$/,
                loader: 'ts-loader'

            }
    ]
    
  }
}