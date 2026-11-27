# JS语言基础

> 共 14 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [22个实用JavaScript编程知识，可帮助你提升面试成功率](#sec-1) — 有道云笔记 · `js/22个实用JavaScript编程知识，可帮助你提升面试成功率.md`
2. [32个手撕JS，彻底摆脱初级前端（面试高频）](#sec-2) — 有道云笔记 · `js/32个手撕JS，彻底摆脱初级前端（面试高频）.md`
3. [JS树结构操作：查找、遍历、筛选、树结构和列表结构相互转换](#sec-3) — 有道云笔记 · `js/JS树结构操作：查找、遍历、筛选、树结构和列表结构相互转换.md`
4. [number](#sec-4) — 有道云笔记 · `js/number.md`
5. [replace()](#sec-5) — 有道云笔记 · `js/replace().md`
6. [几个JS小技巧](#sec-6) — 有道云笔记 · `js/几个JS小技巧.md`
7. [判断相关](#sec-7) — 有道云笔记 · `js/判断相关.md`
8. [字符串相关](#sec-8) — 有道云笔记 · `js/字符串相关.md`
9. [index](#sec-9) — 有道云笔记 · `js/数学/math.js学习/index.md`
10. [无标题笔记](#sec-10) — 有道云笔记 · `js/数学/无标题笔记.md`
11. [这些 JS 中强大的操作符，总有几个你没听说过](#sec-11) — 有道云笔记 · `js/这些 JS 中强大的操作符，总有几个你没听说过.md`
12. [js](#sec-12) — 有道云笔记 · `来自手机/js.md`
13. [javascript页面刷新的几种方法](#sec-13) — 有道云笔记 · `javascript页面刷新的几种方法.md`
14. [JS-正则](#sec-14) — 有道云笔记 · `JS-正则.md`

---

<a id="sec-1"></a>
## 22个实用JavaScript编程知识，可帮助你提升面试成功率

> 来源：有道云笔记
> 原路径：`js/22个实用JavaScript编程知识，可帮助你提升面试成功率.md`

22个实用JavaScript编程知识
1、从阵列中删除重复项
数组：这是一些方便的方法，可用于从数组中删除重复项。
1、使用lodash
```
let array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let arrayuniq = _.uniq(array);//[2, 1, 5, 6, 7, 8, 9, 10]
```
2、使用filter

```
let array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let list = array.filter((x, i, a) => a.indexOf(x) == i);
//[2, 1, 5, 6, 7, 8, 9, 10]
```
3、使用set

```
let array = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let setuniq = [...new Set(array)];
//[2, 1, 5, 6, 7, 8, 9, 10]
```
2、从对象数组中删除重复项
对象数组：这是一些方便的方法，可用于从对象数组中删除重复项。

1、使用lodash

```
let users = [
{ id: 1, name: "ted" },
{ id: 1, name: "bob" },
{ id: 3, name: "sara" },
{ id: 4, name: "test" },
{ id: 4, name: "test" },
{ id: 5, name: "abc" }
];
let uniqueUsersByID = _.uniqBy(users, "id");
//[{"id":1,"name":"ted"},{"id":3,"name":"sara"},{"id":4,"name":"test"},{"id":5,"name":"abc"}]
```
我们可以使用此代码检查具有多个属性的唯一数据。

const uniquewithMultipleProperties = _.uniqWith(
users,
```
(a, b) => a.id === b.id || a.name === b.name
);

//[{"id":1,"name":"ted"},{"id":3,"name":"sara"},{"id":4,"name":"test"},{"id":5,"name":"abc"}]
```
2、使用filter

```
let filteruniquebyID = users.filter(
(v, i, a) => a.findIndex(t => t.id === v.id) === i
);
//[{"id":1,"name":"ted"},{"id":3,"name":"sara"},{"id":4,"name":"test"},{"id":5,"name":"abc"}]
```
我们可以使用此代码检查具有多个属性的唯一数据。

```
let filteruniquebyIDName = users.filter(
(v, i, a) => a.findIndex(t => t.id === v.id || t.name === v.name) === i
);
//[{"id":1,"name":"ted"},{"id":3,"name":"sara"},{"id":4,"name":"test"},{"id":5,"name":"abc"}]
```
3、使用set

```
var set1 = Array.from(
users.reduce((m, t) => m.set(t.id, t), new Map()).values()
);
//[{"id":1,"name":"bob"},{"id":3,"name":"sara"},{"id":4,"name":"test"},{"id":5,"name":"abc"}]
```
如果你还想了解更多，你可以查看此地址内容：https://stackblitz.com/edit/remove-duplicates-
arrayofobjects

3、在数组中查找一个项目
以下是在数组中查找项目的一些方法。

1、includes：此方法确定数组在条目中是否包含某个值，是返回true值还是false值。

console.log(array.includes(2)); // returns true
2、 every：此方法测试数组中的所有元素是否通过提供的功能实现的测试。它返回一个布尔值。

let testevery1 = array.every(val=> val>3); //false
3、some：此方法测试数组中的至少一个元素是否通过了由提供的函数实现的测试。它返回一个布尔
值。

let testsome1 = array.some(val=> val>3); //true
4、lodash包括：检查是否value在中。collection返回true是否value找到，否则返回false。

```
let lodashtest9 =_.includes(array, 1); // true
let lodashtest10 =_.includes(array, 3, 2); // false
```
5、findIndex：此方法返回满足提供的测试功能的数组中第一个元素的索引。否则，它返回-1，表明没有任何元素通过测试。

```
let testindex = array.findIndex(val => val > 1);
//0
```
6、find：此方法返回提供的数组中满足提供的测试功能的第一个元素的值。如果没有值满足测试功能，则返回undefined。

```
let testfind = array.find(el => (el > 2));
//5
```
7、 filter：此方法创建一个新数组，其中所有元素都通过了由提供的功能实现的测试。

```
let testfilter1 = array.filter(val=> val>3);
//[5, 6, 7, 8, 9, 9, 10]
```
8、map：此方法创建一个新数组，其中填充了对调用数组中每个元素调用提供的函数的结果。

```
let val = [];
array.map(item => { if(item >= 3) val.push(item); });
//[5, 6, 7, 8, 9, 9, 10]
```
你可以查看更多内容：https://stackblitz.com/edit/find-item-array

4、在对象数组中找到一个项目
这些是可用于在对象数组中查找项目的方法。

1、every：此方法测试数组中的所有元素是否通过提供的功能实现的测试。它返回一个布尔值。

```
let testevery2 = users.every(val=> val.id>3);
//false
```
2、some：此方法测试数组中的至少一个元素是否通过了提供的功能实现的测试。它返回一个布尔
值。

let testsome2 = users.some(val=> val.id>3); //true
3、 lodash includes：判断在collection中返回的值，如果可以在value找到，则返回true，否则返回
false。

```
let lodashtest11 =_.includes({ 'a': 1, 'b': 2 }, 1);
//true
let lodashtest12 =_.includes('abcd', 'bc');
//true
```
4、 findIndex：此方法返回满足提供的测试功能的数组中第一个元素的索引。否则，它返回-1，表明
没有任何元素通过测试。

```
let testindex2 = users.findIndex(val => val.id > 1);
//3
```
5、 find：此方法返回提供的数组中满足提供的测试功能的第一个元素的值。如果没有值满足测试功
能，则返回undefined。

```
let testfind2 = users.find(el => (el.id > 2));
//{"id":3,"name":"sara"}
```
6、filter：此方法创建一个新数组，其中所有元素都通过了由提供的功能实现的测试。

let testfilter2 = users.filter(val=> val.id>3);
7、map：此方法创建一个新数组，其中填充了对调用数组中每个元素调用提供的函数的结果。

```
let val2 = [];
users.map(item => { if(item.id >= 3) val2.push(item); });
```
5、对数组项排序
可以使用sort方法对数组进行排序。

该sort()方法对数组中的元素进行适当排序，然后返回排序后的数组。默认的排序顺序是升序，建立在将元素转换为字符串，然后比较其UTF-16代码单元值的序列的基础上。

```
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```
6、对具有特定属性的对象数组进行排序这些是可以使用对象的特定属性对对象数组进行排序的方法。

1、简单排序：此方法对数组中的元素进行适当排序，并返回排序后的数组。

let data = [{
id: "3",
city: "toronto",
state: "TR",
zip: "75201",
price: "123451"
```
},
{
```
id: "1",
city: "anand",
state: "AN",
zip: "94210",
price: "345678"
```
},
{
```
id: "5",
city: "sudbury",
state: "SB",
zip: "00110",
price: "789045"
```
}
];
let sorttest2 = data.sort((a, b) => (a.id < b.id ? -1 : Number(a.id > b.id)));console.log("sort test
2 ", sorttest2);
//output
{
"id": "1",
"city": "anand",
"state": "AN",
"zip": "94210",
"price": "345678"
}, {
"id": "3",
"city": "toronto",

"state": "TR",
"zip": "75201",
"price": "123451"
}, {
"id": "5",
"city": "sudbury",
"state": "SB",
"zip": "00110",
"price": "789045"
}]
```
2、localCompare：此方法返回一个数字，该数字指示参考字符串是按排序顺序位于给定字符串之前，之后还是与之相同。

```
let sorttest2 = data.sort((a, b) => (a.id < b.id ? -1 : Number(a.id > b.id)));
//output
[{
"id": "1",
"city": "anand",
"state": "AN",
"zip": "94210",
"price": "345678"
}, {
"id": "3",
"city": "toronto",
"state": "TR",
"zip": "75201",
"price": "123451"
}, {
"id": "5",
"city": "sudbury",
"state": "SB",
"zip": "00110",
"price": "789045"
}]
```
3、用多个字段排序

该parseInt()函数解析一个字符串参数，并返回一个指定基数的整数（数学数字系统中的基数）。

```
let sorttest4 = data.sort(function(left, right) {
var city_order = left.city.localeCompare(right.city);
var price_order = parseInt(left.price) - parseInt(right.price);
return city_order || -price_order;
});
//output
[{
"id": "1",
"city": "anand",
"state": "AN",
"zip": "94210",
"price": "345678"
}, {
"id": "5",
"city": "sudbury",
"state": "SB",
"zip": "00110",
"price": "789045"
}, {
"id": "3",
"city": "toronto",
"state": "TR",
"zip": "75201",
"price": "123451"
}]
```
4、 Lodash _sortBy：创建一个元素数组，并按照在每个迭代中运行集合中每个元素的结果，以升序
排序。

```
let sorttest6 = _.sortBy(data, ["id", "city"]);
//output
[{
"id": "1",
"city": "anand",
"state": "AN",
"zip": "94210",
"price": "345678"

}, {
"id": "3",
"city": "toronto",
"state": "TR",
"zip": "75201",
"price": "123451"
}, {
"id": "5",
"city": "sudbury",
"state": "SB",
"zip": "00110",
"price": "789045"
}]
```
7、对日期数组进行排序
1、使用sort

```
let isDescending = false; //set to true for Descending
let dates = ["1/7/2021", "1/6/2021", "8/18/2020", "8/6/2020"];
let sorteddates = dates.sort((a, b) => isDescending ? new Date(b).getTime() - new
Date(a).getTime() : new Date(a).getTime() - new Date(b).getTime());
console.log(sorteddates);
//["8/6/2020", "8/18/2020", "1/6/2021", "1/7/2021"]
```
2、使用Lodash

let arr = [{
name: "test1",
date: "1/7/2021"
```
},
{
```
name: "test2",
date: "1/6/2021"
```
},
{
```
name: "test3",
date: "1/5/2020"
```
}
];

arr = _.sortBy(arr, function(dateObj) {
return new Date(dateObj.date);
});
console.log("sort date", arr);
//[{"name":"test3","date":"1/5/2020"},{"name":"test2","date":"1/6/2021"},
{"name":"test1","date":"1/7/2021"}]
```
3、使用Lodash（按月和年排序）

```
let yearAndMonth = [
{ "year": 2016, "month": "FEBRUARY" },
{ "year": 2015, "month": "MARCH" },
{ "year": 2021, "month": "JANUARY" },
{ "year": 2021, "month": "FEBRUARY" }
]
let value= _.sortBy(yearAndMonth, a => new Date(1 + a.month + a.year));
console.log('Sorted Result: ', value);
//[{"year":2015,"month":"MARCH"},{"year":2016,"month":"FEBRUARY"},
{"year":2021,"month":"JANUARY"},{"year":2021,"month":"FEBRUARY"}]
```
8、从阵列中删除一个项目
1、 pop：此方法从数组中删除最后一个元素并返回该元素。此方法更改数组的长度。

```
let arraypoptest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];let testpop = arraypoptest.pop();
console.log("array pop", testpop,"-", arraypoptest);
//10 - [2, 1, 2, 5, 6, 7, 8, 9, 9];
```
2、shift：此方法从数组中删除第一个元素并返回该删除的元素。此方法更改数组的长度。

```
let arrayshifttest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let testshift = arrayshifttest.shift();
console.log("array shift", testshift,"-", arrayshifttest);
//2 - [1, 2, 5, 6, 7, 8, 9, 9, 10]
```
3、 slice：此方法将数组的一部分的浅表副本返回到一个新的数组对象中，该对象选自startto end
（end不包括），其中startandend表示该数组中各项的索引。原始数组将不会被修改。

```
let arrayslicetest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let testslice = arrayslicetest.slice(0, 3);
console.log("array slice", testslice, arrayslicetest);
//not changed original array

//[2, 1, 2] - [2, 1, 2, 5, 6, 7, 8, 9, 9, 10]
```
4、 splice：此方法通过删除或替换现有元素和/或在适当位置添加新元素来更改数组的内容。

```
let arraysplicetest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let testsplice = arrayslicetest.splice(0, 3);
//[2, 1, 2]
```
5、 filter：此方法创建一个新数组，其中所有元素都通过了由提供的功能实现的测试。

数组：

```
let testarr = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let testarr2 = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let filtered = testarr.filter(function(value, index, arr) {
return value > 5;
});
let filtered2 = testarr2.filter(item => item !== 2);
console.log("filter example 1", filtered);
//[6, 7, 8, 9, 9, 10]
console.log("filter example 2", filtered2);
//[1, 5, 6, 7, 8, 9, 9, 10]
```
过滤并去除多个值：

```
let forDeletion = [2, 3, 5];
let mularr = [1, 2, 3, 4, 5, 3];
mularr = mularr.filter(item => !forDeletion.includes(item));
console.log("multiple value deletion with filter", mularr);
//[1, 4]
```
6、delete运算符： JavaScript delete 从对象中删除属性；如果不再保存对相同属性的引用，则最终将自动释放该引用。

```
let ar = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
delete ar[4]; // delete element with index 4
console.log(ar);
//[2, 1, 2, 5, undefined, 7, 8, 9, 9, 10]
```
7、 lodash删除：_remove删除从所有元素array的是predicate返回truthy对于和返回被删除的元素的
数组。

```
let arrlodashtest = [2, 1, 2, 5, 6, 7, 8, 9, 9, 10];
let evens = _.remove(arrlodashtest, function(n) {
return n % 2 == 0;
});
console.log("lodash remove array", arrlodashtest);
//[1, 5, 7, 9, 9]
```
9、从对象数组中删除一个项目
1、 pop：此方法从数组中删除最后一个元素并返回该元素。此方法更改数组的长度。

let users1 = [{
id: 1,
name: "ted"
}, {
id: 2,
name: "mike"
}, {
id: 3,
name: "bob"
}, {
id: 4,
name: "sara"
```
}];
let testpop1 = users1.pop();
console.log(
"array of objects pop",
```
JSON.stringify(testpop1),"-"
```
JSON.stringify(users1)
);
//{"id":4,"name":"sara"} - [{"id":1,"name":"ted"},{"id":2,"name":"mike"},{"id":3,"name":"bob"}]
```
2、shift：此方法从数组中删除第一个元素并返回该删除的元素。此方法更改数组的长度。

```
let users2 = [
{ id: 1, name: "ted" },
{ id: 2, name: "mike" },
{ id: 3, name: "bob" },
{ id: 4, name: "sara" }
];

let testshift1 = users2.shift();
console.log("array of objects shift", JSON.stringify(testshift1),"-", JSON.stringify(users2));
//{"id":1,"name":"ted"} - [{"id":2,"name":"mike"},{"id":3,"name":"bob"},{"id":4,"name":"sara"}]
```
3、 slice：此方法将数组的一部分的浅表副本返回到一个新的数组对象中，该对象选自startto end
（不包括end），其中startandend表示该数组中各项的索引。原始数组将不会被修改。

```
let users3 = [
{ id: 1, name: "ted" },
{ id: 2, name: "mike" },
{ id: 3, name: "bob" },
{ id: 4, name: "sara" }
];
let testslice1 = users3.slice(0, 3);
console.log("array of objects slice", JSON.stringify(testslice1));
//not changed original array
//[{"id":1,"name":"ted"},{"id":2,"name":"mike"},{"id":3,"name":"bob"}]
```
4、splice：此方法通过删除或替换现有元素和/，或者在适当位置添加新元素来更改数组的内容。

```
let users4 = [
{ id: 1, name: "ted" },
{ id: 2, name: "mike" },
{ id: 3, name: "bob" },
{ id: 4, name: "sara" }
];
let testspice1 = users3.splice(0, 3);
console.log("array of objects splice", JSON.stringify(testsplice));
//[{"id":1,"name":"ted"},{"id":2,"name":"mike"},{"id":3,"name":"bob"}]
```
5、filter：此方法创建一个新数组，其中所有元素都通过了由提供的功能实现的测试。

```
let users7 = [
{ id: 1, name: "ted" },
{ id: 2, name: "mike" },
{ id: 3, name: "bob" },
{ id: 4, name: "sara" }
];
let filterObj = users7.filter(item => item.id !== 2);
console.log("filter example array of objects", filterObj);

//[{"id":1,"name":"ted"},{"id":3,"name":"bob"},{"id":4,"name":"sara"}]
```
6、lodash删除：_remove删除从所有元素array的是predicate返回truthy对于和返回被删除的元素的
数组。

```
let users8 = [
{ id: 1, name: "ted" },
{ id: 2, name: "mike" },
{ id: 3, name: "bob" },
{ id: 4, name: "sara" }
];
let evensObj = _.remove(users8, function(n) {
return n.id % 2 == 0;
});
console.log("lodash remove array of object", JSON.stringify(evensObj));
//[{"id":2,"name":"mike"},{"id":4,"name":"sara"}]
```
10、从数组中给定的字符串中查找字符数
1、字符串匹配方法

该match()方法检索将字符串与正则表达式匹配的结果。

```
const test1 = ("atit patel".match(/a/g)||[]).length
console.log(test1); //2
```
2、字符串拆分方法

该split()方法将a String分为子字符串的有序列表，然后将这些子字符串放入数组中，然后返回该数
组。

```
const test2 ="atit patel".split("a").length-
console.log(test2); //
```
3、indexOf方法

该indexOf()方法返回String第一次出现指定值的调用对象内的索引，从开始搜索fromIndex。如果找不到该值，则返回-1。

```
let stringsearch = "a" ,str = "atit patel";
for(var count=-1,index=-2; index != -1; count++,index=str.indexOf(stringsearch,index+1) );
console.log(count); //2
```

4、filter方法

该filter()方法创建一个新数组，其中所有元素都通过了由提供的功能实现的测试。

```
const mainStr = 'atit patel';
const test3 = [...mainStr].filter(l => l === 'a').length;
console.log(test3); //2
```
5、reduce方法

该reduce()方法在数组的每个元素上执行reducer函数（由你提供），从而产生单个输出值。

```
const mainStr1 = 'atit patel';
const test4 = [...mainStr1].reduce((a, c) => c === 'a' ? ++a : a, 0);
console.log(test4); //2
```
11、从数组中给定的字符串中查找每个字符的出现次数
1、我们可以添加reduce方法，该方法可以在迭代后返回对象

```
let s = 'atit patel';
let test5 = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
console.log(test5); //{a: 2,e: 1,i: 1,l: 1,p: 1,t: 3}
```
2、与具有“或”运算符的方法6相同

```
let test6 = [...s].reduce((res, char) => (res[char] = (res[char] || 0) + 1, res), {})
console.log(test6);//{a: 2,e: 1,i: 1,l: 1,p: 1,t: 3}
```
12、重命名对象数组中的对象属性
1、使用Map：此方法创建一个新数组，其中填充了对调用数组中每个元素调用提供的函数的结果。

```
let countries = [
{ id: 1, name: "india" },
{ id: 2, name: "canada" },
{ id: 3, name: "america" }
];
const transformed = countries.map(({ id, name }) => ({
```
label: id,
value: name
```
}));

console.log("1", JSON.stringify(transformed));[{"label":1,"value":"india"},
{"label":2,"value":"canada"},{"label":3,"value":"america"}]
```
2、使用带有参数的映射

const transformed2 = countries.map(({ id: label, name: value }) => ({
label,
value
```
}));
console.log("2", JSON.stringify(transformed2));
[{"label":1,"value":"india"},{"label":2,"value":"canada"},{"label":3,"value":"america"}]
```
3、使用lodash：_.mapKeys方法创建一个对象，该对象具有与和相同的值，该对象object和密钥通过运行objectthru的每个自己的可枚举字符串键控属性生成iteratee。

```
const test1= _.mapKeys({ a: 1, b: 2 }, function(value, key) {
return key + value;
});
console.log("3",test1);
//{a1: 1, b2: 2}
```
如果我们想重命名对象键怎么办？让我们来看看解决方案。

4、将lodash用于值的对象

```
var users = {
'atit': { 'user': 'atit', 'age': 40 },
'mahesh': { 'user': 'mahesh', 'age': 15 }
};
const test2 = _.mapValues(users, function(o) { return o.age; });
console.log("4",test2);
//{atit: 40, mahesh: 15}
//shorthand
const test3 =_.mapValues(users, 'age');
console.log("5",test3);
//{atit: 40, mahesh: 15}
```
5、使用对象解构：该解构赋值语法是JavaScript表达式，使得它可以从阵列解压缩的值，或从属性的对象，为不同的变量。

```
const rename = (({id: a_b_c, ...rest}) => ({a_b_c, ...rest}))

console.log(rename({id: 1, val: 2}))
//{a_b_c: 1, val: 2}
```
13、如何合并两个数组并创建一个新数组？
这可以简单地通过使用扩展运算符来实现。

```
var arr1 = ['a', 'b', 'c']
var arr2 = ['d', 'e']
var merged = [...arr1, ...arr2]
console.log(merged)
```
14、一个数字数组的总和
1、reduce可用于遍历数组，将当前元素值添加到先前元素值的总和中。
```
console.log(
[1, 2, 3, 4].reduce((a, b) => a + b, 0)
```
)
```
console.log(
[].reduce((a, b) => a + b, 0)
)//10
```
2、使用Lodash

```
array = [1, 2, 3, 4];
sum = _.sum(array); // sum == 10
```
15、比较两个对象数组，删除重复项，根据属性合并对象我们确实需要比较两个不同的对象数组，并且如果两个对象匹配特定的属性值，则希望合并这两个对象，可以使用filter方法来实现。

该filter()方法创建一个新数组，其中所有元素都通过了由提供的功能实现的测试。

让我们创建测试数据。

```
let array1 = [
{ id: "50", active: "a", value: 10 },
{ id: "51", active: "a", value: 11 }
];
let array2 = [
{ id: "53", active: "a", value: 10 },
{ id: "51", active: "a", value: 11 },
{ id: "52", active: "a", value: 13 }

];
```
让我们创建函数。

```
let res = array2.filter(val =>
array1.some(({
```
value
```
}) => (val.value as any) === (value as any))
);
console.log("1", JSON.stringify(res));
//[{"id":"53","active":"a","value":10},{"id":"51","active":"a","value":11}]
```
16、比较两个对象数组，合并和更新值（假设数组3,4共享相同的ID）
有时我们确实会获得要求，以将两个不同的属性与新的属性值合并。我们可以使用地图创建一组新的对象数组，并且可以使用find方法在更新新值之前匹配特定属性。

该map()方法创建一个新数组，其中填充了在调用数组中每个元素上调用提供的函数的结果。

该find()方法返回提供的数组中满足提供的测试功能的第一个元素的值。如果没有值满足测试功能，则返回undefined。（来源：MDN）

让我们创建测试数据。

```
let array3 = [
{ id: "50", active: "a", value: 12 },
{ id: "51", active: "a", value: 15 }
];
let array4 = [
{ id: "50", active: "a", value: 10 },
{ id: "51", active: "a", value: 11 },
{ id: "52", active: "a", value: 13 }
];
```
让我们创建函数。

```
let arr = [];
array3.map(id =>
arr.push({
```
id: id.id,
```
newValue: array4.find(o => o.id === id.id).value + 2

})
);
console.log("2", JSON.stringify(arr));
//[{"id":"50","newValue":12},{"id":"51","newValue":13}]
```
17、比较对象数组并找到唯一的对象
如果我们要比较两个对象数组并检查其中哪些是唯一对象，则可以使用filter来实现这些功能。

让我们创建测试数据。

```
const array5 = [
{ id: "50", active: "a", value: 12 },
{ id: "51", active: "a", value: 15 }
];
const array6 = [
{ id: "50", active: "a", value: 12 },
{ id: "51", active: "a", value: 15 },
{ id: "52", active: "a", value: 13 }
];
```
让我们创建函数

```
const ids = array5.map(e => e.id);
let filtered = array6.filter(e => ids.includes(e.id));
console.log("3", JSON.stringify(filtered));
//[{"id":"50","active":"a","value":12},{"id":"51","active":"a","value":15}]
```
18、根据匹配的值比较和更新属性
当我们要比较两个对象数组并根据匹配的值更新特定的属性时，可以使用这些函数。
让我们创建测试数据
```
const array7 = [
{ id: "50", active: "a", value: 12 },
{ id: "51", active: "a", value: 15 }
];
const array8 = [{ id: "50", active: "a", value: 12 }];
```
让我们创建函数

```
const idSet = new Set(array8.map(o => o.id));
const res1 = array7.map(o => ({ ...o, value: idSet.has(o.id) ? "0" : o.value }));
console.log("4", JSON.stringify(res1));

//[{"id":"50","active":"a","value":"0"},{"id":"51","active":"a","value":15}
```
19、比较两个数组对象并获得差异
当我们要比较两个不同的对象数组并得到它们之间的差异时，可以使用这些函数。

让我们创建测试数据

```
let a = [
{ id: "50", active: "a", value: 10 },
{ id: "51", active: "a", value: 11 }
];
let b = [
{ id: "50", active: "a", value: 10 },
{ id: "51", active: "a", value: 11 },
{ id: "52", active: "a", value: 13 }
];
```
让我们创建函数

```
let valuesArray1 = a.reduce(function(a, c) {
a[c.value] = c.value;
return a;
}, {});
let valuesArray2 = b.reduce(function(a, c) {
a[c.value] = c.value;
return a;
}, {});
var result = a
.filter(function(c) {
return !valuesArray2[c.value];
})
```
.concat(
```
b.filter(function(c) {
return !valuesArray1[c.value];
})
);
console.log("5", result);
//[{"id":"52","active":"a","value":13}]
//shorthand

let ab = b.filter(o => !a.find(o2 => o.id === o2.id));
console.log("6", ab);
```
20、比较对象的两个数组合并并删除重复项如果我们有要求比较两个对象数组并从它们中删除重复项并合并两个数组，则可以使用此方法。
让我们创建测试数据
```
let arr1 = [
{ id: "50", active: "a", value: 10 },
{ id: "51", active: "a", value: 11 }
];
let arr2 = [
{ id: "50", active: "a", value: 10 },
{ id: "51", active: "a", value: 11 },
{ id: "52", active: "a", value: 13 }
];
```
让我们创建函数

```
const arr1IDs = new Set(arr1.map(({ id }) => id));
const combined = [...arr1, ...arr2.filter(({ id }) => !arr1IDs.has(id))];
console.log(JSON.stringify(combined));
//[{"id":"50","active":"a","value":10},{"id":"51","active":"a","value":11},
{"id":"52","active":"a","value":13}]
```
使用lodash
Lodash支持_differenceBy和 _differenceWith查找两个数组之间差异的方法。
```
let lodashtest1 = [{ id: "50" }, { id: "51" }];
let lodashtest2 = [{ id: "50" }, { id: "51" }, { id: "52" }];
let lodashresult = _.differenceBy(lodashtest2, lodashtest1, "id");
console.log("7", JSON.stringify(lodashresult));
//[{"id":"52"}]
let dif = _.differenceWith(lodashtest2, lodashtest1, _.isEqual);
console.log("8",JSON.stringify(dif));
//[{"id":"52"}]
```
21、比较对象并找到唯一值
当我们处理嵌套对象时，有时很难弄清楚我们如何迭代和比较两个嵌套对象并在其中获得一些唯一的对象。我们可以使用Object.keys和Object.values方法进行迭代。
让我们创建测试数据
let obj1 = {
val1: "test",

```
stream: { prop1: false, prop2: true }
};
let obj2 = {
```
val1: "test",
```
stream: { prop1: true, prop2: true }
};
interface Data {
stream: { [key: string]: boolean };
}
```
让我们创建测试数据

```
function objFilter(objA: Data, objB: Data): Data {
let out: Data = { stream: {} };
Object.keys(objA.stream).filter((value, idx) =>
Object.values(objA.stream)[idx] === Object.values(objB.stream)[idx]
? (out.stream[value] = Object.values(objA.stream)[idx])
```
: false
```
);
return out;
}
console.log(JSON.stringify(objFilter(obj1, obj2))); //prop2
//{"stream":{"prop2":true}}
```
22、如何处理循环内的多个服务调用
1、如果我们不想等待所有服务呼叫完成

```
let data = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
async function getDetails(values) {
for (const data of values) {
const result = await axios.get(
`serviceURL/${data.id}`
);
const newData = result.data;
this.updateDetails(newData);
console.log(this.response);
}
}
function updateDetails(data) {

this.response.push(data);
}
getDetails(data); //call service to get data
```
2、如果我们要等到所有服务呼叫完成

我们可以用promise.all来等到所有的诺言都解决了。

该Promise.all()方法将一个可迭代的Promise作为输入，并返回一个Promise解析为输入Promise结果数组的单个对象。

```
let data = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
async function getDetails(values) {
const dataPromises = values.map(entry => {
return axios.get(
`serviceURL/${entry.id}`
);
});
const resultData = await Promise.all(dataPromises);
resultData.forEach((res: any) => {
this.updateDetails(res.data);
});
console.log(this.response);
}
function updateDetails(data) {
this.response.push(data);
}
getDetails(data); //call service to get data
```

<a id="sec-2"></a>
## 32个手撕JS，彻底摆脱初级前端（面试高频）

> 来源：有道云笔记
> 原路径：`js/32个手撕JS，彻底摆脱初级前端（面试高频）.md`

前端开发者社区 今天

作者：洛霞
https://juejin.im/post/6875152247714480136
作为前端开发，JS是重中之重，最近结束了面试的高峰期，基本上offer也定下来了就等开奖，趁着这个时间总结下32个手撕JS问题，这些都是高频面试题，完全理解之后定能彻底摆脱初级前端。

 01.数组扁平化
数组扁平化是指将一个多维数组变为一个一维数组
```
const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]
```
方法一：使用 flat()
const res1 = arr.flat(Infinity);
方法二：利用正则
const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');
但数据类型都会变为字符串
方法三：正则改良版本
const res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
方法四：使用 reduce
```
const flatten = arr => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}
const res4 = flatten(arr);
```
方法五：函数递归
```
const res5 = [];
const fn = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      fn(arr[i]);
    } else {
      res5.push(arr[i]);
    }

  }28
}29
fn(arr);30
```
02.数组去重32
```
const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];33
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]34
```
方法一：利用 Set36
const res1 = Array.from(new Set(arr));37
方法二：两层for循环+splice39
```
const unique1 = arr => {40
  let len = arr.length;41
  for (let i = 0; i < len; i++) {42
    for (let j = i + 1; j < len; j++) {43
      if (arr[i] === arr[j]) {44
        arr.splice(j, 1);45
        // 每删除一个树， j-- 保证 j 的值经过自加后不变。同时， len-- ，减少循环次数提升性能46
        len--;47
        j--;48
      }49
    }50
  }51
  return arr;52
}53
```
方法三：利用 indexOf55
```
const unique2 = arr => {56
  const res = [];57
  for (let i = 0; i < arr.length; i++) {58
    if (res.indexOf(arr[i]) === -1) res.push(arr[i]);59
  }60
  return res;61
}62
```
当然也可以用 include 、 filter ，思路大同小异。63
方法四：利用 include64
```
const unique3 = arr => {65
  const res = [];66
  for (let i = 0; i < arr.length; i++) {67

    if (!res.includes(arr[i])) res.push(arr[i]);68
  }69
  return res;70
}71
```
方法五：利用 filter72
```
const unique4 = arr => {73
  return arr.filter((item, index) => {74
    return arr.indexOf(item) === index;75
  });76
}77
```
方法六：利用 Map78
```
const unique5 = arr => {79
  const map = new Map();80
  const res = [];81
  for (let i = 0; i < arr.length; i++) {82
    if (!map.has(arr[i])) {83
      map.set(arr[i], true)84
      res.push(arr[i]);85
    }86
  }87
  return res;88
}89
// 数组去重90
var arr = [91
    {92
        "SERIAL_NUMBER": "99999999",93
        "CHECK_POINT_NAME": " 操作室 ",94
        "STATE": "0",95
        "CHECK_POINT_ID": "90393275",96
        "TASK_ID": "2108161923068658"97
    },98
    {99
        "SERIAL_NUMBER": "77777777",100
        "CHECK_POINT_NAME": " 设备主体 ",101
        "STATE": "1",102
        "CHECK_POINT_ID": "90393280",103
        "TASK_ID": "2108161923068658"104
    },105
    {106

        "SERIAL_NUMBER": "88888888",107
        "CHECK_POINT_NAME": " 机房 ",108
        "STATE": "0",109
        "CHECK_POINT_ID": "90393248",110
        "TASK_ID": "2108161923068658"111
    },112
    {113
        "SERIAL_NUMBER": "88888888",114
        "CHECK_POINT_NAME": " 机房 ",115
        "STATE": "1",116
        "CHECK_POINT_ID": "90393248",117
        "TASK_ID": "2108161923068658"118
    }119
]120
var infoArr = []121
var infoArr2 = []122
let list1 = arr.filter((item, index) => {123
    if (infoArr.indexOf(item.CHECK_POINT_ID) > -1 && item.STATE == '1') {124
        return false125
    } else if (infoArr.indexOf(item.CHECK_POINT_ID) > -1 && item.STATE == '0') {126
        infoArr2.push(item.CHECK_POINT_ID)127
        return true128
    } else {129
        infoArr.push(item.CHECK_POINT_ID)130
        return true131
    }132
}).filter(v=>{133
    if (infoArr2.indexOf(v.CHECK_POINT_ID) > -1 && v.STATE == '1') {134
        return false135
    }else{136
        return true137
    }138
})139
```
03.类数组转化为数组145

类数组是具有 length 属性，但不具有数组原型上的方法。常见的类数组有 arguments 、DOM操作方法返回的结
果。
方法一： Array.from147
Array.from(document.querySelectorAll('div'))148
方法二： Array.prototype.slice.call()149
Array.prototype.slice.call(document.querySelectorAll('div'))150
方法三：扩展运算符151
[...document.querySelectorAll('div')]152
方法四：利用 concat153
Array.prototype.concat.apply([], document.querySelectorAll('div'));154
04.Array.prototype.filter()156
```
Array.prototype.filter = function(callback, thisArg) {159
  if (this == undefined) {160
    throw new TypeError('this is null or not undefined');161
  }162
  if (typeof callback !== 'function') {163
    throw new TypeError(callback + 'is not a function');164
  }165
  const res = [];166
  // 让 O 成为回调函数的对象传递（强制转换对象）167
  const O = Object(this);168
  // >>>0 保证 len 为 number ，且为正整数169
  const len = O.length >>> 0;170
  for (let i = 0; i < len; i++) {171
    // 检查 i 是否在 O 的属性（会检查原型链）172
    if (i in O) {173
      // 回调函数调用传参174
      if (callback.call(thisArg, O[i], i, O)) {175
        res.push(O[i]);176
      }177
    }178
  }179
  return res;180
}181
对于>>>0有疑问的：解释>>>0的作用182
```
05.Array.prototype.map()184

```
Array.prototype.map = function(callback, thisArg) {186
  if (this == undefined) {187
    throw new TypeError('this is null or not defined');188
  }189
  if (typeof callback !== 'function') {190
    throw new TypeError(callback + ' is not a function');191
  }192
  const res = [];193
  // 同理194
  const O = Object(this);195
  const len = O.length >>> 0;196
  for (let i = 0; i < len; i++) {197
    if (i in O) {198
      // 调用回调函数并传入新数组199
      res[i] = callback.call(thisArg, O[i], i, this);200
    }201
  }202
  return res;203
}204
```
06.Array.prototype.forEach()206
forEach 跟 map 类似，唯一不同的是 forEach 是没有返回值的。208
```
Array.prototype.forEach = function(callback, thisArg) {209
  if (this == null) {210
    throw new TypeError('this is null or not defined');211
  }212
  if (typeof callback !== "function") {213
    throw new TypeError(callback + ' is not a function');214
  }215
  const O = Object(this);216
  const len = O.length >>> 0;217
  let k = 0;218
  while (k < len) {219
    if (k in O) {220
      callback.call(thisArg, O[k], k, O);221
    }222
    k++;223
  }224

}225
```
07.Array.prototype.reduce()227
```
Array.prototype.reduce = function(callback, initialValue) {229
  if (this == undefined) {230
    throw new TypeError('this is null or not defined');231
  }232
  if (typeof callback !== 'function') {233
    throw new TypeError(callbackfn + ' is not a function');234
  }235
  const O = Object(this);236
  const len = this.length >>> 0;237
  let accumulator = initialValue;238
  let k = 0;239
  // 如果第二个参数为 undefined 的情况下240
  // 则数组的第一个有效值作为累加器的初始值241
  if (accumulator === undefined) {242
    while (k < len && !(k in O)) {243
      k++;244
    }245
    // 如果超出数组界限还没有找到累加器的初始值，则 TypeError246
    if (k >= len) {247
      throw new TypeError('Reduce of empty array with no initial value');248
    }249
    accumulator = O[k++];250
  }251
  while (k < len) {252
    if (k in O) {253
      accumulator = callback.call(undefined, accumulator, O[k], k, O);254
    }255
    k++;256
  }257
  return accumulator;258
}259
```
08.Function.prototype.apply()261
第一个参数是绑定的this，默认为 window ，第二个参数是数组或类数组262
```
Function.prototype.apply = function(context = window, args) {263

  if (typeof this !== 'function') {264
    throw new TypeError('Type Error');265
  }266
  const fn = Symbol('fn');267
  context[fn] = this;268
  const res = context[fn](...args);270
  delete context[fn];271
  return res;272
}273
```
09.Function.prototype.call275
于 call 唯一不同的是， call()方法接受的是一个参数列表276
```
Function.prototype.call = function(context = window, ...args) {277
  if (typeof this !== 'function') {278
    throw new TypeError('Type Error');279
  }280
  const fn = Symbol('fn');281
  context[fn] = this;282
  const res = this[fn](...args);284
  delete this.fn;285
  return res;286
}287
```
10.Function.prototype.bind289
```
Function.prototype.bind = function(context, ...args) {290
  if (typeof this !== 'function') {291
    throw new Error("Type Error");292
  }293
  // 保存 this 的值294
  var self = this;295
  return function F() {297
    // 考虑 new 的情况298
    if(this instanceof F) {299
      return new self(...args, ...arguments)300
    }301
    return self.apply(context, [...args, ...arguments])302
  }303

}304
```
11.debounce （防抖）306
触发高频时间后 n 秒内函数只会执行一次,如果 n 秒内高频时间再次触发,则重新计算时间。307
```
const debounce = (fn, time) => {308
  let timeout = null;309
  return function() {310
    clearTimeout(timeout)311
    timeout = setTimeout(() => {312
      fn.apply(this, arguments);313
    }, time);314
  }315
};316
```
防抖常应用于用户进行搜索输入节约请求资源， window 触发 resize 事件时进行防抖只触发一次。317
12.throttle （节流）319
高频时间触发,但 n 秒内只会执行一次,所以节流会稀释函数的执行频率。320
```
const throttle = (fn, time) => {321
  let flag = true;322
  return function() {323
    if (!flag) return;324
    flag = false;325
    setTimeout(() => {326
      fn.apply(this, arguments);327
      flag = true;328
    }, time);329
  }330
}331
```
节流常应用于鼠标不断点击触发、监听滚动事件。332
13.函数珂里化334
指的是将一个接受多个参数的函数  变为  接受一个参数返回一个函数的固定形式，这样便于再次调用，例如
f(1)(2)
```
经典面试题：实现 add(1)(2)(3)(4)=10; 、  add(1)(1,2,3)(2)=9;336
function add() {337
  const _args = [...arguments];338
  function fn() {339
    _args.push(...arguments);340
    return fn;341
  }342

  fn. = function() {343
    return _args.reduce((sum, cur) => sum + cur);344
  }345
  return fn;346
}347
```
14.模拟new操作349
3个步骤：350
以 ctor.prototype 为原型创建一个对象。351
执行构造函数并将this绑定到新创建的对象上。352
判断构造函数执行返回的结果是否是引用数据类型，若是则返回构造函数执行的结果，否则返回创建的对象。353
```
function newOperator(ctor, ...args) {354
  if (typeof ctor !== 'function') {355
    throw new TypeError('Type Error');356
  }357
  const obj = Object.create(ctor.prototype);358
  const res = ctor.apply(obj, args);359
  const isObject = typeof res === 'object' && res !== null;361
  const isFunction = typeof res === 'function';362
  return isObject || isFunction ? res : obj;363
}364
```
15.instanceof366
instanceof运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。367
```
const myInstanceof = (left, right) => {368
  // 基本数据类型都返回 false369
  if (typeof left !== 'object' || left === null) return false;370
  let proto = Object.getPrototypeOf(left);371
  while (true) {372
    if (proto === null) return false;373
    if (proto === right.prototype) return true;374
    proto = Object.getPrototypeOf(proto);375
  }376
}377
```
16.原型继承379
这里只写寄生组合继承了，中间还有几个演变过来的继承但都有一些缺陷380
```
function Parent5) {381
  this.name = 'parent';382

}383
function Child() {384
  Parent.call(this);385
  this.type = 'children';386
}387
Child.prototype = Object.create(Parent.prototype);388
Child.prototype.constructor = Child;389
```
17.Object.is391
Object.is 解决的主要是这两个问题：392
```
+0 === -0  // true393
NaN === NaN // false394
const is= (x, y) => {396
  if (x === y) {397
    // +0 和 -0 应该不相等398
    return x !== 0 || y !== 0 || 1/x === 1/y;399
  } else {400
    return x !== x && y !== y;401
  }402
}403
```
18.Object.assign405
Object.assign()方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
（请注意这个操作是浅拷贝）
```
Object.defineProperty(Object, 'assign', {407
  value: function(target, ...args) {408
    if (target == null) {409
      return new TypeError('Cannot convert undefined or null to object');410
    }411
    // 目标对象需要统一是引用数据类型，若不是会自动转换413
    const to = Object(target);414
    for (let i = 0; i < args.length; i++) {416
      // 每一个源对象417
      const nextSource = args[i];418
      if (nextSource !== null) {419
        // 使用 for...in 和 hasOwnProperty 双重判断，确保只拿到本身的属性、方法（不包含继承的）420
        for (const nextKey in nextSource) {421

          if (Object.prototype..call(nextSource, nextKey)) {422
            to[nextKey] = nextSource[nextKey];423
          }424
        }425
      }426
    }427
    return to;428
  },429
  // 不可枚举430
```
  enumerable: false,431
  writable: true,432
  configurable: true,433
})434
19.深拷贝436
递归的完整版本（考虑到了 Symbol 属性）：437
```
const cloneDeep1 = (target, hash = new WeakMap()) => {438
  // 对于传入参数处理439
  if (typeof target !== 'object' || target === null) {440
    return target;441
  }442
  // 哈希表中存在直接返回443
  if (hash.has(target)) return hash.get(target);444
  const cloneTarget = Array.isArray(target) ? [] : {};446
  hash.set(target, cloneTarget);447
  // 针对 Symbol 属性449
  const symKeys = Object.getOwnPropertySymbols(target);450
  if (symKeys.length) {451
    symKeys.forEach(symKey => {452
      if (typeof target[symKey] === 'object' && target[symKey] !== null) {453
        cloneTarget[symKey] = cloneDeep1(target[symKey]);454
      } else {455
        cloneTarget[symKey] = target[symKey];456
      }457
    })458
  }459
  for (const i in target) {461

    if (Object.prototype..call(target, i)) {462
      cloneTarget[i] =463
        typeof target[i] === 'object' && target[i] !== null464
        ? cloneDeep1(target[i], hash)465
        : target[i];466
    }467
  }468
  return cloneTarget;469
}470
```
20.Promise472
实现思路： Promise 源码实现473
```
const PENDING = 'PENDING';      // 进行中474
const FULFILLED = 'FULFILLED';  // 已成功475
const REJECTED = 'REJECTED';    // 已失败476
class Promise {478
  (exector) {479
    // 初始化状态480
    this.status = PENDING;481
    // 将成功、失败结果放在 this 上，便于 then 、 catch 访问482
    this.value = undefined;483
    this.reason = undefined;484
    // 成功态回调函数队列485
    this.onFulfilledCallbacks = [];486
    // 失败态回调函数队列487
    this.onRejectedCallbacks = [];488
    const resolve = value => {490
      // 只有进行中状态才能更改状态491
      if (this.status === PENDING) {492
        this.status = FULFILLED;493
        this.value = value;494
        // 成功态函数依次执行495
        this.onFulfilledCallbacks.forEach(fn => fn(this.value));496
      }497
    }498
    const reject = reason => {499
      // 只有进行中状态才能更改状态500

      if (this.status === PENDING) {501
        this.status = REJECTED;502
        this.reason = reason;503
        // 失败态函数依次执行504
        this.onRejectedCallbacks.forEach(fn => fn(this.reason))505
      }506
    }507
    try {508
      // 立即执行 executor509
      // 把内部的 resolve 和 reject 传入 executor ，用户可调用 resolve 和 reject510
      exector(resolve, reject);511
    } catch(e) {512
      // executor 执行出错，将错误内容 reject 抛出去513
      reject(e);514
    }515
  }516
  then(onFulfilled, onRejected) {517
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;518
    onRejected = typeof onRejected === 'function'? onRejected:519
      reason => { throw new Error(reason instanceof Error ? reason.message:reason) }520
    // 保存 this521
    const self = this;522
    return new Promise((resolve, reject) => {523
      if (self.status === PENDING) {524
        self.onFulfilledCallbacks.push(() => {525
          // try 捕获错误526
          try {527
            // 模拟微任务528
            setTimeout(() => {529
              const result = onFulfilled(self.value);530
              // 分两种情况：531
              // 1. 回调函数返回值是 Promise ，执行 then 操作532
              // 2. 如果不是 Promise ，调用新 Promise 的 resolve 函数533
              result instanceof Promise ? result.then(resolve, reject) :
resolve(result);
            })535
          } catch(e) {536
            reject(e);537
          }538
        });539

        self.onRejectedCallbacks.push(() => {540
          // 以下同理541
          try {542
            setTimeout(() => {543
              const result = onRejected(self.reason);544
              // 不同点：此时是 reject545
              result instanceof Promise ? result.then(resolve, reject) :
reject(result);
            })547
          } catch(e) {548
            reject(e);549
          }550
        })551
      } else if (self.status === FULFILLED) {552
        try {553
          setTimeout(() => {554
            const result = onFulfilled(self.value);555
            result instanceof Promise ? result.then(resolve, reject) : resolve(result);556
          });557
        } catch(e) {558
          reject(e);559
        }560
      } else if (self.status === REJECTED){561
        try {562
          setTimeout(() => {563
            const result = onRejected(self.reason);564
            result instanceof Promise ? result.then(resolve, reject) : reject(result);565
          })566
        } catch(e) {567
          reject(e);568
        }569
      }570
    });571
  }572
  catch(onRejected) {573
    return this.then(null, onRejected);574
  }575
  static resolve(value) {576
    if (value instanceof Promise) {577
      // 如果是 Promise 实例，直接返回578

      return value;579
    } else {580
      // 如果不是 Promise 实例，返回一个新的 Promise 对象，状态为 FULFILLED581
      return new Promise((resolve, reject) => resolve(value));582
    }583
  }584
  static reject(reason) {585
    return new Promise((resolve, reject) => {586
      reject(reason);587
    })588
  }589
}590
```
21.Promise.all592
Promise.all 是支持链式调用的，本质上就是返回了一个 Promise 实例，通过 resolve 和 reject 来改变实例状
态。
```
Promise.myAll = function(promiseArr) {594
  return new Promise((resolve, reject) => {595
    const ans = [];596
    let index = 0;597
    for (let i = 0; i < promiseArr.length; i++) {598
      promiseArr[i]599
      .then(res => {600
        ans[i] = res;601
        index++;602
        if (index === promiseArr.length) {603
          resolve(ans);604
        }605
      })606
      .catch(err => reject(err));607
    }608
  })609
}610
```
22.Promise.race612
```
Promise.race = function(promiseArr) {613
  return new Promise((resolve, reject) => {614
    promiseArr.forEach(p => {615
      // 如果不是 Promise 实例需要转化为 Promise 实例616
      Promise.resolve(p).then(617

        val => resolve(val),618
        err => reject(err),619
      )620
    })621
  })622
}623
```
23.Promise 并行限制625
就是实现有并行限制的 Promise 调度器问题。626
详细实现思路：某条高频面试原题：实现有并行限制的 Promise 调度器627
```
class Scheduler {628
  () {629
    this.queue = [];630
    this.maxCount = 2;631
    this.runCounts = 0;632
  }633
  add(promiseCreator) {634
    this.queue.push(promiseCreator);635
  }636
  taskStart() {637
    for (let i = 0; i < this.maxCount; i++) {638
      this.request();639
    }640
  }641
  request() {642
    if (!this.queue || !this.queue.length || this.runCounts >= this.maxCount) {643
      return;644
    }645
    this.runCounts++;646
    this.queue.shift()().then(() => {648
      this.runCounts--;649
      this.request();650
    });651
  }652
}653
const timeout = time => new Promise(resolve => {655
  setTimeout(resolve, time);656
})657

const scheduler = new Scheduler();659
const addTask = (time,order) => {661
  scheduler.add(() => timeout(time).then(()=>console.log(order)))662
}663
addTask(1000, '1');666
addTask(500, '2');667
addTask(300, '3');668
addTask(400, '4');669
```
scheduler.taskStart()670
```
// 2671
// 3672
// 1673
// 4674
```
24.JSONP676
script 标签不遵循同源协议，可以用来进行跨域请求，优点就是兼容性好但仅限于GET请求677
```
const jsonp = ({ url, params, callbackName }) => {678
  const generateUrl = () => {679
    let dataSrc = '';680
    for (let key in params) {681
      if (Object.prototype..call(params, key)) {682
        dataSrc += `${key}=${params[key]}&`;683
      }684
    }685
    dataSrc += `callback=${callbackName}`;686
    return `${url}?${dataSrc}`;687
  }688
  return new Promise((resolve, reject) => {689
    const scriptEle = document.createElement('script');690
    scriptEle.src = generateUrl();691
    document.body.appendChild(scriptEle);692
    window[callbackName] = data => {693
      resolve(data);694
      document.removeChild(scriptEle);695
    }696

  })697
}698
```
25.AJAX700
```
const getJSON = function(url) {701
  return new Promise((resolve, reject) => {702
    const xhr = XMLHttpRequest ? new XMLHttpRequest() : new
ActiveXObject('Mscrosoft.XMLHttp');
    xhr.open('GET', url, false);704
    xhr.setRequestHeader('Accept', 'application/json');705
    xhr.onreadystatechange = function() {706
      if (xhr.readyState !== 4) return;707
      if (xhr.status === 200 || xhr.status === 304) {708
        resolve(xhr.responseText);709
      } else {710
        reject(new Error(xhr.responseText));711
      }712
    }713
    xhr.send();714
  })715
}716
```
26.event 模块718
实现 node 中回调函数的机制， node 中回调函数其实是内部使用了观察者模式。719
观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 发生改变时，所有依赖它的对象
Observer 都会得到通知。
```
function EventEmitter() {721
  this.events = new Map();722
}723
// 需要实现的一些方法：725
// addListener 、 removeListener 、 once 、 removeAllListeners 、 emit726
// 模拟实现 addlistener 方法728
const wrapCallback = (fn, once = false) => ({ callback: fn, once });729
EventEmitter.prototype.addListener = function(type, fn, once = false) {730
  const hanlder = this.events.get(type);731
  if (!hanlder) {732
    // 没有 type 绑定事件733
    this.events.set(type, wrapCallback(fn, once));734

  } else if (hanlder && typeof hanlder.callback === 'function') {735
    // 目前 type 事件只有一个回调736
    this.events.set(type, [hanlder, wrapCallback(fn, once)]);737
  } else {738
    // 目前 type 事件数 >=2739
    hanlder.push(wrapCallback(fn, once));740
  }741
}742
// 模拟实现 removeListener743
EventEmitter.prototype.removeListener = function(type, listener) {744
  const hanlder = this.events.get(type);745
  if (!hanlder) return;746
  if (!Array.isArray(this.events)) {747
    if (hanlder.callback === listener.callback) this.events.delete(type);748
    else return;749
  }750
  for (let i = 0; i < hanlder.length; i++) {751
    const item = hanlder[i];752
    if (item.callback === listener.callback) {753
      hanlder.splice(i, 1);754
      i--;755
      if (hanlder.length === 1) {756
        this.events.set(type, hanlder[0]);757
      }758
    }759
  }760
}761
// 模拟实现 once 方法762
EventEmitter.prototype.once = function(type, listener) {763
  this.addListener(type, listener, true);764
}765
// 模拟实现 emit 方法766
EventEmitter.prototype.emit = function(type, ...args) {767
  const hanlder = this.events.get(type);768
  if (!hanlder) return;769
  if (Array.isArray(hanlder)) {770
    hanlder.forEach(item => {771
      item.callback.apply(this, args);772
      if (item.once) {773
        this.removeListener(type, item);774

      }775
    })776
  } else {777
    hanlder.callback.apply(this, args);778
    if (hanlder.once) {779
      this.events.delete(type);780
    }781
  }782
  return true;783
}784
EventEmitter.prototype.removeAllListeners = function(type) {785
  const hanlder = this.events.get(type);786
  if (!hanlder) return;787
  this.events.delete(type);788
}789
```
27.图片懒加载791
可以给 img 标签统一自定义属性 src='default.png'，当检测到图片出现在窗口之后再补充 src 属性，此时才会进行图片资源加载。
```
function lazyload() {793
  const imgs = document.getElementsByTagName('img');794
  const len = imgs.length;795
  // 视口的高度796
  const viewHeight = document.documentElement.clientHeight;797
  // 滚动条高度798
  const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;799
  for (let i = 0; i < len; i++) {800
    const offsetHeight = imgs[i].offsetTop;801
    if (offsetHeight < viewHeight + scrollHeight) {802
      const src = imgs[i].dataset.src;803
      imgs[i].src = src;804
    }805
  }806
}807
// 可以使用节流优化一下809
window.addEventListener('scroll', lazyload);810
```
28.滚动加载812
原理就是监听页面滚动事件，分析 clientHeight 、 scrollTop 、 scrollHeight 三者的属性关系。813

```
window.addEventListener('scroll', function() {814
  const clientHeight = document.documentElement.clientHeight;815
  const scrollTop = document.documentElement.scrollTop;816
  const scrollHeight = document.documentElement.scrollHeight;817
  if (clientHeight + scrollTop >= scrollHeight) {818
    // 检测到滚动至页面底部，进行后续操作819
    // ...820
  }821
}, false);822
```
一个 Demo ：页面滚动加载的 Demo823
29.渲染几万条数据不卡住页面825
渲染大数据时，合理使用 createDocumentFragment 和 requestAnimationFrame ，将操作切分为一小段一小段执行。
```
setTimeout(() => {827
  // 插入十万条数据828
  const total = 100000;829
  // 一次插入的数据830
  const once = 20;831
  // 插入数据需要的次数832
  const loopCount = Math.ceil(total / once);833
  let countOfRender = 0;834
  const ul = document.querySelector('ul');835
  // 添加数据的方法836
  function add() {837
    const fragment = document.createDocumentFragment();838
    for(let i = 0; i < once; i++) {839
      const li = document.createElement('li');840
      li.innerText = Math.floor(Math.random() * total);841
      fragment.appendChild(li);842
    }843
    ul.appendChild(fragment);844
    countOfRender += 1;845
    loop();846
  }847
  function loop() {848
    if(countOfRender < loopCount) {849
      window.requestAnimationFrame(add);850
    }851
  }852

  loop();853
}, 0)854
```
30.打印出当前网页使用了多少种HTML元素856
一行代码可以解决：857
```
const fn = () => {858
  return [...new Set([...document.querySelectorAll('*')].map(el =>
el.tagName))].length;
}860
```
值得注意的是：DOM操作返回的是类数组，需要转换为数组之后才可以调用数组的方法。861
31.将 VirtualDom 转化为真实DOM结构863
这是当前SPA应用的核心概念之一864
```
// vnode 结构：865
// {866
//   tag,867
//   attrs,868
//   children,869
// }870
//Virtual DOM => DOM872
function render(vnode, container) {873
  container.appendChild(_render(vnode));874
}875
function _render(vnode) {876
  // 如果是数字类型转化为字符串877
  if (typeof vnode === 'number') {878
    vnode = String(vnode);879
  }880
  // 字符串类型直接就是文本节点881
  if (typeof vnode === 'string') {882
    return document.createTextNode(vnode);883
  }884
  // 普通 DOM885
  const dom = document.createElement(vnode.tag);886
  if (vnode.attrs) {887
    // 遍历属性888
    Object.keys(vnode.attrs).forEach(key => {889
      const value = vnode.attrs[key];890
      dom.setAttribute(key, value);891

    })892
  }893
  // 子数组进行递归操作894
  vnode.children.forEach(child => render(child, dom));895
  return dom;896
}897
```
32.字符串解析问题899
```
var a = {900
    b: 123,901
    c: '456',902
    e: '789',903
}904
var str=`a{a.b}aa{a.c}aa {a.d}aaaa`;905
// => 'a123aa456aa {a.d}aaaa'906
实现函数使得将 str 字符串中的{}内的变量替换，如果属性不存在保持原样（比如{a.d}）907
```
类似于模版字符串，但有一点出入，实际上原理大差不差908
```
const fn1 = (str, obj) => {909
    let res = '';910
    // 标志位，标志前面是否有 {911
    let flag = false;912
    let start;913
    for (let i = 0; i < str.length; i++) {914
        if (str[i] === '{') {915
            flag = true;916
            start = i + 1;917
            continue;918
        }919
        if (!flag) res += str[i];920
        else {921
            if (str[i] === '}') {922
                flag = false;923
                res += match(str.slice(start, i), obj);924
            }925
        }926
    }927
    return res;928
}929
// 对象匹配操作930
const match = (str, obj) => {931

try {
    const keys = str.split('.').slice(1);932
    let index = 0;933
    let o = obj;934
    while (index < keys.length) {935
        const key = keys[index];936
        if (!o[key]) {937
            return `{${str}}`;938
        } else {939
            o = o[key];940
        }941
        index++;942
    }943
    return o;944
}945
// something
} catch (e) {
```
window.location.href =
"http://stackoverflow.com/search?q=[js]+" + e.message;
}

<a id="sec-3"></a>
## JS树结构操作：查找、遍历、筛选、树结构和列表结构相互转换

> 来源：有道云笔记
> 原路径：`js/JS树结构操作：查找、遍历、筛选、树结构和列表结构相互转换.md`

前端大全 前天
（给前端大全加星标，提升前端技能）
转自：沐码小站
https://wintc.top/article/20
经常有同学问树结构的相关操作，也写了很多次，在这里总结一下 JS 树形结构一些操作的实现思路，
并给出了简洁易懂的代码实现。
本文内容结构大概如下：
JS树结构相关操作
一、遍历树结构
1. 树结构介绍
JS中树结构一般是类似于这样的结构：
```
let tree = [
  {
    id: '1',
    title: ' 节点 1',
    children: [
      {
        id: '1-1',
        title: ' 节点 1-1'
      },
      {
        id: '1-2',
        title: ' 节点 1-2'
      }
    ]
  },
```

为了更通用，可以用存储了树根节点的列表表示一个树形结构，每个节点的children属性（如果有）是一颗子树，如果没有children属性或者children长度为0，则表示该节点为叶子节点。
2. 树结构遍历方法介绍
树结构的常用场景之一就是遍历，而遍历又分为广度优先遍历、深度优先遍历。其中深度优先遍历是可递归的，而广度优先遍历是非递归的，通常用循环来实现。深度优先遍历又分为先序遍历、后序遍历，二叉树还有中序遍历，实现方法可以是递归，也可以是循环。
JS遍历树结构
广度优先和深度优先的概念很简单，区别如下：
3. 广度优先遍历的实现
广度优先的思路是，维护一个队列，队列的初始值为树结构根节点组成的列表，重复执行以下步骤直到队列为空：
```
  {16
    id: '2',17
    title: ' 节点 2',18
    children: [19
      {20
        id: '2-1',21
        title: ' 节点 2-1'22
      }23
    ]24
  }25
]26
```
深度优先，访问完一颗子树再去访问后面的子树，而访问子树的时候，先访问根再访问根的子树，
称为先序遍历；先访问子树再访问根，称为后序遍历。
广度优先，即访问树结构的第n+1层前必须先访问完第n层取出队列中的第一个元素，进行访问相关操作，然后将其后代元素（如果有）全部追加到队列最

下面是代码实现，类似于数组的forEach遍历，我们将数组的访问操作交给调用者自定义，即一个回调
函数：
很简单吧，~,~
用上述数据测试一下看看：
输出，可以看到第一层所有元素都在第二层元素前输出：
4. 深度优先遍历的递归实现
先序遍历，三五行代码，太简单，不过多描述了：
后序遍历，与先序遍历思想一致，代码也及其相似，只不过调换一下节点遍历和子树遍历的顺序：
后。
```
// 广度优先
function treeForeach (tree, func) {
  let node, list = [...tree]
  while (node = list.shift()) {
    func(node)
    node.children && list.push(...node.children)
  }
}
treeForeach(tree, node => { console.log(node.title) })1
```
> 节点11
> 节点22
> 节点1-13
> 节点1-24
> 节点2-15
```
function treeForeach (tree, func) {
  tree.forEach(data => {
    func(data)
    data.children && treeForeach(data.children, func) // 遍历子树
  })
}
```

测试：
输出：
5. 深度优先循环实现
先序遍历与广度优先循环实现类似，要维护一个队列，不同的是子节点不追加到队列最后，而是加到队列最前面：
```
function treeForeach (tree, func) {
  tree.forEach(data => {
    data.children && treeForeach(data.children, func) // 遍历子树
    func(data)
  })
}
treeForeach(tree, node => { console.log(node.title) })1
// 先序遍历1
```
> 节点12
> 节点1-13
> 节点1-24
> 节点25
> 节点2-16
// 后序遍历8
> 节点1-19
> 节点1-210
> 节点111
> 节点2-112
> 节点213
```
function treeForeach (tree, func) {
  let node, list = [...tree]
  while (node = list.shift()) {
    func(node)
    node.children && list.unshift(...node.children)
  }
```

后序遍历就略微复杂一点，我们需要不断将子树扩展到根节点前面去，（艰难地）执行列表遍历，遍历到某个节点如果它没有子节点或者它的子节点已经扩展到它前面了，则执行访问操作，否则扩展子节点到当前节点前面：
二、列表和树结构相互转换
1. 列表转为树
列表结构通常是在节点信息中给定了父级元素的id，然后通过这个依赖关系将列表转换为树形结构，
列表结构是类似于：
```
}7
function treeForeach (tree, func) {1
  let node, list = [...tree], i =  02
  while (node = list[i]) {
    let childCount = node.children ? node.children.length :
    if (!childCount || node.children[childCount - 1] === list[i - 1]) {
      func(node)
      i++
    } else {
      list.splice(i, 0, ...node.children)
    }
  }
}
let list = [
  {
    id: '1',
    title: ' 节点 1',
    parentId: '',
  },
  {
    id: '1-1',
    title: ' 节点 1-1',
    parentId: '1'
  },
  {
    id: '1-2',
    title: ' 节点 1-2',
```
   parentId: '1'

列表结构转为树结构，就是把所有非根节点放到对应父节点的chilren数组中，然后把根节点提取出
来：
这里首先通过info建立了id=>node的映射，因为对象取值的时间复杂度是O(1)，这样在接下来的找寻
父元素就不需要再去遍历一次list了，因为遍历寻找父元素时间复杂度是O(n)，并且是在循环中遍历，
则总体时间复杂度会变成O(n^2)，而上述实现的总体复杂度是O(n)。
2. 树结构转列表结构
有了遍历树结构的经验，树结构转为列表结构就很简单了。不过有时候，我们希望转出来的列表按照目录展示一样的顺序放到一个列表里的，并且包含层级信息。使用先序遍历将树结构转为列表结构是合适的，直接上代码:
```
  },16
  {17
    id: '2',18
    title: ' 节点 2',19
    parentId: ''20
  },21
  {22
    id: '2-1',23
    title: ' 节点 2-1',24
```
   parentId: '2'25
```
  }26
]27
function listToTree (list) {1
  let info = list.reduce((map, node) => (map[node.id] = node, node.children = [], map),
 {})
  return list.filter(node => {
    info[node.parentId] && info[node.parentId].children.push(node)
    return !node.parentId
  })
}
// 递归实现1
function treeToList (tree, result = [], level = 0) {2
  tree.forEach(node => {3
    result.push(node)4
    node.level = level + 15
    node.children && treeToList(node.children, result, level + 1)6
  })7
```

三、树结构筛选
树结构过滤即保留某些符合条件的节点，剪裁掉其它节点。一个节点是否保留在过滤后的树结构中，
取决于它以及后代节点中是否有符合条件的节点。可以传入一个函数描述符合条件的节点:
四、树结构查找
1. 查找节点
查找节点其实就是一个遍历的过程，遍历到满足条件的节点则返回，遍历完成未找到则返回null。类似数组的find方法，传入一个函数用于判断节点是否符合条件，代码如下：
```
  return result8
}9
// 循环实现
function treeToList (tree) {
  let node, result = tree.map(node => (node.level = 1, node))
  for (let i = 0; i < result.length; i++) {
    if (!result[i].children) continue
    let list = result[i].children.map(node => (node.level = result[i].level + 1, node))
    result.splice(i+1, 0, ...list)
  }
  return result
}
function treeFilter (tree, func) {
  // 使用 map 复制一下节点，避免修改到原树
  return tree.map(node => ({ ...node })).filter(node => {
    node.children = node.children && treeFilter(node.children, func)
    return func(node) || (node.children && node.children.length)
  })
}
function treeFind (tree, func) {
  for (const data of tree) {
    if (func(data)) return data
    if (data.children) {
      const res = treeFind(data.children, func)
      if (res) return res
```

2. 查找节点路径
略微复杂一点，因为不知道符合条件的节点在哪个子树，要用到回溯法的思想。查找路径要使用先序遍历，维护一个队列存储路径上每个节点的id，假设节点就在当前分支，如果当前分支查不到，则回
溯。
用上面的树结构测试：
输出：
3. 查找多条节点路径
思路与查找节点路径相似，不过代码却更加简单：
```
    }7
  }8
  return null9
}10
function treeFindPath (tree, func, path = []) {
  if (!tree) return []
  for (const data of tree) {
    path.push(data.id)
    if (func(data)) return path
    if (data.children) {
      const findChildren = treeFindPath(data.children, func, path)
      if (findChildren.length) return findChildren
    }
    path.pop()
  }
  return []
}
let result = treeFindPath(tree, node => node.id === '2-1')
console.log(result)
["2","2-1"]
function treeFindPath (tree, func, path = [], result = []) {
  for (const data of tree) {
    path.push(data.id)
```

五、结语
对于树结构的操作，其实递归是最基础，也是最容易理解的。递归本身就是循环的思想，所以可以用循环来改写递归
```
    func(data) && result.push([...path])
    data.children && treeFindPath(data.children, func, path, result)
    path.pop()
  }
  return result
}
```
遍历树节点
```
export const foreachTree = (data, callback, childrenName = 'children') => {
 for (let i = 0; i < data.length; i++) {
    callback(data[i])
     if (data[i][childrenName] && data[i][childrenName].length > 0) {
          foreachTree(data[i][childrenName], callback, childrenName)
      }
  }}
```
  示例：
```
  const treeData = [{  id: 1,  label: ' 一级  1',  children: [{    id: 4,    label: ' 二
级  1-1',    children: [{      id: 9,      label: ' 三级  1-1-
1'    }, {      id: 10,      label: ' 三级  1-1-2'    }]  }] }, {  id: 2,  label: ' 一
级  2',  children: [{    id: 5,    label: ' 二级  2-1'  }, {    id: 6,    label: ' 二级  2-
2'  }]  }, {    id: 3,    label: ' 一级  3',    children: [{      id: 7,      label: ' 二
级  3-1'    }, {      id: 8,      label: ' 二级  3-
2'    }]}],let resultforeachTree(data, (item) => {  if (item.id === 9) {    result = it
em  }})console.log('result', result)  // {id: 9,label: " 三级  1-1-1"}
```

<a id="sec-4"></a>
## number

> 来源：有道云笔记
> 原路径：`js/number.md`

数字四舍五入，保留n位小数
```
export function round(number, n) {
    n = n ? parseInt(n) :
    if (n <= 0) return Math.round(number)
    number = Math.round(number * Math.pow(10, n)) / Math.pow(10, n)
    return number
}
```
数字每千位加逗号
```
export function toThousands(num) {
  return num && num.()
    .replace(/\d+/, function(s){
         return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
     })
}
```
随机数
```
export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
// 判断是否是数字。
export const isNumber = (v)=>  /^[0-9]+.?[0-9]*/.test(v)
 // 判断是否有小数点
export const decimalPoint = (v)=>  /\D/g.test(v)
// 中文数字转阿拉伯数字
export const chineseToNumber = (chnStr) =>{

    var chnNameValue = {8
      十: { value: 10, secUnit: false },9
      百: { value: 100, secUnit: false },10
      千: { value: 1000, secUnit: false },11
      万: { value: 10000, secUnit: true },12
      亿: { value: 100000000, secUnit: true },13
    }14
    var chnNumChar = {15
```
      零: 0,16
      一: 1,17
      二: 2,18
      三: 3,19
      四: 4,20
      五: 5,21
      六: 6,22
      七: 7,23
      八: 8,24
      九: 9,25
```
    }26
    var rtn = 028
    var section = 029
    var number = 030
    var secUnit = false31
    var str = chnStr.split('')32
    for (var i = 0; i < str.length; i++) {34
      var num = chnNumChar[str[i]]35
      if (typeof num !== 'undefined') {36
        number = num37
        if (i === str.length - 1) {38
          section += number39
        }40
      } else {41
        var unit = chnNameValue[str[i]].value42
        secUnit = chnNameValue[str[i]].secUnit43
        if (secUnit) {44
          section = (section + number) * unit45
          rtn += section46
          section = 047

        } else {48
          section += number * unit49
        }50
        number = 051
      }52
    }53
    return rtn + section54
  }55
  /**57
 * @description: 阿拉伯数字转汉字58
 * @return {*}    11  => 十一59
 */60
export const toChinese = (num) => {61
```
  num = Math.floor(num)62
```
  var chinese = ''63
  var digits = Math.floor(Math.log10(num)) + 164
  var digit = [' 零 ', ' 一 ', ' 二 ', ' 三 ', ' 四 ', ' 五 ', ' 六 ', ' 七 ', ' 八 ', ' 九 ']65
  var times = ['', ' 十 ', ' 百 ', ' 千 ', ' 万 ']66
  if (digits >= 9) {67
    var quotient = Math.floor(num / Math.pow(10, 8))68
    var remainder = num % Math.pow(10, 8)69
    var remainderDigits = Math.floor(Math.log10(remainder)) + 170
    return toChinese(quotient) + ' 亿 ' + (remainderDigits < 8 ? ' 零 ' : '') + (remainder
```
> 0 ? toChinese(remainder) : '')
```
  }72
  //10000 000073
  if (digits == 1) return digit[num]74
  if (digits == 2) {75
    var quotient = Math.floor(num / 10)76
    var remainder = num % 1077
    if (quotient > 1) {78
      chinese = digit[quotient]79
    }80
    chinese = chinese + times[1]81
    if (remainder > 0) {82
      chinese = chinese + digit[remainder]83
    }84
    return chinese85
  }86

  if (digits > 5) {87
    var quotient = num / Math.pow(10, 4)88
    var remainder = num % Math.pow(10, 4)89
    var remainderDigits = Math.floor(Math.log10(remainder)) + 190
    return toChinese(quotient) + ' 万 ' + (remainderDigits < 4 ? ' 零 ' : '') + (remainder
```
> 0 ? toChinese(remainder) : '')
```
  }92
  for (var index = digits; index >= 1; index--) {93
    var number = Math.floor((num / Math.pow(10, index - 1)) % 10)94
    if (number > 0) {95
      chinese = chinese + digit[number] + times[index - 1]96
    } else {97
      if (index > 1) {98
        var nextNumber = Math.floor((num / Math.pow(10, index - 2)) % 10)99
        if (nextNumber > 0 && index > 1) {100
          chinese = chinese + digit[number]101
        }102
      }103
    }104
  }105
  return chinese106
}107
/**108
 * @description:汉字数字转阿拉伯数字109
 * @return {*}  ' 十一 '  => 11110
 * @return {*}  ' 一十一 '  => 11111
 */112
export const numberDigit = (chinese_number) => {113
  var map = {114
```
    零: 0,115
    一: 1,117
    壹: 1,118
    二: 2,120
    贰: 2,121
    两: 2,122
    三: 3,124
    叁: 3,125

    四: 4,127
    肆: 4,128
    五: 5,130
    伍: 5,131
    六: 6,133
    陆: 6,134
    七: 7,136
    柒: 7,137
    八: 8,139
    捌: 8,140
    九: 9,142
    玖: 9,143
    十: 10,145
    拾: 10,146
    百: 100,148
    佰: 100,149
    千: 1000,151
    仟: 1000,152
    万: 10000,154
    十万: 100000,155
    百万: 1000000,156
    千万: 10000000,157
    亿: 100000000,158
```
  }159
  var len = chinese_number.length160
  if (len == 0) return -1161
  if (len == 1) return map[chinese_number] <= 10 ? map[chinese_number] : -1162
  var summary = 0163
  if (map[chinese_number[0]] == 10) {164
    chinese_number = ' 一 ' + chinese_number165

    len++166
  }167
  if (len >= 3 && map[chinese_number[len - 1]] < 10) {168
    var last_second_num = map[chinese_number[len - 2]]169
    if (last_second_num == 100 || last_second_num == 1000 || last_second_num == 10000
```
|| last_second_num == 100000000) {
```
      for (var key in map) {171
        if (map[key] == last_second_num / 10) {172
          chinese_number += key173
          len += key.length174
          break175
        }176
      }177
    }178
  }179
  if (chinese_number.match(/亿/g) && chinese_number.match(/亿/g).length > 1) return -1180
  var splited = chinese_number.split(' 亿 ')181
  if (splited.length == 2) {182
    var rest = splited[1] == '' ? 0 : numberDigit(splited[1])183
    return summary + numberDigit(splited[0]) * 100000000 + rest184
  }185
```
  splited = chinese_number.split(' 万 ')186
```
  if (splited.length == 2) {187
    var rest = splited[1] == '' ? 0 : numberDigit(splited[1])188
    return summary + numberDigit(splited[0]) * 10000 + rest189
  }190
  var i = 0191
  while (i < len) {192
    var first_char_num = map[chinese_number[i]]193
    var second_char_num = map[chinese_number[i + 1]]194
    if (second_char_num > 9) summary += first_char_num * second_char_num195
    i++196
    if (i == len) summary += first_char_num <= 9 ? first_char_num : 0197
  }198
  return summary199
}  200
//  阿拉伯数字转中文数字    11 = 》   一十一204

export const toChinesNum = (num) =>{205
  let changeNum = [206
```
    ' 零 ',207
    ' 一 ',208
    ' 二 ',209
    ' 三 ',210
    ' 四 ',211
    ' 五 ',212
    ' 六 ',213
    ' 七 ',214
    ' 八 ',215
    ' 九 ',216
```
  ]217
  let unit = ['', ' 十 ', ' 百 ', ' 千 ', ' 万 ']218
```
  num = parseInt(num)219
```
  let getWan = (temp) => {220
    let strArr = temp.().split('').reverse()221
    let newNum = ''222
    for (var i = 0; i < strArr.length; i++) {223
      newNum =224
        (i == 0 && strArr[i] == 0225
          ? ''226
          : i > 0 && strArr[i] == 0 && strArr[i - 1] == 0227
          ? ''228
          : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i])) +229
        newNum230
    }231
    return newNum232
  }233
  let overWan = Math.floor(num / 10000)234
  let noWan = num % 10000235
  if (noWan.().length < 4) {236
    noWan = '0' + noWan237
  }238
  return overWan ? getWan(overWan) + ' 万 ' + getWan(noWan) : getWan(num)239
}240
```

金额格式化
```
{number} number：要格式化的数字
{number} decimals ：保留几位小数
{string} dec_point ：小数点符号
{string} thousands_sep ：千分位符号
export const moneyFormat = (number, decimals, dec_point, thousands_sep) => {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
  const sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep
  const dec = typeof dec_point === 'undefined' ? '.' : dec_point
  let s = ''
  const toFixedFix = function(n, prec) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
```
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
```
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
moneyFormat(10000000) // 10,000,000.0
moneyFormat(10000000, 3, '.', '-') // 10-000-000.00
```

<a id="sec-5"></a>
## replace()

> 来源：有道云笔记
> 原路径：`js/replace().md`

```
replace() 方法里使用正则表达式 var a = "hello word word word word"; var b = a.replace(/\s+/g,
"哈"); console.log(b); // hello哈word哈word哈word哈word 此种方法能替换所有空格，但是两个连
续的的空格则只显示一个替换的字符串。 3、在 replace() 方法里使用 new RegExp() 方法 var a =
"hello word word word word"; var b = a.replace(new RegExp(" ", "gm"), "哈"); console.log(b);
// hello哈哈word哈word哈哈word哈哈word 此方法能替换所有包括连续的空格的字符。 注意：js没
有 replaceAll() 方法。 4、对中文和英文特殊字符以及空格的提示信息 // 中文和英文所有特殊字符
var pattern1 = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+=｛｝|
《》？：“”【】、；‘’，。、]/im; // 中文特殊字符 var pattern2 = /[·！￥……（）——《》？：
“”【】、；‘’，。、｛｝]/im; if (/[\u4E00-\u9FA5]/g.test(key_val)) {
$("#metaWarn").html("Key不能输入中文。"); }else if (pattern1.test(key_val)) {
$("#metaWarn").html("Key不能输入特殊字符。"); }else if (pattern2.test(value_val)) {
$("#metaWarn").html("Value不能输入中文特殊字符。"); } else if (/^\s+|\s+$/g.test(value_val)) {
$("#metaWarn").html("Value不能在开头或结尾输入空格。"); } else if (/\s/g.test(key_val)) {
$("#metaWarn").html("Key不能输入空格。");
```

<a id="sec-6"></a>
## 几个JS小技巧

> 来源：有道云笔记
> 原路径：`js/几个JS小技巧.md`

几个js小技巧
```
// 数值
typeof 37 === 'number';
// 字符串
typeof '' === 'string';
// 布尔值
typeof true === 'boolean';
// Symbols
typeof Symbol() === 'symbol';
// Undefined
typeof undefined === 'undefined';
// 对象
typeof {a: 1} === 'object';
typeof [1, 2, 4] === 'object';
// 下面的例子令人迷惑，非常危险，没有用处。避免使用它们。
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';
// 函数
typeof function() {} === 'function';
```
2.instanceof 操作符  和  对象的 constructor 属性这个操作符和 JavaScript 中面向对象有点关系，了解这个就先得了解 JavaScript 中的面向对象。因为这个操作符是检测对象的原型链是否指向构造函数的 prototype 对象的。
　第2种和第3种方法貌似无懈可击,但是实际上还是有些漏洞的，当你在多个 frame 中来回穿梭的时候，这两种方法就亚历山大了。由于每个 iframe 都有一套自己的执行环境，跨 frame 实例化的对象彼此是不共享原型链的，因此导致上述检测代码失效
```
　　var iframe = document.createElement('iframe'); // 创建 iframe30
document.body.appendChild(iframe); // 添加到 body 中31
xArray = window.frames[window.frames.length-1].Array;32
var arr = new xArray(1,2,3); // 声明数组 [1,2,3]33

alert(arr instanceof Array); // false34
alert(arr.constructor === Array); // false35
```
js 中判断一个变量是数组还是对象38
```
  Object.prototype..call({}) // [object Object]39
 Object.prototype..call([]) // [object Array]40
Array.isArray([]) // true41
Array.isArray({}) // false42
if (!Array.isArray) {43
  Array.isArray = function(arg) {44
    return Object.prototype..call(arg) === '[object Array]';45
  };46
}47
var arr = [1,2,3];48
var arr2 = [{ name : 'jack', age : 22 }];49
function isArrayFn(value){50
    // 首先判断浏览器是否支持 Array.isArray 这个方法51
    if (typeof Array.isArray === "function") {52
        return Array.isArray(value);53
    }else{54
        return Object.prototype..call(value) === "[object Array]";55
        // return obj.__proto__ === Array.prototype;56
    }57
}58
console.log(isArrayFn(arr));  // true59
console.log(isArrayFn(arr2));  // true       60
```
Array.isArray()这个方法的执行速度比原型链的方式快了近一倍61
2.数字转字符串/字符串转数字63
新手64
```
let num = 15; 65
let s = num.(); // number to string66
let n = Number(s); // string to number67
```
老手68
```
let num = 15;69
let s = num + ""; // 数字转字符串70
let n = +s; // 字符串转数字71
```
3.填充数组72
新手73

```
for(let i=0; i < arraySize; i++){74
  filledArray[i] {'hello' : 'goodbye'};75
}76
```
老手78
let filledArray = new Array(arraysize).fill(null).map(()=> ({'hello' : 'goodbye'}));79
4.对象的动态属性80
新手81
```
let dynamic = "value"; 82
let user = {83
     id: 1,84
};85
user[dynamic] = "other value"; 86
```
老手87
```
let dynamic = "value"; 88
let user = {89
    id: 1,90
    [dynamic] : "other value"91
};92
```
5.删除重复项93
新手94
```
let array = [100, 23, 23, 23, 23, 67, 45]; 95
let outputArray = [];96
let flag = false; 97
for (j = 0; < array.length; j++) {98
   for (k = 0; k < outputArray.length; k++) {99
      if (array[j] == outputArray[k]) {100
         flag = true;101
       }102
    }103
    if (flag == false) {104
      outputArray.push(array[j]);105
     }106
     flag = false;107
}108
// tArray = [100, 23, 67, 45]109
```
老手110
```
let array = [100, 23, 23, 23, 23, 67, 45]; 111
let outputArray = Array.from(new Set(array))112
```

6. 数组到对象113
新手114
```
let arr = ["value1", "value2", "value3"]; 115
let arrObject = {};116
for (let i = 0; i < arr.length; ++i) {117
   if (arr[i] !== undefined) {118
     arrObject[i] = arr[i];119
   }120
}121
```
老手122
```
let arr = ["value1", "value2", "value3"]; 123
let arrObject = {...arr}; 124
```
7.对象到数组125
新手126
let number = {127
  one: 1, 128
  two: 2,129
```
};130
let keys = []; 131
for (let numbers in numbers) {132
  if (number.(number)) {133
     keys.push(number);134
    }135
}136
// key = [ 'one', 'two' ]137
```
老手138
let number = {139
  one: 1, 140
  two: 2,141
```
};142
let key = Object.keys(numbers); // key = [ 'one', 'two' ]143
let value = Object.values(numbers);  // value = [ 1, 2 ]144
let entry = Object.entries(numbers); // entry = [['one' : 1], ['two' : 2]]145
```
8. 短路条件146
新手147
```
if (docs) {148
    goToDocs();149
}150
```
老手151
docs && goToDocs()152

9. 使用^检查数字是否相等153
```
if(a!=123) // before // 一般开发者154
if(a^123) // after // B 格比较高的156
```
10.对象遍历157
const age = {158
   Rahul: 20,  159
   max: 16160
```
};161
// 方案 1 ：先得  key 在遍历  key163
const keys = Object.keys(age); 164
keys.forEach(key => age[key]++);165
console.log(age); // { Rahul: 21, max: 16 }167
// 方案 2 - `for...in` 循环169
for(let key in age){170
   age[key]++;171
}172
console.log(age); // { Rahul: 22, max: 18 }174
```
11. 获取对象的所有键175
cosnt obj = {176
  name: " 前端小智 ", 177
  age: 16, 178
  address: " 厦门 ", 179
  profession: " 前端开发 ", 180
```
}; 181
console.log(Object.keys(obj)); // name, age, address, profession183
```
12.检查值是否为数组184
```
const arr = [1, 2, 3]; 185
console.log(typeof arr); // object186
console.log(Array.isArray(arr)); // true187
```
13.初始化大小为 n 的数组并填充默认值188
```
const size = 5;189
const defaultValue = 0;190
const arr = Array(size).fill(defaultValue);191

console.log(arr); // [0, 0, 0, 0, 0]192
```
14. 真值和虚值193
虚值：false,0, "",null,undefined和NaN。194
真值："Values",0",{},[]。195
15. 三等号和双等号的区别196
```
// 双等号  - 将两个操作数转换为相同类型 , 再比较197
console.log(0 == 'o'); // true198
// 三等号  - 不转换为相同类型200
console.log(0 === '0'); // false201
```
16. 接收参数更好的方式202
```
function downloadData(url, resourceId, searchTest, pageNo, limit) {}203
downloadData(...); // need to remember the order205
```
更简单的方法206
```
function downloadData(207
{ url, resourceId, searchTest, pageNo, limit } = {}208
) {}209
```
downloadData(211
```
  { resourceId: 2, url: "/posts", searchText: "WebDev" }212
);213
```
17.null vs undefined214
```
null =>它是一个值，而undefined不是。215
const fn = (x = 'default value') => console.log(x);216
fn(undefined); // default value218
fn(); // default value219
fn(null); // null221
```
传递null时，不采用默认值，而  undefined或未传递任何内容时，将采用默认值。222
```
      // 1 必备的函数参数    强制参数
        // 扩展默认参数技术，我们可以将参数标记为必需。首先定义一个函数，用错误消息抛出错误，
        var inRequired = ()=>{
            return  new Error('This is a mandatory parameter')
        }
        var fun = (name=inRequired(),msg="err")=>{

            return `${name}${msg}`7
        }8
        console.log(fun())9
        // 2  ||  与  ？？12
        var obj = {name:'userName',val:0}13
        console.log(`userName 的年龄是：${obj.age??35}`)//3514
        console.log(`userName 的年龄是：${obj.age||35}`)//3515
        console.log(`userName 的年龄是：${obj.val||35}`)//3516
        console.log(`userName 的年龄是：${obj.val??35}`)//017
        // 如果人的年龄是 0 ，被计算为 35  （ 0||35 ） =35 ，这属于意料之外的运算行为18
        // 这时可以输入  nullisshcoalescing operator(??) 。它也是一个运算符，19
        // 当左侧操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。20
        // 3 获取随机项    23
        // Mon.(Monday) Tue.(Tuesday) Wed.(Wednesday) Thu.(Thursday) Fri.(Friday) Sat.
```
(Saturday) Sun.(Sunday)Mon 星期一  Tue 星期二  Wed 星期三  Thu 星期四  Fri 星期五  Sat 星期六  Sun 星期
天
```
        var planets = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]25
        var randomPlanets = planets[Math.floor(Math.random()*planets.length)]26
        console.log(planets,randomPlanets)27
        // 随机排列28
        var my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];29
        console.log(my_list.sort(()=> Math.random() - 0.5))30
        // 4 逗号运算符32
        var count = 1,val=(23,32)33
        var ret = (count++,count)34
        console.log(count,ret,val)35
        // 5 合并对象   浅合并37
        var job={title:' 早间新闻 ',date:'2020-11-22 08 ： 00',user:' 董卿 '}38
        var add={title:' 午间新闻 ',date:'2020-11-22 12 ： 00'}39
        var merged1 = {...job,...obj}40
        var merged2 = {...job,...add}41
        var merged3 = Object.assign({},job,obj)42
        var merged4 = Object.assign({},job,add)43
        console.log(merged1,merged2,merged3,merged4)44
```

1、全部替换
```
        // 6  交换变量46
        var apple = "🍎 ";47
        var banana = "🍌";48
        [apple,banana] = [banana,apple];49
        console.log(apple,banana)50
        // 7 53
        var project = new URLSearchParams(location.search).get('project')54
        var arr = new URLSearchParams(location.search).get('array')55
        console.log(project,arr,location)56
```
我们知道 string.replace() 函数仅替换第一次出现的情况。
你可以通过在正则表达式的末尾添加 /g 来替换所有出现的内容。
```
var example = "potato potato";console.log(example.replace(/pot/, "tom")); // "tomato
potato"console.log(example.replace(/pot/g, "tom")); // "tomato tomato"
```
2、提取唯一值
通过使用 Set 对象和展开运算符，我们可以创建一个具有唯一值的新数组。
```
var entries = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 4, 2, 1]var unique_entries = [...new
Set(entries)];console.log(unique_entries);// [1, 2, 3, 4, 5, 6, 7, 8]
```
3、 将数字转换为字符串
我们只需要使用带空引号的串联运算符。
```
var converted_number = 5 + "";console.log(converted_number);// 5console.log(typeof
converted_number); // string
```

4、将字符串转换为数字
我们需要的只是 + 运算符。
请注意它仅适用于“字符串数字”。
```
the_string = "123";console.log(+the_string);// 1231
the_string = "hello";console.log(+the_string);// NaN2
```
5、随机排列数组中的元素
```
var my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];1
console.log(my_list.sort(function() {    return Math.random() - 0.5})); // [4, 8, 2,
9, 1, 3, 6, 5, 7]
```
6、 展平二维数组
只需使用展开运算符。
```
var entries = [1, [2, 5], [6, 7], 9];var flat_entries = [].concat(...entries); // [1,
2, 5, 6, 7, 9]
```
7、 缩短条件语句
让我们来看这个例子：
if (available) {    addToCart();}1
通过简单地使用变量和函数来缩短它：
available && addToCart()1
8、动态属性名
我一直以为必须先声明一个对象，然后才能分配动态属性。

```
const dynamic = 'flavour';var item = {    name: 'Coke',    [dynamic]:
'Cherry'}console.log(item); // { name: "Coke", flavour: "Cherry" }
```
9、使用 length 调整/清空数组我们基本上覆盖了数组的 length 。
如果我们要调整数组的大小：
```
var entries = [1, 2, 3, 4, 5, 6, 7];  console.log(entries.length); // 71
   entries.length = 4;
   console.log(entries.length); //
   console.log(entries); // [1, 2, 3, 4]
```
如果我们要清空数组：
```
var entries = [1, 2, 3, 4, 5, 6, 7]; console.log(entries.length); // 7  entries.length
= 0;   console.log(entries.length); // 0 console.log(entries); // []
```

1.如何隐藏所有指定的元素
```
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'))1

// 事例 : 隐藏页面上所有 `<img>` 元素 ?1

// 事例 移除 p 具有类`special`的 special 类
```
hide(document.querySelectorAll('img'))1
2.如何检查元素是否具有指定的类？
页面DOM里的每个节点上都有一个classList对象，程序员可以使用里面的方法新增、删除、修改节点上的CSS类。使用classList，程序员还可以用它来判断某个节点是否被赋予了某个CSS类。
```
const hasClass = (el, className) => el.classList.contains(className)1

// 事例
hasClass(document.querySelector('p.special'), 'special') // true1
```
3.如何切换一个元素的类?
const toggleClass = (el, className) => el.classList.toggle(className)1

toggleClass(document.querySelector('p.special'), 'special')1

4.如何获取当前页面的滚动位置？
```
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

getScrollPosition(); // {x: 0, y: 200}6
```

5.如何平滑滚动到页面顶部
```
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

// 事例
scrollToTop()
```
window.requestAnimationFrame() 告诉浏览器 —— 你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行。
requestAnimationFrame：优势：由系统决定回调函数的执行时机。 60Hz 的刷新频率，那么每次刷新的间隔中会执行一次回调函数，不会引起丢帧，不会卡顿。
6.如何检查父元素是否包含子元素？
```
const elementContains = (parent, child) => parent !== child && parent.contains(child);
// 事例
elementContains(document.querySelector('head'), document.querySelector('title'));
// true
elementContains(document.querySelector('body'), document.querySelector('body'));
// false
```
7.如何检查指定的元素在视口中是否可见？
```
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;

};21
// 事例23
elementIsVisibleInViewport(el); // 需要左右可见24
elementIsVisibleInViewport(el, true); // 需要全屏 ( 上下左右 ) 可以见25
```
8.如何获取元素中的所有图像？27
```
const getImages = (el, includeDuplicates = false) => {30
  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src')
);
  return includeDuplicates ? images : [...new Set(images)];32
};33
// 事例： includeDuplicates 为  true 表示需要排除重复元素35
getImages(document, true); // ['image1.jpg', 'image2.png', 'image1.png', '...']36
getImages(document, false); // ['image1.jpg', 'image2.png', '...']37
```
9.如何确定设备是移动设备还是台式机/笔记本电脑？38
const detectDeviceType = () =>39
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userA
gent)
```
    ? 'Mobile'41
    : 'Desktop';42
// 事例44
detectDeviceType(); // "Mobile" or "Desktop"45
```
10.How to get the current URL?46
```
const currentURL = () => window.location.href47
// 事例49
```
currentURL() // 'https://google.com'50
11.如何创建一个包含当前URL参数的对象？51
```
const getURLParameters = url =>52
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(53
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),54
    {}55
  );56
// 事例58
```

getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}59
getURLParameters('google.com'); // {}60
12.如何将一组表单元素转化为对象？61
```
const formToObject = form =>62
  Array.from(new FormData(form)).reduce(63
    (acc, [key, value]) => ({64
      ...acc,65
      [key]: value66
    }),67
    {}68
  );69
// 事例71
formToObject(document.querySelector('#form')); 72
// { email: 'test@email.com', name: 'Test Name' }73
```
13.如何从对象检索给定选择器指示的一组属性？74
```
const get = (from, ...selectors) =>75
  [...selectors].map(s =>76
    s77
      .replace(/\[([^\[\]]*)\]/g, '.$1.')78
      .split('.')79
      .filter(t => t !== '')80
      .reduce((prev, cur) => prev && prev[cur], from)81
  );82
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }]
 };
// Example85
get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); 86
// ['val to select', 1, 'test']87
```
14.如何在等待指定时间后调用提供的函数？88
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);89
delay(90
```
  function(text) {91
    console.log(text);92
  },93
```
  1000,94
  'later'95
```
); 96

// 1 秒后打印  'later'98
```
15.如何在给定元素上触发特定事件且能选择地传递自定义数据？99
```
const triggerEvent = (el, eventType, detail) =>100
  el.dispatchEvent(new CustomEvent(eventType, { detail }));101
// 事例103
triggerEvent(document.getElementById('myId'), 'click');104
triggerEvent(document.getElementById('myId'), 'click', { username: 'bob' });105
```
自定义事件的函数有  Event、CustomEvent 和  dispatchEvent106
```
// 向  window 派发一个 resize 内置事件107
window.dispatchEvent(new Event('resize'))108
// 直接自定义事件，使用  Event 构造函数：111
var event = new Event('build');112
var elem = document.querySelector('#id')113
// 监听事件114
elem.addEventListener('build', function (e) { ... }, false);115
// 触发事件 .116
elem.dispatchEvent(event);117
```
CustomEvent 可以创建一个更高度自定义事件，还可以附带一些数据，具体用法如下：118
var myEvent = new CustomEvent(eventname, options);119
其中  options 可以是：120
```
{121
  detail: {122
    ...123
  },124
  bubbles: true,    // 是否冒泡125
  cancelable: false // 是否取消默认事件126
}127
```
其中  detail 可以存放一些初始化的信息，可以在触发的时候调用。其他属性就是定义该事件是否具有冒泡等等功能。
内置的事件会由浏览器根据某些操作进行触发，自定义的事件就需要人工触发。129
dispatchEvent 函数就是用来触发某个事件：130
element.dispatchEvent(customEvent);131
上面代码表示，在  element 上面触发  customEvent 这个事件。132
```
// add an appropriate event listener133
obj.addEventListener("cat", function(e) { process(e.detail) });134
// create and dispatch the event136

var event = new CustomEvent("cat", {"detail":{"hazcheeseburger":true}});137
obj.dispatchEvent(event);138
```
使用自定义事件需要注意兼容性问题，而使用  jQuery 就简单多了：139
```
// 绑定自定义事件141
$(element).on('myCustomEvent', function(){});142
// 触发事件144
$(element).trigger('myCustomEvent');145
// 此外，你还可以在触发自定义事件时传递更多参数信息：146
$( "p" ).on( "myCustomEvent", function( event, myName ) {148
  $( this ).text( myName + ", hi there!" );149
});150
$( "button" ).click(function () {151
  $( "p" ).trigger( "myCustomEvent", [ "John" ] );152
});153
```
16.如何从元素中移除事件监听器?154
```
const off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);155
const fn = () => console.log('!');157
document.body.addEventListener('click', fn);158
off(document.body, 'click', fn); 159
```
17.如何获得给定毫秒数的可读格式？160
```
const formatDuration = ms => {161
  if (ms < 0) ms = -ms;162
  const time = {163
    day: Math.floor(ms / 86400000),164
    hour: Math.floor(ms / 3600000) % 24,165
    minute: Math.floor(ms / 60000) % 60,166
    second: Math.floor(ms / 1000) % 60,167
    millisecond: Math.floor(ms) % 1000168
  };169
  return Object.entries(time)170
    .filter(val => val[1] !== 0)171
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)172
    .join(', ');173
};174
// 事例176

formatDuration(1001); // '1 second, 1 millisecond'177
formatDuration(34325055574); 178
// '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'179
```
18.如何获得两个日期之间的差异（以天为单位）？180
```
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>181
  (dateFinal - dateInitial) / (1000 * 3600 * 24);182
// 事例184
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9185
```
¨K45K ¨G21G186
20.如何对传递的URL发出POST请求？187
```
const httpPost = (url, data, callback, err = console.error) => {188
  const request = new XMLHttpRequest();189
  request.open('POST', url, true);190
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');191
  request.onload = () => callback(request.responseText);192
  request.onerror = () => err(request);193
  request.send(data);194
};195
const newPost = {197
```
  userId: 1,198
  id: 1337,199
  title: 'Foo',200
  body: 'bar bar bar'201
```
};202
const data = JSON.stringify(newPost);203
```
httpPost(204
  'https://jsonplaceholder.typicode.com/posts',205
  data,206
```
  console.log207
); 208
// {"userId": 1, "id": 1337, "title": "Foo", "body": "bar bar bar"}210
```
21.如何为指定选择器创建具有指定范围，步长和持续时间的计数器？211
```
const counter = (selector, start, end, step = 1, duration = 2000) => {212
  let current = start,213
    _step = (end - start) * step < 0 ? -step : step,214
    timer = setInterval(() => {215

      current += _step;216
      document.querySelector(selector).innerHTML = current;217
      if (current >= end) document.querySelector(selector).innerHTML = end;218
      if (current >= end) clearInterval(timer);219
    }, Math.abs(Math.floor(duration / (end - start))));220
  return timer;221
};222
// 事例224
counter('#my-id', 1, 1000, 5, 2000); 225
// 让  `id=“my-id”` 的元素创建一个 2 秒计时器226
```
22.如何将字符串复制到剪贴板？227
```
const copyToClipboard = str => {228
  const el = document.createElement('textarea');229
  el.value = str;230
  el.setAttribute('readonly', '');231
  el.style.position = 'absolute';232
  el.style.left = '-9999px';233
  document.body.appendChild(el);234
  const selected =235
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : fa
lse;
  el.select();237
  document.execCommand('copy');238
  document.body.removeChild(el);239
  if (selected) {240
    document.getSelection().removeAllRanges();241
    document.getSelection().addRange(selected);242
  }243
};244
// 事例246
copyToClipboard('Lorem ipsum'); 247
// 'Lorem ipsum' copied to clipboard248
```
23.如何确定页面的浏览器选项卡是否聚焦？249
```
const isBrowserTabFocused = () => !document.hidden;250
// 事例252
isBrowserTabFocused(); // true253
```
24.如何创建目录（如果不存在）？254

```
const fs = require('fs');255
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefine
d);
// 事例258
createDirIfNotExists('test');259
```
检查变量类型263
```
function checkDat(tgt, type_input) {    const type =
Object.prototype..call(tgt).replace(/\object (\w+)\]/, "$1").toLowerCase();    return
type_input ? type === type_input : type;}
console.log(checkDat("test")); // "string"console.log(checkDat(1)); //
"number"console.log(checkDat(true)); // "boolean"console.log(checkDat(], "array")); //
trueconsole.log(checkDat({}, "array")); // false
```
3、检查266

<a id="sec-7"></a>
## 判断相关

> 来源：有道云笔记
> 原路径：`js/判断相关.md`

判断是否支持 Intersection
```
export function isSupportIntersection() {
  return (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
```
  )
}
判断是否IOS
```
export const isIOS = (() => {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
})()
```
判断是否安卓
```
export const isAndroid = (() {
  return /android/.test(navigator.userAgent.toLowerCase())
})()
```
判断微信内置浏览器
```
export function isWeixin() {
  var ua = navigator.userAgent.toLowerCase();
  return (ua.match(/MicroMessenger/i) == "micromessenger")
}
```

判断是否支持webp格式 2种方式
```
export function checkSupportWebp() {
  return (
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 06
```
  )7
```
}8
export function checkSupportWebp2() {9
  var img = new Image();10
  img.onload = img.onerror = (event) => {11
    return event && event.type === "load" ? img.width == 1 : false;12
  };13
  img.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3A
A/vuUAAA=";
}15
```
判断浏览器是否是移动端
```
export function isMobile() {
    const agent = navigator.userAgent;
    const k = ["android", "iphone", "ipod", "ipad", "windows phone", "mqqbrowser"];
    let flag = false;
    // Windows
    if (agent.indexOf("Windows NT") < 0 || (agent.indexOf("Windows NT") >= 0 && agent.i
ndexOf("compatible; MSIE 9.0;") >= 0)) {
        // Mac PC7
        if (agent.indexOf("Windows NT") < 0 && agent.indexOf("Macintosh") < 0) {8
            for (let item of k) {9
                if (agent.indexOf(item) >= 0) {10
                    flag = true;11
                    break;12
                }13
            }14
        }15

    }16
    return flag;17
}18
```
文件类型判断
```
export function checkFileName(fileName, list) {
    if (typeof fileName !== 'string') return;
    let name = fileName.toLowerCase();
    return list.some(i => name.endsWith(`.${i}`) === true)
}
export function isImage(fileName) {
    return checkFileName(fileName, ['png', 'jpeg', 'jpg', 'png', 'bmp'])
}
export function isH5Video(fileName) {
    return checkFileName(fileName, ['mp4', 'webm', 'ogg'])
}
export function isPdf(fileName) {
    return checkFileName(fileName, ['pdf'])
}
export function isWord(fileName) {
    return checkFileName(fileName, ['doc', 'docx'])
}
export function isExcel(fileName) {
    return checkFileName(fileName, ['xlsx', 'xls'])
}
```
数据类型判断
```
export function is(subject, type) {1

  return Object.prototype..call(subject).substr(8, type.length).toLowerCase() === type
}
export function isArray(subject) {
  return Array.isArray(subject)
}
export function isObject(subject) {
  return is(subject, 'object')
}
```
...11
```
export function isNum(subject) {13
  return !isNaN(subject) && is(subject, 'number')14
}15
```

<a id="sec-8"></a>
## 字符串相关

> 来源：有道云笔记
> 原路径：`js/字符串相关.md`

（经 OCR 复核：该 PDF 为空白页，无任何内容。）

<a id="sec-9"></a>
## index

> 来源：有道云笔记
> 原路径：`js/数学/math.js学习/index.md`

Math.js是一个用于JavaScript和Node.js的扩展数学库。它具有支持符号计算的灵活表达式解析器，大量内置函数和常量，并提供了集成的解决方案来处理不同的数据类型，例如数字，大数，复数，分数，单位和矩阵。强大且易于使用。

下载使用
2023/01/05 00:15

math.js 中文网 | math.js广泛运用的JavaScript和Node.js数学库 (mathjs.cn)
广泛运用的JavaScript和Node.js数学库#
npm install mathjs1

<a id="sec-10"></a>
## 无标题笔记

> 来源：有道云笔记
> 原路径：`js/数学/无标题笔记.md`

这里还有一些其他有趣的JavaScript数学库。可以使用将某些导入到math.js中math.import.
js 计算数学

数学库#
扩展 描述

math.js 中文网 | math.js广泛运用的JavaScript
和Node.js数学库 (mathjs.cn)
Math.js是一个用于JavaScript和Node.js的扩展
数学库
 math‐expression‐evaluator 一个非常高效，灵活且出色的Java算术表达式评 估器。
 numbers.js 适用于Node.js和JavaScript的高级数学库
 numeric.js 用Java语言进行数值分析
 decimal.js JavaScript的任意精度的十进制类型。由mathjs 用于BigNumber支持。
 ndarray JavaScript的多维数组
 Algebrite Javascript（咖啡）中的计算机代数系统
 algebra.js 建立，显示和求解代数方程
 Nerdamer Javascript的符号数学
 numeral-js 一个用于格式化和处理数字的javascript库

 https://zhuanlan.zhihu.com/p/103033370

<a id="sec-11"></a>
## 这些 JS 中强大的操作符，总有几个你没听说过

> 来源：有道云笔记
> 原路径：`js/这些 JS 中强大的操作符，总有几个你没听说过.md`

这些 JS 中强大的操作符
JS 里的操作符大家每天都在使用，还有一些 ES2020、ES2021 新加的实用操作符，这些共同构成了
JS 灵活的语法生态。本文除介绍常用的操作符之外，还会介绍 JS 里一些不常用但是很强大的操作符，
下面我们一起来看看吧～
1. 数值分割符 _
ES2021 引入了数值分割符 _，在数值组之间提供分隔，使一个长数值读起来更容易。Chrome 已经提供了对数值分割符的支持，可以在浏览器里试起来。

此外，十进制的小数部分也可以使用数值分割符，二进制、十六进制里也可以使用数值分割符。

2. 逗号运算符 ,
什么，逗号也可以是运算符吗？是的，曾经看到这样一个简单的函数，将数组的第一项和第二项调换，并返回两项之和：
逗号操作符对它的每个操作数求值（从左到右），并返回最后一个操作数的值。

会返回最后一个表达式 expr3 的结果，其他的表达式只会进行求值。
3. 零合并操作符 ??
```
let number = 100_0000_0000_0000 // 0 太多了不用数值分割符眼睛看花了
console.log(number)             // 输出  1000000000000
0x11_1 === 0x111   // true 十六进制
0.11_1 === 0.111   // true 十进制的小数
0b11_1 === 0b111   // true 二进制
function reverse(arr) {
    return [arr[0], arr[1]]=[arr[1], arr[0]], arr[0] + arr[1]
}
const list = [1, 2]
reverse(list)   // 返回  3 ，此时  list 为 [2, 1]
```
expr1, expr2, expr3...1

零合并操作符 ?? 是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回右侧操作数，否则返回左侧操作数。

```
空值合并操作符一般用来为常量提供默认值，保证常量不为 null 或者 undefined，以前一般使用 || 来
做这件事 variable = variable || 'bar'。然而，由于 || 是一个布尔逻辑运算符，左侧的操作数会被强
```
制转换成布尔值用于求值。任何假值（0， ''， NaN， null，undefined）都不会被返回。这导致如果你使用 0、''、NaN 作为有效值，就会出现不可预料的后果。
```
正因为 || 存在这样的问题，而 ?? 的出现就是解决了这些问题，?? 只会在左侧为 undefined、null 时才
返回后者，?? 可以理解为是 || 的完善解决方案。
```
可以在浏览器中执行下面的代码感受一下：

另外在赋值的时候，可以运用赋值运算符的简写 ??=

4. 可选链操作符 ?.
可选链操作符 ?. 允许读取位于连接对象链深处的属性的值，而不必验证链中的每个引用是否有效。?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为 null 或者 undefined 的情况下不会引起错误，该表达式短路返回值是 undefined。
当尝试访问可能不存在的对象属性时，可选链操作符将会使表达式更短、更简明。
expr1 ?? expr21
```
undefined || 'default' // 'default'
null || 'default'      // 'default'
false || 'default'     // 'default'
0 || 'default'         // 'default'
undefined ?? 'default' // 'default'
null ?? 'default'      // 'default'
false ?? 'default'     // 'false'
0 ?? 'default'         //
let a = {b: null, c: 10}1
```
a.b ??= 202
a.c ??= 203
```
console.log(a)     // 输出  { b: 20, c: 10 }4

以前可能会通过 obj && obj.a && obj.a.b 来获取一个深度嵌套的子属性，现在可以直接 obj?.a?.b 即
```
可。
可选链除了可以用在获取对象的属性，还可以用在数组的索引 arr?.[index]，也可以用在函数的判
断 func?.(args)，当尝试调用一个可能不存在的方法时也可以使用可选链。
调用一个对象上可能不存在的方法时（版本原因或者当前用户的设备不支持该功能的场景下），使用可选链可以使得表达式在函数不存在时返回 undefined 而不是直接抛异常。

5. 私有方法/属性
在一个类里面可以给属性前面增加 # 私有标记的方式来标记为私有，除了属性可以被标记为私有外，
getter/setter 也可以标记为私有，方法也可以标为私有。
const obj = {
  a: 'foo',
```
  b: {
    c: 'bar'
  }
}
console.log(obj.b?.c)      // 输出  bar
console.log(obj.d?.c)      // 输出  undefined
console.log(obj.func?.())  // 不报错，输出  undefined
const result = someInterface.customFunc?.()1
class Person {1
  getDesc(){ 2
    return this.#name +' '+ this.#getAge()3
  }4
```
  #getAge(){ return this.#age } // 私有方法6
  get #name(){ return 'foo' } // 私有访问器8
  #age = 23                   // 私有属性9
```
}10
const a = new Person()11
console.log(a.age)       // undefined 直接访问不到12
console.log(a.getDesc()) // foo 2313

6. 位运算符 >> 与 >>>
有符号右移操作符 >> 将第一个操作数向右移动指定的位数，多余的位移到右边被丢弃，高位补其符号
```
位，正数补 0，负数则补 1。因为新的最左位与前一个最左位的值相同，所以符号位（最左位）不会改
变。
正数的好理解，负数怎么理解呢，负数在计算机中存储是按照补码来存储的，补码的计算方式是取反加一，移位时将补码形式右移，最左边补符号位，移完之后再次取反加一求补码获得处理后的原码。

```
一般我们用 >> 来将一个数除 2，相当于先舍弃小数位然后进行一次 Math.floor：

无符号右移操作符 >>>，将符号位作为二进制数据的一部分向右移动，高位始终补 0，对于正整数和算
```
数右移没有区别，对于负数来说由于符号位被补 0，成为正数后就不用再求补码了，所以结果总是非负的。即便右移 0 个比特，结果也是非负的。
可以这样去理解
```
(0b111>>1).(2)   // "11"1
(-0b111>>1).(2)  // "-100" 感觉跟直觉不一样2
-111      // 真值1
1 0000111 // 原码（高位的 0 无所谓，后面加不到）2
1 1111001 // 补码3
1 1111100 // 算数右移4
1 0000100 // 移位后求补码获得原码5
-100      // 移位后的真值6
10 >> 1    // 51
13 >> 1    // 6 相当于2
13.9 >> 1  // 63
-13 >> 1   // -7 相当于
-13.9 >> 1 // -7
(0b111>>>1).(2)   // "11"
(-0b111>>>1).(2)  // "1111111111111111111111111111100"

左移运算符 << 与之类似，左移很简单左边移除最高位，低位补 0：
```
7. 位运算符 & 与 |
位运算符是按位进行运算，& 与、| 或、~ 非、^ 按位异或：
使用位运算符时会抛弃小数位，我们可以利用这个特性来给数字取整，比如给任意数字 & 上二进制的
32 个 1，或者 | 上 0，显而易见后者简单些。
所以我们可以对一个数字 | 0 来取整，负数也同样适用

判断奇偶数除了常见的取余 % 2 之外，也可以使用 & 1，来判断二进制数的最低位是不是 1，这样除了最低位之外都被置 0，取余的结果只剩最低位，是不是很巧妙。负数也同样适用：
```
-111      // 真值
1 000000000000000000000000000111 // 原码
1 111111111111111111111111111001 // 补码
0 111111111111111111111111111100 // 算数右移（由于右移后成为正数，就不要再求补码了）
1073741820      // 移位后的真值
(0b1111111111111111111111111111100<<1).(2)   // "-1000"1
(0b1111111111111111111111111111100<<<1).(2)  // "-1000"2
```
PS：JS 里面没有无符号左移，而且其他语言比如  JAVA 也没有无符号左移。4
&: 1010  |: 1010  ~: 1010  ^: 10101
   0110     0110              01102
   ----     ----     ----     ----
   0010     1110     0101     11
```
1.3 | 0         //
-1.9 | 0        // -
const num = 31
!!(num & 1)                    // true
!!(num % 2)                    // true
```

8. 双位运算符 ~~
可以使用双位操作符来替代正数的 Math.floor( )，替代负数的 Math.ceil( )。双否定位操作符的优势在于它执行相同的操作运行速度更快。

不过要注意，对正数来说 ~~ 运算结果与 Math.floor( ) 运算结果相同，而对于负数来说与 Math.ceil(
) 的运算结果相同：
```
9. 短路运算符 && 与 ||
我们知道逻辑与 && 与逻辑或 || 是短路运算符，短路运算符就是从左到右的运算中前者满足要求，就
```
不再执行后者了。
可以理解为：

```
Math.floor(4.9) === 4      // true1
// 简写为：2
~~4.9 === 4      // true3
~~4.5                // 41
Math.floor(4.5)      // 42
Math.ceil(4.5)       // 53
~~-4.5               // -45
Math.floor(-4.5)     // -56
Math.ceil(-4.5)      // -47
PS：注意  ~~(num/2) 方式和  num >> 1 在值为负数时的差别9
&& 为取假运算，从左到右依次判断，如果遇到一个假值，就返回假值，以后不再执行，否则返回最
```
后一个真值
|| 为取真运算，从左到右依次判断，如果遇到一个真值，就返回真值，以后不再执行，否则返回最
后一个假值
```
let param1 = expr1 && expr21
let param2 = expr1 || expr22
```
运算符 示例 说明

因此可以用来做很多有意思的事，比如给变量赋初值：

如果 variable1 是真值就直接返回了，后面短路就不会被返回了，如果为假值，则会返回后面的foo。
也可以用来进行简单的判断，取代冗长的if语句：

如果 param 如果为真值则返回 param.prop 属性，否则返回 param 这个假值，这样在某些地方防止 param 为 undefined 的时候还取其属性造成报错。
```
10. void 运算符
void 运算符 对给定的表达式进行求值，然后返回 undefined
可以用来给在使用立即调用的函数表达式（IIFE）时，可以利用 void 运算符让 JS 引擎把一
个 function 关键字识别成函数表达式而不是函数声明。
```

还可以用在箭头函数中避免传值泄漏，箭头函数，允许在函数体不使用括号来直接返回值。这个特性给用户带来了很多便利，但有时候也带来了不必要的麻烦，如果右侧调用了一个原本没有返回值的函数，其返回值改变后，会导致非预期的副作用。
&& expr1&&expr2
如果 expr1 能转换成 false 则返回 expr1，否则返回 expr2。因此，在 Boolean 环境中使用时,
两个操作结果都为 true 时返回
true，否则返回 false
 | expr1
! !expr 如果单个表达式能转换为 true
的话返回 false，否则返回 true
```
let variable11
let variable2 = variable1  || 'foo'
let variable = param && param.prop
// 有了可选链之后可以直接  param?.prop
function iife() { console.log('foo') }()       // 报错，因为 JS 引擎把 IIFE 识别为了函数声明
void function iife() { console.log('foo') }()  // 正常调用
~function iife() { console.log('foo') }()      // 也可以使用一个位操作符
(function iife() { console.log('foo') })()     // 或者干脆用括号括起来表示为整体的表达式
```

安全起见，当不希望函数返回值是除了空值以外其他值，应该使用 void来确保返回 undefined，这样，
当 customMethod 返回值发生改变时，也不会影响箭头函数的行为。
11. 其他常用操作符
12. 操作符优先级
正因为有操作符优先级，所以 variable = 1, 2 的含义是将变量先赋值为 1，再返回数字 2，而不是变量赋值给 1, 2 的返回值 2，这是因为 = 运算符的优先级高于 , 逗号运算符。再比如表达式 6 \- 2 * 3
```
=== 0 && 1，- * === && 这四个运算符优先级最高的 * 先运算，然后 - 运算符结果为 0，=== 运算符优先
级高于 && 而 true && 1 的结果为 1，所以这就是运算的结果。
```
下面的表将运算符按照优先级的不同从高（20）到低（1）排列，但这个不是最新的，至少没包括可选链，建议参考这个表或者 MDN。
const func = () => void customMethod()   // 特别是给一个事件或者回调函数传一个函数时1
三元表达式：很简单了，大家经常用，expr ? expr1 : expr2 如果 expr 为真值则返回 expr1，否则返回 expr2
赋值运算符简写：加法赋值 +=、减法赋值 -=、乘法赋值 *=、除法赋值 /=、求幂赋值 **=、按位或
复制 |=、按位与赋值 &=、有符号按位右移赋值 >>=、无符号按位右移赋值 >>>=、逻辑空赋值??= ....
求幂运算符：var1 ** var2 相当于 Math.pow，结果为 var1 的 var2 次方
1.
2.
3.

运算符优先级

<a id="sec-12"></a>
## js

> 来源：有道云笔记
> 原路径：`来自手机/js.md`

有  BUG   回头看看修改1
在上述情况下， userResponse 可能不是对象，如果是对象，它的属性  user 也可能不是对象。所以，在获取值时要进行检查：
```
let name = ''6
if (userResponse) {7
  const data = userResponse.data8
  if (data && data.user) {9
    const user = data.user10
    if (user.firstname) {11
      name += user.firstname12
    }13
    if (user.lastname) {14
      name += user.firstname15
    }16
  }17
}18
```
这太啰嗦了。代码越多， bug 就越明显。我们能把它缩小吗?当然，可以使用  JS 中可选的链接、解构赋值来优化它。
```
const user = userResponse?.data?.user21
const { firstname = '', lastname = ''} = user22
const name = firstname + lastname23
```
Map 来代替25
```
const m = new Map(27
    'monday','workday'],28
    'tuesday', 'workday'],29
    'wednesday', 'workday'],30
    'thursday', 'workday'],31
    'friday', 'workday'],32
    'saturday', 'funday'],33
    'sunday', 'funday']34
];35

return m.get(day);37
```

<a id="sec-13"></a>
## javascript页面刷新的几种方法

> 来源：有道云笔记
> 原路径：`javascript页面刷新的几种方法.md`

javascript refresh page 几种页面刷新的方法本节内容： 的方法与实例。
window.location.reload()，window.history.go(0)和document.execCommand(''Refresh'')，这三个方法是最快速的。其他的都有明显的浏览器滚动条的出现。
Javascript刷新页面的几种方法：
1 history.go(0)
除非有<%..%>等需在服务端解释才能生成的页面代码,否则直接读取缓存中的数据
不刷新
2 location.reload()
要重新连服务器以读得新的页面(虽然页面是一样的)
刷新
3 location=location
要在javascript中导航，不是调用window对象的某个方法，而是设置它的location.href属性，location属性是每个浏览器都支持的。比如：
<span onclick=”javascript:window.location.href=’#top’”>top</span>
执行后有后退、前进
4 location.assign(location)
加载 URL 指定的新的 HTML 文档。 就相当于一个链接，跳转到指定的url，当前页面会转为新页面内容，可以点击后退返回上一个页面。
5 document.execCommand('Refresh')
6 window.navigate(location)
MSDN说的window.navigate(sURL)方法是针对IE的，不适用于FF，在HTML DOM Window Object中，根本没有列出
window.navigate方法。
7 location.replace(location)
执行后无后退、前进
通过加载 URL 指定的文档来替换当前文档 ，这个方法是替换当前窗口页面，前后两个页面共用一个窗口，所以是没有后退返回上一页的
8 document.URL=location.href
Javascript刷新页面的几种方法：
1 history.go(0)
2 location.reload()
3 location=location
4 location.assign(location)
5 document.execCommand('Refresh')
6 window.navigate(location)
7 location.replace(location)
8 document.URL=location.href
自动刷新页面的方法:
```
1.页面自动刷新：把如下代码加入<head>区域中
<meta http-equiv="refresh" content="20">
```
其中20指每隔20秒刷新一次页面.
2.页面自动跳转：把如下代码加入<head>区域中
<meta http-equiv="refresh" content="20;url=http://www.jbxue.com">
其中20指隔20秒后跳转到http://www.jbxue.com页面
javascript页面刷新的几种方法
Javascript刷新当前页面
javascript自动刷新页面方法详解

3.页面自动刷新js版
```
<script language="JavaScript"> function myrefresh() { window.location.reload(); }
setTimeout('myrefresh()',1000); // 指定 1 秒刷新一次  </script>
```
JS刷新框架的脚本语句
```
// 如何刷新包含该框架的页面用  <script language=JavaScript> parent.location.reload(); </script> // 子窗口刷
新父窗口  <script language=JavaScript> self.opener.location.reload(); </script> www.jbxue.com ( 　或　 <a
href="javascript:opener.location.reload()"> 刷新 </a> ) // 如何刷新另一个框架的页面用  <script
language=JavaScript> parent. 另一 FrameID.location.reload(); </script>
如果想关闭窗口时刷新或者想开窗时刷新的话，在<body>中调用以下语句即可。
<body onload="opener.location.reload()"> 开窗时刷新  <body onUnload="opener.location.reload()"> 关闭时
刷新  <script language="javascript"> window.opener.document.location.reload()
```

<a id="sec-14"></a>
## JS-正则

> 来源：有道云笔记
> 原路径：`JS-正则.md`

```
/**
*去除前后的引号     只能去   英文的引号
*/
var str =`" 哈喽 ” ，嘿，这样可以去除前后的引号 "`
console.log(str.replace(/\"(.+)\"/,"$1"))
/**
*将2020-04-20 转换为2020年04月
*/
  val?val.replace('-',' 年 ').replace('-',' 月 ').substring(0,8):'' ;
/**
*校验正整数
*/
var re = /^[0-9]+$/ ;    // return re.test(s)
((/^1[3456789]\d{9}$/.test(value))) {  // 匹配手机号
( /(^1[3|4|5|6|7|8|9][0-9]\d{8}$)|(^0\d{2,3}-?\d{7,8}$)/.test(value))){// 匹配手机号码
value.match(/(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0−9]3,4[0-9]{3,8}$)|
(^0{0,1}13[0-9]{9}$)/) && value.length>6){// 匹配座机号码加区号和不加区号
/^[1][0-9]{10}$/.test(value)18
value.match(/\d{3}-\d{8}|\d{4}-\d{7}/) // 匹配国内电话号码 (0511-4405222 或  021-
87888822    /**/
 // var reg = new RegExp( ' ' , "g" )20
 // val = val.replace( reg , '' )21
 // var newstr = str.replace( reg , '' );22
 // val = val.replace(/\' '/g,'')23
     var zongjiReg  = val.replace(/\s+/g,"")  终极替换  将空格删
```
掉
```
/**/                       25
//  /(^1[3|4|5|6|7|8|9][0-9]\d{8}$)|(^0\d{2,3}-?\d{7,8}$)/26
"^\d+$"　　// 非负整数（正整数  + 0 ） 27
"^[0-9]*[1-9][0-9]*$"　　// 正整数 28
"^((-\d+)|(0+))$"　　// 非正整数（负整数  + 0 ） 29
"^-[0-9]*[1-9][0-9]*$"　　// 负整数 30
"^-?\d+$"　　　　// 整数 31
"^\d+(\.\d+)?$"　　// 非负浮点数（正浮点数  + 0 ） 32
"^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$"　　//正浮点数
"^((-\d+(\.\d+)?)|(0+(\.0+)?))$"　　// 非正浮点数（负浮点数  + 0 ） 34

"^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$"
　// 负浮点
```
数 36
```
"^(-?\d+)(\.\d+)?$"　　// 浮点数 37
"^[A-Za-z]+$"　　// 由 26 个英文字母组成的字符串 38
"^[A-Z]+$"　　// 由 26 个英文字母的大写组成的字符串 39
"^[a-z]+$"　　// 由 26 个英文字母的小写组成的字符串 40
"^[A-Za-z0-9]+$"　　// 由数字和 26 个英文字母组成的字符串 41
"^\w+$"　　// 由数字、 26 个英文字母或者下划线组成的字符串 42
"^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$"　　　　//email 地址 43
"^[a-zA-z]+://(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$"　　//url 44
/^13\d{9}$/gi 手机号正则表达式45
public static bool IsValidMobileNo(string MobileNo)46
  {47
   const string regPattern = @"^(130|131|132|133|134|135|136|137|138|139)\d{8}$";48
   return Regex.IsMatch(MobileNo, regPattern);49
  }50
正则表达式--验证手机号码:13[0-9]{9}51
实现手机号前带86或是+86的情况:^((\+86)|(86))?(13)\d{9}$52
电话号码与手机号码同时验证:(^(\d{3,4}-)?\d{7,8})$|(13[0-9]{9}) 53
提取信息中的网络链接:(h|H)(r|R)(e|E)(f|F)  *=  *('|")?(\w|\\|\/|\.)+('|"|  *|>)?  54
提取信息中的邮件地址:\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*  55
提取信息中的图片链接:(s|S)(r|R)(c|C)  *=  *('|")?(\w|\\|\/|\.)+('|"|  *|>)?56
```
提取信息中的IP地址:(\d+)\.(\d+)\.(\d+)\.(\d+)    57
```
提取信息中的中国手机号码:(86)*0*13\d{9}    58
提取信息中的中国固定电话号码:(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}    59
提取信息中的中国电话号码（包括移动和固定电话）:(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}    60
提取信息中的中国邮政编码:[1-9]{1}(\d+){5}    61
提取信息中的中国身份证号码:\d{18}|\d{15}    62
```
提取信息中的整数： \d+    63
提取信息中的浮点数（即小数）：(-?\d*)\.?\d+    64
提取信息中的任何数字   ：(-?\d*)(\.\d+)?  65
```
提取信息中的中文字符串：[\u4e00-\u9fa5]*    66
提取信息中的双字节字符串  (汉字)：[^\x00-\xff]*67
 // 身份证校验  港澳台69
      const mainlandID = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6]
[1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0]
[1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
      var patternHongkong = /^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}(\([0−9aA]\)|[0-
9aA])$/; // 香港

      var patternTaiwan = /^[a-zA-Z][0-9]{9}$/; // 台湾72
      var patternMacao = /^[1|5|7][0-9]{6}\([0-9Aa]\)/; // 澳门73
      let idCards = [mainlandID, patternHongkong, patternTaiwan, patternMacao];74
       // 身份证的校验  75
      if (vm.entryData.patientIDNo) {76
        let pass = idCards.some((item) => item.test(vm.entryData.patientIDNo)); // 身份证
        if (pass === false) {78
          vm.errData.patientIDNo.patientIDNo = ' 请输入正确的身份证 !';         79
          return false;80
        }81
      }  82
                          var s = "allenglish"; 87
var re = new RegExp("^[a-zA-Z]+$"); 88
// 要包含数字的话是  new RegExp("^[a-zA-Z0-9]+$"); 89
if (re.test(s)) {alert(" 是全英文 ");} 91
          var s = "ggfahhaha";94
var re = new RegExp("^[a-z]*|[A-Z]*$");95
if (re.test(s))96
var reg = new RegExp("[\\u4E00-\\u9FFF]+$","g");  纯汉字99
```
