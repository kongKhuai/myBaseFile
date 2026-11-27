### ① 生产环境直接禁用所有 console（最推荐）
```
if (process.env.NODE_ENV === 'production') {
 console.log = () => {}
  console.warn = () => {}
   console.error = () => {} 
   console.clear = () => {}
 }

```

### ② 封装一个带开关的 log 工具
```
const debug = true // 开发true，生产false
 const logger = { 
 log: debug ? console.log : () => {},
  warn: debug ? console.warn : () => {}
  
 } 
 // 使用
  logger.log('数据', data)
```

### 3 ：全局劫持原生 console（最稳、最彻底）
```

// 生产环境禁用所有 console（包括所有 iframe）
 if (process.env.NODE_ENV === 'production') { 
 const noop = () => {}; 
 const methods = ['log', 'warn', 'error', 'clear', 'info', 'debug', 'table'];
  // 重写顶层  console
   methods.forEach(m => console[m] = noop); // 关键：劫持原生方法，让所有新 iframe 自动继承 try {
    const iframe = document.createElement('iframe'); 
    iframe.style.display = 'none';
     document.body.appendChild(iframe);
      const iframeConsole = iframe.contentWindow.console;
       methods.forEach(m => { 
       Object.defineProperty(iframeConsole, m, { value: noop });
        });
         document.body.removeChild(iframe);
          }
           catch (e) {} }
```


### 4：监听所有 iframe，自动禁用（最通用）

```

if (process.env.NODE_ENV === 'production') { const noop = () => {}; const methods = ['log', 'warn', 'error', 'clear']; // 禁用当前所有 iframe function disableIframeConsole() { const iframes = document.querySelectorAll('iframe'); iframes.forEach(iframe => { try { const c = iframe.contentWindow.console; methods.forEach(m => c[m] = noop); } catch (e) {} }); } // 禁用顶层 console methods.forEach(m => console[m] = noop); // 立即执行 disableIframeConsole(); // 监听未来新增的 iframe const observer = new MutationObserver(disableIframeConsole); observer.observe(document.body, { childList: true, subtree: true }); }
```