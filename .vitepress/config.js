module.exports = {
    title: "Scadies",
    description: "快速、简便、安全的新一代动态博客系统",
    plugins: [
        '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
        '@vuepress/back-to-top',          // 返回顶部插件
        '@vuepress/medium-zoom',          // 图片预览插件
        '@vuepress/nprogress',        //页面顶部进度条
    ],
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true,
        // 导航栏配置
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/" },
        ], //  左侧导航栏配置
        sidebar:{
            '/': getSidebar()
        }
    },
};


function getSidebar() {
    return [
        {
            text:'Scadies',
            children: [
                { text: 'Get Started', link: '/guide/' },
                { text: 'Config', link: '/guide/config' },
            ],
            sidebarDepth:3
        },
    ]
}
