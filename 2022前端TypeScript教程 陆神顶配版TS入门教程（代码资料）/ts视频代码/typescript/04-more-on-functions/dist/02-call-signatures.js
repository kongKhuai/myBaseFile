"use strict";
function doSomething(fn) {
    console.log(fn.description + ' returned ' + fn(6));
}
function fn1(n) {
    console.log(n);
    return true;
}
fn1.description = 'hello';
doSomething(fn1);
