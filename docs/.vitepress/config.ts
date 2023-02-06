import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',

    lastUpdated: true,

    head: [
        [
            'script',
            {
                async: 'true',
                src: "https://www.googletagmanager.com/gtag/js?id=G-BFXZNR3013",
            },
        ],
        ['script', {}, 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "G-BFXZNR3013");'],
    ],

    themeConfig: {
        nav: [
            {text: 'Guide', link: '/guide'},
            {
                text: 'Dropdown Menu',
                items: [
                    {text: 'Item A', link: '/item-1'},
                    {text: 'Item B', link: '/item-2'},
                    {text: 'Item C', link: '/item-3'}
                ]
            }
        ],
        sidebar: [
            {
                text: 'Section Title A',
                collapsed: false,
                items: [
                    {text: 'Item A', link: '/item-a'},
                    {text: 'Item B', link: '/item-b'},
                ]
            },
            {
                text: 'Section Title B',
                collapsed: false,
                items: [
                    {text: 'Item C', link: '/item-c'},
                    {text: 'Item D', link: '/item-d'},
                ]
            }
        ]
    }
})