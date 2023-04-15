// 类型断言

// 一些时候ts并不能知道具体类型 所以//!需要更具体的类型注释

// 方式一 as 
// const canvas = document.getElementById('canvas') as HTMLCanvasElement;

// 方式二 <> 尖括号
// const myCanvas = <HTMLCanvasElement> document.getElementById('canvas')

// const type4 = '张山'  
// const type4 = '张山' as number
// !"类型 \"string\" 到类型 \"number\" 的转换可能是错误的，因为两种类型不能充分重叠。如果这是有意的，请先将表达式转换为 \"unknown\"。
// const type4 =( '张山' as any) as number
// * any 表示全部类型 自然可以转为number类型

const type4 =( '张山' as unknown) as number
// *  unknown 表示我不知道这个是什么类型  所以可以转number
// *  unknown  语义上比any更确切

// 文字类型与数字类型、布尔类型
let str4 = "str4"
const string4 = "string4"
let str27 :'qwe'|"asd"|"zxc" = 'asd'
let num4 :1|2|3|4 = 4

function funStr(b:string,c:'top'|'bottom') :'xixi'|'haha'{
return c=='top' ?'xixi':'haha';
}
console.log(funStr('qwe', 'top'));
console.log(funStr('qwe', 'bottom'));
function funNum(a:boolean,b:string):1|0{
    return a&&b.length ?1:0
}
console.log(funNum(true, 'top'));
console.log(funNum(true, ''));
console.log(funNum(false, 'bottom'));

// 布尔类型

let mtrue:true=true
let mfalse :false = false


// !文字断言有时并不精准   比如下面的method 断言为string  但是strign太大并不一定为‘get'|'post'
// !所以给给方法的入参加 as   或者给对象加  as const
function point4(url:string,method:'get'|'post'){

}
const requestData = {
    url:'http://192.....',
    method:'get'
}

// point4(requestData.url,requestData.method)//类型“string”的参数不能赋给类型“"get" | "post"”的参数。
// !方式一  as 'get'
// point4(requestData.url,requestData.method as 'get')

// !方式二    as 'get'
// const requestData = {
//     url:'http://192.....',
//     method:'get' as 'get'
// }
// ! 方式三    as const
// const requestData = {
//     url:'http://192.....',
//     method:'get'
// }as const


