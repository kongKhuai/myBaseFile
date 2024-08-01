<!--
 * @Author: 16651618507@163.com
 * @Date: 2023-02-28 00:19:28
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-12-03 22:17:17
 * @FilePath: \myBaseFile\js\index.md
 * @Description: 
 * 
-->
记录js基础学习和收藏一些好玩的实现方式

canvas-confetti按需五彩纸屑枪
地址：<https://www.kirilv.com/canvas-confetti>

算法
<https://visualgo.net/zh/>
#

js 甘特图
<https://github.com/DHTMLX/gantt>

svg 签名动画<https://gitee.com/yaoyao0822/html-css-demo> ​

siteloader
github 仓库地址<https://github.com/Yinglinhan/siteloader> npm 包地址<https://www.npmjs.com/package/siteloader>

BV1zp4y1N7AP 未经作者授权禁止转载 r 大文件分片上传示例：<https://github.com/lewton/bilibili-public/tree/main/JavaScript/2-大文件分片上传示例另外注明：大文件分片上传示例主要是为了描述前端代码思路。如果还需要实现断点续传，可以考虑前端会在每个分片上传前，先检查后端是否已经存在相同分片，如果存在，则跳过上传该分片，从而实现断点续传。同时，在文件上传成功后，服务器会删除所有分片文件以释放存储空间。断点续传示例：https://github.com/lewton/bilibili-public/tree/main/JavaScript/2-大文件分片上传示例（断点续传）大文件上传前端前端开发文件上传>
​​
盘点 10 个基于 Canvas 的[开源项目](https://so.csdn.net/so/search?q=%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE&spm=1001.2101.3001.7020)，旨在为提供开发灵感和思路，以便更好地探索并应用 Canvas 技术！

### canvas-editor

canvas-editor是一个基于canvas/svg的[富文本编辑器](https://so.csdn.net/so/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8&spm=1001.2101.3001.7020)，类似于 word。其具有以下特点：

- **所见即所得**：类word可分页，所见即所得
- **轻量的数据结构**：一段JSON即可呈现复杂样式
- **丰富的功能**：支持常见富文本操作、表格、水印、控件、公式等
- **使用方便**：官方发布核心npm包，菜单栏、工具栏可自行维护
- **灵活的开发机制**：通过接口可获取生命周期、事件回调、自定义右键菜单、快捷键等
- **完全类型化的API**：灵活的 API 和完整的 TypeScript 类型

![](https://img-blog.csdnimg.cn/img_convert/ed6fe93250e0a6a1f93de57d6ef4e0ab.webp?x-oss-process=image/format,png)

**Github：**

### lucky-canvas

基于 TS + Canvas 开发的【大转盘 / [九宫格](https://so.csdn.net/so/search?q=%E4%B9%9D%E5%AE%AB%E6%A0%BC&spm=1001.2101.3001.7020) / 老虎机】抽奖插件，一套源码适配多端框架 JS / Vue / React / Taro / UniApp / 微信小程序等，奖品 / 文字 / 图片 / 颜色 / 按钮均可配置，支持同步 / 异步抽奖，概率前 / 后端可控，自动根据 dpr 调整清晰度适配移动端。

![](https://img-blog.csdnimg.cn/img_convert/b93397782f6af5a9414f96a6047f84b8.webp?x-oss-process=image/format,png)

**Github：**

### Excalidraw

Excalidraw是一款开源的在线白板工具，主要用于创建简单直观的图形和草图，支持共享和协作。以下是 Excalidraw 的主要特点：

- 简单易用：具有直观简单的界面和操作方式，用户可以轻松创建和编辑图形，并实现各种设计需求。
- 实时协作：支持多人实时协作，用户可以与其他人一起编辑和讨论，在线完成协作任务。
- 自由绘制和对象管理：提供了自由绘制、文本框、箭头、线段、矩形、椭圆、图标等多种基本对象，并支持对这些对象进行移动、复制、旋转、缩放、对齐等操作，帮助用户实现更为精细的设计。
- 高度灵活性：支持导出为SVG、PNG、Clipboard等多种格式，方便用户进行分享和保存。

![](https://img-blog.csdnimg.cn/img_convert/c2390b178b26995c4816214455c7ae5c.webp?x-oss-process=image/format,png)

**Github：**

### fireworks-js

fireworks-js 是一个基于 Canvas 的动画库，用于在网页上制作烟花特效。该库的特点如下：

- 轻量级：fireworks-js 体积小，不依赖其他库或框架，易于集成。
- 易于使用：只需几行代码就可以创建出炫目的烟花特效，具有良好的可定制性和可扩展性。
- 动画效果逼真：fireworks-js 采用粒子系统实现烟花特效，能够模拟出逼真的爆炸、飞溅和星光等效果。
- 浏览器兼容性良好：可以在主流的现代浏览器上运行，支持多种设备和分辨率，包括移动端。

该项目提供了多种框架的实现：

![](https://img-blog.csdnimg.cn/img_convert/4a301c22c5dae816bc414f6aec5efe75.webp?x-oss-process=image/format,png)

**Github：**

### Luckysheet

Luckysheet ，一款纯前端基于 Canvas 的类似 excel 的在线表格，功能强大、配置简单、完全开源。其具有以下功能：

- **格式**：样式、条件格式、文本对齐和旋转、文本截断、溢出、自动换行、多种数据类型、单元格分割样式
- **单元格**：拖放、填充柄、多选、查找和替换、定位、合并单元格、数据验证
- **行和列**：隐藏、插入、删除行或列、冻结和拆分文本
- **操作**：撤消、重做、复制、粘贴、剪切、热键、格式刷、拖放选择
- **公式和函数**：内置、远程和自定义公式
- **表**：过滤、排序
- **增强功能**：数据透视表、图表、评论、协同编辑、插入图片、矩阵计算、截图、复制为其他格式、EXCEL导入导出等。

![](https://img-blog.csdnimg.cn/img_convert/e1f91d023f3efe0e7f2e8be3b686ab43.webp?x-oss-process=image/format,png)

**Github：**

### x-spreadsheet

x-spreadsheet 是一个基于 Web(es6) canvas 构建的轻量级 Excel 开发库。其具有以下特点：

- 轻量级：完整功能，包含所有插件。代码打包后只不到 200kb
- 易于使用：如果只需要一些简单的功能可以零配置
- 数据驱动：调整数据非常的简单快捷

![](https://img-blog.csdnimg.cn/img_convert/d951150c33a8da1ae19e996105b95870.webp?x-oss-process=image/format,png)

**Github：**

### rough

Rough.js 是一个轻量级的（大约 8k），基于 Canvas 的可以绘制出粗略的手绘风格的图形库。该库提供绘制线条、曲线、弧线、多边形、圆形和椭圆的基础能力，同时支持绘制 SVG 路径。除此之外，Rough.js 还提供了大量的可自定义选项，可以调整线宽、线条颜色、填充颜色、字体样式、背景颜色等，以使图形更加个性化。

![](https://img-blog.csdnimg.cn/img_convert/6109ef5af060b0237fdefdaf9b65fb17.webp?x-oss-process=image/format,png)

**Github：**

### Signature Pad

Signature Pad 是一个基于 Canvas 实现的签名库，用于绘制签名。它可以在所有现代桌面和移动浏览器中使用，不依赖于任何外部库。Signature Pad提供了许多可自定义的选项，如笔画颜色、粗细、背景色、画布大小、签名格式等，可以轻松实现不同的签名风格和功能。

![](https://img-blog.csdnimg.cn/img_convert/b2ae22023faacc7500c1e37f6173ad76.webp?x-oss-process=image/format,png)

**Github：**

### canvas-confetti

canvas-confetti 是一个基于 Canvas 的库，用于在 Web 页面中实现炫酷的彩色纸屑动画效果。它实现了高性能、流畅的纸屑动画效果，同时兼容各种现代浏览器。提供了许多可自定义的选项，如纸屑颜色、形状、数量、速度、角度、发射器位置等，可以轻松实现不同的纸屑效果。并支持多种触发方式，如点击按钮、滚动页面、定时触发等，可根据需求进行定制。

![](https://img-blog.csdnimg.cn/img_convert/f69e0f53606f6aeea4fd852c4c994e1e.webp?x-oss-process=image/format,png)

**Github：**

### html2canvas

html2canvas是一个JavaScript库，用于将HTML页面中的任何DOM元素（包括画布、图片、视频等）转换为Canvas图像，从而实现截屏、生成PDF或者图片等功能。以下是html2canvas的主要特点：

- 简单易用：可以快速、简单地生成Canvas图像，不需要依赖其他库，在页面中直接引用即可。
- 浏览器兼容性良好：支持各种现代浏览器，包括Chrome、Firefox、Safari、Edge和Opera等主流浏览器，并且可以在桌面和移动设备上使用。
- 配置灵活性高：提供了许多选项，如截图区域、画布大小、背景色、文字渲染等，用户可以根据具体需求自由配置。
- 支持生成PDF、图片等多种格式：可以将Canvas图像导出为PDF、PNG、JPEG等多种格式，方便用户进行分享和保存等操作。

![](https://img-blog.csdnimg.cn/img_convert/266dbf7dc00d6958bc7e82f478bbff14.webp?x-oss-process=image/format,png)

**Github：**

## QRCanvas

QRCanvas 是一个基于 canvas 的 JavaScript 二维码生成工具。其具有以下特点：

- 仅依赖 canvas，兼容性好
- 简单，仅仅是需要一些数据的配置
- 定制化功能丰富
- 支持 Node.js
- 方便在 React 和 Vue 中使用
- 支持所有主流的浏览器



### 图形处理库

图形绘制是Canvas中最基本的内容，但是Canvas本身提供的api比较基础，开发起来低效。而且也缺少完整的事件系统、区域监测、缓存等等。下面让我们来看几款高效的图形处理库吧。

#### Konva

简介：`Konva`是一个 HTML5 Canvas JavaScript 框架, 通过扩展 Canvas 的 2D Context 让桌面端和移动端Canvas支持交互性，使其支持高性能动画、过渡、节点嵌套、分层、过滤、缓存、事件处理等等。Konva传送门[3]

除上述之外，文档相对友好，但也仅仅是相对于同类库的文档友好那么一滴滴，社区有维护一个中文文档。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

konva3.gif

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

konva2.gif

#### fabric.js

简介：**Fabric.js**是一个可以轻松处理 HTML5 Canvas元素的框架，使得Canvas元素支持**交互式对象模型**，同时也是一个**SVG-to-Canvas**和**Canvas-to-SVG**的解析器 fabric.js传送门[4]

fabricjs是和konva同类型但是比konva更老牌的一个的Canvas库，目前github上Star数![0fdf6f10a071e0668db7588c881dc4e5.png](https://i-blog.csdnimg.cn/blog_migrate/9fad19c2e6cf7806b2f0c2ea863df190.png)

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

fabricjs2.gif

更多示例[5]如下图所示：

![4a154673d2c4bf864fcf946f348de64a.png](https://i-blog.csdnimg.cn/blog_migrate/fb9b7fc78baaa28947d95245d4bf0c38.png)

image.png

更多关于Canvas图形处理的资源，请访问awesome-canvas[6]，项目地址 github.com/chinaBerg/a…[7]

### 图像编辑

市面上图像编辑的软件有很多，像大家所熟知的`PS、sketch、axure、激萌、剪映`等等。那么如果我们想开发类似的软件，有没有可以使用的库或者参考的开源软件呢？

#### miniPaint

简介：miniPaint[8] [在线演示[9]] - 在线版的PS。PS这款软件大家都不陌生，web版本的如何呢？请看下图：

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

mini-paint.gif

#### DarkroomJS

简介：DarkroomJS[10] [在线演示[11]] - 基于Fabricjs的浏览器端可扩展的图像编辑工具

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

pintura-image.gif

#### fabric-brush

简介：fabric-brush[12] [在线演示[13]] - 基于Fabric.js的Canvas笔刷工具

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

brush.gif

#### fabricjs-image-editor-origin

简介：fabricjs-image-editor-origin[14] [在线演示[15]] - Fabricjs图像编辑器

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

fabricjs-demo.gif

#### react-sketch

简介：react-sketch[16] [在线演示[17]] - 基于React、Fabricjs的素描应用

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

sketch.gif

#### glitch-canvas

简介：glitch-canvas[18] [在线演示[19]] - 给画布元素添加故障效果

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

jpg-glitch.gif

#### animockup

简介：animockup[20] [在线演示[21]] - 在浏览器中创建动画模型，并导出为视频或动画GIF

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

animo.gif

更多关于Canvas图像编辑/画板的资源，请访问awesome-canvas[22]，项目地址 github.com/chinaBerg/a…[23]

### 物理引擎

物理引擎使用质量、速度、摩擦力和空气阻力等变量，模拟了一个近似真实的物理系统，为刚性物体赋予真实的物理效果，比如重力、旋转和碰撞等效果，让物体的行为表现的更加趋向真实。例如，守望先锋的英雄在跳起时，系统所设置的重力参数就决定了他能跳多高，下落时的速度有多快，子弹的飞行轨迹等等。

#### matter.js

简介：**matter.js**是一个用于 Web 的 JavaScript 2D 物理引擎库 matter.js传送门[24]

matter.js[25]相较于老牌的 Box2D 引擎库更为轻量级（压缩版仅有 87 KB），并且在性能和功能方面也不逊色。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

matter.gif

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

matter3.gif

更多关于Canvas物理引擎的资源，请访问awesome-canvas[26]，项目地址 github.com/chinaBerg/a…[27]

### 流程图/组织图/图编辑等

工业软件开发，一直是软件领域复杂而又重要的一环。其对技术人的要求要是更高的，下面看看有哪些可以辅助我们快速开发的库或者参考的场景吧。

#### gojs

简介：**gojs**是一款可以非常方便的开发交互式流程图、组织结构图、设计工具、规划工具、可视化语言的JavaScript图表库。gojs.js传送门[28]

- GoJS用自定义模板和布局组件简化了节点、链接和分组。
    
- 给用户交互提供了许多先进的功能，如拖拽、复制、粘贴、文本编辑、工具提示、上下文菜单、自动布局、模板、数据绑定和模型、事务状态和撤销管理、调色板、概述、事件处理程序、命令和自定义操作的扩展工具系统。
    

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

gojs.gif

文档中提供了大量的demo[29]可供参考，基本对于常见的图编辑程序做到了全覆盖。

![df4bfa6beeedc7d5832950e8ac0c3024.png](https://i-blog.csdnimg.cn/blog_migrate/172b58779bad14855d5d1efdf8a87aae.png)

image.png

#### butterfly

简介：butterfly[30] [在线演示[31]] 一个基于JS的数据驱动的节点式编排组件库，同时适用于React/Vue2组件。

- 丰富的DEMO，开箱即用
    
- 全方位管理画布，开发者只需要更专注定制化的需求
    
- 利用DOM/REACT/VUE来定制元素；灵活性，可塑性，拓展性优秀
    
- 提供了中文文档，这点对英文不好的小伙伴很Nice
    

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

butterfly2.gif

#### wireflow

简介：wireflow[32] [在线演示[33]] 用户流程图实时协作工具。

- Wireflow 有超过 100 种自定义构建图形/卡可供使用，涵盖了大多数 Web 元素、交互和使用案例。
    
- Wireflow 考虑到了协作。您可以邀请您的同事和他们一起实时设计下一个项目的用户流程。
    
- 它具有内置的实时聊天功能，让您能够与您的队友进行交流，并且在您实时协作时仍然在同一个应用程序中。
    

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

wireflow.gif

#### flowy

简介：Flowy[34] [在线演示[35]] - 用于创建流程图的最小javascript库。使创建具有流程图功能的 WebApp 成为一项非常简单的任务。通可以在几分钟内构建自动化软件、思维导图工具或简单的编程平台。

- 响应式拖放、自动捕捉、自动滚动
    
- 块重排、删除块、自动块居中
    
- 条件捕捉、条件块移除、无依赖项
    

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

flowy.gif

#### Workflow Designer

简介：Workflow Designer[36] [在线示例[37]] - 基于G6和React的可视化流程编辑器。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

wfd.gif

#### web-pdm

简介：web-pdm[38] [在线示例[39]] - 用G6做的ER图工具，最终目标是想做成在线版的powerdesigner.

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

xyz.gif

#### X-Flowchart-Vue

简介：X-Flowchart-Vue[40] [在线演示[41]] - 基于G6和Vue的可视化图形编辑器。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

x-flowchart.gif

#### OrgChart

简介：OrgChart[42] [在线演示[43]] - 简单直接的组织图插件

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

origin.gif

#### welabx-g6

简介：welabx-g6[44] [在线示例[45]] - 基于G6和Vue的流程图编辑器。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

welabx.gif

更多关于Canvas图编辑的资源，请访问awesome-canvas[46]，项目地址 github.com/chinaBerg/a…[47]

### 全景图/AR/VR

5g的普及、虚拟现实/增强现实落地、元宇宙的火热......似乎让Canvas再度推上了技术的顶峰。下面让我来看看开发这些场景常见的Canvas库吧。

#### Pannellum

简介：Pannellum[48] [在线演示[49]] - 轻量、免费、开源的web全景查看器。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

pannelum.gif

#### Panolens.js

简介：Panolens.js[50] [在线演示[51]] - Panolens.js基于Three.JS，主要研究领域是全景、虚拟现实和潜在的增强现实。

#### JS-Cloudimage-360-View

简介：JS-Cloudimage-360-View[52] [在线演示[53]] 一个简单的、交互式的资源，可以用来提供您的产品的虚拟游览。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

cloud-image.gif

#### A-Frame

简介：A-Frame[54] [在线演示[55]] A-Frame 除了帮助您构建 360 度媒体播放器外，它还提供了许多附加功能。其他功能可帮助您增强网站的虚拟现实体验。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

aframe.gif

**更多关于Canvas全景图/AR/VR的资源，请访问Github[56]项目地址awesome-canvas[57]。**

### 3D库

#### three.js

简介：three.js[58] [在线演示[59]] - 创建易于使用、轻量级、跨浏览器的通用3d js库。three.js就不多介绍了，大家想必都很熟悉。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

three.gif

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

three2.gif

#### zdog

简介：zdog[60] [在线演示[61]] - 基于canvas和SVG设计师友好的伪3D引擎

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

zdog.gif

#### seen.js

简介：seen[62] [在线演示[63]] - 使用SVG或Canvas渲染3D场景。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

seen.gif

#### Oimo.js

简介：Oimo.js[64] [在线演示[65]] - 轻量级的JS 3D物理引擎。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

oimo.gif

#### phoria.js

简介：phoria.js[66] [在线演示[67]] - 用于在 HTML5 画布 2D 渲染器上进行简单 3D 图形和可视化的 JavaScript 库。它不使用 WebGL。适用于所有 HTML5 浏览器，包括桌面、iOS 和 Android。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

phoria.gif

更多关于Canvas 3D的资源，请访问awesome-canvas[68]，项目地址 github.com/chinaBerg/a…[69]