// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Paper's Delight",
  tagline: '给你的Paper/Folia服务器添加知名烹饪MOD《农夫乐事》的内容，由CraftEngine驱动。',
  favicon: 'img/pd_icon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Shimamura-Tako.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/PapersDelightDoc/',

  // GitHub pages deployment config.
  organizationName: 'Shimamura-Tako',
  projectName: 'PapersDelightDoc',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Shimamura-Tako/PapersDelightDoc/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Paper's Delight",
        logo: {
          alt: "Paper's Delight Logo",
          src: 'img/pd_icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/changelog', label: '更新日志', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '插件文档',
                to: '/',
              },
              {
                label: '更新日志',
                to: '/changelog',
              },
            ],
          },
          {
            title: '购买插件',
            items: [
              {
                label: 'MineBBS',
                href: 'https://www.minebbs.com/resources/17022/',
              },
              {
                label: '联络作者',
                href: 'https://shimamura-tako.github.io/PapersDelightDoc/#%E8%B4%AD%E4%B9%B0%E6%96%B9%E5%BC%8F',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '提交问题',
                href: 'https://github.com/Shimamura-Tako/PapersDelight-ISSUE-REPORT/issues',
              },
              {
                label: '文档仓库',
                href: 'https://github.com/Shimamura-Tako/PapersDelightDoc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Shimamura Tako. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
