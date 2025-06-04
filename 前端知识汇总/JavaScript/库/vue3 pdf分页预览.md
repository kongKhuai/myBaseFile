### 第一种
```
<!--

 * @Author: kongshuai

 * @Date: 2025-05-19 10:26:38

 * @LastEditors: kongshuai

 * @LastEditTime: 2025-05-19 14:58:54

 * @FilePath: \electron-door-win7\src\components\pdfPreview.vue

 * @Description:

 *
  "vue-pdf-embed": "^1.1.6",

    "vue3-pdfjs": "^0.1.6"
    "pdfjs-dist": "^3.4.120",
    "regenerator-runtime": "^0.14.1",
    "vue-demi": "^0.14.10",
    "vue-pdf-embed": "^1.1.6",

<PDFView :pdfUrl="pdfUrl" v-if="showPdf" @goBack="showPdf = false" />
-->

<template>

  <div class="pdf-preview">

    <!-- <div

      class="pdf-wrap"

      :style="{

        'padding-top': `calc(50% / ${state.scale} * ${state.scale - 1})`,

      }"

    >

      <vue-pdf-embed

        :source="state.source"

        :style="scale"

        class="vue-pdf-embed"

        :page="state.pageNum"

      />

    </div>

    <div class="page-tool">

      <div class="page-tool-item" @click="lastPage">上一页</div>

      <div class="page-tool-item" @click="nextPage">下一页</div>

      <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>

      <div class="page-tool-item" @click="pageZoomOut">放大</div>

      <div class="page-tool-item" @click="pageZoomIn">缩小</div>

    </div> -->

    <iframe :src="pdfUrl" frameborder="0"></iframe>

  </div>

</template>

<script setup lang="ts">

import { reactive, onMounted, computed } from "vue";

import VuePdfEmbed from "vue-pdf-embed";

import { createLoadingTask } from "vue3-pdfjs";

  

const props = defineProps({

  pdfUrl: {

    type: String,

    required: true,

  },

});

const state = reactive({

  source: props.pdfUrl, //预览pdf文件地址

  pageNum: 1, //当前页面

  scale: 1, // 缩放比例

  numPages: 0, // 总页数

});

onMounted(() => {

  const loadingTask = createLoadingTask(state.source);

  loadingTask.promise.then((pdf: { numPages: number }) => {

    state.numPages = pdf.numPages;

  });

});

const scale = computed(() => `transform:scale(${state.scale})`);

function lastPage() {

  if (state.pageNum > 1) {

    state.pageNum -= 1;

  }

}

function nextPage() {

  if (state.pageNum < state.numPages) {

    state.pageNum += 1;

  }

}

function pageZoomOut() {

  if (state.scale < 2) {

    state.scale += 0.1;

  }

}

function pageZoomIn() {

  if (state.scale > 1) {

    state.scale -= 0.1;

  }

}

</script>

<style lang="css" scoped>

.pdf-preview {

  position: fixed;

  top: 0;

  left: 0;

  bottom: 0;

  right: 0;

  width: 100%;

  height: 100%;

  /* padding: 20px; */

  box-sizing: border-box;

  background: rgb(66, 66, 66);

  /* background-color: e9e9e9; */

  overflow: hidden; /* 添加这行 */

}

.pdf-preview iframe {

  width: 100%;

  height: 100%;

}

.vue-pdf-embed {

  text-align: center;

  width: 515px;

  border: 1px solid #e5e5e5;

  margin: 0 auto;

  box-sizing: border-box;

}

  

.pdf-wrap {

  overflow-y: auto;

}

  

.page-tool {

  position: absolute;

  bottom: 35px;

  padding-left: 15px;

  padding-right: 15px;

  display: flex;

  align-items: center;

  background: rgb(66, 66, 66);

  color: white;

  border-radius: 19px;

  z-index: 100;

  cursor: pointer;

  margin-left: 50%;

  transform: translateX(-50%);

}

.page-tool-item {

  padding: 8px 15px;

  padding-left: 10px;

  cursor: pointer;

}

</style>
```


### 第二种
```
<template>

  <div class="pdf-preview">

    <el-page-header @back="goBack"> </el-page-header>

    <vue-office-pdf

      :src="pdfUrl"

      class="pdf-preview2"

      style="height: calc(100% - 30px)"

      @rendered="renderedHandler"

      @error="errorHandler"

    />

  </div>

</template>

<script setup>

import { ref } from "vue";

// 引入 VueOfficeDocx 组件

import VueOfficePdf from "@vue-office/pdf";

// import * as pdfjsLib from "pdfjs-dist";

// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// 替换原来的 import 语句

// import { GlobalWorkerOptions } from "pdfjs-dist";

// import * as pdfjsLib from "pdfjs-dist";

// import * as pdf_worker_min_js from "@/assets/js/pdf.worker.min.js";

// import { GlobalWorkerOptions } from "pdfjs-dist";

// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

  

// GlobalWorkerOptions.workerSrc = pdfjsWorker;

// v2.10+ 的正确引入方式

// GlobalWorkerOptions.workerSrc = new URL(

//   "pdfjs-dist/build/pdf.worker.min.js",

//   import.meta.url

// ).toString();

// 使用 CDN 路径

// GlobalWorkerOptions.workerSrc = pdf_worker_min_js;

// pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(

//   "@/assets/js/pdf.worker.min.js",

//   import.meta.url

// ).href;

  

// GlobalWorkerOptions.workerSrc =

//   "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

// import "@vue-office/docx/lib/index.css";

// GlobalWorkerOptions.workerSrc = "../assets/js/pdf.worker.min.js";

const emit = defineEmits(["goBack"]);

const props = defineProps({

  pdfUrl: {

    type: String,

    required: true,

  },

});

  

// 定义渲染完成和渲染失败的回调函数

const renderedHandler = () => {

  console.log("渲染完成");

};

  

const errorHandler = (err) => {

  console.log("渲染失败" + err);

};

const goBack = () => {

  emit("goBack");

};

</script>

<style lang="css" scoped>

.pdf-preview {

  position: fixed;

  top: 0;

  left: 0;

  bottom: 0;

  right: 0;

  width: 100%;

  height: 100%;

  box-sizing: border-box;

  background: #070f30;

  /* background: rgb(66, 66, 66); */

  overflow: hidden;

  z-index: 10;

  padding: 20px;

}

.pdf-preview :deep(.vue-office-pdf.pdf-preview2 .vue-office-pdf-wrapper) {

  background: #070f30 !important;

}

</style>
```

### 第三种

```
<template>

  <div class="pdf-preview">

    <el-page-header @back="goBack"> </el-page-header>

    <div class="pdf-container">

      <canvas id="pdf-canvas"></canvas>

    </div>

  </div>

</template>

  

<script setup lang="ts">

import { onMounted, ref } from "vue";

// import * as PdfJs from "pdfjs-dist/legacy/build/pdf.js";

import PdfWorker from "pdfjs-dist/legacy/build/pdf.worker.entry";

// import { GlobalWorkerOptions } from "pdfjs-dist";

import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

  

// GlobalWorkerOptions.workerSrc = pdfjsWorker;

import { GlobalWorkerOptions } from "pdfjs-dist";

import * as PdfJs from "pdfjs-dist/legacy/build/pdf.js";

  

// 设置 Worker 文件路径

GlobalWorkerOptions.workerSrc =

  "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

  

const emit = defineEmits(["goBack"]);

const props = defineProps({

  pdfUrl: {

    type: String,

    required: true,

  },

});

  

// 设置 Worker 路径

PdfJs.GlobalWorkerOptions.workerSrc = pdfjsWorker; //PdfWorker;

  

const canvas = ref<HTMLCanvasElement | null>(null);

  

onMounted(async () => {

  // 获取 canvas 元素

  canvas.value = document.getElementById("pdf-canvas") as HTMLCanvasElement;

  

  // 加载 PDF 文件

  const url = props.pdfUrl; // 替换为你的 PDF 文件路径

  const loadingTask = PdfJs.getDocument(url);

  const pdf = await loadingTask.promise;

  

  // 获取第一页

  const pageNumber = 1;

  const page = await pdf.getPage(pageNumber);

  

  // 设置缩放比例

  const scale = 1.5;

  const viewport = page.getViewport({ scale });

  

  // 调整 canvas 大小

  canvas.value.width = viewport.width;

  canvas.value.height = viewport.height;

  

  // 渲染 PDF 页面

  const context = canvas.value.getContext("2d");

  const renderContext = {

    canvasContext: context,

    viewport: viewport,

  };

  await page.render(renderContext).promise;

});

</script>
```