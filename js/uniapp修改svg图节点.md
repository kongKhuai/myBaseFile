```
/**
		 * 方式一、前端找对应的text标签进行设置的
		 * 重要用户设置用户名称
		 * userName是用来展示的名称
		 * powerLineVoList是图上对应的线路
		 */
		imurSvgSetUserName() {
			let { userName, powerLineVoList = [] } = this.powerSupplyStationInfo
			console.log(userName, powerLineVoList);
			if (!userName || !powerLineVoList || !powerLineVoList.length) {
				return
			}
			// 获取 SVG 的实际高度
			const svgHeight = this.facSvg.getBoundingClientRect().height;
			// 获取所有的<text>有keyid的元素
			const textElements = this.facSvg.querySelectorAll('text')
			const polylineElements = this.facSvg.querySelectorAll('polyline')
			const filterKeyid = Array.from(textElements).filter(textElement => {
				const keyid = textElement.getAttribute('keyid')
				if (keyid && keyid.length > 10) {
					textElement.style.writingMode = 'horizontal-tb';
				}
				return keyid
			});
			const userNameSite = []
			powerLineVoList.forEach(v => {
				const filteredElements = filterKeyid.filter(textElement => {
					const keyid = textElement.getAttribute('keyid');
					return keyid ? keyid.startsWith(v) : false
				});
				// 输出过滤后的元素
				if (!filteredElements.length) return
				// y小的在前面
				const texts = filteredElements.sort((a, b) => {
					const aY = a.getAttribute('y');
					const bY = b.getAttribute('y');
					return Number(aY) - Number(bY)
				})
				// 找下对应的线
				const polylineNode = Array.from(polylineElements).find(item => {
					const keyid = item.getAttribute('keyid');
					return keyid ? keyid.startsWith(v) : false
				})
				if (polylineNode) {
					polylineNode.setAttribute('stroke', '#36E8E2')
				}
				// 对应的text标签的高度
				const y = parseFloat(texts[0].getAttribute('y'));
				const textIsTop = y < svgHeight / 2
				// console.log(textIsTop, textIsTop ? '文本节点位于上半部分' : '文本节点位于下半部分')
				let targetText = textIsTop ? texts[0] : texts[texts.length - 1]
				// 复制节点 修改复制节点的 y 值 和id 
				const clonedNode = targetText.cloneNode(true);
				let newYValue = parseFloat(clonedNode.getAttribute('y')) + (textIsTop ? -20 : 64);
				userNameSite.push([parseFloat(clonedNode.getAttribute('x')), newYValue])
				clonedNode.setAttribute('y', newYValue);
				clonedNode.setAttribute('fill', '#36E8E2');
				clonedNode.setAttribute('id', this.$u.guid());
				clonedNode.setAttribute('keyid', '');
				clonedNode.textContent = userName;
				//将复制的节点添加到原始节点的同级
				targetText.parentNode.appendChild(clonedNode);
			})
			console.log('userNameSite', userNameSite);
		},
	/**
		 * 方式二、后端返回的svg图片中需要设置颜色和展示用户名称的线路标签和text标签上有XX标识
		 * 重要用户设置用户名称
		 * userName是用来展示的名称
		 * powerLineVoList是图上对应的线路
		 */
		imurSvgSetUserName2() {
			let { userName, powerLineVoList = [] } = this.powerSupplyStationInfo
			if (!userName || !powerLineVoList || !powerLineVoList.length) {
				return
			}
			const markText = 'keyid' //svg图上有记录电源站线路id的字段名
			const markColor = '#36E8E2' //给需要设置的线路和文字定义的颜色
			// 获取所有的<text>有keyid的元素
			const textElements = this.facSvg.querySelectorAll('text')
			const textFilterAfter = Array.from(textElements).filter(textElement => {
				const keyid = textElement.getAttribute('keyid')
				//普通文字标签没有keyid属性 这里是使用keyid区分需要设置数值的text标签，避免数值竖向展示造成堆叠的问题
				if (keyid && keyid.length > 20) {
					textElement.style.writingMode = 'horizontal-tb';
				}
				return keyid
			});
			const polylineElements = this.facSvg.querySelectorAll('polyline')
			const polylineFilterAfter = Array.from(polylineElements).filter(polylineElement => {
				const keyid = polylineElement.getAttribute('keyid')
				return keyid
			});
			powerLineVoList.forEach(v => {
				// 找下对应的text标签
				textFilterAfter.forEach(textElement => {
					if (textElement.getAttribute(markText) === v) {
						// console.log('目标text标签', textElement);
						textElement.setAttribute('fill', markColor);
						textElement.textContent = userName;
					}
				});
				// 找下对应的线
				polylineFilterAfter.forEach(polyline => {
					if (polyline.getAttribute(markText).startsWith(v)) {
						// console.log('目标polyline标签', polyline);
						polyline.setAttribute('stroke', markColor)
					}
				})
			})
		},
```