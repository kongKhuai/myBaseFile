# npm与依赖

> 共 8 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [清理缓存](#sec-1) — 有道云笔记 · `vue/NPM/清理缓存.md`
2. [npm安装依赖包出错问题处理](#sec-2) — 有道云笔记 · `vue/npm安装依赖包出错问题处理.md`
3. [npm设置和取消代理的方法](#sec-3) — 有道云笔记 · `vue/npm设置和取消代理的方法.md`
4. [npm 命令与 yarn 命令切换](#sec-4) — myBaseFile · `vue/npm/node-sass.md`
5. [Mac/Linux](#sec-5) — myBaseFile · `vue/npm/npm 处理异常常用办法.md`
6. [npm 命令与 yarn 命令切换(2)](#sec-6) — myBaseFile · `vue/npm/npm、yarn.md`
7. [国内镜像](#sec-7) — myBaseFile · `vue/npm/国内镜像.md`
8. [安装依赖慢，如何解决？](#sec-8) — myBaseFile · `vue/npm/安装依赖慢，如何解决？.md`

---

<a id="sec-1"></a>
## 清理缓存

> 来源：有道云笔记
> 原路径：`vue/NPM/清理缓存.md`

npm cache clean -f

npm install -g cnpm --registry=https://registry.npm.taobao.org1

<a id="sec-2"></a>
## npm安装依赖包出错问题处理

> 来源：有道云笔记
> 原路径：`vue/npm安装依赖包出错问题处理.md`

npm install --force 强制重新安装

本文记录在使用npm安装依赖包过程中踩过的坑。一般来说，npm安装失败时需要注意下面几点：
解决npm ERR! code ENOENT
解决方案1：npm cache clean --force
解决方案2：
npm ERR! enoent ENOENT: no such file or directory, open '/home/sida/repo/did-
sidetree.js/node_modules/write-pkg/node_modules/pify/package.json.909409536'

用npm install 单独安装报错中出现的包名：例如出现上边的错，则npm install pify --
registry=https://registry.npm.taobao.org
npm ERR! code ECONNRESET
在使用npm安装node的模块的时候，经常会出现下面的一些错误：
这些错误的原因很有可能是npm使用默认的源下载安装包，而默认的安装源是国外网站，国内访问不了无法获取依赖包信息。
这时只需要更换为国内的安装源即可，可在命令行更换为国内淘宝的源：

<a id="sec-3"></a>
## npm设置和取消代理的方法

> 来源：有道云笔记
> 原路径：`vue/npm设置和取消代理的方法.md`

设置代理
npm config set proxy=http://127.0.0.1:8087 npm config set registry=http://registry.npmjs.org
关于https
经过上面设置使用了http开头的源，因此不需要设https_proxy了，否则还要增加一句:
npm config set https-proxy http://server:port代理用户名和密码
npm config set proxy http://username:password@server:port npm confit set https-proxy
http://username:password@server:port取消代理
npm config delete proxy npm config delete https-proxy
修改源
请参考
https://segmentfault.com/a/1190000002589144

<a id="sec-4"></a>
## npm 命令与 yarn 命令切换

> 来源：myBaseFile
> 原路径：`vue/npm/node-sass.md`

设置为淘宝镜像
npm 设置为淘宝镜像
npm config set registry <https://registry.npm.taobao.org/>

yarn 设置为淘宝镜像
yarn config set registry <https://registry.npm.taobao.org/>

设置为官方镜像
npm 设置为官方镜像
npm config set registry <https://registry.npmjs.org/>

yarn 设置为官方镜像
yarn config set registry <https://registry.yarnpkg.com>

判断是否设置成功
yarn
yarn config get registry

执行上面这条命令后，查看控制台输出是否为你设置的镜像地址。

npm
npm get registry

执行上面这条命令后，查看控制台输出是否为你设置的镜像地址。

#### npm 命令与 yarn 命令切换

| npm                                       | Yarn                                 |
| :---------------------------------------- | :----------------------------------- |
| `npm install`                             | `yarn install`                       |
| (N/A)                                     | `yarn install --flat`                |
| (N/A)                                     | `yarn install --har`                 |
| (N/A)                                     | `yarn install --no-lockfile`         |
| (N/A)                                     | `yarn install --pure-lockfile`       |
| `npm install [package]`                   | (N/A)                                |
| `npm install --save [package]`            | `yarn add [package]`                 |
| `npm install --save-dev [package]`        | `yarn add [package] [--dev/-D]`      |
| (N/A)                                     | `yarn add [package] [--peer/-P]`     |
| `npm install --save-optional [package]`   | `yarn add [package] [--optional/-O]` |
| `npm install --save-exact [package]`      | `yarn add [package] [--exact/-E]`    |
| (N/A)                                     | `yarn add [package] [--tilde/-T]`    |
| `npm install --global [package]`          | `yarn global add [package]`          |
| `npm rebuild`                             | `yarn install --force`               |
| `npm uninstall [package]`                 | (N/A)                                |
| `npm uninstall --save [package]`          | `yarn remove [package]`              |
| `npm uninstall --save-dev [package]`      | `yarn remove [package]`              |
| `npm uninstall --save-optional [package]` | `yarn remove [package]`              |
| `npm cache clean`                         | `yarn cache clean`                   |
| `rm -rf node_modules && npm install`      | `yarn upgrade`                       |

| npm                                       | Yarn                                 |
| :---------------------------------------- | :----------------------------------- |
| `npm install`                             | `yarn install`                       |
| _(N/A)_                                   | `yarn install --flat`                |
| _(N/A)_                                   | `yarn install --har`                 |
| _(N/A)_                                   | `yarn install --no-lockfile`         |
| _(N/A)_                                   | `yarn install --pure-lockfile`       |
| `npm install [package]`                   | _(N/A)_                              |
| `npm install --save [package]`            | `yarn add [package]`                 |
| `npm install --save-dev [package]`        | `yarn add [package] [--dev/-D]`      |
| _(N/A)_                                   | `yarn add [package] [--peer/-P]`     |
| `npm install --save-optional [package]`   | `yarn add [package] [--optional/-O]` |
| `npm install --save-exact [package]`      | `yarn add [package] [--exact/-E]`    |
| _(N/A)_                                   | `yarn add [package] [--tilde/-T]`    |
| `npm install --global [package]`          | `yarn global add [package]`          |
| `npm rebuild`                             | `yarn install --force`               |
| `npm uninstall [package]`                 | _(N/A)_                              |
| `npm uninstall --save [package]`          | `yarn remove [package]`              |
| `npm uninstall --save-dev [package]`      | `yarn remove [package]`              |
| `npm uninstall --save-optional [package]` | `yarn remove [package]`              |
| `npm cache clean`                         | `yarn cache clean`                   |
| `rm -rf node_modules && npm install`      | `yarn upgrade`                       |

<a id="sec-5"></a>
## Mac/Linux

> 来源：myBaseFile
> 原路径：`vue/npm/npm 处理异常常用办法.md`

==清理缓存==
```
npm cache clean --force
```
==删除.npmrc==
```
npm config get proxy
```

```
npm config rm proxy
```

```
npm config rm https-proxy
```

删除 `node_modules`

```
# Mac/Linux
rm -rf node_modules

# Windows
rd /s /q node_modules
```

<a id="sec-6"></a>
## npm 命令与 yarn 命令切换(2)

> 来源：myBaseFile
> 原路径：`vue/npm/npm、yarn.md`

设置为淘宝镜像
npm 设置为淘宝镜像
npm config set registry <https://registry.npm.taobao.org/>

yarn 设置为淘宝镜像
yarn config set registry <https://registry.npm.taobao.org/>

设置为官方镜像
npm 设置为官方镜像
npm config set registry <https://registry.npmjs.org/>

yarn 设置为官方镜像
yarn config set registry <https://registry.yarnpkg.com>

判断是否设置成功
yarn
yarn config get registry

执行上面这条命令后，查看控制台输出是否为你设置的镜像地址。

npm
npm get registry

执行上面这条命令后，查看控制台输出是否为你设置的镜像地址。

#### npm 命令与 yarn 命令切换

| npm                                       | Yarn                                 |
| :---------------------------------------- | :----------------------------------- |
| `npm install`                             | `yarn install`                       |
| (N/A)                                     | `yarn install --flat`                |
| (N/A)                                     | `yarn install --har`                 |
| (N/A)                                     | `yarn install --no-lockfile`         |
| (N/A)                                     | `yarn install --pure-lockfile`       |
| `npm install [package]`                   | (N/A)                                |
| `npm install --save [package]`            | `yarn add [package]`                 |
| `npm install --save-dev [package]`        | `yarn add [package] [--dev/-D]`      |
| (N/A)                                     | `yarn add [package] [--peer/-P]`     |
| `npm install --save-optional [package]`   | `yarn add [package] [--optional/-O]` |
| `npm install --save-exact [package]`      | `yarn add [package] [--exact/-E]`    |
| (N/A)                                     | `yarn add [package] [--tilde/-T]`    |
| `npm install --global [package]`          | `yarn global add [package]`          |
| `npm rebuild`                             | `yarn install --force`               |
| `npm uninstall [package]`                 | (N/A)                                |
| `npm uninstall --save [package]`          | `yarn remove [package]`              |
| `npm uninstall --save-dev [package]`      | `yarn remove [package]`              |
| `npm uninstall --save-optional [package]` | `yarn remove [package]`              |
| `npm cache clean`                         | `yarn cache clean`                   |
| `rm -rf node_modules && npm install`      | `yarn upgrade`                       |

| npm                                       | Yarn                                 |
| :---------------------------------------- | :----------------------------------- |
| `npm install`                             | `yarn install`                       |
| _(N/A)_                                   | `yarn install --flat`                |
| _(N/A)_                                   | `yarn install --har`                 |
| _(N/A)_                                   | `yarn install --no-lockfile`         |
| _(N/A)_                                   | `yarn install --pure-lockfile`       |
| `npm install [package]`                   | _(N/A)_                              |
| `npm install --save [package]`            | `yarn add [package]`                 |
| `npm install --save-dev [package]`        | `yarn add [package] [--dev/-D]`      |
| _(N/A)_                                   | `yarn add [package] [--peer/-P]`     |
| `npm install --save-optional [package]`   | `yarn add [package] [--optional/-O]` |
| `npm install --save-exact [package]`      | `yarn add [package] [--exact/-E]`    |
| _(N/A)_                                   | `yarn add [package] [--tilde/-T]`    |
| `npm install --global [package]`          | `yarn global add [package]`          |
| `npm rebuild`                             | `yarn install --force`               |
| `npm uninstall [package]`                 | _(N/A)_                              |
| `npm uninstall --save [package]`          | `yarn remove [package]`              |
| `npm uninstall --save-dev [package]`      | `yarn remove [package]`              |
| `npm uninstall --save-optional [package]` | `yarn remove [package]`              |
| `npm cache clean`                         | `yarn cache clean`                   |
| `rm -rf node_modules && npm install`      | `yarn upgrade`                       |

<a id="sec-7"></a>
## 国内镜像

> 来源：myBaseFile
> 原路径：`vue/npm/国内镜像.md`

国内镜像，灵活切换
腾讯: http://mirrors.cloud.tencent.com/npm/
华为：https://mirrors.huaweicloud.com/repository/npm/
中科大镜像: https://registry.npmjs.org/
淘宝的  https://registry.npmmirror.com/
官方的  https://registry.npmjs.org/

```
// 1. 如果不确定可以先检测一下自己使用了那个镜像源
npm config get registry

// 2. 清理一下缓存
npm cache clean --force

// 3. 切换新的源地址
npm config set registry https://registry.npmmirror.com
npm config set registry https://registry.npmjs.org/

```

<a id="sec-8"></a>
## 安装依赖慢，如何解决？

> 来源：myBaseFile
> 原路径：`vue/npm/安装依赖慢，如何解决？.md`

使用下面命令查看当前 `npm` 源

```
npm config ls
```

执行完上面的命令后，在您没有设置过任何源的情况下，默认是 [npmjs (opens new window)](https://www.npmjs.com/)官方源，
registry = "https://registry.npmjs.org/"

不管是什么源，我们都可以不用管，直接执行下面命令即可

```
执行这个命令
npm config set registry https://registry.npmmirror.com

记录的，不用管
华为的registry = "https://repo.huaweicloud.com/repository/npm/"
```

上面的命令是将本地的源换成国内源 [npmmirror (opens new window)](https://npmmirror.com/)，经过几轮测试，发现它的下载速度快且同步率高，同步频率 `10` 分钟一次，如果您之前的源是这个 `http://registry.npm.taobao.org` ，那您必须换成 `npmmirror` 啦，因为原淘宝 `npm` 域名即将停止解析 [具体了解(opens new window)](https://zhuanlan.zhihu.com/p/465424728?spm=a2c6h.24755359.0.0.6d444dccAL1K1J)
执行完上面的命令后再使用 `①` 中的命令查看本地源
当我们将本地源换成 `npmmirror` 后，再回到 项目，将 `pnpm-lock.yaml` 和 `node_modules` 这两个文件删除，然后执行下面的命令重新安装依赖，您就会发现安装速度很快啦

提示

如果您本地有自己维护的 `npm` 包，请在发包前使用下面命令将本地源换成 `npm` 官方源，这样才能保证您发包成功，发完之后再换成 `npmmirror` 源即可。同理，如何您公司有私服的话，也是如此操作，只不过把下面命令 `registry` 后的地址换成私服的地址即可。如何部署私服可参考 [该文章(opens new window)](https://www.cnblogs.com/venblogs/p/14371381.html)

```
npm config set registry https://registry.npmjs.org
```

1

当然第二种办法也是最方便的办法就是将下面代码加入到您自己库的 `package.json` 里 [查看具体参考(opens new window)](https://github.com/pure-admin/pure-admin-table/blob/main/package.json#L24-L26)

```
"publishConfig": {
  "registry": "https://registry.npmjs.org/"
}
```
