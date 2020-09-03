module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    output: {
      filename: 'js/[name].[hash:8].js',
      chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    enableSourceMap: false,
    enableExtract: true,
    miniCssExtractPluginOption: {
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[chunkhash:8].css'
    },
    webpackChain(chain) {
      chain.merge({
        optimization: {
          usedExports: true,
          mergeDuplicateChunks: true,
          minimize: true,
          splitChunks: {
            chunks: "all",
            name: true,
            cacheGroups: {
              styles: {
                name: "styles",
                priority: 1,
                test: /.less$/,
                enforce: true,
                chunks: "async",
              },
              vendor: {
                name: "vendor",
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                enforce: true,
              },
              common: {
                name: "common",
                minChunks: 2,
                priority: 5,
                enforce: true,
                reuseExistingChunk: true,
              },
            },
          },
          runtimeChunk: {
            name: "manifest",
          },
          noEmitOnErrors: true,
        },
      });
    }
  }
}
