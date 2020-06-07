const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const CmpressionWebpackPlugin = require("compression-webpack-plugin");
// webpack的生产环境配置，从基本配置中合并
// 合并是利用 webpack-merge 完成的： https://github.com/survivejs/webpack-merge
const prodConfig = {
  mode: "production",
  devtool: "none",
  optimization: {
    splitChunks: {
      //分包配置
      chunks: "all",
      cacheGroups: {
        styles: {
          minSize: 0,
          test: /\.css$/,
          minChunks: 2,
        },
      },
    },
  },
  plugins: [new WebpackBundleAnalyzer(), new CmpressionWebpackPlugin()],
};

module.exports = merge(baseConfig, prodConfig);
