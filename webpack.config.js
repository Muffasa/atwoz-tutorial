var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

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
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,  
      template: './src/index.html',
      title: 'App',
      filename: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor', 
        filename: 'vendor.js',
        minChunks: Infinity}),
  ]
}