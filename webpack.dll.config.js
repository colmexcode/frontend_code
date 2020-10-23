const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    modules: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk',
      'styled-components',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[fullhash].dll.js',
    library: '[name]',
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'production',
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
    }),
  ],
};
