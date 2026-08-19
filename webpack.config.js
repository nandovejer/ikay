/**
 * Assets Config file
 */

const serverConfiguration = {
  internal: {
    server: {
      baseDir: "docs",
    },
    port: 3000,
  },
  external: {
    proxy: "http://localhost:9000/path/to/project/",
  },
};

const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

let targetServerConfiguration = serverConfiguration.internal;

const config = function (env, args) {
  // webpack-cli >= 4 no longer forwards unknown flags, so this arrives as --env externalServer
  if (env !== undefined && env.externalServer) {
    targetServerConfiguration = serverConfiguration.external;
  }

  return {
    entry: {
      app: "./src/js/app.js",
    },
    output: {
      filename: "js/[name].js",
      path: path.resolve(__dirname, "docs"),
      // replaces clean-webpack-plugin
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  // the stylesheets use @import, / for division and the old
                  // color functions; silence the warnings instead of rewriting them
                  silenceDeprecations: ["import", "slash-div", "color-functions", "global-builtin"],
                },
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
        },
        {
          // asset modules, built into webpack 5, replacing url-loader
          test: /\.(png|gif|jpg|jpeg)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 8192,
            },
          },
          generator: {
            filename: "images/[name].[hash:6][ext]",
            publicPath: "../",
          },
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          type: "asset",
          parser: {
            dataUrlCondition: {
              maxSize: 8192,
            },
          },
          generator: {
            filename: "fonts/[name].[hash:6][ext]",
            publicPath: "../",
          },
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
        new CssMinimizerPlugin(),
      ],
    },
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
    },
    plugins: [
      new BrowserSyncPlugin({
        ...targetServerConfiguration,
        files: ["src/*"],
        ghostMode: {
          clicks: false,
          location: false,
          forms: false,
          scroll: false,
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: "debug",
        logPrefix: "wepback",
        notify: true,
        reloadDelay: 0,
      }),
      new HtmlWebpackPlugin({
        inject: true,
        hash: false,
        filename: "index.html",
        template: path.resolve(__dirname, "src", "index.html"),
        favicon: path.resolve(__dirname, "src", "images", "favicon.ico"),
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src", "images", ""),
            to: path.resolve(__dirname, "docs", "images", ""),
            toType: "dir",
          },
        ],
      }),
    ],
  };
};

module.exports = config;
