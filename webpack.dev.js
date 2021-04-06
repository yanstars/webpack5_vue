const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true, // 不用再使用插件
    quiet: true,
    compress: true,
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader', options: {
              sourceMap: true, importLoaders: 2,
              // true 时模块 导致css无法加载
              // TODO
              // module: false
            }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'sass-loader', options: {
              sourceMap: true,
              sassOptions: {
                // indentedSyntax: true  缩进校验
              }
            }
          },
        ],
      },
    ]

  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
  ],
})