const path = require('path');
const fs = require('fs');

const packagesDir = path.resolve(__dirname, 'packages/libbest');

const packages = fs.readdirSync(packagesDir);

const webpackConfigs = packages.map(packageName => ({
  entry: path.resolve(packagesDir, packageName, 'src/index.ts'), // Utiliser .ts pour les fichiers TypeScript
  output: {
    filename: 'bundle.js',
    path: path.resolve(packagesDir, packageName, 'dist'),
    library: packageName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.js'], // Ajouter '.ts' pour prendre en charge les fichiers TypeScript
    alias: {
      [packageName]: path.resolve(packagesDir, packageName, 'src'),
    },
    modules: [
      path.resolve(__dirname, 'node_modules'), // Ajouter le dossier 'node_modules' à la recherche des modules
      'node_modules', // C'est pour s'assurer que les modules importés sont également recherchés dans 'node_modules'
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Ajouter une règle pour les fichiers TypeScript
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader', // Utiliser ts-loader pour transpiler les fichiers TypeScript
        },
      },
    ],
  },
}));

module.exports = webpackConfigs;
