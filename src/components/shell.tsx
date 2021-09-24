import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {
  ThemeProvider as MuiThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import styled, { ThemeProvider as SCThemeProvider } from "styled-components";
import media from "styled-media-query";

import { theme } from "../core/theme";
import Background from "./background";

import "typeface-roboto";
import "./shell.css";

interface Props {
  centered?: boolean;
  className?: string;
}

interface TProps {
  $centered?: boolean;
}

const Wrapper = styled(Box)<TProps>`
  position: relative;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ $centered }) => ($centered ? "center" : "flex-start")};

  ${media.lessThan("small")`
    justify-content: flex-start;
  `}
`;

export const PageCard = styled(Card)<TProps>`
  margin: 0 auto;
  margin-top: ${({ $centered, theme }) => ($centered ? 0 : theme.spacing(2))};

  ${media.lessThan("small")`
    width: 100%;
    min-height: 100vh;
    margin-top: 0;
  `}
`;

const Shell: React.FC<Props> = ({ centered = false, className, children }) => {
  return (
    <SCThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <Wrapper className={className} $centered={centered}>
          <Background />
          <PageCard $centered={centered}>{children}</PageCard>
        </Wrapper>
      </MuiThemeProvider>
    </SCThemeProvider>
  );
};

export default Shell;
