'use strict';

const Contorller = require('egg').Controller;

class authController extends Contorller {
  // async getAuthTree() {
  async index() {
    const ctx = this.ctx;
    ctx.body = {
      name: '主页',
      path: '/',
    };
  }
  async new() {
    const { ctx } = this;
    ctx.body = 'auth new';
  }
  async show() {
    const { ctx } = this;
    ctx.body = 'auth show';
  }
  async edit() {
    const { ctx } = this;
    ctx.body = 'auth edit';
  }

  // post
  // post 方法 /api/posts  csrf 关掉
  async create() {
    this.ctx.body = {
      state: 0,
      message: 'create',
    };
  }
  // put
  // put 方法 /api/post/1
  async update() {
    this.ctx.body = {
      state: 0,
      message: 'update',
    };
  }
  // del
  // delete /api/post/1
  async destroy() {
    this.ctx.body = {
      state: 0,
      message: 'destroy',
    };
  }
}

module.exports = authController;
