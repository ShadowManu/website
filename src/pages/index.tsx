import React from "react"

import { Box, Typography as Text } from "@material-ui/core"
import Fade from "react-reveal/Fade"

import Portrait from "../components/portrait"
import SEO from "../components/seo"
import Shell from "../components/shell"

const IndexPage = () => (
  <Shell center>
    <SEO title="Home" />

    <Portrait />

    <Box p={2}>
      <Fade bottom>
        <Text variant="h5" component="h1">
          Manuel Pacheco
        </Text>
      </Fade>
      <Fade bottom>
        <Text variant="subtitle1" component="p">
          Senior Software Engineer
        </Text>
      </Fade>
    </Box>
  </Shell>
)

export default IndexPage
