'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // this.ctx.body = 'hi, egg';
    // this.ctx.body = this.app.config;
    // this.ctx.body = this.app.config.env;
    this.ctx.body = `${this.ctx.helper.urlFor('home')}, ${this.ctx.helper.pathFor('/')}`;
  }
  async index1() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    ctx.body = 302;
  }
}

module.exports = HomeController;
