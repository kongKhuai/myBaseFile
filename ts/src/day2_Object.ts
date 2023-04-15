function print(obj:{a:Date;b:string}):string{
return `今天是${new Date(obj.a).getDay()}},天气${obj.b}`
}
print({a:new Date(),b:'晴天'}) 
// todo     参数的类型注释是对象类型       {a:Date;b:strin}   ;  => 分号或者逗号     末尾的是可选的

function frintName(obj:{first:string,last?:string}){
    console.log(obj.first,);
    if(obj.last){
        console.log(obj.last);
    }
}

// frintName({first:'CSS'});
// frintName({first:'CSS',last:'JavaScript'});


// !!联合类型
var id :number | string =' 12'

// *union 联合     |  两个或者多个其他类型组成的类型



//!! 类型别名    ,;: 可选 推荐首字母大写
type Point2 = {
    x:string,
    y2:number;
    z?:number[]
    a?:string[]
}
function pointOBj(obj:Point2){}
pointOBj({x:'qwe',y2:123})


type Id = number | string;
function pointId(id:Id){}
pointId(111111)
pointId(22222222)


type UserName  = string
function pointStr(str:string):UserName{
    return str.toLowerCase().slice(0,2)
}
console.log(pointStr('黄粱一梦'));
