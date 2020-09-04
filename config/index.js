const path = require('path');

const { resolve } = path;
const routerConfig = require('./router');

const isStartAnalyzer = false;

const config = {
  projectName: 'zdx-cross-end',
  date: '2020-8-27',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  csso: {
    enable: true,
  },
  copy: {
    patterns: [],
    options: {},
  },
  alias: {
    '@common': resolve(__dirname, '..', 'src/common'),
    '@assets': resolve(__dirname, '..', 'src/assets'),
    '@components': resolve(__dirname, '..', 'src/components'),
  },
  framework: 'react',
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
        },
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024,
        },
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[local]_[hash:base64:2]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'assets',
    postcss: {
      // cssModules: {
      //   enable: true,
      //   config: {
      //     namingPattern: 'global',
      //     generateScopedName: '[local]_[hash:base64:2]'
      //   }
      // }
    },
    router: {
      mode: 'hash',
      customRoutes: routerConfig,
    },
    webpackChain(chain) {
      isStartAnalyzer && chain.plugin('analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, []);
    },
    lessLoaderOption: {
      strictMath: true,
      noIeCompat: true,
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
