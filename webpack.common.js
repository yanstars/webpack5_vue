const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require("webpack")
const PrettierPlugin = require('prettier-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  resolve: {
    mainFields: ['jsnext:main', 'module', 'browser', 'main'],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  entry: {
    index: "./src/index.js"
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // ui: {
    //   import: './src/ui.js',
    //   dependOn: 'shared',
    // },
    // shared: 'vue',
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // title: 'Production', title 和 tempalte 起,冲突
      template: "./index.html"
    }),
    new webpack.DefinePlugin({
      "RUN_ENV": JSON.stringify(process.env.RUN_ENV),
    }),
    // ESLint configuration
    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),

    // Prettier configuration
    new PrettierPlugin(),
  ],
  output: {
    clean: true  //  不需要 CleanWebpackPlugin  了
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        include: [  // 没设置此处时，引用dist下文件 报错module  export is not defined
          path.join(__dirname, "src"),
          path.join(__dirname, "dist"),
        ],
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  }

}