<!--
 * @Author: 16651618507@163.com
 * @Date: 2023-12-14 19:39:48
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-12-14 19:41:52
 * @FilePath: \myBaseFile\git\常用 Git 命令清单.md
 * @Description:
 *
-->

常用 Git 命令清单
作者： 阮一峰
日期： 2015 年 12 月 9 日

下面是我整理的常用 Git 命令清单。几个专用名词的译名如下。

Workspace：工作区
Index / Stage：暂存区
Repository：仓库区（或本地仓库）
Remote：远程仓库

一、新建代码库

```
# 在当前目录新建一个Git代码库
$ git init

# 新建一个目录，将其初始化为Git代码库
$ git init [project-name]

# 下载一个项目和它的整个代码历史
$ git clone [url]

```

二、配置
Git 的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

```

# 显示当前的Git配置
$ git config --list

# 编辑Git配置文件
$ git config -e [--global]

# 设置提交代码时的用户信息
$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"
```
