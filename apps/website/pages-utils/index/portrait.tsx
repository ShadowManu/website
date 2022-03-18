import Image from 'next/image';

import styled from '@emotion/styled';

import portrait from '../../public/portrait.jpg';

const PortraitImage = styled(({ className }: { className?: string }) => (
  <Image className={className} layout="fill" src={portrait} alt="Portrait" />
))`
  object-fit: cover;
  object-position: 49% 27%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  transition: filter 300ms ease;
  filter: grayscale(100%);
  &:hover {
    filter: none;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 40vh;
  }
`;

const Portrait = () => (
  <Wrapper>
    <PortraitImage />
  </Wrapper>
);

export default Portrait;
