# HTML

> 共 3 篇 · 跨来源按主题合并 · 正文保持原文

## 篇目

1. [字体](#sec-1) — 有道云笔记 · `html/字体.md`
2. [示例1](#sec-2) — 有道云笔记 · `html/示例1.md`
3. [如果是html写的代码](#sec-3) — 有道云笔记 · `来自手机/如果是html写的代码.md`

---

<a id="sec-1"></a>
## 字体

> 来源：有道云笔记
> 原路径：`html/字体.md`

https://icones.js.org/collection/all

vertical-align还能设置数值
middle 图片对齐

<a id="sec-2"></a>
## 示例1

> 来源：有道云笔记
> 原路径：`html/示例1.md`

```
<section style="box-sizing: border-box; visibility: visible;">1
        <section style="margin: 10px auto; text-align: center; box-sizing: border-box;
visibility: visible;">
            <section3
                style="padding-top: 7px; padding-bottom: 15px; background-color:
rgb(242, 246, 255); border-radius: 20px; box-sizing: border-box; visibility: visible;">
                <section5
                    style="margin-bottom: 7px; display: flex; justify-content: center;
box-sizing: border-box; visibility: visible;">
                    <section7
                        style="box-sizing: border-box; width: 30px; height: 7px;
background-color: rgb(244, 212, 219); overflow: hidden; visibility: visible;">
                        <br style="visibility: visible;">9
                    </section>10
                </section>11
                <section style="display: inline-block; box-sizing: border-box;
visibility: visible;">
                    <section13
                        style="padding: 10px 28px; border-radius: 20px; box-shadow:
```
rgba(169, 187, 223, 0.45) 6px 6px 8px inset, rgb(255, 255, 255) -2.5px -2.5px 5px
```
inset; box-sizing: border-box; visibility: visible;">
                        <p15
                            style="font-size: 16px; letter-spacing: 1.5px; color:
rgb(111, 133, 172); visibility: visible;">
                            <strong style="visibility: visible;">栖霞区关于 4 名外省来宁人
员</strong>
                        </p>18
                        <p19
                            style="font-size: 16px; letter-spacing: 1.5px; color:
rgb(111, 133, 172); visibility: visible;">
                            <strong style="visibility: visible;">核酸检测异常情况的通报
</strong>
                        </p>22
                    </section>23
                </section>24
            </section>25

<img src=" " />

        </section>26
    </section>27
```
https://files.catbox.moe/ndt7ys.gif

<a id="sec-3"></a>
## 如果是html写的代码

> 来源：有道云笔记
> 原路径：`来自手机/如果是html写的代码.md`

如果是html写的代码 就要引入 <script
src="https://cdn.bootcss.com/vConsole/3.2.0/vconsole.min.js"></script> 然后在 <script> //初
```
始化一下就可以了， let vConsole = new VConsole(); //你打印的数据 比如 console.log('test'); //就
可像小程序一样的看了和调试了。 </script>

//如果是在vue中要先安装包
```
npm install vconsole
```
//然后引入
import Vconsole from 'vconsole';
//然后在created 或者mounted 生命周期中初始化一下
let vConsole = new VConsole();
//在手机上 就可以像上面一样的效果了
```
