/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Banizzo`,
    description: `Banizzo website use gatsby with tailwind`,
    author: `@nhuphuoc`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    font: "https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `oqg1yk0wr6no`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
