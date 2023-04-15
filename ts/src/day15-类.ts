// calss 类

// 类成员
// ·类属性
// ·readonly
// ·构造器
// ·方法
// ·Getters\Setters   - 访问器和设置器1
// ·索引签名

class Point {
    x: number = 0
    y: number = 0

    constructor() {
        this.x = 20
        this.y = 20
    }
}
const pt1 = new Point()
console.log("%c Line:21 🍖 pt1", "color:#ea7e5c", pt1);
pt1.x = 1
pt1.y = 100

console.log("%c Line:19 🧀", "color:#ed9ec7", pt1);
// Todo 使用第三方类时，属性未初始化(属性“name”没有初始化表达式，且未在构造函数中明确赋值)
// Todo 可以在key的后面加个 ！ 相当于使用了一个断言操作符
class OkGreeter {
    name!: string
}

// readonly
// !带有readonly属性的值只能在初始化和用户new class()的时候(即constructor)的时候设置
class Greeter {
    readonly name: string = 'tom'
    age: number = 12
    constructor(otherName?: string) {
        if (otherName) {
            this.name = otherName
        }
    }
    internalFunc(name: string) {
        // this.name = name//!无法为“name”赋值，因为它是只读属性
    }
}
const classGreeter = new Greeter('jerry')
console.log("%c Line:45 🍧 classGreeter", "color:#6ec1c2", classGreeter);
let query: number = 49
class GreeterTwo extends Greeter {
    // age: number = 14
    query: number = 14

    // 构造器 即constructor（）
    // 1、构造函数不能有类型参数
    // 2、构造函数不能有返回类型注释  即constructor（）：string  是错误的
    constructor() {
        super()
        // this指向 如果自己有age属性this.age 指向自己，否则看继承的父级有没有往上找
        // console.log("%c Line:57 🍔", "color:#f5ce50", this.age);
    }
    // 方法
    enlarge(n: number): void {
        // this指向问题
        // this.query 代表的class内部的属性
        // query  代表的class外部的属性
        this.query += n
        console.log(this.query, query);// 16  49
    }
    get _query(): number {
        return this.query
    }
    set _query(num: string | number) {
        let numVal = Number(num)
        if (!Number.isFinite(num)) {
            numVal = 0
        }
        this.query = numVal
    }
}

const p59 = new GreeterTwo()

// 方法
p59.enlarge(2)

// Getters\Setters   - 访问器和设置器
// 1、如果存在get，但是没有set，则该属性自动是自读的
// 2、如果没有指定set参数的类型，它将从getter的返回类型中推断出来
// 3、访问器和设置器必须有相同成员的可见性（后面讲了再补充）

// set的值类型可以和get不一致，但是要保证兼容性
console.log("%c Line:89 🍕 p59._query", "color:#b03734", p59._query);
// p59._query(123)//!此表达式不可调用。类型 "Number" 没有调用签名
p59._query = 123
p59._query = '1234'
console.log("%c Line:92 🍕 p59._query", "color:#ea7e5c", p59._query);

// 类的索引签名
class MyClass {
    [s: string]: boolean | ((s: string) => boolean)
    x = true
    check(z: string) {
        return this[z] as boolean
    }
    check2(y: string) {
        return !!y.length
    }
    checkNum(num: string) {
        return Boolean(num.length > 0 && num.length <= 100)
    }
}










