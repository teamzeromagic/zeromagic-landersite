import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic"; 
import type * as OpenAPIPreset from "docusaurus-preset-openapi";
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';
import type {Options as BlogOptions} from '@docusaurus/plugin-content-blog';
import type {Options as PageOptions} from '@docusaurus/plugin-content-pages'

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
  baseUrlIssueBanner: true,

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
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */

      // "docusaurus-preset-openapi",
      // /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        // api: {
        //   path: "api/openapi-cos.json",
        //   routeBasePath: "api",

        // },

        docs: { 
          sidebarPath: require.resolve('./sidebars.ts'), 
          routeBasePath : "/",
          exclude: ['**/*.wip'], 
          breadcrumbs: true, 
          // docItemComponent: "@theme/ApiItem",
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          versions: {
              current: {
                label: `current`,
              },
            },
          },
  
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 5,   
          blogTitle: 'Zeromagic blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 10, 
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
        } satisfies BlogOptions,
        theme: {
          customCss: "./src/css/custom.css",
        }, 
    }) satisfies Preset.Options,
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

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'learn',
        routeBasePath: 'learn',
        sidebarPath: './sidebarsLearn.ts', 
        docItemComponent: require.resolve('./src/components/CustomDocItem/index.tsx'),
      },
    ], 



  
    // [
    //   'docusaurus-plugin-openapi',
    //   {
    //     id: 'trains', 
    //     path: 'examples/petstore.yaml',
    //     routeBasePath: '/trains', 
    //   },
    // ], 

    // [
    //   'docusaurus-plugin-openapi-docs',
    //   {
    //     id: "api", // plugin id
    //     docsPluginId: "classic", // id of plugin-content-docs or preset for rendering docs
    //     config: {
    //       petstore: { // the <id> referenced when running CLI commands
    //         specPath: "examples/petstore.yaml", // path to OpenAPI spec, URLs supported
    //         outputDir: "api/petstore", // output directory for generated files
    //         sidebarOptions: { // optional, instructs plugin to generate sidebar.js
    //           groupPathsBy: "tag", // group sidebar items by operation "tag"
    //         },
    //       },
    //       burgers: {
    //         specPath: "examples/food/burgers/openapi.yaml",
    //         outputDir: "api/food/burgers",
    //       }
    //     }
    //   },
    // ]
     
  ],
  // themes: ['@docusaurus/theme-classic'],
  // themes: ["docusaurus-theme-openapi-docs"],

  themeConfig: {
    // Replace with your project's social card
    // image: "img/docusaurus-social-card.jpg",
    navbar: {
      hideOnScroll: false,
      title: '',
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
          to: '/learn/support',
          label: 'Learn',
          position: 'left',  
        },

        // { to: "/api", label: "API References", position: "left" },


        {
          type: 'search', 
          position: 'right',
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
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
