<!--
 * @Author: 16651618507@163.com
 * @Date: 2023-12-16 10:49:45
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2023-12-16 10:50:43
 * @FilePath: \myBaseFile\vue\vue2笔记\引入外部css.md
 * @Description:
 *
-->

# vue 组件内引入外部在线 js、css

## **一、css:**

```css
<style scoped>    @import 'https://unpkg.com/element-ui@2.3.7/lib/theme-chalk/index.css';
```

二、js：
第一种方式：利用 Vue 的 mounted 生命周期

```
 mounted() {
     const oScript = document.createElement('script');
     oScript.type = 'text/javascript';
     oScript.src = 'https://unpkg.com/element-ui@2.3.7/lib/index.js';
     document.body.appendChild(oScript);
 }
```

```
第二种方式：利用 Vue 的 createElement 方法
components: {
	'scriptLink': {
	  render(createElement) {
		return createElement(
		  'script',
		  {
			attrs: {
			  type: 'text/javascript',
			  src: 'https://unpkg.com/element-ui@2.3.7/lib/index.js',
			},
		  },
		)
	  }
	}
  }

```
然后通过 引入到组件中


## 方法1

简单粗暴，直接在Vue项目的index.html 中使用全局的方式引入，
缺点：不使用该js插件的组件也会加载，而我只想在某个Vue组件中使用该js插件。
比如：
```
<!DOCTYPE html>
<html>
<head>
    <!-- ... 省略-->
</head>
<body>
    <div id="app"></div>
</body>
<script src="../xxx.js"></script> // 暴力引入
</html>
```

## 方法2

如果是下载到本地的静态文件，可以使用**import** 的方式导入。

```
import { xxx } from '路径' 
```

缺点：下载的静态文件才可以

## 方法3

在Vue组件加载完后，手动操作DOM插入js插件。

```
export default {
    mounted() {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '你的js文件地址';
        document.body.appendChild(script);
    },
}
```

该方式直接操作DOM，只在当前组件插入js插件。

## 方法4

使用render方法

```
export default {
    components: {
        'xxx-js': {
            render(createElement) {
                return createElement(
                    'script',
                    {
                        attrs: {
                            type: 'text/javascript',
                            src: '你的js文件地址',
                        },
                    },
                );
            },
        },
    },
}
```
// 使用 <xxx-js></xxx-js> 组件方式在页面中调用


## 方法5

高阶玩法。将方式三包装成一个js插件，使用 Promise，js加载成功，调用resolve，js加载失败，调用reject。

```
function loadJs(src) {
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script');
    script.type = "text/javascript";
    script.src= src;
    document.body.appendChild(script);
      
    script.onload = ()=>{
      resolve();
    }
    script.onerror = ()=>{
      reject();
    }
  })
}
 
export default loadJs
```

使用的时候：

```
import loadJs from '../../utils/base/loadJs'
   
export default {
    mounted(){
        loadJs('http://api.map.baidu.com/xxx.js').then(()=>{
            // 加载成功，进行后续操作
        })
    }
}
```


## 方法6

更高阶方式。可以动态替换要加载的js文件。

包装一个importJs.js 插件。

```

// 导入外部js
import Vue from 'vue'
 
Vue.component('remote-script', {
  render: function (createElement) {
    var self = this;
    return createElement('script', {
      attrs: {
        type: 'text/javascript',
        src: this.src
      },
      on: {
        load: function (event) {
          self.$emit('load', event);
        },
        error: function (event) {
          self.$emit('error', event);
        },
        readystatechange: function (event) {
          if (this.readyState == 'complete') {
            self.$emit('load', event);
          }
        }
      }
    });
  },
  props: {
    src: {
      type: String,
      required: true
    }
  }
});
```
使用方式：

```
// 引入
import '@/common/importJs.js'
// html使用的地方
<remote-script src="js文件路径"></remote-script>
```
