/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-19 07:25:39
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-24 07:23:51
 * @FilePath: \ts\src\day17类成员可见性.ts
 * @Description:
 *
 */
// 类成员可见性
// public   公开的，默认值。任何对象在任何地方都可以访问
// protected   受保护的。能在当前类或者子类中进行访问 ,派生类可以暴露基类受保护的成员,
// private  私有的。只能在当前类中进行访问      TypeScript允许跨实例的私有访问
// 同day7.ts
//! 当成员被标记为 private时，它就不能在声明它的类的外部访问
//! protected和 private类似，但是， protected成员在派生类中可以访问
//! 子类也可以修改修饰符
class Greeter17 {
    public name: string;//公开
    private age: number;//私有
    protected money: number = 100;//子类可以访问
    protected privateMoney: number = 10;

    constructor(theName: string, age: number) {

        this.name = theName;
        this.age = age
    }

    showInfo() {
        console.log(this.name, this.age, this.money)
    }

}

let greeter17 = new Greeter17('Tom', 2)
console.log(greeter17.name);//Tom
// console.log(greeter17.age);//属性“age”为私有属性，只能在类“Greeter17”中访问。
// console.log(greeter17.money);//属性“money”受保护，只能在类“Greeter17”及其子类中访问
// console.log(greeter17.privateMoney);//属性“privateMoney”受保护，只能在类“Greeter17”及其子类中访问
greeter17.showInfo()//Tom 2 100

//子类
class GreeterChild extends Greeter17 {
    privateMoney = 20//todo子类也可以修改修饰符
    constructor() {
        super('Jerry', 5)
        console.log(this.name);//jerry
        // console.log(this.age);//属性“age”为私有属性，只能在类“Greeter17”中访问
        console.log(this.money);//100
    }
}
let greeterChild = new GreeterChild()
console.log(greeterChild.privateMoney)


// todoTypeScript允许跨实例的私有访问
class Across {
    private across = 10
    public sameAs(other: Across) {
        console.log(61, other.across, this.across)
        return other.across === this.across
    }
    // constructor(x: number) {
    //     this.across = x
    // }
}
let acrossOther = new Across()
console.log(67, acrossOther.sameAs(acrossOther));

// !类的静态成员 static

class MyStaticClass {
    static x: number = 75
    private static y: number = 80    //todo   可见性修饰符和静态属性修饰符可以连着用 
    static pointx() {
        console.log(this.x, MyStaticClass.x, this.y, MyStaticClass.y)
        return 123
    }
}
class MyStaticClass2 extends MyStaticClass {
    myX = MyStaticClass2.pointx()
}
console.log(MyStaticClass.x, MyStaticClass.pointx())
// console.log(MyStaticClass.y)//属性“y”为私有属性，只能在类“MyStaticClass”中访问。
console.log(MyStaticClass2)


// 需注意关键字冲突，特殊的静态名称不安全，避免使用：name,length,call等
class TheEssential {
    // static name:'Tom'//静态属性“name”与构造函数“TheEssential”的内置属性函数“name”冲突
    // static length: 'Tom'//静态属性“length”与构造函数“TheEssential”的内置属性函数“length”冲突
    static call = () => { }
}
// TypeScripti没有静态类的概念，因为我们还有函数和普通对象
type NArrs = number[]
class StaticClass {
    static myList: NArrs = []
    constructor(arr: NArrs) {
        StaticClass.myList = arr
    }
    static getLastIndex() {
        return StaticClass.myList.reduce((a, b, i) => {
            return b > 5 ? i : a
        }, -1)
    }
    static getLastData() {
        return StaticClass.myList.reduce((a, b) => {
            return b > 5 ? b : a
        }, -1)
    }
}
let myStaticClass = new StaticClass([1, 3, 5, 7, 9])
console.log("%c Line:104 🍊 StaticClass.getLastIndex()", "color:#93c0a4", StaticClass.getLastData());
console.log("%c Line:110 🌭 StaticClass", "color:#93c0a4", StaticClass.getLastIndex());
// 1、可以直接使用方法getLastIndex()
function getLastIndex(list: NArrs): number {
    return list.reduce((a, b, i) => {
        return b > 5 ? i : a
    }, -1)
}
// 2、可以使用对象funs.getLastIndex
const funs = {
    getLastIndex(list: NArrs): number {
        return list.reduce((a, b, i) => {
            return b > 5 ? i : a
        }, -1)
    }
}



// 类里的static区块
class Foo {
    static #count = 12;
    get count() {
        return Foo.#count;
    }
    // 默认会执行
    static {
        Foo.#count ++
    }
}

let fooClass = new Foo()

console.log("%c Line:145 🥐 fooClass", "color:#33a5ff", fooClass.count);


// 泛型类
class BoxType<T>{
    content: T
    constructor(val: T) {
        this.content = val
    }
    // 不能给静态属性设置泛型
    // static defaultVal:T//静态成员不能引用类类型参数
}
// 如以下写法，不写类型的时候默认按照构造函数constrctor()自动推断
const boxTypeVal1 = new BoxType('tom')
const boxTypeVal2 = new BoxType<string>('tom')
const boxTypeVal3: BoxType<string> = new BoxType('tom')

boxTypeVal1.content = 'jerry'
boxTypeVal2.content = '123'
// boxTypeVal3.content = 123


// 类运行时的this

//?没理解 每个类定义只有一个函数被分配，而不是每个实例会创建一个函数
//?没理解 基类方法这个定义依旧可以通过super调用，这个优于箭头函数

// 保证this指向的正确可以通过下面两个方法
// 1、使用箭头函数
// 2、传入this
class MyClassThis {
    name2 = 'MyClass'
    getName1() {
        return this.name2
    }
    getName2 = () => {
        return this.name2
    }
}
const myClassThisVal = new MyClassThis()
const objThis = {
    name: 'obj~',
    getName: myClassThisVal.getName1,
    getName3: myClassThisVal.getName2
}
console.log("%c Line:191 🍎", myClassThisVal.name2, '~~', myClassThisVal.getName1(), myClassThisVal.getName2());
console.log("%c Line:192 🍎", objThis.getName(), '~~', objThis.getName3(), '~~', myClassThisVal);
