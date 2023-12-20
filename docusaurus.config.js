const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "carefree-portable",
  url: "https://carefree0910.me",
  baseUrl: "/carefree-portable-doc/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "./img/favicon.ico",
  organizationName: "carefree0910", // Usually your GitHub org/user name.
  projectName: "carefree-portable-doc", // Usually your repo name.
  stylesheets: ["https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    algolia: {
      appId: "DK6J5K49I4",
      apiKey: "8a0b36d4b7129a8715d54ada6ba972f1",
      indexName: "carefree0910",
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    announcementBar: {
      id: "supportus",
      content:
        '⭐️ If you like carefree-portable, give it a star on <a target="_blank" href="https://github.com/carefree0910/carefree-portable">GitHub</a>! ⭐️',
    },
    navbar: {
      title: "📦️",
      items: [
        {
          to: "docs/getting-started",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/carefree0910/carefree-portable",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/getting-started",
            },
            {
              label: "Installation",
              to: "docs/getting-started/installation/",
            },
            {
              label: "Design Philosophy",
              to: "docs/reference/design-philosophy/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/carefree0910/carefree-portable",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/carefree0910",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} carefree-portable, carefree0910. Built with Docusaurus.`,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
