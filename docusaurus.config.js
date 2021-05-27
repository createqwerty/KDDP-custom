module.exports = {
  "title": "KX Driver Help",
  "tagline": "KYOCERA Webhelp",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/kyoicon.ico",
  "organizationName": "KYOCERA",
  "projectName": "kyowebhelp",
  "themeConfig": {
    "navbar": {
      "title": "KX Driver Help",
      "logo": {
        "alt": "KX Driver Help",
        "src": "img/kyologo.gif"
      }
    },
    "hideableSidebar": true,
    "footer": {
      "style": "dark",
      "copyright": "Copyright © 2021 KYOCERA"
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
  "plugins": 
	  [require.resolve('docusaurus-lunr-search')]
  ,
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "blog": false,
        "pages": false,
        "docs": {
          "sidebarPath": "./sidebars.js",
          "path": "./docs",
          "routeBasePath": "/"
        },
        "theme": {
          "customCss": "/src/css/custom.css"
        }
      }
    ]
  ]
};