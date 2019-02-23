const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  // rules: [
  //   {
  //     test: /\.(js|jsx)$/,
  //     exclude: /node_modules/,
  //     use: {
  //       loader: "babel-loader"
  //     }
  //   },
  // {
  //   test: /\.jsx?$/,
  //   include: /node_modules/,
  //   use: ['react-hot-loader/webpack'],
  // },
  // ]
};