# Vue2

> 共 17 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [vue-router](#sec-1) — 有道云笔记 · `vue/vue2/vue-router.md`
2. [揭秘 Vue.js 九个性能优化技巧](#sec-2) — 有道云笔记 · `vue/vue2/揭秘 Vue.js 九个性能优化技巧.md`
3. [路由懒加载可以让我们的包不需要一次把所有的页面的加载进来，只加载当前页面的路由组件就行](#sec-3) — 有道云笔记 · `vue/vue2/路由懒加载可以让我们的包不需要一次把所有的页面的加载进来，只加载当前页面的路由组件就行.md`
4. [路由监听](#sec-4) — 有道云笔记 · `vue/vue2/路由监听.md`
5. [watch{](#sec-5) — 有道云笔记 · `vue/watch{.md`
6. [数组更新检测](#sec-6) — 有道云笔记 · `vue/数组更新检测.md`
7. [更新模块](#sec-7) — 有道云笔记 · `vue/更新模块.md`
8. [index](#sec-8) — myBaseFile · `vue/index.md`
9. [将element ui 中的指令改写成普通js](#sec-9) — myBaseFile · `vue/vue2笔记/element ui/将element ui 中的指令改写成普通js.md`
10. [滚动条组件](#sec-10) — myBaseFile · `vue/vue2笔记/element ui/滚动条组件.md`
11. [index(2)](#sec-11) — myBaseFile · `vue/vue2笔记/index.md`
12. [统一管理定时器](#sec-12) — myBaseFile · `vue/vue2笔记/mixins/统一管理定时器.md`
13. [🚀 DraggableContainer - 高性能拖动组件](#sec-13) — myBaseFile · `vue/vue2笔记/单拖拽组件/README-DraggableContainer.md`
14. [vue 组件内引入外部在线 js、css](#sec-14) — myBaseFile · `vue/vue2笔记/引入外部jscss.md`
15. [杂货铺](#sec-15) — myBaseFile · `vue/vue2笔记/杂货铺.md`
16. [10个有用的自定义钩子vue.js#夸克#](#sec-16) — 有道云笔记 · `10个有用的自定义钩子vue.js#夸克#.md`
17. [Vue Router 记住页面滚动位置的简单实现](#sec-17) — 有道云笔记 · `Vue Router 记住页面滚动位置的简单实现.md`

---

<a id="sec-1"></a>
## vue-router

> 来源：有道云笔记
> 原路径：`vue/vue2/vue-router.md`

```
computed: {
    routes() { return this.$router.getRoutes() }
}
```

<a id="sec-2"></a>
## 揭秘 Vue.js 九个性能优化技巧

> 来源：有道云笔记
> 原路径：`vue/vue2/揭秘 Vue.js 九个性能优化技巧.md`

2021年01月28日 11:06 ·  阅读 81119
这篇文章主要参考了 Vue.js 核心成员  在 19 年美国的 Vue conf 分享的主题：9
Performance secrets revealed，分享中提到了九个 Vue.js 性能优化的技巧。
我看完他的分享 后，也阅读了相关的 ，在深入了解它的优化原理后，把其中一些优化技巧也应用到了我平时的工作中，取得了相当不错的效果。
这个分享可谓是非常实用了，但是知道和关注的人似乎并不多，到目前为止，该项目也只有可怜的几百个 star。虽然距大佬的分享已经有两年时间，但是其中的优化技巧并没有过时，为了让更多的人了解并学习到其中的实用技巧，我决定对他的分享做二次加工，详细阐述其中的优化原理，并做一定程度的扩展和延伸。
本文主要还是针对 Vue.js 2.x 版本，毕竟接下来一段时间，Vue.js 2.x 还是我们工作中的主流
版本。
我建议你在学习这篇文章的时候可以拉取项目的源码，并且本地运行，查看优化前后的效果差异。
第一个技巧，函数式组件，你可以查看这个 。
优化前的组件代码如下：
优化后的组件代码如下：
揭秘 Vue.js 九个性能优化技巧
Guillaume Chau
PPT 项目源码
Functional components
在线示例
```
<template>
  <div class="cell">
    <div v-if="value" class="on"></div>
    <section v-else class="off"></section>
  </div>
</template>
<script>
export default {
  props: ['value'],
}
</script>
```
复制代码

然后我们在父组件各渲染优化前后的组件 800 个，并在每一帧内部通过修改数据来触发组件的更新，
开启 Chrome 的 Performance 面板记录它们的性能，得到如下结果。
优化前：

优化后：

```
<template functional>
  <div class="cell">
    <div v-if="props.value" class="on"></div>
    <section v-else class="off"></section>
  </div>
</template>
```
复制代码

对比这两张图我们可以看到优化前执行 script 的时间要多于优化后的，而我们知道 JS 引擎是单线程的运行机制，JS 线程会阻塞 UI 线程，所以当脚本执行时间过长，就会阻塞渲染，导致页面卡顿。而优化后的 script 执行时间短，所以它的性能更好。
那么，为什么用函数式组件 JS 的执行时间就变短了呢？这要从函数式组件的实现原理说起了，你可以把它理解成一个函数，它可以根据你传递的上下文数据渲染生成一片 DOM。
函数式组件和普通的对象类型的组件不同，它不会被看作成一个真正的组件，我们知道在 patch 过程中，如果遇到一个节点是组件 vnode，会递归执行子组件的初始化过程；而函数式组件的 render 生成的是普通的 vnode，不会有递归子组件的过程，因此渲染开销会低很多。
因此，函数式组件也不会有状态，不会有响应式数据，生命周期钩子函数这些东西。你可以把它当成把普通组件模板中的一部分 DOM 剥离出来，通过函数的方式渲染出来，是一种在 DOM 层面的复
用。
第二个技巧，子组件拆分，你可以查看这个 。
优化前的组件代码如下：
Child component splitting
在线示例
```
<template>
  <div :style="{ opacity: number / 300 }">
    <div>{{ heavy() }}</div>
  </div>
</template>
<script>
```

优化后的组件代码如下：
```
export default {8
  props: ['number'],9
  methods: {10
    heavy () {11
      const n = 10000012
      let result = 013
      for (let i = 0; i < n; i++) {14
        result += Math.sqrt(Math.cos(Math.sin(42)))15
      }16
      return result17
    }18
  }19
}20
</script>21
```
复制代码22
```
<template>
  <div :style="{ opacity: number / 300 }">
    <ChildComp/>
  </div>
</template>
<script>
export default {
  components: {
    ChildComp: {
      methods: {
        heavy () {
          const n = 10000
          let result = 014
          for (let i = 0; i < n; i++) {15
            result += Math.sqrt(Math.cos(Math.sin(42)))16
          }17
          return result18
        },19
      },20
      render (h) {21
```

然后我们在父组件各渲染优化前后的组件 300 个，并在每一帧内部通过修改数据来触发组件的更新，
开启 Chrome 的 Performance 面板记录它们的性能，得到如下结果。
优化前：

优化后：

```
        return h('div', this.heavy())22
      }23
    }24
  },25
  props: ['number']26
}27
</script>28
```
复制代码29

对比这两张图我们可以看到优化后执行 script 的时间要明显少于优化前的，因此性能体验更好。
那么为什么会有差异呢，我们来看优化前的组件，示例通过一个 heavy 函数模拟了一个耗时的任务，
且这个函数在每次渲染的时候都会执行一次，所以每次组件的渲染都会消耗较长的时间执行
JavaScript。
而优化后的方式是把这个耗时任务 heavy 函数的执行逻辑用子组件 ChildComp 封装了，由于 Vue 的更新是组件粒度的，虽然每一帧都通过数据修改导致了父组件的重新渲染，但是 ChildComp 却不会重新渲染，因为它的内部也没有任何响应式数据的变化。所以优化后的组件不会在每次渲染都执行耗时任务，自然执行的 JavaScript 时间就变少了。
不过针对这个优化的方式我提出了一些不同的看法，详情可以点开这个 ，我认为这个场景下的优化用计算属性要比子组件拆分要好。得益于计算属性自身缓存特性，耗时的逻辑也只会在第一次渲染的时候执行，而且使用计算属性也没有额外渲染子组件的开销。
在实际工作中，使用计算属性是优化性能的场景会有很多，毕竟它也体现了一种空间换时间的优化思
想。
第三个技巧，局部变量，你可以查看这个 。
优化前的组件代码如下：
issue
Local variables
在线示例
```
<template>
  <div :style="{ opacity: start / 300 }">{{ result }}</div>
</template>
<script>
```

优化后的组件代码如下：
```
export default {6
  props: ['start'],7
  computed: {8
    base () {9
      return 4210
    },11
    result () {12
      let result = this.start13
      for (let i = 0; i < 1000; i++) {14
        result += Math.sqrt(Math.cos(Math.sin(this.base))) + this.base * this.base +
```
this.base + this.base * 2 + this.base * 3
```
      }16
      return result17
    },18
  },19
}20
</script>21
```
复制代码22
```
<template>1
  <div :style="{ opacity: start / 300 }">{{ result }}</div>2
</template>3
<script>5
export default {6
  props: ['start'],7
  computed: {8
    base () {9
      return 4210
    },11
    result ({ base, start }) {12
      let result = start13
      for (let i = 0; i < 1000; i++) {14
        result += Math.sqrt(Math.cos(Math.sin(base))) + base * base + base + base * 2
```
+ base * 3
```
      }16
      return result17
    },18
```

然后我们在父组件各渲染优化前后的组件 300 个，并在每一帧内部通过修改数据来触发组件的更新，
开启 Chrome 的 Performance 面板记录它们的性能，得到如下结果。
优化前：

优化后：

```
  },19
}20
</script>21
```
复制代码22

对比这两张图我们可以看到优化后执行 script 的时间要明显少于优化前的，因此性能体验更好。
这里主要是优化前后的组件的计算属性 result 的实现差异，优化前的组件多次在计算过程中访问 this.base，而优化后的组件会在计算前先用局部变量 base，缓存 this.base，后面直接访问 base。
那么为啥这个差异会造成性能上的差异呢，原因是你每次访问 this.base 的时候，由于 this.base 是一个响应式对象，所以会触发它的 getter，进而会执行依赖收集相关逻辑代码。类似的逻辑执行多了，像示例这样，几百次循环更新几百个组件，每个组件触发 computed 重新计算，然后又多次执行依赖收集相关逻辑，性能自然就下降了。
从需求上来说，this.base 执行一次依赖收集就够了，把它的 getter 求值结果返回给局部变量 base，
后续再次访问 base 的时候就不会触发 getter，也不会走依赖收集的逻辑了，性能自然就得到了提升。
这是一个非常实用的性能优化技巧。因为很多人在开发 Vue.js 项目的时候，每当取变量的时候就习惯性直接写 this.xxx 了，因为大部分人并不会注意到访问 this.xxx 背后做的事情。在访问次数不多的时候，性能问题并没有凸显，但是一旦访问次数变多，比如在一个大循环中多次访问，类似示例这种场景，就会产生性能问题了。
我之前给 ZoomUI 的 Table 组件做性能优化的时候，在 render table body 的时候就使用了局部变量的优化技巧，并写了 benchmark 做性能对比：渲染 1000 * 10 的表格，ZoomUI Table 的更新数据重新渲染的性能要比 ElementUI 的 Table 性能提升了近一倍。
第四个技巧，使用 v-show 复用 DOM，你可以查看这个 。
优化前的组件代码如下：
Reuse DOM with v-show
在线示例
<template functional>1

优化后的组件代码如下：
然后我们在父组件各渲染优化前后的组件 200 个，并在每一帧内部通过修改数据来触发组件的更新，
开启 Chrome 的 Performance 面板记录它们的性能，得到如下结果。
优化前：

```
  <div class="cell">
    <div v-if="props.value" class="on">
      <Heavy :n="10000"/>
    </div>
    <section v-else class="off">
      <Heavy :n="10000"/>
    </section>
  </div>
</template>
```
复制代码
```
<template functional>
  <div class="cell">
    <div v-show="props.value" class="on">
      <Heavy :n="10000"/>
    </div>
    <section v-show="!props.value" class="off">
      <Heavy :n="10000"/>
    </section>
  </div>
</template>
```
复制代码

优化后：

对比这两张图我们可以看到优化后执行 script 的时间要明显少于优化前的，因此性能体验更好。
```
优化前后的主要区别是用 v-show 指令替代了 v-if 指令来替代组件的显隐，虽然从表现上看，v-
show 和 v-if 类似，都是控制组件的显隐，但内部实现差距还是很大的。
v-if 指令在编译阶段就会编译成一个三元运算符，条件渲染，比如优化前的组件模板经过编译后生成
```
如下渲染函数：
```
function render() {1

当条件 props.value 的值变化的时候，会触发对应的组件更新，对于 v-if 渲染的节点，由于新旧节
```
点 vnode 不一致，在核心 diff 算法比对过程中，会移除旧的 vnode 节点，创建新的 vnode 节点，那么就会创建新的 Heavy 组件，又会经历 Heavy 组件自身初始化、渲染 vnode、patch 等过程。
因此使用 v-if 每次更新组件都会创建新的 Heavy 子组件，当更新的组件多了，自然就会造成性能压
力。
而当我们使用 v-show 指令，优化后的组件模板经过编译后生成如下渲染函数：
```
  with(this) {
    return _c('div', {
      staticClass: "cell"
    }, [(props.value) ? _c('div', {
      staticClass: "on"
    }, [_c('Heavy', {
      attrs: {
        "n": 100
      }
    })], 1) : _c('section', {
      staticClass: "off"
    }, [_c('Heavy', {
      attrs: {
        "n": 1000
      }
    })], 1)])
  }
}
```
复制代码
```
function render() {
  with(this) {
    return _c('div', {
      staticClass: "cell"
    }, [_c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (props.value),
        expression: "props.value"
      }],
      staticClass: "on"
```

当条件 props.value 的值变化的时候，会触发对应的组件更新，对于 v-show 渲染的节点，由于新旧 vnode 一致，它们只需要一直 patchVnode 即可，那么它又是怎么让 DOM 节点显示和隐藏的呢？
原来在 patchVnode 过程中，内部会对执行 v-show 指令对应的钩子函数 update，然后它会根据 v-
show 指令绑定的值来设置它作用的 DOM 元素的 style.display 的值控制显隐。
```
因此相比于 v-if 不断删除和创建函数新的 DOM，v-show 仅仅是在更新现有 DOM 的显隐值，所
以 v-show 的开销要比 v-if 小的多，当其内部 DOM 结构越复杂，性能的差异就会越大。
但是 v-show 相比于 v-if 的性能优势是在组件的更新阶段，如果仅仅是在初始化阶段，v-if 性能还要
```
高于 v-show，原因是在于它仅仅会渲染一个分支，而 v-show 把两个分支都渲染了，通过 style.display 来控制对应 DOM 的显隐。
在使用 v-show 的时候，所有分支内部的组件都会渲染，对应的生命周期钩子函数都会执行，而使用 v-
if 的时候，没有命中的分支内部的组件是不会渲染的，对应的生命周期钩子函数都不会执行。
因此你要搞清楚它们的原理以及差异，才能在不同的场景使用适合的指令。
第五个技巧，使用 KeepAlive 组件缓存 DOM，你可以查看这个 。
优化前的组件代码如下：
```
    }, [_c('Heavy', {13
      attrs: {14
        "n": 1000015
      }16
    })], 1), _c('section', {17
      directives: [{18
        name: "show",19
        rawName: "v-show",20
        value: (!props.value),21
        expression: "!props.value"22
      }],23
      staticClass: "off"24
    }, [_c('Heavy', {25
      attrs: {26
        "n": 1000027
      }28
    })], 1)])29
  }30
}31
```
复制代码32
KeepAlive
在线示例

优化后的组件代码如下：
我们点击按钮在 Simple page 和 Heavy Page 之间切换，会渲染不同的视图，其中 Heavy Page 的渲染非常耗时。我们开启 Chrome 的 Performance 面板记录它们的性能，然后分别在优化前后执行如上的操作，会得到如下结果。
优化前：

```
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
```
复制代码
```
<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
```
复制代码

优化后：

对比这两张图我们可以看到优化后执行 script 的时间要明显少于优化前的，因此性能体验更好。
在非优化场景下，我们每次点击按钮切换路由视图，都会重新渲染一次组件，渲染组件就会经过组件初始化，render、patch 等过程，如果组件比较复杂，或者嵌套较深，那么整个渲染耗时就会很长。
而在使用 KeepAlive 后，被 KeepAlive 包裹的组件在经过第一次渲染后，的 vnode 以及 DOM 都会被缓存起来，然后再下一次再次渲染该组件的时候，直接从缓存中拿到对应的 vnode 和 DOM，然后渲染，并不需要再走一次组件初始化，render 和 patch 等一系列流程，减少了 script 的执行时间，性能
更好。

但是使用 KeepAlive 组件并非没有成本，因为它会占用更多的内存去做缓存，这是一种典型的空间换时间优化思想的应用。
第六个技巧，使用 Deferred 组件延时分批渲染组件，你可以查看这个 。
优化前的组件代码如下：
优化后的组件代码如下：
Deferred features
在线示例
```
<template>
  <div class="deferred-off">
    <VueIcon icon="fitness_center" class="gigantic"/>
    <h2>I'm an heavy page</h2>
    <Heavy v-for="n in 8" :key="n"/>
    <Heavy class="super-heavy" :n="9999999"/>
  </div>
</template>
```
复制代码
```
<template>
  <div class="deferred-on">
    <VueIcon icon="fitness_center" class="gigantic"/>
    <h2>I'm an heavy page</h2>
    <template v-if="defer(2)">
      <Heavy v-for="n in 8" :key="n"/>
    </template>
    <Heavy v-if="defer(3)" class="super-heavy" :n="9999999"/>
  </div>
</template>
<script>
import Defer from '@/mixins/Defer'
```

我们点击按钮在 Simple page 和 Heavy Page 之间切换，会渲染不同的视图，其中 Heavy Page 的渲染非常耗时。我们开启 Chrome 的 Performance 面板记录它们的性能，然后分别在优化前后执行如上的操作，会得到如下结果。
优化前：

```
export default {18
  mixins: [19
    Defer(),20
  ],21
}22
</script>23
```
复制代码24

优化后：

对比这两张图我们可以发现，优化前当我们从 Simple Page 切到 Heavy Page 的时候，在一次
Render 接近结尾的时候，页面渲染的仍然是 Simple Page，会给人一种页面卡顿的感觉。而优化后当我们从 Simple Page 切到 Heavy Page 的时候，在一次 Render 靠前的位置页面就已经渲染了
Heavy Page 了，并且 Heavy Page 是渐进式渲染出来的。
优化前后的差距主要是后者使用了 Defer 这个 mixin，那么它具体是怎么工作的，我们来一探究竟：
export default function (count = 10) {1

Defer 的主要思想就是把一个组件的一次渲染拆成多次，它内部维护了 displayPriority 变量，然后在通过 requestAnimationFrame 在每一帧渲染的时候自增，最多加到 count。然后使用 Defer mixin 的组
件内部就可以通过 v-if="defer(xxx)" 的方式来控制在 displayPriority 增加到 xxx 的时候渲染某些区
块了。
当你有渲染耗时的组件，使用 Deferred 做渐进式渲染是不错的注意，它能避免一次 render 由于 JS 执行时间过长导致渲染卡住的现象。
```
  return {
    data () {
      return {
        displayPriority:
      }
    },
    mounted () {
      this.runDisplayPriority()
    },
    methods: {
      runDisplayPriority () {
        const step = () => {
          requestAnimationFrame(() => {
            this.displayPriority++
            if (this.displayPriority < count) {
              step()
            }
          })
        }
        step()
      },
      defer (priority) {
        return this.displayPriority >= priority
      }
    }
  }
}
```
复制代码

第七个技巧，使用 Time slicing 时间片切割技术，你可以查看这个 。
优化前的代码如下：
优化后的代码如下：
我们先通过点击 Genterate items 按钮创建 10000 条假数据，然后分别在开启和关闭 Time-slicing 的情况下点击 Commit items 按钮提交数据，开启 Chrome 的 Performance 面板记录它们的性能，会得到如下结果。
优化前：

Time slicing
在线示例
```
fetchItems ({ commit }, { items }) {
  commit('clearItems')
  commit('addItems', items)
}
```
复制代码
```
fetchItems ({ commit }, { items, splitCount }) {
  commit('clearItems')
  const queue = new JobQueue()
```
  splitArray(items, splitCount).forEach(
```
    chunk => queue.addJob(done => {
      // 分时间片提交数据
      requestAnimationFrame(() => {
        commit('addItems', chunk)
        done()
      })
    })
```
  )
  await queue.start()
}
复制代码

优化后：

对比这两张图我们可以发现，优化前总的 script 执行时间要比优化后的还要少一些，但是从实际的观感上看，优化前点击提交按钮，页面会卡死 1.2 秒左右，在优化后，页面不会完全卡死，但仍然会有渲染卡顿的感觉。
那么为什么在优化前页面会卡死呢？因为一次性提交的数据过多，内部 JS 执行时间过长，阻塞了 UI
线程，导致页面卡死。
优化后，页面仍有卡顿，是因为我们拆分数据的粒度是 1000 条，这种情况下，重新渲染组件仍然有压力，我们观察 fps 只有十几，会有卡顿感。通常只要让页面的 fps 达到 60，页面就会非常流畅，如果我们把数据拆分粒度变成 100 条，基本上 fps 能达到 50 以上，虽然页面渲染变流畅了，但是完成
10000 条数据总的提交时间还是变长了。
使用 Time slicing 技术可以避免页面卡死，通常我们在这种耗时任务处理的时候会加一个 loading 效果，在这个示例中，我们可以开启 loading animation，然后提交数据。对比发现，优化前由于一次性提交数据过多，JS 一直长时间运行，阻塞 UI 线程，这个 loading 动画是不会展示的，而优化后，由于我们拆成多个时间片去提交数据，单次 JS 运行时间变短了，这样 loading 动画就有机会展示了。
这里要注意的一点，虽然我们拆时间片使用了 requestAnimationFrame API，但是使用 requestAnimationFrame 本身是不能保证满帧运行的，requestAnimationFrame 保证的是在浏览器每一次重绘后会执行对应传入的回调函数，想要保证满帧，只能让 JS 在一个 Tick 内的运行时间不超过 17ms。
Non-reactive data

第八个技巧，使用 Non-reactive data 非响应式数据，你可以查看这个 。
优化前代码如下：
优化后代码如下：
还是前面的示例，我们先通过点击 Genterate items 按钮创建 10000 条假数据，然后分别在开启和关闭 Partial reactivity 的情况下点击 Commit items 按钮提交数据，开启 Chrome 的 Performance 面板记录它们的性能，会得到如下结果。
优化前：

在线示例
```
const data = items.map(
  item => ({
    id: uid++,
    data: item,
    vote:
  })
```
)
复制代码
```
const data = items.map(
  item => optimizeItem(item)
```
)
```
function optimizeItem (item) {
  const itemData = {
    id: uid++,
    vote:
  }
  Object.defineProperty(itemData, 'data', {
    // Mark as non-reactive
    configurable: false,
    value: item
  })
  return itemData
}
```
复制代码

优化后：

对比这两张图我们可以看到优化后执行 script 的时间要明显少于优化前的，因此性能体验更好。
之所以有这种差异，是因为内部提交的数据的时候，会默认把新提交的数据也定义成响应式，如果数据的子属性是对象形式，还会递归让子属性也变成响应式，因此当提交数据很多的时候，这个过程就变成了一个耗时过程。
而优化后我们把新提交的数据中的对象属性 data 手动变成了 configurable 为 false，这样内部在 walk 时通过 Object.keys(obj) 获取对象属性数组会忽略 data，也就不会为 data 这个属

性 defineReactive，由于 data 指向的是一个对象，这样也就会减少递归响应式的逻辑，相当于减少了这部分的性能损耗。数据量越大，这种优化的效果就会更明显。
其实类似这种优化的方式还有很多，比如我们在组件中定义的一些数据，也不一定都要在 data 中定义。有些数据我们并不是用在模板中，也不需要监听它的变化，只是想在组件的上下文中共享这个数据，这个时候我们可以仅仅把这个数据挂载到组件实例 this 上，例如：
这样我们就可以在组件上下文中共享 scroll 对象了，尽管它不是一个响应式对象。
第九个技巧，使用 Virtual scrolling 虚拟滚动组件，你可以查看这个 。
优化前组件的代码如下：
优化后代码如下：
```
export default {
  created() {
    this.scroll = null
  },
  mounted() {
    this.scroll = new BScroll(this.$el)
  }
}
```
复制代码
Virtual scrolling
在线示例
```
<div class="items no-v">
  <FetchItemViewFunctional
    v-for="item of items"
    :key="item.id"
    :item="item"
    @vote="voteItem(item)"
  />
</div>
```
复制代码
```
<recycle-scroller
  class="items"
```
  :items="items"

还是前面的示例，我们需要开启 View list，然后点击 Genterate items 按钮创建 10000 条假数据
（注意，线上示例最多只能创建 1000 条数据，实际上 1000 条数据并不能很好地体现优化的效果，所以我修改了源码的限制，本地运行，创建了 10000 条数据），然后分别在 Unoptimized 和 RecycleScroller 的情况下点击 Commit items 按钮提交数据，滚动页面，开启
Chrome 的 Performance 面板记录它们的性能，会得到如下结果。
优化前：

优化后：

对比这两张图我们发现，在非优化的情况下，10000 条数据在滚动情况下 fps 只有个位数，在非滚动情况下也就十几，原因是非优化场景下渲染的 DOM 太多，渲染本身的压力很大。优化后，即使
10000 条数据，在滚动情况下的 fps 也能有 30 多，在非滚动情况下可以达到 60 满帧。
之所以有这个差异，是因为虚拟滚动的实现方式，是只渲染视口内的 DOM，这样总共渲染的 DOM
数量就很少了，自然性能就会好很多。
虚拟滚动组件也是  写的，感兴趣的同学可以去研究它的 。它的基本原理就是监听滚动事件，动态更新需要显示的 DOM 元素，计算出它们在视图中的位移。
虚拟滚动组件也并非没有成本，因为它需要在滚动的过程中实时去计算，所以会有一定的 script 执行的成本。因此如果列表的数据量不是很大的情况，我们使用普通的滚动就足够了。
  :item-size="24"
```
>
  <template v-slot="{ item }">
    <FetchItemView
      :item="item"
      @vote="voteItem(item)"
    />
  </template>
</recycle-scroller>
```
复制代码
Guillaume Chau 源码实现

<a id="sec-3"></a>
## 路由懒加载可以让我们的包不需要一次把所有的页面的加载进来，只加载当前页面的路由组件就行

> 来源：有道云笔记
> 原路径：`vue/vue2/路由懒加载可以让我们的包不需要一次把所有的页面的加载进来，只加载当前页面的路由组件就行.md`

路由懒加载可以让我们的包不需要一次把所有的页面的加载进来，只加载当前页面的路由组件就行。
```
举个 🌰 ，如果这样写，加载的时候会全部都加载进来。 const router = new VueRouter({ routes:[ {
path: '/', name: 'Home', component: Home }, { path: '/about', name: 'About', component:
About } ] }) 所以，应该避免上面的写法，尽量使用懒加载 懒加载写法,结合webpack的import食用
const router = new VueRouter({ routes:[ { path: '/', name: 'Home', component: () => import(/*
webpackChunkName: "home" */ '../views/Home.vue') }, { path: '/about', name: 'About',
component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') } ] }) 你是否
```
还记得有一个叫Object.freeze的方法？ 应该所有同学都知道，vue初始化的时候会将data里面的数据都搞成响应式数据吧。但是，我们在写业务逻辑的时候会有些数据一初始化就永远不会改变，它根本就不需要被vue做成响应式数据，因此我们应该将这些不用改变的数据通过Object.freeze方法冻结
```
它，避免vue初始化的时候，做一些无用的操作。 🌰  export default { data:()=>({
list:Object.freeze([{title:'我永远不需要改变，我不需要响应式'}]) }) } 异步组件那么强，你是不是没用
```
过？ 异步组件可以让我们在需要一些组件时才将它加载进来，而不是一初始化就加载进来，这跟路由
```
懒加载时一个概念。 🌰  export default { components:{ AsyncComponent:()=>import(/*
webpackChunkName: "AsyncComponent" */ './Async') } } 首次加载的包是不包含改组件代码的
```
image.png 当点击触发某种行为引进的包是这样的 image.png 异步组件还有一种比较完善的写法 🌰
```
export default { components:{ AsyncComponent:()=>({ component:import(/*
webpackChunkName: "AsyncComponent" */ './Async'), delay:200, // 延迟几毫秒，默认200
timeout:3000, // 加载几毫米之后就超时，触发error组件 loading:LoadingComponent, // 组件未加
载回来前显示 error:ErrorComponent // 组件超时时显示 }) } } 你是不是还在computed中使用this？
```
我猜还有很多同学，在computed属性中通过this.xxx去拿data里面的数据，和methods里面的方法吧，或许还会通过this.$store去拿vuex的state,和commit等，甚至，还会通过this.$route去获取路由里面的数据吧。其实，我们可以避免这些丑陋的this,它甚至会给我们带来看不见的性能问题。实现
```
上，我们通过this能访问到的数据，在computed的第一个参数上都能结构出来。 🌰  export default
{ haha({$attrs,$route,$store,$listeners,$ref}){ // 还能结构很多属性，可自行打印康康 return } }
```

想要在父组件控制一个子组件的显示隐藏，是不是还在传一个prop和一个自定义方法，这样会很麻烦，不妨试一试sync修饰符。
🌰
```
// 父组件 template> <div> <Toggle :show.sync = 'show'></Toggle> </div> </template> //Toggle 组件 <template>
<div> <div v-if="show"> 展示和隐藏组件 </div> <button @click="test">隐藏组件</button> </div> </template>
<script> export default { props:['show'], methods: { test(){ this.$emit('update:show',false) } } } </script>
```

$attr和$listeners让你封装组件如鱼得水！

$attr和$listeners可能很多同学没怎么去使用，其实它们让我们对一些组件库的组件二次封装，非常好
用的。
简单介绍一下它们两个：
$attr:如果一个组件不但传了prop需要的属性，还传了prop之外的其他属性，那么这些属性都会被收集到$attr里面。
$listeners：如果一个组件传了自定义事件，但子组件没有通过emit触发，那么这些自定义方法都会被收集到$listeners里面。
这里举一个对ElementUI的Tabel组件简单的二次封装的 🌰
```
<el-table v-bind="$attrs" v-on="$listeners"> <template v-for="item in column"> <el-table-column v-bind="item" />
</template> </el-table> <script> export default { props:{ column:{ type:Array, required:true } } } <script>
```

想在一个自定义的Input组件上使用v-model，那么就要在子组件，介绍一个value，和触发input事件，
v-model的默认语法糖就是这两个东西的组合。
🌰
```
// 父组件 <template> <div> <CustomInput v-model='msg' /> </div> </template> //CustomInput <template> <div>
<input type="text" :value="value" @input="test"> </div> </template> <script> export default { props:['value'],
methods: { test(e){ this.$emit('input',e.target.value) } }, } </script>
```
但是，如果组件里面不是input,而是一个checkbox或者一个radio呢?我不想接受一个value和input事件，我想接收一个更加语义化的checked和change事件，那该怎么办？
🌰
```
// 父组件不需改变 ... //CustomInput <template> <div> <input type="checkbox" :checked="checked" @change="test">
</div> </template> <script> props:['checked'], model:{ props:'checked', event:'change' }, methods: { test(e){
this.$emit('change',e.target.checked) } } } </script>
```
你还在用浏览器的scrollTop滚动你的页面吗？
有些时候我们在操作一下页面的滚动行为，那么我们第一时间就会想到scrollTop。其实我们还有第二个选择就是VueRouter给我们提供的scrollBehavior钩子。
🌰
```
const router = new VueRouter({ routes:[...] , scrollBehavior(to,from,position){ // position参数可自行打印康康，点击浏览
器左右箭头会触发 return{ // 这里可以返回很多参数，下面简单列就几个，详情自己康康官网 x:100, y:100, selector:#app,
offset:200, //等等 } } })
```

<a id="sec-4"></a>
## 路由监听

> 来源：有道云笔记
> 原路径：`vue/vue2/路由监听.md`

路由监听方式1：  通过  watch 进行监听
```
// 方式 1 、监听路由  $route 变化
export default{
    watch: {
        $route(to, from){
            console.log(' 路由变化了 ')
            console.log(' 当前页面路由： ' + to);
            console.log(' 上一个路由： ' + from);
        },
    }
}
// 方式 2 、监听路由  $route 变化 , 使用 handler 函数
export default{
    watch: {
        '$route': { // $route 可以用引号，也可以不用引号
            handler(to, from){
            console.log(' 路由变化了 ')
            console.log(' 当前页面路由： ' + to);
            console.log(' 上一个路由： ' + from);
            },
            deep: true, // 深度监听
            immediate: true, // 第一次初始化渲染就可以监听到
        }
    }
}
// 方式 3 、监听路由  $route 变化 , 触发 methods 里的方法
export default{
    watch: {
        '$route': 'initData'
    },
    methods: {
        initData(){
            console.log(' 路由变化了 ')
        }
    }

}38
// 方式 4 、监听路由的  path 变化40
export default{41
    watch: {42
        '$route.path'(toPath, fromPath){43
            console.log(' 路由变化了 ')44
            console.log(' 当前页面路由地址： ' + toPath)45
            console.log(' 上一个路由地址： ' + fromPath)46
         },47
    }48
}49
// 方式 5 、监听路由的  path 变化 , 使用 handler 函数51
export default{52
    watch: {53
        '$route.path': {54
            handler(toPath, fromPath){55
                console.log(' 路由变化了 ')56
                console.log(' 当前页面路由地址： ' + toPath)57
                console.log(' 上一个路由地址： ' + fromPath)58
            },59
            deep: true, // 深度监听60
            immediate: true, // 第一次初始化渲染就可以监听到61
        }62
    }63
}64
// 方式 6 、监听路由的  path 变化 , 触发 methods 里的方法66
export default{67
    watch: {68
        '$route.path': 'initData'69
    },70
    methods: {71
        initData(){72
            console.log(' 路由变化了 ')73
        }74
    }75
}76
```

123456789101112131415161718192021222324252627282930313233343536373839404142434445464748
495051525354555657585960616263646566676869707172737475
路由监听方式2：通过钩子函数  beforeRouteEnter 、 beforeRouteUpdate 、 beforeRouteLeave 进行监听78
```
export default{79
    beforeRouteEnter(to, from, next){80
        // 渲染该组件前调用这个钩子，因此组件还未被创建，不能获取 this81
        console.log(this) // 结果为： undefined82
        console.log('beforeRouteEnter')83
        next()84
    },85
    beforeRouteUpdate(to, from, next){86
        // 这个组件是被复用的时候调用，比如带有动态参数的路由跳转： /foo/11 跳转到  /foo/1287
        console.log(this) // 可以访问 this88
        console.log('beforeRouteUpdate')89
        next()90
    },91
    beforeRouteLeave(to, from, next){92
        // 导航离开当前路由的时候被调用， this 可以被访问到93
        console.log(this) // 可以访问 this94
        console.log('beforeRouteLeave')95
        next()96
    },97
}98
```
123456789101112131415161718192099
路由监听方式3：全局路由监听  this.$router.beforeEach100
```
// 方式 1 、在 App.vue 的 create 中进行全局路由监听101
export default  {102
    name:  'App',103
    created() {104
        this.$router.beforeEach((to, from, next) => {105
            console.log(to);106
            console.log(from);107
            next()108
        })109
    }110
}111
// 方式 2 、在路由文件（ /router/index.js ）中进行全局路由监听113
import Vue from 'vue'114
import Router from 'vue-router'115
```

Vue.use(Router)116
```
let routes = [118
     {119
       path: '/login',120
       component: resolve => require(['@/views/login'], resolve),121
     },122
]123
let router = new Router({125
    mode: 'history', // 去掉  url 中的  #126
    scrollBehavior: () => ({ y: 0 }),127
    base: process.env.VUE_APP_BASE_DOMAIN,128
    routes,129
})130
router.beforeEach((to, from, next) => {132
    console.log(to);133
    console.log(from);134
    next()135
})136
export {138
    routes139
    router140
}141
```

<a id="sec-5"></a>
## watch{

> 来源：有道云笔记
> 原路径：`vue/watch{.md`

<a id="sec-6"></a>
## 数组更新检测

> 来源：有道云笔记
> 原路径：`vue/数组更新检测.md`

变异方法
Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：
```
你打开控制台，然后用前面例子的  items 数组调用变异方法：example1.items.push({ message: 'Baz'
}) 。
```
替换数组
变异方法  (mutation method) ，顾名思义，会改变被这些方法调用的原始数组。相比之下，也有非变异  (non-mutating method) 方法，例如：filter(), concat() 和  slice() 。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组：
你可能认为这将导致  Vue 丢弃现有  DOM 并重新渲染整个列表。幸运的是，事实并非如此。 Vue 为了使得  DOM 元素得到最大范围的重用而实现了一些智能的、启发式的方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。
注意事项
由于  JavaScript 的限制， Vue 不能检测以下变动的数组：
为了解决第一类问题，以下两种方式都可以实现和  vm.items[indexOfItem] = newValue 相同的效果，同时
也将触发状态更新：
为了解决第二类问题，你可以使用  splice：
对象更改检测注意事项
```
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
example1.items = example1.items.filter(function (item) {
return item.message.match(/Foo/)
})
当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
```
当你修改数组的长度时，例如：vm.items.length = newLength
```
// Vue.set
Vue.set(example1.items, indexOfItem, newValue)
// Array.prototype.splice
example1.items.splice(indexOfItem, 1, newValue)
example1.items.splice(newLength)
```
1.
2.

还是由于  JavaScript 的限制， Vue 不能检测对象属性的添加或删除：
对于已经创建的实例， Vue 不能动态添加根级别的响应式属性。但是，可以使用  Vue.set(object, key,
value) 方法向嵌套对象添加响应式属性。例如，对于：
你可以添加一个新的  age 属性到嵌套的  userProfile 对象：
你还可以使用  vm.$set 实例方法，它只是全局  Vue.set 的别名：
有时你可能需要为已有对象赋予多个新属性，比如使用  Object.assign() 或  _.extend()。在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，不要像这
样：
你应该这样做：

```
var vm = new Vue({
data: {
```
a: 1
```
}
})
// `vm.a` 现在是响应式的
```

vm.b = 2
```
// `vm.b` 不是响应式的
var vm = new Vue({
data: {
userProfile: {
```
name: 'Anika'
```
}
}
})
Vue.set(vm.userProfile, 'age', 27)
this.$set(this.userProfile, 'age', 27)
Object.assign(this.userProfile, {
```
age: 27,
favoriteColor: 'Vue Green'
```
})
this.userProfile = Object.assign({}, this.userProfile, {
```
age: 27,
favoriteColor: 'Vue Green'
})

<a id="sec-7"></a>
## 更新模块

> 来源：有道云笔记
> 原路径：`vue/更新模块.md`

更新模块使用 npm update 指令。
更新模块只能往后面版本更新，不能往老的版本回滚更新。
比如先安装了 lodash 模块 3.9.* 版本，可以往后更新到 3.10.* 版本，但是不能往前更新回 3.8.* 版
本。
更新模块只能更新到小版本号最新的那个版本，不能更新大版本号。
一个模块的版本号由三部分组成：大版本号.小版本号.次版本号。
如 lodash 模块的某个版本 3.9.1，其中：
3 是大版本号
9 是小版本号
1 是次版本号
使用 $ npm update lodash 只能将 3.9.1 更新到小版本号最大的那个版本，这里是 3.10.1，而不能更新到 4.* 版本。这一点要特别特别特别的注意。
会更新到小版本号最新的那个版本，但不会更新到大版本号。
$ npm update lodash
更新模块的同时将更新信息记录到 package.json 文件中
$ npm update lodash --save
就算指定版本，也只能更新到小版本号最新的那个版本，对大版本号不起作用比如 lodash 的版本号有：3.9.1、3.10.1、4.13.1
当前已经安装的 lodash 版本是 3.9.1
$ npm update lodash@4.13.1 --save
此时由于对大版本号进行更新，结果没有任何响应，依然是 3.9.1 版本。
$ npm update lodash@3.10.* --save
此时并没有更改大版本号，更新结果为 lodash 的版本变成了 3.10.1 版本。

作者：yichen_china
链接：https://www.jianshu.com/p/9398a3586ddc
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
更新模块注意事项
不带参数的更新模块
--save 参数
指定更新的版本
1.
1.
1.
1.

<a id="sec-8"></a>
## index

> 来源：myBaseFile
> 原路径：`vue/index.md`

#### 收集
vue-drag-resize 拖拽

这是一个有点变态的抠图神器！
抠图地址：ifoto.ai

超轻量级vue3指令库。https://github.com/zero-one-code/vue-default-page前端vue组件vue3

汉字笔顺
Hanzi Writer
 npm i hanzi-writer https://chanind.github.io/hanzi-writer
BV1Sf421D7Gb未经作者授权禁止转载r制作不易，喜欢的话，点个赞啦~https://codepen.io/siwuxie动画学习杨幂狐妖小红娘网页涂山红红

用于编程学习和编程教学并支持多语言(Python/C++/Js/Java)的在线代码可视化工具使用C++单链表演示,可视化效果工具地址:https://pythontutor.com

新文章：“做了个纯前端JPG/PNG尺寸缩放+压缩的在线工具” - https://www.zhangxinxu.com/wordpress/2023/09/js-jpg-png-compress-tinyimg-mini/ （地址复制见评论，记得删掉最后的空格） 相比于tinypng，我这个工具还自带尺寸设置功能，同时还可以控制压缩率，指定压缩格式，纯前端实现，高性能高效率。
https://www.zhangxinxu.com/wordpress/2023/09/js-jpg-png-compress-tinyimg-mini/​

1.图像转矢量网站 https://vectorizer.ai/
2.免费抠图软件 https://pixian.ai/
3.AI logo设计 https://www.x-design.com/logo-design
4.ARC实验室 https://arc.tencent.com/zh/ai-demos/faceRestoration
5.在线文件批量重命名工具 https://webrename.cn/
https://www.ainavpro.com/
1.AI扩展图片https://clipdrop.co/uncrop
2.AI模特试衣https://www.x-design.com/?channel=10017
3.AI文本转3Dhttps://www.meshy.ai/
4.AI人声分离https://vocalremover.org/zh/
5.AI黑白照上色https://palette.fm/

置顶]免费可商业插画网站分享
https://sapiens.ui8.net/6f3c3c2
https://www.streamlinehq.com/illustrations/milano?
search=&icon=ico WvoJtQkoOlfeuw51
https://products-Is-graphics.b-cdn.net/wrrooom/ #download ​

[置顶]设计师审美提升网站分享
https://anacuna.com
http://www.another-lab.com/projects/index.htm
https://twomuch.studio/projects ​

使图片变清晰的网站，它们分别是upscale、clip job和replicate。

今天来分享国外 CSS 大佬使用纯 CSS 制作的 580 多个 Loading 效果。网址：https://css-loaders.com/

``` javascript
let list  = document.querySelectorAll('.gpItemContent')
 for (var i = 0; i < list.length ; i++) {
            list[i].addEventListener('click', function() {
                setTimeout(()=>{
                    console.log(dialogContent.innerText.replace(/[\r\n]/g, '\n'))
                },1000)
            });
        }
```

最新版李跳跳：https://pan.uhw.cc/s/W0Td
规则大全：https://pan.uhw.cc/s/jQF5

Fiddler
https://www.telerik.com/fiddler
WireShark
https://www.wireshark.org/
BurpSuite
https://portswigger.net/burp
浏览器F12
浏览器内按F12
Srsniffer
抓包

[置顶]免费三维模型库：https://studio.morflax.com/ ​

BV1NF411D71Y未经作者授权禁止转载r如果觉得好用一定要三联支持哦！下载地址：https://wwpg.lanzouq.com/b01rb1vhe密码:7gx7技术宅软件学习神器软件推荐经验分享百度文库文库免费下载校园学习百度文库免费下载

vue3 架构树组件
Demo 演示地址：http://www.longstudy.club/vue-okr-tree-doc/index.html
github 地址：https://github.com/qq449245884/vue-okr-tree

<a id="sec-9"></a>
## 将element ui 中的指令改写成普通js

> 来源：myBaseFile
> 原路径：`vue/vue2笔记/element ui/将element ui 中的指令改写成普通js.md`

#### 问题：

>这个是elementui的点击元素外的监听自定义指令，我的项目是是用内部路径引入的vue。js，不能使用导入的方法引入这个指令，如何改写成一个单独的js可以让我方便使用

``` 正常使用
<div v-clickoutside="handleClickOutside"></div>

import Clickoutside from 'element-ui/src/utils/clickoutside'
export default {
    directives: { Clickoutside },
    methods: {
	 handleClickOutside() {}
	}
 }

```
==指令源代码==
```
import Vue from 'vue';
import { on } from 'element-ui/src/utils/dom';

const nodeList = [];
const ctx = '@@clickoutsideContext';

let startClick;
let seed = 0;

!Vue.prototype.$isServer && on(document, 'mousedown', e => (startClick = e));

!Vue.prototype.$isServer && on(document, 'mouseup', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
});

function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &&
      (vnode.context.popperElm.contains(mouseup.target) ||
      vnode.context.popperElm.contains(mousedown.target)))) return;

    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  unbind(el) {
    let len = nodeList.length;

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};

```
##### 方式1 改成插件

```

// clickOutside.js
(function (Vue) {
  const nodeList = [];
  const ctx = '@@clickoutsideContext';

  let startClick;
  let seed = 0;

  function on(element, event, handler) {
    element.addEventListener(event, handler);
  }

  if (!Vue.prototype.$isServer) {
    on(document, 'mousedown', e => (startClick = e));
    on(document, 'mouseup', e => {
      nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
    });
  }

  function createDocumentHandler(el, binding, vnode) {
    return function (mouseup = {}, mousedown = {}) {
      if (!vnode ||
       !vnode.context ||
       !mouseup.target ||
       !mousedown.target ||
        el.contains(mouseup.target) ||
        el.contains(mousedown.target) ||
        el === mouseup.target ||
        (vnode.context.popperElm &&
          (vnode.context.popperElm.contains(mouseup.target) ||
            vnode.context.popperElm.contains(mousedown.target)))) return;

      if (binding.expression &&
        el[ctx].methodName &&
        vnode.context[el[ctx].methodName]) {
        vnode.context[el[ctx].methodName]();
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn();
      }
    };
  }

  const clickOutside = {
    install(Vue) {
      Vue.directive('element-clickoutside', {
        bind(el, binding, vnode) {
          nodeList.push(el);
          const id = seed++;
          el[ctx] = {
            id,
            documentHandler: createDocumentHandler(el, binding, vnode),
            methodName: binding.expression,
            bindingFn: binding.value
          };
        },

        update(el, binding, vnode) {
          el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
          el[ctx].methodName = binding.expression;
          el[ctx].bindingFn = binding.value;
        },

        unbind(el) {
          let len = nodeList.length;

          for (let i = 0; i < len; i++) {
            if (nodeList[i][ctx].id === el[ctx].id) {
              nodeList.splice(i, 1);
              break;
            }
          }
          delete el[ctx];
        }
      });
    }
  };

  // 自动安装指令，如果在全局环境中使用
  if (typeof window!== 'undefined' && window.Vue) {
    window.Vue.use(clickOutside);
  }

  return clickOutside;
})(Vue);
```

##### 方式2 直接注册全局指令

```

// clickoutside.js
(function (global) {
  var Vue = global.Vue;
  if (!Vue) return;

  // 用原生事件监听替代 element-ui 的 on 方法
  function on(element, event, handler) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  }

  var nodeList = [];
  var ctx = '@@clickoutsideContext';
  var seed = 0;
  var startClick;

  // 客户端环境才绑定事件
  if (!Vue.prototype.$isServer) {
    on(document, 'mousedown', function(e) {
      startClick = e;
    });

    on(document, 'mouseup', function(e) {
      nodeList.forEach(function(node) {
        node[ctx].documentHandler(e, startClick);
      });
    });
  }

  function createDocumentHandler(el, binding, vnode) {
    return function(mouseup, mousedown) {
      if (!vnode ||
        !vnode.context ||
        !mouseup.target ||
        !mousedown.target ||
        el.contains(mouseup.target) ||
        el.contains(mousedown.target) ||
        el === mouseup.target ||
        (vnode.context.popperElm &&
          (vnode.context.popperElm.contains(mouseup.target) ||
          vnode.context.popperElm.contains(mousedown.target)))
      ) return;

      if (binding.expression &&
        el[ctx].methodName &&
        vnode.context[el[ctx].methodName]
      ) {
        vnode.context[el[ctx].methodName]();
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn();
      }
    };
  }

  var clickOutside = {
    bind: function(el, binding, vnode) {
      nodeList.push(el);
      var id = seed++;
      el[ctx] = {
        id: id,
        documentHandler: createDocumentHandler(el, binding, vnode),
        methodName: binding.expression,
        bindingFn: binding.value
      };
    },
    update: function(el, binding, vnode) {
      el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
      el[ctx].methodName = binding.expression;
      el[ctx].bindingFn = binding.value;
    },
    unbind: function(el) {
      for (var i = 0; i < nodeList.length; i++) {
        if (nodeList[i][ctx].id === el[ctx].id) {
          nodeList.splice(i, 1);
          break;
        }
      }
      delete el[ctx];
    }
  };

  // 注册全局指令
  Vue.directive('clickoutside', clickOutside);
})(typeof window !== 'undefined' ? window : this);
```

##### 方式3 注册局部指令

```

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ClickOutside = factory());
}(this, function () {
  'use strict';

  var nodeList = [];
  var ctx = '@@clickoutsideContext';

  var startClick;
  var seed = 0;

  function on(element, event, handler) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  }

  !Vue.prototype.$isServer && on(document, 'mousedown', function (e) {
    return startClick = e;
  });

  !Vue.prototype.$isServer && on(document, 'mouseup', function (e) {
    nodeList.forEach(function (node) {
      return node[ctx].documentHandler(e, startClick);
    });
  });

  function createDocumentHandler(el, binding, vnode) {
    return function (mouseup, mousedown) {
      if (!vnode ||
        !vnode.context ||
        !mouseup.target ||
        !mousedown.target ||
        el.contains(mouseup.target) ||
        el.contains(mousedown.target) ||
        el === mouseup.target ||
        (vnode.context.popperElm &&
        (vnode.context.popperElm.contains(mouseup.target) ||
        vnode.context.popperElm.contains(mousedown.target)))) return;

      if (binding.expression &&
        el[ctx].methodName &&
        vnode.context[el[ctx].methodName]) {
        vnode.context[el[ctx].methodName]();
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn();
      }
    };
  }

  return {
    bind: function bind(el, binding, vnode) {
      nodeList.push(el);
      var id = seed++;
      el[ctx] = {
        id: id,
        documentHandler: createDocumentHandler(el, binding, vnode),
        methodName: binding.expression,
        bindingFn: binding.value
      };
    },
    update: function update(el, binding, vnode) {
      el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
      el[ctx].methodName = binding.expression;
      el[ctx].bindingFn = binding.value;
    },
    unbind: function unbind(el) {
      var len = nodeList.length;

      for (var i = 0; i < len; i++) {
        if (nodeList[i][ctx].id === el[ctx].id) {
          nodeList.splice(i, 1);
          break;
        }
      }
      delete el[ctx];
    }
  };
}));
```

<a id="sec-10"></a>
## 滚动条组件

> 来源：myBaseFile
> 原路径：`vue/vue2笔记/element ui/滚动条组件.md`

Element UI【详解】el-scrollbar 滚动条组件 —— 监听滚动条的滚动，跟随页面一起滚动，获取滚动距离，隐藏水平滚动条等

el-scrollbar 滚动条组件用于优化页内滚动条的UI效果，使用时必须指定高度！

```
    /*el-scrollbar 必须指定高度*/
    .scrollMenuBox {
        height: 200px;
        width: 100px;
        border: 1px solid red;
    }
```

控制el-scrollbar内滚动条的方法与控制页面的滚动条的方法基本一样，只是获取el-scrollbar节点的滚动条时，需使用  this.\$refs.scrollMenuRef.wrap

```html
  <el-scrollbar ref="scrollMenuRef" class="scrollMenuBox">
        <p v-for="i in titleTotal" :key="i">标题{{i}}</p>
    </el-scrollbar>

    获取 el-scrollbar 内滚动条向下滚动的距离
    this.$refs.scrollMenuRef.wrap.scrollTop

    控制 el-scrollbar 内滚动条滚动到指定位置
     比如，向下滚动 100px
   this.$refs.scrollMenuRef.wrap.scrollTop = 100

	el-scrollbar 内内容的高度

    this.$refs.scrollMenuRef.wrap.scrollHeight

监听 el-scrollbar 内滚动条的滚动

    this.$refs.scrollMenuRef.wrap.addEventListener("scroll", this.scrollMenu);

    隐藏水平滚动条  使用 scoped 时，需用 /deep/ 实现样式穿透
    /deep/

    el-scrollbar 内滚动条跟随页面一起滚动
    mounted() {
        // 监听浏览器/页面滚动条的滚动
        window.addEventListener("scroll", this.scrollContent);
    },

```

    // 页面滚动时触发
    scrollContent() {
        // scrollTop为显示屏顶部与整个文档顶部间的距离
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 页面滚动条滚动时，el-scrollbar内滚动条按比例跟随一起滚动
        this.$refs.scrollMenuRef.wrap.scrollTop = scrollTop / document.body.scrollHeight * this.$refs.scrollMenuRef.wrap.scrollHeight
        },

完整范例代码

    <template>
        <div style="padding: 20px">
            <div class="menuBox">
                <button @click="scrollTo(25)">目录滚动到标题25</button>
                <br>
                <button @click="getScrollTop">获取目录内滚动条向下滚动的距离</button>
                <hr>
                <p>目录</p>
                <el-scrollbar ref="scrollMenuRef" class="scrollMenuBox">
                    <p v-for="i in titleTotal" :key="i">标题{{i}}</p>
                </el-scrollbar>
            </div>
            <div class="contentBox">
                <p v-for="i in rowTotal" :key="i">第{{i}}行</p>
            </div>
        </div>
    </template>
    <script>
        export default {
            data() {
                return {
                    // 总行数
                    titleTotal: 50,
                    // 总行数
                    rowTotal: 200
                }
            },
            mounted() {
                // 监听浏览器/页面滚动条的滚动
                window.addEventListener("scroll", this.scrollContent);
                // 监听el-scrollbar内滚动条的滚动
                this.$refs.scrollMenuRef.wrap.addEventListener("scroll", this.scrollMenu);
            },
            methods: {
                // el-scrollbar内滚动条滚动时，打印滚动条向下滚动的距离
                scrollMenu() {
                    console.log(this.$refs.scrollMenuRef.wrap.scrollTop)
                },
    // 页面滚动时触发
                scrollContent() {
                    // scrollTop为显示屏顶部与整个文档顶部间的距离
                    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    // 页面滚动条滚动时，el-scrollbar内滚动条按比例跟随一起滚动
                    this.$refs.scrollMenuRef.wrap.scrollTop = scrollTop / document.body.scrollHeight * this.$refs.scrollMenuRef.wrap.scrollHeight
                },
                // el-scrollbar内滚动条滚动到指定的标题号
                scrollTo(titleNo) {
                    this.$refs.scrollMenuRef.wrap.scrollTop = (titleNo - 1) / this.titleTotal * this.$refs.scrollMenuRef.wrap.scrollHeight
                },
                // 获取el-scrollbar内滚动条向下滚动的距离
                getScrollTop() {
                    alert(this.$refs.scrollMenuRef.wrap.scrollTop)
                }
            },
        }
    </script>
    <style scoped>
        /*目录悬浮*/
        .menuBox {
            position: fixed;
        }

        /*内容居中*/
        .contentBox {
            width: 60%;
            margin: auto;
        }

        /*el-scrollbar 必须指定高度*/
        .scrollMenuBox {
            height: 200px;
            width: 100px;
            border: 1px solid red;
        }

        /*隐藏水平滚动条*/
        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }
    </style>

<a id="sec-11"></a>
## index(2)

> 来源：myBaseFile
> 原路径：`vue/vue2笔记/index.md`

empty

<a id="sec-12"></a>
## 统一管理定时器

> 来源：myBaseFile
> 原路径：`vue/vue2笔记/mixins/统一管理定时器.md`

```javaScript

// timerMixin.js
export default {
  data() {
    return {
      timers: []
    }
  },
  methods: {
    setSafeTimeout(fn, delay) {
      const timer = setTimeout(fn, delay)
      this.timers.push({ timer, type: 'timeout' })
      return timer
    },
    setSafeInterval(fn, interval) {
      const timer = setInterval(fn, interval)
      this.timers.push({ timer, type: 'interval' })
      return timer
    }
  },
  beforeDestroy() {
    this.timers.forEach(({ timer, type }) => {
      type === 'interval' ? clearInterval(timer) : clearTimeout(timer)
    })
    this.timers = []
  }
}
```

```javaScript
mounted() {
  const timer = setInterval(() => {
    // 操作
  }, 1000)

  // 组件销毁时自动清除
  this.$once('hook:beforeDestroy', () => {
    clearInterval(timer)
  })
}
```

<a id="sec-13"></a>
## 🚀 DraggableContainer - 高性能拖动组件

> 来源：myBaseFile
> 原路径：`vue/vue2笔记/单拖拽组件/README-DraggableContainer.md`

#### 🚀 DraggableContainer - 高性能拖动组件

##### 📝 简介

`DraggableContainer` 是一个基于 Vue.js 的高性能拖动组件，使用 `requestAnimationFrame` 优化，提供60fps的丝般顺滑拖动体验。

##### ✨ 特性

- 🎯 **高性能** - 使用 `requestAnimationFrame` 优化，60fps 流畅拖动
- 🛡️ **边界约束** - 可选的边界限制，防止元素拖拽到屏幕外
- 🎨 **完全自定义** - 通过插槽完全控制内容和样式
- 📱 **响应式** - 支持移动端触摸操作
- 🔧 **配置灵活** - 丰富的配置选项满足各种需求
- 🎭 **拖拽手柄** - 可选的拖拽手柄，精确控制拖拽区域
- 📊 **事件丰富** - 完整的拖拽生命周期事件

##### 🎯 快速开始

###### 基础用法

```vue
<template>
  <DraggableContainer>
    <div class="my-content">
      我可以被拖动！
    </div>
  </DraggableContainer>
</template>

<script>
import DraggableContainer from '@/components/DraggableContainer.vue';

export default {
  components: {
    DraggableContainer
  }
};
</script>
```

###### 带配置的用法

```vue
<template>
  <DraggableContainer
    :initial-position="{ left: 100, top: 100 }"
    :constrain-to-boundary="true"
    :boundary-margin="20"
    :show-handle="true"
    @drag-start="onDragStart"
    @drag-end="onDragEnd"
    @position-change="onPositionChange"
  >
    <div class="my-window">
      <h3>拖拽窗口</h3>
      <p>只有右上角的手柄可以拖动</p>
    </div>
  </DraggableContainer>
</template>
```

##### 📋 Props 配置

| 属性名                | 类型    | 默认值                    | 说明             |
| --------------------- | ------- | ------------------------- | ---------------- |
| `initialPosition`     | Object  | `{ left: 100, top: 100 }` | 初始位置         |
| `constrainToBoundary` | Boolean | `true`                    | 是否限制在边界内 |
| `boundaryMargin`      | Number  | `10`                      | 边界距离(px)     |
| `showHandle`          | Boolean | `false`                   | 是否显示拖拽手柄 |
| `handleClass`         | String  | `''`                      | 手柄自定义样式类 |
| `dragCursor`          | String  | `'grab'`                  | 拖拽光标样式     |
| `initialZIndex`       | Number  | `1000`                    | 初始层级         |
| `dragZIndex`          | Number  | `9999`                    | 拖拽时层级       |
| `disabled`            | Boolean | `false`                   | 是否禁用拖拽     |
| `dragSelector`        | String  | `''`                      | 限制拖拽的选择器 |

##### 📡 事件

| 事件名            | 参数                  | 说明           |
| ----------------- | --------------------- | -------------- |
| `drag-start`      | `{ position, event }` | 开始拖拽时触发 |
| `drag-end`        | `{ position, event }` | 结束拖拽时触发 |
| `position-change` | `{ left, top }`       | 位置变化时触发 |

##### 🎨 插槽

| 插槽名    | 说明               |
| --------- | ------------------ |
| `default` | 主要内容区域       |
| `handle`  | 自定义拖拽手柄内容 |

##### 🔧 公共方法

通过 `ref` 可以调用以下方法：

```vue
<template>
  <DraggableContainer ref="draggable">
    <!-- 内容 -->
  </DraggableContainer>
</template>

<script>
export default {
  methods: {
    moveToPosition() {
      // 设置位置
      this.$refs.draggable.setPosition(200, 200);
    },
    resetToInitial() {
      // 重置到初始位置
      this.$refs.draggable.resetPosition();
    }
  }
};
</script>
```

###### 可用方法

- `setPosition(left, top)` - 设置位置
- `resetPosition()` - 重置到初始位置

##### 🎯 使用场景

###### 1. 浮动窗口
```vue
<DraggableContainer :show-handle="true">
  <div class="floating-window">
    <div class="window-header">标题</div>
    <div class="window-content">内容</div>
  </div>
</DraggableContainer>
```

###### 2. 工具栏
```vue
<DraggableContainer>
  <div class="toolbar">
    <button>工具1</button>
    <button>工具2</button>
    <button>工具3</button>
  </div>
</DraggableContainer>
```

###### 3. 仅标题栏可拖拽
```vue
<DraggableContainer drag-selector=".title-bar">
  <div class="panel">
    <div class="title-bar">拖拽我</div>
    <div class="content">内容区域不可拖拽</div>
  </div>
</DraggableContainer>
```

###### 4. 自由拖拽（无边界）
```vue
<DraggableContainer :constrain-to-boundary="false">
  <div class="free-element">
    我可以拖拽到屏幕外
  </div>
</DraggableContainer>
```

##### ⚡ 性能优化

该组件采用了多种性能优化技术：

1. **requestAnimationFrame** - 与浏览器刷新率同步
2. **边界缓存** - 拖拽时避免重复计算
3. **硬件加速** - CSS transform 和 GPU 加速
4. **事件优化** - 智能的事件监听和清理
5. **内存管理** - 完善的资源清理机制

##### 📱 移动端支持

组件自动支持移动端触摸操作，无需额外配置。

##### 🎨 样式自定义

###### 自定义拖拽手柄

```vue
<template>
  <DraggableContainer :show-handle="true" handle-class="my-handle">
    <template #handle>
      <div class="custom-handle">
        <i class="icon-drag"></i>
      </div>
    </template>
    <!-- 内容 -->
  </DraggableContainer>
</template>

<style>
.my-handle {
  background: #007d7b;
  border-radius: 8px;
}
</style>
```

###### 拖拽状态样式

```scss
.draggable-container {
  &.dragging {
    // 拖拽时的样式
    opacity: 0.8;
    transform: rotate(2deg);
  }
}
```

##### 🚀 高级用法

###### 多个组件协同

```vue
<template>
  <div>
    <DraggableContainer
      v-for="item in items"
      :key="item.id"
      :initial-position="item.position"
      @position-change="updatePosition(item.id, $event)"
    >
      <div class="item">{{ item.content }}</div>
    </DraggableContainer>
  </div>
</template>
```

###### 动态配置

```vue
<template>
  <DraggableContainer
    :constrain-to-boundary="settings.constrained"
    :disabled="settings.disabled"
    :boundary-margin="settings.margin"
  >
    <!-- 内容 -->
  </DraggableContainer>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        constrained: true,
        disabled: false,
        margin: 10
      }
    };
  }
};
</script>
```

##### 🛠️ 开发指南

###### 本地开发
```bash
# 查看示例
npm run serve

# 访问 http://localhost:8082
# 查看 DraggableExample.vue 中的各种使用示例
```

###### 构建
```bash
npm run build
```

##### 🤝 贡献

欢迎提交 Issue 和 Pull Request！

##### 📄 许可证

MIT License

<a id="sec-14"></a>
## vue 组件内引入外部在线 js、css

> 来源：myBaseFile
> 原路径：`vue/vue2笔记/引入外部jscss.md`

#### vue 组件内引入外部在线 js、css

##### **一、css:**

```css
<style scoped>    @import 'https://unpkg.com/element-ui@2.3.7/lib/theme-chalk/index.css';
```

二、js：
第一种方式：利用 Vue 的 mounted 生命周期

```
 mounted() {
     const oScript = document.createElement('script');
     oScript.type = 'text/javascript';
     oScript.src = 'https://unpkg.com/element-ui@2.3.7/lib/index.js';
     document.body.appendChild(oScript);
 }
```

```
第二种方式：利用 Vue 的 createElement 方法
components: {
	'scriptLink': {
	  render(createElement) {
		return createElement(
		  'script',
		  {
			attrs: {
			  type: 'text/javascript',
			  src: 'https://unpkg.com/element-ui@2.3.7/lib/index.js',
			},
		  },
		)
	  }
	}
  }

```
然后通过 引入到组件中

##### 方法1

简单粗暴，直接在Vue项目的index.html 中使用全局的方式引入，
缺点：不使用该js插件的组件也会加载，而我只想在某个Vue组件中使用该js插件。
比如：
```
<!DOCTYPE html>
<html>
<head>
    <!-- ... 省略-->
</head>
<body>
    <div id="app"></div>
</body>
<script src="../xxx.js"></script> // 暴力引入
</html>
```

##### 方法2

如果是下载到本地的静态文件，可以使用**import** 的方式导入。

```
import { xxx } from '路径'
```

缺点：下载的静态文件才可以

##### 方法3

在Vue组件加载完后，手动操作DOM插入js插件。

```
export default {
    mounted() {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '你的js文件地址';
        document.body.appendChild(script);
    },
}
```

该方式直接操作DOM，只在当前组件插入js插件。

##### 方法4

使用render方法

```
export default {
    components: {
        'xxx-js': {
            render(createElement) {
                return createElement(
                    'script',
                    {
                        attrs: {
                            type: 'text/javascript',
                            src: '你的js文件地址',
                        },
                    },
                );
            },
        },
    },
}
```
// 使用 <xxx-js></xxx-js> 组件方式在页面中调用

##### 方法5

高阶玩法。将方式三包装成一个js插件，使用 Promise，js加载成功，调用resolve，js加载失败，调用reject。

```
function loadJs(src) {
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.src= src;
    document.body.appendChild(script);

    script.onload = ()=>{
      resolve();
    }
    script.onerror = ()=>{
      reject();
    }
  })
}

export default loadJs
```

使用的时候：

```
import loadJs from '../../utils/base/loadJs'

export default {
    mounted(){
        loadJs('http://api.map.baidu.com/xxx.js').then(()=>{
            // 加载成功，进行后续操作
        })
    }
}
```

##### 方法6

更高阶方式。可以动态替换要加载的js文件。

包装一个importJs.js 插件。

```

// 导入外部js
import Vue from 'vue'

Vue.component('remote-script', {
  render: function (createElement) {
    var self = this;
    return createElement('script', {
      attrs: {
        type: 'text/javascript',
        src: this.src
      },
      on: {
        load: function (event) {
          self.$emit('load', event);
        },
        error: function (event) {
          self.$emit('error', event);
        },
        readystatechange: function (event) {
          if (this.readyState == 'complete') {
            self.$emit('load', event);
          }
        }
      }
    });
  },
  props: {
    src: {
      type: String,
      required: true
    }
  }
});
```
使用方式：

```
// 引入
import '@/common/importJs.js'
// html使用的地方
<remote-script src="js文件路径"></remote-script>
```

<a id="sec-15"></a>
## 杂货铺

> 来源：myBaseFile
> 原路径：`vue/vue2笔记/杂货铺.md`

#### 获取当前 vue 的所有组件名称

const components \= Object.keys(Vue.options.components)

// console.log('起始...', components, Config)

#### 运行本地 dist 文件夹

npm run build 打包 然后有一个 dist 文件 然后在全局安装 serve 这个服务，npm install -g serve

然后进入 dist 文件 运行 seven 就可以运行了

<a id="sec-16"></a>
## 10个有用的自定义钩子vue.js#夸克#

> 来源：有道云笔记
> 原路径：`10个有用的自定义钩子vue.js#夸克#.md`

https://mp.weixin.qq.com/s/H7LczlJpkrMbTS1SeAEpeQ

<a id="sec-17"></a>
## Vue Router 记住页面滚动位置的简单实现

> 来源：有道云笔记
> 原路径：`Vue Router 记住页面滚动位置的简单实现.md`

本质就是, 利用内置组件<keep-alive>在页面组件得以被缓存的基础上, 再加以
document.documentElement.scrollTop获取滚动距离, 后返回页面时恢复滚动距离实现效果, 打开A页面, 滚动至a处, 切换至B页面, 返回A页面, 此时页面位置为a点而非顶部。
路由出口
页面组件

```
<div class="main">
     <!-- 包裹`<keep-alive>` -->
     <keep-alive>
        <router-view></router-view>
     </keep-alive>
</div>
export default {
data(){
```
   scrollTop: 0,
```
    // 储存滚动位置
     },
    activated() {
      // 进入该组件后读取数据变量设置滚动位置
      // 注意 , 此处由页面是否具有  DTD ( 如 : `<!DOCTYPE html>`), 决定具体选择 , 详见参考资料

        document.documentElement.scrollTop = this.scrollTop;      9
        // document.body.scrollTop = this.scrollTop;   10
        }, 11
    beforeRouteLeave(to, from, next) {     12
        // 离开组件时保存滚动位置     13
        // 注意 , 此时需调用路由守卫 `beforeRouterLeave` 而非生命周期钩子 `deactivated`    14
        // 因为 , 此时利用 `deactivated` 获取的  DOM 信息已经是新页面得了   15
       this.scrollTop = document.documentElement.scrollTop;   16
       next();  17
    }, 18
 }19
```
