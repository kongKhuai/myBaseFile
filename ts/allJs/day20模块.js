"use strict";
// 模块
// 在TypeScript中编写基于模块的代码时，有三个主要方面需要考虑：
// 语法：我想用什么语法来导入和导出东西？
// 模块解析：模块名称（或路径）和磁盘上的文件之间是什么关系？
// 模块输出目标：我编译出来的JavaScript模块应该是什么样子的？
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 方法一
// default 的可以直接导出，没有的可以用括号解构，
// 都可以起别名,default 可以直接写别名，其他的通过as 起别名
const exportFile_1 = __importStar(require("./exportFile"));
(0, exportFile_1.default)('tom');
console.log("%c Line:9 🥛", "color:#465975", exportFile_1.pi);
// 方法二
const files = __importStar(require("./exportFile"));
console.log(files.pi);
// 对于default导出 可以直接使用default调用
files.default('jerry');
const exportFile_2 = require("./exportFile");
(0, exportFile_2.createName)('mini');
// commonJs 语法
const mathFile = require('./commonjsFile');
console.log("%c Line:34 🍇 mathFile", "color:#ed9ec7", mathFile.pi, mathFile.abs(-123123));
