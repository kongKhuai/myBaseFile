/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-24 22:36:56
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-25 23:19:02
 * @FilePath: \ts\src\day18this.ts
 * @Description: 
 * 
 */
// this类型
class BoxThis {
    content: string = ''
    set(val: string) {
        this.content = val
        return this
    }
    sameAs(other: this) {
        return other.content == this.content
    }
}

class ClearableBox extends BoxThis {
    clear() {
        this.content = ''
    }
}
const boxThis = new BoxThis()
const aThis = new ClearableBox()
const bThis = aThis.set('tom')

console.log("%c Line:27 🥓", "color:#4fff4B", bThis);// ClearableBox { content: 'tom' }

const derived = new ClearableBox()
// derived.sameAs(boxThis)//类型“BoxThis”的参数不能赋给类型“ClearableBox”的参数。// 类型 "BoxThis" 中缺少属性 "clear"，但类型 "ClearableBox" 中需要该属性。



// 基于类型守卫的this
//  this is Type     (this is 固定写法     Type 类型)

class FileSystemObject {
    isFile(): this is FileRep {
        return this instanceof FileRep
    }
    isDirectory(): this is Directory {
        return this instanceof Directory
    }
    isNetworked(): this is NetWorked & this {
        return this.networked
    }
    constructor(public path: string, private networked: boolean) { }
}
class FileRep extends FileSystemObject {
    constructor(path: strVal, public content: string) {
        super(path, false)
    }
}
class Directory extends FileSystemObject {
    children: FileSystemObject[]
    constructor() {
        super('', false)
        this.children = []
    }
}

interface NetWorked {
    host: string
}

const fso: FileSystemObject = new FileRep('foo/bar.txt', 'foo')
if (fso.isFile()) {
    // const fso
    fso.content
} else if (fso.isDirectory()) {
    // const fso:Directory
    fso.children
} else if (fso.isNetworked()) {
    // const fso.NetWorked & FileSystemObject
    fso.host
}

class Box82<T>{
    value?: T
    hasvalue(): this is { value: T } {
        return this.value !== undefined
    }
}
const box82 = new Box82()
box82.value = 'hello'
if (box82.hasvalue()) {
    console.log(box82.value)
}