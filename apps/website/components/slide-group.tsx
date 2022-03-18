import React from 'react';

import styled from '@emotion/styled';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

const DEFAULT_DURATION = 500;

const AppearAdapter: React.FC<{ className?: string; child: any }> = ({
  className,
  child,
}) => React.cloneElement(child, { className });

const Appear = styled(AppearAdapter)<{ duration: number; delay: number }>`
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

const SlideGroup: React.FC<Props> = ({
  duration = DEFAULT_DURATION,
  step = duration / 2,
  children,
}) => {
  return (
    <TransitionGroup appear component={null}>
      {React.Children.map(children, (child, i) => (
        <CSSTransition key={i} timeout={duration + step * i} classNames="slide">
          <Appear child={child} duration={duration} delay={step * i} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default SlideGroup;
