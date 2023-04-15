"use strict";
/*
 * @Author: kongs@njruiyue.cn
 * @Date: 2023-03-30 07:10:58
 * @LastEditors: kongs@njruiyue.cn
 * @LastEditTime: 2023-04-14 07:17:19
 * @FilePath: \TypeScript\src\day14.ts
 * @Description:
 *
 */
// type manipulation   类型操作
// function loggingIdentity<Type>(arg: Type): Type {
//     // 可以编译为js但是ts在编译期就会提示报错
//     console.log("%c Line:4 🍷", "color:#ea7e5c", arg.length);//类型“Type”上不存在属性“length”
//     return arg
// }
// loggingIdentity('hi~')
// 使用通用类型变量
function loggingIdentity(arg) {
    console.log("%c Line:4 🍷", "color:#ea7e5c", arg.length); //类型“Type”上不存在属性“length”
    return arg;
}
loggingIdentity([1, 2, 3, 4, 5]);
// 泛型- 泛型类型
function identicy(arg) {
    return arg;
}
let myIdentict = identicy;
// 泛型类
class GenericNumber {
    constructor() {
        // 教程中是前两行，后面是为了处理报错写的初始值
        // zeroVal: NumType 
        // add: (x: NumType, y: NumType) => NumType 
        this.zeroVal = 123;
        this.add = (x, y) => {
            return x;
        };
    }
}
let myGenericNum = new GenericNumber();
myGenericNum.zeroVal = 0;
myGenericNum.add = function (x, y) {
    return x + y;
};
let myGenericStr = new GenericNumber();
myGenericStr.zeroVal = '';
myGenericStr.add = function (x, y) {
    return x + y;
};
let aaa = myGenericNum.add(2, 4);
let bbb = myGenericStr.add('hi,', 'tom');
console.log("%c Line:59 🍞 aaa", "color:#fca650", aaa, bbb);
function loggingIdenticy(arg) {
    console.log(arg.length);
    return arg;
}
// loggingIdenticy(123)//类型“number”的参数不能赋给类型“LengWist”的参数。
loggingIdenticy('123');
loggingIdenticy(['123', 2]);
// 在泛型约束中使用类型参数
function getProperty(obj, key) {
    return obj[key];
}
let x4 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
console.log("%c Line:90 🍫", "color:#f5ce50", getProperty(x4, 'd'));
// console.log("%c Line:91 🍫", "color:#f5ce50", getProperty(x4, 'x'));//类型“"x"”的参数不能赋给类型“"a" | "b" | "c" | "d"”的参数。
// 在泛型中使用类类型
function create(c) {
    return new c();
}
class Beekeeper {
    constructor() {
        this.hasMask = true;
    }
}
class Zookeeper {
    constructor() {
        this.nameTag = 'Mikle';
    }
}
class Animak {
    constructor() {
        this.namLegs = 4;
    }
}
class Bee extends Animak {
    constructor() {
        super(...arguments);
        this.keeper = new Beekeeper();
    }
}
class Lion extends Animak {
    constructor() {
        super(...arguments);
        this.keeper = new Zookeeper();
    }
}
function createInstasnce(c) {
    return new c();
}
createInstasnce(Lion).keeper.nameTag;
console.log("%c Line:117 🎂 createInstasnce(Lion).keeper.nameTag", "color:#3f7cff", createInstasnce(Lion).keeper.nameTag);
createInstasnce(Bee).keeper.hasMask;
console.log("%c Line:119 🍋 createInstasnce(Bee).keeper.hasMask", "color:#33a5ff", createInstasnce(Bee).keeper.hasMask);
const p1Keyof = 'x';
const p2Keyof = 'y';
// const a1: A = 'n'//!不能将类型“string”分配给类型“number”
const a2 = 0;
const m1Val = 'key';
const m2Val = 1;
// const m3Val:M1 = true//!不能将类型“boolean”分配给类型“string | number”。
// typeof 操作符
// 可以标识变量或者函数的返回结果但是不能表示函数的返回结果
let s152 = 'hello';
let s153 = 'word';
function f157() {
    return {
        a: 123,
        b: '456'
    };
}
let f164val = { a: 222, b: 'www' };
//不能表示函数的返回结果
function f166() { }
// let age:Age = '123'//!不能将类型“string”分配给类型“number”
let age2 = 123;
let i1 = 123;
let i2 = '123';
// 此时可以是PersonB中的三个类型
let i21 = 123;
let i22 = '123';
let i23 = false;
let i31 = '123';
let i32 = false;
// let i33:I3 = 123//!不能将类型“123”分配给类型“I3”。
// 使用数组【number】
const myArr = [
    {
        name: 'tom', age: 12
    },
    {
        name: 'jerry', age: 12
    }
];
const arrnumber = {
    name: 'tom', age: 12,
    // alive:'alive'
};
let ageval1 = 123;
let ageval3 = 123;
// let Example1Val: Example1 = '123'//!不能将类型“string”分配给类型“number”
let Example1Val = 123;
let Example2Val = '123';
function createLabel(ageOrName) {
    throw '';
}
// acreateLabel string NameLabel
let acreateLabel = createLabel('tom');
// bcreateLabel number AgeLabel
let bcreateLabel = createLabel(123);
// ccreateLabel NameLabel|AgeLabel
let ccreateLabel = createLabel(Math.random() > 0.5 ? 'asdasd' : 123);
console.log("%c Line:263 🍻", "color:#3f7cff", acreateLabel, bcreateLabel, ccreateLabel);
let emailVal = 'xxxx@163.com';
let dogVal = 123;
let str1 = 'strVal';
let numArr1 = 123;
let num2 = 234;
let many1 = 123;
let many2 = { message: "" };
let many3 = 'ManyVal';
let num3Val = 100;
let num4Val = 'tom';
let num5Val = [true];
let num6Val = 'never';
let num7Val = 100;
function stringOrNum(x) {
    return Math.random() > 0.5 ? 'string' : 10;
}
let t1Val = 123;
let t2Val = 'str';
let saon1 = [123];
let saon2 = ['123'];
let saon3 = [];
let saon7 = [123, 'str'];
// let saon8: StrArrOrNumArr2 = [false]
