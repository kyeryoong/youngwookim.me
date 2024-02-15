'use client';

import styled from 'styled-components';

export const BackgroundWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: FadeIn;
  animation-duration: 1s;
  animation-delay: 1s;
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
  z-index: 2;
`;

export const Asterisk = styled('video')`
  width: 30vw;
  height: 30vw;
  position: fixed;
  bottom: 5vw;
  left: -5vw;
  z-index: 1;
`;

export const ComponentSymbol = styled('video')`
  width: 32vw;
  height: 24vw;
  position: fixed;
  top: -5vw;
  right: -5vw;
  z-index: 1;
`;

export const ArrowFunction = styled('video')`
  width: 50vw;
  height: 25vw;
  position: fixed;
  bottom: -5vw;
  right: 5vw;
  z-index: 1;
`;
