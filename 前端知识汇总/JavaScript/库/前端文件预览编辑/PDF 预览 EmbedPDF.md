# 弃用 PDF.js！快 800倍的 PDF 预览神器！兼容 Vue、React！

原创 认真努力的小四子 前端开发爱好者

 _2026年1月9日 08:34_ _江苏_

我相信只要是前端开发，**或多或少都遇到过 PDF 预览的需求**。

`合同`、`发票`、`标书`、`技术文档`、`用户上传附件`…… 需求很常见，但实现方式一直很**糟心**。


过去我们常见的方案基本就这几种：

- `pdf.js`
    
- `iframe / window.open` 直接打开
    
- `后端转图片`，前端分页展示
    

每一种，用过的人都懂。

尤其是 **pdf.js** ——`依赖复杂`、`worker` 报错、`跨域`、`打包配置`、`版本兼容`，一路踩坑，**不是不能用，是太折磨人了。**

最近刷 **Hacker News** 的时候，偶然发现了一个新项目：**EmbedPDF**

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/kzFgl6ibibNKqCrxCdBQMPeQecxsKERG2PsDYaibGQV8nLJ9tUlTKONia9fGam4tDXny4pEduUx8GAicrTyibO2tHJCg/640?wx_fmt=png&from=appmsg&watermark=1&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1)

用下来最大的感受就一句话：**这才是前端该有的 PDF 解决方案。**

## 什么是 EmbedPDF？

**EmbedPDF** 是一个`开源`、`框架无关`的 `Web PDF` 查看器解决方案。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/kzFgl6ibibNKqCrxCdBQMPeQecxsKERG2P8ImxW7ic75udmzPhq38tLzpPahLu9KUObeeDXqvJbSvVwaicro9DiaGnw/640?wx_fmt=png&from=appmsg&watermark=1&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2)

你可以把它理解成： 一个比 `PDF.js` 更现代、更易集成、更可扩展的 `PDF 查看` / `编辑引擎`

它不是只给某个框架用的**「专属组件」**，而是：

- ✅ 支持 **Vue / React / Svelte / Vanilla JS**
    
- ✅ **npm** 安装即可集成
    
- ✅ 提供「即用型 **Viewer**」和「无 **UI Headless** 架构」
    

这一点，对维护多技术栈项目的团队来说，**非常加分**。

## EmbedPDF 有哪些优势？

### 真正的「多框架支持」

很多 **PDF** 方案都会说自己「支持 `Vue / React`」， 但本质只是包了一层组件。

**EmbedPDF 的设计目标就是跨框架：**

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/kzFgl6ibibNKqCrxCdBQMPeQecxsKERG2Pmd5X5UQeu6ePNr2TpMXUxYFVsTD0LqjTW2JvBLUHRjicv1y0xwdVZLw/640?wx_fmt=png&from=appmsg&watermark=1&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3)

- **Vue 项目能用**
    
- **React 项目能用**
    
- **Svelte / 原生 JS 也能用**
    
- **API 思路一致**，迁移成本极低
    

对于有 **中后台 + 官网 + 多端项目** 的团队，非常友好。

### 不只是预览，而是「可编辑」

这是 **EmbedPDF** 和 `PDF.js` 最大的区别之一。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_gif/kzFgl6ibibNKoaSn4YiaeWxVXSgRpIQPYwqKBtKW80fCO6l96VbYrhV4ibolLCAdEjjecxUVvIyVfSGVua0x2cSYFw/640?wx_fmt=gif&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4)

它不仅能看 **PDF**，还支持：

- **高亮**
    
- **便签**
    
- **自由文本**
    
- **点击标注**
    
- **内容删除 / 修改（真正的编辑能力）**
    

很多业务场景里，**“看” 是不够的**， 标注、审阅、反馈，才是刚需。

### 插件化架构，按需加载

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/kzFgl6ibibNKqCrxCdBQMPeQecxsKERG2Pib5sSbAfco6RVb1DJgn4WKNKibVW1JVnMXPgEmrWYZpqFIN5c3IzwesA/640?wx_fmt=png&from=appmsg&watermark=1&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=5)

**EmbedPDF** 采用的是 **插件化架构**：

- **搜索是插件**
    
- **缩放是插件**
    
- **注释是插件**
    
- **缩略图也是插件**
    

你需要什么就加载什么， 不用像 **pdf.js** 一样 **一次性把所有能力打进包里**。

👉 对**性能**、**包体积**、**长期维护**都更友好。

### UI 比 PDF.js 好看（而且现代）

这个点虽然不是硬指标，但很现实。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/kzFgl6ibibNKqCrxCdBQMPeQecxsKERG2PP7KCqTJOcr43urt5uswoMko6xyX7m8foLrQV2C9pUTJf0gFhtaUWPQ/640?wx_fmt=png&from=appmsg&watermark=1&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=6)

**EmbedPDF** 的默认 **Viewer**：

- **UI 更现代**
    
- 操作更顺
    
- 滚动**体验更好**（虚拟化滚动）
    

**不是那种“能用但很原始”的感觉。**

## 主要功能一览

简单总结一下 **EmbedPDF** 目前提供的核心能力：

- 📄 **PDF 预览**（高性能渲染）
    
- 🔍 **文本搜索、选择**
    
- 🔎 **缩放、旋转**
    
- ✍️ **多种注释方式**（高亮 / 便签 / 自由文本）
    
- ✂️ **内容删除与修改**
    
- ⚡ **虚拟化滚动，长文档不卡**
    
- 🧩 **插件化扩展，深度定制**
    
- 🌍 多框架兼容，**可用于任何 JavaScript 项目**
    

## 如何快速使用？

**EmbedPDF** 官方提供了 **两种使用方式**，适合不同场景。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/kzFgl6ibibNKqCrxCdBQMPeQecxsKERG2P3omCMuXS6PiaAxEd35CD9YgtcK5cbrGibIxgWia5wx3pyT0RGKH5CgG5w/640?wx_fmt=png&from=appmsg&watermark=1&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=7)

### 方式一：Ready-made Viewer（开箱即用）

如果你只想 **快速集成一个完整 PDF 查看器**， 直接用官方内置 **Viewer**。

```
npm install @embedpdf/snippet
```

几行代码就能跑起来，带 `UI`、`工具栏`、`搜索`、`缩放`。

适合： ✅ 中后台 ✅ 表单系统 ✅ 快速上线需求

### 方式二：Headless（无 UI，自定义能力）

如果你对 `UI` / `交互`有强定制需求， 可以只用 **EmbedPDF** 的渲染和能力层，自行组合界面。

这种方式非常适合：

- 设计体系统一的项目
    
- 复杂业务流程
    
- 深度集成场景
    

## Vue / React 使用示意

### Vue 3 示例

```
<template>  <PDFViewer    :config="{ src: 'https://snippet.embedpdf.com/ebook.pdf' }"    :style="{ height: '500px' }"    @ready="onReady"  /></template><script setup lang="ts">import { PDFViewer } from '@embedpdf/vue-pdf-viewer';function onReady(registry) {  console.log('PDF viewer ready!', registry);}</script>
```

### React 示例（思路示意）

```
import { PDFViewer } from '@embedpdf/react-pdf-viewer';export default function App() {  return (    <PDFViewer      config={{ src: 'https://snippet.embedpdf.com/ebook.pdf' }}      style={{ height: '500px' }}      onReady={(registry) => {        console.log('PDF viewer ready!', registry);      }}    />  );}
```

官方文档里有 **完整可跑示例**， 比 pdf.js 那种“自己拼一堆配置”省心很多。

👉 **更多框架使用方式参考文档**：`https://www.embedpdf.com/docs`

## 写在最后

如果你已经：

- 被 `pdf.js` 折磨过
    
- 不想再维护一堆 `worker` / `loader` 配置
    
- 希望一个 **现代、可扩展、跨框架** 的 **PDF** 方案
    

那么 **EmbedPDF 非常值得一试**。

它不是**「简单 Demo 项目」**，而是明显朝着 **生产级解决方案** 在做。

## 顺带一提：有没有好用的 Word 文档预览？

这个问题我知道一定会有人问 😂

说实话，目前 **Web 端真正好用、体验接近 EmbedPDF 的 Word 预览方案并不多**：

- 纯前端方案能力有限
    
- `iframe（Office / Google`）又不够可控
    



​

