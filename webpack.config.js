 var webpack = require('webpack');
 
  module.exports = {   
    entry: './src/app.ts',
    output: {
     filename: 'bundle.js',
     path: __dirname + '/build'
    },
   // Turn on sourcmaps 
   devtool: 'source-map',
    resolve: {
      extensions: ['','.ts']
    },
    module: {
      loaders: [ 
       { test: /\.ts$/, loader: 'ts-loader' }
      ]
    }
  }