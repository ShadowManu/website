import React from "react"
import { Card, Box } from "@material-ui/core"
import { makeStyles, Theme, ThemeProvider } from "@material-ui/core/styles"

import classNames from "classnames"

import { theme } from "../core/theme"

import "typeface-roboto"
import "./shell.css"

interface Props {
  maxWidth?: string
  center?: boolean
  cardClassName?: string
}

const Shell: React.FC<Props> = props => {
  const classes = useStyles(props)

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={classes.box}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Card className={classNames(classes.card, props.cardClassName)}>
          {props.children}
        </Card>
      </Box>
    </ThemeProvider>
  )
}

const useStyles = makeStyles<Theme, Props>(theme => ({
  box: ({ center: centered }) => ({
    width: "100%",
    minHeight: "100vh",
    justifyContent: centered ? "center" : "flex-start",

    [theme.breakpoints.only("xs")]: {
      justifyContent: "flex-start",
    },
  }),
  card: ({ maxWidth, center: centered }) => ({
    margin: "0 auto",
    marginTop: centered ? 0 : theme.spacing(2),
    maxWidth: maxWidth,

    [theme.breakpoints.only("xs")]: {
      width: "100%",
      minHeight: "100vh",
      marginTop: 0,
    },
  }),
}))

Shell.defaultProps = {
  maxWidth: "750px",
  center: false,
}

export default Shell
