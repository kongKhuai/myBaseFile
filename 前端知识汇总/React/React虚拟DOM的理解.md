# React虚拟DOM的理解
`Virtual DOM`是一棵以`JavaScript`对象作为基础的树，每一个节点可以将其称为`VNode`，用对象属性来描述节点，实际上它是一层对真实`DOM`的抽象，最终可以通过渲染操作使这棵树映射到真实环境上，简单来说`Virtual DOM`就是一个`Js`对象，是更加轻量级的对`DOM`的描述，用以表示整个文档。

## 描述
在浏览器中构建页面时需要使用`DOM`节点描述整个文档。

```html
<div class="root" name="root">
    <p>1</p>
    <div>11</div>
</div>
```

如果使用`Js`对象去描述上述的节点以及文档，那么便类似于下面的样子。

```javascript
{
    type: "tag",
    tagName: "div",
    attr: {
        className: "root"
        name: "root"
    },
    parent: null,
    children: [{
        type: "tag",
        tagName: "p",
        attr: {},
        parent: {} /* 父节点的引用 */, 
        children: [{
            type: "text",
            tagName: "text",
            parent: {} /* 父节点的引用 */, 
            content: "1"
        }]
    },{
        type: "tag",
        tagName: "div",
        attr: {},
        parent: {} /* 父节点的引用 */, 
        children: [{
            type: "text",
            tagName: "text",
            parent: {} /* 父节点的引用 */, 
            content: "11"
        }]
    }]
}
```

## React中的虚拟DOM
`Virtual DOM`是一种编程概念，在这个概念里，`UI`以一种理想化的，或者说虚拟的表现形式被保存于内存中，并通过如`ReactDOM`等类库使之与真实的`DOM`同步，这一过程叫做协调。这种方式赋予了`React`声明式的`API`，您告诉`React`希望让`UI`是什么状态，`React`就确保`DOM`匹配该状态，这样可以从属性操作、事件处理和手动`DOM`更新这些在构建应用程序时必要的操作中解放出来。  
与其将`Virtual DOM`视为一种技术，不如说它是一种模式，人们提到它时经常是要表达不同的东西。在`React`的世界里，术语`Virtual DOM`通常与`React`元素关联在一起，因为它们都是代表了用户界面的对象，而`React`也使用一个名为`fibers`的内部对象来存放组件树的附加信息，上述二者也被认为是`React`中`Virtual DOM` 实现的一部分。

### React中的虚拟DOM的历史
在之前，`Facebook`是`PHP`大户，所以`React`最开始的灵感就来自于`PHP`。  
在`2004`年这个时候，大家都还在用`PHP`的字符串拼接来开发网站。

```php
$str = "<ul>";
foreach ($talks as $talk) {
  $str += "<li>" . $talk->name . "</li>";
}
$str += "</ul>";
```

这种方式代码写出来不好看不说，还容易造成`XSS`等安全问题。应对方法是对用户的任何输入都进行转义`Escape`，但是如果对字符串进行多次转义，那么反转义的次数也必须是相同的，否则会无法得到原内容，如果又不小心把`HTML`标签给转义了，那么`HTML`标签会直接显示给用户，从而导致很差的用户体验。  
到了`2010`年，为了更加高效的编码，同时也避免转义`HTML`标签的错误，`Facebook`开发了`XHP`。`XHP`是对`PHP`的语法拓展，它允许开发者直接在`PHP`中使用`HTML`标签，而不再使用字符串。

```php
$content = <ul />;
foreach ($talks as $talk) {
  $content->appendChild(<li>{$talk->name}</li>);
}
```

这样的话，所有`HTML`标签都使用不同于`PHP`的语法，我们可以轻易的分辨哪些需要转义哪些不需要转义。不久的后来，`Facebook`的工程师又发现他们还可以创建自定义标签，而且通过组合自定义标签有助于构建大型应用。  
到了`2013`年，前端工程师`Jordan Walke`向他的经理提出了一个大胆的想法：把`XHP`的拓展功能迁移到`Js`中，首要任务是需要一个拓展来让`JS`支持`XML`语法，该拓展称为`JSX`。因为当时由于`Node.js`在`Facebook`已经有很多实践，所以很快就实现了`JSX`。

```jsx
const content = (
  <TalkList>
    {talks.map(talk => <Talk talk={talk} />)}
  </TalkList>
);
```

在这个时候，就有另外一个很棘手的问题，那就是在进行更新的时候，需要去操作`DOM`，传统 `DOM API`细节太多，操作复杂，所以就很容易出现`Bug`，而且代码难以维护。然后就想到了`PHP`时代的更新机制，每当有数据改变时，只需要跳到一个由`PHP`全新渲染的新页面即可。
从开发者的角度来看的话，这种方式开发应用是非常简单的，因为它不需要担心变更，且界面上用户数据改变时所有内容都是同步的。为此`React`提出了一个新的思想，即始终整体刷新页面，当发生前后状态变化时，`React`会自动更新`UI`，让我们从复杂的`UI`操作中解放出来，使我们只需关于状态以及最终`UI`长什么样。这个时候，我只需要关系我的状态(数据是什么)，以及`UI`长什么样(布局)，不再需要关系操作细节。  
这种方式虽然简单粗暴，但是很明显的缺点，就是很慢。另外还有一个问题就是这样无法包含节点的状态，比如它会失去当前聚焦的元素和光标，以及文本选择和页面滚动位置，这些都是页面的当前状态。  
为了解决上面说的问题，对于没有改变的`DOM`节点，让它保持原样不动，仅仅创建并替换变更过的`DOM`节点，这种方式实现了`DOM`节点复用`Reuse`。至此，只要能够识别出哪些节点改变了，那么就可以实现对`DOM`的更新，于是问题就转化为如何比对两个`DOM`的差异。说到对比差异，可能很容易想到版本控制`git`。`DOM`是树形结构，所以`diff`算法必须是针对树形结构的，目前已知的完整树形结构的编辑距离`diff`算法复杂度为`O(n^3)`。但是时间复杂度`O(n^3)`太高了，所以`Facebook`工程师考虑到组件的特殊情况，进行了一些优化与折中，然后将复杂度降低到了`O(n)`。  
`DOM`是复杂的，对它的操作尤其是查询和创建是非常慢非常耗费资源的。看下面的例子，仅创建一个空白的`div`，其实例属性就达到`294`个。

```javascript
// Chrome v84
const div = document.createElement("div");
let m = 0;
for (let k in div) m++;
console.log(m); // 294
```
对于`DOM`这么多属性，其实大部分属性对于做`Diff`是没有任何用处的，所以如果用更轻量级的`Js`对象来代替复杂的`DOM`节点，然后把对`DOM`的`diff`操作转移到`Js`对象，就可以避免大量对`DOM`的查询操作。这个更轻量级的`Js`对象就称为`Virtual DOM`。那么现在的过程就是这样：

* 维护一个使用`Js`对象表示的`Virtual DOM`，与真实`DOM`一一对应。
* 对前后两个`Virtual DOM`做`diff`，生成变更`Mutation`。
* 把变更应用于真实`DOM`，生成最新的真实`DOM`。

可以看出，因为要把变更应用到真实`DOM`上，所以还是避免不了要直接操作`DOM`，但是`React`的`diff`算法会把`DOM`改动次数降到最低。关于`React`中的虚拟`DOM`创建过程可以参考`https://github.com/facebook/react/blob/9198a5cec0936a21a5ba194a22fcbac03eba5d1d/packages/react/src/ReactElement.js#L348`。

### 总结
传统前端的编程方式是命令式的，直接操纵`DOM`，告诉浏览器该怎么干，这样的问题就是，大量的代码被用于操作`DOM`元素，且代码可读性差，可维护性低。`React`的出现，将命令式变成了声明式，摒弃了直接操作`DOM`的细节，只关注数据的变动，`DOM`操作由框架来完成，从而大幅度提升了代码的可读性和可维护性。  
在初期我们可以看到，数据的变动导致整个页面的刷新，这种效率很低，因为可能是局部的数据变化，但是要刷新整个页面，造成了不必要的开销。所以就有了`Diff`过程，将数据变动前后的`DOM`结构先进行比较，找出两者的不同处，然后再对不同之处进行更新渲染。但是由于整个`DOM`结构又太大，所以采用了更轻量级的对`DOM`的描述—虚拟`DOM`。  
不过需要注意的是，虚拟`DOM`和`Diff`算法的出现是为了解决由命令式编程转变为声明式编程、数据驱动后所带来的性能问题的。换句话说，直接操作`DOM`的性能并不会低于虚拟`DOM`和`Diff`算法，甚至还会优于。框架的意义在于为你掩盖底层的`DOM`操作，让你用更声明式的方式来描述你的目的，从而让你的代码更容易维护，没有任何框架可以比纯手动的优化`DOM`操作更快，因为框架的`DOM`操作层需要应对任何上层`API`可能产生的操作，它的实现必须是普适的。

## 虚拟DOM优缺点

### 优点
* `Virtual DOM`在牺牲(牺牲很关键)部分性能的前提下，增加了可维护性，这也是很多框架的通性。
* 实现了对`DOM`的集中化操作，在数据改变时先对虚拟`DOM`进行修改，再反映到真实的`DOM`，用最小的代价来更新`DOM`，提高效率。
* 打开了函数式`UI`编程的大门。
* 可以渲染到`DOM`以外的端，使得框架跨平台，比如`ReactNative`，`React VR`等。
* 可以更好的实现`SSR`，同构渲染等。
* 组件的高度抽象化。

### 缺点
* 首次渲染大量`DOM`时，由于多了一层虚拟`DOM`的计算，会比`innerHTML`插入慢。
* 虚拟`DOM`需要在内存中的维护一份`DOM`的副本，多占用了部分内存。
* 如果虚拟`DOM`大量更改，这是合适的。但是单一的、频繁的更新的话，虚拟`DOM`将会花费更多的时间处理计算的工作。所以如果你有一个`DOM`节点相对较少页面，用虚拟`DOM`，它实际上有可能会更慢，但对于大多数单页面应用，这应该都会更快。



## 参考

```
https://zhuanlan.zhihu.com/p/99973075
https://www.jianshu.com/p/e0a3ac85db5c
https://www.jianshu.com/p/9a1d2750457f
https://github.com/livoras/blog/issues/13
https://juejin.cn/post/6844904165026562056
https://juejin.cn/post/6844903640512086029
https://zh-hans.reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom
```
