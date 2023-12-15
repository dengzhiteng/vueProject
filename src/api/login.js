// 放置和登录相关的接口
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/openapi/login",
    method: "post",
    params: data
  });
}
// 更改密码
export function updatePwd(data) {
  return request({
    url: "/openapi/updatePwd",
    method: "post",
    data
  });
}
