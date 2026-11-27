# 这个 GitHub 神器太牛逼啦，2 周就狂揽 6000 多点赞。


**逛逛GitHub**

热门「开源项目」推送到你眼前，每日为你节省 1 小时。 给我发消息可咨询各种开源项目，专注 AI、硬科技开源领域。

822篇原创内容

公众号

最近刷 GitHub 的时候看到一个项目特别猛。

3 月 14 号才开源，两天就 1.8K Star，一周破 4K，现在已经 6500+ 了。

叫 **OpenCLI**，一句话说清楚它干的事：**把任何网站、任何桌面应用、任何本地工具，统统变成命令行。**

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU2vy1n9oEEsvPYzicpHhcaqLibHUiciaCDNkRBwib3GK3pO6cLv5B3ictyXd4kic9Ic8XVicIx3jHcUxpxN40h05X4E2Ehh4xgH5NgZSicI/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=0)

B 站热榜、知乎热搜、小红书搜索、Twitter 发推、Reddit 刷帖、YouTube 搜视频。

以前你得打开浏览器，一个一个网站去点。

现在一行命令就搞定了。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU3zfDeKl9yiaFUZeiaWzaF3eNDVH9XEbZodRqhkpugkhLc3XAbSzsd9lb1xXcMOfZprUBfcs8ibA6tAHuOaYOFU3ibA52chVYK813g/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1)

甚至 Cursor、ChatGPT、Notion、Discord 这些桌面应用也能命令行控制。

更离谱的是，它还能让 AI 自己控制自己。

01

开源项目简介

OpenCLI 的定位是一个**万能 CLI 枢纽**。

它不是给某一个网站做的命令行工具，而是一个通用框架。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU1Xnno397401ZJGJicjJsktjkyUt9e1kLdu5gwKkEHFuTMYM40ZpgDR06BrH7uRMF9bbTHL3JFH1OqSF5a1q1KITbic1XggNIdOE/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2)

目前支持 50+ 个平台，80+ 条命令，覆盖国内外主流的网站和应用。

看一下它支持的部分平台：

![图片](https://mmbiz.qpic.cn/mmbiz_png/M2ibDBMdECU35OwL9oof55uRzD13cqujklXs59g5dqTAPLiajN6FDOmMQVXWNeqYPO1iayGALgIicWJibTbKLImEp0y9oFkynqFxmBaVof4a3rwU/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3)

还有桌面应用：Cursor、ChatGPT、Codex、Notion、Discord、豆包等等。

对了，甚至连抖音、拼多多、携程、雪球这种国内应用都有适配。

```
开源地址：github.com/jackwener/opencli
```

02

最牛的地方

**复用 Chrome 登录态**

**这是 OpenCLI 最核心的设计。**

说白了，你平时在 Chrome 里登录过的网站，OpenCLI 直接复用你的登录状态。

不需要申请 API Key，不需要搞 Token，不需要存任何凭证。

你的账号信息永远留在浏览器里，不会泄露出去。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU3x2n3fFTAqaxBeLL1frPwd2d5icdQo0OSy8RNZXz6gia8HXzxHce0mkx8wx0aS0k2Fcy3MR81TLdoWmHL4eZKcMHUD0ZIte8sNw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4)

这对很多需要登录才能用的功能来说太重要了。

比如你想在命令行里刷 B 站关注动态、看知乎收藏、查 Boss 直聘推荐岗位，直接就能用，不用先去折腾各种认证。

最近有一个大更新

OpenCLI 现在支持把所有 Electron 桌面应用 CLI 化。

比如你可以在终端里让 Cursor 帮你写代码、让 ChatGPT 帮你回答问题、让 Notion 帮你搜索笔记。

而且结合 Claude Code 或者 OpenClaw，就能实现 **AI 自己控制自己**。。

AI Agent 在终端里调 opencli cursor send，就能控制 Cursor IDE。调 opencli chatgpt ask，就能控制 ChatGPT。

说白了，每个 Electron 应用都变成了 AI 可以调用的工具。

**AI Agent 原生**

OpenCLI 专门为 AI Agent 做了适配。

它有四个 AI 专属命令：

```
opencli explore：自动发现网站的 API 接口
```

你只需要在 AGENT.md 里加一行配置，AI 就能自动发现 OpenCLI 的所有命令，然后直接调用。

对于 AI Agent 开发者来说，这就是一个现成的万能工具箱。

**外部 CLI 枢纽**

除了网站和桌面应用，OpenCLI 还能统一管理你本地的命令行工具。

gh、docker、kubectl、obsidian 这些，都可以通过 opencli 来调用。

而且如果你系统里没装某个工具，它还会自动帮你装上。

```
opencli gh pr list --limit 5      # GitHub
```

一行 `opencli register mycli` 就能把你自己的本地 CLI 也注册进去。

03

快速上手

安装非常简单，一行命令：

```
npm install -g @jackwener/opencli
```

装完之后，需要配置一个 Chrome 扩展，叫 Browser Bridge。

这是 OpenCLI 和你浏览器之间的桥梁，用来复用你的登录状态。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU3tF8ppvhGEnmH8vUWBadAISZU4twyvibjjuc1SAaVvfhknnkj8sPCLdE8bfd1j8ubvHfibCoP7058SbX95wMr0rJDEBU4bTaPnk/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=5)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/M2ibDBMdECU1JunroWELcXIZKWSAChKbleMbOUeaodibTicP73zpIx0el9seZibibMqZT82JRZzoeo31N8fTVZnYwCJavkMhSjAue29ibWQDQTD68/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=6)

然后用下面命令试试看：

```
# 查看所有命令
```

输出支持 table、json、yaml、md、csv 五种格式，直接管道给 jq 或者丢给 AI Agent 都行。

遇到问题就跑一下 `opencli doctor`，它会自动诊断扩展、daemon 和浏览器的连接状态。

04

OpenCLI 解决的痛点很明确

**每次想从某个网站抓点数据或者做点操作，都要么去翻 API 文档，要么自己写爬虫，要么手动一个个点。**

现在一行命令就搞定了。

而且它复用 Chrome 登录态的设计真的很聪明。

不需要你申请各种 API Key，不需要折腾 OAuth，直接用你已经登录好的状态。安全又方便。

对开发者来说，它还是一个给 AI Agent 用的万能工具箱。

AI 不再只能调 API 了，它可以直接操作网站和桌面应用。

**这个项目迭代速度也特别快，两周发了十几个版本。**

插件系统也刚上线，已经有人做了 GitHub Trending、多平台热榜聚合、掘金热门等插件。

如果你经常需要批量处理网站数据，或者想让 AI Agent 能直接操作浏览器和应用，OpenCLI 值得试试。

05

**点击下方卡片，关注逛逛 GitHub**

![](http://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruyXo8VzACicO8MVibibicuJUQ8Vzghx6WF8F51breYjBIuYd4cj6wp26BYrg850bNuA20rdic9UyKIUhpg/300?wx_fmt=png&wxfrom=19)

**逛逛GitHub**

热门「开源项目」推送到你眼前，每日为你节省 1 小时。 给我发消息可咨询各种开源项目，专注 AI、硬科技开源领域。

822篇原创内容

公众号

这个公众号历史发布过很多有趣的开源项目，如果你懒得翻文章一个个找，你直接关注微信公众号：逛逛 GitHub ，后台对话聊天就行了：

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/ePw3ZeGRrux2sRxwJzmfe1lK8ic33XvtVPsIPCMV7hjicmScibtxIZ1NsjXxNoVNMb3zLy32Al7PSpfbVAtrACYqQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic#imgIndex=11)

Agent · 目录

上一篇让你的 Claude Code 起飞的 5 个小技巧，我用的很爽。

阅读 382

​

**留言**

写留言

[](javacript:;)

![](https://mmbiz.qpic.cn/mmbiz_png/ePw3ZeGRruyXo8VzACicO8MVibibicuJUQ8Vzghx6WF8F51breYjBIuYd4cj6wp26BYrg850bNuA20rdic9UyKIUhpg/300?wx_fmt=png&wxfrom=18)

逛逛GitHub

2

7

1

写留言

![](https://wx.qlogo.cn/mmopen/duc2TvpEgSTd5LneUBac5mDb1xJ2yNG2xhD1uvkTlFMzII16OwoHkyTZQ2dmc1n1FN1iawT7RpbrbbYniadibEpwKtFoliaTiahm2/96)

复制搜一搜

复制搜一搜

暂无评论