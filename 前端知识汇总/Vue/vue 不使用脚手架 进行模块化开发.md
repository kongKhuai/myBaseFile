## 模块化开发

除了直接在HTML中引入Vue.js，我们还可以在项目中使用模块化开发。在使用打包工具的时候，我们通常会使用像ES6模块的语法来组织和导入Vue.js的代码。但是如果我们不使用打包工具，我们可以使用其他方式来实现模块化开发。

例如，我们可以使用AMD（异步模块定义）规范来加载和使用Vue.js。以下是一个使用Require.js加载Vue.js的示例：

```html
<!DOCTYPE html>
<html>
<head>
  <title>使用Vue.js</title>
  <script src="https://cdn.jsdelivr.net/npm/requirejs"></script>
</head>
<body>
  <div id="app">
    {{ message }}
  </div>

  <script>
    require(['https://cdn.jsdelivr.net/npm/vue'], function(Vue) {
      var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello, Vue!'
        }
      })
    })
  </script>
</body>
</html>
```

HTML

Copy

在上面的示例中，我们使用了Require.js来加载Vue.js，并在回调函数中创建了Vue实例。

除了AMD，我们还可以使用其他的模块化规范，如CommonJS或UMD。这些规范可以帮助我们以模块化的方式使用Vue.js。