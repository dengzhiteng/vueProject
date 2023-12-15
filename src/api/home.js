// 放置首页相关接口
import request from "@/utils/request";

// 2.1今日收费金额（元）
export function getRealFeeCount(data) {
  return request({
    url: "/openapi/getRealFeeCount",
    params: data
  });
}
// 2.2今日收费停车（次）
export function getVehicleCount(data) {
  return request({
    url: "/openapi/getVehicleCount",
    params: data
  });
}

// 2.3剩余空车位
export function getFreeCount(data) {
  return request({
    url: "/openapi/getFreeCount",
    params: data
  });
}

// 2.4 今日发放优惠卷（张）
export function getPreferCount(data) {
  return request({
    url: "/openapi/getPreferCount",
    params: data
  });
}

// 2.5今日停车时长统计
export function getDurationTypeCount(data) {
  return request({
    url: "/openapi/getDurationTypeCount",
    params: data
  });
}

// 2.6今日收费方式统计
export function getDetailTypeFeeCount(data) {
  return request({
    url: "/openapi/getDetailTypeFeeCount",
    params: data
  });
}
