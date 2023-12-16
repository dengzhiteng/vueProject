import "reset-css"
import "animate.css"
import "@/assets/style/tailwind.css" // tailwind.css 一定要在 App.vue 引入前引入,否则会导致样式冲突
import "@/assets/style/main.css"
import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router"
import { createPinia } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import { useFocus, useDebounce, uesThrottle } from "./directives/index"
// 路由权限控制
import "@/router/permission"
const app = createApp(App)
const pinia = createPinia()
// 自定义指令
const directives: any = {
  focus: useFocus,
  debounce: useDebounce,
  throttle: uesThrottle
}
Object.keys(directives).forEach(key => {
  app.directive(key, directives[key])
})
// 全局组件注册
import TableList from "@/components/TableList.vue"
import Form from "@/components/Form.vue"
app.component("MyTable", TableList)
app.component("MyForm", Form)
//....
app.use(pinia).use(router).mount("#app")
pinia.use(piniaPluginPersistedstate)
