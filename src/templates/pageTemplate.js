import React from "react"
import { graphql } from "gatsby"

import { Box, Theme, injectGlobalStyles } from "@artsy/palette"
const { GlobalStyles } = injectGlobalStyles()

export default function Template({ data }) {
  return (
    <Theme>
      <>
        <GlobalStyles />
        <Box
          pt={40}
          width={800}
          m="0 auto"
          dangerouslySetInnerHTML={{ __html: data.file.childMarkdownRemark.html }}
        />
      </>
    </Theme>
  )
}

export const pageQuery = graphql`
  query($relativePath: String!) {
    file(relativePath: { eq: $relativePath }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
