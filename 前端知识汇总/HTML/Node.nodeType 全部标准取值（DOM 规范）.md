| nodeType 值 | 常量名                         | 节点类型     | 说明                                  |
| ---------- | --------------------------- | -------- | ----------------------------------- |
| 1          | ELEMENT_NODE                | 元素节点     | 标签，如 `<svg>`、`<div>`、`<path>`       |
| 2          | ATTRIBUTE_NODE              | 属性节点     | 元素的属性（老式 DOM，现在很少用）                 |
| 3          | TEXT_NODE                   | 文本节点     | 标签内文字、空白换行                          |
| 4          | CDATA_SECTION_NODE          | CDATA 节点 | SVG/XML 中 `<![CDATA[xxx]]>`         |
| 5          | ENTITY_REFERENCE_NODE       | 实体引用     | XML 实体，前端几乎不用                       |
| 6          | ENTITY_NODE                 | 实体定义     | DTD 相关，前端忽略                         |
| 7          | PROCESSING_INSTRUCTION_NODE | 处理指令     | `<?xml version="1.0"?>`             |
| 8          | COMMENT_NODE                | 注释节点     | `<!-- 注释 -->`                       |
| 9          | DOCUMENT_NODE               | 文档根节点    | `document` / SVGDocument，顶层文档对象     |
| 10         | DOCUMENT_TYPE_NODE          | DOCTYPE  | `<!DOCTYPE html>`                   |
| 11         | DOCUMENT_FRAGMENT_NODE      | 文档碎片     | `document.createDocumentFragment()` |
| 12         | NOTATION_NODE               | 符号声明     | 符号声明，前端基本遇不到                        |
