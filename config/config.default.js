/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * 使用方式 this.app.config[key名]
 */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594215140826_9725';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    client: {
      // host
      host: '1.116.142.138',
      // 端口号
      port: '3310',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        // headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
        headerName: 'csrfToken', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      },
    }
  };

  // 静态文件服务
  config.static = {
    prefix: '/public/', // http://127.0.0.1:7004/public/index.html
    dir: [
      path.join(appInfo.baseDir, 'public')
      // path.join(appInfo.baseDir, 'app/public')
      // path.join(appInfo.baseDir, 'node_modules/bootstrap/dist/'),
    ],
  };

  // // 这里是服务端渲染的时候需要保存的服务端文件路径
  config.view = {
    root: path.resolve(appInfo.baseDir, 'app/view'),
  };
  // exports.view = {
  //   defaultViewEngine: 'nunjucks',
  //   mapping: {
  //     '.tpl': 'nunjucks'
  //   }
  // };

  // exports.middleware = [
  //   'locals',
  //   'access'
  // ];

  // 这里是配置的是系统渲染的模版路径
  config.reactssr = {
    layout: path.resolve(appInfo.baseDir, 'client/public/index.html'),
    // layout: path.resolve(appInfo.baseDir, 'app/web/view/layout.html'),
    // layout: path.resolve(appInfo.baseDir, 'web/view/layout.html'),
  };

  // console.log('appInfo', appInfo);

  // 启动模式设置，此处需要替换启动端口号
  config.cluster = {
    listen: {
      host: '0.0.0.0',
      port: 30111,
    },
  };

  return {
    ...config,
    ...userConfig,
    // ...staticConfig
  };

};

// exports.static = {
//   prefix: '/public/',
//   dir: [
//     // path.join(appInfo.baseDir, 'app/public')
//     // path.join(appInfo.baseDir, 'node_modules/bootstrap/dist/'),
//   ],
// };
