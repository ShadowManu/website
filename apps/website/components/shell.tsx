import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import Background from './background';

const VALID_FORWARD = { shouldForwardProp: isPropValid };

const MainContainer = styled(Box, VALID_FORWARD)<{ centered?: boolean }>`
  position: relative;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    justify-content: flex-start;
  }
`;

export const PageCard = styled(Card, VALID_FORWARD)<{ centered?: boolean }>`
  margin: 0 auto;
  margin-top: ${({ centered, theme }) => (centered ? 0 : theme.spacing(2))};
  max-width: calc(100vw - 96px);

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    max-width: 100%;
    min-height: 100vh;
    margin-top: 0;

    border-radius: 0;
  }
`;

interface Props {
  centered?: boolean;
  className?: string;
}

const Shell: React.FC<React.PropsWithChildren<Props>> = ({
  centered = false,
  className,
  children,
}) => {
  return (
    <MainContainer className={className} centered={centered}>
      <Background />
      <PageCard centered={centered}>{children}</PageCard>
    </MainContainer>
  );
};

export default Shell;
