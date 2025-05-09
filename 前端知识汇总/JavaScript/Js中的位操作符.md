# Js中的位操作符
`JavaScript`的数字类型为双精度`IEEE 754 64`位浮点类型，但是在位运算中位运算符用于`32`位的数字上, 任何的数字操作都将转为`32`位, 运算结果再转化为`Js`数字类型。

## 描述
所有的按位操作符的操作数都会被转成补码形式的有符号`32`位整数，从概念上讲，按位逻辑操作符按遵守下面规则：
* 操作数被转换成32位整数，用比特序列(`0`和`1`组成)表示，超过`32`位的数字会被丢弃。
* 第一个操作数的每个比特位与第二个操作数的相应比特位匹配，第一位对应第一位，第二位对应第二位，以此类推。
* 位运算符应用到每对比特位，结果是新的比特值。

### & 按位与(AND)
对于每一个比特位，只有两个操作数相应的比特位都是`1`时，结果才为`1`，否则为`0`，真值表如下：

|a | b | a & b |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

我们可以使用`&`操作符来判断数值的奇偶性。

```javascript
console.log(7 & 1);    // 1
console.log(8 & 1) ;   // 0
```

### | 按位或(OR)
对于每一个比特位，当两个操作数相应的比特位至少有一个`1`时，结果为`1`，否则为`0`，真值表如下：

|a | b | a \| b |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

我们可以使用`|`操作符来强制转换值为`int 32`即`32`位整数类型。

```javascript
console.log(11.11 | 0);      // 11
console.log("11.11" | 0);    // 11
console.log("-11.11" | 0);   // -11
console.log(1.23E2 | 0);     // 123
console.log([] | 0);         // 0
console.log(({}) | 0);       // 0
```

### ^ 按位异或(XOR)
对于每一个比特位，当两个操作数相应的比特位有且只有一个`1`时，结果为`1`，否则为`0`，真值表如下：

|a | b | a ^ b |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

我们可以使用`^`操作符来交换数值。

```javascript
let a = 7;
let b = 1;
a ^= b;
b ^= a;
a ^= b;
console.log(a);   // 1
console.log(b);   // 7

// 也可以借助数组
b = [a, a = b][0];

// 当然解构赋值更简单
[a, b] = [b, a];
```

也可以用来判断值的符号是否相同。

```javascript
let a = 1;
let b = 1;
console.log((a ^ b) >= 0);    // true
console.log((a ^ -b) >= 0);   // false
```

### ~ 按位非(NOT)
对于每一个比特位，反转操作数的比特位，即`0`变成`1`，`1`变成`0`，真值表如下：

|a | ~ a |
|---|---|
| 0 | 1 |
| 1 | 0 |

我们可以使用`~`操作符来强制转换值为`int 32`即`32`位整数类型。

```javascript
console.log(~~(11.11));      // 11
console.log(~~("11.11"));    // 11
console.log(~~("-11.11"));   // -11
console.log(~~(1.23E2));     // 123
console.log(~~([]));         // 0
console.log(~~({}));         // 0
```

### << 左移
将值的二进制形式向左移`n (n < 32)`比特位，右边用`0`填充。  
我们可以使用`<<`操作符来进行整数的`* 2^n`运算。

```javascript
console.log(11 << 2);         // 44
console.log(11.11 << 1);      // 22
console.log("11.11" << 1);    // 22
```

我们可以使用`<<`操作符来强制转换值为`int 32`即`32`位整数类型。

```javascript
console.log(11.11 << 0);      // 11
console.log("11.11" << 0);    // 11
console.log("-11.11" << 0);   // -11
console.log(1.23E2 << 0);     // 123
console.log([] << 0);         // 0
console.log(({}) << 0);       // 0
```

### >> 有符号右移
将值的二进制表示向右移`n (n < 32)`位，丢弃被移出的位。  
我们可以使用`<<`操作符来进行整数的`/ 2^n`运算。

```javascript
console.log(32 >> 2);         // 8
console.log(32.11 >> 1);      // 16
console.log("32.11" >> 1);    // 16
```

我们可以使用`>>`操作符来强制转换值为`int 32`即`32`位整数类型。

```javascript
console.log(11.11 >> 0);      // 11
console.log("11.11" >> 0);    // 11
console.log("-11.11" >> 0);   // -11
console.log(1.23E2 >> 0);     // 123
console.log([] >> 0);         // 0
console.log(({}) >> 0);       // 0
```

### >>> 无符号右移
将值的二进制表示向右移`n (n< 32)`位，丢弃被移出的位，并使用`0`在左侧填充，所以结果总是非负的，即便右移`0`个比特，结果也是非负的，所以对于`>>>`一般不用于负数操作。  
我们可以使用`<<`操作符来进行整数的`/ 2^n`运算，注意不用于负数的运算。

```javascript
console.log(32 >>> 2);         // 8
console.log(32.11 >>> 1);      // 16
console.log("32.11" >>> 1);    // 16
```

我们可以使用`>>`操作符来强制转换值为`int 32`即`32`位整数类型，注意不用于负数的运算。

```javascript
console.log(11.11 >>> 0);      // 11
console.log("11.11" >>> 0);    // 11
console.log(1.23E2 >>> 0);     // 123
console.log(null >>> 0);       // 0
console.log([] >>> 0);         // 0
console.log(({}) >>> 0);       // 0
```




## 参考

```
https://www.jianshu.com/p/6c3851ce83f7
https://www.cnblogs.com/mtl-key/p/13150674.html
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
```
