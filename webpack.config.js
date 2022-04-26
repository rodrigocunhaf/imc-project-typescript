const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
    static:[
        {
          directory:path.join(__dirname,'public'),
        },
        {
          directory:path.join(__dirname,'dist')
        }
    ],
    client:{
        logging:'warn'
    }
  }
};