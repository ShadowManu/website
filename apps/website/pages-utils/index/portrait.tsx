import styled from '@emotion/styled';

import portrait from '../../public/portrait.jpg';

const BasePortrait: React.FC<{ className?: string }> = ({ className }) => (
  <img className={className} src={portrait.src} alt="Portrait" />
);

const Portrait = styled(BasePortrait)`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: 49% 27%;

  transition: filter 300ms ease;
  filter: grayscale(100%);
  &:hover {
    filter: none;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 40vh;
  }
`;

export default Portrait;
