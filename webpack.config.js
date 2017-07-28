const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const srcDir = resolve(__dirname, 'src')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map',
  module: {
    rules: [ {
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
          plugins: ["transform-class-properties"]
      }
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new DashboardPlugin()
  ]
}
