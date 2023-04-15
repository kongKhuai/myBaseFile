
//* 接口类型  interface

interface PointTs3 {
    x: number
    y3: string
}
function pointCard(obj: PointTs3) {

}
pointCard(
    {
        x: 3,
        y3: 'asd'
    }
)


// !接口的只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用readonly来指定只读属性:
interface readonlyPoint {
    readonly x: number;
    readonly y: number;
}
let p1: readonlyPoint = { x: 10, y: 20 };
// * error p1.x = 5;   无法分配到 "x" ，因为它是只读属性

//? TypeScript具有 ReadonlyArray<T> 类型，它与Array<T>相似，
// 只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
//? let a: number[] = [1, 2, 3, 4];
//? let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
// 上面代码的最后一行，可以看到就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。
// 但是你可以用类型断言重写：
// a = ro as number[];


// 拓展类型 extends

interface Inters {
    x: number
    y3: string
}
//!  接口 Outbar  extends拓展Inters接口 增加 qqCord属性
interface Outbar extends Inters {
    qqCord: number
}

function logInter(val: Inters) {

}
function logOutBar(val: Outbar) {

}
logInter(
    {
        x: 2, y3: '坐标'
    }
)

logOutBar(
    {
        x: 2, y3: '坐标', qqCord: 2364847385
    }
)
const eventBar: Outbar = {
    qqCord: 2364847385,
    x: 123,
    y3: 'xxx'
}
// console.log(eventBar);

type theDay = {
    x: boolean,
    y3: number[]
}
// ! 类型别名中的拓展方式__  &
type oldDay = theDay & {
    z: number
}
const oneDay: theDay = {
    x: true, y3: [1, 3]
}
const twoDay: oldDay = {
    x: true, y3: [1, 3],
    z: 3
}


//! 向现有的接口类型中增加字段
// ?????为啥不能加到一起呢     显示每次的区别吗

interface oneface {
    faceName: string
}
interface oneface {
    faceNum: number
}
const face2: oneface = {
    faceName: 'za..',
    faceNum: 123
}

//! 向现有的类型别名中增加字段
// !!! 类型创建后不能更改 不能在同一类型名称里新增字段

type oneType = {
    faceName: string
}
// type oneType =  {
//     faceNum:number
// }
type twoType = oneType & {
    faceNum: number
}
const typetest1: oneType = {
    faceName: 'qweqwe'
}
const typetest2: twoType = {
    faceNum: 123,
    faceName: 'qweqwe'
}
console.log(typetest1, typetest2);
