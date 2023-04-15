"use strict";
function print(obj) {
    return `今天是${new Date(obj.a).getDay()}},天气${obj.b}`;
}
print({ a: new Date(), b: '晴天' });
// todo     参数的类型注释是对象类型       {a:Date;b:strin}   ;  => 分号或者逗号     末尾的是可选的
function frintName(obj) {
    console.log(obj.first);
    if (obj.last) {
        console.log(obj.last);
    }
}
// frintName({first:'CSS'});
// frintName({first:'CSS',last:'JavaScript'});
// !!联合类型
var id = ' 12';
function pointOBj(obj) { }
pointOBj({ x: 'qwe', y2: 123 });
function pointId(id) { }
pointId(111111);
pointId(22222222);
function pointStr(str) {
    return str.toLowerCase().slice(0, 2);
}
console.log(pointStr('黄粱一梦'));
