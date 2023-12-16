import { createRouter, createWebHashHistory } from "vue-router"
import basicRoutes from "./whiteRoutes"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...basicRoutes],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 }
  }
})

export default router
