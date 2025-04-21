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