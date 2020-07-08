'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  async info() {
    const ctx = this.ctx;
    ctx.body = 'user info';
  }
}

module.exports = userController;
