# Element UI 2.X 主题定制完整指南：解决官方工具失效的实战方案

[![天蓝色的鱼](https://pic1.zhimg.com/v2-abed1a8c04700ba7d72b45195223e0ff_l.jpg?source=172ae18b)](https://www.zhihu.com/people/tian-lan-se-de-yu-43)

[天蓝色的鱼](https://www.zhihu.com/people/tian-lan-se-de-yu-43)

前端开发工程师

1 人赞同了该文章

> 基于[Vue2](https://zhida.zhihu.com/search?content_id=263224178&content_type=Article&match_order=1&q=Vue2&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzY5NDA0ODgsInEiOiJWdWUyIiwiemhpZGFfc291cmNlIjoiZW50aXR5IiwiY29udGVudF9pZCI6MjYzMjI0MTc4LCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.7ui5WRDNiS27p7GAl7FNhcMzAJCyfpqhIYdPIYWoVPQ&zhida_source=entity)+[Element UI 2.X](https://zhida.zhihu.com/search?content_id=263224178&content_type=Article&match_order=1&q=Element+UI+2.X&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzY5NDA0ODgsInEiOiJFbGVtZW50IFVJIDIuWCIsInpoaWRhX3NvdXJjZSI6ImVudGl0eSIsImNvbnRlbnRfaWQiOjI2MzIyNDE3OCwiY29udGVudF90eXBlIjoiQXJ0aWNsZSIsIm1hdGNoX29yZGVyIjoxLCJ6ZF90b2tlbiI6bnVsbH0.M7G5Deuv8RckwEA6IPwN4ivYnUCGOFx7DVjkSUw4otg&zhida_source=entity)项目的主题换肤实战经验分享

## 背景与需求

最近在开发Vue2项目的换肤功能时，遇到了一个典型需求：除了变更自定义vue组件的主题相关[CSS变量](https://zhida.zhihu.com/search?content_id=263224178&content_type=Article&match_order=1&q=CSS%E5%8F%98%E9%87%8F&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzY5NDA0ODgsInEiOiJDU1Plj5jph48iLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNjMyMjQxNzgsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.5XPyGnkai43XtUvP_OwmCVBmPyj4KRtVbx6BPcefuYU&zhida_source=entity)外，还需要同步更改Element UI 2.X组件的主题色。然而在实际操作过程中，发现官方提供的主题定制工具存在各种问题，给开发工作带来了不小困扰。

本文将分享两种经过验证的有效方法，帮助你顺利生成完整的Element UI 2.X CSS主题文件，实现完美的主题换肤效果。

## 问题分析

### 1. 官方在线主题编辑器服务不可用

Element UI官方主题编辑器([https://element.eleme.io/#/zh-CN/theme](https://link.zhihu.com/?target=https%3A//element.eleme.io/%23/zh-CN/theme))服务不可用。

![](https://pic2.zhimg.com/v2-f47f3d82f09b77897d9849e8326d8799_1440w.png)

![](https://pic4.zhimg.com/v2-b8e2cd2f767b0e92113ba4a6a30f0891_1440w.png)

### 2. 命令行工具问题频出

使用`element-theme`命令行工具时，各种安装报错和依赖问题屡见不鲜，即使更换[Node版本](https://zhida.zhihu.com/search?content_id=263224178&content_type=Article&match_order=1&q=Node%E7%89%88%E6%9C%AC&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzY5NDA0ODgsInEiOiJOb2Rl54mI5pysIiwiemhpZGFfc291cmNlIjoiZW50aXR5IiwiY29udGVudF9pZCI6MjYzMjI0MTc4LCJjb250ZW50X3R5cGUiOiJBcnRpY2xlIiwibWF0Y2hfb3JkZXIiOjEsInpkX3Rva2VuIjpudWxsfQ.UEYzh_JV3bOJrSa7baVMl96tv5GwAohymrx9Rb_36Gs&zhida_source=entity)也难以解决。

## 解决方案一：使用在线编辑器替代方案

这种方法适合需要快速生成主题的开发者，无需搭建本地环境。

### 操作步骤：

1. **访问[在线主题生成工具](https://zhida.zhihu.com/search?content_id=263224178&content_type=Article&match_order=1&q=%E5%9C%A8%E7%BA%BF%E4%B8%BB%E9%A2%98%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7&zd_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6aGlkYV9zZXJ2ZXIiLCJleHAiOjE3NzY5NDA0ODgsInEiOiLlnKjnur_kuLvpopjnlJ_miJDlt6XlhbciLCJ6aGlkYV9zb3VyY2UiOiJlbnRpdHkiLCJjb250ZW50X2lkIjoyNjMyMjQxNzgsImNvbnRlbnRfdHlwZSI6IkFydGljbGUiLCJtYXRjaF9vcmRlciI6MSwiemRfdG9rZW4iOm51bGx9.j3bVg2DA2yNFCD6c9j2tBUG2Nt6usZ4YBpo72jwErDY&zhida_source=entity)**
    
    打开浏览器，访问 [https://elementui.github.io/theme-chalk-preview/#/zh-CN](https://link.zhihu.com/?target=https%3A//elementui.github.io/theme-chalk-preview/%23/zh-CN)
    

![](https://pic4.zhimg.com/v2-aba18915a11193106c31ee47c30c5517_1440w.png)

1. **定制主题颜色**
    
    - 点击右上角的"切换主题色"按钮
    - 选择或输入你需要的主题主色调
    - 实时预览效果，确保满足需求
2. **获取主题文件**
    
    - 点击"下载主题"按钮，获取ZIP压缩包
    - 解压后发现只有字体文件，没有CSS文件
3. **提取CSS代码**
    
    - 按F12打开开发者工具
    - 切换到"元素"标签页
    - 在`<head>`标签下找到`<style>`元素
    - 复制其中的压缩CSS代码

![](https://pic2.zhimg.com/v2-162045cc010b71aa957d9187f9668d4f_1440w.png)

1. **创建CSS文件**
    - 将复制的代码保存为CSS文件（如`element-ui.theme.css`）
    - 注意调整字体文件的引用路径，确保与实际文件位置匹配

## 解决方案二：通过源码编译定制主题（推荐）

这种方法适合需要深度定制的项目，可以修改所有样式变量，也是更稳定的方案。

### 环境准备与操作步骤：

1. **获取Element UI源码**
    
    ```text
    # 克隆Element UI官方仓库
    git clone https://github.com/ElemeFE/element.git  
    # 进入项目目录
    cd element
    ```
    
2. **安装项目依赖**
    
    ```text
    # 安装所有必要依赖
    npm install
    
    # 如果遇到node-sass问题，可以尝试使用镜像源
    npm install --sass-binary-site=https://npm.taobao.org/mirrors/node-sass
    ```
    
3. **自定义主题变量**
    
    - 打开文件：`packages/theme-chalk/src/common/var.scss`
    - 修改主要颜色变量：
    
    ```text
    // 修改为主题色
    $--color-primary: #0080fe !default;
    
    // 可以继续修改其他变量
    $--color-success: #67c23a !default;
    $--color-warning: #e6a23c !default;
    $--color-danger: #f56c6c !default;
    $--color-text-primary: #303133 !default;
    $--color-text-regular: #606266 !default;
    ```
    
4. **编译主题**
    
    ```text
    # 执行编译命令
    npm run build:theme
    ```
    
5. **获取生成的文件**
    
    - 编译完成后，在`packages/theme-chalk/lib/`目录下：
        - `index.css` - 完整的CSS样式文件
        - `fonts/` - 相关字体文件
    - 将CSS文件和字体文件一并复制到你的项目中

![](https://pica.zhimg.com/v2-2b973029744bb69290bc36c17685dd1e_1440w.png)

### 高级定制技巧

除了修改主色调，你还可以定制其他样式变量，实现更精细的主题控制：

```text
// 修改字体路径
$--font-path: 'element-ui/fonts' !default;

// 修改边框颜色和圆角
$--border-color-base: #dcdfe6 !default;
$--border-color-light: #e4e7ed !default;
$--border-color-lighter: #ebeef5 !default;
$--border-radius-base: 4px !default;
$--border-radius-small: 2px !default;

// 修改背景色
$--background-color-base: #f5f7fa !default;

// 修改尺寸变量
$--size-base: 14px !default;
$--size-large: 16px !default;
$--size-small: 13px !default;

// 修改按钮样式
$--button-font-size: $--size-base !default;
$--button-border-radius: $--border-radius-base !default;
$--button-padding-vertical: 12px !default;
$--button-padding-horizontal: 20px !default;

// 修改输入框样式
$--input-font-size: $--size-base !default;
$--input-border-radius: $--border-radius-base !default;
$--input-border-color: $--border-color-base !default;
$--input-background-color: #FFFFFF !default;
```

## 注意事项与最佳实践

1. **字体路径问题**
    
    - 确保CSS中的字体路径与实际存放路径一致
    - 如果字体加载失败，图标将无法正常显示
    - 建议使用相对路径或CDN地址
2. **版本兼容性**
    
    - 确保使用的Element UI版本与主题版本匹配
    - 不同版本的变量名称可能有所差异
3. **生产环境部署**
    
    - 对CSS文件进行压缩，减少体积
    - 使用CDN加速字体文件的加载
    - 考虑将主题文件与主应用代码分离部署
4. **性能优化**
    
    - 实现主题懒加载，避免初始加载时间过长
    - 考虑使用CSS变量实现部分动态样式，减少CSS文件大小

## 总结

本文介绍了两种解决Element UI 2.X主题定制问题的方法：

1. **在线编辑器替代方案** - 适合快速生成基本主题
2. **源码编译方式** - 适合需要深度定制的项目（推荐）

希望本文能帮助你顺利完成Element UI的主题定制工作。如果你有任何问题或更好的解决方案，欢迎在评论区分享交流！

---

**欢迎关注我的微信公众号【大前端历险记】，获取更多开发实用技巧和解决方案！**

本文由 [mdnice](https://link.zhihu.com/?target=https%3A//mdnice.com/%3Fplatform%3D3) 多平台发布