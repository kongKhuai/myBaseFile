### 一、 Word 文档转换成 HTML 文档
在日常工作中，有些时候我们希望在富文本编辑器中导入已有的 Word 文档进行二次加工，要满足这个需求，我们就需要先把 Word 文档转换成 HTML 文档。要实现这个功能，有 **服务端转换和前端转换** 两种方案：

- 服务端转换：对于 Java 开发者来说，可以直接基于 POI 项目，POI 是 Apache 的一个开源项目，它的初衷是处理基于 Office Open XML 标准（OOXML）和 Microsoft OLE 2 复合文档格式（OLE2）的各种文件格式的文档，而且支持读写操作。
- 前端转换：对于前端开发者来说，要想在前端解析 Word 文档，我们首先需要对 Word 文档进行解压，然后再进一步解析解压后的 XML 文档。看起来整个功能实现起来比较繁琐，但值得庆幸的是 [Mammoth.js](https://link.segmentfault.com/?enc=PlEX78srl2qWmcnQMvWsrQ%3D%3D.wUozQs%2FLLMHuTHCnz%2Fnhns66m25Rp%2BvpGVWHndDrTj%2Fc7gCU6rOgjgBsu%2BryGGHn) 这个库已经为我们实现上述功能。

在介绍如何利用 [Mammoth.js](https://link.segmentfault.com/?enc=e67jF0Z%2BSyKPzmMudk2gDw%3D%3D.QjkSMrkHjQbPpl26KrxNcuP3RtyiYFwpOr3C15cp0BrD4jh8zSVXHOfs%2FwWwiUMD) 把之前创建的 Word 文档转换成 HTML 文档前，我们来提前体验一下最终的转换效果。
#### Mammoth.js 简介

[Mammoth.js](https://link.segmentfault.com/?enc=xBDWF9zojqKhmdlVTwzW2A%3D%3D.t1CKY6HwrqOKK1hcpJ%2FDb7EVxr%2BckTek%2BQKWtUN%2BIHmnZj54ymtOKTR%2FJsCKewlS) 旨在转换 .docx 文档（例如由 Microsoft Word 创建的文档），并将其转换为 HTML。 **Mammoth 的目标是通过使用文档中的语义信息并忽略其他细节来生成简单干净的 HTML。** 比如，Mammoth 会将应用标题 1 样式的任何段落转换为 h1 元素，而不是尝试完全复制标题的样式（字体，文本大小，颜色等）。

由于 .docx 使用的结构与 HTML 的结构之间存在很大的不匹配，这意味着对于较复杂的文档而言，这种转换不太可能是完美的。但如果你仅使用样式在语义上标记文档，则 Mammoth 能实现较好的转换效果。

当前 Mammoth 支持以下主要特性：

- Headings
- Lists，Table
- Images
- Bold, italics, underlines, strikethrough, superscript and subscript
- Links，Line breaks
- Footnotes and endnotes

它还支持自定义映射规则。例如，你可以通过提供适当的样式映射将 WarningHeading 转换为 h1.warning。另外文本框的内容被视为单独的段落，出现在包含文本框的段落之后。

Mammoth.js 这个库为我们提供了很多方法，这里我们来介绍三个比较常用的 API：

- `mammoth.convertToHtml(input, options)`：把源文档转换为 HTML 文档
- `mammoth.convertToMarkdown(input, options)`：把源文档转换为 Markdown 文档。这个方法与 `convertToHtml` 方法类似，区别就是返回的 result 对象的 value 属性是 Markdown 而不是 HTML。
- `mammoth.extractRawText(input)`：提取文档的原始文本。这将忽略文档中的所有格式。每个段落后跟两个换行符。

介绍完 Mammoth.js 相关的特性和 API，接下来我们开始进入实战环节。

#### 2.2 Mammoth.js 实战

Mammoth.js 这个库同时支持 Node.js 和浏览器两个平台，在浏览器端 `mammoth.convertToHtml` 方法的 input 参数的格式是 `{arrayBuffer: arrayBuffer}`，其中 arrayBuffer 就是 .docx 文件的内容。在前端我们可以通过 [FileReader](https://link.segmentfault.com/?enc=RG10GCWspsUAaYVeyYibHg%3D%3D.%2FpxbctR3JpDu8hPMyIkI%2Bo0Hpuv0pxHuWSvbX0ns2qZXSwKxzvXYEip99uPMBmV7rou9TagtEZ77FTqOiwkYoQ%3D%3D) API 来读取文件的内容，此外该接口也提供了 readAsArrayBuffer 方法，用于读取指定的 Blob 中的内容，一旦读取完成，result 属性中保存的将是被读取文件的 `ArrayBuffer` 数据对象。下面我们定义一个 readFileInputEventAsArrayBuffer 方法：

export function readFileInputEventAsArrayBuffer(event, callback) {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = function(loadEvent: Event) {
    const arrayBuffer = loadEvent.target["result"];
    callback(arrayBuffer);
  };

  reader.readAsArrayBuffer(file);
}

该方法用于实现把输入的 File 对象转换为 ArrayBuffer 对象。在获取 Word 文档对应的 ArrayBuffer 对象之后，就可以调用 convertToHtml 方法，把 Word 文档内容转换为 HTML 文档。

mammoth.convertToHtml({ arrayBuffer })

此时如果你的文档中不包括特殊的图片类型，比如 `wmf` 或 `emf` 类型，而是常见的 `jpg` 或 `png` 等类型的话，那么你可以看到 Word 文档中的图片。难道这样就搞定了，那是不是太简单了，其实这只是个开始。当你通过浏览器的开发者工具审查 Word 解析后的 HTML 文档后，会发现图片都以 Base64 的格式进行嵌入。如果图片不多且单张图片也不会太大的话，那这种方案是可以考虑的。

针对多图或大图的情况，一种比较好的方案是把图片提交到文件资源服务器上。在 Mammoth.js 中要实现上述的功能，可以使用 **convertImage** 配置选项来自定义图片处理器。具体的使用示例如下：

let options = {
    convertImage: mammoth.images.imgElement(function(image) {
      return image.read("base64").then(function(imageBuffer) {
        return {
          src: "data:" + image.contentType + ";base64," + imageBuffer
        };
      });
    })
};

以上示例实现的功能就是把 Word 中的图片进行 Base64 编码，然后转成 Data URL 的形式，以实现图片的显示。很明显这不符合我们的要求，所以我们需要做以下调整：

const mammothOptions = {
  convertImage: mammoth.images.imgElement(function(image) {
    return image.read("base64").then(async (imageBuffer) => {
      const result = await uploadBase64Image(imageBuffer, image.contentType);
      return {
        src: result.data.path // 获取图片线上的URL地址
      };
    });
  })
};

顾名思义 uploadBase64Image 方法的作用就是上传 Base64 编码后的图片：

async function uploadBase64Image(base64Image, mime) {
  const formData = new FormData();
  formData.append("file", base64ToBlob(base64Image, mime));
  
  return await axios({
    method: "post",
    url: "http://localhost:3000/uploadfile", // 本地图片上传的API地址
    data: formData,
    config: { headers: { "Content-Type": "multipart/form-data" } }
  });
}

为了减少图片文件的大小，我们需要把 Base64 格式的图片先转成 Blob 对象，然后在通过创建 FormData 对象进行提交。base64ToBlob 方法的定义如下：

function base64ToBlob(base64, mimeType) {
  let bytes = window.atob(base64);
  let ab = new ArrayBuffer(bytes.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeType });
}

这时把 Word 文档转换为 HTML 并自动把 Word 文档中的图片上传至文件资源服务器的基本功能已经实现了。对于 Mammoth.js 内部是如何解析 Word 中的 XML 文件，我们就不做介绍了，反之我们来简单介绍一下 Mammoth.js 内部依赖的 JSZip 这个库。
####  JSZip 简介

[JSZip](https://link.segmentfault.com/?enc=xBuNqJSqEbJUTZzchTm7mA%3D%3D.WGESFslUFRrp5726AekG3RoKMc4kNRybYOKq%2Bz7BPLA%3D) 是一个用于创建、读取和编辑 **.zip** 文件的 JavaScript 库，含有可爱而简单的 API。该库的兼容性如下所示
使用 JSZip 时，你可以通过以下几种方式进行安装：

- **npm**： `npm install jszip`
- **bower**：`bower install Stuk/jszip`
- **component** ：`component install Stuk/jszip`
- **手动**：先下载 [JSZip](https://link.segmentfault.com/?enc=QZsDmB181A5fNgG2HzSGDA%3D%3D.J9gtJf%2BbQsGlNAPjf9ccs5D7EMDCghkoWXXYUz37pI9xEg7L2r0%2BsbKNHli3f9Kt) 安装包，然后引入 `dist/jszip.js` 或 `dist/jszip.min.js` 文件

##### 2.3.2 JSZip 使用示例

let zip = new JSZip();
zip.file("Hello.txt", "Hello Semlinker\n");

let img = zip.folder("images");
img.file("smile.gif", imgData, {base64: true});
zip.generateAsync({type: "blob"})
.then(function(content) {
    // see FileSaver.js
    saveAs(content, "example.zip");
});

该示例来自 [JSZip 官网](https://link.segmentfault.com/?enc=uCVaicjuKDhseoUzzxGXrg%3D%3D.8BDQWgDh%2BoQOwJ%2F%2BQH1%2FnJFkINdfLJrJN6ON3M959uw%3D)，成功运行之后，会自动下载并保存 **example.zip** 文件。

### 二、Word 文档转换成 Markdown 文档

**Markdown 是一种轻量级标记语言** ，创始人为约翰·格鲁伯（英语：John Gruber）。它允许人们使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者 HTML）文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。

由于 Markdown 的轻量化、易读易写特性，并且对于图片，图表、数学式都有支持，目前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。

了解完 Markdown 是什么之后，我们来分析一下如何把 Word 文档转换成 Markdown 文档。对于这个功能，我们也有两种处理方式：

- 第一种：使用 [Mammoth.js](https://link.segmentfault.com/?enc=L%2FYJquiLj0LenfctKCf8Kw%3D%3D.FY%2BLz754w4xYQ1stsmq5wTtPosoiUTTZMkM6eaxYejezjBXETp6jCXofnFbeBWRH) 这个库提供的 `mammoth.convertToMarkdown(input, options)` 方法；
- 第二种：基于 `mammoth.convertToHtml(input, options)` 生成的 HTML 文档，在利用 HTML to Markdown 的转换工具，来间接实现上述功能。

下面我们来介绍第二种方案，这里我们使用 Github 上一个开源的转换器 —— [turndown](https://link.segmentfault.com/?enc=EivhrBzEgDiqf2mCQnUoNQ%3D%3D.skbbYnq%2FlNlqGMIMlQQNXtu1fGvaOY8qV0NdAvSsmgmD3J%2BM1K2nSe%2FRmAY5A95w)，它是使用 JavaScript 开发的 HTML to Markdown 转换器，使用起来很简单。

首先你可以通过以下两种方式来安装它：

- npm：`npm install turndown`
- script：`<script src="https://unpkg.com/turndown/dist/turndown.js"></script>`

安装完之后，你就可以通过调用 `TurndownService` 构造函数，来创建 turndownService 实例，然后调用该实例的 `turndown()` 方法执行转换操作：

let markdown = turndownService.turndown(
  document.getElementById('content')
)

对于前面使用的 **abao.docx** 文档，最终转换生成的 Markdown 文档如下：

全栈修仙之路，聚焦全栈，专注分享 TypeScript、Web API、Node.js、Deno 等全栈干货。

![](https://cdn.xxx.com/rich_159444942843202)

需要注意的是，TurndownService 构造函数支持很多配置项，这里阿宝哥就不详细介绍了。感兴趣的小伙伴，可以自行阅读 [turndown](https://link.segmentfault.com/?enc=%2B8HBvVCIcovTbxP92vraig%3D%3D.utyRkId6n%2FquKiiDg2V6xmVF2XDJZVJDpshBOh%2BG3NKtwPEH0trPpsV0J7e%2Fokbi) 官方文档或访问 [turndown 在线示例](https://link.segmentfault.com/?enc=8cDh99Dtk68iWjj5gMHRHA%3D%3D.r3QXzvVBHqkmd9sWqzOymvEH4QfyYQmmow%2FIpuzWz%2B3j7vU6pI959rmZc2HOh8Mq) 实际体验一下。

既然已经讲到 Markdown，阿宝哥再给小伙伴们介绍一个 Github 上不错的开源库 [markmap](https://link.segmentfault.com/?enc=%2BQz6BSkHSatraVuH12EkoA%3D%3D.oCD7n3BYPDzTKvWT4pKCNjXm5BMLSrqczjjiR4v4TCvXo7ydnys7p5XZFDrr0dfp)，该库使用思维导图的方式来实现 Markdown 文档的可视化，整体效果还蛮不错的：

![](https://segmentfault.com/img/remote/1460000023212732)

（图片来源：[https://markmap.js.org/repl/](https://link.segmentfault.com/?enc=VOfoK1AoSB5FgjDf1n2kiQ%3D%3D.O8tbOJVTLLiw6KIW43DpYCEnUPmGAvE%2BfoJ0Th0h1lU%3D)）

最后，我们再来看一下在前端如何动态生成 Word 文档。
### 三、前端动态生成 Word 文档
在前端如果要动态生成 Word 文档，我们可以直接利用一些成熟的第三方开源库，比如：[docx](https://link.segmentfault.com/?enc=%2FOilbBRSTWV4fA4R66B%2F4A%3D%3D.%2F4GH7C3%2B8%2BL%2FdDokdmT7zotxUMZ1bhwagDioE1XTai0oUSdLG6kQ3KZnHJFg%2BpXV) 或 [html-docx-js](https://link.segmentfault.com/?enc=v0xZ1263rvHcf1gi1mVPag%3D%3D.dxi5msVVPfEPrXUuH1Dyuj4pD8Xo4poB2NYmeXchVcT4N3qBdNgle5vsPsmUEzCN)。

下面我们将以 [docx](https://link.segmentfault.com/?enc=hVLp7W2Nzz1ZWYCXz0gNtw%3D%3D.MrsCeR%2F2Mi7Btb9gaqaIVv1c3Agd9J2ARcGjLueDDLX1RQNKZQZJRGQTzfr5GcG8) 为例，来介绍如何在前端如何生成 **.docx** 格式的 Word 文档。[Docx](https://link.segmentfault.com/?enc=Eu4nF0%2FzMD4KRRLhgF7jDw%3D%3D.G42fICfk8CZ8qVdO7mYhggOmoxVRyON%2F5w8pLWy6NXWh%2BB2vHLe5ZGdocYaSYCqb) 这个库提供了优雅的声明式 API，让我们可以使用 JS/TS 轻松生成 .docx 文件。此外，它还同时支持 Node.js 和浏览器。

[Docx](https://link.segmentfault.com/?enc=4qVVncF3YHhRKX%2BkXOJ%2FjQ%3D%3D.usi8%2BlohlBj3%2FVqrmVRCmUOwOREB3jPf5cTbSZACN%2BDKZyLh1ZgNcmomSkYDpNr3) 这个库为开发者提供了许多类，用于创建 Word 中的对应元素，这里我们简单介绍几个常见的类：

- [Document](https://link.segmentfault.com/?enc=ARPykp4NbwgtLIfOD3Sleg%3D%3D.c%2BLEe%2BpvyEVk%2FjeSqIkDzBTruwORap8JcK0xYf8o9ISLsodTP2ry8QlbDTvCWHtaN9zBSMPl8laWOYwJDr%2FWEg%3D%3D)：用于创建新的 Word 文档；
- [Paragraph](https://link.segmentfault.com/?enc=PzXg%2F84n0upNLB1Sd2%2BHKA%3D%3D.QWEpwoNt3w912Fg693aLsCySWXbH4pP7VgTuKAxn69e%2B9zZ%2BYbnpsQfGMxoBi8Hxnmi%2FlPvZ%2BYFZz7AXVjPxzg%3D%3D)：用于创建新的段落；
- [TextRun](https://link.segmentfault.com/?enc=efZtbpp%2BHRFGmQxBIXpzwQ%3D%3D.Yg10l9rCCvNh2xaxrUK1FpUdot4AkgySQAXN%2FLiDG%2FraP4HXCHacaHUy%2BP7Fy5Vj)：用于创建文本，支持设置加粗、斜体和下划线样式；
- [Tables](https://link.segmentfault.com/?enc=MivwBjufYKcYR3zhM4Dnhg%3D%3D.YyGCaPg3qZh7Qox5G9vmlSZ9CJdlTQtkhJdydxqefkbd6Ii8Bwk1vWLib6CoGHBd)：用于创建表格，支持设置表格每一行和每个表格单元的内容。

接下来阿宝哥将使用 [Docx](https://link.segmentfault.com/?enc=4b0OBSTYBZvqJj%2FZdemMaQ%3D%3D.f8HZ1fkPoVemMTMvGxpNTdPOFEm5QSsWq8mXbwPQcsntkPyJYWT8lJMbwxpXyBcd) 这个库，来动态生成前面介绍过的 **abao.docx** 文档，具体代码如下所示：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
  </head>
  <body>
    <h1>阿宝哥 - 动态生成 Word 文档示例</h1>

    <button type="button" onclick="generate()">
      点击生成 Docx 文档
    </button>
    <script src="https://unpkg.com/docx@5.0.2/build/index.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.js"></script>
    <script>
      async function generate() {
        const doc = new docx.Document();

        const imageBuffer = await fetch(
          "https://avatars3.githubusercontent.com/u/4220799"
        ).then((response) => response.arrayBuffer());

        const image = docx.Media.addImage(doc, imageBuffer, 230, 230);

        doc.addSection({
          properties: {},
          children: [
            new docx.Paragraph({
              children: [
                new docx.TextRun({
                  text: "全栈修仙之路，",
                  bold: true,
                }),
                new docx.TextRun({
                  text:
                    "聚焦全栈，专注分享 TypeScript、Web API、Node.js、Deno 等全栈干货。",
                }),
              ],
            }),
            new docx.Paragraph(image),
          ],
        });

        docx.Packer.toBlob(doc).then((blob) => {
          console.log(blob);
          saveAs(blob, "abao.docx");
          console.log("文档生成成功");
        });
      }
    </script>
  </body>
</html>
```

在以上示例中，当用户点击 **点击生成 Docx 文档** 按钮之后，会调用 `generate()` 回调函数。在该回调函数内，首先会创建新的 Document 对象，然后使用 fetch API 从 Github 上下载阿宝哥的头像，当成功获取图片的数据之后，会继续调用 `docx.Media.addImage()` 方法添加图片。

接着我们会调用 `doc.addSection()` 方法来添加 Section 块，该块将作为段落的容器。在示例中，我们创建的 Section 块包含两个段落，一个用于存放文本信息，而另一个用于存放图片信息。最后我们会把 Document 对象转换成 Blob 对象，然后通过 `saveAs()` 方法下载到本地。

### 四、参考资源

- [MDN - FileReader](https://link.segmentfault.com/?enc=m41E9Z7Mgc9zBqRuAgzmRQ%3D%3D.SpkqPoujH0xFyyiOeCEpN2dumbIf2GssbdKqeUuT6v0D9DuUZhU%2F2bi0kXg9xW73SwG9r0wYdy%2FkYN4CVnUc9g%3D%3D)
- [百度百科 - Microsoft Office Word](https://link.segmentfault.com/?enc=EaQu5rcyz5sGjbQkgg4inQ%3D%3D.N%2BNmDdsICbV%2F6ovwSeERbK3lYE14MAsS7kMPEL6SIHw%2Fk7t83J0UEtge6uEM9r1%2BdRz9Jwi13DSYEvWShAkiBA%3D%3D)
- [office-file-format-reference](https://link.segmentfault.com/?enc=mlZaqq1FYWj08OP%2F%2Bu%2Fw2Q%3D%3D.W0%2BBI2o8jfsj4MsmDsLlcFhHBKf1WzD1ZBQ2K5ce1L1FJxlktKjoSPTZHKUwMrqGRHk69cCzKMZcQYprz5vhjpbVTkTsxXVJC6RffQ6IOpxeRkh8%2FlixGx9%2BdXBI9Aaq)
- [Github - mammoth.js](https://link.segmentfault.com/?enc=c%2BCpkIMituoliSpvEU2Raw%3D%3D.m3O8BVWrtiXuS5TS8RJqontuytEMj%2Bs0RZZWMak9iriwtw7vBgsu1LzbtJwsGP8a)