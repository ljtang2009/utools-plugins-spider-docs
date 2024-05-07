import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title:   'uTools 插件市场网络爬虫',
  tagline: '让 uTools 插件市场尽在掌握',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url:     'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks:         'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales:       ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath:   './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/ljtang2009/utools-plugins-spider-docs/',
        },
        blog:  false,  // Optional: disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image:  'img/social-card.png',
    navbar: {
      title: 'uTools 插件市场网络爬虫',
      logo:  {
        alt:     'uTools 插件市场网络爬虫 Logo',
        src:     'img/logo.png',
        srcDark: 'img/logo_dark.png',
      },
      items: [
        {
          type:      'docSidebar',
          sidebarId: 'tutorialSidebar',
          position:  'left',
          label:     '文档',
        },
        {
          href:     'https://github.com/facebook/docusaurus',
          label:    'GitHub',
          position: 'right',
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '文档',
              to:    '/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href:  'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear().toString()} uTools 插件市场网络爬虫, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme:           prismThemes.github,
      darkTheme:       prismThemes.dracula,
      defaultLanguage: 'javascript',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
