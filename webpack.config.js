const path = require("path");
const webpack = require("webpack");
const pkg = require('./package.json');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./Components/index.js",
    vendor: Object.keys(pkg.dependencies).filter(name => (name != 'font-awesome'))
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            {
              loader: "css-loader",
                options: {
                    sourceMap: true,
                }
              },
            {
              loader: "sass-loader",
              options: {
                  implementation: require("node-sass"),
                  sourceMap: true
              }
          }
        ]
    },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.sss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: './fonts/[name].[ext]',
                outputPath: '../'
            }
        }]
      },
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    publicPath: "http://localhost:8080/dist",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "./src/index.html"
    }),
  ],
};
