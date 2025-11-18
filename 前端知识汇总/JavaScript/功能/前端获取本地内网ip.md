
网页获取内网 IP（即局域网 IP，如 `192.168.x.x`、`10.x.x.x`、`172.16.x.x-172.31.x.x`）的核心限制：**浏览器安全策略禁止 JS 直接读取本地网卡的内网 IP**（避免泄露设备隐私），需通过「间接方案」实现，以下是 3 种常用且可靠的方法，按推荐优先级排序： ### 方案1：通过 WebRTC 本地 IP 探测（最常用，无需后端，纯前端） WebRTC（实时通信协议）为了建立 P2P 连接，会暴露设备的内网 IP 地址。虽然浏览器不主动提供 API，但可通过创建临时的 RTCPeerConnection 并监听候选地址，提取内网 IP。 #### 纯前端实现代码（直接可用） 
```javascript 
// 获取内网 IP（WebRTC 方案） 
function getInternalIP() { return new Promise((resolve, reject) => { // 兼容不同浏览器的 RTCPeerConnection const RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; if (!RTCPeerConnection) { reject(new Error("浏览器不支持 WebRTC，无法获取内网 IP")); return; } // 创建临时连接（不实际建立通信） const pc = new RTCPeerConnection({ iceServers: [] }); const ipRegex = /([0-9]{1,3}\.){3}[0-9]{1,3}/g; // 匹配 IP 地址的正则 const internalIPs = new Set(); // 去重存储内网 IP // 监听 ICE 候选地址（包含内网 IP） pc.onicecandidate = (event) => { if (!event.candidate) return; // 从候选地址字符串中提取所有 IP const ips = event.candidate.candidate.match(ipRegex); if (ips) { ips.forEach(ip => { // 过滤内网 IP 段（排除公网 IP） if ( ip.startsWith("192.168.") || // 192.168.x.x 网段 ip.startsWith("10.") || // 10.x.x.x 网段 (ip.startsWith("172.") && parseInt(ip.split(".")[1]) >= 16 && parseInt(ip.split(".")[1]) <= 31) // 172.16-31.x.x 网段 ) { internalIPs.add(ip); } }); } }; // 创建临时数据通道（触发 ICE 候选地址生成） pc.createDataChannel(""); pc.createOffer().then(offer => pc.setLocalDescription(offer)); // 延迟获取结果（确保 ICE 候选地址已生成） setTimeout(() => { pc.close(); // 关闭临时连接，避免资源占用 const ipList = Array.from(internalIPs); if (ipList.length > 0) { resolve(ipList[0]); // 返回第一个内网 IP（通常是主要网卡的 IP） } else { reject(new Error("未探测到内网 IP")); } }, 1000); }); } // 使用示例 getInternalIP() .then(ip => console.log("内网 IP：", ip)) .catch(err => console.error("获取失败：", err.message)); 
```  
#### 方案1 说明 - **优势**：纯前端实现，无需后端，支持主流浏览器（Chrome、Firefox、Edge、Safari 11+）； - **限制**： - 部分浏览器（如 Safari）可能需要用户授权（首次访问时弹出提示）； - 若设备禁用 WebRTC（如部分企业网络策略），则失效； - **原理**：WebRTC 建立 P2P 连接时，会通过 ICE 协议收集本地网卡的内网 IP，并在 `icecandidate` 事件中暴露，通过正则提取并过滤内网网段即可。 ### 方案2：通过后端接口获取（最可靠，无浏览器限制） 核心思路：前端请求自己的后端接口，后端通过服务器语言（Node.js、Java、Python 等）获取客户端的内网 IP，再返回给前端。 #### 步骤1：后端实现（以 Node.js + Express 为例）
```javascript 
// 后端代码（Node.js） const express = require("express"); const app = express(); app.get("/get-internal-ip", (req, res) => { // 关键：req.connection.remoteAddress 或 req.ip 可获取客户端内网 IP // 注意：若后端部署在局域网内（如本地服务器），则直接返回；若部署在公网，需配置反向代理（如 Nginx）传递真实内网 IP const internalIP = req.connection.remoteAddress.replace("::ffff:", ""); // 兼容 IPv6 转 IPv4 res.json({ internalIP }); }); app.listen(3000, () => { console.log("后端服务启动：http://localhost:3000"); }); ``` #### 步骤2：前端请求代码 ```javascript // 前端代码 async function getInternalIPByBackend() { try { const response = await fetch("http://localhost:3000/get-internal-ip"); // 后端接口地址 const data = await response.json(); console.log("内网 IP：", data.internalIP); return data.internalIP; } catch (err) { console.error("获取失败：", err); } } // 调用 getInternalIPByBackend(); 
```
 #### 方案2 说明 - **优势**：100% 可靠，无浏览器兼容性问题，不受 WebRTC 禁用影响； - **限制**：需要后端支持，且后端必须部署在「客户端所在的局域网内」（若后端在公网，`remoteAddress` 会返回公网 IP，而非内网 IP）； - **适用场景**：企业内网系统、本地部署的 Web 应用（如 Electron 桌面应用内嵌网页）。 ### 方案3：通过 DNS 解析（备选，兼容性一般） 利用部分公共 DNS 服务（如 `whoami.akamai.net`）返回客户端的内网 IP，但可靠性较低（部分 DNS 可能返回公网 IP，或被网络策略拦截）。 #### 前端实现代码 
 
 ```javascript 
 function getInternalIPByDNS() { return new Promise((resolve, reject) => { const img = new Image(); // 利用 DNS 解析返回 IP（通过图片加载的方式传递结果） img.src = `https://whoami.akamai.net/?callback=window.resolveIP`; window.resolveIP = (data) => { // 过滤内网 IP（同方案1的网段判断） const ipRegex = /([0-9]{1,3}\.){3}[0-9]{1,3}/; const ip = data.match(ipRegex)[0]; if (ip.startsWith("192.168.") || ip.startsWith("10.") || (ip.startsWith("172.") && parseInt(ip.split(".")[1]) >=16 && parseInt(ip.split(".")[1]) <=31)) { resolve(ip); } else { reject(new Error("DNS 返回的是公网 IP，无法获取内网 IP")); } delete window.resolveIP; // 清理全局函数 }; img.onerror = () => reject(new Error("DNS 解析失败")); }); } // 使用 getInternalIPByDNS() .then(ip => console.log("内网 IP：", ip)) .catch(err => console.error("获取失败：", err.message)); 
 ``` 
 #### 方案3 说明 - **优势**：无需后端，纯前端； - **限制**：可靠性低（依赖第三方 DNS 服务可用性）、部分网络会拦截此类请求、可能返回公网 IP，不推荐作为首选。
 
  ### 关键注意事项
   1. **浏览器安全限制**：前端无法直接读取本地网卡信息，所有方案都是「间接探测」，无完美方案；
   2. **内网 IP 网段**：标准内网 IP 网段为 `192.168.0.0/16`、`10.0.0.0/8`、`172.16.0.0/12`，正则过滤时需覆盖这些网段；
   3. **IPv6 兼容**：若设备使用 IPv6 内网地址（如 `fe80::xxx`），需调整正则和判断逻辑（IPv6 格式与 IPv4 不同）；
   4. ** Electron / 桌面应用**：若网页是内嵌在 Electron、NW.js 等桌面应用中，可直接调用原生 API 获取内网 IP（如 Electron 的 `os.networkInterfaces()`），无需上述方案
   
   ### 推荐优先级 
   1. 纯前端场景 → 方案1（WebRTC）；
   2. 有后端且部署在局域网 → 方案2（后端接口，最可靠）；
   3. 备选场景 → 方案3（DNS，仅作补充）。 
   4. 通过以上方案，可根据实际场景选择合适的方式获取内网 IP，满足绝大多数 Web 应用需求。















```