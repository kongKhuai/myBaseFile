# JS工具函数

> 共 12 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [01、JS 常用的工具类](#sec-1) — 有道云笔记 · `js/01、JS 常用的工具类.md`
2. [array.js](#sec-2) — 有道云笔记 · `js/array.js.md`
3. [color.js](#sec-3) — 有道云笔记 · `js/color.js.md`
4. [index.js](#sec-4) — 有道云笔记 · `js/index.js.md`
5. [moment.js](#sec-5) — 有道云笔记 · `js/moment.js.md`
6. [time.js](#sec-6) — 有道云笔记 · `js/time.js.md`
7. [utils](#sec-7) — 有道云笔记 · `js/utils.md`
8. [常用的前端JavaScript方法封装](#sec-8) — 有道云笔记 · `js/常用的前端JavaScript方法封装.md`
9. [过滤掉空的数组](#sec-9) — 有道云笔记 · `js/过滤掉空的数组.md`
10. [index(2)](#sec-10) — myBaseFile · `js/index.md`
11. [imgAdd() {](#sec-11) — 有道云笔记 · `imgAdd() {.md`
12. [imgl{](#sec-12) — 有道云笔记 · `imgl{.md`

---

<a id="sec-1"></a>
## 01、JS 常用的工具类

> 来源：有道云笔记
> 原路径：`js/01、JS 常用的工具类.md`

01 、 JS 常用的工具类
1 、 Lodash
Lodash 是一个一致性、模块化、高性能的  JavaScript 实用工具库。
简单的说，就是很多方法  Lodash 已经帮你写好了，直接使用符号  '_' 调用就可以。
例如： N 次循环
指路：
“
Lodash 中文文档： https://www.lodashjs.com/
”
2 、 Ramda
Ramda 一款实用的  JavaScript 函数式编程库。
Ramda 库信息非常大，只对常用函数进行整理总结，方便快速上手使用
例如：
指路：
“
Ramda 中文文档： https://ramda.cn/
”
```
<script type="text/javascript">
    console.log('------- javascript -------');
    //js 原生的循环方法
    for(var i = 0; i < 5; i++){
        console.log(i);
    }
    console.log('------- lodash -------');
    //ladash 的times方法
    _.times(5,function(a){
        console.log(a);
    });
</script>
R.uniq([1, 1, 2, 1]);
// [1,2]
```

3 、 Day.js
轻量级  JavaScript 时间日期处理库
指路：
“
Ramda 中文网： https://dayjs.fenxianglu.cn/
”
4 、 Big.js
一个小型，快速的  JavaScript 库，用于任意精度的十进制算术运算。
指路：
“
Big.js 文档： https://www.npmjs.com/package/big-js
”
02 、网络请求
1 、 Axios
易用、简洁且高效的 http 库。
指路：
“
Axios 文档： http://www.axios-js.com/
”
2 、 Superagent
轻量的 Ajax API 。
指路：
“
Axios 文档： http://www.axios-js.com/
”
3 、 Fly.js
HTTP 请求终极解决方案。
指路：
“
Fly.js 文档： https://nodejs.ctolib.com/wendux-fly.html
”
03 、图形 / 图像处理库

1 、 html2canvas
JavaScript 实现页面截图的类库
指路：
“
html2canvas 官网： http://html2canvas.hertzen.com/
”
2 、 dom-to-image
一个可以将任意  DOM 节点转换为用  JavaScript 编写的矢量（ SVG ）或光栅（ PNG 或 JPEG ）图像的库。
04 、动画库
1 、 Anime.js
一个 JavaScript 动画库，可以处理 CSS 属性，单个 CSS 转换， SVG 或任何 DOM 属性以及 JavaScript 对象。
2 、 fullPage.js
一个可轻易创建全屏滚动网站的 js 滚动动画库 , 兼容性无可替代。
3 、 Velocity
一个高效的  Javascript 动画引擎，与  jQuery 的  $.animate() 有相同的  API , 同时还支持彩色动画、转换、
循环、画架、 SVG 支持和滚动等效果。

<a id="sec-2"></a>
## array.js

> 来源：有道云笔记
> 原路径：`js/array.js.md`

```
// 数组去重
// 入参格式 [{id:1,name:'123'},{id:1,name:"123"}]  === 》  [{},{}]
// 返回去除相同 keyName 的对象元素的新数组
function ArrayDeweighting(arr,keyName='id'){
    let obj = {}
    return arr.reduce((cur, next) => {
      obj[next[keyName]] ? '' : (obj[next[keyName]] = true && cur.push(next))
      return cur
    }, [])
}
// 01 、 GetValue
// 给定一个对象或数组，函数将返回指定路径的值，否则为  null 。
const getValue = (obj, path) => path
    .replace(/\[([^[\]]*)]/g, '.$1.')
    .split('.')
    .filter(prop => prop !== '')
    .reduce((prev, next) => (
        prev instanceof Object ? prev[next] : undefined
    ), obj);
// getValue({ a: { b: c: 'd' } }, 'a.b.c'); // = d
// getValue({ a: { b: c: [1, 2] } }, 'a.b.c[1]'); // = 227
// 02 、 Clamp28
// 确保值在指定范围内，否则 “clamp” 到最接近的最小值和最大值。30
const clamp = (min, max, value) => {32
  if (min > max) throw new Error('min cannot be greater than max');33
  return value < min34
    ? min35
    : value > max36
      ? max37

      : value;38
  }39
}40
clamp(0, 10, -5); // = 042
clamp(0, 10, 20); // = 1043
// 03 、 Sleep44
// 在执行下一个操作之前等待指定的持续时间（以毫秒为单位）。46
const sleep = async (duration) => (48
  new Promise(resolve =>49
    setTimeout(resolve, duration)50
```
  )51
```
);52
await sleep(1000); // waits 1 sec54
// 04 、 GroupBy55
// 根据键控功能对对象中的相关项进行分组和索引。57
const groupBy = (fn, list) => (59
  list.reduce((prev, next) => ({60
    ...prev,61
    [fn(next)]: [...(prev[fn(next)] || []), next]62
  }), {})63
);64
groupBy(vehicle => vehicle.make, [66
  { make: 'tesla', model: '3' },67
  { make: 'tesla', model: 'y' },68
  { make: 'ford', model: 'mach-e' },69
]);70
// { 72
//   tesla: [ { make: 'tesla', ... }, { make: 'tesla', ... } ],73
//   ford: [ { make: 'ford', ... } ],74
// }75
// 05 、 Collect By76

// 根据键控功能创建包含相关项目的子列表。78
import groupBy from './groupBy';80
const collectBy = (fn, list) => 82
  Object.values(groupBy(fn, list));83
collectBy(vehicle => vehicle.make, [85
  { make: 'tesla', model: '3' },86
  { make: 'tesla', model: 'y' },87
  { make: 'ford', model: 'mach-e' },88
]);89
// [ 91
//   [ { make: 'tesla', ... }, { make: 'tesla', ... } ],92
//   [ { make: 'ford', ... } ],93
// ]94
// 06 、 Head95
// 获取列表的第一个元素。这个函数对于编写干净易读的代码很有用。97
const head = list => list[0];99
head([1, 2, 3]); // = 1101
head([]); // = undefined102
// 07 、 Tail103
// 获取列表中除第一个元素之外的所有元素。这个函数对于编写干净易读的代码很有用。105
const tail = list => list.slice(1);107
tail([1, 2, 3]); // = [2, 3]109
tail([]); // = []110
// 08 、 Flatten111
// 通过递归地从嵌套子列表中提取所有项目来创建一个平面列表。113
const flatten = list => list.reduce((prev, next) => ([115
```
  ...prev,116
```
  ...(Array.isArray(next) ? flatten(next) : [next])

]), []);118
flatten([[1, 2, [3, 4], 5, [6, [7, 8]]]]); // = [1, 2, 3, 4, 5, 6, 7, 8]120
// 09 、 Intersection By121
// 查找键控函数定义的两个列表中存在的所有值。123
const intersectionBy = (fn, listA, listB) => {125
  const b = new Set(listB.map(fn);126
  return listA.filter(val => b.has(fn(val)));127
};128
intersectionBy(v => v, [1, 2, 3], [2, 3, 4]); // = [2, 3]130
intersectionBy(v => v, [{ a: 1 }, { a: 2 }], [{ a: 2}, { a: 3 }, { a: 4 }]); // = [{
a: 2 }];
// 10 、 IndexBy132
// 通过键控函数确定的值对列表中的每个元素进行索引。134
const indexBy = (fn, list) =>136
  list.reduce((prev, next) => ({137
    ...prev,138
    [fn(next)]: next139
  }, {})140
indexBy(val => val.a, [{ a: 1 }, { a: 2 }, { a: 3 }]); 142
// = { 1: { a: 1 }, 2: { a:2 }, 3: { a: 3 } }143
// 11 、 DifferenceBy144
// 查找第一个列表中不存在于第二个列表中的所有项目，由键控功能确定。146
// import indexBy from './indexBy';148
const differenceBy = (fn, listA, listB) => {150
  const bIndex = indexBy(fn, listb);151
  return listA.filter(val => !bIndex[fn(val)]);152
})153
differenceBy(val => val, [1,2,3], [3,4,5]); // = [1,2]155
```
differenceBy(156

```
  vehicle => vehicle.make, 157
  [{ make: 'tesla' }, { make: 'ford' }, { make: 'gm' }], 158
  [{ make: 'tesla' }, { make: 'bmw' }, { make: 'audi' }], 159
); // = [{ make: 'ford' }, { make: 'gm' }]160
// 12 、 Recover With161
// 如果给定函数抛出错误，则返回默认值。163
const recoverWith = async (defaultValue, fn, ...args) => {165
  try {166
    const result = await fn(...args);167
    return result;168
  } catch (_e) {169
    return defaultValue;170
  }171
}172
recoverWith('A', val => val, 'B'); // = B174
recoverWith('A', () => { throw new Error() }); // = 'A'175
// 13 、 Distance176
// 计算两点  p1 和  p2 之间的距离。178
const distance = ([x0, y0], [x1, y1]) => (180
```
  Math.hypot(x1 - x0, y1 - y0)181
```
);182
distance([0, 1], [5, 4]); // = 5.8309518948453184
// 14 、 Drop While185
// 从列表中删除元素，从第一个元素开始，直到满足  som 谓词。187
const dropWhile = (pred, list) => {189
  let index = 0;190
  list.every(elem => {191
    index++;192
    return pred(elem);193
  });194
  return list.slice(index-1);195
}196

dropWhile(val => (val < 5), [1,2,3,4,5,6,7]); // = [5,6,7]198
// 15 、 Sum By199
// 给定一些产生每个元素的单独值的函数，计算列表中所有元素的总和。201
const sumBy = (fn, list) =>203
  list.reduce((prev, next) => prev + fn(next), 0);204
sumBy(product => product.price, [206
  { name: 'pizza', price: 10 }, 207
  { name: 'pepsi', price: 5 },208
  { name: 'salad', price: 5 },209
]); // = 20210
// 16 、升序211
// 给定一个评估函数，创建一个升序比较器函数。213
const ascending = (fn) => (a, b) => {215
  const valA = fn(a);216
  const valB = fn(b);217
  return valA < valB ? -1 : valA > valB ? 1 : 0;218
}219
const byPrice = ascending(val => val.price);221
[{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice); 222
// = [{ price: 100 }, { price: 200 }, { price: 300 }]223
// 17 、降序224
// 给定一个评估函数，创建一个降序比较器函数。226
const descending = (fn) => (a, b) => {228
  const valA = fn(b);229
  const valB = fn(a);230
  return valA < valB ? -1 : valA > valB ? 1 : 0;231
}232
const byPrice = descending(val => val.price);234
[{ price: 300 }, { price: 100 }, { price: 200 }].sort(byPrice); 235
// = [{ price: 300 }, { price: 200 }, { price: 100 }]236

// 18 、 Find Key237
// 在满足给定 predicate 的索引中找到第一个键值。239
const findKey = (predicate, index) => Object241
```
  .keys(index)242
  .find(key => predicate(index[key], key, index));243
findKey(245
```
  car => !car.available,246
  {247
    tesla: { available: true },248
    ford: { available: false },249
    gm: { available: true }250
  },251
); // = "ford"252
// 19 、 Bifurcate By253
// 将给定列表的值拆分为两个列表，一个包含 predicate 函数评估为真值的值，另一个包含假值。255
const bifurcateBy = (predicate, list) =>257
  list.reduce((acc, val, i) => (258
    acc[predicate(val, i) ? 0 : 1].push(val), acc), 259
    [[], []]260
  );261
bifurcateBy(val => val > 0, [-1, 2, -3, 4]); 263
// = [[2, 4], [-1, -3]]264
// 20 、 Pipe265
// 执行从左到右的功能组合。所有额外的参数都将传递给列表中的第一个函数，因此可以有任何数量。结果
```
将在第二个传递，第二个的结果将传递给第三个， …… 以此类推，直到处理完所有函数。
const pipe = (functions, ...args) => (269
  functions.reduce(270
```
    (prev, next) => Array.isArray(prev) ? next(...prev) : next(prev),271
    args272
```
)273
```
);274
pipe([Math.abs, Math.floor, val => -val], 4.20); // = -4275

pipe([(a, b) => a - b, Math.abs], 5, 10); // = 5276
```

<a id="sec-3"></a>
## color.js

> 来源：有道云笔记
> 原路径：`js/color.js.md`

```
// ? 生成一个随机的十六进制颜色
export const randomColor = () =>
  `#${Math.random().(16).slice(2, 8).padEnd(6, "0")}`;
// randomColor() // #6ef10e
// ? 将 RGB 颜色转换为十六进制
export const rgbToHex = (r, g, b) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).(16).slice(1);
// rgbToHex(255, 255, 255)  // '#ffffff'
// 随机生成十六进制颜色
// // 随机生成十六进制颜色
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).(16);
  return "#" + n.slice(0, 6);
};
// 使用
randomHexColorCode(); // '#e34155'
//RGB 转十六进制
const RGBToHex = (r, g, b) =>
  ((r << 16) + (g << 8) + b).(16).padStart(6, "0");
// 使用
RGBToHex(255, 165, 1); // '#ffa501'
// 将  3 位颜色扩展为  6 位颜色
// 将  十六进制  3 位颜色扩展为  6 位颜色
const extendHex = (shortHex) =>
```
  "#" +
  shortHex
```
    .slice(shortHex.startsWith("#") ? 1 : 0)
    .split("")
    .map((x) => x + x)
    .join("");
// 使用
extendHex("#03f"); // '#0033ff'

extendHex("05a"); // '#0055aa'38
// 将  rgb() 颜色字符串转换为具有每种颜色值的对象。39
// 将 rgb() 颜色字符串转换为具有每种颜色值的对象。40
const toRGBObject = (rgbStr) => {41
  const [red, green, blue] = rgbStr.match(/\d+/g).map(Number);42
  return { red, green, blue };43
};44
// 使用46
toRGBObject("rgb(255, 12, 0)"); // {red: 255, green: 12, blue: 0}47
// 十六进制转  RGB48
// 十六进制转 RGB49
const hexToRGB = (hex) => {50
  let alpha = false,51
    h = hex.slice(hex.startsWith("#") ? 1 : 0);52
  if (h.length === 3) h = [...h].map((x) => x + x).join("");53
  else if (h.length === 8) alpha = true;54
  h = parseInt(h, 16);55
  return (56
    "rgb" +57
    (alpha ? "a" : "") +58
    "(" +59
    (h >>> (alpha ? 24 : 16)) +60
    ", " +61
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +62
    ", " +63
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +64
    (alpha ? `, ${h & 0x000000ff}` : "") +65
    ")"66
  );67
};68
// 使用70
hexToRGB("#27ae60ff"); // 'rgba(39, 174, 96, 255)'71
hexToRGB("27ae60"); // 'rgb(39, 174, 96)'72
hexToRGB("#fff"); // 'rgb(255, 255, 255)'73
// 将  rgb() 颜色字符串转换为数组74
// 将  rgb() 颜色字符串转换为数组75
const toRGBArray = (rgbStr) => rgbStr.match(/\d+/g).map(Number);76

// 使用78
toRGBArray("rgb(255, 12, 0)"); // [255, 12, 0]79
// 将  RGB 颜色元组转换为  HSB 格式。80
// 将  RGB 颜色元组转换为  HSB 格式。81
const RGBToHSB = (r, g, b) => {82
  r /= 255;83
  g /= 255;84
  b /= 255;85
  const v = Math.max(r, g, b),86
    n = v - Math.min(r, g, b);87
  const h =88
    n === 089
      ? 090
      : n && v === r91
      ? (g - b) / n92
      : v === g93
      ? 2 + (b - r) / n94
      : 4 + (r - g) / n;95
  return [60 * (h < 0 ? h + 6 : h), v && (n / v) * 100, v * 100];96
};97
// 使用99
RGBToHSB(252, 111, 48);100
// [18.529411764705856, 80.95238095238095, 98.82352941176471]101
// 将  HSB 颜色元组转换为  RGB 格式。102
// 将  HSB 颜色元组转换为  RGB 格式。103
const HSBToRGB = (h, s, b) => {104
  s /= 100;105
  b /= 100;106
  const k = (n) => (n + h / 60) % 6;107
  const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));108
  return [255 * f(5), 255 * f(3), 255 * f(1)];109
};110
// 使用112
HSBToRGB(18, 81, 99); // [252.45, 109.31084999999996, 47.965499999999984]113
// 将  RGB 颜色元组转换为  HSL 格式。114
// 将  RGB 颜色元组转换为  HSL 格式。115
const RGBToHSL = (r, g, b) => {116
  r /= 255;

  g /= 255;118
  b /= 255;119
  const l = Math.max(r, g, b);120
  const s = l - Math.min(r, g, b);121
  const h = s122
    ? l === r123
      ? (g - b) / s124
      : l === g125
      ? 2 + (b - r) / s126
      : 4 + (r - g) / s127
    : 0;128
  return [129
    60 * h < 0 ? 60 * h + 360 : 60 * h,130
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),131
    (100 * (2 * l - s)) / 2,132
  ];133
};134
// 使用136
RGBToHSL(45, 23, 11); // [21.17647, 60.71428, 10.98039]137
// 将  HSL 颜色元组转换为  RGB 格式。138
// 将  HSL 颜色元组转换为  RGB 格式。139
const HSLToRGB = (h, s, l) => {140
  s /= 100;141
  l /= 100;142
  const k = (n) => (n + h / 30) % 12;143
  const a = s * Math.min(l, 1 - l);144
  const f = (n) =>145
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));146
  return [255 * f(0), 255 * f(8), 255 * f(4)];147
};148
// 使用150
HSLToRGB(13, 100, 11); // [56.1, 12.155, 0]151
// 更改  hsl() 颜色字符串的亮度值。152
// 更改 hsl() 颜色字符串的亮度值。153
const changeLightness = (delta, hslStr) => {154
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);155
  const newLightness = Math.max(156

    0,157
    Math.min(100, lightness + parseFloat(delta))158
  );159
  return `hsl(${hue}, ${saturation}%, ${newLightness}%)`;160
};161
// 使用163
changeLightness(10, "hsl(330, 50%, 50%)"); // 'hsl(330, 50%, 60%)'164
changeLightness(-10, "hsl(330, 50%, 50%)"); // 'hsl(330, 50%, 40%)'165
// 将  hsl() 颜色字符串转换为值数组。166
// 将 hsl() 颜色字符串转换为值数组。167
const toHSLArray = (hslStr) => hslStr.match(/\d+/g).map(Number);168
// 使用170
toHSLArray("hsl(50, 10%, 10%)"); // [50, 10, 10]171
// 将  hsl() 颜色字符串转换为具有每种颜色值的对象。172
// 将 hsl() 颜色字符串转换为具有每种颜色值的对象。173
const toHSLObject = (hslStr) => {174
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);175
  return { hue, saturation, lightness };176
};177
// 使用179
toHSLObject("hsl(50, 10%, 10%)"); // { hue: 50, saturation: 10, lightness: 10 }180
// JS rgba 颜色转换十六进制181
function colorRgba(sHex) {182
  // 十六进制颜色值的正则表达式183
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/;184
  /* 16 进制颜色转为 RGB 格式  */185
  var sColor = sHex.toLowerCase();186
  var alpha = 1;187
  if (sColor && reg.test(sColor)) {188
    if (sColor.length === 4 || sColor.length === 5) {189
      var sColorNew = "#";190
      for (var i = 1; i < sColor.length; i += 1) {191
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));192
      }193
      sColor = sColorNew;194
    }195
    // 如果有透明度再执行196

    if (sColor.length === 9) {197
      alpha = (parseInt("0x" + sColor.slice(7, 9)) / 255).toFixed(2);198
    }199
    //  处理六位的颜色值200
    var sColorChange = [];201
    for (var i = 1; i < 7; i += 2) {202
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));203
    }204
    return "rgba(" + sColorChange.join(",") + "," + alpha + ")";205
  } else {206
    return sColor;207
  }208
}209
```

<a id="sec-4"></a>
## index.js

> 来源：有道云笔记
> 原路径：`js/index.js.md`

手机号脱敏
<script>1
   类型判断
```
  function getType(data) {
    let originType = Object.prototype.toString.call(data); // 获取内部属性值
    let index = originType.indexOf(' '); // 以空格分割
    let type = originType.slice(index + 1, -1); // 截取
    return type.toLowerCase();
  }
  console.info(getType(" 小猪课堂 ")); // string
  console.info(getType(123)); // number
  console.info(getType(true)); // boolean
  console.info(getType(null)); // null
  console.info(getType(undefined)); // undefined
  console.info(getType({ name: " 小猪课堂 " })); // object
  console.info(getType([1,3,2])); // array
  console.info(getType(Promise.resolve())); // promise
  console.info(getType(new Set())); // set
  console.info(getType(new WeakMap())); // weakmap
  console.info(getType(new Date())); // date
  console.info(getType(() => {})); // function
  console.info(getType(new Map)); // map
  console.info(getType(BigInt(100))); // bigint
  console.info(getType(new RegExp(''))); // regexp
  console.info(getType((Symbol()))); // symbol
</script>
export const hideMobile = (mobile) => {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")
}
```
数组对象根据字段去重
arr 要去重的数组
key 根据去重的字段名
```
export const uniqueArrayObject = (arr = [], key = 'id') => {
  if (arr.length === 0) return
  let list = []

  const map = {}8
  arr.forEach((item) => {9
    if (!map[item[key]]) {10
      map[item[key]] = item11
    }12
  })13
```
  list = Object.values(map)14
```
  return list16
}17
```
函数防抖
```
export function debounce(fn, delay) {
  delay = delay || 1000;
  let timer = null;
  return function () {
    let context = this;
    let arg = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(context, arg);
    }, delay);
  };
}
```
节流函数
```
export function throttle(fn, delay = 300) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (!timer) {

      timer = setTimeout(function () {7
        fn.apply(context, args);8
        clearTimeout(timer);9
      }, delay);10
    }11
  };12
}13

// ? 生成随机字符串
// 我们可以使用  Math.random 生成一个随机字符串，当我们需要一个唯一的  ID 时非常方便。
export const randomString = () => Math.random().(36).slice(2)
// randomString() // gi1qtdego0b
// ? 转义 HTML 特殊字符
// 如果您了解  XSS ，其中一种解决方案是转义  HTML 字符串。
export const escape = (str) => str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<':
'&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]))
// escape('<div class="medium">Hi Medium.</div>') 8
// &lt;div class=&quot;medium&quot;&gt;Hi Medium.&lt;/div&gt9
// ? 字符串中每个单词的第一个字符大写11
// 此方法用于将字符串中每个单词的第一个字符大写。12
export const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) =>
```
c.toUpperCase())
```
// uppercaseWords('hello world'); // 'Hello World'14
export const uppercaseWords2= (str) => str.replace(/^(.)|\s+(.)/g, (c) =>
```
c.toUpperCase())
```
// ? 将字符串转换为 camelCase16
export const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ?
c.toUpperCase() : ''));
// toCamelCase('background-color'); // backgroundColor18
// ? 检查对象中是否包含某 key   Object.keys() .includes('key')20
export const hasBarProperty = (obj, key) => Object.prototype..call(obj, key)21
// ? 删除数组中的重复值  使用 “Set”23
export const removeDuplicates = (arr) => [...new Set(arr)]24
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]))25

// ? 展平一个数组27
export const flat2 = (arr) =>28
    [].concat.apply(29
        [],30
        arr.map((a) => (Array.isArray(a) ? flat(a) : a))31
    )32
// Or33
export const flat = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a,
...flat(b)] : [...a, b]), [])
// flat(['cat', ['lion', 'tiger']]) 35
// ? 检查一个数字是偶数还是奇数使用模运算符  (%) 37
export const isEven = num => num % 2 === 038
// ? 获取两个数字之间的随机整数 , 此方法用于获取两个数字之间的随机整数。40
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)41
// random(1, 50) // 2542
// ? 获取参数的平均值44
export const average = (...args) => args.reduce((a, b) => a + b) / args.length;45
// average(1, 2, 3, 4, 5);   // 346
// ? 清除所有 cookies48
export const clearCookies = () => document.cookie.split(';').forEach((c) =>
(document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new
Date().toUTCString()};path=/`)))
// ? 检测暗模式51
export const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-
```
scheme: dark)').matches
```
// 暂停一会执行54
export const pause = (millis) => new Promise(resolve => setTimeout(resolve, millis))55
// const fn = async () => {56
//   await pause(1000)57
//   console.log('fatfish') // 1s later58
// }59
// fn()60
/**62

 * @description 深拷贝63
 */64
 export const deepClone = (obj, hash = new WeakMap()) => {65
    if (obj === null) return obj // 如果是 null 或者 undefined 我就不进行拷贝操作66
    if (obj instanceof Date) return new Date(obj)67
    if (obj instanceof RegExp) return new RegExp(obj)68
    // 可能是对象或者普通的值   如果是函数的话是不需要深拷贝69
    if (typeof obj !== 'object') return obj70
    // 是对象的话就要进行深拷贝71
    if (hash.get(obj)) return hash.get(obj)72
    let cloneObj = new obj.()73
    // 找到的是所属类原型上的 constructor, 而原型上的  constructor 指向的是当前类本身74
    hash.set(obj, cloneObj)75
    for (let key in obj) {76
      if (Object.prototype..call(obj, key)) {77
        // 实现一个递归拷贝78
        cloneObj[key] = deepClone(obj[key], hash)79
      }80
    }81
    return cloneObj82
  }83
/**84
 * @description JSON浅拷贝85
 */86
 export const jsonClone = (obj) => {87
   return JSON.parse(JSON.stringify(obj))88
  }89
// 2  使用 lodash cloneDeep92
// const _ = require('lodash');94
// const obj1 = {95
//     a: 1,96
//     b: { f: { g: 1 } },97
//     c: [1, 2, 3]98
// };99
// const obj2 = _.cloneDeep(obj1);100
// console.log(obj1.b.f === obj2.b.f);// false101

// 3 jq  $.extend103
// const $ = require('jquery');105
// const obj1 = {106
//     a: 1,107
//     b: { f: { g: 1 } },108
//     c: [1, 2, 3]109
// };110
// const obj2 = $.extend(true, {}, obj1);111
// console.log(obj1.b.f === obj2.b.f); // false112
export const deepClone2 = (source, cache) => {114
  if (!cache) {115
      cache = new Map()116
  }117
  if (source instanceof Object) { // 不考虑跨  iframe118
      if (cache.get(source)) { return cache.get(source) }119
      let result120
      if (source instanceof Function) {121
          if (source.prototype) { // 有  prototype 就是普通函数122
              result = function () { return source.apply(this, arguments) }123
          } else {124
              result = (...args) => { return source.call(undefined, ...args) }125
          }126
      } else if (source instanceof Array) {127
          result = []128
      } else if (source instanceof Date) {129
          result = new Date(source - 0)130
      } else if (source instanceof RegExp) {131
          result = new RegExp(source.source, source.flags)132
      } else {133
          result = {}134
      }135
      cache.set(source, result)136
      for (let key in source) {137
          if (source.(key)) {138
              result[key] = deepClone(source[key], cache)139
          }140
      }141
      return result142

  } else {143
      return source144
  }145
}146
  // 滚动151
  // const scrollToTop = (element) => element.scrollIntoView({ behavior: 'smooth',
block: 'start' })
  const scrollToBottom = (element) => element.scrollIntoView({ behavior: 'smooth',
block: 'end' })
  /**156
   * 数字转成汉字157
   * @params num === 要转换的数字158
   * @return 汉字159
   * */160
   export const toChinesNum = (num) => {161
    let changeNum = [' 零 ', ' 一 ', ' 二 ', ' 三 ', ' 四 ', ' 五 ', ' 六 ', ' 七 ', ' 八 ', ' 九 ']162
    let unit = ['', ' 十 ', ' 百 ', ' 千 ', ' 万 ']163
    num = parseInt(num)164
    let getWan = (temp) => {165
        let strArr = temp.().split('').reverse()166
        let newNum = ''167
        let newArr = []168
        strArr.forEach((item, index) => {169
            newArr.unshift(item === '0' ? changeNum[item] : changeNum[item] +
unit[index])
        })171
        let numArr = []172
        newArr.forEach((m, n) => {173
            if (m !== ' 零 ') numArr.push(n)174
        })175
        if (newArr.length > 1) {176
            newArr.forEach((m, n) => {177
                if (newArr[newArr.length - 1] === ' 零 ') {178
                    if (n <= numArr[numArr.length - 1]) {179

                        newNum += m180
                    }181
                } else {182
                    newNum += m183
                }184
            })185
        } else {186
            newNum = newArr[0]187
        }188
        return newNum190
    }191
    let overWan = Math.floor(num / 10000)192
    let noWan = num % 10000193
    if (noWan.().length < 4) {194
        noWan = '0' + noWan195
    }196
    return overWan ? getWan(overWan) + ' 万 ' + getWan(noWan) : getWan(num)197
}198
// 方法二：支持 9 位以上也就是亿级别的，如果需要钱的那种单位，把注释放开就行199
export const toChineseBig = (num)=> {200
      // 将接收到的 num 转换为字符串201
      var strNum = String(num)202
      // 定义单位203
      // var unit = [' 拾 ', ' 佰 ', ' 仟 ', ' 万 ', ' 拾 ', ' 佰 ', ' 仟 ', ' 亿 ', ' 拾 ', ' 佰 ', ' 仟 ']204
      var unit = [' 十 ', ' 百 ', ' 千 ', ' 万 ', ' 十 ', ' 百 ', ' 千 ', ' 亿 ', ' 十 ', ' 百 ', ' 千 ']205
      // 结果中放一个符号，用来解决最后的零去不掉的问题206
      var result = ['@']207
      // 单位下标208
      var unitNo = 0209
      // 从后往前遍历接收到的数据，省略结束条件210
      for (let i = strNum.length - 1;; i--) {211
        // 调用转大写函数，将每一个数字转换成中文大写，一次放入一个到结果数组中212
        result.unshift(numToChinese(strNum[i]))213
        // 如果不大于 0214
        if (i <= 0) {215
          // 结束循环216
          break217
        }218
        // 放入一个数字，放入一个单位219

        result.unshift(unit[unitNo])220
        // 单位下标加 1221
        unitNo++222
      }223
      // 将结果数组转换成字符串，并使用正则替换一些关键位置，让结果符合语法224
      // return result.join('').replace(/( 零 [ 仟佰拾 ]){1,3}/g, ' 零 ').replace(/ 零 {2,}/g,
' 零 ').replace(/ 零 ([ 万亿 ])/g, '$1').replace(/ 亿万 /g, ' 亿 ').replace(/ 零 *@/g, '')
      return result.join('').replace(/( 零 [ 千百十 ]){1,3}/g, ' 零 ').replace(/零 {2,}/g,
' 零 ').replace(/零 ([ 万亿 ])/g, '$1').replace(/亿万/g, ' 亿 ').replace(/零 *@/g, '')
      function numToChinese(n) {228
        // var chineseBigNum = ' 零壹贰叁肆伍陆柒捌玖 '229
        var chineseBigNum = ' 零一二三四五六七八九 '230
        return chineseBigNum[n]231
      }232
    }233
  }234
```

<a id="sec-5"></a>
## moment.js

> 来源：有道云笔记
> 原路径：`js/moment.js.md`

两个时间相差
moment(this.specificTime).diff(moment(), 'days')
周几
moment(day).day()

dayjs
```
console.log(dayjs(1667404740000).format('YYYY-MM-DD HH:mm'));
console.log(dayjs(this.form.endTime).format('YYYY-MM-DD HH:mm'));
// 字符串转日期
var date = dayjs('2021-01-01').toDate()
```
date = dayjs('2021-1-1').toDate()
date = dayjs('2021/01/01').toDate()
date = dayjs('2021/1/1').toDate()
date = dayjs('20210101').toDate()
date = dayjs('2021011').toDate()
```
// 字符串转时间
var time = dayjs('2021-01-01 01:10:11').toDate()
```
time = dayjs('2021-01-0101:10:11').toDate()
time = dayjs('2021-01-01 011011').toDate()
time = dayjs('2021-01-01011011').toDate()

```
// 时间转字符串
var curTime = dayjs(timestr) // 获取需要转换时间传空为当前时间
curTime.format() // '2021-01-01T01:10:11+08:00'
curTime.format('YYYY-MM-DD HH:mm:ss') //'2021-01-01 10:10:01'
curTime.format('YYYY 年 MM 月 DD 日  HH 时 mm 分 ss 秒 ') //'2021 年 01 月 01 日  10 时 10 分 01 秒 '

// 时间比较
var a = dayjs('2021-01-01 01:10:11')
var b = dayjs('2021-02-10 01:20:31')
b.diff(a) // 3456620000 相差毫秒数
b.diff(a,'y')
b.diff(a,'year') // 0 差值转为年
b.diff(a,'M')
b.diff(a,'Month') // 1
b.diff(a,'d')
b.diff(a,'day') // 40
b.diff(a,'h')

b.diff(a,'hour') // 960
b.diff(a,'m')
b.diff(a,'minute') // 57610
b.diff(a,'s')
b.diff(a,'second') // 3456620
```

<a id="sec-6"></a>
## time.js

> 来源：有道云笔记
> 原路径：`js/time.js.md`

获取所传日期所在周开始与结束时间
```
//获取所传日期所在月开始与结束时间
// 获取下个月的1号的00：00时刻，然后减去1秒(或者毫秒、分钟、小时)，再输出day即可获取当月
```
最后一天的日期。

```
getWeekEndDay(day) {
let iDay = new Date(day)
var weekFirst = new Date(iDay.getTime() - (3600 * 1000 * 24 * (iDay.getDay() - 1)))
// 周日
let weekEnd = new Date(iDay.getTime() + (3600 * 1000 * 24 * (7 - iDay.getDay())))
return [this.$u.timeFormat(weekFirst), this.$u.timeFormat(weekEnd)]
}

getMonthEndDay(day) {
    let iDay = new Date(day)
    let startI = iDay.setDate(1);
    let endI = new Date(iDay.getFullYear(), iDay.getMonth()
```
 + 1, 0)
```
    return [this.$u.timeFormat(startI),
this.$u.timeFormat(endI)]
   },6
getLastDay(year, month) { 1
    return new Date(new Date(`${month<12?
year:++year}-${month==12?1:++month} 00:00`).getTime() - 1).getDate()
   },
/**
* 获取本、上、下周开始结束时间
* @description 得到本、上、下周的起始、结束日期
* @param {Number} n 不传或0代表本周，-1代表上周，1代表下周

* @param {Number} type  0 开始时间   1 结束时间
* @author Mt.flower
*/
// // 调用方式 , 例如
//  this.getWeek(-1, 0) // 获取上周开始日期
//  this.getWeek(-1, 1) // 获取上周结束日期
//  this.getWeek(0, 0) // 获取本周开始日期
//  this.getWeek(0, 1) // 获取本周结束日期
//  this.getWeek(1, 0) // 获取下周开始日期
//  this.getWeek(1, 1) // 获取下周结束日期
getWeek(n, type) { // 周
    let now = new Date()
    let day = now.getDay() // 返回星期几的某一天 ;
    if (!type) {
     if (n == 1) {
      let dayNumber = day == 0 ? 0 : 7 - day
      now.setDate(now.getDate() + dayNumber +
```
 1)
```
     } else if (n == -1) { 22
      let dayNumber = day == 0 ? 6 : day - 1 23
      now.setDate(now.getDate() - dayNumber -
```
 7)
```
     } else { 25
      let dayNumber = day == 0 ? 6 : day - 1 26
      now.setDate(now.getDate() - dayNumber) 27
     } 28
    } else { 29
     if (n == 1) { 30
      let dayNumber = day == 0 ? 0 : 7 - day 31
      now.setDate(now.getDate() + dayNumber +
 1 + 6) // 在周开始的日期上 +6 天 = 周结束
     } else if (n == -1) { 33
      let dayNumber = day == 0 ? 6 : day - 1 34
      now.setDate(now.getDate() - dayNumber -
```
 7 + 6)
```
     } else { 36
      let dayNumber = day == 0 ? 0 : 7 - day 37
      now.setDate(now.getDate() + dayNumber) 38
     } 39
    } 40
    let date = now.getDate() 41

    let month = now.getMonth() + 1 42
    let s = now.getFullYear() + '-' + (month < 10 ? '0' +
month : month) + '-' + (date < 10 ? '0' + date :
     date) 45
    return s 46
   }47
```
给定日期 , 获取是周几
```
getWeekDate(date) {
      var now = new Date(date).getDay();
      var weeks = new Array(
        " 周日 ",
        " 周一 ",
        " 周二 ",
        " 周三 ",
        " 周四 ",
        " 周五 ",
        " 周六 "
      );
      return weeks[day];
    }
    this.getWeekDate(2021-11-09)  // 周二
```

时间戳转自定义格式时间
```
export const dateRegExp = (time, strText) => {
  const date = new Date(time)
  if (/(y+)/.test(strText)) {
    strText = strText.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$
```
.length))
```
  }
  const dataType = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),

    'h+': date.getHours(),9
    'm+': date.getMinutes(),10
    's+': date.getSeconds()11
  }12
  for (const typeKey in dataType) {13
    if (new RegExp(`(${typeKey})`).test(strText)) {14
      const typeValue = dataType[typeKey] + ''15
      strText = strText.replace(RegExp.$1, (RegExp.$1.length === 1 ? typeValue : padLef
```
tZero(typeValue)))
```
    }17
  }18
  return strText19
}20
```
格式化距离现在已过去的时间
```
export function formatPassTime(startTime) {
    var currentTime = Date.parse(new Date()),
        time = currentTime - startTime,
        day = parseInt(time / (1000 * 60 * 60 * 24)),
        hour = parseInt(time / (1000 * 60 * 60)),
        min = parseInt(time / (1000 * 60)),
        month = parseInt(day / 30),
        year = parseInt(month / 12);
    if (year) return year + " 年前 "
    if (month) return month + " 个月前 "
    if (day) return day + " 天前 "
    if (hour) return hour + " 小时前 "
    if (min) return min + " 分钟前 "
    else return ' 刚刚 '
}
```
判断两个不同格式的日期是否为同一天
```
export function isSameDay(d1, d2) {1

    if (!d2) {
        d2 = new Date();
    }
    var d1_year = d1.getFullYear(),
        d1_month = d1.getMonth() + 1,
        d1_date = d1.getDate();
    var d2_year = d2.getFullYear(),
        d2_month = d2.getMonth() + 1,
        d2_date = d2.getDate()
    return d1_date === d2_date && d1_month === d2_month && d1_year === d2_year;
}
```
判断时间是不是今天
```
export function isTodayDate(time) {
    if (new Date(time).toDateString() === new Date().toDateString()) {
        return true;
    }
    return false;
}

// ? 计算两个日期相差天数1
export const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) /
(1000 * 60 * 60 * 24));
// diffDays(new Date("2021-11-3"), new Date("2022-2-1"))  // 903
// ? 从日期中获取一年中的哪一天4
export const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0,
```
0)) / (1000 * 60 * 60 * 24))
```
// dayOfYear(new Date()) // 746
// 去前： 2020-10-27T14:36:238
// 去后： 2020-10-27 14:36:239
timeFormatSeconds = function(time) {10
    var d = time ? new Date(time) : new Date();11

    var year = d.getFullYear();12
    var month = d.getMonth() + 1;13
    var day = d.getDate();14
    var hours = d.getHours();15
    var min = d.getMinutes();16
    var seconds = d.getSeconds();17
    if (month < 10) month = '0' + month;19
    if (day < 10) day = '0' + day;20
    if (hours < 0) hours = '0' + hours;21
    if (min < 10) min = '0' + min;22
    if (seconds < 10) seconds = '0' + seconds;23
    return (year + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + seconds);25
  }26
     // 本周29
     getCurrentWeek() {30
      // 获取当前时间31
      const currentDate = new Date()32
      // 返回 date 是一周中的某一天33
      const week = currentDate.getDay()34
      // 一天的毫秒数35
      const millisecond = 1000 * 60 * 60 * 2436
      // 减去的天数37
      const minusDay = week != 0 ? week - 1 : 638
      // 本周  周一39
      const monday = new Date(currentDate.getTime() - minusDay * millisecond)40
      // 本周  周日41
      const sunday = new Date(monday.getTime() + 6 * millisecond)42
      return [monday, sunday]43
    },44
    // 上一周45
     handleGetPrevWeek() {46
      const Time = new Date()47
      let weekNum = Time.getDay() 48
      weekNum = weekNum == 0 ? 7 : weekNum49
      let lastDate = new Date(Time.getTime() - weekNum * 24 * 60 * 60 * 1000)50

      let fitstDate = new Date(51
        Time.getTime() - (weekNum + 6) * 24 * 60 * 60 * 100052
      )53
      let startDate = `${fitstDate.getFullYear()}-${54
        fitstDate.getMonth() + 1 < 1055
          ? '0' + (fitstDate.getMonth() + 1)56
          : fitstDate.getMonth() + 157
      }-${58
        fitstDate.getDate() < 1059
          ? '0' + fitstDate.getDate()60
          : fitstDate.getDate()61
      }`62
      let endDate = `${lastDate.getFullYear()}-${63
        lastDate.getMonth() + 1 < 1064
          ? '0' + (lastDate.getMonth() + 1)65
          : lastDate.getMonth() + 166
      }-${67
        lastDate.getDate() < 10 ? '0' + lastDate.getDate() : lastDate.getDate()68
      }`69
      return [startDate, endDate]70
    }71
    // 3. 获取下一周72
   handleGetNextvWeek() {73
      const Time = new Date()74
      let weekNum = Time.getDay()75
      weekNum = weekNum == 0 ? 7 : weekNum76
      let fitstDate = new Date(78
        Time.getTime() + (7 - weekNum + 1) * 24 * 60 * 60 * 100079
      )80
      let lastDate = new Date(81
        Time.getTime() + (7 - weekNum + 7) * 24 * 60 * 60 * 100082
      )83
      let startDate = `${fitstDate.getFullYear()}-${84
        fitstDate.getMonth() + 1 < 1085
          ? '0' + (fitstDate.getMonth() + 1)86
          : fitstDate.getMonth() + 187
      }-${88
        fitstDate.getDate() < 1089
          ? '0' + fitstDate.getDate()90

          : fitstDate.getDate()91
      }`92
      let endDate = `${lastDate.getFullYear()}-${93
        lastDate.getMonth() + 1 < 1094
          ? '0' + (lastDate.getMonth() + 1)95
          : lastDate.getMonth() + 196
      }-${97
        lastDate.getDate() < 10 ? '0' + lastDate.getDate() : lastDate.getDate()98
      }`99
    return [startDate, endDate]100
   }101
   const curDate = new Date()103
   var preDate = new Date(curDate.getTime() - 24*60*60*1000); // 前一天104
   var nextDate = new Date(curDate.getTime() + 24 * 60 * 60 * 1000) // 后一天105
  //  1 短时间，形如  (13:04:06)107
function isTime(str)108
{109
var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);110
if (a == null) {alert(' 输入的参数不是时间格式 '); return false;}111
if (a[1]>24 || a[3]>60 || a[4]>60)112
{113
alert(" 时间格式不对 ");114
return false115
}116
return true;117
}118
// 2. 短日期，形如  (2008-07-22)120
function strDateTime(str)121
{122
var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);123
if(r==null)return false;124
var d= new Date(r[1], r[3]-1, r[4]);125
return (d.getFullYear()==r[1]&&(d.getMonth()+1)==r[3]&&d.getDate()==r[4]);126
}127
// 3 长时间，形如  (2008-07-22 13:04:06)129

function strDateTime(str)130
{131
var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;132
var r = str.match(reg);133
if(r==null)return false;134
var d= new Date(r[1], r[3]-1,r[4],r[5],r[6],r[7]);135
return (d.getFullYear()==r[1]&&
(d.getMonth()+1)==r[3]&&d.getDate()==r[4]&&d.getHours()==r[5]&&d.getMinutes()==r[6]&&d.
getSeconds()==r[7]);
}137
getNowAddTreeFormatDate() {139
  var date = new Date();140
  date.setDate(date.getDate()+3);// 获取 3 天后的日期141
  var seperator1 = "-";142
  var seperator2 = ":";143
  var month = date.getMonth() + 1;144
  var monthStr=''145
  var day = date.getDate();146
  var dayStr=''147
  if (month >= 1 && month <= 9) {148
      monthStr = "0" + month.();149
  }else{150
    monthStr =  month.();151
  }152
  if (day >= 0 && day <= 9) {153
      dayStr = "0" + day.();154
  }else{155
      dayStr = day.();156
  }157
  var currentdate = date.toISOString(); //date.getFullYear() + seperator1 + month +
```
seperator1 + dayStr + 'T00:00:00+08:00'
```
          ;159
  return currentdate;160
}161
// 判断是不是今天

const isDay = (day)=>{2
  let todayDate = new Date().setHours(0, 0, 0, 0); // 把今天的日期时分秒设置为 00 ： 00 ： 00 ，
```
返回一个时间戳 ,
```
  let paramsDate = new Date(day).setHours(0, 0, 0, 0); // 给 new Date() 传入时间，并返回传入时间的时间戳
  return todayDate===paramsDate   // 时间戳一致就是今天
}
isTodayDate(time) {
    return new Date(time).toDateString() === new
```
Date().toDateString()
```
   },10
/**
* 获取某年某月天数
* @param {Date} date 年月  PS: 2022-03
*/
getMonthDay(date) {
let year = Number(date.slice(0, 4))
let month = Number(date.slice(5, 7))
let days = new Date(year, month, 0).getDate()
return days
   },
```

<a id="sec-7"></a>
## utils

> 来源：有道云笔记
> 原路径：`js/utils.md`

```
// 用 typeof 来判断是否是 number 类型  ,
// 但是如果为 NaN 会被认为也是 number 类型，
// 因此需要使用 isNaN 来排除 NaN 的情况。
function isNumber1(obj) {
    return typeof obj === 'number' && !isNaN(obj)
}
//isNaN(obj)   等价于 isFinite() 。
//Infinity 在 js 表示数字的无穷大 , 判断是否可用做数字的最佳方法则是 isFinite() ，
// 因为该方法会筛除掉 NaN 和 Infinity 两个关键字。
function isNumber2(obj) {
    return typeof obj === 'number' && isFinite(obj)
}
function isNumber3(obj) {
    return Object.prototype..call(obj) === '[object Number]' && !isNaN(obj)
}
// 方法四：据说这个方法是世界上最短的数字判断代码
function isNumber4(obj) {
    return obj === +obj
}
 // 方法五【推荐】：   使用正则来实现
 function isNumber(obj) {
  var reg = /^[0-9]+.?[0-9]*$/;
  return reg.test(obj)
}
  // 正整数
 const isPositiveInteger = (num) => /(^[0-9]\d*$)/.test(num)
```
1、判断字符串
function isString(obj) {return obj === obj+''  }
2、判断布尔类型

```
function isBoolean(obj) {  38
    return obj === !!obj  39
}40
```
版本41
```
/**42
       * @description: 版本号对比43
       * @param {*} version144
       * @param {*} version245
       * @return {*}如果 version1 > version2 ，返回1；46
                    如果 version1 < version2 ，返回-1，47
```
                    其他情况返回048
```
       */49
      compareVersion(version1, version2) {50
        const newVersion1 = `${version1}`.split('.').length < 3 ?
`${version1}`.concat('.0') : `${version1}`
        const newVersion2 = `${version2}`.split('.').length < 3 ?
`${version2}`.concat('.0') : `${version2}`
        // 计算版本号大小 , 转化大小53
        function toNum(a) {54
          const c = a.().split('.')55
          const num_place = ['', '0', '00', '000', '0000'],56
            r = num_place.reverse()57
          for (let i = 0; i < c.length; i++) {58
            const len = c[i].length59
            c[i] = r[len] + c[i]60
          }61
          return c.join('')62
        }63
        // 检测版本号是否需要更新65
        function checkPlugin(a, b) {66
          const numA = toNum(a)67
          const numB = toNum(b)68
          return numA > numB ? 1 : numA < numB ? -1 : 069
        }70
        return checkPlugin(newVersion1, newVersion2)71
      }72
```

<a id="sec-8"></a>
## 常用的前端JavaScript方法封装

> 来源：有道云笔记
> 原路径：`js/常用的前端JavaScript方法封装.md`

Java实验室 昨天
提高JSON的可读性
转自：小蘑菇
https://segmentfault.com/a/1190000039220666
1、输入一个值，返回其数据类型**
```
function type(para) {
    return Object.prototype.toString.call(para)
}
```
2、数组去重
```
function unique1(arr) {
    return [...new Set(arr)]
}

function unique2(arr) {
    var obj = {};
    return arr.filter(ele => {
        if (!obj[ele]) {
            obj[ele] = true;
            return true;
        }
    })
}

function unique3(arr) {
    var result = [];
```
我确定你以前用过JSON.stringify()。但是，你可能不使用它的一种方法是对JSON数据进行整齐
缩进。
让我们看看如何完成此任务。该JSON.stringify()方法接受两个可选参数：
替换功能，用于过滤显示的JSON。在这种情况下，可以是null，因为我们不需要它。
一个空格值，可以是所需空格的数目或字符串。在这种情况下，让我们使用制表符（'\t'）缩进
JSON对象以使其看起来不错：
```
const readableJSON = JSON.stringify({ a: 'A', b: 'B' }, null, '\t');
console.log(readableJSON

    arr.forEach(ele => {
        if (result.indexOf(ele) == -1) {
            result.push(ele)
        }
    })
    return result;
}
```
3、字符串去重
```
String.prototype.unique = function () {
    var obj = {},
        str = '',
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!obj[this[i]]) {
            str += this[i];
            obj[this[i]] = true;
        }
    }
    return str;
}
```

###### //去除连续的字符串
```
function uniq(str) {
    return str.replace(/(\w)\1+/g, '$1')
}
```
4、深拷贝 浅拷贝
```
//深克隆（深克隆不考虑函数）
function deepClone(obj, result) {
    var result = result || {};
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] == 'object' && obj[prop] !== null) {
                // 引用值(obj/array)且不为null
                if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {
                    // 对象
                    result[prop] = {};
                } else {

                    // 数组
                    result[prop] = [];
                }
                deepClone(obj[prop], result[prop])
    } else {
        // 原始值或func
        result[prop] = obj[prop]
    }
  }
}
return result;
}

// 深浅克隆是针对引用值
function deepClone(target) {
    if (typeof (target) !== 'object') {
        return target;
    }
    var result;
    if (Object.prototype.toString.call(target) == '[object Array]') {
        // 数组
        result = []
    } else {
        // 对象
        result = {};
    }
    for (var prop in target) {
        if (target.hasOwnProperty(prop)) {
            result[prop] = deepClone(target[prop])
        }
    }
    return result;
}
// 无法复制函数
var o1 = jsON.parse(jsON.stringify(obj1));
```
5、reverse底层原理和扩展
```
// 改变原数组

Array.prototype.myReverse = function () {
    var len = this.length;
    for (var i = 0; i < len; i++) {
        var temp = this[i];
        this[i] = this[len - 1 - i];
        this[len - 1 - i] = temp;
    }
    return this;
}
```
6、圣杯模式的继承
```
function inherit(Target, Origin) {
    function F() {};
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    // 最终的原型指向
    Target.prop.uber = Origin.prototype;
}
```
7、找出字符串中第一次只出现一次的字母
```
String.prototype.firstAppear = function () {
    var obj = {},
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (obj[this[i]]) {
            obj[this[i]]++;
        } else {
            obj[this[i]] = 1;
        }
    }
    for (var prop in obj) {
       if (obj[prop] == 1) {
         return prop;
       }
    }
}
```
8、找元素的第n级父元素
```
function parents(ele, n) {

    while (ele && n) {
        ele = ele.parentElement ? ele.parentElement : ele.parentNode;
        n--;
    }
    return ele;
}
```
9、 返回元素的第n个兄弟节点
```
function retSibling(e, n) {
    while (e && n) {
        if (n > 0) {
            if (e.nextElementSibling) {
                e = e.nextElementSibling;
            } else {
                for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
            }
            n--;
        } else {
            if (e.previousElementSibling) {
                e = e.previousElementSibling;
            } else {
                for (e = e.previousElementSibling; e && e.nodeType !== 1; e = e.previousElementSi
bling);
            }
            n++;
        }
    }
    return e;
}
```
10、封装mychildren，解决浏览器的兼容问题
```
function myChildren(e) {
    var children = e.childNodes,
        arr = [],
        len = children.length;
    for (var i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            arr.push(children[i])
        }

    }
    return arr;
}
```
11、判断元素有没有子元素
```
function hasChildren(e) {
    var children = e.childNodes,
        len = children.length;
    for (var i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            return true;
        }
    }
    return false;
}
```
12、我一个元素插入到另一个元素的后面
```
Element.prototype.insertAfter = function (target, elen) {
    var nextElen = elen.nextElenmentSibling;
    if (nextElen == null) {
        this.appendChild(target);
    } else {
        this.insertBefore(target, nextElen);
    }
}
```
13、返回当前的时间（年月日时分秒）
```
function getDateTime() {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours() + 1,
        minute = date.getMinutes(),
        second = date.getSeconds();
        month = checkTime(month);
        day = checkTime(day);
        hour = checkTime(hour);
        minute = checkTime(minute);
        second = checkTime(second);

     function checkTime(i) {
        if (i < 10) {
                i = "0" + i;
       }
      return i;
    }
    return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + secon
```
d + "秒"
}
14、获得滚动条的滚动距离
```
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
```
15、获得视口的尺寸
```
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight

            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}
```
16、获取任一元素的任意属性
```
function getStyle(elem, prop) {
    return window.getComputedStyle ? window.getComputedStyle(elem, null)
[prop] : elem.currentStyle[prop]
}
```
17、绑定事件的兼容代码
```
function addEvent(elem, type, handle) {
    if (elem.addEventListener) { //非ie和非ie9
        elem.addEventListener(type, handle, false);
    } else if (elem.attachEvent) { //ie6到ie8
        elem.attachEvent('on' + type, function () {
            handle.call(elem);
        })
    } else {
        elem['on' + type] = handle;
    }
}
```
18、解绑事件
```
function removeEvent(elem, type, handle) {
    if (elem.removeEventListener) { //非ie和非ie9
        elem.removeEventListener(type, handle, false);
    } else if (elem.detachEvent) { //ie6到ie8
        elem.detachEvent('on' + type, handle);
    } else {
        elem['on' + type] = null;
    }
}
```

19、取消冒泡的兼容代码
```
function stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}
```
20、检验字符串是否是回文
```
function isPalina(str) {
    if (Object.prototype.toString.call(str) !== '[object String]') {
        return false;
    }
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] != str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
```
21、检验字符串是否是回文
```
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    console.log(str)
    return (str == str.split('').reverse().join(''))
}
```
22、兼容getElementsByClassName方法
Element.prototype.getElementsByClassName = Document.prototype.getElementsByClassNam
```
e = function (_className) {
    var allDomArray = document.getElementsByTagName('*');
    var lastDomArray = [];
    function trimSpace(strClass) {
        var reg = /\s+/g;
        return strClass.replace(reg, ' ').trim()
    }
    for (var i = 0; i < allDomArray.length; i++) {

        var classArray = trimSpace(allDomArray[i].className).split(' ');
        for (var j = 0; j < classArray.length; j++) {
            if (classArray[j] == _className) {
                lastDomArray.push(allDomArray[i]);
                break;
            }
        }
    }
    return lastDomArray;
}
```
23、运动函数
```
function animate(obj, json, callback) {
    clearInterval(obj.timer);
    var speed,
        current;
    obj.timer = setInterval(function () {
        var lock = true;
        for (var prop in json) {
            if (prop == 'opacity') {
                current = parseFloat(window.getComputedStyle(obj, null)[prop]) * 100;
            } else {
                current = parseInt(window.getComputedStyle(obj, null)[prop]);
            }
            speed = (json[prop] - current) / 7;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (prop == 'opacity') {
                obj.style[prop] = (current + speed) / 100;
            } else {
                obj.style[prop] = current + speed + 'px';
            }
            if (current != json[prop]) {
                lock = false;
            }
        }
        if (lock) {
            clearInterval(obj.timer);

            typeof callback == 'function' ? callback() : '';
        }
    }, 30)
}
```
24、弹性运动
```
function ElasticMovement(obj, target) {
    clearInterval(obj.timer);
    var iSpeed = 40,
        a, u = 0.8;
    obj.timer = setInterval(function () {
        a = (target - obj.offsetLeft) / 8;
        iSpeed = iSpeed + a;
        iSpeed = iSpeed * u;
        if (Math.abs(iSpeed) <= 1 && Math.abs(a) <= 1) {
            console.log('over')
            clearInterval(obj.timer);
            obj.style.left = target + 'px';
        } else {
            obj.style.left = obj.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```
25、封装自己的forEach方法
```
Array.prototype.myForEach = function (func, obj) {
    var len = this.length;
    var _this = arguments[1] ? arguments[1] : window;
    // var _this=arguments[1]||window;
    for (var i = 0; i < len; i++) {
        func.call(_this, this[i], i, this)
    }
}
```
26、封装自己的filter方法
```
Array.prototype.myFilter = function (func, obj) {
    var len = this.length;
    var arr = [];
    var _this = arguments[1] || window;
    for (var i = 0; i < len; i++) {

        func.call(_this, this[i], i, this) && arr.push(this[i]);
    }
    return arr;
}
```
27、数组map方法
```
Array.prototype.myMap = function (func) {
    var arr = [];
    var len = this.length;
    var _this = arguments[1] || window;
    for (var i = 0; i < len; i++) {
        arr.push(func.call(_this, this[i], i, this));
    }
    return arr;
}
```
28、数组every方法
```
Array.prototype.myEvery = function (func) {
    var flag = true;
    var len = this.length;
    var _this = arguments[1] || window;
    for (var i = 0; i < len; i++) {
        if (func.apply(_this, [this[i], i, this]) == false) {
            flag = false;
            break;
        }
    }
    return flag;
}
```
29、数组reduce方法
```
Array.prototype.myReduce = function (func, initialValue) {
    var len = this.length,
        nextValue,
        i;
    if (!initialValue) {
        // 没有传第二个参数
        nextValue = this[0];
        i = 1;
    } else {

        // 传了第二个参数
        nextValue = initialValue;
        i = 0;
    }
    for (; i < len; i++) {
        nextValue = func(nextValue, this[i], i, this);
    }
    return nextValue;
}
```
30、获取url中的参数
```
function getWindonHref() {
    var sHref = window.location.href;
    var args = sHref.split('?');
    if (args[0] === sHref) {
        return '';
    }
    var hrefarr = args[1].split('#')[0].split('&');
    var obj = {};
    for (var i = 0; i < hrefarr.length; i++) {
        hrefarr[i] = hrefarr[i].split('=');
        obj[hrefarr[i][0]] = hrefarr[i][1];
    }
    return obj;
}
```
31、数组排序
```
// 快排 [left] + min + [right]
function quickArr(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [],
        right = [];
    var pIndex = Math.floor(arr.length / 2);
    var p = arr.splice(pIndex, 1)[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= p) {
            left.push(arr[i]);

        } else {
            right.push(arr[i]);
        }
    }
    // 递归
    return quickArr(left).concat([p], quickArr(right));
}

// 冒泡
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
```
32、遍历Dom树
```
// 给定页面上的DOM元素,将访问元素本身及其所有后代(不仅仅是它的直接子元素)

// 对于每个访问的元素，函数讲元素传递给提供的回调函数
function traverse(element, callback) {
    callback(element);
    var list = element.children;
    for (var i = 0; i < list.length; i++) {
        traverse(list[i], callback);
    }
}
```
33、原生js封装ajax
```
function ajax(method, url, callback, data, flag) {
    var xhr;
    flag = flag || true;
    method = method.toUpperCase();
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(2)
            callback(xhr.responseText);
        }
    }

    if (method == 'GET') {
        var date = new Date(),
        timer = date.getTime();
        xhr.open('GET', url + '?' + data + '&timer' + timer, flag);
        xhr.send()
        } else if (method == 'POST') {
        xhr.open('POST', url, flag);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
}
```
34、异步加载script

```
function loadScript(url, callback) {
    var oscript = document.createElement('script');
    if (oscript.readyState) { // ie8及以下版本
        oscript.onreadystatechange = function () {
            if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
                callback();
            }
        }
    } else {
        oscript.onload = function () {
            callback()
        };
    }
    oscript.src = url;
    document.body.appendChild(oscript);
}
```
35、cookie管理
```
var cookie = {
    set: function (name, value, time) {
        document.cookie = name + '=' + value + '; max-age=' + time;
        return this;
    },
    remove: function (name) {
        return this.setCookie(name, '', -1);
    },
    get: function (name, callback) {
        var allCookieArr = document.cookie.split('; ');
        for (var i = 0; i < allCookieArr.length; i++) {
            var itemCookieArr = allCookieArr[i].split('=');
            if (itemCookieArr[0] === name) {
                return itemCookieArr[1]
            }
        }
        return undefined;
    }
}
```
36、实现bind()方法

```
Function.prototype.myBind = function (target) {
    var target = target || window;
    var _args1 = [].slice.call(arguments, 1);
    var self = this;
    var temp = function () {};
    var F = function () {
        var _args2 = [].slice.call(arguments, 0);
        var parasArr = _args1.concat(_args2);
        return self.apply(this instanceof temp ? this : target, parasArr)
    }
    temp.prototype = self.prototype;
    F.prototype = new temp();
    return F;
}
```
37、实现call()方法
```
Function.prototype.myCall = function () {
    var ctx = arguments[0] || window;
    ctx.fn = this;
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
        args.push(arguments[i])
    }
    var result = ctx.fn(...args);
    delete ctx.fn;
    return result;
}
```
38、实现apply()方法
```
Function.prototype.myApply = function () {
    var ctx = arguments[0] || window;
    ctx.fn = this;
    if (!arguments[1]) {
        var result = ctx.fn();
        delete ctx.fn;
        return result;
    }
    var result = ctx.fn(...arguments[1]);
    delete ctx.fn;

    return result;
}
```
39、防抖
```
function debounce(handle, delay) {
    var timer = null;
    return function () {
        var _self = this,
            _args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handle.apply(_self, _args)
        }, delay)
    }
}
```
40、节流
```
function throttle(handler, wait) {
    var lastTime = 0;
    return function (e) {
        var nowTime = new Date().getTime();
        if (nowTime - lastTime > wait) {
            handler.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}
```
41、requestAnimFrame兼容性方法
```
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
```
42、cancelAnimFrame兼容性方法
```
window.cancelAnimFrame = (function () {
    return window.cancelAnimationFrame ||

        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        };
})();
```
43、jsonp底层方法
```
function jsonp(url, callback) {
    var oscript = document.createElement('script');
    if (oscript.readyState) { // ie8及以下版本
        oscript.onreadystatechange = function () {
            if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
                callback();
            }
        }
    } else {
        oscript.onload = function () {
            callback()
        };
    }
    oscript.src = url;
    document.body.appendChild(oscript);
}
```
44、获取url上的参数
```
function getUrlParam(sUrl, sKey) {
    var result = {};
    sUrl.replace(/(\w+)=(\w+)(?=[&|#])/g, function (ele, key, val) {
        if (!result[key]) {
            result[key] = val;
        } else {
            var temp = result[key];
            result[key] = [].concat(temp, val);
        }
    })
    if (!sKey) {
        return result;
    } else {

        return result[sKey] || '';
    }
}
```
45、格式化时间
```
function formatDate(t, str) {
    var obj = {
        yyyy: t.getFullYear(),
        yy: ("" + t.getFullYear()).slice(-2),
        M: t.getMonth() + 1,
        MM: ("0" + (t.getMonth() + 1)).slice(-2),
        d: t.getDate(),
        dd: ("0" + t.getDate()).slice(-2),
        H: t.getHours(),
        HH: ("0" + t.getHours()).slice(-2),
        h: t.getHours() % 12,
        hh: ("0" + t.getHours() % 12).slice(-2),
        m: t.getMinutes(),
        mm: ("0" + t.getMinutes()).slice(-2),
        s: t.getSeconds(),
        ss: ("0" + t.getSeconds()).slice(-2),
        w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    };
    return str.replace(/([a-z]+)/ig, function ($1) {
        return obj[$1]
    });
}
```
46、验证邮箱的正则表达式
```
function isAvailableEmail(sEmail) {
    var reg = /^([\w+\.])+@\w+([.]\w+)+$/
    return reg.test(sEmail)
}
```
47、函数柯里化
//是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余
下的参数且返回结果的新函数的技术

```
function curryIt(fn) {
    var length = fn.length,

        args = [];
    var result = function (arg) {
        args.push(arg);
        length--;
        if (length <= 0) {
            return fn.apply(this, args);
        } else {
            return result;
        }
    }
    return result;
}
```
48、大数相加
```
function sumBigNumber(a, b) {
    var res = '', //结果
        temp = 0; //按位加的结果及进位
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || temp) {
        //~~按位非 1.类型转换，转换成数字 2.~~undefined==0
        temp += ~~a.pop() + ~~b.pop();
        res = (temp % 10) + res;
        temp = temp > 9;
    }
    return res.replace(/^0+/, '');
}
```
49、单例模式
```
function getSingle(func) {
    var result;
    return function () {
        if (!result) {
            result = new func(arguments);
        }
        return result;
    }
}
```

<a id="sec-9"></a>
## 过滤掉空的数组

> 来源：有道云笔记
> 原路径：`js/过滤掉空的数组.md`

```
function filterListEmpty(arr, keyName = 'list') {
            if (!Array.isArray(arr)) {
                return arr
            } else {
                return arr.filter((v) => {
                    if (v[keyName]) {
                        v[keyName] = this.filterListEmpty(v[keyName])
                    }
                    return v[keyName] ? v[keyName].length : true
                })
            }
        }
```

<a id="sec-10"></a>
## index(2)

> 来源：myBaseFile
> 原路径：`js/index.md`

记录js基础学习和收藏一些好玩的实现方式

canvas-confetti按需五彩纸屑枪
地址：<https://www.kirilv.com/canvas-confetti>

算法
<https://visualgo.net/zh/>
#

js 甘特图
<https://github.com/DHTMLX/gantt>

svg 签名动画<https://gitee.com/yaoyao0822/html-css-demo> ​

siteloader
github 仓库地址<https://github.com/Yinglinhan/siteloader> npm 包地址<https://www.npmjs.com/package/siteloader>

BV1zp4y1N7AP 未经作者授权禁止转载 r 大文件分片上传示例：<https://github.com/lewton/bilibili-public/tree/main/JavaScript/2-大文件分片上传示例另外注明：大文件分片上传示例主要是为了描述前端代码思路。如果还需要实现断点续传，可以考虑前端会在每个分片上传前，先检查后端是否已经存在相同分片，如果存在，则跳过上传该分片，从而实现断点续传。同时，在文件上传成功后，服务器会删除所有分片文件以释放存储空间。断点续传示例：https://github.com/lewton/bilibili-public/tree/main/JavaScript/2-大文件分片上传示例（断点续传）大文件上传前端前端开发文件上传>
​​
盘点 10 个基于 Canvas 的[开源项目](https://so.csdn.net/so/search?q=%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE&spm=1001.2101.3001.7020)，旨在为提供开发灵感和思路，以便更好地探索并应用 Canvas 技术！

##### canvas-editor

canvas-editor是一个基于canvas/svg的[富文本编辑器](https://so.csdn.net/so/search?q=%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8&spm=1001.2101.3001.7020)，类似于 word。其具有以下特点：

- **所见即所得**：类word可分页，所见即所得
- **轻量的数据结构**：一段JSON即可呈现复杂样式
- **丰富的功能**：支持常见富文本操作、表格、水印、控件、公式等
- **使用方便**：官方发布核心npm包，菜单栏、工具栏可自行维护
- **灵活的开发机制**：通过接口可获取生命周期、事件回调、自定义右键菜单、快捷键等
- **完全类型化的API**：灵活的 API 和完整的 TypeScript 类型

![](https://img-blog.csdnimg.cn/img_convert/ed6fe93250e0a6a1f93de57d6ef4e0ab.webp?x-oss-process=image/format,png)

**Github：**

##### lucky-canvas

基于 TS + Canvas 开发的【大转盘 / [九宫格](https://so.csdn.net/so/search?q=%E4%B9%9D%E5%AE%AB%E6%A0%BC&spm=1001.2101.3001.7020) / 老虎机】抽奖插件，一套源码适配多端框架 JS / Vue / React / Taro / UniApp / 微信小程序等，奖品 / 文字 / 图片 / 颜色 / 按钮均可配置，支持同步 / 异步抽奖，概率前 / 后端可控，自动根据 dpr 调整清晰度适配移动端。

![](https://img-blog.csdnimg.cn/img_convert/b93397782f6af5a9414f96a6047f84b8.webp?x-oss-process=image/format,png)

**Github：**

##### Excalidraw

Excalidraw是一款开源的在线白板工具，主要用于创建简单直观的图形和草图，支持共享和协作。以下是 Excalidraw 的主要特点：

- 简单易用：具有直观简单的界面和操作方式，用户可以轻松创建和编辑图形，并实现各种设计需求。
- 实时协作：支持多人实时协作，用户可以与其他人一起编辑和讨论，在线完成协作任务。
- 自由绘制和对象管理：提供了自由绘制、文本框、箭头、线段、矩形、椭圆、图标等多种基本对象，并支持对这些对象进行移动、复制、旋转、缩放、对齐等操作，帮助用户实现更为精细的设计。
- 高度灵活性：支持导出为SVG、PNG、Clipboard等多种格式，方便用户进行分享和保存。

![](https://img-blog.csdnimg.cn/img_convert/c2390b178b26995c4816214455c7ae5c.webp?x-oss-process=image/format,png)

**Github：**

##### fireworks-js

fireworks-js 是一个基于 Canvas 的动画库，用于在网页上制作烟花特效。该库的特点如下：

- 轻量级：fireworks-js 体积小，不依赖其他库或框架，易于集成。
- 易于使用：只需几行代码就可以创建出炫目的烟花特效，具有良好的可定制性和可扩展性。
- 动画效果逼真：fireworks-js 采用粒子系统实现烟花特效，能够模拟出逼真的爆炸、飞溅和星光等效果。
- 浏览器兼容性良好：可以在主流的现代浏览器上运行，支持多种设备和分辨率，包括移动端。

该项目提供了多种框架的实现：

![](https://img-blog.csdnimg.cn/img_convert/4a301c22c5dae816bc414f6aec5efe75.webp?x-oss-process=image/format,png)

**Github：**

##### Luckysheet

Luckysheet ，一款纯前端基于 Canvas 的类似 excel 的在线表格，功能强大、配置简单、完全开源。其具有以下功能：

- **格式**：样式、条件格式、文本对齐和旋转、文本截断、溢出、自动换行、多种数据类型、单元格分割样式
- **单元格**：拖放、填充柄、多选、查找和替换、定位、合并单元格、数据验证
- **行和列**：隐藏、插入、删除行或列、冻结和拆分文本
- **操作**：撤消、重做、复制、粘贴、剪切、热键、格式刷、拖放选择
- **公式和函数**：内置、远程和自定义公式
- **表**：过滤、排序
- **增强功能**：数据透视表、图表、评论、协同编辑、插入图片、矩阵计算、截图、复制为其他格式、EXCEL导入导出等。

![](https://img-blog.csdnimg.cn/img_convert/e1f91d023f3efe0e7f2e8be3b686ab43.webp?x-oss-process=image/format,png)

**Github：**

##### x-spreadsheet

x-spreadsheet 是一个基于 Web(es6) canvas 构建的轻量级 Excel 开发库。其具有以下特点：

- 轻量级：完整功能，包含所有插件。代码打包后只不到 200kb
- 易于使用：如果只需要一些简单的功能可以零配置
- 数据驱动：调整数据非常的简单快捷

![](https://img-blog.csdnimg.cn/img_convert/d951150c33a8da1ae19e996105b95870.webp?x-oss-process=image/format,png)

**Github：**

##### rough

Rough.js 是一个轻量级的（大约 8k），基于 Canvas 的可以绘制出粗略的手绘风格的图形库。该库提供绘制线条、曲线、弧线、多边形、圆形和椭圆的基础能力，同时支持绘制 SVG 路径。除此之外，Rough.js 还提供了大量的可自定义选项，可以调整线宽、线条颜色、填充颜色、字体样式、背景颜色等，以使图形更加个性化。

![](https://img-blog.csdnimg.cn/img_convert/6109ef5af060b0237fdefdaf9b65fb17.webp?x-oss-process=image/format,png)

**Github：**

##### Signature Pad

Signature Pad 是一个基于 Canvas 实现的签名库，用于绘制签名。它可以在所有现代桌面和移动浏览器中使用，不依赖于任何外部库。Signature Pad提供了许多可自定义的选项，如笔画颜色、粗细、背景色、画布大小、签名格式等，可以轻松实现不同的签名风格和功能。

![](https://img-blog.csdnimg.cn/img_convert/b2ae22023faacc7500c1e37f6173ad76.webp?x-oss-process=image/format,png)

**Github：**

##### canvas-confetti

canvas-confetti 是一个基于 Canvas 的库，用于在 Web 页面中实现炫酷的彩色纸屑动画效果。它实现了高性能、流畅的纸屑动画效果，同时兼容各种现代浏览器。提供了许多可自定义的选项，如纸屑颜色、形状、数量、速度、角度、发射器位置等，可以轻松实现不同的纸屑效果。并支持多种触发方式，如点击按钮、滚动页面、定时触发等，可根据需求进行定制。

![](https://img-blog.csdnimg.cn/img_convert/f69e0f53606f6aeea4fd852c4c994e1e.webp?x-oss-process=image/format,png)

**Github：**

##### html2canvas

html2canvas是一个JavaScript库，用于将HTML页面中的任何DOM元素（包括画布、图片、视频等）转换为Canvas图像，从而实现截屏、生成PDF或者图片等功能。以下是html2canvas的主要特点：

- 简单易用：可以快速、简单地生成Canvas图像，不需要依赖其他库，在页面中直接引用即可。
- 浏览器兼容性良好：支持各种现代浏览器，包括Chrome、Firefox、Safari、Edge和Opera等主流浏览器，并且可以在桌面和移动设备上使用。
- 配置灵活性高：提供了许多选项，如截图区域、画布大小、背景色、文字渲染等，用户可以根据具体需求自由配置。
- 支持生成PDF、图片等多种格式：可以将Canvas图像导出为PDF、PNG、JPEG等多种格式，方便用户进行分享和保存等操作。

![](https://img-blog.csdnimg.cn/img_convert/266dbf7dc00d6958bc7e82f478bbff14.webp?x-oss-process=image/format,png)

**Github：**

#### QRCanvas

QRCanvas 是一个基于 canvas 的 JavaScript 二维码生成工具。其具有以下特点：

- 仅依赖 canvas，兼容性好
- 简单，仅仅是需要一些数据的配置
- 定制化功能丰富
- 支持 Node.js
- 方便在 React 和 Vue 中使用
- 支持所有主流的浏览器

##### 图形处理库

图形绘制是Canvas中最基本的内容，但是Canvas本身提供的api比较基础，开发起来低效。而且也缺少完整的事件系统、区域监测、缓存等等。下面让我们来看几款高效的图形处理库吧。

###### Konva

简介：`Konva`是一个 HTML5 Canvas JavaScript 框架, 通过扩展 Canvas 的 2D Context 让桌面端和移动端Canvas支持交互性，使其支持高性能动画、过渡、节点嵌套、分层、过滤、缓存、事件处理等等。Konva传送门[3]

除上述之外，文档相对友好，但也仅仅是相对于同类库的文档友好那么一滴滴，社区有维护一个中文文档。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

konva3.gif

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

konva2.gif

###### fabric.js

简介：**Fabric.js**是一个可以轻松处理 HTML5 Canvas元素的框架，使得Canvas元素支持**交互式对象模型**，同时也是一个**SVG-to-Canvas**和**Canvas-to-SVG**的解析器 fabric.js传送门[4]

fabricjs是和konva同类型但是比konva更老牌的一个的Canvas库，目前github上Star数![0fdf6f10a071e0668db7588c881dc4e5.png](https://i-blog.csdnimg.cn/blog_migrate/9fad19c2e6cf7806b2f0c2ea863df190.png)

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

fabricjs2.gif

更多示例[5]如下图所示：

![4a154673d2c4bf864fcf946f348de64a.png](https://i-blog.csdnimg.cn/blog_migrate/fb9b7fc78baaa28947d95245d4bf0c38.png)

image.png

更多关于Canvas图形处理的资源，请访问awesome-canvas[6]，项目地址 github.com/chinaBerg/a…[7]

##### 图像编辑

市面上图像编辑的软件有很多，像大家所熟知的`PS、sketch、axure、激萌、剪映`等等。那么如果我们想开发类似的软件，有没有可以使用的库或者参考的开源软件呢？

###### miniPaint

简介：miniPaint[8] [在线演示[9]] - 在线版的PS。PS这款软件大家都不陌生，web版本的如何呢？请看下图：

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

mini-paint.gif

###### DarkroomJS

简介：DarkroomJS[10] [在线演示[11]] - 基于Fabricjs的浏览器端可扩展的图像编辑工具

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

pintura-image.gif

###### fabric-brush

简介：fabric-brush[12] [在线演示[13]] - 基于Fabric.js的Canvas笔刷工具

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

brush.gif

###### fabricjs-image-editor-origin

简介：fabricjs-image-editor-origin[14] [在线演示[15]] - Fabricjs图像编辑器

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

fabricjs-demo.gif

###### react-sketch

简介：react-sketch[16] [在线演示[17]] - 基于React、Fabricjs的素描应用

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

sketch.gif

###### glitch-canvas

简介：glitch-canvas[18] [在线演示[19]] - 给画布元素添加故障效果

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

jpg-glitch.gif

###### animockup

简介：animockup[20] [在线演示[21]] - 在浏览器中创建动画模型，并导出为视频或动画GIF

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

animo.gif

更多关于Canvas图像编辑/画板的资源，请访问awesome-canvas[22]，项目地址 github.com/chinaBerg/a…[23]

##### 物理引擎

物理引擎使用质量、速度、摩擦力和空气阻力等变量，模拟了一个近似真实的物理系统，为刚性物体赋予真实的物理效果，比如重力、旋转和碰撞等效果，让物体的行为表现的更加趋向真实。例如，守望先锋的英雄在跳起时，系统所设置的重力参数就决定了他能跳多高，下落时的速度有多快，子弹的飞行轨迹等等。

###### matter.js

简介：**matter.js**是一个用于 Web 的 JavaScript 2D 物理引擎库 matter.js传送门[24]

matter.js[25]相较于老牌的 Box2D 引擎库更为轻量级（压缩版仅有 87 KB），并且在性能和功能方面也不逊色。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

matter.gif

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

matter3.gif

更多关于Canvas物理引擎的资源，请访问awesome-canvas[26]，项目地址 github.com/chinaBerg/a…[27]

##### 流程图/组织图/图编辑等

工业软件开发，一直是软件领域复杂而又重要的一环。其对技术人的要求要是更高的，下面看看有哪些可以辅助我们快速开发的库或者参考的场景吧。

###### gojs

简介：**gojs**是一款可以非常方便的开发交互式流程图、组织结构图、设计工具、规划工具、可视化语言的JavaScript图表库。gojs.js传送门[28]

- GoJS用自定义模板和布局组件简化了节点、链接和分组。

- 给用户交互提供了许多先进的功能，如拖拽、复制、粘贴、文本编辑、工具提示、上下文菜单、自动布局、模板、数据绑定和模型、事务状态和撤销管理、调色板、概述、事件处理程序、命令和自定义操作的扩展工具系统。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

gojs.gif

文档中提供了大量的demo[29]可供参考，基本对于常见的图编辑程序做到了全覆盖。

![df4bfa6beeedc7d5832950e8ac0c3024.png](https://i-blog.csdnimg.cn/blog_migrate/172b58779bad14855d5d1efdf8a87aae.png)

image.png

###### butterfly

简介：butterfly[30] [在线演示[31]] 一个基于JS的数据驱动的节点式编排组件库，同时适用于React/Vue2组件。

- 丰富的DEMO，开箱即用

- 全方位管理画布，开发者只需要更专注定制化的需求

- 利用DOM/REACT/VUE来定制元素；灵活性，可塑性，拓展性优秀

- 提供了中文文档，这点对英文不好的小伙伴很Nice

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

butterfly2.gif

###### wireflow

简介：wireflow[32] [在线演示[33]] 用户流程图实时协作工具。

- Wireflow 有超过 100 种自定义构建图形/卡可供使用，涵盖了大多数 Web 元素、交互和使用案例。

- Wireflow 考虑到了协作。您可以邀请您的同事和他们一起实时设计下一个项目的用户流程。

- 它具有内置的实时聊天功能，让您能够与您的队友进行交流，并且在您实时协作时仍然在同一个应用程序中。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

wireflow.gif

###### flowy

简介：Flowy[34] [在线演示[35]] - 用于创建流程图的最小javascript库。使创建具有流程图功能的 WebApp 成为一项非常简单的任务。通可以在几分钟内构建自动化软件、思维导图工具或简单的编程平台。

- 响应式拖放、自动捕捉、自动滚动

- 块重排、删除块、自动块居中

- 条件捕捉、条件块移除、无依赖项

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

flowy.gif

###### Workflow Designer

简介：Workflow Designer[36] [在线示例[37]] - 基于G6和React的可视化流程编辑器。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

wfd.gif

###### web-pdm

简介：web-pdm[38] [在线示例[39]] - 用G6做的ER图工具，最终目标是想做成在线版的powerdesigner.

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

xyz.gif

###### X-Flowchart-Vue

简介：X-Flowchart-Vue[40] [在线演示[41]] - 基于G6和Vue的可视化图形编辑器。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

x-flowchart.gif

###### OrgChart

简介：OrgChart[42] [在线演示[43]] - 简单直接的组织图插件

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

origin.gif

###### welabx-g6

简介：welabx-g6[44] [在线示例[45]] - 基于G6和Vue的流程图编辑器。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

welabx.gif

更多关于Canvas图编辑的资源，请访问awesome-canvas[46]，项目地址 github.com/chinaBerg/a…[47]

##### 全景图/AR/VR

5g的普及、虚拟现实/增强现实落地、元宇宙的火热......似乎让Canvas再度推上了技术的顶峰。下面让我来看看开发这些场景常见的Canvas库吧。

###### Pannellum

简介：Pannellum[48] [在线演示[49]] - 轻量、免费、开源的web全景查看器。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

pannelum.gif

###### Panolens.js

简介：Panolens.js[50] [在线演示[51]] - Panolens.js基于Three.JS，主要研究领域是全景、虚拟现实和潜在的增强现实。

###### JS-Cloudimage-360-View

简介：JS-Cloudimage-360-View[52] [在线演示[53]] 一个简单的、交互式的资源，可以用来提供您的产品的虚拟游览。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

cloud-image.gif

###### A-Frame

简介：A-Frame[54] [在线演示[55]] A-Frame 除了帮助您构建 360 度媒体播放器外，它还提供了许多附加功能。其他功能可帮助您增强网站的虚拟现实体验。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

aframe.gif

**更多关于Canvas全景图/AR/VR的资源，请访问Github[56]项目地址awesome-canvas[57]。**

##### 3D库

###### three.js

简介：three.js[58] [在线演示[59]] - 创建易于使用、轻量级、跨浏览器的通用3d js库。three.js就不多介绍了，大家想必都很熟悉。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

three.gif

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

three2.gif

###### zdog

简介：zdog[60] [在线演示[61]] - 基于canvas和SVG设计师友好的伪3D引擎

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

zdog.gif

###### seen.js

简介：seen[62] [在线演示[63]] - 使用SVG或Canvas渲染3D场景。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

seen.gif

###### Oimo.js

简介：Oimo.js[64] [在线演示[65]] - 轻量级的JS 3D物理引擎。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

oimo.gif

###### phoria.js

简介：phoria.js[66] [在线演示[67]] - 用于在 HTML5 画布 2D 渲染器上进行简单 3D 图形和可视化的 JavaScript 库。它不使用 WebGL。适用于所有 HTML5 浏览器，包括桌面、iOS 和 Android。

![outside_default.png](https://i-blog.csdnimg.cn/blog_migrate/35b9026e4bda3df223cecc228e5e9313.png)

phoria.gif

更多关于Canvas 3D的资源，请访问awesome-canvas[68]，项目地址 github.com/chinaBerg/a…[69]

vue3 three.js 3D编辑器
- **Astral 3D Editor Github 地址**：`https://github.com/mlt131220/Astral3DEditor`
- **Astral 3D Editor 在线编辑器**：`https://editor.astraljs.com/#/`
- **Astral 3D Editor 官方文档**：`http://editor-doc.astraljs.com/

**弹幕工具库danmu**

- **文档：** https://imtaotao.github.io/danmu/document/zh/
- **github：** https://github.com/imtaotao/danmu?tab=readme-ov-file
- **在线demo地址：** https://imtaotao.github.io/danmu/

<a id="sec-11"></a>
## imgAdd() {

> 来源：有道云笔记
> 原路径：`imgAdd() {.md`

```
// 选择图片
wx.chooseImage({
count: this.fileNum, // 自定义数据
// sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
// sizeType: 'original', // 直接写固定值 原图 上方是显示两个，底下是一个
sourceType: this.sourceTypeList, // 动态显示
success: (res) => {
console.log('tempFiles', res)
console.log('size', res.tempFiles[0].size/1024/1024);
if (this.compress && (res.tempFiles[0].size / 1024 > 1025)) { //设置了需要压缩 并且 文件大于
```
1M，进行压缩上传
```
this.imgCompress(res.tempFilePaths);
} else {
this.imgUpload(res.tempFilePaths);
}
}
});
},
// 图片上传
uni.saveImageToPhotosAlbum({ // 导出图片到
```
本地，以便查看压缩大小是否正确。
 filePath: result,
```
 success: () => {
 console.log('save success');
 },
 fail: (err) => {
 console.log(err);
 }
 });

imgUpload(tempFilePaths) {
uni.showLoading({
```
title: '上传中'
```
});
console.log('tempFilePaths',tempFilePaths)
let uploadImgs = [];
tempFilePaths.forEach((item, index) => {
uploadImgs.push(new Promise((resolve, reject) => {
const uploadTask = uni.uploadFile({
url: this.baseUrl, //仅为示例，非真实的接口地址
```
method:"POST",
filePath: item,
name: 'file',
fileType: 'image',
```
// formData: this.formData,
// header: this.headers,
success: (uploadFileRes) => {
console.log("uploadFileRes",uploadFileRes);
resolve(uploadFileRes);
},
fail: (err) => {
console.log(err);
reject(err);
},
complete: () => {
}
});
}))
})
Promise.all(uploadImgs) //执行所有需请求的接口
.then((results) => {
uni.hideLoading();
})
.catch((res, object) => {
uni.hideLoading();
});
},

//图片压缩
imgCompress(tempFilePaths) {
uni.showLoading({
```
title: '压缩中...'
```
});
let compressImgs = [];
let results = [];
tempFilePaths.forEach((item, index) => {
console.log('item', item)
compressImgs.push(new Promise((resolve, reject) => {
uni.compressImage({
```
src: item,
```
quality: 60, // 仅对jpg有效
success: res => {
console.log('compressImage', res.tempFilePath)
results.push(res.tempFilePath);
resolve(res.tempFilePath);
},
fail: (err) => {
reject(err);
},
complete: () => {
}
})
}))
})
Promise.all(compressImgs) //执行所有需请求的接口
.then((results) => {
uni.hideLoading();
this.imgUpload(results);
})
.catch((res, object) => {
uni.hideLoading();
});
},
```

<a id="sec-12"></a>
## imgl{

> 来源：有道云笔记
> 原路径：`imgl{.md`

```
.imgl{
width: 48px;
height: 48px;
background-image: url('../../assets/img/l3.png'), linear-gradient(#f00, #f00);
background-blend-mode: lighten;
background-size: cover;
}
```

很久之前在张鑫旭大大的博客看到过一篇  ，当时惊为天人，
感慨还可以这样玩，私底下也曾多次想过有没有其他方法可以实现，又或者不仅仅局限于  PNG 图片。

mix-blend-mode 与  background-blend-mode
mix-blend-mode 在我之前的一篇文章初略介绍过  -- ，与本文
的主角  background-blend-mode 一样，都是实现混合模式的。
混合模式最常见于  photoshop 中，是  PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在  CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。
简单区分一下这两个属性：
background-blend-mode 的可用取值与  mix-blend-mode 一样，不重复介绍，下面直接进入应用
阶段。

使用  background-blend-mode: lighten 实现任意图片颜色赋色技术
OK ，下面进入正文。如何通过纯  CSS 技术实现任意图片的任意颜色赋色技术呢？
假设我们有这样一张图片， JPG 、 PNG 、 GIF 都可以，但是有一个前提要求，就是黑色纯色，背景白
色：
两行 CSS 代码实现图片任意颜色赋色技术
PNG 格式小图标的 CSS 任意颜色赋色技术不可思议的混合模式  mix-blend-mode
mix-blend-mode 用于多个不同标签间的混合模式
background-blend-mode 用于单个标签间内背景图与渐变背景间的混合模式。

利用  background-blend-mode ，我们可以在图片下叠加多一层其他颜色，通过  background-blend-mode:
lighten 这个混合模式实现改变图片主体颜色黑色为其它颜色的目的。
简单的  CSS 代码示意如下：
效果如下：
注意，上面  CSS 这一句是关键  background-image: url($img), linear-gradient(#f00, #f00); ，这里我
叠加了一层渐变层  linear-gradient(#f00, #f00) ，实现了一个纯红色背景，而不是直接使用  #f00 实现红色背景。

使用  background-blend-mode: lighten 实现主色改为渐变色这个方法更厉害的地方在于，不单单可以将纯色图片由一种颜色改为另一种颜色，而且可以将图片内的黑色部分由单色，改为渐变颜色！
简单的  CSS 代码如下：
可以得到这样的效果：
```
.pic {
    width: 200px;
    height: 200px;
    background-image: url($img);
    background-size: cover;
}

.pic1 {
    background-image: url($img), linear-
gradient(#f00, #f00);
    background-blend-mode: lighten;
    background-size: cover;
}
.pic {
    background-image: url($img), linear-
gradient(#f00, #00f);
    background-blend-mode: lighten;
    background-size: cover;
}
```

OK ，看到这里，大家伙肯定会有疑问了，这是怎么实现的呢？
这里就有必要解释一下  lighten 这个混合模式了。变亮，变亮模式与变暗模式产生的效果相反：

局限性尝试  -- 使用透明底色图片
上述方法要求了图片本身内容为纯色黑色，底色为白色。那么如果像  PNG 图片一样，只存在主色，而底色是透明的，是否能够同样实现效果呢？
假设我们有一张这样的  PNG 图片（灰色主色，透明底色）：
按照上面的方式实现一遍，结果如下：
用黑色合成图像时无作用，用白色时则仍为白色黑色比任何颜色都要暗，所以黑色会被任何色替换掉。反之，如果素材的底色是黑色，主色是白色。那就应该用变暗（ darken ）的混合模式
CodePen Demo -- 纯色图片赋色技术尝试
1.
2.

很遗憾，当底色是透明的时候，会被混合模式混合上叠加层的颜色，无法使用。所有，这个技术也就存在了一个使用前提：
当然主色也可以是其他颜色，只是这个时候叠加需要考虑颜色的融合，没有使用黑色直观。

background-blend-mode 实现图片任意颜色赋色技术总结综上，我们确实只需要两行代码就可以实现白色底色黑色主色图片的任意颜色赋色技术。
其中，background-image 的第二值就是你希望赋值给的渐变色（当然，渐变色可以生成纯色）。
我们同时给一个标签设置了背景图片和渐变色，然后利用了  background-blend-mode:lighten 这个关键属性，达到了类似  PS 里的混合模式效果。
看起来  background-blend-mode 名为混合模式，但似乎表现上更像是  PS 当中的一种的剪切蒙板，混合模式是修改图片本身，蒙版跟遮罩都是在图片上一层通过叠加其他层对图像进行调整。
那么由此方法本身可以想到，一些能对图形进行色彩调整的  CSS 属性是否也能达到同样的功能呢？诸
如：
感兴趣的读者可以自行尝试，在接下来的文章我也会继续进行探讨。
黑色纯色，背景白色可能局限了这个技巧的使用场景，但是在很多白色底色的页面中，这个方法还是可以很好的发挥作用，许多  ICON 图片不再需要两个或者更多个颜色的版本！

background-blend-mode 兼容性相较于  mix-blend-mode，background-blend-mode 的兼容性会更好一点。所以本文所介绍的技术在移动端是存在用武之地的：
任意颜色赋色技术尝试  -- PNG 图片
图片的底色为白色，主色为黑色
```
{
    background-image: url($img), linear-
gradient(#f00, #00f);
    background-blend-mode: lighten;
}
```
filter 滤镜
mask-image
mask-clip

最后
当然，background-blend-mode 本身还可以实现其他更多酷炫的效果

本文接前文：  。由于 mix-blend-mode 这个属性的强大，很多应用场景和动效的制作不断完善和被发掘出来，遂另起一文继续介绍一些使用 mix-blend-mode 制作的酷炫动
画。
CSS3 新增了一个很有意思的属性 -- mix-blend-mode ，其中 mix 和 blend 的中文意译均为混合，那么这
个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。
混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，
利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。
mix-blend-mode 简介
关于 mix-blend-mode 最基本的用法和描述，可以简单看看上篇文章
 。
background-blend-mode 简介除了 mix-blend-mode ，CSS 还提供一个 background-blend-mode 。也就是背景的混合模式。
background-blend-mode 的可用取值与 mix-blend-mode一样，不重复介绍，下面直接进入应用阶段。
background-blend-mode 基础应用不可思议的混合模式 mix-blend-mode
不可思议的混合模式 mix-blend-mo
de
可以是背景图片与背景图片的混合，
也可以是背景图片和背景色的之间的混合。

对于 background-blend-mode ，最简单的应用就是将两个或者多个图片利用混合模式叠加在一起。假设我们存在下述两张图片，可以利用背景混合模式 background-blend-mode 叠加在一起：

经过背景混合模式 background-blend-mode:lighten 处理之后：

当然，这里使用的是 background-blend-mode:lighten 变亮这个混合模式，核心代码如下：
```
<div class="container"></div>
.container { background: url($pic1), url($pic2); background-size: cover; background-blend-mode: lighten; }
```
我们可以尝试其他的组合，也就是改变 background-blend-mode 的各种取值，将会得到各种不同的感官效
果。
使用 background-blend-mode: difference 制作黑白反向动画黑色白色这两种颜色，无疑是使用频率最高也是我认为最搭的两个颜色。当这两种颜色结合在一起，
总是能碰撞出不一样的火花。
扯远了，借助 difference 差值混合模式，配合黑白 GIF，能产生奇妙的效果，假设我们拥有这样一张
GIF 图（图片来自网络，侵删）：
CodePen Demo -- image mix by bg-blend-mode

利用 background-blend-mode: difference ，将它叠加到不同的黑白背景之下（黑白背景由 CSS 画出来）：
产生的效果如下：

我们可以尝试其他的组合，将会得到各种不同的感官效果。
使用 background-blend-mode 制作 hover 效果想象一下，在上面第一个例子中，如果背景的黑白蒙层不是一开始就叠加在 GIF 图下，而是通过某些交互手段叠加上去。
应用这种方式，我们可以使用 background-blend-mode 来制作点击或者 hover 时候的蒙板效果。
假设我们有这样一张原图（黑白效果较好）：
CodePen Demo -- https://codepen.io/Chokcoco/pen/vpLWBW

通过混合渐变背景色，配合 Hover 效果，我们可以给这些图配上一些我们想要的色彩：

代码非常简单，示意如下：
```
.pic { width: 300px; height: 200px; background: url($img), linear-gradient(#f00, #00f); background-size: cover, 100% 100%;
background-position: 0 0, -300px 0; background-blend-mode: luminosity; background-repeat: no-repeat; transition: .5s
background-position linear; } .pic:hover { background-position: 0 0, 0 0; }
```
这里有几点需要注意的：
使用 mix-blend-mode || background-blend-mode 改变图标的颜色
如果再运用上上一篇文章介绍的知识  ，我们可以实现
ICON 的颜色的动态改变。
假设我们有这样一张 ICON 图，注意主色是黑色，底色的白色（底色不是透明色），所以符合要求的
JPG、PNG、GIF 图都可以：
CodePen Demo --background-blend-mode && Hover
这里使用了背景色渐变动画， 有几种方式实现（戳这里了解更多方法），这里使用的是位移 background-position
背景色的渐变动画
实现上述效果使用的 background-blend-mode 不限制具体某一种混合模式，可以自己多尝试两行 CSS 代码实现图片任意颜色赋色技术

利用 background-blend-mode: lighten 可以实现动态改变图标主色的效果：
而且这里的具体颜色（渐变、纯色皆可），动画方向都可以可以随意控制的。

又或者是这种 hover fadeIn 效果：

使用 mix-blend-mode 制作文字背景图我们将上面 ICON 这个场景延伸一下，ICON 图可以延伸为任意黑色主色白色底色图片，而颜色则可以是纯色、渐变色、或者是图片。
那么我们可以尝试让文字带上渐变色，或者说让文字透出图片。当然这个效果有一些 CSS 属性也可以
完成。
譬如 background-clip: text 背景裁剪就可以让文字带上渐变色或者展示图片，可以戳这里看看
。
这里我们使用 mix-blend-mode 也能够轻易实现，我们只需要构造出黑色文字，白色底色的文字 div ，叠加上图片，再运用 mix-blend-mode 即可，简单原理如下：
核心代码如下，可以看看：
```
CodePen Demo -- bg-blend-mode && hover
CodePen Demo -- mix-blend-mode && hover
```
使用 back
ground-clip 实现文字渐变

```
<div class="container"> <div class="pic"></div> <div class="text">IMAGE</div> </div>
.pic { position: relative; width: 100%; height: 100%; background: url($img); background-repeat: no-repeat; background-size:
cover; } .text { position: absolute; width:100%; height:100%; color: #000; mix-blend-mode: lighten; background-color: #fff; }
CodePen Demo -- mix-blend-mode && TEXT IMAGE
```
