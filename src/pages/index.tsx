import React from "react"

import { Box, Typography as Text } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Fade from "react-reveal/Fade"

import Portrait from "../components/portrait"
import SEO from "../components/seo"
import Shell from "../components/shell"

const IndexPage = () => {
  const classes = useStyles()

  return (
    <Shell cardClassName={classes.shellCard} center>
      <SEO title="Home" />

      <Portrait className={classes.portrait} />

      <Box className={classes.content}>
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
}

const useStyles = makeStyles(theme => ({
  shellCard: {
    width: `calc(100% - 96px)`,
    maxWidth: "750px",
    boxSizing: "border-box",

    display: "flex",
    flexDirection: "row",

    [theme.breakpoints.only("xs")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  portrait: {
    width: "200px",
    height: "100%",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: "60vh",
    },
  },
  content: {
    padding: theme.spacing(2),
  },
}))

export default IndexPage
