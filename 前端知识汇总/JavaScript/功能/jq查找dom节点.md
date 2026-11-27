
```

`:scope` 伪类将匹配范围严格限制为当前元素的直接子节点，浏览器只需要检查 `g` 的 `children`，无需递归遍历深层后代。当 `g` 内部嵌套结构较深或节点较多时，这种差异会更明显。
g.querySelector(":scope > metadata")

`:scope` 本身表示"当前元素"（即调用 `querySelector` 的那个元素），`>` 是限制"仅直接子级"的**子组合器**。它们是两个独立的概念，只是常搭配使用
```
**1. `:has()` 伪类（现代浏览器支持）**
```
// 选择包含 .child 的父元素（从外部容器查）
document.querySelector("g:has(> metadata)");
```


**2. JavaScript 查找**
```
// 已知子元素，找直接父级
const parent = element.parentElement;

// 已知子元素，找最近的 g 祖先
const ancestor = element.closest("g");

// g 的直接子元素 metadata 
g.querySelector(":scope > metadata") 

// g 后面紧邻的同级 g 元素 
g.querySelector(":scope + g") 

// g 后面所有的同级 g 元素
g.querySelector(":scope ~ g") 
```



``` javascript

   // var pdoc = $($("iframe[id='月度检修计划']")[0].contentWindow.document).ready(function () {

        //  // 获取目标 iframe 的内容文档

        //  var targetDocument = $($("iframe[id='月度检修计划']")[0].contentWindow.document);

        //  // 在目标文档中查找 src 属性以特定字符串开头的 iframe 元素

        //  var iframe = $(targetDocument).find('iframe[src^="/bshms/dtsPlanEdit/html/planEditRiskAna.html"]');

        //  console.log("%c Line:897 🍿 iframe", "color:#6ec1c2", iframe);

        //  if (iframe.length > 0) {

        //      console.log("找到符合条件的 iframe:", iframe);

        //  } else {

        //      console.log("没有找到符合条件的 iframe");

        //  }

        // });

        var planEditRiskAnaIframe = $($("iframe[id='月度检修计划']")[0].contentWindow.document).find('iframe[src^="/bshms/dtsPlanEdit/html/planEditRiskAna.html"]')

        if (planEditRiskAnaIframe && planEditRiskAnaIframe[0]) {

            const rightDiv = $(planEditRiskAnaIframe[0].contentWindow.document).find('#rightDiv')

            const rightDivSvgPath = $(planEditRiskAnaIframe[0].contentWindow.document).find('#rightDiv').data('path')

            if (rightDiv && rightDivSvgPath) {

                const svgIframe = rightDiv.find(`iframe[src^="${rightDivSvgPath}"]`)

                if (svgIframe && svgIframe[0]) {

                    const nodeInfo = svgIframe[0].contentWindow.rtdbdataInfo[ckeyid]

                    // return $(svgIframe[0].contentWindow.document.getElementById('svgEmbed')

                    //  .getSVGDocument().documentElement).find('use[keyid=' + ckeyid + ']')

                    //  .attr('elecValue');

                    return nodeInfo?.elecValue || ''

                }

            }

        }
       
       $(

            $("iframe[id='" + stationName + "']")[0]

                .contentWindow.document.getElementById('svgEmbed')

                .getSVGDocument().documentElement

        )

            .find('use[keyid=' + ckeyid + ']')

            .attr('elecValue');
        
```