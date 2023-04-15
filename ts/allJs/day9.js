"use strict";
// function
function greetor(fun) {
    console.log("greetings");
}
function greetor2(fun) {
    console.log("greetings");
}
function printToConsole(str) {
    console.log(str);
}
greetor(printToConsole);
greetor2(printToConsole);
function dosomeThing(fun) {
    console.log(fun.description + '--function--' + fun(Math.random()));
}
function fun(num) {
    console.log(num);
    return num > 0.5;
}
fun.description = 'descriptionFun';
dosomeThing(fun);
