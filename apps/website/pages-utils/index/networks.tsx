import React from 'react';

import styled from '@emotion/styled';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import Book from '@mui/icons-material/Book';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';

// prettier-ignore
const items = [
  { name: "GitHub", url: "https://github.com/ShadowManu", icon: GitHub },
  { name: "Twitter", url: "https://twitter.com/shadow_manu", icon: Twitter },
  { name: "Medium", url: "https://medium.com/@manuelalejandropm", icon: Book },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/manuel-pacheco-22401569/", icon: LinkedIn },
  { name: "Email", url: "mailto:contact@manuelpacheco.dev", icon: Email },
]

const Wrapper = styled.div`
  max-width: 244px;
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};

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
    <Wrapper className={className}>
      {items.map(({ name, url, icon: Icon }) => (
        <StyledTooltip key={name} title={name} placement="bottom">
          <a href={url} target="_blank" rel="noreferrer noopener">
            <StyledIcon as={Icon} />
          </a>
        </StyledTooltip>
      ))}
    </Wrapper>
  );
};

export default Networks;
