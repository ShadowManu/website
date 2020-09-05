import React from "react"
import Tooltip from "@material-ui/core/Tooltip"

import GitHub from "@material-ui/icons/GitHub"
import Twitter from "@material-ui/icons/Twitter"
import Book from "@material-ui/icons/Book"
import LinkedIn from "@material-ui/icons/LinkedIn"
import Email from "@material-ui/icons/Email"

import { makeStyles } from "@material-ui/core/styles"
import classnames from "classnames"

interface Props {
  style?: React.CSSProperties
  className: string
}

// prettier-ignore
const items = [
  { name: "GitHub", url: "https://github.com/ShadowManu", icon: GitHub },
  { name: "Twitter", url: "https://twitter.com/shadow_manu", icon: Twitter },
  { name: "Medium", url: "https://medium.com/@manuelalejandropm", icon: Book },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/manuel-pacheco-22401569/", icon: LinkedIn },
  { name: "Email", url: "mailto:me@shadowmanu.com", icon: Email },
]

const Networks: React.FC<Props> = ({ style, className }) => {
  const classes = useStyles()

  return (
    <div style={style} className={classnames(classes.root, className)}>
      {items.map(({ name, url, icon: Icon }, i) => (
        <Tooltip
          key={name}
          title={name}
          placement="bottom"
          classes={{ tooltip: classes.tooltip }}
        >
          <a href={url} target="_blank" rel="noreferrer noopener">
            <Icon className={classes.icon} />
          </a>
        </Tooltip>
      ))}
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "244px",
    paddingBottom: theme.spacing(1),

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  tooltip: {
    margin: 0,
  },
  icon: {
    width: "36px",
    height: "36px",
    color: theme.palette.primary.main,
    flexShrink: 0,
  },
}))

export default Networks
