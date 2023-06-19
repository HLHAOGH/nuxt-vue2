## nuxt中有几个环境变量，可以用来区分不同的运行环境。

process.server/process.client

nuxt中有两个vue对象，一个是运行在服务端的vue，一个是运行在客户端的vue。当你在执行打包命令的时候，服务端的vue中process.server将会被替换成true，然后打包服务端vue；客户端的process.client将会被替换成true，然后打包客户端vue。（可以参考：nuxt中npm run dev/npm run build/npm run generate）

服务端的vue在node环境中执行，客户端的vue在客户端执行。本来两者相安无事，但是有很多生命周期两个vue都会调用到。

- 例如created和beforeCreate在服务端和客户端都会运行；

- 还有asyncData和fetch，middleWare这些虽然第一次在服务端执行，但是页面跳转后，客户端vue也会调用他们。

- 一些特殊的对象或者方法，例如window或者Document对象，只存在客户端，而服务端是没有的，因此如果在created中写window，需要区别是process.client。

```javascript
  created(){
    if(process.client){
        window.****
    }
  }
```