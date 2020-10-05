exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const paletteTemplate = require.resolve(`./src/templates/Palette.js`)
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              id
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.id,
      component: paletteTemplate,
      context: {
        // additional data can be passed via context
        id: node.frontmatter.id,
      },
    })
  })
}