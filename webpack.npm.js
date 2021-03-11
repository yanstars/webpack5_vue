const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require("path")
const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = merge(common, {
  entry: {
    index: './src/UI/index.js'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: "umd",
    library: "UI",
    clean: true
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  mode: 'production',
  externals: {
    vue: 'Vue',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  optimization: {
    minimize: true, // 开始最小化
    minimizer: [
      new TerserWebpackPlugin(),
    ],
  }

})