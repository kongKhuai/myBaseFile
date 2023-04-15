"use strict";
const x5 = undefined;
const y5 = null;
function unNull(_x5, _y5) {
}
const z = null;
const w = null;
unNull(123, z);
unNull(123, w);
// 类型断言
//* ?:xx    ?表示可选
//* x5!.toString    表示当x5不是null或者undefined 的时候执行x5.toStrign
function un5(y5, x5) {
    console.log(arguments);
    console.log(x5.toString());
}
// un5(
//     undefined,123
// )
// !枚举   enum
var enum5;
(function (enum5) {
    enum5[enum5["left"] = 0] = "left";
    enum5[enum5["right"] = 1] = "right";
    enum5[enum5["top"] = 4] = "top";
    enum5[enum5["bottom"] = 5] = "bottom";
})(enum5 || (enum5 = {}));
console.log(enum5.left);
console.log(enum5.right);
console.log(enum5.top);
console.log(enum5.bottom);
//! BigInt  比较大的数字
//! symbol  全局唯一引用
var big5 = 100n;
// big5=1234566789023423423423423423423423423423423423423423423423423423423423423423423423423423423423412345667890234234234234234234234234234234234234234234234234234234234234234234234234234234234234123456678902342342342342342342342342342342342342342342342342342342342342342342342342342342342341234566789023423423423423423423423423423423423423423423423423423423423423423423423423423423423412345667890234234234234234234234234234234234234234234234234234234234234234234234234234234234234123456678902342342342342342342342342342342342342342342342342342342342342342342342342342342342341234566789023423423423423423423423423423423423423423423423423423423423423423423423423423423423412345667890234234234234234234234234234234234234234234234234234234234234234234234234234234234234
// 不能将类型“number”分配给类型“bigint”。
const big55 = BigInt(88);
console.log(big5, big55);
const symbol5 = Symbol(123);
const symbol52 = Symbol(123); //
// console.log(symbol5==symbol52);//! 此条件将始终返回 "false"，因为类型 "typeof symbol5" 和 "typeof symbol52" 没有重叠
//!类型缩小
function types5(a) {
    if (typeof a === "number") {
    }
    else if (typeof a === 'bigint') {
    }
    else if (typeof a === 'string') {
    }
    else {
        // ...
    }
}
// !真值缩小
// 常用方法 条件、&&、||、if()...、布尔否定（！、!!、Boolean()）
function types52(strs) {
    // if(typeof a === "object"){
    // for(let s of a){ //!对象可能为 "null"。
    //     console.log(s);
    // }
    // for(let s in a){ //!"for...in" 语句右侧必须是 "any" 类型、对象类型或类型参数，但此处的类型为“never”。
    //     console.log(s);
    // }
    // }
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === 'bigint') {
    }
    else if (typeof strs === 'string') {
    }
    else {
        // ...
    }
}
function multiple5(val, num) {
    if (!val) {
        return val;
    }
    else {
        return val.map((item) => {
            return item * num;
        });
    }
}
console.log(multiple5([1, 2, 3], 23));
