var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('config');

var entry, output, plugins, rules;
var SRC_DIR = path.resolve(__dirname, 'src');

if (process.env.NODE_ENV !== 'production') {
  entry = [
    //'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './client/index.js'
  ];
  output = {
    path: path.join(__dirname, config.get('buildDirectory')),
    filename: 'bundle.js',
    publicPath: '/'
  };
  plugins = [
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ];
  rules = [
    {
      test: /\.js$/,
      use: ['react-hot-loader', 'babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.css?$/,
      use: ['style-loader', 'css-loader'],
      include: __dirname
    },
    {
      test: /\.(png|jpg|svg)$/,
      exclude: /node_modules/,
      include: __dirname,
      use: {
        loader: 'url-loader',
        options: {
          limit: 15000,
          name: '[name].[ext]'
        }
      }
    }
  ];
} else {
  entry = './client/index.js';
  output = {
    path: path.join(__dirname, config.get('buildDirectory')),
    filename: 'bundle.js',
    publicPath: '/'
  };
  plugins = [
    new webpack.DefinePlugin({
      __DEV__: false,
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ];
  rules = [
    {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
      include: __dirname
    },
    {
      test: /\.css?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      }),
      include: __dirname
    },
    {
      test: /\.(png|jpg|svg)$/,
      exclude: /node_modules/,
      include: __dirname,
      use: {
        loader: 'url-loader',
        options: {
          limit: 15000,
          name: '[name].[ext]'
        }
      }
    }
  ];
}

module.exports = {
  devtool: 'source-map',
  entry: entry,
  output: output,
  plugins: plugins,
  module: {
    rules: rules
  }
};
