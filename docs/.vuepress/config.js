module.exports = {
    base: '/learn-vuepress/',
    host: 'localhost',
    title: 'VuePress',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: 'hero.png' }],
    ],
    themeConfig: {
        // logo: 'logo.png',
        // logoLink: 'https://yourdomain.com',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Config', link: '/config/' },
            { text: 'Plugin', link: '/plugin/' },
            {
                text: 'Learn More',
                ariaLabel: 'Learn More',
                items: [
                    {
                        text: 'API',
                        items: [
                            {
                                text: 'CLI',
                                link: '/api/cli.html'
                            },
                            {
                                text: 'Node',
                                link: '/api/node.html'
                            }
                        ]
                    },
                    {
                        text: 'Miscellaneous',
                        items: [
                            {
                                text: 'Migrate from 0.x',
                                link: '/miscellaneous/migration-guide.html'
                            },
                            {
                                text: 'Changelog',
                                link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                            }
                        ]
                    }
                ]
            },
            { text: 'GitHub', link: 'https://github.com/wahidari' }
        ],
        sidebar: {
            '/guide/': getGuideSidebar('Guide', 'Advanced'),
            '/plugin/': getPluginSidebar('Plugin', 'Introduction', 'Official Plugins'),
        },
        lastUpdated: 'Last Updated'
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/nprogress'],
        ['@vuepress/active-header-links'],
        ['@vuepress/last-updated'],
        ['@vuepress/medium-zoom', true],
        ['vuepress-plugin-smooth-scroll'],
        ['vuepress-plugin-reading-progress'],
        ['vuepress-plugin-element-tabs'],
        ['vuepress-plugin-container',
            {
                type: 'vue',
                before: '<pre class="vue-container"><code>',
                after: '</code></pre>'
            }
        ],
        ['vuepress-plugin-container',
            {
                type: 'right',
                defaultTitle: '',
            },
        ],
        ['vuepress-plugin-container',
            {
                type: 'theorem',
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ]
    ],
    markdown: {
        lineNumbers: true
    }
}

function getGuideSidebar(groupA, groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'getting-started',
                'directory-structure',
                'configuration',
                'asset-handling',
                'markdown',
                'using-vue-in-markdown',
                'deploying'
            ]
        },
        {
            title: groupB,
            collapsable: true,
            children: [
                'frontmatter',
                'permalinks',
                'markdown-slot',
                'global-computed'
            ]
        }
    ]
}

function getPluginSidebar(pluginTitle, pluginIntro, officialPluginTitle) {
    return [
        {
            title: pluginTitle,
            collapsable: false,
            children: [
                ['', pluginIntro],
                'using-a-plugin'
            ]
        },
        {
            title: officialPluginTitle,
            collapsable: false,
            children: [
                'plugin-active-header-links',
                'plugin-back-to-top',
                'plugin-last-updated',
                'plugin-medium-zoom',
                'plugin-nprogress',
                'plugin-search',
                'plugin-container',
                'plugin-reading-progress',
                'plugin-smooth-scroll',
                'plugin-element-tabs',
                'plugin-blog',
                'plugin-google-analytics',
                'plugin-pwa',
                'plugin-register-components'
            ]
        }
    ]
}