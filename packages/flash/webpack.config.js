const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isGlobal = process.argv.includes('--global');
const isProduction = process.argv.includes('--mode=production');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    'flash': './src/flash.ts',
    'styles': './src/assets/scss/flash.scss',
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
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/styles/flash.css',
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/icons'), to: path.resolve(__dirname, 'dist/assets/icons') },
        // Ajouter un nouveau pattern pour les fichiers audio
        { from: path.resolve(__dirname, 'src/assets'), to: path.resolve(__dirname, 'dist/assets'), globOptions: { ignore: ["**/*.js", "**/*.css", "**/*.scss", "**/*.svg"] } },
      ],
    }),
  ],
};

if (isProduction) {
  module.exports.plugins.push(
    // Générer le fichier CSS minifié en plus
    new MiniCssExtractPlugin({
      filename: './assets/styles/flash.min.css',
    })
  );

  module.exports.optimization.minimizer.push(
    // Plugin pour minifier le CSS
    new CssMinimizerPlugin({
      test: /\.min\.css$/
    })
  );
}
