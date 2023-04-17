/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-15 23:45:29
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-18 07:33:28
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












