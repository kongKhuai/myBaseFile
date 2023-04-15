<!--
 * @Author: kongs@njruiyue.cn
 * @Date: 2023-03-14 06:46:53
 * @LastEditors: kongs@njruiyue.cn
 * @LastEditTime: 2023-03-16 06:36:55
 * @FilePath: \TypeScript\catalogue.md
 * @Description: 
 * 
-->
# TypeScript

## day1

         基础类型 number string boolean

## day2

        定义函数、对象、
        联合类型、类型别名

## day3

        interface 接口 => extends 拓展
        interface 只读属性使用 readonly 来指定只读属性
        * ReadonlyArray<T> 类型
        type 类型别名 => & 拓展
        向现有的接口类型中增加字段

        X_错误_X 向现有的类型别名中增加字段
        !!! 类型创建后不能更改 不能在同一类型名称里新增字段

## day4

        类型断言 as <>
        文字类型与数字类型、布尔类型     as const

## day5

        ?:xx    ?表示可选
        !:xx    x5!.toString    表示当x5不是null或者undefined 的时候执行x5.toStrign
        undefined null
            enum  枚举
        BigInt  比较大的数字
        symbol  全局唯一引用

        类型缩小  typeof判断
        真值缩小  常用方法 条件、&&、||、if()...、布尔否定（！、!!、Boolean())

## day6

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

## day7

        类型谓语

## day8

        受歧视的unions
        never 类型与穷尽性检查

## day9: ————————重点

        使用函数

## day10: 构造函数

## day11: 泛型

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

## day12 使用受限值

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
