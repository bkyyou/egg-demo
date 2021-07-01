'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  async info() {
    const ctx = this.ctx;
    console.log(111)
    ctx.status = 200;
    ctx.body = 'egg-demo user info';
  }
}

module.exports = userController;
