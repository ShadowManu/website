import React, { useEffect } from "react";

export const useWindowEffect = (fn: React.EffectCallback) => {
  useEffect(() => {
    if (typeof window !== "object") return;

    return fn();
  }, [fn]);
};
