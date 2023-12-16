// 路由白名单
const basicRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "/errorPage/:type",
    component: () => import("@/views/ErrorPage/index.vue")
  }
]
export default basicRoutes
