
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





你想知道如何通过 Volta 工具查看当前全局 Node.js 的版本号以及它的实际安装路径，这是使用 Volta 管理 Node 版本时很常见的需求。

  

### 1. 查看当前全局 Node.js 版本

Volta 提供了专门的命令来查看已安装和当前激活的 Node 版本，你可以在终端执行以下命令：

  

```bash

# 查看当前全局激活的 Node.js 版本（最直接）

volta list node

  

# 或更简洁的方式，和原生 Node 命令兼容

node -v

# 或

node --version

```

  

**输出示例**：

```

⚡️ Currently active Node.js versions:

  

    global: v20.10.0 (Default)

    local:  no local version set

  

    Versions installed:

        v18.18.2

        v20.10.0

```

从输出中能清晰看到 `global` 行就是当前全局生效的 Node 版本。

  

### 2. 查看 Node.js 的实际安装位置

Volta 会将 Node 安装在其专属的目录下，你可以通过以下步骤找到具体路径：

  

#### 步骤 1：先查看 Volta 的根目录（核心）

```bash

volta which node

```

**输出示例**：

```

/Users/你的用户名/.volta/tools/image/node/20.10.0/bin/node

```

这个路径就是当前全局 Node 可执行文件的准确位置。

  

#### 步骤 2（可选）：查看 Volta 完整的安装根目录

如果想知道 Volta 管理的所有 Node 版本的存放路径，可以执行：

```bash

echo $VOLTA_HOME

```

默认情况下，`VOLTA_HOME` 的路径通常是：

- macOS/Linux：`~/.volta`

- Windows：`%USERPROFILE%\.volta`

  

所有通过 Volta 安装的 Node 版本都会存放在 `$VOLTA_HOME/tools/image/node/` 目录下（对应不同版本号的子文件夹）。

  

### 3. 补充：查看 Volta 自身信息（辅助确认）

如果需要确认 Volta 本身的安装状态，也可以执行：

```bash

# 查看 Volta 版本

volta -v

# 查看 Volta 帮助（包含所有核心命令）

volta help

```

  

### 总结

1. 查全局 Node 版本：优先用 `volta list node`，也可以用原生的 `node -v`；

2. 查 Node 安装路径：核心命令是 `volta which node`，可直接得到可执行文件的准确路径；

3. Volta 管理的所有 Node 版本默认存放在 `$VOLTA_HOME/tools/image/node/` 目录下。