// 类型谓语




// 修饰符

//!访问修饰符： private、 public、 protected
// public   公开的，默认值。任何对象在任何地方都可以访问
// protected   受保护的。能在当前类或者子类中进行访问
// private  私有的。只能在当前类中进行访问

// 默认为 public

// !当成员被标记为 private时，它就不能在声明它的类的外部访问，比如：

class AnimalA {

    private name: string;

    constructor(theName: string) {

        this.name = theName;

    }

}

// let a = new AnimalA('Cat').name; //错误，‘name’是私有的

//! protected和 private类似，但是， protected成员在派生类中可以访问

class Animal {

    protected name: string;

    constructor(theName: string) {

        this.name = theName;

    }

}

class Rhino extends Animal {

    constructor() {

        super('Rhino');

    }

    getName() {

        // console.log(this.name) //此处的name就是Animal类中的name

    }

}

// 泛型方法
// 在TypeScript里，声明泛型方法有以下两种方式：

function gen_func1<T>(arg: T): T {

    return arg;

}

// 或者

let gen_func2: <T>(arg: T) => T = function (arg) {

    return arg;

}

console.log(gen_func1('tsTest'))
console.log(gen_func2('tsTest_gen_func2'))


type Fish7 = {
    swim: () => void
}
type Bird7 = {
    fly: () => void
}
// 类型谓词
function isFish(pet: Fish7 | Bird7): pet is Fish {
    return (pet as Fish).swim !== undefined
}
const fish2: Fish7 = {
    swim: () => {
        console.log('name')
    }
}
const fish3 = {
    fly: () => {
        console.log('fish3')
    }
}
console.log(99, isFish(fish2), isFish(fish3))

function isNumber(num: any): num is Number {
    return typeof num === 'number'
}
// console.log(isNumber(123123))

function getSmallPet(): Fish7 | Bird7 {
    let fish: Fish7 = {
        swim: () => {

        }
    }
    let bird: Bird7 = {
        fly: () => {

        }
    }
    return true ? bird : fish
}
let pet = getSmallPet()

if (isFish(pet)) {
    pet.swim()
} else {
    // pet.fly()
}