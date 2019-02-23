const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './Components/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  module: {
    rules: [
      // {
      //   test: /\.jsx?$/,
      //   loaders: ["react-hot"],
      //   include: path.join(__dirname, "public")
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    publicPath: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};
