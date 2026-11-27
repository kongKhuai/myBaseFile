

`winget` 是 Windows 官方命令行包管理器，可一键搜索、安装、更新、卸载软件，Windows 11/10 21H1+ 已预装。下面是完整使用指南：

  

### 一、先确认是否已安装

  

1. 右键开始菜单 → 打开 **终端（管理员）** 或 **PowerShell（管理员）**

  

2. 执行：

  

    ```PowerShell

    winget --version

    ```

  

3. 输出版本号（如 `v1.6.3482`）即已安装；提示“不是内部命令”则需安装。

  

### 二、安装 winget（未预装时）

  

#### 方法1：微软商店安装（推荐）

  

1. 打开 **Microsoft Store**

  

2. 搜索 **App Installer** → 点击 **获取** 安装

  

3. 安装后重启终端，再执行 `winget --version` 验证

  

#### 方法2：手动离线安装（无商店时）

  

1. 下载依赖：

  

    - [VCLibs](https://learn.microsoft.com/zh-cn/troubleshoot/developer/visualstudio/cpp/libraries/c-runtime-packages-desktop-bridge)（x64）

  

    - [UI.Xaml 2.8+](https://www.nuget.org/packages/Microsoft.UI.Xaml/)（改 `.nupkg` 为 `.zip` 解压）

  

2. 下载 [winget-cli](https://github.com/microsoft/winget-cli/releases) 最新 `.msixbundle`

  

3. 管理员 PowerShell 执行：

  

    ```PowerShell

    Add-AppxPackage .\Microsoft.VCLibs.140.00_14.0.33728.0_x64__8wekyb3d8bbwe.Appx

    Add-AppxPackage .\Microsoft.UI.Xaml.2.8.x64.appx

    Add-AppxPackage .\Microsoft.DesktopAppInstaller_*.msixbundle

    ```

  

### 三、核心命令（常用）

  

#### 1. 搜索软件

  

```PowerShell

  

winget search 软件名

# 示例：搜索 Chrome

winget search Chrome

```

  

结果会显示 **名称、ID、版本、源**，优先用 **ID** 安装更准确。

  

#### 2. 安装软件

  

```PowerShell

  

# 用名称安装（可能重名）

winget install 软件名

# 用ID安装（推荐，精准）

winget install Google.Chrome

# 安装指定版本

winget install 软件名 --version 1.2.3

# 静默安装（无弹窗）

winget install 软件名 --silent

```

  

首次使用会提示同意协议，输入 `Y` 回车即可。

  

#### 3. 查看已安装软件

  

```PowerShell

  

winget list

# 过滤已安装的某软件

winget list 软件名

```

  

#### 4. 更新软件

  

```PowerShell

  

# 查看可更新列表

winget upgrade

# 更新单个软件

winget upgrade 软件名/ID

# 一键更新所有可更新软件

winget upgrade --all

```

  

#### 5. 卸载软件

  

```PowerShell

  

winget uninstall 软件名/ID

```

  

#### 6. 查看软件详情

  

```PowerShell

  

winget show 软件名/ID

# 查看所有可用版本

winget show 软件名 --versions

```

  

#### 7. 管理源（仓库）

  

```PowerShell

  

# 查看当前源

winget source list

# 更新源缓存

winget source update

# 添加第三方源（如国内镜像）

winget source add --name 镜像名 --url https://xxx

```

  

### 四、常见问题

  

- **提示权限不足**：必须用 **管理员终端** 运行命令。

  

- **找不到软件**：执行 `winget source update` 刷新源；或软件未收录到 winget 仓库。

  

- **安装卡住/失败**：加 `--verbose --logs` 看日志排查；或用 `--force` 强制安装。

  

- **命令不生效**：重启终端/电脑；检查 `App Installer` 是否已正确安装。

  

### 五、示例：一键装常用开发工具

  

```PowerShell

  

# 安装 VS Code、Node.js、Git、Chrome

winget install Microsoft.VisualStudioCode OpenJS.NodeJS Git.Git Google.Chrome --silent

```

  

需要我给你整理一份**常用软件 winget ID 清单**，方便你直接复制安装吗？

> （注：文档部分内容可能由 AI 生成）