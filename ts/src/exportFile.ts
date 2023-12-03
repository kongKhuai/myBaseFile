/*
 * @Author: 16651618507@163.com
 * @Date: 2023-04-30 23:18:27
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-05-01 00:01:25
 * @FilePath: \ts\src\exportFile.ts
 * @Description: 
 * 
 */
export default function helloWord(userName: string) {
    console.log(`hello~${userName}`)
}
export function createName(userName: string) {
    console.log(`hello~${userName}`)
}
export const pi = 3.14


export type Cars = {
    name: string,
    age: number
}
export interface Dogs {
    name: string
}

