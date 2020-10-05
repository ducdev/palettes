/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms.js`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'palette',
        path: `${__dirname}/palette`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components'
  ],
}
