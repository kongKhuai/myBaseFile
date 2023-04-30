"use strict";
// commonJs 语法
function abs(num) {
    return Math.abs(num);
}
// 方法1
module.exports = {
    pi: 3.1415926,
    abs,
    name: 'tom'
};
// 方法二
// exports.abs = abs
