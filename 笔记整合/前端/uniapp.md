# uniapp

> 共 9 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [getCurrentPages()应用](#sec-1) — 有道云笔记 · `uniapp/getCurrentPages()应用.md`
2. [uni-app app上实现截屏保存图片到本地](#sec-2) — 有道云笔记 · `uniapp/uni-app app上实现截屏保存图片到本地.md`
3. [uniapp - easycom](#sec-3) — 有道云笔记 · `uniapp/uniapp - easycom.md`
4. [调测 文件下载](#sec-4) — 有道云笔记 · `uniapp/调测 文件下载.md`
5. [EventChannel](#sec-5) — 有道云笔记 · `vue/EventChannel.md`
6. [uni-app 页面跳转 对象传参，利用eventChannel](#sec-6) — 有道云笔记 · `vue/uni-app 页面跳转 对象传参，利用eventChannel.md`
7. [uniapp开发踩坑兼容问题](#sec-7) — myBaseFile · `vue/uniapp/uniapp开发踩坑兼容问题.md`
8. [uniapp开发踩坑兼容问题【第二弹！！】，血泪史o(╥﹏╥)o，一次学习终生避雷！！！](#sec-8) — myBaseFile · `vue/uniapp/uniapp开发踩坑兼容问题【第二弹！！】，血泪史o(╥﹏╥)o，一次学习终生避雷！！！.md`
9. [httpsgithub.comq310550690uni-app-qrcode 二维码](#sec-9) — 有道云笔记 · `httpsgithub.comq310550690uni-app-qrcode 二维码.md`

---

<a id="sec-1"></a>
## getCurrentPages()应用

> 来源：有道云笔记
> 原路径：`uniapp/getCurrentPages()应用.md`

uni-app的getCurrentPages()应用
```
let pages = getCurrentPages(); //获取所有页面栈实例列表
let nowPage = pages[ pages.length - 1]; //当前页页面实例
let prevPage = pages[ pages.length - 2 ];  //上一页页面实例
let lastPage = pages[ pages.length - 3];
prevPage.$vm.goBack();//调用上一个页面的返回方法
lastPage.$vm.getMaterial();
prevPage.$vm.status = ' 已完成 ';//修改上一个页面 status 的值
```

<a id="sec-2"></a>
## uni-app app上实现截屏保存图片到本地

> 来源：有道云笔记
> 原路径：`uniapp/uni-app app上实现截屏保存图片到本地.md`

```
<template>
    <view class="content">
        <view class="nav-top">1.让朋友的手机扫描下面的二维码即可安装</view>
        <view class="main">
            <view class="lay1"><view class="line"></view></view>
            <view class="lay2">
                <view class="qr">
                    <view class="qr-img">
                        <image
                            src="../../static/qr.png"
                            style="height: 200upx;width: 200upx;"
                        ></image>
                    </view>
                    <view class="qr-txt">扫描二维码下载安装包</view>
                </view>
            </view>
            <view class="lay3"><view class="line"></view></view>
        </view>
        <view class="code-btn">
            <view class="line-btn"><view class="btn" @tap="capture()">点击保存至手机相册
</view></view>
        </view>  21
    </view>  22
</template>  23
<script>  25
    export default{  26
        methods: {  27
            capture() {  28
                var pages = getCurrentPages();  29
                var page = pages[pages.length - 1];  30
    console.log(" 当前页 "+pages.length-1);31
                var bitmap=null;  32
                var currentWebview = page.$getAppWebview();33
                bitmap = new plus.nativeObj.Bitmap('amway_img');  34
                // 将 webview 内容绘制到 Bitmap 对象中  35
                currentWebview.draw(bitmap,function(){  36

                    console.log(' 截屏绘制图片成功 ');  37
                    bitmap.save( "_doc/a.jpg"  38
                    ,{}  39
                    ,function(i){  40
                        console.log(' 保存图片成功： '+JSON.stringify(i));  41
                        uni.saveImageToPhotosAlbum({  42
                            filePath: i.target,  43
                            success: function () {  44
                                bitmap.clear(); // 销毁 Bitmap 图片  45
                                uni.showToast({  46
                                    title: ' 保存图片成功 ',  47
                                    mask: false,  48
                                    duration: 1500  49
                                });  50
                            }  51
                        });  52
                    }  53
                    ,function(e){  54
                        console.log(' 保存图片失败： '+JSON.stringify(e));  55
                    });  56
                },function(e){  57
                    console.log(' 截屏绘制图片失败： '+JSON.stringify(e));  58
                });  59
                //currentWebview.append(amway_bit);    60
            }  61
        },  62
    }  63
</script>  65
<style>  67
page {  68
    background-color: #2d355c;  69
}  70
.content {  71
}  72
.nav-top {  73
    color: #ffffff;  74
    font-size: 35upx;  75
    text-align: center;  76

    margin: 20upx 0;  77
}  78
.main {  79
    position: relative;  80
    width: 100%;  81
    margin-top: 50upx;  82
}  83
.main .lay1 {  84
    position: absolute;  85
    top: 0;  86
    bottom: 0;  87
    right: 0;  88
    left: 0;  89
    z-index: 3000;  90
}  91
.main .lay1 .line {  92
    height: 100upx;  93
    width: 100%;  94
    border-radius: 50px;  95
    background-color: #e28f0b;  96
    margin-top: 100upx;  97
}  98
.lay2 {  99
    position: absolute;  100
    top: 0;  101
    bottom: 0;  102
    right: 0;  103
    left: 0;  104
    z-index: 4000;  105
}  106
.lay2 .qr {  107
    width: 70%;  108
    margin: 0 auto;  109
    height: 700upx;  110
    background-color: #3958ab;  111
}  112
.qr-img {  113
    text-align: center;  114
    padding-top: 50%;  115

}  116
.qr-txt {  117
    color: #ffffff;  118
    text-align: center;  119
    margin-top: 50upx;  120
}  121
.lay3 {  122
    position: absolute;  123
    top: 0;  124
    bottom: 0;  125
    right: 0;  126
    left: 0;  127
    z-index: 4000;  128
    text-align: center;  129
}  130
.lay3 .line {  131
    height: 100upx;  132
    width: 85%;  133
    border-radius: 50px;  134
    background-color: #e28f0b;  135
    margin: 40upx auto;  136
    box-shadow: #cccccc 0px 3px 10px;  137
}  138
.code-btn {  139
    width: 100%;  140
    color: #ffffff;  141
    height: 100%;  142
    text-align: center;  143
}  144
.line-btn {  145
    position: absolute;  146
    bottom: 200upx;  147
    left: 0upx;  148
    right: 0upx;  149
    width: 100%;  150
    display: flex;  151
    justify-content: center;  152
}  153
.btn {  154
    width: 400upx;  155

    padding: 35upx;  156
    background-color: #e28f0b;  157
    border-radius: 50px;  158
}  159
.btn:active{  160
    background-color: #FEC607;  161
}  162
</style>163
```

<a id="sec-3"></a>
## uniapp - easycom

> 来源：有道云笔记
> 原路径：`uniapp/uniapp - easycom.md`

传统 vue 组件，需要安装、引用、注册，三个步骤后才能使用组件。easycom将其精简为一步。  只要组件安装在项目的 components 目录下，并符合components/组件名称/组件名称.vue目录结构。就可以不用引用、注册，直接在页面中使用

特殊的
uniapp - easycom
```
// pages.json 配置
  "easycom":{
  "uni-(.*)":"@/components/uni-$1/uni-$1.vue"
  }
```

<a id="sec-4"></a>
## 调测 文件下载

> 来源：有道云笔记
> 原路径：`uniapp/调测 文件下载.md`

```
//#ifdef  H5 || APP-PLUS
// this.$Router.push({
//     path: '/pages/index/supCheck/showAppPdf',
//     query: {fileName: val,title:title}
// })
// console.log(val, 'h5 APP-PLUS');
// uni.downloadFile({
```
//  url: 'http://218.94.59.120:8081/tejc-bes/file/download?
format=pdf&file=rBX_kV9z7OGELU8GAAAAAEkhsH483.docx&filename=rBX483.pdf',
```
//  success: (res) => {9
//   console.log(res, ' 下载成功 ');10
//   var filePath = res.tempFilePath11
//   uni.openDocument({12
//    filePath: filePath,13
//    fileType:"pdf",14
//    success: function(val) {15
//     console.log(val, ' 打开文档成功 ');16
//    },17
//    fail: function(err) {18
//     console.log(err, ' 打开文档失败 ');19
//    }20
//   });21

//  }22
// });23
//#endif 24
// #ifdef MP-WEIXIN 25
```
this.isLoading = true26
uni.downloadFile({27
url: process.uniEnv.VUE_APP_JC_API+`/file/download?
```
format=pdf&file=${val}&filename=rBX483.pdf`,
success: (res) => {29
var filePath = res.tempFilePath30
```
this.isLoading = false31
uni.openDocument({32
filePath: filePath,33
fileType: "pdf",34
```
success: function(val) {35
// console.log(val, ' 打开文档成功 ');36
},37
fail: function(err) {38
// console.log(err, ' 打开文档失败 ');39
}40
});41
}42
});43
//#endif 44
```

<a id="sec-5"></a>
## EventChannel

> 来源：有道云笔记
> 原路径：`vue/EventChannel.md`

2.8.9+ 支持  页面间事件通信通道
方法

触发一个事件
string eventName 事件名称
any args 事件参数

取消监听一个事件。给出第二个参数时，只取消给出的监听函数，否则取消所有监听函数
string eventName 事件名称
function fn 事件监听函数
参数  any args 触发事件参数

持续监听一个事件
string eventName 事件名称
function fn 事件监听函数
参数  any args 触发事件参数

监听一个事件一次，触发后失效
string eventName 事件名称
function fn 事件监听函数
参数  any args 触发事件参数
Tips ：
参考事项

1：FileReader : 读取文件内容
readAsText() 读取文本文件，(可以使用Txt打开的文件)
readAsBinaryString(): 读取任意类型的文件，返回二进制字符串
EventChannel
```
EventChannel.emit(string eventName, any args)
EventChannel.off(string eventName, function fn)
EventChannel.on(string eventName, function fn)
EventChannel.once(string eventName, function fn)
```
navigateTo, redirectTo 只能打开非  tabBar 页面。
switchTab 只能打开  tabBar 页面。
reLaunch 可以打开任意页面。
页面底部的  tabBar 由页面决定，即只要是定义为  tabBar 的页面，底部都有  tabBar。
不能在  App.vue 里面进行页面跳转。
H5 端页面刷新之后页面栈会消失，此时navigateBack不能返回，如果一定要返回可以使用history.back()导航到浏览器的其他历史记录。
页面路由拦截和管理，插件市场有很多封装好的工具类，搜索  路由

readAsDataURL: 方法可以将读取到的文件编码成DataURL ，可以将资料(例如图片、excel文件)内嵌在网页之中，不用放到外部文件
abort: 中断读取

2：FileReader 提供一个完整的事件模型，用来捕获读取文件的状态
onabort:读取文件断片时触发
onerror:读取文件错误时触发
onload:文件读取成功时触发
onloadend:文件读取完毕之后，不管成功还是失败触发
onloadstart: 开始读取文件时触发
onprogress:读取文件过程中触发

uni-app判断客户端环境是 Android、iOS 还是小程序开
发工具
在百度小程序开发工具、微信小程序开发工具、支付宝小程序开发工具中使用 uni.getSystemInfoSync().platform 返回值均为 devtools
 switch(uni.getSystemInfoSync().platform){

<a id="sec-6"></a>
## uni-app 页面跳转 对象传参，利用eventChannel

> 来源：有道云笔记
> 原路径：`vue/uni-app 页面跳转 对象传参，利用eventChannel.md`

父页面  调用 uni.navigateTo

注意success中res对象 有个eventChannel

```
showCheckList() {
let _vm = this;
uni.navigateTo({
```
url: '/pages/component/trial-manufacture/check-list',
```
success: function(res) {
res.eventChannel.emit('login', {
```
examineList: _vm.trialProduceExamineList,
station: _vm.station,
stationList: _vm.userStationList
```
})
}
})
}
```
子页面接收参数， onLoad时调用this.getOpenerEventChannel

onUnload时记得解除监听

```
data() {
return {
```
eventChannel: null,
```
}
},
onLoad(options){
const eventChannel = this.getOpenerEventChannel();
this.eventChannel = eventChannel;
let _vm = this;
eventChannel.on('login', function(params) {
let {examineList, station, stationList} = params;
_vm.examineList = examineList;
_vm.station = station;
_vm.stationList = stationList;

})
},
onUnload() {
this.eventChannel.off('login');
},
```
参考文档：

https://uniapp.dcloud.io/api/router?id=event-channel

<a id="sec-7"></a>
## uniapp开发踩坑兼容问题

> 来源：myBaseFile
> 原路径：`vue/uniapp/uniapp开发踩坑兼容问题.md`

#### uniapp开发踩坑兼容问题

[庸俗今天不摸鱼](/user/3725616663503053/posts)

2023-06-14 4,539 阅读5分钟

##### 1.移动端适配与兼容性问题

###### 1）new Date（）在IOS上出现值为NAN的问题

-   但在IOS下，这是使用获取到的值是NAN。 原因：因为IOS下的new Date()不支持"-“这个字符 解决方法：把”-“改成‘”/"就可以了```js
    new Date("2017-08-11 12:00:00".replace(/-/g, "/"));

    ```

### 2) Android部分机型使用height和line-height等值设置垂直居中，但会显示偏高的问题0

-   原因：貌似是有部分Android机型有自己默认的line-height，我们额外设置的line-height不起作用。 解决办法：设置line-height：normal，再通过padding去设置居中就可以了。

line-height：normal; padding:xxpx 0;

```ini
###### 3) 防止手机中网页放大和缩小。
- viewport 设置不缩放
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />

```

###### 3) iphone及ipad下输入框默认内阴影

```css
Element {
 -webkit-tap-highlight-color:rgba(255,255,255,0)
}

```

###### 4) 某些Android手机圆角失效

```css
background-clip: padding-box;

```

###### 5) 移动端300ms点击延迟

-   设置meta标签禁止缩放

```html
<meta name="viewport" content="user-scalable=no">
<meta name="viewport" content="initial-scale=1,maximum-scale=1">

```

-   FastClick

> FastClick 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。

###### 6) 点击穿透问题

-   来得很直接github上有个fastclick可以完美解决 引入fastclick.js，因为fastclick源码不依赖其他库所以你可以在原生的js前直接加上

```js
window.addEventListener( "load", function() {
FastClick.attach( document.body );
}, false );

```

-   对于B元素本身存在默认click事件的情况，应及用touchend代替tap事件并阻止掉时A元素touchend的默认行为preventDefault()，从而阻止click事件的产生。

```js
$("#aa").on("touchend", function (event) {
//很多处理比如隐藏什么的
event.preventDefault();
});

```

###### 7) 电话号码识别

-   在 iOS Safari （其他浏览器和 Android 均不会）上会对那些看起来像是电话号码的数字处理为电话链接，比如：

-   7 位数字，形如：1234567

-   带括号及加号的数字，形如：(+86)123456789

-   双连接线的数字，形如：00-00-00111

-   11 位数字，形如：13800138000

```html

关闭识别
html复制代码<meta name="format-detection" content="telephone=no" />

```

###### 8) 邮箱识别

邮箱识别 安卓上会对符合邮箱格式的字符串进行识别，我们可以通过如下的 meta 来管别邮箱的自动识别：

```html

<meta content="email=no" name="format-detection" />

```

###### 9) 常用meta 标签的设置

```html
<meta name="screen-orientation" content="portrait"> //Android 禁止屏幕旋转
<meta name="full-screen" content="yes">             //全屏显示
<meta name="browsermode" content="application">     //UC应用模式，使用了application这种应用模式后，页面讲默认全屏，禁止长按菜单，禁止收拾，标准排版，以及强制图片显示。
<meta name="x5-orientation" content="portrait">     //QQ强制竖屏
<meta name="x5-fullscreen" content="true">          //QQ强制全屏
<meta name="x5-page-mode" content="app">            //QQ应用模式

```

###### 10) 清除输入框内阴影

```css
div {
  -webkit-appearance: none;
}

```

###### 11) 输入框默认字体颜色

```css
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #c7c7c7;
}
input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #c7c7c7;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  color: #c7c7c7;
}

```

###### 12) 用户设置字号放大或者缩小导致页面布局错误

```css
body {
  -webkit-text-size-adjust: 100% !important;
  text-size-adjust: 100% !important;
  -moz-text-size-adjust: 100% !important;
}

```

###### 13) android系统中元素被点击时产生边框

-   部分android系统点击一个链接，会出现一个边框或者半透明灰色遮罩, 不同生产商定义出来额效果不一样。去除代码如下

```css
css复制代码a,button,input,textarea{
  -webkit-tap-highlight-color: rgba(0,0,0,0)
  -webkit-user-modify:read-write-plaintext-only;
}

```

###### 14) audio 和 video 在 ios 和 andriod 中自动播放

-   这个不是bug，由于自动播放网页中的音频或视频，会给用户带来一些困扰或者不必要的流量消耗，所以苹果系统和安卓系统通常都会禁止自动播放和使用 JS 的触发播放，必须由用户来触发才可以播放。加入自动触发播放的代码

```js
$('html').one('touchstart', function() {
  audio.play()
})

```

###### 15) iOS 上拉边界下拉出现空白

-   手指按住屏幕下拉，屏幕顶部会多出一块白色区域。手指按住屏幕上拉，底部多出一块白色区域。
-   在 iOS 中，手指按住屏幕上下拖动，会触发 touchmove 事件。这个事件触发的对象是整个 webview 容器，容器自然会被拖动，剩下的部分会成空白。

```js
document.body.addEventListener(
  'touchmove',
  function(e) {
    if (e._isScroller) return
    // 阻止默认事件
    e.preventDefault()
  },
  {
    passive: false
  }
)

```

###### 16) onkeyUp 和 onKeydown 兼容性问题

-   IOS 中 input 键盘事件 keyup、keydown、等支持不是很好, 用 input 监听键盘 keyup 事件，在安卓手机浏览器中没有问题，但是在 ios 手机浏览器中用输入法输入之后，并未立刻相应 keyup 事件

###### 17) IOS12 输入框难以点击获取焦点，弹不出软键盘

-   定位找到问题是 fastclick.js 对 IOS12 的兼容性，可在 fastclick.js 源码或者 main.js 做以下修改

```js
 FastClick.prototype.focus = function(targetElement) {
  var length
  if (
    deviceIsIOS &&
    targetElement.setSelectionRange &&
    targetElement.type.indexOf('date') !== 0 &&
    targetElement.type !== 'time' &&
    targetElement.type !== 'month'
  ) {
    length = targetElement.value.length
    targetElement.setSelectionRange(length, length)
    targetElement.focus()
  } else {
    targetElement.focus()
  }
}

```

###### 18) IOS 键盘收起时页面没用回落，底部会留白

通过监听键盘回落时间滚动到原来的位置

```js
window.addEventListener('focusout', function() {
  window.scrollTo(0, 0)
})

//input输入框弹起软键盘的解决方案。
var bfscrolltop = document.body.scrollTop
$('input')
  .focus(function() {
    document.body.scrollTop = document.body.scrollHeight
    //console.log(document.body.scrollTop);
  })
  .blur(function() {
    document.body.scrollTop = bfscrolltop
    //console.log(document.body.scrollTop);
  })

```

###### 19) iOS 下fixed 失效的原因

-   软键盘唤起后，页面的 fixed 元素将失效，变成了 absolute，所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。不仅限于 type=text 的输入框，凡是软键盘（比如时间日期选择、select 选择等等）被唤起，都会遇到同样地问题。解决方法: 不让页面滚动，而是让主体部分自己滚动,主体部分高度设为 100%，overflow:scroll

```html
<body>
  <div class='warper'>
    <div class='main'></div>
  <div>
  <div class="fix-bottom"></div>
</body>

``````css
.warper {
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; /* 解决ios滑动不流畅问题 */
}
.fix-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
}

```

## 2.获取用户电量进行提示

```js
navigator.getBattery().then(function (battery) {
  // 获取设备电量剩余百分比
  var level = battery.level //最大值为1,对应电量100%
  console.log('Level: ' + level * 100 + '%')

  // 获取设备充电状态
  var charging = battery.charging
  console.log('充电状态: ' + charging)

  // 获取设备完全充电需要的时间
  var chargingTime = battery.chargingTime
  console.log('完全充电需要的时间: ' + chargingTime)

  // 获取设备完全放电需要的时间
  var dischargingTime = battery.dischargingTime
  console.log('完全放电需要的时间: ' + dischargingTime)
})

```

-   监听用户电池状态变化

```js
navigator.getBattery().then(function (battery) {
  // 添加事件，当设备电量改变时触发
  battery.addEventListener('levelchange', function () {
    console.log('电量改变: ' + battery.level)
  })

  // 添加事件，当设备充电状态改变时触发
  battery.addEventListener('chargingchange', function () {
    console.log('充电状态改变: ' + battery.charging)
  })

  // 添加事件，当设备完全充电需要时间改变时触发
  battery.addEventListener('chargingtimechange', function () {
    console.log('完全充电需要时间: ' + battery.chargingTime)
  })

  // 添加事件，当设备完全放电需要时间改变时触发
  battery.addEventListener('dischargingtimechange', function () {
    console.log('完全放电需要时间: ' + battery.dischargingTime)
  })
})

```

-   兼容性

[](https://link.juejin.cn?target=https%3A%2F%2Fp3-juejin.byteimg.com%2Ftos-cn-i-k3u1fbpfcp%2F602746fdee4f42b88e7b8675894e7c52~tplv-k3u1fbpfcp-zoom-in-crop-mark%253A1512%253A0%253A0%253A0.awebp "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/602746fdee4f42b88e7b8675894e7c52~tplv-k3u1fbpfcp-zoom-in-crop-mark%3A1512%3A0%3A0%3A0.awebp")

## 3.小程序版本更新提示

```js
onShow: function(e) {
			console.log('showed2', e);
			uni.hideTabBar();
            //系统获取   本API返回全局唯一的版本更新管理器对象： updateManager，用于管理小程序更新。
			const updateManager = uni.getUpdateManager();
			console.log(updateManager, "uploadRes");
			updateManager.onCheckForUpdate(function(res) {
				console.log(res, "uploadRes");//返回true 或 false  是否更新
				// 请求完新版本信息的回调
				console.log(res.hasUpdate);
				if (res.hasUpdate) {
					updateManager.onUpdateReady(function(res) {
						uni.showModal({
							title: '更新提示',
							content: '新版本已经准备好，是否重启应用？',
							success(res) {
								if (res.confirm) {
									// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
									updateManager.applyUpdate();
								}
							}
						});

					});
					updateManager.onUpdateFailed(function(res) {
						// 新的版本下载失败
						uni.showModal({
							title: "新版本已更新！",
							content: "新版本已上线，请重启小程序完成更新！"
						});
					});
				}
			});

		},

```

## 4.手机端点击input输入框时网页自动放大

这是因为在移动端自适应宽度的代码中，没有把input的自动缩放关闭！一般常见于苹果手机的ios系统，而安卓系统似乎是默认关闭。

input框自动放大，虽然说有便于用户的输入和阅读，但也同时给用户带来了视觉的麻烦，所以一般情况下，我们都是选择关闭自动缩放的！

那么该如何关闭input输入框在手机端的这个缩放效果呢？

1，找到你的网页头部head的代码，查看代码并找到，下面的这段：

`<meta name="viewport" content="width=device-width,initial-scale=1.0">`

这段

2，找到之后，将这段代码更改为：

`<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">`

## 5.常用api

```arduino
show-menu-by-longpress | <image>标签  添加后长按扫描二维码

```

[![avatar](https://p6-passport.byteacctimg.com/img/user-avatar/420a472e6cab0232c5d60d1c7f06d680~200x200.awebp)

庸俗今天不摸鱼 ![创作等级LV.4](https://juejin.cndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8AQMAAAAAMksxAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAA5JREFUKM9jGAWjAAcAAAIcAAE27nY6AAAAAElFTkSuQmCC "创作等级LV.4")](/user/3725616663503053/posts)

[

58

文章

](/user/3725616663503053/posts)[

26k

阅读

](/user/3725616663503053/posts)[

122

粉丝

](/user/3725616663503053/followers)

目录

收起

-   [1.移动端适配与兼容性问题](#heading-0 "1.移动端适配与兼容性问题")

    -   [1）new Date（）在IOS上出现值为NAN的问题](#heading-1 "1）new Date（）在IOS上出现值为NAN的问题")

    -   [2) Android部分机型使用height和line-height等值设置垂直居中，但会显示偏高的问题0](#heading-2 "2) Android部分机型使用height和line-height等值设置垂直居中，但会显示偏高的问题0")

    -   [3) iphone及ipad下输入框默认内阴影](#heading-3 "3) iphone及ipad下输入框默认内阴影")

    -   [4) 某些Android手机圆角失效](#heading-4 "4) 某些Android手机圆角失效")

    -   [5) 移动端300ms点击延迟](#heading-5 "5)  移动端300ms点击延迟")

    -   [6) 点击穿透问题](#heading-6 "6)  点击穿透问题")

    -   [7) 电话号码识别](#heading-7 "7) 电话号码识别")

    -   [8) 邮箱识别](#heading-8 "8) 邮箱识别")

    -   [9) 常用meta 标签的设置](#heading-9 "9) 常用meta 标签的设置")

    -   [10) 清除输入框内阴影](#heading-10 "10) 清除输入框内阴影")

    -   [11) 输入框默认字体颜色](#heading-11 "11) 输入框默认字体颜色")

    -   [12) 用户设置字号放大或者缩小导致页面布局错误](#heading-12 "12) 用户设置字号放大或者缩小导致页面布局错误")

    -   [13) android系统中元素被点击时产生边框](#heading-13 "13) android系统中元素被点击时产生边框")

    -   [14) audio 和 video 在 ios 和 andriod 中自动播放](#heading-14 "14) audio 和 video 在 ios 和 andriod 中自动播放")

    -   [15) iOS 上拉边界下拉出现空白](#heading-15 "15) iOS 上拉边界下拉出现空白")

    -   [16) onkeyUp 和 onKeydown 兼容性问题](#heading-16 "16) onkeyUp 和 onKeydown 兼容性问题")

    -   [17) IOS12 输入框难以点击获取焦点，弹不出软键盘](#heading-17 "17) IOS12 输入框难以点击获取焦点，弹不出软键盘")

    -   [18) IOS 键盘收起时页面没用回落，底部会留白](#heading-18 "18) IOS 键盘收起时页面没用回落，底部会留白")

    -   [19) iOS 下fixed 失效的原因](#heading-19 "19) iOS 下fixed 失效的原因")

-   [2.获取用户电量进行提示](#heading-20 "2.获取用户电量进行提示")

-   [3.小程序版本更新提示](#heading-21 "3.小程序版本更新提示")

-   [4.手机端点击input输入框时网页自动放大](#heading-22 "4.手机端点击input输入框时网页自动放大")

-   [5.常用api](#heading-23 "5.常用api")

window.\_\_NUXT\_\_=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){v.loading=a;v.skeleton=d;v.cursor=f;v.data=\[\];v.total=b;v.hasMore=d;I.id=y;I.self\_description=m;I.followed=a;I.viewerIsFollowing=m;I.community=m;I.subscribedTagCount=b;I.wroteBookCount=b;I.boughtBookCount=b;I.isBindedPhone=a;I.level=u;I.user\_id=y;I.user\_name=F;I.company=e;I.job\_title=e;I.avatar\_large="https:\\u002F\\u002Fp6-passport.byteacctimg.com\\u002Fimg\\u002Fuser-avatar\\u002F420a472e6cab0232c5d60d1c7f06d680~300x300.image";I.description=e;I.followee\_count=t;I.follower\_count=122;I.post\_article\_count=58;I.digg\_article\_count=37;I.got\_digg\_count=233;I.got\_view\_count=26287;I.post\_shortmsg\_count=11;I.digg\_shortmsg\_count=u;I.isfollowed=a;I.favorable\_author=b;I.power=G;I.study\_point=b;I.university={university\_id:f,name:e,logo:e};I.major={major\_id:f,parent\_id:f,name:e};I.student\_status=b;I.select\_event\_count=b;I.select\_online\_course\_count=b;I.identity=b;I.is\_select\_annual=d;I.select\_annual\_rank=b;I.annual\_list\_type=b;I.extraMap={};I.is\_logout=b;I.annual\_info=\[{annual\_id:"2024",rank:176,list\_type:b}\];I.account\_amount=b;I.user\_growth\_info={user\_id:3725616663503053,jpower:G,jscore:1036,jpower\_level:u,jscore\_level:5,jscore\_title:"先锋掘友",author\_achievement\_list:\[\],vip\_level:p,vip\_title:"稳步进阶",jscore\_next\_level\_score:2000,jscore\_this\_level\_mini\_score:500,vip\_score:180};I.is\_vip=a;I.become\_author\_days=b;I.collection\_set\_article\_count=b;I.recommend\_article\_count\_daily=b;I.article\_collect\_count\_daily=b;I.user\_priv\_info={administrator:b,builder:b,favorable\_author:b,book\_author:b,forbidden\_words:b,can\_tag\_cnt:b,auto\_recommend:b,signed\_author:b,popular\_author:b,can\_add\_video:b};I.juejinPower=G;I.jobTitle=e;I.roles={isBookAuthor:a,isFavorableAuthor:a,isCobuilder:a,isAdmin:a};I.username=F;I.blogAddress=m;I.selfDescription=e;I.beLikedCount=233;I.beReadCount=26287;I.followerCount=122;I.followingCount=t;I.collectionCount=b;I.createdCollectionCount=b;I.followingCollectionCount=b;I.postedPostsCount=58;I.pinCount=11;I.likedArticleCount=37;I.likedPinCount=u;I.avatar="https:\\u002F\\u002Fp6-passport.byteacctimg.com\\u002Fimg\\u002Fuser-avatar\\u002F420a472e6cab0232c5d60d1c7f06d680~300x300.image";I.latestLoginedInAt=c;I.createdAt=c;I.updatedAt=c;I.phoneNumber=e;I.titleDescription=e;I.followeesCount=t;I.applyEventCount=b;I.need\_lead=b;I.followTopicCnt=b;return {layout:"default",data:\[{renderPost:d}\],fetch:{"data-v-13e20730:0":{queryString:e,isShowUserDropdownList:a,isShowAddMoreList:a,isFocus:a,isPhoneMenuShow:a,visibleBadge:a,placeholder:e,hiddenProperty:"hidden",searchHistoryVisible:a,searchHistoryItems:\[\],tabBadge:c,isChangePlaceholder:d,showMallBridge:a,showAIProblemBridge:a,removeSearchInputKeyupListener:c,logoImg:"\\u002F\\u002Flf-web-assets.juejin.cn\\u002Fobj\\u002Fjuejin-web\\u002Fxitu\_juejin\_web\\u002Fe08da34488b114bd4c665ba2fa520a31.svg"}},error:c,state:{view:{activityIndex:{activityList:\[\],pageInfo:{hasNextPage:a,endCursor:e},afterPosition:e,activityListIsLoading:d,activityListIsError:a,userActivityList:\[\],placeholder:e,actionType:{FETCH:"@\\u002Fview\\u002Factivity-index\\u002FFETCH",FETCH\_RECOMMEND\_LIST:"@\\u002Fview\\u002Factivity-index\\u002FFETCH\_RECOMMEND\_LIST",RESET\_ACTIVITY\_LIST:"@\\u002Fview\\u002Factivity-index\\u002FRESET\_ACTIVITY\_LIST",FETCH\_USER\_ACTIVITY\_LIST:"@\\u002Fview\\u002Factivity-index\\u002FFETCH\_USER\_ACTIVITY\_LIST",FETCH\_NEW\_COUNT:"@\\u002Fview\\u002Factivity-index\\u002FFETCH\_NEW\_COUNT",DELETE\_ACTIVITY:"@\\u002Fview\\u002Factivity-index\\u002FDELETE\_ACTIVITY",TOGGLE\_FOLLOW\_USER:"@\\u002Fview\\u002Factivity-index\\u002FTOGGLE\_FOLLOW\_USER",FETCH\_ENTRY\_COMMENT\_LIST:"@\\u002Fview\\u002Factivity-index\\u002FFETCH\_ENTRY\_COMMENT\_LIST",UPDATE\_LIST\_LOADING:"@\\u002Fview\\u002Factivity-index\\u002FUPDATE\_LIST\_LOADING",RESET:"@\\u002Fview\\u002Factivity-index\\u002FRESET"},hotList:{list:\[\],after:e,loading:a,hasNextPage:a,actionType:{UPDATE\_STATE:"@\\u002Fview\\u002Factivity-index\\u002Fhot-list\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Factivity-index\\u002Fhot-list\\u002FFETCH\_MORE",FETCH:"@\\u002Fview\\u002Factivity-index\\u002Fhot-list\\u002FFETCH",RESET:"@\\u002Fview\\u002Factivity-index\\u002Fhot-list\\u002FRESET"}},sidebar:{bannerList:\[\],actionType:{RESET:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002FRESET",UPDATE\_STATE:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002FUPDATE\_STATE",FETCH\_BANNER:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002FFETCH\_BANNER"},recommend:{pageSize:h,page:b,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Frecommend-topic-list\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Frecommend-topic-list\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Frecommend-topic-list\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Frecommend-topic-list\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Frecommend-topic-list\\u002FRESET"},after:b},followed:{pageSize:h,page:b,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Ffollowed-topic-list\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Ffollowed-topic-list\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Ffollowed-topic-list\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Ffollowed-topic-list\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Ffollowed-topic-list\\u002FRESET"},after:b},recommendPin:{list:\[\],after:e,loading:a,hasNextPage:d,actionType:{UPDATE\_STATE:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Frecommend-pin-list\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Frecommend-pin-list\\u002FFETCH\_MORE",FETCH:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Frecommend-pin-list\\u002FFETCH",RESET:"@\\u002Fview\\u002Factivity-index\\u002Fsidebar\\u002Frecommend-pin-list\\u002FRESET"}}},topicPinList:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Factivity-index\\u002Ftopic-pin-list\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Factivity-index\\u002Ftopic-pin-list\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Factivity-index\\u002Ftopic-pin-list\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Factivity-index\\u002Ftopic-pin-list\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Factivity-index\\u002Ftopic-pin-list\\u002FRESET"},topicId:e,navList:\[{type:k,name:k,title:"推荐 ",id:k},{type:n,name:n,title:"热门 ",id:n},{type:q,name:q,title:"关注 ",id:q},{type:i,name:"opensource",title:"开源推荐 ",id:"5c09ea2b092dcb42c740fe73"},{type:i,name:"recruitment",title:"内推招聘",id:"5abb61e1092dcb4620ca3322"},{type:i,name:"dating",title:"掘金相亲",id:"5abcaa67092dcb4620ca335c"},{type:i,name:"slacking",title:"上班摸鱼",id:"5c106be9092dcb2cc5de7257"},{type:i,name:"app",title:"应用安利",id:"5b514af1092dcb61bd72800d"},{type:i,name:"tool",title:"开发工具",id:"5abb67d2092dcb4620ca3324"},{type:i,name:"news",title:"New资讯",id:"5c46a17f092dcb4737217152"}\],sortType:r}},search:{search\_result\_from:b,query:e,list:\[\],linkList:\[\],loading:a,skeleton:d,actionType:{FETCH:"@\\u002Fview\\u002Fsearch\\u002FFETCH",FETCH\_MORE:"@\\u002Fview\\u002Fsearch\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fsearch\\u002FRESET"}},columnIndex:{list:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002FcolumnIndex\\u002Flist\\u002FUPDATE",FETCH:"@\\u002Fview\\u002FcolumnIndex\\u002Flist\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002FcolumnIndex\\u002Flist\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002FcolumnIndex\\u002Flist\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002FcolumnIndex\\u002Flist\\u002FRESET"},sort:o,category:"all"},hotList:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002FcolumnIndex\\u002FhotList\\u002FUPDATE",FETCH:"@\\u002Fview\\u002FcolumnIndex\\u002FhotList\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002FcolumnIndex\\u002FhotList\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002FcolumnIndex\\u002FhotList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002FcolumnIndex\\u002FhotList\\u002FRESET"}}},timelineIndex:{tdkTemplates:\[\],categoryNavList:\[\],tagNavList:\[\],splitTagList:\[\],timelineAdList:\[\],list:\[\],sort:r,category:k,categoryId:e,tagId:e,tag:"全部",actionType:{FETCH\_TIMELINE\_LIST:"@\\u002Fview\\u002FtimelineIndex\\u002FFETCH\_TIMELINE\_LIST",FETCH\_CATEGORY\_LIST:"@\\u002Fview\\u002FtimelineIndex\\u002FFETCH\_CATEGORY\_LIST",FETCH\_TAG\_LIST:"@\\u002Fview\\u002FtimelineIndex\\u002FFETCH\_TAG\_LIST",DELETE\_ENTRY:"@\\u002Fview\\u002FtimelineIndex\\u002FDELETE\_ENTRY",DELETE\_USER\_ENTRIES:"@\\u002Fview\\u002FtimelineIndex\\u002FDELETE\_USER\_ENTRIES",DELETE\_TAG\_ENTRIES:"@\\u002Fview\\u002FtimelineIndex\\u002FDELETE\_TAG\_ENTRIES",FETCH\_MORE:"@\\u002Fview\\u002FtimelineIndex\\u002FFETCH\_MORE",FETCH:"@\\u002Fview\\u002FtimelineIndex\\u002FFETCH",RESET:"@\\u002Fview\\u002FtimelineIndex\\u002FRESET"},serverRenderTimelineList:a,timelineList:{list:\[\],cursor:f,skeleton:d,loading:a,hasMore:d,categoryId:e,tagId:e,sort:e,actionType:{UPDATE\_STATE:"timeline-list\\u002FUPDATE\_STATE",FETCH\_MORE:"timeline-list\\u002FFETCH\_MORE",FETCH:"timeline-list\\u002FFETCH",RESET:"timeline-list\\u002FRESET"}},recommendList:{list:\[\],cursor:f,sort:e,loading:a,skeleton:d,hasMore:d,actionType:{UPDATE\_STATE:"recommend-list\\u002FUPDATE\_STATE",FETCH\_MORE:"recommend-list\\u002FFETCH\_MORE",FETCH:"recommend-list\\u002FFETCH",RESET:"recommend-list\\u002FRESET"}},followingList:{list:\[\],cursor:f,skeleton:d,loading:a,hasMore:d,actionType:{UPDATE\_STATE:"following-list\\u002FUPDATE\_STATE",FETCH\_MORE:"following-list\\u002FFETCH\_MORE",FETCH:"following-list\\u002FFETCH",RESET:"following-list\\u002FRESET"}}},subscribe:{subscribed:{list:\[\],cursor:f,skeleton:d,loading:a,hasMore:a,actionType:{UPDATE\_STATE:"view\\u002Fsubscribe\\u002Fsubscribed\\u002Flist\\u002FUPDATE\_STATE",FETCH\_MORE:"view\\u002Fsubscribe\\u002Fsubscribed\\u002Flist\\u002FFETCH\_MORE",FETCH:"view\\u002Fsubscribe\\u002Fsubscribed\\u002Flist\\u002FFETCH",RESET:"view\\u002Fsubscribe\\u002Fsubscribed\\u002Flist\\u002FRESET"}},all:{list:\[\],cursor:f,loading:a,skeleton:d,hasMore:a,linkList:e,actionType:{UPDATE\_STATE:"view\\u002Fsubscribe\\u002Fall\\u002Flist\\u002FUPDATE\_STATE",FETCH\_MORE:"view\\u002Fsubscribe\\u002Fall\\u002Flist\\u002FFETCH\_MORE",FETCH:"view\\u002Fsubscribe\\u002Fall\\u002Flist\\u002FFETCH",RESET:"view\\u002Fsubscribe\\u002Fall\\u002Flist\\u002FRESET"}}},entryPublic:{entry:{user:{}},relatedEntryList:\[\],relatedCollectionList:\[\],actionType:{FETCH:"@\\u002Fview\\u002FentryPublic\\u002FFETCH",RESET:"@\\u002Fview\\u002FentryPublic\\u002FRESET"}},user:{user:{},serverRendered:a,userAnnuals:\[\],actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FFETCH",RESET:"@\\u002Fview\\u002Fuser\\u002FRESET",UPDATE:"@\\u002Fview\\u002Fuser\\u002FUPDATE",FETCH\_ANNUALS:"@\\u002Fview\\u002Fuser\\u002FFETCH\_ANNUALS"},detailList:{actionType:{RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FRESET"},likeList:{list:\[\],cursor:f,hasMore:a,loading:a,skeleton:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FlikePostList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FlikePostList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FlikePostList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FlikePostList\\u002FRESET"}},postList:{list:\[\],hasMore:a,skeleton:a,loading:a,sort:o,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpostList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpostList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpostList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpostList\\u002FRESET"}},searchList:{list:\[\],hasMore:a,skeleton:a,loading:a,key\_word:e,search\_type:b,cursor:f,isPostSearch:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FsearchList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FsearchList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FsearchList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FsearchList\\u002FRESET"}},tagList:{list:\[\],loading:a,skeleton:a,hasMore:a,cursor:f,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FtagList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FtagList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FtagList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FtagList\\u002FRESET"}},collectionList:{list:\[\],userId:e,skeleton:a,hasMore:a,cursor:f,type:x,loading:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FRESET",TOGGLE\_FOLLOW\_COLLECTION:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FTOGGLE\_FOLLOW\_COLLECTION",FOLLOW\_COLLECTION:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FFOLLOW\_COLLECTION",UNFOLLOW\_COLLECTION:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FUNFOLLOW\_COLLECTION",DELELTE\_COLLECTION:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FDELELTE\_COLLECTION",ADD\_COLLECTION:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FADD\_COLLECTION",EDIT\_COLLECTION:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcollectionList\\u002FEDIT\_COLLECTION"}},followerList:{list:\[\],cursor:f,hasMore:a,loading:a,skeleton:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowerList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowerList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowerList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowerList\\u002FRESET"}},followingList:{list:\[\],cursor:f,hasMore:a,skeleton:a,loading:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowingList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowingList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowingList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowingList\\u002FRESET"}},followingTeamsList:{list:\[\],cursor:f,hasMore:a,skeleton:a,loading:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowingTeamsList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowingTeamsList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowingTeamsList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FfollowingTeamsList\\u002FRESET"}},activityList:{list:\[\],cursor:f,hasMore:a,loading:a,skeleton:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FactivityList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FactivityList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FactivityList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FactivityList\\u002FRESET"}},bookList:{list:\[\],cursor:f,skeleton:a,hasMore:a,loading:a,type:"wrote",actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FbookList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FbookList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FbookList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FbookList\\u002FRESET"}},pinList:{list:\[\],hasMore:a,loading:a,skeleton:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpinList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpinList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpinList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpinList\\u002FRESET"}},courseList:{list:\[\],hasMore:a,loading:a,skeleton:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcourseList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcourseList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcourseList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcourseList\\u002FRESET"}},pinPraisedList:{list:\[\],cursor:f,hasMore:a,loading:a,skeleton:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpinPraisedList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpinPraisedList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpinPraisedList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FpinPraisedList\\u002FRESET"}},eventList:{list:\[\],cursor:f,hasMore:a,loading:a,skeleton:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FeventList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FeventList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FeventList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FeventList\\u002FRESET"}},selfColumnList:{list:\[\],hasMore:a,skeleton:a,loading:a,cursor:f,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcolumnList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcolumnList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcolumnList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcolumnList\\u002FRESET"}},columnFollowedList:{list:\[\],hasMore:a,skeleton:a,loading:a,cursor:f,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcolumnFollowedList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcolumnFollowedList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcolumnFollowedList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcolumnFollowedList\\u002FRESET",FILTER:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FcolumnFollowedList\\u002FFILTER"}},realtimes:{list:\[\],cursor:f,hasMore:a,loading:a,skeleton:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimes\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimes\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimes\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimes\\u002FRESET",DELETE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimes\\u002FDELETE"}},realtimeliked:{list:\[\],cursor:f,hasMore:a,loading:a,skeleton:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimeliked\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimeliked\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimeliked\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimeliked\\u002FRESET",DELETE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002Frealtimeliked\\u002FDELETE"}},robotList:{list:\[\],cursor:f,type:x,hasMore:a,skeleton:a,loading:a,actionType:{FETCH:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FrobotList\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FrobotList\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FrobotList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fuser\\u002FdetailList\\u002FrobotList\\u002FRESET"}}}},tag:{tag:{},actionType:{FETCH:"@\\u002Fview\\u002Ftag\\u002FFETCH",FETCH\_LIST:"@\\u002Fview\\u002Ftag\\u002FFETCH\_LIST",RESET:"@\\u002Fview\\u002Ftag\\u002FRESET"},list:{list:\[\],cursor:f,loading:a,skeleton:a,hasMore:a,actionType:{UPDATE\_STATE:"@\\u002Fview\\u002Ftag\\u002Flist\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Ftag\\u002Flist\\u002FFETCH\_MORE",FETCH:"@\\u002Fview\\u002Ftag\\u002Flist\\u002FFETCH",RESET:"@\\u002Fview\\u002Ftag\\u002Flist\\u002FRESET"}}},notification:{user:{actionType:{RESET:"@\\u002Fview\\u002Fnotification\\u002Fuser\\u002FRESET"},listState:{list:\[\],cursor:f,hasMore:a,isLoading:a,messageType:3,msgTotal:b,msgSubMap:{"1":b,"2":b,"3":b,"4":b,"7":b}},list:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Fnotification\\u002Fuser\\u002Flist\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Fnotification\\u002Fuser\\u002Flist\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Fnotification\\u002Fuser\\u002Flist\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Fnotification\\u002Fuser\\u002Flist\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fnotification\\u002Fuser\\u002Flist\\u002FRESET"}}},system:{actionType:{RESET:"@\\u002Fview\\u002Fnotification\\u002Fsystem\\u002FRESET"},list:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Fnotification\\u002Fsystem\\u002Flist\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Fnotification\\u002Fsystem\\u002Flist\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Fnotification\\u002Fsystem\\u002Flist\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Fnotification\\u002Fsystem\\u002Flist\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fnotification\\u002Fsystem\\u002Flist\\u002FRESET"}}}},column:{serverRenderList:a,column:{id:l},entry:{id:l,screenshot:m,liked:a,article\_id:l,article\_info:{article\_id:l,user\_id:y,category\_id:"6809637767543259144",tag\_ids:\[6809640653266354000,6809640407484334000,6809640477088809000\],visible\_level:b,link\_url:e,cover\_image:e,is\_gfw:b,title:z,brief\_content:A,is\_english:b,is\_original:g,user\_index:b,original\_type:b,original\_author:e,content:e,ctime:"1686713720",mtime:"1699328128",rtime:"1686720178",draft\_id:B,view\_count:C,collect\_count:D,digg\_count:s,comment\_count:E,hot\_index:329,is\_hot:b,rank\_index:.00116714,status:p,verify\_status:g,audit\_status:p,mark\_content:e,display\_count:b,is\_markdown:g,app\_html\_content:e,version:t,web\_html\_content:"\\u003Cstyle\\u003E.markdown-body{word-break:break-word;line-height:1.75;font-weight:400;font-size:16px;overflow-x:hidden;color:#252933}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{line-height:1.5;margin-top:35px;margin-bottom:10px;padding-bottom:5px}.markdown-body h1{font-size:24px;line-height:38px;margin-bottom:5px}.markdown-body h2{font-size:22px;line-height:34px;padding-bottom:12px;border-bottom:1px solid #ececec}.markdown-body h3{font-size:20px;line-height:28px}.markdown-body h4{font-size:18px;line-height:26px}.markdown-body h5{font-size:17px;line-height:24px}.markdown-body h6{font-size:16px;line-height:24px}.markdown-body p{line-height:inherit;margin-top:22px;margin-bottom:22px}.markdown-body img{max-width:100%}.markdown-body hr{border:none;border-top:1px solid #ddd;margin-top:32px;margin-bottom:32px}.markdown-body code{word-break:break-word;border-radius:2px;overflow-x:auto;background-color:#fff5f5;color:#ff502c;font-size:.87em;padding:.065em .4em}.markdown-body code,.markdown-body pre{font-family:Menlo,Monaco,Consolas,Courier New,monospace}.markdown-body pre{overflow:auto;position:relative;line-height:1.75}.markdown-body pre\\u003Ecode{font-size:12px;padding:15px 12px;margin:0;word-break:normal;display:block;overflow-x:auto;color:#333;background:#f8f8f8}.markdown-body a{text-decoration:none;color:#0269c8;border-bottom:1px solid #d1e9ff}.markdown-body a:active,.markdown-body a:hover{color:#275b8c}.markdown-body table{display:inline-block!important;font-size:12px;width:auto;max-width:100%;overflow:auto;border:1px solid #f6f6f6}.markdown-body thead{background:#f6f6f6;color:#000;text-align:left}.markdown-body tr:nth-child(2n){background-color:#fcfcfc}.markdown-body td,.markdown-body th{padding:12px 7px;line-height:24px}.markdown-body td{min-width:120px}.markdown-body blockquote{color:#666;padding:1px 23px;margin:22px 0;border-left:4px solid #cbcbcb;background-color:#f8f8f8}.markdown-body blockquote:after{display:block;content:\\"\\"}.markdown-body blockquote\\u003Ep{margin:10px 0}.markdown-body ol,.markdown-body ul{padding-left:28px}.markdown-body ol li,.markdown-body ul li{margin-bottom:0;list-style:inherit}.markdown-body ol li .task-list-item,.markdown-body ul li .task-list-item{list-style:none}.markdown-body ol li .task-list-item ol,.markdown-body ol li .task-list-item ul,.markdown-body ul li .task-list-item ol,.markdown-body ul li .task-list-item ul{margin-top:0}.markdown-body ol ol,.markdown-body ol ul,.markdown-body ul ol,.markdown-body ul ul{margin-top:3px}.markdown-body ol li{padding-left:6px}.markdown-body .contains-task-list{padding-left:0}.markdown-body .task-list-item{list-style:none}@media (max-width:720px){.markdown-body h1{font-size:24px}.markdown-body h2{font-size:20px}.markdown-body h3{font-size:18px}}\\u003C\\u002Fstyle\\u003E\\u003Cstyle data-highlight data-highlight-key=\\"juejin\\"\\u003E.markdown-body pre,.markdown-body pre\\u003Ecode.hljs{color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built\_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}\\u003C\\u002Fstyle\\u003E\\u003Ch2 data-id=\\"heading-0\\"\\u003E1.移动端适配与兼容性问题\\u003C\\u002Fh2\\u003E\\n\\u003Ch3 data-id=\\"heading-1\\"\\u003E1）new Date（）在IOS上出现值为NAN的问题\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E但在IOS下，这是使用获取到的值是NAN。 原因：因为IOS下的new Date()不支持\\"-“这个字符 解决方法：把”-“改成‘”\\u002F\\"就可以了\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003E\\u003Cspan class=\\"hljs-keyword\\"\\u003Enew\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-title class\_\\"\\u003EDate\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E\\"2017-08-11 12:00:00\\"\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Ereplace\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-regexp\\"\\u003E\\u002F-\\u002Fg\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-string\\"\\u003E\\"\\u002F\\"\\u003C\\u002Fspan\\u003E));\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Ch3 data-id=\\"heading-2\\"\\u003E2) Android部分机型使用height和line-height等值设置垂直居中，但会显示偏高的问题0\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E原因：貌似是有部分Android机型有自己默认的line-height，我们额外设置的line-height不起作用。 解决办法：设置line-height：normal，再通过padding去设置居中就可以了。\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003E\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cp\\u003Eline-height：normal; padding:xxpx 0;\\u003C\\u002Fp\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-ini\\" lang=\\"ini\\"\\u003E\\u003Cspan class=\\"hljs-comment\\"\\u003E### 3) 防止手机中网页放大和缩小。\\u003C\\u002Fspan\\u003E\\n- viewport 设置不缩放\\n\`\`\`html\\n&#x3C;meta \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"viewport\\"\\u003C\\u002Fspan\\u003E content=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0\\"\\u003C\\u002Fspan\\u003E \\u002F\\u003E\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-3\\"\\u003E3) iphone及ipad下输入框默认内阴影\\u003C\\u002Fh3\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-css\\" lang=\\"css\\"\\u003EElement {\\n -webkit-tap-highlight-\\u003Cspan class=\\"hljs-attribute\\"\\u003Ecolor\\u003C\\u002Fspan\\u003E:\\u003Cspan class=\\"hljs-built\_in\\"\\u003Ergba\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-number\\"\\u003E255\\u003C\\u002Fspan\\u003E,\\u003Cspan class=\\"hljs-number\\"\\u003E255\\u003C\\u002Fspan\\u003E,\\u003Cspan class=\\"hljs-number\\"\\u003E255\\u003C\\u002Fspan\\u003E,\\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E)\\n}\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-4\\"\\u003E4) 某些Android手机圆角失效\\u003C\\u002Fh3\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-css\\" lang=\\"css\\"\\u003E\\u003Cspan class=\\"hljs-attribute\\"\\u003Ebackground-clip\\u003C\\u002Fspan\\u003E: padding-box;\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-5\\"\\u003E5) 移动端300ms点击延迟\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E设置meta标签禁止缩放\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-html\\" lang=\\"html\\"\\u003E\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"viewport\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"user-scalable=no\\"\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\n\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"viewport\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"initial-scale=1,maximum-scale=1\\"\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\n\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003EFastClick\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cblockquote\\u003E\\n\\u003Cp\\u003EFastClick 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。\\u003C\\u002Fp\\u003E\\n\\u003C\\u002Fblockquote\\u003E\\n\\u003Ch3 data-id=\\"heading-6\\"\\u003E6) 点击穿透问题\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E来得很直接github上有个fastclick可以完美解决 引入fastclick.js，因为fastclick源码不依赖其他库所以你可以在原生的js前直接加上\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003E\\u003Cspan class=\\"hljs-variable language\_\\"\\u003Ewindow\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EaddEventListener\\u003C\\u002Fspan\\u003E( \\u003Cspan class=\\"hljs-string\\"\\u003E\\"load\\"\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003E\\u003C\\u002Fspan\\u003E) {\\n\\u003Cspan class=\\"hljs-title class\_\\"\\u003EFastClick\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Eattach\\u003C\\u002Fspan\\u003E( \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Edocument\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003Ebody\\u003C\\u002Fspan\\u003E );\\n}, \\u003Cspan class=\\"hljs-literal\\"\\u003Efalse\\u003C\\u002Fspan\\u003E );\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E对于B元素本身存在默认click事件的情况，应及用touchend代替tap事件并阻止掉时A元素touchend的默认行为preventDefault()，从而阻止click事件的产生。\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003E$(\\u003Cspan class=\\"hljs-string\\"\\u003E\\"#aa\\"\\u003C\\u002Fspan\\u003E).\\u003Cspan class=\\"hljs-title function\_\\"\\u003Eon\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E\\"touchend\\"\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E (\\u003Cspan class=\\"hljs-params\\"\\u003Eevent\\u003C\\u002Fspan\\u003E) {\\n\\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F很多处理比如隐藏什么的\\u003C\\u002Fspan\\u003E\\nevent.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EpreventDefault\\u003C\\u002Fspan\\u003E();\\n});\\n\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-7\\"\\u003E7) 电话号码识别\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E\\n\\u003Cp\\u003E在 iOS Safari （其他浏览器和 Android 均不会）上会对那些看起来像是电话号码的数字处理为电话链接，比如：\\u003C\\u002Fp\\u003E\\n\\u003C\\u002Fli\\u003E\\n\\u003Cli\\u003E\\n\\u003Cp\\u003E7 位数字，形如：1234567\\u003C\\u002Fp\\u003E\\n\\u003C\\u002Fli\\u003E\\n\\u003Cli\\u003E\\n\\u003Cp\\u003E带括号及加号的数字，形如：(+86)123456789\\u003C\\u002Fp\\u003E\\n\\u003C\\u002Fli\\u003E\\n\\u003Cli\\u003E\\n\\u003Cp\\u003E双连接线的数字，形如：00-00-00111\\u003C\\u002Fp\\u003E\\n\\u003C\\u002Fli\\u003E\\n\\u003Cli\\u003E\\n\\u003Cp\\u003E11 位数字，形如：13800138000\\u003C\\u002Fp\\u003E\\n\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-html\\" lang=\\"html\\"\\u003E\\n关闭识别\\nhtml复制代码\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"format-detection\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"telephone=no\\"\\u003C\\u002Fspan\\u003E \\u002F\\u003E\\u003C\\u002Fspan\\u003E\\n\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-8\\"\\u003E8) 邮箱识别\\u003C\\u002Fh3\\u003E\\n\\u003Cp\\u003E邮箱识别\\n安卓上会对符合邮箱格式的字符串进行识别，我们可以通过如下的 meta 来管别邮箱的自动识别：\\u003C\\u002Fp\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-html\\" lang=\\"html\\"\\u003E\\n\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"email=no\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"format-detection\\"\\u003C\\u002Fspan\\u003E \\u002F\\u003E\\u003C\\u002Fspan\\u003E\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-9\\"\\u003E9) 常用meta 标签的设置\\u003C\\u002Fh3\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-html\\" lang=\\"html\\"\\u003E\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"screen-orientation\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"portrait\\"\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E \\u002F\\u002FAndroid 禁止屏幕旋转\\n\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"full-screen\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"yes\\"\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E             \\u002F\\u002F全屏显示\\n\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"browsermode\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"application\\"\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E     \\u002F\\u002FUC应用模式，使用了application这种应用模式后，页面讲默认全屏，禁止长按菜单，禁止收拾，标准排版，以及强制图片显示。\\n\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"x5-orientation\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"portrait\\"\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E     \\u002F\\u002FQQ强制竖屏\\n\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"x5-fullscreen\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"true\\"\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E          \\u002F\\u002FQQ强制全屏\\n\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Emeta\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Ename\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"x5-page-mode\\"\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"app\\"\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E            \\u002F\\u002FQQ应用模式\\n\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-10\\"\\u003E10) 清除输入框内阴影\\u003C\\u002Fh3\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-css\\" lang=\\"css\\"\\u003E\\u003Cspan class=\\"hljs-selector-tag\\"\\u003Ediv\\u003C\\u002Fspan\\u003E {\\n -webkit-appearance: none;\\n}\\n\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-11\\"\\u003E11) 输入框默认字体颜色\\u003C\\u002Fh3\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-css\\" lang=\\"css\\"\\u003E\\u003Cspan class=\\"hljs-selector-tag\\"\\u003Einput\\u003C\\u002Fspan\\u003E::-webkit-input-placeholder,\\ntextarea::-webkit-input-placeholder {\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Ecolor\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E#c7c7c7\\u003C\\u002Fspan\\u003E;\\n}\\n\\u003Cspan class=\\"hljs-selector-tag\\"\\u003Einput\\u003C\\u002Fspan\\u003E:-moz-placeholder,\\ntextarea:-moz-placeholder {\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Ecolor\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E#c7c7c7\\u003C\\u002Fspan\\u003E;\\n}\\n\\u003Cspan class=\\"hljs-selector-tag\\"\\u003Einput\\u003C\\u002Fspan\\u003E:-ms-input-placeholder,\\ntextarea:-ms-input-placeholder {\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Ecolor\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E#c7c7c7\\u003C\\u002Fspan\\u003E;\\n}\\n\\n\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-12\\"\\u003E12) 用户设置字号放大或者缩小导致页面布局错误\\u003C\\u002Fh3\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-css\\" lang=\\"css\\"\\u003E\\u003Cspan class=\\"hljs-selector-tag\\"\\u003Ebody\\u003C\\u002Fspan\\u003E {\\n  -webkit-text-size-adjust: \\u003Cspan class=\\"hljs-number\\"\\u003E100%\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-meta\\"\\u003E!important\\u003C\\u002Fspan\\u003E;\\n  text-size-adjust: \\u003Cspan class=\\"hljs-number\\"\\u003E100%\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-meta\\"\\u003E!important\\u003C\\u002Fspan\\u003E;\\n  -moz-text-size-adjust: \\u003Cspan class=\\"hljs-number\\"\\u003E100%\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-meta\\"\\u003E!important\\u003C\\u002Fspan\\u003E;\\n}\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-13\\"\\u003E13) android系统中元素被点击时产生边框\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E部分android系统点击一个链接，会出现一个边框或者半透明灰色遮罩, 不同生产商定义出来额效果不一样。去除代码如下\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-css\\" lang=\\"css\\"\\u003Ecss复制代码\\u003Cspan class=\\"hljs-selector-tag\\"\\u003Ea\\u003C\\u002Fspan\\u003E,\\u003Cspan class=\\"hljs-selector-tag\\"\\u003Ebutton\\u003C\\u002Fspan\\u003E,\\u003Cspan class=\\"hljs-selector-tag\\"\\u003Einput\\u003C\\u002Fspan\\u003E,\\u003Cspan class=\\"hljs-selector-tag\\"\\u003Etextarea\\u003C\\u002Fspan\\u003E{\\n  -webkit-tap-highlight-\\u003Cspan class=\\"hljs-attribute\\"\\u003Ecolor\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-built\_in\\"\\u003Ergba\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E,\\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E,\\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E,\\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E)\\n  -webkit-user-modify:read-write-plaintext-only; \\n}\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-14\\"\\u003E14) audio 和 video 在 ios 和 andriod 中自动播放\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E这个不是bug，由于自动播放网页中的音频或视频，会给用户带来一些困扰或者不必要的流量消耗，所以苹果系统和安卓系统通常都会禁止自动播放和使用 JS 的触发播放，必须由用户来触发才可以播放。加入自动触发播放的代码\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003E$(\\u003Cspan class=\\"hljs-string\\"\\u003E'html'\\u003C\\u002Fspan\\u003E).\\u003Cspan class=\\"hljs-title function\_\\"\\u003Eone\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'touchstart'\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003E\\u003C\\u002Fspan\\u003E) {\\n  audio.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Eplay\\u003C\\u002Fspan\\u003E()\\n})\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-15\\"\\u003E15) iOS 上拉边界下拉出现空白\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E手指按住屏幕下拉，屏幕顶部会多出一块白色区域。手指按住屏幕上拉，底部多出一块白色区域。\\u003C\\u002Fli\\u003E\\n\\u003Cli\\u003E在 iOS 中，手指按住屏幕上下拖动，会触发 touchmove 事件。这个事件触发的对象是整个 webview 容器，容器自然会被拖动，剩下的部分会成空白。\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003E\\u003Cspan class=\\"hljs-variable language\_\\"\\u003Edocument\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003Ebody\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EaddEventListener\\u003C\\u002Fspan\\u003E(\\n  \\u003Cspan class=\\"hljs-string\\"\\u003E'touchmove'\\u003C\\u002Fspan\\u003E,\\n  \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003Ee\\u003C\\u002Fspan\\u003E) {\\n    \\u003Cspan class=\\"hljs-keyword\\"\\u003Eif\\u003C\\u002Fspan\\u003E (e.\\u003Cspan class=\\"hljs-property\\"\\u003E\_isScroller\\u003C\\u002Fspan\\u003E) \\u003Cspan class=\\"hljs-keyword\\"\\u003Ereturn\\u003C\\u002Fspan\\u003E\\n    \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 阻止默认事件\\u003C\\u002Fspan\\u003E\\n    e.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EpreventDefault\\u003C\\u002Fspan\\u003E()\\n  },\\n  {\\n    \\u003Cspan class=\\"hljs-attr\\"\\u003Epassive\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-literal\\"\\u003Efalse\\u003C\\u002Fspan\\u003E\\n  }\\n)\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-16\\"\\u003E16) onkeyUp 和 onKeydown 兼容性问题\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003EIOS 中 input 键盘事件 keyup、keydown、等支持不是很好, 用 input 监听键盘 keyup 事件，在安卓手机浏览器中没有问题，但是在 ios 手机浏览器中用输入法输入之后，并未立刻相应 keyup 事件\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Ch3 data-id=\\"heading-17\\"\\u003E17) IOS12 输入框难以点击获取焦点，弹不出软键盘\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E定位找到问题是 fastclick.js 对 IOS12 的兼容性，可在 fastclick.js 源码或者 main.js 做以下修改\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003E \\u003Cspan class=\\"hljs-title class\_\\"\\u003EFastClick\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003E\\u003Cspan class=\\"hljs-keyword\\"\\u003Eprototype\\u003C\\u002Fspan\\u003E\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003Efocus\\u003C\\u002Fspan\\u003E = \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003EtargetElement\\u003C\\u002Fspan\\u003E) {\\n  \\u003Cspan class=\\"hljs-keyword\\"\\u003Evar\\u003C\\u002Fspan\\u003E length\\n  \\u003Cspan class=\\"hljs-keyword\\"\\u003Eif\\u003C\\u002Fspan\\u003E (\\n    deviceIsIOS &#x26;&#x26;\\n    targetElement.\\u003Cspan class=\\"hljs-property\\"\\u003EsetSelectionRange\\u003C\\u002Fspan\\u003E &#x26;&#x26;\\n    targetElement.\\u003Cspan class=\\"hljs-property\\"\\u003Etype\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EindexOf\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'date'\\u003C\\u002Fspan\\u003E) !== \\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E &#x26;&#x26;\\n    targetElement.\\u003Cspan class=\\"hljs-property\\"\\u003Etype\\u003C\\u002Fspan\\u003E !== \\u003Cspan class=\\"hljs-string\\"\\u003E'time'\\u003C\\u002Fspan\\u003E &#x26;&#x26;\\n    targetElement.\\u003Cspan class=\\"hljs-property\\"\\u003Etype\\u003C\\u002Fspan\\u003E !== \\u003Cspan class=\\"hljs-string\\"\\u003E'month'\\u003C\\u002Fspan\\u003E\\n  ) {\\n    length = targetElement.\\u003Cspan class=\\"hljs-property\\"\\u003Evalue\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003Elength\\u003C\\u002Fspan\\u003E\\n    targetElement.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EsetSelectionRange\\u003C\\u002Fspan\\u003E(length, length)\\n    targetElement.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Efocus\\u003C\\u002Fspan\\u003E()\\n  } \\u003Cspan class=\\"hljs-keyword\\"\\u003Eelse\\u003C\\u002Fspan\\u003E {\\n    targetElement.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Efocus\\u003C\\u002Fspan\\u003E()\\n  }\\n}\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-18\\"\\u003E18) IOS 键盘收起时页面没用回落，底部会留白\\u003C\\u002Fh3\\u003E\\n\\u003Cp\\u003E通过监听键盘回落时间滚动到原来的位置\\u003C\\u002Fp\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003E\\u003Cspan class=\\"hljs-variable language\_\\"\\u003Ewindow\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EaddEventListener\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'focusout'\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003E\\u003C\\u002Fspan\\u003E) {\\n  \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Ewindow\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EscrollTo\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E)\\n})\\n\\n\\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002Finput输入框弹起软键盘的解决方案。\\u003C\\u002Fspan\\u003E\\n\\u003Cspan class=\\"hljs-keyword\\"\\u003Evar\\u003C\\u002Fspan\\u003E bfscrolltop = \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Edocument\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003Ebody\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003EscrollTop\\u003C\\u002Fspan\\u003E\\n$(\\u003Cspan class=\\"hljs-string\\"\\u003E'input'\\u003C\\u002Fspan\\u003E)\\n  .\\u003Cspan class=\\"hljs-title function\_\\"\\u003Efocus\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003E\\u003C\\u002Fspan\\u003E) {\\n    \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Edocument\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003Ebody\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003EscrollTop\\u003C\\u002Fspan\\u003E = \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Edocument\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003Ebody\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003EscrollHeight\\u003C\\u002Fspan\\u003E\\n    \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002Fconsole.log(document.body.scrollTop);\\u003C\\u002Fspan\\u003E\\n  })\\n  .\\u003Cspan class=\\"hljs-title function\_\\"\\u003Eblur\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003E\\u003C\\u002Fspan\\u003E) {\\n    \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Edocument\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003Ebody\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-property\\"\\u003EscrollTop\\u003C\\u002Fspan\\u003E = bfscrolltop\\n    \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002Fconsole.log(document.body.scrollTop);\\u003C\\u002Fspan\\u003E\\n  })\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch3 data-id=\\"heading-19\\"\\u003E19) iOS 下fixed 失效的原因\\u003C\\u002Fh3\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E软键盘唤起后，页面的 fixed 元素将失效，变成了 absolute，所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。不仅限于 type=text 的输入框，凡是软键盘（比如时间日期选择、select 选择等等）被唤起，都会遇到同样地问题。解决方法: 不让页面滚动，而是让主体部分自己滚动,主体部分高度设为 100%，overflow:scroll\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-html\\" lang=\\"html\\"\\u003E\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Ebody\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\n  \\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Ediv\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Eclass\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E'warper'\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\n    \\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Ediv\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Eclass\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E'main'\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u002F\\u003Cspan class=\\"hljs-name\\"\\u003Ediv\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\n  \\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Ediv\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\n  \\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u003Cspan class=\\"hljs-name\\"\\u003Ediv\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-attr\\"\\u003Eclass\\u003C\\u002Fspan\\u003E=\\u003Cspan class=\\"hljs-string\\"\\u003E\\"fix-bottom\\"\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u002F\\u003Cspan class=\\"hljs-name\\"\\u003Ediv\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\n\\u003Cspan class=\\"hljs-tag\\"\\u003E&#x3C;\\u002F\\u003Cspan class=\\"hljs-name\\"\\u003Ebody\\u003C\\u002Fspan\\u003E\\u003E\\u003C\\u002Fspan\\u003E\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-css\\" lang=\\"css\\"\\u003E\\u003Cspan class=\\"hljs-selector-class\\"\\u003E.warper\\u003C\\u002Fspan\\u003E {\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Eposition\\u003C\\u002Fspan\\u003E: absolute;\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Ewidth\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E100%\\u003C\\u002Fspan\\u003E;\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Eleft\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E;\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Eright\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E;\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Etop\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E;\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Ebottom\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E;\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Eoverflow-y\\u003C\\u002Fspan\\u003E: scroll;\\n  -webkit-\\u003Cspan class=\\"hljs-attribute\\"\\u003Eoverflow\\u003C\\u002Fspan\\u003E-scrolling: touch; \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\* 解决ios滑动不流畅问题 \*\\u002F\\u003C\\u002Fspan\\u003E\\n}\\n\\u003Cspan class=\\"hljs-selector-class\\"\\u003E.fix-bottom\\u003C\\u002Fspan\\u003E {\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Eposition\\u003C\\u002Fspan\\u003E: fixed;\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Ebottom\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E0\\u003C\\u002Fspan\\u003E;\\n  \\u003Cspan class=\\"hljs-attribute\\"\\u003Ewidth\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-number\\"\\u003E100%\\u003C\\u002Fspan\\u003E;\\n}\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch2 data-id=\\"heading-20\\"\\u003E2.获取用户电量进行提示\\u003C\\u002Fh2\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003Enavigator.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EgetBattery\\u003C\\u002Fspan\\u003E().\\u003Cspan class=\\"hljs-title function\_\\"\\u003Ethen\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E (\\u003Cspan class=\\"hljs-params\\"\\u003Ebattery\\u003C\\u002Fspan\\u003E) {\\n \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 获取设备电量剩余百分比\\u003C\\u002Fspan\\u003E\\n \\u003Cspan class=\\"hljs-keyword\\"\\u003Evar\\u003C\\u002Fspan\\u003E level = battery.\\u003Cspan class=\\"hljs-property\\"\\u003Elevel\\u003C\\u002Fspan\\u003E \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F最大值为1,对应电量100%\\u003C\\u002Fspan\\u003E\\n \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'Level: '\\u003C\\u002Fspan\\u003E + level \* \\u003Cspan class=\\"hljs-number\\"\\u003E100\\u003C\\u002Fspan\\u003E + \\u003Cspan class=\\"hljs-string\\"\\u003E'%'\\u003C\\u002Fspan\\u003E)\\n\\n \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 获取设备充电状态\\u003C\\u002Fspan\\u003E\\n \\u003Cspan class=\\"hljs-keyword\\"\\u003Evar\\u003C\\u002Fspan\\u003E charging = battery.\\u003Cspan class=\\"hljs-property\\"\\u003Echarging\\u003C\\u002Fspan\\u003E\\n \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'充电状态: '\\u003C\\u002Fspan\\u003E + charging)\\n\\n \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 获取设备完全充电需要的时间\\u003C\\u002Fspan\\u003E\\n \\u003Cspan class=\\"hljs-keyword\\"\\u003Evar\\u003C\\u002Fspan\\u003E chargingTime = battery.\\u003Cspan class=\\"hljs-property\\"\\u003EchargingTime\\u003C\\u002Fspan\\u003E\\n \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'完全充电需要的时间: '\\u003C\\u002Fspan\\u003E + chargingTime)\\n\\n \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 获取设备完全放电需要的时间\\u003C\\u002Fspan\\u003E\\n \\u003Cspan class=\\"hljs-keyword\\"\\u003Evar\\u003C\\u002Fspan\\u003E dischargingTime = battery.\\u003Cspan class=\\"hljs-property\\"\\u003EdischargingTime\\u003C\\u002Fspan\\u003E\\n \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'完全放电需要的时间: '\\u003C\\u002Fspan\\u003E + dischargingTime)\\n})\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E监听用户电池状态变化\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003Enavigator.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EgetBattery\\u003C\\u002Fspan\\u003E().\\u003Cspan class=\\"hljs-title function\_\\"\\u003Ethen\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E (\\u003Cspan class=\\"hljs-params\\"\\u003Ebattery\\u003C\\u002Fspan\\u003E) {\\n \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 添加事件，当设备电量改变时触发\\u003C\\u002Fspan\\u003E\\n battery.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EaddEventListener\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'levelchange'\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E (\\u003Cspan class=\\"hljs-params\\"\\u003E\\u003C\\u002Fspan\\u003E) {\\n \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'电量改变: '\\u003C\\u002Fspan\\u003E + battery.\\u003Cspan class=\\"hljs-property\\"\\u003Elevel\\u003C\\u002Fspan\\u003E)\\n })\\n\\n \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 添加事件，当设备充电状态改变时触发\\u003C\\u002Fspan\\u003E\\n battery.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EaddEventListener\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'chargingchange'\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E (\\u003Cspan class=\\"hljs-params\\"\\u003E\\u003C\\u002Fspan\\u003E) {\\n \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'充电状态改变: '\\u003C\\u002Fspan\\u003E + battery.\\u003Cspan class=\\"hljs-property\\"\\u003Echarging\\u003C\\u002Fspan\\u003E)\\n })\\n\\n \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 添加事件，当设备完全充电需要时间改变时触发\\u003C\\u002Fspan\\u003E\\n battery.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EaddEventListener\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'chargingtimechange'\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E (\\u003Cspan class=\\"hljs-params\\"\\u003E\\u003C\\u002Fspan\\u003E) {\\n \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'完全充电需要时间: '\\u003C\\u002Fspan\\u003E + battery.\\u003Cspan class=\\"hljs-property\\"\\u003EchargingTime\\u003C\\u002Fspan\\u003E)\\n })\\n\\n \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 添加事件，当设备完全放电需要时间改变时触发\\u003C\\u002Fspan\\u003E\\n battery.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EaddEventListener\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'dischargingtimechange'\\u003C\\u002Fspan\\u003E, \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E (\\u003Cspan class=\\"hljs-params\\"\\u003E\\u003C\\u002Fspan\\u003E) {\\n \\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'完全放电需要时间: '\\u003C\\u002Fspan\\u003E + battery.\\u003Cspan class=\\"hljs-property\\"\\u003EdischargingTime\\u003C\\u002Fspan\\u003E)\\n })\\n})\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Cul\\u003E\\n\\u003Cli\\u003E兼容性\\u003C\\u002Fli\\u003E\\n\\u003C\\u002Ful\\u003E\\n\\u003Cp\\u003E\\u003Ca href=\\"https:\\u002F\\u002Flink.juejin.cn?target=https%3A%2F%2Fp3-juejin.byteimg.com%2Ftos-cn-i-k3u1fbpfcp%2F602746fdee4f42b88e7b8675894e7c52~tplv-k3u1fbpfcp-zoom-in-crop-mark%253A1512%253A0%253A0%253A0.awebp\\" target=\\"\_blank\\" title=\\"https:\\u002F\\u002Fp3-juejin.byteimg.com\\u002Ftos-cn-i-k3u1fbpfcp\\u002F602746fdee4f42b88e7b8675894e7c52~tplv-k3u1fbpfcp-zoom-in-crop-mark%3A1512%3A0%3A0%3A0.awebp\\" ref=\\"nofollow noopener noreferrer\\"\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fp\\u003E\\n\\u003Ch2 data-id=\\"heading-21\\"\\u003E3.小程序版本更新提示\\u003C\\u002Fh2\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-js\\" lang=\\"js\\"\\u003E\\u003Cspan class=\\"hljs-attr\\"\\u003EonShow\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003Ee\\u003C\\u002Fspan\\u003E) {\\n\\t\\t\\t\\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-string\\"\\u003E'showed2'\\u003C\\u002Fspan\\u003E, e);\\n\\t\\t\\tuni.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EhideTabBar\\u003C\\u002Fspan\\u003E();\\n \\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F系统获取 本API返回全局唯一的版本更新管理器对象： updateManager，用于管理小程序更新。\\u003C\\u002Fspan\\u003E\\n\\t\\t\\t\\u003Cspan class=\\"hljs-keyword\\"\\u003Econst\\u003C\\u002Fspan\\u003E updateManager = uni.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EgetUpdateManager\\u003C\\u002Fspan\\u003E();\\n\\t\\t\\t\\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(updateManager, \\u003Cspan class=\\"hljs-string\\"\\u003E\\"uploadRes\\"\\u003C\\u002Fspan\\u003E);\\n\\t\\t\\tupdateManager.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EonCheckForUpdate\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003Eres\\u003C\\u002Fspan\\u003E) {\\n\\t\\t\\t\\t\\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(res, \\u003Cspan class=\\"hljs-string\\"\\u003E\\"uploadRes\\"\\u003C\\u002Fspan\\u003E);\\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F返回true 或 false 是否更新\\u003C\\u002Fspan\\u003E\\n\\t\\t\\t\\t\\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 请求完新版本信息的回调\\u003C\\u002Fspan\\u003E\\n\\t\\t\\t\\t\\u003Cspan class=\\"hljs-variable language\_\\"\\u003Econsole\\u003C\\u002Fspan\\u003E.\\u003Cspan class=\\"hljs-title function\_\\"\\u003Elog\\u003C\\u002Fspan\\u003E(res.\\u003Cspan class=\\"hljs-property\\"\\u003EhasUpdate\\u003C\\u002Fspan\\u003E);\\n\\t\\t\\t\\t\\u003Cspan class=\\"hljs-keyword\\"\\u003Eif\\u003C\\u002Fspan\\u003E (res.\\u003Cspan class=\\"hljs-property\\"\\u003EhasUpdate\\u003C\\u002Fspan\\u003E) {\\n\\t\\t\\t\\t\\tupdateManager.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EonUpdateReady\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003Eres\\u003C\\u002Fspan\\u003E) {\\n\\t\\t\\t\\t\\t\\tuni.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EshowModal\\u003C\\u002Fspan\\u003E({\\n\\t\\t\\t\\t\\t\\t\\t\\u003Cspan class=\\"hljs-attr\\"\\u003Etitle\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-string\\"\\u003E'更新提示'\\u003C\\u002Fspan\\u003E,\\n\\t\\t\\t\\t\\t\\t\\t\\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-string\\"\\u003E'新版本已经准备好，是否重启应用？'\\u003C\\u002Fspan\\u003E,\\n\\t\\t\\t\\t\\t\\t\\t\\u003Cspan class=\\"hljs-title function\_\\"\\u003Esuccess\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003Eres\\u003C\\u002Fspan\\u003E) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\u003Cspan class=\\"hljs-keyword\\"\\u003Eif\\u003C\\u002Fspan\\u003E (res.\\u003Cspan class=\\"hljs-property\\"\\u003Econfirm\\u003C\\u002Fspan\\u003E) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 新的版本已经下载好，调用 applyUpdate 应用新版本并重启\\u003C\\u002Fspan\\u003E\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tupdateManager.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EapplyUpdate\\u003C\\u002Fspan\\u003E();\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t});\\n\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\tupdateManager.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EonUpdateFailed\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-keyword\\"\\u003Efunction\\u003C\\u002Fspan\\u003E(\\u003Cspan class=\\"hljs-params\\"\\u003Eres\\u003C\\u002Fspan\\u003E) {\\n\\t\\t\\t\\t\\t\\t\\u003Cspan class=\\"hljs-comment\\"\\u003E\\u002F\\u002F 新的版本下载失败\\u003C\\u002Fspan\\u003E\\n\\t\\t\\t\\t\\t\\tuni.\\u003Cspan class=\\"hljs-title function\_\\"\\u003EshowModal\\u003C\\u002Fspan\\u003E({\\n\\t\\t\\t\\t\\t\\t\\t\\u003Cspan class=\\"hljs-attr\\"\\u003Etitle\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-string\\"\\u003E\\"新版本已更新！\\"\\u003C\\u002Fspan\\u003E,\\n\\t\\t\\t\\t\\t\\t\\t\\u003Cspan class=\\"hljs-attr\\"\\u003Econtent\\u003C\\u002Fspan\\u003E: \\u003Cspan class=\\"hljs-string\\"\\u003E\\"新版本已上线，请重启小程序完成更新！\\"\\u003C\\u002Fspan\\u003E\\n\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t}\\n\\t\\t\\t});\\n\\n\\t\\t},\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E\\n\\u003Ch2 data-id=\\"heading-22\\"\\u003E4.手机端点击input输入框时网页自动放大\\u003C\\u002Fh2\\u003E\\n\\u003Cp\\u003E这是因为在移动端自适应宽度的代码中，没有把input的自动缩放关闭！一般常见于苹果手机的ios系统，而安卓系统似乎是默认关闭。\\u003C\\u002Fp\\u003E\\n\\u003Cp\\u003Einput框自动放大，虽然说有便于用户的输入和阅读，但也同时给用户带来了视觉的麻烦，所以一般情况下，我们都是选择关闭自动缩放的！\\u003C\\u002Fp\\u003E\\n\\u003Cp\\u003E那么该如何关闭input输入框在手机端的这个缩放效果呢？\\u003C\\u002Fp\\u003E\\n\\u003Cp\\u003E1，找到你的网页头部head的代码，查看代码并找到，下面的这段：\\u003C\\u002Fp\\u003E\\n\\u003Cp\\u003E\\u003Ccode\\u003E&#x3C;meta name=\\"viewport\\" content=\\"width=device-width,initial-scale=1.0\\"\\u003E\\u003C\\u002Fcode\\u003E\\u003C\\u002Fp\\u003E\\n\\u003Cp\\u003E这段\\u003C\\u002Fp\\u003E\\n\\u003Cp\\u003E2，找到之后，将这段代码更改为：\\u003C\\u002Fp\\u003E\\n\\u003Cp\\u003E\\u003Ccode\\u003E&#x3C;meta name=\\"viewport\\" content=\\"width=device-width,initial-scale=1,user-scalable=0\\"\\u003E\\u003C\\u002Fcode\\u003E\\u003C\\u002Fp\\u003E\\n\\u003Ch2 data-id=\\"heading-23\\"\\u003E5.常用api\\u003C\\u002Fh2\\u003E\\n\\u003Cpre\\u003E\\u003Ccode class=\\"hljs language-arduino\\" lang=\\"arduino\\"\\u003Eshow-menu-by-longpress | &#x3C;image\\u003E标签 添加后长按扫描二维码\\n\\u003C\\u002Fcode\\u003E\\u003C\\u002Fpre\\u003E",meta\_info:"{\\"plugins\\":\[5\],\\"video\_count\\":0}",catalog:"\[{\\"title\\":\\"1.移动端适配与兼容性问题\\",\\"hash\\":\\"#heading-0\\",\\"deep\\":1,\\"children\\":\[{\\"title\\":\\"1）new Date（）在IOS上出现值为NAN的问题\\",\\"hash\\":\\"#heading-1\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"2) Android部分机型使用height和line-height等值设置垂直居中，但会显示偏高的问题0\\",\\"hash\\":\\"#heading-2\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"3) iphone及ipad下输入框默认内阴影\\",\\"hash\\":\\"#heading-3\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"4) 某些Android手机圆角失效\\",\\"hash\\":\\"#heading-4\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"5) 移动端300ms点击延迟\\",\\"hash\\":\\"#heading-5\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"6) 点击穿透问题\\",\\"hash\\":\\"#heading-6\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"7) 电话号码识别\\",\\"hash\\":\\"#heading-7\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"8) 邮箱识别\\",\\"hash\\":\\"#heading-8\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"9) 常用meta 标签的设置\\",\\"hash\\":\\"#heading-9\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"10) 清除输入框内阴影\\",\\"hash\\":\\"#heading-10\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"11) 输入框默认字体颜色\\",\\"hash\\":\\"#heading-11\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"12) 用户设置字号放大或者缩小导致页面布局错误\\",\\"hash\\":\\"#heading-12\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"13) android系统中元素被点击时产生边框\\",\\"hash\\":\\"#heading-13\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"14) audio 和 video 在 ios 和 andriod 中自动播放\\",\\"hash\\":\\"#heading-14\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"15) iOS 上拉边界下拉出现空白\\",\\"hash\\":\\"#heading-15\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"16) onkeyUp 和 onKeydown 兼容性问题\\",\\"hash\\":\\"#heading-16\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"17) IOS12 输入框难以点击获取焦点，弹不出软键盘\\",\\"hash\\":\\"#heading-17\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"18) IOS 键盘收起时页面没用回落，底部会留白\\",\\"hash\\":\\"#heading-18\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"19) iOS 下fixed 失效的原因\\",\\"hash\\":\\"#heading-19\\",\\"deep\\":2,\\"children\\":\[\],\\"visible\\":true}\],\\"visible\\":true},{\\"title\\":\\"2.获取用户电量进行提示\\",\\"hash\\":\\"#heading-20\\",\\"deep\\":1,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"3.小程序版本更新提示\\",\\"hash\\":\\"#heading-21\\",\\"deep\\":1,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"4.手机端点击input输入框时网页自动放大\\",\\"hash\\":\\"#heading-22\\",\\"deep\\":1,\\"children\\":\[\],\\"visible\\":true},{\\"title\\":\\"5.常用api\\",\\"hash\\":\\"#heading-23\\",\\"deep\\":1,\\"children\\":\[\],\\"visible\\":true}\]",homepage\_top\_time:j,homepage\_top\_status:b,content\_count:1558,read\_time:"5分钟",pics\_expire\_time:b},author\_user\_info:{user\_id:y,user\_name:F,company:e,job\_title:e,avatar\_large:"https:\\u002F\\u002Fp6-passport.byteacctimg.com\\u002Fimg\\u002Fuser-avatar\\u002F420a472e6cab0232c5d60d1c7f06d680~300x300.image",level:u,description:e,followee\_count:t,follower\_count:122,post\_article\_count:58,digg\_article\_count:37,got\_digg\_count:233,got\_view\_count:26287,post\_shortmsg\_count:11,digg\_shortmsg\_count:u,isfollowed:a,favorable\_author:b,power:G,study\_point:b,university:{university\_id:f,name:e,logo:e},major:{major\_id:f,parent\_id:f,name:e},student\_status:b,select\_event\_count:b,select\_online\_course\_count:b,identity:b,is\_select\_annual:d,select\_annual\_rank:b,annual\_list\_type:b,extraMap:{},is\_logout:b,annual\_info:\[{annual\_id:"2024",rank:176,list\_type:b}\],account\_amount:b,user\_growth\_info:{user\_id:3725616663503053,jpower:G,jscore:1036,jpower\_level:u,jscore\_level:5,jscore\_title:"先锋掘友",author\_achievement\_list:\[\],vip\_level:p,vip\_title:"稳步进阶",jscore\_next\_level\_score:2000,jscore\_this\_level\_mini\_score:500,vip\_score:180},is\_vip:a,become\_author\_days:b,collection\_set\_article\_count:b,recommend\_article\_count\_daily:b,article\_collect\_count\_daily:b,user\_priv\_info:{administrator:b,builder:b,favorable\_author:b,book\_author:b,forbidden\_words:b,can\_tag\_cnt:b,auto\_recommend:b,signed\_author:b,popular\_author:b,can\_add\_video:b}},category:{category\_id:"6809637767543259144",category\_name:"前端",category\_url:"frontend",rank:p,back\_ground:"https:\\u002F\\u002Flc-mhke0kuv.cn-n1.lcfile.com\\u002F8c95587526f346c0.png",icon:"https:\\u002F\\u002Flc-mhke0kuv.cn-n1.lcfile.com\\u002F1c40f5eaba561e32.png",ctime:1457483942,mtime:1432503190,show\_type:3,item\_type:p,promote\_tag\_cap:u,promote\_priority:p,id:"6809637767543259144",name:"前端",title:"前端",alias:"frontend"},tags:\[{entriesCount:m,subscribed:a,id:"6809640653266354190",tag\_id:"6809640653266354190",tag\_name:"微信小程序",color:"#11a600",icon:"https:\\u002F\\u002Fp1-jj.byteimg.com\\u002Ftos-cn-i-t2oaga2asx\\u002Fleancloud-assets\\u002Fa1e7773920f51db40441.png~tplv-t2oaga2asx-image.image",back\_ground:e,show\_navi:b,ctime:1474932627,mtime:1742781202,id\_type:9,tag\_alias:e,post\_article\_count:13680,concern\_user\_count:285256,title:"微信小程序",tagId:"6809640653266354190",articleCount:13680,subscribersCount:285256,createdAt:c,updatedAt:c},{entriesCount:m,subscribed:a,id:"6809640407484334093",tag\_id:"6809640407484334093",tag\_name:"前端",color:"#60ADFF",icon:"https:\\u002F\\u002Fp1-jj.byteimg.com\\u002Ftos-cn-i-t2oaga2asx\\u002Fleancloud-assets\\u002Fbac28828a49181c34110.png~tplv-t2oaga2asx-image.image",back\_ground:e,show\_navi:g,ctime:1435971546,mtime:1742781566,id\_type:9,tag\_alias:e,post\_article\_count:568201,concern\_user\_count:707515,title:"前端",tagId:"6809640407484334093",articleCount:568201,subscribersCount:707515,createdAt:c,updatedAt:c},{entriesCount:m,subscribed:a,id:"6809640477088808973",tag\_id:"6809640477088808973",tag\_name:"微信",color:"#00c80b",icon:"https:\\u002F\\u002Fp1-jj.byteimg.com\\u002Ftos-cn-i-t2oaga2asx\\u002Fleancloud-assets\\u002Fceeddfb49045193160bf.png~tplv-t2oaga2asx-image.image",back\_ground:e,show\_navi:b,ctime:1438159592,mtime:1742752294,id\_type:9,tag\_alias:e,post\_article\_count:8994,concern\_user\_count:170403,title:"微信",tagId:"6809640477088808973",articleCount:8994,subscribersCount:170403,createdAt:c,updatedAt:c}\],user\_interact:{id:7244358444348768000,omitempty:p,user\_id:b,is\_digg:a,is\_follow:a,is\_collect:a,collect\_set\_count:b},org:{is\_followed:a},req\_id:"021742781680168fdbddc0100ffcd02ffffffff00000362003eb1",status:{push\_status:b},theme\_list:\[{theme:{theme\_id:"7073670907851440160",name:"新人报道",cover:"https:\\u002F\\u002Fp6-juejin.byteimg.com\\u002Ftos-cn-i-k3u1fbpfcp\\u002F2aadd07b5f96485da883e55824618be8~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image?",brief:"欢迎新加入的同学，作为新人不如先来自我介绍一下，聊聊你的兴趣爱好，让大家都认识认识你～",is\_lottery:a,is\_rec:a,rec\_rank:b,topic\_ids:\["6824710203246641166"\],hot:24797925,view\_cnt:23133,user\_cnt:45729,status:b,ctime:j,mtime:1679910480,lottery\_begin\_time:j,lottery\_end\_time:j,theme\_type:g,last\_hot:644118,has\_expiration:a,valid\_begin\_time:j,valid\_end\_time:j,expired:b}}\],extra:{currentVersion:"6",hasAuth:H,imageExpiredEvent:H},title:z,user:I,viewCount:m,commentsCount:E,isEvent:m,abstract:A,latestCommentAt:c,createdAt:new Date(1686713720000),updatedAt:c,isTopicEvent:a,likedCount:s,likeCount:s,content:e,originalUrl:e,type:"post",collected:a,viewsCount:C,username:F,viewerHasLiked:a,draftId:B,collectionCount:D,isCache:d},entryView:{},author:I,adEntryList:\[\],relatedEntryList:\[\],selectedList:\[\],linkVotingList:\[\],userAnnuals:\[\],columnList:\[\],hitArticleCache:d,authorCard:{},relatedLoaded:a,dynamicDataReady:a,followAuthorPopupTime:b,followAuthorPopupType:b,authorBlockVisible:b,compVisible:{},version:t,actionType:{FETCH:"view\\u002Fcolumn\\u002FFETCH",FETCH\_RELATED:"view\\u002Fcolumn\\u002FFETCH\_RELATED",FETCH\_RECOMMEND:"view\\u002Fcolumn\\u002FFETCH\_RECOMMEND",FETCH\_SELECTED:"view\\u002Fcolumn\\u002FFETCH\_SELECTED",FETCH\_ADDITIONAL:"view\\u002Fcolumn\\u002FFETCH\_ADDITIONAL",FETCH\_SIDEBAR\_ADENTRY:"view\\u002Fcolumn\\u002FFETCH\_SIDEBAR\_ADENTRY",FETCH\_AUTHOR\_EXTRA:"view\\u002Fcolumn\\u002FFETCH\_AUTHOR\_EXTRA",MD\_FALLBACK\_RENDER:"view\\u002Fcolumn\\u002FMD\_FALLBACK\_RENDER",RESET:"view\\u002Fcolumn\\u002FRESET"},recommendedArticleList:{list:\[\],cursor:f,loading:a,skeleton:a,hasMore:a,articleId:e,actionType:{UPDATE\_STATE:"view\\u002Fcolumn\\u002Frecommend-List\\u002FUPDATE\_STATE",FETCH\_MORE:"view\\u002Fcolumn\\u002Frecommend-List\\u002FFETCH\_MORE",FETCH:"view\\u002Fcolumn\\u002Frecommend-List\\u002FFETCH",RESET:"view\\u002Fcolumn\\u002Frecommend-List\\u002FRESET"}}},collection:{collection:{author:{}},actionType:{FETCH:"@\\u002Fview\\u002Fcollection\\u002FFETCH",REFRESH:"@\\u002Fview\\u002Fcollection\\u002FREFRESH",RESET:"@\\u002Fview\\u002Fcollection\\u002FRESET"},list:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Fcollection\\u002Flist\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Fcollection\\u002Flist\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Fcollection\\u002Flist\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Fcollection\\u002Flist\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fcollection\\u002Flist\\u002FRESET"},id:e,sort:o}},gettingStarted:{category:{},actionType:{UPDATE\_STATE:"@\\u002Fview\\u002FgettingStarted\\u002FUPDATE\_STATE",FOLLOW:"@\\u002Fview\\u002FgettingStarted\\u002FFOLLOW",RESET:"@\\u002Fview\\u002FgettingStarted\\u002FRESET",UPDATE\_CATEGORY:"@\\u002Fview\\u002FgettingStarted\\u002FUPDATE\_CATEGORY"}},pin:{pin:{user:{},imageUrlList:\[\]},pinList:\[\],actionType:{FETCH:"@\\u002Fview\\u002Fpin\\u002FFETCH",RESET:"@\\u002Fview\\u002Fpin\\u002FRESET"},sidebar:{list:\[\],after:e,loading:a,isRecommend:a,hasNextPage:d,actionType:{UPDATE\_STATE:"@\\u002Fview\\u002Fpin\\u002Fsidebar\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fpin\\u002Fsidebar\\u002FFETCH\_MORE",FETCH:"@\\u002Fview\\u002Fpin\\u002Fsidebar\\u002FFETCH",RESET:"@\\u002Fview\\u002Fpin\\u002Fsidebar\\u002FRESET"}},commentList:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Fpin\\u002FcommentList\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Fpin\\u002FcommentList\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Fpin\\u002FcommentList\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Fpin\\u002FcommentList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fpin\\u002FcommentList\\u002FRESET"},pinId:c},subCommentList:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Fpin\\u002FsubCommentList\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Fpin\\u002FsubCommentList\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Fpin\\u002FsubCommentList\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Fpin\\u002FsubCommentList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fpin\\u002FsubCommentList\\u002FRESET"},commentId:c}},topic:{topic:e,followedTopicList:\[\],actionType:{FETCH:"@\\u002Fview\\u002Ftopic\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Ftopic\\u002FUPDATE\_STATE",RESET:"@\\u002Fview\\u002Ftopic\\u002FRESET"},allTopicList:{pageSize:J,page:b,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Ftopic\\u002FallTopicList\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Ftopic\\u002FallTopicList\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Ftopic\\u002FallTopicList\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Ftopic\\u002FallTopicList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Ftopic\\u002FallTopicList\\u002FRESET"},sortType:n},pinlist:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Ftopic\\u002FpinList\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Ftopic\\u002FpinList\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Ftopic\\u002FpinList\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Ftopic\\u002FpinList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Ftopic\\u002FpinList\\u002FRESET"},sortType:r},sidebar:{actionType:{RESET:"@\\u002Fview\\u002Ftopic\\u002Fsidebar\\u002FRESET",UPDATE\_STATE:"@\\u002Fview\\u002Ftopic\\u002Fsidebar\\u002FUPDATE\_STATE"},attender:{pageSize:h,page:g,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Ftopic\\u002Fsidebar\\u002Fattender\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Ftopic\\u002Fsidebar\\u002Fattender\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Ftopic\\u002Fsidebar\\u002Fattender\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Ftopic\\u002Fsidebar\\u002Fattender\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Ftopic\\u002Fsidebar\\u002Fattender\\u002FRESET"},topicId:c}},followedList:{pageSize:J,page:b,total:b,pointer:c,lastPointer:c,list:\[\],loading:a,error:c,canPrev:d,canNext:d,linkList:\[\],lastFetchOnServer:a,actionType:{UPDATE:"@\\u002Fview\\u002Ftopic\\u002FfollowedList\\u002FUPDATE",FETCH:"@\\u002Fview\\u002Ftopic\\u002FfollowedList\\u002FFETCH",FORCE\_FETCH:"@\\u002Fview\\u002Ftopic\\u002FfollowedList\\u002FFORCE\_FETCH",FETCH\_MORE:"@\\u002Fview\\u002Ftopic\\u002FfollowedList\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Ftopic\\u002FfollowedList\\u002FRESET"},after:b}},recommendationIndex:{actionType:{FETCH\_USER:"@\\u002Fview\\u002Frecommendation\\u002FFETCH\_USER",FETCH\_MORE:"@\\u002Fview\\u002Frecommendation\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Frecommendation\\u002FRESET",FETCH:"@\\u002Fview\\u002Frecommendation\\u002FFETCH"},cursor:e,hasMore:e,userList:\[\],loading:a,skeleton:d,category:k,categoryNavList:\[\],serverRenderUserList:a},event:{event:{},loading:a,user:{},actionType:{FETCH:"view\\u002Fevent\\u002FFETCH",RESET:"view\\u002Fevent\\u002FRESET"}},coursesIndex:{loading:a,list:\[\],sort:"online",actionType:{FETCH:"view\\u002Fcourses\\u002FFETCH",RESET:"view\\u002Fcourses\\u002FRESET",FETCH\_MORE:"view\\u002Fcourses\\u002FFETCH\_MORE"}},team:{team:{},loading:d,actionType:{FETCH:"@\\u002Fview\\u002Fteam\\u002FFETCH",RESET:"@\\u002Fview\\u002Fteam\\u002FRESET",UPDATE:"@\\u002Fview\\u002Fteam\\u002FUPDATE",FOLLOW:"@\\u002Fview\\u002Fteam\\u002FFOLLOW"},detailList:{actionType:{RESET:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002FRESET"},posts:{list:\[\],hasMore:a,skeleton:a,loading:a,sort:o,actionType:{FETCH:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fposts\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fposts\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fposts\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fposts\\u002FRESET"}},pins:{list:\[\],hasMore:a,loading:a,skeleton:d,actionType:{FETCH:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fpins\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fpins\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fpins\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fpins\\u002FRESET"}},hire:{list:\[\],hasMore:a,cursor:f,loading:a,skeleton:d,actionType:{FETCH:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fhire\\u002FFETCH",UPDATE\_STATE:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fhire\\u002FUPDATE\_STATE",FETCH\_MORE:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fhire\\u002FFETCH\_MORE",RESET:"@\\u002Fview\\u002Fteam\\u002FdetailList\\u002Fhire\\u002FRESET"}}}},couponList:{list:{"0":v,"1":v,"2":v},showTooltip:a},payment:{selectedDiscount:{},bookletDetail:{},coupons:{availables:\[\],unavailables:\[\]},discountList:\[\]},activityVip:{selectedVipSku:{}}},component:{indexAside:{bannerList:\[\],userList:\[\],botList:\[\],botCursor:e,actionType:{FETCH\_BANNER:"@\\u002Fcomponent\\u002Faside\\u002FFETCH\_BANNER",FETCH\_USER:"@\\u002Fcomponent\\u002Faside\\u002FFETCH\_USER",CLOSE\_BANNER:"@\\u002Fcomponent\\u002Faside\\u002FCLOSE\_BANNER",FETCH\_BOT:"@\\u002Fcomponent\\u002Faside\\u002FFETCH\_BOT"}}},dislike:{whiteList:\["1398234521548542",K,L,M,N,O,P\],officialList:\[K,L,"3984285868490807",M,"3562073405009031",N,"4433674252325966","53218623894222","2110693287406632","2498524693925623","430664288836334",O,P,"2832783991648407","3386151545092589"\]},ore:{oreCount:b},avatarMenuInfo:{user\_basic:{},user\_counter:{},user\_growth\_info:{}},common:{theme:"light",isFollowSystem:a},env:{ua:"Mozilla\\u002F5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\\u002F537.36 (KHTML, like Gecko) Chrome\\u002F135.0.0.0 Safari\\u002F537.36",serverEnv:"production",logId:"202504241454233F44E78BAD0A9253F421"},auth:{user:c,clientId:c,token:c,qrCode:c,qrCodeStatus:c,qrCodeToken:c,userInitiated:a,loginTeaParams:m},tag:{subscribedTagList:\[\]},entry:{isLikeLoading:a},collection:{},comment:{},bookComment:{},repoComment:{},category:{list:\[\]},user:{subscribedTagList:\[\]},notification:{unreadCount:{user:b,system:b,total:b}},error:{location:c,errorView:c,statusCode:200,needRiskModal:a,riskAppealUrl:e},abTest:{info:{}},suspensionPanel:{needSuspension:d},pinComment:{},pin:{deleteDialogVisible:a,reportDialogVisible:a,targetPin:c,isOnFocus:a},topic:{visible:a},activity:{"2020":{},offer:{is\_show:b,start\_time:b},voteData:m},header:{leadStep:b,isPopupZlink:a},tcc:{tccConfig:c},adAssets:{adverts:\[\]},route:{name:Q,path:w,hash:e,query:{},params:{id:l},fullPath:w,meta:{isAvailableDarkMode:d},from:{name:c,path:R,hash:e,query:{},params:{},fullPath:R,meta:{}}}},serverRendered:d,routePath:w,config:{API\_HOST:"api.juejin.cn",CAPTCHA\_HOST:"verify.snssdk.com",PLATFORM\_APPID:{wechat:1277,weibo:1276,github:1045,wechatApp:1070},SCM\_VERSION:"1.0.0.721",REGISTERED\_ROUTES:\[Q,"selfPost","noCDNPost","SeoSearch"\]},globalRefs:{}}}(false,0,null,true,"","0",1,20,"topic",-62135596800,"recommended","7244358444348768315",void 0,"hot","newest",2,"following","popular",93,6,4,{},"\\u002Fpost\\u002F7244358444348768315","created","3725616663503053","uniapp开发踩坑兼容问题【第一弹！！】，血泪史o(╥﹏╥)o，一次学习终生避雷！！！","安卓or ios兼容问题 小程序 app开发的踩坑点 ，小程序版本更新提示，小程序分享图片等等常用功能","7244351125447852088",4539,260,10,"庸俗今天不摸鱼",1952,"false",{},100,"1556564194374926","940837680722589","2780007432717400","1204720443866983","852876722177533","3227821828225517","column","\\u002F"));

<a id="sec-8"></a>
## uniapp开发踩坑兼容问题【第二弹！！】，血泪史o(╥﹏╥)o，一次学习终生避雷！！！

> 来源：myBaseFile
> 原路径：`vue/uniapp/uniapp开发踩坑兼容问题【第二弹！！】，血泪史o(╥﹏╥)o，一次学习终生避雷！！！.md`

**包含项目搭建 h5端常见问题 安卓端常见问题 和 请求的的封装 按需使用 栓Q**

#### 🚀 1. 项目搭建

##### 环境准备

```bash
npm i -g @vue/cli
vue create -p dcloudio/uni-preset-vue my-project

```

##### 📂 项目结构

```csharp
src/
├── api        # 接口管理
├── components # 全局组件
├── directives # 自定义指令
├── filter     # 全局过滤器
├── hybrid     # 混合页面
├── library    # 工具库
├── pages      # 页面文件
├── static     # 静态资源
└── store      # Vuex 状态管理

```

##### 🛠️ 必备工具

```json
{
  "devDependencies": {
    "pug": "^3.0.2",
    "stylus": "^0.59.0",
    "prettier": "^2.8.4",
    "postcss-comment": "^2.0.0"
  }
}

```

***

#### 🤖 2. Android端疑难杂症

##### 1️⃣ 启动白屏问题

**症状**：
Android 10+ 设备启动页消失后白屏

**解决方案**：
修改 `build.gradle`：

```arduino
android {
    defaultConfig {
        targetSdkVersion 26  // 降级 SDK 版本
    }
}

```

> 📚 官方解决方案 参考 ：[ask.dcloud.net.cn/article/361…](https://link.juejin.cn?target=https%3A%2F%2Fask.dcloud.net.cn%2Farticle%2F36199 "https://ask.dcloud.net.cn/article/36199")

#### 3.关于APP端离线打包后定位失效的问题

我在本地打包后遇到这样一个问题：使用HBuilderX真机调试的时候，能够正常获取到定位。但离线打包后，就不可以获取到正确的定位信息，永远走的都是fail。经过一系列排查，发现需要在Android原生工程中进行相关配置才能正确获取到定位。

官方文档中提到：

> Android由于谷歌服务被墙，或者手机上没有GMS，想正常定位就需要向高德等三方服务商申请SDK资质，获取AppKey。否则打包后定位就会不准。云打包时需要在manifest的SDK配置中填写Appkey。在manifest可视化界面有详细申请指南，详见：[ask.dcloud.net.cn/article/29。…](https://link.juejin.cn?target=https%3A%2F%2Fask.dcloud.net.cn%2Farticle%2F29%25E3%2580%2582%25E7%25A6%25BB%25E7%25BA%25BF%25E6%2589%2593%25E5%258C%2585%25E8%2587%25AA%25E8%25A1%258C%25E5%259C%25A8%25E5%258E%259F%25E7%2594%259F%25E5%25B7%25A5%25E7%25A8%258B%25E4%25B8%25AD%25E9%2585%258D%25E7%25BD%25AE%25E3%2580%2582%25E6%25B3%25A8%25E6%2584%258F%25E5%258C%2585%25E5%2590%258D%25E3%2580%2581appkey%25E3%2580%2581%25E8%25AF%2581%25E4%25B9%25A6%25E4%25BF%25A1%25E6%2581%25AF%25E5%25BF%2585%25E9%25A1%25BB%25E5%258C%25B9%25E9%2585%258D%25E3%2580%2582%25E7%259C%259F%25E6%259C%25BA%25E8%25BF%2590%25E8%25A1%258C%25E5%258F%25AF%25E4%25BB%25A5%25E6%25AD%25A3%25E5%25B8%25B8%25E5%25AE%259A%25E4%25BD%258D%25EF%25BC%258C%25E6%2598%25AF%25E5%259B%25A0%25E4%25B8%25BA%25E7%259C%259F%25E6%259C%25BA%25E8%25BF%2590%25E8%25A1%258C%25E5%259F%25BA%25E5%25BA%25A7%25E4%25BD%25BF%25E7%2594%25A8%25E4%25BA%2586DCloud%25E5%2590%2591%25E9%25AB%2598%25E5%25BE%25B7%25E7%2594%25B3%25E8%25AF%25B7%25E7%259A%2584sdk%25E9%2585%258D%25E7%25BD%25AE%25EF%25BC%258C%25E6%2589%2593%25E5%258C%2585%25E5%2590%258E%25E5%25BF%2585%25E9%25A1%25BB%25E7%2594%25B1%25E5%25BC%2580%25E5%258F%2591%25E8%2580%2585%25E8%2587%25AA%25E5%25B7%25B1%25E7%2594%25B3%25E8%25AF%25B7%25E3%2580%2582%25E5%25A6%2582%25E6%259E%259C%25E6%2589%258B%25E6%259C%25BA%25E8%2587%25AA%25E5%25B8%25A6GMS%25E4%25B8%2594%25E7%25BD%2591%25E7%25BB%259C%25E7%258E%25AF%25E5%25A2%2583%25E5%258F%25AF%25E4%25BB%25A5%25E6%25AD%25A3%25E5%25B8%25B8%25E8%25AE%25BF%25E9%2597%25AEgoogle%25E5%25AE%259A%25E4%25BD%258D%25E6%259C%258D%25E5%258A%25A1%25E5%2599%25A8%25EF%25BC%258C%25E6%25AD%25A4%25E6%2597%25B6%25E6%2597%25A0%25E9%259C%2580%25E5%259C%25A8manifest%25E5%25A1%25AB%25E5%2586%2599%25E9%25AB%2598%25E5%25BE%25B7%25E5%25AE%259A%25E4%25BD%258D%25E7%259A%2584sdk%25E9%2585%258D%25E7%25BD%25AE%25E3%2580%2582 "https://ask.dcloud.net.cn/article/29%E3%80%82%E7%A6%BB%E7%BA%BF%E6%89%93%E5%8C%85%E8%87%AA%E8%A1%8C%E5%9C%A8%E5%8E%9F%E7%94%9F%E5%B7%A5%E7%A8%8B%E4%B8%AD%E9%85%8D%E7%BD%AE%E3%80%82%E6%B3%A8%E6%84%8F%E5%8C%85%E5%90%8D%E3%80%81appkey%E3%80%81%E8%AF%81%E4%B9%A6%E4%BF%A1%E6%81%AF%E5%BF%85%E9%A1%BB%E5%8C%B9%E9%85%8D%E3%80%82%E7%9C%9F%E6%9C%BA%E8%BF%90%E8%A1%8C%E5%8F%AF%E4%BB%A5%E6%AD%A3%E5%B8%B8%E5%AE%9A%E4%BD%8D%EF%BC%8C%E6%98%AF%E5%9B%A0%E4%B8%BA%E7%9C%9F%E6%9C%BA%E8%BF%90%E8%A1%8C%E5%9F%BA%E5%BA%A7%E4%BD%BF%E7%94%A8%E4%BA%86DCloud%E5%90%91%E9%AB%98%E5%BE%B7%E7%94%B3%E8%AF%B7%E7%9A%84sdk%E9%85%8D%E7%BD%AE%EF%BC%8C%E6%89%93%E5%8C%85%E5%90%8E%E5%BF%85%E9%A1%BB%E7%94%B1%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E5%B7%B1%E7%94%B3%E8%AF%B7%E3%80%82%E5%A6%82%E6%9E%9C%E6%89%8B%E6%9C%BA%E8%87%AA%E5%B8%A6GMS%E4%B8%94%E7%BD%91%E7%BB%9C%E7%8E%AF%E5%A2%83%E5%8F%AF%E4%BB%A5%E6%AD%A3%E5%B8%B8%E8%AE%BF%E9%97%AEgoogle%E5%AE%9A%E4%BD%8D%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%AD%A4%E6%97%B6%E6%97%A0%E9%9C%80%E5%9C%A8manifest%E5%A1%AB%E5%86%99%E9%AB%98%E5%BE%B7%E5%AE%9A%E4%BD%8D%E7%9A%84sdk%E9%85%8D%E7%BD%AE%E3%80%82")

我使用的是高德定位，具体流程如下：

1.  到高德开放平台申请应用

-   首先注册高德开放平台的账号，到控制台中
-   添加应用
-   然后在应用下添加key

其中：

SHA1码的获取方式：在命令行中输入以下命令获取

```js

keytool -list -v -keystore test.keystore
Enter keystore password: // 输入密码，回车
PackageName为build.gradle中配置的包名

```

创建好应用及key后，记住此key

2.  需要引入工程的jar/aar文件 需要将以下jar/aar文件（下载地址点这里）放到工程的libs目录下

路径 文件 SDK\\libs amap-libs-release.aar, geolocation-amap-release.aar 3. 在AndroidManifest.xml中配置 application节点前：

```html
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE"/>
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>
<uses-permission android:name="android.permission.READ_LOGS"/>
<uses-permission android:name="android.permission.WRITE_SETTINGS"/>

```

application节点下：

```html

<meta-data android:name="com.amap.api.v2.apikey" android:value=\"%用户申请的APPkey%\"></meta-data>
<service android:name="com.amap.api.location.APSService"></service>

```

1.  在manifest.json中配置

-   在manifest.json中将key进行配置

#### 4\. Android端常见问题解决方案

##### 1)当前运行环境无法运行启用“自定义组件模式”的uni-app应用

HBuilderX1.9.0及以上版本uni-app项目启用“自定义组件模式”，运行为APP时做了底层性能优化，可能出现兼容性问题引起白屏现象。

HBuilderX1.9.4及以上版本会自动检查基座环境是否支持启用“自定义组件模式”，如果不支持则会弹出以下提示框

解决方案：

将 `uniapp-release.aar` 放于 `app/libs` 目录下，并在 `app/build.gradle` 中添加以下依赖：

```js

dependencies {
    implementation fileTree(include: ['*.jar'], dir: 'libs')
    implementation fileTree(include: ['*.aar'], dir: 'libs')
    implementation 'com.android.support:appcompat-v7:26.1.0'
    implementation 'com.android.support.constraint:constraint-layout:1.1.3'
    /*uniapp所需库-----------------------开始*/
    implementation 'com.android.support:recyclerview-v7:26.1.0'
    implementation 'com.facebook.fresco:fresco:1.13.0'
    implementation "com.facebook.fresco:animated-gif:1.13.0"
    /*uniapp所需库-----------------------结束*/
    // 基座需要，必须添加
    implementation 'com.github.bumptech.glide:glide:4.9.0' // 基座依赖
    implementation 'com.alibaba:fastjson:1.1.46.android'
}

```

参考：

> [ask.dcloud.net.cn/article/358…](https://link.juejin.cn?target=https%3A%2F%2Fask.dcloud.net.cn%2Farticle%2F35877 "https://ask.dcloud.net.cn/article/35877") [ask.dcloud.net.cn/article/351…](https://link.juejin.cn?target=https%3A%2F%2Fask.dcloud.net.cn%2Farticle%2F35139 "https://ask.dcloud.net.cn/article/35139")

##### 2) uni-app运行环境版本和编译器版本不一致

HBuilderX1.7.0及以上版本uni-app添加了运行环境版本和编译环境版本的校验机制，当两个版本不一致时会弹出以下提示：

名词解释：

-   手机端SDK版本

> 是指5+Runtime的版本号。云打包提交云端打包时确定的，也就是说生成apk/ipa之后，APP运行环境就不会改变了。离线打包时是你下载的sdk的版本。只有默认真机运行基座、云打包机的引擎是和HBuilderX升级而自动升级的。如果你使用了自定义基座、sdk离线打包，需要手动升级，或者重新用新版制作自定义基座，或者下载最新版sdk。

-   HBuilderX版本

> 如果项目是HBuilderX创建的，则是HBuilderX的版本号，更新HBuilderX会改变；如果是cli创建的项目，即根目录是package.json，那么编译环境版本号是创建cli时生成的，或者上一次执行npm update生成的。不管HBuilderX如何升级，cli项目的编译器并不会跟随HBuilderX升级而升级，需手动升级。

找了半天cli的版本，不知道在哪，经过仔细观察，应该是这个了： npm地址：@dcloudio/vue-cli-plugin-uni 将其拆一下，就成了：

> 2.6.9.20200424005

解决方案： 如果使用本地打包，确保本地的SDK的版本号与cli或HX的版本号一致。 如果使用云端打包，如果正式打包，版本号将与云端SDK版本号一致；如果使用自定义基座，版本号将与你系统中的HX版本号一致）。

如果想要忽略提示，可以在manifest.json中配置：

```js

{
    ...
    "app-plus" : {
        ...
        "compatible": {
            "ignoreVersion": true //true表示忽略版本检查提示框，HBuilderX1.9.0及以上版本支持
        },
    },
}

```

#### 🌐 3. H5端避坑指南

##### 🚨 注意事项

uni-app由uni的通用api和平台专有api组成，H5版也不例外。可以使用uni的通用api完成很多工作，也可以在条件编译里调用H5版的浏览器专有api。

##### ⚠️ 必看要点

问题类型

解决方案

跨域问题

配置代理或服务端CORS

元素定位差异

使用 `--window-top` CSS变量

HTTPS要求

定位/传感器接口必须使用HTTPS

```js
//#ifdef H5
this.titleHeight = 44
//#endif

```

条件编译目前有7个平台，APP-PLUS、APP-PLUS-NVUE、MP-WEIXIN、H5、MP、MP-BAIDU、MP-ALIPAY。 其中APP-PLUS-NVUE是APP-PLUS的子集，用于weex下单独写专用代码。 为了方便多平台选择，还引入了~#ifndef~，也就是ifdef的not，反向选择。以及或语法，及||。这些命名都是c语言条件编译的标准命名。

```js
// #ifndef H5
console.log("这段代码编译到非H5平台");
// #endif

```

开发者之前为微信或app写的代码，H5的平台不支持时，需要注意把这些代码放到条件编译里。

-   经过这样的处理，之前做好的App或小程序才能正常运行到H5版里。

小程序版在UI上，尤其是导航栏上限制较多，H5在这里是参考了app，默认解析了pages.json下的app-plus的节点，实现了titleNView、buttons、下拉刷新（下拉刷新只有circle方式，因为只有这样的下拉刷新在H5版上可以保障流畅体验）

###### 2)注意事项（必看）

-   编译为H5版后生成的是单页应用，SPA。如果想要seo优化，首页可以在template模板中配置keyword。二级页不支持配置。但一个更酷的方式是用uni-app直接发布一版百度小程序，搜索权重更高。
-   编译后看日志和错误，要看浏览器的控制台，而不是HBuilderX的控制台。浏览器的控制台会有错误提示。
-   网络请求（request、uploadFile、downloadFile等）在浏览器存在跨域限制（CORS、Cross-Origin），解决方案详见：[ask.dcloud.net.cn/article/352…](https://link.juejin.cn?target=https%3A%2F%2Fask.dcloud.net.cn%2Farticle%2F35267 "https://ask.dcloud.net.cn/article/35267")
-   APP 和微信的原生导航栏和tabbar下，元素区域坐标是不包含原生导航栏和tabbar的。而 H5 里原生导航栏和tabbar是 div 模拟实现的，所以元素坐标会包含导航栏和tabbar的高度。为了优雅的解决多端高度定位问题，uni-app新增了2个css变量：--window-top和--window-bottom，这代表了页面的内容区域距离顶部和底部的距离。举个实例，如果你想在原生tabbar上方悬浮一个菜单，之前写bottom:0。这样的写法编译到h5后，这个菜单会和tabbar重叠，位于屏幕底部。而改为使用bottom:var(--window-bottom)，则不管在app下还是在h5下，这个菜单都是悬浮在tabbar上浮的。这就避免了写条件编译代码。当然你也仍然可以使用 H5 的条件编译处理界面的不同。
-   CSS內使用vh单位的时候注意100vh包含导航栏，使用时需要减去导航栏和tabBar高度，部分浏览器还包含浏览器操作栏高度，使用时请注意。
-   event 对象上使用的 mpvue 独有的属性需调整（比如 event.pageY，可能需要加上44px的导航栏高度）。
-   fixed定位的组件有可能遮挡框架内置UI组件，如果不希望遮挡可以分平台判断，在H5平台避开内置UI。
-   正常支持rpx。px是真实物理像素。暂不支持通过设manifest的"transformPx" : true，把px当动态单位使用。
-   使用罗盘、地理位置、加速计等相关接口需要使用https协议，本地预览（localhost）可以使用 http 协议。
-   PC 端 Chrome 浏览器模拟器设备测试的时候，获取定位 API 需要连接谷歌服务器，需要翻墙。
-   组件内（页面除外）不支持onLoad生命周期。
-   为避免和内置组件冲突，自定义组件请加上前缀（但不能是u和uni）。比如可使用的自定义组件名称：my-view、m-input、we-icon，例如不可使用的自定义组件名称：u-view、uni-input。如果已有项目使用了可能造成冲突的名称，请修改名称。另外微信小程序下自定义组件名称不能以wx开头。
-   在tabBar页面，如果page高度设置为100%时，页面超出滚动会导致底部被tabbar遮挡，可在tabbar页面去掉height:100%或者改用min-height:100%。
-   编写组件时需要遵守vue的规范，之前在app端和小程序端能使用的一些不规范写法需要纠正，比如：不要修改props的值、组件最外层template节点下不允许包含多个节点。
-   开发App时，不可在H5预览后直接云打包。需在HBuilderX里点运行-选择运行到手机，真机调试无误后再打包。
-   H5端 “网络不给力” 原因及解决办法：[ask.dcloud.net.cn/article/370…](https://link.juejin.cn?target=https%3A%2F%2Fask.dcloud.net.cn%2Farticle%2F37065%25E3%2580%2582 "https://ask.dcloud.net.cn/article/37065%E3%80%82")

#### 5\. uni-app 全局变量的几种实现方式

###### 1)定义一个专用的模块，用来组织和管理这些全局的变量，在需要的页面引入。

注意这种方式只支持多个vue页面或多个nvue页面之间公用，vue和nvue之间不公用。

示例如下：

```js
//在 uni-app 项目根目录下创建 common 目录，然后在 common 目录下新建 helper.js 用于定义公用的方法。
const websiteUrl = 'http://uniapp.dcloud.io';
const now = Date.now || function () {
    return new Date().getTime();
};
const isArray = Array.isArray || function (obj) {
    return obj instanceof Array;
};

export default {
    websiteUrl,
    now,
    isArray
}

```

接下来在 pages/index/index.vue 中引用该模块

```js
<script>
    import helper from '../../common/helper.js';

    export default {
        data() {
            return {};
        },
        onLoad(){
            console.log('now:' + helper.now());
        },
        methods: {
        }
    }
</script>

```

这种方式维护起来比较方便，但是缺点就是每次都需要引入。

###### 2) 挂载 Vue.prototype

将一些使用频率较高的常量或者方法，直接扩展到 Vue.prototype 上，每个 Vue 对象都会“继承”下来。

注意这种方式只支持vue页面

示例如下： 在 main.js 中挂载属性/方法

```js

Vue.prototype.websiteUrl = 'http://uniapp.dcloud.io';
Vue.prototype.now = Date.now || function () {
    return new Date().getTime();
};
Vue.prototype.isArray = Array.isArray || function (obj) {
    return obj instanceof Array;
};

```

然后在 pages/index/index.vue 中调用

```js
<script>
    export default {
        data() {
            return {};
        },
        onLoad(){
            console.log('now:' + this.now());
        },
        methods: {
        }
    }
</script>

```

这种方式，只需要在 main.js 中定义好即可在每个页面中直接调用。

> Tips

-   每个页面中不要在出现重复的属性或方法名。
-   建议在 Vue.prototype 上挂载的属性或方法，可以加一个统一的前缀。比如 $url、global\_url 这样，在阅读代码时也容易与当前页面的内容区分开。

> 注意事项

-   .vue 和 .nvue 并不是一个规范，因此一些在 .vue 中适用的方案并不适用于 .nvue。 Vue 上挂载属性，不能在 .nvue 中使用。

###### 3) globalData

小程序中有个globalData概念，可以在 App 上声明全局变量。 Vue 之前是没有这类概念的，但 uni-app 引入了globalData概念，并且在包括H5、App等平台都实现了。 在 App.vue 可以定义 globalData ，也可以使用 API 读写这个值。

globalData支持vue和nvue共享数据。

globalData是一种比较简单的全局变量使用方式。

定义：App.vue

```js

<script>
    export default {
        globalData: {
            text: 'text'
        },
        onLaunch: function() {
            console.log('App Launch')
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        }
    }
</script>

<style>
    /*每个页面公共css */
</style>

```

js中操作globalData的方式如下：

-   赋值： getApp().globalData.text = 'test'

-   取值：console.log(getApp().globalData.text) // 'test'

如果需要把globalData的数据绑定到页面上，可在页面的onshow声明周期里进行变量重赋值。HBuilderX 2.0.3起，nvue页面在uni-app编译模式下，也支持onshow。

Vuex Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

HBuilderX 2.2.5+起，支持vue和nvue之间共享。参考

这里以登录后同步更新用户信息为例，简单说明下 Vuex 的用法，更多更详细的 Vuex 的内容，建议前往其官网 Vuex 学习下。

举例说明：

```js

在 uni-app 项目根目录下新建 store 目录，在 store 目录下创建 index.js 定义状态值

const store = new Vuex.Store({
    state: {
        login: false,
        token: '',
        avatarUrl: '',
        userName: ''
    },
    mutations: {
        login(state, provider) {
            console.log(state)
            console.log(provider)
            state.login = true;
            state.token = provider.token;
            state.userName = provider.userName;
            state.avatarUrl = provider.avatarUrl;
        },
        logout(state) {
            state.login = false;
            state.token = '';
            state.userName = '';
            state.avatarUrl = '';
        }
    }
})

```

然后，需要在 main.js 挂载 Vuex

```js

import store from './store'
Vue.prototype.$store = store

```

最后，在 pages/index/index.vue 使用

```js

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex';

    export default {
        computed: {
            ...mapState(['avatarUrl', 'login', 'userName'])
        },
        methods: {
            ...mapMutations(['logout'])
        }
    }
</script>

```

示例操作步骤： 未登录时，提示去登录。跳转至登录页后，点击“登录”获取用户信息，同步更新状态后，返回到个人中心即可看到信息同步的结果。

注意：对比前面的方式，该方式更加适合处理全局的并且值会发生变化的情况。

#### 6.封装request请求 （无毒可直接食用）

-   我就叫 http 了 看个人喜好实际还是request封装

```js
import {
	config
} from '../config.js'
import store from '../store'
console.log(config,"config");
let baseUrl = ''

baseUrl = config.base_url

class HTTP {
	constructor() {
		// #ifdef H5
		this.baseUrl = '/api'
		// #endif

		//#ifndef H5
		this.baseUrl = baseUrl
		//#endif
	}

	request({
		url,
		data = {},
		method = 'GET',
		isShowLoading = false
	}) {
		return new Promise((resolve, reject) => {
			this._request(url, resolve, reject, data, method, isShowLoading)
		})
	}

	_request(url, resolve, reject, data = {}, method = 'GET', isShowLoading = false) {
		if(isShowLoading){
			uni.showLoading({
				title: '正在加载...',
				mask: true
			})
		}

		uni.request({
			url: `${this.baseUrl}${url}`,
			method: method,
			data: data,
			header: {
				'content-type': 'application/json',
				'Authorization': uni.getStorageSync('accessToken')||''
			},
			success: (res) => {
				uni.hideLoading()
				if (res.data) {
					const resData = res.data;
					// store.commit('SET_HAS_USER_INFO', false)
					if (resData.code == 200) {
						resolve(res.data)
					} else {
						if(resData.code == 401){
							if(store.getters.invalid){
								let refresh = JSON.parse(JSON.stringify(uni.getStorageSync('refresh')))
								let codeList = JSON.parse(JSON.stringify(uni.getStorageSync('codeList')))
								uni.clearStorage();
								uni.setStorageSync('refresh', refresh);
								uni.setStorageSync('codeList', codeList);
								let path = getCurrentPages()[getCurrentPages().length-1].$page.fullPath.replace(/%2F/g, '/') //登录失效，记录当前页面路径
								uni.setStorageSync('prevPath', path);
								store.dispatch('logout')
								store.commit('SET_INVALID', false)
								uni.redirectTo({
									url:'/pages/user/login'
								})
							}
						}
						reject(resData.message || resData.msg || 'Error')
						uni.showToast({title:resData.msg || 'Error',icon:'none', duration:3500})
					}
				} else {
					resolve(res.data)
				}
			},
			fail: (err) => {
				reject()
				this._show_error(1)
				uni.hideLoading()
			}
		})
	}

	_show_error(error_code, _message) {
		uni.showToast({
			title: _message,
			icon: 'none',
			duration: 2000
		})
	}
}

export {
	HTTP
}

```

config.js文件

```js
let BASE_URL = '',UPLOAD_URL = ''
if (process.env.NODE_ENV == 'development') {
    BASE_URL = 'https://www.xxx.com/wechat' // 测试环境
	UPLOAD_URL = 'https://www.xxx.com'
} else {
    BASE_URL = 'https://www.xxx.com/wechat' // 生产环境
	UPLOAD_URL = 'https://www.xxx.com'
}

const config = {
	base_url: BASE_URL,
	upload_url: UPLOAD_URL
}

export { config }

```

<a id="sec-9"></a>
## httpsgithub.comq310550690uni-app-qrcode 二维码

> 来源：有道云笔记
> 原路径：`httpsgithub.comq310550690uni-app-qrcode 二维码.md`

二维码https://github.com/q310550690/uni-app-qrcode
