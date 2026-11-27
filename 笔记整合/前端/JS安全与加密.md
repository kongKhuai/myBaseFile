# JS安全与加密

> 共 6 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [aes](#sec-1) — 有道云笔记 · `js/加密/aes.md`
2. [Base64](#sec-2) — 有道云笔记 · `js/加密/Base64.md`
3. [安装引用依赖库](#sec-3) — 有道云笔记 · `js/加密/安装引用依赖库.md`
4. [简单的编码解码](#sec-4) — 有道云笔记 · `js/加密/简单的编码解码.md`
5. [防范示例](#sec-5) — 有道云笔记 · `js/防范示例.md`
6. [21种Web应用程序中处理密码的最佳做法](#sec-6) — 有道云笔记 · `来自手机/21种Web应用程序中处理密码的最佳做法.md`

---

<a id="sec-1"></a>
## aes

> 来源：有道云笔记
> 原路径：`js/加密/aes.md`

```
import CryptoJS from 'crypto-js'
const aseKey = '8-16-32 位的 '
**
 * @description: 加密-aes
 * @param {*} data
 * @return {*}加密后的 data
 */
export function enCrypt_aes(data) {
  let encrypt = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(aseKey), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).()
  return encrypt
}
**
 * @description: 解密-aes
 * @param {*} 密文
 * @return {*} 解密后的值
 */
export function deCrypt_aes(encrypt) {
  let decrypt = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(aseKey), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  }).(CryptoJS.enc.Utf8)
  return decrypt
}
```

<a id="sec-2"></a>
## Base64

> 来源：有道云笔记
> 原路径：`js/加密/Base64.md`

```
function Base64() {
 // private property
 _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
 // public method for encoding
 this.encode = function (input) {
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;
  input = _utf8_encode(input);
  while (i < input.length) {
   chr1 = input.charCodeAt(i++);
   chr2 = input.charCodeAt(i++);
   chr3 = input.charCodeAt(i++);
   enc1 = chr1 >> 2;
   enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
   enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
   enc4 = chr3 & 63;
   if (isNaN(chr2)) {
    enc3 = enc4 = 64;
   } else if (isNaN(chr3)) {
    enc4 = 64;
   }
```
   output = output +
   _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
```
   _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
  }
  return output;
 }
 // public method for decoding
 this.decode = function (input) {
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

  while (i < input.length) {38
   enc1 = _keyStr.indexOf(input.charAt(i++));39
   enc2 = _keyStr.indexOf(input.charAt(i++));40
   enc3 = _keyStr.indexOf(input.charAt(i++));41
   enc4 = _keyStr.indexOf(input.charAt(i++));42
   chr1 = (enc1 << 2) | (enc2 >> 4);43
   chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);44
   chr3 = ((enc3 & 3) << 6) | enc4;45
   output = output + String.fromCharCode(chr1);46
   if (enc3 != 64) {47
    output = output + String.fromCharCode(chr2);48
   }49
   if (enc4 != 64) {50
    output = output + String.fromCharCode(chr3);51
   }52
  }53
  output = _utf8_decode(output);54
  return output;55
 }56
 // private method for UTF-8 encoding58
 _utf8_encode = function (string) {59
  string = string.replace(/\r\n/g,"\n");60
  var utftext = "";61
  for (var n = 0; n < string.length; n++) {62
   var c = string.charCodeAt(n);63
   if (c < 128) {64
    utftext += String.fromCharCode(c);65
   } else if((c > 127) && (c < 2048)) {66
    utftext += String.fromCharCode((c >> 6) | 192);67
    utftext += String.fromCharCode((c & 63) | 128);68
   } else {69
    utftext += String.fromCharCode((c >> 12) | 224);70
    utftext += String.fromCharCode(((c >> 6) & 63) | 128);71
    utftext += String.fromCharCode((c & 63) | 128);72
   }73
  }75
  return utftext;76
 }77
```

使用

```
 // private method for UTF-8 decoding79
 _utf8_decode = function (utftext) {80
  var string = "";81
  var i = 0;82
  var c = c1 = c2 = 0;83
  while ( i < utftext.length ) {84
   c = utftext.charCodeAt(i);85
   if (c < 128) {86
    string += String.fromCharCode(c);87
    i++;88
   } else if((c > 191) && (c < 224)) {89
    c2 = utftext.charCodeAt(i+1);90
    string += String.fromCharCode(((c & 31) << 6) | (c2 &
63));
    i += 2;92
   } else {93
    c2 = utftext.charCodeAt(i+1);94
    c3 = utftext.charCodeAt(i+2);95
    string += String.fromCharCode(((c & 15) << 12) | ((c2 &
 63) << 6) | (c3 & 63));
    i += 3;97
   }98
  }99
  return string;100
 }101
}102
```
var str="https://www.daimadog.com";1
```
var base = new Base64();
var result = base.encode(str);
document.write(result);
var result2 = base.decode(result);
document.write(result2);
```

<a id="sec-3"></a>
## 安装引用依赖库

> 来源：有道云笔记
> 原路径：`js/加密/安装引用依赖库.md`

```
npm install --save js-base641
<script src="
<script src="
```
https://cdn.jsdelivr.net/npm/js-base64@3.7.2/base64.min.js使用库
```
import { Base64 } from 'js-base64';
import { encode, decode } from 'js-base64';
<script type="module">
// note jsdelivr.net does not automatically minify .mjs
```
import { Base64 } from 'https://cdn.jsdelivr.net/npm/js-base64@3.7.2/base64.mjs';8
```
</script>9
<script type="module">11
// or if you prefer no Base64 namespace12
```
import { encode, decode } from 'https://cdn.jsdelivr.net/npm/js-
```
base64@3.7.2/base64.mjs';
</script>14
```
使用demo
base64 针对解析JSON 对象
const tempObj = {
  name: 'huangbiao',
  age: 33,
  address: ' 长沙 '

```
}
const tempObjStr = `{
```
  name: 'huangbiao',
  age: 33,
  address: ' 长沙 '
```
}`
const base64Str = encode(tempObj)
console.log(base64Str) // W29iamVjdCBPYmplY3Rd
const objStr = decode(base64Str)
console.log(objStr) // [object Object]
```
base64 解析JSON对象字符串
const tempObjStr = `{
  name: 'huangbiao',
  age: 33,
  address: ' 长沙 '
```
}`
const base64Str = encode(tempObjStr)
console.log(base64Str) //
ewogIG5hbWU6ICdodWFuZ2JpYW8nLAogIGFnZTogMzMsCiAgYWRkcmVzczogJ+mVv+aymScKfQ==
const objStr = decode(base64Str)8
console.log(objStr)9
// {10
//   name: 'huangbiao',11
//   age: 33,12
//   address: ' 长沙 '13
// }14结论
```
base64 只能用来解析 字符串，无法解析JSON对象如果要解析JSON对象，可以将JSON对象序列化转为JSON对象字符串
1.
2.

<a id="sec-4"></a>
## 简单的编码解码

> 来源：有道云笔记
> 原路径：`js/加密/简单的编码解码.md`

```
let key2 = '39nP+JK5LMDjLCKuTPJ9Wp83WxUCOlZ6Z77vY4l0R55o0jz60a7bBTDPAL8nMACB'
        let key3 = encodeURIComponent(key2)
        var key4 = decodeURIComponent(key3) // 解码
        let key5 = encodeURI(key2)
        var key6 = decodeURI(key5) // 解码
        console.log(" 测试一： " + encodeURIComponent(" 你好，世界！ ") + "<br />")
        console.log(" 测试二： " + encodeURIComponent("Hello world!") + "<br />")
        console.log(" 测试三： " +
```
encodeURIComponent("39nP%2BJK5LMDjLCKuTPJ9Wp83WxUCOlZ6Z77vY4l0R55o0jz60a7bBTDPAL8nMACB,
/?:@&=+$#"))
```
        console.log(key2);14
        console.log({ key3 });15
        console.log(key4);16
        console.log(key5);17
        console.log(key6);18
        // data2 = data2.replace(/\%/g, "%25");21
        // data2 = data2.replace(/\#/g, "%23");22
        // data2 = data2.replace(/\&/g, "%26");23
          // let key12 =25
        //   '39nP+JK5LMDjLCKuTPJ9Wp83WxUCOlZ6Z77vY4l0R55o0jz60a7bBTDPAL8nMACB'26
        // let key13 =27
        //   '39nP%20JK5LMDjLCKuTPJ9Wp83WxUCOlZ6Z77vY4l0R55o0jz60a7bBTDPAL8nMACB'28
        // let key14 =29
        //   '39nP JK5LMDjLCKuTPJ9Wp83WxUCOlZ6Z77vY4l0R55o0jz60a7bBTDPAL8nMACB'30
        // console.log(decodeURIComponent(key12))31
        // console.log(decodeURIComponent(key13))32
        // console.log(decodeURIComponent(key14))33
        // let userKey =34
        //   '4V62OlxIQauJuIYKmcR848oxl15w73+9SUrqDij3MSFo0jz60a7bBTDPAL8nMACB'35

         // let key2 = '13785624612'41
      // // let key2 = '80a7f61efaa8351f2c917bfa75929755'42
      // let key3 = enCrypt_aes(key2)43
      // let key4 = deCrypt_aes(key3)44
      // console.log(key2, ' 编码后 ', key3, ' 解码后 ', key4)45
      // console.log('~~~ 解码后 ', deCrypt_aes('pqV4VNL2f+HDb/p+z5fP4A=='))46
      // var escape1 = escape(key2) // 编码47
      // console.log(' 编码 ', escape1)48
      // var unescape1 = unescape(escape1) // 解码49
      // console.log(' 解码 ', unescape1)50
      // var escape1 = encodeURI(key2) // 编码51
      // console.log(' 编码 ', escape1)52
      // var unescape1 = decodeURI(escape1) // 解码53
      // console.log(' 解码 ', unescape1)54
      // var escape12 = encodeURIComponent(key2) // 编码55
      // console.log(' 编码 2', escape12)56
      // var unescape12 = decodeURIComponent(escape1) // 解码57
      // console.log(' 解码 2', unescape12)58
      // var str64 = window.btoa(key2)59
      // console.log(' 经 base64 编码后 :' + str64)60
      // console.log('base64 解码后 :' + window.atob(str64))61
      // encodeUR() 方法和 encodeURIComponent() 方法，对应的解码方法有 decodeURI() 方法和
decodeURIComponent()
```

<a id="sec-5"></a>
## 防范示例

> 来源：有道云笔记
> 原路径：`js/防范示例.md`

```
// 冻结  prototype
;[
```
  Promise,
  Date,
  Array,
```
].forEach(item => {
  Object.freeze(item[`prototype`]);
})
// 测试拦截情况
if(Array.prototype.includes.().includes(`native code`)) {
  console.log(`恶意代码被拦截`)
}
```

<a id="sec-6"></a>
## 21种Web应用程序中处理密码的最佳做法

> 来源：有道云笔记
> 原路径：`来自手机/21种Web应用程序中处理密码的最佳做法.md`

21种Web应用程序中处理密码的最佳做法 web前端开发 今天   英文 |
https://betterprogramming.pub/21-best-practices-for-handling-passwords-in-web-
applications-7b2d7a66378f 翻译 | 杨小二 哪个做法更聪明？是打破锁还是偷钥匙？ 当然，你可以建立一个坚固的锁，但是，如果你不能保护钥匙，那就没有用了！ 密码就像你系统的钥匙。因此，如果你是一个真诚的Web开发人员，那么，确保其实力是你的责任！ 今天，我们一起来讨论一下有关密码的一些最佳做法。许多例子正在酝酿之中，请系好安全带！我们要准备开车出发了，老司机带你上路。 1、优先使用长密码而不是困难密码 鼓励用户选择更长的密码，而不是使其更难记住。 轻松+长
>困难+短 这是因为大多数黑客攻击不是由试图猜测密码的人完成的，通常是由运行循环的计算机完成
的。 机器不在乎难度。因此，请使用更长的密码！   2、永远不要通过电子邮件发送普通密码 不幸的是，这是开发人员中非常普遍的错误。以纯文本形式发送密码比你想象的要普遍得多。 近40％的人至少每周一次忘记密码。 因此，他们要做的是重设密码并在电子邮件中找回普通密码。 任何电子邮件都通过各种服务器发送。如果其中之一受到威胁，那么你就有麻烦了！所以永远不要这样做！ 备选择方案： 文字讯息 一次密码 加密电子邮件服务 密码管理员 3、使用HTTPS进行身份验证相关页面 这是显而易见的。尽早安装有效的SSL证书！如果你有任何限制，请至少对身份验证页面执行此操作。 这不仅对安全性很重要。这对于在用户之间建立信任也很重要，并且有助于SEO。 HTTPS通过加密提供隐私。详细内容不在本文的讨论范围之内，但如果你有兴趣，你可以点击打开以下的网址资源进行学习。 资源：https://howhttps.works/ 4、防止字典密码 词典密码是最常用密码的列表。密码破解者发现密码更容易破解。他们通常首先经历这些。 这是100000个最常用密码文件的列表-以此作为参考并对其进行检查。 1000万个字典密码列表地址：
https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-
Credent
