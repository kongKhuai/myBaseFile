
#### Image组件的基本使用
#####  1、设置图片数据源
`Image(src:string | PixelMap | Resource)`  src是资源路径

#使用string数据加载网络资源图片
```
image组件使用string数据加载网络图片时需要被授予网络请求权限
在module.json5文件中添加网络访问权限
"module":{
	"reqPermissions":[
		{"name":"ohos.permission.INTERNET"}
	]
}
```

#使用PixelMap数据加载图片 
`Image(PixelMapObject)`  二进制数据

#使用Resource数据加载图片
`Image($r('app.media,logo'))`  需要将图片添加到resource的media目录下

##### 2、设置图片大小
#使用number数据设置图片的大小时单位默认是：vp
```
Image($r('app.media,logo'))
	.wadth(80)
	.height(80)
```

#使用string数据设置图片的大小
```
Image($r('app.media,logo'))
	.wadth('80vp')
	.height('80vp')
```

#使用Resource数据设置图片的大小 ==推荐==

```
Image($r('app.media,logo'))
	.wadth($r('app.float.logo.image.size'))
	.height($r('app.float.logo.image.size'))

配置文件
{
"float":[
	{
		"name":"app.image.size",
		"value":"80vp"
	}
  ]
}
```

#### Text组件的基本使用

##### 1、设置文本内容
`Text(content?:string | Resource)` content是文本内容

#使用string数据设置文本内容
`Text('登录界面')`

#使用Resource数据设置文本内容 ==推荐==

```
Text($r('app.string.login_page'))

配置文件：定义字符串数据
{
"string":[
		{
			"name":"login_page",
			"value":"登录界面"
		}
	]
}
```
##### 2、设置文本大小
`Text(content?:string | Resource)` content是文本内容
#使用number数据设置文本大小单位默认_fp
```
Text('登录界面')
	.fontSize(24)
```

#使用string数据设置文本内容
```
Text('登录界面')
	.fontSize('24fp')
```

#使用Resource数据设置文本内容 ==推荐==

```
Text($r('app.string.login_page')).
	.fontSize($r('app.float.page_title_text_size'))

配置文件：定义字符串数据
{
"string":[
		{
			"name":"login_page",
			"value":"登录界面"
		}
	]
}
2
{
"float":[
	{
		"name":"page_title_text_size",
		"value":"24fp"
	}
  ]
}
```
##### 3、设置文本粗细 #fontWeight

#使用number数据设置文本粗细
```
Text('登录界面')
	.fontWeight(500)
```

#使用FontWeight枚举类型设置文本粗细
```
Text('登录界面')
	.fontWeight(FontWeight.Medium)
```
==FontWeight枚举类型

| 名称 | 说明 |
| ---- | ---- |
| Lighter | 字体较细 |
| NorMal | 字体粗细正常 |
| Regular | 字体粗细正常 |
| Medium | 字体粗细适中 |
| Bold | 字体较粗 |
| Bolder | 字体非常粗 |

##### 4、设置文本颜色 #fontColor

#使用number数据设置文本颜色
```
Text('登录界面')
	.fontColor(0x182431)
```

#使用string枚举类型设置文本颜色
```
Text('登录界面')
	.fontColor('#182431')
```
#使用Color枚举数据设置文本颜色
```
Text('登录界面')
	.fontColor(Color.Black)
```

#使用Resource枚举类型设置文本颜色 ==推荐==

```
Text('登录界面')
	.fontColor($r('app.color.title_text_color'))

配置文件
{
"color":[
		{
			"name":"title_text_color",
			"value":"#182431"
		}
	]
}
```


#### InputType组件基本使用
```
TextInput({placeholder:'账号'})
	.maxLength(11)
	.type(InputType.Number)
	...
	.onChange((value:string)=>{
		this.assount = value
	})
```
InputType枚举类型说明

| 名称 | 说明 | 效果图|
| ---- |---- | ----|
| Normal | 基本输入模式 | harmonyOs 你好|
| Password | 密码输入模式 | ******|
| Email | e-mail地址输入模式 | abcd@xxxx.com|
| Number | 纯数字输入模式 | 1234567890|
| PhoneNumber9+ | 电话号码输入模式 | 186*********|

#### Button按钮组件的基本使用

```
Button('登录',{type:ButtonType.Capsule})
	...
	.onClick(()=>{
		// 后续逻辑
	})
```

ButtonType枚举类型说明

| 名称 | 说明 | 
| ---- |---- |
| Normal | 普通按钮（默认不带圆角） | 
| Capsule | 胶囊型按钮（圆角默认为高度的一半） | 
| Circle | 圆形按钮 |


------

### Codelab:常用组件与布局

Column：沿垂直方向布局的内容使用
Row: 沿水平方向布局的内容使用
List: 常用设置页面使用list容器布局
Tabs: 首页使用Tabs容器进行页面切换
Grid:首页网格菜单使用grid容器进行布局
Swiper：首页通过swiper容器完成一组图片轮播效果