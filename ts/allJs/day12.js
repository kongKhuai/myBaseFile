"use strict";
/*
 * @Author: 16651618507@163.com
 * @Date: 2023-03-14 07:08:00
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-27 07:19:12
 * @FilePath: \ts\src\day12.ts
 * @Description:
 *
 */
// 使用受限值
// function minimunLength<Type extends { length: number }>(
//     obj: Type,
//     minimun: number
// ): Type {
//     if (obj.length > minimun) {
//         return obj
//     } else {
//         return { length: minimun }
//     }
// }
// const arr = minimunLength([1,2,3],6)
// console.log(arr.slice(0))
// 指定类型函数
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// const arr= combine([1,2,3],['hello'])//不能将类型“string”分配给类型“number”
// const arr= combine(['hello'],[1,2,3])//不能将类型“number”分配给类型“string”
// 此时会自动推断返回的类型为第一个参数的类型,,传入两种不同类型的数据就会报错
// 如果想传入不同类型的话就需要定义具体的类型
const arr = combine([1, 2, 3], ['hello']);
// 编写优秀通用函数的准则
// 1、可能的情况下，使用类型参数本身，而不是对其进行约束。
// 2、总是尽可能的少使用类型参数。
// 3、如果一个类型的参数只出现在一个地方，请重新考虑是否真的需要它。
// 1示例
function firstEleGood(arr) {
    return arr[0];
}
function firsteEl(arr) {
    return arr[0];
}
const a = firsteEl([1, 2, 3]);
const b = firstEleGood([1, 2, 3]);
// 2示例
function filterfunGood(arr, func) {
    return arr.filter(func);
}
function filterfun(arr, func) {
    return arr.filter(func);
}
// 3示例
function greet62(s) {
    console.log(`hello,${s}`);
}
function greetGood(s) {
    console.log(`hello,${s}`);
}
// 参数的可选值和默认值=与es6一样     但是（num？：number = 100)此时可选值和默认值不能同时存在
function fun2(num) {
    console.log(num.toFixed());
}
// 可选值
function fun3(num) {
    // console.log(num.toFixed())//“num”可能为“未定义”
    if (num !== undefined) {
        console.log(num.toFixed());
    }
}
// 默认值
function fun4(num = 100) {
    console.log(num.toFixed());
}
// 回调中的可选参数
// 当为回调写一个函数类型时，永远不要写一个可选参数，
// 除非你打算在不传递该参数的情况下调用函数
// function myForeach(arr:any[],callback:(arg:any,index:number)=>void){
//     for(let i=0;i<arr.length;i++){
//         callback(arr[i],i)
//     }
// }
// myForeach([1,2,3],(a)=>console.log(a))
// myForeach([1,2,3],(a,i)=>console.log(a,i))
function myForeach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
// 此时回调函数中包含一个可选参数index，这时传入的回调中就会提示参数可能未定义
myForeach([1, 2, 3], (a, i) => {
    // console.log(i?.toFixed())
    // console.log(i.toFixed())//“i”可能为“未定义”
});
function makeDate(yearOrTimestamp, month, day) {
    if (month !== undefined && day !== undefined) {
        return new Date(yearOrTimestamp, month, day);
    }
    else {
        return new Date(yearOrTimestamp);
    }
}
function fn() {
}
function fn2(x) {
}
function fn3(x) {
    return 'true';
}
// 编写好的重载
// 在可能的情况下，总是倾向于使用联合类型的参数而不是重载参数
// 重载的写法
// function len(x: string): number
// function len(x: any[]): number
// function len(x: any) {
//     return x.length
// 联合类型的写法
function len(x) {
    return x.length;
}
len('hello');
len([1, 2, 3]);
// 调用的时候会有这种情况
len(Math.random() > 0.5 ? 'hello' : [1, 2]);
const db = {
    filterUsers: (filter) => {
        let admin1 = {
            admin: true
        };
        let admin2 = {
            admin: false
        };
        return [admin1, admin2];
    }
};
// 不能使用箭头函数
const admins = db.filterUsers(function () {
    return this.admin;
});
console.log(admins);
// 需要了解的其他类型
// void
// object =>任何的不是基元的值
// ！string number bigint boolent symbol mull undefimed
// 不同于 {} 不同于 Object
// unknown => 代表任何值，这与any类型类似但更安全，因为对未知unknown值做任何事情都是不合法的
// never => 表示永远不会被观察到的值
// Function => 全局性的Function类型描述了诸如bind,call,apply,和其他存在于js中
// 所有函数值的属性。它还有一个特殊的属性，即Function类型的值总是可以被调用；
// 这些调用返回any
// 参数展开运算符
// 形参展开  ...
function multiply(n, ...m) {
    return m.map(v => n * v);
}
const multiplyVal = multiply(10, 1, 2, 3, 4, 5);
console.log(multiplyVal); //[ 10, 20, 30, 40, 50 ]
// 实参展开 ...
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);
// 此时会报错
// const args = [1, 2]
// const angle = Math.atan2(...args)//扩张参数必须具有元组类型或传递给 rest 参数
const args = [1, 2];
// 此时后面的const上下文会把1,2变成一个常量
const angle = Math.atan2(...args);
function sum({ a, b, c }) {
    console.log(a + b + c);
}
sum({ a: 12, b: 1, c: 23, d: 35 });
const f1 = () => {
    return true;
};
const f2 = () => false;
const f3 = function () {
    return true;
};
const v1 = f1();
const v2 = f2();
const v3 = f3();
function f4() {
    // return true  //!不能将类型“boolean”分配给类型“void”。
    return;
}
const f5 = function () {
    // return '' //!不能将类型“string”分配给类型“void”。
    return;
};
