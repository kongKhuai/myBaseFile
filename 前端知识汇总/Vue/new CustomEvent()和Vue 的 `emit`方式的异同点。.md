
## `new CustomEvent` 的来源

`CustomEvent` 是浏览器原生提供的 Web API，属于 DOM 事件系统的一部分，不需要从任何库中导入。它是 `Event` 构造函数的一个子类，专门用于创建自定义事件。

## `CustomEvent` 与 Vue 的 `emit` 的比较

### 相同点：
1. **目的相同**：两者都用于组件间的通信，通知其他组件发生了某个事件
2. **都可以传递数据**：两者都可以携带数据传递给监听者

### 不同点：

#### 1. 作用范围
- **`CustomEvent`**：全局事件，可以在整个应用中监听，不局限于父子组件关系
- **`emit`**：主要用于父子组件通信，父组件通过 `v-on` 监听子组件触发的事件

#### 2. 监听方式
- **`CustomEvent`**：使用 `window.addEventListener` 监听
- **`emit`**：在父组件模板中使用 `@event-name` 监听

## `CustomEvent` 与 `emit` 的详细比较

### 1. 来源
- **`CustomEvent`**：浏览器原生 API，无需导入，属于 DOM 事件系统
- **`emit`**：Vue 框架提供的方法，需要通过 `defineEmits` 定义

### 2. 作用范围
- **`CustomEvent`**：全局事件，可以在应用任何地方监听，不局限于组件层级关系
- **`emit`**：主要用于父子组件通信，父组件通过 `@event-name` 监听子组件触发的事件

### 3. 使用方式

#### `CustomEvent` 使用方式：
```javascript
// 触发事件
const event = new CustomEvent('theme-changed', { 
  detail: { theme: 'dark' } 
});
window.dispatchEvent(event);

// 监听事件
window.addEventListener('theme-changed', (event) => {
  console.log(event.detail); // { theme: 'dark' }
});

// 记得在组件卸载时移除监听器，避免内存泄漏
onUnmounted(() => {
  window.removeEventListener('theme-changed', handler);
});
```

#### `emit` 使用方式：
```javascript
// 子组件中定义和触发事件
const emit = defineEmits(['theme-changed']);
emit('theme-changed', { theme: 'dark' });

// 父组件中监听
<template>
  <switchTheme @theme-changed="handleThemeChange" />
</template>

<script setup>
const handleThemeChange = (data) => {
  console.log(data); // { theme: 'dark' }
};
</script>
```

### 4. 数据传递
- **`CustomEvent`**：数据通过 `detail` 属性传递
- **`emit`**：数据作为第二个参数直接传递

### 5. 使用场景

#### 使用 `CustomEvent` 的场景：
- 需要在多个不相关的组件间通信
- 需要创建全局事件系统
- 需要与非 Vue 代码交互
- 需要在应用的不同层级间传递事件

#### 使用 `emit` 的场景：
- 父子组件之间的通信
- 组件内部状态变化需要通知父组件
- 需要保持组件的封装性和可维护性

### 6. 性能考虑
- **`CustomEvent`**：全局事件，可能影响整个应用，需要手动管理监听器的生命周期
- **`emit`**：Vue 内部优化，自动管理生命周期，性能更好

在我们的主题切换示例中，我同时提供了两种方式，这样您可以根据实际需求选择最适合的方案。对于主题切换这种可能影响整个应用的功能，使用 `CustomEvent` 可能更合适，因为任何组件都可能需要响应主题变化。

现在您可以在浏览器中测试这两种方式，当切换主题时，控制台会显示两种方式接收到的主题变化信息。
        