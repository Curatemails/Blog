module.exports = {
  siteMetadata: {
    title: `Marketing with Email Signatures`,
    name: `Curatemails`,
    siteUrl: `https://blog.curatemails.com`,
    description: `Marketing with Email Signatures`,
    hero: {
      heading: `Marketing with Email Signatures.`,
      maxWidth: 800,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/curatemails`,
      },
      // {
      //   name: `github`,
      //   url: `https://github.com/narative`,
      // },
      // {
      //   name: `instagram`,
      //   url: `https://instagram.com/narative.co`,
      // },
      // {
      //   name: `linkedin`,
      //   url: `https://www.linkedin.com/company/narative/`,
      // },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          //contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
