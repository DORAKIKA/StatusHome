const LINKS = [
    {
        name: 'Akilar',
        link: "https://akilar.top",
        theme: '#ff8080',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/akilar.top.webp'
    },{
        name: 'Heo',
        link: "https://blog.zhheo.com",
        theme: '#425aef',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/blog.zhheo.com.webp'
    },{
        name: '贰猹',
        link: "https://noionion.top",
        theme: '#a153ff',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/noionion.top.webp'
    },{
        name: '小冰',
        link: "https://zfe.space",
        theme: '#b30070',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/zfe.space.webp'
    },{
        name: '御网尚书',
        link: 'https://www.siteweb.cn',
        theme: '#881B12',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/hack-gov.cn.webp',
    },{
        name: '黑石博客',
        link: 'https://www.heson10.com',
        theme: '#c61a26',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/heson10.com.webp',
    },{
        name: '陈YF',
        link: 'https://blog.cyfan.top',
        theme: '#f6b352',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/blog.cyfan.top.webp'
    },{
        name: '云游君',
        link: 'https://www.yunyoujun.cn',
        theme: '#0078e7',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/yunyoujun.cn.webp'
    },{
        name: 'Eurkon',
        link: 'https://blog.eurkon.com',
        theme: '#49b1f5',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/blog.eurkon.com.webp'
    },{
        name: 'Saiodgm',
        link: 'https://blog.saiodgm.gq',
        theme: '#99ebff',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/saiodgm.gq.webp'
    },{
        name: 'Gahotx',
        link: 'https://gahotx.cn',
        theme: '#9bd9b5',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/gahotx.cn.webp'
    },{
        name: 'Hassan',
        link: 'https://hassanwong.top',
        theme: '#81d8cf',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/hassanwong.top.webp'
    },{
        name: '欢乐小王',
        link: 'https://happyking.top',
        theme: '#e0f9fd',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/happyking.top.webp'
    },{
        name: '韩小韩',
        link: 'https://www.vvhan.com',
        theme: '#9999ff',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/vvhan.com.webp'
    },{
        name: 'UtopiaXC',
        link: 'https://blog.uropiaxc.cn',
        theme: '#d9a0ff',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/utopiaxc.cn.webp'
    },{
        name: '风渐远',
        link: 'https://www.naraku.cn',
        avatar: 'https://markdown-img-1303371957.cos.ap-nanjing.myqcloud.com/linksAvatar/naraku.cn.webp'
    },{
        name: 'Leonus',
        link: 'https://blog.leonus.cn',
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=553344777&s=5'
    },{
        name: '不予',
        link: 'https://www.shibuyu.fun',
        avatar: 'https://www.shibuyu.fun/logo'
    },{
        name: 'MrZeFr',
        link: 'https://blog.mrzefr.cn',
        avatar: 'https://cdn.afdelivr.top/npm/hexo-mrzefr-filebed@1.3.4/image/ICO/Doraemon.ico'
    },{
        name: 'Ethan.Tzy',
        link: 'https://tzy1997.com',
        theme: '#6f42c1',
        avatar: 'https://bu.dusays.com/2022/05/02/626f92e193879.jpg'
    },{
        name: 'LYX',
        link: 'https://yisous.xyz',
        avatar: 'https://yisous.xyz/img/avatar.jpg'
    }
]
const links = LINKS.map(link => {
    return {
        type: 'LinkCard',
        value: {
            name: link.name,
            icon: {
                type: 'image',
                value: link.avatar || ''
            }
        },
        link: link.link,
        theme: [link.theme]
    }
})
 

const CONFIG = {
    background: "url('https://dora-world.com/assets/images/wallpaper/PC_wallpaper_202207.png')",

    // 元数据：https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta/name
    meta: {
        author: 'DORAKIKA',
        keywords: 'DORAKIKA KIKA 主页 前端',
        description: 'DORAKIKA的个人主页',
    },
    // link: 可链接样式文件（以public文件夹为根目录）
    link: [
        {
            rel: 'icon',    // 网站图标
            href: 'https://blog.dorakika.cn/img/icon_k.png'
        }
    ],
    // 一些辅助功能
    use: {
        // 重定向(博客迁移可使用,末尾不要/)：https://dorakika.cn/xx => https://blog.dorakika.cn/xx
        redirect: {
            enabled: true,
            to: 'https://blog.dorakika.cn'
        },
        // 鼠标中键唤起status
        middleMouse: {
            enabled: true
        }
    },
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
                url: 'https://blog.dorakika.cn',
                icon: {
                    type: 'image',
                    value: 'https://blog.dorakika.cn/img/icon_k.png'
                },
                color: 'orange'
            },
            {
                name: 'GITHUB',
                url: 'https://github.com/dorakika/StatusHome',
                icon: {
                    type: 'class',
                    value: 'fab fa-github'
                },
                color: '#161b22'
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
                    value: 'https://blog.dorakika.cn/img/icon_k.png'
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
            theme: ['#161b22']
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
export default CONFIG