原创 林三心不学挖掘机 前端之神

 _2025年04月22日 08:40_ _广东_

## 1. File

**本质：** 继承自Blob，表示用户文件系统中的文件

**特性：**

```
const file = new File(['content'], 'demo.txt', {  type: 'text/plain',  lastModified: Date.now()});console.log(file.name); // 'demo.txt'console.log(file.size); // 7 (字节)console.log(file.type); // 'text/plain'
```

## 2. Blob (Binary Large Object)

**作用：** 存储二进制数据的容器

**创建方法：**

```
// 从字符串创建const blob1 = new Blob(['Hello World'], { type: 'text/plain' });// 从ArrayBuffer创建const buffer = new ArrayBuffer(8);const blob2 = new Blob([buffer]);// 合并Blobconst combined = new Blob([blob1, blob2]);
```

## 3. FileReader

**核心方法：**

```
const reader = new FileReader();reader.onload = (e) => {  console.log(e.target.result);};reader.readAsText(blob);    // 读取为文本reader.readAsArrayBuffer(blob); // 读取为ArrayBufferreader.readAsDataURL(blob); // 读取为DataURL
```

## 4. ArrayBuffer

**特性：** 特性：固定长度的原始二进制缓冲区

**操作方式：**

```
const buffer = new ArrayBuffer(16);const view = new Uint8Array(buffer);view[0] = 255;console.log(view); // Uint8Array [255, 0, 0, ...]
```

## 5. Base64

**编码原理：** 每3字节转换为4个ASCII字符

**转换示例：**

```
// 文本转Base64btoa('Hello'); // 'SGVsbG8='// Base64转文本atob('SGVsbG8='); // 'Hello'
```

## 6. DataURL

**格式：** `data:[<mediatype>][;base64],<data>`

```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...
```

## 转换关系大全

### 1. File ↔ Blob

```
// File → Blob const blob = file.slice(0, file.size, file.type);// Blob → Fileconst file = new File([blob], 'filename', { type: blob.type });
```

### 2. Blob ↔ ArrayBuffer

```
// Blob → ArrayBufferconst reader = new FileReader();reader.readAsArrayBuffer(blob);reader.onload = () => {  const buffer = reader.result;};// ArrayBuffer → Blobconst newBlob = new Blob([buffer]);
```

### 3. Blob ↔ DataURL

```
// Blob → DataURLconst reader = new FileReader();reader.readAsDataURL(blob);// DataURL → Blobfunction dataURLtoBlob(dataurl) {const arr = dataurl.split(','),        mime = arr[0].match(/:(.*?);/)[1],        bstr = atob(arr[1]),        n = bstr.length,        u8arr = newUint8Array(n);while(n--) u8arr[n] = bstr.charCodeAt(n);returnnew Blob([u8arr], { type: mime });}
```

### 4. ArrayBuffer ↔ Base64

```
// ArrayBuffer → Base64function arrayBufferToBase64(buffer) {let binary = '';const bytes = newUint8Array(buffer);for (let i = 0; i < bytes.byteLength; i++) {    binary += String.fromCharCode(bytes[i]);  }return btoa(binary);}// Base64 → ArrayBufferfunction base64ToArrayBuffer(base64) {const binaryString = atob(base64);const len = binaryString.length;const bytes = newUint8Array(len);for (let i = 0; i < len; i++) {    bytes[i] = binaryString.charCodeAt(i);  }return bytes.buffer;}
```

## 小结

|类型|内存占用|内存占用|适用场景|
|---|---|---|---|
|Blob|低|快|文件存储/切片上传|
|ArrayBuffer|最低|最快|二进制操作/WebSocket传输|
|DataURL|高|慢|文件存储/切片上传|
|Object URL|中|快|大文件预览|
