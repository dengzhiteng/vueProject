import request from "@/utils/axios"
import type { UserInfo } from "@/type"
// 登录
export function loginApi(data) {
  return request({
    url: "/login",
    method: "post",
    data
  })
}
