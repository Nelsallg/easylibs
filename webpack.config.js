const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/index.ts'), // Point d'entrée unique
  output: {
    filename: 'bundle.js', // Un seul fichier bundle
    path: path.resolve(__dirname, 'build'), // Dossier de sortie unique
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: ['.ts', '.js', '.svg', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: 'svg-url-loader'
      }
    ],
  },
  watch: true, // Activer le mode watch
};
