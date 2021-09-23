import React, { useMemo } from "react";

import { useWindowSize } from "../core/use-window-size";
import styled from "styled-components";

interface Props {
  rows: number;
  columns: number;
}

const random = <T extends {}>(opts: T[]): T => {
  const index = Math.floor(Math.random() * opts.length);
  return opts[index];
};

const buildElems = (n: number) =>
  Array(n)
    .fill(0)
    .map((_, key) => {
      // This defines in binary format which of the 4 corners are rounded
      const figure = random([1, 2, 4, 8, 7, 11, 13, 14]);

      const borderRadius = Array(4)
        .fill(0)
        .map((_, j) => ((figure >> j) & 1 ? "100%" : "0"))
        .join(" ");

      const background = random(["#121212", "#f44336"]);
      const opacity = random(["10%", "30%", "60%"]);

      return { style: { borderRadius, background, opacity }, key };
    });

const Root = styled.div<Props>`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.palette.background.default};

  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
`;

const Background = () => {
  const size = useWindowSize();

  const rows = Math.ceil((size?.height ?? 0) / 25);
  const columns = Math.ceil((size?.width ?? 0) / 25);
  const elems = useMemo(() => buildElems(rows * columns), [rows, columns]);

  return (
    <Root rows={rows} columns={columns}>
      {elems.map((elem, key) => (
        <div key={key} style={elem.style} />
      ))}
    </Root>
  );
};

export default Background;
