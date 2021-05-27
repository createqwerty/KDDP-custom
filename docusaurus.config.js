module.exports = {
  title: 'KX Driver Help',
  tagline: 'KYOCERA Webhelp',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/kyoicon.ico',
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
//    algolia: {
//      apiKey: 'YOUR_API_KEY',
//      indexName: 'YOUR_INDEX_NAME',
//    },
    navbar: {
      title: 'KX Driver Help',
      logo: {
        alt: 'KX Driver Help',
        src: 'img/kyologo.gif',
      },
      items: [],
    },
	hideableSidebar: true,
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()}.`,
    },
	colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        lightIcon: '○',
        darkIcon: '●',
        darkIconStyle: {
          color: '#f4f4f4'
        },
        lightIconStyle: {
          color: '#f4f4f4'
        }
      }
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // In order to display a link to edit your documents, please change this value.
          // Refer to Docusaurus v2 documentation for more info.
          // editUrl: 'http://easydita.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
        indexDocs: true,
        docsRouteBasePath: '/',
        indexDocSidebarParentCategories: 3,
        indexPages: false,
        language: "en"
    }]
  ],
};
