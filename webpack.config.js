const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/app.ts',
  stats:'errors-only',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer:{
    client:{
      logging:'none',
      progress:true
    }
  }
};