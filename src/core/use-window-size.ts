import { useState, useCallback } from "react";
import { useWindowEffect } from "./use-window-effect";

export interface Size {
  width: number;
  height: number;
}

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export const useWindowSize = () => {
  const [size, setSize] = useState<Size | undefined>(undefined);

  const effect = useCallback(() => {
    const update = () => setSize(getSize());

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useWindowEffect(effect);

  return size;
};
