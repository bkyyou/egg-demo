'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/spa/login', app.controller.spa.index.login);
  router.get('/spa(/.*)?', app.controller.spa.index.home);
  
  router.get('/', controller.index.index);
  router.get('/user', controller.user.info);

  router.get('/homeIndex1', controller.home.index1);

  router.get('/home', controller.home.home);

  router.get('/echo1', controller.home.getEcho1);

  router.post('/home', controller.home.homePostReq);

  // router.redirect('/', '/home', 302);

  // RESTful 风格 API 定义
  router.resources('auth', '/auth', controller.auth);
};
