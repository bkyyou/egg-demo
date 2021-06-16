// 我们可以在 app.js 中定义一个 Boot 类
// app.js

class AppBootHook {
	constructor(app) {
		this.app = app;
	}

	configWillLoad() {
		// config 文件已经被读取并合并，但并未生效
		// 这是应用层修改配置的最后时机
		// 该函数只支持同步调用

		// 例如：参数中密码是加密的，此处进行解密
    // this.app.config.mysql.password = decrypt(this.config.mysql.password);
    // console.log('this.app.config', this.app.config);
	}

	async didLoad() {
		// 所有配置加载完毕
		// 可以用来加载应用自定义的文件，启动自定义服务等

		// 例如：加载自定义目录
		// this.app.loader.loadToContext('app/tasks', 'task', {
		// 	fieldClass: 'taskClasses'
		// })
	}

	async willReady() {
		// 所有插件都启动完毕，但是应用整体还是 ready 状态
		// 可以做一些数据初始化工作，这些操作成功才会启动应用

		// 例如： 从数据库加载数据到内存缓存
		// this.app.cache = await this.app.model.query(QUERY_CACHE_SQL)
	}

	
	async didReady() {
		// 应用启动完毕

		// 通过 createAnonymouseContext， 创建匿名的上下文对象，去调用 service，当 ctx 进行实例化之后，将在第一时间调用 service 下的 Biz 下的 requiest 方法。
		// const ctx = await this.app.createAnonymouseContext();
		// await ctx.service.Biz.request();
	}

	async serverDidReady() {
		// http/https service 已启动， 开始接收外部请求
		// 此时可以从 app.server 拿到 servier 的实例

		this.app.server.on('timeout', socket => {
			// handle socket timeout
		})
	}
}

module.exports = AppBootHook