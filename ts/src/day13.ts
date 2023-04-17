/*
 * @Author: 16651618507@163.com
 * @Date: 2023-03-22 06:45:48
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-03-30 07:09:41
 * @FilePath: \TypeScript\src\day13.ts
 * @Description: 
 * 
 */
// 认识对象类型

// ?定义对象类型基本的方法
// todo1使用匿名的方式
function greet1(person: { name: string, age: number }) {
    return `hello ${person.name}`
}

// todo2使用接口的方式定义
interface Person1 {
    name: string
    age: number
}
function greet2(person: Person1) {
    return `hello ${person.name}`
}
// todo3使用类型别名的方式
type Person2 = {
    name: string
    age: number
}
function greet3(person: Person2) {
    return `hello ${person.name}`
}



// 属性修改器
// 1可选属性
// 2只读属性
// 3索引签名

// 1可选属性
type Shape = {}
interface PaintShape {
    shape: Shape
    xPos?: number
    yPos?: number
}
function paintShape(options: PaintShape) {
    let { xPos = 0, yPos = 0 } = options
    console.log({ xPos, yPos })
}
const shape: Shape = {}
paintShape({ shape })
paintShape({ shape, xPos: 100 })
paintShape({ shape, xPos: 100, yPos: 200 })

// 2只读属性  可以分层的定义类型即readonly对应的对象不可修改，但是对象内部的值不受限制
interface SomeType {
    readonly prop: string
}
function doSomething(obj: SomeType) {
    console.log(obj.prop)
    // obj.prop= ''//!无法为“prop”赋值，因为它是只读属性。
}
doSomething({ prop: 'hi~' })
// 分层定义
interface Home {
    readonly resident: {
        name: string
        size: string
    }
}
function logResideng(home: Home) {
    console.log(home.resident)
    console.log(home.resident.name)
}
function editHome(home: Home) {
    home = {
        resident: {
            name: '张三',
            size: 'blob'
        }
    }
}
function editResident(home: Home) {
    // home.resident = {//!无法为“resident”赋值，因为它是只读属性
    //     name: '张三',
    //     size: 'blob'
    // }
}
function editResidentName(home: Home) {
    home.resident.name = '张三'
}

// readonly 别名
interface Person3 {
    age: number
}
interface ReadonlyPerson3 {
    readonly age: number
}

let writablePerson: Person3 = {
    age: 18
}
let readonlyPerson: ReadonlyPerson3 = writablePerson


console.log(writablePerson.age, readonlyPerson.age) //18 18
writablePerson.age++
// readonlyPerson.age++//!无法为“age”赋值，因为它是只读属性
console.log(writablePerson.age, readonlyPerson.age) //19 19


// 3索引签名
interface StringArray {
    [index: number]: string
}
let stringarr: StringArray = ['q', 'w', 'e']
let firstStringaee = stringarr[0]


interface TestString {
    [prop: string]: string | number,
    name: string,
    readonly age: number
}
let testStrign: TestString = {
    name: 'hello~',
    age: 16
}
let testStrign2: TestString = {
    name: 'hello~',
    size: 200,
    age: 15
}
// testStrign2.age++ //!无法为“age”赋值，因为它是只读属性。


// 拓展类型
interface BasicAddress {
    name?: ''
    street: string
}
// 1直接复制写一个
// interface AddressAndUnit{
//     street:string
//     unit:string//     name?:''
// }
// 2拓展原有的类型，不会因为原有的有了变更新的也得手动变更
// 拓展一个
interface AddressAndUnit extends BasicAddress {
    unit: string
}
interface UserInfo {
    userName: string
    age: number
}
let extendsOBj: AddressAndUnit = {
    street: '',
    unit: ''
}
// 同时拓展多个用逗号区分
interface AddressAndUnitAndUser extends BasicAddress, UserInfo {
    newKey: string
}
let threeTypes: AddressAndUnitAndUser = {
    street: '',
    userName: '',
    newKey: '',
    age: 12
}








// 交叉类型 &
interface ColorFul {
    color: string
}

interface Circle {
    redius: number
}
// 定义一个type来使用
type ColorAndCircle = ColorFul & Circle

const cc: ColorAndCircle = {
    color: 'pink',
    redius: 1 / 2
}

// 直接在函数中使用
function draw(data: ColorFul & Circle) {
    console.log("%c Line:199 🍧 data", "color:#3f7cff", data.color);
    console.log("%c Line:200 🍧 data", "color:#3f7cff", data.redius);
}

draw({
    color: 'red',
    redius: 20
})

// 类型 和 & 的区别（--如何处理冲突）

interface InterfaceA {
    name: string
}
interface InterfaceA {
    sort: string
}
const objInterface: InterfaceA = {
    name: '',
    sort: ''
}
// 不能定义同名的类型
type TypeA = {
    name: string
}
// type TypeA{
//     name:string
// }


// 泛型对象类型
// 第一种unknown不建议
interface Box {
    content: unknown
}

let xBox: Box = {
    content: 'he~'
}
// console.log(xBox.content.toLowerCase())//!“xBox.content”的类型为“未知”
// 处理方式1 类型缩小
if (typeof xBox.content === 'string') {
    console.log(xBox.content.toLowerCase())
}
// 处理方式2 类型断言as 
console.log((xBox.content as string).toLowerCase())


//   第二种 函数重载  这种也能实现多种类型的操作的，但是比较繁琐不够优雅
interface NumberBox {
    content: number
}
interface StringBox {
    content: string
}
interface BooleanBox {
    content: boolean
}
function setContent(box: NumberBox, newContent: number): void
function setContent(box: StringBox, newContent: string): void
function setContent(box: BooleanBox, newContent: boolean): void
function setContent(box: { content: any }, newContent: any) {
    box.content = newContent
}

// 第三种使用泛型
// 使用方法1 直接使用基础类型
interface Box265<Type> {
    content: Type
}
let boxA: Box265<string> = {
    content: 'hi tom'
}
let boxB: Box265<number> = {
    content: 123
}

// 使用方法2 使用定义好的接口
interface Box276<Type> {
    content: Type
}
interface Apple {
    color: string
}
type AppleBox = Box276<Apple>
const appleVal: AppleBox = {
    content: {
        color: 'red'
    }
}

// 使用方法3,这样可以在不同的数据类型中使用
type OrNull<Type> = Type | null
type OneOrMany<T> = T | T[]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
type OneOrManyOrNullOrString = OneOrManyOrNull<string>


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
function identicy13<Type>(arg: Type): Type {
    return arg
}
let output = identicy13<string>('strings')
// 使用类型推断
let output2 = identicy13('strings')//当不能推断时需使用上面的方法显示的定义类型