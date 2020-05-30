import React from "react"

import { Box, Divider, Typography as Text } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Fade from "react-reveal/Fade"

import Portrait from "../components/portrait"
import SEO from "../components/seo"
import Shell from "../components/shell"
import Networks from "../components/networks"

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
          <Text variant="subtitle1" component="p">
            Senior Software Engineer
          </Text>
        </Fade>
        <Divider variant="middle" className={classes.divider}></Divider>
        <Text variant="body1">
          5 years of experience making products for the web.{" "}
        </Text>
        <Text variant="body1" className={classes.spaced}>
          I enjoy having a pragmatic but engineered approach to problem-solving,
          doing agile, and other popular buzzwords.
        </Text>
        <Text variant="body1" className={classes.spaced}>
          Angular. React. Haskell. Biking. Video Games.
        </Text>
        <Networks className={classes.networks} />
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
    width: "300px",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      height: "60vh",
    },
  },
  content: {
    padding: theme.spacing(3),
    width: "100%",
    boxSizing: "border-box",
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
  spaced: {
    marginTop: theme.spacing(1),
  },
  networks: {
    marginTop: theme.spacing(2),
  },
}))

export default IndexPage
