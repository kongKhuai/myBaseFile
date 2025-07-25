
### volta执行命令

| 功能         | 命令示例                           |
| ---------- | ------------------------------ |
| 安装 Node.js | `volta install node@16.14.0`   |
| 卸载 Node.js | `volta uninstall node@16.14.0` |
| 固定项目版本     | `volta pin node@18.20.4`       |
| 查看已安装版本    | `volta list`                   |
| 查找工具路径     | `volta which node`             |
| 自动补全       | `volta completions bash`       |



使用 [`npm config`](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.npmjs.com%2Fcli%2Fv11%2Fcommands%2Fnpm-config "https://docs.npmjs.com/cli/v11/commands/npm-config") 命令，可以这样设置镜像源：但有点长，特别是源地址，不好记。下面介绍一个便于切换和管理镜像源的工具nrm。
```
$ npm config set registry https://registry.npmmirror.com/
```

### nrm执行命令

| 功能     | 命令示例                         | 说明                        |
| ------ | ---------------------------- | ------------------------- |
| 全局安装   | npm i nrm -g                 |                           |
| 查看所有源  | nrm ls                       | 也可使用`nrm current` 命令查看当前源 |
| 切换源    | nrm use < registry >         | nrm use taobao            |
| 添加源    | nrm add < registry > < url > |                           |
| 删除源    | nrm del < registry >         |                           |
| 测试响应时间 | nrm test < registry >        |                           |

```
$ nrm ls

* npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://www.npmmirror.com/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

其中 `*` 号表示当前使用的源。
 
```
添加源
适用于企业内部定制的私有源，`<registry>` 表示源名称，`<url>` 表示源地址。比如，使用 [Verdaccio](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2FtoFrankie%2Fblog%2Fissues%2F90 "https://github.com/toFrankie/blog/issues/90") 在本地搭了一个私有分发平台，然后通过 `nrm add local http://localhost:4873/` 来指定源.