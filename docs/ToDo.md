-
- 引入 iconfont 在线
- 项目中使用 fetch
- 路由跳转
- 动态路由
- 环境变量
- 多环境打包
- 使用 ts
- 自定义 bem css 架构,并在项目中使用
- 错误页面绘制,1. 3 秒回到上一个页面 ,也可以自己点击立即返回上一个页面, 也可以点击回到主页
- 回到顶部
- 记录滚动位置
- 购物车
- 支付
- 引入 dataV ,做一个大数据视图
- 引入 mock 模拟数据
- 前端导出
- 环境变量
- 多环境打包

"core-js": "^2.6.5",
"countup": "^1.8.2",
"dayjs": "^1.8.15",
"echarts": "^5.1.2",
"gm-crypt": "^0.0.2",
"@wangeditor/editor-for-vue": "^1.0.2",
"sortablejs": "^1.15.0",
"clipboard": "^2.0.4",
"cos-js-sdk-v5": "^1.2.16",
"dropzone": "5.5.1",
"fuse.js": "3.4.4",
"js-cookie": "2.2.0",
"vue-count-to": "1.0.13",
"vue-fullscreen": "^2.1.6",
"moment": "^2.29.1",
"normalize.css": "7.0.0",
"nprogress": "0.2.0",
"path-to-regexp": "2.4.0",
"querystring": "^0.2.0",
"chai": "^4.2.0",
"@wangeditor/editor": "^5.1.2",

process.env.VUE_APP_VERSION = new Date().getTime();
process.env.VUE_APP_TITLE = '免疫规划信息管理系统';
process.env.VUE_APP_CA = true;
