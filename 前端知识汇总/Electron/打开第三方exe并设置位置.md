在 Electron 主进程中直接通过 `exec` 执行第三方 EXE 文件后，若要控制其窗口的位置和大小，需借助系统级 API 或第三方工具。以下是几种实现方案及详细步骤：

---

### ​**方案一：通过 Windows API 操作窗口（推荐）​**​

需要调用系统级 API（如 `user32.dll` 的 `SetWindowPos` 函数），可借助 Node.js 的 `ffi-napi` 库实现：

1. ​**安装依赖**​
    
    ```bash
    npm install ffi-napi ref-napi
    ```
    
2. ​**主进程代码示例**​
    
    ```javascript
    const ffi = require('ffi-napi');
    const ref = require('ref-napi');
    const { exec } = require('child_process');
    
    // 定义 Windows API 函数
    const user32 = new ffi.Library('user32.dll', {
      'FindWindowA': ['int', ['string', 'string']],
      'SetWindowPos': ['int', ['int', 'int', 'int', 'int', 'int', 'int', 'int']]
    });
    
    // 启动第三方 EXE
    exec(`"${exePath}" "${filePath}"`, { encoding: "utf8", cwd: path.dirname(exePath) }, (error) => {
      if (error) return;
      
      // 延迟等待窗口初始化
      setTimeout(() => {
        // 通过窗口类名或标题查找句柄（需提前知道窗口信息）
        const hwnd = user32.FindWindowA(null, '第三方窗口标题');
        if (hwnd) {
          // 设置窗口位置和大小（坐标单位：像素）
          user32.SetWindowPos(
            hwnd,           // 窗口句柄
            0,              // 插入顺序（0表示置顶）
            0,              // X坐标（左上角）
            0,              // Y坐标（左上角）
            400,            // 宽度
            400,            // 高度
            0x0040          // 标志位（SWP_SHOWWINDOW）
          );
        }
      }, 2000); // 根据程序启动速度调整延迟
    });
    ```
    

---

### ​**方案二：使用 AutoHotkey 脚本（跨进程控制）​**​

通过编写 AutoHotkey 脚本并调用其执行：

1. ​**创建脚本 `resize.ahk`**​
    
    autohotkey
    
    autohotkey
    
    复制
    
    ```autohotkey
    WinWait, 第三方窗口标题
    WinMove, 0, 0, 400, 400
    ```
    
2. ​**主进程代码**​
    
    javascript
    
    javascript
    
    复制
    
    ```javascript
    const { exec } = require('child_process');
    exec(`AutoHotkey.exe resize.ahk`, (error) => {});
    ```
    

---

### ​**方案三：使用第三方库（简化操作）​**​

使用 `node-window-manager` 等封装库：

1. ​**安装依赖**​
    
    bash
    
    bash
    
    复制
    
    ```bash
    npm install node-window-manager
    ```
    
2. ​**主进程代码**​
    
    javascript
    
    javascript
    
    复制
    
    ```javascript
    const { exec } = require('child_process');
    const WindowManager = require('node-window-manager');
    
    exec(`"${exePath}" "${filePath}"`, (error) => {
      if (error) return;
      
      setTimeout(() => {
        const windows = WindowManager.getWindows();
        const targetWindow = windows.find(w => w.title === '第三方窗口标题');
        if (targetWindow) {
          targetWindow.setBounds({ x: 0, y: 0, width: 400, height: 400 });
        }
      }, 2000);
    });
    ```
    

---

### ​**注意事项**​

1. ​**窗口标题或类名**​  
    需提前通过工具（如 Spy++）获取第三方 EXE 的窗口标题或类名。
    
2. ​**延迟等待**​  
    窗口启动需要时间，需通过 `setTimeout` 等待其初始化完成。
    
3. ​**跨平台兼容性**​  
    上述方案主要针对 Windows 系统，macOS/Linux 需使用 `xdotool` 或类似工具。
    

---

### ​**引用来源**​

- 窗口位置设置原理参考了 Electron 内置窗口坐标控制逻辑。
- 系统级 API 调用方法基于 Windows 开发文档实现，与 Electron 自身窗口属性设置类似。




在 Electron 主进程中，使用 `child_process.exec` 启动第三方 EXE 后，要控制其窗口位置和大小，你需要使用 Windows API 来实现。以下是完整的解决方案：

### 1. 使用 `node-ffi-napi` 调用 Windows API

首先安装依赖：

```bash
npm install ffi-napi ref-napi
```

然后编写代码：

```javascript
const { exec } = require('child_process');
const path = require('path');
const ffi = require('ffi-napi');
const ref = require('ref-napi');

// 定义 Windows API 类型
const HWND = ref.types.uint32;
const BOOL = ref.types.bool;
const UINT = ref.types.uint32;
const STRING = ref.types.CString;

// 加载 user32.dll
const user32 = new ffi.Library('user32', {
  'FindWindowA': [HWND, [STRING, STRING]],
  'SetWindowPos': [BOOL, [HWND, HWND, 'int', 'int', 'int', 'int', UINT]],
  'ShowWindow': [BOOL, [HWND, 'int']]
});

// 定义常量
const SW_SHOW = 5;
const HWND_TOP = 0;
const SWP_NOZORDER = 0x0004;

function launchExeAndSetWindow(exePath, filePath) {
  // 启动 EXE
  exec(
    `"${exePath}" "${filePath}"`,
    { encoding: "utf8", cwd: path.dirname(exePath) },
    (error, stdout, stderr) => {
      if (error) {
        console.error('Error:', error);
        return;
      }
      
      // 获取窗口句柄（需要知道窗口类名或标题）
      // 这里需要替换为你的 EXE 窗口的实际类名或标题
      const windowTitle = '你的窗口标题'; // 修改为实际窗口标题
      setTimeout(() => {
        const hwnd = user32.FindWindowA(null, windowTitle);
        
        if (hwnd && !hwnd.isNull()) {
          // 设置窗口位置和大小
          user32.ShowWindow(hwnd, SW_SHOW);
          user32.SetWindowPos(
            hwnd,
            HWND_TOP,
            0, 0,  // x, y 位置（左上角）
            400, 400,  // 宽度, 高度
            SWP_NOZORDER
          );
        } else {
          console.error('Window not found');
        }
      }, 1000); // 延迟1秒等待窗口创建
    }
  );
}

// 使用示例
launchExeAndSetWindow('C:\\path\\to\\app.exe', 'C:\\path\\to\\file.txt');
```

### 2. 重要说明

1. **窗口标题/类名**：你需要知道目标 EXE 的窗口类名或标题，可以通过 Spy++ 等工具获取。
    
2. **延迟处理**：使用 `setTimeout` 是因为 EXE 启动需要时间，窗口不会立即出现。
    
3. **错误处理**：添加了基本的错误处理，实际使用时可能需要更完善的错误处理。
    
4. **跨平台**：此方案仅适用于 Windows，如果需要跨平台支持，需要针对不同平台编写不同代码。
    

### 3. 替代方案

如果不想使用 `node-ffi-napi`，可以考虑：

1. 编写一个 C++ 插件来处理窗口操作
2. 使用 AutoHotkey 脚本并通过 Electron 调用
3. 如果 EXE 支持命令行参数控制窗口大小，优先使用这种方式

### 4. 注意事项

- 某些应用程序可能会阻止外部修改其窗口属性
- 窗口标题可能会随应用程序状态变化
- 在多显示器系统中，坐标可能需要特殊处理

希望这个解决方案对你有帮助！如果有任何问题，请随时提问。





方法二：使用 Windows API（通过   ffi-napi  ）如果需要更精确地控制窗口位置，可以使用 Windows API。通过   ffi-napi   模块调用 Windows 的   MoveWindow   函数，直接设置窗口的位置和大小。示例代码安装依赖bashnpm install ffi-napi ref-napi
主进程代码 (main.js)javascriptconst { app, BrowserWindow, ipcMain } = require('electron');
const { exec } = require('child_process');
const ffi = require('ffi-napi');
const ref = require('ref-napi');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadFile('index.html');
});

ipcMain.on('run-external-exe', (event, exePath) => {
  // 启动第三方 .exe 程序
  const child = exec(exePath, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行错误: ${error}`);
      return;
    }
    console.log(`标准输出: ${stdout}`);
    if (stderr) {
      console.error(`标准错误输出: ${stderr}`);
    }
  });

  // 等待一段时间后移动窗口位置
  setTimeout(() => {
    moveWindowToTopLeft();
  }, 3000); // 延迟 3 秒，确保窗口已经打开
});

function moveWindowToTopLeft() {
  const user32 = new ffi.Library('user32', {
    'FindWindowA': ['pointer', ['string', 'string']],
    'MoveWindow': ['bool', ['pointer', 'int32', 'int32', 'int32', 'int32', 'bool']],
  });

  const hwnd = user32.FindWindowA(null, 'Window Title'); // 替换为目标窗口的标题
  if (hwnd) {
    user32.MoveWindow(hwnd, 0, 0, 800, 600, true); // 移动到左上角
    console.log('窗口已移动到左上角');
  } else {
    console.error('窗口未找到');
  }
}
渲染进程代码 (renderer.js)javascriptconst { ipcRenderer } = require('electron');

document.getElementById('run-exe-btn').addEventListener('click', () => {
  const exePath = 'C:\\path\\to\\your\\application.exe'; // 替换为实际路径
  ipcRenderer.send('run-external-exe', exePath);
});
HTML 文件 (index.html)html<!DOCTYPE html>
<html>
<head>
  <title>Electron App</title>
</head>
<body>
  <button id="run-exe-btn">运行第三方程序</button>
  <script src="renderer.js"></script>
</body>
</html>