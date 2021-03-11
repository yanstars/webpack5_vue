const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    mainFields: ['jsnext:main', 'module', 'browser', 'main'],
    extensions: ['.js', '.vue', '.json'],
    alias:{
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
      // TODO
      template: "./index.html"
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true  //  不需要 CleanWebpackPlugin了
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
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
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