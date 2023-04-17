/*
 * @Author: 16651618507@163.com
 * @Date: 2023-03-30 07:10:58
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-14 07:17:19
 * @FilePath: \TypeScript\src\day14.ts
 * @Description: 
 * 
 */
// type manipulation   类型操作
// function loggingIdentity<Type>(arg: Type): Type {
//     // 可以编译为js但是ts在编译期就会提示报错
//     console.log("%c Line:4 🍷", "color:#ea7e5c", arg.length);//类型“Type”上不存在属性“length”
//     return arg
// }
// loggingIdentity('hi~')
// 使用通用类型变量
function loggingIdentity<Type>(arg: Array<Type>): Type[] {
    console.log("%c Line:4 🍷", "color:#ea7e5c", arg.length);//类型“Type”上不存在属性“length”
    return arg
}
loggingIdentity([1, 2, 3, 4, 5])


// 泛型- 泛型类型
function identicy<Type>(arg: Type): Type {
    return arg
}
// let myIdentict:<Type>(arg:Type)=>Type = identicy
// let myIdentict:{<Type>(arg:Type):Type} = identicy
// 泛型接口的定义
// interface GenericIdentityFn {
//     <Type>(arg: Type): Type
// }
// let myIdentict: GenericIdentityFn = identicy
// 泛型接口的定义2, 这种写法需用户传入指定类型，更严谨
interface GenericIdentityFn<Type> {
    (arg: Type): Type
}
let myIdentict: GenericIdentityFn<string> = identicy


// 泛型类
class GenericNumber<NumType>{
    // 教程中是前两行，后面是为了处理报错写的初始值
    // zeroVal: NumType 
    // add: (x: NumType, y: NumType) => NumType 
    zeroVal: NumType = 123 as any
    add: (x: NumType, y: NumType) => NumType = (x: any, y: any) => {
        return x
    }
}
let myGenericNum = new GenericNumber<number>()
myGenericNum.zeroVal = 0
myGenericNum.add = function (x, y) {
    return x + y
}
let myGenericStr = new GenericNumber<string>()
myGenericStr.zeroVal = ''
myGenericStr.add = function (x, y) {
    return x + y
}
let aaa = myGenericNum.add(2, 4)
let bbb = myGenericStr.add('hi,', 'tom')
console.log("%c Line:59 🍞 aaa", "color:#fca650", aaa, bbb);


// 泛型约束
// function loggingIdenticy<Type>(arg: Type): Type {
//     console.log( arg.length);//类型“Type”上不存在属性“length”
//     return arg
// }
interface LengWist {
    length: number
}
function loggingIdenticy<Type extends LengWist>(arg: Type): Type {
    console.log(arg.length);
    return arg
}

// loggingIdenticy(123)//类型“number”的参数不能赋给类型“LengWist”的参数。
loggingIdenticy('123')
loggingIdenticy(['123', 2])

// 在泛型约束中使用类型参数
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}
let x4 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
console.log("%c Line:90 🍫", "color:#f5ce50", getProperty(x4, 'd'));
// console.log("%c Line:91 🍫", "color:#f5ce50", getProperty(x4, 'x'));//类型“"x"”的参数不能赋给类型“"a" | "b" | "c" | "d"”的参数。

// 在泛型中使用类类型

function create<Type>(c: { new(): Type }): Type {
    return new c()
}
class Beekeeper {
    hasMask: boolean = true
}
class Zookeeper {
    nameTag: string = 'Mikle'
}
class Animak {
    namLegs: number = 4
}
class Bee extends Animak {
    keeper: Beekeeper = new Beekeeper()
}
class Lion extends Animak {
    keeper: Zookeeper = new Zookeeper()
}
function createInstasnce<A extends Animak>(c: new () => A): A {
    return new c()
}
createInstasnce(Lion).keeper.nameTag
console.log("%c Line:117 🎂 createInstasnce(Lion).keeper.nameTag", "color:#3f7cff", createInstasnce(Lion).keeper.nameTag);
createInstasnce(Bee).keeper.hasMask
console.log("%c Line:119 🍋 createInstasnce(Bee).keeper.hasMask", "color:#33a5ff", createInstasnce(Bee).keeper.hasMask);
// createInstasnce(Beekeeper)//类型 "Beekeeper" 中缺少属性 "namLegs"，但类型 "Animak" 中需要该属性


// keyof类型操作符
type PointKeyof = {
    x: number
    y: number
}
type P = keyof PointKeyof
const p1Keyof: P = 'x'
const p2Keyof: P = 'y'
// const p4Keyof: P = 123//!不能将类型“123”分配给类型“keyof PointKeyof”
// const p3Keyof: P = 'z'//!不能将类型“"z"”分配给类型“keyof PointKeyof”。

type Arrayish = {
    [n: number]: number
}
type A = keyof Arrayish
// const a1: A = 'n'//!不能将类型“string”分配给类型“number”
const a2: A = 0

// [key: string] 为string时参数可以为数值和string两种，类似['1','2','3'][0]、{a:1,b:2}['a']
type Mapish = {
    [key: string]: string
}
type M1 = keyof Mapish
const m1Val: M1 = 'key'
const m2Val: M1 = 1
// const m3Val:M1 = true//!不能将类型“boolean”分配给类型“string | number”。


// typeof 操作符
// 可以标识变量或者函数的返回结果但是不能表示函数的返回结果
let s152 = 'hello'
let s153: typeof s152 = 'word'
type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>
function f157() {
    return {
        a: 123,
        b: '456'
    }
}
type F163 = ReturnType<typeof f157>
let f164val: F163 = { a: 222, b: 'www' }
//不能表示函数的返回结果
function f166() { }
// let F169: typeof f166() = ""//!应为“,”。


// 索引访问类型
// 来查询另外一个类型上的特定的属性
type PersonA = {
    age: number,
    name: string
}
type Age = PersonA['age']
// let age:Age = '123'//!不能将类型“string”分配给类型“number”
let age2: Age = 123

interface PersonB {
    age: number
    name: string
    alive: boolean
}
type I1 = PersonB['age' | 'name']
let i1: I1 = 123
let i2: I1 = '123'
// let i3:I1 = false//!不能将类型“boolean”分配给类型“I1”。

type I2 = PersonB[keyof PersonB]
// 此时可以是PersonB中的三个类型
let i21: I2 = 123
let i22: I2 = '123'
let i23: I2 = false
// let i24 :I2 = undefined//!不能将类型“undefined”分配给类型“I2”。
// let i25 :I2 = {}//!不能将类型“{}”分配给类型“I2”。

type AliveOrName = 'alive' | 'name'
type I3 = PersonB[AliveOrName]
let i31: I3 = '123'
let i32: I3 = false
// let i33:I3 = 123//!不能将类型“123”分配给类型“I3”。

// 使用数组【number】
const myArr = [
    {
        name: 'tom', age: 12
    },
    {
        name: 'jerry', age: 12
    }
]
// 此时number标识用数字取数组里的值
type PersonC = typeof myArr[number]
const arrnumber: PersonC = {
    name: 'tom', age: 12,
    // alive:'alive'
}
type Agenum = typeof myArr[number]['age']
let ageval1: Agenum = 123
// let ageval2:Agenum = '123'//!不能将类型“string”分配给类型“number”。

type Age2 = PersonC['age']
let ageval3: Age2 = 123
// const key='age'//!类型“key”不能作为索引类型使用。
// type Age3 = PersonC[key]//!类型“key”不能作为索引类型使用。

type key = 'age'
type Age4 = PersonC[key]




// 条件类型
interface Animal {
    live(): void
}
interface Dog extends Animal {
    woof(): void
}
type Example1 = Dog extends Animal ? number : string
type Example2 = Date extends Animal ? number : string
// let Example1Val: Example1 = '123'//!不能将类型“string”分配给类型“number”
let Example1Val: Example1 = 123
let Example2Val: Example2 = '123'

interface AgeLabel {
    age: number
}
interface NameLabel {
    name: string
}
type NameOrAge<T extends number | string> = T extends number ? NameLabel : AgeLabel
function createLabel<T extends number | string>(ageOrName: T): NameOrAge<T> {
    throw ''
}
// acreateLabel string NameLabel
let acreateLabel = createLabel('tom')
// bcreateLabel number AgeLabel
let bcreateLabel = createLabel(123)
// ccreateLabel NameLabel|AgeLabel
let ccreateLabel = createLabel(Math.random() > 0.5 ? 'asdasd' : 123)
console.log("%c Line:263 🍻", "color:#3f7cff", acreateLabel, bcreateLabel, ccreateLabel);

// ===条件类型约束

// type MessageOf<T extends {message:unknown}>=T['message']
type MessageOf<T> = T extends { message: unknown } ? T['message'] : number
interface Email {
    message: string
}
interface Dog_m {
    ark(): void
}
type EmailMessage = MessageOf<Email>
type DogMessage = MessageOf<Dog_m>
let emailVal: EmailMessage = 'xxxx@163.com'
let dogVal: DogMessage = 123
// let dogVal: DogMessage = 'err' as never    //MessageOf 后面换成never后的使用
// let dogVal: DogMessage = {//MessageOf 后面换成 T 后的使用
//     ark: () => {
//         console.log('dogVal')
//     }
// }

type Flatten<Type> = Type extends any[] ? Type[number] : Type

type strVal = Flatten<string[]>
type numArrVal = Flatten<number[]>
type numVal = Flatten<number>
type ManyVal = Flatten<[{ message: '' }, 123, string]>
let str1: strVal = 'strVal'
let numArr1: numArrVal = 123
let num2: numVal = 234
let many1: ManyVal = 123
let many2: ManyVal = { message: "" }
let many3: ManyVal = 'ManyVal'

// ===在条件类型中推理    //? infer  关键字
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never

type Num3 = GetReturnType<() => number>//number
type Num4 = GetReturnType<() => string>//string
type Num5 = GetReturnType<(a: boolean, b: boolean) => boolean[]>// boolean[]
type Num6 = GetReturnType<number>//never
type Num7 = GetReturnType<string>//never

let num3Val: Num3 = 100
let num4Val: Num4 = 'tom'
let num5Val: Num5 = [true]
let num6Val: Num6 = 'never' as never
let num7Val: Num7 = 100 as never

function stringOrNum(x: string): number
function stringOrNum(x: number): string
function stringOrNum(x: string | number): string | number
function stringOrNum(x: string | number): string | number {
    return Math.random() > 0.5 ? 'string' : 10
}
// 只解析最后一个重载签名的类型，不会解析每一个重载的定义
type T1 = ReturnType<typeof stringOrNum>
let t1Val: T1 = 123
let t2Val: T1 = 'str'
// let t3Val: T1 =   false


// 分布式条件类型
type ToArray<T> = T extends any ? T[] : never
type ToArrayNonDist<T> = [T] extends [any] ? T[] : never

type StrArrOrNumArr = ToArray<string | number>//Todo  string[] | number[]
let saon1: StrArrOrNumArr = [123]
let saon2: StrArrOrNumArr = ['123']
let saon3: StrArrOrNumArr = []
// let saon4: StrArrOrNumArr = [false]//!不能将类型“boolean”分配给类型“string | number”。
// let saon5: StrArrOrNumArr = 'str'//!不能将类型“string”分配给类型“StrArrOrNumArr”
type StrArrOrNumArr2 = ToArrayNonDist<string | number>//Todo  (string | number)[]

let saon7: StrArrOrNumArr2 = [123, 'str']
// let saon8: StrArrOrNumArr2 = [false]



