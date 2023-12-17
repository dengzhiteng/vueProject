// 基础路由
const routes = [
  {
    path: "/",
    redirect: "/table"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
    meta: {
      title: "登录",
    }
  }
]
export default routes
