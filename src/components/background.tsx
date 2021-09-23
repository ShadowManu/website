import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  0% { background-position: 0% 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0% 50%; }
`;

const rotate = keyframes`
  0% { filter: hue-rotate(0deg); }
  25% { filter: hue-rotate(-30deg); }
  50% { filter: hue-rotate(0deg); }
  75% { filter: hue-rotate(30deg); }
	100% { filter: hue-rotate(0deg); }
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100vh;

  // Inspired by Manuel Pinto
  // See more at https://codepen.io/P1N2O/pen/pyBNzX
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;

  animation: ${gradient} 15s linear infinite, ${rotate} 10s linear infinite;
`;

export default Background;
