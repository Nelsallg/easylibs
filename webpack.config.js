const path = require('path');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');

const packagesDir = path.resolve(__dirname, 'packages');
const packages = fs.readdirSync(packagesDir);

const webpackConfigs = packages.map(packageName => {
  const isGlobal = process.argv.includes('--global');
  const isProduction = process.argv.includes('--mode production');

  return {
    entry: path.resolve(packagesDir, packageName, `src/${packageName}.ts`),
    output: {
      filename: isProduction ? `${packageName}.min.js` : (isGlobal ? `${packageName}.global.js` : `${packageName}.cjs.js`),
      path: path.resolve(packagesDir, packageName, 'dist'),
      library: packageName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    optimization: {
      minimizer: isProduction ? [new TerserPlugin()] : []
    },
    resolve: {
      extensions: ['.ts', '.js'],
      alias: {
        [packageName]: path.resolve(packagesDir, packageName, 'src'),
      },
      modules: [
        path.resolve(__dirname, 'node_modules'),
        'node_modules',
      ],
    },
    module: {
      rules: [
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
});

module.exports = webpackConfigs;
