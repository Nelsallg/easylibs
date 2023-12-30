const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isGlobal = process.argv.includes('--global');
const isProduction = process.argv.includes('--mode=production');
console.log({isProduction});

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    'flash': './src/flash.ts',
    // 'flash-style': './src/assets/scss/flash-style.scss',
    // 'icon': './src/assets/icon/icon.svg'
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
    minimizer: isProduction ? [new TerserPlugin()] : [],
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
      {
        test: /\.scss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      ,
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/icon/',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction ? './style/[name].min.css' : './style/[name].css',
    }),
  ],
};
