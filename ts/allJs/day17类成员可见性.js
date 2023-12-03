"use strict";
/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-19 07:25:39
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-20 07:24:16
 * @FilePath: \ts\allJs\day17类成员可见性.js
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
    constructor(theName, age) {
        this.money = 100; //子类可以访问
        this.privateMoney = 10;
        this.name = theName;
        this.age = age;
    }
    showInfo() {
        console.log(this.name, this.age, this.money);
    }
}
let greeter17 = new Greeter17('Tom', 2);
console.log(greeter17.name); //Tom
// console.log(greeter17.age);//属性“age”为私有属性，只能在类“Greeter17”中访问。
// console.log(greeter17.money);//属性“money”受保护，只能在类“Greeter17”及其子类中访问
// console.log(greeter17.privateMoney);//属性“privateMoney”受保护，只能在类“Greeter17”及其子类中访问
greeter17.showInfo(); //Tom 2 100
//子类
class GreeterChild extends Greeter17 {
    constructor() {
        super('Jerry', 5);
        this.privateMoney = 20; //todo子类也可以修改修饰符
        console.log(this.name); //jerry
        // console.log(this.age);//属性“age”为私有属性，只能在类“Greeter17”中访问
        console.log(this.money); //100
    }
}
let greeterChild = new GreeterChild();
console.log(greeterChild.privateMoney);
// todoTypeScript允许跨实例的私有访问
class Across {
    constructor() {
        this.across = 10;
        // constructor(x: number) {
        //     this.across = x
        // }
    }
    sameAs(other) {
        console.log(61, other.across, this.across);
        return other.across === this.across;
    }
}
let acrossOther = new Across();
console.log(67, acrossOther.sameAs(acrossOther));



