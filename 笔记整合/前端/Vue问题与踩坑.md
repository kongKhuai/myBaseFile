# Vue问题与踩坑

> 共 1 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [Vue打包文件放在服务器后，浏览器存在缓存问题](#sec-1) — 有道云笔记 · `vue/Vue打包文件放在服务器后，浏览器存在缓存问题.md`

---

<a id="sec-1"></a>
## Vue打包文件放在服务器后，浏览器存在缓存问题

> 来源：有道云笔记
> 原路径：`vue/Vue打包文件放在服务器后，浏览器存在缓存问题.md`

每次打包更新版本发到服务器上，导致偶尔会出现不能即使更新最新代码，浏览器存在缓存的问题。
解决方法：找到webpack .prod.conf.js
   1.定义版本变量： const  Version = new Date().getTime(); // 这里使用的是时间戳 来区分
然后直接 npm run build 打包后 就可以看到dist 文件里的js 文件名带上里版本号

但是 ，我们发现 vue-cli里的默认配置，css和js的名字都加了哈希值，所以新版本css、js和就旧版本的名字是不同的，不会有缓存问题。那么就可能是打包好的index.html放到服务器里去的时候，
index.html在服务器端可能是有缓存的，这需要在服务器配置不让缓存index.html
2、nginx 配置，让index.html不缓存在开发调试web的时候，经常会碰到因浏览器缓存(cache)而经常要去清空缓存或者强制刷新来测试的烦恼，提供下apache不缓存配置和 不缓存配置的设置。在常用的缓存设置里面有两种方式，都是使用add_header来设置：分别为Cache-Control和Pragma。
add_header Cache-Control no-store; add_header Pragma no-cache;
Vue打包文件放在服务器后，浏览器存在缓存问题
```
output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].'+_Version+'js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].'+_Version+'js')
  },
output: {
  // 输出重构   打包编译后的  文件名称   【模块名称.版本号.时间戳】
  filename: `static/js/[name].${Timestamp}.js`,
  chunkFilename: `static/js/[name].${Timestamp}.js`
}
```
nginx

no-cache浏览器会缓存，但刷新页面或者重新打开时 会请求服务器，服务器可以响应304，如果文件有改动就会响应200
no-store浏览器不缓存，刷新页面需要重新下载页面
