"use strict";
// 构造签名
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function Fn(ctor) {
    return new ctor('hi-hai');
}
const fHi = Fn(Ctor);
console.log(fHi.s);
// function FnTwo(data: CallOrSomeConstructor) {
//     let d = new data('2022-10-12')
//     // let q = data(99)
//     console.log(d);
// }
// const fHi2 = FnTwo({ time: new Date() })
function returnNumberday10(n) {
    console.log(n);
    let msynums = 19;
    n(msynums);
}
returnNumberday10((n) => n * 2);
