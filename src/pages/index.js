import React from "react"

import { Theme, injectGlobalStyles } from "@artsy/palette"
const { GlobalStyles } = injectGlobalStyles()

export default function Template({ data }) {
  return (
    <Theme>
      <>
        <GlobalStyles />
        <h1>Hi</h1>
      </>
    </Theme>
  )
}
