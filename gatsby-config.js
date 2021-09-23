module.exports = {
  siteMetadata: {
    title: `Manuel Pacheco`,
    description: `Senior Software Engineer. 5 years of experience making products for the web. Angular. React. Haskell. Biking. Video Games.`,
    author: `@ShadowManu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#121212`,
    //     theme_color: `#f44336`,
    //     display: `minimal-ui`,
    //     icon: `src/images/favicon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
