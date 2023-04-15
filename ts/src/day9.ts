// function


// 将单个方法设置为类型 稍微优雅点
type greetFun= (a:string) => void


function greetor(fun:(a:string) => void){
    console.log("greetings");
}
function greetor2(fun: greetFun){
    console.log("greetings");
}
function printToConsole(str:string){
    console.log(str);
}

greetor(printToConsole)
greetor2(printToConsole)



//!调用签名     不允许使用属性
type  DescribableFunction={
    description:string,
    // 在参数列表和返回类型之间使用  ： 而不是  =>
    (someArg:number):boolean
}

function dosomeThing(fun:DescribableFunction){
    console.log(fun.description+'--function--'+fun(Math.random()));
}

function fun(num:number){
    console.log(num);
    return num>0.5
}

fun.description='descriptionFun'

dosomeThing(fun)