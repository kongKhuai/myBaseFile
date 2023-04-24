/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-24 22:36:56
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-04-24 22:45:13
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
