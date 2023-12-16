# Vue 3 + Vite +ts 学习项目
- 在 jsconfig.json 中设置路径提示,在 viete.config.js 中设置别名

## 20230629

- [node 升级](https://blog.csdn.net/m0_56745001/article/details/129381751) 安装 element-plus 报一下错误： Unsupported URL Type: npm:@sxzz/popperjs-es@^2.11.7 然后上网找原因：由于当前的 npm(v6.14.8)版本较低，要升级 npm，

```
npm install -g npm
```

- [npm 与 cnpm 版本不一致](https://blog.csdn.net/weixin_43221910/article/details/124892665)
- 使用 linux 创建目录结构
- 创建 vue3.0 模板

## 20230630

- [右击,使用 vscode 打开文件](https://blog.csdn.net/kinghzking/article/details/126185822)
- 完成路由搭建

1. 注意路由导入文件的时候一定要是完整的路径

```js
// 错误写法
import Home from "@/views/Home"
// 一直提示,[vite] Internal server error: EISDIR: illegal operation on a directory, read

// 正确写法
import Home from "@/views/Home/index.vue"
```

## 20230726

- 由 npm 改用 yarn,若要再次使用 npm 来管理项目,则删除 node_modules、yarn.lock 即可
- 引用 iconfont 直接先使用在线的 ,便于后续添加新的 iconfont
- vscode 要删除一个字母,再写一个字码才有 提示 ...怎么解决??

## 20230727

- 项目中使用 fetch

## 20230729

- 引入组件报错， VUE 报错：Already included file name 解决办法

1. 更换组件名

```
- vscode 登录账户 同步设置
- 动态路由，嵌套路由，路由传参
- 在 '/' 根路径的路由中不能起别用:(未解决)
- 登录页面

```
## 20230730

- 动态路由
- vscode 中代码提示问题
- 打包后页面资源加载 404
- 配置环境变量
- css 与系统环境风格配套
- 路由 记住滚动位置,如果没有生效，那么要注意是不是 html 的高度设置成了 100%
- 定义 css 变量
- color-scheme 和夜间模式
- [深色 ，浅色 两套主题](https://blog.csdn.net/duninet/article/details/104882324/)

## 20230731

- git pull,提示 Failed to connect to github.com port 443: Timed out fatal: unable to access 'https://github.com/dengzhiteng/vue3.git/': Failed to connect to github.com port 443: Timed out [参考资料](https://blog.csdn.net/weixin_44465434/article/details/124366982) 端口号设置应该去查看自己电脑的代理端口

problem git pull 403 time out ,尝试清除代理 [参考文章](https://blog.csdn.net/qq_42777433/article/details/129026998)

```
git config --global --unset http.proxy
git config --global --unset https.proxy

```

- 关闭 vpn 翻墙工具
- [刷新dns](https://blog.csdn.net/m0_69087087/article/details/128838186)

task 回到顶部

## 20230801

task 引入 ts,并改造现有代码

## 20230802

task 引入 autoprefixer,自动添加样式前缀 task 引入 postcss-pxtorem task 引入 mock

vite-plugin-mock3.0.0 版本运行报错解决办法：将 vite-plugin-mock 换成 2.9.6 版本

task nvm node 版本管理

## 20230803

task 引入 prettier
fix html 比较短，却也换行，通过设置 printWidth 属性来设置每一行的字数 [参考文章](https://www.cnblogs.com/mesmerize/p/15993937.html)

## 20230804

task 引入[xlsx.js](https://github.com/rockboom/SheetJS-docs-zh-CN) 前端导出

## 20230805

task 引入eslint
task 全局指令,防抖与节流
task 取消请求

## 20230808

task 使用 ts

- scoped 的样式不会应用在 v-html 内部,解决方法:

```css
:deep(.red) {
  color: red;
}
```

- 环境变量在html 文件中的使用

## 20230810

task 使用piana
task 重新封装axios
task npm 与 node 关系

## 20230814

- fixbug 热更新失效

路由定义大小写必须和定义的时候一致,文件写的是VueDemo ,路由定义却写成了vueDemo,导致了热更新失效

```js
{
  path: "/VueDemo",
  component: () => import("@/views/vueDemo/index.vue"),
  meta: {
    title: "VueDemo"
  }
}
```

## 20230815

- 原生绘制表格
- 原生绘制搜索,模百度搜索,节流 用上
- 插槽 v-slot: 指令可以简写为 #
- 骨架屏

```js
// 打印代码运行时长
console.time("time1")
for (let i = 0; i < 50000; i++) {}
console.timeEnd("time1")
```

## 20230818
