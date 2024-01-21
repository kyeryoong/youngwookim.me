'use client';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';

export const BackgroundWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: FadeIn;
  animation-duration: 1s;
  animation-delay: 3s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const Heading = styled('span')`
  font-size: 20vw;
  font-weight: 600;
  font-family: 'Poppins';
  white-space: nowrap;
  background: -webkit-linear-gradient(
    -90deg,
    rgba(50, 150, 250, 0.3) 30%,
    rgba(50, 150, 250, 0.7) 70%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 3px transparent;
`;

export const SplineComponents = styled(Spline)`
  position: fixed;
  transform: translateY(0px);
  animation-name: Floating;
  animation-duration: 4s;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

  @keyframes Floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-50px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export const ToggleButton = styled(SplineComponents)`
  width: 35vw !important;
  height: 35vw !important;
  bottom: 0vw;
  left: -5vw;
`;

export const ComponentSymbol = styled(SplineComponents)`
  width: 25vw !important;
  height: 25vw !important;
  top: -5vw;
  right: 20vw;
`;

export const Computer = styled(SplineComponents)`
  width: 35vw !important;
  height: 35vw !important;
  bottom: -10vw;
  right: 0vw;
`;
