export default {
  lang: "zh-ZH",
  title: "即刻编程",
  description: "编程从未如此容易",
  themeConfig: {
    nav: [
      { text: "首页", link: "/index" },
      { text: "JavaScript 教程", link: "/pages/react/引言" },
      { text: "React 教程", link: "/pages/react/引言" },
      { text: "React 技术揭秘", link: "/pages/react-magic/理念篇" },
      { text: "关于", link: "/pages/about" },
    ],
    sidebar: {
      "/pages/react-magic": {
        text: "React 技术揭秘",
        items: [
          { text: "理念篇", link: "/pages/react-magic/理念篇" },
          { text: "架构篇", link: "/pages/react-magic/架构篇" },
          { text: "实现篇", link: "/pages/react-magic/实现篇" },
        ],
      },
      "/pages/reac": {
        text: "React 教程",
        items: [
          { text: "引言", link: "/pages/react/引言" },
          { text: "环境准备", link: "/pages/react/环境准备" },
          { text: "JSX 简介", link: "/pages/react/JSX 简介" },
          { text: "组件和 Props", link: "/pages/react/组件和 Props" },
        ],
      },
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2019-present <a href="https://github.com/exposir">Expo</a>',
    },
    search: {
      provider: "local",
    },
  },
  head: [["link", { rel: "icon", href: "/react.svg" }]],
};
