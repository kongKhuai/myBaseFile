# Git

> 共 3 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [git使用不同用户名维护多个项目时如何切换用户](#sec-1) — myBaseFile · `git/git使用不同用户名维护多个项目时如何切换用户.md`
2. [命令](#sec-2) — myBaseFile · `git/命令.md`
3. [在当前目录新建一个Git代码库](#sec-3) — myBaseFile · `git/常用 Git 命令清单.md`

---

<a id="sec-1"></a>
## git使用不同用户名维护多个项目时如何切换用户

> 来源：myBaseFile
> 原路径：`git/git使用不同用户名维护多个项目时如何切换用户.md`

在Git中切换不同项目的用户，你可以为每个项目配置不同的用户名和电子邮件地址。这可以通过为每个项目设置局部配置来实现。以下是如何为特定的Git项目设置用户名和电子邮件地址的步骤：

#### 步骤

1. 打开命令行界面。

2. 导航到你的Git项目目录。

3. 使用以下命令设置用户名和电子邮件地址：

#### 1. 查看当前用户
```
在终端中进入到你的Git项目目录，然后输入以下命令

git config user.name
git config user.email
```
#### 2. 切换用户
```
git config user.name "Your Name"
git config user.email "your_email@example.com"
```

这些设置是针对当前项目的，并且会保存在项目目录下的`.git/config`文件中。它们会覆盖全局配置中的相应设置。需要注意的是，上述操作只是将新的用户名和邮箱配置到当前的Git项目中，你切换用户后，其他Git仓库的用户信息不会受到影响。

#### 将新的用户名和邮箱应用到所有的Git仓库
如果你希望将新的用户名和邮箱应用到所有的Git仓库中，可以添加`–global`参数
```
git config –global user.name “New User Name”
git config –global user.email “New User Email”
```

#### 查看当前项目的配置信息
如果你想要查看当前项目的配置信息，可以使用以下命令：
```
git config --list --show-origin
```

这将显示当前项目配置文件的路径以及相关的配置项。
#### 清除局部配置
如果你想要清除局部配置，可以使用以下命令：

```
git config --unset user.name
git config --unset user.email
```
这将会删除在当前项目目录下设置的用户名和电子邮件地址。下次你在此项目中提交更改时，Git将使用全局配置中的用户信息。

<a id="sec-2"></a>
## 命令

> 来源：myBaseFile
> 原路径：`git/命令.md`

###### 初始化

git init

###### 拉取项目

git clone <git@github.com>:yangxiaobin/yangxiaobin.github.io.git

###### 提交修改

git add .

###### 提交到本地仓库

git commit -m "提交说明"

###### 推送到远程仓库

git push origin master

###### 拉取远程仓库

git pull origin master

###### 删除本地文件

rm -rf .git

###### 删除远程仓库文件

git rm -r --cached .

###### 提交到远程仓库

git push origin master

#### 回滚

###### 回滚到指定版本

git reset --hard 版本号

###### 回滚到上一个版本

git reset --hard HEAD^

###### 回滚到上上个版本

git reset --hard HEAD^^

###### 回滚到上上个版本

git reset --hard HEAD^^^

###### 回滚到上上个版本

git reset --hard HEAD~3

#### 分支

###### 创建分支

git branch 分支名称

###### 切换分支

git checkout 分支名称

###### 合并分支

git merge 分支名称

###### 删除分支

git branch -d 分支名称

###### 强制删除分支

git branch -D 分支名称

###### 删除远程仓库分支

git push origin --delete 分支名称

###### 创建远程仓库分支

###### 删除远程仓库分支

###### 推送本地分支到远程仓库

git push origin 分支名称

###### 拉取远程仓库分支

git pull origin 分支名称

###### 删除本地分支

git branch -d 分支名称

###### 强制删除本地分支

###### 新建远程仓库分支

git push origin 分支名称

###### 删除远程仓库分支

git push origin --delete 分支名称

###### 修改当前本地分支提交远程分支的对应关系

git branch --set-upstream-to=origin/分支名称 分支名称

###### 创建远程仓库分支

<a id="sec-3"></a>
## 在当前目录新建一个Git代码库

> 来源：myBaseFile
> 原路径：`git/常用 Git 命令清单.md`

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

三、增加/删除文件

```
# 添加指定文件到暂存区
$ git add [file1] [file2] ...

# 添加指定目录到暂存区，包括子目录
$ git add [dir]

# 添加当前目录的所有文件到暂存区
$ git add .

# 添加每个变化前，都会要求确认
# 对于同一个文件的多处变化，可以实现分次提交
$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

# 停止追踪指定文件，但该文件会保留在工作区
$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区
$ git mv [file-original] [file-renamed]
```

四、代码提交

```
# 提交暂存区到仓库区
$ git commit -m [message]

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...

```

五、分支

```
# 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
```

六、标签

```
# 列出所有tag
$ git tag

# 新建一个tag在当前commit
$ git tag [tag]

# 新建一个tag在指定commit
$ git tag [tag] [commit]

# 删除本地tag
$ git tag -d [tag]

# 删除远程tag
$ git push origin :refs/tags/[tagName]

# 查看tag信息
$ git show [tag]

# 提交指定tag
$ git push [remote] [tag]

# 提交所有tag
$ git push [remote] --tags

# 新建一个分支，指向某个tag
$ git checkout -b [branch] [tag]
```

七、查看信息

```
# 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
```

八、远程同步

```
# 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
```

九、撤销

```
# 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
```

十、其他

```
# 生成一个可供发布的压缩包
$ git archive
```

（完）
