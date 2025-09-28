# 🚀 DraggableContainer - 高性能拖动组件

## 📝 简介

`DraggableContainer` 是一个基于 Vue.js 的高性能拖动组件，使用 `requestAnimationFrame` 优化，提供60fps的丝般顺滑拖动体验。

## ✨ 特性

- 🎯 **高性能** - 使用 `requestAnimationFrame` 优化，60fps 流畅拖动
- 🛡️ **边界约束** - 可选的边界限制，防止元素拖拽到屏幕外
- 🎨 **完全自定义** - 通过插槽完全控制内容和样式
- 📱 **响应式** - 支持移动端触摸操作
- 🔧 **配置灵活** - 丰富的配置选项满足各种需求
- 🎭 **拖拽手柄** - 可选的拖拽手柄，精确控制拖拽区域
- 📊 **事件丰富** - 完整的拖拽生命周期事件

## 🎯 快速开始

### 基础用法

```vue
<template>
  <DraggableContainer>
    <div class="my-content">
      我可以被拖动！
    </div>
  </DraggableContainer>
</template>

<script>
import DraggableContainer from '@/components/DraggableContainer.vue';

export default {
  components: {
    DraggableContainer
  }
};
</script>
```

### 带配置的用法

```vue
<template>
  <DraggableContainer
    :initial-position="{ left: 100, top: 100 }"
    :constrain-to-boundary="true"
    :boundary-margin="20"
    :show-handle="true"
    @drag-start="onDragStart"
    @drag-end="onDragEnd"
    @position-change="onPositionChange"
  >
    <div class="my-window">
      <h3>拖拽窗口</h3>
      <p>只有右上角的手柄可以拖动</p>
    </div>
  </DraggableContainer>
</template>
```

## 📋 Props 配置

| 属性名                | 类型    | 默认值                    | 说明             |
| --------------------- | ------- | ------------------------- | ---------------- |
| `initialPosition`     | Object  | `{ left: 100, top: 100 }` | 初始位置         |
| `constrainToBoundary` | Boolean | `true`                    | 是否限制在边界内 |
| `boundaryMargin`      | Number  | `10`                      | 边界距离(px)     |
| `showHandle`          | Boolean | `false`                   | 是否显示拖拽手柄 |
| `handleClass`         | String  | `''`                      | 手柄自定义样式类 |
| `dragCursor`          | String  | `'grab'`                  | 拖拽光标样式     |
| `initialZIndex`       | Number  | `1000`                    | 初始层级         |
| `dragZIndex`          | Number  | `9999`                    | 拖拽时层级       |
| `disabled`            | Boolean | `false`                   | 是否禁用拖拽     |
| `dragSelector`        | String  | `''`                      | 限制拖拽的选择器 |

## 📡 事件

| 事件名            | 参数                  | 说明           |
| ----------------- | --------------------- | -------------- |
| `drag-start`      | `{ position, event }` | 开始拖拽时触发 |
| `drag-end`        | `{ position, event }` | 结束拖拽时触发 |
| `position-change` | `{ left, top }`       | 位置变化时触发 |

## 🎨 插槽

| 插槽名    | 说明               |
| --------- | ------------------ |
| `default` | 主要内容区域       |
| `handle`  | 自定义拖拽手柄内容 |

## 🔧 公共方法

通过 `ref` 可以调用以下方法：

```vue
<template>
  <DraggableContainer ref="draggable">
    <!-- 内容 -->
  </DraggableContainer>
</template>

<script>
export default {
  methods: {
    moveToPosition() {
      // 设置位置
      this.$refs.draggable.setPosition(200, 200);
    },
    resetToInitial() {
      // 重置到初始位置
      this.$refs.draggable.resetPosition();
    }
  }
};
</script>
```

### 可用方法

- `setPosition(left, top)` - 设置位置
- `resetPosition()` - 重置到初始位置

## 🎯 使用场景

### 1. 浮动窗口
```vue
<DraggableContainer :show-handle="true">
  <div class="floating-window">
    <div class="window-header">标题</div>
    <div class="window-content">内容</div>
  </div>
</DraggableContainer>
```

### 2. 工具栏
```vue
<DraggableContainer>
  <div class="toolbar">
    <button>工具1</button>
    <button>工具2</button>
    <button>工具3</button>
  </div>
</DraggableContainer>
```

### 3. 仅标题栏可拖拽
```vue
<DraggableContainer drag-selector=".title-bar">
  <div class="panel">
    <div class="title-bar">拖拽我</div>
    <div class="content">内容区域不可拖拽</div>
  </div>
</DraggableContainer>
```

### 4. 自由拖拽（无边界）
```vue
<DraggableContainer :constrain-to-boundary="false">
  <div class="free-element">
    我可以拖拽到屏幕外
  </div>
</DraggableContainer>
```

## ⚡ 性能优化

该组件采用了多种性能优化技术：

1. **requestAnimationFrame** - 与浏览器刷新率同步
2. **边界缓存** - 拖拽时避免重复计算
3. **硬件加速** - CSS transform 和 GPU 加速
4. **事件优化** - 智能的事件监听和清理
5. **内存管理** - 完善的资源清理机制

## 📱 移动端支持

组件自动支持移动端触摸操作，无需额外配置。

## 🎨 样式自定义

### 自定义拖拽手柄

```vue
<template>
  <DraggableContainer :show-handle="true" handle-class="my-handle">
    <template #handle>
      <div class="custom-handle">
        <i class="icon-drag"></i>
      </div>
    </template>
    <!-- 内容 -->
  </DraggableContainer>
</template>

<style>
.my-handle {
  background: #007d7b;
  border-radius: 8px;
}
</style>
```

### 拖拽状态样式

```scss
.draggable-container {
  &.dragging {
    // 拖拽时的样式
    opacity: 0.8;
    transform: rotate(2deg);
  }
}
```

## 🚀 高级用法

### 多个组件协同

```vue
<template>
  <div>
    <DraggableContainer
      v-for="item in items"
      :key="item.id"
      :initial-position="item.position"
      @position-change="updatePosition(item.id, $event)"
    >
      <div class="item">{{ item.content }}</div>
    </DraggableContainer>
  </div>
</template>
```

### 动态配置

```vue
<template>
  <DraggableContainer
    :constrain-to-boundary="settings.constrained"
    :disabled="settings.disabled"
    :boundary-margin="settings.margin"
  >
    <!-- 内容 -->
  </DraggableContainer>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        constrained: true,
        disabled: false,
        margin: 10
      }
    };
  }
};
</script>
```

## 🛠️ 开发指南

### 本地开发
```bash
# 查看示例
npm run serve

# 访问 http://localhost:8082
# 查看 DraggableExample.vue 中的各种使用示例
```

### 构建
```bash
npm run build
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License
