import { useUserStore } from "@/store/user"
import { RouteRecordRaw } from "vue-router"
export async function addAsyncRoutes(router, routerList) {
  const useUser = useUserStore()
  // 过滤没有角色权限的路由
  const filterRoute = (route: RouteRecordRaw): boolean => {
    if (!route.meta?.roles) {
      return true
    } else if (route.meta?.roles.includes(useUser.role)) {
      return true
    } else {
      return false
    }
  }
  const filterFunc = (routes: RouteRecordRaw[], path?: string) => {
    const arr = routes.filter(filterRoute)
    arr.forEach(element => {
      if (path && path !== "/") {
        element.path = path + "/" + element.path
      }
      if (element.children) {
        element.children = filterFunc(element.children, element.path)
      }
    })
    return arr
  }
  // 前端动态路由模式
  let filteredRoutes = <RouteRecordRaw[]>[]
  filteredRoutes = filterFunc(routerList)
  filteredRoutes.forEach(val => {
    router.addRoute(val)
  })
  const _404 = {
    path: "/:catchAll(.*)",
    redirect: "/errorPage/404",
    meta: {
      title: "404"
    }
  }
  router.addRoute(_404)
  useUser.setAsyncRoutes(filteredRoutes)
}
