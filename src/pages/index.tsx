import React from "react";

import { Box, Divider, Typography } from "@material-ui/core";
import styled from "styled-components";
import media from "styled-media-query";

import Networks from "../components/networks";
import Portrait from "../components/portrait";
import SEO from "../components/seo";
import Shell, { PageCard } from "../components/shell";

const StyledShell = styled(Shell)`
  ${PageCard} {
    width: calc(100% - 96px);
    max-width: 750px;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;

    ${media.lessThan("medium")`
      flex-direction: column;
    `}

    ${media.lessThan("small")`
      width: 100%;
    `}
  }
`;

const StyledPortrait = styled(Portrait)`
  width: 30%;
  flex: 3;

  transition: filter 300ms ease;
  filter: grayscale(100%);
  &:hover {
    filter: none;
  }

  ${media.lessThan("medium")`
    width: 100%;
    height: 40vh;
    flex: none;
  `}
`;

const StyledBox = styled(Box)`
  padding: ${({ theme }) => theme.spacing(3)}px;
  flex: 7;
  box-sizing: border-box;
`;

const StyledDivider = styled(Divider).attrs(() => ({ variant: "middle" }))`
  margin: ${({ theme }) => theme.spacing(2)}px 0 !important;
`;

const Phrase = styled(Typography).attrs(() => ({ variant: "body1" }))`
  & + & {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`;

const StyledNetworks = styled(Networks)`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`;

const IndexPage = () => {
  return (
    <StyledShell centered>
      <SEO />

      <StyledPortrait />

      <StyledBox>
        <Typography variant="h5" component="h1">
          Manuel Pacheco
        </Typography>
        <Typography variant="subtitle1" component="p">
          Senior Software Engineer
        </Typography>

        <StyledDivider />

        <Phrase>5 years of experience making products for the web.</Phrase>
        <Phrase>
          I enjoy having a pragmatic but engineered approach to problem-solving,
          doing agile, and other popular buzzwords.
        </Phrase>
        <Phrase>Angular. React. Haskell. Biking. Video Games.</Phrase>

        <StyledNetworks />
      </StyledBox>
    </StyledShell>
  );
};

export default IndexPage;
