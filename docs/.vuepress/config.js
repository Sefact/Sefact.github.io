module.exports = {
    title: "Vuepress",
    description: "Description",
    head: [
        [
            "script",
            {
                async: true,
                src: "https://www.googletagmanager.com/gtag/js?id=G-BFXZNR3013",
            },
        ],
        ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BFXZNR3013');"]],
    ],
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about/" },
        ],
        sidebar: [
            {
                title: 'Group 1',
                children: [ '/' ],
                collapsable: true,
            },
            {
                title: 'Group 2',
                children: [ '/' ],
                collapsable: true,
            }
        ]
    },
    plugins: [["sitemap", { hostname: "https://sefact.github.io/" }]]
};