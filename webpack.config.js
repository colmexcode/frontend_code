const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[fullhash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: 'https://cozy-place.vercel.app/',
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.jpg|jpeg|png|svg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000,
            outputPath: 'assets/',
          },
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json'),
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'https://cozy-place.vercel.app/js',
    }),
    new WebpackPwaManifestPlugin({
      name: 'Cozy Place - Explore and Travel',
      shotname: 'Cozy Place',
      description:
        'For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect trip, but now, they can also let Lonely Planet Experiences lead the way.',
      background_color: '#F8F8F8',
      theme_color: '#b1a',
      start_url: '.',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://cozy-place.vercel.app/'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp('https://cozy-place.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          },
        },
      ],
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'commons',
      minSize: 0,
      chunks: 'all',
    },
  },
};
