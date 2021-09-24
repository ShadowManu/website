import React from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Transition } from "react-transition-group";

import DelayBuilder from "./delay-builder";

interface Props {
  duration?: number;
  step?: number;
}

const TestAdapter: React.FC<{ className?: string; child: any }> = ({
  className,
  child,
}) => {
  return React.cloneElement(child, { className });
};

const Appear = styled(TestAdapter)<{ state: string; timeout: number }>`
  opacity: 0;
  transform: translateX(30px);

  ${(props) =>
    props.state === "entering" &&
    css`
      opacity: 1;
      transform: translateX(0px);
      transition: all ${props.timeout}ms ease;
    `}

  ${(props) =>
    props.state === "entered" &&
    css`
      opacity: 1;
      transform: none;
    `}
`;

const AppearGroup: React.FC<Props> = ({
  duration = 500,
  step = duration / 2,
  children,
}) => (
  <>
    {React.Children.map(children, (child, i) => (
      <DelayBuilder delay={step * i}>
        {(show) => (
          <Transition timeout={duration} in={show}>
            {(state) => (
              <Appear child={child} timeout={duration} state={state} />
            )}
          </Transition>
        )}
      </DelayBuilder>
    ))}
  </>
);

export default AppearGroup;
