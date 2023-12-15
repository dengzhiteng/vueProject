const dayjs = require("dayjs");
// 处理时间格式
export function formatTime(time, format) {
  return dayjs(time).format(format || "YYYY-MM-DD HH:mm:ss");
}
// 返回当日凌晨到现在的时间点 返回时间戳
export function nowTime() {
  const startTime = new Date(new Date().toLocaleDateString()).getTime();
  const endTime = dayjs().valueOf();
  const startTimeStr = dayjs().format("YYYY-MM-DD 00:00:00");
  const endTimeStr = dayjs().format("YYYY-MM-DD HH:mm:ss");
  return { startTime, endTime, startTimeStr, endTimeStr };
}
