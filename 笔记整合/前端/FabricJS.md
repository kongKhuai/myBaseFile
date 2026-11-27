# FabricJS

> 共 18 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [aligning_guidelines-js](#sec-1) — 有道云笔记 · `canvas/Fabric.js/aligning_guidelines-js.md`
2. [Fabric.js 从入门到________](#sec-2) — 有道云笔记 · `canvas/Fabric.js/Fabric.js 从入门到________.md`
3. [Fabric.js 居中元素 🎗️](#sec-3) — 有道云笔记 · `canvas/Fabric.js/Fabric.js 居中元素 🎗️.md`
4. [Fabric.js 工具库(1)](#sec-4) — 有道云笔记 · `canvas/Fabric.js/Fabric.js 工具库(1).md`
5. [Fabric.js 工具库(2)](#sec-5) — 有道云笔记 · `canvas/Fabric.js/Fabric.js 工具库(2).md`
6. [Fabric.js 工具库(3)](#sec-6) — 有道云笔记 · `canvas/Fabric.js/Fabric.js 工具库(3).md`
7. [Fabric.js 工具库(4)](#sec-7) — 有道云笔记 · `canvas/Fabric.js/Fabric.js 工具库(4).md`
8. [Fabric.js 工具库(5-自己记录)](#sec-8) — 有道云笔记 · `canvas/Fabric.js/Fabric.js 工具库(5-自己记录).md`
9. [Fabric.js 自由绘制圆形](#sec-9) — 有道云笔记 · `canvas/Fabric.js/Fabric.js 自由绘制圆形.md`
10. [fabric.js和高级画板](#sec-10) — 有道云笔记 · `canvas/Fabric.js/fabric.js和高级画板.md`
11. [fabric库 对齐的8种实现 && 辅助线的实现](#sec-11) — 有道云笔记 · `canvas/Fabric.js/fabric库 对齐的8种实现 && 辅助线的实现.md`
12. [使用fabric.js绘制带有二次曲线的双线](#sec-12) — 有道云笔记 · `canvas/Fabric.js/使用fabric.js绘制带有二次曲线的双线.md`
13. [公章圆弧字fabric.js画法](#sec-13) — 有道云笔记 · `canvas/Fabric.js/公章圆弧字fabric.js画法.md`
14. [动画设置](#sec-14) — 有道云笔记 · `canvas/Fabric.js/动画设置.md`
15. [如何在Fabric.js中停止或暂停动画](#sec-15) — 有道云笔记 · `canvas/Fabric.js/如何在Fabric.js中停止或暂停动画.md`
16. [官方文档](#sec-16) — 有道云笔记 · `canvas/Fabric.js/官方文档.md`
17. [无标题笔记(4)](#sec-17) — 有道云笔记 · `canvas/Fabric.js/无标题笔记.md`
18. [本文介绍了在FabricJS中画出一条波浪线的处理方法，对大家解决问题具有一定的参考价值，需要的朋友们下面随着小编来一起学习吧！](#sec-18) — 有道云笔记 · `canvas/Fabric.js/本文介绍了在FabricJS中画出一条波浪线的处理方法，对大家解决问题具有一定的参考价值，需要的朋友们下面随着小编来一起学习吧！.md`

---

<a id="sec-1"></a>
## aligning_guidelines-js

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/aligning_guidelines-js.md`

使用方式：
源码：
```
 import initAligningGuidelines from './guidelines.js';
 let canvas = new fabric.Canvas('canvas');
 initAligningGuidelines(canvas)
function initAligningGuidelines(canvas) {
 var ctx = canvas.getSelectionContext(),
```
  aligningLineOffset = 5,
  aligningLineMargin = 4,
  aligningLineWidth = 1,
  aligningLineColor = 'rgb(255,255,0)',
  viewportTransform,
```
  zoom = 1;
 function drawVerticalLine(coords) {
```
  drawLine(
   coords.x + 0.5,
   coords.y1 > coords.y2 ? coords.y2 : coords.y1,
   coords.x + 0.5,
```
   coords.y2 > coords.y1 ? coords.y2 : coords.y1);
 }
 function drawHorizontalLine(coords) {
```
  drawLine(
   coords.x1 > coords.x2 ? coords.x2 : coords.x1,
   coords.y + 0.5,
```
   coords.x2 > coords.x1 ? coords.x2 : coords.x1,
   coords.y + 0.5);
 }
 function drawLine(x1, y1, x2, y2) {
  ctx.save();
  ctx.lineWidth = aligningLineWidth;
  ctx.strokeStyle = aligningLineColor;

  ctx.beginPath();31
  ctx.moveTo(((x1+viewportTransform[4])*zoom),
((y1+viewportTransform[5])*zoom));
  ctx.lineTo(((x2+viewportTransform[4])*zoom),
((y2+viewportTransform[5])*zoom));
  ctx.stroke();34
  ctx.restore();35
 }36
 function isInRange(value1, value2) {38
  value1 = Math.round(value1);39
  value2 = Math.round(value2);40
  for (var i = value1 - aligningLineMargin, len = value1 +
aligningLineMargin; i <= len; i++) {
   if (i === value2) {42
    return true;43
   }44
  }45
  return false;46
 }47
 var verticalLines = [],49
  horizontalLines = [];50
 canvas.on('mouse:down', function () {52
  viewportTransform = canvas.viewportTransform;53
  zoom = canvas.getZoom();54
 });55
 canvas.on('object:moving', function(e) {57
  var activeObject = e.target,59
```
   canvasObjects = canvas.getObjects(),60
   activeObjectCenter = activeObject.getCenterPoint(),61
   activeObjectLeft = activeObjectCenter.x,62
   activeObjectTop = activeObjectCenter.y,63
   activeObjectBoundingRect = activeObject.getBoundingRect(),64
   activeObjectHeight = activeObjectBoundingRect.height /
viewportTransform[3],
   activeObjectWidth = activeObjectBoundingRect.width /
viewportTransform[0],

   horizontalInTheRange = false,67
   verticalInTheRange = false,68
```
   transform = canvas._currentTransform;69
  if (!transform) return;71
  // It should be trivial to DRY this up by encapsulating (repeating)
```
creation of x1, x2, y1, and y2 into functions,
  // but we're not doing it here for perf. reasons -- as this a function
that's invoked on every mouse move
```
  for (var i = canvasObjects.length; i--; ) {76
   if (canvasObjects[i] === activeObject) continue;78
   var objectCenter = canvasObjects[i].getCenterPoint(),80
    objectLeft = objectCenter.x,81
    objectTop = objectCenter.y,82
    objectBoundingRect =
canvasObjects[i].getBoundingRect(),
    objectHeight = objectBoundingRect.height /
viewportTransform[3],
    objectWidth = objectBoundingRect.width /
viewportTransform[0];
   // snap by the horizontal center line87
   if (isInRange(objectLeft, activeObjectLeft)) {88
    verticalInTheRange = true;89
    verticalLines.push({90
     x: objectLeft,91
     y1: (objectTop < activeObjectTop)92
      ? (objectTop - objectHeight / 2 -
```
aligningLineOffset)
      : (objectTop + objectHeight / 2 +
aligningLineOffset),
```
     y2: (activeObjectTop > objectTop)95
      ? (activeObjectTop +
```
activeObjectHeight / 2 + aligningLineOffset)
      : (activeObjectTop -
activeObjectHeight / 2 - aligningLineOffset)
```
    });98
    activeObject.setPositionByOrigin(new
fabric.Point(objectLeft, activeObjectTop), 'center', 'center');

   }100
   // snap by the left edge102
   if (isInRange(objectLeft - objectWidth / 2, activeObjectLeft -
activeObjectWidth / 2)) {
    verticalInTheRange = true;104
    verticalLines.push({105
     x: objectLeft - objectWidth / 2,106
     y1: (objectTop < activeObjectTop)107
      ? (objectTop - objectHeight / 2 -
```
aligningLineOffset)
      : (objectTop + objectHeight / 2 +
aligningLineOffset),
```
     y2: (activeObjectTop > objectTop)110
      ? (activeObjectTop +
```
activeObjectHeight / 2 + aligningLineOffset)
      : (activeObjectTop -
activeObjectHeight / 2 - aligningLineOffset)
```
    });113
    activeObject.setPositionByOrigin(new
```
fabric.Point(objectLeft - objectWidth / 2 + activeObjectWidth / 2, activeObjectTop),
```
'center', 'center');
   }115
   // snap by the right edge117
   if (isInRange(objectLeft + objectWidth / 2, activeObjectLeft +
activeObjectWidth / 2)) {
    verticalInTheRange = true;119
    verticalLines.push({120
     x: objectLeft + objectWidth / 2,121
     y1: (objectTop < activeObjectTop)122
      ? (objectTop - objectHeight / 2 -
```
aligningLineOffset)
      : (objectTop + objectHeight / 2 +
aligningLineOffset),
```
     y2: (activeObjectTop > objectTop)125
      ? (activeObjectTop +
```
activeObjectHeight / 2 + aligningLineOffset)
      : (activeObjectTop -
activeObjectHeight / 2 - aligningLineOffset)
```
    });128
    activeObject.setPositionByOrigin(new
```
fabric.Point(objectLeft + objectWidth / 2 - activeObjectWidth / 2, activeObjectTop),
```
'center', 'center');

   }130
   // snap by the vertical center line132
   if (isInRange(objectTop, activeObjectTop)) {133
    horizontalInTheRange = true;134
    horizontalLines.push({135
     y: objectTop,136
     x1: (objectLeft < activeObjectLeft)137
      ? (objectLeft - objectWidth / 2 -
```
aligningLineOffset)
      : (objectLeft + objectWidth / 2 +
aligningLineOffset),
```
     x2: (activeObjectLeft > objectLeft)140
      ? (activeObjectLeft +
```
activeObjectWidth / 2 + aligningLineOffset)
      : (activeObjectLeft -
activeObjectWidth / 2 - aligningLineOffset)
```
    });143
    activeObject.setPositionByOrigin(new
fabric.Point(activeObjectLeft, objectTop), 'center', 'center');
   }145
   // snap by the top edge147
   if (isInRange(objectTop - objectHeight / 2, activeObjectTop -
activeObjectHeight / 2)) {
    horizontalInTheRange = true;149
    horizontalLines.push({150
     y: objectTop - objectHeight / 2,151
     x1: (objectLeft < activeObjectLeft)152
      ? (objectLeft - objectWidth / 2 -
```
aligningLineOffset)
      : (objectLeft + objectWidth / 2 +
aligningLineOffset),
```
     x2: (activeObjectLeft > objectLeft)155
      ? (activeObjectLeft +
```
activeObjectWidth / 2 + aligningLineOffset)
      : (activeObjectLeft -
activeObjectWidth / 2 - aligningLineOffset)
```
    });158
    activeObject.setPositionByOrigin(new
```
fabric.Point(activeObjectLeft, objectTop - objectHeight / 2 + activeObjectHeight / 2),
```
'center', 'center');
   }160

   // snap by the bottom edge162
   if (isInRange(objectTop + objectHeight / 2, activeObjectTop +
activeObjectHeight / 2)) {
    horizontalInTheRange = true;164
    horizontalLines.push({165
     y: objectTop + objectHeight / 2,166
     x1: (objectLeft < activeObjectLeft)167
      ? (objectLeft - objectWidth / 2 -
```
aligningLineOffset)
      : (objectLeft + objectWidth / 2 +
aligningLineOffset),
```
     x2: (activeObjectLeft > objectLeft)170
      ? (activeObjectLeft +
```
activeObjectWidth / 2 + aligningLineOffset)
      : (activeObjectLeft -
activeObjectWidth / 2 - aligningLineOffset)
```
    });173
    activeObject.setPositionByOrigin(new
```
fabric.Point(activeObjectLeft, objectTop + objectHeight / 2 - activeObjectHeight / 2),
```
'center', 'center');
   }175
  }176
  if (!horizontalInTheRange) {178
   horizontalLines.length = 0;179
  }180
  if (!verticalInTheRange) {182
   verticalLines.length = 0;183
  }184
 });185
 canvas.on('before:render', function() {187
  canvas.clearContext(canvas.contextTop);188
 });189
 canvas.on('after:render', function() {191
  for (var i = verticalLines.length; i--; ) {192
   drawVerticalLine(verticalLines[i]);193
  }194
  for (var i = horizontalLines.length; i--; ) {195

   drawHorizontalLine(horizontalLines[i]);196
  }197
  verticalLines.length = horizontalLines.length = 0;199
 });200
 canvas.on('mouse:up', function() {202
  verticalLines.length = horizontalLines.length = 0;203
  canvas.renderAll();204
 });205
}206
export default initAligningGuidelines;208
```

<a id="sec-2"></a>
## Fabric.js 从入门到________

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/Fabric.js 从入门到________.md`

首先要说的是：本文篇幅很长，建议点赞收藏（点赞就等于学会了）。
Fabric.js 是一个功能强大且操作简单的 Javascript HTML5 canvas 工具库。

Fabric.js 从入门到________
Fabric.js 简介

如果你需要用 canvas 做特效，那我推荐你使用 Fabric.js ，因为 Fabric.js 语法更加简单易用，而且还提供了很多交互类的 api。
Fabric.js 简化了很多 Canvas 里的概念，代码看上去也更加语义化。

Fabric.js 能做什么？
可以打开  直接看例子，也可以看看  查看更炫酷的例子。

如果是 0基础 的读者，希望可以从头读到尾，读完起码大概知道 Fabric.js 有哪些功能。

本文是根据我的学习过程来编写的，只要跟着本文一步一步操作，一定可以入门 Fabric.js ，同时还能改善您的睡眠质量、解决毛发过多等诸多问题。

由于我使用 Fabric.js 的时间不长，这份笔记在各个知识点的内容肯定不够全面的，也不一定完全正确。读者们如果发现本文存在不正确的地方请大胆指出，我会改的~

本文适合人群：
canvas 基础（这是加分项，完全没有也没关系的）
本文主要讲解 Fabric.js 基础，包括：
『Fabric.js 官网首页』 『Fabric.js Demos』
本文简介
有原生三件套基础的开发者
最好有
画布的基本操作
基础图形绘制方法（矩形、圆形、三角形、椭圆、多边形、线段等）
图片和滤镜的使用
文本和文本框
动画
分组和打散分组
基础事件
自由绘画
裁剪
序列化和反序列化

除此之外，还会讲一些进阶一点的操作，比如：
除了上述内容外，我还会根据日后的工作中整理出更多常用和好玩的操作，本文即学习仓库会不定期更新！！！

 Fabric.js 的版本是 4.6。
 Vite 构建的 Vue 3.2 项目。
没有 Vite 和 Vue3.2 基础的同学也不用怕，因为 Vite 真的足够简单。
本文的目的是讲解 Fabric.js ，所以用到 Vue 3.2 的地方其实很少，用到时我也会有详细说明。
如果你不打算使用 Vite 和 Vue 3.2 也没关系，用你喜欢的方式去搭建项目即可。
……
自定义操作角样式和状态
自定义控件
复制粘贴图形
使用事件方式操作图形和分组
……
相关链接
『Fabric.js npm地址』
『Fabric.js github地址』
🎁 本文案例在线预览
🎁 本文所有案例仓库地址 【欢迎Star，不定期更新！！！】
开发环境搭建
环境和版本说明
本文使用
本文的开发环境是使用

现在只需跟着以下步骤搭建项目即可。

如果你不想使用 Vite + Vue3 的话，可以跳过本节。
我也建议你直接使用原生 (HTML+CSS+JS) 的方式直接学习 Fabric.js，因为这样上手速度最快。

之后会让你选 vue 或者 vue + ts，我选择了 vue ，你随意。
为什么不选 ts ？因为一人开发的练手项目使用 ts 有点得不偿失。

其实做完上一步就会给出提示（3条命令），跟着敲完就能运行项目了搭建环境（Vite + Vue3）
Vite 官网
Vue3 官网
1. 搭建Vite项目
npm init @vitejs/app
复制代码
2. 给项目起个名，并选择 Vue
3. 初始化项目

<a id="sec-3"></a>
## Fabric.js 居中元素 🎗️

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/Fabric.js 居中元素 🎗️.md`

在使用 Fabric.js 开发时，可能会需要将元素居中。
本文总结了 Fabric.js 常用的将元素居中的方法，其中包括：

除此之外，还总结了 在画布层面居中指定元素 和 元素自身调用居中方法 。

阅读本文需要你有一定的 Fabric.js 基础，如果还不太了解 Fabric.js 是什么，可以阅读

为了方便演示，我在初始化画布的时：

Fabric.js 居中元素 🎗
https://juejin.cn/post/7105418456484282404本文基于视窗的水平居中基于画布的水平居中带动画效果的水平居中基于视窗的垂直居中基于画布的垂直居中带动画效果的垂直居中同时实现水平和垂直居中（也是分基于视窗或基于画布的）
《Fabric.js
从入门到膨胀》
创建基础项目
添加一个背景图，该背景图的尺寸和初始化的画布一样大。
添加一个矩形，之后要居中的对象就是它了。
添加鼠标滚轮滚动时缩放画布（方便演示 基于视窗 和 基于画布 的区别）。
添加鼠标拖拽画布平移位置（方便演示 基于视窗 和 基于画布 的区别）。
1.
2.
3.
4.

```
<canvas id="canvasBox" width="600" height="600" style="border: 1px solid #ccc;">
</canvas>
<!-- 引入  Fabric.js -->3
<script src="
<script src="
```
https://cdn.bootcdn.net/ajax/libs/fabric.js/521/fabric.js
```
<script>6
  // 初始化画布7
  const canvas = new fabric.Canvas('canvasBox')8
  // 设置背景图10
  fabric.Image.fromURL('../../images/bg2.jpg', img => {11
    canvas.setBackgroundImage(12

      img,13
      canvas.renderAll.bind(canvas),14
      { // 将背景图的宽高设置成画布的宽高15
        scaleX: canvas.width / img.width,16
        scaleY: canvas.height / img.height17
      }18
    )19
  })20
  // 创建矩形22
  const rect = new fabric.Rect({23
    name: 'rect',24
    top: 60, // 距离容器顶部  60px25
    left: 60, // 距离容器左侧  200px26
    fill: 'orange', // 填充 a 橙色27
    width: 60, // 宽度  60px28
    height: 60, // 高度  60px29
    originX: 'center',30
    originY: 'center'31
  })32
  // 将矩形添加到画布中34
```
  canvas.add(rect)35
```
  // 滚轮滚动时可修改画布缩放等级37
  canvas.on('mouse:wheel', opt => {38
    const delta = opt.e.deltaY // 滚轮，向上滚一下是  -100 ，向下滚一下是  10039
    let zoom = canvas.getZoom() // 获取画布当前缩放值40
    zoom *= 0.999 ** delta41
    if (zoom > 20) zoom = 2042
    if (zoom < 0.01) zoom = 0.0143
    canvas.zoomToPoint(44
      { // 关键点45
        x: opt.e.offsetX,46
        y: opt.e.offsetY47
      },48
      zoom49
    )50
  })51
```

代码有点多，但 滚轮滚动时可修改画布缩放等级 和 拖拽画布 部分其实可以不要的，写上这些代码主要是为了方便演示。
以下所有例子中所指的元素都是 rect ，因为本例以 rect 进行讲解。你需要根据实际项目中要操作的对象进行调整。

将指定元素水平居中。

```
  /* 拖拽画布  */53
  canvas.on('mouse:down', opt => { // 鼠标按下时触发54
    let evt = opt.e55
    canvas.isDragging = true // isDragging 是自定义的56
    canvas.lastPosX = evt.clientX // lastPosX 是自定义的57
    canvas.lastPosY = evt.clientY // lastPosY 是自定义的58
  })59
  canvas.on('mouse:move', opt => { // 鼠标移动时触发61
    if (canvas.isDragging) {62
      let evt = opt.e63
      let vpt = canvas.viewportTransform // 聚焦视图的转换64
      vpt[4] += evt.clientX - canvas.lastPosX65
      vpt[5] += evt.clientY - canvas.lastPosY66
      canvas.requestRenderAll()67
      canvas.lastPosX = evt.clientX68
      canvas.lastPosY = evt.clientY69
    }70
  })71
  canvas.on('mouse:up', opt => { // 鼠标松开时触发73
    canvas.setViewportTransform(canvas.viewportTransform) // 设置此画布实例的视口转换  74
    canvas.isDragging = false75
  })76
</script>77
```
复制代码78
水平居中

基于视窗
```
<button onclick="centerH()">水平居中</button>
<script>
  // 省略部分代码
  // 水平居中
  function centerH() {
    // 从画布的角度操作对象
    canvas.viewportCenterObjectH(rect)
```

上面我写了2中方法，方法1是用画布操作指定的对象；方法2是元素自己根据视窗来调整自己的位置。

我直接上图来解释一下什么是 根据视窗水平居中元素缩放的情况

移动画布的情况
```
    // 元素自己根据视窗进行居中11
    // rect.viewportCenterH()12
  }13
</script>14
```
复制代码15

在缩放和移动画布之后，canvas.viewportCenterObjectH 和 rect.viewportCenterH 还是会根据根据视窗的标准来水平居中。

基于画布

缩放的情况

```
// 省略部分代码
canvas.centerObjectH(rect)
// 元素自己根据画布进行居中
// rect.centerH()复制代码移动画布的情况
```

可以和 基于视窗 的效果对比一下。

带动画效

带动画的效果需要在画布中调用 fxCenterObjectH 方法。带动画效果的居中是根据画布来居中的，并非视窗！

垂直居中和水平居中的用法差不多，只是改了一下api。水平居中是用 “H” ，垂直居中用 “V”。

```
// 省略部分代码
canvas.fxCenterObjectH(rect)
```
复制代码
垂直居中

基于视窗

```
// 省略部分代码
canvas.viewportCenterObjectV(rect)
// 元素自己根据视窗进行居中
// rect.viewportCenterV()复制代码基于画布
// 省略部分代码
canvas.centerObjectH(rect)
// 元素自己根据画布进行居中
// rect.centerH()复制代码带动画效果
```

Fabric.js 还提供同时水平和垂直居中的功能。

```
// 省略部分代码
canvas.fxCenterObjectV(rect)
```
复制代码
水平 + 垂直 同时居中

基于视窗
```
// 省略部分代码
canvas.viewportCenterObject(rect)
// 元素自己根据视窗进行居中
// rect.viewportCenter()复制代码基于画布

// 省略部分代码
canvas.centerObject(rect)
// 元素自己根据画布进行居中
rect.center()
```
复制代码

暂时还没发现同时垂直和水平居中有带动画效果的api，所以可以尝试同时调用 fxCenterObjectH 和 fxCenterObjectV

带动画效果
```
// 省略部分代码
function fxCenter() {
  canvas.fxCenterObjectH(rect)
  canvas.fxCenterObjectV(rect)
}
```

<a id="sec-4"></a>
## Fabric.js 工具库(1)

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/Fabric.js 工具库(1).md`

来自：彭世瑜的博客 2022-09-14 74 浙江简介： 前端可视化：Fabric.js HTML5 canvas 工具库
.js 是一个功能强大且操作简单的 Javascript HTML5 canvas 工具库。
文档：
安装
创建容器
绘制图形
前端可视化：Fabric.js HTML5 canvas 工具库(1)
Fabric
官网：http://fabricjs.com/
github: https://github.com/fabricjs/fabric.js基本示例
<canvas id="canvas"
  width="400"
  height="400"
```
  style="border: 1px solid #ccc;"
></canvas>
import { fabric } from 'fabric'
// 使用  fabric 接管容器  传入 canvas 的 id
const canvas = new fabric.Canvas('canvas')
// 创建一个长方形
const rect = new fabric.Rect({
  top: 30, // 距离容器顶部  30px
  left: 30, // 距离容器左侧  30px
  width: 100, // 宽  100px
  height: 60, // 高  60px
  fill: 'red' // 填充  红色
})
// 将矩形（ rect ）加入到 canvas 画布中创建画布设定画布参数
```

canvas.add(rect)16
画布
```
// 可交互的画布
const canvas = new fabric.Canvas('canvas')
// 不可交互的画布
const canvas = new fabric.StaticCanvas('canvas')
// 设定画布参数
const canvas = new fabric.Canvas('canvas', {
    width: 300, // 画布宽度
    height: 300, // 画布高度
    backgroundColor: '#eee', // 画布背景色
     // 元素对象被选中时保持原有层级
  preserveObjectStacking: true, // 默认 false
  // 输出一个精简后的  JSON
```
  includeDefaultValues: false
})
使用背景图
setBackgroundImage(image, callback, optionsopt) → {fabric.Canvas}1

示例
```
let imageUrl = '
let imageUrl = '
```
http://fabricjs.com/assets/honey_im_subtle.png
```
// 设置背景图
// 方法一：设置图片地址
```
canvas.setBackgroundImage(
```
    imageUrl,
    canvas.renderAll.bind(canvas)
```
)
// 方法二：使用  fabric.Image.fromURL
fabric.Image.fromURL(imageUrl,
```
    (img) => {
       canvas.setBackgroundImage(
            img,
            canvas.renderAll.bind(canvas)
        )
    }
```
)
// 旋转背景图
canvas.setBackgroundImage(
```
    imageUrl,
    canvas.renderAll.bind(canvas),
    {
      angle: 15
    }
```
)
// 拉伸背景图 , 使图片充满全屏
canvas.setBackgroundImage(
```
    imageUrl,
    canvas.renderAll.bind(canvas),
```

矩形
```
    {36
        scaleX: canvas.width / img.width, // 计算出图片要拉伸的宽度37
        scaleY: canvas.height / img.height // 计算出图片要拉伸的高度38
    }39
```
)40
// 重复背景图43
 const bgImgUrl =   'https://files.catbox.moe/an4kxc.jpg'44
canvas.setBackgroundColor(45
```
    {46
        source:  bgImgUrl,47
        repeat: 'repeat'48
    }, 49
```
  canvas.renderAll.bind(canvas)50
)51
```
      fabric.Image.fromURL(bgImgUrl, (img) => {52
        console.log(img)53
        canvas.setBackgroundColor(54
          {55
            source: bgImgUrl,56
            repeat: 'repeat',57
          },58
          canvas.renderAll.bind(canvas)59
        )60
      })61
// 设置覆盖图像的画布63
// setOverlayImage(image, callback, optionsopt)64
```
canvas.setOverlayImage(65
```
    imageUrl,66
    canvas.renderAll.bind(canvas)67
```
)68
基础图形

圆角矩形
圆形
椭圆形
```
const rect = new fabric.Rect({
    top: 100, // 距离容器顶部  100px
    left: 100, // 距离容器左侧  100px
    fill: 'orange', // 填充  橙色
    width: 100, // 宽度  100px
    height: 100 // 高度  100px
  })
const rect = new fabric.Rect({
    top: 100, // 距离容器顶部  100px
    left: 100, // 距离容器左侧  100px
    fill: 'orange', // 填充  橙色
    width: 100, // 宽度  100px
    height: 100, // 高度  100px
    rx: 20, // x 轴的半径
    ry: 20 // y 轴的半径
})
const circle = new fabric.Circle({1
    top: 100,2
    left: 100,3
    radius: 50, // 圆的半径  504
    fill: 'green'
  })
const ellipse = new fabric.Ellipse({
    top: 20,
    left: 20,
```

三角形

线段

折线

```
    rx: 70,
    ry: 30,
    fill: 'hotpink'
const triangle = new fabric.Triangle({
    top: 100,
    left: 100,
    width: 80, // 底边长度
    height: 100, // 底边到对角的距离
    fill: 'blue'
const line = new fabric.Line(
    [
      10, 10, // 起始点坐标
      200, 300 // 结束点坐标
    ],
    {
      stroke: 'red', // 笔触颜色
    }
```
  )
```
// 不会自动把  起始点  和  结束点  自动闭合
const polyline = new fabric.Polyline([
    {x: 30, y: 30},
    {x: 150, y: 140},
    {x: 240, y: 150},
    {x: 100, y: 30}
  ], {
```

多边形
在圈子最新版本 FabricJS 的加入startAngle和endAngle性能 .

```
    fill: 'transparent', // 如果画折线，需要填充透明8
    stroke: '#6639a6', // 线段颜色：紫色9
    strokeWidth: 5 // 线段粗细  510
})11
// 会自动把  起始点  和  结束点  连接起来1
const polygon = new fabric.Polygon([2
    {x: 30, y: 30},3
    {x: 150, y: 140},4
    {x: 240, y: 150},5
    {x: 100, y: 30}6
  ], {7
    fill: '#ffd3b6', // 填充色8
    stroke: '#6639a6', // 线段颜色：紫色9
    strokeWidth: 5 // 线段粗细  510
  })11
```
弧形
https://github.com/kangax/fabric.js/pull/1675
```
var canvas = new fabric.Canvas('c');
var circle = new fabric.Circle({
    radius: 20,
    left: 100,
    top: 100,
    angle: 45,
    startAngle: 0,
    endAngle: Math.PI,
    stroke: '#000',
    strokeWidth: 3,
    fill: ''
});
```

网上方式217
```
var arc1 = new fabric.Path("M 255 135 A 50 50 0 0 1 200 110", {18
                stroke: 'black',19
                fill: "white"20
            });21
```
 http://fabricjs.com/docs/fabric.util.html#drawArc23

<a id="sec-5"></a>
## Fabric.js 工具库(2)

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/Fabric.js 工具库(2).md`

来自：彭世瑜的博客 2022-09-14 41 浙江简介： 前端可视化：Fabric.js HTML5 canvas 工具库绘制路径
M：可以理解为新的起始点x，y坐标
L：每个折点的x，y坐标
z：自动闭合（自动把结束点和起始点连接起来）

普通文本
可编辑文本

文本框
前端可视化：Fabric.js HTML5 canvas 工具库(2)
```
// 绘制路径
const path = new fabric.Path('M 0 0 L 200 100 L 170 200 z')
path.set({
    top: 50, // 距离容器顶部距离  50px
    left: 50, // 距离容器左侧距离  50px
    fill: 'hotpink', // 填充  亮粉色
    opacity: 0.5, // 不透明度  50%
    stroke: 'black', // 描边颜色  黑色
    strokeWidth: 10 // 描边粗细  10px
})
```
文本
const text = new fabric.Text(' 雷猴啊 ')1
• 12
```
const itext = new fabric.IText(' 雷猴啊 ')
// 内容可编辑图形常用样式文本常用样式

const textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {2
    width: 2503
})4
```
基础样式
```
const circle = new fabric.Circle({
    top: 100,
    left: 100,
    radius: 50, // 半径： 50px
    backgroundColor: 'green', // 背景色：绿色
    fill: 'orange', // 填充色：橙色
    stroke: '#f6416c', // 边框颜色：粉色
    strokeWidth: 5, // 边框粗细： 5px
    strokeDashArray: [20, 5, 14], // 边框虚线规则：填充 20px 空 5px 填充 14px 空 20px 填充 5px
```
……
    shadow: '10px 20px 6px rgba(10, 20, 30, 0.4)', // 投影：向右偏移 10px ，向下偏移 20px ，
羽化 6px ，投影颜色及透明度
```
    transparentCorners: false, // 选中时，角是被填充了。 true 空心； false 实心11
    borderColor: '#16f1fc', // 选中时，边框颜色：天蓝12
    borderScaleFactor: 5, // 选中时，边的粗细： 5px13
    borderDashArray: [20, 5, 10, 7], // 选中时，虚线边的规则14
    cornerColor: "#a1de93", // 选中时，角的颜色是  青色15
    cornerStrokeColor: 'pink', // 选中时，角的边框的颜色是  粉色16
    cornerStyle: 'circle', // 选中时，叫的属性。默认 rect 矩形； circle 圆形17
    cornerSize: 20, // 选中时，角的大小为 2018
    cornerDashArray: [10, 2, 6], // 选中时，虚线角的规则19
    selectionBackgroundColor: '#7f1300', // 选中时，选框的背景色：朱红20
    padding: 40, // 选中时，选择框离元素的内边距： 40px21
    borderOpacityWhenMoving: 0.6, // 当对象活动和移动时，对象控制边界的不透明度  22
  })23
const text = new fabric.Text(' 雷猴 ', {1

    top: 40,
    left: 40,
    fontSize: 120,
    backgroundColor: 'green', // 背景色：绿色
    fill: 'orange', // 填充色：橙色
    stroke: '#f6416c', // 边框颜色：粉色
    strokeWidth: 3, // 边框粗细： 3px
    strokeDashArray: [20, 5, 14], // 边框虚线规则：填充 20px 空 5px 填充 14px 空 20px 填充 5px
```
……
    shadow: '10px 20px 6px rgba(10, 20, 30, 0.4)', // 投影：向右偏移 10px ，向下偏移 20px ，
羽化 6px ，投影颜色及透明度
```
    transparentCorners: false, // 选中时，角是被填充了。 true 空心； false 实心11
    borderColor: '#16f1fc', // 选中时，边框颜色：天蓝12
    borderScaleFactor: 5, // 选中时，边的粗细： 5px13
    borderDashArray: [20, 5, 10, 7], // 选中时，虚线边的规则14
    cornerColor: "#a1de93", // 选中时，角的颜色是  青色15
    cornerStrokeColor: 'pink', // 选中时，角的边框的颜色是  粉色16
    cornerStyle: 'circle', // 选中时，叫的属性。默认 rect 矩形； circle 圆形17
    cornerSize: 20, // 选中时，角的大小为 2018
    cornerDashArray: [10, 2, 6], // 选中时，虚线角的规则19
    selectionBackgroundColor: '#7f1300', // 选中时，选框的背景色：朱红20
    padding: 40, // 选中时，选择框离元素的内边距： 40px21
    borderOpacityWhenMoving: 0.6, // 当对象活动和移动时，对象控制边界的不透明度  22
  })23
const overline = new fabric.Text(' 文本 ', {
    top: 30,
    left: 10,
    fontSize: 20,
    overline: true, // 上划线
    underline: true, // 下划线
    linethrough: true, // 删除线
    textAlign: 'left', // 左对齐
    // textAlign: 'center',// 居中对齐
    // textAlign: 'right', // 右对齐
    lineHeight: 1, // 行高
    fontStyle: 'italic', // 斜体
})
```

线性渐变
径向渐变
渐变
```
// 圆
let circle = new fabric.Circle({
    left: 100,
    top: 100,
    radius: 50,
})
// 线性渐变
let gradient = new fabric.Gradient({
    type: 'linear', // linear or radial
    gradientUnits: 'pixels', // pixels or pencentage 像素  或者  百分比
    coords: { x1: 0, y1: 0, x2: circle.width, y2: 0 }, // 至少 2 个坐标对（ x1 ， y1 和 x2 ， y2 ）
```
将定义渐变在对象上的扩展方式
```
    colorStops:[ // 定义渐变颜色的数组13
        { offset: 0, color: 'red' },14
        { offset: 0.2, color: 'orange' },15
        { offset: 0.4, color: 'yellow' },16
        { offset: 0.6, color: 'green' },17
        { offset: 0.8, color: 'blue' },18
        { offset: 1, color: 'purple' },19
    ]20
})21
circle.set('fill', gradient);23
let gradient = new fabric.Gradient({
    type: 'radial',
    coords: {
        r1: 50, // 该属性仅径向渐变可用，外圆半径
```

使用HTML的图片
使用js引入
```
        r2: 0, // 该属性仅径向渐变可用，外圆半径
        x1: 50, // 焦点的 x 坐标
        y1: 50, // 焦点的 y 坐标
        x2: 50, // 中心点的 x 坐标
        y2: 50, // 中心点的 y 坐标
    },
    colorStops: [
        { offset: 0, color: '#fee140' },
        { offset: 1, color: '#fa709a' }
    ]
})
```
使用图片
```
const imgElement = document.getElementById('logo')
let imgInstance = new fabric.Image(imgElement, {
    left: 100,
    top: 100,
    width: 200,
    height: 200,
    angle: 50, // 旋转
})
canvas.add(imgInstance)
fabric.Image.fromURL(imageUrl, image => {
    image.scale(0.5) // 缩放
    canvas.add(image) // 将图片加入到画布
})
```
图片滤镜

单个滤镜
叠加滤镜
fabric 内置滤镜
```
fabric.Image.fromURL(imageUrl, img => {1
    img.scale(0.5) // 图片缩小 50%2
    img.left = 2503
    // 添加滤镜
    img.filters.push(new fabric.Image.filters.Grayscale())
    // 图片加载完成之后，应用滤镜效果
    img.applyFilters()
    canvas.add(img)
})
fabric.Image.fromURL(imageUrl, img => {
    img.scale(0.5) // 图片缩小 50%
    // 添加滤镜
    img.filters.push(
        new fabric.Image.filters.Grayscale(),
        new fabric.Image.filters.Sepia(), // 色偏
        new fabric.Image.filters.Brightness({ brightness: 0.2 }) // 亮度
    )
    // 图片加载完成之后，应用滤镜效果
    img.applyFilters()
    img.set({
        left: 250,
        top: 250,
    })
    canvas.add(img)
})
```

BaseFilter 基本过滤器
Blur 模糊
Brightness 亮度
ColorMatrix 颜色矩阵
Contrast 对比
Convolute 卷积
Gamma 伽玛
sq 灰度
HueRotation 色调旋转
Invert 倒置
Noise 噪音
Pixelate 像素化
RemoveColor 移除颜色
Resize 调整大小
Saturation 饱和
Sepia 色偏

<a id="sec-6"></a>
## Fabric.js 工具库(3)

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/Fabric.js 工具库(3).md`

来自：彭世瑜的博客 2022-09-14 61 浙江简介： 前端可视化：Fabric.js HTML5 canvas 工具库旋转角度 angle
缩放 scaleX 和 scaleY
前端可视化：Fabric.js HTML5 canvas 工具库(3)
转换
```
let triangle = new fabric.Triangle({
    top: 100,
    left: 100,
    width: 80,
    height: 100,
    fill: 'blue',
    angle: 30 // 旋转 30 度
  })
```
如何围绕 fabric.js 中的一个指定点旋转？
您可以使用任意点实现旋转 fabric.util.rotatePoint.这将让您旋转线(由定义 x1,y1,x2 和 y2 关于原点)
(通过定义 origin_x 和 origin_y 度)的角度(按规定 angle).
请注意,fabric.util.rotatePoint 以弧度为单位进行旋转,即使 angle 在使用 fabric.js 时 s 通常以度数指
定.
```
var rotation_origin = new fabric.Point(origin_x, origin_y);14
var angle_radians = fabric.util.degreesToRadians(angle);15
var start = fabric.util.rotatePoint(new fabric.Point(x1,y1), rotation_origin,
angle_radians);
var end = fabric.util.rotatePoint(new fabric.Point(x2,y2), rotation_origin,
angle_radians);
var line1 = new fabric.Line([start.x, start.y, end.x, end.y], {18
    stroke: '#000000',19
    strokeWidth: 620
});21
```
您可以对其他对象执行相同操作,但您可能需要提供 angle 属性以适当地旋转对象.23

反转 scaleX 和 scaleY
平移 top 和 left

建组
```
 let triangle = new fabric.Triangle({
    top: 100,
    left: 100,
    width: 80,
    height: 100,
    fill: 'blue',
    scaleX: 2, // x 轴方向放大 2 倍
    scaleY: 2 // y 轴方向放大 2 倍
  })
let triangle = new fabric.Triangle({
    top: 100,
    left: 100,
    width: 80,
    height: 100,
    fill: 'blue',
    scaleY: -1 // scale 是负数时，图形会反转
  })
let triangle = new fabric.Triangle({
    top: 100, // 移动
    left: 100,
    width: 80,
    height: 100,
    fill: 'blue',
  })
```
分组

操作组
常用组方法
```
const canvas = new fabric.Canvas('canvas')
// 椭圆
const ellipse = new fabric.Ellipse({
    top: 20,
    left: 20,
    rx: 100,
    ry: 50,
    fill: '#ddd',
    originX: 'center', // 旋转 x 轴： left, right, center
    originY: 'center' // 旋转 y 轴： top, bottom, center
})
// 文本
const text = new fabric.Text('Hello World', {
    top: 40,
    left: 20,
    fontSize: 20,
    originX: "center",
    originY: "center"
})
// 建组
const group = new fabric.Group([ellipse, text], {
    top: 50, // 整组距离顶部 10
    left: 100, // 整组距离左侧 10
    angle: -10, // 整组旋转 -10deg
})
canvas.add(group)
getObjects()       // 返回一组中所有对象的数组
size()             // 所有对象的数量打散分组绝对值动画

contains()         // 检查特定对象是否在  group 中
item()             // 组中元素
forEachObject()    // 遍历组中对象
add()              // 添加元素对象
remove()           // 删除元素对象
fabric.util.object.clone() // 克隆
// 控制第一个元素（椭圆）
```
group.item(0).set('fill', '#ea5455')
```
// 控制第二个元素（文本）
group.item(1).set({
    text: ' 雷猴，世界 ',
    fill: '#fff'
})
group.toActiveSelection()
// 先获取当前选中的对象，然后打散
```
canvas.getActiveObject().toActiveSelection()
动画
```
const rect = new fabric.Rect({
    left: 100,
    top: 100,
    width: 100,
    height: 100,
    fill: 'red'
  })
```

相对值动画

官方案例:
```
// 设置矩形动画9
// animate( 动画属性 , 动画的结束值 , [ 画的详细信息 ])10
rect.animate('angle', "-50", {11
    // // 每次刷新的时候都会执行12
    onChange: canvas.renderAll.bind(canvas), 13
})14
// {16
//    rom ：允许指定可设置动画的属性的起始值（如果我们不希望使用当前值）。17
//    duration ：默认为 500 （ ms ）。可用于更改动画的持续时间。18
//    onComplete ：在动画结束时调用的回调。19
//    easing ：缓动功能。20
// }21
// 请注意第二个参数： +=3601
  rect.animate('angle', '+=360', {
    onChange:canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
    duration: 2000, // 执行时间
    easing: fabric.util.ease.easeOutBounce, // 缓冲效果
  })
```
事件
http://fabricjs.com/events
```
const rect = new fabric.Rect({
    top: 20,
    left: 20,
    width: 100,
    height: 50,
    fill: '#9896f1'
  })
// 给矩形添加一个选中事件

rect.on('selected', options => {10
    console.log(' 选中矩形啦 ', options)11
})12
// 添加画布点击事件14
canvas.on('mouse:down', options => {15
    console.log(`x 轴坐标 : ${options.e.clientX}; y 轴坐标 : ${options.e.clientY}`)16
})17
// 移除画布点击事件19
```
canvas.off('mouse:down')20
自由绘画
```
const canvas = new fabric.Canvas('canvas', {
    isDrawingMode: true, // 开启绘图模式
  })
// 设置画笔颜色
```
canvas.freeDrawingBrush.color = '#11999e'
// 设置画笔粗细
canvas.freeDrawingBrush.width = 109
```
// 画笔投影11
canvas.freeDrawingBrush.shadow = new fabric.Shadow({12
    blur: 10,13
    offsetX: 10,14
    offsetY: 10,15
    affectStroke: true,16
    color: '#30e3ca',17
})18
```
禁止部分操作

```
const rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 100,
    height: 50,
    fill: '#ffde7d'
})
// 不允许水平移动
```
rect.lockMovementX = true
// 不允许垂直移动
rect.lockMovementY = true
// 禁止旋转
rect.lockRotation = true
  // 禁止水平缩放
rect.lockScalingX = true
// 禁止垂直缩放
rect.lockScalingY = true
// 不允许直接从画布框选
canvas.selection = false

<a id="sec-7"></a>
## Fabric.js 工具库(4)

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/Fabric.js 工具库(4).md`

来自：彭世瑜的博客 2022-09-14 71 浙江简介： 前端可视化：Fabric.js HTML5 canvas 工具库缩放画布以原点为基准缩放画布以鼠标指针为基准缩放画布前端可视化：Fabric.js HTML5 canvas 工具库(4)
缩放和平移画布
```
// 监听鼠标滚轮事件
  canvas.on('mouse:wheel', opt => {
    let delta = opt.e.deltaY // 滚轮向上滚一下是  -100 ，向下滚一下是  1
    let zoom = canvas.getZoom() // 获取画布当前缩放值
    // 控制缩放范围在  0.01~20 的区间内
    zoom *= 0.999 ** delta
    if (zoom > 20) zoom = 208
    if (zoom < 0.01) zoom = 0.019
    // 设置画布缩放比例11
    canvas.setZoom(zoom)12
  })13
// 监听鼠标滚轮事件
  canvas.on('mouse:wheel', opt => {
    let delta = opt.e.deltaY // 滚轮向上滚一下是  -100 ，向下滚一下是  1
    let zoom = canvas.getZoom() // 获取画布当前缩放值
    // 控制缩放范围在  0.01~20 的区间内
    zoom *= 0.999 ** delta
    if (zoom > 20) zoom = 208
    if (zoom < 0.01) zoom = 0.019
```

平移画布
```
    // 设置画布缩放比例11
    // 关键点！！！12
    // 参数 1 ：将画布的所放点设置成鼠标当前位置13
    // 参数 2 ：传入缩放值14
    canvas.zoomToPoint(15
      {16
        x: opt.e.offsetX, // 鼠标 x 轴坐标17
        y: opt.e.offsetY  // 鼠标 y 轴坐标18
      },19
      zoom // 最后要缩放的值20
    )21
  })22
canvas.on('mouse:down', opt => { // 鼠标按下时触发
    let evt = opt.e
    if (evt.altKey === true) { // 是否按住 alt
      canvas.isDragging = true // isDragging 是自定义的，开启移动状态
      canvas.lastPosX = evt.clientX // lastPosX 是自定义的
      canvas.lastPosY = evt.clientY // lastPosY 是自定义的
    }
  })
  canvas.on('mouse:move', opt => { // 鼠标移动时触发
    if (canvas.isDragging) {
      let evt = opt.e
      let vpt = canvas.viewportTransform // 聚焦视图的转换
      vpt[4] += evt.clientX - canvas.lastPosX
      vpt[5] += evt.clientY - canvas.lastPosY
      canvas.requestRenderAll() // 重新渲染
      canvas.lastPosX  = evt.clientX
      canvas.lastPosY  = evt.clientY
    }
  })
  canvas.on('mouse:up', opt => { // 鼠标松开时触发
    canvas.setViewportTransform(canvas.viewportTransform) // 设置此画布实例的视口转换选中状态画布框选样式
```

自定义边和控制角样式
```
    canvas.isDragging = false // 关闭移动状态24
  })25
const rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 200,
    height: 100,
    fill: 'red'
  })
// 元素禁止选中
```
rect.selectable = false
// 选择三角形空白位置的时候无法选中
rect.perPixelTargetFind = true
// 只选择完全包含在拖动选择矩形中的形状
canvas.selectionFullyContained = true
```
canvas.selection = true // 画布是否可选中。默认 true ； false 不可选中
canvas.selectionColor = 'rgba(106, 101, 216, 0.3)' // 画布鼠标框选时的背景色
canvas.selectionBorderColor = "#1d2786" // 画布鼠标框选时的边框颜色
canvas.selectionLineWidth = 6 // 画布鼠标框选时的边框厚度
canvas.selectionDashArray = [30, 4, 10] // 画布鼠标框选时边框虚线规则
canvas.selectionFullyContained = true // 只选择完全包含在拖动选择矩形中的形状
// 圆形1元素移动时的样式

  const circle = new fabric.Circle({2
    radius: 30,3
    fill: '#f55',4
    top: 70,5
    left: 706
  })7
circle.set({9
  borderColor: 'red', // 边框颜色10
  cornerColor: 'green', // 控制角颜色11
  cornerSize: 10, // 控制角大小12
  transparentCorners: false, // 控制角填充色不透明13
  // transparentCorners: true // 控制角填充色透明14
  selectionBackgroundColor: 'orange' // 选中后，背景色变橙色15
})16
circle.hasBorders = false // 取消边框18
circle.hasControls = false // 禁止控制角19
canvas.hoverCursor = 'wait' // 设置等待指针20
```
canvas.add(circle)22
```
canvas.setActiveObject(circle) // 选中圆24
 function animate(e, dir) {
    if (e.target) {
      fabric.util.animate({
        startValue: e.target.get('angle'),
        endValue: e.target.get('angle') + (dir ? 10 : -10),
        duration: 1
      })
      fabric.util.animate({
        startValue: e.target.get('scaleX'),
        endValue: e.target.get('scaleX') + (dir ? 0.2 : -0.2),
        duration: 100,
        onChange: function(value) {

          e.target.scale(value)13
          canvas.renderAll()14
        },15
        onComplete: function() {16
          e.target.setCoords()17
        }18
      })19
    }20
  }21
  canvas.on('mouse:down', function(e) { animate(e, 1) })22
  canvas.on('mouse:up', function(e) { animate(e, 0) })23
```
序列化
```
// 输出 json
JSON.stringify(canvas)
canvas.toJSON()
canvas.toObject()
// 输出 png （ base64 版）可能会打断  canvas 的渲染
canvas.toDataURL('png')
canvas.requestRenderAll()
// 输出  SVG
canvas.toSVG()
```
反序列化
```
const str = '{"version":"4.6.0","objects":
[{"type":"rect","version":"4.6.0","originX":"left","originY":"top","left":50,"top":50,"
```
width":20,"height":20,"fill":"green","stroke":null,"strokeWidth":1,"strokeDashArray":nu
ll,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform"
:false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false
,"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","pa
intFirst":"fill","globalCompositeOperation":"source-
```
over","skewX":0,"skewY":0,"rx":0,"ry":0},

{"type":"circle","version":"4.6.0","originX":"left","originY":"top","left":80,"top":80,
```
"width":80,"height":80,"fill":"red","stroke":null,"strokeWidth":1,"strokeDashArray":nul
l,"strokeLineCap":"butt","strokeDashOffset":0,"strokeLineJoin":"miter","strokeUniform":
false,"strokeMiterLimit":4,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,
"opacity":1,"shadow":null,"visible":true,"backgroundColor":"","fillRule":"nonzero","pai
ntFirst":"fill","globalCompositeOperation":"source-
```
over","skewX":0,"skewY":0,"radius":40,"startAngle":0,"endAngle":6.283185307179586}],"ba
ckground":"#ddd"}'
// 初始化画布
const canvas = new fabric.Canvas('canvas')
// 反序列化
canvas.loadFromJSON(str)
```
fabric类的继承体系
StaticCanvas
    Canvas
Object
```
    Triangle
    Circle
    Ellipse
    Image
    Line
    Path
    Rect
    Polyline
        Polygon
    Group
        ActiveSelection
    Text
        IText
            Textbox
```
BaseBrush
```
    PatternBrush

    PencilBrush22
```
SprayBrush24
Point25
CircleBrush26
Gradient27
Color28
Intersection29
Pattern30
Shadow31
BaseFilter33
```
    Blur34
    Brightness35
    ColorMatrix36
    Contrast37
    Convolute38
    BlendColor39
    BlendImage40
    Gamma41
    Grayscale42
    HueRotation43
    Invert44
    Noise45
    Pixelate46
    RemoveColor47
    Resize48
    Saturation49
    Vibrance50
```

<a id="sec-8"></a>
## Fabric.js 工具库(5-自己记录)

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/Fabric.js 工具库(5-自己记录).md`

中心缩放
https://juejin.cn/post/7026941253845516324#heading-28

canvas.setWidth：设置画布宽度
canvas.setHeight：设置画布高度
Canvas.setDimensions：设置画布大小
```
// 设置画布宽度
function setWidth(width) {    canvas.setWidth(width)  }
// 设置画布高度
function setHeight(height) {    canvas.setHeight(height)  }
// 一键设置宽高
function setDimensions(width, height) {    canvas.setDimensions({      width,
height    })  }
```
控制显示隐藏8
```
 circle.visible = e.target.checked;9
 canvas.renderAll();10
// 全局
// 方式 1
let canvas = new fabric.Canvas('canvasBox', {
  centeredScaling: true // 全局所有元素都生效
})
// 方式 2
let canvas = new fabric.Canvas('canvasBox')
```
canvas.centeredScaling = true
单独设置4
```
// 矩形
let rect = new fabric.Rect({
```
  width: 100,
  height: 60,
  left: 100,
  top: 100,
  fill: 'pink',

```
  centeredScaling: true // 单个元素生效
})

let rect = new fabric.Rect({...})
```
rect.centeredScaling = true

<a id="sec-9"></a>
## Fabric.js 自由绘制圆形

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/Fabric.js 自由绘制圆形.md`

```
<!-- 工具栏  -->
<div class="toolbar">
  <select onchange="typeChange(this.options[this.options.selectedIndex].value)">
    <option value="default">默认（框选）</option>
    <option value="circle">圆形</option>
  </select>
</div>
<!-- 画布  -->
<canvas id="canvas" width="800" height="800"></canvas>
<!-- 引入 fabric.js -->
```
<script src="https://cdn.bootcdn.net/ajax/libs/fabric.js/460/fabric.js"></script> 14
```
<script> 16
let canvas = null // 画布对象 17
let currentType = 'default' // 当前操作模式（默认  || 创建圆形） 19
let downPoint = null // 按下鼠标时的坐标 20
let upPoint = null // 松开鼠标时的坐标 21
let currentCircle = null // 临时圆，创建圆的时候使用 23
// 初始化画板 25
function initCanvas() { 26
  canvas = new fabric.Canvas('canvas') 27
  canvas.on('mouse:down', canvasMouseDown)   // 鼠标在画布上按下 29
  canvas.on('mouse:move', canvasMouseMove)   // 鼠标在画布上移动 30
  canvas.on('mouse:up', canvasMouseUp)       // 鼠标在画布上松开 31
} 32
// 画布操作类型切换 34
function typeChange(opt) { 35
```
  currentType = opt 36
```
  switch(opt) { 37

    case 'default': // 默认框选模式 38
      canvas.selection = true // 允许框选39
      canvas.selectionColor = 'rgba(100, 100, 255, 0.3)' // 选框填充色：半透明的蓝色 40
      canvas.selectionBorderColor = 'rgba(255, 255, 255, 0.3)' // 选框边框颜色：半透明灰色
      canvas.skipTargetFind = false // 允许选中 42
      break 43
    case 'circle': // 创建矩形模式 44
      canvas.selectionColor = 'transparent' // 选框填充色：透明 45
      canvas.selectionBorderColor = 'transparent' // 选框边框颜色：透明度很低的黑色（看上
```
去是灰色）
```
      canvas.skipTargetFind = true // 禁止选中 47
      break 48
  } 49
} 50
// 鼠标在画布上按下 52
function canvasMouseDown(e) { 53
```
  downPoint = e.absolutePointer 54
```
  if (currentType === 'circle') {56
    // 使用  Fabric.js 提供的 api 创建圆形，此时圆形的半径是 0 57
    currentCircle = new fabric.Circle({ 58
      top: downPoint.y, 59
      left: downPoint.x, 60
      radius: 0, 61
      fill: 'transparent', 62
      stroke: 'rgba(0, 0, 0, 0.2)' 63
    }) 64
    canvas.add(currentCircle) 66
  } 67
} 68
// 鼠标在画布上移动 70
function canvasMouseMove(e) { 71
  if (currentType === 'circle' && currentCircle) { 72
    const currentPoint = e.absolutePointer 73
    // 半径：用短边来计算圆形的直径，最后除以 2 ，得到圆形的半径 75

    let radius = Math.min(Math.abs(downPoint.x - currentPoint.x), Math.abs(downPoint.y
```
- currentPoint.y)) / 2
```
    // 计算圆形的 top 和 left 坐标位置 77
    let top = currentPoint.y > downPoint.y ? downPoint.y : downPoint.y - radius * 2 78
    let left = currentPoint.x > downPoint.x ? downPoint.x :  downPoint.x - radius * 2 79
    // 分别设置圆形的半径、 top 和 left 81
    currentCircle.set('radius', radius) 82
    currentCircle.set('top', top)83
    currentCircle.set('left', left) 84
    canvas.requestRenderAll() 86
  } 87
} 88
// 鼠标在画布上松开 90
function canvasMouseUp(e) { 91
```
  upPoint = e.absolutePointer 92
```
  if (currentType === 'circle') {94
    // 如果鼠标点击和松开是在同一个坐标，那就不会创建圆形（其实是把刚创建半径为 0 的圆形删掉） 95
    if (JSON.stringify(downPoint) === JSON.stringify(upPoint)) { 96
      canvas.remove(currentCircle) 97
    } else { 98
      if (currentCircle) { 99
        // 创建圆形（其实是把圆形边框的颜色改成  #000 100
        currentCircle.set('stroke', '#000') 101
      } 102
    } 103
    // 完成以上操作后，临时的圆形清空掉。 104
    currentCircle = null 105
  } 106
} 107
// 页面加载的生命周期，在此执行  初始化画布  的操作 109
window.onload = function() { 110
```
  initCanvas() 111
```
} 112
</script> 113
----------------------------------- 114
```

© 著作权归作者所有：来自 51CTO 博客作者德育处主任的原创作品，请联系作者获取转载授权，否则将追究法
律责任
Fabric.js 自由绘制圆形 116
https://blog.51cto.com/u_14693205/5487651117

<a id="sec-10"></a>
## fabric.js和高级画板

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/fabric.js和高级画板.md`

2023/1/2 19:29:26
本文介绍fabric.js框架使用，以及使用fabricjs打造一个高级画板程序.
（文末附：画板GitHub地址&fabric.js使用秘籍）
功能截图如下：

fabric.js和高级画板
高级画板功能介绍
全局绘制颜色选择
护眼模式、网格模式切换
自由绘制
画箭头
画直线
画虚线
画圆/椭圆/矩形/直角三角形/普通三角形/等边三角形文字输入图片展示及相关移动、缩放等操作删除功能

动态效果图：

fabric.js是什么
fabric.js是可以简化canvas编写的js库，提供canvas缺少的对象模型，包含动画、数据序列号和反序列化的等高级功能的js库，开源项目，在GitHub有很多人贡献。
fabric.js优缺点
优点：fabric提供超好的画布能力.
缺点：api超级烂，没有相应的demo代码，上手难度较大.

对象
fabric.Circle 圆
fabric.Ellipse 椭圆
fabric.Line 直线
fabric.Polygon
fabric.Polyline
fabric.js介绍
fabric.js使用笔记

fabric.Rect 矩形
fabric.Triangle 三角形

方法
add(object) 添加
insertAt(object,index) 添加
remove(object) 移除
forEachObject 循环遍历
getObjects() 获取所有对象
item(int) 获取子项
isEmpty() 判断是否空画板
size() 画板元素个数
contains(object) 查询是否包含某个元素
fabric.util.cos
fabric.util.sin
fabric.util.drawDashedLine 绘制虚线
getWidth() setWidth()
getHeight()
clear() 清空
renderAll() 重绘
requestRenderAll() 请求重新渲染
rendercanvas() 重绘画板
getCenter().top/left 获取中心坐标
toDatalessJSON() 画板信息序列化成最小的json
toJSON() 画板信息序列化成json
moveTo(object,index) 移动
dispose() 释放
setCursor() 设置手势图标
getSelectionContext()获取选中的context
getSelectionElement()获取选中的元素
getActiveObject() 获取选中的对象
getActiveObjects() 获取选中的多个对象
discardActiveObject()取消当前选中对象
isType() 图片的类型
setColor(color) = canvas.set("full","");
rotate() 设置旋转角度
setCoords() 设置坐标

事件
object:added
object:removed
object:modified
object:rotating
object:scaling
object:moving
object:selected 这个方法v2已经废弃，使用selection:created替代，多选不会触发
before:selection:cleared
selection:cleared
selection:updated
selection:created
path:created
mouse:down
mouse:move
mouse:up
mouse:over
mouse:out
mouse:dblclick

常用属性
```
canvas.isDrawingMode = true; 可以自由绘制
canvas.selectable = false; 控件不能被选择，不会被操作
canvas.selection = true; 画板显示选中
canvas.skipTargetFind = true; 整个画板元素不能被选中
```
canvas.freeDrawingBrush.color = "#E34F51" 设置自由绘画笔的颜色
freeDrawingBrush.width 自由绘笔触宽度

IText的方法
selectAll() 选择全部
getSelectedText() 获取选中的文本
exitEditing() 退出编辑模式

绘制直线

绘制虚线
在绘制直线的基础上添加属性strokeDashArray:Array
example：
strokeDashArray[a,b] =》 每隔a个像素空b个像素。

图片去掉选中边框和旋转，且只能移动，不可操作
```
oImg.hasControls = false; 只能移动不能（编辑）操作
oImg.hasBorders = false; 去掉边框，可以正常操作
hasRotatingPoint = false; 不能被旋转
```
hasRotatingPoint 控制旋转点不可见

简易画板程序GitHub地址：
fabric.js使用秘籍：

```
var line = new fabric.Line([10, 10, 100, 100], {fill: 'green',stroke: 'green',    // 笔
触颜色 strokeWidth: 2,// 笔触宽度
});
canvas.add(line);
var line = new fabric.Line([10, 10, 100, 100], {
```
fill: 'green',
stroke: 'green',
```
strokeDashArray:[3,1]
});
canvas.add(line);
fabric.Image.fromURL("300.jpg", function (oImg) {canvas.add(oImg);oImg.hasControls =
oImg.hasBorders = false;
});2
```
示例和源码
https://github.com/vipstone/drawingboard
https://github.com/vipstone/drawingboard/blob/master/fabricjs%E4%B
D%BF%E7%94%A8%E7%AC%94%E8%AE%B0.md

1、Textbox调整大小（fontSize）导致光标和字体不对应的bug（通常是在canvas.setZoom(>1)设置之
后）？
解决方案：不要使用fontSize调整字体，使用scaleX、scaleY来调整字体大小，示例如下：

textbox.scaleX = 0.5;textbox.scaleY = 0.5

2、如何开启元素多选？
解决方案：canvas.selection = true; // 开启多选常用问题处理

<a id="sec-11"></a>
## fabric库 对齐的8种实现 && 辅助线的实现

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/fabric库 对齐的8种实现 && 辅助线的实现.md`

凡是经历，皆为过往
6 人赞同了该文章
IT行业日本发展不错，可以学一下日语想知道自己真正的日语水平吗？已失效
效果

代码
fabric库 对齐的8种实现 && 辅助线的实现
朱昆鹏
前言
这两天公司业务需要这个canvas库，但是中文文档很少，fabricjs官网但是需求还是要写的，开始整吧我找的，更多fabric中文文档内容
fabric 添加 辅助线
```
/**
 * @ 说明  给 fabirc 中的元素加入辅助线（网上资料，修改使用）

 * @param {canvas} 参数说明：需要传入  new fabric.Canvas() 的那个对象3
 * @host
 * @host
```
https://my.oschina.net/xmqywx/blog/1941539
```
 * @time 2019.6.12
*/
export const initAligningGuidelines = canvas => {
    var ctx = canvas.getSelectionContext(), // getSelectionContext 获取选择上下文
        aligningLineOffset = 5, // 对齐线条偏移
        aligningLineMargin = 4, // 对齐线边距
        aligningLineWidth = 1, // 对齐线条宽度
        aligningLineColor = '#666666', // 颜色
        viewportTransform, // 视图端口转换
        zoom = 1;
    // 画垂直线
    function drawVerticalLine(coords) {
        drawLine(
            coords.x + 0.5,
            coords.y1 > coords.y2 ? coords.y2 : coords.y1,
            coords.x + 0.5,
            coords.y2 > coords.y1 ? coords.y2 : coords.y1);
    }
    // 画水平线
    function drawHorizontalLine(coords) {
        drawLine(
            coords.x1 > coords.x2 ? coords.x2 : coords.x1,
            coords.y + 0.5,
            coords.x2 > coords.x1 ? coords.x2 : coords.x1,
            coords.y + 0.5);
    }
    // 画线
    function drawLine(x1, y1, x2, y2) {
        ctx.save();
        ctx.lineWidth = aligningLineWidth;
        ctx.strokeStyle = aligningLineColor;
        ctx.beginPath();

        ctx.moveTo(((x1+viewportTransform[4])*zoom), ((y1+viewportTransform[5])*zoom));41
        ctx.lineTo(((x2+viewportTransform[4])*zoom), ((y2+viewportTransform[5])*zoom));42
        ctx.stroke();43
        ctx.restore();44
    }45
    // 范围47
    function isInRange(value1, value2) {48
        value1 = Math.round(value1);49
        value2 = Math.round(value2);50
        for (var i = value1 - aligningLineMargin, len = value1 + aligningLineMargin; i
<= len; i++) {
            if (i === value2) {52
                return true;53
            }54
        }55
        return false;56
    }57
    var verticalLines = [],59
        horizontalLines = [];60
    // 移动62
    canvas.on('mouse:down', function () {63
        viewportTransform = canvas.viewportTransform;64
        zoom = canvas.getZoom();65
    });66
    // 对象移动事件（移动到某个点才具有辅助线的功能）68
    canvas.on('object:moving', function(e) {69
        var activeObject = e.target,71
            canvasObjects = canvas.getObjects(),72
            activeObjectCenter = activeObject.getCenterPoint(),73
            activeObjectLeft = activeObjectCenter.x,74
            activeObjectTop = activeObjectCenter.y,75
            activeObjectBoundingRect = activeObject.getBoundingRect(),76
            activeObjectHeight = activeObjectBoundingRect.height /
viewportTransform[3],
            activeObjectWidth = activeObjectBoundingRect.width / viewportTransform[0],78

            horizontalInTheRange = false,79
            verticalInTheRange = false,80
            transform = canvas._currentTransform;81
        if (!transform) return;83
        // It should be trivial to DRY this up by encapsulating (repeating) creation
```
of x1, x2, y1, and y2 into functions,
        // but we're not doing it here for perf. reasons -- as this a function that's
invoked on every mouse move
```
        for (var i = canvasObjects.length; i--; ) {88
            if (canvasObjects[i] === activeObject) continue;90
            var objectCenter = canvasObjects[i].getCenterPoint(),92
                objectLeft = objectCenter.x,93
                objectTop = objectCenter.y,94
                objectBoundingRect = canvasObjects[i].getBoundingRect(),95
                objectHeight = objectBoundingRect.height / viewportTransform[3],96
                objectWidth = objectBoundingRect.width / viewportTransform[0];97
            // snap by the horizontal center line99
            if (isInRange(objectLeft, activeObjectLeft)) {100
                verticalInTheRange = true;101
                verticalLines.push({102
                    x: objectLeft,103
                    y1: (objectTop < activeObjectTop)104
                        ? (objectTop - objectHeight / 2 - aligningLineOffset)105
                        : (objectTop + objectHeight / 2 + aligningLineOffset),106
                    y2: (activeObjectTop > objectTop)107
                        ? (activeObjectTop + activeObjectHeight / 2 +
```
aligningLineOffset)
                        : (activeObjectTop - activeObjectHeight / 2 -
aligningLineOffset)
```
                });110
                activeObject.setPositionByOrigin(new fabric.Point(objectLeft,
activeObjectTop), 'center', 'center');
            }112
            // snap by the left edge114

            if (isInRange(objectLeft - objectWidth / 2, activeObjectLeft -
activeObjectWidth / 2)) {
                verticalInTheRange = true;116
                verticalLines.push({117
                    x: objectLeft - objectWidth / 2,118
                    y1: (objectTop < activeObjectTop)119
                        ? (objectTop - objectHeight / 2 - aligningLineOffset)120
                        : (objectTop + objectHeight / 2 + aligningLineOffset),121
                    y2: (activeObjectTop > objectTop)122
                        ? (activeObjectTop + activeObjectHeight / 2 +
```
aligningLineOffset)
                        : (activeObjectTop - activeObjectHeight / 2 -
aligningLineOffset)
```
                });125
                activeObject.setPositionByOrigin(new fabric.Point(objectLeft -
objectWidth / 2 + activeObjectWidth / 2, activeObjectTop), 'center', 'center');
            }127
            // snap by the right edge129
            if (isInRange(objectLeft + objectWidth / 2, activeObjectLeft +
activeObjectWidth / 2)) {
                verticalInTheRange = true;131
                verticalLines.push({132
                    x: objectLeft + objectWidth / 2,133
                    y1: (objectTop < activeObjectTop)134
                        ? (objectTop - objectHeight / 2 - aligningLineOffset)135
                        : (objectTop + objectHeight / 2 + aligningLineOffset),136
                    y2: (activeObjectTop > objectTop)137
                        ? (activeObjectTop + activeObjectHeight / 2 +
```
aligningLineOffset)
                        : (activeObjectTop - activeObjectHeight / 2 -
aligningLineOffset)
```
                });140
                activeObject.setPositionByOrigin(new fabric.Point(objectLeft +
objectWidth / 2 - activeObjectWidth / 2, activeObjectTop), 'center', 'center');
            }142
            // snap by the vertical center line144
            if (isInRange(objectTop, activeObjectTop)) {145
                horizontalInTheRange = true;146
                horizontalLines.push({147
                    y: objectTop,148

                    x1: (objectLeft < activeObjectLeft)149
                        ? (objectLeft - objectWidth / 2 - aligningLineOffset)150
                        : (objectLeft + objectWidth / 2 + aligningLineOffset),151
                    x2: (activeObjectLeft > objectLeft)152
                        ? (activeObjectLeft + activeObjectWidth / 2 +
```
aligningLineOffset)
                        : (activeObjectLeft - activeObjectWidth / 2 -
aligningLineOffset)
```
                });155
                activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft,
objectTop), 'center', 'center');
            }157
            // snap by the top edge159
            if (isInRange(objectTop - objectHeight / 2, activeObjectTop -
activeObjectHeight / 2)) {
                horizontalInTheRange = true;161
                horizontalLines.push({162
                    y: objectTop - objectHeight / 2,163
                    x1: (objectLeft < activeObjectLeft)164
                        ? (objectLeft - objectWidth / 2 - aligningLineOffset)165
                        : (objectLeft + objectWidth / 2 + aligningLineOffset),166
                    x2: (activeObjectLeft > objectLeft)167
                        ? (activeObjectLeft + activeObjectWidth / 2 +
```
aligningLineOffset)
                        : (activeObjectLeft - activeObjectWidth / 2 -
aligningLineOffset)
```
                });170
                activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft,
objectTop - objectHeight / 2 + activeObjectHeight / 2), 'center', 'center');
            }172
            // snap by the bottom edge174
            if (isInRange(objectTop + objectHeight / 2, activeObjectTop +
activeObjectHeight / 2)) {
                horizontalInTheRange = true;176
                horizontalLines.push({177
                    y: objectTop + objectHeight / 2,178
                    x1: (objectLeft < activeObjectLeft)179
                        ? (objectLeft - objectWidth / 2 - aligningLineOffset)180
                        : (objectLeft + objectWidth / 2 + aligningLineOffset),181
                    x2: (activeObjectLeft > objectLeft)182

                        ? (activeObjectLeft + activeObjectWidth / 2 +
```
aligningLineOffset)
                        : (activeObjectLeft - activeObjectWidth / 2 -
aligningLineOffset)
```
                });185
                activeObject.setPositionByOrigin(new fabric.Point(activeObjectLeft,
objectTop + objectHeight / 2 - activeObjectHeight / 2), 'center', 'center');
            }187
        }188
        if (!horizontalInTheRange) {190
            horizontalLines.length = 0;191
        }192
        if (!verticalInTheRange) {194
            verticalLines.length = 0;195
        }196
    });197
    // 结束绘画事件199
    canvas.on('before:render', function() {200
        canvas.clearContext(canvas.contextTop);201
    });202
    // 开始绘画事件（也就是图形开始变化）204
    canvas.on('after:render', function() {205
        for (var i = verticalLines.length; i--; ) {206
            drawVerticalLine(verticalLines[i]);207
        }208
        for (var i = horizontalLines.length; i--; ) {209
            drawHorizontalLine(horizontalLines[i]);210
        }211
        verticalLines.length = horizontalLines.length = 0;213
    });214
    canvas.on('mouse:up', function() {216
        verticalLines.length = horizontalLines.length = 0;217
        canvas.renderAll();218
    });219
```

效果

代码
}220
fabric 对齐的8种实现
```
/**1
 * @ 说明  用于对齐  fabrice 元素（适用于 v1.7*版本的 fabric.js 库）2
 * 3
 * @param {canvas} 参数说明：需要传入  new fabric.Canvas() 的那个对象4
 * @param {alignparam} 参数说明：5
 *  @param top 上对齐（默认值，已实现）6
 *  @param left 左对齐（已实现）7
 *  @param botton 底对齐（已实现）8
 *  @param right 右对齐（已实现）9
 *  @param horizontalC 水平居中对齐（已实现）10
 *  @param verticalC 垂直居中对齐（已实现）11
 *  @param horizontalA 水平平均分布（已实现）12
 *  @param verticalA 垂直平均分布（已实现）13
 *14
 * @author zkp15
 * @time 2019.6.13 - 2019.6.1416
*/17
export const fabricItemAlign = (canvas, alignparam = 'top') => {18
  // 实现方案一：通过计算，对顶掉偏差（这里框架内部计算还是有很大的问题的 , 不可控）20

  // 规定术语说明，选中的好几个元素，最外层的那一个大的元素称之为  Z21
  // canvas._activeGroup 表示  Z 也就是选中之后的最大的一层22
  // canvas._activeGroup._objects 为选中的所有元素23
  // v3.* 兼容性方案（下面代码写的是 v1.7* 版本的方案）25
  // ① ： canvas._activeGroup._objects 换为  canvas.getActiveObjects()26
  // ② ： canvas._activeGroup 换为  canvas._activeObject27
  // 顶对齐29
  if (alignparam === 'top') {30
    // 是以选中框  为相对位置进行计算的（顶对齐就是  top 为  0 ，左对齐就是  left 0 ）31
    // 下面就是计算  剩余一个轴  相对于  选择框的相对位置32
    canvas._activeGroup._objects.forEach(item => {33
      // 顶对齐算法： top 为零表示  依据选中框顶部对齐，  left 为  选中点每一项的34
      item.set({35
        top: 0 - canvas._activeGroup.height * 0.5,36
        left: (item.aCoords.tl.x - canvas._activeGroup.aCoords.tl.x) -
```
canvas._activeGroup.width * 0.5
```
      })38
    })39
  }40
  // 左对齐42
  if (alignparam === 'left') {43
    // 是以选中框  为相对位置进行计算的（顶对齐就是  top 为  0 ，左对齐就是  left 0 ）44
    // 下面就是计算  剩余一个轴  相对于  选择框的相对位置45
    canvas._activeGroup._objects.forEach(item => {46
      item.set({47
        top: (item.aCoords.tl.y - canvas._activeGroup.aCoords.tl.y) -
```
canvas._activeGroup.height * 0.5,
```
        left: 0 - canvas._activeGroup.width * 0.549
      })50
    })51
  }52
  // 右对齐54
  if (alignparam === 'right') {55
    // top 公式：与  左对齐一致56
    // left 公式：坐标要以  Z 的宽度为计算，并减去元素本身的宽度57
    canvas._activeGroup._objects.forEach(item => {58

      console.log(canvas._activeGroup)59
      item.set({60
        top: (item.aCoords.tl.y - canvas._activeGroup.aCoords.tl.y) -
```
canvas._activeGroup.height * 0.5,
        left: (canvas._activeGroup.width - item.width) - canvas._activeGroup.width *
0.5
```
      })63
    })64
  }65
  // 底对齐67
  if (alignparam === 'bottom') {68
    // top 公式：与  左对齐一致69
    // left 公式：与  上对齐一致70
    canvas._activeGroup._objects.forEach(item => {71
      // 顶对齐算法： top 为零表示  依据选中框顶部对齐，  left 为  选中点每一项的72
      item.set({73
        top: (canvas._activeGroup.height - item.height) - canvas._activeGroup.height *
```
0.5,
        left: (item.aCoords.tl.x - canvas._activeGroup.aCoords.tl.x) -
canvas._activeGroup.width * 0.5
```
      })76
    })77
  }78
  // 水平居中对齐80
  if (alignparam === 'horizontalC') {81
    // top 公式： (Z.heiht - 每一项的元素的 .height) 其实就是这个元素相对于  Z 中线的一个居中位
```
置（和 CSS 定位居中对齐一个原理）
```
    // left 公式：保持位置相对不动83
    canvas._activeGroup._objects.forEach(item => {84
      item.set({85
        top: (canvas._activeGroup.height - item.height) * 0.5 -
```
canvas._activeGroup.height * 0.5,
        left: (item.aCoords.tl.x - canvas._activeGroup.aCoords.tl.x) -
canvas._activeGroup.width * 0.5
```
      })88
    })89
  }90
  // 垂直居中对齐92
  if (alignparam === 'verticalC') {93

    // top 公式：保持位置相对不动94
    // left 公式： (Z.heiht - 每一项的元素的 .height)95
    canvas._activeGroup._objects.forEach(item => {96
      item.set({97
        top: (item.aCoords.tl.y - canvas._activeGroup.aCoords.tl.y) -
```
canvas._activeGroup.height * 0.5,
        left: (canvas._activeGroup.width - item.width) * 0.5 -
canvas._activeGroup.width * 0.5
```
      })100
    })101
  }102
  // 水平平均分布104
  if (alignparam === 'horizontalA') {105
    // 前置：需要按照  canvas._activeGroup._objects 每一项的  aCoords.tl.x 进行从小到大排列，
```
因为开始结束位置可能不一样
```
    // 注意： sort 方法排序改变的是原有的数组不生成副本108
    canvas._activeGroup._objects.sort( (a, b) => {109
      return a.aCoords.tl.x - b.aCoords.tl.x;110
    })111
    // 水平等差间距：113
    let count = 0;114
    canvas._activeGroup._objects.forEach(item => { count += item.width })115
    let es = (canvas._activeGroup.width - count) /
```
(canvas._activeGroup._objects.length - 1)
```
    let sefNum = 0; // 记录中间过程值118
    let sefNumOne = true; // 判定119
    // console.log(' 水平等差间距是： ', es)121
    for (let i = 0, len = canvas._activeGroup._objects.length; i < len; i++) {123
      // 等分排列  开始和结尾不变124
      if (i !== 0 && i !== len - 1) {125
        if (sefNumOne) {126
          // 第二个的计算规则是：第一个的长度  + 等差间距127
          sefNum += (canvas._activeGroup._objects[i-1].width + es)128
          sefNumOne = false129
        } else {130

          // 其他项的计算规则是： sefNum （这个相当于前一个的  left 值）  + 前一个的宽度  + 等差间距
          sefNum += es + canvas._activeGroup._objects[i-1].width;132
                }133
                console.log('sefNum', sefNum)135
        // top 规则：保持相对位置不变137
        // left 规则：采用  sefNum 的值138
        canvas._activeGroup._objects[i].set({139
          top: (canvas._activeGroup._objects[i].aCoords.tl.y -
```
canvas._activeGroup.aCoords.tl.y) - canvas._activeGroup.height * 0.5,
```
          left: sefNum - canvas._activeGroup.width * 0.5141
        })142
      }143
    }144
  }146
  // 垂直平均分布148
  if (alignparam === 'verticalA') {149
    // 前置：需要按照  canvas._activeGroup._objects 每一项的  aCoords.tl.x 进行从小到大排列，
```
因为开始结束位置可能不一样
```
    // 注意： sort 方法排序改变的是原有的数组不生成副本152
    canvas._activeGroup._objects.sort( (a, b) => {153
      return a.aCoords.tl.y - b.aCoords.tl.y;154
    })155
    // 垂直等差间距：157
    let count = 0;158
    canvas._activeGroup._objects.forEach(item => { count += item.height })159
    let es = (canvas._activeGroup.height - count) /
```
(canvas._activeGroup._objects.length - 1)
```
    let sefNum = 0; // 记录中间过程值162
    let sefNumOne = true; // 判定163
    // console.log(' 垂直等差间距： ', es)165
    for (let i = 0, len = canvas._activeGroup._objects.length; i < len; i++) {167

      // 等分排列  开始和结尾不变168
      if (i !== 0 && i !== len - 1) {169
        if (sefNumOne) {170
          // 第二个的计算规则是：第一个的高度  + 宽度等差间距171
          sefNum += (canvas._activeGroup._objects[i-1].height + es)172
          sefNumOne = false173
        } else {174
          // 其他项的计算规则是： sefNum （这个相当于前一个的  top 值）  + 前一个的高度  + 宽度等差间距
          sefNum += es + canvas._activeGroup._objects[i-1].height;176
        }177
        // top 规则：采用  sefNum 的值179
        // left 规则：保持相对位置不变180
        canvas._activeGroup._objects[i].set({181
          top: sefNum - canvas._activeGroup.height * 0.5,182
          left: (canvas._activeGroup._objects[i].aCoords.tl.x -
```
canvas._activeGroup.aCoords.tl.x) - canvas._activeGroup.width * 0.5
```
        })184
      }185
    }186
    }188
    // 其他对齐规则拓展  ......190
  canvas.renderAll(); // 重新渲染192
}193
```
后记
开发了两天，高中数学知识用到了不少 qwq，但是时间紧迫，因为两天不只有这些逻辑，还有其他的逻辑，上面内容只是抽离出来，可以分享的，但这样我想还是有bug的，希望大家如果有需要，或者有bug的修改方案，可以给我留言哦，感激不尽

<a id="sec-12"></a>
## 使用fabric.js绘制带有二次曲线的双线

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/使用fabric.js绘制带有二次曲线的双线.md`

```
var canvas = this.__canvas = new fabric.Canvas('c'); 1
    fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center'; 3
    canvas.on({ 7
    'object:selected': onObjectSelected, 9
    'object:moving': onObjectMoving, 11
    'before:selection:cleared': onBeforeSelectionCleared, 13
    'after:render': rerender 15
    }); 17
    (function drawQuadratic() { 21
    var line = new fabric.Path('M 65 0 Q 100, 100, 200, 0', { fill: '', stroke:
'black', strokeWidth: 6 });
    line.path[0][1] = 100; 29
    line.path[0][2] = 100; 31
    line.path[1][1] = 200; 35

    line.path[1][2] = 200; 37
    line.path[1][3] = 300; 41
    line.path[1][4] = 100; 43
    line.selectable = false; 47
    canvas.add(line); 49
    var p1 = makeCurvePoint(200, 200, null, line, null) 53
    p1.name = "p1"; 55
    canvas.add(p1); 57
    var p0 = makeCurveCircle(100, 100, line, p1, null); 61
    p0.name = "p0"; 63
    canvas.add(p0); 65
    var p2 = makeCurveCircle(300, 100, null, p1, line); 69
    p2.name = "p2"; 71
    canvas.add(p2); 73

    })(); 77
    function makeCurveCircle(left, top, line1, line2, line3) { 81
    var c = new fabric.Circle({ 83
     left: left, 85
     top: top, 87
     strokeWidth: 5, 89
     radius: 12, 91
     fill: '#fff', 93
     stroke: '#666' 95
    }); 97
    c.hasBorders = c.hasControls = false; 101
    c.line1 = line1; 105
    c.line2 = line2; 107
    c.line3 = line3; 109
    return c; 113
    } 115

    function makeCurvePoint(left, top, line1, line2, line3) { 119
    var c = new fabric.Circle({ 121
     left: left, 123
     top: top, 125
     strokeWidth: 8, 127
     radius: 14, 129
     fill: '#fff', 131
     stroke: '#666' 133
    }); 135
    c.hasBorders = c.hasControls = false; 139
    c.line1 = line1; 143
    c.line2 = line2; 145
    c.line3 = line3; 147
    return c; 151
    } 153

    function onObjectSelected(e) { 157
    var activeObject = e.target; 159
    if (activeObject.name == "p0" || activeObject.name == "p2") { 163
     activeObject.line2.animate('opacity', '1', { 165
     duration: 200, 167
     onChange: canvas.renderAll.bind(canvas), 169
     }); 171
     activeObject.line2.selectable = true; 173
    } 175
    } 177
    function onBeforeSelectionCleared(e) { 181
    var activeObject = e.target; 183
    if (activeObject.name == "p0" || activeObject.name == "p2") { 185
     activeObject.line2.animate('opacity', '0', { 187
     duration: 200, 189
     onChange: canvas.renderAll.bind(canvas), 191
     }); 193

     activeObject.line2.selectable = false; 195
    } 197
    else if (activeObject.name == "p1") { 199
     activeObject.animate('opacity', '0', { 201
     duration: 200, 203
     onChange: canvas.renderAll.bind(canvas), 205
     }); 207
     activeObject.selectable = false; 209
    } 211
    } 213
    function rerender() { 215
    var line = canvas.getObjects()[0]; 217
    line.stroke = 'white'; 219
    line.strokeWidth = 4; 221
    line.render(canvas.contextContainer); 223
    line.stroke = 'black'; 225
    line.strokeWidth = 6; 227
    } 229
    function onObjectMoving(e) { 231
    if (e.target.name == "p0" || e.target.name == "p2") { 233

     var p = e.target; 235
     if (p.line1) { 239
     p.line1.path[0][1] = p.left; 241
     p.line1.path[0][2] = p.top; 243
     } 245
     else if (p.line3) { 247
     p.line3.path[1][3] = p.left; 249
     p.line3.path[1][4] = p.top; 251
     } 253
    } 255
    else if (e.target.name == "p1") { 257
     var p = e.target; 259
     if (p.line2) { 263
     p.line2.path[1][1] = p.left; 265
     p.line2.path[1][2] = p.top; 267
     } 269
    } 271
    else if (e.target.name == "p0" || e.target.name == "p2") { 273

     var p = e.target; 275
     p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top }); 279
     p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top }); 281
     p.line3 && p.line3.set({ 'x1': p.left, 'y1': p.top }); 283
     p.line4 && p.line4.set({ 'x1': p.left, 'y1': p.top }); 285
    } 287
    }289
```

<a id="sec-13"></a>
## 公章圆弧字fabric.js画法

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/公章圆弧字fabric.js画法.md`

```
<script type="text/javascript">var url=" 网络图片位置 ";
    $(document).ready(function() {
       initCavans(url);
    });
    // 初始化 canvans 及背景
    var canvas;
    function initCavans(pngPath){
        canvas = this.__canvas = new fabric.Canvas('cer', {
                imageSmoothingEnabled: false,
                enableRetinaScaling: false,
                fireRightClick: false,
                stopContextMenu: false,
        });
        fabric.Object.prototype.transparentCorners = false;
        fabric.Image.fromURL(url,function(oImg){
                    // 放图片
                    oImg.setControlsVisibility({
                            mt: false, // middle top disable
                            mb: false, // midle bottom
                            ml: false, // middle left
                            mr: false // I think you get it
                        });
                    oImg.set({
                            width:oImg.width,
                            height:oImg.height,
                            originX: 'center',
                            originY: 'center'
                        });
                // 画轮廓
                  var circle = new fabric.Circle({
                        left:200,
                        top:115,
                        radius: 70,
                        stroke: 'red',
                        strokeWidth: 2,
                        fill: 'transparent',
                        originX: 'center',
                        originY: 'center'
                 });
                 // 画部门

                 var department = new fabric.Text(' 月老民政局 ',{
                        left:230,
                        top:150,
                        fontFamily:'SumSun',
                        fontSize: 14,
                        fill:'red',
                        angle:-36,
                        originX: 'center',
                        originY: 'center'
                     });
                // 算 5 角星，画五角星
                var str;
                var x = Math.sin(0);
                var y = Math.cos(0);
                var dig = Math.PI / 5 * 4;
                for (var i = 0; i < 5; i++) {// 画五角星的五条边
                    var x = Math.sin(i * dig);
                    var y = Math.cos(i * dig);
                     str+=(x * 15)+"\n"+(y * 15)+"\n";
                }
                console.log(str);
                var path = new fabric.Path('M 0 15 L 8.816778784387099
```
-12.13525491562421 L -14.265847744427305 4.635254915624208 L 14.265847744427303
```
4.635254915624216 L -8.816778784387092 -12.135254915624214 z');
                 path.set({
                    left:200,
                    top:115,
                    fill:'red',
                    originX: 'center',
                    originY: 'center'
                });
                var group = new fabric.Group([ oImg, circle, department, path], {
                      left: 100,
                      top: 100,
                      selectable: false,
                      angle: 0
                    });
                 canvas.add(group);
               // 写机构
                var agency =" 北京我大森林婚庆公司 ";
                var count=agency.length;
        var angle = 3*Math.PI/(3*(count - 1));
        var agencyArr = agency.split("");
        var agencyAngle;
        var agencyX=385;
        var agencyY=256;
        var agencyparams;
        if(count>0){
            for(var i = 0; i<count; i++){
                 if(i==0){
                    agencyAngle = (4 * Math.PI / 6);
                    agencyparams = {left:agencyX-(56*Math.cos(i*agencyAngle)),
```
top:agencyY-
(56*Math.sin(i*agencyAngle)),angle:-90,fontSize:16,selectable:false,borderScaleFactor:1
```
,fontFamily:'SumSun',fill:'#f00'};
                }else{

                    agencyAngle = angle;
                    agencyparams = {left:agencyX-(56*Math.cos(i*agencyAngle)),
```
top:agencyY-(56*Math.sin(i*agencyAngle)),angle:-90+
(i*angle*58),fontSize:16,selectable:false,borderScaleFactor:1,fontFamily:'SumSun',fill:
```
'#f00'};
                }
                var text = new fabric.Text(agencyArr[i],agencyparams);
                canvas.add(text);
            }
        }
                    canvas.add(text);
                }
        });
    }
    </script>2
```

<a id="sec-14"></a>
## 动画设置

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/动画设置.md`

凡是出色的Canvas库都少不了制作动画的方法，Fabric.js也不例外，它有着编写简单且功能强大的动画助手，这就是animate( )方法。
animate主要使用代码如下：
意思是设置了rect的动画是旋转到360度，onChange是动画的回调函数，可以绑定事件，那这里就是当canvas渲染完成时自动发生动画。
animate接收三个参数：
第一个参数是动画的属性，可以是任何用set( )方法设定的值；
第二个参数是发生变化的结束值（例如正方形从0度旋转到360度）；
第三个参数是设置动画的细节属性，包括动画时间，回调函数，缓动效果，等等。
我们现在对动画有了基本的了解，我们先作一个简单的例子，让一个正方形旋转360度。
HTML：
JS：
Fabric.js的动画设置
```
rect.animate('angle',360,{
    onChange:canvas.renderAll.bind(canvas)
})

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fabric.js 动画方法</title>
    <script type="text/javascript" src="../fabric.js"></script>
</head>
<body>
    <canvas width="800" height="800" id="canvas"></canvas>
    <script type="text/javascript" src="./script.js"></script>
</body>
</html>
```

animate( )方法还给我们提供了相对值的办法：
例如，你想让方形相对于现在的位置向左移动100px，你可以这样写代码：
当然，方形相对于现在的角度逆时针旋转5度，你可以这样写代码：
您还可以设置动画的持续时间和缓动效果，这些需要在animate( )方法的第三个参数中设置。例如：
```
var canvas = new fabric.Canvas('canvas');
var rect = new fabric.Rect({
    top:100,
    left:100,
    height:100,
    width:100,
    fill:'red',
});
rect.set('angle',0);// 设置正方形的初始角度是 0 度
// 下边设置了动画属性，让角度旋转到 360 度
rect.animate('angle',360,{
    onChange:canvas.renderAll.bind(canvas)
})
canvas.add(rect);

t.animate('left', '+=100', { onChange: canvas.renderAll.bind(canvas) });
rect.animate('angle', '-=5', { onChange: canvas.renderAll.bind(canvas) });
rect.animate('left', 500, {
```
  onChange: canvas.renderAll.bind(canvas),
  duration: 1000,
  easing: fabric.util.ease.easeOutBounce
});

<a id="sec-15"></a>
## 如何在Fabric.js中停止或暂停动画

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/如何在Fabric.js中停止或暂停动画.md`

标签 javascript fabricjs
我正在尝试使用FabricJs停止或暂停矩形的动画。但是我试图谷歌的文档，没有太多的信息如何实现它。我将不胜感激任何帮助如何在Fabric.js中停止或暂停动画
const canvas = new fabric.Canvas('c', {
  selection: false
```
});
var hasAnimationStarted = false;
document.getElementById('button').onclick = startAnimation;
var rect = new fabric.Rect({
```
  left: 10,
  top: 10,
  fill: "#FF0000",
  stroke: "#000",
  width: 50,
  height: 50,
```
});
canvas.add(rect);
function startAnimation() {
  if (hasAnimationStarted === false) {
    hasAnimationStarted === true;
    document.getElementById('button').innerText = 'Stop Animation';
    rect.animate({
      left: 250,
    }, {
      onChange: canvas.renderAll.bind(canvas),
      duration: 6000,
      onComplete: function() {
        hasAnimationStarted === false;
        document.getElementById('button').innerText = 'Start Animation';
      },
      abort: function() {
```

最佳答案
从动画的abort方法返回真实值，它将停止动画。
演示
```
      }33
    });34
  }35
}36
<script src="
<script src="
```
https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.0.0/fabric.min.js
```
<canvas id="c" width="300" height="300" style="border: 2px solid green;"></canvas>
<button id="button">
```
  Start Animation
```
</button>
const canvas = new fabric.Canvas('c', {
```
  selection: false
```
});
let hasAnimationStarted = false;
document.getElementById('startAnim').onclick = startAnimation;
const rect = new fabric.Rect({
```
  left: 10,
  top: 10,
  fill: "#FF0000",
  stroke: "#000",
  width: 50,
  height: 50,
```
});
canvas.add(rect);
function startAnimation() {
  if (hasAnimationStarted) {
```

关于javascript - 如何在Fabric.js中停止或暂停动画，我们在Stack Overflow上找到一个类似的问题：

```
    stopAnimation();20
  } else {21
    hasAnimationStarted = true;22
    document.getElementById('startAnim').innerText = 'Stop Animation';23
    rect.animate({24
      left: 250,25
    }, {26
      onChange: canvas.requestRenderAll.bind(canvas),27
      duration: 6000,28
      onComplete: stopAnimation,29
      abort: () => !hasAnimationStarted30
    });31
  }32
}33
function stopAnimation() {35
  hasAnimationStarted = false;36
  document.getElementById('startAnim').innerText = 'Start Animation';37
}38
<script src="
<script src="
```
https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.0.0/fabric.min.js
```
<canvas id="c" width="300" height="300" style="border: 2px solid green;"></canvas>
<button id="startAnim">
```
  Start Animation
</button>
https://stackoverflow.com/questions/58699255/

<a id="sec-16"></a>
## 官方文档

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/官方文档.md`

学习demo

德育处主任的文档

绘制功能

https:// .com/fabricjs/fabric.js/blob/master/lib/aligning_guidelines.js辅助线源代码  ./aligning_guidelines.js

弧线 pull

把 echarts 引入  fabric

http://funcion_woqu.gitee.io/fabric-doc/api/#canvas
https://toscode.gitee.com/k21vin/fabricjs-demo
Api | Fabric中文文档 (gitee.io)
官网文档地址：  http://fabricjs.com/docs/github
地址：  https://github.com/fabricjs/fabric.js
Demo地址：  http://fabricjs.com/demos/
NPM 地址：  https://www.npmjs.com/package/fabric
中文文档：  https://www.wenjiangs.com/docs/fabric-js
https://www.jianshu.com/u/b2838ea33b2f
```
this.width = options.width;
          this.height = options.height
```
https://www.cnblogs.com/reround/p/11468844.htmlgithub
https://github.com/fabricjs/fabric.js/pull/1675
https://codepen.io/rolitter/pen/qBxMmvw

1、在命令行中：
2、将其引入 .vue 文件中
3、在 .vue 的单文件中的 mounted: 生命周期里开始你的 Fabric.js 之旅啦注：默认的 fabric npm 模块产生了相当大的包，如果 Fabric.js 中您有很多可能不需要的包，在这种情况下，可以在命令行中构建你自己的版本。
绘制图形
1、声明画布
2、绘制图形
3、添加图形至画布
安装 Fabric.js
npm install fabric （或 yarn add fabric ）
```
import { fabric } from 'fabric'
var canvas = new fabric.Canvas('main');
var rect = new fabric.Rect({  left:100,// 距离画布左侧的距离，单位是像素   top:100,// 距离画
布上边的距离   fill:'red',// 填充的颜色   width:30,// 方形的宽度   height:30// 方形的高度 });
canvas.add(rect);1
```

<a id="sec-17"></a>
## 无标题笔记(4)

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/无标题笔记.md`

```
// initialize fabric canvas and assign to global windows object for debug1
var canvas = window._canvas = new fabric.Canvas('c');2
//var canvas = new fabric.StaticCanvas('c');3
var path = new fabric.Path('C 50 50 100 100 150 50 C 200 100 250 50 300 100', {4
```
left: 100,5
top: 50,6
stroke: 'red',7
strokeWidth: 1,8
fill: false,9
scaleY:310
```
});11
canvas.add(path);12
var p = new fabric.Path('C 50 50 100 100 150 50 C 200 100 250 50 300 100',{15
```
  left: 200,16
  top: 60,17
  strokeWidth:2,18
  scaleY:319
```
});20
canvas.add(p);22
<script src="
<script src="
```
https://rawgithub.com/kangax/fabric.js/master/dist/fabric.js
<canvas id="c" width="600" height="600"></canvas>2

<a id="sec-18"></a>
## 本文介绍了在FabricJS中画出一条波浪线的处理方法，对大家解决问题具有一定的参考价值，需要的朋友们下面随着小编来一起学习吧！

> 来源：有道云笔记
> 原路径：`canvas/Fabric.js/本文介绍了在FabricJS中画出一条波浪线的处理方法，对大家解决问题具有一定的参考价值，需要的朋友们下面随着小编来一起学习吧！.md`

本文介绍了在FabricJS中画出一条波浪线的处理方法，对大家解决问题具有一定的参考价值，需要的朋友们下面随着小编来一起学习吧！
我正在使用

我已经用箭头端点成功创建了这个版本，但找不到任何如何创建波浪线的示例。用户可以根据需要绘制线条，因此线条中的峰值和波谷数量需要相应调整（如上图所示的短线可能有4个峰值但是线条长度的两倍会有8个峰值，不仅仅是较短线的拉伸版本。）

这是我用来绘制带有箭头端点的直线的代码。请注意，该行的起点是在mousedown上绘制的，端点是在mouseup上绘制的。
和LineWithArrow文件：
问题描述
```
 从'./ 导入 LineWithArrow LineWithArrow;   drawLineWithArrow = （ item ， points ， color ） =>
（  new LineWithArrow （ points ， { customProps ： item ，  strokeWidth ： 2 ，  stroke ：
color ， } ））   selectLine = （ item ， points ） => { switch （ item.type ） {
case'line_with_arrow' ：  return this.drawLineWithArrow （ item ， points ， colors.BLACK ） ;
case'wavy_line_with_arrow' ：返回 this.drawWavyLineWithArrow （ item ， points ） ;  // 无默认 } 返
回 null; }   let line;  let isDown;   fabricCanvas.on （ 'mouse ： down' ，（ options ） => {
isDown = true;  const pointer = fabricCanvas.getPointer （ options.e ） ;  const points =
[pointer.x ， pointer.y ， pointer.x ， pointer.y];  line = this.selectLine （ item ， points ） ;
fabricCanvas  .add （ line ）  .setActiveObject （ line ）  .renderAll （） ; } ） ;
fabricCanvas.on （ 'mouse ： move' ，（ options ） => { if （！ isDown ） return;  const pointer =
fabricCanvas.getPointer （ options.e ） ;  line.set （ {x2 ： pointer.x ， y2 ： pointer.y} ） ;
fabricCanvas.renderAll （） ; } ） ;   fabricCanvas.on （ 'mouse ： up' ，（）=> { isDown =
false;  line.setCoords （）;  fabricCanvas.setActiveObject （  line ）.renderAll （）; }）;

 从'fabric'导入{fabric};   const LineWithArrow = fabric.util.createClass （ fabric.Line ，{
 type ：'line_with_arrow'，   initialize （ element ， options ）{ options ||（ options = {}）;
 this.callSuper （'initialize'， element ， options ）;   //设置默认选项  this.set （{
hasBorders ：false，  hasControls ：false，}）; }，   _render （ ctx ）{ this.callSuper （
'_render'， ctx ）;  ctx.save （）;  const xDiff = this.x2  -  this.x1;  const yDiff =
this.y2  -  this.y1;  const angle = Math.atan2 （ yDiff ， xDiff ）;  ctx.translate
（（ this.x2  -  this.x1 ）/ 2，（ this.y2  -  this.y1 ）/ 2）;  ctx.rotate （ angle ）;
ctx.beginPath （）;  //在行前移动5px 以启动箭头，使其前面没有方形行结束（0,0）   ctx.moveTo
（5,0）;  ctx.lineTo （-5,5）;  ctx.lineTo （-5，-5）;  ctx.closePath （  ）;  ctx.fillStyle
= this.stroke;  ctx.fill （）;  ctx.restore （）; }，   toObject （）{返回
fabric.util.object.extend（ this.callSuper （'toObject'），{ customProps ：
this.customProps ，}）; }，}）;  导出默认 LineWithArrow;
```

解决方案
因为我们从两个角线画一条线，你可以在自定义类的 _render 方法中绘制波浪线。从最后我画一条线到中间，显示它与箭头相连。

DEMO

```
  var line ， isDown ， evented; var canvas = new fabric.Canvas（'canvas'，{
perPixelTargetFind ：true}）; draw （）; function selection （）{changeObjSelection
（true）; canvas.off （鼠标：向下）; canvas.off （鼠标：移动）; canvas.off （鼠标：向上）;
evented = false;} function draw （）{changeObjSelection （false）; if（！ evented ）
{canvas.on （'mouse ： down'， onMouseDown ）; canvas.on （'mouse ： move'， onMouseMove ）;
canvas.on （'mouse ： up'， onMouseUp ）; evented = true; function clearCanvas （）
{canvas.clear （）;} function changeObjSelection （ value ）{canvas.selection = value;
canvas.forEachObject （function（ obj ）{obj.selectable = value;}） canvas.requestRenderAll
（）;} function onMouseDown （ options ）{isDown = true; var pointer = canvas.getPointer
（ options.e ）; var points = [pointer.x ， pointer.y ， pointer.x ， pointer.y]; line =
selectLine （ points ）; canvas.add （ line ）;} function onMouseMove （ options ）{if（！ isDown ）
return; var pointer = canvas.getPointer （ options.e ）; line.set （{x2 ： pointer.x ， y2 ：
pointer.y}）; canvas.renderAll （）;}函数 onMouseUp （ options ）{isDown = false;
line.setCoords （）; canvas.requestRenderAll （）;} function drawLineWithArrow （ points ，
color ）{return new fabric.LineWithArrow（ points ，{strokeWidth ：2， stroke ： color ，
objectCaching ：false， selectable ：false}）} function selectLine （ points ）{return
drawLineWithArrow （点，' 黑 '）;} // 波浪线（函数（全局） {' 使用严格 '; if
（ fabric.LineWithArrow ） {fabric.warn （ 'fabric.LineWithArrow 已经定义。 ' ） ; return;}
fabric .LineWithArrow = fabric.util.createClass （ fabric.Line ， {type ： 'line_with_arrow' ，
initialize ： function （ element ， options ） {options || （ options = {} ） ; this.callSuper
（ 'initialize' ， element ， options ） ; // 设置默认选项 this.set （ {hasBorders ： false ，
hasControls ： false ， } ） ;} ， _ render ： function （ ctx ） {// this.callSuper （ '_ render' ，
ctx ） ; ctx.save （）  ; const xDiff = this.x2  -  this.x1; const yDiff = this.y2  -
this.y1; const angle = Math.atan2 （ yDiff ， xDiff ） ; ctx.trans 迟到（ xDiff / 2 ， yDiff /
2 ） ; ctx.rotate （角度） ; ctx.beginPath （） ; // 在行前移动 5px 以启动箭头，使其没有前面显示的方
线结束（ 0,0 ） ctx.moveTo （ 5,0 ） ; ctx.lineTo （ -5,5 ） ; ctx.lineTo （ -5 ， -5 ） ; ctx.closePath
（） ; ctx.fillStyle = this.stroke; ctx.fill （） ; ctx.restore （） ; var p =
this.calcLinePoints （） ; var point = this.pointOnLine （ this.point （ p.x2 ， p.y2 ），
```
this.point （ p.x1 ， p.y1 ）， 10 ） this.wavy （ this.point （ p.x1 ， p.y1 ）  ）， point ， this.point
```
（ p.x2 ， p.y2 ）， ctx ） ; ctx.stroke （） ; } ， point ： function （ x ， y ） {return {x ： x ， y ： y}; } ，
wavy ： function （ from ， to ， endPoint ， ctx ） {var cx = 0 ， cy = 0 ， fx = from.x ， fy = from.y ，
```
tx = to.x ， ty = to.y ， i = 0 ， step = 4 ， waveOffsetLength = 0 ， ang = Math.atan2 （ ty  -
fy ， tx  -  fx ）， distance = Math.sqrt （（ fx  -  tx ） * （ fx  -  tx ） + （ fy  -  ty ） * （  fy-
```
ty ）），幅度 = -10 ， f = Math.PI * 距离 / 30; for （ i; i< = distance; i + = step ）
{waveOffsetLength = Math.sin （（ i / distance ） * f ） * 幅度 ; cx = from.x + Math.cos （ ang ）
* i + Math.cos （ ang  -  Math.PI / 2 ） * waveOffsetLength; cy = from.y + Math.sin （ ang ） *

I'm using  to create a canvas for drawing specific lines and shapes. One of the lines is
```
a wavy line with an arrow similar to this:

I've successfully created a straight version of this with an arrow endpoint but can't find any
examples of how to create a wavy line. The user can draw the line as long as they want so the
number of 'peaks' and 'troughs' in the line will need to adapt accordingly (a short line like the
image above might have 4 peaks but a line twice the length would have 8 peaks, not just be a
stretched version of the shorter line).
Here is the code I'm using to draw the straight line with the arrow endpoint. Note that the
start point of the line is drawn on mousedown and the endpoint is drawn on mouseup.
```
i + Math.sin （ ang  -  Math.PI / 2 ） * waveOffsetLength; 我 > 0 ？  ctx.lineTo （ cx ， cy ）：
ctx.moveTo （ cx ， cy ） ; } ctx.lineTo （ to.x ， to.y ） ; ctx.lineTo （ endPoint.x ， endPoint.y ） ;
} ， pointOnLine ： function （ point1 ， point2 ， dist ） {var len = Math.sqrt （（（ point2.x  -
```
point1.x ） * （ point2.x  -  point1.x ）） + （（ point2.y  -  point1 。  y ） * （ point2.y  -
```
point1.y ））） ; var t = （ dist ） / len; var x3 = （（ 1-t ） * point1.x ） + （ t * point2.x ）， y3
= （（ 1-t ） * point1.y ） + （ t * point2.y ） ; 返回新的 fabric.Point （ x3 ， y3 ） ; } ， toObject ：
function （） {return fabric.util.object.extend （ this.callSuper （ 'toObject' ），
{customProps ： this.customProps ， } ） ; } ， } ） ;} ）（ typeof exports ！ =='undefined' ？ exports ：
this ） ;
  canvas {border ： 2px dotted black;}  1
 < script src =
 < script src =
```
https://rawgit.com/kangax/fabric.js/master/dist/fabric.js
FabricJS
```
import LineWithArrow from './LineWithArrow';
drawLineWithArrow = (item, points, color) => (
  new LineWithArrow(points, {
    customProps: item,
    strokeWidth: 2,

    stroke: color,7
  })8
```
)9
```
selectLine = (item, points) => {11
  switch (item.type) {12
    case 'line_with_arrow':13
      return this.drawLineWithArrow(item, points, colors.BLACK);14
    case 'wavy_line_with_arrow':16
      return this.drawWavyLineWithArrow(item, points);17
    // no default18
  }19
  return null;20
}21
let line;23
let isDown;24
fabricCanvas.on('mouse:down', (options) => {26
  isDown = true;27
  const pointer = fabricCanvas.getPointer(options.e);28
  const points = [pointer.x, pointer.y, pointer.x, pointer.y];29
  line = this.selectLine(item, points);30
```
  fabricCanvas31
```
    .add(line)32
    .setActiveObject(line)33
    .renderAll();34
});35
fabricCanvas.on('mouse:move', (options) => {37
  if (!isDown) return;38
  const pointer = fabricCanvas.getPointer(options.e);39
  line.set({ x2: pointer.x, y2: pointer.y });40
  fabricCanvas.renderAll();41
});42
fabricCanvas.on('mouse:up', () => {44
  isDown = false;45
  line.setCoords();46
```

And the LineWithArrow file:
```
  fabricCanvas.setActiveObject(line).renderAll();47
});48
import { fabric } from 'fabric';
const LineWithArrow = fabric.util.createClass(fabric.Line, {
```
  type: 'line_with_arrow',
```
  initialize(element, options) {
    options || (options = {});
    this.callSuper('initialize', element, options);
    // Set default options
    this.set({
      hasBorders: false,
      hasControls: false,
    });
  },
  _render(ctx) {
    this.callSuper('_render', ctx);
    ctx.save();
    const xDiff = this.x2 - this.x1;
    const yDiff = this.y2 - this.y1;
    const angle = Math.atan2(yDiff, xDiff);
    ctx.translate((this.x2 - this.x1) / 2, (this.y2 - this.y1) / 2);
    ctx.rotate(angle);
    ctx.beginPath();
    // Move 5px in front of line to start the arrow so it does not have the square
```
line end showing in front (0,0)
```
    ctx.moveTo(5, 0);27
    ctx.lineTo(-5, 5);28
    ctx.lineTo(-5, -5);29
    ctx.closePath();30
    ctx.fillStyle = this.stroke;31
    ctx.fill();32
    ctx.restore();33
```

解决方案
```
As we are drawing from both corners for a line, you can draw wavy line in _render method of
custom class. From the end I draw a line to mid , to show its connected with arrow.
```
DEMO

```
  },34
  toObject() {36
    return fabric.util.object.extend(this.callSuper('toObject'), {37
      customProps: this.customProps,38
    });39
  },40
});41
export default LineWithArrow;43
var line, isDown, evented;
var canvas = new fabric.Canvas('canvas', {
```
  perPixelTargetFind: true
```
});
draw();
function selection() {
  changeObjSelection(true);
  canvas.off('mouse:down');
  canvas.off('mouse:move');
  canvas.off('mouse:up');
  evented = false;
}
function draw() {
  changeObjSelection(false);
  if (!evented) {
    canvas.on('mouse:down', onMouseDown);

    canvas.on('mouse:move', onMouseMove);19
    canvas.on('mouse:up', onMouseUp);20
    evented = true;21
  }22
}23
function clearCanvas() {25
 canvas.clear();26
}27
function changeObjSelection(value) {29
  canvas.selection = value;30
  canvas.forEachObject(function(obj) {31
    obj.selectable = value;32
  })33
  canvas.requestRenderAll();34
}35
function onMouseDown(options) {37
  isDown = true;38
  var pointer = canvas.getPointer(options.e);39
  var points = [pointer.x, pointer.y, pointer.x, pointer.y];40
  line = selectLine(points);41
  canvas.add(line);42
}43
function onMouseMove(options) {45
  if (!isDown) return;46
  var pointer = canvas.getPointer(options.e);47
  line.set({48
    x2: pointer.x,49
    y2: pointer.y50
  });51
  canvas.renderAll();52
}54
function onMouseUp(options) {56
  isDown = false;57
  line.setCoords();58

  canvas.requestRenderAll();59
}60
function drawLineWithArrow(points, color) {62
  return new fabric.LineWithArrow(points, {63
    strokeWidth: 2,64
    stroke: color,65
    objectCaching: false,66
    selectable: false67
  })68
}69
function selectLine(points) {71
  return drawLineWithArrow(points, 'black');72
}73
//Wavy line75
(function(global) {77
  'use strict';78
  if (fabric.LineWithArrow) {79
    fabric.warn('fabric.LineWithArrow is already defined.');80
    return;81
  }82
  fabric.LineWithArrow = fabric.util.createClass(fabric.Line, {83
    type: 'line_with_arrow',84
    initialize: function(element, options) {86
      options || (options = {});87
      this.callSuper('initialize', element, options);88
      // Set default options90
      this.set({91
        hasBorders: false,92
        hasControls: false,93
      });94
    },95
    _render: function(ctx) {97
      // this.callSuper('_render', ctx);98

      ctx.save();99
      const xDiff = this.x2 - this.x1;100
      const yDiff = this.y2 - this.y1;101
      const angle = Math.atan2(yDiff, xDiff);102
      ctx.translate(xDiff / 2, yDiff / 2);103
      ctx.rotate(angle);104
      ctx.beginPath();105
      // Move 5px in front of line to start the arrow so it does not have the square
```
line end showing in front (0,0)
```
      ctx.moveTo(5, 0);107
      ctx.lineTo(-5, 5);108
      ctx.lineTo(-5, -5);109
      ctx.closePath();110
      ctx.fillStyle = this.stroke;111
      ctx.fill();112
      ctx.restore();113
      var p = this.calcLinePoints();114
      var point = this.pointOnLine(this.point(p.x2, p.y2), this.point(p.x1, p.y1), 10)115
      this.wavy(this.point(p.x1, p.y1), point, this.point(p.x2, p.y2), ctx);116
      ctx.stroke();117
    },118
    point: function(x, y) {120
      return {121
        x: x,122
        y: y123
      };124
    },125
    wavy: function(from, to, endPoint, ctx) {127
      var cx = 0,128
        cy = 0,129
        fx = from.x,130
        fy = from.y,131
        tx = to.x,132
        ty = to.y,133
        i = 0,134
        step = 4,135
        waveOffsetLength = 0,136

        ang = Math.atan2(ty - fy, tx - fx),138
        distance = Math.sqrt((fx - tx) * (fx - tx) + (fy - ty) * (fy - ty)),139
        amplitude = -10,140
        f = Math.PI * distance / 30;141
      for (i; i <= distance; i += step) {143
        waveOffsetLength = Math.sin((i / distance) * f) * amplitude;144
        cx = from.x + Math.cos(ang) * i + Math.cos(ang - Math.PI / 2) *
waveOffsetLength;
        cy = from.y + Math.sin(ang) * i + Math.sin(ang - Math.PI / 2) *
waveOffsetLength;
        i > 0 ? ctx.lineTo(cx, cy) : ctx.moveTo(cx, cy);147
      }148
      ctx.lineTo(to.x, to.y);149
      ctx.lineTo(endPoint.x, endPoint.y);150
    },151
    pointOnLine: function(point1, point2, dist) {153
      var len = Math.sqrt(((point2.x - point1.x) * (point2.x - point1.x)) + ((point2.y
- point1.y) * (point2.y - point1.y)));
      var t = (dist) / len;155
      var x3 = ((1 - t) * point1.x) + (t * point2.x),156
        y3 = ((1 - t) * point1.y) + (t * point2.y);157
      return new fabric.Point(x3, y3);158
    },159
    toObject: function() {161
      return fabric.util.object.extend(this.callSuper('toObject'), {162
        customProps: this.customProps,163
      });164
    },165
  });166
})(typeof exports !== 'undefined' ? exports : this);167
canvas {
  border: 2px dotted black;
}
```

这篇关于在FabricJS中画出一条波浪线的文章就介绍到这了
```
<script src="
<script src="
```
https://rawgit.com/kangax/fabric.js/master/dist/fabric.js
```
<button type="button" onclick="selection()">selection</button>
<button type="button" onclick="draw()">draw</button>
<button type="button" onclick="clearCanvas()">clear</button>
<canvas id="canvas" width="400" height="400"></canvas>
```
