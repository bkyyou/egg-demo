'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // this  ctx app service
  async index() {
    // const { ctx } = this;
    // this.ctx.body = 'hi, egg';
    // this.ctx.body = this.app.config;
    // this.ctx.body = this.app.config.env;
    // this.ctx.body = `${this.ctx.helper.urlFor('home')}, ${this.ctx.helper.pathFor('/')}`;
    // console.log('this.service.home', this.service.home.echo());
    this.ctx.body = await this.service.home.echo();
    // this.ctx.body = 1111;
  }
  async index1() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    ctx.body = 302;
  }
}

module.exports = HomeController;
