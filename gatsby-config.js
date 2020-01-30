module.exports = {
    siteMetadata: {
        siteUrl: "https://adventure.ustwo.com",
        siteTitle: "ustwo Adventure",
        siteDescription:
            "Investing in creative companies, Differently — We help founders build businesses on top of strong culture, values and design.",
        siteImage: "https://adventure.ustwo.com/meta_image.png",
        twitter: "@ustwoadventure",
        name: "ustwo Adventure"
    },
    plugins: [
        "gatsby-plugin-linaria",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "ustwo Adventure",
                short_name: "ustwo Adventure",
                start_url: "/",
                display: "minimal-ui",
                icon: "./src/assets/favicon.png"
            }
        },
        "gatsby-plugin-sitemap",
        "gatsby-plugin-robots-txt",
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/components/layout.jsx")
            }
        },
        "gatsby-plugin-netlify",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-110109355-1",
                head: true,
                anonymize: true
            }
        },
        {
            resolve: "gatsby-plugin-mailchimp",
            options: {
                endpoint:
                    "https://ustwo.us15.list-manage.com/subscribe/post?u=01fc7ee99c29d28e16dc3776f&id=9e2f3ee259"
            }
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-eslint",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-plugin-canonical-urls",
            options: {
                siteUrl: "https://adventure.ustwo.com"
            }
        },
        {
            resolve: "gatsby-plugin-postcss",
            options: {
                postCssPlugins: [
                    require("postcss-custom-media")(),
                    require("postcss-subgrid")({ ieHack: false })
                ]
            }
        }
    ]
};
