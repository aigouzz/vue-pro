// config
// { mode: 'development',
//   context: '/Users/guoxunchao/lesson1/vue-pro',
//   devtool: 'cheap-module-eval-source-map',
//   node:
//     { setImmediate: false,
//     dgram: 'empty',
//     fs: 'empty',
//     net: 'empty',
//     tls: 'empty',
//     child_process: 'empty'
//     },
//   output:
//   { path: '/Users/guoxunchao/lesson1/vue-pro/dist',
//     filename: '[name].js',
//     publicPath: '/',
//     globalObject: '(typeof self !== \'undefined\' ? self : this)' },
//   resolve:
//   { alias:
//   { '@': '/Users/guoxunchao/lesson1/vue-pro/src',
//     'vue$': 'vue/dist/vue.runtime.esm.js' },
//     extensions: [ '.mjs', '.js', '.jsx', '.vue', '.json', '.wasm' ],
//       modules:
//     [ 'node_modules',
//       '/Users/guoxunchao/lesson1/vue-pro/node_modules',
//       '/Users/guoxunchao/lesson1/vue-pro/node_modules/@vue/cli-service/node_modules' ] },
//   resolveLoader:
//   { modules:
//     [ '/Users/guoxunchao/lesson1/vue-pro/node_modules/@vue/cli-plugin-eslint/node_modules',
//       '/Users/guoxunchao/lesson1/vue-pro/node_modules/@vue/cli-plugin-babel/node_modules',
//       'node_modules',
//       '/Users/guoxunchao/lesson1/vue-pro/node_modules',
//       '/Users/guoxunchao/lesson1/vue-pro/node_modules/@vue/cli-service/node_modules' ] },
//   module:
//   { noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
//     rules:
//     [ [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object],
//       [Object] ] },
//   plugins:
//     [ VueLoaderPlugin {},
//       DefinePlugin { definitions: [Object] },
//       CaseSensitivePathsPlugin { options: {}, pathCache: {}, fsOperations: 0, primed: false },
//       FriendlyErrorsWebpackPlugin {
//       compilationSuccessInfo: {},
//       onErrors: undefined,
//       shouldClearConsole: true,
//       formatters: [Array],
//       transformers: [Array],
//       previousEndTimes: {} },
//       HotModuleReplacementPlugin {
//       options: {},
//       multiStep: undefined,
//       fullBuildTimeout: 200,
//       requestTimeout: 10000 },
//       ProgressPlugin {
  //       profile: false,
  //       handler: undefined,
  //       modulesCount: 500,
  //       showEntries: false,
  //       showModules: true,
  //       showActiveModules: true
//       },
//       HtmlWebpackPlugin { options: [Object] },
//       PreloadPlugin { options: [Object] },
//       PreloadPlugin { options: [Object] },
//       { apply: [Function: apply] } ],
//   entry: { app: [ './src/main.js' ] } }

// const splitChunksPlugin = require('splitChunksPlugin');
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const prerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = prerenderSPAPlugin.PuppeteerRenderer;
module.exports = {
  devServer: {
    // withCredentials: true,
    open: true,
    proxy: {
      '/api' : {
        target: 'http://mock.be.mi.com/mock/113',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        onProxyReq: function(proxyReq, req, res) {
          // window.console.log(req);
          // window.console.log(res);
          proxyReq.setHeader('referer', '//mock.be.mi.com');
        },
      },
    },
  },
  configureWebpack(config) {
    config.entry = {
      app: ['./src/main.js'],
      // another: ['./src/lib/util.js'],
    };
    if (process.env.NODE_ENV == 'production') {
      let optimization = {
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: Infinity,
          minSize: 30000, // 依赖包超过30000bit(30kb)将被单独打包
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name (module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `npm.${packageName.replace('@', '')}`;
              }
            }
          }
        }
      };
      Object.assign(config, {
        optimization,
      });
      config.mode = 'production';
    } else {
      config.mode = 'development';
    }
    // config.plugins.push(new bundleAnalyzerPlugin());
    // config.plugins.push(
    //   new prerenderSPAPlugin({
    //     // Required - The path to the webpack-outputted app to prerender.
    //     staticDir: path.join(__dirname, 'dist'),
    //     // Required - Routes to render.
    //     routes: ['/past', '/next', '/load'],
    //     renderer: new Renderer({
    //       headless: false,
    //       // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
    //       renderAfterDocumentEvent: 'render-event'
    //     }),
    //   })
    // );

  },
  chainWebpack(config) {
    config.resolve.alias
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('lib', path.resolve(__dirname, 'src/lib'))
      .set('@', path.resolve(__dirname, 'src'));
  },
};