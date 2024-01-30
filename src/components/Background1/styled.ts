'use client';
import styled from 'styled-components';
import Image from 'next/image';

export const BackgroundWrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: FadeIn;
  animation-duration: 1s;
  animation-delay: 2s;
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

export const Graphics = styled(Image)`
  position: fixed;
  object-fit: contain;
  animation-name: Floating;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  transform: translateY(0px);

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

export const Toggle = styled(Graphics)`
  width: 50vw;
  height: 50vw;
  bottom: -7.5vw;
  left: -15vw;
`;

export const ToggleWrapper = styled(Toggle)`
  z-index: 100;
`;

export const ToggleSwitch = styled(Toggle)`
  z-index: 101;
`;

export const Computer = styled(Graphics)`
  width: 50vw;
  height: 50vw;
  bottom: -17.5vw;
  right: -10vw;
`;

export const Computer1 = styled(Computer)`
  z-index: 101;
  animation-name: FloatingAndFading;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  transform: translateY(0px);
  opacity: 0;

  @keyframes FloatingAndFading {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }

    25% {
      opacity: 1;
    }

    50% {
      transform: translateY(-50px);
      opacity: 0;
    }

    75% {
      opacity: 1;
    }

    100% {
      transform: translateY(0px);
      opacity: 0;
    }
  }
`;

export const Computer2 = styled(Computer)`
  z-index: 100;
`;

export const ArrowBracket = styled('video')`
  width: 25vw;
  height: 25vw;
  position: fixed;
  top: -5vw;
  right: 20vw;
  animation-name: Floating;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  transform: translateY(0px);
`;
