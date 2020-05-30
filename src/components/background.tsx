import React from "react"

import { makeStyles, Theme } from "@material-ui/core/styles"

import { useWindowSize } from "../core/use-window-size"

interface Props {
  rows: number
  columns: number
}

const random = <T extends {}>(opts: T[]): T => {
  const index = Math.floor(Math.random() * opts.length)
  return opts[index]
}

const buildElems = (n: number) =>
  Array(n)
    .fill(0)
    .map(() => {
      const option = random([1, 2, 4, 8, 7, 11, 13, 14])

      const borderRadius = Array(4)
        .fill(0)
        .map((_, j) => ((option >> j) & 1 ? "100%" : "0"))
        .join(" ")

      const dir = `${Math.floor(Math.random() * 8) * 45}deg`
      // const colors = ["#121212", "#f44336", "#ff7d12"]
      const colors = ["#121212", "#f44336"]

      const background = random(colors)
      // const background = `linear-gradient(${dir}, ${start} 0%, ${end} 100%)`
      const opacity = random(["10%", "30%", "60%"])

      return { style: { borderRadius, background, opacity } }
    })

const Background = () => {
  const size = useWindowSize()
  const rows = Math.ceil(size.height / 25)
  const columns = Math.ceil(size.width / 25)

  return <PureBackground rows={rows} columns={columns} />
}

// This is split so the elems building only happens
// when the rows or columns change, as a perf optimization
const PureBackground = React.memo((props: Props) => {
  const classes = useStyles(props)
  const elems = buildElems(props.rows * props.columns)

  return (
    <div className={classes.root}>
      {elems.map(elem => (
        <div style={elem.style}></div>
      ))}
    </div>
  )
})

const useStyles = makeStyles<Theme, Props>(theme => ({
  root: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    background: theme.palette.background.default,

    display: "grid",
    gridTemplateColumns: props => `repeat(${props.columns}, 1fr)`,
    gridTemplateRows: props => `repeat(${props.rows}, 1fr)`,
  },
  item: {},
}))

export default Background
