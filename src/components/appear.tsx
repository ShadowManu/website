import React, { useState, useEffect } from "react";

import { makeStyles, Theme } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";

interface Props {
  duration?: number;
  delay?: number;
  children: React.ReactElement<any, any>;
}

const Appear: React.FC<Props> = (props) => {
  const classes = useStyles(props);
  const [inProp, setInProp] = useState(true);
  const [style, setStyle] = useState<any>();

  useEffect(() => {
    const isClient = typeof window === "object";

    if (isClient) {
      setInProp(false);
      setStyle({ opacity: 0 });

      const id = setTimeout(() => {
        setInProp(true);
        setStyle(undefined);
      }, props.delay);

      return () => clearTimeout(id);
    }
  }, []);

  return (
    <CSSTransition
      in={inProp}
      appear
      timeout={(props.duration ?? 0) + 1000}
      classNames={classes}
    >
      {React.cloneElement(props.children, { style })}
    </CSSTransition>
  );
};

Appear.defaultProps = {
  duration: 500,
  delay: 0,
};

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
});

export default Appear;
