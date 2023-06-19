# nuxt-vue
以下目录文件定义导出需为函数
- middleware、plugins、modules
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
# npm run start 以生产模式启动一个 Web 服务器 (需要先执行nuxt build)
# 但是这样可能存在服务挂掉的情况，一旦挂掉只能手动重启。所以推荐使用 pm2 进行启动，pm2 是一个进程守护管理器，可以管理和保持应用一直在线
$ npm run build
$ npm run start
# generate static project
$ npm run generate
```
### 部署(使用PM2)
将执行打包命令后生成的 .nuxt目录、static目录、nuxt.config.js、package.json 等资源拷贝到服务器上
 - 安装pm2
 ```bash
  npm install pm2 -g
```
- 进入项目所在的文件夹，执行下面这个命令使用 pm2 启动服务
```bash
  pm2 start npm --name "your app name" -- start
  或
  pm2 start ./node_modules/nuxt/bin/nuxt.js --name "your app name" # 推荐该命令方式
```

### pm2命令
--watch： 在当前目录 + 所有子文件夹中的任何文件更改时监视并重新启动应用程序，并且它将忽略 node_modules 文件夹中的任何更改--ignore-watch="node_modules"
```bash
  pm2 ecosystem                        # 生成一个 ecosystem.config.js 文件
  pm2 startup                          # 开机启动
  pm2 show 0                           # 查看进程详情
  pm2 list                             #查看当前的进程列表
  pm2 stop all                         #停止PM2列表中所有的进程
  pm2 stop 0                           #停止PM2列表中进程为0的进程
  pm2 reload all                       #重载PM2列表中所有的进程
  pm2 reload 0                         #重载PM2列表中进程为0的进程
  pm2 delete 0                         #删除PM2列表中进程为0的进程
  pm2 delete all                       #删除PM2列表中所有的进程
  pm2 logs                             # 查看日志
  pm2 flush                            # 清空日志
  pm2 monit                            # 查看监控信息
  pm2 plus                             # 监控和诊断web界面  
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

### 别名
~ 或 @	srcDir
~~ 或 @@	rootDir
