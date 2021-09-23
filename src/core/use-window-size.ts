import { useState, useEffect } from "react";

const isClient = () => typeof window === "object";

const getSize = () => {
  const client = isClient();

  return client
    ? {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    : undefined;
};

// See more at https://usehooks.com/useWindowSize/
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient()) return;

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
