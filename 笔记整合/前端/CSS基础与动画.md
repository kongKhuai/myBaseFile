# CSS基础与动画

> 共 9 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [3个非常棒的CSS技巧，可以在项目中完全代替JS](#sec-1) — 有道云笔记 · `CSS/3个非常棒的CSS技巧，可以在项目中完全代替JS.md`
2. [css动画](#sec-2) — 有道云笔记 · `CSS/css动画.md`
3. [CSS动画工具](#sec-3) — 有道云笔记 · `CSS/CSS动画工具.md`
4. [css命名术](#sec-4) — 有道云笔记 · `CSS/css命名术.md`
5. [无标题笔记23-04-59](#sec-5) — 有道云笔记 · `CSS/css网页工具/无标题笔记23-04-59.md`
6. [文本样式](#sec-6) — 有道云笔记 · `CSS/文本样式.md`
7. [纯CSS创建各类进度条的 N 种方式（总结分享）-css教程-PHP中文网](#sec-7) — 有道云笔记 · `CSS/纯CSS创建各类进度条的 N 种方式（总结分享）-css教程-PHP中文网.md`
8. [网页基础字体设置](#sec-8) — 有道云笔记 · `CSS/网页基础字体设置.md`
9. [都2022年了，还不知道这几个CSS特性该out了 - 掘金](#sec-9) — 有道云笔记 · `CSS/都2022年了，还不知道这几个CSS特性该out了 - 掘金.md`

---

<a id="sec-1"></a>
## 3个非常棒的CSS技巧，可以在项目中完全代替JS

> 来源：有道云笔记
> 原路径：`CSS/3个非常棒的CSS技巧，可以在项目中完全代替JS.md`

2.半椭圆1
border-radius:左上角水平因角半径大小右上角水平圆角半径大小右下角水平圆角半径大小左下角水平圆角半径大小/左上角垂直因角半径大小右上角垂直因角半径大!
右下角垂直圆角
```
半径大小左下角垂直圆角半径大小;
background: linear-gradient(0deg,#A3E6D8,#55D0AC);
  border-radius: 0 0 50% 50% / 0 0 18% 18%  ;
```
:active 伪类与 css 数据上报超实用超高频使用的:empty 伪类用好:only-child 伪类
1、 :active 伪类与CSS数据上报
如果想要知道两个按钮的点击率，CSS开发者可以自己动手，无需劳烦 JavaScript 开发者去埋点：
```
.button-1:active::after {
    content: url(./pixel.gif?action=click&id=button1);
    display: none;
}
.button-2:active::after {
    content: url(./pixel.gif?action=click&id=button2);
    display: none;
}
```
此时，当点击按钮的时候，相关行为数据就会上报给服务器，这种上报就算把 JavaScript 禁用掉也无法阻止，方便快捷，特别适合A/B测试。
2、超实用超高频使用的:empty 伪类25
:empty 伪类用来匹配空标签元素，例如：26
```
<div class="cs-empty"></div>28
.cs-empty:empty{29
    width: 120px;30
    padding: 20px;31
    border: 10px dashed;32
}33
```
此时， div 元素就会匹配  :empty 伪类，呈现出虚线框，如下图34

2.1 隐藏空元素38
例如，某个模块里的内容是动态的，可能是列表，也可能是按钮，这些模块容器常包含影响布局的CSS属性，
如 margin 、 padding 属性等。当然，这些模块里面有内容的时候，布局显示效果是非常好的，然儿一旦这些模块里面的内容为空，页面上就会有一块很大的明显的空白，效果就不好，这种情况下使用 :empty 伪类控制一下就再好不过了：
```
.cs-module:empty {41
    display: none;42
}43
```
无需额外的 JavaScript 逻辑判断，直接使用CSS就可以实现动态样式效果，唯一需要注意的，当列表内容缺失的时候，一定要把空格也去掉，否则:empty 伪类不会匹配。
2.2 字段缺失智能提示46
例如，下面的 html47
```
<dl>49
    <dt>姓名：</dt>50
    <dd>张三</dd>51
    <dt>性别：</dt>52
    <dd></dd>53
    <dt>手机：</dt>54
    <dd></dd>55
    <dt>邮箱：</dt>56
    <dd></dd>57
</dl>58
```
用户某些信息字段是缺失的，此时由于开发人员应该使用其他占位字符示意这里没有内容，如短横线（-）或者直接使用文字提示。
但是多年的开发经验告诉我，开发人员非常容易忘记这里的特殊处理，最终导致布局混乱，信息难懂。61
```
dt {63
    float: left;64
}65
```
但如今，我们就不用担心这样的合作问题了，直接使用CSS就可以处理这种情况，代码很简单：66
```
dd:empty::before {68
    content: ' 暂无 ';69
    color: gray;70
}71
```
此时字段缺失后的布局效果如下：72

2.3、数据为空提示76
实际开发中类似的场景还有很多。例如，表格中的备注信息经常都是空的，此时可以这样处理：77
```
td:empty::before{79
    content: '-';80
    color: gray;81
}82
```
除此之外，还有一类典型场景需要用到 :empty 伪类，那就是动态 Ajax 加载数据为空的情况。当一个新用户
进入一个产品的时候，很多模块内容是没有的。要是在过去，我们需要在 Javascript 代码中做  if 判断，如
果没有值，我们要吐出 ” 没有结果 “ 或者 ” 没有数据 “ 的信息。但是现在，有了 :empty 伪类，直接把这个工作交给CSS就可以了。例如：
```
.cs-search-module:empty::before{85
    content: ' 没有搜索结果 '；86
    display: block;87
    line-height: 300px;88
    text-align: center;89
    color: gray;90
}91
```
又如：92
```
.cs-article-module:empty::before{94
    content: ' 您还没有发布任何文章 '；95
    display: block;96
    line-height: 300px;97
    text-align: center;98
    color: gray;99
}100
```
总之，这种方法非常好用，可以节约大量的开发时间，同时体验更好，维护更方便，因为可以使用同一个类名使整站提示信息保持一致：
```
.cs-article-module:empty::before{103
    content: ' 暂无数据；104
    display: block;105
    line-height: 300px;106
    text-align: center;107
    color: gray;108
}109
```

3、用好:only-child 伪类110
:only-child 是一个很给力的伪类，尤其在处理动态数据的时候，可以省去很多写 JavaScript 逻辑的成
本。
:only-child 意思是匹配没有任何兄弟元素的元素。例如，下面的  p 元素可以匹配  :only-child 伪类，
因为其前后没有其他兄弟元素：
```
<div class="cs-confirm">115
    <!-- 可以匹配:only-child 伪类  -->116
    <p class="cs-confirm-p">确定删除该内容？</p>117
</div>118
```
虽然  .icon 元素后面有删除文字，但由于没有标签嵌套，是匿名文本，因此不影响  .icon 元素匹配
:only-child 伪类。
尤其需要使用 :only-child 伪类的场景是动态场景，也就是某个固定小模块，根据场景的不用，里面可能是一个子元素，也可能是多个子元素，元素个数不同，布局方式也不同，此时就是  :only-child 伪类大放异彩的时候。
例如，某个加载元素（ loading ）模块里面可能就只有一张加载图片，也可能仅仅就是一段加载描述文字，也可能是加载图片和加载文字同时出现，此时 :only-child 伪类就非常好用。
html 示意如下：125
```
<!-- 1. 只有加载图片  -->127
<div class="cs-loading">128
    <img src="./loading.png"  class="cs-loading-img"\>129
</div>130
<!-- 2. 只有加载文字  -->131
<div class="cs-loading">132
    <p  class="cs-loading-p">正在加载中...</p>133
</div>134
<!-- 3. 加载图片和加载文字同时存在  -->135
<div class="cs-loading">136
    <img src="./loading.png"  class="cs-loading-img"\>137
    <p class="cs-loading-p">正在加载中...</p>138
</div>139
```
我们无需在父元素上专门指定额外的类名来控制不同状态的样式，直接活用 :only-child 伪类就可以让各种状态下布局都良好。
```
.cs-loading {142
    height: 150px;143
    position: relative;144

    text-align: center;145
    /* 与截图无关，截图示意用  */146
    border: 1px dotted;147
}148
/* 图片和文字同时存在时在中间留点间距  */150
.cs-loading-img {151
    width: 32px; height: 32px;152
    margin-top: 45px;153
    vertical-align: bottom;154
}155
.cs-loading-p {157
    margin: .5em  0  0;158
    color: gray;159
}160
/* 只有图片的时候居中绝对定位  */162
.cs-loading-img:only-child {163
    position: absolute;164
    left: 0; right: 0; top: 0; bottom: 0;165
    margin: auto;166
}167
/* 只有文字的时候行号近似垂直居中  */169
.cs-loading-p:only-child {170
    margin: 0;171
    line-height: 150px;172
}173
```

<a id="sec-2"></a>
## css动画

> 来源：有道云笔记
> 原路径：`CSS/css动画.md`

```
var root=document.querySelector(":root")
root.setAttribute("style","--ks:'xxx'")
```
https://cubic-bezier.com/

<a id="sec-3"></a>
## CSS动画工具

> 来源：有道云笔记
> 原路径：`CSS/CSS动画工具.md`

人类对于运动的食物往往会投入更多的关注，因此巧妙的使用动画能够极大地提升网站的用户体验，
快速唤起用户对重要元素的关注。 在css3中引入了全新的动画语法，它能够帮助你在设计中实现许多有趣的事情。通常构建炫酷的动画是非常复杂和费时的，而使用动画库和生成器则可以帮助你完美处理这一切。 在这篇文章中我们将推荐十款出色的工具，它们可以帮助你更快更轻松地完成自己的动画。 1、 css3Gen - CSS3动画生成器 CSS3Gen为你提供了一个易于使用的可以快速生成基本动画的动画生成器。虽然你无法使用它来完成复杂的作品，但是如果你想要不费劲的创建一个标准的动画，
这个工具将会是一个很好的选择。 不需要任何手动写代码，只需要在通过设置属性表单，预览结果，
然后将符合预期的简单代码复制粘贴到自己的CSS文件即可。 CSS3Gen在线工具地址：
 2、CSS Animate 如果你需要更复杂的动画，你会发现CSS Animate非常有用，它有一个更成熟的用户界面，可以让你设置更多属性，也可以让你通过直观的时间线追随、停止或者重放动画。 它还包含了一些动画示例，比如“反弹”、“震动”、“摇摆”等，你可以把这些动画加载到生成器了，再根据需求来修改代码。 CSS Animate在线工具地址：http://
3、Coveloping - CSS动画生成器 Coveloping的动画生成器大概是刚接触CSS3动画想要了解它是如何工作的新手最理想的选择。这个简单而又强大的工具可以帮助你测试所提供的不同类型动画，并轻松地检测出它们之间的区别。 你只需要设置四个参数：动画类型、动画功能、持续多少秒以及动画是否为无限循环。当你完成以后，你就可以获取生成的html和CSS代码了。 Coveloping在线工具地址：
 4、Magic Animations Magic
Animations是一个很酷的CSS库，它能够给你的网站带来许多动画特效。比如你可以让元素消失重现，从左边或者右边打开然后返回，向下、向上、向左、向右的旋转等等。 你所要做的事情就是将
CSS文件下载到你的页面上，然后在jQuery的帮助下以下列方式添加适当的类：
$('.yourdiv').hover(function () { $(this).addClass('magictime puffIn'); }); 你也可以改变计时器的设
置，在jQuery的帮助下达到动画无限循环（参见readme文件细节） Magic Animations在线工具地址：  5、Animate.css Animate.css
提供了一整套炫酷的跨浏览器CSS3动画。这些动画被分成了不同群组，比如Attention Seekers（吸引眼球），Bouncing Entrances（跳动入口），Bouncing Exits（跳动出口），Fading Entrances（褪色入口）等等多种不同选项，这让你无法抱怨种类的匮乏。 你可以从Github上下载代码，然后你只需要添加CSS文件到html页面，然后在HTML元素中引用你需要的动画的CSS类即可。 Animate.css在线工具地址：  6、Bounce.js Bounce.js是一个能够让你创建复杂动画的方便的JavaScript库，它拥有非常成熟的用户界面，支持用户添加不同的组件，如缓冲、持续、延迟以及不同的反弹次数，你可以手动处理动画，也可以从现成的动画中选择你需要的动画，再进行属性的调整。 Bounce.js在线工具地址：  7、AniJS AniJS是一个超级炫酷的JavaScript库，它支持为你的设计添加CSS3动画，并构建动画选项卡、折叠线、模态窗口、滑动菜单、移动端APP通知、滚动显示等复杂的UI组件。 它适用于包括iOS和Android在内的所有现代浏览器，不需要任何第三方库，此外它还拥有一个被称为AniCollection的展示窗，通过这个库你可以体验不同的效果。 AniJS在线工具地址：  8、 Single Element CSS Spinners 你是否想要通过使用加载转轮动画来提高设计上的用户体验。如果答案是肯定的，那么这个可爱的CSS加载转轮代码库可能是你的最佳选择。这些加载转轮的CSS代码是由LESS写成的，所有的代码都是现成
http://css3ge
n.com/css3-animation/
cssanimate.com/
https://coveloping.com/tools/css-animation-generator
http://www.minimamente.com/example/magic_animations/
https://daneden.github.io/animate.css/
http://bouncejs.com/
http://anijs.github.io/

的，不需要任何的设置，你只需要将它插入自己的HTML和CSS文件。 Single Element CSS Spinners
在线工具地址：  9、Odometer Odometer是一个可将炫酷动画移植到你网站的杰出工具，它是一个CSS和JavaScript库，其CSS部分是由Sass写成，你可以选择不同的主题，比如“数字”、“火车站”、“汽车”。 要使用Odometer，你必须首先添加
JavaScript文件和所选的主题文件到你的HTML页面，然后在你想做成动画的元素中使用
class=“odometer”选择器。通过直观地表现数据或者制作一个“Coming Soon” 的吸人眼球的画
面，这会是一个完美的选择。 Odometer在线工具地址：
 10、Snabbt.js Snabbt.js是一个可以帮助你轻松实现元素到处移动的简约的动画库。如果你需要一点灵感，可以看看关于这个智能的动画工具能够为你实现什么的演示，截图上的动画元素周期表是Snabbt.js能够轻松实现的众多可能之一。 如果你想要使用这个库，你需要有一点关于
JavaScript的知识，但它所带来的结果是令人惊叹的，所以这个工具绝对是物超所值的。

rCSS参考书https://cssreference.io/animations/CSS灵感https://chokcoco.github.io/CSS-
Inspiration/#/UI设计师的灵感源泉https://www.awwwards.com/sites/zero-impact学习CSS布局
https://zh.learnlayout.com/box-sizing.htmlCSS小花招UI设计师的灵感源泉
https://www.awwwards.com/sites/zero-impact https://css-tricks.com/不过脑子的动效，不过看起来很“猛”https://tholman.com/obnoxious/CSS三维变换动画https://animista.net/CSS鼠标悬浮动画https://ianlunn.github.io/Hover/通过给萝卜浇水，学习CSS网格布局
https://cssgridgarden.com/通过做饭，练习CSS选择器https://flexboxfroggy.com/配色
https://mycolor.space/还是配色https://clrs.cc/CSS渐变色https://cssgradient.io/
http://projects.lukehaas.me/css-loaders/
http://github.hubspot.com/odometer/do
cs/welcome/

<a id="sec-4"></a>
## css命名术

> 来源：有道云笔记
> 原路径：`CSS/css命名术.md`

BEM是一种CSS命名规范。
BEM代表 “块（block），元素（element），修饰符（modifier）”。
在选择器中，由以下三种符号来表示扩展的关系：
BEM 的好处
-   中划线  ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。
__  双下划线：双下划线用来连接块和块的子元素
_   单下划线：单下划线用来描述一个块或者块的子元素的一种状态摆脱特异性的困扰修复继承问题停止担心命名
状态
前一个     prev
后一个     next
当前的     current
显示的     show
隐藏的     hide
打开的     open
关闭的     close
选中的     selected
有效的     active
默认的     default
反转的     toggle
禁用的     disabled
危险的     danger
主要的     primary
成功的     success
提醒的     info
警告的     warning
出错的     error
大型的     lg

小型的     sm24
超小的     xs25
布局
文档     doc
头部     header(hd)
主体     body
尾部     footer(ft)
主栏     main
侧栏     side
容器     box/container
通用部件
列表     list
列表项   item
表格     table
表单     form
链接     link
标题     caption/heading/title
菜单     menu
集合     group
条       bar
内容     content
结果     result
组件
按钮         button(btn)
字体         icon
下拉菜单     dropdown
工具栏       toolbar
分页         page
缩略图       thumbnail

警告框       alert7
进度条       progress8
导航条       navbar9
导航         nav    10
子导航       subnav11
面包屑       breadcrumb(crumb)    12
标签         label13
徽章         badge14
巨幕         jumbotron15
面板         panel16
洼地         well17
标签页       tab18
提示框       tooltip19
弹出框       popover20
轮播图       carousel21
手风琴       collapse 22
定位浮标     affix23
语义化小部件
品牌         brand
标志         logo
额外部件     addon
版权         copyright
注册         regist(reg)
登录         login
搜索         search
热点         hot
帮助         help
信息         info
提示         tips
开关         toggle
新闻         news
广告         advertise(ad)
排行         top
下载         download

功能部件
左浮动     fl
右浮动     fr
清浮动     clear

<a id="sec-5"></a>
## 无标题笔记23-04-59

> 来源：有道云笔记
> 原路径：`CSS/css网页工具/无标题笔记23-04-59.md`

CSS 参考书：
CSS 灵感：
交互式在线 CSS 速记表：
CSS 小花招：
不过脑子的动效，不过看起来很“猛”：
CSS 抖动特效：
CSS 动画集，可自由调节动画参数，生成代码片段：
CSS 鼠标悬浮动画：
通过给萝卜浇水，学习 CSS 网格布局：
CSS 塔防游戏，学习 flex 布局：
通过做饭，练习 CSS 选择器：
送小青蛙回家，学习 flex 布局：
配网站色：
还是配色网站：
CSS 渐变色：

 网页背景

https://cssreference.io/css-grid/
https://chokcoco.github.io/CSS-Inspiration/#/
https://htmlcheatsheet.com/css/
https://css-tricks.com/
https://tholman.com/obnoxious/
https://elrumordelaluz.github.io/csshake/
https://animista.net/play/
https://ianlunn.github.io/Hover/
https://cssgridgarden.com/
https://link.juejin.cn/
https://flukeout.github.io/
https://flexboxfroggy.com/
https://mycolor.space/
https://clrs.cc/
https://cssgradient.io/
https://gradienta.io/

<a id="sec-6"></a>
## 文本样式

> 来源：有道云笔记
> 原路径：`CSS/文本样式.md`

1. 单行超出隐藏
```
div {
  overflow:hidden; // 超出的文本隐藏
  text-overflow:ellipsis; // 用省略号显示
  white-space:nowrap; // 不换行
}
 if(str.length>30){
         let subStr1 = str.substr( 0, 10);
  let subStr2 = str.substr( fileName.length- 10, 10);
  return subStr1 + "..." + subStr2 ;
  }
```
2. 多行超出隐藏
```
div{
      overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;    // 将对象作为弹性伸缩盒子模型显示。
  -webkit-box-orient:vertical;  // 从上到下垂直排列子元素
  -webkit-line-clamp:2; // 显示的行数
}
```
3. 表格中单行超出隐藏
```
div{
    width:100%;
  word-break:keep-all;   // 不换行
  white-space:nowrap;   // 不换行
  overflow:hidden;
  text-overflow:ellipsis;
}
```

<a id="sec-7"></a>
## 纯CSS创建各类进度条的 N 种方式（总结分享）-css教程-PHP中文网

> 来源：有道云笔记
> 原路径：`CSS/纯CSS创建各类进度条的 N 种方式（总结分享）-css教程-PHP中文网.md`

纯CSS创建各类进度条的 N 种方式（总结分享）

，通过本文，你可能可以学会：
进度条，是我们日常界面中使用的非常多的一种，下面我们来看看。到今天，我们可以如何实现进度条。
HTML 标签 -- meter & progress
这个可能是一些同学还不太清楚的，HTML5 原生提供了两个标签 和 来实现进度条。
我们分别来看看，首先是 标签：
通过 HTML 标签 创建进度条
通过 HTML 标签 创建进度条
HTML 实现进度条的局限性
使用 CSS 百分比、渐变创建普通进度条及其动画使用 CSS 创建圆环形进度条使用 CSS 创建球形进度条使用 CSS 创建 3D 进度条
：用来显示已知范围的标量值或者分数值
：用来显示一项任务的完成进度，通常情况下，该元素都显示为一个进度条
```
<p>
<span> 完成度： span>
<metermin="0"max="500"value="350">350
degreesmeter>
p>
meter {
width: 200px;
}
```

样式如下：
其中，min、max、value 分别表示最大值，最小值与当前值。
无独有偶，我们再来看看 标签的用法：
```
<p>
<labelfor="file"> 完成度： label>
<progressmax="100"value="70"> 70% progress>
p>
progress {
width: 200px;
}
```
样式如下：
其中，max 属性描述这个 progress 元素所表示的任务一共需要完成多少工作量，value 属性用来指定该进度条已完成的工作量。
meter & progress 之间的差异那么问题来了，从上述 Demo 看，两个标签的效果一模一样，那么它们的区别是什么？为什么会有两个看似一样的标签呢？
这两个元素最大的差异在于语义上的差别。
譬如，一个需求当前的完成度，应该使用 ，而如果要展示汽车仪表盘当前的速度值，应该使用
meter。
meter & progress 的局限性
：表示已知范围内的标量测量值或分数值
：表示任务的完成进度

当然，在实际的业务需求中，或者生产环境，你几乎是不会看到 和 标签。
原因在于：
我们无法有效的修改 和 标签的样式，譬如背景色，进度前景色等。并且，最为致命的是，浏览器默认样式的表现在不同浏览器之间并不一致。这给追求稳定，UI 表现一致的业务来说，是灾难性的缺点！
我们无法给他添加一些动画效果、交互效果，因为一些实际的应用场景中，肯定不是简单的展示一个进度条仅此而已利用 CSS 实现进度条因此，在现阶段，更多的还是使用一些 CSS 的方式去实现进度条。
使用百分比实现进度条
最为常见的一种方式是使用背景色配合百分比的方式制作进度条。
最简单的一个 DEMO：
```
<divclass="g-container">
<divclass="g-progress">div>
div>
.g-container {
width: 240px;
height: 25px;
border-radius: 25px;
background: #eee;
}
.g-progress {
width: 50%;
height: inherit;
border-radius: 25px0025px;
background: #0f0;
}
```
效果如下：
这种方式优势在于使用简单，实际进度可以非常方便的传递进 CSS 中

利用 HTML style 属性填写完整的 width 值，譬如或者利用 CSS 自定义属性
配合实际 CSS 中的 width: var(--progress)
完全的自定义样式，以及可以轻松的添加辅助丰富的动画和交互效果譬如给 g-progress 添加一个过渡效果：
```
.g-progress {
// ...
transition: width .2s linear;
}
```
这样，每次进度变化，都是一个动态的过渡过程：
或者，渐变前景色，修改 background: #0f0 为 background: linear-gradient(90deg, #0f0, #0ff)：
单标签使用渐变实现
当然，可以看到，我们上面使用的是两个标签的结构：
```
<divclass="g-container">
<divclass="g-progress">div>
div>
```
抠门点，我们还可以仅仅利用一个标签去完成这个事情，主要借助了渐变去完成这个事情：
```
1 <divclass="g-progress">div>
.g-progress {
width: 240px;
height: 25px;
border-radius: 25px;
```

7 background: linear-gradient(90deg, #0f0, #0ff
```
70%, transparent 0);
border: 1px solid #eee;
}
```
结果如下：
同样的，我们可以利用 HTML style 属性填写完整的 background 值传递实际百分比，当然，这里更推荐使用 CSS 自定义属性传值：
```
1 <divclass="g-progress"style="--progress: 50%">div>
.g-progress {
```
background: linear-gradient(90deg, #0f0, #0ff
```
var(--progress), transparent 0);
}
熟悉 CSS 的同学会发现一个目前这种方式的弊端，在于当修改 --progress 的值的时候，即便给
```
.g-progress 添加了 transition，也不会有过渡动画效果。
原因在于，CSS 中，渐变（诸如 linear-gradinet、radial-gradient、conic-gradient）都是不支持过渡变换的。
所以，在这里，为了实现动画效果，我们可以借助 CSS @property，改造下我们的代码：
```
1 <divclass="g-progress"style="--progress: 70%">div>
@property --progress {
syntax: '';
inherits: false;
initial-value: 0%;
}
.g-progress {
margin: auto;
width: 240px;
height: 25px;
border-radius: 25px;
```
background: linear-gradient(90deg, #0f0,
#0ff var(--progress), transparent 0);
```
border: 1px solid #eee;
transition: .3s --progress;
}
```

借助 CSS @property 的特性，我们在单标签下也是可以实现动画效果的：
CodePen Demo -- 单标签的进度条效果
https://codepen.io/pen/
当然，这里不仅仅只是上述所说的百分比、和渐变两种方式可以实现这种最常见的进度条，所有可以实现长度变化的，其实都可以用于实现进度条，包括但不限于：
这里不再继续展开。
圆弧形进度条
当然，进度条不可能只有直线型的。还有非常多其他类型的，下面我们首先来看看圆弧型的进度
条。
在今天，我们可以使用 CSS 快速的创建圆弧形式的进度条，类似于这样：
宽度（使用百分比为单位的宽度更为直接）
渐变（控制渐变的过渡点的百分比的值）
渐变的 background-size
transfrom: scale()（缩放也能改变宽度大小）
clip-path 进行裁剪
...（等等等等）
核心就是使用角向渐变 background: conic-gradient()：

```
1 <divclass="g-progress">div>
.g-progress {
width: 160px;
height: 160px;
border-radius: 50%;
```
background: conic-gradient(#FFCDB2 0,
#FFCDB2 25%, #B5838D 25%, #B5838D);
}
利用角向渐变 background: conic-gradient()，我们可以轻松实现这样一个饼图：
接下来就是镂空中间部分。
传统的想法是，在中间叠加一个圆，然而，这样做的一个极大的弊端在于，如果我们的背景不是纯色而是渐变色，就不适用了，譬如这样：
那么如何镂空中间，使得中间部分透明呢？这里我们可以巧妙的通过 mask 属性达到目的，镂空中
间：
.g-progress {
background: conic-gradient(#FFCDB2 0,
#FFCDB2 25%, #B5838D 25%, #B5838D);
+ mask: radial-gradient(transparent,
```
transparent 50%, #000 50%, #000 0);
}
```

这样，我们就轻松的镂空了中间，即便背景不是纯色也无妨。
CodePen Demo - 角向渐变实现圆弧形进度条
https://codepen.io/Chokcoco/pen/oNewMLy
基于此拓展，还可以实现多色的圆弧型进度条：
```
.g-progress {
width: 160px;
height: 160px;
border-radius: 50%;
```
mask: radial-gradient(transparent,
transparent 50%, #000 51%, #000 0);
background:
conic-gradient(
#FFCDB2 0, #FFCDB2 25%,
#B5838D 25%, #B5838D 50%,
#673ab7 50%, #673ab7 90%,
#ff5722 90.2%, #ff5722 100%
```
);
}
```
当然，这个可能不像进度条，更类似于饼图？
角向渐变实现圆弧进度条的局限性

当然，这个方法有两个弊端。
当然进度百分比不是类似于 0°、90°、180°、270°、360° 这类数字时，使用角向渐变时，不同颜色间的衔接处会有明显的锯齿。
看个例子 conic-gradient(#FFCDB2 0, #FFCDB2 27%, #B5838D 27%, #B5838D)：
遇到此类问题的解决方案是，在衔接处，适当留出一些渐变空间，我们简单的改造一下上述角向渐变代码：
{
- background: conic-gradient(#FFCDB2 0,
#FFCDB2 27%, #B5838D 27%, #B5838D)`
+ background: conic-gradient(#FFCDB2 0,
#FFCDB2 27%, #B5838D 27.2%, #B5838D)`
}
仔细看上面的代码，将从 27% 到 27% 的一个变化，改为了 从 27% 到 27.2%，这多出来的 0.2% 就是为了消除锯齿的，实际改变后的效果：

具体使用的使用，可以多调试选取既不会看出模糊，又能尽可能消除锯齿的一个范围幅度。
对于开头和结尾需要圆形的圆弧进度条实现起来较为麻烦还有一种情况，实际使用中，要求的是首尾带圆形的圆弧进度条，例如下图所示：
当然，这种情况当然进度条颜色是纯色也是可以解决的，我们通过在在首尾处叠加两个小圆圈即可实现这种效果。
如果进度条是渐变色的话，这种进度条则需要借助 SVG/Canvas 实现了。
上述完整的带圆角的圆弧进度条，你可以戳这里看完整源码 -- CodePen Demo -- 首尾为圆
形的圆弧进度条
https://codepen.io/Chokcoco/pen/VwzzVEV球形进度条球形进度条也是比较常见的，类似于下面这种：

对于球形进度条，其实核心在于使用 CSS 实现中间部分的波浪效果。
这个技巧到今天应该已经被大伙熟知了，就不过多赘述，一图胜千言，可以使用滚动大圆的方式，类似于这样：
容器应用 overflow: hidden，就能得到这样的效果：

对这个技巧还不理解，可以猛击这篇文章：
纯 CSS 实现波浪效果！
https://github.com/chokcoco/iCSS/issues/22
应用这个技巧，只需要简单的封装，控制一下球形容器表示进度 0% - 100% 时的波浪的高度即可。我们就能得到从 0% - 100% 的动画效果。
完整的代码大概如下：
```
<divclass="container">
<divclass="wave-change">div>
<divclass="wave">div>
div>
.container {
width: 200px;
height: 200px;
border: 5px solid rgb(118, 218, 255);
border-radius: 50%;
overflow: hidden;
}
.wave-change {
position: absolute;
width: 200px;
height: 200px;
left: 0;
top: 0;
animation: change 12s infinite linear;
```
&::before,
```
&::after{
content: "";
position: absolute;
width: 400px;
height: 400px;
top: 0;
left: 50%;
background-color: rgba(255, 255, 255, .6);

border-radius: 45% 47% 43% 46%;
transform: translate(-50%, -70%) rotate(0);
animation: rotate 7s linear infinite;
z-index: 1;
}
&::after {
border-radius: 47% 42% 46% 44%;
background-color: rgba(255, 255, 255, .8);
transform: translate(-50%, -70%) rotate(0);
animation: rotate 9s linear -4s infinite;
z-index: 2;
}
}
.wave {
position: relative;
width: 200px;
height: 200px;
background-color: rgb(118, 218, 255);
border-radius: 50%;
}
p {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 36px;
color: #000;
z-index: 10;
}
@keyframes rotate {
to {
```
transform: translate(-50%, -70%)
```
rotate(360deg);
}
}
@keyframes change {
from {
top: 80px;
}
to {
top: -120px;
}
}
```

完整的代码示例，你可以戳这里：
CodePen Demo -- Pure Css Wave Progress bar
https://codepen.io/Chokcoco/pen/EXJrdB
CodePen Demo -- Pure Css Wave Progress bar Animation
https://codepen.io/Chokcoco/pen/rNzGbWY
3D 进度条
嗯，下面这个 3D 进度条需要对 CSS 3D 有基本的掌握。
你可以先看看这篇文章 -- 奇思妙想 CSS 3D 动画 | 仅使用 CSS 能制作出多惊艳的动画？
https://github.com/chokcoco/iCSS/issues/132
它主要是借助了一个 3D 立方体。接下来我们来实现一个立方体进度条~首先，实现一个立方体，结构如下：
```
<divclass="demo-cube perspective">
<ulclass="cube">
<liclass="top">li>
<liclass="bottom">li>
<liclass="front">li>
<liclass="back">li>
<liclass="right">li>
<liclass="left">li>
ul>
div>
```

我们可以把这个立方体想象成一个立体的进度条容器，通过控制 6 面的颜色，我们可以巧妙的得到一种 3D 进度条效果。
当然，其实我们不需要那么多面，4 个面即可，去掉左右，然后利用渐变修改一下立方体各个面的颜色，去掉 border，核心的 CSS 代码如下：
```
.demo-cube {
position: relative;
.cube {
position: absolute;
top: 50%;
left: 50%;
width: 300px;
height: 100px;
transform-style: preserve-3d;
```
transform: translate(-50%, -50%)
```
rotateX(-33.5deg);
li {
position: absolute;
width: 300px;
height: 100px;
```
background: linear-gradient(90deg, rgba(156,
39, 176, .3), rgba(255, 34, 109, .8) 70%,
rgba(255, 255, 255, .6) 70%, rgba(255, 255,
```
255, .6));
}
.top {
transform: rotateX(90deg) translateZ(50px);
}
.bottom {
transform: rotateX(-90deg) translateZ(50px);
}
.front {
transform: translateZ(50px);
}
.back {
```
transform: rotateX(-180deg)
```
translateZ(50px);
}
}
}
```

我们就可以得到一个非常酷炫的 3D 进度条效果：
利用 CSS Property 给 3D 进度条加上动画当然，进度条嘛，它需要一个填充动画。由于我们使用的是渐变实现的进度条的进度，需要去控制其中的颜色百分比变化。
而正常而言，CSS 是不支持渐变的动画的，不过这也难不倒我们，因为我们可以使用 CSS
@Property 。
简单改造一下代码：
```
@property --per {
syntax: '';
inherits: false;
initial-value: 0%;
}
.demo-cube .cube {
```
.top,
.front,
.bottom,
.back {
background: linear-gradient(90deg, rgba(255,
```
217, 34, .6), rgba(255, 34, 109, .8) var(--
per), rgba(255, 34, 109, .1) var(--per),
rgba(255, 34, 109, .1));
animation: perChange 6s infinite;
}
}
@keyframes perChange {
0% {
--per: 0%;
}
```
90%,
```
to {
--per: 80%;
}
}

这样，我们就实现了一个会动的 3D 进度条，只需要控制 --per CSS 自定义属性即可，效果如下：
对于 CSS @Property 不算很了解的，可以看看作者的这篇文章 --
```
，它的出现，让 CSS 极大的提升了制作各种动画的能力。
上述的完整代码，你可以猛击这里：CSS 灵感 -- 3D 立方体进度条
https://csscoco.com/inspiration/#/./3d/3d-cuber-progress-bar
CSS @property，让不可
能变可能
扩展延伸
本文从简到繁介绍了使用 HTML/CSS 逐步构建进度条的方式，并且逐渐加深了难度。
当然，随着难度的提升，得到的是更为酷炫的进度条。
基于上述的方法介绍，基本可以演化出各种我们需要的进度条。譬如基于上述的方法，可以实现一个简单的电池充电动画：
当然，CSS 千变万化，进度条的种类肯定也不仅仅局限于上述的几类。譬如我们可以利用滤镜实现的仿华为手机的充电动画，也是一种进度条的呈现方式，也是能够使用纯 CSS 实现的：

上述效果的完整实现可以戳 -- 巧用 CSS 实现酷炫的充电动画
https://github.com/chokcoco/iCSS/issues/75
又或者，我们可以在进度条的纹理上做文章：
效果来源于 CodePen -- Bars By Lucagaz。
https://codepen.io/lucagez/pen/ReMLVV
总而言之，CSS 美好世界值得我们去探索。

<a id="sec-8"></a>
## 网页基础字体设置

> 来源：有道云笔记
> 原路径：`CSS/网页基础字体设置.md`

```
@font-face { font-family: Emoji; src: local("Apple Color Emojiji"), local("Segoe UI Emoji"),
local("Segoe UI Symbol"), local("Noto Color Emoji"); unicode-range: U+1F000-1F644,
U+203C-3299; } body { font-family: system-ui, —apple-system, Segoe UI, Rototo, Emoji,
Helvetica, Arial, sans-serif; }
```

衬线字体：
```
.font-serif {
font-family: Georgia, Cambria, "Times New Roman", Times, serif;
}
```
等宽字体：
```
.font-mono {
font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
```

字体压缩工具
回复 @helloAndroid2 :fontmin:

https://github.com/ecomfe/fontmin

<a id="sec-9"></a>
## 都2022年了，还不知道这几个CSS特性该out了 - 掘金

> 来源：有道云笔记
> 原路径：`CSS/都2022年了，还不知道这几个CSS特性该out了 - 掘金.md`

CSS中总有些属性容易被我们忽视，但是他们却能巧妙的解决我们工作中的一些问题。本文从整理出4个工作中会用到但是你却可能不知道的CSS属性，并举例介绍他们的应用场景及具体使用方法，希望能在以后的工作中帮助到你。
currentColor经常被叫做『第一个CSS变量』。currentColor从字面上理解就是"当前颜色"，即
currentColor的值等于当前元素的color属性值，看上去有些像继承。它可以被应用于任何可以接收color值的属性中，比如border-color, background, box-shadow等。
当在同一个CSS选择器中，需要将同一个颜色值应用到多个接收color值的CSS属性上（例如border-color，
background, box-shadow）时，currentColor就派上用场了。
下面我们来看一个具体例子。
如上所示，对于段落的border和box-shadow属性，我们可以直接这样设置就可以了。
而不用针对每一个class中每一个带有color的属性分别设置一次。
currentColor最好用的是设置内联样式的SVG颜色。当从UI那里拿到icon时通常都带有fill属性（比如fill:
#333），我们可以在使用前将fill属性的值替换成currentColor。这样就可以不用深入到SVG内部（icon ->
path -> fill）去覆盖fill属性了。
浏览器支持情况
Lesser-Known
And Underused CSS Features In 2022
currentColor
```
aside { border-left: 5px solid currentColor; box-shadow: 5px5px10px currentColor;}.success {
color: darkgreen;}.warning { color: darkgoldenrod;}.error { color: darkred;}复制代码
.success { color: darkgreen; border-left: 5px solid darkgreen; box-shadow: 5px5px10px
darkgreen;}.warning { color: darkgoldenrod; border-left: 5px solid darkgoldenrod; box-shadow:
5px5px10px darkgoldenrod;}.error { color: darkred; border-left: 5px solid darkred; box-shadow:
5px5px10px darkred;}复制代码
<pathfill="#bbdb44"d="..."/><pathfill="currentColor"d="..."/>复制代码
/* Before */.icon:hover path { fill: #112244;}/* After */.icon { color: #bbdb44;}.icon:hover {
color: #112244;}复制代码
```
isolation

isolation是CSS3的属性之一，顾名思意就是"隔离"的意思，它可以决定一个元素是否要创建一个新的层叠上下文。它在与  和 属性一起使用时特别有用。mix-blend-mode属性平时开发中也许不会用到，在这里就不做过多介绍了，感兴趣的小伙伴可以看看这篇 。接下来我们来说一说isolation与z-
index结合使用的场景。
我们在写tooltip提示类的通用组件时，通常会设置其z-index属性。在使用的时候，有可能会发生tooltip
的z-index值小于页面中某些元素的z-index值，造成tooltip被遮挡。通常我们会增加tooltip的z-index
值，但是这有可能又会引起其他的元素被遮挡。
让我们来看一个例子。
h1有一个黄色的装饰背景，用伪元素before实现的。为了让装饰背景展示在h1的下面，我们给before设置了
z-index: 1，给h1 span设置了z-index: 2，一切正常。
有一天，在文章中某一个部分加了一个tooltip的提示。正常情况下tooltip的z-index设置为1即可。但是当文章滚动使得tooltip出现在h1旁边的时候，就会发现tooltip会被遮挡。
通常这种问题的解决方案有两种：
但是有没有更好的解决办法呢？isolation来了。它可以创建一个新的层叠上下文或者分组来起到隔离的作
用。
接下来让我们分别在h1和tooltip上使用isolation ： isolate来看看效果。
可以看到这时即使把h1 span的z-index设置为999999也没关系。大功告成。
浏览器支持情况
当我们在做倒计时或者从0开始增加到某一个数值的动画效果时，由于不同数字的宽度不同，在动画执行期间会发生文字不停的左右摆动的现象。
以下图片中的数字使用的是Fira Sans字体，可以看出数字的宽度不同导致第二行可以多容纳下一个字符。
mix-blend-mode z-index
文章
重新设置tooltip和h1 span的z-index值使用 position: relative 为它们各自的父元素设置 z-index 以创建新的层叠上下文
h1 { isolation: isolate; /* ... */}.tooltip { isolation: isolate; /* ... */}复制代码
font-variant-numeric

我们可以通过font-variant-numeric这个属性来解决这个问题。font-variant-numeric属性用来控制数字、
分数和序号标记的替代字形的展示形式。这个属性有很多取值，具体的可以看看 。其中的tabular-nums
就可以使所有的数字都变成一样的宽度。但是有一点需要注意，这些特征受字体的影响，有些字体可能不支
持。
除了tabular-nums取值之外，以下是使用Source Sans 3字体在font-variant-numeric其他几个不同取值下展示情况。
浏览器支持情况
当遇到页面顶部header固定的布局结构时，如果在页面中加入了锚点链接的跳转动作，不做处理的情况下点击锚点链接跳到的位置会被header覆盖一部分区域。
这里
scroll-padding-top

这个时候scroll-padding-top属性就派上用场了。scroll-padding-top属性用来定义滚动窗口的最佳查看区域对于顶部的偏移量。我们可以通过给html设置scroll-padding-top的值为一个固定的高度来解决这个问
题。
具体有关scroll-padding-top的介绍可以点击 。
浏览器支持情况
文章中所描述的几个问题通过其他途径基本上都能得到解决。CSS的世界就是这样，条条大路通罗马，但是我们要是能找到走直线的那一条，就可以留着时间快乐的去摸鱼呀~我正在参与掘金技术社区创作者签约计划招募活动， 。
html { scroll-padding-top: 6rem;}复制代码
这里
总结
点击链接报名投稿
