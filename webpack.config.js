const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: `${baseFilename}.css` }),
    new ManifestPlugin({ publicPath: "/static/" }),
  ],
};
