module.exports = {
  title: "어제보다 조금 나아지기 위하여",
  description: "Description",
  head: [
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-BFXZNR3013",
      },
    ],
    [
      "script",
      {},
      [
        "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-BFXZNR3013');",
      ],
    ],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      // { text: "About", link: "/about/" },
    ],
    sidebar: [
      {
        title: "Algorithm",
        children: ["/algorithm/complexity"],
        sidebarDepth: 3,
        collapsable: true,
      },
      {
        title: "Python",
        children: ["/python/basic", "/python/basic2"],
        sidebarDepth: 3,
        collapsable: true,
      },
      {
        title: "Javascript",
        children: ["/javascript/replace"],
        sidebarDepth: 3,
        collapsable: true,
      },
      {
        title: "Utils",
        children: ["/utils/cwebp"],
        sidebarDepth: 3,
        collapsable: true,
      },
      {
        title: "Computer Science",
        children: ["/computer/ai"],
        sidebarDepth: 3,
        collapsable: true,
      },
      {
        title: "Privacy",
        children: ["/privacy/2022"],
        sidebarDepth: 3,
        collapsable: true,
      },
      // {
      //   title: "Group 2",
      //   children: ["/"],
      //   collapsable: true,
      // },
    ],
  },
  plugins: [["sitemap", { hostname: "https://sefact.github.io/" }]],
};
