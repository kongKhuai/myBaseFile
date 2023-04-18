"use strict";
/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-15 23:45:29
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-18 23:58:56
 * @FilePath: \ts\src\day16-类的继承.ts
 * @Description:
 *
 */
// 类的继承 implements子句    继承interface接口或者类型type
// 类的继承 extends子句  继承类 class
class Sonar {
    ping() {
    }
}
class Ball {
    ping() {
        throw new Error("Method not implemented.");
    }
    pupu(s) {
        return s.length;
    }
}
class ManyClass {
    constructor() {
        // !接口中定义的（除了可选的）都需要在类中实现，否则报错
        // !接口中可选属性的如果在类中实现了才可以用，可以不实现
        this.sky = true;
    }
    ping() {
        throw new Error("Method not implemented.");
    }
    //!参数类型可以和接口定义的不一样，但要保持内部实现的兼容
    pupu(s) {
        return typeof s == 'string' ? s.length : s * 2;
    }
}
let sonarC = new Sonar();
console.log("%c Line:46 🥕 sonarC", sonarC.ping());
// console.log("%c Line:47 🥕 sonarC", sonarC.pupu());//!类型“Sonar”上不存在属性“pupu”
// extends 继承类
class DocClass extends ManyClass {
    constructor() {
        super(...arguments);
        this.docUrl = 'https://www.bilibili.com/video/BV1H44y157gq?p=87&vd_source=9c8d5621c53c1dfb00b8c6ed5b9cd083';
    }
}
let docInfo = new DocClass();
console.log(docInfo.docUrl);
console.log(docInfo.sky);
// 类-重写方法
// 派生类中的方法一定要和基类的方法兼容比如参数、返回值等
class Base {
    constructor() {
        this.orderName = 'i-base';
        console.log("%c Line:94 🍊", "color:#465975", this.orderName);
    }
    greet() {
        console.log("%c Line:65 🥒", "color:#6ec1c2", 'empty68');
    }
}
class Derived extends Base {
    // greet(name: string) { //!类型“Derived”中的属性“greet”不可分配给基类型“Base”中的同一属性。
    //   不能将类型“(name: string) => void”分配给类型“() => void”
    greet(name) {
        if (name) {
            console.log("%c Line:71 🍅", "color:#6ec1c2", name.toUpperCase());
        }
        else {
            super.greet();
        }
    }
}
let ders = new Derived();
// ders.greet()
// ders.greet('top')
// ders.greet() greet虽然基类和派生类都有这个方法，但是此时是调用派生类的方法 但是可以用过super调用基类的方法
let ddres = ders;
// ddres.greet()
// console.log("%c Line:86 🥟 ddres", "color:#93c0a4", ddres);
// 初始化顺序
// 基类的字段被初始化
// 基类构造函数运行
// 派生类的字段被初始化
// 派生类构造函数运行
class Orders extends Base {
    constructor() {
        super();
        this.orderName = 'i-orders';
        console.log("%c Line:100 🍫", "color:#ffdd4d", this.orderName);
    }
    getorderName() {
        super.greet();
    }
}
let orderVal = new Orders();
