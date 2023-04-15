/*
 * @Author: kongs@njruiyue.cn
 * @Date: 2022-12-08 21:55:58
 * @LastEditors: kongs@njruiyue.cn
 * @LastEditTime: 2023-03-17 06:48:20
 * @FilePath: \TypeScript\src\day11.ts
 * @Description: 
 * 
 */
// 泛型 <Type>

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


// 限制条件
// <Type extends {length:number}>
// ?number  也没length属性啊

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

const longeNumber = longest('10', '1000')
console.log(longerArray, longeString, longeNumber)