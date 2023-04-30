// 模块
// 在TypeScript中编写基于模块的代码时，有三个主要方面需要考虑：
// 语法：我想用什么语法来导入和导出东西？
// 模块解析：模块名称（或路径）和磁盘上的文件之间是什么关系？
// 模块输出目标：我编译出来的JavaScript模块应该是什么样子的？

// 方法一
// default 的可以直接导出，没有的可以用括号解构，
// 都可以起别名,default 可以直接写别名，其他的通过as 起别名
import helloFun, { pi as PI } from "./exportFile"
helloFun('tom')

console.log("%c Line:9 🥛", "color:#465975", PI);
// 方法二
import * as files from "./exportFile"
console.log(files.pi)
// 对于default导出 可以直接使用default调用
files.default('jerry')


import { createName } from "./exportFile";
// import { createName, Cars, Dogs } from "./exportFile";
// import { createName,type Cars,type Dogs } from "./exportFile";
import type { Cars, Dogs } from "./exportFile";



createName('mini')
type Tests = Cars | Dogs


// commonJs 语法
const mathFile = require('./commonjsFile')
console.log("%c Line:34 🍇 mathFile", "color:#ed9ec7", mathFile.pi, mathFile.abs(-123123));
