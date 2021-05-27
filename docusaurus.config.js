module.exports = {
  "title": "KX Driver Help",
  "tagline": "KYOCERA Webhelp",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/kyoicon.ico",
  "organizationName": "your-org",
  "projectName": "docusaurus",
  "themeConfig": {
    "navbar": {
      "title": "KX Driver Help",
      "logo": {
        "alt": "KX Driver Help",
        "src": "img/logo.gif"
      },
      "items": []
    },
    "hideableSidebar": true,
    "footer": {
      "style": "dark",
      "links": [],
      "copyright": "Copyright © 2021."
    },
    "colorMode": {
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "lightIcon": "○",
        "darkIcon": "●",
        "darkIconStyle": {
          "color": "#f4f4f4"
        },
        "lightIconStyle": {
          "color": "#f4f4f4"
        }
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "routeBasePath": "/",
          "sidebarPath": require.resolve('./sidebars.js')
        },
        "theme": {
          "customCss": require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  "plugins": [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        "indexDocs": true,
        "docsRouteBasePath": "/",
        "indexDocSidebarParentCategories": 3,
        "indexPages": false,
        "language": "en"
      }
    ]
  ]
};