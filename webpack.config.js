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
  resolve: { extensions: ["*", ".js", ".jsx"] ,
    alias: {
      pg: path.resolve(__dirname, "empty_module"),
      sqlite3: path.resolve(__dirname, "empty_module"),
      "pg-hstore": path.resolve(__dirname, "empty_module"),
      tedious: path.resolve(__dirname, "empty_module"),
    },
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    publicPath: "http://localhost:8080/dist",
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    hot: true
  },
  externals: {
    "child_process": "require('child_process')",
    fs: "require('fs')",
    tls: "require('tls')",
    path: "require('path')",
    jquery: "require('jquery')",
    interpret: "require('interpret')",
    module: "require('module')",
    net: "require('net')",
    "spdx-exceptions": "require('spdx-exceptions')",
    "spdx-license-ids": "require('spdx-license-ids')",
    "spdx-license-ids/deprecated": "require('spdx-license-ids/deprecated')",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "./src/index.html"
    }),
  ],
};
