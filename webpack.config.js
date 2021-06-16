
const path = require('path');
const resolve = (filePath) => path.resolve(__dirname, filePath);
// const tsImportPluginFactory = require('ts-import-plugin');
console.log('webpack.config.js');
module.exports = {
  // type: 'client',
  // devtool: 'cheap-module-eval-source-map',
  compile: {
    thread: true, // 多进程编译
    cache: true, // 启动编译缓存
  },
  // 这个选项用来查找指定如何查找loader
  resolveLoader: {
    modules: ['node_modules']
  },
  entry: {
    // index: resolve('client/src/index.js'),
    index: 'client/src/index.js',
    // spa: 'app/web/page/spa/index.jsx',
    // login: 'app/web/page/login/index.jsx'
  },
  // loaders: { urlimage: false },
  // resolve: {
  //   extensions: ['.ts', '.tsx', '.js', '.json'],
  //   alias: {
  //     '@/lib': resolve('client/lib'),
  //     '@/router': resolve('client/router'),
  //     '@/redux': resolve('client/redux'),
  //     '@/pages': resolve('client/pages'),
  //     '@/utils': resolve('client/utils'),
  //     '@/assets': resolve('client/assets'),
  //     '@/components': resolve('client/components'),
  //     '@/common': resolve('client/common'),
  //     '@/client': resolve('client'),
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
