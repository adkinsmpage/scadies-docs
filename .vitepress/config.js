module.exports = {
    title: "Scadies",
    description: "快速、简便、安全的新一代动态博客系统",
    themeConfig: {
        // 导航栏配置
        nav: [
            { text: "Home", link: "/" },
            { text: "Guide", link: "/guide/" },
        ], //  左侧导航栏配置
        sidebar: {
            scadies: [
                {
                    text: "Scadies",
                    children: [
                        { text: "Get Started", link: "/guide/" },
                        { text: "Config", link: "/htmldocs/config" },
                    ],
                },
            ],
        },
    },
};
