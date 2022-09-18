import React from 'react';

import styled from '@emotion/styled';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface AppearProps {
  duration: number;
  delay: number;
}

const Appear = styled('div')<AppearProps>`
  &.slide-appear {
    opacity: 0;
    transform: translateX(30px);
  }
  &.slide-appear-active {
    opacity: 1;
    transform: translateX(0px);

    transition: ${({ duration, delay }) => `all ${duration}ms ease ${delay}ms`};
  }
`;

interface Props {
  duration?: number;
  step?: number;
}

const DEFAULT_DURATION = 500;

const SlideGroup: React.FC<React.PropsWithChildren<Props>> = ({
  duration = DEFAULT_DURATION,
  step = duration / 2,
  children,
}) => {
  return (
    <TransitionGroup appear component={null}>
      {React.Children.map(children, (child, i) => (
        <CSSTransition key={i} timeout={duration + step * i} classNames="slide">
          <Appear duration={duration} delay={step * i}>
            {child}
          </Appear>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default SlideGroup;
