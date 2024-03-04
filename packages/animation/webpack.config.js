const path = require('path');
const glob = require('glob');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isGlobal = process.argv.includes('--global');
const isProduction = process.argv.includes('--mode=production');

const assetsDir = path.resolve(__dirname, 'src/assets');

// Utiliser glob pour trouver des fichiers éligibles à la copie
const eligibleFiles = glob.sync(`${assetsDir}/**`, {
  ignore: [
    "**/*.js",
    "**/*.css",
    "**/*.svg"
  ],
  nodir: true, // Exclure les répertoires
});

let webpackConfig = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    'animation': './src/animation.ts'
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
    fallback: {
      "path": require.resolve("path-browserify")
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction ? './assets/styles/animation.min.css' : './assets/styles/animation.css',
    })
  ],
};

// Ajouter conditionnellement des plugins et des configurations supplémentaires en mode production
if (isProduction) {
  webpackConfig.optimization.minimizer.push(
    // Plugin pour minifier le CSS
    new CssMinimizerPlugin({
      test: /\.min\.css$/
    })
  );

  if (eligibleFiles.length > 0) {
    webpackConfig.plugins.push(
      new CopyPlugin({
        patterns: eligibleFiles.map(file => ({
          from: file,
          to: path.resolve(__dirname, 'dist/assets', path.relative(assetsDir, file))
        })),
      })
    );
  }
}

// Exportation de la configuration webpack
module.exports = webpackConfig;
