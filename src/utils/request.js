import axios from "axios";
import { Message } from "element-ui";
const SUCCESSCODE = 200
const service = axios.create({
  timeout: 5000
});
service.interceptors.request.use(
  config => {
    let userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
      if (config.data) {
        config.data.accessToken = userInfo.accessToken;
      } else if (config.params) {
        config.params.accessToken = userInfo.accessToken;
      }
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.code === SUCCESSCODE) return res

    Message({
      message: res.msg,
      type: "error",
      duration: 3 * 1000
    })
    return Promise.reject("error")
  },
  error => {
    Message({
      message: error.msg,
      type: "error",
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
