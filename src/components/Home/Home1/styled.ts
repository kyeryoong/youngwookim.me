import Spline from '@splinetool/react-spline';
import styled from 'styled-components';

export const HomeWrapper = styled('div')`
  width: 100vw;
  height: 100dvh;
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  overflow: hidden;
`;

export const SplineObject = styled(Spline)`
  width: 34vw !important;
  height: 34vw !important;
  background-color: transparent !important;
  position: absolute;
  top: calc(50dvh - 17vw + 2vw);
  left: 12.3vw;
  z-index: 100;
  opacity: 0;
  transform: scale(0);
  animation: fadeIn 2s forwards;
  animation-delay: 1.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  canvas {
    width: 34vw !important;
    height: 34vw !important;
    background-color: transparent !important;
  }
`;

export const Text = styled('h1')`
  font-size: 21vw;
  font-weight: 600;
  width: 100vw;
  height: 30vw;
  line-height: 30vw;
  text-align: center;
  letter-spacing: -0.5vw;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: calc(50dvh - 15vw);
  transform: scale(2);
  opacity: 0;
  animation: zoomIn 2s forwards;

  @keyframes zoomIn {
    0% {
      transform: scale(2);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const TextGradient = styled('div')`
  width: calc(100vw);
  height: 30vw;
  line-height: 30vw;
  position: absolute;
  top: calc(50dvh - 15vw);
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? `linear-gradient(120deg, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.98) 100%)`
      : `linear-gradient(120deg, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.98) 100%)`};
  transition: 0.5s;
`;
