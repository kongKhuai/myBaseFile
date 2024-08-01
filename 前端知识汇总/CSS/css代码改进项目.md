# CSS一行代码改进（几乎）每个项目

原创 dev JavaScript 每日一练 _2024年07月30日 08:51_ _福建_

这些一行代码大多数会是CSS规则中的一个声明。在某些情况下，选择器可能不只是一个简单的元素；在其他情况下，我会添加额外的声明作为建议以获得更好的体验，因此使它们不再严格意义上是一行代码——对于这些情况我提前道歉。

这些一行代码中的一些更多是个人选择，并不适用于所有网站（并非每个人都使用表格或表单）。我会简要描述每一个，它们的作用（附带示例图片），以及为什么我喜欢使用它们。请注意，示例图片可能会在前面例子的基础上进行构建。

以下是这些一行代码的作用概述：

1. 限制视口内的内容宽度
    
2. 增加正文文本大小
    
3. 增加文本行之间的间距
    
4. 限制图片宽度
    
5. 限制内容中文本的宽度
    
6. 以更平衡的方式包裹标题
    
7. 表单控件颜色与页面样式匹配
    
8. 易于跟随的表格行
    
9. 表格单元格和标题的间距
    
10. 减少动画和移动
    

限制视口内的内容宽度

`body {     max-width: clamp(320px, 90%, 1000px);     /* 额外建议 */     margin: auto;   }   `

添加这个一行代码将使内容大小占据视口的90%，将其宽度限制在320到1000像素之间（可以随意更新最小和最大值）。

这个改变将自动使您的内容看起来更好看。它将不再是一个庞大的文本块，而是看起来更有结构和组织。如果你还给body添加margin: auto;，内容将在页面上居中。两行代码让内容看起来好多了。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZq0CseR74vdEcFiazpoJsq7KJCFbMsuBt4sKk0fWaNr9vJI5D9ia7fmI9g/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

并排比较变化。左侧（之前）：一大块文本。右侧（之后）：两侧有内边距的文本。仍然很大但有更多空间。

对齐和包含的文本比一大堆文本看起来更好

增加文本大小

`body {     font-size: 1.25rem;   }   `

让我们面对现实：浏览器默认的16px字体大小是小的。虽然这可能是基于我变老的个人观点😅

一个快速的解决方案是增加body中的字体大小。由于级联和浏览器使用的em单位，网页上的所有文本将自动增大。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZqpoFvV5Y61PR97gLBadlzL5d0KzkanTS9ib3TeibINGCnEURBDWibCfmkg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

并排比较。左侧（之前）：带有文本的列。右侧（之后）：带有更大字体的文本列。

更大的文本大小使阅读更容易。

增加行间距

`body {     line-height: 1.5;   }   `

另一个提高可读性和打破可怕的文本墙的偏好是增加段落和内容中行与行之间的间距。我们可以轻松地用line-height属性做到这一点。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZqOI1hcEanLEL6ibDMhEuIzpJvq4dA60Reg6DwQWeedvQnhiaMgVWtUcPw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

并排比较。左侧（之前）：带有文本的列。右侧（之后）：带有文本的列（间距更大）。

行间的空间打破了文本墙和白色的河流。

这个选择（与前两个一起）将显著增加我们页面的垂直大小，但我向你保证文本将更易读，对所有用户更友好。

限制图片大小

`img {     max-width: 100%;   }   `

图片的大小应该大致与它们将占据的空间相当，但有时我们会遇到真正长的图片，导致内容移位并创建水平滚动。

避免这种情况的一种方法是设置最大宽度为100%。虽然这不是一个万无一失的解决方案（边距和内边距可能影响宽度），但在大多数情况下它都能工作。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZqPWekxw8oI4DcCVVHs7hZqVbq3kF2ZJ9u7xGDPsgWbyFdlic6xDs5UnQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

并排比较。左侧（之前）：图片溢出内容大小导致出现滚动条。右侧（之后）：图片调整到内容大小。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZqkTtqNusJwAxSq0ibvehLDJIdazQoyib2vd7rYGjknYsF8JQBfknFtVibg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

防止水平滚动并使图片与文本更好地流动

限制内容中文本的宽度

`p {     max-width: 65ch;   }   `

避免可怕的文本墙和空白河流的另一种策略是应用这种样式，即使与body中的最大宽度结合使用。这可能看起来不必要，有时甚至很奇怪，因为段落会比其他元素更窄。但我喜欢这种对比和较短的行。

60ch或65ch的值在过去对我很有效，但你可以使用不同的值并调整最大宽度以满足你的需求。在你的网页上玩耍和探索它的外观。

并排比较。左侧（之前）：文本占据整个宽度。右侧（之后）：文本占据大部分宽度。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZqZVDAw81RaN9ySFC7XkzxeJLndJqUNC7FcZFiaDxGn6fH5I8wezSS1MA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

将较大的文本块分成较小的块以提高可读性

以更平衡的方式包裹标题

`h1, h2, h3, h4, h5, h6 {     text-wrap: balance;   }   `

标题是网页结构的重要部分，但由于它们的大小较大和内容较短，可能看起来很奇怪。特别是当它们占据多于一行时。一个有帮助的解决方案是使用text-wrap来平衡标题。

虽然balance似乎是text-wrap最流行的值，但它不是唯一的。我们也可以使用pretty，如果需要的话，它会将额外的一个词移到最后一行，而不是平衡所有内容。不幸的是，pretty目前还没有广泛的支持。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZqZVDAw81RaN9ySFC7XkzxeJLndJqUNC7FcZFiaDxGn6fH5I8wezSS1MA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

并排比较。左侧（之前）：一个标题占据两行，第二行只有1个词。右侧（之后）：标题占据宽度相似的两行。

平衡的换行可以改善可见性和可读性

表单控件颜色与页面样式匹配

`body {     accent-color: #080; /* 使用你喜欢的颜色 */   }   `

另一个小变化，虽然没有显著影响，但能让东西看起来更好。直到最近，我们还不能用CSS样式化原生表单控件，只能使用浏览器显示。但情况已经改变。

开发一个完整的组件可能很麻烦，但使用这个一行代码可以设置一个更接近网站其他部分和设计系统的颜色，这是可能的，而且很简单。

并排比较。左侧（之前）：表单控件是默认的蓝色。右侧（之后）：表单控件颜色与标题和链接颜色匹配（绿色）。

正是这些小细节（和颜色）让页面融为一体

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZqjMEY3HZ0G5Ziagr9NjubR85sfic7Dibial4GAzXeniciavzVKyEGL5tqLEbA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

易于跟随的表格行

`:is(tbody, table) > tr:nth-child(odd) {     background: #0001; /* 或者对于深色主题使用 #fff1 */   }   `

我们必须使用表格来显示数据，而不是用于布局。但默认情况下表格很丑，我们不希望数据看起来很丑。特别是，有一件事有助于组织数据并使其更易读，那就是有一个带有交替深浅行的斑马表格。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZqr8Y86vftB87lzjYLMtZE37ic2r32KDFARUSmuCicLaRTREHmLFuVianoA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

上面显示的一行代码使得实现这种样式变得容易。它可以简化为只有tr而不考虑tbody或table父元素，但这也会应用到表格头部，这可能不是我们想要的。这是一个品味问题。

并排比较。左侧（之前）：所有表格行都是白色的。右侧（之后）：偶数表格行略微深色。

更容易水平跟随数据（按行）

表格单元格和标题的间距

`td, th {     padding: 0.5em; /* 或 0.5em 1em... 或任何不为0的值 */   }   `

让表格更易访问和更易读的最后一个变化是通过给表格单元格和标题添加内边距来稍微间隔内容。默认情况下，大多数浏览器没有任何内边距，不同单元格的文本相互接触，使得区分一个单元格开始和另一个结束变得混乱。

我们可以更改内边距值以调整到我们喜欢的大小。然而，避免过度以防止不必要的滚动或太多空白空间。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZqDXoCAic0bwJMlSyL4fJKloTn0VsHIHzhtfu9ZCNVAdwQR740w01z83g/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

并排比较。左侧（之前）：表格单元格文本内容完全在一起。右侧（之后）：表格单元格内容明显与其他表格单元格分开。

更容易水平和垂直跟随数据

减少动画和移动

`@media (prefers-reduced-motion) {     *, *::before, *::after {       animation-duration: 0s !important;       /* 额外建议 */       transition: none !important;       scroll-behavior: auto !important;     }   }   `

好吧，好吧。这段代码远不止一行。它有一个一行版本（通过将动画持续时间设置为零秒来移除动画），但网页上还有其他使元素移动的东西。

通过在prefers-reduced-motion媒体查询中设置这些声明，我们将尊重用户选择减少移动的意愿。这种方法有些激进，因为它移除了所有移动，这可能不一定是用户的意图 - 它是"减少移动"而不是"无移动"。如果适当的话，我们仍然可以根据具体情况保留移动。

并排比较。左侧（之前）：一个图像在网页上移动。右侧（之后）：图像是静态的。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/wIDSOebZK4PbFWiccuA7FZZic8uZE8fVZq8fktNbqia2ibyjMsXfichJCJ9kicgwbE2JiaxbPQmD95dK0RkNmMUAQkrjA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

没有动画？没问题！