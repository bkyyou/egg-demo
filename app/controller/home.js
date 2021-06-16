'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // this  ctx app service
  async index() {
    // console.log('this', this);
    // const { ctx } = this;
    // this.ctx.body = 'hi, egg';
    // this.ctx.body = this.app.config;
    // this.ctx.body = this.app.config.env;
    // this.ctx.body = `${this.ctx.helper.urlFor('home')}, ${this.ctx.helper.pathFor('/')}`;
    // console.log('this.service.home', this.service.home.echo());
    // console.log('this.app.mysql', this.app);
    this.ctx.body = await this.service.home.echo();
    // this.ctx.body = 1111;
  }
  async home() {
    this.ctx.body = 'egg-demo home';
  }
  async homePostReq() {
    this.ctx.body = 'homePostReq';
  }
  async index1() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    ctx.body = 302;
  }
  async getEcho1() {
    const ctx = this.ctx;
    ctx.body = await this.service.home.echo1();
  }
}

module.exports = HomeController;
