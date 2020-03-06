const webpack = require('webpack'),
  path = require('path');

const PUBLIC_PATH = "/static/";

module.exports = {
  entry: "./app/index.ts",

  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: PUBLIC_PATH
  },

  devServer: {
    host: "0.0.0.0",
    historyApiFallback: true,
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [ {
          loader: "ts-loader",
          options: {
            allowTsInNodeModules: true
          }
        } ]
      }
    ]
  }
};
