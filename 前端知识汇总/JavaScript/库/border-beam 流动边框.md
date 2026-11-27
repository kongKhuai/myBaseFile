# 国外爆火的 "流动边框" 特效！Vue3 复刻版来了！

原创 认真努力的小四子 前端开发爱好者

 _2026年4月17日 08:33_ _江苏_ 听全文

有没有这种场景：

你**辛辛苦苦**把页面做完，布局规范、交互合理、性能也优化了，结果老板看了一眼，说一句：

> “嗯……感觉还不错，就是不够炫。”

然后你就开始在那发愣：**到底什么叫“炫”？**

加点阴影？ 搞点渐变？ 再来个 **hover** 动画？

最后往往变成：越改越乱，效果还不高级。

直到最近我看到一个小库：**border-beam**

![图片](https://mmbiz.qpic.cn/mmbiz_gif/7YalpHdlCY9Om6Ywwbqbz8kmf6RKG9Bmibt2WZqQXH4AMAP8IZkDx1cFicPTvyFE3orhqOxYydicIDqTicymJJewR0BycWrZCcicm6icibicGjJxialY/640?wx_fmt=gif&from=appmsg&wxfrom=13&tp=wxpic#imgIndex=0)

直接一句话总结：

> **这是我见过最简单、但视觉效果最“高级”的边框特效之一。**

## 它到底炫在哪？

先说效果（没看过的建议打开 **demo**）：`https://beam.jakubantalik.com/`

![图片](https://mmbiz.qpic.cn/mmbiz_gif/7YalpHdlCY8v1VGlxznUAVSLRSY29VnTTnUkm7I2yzrxh7EqibtJQibm0icXDkl1ic5XY9rz0s3icicup8SkgcZ3tyjylqnnSP2axs73WeEZTrDys/640?wx_fmt=gif&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1)

它做的事情其实很简单：

**让一束渐变光沿着边框流动**

但妙就妙在：

- 不是那种廉价的跑马灯
    
- 有“霓虹灯”那种柔和的扩散感
    
- 在深色背景下，质感直接拉满
    
- 很适合现在流行的 `AI / SaaS / Landing Page` 风格
    

简单说就是：**“不土的炫”**

## 它其实没你想的那么复杂

很多人第一反应可能是：

> 这是不是 `WebGL`？`Canvas`？`Three.js`？

其实都不是，它的核心原理是：

- `conic-gradient`（圆锥渐变）做流动光
    
- `多层叠加`（边框 + 内发光 + 外发光）
    
- 再配合动画旋转
    

再加一点点：

- `模糊`（blur）
    
- `透明度`（opacity）
    

就出来这个效果了

## React 用法（真的很简单）

安装：

```
npm install border-beam
```

用法：

```
import { BorderBeam } from "border-beam";<BorderBeam>  <div className="card">    Hello World  </div></BorderBeam>
```

就这么简单。

## 可玩性还挺高

这个库给了不少参数可以调：

```
<BorderBeam  size="md"  color="colorful"  duration={6}  brightness={1.5}  saturation={1.2}  strength={0.8}/>
```

你可以控制：

- **动画速度**（快慢）
    
- **光的强度**
    
- **饱和度**
    
- **亮度**
    
- **是否动画 / 静态**
    

甚至还有几种预设风格：

- `colorful`（炫彩）
    
- `ocean`（科技蓝）
    
- `sunset`（橙红）
    
- `mono`（极简）
    

## 一个我很喜欢的细节

这个库有个很“**贴心**”的设计：

**自动读取子元素的 border-radius**

也就是说：

你里面的卡片是圆角 `12px`，它会自动适配， 你改成 `20px`，它也会跟着变，不用你手动同步。

底层是用：

- `getComputedStyle`
    
-   
    

- `MutationObserver`
    

这点其实挺加分的。

## 我花了 30 分钟，Vibe Coding 了一个 Vue3 版本

直接上成果：

- **GitHub**：`https://github.com/xushanpei/vue3-border-beam`
    
- **npm**：`https://www.npmjs.com/package/vue3-border-beam`
    

![图片](https://mmbiz.qpic.cn/sz_mmbiz_gif/7YalpHdlCY8zPc9xcIYQMBjsPBiaAmdicwEWqqo19odribg1HMOaF94b3QiapNnOdHicty3GBwWvHsSvFRiasfhbU4a36CgZoDaqcaIG5zJneVCTA/640?wx_fmt=gif&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_gif/7YalpHdlCY8DzrPsxNVDTPLdfomAlG5f262JszpFWDuib9Rg2xH5YUOguwoQXjVoqFA6Cg7ib80xOMlwibnWDdjmtFUuJxAcZicYyoib6N3nfJw0/640?wx_fmt=gif&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3)

## 用法也很简单

安装：

```
npm install vue3-border-beam
```

使用：

```
<template>  <BorderBeam>    <div class="card">Hello Vue3</div>  </BorderBeam></template><script setup id="9pn4je">import BorderBeam from 'vue3-border-beam'</script>
```

## 该有的能力基本都有

我在实现的时候，尽量对齐了原库的能力：

- **尺寸控制**（sm / md / line）
    
- **多种颜色主题**（colorful / ocean / sunset / mono）
    
- **动画速度**（duration）
    
- **光强**（strength）
    
- **亮度** / **饱和度调节**
    
- 支持**动态开关**动画
    

基本可以做到开箱即用

## 相关链接

- **border-beam React 版本**：`https://github.com/Jakubantalik/border-beam`
    
- **border-beam Vue3 版本**：`https://github.com/xushanpei/vue3-border-beam`
    