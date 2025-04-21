
```
<h3>通过column-count或者column-width这两个属性开启，</h3>

    <h4>

      column-count 将创建指定数量的列，创建的这些列具有弹性的宽度 —

      由浏览器计算出每一列分配多少空间。

    </h4>

    <h4>

      使用 column-width

      设置列宽,浏览器将按照你指定的宽度尽可能多的创建列；任何剩余的空间之后会被现有的列平分。这意味着你可能无法期望得到你指定宽度，除非容器的宽度刚好可以被你指定的宽度除尽

    </h4>

    <code>

      .container { column-count: 3; } .container { column-width: 200px; }</code

    >

    <h4>

      给多列增加样式 Multicol

      创建的列无法单独的设定样式。不存在让单独某一列比其他列更大的方法，同样无法为某一特定的列设置独特的背景色、文本颜色。你有两个机会改变列的样式：使用

      column-gap 改变列间间隙。 用 column-rule

      在列间加入一条分割线。你可以尝试不同的值 —

      该属性接受任何长度单位。现在再加入 column-rule。和你之前遇到的 border

      属性类似， column-rule 是 column-rule-color 和

      column-rule-style的缩写，接受同 border 一样的单位。

    </h4>

    <pre>

        .container {

        column-count: 3;

        column-gap: 20px;

        column-rule: 4px dotted rgb(79, 185, 227);

      }</pre

    >

    <h3>设置 break-inside</h3>

    <h4>

      我们可以使用 CSS Fragmentation

      中声明的属性控制这一特性。这份规范提供了一些属性来控制 multicol

      和多页媒体中的内容拆分、折断。比如，在规则 .card

      上添加属性break-inside，并设值 avoid 。.card

      是标题和文本的容器，我们不想拆开这个盒子。 现阶段，增加旧属性

      page-break-inside: avoid 能够获得更好的浏览器支持。

    </h4>

    <pre>

.card {

        break-inside: avoid;

        page-break-inside: avoid;

        background-color: rgb(207, 232, 220);

        border: 2px solid rgb(79, 185, 227);

        padding: 10px;

        margin: 0 0 1em 0;

      }

      </pre

    >
```