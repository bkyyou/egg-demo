

// import { Context } from 'egg';
// import Axios from 'axios';
// import * as colors from 'colors';

// const axios = Axios.create({
//   timeout: 20 * 1000,
// });

// axios.interceptors.request.use(config => {
//   return config;
// });

// axios.interceptors.response.use(response => response);

// export default {
//   /**
//    * 获取最终请求URL
//    * @param this Context 自动注入
//    * @param path 要请求的URL
//    */
//   // getUrl(this: Context, path: string) {
//   getUrl(path) {
//     // 根据 #domain# 配置进行获取最终的域名
//     const matchResult = path.match(/#.*?#/);
//     if (matchResult && matchResult.length) {
//       const domainPrefix = matchResult[0].split('#')[1];
//       const domain = this.app.config.domainConfig[domainPrefix];
//       const queryPath = path.split('#')[2];
//       if (domain) {
//         return `${domain}${queryPath}`;
//       }
//       throw new Error(
//         `${colors.yellow(`======>  ${matchResult[0]}  <====== 对应域名未配置`)}`,
//       );
//     }
//     return path;
//   },

//   /**
//    * GET 请求方法
//    * @param this Context 自动注入
//    * @param path 发起的请求URL
//    * @param payload 请求入参
//    */
//   // async axiosGet(this: Context, path: string, payload?) {
//   async axiosGet(path, payload) {
//     try {
//       const { cookie } = this.request.header;
//       const url = this.getUrl(path);
//       const res = await axios.get(url, {
//         params: payload,
//         headers: { cookie },
//       });
//       const { data } = res;
//       return Promise.resolve(data);
//     } catch (e) {
//       console.error(e);
//       return Promise.reject(e);
//     }
//   },

//   /**
//    * POST 请求方法
//    * @param this Context 自动注入
//    * @param path 发起的请求URL
//    * @param payload 请求入参
//    */
//   // async axiosPost(this: Context, path: string, payload, authorization?: string) {
//   async axiosPost(path, payload, authorization) {
//     try {
//       const { cookie } = this.request.header;
//       const url = this.getUrl(path);
//       const res = await axios.post(url, payload, { headers: { cookie, Authorization: authorization || null } });
//       const { data } = res;
//       return Promise.resolve(data);
//     } catch (e) {
//       console.error(e);
//       return Promise.reject(e);
//     }
//   },

//   /**
//    *
//    * @param this 请求上下文context， 自动注入
//    * @param options 服务器相应数据
//    */
//   // async success(this: Context, options) {
//   async success(options) {
//     this.body = {
//       success: true,
//       ...options,
//     };
//     // [{"top":105.5,"left":264.984375},{"top":105.5,"left":330}]

//     [{"top":105.5,"left":297.484375}]
//     [{"top":105.5,"left":264.984375},{"top":105.5,"left":330}]
//   },

//   /**
//    *
//    * @param this 请求上下文，自动注入
//    * @param options 服务器相应数据
//    */
//   // async fail(this: Context, options) {
//   async fail(options) {
//     this.body = {
//       ...options,
//       success: false,
//     };
//   },
// };
