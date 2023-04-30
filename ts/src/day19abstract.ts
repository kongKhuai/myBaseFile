/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-26 07:15:10
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-27 07:27:27
 * @FilePath: \ts\src\day19abstract.ts
 * @Description: 抽象类和方法  abstract 修饰符
 * 
 */
// 抽象类和方法  abstract 修饰符
// 抽象类只能做基类，不能被实例化
abstract class BaseAbstract {
    abstract getName(): string//抽象的属性只能定义不能实现，让子类去写具体的实现

    pointName() {
        console.log(this.getName())
    }
}

// const baseVal =new BaseAbstract()//无法创建抽象类的实例。
class Deriver extends BaseAbstract {
    getName(): string {
        return 'tom'
    }
}
const baseVal = new Deriver()
console.log("%c Line:19 🌶 baseVal", "color:#3f7cff", baseVal.getName());
baseVal.pointName()


// 没理解
function greet(ctor: new () => BaseAbstract) {
    const instance = new ctor()
    instance.pointName()
}
greet(Deriver)



// 类之间的关系
class Point1 {
    x = 0
    y = 0
}
class Point23 {
    x = 0
    y = 0
    // z = 123
}
let point49: Point1 = new Point23()


class Empty {

}
function fnc(x: Empty) { }
fnc(window)
fnc({})
fnc(123)
fnc([])
fnc(Date)