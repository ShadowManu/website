import React, { useCallback, useState } from "react";
import { useWindowEffect } from "../core/use-window-effect";

interface Props {
  delay: number;
  children: (show: boolean) => React.ReactElement<any, any> | null;
}

const DelayBuilder = ({ delay, children }: Props) => {
  const [show, setShow] = useState(true);

  const effect = useCallback(() => {
    if (show) setShow(false);

    const handle = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(handle);
  }, [delay]);

  useWindowEffect(effect);

  return children(show);
};

export default DelayBuilder;
