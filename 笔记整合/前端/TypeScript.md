# TypeScript

> 共 5 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [TypeScript](#sec-1) — myBaseFile · `ts/catalogue.md`
2. [typescript-notes](#sec-2) — myBaseFile · `ts/README.md`
3. [高级篇](#sec-3) — myBaseFile · `ts/src/高级篇/study.md`
4. [从第十一章开始，只记录知识点和示例](#sec-4) — myBaseFile · `ts/study.md`
5. [常见问题](#sec-5) — myBaseFile · `ts/常见报错处理/常见问题.md`

---

<a id="sec-1"></a>
## TypeScript

> 来源：myBaseFile
> 原路径：`ts/catalogue.md`

#### TypeScript

##### day1

         基础类型 number string boolean

##### day2

        定义函数、对象、
        联合类型、类型别名

##### day3

        interface 接口 => extends 拓展
        interface 只读属性使用 readonly 来指定只读属性
        * ReadonlyArray<T> 类型
        type 类型别名 => & 拓展
        向现有的接口类型中增加字段

        X_错误_X 向现有的类型别名中增加字段
        !!! 类型创建后不能更改 不能在同一类型名称里新增字段

##### day4

        类型断言 as <>
        文字类型与数字类型、布尔类型     as const

##### day5

        ?:xx    ?表示可选
        !:xx    x5!.toString    表示当x5不是null或者undefined 的时候执行x5.toStrign
        undefined null
            enum  枚举
        BigInt  比较大的数字
        symbol  全局唯一引用

        类型缩小  typeof判断
        真值缩小  常用方法 条件、&&、||、if()...、布尔否定（！、!!、Boolean())

##### day6

        等值缩小
        常用方法  ===全等  ！==全不等   == 等于   ！= 不等于
        undefined==null  所以 ！=null  会过滤掉null和undefined

        in操作符缩小
        'key' in X
        true : X 具有可选或者必需属性的类型的值
        false : X 需要具有可选或者缺失属性的值

        instanceof 操作符缩小
        X instanceof Foo

        分配缩小 ts自动分配类型
        控制流分析

##### day7

        类型谓语

##### day8

        受歧视的unions
        never 类型与穷尽性检查

##### day9: ————————重点

        使用函数

##### day10: 构造函数

##### day11: 泛型

        简单的
        function typeEl<Type>(arr: Type[]): Type | undefined {
            return arr[0]
        }
        // 类型丰富的类型
        function map<arrput, funput>(arr: arrput[], func: (str: arrput) => funput): funput[] {
            return arr.map(func)
        }
        限制条件 <Type extends {length:number}>
        语义是限制传入的参数类型一定要有length这个属性
        否则不通过

##### day12 使用受限值

        ```
        // 使用受限值
        function minimunLength<Type extends { length: number }>(
        obj: Type,
        minimun: number
        ): Type {
        if (obj.length > minimun) {
                return obj
        } else {
                return { length: minimun }
        }
        }
        const arr = minimunLength([1,2,3],6)
        console.log(arr.slice(0))
        ```

<a id="sec-2"></a>
## typescript-notes

> 来源：myBaseFile
> 原路径：`ts/README.md`

#### typescript-notes
ts的学习笔记

<a id="sec-3"></a>
## 高级篇

> 来源：myBaseFile
> 原路径：`ts/src/高级篇/study.md`

#### 高级篇

·声明变量
·类型推断
·枚举
·公共类型
·Symbols
·类型兼容性
·迭代器和生成器
·装饰器
·JSX
·混入
·三斜线指令
·模块
·模块解析
·命名空间
·命名空间与模块
·声明合并
·声明文件

<a id="sec-4"></a>
## 从第十一章开始，只记录知识点和示例

> 来源：myBaseFile
> 原路径：`ts/study.md`

#### 从第十一章开始，只记录知识点和示例

##### 泛型 < Type >

``` typeScript
// 正常
function firstEl(arr: any) {
    return arr[0]
}
firstEl(['1', '2', '3'])
firstEl([1, 2, 3])
firstEl([])
// 简单泛型

// 传入type类型返回type类型
function typeEl<Type>(arr: Type[]): Type | undefined {
    return arr[0]
}
typeEl(['1', '2', '3'])
typeEl([1, 2, 3])
typeEl([])
// 手工的传入类型
typeEl<string>(['1', '2', '3'])
typeEl<number>([1, 2, 3])
typeEl<undefined>([])

// 类型丰富的类型
function map<arrput, funput>(arr: arrput[], func: (str: arrput) => funput): funput[] {
    return arr.map(func)
}
const parst = map(['1', '2', '3'], (str) => Number(str) * 2)

```

##### 限制条件 < Type extends {length:number}>

``` typescript
// 语义是限制传入的参数类型一定要有length这个属性
// 否则不通过

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a
    } else {
        return b
    }
}
const longerArray = longest([1, 2, 3], [2, 2, 2])

const longeString = longest("[1,3]", "[2,2,2]")

const longeNumber = longest(10, '1000')//类型“number”的参数不能赋给类型“{ length: number; }”的参数

```

##### 泛型函数-使用受限值

``` typescript
使用受限值
function minimunLength<Type extends { length: number }>(
    obj: Type,
    minimun: number
): Type {
    if (obj.length > minimun) {
        return obj
    } else {
        return { length: minimun }
    }
}
const arr = minimunLength([1,2,3],6)
console.log(arr.slice(0))
```

##### 指定类型函数

``` typescript
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2)
}
// const arr= combine([1,2,3],['hello'])//不能将类型“string”分配给类型“number”
// const arr= combine(['hello'],[1,2,3])//不能将类型“number”分配给类型“string”
// 此时会自动推断返回的类型为第一个参数的类型,,传入两种不同类型的数据就会报错
// 如果想传入不同类型的话就需要定义具体的类型
const arr = combine<string | number>([1, 2, 3], ['hello'])

```

##### 编写优秀通用函数的准则

1. 可能的情况下，使用类型参数本身，而不是对其进行约束
2. 总是尽可能的少使用类型参数
3. 如果一个类型的参数只出现在一个地方，请重新考虑是否真的需要它

##### 参数的可选值
<!-- 可选值和默认值=与es6一样     但是（num？：number = 100)此时可选值和默认值不能同时存在 -->

##### 回调中的可选参数

(当为回调写一个函数类型时，永远不要写一个可选参数，
 除非你打算在不传递该参数的情况下调用函数)

```typescript
function myForeach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}
// 此时回调函数中包含一个可选参数index，这时传入的回调中就会提示参数可能未定义
myForeach([1, 2, 3], (a, i) => {
    // console.log(i?.toFixed())
    // console.log(i.toFixed())//“i”可能为“未定义”
})
```

##### 函数重载（函数重载、函数实现）

 ( 即前面的函数为声明函数和指定传入类型、数量
最后一个函数为实现函数，需兼容前面函数的传入类型数量等)

``` typescript
function makeDate(timestamp: number): Date
function makeDate(year: number, month: number, day: number): Date// 如果后面没写实现函数的话就会提示 函数实现缺失或未立即出现在声明之后
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
    if (month !== undefined && day !== undefined) {
        return new Date(yearOrTimestamp, month, day)
    } else {
        return new Date(yearOrTimestamp)
    }
}
```

##### 重载签名和实现签名

1、参数不正确的问题
2、参数类型不正确的问题
3、返回类型不正确的问题

##### 编写好的重载

在可能的情况下，总是倾向于使用联合类型的参数而不是重载参数

``` typescript
    // 重载的写法
// function len(x: string): number
// function len(x: any[]): number
// function len(x: any) {
//     return x.length
// 联合类型的写法
function len(x: string | any[]) {
    return x.length
}

len('hello')
len([1, 2, 3])
// 调用的时候会有这种情况
len(Math.random() > 0.5 ? 'hello' : [1, 2])
//重载写法调用3报错： 没有与此调用匹配的重载。
//   第 1 个重载(共 2 个)，“(x: string): number”，出现以下错误。
//     类型“number[] | "hello"”的参数不能赋给类型“string”的参数。
//       不能将类型“number[]”分配给类型“string”。
//   第 2 个重载(共 2 个)，“(x: any[]): number”，出现以下错误。
//     类型“number[] | "hello"”的参数不能赋给类型“any[]”的参数

```

##### day12需要了解的其他类型

<!-- 待补充-->

##### day13 认识对象类型

<!-- 待补充-->

###### 拓展类型

###### 从类型中创建类型

1.泛型类型
2.keyof类型操作符
3.typeof类型操作符
4.索引访问类型
5.条件类型
6.映射类型
7.模板字面量类型

<a id="sec-5"></a>
## 常见问题

> 来源：myBaseFile
> 原路径：`ts/常见报错处理/常见问题.md`

#### 1、现阶段类型不匹配，ts 报错

处理方法：==使用 as 断言处理==

```
import {getList}from "@/api"
import type {testProps} from "./test"
import {ref} from "vue"
import type {listParams} from "@/api/index"
const {a,b} = defineProps<testProps>();
//断言先给上你要取的值
interface.listData{
    a:string
    b:string
}
const params:listParams=ref({} as listParams)
params.value1 = 1
params.value2 = 2
...

let list=ref<listData>({} as listData);
getList(params).then(res=>{
    list.value=res.data
})
console.log(list.value.b)
```

#### 2、调用使用 ts 编写的第三方库的时候，需要定义某个东西为第三方库里的某个类型

---

处理方法：
//使用 declare 定义
==规范的库：可以直接引入定义的类型==
==不规范的库：源码
package.json=> 找 types 字段
types 字段定义了 import type {xxx} from "xxx"时去那个文件找类型
"types": "types/index.d.ts",==

```

import { createRouter,createWebHistory} from "vue-router";
import Helloworld from "@/components/Helloworld.vue"
import type {RouteRecordRaw} from "vue-router"
const router createRouter({
    history:createwebHistory(),
    routes:[
     {path:"/sad",component:Helloworld}
    ]
})
function parseRoute(arr:RouteRecordRaw[]){
    arr.forEach((item)=>{
        router.addRoute(item);
    })
}
```

#### 3、ts 中，如果一个变量，既可能是对象，也可能是数组，那么需要使用联合类型

#### 4、一些常见的 dom 类型报错

```
<div @click="(e)=>{
    let target=e.target as HTMLCanvasElement;
    target.getcontext("2d")
}">
test
</div>
<div @click="(e)=>{
    let target=e.target as HTMLCanvasElement;
    target.getcontext("2d")
}">
test
</div>

<div @click="(e)=>{
    let targe=e.target as HTMLElement
    targe.innerHTML="test"
}">test</div>

<div @click="(e)=>{
    let targe=e.target as HTMLInputElement
    targe.value
}">test</div>
```
