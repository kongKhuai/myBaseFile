"use strict";
//* 接口类型  interface
function pointCard(obj) {
}
pointCard({
    x: 3,
    y3: 'asd'
});
let p1 = { x: 10, y: 20 };
function logInter(val) {
}
function logOutBar(val) {
}
logInter({
    x: 2, y3: '坐标'
});
logOutBar({
    x: 2, y3: '坐标', qqCord: 2364847385
});
const eventBar = {
    qqCord: 2364847385,
    x: 123,
    y3: 'xxx'
};
const oneDay = {
    x: true, y3: [1, 3]
};
const twoDay = {
    x: true, y3: [1, 3],
    z: 3
};
const face2 = {
    faceName: 'za..',
    faceNum: 123
};
const typetest1 = {
    faceName: 'qweqwe'
};
const typetest2 = {
    faceNum: 123,
    faceName: 'qweqwe'
};
console.log(typetest1, typetest2);
