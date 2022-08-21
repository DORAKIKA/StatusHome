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