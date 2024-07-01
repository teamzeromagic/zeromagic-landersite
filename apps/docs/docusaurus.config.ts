import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic"; 
const path = require('path');

const config: Config = {
  title: "Zeromagic",
  tagline: "Build scalable backends at lightning speed!",
  favicon: "img/logo.svg",
  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  trailingSlash: true, 

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

 
  presets: [
    [
      // "classic",
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          // sidebarPath: "./sidebars.ts",
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath : "/",
          exclude: ['**/*.wip'],
          breadcrumbs: true,
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 5, 
          
          blogTitle: 'Zeromagic blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 10,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",

            feedOptions: {
              type: 'all',
              copyright: `Copyright © ${new Date().getFullYear()} Zeromagic`,
              createFeedItems: async (params) => {
                const {blogPosts, defaultCreateFeedItems, ...rest} = params;
                return defaultCreateFeedItems({
                  // keep only the 10 most recent blog posts in the feed
                  blogPosts: blogPosts.filter((item, index) => index < 2),
                  ...rest,
                });
              },
            },
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [ 
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({ 
        hashed: true,
        docsRouteBasePath : "/"         
      }),
    ],
  ],

  // // Global meta tags for SEO
  // headTags: [
  //   {
  //     tagName: 'meta',
  //     attributes: {
  //       name: 'robots',
  //       content: 'index, follow',
  //     },
  //   },
  //   {
  //     tagName: 'meta',
  //     attributes: {
  //       property: 'og:title',
  //       content: 'Your Site Title',
  //     },
  //   },
  //   {
  //     tagName: 'meta',
  //     attributes: {
  //       property: 'og:description',
  //       content: 'Your site description here',
  //     },
  //   },
  //   {
  //     tagName: 'meta',
  //     attributes: {
  //       property: 'og:url',
  //       content: 'https://your-site.com',
  //     },
  //   },
  // ],

  themeConfig: {
    // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      hideOnScroll: false,
      title: 'your site title',
      logo: {
        alt: 'Magic Logo',
        src: '/img/logo-full.svg',
        srcDark: '/img/logo_light.svg',
        href: 'https://zeromagic.in',
      },
      items: [
      { 
          type: "docSidebar" ,
          sidebarId: "magicSidebar",
          position: "left",
          label: "Documentation",
        },
 
        { 
          to: "/blog",
          label: 'Blog',
          position: 'left',
        }, 

        { 
          to: "/blog/tags/tutorial/",
          label: 'Tutorials',
          position: 'left',
        }, 

        {
          type: 'search',
          position: 'right',
        },
        // {
        //   href: 'https://github.com/hasura/graphql-engine',
        //   position: 'right',
        //   className: 'header-github-link',
        //   'aria-label': 'GitHub repository',
        // },
        {
          to: 'https://hasura.io/pricing/',
          label: 'Pricing',
          position: 'right',
        },
        {
          to: 'https://cloud.hasura.io/login?pg=docs&plcmt=header&cta=log-in&tech=default',
          label: 'Login',
          position: 'right',
          className: 'nav-link_login',
        },
        {
          to: 'https://cloud.hasura.io/signup?pg=products&plcmt=header&cta=get_started&tech=default',
          label: 'Get Started',
          position: 'right',
          className: 'nav-link_getting-started',
        },
      ],
    },
    // footer: {
    //   style: "light",
    //   copyright: `Copyright © ${new Date().getFullYear()} Zeromagic, Pvt. Ltd. Built with Docusaurus.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
   
  } satisfies Preset.ThemeConfig,

};

export default config;
