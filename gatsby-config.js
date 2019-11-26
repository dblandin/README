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
    `gatsby-transformer-remark`
  ]
}
