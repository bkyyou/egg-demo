'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  //   package: 'egg-static'
  // }
  // mysql: {
  //   enable: true,
  //   package: 'egg-mysql'
  // },
  // reactssr: {
  //   enable: true,
  //   package: 'egg-view-react-ssr',
  // },
// };

exports.static = true;

exports.reactssr = {
  enable: true,
  package: 'egg-view-react-ssr'
};

// exports.nunjucks = {
//   enable: true,
//   package: 'egg-view-nunjucks'
// };

// exports.mysql = {
// 	ebable: true,
// 	package: 'egg-mysql'
// }

// const path = require('path');
// exports.mysql = {
//   enable: true,
//   path: path.join(__dirname, '../lib/plugin/egg-mysql'),
// };

// exports.static = {
//   enable: true,
//   path: 'egg-static'
// }
