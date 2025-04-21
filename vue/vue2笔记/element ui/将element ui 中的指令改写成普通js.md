### 问题：

>这个是elementui的点击元素外的监听自定义指令，我的项目是是用内部路径引入的vue。js，不能使用导入的方法引入这个指令，如何改写成一个单独的js可以让我方便使用

``` 正常使用
<div v-clickoutside="handleClickOutside"></div>

import Clickoutside from 'element-ui/src/utils/clickoutside'
export default {
    directives: { Clickoutside },
    methods: {
	 handleClickOutside() {}
	}
 }

```
==指令源代码==
```
import Vue from 'vue';
import { on } from 'element-ui/src/utils/dom';

const nodeList = [];
const ctx = '@@clickoutsideContext';

let startClick;
let seed = 0;

!Vue.prototype.$isServer && on(document, 'mousedown', e => (startClick = e));

!Vue.prototype.$isServer && on(document, 'mouseup', e => {
  nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
});

function createDocumentHandler(el, binding, vnode) {
  return function(mouseup = {}, mousedown = {}) {
    if (!vnode ||
      !vnode.context ||
      !mouseup.target ||
      !mousedown.target ||
      el.contains(mouseup.target) ||
      el.contains(mousedown.target) ||
      el === mouseup.target ||
      (vnode.context.popperElm &&
      (vnode.context.popperElm.contains(mouseup.target) ||
      vnode.context.popperElm.contains(mousedown.target)))) return;

    if (binding.expression &&
      el[ctx].methodName &&
      vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}

/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */
export default {
  bind(el, binding, vnode) {
    nodeList.push(el);
    const id = seed++;
    el[ctx] = {
      id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },

  update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },

  unbind(el) {
    let len = nodeList.length;

    for (let i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }
    delete el[ctx];
  }
};


```
#### 方式1 改成插件

```

// clickOutside.js
(function (Vue) {
  const nodeList = [];
  const ctx = '@@clickoutsideContext';

  let startClick;
  let seed = 0;

  function on(element, event, handler) {
    element.addEventListener(event, handler);
  }

  if (!Vue.prototype.$isServer) {
    on(document, 'mousedown', e => (startClick = e));
    on(document, 'mouseup', e => {
      nodeList.forEach(node => node[ctx].documentHandler(e, startClick));
    });
  }

  function createDocumentHandler(el, binding, vnode) {
    return function (mouseup = {}, mousedown = {}) {
      if (!vnode ||
       !vnode.context ||
       !mouseup.target ||
       !mousedown.target ||
        el.contains(mouseup.target) ||
        el.contains(mousedown.target) ||
        el === mouseup.target ||
        (vnode.context.popperElm &&
          (vnode.context.popperElm.contains(mouseup.target) ||
            vnode.context.popperElm.contains(mousedown.target)))) return;

      if (binding.expression &&
        el[ctx].methodName &&
        vnode.context[el[ctx].methodName]) {
        vnode.context[el[ctx].methodName]();
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn();
      }
    };
  }

  const clickOutside = {
    install(Vue) {
      Vue.directive('element-clickoutside', {
        bind(el, binding, vnode) {
          nodeList.push(el);
          const id = seed++;
          el[ctx] = {
            id,
            documentHandler: createDocumentHandler(el, binding, vnode),
            methodName: binding.expression,
            bindingFn: binding.value
          };
        },

        update(el, binding, vnode) {
          el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
          el[ctx].methodName = binding.expression;
          el[ctx].bindingFn = binding.value;
        },

        unbind(el) {
          let len = nodeList.length;

          for (let i = 0; i < len; i++) {
            if (nodeList[i][ctx].id === el[ctx].id) {
              nodeList.splice(i, 1);
              break;
            }
          }
          delete el[ctx];
        }
      });
    }
  };

  // 自动安装指令，如果在全局环境中使用
  if (typeof window!== 'undefined' && window.Vue) {
    window.Vue.use(clickOutside);
  }

  return clickOutside;
})(Vue);
```

#### 方式2 直接注册全局指令

```

// clickoutside.js
(function (global) {
  var Vue = global.Vue;
  if (!Vue) return;

  // 用原生事件监听替代 element-ui 的 on 方法
  function on(element, event, handler) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  }

  var nodeList = [];
  var ctx = '@@clickoutsideContext';
  var seed = 0;
  var startClick;

  // 客户端环境才绑定事件
  if (!Vue.prototype.$isServer) {
    on(document, 'mousedown', function(e) {
      startClick = e;
    });
    
    on(document, 'mouseup', function(e) {
      nodeList.forEach(function(node) {
        node[ctx].documentHandler(e, startClick);
      });
    });
  }

  function createDocumentHandler(el, binding, vnode) {
    return function(mouseup, mousedown) {
      if (!vnode ||
        !vnode.context ||
        !mouseup.target ||
        !mousedown.target ||
        el.contains(mouseup.target) ||
        el.contains(mousedown.target) ||
        el === mouseup.target ||
        (vnode.context.popperElm &&
          (vnode.context.popperElm.contains(mouseup.target) ||
          vnode.context.popperElm.contains(mousedown.target)))
      ) return;

      if (binding.expression &&
        el[ctx].methodName &&
        vnode.context[el[ctx].methodName]
      ) {
        vnode.context[el[ctx].methodName]();
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn();
      }
    };
  }

  var clickOutside = {
    bind: function(el, binding, vnode) {
      nodeList.push(el);
      var id = seed++;
      el[ctx] = {
        id: id,
        documentHandler: createDocumentHandler(el, binding, vnode),
        methodName: binding.expression,
        bindingFn: binding.value
      };
    },
    update: function(el, binding, vnode) {
      el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
      el[ctx].methodName = binding.expression;
      el[ctx].bindingFn = binding.value;
    },
    unbind: function(el) {
      for (var i = 0; i < nodeList.length; i++) {
        if (nodeList[i][ctx].id === el[ctx].id) {
          nodeList.splice(i, 1);
          break;
        }
      }
      delete el[ctx];
    }
  };

  // 注册全局指令
  Vue.directive('clickoutside', clickOutside);
})(typeof window !== 'undefined' ? window : this);
```

#### 方式3 注册局部指令

```

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ClickOutside = factory());
}(this, function () {
  'use strict';

  var nodeList = [];
  var ctx = '@@clickoutsideContext';

  var startClick;
  var seed = 0;

  function on(element, event, handler) {
    if (element && event && handler) {
      element.addEventListener(event, handler, false);
    }
  }

  !Vue.prototype.$isServer && on(document, 'mousedown', function (e) {
    return startClick = e;
  });

  !Vue.prototype.$isServer && on(document, 'mouseup', function (e) {
    nodeList.forEach(function (node) {
      return node[ctx].documentHandler(e, startClick);
    });
  });

  function createDocumentHandler(el, binding, vnode) {
    return function (mouseup, mousedown) {
      if (!vnode ||
        !vnode.context ||
        !mouseup.target ||
        !mousedown.target ||
        el.contains(mouseup.target) ||
        el.contains(mousedown.target) ||
        el === mouseup.target ||
        (vnode.context.popperElm &&
        (vnode.context.popperElm.contains(mouseup.target) ||
        vnode.context.popperElm.contains(mousedown.target)))) return;

      if (binding.expression &&
        el[ctx].methodName &&
        vnode.context[el[ctx].methodName]) {
        vnode.context[el[ctx].methodName]();
      } else {
        el[ctx].bindingFn && el[ctx].bindingFn();
      }
    };
  }

  return {
    bind: function bind(el, binding, vnode) {
      nodeList.push(el);
      var id = seed++;
      el[ctx] = {
        id: id,
        documentHandler: createDocumentHandler(el, binding, vnode),
        methodName: binding.expression,
        bindingFn: binding.value
      };
    },
    update: function update(el, binding, vnode) {
      el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
      el[ctx].methodName = binding.expression;
      el[ctx].bindingFn = binding.value;
    },
    unbind: function unbind(el) {
      var len = nodeList.length;

      for (var i = 0; i < len; i++) {
        if (nodeList[i][ctx].id === el[ctx].id) {
          nodeList.splice(i, 1);
          break;
        }
      }
      delete el[ctx];
    }
  };
}));
```