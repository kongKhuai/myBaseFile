

在Git中切换不同项目的用户，你可以为每个项目配置不同的用户名和电子邮件地址。这可以通过为每个项目设置局部配置来实现。以下是如何为特定的Git项目设置用户名和电子邮件地址的步骤：

##### 步骤

1. 打开命令行界面。
    
2. 导航到你的Git项目目录。
    
3. 使用以下命令设置用户名和电子邮件地址：

##### 1. 查看当前用户
```  
在终端中进入到你的Git项目目录，然后输入以下命令

git config user.name  
git config user.email
```
##### 2. 切换用户
```
git config user.name "Your Name"
git config user.email "your_email@example.com"
```

这些设置是针对当前项目的，并且会保存在项目目录下的`.git/config`文件中。它们会覆盖全局配置中的相应设置。需要注意的是，上述操作只是将新的用户名和邮箱配置到当前的Git项目中，你切换用户后，其他Git仓库的用户信息不会受到影响。

##### 将新的用户名和邮箱应用到所有的Git仓库
如果你希望将新的用户名和邮箱应用到所有的Git仓库中，可以添加`–global`参数
```
git config –global user.name “New User Name”  
git config –global user.email “New User Email”
```

##### 查看当前项目的配置信息
如果你想要查看当前项目的配置信息，可以使用以下命令：
```
git config --list --show-origin
```

这将显示当前项目配置文件的路径以及相关的配置项。
##### 清除局部配置
如果你想要清除局部配置，可以使用以下命令：

```
git config --unset user.name
git config --unset user.email
```
这将会删除在当前项目目录下设置的用户名和电子邮件地址。下次你在此项目中提交更改时，Git将使用全局配置中的用户信息。