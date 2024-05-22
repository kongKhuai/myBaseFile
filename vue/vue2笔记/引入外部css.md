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

````
 mounted() {
     const oScript = document.createElement('script');
     oScript.type = 'text/javascript';
     oScript.src = 'https://unpkg.com/element-ui@2.3.7/lib/index.js';
     document.body.appendChild(oScript);
 }
 ```

第二种方式：利用 Vue 的 createElement 方法
````

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

第三种方封装一个 remoteJs 组件

```
