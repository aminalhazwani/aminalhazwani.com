const path = require("path");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dev = process.env.NODE_ENV === "development";

const baseFilename = dev ? "index" : "index.[contenthash]";

module.exports = {
  mode: dev ? "development" : "production",
  entry: [
    path.resolve(__dirname, "src", "css", "index.css"),
  ],
  output: {
    path: path.resolve(__dirname, "dist", "static"),
    filename: `${baseFilename}.js`,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: `${baseFilename}.css` }),
    new WebpackManifestPlugin({ publicPath: "/static/" }),
  ],
};
