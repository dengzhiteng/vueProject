import { defineStore } from "pinia"
import type { UserInfo } from "@/type"
import { loginApi } from "@/apis/user"

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref()
    const routes = ref()
    const role = ref()
    // 设置用户信息
    const setUserInfo = info => {
      userInfo.value = info
    }
    // 获取动态路由
    function setAsyncRoutes(data) {
      routes.value = data
    }
    // 登录
    const userLogin = async param => {
      role.value = param.username
      // const res = await loginApi({
      //   username: param.username,
      //   password: param.password
      // })
      // res.userid && setUserInfo(res)
    }
    // 登出
    const userLoginOut = () => {
      userInfo.value = {
        role: "",
        username: "",
        age: 0,
        sex: ""
      }
      role.value = ""
      routes.value = []
    }
    return { userInfo, role, routes, setUserInfo, userLogin, userLoginOut, setAsyncRoutes }
  },
  {
    persist: true
  }
)
