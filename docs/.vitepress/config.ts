import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',

    lastUpdated: true,

    themeConfig: {
        nav: [
            { text: 'Guide', link: '/guide' },
            {
                text: 'Dropdown Menu',
                items: [
                    { text: 'Item A', link: '/item-1' },
                    { text: 'Item B', link: '/item-2' },
                    { text: 'Item C', link: '/item-3' }
                ]
            }
        ],
        sidebar: [
            {
                text: 'Section Title A',
                items: [
                    { text: 'Item A', link: '/item-a' },
                    { text: 'Item B', link: '/item-b' },
                ]
            },
            {
                text: 'Section Title B',
                items: [
                    { text: 'Item C', link: '/item-c' },
                    { text: 'Item D', link: '/item-d' },
                ]
            }
        ]
    }
})