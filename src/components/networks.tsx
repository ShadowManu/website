import React from "react";

import Tooltip, { TooltipProps } from "@material-ui/core/Tooltip";
import styled from "styled-components";

import GitHub from "@material-ui/icons/GitHub";
import Twitter from "@material-ui/icons/Twitter";
import Book from "@material-ui/icons/Book";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Email from "@material-ui/icons/Email";

// prettier-ignore
const items = [
  { name: "GitHub", url: "https://github.com/ShadowManu", icon: GitHub },
  { name: "Twitter", url: "https://twitter.com/shadow_manu", icon: Twitter },
  { name: "Medium", url: "https://medium.com/@manuelalejandropm", icon: Book },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/manuel-pacheco-22401569/", icon: LinkedIn },
  { name: "Email", url: "mailto:me@shadowmanu.com", icon: Email },
]

const Root = styled.div`
  max-width: 244px;
  padding-bottom: ${({ theme }) => theme.spacing(1)}px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const TooltipAdapter: React.FC<TooltipProps & { className?: string }> = ({
  className,
  ...props
}) => {
  const tooltip = `${className}__tooltip`;

  return <Tooltip classes={{ tooltip }} {...props} />;
};

const StyledTooltip = styled(TooltipAdapter)`
  &__tooltip {
    margin: 0 !important;
  }
`;

const StyledIcon = styled.svg`
  &&& {
    width: 36px;
    height: 36px;
    color: ${({ theme }) => theme.palette.primary.main};
    flex-shrink: 0;
  }
`;

interface Props {
  className?: string;
}

const Networks: React.FC<Props> = ({ className }) => {
  return (
    <Root className={className}>
      {items.map(({ name, url, icon: Icon }) => (
        <StyledTooltip key={name} title={name} placement="bottom">
          <a href={url} target="_blank" rel="noreferrer noopener">
            <StyledIcon as={Icon} />
          </a>
        </StyledTooltip>
      ))}
    </Root>
  );
};

export default Networks;
