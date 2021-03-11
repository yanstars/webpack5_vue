const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              // modules: true,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].css'
    }),
    new OptimizeCssAssetsWebpackPlugin() // 压缩css

  ],
  optimization: {
    minimize: true, // 开始最小化
    minimizer: [
      new TerserWebpackPlugin(),
      new CssMinimizerPlugin()
    ],
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})