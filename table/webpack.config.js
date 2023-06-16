const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
entry: ["@babel/polyfill", './src/index.jsx'],
output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
 },
 devServer: {
    port: 3000
},
resolve: {
    extensions: ['.js', '.jsx'], // чтобы не прописывать расширения при импорте компонентов
  },
module: {
    rules: [
        {
            test: /\.(css|less)$/,
            use: ["style-loader", "css-loader", "less-loader"]
        },
        {
            test: /\.(jpg|jpeg|svg|png)/,
            use: ['file-loader']
        },
        {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: "./public/index.html"
    }),
    new CleanWebpackPlugin()
],
} 