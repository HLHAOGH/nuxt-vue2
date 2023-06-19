// 路由拦截处理hook函数
export default (context) => {
  // console.log('context', context)
  const { router } = context.app;
  if (process.client) {
    const token = sessionStorage.getItem('token');
    router.beforeEach( (to, from, next) => {
      // if (!token && to.path !== '/login' ) {
      //   next('/login');
      // } else if (to.path !== '/login') {
      //   next();
      // } else {
      //   next();
      // }
      next();
    })
  }
};