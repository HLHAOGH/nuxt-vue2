// 处理路由拦截重定向登录页-显示404问题
export default function ({ route, redirect }) {
  if (process.client) {
    const token = sessionStorage.getItem('token');
    if (!token && route.path !== '/login') {
      redirect('/login');
    }
  }
}