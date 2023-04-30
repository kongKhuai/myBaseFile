"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pi = exports.createName = void 0;
/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-30 23:18:27
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-05-01 00:01:25
 * @FilePath: \ts\src\exportFile.ts
 * @Description:
 *
 */
function helloWord(userName) {
    console.log(`hello~${userName}`);
}
exports.default = helloWord;
function createName(userName) {
    console.log(`hello~${userName}`);
}
exports.createName = createName;
exports.pi = 3.14;
// commonJs 语法
function abs(num) {
    return Math.abs(num);
}
// 方法1
// module.exports = {
//     pi: pi,
//     abs,
//     name: 'tom'
// }
// 方法二
// exports.abs = abs
