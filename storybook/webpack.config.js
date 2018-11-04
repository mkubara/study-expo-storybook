// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, './src/client/native'), 'node_modules'],
    extensions: ['.js', '.jsx', '.styl', '.jpg', '.png', '.gif'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
};
