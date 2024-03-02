// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GitHub Copilot - Hands on Lab',
  tagline: 'xxxx',
  url: 'https://markharrison.io',
  baseUrl: '/lab-github-copilot/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'markharrison', // Usually your GitHub org/user name.
  projectName: 'markharrison.github.io', // Usually your repo name.
  trailingSlash: false,

  presets: [ 
    [      
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
/*           // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/', */
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-J96E5KV7Z6',
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mark Harrison',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logol.svg',
          srcDark: 'img/logod.svg',
          href: 'https://markharrison.io/',
          target: '_self',
        },
        items: [
          {
            position: 'left',
            label: 'Labs',
            to: 'https://markharrison.io/labs',
            target: '_self',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'GitHub Copilot - Hands on Lab',
          },
          {
            href: 'https://github.com/markharrison/lab-github-copilot',
            label: 'GitHub',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Twitter',
            href: 'https://twitter.com/azure1dev',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/markharrison',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/markharrison-uk/',
          }
        ],
        
        copyright: `Copyright © ${new Date().getFullYear()} Mark Harrison`,
      },
      prism: {
        additionalLanguages: ['json'],
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
