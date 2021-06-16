
// module.exports = app => {
//   return class AdminController extends app.Controller {
//     async login() {
//       const { ctx } = this;
//       console.log(11111)
//       await ctx.renderClient('login.js', {});
//     }

//     async home(ctx) {
//       const list = ctx.service.mock.getArticleList(); 
//       if (ctx.query.mode === 'ssr') {
//         await ctx.render('spa.js', { prefix: '/spa', url: ctx.url, list });
//       } else {
//         await ctx.renderClient('spa.js', { prefix: '/spa', url: ctx.url, list });
//       } 
//     }
//   };
// };

'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  async login() {
    const { ctx } = this;
    await ctx.renderClient('login.js', {});
  }

  async home(ctx) {
    // const list = ctx.service.mock.getArticleList();
    // await ctx.renderClient('spa.js', { prefix: '/spa', url: ctx.url });
    await ctx.renderClient('spa.js', { prefix: '/spa', url: ctx.url, list: [
      {
        id: 0,
        title: 'Egg + React 服务端渲染骨架',
        summary: '基于Egg + React + Webpack3/Webpack2 服务端渲染同构工程骨架项目',
        hits: 550,
        url: 'https://yuque.com/easy-team/egg-react'
      },
      {
        id: 1,
        title: '前端工程化解决方案 easywebpack',
        summary: 'programming instead of configuration, webpack is so easy',
        hits: 550,
        url: 'https://yuque.com/easy-team/easywebpack'
      },
      {
        id: 2,
        title: '最强大的 Webpack CLI 工具 easywebpack-cli',
        summary: 'easywebpack command tool, support init Vue/Reac/Weex boilerplate',
        hits: 278,
        url: 'https://yuque.com/easy-team/easywebpack-cli'
      }
    ] });
  }
}

module.exports = userController;