# Java与Redis

> 共 2 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [java](#sec-1) — 有道云笔记 · `java/java.md`
2. [配置命令](#sec-2) — 有道云笔记 · `redis/配置命令.md`

---

<a id="sec-1"></a>
## java

> 来源：有道云笔记
> 原路径：`java/java.md`

### 常量的分类

◆ 字面值常量（掌握）

- A：字符串常量 — "HelloWorld"
- B：整数常量 — 12, -23
- C：小数常量 — 12.34
- D：字符常量 — 'a', '0'
- E：布尔常量 — true, false
- F：空常量（了解）— null

### 八种基本数据类型

| 类型 | 字节数 | 取值范围 |
|---|---|---|
| byte | 1 个字节 | -2^7 ~ 2^7-1 |
| short | 2 个字节 | -2^15 ~ 2^15-1 |
| int | 4 个字节 | -2^31 ~ 2^31-1 |
| long | 8 个字节 | -2^63 ~ 2^63-1 |
| float | 4 个字节 | 3.4*10^(-38) ~ 3.4*10^(+38) |
| double | 8 个字节 | 1.7*10^(-308) ~ 1.7*10^(+308) |
| char | 2 个字节 | 字符长度：0 ~ 2^16-1 |
| boolean | 1 个字节 | 取值范围：true, false |

### 数据类型的分类（第 2 页）

Java 数据类型：

- 基本类型
  - 整型：字节型 byte、短整型 short、整型 int、长整型 long
  - 浮点型：单精度浮点型 float、双精度浮点型 double
  - 字符型 char
  - 布尔型 boolean
- 引用类型
  - 类 class
  - 接口 interface
  - 数组 []

#### 数据类型要点

1. 数据类型的分类
   - 基本数据类型：byte、short、int、long、char、float、double、boolean
   - 引用数据类型（了解）：类、接口、数组
2. 变量的作用域：只在它（定义的位置）所属的代码块内有效
   - 代码块：一对大括号范围内的代码，称为一个代码块
3. 变量定义和使用中的注意事项
   - A：变量未赋值，不能使用
   - B：变量只在它所属的范围内有效
   - C：一行上可以定义多个变量，但是不建议

<a id="sec-2"></a>
## 配置命令

> 来源：有道云笔记
> 原路径：`redis/配置命令.md`

在redis根目录下找到redis.windows.conf配置文件，搜索requirepass，找到注释密码行，添加密码如下： port: 9835 password: nJRy#
redis-server.exe redis.windows.conf 需要关闭重新cmd启动才能生效
可视化
RedisInsight 是一个直观高效的 Redis GUI 管理工具，它可以对 Redis 的内存、连接数、命中率以及正常运行时间进行监控，并且可以在界面上使用 CLI 和连接的 Redis 进行交互（RedisInsight 内置对
Redis 模块支持）：

RedisInsight 简介
https://docs.redis.com/latest/ri/
