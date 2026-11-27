# 前端调试9个技巧 
## 1简写对象语法打印多变量
```javascript 
const user = { name: "Alice", age: 30 }; const product = { id: 123, price: 49.99 }; console.log({ user, product }); 
``` 

 利用ES6简写对象语法，将多个变量包装在一个对象中打印，控制台会同时显示**变量名**和**对应值**，避免多日志时混淆变量对应关系。 
##  2. console.table() 可视化对象数组 
 ``` 
 const users = [ { name: "Alice", age: 30, role: "Admin" }, { name: "Bob", age: 25, role: "User" }, { name: "Charlie", age: 35, role: "Moderator" }, ]; console.table(users);
 ``` 
  
  将对象数组渲染为**可排序的表格**，点击列标题可对对应字段排序，相比`console.log`的嵌套展示，更易读对象数组的结构和数据。 
##  3. console.trace() 追踪函数调用路径 
```javascript 
  function processPayment(amount) { function innerFn() { console.trace("Payment processing started"); } innerFn(); } processPayment(20); 
``` 
打印代码执行到该方法处的**完整调用堆栈**，清晰展示函数的调用路径，适用于排查被多处调用的函数，定位具体执行入口。 
## 4. console.assert() 条件断言日志 
  ```javascript console.assert(user.age >= 18, "Underage user detected!", user); ``` 第一个参数为断言条件，**条件为false时**才会在控制台输出后续的日志信息和数据，替代冗余的`if+console.log`，减少控制台无效输出，适用于参数校验、数据格式验证等场景。
  
  ## 5. console.time() 监控操作执行耗时 
  
```javascript 
  console.time("API Call"); fetch("https://api.example.com/data") .then((response) => response.json()) .then((data) => { console.timeEnd("API Call"); return data; }); 
``` 
通过**相同标识名**的`console.time()`（开始计时）和`console.timeEnd()`（结束计时），计算两者之间操作的执行时间（单位：毫秒），适用于对比不同实现方案、排查性能瓶颈。
## 6. %c 为日志添加CSS样式 
```javascript
console.log("%c CRITICAL ERROR", "color: red; font-size: 20px; font-weight: bold; background: yellow; padding: 10px;"); 
``` 
通过`%c`占位符为后续日志文本绑定CSS样式，让关键日志（如错误、重要提示）在控制台中更醒目，适用于突出错误状态、分隔复杂调试输出。 

## 7. console.group() 分组整理调试日志 
```javascript 
// 默认展开的分组 console.group("User Authentication"); console.log("Checking credentials..."); console.log("Token:", token); console.groupEnd(); // 默认折叠的分组 console.groupCollapsed("API Response"); console.log("Status:", response.status); console.log("Data:", response.data); console.groupEnd(); 

```
 通过`console.group()`（默认展开）/`console.groupCollapsed()`（默认折叠）和`console.groupEnd()`包裹日志，创建**可折叠的日志分组**，解决调试信息过多杂乱的问题，支持多层嵌套分组。 
## 8. console.dir() 深度探索对象/DOM元素 ```javascript const element = document.querySelector("#myButton"); console.log(element); // 显示HTML结构 console.dir(element); // 显示对象属性和方法 ``` 打印对象/DOM元素的**交互式属性列表**，包括原型链、隐藏属性和方法；与`console.log`不同，调试DOM元素时不会显示HTML结构，而是以对象形式展示其所有属性和方法，适用于深入排查DOM元素或自定义对象的属性。 

## 9. 按场景使用不同日志级别 ```javascript console.log("Regular information"); // 普通信息 console.info("ℹ️ User logged in"); // 信息提示 console.warn("⚠️ API rate limit at 80%"); // 警告 console.error("❌ Payment failed"); // 错误 console.debug("Variable state:", x); // 调试信息 ``` 不同日志级别在控制台有专属标识，且现代浏览器DevTools支持**按级别过滤日志**；生产环境调试时可隐藏`console.log`/`console.debug`，只查看`warn`/`error`，避免关键问题被冗余日志覆盖。