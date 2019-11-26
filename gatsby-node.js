const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve(`src/templates/pageTemplate.js`)

  const result = await graphql(`
    {
      allFile(filter: { extension: { eq: "md" } }) {
        edges {
          node {
            relativePath
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

  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.relativePath,
      component: pageTemplate,
      context: {
        relativePath: node.relativePath
      }
    })
  })
}
