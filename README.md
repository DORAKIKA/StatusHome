# Vue+Vite搭建的个人主页

## 主页面

![image-20220821230553767](https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/image-20220821230553767.png)

## “状态栏”

![image-20220821233458312](https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/image-20220821233458312.png)

![image-20220821233540949](https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/image-20220821233540949.png)

## 配置说明

```js
const CONFIG = {
    background: '',	//css 中的background属性值，为全局背景
    
    siteInfo:{},	// 主页配置
    cards: [],		// 状态栏卡片
}
```

### 主页配置

```js
const siteInfo = {
    // 站点昵称
    site: 'DORAKIKA',
    // 站点描述
    desc: '热爱漫无边际，生活自有分寸！',
    // 头像
    avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&nk=1633198089&s=140',
    // 一些链接
    links: [
        {
            // 链接名
            name: '主页',
            // 链接路径
            url: '/',
            icon: {
                // 链接图标 => class则value绑定类名，image则绑定img标签src属性
                type: 'class',
                value: 'fas fa-home'
            },
            // 链接颜色
            color: '#386ade'
        }
    ]
}
```

### 状态栏配置

- 状态栏为卡片样式
- 下面数组形式的rowSize与colSize为卡片大小设置，分别在0-768px，768-1200px，1200px+显示对应的大小（总列数为12列，如上图DORAKIKA在1200+时占据3列，在0-768时占12列，行数无限制，每一行大概8em）

```js
const cards = [

    // 大字文本，如上图DORAKIKA、AGE：21等
    {
        type: 'BigText',
        value: 'DORAKIKA', // 文本值
        rowSize: [1, 1, 1],			// （可选）卡片纵向跨越列数
        colSize: [12, 6, 3],		// （可选）卡片横向跨越列数
        link: 'https://dorakika.cn',// （可选）设定后，卡片变为超链接
        theme: ['#386ade'],			// （可选）设定颜色，如上为蓝色DORAKIKA（hover后）
        callout: true				// （可选）为true则为"高亮"即hover后样式
    },
    // 一言API（https://developer.hitokoto.cn/）
    {
        type: 'Hitokoto',
        // 请求一言的分类
        value: {c: ['a','c']},
        rowSize: 1,
        colSize: [12, 6, 6],
        theme: ['rgb(137, 33, 255)']
    },
    // 图片卡片
    {
        type: 'ImageCard',
        // 图片地址
        value: 'https://dora-world.com/assets/images/wallpaper/PC_wallpaper_202207.png'
    },
    // 带图标的链接卡片（此时link为必选）
    {
        type: 'LinkCard',
        value: {
            icon: {
                type: 'image',
                value: 'https://dorakika.cn/img/icon_k.png'
            },
            name: '个人博客'
        },
        link: "https://dorakika.cn"
    },
    {
        type: 'LinkCard',
        callout: true,
        value: {
            icon: {
                type: 'class',
                value: 'fab fa-github'
            },
            name: 'GITHUB'
        },
        link: "https://dorakika.cn",
        theme: ['#161b22', '3em']
    },
    // 如下，横向占据列数始终为12，且callout为true，可做为一条横幅用于分割区域
    {
        type: 'BigText',
        value: '友情链接',
        rowSize: 1,
        colSize: [12, 12, 12],
        theme: ['#02c0a0'],
        callout: true
    },
    // LinkCard...
],
```



# 示例配置

```js
const LINKS = [
    {
        name: 'Akilar',
        link: "https://akilar.top",
        theme: '#ff8080'
    },{
        name: 'Heo',
        link: "https://blog.zhheo.com",
        theme: '#425aef'
    },{
        name: '贰猹',
        link: "https://noionion.top",
        theme: '#a153ff'
    },{
        name: '小冰',
        link: "https://zfe.space",
        theme: '#b30070'
    },
]
const links = LINKS.map(link => {
    return {
        type: 'LinkCard',
        value: {
            name: link.name
        },
        link: link.link,
        theme: [link.theme]
    }
})


const CONFIG = {
    background: "url('https://dora-world.com/assets/images/wallpaper/PC_wallpaper_202207.png')",

    siteInfo: {
        site: 'DORAKIKA',
        desc: '热爱漫无边际，生活自有分寸！',
        avatar: 'https://thirdqq.qlogo.cn/g?b=sdk&nk=1633198089&s=140',
        links: [
            {
                name: '主页',
                url: '/',
                icon: {
                    type: 'class',
                    value: 'fas fa-home'
                },
                color: '#386ade'
            },
            {
                name: '博客',
                url: 'https://dorakika.cn',
                icon: {
                    type: 'image',
                    value: 'https://dorakika.cn/img/icon_k.png'
                },
                color: 'orange'
            },
            {
                name: 'bilibili',
                url: 'https://bilibili.com/',
                icon: {
                    type: 'class',
                    value: 'fas fa-tv'
                },
                color: 'pink'
            }
        ]
    },

    cards: [
        // colSize: [0-768, 768-1200, 1200+]
        {
            type: 'BigText',
            value: 'DORAKIKA',
            // rowSize: [1, 1, 1],
            colSize: [12, 6, 3],
            link: 'https://dorakika.cn',
            theme: ['#386ade'],
            callout: true
        },{
            type: 'BigText',
            value: 'AGE: 21',
            // rowSize: [1, 1, 1],
            colSize: [12, 6, 3],
            theme: ['rgb(209, 154, 86)']
        },{
            type: 'Hitokoto',
            value: {c: ['a','c']},
            // rowSize: [1, 1, 1],
            colSize: [12, 6, 6],
            theme: ['rgb(137, 33, 255)']
        },{
            type: 'ImageCard',
            value: 'https://dora-world.com/assets/images/wallpaper/PC_wallpaper_202207.png',
            rowSize: [1, 1, 2],
            colSize: [12, 6, 4],
        },{
            type: 'LinkCard',
            value: {
                icon: {
                    type: 'image',
                    value: 'https://dorakika.cn/img/icon_k.png'
                },
                name: '个人博客'
            },
            link: "https://dorakika.cn"
        },{
            type: 'LinkCard',
            callout: true,
            value: {
                icon: {
                    type: 'class',
                    value: 'fab fa-github'
                },
                name: 'GITHUB'
            },
            link: "https://dorakika.cn",
            theme: ['#161b22', '3em']
        },{
            type: 'BigText',
            value: '友情链接',
            rowSize: 1,
            colSize: [12, 12, 12],
            theme: ['#02c0a0'],
            callout: true
        },
        ...links
    ],


};

window.CONFIG = CONFIG
```