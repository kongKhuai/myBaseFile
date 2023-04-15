// 构造签名
class Ctor {
    s: string;
    constructor(s: string) {
        this.s = s
    }
}
type SomeConstructor = {
    // 入参
    // 返回Ctor
    new(s: string): Ctor
}
function Fn(ctor: SomeConstructor) {
    return new ctor('hi-hai')
}
const fHi = Fn(Ctor)
console.log(fHi.s);

interface CallOrSomeConstructor {
    // new(s: string): Date
    (n: number): number
}
// function FnTwo(data: CallOrSomeConstructor) {
//     let d = new data('2022-10-12')
//     // let q = data(99)
//     console.log(d);
// }
// const fHi2 = FnTwo({ time: new Date() })
function returnNumberday10(n: CallOrSomeConstructor) {
    console.log(n)
    let msynums = 19
    n(msynums)
}
returnNumberday10((n) => n * 2)