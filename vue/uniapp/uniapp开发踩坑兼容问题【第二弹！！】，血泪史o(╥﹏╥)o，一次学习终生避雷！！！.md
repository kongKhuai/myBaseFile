
**包含项目搭建 h5端常见问题 安卓端常见问题 和 请求的的封装 按需使用 栓Q**

## 🚀 1. 项目搭建

### 环境准备

```bash
npm i -g @vue/cli
vue create -p dcloudio/uni-preset-vue my-project

```

### 📂 项目结构

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

### 🛠️ 必备工具

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

## 🤖 2. Android端疑难杂症

### 1️⃣ 启动白屏问题

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

## 3.关于APP端离线打包后定位失效的问题

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

## 4\. Android端常见问题解决方案

### 1)当前运行环境无法运行启用“自定义组件模式”的uni-app应用

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

### 2) uni-app运行环境版本和编译器版本不一致

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

## 🌐 3. H5端避坑指南

### 🚨 注意事项

uni-app由uni的通用api和平台专有api组成，H5版也不例外。可以使用uni的通用api完成很多工作，也可以在条件编译里调用H5版的浏览器专有api。

### ⚠️ 必看要点

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

#### 2)注意事项（必看）

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

## 5\. uni-app 全局变量的几种实现方式

#### 1)定义一个专用的模块，用来组织和管理这些全局的变量，在需要的页面引入。

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

#### 2) 挂载 Vue.prototype

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

#### 3) globalData

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

## 6.封装request请求 （无毒可直接食用）

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