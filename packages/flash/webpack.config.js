const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry:{
        app: './assets/app.js',
        Apply: './assets/javascript/Apply/Apply.js',
        Index: './assets/javascript/Index.js',
        Chat: './assets/javascript/Chat.js',
        Modals: './assets/javascript/Modals.js',
        messageModalPopup: './assets/javascript/messageModalPopup.js',
        ApplyIndex: './assets/javascript/Apply/Index.js',
        Signup: './assets/javascript/Signup.js',
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/public/script'
    }, 
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: './public/style/[name].css'
        })
      ]
  };
  