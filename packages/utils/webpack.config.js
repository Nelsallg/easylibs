const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const isGlobal = process.argv.includes('--global');
const isProduction = process.argv.includes('--mode=production');

module.exports = {
  mode: isProduction ? "production" : "development",
  entry: {
    "utils": './src/utils.ts',
  },
  output: {
    filename: isProduction ? '[name].min.js' : (isGlobal ? '[name].global.js' : '[name].js'),
    path: path.resolve(__dirname, 'dist'),
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'source-map',
  optimization: {
    minimizer: isProduction ? [new TerserPlugin()] : []
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
};
