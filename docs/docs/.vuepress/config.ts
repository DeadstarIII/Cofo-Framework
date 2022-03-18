import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export = defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "Cofo Framework",
  themeConfig: {
    enableDarkMode: true,
    repo: "https://github.com/Cofo-Bot/Framework",
    logo: "https://cdn.apidev234.wtf/cofo-logo.png",
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "API", link: "/api/" },
    ],
    sidebar: [
      {
        title: "Getting Started",
        collapsable: false,
        children: [
          ["/guide/", "Introduction"]
        ]
      },
      {
        title: "Guide",
        collapsable: false,
        children: [
          ["/guide/creating-a-new-project", "Creating a new project"],
          ["/guide/creating-a-new-command", "Creating a new command"],
          ["/guide/creating-a-new-listener", "Creating a new listener"]
        ]
      },
      {
        title: "API",
        collapsable: false,
        children: [
          ["/api/", "Exports"],
        ]
      },
      {
        title: "Classes",
        collapsable: true,
        children: [
          ["/api/classes/CofoClient", "CofoClient"],
          ["/api/classes/Command", "Command"],
          ["/api/classes/Embed", "Embed"],
          ["/api/classes/Listener", "Listener"],
        ]
      }
    ],
    codeSwitcher: {
      groups: {
        default: { ts: 'TypeScript', js: 'JavaScript' },
        'plugin-usage': { tuple: 'Tuple', object: 'Object' },
      }
    }
  },
}));
