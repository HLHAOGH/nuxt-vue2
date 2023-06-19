// pm2进程管理配置,需要重新npm build打包
module.exports = {
  apps: [
    {
      name: 'nuxt-vue',  // 应用名称，可以自定义
      cwd: './', // 启动应用程序目录
      script: './node_modules/nuxt/bin/nuxt.js', // 应用入口文件路径
      args: 'start', // 启动参数
      // 集群模式：根据可用cpu的数量，这将极大地提高应用程序的性能和可靠性
      exec_mode: 'fork', // 启动应用程序的模式，可以是“cluster”或“fork”，默认fork
      instances: 1, // 要启动的应用实例数量，cluster模式对应'max'
      watch: true, // 启用监视和重启功能
      // ignore_watch: ["[\/\]./", "node_modules"], // 监视功能忽略某些文件或文件夹
      max_memory_restart: "2G", // 超过指定的内存量，应用程序将重新启动
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      log_date_format: 	"YYYY-MM-DD HH:mm Z", // 日志日期格式
      error_file: '$HOME/.pm2/logs/err.log', // 日志错误文件路径
      max_restarts: 10, // 最大重启次数
      autorestart: true, // 自动重启
    }
  ]
}