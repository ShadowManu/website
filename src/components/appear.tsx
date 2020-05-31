import React, { useState, useEffect } from "react"

import { makeStyles, Theme } from "@material-ui/core"
import { CSSTransition } from "react-transition-group"

interface Props {
  duration?: number
  delay?: number
  children: React.ReactElement<any, any>
}

const Appear: React.FC<Props> = props => {
  const classes = useStyles(props)
  const isServer = typeof window !== "object"
  const [inProp, setInProp] = useState(isServer)

  useEffect(() => {
    const id = setTimeout(() => setInProp(true), props.delay)
    return () => clearTimeout(id)
  }, [])

  return (
    <CSSTransition
      in={inProp}
      appear
      timeout={props.duration + 1000}
      classNames={classes}
    >
      {inProp
        ? props.children
        : React.cloneElement(props.children, { style: { opacity: 0 } })}
    </CSSTransition>
  )
}

Appear.defaultProps = {
  duration: 500,
  delay: 0,
}

const useStyles = makeStyles<Theme, Props>({
  enter: {
    opacity: 0,
    transform: "translateX(30px)",
  },
  enterActive: {
    opacity: 1,
    transform: "translateX(0px)",
    transition: ({ duration }) => `all ${duration}ms ease-out`,
  },
})

export default Appear
