'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.info);

  router.get('/home', controller.home.index1);

  // router.redirect('/', '/home', 302);

  // RESTful 风格 API 定义
  router.resources('auth', '/auth', controller.auth);
};
