// config
// { mode: 'development',
//   context: '/Users/guoxunchao/lesson1/vue-pro',
//   devtool: 'cheap-module-eval-source-map',
//   node:
//   { setImmediate: false,
//     dgram: 'empty',
//     fs: 'empty',
//     net: 'empty',
//     tls: 'empty',
//     child_process: 'empty' },
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

const splitChunksPlugin = require('splitChunksPlugin');

module.exports = {
  devServer: {
    proxy: {
      '/api' : {
        target: '//www.mi.com',
        ws: true,
        changeOrigin: true
      },
    },
  },
  configureWebpack(config) {
    config.entry = {
      app: ['./src/main.js'],
      // another: ['./src/lib/util.js'],
    };
    config.plugins.push(splitChunksPlugin);
  },
};