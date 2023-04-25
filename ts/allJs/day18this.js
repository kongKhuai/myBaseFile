"use strict";
/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-24 22:36:56
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-26 07:10:27
 * @FilePath: \ts\src\day18this.ts
 * @Description:
 *
 */
// this类型
class BoxThis {
    constructor() {
        this.content = '';
    }
    set(val) {
        this.content = val;
        return this;
    }
    sameAs(other) {
        return other.content == this.content;
    }
}
class ClearableBox extends BoxThis {
    clear() {
        this.content = '';
    }
}
const boxThis = new BoxThis();
const aThis = new ClearableBox();
const bThis = aThis.set('tom');
console.log("%c Line:27 🥓", "color:#4fff4B", bThis); // ClearableBox { content: 'tom' }
const derived = new ClearableBox();
// derived.sameAs(boxThis)//类型“BoxThis”的参数不能赋给类型“ClearableBox”的参数。// 类型 "BoxThis" 中缺少属性 "clear"，但类型 "ClearableBox" 中需要该属性。
// 基于类型守卫的this
//  this is Type     (this is 固定写法     Type 类型)
class FileSystemObject {
    constructor(path, networked) {
        this.path = path;
        this.networked = networked;
    }
    isFile() {
        return this instanceof FileRep;
    }
    isDirectory() {
        return this instanceof Directory;
    }
    isNetworked() {
        return this.networked;
    }
}
class FileRep extends FileSystemObject {
    constructor(path, content) {
        super(path, false);
        this.content = content;
    }
}
class Directory extends FileSystemObject {
    constructor() {
        super('', false);
        this.children = [];
    }
}
const fso = new FileRep('foo/bar.txt', 'foo');
if (fso.isFile()) {
    // const fso
    fso.content;
}
else if (fso.isDirectory()) {
    // const fso:Directory
    fso.children;
}
else if (fso.isNetworked()) {
    // const fso.NetWorked & FileSystemObject
    fso.host;
}
class Box82 {
    hasvalue() {
        return this.value !== undefined;
    }
}
const box82 = new Box82();
box82.value = 'hello';
if (box82.hasvalue()) {
    console.log(box82.value);
}
// 类的参数属性
// 即在构造函数参数中定义，参数前面写属性修饰符
class ParamsClass {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
let paramsClass101 = new ParamsClass(1, 2, 3);
console.log("%c Line:103 🍷", "color:#465975", paramsClass101.x);
// paramsClass101.x=123//无法为“x”赋值，因为它是只读属性。
// paramsClass101.y//属性“y”受保护，只能在类“ParamsClass”及其子类中访问。
// paramsClass101.z//属性“z”为私有属性，只能在类“ParamsClass”中访问。
// 类表达式   写一个匿名的class然后绑定到一个标识符上，就和原来一样使用
const someClass = class {
    constructor(v) {
        this.content = v;
    }
};
const someVal = new someClass(3123);
console.log("%c Line:117 🍰 someVal", "color:#f5ce50", someVal.content);
