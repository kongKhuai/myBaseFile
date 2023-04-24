/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-15 23:45:29
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-19 07:22:15
 * @FilePath: \ts\src\day16-类的继承.ts
 * @Description:
 *
 */
// 类的继承 implements子句    继承interface接口或者类型type
// 类的继承 extends子句  继承类 class

interface Pingable {
    ping(): void
    pupu?(s: string): number
}
interface Pingsky {
    sky: boolean
}
class Sonar implements Pingable {
    ping(): void {

    }
}
class Ball implements Pingable {
    ping(): void {
        throw new Error("Method not implemented.");
    }
    pupu(s: string): number {
        return s.length
    }
}
class ManyClass implements Pingable, Pingsky {
    // !接口中定义的（除了可选的）都需要在类中实现，否则报错
    // !接口中可选属性的如果在类中实现了才可以用，可以不实现
    sky: boolean = true;
    ping(): void {
        throw new Error("Method not implemented.");
    }
    //!参数类型可以和接口定义的不一样，但要保持内部实现的兼容
    pupu(s: string | number): number {
        return typeof s == 'string' ? s.length : s * 2
    }
}

let sonarC: Sonar = new Sonar()
console.log("%c Line:46 🥕 sonarC", sonarC.ping());
// console.log("%c Line:47 🥕 sonarC", sonarC.pupu());//!类型“Sonar”上不存在属性“pupu”




// extends 继承类
class DocClass extends ManyClass {
    docUrl: string = 'https://www.bilibili.com/video/BV1H44y157gq?p=87&vd_source=9c8d5621c53c1dfb00b8c6ed5b9cd083'
}
let docInfo = new DocClass()
console.log(docInfo.docUrl);
console.log(docInfo.sky);

// 类-重写方法
// 派生类中的方法一定要和基类的方法兼容比如参数、返回值等
class Base {
    orderName: string = 'i-base'
    constructor() {
        console.log("%c Line:94 🍊", "color:#465975", this.orderName);
    }
    greet() {
        console.log("%c Line:65 🥒", "color:#6ec1c2", 'empty68');
    }

}
class Derived extends Base {
    // greet(name: string) { //!类型“Derived”中的属性“greet”不可分配给基类型“Base”中的同一属性。
    //   不能将类型“(name: string) => void”分配给类型“() => void”
    greet(name?: string) {
        if (name) {
            console.log("%c Line:71 🍅", "color:#6ec1c2", name.toUpperCase());
        } else {
            super.greet()
        }
    }
}
let ders = new Derived()
// ders.greet()
// ders.greet('top')
// ders.greet() greet虽然基类和派生类都有这个方法，但是此时是调用派生类的方法 但是可以用过super调用基类的方法

let ddres: Base = ders
// ddres.greet()
// console.log("%c Line:86 🥟 ddres", "color:#93c0a4", ddres);

// 初始化顺序
// 基类的字段被初始化
// 基类构造函数运行
// 派生类的字段被初始化
// 派生类构造函数运行
class Orders extends Base {
    orderName: string = 'i-orders'
    constructor() {
        super()
        console.log("%c Line:100 🍫", "color:#ffdd4d", this.orderName);
    }
    getorderName() {
        super.greet()
    }
}
let orderVal = new Orders()


// 继承内置类型
// 主要是针对低版本 es5  需要明确的设置原型  
class MsgError extends Error {
    constructor(s: string) {
        super(s)
        // 明确的设置原型  
        // Object.setPrototypeOf(this, MsgError.prototype)
    }
    sayHello() {

        console.log("%c Line:121 🍣", "color:#93c0a4", this.message);
    }
}
const msgError = new MsgError('image.png')
console.log(msgError instanceof MsgError)








