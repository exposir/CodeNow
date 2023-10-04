export default {
    lang: 'zh-ZH',
    title: '即刻编程',
    description: 'Just coding now.',
    siteTitle: 'Hello World',
    themeConfig: {
        nav: [
            { text: '首页', link: '/index' },
            { text: 'React 技术揭秘', link: '/pages/react-magic/理念篇' },
            { text: 'Changelog', link: 'markdown-examples' }
        ],
        sidebar: {
            '/pages/react-magic': {
                text: 'React 技术揭秘',
                items: [
                    { text: '理念篇', link: '/pages/react-magic/理念篇' },
                    { text: '架构篇', link: '/pages/react-magic/架构篇' },
                    { text: '实现篇', link: '/pages/react-magic/实现篇' },
                ]
            }
        },

        footer: {
            message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
        },
        search: {
            provider: 'local'
        }

    },
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],

}



