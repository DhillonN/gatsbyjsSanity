module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto:300,400,500,700', 'Lato:100,300,400,700']
        }
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '0eys726u',
        dataset: 'site',
        // a token with read permissions is required
        // if you have a private dataset
        token: "skBGXLZEDP1id8Z2UtrJ9dk4dr1vGZ9aPp7ArEMaouTeApTZDeVZ5YTpg6YtSJhIDRpwdrtOxNi9H8bgpu1gCZJ8K8tWfkQ2y5MZtLz5AdfSX47Hvc69ETnG1icDxJgNGQli9p3c7wEuPJbwEpsN3kHQk0Oq8xekpR0rNVJf3twKHjWvYALQ",
        overlayDrafts:'true',
        watchMode:'true',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
