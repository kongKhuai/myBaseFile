随着`vue`、`react`在实际开发中应运越来越广泛，前端们处理数据的需求越来越多。这篇文章就讨论一下轻量级列表的搜索功能。当服务器的同事将所有数据返回到前端时，前端来做按条件查询，可以减少向服务器发送请求的次数，从而大大的提高性能。本文涉及多种方式的查询。下面先看代码，在说知识点：

 代码解读

复制代码

```
// 测试用的数据 staff: [     {name: "April", job: "programmer", age: "18", hobby: "study"},     {name: "Shawn", job: "student", age: "8", hobby: "study"},     {name: "Leo", job: "teacher", age: "28", hobby: "play"},     {name: "Todd", job: "programmer", age: "19", hobby: "sleep"},     {name: "Scoot", job: "cook", age: "38", hobby: "paintting"}, ]
```

### 单条件精准查找

 代码解读

复制代码

```
/*** * @param {Object} lists 所有数据 * @param {string} key 需要查询的数据的键值 * @param {string} value 需要查询的值 */ 
searchKeyValue(lists,key,value) { 
	let res = lists.filter(item => item[key] == value);
	 return res },
	  // 函数执行 在 “staff” 对象中查找 “job” 值为 “programmer” 的数据 this.searchKeyValue(staff,"job","programmer")

```

### 单条件多值精准查找

 代码解读

复制代码

`/** * @param {Object} lists 所有数据 * @param {string} key 需要查询的数据的键值 * @param {Array} valueArr 需要查询的值 */ searchKeyValues(lists,key,valueArr){      let res = lists.filter(item => valueArr.find(i => i === item[key]))      return res; }, // 函数执行 在 “staff” 对象中查找 “job” 值为 “programmer” 和 “student” 的数据 this.searchKeyValues(staff,"job",['programmer','student'])`

### 多条件精准查找

 代码解读

复制代码

`/** * @param {Object} lists 所有数据 * @param {Object} filters 需要查询的数据 */ searchKeysValue(lists, filters) {     let key = Object.keys(filters);     let resArr = lists.filter(item => key.find(k => item[k] == filters[k])) }, // 函数执行 在 “staff” 对象中查找 “name” 值为 “April” 和 “hobby” 值为 “study” 的数据 // 注：该方法第二个参数是个对象 let filters = {     name: "April",     hobby: "study" } this.searchKeysValue(staff, filters)`

### 多条件多值精准查找

 代码解读

复制代码

 `/**  * @param {Object} lists 所有数据  * @param {Object} filters 需要查询的数据  */  searchKeysValues(lists, filters) {      let resArr = [];      lists.filter((item) => {          for (let i in filters) {              for (let j of filters[i]) {                  if (item[i] == j) {                      resArr.push(item)                  }              }              break          }      })  }, // 函数执行 在 “staff” 对象中查找 “age” 值为 “8”或“18” 和 “hobby” 值为 “play”或“sleep” 的数据 // 注：该方法第二个参数是个对象,键对应的值是个多值的数组 let filters = {     age:[8,18],     hobby:["play","sleep"] } this.searchKeysValues(staff,filters)`

### 涉及的知识点

`filter()`方法用于过滤数组元素。该方法创建一个新数组, 其中包含通过所提供函数实现的测试的所有元素。`filter()`不会对空数组进行检测，也不会改变原始数组。语法如下：

 代码解读

复制代码

`var newArray = arr.filter(callback(element[, index[, array]])[, thisArg]) /**   * callback 用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。  * thisArg 执行 callback 时，用于 this 的值。  */`

`find()`方法用于返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。对于空数组，函数是不会执行的。该方法没有改变数组的原始值。语法如下：

 代码解读

复制代码

`arr.find(callback[, thisArg]) // callback 在数组每一项上执行的函数。 // thisArg可选 执行回调时用作this 的对象。`

综上所述：

- 相同：`find` 和 `filter` 都是不改变原数组的方法，都不会对空数组进行检测。
    
- 区别：`find`只查出第一个符合条件的结果像例子里是直接返回了一个对象而不是数组
    

，而`filter`返回全部结果仍然是数组。

上面说到的都是按字段的关键字精准的去查找对应的数据，当需求变为模糊查询呢？这个时候字符串的`indexof`方法、`includes()`和正则表达式就派上了用场。

### `indexof()`模糊查询

 代码解读

复制代码

 `/** * @param {Object} lists 所有数据   * @param {string} keyWord 查询的关键词  */  selectMatchItem(lists, keyWord) {     let resArr = [];     lists.filter(item => {         for(let i in item){             if (item[i].indexOf(keyWord) >= 0) {                 resArr.push(item);             }         }     })     return resArr;  },  // 函数执行 在 “staff” 对象中查找 包含 “coot” 的数据。 this.selectMatchItem(staff,'coot')`

### `indexof()`多值模糊查询

 代码解读

复制代码

`/** * @param {Object} lists 所有数据 * @param {Array} keyWord 查询的关键词 */ selectMatchItems(lists, keyWords) {     let resArr = [];     lists.filter(item => keyWords.find(keyWord => {         for(let i in item){             if (item[i].indexOf(keyWord) >= 0) {                 resArr.push(item);             }         }     }))     return resArr; } // 函数执行 在 “staff” 对象中查找 包含 “coot”或者“8” 的数据。 this.selectMatchItems(staff,['odd','8'])`

因为多值模糊查询的原理都是一样，一下的方法将不再赘述。

### `includes()`模糊查询

 代码解读

复制代码

`/** * @param {Object} lists 所有数据 * @param {Object} keyWord 查询的关键词 */ selectMatchItem(lists, keyWord) {     let resArr = [];     lists.filter(item => {         for(let i in item){             if (item[i].includes(keyWord)) {                 resArr.push(item);             }         }     })     return resArr; }, // 函数执行 在 “staff” 对象中查找 包含 “coot” 的数据。 this.selectMatchItem(staff,'coot')`

emmm...此处就不得不问`indexof()`与`includes()`有啥子区别？？？

- `indexof()`是es5的方法，该方法返回在数组/字符串中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
    
- `includes()`是es6的方法，该方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
    
    再看下图：查找的值碰巧是`NaN`呢？
    
    ![](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/3/1713eded682186e3~tplv-t2oaga2asx-image.image))
    
    结果`indexof()`返回-1，`includes()`返回true。
    
- `includes()`更加完善，且语义化更强。
    

### 正则匹配模糊查询

 代码解读

复制代码

`/** * @param {Object} lists 所有数据 * @param {Object} keyWord 查询的关键词 */ selectMatchItem(lists, keyWord) {     let reg =  new RegExp(keyWord);     let resArr = [];     lists.filter(item => {         for(let i in item){             if (reg.test(item[i])) {                 resArr.push(item);             }         }     })     return resArr; }, // 函数执行 在 “staff” 对象中查找 包含 “8” 的数据。 this.selectMatchItem(staff,'8')`

这几个方法在性能上差不多。但是`test()`方法因为使用到了正则表达式，所以能够实现的功能会比较强大，写出来的代码也更加简洁。打个比方，在不区分大小写的模糊搜索条件下， test 方法只需在正则表达式中添加修饰符 i 即可实现不区分大小写，而其它方法则要通过多次的方法调用和逻辑运算符才能实现效果。当然方法还有很多，选择适合的才是最好的。

  

作者：二十七刻  
链接：https://juejin.cn/post/6844904113986076686  
来源：稀土掘金  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。