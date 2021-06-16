
// import { Controller } from 'egg';
const { Controller } =  require('egg');
// import * as CryptoJS from "crypto-js";
// const key = CryptoJS.enc.Utf8.parse("CQYcpc6VkvufYW5k9cLvOA==");
class IndexController extends Controller {
  async index() {
    const { ctx, app } = this;
    // const { sign } = this.ctx.request.query
    const responseData = {
      userName: 'zs'
    }
    console.log(1)
    await ctx.renderClient('index.js', { prefix: '/spa', url: ctx.url, list: '11' });
  }
}

module.exports = IndexController;
