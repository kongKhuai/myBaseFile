在逆向分析JavaScript代码时，开发者经常使用一些用于hook（钩子）的技术来监视或修改程序的行为。以下是一些常用的hook技术及其示例代码。

### **01、dom操作**

在JS逆向油猴脚本中，DOM操作是最常用的一种Hook方式。通过修改DOM元素的属性和样式，我们可以实现对网页的控制和修改。

```
 // 修改DOM元素的属性
document.getElementById('elementId').setAttribute('attrName', 'attrValue');
// 修改DOM元素的样式
document.getElementById('elementId').style.property = 'value';
```
### 02、Cookie操作

Cookie Hook 用于定位 Cookie 中关键参数生成位置，以下代码演示了当 Cookie 中匹配到了 __dfp 关键字， 则插入断点：

```
(function () {
  'use strict';
  var cookieTemp = '';
  Object.defineProperty(document, 'cookie', {
    set: function (val) {
      if (val.indexOf('__dfp') != -1) {
        debugger;
      }
      console.log('Hook捕获到cookie设置->', val);
      cookieTemp = val;
      return val;
    },
    get: function () {
      return cookieTemp;
    },
  });
})();
(function () {
    'use strict';
    var org = document.cookie.__lookupSetter__('cookie');
    document.__defineSetter__('cookie', function (cookie) {
        if (cookie.indexOf('__dfp') != -1) {
            debugger;
        }
        org = cookie;
    });
    document.__defineGetter__('cookie', function () {
        return org;
    });
})();
```

### 03、事件监听操作

事件监听也是JS逆向油猴脚本中常用的一种Hook方式。通过监听网页上的事件，我们可以触发自定义的操作和行为。

```
// 监听按钮点击事件
document.getElementById('buttonId').addEventListener('click', function() {
// 自定义操作和行为
});
```

### 04、AJAX拦截操作

AJAX拦截也是JS逆向油猴脚本中常用的一种Hook方式。通过拦截网页上的AJAX请求，我们可以实现对数据的控制和修改。

```
// 拦截AJAX请求
XMLHttpRequest.prototype._send = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function() {
// 自定义操作和行为
this._send.apply(this, arguments);
};
```

### 05、函数替换操作

函数替换也是JS逆向油猴脚本中常用的一种Hook方式。通过替换网页上的函数，我们可以实现对函数的控制和修改。

```
// 替换原有函数
var originalFunction = window.functionName;
window.functionName = function() {
// 自定义操作和行为
originalFunction.apply(this, arguments);
};

```

### 06、Header操作

Header Hook 用于定位 Header 中关键参数生成位置，以下代码演示了当 Header 中包含 Authorization 关键字时，则插入断点：

```
(function () {
    var org = window.XMLHttpRequest.prototype.setRequestHeader;
    window.XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
        if (key == 'Authorization') {
            debugger;
        }
        return org.apply(this, arguments);
    };
})()
```

### 07、URL操作

URL Hook 用于定位请求 URL 中关键参数生成位置，以下代码演示了当请求的 URL 里包含 login 关键字时，则插入断点：

```
(function () {
    var open = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function (method, url, async) {
        if (url.indexOf("login") != 1) {
            debugger;
        }
        return open.apply(this, arguments);
    };
})();
```

### **08、JSON.stringify操作**

JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串，在某些站点的加密过程中可能会遇到，以下代码演示了遇到 JSON.stringify() 时，则插入断点：

```
(function() {
    var stringify = JSON.stringify;
    JSON.stringify = function(params) {
        console.log("Hook JSON.stringify ——> ", params);
        debugger;
        return stringify(params);
    }
})();
```

### **09、JSON.parse操作**

JSON.parse() 方法用于将一个 JSON 字符串转换为对象，在某些站点的加密过程中可能会遇到，以下代码演示了遇到 JSON.parse() 时，则插入断点：

```
(function() {
    var parse = JSON.parse;
    JSON.parse = function(params) {
        console.log("Hook JSON.parse ——> ", params);
        debugger;
        return parse(params);
    }
})();
```

### **10、eval操作**

JavaScript eval() 函数的作用是计算 JavaScript 字符串，并把它作为 脚本代码来执行。如果参数是一个表达式，eval() 函数将执行表达式。如果参数是 Javascript 语句，eval() 将执行 Javascript 语句，经常被用来动态执行 JS。以下代码执行后，之后所有的 eval() 操作都会在控制台打印输出将要执行的 JS 源码：

```
(function() {
    // 保存原始方法
    window.__cr_eval = window.eval;
    // 重写 eval
    var myeval = function(src) {
        console.log(src);
        console.log("=============== eval end ===============");
        debugger;
        return window.__cr_eval(src);
    }
    // 屏蔽 JS 中对原生函数 native 属性的检测
    var _myeval = myeval.bind(null);
    _myeval.toString = window.__cr_eval.toString;
    Object.defineProperty(window, 'eval', {
        value: _myeval
    });
})();
```

### 11、Function操作

以下代码执行后，所有的函数操作都会在控制台打印输出将要执行的 JS 源码：

```
(function() {
    // 保存原始方法
    window.__cr_fun = window.Function;
    // 重写 function
    var myfun = function() {
        var args = Array.prototype.slice.call(arguments, 0, -1).join(","),
            src = arguments[arguments.length - 1];
        console.log(src);
        console.log("=============== Function end ===============");
        debugger;
        return window.__cr_fun.apply(this, arguments);
    }
    // 屏蔽js中对原生函数native属性的检测
    myfun.toString = function() {
        return window.__cr_fun + ""
    }
    Object.defineProperty(window, 'Function', {
        value: myfun
    });
})();
```

