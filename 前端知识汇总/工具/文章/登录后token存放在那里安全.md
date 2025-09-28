
# 前端登录token到底应该存在哪？LocalStorage、SessionStorage还是Cookie？一篇说透！

ErpanOmer 高级前端进阶

 _2025年07月29日 09:11_ _浙江_

  

  

如果你做过任何需要登录的功能，那么你一定思考过这个问题：当后端甩给我一个`token`时，我一个前端，到底应该把它放在哪儿？

这个问题看似简单，无非就是 `LocalStorage`、`SessionStorage`、`Cookie` 三个选项。但如果我告诉你，**一个错误的选择，可能会直接导致你的网站出现严重的安全漏洞**，你是不是会惊出一身冷汗？

许多开发者（包括曾经的我）不假思索地把`token`塞进`LocalStorage`，因为它的API最简单好用。但这种方便的背后，隐藏着巨大的风险。

今天，这篇文章将带你彻底终结这个纠结。我们将深入对比这三位“候选人”的优劣，剖析它们各自面临的安全威胁（**XSS** 和 **CSRF**），并最终给出一个当前业界公认的最佳实践方案。

### 1. 三种存储方案对比

在做决定前，我们先来快速了解一下这三个Web存储方案的基本特性。

|特性|`LocalStorage`|`SessionStorage`|`Cookie`|
|---|---|---|---|
|**生命周期**|永久，除非手动清除|页面会话期间（标签页关闭即失效）|可设置过期时间|
|**存储大小**|约 5MB|约 5MB|约 4KB|
|**JS可访问性**|可访问|可访问|可访问（除非设置`HttpOnly`）|
|**与服务端通信**|不会自动发送|不会自动发送|**每次HTTP请求都会自动携带**|

一目了然，`LocalStorage`和`SessionStorage`是HTML5提供的新API，更大、更易用。而`Cookie`是“老前辈”，小而精，并且有个独一无二的特性：**会自动“粘”在HTTP请求头里发给后端。**

### 2. 两大安全攻击 XSS 与 CSRF

选择存储方案，本质上是在权衡安全和便利。而威胁`token`安全的主要是下面两种。

#### **XSS (跨站脚本攻击)**

- **手法**：攻击者通过某种方式（比如评论区）向你的网站注入了恶意的JavaScript脚本。当其他用户访问这个页面时，这段脚本就会执行。
    
- **目标**：如果你的`token`存在`LocalStorage`或`SessionStorage`里，那么这段恶意脚本就可以通过简单的`localStorage.getItem('token')`轻松地把它偷走，然后发送到攻击者的服务器。`token`失窃，你的账户就被冒充了。
    

**结论一：`LocalStorage` 和 `SessionStorage` 对 XSS 攻击是完全不设防的。只要你的网站存在XSS漏洞，存在里面的任何数据都能被轻易窃取。**

#### **CSRF (跨站请求伪造)**

- **手法**：你刚刚登录了你的银行网站`bank.com`，你的登录凭证（`Cookie`）被浏览器记住了。然后，你没有关闭银行页面，而是点开了一个恶意网站`hacker.com`。这个恶意网站的页面里可能有一个看不见的表单或`&lt;img&gt;`标签，它会自动向`bank.com/transfer`这个地址发起一个转账请求。
    
- **目标**：因为浏览器在发送请求到`bank.com`时，会自动带上`bank.com`的`Cookie`，所以银行服务器会认为这个请求是你本人发起的，于是转账就成功了。你神不知鬼不觉地被“伪造”了意愿。
    

**结论二：`Cookie` 如果不加以保护，会受到 CSRF 攻击的威胁。**

### 3. 现代Cookie的“优势”

看到这里你可能会想：`LocalStorage`防不住XSS，`Cookie`防不住CSRF，这可怎么办？

别急，我们的`Cookie`经过多年的进化，已经有了强大的防止手段。

#### **`HttpOnly` - 封印JS的访问**

如果在设置`Cookie`时，加上`HttpOnly`属性，那么通过JavaScript（如 `document.cookie`）将**无法读取**到这个`Cookie`。

`Set-Cookie: token=...; HttpOnly   `

这意味着，即使网站存在XSS漏洞，攻击者的恶意脚本也偷不走这个`Cookie`，从根本上阻断了XSS利用`token`的路径。

#### **`SameSite` - 防止携带**

`SameSite`属性用来告诉浏览器，在跨站请求时，是否应该携带这个`Cookie`。它有三个值：

- `Strict`：最严格。只有当请求的发起方和目标网站完全一致时，才会携带`Cookie`，能完全防御CSRF。
    
- `Lax`：比较宽松（现在是大多数浏览器的默认值）。允许在“顶级导航”（如`&lt;a&gt;`链接、GET表单）的跨站请求中携带`Cookie`，但在`&lt;img&gt;`、`&lt;iframe&gt;`、POST表单等“嵌入式”请求中会拦截。这已经能防御大部分CSRF攻击了。
    
- `None`：最松。任何情况下都携带`Cookie`。但必须同时指定`Secure`属性（即`Cookie`只能通过HTTPS发送）。
    

对于登录`token`，我们通常希望它尽可能安全，所以`SameSite=Strict`是最佳选择。

#### **`Secure` - 保证传输安全**

这个属性很简单，只要设置了它，`Cookie`就只会在HTTPS的加密连接中被发送，可以防止在传输过程中被窃听。

### 4. 终极答案

综合以上所有分析，我们终于可以给出当前公认的最佳、最安全的方案了。

**这个方案的核心是“组合拳”：将不同生命周期的`token`存放在不同的地方，各司其职。**

我们通常有两种`token`：

- **`AccessToken`**：生命周期很短（如15分钟），用于访问受保护的API资源。
    
- **`RefreshToken`**：生命周期很长（如7天），专门用来在`AccessToken`过期后，换取一个新的`AccessToken`。
    

**最佳存储策略如下：**

1. **`RefreshToken`**: 存放在一个 **`HttpOnly=true`**, **`Secure=true`**, **`SameSite=Strict`** 的`Cookie`中。
    
    ```
    *   **为什么？** `RefreshToken`非常关键且长期有效，所以必须用最安全的方式存储。`HttpOnly`让它免受XSS攻击，`SameSite=Strict`让它免受CSRF攻击。前端 JS 完全接触不到它，只在需要刷新`token`时，由浏览器自动带着它去请求`/refresh_token`这个特定接口。
    ```
    
2. **`AccessToken`**:  存放在 **JavaScript的内存中**（例如，一个全局变量、React Context或Vuex/Pinia等状态管理库里）。
    
    ```
    *   **为什么？** `AccessToken`需要被JS读取，并放在HTTP请求的`Authorization`头里（`Bearer xxx`）发送给后端。将它放在内存中，可以避免XSS直接从`LocalStorage`里扫荡。当用户关闭标签页或刷新页面时，内存中的`AccessToken`会丢失。
    ```
    

- **丢失了怎么办？** 这就是`RefreshToken`发挥作用的时候了。当应用启动或`AccessToken`失效时，我们就向后端发起一个请求（比如访问`/refresh_token`接口），浏览器会自动带上我们安全的`RefreshToken``Cookie`，后端验证通过后，就会返回一个新的`AccessToken`，我们再把它存入内存。
    

这个方案完美地结合了安全性和可用性，几乎无懈可击。

### 一张表格说透

|存储方式|优点|缺点（安全风险）|推荐用法|
|---|---|---|---|
|`LocalStorage`|API简单，容量大，持久|**XSS**|**不推荐**存储敏感信息（如Token）|
|`SessionStorage`|API简单，标签页关闭即删|**XSS**|同上|
|`Cookie`|可自动发送，可配置安全属性|**CSRF** (若无`SameSite`)|不推荐直接存`AccessToken`|
|**内存 + `HttpOnly` Cookie**|**安全** (防XSS+CSRF), **体验好**|方案略复杂|**最佳实践** (`AccessToken`存内存，`RefreshToken`存`HttpOnly Cookie`)|

希望这篇文章能彻底帮你理清思路。当你在实践中或者面试被问到时，就可以把这套“方案”发挥出来。

  

作者：ErpanOmer

https://juejin.cn/post/7521936882353471526