'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  async info() {
    const ctx = this.ctx;
    ctx.status = 200;
    ctx.body = 'egg-demo user info';
  }
}

module.exports = userController;
