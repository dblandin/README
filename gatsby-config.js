module.exports = {
  siteMetadata: {
    title: `Artsy README`,
    description: `The documentation for being an Artsy Engineer`,
    author: `@artsy`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: __dirname
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [{ name: "en" }],
        fields: [
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "description", store: true, attributes: { boost: 5 } },
          { name: "content", store: true }
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody
          }
        },
        filename: "search_index.json"
      }
    }
  ]
}
