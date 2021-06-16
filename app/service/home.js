'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async echo() {
    const data = await this.ctx.curl('http://baidu.com');
    // console.log('data', data);
    return data;
    // return 11111;
  }
  async echo1() {
    return this.common();
    // return '这是echo1';
  }
  async common() {
    return await this.ctx.curl('http://127.0.0.1:7001/user');
    // return 'zheshi common';
  }
}

module.exports = HomeService;
