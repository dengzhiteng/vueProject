import request from "@/utils/request";

export function login (data) {
  return request({
    url: "/app/login",
    method: "post",
    params: data
  });
}

export function logout (data) {
  return request({
    url: "/app/logout",
    method: "post",
    params: data
  })
}