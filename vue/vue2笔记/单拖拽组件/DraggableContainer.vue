<!--
 * @Description: 高性能可拖动容器组件 - 基于 requestAnimationFrame 优化
 * @Version: 1.0.0
 * @Autor: AI Assistant
 * @Date: 2025-01-27
 * @LastEditors: kongshuai
 * @LastEditTime: 2025-09-05 10:07:31
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<template>
  <div
    ref="draggableContainer"
    class="draggable-container"
    :class="{
      dragging: isDragging,
      'boundary-constrained': constrainToBoundary,
    }"
    :style="{
      left: `${position.left}px`,
      top: `${position.top}px`,
      cursor: isDragging ? 'grabbing' : dragCursor,
      zIndex: isDragging ? dragZIndex : initialZIndex,
    }"
    @mousedown="startDrag"
  >
    <!-- 拖拽手柄 (可选) -->
    <div
      v-if="showHandle"
      class="drag-handle"
      :class="handleClass"
      @mousedown.stop="startDrag"
    >
      <slot name="handle">
        <svg class="handle-icon" viewBox="0 0 24 24">
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </slot>
    </div>

    <!-- 主要内容区域 -->
    <div class="draggable-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DraggableContainer",
  props: {
    // 初始位置
    initialPosition: {
      type: Object,
      default: () => ({ left: 100, top: 100 }),
    },
    // 是否限制在边界内
    constrainToBoundary: {
      type: Boolean,
      default: true,
    },
    // 边界距离
    boundaryMargin: {
      type: Number,
      default: 10,
    },
    // 拖拽手柄
    showHandle: {
      type: Boolean,
      default: false,
    },
    // 手柄样式类名
    handleClass: {
      type: String,
      default: "",
    },
    // 拖拽光标
    dragCursor: {
      type: String,
      default: "grab",
    },
    // 初始层级
    initialZIndex: {
      type: Number,
      default: 1000,
    },
    // 拖拽时层级
    dragZIndex: {
      type: Number,
      default: 9999,
    },
    // 是否禁用拖拽
    disabled: {
      type: Boolean,
      default: false,
    },
    // 拖拽区域选择器 (如果不指定则整个容器可拖拽)
    dragSelector: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // 当前位置
      position: { ...this.initialPosition },
      // 拖拽状态
      isDragging: false,
      // 鼠标偏移量
      offset: { x: null, y: null },
      // 性能优化相关
      dragAnimationId: null,
      cachedBounds: null,
      lastFrameTime: 0,
    };
  },
  mounted() {
    // 确保位置在边界内
    this.$nextTick(() => {
      this.constrainPosition();
    });

    // 添加全局事件监听
    window.addEventListener("mousemove", this.onDrag);
    window.addEventListener("mouseup", this.stopDrag);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    // 清理事件监听
    window.removeEventListener("mousemove", this.onDrag);
    window.removeEventListener("mouseup", this.stopDrag);
    window.removeEventListener("resize", this.handleResize);

    // 清理动画帧
    if (this.dragAnimationId) {
      cancelAnimationFrame(this.dragAnimationId);
    }

    // 重置文档样式
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
  },
  methods: {
    // 开始拖拽
    startDrag(event) {
      if (this.disabled) return;

      // 如果指定了拖拽选择器，检查是否点击在正确区域
      if (this.dragSelector) {
        const target = event.target.closest(this.dragSelector);
        if (!target || !this.$refs.draggableContainer.contains(target)) {
          return;
        }
      }

      event.preventDefault();

      this.isDragging = true;

      // 计算鼠标相对于元素的偏移量
      const rect = this.$refs.draggableContainer.getBoundingClientRect();
      this.offset.x = event.clientX - rect.left;
      this.offset.y = event.clientY - rect.top;

      // 设置拖拽样式
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";

      // 缓存边界信息，避免重复计算
      if (this.constrainToBoundary) {
        this.cachedBounds = this.calculateBounds();
      }

      // 触发拖拽开始事件
      this.$emit("drag-start", {
        position: { ...this.position },
        event,
      });
    },

    // 拖拽中
    onDrag(event) {
      if (!this.isDragging) return;

      // 使用 requestAnimationFrame 优化性能
      this.updatePosition(event);
    },

    // 停止拖拽
    stopDrag(event) {
      if (!this.isDragging) return;

      this.isDragging = false;
      this.offset.x = null;
      this.offset.y = null;
      this.cachedBounds = null;

      // 清理动画帧
      if (this.dragAnimationId) {
        cancelAnimationFrame(this.dragAnimationId);
        this.dragAnimationId = null;
      }

      // 重置文档样式
      document.body.style.cursor = "";
      document.body.style.userSelect = "";

      // 触发拖拽结束事件
      this.$emit("drag-end", {
        position: { ...this.position },
        event,
      });
    },

    // 使用 requestAnimationFrame 优化位置更新
    updatePosition(event) {
      if (this.dragAnimationId) {
        cancelAnimationFrame(this.dragAnimationId);
      }

      this.dragAnimationId = requestAnimationFrame(() => {
        const newLeft = event.clientX - this.offset.x;
        const newTop = event.clientY - this.offset.y;

        if (this.constrainToBoundary && this.cachedBounds) {
          // 使用缓存的边界信息进行约束
          this.position.left = Math.max(
            this.cachedBounds.minLeft,
            Math.min(this.cachedBounds.maxLeft, newLeft)
          );
          this.position.top = Math.max(
            this.cachedBounds.minTop,
            Math.min(this.cachedBounds.maxTop, newTop)
          );
        } else {
          this.position.left = newLeft;
          this.position.top = newTop;
        }

        // 触发位置变化事件
        this.$emit("position-change", { ...this.position });
      });
    },

    // 计算边界限制
    calculateBounds() {
      if (!this.$refs.draggableContainer) return null;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const rect = this.$refs.draggableContainer.getBoundingClientRect();
      const elementWidth = rect.width;
      const elementHeight = rect.height;

      return {
        minLeft: this.boundaryMargin,
        maxLeft: windowWidth - elementWidth - this.boundaryMargin,
        minTop: this.boundaryMargin,
        maxTop: windowHeight - elementHeight - this.boundaryMargin,
      };
    },

    // 约束位置到边界内
    constrainPosition() {
      if (!this.constrainToBoundary) return;

      const bounds = this.calculateBounds();
      if (!bounds) return;

      this.position.left = Math.max(
        bounds.minLeft,
        Math.min(bounds.maxLeft, this.position.left)
      );
      this.position.top = Math.max(
        bounds.minTop,
        Math.min(bounds.maxTop, this.position.top)
      );
    },

    // 窗口大小变化处理
    handleResize() {
      // 延迟处理，避免频繁计算
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.constrainPosition();
      }, 100);
    },

    // 公共方法：设置位置
    setPosition(left, top) {
      this.position.left = left;
      this.position.top = top;

      if (this.constrainToBoundary) {
        this.constrainPosition();
      }

      this.$emit("position-change", { ...this.position });
    },

    // 公共方法：重置到初始位置
    resetPosition() {
      this.setPosition(this.initialPosition.left, this.initialPosition.top);
    },
  },

  watch: {
    // 监听初始位置变化
    initialPosition: {
      handler(newPosition) {
        this.position = { ...newPosition };
        this.constrainPosition();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.draggable-container {
  position: fixed;
  user-select: none;

  /* 硬件加速优化 */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;

  /* 减少重绘优化 */
  contain: layout style paint;

  /* 拖拽时禁用过渡动画 */
  &.dragging {
    transition: none !important;

    * {
      pointer-events: none;
    }
  }

  /* 边界约束样式 */
  &.boundary-constrained {
    /* 边界约束时的样式，可根据需要添加 */
    box-shadow: 0 0 0 1px rgba(0, 125, 123, 0.1);
  }
}

.drag-handle {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0 8px;
  transition: background-color 0.2s ease;
  z-index: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  &:active {
    cursor: grabbing;
  }

  .handle-icon {
    width: 16px;
    height: 16px;
    fill: rgba(0, 0, 0, 0.6);
  }
}

.draggable-content {
  width: 100%;
  height: 100%;
  position: relative;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .draggable-container {
    /* 移动端优化 */
    touch-action: none;
  }

  .drag-handle {
    width: 32px;
    height: 32px;

    .handle-icon {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
