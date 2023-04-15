//!   等值缩小
//   常用方法  ===全等  ！==全不等   == 等于   ！= 不等于
//*   undefined==null  所以 ！=null  会过滤掉null和undefined
interface Context{
    val:number|null|undefined;
}
function multipvalues6(obj:Context,num:number){
    if(obj.val !=null){
        obj.val *=num;
        console.log(obj.val);
    }
    console.log();
    
}
multipvalues6({val:5},6)
multipvalues6({val:null},6)
multipvalues6({val:undefined},6)



// !  in操作符缩小
// 'value' in x
//* true : X 具有可选或者必需属性的类型的值
//* false : X 需要具有可选或者缺失属性的值


type Fish={
    swim:()=>{}
}
type Bird = {
    fly:()=>{}
}
type Human  = {swim?:()=>void,fly?:()=>{}}
function move6 (val:Fish|Bird){
    if('swim' in val){
        val.swim()
    }else{
        val.fly()
    }
}
function move62 (val:Fish|Bird|Human){
    if('swim' in val){
        (<Fish>val).swim()
    }else{
        (val as Bird).fly()
    }
}


//! instanceof 操作符缩小
function instanType(val:Date|string)
{
    if(val instanceof Date){
        console.log(val.toUTCString())
    }else{
        console.log(val.toUpperCase())
    }
}
instanType(new Date())
instanType('xxx')

function txtType(str6:'string'|number){
    // if(str6 instanceof string){
    //     console.log(str6)
    // }
    if(typeof str6 === 'string'){
        console.log(str6)
    }else{
        console.log(str6*8)
    }
}

txtType(12)
txtType('string')


// !分配缩小
// *ts自动分配类型
// let x:string|number
let x = Math.random()>.5?10:'hello world'
x = 1
x = 'red'
// x = null  //!不能将类型“null”分配给类型“string | number”。


// ! 控制流分析
function example6(){
    let xfn :string|number|boolean
    xfn = Math.random()>.5
    return xfn
}
let x6 = example6()
// x6 = 123 //!不能将类型“number”分配给类型“boolean”