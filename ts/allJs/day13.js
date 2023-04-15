"use strict";
/*
 * @Author: kongs@njruiyue.cn
 * @Date: 2023-03-22 06:45:48
 * @LastEditors: kongs@njruiyue.cn
 * @LastEditTime: 2023-03-30 07:09:41
 * @FilePath: \TypeScript\src\day13.ts
 * @Description:
 *
 */
// 认识对象类型
// ?定义对象类型基本的方法
// todo1使用匿名的方式
function greet1(person) {
    return `hello ${person.name}`;
}
function greet2(person) {
    return `hello ${person.name}`;
}
function greet3(person) {
    return `hello ${person.name}`;
}
function paintShape(options) {
    let { xPos = 0, yPos = 0 } = options;
    console.log({ xPos, yPos });
}
const shape = {};
paintShape({ shape });
paintShape({ shape, xPos: 100 });
paintShape({ shape, xPos: 100, yPos: 200 });
function doSomething(obj) {
    console.log(obj.prop);
    // obj.prop= ''//!无法为“prop”赋值，因为它是只读属性。
}
doSomething({ prop: 'hi~' });
function logResideng(home) {
    console.log(home.resident);
    console.log(home.resident.name);
}
function editHome(home) {
    home = {
        resident: {
            name: '张三',
            size: 'blob'
        }
    };
}
function editResident(home) {
    // home.resident = {//!无法为“resident”赋值，因为它是只读属性
    //     name: '张三',
    //     size: 'blob'
    // }
}
function editResidentName(home) {
    home.resident.name = '张三';
}
let writablePerson = {
    age: 18
};
let readonlyPerson = writablePerson;
console.log(writablePerson.age, readonlyPerson.age); //18 18
writablePerson.age++;
// readonlyPerson.age++//!无法为“age”赋值，因为它是只读属性
console.log(writablePerson.age, readonlyPerson.age); //19 19
let stringarr = ['q', 'w', 'e'];
let firstStringaee = stringarr[0];
let testStrign = {
    name: 'hello~',
    age: 16
};
let testStrign2 = {
    name: 'hello~',
    size: 200,
    age: 15
};
let extendsOBj = {
    street: '',
    unit: ''
};
let threeTypes = {
    street: '',
    userName: '',
    newKey: '',
    age: 12
};
const cc = {
    color: 'pink',
    redius: 1 / 2
};
// 直接在函数中使用
function draw(data) {
    console.log("%c Line:199 🍧 data", "color:#3f7cff", data.color);
    console.log("%c Line:200 🍧 data", "color:#3f7cff", data.redius);
}
draw({
    color: 'red',
    redius: 20
});
const objInterface = {
    name: '',
    sort: ''
};
let xBox = {
    content: 'he~'
};
// console.log(xBox.content.toLowerCase())//!“xBox.content”的类型为“未知”
// 处理方式1 类型缩小
if (typeof xBox.content === 'string') {
    console.log(xBox.content.toLowerCase());
}
// 处理方式2 类型断言as 
console.log(xBox.content.toLowerCase());
function setContent(box, newContent) {
    box.content = newContent;
}
let boxA = {
    content: 'hi tom'
};
let boxB = {
    content: 123
};
const appleVal = {
    content: {
        color: 'red'
    }
};
// ?从类型中创建类型
// 泛型类型
// keyof类型操作符
// typeof类型操作符
// 索引访问类型
// 条件类型
// 映射类型
// 模板字面量类型
// 泛型
// function identicy13(arg:string):string{
//     return arg
// }
// function identicy13(arg:any):any{
//     return arg
// }
function identicy13(arg) {
    return arg;
}
let output = identicy13('strings');
// 使用类型推断
let output2 = identicy13('strings'); //当不能推断时需使用上面的方法显示的定义类型
