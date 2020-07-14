'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async echo() {
    const data = await this.ctx.curl('http://baidu.com');
    console.log('data', data);
    return data;
    // return 11111;
  }
}

module.exports = HomeService;
